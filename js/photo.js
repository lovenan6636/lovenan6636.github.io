$(document).ready(function(){	
	$('.mesphotos').fancybox({'overlayOpacity':'0.6',});
	$("#photos").mCustomScrollbar({
		scrollButtons:{enable:true},
		advanced:{autoExpandHorizontalScroll:true,updateOnContentResize:true},
		contentTouchScroll:true,
		autoHideScrollbar:true,
		theme:"light-thick",
	});
});

$(window).load(function() {				
});