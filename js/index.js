;$(function(){
	$('.container').on('touchstart', '.item', function(event) {
		$(this).css({
			opacity: '.2'
		})
		setTimeout(function(){
			$(this).removeAttr('style')
		}.bind(this),500)
		snsEvent.trigger('randomSounds')
	});
})

snsEvent.listen('randomSounds',function(){
	console.log('bofang')
})
