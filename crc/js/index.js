(function(){
	var util = new publicMethod() ;
	var from = util.getUrlParam("from") ;
	var domain = util.getUrlParam("nowDomain") ;
	var jspPage = util.getUrlParam("jspPage") ;
	var topBar=document.getElementById("topBar");
	var goBack=document.getElementById("goBack");
	 
	 function init(){
	 	
	 	if(from=="h5"){
			topBar.style.display="block";
			setBackUrl() ;
		}
	 	function setBackUrl(){
			var url = "" ;
			if(domain=="1"){
				url = "http://www.qmcai.com/" ;
			}else if(domain=="2"){
				url = "http://qmcai.com/" ;
			}else if(domain=="3"){
				url = "http://m.qmcai.com/" ;
			}else{
				url = "http://qmcai.com/" ;
			}
			if(jspPage){
				//头部返回
				goBack.addEventListener("click",function(){
					window.location.href = url+"qmch/webapp/common/index.jsp" ;
				},false) ;
			}else{
				//头部跳转
				goBack.addEventListener("click",function(){
					window.location.href = url+"html5/common/index.html" ;
				},false) ;
			}
		}
	 }
	 
	 
	 
	init();
})();
