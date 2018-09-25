function HuntViewModel() {
	var vm = this;

	this.chosenTeam = ko.observable();
	this.teams = ko.observableArray(["Alpha", "Bravo", "Charlie", "Delta", "Echo", "Foxtrot"]);
	
	this.huntLat = ko.observable();
	this.huntLng = ko.observable();
	this.huntStreet = ko.observable();
	this.huntCity = ko.observable();
	this.inputType = ko.observable("latLng");
	
	this.showLatLng = ko.observable(true);
	this.showAddress = ko.observable(false);

	this.inputType.subscribe(function(newValue) {
		switch(newValue) {
			case "latLng":
				vm.showLatLng(true);
				vm.showAddress(false);
				break;
			case "address":
				vm.showLatLng(false);
				vm.showAddress(true);
				break;
			default:
				alert("Input type not found");
				break;
		}
	});

	this.enterPosition = function() {
		if(vm.showLatLng()) {
			vm.addHuntWithLatLng();
		} else {
			vm.addHuntWithAddress();
		}
	};

	this.addHuntWithLatLng = function() {
		if(!vm.huntLat() || vm.huntLat() == "" ||
			!vm.huntLng() || vm.huntLng() == "") {
			alert("Lat of Lng niet ingevoerd.");
		} else {
			var postRequest = {
				name : vm.chosenTeam(),
				time : vm.getTime( new Date() ),
				lat : vm.huntLat(),
				lng : vm.huntLng()
			};

			$.post( PROXY_SITE_ROOT + "addHunt.php", postRequest)
				.done(function( data ) {
					alert( "Resultaat: " + data );
				});
		}
	};

	this.addHuntWithAddress = function() {
		if(!vm.huntStreet() || vm.huntStreet() == "" ||
			!vm.huntCity() || vm.huntCity() == "") {
			alert("Straat of Stad niet ingevoerd.");
		} else {

			$.getJSON("https://maps.googleapis.com/maps/api/geocode/json?address="+vm.huntStreet()+"+"+vm.huntCity()+"+The+Netherlands&sensor=true", function(data) {
				var result = data.results;
				if(result.length == 0) {
					alert("Kan het opgegeven adres niet vinden.");
				} else if (result.length > 1) {
					alert("Te veel resultaten gevonden voor het adres.");
				} else if (result.length == 1) {
					var position = result[0];

					var postRequest = {
						name : vm.chosenTeam(),
						time : vm.getTime( new Date() ),
						lat : position.geometry.location.lat.toFixed(5),
						lng : position.geometry.location.lng.toFixed(5)
					};

					$.post( PROXY_SITE_ROOT + "addHunt.php", postRequest)
						.done(function( data ) {
							alert( "Resultaat: " + data );
						});
				}
			});
		}
	};

	vm.getTime = function(dt) {
		var hours = dt.getHours();
	    var minutes = dt.getMinutes();
	    var seconds = dt.getSeconds();

	    if (hours < 10) 
			hours = '0' + hours;

	    if (minutes < 10) 
			minutes = '0' + minutes;

	    if (seconds < 10) 
			seconds = '0' + seconds;

	    return hours + ":" + minutes + ":" + seconds;
	};
	
	vm.processPosition = function(position) {
		vm.huntLat(position.coords.latitude.toFixed(5));
		vm.huntLng(position.coords.longitude.toFixed(5));
	};
	
	if (navigator.geolocation) {
		navigator.geolocation.getCurrentPosition(vm.processPosition);
	} else {
		// Helaas geen geolocation API; de gebruiker moet lat/lng zelf invoeren, of middels adres dingen opzoeken
	}
	
};