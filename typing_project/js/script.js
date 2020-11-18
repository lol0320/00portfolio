var typingBool = false; 
var typingIdx=0; 
var liIndex = 0;
var liLength = $(".typing-txt").length;


var typingTxt = $(".typing-txt").eq(liIndex).text(); 
typingTxt=typingTxt.split(""); 
if(typingBool==false){ 
    typingBool=true; 
    var tyInt = setInterval(typing,100); 
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
           tyInt = setInterval(typing,100);
         },1000);
    } 
}  