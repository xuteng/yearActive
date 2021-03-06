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
	animateActions:[function(domObj,isSmall){
		var img = $('<img src="img\/'+domObj.doms[domObj.domIndex]+'.png" class="trans '+domObj.doms[domObj.domIndex]+' init1" ><\/img>');
		img.appendTo('.actives')
		setTimeout(function(){
			img.addClass('enter1').css({
				top:GetRandomNum(10,70)+'%',
				left:GetRandomNum(40,60)+'%',
				transform:'translateX(-'+GetRandomNum(40,60)+'%)'
			}).width(GetRandomNum(40,60)+'%');
			if(isSmall){
				if(domObj.doms[domObj.domIndex]=='c1'){
					img.width(GetRandomNum(20,50)+'%')
				}else{
					img.width(GetRandomNum(10,20)+'%')
				}
			}
		}.bind(this),300)
		setTimeout(function(){
			img.removeClass('enter1').addClass('leave1')
		},1200)
		setTimeout(function(){
			img.remove()
		},1500)
	},function(domObj,isSmall){
		var img = $('<img src="img\/'+domObj.doms[domObj.domIndex]+'.png" class="trans '+domObj.doms[domObj.domIndex]+' init2" />');
		if(isSmall){
			if(domObj.doms[domObj.domIndex]=='c1'){
				img.css({
					top:GetRandomNum(20,80)+'%',
					left: GetRandomNum(20,70)+'%',
					width:GetRandomNum(20,40)+'%'
				}).appendTo('.actives')
			}else{
				img.css({
					top:GetRandomNum(20,80)+'%',
					left: GetRandomNum(20,70)+'%',
					width:GetRandomNum(10,20)+'%'
				}).appendTo('.actives')
			}
		
		}else{
			img.css({
				top:GetRandomNum(20,60)+'%',
				left: GetRandomNum(20,60)+'%',
				width:GetRandomNum(40,50)+'%'
			}).appendTo('.actives')
		}
		setTimeout(function(){
			img.addClass('enter2')
		}.bind(this))
		setTimeout(function(){
			img.addClass('leave2')
		},1200)
		setTimeout(function(){
			img.remove()
		},1500)
	},function(domObj,isSmall){
		var img = $('<img src="img\/'+domObj.doms[domObj.domIndex]+'.png" class="trans '+domObj.doms[domObj.domIndex]+'" />');
		if(isSmall){
			if(domObj.doms[domObj.domIndex]=='c1'){
				img.css({
					top:GetRandomNum(20,80)+'%',
					left: GetRandomNum(20,70)+'%',
					width:GetRandomNum(20,40)+'%'
				}).appendTo('.actives')
			}else{
				img.css({
					top:GetRandomNum(20,80)+'%',
					left: GetRandomNum(20,70)+'%',
					width:GetRandomNum(10,20)+'%'
				}).appendTo('.actives')
			}
		
		}else{
			img.css({
				top:GetRandomNum(20,60)+'%',
				left: GetRandomNum(20,60)+'%',
				width:GetRandomNum(40,50)+'%'
			}).appendTo('.actives')
		}
		setTimeout(function(){
			img.addClass('jackInTheBox animated')
		}.bind(this))
		setTimeout(function(){
			img.addClass('leave1')
		},1200)
		setTimeout(function(){
			img.remove()
		},1500)
	},function(domObj,isSmall){
		var img = $('<img src="img\/'+domObj.doms[domObj.domIndex]+'.png" class="trans '+domObj.doms[domObj.domIndex]+'" />');
		if(isSmall){
			if(domObj.doms[domObj.domIndex]=='c1'){
				img.css({
					top:GetRandomNum(20,80)+'%',
					left: GetRandomNum(20,70)+'%',
					width:GetRandomNum(20,40)+'%'
				}).appendTo('.actives')
			}else{
				img.css({
					top:GetRandomNum(20,80)+'%',
					left: GetRandomNum(20,70)+'%',
					width:GetRandomNum(10,20)+'%'
				}).appendTo('.actives')
			}
		
		}else{
			img.css({
				top:GetRandomNum(20,60)+'%',
				left: GetRandomNum(20,60)+'%',
				width:GetRandomNum(40,50)+'%'
			}).appendTo('.actives')
		}
		setTimeout(function(){
			img.addClass('bounceInDown animated')
		}.bind(this))
		setTimeout(function(){
			img.addClass('leave1')
		},1200)
		setTimeout(function(){
			img.remove()
		},1500)
	},function(domObj,isSmall){
		var img = $('<img src="img\/'+domObj.doms[domObj.domIndex]+'.png" class="trans '+domObj.doms[domObj.domIndex]+'" />');
		if(isSmall){
			if(domObj.doms[domObj.domIndex]=='c1'){
				img.css({
					top:GetRandomNum(20,80)+'%',
					left: GetRandomNum(20,70)+'%',
					width:GetRandomNum(20,40)+'%'
				}).appendTo('.actives')
			}else{
				img.css({
					top:GetRandomNum(20,80)+'%',
					left: GetRandomNum(20,70)+'%',
					width:GetRandomNum(10,20)+'%'
				}).appendTo('.actives')
			}
		
		}else{
			img.css({
				top:GetRandomNum(20,70)+'%',
				left: GetRandomNum(20,50)+'%',
				width:GetRandomNum(40,50)+'%'
			}).appendTo('.actives')
		}
		setTimeout(function(){
			img.addClass('bounceInUp animated')
		}.bind(this))
		setTimeout(function(){
			img.addClass('leave1')
		},1200)
		setTimeout(function(){
			img.remove()
		},1500)
	},function(domObj,isSmall){
		var img = $('<img src="img\/'+domObj.doms[domObj.domIndex]+'.png" class="trans '+domObj.doms[domObj.domIndex]+'" />');
		if(isSmall){
			if(domObj.doms[domObj.domIndex]=='c1'){
				img.css({
					top:GetRandomNum(20,80)+'%',
					left: GetRandomNum(20,70)+'%',
					width:GetRandomNum(20,40)+'%'
				}).appendTo('.actives')
			}else{
				img.css({
					top:GetRandomNum(20,80)+'%',
					left: GetRandomNum(20,70)+'%',
					width:GetRandomNum(10,20)+'%'
				}).appendTo('.actives')
			}
		
		}else{
			img.css({
				top:GetRandomNum(20,60)+'%',
				left: GetRandomNum(20,50)+'%',
				width:GetRandomNum(35,45)+'%'
			}).appendTo('.actives')
		}
		setTimeout(function(){
			img.addClass('flipInY animated')
		}.bind(this))
		setTimeout(function(){
			img.addClass('leave1')
		},1200)
		setTimeout(function(){
			img.remove()
		},1500)
	},function(domObj,isSmall){
		var img = $('<img src="img\/'+domObj.doms[domObj.domIndex]+'.png" class="trans '+domObj.doms[domObj.domIndex]+'" />');
		if(isSmall){
			if(domObj.doms[domObj.domIndex]=='c1'){
				img.css({
					top:GetRandomNum(20,80)+'%',
					left: GetRandomNum(20,70)+'%',
					width:GetRandomNum(20,40)+'%'
				}).appendTo('.actives')
			}else{
				img.css({
					top:GetRandomNum(20,80)+'%',
					left: GetRandomNum(20,70)+'%',
					width:GetRandomNum(10,20)+'%'
				}).appendTo('.actives')
			}
		
		}else{
			img.css({
				top:GetRandomNum(20,60)+'%',
				left: GetRandomNum(20,60)+'%',
				width:GetRandomNum(40,50)+'%'
			}).appendTo('.actives')
		}
		setTimeout(function(){
			img.addClass('rotateIn animated')
		}.bind(this))
		setTimeout(function(){
			img.addClass('leave1')
		},1200)
		setTimeout(function(){
			img.remove()
		},1500)
	},function(domObj,isSmall){
		var img = $('<img src="img\/'+domObj.doms[domObj.domIndex]+'.png" class="trans '+domObj.doms[domObj.domIndex]+'" />');
		if(isSmall){
			if(domObj.doms[domObj.domIndex]=='c1'){
				img.css({
					top:GetRandomNum(20,80)+'%',
					left: GetRandomNum(20,70)+'%',
					width:GetRandomNum(20,40)+'%'
				}).appendTo('.actives')
			}else{
				img.css({
					top:GetRandomNum(20,80)+'%',
					left: GetRandomNum(20,70)+'%',
					width:GetRandomNum(10,20)+'%'
				}).appendTo('.actives')
			}
		
		}else{
			img.css({
				top:GetRandomNum(20,60)+'%',
				left: GetRandomNum(10,40)+'%',
				width:GetRandomNum(40,50)+'%'
			}).appendTo('.actives')
		}
		setTimeout(function(){
			img.addClass('slideInLeft animated')
		}.bind(this))
		setTimeout(function(){
			img.addClass('leave1')
		},1200)
		setTimeout(function(){
			img.remove()
		},1500)
	},function(domObj,isSmall){
		var img = $('<img src="img\/'+domObj.doms[domObj.domIndex]+'.png" class="trans '+domObj.doms[domObj.domIndex]+'" />');
		if(isSmall){
			if(domObj.doms[domObj.domIndex]=='c1'){
				img.css({
					top:GetRandomNum(20,80)+'%',
					left: GetRandomNum(20,70)+'%',
					width:GetRandomNum(20,40)+'%'
				}).appendTo('.actives')
			}else{
				img.css({
					top:GetRandomNum(20,80)+'%',
					left: GetRandomNum(20,70)+'%',
					width:GetRandomNum(10,20)+'%'
				}).appendTo('.actives')
			}
		
		}else{
			img.css({
				top:GetRandomNum(20,70)+'%',
				left: GetRandomNum(5,50)+'%',
				width:GetRandomNum(40,50)+'%'
			}).appendTo('.actives')
		}
		setTimeout(function(){
			img.addClass('slideInRight animated')
		}.bind(this))
		setTimeout(function(){
			img.addClass('leave1')
		},1200)
		setTimeout(function(){
			img.remove()
		},1500)
	},function(domObj,isSmall){
		var img = $('<img src="img\/'+domObj.doms[domObj.domIndex]+'.png" class="trans '+domObj.doms[domObj.domIndex]+'" />');
		if(isSmall){
			if(domObj.doms[domObj.domIndex]=='c1'){
				img.css({
					top:GetRandomNum(20,80)+'%',
					left: GetRandomNum(20,70)+'%',
					width:GetRandomNum(20,40)+'%'
				}).appendTo('.actives')
			}else{
				img.css({
					top:GetRandomNum(20,80)+'%',
					left: GetRandomNum(20,70)+'%',
					width:GetRandomNum(10,20)+'%'
				}).appendTo('.actives')
			}
		
		}else{
			img.css({
				top:GetRandomNum(20,60)+'%',
				left: GetRandomNum(20,60)+'%',
				width:GetRandomNum(40,50)+'%'
			}).appendTo('.actives')
		}
		setTimeout(function(){
			img.addClass('zoomInDown animated')
		}.bind(this))
		setTimeout(function(){
			img.addClass('leave1')
		},1800)
		setTimeout(function(){
			img.remove()
		},2000)
	},function(domObj,isSmall){
		var img = $('<img src="img\/'+domObj.doms[domObj.domIndex]+'.png" class="trans '+domObj.doms[domObj.domIndex]+'" />');
		if(isSmall){
			if(domObj.doms[domObj.domIndex]=='c1'){
				img.css({
					top:GetRandomNum(20,80)+'%',
					left: GetRandomNum(20,70)+'%',
					width:GetRandomNum(20,40)+'%'
				}).appendTo('.actives')
			}else{
				img.css({
					top:GetRandomNum(20,80)+'%',
					left: GetRandomNum(10,70)+'%',
					width:GetRandomNum(10,20)+'%'
				}).appendTo('.actives')
			}
		
		}else{
			img.css({
				top:GetRandomNum(20,50)+'%',
				left: GetRandomNum(10,40)+'%',
				width:GetRandomNum(40,50)+'%'
			}).appendTo('.actives')
		}
		setTimeout(function(){
			img.addClass('zoomInUp animated')
		}.bind(this))
		setTimeout(function(){
			img.addClass('leave1')
		},1800)
		setTimeout(function(){
			img.remove()
		},2000)
	},function(domObj,isSmall){
		var img = $('<img src="img\/'+domObj.doms[domObj.domIndex]+'.png" class="trans '+domObj.doms[domObj.domIndex]+'" />');
		if(isSmall){
			if(domObj.doms[domObj.domIndex]=='c1'){
				img.css({
					top:GetRandomNum(20,80)+'%',
					left: GetRandomNum(20,70)+'%',
					width:GetRandomNum(20,40)+'%'
				}).appendTo('.actives')
			}else{
				img.css({
					top:GetRandomNum(20,80)+'%',
					left: GetRandomNum(10,70)+'%',
					width:GetRandomNum(10,20)+'%'
				}).appendTo('.actives')
			}
		
		}else{
			img.css({
				top:GetRandomNum(20,60)+'%',
				left: GetRandomNum(10,50)+'%',
				width:GetRandomNum(40,50)+'%'
			}).appendTo('.actives')
		}
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
					$('.container').removeClass('part1 part2 part3 part4 part5 part6 nobg').addClass(this.id);
					this.domIndex++;
					return;
				}
				$('.container').addClass('nobg');
				
				(active.animateActions[GetRandomNum(0,active.animateActions.length-1)])(this);
				this.domIndex++;
			}else{
				active.curDoms++;
				$('.container').addClass('part2');
				$('.actives').empty().append('<div class="enterP21"></div><div class="enterP22"></div>');
				setTimeout(function(){
					$('.actives').empty();
					active.domAdd();
				},400)
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
					$('.container').removeClass('part1 part2 part3 part4 part5 part6 nobg').addClass(this.id);
					this.domIndex++;
					return;
				}
				$('.container').addClass('nobg');
				if(this.domIndex==2||this.domIndex==4||this.domIndex==10||this.domIndex==11){
					(active.pageAnimateActions[GetRandomNum(0,active.pageAnimateActions.length-1)])(this);
				}else{
					(active.animateActions[GetRandomNum(0,active.animateActions.length-1)])(this);
				}
				this.domIndex++;
			}else{
				active.curDoms++;
				$('.container').addClass('part3');
					$('.actives').empty().append('<div class="enterP31"></div><div class="enterP32"></div>');
				setTimeout(function(){
					$('.actives').empty();
					active.domAdd();
				},400)
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
					$('.container').removeClass('part1 part2 part3 part4 part5 part6 nobg').addClass(this.id);
					this.domIndex++;
					return;
				}
				$('.container').addClass('nobg');
				(active.animateActions[GetRandomNum(0,active.animateActions.length-1)])(this,true);
				this.domIndex++;
			}else{
				active.curDoms++;
				$('.container').addClass('part4');
				$('.actives').empty().append('<div class="enterP41"></div><div class="enterP42"></div>');
				setTimeout(function(){
					$('.actives').empty();
					active.domAdd();
				},400)
				if(active.curDoms==active.activeDoms.length){
					snsEvent.trigger('toShare')
				}
			}
		}
	},
	{
		id:'part4',
		doms:['d1','d2','d3','d4','d5','d6','d7','d8'],
		domIndex:-1,
		activeAction:function(){
			if(this.domIndex<this.doms.length){
				if(this.domIndex==-1){
					$('.container').removeClass('part1 part2 part3 part4 part5 part6 nobg').addClass(this.id);
					this.domIndex++;
					return;
				}
				$('.container').addClass('nobg');
				(active.animateActions[GetRandomNum(0,active.animateActions.length-1)])(this,true);
				this.domIndex++;
			}else{
				active.curDoms++;
				$('.container').addClass('part5');
				$('.actives').empty().append('<div class="enterP51"></div><div class="enterP52"></div>');
				setTimeout(function(){
					$('.actives').empty();
					active.domAdd();
				},400)
				if(active.curDoms==active.activeDoms.length){
					snsEvent.trigger('toShare')
				}
			}
		}
	},
	{
		id:'part5',
		doms:['e1','e2','e3','e4','e5','e6','e7','e8','e9','e10','e11','e12'],
		domIndex:-1,
		activeAction:function(){
			if(this.domIndex<this.doms.length){
				if(this.domIndex==-1){
					$('.container').removeClass('part1 part2 part3 part4 part5 part6 nobg').addClass(this.id);
					this.domIndex++;
					return;
				}
				$('.container').addClass('nobg');
				(active.animateActions[GetRandomNum(0,active.animateActions.length-1)])(this,true);
				this.domIndex++;
			}else{
				active.curDoms++;
				active.domAdd();
				if(active.curDoms==active.activeDoms.length){
					snsEvent.trigger('toShare')
				}
			}
		}
	},{
		id:'part6',
		doms:['f1','f2','f3','f4','f5','f6','f7','f8','f9','f10','f11'],
		domIndex:-1,
		activeAction:function(){
			if(this.domIndex<this.doms.length){
				if(this.domIndex==-1){
					$('.container').removeClass('part1 part2 part3 part4 part5 part6 nobg').addClass(this.id);
					this.domIndex++;
					return;
				}
				$('.container').addClass('nobg');
				var img = $('<img src="img\/'+this.doms[this.domIndex]+'.png" class="f-hide '+this.doms[this.domIndex]+'" />');
				img.appendTo('.actives')
				setTimeout(function() {
					img.addClass('active')
				},20)
				this.domIndex++;
			}else{
				active.curDoms++;
				if(active.curDoms==active.activeDoms.length){
					setTimeout(function(){
						snsEvent.trigger('toShare')
					})
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
			// that.domAdd()
			$('.container').addClass('part1');
			$('.actives').empty().append('<div class="enterP11"></div><div class="enterP12"></div>');
			setTimeout(function(){
				$('.actives').empty();
				active.domAdd();
			},400)
		})
		$('.share .content').on('click',function(event){
			$('.actives').removeClass('hide');
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
		},4000)
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
		$('.actives').removeClass('hide');
		if(this.activeDoms.length==this.curDoms){
			this.curDoms=0
			$('.container').removeClass('part1 part2 part3 part4 part5 part6 nobg').find('.actives').empty()
			$.each(this.activeDoms,function(index,doms){
				doms.domIndex = -1
			})
		}
		(this.activeDoms[this.curDoms]).activeAction()
	}
};
var soundTimer1 = null;
var isInit = true;
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
	$('.actives').addClass('hide');
	$('.share .share-container').removeClass('show');
	$('.share').removeClass('hide').removeClass('hide');
	setTimeout(function(){
		active.domShare();
	},300)
})
function init() {
	isInit = false
	var queue = new createjs.LoadQueue(true,'http://www.yindudigital.cn/zq/20171230/');
	queue.installPlugin(createjs.Sound);
	queue.on("complete", handleComplete, this);
	queue.loadManifest([
		{src: "audio/9.mp3", id: 0},
		{src: "audio/1.mp3", id: 1},
		{src: "audio/2.mp3", id: 2},
		{src: "audio/3.mp3", id: 3},
		{src: "audio/4.mp3", id: 4},
		{src: "audio/5.mp3", id: 5},
		{src: "audio/6.mp3", id: 6},
		{src: "audio/7.mp3", id: 7},
		{src: "audio/8.mp3", id: 8}
	]);
	function handleComplete(event) {
		$('.loading').addClass('hide')
		active.domEvents();
		backSound = createjs.Sound.play(0,{loop:-1})
	}
	// var assetsPath = "audio/";
	// var sounds = [
	// 	{src: "9.mp3", id: 0},
	// 	{src: "1.mp3", id: 1},
	// 	{src: "2.mp3", id: 2},
	// 	{src: "3.mp3", id: 3},
	// 	{src: "4.mp3", id: 4},
	// 	{src: "5.mp3", id: 5},
	// 	{src: "6.mp3", id: 6},
	// 	{src: "7.mp3", id: 7},
	// 	{src: "8.mp3", id: 8}
	// ];
	// createjs.Sound.alternateExtensions = ["mp3"];	// add other extensions to try loading if the src file extension is not supported
	// createjs.Sound.addEventListener("fileload", createjs.proxy(soundLoaded, this)); // add an event listener for when load is completed
	// createjs.Sound.registerSounds(sounds, assetsPath);
}
var i= 0
var backSound
function soundLoaded(event) {
	i++;	
	if(i==9){
		$('.loading').addClass('hide')
		active.domEvents();
		backSound = createjs.Sound.play(0,{loop:-1})
	}
}

