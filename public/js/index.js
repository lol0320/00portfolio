
var now = 0;

function onWheel(e) {
	$(this).off('wheel');
	//e.preventDefault();
	//e.originalEvent.preventDefault();
	var delta = e.originalEvent.deltaY;
	/*
	for(var i=4; i>0; i--) {
		if(x > wid * (i - 1)) {
			now = i - 1;
			break;
		}
	}
	*/
	console.log(now);
	if(delta > 0 && now < 3) {
		ani(delta);
	}
	if(delta < 0 && now > 0) {
		ani(delta);
	}
}


$(window).on('wheel', onWheel);





function ani(delta) {
	var wid = $(window).width();
	var left = 0;
	if(delta > 0){
		left = Number($(".main-wrapper").css("left").replace("px", "")) + wid;
	}
	else {
		left = Number($(".main-wrapper").css("left").replace("px", "")) - wid;
	}
	$(".main-wrapper").stop().animate({"left": -left+ "px"}, 300, function(){
		$(window).on('wheel', onWheel);
	})
}

/*
function scrollHoriz() {
  $('html, body, *').off('mousewheel').mousewheel(function(e, delta) {
    this.scrollLeft -= (delta * 40);
    e.preventDefault();
    scrollLeft=this.scrollLeft
    setTimeout(function() {
      if (scrollLeft == 0) scrollVert();
    }, 0)
  });
} 

*/
