
$(".main-wrapper .menu-bar").click(function(){
	$(".menu-bar").hide();
	$(".menu-bar2").show().css("opacity", "1");
	$(".wrapper").animate({
		   left:'90em'
	  }); 
  });
  
  $(".main-wrapper .menu-bar2").click(function(){
	$(".menu-bar2").hide();
	$(".menu-bar").show().css("opacity", "1");
	$(".wrapper").animate({
	  left:'0em'
  }); 
  });
  
  
  
  $(".menu .menu-wrap .home").click(function(){
	$(".menu-bar2").hide();
	$(".project-wrapper").hide();
	$(".contact-wrapper").hide();
  
	$(".menu-bar").show();
	$(".wrapper").show();
	$(".hello-wrapper").show();
	$(".aboutme-wrapper").show();
	$(".wrapper").animate({
	  left:'0em'
  }); 
	$(".wrapper .box-red").css("background-color", "#b19fa0");
	$(".wrapper .hello").text("HE")
	$(".wrapper .hello2").text("LLO")
	$(".wrapper .he-txt .s").css("color", "#b19fa0");
  });
  
  
  $(".menu .menu-wrap .project").click(function(){
	$(".menu-bar2").hide();
	$(".hello-wrapper").hide();
	$(".aboutme-wrapper").hide();
	$(".contact-wrapper").hide();
  
	$(".menu-bar").show();
	$(".wrapper").show();
	$(".project-wrapper").show();
	$(".wrapper").animate({
	  left:'0em'
  }); 
	$(".wrapper .box-red").css("background-color", "#e5d5cb");
	$(".wrapper .hello").text("PRO")
	$(".wrapper .hello2").text("JECT")
	$(".wrapper .he-txt .s").css("color", "#e5d5cb");
  
   });
  
  $(".menu .menu-wrap .contact").click(function(){
	$(".menu-bar2").hide();
	$(".project-wrapper").hide();
	$(".hello-wrapper").hide();
	$(".aboutme-wrapper").hide();
  
	$(".contact-wrapper").show();
	$(".menu-bar").show();
	$(".wrapper").show(); 
	$(".wrapper").animate({
	  left:'0em'
  }); 
	$(".wrapper .box-red").css("background-color", "#6e646c");
	$(".wrapper .hello").text("CON")
	$(".wrapper .hello2").text("TACT")
	$(".wrapper .he-txt .s").css("color", "#6e646c");
  });
  
  
  
  
  
  (function($){
	$.aniPage=function(e,type){
		if(e.originalEvent.wheelDelta > 0 || e.originalEvent.detail < 0){				
	$.subtr = $(window).scrollTop()-$(window).height();
	if($(window).scrollTop() > 0){
	  if($(window).scrollTop() % $(window).height() > 0){
		$.subtr = $(window).scrollTop()
		  -($(window).scrollTop() % $(window).height());
	  }
	}				
  
			$("body, html").animate({
				scrollTop:$.subtr
			},800,function(){
					$.aniOk = 0;
			});
		}else{				
	$.addit = $(window).scrollTop()+$(window).height();
	if($(window).scrollTop() > 0){
	  if($(window).scrollTop() % $(window).height() > 0){
		$.addit = $(window).scrollTop()
		  -($(window).scrollTop() % $(window).height())
		  +$(window).height();
	  }
	}				
			$("body, html").animate({
				scrollTop:$.addit
			},800,function(){
					$.aniOk = 0;
			});
			
		}
	};
  })(jQuery);
  $(function(){
	$(".contInner").height($(window).height());
	$.aniOk=0;
	$(window).scrollTop(0);
  });
  $(document).on("mousewheel DOMMouseScroll",function(e){
	e.preventDefault();
	if($.aniOk == 0){
		$.aniPage(e,e.type);
		$.aniOk = 1;
	}
  });
  
  
  
  
  
  $(".scroll-wrap").click(function () {
	  $('html').animate({ scrollTop: 0 })
  });
  
  (function scrollToggle() {
	  if ($(".main-wrapper").Height() > 1158) {
		  if (sct > 0) {
			  $(".scroll-wrap").css("dispaly", "block");
		  }
		  else {
			  $(".scroll-wrap").css("dispaly", "none");
		  }
  
	  }
  });
  