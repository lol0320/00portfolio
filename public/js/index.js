 scrollVert();
var scrollLeft=0;
function scrollVert() {
  $('header-wrapper, project, *').off('mousewheel').mousewheel(function(e, delta) {
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


