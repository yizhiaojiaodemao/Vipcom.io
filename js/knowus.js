//
//

$(window).scroll(function(){
	var scrolltop=$(window).scrollTop();
	
	if(scrolltop>100){

		$('.aside').addClass('aside1');
		
	}
	else{
		$('.aside').removeClass('aside1');
	}
})
$('.left li').eq(0).click(function(){
	$(this).addClass('pic1');
	$(this).siblings().removeClass('pic1');
	$('html,body').animate({'scrollTop':'0px'},500);

});
$('.left li').eq(1).click(function(){
	$(this).addClass('pic1');
	$(this).siblings().removeClass('pic1');
	$('html,body').animate({'scrollTop':'2807px'},500);

})
$('.left li').eq(2).click(function(){
	$(this).addClass('pic1');
	$(this).siblings().removeClass('pic1');
	$('html,body').animate({'scrollTop':'3480px'},500);

})
$('.left li').eq(3).click(function(){
	$(this).addClass('pic1');
	$(this).siblings().removeClass('pic1');
	$('html,body').animate({'scrollTop':'4057px'},500);

})