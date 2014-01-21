$(document).ready(function(){	
	$('#send_message').click(function(){			
            var error = false;
            var name = $('#name').val();
            var email = $('#email').val();
            var subject = $('#objet').val();
            var message = $('#message').val();
            
            if(name.length == 0){
                var error = true;
                $('#name_error').fadeIn(1000);
            }
			else{
                $('#name_error').fadeOut(1000);
            }
            if(email.length == 0 || email.indexOf('@') == '-1'){
                var error = true;
                $('#email_error').fadeIn(1000);
            }else{
                $('#email_error').fadeOut(1000);
            }
            if(subject.length == 0){
                var error = true;
                $('#objet_error').fadeIn(1000);
            }else{
                $('#objet_error').fadeOut(1000);
            }
            if(message.length == 0){
                var error = true;
                $('#message_error').fadeIn(1000);
            }else{
                $('#message_error').fadeOut(1000);
            }
			
			return !error;
				
	});
	
	if (GBrowserIsCompatible()) 
	{
        var map = new GMap2(document.getElementById("map_canvas"));
		
        map.setCenter(new GLatLng(48.812152,2.334015), 11);
		map.setMapType(G_NORMAL_MAP);
        map.setUIToDefault();
		map.enableGoogleBar();
		map.enableContinuousZoom();
		var message = "<b style='color:#000'>GUO Nan<br/>3 ALLEE SIMONE DE BEAUVOIR <br/>94110 ARCUEIL</b>"
		var infoTabs = [new GInfoWindowTab("Ma position",message)];	
		var point = new GLatLng(48.812152,2.333881);
		
		var marker = new GMarker(point);
		GEvent.addListener(marker, "click", function() {
		marker.openInfoWindowHtml(infoTabs);
		});
		map.addOverlay(marker);		
	}

});

$(window).load(function() {				
});