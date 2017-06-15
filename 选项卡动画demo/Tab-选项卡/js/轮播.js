function $(id){
	return typeof id==='string'?document.getElementById(id):id;
}
window.onload=function(){
	var lis=$('top').getElementsByTagName('li');
	var divs=$('contain').getElementsByTagName('div');
	var timer=null;
  var index=0;
   if(lis.length!=divs.length)return;
   for(var i=0;i<lis.length;i++){
    lis[i].id=i;
    lis[i].onmouseover=function(){
      clearInterval(timer);
      changeaction(this.id);
    }
    lis[i].onmouseout=function(){
       timer=setInterval(autoplay,1000)
    }
   if(timer){
    clearTimeout(timer);
    timer=null;
   }
  timer=setInterval(autoplay
    ,1000)
function autoplay(){
    index++;
    if(index>=lis.length){
      index=0;
    }
  changeaction(index);
}
function changeaction(a){
  for(var j=0;j<lis.length;j++){
      lis[j].className='';
      divs[j].style.display='none'
     }
     lis[a].className='select';
     divs[a].style.display='block';
     index=a;
    }
}
}
