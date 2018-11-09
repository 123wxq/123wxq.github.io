
//回到顶部
  function backTop(){
  	var scrollTop=$(window).scrollTop();
		if(scrollTop>0){
			$('html,body').animate({'scrollTop':'0'},1000);
		}
  }
  backTop();
  
$(function(){
	//切换图标和字体颜色
	$('.firstRow .imgTextlist').hover(function(){	
		var listIndex=$(this).index()+1;
		$(this).find('img').attr('src','images/iconred'+listIndex+'.png');
		$(this).find('.media-body').find('h3').css('color','#fb2e66');
	},function(){
		var imgUrl=$(this).find('img').attr('src');
		var listIndex=$(this).index()+1;
		$(this).find('img').attr('src','images/icon'+listIndex+'.png');
		$(this).find('.media-body').find('h3').css('color','#000');
	})
	$('.secondRow .imgTextlist').hover(function(){	
		var listIndex=$(this).index()+4;
		$(this).find('img').attr('src','images/iconred'+listIndex+'.png');
		$(this).find('.media-body').find('h3').css('color','#fb2e66');
	},function(){
		var imgUrl=$(this).find('img').attr('src');
		var listIndex=$(this).index()+4;
		$(this).find('img').attr('src','images/icon'+listIndex+'.png');
		$(this).find('.media-body').find('h3').css('color','#000');
	})
	
	//电商市场动图
	$('.World .left').hover(function(){
		$(this).find('img').addClass('animated bounce')
	},function(){
		$(this).find('img').removeClass('animated bounce')
	})
	$('.World .right').hover(function(){
		$(this).find('img').addClass('animated pulse')
	},function(){
		$(this).find('img').removeClass('animated pulse')
	})

  //企业注册验证
  $('#company form :input').blur(function(){
  	//企业名验证
		if($(this).is('#comName')){
			if(this.value==''){
				$(this).siblings('label').find('span').append(' 企业名不能为空！');				
			}else{
				var check=$('<span class="fa fa-check form-control-feedback"></span>');
				$(this).parent().find('input').after(check);
			}
		}
	})	
		//是否选中
		if(!$('#comtype select option').is(':checked')){
			
		} 
		
 
	//个人注册验证
	$('#person form :input').blur(function(){
		
		//进去之前先把之前的删掉
		$(this).siblings('label').find('span').text('');
		$(this).parent().find('.fa-check').remove();
		
		//个人用户名验证
		if($(this).is('#reuserName')){
			if(this.value==''){
				$(this).siblings('label').find('span').append(' 用户名不能为空！');				
			}else{
				var check=$('<span class="fa fa-check form-control-feedback"></span>');
				$(this).parent().find('input').after(check);
			}
		}
		
		

		//密码验证
		if($(this).is('#repwd')){
			if(this.value==''){
				$(this).siblings('label').find('span').append(' 密码不能为空！');				
			}else{
				var check=$('<span class="fa fa-check form-control-feedback"></span>');
				$(this).parent().find('input').after(check);
			}
		}
		
		//确认密码验证
		if($(this).is('#recipwd')){
			if(this.value==""|| this.value!=$('#repwd').val()){
				$(this).siblings('label').find('span').append(' 两次密码不一致！');	
			}else{
				var check=$('<span class="fa fa-check form-control-feedback"></span>');
				$(this).parent().find('input').after(check);
			}
		}
		
		//手机号码验证 自身不为空且11位
		if($(this).is('#reTel')){
			var reg =  /^0?(13[0-9]|15[012356789]|17[0678]|18[0123456789]|14[57])[0-9]{8}$/;
			if(this.value==''){
				$(this).siblings('label').find('span').append(' 手机号不为空！');	
			}else if(this.value.length< 11){
					$(this).siblings('label').find('span').append(' 手机号长度有误！');	
			}else if(!this.value.match(reg)){
				$(this).siblings('label').find('span').append(' 手机号不存在！');	
			}else{
				var check=$('<span class="fa fa-check form-control-feedback"></span>');
				$(this).parent().find('input').after(check);
			}
		}
		
		//邮箱验证
		if($(this).is('#email')){
			 var ema= /^[a-zA-Z0-9_.-]+@[a-zA-Z0-9-]+(\.[a-zA-Z0-9-]+)*\.[a-zA-Z0-9]{2,6}$/;
			 if(this.value==''){
				$(this).siblings('label').find('span').append(' 邮箱不为空！');	
			}else	if(!this.value.match(ema)){
			 		$(this).siblings('label').find('span').append(' 邮箱格式错误！');	
			 }else{
				var check=$('<span class="fa fa-check form-control-feedback"></span>');
				$(this).parent().find('input').after(check);
				}
		}

  });
	//按钮验证 全都有.fa-check表示都填写成功了
		$('.btnReg').click(function(){
			if($('.fa-check').length==5){
				alert('注册成功');
			}else{
				alert('注册失败');
			}
			
		})
		
	
})

 
