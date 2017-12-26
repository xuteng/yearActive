
var active = {
	curDoms: [],
	domEvents: function() {
		var that = this
		window.addEventListener('touchmove', function(event) {
			$(event.target).addClass('active')
			console.log(event.touches)
			// that.domAdd(event.target)
		},false)
		// window.addEventListener('touchstart', function(event) {
		// 	$(event.target).addClass('active')
		// 	// that.domAdd(event.target)
		// },false)
	},
	domAdd:function(dom){
		this.curDoms.push(dom)
		console.log(this.curDoms)
	},
	domDel:function(){
		var that = this;
		function timer(){
			if(that.curDoms.length!==0){
				$(that.curDoms.shift()).removeClass('active')
			}
			setTimeout(timer,1000);
		}
		timer();
	}
};
snsEvent.listen('randomSounds',function(){
	console.log('bofang')
});

;$(function(){
	active.domEvents();
	active.domDel();
})
