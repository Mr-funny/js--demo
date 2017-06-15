function $(id){
	return typeof id==='string'?document.getElementById(id):id;
}
window.onload=function(){
	var lis=$('top').getElementsByTagName('li');
	var divs=$('contain').getElementsByTagName('div');
    if(lis.length!=divs.length)
    	return;

    for(var i=0;i<lis.length;i++)
    {   lis[i].id=i;
    	lis[i].onmouseover=function(){
    		for(var j=0;j<lis.length;j++){
    			lis[j].className='';
    			divs[j].style.display='none';
    		}
    		this.className='select';
    		divs[this.id].style.display='block';
    	}
    }
}