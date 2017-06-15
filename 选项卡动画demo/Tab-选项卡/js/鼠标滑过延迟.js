function $(id){
  return typeof id==='string'?document.getElementById(id):id;
}
window.onload=function(){
  var lis=$('top').getElementsByTagName('li');
  var divs=$('contain').getElementsByTagName('div');
  var timer=null;
    if(lis.length!=divs.length)return;
  for(var i=0;i<lis.length;i++){
    lis[i].id=i;
    lis[i].onmouseover=function(){
      if(timer){
        clearTimeout(timer);
      }
      var that=this;
      timer=setTimeout(function(){
      for(var j=0;j<lis.length;j++){
        lis[j].className="";
        divs[j].style.display="none"
      }
      that.className="select";
      divs[that.id].style.display="block"
    },1000);
    }
  }
}