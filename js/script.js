var page;
var animationComplete  = true;
$(document).ready(function(){
	var navigation = $('.nav_a');
	var principale_nav =  $('#nav>li');
	var sous_menu =  $('#nav>li>ul');
	navigation.click(function(event){
		var elem = $(this);			
		var href=elem.data('href');
		if(page!=href && animationComplete ==true)
		{
			var loadimg = $("#chargement_img");
			principale_nav.css("border-bottom","5px solid");
			sous_menu.fadeOut();
			if(elem.hasClass("sous_menu_a"))
			{						
				elem.parent().parent().parent().css("border-bottom","5px solid rgba(255, 71, 0, 0.71)");
			}
			else
			{
				elem.parent("li").css("border-bottom","5px solid rgba(255, 71, 0, 0.71)");
			}
			animationComplete=false;
			loadimg.fadeIn(100);
			page=href;
			$.ajax({
			url: page,
			dataType: "html",
			cache:true,
			error :function(){animationComplete =true;},
			success: function(data) {
				var next_content = $(".next_content");
				var current_content = $(".current_content");
				next_content.html(data);
				current_content.stop().animate(
					{left:"1900px"},
					500,
					"easeOutExpo",
					function()
					{
						next_content.stop().animate(
						{left:"0px"},
						500,
						"easeOutExpo",
						function(){
							current_content.html("").addClass("next_content").removeClass("current_content").css("left","-115%");
							next_content.removeClass("next_content").addClass("current_content");
							animationComplete =true;
						});		
					});
				loadimg.fadeOut(100);
			}
			});
		}
	});
	
	principale_nav.hover(function(){
		$(this).children("ul").stop(false,true).slideDown();
		
	},function(){
		$(this).children("ul").stop(false,true).slideUp();
	});
	
});

$(window).load(function() {
	$("#chargement_img").fadeIn(100);
	$('.nav_a:first-child').click();
});