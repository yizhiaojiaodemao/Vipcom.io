//手机图片
$('.loginimg').mouseover(function(){
				
				$(this).stop().animate({'margin-left':'30px'},500);
				$('.phoneimg').stop().fadeIn(500);
			})
			$('.loginimg').mouseout(function(){
			$(this).stop().animate({'margin-left':'94px'},500);
	
				$('.phoneimg').stop().fadeOut(500);
			})


//账号登录判断
var user=$('.username').val();
	var reg=/(1[3-9]\d{9}$)/;

$('.head li').eq(0).click(function(){
		$(this).css('color','#e4007f')
		})
$('.head li').eq(2).click(function(){
		$(this).css('color','#e4007f')
		});

//输入用户名框为空点击密码聚焦事件：用户名输入为空
$('.password').focus(function(){
	if($('.username').val()==''){
		$('.usertip').html('请输入用户名或账号');
		$('.userinput').css('border-color','red');
	}
	else{
	
	if(!reg.test(user)){
	$('.usertip').html('请输入正确格式的手机号码')
	}
	}
})
//判断手机号码

//密码框失焦事件
$('.password').blur(function(){
		$('.pwdtip').html('请输入密码');
		$('.pwd').css('border-color','red')
	
})

$('.username').blur(function(){
if($('.username').val()==''){
		$('.usertip').html('请输入用户名或账号');
		$('.userinput').css('border-color','red')
	}
else{
		
	if(!reg.test(user)){
	$('.usertip').html('请输入正确格式的手机号码')
	}
}
})

//表单互换
//$('.head li').click(function(){
//	var index=$(this).index();
//	$('form').eq(index).addClass('current');
//	$('form').eq(index).siblings().removeClass('current');	
//})

$('.head li').eq(0).click(function(){
	$('.form1').removeClass('current');	
	$('.form2').addClass('current');
	
})
$('.head li').eq(1).click(function(){
	$('.form2').removeClass('current');	
	$('.form1').addClass('current');
	
})