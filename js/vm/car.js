function CarViewModel() {
	var vm = this;

	this.showEnterCoordinate = ko.observable(false);
	this.showAddCar = ko.observable(false);
	this.showRemoveCar = ko.observable(false);
	this.carLat = ko.observable();
	this.carLng = ko.observable();
	this.carStreet = ko.observable();
	this.carCity = ko.observable();
	this.carName = ko.observable();
	this.inputType = ko.observable("latLng");
	
	this.showLatLng = ko.observable(true);
	this.showAddress = ko.observable(false);

	this.availableCars = ko.observableArray();
	this.selectedCar = ko.observable();
	
	this.carsToRemove = ko.observableArray();
	this.carToRemove = ko.observable();

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

	this.enterCoordinate = function() {
		vm.showEnterCoordinate(true);
		vm.showAddCar(false);
		vm.showRemoveCar(false);
		vm.availableCars.removeAll();

		$.getJSON(PROXY_SITE_ROOT + "retrieveCars.php", function(data) {
			$.each( data , function( i, car ) {
				vm.availableCars.push(ko.mapping.fromJS(car));
			});
		});

		if (navigator.geolocation) {
			navigator.geolocation.getCurrentPosition(vm.processPosition);
		} else {
			// Helaas geen geolocation API; de gebruiker moet lat/lng zelf invoeren, of middels adres dingen opzoeken
		}
	};

	this.enterPosition = function() {
		if(vm.showLatLng()) {
			vm.addCarWithLatLng();
		} else {
			vm.addCarWithAddress();
		}
	};

	this.addCarWithLatLng = function() {
		if(!vm.carLat() || vm.carLat() == "" ||
			!vm.carLng() || vm.carLng() == "") {
			alert("Lat of Lng niet ingevoerd.");
		} else {
			var postRequest = {
				id : vm.selectedCar().id(),
				time : vm.getTime( new Date() ),
				lat : vm.carLat(),
				lng : vm.carLng()
			};

			$.post( PROXY_SITE_ROOT + "addCarCoordinates.php", postRequest)
				.done(function( data ) {
					alert( "Resultaat: " + data );
				});
		}
	};

	this.addCarWithAddress = function() {
		if(!vm.carStreet() || vm.carStreet() == "" ||
			!vm.carCity() || vm.carCity() == "") {
			alert("Straat of Stad niet ingevoerd.");
		} else {

			$.getJSON("https://maps.googleapis.com/maps/api/geocode/json?address="+vm.carStreet()+"+"+vm.carCity()+"+The+Netherlands&sensor=true", function(data) {
				var result = data.results;
				if(result.length == 0) {
					alert("Kan het opgegeven adres niet vinden.");
				} else if (result.length > 1) {
					alert("Te veel resultaten gevonden voor het adres.");
				} else if (result.length == 1) {
					var position = result[0];

					var postRequest = {
						id : vm.selectedCar().id(),
						time : vm.getTime( new Date() ),
						lat : position.geometry.location.lat.toFixed(5),
						lng : position.geometry.location.lng.toFixed(5)
					};

					$.post( PROXY_SITE_ROOT + "addCarCoordinates.php", postRequest)
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
		vm.carLat(position.coords.latitude.toFixed(5));
		vm.carLng(position.coords.longitude.toFixed(5));
	};

	this.addCar = function() {
		vm.showEnterCoordinate(false);
		vm.showAddCar(true);
		vm.showRemoveCar(false);
	};

	this.enterCar = function() {
		var carName = vm.carName();
		if(!carName || carName == '') {
			alert("Geen naam opgegeven.");
		} else {
			var postRequest = {
				car_name : carName
			};

			$.post( PROXY_SITE_ROOT + "addCar.php", postRequest)
				.done(function( data ) {
					alert( "Resultaat: " + data );
				});
		}
	};

	this.removeCar = function() {
		vm.showEnterCoordinate(false);
		vm.showAddCar(false);
		vm.showRemoveCar(true);
		
		vm.carsToRemove.removeAll();

		$.getJSON(PROXY_SITE_ROOT + "retrieveCars.php", function(data) {
			$.each( data , function( i, car ) {
				vm.carsToRemove.push(ko.mapping.fromJS(car));
			});
		});
	};
	
	this.deleteCar = function() {
		if(!vm.carToRemove() || vm.carToRemove() == "") {
			alert("Geen auto geselecteerd.");
		} else {
			
			var postRequest = {
				id : vm.carToRemove().id()
			};

			$.post( PROXY_SITE_ROOT + "deleteCar.php", postRequest)
				.done(function( data ) {
					alert( "Resultaat: " + data );
				});
			
		}
	};
	
};