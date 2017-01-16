
$(function(){
	function getdata(){

        $.ajax({
                url: 'http://localhost/ue/src/data/f.json',
                type: 'POST',
                success: function(data){
                       if(!data['data']){
                            data.data = [] ;
                        }
                        console.log(data.data.length) ;
                        $.each(data.data,function(index){
		                	console.log($(this));
		                	if($(this)[0].class==1){
		                		var mark='未分类';
		                	}else if($(this)[0].class==2){
		                		var mark='JavaScript';
		                	}else if($(this)[0].class==3){
		                		var mark='HTML';
		                	}else if($(this)[0].class==4){
		                		var mark='CSS';
		                	}
		                	if($(this)[0].img=='./imagesa/'){
		                		alert($(this)[0].img)
		                		var img='./images/img04.jpg';
		                	}else if($(this)[0].img==''){
		                		var img='./images/img04.jpg';
		                	}else{
		                		var img=$(this)[0].img;
		                	}
		                	if(index%2==0){
		                		$('#main-content').append('<article class="list">'+
																'<div class="col-1-2 right">'+
																	'<img class="listimg" src="'+img+'" />'+
																'</div>'+
																'<div class="col-1-2 left">'+
																	'<a class="art-category left" href="javascript:;">'+mark+'</a>'+
																	'<div class="clear"></div>'+
																	'<div class="art-content">'+
																		'<h2>'+$(this)[0].title+'</h2>'+
																		'<div class="info">By Admin on '+$(this)[0].date+'</div>'+
																		'<div class="line"></div><p>'+$(this)[0].brief+
																		
																		'</p><p><a href="javascript:;" class="more" textid="'+index+'">Read More</a></p>'+
																	'</div>'+	
																'</div>'+
															'</article>')
		                	}else{
		                		$('#main-content').append('<article class="list">'+
																'<div class="col-1-2 ">'+
																	'<img class="listimg" src="'+$(this)[0].img+'" />'+
																'</div>'+
																'<div class="col-1-2 ">'+
																	'<a class="art-category right" href="javascript:;">'+mark+'</a>'+
																	'<div class="clear"></div>'+
																	'<div class="art-content">'+
																		'<h2>'+$(this)[0].title+'</h2>'+
																		'<div class="info">By Admin on '+$(this)[0].date+'</div>'+
																		'<div class="line"></div><p>'+$(this)[0].brief+
																		
																		'</p><p><a href="javascript:;" class="more" textid="'+index+'">Read More</a></p>'+
																	'</div>'+	
																'</div>'+
															'</article>')
		                	}
		                })
		                $('.ext').click(function(){
		                	$('.textbox').hide();
		                })
		                $('.more').click(function(){
		                	var id=$(this).attr('textid');
		                	$('.textmain').html(data.data[id].text);
		                	$('.textbox').show();
		                }) 
		                $('.textbox').scroll(function(){
		                	preventDefault();
		                })
                }
        });
    }
    getdata();
})
