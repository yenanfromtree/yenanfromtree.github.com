'use strict'
function getstyle(obj,sName){
	return (obj.currentstyle||getComputedStyle(obj,false))[sName];
}
function move(obj,json,options){
	options=options||{};
	options.duration=options.duration||1000;
	options.easing=options.easing||'ease-out';
	var start={};
	var dis={};
	for(var name in json){
		start[name]=parseFloat(getstyle(obj,name));
		dis[name]=json[name]-start[name];
	}
	var count=Math.floor(options.duration/16);
	var n=0;
	clearInterval(obj.timer);
	obj.timer=setInterval(function(){
		n++;
		for(var name in json){
			switch(options.easing){
				case 'linear':
					var a=n/count;
					var cur=star[name]+dis[name]*a;
				break;
				case 'ease-in':
					var a=n/count;
					var cur=start[name]*Math.pow(a,3);
				break;
				case 'ease-out':
					var a=1-n/count;
					var cur=start[name]+dis[name]*(1-Math.pow(a,3));
				break;
			}
			if (name=='opacity') {
				obj.style.opacity=cur;
				obj.style.filter='alpha(opacity:'+cur*100+')';
			}else{
				obj.style[name]=cur+'px';
			}
		}
		if (n==count) {
			clearInterval(obj.timer);
			options.complete&&options.complete();
		}
	},16);
}