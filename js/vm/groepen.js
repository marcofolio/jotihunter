function ApplyGroepen(map) {
	
	var names = ['Alpha', 'Bravo', 'Charlie', 'Delta', 'Echo', 'Foxtrot'];
    var colors = ['red','green','blue','#40e0d0','purple','yellow'];

    var markers = [];
    $('tbody tr').each(function(){
    	var coordinates = $("td:eq(4)", this).html();
    	var latlng = coordinates.split("<br>");
    	var icon = "https://maps.google.com/mapfiles/kml/paddle/wht-circle-lv.png";

    	var $blokhut = $("td:eq(3)", this);
        var marker = new google.maps.Marker({
            position: new google.maps.LatLng(latlng[0],latlng[1]),
            map: map,
			icon : icon,
        });

		google.maps.event.addListener(marker, 'click', function() {
			$("#selectedgroup").html($blokhut.html());
		});

        markers.push(marker);

    });

    var pms = { markers: markers };
    return pms;

};