function GetRandomNum(Min,Max){   
	var Range = Max - Min;   
	var Rand = Math.random();   
	return(Min + Math.round(Rand * Range));   
}   

;$(function(){
	// 50ms轮询是否加载完毕
	var rec = [],resMap=[];
	$.each(active.activeDoms,function(index, el) {
		$.each(el.doms, function(index, val) {
		 	var path = '',obj;
			if(val=='b3'||val=='b5'||val=='b11'||val=='b12'){
				path = 'img/'+val+'.jpg';
			}else{
				path = 'img/'+val+'.png';
			}
			rec.push(path)
		});
	});
	rec.push('img/1.png')
	rec.push('img/2.png')
	rec.push('img/3.png')
	rec.push('img/4.png')
	rec.push('img/5.png')
	rec.push('img/6.png')
	rec.push('img/7.png')
	rec.push('img/8.png')
	rec.push('img/9.png')
	rec.push('css/images/part1.png')
	rec.push('css/images/part2.png')
	rec.push('css/images/part3.png')
	rec.push('css/images/part5.png')
	$.each(rec, function(index, val) {
		 var image = new Image();
		 image.src = val;
		 image.onload = function() {
		 	resMap.push(val)
		}
	});
	var loadTimer = setTimeout(function() {
		if (rec.length==resMap.length) {
			clearTimeout(loadTimer);
			isInit&&init();
		} else {
			loadTimer = setTimeout(arguments.callee, 500);
		}
	}, 500);
})
document.addEventListener("WeixinJSBridgeReady", function () { 
		// 50ms轮询是否加载完毕
	var rec = [],resMap=[];
	$.each(active.activeDoms,function(index, el) {
		$.each(el.doms, function(index, val) {
		 	var path = '',obj;
			if(val=='b3'||val=='b5'||val=='b11'||val=='b12'){
				path = 'img/'+val+'.jpg';
			}else{
				path = 'img/'+val+'.png';
			}
			rec.push(path)
		});
	});
	rec.push('img/1.png')
	rec.push('img/2.png')
	rec.push('img/3.png')
	rec.push('img/4.png')
	rec.push('img/5.png')
	rec.push('img/6.png')
	rec.push('img/7.png')
	rec.push('img/8.png')
	rec.push('img/9.png')
	rec.push('css/images/part1.png')
	rec.push('css/images/part2.png')
	rec.push('css/images/part3.png')
	rec.push('css/images/part5.png')
	$.each(rec, function(index, val) {
		 var image = new Image();
		 image.src = val;
		 image.onload = function() {
		 	resMap.push(val)
		}
	});
	var loadTimer = setTimeout(function() {
		if (rec.length==resMap.length) {
			clearTimeout(loadTimer);
			isInit&&init();
		} else {
			loadTimer = setTimeout(arguments.callee, 500);
		}
	}, 500);
}, false); 

