function InputViewModel() {
	var vm = this;

	vm.vossenteams = ko.observableArray([
		new Vossenteam("Alpha"),
		new Vossenteam("Bravo"),
		new Vossenteam("Charlie"),
		new Vossenteam("Delta"),
		new Vossenteam("Echo"),
		new Vossenteam("Foxtrot")
	]);

	vm.hints = ko.observableArray();
	vm.chosenHint = ko.observable();
	vm.chosenHintUpdateDate = ko.observable();
	vm.hintTime = ko.observable();
	vm.isLoading = ko.observable(true);

	vm.chosenHint.subscribe(function(newValue) {
		if(newValue) {
			vm.hintTime( vm.formatTime( newValue.datum ) );
		} else {
			vm.hintTime( undefined );
			vm.clearData();
		}

		var postRequest = {
			hint_id : newValue.ID
		};

		vm.isLoading(true);
		$.post( PROXY_SITE_ROOT + "retrieveCoordinates.php", postRequest)
			.done(function( data ) {
				vm.clearData();
				vm.isLoading(false);
				if(data.update_date) {
					vm.chosenHintUpdateDate(data.update_date);
				}
				if(data.data) {
					var coordinates = JSON.parse(data.data);
					if(coordinates.length > 0) {
						vm.processSavedData(coordinates);
					}
				}
		});
	});

	vm.clearData = function() {
		$.each(vm.vossenteams(), function(i, vossenteam) {
			vossenteam.x(undefined);
			vossenteam.y(undefined);
			vossenteam.lat(undefined);
			vossenteam.lng(undefined);
		});
	};

	vm.processSavedData = function(data) {
		$.each(data, function(i, savedVossenteam) {
			var actualVossenteam = vm.getVossenteamByName(savedVossenteam.name);
			actualVossenteam.x(savedVossenteam.x);
			actualVossenteam.y(savedVossenteam.y);
		});
	};

	vm.getVossenteamByName = function(name) {
		for(var i = 0; i < vm.vossenteams().length; i++) {
			var vossenteam = vm.vossenteams()[i];

			if(vossenteam.name() == name) {
				return vossenteam;
			}
		}
		alert("Vossenteam '" + name + "' not found!");
	};

	vm.addCoordinates = function() {

		if(vm.isLoading()) {
			alert("Bezig met andere actie.");
			return;
		}

		for(var i = 0; i < vm.vossenteams().length; i++) {
			var vossenteam = vm.vossenteams()[i];

			if(!vossenteam.isValid()) {
				alert("Data voor '" + vossenteam.name() + "' is incompleet. Data niet opgeslagen.");
				return;
			}
		};

		var vossenteams = ko.mapping.toJS(vm.vossenteams, {
    		'ignore': ["isValid", "calculateLatLng", "state"]
		});
		
		var postRequest = {
			hint_id: vm.chosenHint().ID,
			prev_update_date : vm.chosenHintUpdateDate(),
			update_date: Math.round(new Date().getTime() / 1000),
			hint_name: vm.chosenHint().titel,
			hint_date: vm.chosenHint().datum,
			hint_time: vm.hintTime(),
			solve_time: vm.solveTime(),
			data: JSON.stringify(vossenteams)
		};

		vm.isLoading(true);
		$.post( PROXY_SITE_ROOT + "addCoordinates.php", postRequest)
			.done(function( data ) {
				vm.isLoading(false);
				alert( "Resultaat: " + data );
			});

	};

	vm.formatTime = function(timestamp) {
	    var dt = new Date(timestamp);
	    return vm.getTime(dt);
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

	vm.solveTime = ko.observable( vm.getTime( new Date() ) );

	vm.vossenteamLoaded = false;
	$.getJSON(PROXY_JOTIHUNT_ROOT + "vossen", function(data) {
		$.each( data.data , function( i, vossenteam ) {

			// Now based on index, might need to change to team name
			vm.vossenteams()[i].state( vossenteam.status );
		});
		vm.vossenteamLoaded = true;
		vm.checkLoading();
	});

	vm.hintsLoaded = false;
	// Since we're in beta now, we need to change "nieuws" to "hint" later.
	$.getJSON(PROXY_JOTIHUNT_ROOT + "hint", function(data) {
		$.each( data.data , function( i, hint ) {
			
			vm.hints.push(hint);
		});
		vm.hintsLoaded = true;
		vm.checkLoading();
	});

	vm.checkLoading = function() {
		if(vm.vossenteamLoaded && vm.hintsLoaded) {
			vm.isLoading(false);
		}
	};

	setInterval(function() {
		vm.solveTime( vm.getTime( new Date() ) );
	}, 1000);

};