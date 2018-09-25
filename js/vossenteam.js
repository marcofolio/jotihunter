function Vossenteam(name, x, y, lat, lng, state) {
	var vm = this;

	this.name = ko.observable(name);
	this.x = ko.observable(x);
	this.y = ko.observable(y);
	this.lat = ko.observable(lat);
	this.lng = ko.observable(lng);
	this.state = ko.observable(state);

	this.isValid = function() {
		var x = vm.x(),
			y = vm.y(),
			lat = vm.lat(),
			lng = vm.lng();

		if(x || y || lat || lng) {
			// At least one is filled: all should be filled
			if(x && y && lat && lng) {
				return true;
			}
			return false;
		}
		// All empty is a valid situation
		return true;
	};

	this.x.subscribe(function(newValue) {
		if(newValue && newValue.length == 5) {
			vm.x(newValue + "0");
			return;
		}

		if(newValue && vm.y()) {
			vm.calculateLatLng();
		} else if (newValue == "") {
			vm.x(undefined);
			vm.lat(undefined);
			vm.lng(undefined);
		}
	});

	this.y.subscribe(function(newValue) {
		if(newValue && newValue.length == 5) {
			vm.y(newValue + "0");
			return;
		}

		if(newValue && vm.x()) {
			vm.calculateLatLng();	
		} else if (!newValue || newValue == "") {
			vm.y(undefined);
			vm.lat(undefined);
			vm.lng(undefined);
		}
	});

	this.calculateLatLng = function() {

		var lat = RD2lat(vm.x(), vm.y());
		var lng = RD2lng(vm.x(), vm.y());

		vm.lat(lat.toFixed(5));
		vm.lng(lng.toFixed(5));

	};

};