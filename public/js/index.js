var now = 0;
var delta;
var wid = $(window).width();
var scroll = 100;
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
	else if(delta < 0 && now > 1 && now < 2) {
		now=now-hancan
		deltaX -= scroll;
		ani('slow');
	}

	else if(delta > -1 && now >= 1){
		now=now+hancan
		ani('slow');
	}
	else if(delta > 0 && now >=-1){
		now--;
		ani('fast');
	}
}

var deltaX = 0;
function ani(speed) {
	
	console.log(delta,deltaX,now);
	if(speed == 'fast')	$(".main-wrapper").stop().animate({"left": -(now*wid)+ "px"} , 1000);
	if(speed == 'slow')	{
		$(".main-wrapper").stop().css({"left": -wid-deltaX+ "px"});
}}

$(window).on('wheel', onWheel);




var typingBool = false; 
var typingIdx=0; 
var liIndex = 0;
var liLength = $(".typing-txt").length;


var typingTxt = $(".typing-txt").eq(liIndex).text(); 
typingTxt=typingTxt.split(""); 
if(typingBool==false){ 
    typingBool=true; 
    var tyInt = setInterval(typing,300); 
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
           tyInt = setInterval(typing,300);
         },1000);
    } 
}  

var docStyle = document.documentElement.style;

document.addEventListener('mousemove', function(e) {
  docStyle.setProperty('--mouse-x', e.clientX);
  docStyle.setProperty('--mouse-y', e.clientY);
});


$(".header-wrapper .bar").click(function () {
	$(".menu-slide").fadeIn(500)});

$(".menu-slide .bar").click(function () {
	$(".menu-slide").fadeOut(500)});



$(".header-wrapper .cont").click(function () {
	$(".about-wrapper").fadeIn(500)});
