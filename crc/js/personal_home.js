$(function(){
	$('.list_div').on('click',function(){
		$(this).parent().find('.list_toggle').show();
	});
	$(document).on('click',".list_bottom",function(){
		//alert(1);
		$(this).parent().hide();
	});
	var userinfo = JSON.parse(localStorage.getItem("userinfo"));
	if(userinfo){
		$(".cont_top dd>p:nth-child(1)").text(userinfo.username);
		var uid=userinfo.mid;
	}
	$.ajax({
		type:"get",
		url:"http://www.duechina.com/api/index.php/activity/collectlist?uid="+uid,
		async:true,
		success:function(data){
			var rows = JSON.parse(data).result
			var colloect=""
			console.log(rows)
			if(rows.length>0){
				for(var i = 0;i<rows.length;i++){
				 colloect += "<dl  class='list_dl list_dl_noe'>"+
								"<dt><img src="+rows[i].image+"></dt>"+
								"<dd>"+rows[i].title+"</dd>"+
							"</dl>"
				}
				
			}else{
				colloect="<div style='height:40px;width:100%;line-height:40px;text-align:center'>暂无收藏</div>";
			}
			$("#My_collection .list_toggle").html(colloect+'<div class="list_bottom"></div>');
		}
	});
	

});
