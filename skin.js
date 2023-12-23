// Garden Gnome Software - Skin
// Pano2VR 7.0.8/20017
// Filename: ???? ??? ?? ??.ggsk
// Generated 2023-12-23T17:24:25

function pano2vrSkin(player,base) {
	player.addVariable('vis_roomchoice', 2, false, { ignoreInState: 0  });
	player.addVariable('vis_short', 2, false, { ignoreInState: 0  });
	player.addVariable('vis_button_1', 2, false, { ignoreInState: 0  });
	player.addVariable('vis_button_2', 2, false, { ignoreInState: 0  });
	player.addVariable('vis_button_3', 2, false, { ignoreInState: 0  });
	player.addVariable('vis_button_4', 2, false, { ignoreInState: 0  });
	player.addVariable('vis_icon5', 2, false, { ignoreInState: 0  });
	player.addVariable('vis_skin_show', 2, false, { ignoreInState: 0  });
	player.addVariable('vis_long', 2, false, { ignoreInState: 0  });
	player.addVariable('vis_mobilemap', 2, false, { ignoreInState: 0  });
	var me=this;
	var skin=this;
	var flag=false;
	var nodeMarker=[];
	var activeNodeMarker=[];
	var hotspotTemplates={};
	var skinKeyPressed = 0;
	this.player=player;
	player.setApiVersion(7);
	this.player.skinObj=this;
	this.divSkin=player.divSkin;
	this.ggUserdata=player.userdata;
	this.lastSize={ w: -1,h: -1 };
	var basePath="";
	var cssPrefix="";
	// auto detect base path
	if (base=='?') {
		var scripts = document.getElementsByTagName('script');
		for(var i=0;i<scripts.length;i++) {
			var src=scripts[i].src;
			if (src.indexOf('skin.js')>=0) {
				var p=src.lastIndexOf('/');
				if (p>=0) {
					basePath=src.substr(0,p+1);
				}
			}
		}
	} else
	if (base) {
		basePath=base;
	}
	this.elementMouseDown={};
	this.elementMouseOver={};
	var i;
	var hs,el,els,elo,ela,elHorScrollFg,elHorScrollBg,elVertScrollFg,elVertScrollBg,elCornerBg;
	var prefixes='Webkit,Moz,O,ms,Ms'.split(',');
	for(var i=0;i<prefixes.length;i++) {
		if (typeof document.body.style[prefixes[i] + 'Transform'] !== 'undefined') {
			cssPrefix='-' + prefixes[i].toLowerCase() + '-';
		}
	}
	
	player.setMargins(0,0,0,0);
	
	this.updateSize=function(startElement) {
		var stack=[];
		stack.push(startElement);
		while(stack.length>0) {
			var e=stack.pop();
			if (e.ggUpdatePosition) {
				e.ggUpdatePosition();
			}
			if (e.hasChildNodes()) {
				for(var i=0;i<e.childNodes.length;i++) {
					stack.push(e.childNodes[i]);
				}
			}
		}
	}
	
	player.addListener('changenode', function() { me.ggUserdata=player.userdata; });
	
	var parameterToTransform=function(p) {
		return p.def + 'translate(' + p.rx + 'px,' + p.ry + 'px) rotate(' + p.a + 'deg) scale(' + p.sx + ',' + p.sy + ')';
	}
	
	this.findElements=function(id,regex) {
		var r=[];
		var stack=[];
		var pat=new RegExp(id,'');
		stack.push(me.divSkin);
		while(stack.length>0) {
			var e=stack.pop();
			if (regex) {
				if (pat.test(e.ggId)) r.push(e);
			} else {
				if (e.ggId==id) r.push(e);
			}
			if (e.hasChildNodes()) {
				for(var i=0;i<e.childNodes.length;i++) {
					stack.push(e.childNodes[i]);
				}
			}
		}
		return r;
	}
	
	this._=function(text, params) {
		return player._(text, params);
	}
	
	this.languageChanged=function() {
		var stack=[];
		stack.push(me.divSkin);
		while(stack.length>0) {
			var e=stack.pop();
			if (e.ggUpdateText) {
				e.ggUpdateText();
			}
			if (e.ggUpdateAria) {
				e.ggUpdateAria();
			}
			if (e.hasChildNodes()) {
				for(var i=0;i<e.childNodes.length;i++) {
					stack.push(e.childNodes[i]);
				}
			}
		}
	}
	player.addListener('sizechanged', function () { me.updateSize(me.divSkin);});
	player.addListener('languagechanged', this.languageChanged);
	
	this.addSkin=function() {
		var hs='';
		this.ggCurrentTime=new Date().getTime();
		el=me.__82=document.createElement('div');
		el.ggId="\uacf5\uac04\uc120\ud0dd";
		el.ggParameter={ rx:0,ry:0,a:0,sx:1,sy:1,def:'' };
		el.ggVisible=true;
		el.className="ggskin ggskin_container ";
		el.ggType='container';
		hs ='';
		hs+='bottom : -100%;';
		hs+='height : 50px;';
		hs+='position : absolute;';
		hs+='right : 0px;';
		hs+='visibility : inherit;';
		hs+='width : 100%;';
		hs+='pointer-events:none;';
		el.setAttribute('style',hs);
		el.style.transformOrigin='50% 50%';
		me.__82.ggIsActive=function() {
			return false;
		}
		el.ggElementNodeId=function() {
			return player.getCurrentNode();
		}
		me.__82.logicBlock_position = function() {
			var newLogicStatePosition;
			if (
				((player.getVariableValue('vis_roomchoice') == true))
			)
			{
				newLogicStatePosition = 0;
			}
			else {
				newLogicStatePosition = -1;
			}
			if (me.__82.ggCurrentLogicStatePosition != newLogicStatePosition) {
				me.__82.ggCurrentLogicStatePosition = newLogicStatePosition;
				me.__82.style.transition='right 500ms ease 0ms, bottom 500ms ease 0ms';
				if (me.__82.ggCurrentLogicStatePosition == 0) {
					me.__82.style.right='0px';
					me.__82.style.bottom='0%';
				}
				else {
					me.__82.style.right='0px';
					me.__82.style.bottom='-100%';
				}
			}
		}
		me.__82.logicBlock_position();
		me.__82.ggUpdatePosition=function (useTransition) {
		}
		el=me.__88=document.createElement('div');
		el.ggId="\uacf5\uac04\uc120\ud0dd\ubc30\uacbd";
		el.ggParameter={ rx:0,ry:0,a:0,sx:1,sy:1,def:'' };
		el.ggVisible=true;
		el.className="ggskin ggskin_rectangle ";
		el.ggType='rectangle';
		hs ='';
		hs+='background : rgba(255,255,255,0.470588);';
		hs+='border : 0px solid #000000;';
		hs+='cursor : default;';
		hs+='height : 100%;';
		hs+='left : 0px;';
		hs+='position : absolute;';
		hs+='top : -55%;';
		hs+='visibility : inherit;';
		hs+='width : 100%;';
		hs+='pointer-events:auto;';
		el.setAttribute('style',hs);
		el.style.transformOrigin='50% 50%';
		me.__88.ggIsActive=function() {
			if ((this.parentNode) && (this.parentNode.ggIsActive)) {
				return this.parentNode.ggIsActive();
			}
			return false;
		}
		el.ggElementNodeId=function() {
			if ((this.parentNode) && (this.parentNode.ggElementNodeId)) {
				return this.parentNode.ggElementNodeId();
			}
			return player.getCurrentNode();
		}
		me.__88.ggUpdatePosition=function (useTransition) {
		}
		me.__82.appendChild(me.__88);
		el=me._scrollarea_1=document.createElement('div');
		els=me._scrollarea_1__content=document.createElement('div');
		els.className='ggskin ggskin_subelement ggskin_scrollarea';
		el.ggContent=els;
		el.appendChild(els);
		el.ggHorScrollVisible = false;
		el.ggVertScrollVisible = false;
		el.ggContentLeftOffset = 0;
		el.ggContentTopOffset = 0;
		el.ggContentWidth = 0;
		el.ggContentHeight = 0;
		el.ggDragInertiaX = 0;
		el.ggDragInertiaY = 0;
		el.ggVPercentVisible = 1.0;
		el.ggHPercentVisible = 1.0;
		el.ggIsDragging = false;
		hs ='';
		hs+='height : 199px;';
		hs+='left : 0px;';
		hs+='overflow-x : visible;';
		hs+='overflow-y : visible;';
		hs+='position : absolute;';
		hs+='top : 0px;';
		hs+='width : 383px;';
		hs+="";
		els.setAttribute('style',hs);
		me._scrollarea_1.ggScrollByX = function(diffX) {
			if(!me._scrollarea_1.ggHorScrollVisible || diffX == 0 || me._scrollarea_1.ggHPercentVisible >= 1.0) return;
			me._scrollarea_1.ggScrollPosX = (me._scrollarea_1__horScrollFg.offsetLeft + diffX);
			me._scrollarea_1.ggScrollPosX = Math.max(me._scrollarea_1.ggScrollPosX, 0);
			me._scrollarea_1.ggScrollPosX = Math.min(me._scrollarea_1.ggScrollPosX, me._scrollarea_1__horScrollBg.offsetWidth - me._scrollarea_1__horScrollFg.offsetWidth);
			me._scrollarea_1__horScrollFg.style.left = me._scrollarea_1.ggScrollPosX + 'px';
			let percentScrolled = me._scrollarea_1.ggScrollPosX / (me._scrollarea_1__horScrollBg.offsetWidth - me._scrollarea_1__horScrollFg.offsetWidth);
			me._scrollarea_1__content.style.left = -(Math.round((me._scrollarea_1.ggContentWidth * (1.0 - me._scrollarea_1.ggHPercentVisible)) * percentScrolled)) + me._scrollarea_1.ggContentLeftOffset + 'px';
			me._scrollarea_1.ggScrollPosXPercent = (me._scrollarea_1__horScrollFg.offsetLeft / me._scrollarea_1__horScrollBg.offsetWidth);
		}
		me._scrollarea_1.ggScrollByXSmooth = function(diffX) {
			if(!me._scrollarea_1.ggHorScrollVisible || diffX == 0 || me._scrollarea_1.ggHPercentVisible >= 1.0) return;
			var scrollPerInterval = diffX / 25;
			var scrollCurrX = 0;
			var id = setInterval(function() {
				scrollCurrX += scrollPerInterval;
				me._scrollarea_1.ggScrollPosX += scrollPerInterval;
				if (diffX > 0 && (scrollCurrX >= diffX || me._scrollarea_1.ggScrollPosX >= me._scrollarea_1__horScrollBg.offsetWidth - me._scrollarea_1__horScrollFg.offsetWidth)) {
					me._scrollarea_1.ggScrollPosX = Math.min(me._scrollarea_1.ggScrollPosX, me._scrollarea_1__horScrollBg.offsetWidth - me._scrollarea_1__horScrollFg.offsetWidth);
					clearInterval(id);
				}
				if (diffX < 0 && (scrollCurrX <= diffX || me._scrollarea_1.ggScrollPosX <= 0)) {
					me._scrollarea_1.ggScrollPosX = Math.max(me._scrollarea_1.ggScrollPosX, 0);
					clearInterval(id);
				}
			me._scrollarea_1__horScrollFg.style.left = me._scrollarea_1.ggScrollPosX + 'px';
			let percentScrolled = me._scrollarea_1.ggScrollPosX / (me._scrollarea_1__horScrollBg.offsetWidth - me._scrollarea_1__horScrollFg.offsetWidth);
			me._scrollarea_1__content.style.left = -(Math.round((me._scrollarea_1.ggContentWidth * (1.0 - me._scrollarea_1.ggHPercentVisible)) * percentScrolled)) + me._scrollarea_1.ggContentLeftOffset + 'px';
			me._scrollarea_1.ggScrollPosXPercent = (me._scrollarea_1__horScrollFg.offsetLeft / me._scrollarea_1__horScrollBg.offsetWidth);
			}, 10);
		}
		me._scrollarea_1.ggScrollByY = function(diffY) {
			if(!me._scrollarea_1.ggVertScrollVisible || diffY == 0 || me._scrollarea_1.ggVPercentVisible >= 1.0) return;
			me._scrollarea_1.ggScrollPosY = (me._scrollarea_1__vertScrollFg.offsetTop + diffY);
			me._scrollarea_1.ggScrollPosY = Math.max(me._scrollarea_1.ggScrollPosY, 0);
			me._scrollarea_1.ggScrollPosY = Math.min(me._scrollarea_1.ggScrollPosY, me._scrollarea_1__vertScrollBg.offsetHeight - me._scrollarea_1__vertScrollFg.offsetHeight);
			me._scrollarea_1__vertScrollFg.style.top = me._scrollarea_1.ggScrollPosY + 'px';
			let percentScrolled = me._scrollarea_1.ggScrollPosY / (me._scrollarea_1__vertScrollBg.offsetHeight - me._scrollarea_1__vertScrollFg.offsetHeight);
			me._scrollarea_1__content.style.top = -(Math.round((me._scrollarea_1.ggContentHeight * (1.0 - me._scrollarea_1.ggVPercentVisible)) * percentScrolled)) + me._scrollarea_1.ggContentTopOffset + 'px';
			me._scrollarea_1.ggScrollPosYPercent = (me._scrollarea_1__vertScrollFg.offsetTop / me._scrollarea_1__vertScrollBg.offsetHeight);
		}
		me._scrollarea_1.ggScrollByYSmooth = function(diffY) {
			if(!me._scrollarea_1.ggVertScrollVisible || diffY == 0 || me._scrollarea_1.ggVPercentVisible >= 1.0) return;
			var scrollPerInterval = diffY / 25;
			var scrollCurrY = 0;
			var id = setInterval(function() {
				scrollCurrY += scrollPerInterval;
				me._scrollarea_1.ggScrollPosY += scrollPerInterval;
				if (diffY > 0 && (scrollCurrY >= diffY || me._scrollarea_1.ggScrollPosY >= me._scrollarea_1__vertScrollBg.offsetHeight - me._scrollarea_1__vertScrollFg.offsetHeight)) {
					me._scrollarea_1.ggScrollPosY = Math.min(me._scrollarea_1.ggScrollPosY, me._scrollarea_1__vertScrollBg.offsetHeight - me._scrollarea_1__vertScrollFg.offsetHeight);
					clearInterval(id);
				}
				if (diffY < 0 && (scrollCurrY <= diffY || me._scrollarea_1.ggScrollPosY <= 0)) {
					me._scrollarea_1.ggScrollPosY = Math.max(me._scrollarea_1.ggScrollPosY, 0);
					clearInterval(id);
				}
			me._scrollarea_1__vertScrollFg.style.top = me._scrollarea_1.ggScrollPosY + 'px';
			let percentScrolled = me._scrollarea_1.ggScrollPosY / (me._scrollarea_1__vertScrollBg.offsetHeight - me._scrollarea_1__vertScrollFg.offsetHeight);
			me._scrollarea_1__content.style.top = -(Math.round((me._scrollarea_1.ggContentHeight * (1.0 - me._scrollarea_1.ggVPercentVisible)) * percentScrolled)) + me._scrollarea_1.ggContentTopOffset + 'px';
			me._scrollarea_1.ggScrollPosYPercent = (me._scrollarea_1__vertScrollFg.offsetTop / me._scrollarea_1__vertScrollBg.offsetHeight);
			}, 10);
		}
		me._scrollarea_1.ggScrollIntoView = function(posX, posY, width, height) {
			if (me._scrollarea_1.ggHorScrollVisible) {
				if (posX < 0) {
					var diffX = Math.floor(posX * me._scrollarea_1.ggHPercentVisible);
					me._scrollarea_1.ggScrollByXSmooth(diffX);
				} else if (posX + width > me._scrollarea_1.clientWidth - (me._scrollarea_1.ggVertScrollVisible ? 0 : 0)) {
					var diffX = Math.ceil(((posX + width) - (me._scrollarea_1.clientWidth - (me._scrollarea_1.ggVertScrollVisible ? 0 : 0))) * me._scrollarea_1.ggHPercentVisible);
					me._scrollarea_1.ggScrollByXSmooth(diffX);
				}
			}
			if (me._scrollarea_1.ggVertScrollVisible) {
				if (posY < 0) {
					var diffY = Math.floor(posY * me._scrollarea_1.ggVPercentVisible);
					me._scrollarea_1.ggScrollByYSmooth(diffY);
				} else if (posY + height > me._scrollarea_1.clientHeight - (me._scrollarea_1.ggHorScrollVisible ? 0 : 0)) {
					var diffY = Math.ceil(((posY + height) - (me._scrollarea_1.clientHeight - (me._scrollarea_1.ggHorScrollVisible ? 0 : 0))) * me._scrollarea_1.ggVPercentVisible);
					me._scrollarea_1.ggScrollByYSmooth(diffY);
				}
			}
		}
		me._scrollarea_1__content.mousetouchend = e => {
			let inertiaInterval = setInterval(function() {
				me._scrollarea_1.ggDragInertiaX *= 0.65;
				me._scrollarea_1.ggDragInertiaY *= 0.65;
				me._scrollarea_1.ggScrollByX(me._scrollarea_1.ggDragInertiaX);
				me._scrollarea_1.ggScrollByY(me._scrollarea_1.ggDragInertiaY);
				if (Math.abs(me._scrollarea_1.ggDragInertiaX) < 1.0 && Math.abs(me._scrollarea_1.ggDragInertiaY) < 1.0) {
					clearInterval(inertiaInterval);
				}
				}, 50);
			me._scrollarea_1__content.onmouseup = null;
			me._scrollarea_1__content.onmousemove = null;
			me._scrollarea_1__content.ontouchend = null;
			me._scrollarea_1__content.ontouchmove = null;
			me._scrollarea_1__content.onpointerup = null;
			me._scrollarea_1__content.onpointermove = null;
			setTimeout(function() { me._scrollarea_1.ggIsDragging = false; }, 100);
		}
		me._scrollarea_1__content.mousetouchmove = e => {
			e = e || window.event;
			e.preventDefault();
			var t = e.touches;
			var eventX = t ? t[0].clientX : e.clientX;
			var eventY = t ? t[0].clientY : e.clientY;
			if (Math.abs(eventX - me._scrollarea_1.ggDragStartX) > 10 || Math.abs(eventY - me._scrollarea_1.ggDragStartY) > 10) me._scrollarea_1.ggIsDragging = true;
			var diffX = (eventX - me._scrollarea_1.ggDragLastX) * me._scrollarea_1.ggHPercentVisible;
			var diffY = (eventY - me._scrollarea_1.ggDragLastY) * me._scrollarea_1.ggVPercentVisible;
			me._scrollarea_1.ggDragInertiaX = -diffX;
			me._scrollarea_1.ggDragInertiaY = -diffY;
			me._scrollarea_1.ggDragLastX = eventX;
			me._scrollarea_1.ggDragLastY = eventY;
			me._scrollarea_1.ggScrollByX(-diffX);
			me._scrollarea_1.ggScrollByY(-diffY);
		}
		me._scrollarea_1__content.mousetouchstart = e => {
			e = e || window.event;
			var t = e.touches;
			me._scrollarea_1.ggDragLastX = me._scrollarea_1.ggDragStartX = t ? t[0].clientX : e.clientX;
			me._scrollarea_1.ggDragLastY = me._scrollarea_1.ggDragStartY = t ? t[0].clientY : e.clientY;
			me._scrollarea_1__content.onmouseup = me._scrollarea_1__content.mousetouchend;
			me._scrollarea_1__content.ontouchend = me._scrollarea_1__content.mousetouchend;
			me._scrollarea_1__content.onmousemove = me._scrollarea_1__content.mousetouchmove;
			me._scrollarea_1__content.ontouchmove = me._scrollarea_1__content.mousetouchmove;
			if (player.getOS() == 1 && navigator.maxTouchPoints > 0) {
				me._scrollarea_1__content.onpointerup = me._scrollarea_1__content.ontouchend;
				me._scrollarea_1__content.onpointermove = me._scrollarea_1__content.ontouchmove;
			}
		}
		els.onmousedown = me._scrollarea_1__content.mousetouchstart;
		els.ontouchstart = me._scrollarea_1__content.mousetouchstart;
		if (player.getOS() == 1 && navigator.maxTouchPoints > 0) {
			els.onpointerdown = me._scrollarea_1__content.mousetouchstart;
		}
		elHorScrollBg = me._scrollarea_1__horScrollBg = document.createElement('div');
		el.appendChild(elHorScrollBg);
		elHorScrollBg.setAttribute('style', 'position: absolute; left: 0px; bottom: 0px; visibility: hidden; width: 384px; height: 0px; background-color: rgba(128,128,128,1); pointer-events: auto;');
		elHorScrollBg.className='ggskin ggskin_scrollarea_hscrollbg';
		elHorScrollFg = me._scrollarea_1__horScrollFg = document.createElement('div');
		elHorScrollBg.appendChild(elHorScrollFg);
		elHorScrollFg.className='ggskin ggskin_scrollarea_hscrollfg';
		elHorScrollFg.setAttribute('style', 'position: absolute; left: 0px; top: 0px; visibility: hidden; width: 384px; height: 0px; background-color: rgba(192,192,192,1); pointer-events: auto;');
		me._scrollarea_1.ggScrollPosX = 0;
		me._scrollarea_1.ggScrollPosXPercent = 0.0;
		elHorScrollFg.onmousedown = function(e) {
			if (player.getOS() == 1 && navigator.maxTouchPoints > 0) return;
			e = e || window.event;
			e.preventDefault();
			e.stopPropagation();
			me._scrollarea_1.ggDragLastX = e.clientX;
			document.onmouseup = function() {
				let inertiaInterval = setInterval(function() {
					me._scrollarea_1.ggDragInertiaX *= 0.65;
					me._scrollarea_1.ggScrollByX(me._scrollarea_1.ggDragInertiaX);
					if (Math.abs(me._scrollarea_1.ggDragInertiaX) < 1.0) {
						clearInterval(inertiaInterval);
					}
					}, 50);
				document.onmouseup = null;
				document.onmousemove = null;
			}
			document.onmousemove = function(e) {
				e = e || window.event;
				e.preventDefault();
				var diffX = e.clientX - me._scrollarea_1.ggDragLastX;
				me._scrollarea_1.ggDragInertiaX = diffX;
				me._scrollarea_1.ggDragLastX = e.clientX;
				me._scrollarea_1.ggScrollByX(diffX);
			}
		}
		elHorScrollFg.ontouchstart = function(e) {
			e = e || window.event;
			e.preventDefault();
			e.stopPropagation();
			var t = e.touches;
			me._scrollarea_1.ggDragLastX = t ? t[0].clientX : e.clientX;
			document.ontouchend = function() {
				let inertiaInterval = setInterval(function() {
					me._scrollarea_1.ggDragInertiaX *= 0.65;
					me._scrollarea_1.ggScrollByX(me._scrollarea_1.ggDragInertiaX);
					if (Math.abs(me._scrollarea_1.ggDragInertiaX) < 1.0) {
						clearInterval(inertiaInterval);
					}
					}, 50);
				document.ontouchend = null;
				document.ontouchmove = null;
				document.onpointerup = null;
				document.onpointermove = null;
			}
			if (player.getOS() == 1 && navigator.maxTouchPoints > 0) {
				document.onpointerup = document.ontouchend;
			}
			document.ontouchmove = function(e) {
				e = e || window.event;
				e.preventDefault();
				var t = e.touches;
				var diffX = (t ? t[0].clientX : e.clientX) - me._scrollarea_1.ggDragLastX;
				me._scrollarea_1.ggDragInertiaX = diffX;
				me._scrollarea_1.ggDragLastX = t ? t[0].clientX : e.clientX;
				me._scrollarea_1.ggScrollByX(diffX);
			}
			if (player.getOS() == 1 && navigator.maxTouchPoints > 0) {
				document.onpointermove = document.ontouchmove;
			}
		}
		if (player.getOS() == 1 && navigator.maxTouchPoints > 0) {
			elHorScrollFg.onpointerdown = elHorScrollFg.ontouchstart;
		}
		elHorScrollBg.onmousedown = function(e) {
			e = e || window.event;
			e.preventDefault();
			var diffX = me._scrollarea_1.ggScrollWidth;
			if (e.offsetX < me._scrollarea_1.ggScrollPosX) {
				diffX = diffX * -1;
			}
			me._scrollarea_1.ggScrollByXSmooth(diffX);
		}
		elHorScrollBg.ontouchstart = function(e) {
			e = e || window.event;
			e.preventDefault();
			e.stopPropagation();
			var t = e.touches;
			var rect = me._scrollarea_1__horScrollBg.getBoundingClientRect();
			var diffX = me._scrollarea_1.ggScrollWidth;
			if ((t[0].clientX - rect.left) < me._scrollarea_1.ggScrollPosX) {
				diffX = diffX * -1;
			}
			me._scrollarea_1.ggScrollByXSmooth(diffX);
		}
		el.addEventListener('wheel', function(e) {
			e.preventDefault();
			var wheelDelta = Math.sign(e.deltaX);
			me._scrollarea_1.ggScrollByXSmooth(30 * me._scrollarea_1.ggHPercentVisible * wheelDelta);
		});
		elCornerBg = me._scrollarea_1__cornerBg = document.createElement('div');
		el.appendChild(elCornerBg);
		elCornerBg.setAttribute('style', 'position: absolute; right: 0px; bottom: 0px; visibility: hidden; width: 0px; height: 0px; background-color: rgba(255,255,255,1);');
		elCornerBg.className='ggskin ggskin_scrollarea_scrollcorner';
		el.ggId="Scrollarea 1";
		el.ggParameter={ rx:0,ry:0,a:0,sx:1,sy:1,def:'' };
		el.ggVisible=true;
		el.className="ggskin ggskin_scrollarea ";
		el.ggType='scrollarea';
		hs ='';
		hs+='border : 0px solid #000000;';
		hs+='height : 200px;';
		hs+='overflow : hidden;';
		hs+='position : absolute;';
		hs+='right : 5%;';
		hs+='top : -260%;';
		hs+='visibility : inherit;';
		hs+='width : 60%;';
		hs+='pointer-events:auto;';
		el.setAttribute('style',hs);
		el.style.transformOrigin='50% 50%';
		me._scrollarea_1.ggIsActive=function() {
			if ((this.parentNode) && (this.parentNode.ggIsActive)) {
				return this.parentNode.ggIsActive();
			}
			return false;
		}
		el.ggElementNodeId=function() {
			if ((this.parentNode) && (this.parentNode.ggElementNodeId)) {
				return this.parentNode.ggElementNodeId();
			}
			return player.getCurrentNode();
		}
		me._scrollarea_1.logicBlock_position = function() {
			var newLogicStatePosition;
			if (
				((player.getViewerSize().width <= 460))
			)
			{
				newLogicStatePosition = 0;
			}
			else {
				newLogicStatePosition = -1;
			}
			if (me._scrollarea_1.ggCurrentLogicStatePosition != newLogicStatePosition) {
				me._scrollarea_1.ggCurrentLogicStatePosition = newLogicStatePosition;
				me._scrollarea_1.style.transition='right 0s, top 0s, width 0s, height 0s';
				if (me._scrollarea_1.ggCurrentLogicStatePosition == 0) {
					me._scrollarea_1.style.right='0%';
					me._scrollarea_1.style.top='-200%';
				}
				else {
					me._scrollarea_1.style.right='5%';
					me._scrollarea_1.style.top='-260%';
				}
			}
		}
		me._scrollarea_1.logicBlock_position();
		me._scrollarea_1.logicBlock_size = function() {
			var newLogicStateSize;
			if (
				((player.getViewerSize().width <= 670))
			)
			{
				newLogicStateSize = 0;
			}
			else {
				newLogicStateSize = -1;
			}
			if (me._scrollarea_1.ggCurrentLogicStateSize != newLogicStateSize) {
				me._scrollarea_1.ggCurrentLogicStateSize = newLogicStateSize;
				me._scrollarea_1.style.transition='right 0s, top 0s, width 0s, height 0s';
				if (me._scrollarea_1.ggCurrentLogicStateSize == 0) {
					me._scrollarea_1.style.width='95%';
					me._scrollarea_1.style.height='200px';
					skin.updateSize(me._scrollarea_1);
				}
				else {
					me._scrollarea_1.style.width='60%';
					me._scrollarea_1.style.height='200px';
					skin.updateSize(me._scrollarea_1);
				}
			}
		}
		me._scrollarea_1.logicBlock_size();
		me._scrollarea_1.ggUpdatePosition=function (useTransition) {
			{
				var horScrollWasVisible = this.ggHorScrollVisible;
				var vertScrollWasVisible = this.ggVertScrollVisible;
				this.ggContent.style.left = '0px';
				this.ggContent.style.top = '0px';
				this.ggContentLeftOffset = 0;
				this.ggContentTopOffset = 0;
				var offsetWidthWithScale = this.getBoundingClientRect().width;
				var offsetHeightWithScale = this.getBoundingClientRect().height;
				var domRectContent = this.ggContent.getBoundingClientRect();
				var minX = 0;
				var minY = 0;
				var maxX = 0;
				var maxY = 0;
				var stack=[];
				stack.push(this.ggContent);
				while(stack.length>0) {
					var e=stack.pop();
					if (e!=this.ggContent && e.getBoundingClientRect && e.style['display']!='none' && (e.offsetWidth != 0 || e.offsetHeight != 0)) {
						var domRectChild = e.getBoundingClientRect();
						var diffX = domRectChild.left - domRectContent.left;
						minX = Math.min(minX, diffX);
						maxX = Math.max(maxX, diffX + domRectChild.width);
						var diffY = domRectChild.top - domRectContent.top;
						minY = Math.min(minY, diffY);
						maxY = Math.max(maxY, diffY + domRectChild.height);
					}
					if (e.hasChildNodes() && e.style['display']!='none' && e.style['overflow']!='hidden') {
						for(var i=0;i<e.childNodes.length;i++) {
							stack.push(e.childNodes[i]);
						}
					}
				}
				if (minX < 0) this.ggContentLeftOffset = -minX;
				if (minY < 0) this.ggContentTopOffset = -minY;
				this.ggContent.style.left = this.ggContentLeftOffset + 'px';
				this.ggContent.style.top = this.ggContentTopOffset + 'px';
				var contentWidth = maxX - minX;
				this.ggContent.style.width = contentWidth + 'px';
				var contentHeight = maxY - minY;
				this.ggContent.style.height = contentHeight + 'px';
			var scaleX = this.getBoundingClientRect().width / this.offsetWidth;
				this.ggContentWidth = contentWidth / scaleX;
			var scaleY = this.getBoundingClientRect().height / this.offsetHeight;
				this.ggContentHeight = contentHeight / scaleY;
				this.ggContent.style.left = -(Math.round(me._scrollarea_1.ggScrollPosX / me._scrollarea_1.ggHPercentVisible)) + this.ggContentLeftOffset + 'px';
				this.ggContent.style.marginLeft = '0px';
				this.ggContent.style.top = this.ggContentTopOffset + 'px';
				this.ggContent.style.marginTop = '0px';
				me._scrollarea_1__horScrollBg.style.visibility = 'inherit';
				me._scrollarea_1__horScrollFg.style.visibility = 'inherit';
				me._scrollarea_1.ggHorScrollVisible = true;
				if(me._scrollarea_1.ggHorScrollVisible) {
					me._scrollarea_1.ggAvailableHeight = me._scrollarea_1.clientHeight - 0;
					if (me._scrollarea_1.ggVertScrollVisible) {
						me._scrollarea_1.ggAvailableWidth = me._scrollarea_1.clientWidth - 0;
						me._scrollarea_1.ggAvailableWidthWithScale = me._scrollarea_1.getBoundingClientRect().width - me._scrollarea_1__horScrollBg.getBoundingClientRect().height;
					} else {
						me._scrollarea_1.ggAvailableWidth = me._scrollarea_1.clientWidth;
						me._scrollarea_1.ggAvailableWidthWithScale = me._scrollarea_1.getBoundingClientRect().width;
					}
					me._scrollarea_1__horScrollBg.style.width = me._scrollarea_1.ggAvailableWidth + 'px';
					me._scrollarea_1.ggHPercentVisible = contentWidth != 0 ? me._scrollarea_1.ggAvailableWidthWithScale / contentWidth : 0.0;
					if (me._scrollarea_1.ggHPercentVisible > 1.0) me._scrollarea_1.ggHPercentVisible = 1.0;
					me._scrollarea_1.ggScrollWidth = Math.round(me._scrollarea_1__horScrollBg.offsetWidth * me._scrollarea_1.ggHPercentVisible);
					me._scrollarea_1__horScrollFg.style.width = me._scrollarea_1.ggScrollWidth + 'px';
					me._scrollarea_1.ggScrollPosX = me._scrollarea_1.ggScrollPosXPercent * me._scrollarea_1.ggAvailableWidth;
					me._scrollarea_1.ggScrollPosX = Math.min(me._scrollarea_1.ggScrollPosX, me._scrollarea_1__horScrollBg.offsetWidth - me._scrollarea_1__horScrollFg.offsetWidth);
					me._scrollarea_1__horScrollFg.style.left = me._scrollarea_1.ggScrollPosX + 'px';
					if (me._scrollarea_1.ggHPercentVisible < 1.0) {
						let percentScrolled = me._scrollarea_1.ggScrollPosX / (me._scrollarea_1__horScrollBg.offsetWidth - me._scrollarea_1__horScrollFg.offsetWidth);
						me._scrollarea_1__content.style.left = -(Math.round((me._scrollarea_1.ggContentWidth * (1.0 - me._scrollarea_1.ggHPercentVisible)) * percentScrolled)) + this.ggContentLeftOffset + 'px';
					}
				} else {
					me._scrollarea_1.ggAvailableHeight = me._scrollarea_1.clientHeight;
					me._scrollarea_1.ggScrollPosX = 0;
					me._scrollarea_1.ggScrollPosXPercent = 0.0;
					me._scrollarea_1__content.style.left = this.ggContentLeftOffset + 'px';
				}
				if(horScrollWasVisible != me._scrollarea_1.ggHorScrollVisible || vertScrollWasVisible != me._scrollarea_1.ggVertScrollVisible) {
					skin.updateSize(me._scrollarea_1);
					me._scrollarea_1.ggUpdatePosition();
				}
			}
		}
		el=me.__83=document.createElement('div');
		el.isDragging = function() {
			let scrollerParent = me.__83;
			while ((scrollerParent = scrollerParent.parentNode) != null) {
				if (scrollerParent.hasOwnProperty('ggIsDragging') && scrollerParent.ggIsDragging == true) return true;
			}
			return false;
		}
		el.ggId="\uacf5\uac04\uc120\ud0dd \uc774\ubbf8\uc9c0";
		el.ggParameter={ rx:0,ry:0,a:0,sx:1,sy:1,def:'' };
		el.ggVisible=false;
		el.className="ggskin ggskin_container ";
		el.ggType='container';
		hs ='';
		hs+='height : 200px;';
		hs+='position : absolute;';
		hs+='right : 0px;';
		hs+='top : 0px;';
		hs+='visibility : hidden;';
		hs+='width : 100%;';
		hs+='pointer-events:none;';
		el.setAttribute('style',hs);
		el.style.transformOrigin='50% 50%';
		me.__83.ggIsActive=function() {
			if ((this.parentNode) && (this.parentNode.ggIsActive)) {
				return this.parentNode.ggIsActive();
			}
			return false;
		}
		el.ggElementNodeId=function() {
			if ((this.parentNode) && (this.parentNode.ggElementNodeId)) {
				return this.parentNode.ggElementNodeId();
			}
			return player.getCurrentNode();
		}
		me.__83.logicBlock_visible = function() {
			var newLogicStateVisible;
			if (
				((me.ggUserdata.tags.indexOf("18A") != -1))
			)
			{
				newLogicStateVisible = 0;
			}
			else {
				newLogicStateVisible = -1;
			}
			if (me.__83.ggCurrentLogicStateVisible != newLogicStateVisible) {
				me.__83.ggCurrentLogicStateVisible = newLogicStateVisible;
				me.__83.style.transition='';
				if (me.__83.ggCurrentLogicStateVisible == 0) {
					me.__83.style.visibility=(Number(me.__83.style.opacity)>0||!me.__83.style.opacity)?'inherit':'hidden';
					me.__83.ggVisible=true;
				}
				else {
					me.__83.style.visibility="hidden";
					me.__83.ggVisible=false;
				}
			}
		}
		me.__83.logicBlock_visible();
		me.__83.ggUpdatePosition=function (useTransition) {
		}
		el=me.__86=document.createElement('div');
		el.isDragging = function() {
			let scrollerParent = me.__86;
			while ((scrollerParent = scrollerParent.parentNode) != null) {
				if (scrollerParent.hasOwnProperty('ggIsDragging') && scrollerParent.ggIsDragging == true) return true;
			}
			return false;
		}
		el.ggNumRepeat = 1;
		el.ggNumRows = 0;
		el.ggNumCols = 0;
		el.ggCloneOffset = 0;
		el.ggCloneOffsetChanged = false;
		el.ggWidth = 150;
		el.ggHeight = 180;
		el.ggUpdating = false;
		el.ggFilter = [];
		el.ggFilterHsSkinId = '';
		el.ggInstances = [];
		el.ggNumFilterPassed = 0;
		el.getFilteredNodes = function(tourNodes, filter) {
			var filteredNodes = [];
			for (var i = 0; i < tourNodes.length; i++) {
				var nodeId = tourNodes[i];
				var passed = true;
				var nodeData = player.getNodeUserdata(nodeId);
				if (filter.length > 0) {
					for (var j=0; j < filter.length; j++) {
						if (nodeData['tags'].indexOf(filter[j].trim()) == -1) passed = false;
					}
				}
				if (passed) {
					filteredNodes.push(nodeId);
				}
			}
			return filteredNodes;
		}
		el.ggUpdate = function(filter) {
			if(me.__86.ggUpdating == true) return;
			me.__86.ggUpdating = true;
			var el=me.__86;
			var curNumRows = 0;
			curNumRows = me.__86.ggNumRepeat;
			if (curNumRows < 1) curNumRows = 1;
			if (typeof filter=='object') {
				el.ggFilter = filter;
			} else {
				filter = el.ggFilter;
			};
			if (me.ggTag) filter.push(me.ggTag);
			filter=filter.sort();
			if ((el.ggNumRows == curNumRows) && (el.ggInstances.length > 0) && (filter.length === el.ggCurrentFilter.length) && (filter.every(function(value, index) { return value === el.ggCurrentFilter[index] }) )) {
				me.__86.ggUpdating = false;
				return;
			} else {
				el.ggNumCols = 1;
				el.ggNumRows = curNumRows;
			var centerOffsetHor = 0;
			var centerOffsetVert = 0;
				me.__86.ggCloneOffsetChanged = false;
			}
			el.ggCurrentFilter = filter;
			el.ggInstances = [];
			if (el.hasChildNodes() == true) {
				while (el.firstChild) {
					el.removeChild(el.firstChild);
				}
			}
			var tourNodes = player.getNodeIds();
			var row = 0;
			var column = 0;
			var currentIndex = 0;
			var keepCloning = true;
			tourNodes = me.__86.getFilteredNodes(tourNodes, filter);
			me.__86.ggNumFilterPassed = tourNodes.length;
			for (var i = 0; i < tourNodes.length; i++) {
				var nodeId = tourNodes[i];
				var nodeData = player.getNodeUserdata(nodeId);
				if (!keepCloning || i < me.__86.ggCloneOffset) continue;
				var parameter={};
				parameter.top = centerOffsetVert + (row * me.__86.ggHeight) + 'px';
				parameter.left = centerOffsetHor + (column * me.__86.ggWidth) + 'px';
				parameter.width=me.__86.ggWidth + 'px';
				parameter.height=me.__86.ggHeight + 'px';
				parameter.index=currentIndex;
				parameter.title=nodeData['title'];
				var inst = new SkinCloner__86_Class(nodeId, me, el, parameter);
				currentIndex++;
				el.ggInstances.push(inst);
				el.appendChild(inst.__div);
				inst.__div.ggObj=inst;
				skin.updateSize(inst.__div);
				row++;
				if (row >= el.ggNumRows) {
					row = 0;
					column++;
					el.ggNumCols++;
				}
			}
			me.__86.ggNodeCount = me.__86.ggNumFilterPassed;
			me.__86.ggUpdating = false;
			player.triggerEvent('clonerchanged');
			if (me.__86.parentNode && me.__86.parentNode.classList.contains('ggskin_subelement') && me.__86.parentNode.parentNode.classList.contains('ggskin_scrollarea')) me.__86.parentNode.parentNode.ggUpdatePosition();
		}
		el.ggFilter = [];
		el.ggFilter[0] = "가구있음";
		el.ggFilter[1] = "메인";
		el.ggFilter[2] = "18A";
		el.ggId="\uac00\uad6c\uc788\uc74c";
		el.ggParameter={ rx:0,ry:0,a:0,sx:1,sy:1,def:'' };
		el.ggVisible=false;
		el.className="ggskin ggskin_cloner ";
		el.ggType='cloner';
		hs ='';
		hs+='cursor : pointer;';
		hs+='height : 180px;';
		hs+='left : 0px;';
		hs+='overflow : visible;';
		hs+='position : absolute;';
		hs+='top : 0px;';
		hs+='visibility : hidden;';
		hs+='width : 150px;';
		hs+='pointer-events:none;';
		el.setAttribute('style',hs);
		el.style.transformOrigin='50% 50%';
		me.__86.ggIsActive=function() {
			if ((this.parentNode) && (this.parentNode.ggIsActive)) {
				return this.parentNode.ggIsActive();
			}
			return false;
		}
		el.ggElementNodeId=function() {
			if ((this.parentNode) && (this.parentNode.ggElementNodeId)) {
				return this.parentNode.ggElementNodeId();
			}
			return player.getCurrentNode();
		}
		me.__86.logicBlock_size = function() {
			var newLogicStateSize;
			if (
				((player.getViewerSize().width <= 670))
			)
			{
				newLogicStateSize = 0;
			}
			else {
				newLogicStateSize = -1;
			}
			if (me.__86.ggCurrentLogicStateSize != newLogicStateSize) {
				me.__86.ggCurrentLogicStateSize = newLogicStateSize;
				me.__86.style.transition='width 0s, height 0s';
				if (me.__86.ggCurrentLogicStateSize == 0) {
					me.__86.ggWidth=100;
					me.__86.ggHeight=150;
					me.__86.ggUpdate();
					skin.updateSize(me.__86);
				}
				else {
					me.__86.ggWidth=150;
					me.__86.ggHeight=180;
					me.__86.ggUpdate();
					skin.updateSize(me.__86);
				}
			}
		}
		me.__86.logicBlock_size();
		me.__86.logicBlock_visible = function() {
			var newLogicStateVisible;
			if (
				((me.ggUserdata.tags.indexOf("\uac00\uad6c\uc788\uc74c") != -1))
			)
			{
				newLogicStateVisible = 0;
			}
			else {
				newLogicStateVisible = -1;
			}
			if (me.__86.ggCurrentLogicStateVisible != newLogicStateVisible) {
				me.__86.ggCurrentLogicStateVisible = newLogicStateVisible;
				me.__86.style.transition='width 0s, height 0s';
				if (me.__86.ggCurrentLogicStateVisible == 0) {
					me.__86.style.visibility=(Number(me.__86.style.opacity)>0||!me.__86.style.opacity)?'inherit':'hidden';
					me.__86.ggVisible=true;
				}
				else {
					me.__86.style.visibility="hidden";
					me.__86.ggVisible=false;
				}
			}
		}
		me.__86.logicBlock_visible();
		me.__86.ggCurrentLogicStateSize = -1;
		me.__86.ggCurrentLogicStateVisible = -1;
		me.__86.ggUpdateConditionNodeChange=function () {
			var cnode=player.getCurrentNode();
			for(var i=0; i<me.__86.childNodes.length; i++) {
				var child=me.__86.childNodes[i];
				if (child.ggObj && child.ggObj.ggNodeId==cnode) {
			        var childOffX = child.offsetLeft;
			        var childOffY = child.offsetTop;
					var p = child.parentElement;
			        while (p != null && p!==this.divSkin) {
						if (p.ggType && p.ggType == 'scrollarea') {
							p.ggScrollIntoView(childOffX, childOffY, child.clientWidth, child.clientHeight);
						}
						childOffX += p.offsetLeft;
						childOffY += p.offsetTop;
						p = p.parentElement;
					}
				}
			}
		}
		me.__86.ggUpdatePosition=function (useTransition) {
			me.__86.ggUpdate();
		}
		me.__83.appendChild(me.__86);
		el=me.__84=document.createElement('div');
		el.isDragging = function() {
			let scrollerParent = me.__84;
			while ((scrollerParent = scrollerParent.parentNode) != null) {
				if (scrollerParent.hasOwnProperty('ggIsDragging') && scrollerParent.ggIsDragging == true) return true;
			}
			return false;
		}
		el.ggNumRepeat = 1;
		el.ggNumRows = 0;
		el.ggNumCols = 0;
		el.ggCloneOffset = 0;
		el.ggCloneOffsetChanged = false;
		el.ggWidth = 150;
		el.ggHeight = 200;
		el.ggUpdating = false;
		el.ggFilter = [];
		el.ggFilterHsSkinId = '';
		el.ggInstances = [];
		el.ggNumFilterPassed = 0;
		el.getFilteredNodes = function(tourNodes, filter) {
			var filteredNodes = [];
			for (var i = 0; i < tourNodes.length; i++) {
				var nodeId = tourNodes[i];
				var passed = true;
				var nodeData = player.getNodeUserdata(nodeId);
				if (filter.length > 0) {
					for (var j=0; j < filter.length; j++) {
						if (nodeData['tags'].indexOf(filter[j].trim()) == -1) passed = false;
					}
				}
				if (passed) {
					filteredNodes.push(nodeId);
				}
			}
			return filteredNodes;
		}
		el.ggUpdate = function(filter) {
			if(me.__84.ggUpdating == true) return;
			me.__84.ggUpdating = true;
			var el=me.__84;
			var curNumRows = 0;
			curNumRows = me.__84.ggNumRepeat;
			if (curNumRows < 1) curNumRows = 1;
			if (typeof filter=='object') {
				el.ggFilter = filter;
			} else {
				filter = el.ggFilter;
			};
			if (me.ggTag) filter.push(me.ggTag);
			filter=filter.sort();
			if ((el.ggNumRows == curNumRows) && (el.ggInstances.length > 0) && (filter.length === el.ggCurrentFilter.length) && (filter.every(function(value, index) { return value === el.ggCurrentFilter[index] }) )) {
				me.__84.ggUpdating = false;
				return;
			} else {
				el.ggNumCols = 1;
				el.ggNumRows = curNumRows;
			var centerOffsetHor = 0;
			var centerOffsetVert = 0;
				me.__84.ggCloneOffsetChanged = false;
			}
			el.ggCurrentFilter = filter;
			el.ggInstances = [];
			if (el.hasChildNodes() == true) {
				while (el.firstChild) {
					el.removeChild(el.firstChild);
				}
			}
			var tourNodes = player.getNodeIds();
			var row = 0;
			var column = 0;
			var currentIndex = 0;
			var keepCloning = true;
			tourNodes = me.__84.getFilteredNodes(tourNodes, filter);
			me.__84.ggNumFilterPassed = tourNodes.length;
			for (var i = 0; i < tourNodes.length; i++) {
				var nodeId = tourNodes[i];
				var nodeData = player.getNodeUserdata(nodeId);
				if (!keepCloning || i < me.__84.ggCloneOffset) continue;
				var parameter={};
				parameter.top = centerOffsetVert + (row * me.__84.ggHeight) + 'px';
				parameter.left = centerOffsetHor + (column * me.__84.ggWidth) + 'px';
				parameter.width=me.__84.ggWidth + 'px';
				parameter.height=me.__84.ggHeight + 'px';
				parameter.index=currentIndex;
				parameter.title=nodeData['title'];
				var inst = new SkinCloner__84_Class(nodeId, me, el, parameter);
				currentIndex++;
				el.ggInstances.push(inst);
				el.appendChild(inst.__div);
				inst.__div.ggObj=inst;
				skin.updateSize(inst.__div);
				row++;
				if (row >= el.ggNumRows) {
					row = 0;
					column++;
					el.ggNumCols++;
				}
			}
			me.__84.ggNodeCount = me.__84.ggNumFilterPassed;
			me.__84.ggUpdating = false;
			player.triggerEvent('clonerchanged');
			if (me.__84.parentNode && me.__84.parentNode.classList.contains('ggskin_subelement') && me.__84.parentNode.parentNode.classList.contains('ggskin_scrollarea')) me.__84.parentNode.parentNode.ggUpdatePosition();
		}
		el.ggFilter = [];
		el.ggFilter[0] = "가구없음";
		el.ggFilter[1] = "메인";
		el.ggFilter[2] = "18A";
		el.ggId="\uac00\uad6c\uc5c6\uc74c";
		el.ggParameter={ rx:0,ry:0,a:0,sx:1,sy:1,def:'' };
		el.ggVisible=false;
		el.className="ggskin ggskin_cloner ";
		el.ggType='cloner';
		hs ='';
		hs+='height : 200px;';
		hs+='left : 0px;';
		hs+='overflow : visible;';
		hs+='position : absolute;';
		hs+='top : 0px;';
		hs+='visibility : hidden;';
		hs+='width : 150px;';
		hs+='pointer-events:none;';
		el.setAttribute('style',hs);
		el.style.transformOrigin='50% 50%';
		me.__84.ggIsActive=function() {
			if ((this.parentNode) && (this.parentNode.ggIsActive)) {
				return this.parentNode.ggIsActive();
			}
			return false;
		}
		el.ggElementNodeId=function() {
			if ((this.parentNode) && (this.parentNode.ggElementNodeId)) {
				return this.parentNode.ggElementNodeId();
			}
			return player.getCurrentNode();
		}
		me.__84.logicBlock_size = function() {
			var newLogicStateSize;
			if (
				((player.getViewerSize().width <= 670))
			)
			{
				newLogicStateSize = 0;
			}
			else {
				newLogicStateSize = -1;
			}
			if (me.__84.ggCurrentLogicStateSize != newLogicStateSize) {
				me.__84.ggCurrentLogicStateSize = newLogicStateSize;
				me.__84.style.transition='width 0s, height 0s';
				if (me.__84.ggCurrentLogicStateSize == 0) {
					me.__84.ggWidth=100;
					me.__84.ggHeight=150;
					me.__84.ggUpdate();
					skin.updateSize(me.__84);
				}
				else {
					me.__84.ggWidth=150;
					me.__84.ggHeight=200;
					me.__84.ggUpdate();
					skin.updateSize(me.__84);
				}
			}
		}
		me.__84.logicBlock_size();
		me.__84.logicBlock_visible = function() {
			var newLogicStateVisible;
			if (
				((me.ggUserdata.tags.indexOf("\uac00\uad6c\uc5c6\uc74c") != -1))
			)
			{
				newLogicStateVisible = 0;
			}
			else {
				newLogicStateVisible = -1;
			}
			if (me.__84.ggCurrentLogicStateVisible != newLogicStateVisible) {
				me.__84.ggCurrentLogicStateVisible = newLogicStateVisible;
				me.__84.style.transition='width 0s, height 0s';
				if (me.__84.ggCurrentLogicStateVisible == 0) {
					me.__84.style.visibility=(Number(me.__84.style.opacity)>0||!me.__84.style.opacity)?'inherit':'hidden';
					me.__84.ggVisible=true;
				}
				else {
					me.__84.style.visibility="hidden";
					me.__84.ggVisible=false;
				}
			}
		}
		me.__84.logicBlock_visible();
		me.__84.ggCurrentLogicStateSize = -1;
		me.__84.ggCurrentLogicStateVisible = -1;
		me.__84.ggUpdateConditionNodeChange=function () {
			var cnode=player.getCurrentNode();
			for(var i=0; i<me.__84.childNodes.length; i++) {
				var child=me.__84.childNodes[i];
				if (child.ggObj && child.ggObj.ggNodeId==cnode) {
			        var childOffX = child.offsetLeft;
			        var childOffY = child.offsetTop;
					var p = child.parentElement;
			        while (p != null && p!==this.divSkin) {
						if (p.ggType && p.ggType == 'scrollarea') {
							p.ggScrollIntoView(childOffX, childOffY, child.clientWidth, child.clientHeight);
						}
						childOffX += p.offsetLeft;
						childOffY += p.offsetTop;
						p = p.parentElement;
					}
				}
			}
		}
		me.__84.ggUpdatePosition=function (useTransition) {
			me.__84.ggUpdate();
		}
		me.__83.appendChild(me.__84);
		me._scrollarea_1__content.appendChild(me.__83);
		me.__82.appendChild(me._scrollarea_1);
		me.divSkin.appendChild(me.__82);
		el=me.__43=document.createElement('div');
		el.ggId="\uc0ac\uc774\ub4dc\ubc14";
		el.ggDy=0;
		el.ggParameter={ rx:0,ry:0,a:0,sx:1,sy:1,def:'' };
		el.ggVisible=true;
		el.className="ggskin ggskin_container ";
		el.ggType='container';
		hs ='';
		hs+='height : 510px;';
		hs+='position : absolute;';
		hs+='right : 15px;';
		hs+='top : calc(50% - ((510px + 0px) / 2) + 0px);';
		hs+='visibility : inherit;';
		hs+='width : 50px;';
		hs+='pointer-events:none;';
		el.setAttribute('style',hs);
		el.style.transformOrigin='50% 50%';
		me.__43.ggIsActive=function() {
			return false;
		}
		el.ggElementNodeId=function() {
			return player.getCurrentNode();
		}
		me.__43.logicBlock_position = function() {
			var newLogicStatePosition;
			if (
				((player.getViewerSize().width <= 460))
			)
			{
				newLogicStatePosition = 0;
			}
			else {
				newLogicStatePosition = -1;
			}
			if (me.__43.ggCurrentLogicStatePosition != newLogicStatePosition) {
				me.__43.ggCurrentLogicStatePosition = newLogicStatePosition;
				me.__43.style.transition='right 0s, top 0s, transform 0s';
				if (me.__43.ggCurrentLogicStatePosition == 0) {
					me.__43.style.right='2px';
					me.__43.style.top = 'calc(50% - (510px / 2) + (0px / 2) + 5px)';
				}
				else {
					me.__43.style.right='15px';
					me.__43.style.top='calc(50% - ((510px + 0px) / 2) + 0px)';
				}
			}
		}
		me.__43.logicBlock_position();
		me.__43.logicBlock_scaling = function() {
			var newLogicStateScaling;
			if (
				((player.getViewerSize().width <= 460))
			)
			{
				newLogicStateScaling = 0;
			}
			else {
				newLogicStateScaling = -1;
			}
			if (me.__43.ggCurrentLogicStateScaling != newLogicStateScaling) {
				me.__43.ggCurrentLogicStateScaling = newLogicStateScaling;
				me.__43.style.transition='right 0s, top 0s, transform 0s';
				if (me.__43.ggCurrentLogicStateScaling == 0) {
					me.__43.ggParameter.sx = 0.75;
					me.__43.ggParameter.sy = 0.7;
					me.__43.style.transform=parameterToTransform(me.__43.ggParameter);
					skin.updateSize(me.__43);
				}
				else {
					me.__43.ggParameter.sx = 1;
					me.__43.ggParameter.sy = 1;
					me.__43.style.transform=parameterToTransform(me.__43.ggParameter);
					skin.updateSize(me.__43);
				}
			}
		}
		me.__43.logicBlock_scaling();
		me.__43.ggUpdatePosition=function (useTransition) {
		}
		el=me._rectangle_2=document.createElement('div');
		el.ggId="Rectangle 2";
		el.ggDy=-10;
		el.ggParameter={ rx:0,ry:0,a:0,sx:1,sy:1,def:'' };
		el.ggVisible=true;
		el.className="ggskin ggskin_rectangle ";
		el.ggType='rectangle';
		hs ='';
		hs+='background : rgba(255,255,255,0.470588);';
		hs+='border : 0px solid #000000;';
		hs+='border-radius : 30px;';
		hs+='cursor : pointer;';
		hs+='height : 100%;';
		hs+='left : 0px;';
		hs+='position : absolute;';
		hs+='top : calc(50% - ((100% + 0px) / 2) - 10px);';
		hs+='visibility : inherit;';
		hs+='width : 100%;';
		hs+='pointer-events:auto;';
		el.setAttribute('style',hs);
		el.style.transformOrigin='50% 50%';
		me._rectangle_2.ggIsActive=function() {
			if ((this.parentNode) && (this.parentNode.ggIsActive)) {
				return this.parentNode.ggIsActive();
			}
			return false;
		}
		el.ggElementNodeId=function() {
			if ((this.parentNode) && (this.parentNode.ggElementNodeId)) {
				return this.parentNode.ggElementNodeId();
			}
			return player.getCurrentNode();
		}
		me._rectangle_2.logicBlock_size = function() {
			var newLogicStateSize;
			if (
				((player.getVariableValue('vis_short') == true))
			)
			{
				newLogicStateSize = 0;
			}
			else {
				newLogicStateSize = -1;
			}
			if (me._rectangle_2.ggCurrentLogicStateSize != newLogicStateSize) {
				me._rectangle_2.ggCurrentLogicStateSize = newLogicStateSize;
				me._rectangle_2.style.transition='width 500ms ease-in 0ms, height 500ms ease-in 0ms, top 500ms ease-in 0ms';
				if (me._rectangle_2.ggCurrentLogicStateSize == 0) {
					me._rectangle_2.style.width='100%';
					me._rectangle_2.style.height='0%';
					me._rectangle_2.style.top = 'calc(50% - (0% / 2) + (0px / 2) + -10px)';
					setTimeout(function() {skin.updateSize(me._rectangle_2);}, 550);
				}
				else {
					me._rectangle_2.style.width='100%';
					me._rectangle_2.style.height='100%';
					me._rectangle_2.style.top = 'calc(50% - (100% / 2) + (0px / 2) + -10px)';
					setTimeout(function() {skin.updateSize(me._rectangle_2);}, 550);
				}
			}
		}
		me._rectangle_2.logicBlock_size();
		me._rectangle_2.ggUpdatePosition=function (useTransition) {
		}
		el=me.__46=document.createElement('div');
		el.ggId="\uc544\uc774\ucf58\ubc15\uc2a4";
		el.ggParameter={ rx:0,ry:0,a:0,sx:1,sy:1,def:'' };
		el.ggVisible=true;
		el.className="ggskin ggskin_container ";
		el.ggType='container';
		hs ='';
		hs+='height : 100%;';
		hs+='left : 0px;';
		hs+='position : absolute;';
		hs+='top : 5px;';
		hs+='visibility : inherit;';
		hs+='width : 100%;';
		hs+='pointer-events:none;';
		el.setAttribute('style',hs);
		el.style.transformOrigin='50% 50%';
		me.__46.ggIsActive=function() {
			if ((this.parentNode) && (this.parentNode.ggIsActive)) {
				return this.parentNode.ggIsActive();
			}
			return false;
		}
		el.ggElementNodeId=function() {
			if ((this.parentNode) && (this.parentNode.ggElementNodeId)) {
				return this.parentNode.ggElementNodeId();
			}
			return player.getCurrentNode();
		}
		me.__46.ggUpdatePosition=function (useTransition) {
		}
		el=me.__79=document.createElement('div');
		el.ggId="\uc544\uc774\ucf58-\uacf5\uac04\uc120\ud0dd";
		el.ggDx=0;
		el.ggParameter={ rx:0,ry:0,a:0,sx:1,sy:1,def:'' };
		el.ggVisible=true;
		el.className="ggskin ggskin_container ";
		el.ggType='container';
		hs ='';
		hs+='cursor : pointer;';
		hs+='height : 43px;';
		hs+='left : calc(50% - ((43px + 0px) / 2) + 0px);';
		hs+='position : absolute;';
		hs+='top : 0px;';
		hs+='visibility : inherit;';
		hs+='width : 43px;';
		hs+='pointer-events:none;';
		el.setAttribute('style',hs);
		el.style.transformOrigin='50% 50%';
		me.__79.ggIsActive=function() {
			if ((this.parentNode) && (this.parentNode.ggIsActive)) {
				return this.parentNode.ggIsActive();
			}
			return false;
		}
		el.ggElementNodeId=function() {
			if ((this.parentNode) && (this.parentNode.ggElementNodeId)) {
				return this.parentNode.ggElementNodeId();
			}
			return player.getCurrentNode();
		}
		me.__79.logicBlock_visible = function() {
			var newLogicStateVisible;
			if (
				((player.getVariableValue('vis_short') == true))
			)
			{
				newLogicStateVisible = 0;
			}
			else if (
				((player.getVariableValue('vis_skin_show') == true))
			)
			{
				newLogicStateVisible = 1;
			}
			else {
				newLogicStateVisible = -1;
			}
			if (me.__79.ggCurrentLogicStateVisible != newLogicStateVisible) {
				me.__79.ggCurrentLogicStateVisible = newLogicStateVisible;
				me.__79.style.transition='';
				if (me.__79.ggCurrentLogicStateVisible == 0) {
					me.__79.style.visibility="hidden";
					me.__79.ggVisible=false;
				}
				else if (me.__79.ggCurrentLogicStateVisible == 1) {
					me.__79.style.visibility="hidden";
					me.__79.ggVisible=false;
				}
				else {
					me.__79.style.visibility=(Number(me.__79.style.opacity)>0||!me.__79.style.opacity)?'inherit':'hidden';
					me.__79.ggVisible=true;
				}
			}
		}
		me.__79.logicBlock_visible();
		me.__79.onclick=function (e) {
			player.setVariableValue('vis_roomchoice', !player.getVariableValue('vis_roomchoice'));
			if (
				(
					((player.getViewerSize().width <= 460))
				)
			||
				(
					((player.getIsMobile() == true))
				)
			) {
				me.__23.style.transition='none';
				me.__23.style.visibility='hidden';
				me.__23.ggVisible=false;
			}
		}
		me.__79.onmouseover=function (e) {
			me.elementMouseOver['_79']=true;
		}
		me.__79.onmousemove=function (e) {
			me.__80.style.transition='none';
			me.__80.style.visibility=(Number(me.__80.style.opacity)>0||!me.__80.style.opacity)?'inherit':'hidden';
			me.__80.ggVisible=true;
		}
		me.__79.onmouseout=function (e) {
			me.elementMouseOver['_79']=false;
		}
		me.__79.ggCurrentLogicStateVisible = -1;
		me.__79.ggUpdateConditionTimer=function () {
			if (me.elementMouseOver['_79']) {
				me.__80.style.transition='none';
				me.__80.style.visibility=(Number(me.__80.style.opacity)>0||!me.__80.style.opacity)?'inherit':'hidden';
				me.__80.ggVisible=true;
			}
		}
		me.__79.ggUpdatePosition=function (useTransition) {
		}
		el=me.__210=document.createElement('div');
		el.ggId="\uacf5\uac04\uc120\ud0dd\ubc30\uacbd2";
		el.ggParameter={ rx:0,ry:0,a:0,sx:1,sy:1,def:'' };
		el.ggVisible=false;
		el.className="ggskin ggskin_rectangle ";
		el.ggType='rectangle';
		hs ='';
		hs+='background : #ffffff;';
		hs+='border : 0px solid #000000;';
		hs+='border-radius : 50px;';
		hs+='cursor : default;';
		hs+='height : 100%;';
		hs+='left : 0px;';
		hs+='position : absolute;';
		hs+='top : 0px;';
		hs+='visibility : hidden;';
		hs+='width : 100%;';
		hs+='pointer-events:auto;';
		el.setAttribute('style',hs);
		el.style.transformOrigin='50% 50%';
		me.__210.ggIsActive=function() {
			if ((this.parentNode) && (this.parentNode.ggIsActive)) {
				return this.parentNode.ggIsActive();
			}
			return false;
		}
		el.ggElementNodeId=function() {
			if ((this.parentNode) && (this.parentNode.ggElementNodeId)) {
				return this.parentNode.ggElementNodeId();
			}
			return player.getCurrentNode();
		}
		me.__210.logicBlock_visible = function() {
			var newLogicStateVisible;
			if (
				((player.getVariableValue('vis_roomchoice') == true))
			)
			{
				newLogicStateVisible = 0;
			}
			else {
				newLogicStateVisible = -1;
			}
			if (me.__210.ggCurrentLogicStateVisible != newLogicStateVisible) {
				me.__210.ggCurrentLogicStateVisible = newLogicStateVisible;
				me.__210.style.transition='';
				if (me.__210.ggCurrentLogicStateVisible == 0) {
					me.__210.style.visibility=(Number(me.__210.style.opacity)>0||!me.__210.style.opacity)?'inherit':'hidden';
					me.__210.ggVisible=true;
				}
				else {
					me.__210.style.visibility="hidden";
					me.__210.ggVisible=false;
				}
			}
		}
		me.__210.logicBlock_visible();
		me.__210.ggUpdatePosition=function (useTransition) {
		}
		me.__79.appendChild(me.__210);
		el=me.__81=document.createElement('div');
		els=me.__81__img=document.createElement('img');
		els.className='ggskin ggskin__81';
		hs='data:image/png;base64,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';
		els.setAttribute('src',hs);
		els.ggNormalSrc=hs;
		hs ='';
		hs += 'position: absolute;top: 0px;left: 0px;width: 100%;height: 100%;-webkit-user-drag:none;pointer-events:none;;';
		els.setAttribute('style', hs);
		els.className='ggskin ggskin_image';
		els['ondragstart']=function() { return false; };
		player.checkLoaded.push(els);
		el.appendChild(els);
		el.ggSubElement = els;
		el.ggId="\uacf5\uac04\uc120\ud0dd\uc544\uc774\ucf58";
		el.ggDx=0;
		el.ggDy=0;
		el.ggParameter={ rx:0,ry:0,a:0,sx:0.6,sy:0.6,def:'' };
		el.ggVisible=true;
		el.className="ggskin ggskin_image ";
		el.ggType='image';
		hs ='';
		hs+='height : 87.5%;';
		hs+='left : calc(50% - ((87% + 0px) / 2) + 0px);';
		hs+='position : absolute;';
		hs+='top : calc(50% - ((87.5% + 0px) / 2) + 0px);';
		hs+='visibility : inherit;';
		hs+='width : 87%;';
		hs+='pointer-events:auto;';
		el.setAttribute('style',hs);
		el.style.transformOrigin='50% 50%';
		el.style.transform=parameterToTransform(el.ggParameter);
		me.__81.ggIsActive=function() {
			if ((this.parentNode) && (this.parentNode.ggIsActive)) {
				return this.parentNode.ggIsActive();
			}
			return false;
		}
		el.ggElementNodeId=function() {
			if ((this.parentNode) && (this.parentNode.ggElementNodeId)) {
				return this.parentNode.ggElementNodeId();
			}
			return player.getCurrentNode();
		}
		me.__81.ggUpdatePosition=function (useTransition) {
		}
		me.__79.appendChild(me.__81);
		el=me.__80=document.createElement('div');
		els=me.__80__text=document.createElement('div');
		el.className='ggskin ggskin_textdiv';
		el.ggTextDiv=els;
		el.ggId="\uacf5\uac04\uc120\ud0dd\ud0dd\uc2a4\ud2b8";
		el.ggDy=0;
		el.ggParameter={ rx:0,ry:0,a:0,sx:1,sy:1,def:'' };
		el.ggVisible=false;
		el.className="ggskin ggskin_text ";
		el.ggType='text';
		hs ='';
		hs+='background : rgba(255,255,255,0.784314);';
		hs+='border : 0px solid #000000;';
		hs+='border-radius : 20px;';
		hs+='color : rgba(34,34,34,1);';
		hs+='cursor : default;';
		hs+='height : 40px;';
		hs+='left : -90px;';
		hs+='position : absolute;';
		hs+='top : calc(50% - ((40px + 0px) / 2) + 0px);';
		hs+='visibility : hidden;';
		hs+='width : 85px;';
		hs+='pointer-events:auto;';
		hs+='line-height:14px;';
		el.setAttribute('style',hs);
		el.style.transformOrigin='50% 50%';
		hs ='';
		hs += 'box-sizing: border-box;';
		hs+='cursor: default;';
		hs+='width: 100%;';
		hs+='height: auto;';
		hs+='max-height: 100%;';
		hs+='text-align: center;';
		hs+='position: absolute;';
		hs+='top: 50%;';
		hs+='transform: translate(0, -50%);';
		hs+='white-space: pre;';
		hs+='padding: 5px;';
		hs+='overflow: hidden;';
		els.setAttribute('style',hs);
		me.__80.ggUpdateText=function() {
			var params = [];
			var hs = player._("\uacf5\uac04\uc120\ud0dd", params);
			if (hs!=this.ggText) {
				this.ggText=hs;
				this.ggTextDiv.innerHTML=hs;
				if (this.ggUpdatePosition) this.ggUpdatePosition();
			}
		}
		me.__80.ggUpdateText();
		el.appendChild(els);
		me.__80.ggIsActive=function() {
			if ((this.parentNode) && (this.parentNode.ggIsActive)) {
				return this.parentNode.ggIsActive();
			}
			return false;
		}
		el.ggElementNodeId=function() {
			if ((this.parentNode) && (this.parentNode.ggElementNodeId)) {
				return this.parentNode.ggElementNodeId();
			}
			return player.getCurrentNode();
		}
		me.__80.logicBlock_visible = function() {
			var newLogicStateVisible;
			if (
				((player.getVariableValue('vis_roomchoice') == true))
			)
			{
				newLogicStateVisible = 0;
			}
			else {
				newLogicStateVisible = -1;
			}
			if (me.__80.ggCurrentLogicStateVisible != newLogicStateVisible) {
				me.__80.ggCurrentLogicStateVisible = newLogicStateVisible;
				me.__80.style.transition='';
				if (me.__80.ggCurrentLogicStateVisible == 0) {
					me.__80.style.visibility=(Number(me.__80.style.opacity)>0||!me.__80.style.opacity)?'inherit':'hidden';
					me.__80.ggVisible=true;
				}
				else {
					me.__80.style.visibility="hidden";
					me.__80.ggVisible=false;
				}
			}
		}
		me.__80.logicBlock_visible();
		me.__80.ggUpdatePosition=function (useTransition) {
		}
		me.__79.appendChild(me.__80);
		el=me._timer_1=document.createElement('div');
		el.ggTimestamp=skin.ggCurrentTime;
		el.ggLastIsActive=true;
		el.ggTimeout=500;
		el.ggId="Timer 1";
		el.ggParameter={ rx:0,ry:0,a:0,sx:1,sy:1,def:'' };
		el.ggVisible=true;
		el.className="ggskin ggskin_timer ";
		el.ggType='timer';
		hs ='';
		hs+='height : 20px;';
		hs+='left : -257px;';
		hs+='position : absolute;';
		hs+='top : 279px;';
		hs+='visibility : inherit;';
		hs+='width : 100px;';
		hs+='pointer-events:none;';
		el.setAttribute('style',hs);
		el.style.transformOrigin='50% 50%';
		me._timer_1.ggIsActive=function() {
			return (me._timer_1.ggTimestamp==0 ? false : (Math.floor((skin.ggCurrentTime - me._timer_1.ggTimestamp) / me._timer_1.ggTimeout) % 2 == 0));
		}
		el.ggElementNodeId=function() {
			if ((this.parentNode) && (this.parentNode.ggElementNodeId)) {
				return this.parentNode.ggElementNodeId();
			}
			return player.getCurrentNode();
		}
		me._timer_1.logicBlock_visible = function() {
			var newLogicStateVisible;
			if (
				((me._timer_1.ggIsActive() == true))
			)
			{
				newLogicStateVisible = 0;
			}
			else {
				newLogicStateVisible = -1;
			}
			if (me._timer_1.ggCurrentLogicStateVisible != newLogicStateVisible) {
				me._timer_1.ggCurrentLogicStateVisible = newLogicStateVisible;
				me._timer_1.style.transition='';
				if (me._timer_1.ggCurrentLogicStateVisible == 0) {
					me._timer_1.style.visibility=(Number(me._timer_1.style.opacity)>0||!me._timer_1.style.opacity)?'inherit':'hidden';
					me._timer_1.ggVisible=true;
				}
				else {
					me._timer_1.style.visibility=(Number(me._timer_1.style.opacity)>0||!me._timer_1.style.opacity)?'inherit':'hidden';
					me._timer_1.ggVisible=true;
				}
			}
		}
		me._timer_1.logicBlock_visible();
		me._timer_1.ggActivate=function () {
			me.__80.style.transition='none';
			me.__80.style.visibility='hidden';
			me.__80.ggVisible=false;
		}
		me._timer_1.ggCurrentLogicStateVisible = -1;
		me._timer_1.ggUpdateConditionTimer=function () {
			me._timer_1.logicBlock_visible();
		}
		me._timer_1.ggUpdatePosition=function (useTransition) {
		}
		me.__79.appendChild(me._timer_1);
		me.__46.appendChild(me.__79);
		el=me.__75=document.createElement('div');
		el.ggId="\uc544\uc774\ucf58-\ud3c9\uba74\ub3c4";
		el.ggDx=0;
		el.ggParameter={ rx:0,ry:0,a:0,sx:1,sy:1,def:'' };
		el.ggVisible=true;
		el.className="ggskin ggskin_container ";
		el.ggType='container';
		hs ='';
		hs+='cursor : pointer;';
		hs+='height : 43px;';
		hs+='left : calc(50% - ((43px + 0px) / 2) + 0px);';
		hs+='position : absolute;';
		hs+='top : 58px;';
		hs+='visibility : inherit;';
		hs+='width : 43px;';
		hs+='pointer-events:none;';
		el.setAttribute('style',hs);
		el.style.transformOrigin='50% 50%';
		me.__75.ggIsActive=function() {
			if ((this.parentNode) && (this.parentNode.ggIsActive)) {
				return this.parentNode.ggIsActive();
			}
			return false;
		}
		el.ggElementNodeId=function() {
			if ((this.parentNode) && (this.parentNode.ggElementNodeId)) {
				return this.parentNode.ggElementNodeId();
			}
			return player.getCurrentNode();
		}
		me.__75.logicBlock_visible = function() {
			var newLogicStateVisible;
			if (
				((player.getVariableValue('vis_short') == true))
			)
			{
				newLogicStateVisible = 0;
			}
			else if (
				((player.getVariableValue('vis_skin_show') == true))
			)
			{
				newLogicStateVisible = 1;
			}
			else {
				newLogicStateVisible = -1;
			}
			if (me.__75.ggCurrentLogicStateVisible != newLogicStateVisible) {
				me.__75.ggCurrentLogicStateVisible = newLogicStateVisible;
				me.__75.style.transition='';
				if (me.__75.ggCurrentLogicStateVisible == 0) {
					me.__75.style.visibility="hidden";
					me.__75.ggVisible=false;
				}
				else if (me.__75.ggCurrentLogicStateVisible == 1) {
					me.__75.style.visibility="hidden";
					me.__75.ggVisible=false;
				}
				else {
					me.__75.style.visibility=(Number(me.__75.style.opacity)>0||!me.__75.style.opacity)?'inherit':'hidden';
					me.__75.ggVisible=true;
				}
			}
		}
		me.__75.logicBlock_visible();
		me.__75.onclick=function (e) {
			if (
				(
					((player.getViewerSize().width > 460))
				)
			||
				(
					((player.getIsMobile() == false))
				)
			) {
				me.__26.ggVisible = !me.__26.ggVisible;
				var flag=me.__26.ggVisible;
				me.__26.style.transition='none';
				me.__26.style.visibility=((flag)&&(Number(me.__26.style.opacity)>0||!me.__26.style.opacity))?'inherit':'hidden';
			}
			me.__78.ggVisible = !me.__78.ggVisible;
			var flag=me.__78.ggVisible;
			me.__78.style.transition='none';
			me.__78.style.visibility=((flag)&&(Number(me.__78.style.opacity)>0||!me.__78.style.opacity))?'inherit':'hidden';
			if (
				(
					((player.getViewerSize().width <= 460))
				)
			||
				(
					((player.getIsMobile() == true))
				)
			) {
				player.setVariableValue('vis_mobilemap', !player.getVariableValue('vis_mobilemap'));
			}
		}
		me.__75.onmouseover=function (e) {
			me.elementMouseOver['_75']=true;
		}
		me.__75.onmousemove=function (e) {
			me.__76.style.transition='none';
			me.__76.style.visibility=(Number(me.__76.style.opacity)>0||!me.__76.style.opacity)?'inherit':'hidden';
			me.__76.ggVisible=true;
		}
		me.__75.onmouseout=function (e) {
			me.elementMouseOver['_75']=false;
		}
		me.__75.ggCurrentLogicStateVisible = -1;
		me.__75.ggUpdateConditionTimer=function () {
			if (me.elementMouseOver['_75']) {
				me.__76.style.transition='none';
				me.__76.style.visibility=(Number(me.__76.style.opacity)>0||!me.__76.style.opacity)?'inherit':'hidden';
				me.__76.ggVisible=true;
			}
		}
		me.__75.ggUpdatePosition=function (useTransition) {
		}
		el=me.__78=document.createElement('div');
		el.ggId="\ud3c9\uba74\ub3c4\ubc30\uacbd";
		el.ggParameter={ rx:0,ry:0,a:0,sx:1,sy:1,def:'' };
		el.ggVisible=false;
		el.className="ggskin ggskin_rectangle ";
		el.ggType='rectangle';
		hs ='';
		hs+='background : #ffffff;';
		hs+='border : 0px solid #000000;';
		hs+='border-radius : 50px;';
		hs+='cursor : default;';
		hs+='height : 100%;';
		hs+='left : 0px;';
		hs+='position : absolute;';
		hs+='top : 0px;';
		hs+='visibility : hidden;';
		hs+='width : 100%;';
		hs+='pointer-events:auto;';
		el.setAttribute('style',hs);
		el.style.transformOrigin='50% 50%';
		me.__78.ggIsActive=function() {
			if ((this.parentNode) && (this.parentNode.ggIsActive)) {
				return this.parentNode.ggIsActive();
			}
			return false;
		}
		el.ggElementNodeId=function() {
			if ((this.parentNode) && (this.parentNode.ggElementNodeId)) {
				return this.parentNode.ggElementNodeId();
			}
			return player.getCurrentNode();
		}
		me.__78.ggUpdatePosition=function (useTransition) {
		}
		me.__75.appendChild(me.__78);
		el=me.__77=document.createElement('div');
		els=me.__77__img=document.createElement('img');
		els.className='ggskin ggskin__77';
		hs='data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAAGQAAABkCAYAAABw4pVUAAAACXBIWXMAAA9hAAAPYQGoP6dpAAABaUlEQVR4nO3dwUrEMBRA0VdxreL/f6MM/kBcuFJ0IaZ6Kefsmxm4pClNp3OstYaOu//+AnwkSIwgMYLECBIjSIwgMYLECBIjSIwgMYLECBIjSIwgMYLECBJzv2ug4zhsPc7MWuv4zfFmSIwgMYLECBKzbVH/xq8WuB/66qLi7M/ffiFjhsQIEiNIjCAxgsQIEiNIjCAxgsQIEiNIjCAxgsQIEiNIzNn7IX/pL/deTmOGxAgSI0iMIDGCxAgSI0iMIDGCxAgSc6VbJ5f4fYoZEiNIjCAxV1pDPlszcztx/Kc54Zb/lYO8zszziePfZuZx96BOWTGCxAgSI0iMIDGCxAgSI0iMIDGCxAgSI0iMIDGCxAgSI0iMID'+
			'GCxAgSI0iMIDGCxFz5MaCHmXk5efztjl1/3+1l/O+8jP9iBIkRJEaQmG2LOnuYITGCxAgSI0iMIDGCxAgSI0iMIDGCxAgSI0iMIDGCxAgS8wZ7mBnYotOjNgAAAABJRU5ErkJggg==';
		els.setAttribute('src',hs);
		els.ggNormalSrc=hs;
		hs ='';
		hs += 'position: absolute;top: 0px;left: 0px;width: 100%;height: 100%;-webkit-user-drag:none;pointer-events:none;;';
		els.setAttribute('style', hs);
		els.className='ggskin ggskin_image';
		els['ondragstart']=function() { return false; };
		player.checkLoaded.push(els);
		el.appendChild(els);
		el.ggSubElement = els;
		el.ggId="\ud3c9\uba74\ub3c4";
		el.ggDx=0;
		el.ggDy=0;
		el.ggParameter={ rx:0,ry:0,a:0,sx:0.6,sy:0.6,def:'' };
		el.ggVisible=true;
		el.className="ggskin ggskin_image ";
		el.ggType='image';
		hs ='';
		hs+='height : 87.5%;';
		hs+='left : calc(50% - ((87% + 0px) / 2) + 0px);';
		hs+='position : absolute;';
		hs+='top : calc(50% - ((87.5% + 0px) / 2) + 0px);';
		hs+='visibility : inherit;';
		hs+='width : 87%;';
		hs+='pointer-events:auto;';
		el.setAttribute('style',hs);
		el.style.transformOrigin='50% 50%';
		el.style.transform=parameterToTransform(el.ggParameter);
		me.__77.ggIsActive=function() {
			if ((this.parentNode) && (this.parentNode.ggIsActive)) {
				return this.parentNode.ggIsActive();
			}
			return false;
		}
		el.ggElementNodeId=function() {
			if ((this.parentNode) && (this.parentNode.ggElementNodeId)) {
				return this.parentNode.ggElementNodeId();
			}
			return player.getCurrentNode();
		}
		me.__77.ggUpdatePosition=function (useTransition) {
		}
		me.__75.appendChild(me.__77);
		el=me.__76=document.createElement('div');
		els=me.__76__text=document.createElement('div');
		el.className='ggskin ggskin_textdiv';
		el.ggTextDiv=els;
		el.ggId="\ud3c9\uba74\ub3c4\ud0dd\uc2a4\ud2b8";
		el.ggDy=0;
		el.ggParameter={ rx:0,ry:0,a:0,sx:1,sy:1,def:'' };
		el.ggVisible=false;
		el.className="ggskin ggskin_text ";
		el.ggType='text';
		hs ='';
		hs+='background : rgba(255,255,255,0.784314);';
		hs+='border : 0px solid #000000;';
		hs+='border-radius : 20px;';
		hs+='color : rgba(34,34,34,1);';
		hs+='cursor : default;';
		hs+='height : 40px;';
		hs+='left : -90px;';
		hs+='position : absolute;';
		hs+='top : calc(50% - ((40px + 0px) / 2) + 0px);';
		hs+='visibility : hidden;';
		hs+='width : 85px;';
		hs+='pointer-events:auto;';
		hs+='line-height:14px;';
		el.setAttribute('style',hs);
		el.style.transformOrigin='50% 50%';
		hs ='';
		hs += 'box-sizing: border-box;';
		hs+='cursor: default;';
		hs+='width: 100%;';
		hs+='height: auto;';
		hs+='max-height: 100%;';
		hs+='text-align: center;';
		hs+='position: absolute;';
		hs+='top: 50%;';
		hs+='transform: translate(0, -50%);';
		hs+='white-space: pre;';
		hs+='padding: 5px;';
		hs+='overflow: hidden;';
		els.setAttribute('style',hs);
		me.__76.ggUpdateText=function() {
			var params = [];
			var hs = player._("\ud3c9\uba74\ubcf4\uae30", params);
			if (hs!=this.ggText) {
				this.ggText=hs;
				this.ggTextDiv.innerHTML=hs;
				if (this.ggUpdatePosition) this.ggUpdatePosition();
			}
		}
		me.__76.ggUpdateText();
		el.appendChild(els);
		me.__76.ggIsActive=function() {
			if ((this.parentNode) && (this.parentNode.ggIsActive)) {
				return this.parentNode.ggIsActive();
			}
			return false;
		}
		el.ggElementNodeId=function() {
			if ((this.parentNode) && (this.parentNode.ggElementNodeId)) {
				return this.parentNode.ggElementNodeId();
			}
			return player.getCurrentNode();
		}
		me.__76.ggUpdatePosition=function (useTransition) {
		}
		me.__75.appendChild(me.__76);
		me.__46.appendChild(me.__75);
		el=me.__74=document.createElement('div');
		el.ggTimestamp=skin.ggCurrentTime;
		el.ggLastIsActive=true;
		el.ggTimeout=500;
		el.ggId="\ud3c9\uba74\ub3c4\ud0c0\uc774\uba38";
		el.ggParameter={ rx:0,ry:0,a:0,sx:1,sy:1,def:'' };
		el.ggVisible=true;
		el.className="ggskin ggskin_timer ";
		el.ggType='timer';
		hs ='';
		hs+='height : 20px;';
		hs+='left : -502px;';
		hs+='position : absolute;';
		hs+='top : 251px;';
		hs+='visibility : inherit;';
		hs+='width : 100px;';
		hs+='pointer-events:none;';
		el.setAttribute('style',hs);
		el.style.transformOrigin='50% 50%';
		me.__74.ggIsActive=function() {
			return (me.__74.ggTimestamp==0 ? false : (Math.floor((skin.ggCurrentTime - me.__74.ggTimestamp) / me.__74.ggTimeout) % 2 == 0));
		}
		el.ggElementNodeId=function() {
			if ((this.parentNode) && (this.parentNode.ggElementNodeId)) {
				return this.parentNode.ggElementNodeId();
			}
			return player.getCurrentNode();
		}
		me.__74.logicBlock_visible = function() {
			var newLogicStateVisible;
			if (
				((me.__74.ggIsActive() == true))
			)
			{
				newLogicStateVisible = 0;
			}
			else {
				newLogicStateVisible = -1;
			}
			if (me.__74.ggCurrentLogicStateVisible != newLogicStateVisible) {
				me.__74.ggCurrentLogicStateVisible = newLogicStateVisible;
				me.__74.style.transition='';
				if (me.__74.ggCurrentLogicStateVisible == 0) {
					me.__74.style.visibility=(Number(me.__74.style.opacity)>0||!me.__74.style.opacity)?'inherit':'hidden';
					me.__74.ggVisible=true;
				}
				else {
					me.__74.style.visibility=(Number(me.__74.style.opacity)>0||!me.__74.style.opacity)?'inherit':'hidden';
					me.__74.ggVisible=true;
				}
			}
		}
		me.__74.logicBlock_visible();
		me.__74.ggActivate=function () {
			me.__76.style.transition='none';
			me.__76.style.visibility='hidden';
			me.__76.ggVisible=false;
		}
		me.__74.ggCurrentLogicStateVisible = -1;
		me.__74.ggUpdateConditionTimer=function () {
			me.__74.logicBlock_visible();
		}
		me.__74.ggUpdatePosition=function (useTransition) {
		}
		me.__46.appendChild(me.__74);
		el=me.__70=document.createElement('div');
		el.ggId="\uc544\uc774\ucf58-\uc2a4\ud31f\uc544\uc774\ucf58";
		el.ggDx=0;
		el.ggParameter={ rx:0,ry:0,a:0,sx:1,sy:1,def:'' };
		el.ggVisible=true;
		el.className="ggskin ggskin_container ";
		el.ggType='container';
		hs ='';
		hs+='cursor : pointer;';
		hs+='height : 43px;';
		hs+='left : calc(50% - ((43px + 0px) / 2) + 0px);';
		hs+='position : absolute;';
		hs+='top : 174px;';
		hs+='visibility : inherit;';
		hs+='width : 43px;';
		hs+='pointer-events:none;';
		el.setAttribute('style',hs);
		el.style.transformOrigin='50% 50%';
		me.__70.ggIsActive=function() {
			if ((this.parentNode) && (this.parentNode.ggIsActive)) {
				return this.parentNode.ggIsActive();
			}
			return false;
		}
		el.ggElementNodeId=function() {
			if ((this.parentNode) && (this.parentNode.ggElementNodeId)) {
				return this.parentNode.ggElementNodeId();
			}
			return player.getCurrentNode();
		}
		me.__70.logicBlock_visible = function() {
			var newLogicStateVisible;
			if (
				((player.getVariableValue('vis_short') == true))
			)
			{
				newLogicStateVisible = 0;
			}
			else if (
				((player.getVariableValue('vis_skin_show') == true))
			)
			{
				newLogicStateVisible = 1;
			}
			else {
				newLogicStateVisible = -1;
			}
			if (me.__70.ggCurrentLogicStateVisible != newLogicStateVisible) {
				me.__70.ggCurrentLogicStateVisible = newLogicStateVisible;
				me.__70.style.transition='';
				if (me.__70.ggCurrentLogicStateVisible == 0) {
					me.__70.style.visibility="hidden";
					me.__70.ggVisible=false;
				}
				else if (me.__70.ggCurrentLogicStateVisible == 1) {
					me.__70.style.visibility="hidden";
					me.__70.ggVisible=false;
				}
				else {
					me.__70.style.visibility=(Number(me.__70.style.opacity)>0||!me.__70.style.opacity)?'inherit':'hidden';
					me.__70.ggVisible=true;
				}
			}
		}
		me.__70.logicBlock_visible();
		me.__70.onclick=function (e) {
			me.__35.style.transition='none';
			me.__35.style.visibility=(Number(me.__35.style.opacity)>0||!me.__35.style.opacity)?'inherit':'hidden';
			me.__35.ggVisible=true;
			me.__44.style.transition='none';
			me.__44.style.visibility='hidden';
			me.__44.ggVisible=false;
			me.__29.style.transition='none';
			me.__29.style.visibility='hidden';
			me.__29.ggVisible=false;
			if (
				(
					((player.getViewerSize().width > 460))
				)
			||
				(
					((player.getIsMobile() == false))
				)
			) {
				me.__26.style.transition='none';
				me.__26.style.visibility='hidden';
				me.__26.ggVisible=false;
			}
			var list=me.findElements("ht_node",true);
			while(list.length>0) {
				var e=list.pop();
				e.style.transition='none';
				e.style.visibility='hidden';
				e.ggVisible=false;
			}
			me.__82.style.transition='none';
			me.__82.style.visibility='hidden';
			me.__82.ggVisible=false;
			me._rectangle_2.style.transition='none';
			me._rectangle_2.style.visibility='hidden';
			me._rectangle_2.ggVisible=false;
			if (
				(
					((player.getViewerSize().width <= 460))
				)
			||
				(
					((player.getIsMobile() == true))
				)
			) {
				me.__23.style.transition='none';
				me.__23.style.visibility='hidden';
				me.__23.ggVisible=false;
			}
		}
		me.__70.onmouseover=function (e) {
			me.elementMouseOver['_70']=true;
		}
		me.__70.onmousemove=function (e) {
			me.__71.style.transition='none';
			me.__71.style.visibility=(Number(me.__71.style.opacity)>0||!me.__71.style.opacity)?'inherit':'hidden';
			me.__71.ggVisible=true;
		}
		me.__70.onmouseout=function (e) {
			me.elementMouseOver['_70']=false;
		}
		me.__70.ggCurrentLogicStateVisible = -1;
		me.__70.ggUpdateConditionTimer=function () {
			if (me.elementMouseOver['_70']) {
				me.__71.style.transition='none';
				me.__71.style.visibility=(Number(me.__71.style.opacity)>0||!me.__71.style.opacity)?'inherit':'hidden';
				me.__71.ggVisible=true;
			}
		}
		me.__70.ggUpdatePosition=function (useTransition) {
		}
		el=me.__73=document.createElement('div');
		el.ggId="\uc2a4\ud31f\uc544\uc774\ucf58\ubc30\uacbd";
		el.ggParameter={ rx:0,ry:0,a:0,sx:1,sy:1,def:'' };
		el.ggVisible=false;
		el.className="ggskin ggskin_rectangle ";
		el.ggType='rectangle';
		hs ='';
		hs+='background : #ffffff;';
		hs+='border : 0px solid #000000;';
		hs+='border-radius : 50px;';
		hs+='cursor : default;';
		hs+='height : 100%;';
		hs+='left : 0px;';
		hs+='position : absolute;';
		hs+='top : 0px;';
		hs+='visibility : hidden;';
		hs+='width : 100%;';
		hs+='pointer-events:auto;';
		el.setAttribute('style',hs);
		el.style.transformOrigin='50% 50%';
		me.__73.ggIsActive=function() {
			if ((this.parentNode) && (this.parentNode.ggIsActive)) {
				return this.parentNode.ggIsActive();
			}
			return false;
		}
		el.ggElementNodeId=function() {
			if ((this.parentNode) && (this.parentNode.ggElementNodeId)) {
				return this.parentNode.ggElementNodeId();
			}
			return player.getCurrentNode();
		}
		me.__73.ggUpdatePosition=function (useTransition) {
		}
		me.__70.appendChild(me.__73);
		el=me.__72=document.createElement('div');
		els=me.__72__img=document.createElement('img');
		els.className='ggskin ggskin__72';
		hs='data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAAGQAAABkCAYAAABw4pVUAAAACXBIWXMAAA9hAAAPYQGoP6dpAAAIFklEQVR4nO2cWawfUxzHP6fL1dbSStW+lapbUoqiCLUkuiCpLR54QYmX2olEYhdC8CQh1gceLIncetAi0UpDxVIaiVaV22jRVqvtbdFqHQ+/89d/xzkzc/6znRvnm0zuMjO/8zvnM2f/zSitNVHhaEDTDkTtqggkMEUggSkCCUwRSGCKQAJTBBKYIpDAFIEEpggkMEUggSkCCUwRSGCKQAJTBBKYIpDAFIEEpggkMEUggSkCCUwRiKeUUmOVUvOUUtuUUnOVUgeVaj9GneSXUqob+ADYv+3f72qtp5SWRgSSTw4YAJu01sPLSic2WTmUAgNgYalpxRqSrgwYvcCZWuuVZaU3qCxDVUspNQo4Fug2x1HAKGA/YE'+
			'9gN2AYsA3YDGwA+szvPwNLgW/Mz6Va674caWbBOKdMGBBwDTGFMRWYDJwO7Fui+b+BL4H3zbFAa/2HJf0sGL0l+iTSWgdzAMcBjwLLAV3j8QfwFnAZUtO6kVplu/YH4PCqyqDxGqKU6gKuAm4ATm7UGdE6YAiwu+VcL1XVDKPGgCilhgDXAncBBzfihJ9WAGdXCQMaAKKUGgDMBO4FDvS4tdVcLAaWmd9/An4FNgK/J64fCoxE+p4xwFhgHHA0sLen278BJ2utl3ve56+a+4gJwEfkb9sXA48BFwAjSsqyAsYDNwNvIyOxPL4sAiZWXkY1gRgMPAL8lSPjy4EHgCNLApClCcgQOQ+Uv4xvA/stEOBw4OOMjO4AepAhrspZkN3AHea+b9sKdQPSpPWY890ZNlyjqbRjHjCq3wEBpiPtb1rm3kAmfHmkgBnIcoVPAS40'+
			'97XDToOxEngNeVBcNr8Hju43QIBZwPaUDH2FjFpa12dpDPJk+j7NySd7TAaMXsw8AzgD+DrF3mrgxOCBAPenZGIbcDcwKHFPmi4HNhWE0Tq24K61/8Jo86sLeAh3bdkInBosEKTTcxXGctcTlaKZKYVR5vEfGAn/piCTRtu964DxwQEB7knJ8HvAiJR7bbqU9GbvC+A2YBIyp+kyPyeZ/3/hAwPSywOZw/Q6bPwIHBwMEOBKZNHO5uyLwOCM+5Mai7uZ+g4ZMOTRdGSW7YKxqgUjC4jx8xBk1dhm61NgaONAkOHqVoeTT+a00S6FuwPvAfbKCQOkA/8lBchC2kZfOX09ABla2+y91CgQ45wrw0952GnXDIe9ucBATxh55hkzfIAYf8cAa1z2GgGCbAF/4HDqFcxaWQdAbMsr3wHDK4ChTXpeQIzPZ2BvGVYBezcB5B'+
			'ZHBj8EujxttRekzea0kmCsdvy/2xeI8XuWw95LtQIBRiMrrElH1gGHdGCvpTssNheVBKMX6cA/t5y7s0MgCnjHkd65dQJ50+HEpR3aa6nHYvP2EmGADImT53s6AWJ8PxCZICZtflwLEOAcR6afLwC4pW8tdieVCANgouWaZZ0CMf7f5Ej7wjqA2CZcfaRM/DyA2J60rI0sHxggG1TJ6zYWBNKFvX/62sdOmYFyg5AAgaKyzTFWp1yfFh2yAjgbgdKu33Km66Md5iimkpus1yuqIa4tV9+a0ZKthmzqtDyM/zMdflxUeZNlHHB16tcUBGLrQ2zRKJ3CgJL7EGAfZG+/mU7dOOEa9vYBRxUAkmeUVQQGwK2W+4qMslwP53m1ATGO2DKmkXH+sA6BZM1DisKAcuchVzt86aj5LgokbemkB49ggESB2+xNKwnGVMf93jN1'+
			'4CTsrcR64KDagRin0hYXXyDnelZCtj3z3pR08sLYA3sf5b2WhQT3/ejw56qOy7MoEOPcZNzL78/lgZLQDIetIjAGYu+fNJ6rvUjU/RKHrZcLlWUZQIyTaRtUrwFDPIAoYH6JMEYAcxw25uOxH4LMd75y2PoMz76zMiDG2bQt3A+BkTmBgOwYbkmxtwYZ6aVJAZfgjqbvQ7Zl/1VG/o5AtgFstsLawm1zOi3IYQVwWk4g3WTHdC1CRnoT2RlqOsL8fas577p3O3BFMtGUfE0G1jpsrSfEIIecUFrhmEMT9yRhdBJRmPfYAVxnewoseRmEBIa7gi3CDgNqy0hWoNwyYKoFSNUw+pA4L6sSeTgFd3+h6S+Bcm0ZyhNK2oO8OZUFYxXwSUEY80n0GTYgSGTJM6THg/1AfwolbYMymuxg67+RCaYrEK0XGU21Ynt9wXzCf2'+
			'N7bToUeBr3EL51zKM/Blu3QRmMvDuY53UEF4ykupHljtlI89eK4dpk/p5tzqdFv4NsGVyM1NS0Jlab8w+SCIPtd0DawJyAX+T6NuBZ5IWd4RkF66NjgRsNhLwxw19Swws7Tb7Sdh+y7JJXGnkFYDEyF/iena+0bQD+RJ7gAeZovdI2EjgMeQFoHPKCzkiPdPuAh4EntNbbPe7rSE2+9Hk8MlksulNXlTYj/cnjWut1dSXayJcczEv5cwgTxlrgeSTqcm3didcOJOMLCT8jnfH5ZC+LlKk/kTDVV4HZWuutNaa9i2oFkgFjl/fAlVLjkD2Qs5BPa4wq0ZXMT2s0pdr6EB8Yjvv3Z+eHZ45Bgp33NcceSCc+xFy+BRmhrUc6/ZXs/PjMEnJ+fKYJ1QKkKIz/kyr/gFmE4adKa4hS6khgARFGblVdQ54jwvBS1TWkD+lw'+
			'2xVhpKjqGrIg8XeEkaGqgVyPzMjXmJ8RRoYa/6Jc1K6K3+0NTBFIYIpAAlMEEpgikMAUgQSmCCQwRSCBKQIJTBFIYIpAAlMEEpgikMAUgQSmCCQwRSCBKQIJTBFIYIpAAlMEEpj+AeF2nLPgYqQEAAAAAElFTkSuQmCC';
		els.setAttribute('src',hs);
		els.ggNormalSrc=hs;
		hs ='';
		hs += 'position: absolute;top: 0px;left: 0px;width: 100%;height: 100%;-webkit-user-drag:none;pointer-events:none;;';
		els.setAttribute('style', hs);
		els.className='ggskin ggskin_image';
		els['ondragstart']=function() { return false; };
		player.checkLoaded.push(els);
		el.appendChild(els);
		el.ggSubElement = els;
		el.ggId="\uc2a4\ud31f\uc544\uc774\ucf58";
		el.ggDx=0;
		el.ggDy=0;
		el.ggParameter={ rx:0,ry:0,a:0,sx:0.6,sy:0.6,def:'' };
		el.ggVisible=true;
		el.className="ggskin ggskin_image ";
		el.ggType='image';
		hs ='';
		hs+='height : 93.75%;';
		hs+='left : calc(50% - ((94% + 0px) / 2) + 0px);';
		hs+='position : absolute;';
		hs+='top : calc(50% - ((93.75% + 0px) / 2) + 0px);';
		hs+='visibility : inherit;';
		hs+='width : 94%;';
		hs+='pointer-events:auto;';
		el.setAttribute('style',hs);
		el.style.transformOrigin='50% 50%';
		el.style.transform=parameterToTransform(el.ggParameter);
		me.__72.ggIsActive=function() {
			if ((this.parentNode) && (this.parentNode.ggIsActive)) {
				return this.parentNode.ggIsActive();
			}
			return false;
		}
		el.ggElementNodeId=function() {
			if ((this.parentNode) && (this.parentNode.ggElementNodeId)) {
				return this.parentNode.ggElementNodeId();
			}
			return player.getCurrentNode();
		}
		me.__72.ggUpdatePosition=function (useTransition) {
		}
		me.__70.appendChild(me.__72);
		el=me.__71=document.createElement('div');
		els=me.__71__text=document.createElement('div');
		el.className='ggskin ggskin_textdiv';
		el.ggTextDiv=els;
		el.ggId="\uc2a4\ud31f\uc544\uc774\ucf58\ud0dd\uc2a4\ud2b8";
		el.ggDy=0;
		el.ggParameter={ rx:0,ry:0,a:0,sx:1,sy:1,def:'' };
		el.ggVisible=false;
		el.className="ggskin ggskin_text ";
		el.ggType='text';
		hs ='';
		hs+='background : rgba(255,255,255,0.784314);';
		hs+='border : 0px solid #000000;';
		hs+='border-radius : 20px;';
		hs+='color : rgba(34,34,34,1);';
		hs+='cursor : default;';
		hs+='height : 40px;';
		hs+='left : -90px;';
		hs+='position : absolute;';
		hs+='top : calc(50% - ((40px + 0px) / 2) + 0px);';
		hs+='visibility : hidden;';
		hs+='width : 85px;';
		hs+='pointer-events:auto;';
		hs+='line-height:14px;';
		el.setAttribute('style',hs);
		el.style.transformOrigin='50% 50%';
		hs ='';
		hs += 'box-sizing: border-box;';
		hs+='cursor: default;';
		hs+='width: 100%;';
		hs+='height: auto;';
		hs+='max-height: 100%;';
		hs+='text-align: center;';
		hs+='position: absolute;';
		hs+='top: 50%;';
		hs+='transform: translate(0, -50%);';
		hs+='white-space: pre;';
		hs+='padding: 5px;';
		hs+='overflow: hidden;';
		els.setAttribute('style',hs);
		me.__71.ggUpdateText=function() {
			var params = [];
			var hs = player._("\uc2a4\ud0a8\uc81c\uac70", params);
			if (hs!=this.ggText) {
				this.ggText=hs;
				this.ggTextDiv.innerHTML=hs;
				if (this.ggUpdatePosition) this.ggUpdatePosition();
			}
		}
		me.__71.ggUpdateText();
		el.appendChild(els);
		me.__71.ggIsActive=function() {
			if ((this.parentNode) && (this.parentNode.ggIsActive)) {
				return this.parentNode.ggIsActive();
			}
			return false;
		}
		el.ggElementNodeId=function() {
			if ((this.parentNode) && (this.parentNode.ggElementNodeId)) {
				return this.parentNode.ggElementNodeId();
			}
			return player.getCurrentNode();
		}
		me.__71.ggUpdatePosition=function (useTransition) {
		}
		me.__70.appendChild(me.__71);
		me.__46.appendChild(me.__70);
		el=me.__69=document.createElement('div');
		el.ggTimestamp=skin.ggCurrentTime;
		el.ggLastIsActive=true;
		el.ggTimeout=500;
		el.ggId="\uc2a4\ud31f\uc544\uc774\ucf58\ud0c0\uc774\uba38";
		el.ggParameter={ rx:0,ry:0,a:0,sx:1,sy:1,def:'' };
		el.ggVisible=true;
		el.className="ggskin ggskin_timer ";
		el.ggType='timer';
		hs ='';
		hs+='height : 20px;';
		hs+='left : -502px;';
		hs+='position : absolute;';
		hs+='top : 251px;';
		hs+='visibility : inherit;';
		hs+='width : 100px;';
		hs+='pointer-events:none;';
		el.setAttribute('style',hs);
		el.style.transformOrigin='50% 50%';
		me.__69.ggIsActive=function() {
			return (me.__69.ggTimestamp==0 ? false : (Math.floor((skin.ggCurrentTime - me.__69.ggTimestamp) / me.__69.ggTimeout) % 2 == 0));
		}
		el.ggElementNodeId=function() {
			if ((this.parentNode) && (this.parentNode.ggElementNodeId)) {
				return this.parentNode.ggElementNodeId();
			}
			return player.getCurrentNode();
		}
		me.__69.logicBlock_visible = function() {
			var newLogicStateVisible;
			if (
				((me.__69.ggIsActive() == true))
			)
			{
				newLogicStateVisible = 0;
			}
			else {
				newLogicStateVisible = -1;
			}
			if (me.__69.ggCurrentLogicStateVisible != newLogicStateVisible) {
				me.__69.ggCurrentLogicStateVisible = newLogicStateVisible;
				me.__69.style.transition='';
				if (me.__69.ggCurrentLogicStateVisible == 0) {
					me.__69.style.visibility=(Number(me.__69.style.opacity)>0||!me.__69.style.opacity)?'inherit':'hidden';
					me.__69.ggVisible=true;
				}
				else {
					me.__69.style.visibility=(Number(me.__69.style.opacity)>0||!me.__69.style.opacity)?'inherit':'hidden';
					me.__69.ggVisible=true;
				}
			}
		}
		me.__69.logicBlock_visible();
		me.__69.ggActivate=function () {
			me.__71.style.transition='none';
			me.__71.style.visibility='hidden';
			me.__71.ggVisible=false;
		}
		me.__69.ggCurrentLogicStateVisible = -1;
		me.__69.ggUpdateConditionTimer=function () {
			me.__69.logicBlock_visible();
		}
		me.__69.ggUpdatePosition=function (useTransition) {
		}
		me.__46.appendChild(me.__69);
		el=me._onoff=document.createElement('div');
		el.ggId="\uc544\uc774\ucf58-\uac00\uad6conoff";
		el.ggDx=0;
		el.ggParameter={ rx:0,ry:0,a:0,sx:1,sy:1,def:'' };
		el.ggVisible=true;
		el.className="ggskin ggskin_container ";
		el.ggType='container';
		hs ='';
		hs+='cursor : pointer;';
		hs+='height : 43px;';
		hs+='left : calc(50% - ((43px + 0px) / 2) + 0px);';
		hs+='position : absolute;';
		hs+='top : 116px;';
		hs+='visibility : inherit;';
		hs+='width : 43px;';
		hs+='pointer-events:none;';
		el.setAttribute('style',hs);
		el.style.transformOrigin='50% 50%';
		me._onoff.ggIsActive=function() {
			if ((this.parentNode) && (this.parentNode.ggIsActive)) {
				return this.parentNode.ggIsActive();
			}
			return false;
		}
		el.ggElementNodeId=function() {
			if ((this.parentNode) && (this.parentNode.ggElementNodeId)) {
				return this.parentNode.ggElementNodeId();
			}
			return player.getCurrentNode();
		}
		me._onoff.logicBlock_visible = function() {
			var newLogicStateVisible;
			if (
				((player.getVariableValue('vis_short') == true))
			)
			{
				newLogicStateVisible = 0;
			}
			else if (
				((player.getVariableValue('vis_skin_show') == true))
			)
			{
				newLogicStateVisible = 1;
			}
			else {
				newLogicStateVisible = -1;
			}
			if (me._onoff.ggCurrentLogicStateVisible != newLogicStateVisible) {
				me._onoff.ggCurrentLogicStateVisible = newLogicStateVisible;
				me._onoff.style.transition='';
				if (me._onoff.ggCurrentLogicStateVisible == 0) {
					me._onoff.style.visibility="hidden";
					me._onoff.ggVisible=false;
				}
				else if (me._onoff.ggCurrentLogicStateVisible == 1) {
					me._onoff.style.visibility="hidden";
					me._onoff.ggVisible=false;
				}
				else {
					me._onoff.style.visibility=(Number(me._onoff.style.opacity)>0||!me._onoff.style.opacity)?'inherit':'hidden';
					me._onoff.ggVisible=true;
				}
			}
		}
		me._onoff.logicBlock_visible();
		me._onoff.onclick=function (e) {
			me._onoff0.style.transition='none';
			me._onoff0.style.visibility=(Number(me._onoff0.style.opacity)>0||!me._onoff0.style.opacity)?'inherit':'hidden';
			me._onoff0.ggVisible=true;
		}
		me._onoff.onmouseover=function (e) {
			me.elementMouseOver['onoff']=true;
		}
		me._onoff.onmousemove=function (e) {
			me.__68.style.transition='none';
			me.__68.style.visibility=(Number(me.__68.style.opacity)>0||!me.__68.style.opacity)?'inherit':'hidden';
			me.__68.ggVisible=true;
		}
		me._onoff.onmouseout=function (e) {
			me.elementMouseOver['onoff']=false;
		}
		me._onoff.ggCurrentLogicStateVisible = -1;
		me._onoff.ggUpdateConditionTimer=function () {
			if (me.elementMouseOver['onoff']) {
				me.__68.style.transition='none';
				me.__68.style.visibility=(Number(me.__68.style.opacity)>0||!me.__68.style.opacity)?'inherit':'hidden';
				me.__68.ggVisible=true;
			}
		}
		me._onoff.ggUpdatePosition=function (useTransition) {
		}
		el=me._on=document.createElement('div');
		el.ggId="\uac00\uad6c-on";
		el.ggParameter={ rx:0,ry:0,a:0,sx:1,sy:1,def:'' };
		el.ggVisible=false;
		el.className="ggskin ggskin_container ";
		el.ggType='container';
		hs ='';
		hs+='height : 100%;';
		hs+='left : 0px;';
		hs+='position : absolute;';
		hs+='top : 0px;';
		hs+='visibility : hidden;';
		hs+='width : 100%;';
		hs+='pointer-events:none;';
		el.setAttribute('style',hs);
		el.style.transformOrigin='50% 50%';
		me._on.ggIsActive=function() {
			if ((this.parentNode) && (this.parentNode.ggIsActive)) {
				return this.parentNode.ggIsActive();
			}
			return false;
		}
		el.ggElementNodeId=function() {
			if ((this.parentNode) && (this.parentNode.ggElementNodeId)) {
				return this.parentNode.ggElementNodeId();
			}
			return player.getCurrentNode();
		}
		me._on.logicBlock_visible = function() {
			var newLogicStateVisible;
			if (
				((me.ggUserdata.tags.indexOf("\uac00\uad6c\uc788\uc74c") != -1))
			)
			{
				newLogicStateVisible = 0;
			}
			else {
				newLogicStateVisible = -1;
			}
			if (me._on.ggCurrentLogicStateVisible != newLogicStateVisible) {
				me._on.ggCurrentLogicStateVisible = newLogicStateVisible;
				me._on.style.transition='';
				if (me._on.ggCurrentLogicStateVisible == 0) {
					me._on.style.visibility=(Number(me._on.style.opacity)>0||!me._on.style.opacity)?'inherit':'hidden';
					me._on.ggVisible=true;
				}
				else {
					me._on.style.visibility="hidden";
					me._on.ggVisible=false;
				}
			}
		}
		me._on.logicBlock_visible();
		me._on.onclick=function (e) {
			if (
				(
					((player._(me.ggUserdata.comment) == "\ud604\uad00"))
				)
			) {
				player.openNext("{node1}","$(cur)");
			}
			if (
				(
					((player._(me.ggUserdata.comment) == "\uc8fc\ubc29"))
				)
			) {
				player.openNext("{node2}","$(cur)");
			}
			if (
				(
					((player._(me.ggUserdata.comment) == "\ubcf5\ub3c41"))
				)
			) {
				player.openNext("{node3}","$(cur)");
			}
			if (
				(
					((player._(me.ggUserdata.comment) == "\uce68\uc2e41"))
				)
			) {
				player.openNext("{node7}","$(cur)");
			}
			if (
				(
					((player._(me.ggUserdata.comment) == "\uac70\uc2e41"))
				)
			) {
				player.openNext("{node5}","$(cur)");
			}
			if (
				(
					((player._(me.ggUserdata.comment) == "\uac70\uc2e42"))
				)
			) {
				player.openNext("{node9}","$(cur)");
			}
			if (
				(
					((player._(me.ggUserdata.comment) == "\uac70\uc2e43"))
				)
			) {
				player.openNext("{node6}","$(cur)");
			}
			if (
				(
					((player._(me.ggUserdata.comment) == "\uce68\uc2e41"))
				)
			) {
				player.openNext("{node7}","$(cur)");
			}
			if (
				(
					((player._(me.ggUserdata.comment) == "\uce68\uc2e42"))
				)
			) {
				player.openNext("{node8}","$(cur)");
			}
			if (
				(
					((player._(me.ggUserdata.comment) == "\uc695\uc2e4"))
				)
			) {
				player.openNext("{node10}","$(cur)");
			}
		}
		me._on.ggUpdatePosition=function (useTransition) {
		}
		el=me._onoff0=document.createElement('div');
		el.ggId="\uac00\uad6conoff\ubc30\uacbd";
		el.ggParameter={ rx:0,ry:0,a:0,sx:1,sy:1,def:'' };
		el.ggVisible=false;
		el.className="ggskin ggskin_rectangle ";
		el.ggType='rectangle';
		hs ='';
		hs+='background : #ffffff;';
		hs+='border : 0px solid #000000;';
		hs+='border-radius : 50px;';
		hs+='cursor : default;';
		hs+='height : 100%;';
		hs+='left : 0px;';
		hs+='position : absolute;';
		hs+='top : 0px;';
		hs+='visibility : hidden;';
		hs+='width : 100%;';
		hs+='pointer-events:auto;';
		el.setAttribute('style',hs);
		el.style.transformOrigin='50% 50%';
		me._onoff0.ggIsActive=function() {
			if ((this.parentNode) && (this.parentNode.ggIsActive)) {
				return this.parentNode.ggIsActive();
			}
			return false;
		}
		el.ggElementNodeId=function() {
			if ((this.parentNode) && (this.parentNode.ggElementNodeId)) {
				return this.parentNode.ggElementNodeId();
			}
			return player.getCurrentNode();
		}
		me._onoff0.ggUpdatePosition=function (useTransition) {
		}
		me._on.appendChild(me._onoff0);
		el=me._on0=document.createElement('div');
		els=me._on0__img=document.createElement('img');
		els.className='ggskin ggskin_on0';
		hs='data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAAGQAAABkCAYAAABw4pVUAAAACXBIWXMAAA9hAAAPYQGoP6dpAAAEeklEQVR4nO2dy4scVRSHv2M60UkQdTHGldNkVkEQcSMMIaK4ECXGRQRBl/o3TCQwKGTtGBfxHzAo6EIkiOADIyJxkxhw48bHQiERX2gyOjPmuKiKjD23k6quW1W/njkf1OZW3XvOuV+/6tnm7gQ63NR3AsH/CSFihBAxQogYIUSMECJGCBEjhIgRQsQIIWKEEDFCiBghRIxB1wHN7E7gKeAh4B7gLuD2rvOowG/AJeAr4GPgLXe/1HpUd+9kAfYDbwCrgE/hslrmv7/VeepAxAA4PsUiUmKOA4M25svaPEFlZncA7wAHWwvSH58CT7r7rzkHbU2Imd0GfALc10oADS4AD7r777kGbEWIme0A3gceGbPJZeA94F'+
			'3gG+AixceBCgbsBfYBTwCPAXvGbPsh8Ki7/5MlckvfG0dJf/5eBV4DZrv6MZGpntky76tj6nohW6wWkh8CVxJJ/wUc6XtyG9Z2pKxjtLYVYJgjRhs7hkeBmUT78+7+dgvxOqPM/7nEqlso6s4SJOcr6FaK74fRV9DJvl/dmes8majxT2BG7R1yGNg90vYHcCxznL45RlHXRvYADzcdOLeQVEKnPPNv9b4p63k9sepw07FzC7k30XY6cwwVUnXd33TQ3EKGibYvM8dQ4UKibdh00Kw7hma2xuYjyDvdfT1bEBHMbACsjTSvu/vORuNmFrJpMHe3bAHEaKPeOEElRggRI4SIEULECCFiNBZiZnNmtmhmZ8asXzSzuaZxVGi93gYH2GaAl6l2rnwVWAZ2931gUL3eSZObBc5VSGx0OceUnZzqut5JktsFnJ0guWvLWWBX'+
			'35OsWu8kCS43SO7astz3RKvWWze5uymO34wGXAGWgHlgR7nMl20rie3XyHTKs2UZnddbN8EXE8EuAwvX6bNA+iziS31PuGK9dRP8LBFoqUK/pUS/z/uecMV66yb4QyLQfIV++xL9fu57whXrrXX43czWKT4vNzLwG1wkVl44t+mciIsfmu+j3rp76qPJcaPkqm4jSuf1xrEsMUKIGCFEjBAiRggRI4SIEULECCFihBAxQogYIUSMECJGCBEjhIjR+dOANpK6nH+7E+8QMUKIGCFEjBAiRq9f6lNwkUPnPzriHSJGCBEjhIgRQsQIIWLUFbLpirzyssnrUmUbUTqvt66Qi4m2YYV+c4m2X2rG7oPO660r5NtE2zMV+j2baPu6Zuw+6LzeukI+SrQtmtnCuA7lusXEqg9qxu6D7uuteb/EuFu8rjD+Fq/UE0q3wlKn3n'+
			'ZuaSulLAtMxrQtr1Sd39rPyzKzm4EzwAO1Om5fvqB4HPnfVTauvR9SDnwIOF+37zbkPHCoqgyYcMfQ3X8CDgAn2PyYu6CYk1eBA+VcVabxI/7KB608DTxO8cW2l8StYDliKVDW+11i1Y8UfyxwGnjT3b+faPyck2T23+mN1KBbQgi0+2zJOJYlRggRI4SIEULECCFihBAxtsxP0a1CvEPECCFihBAxQogYIUSMECJGCBEjhIgRQsQIIWKEEDH+BTTwvIeC/FytAAAAAElFTkSuQmCC';
		els.setAttribute('src',hs);
		els.ggNormalSrc=hs;
		hs ='';
		hs += 'position: absolute;top: 0px;left: 0px;width: 100%;height: 100%;-webkit-user-drag:none;pointer-events:none;;';
		els.setAttribute('style', hs);
		els.className='ggskin ggskin_image';
		els['ondragstart']=function() { return false; };
		player.checkLoaded.push(els);
		el.appendChild(els);
		el.ggSubElement = els;
		el.ggId="\uac00\uad6con";
		el.ggDx=0;
		el.ggDy=0;
		el.ggParameter={ rx:0,ry:0,a:0,sx:0.6,sy:0.6,def:'' };
		el.ggVisible=true;
		el.className="ggskin ggskin_image ";
		el.ggType='image';
		hs ='';
		hs+='height : 87.5%;';
		hs+='left : calc(50% - ((87% + 0px) / 2) + 0px);';
		hs+='position : absolute;';
		hs+='top : calc(50% - ((87.5% + 0px) / 2) + 0px);';
		hs+='visibility : inherit;';
		hs+='width : 87%;';
		hs+='pointer-events:auto;';
		el.setAttribute('style',hs);
		el.style.transformOrigin='50% 50%';
		el.style.transform=parameterToTransform(el.ggParameter);
		me._on0.ggIsActive=function() {
			if ((this.parentNode) && (this.parentNode.ggIsActive)) {
				return this.parentNode.ggIsActive();
			}
			return false;
		}
		el.ggElementNodeId=function() {
			if ((this.parentNode) && (this.parentNode.ggElementNodeId)) {
				return this.parentNode.ggElementNodeId();
			}
			return player.getCurrentNode();
		}
		me._on0.ggUpdatePosition=function (useTransition) {
		}
		me._on.appendChild(me._on0);
		me._onoff.appendChild(me._on);
		el=me._off=document.createElement('div');
		el.ggId="\uac00\uad6c-off";
		el.ggParameter={ rx:0,ry:0,a:0,sx:1,sy:1,def:'' };
		el.ggVisible=false;
		el.className="ggskin ggskin_container ";
		el.ggType='container';
		hs ='';
		hs+='height : 100%;';
		hs+='left : 0px;';
		hs+='position : absolute;';
		hs+='top : 0px;';
		hs+='visibility : hidden;';
		hs+='width : 100%;';
		hs+='pointer-events:none;';
		el.setAttribute('style',hs);
		el.style.transformOrigin='50% 50%';
		me._off.ggIsActive=function() {
			if ((this.parentNode) && (this.parentNode.ggIsActive)) {
				return this.parentNode.ggIsActive();
			}
			return false;
		}
		el.ggElementNodeId=function() {
			if ((this.parentNode) && (this.parentNode.ggElementNodeId)) {
				return this.parentNode.ggElementNodeId();
			}
			return player.getCurrentNode();
		}
		me._off.logicBlock_visible = function() {
			var newLogicStateVisible;
			if (
				((me.ggUserdata.tags.indexOf("\uac00\uad6c\uc5c6\uc74c") != -1))
			)
			{
				newLogicStateVisible = 0;
			}
			else {
				newLogicStateVisible = -1;
			}
			if (me._off.ggCurrentLogicStateVisible != newLogicStateVisible) {
				me._off.ggCurrentLogicStateVisible = newLogicStateVisible;
				me._off.style.transition='';
				if (me._off.ggCurrentLogicStateVisible == 0) {
					me._off.style.visibility=(Number(me._off.style.opacity)>0||!me._off.style.opacity)?'inherit':'hidden';
					me._off.ggVisible=true;
				}
				else {
					me._off.style.visibility="hidden";
					me._off.ggVisible=false;
				}
			}
		}
		me._off.logicBlock_visible();
		me._off.onclick=function (e) {
			if (
				(
					((player._(me.ggUserdata.comment) == "\ud604\uad00")) && 
					((me.ggUserdata.tags.indexOf("18A") != -1))
				)
			||
				(
					((player._(me.ggUserdata.comment) == "\ud604\uad00")) && 
					((me.ggUserdata.tags.indexOf("38A") != -1))
				)
			) {
				player.openNext("{node11}","$(cur)");
			}
			if (
				(
					((player._(me.ggUserdata.comment) == "\uc8fc\ubc29"))
				)
			) {
				player.openNext("{node12}","$(cur)");
			}
			if (
				(
					((player._(me.ggUserdata.comment) == "\ubcf5\ub3c41"))
				)
			) {
				player.openNext("{node13}","$(cur)");
			}
			if (
				(
					((player._(me.ggUserdata.comment) == "\ubcf5\ub3c42"))
				)
			) {
				player.openNext("{node14}","$(cur)");
			}
			if (
				(
					((player._(me.ggUserdata.comment) == "\uac70\uc2e41"))
				)
			) {
				player.openNext("{node15}","$(cur)");
			}
			if (
				(
					((player._(me.ggUserdata.comment) == "\uac70\uc2e42"))
				)
			) {
				player.openNext("{node19}","$(cur)");
			}
			if (
				(
					((player._(me.ggUserdata.comment) == "\uac70\uc2e43"))
				)
			) {
				player.openNext("{node16}","$(cur)");
			}
			if (
				(
					((player._(me.ggUserdata.comment) == "\uce68\uc2e41"))
				)
			) {
				player.openNext("{node17}","$(cur)");
			}
			if (
				(
					((player._(me.ggUserdata.comment) == "\uce68\uc2e42"))
				)
			) {
				player.openNext("{node18}","$(cur)");
			}
			if (
				(
					((player._(me.ggUserdata.comment) == "\uc695\uc2e4"))
				)
			) {
				player.openNext("{node20}","$(cur)");
			}
		}
		me._off.ggUpdatePosition=function (useTransition) {
		}
		el=me._off0=document.createElement('div');
		els=me._off0__img=document.createElement('img');
		els.className='ggskin ggskin_off0';
		hs='data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAAGQAAABkCAYAAABw4pVUAAAACXBIWXMAAA9hAAAPYQGoP6dpAAAEeklEQVR4nO2dy4scVRSHv2M60UkQdTHGldNkVkEQcSMMIaK4ECXGRQRBl/o3TCQwKGTtGBfxHzAo6EIkiOADIyJxkxhw48bHQiERX2gyOjPmuKiKjD23k6quW1W/njkf1OZW3XvOuV+/6tnm7gQ63NR3AsH/CSFihBAxQogYIUSMECJGCBEjhIgRQsQIIWKEEDFCiBghRIxB1wHN7E7gKeAh4B7gLuD2rvOowG/AJeAr4GPgLXe/1HpUd+9kAfYDbwCrgE/hslrmv7/VeepAxAA4PsUiUmKOA4M25svaPEFlZncA7wAHWwvSH58CT7r7rzkHbU2Imd0GfALc10oADS4AD7r777kGbEWIme0A3gceGbPJZeA94F'+
			'3gG+AixceBCgbsBfYBTwCPAXvGbPsh8Ki7/5MlckvfG0dJf/5eBV4DZrv6MZGpntky76tj6nohW6wWkh8CVxJJ/wUc6XtyG9Z2pKxjtLYVYJgjRhs7hkeBmUT78+7+dgvxOqPM/7nEqlso6s4SJOcr6FaK74fRV9DJvl/dmes8majxT2BG7R1yGNg90vYHcCxznL45RlHXRvYADzcdOLeQVEKnPPNv9b4p63k9sepw07FzC7k30XY6cwwVUnXd33TQ3EKGibYvM8dQ4UKibdh00Kw7hma2xuYjyDvdfT1bEBHMbACsjTSvu/vORuNmFrJpMHe3bAHEaKPeOEElRggRI4SIEULECCFiNBZiZnNmtmhmZ8asXzSzuaZxVGi93gYH2GaAl6l2rnwVWAZ2931gUL3eSZObBc5VSGx0OceUnZzqut5JktsFnJ0guWvLWWBX'+
			'35OsWu8kCS43SO7astz3RKvWWze5uymO34wGXAGWgHlgR7nMl20rie3XyHTKs2UZnddbN8EXE8EuAwvX6bNA+iziS31PuGK9dRP8LBFoqUK/pUS/z/uecMV66yb4QyLQfIV++xL9fu57whXrrXX43czWKT4vNzLwG1wkVl44t+mciIsfmu+j3rp76qPJcaPkqm4jSuf1xrEsMUKIGCFEjBAiRggRI4SIEULECCFihBAxQogYIUSMECJGCBEjhIjR+dOANpK6nH+7E+8QMUKIGCFEjBAiRq9f6lNwkUPnPzriHSJGCBEjhIgRQsQIIWLUFbLpirzyssnrUmUbUTqvt66Qi4m2YYV+c4m2X2rG7oPO660r5NtE2zMV+j2baPu6Zuw+6LzeukI+SrQtmtnCuA7lusXEqg9qxu6D7uuteb/EuFu8rjD+Fq/UE0q3wlKn3n'+
			'ZuaSulLAtMxrQtr1Sd39rPyzKzm4EzwAO1Om5fvqB4HPnfVTauvR9SDnwIOF+37zbkPHCoqgyYcMfQ3X8CDgAn2PyYu6CYk1eBA+VcVabxI/7KB608DTxO8cW2l8StYDliKVDW+11i1Y8UfyxwGnjT3b+faPyck2T23+mN1KBbQgi0+2zJOJYlRggRI4SIEULECCFihBAxtsxP0a1CvEPECCFihBAxQogYIUSMECJGCBEjhIgRQsQIIWKEEDH+BTTwvIeC/FytAAAAAElFTkSuQmCC';
		els.setAttribute('src',hs);
		els.ggNormalSrc=hs;
		hs ='';
		hs += 'position: absolute;top: 0px;left: 0px;width: 100%;height: 100%;-webkit-user-drag:none;pointer-events:none;;';
		els.setAttribute('style', hs);
		els.className='ggskin ggskin_image';
		els['ondragstart']=function() { return false; };
		player.checkLoaded.push(els);
		el.appendChild(els);
		el.ggSubElement = els;
		el.ggId="\uac00\uad6coff";
		el.ggDx=0;
		el.ggDy=0;
		el.ggParameter={ rx:0,ry:0,a:0,sx:0.6,sy:0.6,def:'' };
		el.ggVisible=true;
		el.className="ggskin ggskin_image ";
		el.ggType='image';
		hs ='';
		hs+='height : 87.5%;';
		hs+='left : calc(50% - ((87% + 0px) / 2) + 0px);';
		hs+='position : absolute;';
		hs+='top : calc(50% - ((87.5% + 0px) / 2) + 0px);';
		hs+='visibility : inherit;';
		hs+='width : 87%;';
		hs+='pointer-events:auto;';
		el.setAttribute('style',hs);
		el.style.transformOrigin='50% 50%';
		el.style.transform=parameterToTransform(el.ggParameter);
		me._off0.ggIsActive=function() {
			if ((this.parentNode) && (this.parentNode.ggIsActive)) {
				return this.parentNode.ggIsActive();
			}
			return false;
		}
		el.ggElementNodeId=function() {
			if ((this.parentNode) && (this.parentNode.ggElementNodeId)) {
				return this.parentNode.ggElementNodeId();
			}
			return player.getCurrentNode();
		}
		me._off0.ggUpdatePosition=function (useTransition) {
		}
		me._off.appendChild(me._off0);
		me._onoff.appendChild(me._off);
		el=me.__68=document.createElement('div');
		els=me.__68__text=document.createElement('div');
		el.className='ggskin ggskin_textdiv';
		el.ggTextDiv=els;
		el.ggId="\uac00\uad6c\ud0dd\uc2a4\ud2b8";
		el.ggDy=0;
		el.ggParameter={ rx:0,ry:0,a:0,sx:1,sy:1,def:'' };
		el.ggVisible=false;
		el.className="ggskin ggskin_text ";
		el.ggType='text';
		hs ='';
		hs+='background : rgba(255,255,255,0.784314);';
		hs+='border : 0px solid #000000;';
		hs+='border-radius : 20px;';
		hs+='color : rgba(34,34,34,1);';
		hs+='cursor : default;';
		hs+='height : 40px;';
		hs+='left : -90px;';
		hs+='position : absolute;';
		hs+='top : calc(50% - ((40px + 0px) / 2) + 0px);';
		hs+='visibility : hidden;';
		hs+='width : 85px;';
		hs+='pointer-events:auto;';
		hs+='line-height:14px;';
		el.setAttribute('style',hs);
		el.style.transformOrigin='50% 50%';
		hs ='';
		hs += 'box-sizing: border-box;';
		hs+='cursor: default;';
		hs+='width: 100%;';
		hs+='height: auto;';
		hs+='max-height: 100%;';
		hs+='text-align: center;';
		hs+='position: absolute;';
		hs+='top: 50%;';
		hs+='transform: translate(0, -50%);';
		hs+='white-space: pre;';
		hs+='padding: 5px;';
		hs+='overflow: hidden;';
		els.setAttribute('style',hs);
		me.__68.ggUpdateText=function() {
			var params = [];
			var hs = player._("\uac00\uad6c\ubcf4\uae30", params);
			if (hs!=this.ggText) {
				this.ggText=hs;
				this.ggTextDiv.innerHTML=hs;
				if (this.ggUpdatePosition) this.ggUpdatePosition();
			}
		}
		me.__68.ggUpdateText();
		el.appendChild(els);
		me.__68.ggIsActive=function() {
			if ((this.parentNode) && (this.parentNode.ggIsActive)) {
				return this.parentNode.ggIsActive();
			}
			return false;
		}
		el.ggElementNodeId=function() {
			if ((this.parentNode) && (this.parentNode.ggElementNodeId)) {
				return this.parentNode.ggElementNodeId();
			}
			return player.getCurrentNode();
		}
		me.__68.logicBlock_text = function() {
			var newLogicStateText;
			if (
				((me.ggUserdata.tags.indexOf("\uac00\uad6c\uc788\uc74c") != -1))
			)
			{
				newLogicStateText = 0;
			}
			else {
				newLogicStateText = -1;
			}
			if (me.__68.ggCurrentLogicStateText != newLogicStateText) {
				me.__68.ggCurrentLogicStateText = newLogicStateText;
				me.__68.style.transition='';
				if (me.__68.ggCurrentLogicStateText == 0) {
					if (me.__68.ggUpdateText) {
					me.__68.ggUpdateText=function() {
						var params = [];
						var hs = player._("\uac00\uad6c\uc81c\uac70", params);
						if (hs!=this.ggText) {
							this.ggText=hs;
							this.ggTextDiv.innerHTML=hs;
							if (this.ggUpdatePosition) this.ggUpdatePosition();
						}
					}
					me.__68.ggUpdateText();
					} else {
						if (me.__68.ggUpdatePosition) me.__68.ggUpdatePosition();
					}
				}
				else {
					if (me.__68.ggUpdateText) {
					me.__68.ggUpdateText=function() {
						var params = [];
						var hs = player._("\uac00\uad6c\ubcf4\uae30", params);
						if (hs!=this.ggText) {
							this.ggText=hs;
							this.ggTextDiv.innerHTML=hs;
							if (this.ggUpdatePosition) this.ggUpdatePosition();
						}
					}
					me.__68.ggUpdateText();
					} else {
						if (me.__68.ggUpdatePosition) me.__68.ggUpdatePosition();
					}
				}
			}
		}
		me.__68.logicBlock_text();
		me.__68.ggUpdatePosition=function (useTransition) {
		}
		me._onoff.appendChild(me.__68);
		me.__46.appendChild(me._onoff);
		el=me.__67=document.createElement('div');
		el.ggTimestamp=skin.ggCurrentTime;
		el.ggLastIsActive=true;
		el.ggTimeout=500;
		el.ggId="\uac00\uad6c\uc628\uc624\ud504\ud0c0\uc774\uba38";
		el.ggParameter={ rx:0,ry:0,a:0,sx:1,sy:1,def:'' };
		el.ggVisible=true;
		el.className="ggskin ggskin_timer ";
		el.ggType='timer';
		hs ='';
		hs+='height : 20px;';
		hs+='left : -502px;';
		hs+='position : absolute;';
		hs+='top : 251px;';
		hs+='visibility : inherit;';
		hs+='width : 100px;';
		hs+='pointer-events:none;';
		el.setAttribute('style',hs);
		el.style.transformOrigin='50% 50%';
		me.__67.ggIsActive=function() {
			return (me.__67.ggTimestamp==0 ? false : (Math.floor((skin.ggCurrentTime - me.__67.ggTimestamp) / me.__67.ggTimeout) % 2 == 0));
		}
		el.ggElementNodeId=function() {
			if ((this.parentNode) && (this.parentNode.ggElementNodeId)) {
				return this.parentNode.ggElementNodeId();
			}
			return player.getCurrentNode();
		}
		me.__67.logicBlock_visible = function() {
			var newLogicStateVisible;
			if (
				((me.__67.ggIsActive() == true))
			)
			{
				newLogicStateVisible = 0;
			}
			else {
				newLogicStateVisible = -1;
			}
			if (me.__67.ggCurrentLogicStateVisible != newLogicStateVisible) {
				me.__67.ggCurrentLogicStateVisible = newLogicStateVisible;
				me.__67.style.transition='';
				if (me.__67.ggCurrentLogicStateVisible == 0) {
					me.__67.style.visibility=(Number(me.__67.style.opacity)>0||!me.__67.style.opacity)?'inherit':'hidden';
					me.__67.ggVisible=true;
				}
				else {
					me.__67.style.visibility=(Number(me.__67.style.opacity)>0||!me.__67.style.opacity)?'inherit':'hidden';
					me.__67.ggVisible=true;
				}
			}
		}
		me.__67.logicBlock_visible();
		me.__67.ggActivate=function () {
			me.__68.style.transition='none';
			me.__68.style.visibility='hidden';
			me.__68.ggVisible=false;
		}
		me.__67.ggCurrentLogicStateVisible = -1;
		me.__67.ggUpdateConditionTimer=function () {
			me.__67.logicBlock_visible();
		}
		me.__67.ggUpdatePosition=function (useTransition) {
		}
		me.__46.appendChild(me.__67);
		el=me.__63=document.createElement('div');
		el.ggId="\uc544\uc774\ucf58-\uc790\ub3d9\ud68c\uc804";
		el.ggDx=0;
		el.ggParameter={ rx:0,ry:0,a:0,sx:1,sy:1,def:'' };
		el.ggVisible=true;
		el.className="ggskin ggskin_container ";
		el.ggType='container';
		hs ='';
		hs+='cursor : pointer;';
		hs+='height : 43px;';
		hs+='left : calc(50% - ((43px + 0px) / 2) + 0px);';
		hs+='position : absolute;';
		hs+='top : 290px;';
		hs+='visibility : inherit;';
		hs+='width : 43px;';
		hs+='pointer-events:none;';
		el.setAttribute('style',hs);
		el.style.transformOrigin='50% 50%';
		me.__63.ggIsActive=function() {
			if ((this.parentNode) && (this.parentNode.ggIsActive)) {
				return this.parentNode.ggIsActive();
			}
			return false;
		}
		el.ggElementNodeId=function() {
			if ((this.parentNode) && (this.parentNode.ggElementNodeId)) {
				return this.parentNode.ggElementNodeId();
			}
			return player.getCurrentNode();
		}
		me.__63.logicBlock_visible = function() {
			var newLogicStateVisible;
			if (
				((player.getVariableValue('vis_short') == true))
			)
			{
				newLogicStateVisible = 0;
			}
			else if (
				((player.getVariableValue('vis_skin_show') == true))
			)
			{
				newLogicStateVisible = 1;
			}
			else {
				newLogicStateVisible = -1;
			}
			if (me.__63.ggCurrentLogicStateVisible != newLogicStateVisible) {
				me.__63.ggCurrentLogicStateVisible = newLogicStateVisible;
				me.__63.style.transition='';
				if (me.__63.ggCurrentLogicStateVisible == 0) {
					me.__63.style.visibility="hidden";
					me.__63.ggVisible=false;
				}
				else if (me.__63.ggCurrentLogicStateVisible == 1) {
					me.__63.style.visibility=(Number(me.__63.style.opacity)>0||!me.__63.style.opacity)?'inherit':'hidden';
					me.__63.ggVisible=true;
				}
				else {
					me.__63.style.visibility=(Number(me.__63.style.opacity)>0||!me.__63.style.opacity)?'inherit':'hidden';
					me.__63.ggVisible=true;
				}
			}
		}
		me.__63.logicBlock_visible();
		me.__63.onclick=function (e) {
			player.toggleAutorotate();
			me.__66.ggVisible = !me.__66.ggVisible;
			var flag=me.__66.ggVisible;
			me.__66.style.transition='none';
			me.__66.style.visibility=((flag)&&(Number(me.__66.style.opacity)>0||!me.__66.style.opacity))?'inherit':'hidden';
			player.setVariableValue('vis_icon5', true);
		}
		me.__63.onmouseover=function (e) {
			me.elementMouseOver['_63']=true;
		}
		me.__63.onmousemove=function (e) {
			me.__64.style.transition='none';
			me.__64.style.visibility=(Number(me.__64.style.opacity)>0||!me.__64.style.opacity)?'inherit':'hidden';
			me.__64.ggVisible=true;
		}
		me.__63.onmouseout=function (e) {
			me.elementMouseOver['_63']=false;
		}
		me.__63.ggCurrentLogicStateVisible = -1;
		me.__63.ggUpdateConditionTimer=function () {
			if (me.elementMouseOver['_63']) {
				me.__64.style.transition='none';
				me.__64.style.visibility=(Number(me.__64.style.opacity)>0||!me.__64.style.opacity)?'inherit':'hidden';
				me.__64.ggVisible=true;
			}
		}
		me.__63.ggUpdatePosition=function (useTransition) {
		}
		el=me.__66=document.createElement('div');
		el.ggId="\uc790\ub3d9\ud68c\uc804\ubc30\uacbd";
		el.ggParameter={ rx:0,ry:0,a:0,sx:1,sy:1,def:'' };
		el.ggVisible=false;
		el.className="ggskin ggskin_rectangle ";
		el.ggType='rectangle';
		hs ='';
		hs+='background : #ffffff;';
		hs+='border : 0px solid #000000;';
		hs+='border-radius : 50px;';
		hs+='cursor : default;';
		hs+='height : 100%;';
		hs+='left : 0px;';
		hs+='position : absolute;';
		hs+='top : 0px;';
		hs+='visibility : hidden;';
		hs+='width : 100%;';
		hs+='pointer-events:auto;';
		el.setAttribute('style',hs);
		el.style.transformOrigin='50% 50%';
		me.__66.ggIsActive=function() {
			if ((this.parentNode) && (this.parentNode.ggIsActive)) {
				return this.parentNode.ggIsActive();
			}
			return false;
		}
		el.ggElementNodeId=function() {
			if ((this.parentNode) && (this.parentNode.ggElementNodeId)) {
				return this.parentNode.ggElementNodeId();
			}
			return player.getCurrentNode();
		}
		me.__66.ggUpdatePosition=function (useTransition) {
		}
		me.__63.appendChild(me.__66);
		el=me.__65=document.createElement('div');
		els=me.__65__img=document.createElement('img');
		els.className='ggskin ggskin__65';
		hs='data:image/png;base64,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';
		els.setAttribute('src',hs);
		els.ggNormalSrc=hs;
		hs ='';
		hs += 'position: absolute;top: 0px;left: 0px;width: 100%;height: 100%;-webkit-user-drag:none;pointer-events:none;;';
		els.setAttribute('style', hs);
		els.className='ggskin ggskin_image';
		els['ondragstart']=function() { return false; };
		player.checkLoaded.push(els);
		el.appendChild(els);
		el.ggSubElement = els;
		el.ggId="\uc790\ub3d9\ud68c\uc804";
		el.ggDx=0;
		el.ggDy=0;
		el.ggParameter={ rx:0,ry:0,a:0,sx:0.6,sy:0.6,def:'' };
		el.ggVisible=true;
		el.className="ggskin ggskin_image ";
		el.ggType='image';
		hs ='';
		hs+='height : 87.5%;';
		hs+='left : calc(50% - ((87% + 0px) / 2) + 0px);';
		hs+='position : absolute;';
		hs+='top : calc(50% - ((87.5% + 0px) / 2) + 0px);';
		hs+='visibility : inherit;';
		hs+='width : 87%;';
		hs+='pointer-events:auto;';
		el.setAttribute('style',hs);
		el.style.transformOrigin='50% 50%';
		el.style.transform=parameterToTransform(el.ggParameter);
		me.__65.ggIsActive=function() {
			if ((this.parentNode) && (this.parentNode.ggIsActive)) {
				return this.parentNode.ggIsActive();
			}
			return false;
		}
		el.ggElementNodeId=function() {
			if ((this.parentNode) && (this.parentNode.ggElementNodeId)) {
				return this.parentNode.ggElementNodeId();
			}
			return player.getCurrentNode();
		}
		me.__65.ggUpdatePosition=function (useTransition) {
		}
		me.__63.appendChild(me.__65);
		el=me.__64=document.createElement('div');
		els=me.__64__text=document.createElement('div');
		el.className='ggskin ggskin_textdiv';
		el.ggTextDiv=els;
		el.ggId="\uc790\ub3d9\ud68c\uc804\ud0dd\uc2a4\ud2b8";
		el.ggDy=0;
		el.ggParameter={ rx:0,ry:0,a:0,sx:1,sy:1,def:'' };
		el.ggVisible=false;
		el.className="ggskin ggskin_text ";
		el.ggType='text';
		hs ='';
		hs+='background : rgba(255,255,255,0.784314);';
		hs+='border : 0px solid #000000;';
		hs+='border-radius : 20px;';
		hs+='color : rgba(0,0,0,1);';
		hs+='cursor : default;';
		hs+='height : 40px;';
		hs+='left : -90px;';
		hs+='position : absolute;';
		hs+='top : calc(50% - ((40px + 0px) / 2) + 0px);';
		hs+='visibility : hidden;';
		hs+='width : 85px;';
		hs+='pointer-events:auto;';
		hs+='line-height:14px;';
		el.setAttribute('style',hs);
		el.style.transformOrigin='50% 50%';
		hs ='';
		hs += 'box-sizing: border-box;';
		hs+='cursor: default;';
		hs+='width: 100%;';
		hs+='height: auto;';
		hs+='max-height: 100%;';
		hs+='text-align: center;';
		hs+='position: absolute;';
		hs+='top: 50%;';
		hs+='transform: translate(0, -50%);';
		hs+='white-space: pre;';
		hs+='padding: 5px;';
		hs+='overflow: hidden;';
		els.setAttribute('style',hs);
		me.__64.ggUpdateText=function() {
			var params = [];
			var hs = player._("\uc790\ub3d9\ud68c\uc804", params);
			if (hs!=this.ggText) {
				this.ggText=hs;
				this.ggTextDiv.innerHTML=hs;
				if (this.ggUpdatePosition) this.ggUpdatePosition();
			}
		}
		me.__64.ggUpdateText();
		el.appendChild(els);
		me.__64.ggIsActive=function() {
			if ((this.parentNode) && (this.parentNode.ggIsActive)) {
				return this.parentNode.ggIsActive();
			}
			return false;
		}
		el.ggElementNodeId=function() {
			if ((this.parentNode) && (this.parentNode.ggElementNodeId)) {
				return this.parentNode.ggElementNodeId();
			}
			return player.getCurrentNode();
		}
		me.__64.ggUpdatePosition=function (useTransition) {
		}
		me.__63.appendChild(me.__64);
		me.__46.appendChild(me.__63);
		el=me.__62=document.createElement('div');
		el.ggTimestamp=skin.ggCurrentTime;
		el.ggLastIsActive=true;
		el.ggTimeout=500;
		el.ggId="\uc790\ub3d9\ud68c\uc804\ud0c0\uc774\uba38";
		el.ggParameter={ rx:0,ry:0,a:0,sx:1,sy:1,def:'' };
		el.ggVisible=true;
		el.className="ggskin ggskin_timer ";
		el.ggType='timer';
		hs ='';
		hs+='height : 20px;';
		hs+='left : -502px;';
		hs+='position : absolute;';
		hs+='top : 251px;';
		hs+='visibility : inherit;';
		hs+='width : 100px;';
		hs+='pointer-events:none;';
		el.setAttribute('style',hs);
		el.style.transformOrigin='50% 50%';
		me.__62.ggIsActive=function() {
			return (me.__62.ggTimestamp==0 ? false : (Math.floor((skin.ggCurrentTime - me.__62.ggTimestamp) / me.__62.ggTimeout) % 2 == 0));
		}
		el.ggElementNodeId=function() {
			if ((this.parentNode) && (this.parentNode.ggElementNodeId)) {
				return this.parentNode.ggElementNodeId();
			}
			return player.getCurrentNode();
		}
		me.__62.logicBlock_visible = function() {
			var newLogicStateVisible;
			if (
				((me.__62.ggIsActive() == true))
			)
			{
				newLogicStateVisible = 0;
			}
			else {
				newLogicStateVisible = -1;
			}
			if (me.__62.ggCurrentLogicStateVisible != newLogicStateVisible) {
				me.__62.ggCurrentLogicStateVisible = newLogicStateVisible;
				me.__62.style.transition='';
				if (me.__62.ggCurrentLogicStateVisible == 0) {
					me.__62.style.visibility=(Number(me.__62.style.opacity)>0||!me.__62.style.opacity)?'inherit':'hidden';
					me.__62.ggVisible=true;
				}
				else {
					me.__62.style.visibility=(Number(me.__62.style.opacity)>0||!me.__62.style.opacity)?'inherit':'hidden';
					me.__62.ggVisible=true;
				}
			}
		}
		me.__62.logicBlock_visible();
		me.__62.ggActivate=function () {
			me.__64.style.transition='none';
			me.__64.style.visibility='hidden';
			me.__64.ggVisible=false;
		}
		me.__62.ggCurrentLogicStateVisible = -1;
		me.__62.ggUpdateConditionTimer=function () {
			me.__62.logicBlock_visible();
		}
		me.__62.ggUpdatePosition=function (useTransition) {
		}
		me.__46.appendChild(me.__62);
		el=me.__58=document.createElement('div');
		el.ggId="\uc544\uc774\ucf58-\uc548\ub0b4\uc0ac\ud56d";
		el.ggDx=0;
		el.ggParameter={ rx:0,ry:0,a:0,sx:1,sy:1,def:'' };
		el.ggVisible=true;
		el.className="ggskin ggskin_container ";
		el.ggType='container';
		hs ='';
		hs+='cursor : pointer;';
		hs+='height : 43px;';
		hs+='left : calc(50% - ((43px + 0px) / 2) + 0px);';
		hs+='position : absolute;';
		hs+='top : 454px;';
		hs+='visibility : inherit;';
		hs+='width : 43px;';
		hs+='pointer-events:none;';
		el.setAttribute('style',hs);
		el.style.transformOrigin='50% 50%';
		me.__58.ggIsActive=function() {
			if ((this.parentNode) && (this.parentNode.ggIsActive)) {
				return this.parentNode.ggIsActive();
			}
			return false;
		}
		el.ggElementNodeId=function() {
			if ((this.parentNode) && (this.parentNode.ggElementNodeId)) {
				return this.parentNode.ggElementNodeId();
			}
			return player.getCurrentNode();
		}
		me.__58.logicBlock_visible = function() {
			var newLogicStateVisible;
			if (
				((player.getVariableValue('vis_short') == true))
			)
			{
				newLogicStateVisible = 0;
			}
			else if (
				((player.getVariableValue('vis_skin_show') == true))
			)
			{
				newLogicStateVisible = 1;
			}
			else {
				newLogicStateVisible = -1;
			}
			if (me.__58.ggCurrentLogicStateVisible != newLogicStateVisible) {
				me.__58.ggCurrentLogicStateVisible = newLogicStateVisible;
				me.__58.style.transition='';
				if (me.__58.ggCurrentLogicStateVisible == 0) {
					me.__58.style.visibility="hidden";
					me.__58.ggVisible=false;
				}
				else if (me.__58.ggCurrentLogicStateVisible == 1) {
					me.__58.style.visibility="hidden";
					me.__58.ggVisible=false;
				}
				else {
					me.__58.style.visibility=(Number(me.__58.style.opacity)>0||!me.__58.style.opacity)?'inherit':'hidden';
					me.__58.ggVisible=true;
				}
			}
		}
		me.__58.logicBlock_visible();
		me.__58.onclick=function (e) {
			player.toggleFullscreen();
			me.__61.ggVisible = !me.__61.ggVisible;
			var flag=me.__61.ggVisible;
			me.__61.style.transition='none';
			me.__61.style.visibility=((flag)&&(Number(me.__61.style.opacity)>0||!me.__61.style.opacity))?'inherit':'hidden';
		}
		me.__58.onmouseover=function (e) {
			me.elementMouseOver['_58']=true;
		}
		me.__58.onmousemove=function (e) {
			me.__59.style.transition='none';
			me.__59.style.visibility=(Number(me.__59.style.opacity)>0||!me.__59.style.opacity)?'inherit':'hidden';
			me.__59.ggVisible=true;
		}
		me.__58.onmouseout=function (e) {
			me.elementMouseOver['_58']=false;
		}
		me.__58.ggCurrentLogicStateVisible = -1;
		me.__58.ggUpdateConditionTimer=function () {
			if (me.elementMouseOver['_58']) {
				me.__59.style.transition='none';
				me.__59.style.visibility=(Number(me.__59.style.opacity)>0||!me.__59.style.opacity)?'inherit':'hidden';
				me.__59.ggVisible=true;
			}
		}
		me.__58.ggUpdatePosition=function (useTransition) {
		}
		el=me.__61=document.createElement('div');
		el.ggId="\uc548\ub0b4\uc0ac\ud56d\ubc30\uacbd";
		el.ggParameter={ rx:0,ry:0,a:0,sx:1,sy:1,def:'' };
		el.ggVisible=false;
		el.className="ggskin ggskin_rectangle ";
		el.ggType='rectangle';
		hs ='';
		hs+='background : #ffffff;';
		hs+='border : 0px solid #000000;';
		hs+='border-radius : 50px;';
		hs+='cursor : default;';
		hs+='height : 100%;';
		hs+='left : 0px;';
		hs+='position : absolute;';
		hs+='top : 0px;';
		hs+='visibility : hidden;';
		hs+='width : 100%;';
		hs+='pointer-events:auto;';
		el.setAttribute('style',hs);
		el.style.transformOrigin='50% 50%';
		me.__61.ggIsActive=function() {
			if ((this.parentNode) && (this.parentNode.ggIsActive)) {
				return this.parentNode.ggIsActive();
			}
			return false;
		}
		el.ggElementNodeId=function() {
			if ((this.parentNode) && (this.parentNode.ggElementNodeId)) {
				return this.parentNode.ggElementNodeId();
			}
			return player.getCurrentNode();
		}
		me.__61.ggUpdatePosition=function (useTransition) {
		}
		me.__58.appendChild(me.__61);
		el=me.__60=document.createElement('div');
		els=me.__60__img=document.createElement('img');
		els.className='ggskin ggskin__60';
		hs='data:image/png;base64,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';
		els.setAttribute('src',hs);
		els.ggNormalSrc=hs;
		hs ='';
		hs += 'position: absolute;top: 0px;left: 0px;width: 100%;height: 100%;-webkit-user-drag:none;pointer-events:none;;';
		els.setAttribute('style', hs);
		els.className='ggskin ggskin_image';
		els['ondragstart']=function() { return false; };
		player.checkLoaded.push(els);
		el.appendChild(els);
		el.ggSubElement = els;
		el.ggId="\uc548\ub0b4\uc0ac\ud56d";
		el.ggDx=0;
		el.ggDy=0;
		el.ggParameter={ rx:0,ry:0,a:0,sx:0.6,sy:0.6,def:'' };
		el.ggVisible=true;
		el.className="ggskin ggskin_image ";
		el.ggType='image';
		hs ='';
		hs+='height : 87.5%;';
		hs+='left : calc(50% - ((87% + 0px) / 2) + 0px);';
		hs+='position : absolute;';
		hs+='top : calc(50% - ((87.5% + 0px) / 2) + 0px);';
		hs+='visibility : inherit;';
		hs+='width : 87%;';
		hs+='pointer-events:auto;';
		el.setAttribute('style',hs);
		el.style.transformOrigin='50% 50%';
		el.style.transform=parameterToTransform(el.ggParameter);
		me.__60.ggIsActive=function() {
			if ((this.parentNode) && (this.parentNode.ggIsActive)) {
				return this.parentNode.ggIsActive();
			}
			return false;
		}
		el.ggElementNodeId=function() {
			if ((this.parentNode) && (this.parentNode.ggElementNodeId)) {
				return this.parentNode.ggElementNodeId();
			}
			return player.getCurrentNode();
		}
		me.__60.ggUpdatePosition=function (useTransition) {
		}
		me.__58.appendChild(me.__60);
		el=me.__59=document.createElement('div');
		els=me.__59__text=document.createElement('div');
		el.className='ggskin ggskin_textdiv';
		el.ggTextDiv=els;
		el.ggId="\uc548\ub0b4\uc0ac\ud56d\ud0dd\uc2a4\ud2b8";
		el.ggDy=0;
		el.ggParameter={ rx:0,ry:0,a:0,sx:1,sy:1,def:'' };
		el.ggVisible=false;
		el.className="ggskin ggskin_text ";
		el.ggType='text';
		hs ='';
		hs+='background : rgba(255,255,255,0.784314);';
		hs+='border : 0px solid #000000;';
		hs+='border-radius : 20px;';
		hs+='color : rgba(0,0,0,1);';
		hs+='cursor : default;';
		hs+='height : 40px;';
		hs+='left : -90px;';
		hs+='position : absolute;';
		hs+='top : calc(50% - ((40px + 0px) / 2) + 0px);';
		hs+='visibility : hidden;';
		hs+='width : 85px;';
		hs+='pointer-events:auto;';
		hs+='line-height:14px;';
		el.setAttribute('style',hs);
		el.style.transformOrigin='50% 50%';
		hs ='';
		hs += 'box-sizing: border-box;';
		hs+='cursor: default;';
		hs+='width: 100%;';
		hs+='height: auto;';
		hs+='max-height: 100%;';
		hs+='text-align: center;';
		hs+='position: absolute;';
		hs+='top: 50%;';
		hs+='transform: translate(0, -50%);';
		hs+='white-space: pre;';
		hs+='padding: 5px;';
		hs+='overflow: hidden;';
		els.setAttribute('style',hs);
		me.__59.ggUpdateText=function() {
			var params = [];
			var hs = player._("\uc548\ub0b4\uc0ac\ud56d\n", params);
			if (hs!=this.ggText) {
				this.ggText=hs;
				this.ggTextDiv.innerHTML=hs;
				if (this.ggUpdatePosition) this.ggUpdatePosition();
			}
		}
		me.__59.ggUpdateText();
		el.appendChild(els);
		me.__59.ggIsActive=function() {
			if ((this.parentNode) && (this.parentNode.ggIsActive)) {
				return this.parentNode.ggIsActive();
			}
			return false;
		}
		el.ggElementNodeId=function() {
			if ((this.parentNode) && (this.parentNode.ggElementNodeId)) {
				return this.parentNode.ggElementNodeId();
			}
			return player.getCurrentNode();
		}
		me.__59.ggUpdatePosition=function (useTransition) {
		}
		me.__58.appendChild(me.__59);
		me.__46.appendChild(me.__58);
		el=me.__57=document.createElement('div');
		el.ggTimestamp=skin.ggCurrentTime;
		el.ggLastIsActive=true;
		el.ggTimeout=500;
		el.ggId="\uc548\ub0b4\uc0ac\ud56d\ud0c0\uc774\uba38";
		el.ggParameter={ rx:0,ry:0,a:0,sx:1,sy:1,def:'' };
		el.ggVisible=true;
		el.className="ggskin ggskin_timer ";
		el.ggType='timer';
		hs ='';
		hs+='height : 20px;';
		hs+='left : -502px;';
		hs+='position : absolute;';
		hs+='top : 251px;';
		hs+='visibility : inherit;';
		hs+='width : 100px;';
		hs+='pointer-events:none;';
		el.setAttribute('style',hs);
		el.style.transformOrigin='50% 50%';
		me.__57.ggIsActive=function() {
			return (me.__57.ggTimestamp==0 ? false : (Math.floor((skin.ggCurrentTime - me.__57.ggTimestamp) / me.__57.ggTimeout) % 2 == 0));
		}
		el.ggElementNodeId=function() {
			if ((this.parentNode) && (this.parentNode.ggElementNodeId)) {
				return this.parentNode.ggElementNodeId();
			}
			return player.getCurrentNode();
		}
		me.__57.logicBlock_visible = function() {
			var newLogicStateVisible;
			if (
				((me.__57.ggIsActive() == true))
			)
			{
				newLogicStateVisible = 0;
			}
			else {
				newLogicStateVisible = -1;
			}
			if (me.__57.ggCurrentLogicStateVisible != newLogicStateVisible) {
				me.__57.ggCurrentLogicStateVisible = newLogicStateVisible;
				me.__57.style.transition='';
				if (me.__57.ggCurrentLogicStateVisible == 0) {
					me.__57.style.visibility=(Number(me.__57.style.opacity)>0||!me.__57.style.opacity)?'inherit':'hidden';
					me.__57.ggVisible=true;
				}
				else {
					me.__57.style.visibility=(Number(me.__57.style.opacity)>0||!me.__57.style.opacity)?'inherit':'hidden';
					me.__57.ggVisible=true;
				}
			}
		}
		me.__57.logicBlock_visible();
		me.__57.ggActivate=function () {
			me.__59.style.transition='none';
			me.__59.style.visibility='hidden';
			me.__59.ggVisible=false;
		}
		me.__57.ggCurrentLogicStateVisible = -1;
		me.__57.ggUpdateConditionTimer=function () {
			me.__57.logicBlock_visible();
		}
		me.__57.ggUpdatePosition=function (useTransition) {
		}
		me.__46.appendChild(me.__57);
		el=me.__53=document.createElement('div');
		el.ggId="\uc544\uc774\ucf58-\ub9c1\ud06c\ubcf5\uc0ac";
		el.ggDx=0;
		el.ggParameter={ rx:0,ry:0,a:0,sx:1,sy:1,def:'' };
		el.ggVisible=true;
		el.className="ggskin ggskin_container ";
		el.ggType='container';
		hs ='';
		hs+='cursor : pointer;';
		hs+='height : 43px;';
		hs+='left : calc(50% - ((43px + 0px) / 2) + 0px);';
		hs+='position : absolute;';
		hs+='top : 348px;';
		hs+='visibility : inherit;';
		hs+='width : 43px;';
		hs+='pointer-events:none;';
		el.setAttribute('style',hs);
		el.style.transformOrigin='50% 50%';
		me.__53.ggIsActive=function() {
			if ((this.parentNode) && (this.parentNode.ggIsActive)) {
				return this.parentNode.ggIsActive();
			}
			return false;
		}
		el.ggElementNodeId=function() {
			if ((this.parentNode) && (this.parentNode.ggElementNodeId)) {
				return this.parentNode.ggElementNodeId();
			}
			return player.getCurrentNode();
		}
		me.__53.logicBlock_visible = function() {
			var newLogicStateVisible;
			if (
				((player.getVariableValue('vis_short') == true))
			)
			{
				newLogicStateVisible = 0;
			}
			else if (
				((player.getVariableValue('vis_skin_show') == true))
			)
			{
				newLogicStateVisible = 1;
			}
			else {
				newLogicStateVisible = -1;
			}
			if (me.__53.ggCurrentLogicStateVisible != newLogicStateVisible) {
				me.__53.ggCurrentLogicStateVisible = newLogicStateVisible;
				me.__53.style.transition='';
				if (me.__53.ggCurrentLogicStateVisible == 0) {
					me.__53.style.visibility="hidden";
					me.__53.ggVisible=false;
				}
				else if (me.__53.ggCurrentLogicStateVisible == 1) {
					me.__53.style.visibility="hidden";
					me.__53.ggVisible=false;
				}
				else {
					me.__53.style.visibility=(Number(me.__53.style.opacity)>0||!me.__53.style.opacity)?'inherit':'hidden';
					me.__53.ggVisible=true;
				}
			}
		}
		me.__53.logicBlock_visible();
		me.__53.onclick=function (e) {
			"";
 let url = '';
  const textarea = document.createElement("textarea");
  document.body.appendChild(textarea);
  url = window.document.location.href;
  textarea.value = url;
  textarea.select();
  document.execCommand("copy");
  document.body.removeChild(textarea);
			me.__56.ggVisible = !me.__56.ggVisible;
			var flag=me.__56.ggVisible;
			me.__56.style.transition='none';
			me.__56.style.visibility=((flag)&&(Number(me.__56.style.opacity)>0||!me.__56.style.opacity))?'inherit':'hidden';
		}
		me.__53.onmouseover=function (e) {
			me.elementMouseOver['_53']=true;
		}
		me.__53.onmousedown=function (e) {
			me.elementMouseDown['_53']=true;
			me.__55.logicBlock_text();
		}
		me.__53.onmouseup=function (e) {
			me.elementMouseDown['_53']=false;
			me.__55.logicBlock_text();
		}
		me.__53.onmousemove=function (e) {
			me.__55.style.transition='none';
			me.__55.style.visibility=(Number(me.__55.style.opacity)>0||!me.__55.style.opacity)?'inherit':'hidden';
			me.__55.ggVisible=true;
		}
		me.__53.onmouseout=function (e) {
			me.elementMouseDown['_53']=false;
			me.__55.logicBlock_text();
			me.elementMouseOver['_53']=false;
		}
		me.__53.ggCurrentLogicStateVisible = -1;
		me.__53.ggUpdateConditionTimer=function () {
			if (me.elementMouseOver['_53']) {
				me.__55.style.transition='none';
				me.__55.style.visibility=(Number(me.__55.style.opacity)>0||!me.__55.style.opacity)?'inherit':'hidden';
				me.__55.ggVisible=true;
			}
		}
		me.__53.ggUpdatePosition=function (useTransition) {
		}
		el=me.__56=document.createElement('div');
		el.ggId="\ub9c1\ud06c\ubcf5\uc0ac\ubc30\uacbd";
		el.ggParameter={ rx:0,ry:0,a:0,sx:1,sy:1,def:'' };
		el.ggVisible=false;
		el.className="ggskin ggskin_rectangle ";
		el.ggType='rectangle';
		hs ='';
		hs+='background : #ffffff;';
		hs+='border : 0px solid #000000;';
		hs+='border-radius : 50px;';
		hs+='cursor : default;';
		hs+='height : 100%;';
		hs+='left : 0px;';
		hs+='position : absolute;';
		hs+='top : 0px;';
		hs+='visibility : hidden;';
		hs+='width : 100%;';
		hs+='pointer-events:auto;';
		el.setAttribute('style',hs);
		el.style.transformOrigin='50% 50%';
		me.__56.ggIsActive=function() {
			if ((this.parentNode) && (this.parentNode.ggIsActive)) {
				return this.parentNode.ggIsActive();
			}
			return false;
		}
		el.ggElementNodeId=function() {
			if ((this.parentNode) && (this.parentNode.ggElementNodeId)) {
				return this.parentNode.ggElementNodeId();
			}
			return player.getCurrentNode();
		}
		me.__56.ggUpdatePosition=function (useTransition) {
		}
		me.__53.appendChild(me.__56);
		el=me.__55=document.createElement('div');
		els=me.__55__text=document.createElement('div');
		el.className='ggskin ggskin_textdiv';
		el.ggTextDiv=els;
		el.ggId="\ub9c1\ud06c\ubcf5\uc0ac\ud0dd\uc2a4\ud2b8";
		el.ggDy=0;
		el.ggParameter={ rx:0,ry:0,a:0,sx:1,sy:1,def:'' };
		el.ggVisible=false;
		el.className="ggskin ggskin_text ";
		el.ggType='text';
		hs ='';
		hs+='background : rgba(255,255,255,0.784314);';
		hs+='border : 0px solid #000000;';
		hs+='border-radius : 20px;';
		hs+='color : rgba(34,34,34,1);';
		hs+='cursor : default;';
		hs+='height : 40px;';
		hs+='left : -90px;';
		hs+='position : absolute;';
		hs+='top : calc(50% - ((40px + 0px) / 2) + 0px);';
		hs+='visibility : hidden;';
		hs+='width : 85px;';
		hs+='pointer-events:auto;';
		hs+='line-height:14px;';
		el.setAttribute('style',hs);
		el.style.transformOrigin='50% 50%';
		hs ='';
		hs += 'box-sizing: border-box;';
		hs+='cursor: default;';
		hs+='width: 100%;';
		hs+='height: auto;';
		hs+='max-height: 100%;';
		hs+='text-align: center;';
		hs+='position: absolute;';
		hs+='top: 50%;';
		hs+='transform: translate(0, -50%);';
		hs+='white-space: pre;';
		hs+='padding: 5px;';
		hs+='overflow: hidden;';
		els.setAttribute('style',hs);
		me.__55.ggUpdateText=function() {
			var params = [];
			var hs = player._("\ub9c1\ud06c\ubcf5\uc0ac\n", params);
			if (hs!=this.ggText) {
				this.ggText=hs;
				this.ggTextDiv.innerHTML=hs;
				if (this.ggUpdatePosition) this.ggUpdatePosition();
			}
		}
		me.__55.ggUpdateText();
		el.appendChild(els);
		me.__55.ggIsActive=function() {
			if ((this.parentNode) && (this.parentNode.ggIsActive)) {
				return this.parentNode.ggIsActive();
			}
			return false;
		}
		el.ggElementNodeId=function() {
			if ((this.parentNode) && (this.parentNode.ggElementNodeId)) {
				return this.parentNode.ggElementNodeId();
			}
			return player.getCurrentNode();
		}
		me.__55.logicBlock_text = function() {
			var newLogicStateText;
			if (
				((me.elementMouseDown['_53'] == true))
			)
			{
				newLogicStateText = 0;
			}
			else {
				newLogicStateText = -1;
			}
			if (me.__55.ggCurrentLogicStateText != newLogicStateText) {
				me.__55.ggCurrentLogicStateText = newLogicStateText;
				me.__55.style.transition='';
				if (me.__55.ggCurrentLogicStateText == 0) {
					if (me.__55.ggUpdateText) {
					me.__55.ggUpdateText=function() {
						var params = [];
						var hs = player._("\ubcf5\uc0ac\uc644\ub8cc", params);
						if (hs!=this.ggText) {
							this.ggText=hs;
							this.ggTextDiv.innerHTML=hs;
							if (this.ggUpdatePosition) this.ggUpdatePosition();
						}
					}
					me.__55.ggUpdateText();
					} else {
						if (me.__55.ggUpdatePosition) me.__55.ggUpdatePosition();
					}
				}
				else {
					if (me.__55.ggUpdateText) {
					me.__55.ggUpdateText=function() {
						var params = [];
						var hs = player._("\ub9c1\ud06c\ubcf5\uc0ac\n", params);
						if (hs!=this.ggText) {
							this.ggText=hs;
							this.ggTextDiv.innerHTML=hs;
							if (this.ggUpdatePosition) this.ggUpdatePosition();
						}
					}
					me.__55.ggUpdateText();
					} else {
						if (me.__55.ggUpdatePosition) me.__55.ggUpdatePosition();
					}
				}
			}
		}
		me.__55.logicBlock_text();
		me.__55.ggUpdatePosition=function (useTransition) {
		}
		me.__53.appendChild(me.__55);
		el=me.__54=document.createElement('div');
		els=me.__54__img=document.createElement('img');
		els.className='ggskin ggskin__54';
		hs='data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAAGQAAABkCAYAAABw4pVUAAAACXBIWXMAAA9hAAAPYQGoP6dpAAABX0lEQVR4nO3d0Y4BMRiA0al4/1fuXgubnTLDt3LONSL58itFZ8w5Nzoun34C3BIkRpAYQWIEiREkRpAYQWIEiREk5rpy4zGGfZZtG2duN5mQGEFiBIkRJGZpUf/FOOAxqt7+JsaExAgSI0iMIDGCxAgSI0iMIDGCxBzxSX2vb9m6n2M8tzkx5/zzjiYkRpAYQWIEiXnnov7Iv9y63/Od+rO/PzAhMYLECBIjSIwgMYLECBIjSIwgMYLECBIjSIwgMYLECBIjSIwgMYLECBIjSIwgMYLECBIjSIwgMYLECBIjSIwgMYLECBIjSIwgMYLECBIjSIwgMYLECBJzxP/Uv+VQmQQTEiNIjCAxgsSsLuqvHBZj8d9hKc'+
			'grV5Z5dCyeCyPf85IVI0iMIDGCxAgSI0iMIDGCxHz0mFiXcr1nQmIEiREkRpCYU68NzjoTEiNIjCAxgsQIEiNIjCAxgsT8AMhtHc4x+ExaAAAAAElFTkSuQmCC';
		els.setAttribute('src',hs);
		els.ggNormalSrc=hs;
		hs ='';
		hs += 'position: absolute;top: 0px;left: 0px;width: 100%;height: 100%;-webkit-user-drag:none;pointer-events:none;;';
		els.setAttribute('style', hs);
		els.className='ggskin ggskin_image';
		els['ondragstart']=function() { return false; };
		player.checkLoaded.push(els);
		el.appendChild(els);
		el.ggSubElement = els;
		el.ggId="\ub9c1\ud06c\ubcf5\uc0ac";
		el.ggDx=0;
		el.ggDy=0;
		el.ggParameter={ rx:0,ry:0,a:0,sx:0.6,sy:0.6,def:'' };
		el.ggVisible=true;
		el.className="ggskin ggskin_image ";
		el.ggType='image';
		hs ='';
		hs+='height : 87.5%;';
		hs+='left : calc(50% - ((87% + 0px) / 2) + 0px);';
		hs+='position : absolute;';
		hs+='top : calc(50% - ((87.5% + 0px) / 2) + 0px);';
		hs+='visibility : inherit;';
		hs+='width : 87%;';
		hs+='pointer-events:auto;';
		el.setAttribute('style',hs);
		el.style.transformOrigin='50% 50%';
		el.style.transform=parameterToTransform(el.ggParameter);
		me.__54.ggIsActive=function() {
			if ((this.parentNode) && (this.parentNode.ggIsActive)) {
				return this.parentNode.ggIsActive();
			}
			return false;
		}
		el.ggElementNodeId=function() {
			if ((this.parentNode) && (this.parentNode.ggElementNodeId)) {
				return this.parentNode.ggElementNodeId();
			}
			return player.getCurrentNode();
		}
		me.__54.ggUpdatePosition=function (useTransition) {
		}
		me.__53.appendChild(me.__54);
		me.__46.appendChild(me.__53);
		el=me.__52=document.createElement('div');
		el.ggTimestamp=skin.ggCurrentTime;
		el.ggLastIsActive=true;
		el.ggTimeout=500;
		el.ggId="\ub9c1\ud06c\ubcf5\uc0ac\ud0c0\uc774\uba38";
		el.ggParameter={ rx:0,ry:0,a:0,sx:1,sy:1,def:'' };
		el.ggVisible=true;
		el.className="ggskin ggskin_timer ";
		el.ggType='timer';
		hs ='';
		hs+='height : 20px;';
		hs+='left : -234px;';
		hs+='position : absolute;';
		hs+='top : 157px;';
		hs+='visibility : inherit;';
		hs+='width : 100px;';
		hs+='pointer-events:none;';
		el.setAttribute('style',hs);
		el.style.transformOrigin='50% 50%';
		me.__52.ggIsActive=function() {
			return (me.__52.ggTimestamp==0 ? false : (Math.floor((skin.ggCurrentTime - me.__52.ggTimestamp) / me.__52.ggTimeout) % 2 == 0));
		}
		el.ggElementNodeId=function() {
			if ((this.parentNode) && (this.parentNode.ggElementNodeId)) {
				return this.parentNode.ggElementNodeId();
			}
			return player.getCurrentNode();
		}
		me.__52.logicBlock_visible = function() {
			var newLogicStateVisible;
			if (
				((me.__52.ggIsActive() == true))
			)
			{
				newLogicStateVisible = 0;
			}
			else {
				newLogicStateVisible = -1;
			}
			if (me.__52.ggCurrentLogicStateVisible != newLogicStateVisible) {
				me.__52.ggCurrentLogicStateVisible = newLogicStateVisible;
				me.__52.style.transition='';
				if (me.__52.ggCurrentLogicStateVisible == 0) {
					me.__52.style.visibility=(Number(me.__52.style.opacity)>0||!me.__52.style.opacity)?'inherit':'hidden';
					me.__52.ggVisible=true;
				}
				else {
					me.__52.style.visibility=(Number(me.__52.style.opacity)>0||!me.__52.style.opacity)?'inherit':'hidden';
					me.__52.ggVisible=true;
				}
			}
		}
		me.__52.logicBlock_visible();
		me.__52.ggActivate=function () {
			me.__55.style.transition='none';
			me.__55.style.visibility='hidden';
			me.__55.ggVisible=false;
		}
		me.__52.ggCurrentLogicStateVisible = -1;
		me.__52.ggUpdateConditionTimer=function () {
			me.__52.logicBlock_visible();
		}
		me.__52.ggUpdatePosition=function (useTransition) {
		}
		me.__46.appendChild(me.__52);
		el=me.__48=document.createElement('div');
		el.ggId="\uc544\uc774\ucf58-\uc804\uccb4\ud654\uba74";
		el.ggDx=0;
		el.ggParameter={ rx:0,ry:0,a:0,sx:1,sy:1,def:'' };
		el.ggVisible=true;
		el.className="ggskin ggskin_container ";
		el.ggType='container';
		hs ='';
		hs+='cursor : pointer;';
		hs+='height : 43px;';
		hs+='left : calc(50% - ((43px + 0px) / 2) + 0px);';
		hs+='position : absolute;';
		hs+='top : 406px;';
		hs+='visibility : inherit;';
		hs+='width : 43px;';
		hs+='pointer-events:none;';
		el.setAttribute('style',hs);
		el.style.transformOrigin='50% 50%';
		me.__48.ggIsActive=function() {
			if ((this.parentNode) && (this.parentNode.ggIsActive)) {
				return this.parentNode.ggIsActive();
			}
			return false;
		}
		el.ggElementNodeId=function() {
			if ((this.parentNode) && (this.parentNode.ggElementNodeId)) {
				return this.parentNode.ggElementNodeId();
			}
			return player.getCurrentNode();
		}
		me.__48.logicBlock_visible = function() {
			var newLogicStateVisible;
			if (
				((player.getVariableValue('vis_short') == true))
			)
			{
				newLogicStateVisible = 0;
			}
			else if (
				((player.getVariableValue('vis_skin_show') == true))
			)
			{
				newLogicStateVisible = 1;
			}
			else {
				newLogicStateVisible = -1;
			}
			if (me.__48.ggCurrentLogicStateVisible != newLogicStateVisible) {
				me.__48.ggCurrentLogicStateVisible = newLogicStateVisible;
				me.__48.style.transition='';
				if (me.__48.ggCurrentLogicStateVisible == 0) {
					me.__48.style.visibility="hidden";
					me.__48.ggVisible=false;
				}
				else if (me.__48.ggCurrentLogicStateVisible == 1) {
					me.__48.style.visibility="hidden";
					me.__48.ggVisible=false;
				}
				else {
					me.__48.style.visibility=(Number(me.__48.style.opacity)>0||!me.__48.style.opacity)?'inherit':'hidden';
					me.__48.ggVisible=true;
				}
			}
		}
		me.__48.logicBlock_visible();
		me.__48.onclick=function (e) {
			player.toggleFullscreen();
			me.__51.ggVisible = !me.__51.ggVisible;
			var flag=me.__51.ggVisible;
			me.__51.style.transition='none';
			me.__51.style.visibility=((flag)&&(Number(me.__51.style.opacity)>0||!me.__51.style.opacity))?'inherit':'hidden';
		}
		me.__48.onmouseover=function (e) {
			me.elementMouseOver['_48']=true;
		}
		me.__48.onmousemove=function (e) {
			me.__49.style.transition='none';
			me.__49.style.visibility=(Number(me.__49.style.opacity)>0||!me.__49.style.opacity)?'inherit':'hidden';
			me.__49.ggVisible=true;
		}
		me.__48.onmouseout=function (e) {
			me.elementMouseOver['_48']=false;
		}
		me.__48.ggCurrentLogicStateVisible = -1;
		me.__48.ggUpdateConditionTimer=function () {
			if (me.elementMouseOver['_48']) {
				me.__49.style.transition='none';
				me.__49.style.visibility=(Number(me.__49.style.opacity)>0||!me.__49.style.opacity)?'inherit':'hidden';
				me.__49.ggVisible=true;
			}
		}
		me.__48.ggUpdatePosition=function (useTransition) {
		}
		el=me.__51=document.createElement('div');
		el.ggId="\uc804\uccb4\ud654\uba74\ubc30\uacbd";
		el.ggParameter={ rx:0,ry:0,a:0,sx:1,sy:1,def:'' };
		el.ggVisible=false;
		el.className="ggskin ggskin_rectangle ";
		el.ggType='rectangle';
		hs ='';
		hs+='background : #ffffff;';
		hs+='border : 0px solid #000000;';
		hs+='border-radius : 50px;';
		hs+='cursor : default;';
		hs+='height : 100%;';
		hs+='left : 0px;';
		hs+='position : absolute;';
		hs+='top : 0px;';
		hs+='visibility : hidden;';
		hs+='width : 100%;';
		hs+='pointer-events:auto;';
		el.setAttribute('style',hs);
		el.style.transformOrigin='50% 50%';
		me.__51.ggIsActive=function() {
			if ((this.parentNode) && (this.parentNode.ggIsActive)) {
				return this.parentNode.ggIsActive();
			}
			return false;
		}
		el.ggElementNodeId=function() {
			if ((this.parentNode) && (this.parentNode.ggElementNodeId)) {
				return this.parentNode.ggElementNodeId();
			}
			return player.getCurrentNode();
		}
		me.__51.logicBlock_visible = function() {
			var newLogicStateVisible;
			if (
				((player.getIsFullscreen() == false))
			)
			{
				newLogicStateVisible = 0;
			}
			else {
				newLogicStateVisible = -1;
			}
			if (me.__51.ggCurrentLogicStateVisible != newLogicStateVisible) {
				me.__51.ggCurrentLogicStateVisible = newLogicStateVisible;
				me.__51.style.transition='';
				if (me.__51.ggCurrentLogicStateVisible == 0) {
					me.__51.style.visibility="hidden";
					me.__51.ggVisible=false;
				}
				else {
					me.__51.style.visibility="hidden";
					me.__51.ggVisible=false;
				}
			}
		}
		me.__51.logicBlock_visible();
		me.__51.ggUpdatePosition=function (useTransition) {
		}
		me.__48.appendChild(me.__51);
		el=me.__50=document.createElement('div');
		els=me.__50__img=document.createElement('img');
		els.className='ggskin ggskin__50';
		hs='data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAAGQAAABkCAYAAABw4pVUAAAACXBIWXMAAA9hAAAPYQGoP6dpAAAD0UlEQVR4nO2c207VQBSGv228NxAwHjAQI2o8QDwlRG+88M4n4BF8Ax/MCzzENyBR4yFEAU9BEIm+Qb0YagBn9t6ddqZ/m/UlvdmdWdOuj9J275k1KIoCQ4djbR+AcRgTIoYJEcOEiGFCxDAhYpgQMUyIGCZEDBMihgkRw4SoURRF5Q0oEm8Pc50/8CTheRRAUSW3doWIYULEMCFimBA1Et3UPwCnWzqlXCwAP2n4pp7yKWsNOJszQxkZWwZCQgrgI3AuX56yMEyG9/O2hOwFPl8HZnNlKzGjZCz69rUl5AbwK7BvE5jLkrJ0jCMD3/62hLB/UKGD/gycT5qydIwrA1+bNoUAXAN2Am2+AhfS5CwZo2QsHGkvJw'+
			'TgCrAdaPcduNhszpJRVQa+tgpCAC4DW4G2W/v7lYmRga+9ihCAS7grwtf+B+5KUiRWBr4+SkIA5nH3Dl+fHeBqXM6SUUcGvn5qQsA9XX0ZcpKL4a5ZqSsDX19FIeDeQzYDfXdx7zFt0oQMfP1VhYB7Y98I9N8Dbo4Zp2makoEvhrIQcN9tfQrE+A3crhCrCZqUgS+OuhBw3wKvBeL8AZYqxoulaRn4YnVBCMAZ3O8mISl3I2JWIYUMfPG6IgTgFPA+EO9FZMxxeRoYt44MfDGr5PZ45KCPaxzwQbaB+8BLDr+PrAHLDY0RYhkn/eDT3S7wAHhTI2693EReIU0zDbzG/UV9A2ZSDOJhElilmSsjSI5/WSmYAp7hvm7JySSwAlxPNUCV3A5iEjwYDBIcdn+pkmObBiSGCRHDhIhhQsQwIWKYEDFMiBgmRAwTIoYJEcOE'+
			'iGFCxDAhYpgQMUyIGCZEDBMihgkRw4SIYULEMCFimBAxTIgYSkIWcBPWJjKPO4+b5zuVeVw/IjMXD85EXyWflBnc1NUCeIWb0lqXiaNbjqmk654tFt+ygBxSpvl/5v1b4GTNuJ1ejjBsjcZKnayMwfPAuO9wyyRi6ayQKvVDUnAPtzDIN36dAmydFNK2jJIlwlJiC7B1ToiKjJI7uMWmvuOJKcDWKSFqMkpu0VwBts4IUZVR0lQBtk4IUZdRskj9AmzyQlItP05F3QJs0kK6JqOkTgE2WSFdlVESW4BNUkjXZZTEFGCTE9IXGSVVC7BJCembjJIqBdhkhPRVRskc4xVgkxHSZxkls4wuwCYjpO8ySkYVYJMV0kcZJcMKsEkK6bOMkmEF2OSE1N0epc3lP05kOJdKQpRmnRhoTQMyMCFymBAxoirKGemwK0QMEyKGCR'+
			'HDhIhhQsQwIWKYEDFMiBgmRAwTIsZfnQGwNRLcyH4AAAAASUVORK5CYII=';
		els.setAttribute('src',hs);
		els.ggNormalSrc=hs;
		hs ='';
		hs += 'position: absolute;top: 0px;left: 0px;width: 100%;height: 100%;-webkit-user-drag:none;pointer-events:none;;';
		els.setAttribute('style', hs);
		els.className='ggskin ggskin_image';
		els['ondragstart']=function() { return false; };
		player.checkLoaded.push(els);
		el.appendChild(els);
		el.ggSubElement = els;
		el.ggId="\uc804\uccb4\ud654\uba74";
		el.ggDx=0;
		el.ggDy=0;
		el.ggParameter={ rx:0,ry:0,a:0,sx:0.6,sy:0.6,def:'' };
		el.ggVisible=true;
		el.className="ggskin ggskin_image ";
		el.ggType='image';
		hs ='';
		hs+='height : 87.5%;';
		hs+='left : calc(50% - ((87% + 0px) / 2) + 0px);';
		hs+='position : absolute;';
		hs+='top : calc(50% - ((87.5% + 0px) / 2) + 0px);';
		hs+='visibility : inherit;';
		hs+='width : 87%;';
		hs+='pointer-events:auto;';
		el.setAttribute('style',hs);
		el.style.transformOrigin='50% 50%';
		el.style.transform=parameterToTransform(el.ggParameter);
		me.__50.ggIsActive=function() {
			if ((this.parentNode) && (this.parentNode.ggIsActive)) {
				return this.parentNode.ggIsActive();
			}
			return false;
		}
		el.ggElementNodeId=function() {
			if ((this.parentNode) && (this.parentNode.ggElementNodeId)) {
				return this.parentNode.ggElementNodeId();
			}
			return player.getCurrentNode();
		}
		me.__50.ggUpdatePosition=function (useTransition) {
		}
		me.__48.appendChild(me.__50);
		el=me.__49=document.createElement('div');
		els=me.__49__text=document.createElement('div');
		el.className='ggskin ggskin_textdiv';
		el.ggTextDiv=els;
		el.ggId="\uc804\uccb4\ud654\uba74\ud0dd\uc2a4\ud2b8";
		el.ggDy=0;
		el.ggParameter={ rx:0,ry:0,a:0,sx:1,sy:1,def:'' };
		el.ggVisible=false;
		el.className="ggskin ggskin_text ";
		el.ggType='text';
		hs ='';
		hs+='background : rgba(255,255,255,0.784314);';
		hs+='border : 0px solid #000000;';
		hs+='border-radius : 20px;';
		hs+='color : rgba(34,34,34,1);';
		hs+='cursor : default;';
		hs+='height : 40px;';
		hs+='left : -90px;';
		hs+='position : absolute;';
		hs+='top : calc(50% - ((40px + 0px) / 2) + 0px);';
		hs+='visibility : hidden;';
		hs+='width : 85px;';
		hs+='pointer-events:auto;';
		hs+='line-height:14px;';
		el.setAttribute('style',hs);
		el.style.transformOrigin='50% 50%';
		hs ='';
		hs += 'box-sizing: border-box;';
		hs+='cursor: default;';
		hs+='width: 100%;';
		hs+='height: auto;';
		hs+='max-height: 100%;';
		hs+='text-align: center;';
		hs+='position: absolute;';
		hs+='top: 50%;';
		hs+='transform: translate(0, -50%);';
		hs+='white-space: pre;';
		hs+='padding: 5px;';
		hs+='overflow: hidden;';
		els.setAttribute('style',hs);
		me.__49.ggUpdateText=function() {
			var params = [];
			var hs = player._("\uc804\uccb4\ud654\uba74", params);
			if (hs!=this.ggText) {
				this.ggText=hs;
				this.ggTextDiv.innerHTML=hs;
				if (this.ggUpdatePosition) this.ggUpdatePosition();
			}
		}
		me.__49.ggUpdateText();
		el.appendChild(els);
		me.__49.ggIsActive=function() {
			if ((this.parentNode) && (this.parentNode.ggIsActive)) {
				return this.parentNode.ggIsActive();
			}
			return false;
		}
		el.ggElementNodeId=function() {
			if ((this.parentNode) && (this.parentNode.ggElementNodeId)) {
				return this.parentNode.ggElementNodeId();
			}
			return player.getCurrentNode();
		}
		me.__49.ggUpdatePosition=function (useTransition) {
		}
		me.__48.appendChild(me.__49);
		me.__46.appendChild(me.__48);
		el=me.__47=document.createElement('div');
		el.ggTimestamp=skin.ggCurrentTime;
		el.ggLastIsActive=true;
		el.ggTimeout=500;
		el.ggId="\uc804\uccb4\ud654\uba74\ud0c0\uc774\uba38";
		el.ggParameter={ rx:0,ry:0,a:0,sx:1,sy:1,def:'' };
		el.ggVisible=true;
		el.className="ggskin ggskin_timer ";
		el.ggType='timer';
		hs ='';
		hs+='height : 20px;';
		hs+='left : -502px;';
		hs+='position : absolute;';
		hs+='top : 251px;';
		hs+='visibility : inherit;';
		hs+='width : 100px;';
		hs+='pointer-events:none;';
		el.setAttribute('style',hs);
		el.style.transformOrigin='50% 50%';
		me.__47.ggIsActive=function() {
			return (me.__47.ggTimestamp==0 ? false : (Math.floor((skin.ggCurrentTime - me.__47.ggTimestamp) / me.__47.ggTimeout) % 2 == 0));
		}
		el.ggElementNodeId=function() {
			if ((this.parentNode) && (this.parentNode.ggElementNodeId)) {
				return this.parentNode.ggElementNodeId();
			}
			return player.getCurrentNode();
		}
		me.__47.logicBlock_visible = function() {
			var newLogicStateVisible;
			if (
				((me.__47.ggIsActive() == true))
			)
			{
				newLogicStateVisible = 0;
			}
			else {
				newLogicStateVisible = -1;
			}
			if (me.__47.ggCurrentLogicStateVisible != newLogicStateVisible) {
				me.__47.ggCurrentLogicStateVisible = newLogicStateVisible;
				me.__47.style.transition='';
				if (me.__47.ggCurrentLogicStateVisible == 0) {
					me.__47.style.visibility=(Number(me.__47.style.opacity)>0||!me.__47.style.opacity)?'inherit':'hidden';
					me.__47.ggVisible=true;
				}
				else {
					me.__47.style.visibility=(Number(me.__47.style.opacity)>0||!me.__47.style.opacity)?'inherit':'hidden';
					me.__47.ggVisible=true;
				}
			}
		}
		me.__47.logicBlock_visible();
		me.__47.ggActivate=function () {
			me.__49.style.transition='none';
			me.__49.style.visibility='hidden';
			me.__49.ggVisible=false;
		}
		me.__47.ggCurrentLogicStateVisible = -1;
		me.__47.ggUpdateConditionTimer=function () {
			me.__47.logicBlock_visible();
		}
		me.__47.ggUpdatePosition=function (useTransition) {
		}
		me.__46.appendChild(me.__47);
		me._rectangle_2.appendChild(me.__46);
		me.__43.appendChild(me._rectangle_2);
		el=me.__44=document.createElement('div');
		el.ggId="\ud654\uc0b4\ud45c";
		el.ggDx=0;
		el.ggParameter={ rx:0,ry:0,a:0,sx:1,sy:1,def:'' };
		el.ggVisible=true;
		el.className="ggskin ggskin_container ";
		el.ggType='container';
		hs ='';
		hs+='cursor : pointer;';
		hs+='height : 43px;';
		hs+='left : calc(50% - ((43px + 0px) / 2) + 0px);';
		hs+='position : absolute;';
		hs+='top : 232px;';
		hs+='visibility : inherit;';
		hs+='width : 43px;';
		hs+='pointer-events:none;';
		el.setAttribute('style',hs);
		el.style.transformOrigin='50% 50%';
		me.__44.ggIsActive=function() {
			if ((this.parentNode) && (this.parentNode.ggIsActive)) {
				return this.parentNode.ggIsActive();
			}
			return false;
		}
		el.ggElementNodeId=function() {
			if ((this.parentNode) && (this.parentNode.ggElementNodeId)) {
				return this.parentNode.ggElementNodeId();
			}
			return player.getCurrentNode();
		}
		me.__44.ggUpdatePosition=function (useTransition) {
		}
		el=me._up=document.createElement('div');
		els=me._up__img=document.createElement('img');
		els.className='ggskin ggskin_up';
		hs='data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAAEYAAABGCAYAAABxLuKEAAAACXBIWXMAAC4jAAAuIwF4pT92AAAEWUlEQVR4nO2bW28VVRiGn0pL7QFN/AEa7/gbJt61HGyLXngi4oUxIYqiBRFKoAkXApZSEk2gHEREKDQx/gb/gfHSw6XxQA8Uosj24p1JLM43h2+vmenFem52Zs9a36z97vWdVnd7Op0Okf/zWNsL2KhEYQyiMAZRGIMojEEUxiAKYxCFMYjCGERhDKIwBlEYgyiMQRTGoDfrzWefebrpdfQDzwPfAz81+eAff/4l8/2NsGOGgEngW+AU8ES7yxGZO6ZBHgc+BD5OrseS193AShsLSml7xxwG3ntkHWPANbSTWqMtYXqAaeADYDjj/ijwtXGvEdoQZhg4iuJKX864EeArWto5TQuzCdiH4kqZ+DYKXKWFndOkMA'+
			'PAR8AxFHTLshO4SMPZqqmsNIR2yRHn/AkUl94AlkMtKo+mdswB4P0ubYwDV2jIrZoQ5hiwnzBBdAdwPZCtXOoUZgA4geJKlZhSxAgNiFOXMAMopuxDmSg0oyiV1+ZWdQizGXgXlfn9NdhP2QZcArbUYTx0VhpC1exUYLsW40AHeBNYCmk4pDB9KPtMBrRZhgm083cTsPEM6UpTKKbklfl5/AnMAquOuWOoQg4WkEMI04cawkn8C1tCaf0d4GXgocPGdtR4DjrXsI5uhRlG6XgSv1veR03lueT6G2CX01awVN6NMJvQN3wQvyh3UfE3C/z9n/dvI/e457C5DfiSLlO5V5hBlI6n8afke4mNebJdZxF4FV9vtIMuG0/PN512yYe8D0U75SBwtmDcLdQ8zlO9XplIXvfgENezYw4hF/KyjLrsIlFSFlCd4nGrCeAyDreq'+
			'KsxRVOp7/XcFud/pivNuAK8B/zieuRPHSWBZYbagD3QYf51yN5l/xjl/AXgRVbpVSc+QS4tTRph+VLjtLzk+izUUaOeAv5w2QNlqHHjgmDtChb8+FH3QzUiQKfzZZw21CufwucKjLAIv4auQtwNfUCKQ5wkziALtdMG4PFZRBvuc9XVKt9xGvZEnlb8AXACezBtkpetelE67OY5cobuYUkSayi9SPRnsQgXqHuBO1gBLmFngdVSzeFhGvU9doqQsIHGuIrevwhjwFPBc1k1LmB/wN2NLrO996uYmqpxvUN3lf7duWIbOAnsrPgTUEB5B2SdkTCniFtUbz/PA29bNPIXn0BFl2dS4hoq/uQpzQpI2nvdLjJ1HMfRXa0DR1juTGChKs2mdch7fWUooFoFXyM9W19AX+FueoTJN5Mnk9RPj/irKPjMlbDVBmq0usL67fo'+
			'jOat6ixBFo2WB1kuzUfQfFlJmSdpoibTzXkusOaib3UvJcuMqxw2mk+qfJ9TJwnPpTspebSJDr6ODqAPBH2clVz2Nm0C47hdznM9qNKUUsoPbhO3ICbRY9Wf8sWvCrzV5gK6p1QvQ+rWL9ajNTmEj7P07csERhDKIwBlEYgyiMQRTGIApjEIUxiMIYRGEMojAGURiDKIxBFMYgCmPwL1w8xZQZ/Qx/AAAAAElFTkSuQmCC';
		els.setAttribute('src',hs);
		els.ggNormalSrc=hs;
		hs ='';
		hs += 'position: absolute;top: 0px;left: 0px;width: 100%;height: 100%;-webkit-user-drag:none;pointer-events:none;;';
		els.setAttribute('style', hs);
		els.className='ggskin ggskin_image';
		els['ondragstart']=function() { return false; };
		player.checkLoaded.push(els);
		el.appendChild(els);
		el.ggSubElement = els;
		el.ggId="\ud654\uc0b4\ud45c\uc544\uc774\ucf58up";
		el.ggDx=0;
		el.ggDy=0;
		el.ggParameter={ rx:0,ry:0,a:90,sx:0.6,sy:0.6,def:'' };
		el.ggVisible=true;
		el.className="ggskin ggskin_image ";
		el.ggType='image';
		hs ='';
		hs+='cursor : pointer;';
		hs+='height : 100%;';
		hs+='left : calc(50% - ((100% + 0px) / 2) + 0px);';
		hs+='position : absolute;';
		hs+='top : calc(50% - ((100% + 0px) / 2) + 0px);';
		hs+='visibility : inherit;';
		hs+='width : 100%;';
		hs+='pointer-events:auto;';
		el.setAttribute('style',hs);
		el.style.transformOrigin='50% 50%';
		el.style.transform=parameterToTransform(el.ggParameter);
		me._up.ggIsActive=function() {
			if ((this.parentNode) && (this.parentNode.ggIsActive)) {
				return this.parentNode.ggIsActive();
			}
			return false;
		}
		el.ggElementNodeId=function() {
			if ((this.parentNode) && (this.parentNode.ggElementNodeId)) {
				return this.parentNode.ggElementNodeId();
			}
			return player.getCurrentNode();
		}
		me._up.logicBlock_visible = function() {
			var newLogicStateVisible;
			if (
				((player.getVariableValue('vis_short') == true))
			)
			{
				newLogicStateVisible = 0;
			}
			else {
				newLogicStateVisible = -1;
			}
			if (me._up.ggCurrentLogicStateVisible != newLogicStateVisible) {
				me._up.ggCurrentLogicStateVisible = newLogicStateVisible;
				me._up.style.transition='';
				if (me._up.ggCurrentLogicStateVisible == 0) {
					me._up.style.visibility="hidden";
					me._up.ggVisible=false;
				}
				else {
					me._up.style.visibility=(Number(me._up.style.opacity)>0||!me._up.style.opacity)?'inherit':'hidden';
					me._up.ggVisible=true;
				}
			}
		}
		me._up.logicBlock_visible();
		me._up.onclick=function (e) {
			player.setVariableValue('vis_short', true);
		}
		me._up.ggUpdatePosition=function (useTransition) {
		}
		me.__44.appendChild(me._up);
		el=me.__45=document.createElement('div');
		el.ggId="\ud654\uc0b4\ud45c\ub2e4\uc6b4";
		el.ggDy=0;
		el.ggParameter={ rx:0,ry:0,a:0,sx:1,sy:1,def:'' };
		el.ggVisible=false;
		el.className="ggskin ggskin_container ";
		el.ggType='container';
		hs ='';
		hs+='cursor : pointer;';
		hs+='height : 43px;';
		hs+='left : 0px;';
		hs+='opacity : 0;';
		hs+='position : absolute;';
		hs+='top : calc(50% - ((43px + 0px) / 2) + 0px);';
		hs+='visibility : hidden;';
		hs+='width : 43px;';
		hs+='pointer-events:none;';
		el.setAttribute('style',hs);
		el.style.transformOrigin='50% 50%';
		me.__45.ggIsActive=function() {
			if ((this.parentNode) && (this.parentNode.ggIsActive)) {
				return this.parentNode.ggIsActive();
			}
			return false;
		}
		el.ggElementNodeId=function() {
			if ((this.parentNode) && (this.parentNode.ggElementNodeId)) {
				return this.parentNode.ggElementNodeId();
			}
			return player.getCurrentNode();
		}
		me.__45.logicBlock_position = function() {
			var newLogicStatePosition;
			if (
				((me.elementMouseOver['_45'] == true))
			)
			{
				newLogicStatePosition = 0;
			}
			else if (
				((player.getVariableValue('vis_short') == true))
			)
			{
				newLogicStatePosition = 1;
			}
			else {
				newLogicStatePosition = -1;
			}
			if (me.__45.ggCurrentLogicStatePosition != newLogicStatePosition) {
				me.__45.ggCurrentLogicStatePosition = newLogicStatePosition;
				me.__45.style.transition='left 500ms ease 500ms, top 500ms ease 500ms, opacity 500ms ease 0ms';
				if (me.__45.ggCurrentLogicStatePosition == 0) {
					me.__45.style.left='-10px';
					me.__45.style.top = 'calc(50% - (43px / 2))';
				}
				else if (me.__45.ggCurrentLogicStatePosition == 1) {
					me.__45.style.left='20px';
					me.__45.style.top = 'calc(50% - (43px / 2))';
				}
				else {
					me.__45.style.left='0px';
					me.__45.style.top='calc(50% - ((43px + 0px) / 2) + 0px)';
				}
			}
		}
		me.__45.logicBlock_position();
		me.__45.logicBlock_visible = function() {
			var newLogicStateVisible;
			if (
				((player.getVariableValue('vis_short') == true))
			)
			{
				newLogicStateVisible = 0;
			}
			else if (
				((player.getVariableValue('vis_long') == true))
			)
			{
				newLogicStateVisible = 1;
			}
			else {
				newLogicStateVisible = -1;
			}
			if (me.__45.ggCurrentLogicStateVisible != newLogicStateVisible) {
				me.__45.ggCurrentLogicStateVisible = newLogicStateVisible;
				me.__45.style.transition='left 500ms ease 500ms, top 500ms ease 500ms, opacity 500ms ease 0ms';
				if (me.__45.ggCurrentLogicStateVisible == 0) {
					me.__45.style.visibility=(Number(me.__45.style.opacity)>0||!me.__45.style.opacity)?'inherit':'hidden';
					me.__45.ggVisible=true;
				}
				else if (me.__45.ggCurrentLogicStateVisible == 1) {
					me.__45.style.visibility="hidden";
					me.__45.ggVisible=false;
				}
				else {
					me.__45.style.visibility="hidden";
					me.__45.ggVisible=false;
				}
			}
		}
		me.__45.logicBlock_visible();
		me.__45.logicBlock_alpha = function() {
			var newLogicStateAlpha;
			if (
				((player.getVariableValue('vis_short') == true))
			)
			{
				newLogicStateAlpha = 0;
			}
			else if (
				((player.getVariableValue('vis_long') == true))
			)
			{
				newLogicStateAlpha = 1;
			}
			else {
				newLogicStateAlpha = -1;
			}
			if (me.__45.ggCurrentLogicStateAlpha != newLogicStateAlpha) {
				me.__45.ggCurrentLogicStateAlpha = newLogicStateAlpha;
				me.__45.style.transition='left 500ms ease 500ms, top 500ms ease 500ms, opacity 500ms ease 0ms';
				if (me.__45.ggCurrentLogicStateAlpha == 0) {
					me.__45.style.visibility=me.__45.ggVisible?'inherit':'hidden';
					me.__45.style.opacity=1;
				}
				else if (me.__45.ggCurrentLogicStateAlpha == 1) {
					setTimeout(function() { if (me.__45.style.opacity == 0.0) { me.__45.style.visibility="hidden"; } }, 505);
					me.__45.style.opacity=0;
				}
				else {
					setTimeout(function() { if (me.__45.style.opacity == 0.0) { me.__45.style.visibility="hidden"; } }, 505);
					me.__45.style.opacity=0;
				}
			}
		}
		me.__45.logicBlock_alpha();
		me.__45.onmouseover=function (e) {
			me.elementMouseOver['_45']=true;
			me.__45.logicBlock_position();
		}
		me.__45.onmouseout=function (e) {
			me.elementMouseOver['_45']=false;
			me.__45.logicBlock_position();
		}
		me.__45.ggUpdatePosition=function (useTransition) {
		}
		el=me._rectangle_3=document.createElement('div');
		el.ggId="Rectangle 3";
		el.ggDx=0;
		el.ggDy=0;
		el.ggParameter={ rx:0,ry:0,a:0,sx:1,sy:1,def:'' };
		el.ggVisible=false;
		el.className="ggskin ggskin_rectangle ";
		el.ggType='rectangle';
		hs ='';
		hs+='z-index: 0;';
		hs+='background : rgba(255,255,255,0.470588);';
		hs+='border : 0px solid #000000;';
		hs+='border-radius : 50px;';
		hs+='cursor : default;';
		hs+='height : 100%;';
		hs+='left : calc(50% - ((100% + 0px) / 2) + 0px);';
		hs+='position : absolute;';
		hs+='top : calc(50% - ((100% + 0px) / 2) + 0px);';
		hs+='visibility : hidden;';
		hs+='width : 100%;';
		hs+='pointer-events:auto;';
		el.setAttribute('style',hs);
		el.style.transformOrigin='50% 50%';
		me._rectangle_3.ggIsActive=function() {
			if ((this.parentNode) && (this.parentNode.ggIsActive)) {
				return this.parentNode.ggIsActive();
			}
			return false;
		}
		el.ggElementNodeId=function() {
			if ((this.parentNode) && (this.parentNode.ggElementNodeId)) {
				return this.parentNode.ggElementNodeId();
			}
			return player.getCurrentNode();
		}
		me._rectangle_3.logicBlock_visible = function() {
			var newLogicStateVisible;
			if (
				((player.getVariableValue('vis_short') == true))
			)
			{
				newLogicStateVisible = 0;
			}
			else {
				newLogicStateVisible = -1;
			}
			if (me._rectangle_3.ggCurrentLogicStateVisible != newLogicStateVisible) {
				me._rectangle_3.ggCurrentLogicStateVisible = newLogicStateVisible;
				me._rectangle_3.style.transition='';
				if (me._rectangle_3.ggCurrentLogicStateVisible == 0) {
					me._rectangle_3.style.visibility=(Number(me._rectangle_3.style.opacity)>0||!me._rectangle_3.style.opacity)?'inherit':'hidden';
					me._rectangle_3.ggVisible=true;
				}
				else {
					me._rectangle_3.style.visibility="hidden";
					me._rectangle_3.ggVisible=false;
				}
			}
		}
		me._rectangle_3.logicBlock_visible();
		me._rectangle_3.onclick=function (e) {
			player.setVariableValue('vis_long', true);
			player.setVariableValue('vis_short', false);
		}
		me._rectangle_3.ggUpdatePosition=function (useTransition) {
		}
		el=me._dowm=document.createElement('div');
		els=me._dowm__img=document.createElement('img');
		els.className='ggskin ggskin_dowm';
		hs='data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAAEYAAABGCAYAAABxLuKEAAAACXBIWXMAAC4jAAAuIwF4pT92AAAEWUlEQVR4nO2bW28VVRiGn0pL7QFN/AEa7/gbJt61HGyLXngi4oUxIYqiBRFKoAkXApZSEk2gHEREKDQx/gb/gfHSw6XxQA8Uosj24p1JLM43h2+vmenFem52Zs9a36z97vWdVnd7Op0Okf/zWNsL2KhEYQyiMAZRGIMojEEUxiAKYxCFMYjCGERhDKIwBlEYgyiMQRTGoDfrzWefebrpdfQDzwPfAz81+eAff/4l8/2NsGOGgEngW+AU8ES7yxGZO6ZBHgc+BD5OrseS193AShsLSml7xxwG3ntkHWPANbSTWqMtYXqAaeADYDjj/ijwtXGvEdoQZhg4iuJKX864EeArWto5TQuzCdiH4kqZ+DYKXKWFndOkMA'+
			'PAR8AxFHTLshO4SMPZqqmsNIR2yRHn/AkUl94AlkMtKo+mdswB4P0ubYwDV2jIrZoQ5hiwnzBBdAdwPZCtXOoUZgA4geJKlZhSxAgNiFOXMAMopuxDmSg0oyiV1+ZWdQizGXgXlfn9NdhP2QZcArbUYTx0VhpC1exUYLsW40AHeBNYCmk4pDB9KPtMBrRZhgm083cTsPEM6UpTKKbklfl5/AnMAquOuWOoQg4WkEMI04cawkn8C1tCaf0d4GXgocPGdtR4DjrXsI5uhRlG6XgSv1veR03lueT6G2CX01awVN6NMJvQN3wQvyh3UfE3C/z9n/dvI/e457C5DfiSLlO5V5hBlI6n8afke4mNebJdZxF4FV9vtIMuG0/PN512yYe8D0U75SBwtmDcLdQ8zlO9XplIXvfgENezYw4hF/KyjLrsIlFSFlCd4nGrCeAyDreq'+
			'KsxRVOp7/XcFud/pivNuAK8B/zieuRPHSWBZYbagD3QYf51yN5l/xjl/AXgRVbpVSc+QS4tTRph+VLjtLzk+izUUaOeAv5w2QNlqHHjgmDtChb8+FH3QzUiQKfzZZw21CufwucKjLAIv4auQtwNfUCKQ5wkziALtdMG4PFZRBvuc9XVKt9xGvZEnlb8AXACezBtkpetelE67OY5cobuYUkSayi9SPRnsQgXqHuBO1gBLmFngdVSzeFhGvU9doqQsIHGuIrevwhjwFPBc1k1LmB/wN2NLrO996uYmqpxvUN3lf7duWIbOAnsrPgTUEB5B2SdkTCniFtUbz/PA29bNPIXn0BFl2dS4hoq/uQpzQpI2nvdLjJ1HMfRXa0DR1juTGChKs2mdch7fWUooFoFXyM9W19AX+FueoTJN5Mnk9RPj/irKPjMlbDVBmq0usL67fo'+
			'jOat6ixBFo2WB1kuzUfQfFlJmSdpoibTzXkusOaib3UvJcuMqxw2mk+qfJ9TJwnPpTspebSJDr6ODqAPBH2clVz2Nm0C47hdznM9qNKUUsoPbhO3ICbRY9Wf8sWvCrzV5gK6p1QvQ+rWL9ajNTmEj7P07csERhDKIwBlEYgyiMQRTGIApjEIUxiMIYRGEMojAGURiDKIxBFMYgCmPwL1w8xZQZ/Qx/AAAAAElFTkSuQmCC';
		els.setAttribute('src',hs);
		els.ggNormalSrc=hs;
		hs ='';
		hs += 'position: absolute;top: 0px;left: 0px;width: 100%;height: 100%;-webkit-user-drag:none;pointer-events:none;;';
		els.setAttribute('style', hs);
		els.className='ggskin ggskin_image';
		els['ondragstart']=function() { return false; };
		player.checkLoaded.push(els);
		el.appendChild(els);
		el.ggSubElement = els;
		el.ggId="\ud654\uc0b4\ud45c\uc544\uc774\ucf58dowm";
		el.ggDx=0;
		el.ggDy=0;
		el.ggParameter={ rx:0,ry:0,a:-90,sx:0.6,sy:0.6,def:'' };
		el.ggVisible=false;
		el.className="ggskin ggskin_image ";
		el.ggType='image';
		hs ='';
		hs+='z-index: 9;';
		hs+='height : 100%;';
		hs+='left : calc(50% - ((100% + 0px) / 2) + 0px);';
		hs+='position : absolute;';
		hs+='top : calc(50% - ((100% + 0px) / 2) + 0px);';
		hs+='visibility : hidden;';
		hs+='width : 100%;';
		hs+='pointer-events:auto;';
		el.setAttribute('style',hs);
		el.style.transformOrigin='50% 50%';
		el.style.transform=parameterToTransform(el.ggParameter);
		me._dowm.ggIsActive=function() {
			if ((this.parentNode) && (this.parentNode.ggIsActive)) {
				return this.parentNode.ggIsActive();
			}
			return false;
		}
		el.ggElementNodeId=function() {
			if ((this.parentNode) && (this.parentNode.ggElementNodeId)) {
				return this.parentNode.ggElementNodeId();
			}
			return player.getCurrentNode();
		}
		me._dowm.logicBlock_visible = function() {
			var newLogicStateVisible;
			if (
				((player.getVariableValue('vis_short') == true))
			)
			{
				newLogicStateVisible = 0;
			}
			else {
				newLogicStateVisible = -1;
			}
			if (me._dowm.ggCurrentLogicStateVisible != newLogicStateVisible) {
				me._dowm.ggCurrentLogicStateVisible = newLogicStateVisible;
				me._dowm.style.transition='';
				if (me._dowm.ggCurrentLogicStateVisible == 0) {
					me._dowm.style.visibility=(Number(me._dowm.style.opacity)>0||!me._dowm.style.opacity)?'inherit':'hidden';
					me._dowm.ggVisible=true;
				}
				else {
					me._dowm.style.visibility="hidden";
					me._dowm.ggVisible=false;
				}
			}
		}
		me._dowm.logicBlock_visible();
		me._dowm.ggUpdatePosition=function (useTransition) {
		}
		me._rectangle_3.appendChild(me._dowm);
		me.__45.appendChild(me._rectangle_3);
		me.__44.appendChild(me.__45);
		me.__43.appendChild(me.__44);
		me.divSkin.appendChild(me.__43);
		el=me.__35=document.createElement('div');
		el.ggId="\uc2a4\ud0a8 \ubcf4\uc774\uae30 \uc544\uc774\ucf58";
		el.ggParameter={ rx:0,ry:0,a:0,sx:1,sy:1,def:'' };
		el.ggVisible=false;
		el.className="ggskin ggskin_container ";
		el.ggType='container';
		hs ='';
		hs+='z-index: 999;';
		hs+='cursor : pointer;';
		hs+='height : 48px;';
		hs+='position : absolute;';
		hs+='right : 15px;';
		hs+='top : 15px;';
		hs+='visibility : hidden;';
		hs+='width : 48px;';
		hs+='pointer-events:none;';
		el.setAttribute('style',hs);
		el.style.transformOrigin='50% 50%';
		me.__35.ggIsActive=function() {
			return false;
		}
		el.ggElementNodeId=function() {
			return player.getCurrentNode();
		}
		me.__35.onclick=function (e) {
			me.__29.style.transition='none';
			me.__29.style.visibility=(Number(me.__29.style.opacity)>0||!me.__29.style.opacity)?'inherit':'hidden';
			me.__29.ggVisible=true;
			if (
				(
					((player.getViewerSize().width > 460))
				)
			||
				(
					((player.getIsMobile() == false))
				)
			) {
				me.__26.style.transition='none';
				me.__26.style.visibility=(Number(me.__26.style.opacity)>0||!me.__26.style.opacity)?'inherit':'hidden';
				me.__26.ggVisible=true;
			}
			var list=me.findElements("ht_node",true);
			while(list.length>0) {
				var e=list.pop();
				e.style.transition='none';
				e.style.visibility=(Number(e.style.opacity)>0||!e.style.opacity)?'inherit':'hidden';
				e.ggVisible=true;
			}
			me.__82.style.transition='none';
			me.__82.style.visibility=(Number(me.__82.style.opacity)>0||!me.__82.style.opacity)?'inherit':'hidden';
			me.__82.ggVisible=true;
			me.__44.style.transition='none';
			me.__44.style.visibility=(Number(me.__44.style.opacity)>0||!me.__44.style.opacity)?'inherit':'hidden';
			me.__44.ggVisible=true;
			me._rectangle_2.style.transition='none';
			me._rectangle_2.style.visibility=(Number(me._rectangle_2.style.opacity)>0||!me._rectangle_2.style.opacity)?'inherit':'hidden';
			me._rectangle_2.ggVisible=true;
			me.__35.style.transition='none';
			me.__35.style.visibility='hidden';
			me.__35.ggVisible=false;
			if (
				(
					((player.getViewerSize().width <= 460))
				)
			||
				(
					((player.getIsMobile() == true))
				)
			) {
				me.__23.style.transition='none';
				me.__23.style.visibility=(Number(me.__23.style.opacity)>0||!me.__23.style.opacity)?'inherit':'hidden';
				me.__23.ggVisible=true;
			}
		}
		me.__35.onmouseover=function (e) {
			me.elementMouseOver['_35']=true;
		}
		me.__35.onmousemove=function (e) {
			me.__37.style.transition='none';
			me.__37.style.visibility=(Number(me.__37.style.opacity)>0||!me.__37.style.opacity)?'inherit':'hidden';
			me.__37.ggVisible=true;
		}
		me.__35.onmouseout=function (e) {
			me.elementMouseOver['_35']=false;
		}
		me.__35.ggUpdateConditionTimer=function () {
			if (me.elementMouseOver['_35']) {
				me.__37.style.transition='none';
				me.__37.style.visibility=(Number(me.__37.style.opacity)>0||!me.__37.style.opacity)?'inherit':'hidden';
				me.__37.ggVisible=true;
			}
		}
		me.__35.ggUpdatePosition=function (useTransition) {
		}
		el=me.__39=document.createElement('div');
		el.ggId="\uc2a4\ud0a8\ubcf4\uae30 \ubc30\uacbd";
		el.ggDx=0;
		el.ggDy=0;
		el.ggParameter={ rx:0,ry:0,a:0,sx:1,sy:1,def:'' };
		el.ggVisible=true;
		el.className="ggskin ggskin_rectangle ";
		el.ggType='rectangle';
		hs ='';
		hs+='z-index: 0;';
		hs+='background : rgba(255,255,255,0.470588);';
		hs+='border : 0px solid #000000;';
		hs+='border-radius : 50px;';
		hs+='cursor : default;';
		hs+='height : 100%;';
		hs+='left : calc(50% - ((100% + 0px) / 2) + 0px);';
		hs+='position : absolute;';
		hs+='top : calc(50% - ((100% + 0px) / 2) + 0px);';
		hs+='visibility : inherit;';
		hs+='width : 100%;';
		hs+='pointer-events:auto;';
		el.setAttribute('style',hs);
		el.style.transformOrigin='50% 50%';
		me.__39.ggIsActive=function() {
			if ((this.parentNode) && (this.parentNode.ggIsActive)) {
				return this.parentNode.ggIsActive();
			}
			return false;
		}
		el.ggElementNodeId=function() {
			if ((this.parentNode) && (this.parentNode.ggElementNodeId)) {
				return this.parentNode.ggElementNodeId();
			}
			return player.getCurrentNode();
		}
		me.__39.ggUpdatePosition=function (useTransition) {
		}
		me.__35.appendChild(me.__39);
		el=me.__38=document.createElement('div');
		els=me.__38__img=document.createElement('img');
		els.className='ggskin ggskin__38';
		hs='data:image/png;base64,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';
		els.setAttribute('src',hs);
		els.ggNormalSrc=hs;
		hs ='';
		hs += 'position: absolute;top: 0px;left: 0px;width: 100%;height: 100%;-webkit-user-drag:none;pointer-events:none;;';
		els.setAttribute('style', hs);
		els.className='ggskin ggskin_image';
		els['ondragstart']=function() { return false; };
		player.checkLoaded.push(els);
		el.appendChild(els);
		el.ggSubElement = els;
		el.ggId="\uc2a4\ud0a8 \ubcf4\uae30";
		el.ggDx=0;
		el.ggDy=0;
		el.ggParameter={ rx:0,ry:0,a:180,sx:0.6,sy:0.6,def:'' };
		el.ggVisible=true;
		el.className="ggskin ggskin_image ";
		el.ggType='image';
		hs ='';
		hs+='z-index: 9;';
		hs+='height : 100%;';
		hs+='left : calc(50% - ((100% + 0px) / 2) + 0px);';
		hs+='position : absolute;';
		hs+='top : calc(50% - ((100% + 0px) / 2) + 0px);';
		hs+='visibility : inherit;';
		hs+='width : 100%;';
		hs+='pointer-events:auto;';
		el.setAttribute('style',hs);
		el.style.transformOrigin='50% 50%';
		el.style.transform=parameterToTransform(el.ggParameter);
		me.__38.ggIsActive=function() {
			if ((this.parentNode) && (this.parentNode.ggIsActive)) {
				return this.parentNode.ggIsActive();
			}
			return false;
		}
		el.ggElementNodeId=function() {
			if ((this.parentNode) && (this.parentNode.ggElementNodeId)) {
				return this.parentNode.ggElementNodeId();
			}
			return player.getCurrentNode();
		}
		me.__38.ggUpdatePosition=function (useTransition) {
		}
		me.__35.appendChild(me.__38);
		el=me.__37=document.createElement('div');
		els=me.__37__text=document.createElement('div');
		el.className='ggskin ggskin_textdiv';
		el.ggTextDiv=els;
		el.ggId="\uc2a4\ud0a8 \ubcf4\uae30 \ud0dd\uc2a4\ud2b8";
		el.ggDy=0;
		el.ggParameter={ rx:0,ry:0,a:0,sx:1,sy:1,def:'' };
		el.ggVisible=false;
		el.className="ggskin ggskin_text ";
		el.ggType='text';
		hs ='';
		hs+='background : rgba(255,255,255,0.784314);';
		hs+='border : 0px solid #000000;';
		hs+='border-radius : 20px;';
		hs+='color : rgba(34,34,34,1);';
		hs+='cursor : default;';
		hs+='height : 40px;';
		hs+='left : -90px;';
		hs+='position : absolute;';
		hs+='top : calc(50% - ((40px + 0px) / 2) + 0px);';
		hs+='visibility : hidden;';
		hs+='width : 85px;';
		hs+='pointer-events:auto;';
		hs+='line-height:14px;';
		el.setAttribute('style',hs);
		el.style.transformOrigin='50% 50%';
		hs ='';
		hs += 'box-sizing: border-box;';
		hs+='cursor: default;';
		hs+='width: 100%;';
		hs+='height: auto;';
		hs+='max-height: 100%;';
		hs+='text-align: center;';
		hs+='position: absolute;';
		hs+='top: 50%;';
		hs+='transform: translate(0, -50%);';
		hs+='white-space: pre;';
		hs+='padding: 5px;';
		hs+='overflow: hidden;';
		els.setAttribute('style',hs);
		me.__37.ggUpdateText=function() {
			var params = [];
			var hs = player._("\uc2a4\ud0a8\ubcf4\uae30", params);
			if (hs!=this.ggText) {
				this.ggText=hs;
				this.ggTextDiv.innerHTML=hs;
				if (this.ggUpdatePosition) this.ggUpdatePosition();
			}
		}
		me.__37.ggUpdateText();
		el.appendChild(els);
		me.__37.ggIsActive=function() {
			if ((this.parentNode) && (this.parentNode.ggIsActive)) {
				return this.parentNode.ggIsActive();
			}
			return false;
		}
		el.ggElementNodeId=function() {
			if ((this.parentNode) && (this.parentNode.ggElementNodeId)) {
				return this.parentNode.ggElementNodeId();
			}
			return player.getCurrentNode();
		}
		me.__37.ggUpdatePosition=function (useTransition) {
		}
		me.__35.appendChild(me.__37);
		el=me.__36=document.createElement('div');
		el.ggTimestamp=skin.ggCurrentTime;
		el.ggLastIsActive=true;
		el.ggTimeout=500;
		el.ggId="\uc2a4\ud0a8\ubcf4\uae30\ud0c0\uc774\uba38";
		el.ggParameter={ rx:0,ry:0,a:0,sx:1,sy:1,def:'' };
		el.ggVisible=true;
		el.className="ggskin ggskin_timer ";
		el.ggType='timer';
		hs ='';
		hs+='height : 20px;';
		hs+='left : -508px;';
		hs+='position : absolute;';
		hs+='top : 234px;';
		hs+='visibility : inherit;';
		hs+='width : 100px;';
		hs+='pointer-events:none;';
		el.setAttribute('style',hs);
		el.style.transformOrigin='50% 50%';
		me.__36.ggIsActive=function() {
			return (me.__36.ggTimestamp==0 ? false : (Math.floor((skin.ggCurrentTime - me.__36.ggTimestamp) / me.__36.ggTimeout) % 2 == 0));
		}
		el.ggElementNodeId=function() {
			if ((this.parentNode) && (this.parentNode.ggElementNodeId)) {
				return this.parentNode.ggElementNodeId();
			}
			return player.getCurrentNode();
		}
		me.__36.logicBlock_visible = function() {
			var newLogicStateVisible;
			if (
				((me.__36.ggIsActive() == true))
			)
			{
				newLogicStateVisible = 0;
			}
			else {
				newLogicStateVisible = -1;
			}
			if (me.__36.ggCurrentLogicStateVisible != newLogicStateVisible) {
				me.__36.ggCurrentLogicStateVisible = newLogicStateVisible;
				me.__36.style.transition='';
				if (me.__36.ggCurrentLogicStateVisible == 0) {
					me.__36.style.visibility=(Number(me.__36.style.opacity)>0||!me.__36.style.opacity)?'inherit':'hidden';
					me.__36.ggVisible=true;
				}
				else {
					me.__36.style.visibility=(Number(me.__36.style.opacity)>0||!me.__36.style.opacity)?'inherit':'hidden';
					me.__36.ggVisible=true;
				}
			}
		}
		me.__36.logicBlock_visible();
		me.__36.ggActivate=function () {
			me.__37.style.transition='none';
			me.__37.style.visibility='hidden';
			me.__37.ggVisible=false;
		}
		me.__36.ggCurrentLogicStateVisible = -1;
		me.__36.ggUpdateConditionTimer=function () {
			me.__36.logicBlock_visible();
		}
		me.__36.ggUpdatePosition=function (useTransition) {
		}
		me.__35.appendChild(me.__36);
		me.divSkin.appendChild(me.__35);
		el=me.__29=document.createElement('div');
		el.ggId="\ub85c\uace0";
		el.ggParameter={ rx:0,ry:0,a:0,sx:1,sy:1,def:'' };
		el.ggVisible=true;
		el.className="ggskin ggskin_container ";
		el.ggType='container';
		hs ='';
		hs+='height : 52px;';
		hs+='left : 0px;';
		hs+='position : absolute;';
		hs+='top : 4.8px;';
		hs+='visibility : inherit;';
		hs+='width : 530px;';
		hs+='pointer-events:none;';
		el.setAttribute('style',hs);
		el.style.transformOrigin='50% 50%';
		me.__29.ggIsActive=function() {
			return false;
		}
		el.ggElementNodeId=function() {
			return player.getCurrentNode();
		}
		me.__29.logicBlock_position = function() {
			var newLogicStatePosition;
			if (
				((player.getViewerSize().width <= 460))
			)
			{
				newLogicStatePosition = 0;
			}
			else if (
				((player.getViewerSize().width <= 670))
			)
			{
				newLogicStatePosition = 1;
			}
			else {
				newLogicStatePosition = -1;
			}
			if (me.__29.ggCurrentLogicStatePosition != newLogicStatePosition) {
				me.__29.ggCurrentLogicStatePosition = newLogicStatePosition;
				me.__29.style.transition='left 0s, top 0s, transform 0s';
				if (me.__29.ggCurrentLogicStatePosition == 0) {
					me.__29.style.left='0px';
					me.__29.style.top='5px';
				}
				else if (me.__29.ggCurrentLogicStatePosition == 1) {
					me.__29.style.left='25px';
					me.__29.style.top='5px';
				}
				else {
					me.__29.style.left='0px';
					me.__29.style.top='4.8px';
				}
			}
		}
		me.__29.logicBlock_position();
		me.__29.logicBlock_scaling = function() {
			var newLogicStateScaling;
			if (
				((player.getViewerSize().width <= 420))
			)
			{
				newLogicStateScaling = 0;
			}
			else if (
				((player.getViewerSize().width <= 670))
			)
			{
				newLogicStateScaling = 1;
			}
			else {
				newLogicStateScaling = -1;
			}
			if (me.__29.ggCurrentLogicStateScaling != newLogicStateScaling) {
				me.__29.ggCurrentLogicStateScaling = newLogicStateScaling;
				me.__29.style.transition='left 0s, top 0s, transform 0s';
				if (me.__29.ggCurrentLogicStateScaling == 0) {
					me.__29.ggParameter.sx = 0.8;
					me.__29.ggParameter.sy = 0.8;
					me.__29.style.transform=parameterToTransform(me.__29.ggParameter);
					skin.updateSize(me.__29);
				}
				else if (me.__29.ggCurrentLogicStateScaling == 1) {
					me.__29.ggParameter.sx = 1;
					me.__29.ggParameter.sy = 0.9;
					me.__29.style.transform=parameterToTransform(me.__29.ggParameter);
					skin.updateSize(me.__29);
				}
				else {
					me.__29.ggParameter.sx = 1;
					me.__29.ggParameter.sy = 1;
					me.__29.style.transform=parameterToTransform(me.__29.ggParameter);
					skin.updateSize(me.__29);
				}
			}
		}
		me.__29.logicBlock_scaling();
		me.__29.onclick=function (e) {
			player.openUrl("www.unfiction.kr","");
		}
		me.__29.ggUpdatePosition=function (useTransition) {
		}
		el=me.__33=document.createElement('div');
		el.ggId="\ub85c\uace0\ubc30\uacbd";
		el.ggParameter={ rx:0,ry:0,a:0,sx:1,sy:1,def:'' };
		el.ggVisible=true;
		el.className="ggskin ggskin_rectangle ";
		el.ggType='rectangle';
		hs ='';
		hs+='background : rgba(255,255,255,0.470588);';
		hs+='border : 0px solid #000000;';
		hs+='border-radius : 25px 25px 25px 25px;';
		hs+='cursor : default;';
		hs+='height : 100%;';
		hs+='left : -5%;';
		hs+='position : absolute;';
		hs+='top : 0px;';
		hs+='visibility : inherit;';
		hs+='width : 100%;';
		hs+='pointer-events:auto;';
		el.setAttribute('style',hs);
		el.style.transformOrigin='50% 50%';
		me.__33.ggIsActive=function() {
			if ((this.parentNode) && (this.parentNode.ggIsActive)) {
				return this.parentNode.ggIsActive();
			}
			return false;
		}
		el.ggElementNodeId=function() {
			if ((this.parentNode) && (this.parentNode.ggElementNodeId)) {
				return this.parentNode.ggElementNodeId();
			}
			return player.getCurrentNode();
		}
		me.__33.logicBlock_position = function() {
			var newLogicStatePosition;
			if (
				((player.getViewerSize().width <= 670))
			)
			{
				newLogicStatePosition = 0;
			}
			else {
				newLogicStatePosition = -1;
			}
			if (me.__33.ggCurrentLogicStatePosition != newLogicStatePosition) {
				me.__33.ggCurrentLogicStatePosition = newLogicStatePosition;
				me.__33.style.transition='left 0s, top 0s';
				if (me.__33.ggCurrentLogicStatePosition == 0) {
					me.__33.style.left='-9%';
					me.__33.style.top='0px';
				}
				else {
					me.__33.style.left='-5%';
					me.__33.style.top='0px';
				}
			}
		}
		me.__33.logicBlock_position();
		me.__33.ggUpdatePosition=function (useTransition) {
		}
		el=me.__34=document.createElement('div');
		el.ggId="\ud0c0\uc785\uc120\ud0dd";
		el.ggParameter={ rx:0,ry:0,a:0,sx:1,sy:1,def:'' };
		el.ggVisible=true;
		el.className="ggskin ggskin_container ";
		el.ggType='container';
		hs ='';
		hs+='height : 100%;';
		hs+='position : absolute;';
		hs+='right : 2%;';
		hs+='top : 0px;';
		hs+='visibility : inherit;';
		hs+='width : 40%;';
		hs+='pointer-events:none;';
		el.setAttribute('style',hs);
		el.style.transformOrigin='50% 50%';
		me.__34.ggIsActive=function() {
			if ((this.parentNode) && (this.parentNode.ggIsActive)) {
				return this.parentNode.ggIsActive();
			}
			return false;
		}
		el.ggElementNodeId=function() {
			if ((this.parentNode) && (this.parentNode.ggElementNodeId)) {
				return this.parentNode.ggElementNodeId();
			}
			return player.getCurrentNode();
		}
		me.__34.logicBlock_position = function() {
			var newLogicStatePosition;
			if (
				((player.getViewerSize().width <= 360))
			)
			{
				newLogicStatePosition = 0;
			}
			else if (
				((player.getViewerSize().width <= 460))
			)
			{
				newLogicStatePosition = 1;
			}
			else if (
				((player.getViewerSize().width <= 670))
			)
			{
				newLogicStatePosition = 2;
			}
			else {
				newLogicStatePosition = -1;
			}
			if (me.__34.ggCurrentLogicStatePosition != newLogicStatePosition) {
				me.__34.ggCurrentLogicStatePosition = newLogicStatePosition;
				me.__34.style.transition='right 0s, top 0s, width 0s, height 0s';
				if (me.__34.ggCurrentLogicStatePosition == 0) {
					me.__34.style.right='23%';
					me.__34.style.top='0px';
				}
				else if (me.__34.ggCurrentLogicStatePosition == 1) {
					me.__34.style.right='16%';
					me.__34.style.top='0px';
				}
				else if (me.__34.ggCurrentLogicStatePosition == 2) {
					me.__34.style.right='10%';
					me.__34.style.top='0px';
				}
				else {
					me.__34.style.right='2%';
					me.__34.style.top='0px';
				}
			}
		}
		me.__34.logicBlock_position();
		me.__34.logicBlock_size = function() {
			var newLogicStateSize;
			if (
				((player.getViewerSize().width <= 460))
			)
			{
				newLogicStateSize = 0;
			}
			else if (
				((player.getViewerSize().width <= 360))
			)
			{
				newLogicStateSize = 1;
			}
			else {
				newLogicStateSize = -1;
			}
			if (me.__34.ggCurrentLogicStateSize != newLogicStateSize) {
				me.__34.ggCurrentLogicStateSize = newLogicStateSize;
				me.__34.style.transition='right 0s, top 0s, width 0s, height 0s';
				if (me.__34.ggCurrentLogicStateSize == 0) {
					me.__34.style.width='35%';
					me.__34.style.height='100%';
					skin.updateSize(me.__34);
				}
				else if (me.__34.ggCurrentLogicStateSize == 1) {
					me.__34.style.width='32%';
					me.__34.style.height='100%';
					skin.updateSize(me.__34);
				}
				else {
					me.__34.style.width='40%';
					me.__34.style.height='100%';
					skin.updateSize(me.__34);
				}
			}
		}
		me.__34.logicBlock_size();
		me.__34.ggUpdatePosition=function (useTransition) {
		}
		el=me.__74a=document.createElement('div');
		els=me.__74a__text=document.createElement('div');
		el.className='ggskin ggskin_textdiv';
		el.ggTextDiv=els;
		el.ggId="74A";
		el.ggDy=0;
		el.ggParameter={ rx:0,ry:0,a:0,sx:1,sy:1,def:'' };
		el.ggVisible=true;
		el.className="ggskin ggskin_text ";
		el.ggType='text';
		hs ='';
		hs+='background : rgba(255,255,255,0);';
		hs+='border : 0px solid #000000;';
		hs+='border-radius : 25px;';
		hs+='color : #000000;';
		hs+='cursor : default;';
		hs+='height : 40px;';
		hs+='left : 20px;';
		hs+='position : absolute;';
		hs+='top : calc(50% - ((40px + 0px) / 2) + 0px);';
		hs+='visibility : inherit;';
		hs+='width : 55px;';
		hs+='pointer-events:auto;';
		hs+='@import url(\"https:\/\/fonts.googleapis.com\/css2?family=Nanum+Gothic:wght@400;700&display=swap\"); font-family: \"Nanum Gothic\", sans-serif;';
		el.setAttribute('style',hs);
		el.style.transformOrigin='50% 50%';
		hs ='';
		hs += 'box-sizing: border-box;';
		hs+='cursor: default;';
		hs+='width: 100%;';
		hs+='height: auto;';
		hs+='max-height: 100%;';
		hs+='font-size: 12px;';
		hs+='font-weight: 700;';
		hs+='text-align: center;';
		hs+='position: absolute;';
		hs+='top: 50%;';
		hs+='transform: translate(0, -50%);';
		hs+='white-space: pre;';
		hs+='padding: 6px;';
		hs+='overflow: hidden;';
		els.setAttribute('style',hs);
		me.__74a.ggUpdateText=function() {
			var params = [];
			var hs = player._("18A", params);
			if (hs!=this.ggText) {
				this.ggText=hs;
				this.ggTextDiv.innerHTML=hs;
				if (this.ggUpdatePosition) this.ggUpdatePosition();
			}
		}
		me.__74a.ggUpdateText();
		el.appendChild(els);
		me.__74a.ggIsActive=function() {
			if ((this.parentNode) && (this.parentNode.ggIsActive)) {
				return this.parentNode.ggIsActive();
			}
			return false;
		}
		el.ggElementNodeId=function() {
			if ((this.parentNode) && (this.parentNode.ggElementNodeId)) {
				return this.parentNode.ggElementNodeId();
			}
			return player.getCurrentNode();
		}
		me.__74a.logicBlock_position = function() {
			var newLogicStatePosition;
			if (
				((player.getViewerSize().width <= 460))
			)
			{
				newLogicStatePosition = 0;
			}
			else if (
				((player.getIsMobile() == true))
			)
			{
				newLogicStatePosition = 1;
			}
			else {
				newLogicStatePosition = -1;
			}
			if (me.__74a.ggCurrentLogicStatePosition != newLogicStatePosition) {
				me.__74a.ggCurrentLogicStatePosition = newLogicStatePosition;
				me.__74a.style.transition='left 0s, top 0s, background-color 0s';
				if (me.__74a.ggCurrentLogicStatePosition == 0) {
					me.__74a.style.left='10px';
					me.__74a.style.top = 'calc(50% - (40px / 2))';
				}
				else if (me.__74a.ggCurrentLogicStatePosition == 1) {
					me.__74a.style.left='10px';
					me.__74a.style.top = 'calc(50% - (40px / 2))';
				}
				else {
					me.__74a.style.left='20px';
					me.__74a.style.top='calc(50% - ((40px + 0px) / 2) + 0px)';
				}
			}
		}
		me.__74a.logicBlock_position();
		me.__74a.logicBlock_backgroundcolor = function() {
			var newLogicStateBackgroundColor;
			if (
				((me.ggUserdata.tags.indexOf("18A") != -1))
			)
			{
				newLogicStateBackgroundColor = 0;
			}
			else {
				newLogicStateBackgroundColor = -1;
			}
			if (me.__74a.ggCurrentLogicStateBackgroundColor != newLogicStateBackgroundColor) {
				me.__74a.ggCurrentLogicStateBackgroundColor = newLogicStateBackgroundColor;
				me.__74a.style.transition='left 0s, top 0s, background-color 0s';
				if (me.__74a.ggCurrentLogicStateBackgroundColor == 0) {
					me.__74a.style.backgroundColor="rgba(255,255,255,1)";
				}
				else {
					me.__74a.style.backgroundColor="rgba(255,255,255,0)";
				}
			}
		}
		me.__74a.logicBlock_backgroundcolor();
		me.__74a.onclick=function (e) {
			player.openNext("{node1}","");
		}
		me.__74a.ggUpdatePosition=function (useTransition) {
		}
		me.__34.appendChild(me.__74a);
		el=me.__74b=document.createElement('div');
		els=me.__74b__text=document.createElement('div');
		el.className='ggskin ggskin_textdiv';
		el.ggTextDiv=els;
		el.ggId="74B";
		el.ggDx=1;
		el.ggDy=0;
		el.ggParameter={ rx:0,ry:0,a:0,sx:1,sy:1,def:'' };
		el.ggVisible=true;
		el.className="ggskin ggskin_text ";
		el.ggType='text';
		hs ='';
		hs+='background : rgba(255,255,255,0);';
		hs+='border : 0px solid #000000;';
		hs+='border-radius : 25px;';
		hs+='color : #000000;';
		hs+='cursor : default;';
		hs+='height : 40px;';
		hs+='left : calc(50% - ((55px + 0px) / 2) + 1px);';
		hs+='position : absolute;';
		hs+='top : calc(50% - ((40px + 0px) / 2) + 0px);';
		hs+='visibility : inherit;';
		hs+='width : 55px;';
		hs+='pointer-events:auto;';
		hs+='@import url(\"https:\/\/fonts.googleapis.com\/css2?family=Nanum+Gothic:wght@400;700&display=swap\"); font-family: \"Nanum Gothic\", sans-serif;';
		el.setAttribute('style',hs);
		el.style.transformOrigin='50% 50%';
		hs ='';
		hs += 'box-sizing: border-box;';
		hs+='cursor: default;';
		hs+='width: 100%;';
		hs+='height: auto;';
		hs+='max-height: 100%;';
		hs+='font-size: 12px;';
		hs+='font-weight: 500;';
		hs+='text-align: center;';
		hs+='position: absolute;';
		hs+='top: 50%;';
		hs+='transform: translate(0, -50%);';
		hs+='white-space: pre;';
		hs+='padding: 6px;';
		hs+='overflow: hidden;';
		els.setAttribute('style',hs);
		me.__74b.ggUpdateText=function() {
			var params = [];
			var hs = player._("38A", params);
			if (hs!=this.ggText) {
				this.ggText=hs;
				this.ggTextDiv.innerHTML=hs;
				if (this.ggUpdatePosition) this.ggUpdatePosition();
			}
		}
		me.__74b.ggUpdateText();
		el.appendChild(els);
		me.__74b.ggIsActive=function() {
			if ((this.parentNode) && (this.parentNode.ggIsActive)) {
				return this.parentNode.ggIsActive();
			}
			return false;
		}
		el.ggElementNodeId=function() {
			if ((this.parentNode) && (this.parentNode.ggElementNodeId)) {
				return this.parentNode.ggElementNodeId();
			}
			return player.getCurrentNode();
		}
		me.__74b.logicBlock_backgroundcolor = function() {
			var newLogicStateBackgroundColor;
			if (
				((me.ggUserdata.tags.indexOf("38A") != -1))
			)
			{
				newLogicStateBackgroundColor = 0;
			}
			else {
				newLogicStateBackgroundColor = -1;
			}
			if (me.__74b.ggCurrentLogicStateBackgroundColor != newLogicStateBackgroundColor) {
				me.__74b.ggCurrentLogicStateBackgroundColor = newLogicStateBackgroundColor;
				me.__74b.style.transition='background-color 0s';
				if (me.__74b.ggCurrentLogicStateBackgroundColor == 0) {
					me.__74b.style.backgroundColor="rgba(255,255,255,1)";
				}
				else {
					me.__74b.style.backgroundColor="rgba(255,255,255,0)";
				}
			}
		}
		me.__74b.logicBlock_backgroundcolor();
		me.__74b.onclick=function (e) {
			player.openNext("{node21}","");
		}
		me.__74b.ggUpdatePosition=function (useTransition) {
		}
		me.__34.appendChild(me.__74b);
		el=me.__84a=document.createElement('div');
		els=me.__84a__text=document.createElement('div');
		el.className='ggskin ggskin_textdiv';
		el.ggTextDiv=els;
		el.ggId="84A";
		el.ggDy=0;
		el.ggParameter={ rx:0,ry:0,a:0,sx:1,sy:1,def:'' };
		el.ggVisible=true;
		el.className="ggskin ggskin_text ";
		el.ggType='text';
		hs ='';
		hs+='background : rgba(255,255,255,0);';
		hs+='border : 0px solid #000000;';
		hs+='border-radius : 25px;';
		hs+='color : #000000;';
		hs+='cursor : default;';
		hs+='height : 40px;';
		hs+='position : absolute;';
		hs+='right : 20px;';
		hs+='top : calc(50% - ((40px + 0px) / 2) + 0px);';
		hs+='visibility : inherit;';
		hs+='width : 55px;';
		hs+='pointer-events:auto;';
		hs+='@import url(\"https:\/\/fonts.googleapis.com\/css2?family=Nanum+Gothic:wght@400;700&display=swap\"); font-family: \"Nanum Gothic\", sans-serif;';
		el.setAttribute('style',hs);
		el.style.transformOrigin='50% 50%';
		hs ='';
		hs += 'box-sizing: border-box;';
		hs+='cursor: default;';
		hs+='width: 100%;';
		hs+='height: auto;';
		hs+='max-height: 100%;';
		hs+='font-size: 12px;';
		hs+='font-weight: 500;';
		hs+='text-align: center;';
		hs+='position: absolute;';
		hs+='top: 50%;';
		hs+='transform: translate(0, -50%);';
		hs+='white-space: pre;';
		hs+='padding: 6px;';
		hs+='overflow: hidden;';
		els.setAttribute('style',hs);
		me.__84a.ggUpdateText=function() {
			var params = [];
			var hs = player._("38C", params);
			if (hs!=this.ggText) {
				this.ggText=hs;
				this.ggTextDiv.innerHTML=hs;
				if (this.ggUpdatePosition) this.ggUpdatePosition();
			}
		}
		me.__84a.ggUpdateText();
		el.appendChild(els);
		me.__84a.ggIsActive=function() {
			if ((this.parentNode) && (this.parentNode.ggIsActive)) {
				return this.parentNode.ggIsActive();
			}
			return false;
		}
		el.ggElementNodeId=function() {
			if ((this.parentNode) && (this.parentNode.ggElementNodeId)) {
				return this.parentNode.ggElementNodeId();
			}
			return player.getCurrentNode();
		}
		me.__84a.logicBlock_position = function() {
			var newLogicStatePosition;
			if (
				((player.getViewerSize().width <= 460))
			)
			{
				newLogicStatePosition = 0;
			}
			else if (
				((player.getIsMobile() == true))
			)
			{
				newLogicStatePosition = 1;
			}
			else {
				newLogicStatePosition = -1;
			}
			if (me.__84a.ggCurrentLogicStatePosition != newLogicStatePosition) {
				me.__84a.ggCurrentLogicStatePosition = newLogicStatePosition;
				me.__84a.style.transition='right 0s, top 0s, background-color 0s';
				if (me.__84a.ggCurrentLogicStatePosition == 0) {
					me.__84a.style.right='10px';
					me.__84a.style.top = 'calc(50% - (40px / 2))';
				}
				else if (me.__84a.ggCurrentLogicStatePosition == 1) {
					me.__84a.style.right='10px';
					me.__84a.style.top = 'calc(50% - (40px / 2))';
				}
				else {
					me.__84a.style.right='20px';
					me.__84a.style.top='calc(50% - ((40px + 0px) / 2) + 0px)';
				}
			}
		}
		me.__84a.logicBlock_position();
		me.__84a.logicBlock_backgroundcolor = function() {
			var newLogicStateBackgroundColor;
			if (
				((me.ggUserdata.tags.indexOf("38C") != -1))
			)
			{
				newLogicStateBackgroundColor = 0;
			}
			else {
				newLogicStateBackgroundColor = -1;
			}
			if (me.__84a.ggCurrentLogicStateBackgroundColor != newLogicStateBackgroundColor) {
				me.__84a.ggCurrentLogicStateBackgroundColor = newLogicStateBackgroundColor;
				me.__84a.style.transition='right 0s, top 0s, background-color 0s';
				if (me.__84a.ggCurrentLogicStateBackgroundColor == 0) {
					me.__84a.style.backgroundColor="rgba(255,255,255,1)";
				}
				else {
					me.__84a.style.backgroundColor="rgba(255,255,255,0)";
				}
			}
		}
		me.__84a.logicBlock_backgroundcolor();
		me.__84a.ggUpdatePosition=function (useTransition) {
		}
		me.__34.appendChild(me.__84a);
		me.__33.appendChild(me.__34);
		el=me._container_2=document.createElement('div');
		el.ggId="Container 2";
		el.ggParameter={ rx:0,ry:0,a:0,sx:1,sy:1,def:'' };
		el.ggVisible=true;
		el.className="ggskin ggskin_container ";
		el.ggType='container';
		hs ='';
		hs+='height : 54px;';
		hs+='left : 45px;';
		hs+='position : absolute;';
		hs+='top : 0px;';
		hs+='visibility : inherit;';
		hs+='width : 208px;';
		hs+='pointer-events:none;';
		el.setAttribute('style',hs);
		el.style.transformOrigin='50% 50%';
		me._container_2.ggIsActive=function() {
			if ((this.parentNode) && (this.parentNode.ggIsActive)) {
				return this.parentNode.ggIsActive();
			}
			return false;
		}
		el.ggElementNodeId=function() {
			if ((this.parentNode) && (this.parentNode.ggElementNodeId)) {
				return this.parentNode.ggElementNodeId();
			}
			return player.getCurrentNode();
		}
		me._container_2.logicBlock_position = function() {
			var newLogicStatePosition;
			if (
				((player.getViewerSize().width <= 460))
			)
			{
				newLogicStatePosition = 0;
			}
			else {
				newLogicStatePosition = -1;
			}
			if (me._container_2.ggCurrentLogicStatePosition != newLogicStatePosition) {
				me._container_2.ggCurrentLogicStatePosition = newLogicStatePosition;
				me._container_2.style.transition='left 0s, top 0s';
				if (me._container_2.ggCurrentLogicStatePosition == 0) {
					me._container_2.style.left='0px';
					me._container_2.style.top='0px';
				}
				else {
					me._container_2.style.left='45px';
					me._container_2.style.top='0px';
				}
			}
		}
		me._container_2.logicBlock_position();
		me._container_2.ggUpdatePosition=function (useTransition) {
		}
		el=me._container_1=document.createElement('div');
		el.ggId="Container 1";
		el.ggDx=0;
		el.ggDy=0;
		el.ggParameter={ rx:0,ry:0,a:0,sx:1,sy:1,def:'' };
		el.ggVisible=true;
		el.className="ggskin ggskin_container ";
		el.ggType='container';
		hs ='';
		hs+='height : 100%;';
		hs+='left : calc(50% - ((75% + 0px) / 2) + 0%);';
		hs+='position : absolute;';
		hs+='top : calc(50% - ((100% + 0px) / 2) + 0px);';
		hs+='visibility : inherit;';
		hs+='width : 75%;';
		hs+='pointer-events:none;';
		el.setAttribute('style',hs);
		el.style.transformOrigin='50% 50%';
		me._container_1.ggIsActive=function() {
			if ((this.parentNode) && (this.parentNode.ggIsActive)) {
				return this.parentNode.ggIsActive();
			}
			return false;
		}
		el.ggElementNodeId=function() {
			if ((this.parentNode) && (this.parentNode.ggElementNodeId)) {
				return this.parentNode.ggElementNodeId();
			}
			return player.getCurrentNode();
		}
		me._container_1.ggUpdatePosition=function (useTransition) {
		}
		el=me._image_1=document.createElement('div');
		els=me._image_1__img=document.createElement('img');
		els.className='ggskin ggskin_image_1';
		hs='data:image/png;base64,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';
		els.setAttribute('src',hs);
		els.ggNormalSrc=hs;
		hs ='';
		hs += 'position: absolute;top: 0px;left: 0px;width: 100%;height: 100%;-webkit-user-drag:none;pointer-events:none;;';
		els.setAttribute('style', hs);
		els.className='ggskin ggskin_image';
		els['ondragstart']=function() { return false; };
		player.checkLoaded.push(els);
		el.appendChild(els);
		el.ggSubElement = els;
		el.ggId="Image 1";
		el.ggDx=0;
		el.ggDy=0;
		el.ggParameter={ rx:0,ry:0,a:0,sx:0.7,sy:0.7,def:'' };
		el.ggVisible=true;
		el.className="ggskin ggskin_image ";
		el.ggType='image';
		hs ='';
		hs+='height : 100%;';
		hs+='left : calc(50% - ((100% + 0px) / 2) + 0px);';
		hs+='position : absolute;';
		hs+='top : calc(50% - ((100% + 0px) / 2) + 0px);';
		hs+='visibility : inherit;';
		hs+='width : 100%;';
		hs+='pointer-events:auto;';
		el.setAttribute('style',hs);
		el.style.transformOrigin='50% 50%';
		el.style.transform=parameterToTransform(el.ggParameter);
		me._image_1.ggIsActive=function() {
			if ((this.parentNode) && (this.parentNode.ggIsActive)) {
				return this.parentNode.ggIsActive();
			}
			return false;
		}
		el.ggElementNodeId=function() {
			if ((this.parentNode) && (this.parentNode.ggElementNodeId)) {
				return this.parentNode.ggElementNodeId();
			}
			return player.getCurrentNode();
		}
		me._image_1.ggUpdatePosition=function (useTransition) {
		}
		me._container_1.appendChild(me._image_1);
		me._container_2.appendChild(me._container_1);
		me.__33.appendChild(me._container_2);
		me.__29.appendChild(me.__33);
		me.divSkin.appendChild(me.__29);
		el=me.__26=document.createElement('div');
		el.ggId="\ubbf8\ub2c8\ub9f5";
		el.ggParameter={ rx:0,ry:0,a:0,sx:1,sy:1,def:'' };
		el.ggVisible=true;
		el.className="ggskin ggskin_container ";
		el.ggType='container';
		hs ='';
		hs+='height : 190px;';
		hs+='left : 15px;';
		hs+='position : absolute;';
		hs+='top : 65px;';
		hs+='visibility : inherit;';
		hs+='width : 200px;';
		hs+='pointer-events:none;';
		el.setAttribute('style',hs);
		el.style.transformOrigin='50% 50%';
		me.__26.ggIsActive=function() {
			return false;
		}
		el.ggElementNodeId=function() {
			return player.getCurrentNode();
		}
		me.__26.logicBlock_position = function() {
			var newLogicStatePosition;
			if (
				((player.getViewerSize().width <= 460))
			)
			{
				newLogicStatePosition = 0;
			}
			else {
				newLogicStatePosition = -1;
			}
			if (me.__26.ggCurrentLogicStatePosition != newLogicStatePosition) {
				me.__26.ggCurrentLogicStatePosition = newLogicStatePosition;
				me.__26.style.transition='left 0s, top 0s, width 0s, height 0s, transform 0s';
				if (me.__26.ggCurrentLogicStatePosition == 0) {
					me.__26.style.left='10px';
					me.__26.style.top='45px';
				}
				else {
					me.__26.style.left='15px';
					me.__26.style.top='65px';
				}
			}
		}
		me.__26.logicBlock_position();
		me.__26.logicBlock_size = function() {
			var newLogicStateSize;
			if (
				((player.getViewerSize().width <= 420))
			)
			{
				newLogicStateSize = 0;
			}
			else if (
				((player.getViewerSize().width <= 670))
			)
			{
				newLogicStateSize = 1;
			}
			else {
				newLogicStateSize = -1;
			}
			if (me.__26.ggCurrentLogicStateSize != newLogicStateSize) {
				me.__26.ggCurrentLogicStateSize = newLogicStateSize;
				me.__26.style.transition='left 0s, top 0s, width 0s, height 0s, transform 0s';
				if (me.__26.ggCurrentLogicStateSize == 0) {
					me.__26.style.width='110px';
					me.__26.style.height='100px';
					skin.updateSize(me.__26);
				}
				else if (me.__26.ggCurrentLogicStateSize == 1) {
					me.__26.style.width='160px';
					me.__26.style.height='150px';
					skin.updateSize(me.__26);
				}
				else {
					me.__26.style.width='200px';
					me.__26.style.height='190px';
					skin.updateSize(me.__26);
				}
			}
		}
		me.__26.logicBlock_size();
		me.__26.logicBlock_scaling = function() {
			var newLogicStateScaling;
			if (
				((player.getViewerSize().width <= 460))
			)
			{
				newLogicStateScaling = 0;
			}
			else {
				newLogicStateScaling = -1;
			}
			if (me.__26.ggCurrentLogicStateScaling != newLogicStateScaling) {
				me.__26.ggCurrentLogicStateScaling = newLogicStateScaling;
				me.__26.style.transition='left 0s, top 0s, width 0s, height 0s, transform 0s';
				if (me.__26.ggCurrentLogicStateScaling == 0) {
					me.__26.ggParameter.sx = 0.85;
					me.__26.ggParameter.sy = 0.8;
					me.__26.style.transform=parameterToTransform(me.__26.ggParameter);
					skin.updateSize(me.__26);
				}
				else {
					me.__26.ggParameter.sx = 1;
					me.__26.ggParameter.sy = 1;
					me.__26.style.transform=parameterToTransform(me.__26.ggParameter);
					skin.updateSize(me.__26);
				}
			}
		}
		me.__26.logicBlock_scaling();
		me.__26.logicBlock_visible = function() {
			var newLogicStateVisible;
			if (
				((player.getViewerSize().width <= 460))
			)
			{
				newLogicStateVisible = 0;
			}
			else if (
				((player.getIsMobile() == true))
			)
			{
				newLogicStateVisible = 1;
			}
			else {
				newLogicStateVisible = -1;
			}
			if (me.__26.ggCurrentLogicStateVisible != newLogicStateVisible) {
				me.__26.ggCurrentLogicStateVisible = newLogicStateVisible;
				me.__26.style.transition='left 0s, top 0s, width 0s, height 0s, transform 0s';
				if (me.__26.ggCurrentLogicStateVisible == 0) {
					me.__26.style.visibility="hidden";
					me.__26.ggVisible=false;
				}
				else if (me.__26.ggCurrentLogicStateVisible == 1) {
					me.__26.style.visibility="hidden";
					me.__26.ggVisible=false;
				}
				else {
					me.__26.style.visibility=(Number(me.__26.style.opacity)>0||!me.__26.style.opacity)?'inherit':'hidden';
					me.__26.ggVisible=true;
				}
			}
		}
		me.__26.logicBlock_visible();
		me.__26.ggUpdatePosition=function (useTransition) {
		}
		el=me.__27=document.createElement('div');
		el.ggId="\ubbf8\ub2c8\ub9f5\ubc30\uacbd";
		el.ggParameter={ rx:0,ry:0,a:0,sx:1,sy:1,def:'' };
		el.ggVisible=true;
		el.className="ggskin ggskin_rectangle ";
		el.ggType='rectangle';
		hs ='';
		hs+='background : rgba(255,255,255,0.470588);';
		hs+='border : 0px solid #000000;';
		hs+='border-radius : 20px;';
		hs+='cursor : default;';
		hs+='height : 100%;';
		hs+='left : 0px;';
		hs+='position : absolute;';
		hs+='top : 0px;';
		hs+='visibility : inherit;';
		hs+='width : 100%;';
		hs+='pointer-events:auto;';
		el.setAttribute('style',hs);
		el.style.transformOrigin='50% 50%';
		me.__27.ggIsActive=function() {
			if ((this.parentNode) && (this.parentNode.ggIsActive)) {
				return this.parentNode.ggIsActive();
			}
			return false;
		}
		el.ggElementNodeId=function() {
			if ((this.parentNode) && (this.parentNode.ggElementNodeId)) {
				return this.parentNode.ggElementNodeId();
			}
			return player.getCurrentNode();
		}
		me.__27.ggUpdatePosition=function (useTransition) {
		}
		el=me._rectangle_40=document.createElement('div');
		el.ggId="Rectangle 4";
		el.ggDx=0;
		el.ggParameter={ rx:0,ry:0,a:0,sx:1,sy:1,def:'' };
		el.ggVisible=true;
		el.className="ggskin ggskin_rectangle ";
		el.ggType='rectangle';
		hs ='';
		hs+='background : #ffffff;';
		hs+='border : 0px solid #000000;';
		hs+='border-radius : 35px;';
		hs+='bottom : -15px;';
		hs+='cursor : default;';
		hs+='height : 40px;';
		hs+='left : calc(50% - ((100px + 0px) / 2) + 0px);';
		hs+='position : absolute;';
		hs+='visibility : inherit;';
		hs+='width : 100px;';
		hs+='pointer-events:auto;';
		el.setAttribute('style',hs);
		el.style.transformOrigin='50% 50%';
		me._rectangle_40.ggIsActive=function() {
			if ((this.parentNode) && (this.parentNode.ggIsActive)) {
				return this.parentNode.ggIsActive();
			}
			return false;
		}
		el.ggElementNodeId=function() {
			if ((this.parentNode) && (this.parentNode.ggElementNodeId)) {
				return this.parentNode.ggElementNodeId();
			}
			return player.getCurrentNode();
		}
		me._rectangle_40.logicBlock_size = function() {
			var newLogicStateSize;
			if (
				((player.getViewerSize().width <= 460))
			)
			{
				newLogicStateSize = 0;
			}
			else {
				newLogicStateSize = -1;
			}
			if (me._rectangle_40.ggCurrentLogicStateSize != newLogicStateSize) {
				me._rectangle_40.ggCurrentLogicStateSize = newLogicStateSize;
				me._rectangle_40.style.transition='width 0s, height 0s';
				if (me._rectangle_40.ggCurrentLogicStateSize == 0) {
					me._rectangle_40.style.width='65px';
					me._rectangle_40.style.height='30px';
					me._rectangle_40.style.left = 'calc(50% - (65px / 2))';
					skin.updateSize(me._rectangle_40);
				}
				else {
					me._rectangle_40.style.width='100px';
					me._rectangle_40.style.height='40px';
					me._rectangle_40.style.left = 'calc(50% - (100px / 2))';
					skin.updateSize(me._rectangle_40);
				}
			}
		}
		me._rectangle_40.logicBlock_size();
		me._rectangle_40.ggUpdatePosition=function (useTransition) {
		}
		el=me.__28=document.createElement('div');
		els=me.__28__text=document.createElement('div');
		el.className='ggskin ggskin_textdiv';
		el.ggTextDiv=els;
		el.ggId="\ubbf8\ub2c8\ub9f5\ud0c0\uc774\ud2c0";
		el.ggDx=0;
		el.ggDy=0;
		el.ggParameter={ rx:0,ry:0,a:0,sx:1,sy:1,def:'' };
		el.ggVisible=true;
		el.className="ggskin ggskin_text ";
		el.ggType='text';
		hs ='';
		hs+='border : 0px solid #000000;';
		hs+='border-radius : 30px;';
		hs+='color : #000000;';
		hs+='cursor : default;';
		hs+='height : 100%;';
		hs+='left : calc(50% - ((100% + 0px) / 2) + 0%);';
		hs+='position : absolute;';
		hs+='top : calc(50% - ((100% + 0px) / 2) + 0px);';
		hs+='visibility : inherit;';
		hs+='width : 100%;';
		hs+='pointer-events:auto;';
		hs+='<link rel=\"preconnect\" href=\"https:\/\/fonts.googleapis.com\"> <link rel=\"preconnect\" href=\"https:\/\/fonts.gstatic.com\" crossorigin> <link href=\"https:\/\/fonts.googleapis.com\/css2?family=Noto+Sans&family=Noto+Sans+Display:wght@500&display=swap\" rel=\"stylesheet\"> font-family: \"Noto Sans\", sans-serif; font-family: \"Noto Sans Display\", sans-serif;';
		el.setAttribute('style',hs);
		el.style.transformOrigin='50% 50%';
		hs ='';
		hs += 'box-sizing: border-box;';
		hs+='cursor: default;';
		hs+='width: 100%;';
		hs+='height: auto;';
		hs+='max-height: 100%;';
		hs+='font-size: 12px;';
		hs+='font-weight: bold;';
		hs+='text-align: center;';
		hs+='position: absolute;';
		hs+='top: 50%;';
		hs+='transform: translate(0, -50%);';
		hs+='white-space: pre;';
		hs+='padding: 7px;';
		hs+='overflow: hidden;';
		els.setAttribute('style',hs);
		me.__28.ggUpdateText=function() {
			var params = [];
			var hs = player._("MINI MAP", params);
			if (hs!=this.ggText) {
				this.ggText=hs;
				this.ggTextDiv.innerHTML=hs;
				if (this.ggUpdatePosition) this.ggUpdatePosition();
			}
		}
		me.__28.ggUpdateText();
		el.appendChild(els);
		me.__28.ggIsActive=function() {
			if ((this.parentNode) && (this.parentNode.ggIsActive)) {
				return this.parentNode.ggIsActive();
			}
			return false;
		}
		el.ggElementNodeId=function() {
			if ((this.parentNode) && (this.parentNode.ggElementNodeId)) {
				return this.parentNode.ggElementNodeId();
			}
			return player.getCurrentNode();
		}
		me.__28.logicBlock_scaling = function() {
			var newLogicStateScaling;
			if (
				((player.getViewerSize().width <= 460))
			)
			{
				newLogicStateScaling = 0;
			}
			else {
				newLogicStateScaling = -1;
			}
			if (me.__28.ggCurrentLogicStateScaling != newLogicStateScaling) {
				me.__28.ggCurrentLogicStateScaling = newLogicStateScaling;
				me.__28.style.transition='transform 0s';
				if (me.__28.ggCurrentLogicStateScaling == 0) {
					me.__28.ggParameter.sx = 0.7;
					me.__28.ggParameter.sy = 0.7;
					me.__28.style.transform=parameterToTransform(me.__28.ggParameter);
					skin.updateSize(me.__28);
				}
				else {
					me.__28.ggParameter.sx = 1;
					me.__28.ggParameter.sy = 1;
					me.__28.style.transform=parameterToTransform(me.__28.ggParameter);
					skin.updateSize(me.__28);
				}
			}
		}
		me.__28.logicBlock_scaling();
		me.__28.ggUpdatePosition=function (useTransition) {
		}
		me._rectangle_40.appendChild(me.__28);
		me.__27.appendChild(me._rectangle_40);
		el=me._map_10=document.createElement('div');
		el.ggFilter = '';
		el.ggFilteredIds = [];
		el.ggMapNotLoaded = true;
		el.ggMapId = 'FloorPlan01';
		el.ggId="Map 1";
		el.ggDx=0;
		el.ggDy=-1;
		el.ggParameter={ rx:0,ry:0,a:0,sx:1,sy:1,def:'' };
		el.ggVisible=false;
		el.className="ggskin ggskin_map ";
		el.ggType='map';
		hs ='';
		hs+='border : 0px solid #000000;';
		hs+='cursor : default;';
		hs+='height : 88%;';
		hs+='left : calc(50% - ((88% + 0px) / 2) + 0px);';
		hs+='overflow : hidden;';
		hs+='position : absolute;';
		hs+='top : calc(50% - ((88% + 0px) / 2) - 1%);';
		hs+='visibility : hidden;';
		hs+='width : 88%;';
		hs+='pointer-events:auto;';
		el.setAttribute('style',hs);
		el.style.transformOrigin='50% 50%';
		me._map_10.ggIsActive=function() {
			if ((this.parentNode) && (this.parentNode.ggIsActive)) {
				return this.parentNode.ggIsActive();
			}
			return false;
		}
		el.ggElementNodeId=function() {
			if ((this.parentNode) && (this.parentNode.ggElementNodeId)) {
				return this.parentNode.ggElementNodeId();
			}
			return player.getCurrentNode();
		}
		me._map_10.logicBlock_visible = function() {
			var newLogicStateVisible;
			if (
				((me.ggUserdata.tags.indexOf("\uac00\uad6c\uc5c6\uc74c") != -1))
			)
			{
				newLogicStateVisible = 0;
			}
			else {
				newLogicStateVisible = -1;
			}
			if (me._map_10.ggCurrentLogicStateVisible != newLogicStateVisible) {
				me._map_10.ggCurrentLogicStateVisible = newLogicStateVisible;
				me._map_10.style.transition='';
				if (me._map_10.ggCurrentLogicStateVisible == 0) {
					me._map_10.style.visibility=(Number(me._map_10.style.opacity)>0||!me._map_10.style.opacity)?'inherit':'hidden';
					if (me._map_10.ggMapNotLoaded && me._map_10.ggInitMap) {
						me._map_10.ggInitMap(false);
						me._map_10.ggInitMapMarkers(true);
					}
					me._map_10.ggVisible=true;
				}
				else {
					me._map_10.style.visibility="hidden";
					if (me._map_10.ggClearMap) me._map_10.ggClearMap();
					me._map_10.ggVisible=false;
				}
			}
		}
		me._map_10.logicBlock_visible();
		me._map_10.ggCurrentLogicStateVisible = -1;
		me._map_10.ggUpdateConditionResize=function () {
			var mapDetails = player.getMapDetails(me._map_10.ggMapId);
			if (mapDetails.hasOwnProperty('title')) {
				me._map_10.ggCalculateFloorplanSize(mapDetails);
				me._map_10.ggShowSimpleFloorplan(mapDetails);
				me._map_10.ggPlaceMarkersOnSimpleFloorplan();
			}
			if (me._map_10.ggRadar) me._map_10.ggRadar.update();
		}
		me._map_10.ggUpdatePosition=function (useTransition) {
			for (var i=0; i < me._map_10.ggMarkerInstances.length; i++) {
				me._map_10.ggMarkerInstances[i].ggEvent_sizechanged();
			}
			me._map_10.ggUpdateConditionResize();
		}
		me.__27.appendChild(me._map_10);
		el=me._map_20=document.createElement('div');
		el.ggFilter = '';
		el.ggFilteredIds = [];
		el.ggMapNotLoaded = true;
		el.ggMapId = 'FloorPlan02';
		el.ggId="Map 2";
		el.ggDx=0;
		el.ggDy=-1;
		el.ggParameter={ rx:0,ry:0,a:0,sx:1,sy:1,def:'' };
		el.ggVisible=false;
		el.className="ggskin ggskin_map ";
		el.ggType='map';
		hs ='';
		hs+='border : 0px solid #000000;';
		hs+='cursor : default;';
		hs+='height : 88%;';
		hs+='left : calc(50% - ((88% + 0px) / 2) + 0px);';
		hs+='overflow : hidden;';
		hs+='position : absolute;';
		hs+='top : calc(50% - ((88% + 0px) / 2) - 1%);';
		hs+='visibility : hidden;';
		hs+='width : 88%;';
		hs+='pointer-events:auto;';
		el.setAttribute('style',hs);
		el.style.transformOrigin='50% 50%';
		me._map_20.ggIsActive=function() {
			if ((this.parentNode) && (this.parentNode.ggIsActive)) {
				return this.parentNode.ggIsActive();
			}
			return false;
		}
		el.ggElementNodeId=function() {
			if ((this.parentNode) && (this.parentNode.ggElementNodeId)) {
				return this.parentNode.ggElementNodeId();
			}
			return player.getCurrentNode();
		}
		me._map_20.logicBlock_visible = function() {
			var newLogicStateVisible;
			if (
				((me.ggUserdata.tags.indexOf("\uac00\uad6c\uc788\uc74c") != -1))
			)
			{
				newLogicStateVisible = 0;
			}
			else {
				newLogicStateVisible = -1;
			}
			if (me._map_20.ggCurrentLogicStateVisible != newLogicStateVisible) {
				me._map_20.ggCurrentLogicStateVisible = newLogicStateVisible;
				me._map_20.style.transition='';
				if (me._map_20.ggCurrentLogicStateVisible == 0) {
					me._map_20.style.visibility=(Number(me._map_20.style.opacity)>0||!me._map_20.style.opacity)?'inherit':'hidden';
					if (me._map_20.ggMapNotLoaded && me._map_20.ggInitMap) {
						me._map_20.ggInitMap(false);
						me._map_20.ggInitMapMarkers(true);
					}
					me._map_20.ggVisible=true;
				}
				else {
					me._map_20.style.visibility="hidden";
					if (me._map_20.ggClearMap) me._map_20.ggClearMap();
					me._map_20.ggVisible=false;
				}
			}
		}
		me._map_20.logicBlock_visible();
		me._map_20.ggCurrentLogicStateVisible = -1;
		me._map_20.ggUpdateConditionResize=function () {
			var mapDetails = player.getMapDetails(me._map_20.ggMapId);
			if (mapDetails.hasOwnProperty('title')) {
				me._map_20.ggCalculateFloorplanSize(mapDetails);
				me._map_20.ggShowSimpleFloorplan(mapDetails);
				me._map_20.ggPlaceMarkersOnSimpleFloorplan();
			}
			if (me._map_20.ggRadar) me._map_20.ggRadar.update();
		}
		me._map_20.ggUpdatePosition=function (useTransition) {
			for (var i=0; i < me._map_20.ggMarkerInstances.length; i++) {
				me._map_20.ggMarkerInstances[i].ggEvent_sizechanged();
			}
			me._map_20.ggUpdateConditionResize();
		}
		me.__27.appendChild(me._map_20);
		me.__26.appendChild(me.__27);
		me.divSkin.appendChild(me.__26);
		el=me.__23=document.createElement('div');
		el.ggId="\ubbf8\ub2c8\ub9f5-\ubaa8\ubc14\uc77c";
		el.ggParameter={ rx:0,ry:0,a:0,sx:1,sy:1,def:'' };
		el.ggVisible=false;
		el.className="ggskin ggskin_container ";
		el.ggType='container';
		hs ='';
		hs+='bottom : -10px;';
		hs+='height : 118px;';
		hs+='left : 5px;';
		hs+='position : absolute;';
		hs+='visibility : hidden;';
		hs+='width : 130px;';
		hs+='pointer-events:none;';
		el.setAttribute('style',hs);
		el.style.transformOrigin='50% 50%';
		me.__23.ggIsActive=function() {
			return false;
		}
		el.ggElementNodeId=function() {
			return player.getCurrentNode();
		}
		me.__23.logicBlock_position = function() {
			var newLogicStatePosition;
			if (
				((player.getVariableValue('vis_mobilemap') == true))
			)
			{
				newLogicStatePosition = 0;
			}
			else {
				newLogicStatePosition = -1;
			}
			if (me.__23.ggCurrentLogicStatePosition != newLogicStatePosition) {
				me.__23.ggCurrentLogicStatePosition = newLogicStatePosition;
				me.__23.style.transition='left 500ms ease 0ms, bottom 500ms ease 0ms, transform 0s';
				if (me.__23.ggCurrentLogicStatePosition == 0) {
					me.__23.style.left='5px';
					me.__23.style.bottom='-120px';
				}
				else {
					me.__23.style.left='5px';
					me.__23.style.bottom='-10px';
				}
			}
		}
		me.__23.logicBlock_position();
		me.__23.logicBlock_scaling = function() {
			var newLogicStateScaling;
			if (
				((player.getViewerSize().width <= 460))
			)
			{
				newLogicStateScaling = 0;
			}
			else {
				newLogicStateScaling = -1;
			}
			if (me.__23.ggCurrentLogicStateScaling != newLogicStateScaling) {
				me.__23.ggCurrentLogicStateScaling = newLogicStateScaling;
				me.__23.style.transition='left 500ms ease 0ms, bottom 500ms ease 0ms, transform 0s';
				if (me.__23.ggCurrentLogicStateScaling == 0) {
					me.__23.ggParameter.sx = 0.85;
					me.__23.ggParameter.sy = 0.8;
					me.__23.style.transform=parameterToTransform(me.__23.ggParameter);
					skin.updateSize(me.__23);
				}
				else {
					me.__23.ggParameter.sx = 1;
					me.__23.ggParameter.sy = 1;
					me.__23.style.transform=parameterToTransform(me.__23.ggParameter);
					skin.updateSize(me.__23);
				}
			}
		}
		me.__23.logicBlock_scaling();
		me.__23.logicBlock_visible = function() {
			var newLogicStateVisible;
			if (
				((player.getViewerSize().width <= 460))
			)
			{
				newLogicStateVisible = 0;
			}
			else if (
				((player.getIsMobile() == true))
			)
			{
				newLogicStateVisible = 1;
			}
			else {
				newLogicStateVisible = -1;
			}
			if (me.__23.ggCurrentLogicStateVisible != newLogicStateVisible) {
				me.__23.ggCurrentLogicStateVisible = newLogicStateVisible;
				me.__23.style.transition='left 500ms ease 0ms, bottom 500ms ease 0ms, transform 0s';
				if (me.__23.ggCurrentLogicStateVisible == 0) {
					me.__23.style.visibility=(Number(me.__23.style.opacity)>0||!me.__23.style.opacity)?'inherit':'hidden';
					me.__23.ggVisible=true;
				}
				else if (me.__23.ggCurrentLogicStateVisible == 1) {
					me.__23.style.visibility=(Number(me.__23.style.opacity)>0||!me.__23.style.opacity)?'inherit':'hidden';
					me.__23.ggVisible=true;
				}
				else {
					me.__23.style.visibility="hidden";
					me.__23.ggVisible=false;
				}
			}
		}
		me.__23.logicBlock_visible();
		me.__23.ggUpdatePosition=function (useTransition) {
		}
		el=me.__24=document.createElement('div');
		el.ggId="\ubbf8\ub2c8\ub9f5\ubc30\uacbd-\ubaa8\ubc14\uc77c";
		el.ggParameter={ rx:0,ry:0,a:0,sx:1,sy:1,def:'' };
		el.ggVisible=true;
		el.className="ggskin ggskin_rectangle ";
		el.ggType='rectangle';
		hs ='';
		hs+='background : rgba(255,255,255,0.470588);';
		hs+='border : 0px solid #000000;';
		hs+='border-radius : 20px 20px 0px 0px;';
		hs+='cursor : default;';
		hs+='height : 100%;';
		hs+='left : 0px;';
		hs+='position : absolute;';
		hs+='top : 0px;';
		hs+='visibility : inherit;';
		hs+='width : 100%;';
		hs+='pointer-events:auto;';
		el.setAttribute('style',hs);
		el.style.transformOrigin='50% 50%';
		me.__24.ggIsActive=function() {
			if ((this.parentNode) && (this.parentNode.ggIsActive)) {
				return this.parentNode.ggIsActive();
			}
			return false;
		}
		el.ggElementNodeId=function() {
			if ((this.parentNode) && (this.parentNode.ggElementNodeId)) {
				return this.parentNode.ggElementNodeId();
			}
			return player.getCurrentNode();
		}
		me.__24.ggUpdatePosition=function (useTransition) {
		}
		el=me._rectangle_4=document.createElement('div');
		el.ggId="Rectangle 4-\ubaa8\ubc14\uc77c";
		el.ggDx=0;
		el.ggParameter={ rx:0,ry:0,a:0,sx:1,sy:1,def:'' };
		el.ggVisible=true;
		el.className="ggskin ggskin_rectangle ";
		el.ggType='rectangle';
		hs ='';
		hs+='background : #ffffff;';
		hs+='border : 0px solid #000000;';
		hs+='border-radius : 35px;';
		hs+='cursor : default;';
		hs+='height : 40px;';
		hs+='left : calc(50% - ((100px + 0px) / 2) + 0px);';
		hs+='position : absolute;';
		hs+='top : -15px;';
		hs+='visibility : inherit;';
		hs+='width : 100px;';
		hs+='pointer-events:auto;';
		el.setAttribute('style',hs);
		el.style.transformOrigin='50% 50%';
		me._rectangle_4.ggIsActive=function() {
			if ((this.parentNode) && (this.parentNode.ggIsActive)) {
				return this.parentNode.ggIsActive();
			}
			return false;
		}
		el.ggElementNodeId=function() {
			if ((this.parentNode) && (this.parentNode.ggElementNodeId)) {
				return this.parentNode.ggElementNodeId();
			}
			return player.getCurrentNode();
		}
		me._rectangle_4.logicBlock_size = function() {
			var newLogicStateSize;
			if (
				((player.getViewerSize().width <= 460))
			)
			{
				newLogicStateSize = 0;
			}
			else {
				newLogicStateSize = -1;
			}
			if (me._rectangle_4.ggCurrentLogicStateSize != newLogicStateSize) {
				me._rectangle_4.ggCurrentLogicStateSize = newLogicStateSize;
				me._rectangle_4.style.transition='width 0s, height 0s';
				if (me._rectangle_4.ggCurrentLogicStateSize == 0) {
					me._rectangle_4.style.width='65px';
					me._rectangle_4.style.height='30px';
					me._rectangle_4.style.left = 'calc(50% - (65px / 2))';
					skin.updateSize(me._rectangle_4);
				}
				else {
					me._rectangle_4.style.width='100px';
					me._rectangle_4.style.height='40px';
					me._rectangle_4.style.left = 'calc(50% - (100px / 2))';
					skin.updateSize(me._rectangle_4);
				}
			}
		}
		me._rectangle_4.logicBlock_size();
		me._rectangle_4.ggUpdatePosition=function (useTransition) {
		}
		el=me.__25=document.createElement('div');
		els=me.__25__text=document.createElement('div');
		el.className='ggskin ggskin_textdiv';
		el.ggTextDiv=els;
		el.ggId="\ubbf8\ub2c8\ub9f5\ud0c0\uc774\ud2c0-\ubaa8\ubc14\uc77c";
		el.ggDx=0;
		el.ggDy=0;
		el.ggParameter={ rx:0,ry:0,a:0,sx:1,sy:1,def:'' };
		el.ggVisible=true;
		el.className="ggskin ggskin_text ";
		el.ggType='text';
		hs ='';
		hs+='border : 0px solid #000000;';
		hs+='border-radius : 30px;';
		hs+='color : #000000;';
		hs+='cursor : default;';
		hs+='height : 100%;';
		hs+='left : calc(50% - ((100% + 0px) / 2) + 0%);';
		hs+='position : absolute;';
		hs+='top : calc(50% - ((100% + 0px) / 2) + 0px);';
		hs+='visibility : inherit;';
		hs+='width : 100%;';
		hs+='pointer-events:auto;';
		hs+='<link rel=\"preconnect\" href=\"https:\/\/fonts.googleapis.com\"> <link rel=\"preconnect\" href=\"https:\/\/fonts.gstatic.com\" crossorigin> <link href=\"https:\/\/fonts.googleapis.com\/css2?family=Noto+Sans&family=Noto+Sans+Display:wght@500&display=swap\" rel=\"stylesheet\"> font-family: \"Noto Sans\", sans-serif; font-family: \"Noto Sans Display\", sans-serif;';
		el.setAttribute('style',hs);
		el.style.transformOrigin='50% 50%';
		hs ='';
		hs += 'box-sizing: border-box;';
		hs+='cursor: default;';
		hs+='width: 100%;';
		hs+='height: auto;';
		hs+='max-height: 100%;';
		hs+='font-size: 12px;';
		hs+='font-weight: bold;';
		hs+='text-align: center;';
		hs+='position: absolute;';
		hs+='top: 50%;';
		hs+='transform: translate(0, -50%);';
		hs+='white-space: pre;';
		hs+='padding: 7px;';
		hs+='overflow: hidden;';
		els.setAttribute('style',hs);
		me.__25.ggUpdateText=function() {
			var params = [];
			var hs = player._("MINI MAP", params);
			if (hs!=this.ggText) {
				this.ggText=hs;
				this.ggTextDiv.innerHTML=hs;
				if (this.ggUpdatePosition) this.ggUpdatePosition();
			}
		}
		me.__25.ggUpdateText();
		el.appendChild(els);
		me.__25.ggIsActive=function() {
			if ((this.parentNode) && (this.parentNode.ggIsActive)) {
				return this.parentNode.ggIsActive();
			}
			return false;
		}
		el.ggElementNodeId=function() {
			if ((this.parentNode) && (this.parentNode.ggElementNodeId)) {
				return this.parentNode.ggElementNodeId();
			}
			return player.getCurrentNode();
		}
		me.__25.logicBlock_scaling = function() {
			var newLogicStateScaling;
			if (
				((player.getViewerSize().width <= 460))
			)
			{
				newLogicStateScaling = 0;
			}
			else {
				newLogicStateScaling = -1;
			}
			if (me.__25.ggCurrentLogicStateScaling != newLogicStateScaling) {
				me.__25.ggCurrentLogicStateScaling = newLogicStateScaling;
				me.__25.style.transition='transform 0s';
				if (me.__25.ggCurrentLogicStateScaling == 0) {
					me.__25.ggParameter.sx = 0.7;
					me.__25.ggParameter.sy = 0.7;
					me.__25.style.transform=parameterToTransform(me.__25.ggParameter);
					skin.updateSize(me.__25);
				}
				else {
					me.__25.ggParameter.sx = 1;
					me.__25.ggParameter.sy = 1;
					me.__25.style.transform=parameterToTransform(me.__25.ggParameter);
					skin.updateSize(me.__25);
				}
			}
		}
		me.__25.logicBlock_scaling();
		me.__25.ggUpdatePosition=function (useTransition) {
		}
		me._rectangle_4.appendChild(me.__25);
		me.__24.appendChild(me._rectangle_4);
		el=me._map_1=document.createElement('div');
		el.ggFilter = '';
		el.ggFilteredIds = [];
		el.ggMapNotLoaded = true;
		el.ggMapId = 'FloorPlan01';
		el.ggId="Map 1-\ubaa8\ubc14\uc77c";
		el.ggDx=0;
		el.ggDy=1;
		el.ggParameter={ rx:0,ry:0,a:0,sx:1,sy:1,def:'' };
		el.ggVisible=false;
		el.className="ggskin ggskin_map ";
		el.ggType='map';
		hs ='';
		hs+='border : 0px solid #000000;';
		hs+='cursor : default;';
		hs+='height : 88%;';
		hs+='left : calc(50% - ((88% + 0px) / 2) + 0px);';
		hs+='overflow : hidden;';
		hs+='position : absolute;';
		hs+='top : calc(50% - ((88% + 0px) / 2) + 1%);';
		hs+='visibility : hidden;';
		hs+='width : 88%;';
		hs+='pointer-events:auto;';
		el.setAttribute('style',hs);
		el.style.transformOrigin='50% 50%';
		me._map_1.ggIsActive=function() {
			if ((this.parentNode) && (this.parentNode.ggIsActive)) {
				return this.parentNode.ggIsActive();
			}
			return false;
		}
		el.ggElementNodeId=function() {
			if ((this.parentNode) && (this.parentNode.ggElementNodeId)) {
				return this.parentNode.ggElementNodeId();
			}
			return player.getCurrentNode();
		}
		me._map_1.logicBlock_visible = function() {
			var newLogicStateVisible;
			if (
				((me.ggUserdata.tags.indexOf("\uac00\uad6c\uc5c6\uc74c") != -1))
			)
			{
				newLogicStateVisible = 0;
			}
			else {
				newLogicStateVisible = -1;
			}
			if (me._map_1.ggCurrentLogicStateVisible != newLogicStateVisible) {
				me._map_1.ggCurrentLogicStateVisible = newLogicStateVisible;
				me._map_1.style.transition='';
				if (me._map_1.ggCurrentLogicStateVisible == 0) {
					me._map_1.style.visibility=(Number(me._map_1.style.opacity)>0||!me._map_1.style.opacity)?'inherit':'hidden';
					if (me._map_1.ggMapNotLoaded && me._map_1.ggInitMap) {
						me._map_1.ggInitMap(false);
						me._map_1.ggInitMapMarkers(true);
					}
					me._map_1.ggVisible=true;
				}
				else {
					me._map_1.style.visibility="hidden";
					if (me._map_1.ggClearMap) me._map_1.ggClearMap();
					me._map_1.ggVisible=false;
				}
			}
		}
		me._map_1.logicBlock_visible();
		me._map_1.ggCurrentLogicStateVisible = -1;
		me._map_1.ggUpdateConditionResize=function () {
			var mapDetails = player.getMapDetails(me._map_1.ggMapId);
			if (mapDetails.hasOwnProperty('title')) {
				me._map_1.ggCalculateFloorplanSize(mapDetails);
				me._map_1.ggShowSimpleFloorplan(mapDetails);
				me._map_1.ggPlaceMarkersOnSimpleFloorplan();
			}
			if (me._map_1.ggRadar) me._map_1.ggRadar.update();
		}
		me._map_1.ggUpdatePosition=function (useTransition) {
			for (var i=0; i < me._map_1.ggMarkerInstances.length; i++) {
				me._map_1.ggMarkerInstances[i].ggEvent_sizechanged();
			}
			me._map_1.ggUpdateConditionResize();
		}
		me.__24.appendChild(me._map_1);
		el=me._map_2=document.createElement('div');
		el.ggFilter = '';
		el.ggFilteredIds = [];
		el.ggMapNotLoaded = true;
		el.ggMapId = 'FloorPlan02';
		el.ggId="Map 2-\ubaa8\ubc14\uc77c";
		el.ggDx=0;
		el.ggDy=1;
		el.ggParameter={ rx:0,ry:0,a:0,sx:1,sy:1,def:'' };
		el.ggVisible=false;
		el.className="ggskin ggskin_map ";
		el.ggType='map';
		hs ='';
		hs+='border : 0px solid #000000;';
		hs+='cursor : default;';
		hs+='height : 88%;';
		hs+='left : calc(50% - ((88% + 0px) / 2) + 0px);';
		hs+='overflow : hidden;';
		hs+='position : absolute;';
		hs+='top : calc(50% - ((88% + 0px) / 2) + 1%);';
		hs+='visibility : hidden;';
		hs+='width : 88%;';
		hs+='pointer-events:auto;';
		el.setAttribute('style',hs);
		el.style.transformOrigin='50% 50%';
		me._map_2.ggIsActive=function() {
			if ((this.parentNode) && (this.parentNode.ggIsActive)) {
				return this.parentNode.ggIsActive();
			}
			return false;
		}
		el.ggElementNodeId=function() {
			if ((this.parentNode) && (this.parentNode.ggElementNodeId)) {
				return this.parentNode.ggElementNodeId();
			}
			return player.getCurrentNode();
		}
		me._map_2.logicBlock_visible = function() {
			var newLogicStateVisible;
			if (
				((me.ggUserdata.tags.indexOf("\uac00\uad6c\uc788\uc74c") != -1))
			)
			{
				newLogicStateVisible = 0;
			}
			else {
				newLogicStateVisible = -1;
			}
			if (me._map_2.ggCurrentLogicStateVisible != newLogicStateVisible) {
				me._map_2.ggCurrentLogicStateVisible = newLogicStateVisible;
				me._map_2.style.transition='';
				if (me._map_2.ggCurrentLogicStateVisible == 0) {
					me._map_2.style.visibility=(Number(me._map_2.style.opacity)>0||!me._map_2.style.opacity)?'inherit':'hidden';
					if (me._map_2.ggMapNotLoaded && me._map_2.ggInitMap) {
						me._map_2.ggInitMap(false);
						me._map_2.ggInitMapMarkers(true);
					}
					me._map_2.ggVisible=true;
				}
				else {
					me._map_2.style.visibility="hidden";
					if (me._map_2.ggClearMap) me._map_2.ggClearMap();
					me._map_2.ggVisible=false;
				}
			}
		}
		me._map_2.logicBlock_visible();
		me._map_2.ggCurrentLogicStateVisible = -1;
		me._map_2.ggUpdateConditionResize=function () {
			var mapDetails = player.getMapDetails(me._map_2.ggMapId);
			if (mapDetails.hasOwnProperty('title')) {
				me._map_2.ggCalculateFloorplanSize(mapDetails);
				me._map_2.ggShowSimpleFloorplan(mapDetails);
				me._map_2.ggPlaceMarkersOnSimpleFloorplan();
			}
			if (me._map_2.ggRadar) me._map_2.ggRadar.update();
		}
		me._map_2.ggUpdatePosition=function (useTransition) {
			for (var i=0; i < me._map_2.ggMarkerInstances.length; i++) {
				me._map_2.ggMarkerInstances[i].ggEvent_sizechanged();
			}
			me._map_2.ggUpdateConditionResize();
		}
		me.__24.appendChild(me._map_2);
		me.__23.appendChild(me.__24);
		me.divSkin.appendChild(me.__23);
		el=me._infopopup=document.createElement('div');
		el.ggId="info-popup";
		el.ggParameter={ rx:0,ry:0,a:0,sx:1,sy:1,def:'' };
		el.ggVisible=false;
		el.className="ggskin ggskin_container ";
		el.ggType='container';
		hs ='';
		hs+='height : 100%;';
		hs+='left : 0px;';
		hs+='position : absolute;';
		hs+='top : 0px;';
		hs+='visibility : hidden;';
		hs+='width : 100%;';
		hs+='pointer-events:none;';
		el.setAttribute('style',hs);
		el.style.transformOrigin='50% 50%';
		me._infopopup.ggIsActive=function() {
			return false;
		}
		el.ggElementNodeId=function() {
			return player.getCurrentNode();
		}
		me._infopopup.logicBlock_visible = function() {
			var newLogicStateVisible;
			if (
				((player.getIsMobile() == true))
			)
			{
				newLogicStateVisible = 0;
			}
			else {
				newLogicStateVisible = -1;
			}
			if (me._infopopup.ggCurrentLogicStateVisible != newLogicStateVisible) {
				me._infopopup.ggCurrentLogicStateVisible = newLogicStateVisible;
				me._infopopup.style.transition='';
				if (me._infopopup.ggCurrentLogicStateVisible == 0) {
					me._infopopup.style.visibility="hidden";
					me._infopopup.ggVisible=false;
				}
				else {
					me._infopopup.style.visibility="hidden";
					me._infopopup.ggVisible=false;
				}
			}
		}
		me._infopopup.logicBlock_visible();
		me._infopopup.ggUpdatePosition=function (useTransition) {
		}
		el=me._infopopups=document.createElement('div');
		el.ggId="info-popups";
		el.ggDx=0;
		el.ggDy=0;
		el.ggParameter={ rx:0,ry:0,a:0,sx:1,sy:1,def:'' };
		el.ggVisible=true;
		el.className="ggskin ggskin_container ";
		el.ggType='container';
		hs ='';
		hs+='z-index: 99;';
		hs+='height : 537px;';
		hs+='left : calc(50% - ((1000px + 0px) / 2) + 0px);';
		hs+='position : absolute;';
		hs+='top : calc(50% - ((537px + 0px) / 2) + 0px);';
		hs+='visibility : inherit;';
		hs+='width : 1000px;';
		hs+='pointer-events:none;';
		el.setAttribute('style',hs);
		el.style.transformOrigin='50% 50%';
		me._infopopups.ggIsActive=function() {
			if ((this.parentNode) && (this.parentNode.ggIsActive)) {
				return this.parentNode.ggIsActive();
			}
			return false;
		}
		el.ggElementNodeId=function() {
			if ((this.parentNode) && (this.parentNode.ggElementNodeId)) {
				return this.parentNode.ggElementNodeId();
			}
			return player.getCurrentNode();
		}
		me._infopopups.ggUpdatePosition=function (useTransition) {
		}
		el=me._rectangle_11=document.createElement('div');
		el.ggId="Rectangle 11";
		el.ggDx=0;
		el.ggDy=0;
		el.ggParameter={ rx:0,ry:0,a:0,sx:1,sy:1,def:'' };
		el.ggVisible=true;
		el.className="ggskin ggskin_rectangle ";
		el.ggType='rectangle';
		hs ='';
		hs+='background : #ffffff;';
		hs+='border : 1px solid #000000;';
		hs+='border-radius : 10px;';
		hs+='cursor : default;';
		hs+='height : 100%;';
		hs+='left : calc(50% - ((100% + 2px) / 2) + 0px);';
		hs+='position : absolute;';
		hs+='top : calc(50% - ((100% + 2px) / 2) + 0px);';
		hs+='visibility : inherit;';
		hs+='width : 100%;';
		hs+='pointer-events:auto;';
		el.setAttribute('style',hs);
		el.style.transformOrigin='50% 50%';
		me._rectangle_11.ggIsActive=function() {
			if ((this.parentNode) && (this.parentNode.ggIsActive)) {
				return this.parentNode.ggIsActive();
			}
			return false;
		}
		el.ggElementNodeId=function() {
			if ((this.parentNode) && (this.parentNode.ggElementNodeId)) {
				return this.parentNode.ggElementNodeId();
			}
			return player.getCurrentNode();
		}
		me._rectangle_11.ggUpdatePosition=function (useTransition) {
		}
		el=me.__18=document.createElement('div');
		el.ggId="\ub85c\uace0 \ucee8\ud14c\uc774\ub108";
		el.ggParameter={ rx:0,ry:0,a:0,sx:1,sy:1,def:'' };
		el.ggVisible=true;
		el.className="ggskin ggskin_container ";
		el.ggType='container';
		hs ='';
		hs+='height : 30px;';
		hs+='left : 4%;';
		hs+='position : absolute;';
		hs+='top : 5.5%;';
		hs+='visibility : inherit;';
		hs+='width : 200px;';
		hs+='pointer-events:none;';
		el.setAttribute('style',hs);
		el.style.transformOrigin='50% 50%';
		me.__18.ggIsActive=function() {
			if ((this.parentNode) && (this.parentNode.ggIsActive)) {
				return this.parentNode.ggIsActive();
			}
			return false;
		}
		el.ggElementNodeId=function() {
			if ((this.parentNode) && (this.parentNode.ggElementNodeId)) {
				return this.parentNode.ggElementNodeId();
			}
			return player.getCurrentNode();
		}
		me.__18.ggUpdatePosition=function (useTransition) {
		}
		el=me.__19=document.createElement('div');
		els=me.__19__text=document.createElement('div');
		el.className='ggskin ggskin_textdiv';
		el.ggTextDiv=els;
		el.ggId="\ud68c\uc0ac\uba85";
		el.ggDx=0;
		el.ggDy=0;
		el.ggParameter={ rx:0,ry:0,a:0,sx:1,sy:1,def:'' };
		el.ggVisible=true;
		el.className="ggskin ggskin_text ";
		el.ggType='text';
		hs ='';
		hs+='background : #ffffff;';
		hs+='border : 0px solid #000000;';
		hs+='color : #000000;';
		hs+='cursor : default;';
		hs+='height : 100%;';
		hs+='left : calc(50% - ((100% + 0px) / 2) + 0%);';
		hs+='position : absolute;';
		hs+='top : calc(50% - ((100% + 0px) / 2) + 0%);';
		hs+='visibility : inherit;';
		hs+='width : 100%;';
		hs+='pointer-events:auto;';
		el.setAttribute('style',hs);
		el.style.transformOrigin='50% 50%';
		hs ='';
		hs += 'box-sizing: border-box;';
		hs+='cursor: default;';
		hs+='width: 100%;';
		hs+='height: auto;';
		hs+='max-height: 100%;';
		hs+='font-size: 25px;';
		hs+='font-weight: 900;';
		hs+='text-align: left;';
		hs+='position: absolute;';
		hs+='top: 50%;';
		hs+='transform: translate(0, -50%);';
		hs+='white-space: pre;';
		hs+='padding: 0px;';
		hs+='overflow: hidden;';
		els.setAttribute('style',hs);
		me.__19.ggUpdateText=function() {
			var params = [];
			var hs = player._("UNFICTION", params);
			if (hs!=this.ggText) {
				this.ggText=hs;
				this.ggTextDiv.innerHTML=hs;
				if (this.ggUpdatePosition) this.ggUpdatePosition();
			}
		}
		me.__19.ggUpdateText();
		el.appendChild(els);
		me.__19.ggIsActive=function() {
			if ((this.parentNode) && (this.parentNode.ggIsActive)) {
				return this.parentNode.ggIsActive();
			}
			return false;
		}
		el.ggElementNodeId=function() {
			if ((this.parentNode) && (this.parentNode.ggElementNodeId)) {
				return this.parentNode.ggElementNodeId();
			}
			return player.getCurrentNode();
		}
		me.__19.ggUpdatePosition=function (useTransition) {
		}
		me.__18.appendChild(me.__19);
		me._rectangle_11.appendChild(me.__18);
		el=me.__11=document.createElement('div');
		el.ggId="\uc774\ubbf8\uc9c0 \ucee8\ud14c\uc774\ub108";
		el.ggParameter={ rx:0,ry:0,a:0,sx:1,sy:1,def:'' };
		el.ggVisible=true;
		el.className="ggskin ggskin_container ";
		el.ggType='container';
		hs ='';
		hs+='height : 267px;';
		hs+='left : 95px;';
		hs+='position : absolute;';
		hs+='top : 140px;';
		hs+='visibility : inherit;';
		hs+='width : 267px;';
		hs+='pointer-events:none;';
		el.setAttribute('style',hs);
		el.style.transformOrigin='50% 50%';
		me.__11.ggIsActive=function() {
			if ((this.parentNode) && (this.parentNode.ggIsActive)) {
				return this.parentNode.ggIsActive();
			}
			return false;
		}
		el.ggElementNodeId=function() {
			if ((this.parentNode) && (this.parentNode.ggElementNodeId)) {
				return this.parentNode.ggElementNodeId();
			}
			return player.getCurrentNode();
		}
		me.__11.ggUpdatePosition=function (useTransition) {
		}
		el=me._small_1=document.createElement('div');
		el.ggId="small-\uc774\ubbf8\uc9c0 \ucee8\ud14c\uc774\ub108-1";
		el.ggParameter={ rx:0,ry:0,a:0,sx:1,sy:1,def:'' };
		el.ggVisible=true;
		el.className="ggskin ggskin_container ";
		el.ggType='container';
		hs ='';
		hs+='cursor : pointer;';
		hs+='height : 22.619%;';
		hs+='left : 110%;';
		hs+='position : absolute;';
		hs+='top : 0%;';
		hs+='visibility : inherit;';
		hs+='width : 33.5%;';
		hs+='pointer-events:none;';
		el.setAttribute('style',hs);
		el.style.transformOrigin='50% 50%';
		me._small_1.ggIsActive=function() {
			if ((this.parentNode) && (this.parentNode.ggIsActive)) {
				return this.parentNode.ggIsActive();
			}
			return false;
		}
		el.ggElementNodeId=function() {
			if ((this.parentNode) && (this.parentNode.ggElementNodeId)) {
				return this.parentNode.ggElementNodeId();
			}
			return player.getCurrentNode();
		}
		me._small_1.onclick=function (e) {
			player.setVariableValue('vis_button_1', true);
			player.setVariableValue('vis_button_2', false);
			player.setVariableValue('vis_button_3', false);
			player.setVariableValue('vis_button_4', false);
		}
		me._small_1.ggUpdatePosition=function (useTransition) {
		}
		el=me.__17=document.createElement('div');
		el.ggId="\uc774\ubbf8\uc9c0\ud14c\ub450\ub9ac-1";
		el.ggDx=0;
		el.ggDy=0;
		el.ggParameter={ rx:0,ry:0,a:0,sx:1,sy:1,def:'' };
		el.ggVisible=true;
		el.className="ggskin ggskin_rectangle ";
		el.ggType='rectangle';
		hs ='';
		hs+='background : #f3f3f3;';
		hs+='border : 1px solid #000000;';
		hs+='border-radius : 15px;';
		hs+='cursor : default;';
		hs+='height : 100%;';
		hs+='left : calc(50% - ((100% + 2px) / 2) + 0px);';
		hs+='position : absolute;';
		hs+='top : calc(50% - ((100% + 2px) / 2) + 0px);';
		hs+='visibility : inherit;';
		hs+='width : 100%;';
		hs+='pointer-events:auto;';
		el.setAttribute('style',hs);
		el.style.transformOrigin='50% 50%';
		me.__17.ggIsActive=function() {
			if ((this.parentNode) && (this.parentNode.ggIsActive)) {
				return this.parentNode.ggIsActive();
			}
			return false;
		}
		el.ggElementNodeId=function() {
			if ((this.parentNode) && (this.parentNode.ggElementNodeId)) {
				return this.parentNode.ggElementNodeId();
			}
			return player.getCurrentNode();
		}
		me.__17.logicBlock_bordercolor = function() {
			var newLogicStateBorderColor;
			if (
				((player.getVariableValue('vis_button_1') == true))
			)
			{
				newLogicStateBorderColor = 0;
			}
			else if (
				((player.getVariableValue('vis_button_1') == false))
			)
			{
				newLogicStateBorderColor = 1;
			}
			else {
				newLogicStateBorderColor = -1;
			}
			if (me.__17.ggCurrentLogicStateBorderColor != newLogicStateBorderColor) {
				me.__17.ggCurrentLogicStateBorderColor = newLogicStateBorderColor;
				me.__17.style.transition='border-color 500ms ease 0ms';
				if (me.__17.ggCurrentLogicStateBorderColor == 0) {
					me.__17.style.borderColor="rgba(0,0,0,1)";
				}
				else if (me.__17.ggCurrentLogicStateBorderColor == 1) {
					me.__17.style.borderColor="rgba(0,0,0,0)";
				}
				else {
					me.__17.style.borderColor="rgba(0,0,0,1)";
				}
			}
		}
		me.__17.logicBlock_bordercolor();
		me.__17.ggUpdatePosition=function (useTransition) {
		}
		me._small_1.appendChild(me.__17);
		el=me._smallimage1=document.createElement('div');
		els=me._smallimage1__img=document.createElement('img');
		els.className='ggskin ggskin_smallimage1';
		hs='data:image/png;base64,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'+
			'AAAABJRU5ErkJggg==';
		els.setAttribute('src',hs);
		els.ggNormalSrc=hs;
		hs ='';
		hs += 'position: absolute;top: 0px;left: 0px;width: 100%;height: 100%;-webkit-user-drag:none;pointer-events:none;;';
		els.setAttribute('style', hs);
		els.className='ggskin ggskin_image';
		els['ondragstart']=function() { return false; };
		player.checkLoaded.push(els);
		el.appendChild(els);
		el.ggSubElement = els;
		el.ggId="small-image-1";
		el.ggDx=0;
		el.ggDy=0;
		el.ggParameter={ rx:0,ry:0,a:0,sx:1,sy:1,def:'' };
		el.ggVisible=true;
		el.className="ggskin ggskin_image ";
		el.ggType='image';
		hs ='';
		hs+='height : 100%;';
		hs+='left : calc(50% - ((100% + 0px) / 2) + 0px);';
		hs+='position : absolute;';
		hs+='top : calc(50% - ((100% + 0px) / 2) + 0px);';
		hs+='visibility : inherit;';
		hs+='width : 100%;';
		hs+='pointer-events:auto;';
		el.setAttribute('style',hs);
		el.style.transformOrigin='50% 50%';
		me._smallimage1.ggIsActive=function() {
			if ((this.parentNode) && (this.parentNode.ggIsActive)) {
				return this.parentNode.ggIsActive();
			}
			return false;
		}
		el.ggElementNodeId=function() {
			if ((this.parentNode) && (this.parentNode.ggElementNodeId)) {
				return this.parentNode.ggElementNodeId();
			}
			return player.getCurrentNode();
		}
		me._smallimage1.ggUpdatePosition=function (useTransition) {
		}
		me._small_1.appendChild(me._smallimage1);
		me.__11.appendChild(me._small_1);
		el=me._small_2=document.createElement('div');
		el.ggId="small-\uc774\ubbf8\uc9c0 \ucee8\ud14c\uc774\ub108-2";
		el.ggParameter={ rx:0,ry:0,a:0,sx:1,sy:1,def:'' };
		el.ggVisible=true;
		el.className="ggskin ggskin_container ";
		el.ggType='container';
		hs ='';
		hs+='cursor : pointer;';
		hs+='height : 21.4286%;';
		hs+='left : 110%;';
		hs+='position : absolute;';
		hs+='top : 26%;';
		hs+='visibility : inherit;';
		hs+='width : 33.5%;';
		hs+='pointer-events:none;';
		el.setAttribute('style',hs);
		el.style.transformOrigin='50% 50%';
		me._small_2.ggIsActive=function() {
			if ((this.parentNode) && (this.parentNode.ggIsActive)) {
				return this.parentNode.ggIsActive();
			}
			return false;
		}
		el.ggElementNodeId=function() {
			if ((this.parentNode) && (this.parentNode.ggElementNodeId)) {
				return this.parentNode.ggElementNodeId();
			}
			return player.getCurrentNode();
		}
		me._small_2.onclick=function (e) {
			player.setVariableValue('vis_button_1', false);
			player.setVariableValue('vis_button_2', true);
			player.setVariableValue('vis_button_3', false);
			player.setVariableValue('vis_button_4', false);
		}
		me._small_2.ggUpdatePosition=function (useTransition) {
		}
		el=me.__22=document.createElement('div');
		el.ggId="\uc774\ubbf8\uc9c0\ud14c\ub450\ub9ac-2";
		el.ggDx=0;
		el.ggDy=0;
		el.ggParameter={ rx:0,ry:0,a:0,sx:1,sy:1,def:'' };
		el.ggVisible=true;
		el.className="ggskin ggskin_rectangle ";
		el.ggType='rectangle';
		hs ='';
		hs+=cssPrefix + 'background-clip : padding-box;';
		hs+='background-clip : padding-box;';
		hs+='background : #f3f3f3;';
		hs+='border : 1px solid rgba(0,0,0,0);';
		hs+='border-radius : 15px;';
		hs+='cursor : default;';
		hs+='height : 100%;';
		hs+='left : calc(50% - ((100% + 2px) / 2) + 0px);';
		hs+='position : absolute;';
		hs+='top : calc(50% - ((100% + 2px) / 2) + 0px);';
		hs+='visibility : inherit;';
		hs+='width : 100%;';
		hs+='pointer-events:auto;';
		el.setAttribute('style',hs);
		el.style.transformOrigin='50% 50%';
		me.__22.ggIsActive=function() {
			if ((this.parentNode) && (this.parentNode.ggIsActive)) {
				return this.parentNode.ggIsActive();
			}
			return false;
		}
		el.ggElementNodeId=function() {
			if ((this.parentNode) && (this.parentNode.ggElementNodeId)) {
				return this.parentNode.ggElementNodeId();
			}
			return player.getCurrentNode();
		}
		me.__22.logicBlock_bordercolor = function() {
			var newLogicStateBorderColor;
			if (
				((player.getVariableValue('vis_button_2') == true))
			)
			{
				newLogicStateBorderColor = 0;
			}
			else if (
				((player.getVariableValue('vis_button_2') == true))
			)
			{
				newLogicStateBorderColor = 1;
			}
			else {
				newLogicStateBorderColor = -1;
			}
			if (me.__22.ggCurrentLogicStateBorderColor != newLogicStateBorderColor) {
				me.__22.ggCurrentLogicStateBorderColor = newLogicStateBorderColor;
				me.__22.style.transition='border-color 500ms ease 0ms';
				if (me.__22.ggCurrentLogicStateBorderColor == 0) {
					me.__22.style.borderColor="rgba(0,0,0,1)";
				}
				else if (me.__22.ggCurrentLogicStateBorderColor == 1) {
					me.__22.style.borderColor="rgba(0,0,0,0)";
				}
				else {
					me.__22.style.borderColor="rgba(0,0,0,0)";
				}
			}
		}
		me.__22.logicBlock_bordercolor();
		me.__22.ggUpdatePosition=function (useTransition) {
		}
		me._small_2.appendChild(me.__22);
		el=me._smallimage2=document.createElement('div');
		els=me._smallimage2__img=document.createElement('img');
		els.className='ggskin ggskin_smallimage2';
		hs='data:image/png;base64,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';
		els.setAttribute('src',hs);
		els.ggNormalSrc=hs;
		hs ='';
		hs += 'position: absolute;top: 0px;left: 0px;width: 100%;height: 100%;-webkit-user-drag:none;pointer-events:none;;';
		els.setAttribute('style', hs);
		els.className='ggskin ggskin_image';
		els['ondragstart']=function() { return false; };
		player.checkLoaded.push(els);
		el.appendChild(els);
		el.ggSubElement = els;
		el.ggId="small-image-2";
		el.ggDx=0;
		el.ggDy=0;
		el.ggParameter={ rx:0,ry:0,a:0,sx:1,sy:1,def:'' };
		el.ggVisible=true;
		el.className="ggskin ggskin_image ";
		el.ggType='image';
		hs ='';
		hs+='height : 100%;';
		hs+='left : calc(50% - ((100% + 0px) / 2) + 0px);';
		hs+='position : absolute;';
		hs+='top : calc(50% - ((100% + 0px) / 2) + 0px);';
		hs+='visibility : inherit;';
		hs+='width : 100%;';
		hs+='pointer-events:auto;';
		el.setAttribute('style',hs);
		el.style.transformOrigin='50% 50%';
		me._smallimage2.ggIsActive=function() {
			if ((this.parentNode) && (this.parentNode.ggIsActive)) {
				return this.parentNode.ggIsActive();
			}
			return false;
		}
		el.ggElementNodeId=function() {
			if ((this.parentNode) && (this.parentNode.ggElementNodeId)) {
				return this.parentNode.ggElementNodeId();
			}
			return player.getCurrentNode();
		}
		me._smallimage2.ggUpdatePosition=function (useTransition) {
		}
		me._small_2.appendChild(me._smallimage2);
		me.__11.appendChild(me._small_2);
		el=me._small_3=document.createElement('div');
		el.ggId="small-\uc774\ubbf8\uc9c0 \ucee8\ud14c\uc774\ub108-3";
		el.ggParameter={ rx:0,ry:0,a:0,sx:1,sy:1,def:'' };
		el.ggVisible=true;
		el.className="ggskin ggskin_container ";
		el.ggType='container';
		hs ='';
		hs+='cursor : pointer;';
		hs+='height : 21.4286%;';
		hs+='left : 110%;';
		hs+='position : absolute;';
		hs+='top : 51%;';
		hs+='visibility : inherit;';
		hs+='width : 33.5%;';
		hs+='pointer-events:none;';
		el.setAttribute('style',hs);
		el.style.transformOrigin='50% 50%';
		me._small_3.ggIsActive=function() {
			if ((this.parentNode) && (this.parentNode.ggIsActive)) {
				return this.parentNode.ggIsActive();
			}
			return false;
		}
		el.ggElementNodeId=function() {
			if ((this.parentNode) && (this.parentNode.ggElementNodeId)) {
				return this.parentNode.ggElementNodeId();
			}
			return player.getCurrentNode();
		}
		me._small_3.onclick=function (e) {
			player.setVariableValue('vis_button_1', false);
			player.setVariableValue('vis_button_2', false);
			player.setVariableValue('vis_button_3', true);
			player.setVariableValue('vis_button_4', false);
		}
		me._small_3.ggUpdatePosition=function (useTransition) {
		}
		el=me.__32=document.createElement('div');
		el.ggId="\uc774\ubbf8\uc9c0\ud14c\ub450\ub9ac-3";
		el.ggDx=0;
		el.ggDy=0;
		el.ggParameter={ rx:0,ry:0,a:0,sx:1,sy:1,def:'' };
		el.ggVisible=true;
		el.className="ggskin ggskin_rectangle ";
		el.ggType='rectangle';
		hs ='';
		hs+=cssPrefix + 'background-clip : padding-box;';
		hs+='background-clip : padding-box;';
		hs+='background : #f3f3f3;';
		hs+='border : 1px solid rgba(0,0,0,0);';
		hs+='border-radius : 15px;';
		hs+='cursor : default;';
		hs+='height : 100%;';
		hs+='left : calc(50% - ((100% + 2px) / 2) + 0px);';
		hs+='position : absolute;';
		hs+='top : calc(50% - ((100% + 2px) / 2) + 0px);';
		hs+='visibility : inherit;';
		hs+='width : 100%;';
		hs+='pointer-events:auto;';
		el.setAttribute('style',hs);
		el.style.transformOrigin='50% 50%';
		me.__32.ggIsActive=function() {
			if ((this.parentNode) && (this.parentNode.ggIsActive)) {
				return this.parentNode.ggIsActive();
			}
			return false;
		}
		el.ggElementNodeId=function() {
			if ((this.parentNode) && (this.parentNode.ggElementNodeId)) {
				return this.parentNode.ggElementNodeId();
			}
			return player.getCurrentNode();
		}
		me.__32.logicBlock_bordercolor = function() {
			var newLogicStateBorderColor;
			if (
				((player.getVariableValue('vis_button_3') == true))
			)
			{
				newLogicStateBorderColor = 0;
			}
			else if (
				((player.getVariableValue('vis_button_3') == true))
			)
			{
				newLogicStateBorderColor = 1;
			}
			else {
				newLogicStateBorderColor = -1;
			}
			if (me.__32.ggCurrentLogicStateBorderColor != newLogicStateBorderColor) {
				me.__32.ggCurrentLogicStateBorderColor = newLogicStateBorderColor;
				me.__32.style.transition='border-color 500ms ease 0ms';
				if (me.__32.ggCurrentLogicStateBorderColor == 0) {
					me.__32.style.borderColor="rgba(0,0,0,1)";
				}
				else if (me.__32.ggCurrentLogicStateBorderColor == 1) {
					me.__32.style.borderColor="rgba(0,0,0,0)";
				}
				else {
					me.__32.style.borderColor="rgba(0,0,0,0)";
				}
			}
		}
		me.__32.logicBlock_bordercolor();
		me.__32.ggUpdatePosition=function (useTransition) {
		}
		me._small_3.appendChild(me.__32);
		el=me._smallimage3=document.createElement('div');
		els=me._smallimage3__img=document.createElement('img');
		els.className='ggskin ggskin_smallimage3';
		hs='data:image/png;base64,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';
		els.setAttribute('src',hs);
		els.ggNormalSrc=hs;
		hs ='';
		hs += 'position: absolute;top: 0px;left: 0px;width: 100%;height: 100%;-webkit-user-drag:none;pointer-events:none;;';
		els.setAttribute('style', hs);
		els.className='ggskin ggskin_image';
		els['ondragstart']=function() { return false; };
		player.checkLoaded.push(els);
		el.appendChild(els);
		el.ggSubElement = els;
		el.ggId="small-image-3";
		el.ggDx=0;
		el.ggDy=0;
		el.ggParameter={ rx:0,ry:0,a:0,sx:1,sy:1,def:'' };
		el.ggVisible=true;
		el.className="ggskin ggskin_image ";
		el.ggType='image';
		hs ='';
		hs+='height : 100%;';
		hs+='left : calc(50% - ((100% + 0px) / 2) + 0px);';
		hs+='position : absolute;';
		hs+='top : calc(50% - ((100% + 0px) / 2) + 0px);';
		hs+='visibility : inherit;';
		hs+='width : 100%;';
		hs+='pointer-events:auto;';
		el.setAttribute('style',hs);
		el.style.transformOrigin='50% 50%';
		me._smallimage3.ggIsActive=function() {
			if ((this.parentNode) && (this.parentNode.ggIsActive)) {
				return this.parentNode.ggIsActive();
			}
			return false;
		}
		el.ggElementNodeId=function() {
			if ((this.parentNode) && (this.parentNode.ggElementNodeId)) {
				return this.parentNode.ggElementNodeId();
			}
			return player.getCurrentNode();
		}
		me._smallimage3.ggUpdatePosition=function (useTransition) {
		}
		me._small_3.appendChild(me._smallimage3);
		me.__11.appendChild(me._small_3);
		el=me._small_4=document.createElement('div');
		el.ggId="small-\uc774\ubbf8\uc9c0 \ucee8\ud14c\uc774\ub108-4";
		el.ggParameter={ rx:0,ry:0,a:0,sx:1,sy:1,def:'' };
		el.ggVisible=true;
		el.className="ggskin ggskin_container ";
		el.ggType='container';
		hs ='';
		hs+='cursor : pointer;';
		hs+='height : 22.619%;';
		hs+='left : 110%;';
		hs+='position : absolute;';
		hs+='top : 76%;';
		hs+='visibility : inherit;';
		hs+='width : 33.5%;';
		hs+='pointer-events:none;';
		el.setAttribute('style',hs);
		el.style.transformOrigin='50% 50%';
		me._small_4.ggIsActive=function() {
			if ((this.parentNode) && (this.parentNode.ggIsActive)) {
				return this.parentNode.ggIsActive();
			}
			return false;
		}
		el.ggElementNodeId=function() {
			if ((this.parentNode) && (this.parentNode.ggElementNodeId)) {
				return this.parentNode.ggElementNodeId();
			}
			return player.getCurrentNode();
		}
		me._small_4.onclick=function (e) {
			player.setVariableValue('vis_button_1', false);
			player.setVariableValue('vis_button_2', false);
			player.setVariableValue('vis_button_3', false);
			player.setVariableValue('vis_button_4', true);
		}
		me._small_4.ggUpdatePosition=function (useTransition) {
		}
		el=me.__42=document.createElement('div');
		el.ggId="\uc774\ubbf8\uc9c0\ud14c\ub450\ub9ac-4";
		el.ggDx=0;
		el.ggDy=0;
		el.ggParameter={ rx:0,ry:0,a:0,sx:1,sy:1,def:'' };
		el.ggVisible=true;
		el.className="ggskin ggskin_rectangle ";
		el.ggType='rectangle';
		hs ='';
		hs+=cssPrefix + 'background-clip : padding-box;';
		hs+='background-clip : padding-box;';
		hs+='background : #f3f3f3;';
		hs+='border : 1px solid rgba(0,0,0,0);';
		hs+='border-radius : 15px;';
		hs+='cursor : default;';
		hs+='height : 100%;';
		hs+='left : calc(50% - ((100% + 2px) / 2) + 0px);';
		hs+='position : absolute;';
		hs+='top : calc(50% - ((100% + 2px) / 2) + 0px);';
		hs+='visibility : inherit;';
		hs+='width : 100%;';
		hs+='pointer-events:auto;';
		el.setAttribute('style',hs);
		el.style.transformOrigin='50% 50%';
		me.__42.ggIsActive=function() {
			if ((this.parentNode) && (this.parentNode.ggIsActive)) {
				return this.parentNode.ggIsActive();
			}
			return false;
		}
		el.ggElementNodeId=function() {
			if ((this.parentNode) && (this.parentNode.ggElementNodeId)) {
				return this.parentNode.ggElementNodeId();
			}
			return player.getCurrentNode();
		}
		me.__42.logicBlock_bordercolor = function() {
			var newLogicStateBorderColor;
			if (
				((player.getVariableValue('vis_button_4') == true))
			)
			{
				newLogicStateBorderColor = 0;
			}
			else if (
				((player.getVariableValue('vis_button_4') == true))
			)
			{
				newLogicStateBorderColor = 1;
			}
			else {
				newLogicStateBorderColor = -1;
			}
			if (me.__42.ggCurrentLogicStateBorderColor != newLogicStateBorderColor) {
				me.__42.ggCurrentLogicStateBorderColor = newLogicStateBorderColor;
				me.__42.style.transition='border-color 500ms ease 0ms';
				if (me.__42.ggCurrentLogicStateBorderColor == 0) {
					me.__42.style.borderColor="rgba(0,0,0,1)";
				}
				else if (me.__42.ggCurrentLogicStateBorderColor == 1) {
					me.__42.style.borderColor="rgba(0,0,0,0)";
				}
				else {
					me.__42.style.borderColor="rgba(0,0,0,0)";
				}
			}
		}
		me.__42.logicBlock_bordercolor();
		me.__42.ggUpdatePosition=function (useTransition) {
		}
		me._small_4.appendChild(me.__42);
		el=me._smallimage4=document.createElement('div');
		els=me._smallimage4__img=document.createElement('img');
		els.className='ggskin ggskin_smallimage4';
		hs='data:image/png;base64,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';
		els.setAttribute('src',hs);
		els.ggNormalSrc=hs;
		hs ='';
		hs += 'position: absolute;top: 0px;left: 0px;width: 100%;height: 100%;-webkit-user-drag:none;pointer-events:none;;';
		els.setAttribute('style', hs);
		els.className='ggskin ggskin_image';
		els['ondragstart']=function() { return false; };
		player.checkLoaded.push(els);
		el.appendChild(els);
		el.ggSubElement = els;
		el.ggId="small-image-4";
		el.ggDx=0;
		el.ggDy=0;
		el.ggParameter={ rx:0,ry:0,a:0,sx:1,sy:1,def:'' };
		el.ggVisible=true;
		el.className="ggskin ggskin_image ";
		el.ggType='image';
		hs ='';
		hs+='height : 100%;';
		hs+='left : calc(50% - ((100% + 0px) / 2) + 0px);';
		hs+='position : absolute;';
		hs+='top : calc(50% - ((100% + 0px) / 2) + 0px);';
		hs+='visibility : inherit;';
		hs+='width : 100%;';
		hs+='pointer-events:auto;';
		el.setAttribute('style',hs);
		el.style.transformOrigin='50% 50%';
		me._smallimage4.ggIsActive=function() {
			if ((this.parentNode) && (this.parentNode.ggIsActive)) {
				return this.parentNode.ggIsActive();
			}
			return false;
		}
		el.ggElementNodeId=function() {
			if ((this.parentNode) && (this.parentNode.ggElementNodeId)) {
				return this.parentNode.ggElementNodeId();
			}
			return player.getCurrentNode();
		}
		me._smallimage4.ggUpdatePosition=function (useTransition) {
		}
		me._small_4.appendChild(me._smallimage4);
		me.__11.appendChild(me._small_4);
		el=me._contextbox=document.createElement('div');
		el.ggId="context-box";
		el.ggParameter={ rx:0,ry:0,a:0,sx:1,sy:1,def:'' };
		el.ggVisible=true;
		el.className="ggskin ggskin_container ";
		el.ggType='container';
		hs ='';
		hs+='height : 264px;';
		hs+='left : 460px;';
		hs+='position : absolute;';
		hs+='top : 0px;';
		hs+='visibility : inherit;';
		hs+='width : 350px;';
		hs+='pointer-events:none;';
		el.setAttribute('style',hs);
		el.style.transformOrigin='50% 50%';
		me._contextbox.ggIsActive=function() {
			if ((this.parentNode) && (this.parentNode.ggIsActive)) {
				return this.parentNode.ggIsActive();
			}
			return false;
		}
		el.ggElementNodeId=function() {
			if ((this.parentNode) && (this.parentNode.ggElementNodeId)) {
				return this.parentNode.ggElementNodeId();
			}
			return player.getCurrentNode();
		}
		me._contextbox.ggUpdatePosition=function (useTransition) {
		}
		el=me.__16=document.createElement('div');
		els=me.__16__text=document.createElement('div');
		el.className='ggskin ggskin_textdiv';
		el.ggTextDiv=els;
		el.ggId="\ub0c9\uc7a5\uace0\uc774\ub984";
		el.ggParameter={ rx:0,ry:0,a:0,sx:1,sy:1,def:'' };
		el.ggVisible=true;
		el.className="ggskin ggskin_text ";
		el.ggType='text';
		hs ='';
		hs+='background : #ffffff;';
		hs+='border-color : #000000;';
		hs+='border-radius : 0px 0px 0px 0px;';
		hs+='border-style : solid;';
		hs+='border-width : 0px 0px 0px 0px;';
		hs+='color : #000000;';
		hs+='cursor : default;';
		hs+='height : 75px;';
		hs+='left : 0px;';
		hs+='position : absolute;';
		hs+='top : 0px;';
		hs+='visibility : inherit;';
		hs+='width : 113.429%;';
		hs+='pointer-events:auto;';
		hs+='line-height:40px;';
		el.setAttribute('style',hs);
		el.style.transformOrigin='50% 50%';
		hs ='';
		hs += 'box-sizing: border-box;';
		hs+='cursor: default;';
		hs+='width: 100%;';
		hs+='height: 100%;';
		hs+='font-size: 25px;';
		hs+='font-weight: 400;';
		hs+='text-align: left;';
		hs+='white-space: pre;';
		hs+='padding: 0px;';
		hs+='overflow: hidden;';
		els.setAttribute('style',hs);
		me.__16.ggUpdateText=function() {
			var params = [];
			var hs = player._("BESPOKE \ub0c9\uc7a5\uace0 1\ub3c4\uc5b4 \n\ud0a4\uce5c\ud54f 409L", params);
			if (hs!=this.ggText) {
				this.ggText=hs;
				this.ggTextDiv.innerHTML=hs;
				if (this.ggUpdatePosition) this.ggUpdatePosition();
			}
		}
		me.__16.ggUpdateText();
		el.appendChild(els);
		me.__16.ggIsActive=function() {
			if ((this.parentNode) && (this.parentNode.ggIsActive)) {
				return this.parentNode.ggIsActive();
			}
			return false;
		}
		el.ggElementNodeId=function() {
			if ((this.parentNode) && (this.parentNode.ggElementNodeId)) {
				return this.parentNode.ggElementNodeId();
			}
			return player.getCurrentNode();
		}
		me.__16.ggUpdatePosition=function (useTransition) {
		}
		el=me._rectangle_21=document.createElement('div');
		el.ggId="Rectangle 21";
		el.ggParameter={ rx:0,ry:0,a:0,sx:1,sy:1,def:'' };
		el.ggVisible=true;
		el.className="ggskin ggskin_rectangle ";
		el.ggType='rectangle';
		hs ='';
		hs+='background : #000000;';
		hs+='border : 0px solid #000000;';
		hs+='bottom : -21px;';
		hs+='cursor : default;';
		hs+='height : 2.5%;';
		hs+='left : 0px;';
		hs+='position : absolute;';
		hs+='visibility : inherit;';
		hs+='width : 88%;';
		hs+='pointer-events:auto;';
		el.setAttribute('style',hs);
		el.style.transformOrigin='50% 50%';
		me._rectangle_21.ggIsActive=function() {
			if ((this.parentNode) && (this.parentNode.ggIsActive)) {
				return this.parentNode.ggIsActive();
			}
			return false;
		}
		el.ggElementNodeId=function() {
			if ((this.parentNode) && (this.parentNode.ggElementNodeId)) {
				return this.parentNode.ggElementNodeId();
			}
			return player.getCurrentNode();
		}
		me._rectangle_21.ggUpdatePosition=function (useTransition) {
		}
		me.__16.appendChild(me._rectangle_21);
		me._contextbox.appendChild(me.__16);
		el=me._container_21=document.createElement('div');
		el.ggId="Container 21";
		el.ggParameter={ rx:0,ry:0,a:0,sx:1,sy:1,def:'' };
		el.ggVisible=true;
		el.className="ggskin ggskin_container ";
		el.ggType='container';
		hs ='';
		hs+='height : 155px;';
		hs+='left : 0px;';
		hs+='position : absolute;';
		hs+='top : 118px;';
		hs+='visibility : inherit;';
		hs+='width : 350px;';
		hs+='pointer-events:none;';
		el.setAttribute('style',hs);
		el.style.transformOrigin='50% 50%';
		me._container_21.ggIsActive=function() {
			if ((this.parentNode) && (this.parentNode.ggIsActive)) {
				return this.parentNode.ggIsActive();
			}
			return false;
		}
		el.ggElementNodeId=function() {
			if ((this.parentNode) && (this.parentNode.ggElementNodeId)) {
				return this.parentNode.ggElementNodeId();
			}
			return player.getCurrentNode();
		}
		me._container_21.ggUpdatePosition=function (useTransition) {
		}
		el=me._container_1111=document.createElement('div');
		el.ggId="Container 1111";
		el.ggParameter={ rx:0,ry:0,a:0,sx:1,sy:1,def:'' };
		el.ggVisible=true;
		el.className="ggskin ggskin_container ";
		el.ggType='container';
		hs ='';
		hs+='height : 155px;';
		hs+='left : 0px;';
		hs+='position : absolute;';
		hs+='top : 0px;';
		hs+='visibility : inherit;';
		hs+='width : 350px;';
		hs+='pointer-events:none;';
		el.setAttribute('style',hs);
		el.style.transformOrigin='50% 50%';
		me._container_1111.ggIsActive=function() {
			if ((this.parentNode) && (this.parentNode.ggIsActive)) {
				return this.parentNode.ggIsActive();
			}
			return false;
		}
		el.ggElementNodeId=function() {
			if ((this.parentNode) && (this.parentNode.ggElementNodeId)) {
				return this.parentNode.ggElementNodeId();
			}
			return player.getCurrentNode();
		}
		me._container_1111.ggUpdatePosition=function (useTransition) {
		}
		el=me.__15=document.createElement('div');
		els=me.__15__text=document.createElement('div');
		el.className='ggskin ggskin_textdiv';
		el.ggTextDiv=els;
		el.ggId="\ub0c9\uc7a5\uace0 \uc124\uba85";
		el.ggParameter={ rx:0,ry:0,a:0,sx:1,sy:1,def:'' };
		el.ggVisible=true;
		el.className="ggskin ggskin_text ";
		el.ggType='text';
		hs ='';
		hs+='background : #ffffff;';
		hs+='border : 0px solid #000000;';
		hs+='color : #000000;';
		hs+='cursor : default;';
		hs+='height : 155px;';
		hs+='left : 0%;';
		hs+='position : absolute;';
		hs+='top : 0px;';
		hs+='visibility : inherit;';
		hs+='width : 100%;';
		hs+='pointer-events:auto;';
		el.setAttribute('style',hs);
		el.style.transformOrigin='50% 50%';
		hs ='';
		hs += 'box-sizing: border-box;';
		hs+='cursor: default;';
		hs+='width: 100%;';
		hs+='height: 100%;';
		hs+='text-align: left;';
		hs+='white-space: pre-line;';
		hs+='padding: 0px;';
		hs+='overflow: hidden;';
		hs+='overflow-y: auto;';
		els.setAttribute('style',hs);
		me.__15.ggUpdateText=function() {
			var params = [];
			var hs = player._("\ub9de\ucda4\ud615 \uc870\ud569\uc73c\ub85c \uc8fc\ubc29\uc744 \ub098\ub2f5\uac8c \ub098\ub9cc\uc758 \uc870\ud569 & \uc624\ub9ac\uc9c0\ub110 \ud0a4\uce5c\ud54f BESPOKE \ud0a4\uce5c\ud54f\uc740 700mm \uae4a\uc774\uc758 \ub0c9\uc7a5\uace0 \ub77c\uc778\uc5d0 \ub531 \ub9de\uac8c \ub4e4\uc5b4\uac00 \ube4c\ud2b8\uc778\ucc98\ub7fc \uc5f0\ucd9c \uac00\ub2a5\ud569\ub2c8\ub2e4.\n*\uc6b0\uac1c\ud3d0 \uc88c\uac1c\ud398 \uc120\ud0dd \uac00\ub2a5\n\n\uc804\uccb4\uc6a9\ub7c9(L) 409\n\ud3ed 595mm\n\ub192\uc774 1,853mm\n\uae4a\uc774 68mm\n\n\uc5d0\ub108\uc9c0\uc18c\ube44\ud6a8\uc728\ub4f1\uae09 1\ub4f1\uae09\n\uc0c9\uc0c1 \uae00\ub7a8\ud654\uc774\ud2b8", params);
			if (hs!=this.ggText) {
				this.ggText=hs;
				this.ggTextDiv.innerHTML=hs;
				if (this.ggUpdatePosition) this.ggUpdatePosition();
			}
		}
		me.__15.ggUpdateText();
		el.appendChild(els);
		me.__15.ggIsActive=function() {
			if ((this.parentNode) && (this.parentNode.ggIsActive)) {
				return this.parentNode.ggIsActive();
			}
			return false;
		}
		el.ggElementNodeId=function() {
			if ((this.parentNode) && (this.parentNode.ggElementNodeId)) {
				return this.parentNode.ggElementNodeId();
			}
			return player.getCurrentNode();
		}
		me.__15.ggUpdatePosition=function (useTransition) {
		}
		me._container_1111.appendChild(me.__15);
		me._container_21.appendChild(me._container_1111);
		me._contextbox.appendChild(me._container_21);
		me.__11.appendChild(me._contextbox);
		el=me.__13=document.createElement('div');
		el.ggId="\ubc84\ud2bc";
		el.ggParameter={ rx:0,ry:0,a:0,sx:1,sy:1,def:'' };
		el.ggVisible=true;
		el.className="ggskin ggskin_container ";
		el.ggType='container';
		hs ='';
		hs+='bottom : -50px;';
		hs+='cursor : pointer;';
		hs+='height : 20px;';
		hs+='left : 0px;';
		hs+='position : absolute;';
		hs+='visibility : inherit;';
		hs+='width : 100%;';
		hs+='pointer-events:none;';
		el.setAttribute('style',hs);
		el.style.transformOrigin='50% 50%';
		me.__13.ggIsActive=function() {
			if ((this.parentNode) && (this.parentNode.ggIsActive)) {
				return this.parentNode.ggIsActive();
			}
			return false;
		}
		el.ggElementNodeId=function() {
			if ((this.parentNode) && (this.parentNode.ggElementNodeId)) {
				return this.parentNode.ggElementNodeId();
			}
			return player.getCurrentNode();
		}
		me.__13.ggUpdatePosition=function (useTransition) {
		}
		el=me.__14=document.createElement('div');
		el.ggId="\ubc84\ud2bc1";
		el.ggDy=0;
		el.ggParameter={ rx:0,ry:0,a:0,sx:1,sy:1,def:'' };
		el.ggVisible=true;
		el.className="ggskin ggskin_rectangle ";
		el.ggType='rectangle';
		hs ='';
		hs+='background : rgba(89,89,89,0.392157);';
		hs+='border : 0px solid #000000;';
		hs+='border-radius : 50px;';
		hs+='cursor : pointer;';
		hs+='height : 10px;';
		hs+='left : 37%;';
		hs+='position : absolute;';
		hs+='top : calc(50% - ((10px + 0px) / 2) + 0px);';
		hs+='visibility : inherit;';
		hs+='width : 10px;';
		hs+='pointer-events:auto;';
		el.setAttribute('style',hs);
		el.style.transformOrigin='50% 50%';
		me.__14.ggIsActive=function() {
			if ((this.parentNode) && (this.parentNode.ggIsActive)) {
				return this.parentNode.ggIsActive();
			}
			return false;
		}
		el.ggElementNodeId=function() {
			if ((this.parentNode) && (this.parentNode.ggElementNodeId)) {
				return this.parentNode.ggElementNodeId();
			}
			return player.getCurrentNode();
		}
		me.__14.logicBlock_backgroundcolor = function() {
			var newLogicStateBackgroundColor;
			if (
				((player.getVariableValue('vis_button_1') == true))
			)
			{
				newLogicStateBackgroundColor = 0;
			}
			else {
				newLogicStateBackgroundColor = -1;
			}
			if (me.__14.ggCurrentLogicStateBackgroundColor != newLogicStateBackgroundColor) {
				me.__14.ggCurrentLogicStateBackgroundColor = newLogicStateBackgroundColor;
				me.__14.style.transition='background-color 0s';
				if (me.__14.ggCurrentLogicStateBackgroundColor == 0) {
					me.__14.style.backgroundColor="rgba(89,89,89,1)";
				}
				else {
					me.__14.style.backgroundColor="rgba(89,89,89,0.392157)";
				}
			}
		}
		me.__14.logicBlock_backgroundcolor();
		me.__14.onclick=function (e) {
			player.setVariableValue('vis_button_1', true);
			player.setVariableValue('vis_button_2', false);
			player.setVariableValue('vis_button_3', false);
			player.setVariableValue('vis_button_4', false);
		}
		me.__14.ggUpdatePosition=function (useTransition) {
		}
		me.__13.appendChild(me.__14);
		el=me.__21=document.createElement('div');
		el.ggId="\ubc84\ud2bc2";
		el.ggDy=0;
		el.ggParameter={ rx:0,ry:0,a:0,sx:1,sy:1,def:'' };
		el.ggVisible=true;
		el.className="ggskin ggskin_rectangle ";
		el.ggType='rectangle';
		hs ='';
		hs+='background : rgba(89,89,89,0.392157);';
		hs+='border : 0px solid #000000;';
		hs+='border-radius : 50px;';
		hs+='cursor : pointer;';
		hs+='height : 10px;';
		hs+='left : 45%;';
		hs+='position : absolute;';
		hs+='top : calc(50% - ((10px + 0px) / 2) + 0px);';
		hs+='visibility : inherit;';
		hs+='width : 10px;';
		hs+='pointer-events:auto;';
		el.setAttribute('style',hs);
		el.style.transformOrigin='50% 50%';
		me.__21.ggIsActive=function() {
			if ((this.parentNode) && (this.parentNode.ggIsActive)) {
				return this.parentNode.ggIsActive();
			}
			return false;
		}
		el.ggElementNodeId=function() {
			if ((this.parentNode) && (this.parentNode.ggElementNodeId)) {
				return this.parentNode.ggElementNodeId();
			}
			return player.getCurrentNode();
		}
		me.__21.logicBlock_backgroundcolor = function() {
			var newLogicStateBackgroundColor;
			if (
				((player.getVariableValue('vis_button_2') == true))
			)
			{
				newLogicStateBackgroundColor = 0;
			}
			else {
				newLogicStateBackgroundColor = -1;
			}
			if (me.__21.ggCurrentLogicStateBackgroundColor != newLogicStateBackgroundColor) {
				me.__21.ggCurrentLogicStateBackgroundColor = newLogicStateBackgroundColor;
				me.__21.style.transition='background-color 0s';
				if (me.__21.ggCurrentLogicStateBackgroundColor == 0) {
					me.__21.style.backgroundColor="rgba(89,89,89,1)";
				}
				else {
					me.__21.style.backgroundColor="rgba(89,89,89,0.392157)";
				}
			}
		}
		me.__21.logicBlock_backgroundcolor();
		me.__21.onclick=function (e) {
			player.setVariableValue('vis_button_1', false);
			player.setVariableValue('vis_button_2', true);
			player.setVariableValue('vis_button_3', false);
			player.setVariableValue('vis_button_4', false);
		}
		me.__21.ggUpdatePosition=function (useTransition) {
		}
		me.__13.appendChild(me.__21);
		el=me.__31=document.createElement('div');
		el.ggId="\ubc84\ud2bc3";
		el.ggDy=0;
		el.ggParameter={ rx:0,ry:0,a:0,sx:1,sy:1,def:'' };
		el.ggVisible=true;
		el.className="ggskin ggskin_rectangle ";
		el.ggType='rectangle';
		hs ='';
		hs+='background : rgba(89,89,89,0.392157);';
		hs+='border : 0px solid #000000;';
		hs+='border-radius : 50px;';
		hs+='cursor : pointer;';
		hs+='height : 10px;';
		hs+='left : 53%;';
		hs+='position : absolute;';
		hs+='top : calc(50% - ((10px + 0px) / 2) + 0px);';
		hs+='visibility : inherit;';
		hs+='width : 10px;';
		hs+='pointer-events:auto;';
		el.setAttribute('style',hs);
		el.style.transformOrigin='50% 50%';
		me.__31.ggIsActive=function() {
			if ((this.parentNode) && (this.parentNode.ggIsActive)) {
				return this.parentNode.ggIsActive();
			}
			return false;
		}
		el.ggElementNodeId=function() {
			if ((this.parentNode) && (this.parentNode.ggElementNodeId)) {
				return this.parentNode.ggElementNodeId();
			}
			return player.getCurrentNode();
		}
		me.__31.logicBlock_backgroundcolor = function() {
			var newLogicStateBackgroundColor;
			if (
				((player.getVariableValue('vis_button_3') == true))
			)
			{
				newLogicStateBackgroundColor = 0;
			}
			else {
				newLogicStateBackgroundColor = -1;
			}
			if (me.__31.ggCurrentLogicStateBackgroundColor != newLogicStateBackgroundColor) {
				me.__31.ggCurrentLogicStateBackgroundColor = newLogicStateBackgroundColor;
				me.__31.style.transition='background-color 0s';
				if (me.__31.ggCurrentLogicStateBackgroundColor == 0) {
					me.__31.style.backgroundColor="rgba(89,89,89,1)";
				}
				else {
					me.__31.style.backgroundColor="rgba(89,89,89,0.392157)";
				}
			}
		}
		me.__31.logicBlock_backgroundcolor();
		me.__31.onclick=function (e) {
			player.setVariableValue('vis_button_1', false);
			player.setVariableValue('vis_button_2', false);
			player.setVariableValue('vis_button_3', true);
			player.setVariableValue('vis_button_4', false);
		}
		me.__31.ggUpdatePosition=function (useTransition) {
		}
		me.__13.appendChild(me.__31);
		el=me.__41=document.createElement('div');
		el.ggId="\ubc84\ud2bc4";
		el.ggDy=0;
		el.ggParameter={ rx:0,ry:0,a:0,sx:1,sy:1,def:'' };
		el.ggVisible=true;
		el.className="ggskin ggskin_rectangle ";
		el.ggType='rectangle';
		hs ='';
		hs+='background : rgba(89,89,89,0.392157);';
		hs+='border : 0px solid #000000;';
		hs+='border-radius : 50px;';
		hs+='cursor : pointer;';
		hs+='height : 10px;';
		hs+='left : 61%;';
		hs+='position : absolute;';
		hs+='top : calc(50% - ((10px + 0px) / 2) + 0px);';
		hs+='visibility : inherit;';
		hs+='width : 10px;';
		hs+='pointer-events:auto;';
		el.setAttribute('style',hs);
		el.style.transformOrigin='50% 50%';
		me.__41.ggIsActive=function() {
			if ((this.parentNode) && (this.parentNode.ggIsActive)) {
				return this.parentNode.ggIsActive();
			}
			return false;
		}
		el.ggElementNodeId=function() {
			if ((this.parentNode) && (this.parentNode.ggElementNodeId)) {
				return this.parentNode.ggElementNodeId();
			}
			return player.getCurrentNode();
		}
		me.__41.logicBlock_backgroundcolor = function() {
			var newLogicStateBackgroundColor;
			if (
				((player.getVariableValue('vis_button_4') == true))
			)
			{
				newLogicStateBackgroundColor = 0;
			}
			else {
				newLogicStateBackgroundColor = -1;
			}
			if (me.__41.ggCurrentLogicStateBackgroundColor != newLogicStateBackgroundColor) {
				me.__41.ggCurrentLogicStateBackgroundColor = newLogicStateBackgroundColor;
				me.__41.style.transition='background-color 0s';
				if (me.__41.ggCurrentLogicStateBackgroundColor == 0) {
					me.__41.style.backgroundColor="rgba(89,89,89,1)";
				}
				else {
					me.__41.style.backgroundColor="rgba(89,89,89,0.392157)";
				}
			}
		}
		me.__41.logicBlock_backgroundcolor();
		me.__41.onclick=function (e) {
			player.setVariableValue('vis_button_1', false);
			player.setVariableValue('vis_button_2', false);
			player.setVariableValue('vis_button_3', false);
			player.setVariableValue('vis_button_4', true);
		}
		me.__41.ggUpdatePosition=function (useTransition) {
		}
		me.__13.appendChild(me.__41);
		me.__11.appendChild(me.__13);
		el=me.__12=document.createElement('div');
		el.ggId="\uc774\ubbf8\uc9c0\ubc30\uacbd-1";
		el.ggDx=0;
		el.ggDy=0;
		el.ggParameter={ rx:0,ry:0,a:0,sx:1,sy:1,def:'' };
		el.ggVisible=true;
		el.className="ggskin ggskin_rectangle ";
		el.ggType='rectangle';
		hs ='';
		hs+='background : #f3f3f3;';
		hs+='border : 0px solid #000000;';
		hs+='border-radius : 30px;';
		hs+='cursor : default;';
		hs+='height : 100%;';
		hs+='left : calc(50% - ((100% + 0px) / 2) + 0px);';
		hs+='opacity : 0.01;';
		hs+='position : absolute;';
		hs+='top : calc(50% - ((100% + 0px) / 2) + 0px);';
		hs+='visibility : inherit;';
		hs+='width : 100%;';
		hs+='pointer-events:auto;';
		el.setAttribute('style',hs);
		el.style.transformOrigin='50% 50%';
		me.__12.ggIsActive=function() {
			if ((this.parentNode) && (this.parentNode.ggIsActive)) {
				return this.parentNode.ggIsActive();
			}
			return false;
		}
		el.ggElementNodeId=function() {
			if ((this.parentNode) && (this.parentNode.ggElementNodeId)) {
				return this.parentNode.ggElementNodeId();
			}
			return player.getCurrentNode();
		}
		me.__12.logicBlock_alpha = function() {
			var newLogicStateAlpha;
			if (
				((player.getVariableValue('vis_button_1') == true))
			)
			{
				newLogicStateAlpha = 0;
			}
			else {
				newLogicStateAlpha = -1;
			}
			if (me.__12.ggCurrentLogicStateAlpha != newLogicStateAlpha) {
				me.__12.ggCurrentLogicStateAlpha = newLogicStateAlpha;
				me.__12.style.transition='opacity 0s';
				if (me.__12.ggCurrentLogicStateAlpha == 0) {
					me.__12.style.visibility=me.__12.ggVisible?'inherit':'hidden';
					me.__12.style.opacity=1;
				}
				else {
					me.__12.style.visibility=me.__12.ggVisible?'inherit':'hidden';
					me.__12.style.opacity=0.01;
				}
			}
		}
		me.__12.logicBlock_alpha();
		me.__12.ggUpdatePosition=function (useTransition) {
		}
		el=me._image_1111=document.createElement('div');
		els=me._image_1111__img=document.createElement('img');
		els.className='ggskin ggskin_image_1111';
		hs='data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAAJkAAACfCAYAAADqBXunAAAACXBIWXMAAAsTAAALEwEAmpwYAAAbbUlEQVR4nO2dS4wcx3nHf1Xz2iV3+VhRtldeSqQepF6OZdmxZYtWbB/8vEi5GIlyiA3nafiYXBzkECBIkCDOwQkM5GBbgC9OgEA5SHYOUaTAUWRDiJnYImEpEEVLlmyRImkuyX3MdFUO1VVdVV09s0sOudya+QvLmenprq7d/ut7/L+vusXKygrXAO8APgy8BzgE7Af2AfPATmDHtZjEhOIScBFYBk4DrwI/AY4C3wPeuNoTEFeJZC3gI8DDwMeAu6/GSaYYC44BTwGPA08DxbhPMG6SLQJfBD4H3DTOgae4Jngd+Cbwd4zRwo2LZAeAPwI+D8yMY8ApthSrwNeBvwZeudLBrpRku4A/Bb4EdK90MlNcd1gHvg'+
			'r8GXD+cge5EpJ9CvgHYOlyB5hi2+A14HeB71zOwfIyjukAXwGeYEqwScES5nr/Deb6bwqbtWSLwD8DD2z2RFNkg+eAX2cTicFmLNntwLNMCTbpeAD4TwwfNoSNkux+jHB3YPNzmiJDHMTw4f6N7LwRkr0L+C7w9iuY1BT54e0YXtw7asdRJFsCngRuHMOkpsgPN2IyzqEJ4DCSdYF/GjXAFBOPJeAfGaKTDiPZnzMN8qfYGD6I4UsSTRLGpzC6iLhKk5oiP2jgMyQE2xTJdgAvMM0kp9g8XgHuwbQXObQTO36ZKcEasbKyglIKIYyR37FjB/1+n7Nnz6K15tzZcyitWF9fZ2VlhaV3LrG0f2LC2gMY/nzZ3xhbsoPAcaB3zaY1JgwGA06ePMn58+eZnZ1laWmJubk5Xn75Zc6cOUO306Xb69JqtThz5izPP/88u3ft'+
			'ptPtIISg024zv2ueEydeob++zq5du+h0u0gpWbl0ibn5edZWVzlz9iwLexcoigGra2sURUF/vU9RDLjn3nvZtWue5fPLrKyscOnSJV586SXe+977+eQnP+mImTnWgLuAE3ZDTLKvY3rBth2e+renWF9f580332RtbY2Z2Rk67Tb9/oB3v/tXuHTpEuvrffr9ddbW1hBCsm/fPubm55BSUgwGSCnp9WYQQjAzO4OUkrZsIVst2p02UkrQ0Gq1kFLS7w9QSgGa9f46qijQWgOCXbt2cfz4cR577DEOHz7M/fffz/s/8P6t/jNdK3wD0/YFhO5yP/DoNZ/OmHDm7BluuGEfX/idL6AVtNpV4jwYrNPv9xECer0eQqSiBB8KtDahLBqlNFqbV6UUWsNg0Kfor5vPKNAKdIFWGq1BFQPQisFgwKlTp/jRj3/Mz17/GY888s'+
			'jV/DNcL3gU0wL2GoQk+z22cU9YS7bole6tUAWqGJiLDyhVMBj0AZBC0G4VaO0dLCgJBVrr0hoZsuhyR/O++tzv91FaobSxZGhVDScEUkrOnTvHiRMnWFy8iQvLy/S6PQaDAe32KJJve3SB3wf+BCqdTAC/tVUzGhd8QqiSFVprtPIIICU1ZUZXmyzJAhJ6EEKgtaZwrtF9E+ynlKIoCpaXl2m322ituXDhAisrq1f2S24fPEr5R7Ekewi4ZcumMwYIIXCXXNhLLhEIEMJlhKngW3gEs6gsGs6y+d9Zkhk3qko3qoLjVldW0EXBsWPHOH36Lfbs3s2Zt06P/Xe/TnEAwyvnLj+7ZVMZE7TWlS3RoIXA0s4SQkppSGb5UrrJMvQqD60TyrxWn9fX1gIC+tZPa+2IbIinWT5/nmMv/JhBv8/p06e55cAtHDlyhL0Le6/W'+
			'n+N6wWeBZyzJPr2VMxkHmtybtTpCCFqyhSzdXbhT+N4nVPVqiaPpDwZD56KU8ly0ic+UgmPHjvHyyy9z3/n7uHjhIvtuvIEHjxxhdnZ2c7/s9sFnwFiyA2xzV2mQZpkq3ZmUEtmSjYfoxPFC+OQ1b5Qa1EnaMJfANWtNp9NhMOjz7LPP8sILL3Dbbbfx6slXec977+e+99w3YsxtiZuBA20gC/GmFmtpUbJkAKULs0G7pUhoqcKxfPdX7aNNlioUKFG5SaXRWgTWtJYSuPkJut0OFy9e5Ic//CEnT57kzTdP5UoygA+0MepstlAlqYQQnlJRxl2edGG2pi2U1mZfVSiKYuDiOK0r36rL/+p+W7tEpPpGIKWZzy/PneP0qVPj+WWvT9zVBg5v9SyuJkxCIJBCAMLxqwr269bMWLvIuiFQqqAoVGnhqkyy8qgRwYS1pn'+
			'Vnbo8TUiDbrTH9ttclDrWBO7Z6FuNAcLHB8EkrlCoQUiCExNkqT2y1x/qv5kOcOWoGg8J9GXwXn7+0cCWt/Sk5OaUSfEXu/VSHJJm0VtctT2ltrD4mw0s+jGApt2mzVPveHR+NEVi30npW+p1wc3MH548bJeb2TdsegU5mtqBUgbIWJSHCVsSKdLHIioHR2kydsswc64OVxNahRRT1c/ui8QRgLhuStWQrMgwapVUZFpWZJWGsJWycRlgJSEkU1sVpZS2VVfhV5TKpKg/+GPb8VX5pz5M+V2aYl1zGsvPrEcp1TXgoRVRzgb2gPyDA6LFNPBbrY9r9CAitnxdzAZUltURrKG9lik427QBSCF+Kcm5PaJBCOlcWM7FJK/NRFEVQq/Q1NOcevRivqlqV5K6mVZa7JguXc8OV6xK+ZTCWRbs6oigJKITvquICeDNswG+M'+
			'YYOW5o0jvPf2hI7/8TwnANlYsv5gUCn5lCKsvegu9qoH5jHRYvLZlh1nrRLShtZV1hjKKMK5ST+zFEJUtc0JYFo2lqwlQ0HTtyqGZJfnKm0bT7x/aNHqImxqTBHtA8ad545sLJnvCq27NDVLifSC/rClJ0QlkFZkctKFVz4KC+fe8bU3dj5eoO/LJhMS/GdDMuW1P2uN68unJdBl+qepyCXKgqLWlZVKudKiKMzYuipR2UzWJ6ou27BNQltmnfZVaoSq5gYY8gvlBNuckQ3JwpzNCLFWt4IGyzPCXZpaZRFYprj0ZN+YxSR4gZkncQhREk4gRZVhqjgbyRTZxGQ+lNZG6RejRda4vOTvO6j18ZffkUge6sWDgNi+Z4yTgdyRjSXzXZcqjG+SUniWLKpNlu7Ob7f23aVSClUoJ4PEmpglmvm+Ml6x0FuRXLiNQk9OPA'+
			'YZWTIpZC2UF0KmLZlvdXS6vFOogkKVBfHIcgVjUFosbwy/gO6XrBpV/swzzGxIZoNzoGwSFIG7TLnDGEFWOTALdYOFJ0Q6ml8LFfH3JgZL0SpzTtWQDckMqcx7Sw4pfYKlSZWyUlaATe1fY43jWCXtVxbLKzElQjCr4eXuObOJyXwUqnBa1jB1P0SkjWmVPNbnaiWD6OD7sNPDkk46aUxKidYa2Wpln1lCRiQzOllluRrDn8bYymgPtpQUFLyjn+S4PrF8Wdjf3VmtUuvQVvPIG9mQrNKmDEQUDwXyVlSnDD6rUmOLSkexVasV2GtZh5lParMuXbv53yL/CC2fmKx0Qe6zwAVBtVgqaTxK6UIrlPKqAlRUaUwWStE+LdTGExUumcg9FrPIhmRuZbjjU9gTEdg1nXKDOFdZ68xQkbUjtHIu+PfbeBoY5FqP3JqD/JmW'+
			'jbs0mlbd+TT1fzXBJxkkRFzzpiJqKmslUFO8DFKglahbvcyRkSUzv4q7qNZSbOJauqA/sb0JzkIGmaxReIWQXqu17S3b+HxyQTaWzKCMpbxuWKi3SjcXxG0ZieCYqk2nbhndmKqeKLTbbVrtViAKiwmzYpCRJQtR5ZY6cGsJ12c/a//GdqIelzGcoBpdj8NiwxUWB8IdM0amJLOF7DA4D8RZz1KBRzKvAhBklYnSkvu+JFhMtLCGCZ5nrc03Z2TjLmvrKW0z7AgXaWGsWNWcWA4aEComl3OfmhoxlVLMz82zc+fOak5UFQD/LkO5IxuS1ZDI/JrKSq6UpNJZpdkQvt8Ice0Niu1786q97To4Z67I1F1WnBhGtOq9qmWVGyHRMEgpuXDhAhcuLDuiGQhP1pBlET/vmCwbSxavVrJ3I6stU6tBUxT1FUnBHkPINlqHq6'+
			'yW1qYN27ZfG3eZN8EgI0sWZnbDa0h+nGYfANG0e1PWaH9qHWORRNFqSXdDZCklsnydoNsU5EOy0N358VhCvoiyykDl15HlSmhjaBBahPvGPfyUtzdwD/sqV7HLKuifFJplQzIHEbxg+xV1Q7Ceiseq73SQPcZdseHOpC2bLu/06NUqw97//JFNTGb78S0MF0ZEY1qXt+dMJQORjJGwhMl9IylFa0CCUF6fvxZhB23mCWY2JOu0yztgafA7MIJyUtSyM6pWWdPEdOiGLZzeJWpfYZIPYXll1v16C0vMPf7TljQXZOMuVe0GJpHi7zbp4Bh3c7uGDLLu/myJqSGztJxMjSc8MRZc8VzIvF1nNpYsdJfNwkLg5lRIrnqPWfrHO011phRP/O4LDOeFsEd4CUDm8Vk2lqzmxVK1xujHJ2ZQNorirdjlpuIxdyfHCGEZCROf'+
			'eW2Vk9D+kw3JhFXVvTUcENYUY1cZWyW7v1/z9Mcww6YZ4cgW3eQu5l3Vf6ZdbCYzZ1k2JKtY0vBdtN0+OjDYS9fNYBDQ0xBrpcaIpJRgLgnBN2dkE5MlA/TA9YVuzz7mOYjJfGvnZ5MNGlvQRWHNVvka3yu2WjUiAOWahCYB2ViyMACP7Uf0cC1dX1sZW7tYukieM0G6mJCu1pDaN3M3aZENyWyPf3lFGzNCv4wUCqwE+zjEpUnh+UG/lGSD+Thb1O7A+thX0OWxnZCNu/TbaYyVas4KffHTF2jjspHWiViuXKkuyhZt/0EUzl26eWi0Vma5HtZRmjVVwsZmztTli2xIZm6Q4lmLDVgys4H0fS8ahTbzjw42eftHar8us0iXadpEwrn1zBlGRiSzSF2ymuZFaK20ai5B+WO4TDM+yRCeOO5NiGtMIZuYzCAuI9UzSj'+
			'/gT3VX+EOlvvNvEbUR+LvViTakWpARsiFZq93Crh5xpNImJorVfAuzT70Lo5F4fkOirguvQWdF+E1wTjf2hBi3bNzlnj17CaNoSxwc8VTZO2ZjsrqMUUfNTXruMshOy3907ekP7gT1cS/nF92GyMaSoStSGWJ4X3mxV7KOiS/QNlz6kmC+VBGwZJTsNeQu3Ln3yGZjyex1svcWw3d3nrWyD0ZN1S3tPva1Zmt0KHkAXodFOinQQKP7nRDkY8k8+SIVV2nlWaqoR7D2ZF1LoGEWprRcTWRt2jaJRMvHkpV6VLjJyyx12JyYrGsSyhvDSObutSFGWKiGIeKaac7Ix5J5BFN+6SiWL6Duurxcoer1KkmU6JqIxxjWdKi9QnzdbeZNLot8SKarJ4dQWiU/i0wRzBGQcFs1pHbNiEHNMjivd0wU/Gus0Nvgwt2x08B/e0BA'+
			't9utrIan4vuyBURlILOhhtgF+l0ZwWn9rDEeNzF0KOyW3+fNsYxIpqHf75u3kXuqFcQ96xMXyIeNH6BkSECsDcRfVQ+aN7/EgylyQj4kEyBbrZo8ERe/A7miJEhtxVLUup06V7IgXisQiIDo4atV/fOPy7KJyaSQLC3dSH/QB5TJ+sqYKC4r+fpZikhBVmlLRUERsvoucXBtNx9hxmtehcjmMiSRzW+3c+cOdu+Zo1BF3QWOiLkaOy6CjeVr1KhYyyx144dg7CpByR/ZuMtut0u7tRM1GKCUQkRlopTqPrJQ7cddie9sVAdRv787QfUwsHQ5azKQjSXTZZrm1yNRIbFigoXHh/GY2ZjQwPxYbBhB7U5J6aLh3JkiG0sGuAsuKMtIDaRKWjO73b/eom7F/FZr9748NmjDDqdUn6q23wrkdAX5NoLNCrGZ4+jCtCtwR+'+
			'O4Los4FvO2jUwaygOSir8utw/r/MgE+Viy2Kup0TFPKG2EJSIdmEXSZAOErluz8Bxg74EWC8PaHzdj5GPJGjLI2ErUSGBrk1E5yB+v9hzzyKUOV+xT1q76ahJ4lp8lK6+adZeQcFU+oqvsJwBOTCUdb8X7h5nokKK5f+rMXSXkZMkoSUH5ZBGlAj44ucHXuVICq7/Jc3+uWE497vIfL2i1M3cTxUTt1DuB2ZZ33J8RySIRVEX1QbwYqKpbJmDdX0K+COqdKWKkJI94l4ReRuYPjMiHZCL1oX7BndRgLZPt4BGelTLKQlUHbSDU0M9DMJTkGSKfmAxftlDOdUJdjY91MZ9gNv5yaOZrABuzhTmtCOSL+rkng2b5kMzTrpQ2z6ysHkeYVthrJJRGkvC/s2PXbhNF2D3rLF6NN0PKWROCfEhGZGycop7O4Oy2OPhPZZD1'+
			'g+1LZPUSBEudN6xdZh71k1lMZiQBa1Aqpd0itiDBcrZhQw95gL0jpaiyzHDs+hyq9/afvJEPycprpfSIp4tE2zzfF8DvIfOPtW7Rf9CDEKK6P5qoE2zYj1IKFa/RywxZuUsgVjpxMVFpcWJLpivfZ7aVGefQfjLrVr0YzH72E47a1BI6mTtnxsjHkgUXvHrV/gfCVUea+tpK51JF3TX6tyZw74fyI4zX6v1kho6538c/H0s28oJX8DPFxjK6xtw8JbZW9uuGWKq+3bZaq6S7RGu3sipXZGnJfJG1jvCCDnsiiFtzaccLJbB6339SvhgWlyUy1AyRD8ksolacGPWwSCfLRLX1lOXYvnDb9BSSjSNvC2aRj7uE0troMsNsvoCNQX20j80wbTeG2TXS3qKylL9PuWNjB4j2tLyckY8l8xT/jcY4zlXG9UtfP4tdmu8mo0'+
			'J69URe64JFmXyEZaVQwgjbxHNEXpYMqPs96rGUjohUIq4v+nDb/K90gpgJLS6ljZVfAkx7/LcfRrhCm4UmxFmgnjAk6pH2YajWavnnEUFQ6Ol0kcv03zcJyLkgH0vmqfP2wuKtHg9gy5MJC1eRsNoXKlfoNzIKKQJrFlpJgVLV6vBwDrr6VyepnhXysWRBghh2RwzrekjdESrsM7P71C2feYC99yf0CWc31Eavf54q/tsIG7IIkb7lDJZX5A5EV3fQkBN4iUDaLo2aWd62LB+SDdNfCQvaQcCeKP0EbhPr6tKjVy1Dojou+j75o5LqbZbIh2Samv0Jv662xQQLW3SiDgufvaFPrb+NqwCkSRbPJ3fkE/gTx2RNMZgXvFv35munUJUF/O8bzGT4VJJmGSNE/Hkak20PBK6NtHTh7Vu78C4BEIFlC3cRodsNhk+ROtTQ'+
			'aifLnFwWWVkyIxvYbgcVFCqtBYvFVyGE6bbwpIpwRG9xiahngqpctGKJG3bRpmcZEzz3AnlmJBvlpsI2n+ZRPGvoPSvJr2H64yVOvUEYP6wzF2PzcZclYn01dqNuVRHedh19tseXT9wdej4/u2R0QB9a08lwm5mRLKxH6iHXzhXGU/t4xfZGoTRxbMrtxXf0SZ0od3eZGclCGB4kLqD2ssZEXdJvra7VGkXaRdrxUu3c/qs9R7hP/u6yv9WTGBtSfGqIy5oCfX8s/ym9PrGci401sQnSvjaBvgSWt3oWY0NNbcerQQpvt8pNNVkYvwhupIvKytX7xtIW02tVa0DebrLEsgQubPUsriZqAmmizhjc+iKxQNcdIEIdzW96dHJIorLgvw8D/4mwfBckcHqrZ3E10dRsWNUwIe1n65mn1cyqlUZ2u3euTfFmIizZaQmc3O'+
			'pZjBWRhhH0ekXfx92xdiVk43I3wjbsasFwekxR9gmN6q7O/Ikkr0rgJ1s9i3FBSFOzdHc11GlLFpLLC+6pskq/97+mq9l9RUU8KWQ9ZhOy7DdrIK7WDAYDlMr6AV7HJfA/Wz2LcUJ7/4IXbwUdPVEBPKqn15T92DpSWbGq1ay+flIIyntkpPQz8z/D3XffxZ69ezfzK243/G8beG6rZzFOWL4IbclSfhHFZMJzn9rbXrk3kTimvKmddx7f8sW1Syiz08gSKqWYn5/njtsPcfC2W/n4Jz4+ht/8usV/tYFXgJ8CN2/tXK4MWmukbDE7u5N2u4uUgpaUaMpHDaJBaQqlSvFTYPvrpTQEUdoEWHZ1t11s4q/2Lg8LeteMmzXSb2UABToqOfQHfbqdLocPH+bWgwf51Qce4H3ve981+ftsEX4KvGIL5E8Af7CFk7lizM3N'+
			'8/jj/8IzzzzD3M6dtDsdVi5eotPt0Ol26Ha69Ho9Op0OM7MzdDtdZmdn6fZ6tFstZKtFt9Oh1+sxMzNDt9ej1+3R6bYRCFrtdrCfW60k7GNrtLfYBHbs2MHCwj727l1gdXWNVktyz933cvDgAQ7feScPPvggvZmZrf6zXW08AVUXxrfZ5iS79daDfOfJJ3nj9dc5f34ZrRUvvvgS/X6fhx56iBv23UAxKBgM+gwGBRcuLLO6uoaUkl6vy8LCAuv9Pm+dPu0eeKq1ptPp8M6ldzK3c6c7V1EUWIe5c26OmV6PVqvNbEnidrvN/Pw8v3jzTZSC/fv3c+jQIRYXF/nIxz7K4uLilv2drjG+DSBWVlbAlJdeBm7ZyhldKZ5++hneduPbeOyxb/L0089w+q1TvOved/Hww4+weNMii4vvYN++fRRFgZQSpTSvv/4z1tbWaM'+
			'kWAK1Wi/X+Oj9/4+ecX14GrVlYWGAwGHDx4kVWV1Y5+8tznHnrDO1OizsP38na2hozMzN8/7nv84Pv/4B77rmbQikW9i6wf/8Sdxw6xN69e/i1j35kS/8+1xgngVsBZS2ZAr4FfHnLpjQGfOhDH+To0aN8+KEPI6Wk3Wlz0+JN/Oajv0G3200es3//0mWdq9/vs76+jpSSVqvFd7/7r9x8882oQnH77bdxx+FDLC0tsXv3blqtFgdvPXglv9p2xLcwvHKWDEzg/39AZ4smNTasrq46dyelZOYaxD7Ly8scPXqU1ZVVZnfMcuTIkat+zusY68AdmMA/IBnA14HPbcGkpsgL3wA+bz/EJDsIHAd613hSU+SDNeAu4ITdEBfNTgBfuZYzmiI7fAWPYFC3ZAA7gGNs80xzii3BSeBu4JK/MVX+vwR88VrMaIrs8EUigkFz'+
			'j/8TwNeu6nSmyA1fo1T4Y6TcpUUP+B6QdXFtirHgeeAIJuivYVi33BrwCPDaVZjUFPngNQxPkgSD0UviXgM+TeYt2lNcNk5j+DHUEG2k7/dHwCeAU2OY1BT54BcYXvxo1I4bbS7/b4zPfeXy5zRFRngFeAjDi5HYzAqGF4EPkVkn7RSbxnMYHry40QM2u0zmDQyD/5YJWTQ4hYPGXPeHMDzYMIZJGKPwGeDvmVYGJgEngT8Enrycg69kwd8TmBLCX2JaO6bID+vAX2Cu82URDK7Mkvk4APwxpr1j2sGx/bGGafv6K8aQ7I2LZBaLwJeA3y7fT7G98AbwTeCrbDLuGoZxk8yiBXwMeBj4KKa/aIrrE8eBfwceB54Cxr6c/WqRLMYiJiu5DziMSRbeBswBe67FBCYc5zB3b/oFxv29BBwF/oMxWqwm/D9TLhASETEp8Q'+
			'AAAABJRU5ErkJggg==';
		els.setAttribute('src',hs);
		els.ggNormalSrc=hs;
		hs ='';
		hs += 'position: absolute;top: 0px;left: 0px;width: 100%;height: 100%;-webkit-user-drag:none;pointer-events:none;;';
		els.setAttribute('style', hs);
		els.className='ggskin ggskin_image';
		els['ondragstart']=function() { return false; };
		player.checkLoaded.push(els);
		el.appendChild(els);
		el.ggSubElement = els;
		el.ggId="Image 1111";
		el.ggDx=0;
		el.ggDy=0;
		el.ggParameter={ rx:0,ry:0,a:0,sx:1,sy:1,def:'' };
		el.ggVisible=true;
		el.className="ggskin ggskin_image ";
		el.ggType='image';
		hs ='';
		hs+='height : 100%;';
		hs+='left : calc(50% - ((100% + 0px) / 2) + 0px);';
		hs+='position : absolute;';
		hs+='top : calc(50% - ((100% + 0px) / 2) + 0px);';
		hs+='visibility : inherit;';
		hs+='width : 100%;';
		hs+='pointer-events:auto;';
		el.setAttribute('style',hs);
		el.style.transformOrigin='50% 50%';
		me._image_1111.ggIsActive=function() {
			if ((this.parentNode) && (this.parentNode.ggIsActive)) {
				return this.parentNode.ggIsActive();
			}
			return false;
		}
		el.ggElementNodeId=function() {
			if ((this.parentNode) && (this.parentNode.ggElementNodeId)) {
				return this.parentNode.ggElementNodeId();
			}
			return player.getCurrentNode();
		}
		me._image_1111.ggUpdatePosition=function (useTransition) {
		}
		me.__12.appendChild(me._image_1111);
		me.__11.appendChild(me.__12);
		el=me.__20=document.createElement('div');
		el.ggId="\uc774\ubbf8\uc9c0\ubc30\uacbd-2";
		el.ggDx=0;
		el.ggDy=1;
		el.ggParameter={ rx:0,ry:0,a:0,sx:1,sy:1,def:'' };
		el.ggVisible=true;
		el.className="ggskin ggskin_rectangle ";
		el.ggType='rectangle';
		hs ='';
		hs+='background : #f3f3f3;';
		hs+='border : 0px solid #000000;';
		hs+='border-radius : 30px;';
		hs+='cursor : default;';
		hs+='height : 100%;';
		hs+='left : calc(50% - ((100% + 0px) / 2) + 0px);';
		hs+='opacity : 0.01;';
		hs+='position : absolute;';
		hs+='top : calc(50% - ((100% + 0px) / 2) + 1px);';
		hs+='visibility : inherit;';
		hs+='width : 100%;';
		hs+='pointer-events:auto;';
		el.setAttribute('style',hs);
		el.style.transformOrigin='50% 50%';
		me.__20.ggIsActive=function() {
			if ((this.parentNode) && (this.parentNode.ggIsActive)) {
				return this.parentNode.ggIsActive();
			}
			return false;
		}
		el.ggElementNodeId=function() {
			if ((this.parentNode) && (this.parentNode.ggElementNodeId)) {
				return this.parentNode.ggElementNodeId();
			}
			return player.getCurrentNode();
		}
		me.__20.logicBlock_alpha = function() {
			var newLogicStateAlpha;
			if (
				((player.getVariableValue('vis_button_2') == true))
			)
			{
				newLogicStateAlpha = 0;
			}
			else {
				newLogicStateAlpha = -1;
			}
			if (me.__20.ggCurrentLogicStateAlpha != newLogicStateAlpha) {
				me.__20.ggCurrentLogicStateAlpha = newLogicStateAlpha;
				me.__20.style.transition='opacity 0s';
				if (me.__20.ggCurrentLogicStateAlpha == 0) {
					me.__20.style.visibility=me.__20.ggVisible?'inherit':'hidden';
					me.__20.style.opacity=1;
				}
				else {
					me.__20.style.visibility=me.__20.ggVisible?'inherit':'hidden';
					me.__20.style.opacity=0.01;
				}
			}
		}
		me.__20.logicBlock_alpha();
		me.__20.ggUpdatePosition=function (useTransition) {
		}
		el=me._image_21=document.createElement('div');
		els=me._image_21__img=document.createElement('img');
		els.className='ggskin ggskin_image_21';
		hs=basePath + 'images/image_21.png';
		els.setAttribute('src',hs);
		els.ggNormalSrc=hs;
		hs ='';
		hs += 'position: absolute;top: 0px;left: 0px;width: 100%;height: 100%;-webkit-user-drag:none;pointer-events:none;;';
		els.setAttribute('style', hs);
		els.className='ggskin ggskin_image';
		els['ondragstart']=function() { return false; };
		player.checkLoaded.push(els);
		el.appendChild(els);
		el.ggSubElement = els;
		el.ggId="Image 21";
		el.ggDx=0;
		el.ggDy=-1;
		el.ggParameter={ rx:0,ry:0,a:0,sx:1,sy:1,def:'' };
		el.ggVisible=true;
		el.className="ggskin ggskin_image ";
		el.ggType='image';
		hs ='';
		hs+='height : 100%;';
		hs+='left : calc(50% - ((100% + 0px) / 2) + 0px);';
		hs+='position : absolute;';
		hs+='top : calc(50% - ((100% + 0px) / 2) - 1px);';
		hs+='visibility : inherit;';
		hs+='width : 100%;';
		hs+='pointer-events:auto;';
		el.setAttribute('style',hs);
		el.style.transformOrigin='50% 50%';
		me._image_21.ggIsActive=function() {
			if ((this.parentNode) && (this.parentNode.ggIsActive)) {
				return this.parentNode.ggIsActive();
			}
			return false;
		}
		el.ggElementNodeId=function() {
			if ((this.parentNode) && (this.parentNode.ggElementNodeId)) {
				return this.parentNode.ggElementNodeId();
			}
			return player.getCurrentNode();
		}
		me._image_21.ggUpdatePosition=function (useTransition) {
		}
		me.__20.appendChild(me._image_21);
		me.__11.appendChild(me.__20);
		el=me.__30=document.createElement('div');
		el.ggId="\uc774\ubbf8\uc9c0\ubc30\uacbd-3";
		el.ggDx=0;
		el.ggDy=2;
		el.ggParameter={ rx:0,ry:0,a:0,sx:1,sy:1,def:'' };
		el.ggVisible=true;
		el.className="ggskin ggskin_rectangle ";
		el.ggType='rectangle';
		hs ='';
		hs+='background : #f3f3f3;';
		hs+='border : 0px solid #000000;';
		hs+='border-radius : 30px;';
		hs+='cursor : default;';
		hs+='height : 100%;';
		hs+='left : calc(50% - ((100% + 0px) / 2) + 0px);';
		hs+='opacity : 0.01;';
		hs+='position : absolute;';
		hs+='top : calc(50% - ((100% + 0px) / 2) + 2px);';
		hs+='visibility : inherit;';
		hs+='width : 100%;';
		hs+='pointer-events:auto;';
		el.setAttribute('style',hs);
		el.style.transformOrigin='50% 50%';
		me.__30.ggIsActive=function() {
			if ((this.parentNode) && (this.parentNode.ggIsActive)) {
				return this.parentNode.ggIsActive();
			}
			return false;
		}
		el.ggElementNodeId=function() {
			if ((this.parentNode) && (this.parentNode.ggElementNodeId)) {
				return this.parentNode.ggElementNodeId();
			}
			return player.getCurrentNode();
		}
		me.__30.logicBlock_alpha = function() {
			var newLogicStateAlpha;
			if (
				((player.getVariableValue('vis_button_3') == true))
			)
			{
				newLogicStateAlpha = 0;
			}
			else {
				newLogicStateAlpha = -1;
			}
			if (me.__30.ggCurrentLogicStateAlpha != newLogicStateAlpha) {
				me.__30.ggCurrentLogicStateAlpha = newLogicStateAlpha;
				me.__30.style.transition='opacity 0s';
				if (me.__30.ggCurrentLogicStateAlpha == 0) {
					me.__30.style.visibility=me.__30.ggVisible?'inherit':'hidden';
					me.__30.style.opacity=1;
				}
				else {
					me.__30.style.visibility=me.__30.ggVisible?'inherit':'hidden';
					me.__30.style.opacity=0.01;
				}
			}
		}
		me.__30.logicBlock_alpha();
		me.__30.ggUpdatePosition=function (useTransition) {
		}
		el=me._image_31=document.createElement('div');
		els=me._image_31__img=document.createElement('img');
		els.className='ggskin ggskin_image_31';
		hs='data:image/png;base64,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';
		els.setAttribute('src',hs);
		els.ggNormalSrc=hs;
		hs ='';
		hs += 'position: absolute;top: 0px;left: 0px;width: 100%;height: 100%;-webkit-user-drag:none;pointer-events:none;;';
		els.setAttribute('style', hs);
		els.className='ggskin ggskin_image';
		els['ondragstart']=function() { return false; };
		player.checkLoaded.push(els);
		el.appendChild(els);
		el.ggSubElement = els;
		el.ggId="Image 31";
		el.ggDx=0;
		el.ggDy=-1;
		el.ggParameter={ rx:0,ry:0,a:0,sx:1,sy:1,def:'' };
		el.ggVisible=true;
		el.className="ggskin ggskin_image ";
		el.ggType='image';
		hs ='';
		hs+='height : 100%;';
		hs+='left : calc(50% - ((100% + 0px) / 2) + 0px);';
		hs+='position : absolute;';
		hs+='top : calc(50% - ((100% + 0px) / 2) - 1px);';
		hs+='visibility : inherit;';
		hs+='width : 100%;';
		hs+='pointer-events:auto;';
		el.setAttribute('style',hs);
		el.style.transformOrigin='50% 50%';
		me._image_31.ggIsActive=function() {
			if ((this.parentNode) && (this.parentNode.ggIsActive)) {
				return this.parentNode.ggIsActive();
			}
			return false;
		}
		el.ggElementNodeId=function() {
			if ((this.parentNode) && (this.parentNode.ggElementNodeId)) {
				return this.parentNode.ggElementNodeId();
			}
			return player.getCurrentNode();
		}
		me._image_31.ggUpdatePosition=function (useTransition) {
		}
		me.__30.appendChild(me._image_31);
		me.__11.appendChild(me.__30);
		el=me.__40=document.createElement('div');
		el.ggId="\uc774\ubbf8\uc9c0\ubc30\uacbd-4";
		el.ggDx=0;
		el.ggDy=2;
		el.ggParameter={ rx:0,ry:0,a:0,sx:1,sy:1,def:'' };
		el.ggVisible=true;
		el.className="ggskin ggskin_rectangle ";
		el.ggType='rectangle';
		hs ='';
		hs+='background : #f3f3f3;';
		hs+='border : 0px solid #000000;';
		hs+='border-radius : 30px;';
		hs+='cursor : default;';
		hs+='height : 100%;';
		hs+='left : calc(50% - ((100% + 0px) / 2) + 0px);';
		hs+='opacity : 0.01;';
		hs+='position : absolute;';
		hs+='top : calc(50% - ((100% + 0px) / 2) + 2px);';
		hs+='visibility : inherit;';
		hs+='width : 100%;';
		hs+='pointer-events:auto;';
		el.setAttribute('style',hs);
		el.style.transformOrigin='50% 50%';
		me.__40.ggIsActive=function() {
			if ((this.parentNode) && (this.parentNode.ggIsActive)) {
				return this.parentNode.ggIsActive();
			}
			return false;
		}
		el.ggElementNodeId=function() {
			if ((this.parentNode) && (this.parentNode.ggElementNodeId)) {
				return this.parentNode.ggElementNodeId();
			}
			return player.getCurrentNode();
		}
		me.__40.logicBlock_alpha = function() {
			var newLogicStateAlpha;
			if (
				((player.getVariableValue('vis_button_4') == true))
			)
			{
				newLogicStateAlpha = 0;
			}
			else {
				newLogicStateAlpha = -1;
			}
			if (me.__40.ggCurrentLogicStateAlpha != newLogicStateAlpha) {
				me.__40.ggCurrentLogicStateAlpha = newLogicStateAlpha;
				me.__40.style.transition='opacity 0s';
				if (me.__40.ggCurrentLogicStateAlpha == 0) {
					me.__40.style.visibility=me.__40.ggVisible?'inherit':'hidden';
					me.__40.style.opacity=1;
				}
				else {
					me.__40.style.visibility=me.__40.ggVisible?'inherit':'hidden';
					me.__40.style.opacity=0.01;
				}
			}
		}
		me.__40.logicBlock_alpha();
		me.__40.ggUpdatePosition=function (useTransition) {
		}
		el=me._image_41=document.createElement('div');
		els=me._image_41__img=document.createElement('img');
		els.className='ggskin ggskin_image_41';
		hs='data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAAJkAAACfCAYAAADqBXunAAAACXBIWXMAAAsTAAALEwEAmpwYAAA2RUlEQVR4nO29eaxk133n9znn3KX2evvaezebzeYmkRIpkqIsy7Eta7EteUngeDyeeIyMnUEGDibBDDAeDDABgplJ4iDxgiCDjB3AyBiyx44VS5bH2imJkSVTEpdms9l79+u3V9Wr9S7nnPxx762q12xKlNTvNXnVX7D5XtWtuve8ut/6nd/5/b7n9xP9fp99wDLwHuBh4BRwGJgDJoDSfgzgBxgR0AEaQAu4BJwFvgl8AVjZ6wGIPSKZBH4I+DngfcC9e3GRu7gteBn4DPBHwDOAud0XuN0kWwZ+Dfg7wKHbeeK72BdcAf4A+D3gxu066e0i2VHgnwB/F/Bvxwnv4o5iAPw74F+TTK/fF75fkpWB3wR+A/C+38'+
			'HcxZsOIfA/Af8S+J6J8v2Q7EPA73B3WvxBwCUSN+gvv5c3y+/hPS7wPwN/zl2C/aDgCPAJ4H8kuf/fFb5bS7YI/D/AO7/bC91FbvAs8BFg9Y2+4buxZCeBL3OXYD/oeBfwJeDEG33DGyXZoyQxlCPf/ZjuIoc4RsKHt72RF78Rkj1I4vDNfu9juoscYh74K+D0d3rhdyLZARKHb+Y2DOou3gSw1t7O080CnyLx1V8X345kPvCnJES7i5xACHG7T3kA+BjgvN4Lvh3Jfgt4x+0e0V3kEk8B//3rHXy9EMYHgY8D3zftM/O8B9+gu3hzwQLvJ/HTduFWJCsBL5HIcb6/q94l2JsK1lqstcP7sQf35QJwP0nuc4hbTZf/jNtAsAx3CfbmQ/blz0h3G3EM+Kc3P3mzJTtMImi7LUqK8W/NXdx5jJNq/L58p3v0Rog4do4B'+
			'cA9wLXviZkv233GbpTq3+ZtyF29+FIB/PP7EuCVbBM4Dxdt1tbs+2ZsLN/tkGW6zJYNEFnQEWIfdsY1/yG0k2J1CEAR88pN/yfWr1ygUi0xOTnDgwAEee/yxOz20NwX26QtfBH4d+BcwsmSKRHq7dLuucqf8sW63y2/+s3/OzMw0ExMTSKkIgoBqtcr8/BxPPPkEU1NT+z6uNwNezyLt0X26SmLNTGbJ3sttJBjcuSnS8zwGgz5BEBCGIc1mk06nw8rKDY4ePcLVq9dYXFrg3nvv5dSpU3dkjD8gOEiyQ+1zGcl+5g4O5rZCCIFUim63CxZ22jtIqej1unz961/nxRdf5PDhw6yvrfP1v/k6D73tIU6ePInv53trwh1agH2EMZK9/06MYK8gpeDy5csMgoBOp0O9VsNahkS6cOECFy5cZHFxgStXr7K09Bwzs9N88I'+
			'MfvMMjzx1+AvhHDomE+ugdHsxtQzZNr62tUSwW8T0PIQRRFCKEQCkHx3EQQrC+vs7Kygrz8/Ocuu8+Ws0d3v30U0gpMcYgpRyeL/MxBQLL7iDmzVZi3B+9lW/6eis8ay1aG4rFAvPz87f9c7kD1uweYMkBntjvK+81BILVG6ssLS9Rq9V46OGH6XW7NBoNNjc3ieIYz3WHhNve3ubLX/oyH/3oRzn/6nm2txuAxXEcpJQgRJLEFQJSgiT3yyKETI7J5CbK7GYKMbyxIksBiyQZbNNTAVg7eg4LUkmuXrnK3//VX9mfz2rvfecnHN6guvGtAmstFotyU4IAUghOnz5Nv9+n2+tx+dIl1tbWCMMIIQWu42CBP/7jP+aBB+6n2+vRabc5cOAgnucCAilFQo7sOoAU8jWRc2vt0AKOvz7D+DG5y7okPx3HpbXT2quPZxf2'+
			'aXH2kEMOSwgIJAIxnPYq1SpPPvUUO60WZ86coVarcaLXo9Vqcf7CBVrNJiAIggF/8sd/wnve+0MUCgWESPy4ufl5BLCxsUm/30MpB6VcHM9HYDBaI0gIEkUhjuOilCQIAjzPQ2tNHMdIKfF9H0c59AcDrl27ytTUFNVqFa11MnahkOJ1pVm37zPav9X/vZlPlhuIdJoSUoKQWARGG4qFIsePHefIkaNcunSJbrfD9esrLC0ts7Kywtr6OttbW/T6ZzHagJv4b1GkuXbtOqTTmpQq9Z0iTD/OLopAEEURQoDWBiGSsQRBAIjhTQ2CgIAAKSWLi4sopTDGjCkjILNqOcFRB5i+06O47UjuMEJIHMdlfX2Ds2dfYXJiiosXLlGuVDh85BgPPvx2Xj7zMvMLSzQa2zS2G2htiWONlIooitEmqz+SeFYiJYwlS5lJxo1CRv'+
			'LM07I2mRaFzJ7LkEymYRgxIpXA81yk+F62w75pMekA1Ts9ir1BdmMTxLHGYun3B+xsXaW9do7JqSoPnFiGe+bphS4Xr1zDdVy++tWvIqVDp9NDpoSVUib/UispUhIlPpZMnXqBVBIp2EUqiwArRlY2s1owXCBImayArdWovZ8t9xOVXJJMytTqjInzst+lVGysXyUuazw5T1BW9KOQ6tQDPPmuJ7nn+Ane+94fwliLUmpELikRUgxJl1k0kVopOVxxZkQTwyVktkBInkoXC2JEMikknqtYXVvlz/7sT4nj+E58bHuFqkMuC6VklmI8VpVMStrGTMwd59DRYywuLlMplVlwXbYbqzQb65QKPidP3kNrZwehVEqW0bmy02ehi4ww41PcLVeWQtzysTEGYyxKedTrE8PFSo5QyZdhTjEMC9y0gBJC4BcKWBPj+wUQEq2h'+
			'E3ZYWblEfaJKuTSDZ30gxsSayI6txOzI+oyffzwOljj52QOb/cfYL0MYa9DaYLShVqnljVxD5JJkQ2RcS6cyJSVhOGB7c42i7+AoQ+C5+F6BndYApVw21i9RKDocObJAuVRnEERsNoJkxZlatCziPwykWruLP5mFs6njT3Y8jeFlui6d+onCSkrF8n5/OvuGXJJMjP8iRgFQYwzb2ztcPfss7Wtt7KlTlMpVKvUThKHPhUtb1GsTzM1PcuH8FeZmZ4i1AVnGUR5axxijkykujeSL1P+zqRXKIvej1JNFkCwMjLVYa5Lj1o5iYwA3BWXzhFySjDRGJUXqgDOa4drtHVrtmN72JUqeYKI+BQfrCLGM1oKXzlziwfuP46qIKGiz0+5x4crLzM4ss7C4gNaawWBANh1KKZPgaqYwTslsrUFrjZSSYrGEtQYzbtmsJYoilK'+
			'NQwklCIiKjWL6UxLkk2e4tX7sTw8ZEUJ6G8DDNXh1VrFMNCyg/ZLKsmToWs73+x1gOI0SZiSIIE3Pp8hWmZ2YoFHxefvksQdBHIHft/DHWkBiq5Lk4jlhePsDkxCRhFIK1CQGTd6C1xnGcXbkqwWhVmhfkkmTAyCkfI1wURVy6cJG19U10pLi+FVBYbTJ5/Qz33Xcf8zNTbDd2cAuGYqmDJyyRjrHG4HpFlFIopVhaXkJrnRIi9dOsGc14md8FlMtlhJQ4rou0BmuyY8lCQEiBsLvHnDfklGRpbP4miyCl5NSp+6jXJ+l0OmxubqC1IQgD/EIBt1hmYvYhBkYQdQeYoIM1MVFsENIODczCwsIwTAE2Ic5wJbl7SjTWjBYNVmBFtsoUw2mdxHVjmCjIGXJJsmHwdSinSaNWNiHI7OwcAK1Wk+vXV2g2GsRxRBgGuI7P'+
			'7OwcjUaTdqgwxHh+SKfbJfHt5dBhT6+WEiwhV+L4m6G1Gk7VdhTSGH/vrX/mC7kkGbz2dmVWIo41YRiglKJen2ByMrFqJ07cQ61Ww5hkn4DruszOzSClwlGKIBgksh8BSvrJ9Cgk1hgkMUb4SGsQ0mCMwmDAaKQw6FiD1a8Jc2T5y/En80iz3JIsmy5HCtXdR6219Ho9pBQopSiVipRKJaIwWfGJood0VOqsW8puGaEcWu0G3e0tqkUP33ydstvAxCGRug9pLtPfXMcXHsycZKBqNDoL1Gp1/EIJGweQashu0tKmI84nckmyzCHPcobDBIDIlBEWpRwOHTxEu9Oh1WpijE2d98yXsmD0MOgqVZHBjau88n//Fqfe3aDfs0wc6hAOWtieQPkfJxz08fSAykSRF39f0CkuMnVyAe/QE8iZo9jCQTQukE63djTi8dHnDb'+
			'kk2Sj5TBbpZJjcSYOgUkoOHz5MHMdoowkGAcZk/lOmFhrlQN3uN+lv/1sqk88zOzOJLZcZ2ALNnTa9M5sce2qablhB96AqIPR7qIU299+zwva1F4k7DvWl03T8XyZ0FohNnBDY2DFa7R/B9nNfbD5JlkLsun2jZLkFrJCEsaC5uUW5Vk0i+JnfpjU7OzuJXEeAHFxGNj9PbWKa6Ud+mJaq0Gl5rG3H3He0iB1s0ooKmImYeMKh6Q44/YtllOvTajdolhxafZdDcUBsXmHgFtDWI46idGwSbTSu2jsd2Z2sSZJLko0S1mKYWxxfwCkp2Hz1Bb66uUJ9fpFKp06xXKVWqxMEbaQUhGEAWIIgpNv2iO37MBsGKRRXNwxKOcgiPHdN45RcVCTRoaY/6GO1TaL7xuBIhV/xUb7DtzY1ghDNGr7vIVEUCgUmJiZRqeI2j8gl'+
			'yb6dIy1dl52//TQv/fV/wF28j6MPv53BIGDh6Cnm3v8Bzp49w7GjxykWq0i3iG9iZmYhjgMQSdyr1+2hUrGiwSKVpFwsYaKQVnsHJGhjUtm3T7FYQcfxMJJvrUEgUgWuxHNdXNcljAa5LE6TS5INFbGJHILxgMGg1aDQv8zERIEHfvSnOPnoY/TaTZ595nP81b//X+gN2izN/SJnzp7nb89ptjoBf+9n3sOxQ7NEcYS1llol0Xlmkh5jDFrHCLdApZYcGyot0k0kjlKkoVqMsRhtMTZCCUUYhsP9ATn0+/NJMmCkXmVEBkc5KCEwxmFu4Qj3PvROjtz3djrtJt7kPM3rL/L85/6Ac3/zV8zVHf7bv/dzhMbDSg9rDY5KprQLFy4SxSHWWOI4YmJiksOHD9Lr9XnxhRfS1atHrGNmZ6aZm5slinUSrLUWhEEom4xHKZ'+
			'R0hlvk7lqytxRG/s1Iei25tnKd9W9+g16zzcn1TaZ3dhj0exR8H8cXOAWH2O1wdjXAnjnL9XXFsRPLHDt6MJHzWDh+/Hii609TSNnOb8/3efDBh9Emptu+iO+X8YrLhGGQ7J5KV69SyuH+zEQCZHId888lyewtBKZpUoftVoNWL2AQW7pBmGq8LFEc88rL53j52jUOHXfZlgXOf+UZzn5jwOn7DvPkUw/w0IMP47nuMIU0Omv6uwWLJIxCNjb+D0QzZPnEb6Jqs2ijsTYG4mGKyaaqDDEK5O39h3MHcEdIttcxmt1rtMwfS0IUEjAGhCOx7RY7l6/jlpOUkETjBJLCTomlIw56QfKh936Ira0eAoUxFiEdSPVi1mpGwTiTXtngOAV63WVefWmds9e+wmOPTTNZ97FykkgeQ6iIKA6GIyyXK7ieRxwPcihZzKEls8n8'+
			'NVStSpkFVCGOIja3ttjwZpmYKvPXn/0kn/7i51k+dpyHH32Ubscl1jUa12NKZsDkFBScDq5SGNui1/9bjO4SR4pC4TiedwAwY3lvkdbKgBMnf5l3Pj6D5/oMtj5O8/y3iMRpIt8hkoLa7NQwxbQ78At5U8fuO8n2IxZkSdNCWQA/DcBqbZieWaR15GHWGg0Ga1sIsc35zXUWDh/k2Nvexfyx0wTdJqtXz9MJNRfFBoPQZ2KqiufO4qka5ZJLuTKH41QAi9FJOioIQvr9AViD4/pYE2G0xhbezcF3fRDplgkGHa5cvYLWUapTcxkMAnwvQKp0D2fOcMcs2V5Nma1WiziOKBeLu/KWkDjcjzz6KPefvp/BYECv1yOKIhrb21QqVTzXQdTrHDpyhIm5Zbq9HlJAsSywBhwxj+uW8NwCUnooCUIqjDBYDLFWQ90YwqIciZ'+
			'AOsYgIhMC1MSgXr1hONhtnOv/hJuR8WbAMuZsu19fWGfSD4WbaEZLH/cFguNqbnZujXCqxvr7ByZP3MjU1Tb8/QCnJ4sICblrRxxhNGPaJowBtAoyVWKOwqOEOJKxGSpOGTBQ77SZbWysM+l2mJzwmC3XQChFbzKAFznKywYVMlZHIfm7WZ+wl9it/mTuSCSEolcpYA8ZYHDWyEqNmCYIg6FOrlZibm8F1HOr1OlEcDRWvJlVkkO4w0lonsTcpcByJ6ynctH6ZMRptwEXguhFaW2q1CVbPXePcKy/w9GNLEG4gpA9xHx1opHOA4S70ZHhIKfJWBwPII8lkWnopu1mpBv+m/dsopeh0Wly5chmBYDDoUyiW0CSE2t7eTqP0AmMNg6BHHIUAuG6Sc1ROWrWRTI0rCYIQrQ1KKaYmF3nowTqR7XL5Rg+pfIxRdAcCaXeI'+
			'ohilFJ7r3UJjlh/sK8n2w+m/ucLOMJw15vYYk0xrEsnk5BRaa5SEVnOLyalpOp0e/X4Xx3ESp55kWlHKTabc/oBud5D+TQbXdSmXq2ijGfR7SCmJ4hhjDL7vE5ppIjOL0Kme39NEUUgYRiilEn/Q89A6THaR54xt+bNkQiYry9c8P4qX6dgQ9fr0RMDi0hKFQpk4MvQ7bYqlKp7nsLCwgKOcIcHSN2OBTqed5CpTK+e6LtVqlTjWtFpNskyAsQbf8/F9f6hVs9YMk+dhEOK4DsZoojhC7r17dEeQO5Lt7OygZJLyyZAVFIZEhm1MyKHZNsoz1PwtEAMc4VIuewRBSLFUTKbdVH49XtvCWjhz5mU63Q5KSuI4ZnFxkUceeYQgaPPCCy9hTKKuiKKII0eOcOzYMcIwTKxoqjpSSiJENCSw0Qbp5lPknzuSrVxboVQuv2'+
			'bVlCkzjLEU3B6Hl7pIx8MtDkAMiHoNPP8QrdYWRaVRsopTOIjWLsBY0BTe+973pvVoEysXx5ogCCgWC7z//e8nqfAI1miiMCQIBskCgeT9Kv0OKCfx+cYLGb9mM0IOkDuSTc9Oc/XKlaTosNitjQUwOmbK38GxPXRkkWWFFDESizENmmvnKKgSyjF4hTJJX7M0GZpuLhr0+2PTLwiRVri20O/3k8Bsr43jF9N6ZDJNQe06TTKq1EpmP3PIsW/bg/wtieXlJRw32ekNY+nrTPulY6reDsJ0UAIc5SGlwPUEQe8aFo++fYSvn62zumlJTpMWTpES5Xi4nsfa9VexRqOUxPMKaY3aZOeTcj3iwQ4mClBOAaFckGo4mhH1czg33gK5s2Rzc3PU6zWiKFmpKdSu43EUIMwORse4npvKbjRSCnxX09zaoDy1A9Yy6A9Gpcik'+
			'Iuw12Wlu0u90wA7obMUIGbOx1uXgydM4ToVeu42MGuidawy6a4RemVhHeJV5VGkCm+1UusUO97widyQbppmz4nVj048FrO5B3MNEClFycV2HwWCAo6o4QjM75bJ67gssHnma2bm5pLSmcADFtQv/HyVvwEytRKlWxfF6ODImbF9h0J+nUimge9+kXoyoTkZIP8SaFhboqxoBU4BOzepYbQI7PsL8IXfT5eraWpITTMuWj6xFcjMlMSIOMUFId6DZaAZ4lQnavZDIaorlEsqJkSYmCsOkRr9ICDE9d4BKWTI1W8UXHroR078RUwqnqJVncFxB3NikeXkFE7iYbRfb8jC9iLjVxHcKCDFmWaVIHX5GX4ocIneWbFR4LsHN900YhYk0YRjSbfcQ5SJF4bIdRExMHWCmPMXRBxZ58cw14nCA9n0c18NimaxPsH3J8OrnVo'+
			'jaDZpbm1Qjhy9dfZ73/cNlwqtr/M3v/Q7Tp6bpiYi6U2XOznGt/SovE/Do+/8+b3/4w9i0ZMEwrLL7L9jzz2i/kTuSLS8vkXUjgd23TAjQ1mHQL+AQUKgvceT4o+zstKnUZgnDiMnpOTxfoBFoYwiikFKphhLw7//wD3n1xWeoVEIGcofWapv5aoELUZ/p5z/L4sRBGo8UaZb6XL/eQqh1XH2OwIWNxoDpa+d47DEP3Y9S6Vm6ELDjwd78WbPckUxKiVJqSK6szIC1BuU4tNodVporTNYt9UofPVCUy7NcvHSDgutw4dIFLq33Waz26OxsMzG5QBRZorDPanuFp378CQQ7SMclChM92M8u30snKHP0nvdx3/0zNG+8xE6vy8UrGxxcWqJQLlGbPM4gmieOo2E5hGwnuxBJHC8rRZU35I5kCUZlCdJaTsMjg26fXmsL'+
			'Hyj1B4TaUCo5HFhaZHqyxgufvcTZGzFPPTyNIzsYK/FcDx0H/PxH/xtKxQLCaBwpwUmDrtZQsx79bkgcHacwdQx/yrJ4xEGgkj2W2uC4glZjKxEyAmEYsrCwSMEvEqdVFzMBZJ6QO5IJIdidBMxyhsmx7mCHYhQRxUW0VsRGE4Qh2hh2drocnjFU3Ri0BeHR6XRYXb+CEjGzc3NY4aOFII7BxHZYoFgKsMZghAepKizSpA59tvHE4LguwvOGUX7lJPsugzDE86pJ4eKcIXckg6S2BPAaZSxpMeAoitC2gFE+rX6X+VIBYy3d/oAKW8wtdOi1N3C9GlEP0AdxCi6+51PwfdbWN9AmLeeJpeCVmJioE8cxaxvrQ0tktKZYLFKvTxDHEdpajNFYbZIa/sbSbLVotzoszC+Qx6kSckiykcoUhnnBDEKgpCXGw7iTREGb/o'+
			'3zXNu8hnQ8NlYvcemVl7G6zTve8zSDUOO4Hs1OGynLCCGR0mFpaXlMXJjuII9iXMfj0MHDSTn3tJS6jjVxHOE4LsJqtAYrLNJK+v0+rWZSSdtx3bRS413H/02PTM0KpMKJdAWXyk973S6bG5qBo1ntf4tvfetl5g6cYOngMb7wF/8XM9MLNFvbrLYF5doUS8uH8Ev1oTwaBDrWaNK5MFWmZcGuOEr6Io3XkM0UHMm0KrEy2W/puR7WTXRtKi1jkD+K5ZBku4OvI38MBHEUMTV3iF5gudju0l/voxmwEKxSXbyHex7/CEYbKkaz2WzR6UdsbLeoxwqMTRqDifHuc1mcywyLESNHdWLTqrEgE8IN2xim2vqs9bTMWkzfbHlzgnySbFg9J23cNdTqWx56+zs4efqhYXNUYyy9TpNTp+/nwKGj9MMQ13EwOsJVAq0NOraY'+
			'dCOvMWaY1x5XU+weBDcF6EaPd7uIqXyILPJ/l2RvGQw1sNamMpuRl5ZshRugpNpFFqsEcRwQBwOIFXEcYVw32U00tEC3uk722+vE7e1rX5LIg5KdSWJow3JbpSCfJHutLdhdMjMp0WSI4yQ2ZW2i4zfYpHv5WBe4YYX0MTcvu8g4f0YcGpFmfAnC2GtlSjAn654qMt/ttVmKPCB3CfJdjv/wyZumKZJp6sCBZYQQlMtl+v0+3U6XbrfD2toajuMQR/EwyZ416kqu8W2mSsb0YmkvgeFuqbHeAkMLNuwCPBpb3pA7ko1jeLteI51PIvDT0zMMBgNmZmZxpcvlS5fZabdpNpq8eu48UiriWCcF6ki20SlH4TgOjqOQSuK6Do7rpTuZXrsTPGkdLYZjGHbuJUkl7S58Z/Nnxsg5yTKM9zKCbHoTrK2v4XkerZ0dBsGAmd'+
			'kZ/EKBqckJeoMBMiWS4zhAotG31kEIF60NYRgTawtRCxv3MfhDI+ooNZR/Z9cbysFTUiWryjErZvNpyfLpk5mRIzV+07LfLRbHcXAdl0KhQMH3UVLg+w6NzW18J+DQkUPJ1johwBgcGaAIiYIVOkGfQvkYyq3Dzguo7hewuo7xDiNqD2GdEpassF2yYNBxTBwbHM9FWJv0WEoOp36gTMZr7pLsLQFr7WjmudU9S2NWsY6JtUYIiXIcCgUfIQ2OJ6hUa0ipiAYhvrlMtdJHKcP5859kon6IWrVMbLuE0fMI3UY3rlEovkQQr2OmP0Rmw4SwOK5DuQTEF9GmQmcwgUCOQhbpLqWsIF/eFpm5JNlI0Xyr9R1pTVfJ2mri4Ld2duj1OzQaDTY3r2N1xKn76kzPzWGCBn74Mqq6zI3V87RWVjg8+wiO6OGqgPLCY8SDBzDy'+
			'LCa+jhe+SLc5j5x6HKUExsRUKx6VUh/TW6GzvcmAp4nlJMYGw6nUWINMCZc3W5ZLkg11WZbX9aUdx6HX69PtdpmemubChYscPLhApVLlua9/g3c89h6ajS1cO4C4RFXXiUwVp3ycZuhR6MnE6rkaZI3qoaewJiAONog2Vul2N/D8OtKRdNpbbK6uEfbLxGGR4qRLHPcQ1iTtdrDJjvS0IVjekEuSAQm5Uin2uJ8jBKkSI07ruBqUo9AawlCwuDBPpTpBr9unWCrRbIZ0OE57xQH7AMzey/W+RfZBKmeoxBAiJMkIzBCbGaJGH+ghHYdB0MN1HISYQyDYuLaB68p0B7rG8wpMTc2Qy6UlOSbZcLrMHLNsLWAs/cGAWq2OjjVCJLVgi8USQroI6TExOY1yHDzXp1K2KCcpRiyEoJjJulOLI4RgEARcvnoJx3E5fOgQnr'+
			'DDStfGWsrl8rBwCxYKBR9rDN1uD8/zmZ6eTnaY2+hWyYO3PHJLshHBskfJ/4wxRFGMVygShBt4nstWo4HnF5COQhuNlAqsREhFsVjA9/3kJMMyApZxz6lU8pmcfCiZndMe44kAZNRxzqYdfLXRSfEVY5I8KNBstnAdD7/gpFY3Xyz7gYmTQXKz41gjVRJADWKN6xcIwwgLNJoNLCRF7bTGxGmiSMLQwRM2SQOliXgrBDZLC43loIadexnFybIkePZPSpk0bXWc4UpzWHwvR8glybIQxu4nk//FWqOUwnFdwjCiXp9ASEXB99naWEebGK01kY7RGBBy2ClkGFTN0kTjj7KofrbXM+uIMorG7j7PkGQCOZZuyiNyR7LxOmS7VbHJD62T6oau6xIEA6rVKr7nMTU1TbvdYTAIEnmPjoeJc26yQqQEGaWHJFLIYRNXMSRY'+
			'UmwlO0ZajVHKrMp1FksbqwRp88e3/PpkltcUw8taQhuSaao/CPH8AghJsVikUqkihSSMkkZdQRTiWxfpOMRhhLUSqRTCCqI4RqTWyaSafWsBkzbuMno4VWZhimQnUuKXWZ3JkEySw5QjDVzeWJZPkmXcGiNZpi2bmp5FeQWiWHPynntpt7v4ns9Ou0Mca7Y2twiDiOee+wblcpVatUqpVELHEd/46ufo9RvUJso8/62X+bGf+Hne88M/zvrqjcSxtxopkkWBtQ4WhSUpcyCFResIowVaKxylKJULyOFcMqp8nTOO5ZRkt4RISj+5Lsrx6Hb71Gp1Op0u/f6AIAy5dvU6U5NTrK2t43ouMzOzSKFwPR8Rhzx98iXqxSv4nsdTi10Ks1dRQlKrlSgUFFJFWB1iTYS1HTqdNsLWqVTLIAO06aLjiF4XkDNpKYyRGi1v5M'+
			'qQW5LtSoxnoQRj6PV6eAWF63pppeqYfn9AoZCEKbrdLr1ej6nCVNJ6MJv0rKbqDTi8qNDGELf7KLbxFEwvlXGUi5CWKNym11/nytVnCHoeD5z6KG6hSiwMcRzS77cI9YsMgg4F+WDm7qXjHK5hc4VckswwahE4NndirSWKYpBhstG320NgCaMQpaDXbROGA+I4QEoIgiDpuIsg1hGlksPKtYhS3UGHYELo9gIuvnoWKS2aPt3eDTrdVVZXmrhqmU7/LJ7vptfbYRB0QPUplw+wNK9IqjimKgw01pikoF6OkEuSkW0cGdqh3drTfq+HQDDoJ7VcwzAEktWk50qUSiom3lhdZWJyMon2W0MUxtRrElxDcytiZkKiHMlOSxOFAe1ejygsQXQUxx6k6Bd45fnLTE5MEYYhUrhEkcTzapQPVrHCIlLVRbaHINlBrl7nD3tr'+
			'Il9fmTGMy3wsdjgnxVGUbA0RFtBgk8h7t9NGOZJioYAUgvZOiytXLtHv9+h02kS9Du3tkDCC1esROtkNgrRw9VuXWarNUwhclopzzKsppsIih8tLRBe6HPQX6Z1twqWQta9d4tjkIr7JUk+jPQFjQ84V8mvJGAVljTFIqTDasLZ6g63tBpVKhTjW9Ht9/IJLsVRkenqSjc01pmemWF4+wOOPP87MzAzFch3bDIle3mFztUenFzLo9Gi1eohWl7Ad0LqxTnujTU92CPs9KvVJitUaWgoaGw2arR7C1Oh3NTthTG22znZjG8/zcR2HWl2Ts1lyiHySDBimyFOHf3t7i6997WscOXyYw4ePYExixbJ42OnTpzl67Aif/9xn+OhHPoLWBikUcRxjgOaGoS9+kUop5mAJuq2Y2L0P6whmHzpCcWme00cPcPXqFSb9eSq1Gv'+
			'5MhUc+9G5KxRLeiSkcx+UecRK/6FOolfALPsVCER3r9IsgcmnK9o1kdyIfN5T6WMvOzg46Nnhu0ndJCDeZMgV4kUexWMRRCh3H9Pu9hGRyJOWpTR1gYva/ACuxFqYPqyTHGQc89I7TVCoVHMdh9vAc1WoNSHKgB44up0l3mSbPk44oiSo3xmjN5MQEUgh2Oq103swX03JpyXZtfxt7IJUgNkkNC5u2BhEi2RVujEEpyfZ2g1/4hf+cRqNFpVxBKZWUh0qdvEyDIdLd38ViUqvf932iKCYMg6RCYxCRSYxM2k46+ZlY1jhOqgvNzs3zO7/92ywsLKBjncsNS/kkWaaCSFUNWX4wOchQSZE9ToyHHcap2u0OjlL0+z2QDtbqhGRCIo0lNoZIGySWTruLcpxb5ElTVYVOy0VZg+MkO9MtFiUllUqFbrebvi4r4JI/luWS'+
			'ZMBweWlTC6WUuqlWGcP9kNnTQsCgP+DY0eNMz0xz5uw5vLjPnIjBCtqqTl+6CAlhqq6N4hgpwHEk1oA1Ar/ggkjqaLiuYXLKwS9oPN9J6pSZEGELlPwTfOnLz6JN8kXIK/JLMkZhjGEFnVvqf3Z3woyiiEceeZTDR49SiSPKW9eZtgplJRuqQv1EnVo5sXDaujR3DK/cMAR9hVOIOHC8zLeea+IWDJMzkvqEZXLaoT7hJ9OlsfS6ITsNjwdOvY/nnz+D1aO2OjkzYkDOSUZWaMWmO7mHz9/0MnYrNhzX5cjyMoPuOfT2c8S+S3OtQ48Jjh2ZYXKwjREKx1XY5oBrz/tE7gyRXOWnf/kRIrb55CfOcpAiqlgk2oJyfZH6xARK+gRRGysKGBOmMTsxGsModJYb5JpkQ96M5Qezx9zkQtmx2Jq1IKIBxQNdCodqSM+n85'+
			'JgeXEafUBx9VqRcL1DXHRY2db0bJf5oyVOv32OqWmHD//MPI7U3PdAnU984gwtaTlyAooVl63tNVCgjcT3i7t0adlKeD+xH33I80kya28yVjf1MfpO1kIIBoMdmlvr6K0OF2yfmX5MuTRg0Kty3RR45fIqP/pzb2OuNsnk9Q22d7aZmVMIvYwUO/z0T51kZnaeL3+hy5lzL7G+2sBozdbWDmsrA6LuQdTbCsOpPNs+kDfpNeSUZFlePNPZj6scvj2SF2pjGHQCxOUuc5Uyq60dSo7Po+/4T6g/8S76ccjVJ1/FqkssH34Q4XwDsbKNEj6eWsD16lR8j7J3lEPLTT7/ha/RbgjCfoiUE8Rxj8uXOyjXRUiRVHBMr520rs7XfJlLkiXI/LFbMCubLsd6Vo6OCaIwoFAp8Y5f+Q2W7z3JwWefxZ+f5dA7H0UpB8f1OXzw'+
			'KNfXv0xgYhbmFnGdOg+cforlxfsIwzDZFR5rzrxwmQcfPM7iwjyxsXT6A2bm6lTLVYSMuamsTy6RS5INBT6vmTa5yR+7ed5MhYPGIssO53srRAPD4g8/jfL8pN6/7lMoWJTw2FxvEOkGjl/m0MKDVAoHiCNFyT+ItTGbW1eYmhFMzh8gji1BFGGMIIi7aOPheT63oPmeYT/8r1shpynZMdxy19LrvNQmjVN9v8C5Cy/zl8/8GZ9+9o948cVniAcGRxUJg4idVotms82B+adZvxbRacVIoWm1GgSDiDAOCKKISnWS+x88SaPVZHOzRxQ6+AWfbnvA+Vc6uF6RUqmA47g3ad/yhXxasrGI/y4Mp0luWl2ONnEUfB/f96hWJrhy3jBXk7Sntlldu0S9Nsv01CJIQb/XoeiXmZt5O+cvXqC7s8mJk3N0Oj20cQmCAN+HSm'+
			'WCGzc2qU1MI+MIG2hKZRgMDFII6rUpCsXC2FjzR7RckixLE90yIJb9HK9Gl8Qwhqs7rWMq5WkOHqzx+LunmCl6bK+vcmPlCkePPki1UqfRWOfzn/8UYSQ5cvQePvXJT7O61uD0Aw/jF8qUSlXWN9f5+Cc+zdpGm+4gpFJ1CPsxDz8yT/Xdh7A2DRDb3RW184ZckizB7q5rYpxQ2dPCgt1d/RBAG02lUsNhic995hyPPLDEsaV3sNl8lRubTYK4wKXLHc5ftDz57kdxCkXK9YNEuozjTuO6Jba2u3z2s88zUTvOAw89QrcbIvHYXOsyV5ujZav4PkzPVJFK7RrAfoYx9sNHyyXJxv364bSZSWheL0aWpgaEkPR6PbqdDu996le5du0885PvJNQ+B46cQMeaVt8wtTDJz/7iw8liII75yM+fTmtoWMJY4PlVfvIn/7Nk'+
			'EWLTWBjgOIog1ETxgMtXLlKulIelP/OKXJJsFCh7I7GxlF9CJNV9SgW+9jdf41N/+Snuuede6vVJzp/7+DCeBam48OZ14Xj9CzOaeo3RxHFMFCVVHbEW13VptVpcv36Vhx68H+U4sNtJ3DOMrzD3i9i5JFliPW5dZXGI1/18k9B7GIasrFzj6tUrjBNgPFUFpBIgMdSJaaOHoZOsFEEchcRRmL4hadbluS4yrU8Wx0nzr+EIcuaY5ZJkGXavMl/n23uTLxYMAprNFk888QTnzp1jMAiS2mGpsFHKpBq2HEZ/DEbHxHFEMAhQYQAyRiqJsYqBdlBxn6LZQQqJEYoOLvVDRzlxz3GuX72y2wfLoRIjxyQTt7BkaeziFglybFKrot/vc+DgQZ566ik2t7aSqUxIgv4AJaFaLeO6HkZbHFXAtxbZXkcoDyjhxhGR1CjPx1'+
			'jJRjsEXcIRFSJH4GtJqx2yOLvAhz/8k/zJx/4IrTV4Nw1zj7GfPmCOSWaTfbMpXhNZv/kzFgKlkoo7s7MzzM7ODmv8z5YFj52sUK8XCCgghUM8iDh3/hqljQ0eLVkK82VOHJumdnCRGxfW+OqZLRqhZavZoevBwRM1CgXB9lqPcCui5BeZmpmhNjGV7DkYG9BeEeBONQjLMclGinyArB/l2MHXWLRshSmFpFQqEWuL6W7ywafrPP32DqFp89KlSQa6hikYvGNVLlx+kW7H0OwJDtQaTCz2KLQ3mHE2OP1IndqrAz7/UhsV9Dg8O4HcaXJu0EJbQ7lUTqzYWEtouw/z5X6vZPeFZPuukcLsrnQokkJzu0pJ7SJY5sUL+oMBYRBSKpfxvRLvecDhA+/x8OoVWhtbOCJCOSWMDujtdCkvPcDnXvwmQbcLX485sdLliy9v'+
			'86FfPcy9b5vlsadm+JlBmfPnN3j13EXqjmWiLKnXa5TLFba3GwyCgEq5mg0+d3CAkN0ewVseVtuRyjQzZFJAUtZiTNR/s/gaSHcmKelzYqnOuw4UKdRdYgI2OyGtUGFtxNc+e46o62BiTVSf48hyj3feX8YxgtpWyNygwPbzfdrOOgfuP8K7njjBqVOH+Iu/+Aq6t8HkRAXXdZNSniQW7OaV617gDsTjug7QBqb3+8p7Czuc+nZB7P6Z1HHlFv4ZCKl4+KTL0VnYDgds9UO2Kx4TpwdsXFilvdXBwQflUi1O8WBVcmx5ioGO+Oi7HaaPLSIPHaNsSqiSSxjHVCaK/NiPPcZnPnMRXymUcnIdhE3RdoAOe0iyO7Kpd3jt8UcwqgOWludMn9rd3S1hnVfwiLXLuYst2rNF4pKDVGCdFsUlcBdi+k2XOFaowSb3H/Lxlw'+
			'7je4LGygt884VN7llaoDYziZRVjHbodncoVQc8/cQJqqViYsmGjb6ypcnefl53gNRtB9gEDu/F2e+UlDiLto/7ZOJmx/+m/NKoqk4S4iiWXF5ZL3Lt4oCf+qWDXLqyheeB40CxHvOj/6BO0PM481yTb3x5hcuvlpkpvUTj1U1WVrtcKPk0vYh3PNmlNHkCt1CnUPSJmODe0/PIA1NJ5WvX3TU+a+yw9Prtxh2ymg0HuAI8uhdnv5M9tYdG7NtdXoxeMx7iEEAcxLz98SqqXuOTn7jEQ2+bpNmK6XRiDhx0cJ2Y3mDAgXtBFWf45OfXePkzbfydmA/9o9N8+EeO0trY5Mr5V4msT7HSQyiFxOHgsZOEtRmstelWvREBblm5+62NSw5w9k6PYi8wnHxupStLDo0U2GKcjzaJmUlJu2XYbkTMLk7S7RvqkwViHbJyfcDE'+
			'hMPaWkiz0WOn1WXyyTn8uTobL68j5iyN1TWsjQm6PW5cXeHI/U7SjU75CGkp+Y0RycTuaTJnbtrLDvCNvbzCnbBmWXl1s6u7x01SH5EUREnqUyRdeTPVBhaUkvTaVf7mS00++NEKrZ0eZ15awxqoT3j0uiGdTsjFCx3W13scv9ciHc227vIf//oyjz9UQiC4/krEq19epd8NmVyewHEcTGSoqHVqcv+K3d3BBca3HODZvb7KnSEajKfIky1nNilqAkgpKZfLLCwsMDMzR7lSwYqklKbCYmzMQw89wo+v/WOKpsP0jKTmOLiFHcoVy+ZqhemSw/wElMuKRvssjZ2LPP7YYxSjCnK2jRSGijvL4yd9jOcxfbBOuQrW+kwsvA2bOfwWBHJYkCVn+IoDXAYuAUf28kr7TjTLLp8sjpOm9YuLi0xNTVMul5ienqFUKkLa4D'+
			'SIAqqVKp/61H/kwoXfQAjJ5GQNrS1gEMIhjCJ0bHBdJ2lSLwTWRgRhQK9XZ+vaKkJ5fPrZPghwvS0c6WCNQVuNkBZtIAz+hH67w9bWFuVKCeWOfLIc8exVYCWL+H8S+LU7OJjbC2uxScdwALTWnDhxguXlA5TLJaSQOK6DUg6Nxjarq2u89NIZVtdWKfhF/qtf/3UGgwDPSypaKynTxvbO0I/Kpp/h76kft6t3kpCZFigNlwiy0Jy1hjiOKZcqlEolpBKEOkIPu6DkAp+AUVrpP7APJNsvazZsD21tWmzY49jRY0xMTBCEIf1ejwsXL/Lss1/hq1/9Kp12d9iaWSrJtatXKZVKCSekwFEq6USCSAsHp/G2cfFf+ruSSZJ9GHFLFbHWMuyhNApZJL9/8QvPIKWg3ekMp8+c4E9hRLLPAjeAxb2+6l4TbaghS9M0URSz'+
			'uLSI57t88Zkv8pWvfIXr166ztb1Nv9+jWCwilaTVaNJsNKlUK+hY47pu0nBLJmWnxuNs1jIqLwDpCjGzbGlPpfR5x3HTgip2aM1uZQmFEERRiDVJk7Ec4BrwBRiRTAO/D/zT/bj6flo0IQS9Xo/f/d3f44tf/CKlUgnHcYiikCAI2N7ept8fEMeacrmM67pJ2U1jEK6LUirt5pb+EzKVYo/iW0pmzblG1kmNRfJlKiEiTdQLIRIfTWukUsn07SS3wnEUlXJlzz+bfcD/SSq2Gldh/G/AbwCFOzGi24VxNWxS3dDhytWrxFFErVaj3W6zvr6O1pqlpWWWluo0mzsUCkU67R0ACoUipUqBgl/EcVRKiiQkYmxiZbJ2NYlFyzrCiWGMS0iJRKRTLggxKptggXany0S9TqPZxHEcXNej2+kiJZQPle/ER3c70Qd+N3swTr'+
			'IbwL9jnxYAexm3ScglMekeymazwcb6BgCTk5M8/PDDLC0tMzubVKQ+cOAQz3zxS3zsYx+j0+3wgQ98gF/7B/8lp+47NXZOi9Z6lwUe/xte7+/ZFckfe/ybv/kv+Oa3vkEQxLztbQ/zd37pF3j11QtorVlcnL9jJQVuE/4tsJY9uFlP9q+BX+EtLP0xJrk5x44dJYoidBwjELzznY9Rq1U5cuQIExMTHDl6mLe//W2sr2/w3HPPoY3mfT/yPmZnZrDA7NzsqC30HuA9Tz/F/Pwcnudx8uQ9nDp1L6dO3Ts8/haOlwXAvxl/QvT7/Ztf9D8A/2S/RnS70Wy2+PM/+3OCMOTSpcsUCj6Tk5Pcd/oUTz75JMXirb2BRqPBH/z+H/LNb3yLD37oJ/jZn/vIno3xVlbqZlK9ha3YvwT++fgTtyJZCTgDHNqnQd1WGGO4cWOV'+
			'zc0NSqUy1WqFhYWFXa+5lZXIbupgMKBQ2Hu39NuN4S2MC8D9wGD8yVuRDOCDwP+7D4PaN9zsE70ZMD6mt7gPBkl85/3AX9184PVKR/0F8L/v5Yj2ErtXmLd21N8MuDko+xbHv+EWBIPXt2SQhDKeYY+0ZnuNN6PlyjG+DLwXiG518NsVwRsAP00SuX3LYdxK3MWe4hrwn/I6BIPvXGnxGvABYPs2Duou8oMN4Cf4DobojZTzfB74ce4S7S52Y5PE0X/hO73wjdaM/RrJnHv9ex/TXeQIV0n48Ldv5MXfTWHi54F3kRDuLn5w8SwJD158o2/4bqtfXwPeDfyv5En1dBdvBBb4LeA9wMp388ZvF8L4Tvgw8DvAwe/1BHfxlsEV4NdJ4qffNb6fOv4fB06TBOFed/l6F29phMC/IrnP3xPB4PuzZOM4TpJU/yXewgqOux'+
			'giIBGx/ivg4vd7sttFsgwHgP8a+LvA3O088V3sC9ZJFK2/zW2MJNxukmVwgR8BPgL8MHDPXlzkLm4LXgE+A/xZ+vO2uz57RbKbcZBkVXoaOAncC8yTVBNy92MAP8DQwA7QApokpHqFJATxDPuQNvz/ASD+ntLorYv8AAAAAElFTkSuQmCC';
		els.setAttribute('src',hs);
		els.ggNormalSrc=hs;
		hs ='';
		hs += 'position: absolute;top: 0px;left: 0px;width: 100%;height: 100%;-webkit-user-drag:none;pointer-events:none;;';
		els.setAttribute('style', hs);
		els.className='ggskin ggskin_image';
		els['ondragstart']=function() { return false; };
		player.checkLoaded.push(els);
		el.appendChild(els);
		el.ggSubElement = els;
		el.ggId="Image 41";
		el.ggDx=0;
		el.ggDy=-1;
		el.ggParameter={ rx:0,ry:0,a:0,sx:1,sy:1,def:'' };
		el.ggVisible=true;
		el.className="ggskin ggskin_image ";
		el.ggType='image';
		hs ='';
		hs+='height : 100%;';
		hs+='left : calc(50% - ((100% + 0px) / 2) + 0px);';
		hs+='position : absolute;';
		hs+='top : calc(50% - ((100% + 0px) / 2) - 1px);';
		hs+='visibility : inherit;';
		hs+='width : 100%;';
		hs+='pointer-events:auto;';
		el.setAttribute('style',hs);
		el.style.transformOrigin='50% 50%';
		me._image_41.ggIsActive=function() {
			if ((this.parentNode) && (this.parentNode.ggIsActive)) {
				return this.parentNode.ggIsActive();
			}
			return false;
		}
		el.ggElementNodeId=function() {
			if ((this.parentNode) && (this.parentNode.ggElementNodeId)) {
				return this.parentNode.ggElementNodeId();
			}
			return player.getCurrentNode();
		}
		me._image_41.ggUpdatePosition=function (useTransition) {
		}
		me.__40.appendChild(me._image_41);
		me.__11.appendChild(me.__40);
		me._rectangle_11.appendChild(me.__11);
		me._infopopups.appendChild(me._rectangle_11);
		el=me._image_5=document.createElement('div');
		els=me._image_5__img=document.createElement('img');
		els.className='ggskin ggskin_image_5';
		hs='data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAAGQAAABkCAYAAABw4pVUAAAAAXNSR0IArs4c6QAAA01JREFUeF7t3W1uwjAMBuD2ZMDJgJMBJ2PypKD92Do78cfrxJGmTQIa10+dhKpT9vf7/d6qwWRgLxAYi+9ACgTLo0DAPAqkQNAyABZPzSEFApYBsHCqQgoELANg4Ygr5Pl8bvf7faPf1K7X63Y+n79/Vm4tL5QD+pvycTqdttvtJkqLCIQOThi/NYKRdi6KFPjNmnlhgxx12nK1IgonL4/Hgz2CsEEul8tnmDq6WFdC4WBQrmj4IhROY4Ps+8453mdemX344mK0pHFvqrNBuBWywvAlxaCchIO0FdhsldKDIRnG2RVCSzmqEmmTBCM9tvf7ezAoRpNJnQ7cG9AMKF7nzq6QdjV6BeZ99R/153nOYpDVKsUTg3LbBbIKijfGEM'+
			'jsKBEYwyCzokRhqIDMhhKJoQYyC0o0hipIdhQEDHWQrCgoGCYg2VCQMMxAsqCgYZiCoKMgYpiDoKKgYriAoKEgY7iBoKCgY7iCRKNkwHAHiULJghEC4o2SCSMMxAslG0YoiDVKRoxwECuUrBgQINoomTFgQLRQsmNAgYyi0Of/+lcJeu2vhvbMWPdTJ0cnOfJa71Xe0ycaBlyFtKR6oCBiwIKMDF+cSkHFgAaxQkHGgAfRRkHHSAGihZIBIw3IKEoWjALhrACc3wP3PeS389dYBmepEngQDYyGnAEFGkQTIwsKLIgFRgYUSBBLDHQUOBAPDGQUKJBeDJqs6/a78vp8BIM+O/LlEWn1BVEhGhijt+5RUMJBNDFmQAkFscDIjhIGYomRGSUExAMjK4o7iCdGRhRXkAiMbChuIJEYmVBcQBAwsqCYgyBhZEAxBUHEQEcx'+
			'A0HGQEYxAcmAgYqiDpIJAxFFFSQjBhqKGkhmDCQUFZAZMFBQhkFmwkBAGQKZESMapRtkZoxIlC6QFTCiUMQgK2FEoIhAVsTwRmGD1IYu/funmGzo0lMdKM86aT7T15OH8F3aKAEzYvQOX+EgM2P0ooTt0rYChhTFpEI4k/pKGBIUSV7Yq6z/ni6XdKo5ySIc62iil+ZFBNJQXq/XZ19cKse2hTdCcqJioBHk5xbevXkRg0Sd8Cr9FgiYdIEUCFgGwMKpCikQsAyAhVMVUiBgGQALpyqkQMAyABbOFwOw+BFBH87/AAAAAElFTkSuQmCC';
		els.setAttribute('src',hs);
		els.ggNormalSrc=hs;
		hs ='';
		hs += 'position: absolute;top: 0px;left: 0px;width: 100%;height: 100%;-webkit-user-drag:none;pointer-events:none;;';
		els.setAttribute('style', hs);
		els.className='ggskin ggskin_image';
		els['ondragstart']=function() { return false; };
		player.checkLoaded.push(els);
		el.appendChild(els);
		el.ggSubElement = els;
		el.ggId="Image 5";
		el.ggParameter={ rx:0,ry:0,a:0,sx:1,sy:1,def:'' };
		el.ggVisible=true;
		el.className="ggskin ggskin_image ";
		el.ggType='image';
		hs ='';
		hs+='height : 3%;';
		hs+='position : absolute;';
		hs+='right : 4%;';
		hs+='top : 5.5%;';
		hs+='visibility : inherit;';
		hs+='width : 1.8%;';
		hs+='pointer-events:auto;';
		el.setAttribute('style',hs);
		el.style.transformOrigin='50% 50%';
		me._image_5.ggIsActive=function() {
			if ((this.parentNode) && (this.parentNode.ggIsActive)) {
				return this.parentNode.ggIsActive();
			}
			return false;
		}
		el.ggElementNodeId=function() {
			if ((this.parentNode) && (this.parentNode.ggElementNodeId)) {
				return this.parentNode.ggElementNodeId();
			}
			return player.getCurrentNode();
		}
		me._image_5.onclick=function (e) {
			me._infopopup.style.transition='none';
			me._infopopup.style.visibility='hidden';
			me._infopopup.ggVisible=false;
		}
		me._image_5.ggUpdatePosition=function (useTransition) {
		}
		me._infopopups.appendChild(me._image_5);
		me._infopopup.appendChild(me._infopopups);
		el=me._infopopupbg=document.createElement('div');
		el.ggId="info-popup-bg";
		el.ggParameter={ rx:0,ry:0,a:0,sx:1,sy:1,def:'' };
		el.ggVisible=true;
		el.className="ggskin ggskin_rectangle ";
		el.ggType='rectangle';
		hs ='';
		hs+='background : rgba(0,0,0,0.588235);';
		hs+='border : 1px solid #000000;';
		hs+='cursor : default;';
		hs+='height : 100%;';
		hs+='left : 0px;';
		hs+='position : absolute;';
		hs+='top : 0px;';
		hs+='visibility : inherit;';
		hs+='width : 100%;';
		hs+='pointer-events:auto;';
		el.setAttribute('style',hs);
		el.style.transformOrigin='50% 50%';
		me._infopopupbg.ggIsActive=function() {
			if ((this.parentNode) && (this.parentNode.ggIsActive)) {
				return this.parentNode.ggIsActive();
			}
			return false;
		}
		el.ggElementNodeId=function() {
			if ((this.parentNode) && (this.parentNode.ggElementNodeId)) {
				return this.parentNode.ggElementNodeId();
			}
			return player.getCurrentNode();
		}
		me._infopopupbg.ggUpdatePosition=function (useTransition) {
		}
		me._infopopup.appendChild(me._infopopupbg);
		me.divSkin.appendChild(me._infopopup);
		el=me._infopopupm=document.createElement('div');
		el.ggId="info-popup-m";
		el.ggParameter={ rx:0,ry:0,a:0,sx:1,sy:1,def:'' };
		el.ggVisible=false;
		el.className="ggskin ggskin_container ";
		el.ggType='container';
		hs ='';
		hs+='height : 100%;';
		hs+='left : 0px;';
		hs+='position : absolute;';
		hs+='top : 0px;';
		hs+='visibility : hidden;';
		hs+='width : 100%;';
		hs+='pointer-events:none;';
		el.setAttribute('style',hs);
		el.style.transformOrigin='50% 50%';
		me._infopopupm.ggIsActive=function() {
			return false;
		}
		el.ggElementNodeId=function() {
			return player.getCurrentNode();
		}
		me._infopopupm.logicBlock_visible = function() {
			var newLogicStateVisible;
			if (
				((player.getViewerSize().width >= 460))
			)
			{
				newLogicStateVisible = 0;
			}
			else {
				newLogicStateVisible = -1;
			}
			if (me._infopopupm.ggCurrentLogicStateVisible != newLogicStateVisible) {
				me._infopopupm.ggCurrentLogicStateVisible = newLogicStateVisible;
				me._infopopupm.style.transition='';
				if (me._infopopupm.ggCurrentLogicStateVisible == 0) {
					me._infopopupm.style.visibility="hidden";
					me._infopopupm.ggVisible=false;
				}
				else {
					me._infopopupm.style.visibility="hidden";
					me._infopopupm.ggVisible=false;
				}
			}
		}
		me._infopopupm.logicBlock_visible();
		me._infopopupm.ggUpdatePosition=function (useTransition) {
		}
		el=me._infopopupmbg=document.createElement('div');
		el.ggId="info-popup-m-bg";
		el.ggParameter={ rx:0,ry:0,a:0,sx:1,sy:1,def:'' };
		el.ggVisible=true;
		el.className="ggskin ggskin_rectangle ";
		el.ggType='rectangle';
		hs ='';
		hs+='background : rgba(0,0,0,0.588235);';
		hs+='border : 1px solid #000000;';
		hs+='cursor : default;';
		hs+='height : 100%;';
		hs+='left : 0px;';
		hs+='position : absolute;';
		hs+='top : 0px;';
		hs+='visibility : inherit;';
		hs+='width : 100%;';
		hs+='pointer-events:auto;';
		el.setAttribute('style',hs);
		el.style.transformOrigin='50% 50%';
		me._infopopupmbg.ggIsActive=function() {
			if ((this.parentNode) && (this.parentNode.ggIsActive)) {
				return this.parentNode.ggIsActive();
			}
			return false;
		}
		el.ggElementNodeId=function() {
			if ((this.parentNode) && (this.parentNode.ggElementNodeId)) {
				return this.parentNode.ggElementNodeId();
			}
			return player.getCurrentNode();
		}
		me._infopopupmbg.ggUpdatePosition=function (useTransition) {
		}
		el=me._infopopupsm=document.createElement('div');
		el.ggId="info-popups-m";
		el.ggParameter={ rx:0,ry:0,a:0,sx:1,sy:1,def:'' };
		el.ggVisible=true;
		el.className="ggskin ggskin_container ";
		el.ggType='container';
		hs ='';
		hs+='height : 100%;';
		hs+='left : 0px;';
		hs+='position : absolute;';
		hs+='top : 0%;';
		hs+='visibility : inherit;';
		hs+='width : 100%;';
		hs+='pointer-events:none;';
		el.setAttribute('style',hs);
		el.style.transformOrigin='50% 50%';
		me._infopopupsm.ggIsActive=function() {
			if ((this.parentNode) && (this.parentNode.ggIsActive)) {
				return this.parentNode.ggIsActive();
			}
			return false;
		}
		el.ggElementNodeId=function() {
			if ((this.parentNode) && (this.parentNode.ggElementNodeId)) {
				return this.parentNode.ggElementNodeId();
			}
			return player.getCurrentNode();
		}
		me._infopopupsm.ggUpdatePosition=function (useTransition) {
		}
		el=me._infopopupminnerbg=document.createElement('div');
		el.ggId="info-popup-m-inner-bg";
		el.ggDx=0;
		el.ggDy=0;
		el.ggParameter={ rx:0,ry:0,a:0,sx:1,sy:1,def:'' };
		el.ggVisible=true;
		el.className="ggskin ggskin_rectangle ";
		el.ggType='rectangle';
		hs ='';
		hs+='background : #ffffff;';
		hs+='border : 0px solid #000000;';
		hs+='border-radius : 25px;';
		hs+='cursor : default;';
		hs+='height : 80%;';
		hs+='left : calc(50% - ((90% + 0px) / 2) + 0px);';
		hs+='position : absolute;';
		hs+='top : calc(50% - ((80% + 0px) / 2) + 0px);';
		hs+='visibility : inherit;';
		hs+='width : 90%;';
		hs+='pointer-events:auto;';
		el.setAttribute('style',hs);
		el.style.transformOrigin='50% 50%';
		me._infopopupminnerbg.ggIsActive=function() {
			if ((this.parentNode) && (this.parentNode.ggIsActive)) {
				return this.parentNode.ggIsActive();
			}
			return false;
		}
		el.ggElementNodeId=function() {
			if ((this.parentNode) && (this.parentNode.ggElementNodeId)) {
				return this.parentNode.ggElementNodeId();
			}
			return player.getCurrentNode();
		}
		me._infopopupminnerbg.ggUpdatePosition=function (useTransition) {
		}
		el=me._container_3=document.createElement('div');
		el.ggId="Container 3";
		el.ggParameter={ rx:0,ry:0,a:0,sx:1,sy:1,def:'' };
		el.ggVisible=true;
		el.className="ggskin ggskin_container ";
		el.ggType='container';
		hs ='';
		hs+='height : 90%;';
		hs+='left : 25px;';
		hs+='position : absolute;';
		hs+='top : 60px;';
		hs+='visibility : inherit;';
		hs+='width : 90%;';
		hs+='pointer-events:none;';
		el.setAttribute('style',hs);
		el.style.transformOrigin='50% 50%';
		me._container_3.ggIsActive=function() {
			if ((this.parentNode) && (this.parentNode.ggIsActive)) {
				return this.parentNode.ggIsActive();
			}
			return false;
		}
		el.ggElementNodeId=function() {
			if ((this.parentNode) && (this.parentNode.ggElementNodeId)) {
				return this.parentNode.ggElementNodeId();
			}
			return player.getCurrentNode();
		}
		me._container_3.ggUpdatePosition=function (useTransition) {
		}
		el=me.__7=document.createElement('div');
		el.ggId="\uc81c\ud488\uc18c\uac1c";
		el.ggParameter={ rx:0,ry:0,a:0,sx:1,sy:1,def:'' };
		el.ggVisible=true;
		el.className="ggskin ggskin_container ";
		el.ggType='container';
		hs ='';
		hs+='height : 20%;';
		hs+='left : 0px;';
		hs+='position : absolute;';
		hs+='top : 10px;';
		hs+='visibility : inherit;';
		hs+='width : 100%;';
		hs+='pointer-events:none;';
		el.setAttribute('style',hs);
		el.style.transformOrigin='50% 50%';
		me.__7.ggIsActive=function() {
			if ((this.parentNode) && (this.parentNode.ggIsActive)) {
				return this.parentNode.ggIsActive();
			}
			return false;
		}
		el.ggElementNodeId=function() {
			if ((this.parentNode) && (this.parentNode.ggElementNodeId)) {
				return this.parentNode.ggElementNodeId();
			}
			return player.getCurrentNode();
		}
		me.__7.ggUpdatePosition=function (useTransition) {
		}
		el=me.__8=document.createElement('div');
		els=me.__8__text=document.createElement('div');
		el.className='ggskin ggskin_textdiv';
		el.ggTextDiv=els;
		el.ggId="\uc81c\ud488\uba85";
		el.ggParameter={ rx:0,ry:0,a:0,sx:1,sy:1,def:'' };
		el.ggVisible=true;
		el.className="ggskin ggskin_text ";
		el.ggType='text';
		hs ='';
		hs+='background : #ffffff;';
		hs+='border : 0px solid #000000;';
		hs+='color : #000000;';
		hs+='cursor : default;';
		hs+='height : 20px;';
		hs+='left : 0px;';
		hs+='position : absolute;';
		hs+='top : 0px;';
		hs+='visibility : inherit;';
		hs+='width : 90%;';
		hs+='pointer-events:auto;';
		hs+='letter-spacing:1px;';
		el.setAttribute('style',hs);
		el.style.transformOrigin='50% 50%';
		hs ='';
		hs += 'box-sizing: border-box;';
		hs+='cursor: default;';
		hs+='width: 100%;';
		hs+='height: 100%;';
		hs+='font-size: 18px;';
		hs+='font-weight: 500;';
		hs+='text-align: left;';
		hs+='white-space: pre-line;';
		hs+='padding: 0px;';
		hs+='overflow: hidden;';
		els.setAttribute('style',hs);
		me.__8.ggUpdateText=function() {
			var params = [];
			var hs = player._("BESPOKE \ub0c9\uc7a5\uace0 1\ub3c4\uc5b4 \ud0a4\uce5c\ud54f 409L", params);
			if (hs!=this.ggText) {
				this.ggText=hs;
				this.ggTextDiv.innerHTML=hs;
				if (this.ggUpdatePosition) this.ggUpdatePosition();
			}
		}
		me.__8.ggUpdateText();
		el.appendChild(els);
		me.__8.ggIsActive=function() {
			if ((this.parentNode) && (this.parentNode.ggIsActive)) {
				return this.parentNode.ggIsActive();
			}
			return false;
		}
		el.ggElementNodeId=function() {
			if ((this.parentNode) && (this.parentNode.ggElementNodeId)) {
				return this.parentNode.ggElementNodeId();
			}
			return player.getCurrentNode();
		}
		me.__8.ggUpdatePosition=function (useTransition) {
		}
		el=me.__9=document.createElement('div');
		els=me.__9__text=document.createElement('div');
		el.className='ggskin ggskin_textdiv';
		el.ggTextDiv=els;
		el.ggId="\uc81c\ud488\uba85 \ubd80\uc81c";
		el.ggParameter={ rx:0,ry:0,a:0,sx:1,sy:1,def:'' };
		el.ggVisible=true;
		el.className="ggskin ggskin_text ";
		el.ggType='text';
		hs ='';
		hs+='background : #ffffff;';
		hs+='border : 0px solid #000000;';
		hs+='bottom : -45px;';
		hs+='color : #000000;';
		hs+='cursor : default;';
		hs+='height : 40px;';
		hs+='left : 0px;';
		hs+='position : absolute;';
		hs+='visibility : inherit;';
		hs+='width : 100%;';
		hs+='pointer-events:auto;';
		hs+='letter-spacing:0px; word-break:keep-all;';
		el.setAttribute('style',hs);
		el.style.transformOrigin='50% 50%';
		hs ='';
		hs += 'box-sizing: border-box;';
		hs+='cursor: default;';
		hs+='width: 100%;';
		hs+='height: 100%;';
		hs+='font-size: 12px;';
		hs+='font-weight: inherit;';
		hs+='text-align: left;';
		hs+='white-space: pre-line;';
		hs+='padding: 0px;';
		hs+='overflow: hidden;';
		els.setAttribute('style',hs);
		me.__9.ggUpdateText=function() {
			var params = [];
			var hs = player._("\ub9de\ucda4\ud615 \uc870\ud569\uc73c\ub85c \uc8fc\ubc29\uc744 \ub098\ub2f5\uac8c \ub098\ub9cc\uc758 \uc870\ud569 & \uc624\ub9ac\uc9c0\ub110 \ud0a4\uce5c\ud54f", params);
			if (hs!=this.ggText) {
				this.ggText=hs;
				this.ggTextDiv.innerHTML=hs;
				if (this.ggUpdatePosition) this.ggUpdatePosition();
			}
		}
		me.__9.ggUpdateText();
		el.appendChild(els);
		me.__9.ggIsActive=function() {
			if ((this.parentNode) && (this.parentNode.ggIsActive)) {
				return this.parentNode.ggIsActive();
			}
			return false;
		}
		el.ggElementNodeId=function() {
			if ((this.parentNode) && (this.parentNode.ggElementNodeId)) {
				return this.parentNode.ggElementNodeId();
			}
			return player.getCurrentNode();
		}
		me.__9.ggUpdatePosition=function (useTransition) {
		}
		el=me._text_111=document.createElement('div');
		els=me._text_111__text=document.createElement('div');
		el.className='ggskin ggskin_textdiv';
		el.ggTextDiv=els;
		el.ggId="Text 111";
		el.ggParameter={ rx:0,ry:0,a:0,sx:1,sy:1,def:'' };
		el.ggVisible=true;
		el.className="ggskin ggskin_text ";
		el.ggType='text';
		hs ='';
		hs+='background : #ffffff;';
		hs+='border : 0px solid #000000;';
		hs+='bottom : -20px;';
		hs+='color : rgba(0,0,0,0.784314);';
		hs+='cursor : default;';
		hs+='height : 20px;';
		hs+='left : 0px;';
		hs+='position : absolute;';
		hs+='visibility : inherit;';
		hs+='width : 100%;';
		hs+='pointer-events:auto;';
		el.setAttribute('style',hs);
		el.style.transformOrigin='50% 50%';
		hs ='';
		hs += 'box-sizing: border-box;';
		hs+='cursor: default;';
		hs+='width: 100%;';
		hs+='height: auto;';
		hs+='max-height: 100%;';
		hs+='font-size: 10px;';
		hs+='font-weight: inherit;';
		hs+='text-align: left;';
		hs+='position: absolute;';
		hs+='top: 50%;';
		hs+='transform: translate(0, -50%);';
		hs+='white-space: pre;';
		hs+='padding: 0px;';
		hs+='overflow: hidden;';
		hs+='overflow-y: auto;';
		els.setAttribute('style',hs);
		me._text_111.ggUpdateText=function() {
			var params = [];
			var hs = player._("\uc81c\ud488\ucf54\ub4dc : RR40C7805AP35", params);
			if (hs!=this.ggText) {
				this.ggText=hs;
				this.ggTextDiv.innerHTML=hs;
				if (this.ggUpdatePosition) this.ggUpdatePosition();
			}
		}
		me._text_111.ggUpdateText();
		el.appendChild(els);
		me._text_111.ggIsActive=function() {
			if ((this.parentNode) && (this.parentNode.ggIsActive)) {
				return this.parentNode.ggIsActive();
			}
			return false;
		}
		el.ggElementNodeId=function() {
			if ((this.parentNode) && (this.parentNode.ggElementNodeId)) {
				return this.parentNode.ggElementNodeId();
			}
			return player.getCurrentNode();
		}
		me._text_111.ggUpdatePosition=function (useTransition) {
		}
		me.__9.appendChild(me._text_111);
		me.__8.appendChild(me.__9);
		me.__7.appendChild(me.__8);
		me._container_3.appendChild(me.__7);
		el=me.__m=document.createElement('div');
		el.ggId="\ub85c\uace0 \ucee8\ud14c\uc774\ub108-m";
		el.ggParameter={ rx:0,ry:0,a:0,sx:1,sy:1,def:'' };
		el.ggVisible=true;
		el.className="ggskin ggskin_container ";
		el.ggType='container';
		hs ='';
		hs+='height : 320px;';
		hs+='left : 0px;';
		hs+='position : absolute;';
		hs+='top : -29px;';
		hs+='visibility : inherit;';
		hs+='width : 480px;';
		hs+='pointer-events:none;';
		el.setAttribute('style',hs);
		el.style.transformOrigin='50% 50%';
		me.__m.ggIsActive=function() {
			if ((this.parentNode) && (this.parentNode.ggIsActive)) {
				return this.parentNode.ggIsActive();
			}
			return false;
		}
		el.ggElementNodeId=function() {
			if ((this.parentNode) && (this.parentNode.ggElementNodeId)) {
				return this.parentNode.ggElementNodeId();
			}
			return player.getCurrentNode();
		}
		me.__m.ggUpdatePosition=function (useTransition) {
		}
		el=me._m=document.createElement('div');
		els=me._m__text=document.createElement('div');
		el.className='ggskin ggskin_textdiv';
		el.ggTextDiv=els;
		el.ggId="\ud68c\uc0ac\uba85-m";
		el.ggParameter={ rx:0,ry:0,a:0,sx:1,sy:1,def:'' };
		el.ggVisible=true;
		el.className="ggskin ggskin_text ";
		el.ggType='text';
		hs ='';
		hs+='background : #ffffff;';
		hs+='border : 0px solid #000000;';
		hs+='color : #000000;';
		hs+='cursor : default;';
		hs+='height : 20px;';
		hs+='left : 0px;';
		hs+='position : absolute;';
		hs+='top : 0px;';
		hs+='visibility : inherit;';
		hs+='width : 100px;';
		hs+='pointer-events:auto;';
		el.setAttribute('style',hs);
		el.style.transformOrigin='50% 50%';
		hs ='';
		hs += 'box-sizing: border-box;';
		hs+='cursor: default;';
		hs+='width: 100%;';
		hs+='height: auto;';
		hs+='max-height: 100%;';
		hs+='font-size: 12px;';
		hs+='font-weight: 500;';
		hs+='text-align: left;';
		hs+='position: absolute;';
		hs+='top: 50%;';
		hs+='transform: translate(0, -50%);';
		hs+='white-space: pre;';
		hs+='padding: 0px;';
		hs+='overflow: hidden;';
		els.setAttribute('style',hs);
		me._m.ggUpdateText=function() {
			var params = [];
			var hs = player._("UNFICTION", params);
			if (hs!=this.ggText) {
				this.ggText=hs;
				this.ggTextDiv.innerHTML=hs;
				if (this.ggUpdatePosition) this.ggUpdatePosition();
			}
		}
		me._m.ggUpdateText();
		el.appendChild(els);
		me._m.ggIsActive=function() {
			if ((this.parentNode) && (this.parentNode.ggIsActive)) {
				return this.parentNode.ggIsActive();
			}
			return false;
		}
		el.ggElementNodeId=function() {
			if ((this.parentNode) && (this.parentNode.ggElementNodeId)) {
				return this.parentNode.ggElementNodeId();
			}
			return player.getCurrentNode();
		}
		me._m.ggUpdatePosition=function (useTransition) {
		}
		me.__m.appendChild(me._m);
		me._container_3.appendChild(me.__m);
		el=me.__0=document.createElement('div');
		el.ggId="\uc81c\ud488\uc774\ubbf8\uc9c0";
		el.ggParameter={ rx:0,ry:0,a:0,sx:1,sy:1,def:'' };
		el.ggVisible=true;
		el.className="ggskin ggskin_container ";
		el.ggType='container';
		hs ='';
		hs+='height : 40%;';
		hs+='left : 0px;';
		hs+='position : absolute;';
		hs+='top : 20%;';
		hs+='visibility : inherit;';
		hs+='width : 100%;';
		hs+='pointer-events:none;';
		el.setAttribute('style',hs);
		el.style.transformOrigin='50% 50%';
		me.__0.ggIsActive=function() {
			if ((this.parentNode) && (this.parentNode.ggIsActive)) {
				return this.parentNode.ggIsActive();
			}
			return false;
		}
		el.ggElementNodeId=function() {
			if ((this.parentNode) && (this.parentNode.ggElementNodeId)) {
				return this.parentNode.ggElementNodeId();
			}
			return player.getCurrentNode();
		}
		me.__0.ggUpdatePosition=function (useTransition) {
		}
		el=me.__6=document.createElement('div');
		el.ggId="\uc81c\ud488\uc774\ubbf8\uc9c0 \ubc30\uacbd";
		el.ggDx=0;
		el.ggDy=-12;
		el.ggParameter={ rx:0,ry:0,a:0,sx:1,sy:1,def:'' };
		el.ggVisible=true;
		el.className="ggskin ggskin_rectangle ";
		el.ggType='rectangle';
		hs ='';
		hs+='background : #ffffff;';
		hs+='border : 0px solid #000000;';
		hs+='cursor : default;';
		hs+='height : 110%;';
		hs+='left : calc(50% - ((83% + 0px) / 2) + 0px);';
		hs+='position : absolute;';
		hs+='top : calc(50% - ((110% + 0px) / 2) - 12px);';
		hs+='visibility : inherit;';
		hs+='width : 83%;';
		hs+='pointer-events:auto;';
		el.setAttribute('style',hs);
		el.style.transformOrigin='50% 50%';
		me.__6.ggIsActive=function() {
			if ((this.parentNode) && (this.parentNode.ggIsActive)) {
				return this.parentNode.ggIsActive();
			}
			return false;
		}
		el.ggElementNodeId=function() {
			if ((this.parentNode) && (this.parentNode.ggElementNodeId)) {
				return this.parentNode.ggElementNodeId();
			}
			return player.getCurrentNode();
		}
		me.__6.ggUpdatePosition=function (useTransition) {
		}
		el=me._image_6=document.createElement('div');
		els=me._image_6__img=document.createElement('img');
		els.className='ggskin ggskin_image_6';
		hs='data:image/png;base64,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'+
			'AAAABJRU5ErkJggg==';
		els.setAttribute('src',hs);
		els.ggNormalSrc=hs;
		hs ='';
		hs += 'position: absolute;top: 0px;left: 0px;width: 100%;height: 100%;-webkit-user-drag:none;pointer-events:none;;';
		els.setAttribute('style', hs);
		els.className='ggskin ggskin_image';
		els['ondragstart']=function() { return false; };
		player.checkLoaded.push(els);
		el.appendChild(els);
		el.ggSubElement = els;
		el.ggId="Image 6";
		el.ggDx=0;
		el.ggDy=0;
		el.ggParameter={ rx:0,ry:0,a:0,sx:1,sy:1,def:'' };
		el.ggVisible=true;
		el.className="ggskin ggskin_image ";
		el.ggType='image';
		hs ='';
		hs+='height : 100%;';
		hs+='left : calc(50% - ((90.96% + 0px) / 2) + 0px);';
		hs+='opacity : 0.01;';
		hs+='position : absolute;';
		hs+='top : calc(50% - ((100% + 0px) / 2) + 0px);';
		hs+='visibility : inherit;';
		hs+='width : 90.96%;';
		hs+='pointer-events:auto;';
		el.setAttribute('style',hs);
		el.style.transformOrigin='50% 50%';
		me._image_6.ggIsActive=function() {
			if ((this.parentNode) && (this.parentNode.ggIsActive)) {
				return this.parentNode.ggIsActive();
			}
			return false;
		}
		el.ggElementNodeId=function() {
			if ((this.parentNode) && (this.parentNode.ggElementNodeId)) {
				return this.parentNode.ggElementNodeId();
			}
			return player.getCurrentNode();
		}
		me._image_6.logicBlock_alpha = function() {
			var newLogicStateAlpha;
			if (
				((player.getVariableValue('vis_button_1') == true))
			)
			{
				newLogicStateAlpha = 0;
			}
			else {
				newLogicStateAlpha = -1;
			}
			if (me._image_6.ggCurrentLogicStateAlpha != newLogicStateAlpha) {
				me._image_6.ggCurrentLogicStateAlpha = newLogicStateAlpha;
				me._image_6.style.transition='opacity 0s';
				if (me._image_6.ggCurrentLogicStateAlpha == 0) {
					me._image_6.style.visibility=me._image_6.ggVisible?'inherit':'hidden';
					me._image_6.style.opacity=1;
				}
				else {
					me._image_6.style.visibility=me._image_6.ggVisible?'inherit':'hidden';
					me._image_6.style.opacity=0.01;
				}
			}
		}
		me._image_6.logicBlock_alpha();
		me._image_6.onclick=function (e) {
			player.setVariableValue('vis_button_1', true);
			player.setVariableValue('vis_button_2', false);
			player.setVariableValue('vis_button_3', false);
			player.setVariableValue('vis_button_4', false);
		}
		me._image_6.ggUpdatePosition=function (useTransition) {
		}
		me.__6.appendChild(me._image_6);
		el=me._image_111=document.createElement('div');
		els=me._image_111__img=document.createElement('img');
		els.className='ggskin ggskin_image_111';
		hs='data:image/png;base64,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';
		els.setAttribute('src',hs);
		els.ggNormalSrc=hs;
		hs ='';
		hs += 'position: absolute;top: 0px;left: 0px;width: 100%;height: 100%;-webkit-user-drag:none;pointer-events:none;;';
		els.setAttribute('style', hs);
		els.className='ggskin ggskin_image';
		els['ondragstart']=function() { return false; };
		player.checkLoaded.push(els);
		el.appendChild(els);
		el.ggSubElement = els;
		el.ggId="Image 111";
		el.ggDx=0;
		el.ggDy=0;
		el.ggParameter={ rx:0,ry:0,a:0,sx:1,sy:1,def:'' };
		el.ggVisible=true;
		el.className="ggskin ggskin_image ";
		el.ggType='image';
		hs ='';
		hs+='height : 100%;';
		hs+='left : calc(50% - ((90.96% + 0px) / 2) + 0px);';
		hs+='opacity : 0.01;';
		hs+='position : absolute;';
		hs+='top : calc(50% - ((100% + 0px) / 2) + 0px);';
		hs+='visibility : inherit;';
		hs+='width : 90.96%;';
		hs+='pointer-events:auto;';
		el.setAttribute('style',hs);
		el.style.transformOrigin='50% 50%';
		me._image_111.ggIsActive=function() {
			if ((this.parentNode) && (this.parentNode.ggIsActive)) {
				return this.parentNode.ggIsActive();
			}
			return false;
		}
		el.ggElementNodeId=function() {
			if ((this.parentNode) && (this.parentNode.ggElementNodeId)) {
				return this.parentNode.ggElementNodeId();
			}
			return player.getCurrentNode();
		}
		me._image_111.logicBlock_alpha = function() {
			var newLogicStateAlpha;
			if (
				((player.getVariableValue('vis_button_2') == true))
			)
			{
				newLogicStateAlpha = 0;
			}
			else {
				newLogicStateAlpha = -1;
			}
			if (me._image_111.ggCurrentLogicStateAlpha != newLogicStateAlpha) {
				me._image_111.ggCurrentLogicStateAlpha = newLogicStateAlpha;
				me._image_111.style.transition='opacity 0s';
				if (me._image_111.ggCurrentLogicStateAlpha == 0) {
					me._image_111.style.visibility=me._image_111.ggVisible?'inherit':'hidden';
					me._image_111.style.opacity=1;
				}
				else {
					me._image_111.style.visibility=me._image_111.ggVisible?'inherit':'hidden';
					me._image_111.style.opacity=0.01;
				}
			}
		}
		me._image_111.logicBlock_alpha();
		me._image_111.onclick=function (e) {
			player.setVariableValue('vis_button_1', false);
			player.setVariableValue('vis_button_2', true);
			player.setVariableValue('vis_button_3', false);
			player.setVariableValue('vis_button_4', false);
		}
		me._image_111.ggUpdatePosition=function (useTransition) {
		}
		me.__6.appendChild(me._image_111);
		el=me._image_12=document.createElement('div');
		els=me._image_12__img=document.createElement('img');
		els.className='ggskin ggskin_image_12';
		hs='data:image/png;base64,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';
		els.setAttribute('src',hs);
		els.ggNormalSrc=hs;
		hs ='';
		hs += 'position: absolute;top: 0px;left: 0px;width: 100%;height: 100%;-webkit-user-drag:none;pointer-events:none;;';
		els.setAttribute('style', hs);
		els.className='ggskin ggskin_image';
		els['ondragstart']=function() { return false; };
		player.checkLoaded.push(els);
		el.appendChild(els);
		el.ggSubElement = els;
		el.ggId="Image 12";
		el.ggDx=0;
		el.ggDy=0;
		el.ggParameter={ rx:0,ry:0,a:0,sx:1,sy:1,def:'' };
		el.ggVisible=true;
		el.className="ggskin ggskin_image ";
		el.ggType='image';
		hs ='';
		hs+='height : 100%;';
		hs+='left : calc(50% - ((90.96% + 0px) / 2) + 0px);';
		hs+='opacity : 0.01;';
		hs+='position : absolute;';
		hs+='top : calc(50% - ((100% + 0px) / 2) + 0px);';
		hs+='visibility : inherit;';
		hs+='width : 90.96%;';
		hs+='pointer-events:auto;';
		el.setAttribute('style',hs);
		el.style.transformOrigin='50% 50%';
		me._image_12.ggIsActive=function() {
			if ((this.parentNode) && (this.parentNode.ggIsActive)) {
				return this.parentNode.ggIsActive();
			}
			return false;
		}
		el.ggElementNodeId=function() {
			if ((this.parentNode) && (this.parentNode.ggElementNodeId)) {
				return this.parentNode.ggElementNodeId();
			}
			return player.getCurrentNode();
		}
		me._image_12.logicBlock_alpha = function() {
			var newLogicStateAlpha;
			if (
				((player.getVariableValue('vis_button_3') == true))
			)
			{
				newLogicStateAlpha = 0;
			}
			else {
				newLogicStateAlpha = -1;
			}
			if (me._image_12.ggCurrentLogicStateAlpha != newLogicStateAlpha) {
				me._image_12.ggCurrentLogicStateAlpha = newLogicStateAlpha;
				me._image_12.style.transition='opacity 0s';
				if (me._image_12.ggCurrentLogicStateAlpha == 0) {
					me._image_12.style.visibility=me._image_12.ggVisible?'inherit':'hidden';
					me._image_12.style.opacity=1;
				}
				else {
					me._image_12.style.visibility=me._image_12.ggVisible?'inherit':'hidden';
					me._image_12.style.opacity=0.01;
				}
			}
		}
		me._image_12.logicBlock_alpha();
		me._image_12.onclick=function (e) {
			player.setVariableValue('vis_button_1', false);
			player.setVariableValue('vis_button_2', false);
			player.setVariableValue('vis_button_3', true);
			player.setVariableValue('vis_button_4', false);
		}
		me._image_12.ggUpdatePosition=function (useTransition) {
		}
		me.__6.appendChild(me._image_12);
		el=me._image_131=document.createElement('div');
		els=me._image_131__img=document.createElement('img');
		els.className='ggskin ggskin_image_131';
		hs='data:image/png;base64,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';
		els.setAttribute('src',hs);
		els.ggNormalSrc=hs;
		hs ='';
		hs += 'position: absolute;top: 0px;left: 0px;width: 100%;height: 100%;-webkit-user-drag:none;pointer-events:none;;';
		els.setAttribute('style', hs);
		els.className='ggskin ggskin_image';
		els['ondragstart']=function() { return false; };
		player.checkLoaded.push(els);
		el.appendChild(els);
		el.ggSubElement = els;
		el.ggId="Image 131";
		el.ggDx=0;
		el.ggDy=0;
		el.ggParameter={ rx:0,ry:0,a:0,sx:1,sy:1,def:'' };
		el.ggVisible=true;
		el.className="ggskin ggskin_image ";
		el.ggType='image';
		hs ='';
		hs+='height : 100%;';
		hs+='left : calc(50% - ((90.96% + 0px) / 2) + 0px);';
		hs+='opacity : 0.01;';
		hs+='position : absolute;';
		hs+='top : calc(50% - ((100% + 0px) / 2) + 0px);';
		hs+='visibility : inherit;';
		hs+='width : 90.96%;';
		hs+='pointer-events:auto;';
		el.setAttribute('style',hs);
		el.style.transformOrigin='50% 50%';
		me._image_131.ggIsActive=function() {
			if ((this.parentNode) && (this.parentNode.ggIsActive)) {
				return this.parentNode.ggIsActive();
			}
			return false;
		}
		el.ggElementNodeId=function() {
			if ((this.parentNode) && (this.parentNode.ggElementNodeId)) {
				return this.parentNode.ggElementNodeId();
			}
			return player.getCurrentNode();
		}
		me._image_131.logicBlock_alpha = function() {
			var newLogicStateAlpha;
			if (
				((player.getVariableValue('vis_button_4') == true))
			)
			{
				newLogicStateAlpha = 0;
			}
			else {
				newLogicStateAlpha = -1;
			}
			if (me._image_131.ggCurrentLogicStateAlpha != newLogicStateAlpha) {
				me._image_131.ggCurrentLogicStateAlpha = newLogicStateAlpha;
				me._image_131.style.transition='opacity 0s';
				if (me._image_131.ggCurrentLogicStateAlpha == 0) {
					me._image_131.style.visibility=me._image_131.ggVisible?'inherit':'hidden';
					me._image_131.style.opacity=1;
				}
				else {
					me._image_131.style.visibility=me._image_131.ggVisible?'inherit':'hidden';
					me._image_131.style.opacity=0.01;
				}
			}
		}
		me._image_131.logicBlock_alpha();
		me._image_131.onclick=function (e) {
			player.setVariableValue('vis_button_1', false);
			player.setVariableValue('vis_button_2', false);
			player.setVariableValue('vis_button_3', false);
			player.setVariableValue('vis_button_4', true);
		}
		me._image_131.ggUpdatePosition=function (useTransition) {
		}
		me.__6.appendChild(me._image_131);
		me.__0.appendChild(me.__6);
		el=me.__5=document.createElement('div');
		el.ggId="\uc81c\ud488\uc124\uba85";
		el.ggParameter={ rx:0,ry:0,a:0,sx:1,sy:1,def:'' };
		el.ggVisible=true;
		el.className="ggskin ggskin_container ";
		el.ggType='container';
		hs ='';
		hs+='bottom : -70%;';
		hs+='height : 20%;';
		hs+='left : 0px;';
		hs+='position : absolute;';
		hs+='visibility : inherit;';
		hs+='width : 100%;';
		hs+='pointer-events:none;';
		el.setAttribute('style',hs);
		el.style.transformOrigin='50% 50%';
		me.__5.ggIsActive=function() {
			if ((this.parentNode) && (this.parentNode.ggIsActive)) {
				return this.parentNode.ggIsActive();
			}
			return false;
		}
		el.ggElementNodeId=function() {
			if ((this.parentNode) && (this.parentNode.ggElementNodeId)) {
				return this.parentNode.ggElementNodeId();
			}
			return player.getCurrentNode();
		}
		me.__5.ggUpdatePosition=function (useTransition) {
		}
		el=me._text_21=document.createElement('div');
		els=me._text_21__text=document.createElement('div');
		el.className='ggskin ggskin_textdiv';
		el.ggTextDiv=els;
		el.ggId="Text 21";
		el.ggParameter={ rx:0,ry:0,a:0,sx:1,sy:1,def:'' };
		el.ggVisible=true;
		el.className="ggskin ggskin_text ";
		el.ggType='text';
		hs ='';
		hs+='background : #ffffff;';
		hs+='border : 0px solid #000000;';
		hs+='color : #000000;';
		hs+='cursor : default;';
		hs+='height : 200%;';
		hs+='left : 0px;';
		hs+='position : absolute;';
		hs+='top : 0px;';
		hs+='visibility : inherit;';
		hs+='width : 95%;';
		hs+='pointer-events:auto;';
		hs+='word-break:keep-all;';
		el.setAttribute('style',hs);
		el.style.transformOrigin='50% 50%';
		hs ='';
		hs += 'box-sizing: border-box;';
		hs+='cursor: default;';
		hs+='width: 100%;';
		hs+='height: 100%;';
		hs+='font-size: 14px;';
		hs+='font-weight: inherit;';
		hs+='text-align: left;';
		hs+='white-space: pre-line;';
		hs+='padding: 0px;';
		hs+='overflow: hidden;';
		hs+='overflow-y: auto;';
		els.setAttribute('style',hs);
		me._text_21.ggUpdateText=function() {
			var params = [];
			var hs = player._("BESPOKE \ud0a4\uce5c\ud54f\uc740 700mm \uae4a\uc774\uc758 \ub0c9\uc7a5\uace0\uc7a5 \ub77c\uc778\uc5d0 \ub531\ub9de\uac8c \ub4e4\uc5b4\uac00 \ube4c\ud2b8\uc778\ucc98\ub7fc \uc5f0\ucd9c \uac00\ub2a5\ud569\ub2c8\ub2e4. \n\n\uc804\uccb4\uc6a9\ub7c9(L) 409\n\ud3ed 595mm\n\ub192\uc774 1,853mm\n\uae4a\uc774 688mm\n\uc5d0\ub108\uc9c0\uc18c\ube44\ud6a8\uc728\ub4f1\uae09 1\ub4f1\uae09\n\uc0c9\uc0c1 \uae00\ub7a8\ud654\uc774\ud2b8\n", params);
			if (hs!=this.ggText) {
				this.ggText=hs;
				this.ggTextDiv.innerHTML=hs;
				if (this.ggUpdatePosition) this.ggUpdatePosition();
			}
		}
		me._text_21.ggUpdateText();
		el.appendChild(els);
		me._text_21.ggIsActive=function() {
			if ((this.parentNode) && (this.parentNode.ggIsActive)) {
				return this.parentNode.ggIsActive();
			}
			return false;
		}
		el.ggElementNodeId=function() {
			if ((this.parentNode) && (this.parentNode.ggElementNodeId)) {
				return this.parentNode.ggElementNodeId();
			}
			return player.getCurrentNode();
		}
		me._text_21.ggUpdatePosition=function (useTransition) {
		}
		me.__5.appendChild(me._text_21);
		me.__0.appendChild(me.__5);
		el=me.__1=document.createElement('div');
		el.ggId="\uc81c\ud488\uc2a4\ubab0\uc0f7";
		el.ggParameter={ rx:0,ry:0,a:0,sx:1,sy:1,def:'' };
		el.ggVisible=true;
		el.className="ggskin ggskin_container ";
		el.ggType='container';
		hs ='';
		hs+='bottom : -38%;';
		hs+='cursor : pointer;';
		hs+='height : 30%;';
		hs+='left : 0px;';
		hs+='position : absolute;';
		hs+='visibility : inherit;';
		hs+='width : 100%;';
		hs+='pointer-events:none;';
		el.setAttribute('style',hs);
		el.style.transformOrigin='50% 50%';
		me.__1.ggIsActive=function() {
			if ((this.parentNode) && (this.parentNode.ggIsActive)) {
				return this.parentNode.ggIsActive();
			}
			return false;
		}
		el.ggElementNodeId=function() {
			if ((this.parentNode) && (this.parentNode.ggElementNodeId)) {
				return this.parentNode.ggElementNodeId();
			}
			return player.getCurrentNode();
		}
		me.__1.ggUpdatePosition=function (useTransition) {
		}
		el=me.__10=document.createElement('div');
		el.ggId="\uc81c\ud488\uc2a4\ubab0\uc0f7\ubc30\uacbd1";
		el.ggParameter={ rx:0,ry:0,a:0,sx:1,sy:1,def:'' };
		el.ggVisible=true;
		el.className="ggskin ggskin_rectangle ";
		el.ggType='rectangle';
		hs ='';
		hs+='background : #ffffff;';
		hs+='border : 1px solid #ffffff;';
		hs+='border-radius : 10px;';
		hs+='cursor : default;';
		hs+='height : 70px;';
		hs+='left : 0px;';
		hs+='position : absolute;';
		hs+='top : 0px;';
		hs+='visibility : inherit;';
		hs+='width : 70px;';
		hs+='pointer-events:auto;';
		el.setAttribute('style',hs);
		el.style.transformOrigin='50% 50%';
		me.__10.ggIsActive=function() {
			if ((this.parentNode) && (this.parentNode.ggIsActive)) {
				return this.parentNode.ggIsActive();
			}
			return false;
		}
		el.ggElementNodeId=function() {
			if ((this.parentNode) && (this.parentNode.ggElementNodeId)) {
				return this.parentNode.ggElementNodeId();
			}
			return player.getCurrentNode();
		}
		me.__10.logicBlock_bordercolor = function() {
			var newLogicStateBorderColor;
			if (
				((player.getVariableValue('vis_button_1') == true))
			)
			{
				newLogicStateBorderColor = 0;
			}
			else {
				newLogicStateBorderColor = -1;
			}
			if (me.__10.ggCurrentLogicStateBorderColor != newLogicStateBorderColor) {
				me.__10.ggCurrentLogicStateBorderColor = newLogicStateBorderColor;
				me.__10.style.transition='border-color 0s';
				if (me.__10.ggCurrentLogicStateBorderColor == 0) {
					me.__10.style.borderColor="rgba(0,0,0,1)";
				}
				else {
					me.__10.style.borderColor="rgba(255,255,255,1)";
				}
			}
		}
		me.__10.logicBlock_bordercolor();
		me.__10.onclick=function (e) {
			player.setVariableValue('vis_button_1', true);
			player.setVariableValue('vis_button_2', false);
			player.setVariableValue('vis_button_3', false);
			player.setVariableValue('vis_button_4', false);
		}
		me.__10.ggUpdatePosition=function (useTransition) {
		}
		el=me._image_711=document.createElement('div');
		els=me._image_711__img=document.createElement('img');
		els.className='ggskin ggskin_image_711';
		hs='data:image/png;base64,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'+
			'AAAABJRU5ErkJggg==';
		els.setAttribute('src',hs);
		els.ggNormalSrc=hs;
		hs ='';
		hs += 'position: absolute;top: 0px;left: 0px;width: 100%;height: 100%;-webkit-user-drag:none;pointer-events:none;;';
		els.setAttribute('style', hs);
		els.className='ggskin ggskin_image';
		els['ondragstart']=function() { return false; };
		player.checkLoaded.push(els);
		el.appendChild(els);
		el.ggSubElement = els;
		el.ggId="Image 711";
		el.ggDx=0;
		el.ggDy=0;
		el.ggParameter={ rx:0,ry:0,a:0,sx:1,sy:1,def:'' };
		el.ggVisible=true;
		el.className="ggskin ggskin_image ";
		el.ggType='image';
		hs ='';
		hs+='height : 100%;';
		hs+='left : calc(50% - ((100% + 0px) / 2) + 0px);';
		hs+='position : absolute;';
		hs+='top : calc(50% - ((100% + 0px) / 2) + 0px);';
		hs+='visibility : inherit;';
		hs+='width : 100%;';
		hs+='pointer-events:auto;';
		el.setAttribute('style',hs);
		el.style.transformOrigin='50% 50%';
		me._image_711.ggIsActive=function() {
			if ((this.parentNode) && (this.parentNode.ggIsActive)) {
				return this.parentNode.ggIsActive();
			}
			return false;
		}
		el.ggElementNodeId=function() {
			if ((this.parentNode) && (this.parentNode.ggElementNodeId)) {
				return this.parentNode.ggElementNodeId();
			}
			return player.getCurrentNode();
		}
		me._image_711.ggUpdatePosition=function (useTransition) {
		}
		me.__10.appendChild(me._image_711);
		me.__1.appendChild(me.__10);
		el=me.__2=document.createElement('div');
		el.ggId="\uc81c\ud488\uc2a4\ubab0\uc0f7\ubc30\uacbd2";
		el.ggParameter={ rx:0,ry:0,a:0,sx:1,sy:1,def:'' };
		el.ggVisible=true;
		el.className="ggskin ggskin_rectangle ";
		el.ggType='rectangle';
		hs ='';
		hs+='background : #ffffff;';
		hs+='border : 1px solid #ffffff;';
		hs+='border-radius : 10px;';
		hs+='cursor : default;';
		hs+='height : 70px;';
		hs+='left : 25%;';
		hs+='position : absolute;';
		hs+='top : 0px;';
		hs+='visibility : inherit;';
		hs+='width : 70px;';
		hs+='pointer-events:auto;';
		el.setAttribute('style',hs);
		el.style.transformOrigin='50% 50%';
		me.__2.ggIsActive=function() {
			if ((this.parentNode) && (this.parentNode.ggIsActive)) {
				return this.parentNode.ggIsActive();
			}
			return false;
		}
		el.ggElementNodeId=function() {
			if ((this.parentNode) && (this.parentNode.ggElementNodeId)) {
				return this.parentNode.ggElementNodeId();
			}
			return player.getCurrentNode();
		}
		me.__2.logicBlock_bordercolor = function() {
			var newLogicStateBorderColor;
			if (
				((player.getVariableValue('vis_button_2') == true))
			)
			{
				newLogicStateBorderColor = 0;
			}
			else {
				newLogicStateBorderColor = -1;
			}
			if (me.__2.ggCurrentLogicStateBorderColor != newLogicStateBorderColor) {
				me.__2.ggCurrentLogicStateBorderColor = newLogicStateBorderColor;
				me.__2.style.transition='border-color 0s';
				if (me.__2.ggCurrentLogicStateBorderColor == 0) {
					me.__2.style.borderColor="rgba(0,0,0,1)";
				}
				else {
					me.__2.style.borderColor="rgba(255,255,255,1)";
				}
			}
		}
		me.__2.logicBlock_bordercolor();
		me.__2.onclick=function (e) {
			player.setVariableValue('vis_button_1', false);
			player.setVariableValue('vis_button_2', true);
			player.setVariableValue('vis_button_3', false);
			player.setVariableValue('vis_button_4', false);
		}
		me.__2.ggUpdatePosition=function (useTransition) {
		}
		el=me._image_811=document.createElement('div');
		els=me._image_811__img=document.createElement('img');
		els.className='ggskin ggskin_image_811';
		hs='data:image/png;base64,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';
		els.setAttribute('src',hs);
		els.ggNormalSrc=hs;
		hs ='';
		hs += 'position: absolute;top: 0px;left: 0px;width: 100%;height: 100%;-webkit-user-drag:none;pointer-events:none;;';
		els.setAttribute('style', hs);
		els.className='ggskin ggskin_image';
		els['ondragstart']=function() { return false; };
		player.checkLoaded.push(els);
		el.appendChild(els);
		el.ggSubElement = els;
		el.ggId="Image 811";
		el.ggDx=0;
		el.ggDy=0;
		el.ggParameter={ rx:0,ry:0,a:0,sx:1,sy:1,def:'' };
		el.ggVisible=true;
		el.className="ggskin ggskin_image ";
		el.ggType='image';
		hs ='';
		hs+='height : 100%;';
		hs+='left : calc(50% - ((100% + 0px) / 2) + 0px);';
		hs+='position : absolute;';
		hs+='top : calc(50% - ((100% + 0px) / 2) + 0px);';
		hs+='visibility : inherit;';
		hs+='width : 100%;';
		hs+='pointer-events:auto;';
		el.setAttribute('style',hs);
		el.style.transformOrigin='50% 50%';
		me._image_811.ggIsActive=function() {
			if ((this.parentNode) && (this.parentNode.ggIsActive)) {
				return this.parentNode.ggIsActive();
			}
			return false;
		}
		el.ggElementNodeId=function() {
			if ((this.parentNode) && (this.parentNode.ggElementNodeId)) {
				return this.parentNode.ggElementNodeId();
			}
			return player.getCurrentNode();
		}
		me._image_811.ggUpdatePosition=function (useTransition) {
		}
		me.__2.appendChild(me._image_811);
		me.__1.appendChild(me.__2);
		el=me.__3=document.createElement('div');
		el.ggId="\uc81c\ud488\uc2a4\ubab0\uc0f7\ubc30\uacbd3";
		el.ggParameter={ rx:0,ry:0,a:0,sx:1,sy:1,def:'' };
		el.ggVisible=true;
		el.className="ggskin ggskin_rectangle ";
		el.ggType='rectangle';
		hs ='';
		hs+='background : #ffffff;';
		hs+='border : 1px solid #ffffff;';
		hs+='border-radius : 10px;';
		hs+='cursor : default;';
		hs+='height : 70px;';
		hs+='left : 50%;';
		hs+='position : absolute;';
		hs+='top : 0px;';
		hs+='visibility : inherit;';
		hs+='width : 70px;';
		hs+='pointer-events:auto;';
		el.setAttribute('style',hs);
		el.style.transformOrigin='50% 50%';
		me.__3.ggIsActive=function() {
			if ((this.parentNode) && (this.parentNode.ggIsActive)) {
				return this.parentNode.ggIsActive();
			}
			return false;
		}
		el.ggElementNodeId=function() {
			if ((this.parentNode) && (this.parentNode.ggElementNodeId)) {
				return this.parentNode.ggElementNodeId();
			}
			return player.getCurrentNode();
		}
		me.__3.logicBlock_bordercolor = function() {
			var newLogicStateBorderColor;
			if (
				((player.getVariableValue('vis_button_3') == true))
			)
			{
				newLogicStateBorderColor = 0;
			}
			else {
				newLogicStateBorderColor = -1;
			}
			if (me.__3.ggCurrentLogicStateBorderColor != newLogicStateBorderColor) {
				me.__3.ggCurrentLogicStateBorderColor = newLogicStateBorderColor;
				me.__3.style.transition='border-color 0s';
				if (me.__3.ggCurrentLogicStateBorderColor == 0) {
					me.__3.style.borderColor="rgba(0,0,0,1)";
				}
				else {
					me.__3.style.borderColor="rgba(255,255,255,1)";
				}
			}
		}
		me.__3.logicBlock_bordercolor();
		me.__3.onclick=function (e) {
			player.setVariableValue('vis_button_1', false);
			player.setVariableValue('vis_button_2', false);
			player.setVariableValue('vis_button_3', true);
			player.setVariableValue('vis_button_4', false);
		}
		me.__3.ggUpdatePosition=function (useTransition) {
		}
		el=me._image_911=document.createElement('div');
		els=me._image_911__img=document.createElement('img');
		els.className='ggskin ggskin_image_911';
		hs='data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAAJkAAACfCAYAAADqBXunAAAACXBIWXMAAAsTAAALEwEAmpwYAAAciElEQVR4nO2dS4wcx3nHf9U9u8tdcrkiKcsSX7JkWLYUk7aUOEgkPwL54sABAkgGcosdIYfE9iGXIIfABgLkEMGAnYOV5BIjOeaSBLZjSzIsOYpl2TIQyTId6EmZEiWKlPgWudyZ7qocqqvqq+qe2V1qlqMtzp9Yzkx3dXft9H+/x7++qlbLy8tcAewDPg7cBtzS/OwAtgNLQHElOnGVQgNngXPAaeD55uf/gB8Dr250B9QGkWwG+DTwh83rBzbiIlOMBc8DjwD/2bwOxn2BcZNsL/Bl4E+A68Z54imuCE4A3wK+Cbw2rpOOi2Q3A38FfAGYHccJp5go+sC/APcDh9/pyd4pybYBXwH+gim5ckQf+Abwt8Dbl3'+
			'uSd0KyPwAeAPZf7gmm2DR4BfgS8N3LOfhysrpZ4OvAt5kS7GrBfuz9/jo2qVsX1mvJ9gL/AfzWei80RTZ4EriHdSQG67FkB4AnmBLsasdvAz8FPrzWA9ZKst8EHsVasimm2Av8CMuLVbEWkh0AHgR2XX6fpsgQu4DvY/kxEquRbC/wPeDaMXRqivzwHiw/Rnq4USSbwwb5Uxc5xSjsBf6dETrpKJJ9g2mQP8Xa8DHg74ftHCZhfBb4DqA2pk9TZAiDFei/l+7oItkC8CvgfRverSlyw1FsOdd5ubHLXf41U4JNcXnYC3w13ZhashuB57BBf7Y4cuQIzzzzS1ZWVti9+wbKsqQse/T7K9y4/0b27N3DmTNnOHfuHFVVURQF+/fvpyimtZVrwAq2KPUVtyEl2QPAF69wp64ofvDwD3jr5EkKpbj11ltRSjE/P8/MzAyn'+
			'Tp3izNmz9Pt9CqUoioKlpWsAw7Fjx6jqmuWLF9FaUxQFs7OznD//NoNqwNzsLDMzM/T7fS5cuMDCwlbefPNNDhz8MNe95zqOHDnCoKrYsmULWxcWOPiRg2zfvp3jbxxn+dIlzp49w+7du9m3b9+kv6Jx4AFsXSEAPbHjBmyxYbY4fPgwSikefvhhDh44yOe/8Pk1HWc0qA4jZrRBG4PRmlrXGF1Ta42ua6qq4uLyMssXl6mqimuv3cmFCxdZWJhnUNU89+yzoBRVf8CZM2eYX1jg1VdeyYVk92HLg96AmGRfBOYn0aMrgSef/DmvvfYaLzz/AmdOn+bCBVseVQ3q0EgBxrCy0qeua+bm5ih7pd3nmilt8yjAYMAYDFAooAclBVCg1CzbFucBha4NK5cuYYyhrmu00ezdfT3GaKBgdmaW5eVlvv/gg1fiq7gSmMfy6a'+
			'sQSFaSuRU7evQoTz/1FMYY3nrrJBcvXuxsp41Ba+0/KzynADAGu8XEJDNYiwYGhbKfjcYYRV1p+isr1FpjmvMbfx1FvzegP+ij8or57gP+Bqjdb/V7wJ6JdecKoCgKytL+TZVlgeryf1gX6GmlmneCZUq8GSYiGn+AbWGMjohqt4XraF0zOzvL3GxWxcV7gE9BkDDunVxfNh7nz5/nxInjnD17hhdffJHBoKKqKgCUUvanUCiUt2JK2X1GG4xpfhDvXTzmf0ChoHGXlqEKY2AwqJrzhvZgraIxmqoesLS0yI6d10zi69lI3APBXX5mgh3ZMFRVxWOPPcbTTz3NoUOHeOvkScqipCgKlDNDzh+6OMtYkhWqoFCWJGkbkkMdoqbWk6K1pq5rT6zG04bPzXv5OSN8BizJ9gE3TbYv40W/3+ehhx7i6KuvcfjwYV7+9cv0'+
			'V/qUZUlRJE5OeDZnkYyBwgX8sg1tUqWI99tAv67rJqew1jAQ0Qw9NhO8H9jbA3530j0ZJ06dOsV3vv1dXnrpJV544XnOn3+bXq+kLEuCraEVk3kSGINSCOHV2IzSwRhhwQwoY+dog3en0sJVVdUkCAjXqnO1XF34nR5wcNK9GCfeOPYGx44d44knnmB+fgszM/G8B2+4VDtsdwRI9yu0JVOTCRi70aWaoGRsZoLbNIaqqiICG2NjufS69jRZEu+jBfDBSfdinNBaMxhY19iWBFQ7IxQbtHakKVDOrbr9rfRwyHaBuqo96STJvFVr/nV2Jh/c0iOzwfDlS8vWCrUkBufgnLsUm1UcI9m4zfgjPA1ME1GZ4Brd9hQGGAwGI92iI1ye3PK4qQfsnHQvxgtlGeTvX3wXfVLpYjIfQBm0rlFKURQGGFgJw4SME9ssDtobS+'+
			'Uzhga6rqnqSrQR/xKL5kjb5cIzwI4esDjpXowTaphIqpwFUxSNNgYES6ZNcJcOLlZCYZSNmTSBYJIg7lS2PVR1jda6Uf/d+YhcZbiMgeEGb7NjsSAzkpnojgYooFAKUF6AlfvsUE8T9BPiMeUamDh6Ysh1bB+MF3u9W03bC3KGPVkybbEHbJl0L8aJlg6GU++LoOITJApVOLelG2PnrFdhCeuFUkFKZccmlWksHCJDBKpGgMWANtoOVYmRAXsV4S7zxnxWI7IACwtbm3dK+C/VZIvKB/yOjM3ooh32sU1CZikMUCT4C7+YUtpgs8p0GEm6yMjNZhmGxeit3mRzoSt2Vq03MbQxaKOt0FoUFKrwhHB5QVDsA9KYTDXn8gF/aBm9pJtzR3aWrKpc4Zfx7lEpO/hdqO7qC+fOgDgpkG3Sz0bYOBMIGIaRVGd7+XoVuEog'+
			'Q0t26VI8+8qRrCistFGoomXRtNENxxRFUUYj35HlgigBiIjSmLu6qnwlR5Ap4vbp4Hh6ndyQHckCOhKAjj0GfPwUYrfhZ5QEI32voRYE8+OUcUSHi9WuFmTnLv1woorHH+PBm+ASjW6yP7t1iCAanyd1fa6FNra+3+th7rrCksnzRUTLWCvLzpIVhStCLBrZwsVkAaoovIQhCw+LQkViqVM0ZJl1C8LdVVWF1ul4pGsnDxFWsGGj1vlat+wsmQ3sLalioyR1rmDltK4xpgYanUw1rhNniYbETEnMZoxhMBg0WSqJt3bmtUMXM64v+coZ2ZHMqvaxc5QvQ9srOSTVzgT9q8wqxRW01iHg74q5EncoKzCi5CFDZOcuXdFhcJUEk9Z8VhSUZeHbO8PjRgNk3OXI0R4CIrJm2pVYi0Cs0Xajc8rBcXnenIXZ7EimlJPt8S'+
			'RT/h/eXBWeZNZV2swSfJkrQYJwOkRbSw2WyA4jGc8qY4JF66rnb+lkmVoxyJFkLXPQEC2pH3Pt/JhjIsIG/aodk6WuUGtNVdckIgcYN6OpccsZE2kU8ovJ0nhMMMyJsikRU4JhXGYpXKbY567kPldV5Sf20mmczNARgKsBWVoyN4zka8f8wHhHqY9JdLNIy2q/9/GaK6vWbumBYPmsm3TnBpTqVvmFe80Z2VmywaB5kp43YqFUQo5lOjhNrEhEWDnoLTZGuhi4Uh45jOQy0CCA+KB/Ff0sV2RHsv5gEIjUpfgr+TnceDfpJFb8VTcHxEZvxVy2KBLMq4A/a0J2JCsdWYjHKp3bKnzGGaDcnABf9wVxiyCmShhj0LWbQ2mC3XIWL7Js7aREpR3JFNmRTMtJH4Dzmy4+k3GZI4+/2UbGZB2CrolzTaN1M2IgK16ddBHx'+
			'q5XN2prKdkKQI7IjmdEuqG5kKxWsWNOidUxZlH5fGpl1XqN5tSq/EGtl9auwbE4zs90Q/lqQ2hVL5ojsfqu6booWk3FL5Wur4/YyEUjdpLdpJsz89pmlE2AbtnjXbFTIWKPzdQiwDYqi4NzZs7z11puX+Vu/u5GdhFFVtV+Rx5HHDy/ZT1F76SoD1YK18ao9xi4jhSCZ1iLAdylsqq2FY+1m0zKQSinOnjvH8889N5bv4N2G7CyZNrVda0wVoezHSReFapVXF1EZkHRlgSxhwDvoY25A3CRkCgPhwjompJKD46EfRWtbLsiOZGVR+kA/fVU+CRAH+EHxNJ5y2laAlCXc0pxIw+U5JojZxTLamWZRFvR62TkWIEN3KZGq/24ySZpdehg7Q9yySQmimIRQxlZdaGndhAArRwSEfWoVK4rtMzMzzMzm+fiE7CxZV2AtlX'+
			'8XgsVjlUQuzm4K+kM6WO6zSkGt6DRI0b/bBaZOuhoMshUzsiNZWLna3eVYwZcv9m3YFqlgwmrJV3cN7RYbNgmhmtco7hLaGDR1a6L6A6Wodc06nwe/aZCdu1SFmwJXhOltdk9oo1RTpl2iitLyQpvYCgkY8cZgkoDftUjFWytraFRkFSEWjN15tDbMz2e1YoRHdiQrizIMITVLExSF8plmUZaRNubX3IeGRBZR/pdaMbHOf2jVkEnIIXaVftdOWEMpwiq74vaunTv5yEfvGOdX8a5BdiSTBIAgtjpJwwX+XTDJGxnA280u4BeZpbNEvigxtmqdskSScxhjWFhYWNfvuZmQXUwWuzGhkXUo/ZBYmOYYv4NIUwUnwAppIqaQGLNsDk5lkKZXLZ7rjCtn87NkxghNjKCRSd0M48cy7TorrqRH1pmFmUfy3NaKNW2aI+Ry'+
			'BFIjCwmEiQoUUznEXzNTlmVnyZTCT951w0tFUdjJvgAtOnXaI/uaEEDX2hJN6GEGkINL4QATxWDRa9oBvylPESM7ks30ZvzQ0bCfCF3FGY2JSpcRqHWY9hbFby48828iqbVtn1QHoUy+lixDdxl0sohPxvi5mMCqT+HtmpFktG7pG4FY4XPEV+kuE0SEz9OIARlaMkgdogq8cMo/VsoQjVvvUytW+ckiKlg5n10Kc9buSDvwT6xpmOSSJ7KzZCZdwbqFxpL52UkiW4wC87Y25kt+xDBTXNPvon9RHtRBvmg1oGQmU47IzpKVZXjwVuvWOUOklJ84YjoaOvK4BnWtA3md9fIaWlyM6AkXETUmlX3T7BElRbkiO0vmnsgGXsEQQT9SvQDwFsd+IFiypo02zfPFo1BehGEyA5UVGwSyuZkFpnGzbvVsPzrQWLNUSM4F2Z'+
			'GsP+jHSkGUVYbXOACTB8Sfda3RdQj4o0FvE4jUlXWGEYNU4G1bLemGc0N2JOuVvbYP9NUP4b284VHc5N0hTYl13ZExhloxibhQUfLVBXy0SCwOnpJss6DsucqLIdmaI0AyQG532Vc7YUR7Nd/9pJ9bK/R46+XOJYazEs77p2I2++u6pvYrd+eF7EhmtHNOiTtUQwxIWvUqMkT5HCVHnFHWpktMFTYsEFqpEMu5vhk9jck2C3QzgyipTEy3eBijW7KHC+rdwnaycDEquW4+B2LKM9hXFTlNaeWSfgzrYAbITsKodS1utgy4VZRJehp0FR82bs8vFmycxaPDIsbnS2TWuK1KGshK2enCxJsHdsZPsCQhZvIPCm9em9Bd+DM3l1I3rkvrOlgqTPNQiSQWI9XEIIxMGiJKJh+dfBE3yA/ZkUyRrgUGgWwMzwec5Wp+bB2/'+
			'wU3WDbPHm/YdV14rSbpWdKx1zWAwDfw3BVShIjEV4uDbxUROAE1ndHsLpQUxfRjWEUul51D2IqnRio5J9yjQVU2/v7Lu33czIDuSyafvmiaRc2/8EJDWTRzUPEjVLR3l4itjQjVHmlUKFxkGyfHHyeBfyiOj7JxC0R8MWFnpj++LeBchO3eZQlqNVD5zuqsTb/3MIRl7ibhOnMWfwIh/4Xqmq6nf5pdiSdxmWuqWC7IjmUpeMd0WJKrTN8avluhliijA10GmcCdsCOgHqRJXak+dLkVF6ExaFNlxjlyQnbssiiJW6Rt3mVY7WJ5oYaVs/CVLejAuCTDxcS4rJRBDdTjElu2TpUTir8HFh7mWX2dJMq2NeDBX0Lik0E6yP2SgOmwnVNra5EEJwgYJw1tEhCvszD+TgkeB2CXnhfxIVpZet7IWR0VEi41FGFh0N9k9Kt'+
			'olCG6IyRqhtpgr9THlWw0bXRhBIkW2MVl+JBPuEmMwKtxYTzZkRaqJ94mM0b5VnlbGhBEE2y5I+El6EW0byR0hkeSK7Egm75YBlMgQwWC08kq7dIsuzjJaE0Iwmf0FN+f2DbdZaySYR6YmrEGGJHNw2pezXmFlitgthWzSq/yOTHa3/1G4OZZEbnLI1SMDNYpGLnXQq5xzsyI7khnJDFHL5QyTs0j+oaoiE9U6rGdhBMuM/OyC/QTDxNZ0PHwUjcIq3HkhO5I1ozpB7yqsVAEFaIMptF/KQDdlPsbEM8OdNQsuUnyGFtFMcn1pwaRDXc1ODarBO/3135XIToy1soMjiBZjkDqKq3xjRwOng0VBeNDvZU4pdkckiiawsHZyOeQamWVHMqm+Wz4JCyTYFYZ0GtnBZZQ+2zQRmbz1MkYQqCunDFhr8O9JWeRJs+xIZpHq'+
			'As7dWfXelzlHFRNCt0hP1XUFJ4W0r9TZm9V7m2fQDxnGZD6bdCp/Gj+JQD+4yKS0Z8gNt9ll2zKlbjEVNtYqY6hM/+azIxkEKxNI0yVdeC/oV06U45juqDTAXwthLt/p5WnNsvvTiaagqXgQyJfuuMbNEFKkT4l6oGEZJB3bUwKuJ9h3y7/nOlspO5IFt2d8KbUfYjJ44RWCFXOSBxDNNpdoE0hFbjJOI9ZhzZTyT4cre3nqZPmRjLDOvtauFkyKEQ6NtfLucdQgUXx+Z+e6LJ1MBvw+s8p50+whM2RHMuVLacRdawX/wa26uAw6iGBabzo+rbFPoxo0O/1jFDNDfoG/CS9R8aJLBgh1W8bomIz+FGFQPZ3+5t2hartL9zos++xClIWusvrjZkV2v1VqMbotSEgEVj/bcCvWJbZ2jU+uavmaWjKTaeCfnSWT2aVhtb'+
			'+ibhvjJjhFFHOWy1nB5Jiu4aWudsOQaQEGkKElA0WttS9zljfPZZd+oi5SEUutlNxD9D61ZqvJG6OD/nDW1srcmSA7S0ZTNu2sjl0tx2r1tlBR1umnh9pta63rGla6M8yqDeuvQ1Fm+DdPjpYsVfUNoZRHVlp0N49Ke0JW2rZ07nMa6K9XlPXSx1TC2MwQMoZpasWGheYmuFgXk0l6paU8bk+X5Uqv0GXZnNrvMtWqqtb9220GZOcuI8Xf2NtvksBMVmG03aYbBpdDUeF11eszpJZMSB4R0fxznwjPFsgM2ZFMLqRiXZ9GU1AUNtdsJQN0xU3d0ZbUwkaNDqwp4O/Aak9J2azI8rfSrm7MGHQjrPoplIB0oW331jH8ZIbHWaZjm0QX0YYlBbkOkGdnyQzGPjReGqPG7LgJuzKLbNePdVSHhersIdccLcK2kov0uObk'+
			'ZaaWLDuSgV0+qqV5BePlCePXf43QIbYmY5ujJIp1C7GCvblasuz+dFTrNjtWxbRL7VU4qsPBdWwa5SbXpUTkqb9GyI5kpnFvnkStO+7WxIgdXGq/IhKadjXOsKrZLsc7GvmzLDt36daMDQusNLX+qgBRWREeFmHhJQq/wa6TCKOHjlZLCNxVnBY2yspNZyttMsTLOkVvLNbmFaMdafWrPGtLZO246mputK6nMdmmQLzOV5fz8rYlHNM6ySrX6DjrevYPQ646WXbuEgV1VdGamkSYVQ4mLJbXZJhtXrW3DeNeSqquWG1od5VqyKXQmVbG5vmnQ3NjxR3uXFg4jbYSHS093zCrlcoZa5E3upDrqj7ZkSyuEwNXSWHHH922YceGLDOyQGb1eCrNPi+HLsW0nmxzYH5+3maOrYjbePO2rrVZlWoF9fE5OxQ20ywyrJwFVL'+
			'7d0GzUTIsWNw22b18aGUAbYrdkWnvjT4rwnxwCEjvaZ0jkimGuVsonKWFzQnbucufOnRRFSbEOzSm1RY5cw2rDhrnFNOobdvxQTGOyzYGtWxeagWbVbRicIRpmNUz0YtsmTRwBR2WRI0XXIe9zXWI9O5IZYxCLVCPpYCWMZmuhor1unQylugnYlZN2WaouwbbVxyHvc553eWnSnRg/pDnqpsPIp3+YmCTDpN1hg+OXbY/ytGTLBXB+0r0YP1RHtB3GhqShWs0tDvu8Vnc4CldJ0eL5HpZk75l0T8aKljmx1sy5RaBZmFjOYBIP22qKFDsDeDX6CUgyXlMd29y1o/bNKkKZDiudL4BTk+7F+NF2WnJlxXRbRLAG7UGpePvlqPyjZAzfn/xwugB+PelejBuqWe/Lh2YyNovqeUa7PSN+pDVL47FhVRnp9tEUypJgAId7'+
			'wHOT7sU4obVhMLDr4SsnmKpEYlBhtnYaZ43SxtYTs8XncIGg8f0RvtO7y0wV/xcK4JlJ92KcOHXqJO97343MzM7Sb8jmzIhbz1+J+Gc1C9PlBlMydhEyPZ5GGpEruxtpWG1wtrZfcnPhqR7wxKR7MU7ccMMNHDhwgIWFBV588SUOHfolKEVZlrjV77yFY4jlSiQMkjbDXKfcb5I2caIbru0In+tMJeBnPeBV4CXg/RPuzFgwNzfH3Z++m9t+4zYef/wn7N27l6efforXXz9G2SspjUEpe1NdZmewgqGdyZ0MMsmBbaVQzUiCX16gdYwKKysa4qq0piTcPh1Yo7VmMBgwGPQ5c+Y0/ZWVjf56rjReBI66AfKHgC9OsDNjx/XXX8+9997DM888w86dO/jloUO8fPgw586dY35hnsXFRcqy9M/HHFQVg36fQVWh65paa6'+
			'qqsutTNEsbrPT73hoO+gMurVzi0vIy/cHAu9+LFy5w6dIlLly8SFVVrKysUA0q6rqiPxhgjKG/0ufChQssLm6jqmtmZ2a488672LZtccLf2tjxIIBaXl4GuBv44US7s8F47LHHePJnP+fo0Vd59tlnmZmZYXFxGwBVNeD8+bcZDPrMzW0BpairirquvZ62MD/P3JYtnD51isFgwPz8PDOzsywubmPHNTt4/fXXOXbsGLuu3cWuXdeyZ89uyrLHyy8fZnHbIr1ej2uu2cGjjz7CR2+/nWuWlrjp5pspUMzNb2Hnjh3cedddLC0tTfibGivuBh51JCuBI8CeiXZpg3H8+Al+8vjjPProjzhz5jRvHD/Oa0dfY3H7Ird84BYOHPgwoFjcvo2LF5fpr/TZvrSdpaXtbJnbwsLWrZx86y22bdvGh279EKdOnqLX61EUBVVd'+
			'URQlM70eVUPOXq9kaWmJXm+GE8eP85MnnuAXT/+CgwcP8IlPfILb77h90l/JRuI1YD+gnbusgW8BX5lYl64A3vve69ixYwd33HE7ZVnS7w+4//77OXHiBNe/93p27dzFfX9634Zce9++vezbv4/Pfe5e5ubm2Llz54Zc512Ef8Yuj+TdJcD1wGFgfkKduqI4d+4cj/zwEY4fP87p06fZu28fd911JzfddNOku5YDloGbgTcgJhnAN4EvTaBTU+SFB4Avuw8pyfYDzwNzV7hTU+SDFeAW4BW3IVUAXwG+diV7NEV2+BqCYNC2ZGBjsl8B0+BkivXiZeA2kkLYrrGMZWxclm1ZwBQbAgP8OR2V1sMGzL4P/ONG9miK7PAAduSohS536TAL/Bj42AZ1aop88DPgk0C/a+eoof8+cA9wdAM6NUU+OAp8jiEEg9WnxB0Ffh'+
			'94c4ydmiIfvInlx0hDtJYipkPAZ4DjY+jUFPngOJYXh1ZruNZKuf/F+txfX36fpsgIh4GPY3mxKtZTjvk8cCfw08vo1BT54KdYgr241gPWW/N7DGvRvsFUR7vaYLD3/ZNYHqwZoySM1fBZ4B+w451T5I0j2Mrp713Owe9k9sJ/AbcCf8eI9HWKTY0+9v7exmUSDN6ZJZO4CfhL4D6mFRw5YAVbxPo17HjkO8K4SOawB/gz4I+ZutHNiFeAfwX+CXh9XCcdN8kcCuATwB9hJxN8cCMuMsVY8BzwCPBvwP/QlEyPExtFshS7gU8BHwE+BNwIbAd2AFux46RTbAz6wAXgNHAWq3U+h1054L8Zo8Uahv8HTU5tIkvm03wAAAAASUVORK5CYII=';
		els.setAttribute('src',hs);
		els.ggNormalSrc=hs;
		hs ='';
		hs += 'position: absolute;top: 0px;left: 0px;width: 100%;height: 100%;-webkit-user-drag:none;pointer-events:none;;';
		els.setAttribute('style', hs);
		els.className='ggskin ggskin_image';
		els['ondragstart']=function() { return false; };
		player.checkLoaded.push(els);
		el.appendChild(els);
		el.ggSubElement = els;
		el.ggId="Image 911";
		el.ggDx=0;
		el.ggDy=0;
		el.ggParameter={ rx:0,ry:0,a:0,sx:1,sy:1,def:'' };
		el.ggVisible=true;
		el.className="ggskin ggskin_image ";
		el.ggType='image';
		hs ='';
		hs+='height : 100%;';
		hs+='left : calc(50% - ((100% + 0px) / 2) + 0px);';
		hs+='position : absolute;';
		hs+='top : calc(50% - ((100% + 0px) / 2) + 0px);';
		hs+='visibility : inherit;';
		hs+='width : 100%;';
		hs+='pointer-events:auto;';
		el.setAttribute('style',hs);
		el.style.transformOrigin='50% 50%';
		me._image_911.ggIsActive=function() {
			if ((this.parentNode) && (this.parentNode.ggIsActive)) {
				return this.parentNode.ggIsActive();
			}
			return false;
		}
		el.ggElementNodeId=function() {
			if ((this.parentNode) && (this.parentNode.ggElementNodeId)) {
				return this.parentNode.ggElementNodeId();
			}
			return player.getCurrentNode();
		}
		me._image_911.ggUpdatePosition=function (useTransition) {
		}
		me.__3.appendChild(me._image_911);
		me.__1.appendChild(me.__3);
		el=me.__4=document.createElement('div');
		el.ggId="\uc81c\ud488\uc2a4\ubab0\uc0f7\ubc30\uacbd4";
		el.ggParameter={ rx:0,ry:0,a:0,sx:1,sy:1,def:'' };
		el.ggVisible=true;
		el.className="ggskin ggskin_rectangle ";
		el.ggType='rectangle';
		hs ='';
		hs+='background : #ffffff;';
		hs+='border : 1px solid #ffffff;';
		hs+='border-radius : 10px;';
		hs+='cursor : default;';
		hs+='height : 70px;';
		hs+='left : 75%;';
		hs+='position : absolute;';
		hs+='top : 0px;';
		hs+='visibility : inherit;';
		hs+='width : 70px;';
		hs+='pointer-events:auto;';
		el.setAttribute('style',hs);
		el.style.transformOrigin='50% 50%';
		me.__4.ggIsActive=function() {
			if ((this.parentNode) && (this.parentNode.ggIsActive)) {
				return this.parentNode.ggIsActive();
			}
			return false;
		}
		el.ggElementNodeId=function() {
			if ((this.parentNode) && (this.parentNode.ggElementNodeId)) {
				return this.parentNode.ggElementNodeId();
			}
			return player.getCurrentNode();
		}
		me.__4.logicBlock_bordercolor = function() {
			var newLogicStateBorderColor;
			if (
				((player.getVariableValue('vis_button_4') == true))
			)
			{
				newLogicStateBorderColor = 0;
			}
			else {
				newLogicStateBorderColor = -1;
			}
			if (me.__4.ggCurrentLogicStateBorderColor != newLogicStateBorderColor) {
				me.__4.ggCurrentLogicStateBorderColor = newLogicStateBorderColor;
				me.__4.style.transition='border-color 0s';
				if (me.__4.ggCurrentLogicStateBorderColor == 0) {
					me.__4.style.borderColor="rgba(0,0,0,1)";
				}
				else {
					me.__4.style.borderColor="rgba(255,255,255,1)";
				}
			}
		}
		me.__4.logicBlock_bordercolor();
		me.__4.onclick=function (e) {
			player.setVariableValue('vis_button_1', false);
			player.setVariableValue('vis_button_2', false);
			player.setVariableValue('vis_button_3', false);
			player.setVariableValue('vis_button_4', true);
		}
		me.__4.ggUpdatePosition=function (useTransition) {
		}
		el=me._image_1011=document.createElement('div');
		els=me._image_1011__img=document.createElement('img');
		els.className='ggskin ggskin_image_1011';
		hs='data:image/png;base64,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';
		els.setAttribute('src',hs);
		els.ggNormalSrc=hs;
		hs ='';
		hs += 'position: absolute;top: 0px;left: 0px;width: 100%;height: 100%;-webkit-user-drag:none;pointer-events:none;;';
		els.setAttribute('style', hs);
		els.className='ggskin ggskin_image';
		els['ondragstart']=function() { return false; };
		player.checkLoaded.push(els);
		el.appendChild(els);
		el.ggSubElement = els;
		el.ggId="Image 1011";
		el.ggDx=0;
		el.ggDy=0;
		el.ggParameter={ rx:0,ry:0,a:0,sx:1,sy:1,def:'' };
		el.ggVisible=true;
		el.className="ggskin ggskin_image ";
		el.ggType='image';
		hs ='';
		hs+='height : 100%;';
		hs+='left : calc(50% - ((100% + 0px) / 2) + 0px);';
		hs+='position : absolute;';
		hs+='top : calc(50% - ((100% + 0px) / 2) + 0px);';
		hs+='visibility : inherit;';
		hs+='width : 100%;';
		hs+='pointer-events:auto;';
		el.setAttribute('style',hs);
		el.style.transformOrigin='50% 50%';
		me._image_1011.ggIsActive=function() {
			if ((this.parentNode) && (this.parentNode.ggIsActive)) {
				return this.parentNode.ggIsActive();
			}
			return false;
		}
		el.ggElementNodeId=function() {
			if ((this.parentNode) && (this.parentNode.ggElementNodeId)) {
				return this.parentNode.ggElementNodeId();
			}
			return player.getCurrentNode();
		}
		me._image_1011.ggUpdatePosition=function (useTransition) {
		}
		me.__4.appendChild(me._image_1011);
		me.__1.appendChild(me.__4);
		me.__0.appendChild(me.__1);
		me._container_3.appendChild(me.__0);
		me._infopopupminnerbg.appendChild(me._container_3);
		el=me._image_141=document.createElement('div');
		els=me._image_141__img=document.createElement('img');
		els.className='ggskin ggskin_image_141';
		hs='data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAAGQAAABkCAYAAABw4pVUAAAAAXNSR0IArs4c6QAAA01JREFUeF7t3W1uwjAMBuD2ZMDJgJMBJ2PypKD92Do78cfrxJGmTQIa10+dhKpT9vf7/d6qwWRgLxAYi+9ACgTLo0DAPAqkQNAyABZPzSEFApYBsHCqQgoELANg4Ygr5Pl8bvf7faPf1K7X63Y+n79/Vm4tL5QD+pvycTqdttvtJkqLCIQOThi/NYKRdi6KFPjNmnlhgxx12nK1IgonL4/Hgz2CsEEul8tnmDq6WFdC4WBQrmj4IhROY4Ps+8453mdemX344mK0pHFvqrNBuBWywvAlxaCchIO0FdhsldKDIRnG2RVCSzmqEmmTBCM9tvf7ezAoRpNJnQ7cG9AMKF7nzq6QdjV6BeZ99R/153nOYpDVKsUTg3LbBbIKijfGEM'+
			'jsKBEYwyCzokRhqIDMhhKJoQYyC0o0hipIdhQEDHWQrCgoGCYg2VCQMMxAsqCgYZiCoKMgYpiDoKKgYriAoKEgY7iBoKCgY7iCRKNkwHAHiULJghEC4o2SCSMMxAslG0YoiDVKRoxwECuUrBgQINoomTFgQLRQsmNAgYyi0Of/+lcJeu2vhvbMWPdTJ0cnOfJa71Xe0ycaBlyFtKR6oCBiwIKMDF+cSkHFgAaxQkHGgAfRRkHHSAGihZIBIw3IKEoWjALhrACc3wP3PeS389dYBmepEngQDYyGnAEFGkQTIwsKLIgFRgYUSBBLDHQUOBAPDGQUKJBeDJqs6/a78vp8BIM+O/LlEWn1BVEhGhijt+5RUMJBNDFmQAkFscDIjhIGYomRGSUExAMjK4o7iCdGRhRXkAiMbChuIJEYmVBcQBAwsqCYgyBhZEAxBUHEQEcx'+
			'A0HGQEYxAcmAgYqiDpIJAxFFFSQjBhqKGkhmDCQUFZAZMFBQhkFmwkBAGQKZESMapRtkZoxIlC6QFTCiUMQgK2FEoIhAVsTwRmGD1IYu/funmGzo0lMdKM86aT7T15OH8F3aKAEzYvQOX+EgM2P0ooTt0rYChhTFpEI4k/pKGBIUSV7Yq6z/ni6XdKo5ySIc62iil+ZFBNJQXq/XZ19cKse2hTdCcqJioBHk5xbevXkRg0Sd8Cr9FgiYdIEUCFgGwMKpCikQsAyAhVMVUiBgGQALpyqkQMAyABbOFwOw+BFBH87/AAAAAElFTkSuQmCC';
		els.setAttribute('src',hs);
		els.ggNormalSrc=hs;
		hs ='';
		hs += 'position: absolute;top: 0px;left: 0px;width: 100%;height: 100%;-webkit-user-drag:none;pointer-events:none;;';
		els.setAttribute('style', hs);
		els.className='ggskin ggskin_image';
		els['ondragstart']=function() { return false; };
		player.checkLoaded.push(els);
		el.appendChild(els);
		el.ggSubElement = els;
		el.ggId="Image 141";
		el.ggParameter={ rx:0,ry:0,a:0,sx:1,sy:1,def:'' };
		el.ggVisible=true;
		el.className="ggskin ggskin_image ";
		el.ggType='image';
		hs ='';
		hs+='cursor : pointer;';
		hs+='height : 15px;';
		hs+='position : absolute;';
		hs+='right : 25px;';
		hs+='top : 29px;';
		hs+='visibility : inherit;';
		hs+='width : 15px;';
		hs+='pointer-events:auto;';
		el.setAttribute('style',hs);
		el.style.transformOrigin='50% 50%';
		me._image_141.ggIsActive=function() {
			if ((this.parentNode) && (this.parentNode.ggIsActive)) {
				return this.parentNode.ggIsActive();
			}
			return false;
		}
		el.ggElementNodeId=function() {
			if ((this.parentNode) && (this.parentNode.ggElementNodeId)) {
				return this.parentNode.ggElementNodeId();
			}
			return player.getCurrentNode();
		}
		me._image_141.onclick=function (e) {
			me._infopopupm.style.transition='none';
			me._infopopupm.style.visibility='hidden';
			me._infopopupm.ggVisible=false;
		}
		me._image_141.ggUpdatePosition=function (useTransition) {
		}
		me._infopopupminnerbg.appendChild(me._image_141);
		me._infopopupsm.appendChild(me._infopopupminnerbg);
		me._infopopupmbg.appendChild(me._infopopupsm);
		me._infopopupm.appendChild(me._infopopupmbg);
		me.divSkin.appendChild(me._infopopupm);
		el=me._start=document.createElement('div');
		el.ggId="start";
		el.ggParameter={ rx:0,ry:0,a:0,sx:1,sy:1,def:'' };
		el.ggVisible=true;
		el.className="ggskin ggskin_container ";
		el.ggType='container';
		hs ='';
		hs+='height : 20px;';
		hs+='left : 326px;';
		hs+='position : absolute;';
		hs+='top : 81px;';
		hs+='visibility : inherit;';
		hs+='width : 100px;';
		hs+='pointer-events:none;';
		el.setAttribute('style',hs);
		el.style.transformOrigin='50% 50%';
		me._start.ggIsActive=function() {
			return false;
		}
		el.ggElementNodeId=function() {
			return player.getCurrentNode();
		}
		me._start.ggUpdatePosition=function (useTransition) {
		}
		me.divSkin.appendChild(me._start);
		el=me._markertemplate=document.createElement('div');
		el.ggMarkerNodeId='';
		el.ggMarkerInstances = [];
		nodeMarker.push(el);
		el.ggId="markertemplate";
		el.ggParameter={ rx:0,ry:0,a:0,sx:1,sy:1,def:'' };
		el.ggVisible=false;
		el.className="ggskin ggskin_mark ";
		el.ggType='mark';
		hs ='';
		hs+='height : 0px;';
		hs+='left : 49px;';
		hs+='position : absolute;';
		hs+='top : 12px;';
		hs+='visibility : hidden;';
		hs+='width : 0px;';
		hs+='pointer-events:auto;';
		el.setAttribute('style',hs);
		el.style.transformOrigin='50% 50%';
		me._markertemplate.ggIsActive=function() {
			return this.ggIsMarkerActive==true;
		}
		el.ggElementNodeId=function() {
			var hs=String(this.ggMarkerNodeId);
			if (hs.charAt(0)=='{') { // }
				return hs.substr(1, hs.length - 2);
			}
			return '';
		}
		me._markertemplate.ggUpdatePosition=function (useTransition) {
			me._markertemplate__normalInst.ggEvent_sizechanged();
			me._markertemplate__activeInst.ggEvent_sizechanged();
		}
		me.divSkin.appendChild(me._markertemplate);
		me.__82.logicBlock_position();
		me._scrollarea_1.logicBlock_position();
		me._scrollarea_1.logicBlock_size();
		me.__83.logicBlock_visible();
		me.__86.logicBlock_size();
		me.__86.logicBlock_visible();
		me.__84.logicBlock_size();
		me.__84.logicBlock_visible();
		me.__43.logicBlock_position();
		me.__43.logicBlock_scaling();
		me._rectangle_2.logicBlock_size();
		me.__79.logicBlock_visible();
		me.__210.logicBlock_visible();
		me.__80.logicBlock_visible();
		me._timer_1.logicBlock_visible();
		me.__75.logicBlock_visible();
		me.__74.logicBlock_visible();
		me.__70.logicBlock_visible();
		me.__69.logicBlock_visible();
		me._onoff.logicBlock_visible();
		me._on.logicBlock_visible();
		me._off.logicBlock_visible();
		me.__68.logicBlock_text();
		me.__67.logicBlock_visible();
		me.__63.logicBlock_visible();
		me.__62.logicBlock_visible();
		me.__58.logicBlock_visible();
		me.__57.logicBlock_visible();
		me.__53.logicBlock_visible();
		me.__55.logicBlock_text();
		me.__52.logicBlock_visible();
		me.__48.logicBlock_visible();
		me.__51.logicBlock_visible();
		me.__47.logicBlock_visible();
		me._up.logicBlock_visible();
		me.__45.logicBlock_position();
		me.__45.logicBlock_visible();
		me.__45.logicBlock_alpha();
		me._rectangle_3.logicBlock_visible();
		me._dowm.logicBlock_visible();
		me.__36.logicBlock_visible();
		me.__29.logicBlock_position();
		me.__29.logicBlock_scaling();
		me.__33.logicBlock_position();
		me.__34.logicBlock_position();
		me.__34.logicBlock_size();
		me.__74a.logicBlock_position();
		me.__74a.logicBlock_backgroundcolor();
		me.__74b.logicBlock_backgroundcolor();
		me.__84a.logicBlock_position();
		me.__84a.logicBlock_backgroundcolor();
		me._container_2.logicBlock_position();
		me.__26.logicBlock_position();
		me.__26.logicBlock_size();
		me.__26.logicBlock_scaling();
		me.__26.logicBlock_visible();
		me._rectangle_40.logicBlock_size();
		me.__28.logicBlock_scaling();
		me._map_10.ggMarkerInstances=[];
		me._map_10.ggLastNodeId=null;
		me._map_10.ggSimpleFloorplanMarkerArray=[];
		me._map_10.ggFloorplanWidth=0;
		me._map_10.ggFloorplanHeight=0;
		me._map_10__mapdiv=document.createElement('div');
		me._map_10__mapdiv.className='ggskin ggskin_map';
		me._map_10.appendChild(me._map_10__mapdiv);
		me._map_10__img=document.createElement('img');
		me._map_10__img.className='ggskin ggskin_map';
		me._map_10__mapdiv.appendChild(me._map_10__img);
		me._map_10.ggRadar={ lastFov : -1, lastPan : -1, xPos : -1, yPos : -1, radarElement : null }
		me._map_10.ggRadar.update=function() {
			var radar=me._map_10.ggRadar;
			var d2r = Math.PI/180 ;
			var fov = player.getFov();
			var pan = player.getPanNorth();
			pan -= me._map_10.ggFloorplanNorth;
			var filterpassed = true;
			var currentId = player.getCurrentNode();
			if (me._map_10.ggFilteredIds.length > 0 && me._map_10.ggFilteredIds.indexOf(currentId) == -1) filterpassed = false;
			if ((me._map_10.ggSimpleFloorplanMarkerArray.hasOwnProperty(currentId)) && filterpassed) {
				var activeMarker = me._map_10.ggSimpleFloorplanMarkerArray[currentId];
				if ((radar.radarElement) && (fov==radar.lastFov) && (pan==radar.lastPan) && (activeMarker.radarXPos==radar.xPos) && (activeMarker.radarYPos==radar.yPos)) return; 
				radar.lastPan=pan; radar.lastFov=fov;
				radar.xPos=activeMarker.radarXPos; radar.yPos=activeMarker.radarYPos;
				if (radar.radarElement) me._map_10__mapdiv.removeChild(radar.radarElement);
				radar.radarElement = document.createElementNS('http://www.w3.org/2000/svg','svg');
				radar.radarElement.setAttributeNS(null,'width',60);
				radar.radarElement.setAttributeNS(null,'height',60);
				radar.radarElement.setAttributeNS(null,'viewBox','0 0 60 60');
				var radarPath = document.createElementNS('http://www.w3.org/2000/svg','path');
				radarPath.setAttributeNS(null,'id','radarPath');
				pan = -90 - pan;
				var arcX1 = 30 * Math.cos((pan - fov / 2) * d2r);
				var arcY1 = 30 * Math.sin((pan - fov / 2) * d2r);
				var arcX2 = 30 * Math.cos((pan + fov / 2) * d2r);
				var arcY2 = 30 * Math.sin((pan + fov / 2) * d2r);
				arcX1 += 30;
				arcY1 += 30;
				arcX2 += 30;
				arcY2 += 30;
				var radarPathString = 'M30,30 L' + arcX1 + ',' + arcY1 + ' A 30 30 0 0 1 ' + arcX2 + ' ' + arcY2 +' Z';
				radarPath.setAttributeNS(null,'d', radarPathString);
				radarPath.setAttributeNS(null,'fill', '#fe9900');
				radarPath.setAttributeNS(null,'fill-opacity', 0.35);
				radarPath.setAttributeNS(null,'stroke', '#fe9900');
				radarPath.setAttributeNS(null,'stroke-opacity', 0.8);
				radarPath.setAttributeNS(null,'stroke-width', 1);
				radarPath.setAttributeNS(null,'stroke-linejoin', 'miter');
				radar.radarElement.appendChild(radarPath);
				me._map_10__mapdiv.appendChild(radar.radarElement);
				var radarXPos = activeMarker.radarXPos - 30;
				var radarYPos = activeMarker.radarYPos - 30;
				radar.radarElement.style['position'] = 'absolute';
				radar.radarElement.style['left'] = '' + radarXPos + 'px';
				radar.radarElement.style['top'] = '' + radarYPos + 'px';
				radar.radarElement.style['z-index'] = me._map_10.style['z-index'] + 1;
			} else {
				if (radar.radarElement) {
					me._map_10__mapdiv.removeChild(radar.radarElement);
					radar.radarElement = null;
				}
			}
		}
		me._map_10.ggShowSimpleFloorplan=function(mapDetails) {
			var mapWidth = me._map_10.clientWidth;
			var mapHeight = me._map_10.clientHeight;
			var tmpWidth = mapDetails['width'];
			var tmpHeight = mapDetails['height'];
			var levelLimit = 1000;
			var levels = 1;
			while (levelLimit < mapDetails['width'] || levelLimit < mapDetails['height']) {
				tmpWidth /= 2;
				tmpHeight /= 2;
				levelLimit *= 2;
				levels++;
			}
			var level = 1;
			while (levels > level && ((mapWidth * window.devicePixelRatio) >= 2*tmpWidth || (mapHeight * window.devicePixelRatio) >= 2*tmpHeight)) {
				tmpWidth *= 2;
				tmpHeight *= 2;
				levelLimit *= 2;
				level++;
			}
			var imageFilename = basePath + 'images/maptiles/' + me._map_10.ggMapId + '_' + level + '.' + mapDetails['tileformat'];
			me._map_10__img.setAttribute('src', imageFilename);
		me._map_10__mapdiv.setAttribute('style','position: absolute; left: 50%; margin-left: -' + me._map_10.ggFloorplanWidth / 2 + 'px; top: 50%; margin-top: -' + me._map_10.ggFloorplanHeight / 2 + 'px;width:' + me._map_10.ggFloorplanWidth + 'px;height:' + me._map_10.ggFloorplanHeight + 'px;overflow:hidden;;');
		var image_rendering_prop = (player.getBrowser() == 2 || player.getBrowser() == 3) ? 'crisp-edges' : 'pixelated';
		me._map_10__img.setAttribute('style','width:' + me._map_10.ggFloorplanWidth + 'px;height:' + me._map_10.ggFloorplanHeight + 'px;-webkit-user-drag:none;pointer-events:none;image-rendering:' + (mapDetails['crispedges'] ? image_rendering_prop : 'auto') + ';');
		}
		me._map_10.ggCalculateFloorplanSize=function(mapDetails) {
			var floorplanWidth = mapDetails['width'];
			var floorplanHeight = mapDetails['height'];
			var frameAR = me._map_10.clientWidth / me._map_10.clientHeight;
			var floorplanAR = floorplanWidth / floorplanHeight;
			if (frameAR > floorplanAR) {
				me._map_10.ggFloorplanHeight = me._map_10.clientHeight;
				me._map_10.ggFloorplanWidth = me._map_10.ggFloorplanHeight * floorplanAR;
			} else {
				me._map_10.ggFloorplanWidth = me._map_10.clientWidth;
				me._map_10.ggFloorplanHeight = me._map_10.ggFloorplanWidth / floorplanAR;
			}
		}
		me._map_10.ggInitMap=function() {
			var mapDetails = player.getMapDetails(me._map_10.ggMapId);
			if (Object.keys(mapDetails).length === 0) return;
			me._map_10.style.backgroundColor = mapDetails['bgcolor'];
			if (mapDetails.hasOwnProperty('transparent') && mapDetails['transparent']) {
				me._map_10.ggPermeableMap = true;
			} else {
				me._map_10.ggPermeableMap = false;
			}
			me._map_10.ggCalculateFloorplanSize(mapDetails);
			me._map_10.ggShowSimpleFloorplan(mapDetails);
			me._map_10.ggFloorplanNorth = mapDetails['floorplannorth'];
			me._map_10.ggMapNotLoaded = false;
		}
		me._map_10.ggClearMap=function() {
			me._map_10.ggClearMapMarkers();
			me._map_10.ggMapNotLoaded = true;
		}
		me._map_10.ggChangeMap=function(mapId) {
			var newMapType = player.getMapType(mapId)
			if (newMapType == 'web') {
				return;
			}
			me._map_10.ggMapId = mapId;
			if (!me._map_10.ggMapNotLoaded) {
				me._map_10.ggClearMap();
				me._map_10.ggInitMap();
				me._map_10.ggInitMapMarkers();
			}
		}
		me._map_10.ggPlaceMarkersOnSimpleFloorplan=function() {
			var markers=me._map_10.ggSimpleFloorplanMarkerArray;
			for (id in markers) {
				if (markers.hasOwnProperty(id)) {
					marker=markers[id];
					var coords = player.getNodeMapCoordsInPercent(id, me._map_10.ggMapId);
					var xPos = (me._map_10.ggFloorplanWidth * coords[0]) / 100.0;
					var yPos = (me._map_10.ggFloorplanHeight * coords[1]) / 100.0;
					marker.radarXPos = xPos;
					marker.radarYPos = yPos;
					xPos -= me._map_10.ggHMarkerAnchorOffset;
					yPos -= me._map_10.ggVMarkerAnchorOffset;
					marker.style['position'] = 'absolute';
					marker.style['left'] = xPos + 'px';
					marker.style['top'] = yPos + 'px';
					marker.style['z-index'] = me._map_10.style['z-index'] + 2;
				}
			}
		}
		me._map_10.ggInitMapMarkers=function() {
			me._map_10.ggClearMapMarkers();
			var ids=player.getNodeIds();
			me._map_10.ggFilteredIds = [];
			if (me._map_10.ggFilter != '') {
				var filter = me._map_10.ggFilter.split(',');
				for (i=0; i < ids.length; i++) {
					var nodeId = ids[i];
					var nodeData = player.getNodeUserdata(nodeId);
					for (var j=0; j < filter.length; j++) {
						if (nodeData['tags'].indexOf(filter[j].trim()) != -1) me._map_10.ggFilteredIds.push(nodeId);
					}
				}
				if (me._map_10.ggFilteredIds.length > 0) ids = me._map_10.ggFilteredIds;
			}
			for(var i=0; i < ids.length; i++) {
				var id = ids[i];
				var coords = player.getNodeMapCoordsInPercent(id, me._map_10.ggMapId);
				if (coords.length>=2) {
					me._map_10.ggHMarkerAnchorOffset = 12;
					me._map_10.ggVMarkerAnchorOffset = 20;
					var markerParent = new Object();
					markerParent.ggElementNodeId=function() { return id };
					var markerClass = new SkinElement_map_pin_Class(me, markerParent);
					me._map_10.ggMarkerInstances.push(markerClass);
					var marker = markerClass._map_pin;
					me._map_10.ggSimpleFloorplanMarkerArray[id] = marker;
					me._map_10__mapdiv.appendChild(marker);
				}
			}
			me._map_10.ggPlaceMarkersOnSimpleFloorplan();
			skin.updateSize(me._map_10);
		}
		me._map_10.ggClearMapMarkers=function() {
			for (id in me._map_10.ggSimpleFloorplanMarkerArray) {
				if (me._map_10.ggSimpleFloorplanMarkerArray.hasOwnProperty(id)) {
					me._map_10__mapdiv.removeChild(me._map_10.ggSimpleFloorplanMarkerArray[id]);
				}
			}
			me._map_10.ggMarkerInstances=[];
			me._map_10.ggSimpleFloorplanMarkerArray=[];
		}
		me._map_10.logicBlock_visible();
		me._map_20.ggMarkerInstances=[];
		me._map_20.ggLastNodeId=null;
		me._map_20.ggSimpleFloorplanMarkerArray=[];
		me._map_20.ggFloorplanWidth=0;
		me._map_20.ggFloorplanHeight=0;
		me._map_20__mapdiv=document.createElement('div');
		me._map_20__mapdiv.className='ggskin ggskin_map';
		me._map_20.appendChild(me._map_20__mapdiv);
		me._map_20__img=document.createElement('img');
		me._map_20__img.className='ggskin ggskin_map';
		me._map_20__mapdiv.appendChild(me._map_20__img);
		me._map_20.ggRadar={ lastFov : -1, lastPan : -1, xPos : -1, yPos : -1, radarElement : null }
		me._map_20.ggRadar.update=function() {
			var radar=me._map_20.ggRadar;
			var d2r = Math.PI/180 ;
			var fov = player.getFov();
			var pan = player.getPanNorth();
			pan -= me._map_20.ggFloorplanNorth;
			var filterpassed = true;
			var currentId = player.getCurrentNode();
			if (me._map_20.ggFilteredIds.length > 0 && me._map_20.ggFilteredIds.indexOf(currentId) == -1) filterpassed = false;
			if ((me._map_20.ggSimpleFloorplanMarkerArray.hasOwnProperty(currentId)) && filterpassed) {
				var activeMarker = me._map_20.ggSimpleFloorplanMarkerArray[currentId];
				if ((radar.radarElement) && (fov==radar.lastFov) && (pan==radar.lastPan) && (activeMarker.radarXPos==radar.xPos) && (activeMarker.radarYPos==radar.yPos)) return; 
				radar.lastPan=pan; radar.lastFov=fov;
				radar.xPos=activeMarker.radarXPos; radar.yPos=activeMarker.radarYPos;
				if (radar.radarElement) me._map_20__mapdiv.removeChild(radar.radarElement);
				radar.radarElement = document.createElementNS('http://www.w3.org/2000/svg','svg');
				radar.radarElement.setAttributeNS(null,'width',60);
				radar.radarElement.setAttributeNS(null,'height',60);
				radar.radarElement.setAttributeNS(null,'viewBox','0 0 60 60');
				var radarPath = document.createElementNS('http://www.w3.org/2000/svg','path');
				radarPath.setAttributeNS(null,'id','radarPath');
				pan = -90 - pan;
				var arcX1 = 30 * Math.cos((pan - fov / 2) * d2r);
				var arcY1 = 30 * Math.sin((pan - fov / 2) * d2r);
				var arcX2 = 30 * Math.cos((pan + fov / 2) * d2r);
				var arcY2 = 30 * Math.sin((pan + fov / 2) * d2r);
				arcX1 += 30;
				arcY1 += 30;
				arcX2 += 30;
				arcY2 += 30;
				var radarPathString = 'M30,30 L' + arcX1 + ',' + arcY1 + ' A 30 30 0 0 1 ' + arcX2 + ' ' + arcY2 +' Z';
				radarPath.setAttributeNS(null,'d', radarPathString);
				radarPath.setAttributeNS(null,'fill', '#fe9900');
				radarPath.setAttributeNS(null,'fill-opacity', 0.35);
				radarPath.setAttributeNS(null,'stroke', '#fe9900');
				radarPath.setAttributeNS(null,'stroke-opacity', 0.8);
				radarPath.setAttributeNS(null,'stroke-width', 1);
				radarPath.setAttributeNS(null,'stroke-linejoin', 'miter');
				radar.radarElement.appendChild(radarPath);
				me._map_20__mapdiv.appendChild(radar.radarElement);
				var radarXPos = activeMarker.radarXPos - 30;
				var radarYPos = activeMarker.radarYPos - 30;
				radar.radarElement.style['position'] = 'absolute';
				radar.radarElement.style['left'] = '' + radarXPos + 'px';
				radar.radarElement.style['top'] = '' + radarYPos + 'px';
				radar.radarElement.style['z-index'] = me._map_20.style['z-index'] + 1;
			} else {
				if (radar.radarElement) {
					me._map_20__mapdiv.removeChild(radar.radarElement);
					radar.radarElement = null;
				}
			}
		}
		me._map_20.ggShowSimpleFloorplan=function(mapDetails) {
			var mapWidth = me._map_20.clientWidth;
			var mapHeight = me._map_20.clientHeight;
			var tmpWidth = mapDetails['width'];
			var tmpHeight = mapDetails['height'];
			var levelLimit = 1000;
			var levels = 1;
			while (levelLimit < mapDetails['width'] || levelLimit < mapDetails['height']) {
				tmpWidth /= 2;
				tmpHeight /= 2;
				levelLimit *= 2;
				levels++;
			}
			var level = 1;
			while (levels > level && ((mapWidth * window.devicePixelRatio) >= 2*tmpWidth || (mapHeight * window.devicePixelRatio) >= 2*tmpHeight)) {
				tmpWidth *= 2;
				tmpHeight *= 2;
				levelLimit *= 2;
				level++;
			}
			var imageFilename = basePath + 'images/maptiles/' + me._map_20.ggMapId + '_' + level + '.' + mapDetails['tileformat'];
			me._map_20__img.setAttribute('src', imageFilename);
		me._map_20__mapdiv.setAttribute('style','position: absolute; left: 50%; margin-left: -' + me._map_20.ggFloorplanWidth / 2 + 'px; top: 50%; margin-top: -' + me._map_20.ggFloorplanHeight / 2 + 'px;width:' + me._map_20.ggFloorplanWidth + 'px;height:' + me._map_20.ggFloorplanHeight + 'px;overflow:hidden;;');
		var image_rendering_prop = (player.getBrowser() == 2 || player.getBrowser() == 3) ? 'crisp-edges' : 'pixelated';
		me._map_20__img.setAttribute('style','width:' + me._map_20.ggFloorplanWidth + 'px;height:' + me._map_20.ggFloorplanHeight + 'px;-webkit-user-drag:none;pointer-events:none;image-rendering:' + (mapDetails['crispedges'] ? image_rendering_prop : 'auto') + ';');
		}
		me._map_20.ggCalculateFloorplanSize=function(mapDetails) {
			var floorplanWidth = mapDetails['width'];
			var floorplanHeight = mapDetails['height'];
			var frameAR = me._map_20.clientWidth / me._map_20.clientHeight;
			var floorplanAR = floorplanWidth / floorplanHeight;
			if (frameAR > floorplanAR) {
				me._map_20.ggFloorplanHeight = me._map_20.clientHeight;
				me._map_20.ggFloorplanWidth = me._map_20.ggFloorplanHeight * floorplanAR;
			} else {
				me._map_20.ggFloorplanWidth = me._map_20.clientWidth;
				me._map_20.ggFloorplanHeight = me._map_20.ggFloorplanWidth / floorplanAR;
			}
		}
		me._map_20.ggInitMap=function() {
			var mapDetails = player.getMapDetails(me._map_20.ggMapId);
			if (Object.keys(mapDetails).length === 0) return;
			me._map_20.style.backgroundColor = mapDetails['bgcolor'];
			if (mapDetails.hasOwnProperty('transparent') && mapDetails['transparent']) {
				me._map_20.ggPermeableMap = true;
			} else {
				me._map_20.ggPermeableMap = false;
			}
			me._map_20.ggCalculateFloorplanSize(mapDetails);
			me._map_20.ggShowSimpleFloorplan(mapDetails);
			me._map_20.ggFloorplanNorth = mapDetails['floorplannorth'];
			me._map_20.ggMapNotLoaded = false;
		}
		me._map_20.ggClearMap=function() {
			me._map_20.ggClearMapMarkers();
			me._map_20.ggMapNotLoaded = true;
		}
		me._map_20.ggChangeMap=function(mapId) {
			var newMapType = player.getMapType(mapId)
			if (newMapType == 'web') {
				return;
			}
			me._map_20.ggMapId = mapId;
			if (!me._map_20.ggMapNotLoaded) {
				me._map_20.ggClearMap();
				me._map_20.ggInitMap();
				me._map_20.ggInitMapMarkers();
			}
		}
		me._map_20.ggPlaceMarkersOnSimpleFloorplan=function() {
			var markers=me._map_20.ggSimpleFloorplanMarkerArray;
			for (id in markers) {
				if (markers.hasOwnProperty(id)) {
					marker=markers[id];
					var coords = player.getNodeMapCoordsInPercent(id, me._map_20.ggMapId);
					var xPos = (me._map_20.ggFloorplanWidth * coords[0]) / 100.0;
					var yPos = (me._map_20.ggFloorplanHeight * coords[1]) / 100.0;
					marker.radarXPos = xPos;
					marker.radarYPos = yPos;
					xPos -= me._map_20.ggHMarkerAnchorOffset;
					yPos -= me._map_20.ggVMarkerAnchorOffset;
					marker.style['position'] = 'absolute';
					marker.style['left'] = xPos + 'px';
					marker.style['top'] = yPos + 'px';
					marker.style['z-index'] = me._map_20.style['z-index'] + 2;
				}
			}
		}
		me._map_20.ggInitMapMarkers=function() {
			me._map_20.ggClearMapMarkers();
			var ids=player.getNodeIds();
			me._map_20.ggFilteredIds = [];
			if (me._map_20.ggFilter != '') {
				var filter = me._map_20.ggFilter.split(',');
				for (i=0; i < ids.length; i++) {
					var nodeId = ids[i];
					var nodeData = player.getNodeUserdata(nodeId);
					for (var j=0; j < filter.length; j++) {
						if (nodeData['tags'].indexOf(filter[j].trim()) != -1) me._map_20.ggFilteredIds.push(nodeId);
					}
				}
				if (me._map_20.ggFilteredIds.length > 0) ids = me._map_20.ggFilteredIds;
			}
			for(var i=0; i < ids.length; i++) {
				var id = ids[i];
				var coords = player.getNodeMapCoordsInPercent(id, me._map_20.ggMapId);
				if (coords.length>=2) {
					me._map_20.ggHMarkerAnchorOffset = 12;
					me._map_20.ggVMarkerAnchorOffset = 20;
					var markerParent = new Object();
					markerParent.ggElementNodeId=function() { return id };
					var markerClass = new SkinElement_map_pin_Class(me, markerParent);
					me._map_20.ggMarkerInstances.push(markerClass);
					var marker = markerClass._map_pin;
					me._map_20.ggSimpleFloorplanMarkerArray[id] = marker;
					me._map_20__mapdiv.appendChild(marker);
				}
			}
			me._map_20.ggPlaceMarkersOnSimpleFloorplan();
			skin.updateSize(me._map_20);
		}
		me._map_20.ggClearMapMarkers=function() {
			for (id in me._map_20.ggSimpleFloorplanMarkerArray) {
				if (me._map_20.ggSimpleFloorplanMarkerArray.hasOwnProperty(id)) {
					me._map_20__mapdiv.removeChild(me._map_20.ggSimpleFloorplanMarkerArray[id]);
				}
			}
			me._map_20.ggMarkerInstances=[];
			me._map_20.ggSimpleFloorplanMarkerArray=[];
		}
		me._map_20.logicBlock_visible();
		me.__23.logicBlock_position();
		me.__23.logicBlock_scaling();
		me.__23.logicBlock_visible();
		me._rectangle_4.logicBlock_size();
		me.__25.logicBlock_scaling();
		me._map_1.ggMarkerInstances=[];
		me._map_1.ggLastNodeId=null;
		me._map_1.ggSimpleFloorplanMarkerArray=[];
		me._map_1.ggFloorplanWidth=0;
		me._map_1.ggFloorplanHeight=0;
		me._map_1__mapdiv=document.createElement('div');
		me._map_1__mapdiv.className='ggskin ggskin_map';
		me._map_1.appendChild(me._map_1__mapdiv);
		me._map_1__img=document.createElement('img');
		me._map_1__img.className='ggskin ggskin_map';
		me._map_1__mapdiv.appendChild(me._map_1__img);
		me._map_1.ggRadar={ lastFov : -1, lastPan : -1, xPos : -1, yPos : -1, radarElement : null }
		me._map_1.ggRadar.update=function() {
			var radar=me._map_1.ggRadar;
			var d2r = Math.PI/180 ;
			var fov = player.getFov();
			var pan = player.getPanNorth();
			pan -= me._map_1.ggFloorplanNorth;
			var filterpassed = true;
			var currentId = player.getCurrentNode();
			if (me._map_1.ggFilteredIds.length > 0 && me._map_1.ggFilteredIds.indexOf(currentId) == -1) filterpassed = false;
			if ((me._map_1.ggSimpleFloorplanMarkerArray.hasOwnProperty(currentId)) && filterpassed) {
				var activeMarker = me._map_1.ggSimpleFloorplanMarkerArray[currentId];
				if ((radar.radarElement) && (fov==radar.lastFov) && (pan==radar.lastPan) && (activeMarker.radarXPos==radar.xPos) && (activeMarker.radarYPos==radar.yPos)) return; 
				radar.lastPan=pan; radar.lastFov=fov;
				radar.xPos=activeMarker.radarXPos; radar.yPos=activeMarker.radarYPos;
				if (radar.radarElement) me._map_1__mapdiv.removeChild(radar.radarElement);
				radar.radarElement = document.createElementNS('http://www.w3.org/2000/svg','svg');
				radar.radarElement.setAttributeNS(null,'width',60);
				radar.radarElement.setAttributeNS(null,'height',60);
				radar.radarElement.setAttributeNS(null,'viewBox','0 0 60 60');
				var radarPath = document.createElementNS('http://www.w3.org/2000/svg','path');
				radarPath.setAttributeNS(null,'id','radarPath');
				pan = -90 - pan;
				var arcX1 = 30 * Math.cos((pan - fov / 2) * d2r);
				var arcY1 = 30 * Math.sin((pan - fov / 2) * d2r);
				var arcX2 = 30 * Math.cos((pan + fov / 2) * d2r);
				var arcY2 = 30 * Math.sin((pan + fov / 2) * d2r);
				arcX1 += 30;
				arcY1 += 30;
				arcX2 += 30;
				arcY2 += 30;
				var radarPathString = 'M30,30 L' + arcX1 + ',' + arcY1 + ' A 30 30 0 0 1 ' + arcX2 + ' ' + arcY2 +' Z';
				radarPath.setAttributeNS(null,'d', radarPathString);
				radarPath.setAttributeNS(null,'fill', '#fe9900');
				radarPath.setAttributeNS(null,'fill-opacity', 0.35);
				radarPath.setAttributeNS(null,'stroke', '#fe9900');
				radarPath.setAttributeNS(null,'stroke-opacity', 0.8);
				radarPath.setAttributeNS(null,'stroke-width', 1);
				radarPath.setAttributeNS(null,'stroke-linejoin', 'miter');
				radar.radarElement.appendChild(radarPath);
				me._map_1__mapdiv.appendChild(radar.radarElement);
				var radarXPos = activeMarker.radarXPos - 30;
				var radarYPos = activeMarker.radarYPos - 30;
				radar.radarElement.style['position'] = 'absolute';
				radar.radarElement.style['left'] = '' + radarXPos + 'px';
				radar.radarElement.style['top'] = '' + radarYPos + 'px';
				radar.radarElement.style['z-index'] = me._map_1.style['z-index'] + 1;
			} else {
				if (radar.radarElement) {
					me._map_1__mapdiv.removeChild(radar.radarElement);
					radar.radarElement = null;
				}
			}
		}
		me._map_1.ggShowSimpleFloorplan=function(mapDetails) {
			var mapWidth = me._map_1.clientWidth;
			var mapHeight = me._map_1.clientHeight;
			var tmpWidth = mapDetails['width'];
			var tmpHeight = mapDetails['height'];
			var levelLimit = 1000;
			var levels = 1;
			while (levelLimit < mapDetails['width'] || levelLimit < mapDetails['height']) {
				tmpWidth /= 2;
				tmpHeight /= 2;
				levelLimit *= 2;
				levels++;
			}
			var level = 1;
			while (levels > level && ((mapWidth * window.devicePixelRatio) >= 2*tmpWidth || (mapHeight * window.devicePixelRatio) >= 2*tmpHeight)) {
				tmpWidth *= 2;
				tmpHeight *= 2;
				levelLimit *= 2;
				level++;
			}
			var imageFilename = basePath + 'images/maptiles/' + me._map_1.ggMapId + '_' + level + '.' + mapDetails['tileformat'];
			me._map_1__img.setAttribute('src', imageFilename);
		me._map_1__mapdiv.setAttribute('style','position: absolute; left: 50%; margin-left: -' + me._map_1.ggFloorplanWidth / 2 + 'px; top: 50%; margin-top: -' + me._map_1.ggFloorplanHeight / 2 + 'px;width:' + me._map_1.ggFloorplanWidth + 'px;height:' + me._map_1.ggFloorplanHeight + 'px;overflow:hidden;;');
		var image_rendering_prop = (player.getBrowser() == 2 || player.getBrowser() == 3) ? 'crisp-edges' : 'pixelated';
		me._map_1__img.setAttribute('style','width:' + me._map_1.ggFloorplanWidth + 'px;height:' + me._map_1.ggFloorplanHeight + 'px;-webkit-user-drag:none;pointer-events:none;image-rendering:' + (mapDetails['crispedges'] ? image_rendering_prop : 'auto') + ';');
		}
		me._map_1.ggCalculateFloorplanSize=function(mapDetails) {
			var floorplanWidth = mapDetails['width'];
			var floorplanHeight = mapDetails['height'];
			var frameAR = me._map_1.clientWidth / me._map_1.clientHeight;
			var floorplanAR = floorplanWidth / floorplanHeight;
			if (frameAR > floorplanAR) {
				me._map_1.ggFloorplanHeight = me._map_1.clientHeight;
				me._map_1.ggFloorplanWidth = me._map_1.ggFloorplanHeight * floorplanAR;
			} else {
				me._map_1.ggFloorplanWidth = me._map_1.clientWidth;
				me._map_1.ggFloorplanHeight = me._map_1.ggFloorplanWidth / floorplanAR;
			}
		}
		me._map_1.ggInitMap=function() {
			var mapDetails = player.getMapDetails(me._map_1.ggMapId);
			if (Object.keys(mapDetails).length === 0) return;
			me._map_1.style.backgroundColor = mapDetails['bgcolor'];
			if (mapDetails.hasOwnProperty('transparent') && mapDetails['transparent']) {
				me._map_1.ggPermeableMap = true;
			} else {
				me._map_1.ggPermeableMap = false;
			}
			me._map_1.ggCalculateFloorplanSize(mapDetails);
			me._map_1.ggShowSimpleFloorplan(mapDetails);
			me._map_1.ggFloorplanNorth = mapDetails['floorplannorth'];
			me._map_1.ggMapNotLoaded = false;
		}
		me._map_1.ggClearMap=function() {
			me._map_1.ggClearMapMarkers();
			me._map_1.ggMapNotLoaded = true;
		}
		me._map_1.ggChangeMap=function(mapId) {
			var newMapType = player.getMapType(mapId)
			if (newMapType == 'web') {
				return;
			}
			me._map_1.ggMapId = mapId;
			if (!me._map_1.ggMapNotLoaded) {
				me._map_1.ggClearMap();
				me._map_1.ggInitMap();
				me._map_1.ggInitMapMarkers();
			}
		}
		me._map_1.ggPlaceMarkersOnSimpleFloorplan=function() {
			var markers=me._map_1.ggSimpleFloorplanMarkerArray;
			for (id in markers) {
				if (markers.hasOwnProperty(id)) {
					marker=markers[id];
					var coords = player.getNodeMapCoordsInPercent(id, me._map_1.ggMapId);
					var xPos = (me._map_1.ggFloorplanWidth * coords[0]) / 100.0;
					var yPos = (me._map_1.ggFloorplanHeight * coords[1]) / 100.0;
					marker.radarXPos = xPos;
					marker.radarYPos = yPos;
					xPos -= me._map_1.ggHMarkerAnchorOffset;
					yPos -= me._map_1.ggVMarkerAnchorOffset;
					marker.style['position'] = 'absolute';
					marker.style['left'] = xPos + 'px';
					marker.style['top'] = yPos + 'px';
					marker.style['z-index'] = me._map_1.style['z-index'] + 2;
				}
			}
		}
		me._map_1.ggInitMapMarkers=function() {
			me._map_1.ggClearMapMarkers();
			var ids=player.getNodeIds();
			me._map_1.ggFilteredIds = [];
			if (me._map_1.ggFilter != '') {
				var filter = me._map_1.ggFilter.split(',');
				for (i=0; i < ids.length; i++) {
					var nodeId = ids[i];
					var nodeData = player.getNodeUserdata(nodeId);
					for (var j=0; j < filter.length; j++) {
						if (nodeData['tags'].indexOf(filter[j].trim()) != -1) me._map_1.ggFilteredIds.push(nodeId);
					}
				}
				if (me._map_1.ggFilteredIds.length > 0) ids = me._map_1.ggFilteredIds;
			}
			for(var i=0; i < ids.length; i++) {
				var id = ids[i];
				var coords = player.getNodeMapCoordsInPercent(id, me._map_1.ggMapId);
				if (coords.length>=2) {
					me._map_1.ggHMarkerAnchorOffset = 12;
					me._map_1.ggVMarkerAnchorOffset = 20;
					var markerParent = new Object();
					markerParent.ggElementNodeId=function() { return id };
					var markerClass = new SkinElement_map_pin_Class(me, markerParent);
					me._map_1.ggMarkerInstances.push(markerClass);
					var marker = markerClass._map_pin;
					me._map_1.ggSimpleFloorplanMarkerArray[id] = marker;
					me._map_1__mapdiv.appendChild(marker);
				}
			}
			me._map_1.ggPlaceMarkersOnSimpleFloorplan();
			skin.updateSize(me._map_1);
		}
		me._map_1.ggClearMapMarkers=function() {
			for (id in me._map_1.ggSimpleFloorplanMarkerArray) {
				if (me._map_1.ggSimpleFloorplanMarkerArray.hasOwnProperty(id)) {
					me._map_1__mapdiv.removeChild(me._map_1.ggSimpleFloorplanMarkerArray[id]);
				}
			}
			me._map_1.ggMarkerInstances=[];
			me._map_1.ggSimpleFloorplanMarkerArray=[];
		}
		me._map_1.logicBlock_visible();
		me._map_2.ggMarkerInstances=[];
		me._map_2.ggLastNodeId=null;
		me._map_2.ggSimpleFloorplanMarkerArray=[];
		me._map_2.ggFloorplanWidth=0;
		me._map_2.ggFloorplanHeight=0;
		me._map_2__mapdiv=document.createElement('div');
		me._map_2__mapdiv.className='ggskin ggskin_map';
		me._map_2.appendChild(me._map_2__mapdiv);
		me._map_2__img=document.createElement('img');
		me._map_2__img.className='ggskin ggskin_map';
		me._map_2__mapdiv.appendChild(me._map_2__img);
		me._map_2.ggRadar={ lastFov : -1, lastPan : -1, xPos : -1, yPos : -1, radarElement : null }
		me._map_2.ggRadar.update=function() {
			var radar=me._map_2.ggRadar;
			var d2r = Math.PI/180 ;
			var fov = player.getFov();
			var pan = player.getPanNorth();
			pan -= me._map_2.ggFloorplanNorth;
			var filterpassed = true;
			var currentId = player.getCurrentNode();
			if (me._map_2.ggFilteredIds.length > 0 && me._map_2.ggFilteredIds.indexOf(currentId) == -1) filterpassed = false;
			if ((me._map_2.ggSimpleFloorplanMarkerArray.hasOwnProperty(currentId)) && filterpassed) {
				var activeMarker = me._map_2.ggSimpleFloorplanMarkerArray[currentId];
				if ((radar.radarElement) && (fov==radar.lastFov) && (pan==radar.lastPan) && (activeMarker.radarXPos==radar.xPos) && (activeMarker.radarYPos==radar.yPos)) return; 
				radar.lastPan=pan; radar.lastFov=fov;
				radar.xPos=activeMarker.radarXPos; radar.yPos=activeMarker.radarYPos;
				if (radar.radarElement) me._map_2__mapdiv.removeChild(radar.radarElement);
				radar.radarElement = document.createElementNS('http://www.w3.org/2000/svg','svg');
				radar.radarElement.setAttributeNS(null,'width',60);
				radar.radarElement.setAttributeNS(null,'height',60);
				radar.radarElement.setAttributeNS(null,'viewBox','0 0 60 60');
				var radarPath = document.createElementNS('http://www.w3.org/2000/svg','path');
				radarPath.setAttributeNS(null,'id','radarPath');
				pan = -90 - pan;
				var arcX1 = 30 * Math.cos((pan - fov / 2) * d2r);
				var arcY1 = 30 * Math.sin((pan - fov / 2) * d2r);
				var arcX2 = 30 * Math.cos((pan + fov / 2) * d2r);
				var arcY2 = 30 * Math.sin((pan + fov / 2) * d2r);
				arcX1 += 30;
				arcY1 += 30;
				arcX2 += 30;
				arcY2 += 30;
				var radarPathString = 'M30,30 L' + arcX1 + ',' + arcY1 + ' A 30 30 0 0 1 ' + arcX2 + ' ' + arcY2 +' Z';
				radarPath.setAttributeNS(null,'d', radarPathString);
				radarPath.setAttributeNS(null,'fill', '#fe9900');
				radarPath.setAttributeNS(null,'fill-opacity', 0.35);
				radarPath.setAttributeNS(null,'stroke', '#fe9900');
				radarPath.setAttributeNS(null,'stroke-opacity', 0.8);
				radarPath.setAttributeNS(null,'stroke-width', 1);
				radarPath.setAttributeNS(null,'stroke-linejoin', 'miter');
				radar.radarElement.appendChild(radarPath);
				me._map_2__mapdiv.appendChild(radar.radarElement);
				var radarXPos = activeMarker.radarXPos - 30;
				var radarYPos = activeMarker.radarYPos - 30;
				radar.radarElement.style['position'] = 'absolute';
				radar.radarElement.style['left'] = '' + radarXPos + 'px';
				radar.radarElement.style['top'] = '' + radarYPos + 'px';
				radar.radarElement.style['z-index'] = me._map_2.style['z-index'] + 1;
			} else {
				if (radar.radarElement) {
					me._map_2__mapdiv.removeChild(radar.radarElement);
					radar.radarElement = null;
				}
			}
		}
		me._map_2.ggShowSimpleFloorplan=function(mapDetails) {
			var mapWidth = me._map_2.clientWidth;
			var mapHeight = me._map_2.clientHeight;
			var tmpWidth = mapDetails['width'];
			var tmpHeight = mapDetails['height'];
			var levelLimit = 1000;
			var levels = 1;
			while (levelLimit < mapDetails['width'] || levelLimit < mapDetails['height']) {
				tmpWidth /= 2;
				tmpHeight /= 2;
				levelLimit *= 2;
				levels++;
			}
			var level = 1;
			while (levels > level && ((mapWidth * window.devicePixelRatio) >= 2*tmpWidth || (mapHeight * window.devicePixelRatio) >= 2*tmpHeight)) {
				tmpWidth *= 2;
				tmpHeight *= 2;
				levelLimit *= 2;
				level++;
			}
			var imageFilename = basePath + 'images/maptiles/' + me._map_2.ggMapId + '_' + level + '.' + mapDetails['tileformat'];
			me._map_2__img.setAttribute('src', imageFilename);
		me._map_2__mapdiv.setAttribute('style','position: absolute; left: 50%; margin-left: -' + me._map_2.ggFloorplanWidth / 2 + 'px; top: 50%; margin-top: -' + me._map_2.ggFloorplanHeight / 2 + 'px;width:' + me._map_2.ggFloorplanWidth + 'px;height:' + me._map_2.ggFloorplanHeight + 'px;overflow:hidden;;');
		var image_rendering_prop = (player.getBrowser() == 2 || player.getBrowser() == 3) ? 'crisp-edges' : 'pixelated';
		me._map_2__img.setAttribute('style','width:' + me._map_2.ggFloorplanWidth + 'px;height:' + me._map_2.ggFloorplanHeight + 'px;-webkit-user-drag:none;pointer-events:none;image-rendering:' + (mapDetails['crispedges'] ? image_rendering_prop : 'auto') + ';');
		}
		me._map_2.ggCalculateFloorplanSize=function(mapDetails) {
			var floorplanWidth = mapDetails['width'];
			var floorplanHeight = mapDetails['height'];
			var frameAR = me._map_2.clientWidth / me._map_2.clientHeight;
			var floorplanAR = floorplanWidth / floorplanHeight;
			if (frameAR > floorplanAR) {
				me._map_2.ggFloorplanHeight = me._map_2.clientHeight;
				me._map_2.ggFloorplanWidth = me._map_2.ggFloorplanHeight * floorplanAR;
			} else {
				me._map_2.ggFloorplanWidth = me._map_2.clientWidth;
				me._map_2.ggFloorplanHeight = me._map_2.ggFloorplanWidth / floorplanAR;
			}
		}
		me._map_2.ggInitMap=function() {
			var mapDetails = player.getMapDetails(me._map_2.ggMapId);
			if (Object.keys(mapDetails).length === 0) return;
			me._map_2.style.backgroundColor = mapDetails['bgcolor'];
			if (mapDetails.hasOwnProperty('transparent') && mapDetails['transparent']) {
				me._map_2.ggPermeableMap = true;
			} else {
				me._map_2.ggPermeableMap = false;
			}
			me._map_2.ggCalculateFloorplanSize(mapDetails);
			me._map_2.ggShowSimpleFloorplan(mapDetails);
			me._map_2.ggFloorplanNorth = mapDetails['floorplannorth'];
			me._map_2.ggMapNotLoaded = false;
		}
		me._map_2.ggClearMap=function() {
			me._map_2.ggClearMapMarkers();
			me._map_2.ggMapNotLoaded = true;
		}
		me._map_2.ggChangeMap=function(mapId) {
			var newMapType = player.getMapType(mapId)
			if (newMapType == 'web') {
				return;
			}
			me._map_2.ggMapId = mapId;
			if (!me._map_2.ggMapNotLoaded) {
				me._map_2.ggClearMap();
				me._map_2.ggInitMap();
				me._map_2.ggInitMapMarkers();
			}
		}
		me._map_2.ggPlaceMarkersOnSimpleFloorplan=function() {
			var markers=me._map_2.ggSimpleFloorplanMarkerArray;
			for (id in markers) {
				if (markers.hasOwnProperty(id)) {
					marker=markers[id];
					var coords = player.getNodeMapCoordsInPercent(id, me._map_2.ggMapId);
					var xPos = (me._map_2.ggFloorplanWidth * coords[0]) / 100.0;
					var yPos = (me._map_2.ggFloorplanHeight * coords[1]) / 100.0;
					marker.radarXPos = xPos;
					marker.radarYPos = yPos;
					xPos -= me._map_2.ggHMarkerAnchorOffset;
					yPos -= me._map_2.ggVMarkerAnchorOffset;
					marker.style['position'] = 'absolute';
					marker.style['left'] = xPos + 'px';
					marker.style['top'] = yPos + 'px';
					marker.style['z-index'] = me._map_2.style['z-index'] + 2;
				}
			}
		}
		me._map_2.ggInitMapMarkers=function() {
			me._map_2.ggClearMapMarkers();
			var ids=player.getNodeIds();
			me._map_2.ggFilteredIds = [];
			if (me._map_2.ggFilter != '') {
				var filter = me._map_2.ggFilter.split(',');
				for (i=0; i < ids.length; i++) {
					var nodeId = ids[i];
					var nodeData = player.getNodeUserdata(nodeId);
					for (var j=0; j < filter.length; j++) {
						if (nodeData['tags'].indexOf(filter[j].trim()) != -1) me._map_2.ggFilteredIds.push(nodeId);
					}
				}
				if (me._map_2.ggFilteredIds.length > 0) ids = me._map_2.ggFilteredIds;
			}
			for(var i=0; i < ids.length; i++) {
				var id = ids[i];
				var coords = player.getNodeMapCoordsInPercent(id, me._map_2.ggMapId);
				if (coords.length>=2) {
					me._map_2.ggHMarkerAnchorOffset = 12;
					me._map_2.ggVMarkerAnchorOffset = 20;
					var markerParent = new Object();
					markerParent.ggElementNodeId=function() { return id };
					var markerClass = new SkinElement_map_pin_Class(me, markerParent);
					me._map_2.ggMarkerInstances.push(markerClass);
					var marker = markerClass._map_pin;
					me._map_2.ggSimpleFloorplanMarkerArray[id] = marker;
					me._map_2__mapdiv.appendChild(marker);
				}
			}
			me._map_2.ggPlaceMarkersOnSimpleFloorplan();
			skin.updateSize(me._map_2);
		}
		me._map_2.ggClearMapMarkers=function() {
			for (id in me._map_2.ggSimpleFloorplanMarkerArray) {
				if (me._map_2.ggSimpleFloorplanMarkerArray.hasOwnProperty(id)) {
					me._map_2__mapdiv.removeChild(me._map_2.ggSimpleFloorplanMarkerArray[id]);
				}
			}
			me._map_2.ggMarkerInstances=[];
			me._map_2.ggSimpleFloorplanMarkerArray=[];
		}
		me._map_2.logicBlock_visible();
		me._infopopup.logicBlock_visible();
		me.__17.logicBlock_bordercolor();
		me.__22.logicBlock_bordercolor();
		me.__32.logicBlock_bordercolor();
		me.__42.logicBlock_bordercolor();
		me.__14.logicBlock_backgroundcolor();
		player.setVariableValue('vis_button_1', true);
		me.__21.logicBlock_backgroundcolor();
		me.__31.logicBlock_backgroundcolor();
		me.__41.logicBlock_backgroundcolor();
		me.__12.logicBlock_alpha();
		player.setVariableValue('vis_button_1', true);
		me.__20.logicBlock_alpha();
		me.__30.logicBlock_alpha();
		me.__40.logicBlock_alpha();
		me._infopopupm.logicBlock_visible();
		me._image_6.logicBlock_alpha();
		player.setVariableValue('vis_button_1', true);
		me._image_111.logicBlock_alpha();
		me._image_12.logicBlock_alpha();
		me._image_131.logicBlock_alpha();
		me.__10.logicBlock_bordercolor();
		player.setVariableValue('vis_button_1', true);
		me.__2.logicBlock_bordercolor();
		me.__3.logicBlock_bordercolor();
		me.__4.logicBlock_bordercolor();
		var clonedNormalElement = new SkinElement_map_pin_Class(this,me._markertemplate);
		me._markertemplate__normal = clonedNormalElement._map_pin;
		me._markertemplate__normalInst = clonedNormalElement;
		me._markertemplate__normal.style.visibility='inherit';
		me._markertemplate__normal.style.left='-12px';
		me._markertemplate__normal.style.top='-20px';
		me._markertemplate.ggMarkerNormal=me._markertemplate__normal;
		me._markertemplate.ggMarkerInstances.push(clonedNormalElement);
		var clonedActiveElement = new SkinElement_map_pin_Class(this,me._markertemplate);
		me._markertemplate__active = clonedActiveElement._map_pin;
		me._markertemplate__activeInst = clonedActiveElement;
		me._markertemplate__active.style.visibility='hidden';
		me._markertemplate__active.style.left='-12px';
		me._markertemplate__active.style.top='-20px';
		me._markertemplate.ggMarkerActive=me._markertemplate__active;
		me._markertemplate.ggMarkerInstances.push(clonedActiveElement);
		if (me._markertemplate.firstChild) {
			me._markertemplate.insertBefore(me._markertemplate__active,me._markertemplate.firstChild);
		} else {
			me._markertemplate.appendChild(me._markertemplate__active);
		}
		if (me._markertemplate.firstChild) {
			me._markertemplate.insertBefore(me._markertemplate__normal,me._markertemplate.firstChild);
		} else {
			me._markertemplate.appendChild(me._markertemplate__normal);
		}
		for (var i = 0; i < me._markertemplate.childNodes.length; i++) {
			me._markertemplate.ggMarkerInstances.push(me._markertemplate.childNodes[i]);
		}
		player.addListener('activehotspotchanged', function(event) {
			if (hotspotTemplates.hasOwnProperty('info-냉장고')) {
				for(var i = 0; i < hotspotTemplates['info-냉장고'].length; i++) {
					hotspotTemplates['info-냉장고'][i].ggEvent_activehotspotchanged();
				}
			}
		});
		player.addListener('changenode', function(event) {
			if (hotspotTemplates.hasOwnProperty('info-냉장고')) {
				for(var i = 0; i < hotspotTemplates['info-냉장고'].length; i++) {
					hotspotTemplates['info-냉장고'][i].ggEvent_changenode();
				}
			}
			me.__82.logicBlock_position();
			me.__83.logicBlock_visible();
			me.__86.logicBlock_visible();
			me.__86.ggUpdateConditionNodeChange();
			me.__84.logicBlock_visible();
			me.__84.ggUpdateConditionNodeChange();
			me._rectangle_2.logicBlock_size();
			me.__79.logicBlock_visible();
			me.__210.logicBlock_visible();
			me.__80.logicBlock_visible();
			me._timer_1.logicBlock_visible();
			me.__75.logicBlock_visible();
			me.__74.logicBlock_visible();
			me.__70.logicBlock_visible();
			me.__69.logicBlock_visible();
			me._onoff.logicBlock_visible();
			me._on.logicBlock_visible();
			me._off.logicBlock_visible();
			me.__68.logicBlock_text();
			me.__67.logicBlock_visible();
			me.__63.logicBlock_visible();
			me.__62.logicBlock_visible();
			me.__58.logicBlock_visible();
			me.__57.logicBlock_visible();
			me.__53.logicBlock_visible();
			me.__52.logicBlock_visible();
			me.__48.logicBlock_visible();
			me.__47.logicBlock_visible();
			me._up.logicBlock_visible();
			me.__45.logicBlock_position();
			me.__45.logicBlock_visible();
			me.__45.logicBlock_alpha();
			me._rectangle_3.logicBlock_visible();
			me._dowm.logicBlock_visible();
			me.__36.logicBlock_visible();
			me.__74a.logicBlock_backgroundcolor();
			me.__74b.logicBlock_backgroundcolor();
			me.__84a.logicBlock_backgroundcolor();
			me._map_10.logicBlock_visible();
			for (var i=0; i < me._map_10.ggMarkerInstances.length; i++) {
				me._map_10.ggMarkerInstances[i].ggEvent_changenode();
			}
			var mapDetails = player.getMapDetails(me._map_10.ggMapId);
			if (mapDetails.hasOwnProperty('title')) {
				me._map_10.ggCalculateFloorplanSize(mapDetails);
				me._map_10.ggShowSimpleFloorplan(mapDetails);
				me._map_10.ggPlaceMarkersOnSimpleFloorplan();
			}
			if (me._map_10.ggRadar) me._map_10.ggRadar.update();
			if (me._map_10.ggLastNodeId) {
				var lastActiveMarker = me._map_10.ggSimpleFloorplanMarkerArray[me._map_10.ggLastNodeId];
				if (lastActiveMarker && lastActiveMarker.ggDeactivate) lastActiveMarker.ggDeactivate();
			}
			var id = player.getCurrentNode();
			var marker = me._map_10.ggSimpleFloorplanMarkerArray[id];
			if (marker) {
				if (marker.ggActivate) marker.ggActivate();
			}
			if (player.getMapType(me._map_10.ggMapId) == 'file') {
				var coords = player.getNodeMapCoords(id, me._map_10.ggMapId);
				if (coords.length < 2) {
					var mapId = player.getMapContainingNode(id);
					if (mapId != '') {
							me._map_10.ggChangeMap(mapId);
					}
				}
			}
			me._map_10.ggLastNodeId = id;
			me._map_10.ggRadar.update();
			me._map_20.logicBlock_visible();
			for (var i=0; i < me._map_20.ggMarkerInstances.length; i++) {
				me._map_20.ggMarkerInstances[i].ggEvent_changenode();
			}
			var mapDetails = player.getMapDetails(me._map_20.ggMapId);
			if (mapDetails.hasOwnProperty('title')) {
				me._map_20.ggCalculateFloorplanSize(mapDetails);
				me._map_20.ggShowSimpleFloorplan(mapDetails);
				me._map_20.ggPlaceMarkersOnSimpleFloorplan();
			}
			if (me._map_20.ggRadar) me._map_20.ggRadar.update();
			if (me._map_20.ggLastNodeId) {
				var lastActiveMarker = me._map_20.ggSimpleFloorplanMarkerArray[me._map_20.ggLastNodeId];
				if (lastActiveMarker && lastActiveMarker.ggDeactivate) lastActiveMarker.ggDeactivate();
			}
			var id = player.getCurrentNode();
			var marker = me._map_20.ggSimpleFloorplanMarkerArray[id];
			if (marker) {
				if (marker.ggActivate) marker.ggActivate();
			}
			if (player.getMapType(me._map_20.ggMapId) == 'file') {
				var coords = player.getNodeMapCoords(id, me._map_20.ggMapId);
				if (coords.length < 2) {
					var mapId = player.getMapContainingNode(id);
					if (mapId != '') {
							me._map_20.ggChangeMap(mapId);
					}
				}
			}
			me._map_20.ggLastNodeId = id;
			me._map_20.ggRadar.update();
			me.__23.logicBlock_position();
			me._map_1.logicBlock_visible();
			for (var i=0; i < me._map_1.ggMarkerInstances.length; i++) {
				me._map_1.ggMarkerInstances[i].ggEvent_changenode();
			}
			var mapDetails = player.getMapDetails(me._map_1.ggMapId);
			if (mapDetails.hasOwnProperty('title')) {
				me._map_1.ggCalculateFloorplanSize(mapDetails);
				me._map_1.ggShowSimpleFloorplan(mapDetails);
				me._map_1.ggPlaceMarkersOnSimpleFloorplan();
			}
			if (me._map_1.ggRadar) me._map_1.ggRadar.update();
			if (me._map_1.ggLastNodeId) {
				var lastActiveMarker = me._map_1.ggSimpleFloorplanMarkerArray[me._map_1.ggLastNodeId];
				if (lastActiveMarker && lastActiveMarker.ggDeactivate) lastActiveMarker.ggDeactivate();
			}
			var id = player.getCurrentNode();
			var marker = me._map_1.ggSimpleFloorplanMarkerArray[id];
			if (marker) {
				if (marker.ggActivate) marker.ggActivate();
			}
			if (player.getMapType(me._map_1.ggMapId) == 'file') {
				var coords = player.getNodeMapCoords(id, me._map_1.ggMapId);
				if (coords.length < 2) {
					var mapId = player.getMapContainingNode(id);
					if (mapId != '') {
							me._map_1.ggChangeMap(mapId);
					}
				}
			}
			me._map_1.ggLastNodeId = id;
			me._map_1.ggRadar.update();
			me._map_2.logicBlock_visible();
			for (var i=0; i < me._map_2.ggMarkerInstances.length; i++) {
				me._map_2.ggMarkerInstances[i].ggEvent_changenode();
			}
			var mapDetails = player.getMapDetails(me._map_2.ggMapId);
			if (mapDetails.hasOwnProperty('title')) {
				me._map_2.ggCalculateFloorplanSize(mapDetails);
				me._map_2.ggShowSimpleFloorplan(mapDetails);
				me._map_2.ggPlaceMarkersOnSimpleFloorplan();
			}
			if (me._map_2.ggRadar) me._map_2.ggRadar.update();
			if (me._map_2.ggLastNodeId) {
				var lastActiveMarker = me._map_2.ggSimpleFloorplanMarkerArray[me._map_2.ggLastNodeId];
				if (lastActiveMarker && lastActiveMarker.ggDeactivate) lastActiveMarker.ggDeactivate();
			}
			var id = player.getCurrentNode();
			var marker = me._map_2.ggSimpleFloorplanMarkerArray[id];
			if (marker) {
				if (marker.ggActivate) marker.ggActivate();
			}
			if (player.getMapType(me._map_2.ggMapId) == 'file') {
				var coords = player.getNodeMapCoords(id, me._map_2.ggMapId);
				if (coords.length < 2) {
					var mapId = player.getMapContainingNode(id);
					if (mapId != '') {
							me._map_2.ggChangeMap(mapId);
					}
				}
			}
			me._map_2.ggLastNodeId = id;
			me._map_2.ggRadar.update();
			me.__17.logicBlock_bordercolor();
			me.__22.logicBlock_bordercolor();
			me.__32.logicBlock_bordercolor();
			me.__42.logicBlock_bordercolor();
			me.__14.logicBlock_backgroundcolor();
			me.__21.logicBlock_backgroundcolor();
			me.__31.logicBlock_backgroundcolor();
			me.__41.logicBlock_backgroundcolor();
			me.__12.logicBlock_alpha();
			me.__20.logicBlock_alpha();
			me.__30.logicBlock_alpha();
			me.__40.logicBlock_alpha();
			me._image_6.logicBlock_alpha();
			me._image_111.logicBlock_alpha();
			me._image_12.logicBlock_alpha();
			me._image_131.logicBlock_alpha();
			me.__10.logicBlock_bordercolor();
			me.__2.logicBlock_bordercolor();
			me.__3.logicBlock_bordercolor();
			me.__4.logicBlock_bordercolor();
			me._markertemplate__normalInst.ggEvent_changenode();
			me._markertemplate__activeInst.ggEvent_changenode();
		});
		player.addListener('configloaded', function(event) {
			if (hotspotTemplates.hasOwnProperty('info-냉장고')) {
				for(var i = 0; i < hotspotTemplates['info-냉장고'].length; i++) {
					hotspotTemplates['info-냉장고'][i].ggEvent_configloaded();
				}
			}
			me.__82.logicBlock_position();
			me._scrollarea_1.ggUpdatePosition();
			me._rectangle_2.logicBlock_size();
			me.__79.logicBlock_visible();
			me.__210.logicBlock_visible();
			me.__80.logicBlock_visible();
			me.__75.logicBlock_visible();
			me.__70.logicBlock_visible();
			me._onoff.logicBlock_visible();
			me.__63.logicBlock_visible();
			me.__58.logicBlock_visible();
			me.__53.logicBlock_visible();
			me.__48.logicBlock_visible();
			me._up.logicBlock_visible();
			me.__45.logicBlock_position();
			me.__45.logicBlock_visible();
			me.__45.logicBlock_alpha();
			me._rectangle_3.logicBlock_visible();
			me._dowm.logicBlock_visible();
			me.__74a.logicBlock_position();
			me.__84a.logicBlock_position();
			me.__26.logicBlock_visible();
			for (var i=0; i < me._map_10.ggMarkerInstances.length; i++) {
				me._map_10.ggMarkerInstances[i].ggEvent_configloaded();
			}
			if (me._map_10.ggVisible) {
				me._map_10.ggClearMap();
				me._map_10.ggInitMap(false);
				me._map_10.ggInitMapMarkers(true);
			}
			for (var i=0; i < me._map_20.ggMarkerInstances.length; i++) {
				me._map_20.ggMarkerInstances[i].ggEvent_configloaded();
			}
			if (me._map_20.ggVisible) {
				me._map_20.ggClearMap();
				me._map_20.ggInitMap(false);
				me._map_20.ggInitMapMarkers(true);
			}
			me.__23.logicBlock_position();
			me.__23.logicBlock_visible();
			for (var i=0; i < me._map_1.ggMarkerInstances.length; i++) {
				me._map_1.ggMarkerInstances[i].ggEvent_configloaded();
			}
			if (me._map_1.ggVisible) {
				me._map_1.ggClearMap();
				me._map_1.ggInitMap(false);
				me._map_1.ggInitMapMarkers(true);
			}
			for (var i=0; i < me._map_2.ggMarkerInstances.length; i++) {
				me._map_2.ggMarkerInstances[i].ggEvent_configloaded();
			}
			if (me._map_2.ggVisible) {
				me._map_2.ggClearMap();
				me._map_2.ggInitMap(false);
				me._map_2.ggInitMapMarkers(true);
			}
			me._infopopup.logicBlock_visible();
			me.__17.logicBlock_bordercolor();
			me.__22.logicBlock_bordercolor();
			me.__32.logicBlock_bordercolor();
			me.__42.logicBlock_bordercolor();
			me.__14.logicBlock_backgroundcolor();
			me.__21.logicBlock_backgroundcolor();
			me.__31.logicBlock_backgroundcolor();
			me.__41.logicBlock_backgroundcolor();
			me.__12.logicBlock_alpha();
			me.__20.logicBlock_alpha();
			me.__30.logicBlock_alpha();
			me.__40.logicBlock_alpha();
			me._image_6.logicBlock_alpha();
			me._image_111.logicBlock_alpha();
			me._image_12.logicBlock_alpha();
			me._image_131.logicBlock_alpha();
			me.__10.logicBlock_bordercolor();
			me.__2.logicBlock_bordercolor();
			me.__3.logicBlock_bordercolor();
			me.__4.logicBlock_bordercolor();
			player.setMediaVisibility("\uc5d0\uc5b4\ucee8","0",0);
			me._markertemplate__normalInst.ggEvent_configloaded();
			me._markertemplate__activeInst.ggEvent_configloaded();
		});
		player.addListener('fullscreenenter', function(event) {
			me.__51.logicBlock_visible();
		});
		player.addListener('fullscreenexit', function(event) {
			me.__51.logicBlock_visible();
		});
		player.addListener('hsproxyclick', function(event) {
			if (hotspotTemplates.hasOwnProperty('info-냉장고')) {
				for(var i = 0; i < hotspotTemplates['info-냉장고'].length; i++) {
					hotspotTemplates['info-냉장고'][i].ggEvent_hsproxyclick();
				}
			}
			if (hotspotTemplates.hasOwnProperty('에어컨')) {
				for(var i = 0; i < hotspotTemplates['에어컨'].length; i++) {
					hotspotTemplates['에어컨'][i].ggEvent_hsproxyclick();
				}
			}
		});
		player.addListener('hsproxydblclick', function(event) {
			if (hotspotTemplates.hasOwnProperty('info-냉장고')) {
				for(var i = 0; i < hotspotTemplates['info-냉장고'].length; i++) {
					hotspotTemplates['info-냉장고'][i].ggEvent_hsproxydblclick();
				}
			}
			if (hotspotTemplates.hasOwnProperty('에어컨')) {
				for(var i = 0; i < hotspotTemplates['에어컨'].length; i++) {
					hotspotTemplates['에어컨'][i].ggEvent_hsproxydblclick();
				}
			}
		});
		player.addListener('hsproxyout', function(event) {
			if (hotspotTemplates.hasOwnProperty('info-냉장고')) {
				for(var i = 0; i < hotspotTemplates['info-냉장고'].length; i++) {
					hotspotTemplates['info-냉장고'][i].ggEvent_hsproxyout();
				}
			}
			if (hotspotTemplates.hasOwnProperty('에어컨')) {
				for(var i = 0; i < hotspotTemplates['에어컨'].length; i++) {
					hotspotTemplates['에어컨'][i].ggEvent_hsproxyout();
				}
			}
		});
		player.addListener('hsproxyover', function(event) {
			if (hotspotTemplates.hasOwnProperty('info-냉장고')) {
				for(var i = 0; i < hotspotTemplates['info-냉장고'].length; i++) {
					hotspotTemplates['info-냉장고'][i].ggEvent_hsproxyover();
				}
			}
			if (hotspotTemplates.hasOwnProperty('에어컨')) {
				for(var i = 0; i < hotspotTemplates['에어컨'].length; i++) {
					hotspotTemplates['에어컨'][i].ggEvent_hsproxyover();
				}
			}
		});
		player.addListener('positionchanged', function(event) {
			me._map_10.ggRadar.update();
			me._map_20.ggRadar.update();
			me._map_1.ggRadar.update();
			me._map_2.ggRadar.update();
		});
		player.addListener('sizechanged', function(event) {
			for(var i = 0; i < me.__84.ggInstances.length; i++) {
				me.__84.ggInstances[i].ggEvent_sizechanged(event);
			}
			for(var i = 0; i < me.__86.ggInstances.length; i++) {
				me.__86.ggInstances[i].ggEvent_sizechanged(event);
			}
			me._scrollarea_1.logicBlock_position();
			me._scrollarea_1.logicBlock_size();
			me.__86.logicBlock_size();
			me.__84.logicBlock_size();
			me.__43.logicBlock_position();
			me.__43.logicBlock_scaling();
			me.__29.logicBlock_position();
			me.__29.logicBlock_scaling();
			me.__33.logicBlock_position();
			me.__34.logicBlock_position();
			me.__34.logicBlock_size();
			me.__74a.logicBlock_position();
			me.__84a.logicBlock_position();
			me._container_2.logicBlock_position();
			me.__26.logicBlock_position();
			me.__26.logicBlock_size();
			me.__26.logicBlock_scaling();
			me.__26.logicBlock_visible();
			me._rectangle_40.logicBlock_size();
			me.__28.logicBlock_scaling();
			me.__23.logicBlock_scaling();
			me.__23.logicBlock_visible();
			me._rectangle_4.logicBlock_size();
			me.__25.logicBlock_scaling();
			me._infopopupm.logicBlock_visible();
		});
		player.addListener('varchanged_vis_button_1', function(event) {
			me.__17.logicBlock_bordercolor();
			me.__14.logicBlock_backgroundcolor();
			me.__12.logicBlock_alpha();
			me._image_6.logicBlock_alpha();
			me.__10.logicBlock_bordercolor();
		});
		player.addListener('varchanged_vis_button_2', function(event) {
			me.__22.logicBlock_bordercolor();
			me.__21.logicBlock_backgroundcolor();
			me.__20.logicBlock_alpha();
			me._image_111.logicBlock_alpha();
			me.__2.logicBlock_bordercolor();
		});
		player.addListener('varchanged_vis_button_3', function(event) {
			me.__32.logicBlock_bordercolor();
			me.__31.logicBlock_backgroundcolor();
			me.__30.logicBlock_alpha();
			me._image_12.logicBlock_alpha();
			me.__3.logicBlock_bordercolor();
		});
		player.addListener('varchanged_vis_button_4', function(event) {
			me.__42.logicBlock_bordercolor();
			me.__41.logicBlock_backgroundcolor();
			me.__40.logicBlock_alpha();
			me._image_131.logicBlock_alpha();
			me.__4.logicBlock_bordercolor();
		});
		player.addListener('varchanged_vis_long', function(event) {
			me.__45.logicBlock_visible();
			me.__45.logicBlock_alpha();
		});
		player.addListener('varchanged_vis_mobilemap', function(event) {
			me.__23.logicBlock_position();
		});
		player.addListener('varchanged_vis_roomchoice', function(event) {
			me.__82.logicBlock_position();
			me.__210.logicBlock_visible();
			me.__80.logicBlock_visible();
		});
		player.addListener('varchanged_vis_short', function(event) {
			me._rectangle_2.logicBlock_size();
			me.__79.logicBlock_visible();
			me.__75.logicBlock_visible();
			me.__70.logicBlock_visible();
			me._onoff.logicBlock_visible();
			me.__63.logicBlock_visible();
			me.__58.logicBlock_visible();
			me.__53.logicBlock_visible();
			me.__48.logicBlock_visible();
			me._up.logicBlock_visible();
			me.__45.logicBlock_position();
			me.__45.logicBlock_visible();
			me.__45.logicBlock_alpha();
			me._rectangle_3.logicBlock_visible();
			me._dowm.logicBlock_visible();
		});
		player.addListener('varchanged_vis_skin_show', function(event) {
			me.__79.logicBlock_visible();
			me.__75.logicBlock_visible();
			me.__70.logicBlock_visible();
			me._onoff.logicBlock_visible();
			me.__63.logicBlock_visible();
			me.__58.logicBlock_visible();
			me.__53.logicBlock_visible();
			me.__48.logicBlock_visible();
		});
		player.addListener('viewerinit', function(event) {
			me.__86.ggUpdate();
			me.__84.ggUpdate();
		});
	};
	function SkinCloner__84_Class(nodeId, parentScope, ggParent, parameter) {
		var me=this;
		var hs='';
		me.parentScope=parentScope;
		me.ggParent=ggParent;
		me.findElements=skin.findElements;
		me.ggIndex=parameter.index;
		me.ggNodeId=nodeId;
		me.ggTitle=parameter.title;
		me.ggUserdata=skin.player.getNodeUserdata(me.ggNodeId);
		me.ggUserdata.nodeid=me.ggNodeId;
		me.elementMouseDown={};
		me.elementMouseOver={};
			me.__div=document.createElement('div');
			me.__div.setAttribute('style','visibility: inherit; overflow: visible;');
			me.__div.style.position='absolute';
			me.__div.style.left=parameter.left;
			me.__div.style.top=parameter.top;
			me.__div.style.width='';
			me.__div.style.height='';
			me.__div.style.width=parameter.width;
			me.__div.style.height=parameter.height;
			me.__div.ggIsActive = function() {
				return player.getCurrentNode()==me.ggNodeId;
			}
			me.__div.ggElementNodeId=function() {
				return me.ggNodeId;
			}
		el=me._nodeimage_1=document.createElement('div');
		el.isDragging = function() {
			let scrollerParent = me._nodeimage_1;
			while ((scrollerParent = scrollerParent.parentNode) != null) {
				if (scrollerParent.hasOwnProperty('ggIsDragging') && scrollerParent.ggIsDragging == true) return true;
			}
			return false;
		}
		els=me._nodeimage_1__img=document.createElement('img');
		els.className='ggskin ggskin_nodeimage';
		els.setAttribute('src',basePath + "images/nodeimage_1_" + nodeId + ".png");
		el.ggNodeId=nodeId;
		hs ='';
		hs += 'position: absolute;top: 0px;left: 0px;width: 100%;height: 100%;-webkit-user-drag:none;pointer-events:none;;';
		hs+='border-radius: 100px;';
		els.setAttribute('style', hs);
		els.className='ggskin ggskin_nodeimage';
		els['ondragstart']=function() { return false; };
		el.appendChild(els);
		el.ggSubElement = els;
		el.ggId="NodeImage 1";
		el.ggParameter={ rx:0,ry:0,a:0,sx:1,sy:1,def:'' };
		el.ggVisible=true;
		el.className="ggskin ggskin_nodeimage ";
		el.ggType='nodeimage';
		hs ='';
		hs+='cursor : pointer;';
		hs+='height : 115px;';
		hs+='left : 0px;';
		hs+='position : absolute;';
		hs+='top : 0px;';
		hs+='visibility : inherit;';
		hs+='width : 115px;';
		hs+='pointer-events:auto;';
		el.setAttribute('style',hs);
		el.style.transformOrigin='50% 50%';
		me._nodeimage_1.ggIsActive=function() {
			return player.getCurrentNode()==this.ggElementNodeId();
		}
		el.ggElementNodeId=function() {
			return this.ggNodeId;
		}
		me._nodeimage_1.logicBlock_size = function() {
			var newLogicStateSize;
			if (
				((player.getViewerSize().width <= 670))
			)
			{
				newLogicStateSize = 0;
			}
			else {
				newLogicStateSize = -1;
			}
			if (me._nodeimage_1.ggCurrentLogicStateSize != newLogicStateSize) {
				me._nodeimage_1.ggCurrentLogicStateSize = newLogicStateSize;
				me._nodeimage_1.style.transition='width 0s, height 0s';
				if (me._nodeimage_1.ggCurrentLogicStateSize == 0) {
					me._nodeimage_1.style.width='95px';
					me._nodeimage_1.style.height='95px';
					skin.updateSize(me._nodeimage_1);
				}
				else {
					me._nodeimage_1.style.width='115px';
					me._nodeimage_1.style.height='115px';
					skin.updateSize(me._nodeimage_1);
				}
			}
		}
		me._nodeimage_1.logicBlock_size();
		me._nodeimage_1.onclick=function (e) {
			if (me._nodeimage_1.isDragging()) return;
			player.openNext("{"+me.ggNodeId+"}","");
			player.setVariableValue('vis_roomchoice', false);
		}
		me._nodeimage_1.ggUpdatePosition=function (useTransition) {
		}
		el=me._rectangle_1=document.createElement('div');
		el.isDragging = function() {
			let scrollerParent = me._rectangle_1;
			while ((scrollerParent = scrollerParent.parentNode) != null) {
				if (scrollerParent.hasOwnProperty('ggIsDragging') && scrollerParent.ggIsDragging == true) return true;
			}
			return false;
		}
		el.ggId="Rectangle 1";
		el.ggParameter={ rx:0,ry:0,a:0,sx:1,sy:1,def:'' };
		el.ggVisible=true;
		el.className="ggskin ggskin_rectangle ";
		el.ggType='rectangle';
		hs ='';
		hs+='z-index: 0;';
		hs+='border : 0px solid #000000;';
		hs+='bottom : -40px;';
		hs+='cursor : default;';
		hs+='height : 40px;';
		hs+='left : 0px;';
		hs+='position : absolute;';
		hs+='visibility : inherit;';
		hs+='width : 100%;';
		hs+='pointer-events:auto;';
		el.setAttribute('style',hs);
		el.style.transformOrigin='50% 50%';
		me._rectangle_1.ggIsActive=function() {
			if ((this.parentNode) && (this.parentNode.ggIsActive)) {
				return this.parentNode.ggIsActive();
			}
			return false;
		}
		el.ggElementNodeId=function() {
			if ((this.parentNode) && (this.parentNode.ggElementNodeId)) {
				return this.parentNode.ggElementNodeId();
			}
			return player.getCurrentNode();
		}
		me._rectangle_1.ggUpdatePosition=function (useTransition) {
		}
		el=me.__85=document.createElement('div');
		el.isDragging = function() {
			let scrollerParent = me.__85;
			while ((scrollerParent = scrollerParent.parentNode) != null) {
				if (scrollerParent.hasOwnProperty('ggIsDragging') && scrollerParent.ggIsDragging == true) return true;
			}
			return false;
		}
		els=me.__85__text=document.createElement('div');
		el.className='ggskin ggskin_textdiv';
		el.ggTextDiv=els;
		el.ggId="\uac00\uad6c\uc5c6\uc74c \ubc29\uc774\ub984";
		el.ggParameter={ rx:0,ry:0,a:0,sx:1,sy:1,def:'' };
		el.ggVisible=true;
		el.className="ggskin ggskin_text ";
		el.ggType='text';
		hs ='';
		hs+='border : 0px solid #000000;';
		hs+='bottom : 0px;';
		hs+='color : #000000;';
		hs+='cursor : default;';
		hs+='height : 100%;';
		hs+='left : 0px;';
		hs+='position : absolute;';
		hs+='visibility : inherit;';
		hs+='width : 100%;';
		hs+='pointer-events:auto;';
		el.setAttribute('style',hs);
		el.style.transformOrigin='50% 50%';
		hs ='';
		hs += 'box-sizing: border-box;';
		hs+='cursor: default;';
		hs+='width: 100%;';
		hs+='height: auto;';
		hs+='max-height: 100%;';
		hs+='font-size: 14px;';
		hs+='font-weight: 500;';
		hs+='text-align: center;';
		hs+='position: absolute;';
		hs+='top: 50%;';
		hs+='transform: translate(0, -50%);';
		hs+='white-space: pre;';
		hs+='padding: 0px;';
		hs+='overflow: hidden;';
		els.setAttribute('style',hs);
		me.__85.ggUpdateText=function() {
			var params = [];
			params.push(String(player._(me.ggUserdata.title)));
			var hs = player._("%1", params);
			if (hs!=this.ggText) {
				this.ggText=hs;
				this.ggTextDiv.innerHTML=hs;
				if (this.ggUpdatePosition) this.ggUpdatePosition();
			}
		}
		me.__85.ggUpdateText();
		player.addListener('changenode', function() {
			me.__85.ggUpdateText();
		});
		el.appendChild(els);
		me.__85.ggIsActive=function() {
			if ((this.parentNode) && (this.parentNode.ggIsActive)) {
				return this.parentNode.ggIsActive();
			}
			return false;
		}
		el.ggElementNodeId=function() {
			if ((this.parentNode) && (this.parentNode.ggElementNodeId)) {
				return this.parentNode.ggElementNodeId();
			}
			return player.getCurrentNode();
		}
		me.__85.ggUpdatePosition=function (useTransition) {
		}
		me._rectangle_1.appendChild(me.__85);
		me._nodeimage_1.appendChild(me._rectangle_1);
		me.__div.appendChild(me._nodeimage_1);
		me._nodeimage_1.logicBlock_size();
			me.ggEvent_sizechanged=function(event) {
				me._nodeimage_1.logicBlock_size();
			};
	};
	function SkinCloner__86_Class(nodeId, parentScope, ggParent, parameter) {
		var me=this;
		var hs='';
		me.parentScope=parentScope;
		me.ggParent=ggParent;
		me.findElements=skin.findElements;
		me.ggIndex=parameter.index;
		me.ggNodeId=nodeId;
		me.ggTitle=parameter.title;
		me.ggUserdata=skin.player.getNodeUserdata(me.ggNodeId);
		me.ggUserdata.nodeid=me.ggNodeId;
		me.elementMouseDown={};
		me.elementMouseOver={};
			me.__div=document.createElement('div');
			me.__div.setAttribute('style','visibility: inherit; overflow: visible;');
			me.__div.style.position='absolute';
			me.__div.style.left=parameter.left;
			me.__div.style.top=parameter.top;
			me.__div.style.width='';
			me.__div.style.height='';
			me.__div.style.width=parameter.width;
			me.__div.style.height=parameter.height;
			me.__div.ggIsActive = function() {
				return player.getCurrentNode()==me.ggNodeId;
			}
			me.__div.ggElementNodeId=function() {
				return me.ggNodeId;
			}
		el=me._nodeimage_10=document.createElement('div');
		el.isDragging = function() {
			let scrollerParent = me._nodeimage_10;
			while ((scrollerParent = scrollerParent.parentNode) != null) {
				if (scrollerParent.hasOwnProperty('ggIsDragging') && scrollerParent.ggIsDragging == true) return true;
			}
			return false;
		}
		els=me._nodeimage_10__img=document.createElement('img');
		els.className='ggskin ggskin_nodeimage';
		els.setAttribute('src',basePath + "images/nodeimage_1_" + nodeId + ".png");
		el.ggNodeId=nodeId;
		hs ='';
		hs += 'position: absolute;top: 0px;left: 0px;width: 100%;height: 100%;-webkit-user-drag:none;pointer-events:none;;';
		hs+='border-radius: 100px;';
		els.setAttribute('style', hs);
		els.className='ggskin ggskin_nodeimage';
		els['ondragstart']=function() { return false; };
		el.appendChild(els);
		el.ggSubElement = els;
		el.ggId="NodeImage 1";
		el.ggParameter={ rx:0,ry:0,a:0,sx:1,sy:1,def:'' };
		el.ggVisible=true;
		el.className="ggskin ggskin_nodeimage ";
		el.ggType='nodeimage';
		hs ='';
		hs+='height : 115px;';
		hs+='left : 0px;';
		hs+='position : absolute;';
		hs+='top : 0px;';
		hs+='visibility : inherit;';
		hs+='width : 115px;';
		hs+='pointer-events:auto;';
		el.setAttribute('style',hs);
		el.style.transformOrigin='50% 50%';
		me._nodeimage_10.ggIsActive=function() {
			return player.getCurrentNode()==this.ggElementNodeId();
		}
		el.ggElementNodeId=function() {
			return this.ggNodeId;
		}
		me._nodeimage_10.logicBlock_size = function() {
			var newLogicStateSize;
			if (
				((player.getViewerSize().width <= 670))
			)
			{
				newLogicStateSize = 0;
			}
			else {
				newLogicStateSize = -1;
			}
			if (me._nodeimage_10.ggCurrentLogicStateSize != newLogicStateSize) {
				me._nodeimage_10.ggCurrentLogicStateSize = newLogicStateSize;
				me._nodeimage_10.style.transition='width 0s, height 0s';
				if (me._nodeimage_10.ggCurrentLogicStateSize == 0) {
					me._nodeimage_10.style.width='95px';
					me._nodeimage_10.style.height='95px';
					skin.updateSize(me._nodeimage_10);
				}
				else {
					me._nodeimage_10.style.width='115px';
					me._nodeimage_10.style.height='115px';
					skin.updateSize(me._nodeimage_10);
				}
			}
		}
		me._nodeimage_10.logicBlock_size();
		me._nodeimage_10.onclick=function (e) {
			if (me._nodeimage_10.isDragging()) return;
			player.openNext("{"+me.ggNodeId+"}","");
			player.setVariableValue('vis_roomchoice', false);
		}
		me._nodeimage_10.ggUpdatePosition=function (useTransition) {
		}
		el=me._rectangle_10=document.createElement('div');
		el.isDragging = function() {
			let scrollerParent = me._rectangle_10;
			while ((scrollerParent = scrollerParent.parentNode) != null) {
				if (scrollerParent.hasOwnProperty('ggIsDragging') && scrollerParent.ggIsDragging == true) return true;
			}
			return false;
		}
		el.ggId="Rectangle 1";
		el.ggParameter={ rx:0,ry:0,a:0,sx:1,sy:1,def:'' };
		el.ggVisible=true;
		el.className="ggskin ggskin_rectangle ";
		el.ggType='rectangle';
		hs ='';
		hs+='background : rgba(255,255,255,0);';
		hs+='border : 0px solid #000000;';
		hs+='bottom : -40px;';
		hs+='cursor : default;';
		hs+='height : 40px;';
		hs+='left : 0px;';
		hs+='position : absolute;';
		hs+='visibility : inherit;';
		hs+='width : 100%;';
		hs+='pointer-events:auto;';
		el.setAttribute('style',hs);
		el.style.transformOrigin='50% 50%';
		me._rectangle_10.ggIsActive=function() {
			if ((this.parentNode) && (this.parentNode.ggIsActive)) {
				return this.parentNode.ggIsActive();
			}
			return false;
		}
		el.ggElementNodeId=function() {
			if ((this.parentNode) && (this.parentNode.ggElementNodeId)) {
				return this.parentNode.ggElementNodeId();
			}
			return player.getCurrentNode();
		}
		me._rectangle_10.ggUpdatePosition=function (useTransition) {
		}
		el=me.__87=document.createElement('div');
		el.isDragging = function() {
			let scrollerParent = me.__87;
			while ((scrollerParent = scrollerParent.parentNode) != null) {
				if (scrollerParent.hasOwnProperty('ggIsDragging') && scrollerParent.ggIsDragging == true) return true;
			}
			return false;
		}
		els=me.__87__text=document.createElement('div');
		el.className='ggskin ggskin_textdiv';
		el.ggTextDiv=els;
		el.ggId="\uac00\uad6c\uc788\uc74c \ubc29\uc774\ub984";
		el.ggParameter={ rx:0,ry:0,a:0,sx:1,sy:1,def:'' };
		el.ggVisible=true;
		el.className="ggskin ggskin_text ";
		el.ggType='text';
		hs ='';
		hs+='border : 0px solid #000000;';
		hs+='bottom : 0px;';
		hs+='color : #000000;';
		hs+='cursor : default;';
		hs+='height : 100%;';
		hs+='left : 0px;';
		hs+='position : absolute;';
		hs+='visibility : inherit;';
		hs+='width : 100%;';
		hs+='pointer-events:auto;';
		el.setAttribute('style',hs);
		el.style.transformOrigin='50% 50%';
		hs ='';
		hs += 'box-sizing: border-box;';
		hs+='cursor: default;';
		hs+='width: 100%;';
		hs+='height: auto;';
		hs+='max-height: 100%;';
		hs+='font-size: 14px;';
		hs+='font-weight: 500;';
		hs+='text-align: center;';
		hs+='position: absolute;';
		hs+='top: 50%;';
		hs+='transform: translate(0, -50%);';
		hs+='white-space: pre;';
		hs+='padding: 0px;';
		hs+='overflow: hidden;';
		els.setAttribute('style',hs);
		me.__87.ggUpdateText=function() {
			var params = [];
			params.push(String(player._(me.ggUserdata.title)));
			var hs = player._("%1", params);
			if (hs!=this.ggText) {
				this.ggText=hs;
				this.ggTextDiv.innerHTML=hs;
				if (this.ggUpdatePosition) this.ggUpdatePosition();
			}
		}
		me.__87.ggUpdateText();
		player.addListener('changenode', function() {
			me.__87.ggUpdateText();
		});
		el.appendChild(els);
		me.__87.ggIsActive=function() {
			if ((this.parentNode) && (this.parentNode.ggIsActive)) {
				return this.parentNode.ggIsActive();
			}
			return false;
		}
		el.ggElementNodeId=function() {
			if ((this.parentNode) && (this.parentNode.ggElementNodeId)) {
				return this.parentNode.ggElementNodeId();
			}
			return player.getCurrentNode();
		}
		me.__87.ggUpdatePosition=function (useTransition) {
		}
		me._rectangle_10.appendChild(me.__87);
		me._nodeimage_10.appendChild(me._rectangle_10);
		me.__div.appendChild(me._nodeimage_10);
		me._nodeimage_10.logicBlock_size();
			me.ggEvent_sizechanged=function(event) {
				me._nodeimage_10.logicBlock_size();
			};
	};
	function SkinElement_map_pin_Class(parentScope,ggParent) {
		var me=this;
		var flag=false;
		me.parentScope=parentScope;
		me.ggParent=ggParent;
		var nodeId=ggParent.ggElementNodeId();
		me.ggNodeId=nodeId;
		me.ggUserdata=skin.player.getNodeUserdata(nodeId);
		me.ggUserdata.nodeid=nodeId;
		me.elementMouseDown={};
		me.elementMouseOver={};
		
		me.findElements=function(id,regex) {
			return skin.findElements(id,regex);
		}
		
		el=me._map_pin=document.createElement('div');
		el.ggId="map_pin";
		el.ggDx=0;
		el.ggDy=0;
		el.ggParameter={ rx:0,ry:0,a:0,sx:1,sy:1,def:'' };
		el.ggVisible=true;
		el.className="ggskin ggskin_container ";
		el.ggType='container';
		hs ='';
		hs+='height : 41px;';
		hs+='left : calc(50% - ((24px + 0px) / 2) + 0px);';
		hs+='position : absolute;';
		hs+='top : calc(50% - ((41px + 0px) / 2) + 0px);';
		hs+='visibility : inherit;';
		hs+='width : 24px;';
		hs+='pointer-events:none;';
		el.setAttribute('style',hs);
		el.style.transformOrigin='50% 50%';
		me._map_pin.ggIsActive=function() {
			return player.getCurrentNode()==this.ggElementNodeId();
		}
		el.ggElementNodeId=function() {
			return me.ggNodeId;
		}
		me._map_pin.onclick=function (e) {
			if (
				(
					((me._map_pin.ggIsActive() == false))
				)
			) {
				player.openNext("{"+me.ggNodeId+"}","");
			}
		}
		me._map_pin.ggUpdatePosition=function (useTransition) {
		}
		el=me._map_pin_active=document.createElement('div');
		els=me._map_pin_active__img=document.createElement('img');
		els.className='ggskin ggskin_map_pin_active';
		hs='data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAABMAAAATCAYAAAByUDbMAAAB6klEQVQ4jZ2US2tTURSFv33aPOhAk2DbkY9a0/rCBw4aBBFE7x8IKFoc9F8IjnSkwxr/gEJVEGtRHKgICuJj4LPaQrwORJBS24RY0MbULAe5saHG2Nw12nDO+s6DvRc0kaSNks5IeiKpIOmXpC+SHks6JWlTM99KSJekUUkVtVZF0gVJXY1+awB1A3eBvVR/gn8VfbwGcy/hxyxE10DvfmzzUUgPg4sCvAE8M5v9A5MUBR4BGYpT6MExKLz79xOSOzBvHNYOADwHDppZ2QXL54AM33x060BrEEDxPZrIQOkDwBBwHsAkbQB8qpWIbuyB4tR//3b5htux7GtwkSUg7YARIEL+cnsgqO3PXwLoBEYccARA/pX2QIHkj9VLzwF9ABQmQ8GYf1uvBh3QC8'+
			'Di13CwcgEQQNIBJQDi68LBYkmCDis6YBqA1K5wsGXftANuA9iWE6FYlh6ul3dM0nogT7USb7vPEtuw7CvoiJWBQWdmn4EcLoJ5E8EfrELRBObdhI4YwEUz+1SfzTjwEBiilEf3s61HKrUTO3wdEluhNpuHzOx7Y2r0APeA3VSXwB+rNfLcC1ich1gKuvdh/cchfRJcJ8AktdSY+evAIM9yq8yz3Mo8aypJfZLOSnomaSEAzEh6Kum0pP5mvt/cMiU35fP3jQAAAABJRU5ErkJggg==';
		els.setAttribute('src',hs);
		els.ggNormalSrc=hs;
		hs ='';
		hs += 'position: absolute;top: 0px;left: 0px;width: 100%;height: 100%;-webkit-user-drag:none;pointer-events:none;;';
		els.setAttribute('style', hs);
		els.className='ggskin ggskin_image';
		els['ondragstart']=function() { return false; };
		player.checkLoaded.push(els);
		el.appendChild(els);
		el.ggSubElement = els;
		el.ggId="map_pin_active";
		el.ggDx=0;
		el.ggDy=0;
		el.ggParameter={ rx:0,ry:0,a:0,sx:1,sy:1,def:'' };
		el.ggVisible=true;
		el.className="ggskin ggskin_image ";
		el.ggType='image';
		hs ='';
		hs+='cursor : pointer;';
		hs+='height : 15px;';
		hs+='left : calc(50% - ((15px + 0px) / 2) + 0px);';
		hs+='opacity : 0;';
		hs+='position : absolute;';
		hs+='top : calc(50% - ((15px + 0px) / 2) + 0px);';
		hs+='visibility : hidden;';
		hs+='width : 15px;';
		hs+='pointer-events:auto;';
		el.setAttribute('style',hs);
		el.style.transformOrigin='50% 100%';
		me._map_pin_active.ggIsActive=function() {
			if ((this.parentNode) && (this.parentNode.ggIsActive)) {
				return this.parentNode.ggIsActive();
			}
			return false;
		}
		el.ggElementNodeId=function() {
			if ((this.parentNode) && (this.parentNode.ggElementNodeId)) {
				return this.parentNode.ggElementNodeId();
			}
			return me.ggNodeId;
		}
		me._map_pin_active.logicBlock_size = function() {
			var newLogicStateSize;
			if (
				((player.getViewerSize().width <= 460))
			)
			{
				newLogicStateSize = 0;
			}
			else if (
				((player.getIsMobile() == true))
			)
			{
				newLogicStateSize = 1;
			}
			else {
				newLogicStateSize = -1;
			}
			if (me._map_pin_active.ggCurrentLogicStateSize != newLogicStateSize) {
				me._map_pin_active.ggCurrentLogicStateSize = newLogicStateSize;
				me._map_pin_active.style.transition='width 0s, height 0s, transform 200ms ease 0ms, opacity 500ms ease 0ms';
				if (me._map_pin_active.ggCurrentLogicStateSize == 0) {
					me._map_pin_active.style.width='10px';
					me._map_pin_active.style.height='10px';
					me._map_pin_active.style.left = 'calc(50% - (10px / 2))';
					me._map_pin_active.style.top = 'calc(50% - (10px / 2))';
					skin.updateSize(me._map_pin_active);
				}
				else if (me._map_pin_active.ggCurrentLogicStateSize == 1) {
					me._map_pin_active.style.width='10px';
					me._map_pin_active.style.height='10px';
					me._map_pin_active.style.left = 'calc(50% - (10px / 2))';
					me._map_pin_active.style.top = 'calc(50% - (10px / 2))';
					skin.updateSize(me._map_pin_active);
				}
				else {
					me._map_pin_active.style.width='15px';
					me._map_pin_active.style.height='15px';
					me._map_pin_active.style.left = 'calc(50% - (15px / 2))';
					me._map_pin_active.style.top = 'calc(50% - (15px / 2))';
					skin.updateSize(me._map_pin_active);
				}
			}
		}
		me._map_pin_active.logicBlock_size();
		me._map_pin_active.logicBlock_scaling = function() {
			var newLogicStateScaling;
			if (
				((me.elementMouseOver['map_pin_active'] == true))
			)
			{
				newLogicStateScaling = 0;
			}
			else {
				newLogicStateScaling = -1;
			}
			if (me._map_pin_active.ggCurrentLogicStateScaling != newLogicStateScaling) {
				me._map_pin_active.ggCurrentLogicStateScaling = newLogicStateScaling;
				me._map_pin_active.style.transition='width 0s, height 0s, transform 200ms ease 0ms, opacity 500ms ease 0ms';
				if (me._map_pin_active.ggCurrentLogicStateScaling == 0) {
					me._map_pin_active.ggParameter.sx = 1.1;
					me._map_pin_active.ggParameter.sy = 1.1;
					me._map_pin_active.style.transform=parameterToTransform(me._map_pin_active.ggParameter);
					setTimeout(function() {skin.updateSize(me._map_pin_active);}, 250);
				}
				else {
					me._map_pin_active.ggParameter.sx = 1;
					me._map_pin_active.ggParameter.sy = 1;
					me._map_pin_active.style.transform=parameterToTransform(me._map_pin_active.ggParameter);
					setTimeout(function() {skin.updateSize(me._map_pin_active);}, 250);
				}
			}
		}
		me._map_pin_active.logicBlock_scaling();
		me._map_pin_active.logicBlock_alpha = function() {
			var newLogicStateAlpha;
			if (
				((me._map_pin_active.ggIsActive() == true))
			)
			{
				newLogicStateAlpha = 0;
			}
			else {
				newLogicStateAlpha = -1;
			}
			if (me._map_pin_active.ggCurrentLogicStateAlpha != newLogicStateAlpha) {
				me._map_pin_active.ggCurrentLogicStateAlpha = newLogicStateAlpha;
				me._map_pin_active.style.transition='width 0s, height 0s, transform 200ms ease 0ms, opacity 500ms ease 0ms';
				if (me._map_pin_active.ggCurrentLogicStateAlpha == 0) {
					me._map_pin_active.style.visibility=me._map_pin_active.ggVisible?'inherit':'hidden';
					me._map_pin_active.style.opacity=1;
				}
				else {
					setTimeout(function() { if (me._map_pin_active.style.opacity == 0.0) { me._map_pin_active.style.visibility="hidden"; } }, 505);
					me._map_pin_active.style.opacity=0;
				}
			}
		}
		me._map_pin_active.logicBlock_alpha();
		me._map_pin_active.onmouseover=function (e) {
			me.elementMouseOver['map_pin_active']=true;
			me._map_pin_active.logicBlock_scaling();
		}
		me._map_pin_active.onmouseout=function (e) {
			me.elementMouseOver['map_pin_active']=false;
			me._map_pin_active.logicBlock_scaling();
		}
		me._map_pin_active.ggUpdatePosition=function (useTransition) {
		}
		me._map_pin.appendChild(me._map_pin_active);
		el=me._map_pin_normal=document.createElement('div');
		els=me._map_pin_normal__img=document.createElement('img');
		els.className='ggskin ggskin_map_pin_normal';
		hs='data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAADIAAABSCAYAAAAWy4frAAAP30lEQVR4nN2bfYzlV1nHP+f8Xu/bzOy87U53ZrdtcFugFiwhrRKhDcY/uhL5x0b5xxDDHyZq1Eg0DUEgQqRGXpoK0WBM1ShgAikRTa0KVAi02KYYaLsF2i47szs7L3dm7vvv5ZzHP87vzu7s7tw7L3dq4rM5yeTe3z3n+Z7vc56381v1S7/5e/x/EH/UE16auGfeC0sntR/OCzKPyAJoDyWvKtSizdNFk3aXSpWtSxNLL5hRrTsSICuz992tPP9XgAcCpRbcp4ICUAoQ+p9pP0D7AbmM1VfnTn7ZWPP52F/+2mFBqYOa1qWJe+b9Uu13gQcULOycVRF4Hn4QEAZur9IsJ88yMmNAhGuer4vYL0uePzS7+vWXXhMgy9U3VSiN/6H2gj/QSpf6n5dKJW'+
			'qVMrValcDXA+fIjdBqd2i3OzRbre3PrdiuUvozSbv+sfnGM/UjA3Jp/J73+uXahxG7ABAGIccmxqnVqvje9cqLCLb4WwNKqeueMSK0Wh3W1+ukWdr/3ary/I8G6sIjezW5PZ2R82NviMqVm/7Ct/Y3sAalPWanp5gYr+1QOjNCkluMFXIrmGtMyCuARL4m8jSBr9DAWLXMWLXM5laTlbV1EDODyT+VyOwvLlfDB060vtcepuNQRhbH3jIZxtUvKeW9A2BsbJzZmSk87ZQyVuhm1gG41vb3IJGnqUbejvnW1utsbm4CYK35H5slZ+c2v7M4aJ6Bxrwyc++ZMB77Lqh3iFiOz85y/Pg0SiusQCsxrLUz2qkht4II+x693LLWztjq5hgrKK2YmZlibm4OAKXUnV5UfnZl9r67DwTk0sQ982j9TZBblfY4tXCKscKU0lRY'+
			'a6e0UoPASEY3t6x3MjqJOxLVapmF+Xm0F4DYGbT+2sXqXXfsC8hy9U0VHURfReyM9gJuOX2KOI5AoNnN2Uwy7P6taKhYgVZqaHQMCMRxxM2n5omCEKwp+eXxxxbH3jK5ZyCE1b/XYu/0EeZvmsP3fYwV6u2MTmoRy5GObmaotzOMFXzf58TcTSilUTa/NYyrX9o8+XpvKJDlmbd/RCn1bivC9PE5oih0IDoZqbHIa/QvNZZ6x4EJQ5+5uTmsCGLMO9J0+s8GAlmZufeMsvZBgMnpWSrVKlag0cvJzf4Ps6eVc7W+xtNq37/PjbDVzbHiAu7k9CwAYuV3VmbuPXO17jviiDXZx5VSXhxFTE46U+ykhm5m2YtoBZXQudJAa/S1fAtkuZCJpZPuzV33covq5YzFPpOTk3RaLXq9jidKPgmcvY6Rldn77kZ4t1jh2NSMWz'+
			'QTmj2zJ7cTac1UOaQceESeRhe5Ypam9Hrpdt4Y+Ipy4DFZDoh9vae5u6mLUwhMzcwgVpAsv3/5+H2/0Nd/mxHJep8CKJVrlMrOpJqJuS6/u1aUgmrkUwrcnmRZytbGBr0kIU26GJO757RHHEXEcZnK2BhRVKIW+YTa0kjyoes0e4agrImiEqXqGN3WJsraPwfetM3Iyux9dwvcAzA9ewKAJLP0jMXCrkMpmCwF2yCaW1ucf/VlNjbW6HaaO0CINXS7HTY21lg8/zL1+joiEAWa6UqI76mBa6VGtk18enrGbX6e3tkPlD6AFXNWRCiXKwRBiAg0knzwFuGY0FphTc7ypYt02g0ATk/XOPvmBd6wMM0dC1MEnuaFpTrPL23wn99f5Lnza9RXL9FtbDFz0zxBEFILfda72cD1WklO7IcEQUipVKbTaWOSzq8CT3ln3vqz'+
			'NLyZzyqlpmvHpimVyiTG0E0HH/DY96hGzp0vL52n026CUrznbWf4+Ht+jre+7gTzU1VC38P3NCcmKvz0qSne9ZZbqJUCvvvKOmnao91qMj4+ged5gJDlu68r4s6YrzVWhE6rgVhzrJZefERfrN51h9LebQDVag1rhV5uEVG7DoBKrLFW2Nqq02m3UFrzyHvfzu+ffTNRcF282hal4D1vO8Pnf+ud1OKAPEtZX13FWqHse2i1+7oiil5u3bPlqptPe7ddrN51h0bkLCJEUYznBQB0E8HK7qMceGhRGJOxvnIJRPj1nz/DPT91YiCLV8vNs2O8/10/AyJsbaySJi5Tr4X+wLW7ifMKnhcQRXE/6JzVyg9PAHhRGYDcuh8MkqAIEJvrq4gx3DxT433v3DWf21Xuv+sW7r3dga+vrADge9cXX1eLFSEtEr0odjoL3KKV59'+
			'8sYomL2tra4RG3v1jS6yBiefdbbx1oToPk197+ekQs3Z5jRCsK89p9/X7Z6fs+IhZgQdu05xoHngOS2cGH3NMKrVymmvS6ANxxavpAIABuu8llEGINed5zCg7Zk20dC52V0sc1yEmsJfB8rEC/ybF7/uRA5GkbKeLE60/eMLPek1TjgPnJClhLt9vFijPdQToY43QIPN+ZEHJSi7UVB8u5NCMgIrsOjXsuz1wBVAnUgc2qLxPlCACbZVgRtBqsgxF3VlDurIq1Fa08/6KIkOWug+GpwalPn9aoVEJEaPVyXl1pHBiECJy7tIWIEBQOp5fbgTpozx32LE8REZTnX9RizY8VgkkdkGEHrR+wRPmEYYhCeH5x/cBAzq82yNIEhRDFjplsSMngiWPCpCkKQaz5sQYuWCtkeYa1MKS35s5HLlgLQVTBWuGpc0sHBvLNF5ew'+
			'VgjCCCM+1rpUf5BoRfFchnWu+IJW8AoIaeI8kC7aMoN2JDVuodLYOCD88zMv88zLl/cNYqne4q/+7TlAKI85h7GXAq7v/p3OgoJXdN7rfBsgaW1hcueFAn+webVSd9BLlWOUx45hreWP/+FJkmzvfWgR+NDn/4tmJyGKS1QnXGBsJ3bg2oFfbLQVktYWAKbXfU6PndDfUlo3wQU4gMgb7IWyXGgXSeWx2dNoz2ep3uZ9n/nXPR38eqvH+x/9Ov/9I8fi1NzNKK1Ic6EzZDPiIsh0O83+lnRsRX/du/O218mmTNytlLpda01cGQcUnXTwhGkuRL7G15qwFNNpbLCy2eKfvv0Sge9xemaMUrizI9vqZTzx3Cv89uf+gxcvrALCsePzxJVjiMBaO0OGpEfjsY8CWvVl0l4LkCdOdZ7/Wx8gqEw8lnebv9xpbTJx/DS+dh'+
			'SmAw6diLDVy5gqB0SlCY7f/EY2l1+m12nx8Fee4uGvPMX89Bi3z89QiXx+cH6FH1/e3FbUCyIm524lLtcQYDNxncZBEvouqxCg03Jzic2/Cv1SV/EEgMkSep0mYalGyfNIssHFVZIJ9W7OROzjBTFTC2+gWV+iub6MWMPiWoPFtZ2mppSiOjHL+Mw8ojysuHPRSYY3OMqhyz7SbhOTJQAE1WNfYbMAMrf5ncXF6I3/Itbe39y8zFSpRhho6DG0lu4mll6aMhH7xKGmNnmS2uRJTNYj6XXIu02sGOJSlSCqbmfZgvNQG13XahomSkFUeKutjWUQi4g81m9uX2k+5OZhtLq/t7WGmTmN5weUIk2nN3ynRGCjm1MzPuXYdVC8IKYcxFC7Pg+zAp2epZkOL6f7UoucqibPSBsuACvhs/3vt4HUTqh/byyb88DpTmOFyrGT'+
			'lLRHW/bW0wJX5zcS0Bpiz8PXirBwl5kVslxIrSE/wG1h5LsbgHb9ImINoM6dMuce73+/Hccnll4wUiBsrju36PvKxRT21H7aHsZCOzNsJTmr7YzVdsZmN6edGbK9tcl2jChUrslhhdamK8BQPHw10B0JiS/qb4DEZl16rfp2WTsoE30tRsX3XJnbvIzNUwQaYRw/uiuQk3JuBcUXAZr1SyCOUq2GpMRHOHxPuZREoF2/XJDB3117HXddiqhEHgHI2ptkRf5VDrz/KxxU+yV42iLvtQCsUvpT1+p9HZAF88OngWcBOlsXHZBQo3De5rUcnlbEoXMWm+suwxZ4YiF/8UdDgQCI4pMA3Y3L26xUo5G/7TFUxqIirU+6V1wu6mM3evaGQMaPe/8I6gewkxWv/zbGazAC74rrbqy96hQT9Y1T5tyTewbiLunlg+BYMVnBSu'+
			'gPrRVGNfpnI+m2yVobFHR88Eb67goE4JR56UsUZ6VZX8SKEIcKT8NRX7uFgSIMXIOhXX/FkQGP78bGQCBuA/SDAGljlayoVWrR0bNSLroySbtJ3nFJp1X80SBdBwJZMC8+DnwLoLP5EwDHirf/aL/XEfqKOHBno7v1k2JH9WO35C89d2AgxSwPAmStjW1WxiP/yA553ztexYb14/IHhmk5FMgpc+5JgccBOhvnMQJB4KLtqONGWOR2RqBTnA3gCze1nv3+oYG4h5wHy9qb5EWtPB6PPq7UijmT5gbGXTNYpfSunmqnjnuQBfPDp1H6MXB2K9blQIGnRpYYxoHC1wqxkGxdcAuLevRGUfzAQAAKO7V5p0Hadn59fITRvl84pe1tNhKlbxzFbyR7BlLY6Rfgyo4FgSL0B3fO9zKiQG833Xob5/tLfm6vbOwLCEBhr9Yk'+
			'bdL2BtYW+dAhD/lY6HKq7tYK1mURSVCb/NP96LYvIAv5iz9C1KNwZed8T1EK9zXNDimFGs9TWISsWfSQRT0y7I25a2XfGgRjxz5IUUXm3Q1EHCsHMSlw50wEsuYqNush0PCEh/ar176BFDv1OXCsCIKnFeVo/6yUQo3WCkFIiyiu4NMn5dzKfuc6kE14Vn2EgpWstYogVIPB18rXDiiYREgay4jJEGjoSu266u/IgJyUcyuIciVx4wJi3d2ia1Tszaxi31WdYiEvzoaCT+/3xeVDAQHQ1erHBBo2T0lbywhQjTxu8I7ydaIUjMU+Au63JgNYCUuljx9Yn4P+cL7xTF3Bp+HKjvqe2hMr5cBDa7AmJ2+4mCTCJ/byovLIgQAUO7giJiNrLQPDWemzAZA1LxddQ1aicumRw+hyKCAnWt9ri/AJgLxxAWtytFJUwt1ZqY'+
			'SuaLImx3ZcPwClPnwYNg4NBKDYyRWxhqzpGmj915+ujeBXf5c1L/XZOC9l768Pq8ehgZxofa+NUh8G3A5LwUp0/fVdLfaKrmWO7ThTRKmHTjeeTw6rx6GBABQ7et6xcgkrQi0qXtDsL6SgErq3JpLNC9tsjB3XfzkKHUYC5HTj+QSlHgKwnWVMnqGuYaUSeSilMHmGdJ0JiuIDo/p/ViMBAuB2Vp0Ta7CtpR0HG9h2ALbVf7lAnXONwNHIyIBMLL1gRMmfAEj3MtYFOWqxRy3ue6orbIA8OMr/9TYyILCz1drf+UroXXG522zwbNEAHJmMFMjVrVbpXkby3nabR/LeVWzw0VGuCyMGAjtbrbZ95WWbq/4eORtwBEDgSquV3ho262CzDvTWdn43YjkSIFe3WqW9iLSLqlXUN4rvRi5HAsSJa7WSbrgBA68FDitHBuTq'+
			'Visw9FrgsHKEjFxptV7791HIkV4MLpgfPv0T//bHABbyF58+yrWO/IbTYD901GsA/C9GVYNNoq0j2AAAAABJRU5ErkJggg==';
		els.setAttribute('src',hs);
		els.ggNormalSrc=hs;
		hs ='';
		hs += 'position: absolute;top: 0px;left: 0px;width: 100%;height: 100%;-webkit-user-drag:none;pointer-events:none;;';
		els.setAttribute('style', hs);
		els.className='ggskin ggskin_image';
		els['ondragstart']=function() { return false; };
		player.checkLoaded.push(els);
		el.appendChild(els);
		el.ggSubElement = els;
		el.ggId="map_pin_normal";
		el.ggDx=0;
		el.ggDy=0;
		el.ggParameter={ rx:0,ry:0,a:0,sx:1,sy:1,def:'' };
		el.ggVisible=true;
		el.className="ggskin ggskin_image ";
		el.ggType='image';
		hs ='';
		hs+='cursor : pointer;';
		hs+='height : 22px;';
		hs+='left : calc(50% - ((13px + 0px) / 2) + 0px);';
		hs+='opacity : 0;';
		hs+='position : absolute;';
		hs+='top : calc(50% - ((22px + 0px) / 2) + 0px);';
		hs+='visibility : hidden;';
		hs+='width : 13px;';
		hs+='pointer-events:auto;';
		el.setAttribute('style',hs);
		el.style.transformOrigin='50% 100%';
		me._map_pin_normal.ggIsActive=function() {
			if ((this.parentNode) && (this.parentNode.ggIsActive)) {
				return this.parentNode.ggIsActive();
			}
			return false;
		}
		el.ggElementNodeId=function() {
			if ((this.parentNode) && (this.parentNode.ggElementNodeId)) {
				return this.parentNode.ggElementNodeId();
			}
			return me.ggNodeId;
		}
		me._map_pin_normal.logicBlock_size = function() {
			var newLogicStateSize;
			if (
				((player.getViewerSize().width <= 460))
			)
			{
				newLogicStateSize = 0;
			}
			else if (
				((player.getIsMobile() == true))
			)
			{
				newLogicStateSize = 1;
			}
			else {
				newLogicStateSize = -1;
			}
			if (me._map_pin_normal.ggCurrentLogicStateSize != newLogicStateSize) {
				me._map_pin_normal.ggCurrentLogicStateSize = newLogicStateSize;
				me._map_pin_normal.style.transition='width 0s, height 0s, transform 200ms ease 0ms, opacity 500ms ease 0ms';
				if (me._map_pin_normal.ggCurrentLogicStateSize == 0) {
					me._map_pin_normal.style.width='10px';
					me._map_pin_normal.style.height='19px';
					me._map_pin_normal.style.left = 'calc(50% - (10px / 2))';
					me._map_pin_normal.style.top = 'calc(50% - (19px / 2))';
					skin.updateSize(me._map_pin_normal);
				}
				else if (me._map_pin_normal.ggCurrentLogicStateSize == 1) {
					me._map_pin_normal.style.width='10px';
					me._map_pin_normal.style.height='19px';
					me._map_pin_normal.style.left = 'calc(50% - (10px / 2))';
					me._map_pin_normal.style.top = 'calc(50% - (19px / 2))';
					skin.updateSize(me._map_pin_normal);
				}
				else {
					me._map_pin_normal.style.width='13px';
					me._map_pin_normal.style.height='22px';
					me._map_pin_normal.style.left = 'calc(50% - (13px / 2))';
					me._map_pin_normal.style.top = 'calc(50% - (22px / 2))';
					skin.updateSize(me._map_pin_normal);
				}
			}
		}
		me._map_pin_normal.logicBlock_size();
		me._map_pin_normal.logicBlock_scaling = function() {
			var newLogicStateScaling;
			if (
				((me.elementMouseOver['map_pin_normal'] == true))
			)
			{
				newLogicStateScaling = 0;
			}
			else {
				newLogicStateScaling = -1;
			}
			if (me._map_pin_normal.ggCurrentLogicStateScaling != newLogicStateScaling) {
				me._map_pin_normal.ggCurrentLogicStateScaling = newLogicStateScaling;
				me._map_pin_normal.style.transition='width 0s, height 0s, transform 200ms ease 0ms, opacity 500ms ease 0ms';
				if (me._map_pin_normal.ggCurrentLogicStateScaling == 0) {
					me._map_pin_normal.ggParameter.sx = 1.1;
					me._map_pin_normal.ggParameter.sy = 1.1;
					me._map_pin_normal.style.transform=parameterToTransform(me._map_pin_normal.ggParameter);
					setTimeout(function() {skin.updateSize(me._map_pin_normal);}, 250);
				}
				else {
					me._map_pin_normal.ggParameter.sx = 1;
					me._map_pin_normal.ggParameter.sy = 1;
					me._map_pin_normal.style.transform=parameterToTransform(me._map_pin_normal.ggParameter);
					setTimeout(function() {skin.updateSize(me._map_pin_normal);}, 250);
				}
			}
		}
		me._map_pin_normal.logicBlock_scaling();
		me._map_pin_normal.logicBlock_alpha = function() {
			var newLogicStateAlpha;
			if (
				((me._map_pin_normal.ggIsActive() == true))
			)
			{
				newLogicStateAlpha = 0;
			}
			else {
				newLogicStateAlpha = -1;
			}
			if (me._map_pin_normal.ggCurrentLogicStateAlpha != newLogicStateAlpha) {
				me._map_pin_normal.ggCurrentLogicStateAlpha = newLogicStateAlpha;
				me._map_pin_normal.style.transition='width 0s, height 0s, transform 200ms ease 0ms, opacity 500ms ease 0ms';
				if (me._map_pin_normal.ggCurrentLogicStateAlpha == 0) {
					setTimeout(function() { if (me._map_pin_normal.style.opacity == 0.0) { me._map_pin_normal.style.visibility="hidden"; } }, 505);
					me._map_pin_normal.style.opacity=0;
				}
				else {
					setTimeout(function() { if (me._map_pin_normal.style.opacity == 0.0) { me._map_pin_normal.style.visibility="hidden"; } }, 505);
					me._map_pin_normal.style.opacity=0;
				}
			}
		}
		me._map_pin_normal.logicBlock_alpha();
		me._map_pin_normal.onmouseover=function (e) {
			me.elementMouseOver['map_pin_normal']=true;
			me._map_pin_normal.logicBlock_scaling();
		}
		me._map_pin_normal.onmouseout=function (e) {
			me.elementMouseOver['map_pin_normal']=false;
			me._map_pin_normal.logicBlock_scaling();
		}
		me._map_pin_normal.ggUpdatePosition=function (useTransition) {
		}
		me._map_pin.appendChild(me._map_pin_normal);
		me._map_pin_active.logicBlock_size();
		me._map_pin_active.logicBlock_scaling();
		me._map_pin_active.logicBlock_alpha();
		me._map_pin_normal.logicBlock_size();
		me._map_pin_normal.logicBlock_scaling();
		me._map_pin_normal.logicBlock_alpha();
			me.ggEvent_changenode=function() {
				me._map_pin_active.logicBlock_alpha();
				me._map_pin_normal.logicBlock_alpha();
			};
			me.ggEvent_configloaded=function() {
				me._map_pin_active.logicBlock_size();
				me._map_pin_normal.logicBlock_size();
			};
			me.ggEvent_sizechanged=function() {
				me._map_pin_active.logicBlock_size();
				me._map_pin_normal.logicBlock_size();
			};
	};
	function SkinHotspotClass__(parentScope,hotspot) {
		var me=this;
		var flag=false;
		var hs='';
		me.parentScope=parentScope;
		me.hotspot=hotspot;
		var nodeId=String(hotspot.url);
		nodeId=(nodeId.charAt(0)=='{')?nodeId.substr(1, nodeId.length - 2):''; // }
		me.ggUserdata=skin.player.getNodeUserdata(nodeId);
		me.elementMouseDown={};
		me.elementMouseOver={};
		me.findElements=function(id,regex) {
			return skin.findElements(id,regex);
		}
		el=me.__=document.createElement('div');
		el.ggId="\uc5d0\uc5b4\ucee8";
		el.ggParameter={ rx:0,ry:0,a:0,sx:1,sy:1,def:'' };
		el.ggVisible=true;
		el.className="ggskin ggskin_hotspot ";
		el.ggType='hotspot';
		hs ='';
		hs+='height : 0px;';
		hs+='left : 0px;';
		hs+='position : absolute;';
		hs+='top : 0px;';
		hs+='visibility : inherit;';
		hs+='width : 0px;';
		hs+='pointer-events:auto;';
		el.setAttribute('style',hs);
		el.style.transformOrigin='50% 50%';
		me.__.ggIsActive=function() {
			return player.getCurrentNode()==this.ggElementNodeId();
		}
		el.ggElementNodeId=function() {
			if (me.hotspot.url!='' && me.hotspot.url.charAt(0)=='{') { // }
				return me.hotspot.url.substr(1, me.hotspot.url.length - 2);
			} else {
				if ((this.parentNode) && (this.parentNode.ggElementNodeId)) {
					return this.parentNode.ggElementNodeId();
				} else {
					return player.getCurrentNode();
				}
			}
		}
		me.__.onclick=function (e) {
			player.setMediaVisibility("\uc5d0\uc5b4\ucee8","1",500);
			player.triggerEvent('hsproxyclick', {'id': me.hotspot.id, 'url': me.hotspot.url});
		}
		me.__.ondblclick=function (e) {
			player.triggerEvent('hsproxydblclick', {'id': me.hotspot.id, 'url': me.hotspot.url});
		}
		me.__.onmouseover=function (e) {
			player.setActiveHotspot(me.hotspot);
			me.elementMouseOver['_']=true;
			player.triggerEvent('hsproxyover', {'id': me.hotspot.id, 'url': me.hotspot.url});
		}
		me.__.onmouseout=function (e) {
			player.setActiveHotspot(null);
			me.elementMouseOver['_']=false;
			player.triggerEvent('hsproxyout', {'id': me.hotspot.id, 'url': me.hotspot.url});
		}
		me.__.ggUpdatePosition=function (useTransition) {
		}
		el=me._external_2=document.createElement('div');
		els=me._external_2__img=document.createElement('img');
		els.className='ggskin ggskin_external';
		hs ='';
		hs += 'position: absolute;-webkit-user-drag:none;pointer-events:none;;';
		els.setAttribute('style', hs);
		els.onload=function() {me._external_2.ggUpdatePosition();}
		el.appendChild(els);
		el.ggSubElement = els;
		hs ='';
		el.ggAltText="";
		el.ggScrollbars=false;
		el.ggUpdateText = function() {
			me._external_2.ggSubElement.setAttribute('alt', player._(me._external_2.ggAltText));
			me._external_2.ggUpdateImageTranslation();
		}
		el.ggSetImage = function(img) {
			me._external_2.ggText_untranslated = img;
			me._external_2.ggUpdateImageTranslation();
		}
		el.ggUpdateImage = function() {
			me._external_2.ggSubElement.style.width = '0px';
			me._external_2.ggSubElement.style.height = '0px';
			me._external_2.ggSubElement.src='';
			me._external_2.ggSubElement.src=me._external_2.ggText;
		}
		el.ggUpdateImageTranslation = function() {
			if (me._external_2.ggText != player._(me._external_2.ggText_untranslated)) {
				me._external_2.ggText = player._(me._external_2.ggText_untranslated);
				me._external_2.ggUpdateImage()
			}
		}
		if ((hotspot) && (hotspot.customimage)) {
			el.ggText=el.ggText_untranslated=hotspot.customimage;
			els.setAttribute('src', hotspot.customimage);
			els.style.width=hotspot.customimagewidth + 'px';
			els.style.height=hotspot.customimageheight + 'px';
			me.ggUse3d = hotspot.use3D;
			me.gg3dDistance = hotspot.distance3D;
		}
		els['ondragstart']=function() { return false; };
		player.checkLoaded.push(els);
		el.ggUpdateText();
		el.ggId="External 2";
		el.ggParameter={ rx:0,ry:0,a:0,sx:1,sy:1,def:'' };
		el.ggVisible=true;
		el.className="ggskin ggskin_external ";
		el.ggType='external';
		hs ='';
		hs+='border : 0px solid #000000;';
		hs+='cursor : default;';
		hs+='height : 20px;';
		hs+='left : 0px;';
		hs+='position : absolute;';
		hs+='top : 0px;';
		hs+='visibility : inherit;';
		hs+='width : 100px;';
		hs+='pointer-events:auto;';
		el.setAttribute('style',hs);
		el.style.transformOrigin='50% 50%';
		me._external_2.ggIsActive=function() {
			if ((this.parentNode) && (this.parentNode.ggIsActive)) {
				return this.parentNode.ggIsActive();
			}
			return false;
		}
		el.ggElementNodeId=function() {
			if ((this.parentNode) && (this.parentNode.ggElementNodeId)) {
				return this.parentNode.ggElementNodeId();
			}
			return me.ggNodeId;
		}
		me._external_2.ggUpdatePosition=function (useTransition) {
			var parentWidth = me._external_2.clientWidth;
			var parentHeight = me._external_2.clientHeight;
			var img = me._external_2__img;
			var aspectRatioDiv = me._external_2.clientWidth / me._external_2.clientHeight;
			var aspectRatioImg = img.naturalWidth / img.naturalHeight;
			if (img.naturalWidth < parentWidth) parentWidth = img.naturalWidth;
			if (img.naturalHeight < parentHeight) parentHeight = img.naturalHeight;
			var currentWidth,currentHeight;
			if ((hotspot) && (hotspot.customimage)) {
				currentWidth  = hotspot.customimagewidth;
				currentHeight = hotspot.customimageheight;
			}
			if (!me._external_2.ggScrollbars || currentWidth < me._external_2.clientWidth) {
				img.style.right='';
				img.style.left='0px';
			} else {
				img.style.right='';
				img.style.left='0px';
				img.style.marginLeft='0px';
			}
			if (!me._external_2.ggScrollbars || currentHeight < me._external_2.clientHeight) {
				img.style.bottom='';
				img.style.top='0px';
			} else {
				img.style.bottom='';
				img.style.top='0px';
				img.style.marginTop='0px';
			}
		}
		me.__.appendChild(me._external_2);
		if ((hotspot) && (hotspot.customimage)) {
			me._external_2.style.width=hotspot.customimagewidth + 'px';
			me._external_2.style.height=hotspot.customimageheight + 'px';
		}
			me.ggEvent_hsproxyclick=function() {
				if (event.id=='에어컨') {
					me.__.onclick();
				}
			};
			me.ggEvent_hsproxydblclick=function() {
				if (event.id=='에어컨') {
					me.__.ondblclick();
				}
			};
			me.ggEvent_hsproxyout=function() {
				if (event.id=='에어컨') {
					me.__.onmouseout();
				}
			};
			me.ggEvent_hsproxyover=function() {
				if (event.id=='에어컨') {
					me.__.onmouseover();
				}
			};
			me.__div = me.__;
	};
	function SkinHotspotClass_ht_node(parentScope,hotspot) {
		var me=this;
		var flag=false;
		var hs='';
		me.parentScope=parentScope;
		me.hotspot=hotspot;
		var nodeId=String(hotspot.url);
		nodeId=(nodeId.charAt(0)=='{')?nodeId.substr(1, nodeId.length - 2):''; // }
		me.ggUserdata=skin.player.getNodeUserdata(nodeId);
		me.elementMouseDown={};
		me.elementMouseOver={};
		me.findElements=function(id,regex) {
			return skin.findElements(id,regex);
		}
		el=me._ht_node=document.createElement('div');
		el.ggId="ht_node";
		el.ggParameter={ rx:0,ry:0,a:0,sx:1,sy:1,def:'' };
		el.ggVisible=true;
		el.className="ggskin ggskin_hotspot ";
		el.ggType='hotspot';
		hs ='';
		hs+='height : 0px;';
		hs+='left : 0px;';
		hs+='position : absolute;';
		hs+='top : 0px;';
		hs+='visibility : inherit;';
		hs+='width : 0px;';
		hs+='pointer-events:auto;';
		el.setAttribute('style',hs);
		el.style.transformOrigin='50% 50%';
		me._ht_node.ggIsActive=function() {
			return player.getCurrentNode()==this.ggElementNodeId();
		}
		el.ggElementNodeId=function() {
			if (me.hotspot.url!='' && me.hotspot.url.charAt(0)=='{') { // }
				return me.hotspot.url.substr(1, me.hotspot.url.length - 2);
			} else {
				if ((this.parentNode) && (this.parentNode.ggElementNodeId)) {
					return this.parentNode.ggElementNodeId();
				} else {
					return player.getCurrentNode();
				}
			}
		}
		me._ht_node.onclick=function (e) {
			player.openNext(player._(me.hotspot.url),"$(fwd)");
			player.triggerEvent('hsproxyclick', {'id': me.hotspot.id, 'url': me.hotspot.url});
		}
		me._ht_node.ondblclick=function (e) {
			player.triggerEvent('hsproxydblclick', {'id': me.hotspot.id, 'url': me.hotspot.url});
		}
		me._ht_node.onmouseover=function (e) {
			player.setActiveHotspot(me.hotspot);
			me.elementMouseOver['ht_node']=true;
			player.triggerEvent('hsproxyover', {'id': me.hotspot.id, 'url': me.hotspot.url});
		}
		me._ht_node.onmouseout=function (e) {
			player.setActiveHotspot(null);
			me.elementMouseOver['ht_node']=false;
			player.triggerEvent('hsproxyout', {'id': me.hotspot.id, 'url': me.hotspot.url});
		}
		me._ht_node.ggUpdatePosition=function (useTransition) {
		}
		el=me._external_1=document.createElement('div');
		els=me._external_1__img=document.createElement('img');
		els.className='ggskin ggskin_external';
		hs ='';
		hs += 'position: absolute;-webkit-user-drag:none;pointer-events:none;;';
		els.setAttribute('style', hs);
		els.onload=function() {me._external_1.ggUpdatePosition();}
		el.appendChild(els);
		el.ggSubElement = els;
		hs ='';
		el.ggAltText="";
		el.ggScrollbars=false;
		el.ggUpdateText = function() {
			me._external_1.ggSubElement.setAttribute('alt', player._(me._external_1.ggAltText));
			me._external_1.ggUpdateImageTranslation();
		}
		el.ggSetImage = function(img) {
			me._external_1.ggText_untranslated = img;
			me._external_1.ggUpdateImageTranslation();
		}
		el.ggUpdateImage = function() {
			me._external_1.ggSubElement.style.width = '0px';
			me._external_1.ggSubElement.style.height = '0px';
			me._external_1.ggSubElement.src='';
			me._external_1.ggSubElement.src=me._external_1.ggText;
		}
		el.ggUpdateImageTranslation = function() {
			if (me._external_1.ggText != player._(me._external_1.ggText_untranslated)) {
				me._external_1.ggText = player._(me._external_1.ggText_untranslated);
				me._external_1.ggUpdateImage()
			}
		}
		if ((hotspot) && (hotspot.customimage)) {
			el.ggText=el.ggText_untranslated=hotspot.customimage;
			els.setAttribute('src', hotspot.customimage);
			els.style.width=hotspot.customimagewidth + 'px';
			els.style.height=hotspot.customimageheight + 'px';
			me.ggUse3d = hotspot.use3D;
			me.gg3dDistance = hotspot.distance3D;
		}
		els['ondragstart']=function() { return false; };
		player.checkLoaded.push(els);
		el.ggUpdateText();
		el.ggId="External 1";
		el.ggParameter={ rx:0,ry:0,a:0,sx:1,sy:1,def:'' };
		el.ggVisible=true;
		el.className="ggskin ggskin_external ";
		el.ggType='external';
		hs ='';
		hs+='border : 0px solid #000000;';
		hs+='cursor : default;';
		hs+='height : 20px;';
		hs+='left : 224px;';
		hs+='position : absolute;';
		hs+='top : 12px;';
		hs+='visibility : inherit;';
		hs+='width : 100px;';
		hs+='pointer-events:auto;';
		el.setAttribute('style',hs);
		el.style.transformOrigin='50% 50%';
		me._external_1.ggIsActive=function() {
			if ((this.parentNode) && (this.parentNode.ggIsActive)) {
				return this.parentNode.ggIsActive();
			}
			return false;
		}
		el.ggElementNodeId=function() {
			if ((this.parentNode) && (this.parentNode.ggElementNodeId)) {
				return this.parentNode.ggElementNodeId();
			}
			return me.ggNodeId;
		}
		me._external_1.ggUpdatePosition=function (useTransition) {
			var parentWidth = me._external_1.clientWidth;
			var parentHeight = me._external_1.clientHeight;
			var img = me._external_1__img;
			var aspectRatioDiv = me._external_1.clientWidth / me._external_1.clientHeight;
			var aspectRatioImg = img.naturalWidth / img.naturalHeight;
			if (img.naturalWidth < parentWidth) parentWidth = img.naturalWidth;
			if (img.naturalHeight < parentHeight) parentHeight = img.naturalHeight;
			var currentWidth,currentHeight;
			if ((hotspot) && (hotspot.customimage)) {
				currentWidth  = hotspot.customimagewidth;
				currentHeight = hotspot.customimageheight;
			}
			if (!me._external_1.ggScrollbars || currentWidth < me._external_1.clientWidth) {
				img.style.right='';
				img.style.left='0px';
			} else {
				img.style.right='';
				img.style.left='0px';
				img.style.marginLeft='0px';
			}
			if (!me._external_1.ggScrollbars || currentHeight < me._external_1.clientHeight) {
				img.style.bottom='';
				img.style.top='0px';
			} else {
				img.style.bottom='';
				img.style.top='0px';
				img.style.marginTop='0px';
			}
		}
		me._ht_node.appendChild(me._external_1);
		if ((hotspot) && (hotspot.customimage)) {
			me._external_1.style.width=hotspot.customimagewidth + 'px';
			me._external_1.style.height=hotspot.customimageheight + 'px';
		}
			me.__div = me._ht_node;
	};
	function SkinHotspotClass_info(parentScope,hotspot) {
		var me=this;
		var flag=false;
		var hs='';
		me.parentScope=parentScope;
		me.hotspot=hotspot;
		var nodeId=String(hotspot.url);
		nodeId=(nodeId.charAt(0)=='{')?nodeId.substr(1, nodeId.length - 2):''; // }
		me.ggUserdata=skin.player.getNodeUserdata(nodeId);
		me.elementMouseDown={};
		me.elementMouseOver={};
		me.findElements=function(id,regex) {
			return skin.findElements(id,regex);
		}
		el=me._info=document.createElement('div');
		el.ggId="info-\ub0c9\uc7a5\uace0";
		el.ggParameter={ rx:0,ry:0,a:0,sx:1,sy:1,def:'' };
		el.ggVisible=true;
		el.className="ggskin ggskin_hotspot ";
		el.ggType='hotspot';
		hs ='';
		hs+='height : 0px;';
		hs+='left : 34px;';
		hs+='position : absolute;';
		hs+='top : 23px;';
		hs+='visibility : inherit;';
		hs+='width : 0px;';
		hs+='pointer-events:auto;';
		el.setAttribute('style',hs);
		el.style.transformOrigin='50% 50%';
		me._info.ggIsActive=function() {
			return player.getCurrentNode()==this.ggElementNodeId();
		}
		el.ggElementNodeId=function() {
			if (me.hotspot.url!='' && me.hotspot.url.charAt(0)=='{') { // }
				return me.hotspot.url.substr(1, me.hotspot.url.length - 2);
			} else {
				if ((this.parentNode) && (this.parentNode.ggElementNodeId)) {
					return this.parentNode.ggElementNodeId();
				} else {
					return player.getCurrentNode();
				}
			}
		}
		me._info.onclick=function (e) {
			player.triggerEvent('hsproxyclick', {'id': me.hotspot.id, 'url': me.hotspot.url});
		}
		me._info.ondblclick=function (e) {
			player.triggerEvent('hsproxydblclick', {'id': me.hotspot.id, 'url': me.hotspot.url});
		}
		me._info.onmouseover=function (e) {
			player.setActiveHotspot(me.hotspot);
			me.elementMouseOver['info']=true;
			player.triggerEvent('hsproxyover', {'id': me.hotspot.id, 'url': me.hotspot.url});
		}
		me._info.onmouseout=function (e) {
			player.setActiveHotspot(null);
			me.elementMouseOver['info']=false;
			player.triggerEvent('hsproxyout', {'id': me.hotspot.id, 'url': me.hotspot.url});
		}
		me._info.ggUpdatePosition=function (useTransition) {
		}
		el=me._info_customimage=document.createElement('div');
		els=me._info_customimage__img=document.createElement('img');
		els.className='ggskin ggskin_external';
		hs ='';
		hs += 'position: absolute;-webkit-user-drag:none;pointer-events:none;;';
		els.setAttribute('style', hs);
		els.onload=function() {me._info_customimage.ggUpdatePosition();}
		el.appendChild(els);
		el.ggSubElement = els;
		hs ='';
		el.ggAltText="";
		el.ggScrollbars=false;
		el.ggUpdateText = function() {
			me._info_customimage.ggSubElement.setAttribute('alt', player._(me._info_customimage.ggAltText));
			me._info_customimage.ggUpdateImageTranslation();
		}
		el.ggSetImage = function(img) {
			me._info_customimage.ggText_untranslated = img;
			me._info_customimage.ggUpdateImageTranslation();
		}
		el.ggUpdateImage = function() {
			me._info_customimage.ggSubElement.style.width = '0px';
			me._info_customimage.ggSubElement.style.height = '0px';
			me._info_customimage.ggSubElement.src='';
			me._info_customimage.ggSubElement.src=me._info_customimage.ggText;
		}
		el.ggUpdateImageTranslation = function() {
			if (me._info_customimage.ggText != player._(me._info_customimage.ggText_untranslated)) {
				me._info_customimage.ggText = player._(me._info_customimage.ggText_untranslated);
				me._info_customimage.ggUpdateImage()
			}
		}
		if ((hotspot) && (hotspot.customimage)) {
			el.ggText=el.ggText_untranslated=hotspot.customimage;
			els.setAttribute('src', hotspot.customimage);
			els.style.width=hotspot.customimagewidth + 'px';
			els.style.height=hotspot.customimageheight + 'px';
			me.ggUse3d = hotspot.use3D;
			me.gg3dDistance = hotspot.distance3D;
		}
		els['ondragstart']=function() { return false; };
		player.checkLoaded.push(els);
		el.ggUpdateText();
		el.ggId="info-\ub0c9\uc7a5\uace0_CustomImage";
		el.ggDx=0;
		el.ggDy=0;
		el.ggParameter={ rx:0,ry:0,a:0,sx:1,sy:1,def:'' };
		el.ggVisible=true;
		el.className="ggskin ggskin_external ";
		el.ggType='external';
		hs ='';
		hs+='border : 0px solid #000000;';
		hs+='cursor : default;';
		hs+='height : 50px;';
		hs+='left : calc(50% - ((50px + 0px) / 2) + 0px);';
		hs+='position : absolute;';
		hs+='top : calc(50% - ((50px + 0px) / 2) + 0px);';
		hs+='visibility : inherit;';
		hs+='width : 50px;';
		hs+='pointer-events:auto;';
		el.setAttribute('style',hs);
		el.style.transformOrigin='50% 50%';
		me._info_customimage.ggIsActive=function() {
			if ((this.parentNode) && (this.parentNode.ggIsActive)) {
				return this.parentNode.ggIsActive();
			}
			return false;
		}
		el.ggElementNodeId=function() {
			if ((this.parentNode) && (this.parentNode.ggElementNodeId)) {
				return this.parentNode.ggElementNodeId();
			}
			return me.ggNodeId;
		}
		me._info_customimage.logicBlock_visible = function() {
			var newLogicStateVisible;
			if (
				((me.hotspot.customimage == ""))
			)
			{
				newLogicStateVisible = 0;
			}
			else {
				newLogicStateVisible = -1;
			}
			if (me._info_customimage.ggCurrentLogicStateVisible != newLogicStateVisible) {
				me._info_customimage.ggCurrentLogicStateVisible = newLogicStateVisible;
				me._info_customimage.style.transition='';
				if (me._info_customimage.ggCurrentLogicStateVisible == 0) {
					me._info_customimage.style.visibility="hidden";
					me._info_customimage.ggSubElement.src='';
					me._info_customimage.ggVisible=false;
				}
				else {
					me._info_customimage.style.visibility=(Number(me._info_customimage.style.opacity)>0||!me._info_customimage.style.opacity)?'inherit':'hidden';
					me._info_customimage.ggSubElement.src=me._info_customimage.ggText;
					me._info_customimage.ggVisible=true;
				}
			}
		}
		me._info_customimage.logicBlock_visible();
		me._info_customimage.onclick=function (e) {
			if (
				(
					((player.getViewerSize().width >= 460))
				)
			) {
				skin._infopopup.style.transition='none';
				skin._infopopup.style.visibility=(Number(skin._infopopup.style.opacity)>0||!skin._infopopup.style.opacity)?'inherit':'hidden';
				skin._infopopup.ggVisible=true;
			}
			if (
				(
					((player.getViewerSize().width <= 460))
				)
			) {
				skin._infopopupm.style.transition='none';
				skin._infopopupm.style.visibility=(Number(skin._infopopupm.style.opacity)>0||!skin._infopopupm.style.opacity)?'inherit':'hidden';
				skin._infopopupm.ggVisible=true;
			}
		}
		me._info_customimage.ggUpdatePosition=function (useTransition) {
			var parentWidth = me._info_customimage.clientWidth;
			var parentHeight = me._info_customimage.clientHeight;
			var img = me._info_customimage__img;
			var aspectRatioDiv = me._info_customimage.clientWidth / me._info_customimage.clientHeight;
			var aspectRatioImg = img.naturalWidth / img.naturalHeight;
			if (img.naturalWidth < parentWidth) parentWidth = img.naturalWidth;
			if (img.naturalHeight < parentHeight) parentHeight = img.naturalHeight;
			var currentWidth,currentHeight;
			if ((hotspot) && (hotspot.customimage)) {
				currentWidth  = hotspot.customimagewidth;
				currentHeight = hotspot.customimageheight;
			}
			if (!me._info_customimage.ggScrollbars || currentWidth < me._info_customimage.clientWidth) {
				img.style.right='';
				img.style.left='50%';
				img.style.marginLeft='-' + currentWidth/2 + 'px';
			} else {
				img.style.right='';
				img.style.left='0px';
				img.style.marginLeft='0px';
				me._info_customimage.scrollLeft=currentWidth / 2 - me._info_customimage.clientWidth / 2;
			}
			if (!me._info_customimage.ggScrollbars || currentHeight < me._info_customimage.clientHeight) {
				img.style.bottom='';
				img.style.top='50%';
				img.style.marginTop='-' + currentHeight/2 + 'px';
			} else {
				img.style.bottom='';
				img.style.top='0px';
				img.style.marginTop='0px';
				me._info_customimage.scrollTop=currentHeight / 2 - me._info_customimage.clientHeight / 2;
			}
		}
		me._info.appendChild(me._info_customimage);
		if ((hotspot) && (hotspot.customimage)) {
			me._info_customimage.style.width=hotspot.customimagewidth + 'px';
			me._info_customimage.style.height=hotspot.customimageheight + 'px';
			let d = 0;
			me._info_customimage.style.left='calc(50% - ' + ((hotspot.customimagewidth)/2 + 0) +'px' + ((d<0) ? ' - ' : ' + ') + d + 'px)';
			d = 0;
			me._info_customimage.style.top='calc(50% - ' + ((hotspot.customimageheight)/2 + 0) +'px' + ((d<0) ? ' - ' : ' + ') + d + 'px)';
		}
		me._info_customimage.logicBlock_visible();
			me.ggEvent_activehotspotchanged=function() {
				me._info_customimage.logicBlock_visible();
			};
			me.ggEvent_changenode=function() {
				me._info_customimage.logicBlock_visible();
			};
			me.ggEvent_configloaded=function() {
				me._info_customimage.logicBlock_visible();
			};
			me.ggEvent_hsproxyclick=function() {
				if (event.id=='info-냉장고') {
					me._info.onclick();
				}
			};
			me.ggEvent_hsproxydblclick=function() {
				if (event.id=='info-냉장고') {
					me._info.ondblclick();
				}
			};
			me.ggEvent_hsproxyout=function() {
				if (event.id=='info-냉장고') {
					me._info.onmouseout();
				}
			};
			me.ggEvent_hsproxyover=function() {
				if (event.id=='info-냉장고') {
					me._info.onmouseover();
				}
			};
			me.__div = me._info;
	};
	me.addSkinHotspot=function(hotspot) {
		var hsinst = null;
			if (hotspot.skinid=='info-냉장고') {
				hotspot.skinid = 'info-냉장고';
				hsinst = new SkinHotspotClass_info(me, hotspot);
			if (!hotspotTemplates.hasOwnProperty(hotspot.skinid)) {
				hotspotTemplates[hotspot.skinid] = [];
			}
			hotspotTemplates[hotspot.skinid].push(hsinst);
		} else
			if (hotspot.skinid=='ht_node') {
				hotspot.skinid = 'ht_node';
				hsinst = new SkinHotspotClass_ht_node(me, hotspot);
			if (!hotspotTemplates.hasOwnProperty(hotspot.skinid)) {
				hotspotTemplates[hotspot.skinid] = [];
			}
			hotspotTemplates[hotspot.skinid].push(hsinst);
		} else
		{
				hotspot.skinid = '에어컨';
				hsinst = new SkinHotspotClass__(me, hotspot);
			if (!hotspotTemplates.hasOwnProperty(hotspot.skinid)) {
				hotspotTemplates[hotspot.skinid] = [];
			}
			hotspotTemplates[hotspot.skinid].push(hsinst);
		}
		return hsinst;
	}
	me.removeSkinHotspots=function() {
		hotspotTemplates = {};
	}
	player.addListener('hotspotsremoved',function() {
			me.removeSkinHotspots();
	});
	player.addListener('changenode', function() {
		me.ggUserdata=player.userdata;
		var newMarker=[];
		var id=player.getCurrentNode();
		var i,j;
		var tags=me.ggUserdata.tags;
		for (i=0;i<nodeMarker.length;i++) {
			var match=false;
			if ((nodeMarker[i].ggMarkerNodeId.length > 0) && (nodeMarker[i].ggMarkerNodeId.charAt(0)=='{') && (nodeMarker[i].ggMarkerNodeId.substr(1, nodeMarker[i].ggMarkerNodeId.length - 2)==id) && (id!='')) match=true;
			for(j=0;j<tags.length;j++) {
				if (nodeMarker[i].ggMarkerNodeId==tags[j]) match=true;
			}
			if (match) {
				newMarker.push(nodeMarker[i]);
			}
		}
		for(i=0;i<activeNodeMarker.length;i++) {
			if (newMarker.indexOf(activeNodeMarker[i])<0) {
				if (activeNodeMarker[i].ggMarkerNormal) {
					activeNodeMarker[i].ggMarkerNormal.style.visibility='inherit';
				}
				if (activeNodeMarker[i].ggMarkerActive) {
					activeNodeMarker[i].ggMarkerActive.style.visibility='hidden';
				}
				if (activeNodeMarker[i].ggDeactivate) {
					activeNodeMarker[i].ggDeactivate();
				}
				activeNodeMarker[i].ggIsMarkerActive=false;
			}
		}
		for(i=0;i<newMarker.length;i++) {
			if (activeNodeMarker.indexOf(newMarker[i])<0) {
				if (newMarker[i].ggMarkerNormal) {
					newMarker[i].ggMarkerNormal.style.visibility='hidden';
				}
				if (newMarker[i].ggMarkerActive) {
					newMarker[i].ggMarkerActive.style.visibility='inherit';
				}
				if (newMarker[i].ggActivate) {
					newMarker[i].ggActivate();
				}
				newMarker[i].ggIsMarkerActive=true;
			}
		}
		activeNodeMarker=newMarker;
	});
	me.skinTimerEvent=function() {
		if (player.isInVR()) return;
		me.ggCurrentTime=new Date().getTime();
		me.__79.ggUpdateConditionTimer();
		me._timer_1.ggUpdateConditionTimer();
		if (me._timer_1.ggLastIsActive!=me._timer_1.ggIsActive()) {
			me._timer_1.ggLastIsActive=me._timer_1.ggIsActive();
			if (me._timer_1.ggLastIsActive) {
				me.__80.style.transition='none';
				me.__80.style.visibility='hidden';
				me.__80.ggVisible=false;
			} else {
			}
		}
		me.__75.ggUpdateConditionTimer();
		me.__74.ggUpdateConditionTimer();
		if (me.__74.ggLastIsActive!=me.__74.ggIsActive()) {
			me.__74.ggLastIsActive=me.__74.ggIsActive();
			if (me.__74.ggLastIsActive) {
				me.__76.style.transition='none';
				me.__76.style.visibility='hidden';
				me.__76.ggVisible=false;
			} else {
			}
		}
		me.__70.ggUpdateConditionTimer();
		me.__69.ggUpdateConditionTimer();
		if (me.__69.ggLastIsActive!=me.__69.ggIsActive()) {
			me.__69.ggLastIsActive=me.__69.ggIsActive();
			if (me.__69.ggLastIsActive) {
				me.__71.style.transition='none';
				me.__71.style.visibility='hidden';
				me.__71.ggVisible=false;
			} else {
			}
		}
		me._onoff.ggUpdateConditionTimer();
		me.__67.ggUpdateConditionTimer();
		if (me.__67.ggLastIsActive!=me.__67.ggIsActive()) {
			me.__67.ggLastIsActive=me.__67.ggIsActive();
			if (me.__67.ggLastIsActive) {
				me.__68.style.transition='none';
				me.__68.style.visibility='hidden';
				me.__68.ggVisible=false;
			} else {
			}
		}
		me.__63.ggUpdateConditionTimer();
		me.__62.ggUpdateConditionTimer();
		if (me.__62.ggLastIsActive!=me.__62.ggIsActive()) {
			me.__62.ggLastIsActive=me.__62.ggIsActive();
			if (me.__62.ggLastIsActive) {
				me.__64.style.transition='none';
				me.__64.style.visibility='hidden';
				me.__64.ggVisible=false;
			} else {
			}
		}
		me.__58.ggUpdateConditionTimer();
		me.__57.ggUpdateConditionTimer();
		if (me.__57.ggLastIsActive!=me.__57.ggIsActive()) {
			me.__57.ggLastIsActive=me.__57.ggIsActive();
			if (me.__57.ggLastIsActive) {
				me.__59.style.transition='none';
				me.__59.style.visibility='hidden';
				me.__59.ggVisible=false;
			} else {
			}
		}
		me.__53.ggUpdateConditionTimer();
		me.__52.ggUpdateConditionTimer();
		if (me.__52.ggLastIsActive!=me.__52.ggIsActive()) {
			me.__52.ggLastIsActive=me.__52.ggIsActive();
			if (me.__52.ggLastIsActive) {
				me.__55.style.transition='none';
				me.__55.style.visibility='hidden';
				me.__55.ggVisible=false;
			} else {
			}
		}
		me.__48.ggUpdateConditionTimer();
		me.__47.ggUpdateConditionTimer();
		if (me.__47.ggLastIsActive!=me.__47.ggIsActive()) {
			me.__47.ggLastIsActive=me.__47.ggIsActive();
			if (me.__47.ggLastIsActive) {
				me.__49.style.transition='none';
				me.__49.style.visibility='hidden';
				me.__49.ggVisible=false;
			} else {
			}
		}
		me.__35.ggUpdateConditionTimer();
		me.__36.ggUpdateConditionTimer();
		if (me.__36.ggLastIsActive!=me.__36.ggIsActive()) {
			me.__36.ggLastIsActive=me.__36.ggIsActive();
			if (me.__36.ggLastIsActive) {
				me.__37.style.transition='none';
				me.__37.style.visibility='hidden';
				me.__37.ggVisible=false;
			} else {
			}
		}
		for (const id in hotspotTemplates) {
			const tmpl=hotspotTemplates[id];
			tmpl.forEach(function(hotspot) {
				if (hotspot.hotspotTimerEvent) {
					hotspot.hotspotTimerEvent();
				}
			});
		};
	};
	player.addListener('timer', me.skinTimerEvent);
	me.addSkin();
	var style = document.createElement('style');
	style.type = 'text/css';
	style.appendChild(document.createTextNode('.ggskin { font-family: Verdana, Arial, Helvetica, sans-serif; font-size: 14px; line-height: normal; } .ggmarkdown p,.ggmarkdown h1,.ggmarkdown h2,.ggmarkdown h3,.ggmarkdown h4 { margin-top: 0px } .ggmarkdown { white-space:normal }'));
	document.head.appendChild(style);
	document.addEventListener('keyup', function(e) {
		if (e.key === 'Enter' || e.key === ' ') {
			let activeElement = document.activeElement;
			if (activeElement.classList.contains('ggskin') && activeElement.onclick) activeElement.onclick();
		}
	});
	document.addEventListener('keydown', function(e) {
		if (e.key === 'Enter' || e.key === ' ') {
			let activeElement = document.activeElement;
			if (activeElement.classList.contains('ggskin') && activeElement.onmousedown) activeElement.onmousedown();
		}
	});
	document.addEventListener('keyup', function(e) {
		if (e.key === 'Enter' || e.key === ' ') {
			let activeElement = document.activeElement;
			if (activeElement.classList.contains('ggskin') && activeElement.onmouseup) activeElement.onmouseup();
		}
	});
	me.skinTimerEvent();
	document.fonts.onloadingdone = () => {
		me.updateSize(me.divSkin);
	}
};