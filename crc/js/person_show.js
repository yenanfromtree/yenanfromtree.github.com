$(function(){
	var a =document.location.href;
	var aid = a.split('=')[1];
//	var aid = 41
	var title = ""
	$.ajax({
		type:"get",
		url:"http://www.duechina.com/api/index.php/archives/show/?aid="+aid,
		async:true,
		success:function(data){
			console.log($(".person_information_one_left>p").eq(0))
			var rows=data.result;
			title = rows.title;
			$(".mui-title").text((rows.title||"N/A"));
			$(".person_information_one_left h4").text((rows.title||"N/A"));
			$(".person_information_one_left p").eq(0).find("span").text((rows.birthday||"N/A"));
			$(".person_information_one_left p").eq(1).find("span").text(rows.nations||"N/A");
			$(".person_information_one_left p").eq(2).find("span").text(rows.nativeplace||"N/A");
			$(".person_img img").prop("src",rows.image)
			$(".infor_detail_one p").html(rows.history)
			$(".infor_detail_two p").html(rows.introduction)
			var huhu="";
			for(var i=0;i<rows.works.length;i++){
				if(i==0){
					huhu +="<div class='swiper-slide'>"+
								"<img style='width:100%'  src="+rows.works[i].image+">"+
								"<p style='text-align:center'>"+rows.works[i].title+"</p>"+
							"</div>"
				}else if(i==1){
					huhu +="<div class='swiper-slide'>"+
								"<img style='width:100%'  src="+rows.works[i].image+">"+
								"<p style='text-align:center'>"+rows.works[i].title+"</p>"+
							"</div>"
				}else{
					huhu +="<div class='swiper-slide'>"+
								"<img style='width:100%' src="+rows.works[i].image+">"+
								"<p style='text-align:center'>"+rows.works[i].title+"</p>"+
							"</div>"
				}
			}
			$(".swiper-wrapper").html(huhu);
			var mySwiper = new Swiper ('.swiper-container', {
			    slidesPerView :4,
			    spaceBetween : 10,
				centeredSlides : true,
			})        
		}
	});
	$(".xihuan").click(function(){
		var uid =JSON.parse(localStorage.getItem('userinfo')).mid;
		console.log("asd");
		$.ajax({
			type:"get",
			url:"http://www.duechina.com/api/index.php/activity/collect?uid="+uid+"&artid="+aid,
			async:true,
			success:function(data){
				mui.alert(data.status)
			}
		});	
	})
	$(".mui-bar-footer").on("focus","p textarea",function(){
		$(".mui-bar-footer").css("height","164px");
		$(this).parent("p").css("flex-direction","column");
		$(".mui-bar-footer").find("span").css("display","none");
		$(".mui-bar-footer").find(".aaa").css("display","block")
		$(this).css("height","100px");
	})
	$(".comment").click(function(){
		var uid = JSON.parse(localStorage.getItem('userinfo')).username;
		var comment = "comment"
		$.ajax({
			type:"get",
			url:"http://www.duechina.com/api/index.php/activity/addexpress?artid="+aid+"&uid="+uid+"&usercomm="+comment+"&title="+title+"&description="+$("#textarea").val(),
			async:true,
			success:function(data){
				$("#textarea").val("");
				$(".mui-bar-footer").css("height","44px");
				$(".mui-bar-footer p textarea").parent("p").css("flex-direction","");
				$(".mui-bar-footer").find("span").css("display","block");
				$(".mui-bar-footer").find(".aaa").css("display","none")
				$(".mui-bar-footer p textarea").css("height","30px");
				
			}
		});	
	})
})
