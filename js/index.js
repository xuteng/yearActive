var preload;
var active = {
	pageAnimateActions:[function(domObj){
		var img = $('<img src="img\/'+domObj.doms[domObj.domIndex]+'.jpg" class="trans '+domObj.doms[domObj.domIndex]+'" />');
		img.css({
			top:GetRandomNum(20,30)+'%',
			left: 0,
			width:'100%'
		}).appendTo('.actives')
		setTimeout(function(){
			img.addClass('zoomIn animated')
		}.bind(this))
		setTimeout(function(){
			img.addClass('leave1')
		},1800)
		setTimeout(function(){
			img.remove()
		},2000)
	},function(domObj){
		var img = $('<img src="img\/'+domObj.doms[domObj.domIndex]+'.jpg" class="trans '+domObj.doms[domObj.domIndex]+'" />');
		img.css({
			top:GetRandomNum(20,30)+'%',
			left: 0,
			width:'100%'
		}).appendTo('.actives')
		setTimeout(function(){
			img.addClass('slideInLeft animated')
		}.bind(this))
		setTimeout(function(){
			img.addClass('leave1')
		},1200)
		setTimeout(function(){
			img.remove()
		},1500)
	},function(domObj){
		var img = $('<img src="img\/'+domObj.doms[domObj.domIndex]+'.jpg" class="trans '+domObj.doms[domObj.domIndex]+'" />');
		img.css({
			top:GetRandomNum(20,30)+'%',
			left: 0,
			width:'100%'
		}).appendTo('.actives')
		setTimeout(function(){
			img.addClass('slideInRight animated')
		}.bind(this))
		setTimeout(function(){
			img.addClass('leave1')
		},1200)
		setTimeout(function(){
			img.remove()
		},1500)
	}],
	animateActions:[function(domObj){
		var img = $('<img src="img\/'+domObj.doms[domObj.domIndex]+'.png" class="trans '+domObj.doms[domObj.domIndex]+' init1" ><\/img>');
		img.appendTo('.actives')
		setTimeout(function(){
			img.addClass('enter1').css({
				top:GetRandomNum(10,70)+'%',
				transform:'translateX(-'+GetRandomNum(40,60)+'%)'
			}).width(GetRandomNum(30,60)+'%');
		}.bind(this),300)
		setTimeout(function(){
			img.removeClass('enter1').addClass('leave1')
		},1200)
		setTimeout(function(){
			img.remove()
		},1500)
	},function(domObj){
		var img = $('<img src="img\/'+domObj.doms[domObj.domIndex]+'.png" class="trans '+domObj.doms[domObj.domIndex]+' init2" />');
		img.css({
			top:GetRandomNum(20,60)+'%',
			left: GetRandomNum(20,60)+'%',
			width:GetRandomNum(30,50)+'%'
		}).appendTo('.actives')
		setTimeout(function(){
			img.addClass('enter2')
		}.bind(this))
		setTimeout(function(){
			img.addClass('leave2')
		},1200)
		setTimeout(function(){
			img.remove()
		},1500)
	},function(domObj){
		var img = $('<img src="img\/'+domObj.doms[domObj.domIndex]+'.png" class="trans '+domObj.doms[domObj.domIndex]+'" />');
		img.css({
			bottom:GetRandomNum(20,60)+'%',
			right: GetRandomNum(20,60)+'%',
			width:GetRandomNum(30,50)+'%'
		}).appendTo('.actives')
		setTimeout(function(){
			img.addClass('jackInTheBox animated')
		}.bind(this))
		setTimeout(function(){
			img.addClass('leave1')
		},1200)
		setTimeout(function(){
			img.remove()
		},1500)
	},function(domObj){
		var img = $('<img src="img\/'+domObj.doms[domObj.domIndex]+'.png" class="trans '+domObj.doms[domObj.domIndex]+'" />');
		img.css({
			top:GetRandomNum(20,60)+'%',
			left: GetRandomNum(20,60)+'%',
			width:GetRandomNum(30,50)+'%'
		}).appendTo('.actives')
		setTimeout(function(){
			img.addClass('bounceInDown animated')
		}.bind(this))
		setTimeout(function(){
			img.addClass('leave1')
		},1200)
		setTimeout(function(){
			img.remove()
		},1500)
	},function(domObj){
		var img = $('<img src="img\/'+domObj.doms[domObj.domIndex]+'.png" class="trans '+domObj.doms[domObj.domIndex]+'" />');
		img.css({
			top:GetRandomNum(20,60)+'%',
			left: GetRandomNum(20,60)+'%',
			width:GetRandomNum(30,50)+'%'
		}).appendTo('.actives')
		setTimeout(function(){
			img.addClass('bounceInUp animated')
		}.bind(this))
		setTimeout(function(){
			img.addClass('leave1')
		},1200)
		setTimeout(function(){
			img.remove()
		},1500)
	},function(domObj){
		var img = $('<img src="img\/'+domObj.doms[domObj.domIndex]+'.png" class="trans '+domObj.doms[domObj.domIndex]+'" />');
		img.css({
			top:GetRandomNum(20,60)+'%',
			left: GetRandomNum(20,60)+'%',
			width:GetRandomNum(30,50)+'%'
		}).appendTo('.actives')
		setTimeout(function(){
			img.addClass('flipInY animated')
		}.bind(this))
		setTimeout(function(){
			img.addClass('leave1')
		},1200)
		setTimeout(function(){
			img.remove()
		},1500)
	},function(domObj){
		var img = $('<img src="img\/'+domObj.doms[domObj.domIndex]+'.png" class="trans '+domObj.doms[domObj.domIndex]+'" />');
		img.css({
			top:GetRandomNum(20,60)+'%',
			left: GetRandomNum(20,50)+'%',
			width:GetRandomNum(30,50)+'%'
		}).appendTo('.actives')
		setTimeout(function(){
			img.addClass('rotateIn animated')
		}.bind(this))
		setTimeout(function(){
			img.addClass('leave1')
		},1200)
		setTimeout(function(){
			img.remove()
		},1500)
	},function(domObj){
		var img = $('<img src="img\/'+domObj.doms[domObj.domIndex]+'.png" class="trans '+domObj.doms[domObj.domIndex]+'" />');
		img.css({
			top:GetRandomNum(20,60)+'%',
			left: GetRandomNum(20,50)+'%',
			width:GetRandomNum(30,50)+'%'
		}).appendTo('.actives')
		setTimeout(function(){
			img.addClass('slideInLeft animated')
		}.bind(this))
		setTimeout(function(){
			img.addClass('leave1')
		},1200)
		setTimeout(function(){
			img.remove()
		},1500)
	},function(domObj){
		var img = $('<img src="img\/'+domObj.doms[domObj.domIndex]+'.png" class="trans '+domObj.doms[domObj.domIndex]+'" />');
		img.css({
			top:GetRandomNum(20,60)+'%',
			left: GetRandomNum(20,50)+'%',
			width:GetRandomNum(30,50)+'%'
		}).appendTo('.actives')
		setTimeout(function(){
			img.addClass('slideInRight animated')
		}.bind(this))
		setTimeout(function(){
			img.addClass('leave1')
		},1200)
		setTimeout(function(){
			img.remove()
		},1500)
	},function(domObj){
		var img = $('<img src="img\/'+domObj.doms[domObj.domIndex]+'.png" class="trans '+domObj.doms[domObj.domIndex]+'" />');
		img.css({
			top:GetRandomNum(20,60)+'%',
			left: GetRandomNum(20,50)+'%',
			width:GetRandomNum(30,50)+'%'
		}).appendTo('.actives')
		setTimeout(function(){
			img.addClass('zoomInDown animated')
		}.bind(this))
		setTimeout(function(){
			img.addClass('leave1')
		},1800)
		setTimeout(function(){
			img.remove()
		},2000)
	},function(domObj){
		var img = $('<img src="img\/'+domObj.doms[domObj.domIndex]+'.png" class="trans '+domObj.doms[domObj.domIndex]+'" />');
		img.css({
			top:GetRandomNum(20,60)+'%',
			left: GetRandomNum(20,50)+'%',
			width:GetRandomNum(30,50)+'%'
		}).appendTo('.actives')
		setTimeout(function(){
			img.addClass('zoomInUp animated')
		}.bind(this))
		setTimeout(function(){
			img.addClass('leave1')
		},1800)
		setTimeout(function(){
			img.remove()
		},2000)
	},function(domObj){
		var img = $('<img src="img\/'+domObj.doms[domObj.domIndex]+'.png" class="trans '+domObj.doms[domObj.domIndex]+'" />');
		img.css({
			top:GetRandomNum(20,60)+'%',
			left: GetRandomNum(20,50)+'%',
			width:GetRandomNum(30,50)+'%',
			opacity:0
		}).appendTo('.actives')
		setTimeout(function(){
			img.addClass('rollIn animated')
		}.bind(this))
		setTimeout(function(){
			img.addClass('leave1')
		},1200)
		setTimeout(function(){
			img.remove()
		},1500)
	}],
	curDoms: 0,
	activeDoms:[{
		id:'part1',
		doms:['a1','a2','a3','a4','a5','a6','a7','a8','a9'],
		domIndex:-1,
		activeAction:function(){
			if(this.domIndex<this.doms.length){
				if(this.domIndex==-1){
					$('.container').removeClass('nobg').addClass(this.id)
					this.domIndex++;
					return
				}
				$('.container').addClass('nobg');
				(active.animateActions[GetRandomNum(0,active.animateActions.length-1)])(this)
				this.domIndex++;
			}else{
				active.curDoms++;
				if(active.curDoms==active.activeDoms.length){
					snsEvent.trigger('toShare')
				}
			}
		}
	},{
		id:'part2',
		doms:['b1','b2','b3','b4','b5','b6','b7','b8','b9','b10','b11','b12','b13'],
		domIndex:-1,
		activeAction:function(){
			if(this.domIndex<this.doms.length){
				if(this.domIndex==-1){
					$('.container').removeClass('nobg').addClass(this.id)
					this.domIndex++;
					return
				}
				$('.container').addClass('nobg');
				if(this.domIndex==2||this.domIndex==10||this.domIndex==11){
					(active.pageAnimateActions[GetRandomNum(0,active.pageAnimateActions.length-1)])(this);
				}else{
					(active.animateActions[GetRandomNum(0,active.animateActions.length-1)])(this);
				}
				this.domIndex++;
			}else{
				active.curDoms++;
				if(active.curDoms==active.activeDoms.length){
					snsEvent.trigger('toShare')
				}
			}
		}
	},{
		id:'part3',
		doms:['c1','c2','c3','c4','c5','c6'],
		domIndex:-1,
		activeAction:function(){
			if(this.domIndex<this.doms.length){
				if(this.domIndex==-1){
					$('.container').removeClass('nobg').addClass(this.id)
					this.domIndex++;
					return
				}
				$('.container').addClass('nobg');
				(active.animateActions[GetRandomNum(0,active.animateActions.length-1)])(this)
				this.domIndex++;
			}else{
				active.curDoms++;
				if(active.curDoms==active.activeDoms.length){
					snsEvent.trigger('toShare')
				}
			}
		}
	},{
		id:'part4',
		doms:['d1','d2','d3','d4','d5','d6','d7','d8'],
		domIndex:-1,
		activeAction:function(){
			if(this.domIndex<this.doms.length){
				if(this.domIndex==-1){
					$('.container').removeClass('nobg').addClass(this.id)
					this.domIndex++;
					return
				}
				$('.container').addClass('nobg');
				(active.animateActions[GetRandomNum(0,active.animateActions.length-1)])(this)
				this.domIndex++;
			}else{
				active.curDoms++;
				if(active.curDoms==active.activeDoms.length){
					snsEvent.trigger('toShare')
				}
			}
		}
	},{
		id:'part5',
		doms:['e1','e2','e3','e4','e5','e6','e7','e8','e9','e10','e11','e12'],
		domIndex:-1,
		activeAction:function(){
			if(this.domIndex<this.doms.length){
				if(this.domIndex==-1){
					$('.container').removeClass('nobg').addClass(this.id)
				}
				$('.container').addClass('nobg')
				(active.animateActions[GetRandomNum(0,active.animateActions.length-1)])(this)
				this.domIndex++;
			}else{
				active.curDoms++;
				if(active.curDoms==active.activeDoms.length){
					snsEvent.trigger('toShare')
				}
			}
		}
	}],

	noActTimer:null,
	domEvents: function() {
		var that = this
		$('.container').on('touchend','.item', function(event) {
			snsEvent.trigger('randomSounds')
		})
		$('.start').on('click',function(){
			$(this).addClass('hide')
			that.curDoms=0;
			that.domAdd()
		})
		$('.share .content').on('click',function(event){
			if($(event.target).hasClass('btn-share')){
				$('.share .share-container').addClass('show')
				return
			}
			$(this).parent().addClass('hide');
		})
		this.domFirst();
	},
	resetNoAct:function(){
		clearTimeout(this.noActTimer)
		this.noActTimer = setTimeout(function(){
			snsEvent.trigger('toShare')
		},5000)
	},
	domFirst:function(){
		$('.title').addClass('active');
		setTimeout(function(){
			$('.start .first-bg').addClass('active');
			$('.start .btn-enter').addClass('active');
		},1000)
		setTimeout(function(){
			$('.start .btn-enter .btn').addClass('active')
		},2000)
	},
	domShare:function(){
		$('.share .first-child').addClass('active')
		setTimeout(function(){
			$('.share .second-child').addClass('active')
		},400)
		setTimeout(function(){
			$('.share .third-child').addClass('active')
		},800)
		setTimeout(function(){
			$('.share .code').addClass('active')
		},1200)
		setTimeout(function(){
			$('.share .btn').addClass('active')
		},2000)
	},
	domAdd:function(){
		if(this.activeDoms.length==this.curDoms){
			this.curDoms=0
			$.each(this.activeDoms,function(index,doms){
				doms.domIndex = -1
			})
		}
		(this.activeDoms[this.curDoms]).activeAction()
	}
};
var soundTimer1 = null;
snsEvent.listen('randomSounds',function(){
	active.resetNoAct();
	active.domAdd()
	var instance = createjs.Sound.play(GetRandomNum(1,8));
	instance.volume = 1;
	backSound&&(backSound.volume = .2);
	instance.addEventListener("complete", function (instance) {
		clearTimeout(soundTimer1)
		soundTimer1 = setTimeout(function(){
			backSound&&(backSound.volume = 1);
		},3000)
	});
});
snsEvent.listen('toShare',function(){
	$('.share').removeClass('hide')
	$('.share .share-container').removeClass('show')
	setTimeout(function(){
		active.domShare();
	},300)
})
function init() {
	var assetsPath = "audio/";
	var sounds = [
		{src: "9.mp3", id: 0},
		{src: "1.mp3", id: 1},
		{src: "2.mp3", id: 2},
		{src: "3.mp3", id: 3},
		{src: "4.mp3", id: 4},
		{src: "5.mp3", id: 5},
		{src: "6.mp3", id: 6},
		{src: "7.mp3", id: 7},
		{src: "8.mp3", id: 8}
	];

	createjs.Sound.alternateExtensions = ["mp3"];	// add other extensions to try loading if the src file extension is not supported
	createjs.Sound.addEventListener("fileload", createjs.proxy(soundLoaded, this)); // add an event listener for when load is completed
	createjs.Sound.registerSounds(sounds, assetsPath);
}
var i= 0
var backSound
function soundLoaded(event) {
	i++;	
	if(i==9){
		active.domEvents();
		backSound = createjs.Sound.play(0,{loop:-1})
	}
}
function stop() {
	if (preload != null) {
		preload.close();
	}
	createjs.Sound.stop();
}
function GetRandomNum(Min,Max){   
	var Range = Max - Min;   
	var Rand = Math.random();   
	return(Min + Math.round(Rand * Range));   
}   

;$(function(){
	init();
})
