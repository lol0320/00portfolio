scrollVert();
var scrollLeft=0;
function scrollVert() {
  $('html, body, *').off('mousewheel').mousewheel(function(e, delta) {
    this.scrollTop -= (delta * 40);
    e.preventDefault();
    setTimeout(function() {
      if ($(window).scrollTop() + $(window).height() == $(document).height())
        scrollHoriz();
    }, 0)
  });
}
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


	$('html').each(function (){
  	var _width = $(this).width(),
    		_length = $(this).length
      // _index = $(this).find('.on').index();
                
    $('.header-wrapper').scrollLeft((_width/_length) * _index);
  });
