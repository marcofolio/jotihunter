function MapViewModel() {
	
	var vm = this;

	this.map;
	this.polygonsMarkers;
	this.autoMarkers = [];
	this.ctaLayer;
	this.vossenMarkers = [];
	this.loopgebiedCircles = [];
	this.huntMarkers = [];
	this.routePaths = [];
	this.displayTypes = ko.observableArray(["deelnemers", "vossen", "loopgebied", "route", "autos", "hunts"]);
	this.isShowingDeelnemers = true;
	this.isShowingVossen = true;
	this.isShowingRoute = true;
	this.isShowingAutos = true;
	this.isShowingHunts = true;

	this.displayTypes.subscribe(function(newVal) {
		
		var types = [
			{
				name : 'deelnemers',
				checkbool : 'isShowingDeelnemers',
				drawMethod : function() {
					vm.drawDeelnemers(vm.map);
				},
				clearMethod : function() {
					vm.clearDeelnemers();
				}
			},
			{
				name : 'vossen',
				checkbool : 'isShowingVossen',
				drawMethod : function() {
					vm.drawVossen(vm.map);
				},
				clearMethod : function() {
					vm.clearVossenMarkers();
				}
			},
			{
				name : 'loopgebied',
				checkbool : 'isShowingLoopgebied',
				drawMethod : function() {
					vm.drawLoopgebied(vm.map);
				},
				clearMethod : function() {
					vm.clearLoopgebied();
				}
			},
			{
				name : 'route',
				checkbool : 'isShowingRoute',
				drawMethod : function() {
					vm.drawRoutes(vm.map);
				},
				clearMethod : function() {
					vm.clearRoutePaths();
				}
			},
			{
				name : 'autos',
				checkbool : 'isShowingAutos',
				drawMethod : function() {
					vm.drawAutos(vm.map);
				},
				clearMethod : function() {
					vm.clearAutoMarkers();
				}
			},
			{
				name : 'hunts',
				checkbool : 'isShowingHunts',
				drawMethod : function() {
					vm.drawHunts(vm.map);
				},
				clearMethod : function() {
					vm.clearHuntMarkers();
				}
			}
		];

		for(var i = 0; i < types.length; i++) {
			var type = types[i];

			var shown = newVal.indexOf(type.name) > -1;
			if(shown && !vm[type.checkbool]) {
				type.drawMethod();
				vm[type.checkbool] = true;
			} else if (!shown) {
				type.clearMethod();
				vm[type.checkbool] = false;
			}
		}
	});

	this.drawAutos = function (map) {
		$.getJSON(PROXY_SITE_ROOT + "retrieveCars.php", function(data) {
			$.each( data , function( i, car ) {
				vm.drawAuto(car, map);
			});
		});
	};

	this.drawAuto = function(car, map) {
		if(car.lat && car.lng) {
			var myLatlng = new google.maps.LatLng(car.lat , car.lng);
			var icon = "https://maps.google.com/mapfiles/kml/pal4/icon7.png";

			var marker = new google.maps.Marker({
				position: myLatlng,
				map: map,
				icon : icon
			});

			var infowindow = new google.maps.InfoWindow({
      			content: "<h3>"+ car.name +"</h3><p>Om: "+ car.time +"</p>"
 			});

 			google.maps.event.addListener(marker, 'click', function () {
                infowindow.open(map,marker);
            });

			vm.autoMarkers.push(marker);
		}
	};
	
	this.drawHunts = function (map) {
		$.getJSON(PROXY_SITE_ROOT + "retrieveHunts.php", function(data) {
			$.each( data , function( i, hunt ) {
				vm.drawHunt(hunt, map);
			});
		});
	};
	
	this.drawHunt = function(hunt, map) {
		if(hunt.lat && hunt.lng) {
			var myLatlng = new google.maps.LatLng(hunt.lat , hunt.lng);
			var icon = "https://maps.google.com/mapfiles/kml/pal4/icon21.png";
						
			var marker = new google.maps.Marker({
				position: myLatlng,
				map: map,
				icon : icon
			});

			var infowindow = new google.maps.InfoWindow({
      			content: "<h3>"+ hunt.name +"</h3><p>Om: "+ hunt.time +"</p>"
 			});

 			google.maps.event.addListener(marker, 'click', function () {
                infowindow.open(map,marker);
            });

			vm.huntMarkers.push(marker);
		}
	};

	// Slow delay so the template can be properly loaded
	setTimeout(function() {

		vm.map = vm.makeMap();
		vm.drawDeelnemers(vm.map);
		vm.drawVossen(vm.map);
		vm.drawLoopgebied(vm.map);
		vm.drawRoutes(vm.map);
		vm.drawAutos(vm.map);
		vm.drawHunts(vm.map);

	}, 500);

	setInterval(function() {

		vm.clearDeelnemers();
		vm.clearVossenMarkers();
		vm.clearLoopgebied();
		vm.clearRoutePaths();
		vm.clearAutoMarkers();
		vm.clearHuntMarkers();

		var allDisplayTypes = [
			{ name: "deelnemers", drawMethod: function() { vm.drawDeelnemers(vm.map); } },
			{ name: "vossen", drawMethod: function() { vm.drawVossen(vm.map); } },
			{ name: "loopgebied", drawMethod: function() { vm.drawLoopgebied(vm.map); } },
			{ name: "route", drawMethod: function() { vm.drawRoutes(vm.map); } }, 
			{ name: "autos", drawMethod: function() { vm.drawAutos(vm.map); } },
			{ name: "hunts", drawMethod: function() { vm.drawHunts(vm.map); } } ];
		$.each(allDisplayTypes, function(i, type) {
			if(vm.displayTypes().indexOf(type.name) > -1) {
				// Display type found
				type.drawMethod();
			}
		});

	}, REFRESH_TIME);

	this.clearDeelnemers = function() {
		while(vm.polygonsMarkers.markers[0]){
			vm.polygonsMarkers.markers.pop().setMap(null);
		}
	};

	this.clearVossenMarkers = function() {
		while(vm.vossenMarkers[0]){
			vm.vossenMarkers.pop().setMap(null);
		}
	};

	this.clearLoopgebied = function() {
		while(vm.loopgebiedCircles[0]){
			vm.loopgebiedCircles.pop().setMap(null);
		}
	};

	this.clearRoutePaths = function() {
		while(vm.routePaths[0]){
			vm.routePaths.pop().setMap(null);
		}
	};

	this.clearAutoMarkers = function() {
		while(vm.autoMarkers[0]){
			vm.autoMarkers.pop().setMap(null);
		}
	};
	
	this.clearHuntMarkers = function() {
		while(vm.huntMarkers[0]){
			vm.huntMarkers.pop().setMap(null);
		}
	};

	this.drawVossen = function(map) {
		$.getJSON(PROXY_SITE_ROOT + "retrieveCoordinates.php", function(data) {
			$.each( data , function( j, hint_coordinates ) {

				var vossen = JSON.parse(hint_coordinates.data);
				var hint_name = hint_coordinates.hint_name;
				var hint_date = hint_coordinates.hint_date;
				var hint_time = hint_coordinates.hint_time;
				var solve_time = hint_coordinates.solve_time;

				for(var i = 0; i < vossen.length; i++ ) {
					var isLastKnownLocation = j == data.length-1 ? true : false;
					vm.drawVos(vossen[i], hint_name, hint_date, hint_time, solve_time, map, isLastKnownLocation);
				}
			});
		});
	};

	this.drawVos = function(vos, hint_name, hint_date, hint_time, solve_time, map, isLastKnownLocation) {
		if(vos.lat && vos.lng) {

			var myLatlng = new google.maps.LatLng(vos.lat , vos.lng);
			var iconColor = isLastKnownLocation ? vm.retrieveVosColorByName(vos) : "EEEEEE";
			var icon = "https://chart.googleapis.com/chart?chst=d_map_pin_letter&chld=•|"+ iconColor +"|000000";
			
			var marker = new google.maps.Marker({
				position: myLatlng,
				map: map,
				icon : icon				
			});

			var infowindow = new google.maps.InfoWindow({
      			content: "<h3>"+ hint_name +"</h3><p>Geplaatst: <strong>"+ hint_time +"</strong><br />Opgelost: <strong>"+ solve_time +"</strong></p><table>\
				<tr>\
					<td>X</td>\
					<td><strong>"+ vos.x +"</strong></td>\
					<td>Y</td>\
					<td><strong>"+ vos.y +"</strong></td>\
				</tr>\
				<tr>\
					<td>Lat</td>\
					<td><strong>"+ vos.lat +"</strong></td>\
					<td>Lng</td>\
					<td><strong>"+ vos.lng +"</strong></td>\
				</tr>\
			</table>"
 			});
			google.maps.event.addListener(marker, 'click', function () {
                infowindow.open(map,marker);
            });

			vm.vossenMarkers.push(marker);
		}
	};

	this.drawLoopgebied = function(map) {
		$.getJSON(PROXY_SITE_ROOT + "retrieveCoordinates.php", function(data) {
			$.each( data , function( j, hint_coordinates ) {

				var vossen = JSON.parse(hint_coordinates.data);
				var hint_date = hint_coordinates.hint_date;

				for(var i = 0; i < vossen.length; i++ ) {
					var isLastKnownLocation = j == data.length-1 ? true : false;
					if(isLastKnownLocation) {
						vm.drawLoopgebiedSingle(vossen[i], hint_date, map);
					}
				}
			});
		});
	};

	this.drawLoopgebiedSingle = function(vos, hint_date, map) {
		if(vos.lat && vos.lng) {

			var ms = WALKING_SPEED_KPH / 3.6;
			var hintDate = new Date(hint_date);
			var now = new Date();

			var diff = (now - hintDate) / 1000;
			var radius = ms * diff;

			if(radius < 15000) // Only draw the Loopgebied when it's smaller than 15km
			{
				var loopgebied = new google.maps.Circle({
					strokeColor: '#FF0000',
					strokeOpacity: 0,
					strokeWeight: 0,
					fillColor: '#FF0000',
					fillOpacity: 0.35,
					map: map,
					center: new google.maps.LatLng(vos.lat, vos.lng),
					radius: radius
				});

				vm.loopgebiedCircles.push(loopgebied);
			}

		}
	};

	this.drawRoutes = function(map) {
		$.getJSON(PROXY_SITE_ROOT + "retrieveCoordinates.php", function(data) {
			var allData = [];
			$.each( data , function( i, hint_coordinates ) {
				
				allData.push({
					hint_date : hint_coordinates.hint_date ,
					hint_name : hint_coordinates.hint_name ,
					data : JSON.parse(hint_coordinates.data)
				});

			});

			var teams = [
				{ name: "Alpha", data: [] },
				{ name: "Bravo", data: [] },
				{ name: "Charlie", data: [] },
				{ name: "Delta", data: [] },
				{ name: "Echo", data: [] },
				{ name: "Foxtrot", data: [] }
			];

			$.each( teams , function( i, team ) {
				$.each( allData, function (j, hint_coordinates) {
					var result = Enumerable.From(hint_coordinates.data)
						.SingleOrDefault(undefined, function (x) { return x.name == team.name });

					if(result && result.lat && result.lng) {
						result.hint_date = hint_coordinates.hint_date;
						result.hint_name = hint_coordinates.hint_name;
						team.data.push(result);	
					}
				});
			});

			$.each( teams , function( i, team ) {
				if(team.data.length > 1) {
					vm.drawRoute(team, map);
				}
			});

		});
	};

	this.drawRoute = function(team, map) {
		var coordinates = [];

		var orderedData = Enumerable.From(team.data)
			.OrderBy(function (x) { return x.hint_date })
			.ToArray();

		$.each(orderedData, function(i, data) {
			coordinates.push(new google.maps.LatLng(data.lat, data.lng));
		});

		var path = new google.maps.Polyline({
			path: coordinates,
			geodesic: true,
			strokeColor: '#' + vm.retrieveVosColorByName(team),
			strokeOpacity: 1.0,
			strokeWeight: 2
		});

		path.setMap(map);
		vm.routePaths.push(path);
	};

	this.retrieveVosColorByName = function(vos) {
		switch(vos.name) {
			case "Alpha":
				return "FF0000";
			case "Bravo":
				return "00FF00";
			case "Charlie":
				return "0000FF";
			case "Delta":
				return "00FFFF";
			case "Echo":
				return "FF00FF";
			case "Foxtrot":
				return "FFFF00";
			default:
				alert("Could not locate color for team: '" + vos.name +"'");
				return "";
		}
	};

	this.makeMap = function() {
		if ($('#groepenmap').length > 0) {
	        var i = 0;
	        var map;
	        var myOptions = {
	            zoom: 9,
	            center: new google.maps.LatLng(52.0426606750, 5.8736160278),
				mapTypeId: google.maps.MapTypeId.ROADMAP,
				scaleControl: true
	        };	        

	        map = new google.maps.Map(document.getElementById('groepenmap'), myOptions);

	        // 500 meter circle around Base Location
	        var cityCircle = new google.maps.Circle({
	            strokeColor: '#FF0000',
	            strokeOpacity: 0.8,
	            strokeWeight: 2,
	            fillColor: '#FF0000',
	            fillOpacity: 0.35,
	            map: map,
	            center: new google.maps.LatLng(BASE_LOCATION_LAT, BASE_LOCATION_LNG),
	            radius: 500
	          });

	        return map;
	    }

	};

	this.selectedKmlEvent = {};

	this.drawDeelnemers = function (map) {
		vm.polygonsMarkers = ApplyGroepen(map);
	}

};