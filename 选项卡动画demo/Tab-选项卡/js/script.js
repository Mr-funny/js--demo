window.onload=function(){
	var top=document.getElementById("top")
	var lis=top.getElementsByTagName("li");
	var divs=document.getElementById("contain").getElementsByTagName("div")
	var timer=null;
	for(var i=0;i<lis.length;i++){
		lis[i].id=i;
		lis[i].onclick=function(){
			var that=this;
            if(timer){
            	clearTimeout(timer);
            }
            timer=setTimeout(function(){
			for(var j=0;j<lis.length;j++){
				lis[j].className="";
				divs[j].style.display="none";
			}
			that.className="select";
			divs[that.id].style.display="block";
		},1000);
	}
}
}