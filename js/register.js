var tel=$('.tel').val();
var reg=/(1[3-9]\d{9}$)/;

$('.yanzhengma').focus(function(){
	if($('.tel').val()==''){
		$('.phonetip').html('请输入您的手机号码');
		$('.phoneno').css('border-color','red');
	}
	else{
	
	if(!reg.test(tel)){
	$('.phonetip').html('请输入正确格式的手机号码')
	}
	}
})

$('.yanzhengma').blur(function(){
	if($('.yanzhengma').val()==''){
		$('.gettip').html('请输入密码');
		$('.compare').css('border-color','red')
	}else{
		$('.gettip').html('');
		$('.compare').css('border-color','#b5b5b5')
	}
})

$('.pwdtext').blur(function(){
	if($('.pwdtext').val()==''){
		$('.pwdtip').html('密码不能为空');
		$('.password').css('border-color','red')
	}
	else{
		$('.pwdtip').html('');
		$('.password').css('border-color','#b5b5b5')
	}
})
$('.checkbox').click(function(){
	
	if($('.cmppwdtext').val()!=$('.pwdtext').val()){
		$('.cmptip').html('两次密码不一致，请重新输入');
		$('.cmppassword').css('border-color','red')
	}
	else{
		$('.cmptip').html('');
		$('.cmppassword').css('border-color','#B5B5B5');
	}
})



