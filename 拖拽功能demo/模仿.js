function g(id){
  return document.getElementById(id);
}
var dialogMove=g("dialogMove");
var dialogDrag=g("dialogDrag");
var clientWidth=document.documentElement.clientWidth;
var clientHeight=document.documentElement.clientHeight;
var mask=g("mask")
var isdraging=false;
function hideDialog(){
   dialogMove.style.display="none";
   mask.style.display="none";
}
function autoCenter(el){
  
    el.style.left=(document.documentElement.clientWidth-el.offsetWidth)/2+"px";
    el.style.top=(document.documentElement.clientHeight-el.offsetHeight)/2+"px";
}
function showDialog(){
  dialogMove.style.display="block";
  mask.style.display="block";
  autoCenter(dialogMove);
  fillToBody(mask);
}
function fillToBody(el){
     el.style.width=clientWidth+"px";
     el.style.height=clientHeight+"px";
}
var mouseX=0;
var mouseY=0;
dialogDrag.onmousedown=function(e){
  var e=e||window.event;
  isdraging=true;
  mouseX=e.pageX-dialogMove.offsetLeft;
  mouseY=e.pageY-dialogMove.offsetTop;
}
document.onmousemove=function(e){
var e=e||window.event;
if(isdraging===true){
var newleft=e.pageX-mouseX;
var newtop=e.pageY-mouseY;
var maxLeft=clientWidth-dialogMove.offsetWidth;
var maxTop=clientHeight-dialogMove.offsetHeight;
dialogMove.style.left=Math.max(Math.min(maxLeft,newleft),0)+"px";
dialogMove.style.top=Math.max(Math.min(maxTop,newtop),0)+"px";
}
}
document.onmouseup=function(){
  isdraging=false;
}
window.onresize=showDialog;