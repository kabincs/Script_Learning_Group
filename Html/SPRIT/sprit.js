var a = document.getElementById("sprite");
console.log(a);
//var frame = document.getElementsByClassName("frame");
a.style.backgroundPositionX = "0px";
a.style.backgroundPositionY = "0px";
//frame.style.left = "0px";

function fun(){
    a.style.backgroundPositionY = parseInt(a.style.backgroundPositionY) - 256 + "px";
    console.log(a.style.backgroundPositionX);
    console.log(a.style.backgroundPositionY);
   // frame.style.left = parseInt(frame.style.left) + 20 + "px";
    if(parseInt(a.style.backgroundPositionX) == -512 && parseInt(a.style.backgroundPositionY) == -768)
    {
        a.style.backgroundPositionX = "0px";
        a.style.backgroundPositionY = "0px";
    }
    else if(parseInt(a.style.backgroundPositionX) == -512)
    {
        a.style.backgroundPositionX = "-512px";
        a.style.backgroundPositionY = "0px";
    }
}
setInterval(fun,90);