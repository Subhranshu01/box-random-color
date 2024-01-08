console.log("this")
var a=document.querySelectorAll(".box");
console.log(a)
a.forEach(element => {
element.style.backgroundColor=getrandom();
element.style.transform=getrotate();
})

a[0].style.transform=getrotateminus();
a[4].style.transform=getrotateminus();
function getrandom(){
    var col1= Math.round(175-(Math.random()*(0+175)));
    var col2=Math.round(175-(Math.random()*(0+175)));
    var col3=Math.round(175-(Math.random()*(0+175)));
    return `rgb(${col1},${col2},${col3})`;
}
var b=document.getElementById("con");
b.style.backgroundImage=getrandomback();
function getrandomback(){
    var co1= Math.round(175-(Math.random()*(0+175)));
    var co2=Math.round(175-(Math.random()*(0+175)));
    var co3=Math.round(175-(Math.random()*(0+175)));
    var co4=Math.round(175-(Math.random()*(0+175)));
    var co5=Math.round(175-(Math.random()*(0+175)));
    var co6=Math.round(175-(Math.random()*(0+175)));
    return `linear-gradient(rgb(${co1},${co2},${co3}),rgb(${co4},${co5},${co6}),rgb(${co3},${co1},${co4}))`;
}
b.style.gap=getrandomgap();
function getrandomgap(){
    var temp=Math.round(Math.random()*280)
    return `${temp}px`
   
}
function getrotate(){
    
    var d=Math.random()*30;
return `rotate(${d}deg)`
}
function getrotateminus(){
    
    var d=Math.random()*200;
return `rotate(${d}deg)`
}
console.log(getrotate())


setInterval(() => {
    document.querySelector(".container").style.borderColor=getrandom();
}, 2000);
