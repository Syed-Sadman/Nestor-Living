const typedTextSpan=document.querySelector(".typed-text")
const cursorSpan=document.querySelector(".cursor");

const textArray=["Welcome To Nestor Living ","We're here to serve you"];
const typingDelay=200;
const erasingDelay=100;
const newTextDelay=2000;

let textArrayIndex=0;
let charIndex=0;

function type(){
    if(charIndex<textArray[textArrayIndex].length){
        if(!cursorSpan.classList.contains("typing")) cursorSpan.classList.add("typing");
        typedTextSpan.textContent+=textArray[textArrayIndex].charAt(charIndex);
        charIndex++;
        setTimeout(type,typingDelay);

    }
    else{
        setTimeout(erase,newTextDelay);


    }
}

function erase(){
    if(charIndex>0){
        if(!cursorSpan.classList.contains("typing")) cursorSpan.classList.add("typing");
        typedTextSpan.textContent=textArray[textArrayIndex].substring(0,charIndex - 1);
        charIndex--;
        setTimeout(erase,erasingDelay);

    }
    else {
        textArrayIndex++;
        if(textArrayIndex>=textArray.length) textArrayIndex=0;
        setTimeout(type,typingDelay+1100);
    }
}



document.addEventListener("DOMContentLoaded",function(){
   if(textArray.length) setTimeout(type,newTextDelay +250);
});

//function for google map

function myMap() {
    var mapProp= {
      center:new google.maps.LatLng(51.508742,-0.120850),
      zoom:5,
    };
    var map = new google.maps.Map(document.getElementById("googleMap"),mapProp);
    }