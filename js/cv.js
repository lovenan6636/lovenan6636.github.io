$(document).ready(function(){
	var list = $(".list_li");
	var list_text = $(".list_text");
	list.click(function(){
		list_text.css("width","0px");
		var elem = $(this);
		elem.next().css("width","60%");	
	});

	$(".content_discription").mCustomScrollbar({
		scrollButtons:{enable:true},
		advanced:{autoExpandHorizontalScroll:true,updateOnContentResize:true},
		contentTouchScroll:true,
		autoHideScrollbar:true,
		theme:"light-thick",
	});
});
