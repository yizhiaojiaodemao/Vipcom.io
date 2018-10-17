$('.type_change ol li').click(function(){
	var $index = $(this).index();
	$(this).addClass('active').siblings().removeClass('active')
	$('.type_container ul').stop().animate({'margin-top': -($index*305)+'px'},300)
})
