
var now = 0;
var delta;
var wid = $(window).width();
var scroll = 60;
var hancan = 1/(wid/scroll);

function onWheel(e) {
	delta = e.originalEvent.deltaY;
	if(delta > 0 && now < 1) {
		now++;
		ani('fast');
	}
	else if(delta < 0 && now <= 1 && now > 0) {
		now--;
		ani('fast');
	}
	else if(delta > 0 && now >= 1  && now <= 2) {
		now=now+hancan
		deltaX +=  scroll;
		ani('slow');
	}
	else if(delta < 0 && now > 1 && now <= 2) {
		now=now-hancan
		deltaX -= scroll;
		ani('slow');
	}
	else if(delta > 0 && now > 1){
		now= Math.floor(now +1);
		ani('fast');
	}
	else if(delta > 0 && now > 1){
		now--;
		ani('fast');
	}
}

var deltaX = 0;
function ani(speed) {
	
	console.log(delta,deltaX,now);
	if(speed == 'fast')	$(".main-wrapper").stop().animate({"left": -(now*wid)+ "px"} , 800);
	if(speed == 'slow')	{
		$(".main-wrapper").stop().css({"left": -wid-deltaX+ "px"});
}}

$(window).on('wheel', onWheel);

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
var typingBool = false; 
var typingIdx=0; 
var liIndex = 0;
var liLength = $(".typing-txt").length;


var typingTxt = $(".typing-txt").eq(liIndex).text(); 
typingTxt=typingTxt.split(""); 
if(typingBool==false){ 
    typingBool=true; 
    var tyInt = setInterval(typing,400); 
} 
     
function typing(){ 
  if(typingIdx<typingTxt.length){ 
     $(".typing").append(typingTxt[typingIdx]); 
     typingIdx++; 
   } else{ 
     if(liIndex>=liLength-1){
       liIndex=0;
     }else{
       liIndex++; 
     }
     
        typingIdx=0;
        typingBool = false; 
        typingTxt = $(".typing-txt").eq(liIndex).text(); 
       
         clearInterval(tyInt);
         setTimeout(function(){
            $(".typing").html('');
           tyInt = setInterval(typing,400);
         },2000);
    } 
}  