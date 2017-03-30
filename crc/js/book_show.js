$(function(){
	var a =document.location.href;
	var aid = a.split('=')[1];
//	var aid= "1044"
	var buylink=""
	$.ajax({
		type:"get",
		url:"http://www.duechina.com/api/index.php/archives/show/?aid="+aid,
		async:true,
		success:function(data){
			var rows=data.result;
			$(".mui-title").text((rows.title||"N/A"));
			$(".person_information_one_left h4").text((rows.title||"N/A"));
			$(".person_information_one_left p").eq(0).find("span").text((rows.category||"N/A"));
			$(".person_information_one_left p").eq(1).find("span").text(rows.publisher||"N/A");
			$(".person_information_one_left p").eq(2).find("span").text(rows.publishdate||"N/A");
			$(".person_information_one_left p").eq(3).find("span").text(rows.isbn||"N/A");
			$(".person_img img").prop("src",rows.image)
			$(".infor_detail_one p").html(rows.introduction+rows.content)
			$(".infor_detail_two p").html(rows.directory)
			$(".infor_detail_three_Athor p").html(rows.abouttheauthor)
			$(".author_img img").prop("src",rows.author[0].image)
			$(".author_img h5").html(rows.title)
			$(".infor_detail_one p img").prop("style","width: 100%;")
			buylink=rows.buylink
		}
	});
	$(".xihuan").click(function(){
		var uid =JSON.parse(localStorage.getItem('userinfo')).mid;
		console.log("asd")
		$.ajax({
			type:"get",
			url:"http://www.duechina.com/api/index.php/activity/collect?uid="+uid+"&artid="+aid,
			async:true,
			success:function(data){
				mui.alert(data.status)
			}
		});
		
		
	})
	
	
	$(".person_information>p button").click(function(){
		window.location.href=buylink;
	})
})

