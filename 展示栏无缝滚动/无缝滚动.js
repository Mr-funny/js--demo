window.onload=function(){
	var wrap=document.getElementById("wrap");
	var con1=document.getElementById("con1");
	var con2=document.getElementById("con2");
	con2.innerHTML=con1.innerHTML;
	var timer=null;
	startMove();
}
function startMove(){
  timer=setInterval("roll()",100);
  wrap.scrollTop++;
}
function roll(){
	wrap.scrollTop++;
	if(wrap.scrollTop%48==0){
		clearInterval(timer);
		timer=null;
		setTimeout("startMove()",2000);
	}else{
		wrap.scrollTop++
		if(wrap.scrollTop>=con1.offsetHeight){
			wrap.scrollTop=0;
		}
	}
}