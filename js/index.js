infuser.defaults.templateUrl = "templates";
var PROXY_JOTIHUNT_ROOT = "//YOURDOMAIN.COM/proxy/jotihunt.php?method="; // Configure value
var PROXY_SITE_ROOT = "//YOURDOMAIN.COM/proxy/"; // Configure value
var BASE_LOCATION_LAT = "52.004355"; // Configure value
var BASE_LOCATION_LNG = "5.947895"; // Configure value
var GOOGLE_MAPS_API_KEY = "KEY"; // Configure value - Ensure "Geocoding API" & "Maps JavaScript API" is enabled for the key
var REFRESH_TIME = 60000;

function TemplateViewModel(name, data) {
	this.name = ko.observable(name);
	this.data = ko.observable(data);
};

function IndexViewModel() {
	var vm = this;

	this.currentTemplate = ko.observable({name:ko.observable(),data:ko.observable()});

	this.showMap = function() {           
		vm.currentTemplate(new TemplateViewModel("map", new MapViewModel()));
	};

	this.showCar = function() {
		vm.currentTemplate(new TemplateViewModel("car", new CarViewModel()));
	};

	this.showInput = function() {
		vm.currentTemplate(new TemplateViewModel("input", new InputViewModel()));
	};
	
	this.showHunt = function() {
		vm.currentTemplate(new TemplateViewModel("hunt", new HuntViewModel()));
	};

	this.showInfo = function() {
		vm.currentTemplate(new TemplateViewModel("info", new InfoViewModel()));
	};

	this.showMap();
};

ko.applyBindings(new IndexViewModel());