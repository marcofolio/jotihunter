function InfoViewModel() {
	var vm = this;
	
	this.password = ko.observable();
	
	this.newGame = function() {
		var postRequest = {
			password : vm.password()
		};

		$.post( PROXY_SITE_ROOT + "newGame.php", postRequest)
			.done(function( data ) {
				alert( "Resultaat: " + data );
			});
	};
};