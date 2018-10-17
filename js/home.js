var num = 0;
var timer;

function play() {
	num++;
	if(num > 5) {
		num = 0
		$('.inner_slide_img ul').css({
			'margin-left': (-num * 974) + "px"
		})
		num = 1
	}
	if(num == 5) {
		$('.inner_slide_tab ul li').eq(0).addClass('current').siblings().removeClass('current')
	}
	$('.inner_slide_tab ul li').eq(num).addClass('current').siblings().removeClass('current')
	$('.inner_slide_img ul').animate({
		'margin-left': (-num * 974) + "px"
	}, 1000)
}
timer = setInterval(play, 4000);

$(function(){
	
	$('.inner_slide_box').hover(function() {
		clearInterval(timer)
		$("#toLeft").animate({
			'left': '0'
		}, 300)
		$("#toRight").animate({
			'right': '0'
		}, 300)
	}, function() {
		timer = setInterval(play, 4000);
		$("#toLeft").animate({
			'left': '-33px'
		}, 300)
		$("#toRight").animate({
			'right': '-33px' 
		}, 300)
	})
	
	$('.province').click(function(e){
		$('.hide').show()
		$('.province').css({'background':'#fff', 'border-color':'#ccc #ccc transparent #ccc', 'border':'1px solid #ccc'})
		e.stopPropagation();  //指定点击的对象为当前对象，非document
	})
	
	$('.hide').click(function(e){
		e.stopPropagation();  //指定点击的对象为当前对象，非document
	})
	
	$('.hide li').click(function(){
		$(this).addClass('chosen').siblings().removeClass('chosen')
	})
	
	$('#close_this').click(function(){
		$(this).parent().parent().hide();
		$('.province').removeAttr('style')
	})
	
	$(document).click(function(){
		$('.hide').hide()
		$('.province').css({'border':'none', 'background':'transparent'})
	})
})

$('ul.top li').hover(function(){
	$(this).children('span').addClass('pop')
},function(){
	$(this).children('span').removeClass('pop')
})

$(".inner_slide_tab ul li").click(function() {
	$(this).addClass('current').siblings().removeClass('current')
	num = $(this).index(); //获取索引 图片索引与按钮的索引是一一对应的

	$('.inner_slide_img ul').animate({
		'margin-left': (-num * 974) + "px"
	}, 100)
});

$(".inner_slide_tab ul li").hover(function() {
	$(this).addClass('current').siblings().removeClass('current')
	num = $(this).index(); //获取索引 图片索引与按钮的索引是一一对应的

	$('.inner_slide_img ul').stop().animate({
		'margin-left': (-num * 974) + "px"
	}, 100)
});

$("#toLeft").click(function() {
	num--;
	if(num < 0) {
		num = 5
		$('.inner_slide_img ul').css(
			'margin-left', (-num * 974) + "px"
		)
		num = 4
	}
	console.log(num);
	$('.inner_slide_tab ul li').eq(num).addClass('current').siblings().removeClass('current')

	$('.inner_slide_img ul').stop().animate({
		'margin-left': (-num * 974) + "px"
	}, 300)
})

$("#toRight").click(function() {
	num++;
	if(num > 5) {
		num = 0
		$('.inner_slide_img ul').css(
			'margin-left', (-num * 974) + "px"
		)
		num = 1
	}
	if(num==5){
		$('.inner_slide_tab ul li').eq(0).addClass('current').siblings().removeClass('current')
	}
	console.log(num);
	$('.inner_slide_tab ul li').eq(num).addClass('current').siblings().removeClass('current')

	$('.inner_slide_img ul').animate({
		'margin-left': (-num * 974) + "px"
	}, 300)
})

$(window).scroll(function(){
	var $specialTop = $('.content_special').offset().top- $('.content_special').height()
	var $femaleTop = $('.content_femaleBrand').offset().top-$('.content_femaleBrand').height()
	var $scrollTop = $(this).scrollTop()
	if($scrollTop >= $specialTop){
		$('.left_guideTool').css({'position':'fixed', 'top': '20%', 'left': '50%', 'z-index': 1000, 'margin-left': '-630px'})
		$('.left_guideTool').fadeIn(500)
		$($('ol').children('li').eq(0)).addClass('active').siblings().removeClass('active')
		if($scrollTop >= $femaleTop){
			$($('ol').children('li').eq(1)).addClass('active').siblings().removeClass('active')
		}
		
	}
	else{	
		$('.left_guideTool').fadeOut(500)
	}
})

$('.left_guideTool ol li').click(function(){
	var $index = $(this).index()
	if($index == 0){
		$('html,body').animate({
			scrollTop: $('.content_special').offset().top
		},500)
	}
	if($index == 1){
		$('html,body').animate({
			scrollTop: $('.content_femaleBrand').offset().top
		},500)
	}
})