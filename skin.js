// Garden Gnome Software - Skin
// Pano2VR 7.0.8/20017
// Filename: ???? ??? ?? ??.ggsk
// Generated 2023-12-27T18:09:23

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
	player.addVariable('vis_foot', 2, false, { ignoreInState: 0  });
	player.addVariable('vis_foot2', 2, false, { ignoreInState: 0  });
	player.addVariable('vis_footprint', 2, false, { ignoreInState: 0 , customProperty: { variableType: 2, propertyType: 1, defaultValue: false } });
	player.addVariable('vis_footprint_no', 2, false, { ignoreInState: 0 , customProperty: { variableType: 2, propertyType: 0, defaultValue: false } });
	player.addVariable('vis_direction', 2, false, { ignoreInState: 0  });
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
		el=me.__108=document.createElement('div');
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
		me.__108.ggIsActive=function() {
			return false;
		}
		el.ggElementNodeId=function() {
			return player.getCurrentNode();
		}
		me.__108.logicBlock_position = function() {
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
			if (me.__108.ggCurrentLogicStatePosition != newLogicStatePosition) {
				me.__108.ggCurrentLogicStatePosition = newLogicStatePosition;
				me.__108.style.transition='right 500ms ease 0ms, bottom 500ms ease 0ms';
				if (me.__108.ggCurrentLogicStatePosition == 0) {
					me.__108.style.right='0px';
					me.__108.style.bottom='0%';
				}
				else {
					me.__108.style.right='0px';
					me.__108.style.bottom='-100%';
				}
			}
		}
		me.__108.logicBlock_position();
		me.__108.ggUpdatePosition=function (useTransition) {
		}
		el=me.__119=document.createElement('div');
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
		me.__119.ggIsActive=function() {
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
		me.__119.ggUpdatePosition=function (useTransition) {
		}
		me.__108.appendChild(me.__119);
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
		el=me.__109=document.createElement('div');
		el.isDragging = function() {
			let scrollerParent = me.__109;
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
		me.__109.ggIsActive=function() {
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
		me.__109.logicBlock_visible = function() {
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
			if (me.__109.ggCurrentLogicStateVisible != newLogicStateVisible) {
				me.__109.ggCurrentLogicStateVisible = newLogicStateVisible;
				me.__109.style.transition='';
				if (me.__109.ggCurrentLogicStateVisible == 0) {
					me.__109.style.visibility=(Number(me.__109.style.opacity)>0||!me.__109.style.opacity)?'inherit':'hidden';
					me.__109.ggVisible=true;
				}
				else {
					me.__109.style.visibility="hidden";
					me.__109.ggVisible=false;
				}
			}
		}
		me.__109.logicBlock_visible();
		me.__109.ggUpdatePosition=function (useTransition) {
		}
		el=me.__117=document.createElement('div');
		el.isDragging = function() {
			let scrollerParent = me.__117;
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
			if(me.__117.ggUpdating == true) return;
			me.__117.ggUpdating = true;
			var el=me.__117;
			var curNumRows = 0;
			curNumRows = me.__117.ggNumRepeat;
			if (curNumRows < 1) curNumRows = 1;
			if (typeof filter=='object') {
				el.ggFilter = filter;
			} else {
				filter = el.ggFilter;
			};
			if (me.ggTag) filter.push(me.ggTag);
			filter=filter.sort();
			if ((el.ggNumRows == curNumRows) && (el.ggInstances.length > 0) && (filter.length === el.ggCurrentFilter.length) && (filter.every(function(value, index) { return value === el.ggCurrentFilter[index] }) )) {
				me.__117.ggUpdating = false;
				return;
			} else {
				el.ggNumCols = 1;
				el.ggNumRows = curNumRows;
			var centerOffsetHor = 0;
			var centerOffsetVert = 0;
				me.__117.ggCloneOffsetChanged = false;
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
			tourNodes = me.__117.getFilteredNodes(tourNodes, filter);
			me.__117.ggNumFilterPassed = tourNodes.length;
			for (var i = 0; i < tourNodes.length; i++) {
				var nodeId = tourNodes[i];
				var nodeData = player.getNodeUserdata(nodeId);
				if (!keepCloning || i < me.__117.ggCloneOffset) continue;
				var parameter={};
				parameter.top = centerOffsetVert + (row * me.__117.ggHeight) + 'px';
				parameter.left = centerOffsetHor + (column * me.__117.ggWidth) + 'px';
				parameter.width=me.__117.ggWidth + 'px';
				parameter.height=me.__117.ggHeight + 'px';
				parameter.index=currentIndex;
				parameter.title=nodeData['title'];
				var inst = new SkinCloner__117_Class(nodeId, me, el, parameter);
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
			me.__117.ggNodeCount = me.__117.ggNumFilterPassed;
			me.__117.ggUpdating = false;
			player.triggerEvent('clonerchanged');
			if (me.__117.parentNode && me.__117.parentNode.classList.contains('ggskin_subelement') && me.__117.parentNode.parentNode.classList.contains('ggskin_scrollarea')) me.__117.parentNode.parentNode.ggUpdatePosition();
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
		me.__117.ggIsActive=function() {
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
		me.__117.logicBlock_size = function() {
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
			if (me.__117.ggCurrentLogicStateSize != newLogicStateSize) {
				me.__117.ggCurrentLogicStateSize = newLogicStateSize;
				me.__117.style.transition='width 0s, height 0s';
				if (me.__117.ggCurrentLogicStateSize == 0) {
					me.__117.ggWidth=100;
					me.__117.ggHeight=150;
					me.__117.ggUpdate();
					skin.updateSize(me.__117);
				}
				else {
					me.__117.ggWidth=150;
					me.__117.ggHeight=180;
					me.__117.ggUpdate();
					skin.updateSize(me.__117);
				}
			}
		}
		me.__117.logicBlock_size();
		me.__117.logicBlock_visible = function() {
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
			if (me.__117.ggCurrentLogicStateVisible != newLogicStateVisible) {
				me.__117.ggCurrentLogicStateVisible = newLogicStateVisible;
				me.__117.style.transition='width 0s, height 0s';
				if (me.__117.ggCurrentLogicStateVisible == 0) {
					me.__117.style.visibility=(Number(me.__117.style.opacity)>0||!me.__117.style.opacity)?'inherit':'hidden';
					me.__117.ggVisible=true;
				}
				else {
					me.__117.style.visibility="hidden";
					me.__117.ggVisible=false;
				}
			}
		}
		me.__117.logicBlock_visible();
		me.__117.ggCurrentLogicStateSize = -1;
		me.__117.ggCurrentLogicStateVisible = -1;
		me.__117.ggUpdateConditionNodeChange=function () {
			var cnode=player.getCurrentNode();
			for(var i=0; i<me.__117.childNodes.length; i++) {
				var child=me.__117.childNodes[i];
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
		me.__117.ggUpdatePosition=function (useTransition) {
			me.__117.ggUpdate();
		}
		me.__109.appendChild(me.__117);
		el=me.__115=document.createElement('div');
		el.isDragging = function() {
			let scrollerParent = me.__115;
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
			if(me.__115.ggUpdating == true) return;
			me.__115.ggUpdating = true;
			var el=me.__115;
			var curNumRows = 0;
			curNumRows = me.__115.ggNumRepeat;
			if (curNumRows < 1) curNumRows = 1;
			if (typeof filter=='object') {
				el.ggFilter = filter;
			} else {
				filter = el.ggFilter;
			};
			if (me.ggTag) filter.push(me.ggTag);
			filter=filter.sort();
			if ((el.ggNumRows == curNumRows) && (el.ggInstances.length > 0) && (filter.length === el.ggCurrentFilter.length) && (filter.every(function(value, index) { return value === el.ggCurrentFilter[index] }) )) {
				me.__115.ggUpdating = false;
				return;
			} else {
				el.ggNumCols = 1;
				el.ggNumRows = curNumRows;
			var centerOffsetHor = 0;
			var centerOffsetVert = 0;
				me.__115.ggCloneOffsetChanged = false;
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
			tourNodes = me.__115.getFilteredNodes(tourNodes, filter);
			me.__115.ggNumFilterPassed = tourNodes.length;
			for (var i = 0; i < tourNodes.length; i++) {
				var nodeId = tourNodes[i];
				var nodeData = player.getNodeUserdata(nodeId);
				if (!keepCloning || i < me.__115.ggCloneOffset) continue;
				var parameter={};
				parameter.top = centerOffsetVert + (row * me.__115.ggHeight) + 'px';
				parameter.left = centerOffsetHor + (column * me.__115.ggWidth) + 'px';
				parameter.width=me.__115.ggWidth + 'px';
				parameter.height=me.__115.ggHeight + 'px';
				parameter.index=currentIndex;
				parameter.title=nodeData['title'];
				var inst = new SkinCloner__115_Class(nodeId, me, el, parameter);
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
			me.__115.ggNodeCount = me.__115.ggNumFilterPassed;
			me.__115.ggUpdating = false;
			player.triggerEvent('clonerchanged');
			if (me.__115.parentNode && me.__115.parentNode.classList.contains('ggskin_subelement') && me.__115.parentNode.parentNode.classList.contains('ggskin_scrollarea')) me.__115.parentNode.parentNode.ggUpdatePosition();
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
		me.__115.ggIsActive=function() {
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
		me.__115.logicBlock_size = function() {
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
			if (me.__115.ggCurrentLogicStateSize != newLogicStateSize) {
				me.__115.ggCurrentLogicStateSize = newLogicStateSize;
				me.__115.style.transition='width 0s, height 0s';
				if (me.__115.ggCurrentLogicStateSize == 0) {
					me.__115.ggWidth=100;
					me.__115.ggHeight=150;
					me.__115.ggUpdate();
					skin.updateSize(me.__115);
				}
				else {
					me.__115.ggWidth=150;
					me.__115.ggHeight=200;
					me.__115.ggUpdate();
					skin.updateSize(me.__115);
				}
			}
		}
		me.__115.logicBlock_size();
		me.__115.logicBlock_visible = function() {
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
			if (me.__115.ggCurrentLogicStateVisible != newLogicStateVisible) {
				me.__115.ggCurrentLogicStateVisible = newLogicStateVisible;
				me.__115.style.transition='width 0s, height 0s';
				if (me.__115.ggCurrentLogicStateVisible == 0) {
					me.__115.style.visibility=(Number(me.__115.style.opacity)>0||!me.__115.style.opacity)?'inherit':'hidden';
					me.__115.ggVisible=true;
				}
				else {
					me.__115.style.visibility="hidden";
					me.__115.ggVisible=false;
				}
			}
		}
		me.__115.logicBlock_visible();
		me.__115.ggCurrentLogicStateSize = -1;
		me.__115.ggCurrentLogicStateVisible = -1;
		me.__115.ggUpdateConditionNodeChange=function () {
			var cnode=player.getCurrentNode();
			for(var i=0; i<me.__115.childNodes.length; i++) {
				var child=me.__115.childNodes[i];
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
		me.__115.ggUpdatePosition=function (useTransition) {
			me.__115.ggUpdate();
		}
		me.__109.appendChild(me.__115);
		me._scrollarea_1__content.appendChild(me.__109);
		me.__108.appendChild(me._scrollarea_1);
		me.divSkin.appendChild(me.__108);
		el=me.__68=document.createElement('div');
		el.ggId="\uc0ac\uc774\ub4dc\ubc14";
		el.ggDy=0;
		el.ggParameter={ rx:0,ry:0,a:0,sx:1,sy:1,def:'' };
		el.ggVisible=true;
		el.className="ggskin ggskin_container ";
		el.ggType='container';
		hs ='';
		hs+='height : 483px;';
		hs+='position : absolute;';
		hs+='right : 15px;';
		hs+='top : calc(50% - ((483px + 0px) / 2) + 0px);';
		hs+='visibility : inherit;';
		hs+='width : 55px;';
		hs+='pointer-events:none;';
		el.setAttribute('style',hs);
		el.style.transformOrigin='50% 50%';
		me.__68.ggIsActive=function() {
			return false;
		}
		el.ggElementNodeId=function() {
			return player.getCurrentNode();
		}
		me.__68.logicBlock_position = function() {
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
			if (me.__68.ggCurrentLogicStatePosition != newLogicStatePosition) {
				me.__68.ggCurrentLogicStatePosition = newLogicStatePosition;
				me.__68.style.transition='right 0s, top 0s, transform 0s';
				if (me.__68.ggCurrentLogicStatePosition == 0) {
					me.__68.style.right='2px';
					me.__68.style.top = 'calc(50% - (483px / 2) + (0px / 2) + 5px)';
				}
				else {
					me.__68.style.right='15px';
					me.__68.style.top='calc(50% - ((483px + 0px) / 2) + 0px)';
				}
			}
		}
		me.__68.logicBlock_position();
		me.__68.logicBlock_scaling = function() {
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
			if (me.__68.ggCurrentLogicStateScaling != newLogicStateScaling) {
				me.__68.ggCurrentLogicStateScaling = newLogicStateScaling;
				me.__68.style.transition='right 0s, top 0s, transform 0s';
				if (me.__68.ggCurrentLogicStateScaling == 0) {
					me.__68.ggParameter.sx = 0.75;
					me.__68.ggParameter.sy = 0.7;
					me.__68.style.transform=parameterToTransform(me.__68.ggParameter);
					skin.updateSize(me.__68);
				}
				else {
					me.__68.ggParameter.sx = 1;
					me.__68.ggParameter.sy = 1;
					me.__68.style.transform=parameterToTransform(me.__68.ggParameter);
					skin.updateSize(me.__68);
				}
			}
		}
		me.__68.logicBlock_scaling();
		me.__68.ggUpdatePosition=function (useTransition) {
		}
		el=me._rectangle_2=document.createElement('div');
		el.ggId="Rectangle 2";
		el.ggDy=0;
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
		hs+='top : calc(50% - ((100% + 0px) / 2) + 0px);';
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
					me._rectangle_2.style.top = 'calc(50% - (0% / 2))';
					setTimeout(function() {skin.updateSize(me._rectangle_2);}, 550);
				}
				else {
					me._rectangle_2.style.width='100%';
					me._rectangle_2.style.height='100%';
					me._rectangle_2.style.top = 'calc(50% - (100% / 2))';
					setTimeout(function() {skin.updateSize(me._rectangle_2);}, 550);
				}
			}
		}
		me._rectangle_2.logicBlock_size();
		me._rectangle_2.ggUpdatePosition=function (useTransition) {
		}
		el=me.__71=document.createElement('div');
		el.ggId="\uc544\uc774\ucf58\ubc15\uc2a4";
		el.ggParameter={ rx:0,ry:0,a:0,sx:1,sy:1,def:'' };
		el.ggVisible=true;
		el.className="ggskin ggskin_container ";
		el.ggType='container';
		hs ='';
		hs+='height : 100%;';
		hs+='left : 0px;';
		hs+='position : absolute;';
		hs+='top : 0px;';
		hs+='visibility : inherit;';
		hs+='width : 100%;';
		hs+='pointer-events:none;';
		el.setAttribute('style',hs);
		el.style.transformOrigin='50% 50%';
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
		el=me.__105=document.createElement('div');
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
		hs+='top : 10px;';
		hs+='visibility : inherit;';
		hs+='width : 43px;';
		hs+='pointer-events:none;';
		el.setAttribute('style',hs);
		el.style.transformOrigin='50% 50%';
		me.__105.ggIsActive=function() {
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
		me.__105.logicBlock_visible = function() {
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
			if (me.__105.ggCurrentLogicStateVisible != newLogicStateVisible) {
				me.__105.ggCurrentLogicStateVisible = newLogicStateVisible;
				me.__105.style.transition='';
				if (me.__105.ggCurrentLogicStateVisible == 0) {
					me.__105.style.visibility="hidden";
					me.__105.ggVisible=false;
				}
				else if (me.__105.ggCurrentLogicStateVisible == 1) {
					me.__105.style.visibility="hidden";
					me.__105.ggVisible=false;
				}
				else {
					me.__105.style.visibility=(Number(me.__105.style.opacity)>0||!me.__105.style.opacity)?'inherit':'hidden';
					me.__105.ggVisible=true;
				}
			}
		}
		me.__105.logicBlock_visible();
		me.__105.onclick=function (e) {
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
				me.__54.style.transition='none';
				me.__54.style.visibility='hidden';
				me.__54.ggVisible=false;
			}
		}
		me.__105.onmouseover=function (e) {
			me.elementMouseOver['_105']=true;
		}
		me.__105.onmousemove=function (e) {
			me.__106.style.transition='none';
			me.__106.style.visibility=(Number(me.__106.style.opacity)>0||!me.__106.style.opacity)?'inherit':'hidden';
			me.__106.ggVisible=true;
		}
		me.__105.onmouseout=function (e) {
			me.elementMouseOver['_105']=false;
		}
		me.__105.ggCurrentLogicStateVisible = -1;
		me.__105.ggUpdateConditionTimer=function () {
			if (me.elementMouseOver['_105']) {
				me.__106.style.transition='none';
				me.__106.style.visibility=(Number(me.__106.style.opacity)>0||!me.__106.style.opacity)?'inherit':'hidden';
				me.__106.ggVisible=true;
			}
		}
		me.__105.ggUpdatePosition=function (useTransition) {
		}
		el=me.__215=document.createElement('div');
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
		me.__215.ggIsActive=function() {
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
		me.__215.logicBlock_visible = function() {
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
			if (me.__215.ggCurrentLogicStateVisible != newLogicStateVisible) {
				me.__215.ggCurrentLogicStateVisible = newLogicStateVisible;
				me.__215.style.transition='';
				if (me.__215.ggCurrentLogicStateVisible == 0) {
					me.__215.style.visibility=(Number(me.__215.style.opacity)>0||!me.__215.style.opacity)?'inherit':'hidden';
					me.__215.ggVisible=true;
				}
				else {
					me.__215.style.visibility="hidden";
					me.__215.ggVisible=false;
				}
			}
		}
		me.__215.logicBlock_visible();
		me.__215.ggUpdatePosition=function (useTransition) {
		}
		me.__105.appendChild(me.__215);
		el=me.__107=document.createElement('div');
		els=me.__107__img=document.createElement('img');
		els.className='ggskin ggskin__107';
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
		me.__107.ggIsActive=function() {
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
		me.__107.ggUpdatePosition=function (useTransition) {
		}
		me.__105.appendChild(me.__107);
		el=me.__106=document.createElement('div');
		els=me.__106__text=document.createElement('div');
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
		me.__106.ggUpdateText=function() {
			var params = [];
			var hs = player._("\uacf5\uac04\uc120\ud0dd", params);
			if (hs!=this.ggText) {
				this.ggText=hs;
				this.ggTextDiv.innerHTML=hs;
				if (this.ggUpdatePosition) this.ggUpdatePosition();
			}
		}
		me.__106.ggUpdateText();
		el.appendChild(els);
		me.__106.ggIsActive=function() {
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
		me.__106.logicBlock_visible = function() {
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
			if (me.__106.ggCurrentLogicStateVisible != newLogicStateVisible) {
				me.__106.ggCurrentLogicStateVisible = newLogicStateVisible;
				me.__106.style.transition='';
				if (me.__106.ggCurrentLogicStateVisible == 0) {
					me.__106.style.visibility=(Number(me.__106.style.opacity)>0||!me.__106.style.opacity)?'inherit':'hidden';
					me.__106.ggVisible=true;
				}
				else {
					me.__106.style.visibility="hidden";
					me.__106.ggVisible=false;
				}
			}
		}
		me.__106.logicBlock_visible();
		me.__106.ggUpdatePosition=function (useTransition) {
		}
		me.__105.appendChild(me.__106);
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
			me.__106.style.transition='none';
			me.__106.style.visibility='hidden';
			me.__106.ggVisible=false;
		}
		me._timer_1.ggCurrentLogicStateVisible = -1;
		me._timer_1.ggUpdateConditionTimer=function () {
			me._timer_1.logicBlock_visible();
		}
		me._timer_1.ggUpdatePosition=function (useTransition) {
		}
		me.__105.appendChild(me._timer_1);
		me.__71.appendChild(me.__105);
		el=me.__101=document.createElement('div');
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
		hs+='top : 63px;';
		hs+='visibility : inherit;';
		hs+='width : 43px;';
		hs+='pointer-events:none;';
		el.setAttribute('style',hs);
		el.style.transformOrigin='50% 50%';
		me.__101.ggIsActive=function() {
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
		me.__101.logicBlock_visible = function() {
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
			if (me.__101.ggCurrentLogicStateVisible != newLogicStateVisible) {
				me.__101.ggCurrentLogicStateVisible = newLogicStateVisible;
				me.__101.style.transition='';
				if (me.__101.ggCurrentLogicStateVisible == 0) {
					me.__101.style.visibility="hidden";
					me.__101.ggVisible=false;
				}
				else if (me.__101.ggCurrentLogicStateVisible == 1) {
					me.__101.style.visibility="hidden";
					me.__101.ggVisible=false;
				}
				else {
					me.__101.style.visibility=(Number(me.__101.style.opacity)>0||!me.__101.style.opacity)?'inherit':'hidden';
					me.__101.ggVisible=true;
				}
			}
		}
		me.__101.logicBlock_visible();
		me.__101.onclick=function (e) {
			if (
				(
					((player.getViewerSize().width > 460))
				)
			) {
				me.__57.ggVisible = !me.__57.ggVisible;
				var flag=me.__57.ggVisible;
				me.__57.style.transition='none';
				me.__57.style.visibility=((flag)&&(Number(me.__57.style.opacity)>0||!me.__57.style.opacity))?'inherit':'hidden';
			}
			me.__104.ggVisible = !me.__104.ggVisible;
			var flag=me.__104.ggVisible;
			me.__104.style.transition='none';
			me.__104.style.visibility=((flag)&&(Number(me.__104.style.opacity)>0||!me.__104.style.opacity))?'inherit':'hidden';
			if (
				(
					((player.getViewerSize().width <= 460))
				)
			||
				(
					((player.getIsMobile() == true))
				)
			) {
				player.setVariableValue('vis_mobilemap', false);
			}
			me.__33.style.transition='none';
			me.__33.style.visibility='hidden';
			me.__33.ggVisible=false;
			me.__54.ggVisible = !me.__54.ggVisible;
			var flag=me.__54.ggVisible;
			me.__54.style.transition='none';
			me.__54.style.visibility=((flag)&&(Number(me.__54.style.opacity)>0||!me.__54.style.opacity))?'inherit':'hidden';
			player.setVariableValue('vis_roomchoice', false);
		}
		me.__101.onmouseover=function (e) {
			me.elementMouseOver['_101']=true;
		}
		me.__101.onmousemove=function (e) {
			me.__102.style.transition='none';
			me.__102.style.visibility=(Number(me.__102.style.opacity)>0||!me.__102.style.opacity)?'inherit':'hidden';
			me.__102.ggVisible=true;
		}
		me.__101.onmouseout=function (e) {
			me.elementMouseOver['_101']=false;
		}
		me.__101.ggCurrentLogicStateVisible = -1;
		me.__101.ggUpdateConditionTimer=function () {
			if (me.elementMouseOver['_101']) {
				me.__102.style.transition='none';
				me.__102.style.visibility=(Number(me.__102.style.opacity)>0||!me.__102.style.opacity)?'inherit':'hidden';
				me.__102.ggVisible=true;
			}
		}
		me.__101.ggUpdatePosition=function (useTransition) {
		}
		el=me.__104=document.createElement('div');
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
		me.__104.ggIsActive=function() {
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
		me.__104.ggUpdatePosition=function (useTransition) {
		}
		me.__101.appendChild(me.__104);
		el=me.__103=document.createElement('div');
		els=me.__103__img=document.createElement('img');
		els.className='ggskin ggskin__103';
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
		me.__103.ggIsActive=function() {
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
		me.__103.ggUpdatePosition=function (useTransition) {
		}
		me.__101.appendChild(me.__103);
		el=me.__102=document.createElement('div');
		els=me.__102__text=document.createElement('div');
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
		me.__102.ggUpdateText=function() {
			var params = [];
			var hs = player._("\ud3c9\uba74\ubcf4\uae30", params);
			if (hs!=this.ggText) {
				this.ggText=hs;
				this.ggTextDiv.innerHTML=hs;
				if (this.ggUpdatePosition) this.ggUpdatePosition();
			}
		}
		me.__102.ggUpdateText();
		el.appendChild(els);
		me.__102.ggIsActive=function() {
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
		me.__102.ggUpdatePosition=function (useTransition) {
		}
		me.__101.appendChild(me.__102);
		me.__71.appendChild(me.__101);
		el=me.__100=document.createElement('div');
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
		me.__100.ggIsActive=function() {
			return (me.__100.ggTimestamp==0 ? false : (Math.floor((skin.ggCurrentTime - me.__100.ggTimestamp) / me.__100.ggTimeout) % 2 == 0));
		}
		el.ggElementNodeId=function() {
			if ((this.parentNode) && (this.parentNode.ggElementNodeId)) {
				return this.parentNode.ggElementNodeId();
			}
			return player.getCurrentNode();
		}
		me.__100.logicBlock_visible = function() {
			var newLogicStateVisible;
			if (
				((me.__100.ggIsActive() == true))
			)
			{
				newLogicStateVisible = 0;
			}
			else {
				newLogicStateVisible = -1;
			}
			if (me.__100.ggCurrentLogicStateVisible != newLogicStateVisible) {
				me.__100.ggCurrentLogicStateVisible = newLogicStateVisible;
				me.__100.style.transition='';
				if (me.__100.ggCurrentLogicStateVisible == 0) {
					me.__100.style.visibility=(Number(me.__100.style.opacity)>0||!me.__100.style.opacity)?'inherit':'hidden';
					me.__100.ggVisible=true;
				}
				else {
					me.__100.style.visibility=(Number(me.__100.style.opacity)>0||!me.__100.style.opacity)?'inherit':'hidden';
					me.__100.ggVisible=true;
				}
			}
		}
		me.__100.logicBlock_visible();
		me.__100.ggActivate=function () {
			me.__102.style.transition='none';
			me.__102.style.visibility='hidden';
			me.__102.ggVisible=false;
		}
		me.__100.ggCurrentLogicStateVisible = -1;
		me.__100.ggUpdateConditionTimer=function () {
			me.__100.logicBlock_visible();
		}
		me.__100.ggUpdatePosition=function (useTransition) {
		}
		me.__71.appendChild(me.__100);
		el=me.__96=document.createElement('div');
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
		hs+='top : 166px;';
		hs+='visibility : inherit;';
		hs+='width : 43px;';
		hs+='pointer-events:none;';
		el.setAttribute('style',hs);
		el.style.transformOrigin='50% 50%';
		me.__96.ggIsActive=function() {
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
		me.__96.logicBlock_visible = function() {
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
			if (me.__96.ggCurrentLogicStateVisible != newLogicStateVisible) {
				me.__96.ggCurrentLogicStateVisible = newLogicStateVisible;
				me.__96.style.transition='';
				if (me.__96.ggCurrentLogicStateVisible == 0) {
					me.__96.style.visibility="hidden";
					me.__96.ggVisible=false;
				}
				else if (me.__96.ggCurrentLogicStateVisible == 1) {
					me.__96.style.visibility="hidden";
					me.__96.ggVisible=false;
				}
				else {
					me.__96.style.visibility=(Number(me.__96.style.opacity)>0||!me.__96.style.opacity)?'inherit':'hidden';
					me.__96.ggVisible=true;
				}
			}
		}
		me.__96.logicBlock_visible();
		me.__96.onclick=function (e) {
			me.__63.style.transition='none';
			me.__63.style.visibility=(Number(me.__63.style.opacity)>0||!me.__63.style.opacity)?'inherit':'hidden';
			me.__63.ggVisible=true;
			me.__69.style.transition='none';
			me.__69.style.visibility='hidden';
			me.__69.ggVisible=false;
			me.__60.style.transition='none';
			me.__60.style.visibility='hidden';
			me.__60.ggVisible=false;
			if (
				(
					((player.getViewerSize().width > 460))
				)
			||
				(
					((player.getIsMobile() == false))
				)
			) {
				me.__57.style.transition='none';
				me.__57.style.visibility='hidden';
				me.__57.ggVisible=false;
			}
			var list=me.findElements("ht_node",true);
			while(list.length>0) {
				var e=list.pop();
				e.style.transition='none';
				e.style.visibility='hidden';
				e.ggVisible=false;
			}
			me.__108.style.transition='none';
			me.__108.style.visibility='hidden';
			me.__108.ggVisible=false;
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
				me.__54.style.transition='none';
				me.__54.style.visibility='hidden';
				me.__54.ggVisible=false;
			}
		}
		me.__96.onmouseover=function (e) {
			me.elementMouseOver['_96']=true;
		}
		me.__96.onmousemove=function (e) {
			me.__97.style.transition='none';
			me.__97.style.visibility=(Number(me.__97.style.opacity)>0||!me.__97.style.opacity)?'inherit':'hidden';
			me.__97.ggVisible=true;
		}
		me.__96.onmouseout=function (e) {
			me.elementMouseOver['_96']=false;
		}
		me.__96.ggCurrentLogicStateVisible = -1;
		me.__96.ggUpdateConditionTimer=function () {
			if (me.elementMouseOver['_96']) {
				me.__97.style.transition='none';
				me.__97.style.visibility=(Number(me.__97.style.opacity)>0||!me.__97.style.opacity)?'inherit':'hidden';
				me.__97.ggVisible=true;
			}
		}
		me.__96.ggUpdatePosition=function (useTransition) {
		}
		el=me.__99=document.createElement('div');
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
		me.__99.ggIsActive=function() {
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
		me.__99.ggUpdatePosition=function (useTransition) {
		}
		me.__96.appendChild(me.__99);
		el=me.__98=document.createElement('div');
		els=me.__98__img=document.createElement('img');
		els.className='ggskin ggskin__98';
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
		me.__98.ggIsActive=function() {
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
		me.__98.ggUpdatePosition=function (useTransition) {
		}
		me.__96.appendChild(me.__98);
		el=me.__97=document.createElement('div');
		els=me.__97__text=document.createElement('div');
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
		me.__97.ggUpdateText=function() {
			var params = [];
			var hs = player._("\uc2a4\ud0a8\uc81c\uac70", params);
			if (hs!=this.ggText) {
				this.ggText=hs;
				this.ggTextDiv.innerHTML=hs;
				if (this.ggUpdatePosition) this.ggUpdatePosition();
			}
		}
		me.__97.ggUpdateText();
		el.appendChild(els);
		me.__97.ggIsActive=function() {
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
		me.__97.ggUpdatePosition=function (useTransition) {
		}
		me.__96.appendChild(me.__97);
		me.__71.appendChild(me.__96);
		el=me.__95=document.createElement('div');
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
		me.__95.ggIsActive=function() {
			return (me.__95.ggTimestamp==0 ? false : (Math.floor((skin.ggCurrentTime - me.__95.ggTimestamp) / me.__95.ggTimeout) % 2 == 0));
		}
		el.ggElementNodeId=function() {
			if ((this.parentNode) && (this.parentNode.ggElementNodeId)) {
				return this.parentNode.ggElementNodeId();
			}
			return player.getCurrentNode();
		}
		me.__95.logicBlock_visible = function() {
			var newLogicStateVisible;
			if (
				((me.__95.ggIsActive() == true))
			)
			{
				newLogicStateVisible = 0;
			}
			else {
				newLogicStateVisible = -1;
			}
			if (me.__95.ggCurrentLogicStateVisible != newLogicStateVisible) {
				me.__95.ggCurrentLogicStateVisible = newLogicStateVisible;
				me.__95.style.transition='';
				if (me.__95.ggCurrentLogicStateVisible == 0) {
					me.__95.style.visibility=(Number(me.__95.style.opacity)>0||!me.__95.style.opacity)?'inherit':'hidden';
					me.__95.ggVisible=true;
				}
				else {
					me.__95.style.visibility=(Number(me.__95.style.opacity)>0||!me.__95.style.opacity)?'inherit':'hidden';
					me.__95.ggVisible=true;
				}
			}
		}
		me.__95.logicBlock_visible();
		me.__95.ggActivate=function () {
			me.__97.style.transition='none';
			me.__97.style.visibility='hidden';
			me.__97.ggVisible=false;
		}
		me.__95.ggCurrentLogicStateVisible = -1;
		me.__95.ggUpdateConditionTimer=function () {
			me.__95.logicBlock_visible();
		}
		me.__95.ggUpdatePosition=function (useTransition) {
		}
		me.__71.appendChild(me.__95);
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
		hs+='top : 113px;';
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
			me.__94.style.transition='none';
			me.__94.style.visibility=(Number(me.__94.style.opacity)>0||!me.__94.style.opacity)?'inherit':'hidden';
			me.__94.ggVisible=true;
		}
		me._onoff.onmouseout=function (e) {
			me.elementMouseOver['onoff']=false;
		}
		me._onoff.ggCurrentLogicStateVisible = -1;
		me._onoff.ggUpdateConditionTimer=function () {
			if (me.elementMouseOver['onoff']) {
				me.__94.style.transition='none';
				me.__94.style.visibility=(Number(me.__94.style.opacity)>0||!me.__94.style.opacity)?'inherit':'hidden';
				me.__94.ggVisible=true;
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
					((player._(me.ggUserdata.comment) == "\ud604\uad00"))
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
		el=me.__94=document.createElement('div');
		els=me.__94__text=document.createElement('div');
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
		me.__94.ggUpdateText=function() {
			var params = [];
			var hs = player._("\uac00\uad6c\ubcf4\uae30", params);
			if (hs!=this.ggText) {
				this.ggText=hs;
				this.ggTextDiv.innerHTML=hs;
				if (this.ggUpdatePosition) this.ggUpdatePosition();
			}
		}
		me.__94.ggUpdateText();
		el.appendChild(els);
		me.__94.ggIsActive=function() {
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
		me.__94.logicBlock_text = function() {
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
			if (me.__94.ggCurrentLogicStateText != newLogicStateText) {
				me.__94.ggCurrentLogicStateText = newLogicStateText;
				me.__94.style.transition='';
				if (me.__94.ggCurrentLogicStateText == 0) {
					if (me.__94.ggUpdateText) {
					me.__94.ggUpdateText=function() {
						var params = [];
						var hs = player._("\uac00\uad6c\uc81c\uac70", params);
						if (hs!=this.ggText) {
							this.ggText=hs;
							this.ggTextDiv.innerHTML=hs;
							if (this.ggUpdatePosition) this.ggUpdatePosition();
						}
					}
					me.__94.ggUpdateText();
					} else {
						if (me.__94.ggUpdatePosition) me.__94.ggUpdatePosition();
					}
				}
				else {
					if (me.__94.ggUpdateText) {
					me.__94.ggUpdateText=function() {
						var params = [];
						var hs = player._("\uac00\uad6c\ubcf4\uae30", params);
						if (hs!=this.ggText) {
							this.ggText=hs;
							this.ggTextDiv.innerHTML=hs;
							if (this.ggUpdatePosition) this.ggUpdatePosition();
						}
					}
					me.__94.ggUpdateText();
					} else {
						if (me.__94.ggUpdatePosition) me.__94.ggUpdatePosition();
					}
				}
			}
		}
		me.__94.logicBlock_text();
		me.__94.ggUpdatePosition=function (useTransition) {
		}
		me._onoff.appendChild(me.__94);
		me.__71.appendChild(me._onoff);
		el=me.__93=document.createElement('div');
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
		me.__93.ggIsActive=function() {
			return (me.__93.ggTimestamp==0 ? false : (Math.floor((skin.ggCurrentTime - me.__93.ggTimestamp) / me.__93.ggTimeout) % 2 == 0));
		}
		el.ggElementNodeId=function() {
			if ((this.parentNode) && (this.parentNode.ggElementNodeId)) {
				return this.parentNode.ggElementNodeId();
			}
			return player.getCurrentNode();
		}
		me.__93.logicBlock_visible = function() {
			var newLogicStateVisible;
			if (
				((me.__93.ggIsActive() == true))
			)
			{
				newLogicStateVisible = 0;
			}
			else {
				newLogicStateVisible = -1;
			}
			if (me.__93.ggCurrentLogicStateVisible != newLogicStateVisible) {
				me.__93.ggCurrentLogicStateVisible = newLogicStateVisible;
				me.__93.style.transition='';
				if (me.__93.ggCurrentLogicStateVisible == 0) {
					me.__93.style.visibility=(Number(me.__93.style.opacity)>0||!me.__93.style.opacity)?'inherit':'hidden';
					me.__93.ggVisible=true;
				}
				else {
					me.__93.style.visibility=(Number(me.__93.style.opacity)>0||!me.__93.style.opacity)?'inherit':'hidden';
					me.__93.ggVisible=true;
				}
			}
		}
		me.__93.logicBlock_visible();
		me.__93.ggActivate=function () {
			me.__94.style.transition='none';
			me.__94.style.visibility='hidden';
			me.__94.ggVisible=false;
		}
		me.__93.ggCurrentLogicStateVisible = -1;
		me.__93.ggUpdateConditionTimer=function () {
			me.__93.logicBlock_visible();
		}
		me.__93.ggUpdatePosition=function (useTransition) {
		}
		me.__71.appendChild(me.__93);
		el=me.__89=document.createElement('div');
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
		hs+='top : 271px;';
		hs+='visibility : inherit;';
		hs+='width : 43px;';
		hs+='pointer-events:none;';
		el.setAttribute('style',hs);
		el.style.transformOrigin='50% 50%';
		me.__89.ggIsActive=function() {
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
		me.__89.logicBlock_visible = function() {
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
			if (me.__89.ggCurrentLogicStateVisible != newLogicStateVisible) {
				me.__89.ggCurrentLogicStateVisible = newLogicStateVisible;
				me.__89.style.transition='';
				if (me.__89.ggCurrentLogicStateVisible == 0) {
					me.__89.style.visibility="hidden";
					me.__89.ggVisible=false;
				}
				else if (me.__89.ggCurrentLogicStateVisible == 1) {
					me.__89.style.visibility=(Number(me.__89.style.opacity)>0||!me.__89.style.opacity)?'inherit':'hidden';
					me.__89.ggVisible=true;
				}
				else {
					me.__89.style.visibility=(Number(me.__89.style.opacity)>0||!me.__89.style.opacity)?'inherit':'hidden';
					me.__89.ggVisible=true;
				}
			}
		}
		me.__89.logicBlock_visible();
		me.__89.onclick=function (e) {
			player.toggleAutorotate();
			me.__92.ggVisible = !me.__92.ggVisible;
			var flag=me.__92.ggVisible;
			me.__92.style.transition='none';
			me.__92.style.visibility=((flag)&&(Number(me.__92.style.opacity)>0||!me.__92.style.opacity))?'inherit':'hidden';
			player.setVariableValue('vis_icon5', true);
		}
		me.__89.onmouseover=function (e) {
			me.elementMouseOver['_89']=true;
		}
		me.__89.onmousemove=function (e) {
			me.__90.style.transition='none';
			me.__90.style.visibility=(Number(me.__90.style.opacity)>0||!me.__90.style.opacity)?'inherit':'hidden';
			me.__90.ggVisible=true;
		}
		me.__89.onmouseout=function (e) {
			me.elementMouseOver['_89']=false;
		}
		me.__89.ggCurrentLogicStateVisible = -1;
		me.__89.ggUpdateConditionTimer=function () {
			if (me.elementMouseOver['_89']) {
				me.__90.style.transition='none';
				me.__90.style.visibility=(Number(me.__90.style.opacity)>0||!me.__90.style.opacity)?'inherit':'hidden';
				me.__90.ggVisible=true;
			}
		}
		me.__89.ggUpdatePosition=function (useTransition) {
		}
		el=me.__92=document.createElement('div');
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
		me.__92.ggIsActive=function() {
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
		me.__92.ggUpdatePosition=function (useTransition) {
		}
		me.__89.appendChild(me.__92);
		el=me.__91=document.createElement('div');
		els=me.__91__img=document.createElement('img');
		els.className='ggskin ggskin__91';
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
		me.__91.ggIsActive=function() {
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
		me.__91.ggUpdatePosition=function (useTransition) {
		}
		me.__89.appendChild(me.__91);
		el=me.__90=document.createElement('div');
		els=me.__90__text=document.createElement('div');
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
		me.__90.ggUpdateText=function() {
			var params = [];
			var hs = player._("\uc790\ub3d9\ud68c\uc804", params);
			if (hs!=this.ggText) {
				this.ggText=hs;
				this.ggTextDiv.innerHTML=hs;
				if (this.ggUpdatePosition) this.ggUpdatePosition();
			}
		}
		me.__90.ggUpdateText();
		el.appendChild(els);
		me.__90.ggIsActive=function() {
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
		me.__90.ggUpdatePosition=function (useTransition) {
		}
		me.__89.appendChild(me.__90);
		me.__71.appendChild(me.__89);
		el=me.__88=document.createElement('div');
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
		me.__88.ggIsActive=function() {
			return (me.__88.ggTimestamp==0 ? false : (Math.floor((skin.ggCurrentTime - me.__88.ggTimestamp) / me.__88.ggTimeout) % 2 == 0));
		}
		el.ggElementNodeId=function() {
			if ((this.parentNode) && (this.parentNode.ggElementNodeId)) {
				return this.parentNode.ggElementNodeId();
			}
			return player.getCurrentNode();
		}
		me.__88.logicBlock_visible = function() {
			var newLogicStateVisible;
			if (
				((me.__88.ggIsActive() == true))
			)
			{
				newLogicStateVisible = 0;
			}
			else {
				newLogicStateVisible = -1;
			}
			if (me.__88.ggCurrentLogicStateVisible != newLogicStateVisible) {
				me.__88.ggCurrentLogicStateVisible = newLogicStateVisible;
				me.__88.style.transition='';
				if (me.__88.ggCurrentLogicStateVisible == 0) {
					me.__88.style.visibility=(Number(me.__88.style.opacity)>0||!me.__88.style.opacity)?'inherit':'hidden';
					me.__88.ggVisible=true;
				}
				else {
					me.__88.style.visibility=(Number(me.__88.style.opacity)>0||!me.__88.style.opacity)?'inherit':'hidden';
					me.__88.ggVisible=true;
				}
			}
		}
		me.__88.logicBlock_visible();
		me.__88.ggActivate=function () {
			me.__90.style.transition='none';
			me.__90.style.visibility='hidden';
			me.__90.ggVisible=false;
		}
		me.__88.ggCurrentLogicStateVisible = -1;
		me.__88.ggUpdateConditionTimer=function () {
			me.__88.logicBlock_visible();
		}
		me.__88.ggUpdatePosition=function (useTransition) {
		}
		me.__71.appendChild(me.__88);
		el=me.__84=document.createElement('div');
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
		hs+='top : 430px;';
		hs+='visibility : inherit;';
		hs+='width : 43px;';
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
		me.__84.logicBlock_visible = function() {
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
			if (me.__84.ggCurrentLogicStateVisible != newLogicStateVisible) {
				me.__84.ggCurrentLogicStateVisible = newLogicStateVisible;
				me.__84.style.transition='';
				if (me.__84.ggCurrentLogicStateVisible == 0) {
					me.__84.style.visibility="hidden";
					me.__84.ggVisible=false;
				}
				else if (me.__84.ggCurrentLogicStateVisible == 1) {
					me.__84.style.visibility="hidden";
					me.__84.ggVisible=false;
				}
				else {
					me.__84.style.visibility=(Number(me.__84.style.opacity)>0||!me.__84.style.opacity)?'inherit':'hidden';
					me.__84.ggVisible=true;
				}
			}
		}
		me.__84.logicBlock_visible();
		me.__84.onclick=function (e) {
			me.__87.ggVisible = !me.__87.ggVisible;
			var flag=me.__87.ggVisible;
			me.__87.style.transition='none';
			me.__87.style.visibility=((flag)&&(Number(me.__87.style.opacity)>0||!me.__87.style.opacity))?'inherit':'hidden';
			if (
				(
					((player.getViewerSize().width > 460))
				)
			) {
				me.__9.style.transition='none';
				me.__9.style.visibility=(Number(me.__9.style.opacity)>0||!me.__9.style.opacity)?'inherit':'hidden';
				me.__9.ggVisible=true;
			}
			if (
				(
					((player.getViewerSize().width <= 460))
				)
			) {
				me.__.style.transition='none';
				me.__.style.visibility=(Number(me.__.style.opacity)>0||!me.__.style.opacity)?'inherit':'hidden';
				me.__.ggVisible=true;
			}
		}
		me.__84.onmouseover=function (e) {
			me.elementMouseOver['_84']=true;
		}
		me.__84.onmousemove=function (e) {
			me.__85.style.transition='none';
			me.__85.style.visibility=(Number(me.__85.style.opacity)>0||!me.__85.style.opacity)?'inherit':'hidden';
			me.__85.ggVisible=true;
		}
		me.__84.onmouseout=function (e) {
			me.elementMouseOver['_84']=false;
		}
		me.__84.ggCurrentLogicStateVisible = -1;
		me.__84.ggUpdateConditionTimer=function () {
			if (me.elementMouseOver['_84']) {
				me.__85.style.transition='none';
				me.__85.style.visibility=(Number(me.__85.style.opacity)>0||!me.__85.style.opacity)?'inherit':'hidden';
				me.__85.ggVisible=true;
			}
		}
		me.__84.ggUpdatePosition=function (useTransition) {
		}
		el=me.__87=document.createElement('div');
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
		me.__84.appendChild(me.__87);
		el=me.__86=document.createElement('div');
		els=me.__86__img=document.createElement('img');
		els.className='ggskin ggskin__86';
		hs='data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAAGQAAABkCAYAAABw4pVUAAAACXBIWXMAAA9hAAAPYQGoP6dpAAAIIElEQVR4nO2dya8VRRSHv0KFPAEjT3FIHEAJ4BOchy0iUXfiHB8SdeNGMUYj6r/gwuhOkAUCC0UTN4KAAm4kRHGII2MEVJ4TiAyC02sXp69c7j3dXdW3q7vuu/0lHZLD7VPn1O91d3V1DSaKImrCYVTVAdScTC1IYNSCBEYtSGDUggRGLUhg1IIERi1IYNSCBEYtSGCc6vJjY4yvOGyYAFwNTAWmAdOBibF9HDAWGA0cAY4B+4EfgG+A7cA24DPgt5Lj/h+bbirj0pdVsiB9wCxgNnATcBVwSoc+/0VE2QhsiP893qFPa6zqOooi66MEDDAHWA4cAiLPx6G4rJvjsr1iVceBCDIWeAy5tfgWIenYDjwax+KFbh'+
			'CkD3gS+InqhGg9fopj6is6WZs6rvIZch/wPHCR5e8jYCvwCfA5sBP4HjgAHEYe5n8jf+HjgXNi31OAK4BrkIaAbRJ7gaeBlZa/z04g0GfIhcAq7P5aDwMrEPEmFlD2xNjXiti3TQxvxzF3TIi3rLlIszOrEtYDDyLNWV+MAx6Ky8qK59c49o4ISZDRwAvAMMlJDwNvAdd3lHU+ro/LzorvBeC0vIWEIsjZwKaURCPgHWBm3gIKZCYSS1qsHyA5OROCIJORh29ScvuAu/I49szdwBDJce8AJrk6rVqQ6UgrKCmpN4B+V6cl0g+8SXL83yFdONZUKcglccBaIn8BC1ycVcwCJOYkUS6xdVSVIBORS1pL4ADSL9Vt3ITEnnT7smqSVyHIaGBzQuBDwOVu9ZCOMWaCMeYZY0zUdLxrjLmnyHJiZpD8XNmM5J5KFYK8khDw'+
			'z0i3eWEYY+YYYw60iNF8LCqyvJipSC5ajouzTi5bkHkJgR4EbshZASrxlZEmRuN4pshyY25EctJyHUw7sUxBLgZ+VwL8E/meUSjKbSrpOFB02TGzkdxa8/2dlL65MgVZowQXIV3qhWOMWWkpSGSMsW4FObKA5JdclbIEGUwIrLBe0lYCEQTkXUrL/V7tx2UIcjqwRwloCPnW7YUAblkN+tFbXnuQujmJMgRZqAST+XDrlIof6q0k3SEWtv7QtyDjkG7p1kDW+8v9BBU1e5PYQHs9/ErL5wPfgjyhBPEPMOA19SZKfjFMYwAZ0dJaH483/8inIKOA3UoAy72nHi7Laa+P3TQNRvQpyG1K4cOUeHUEyAD6B67bGj/wKchrSsHrSko8ZNbRXi+vNf7TlyBjkREerQXPKzHxUNG6j44Qj/XyJchcpdBDKO3uMogf6s2trZ'+
			'XGmDlVxIJUvDbici74E2SxUuDSUtPm/xbWrpRm7yNlxxSzjPb6WQT+BNE+Pt1fdtYWb+u+39KT0G5bO8Curl3nh5yLjARsZWMnGeQkq49qgjHGW/dNChsU2xSk7jJxFeQ6xfYV8KOjn7KoQpAh4GvFrtVdG66CaGOnPnL00Qt8qNisxp25CqJ9hv3c0Ucv8KVisxoy5CrIZMW209FHL7BdsU2yOdFVkPMV2x5HH73A94pNq7s2XAXRRhr+4uijFzio2KxGaboKok0POOTooxc4rNispsq5CqJN8zrq6KMX0P5IrbqW6oUDAsNVkGOKzdus1S5mvGL7w+ZEV0G025NWeK9zhmKzurW7CrJfsZ3j6KMXOFOxWXV2ugoypNgudvTRC1yg2LS6a8NVkG8V26WOPnoBrUd8t82JroJoXQJXOvroBa5QbNtsTnQV5AvFVsU0'+
			'5tDR6kSruzZcBflYsQ0A5zn6Gcmchz5TbIvNya6C/Eh7766hO+cN+kKbD7MTWdQmkzxv6u8rtlty+Bmp3KrYrD9x5xFklWK7k4qGAQXG6cAdin21rYM8grxL+1vnGcDtOXyNNO6gvefiKFJnVuQR5CiyZFErD+fwNdJ4ULG9jUOPeN7e3qWKbQ71YGttxOSrLk7yCrKO9k+3Bng2p7+RwHO0r1a3B1jr4iSvIMPAS4p9kN68SgbQp/G9iNSVPTmnI4B8zt1PdVPaFlU8A7cZbVW6XFPaOvlieARZxLKV2Xie9BkYg+gvg88jdeRGB1cISLt7L+1/HfvwPIwzkCtkAgVPi+70m/of6A/y84GXO/TdDSxG78d7FstPtm10eIU0WIs+V/vRXEFZEMAVkrS0xpqkE3zND9GYRImLz4C1IL5um2mLzyR+QS1TEIAHlAAjZB'+
			'Rf4SuOVjhhZybJyzOlzrMsWxCAJQmB7qP4BcyqmNI2FclFy3FJ1slVCJK2xN8+Cl7iD0qd9Hk5yWIEu8QfZC+COcupGsJgFl26CGaDKaQvE+ut9eWBx0hfJtZ61E2VggBchuwBpSUS0R0LKSctUBYhc0CmuzisWhDIXmr8B+RrY2jcSfLzIkJy0maTpRKCICD3V5vF+GfkLaBAZpC9GP8mungx/gZjkNUM0hJtbFdxbScF5eRasreriJAcxuQtJCRBGgyS/FLVfLwHzMf/hi7zsdvQ5SAF9GCHKAhI18JqsishQqaGLUO2KTqrgLLPin0tw37Lo9UUNKDcpo67cVOwLcjc+F1IS2c/Moig8e1hXHz0I6PQL0XG2l6H+6ZgC4HXLX+fiVVdV3CFNNMHPEXyeupVHD/HMVWybV7VgjQYi3RnJ73hl3HsiGPo6Y0lWxmF'+
			'DKVZQXlbr66Iy/Q+ATb0Z0gWfcgg7ubNiTuttGFObE68HhmnrE1k9YJNXYcsSCv9iCjTOHn77jM5sX33GKT1dJwT23dvRSbLbAM+ZSRt313jn3rhgMCoBQmMWpDAqAUJjFqQwKgFCYxakMCoBQmM/wA9SgB+rFdczAAAAABJRU5ErkJggg==';
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
		me.__86.ggUpdatePosition=function (useTransition) {
		}
		me.__84.appendChild(me.__86);
		el=me.__85=document.createElement('div');
		els=me.__85__text=document.createElement('div');
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
		me.__85.ggUpdateText=function() {
			var params = [];
			var hs = player._("\uc0ac\uc6a9\uc124\uba85", params);
			if (hs!=this.ggText) {
				this.ggText=hs;
				this.ggTextDiv.innerHTML=hs;
				if (this.ggUpdatePosition) this.ggUpdatePosition();
			}
		}
		me.__85.ggUpdateText();
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
		me.__84.appendChild(me.__85);
		me.__71.appendChild(me.__84);
		el=me.__83=document.createElement('div');
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
		me.__83.ggIsActive=function() {
			return (me.__83.ggTimestamp==0 ? false : (Math.floor((skin.ggCurrentTime - me.__83.ggTimestamp) / me.__83.ggTimeout) % 2 == 0));
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
				((me.__83.ggIsActive() == true))
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
					me.__83.style.visibility=(Number(me.__83.style.opacity)>0||!me.__83.style.opacity)?'inherit':'hidden';
					me.__83.ggVisible=true;
				}
			}
		}
		me.__83.logicBlock_visible();
		me.__83.ggActivate=function () {
			me.__85.style.transition='none';
			me.__85.style.visibility='hidden';
			me.__85.ggVisible=false;
		}
		me.__83.ggCurrentLogicStateVisible = -1;
		me.__83.ggUpdateConditionTimer=function () {
			me.__83.logicBlock_visible();
		}
		me.__83.ggUpdatePosition=function (useTransition) {
		}
		me.__71.appendChild(me.__83);
		el=me.__78=document.createElement('div');
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
		hs+='top : 377px;';
		hs+='visibility : inherit;';
		hs+='width : 43px;';
		hs+='pointer-events:none;';
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
		me.__78.logicBlock_visible = function() {
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
			if (me.__78.ggCurrentLogicStateVisible != newLogicStateVisible) {
				me.__78.ggCurrentLogicStateVisible = newLogicStateVisible;
				me.__78.style.transition='';
				if (me.__78.ggCurrentLogicStateVisible == 0) {
					me.__78.style.visibility="hidden";
					me.__78.ggVisible=false;
				}
				else if (me.__78.ggCurrentLogicStateVisible == 1) {
					me.__78.style.visibility="hidden";
					me.__78.ggVisible=false;
				}
				else {
					me.__78.style.visibility=(Number(me.__78.style.opacity)>0||!me.__78.style.opacity)?'inherit':'hidden';
					me.__78.ggVisible=true;
				}
			}
		}
		me.__78.logicBlock_visible();
		me.__78.onclick=function (e) {
			"";
 let url = '';
  const textarea = document.createElement("textarea");
  document.body.appendChild(textarea);
  url = window.document.location.href;
  textarea.value = url;
  textarea.select();
  document.execCommand("copy");
  document.body.removeChild(textarea);
			me.__82.ggVisible = !me.__82.ggVisible;
			var flag=me.__82.ggVisible;
			me.__82.style.transition='none';
			me.__82.style.visibility=((flag)&&(Number(me.__82.style.opacity)>0||!me.__82.style.opacity))?'inherit':'hidden';
			me.__80.style.transition='none';
			me.__80.style.visibility=(Number(me.__80.style.opacity)>0||!me.__80.style.opacity)?'inherit':'hidden';
			me.__80.ggVisible=true;
		}
		me.__78.onmouseover=function (e) {
			me.elementMouseOver['_78']=true;
		}
		me.__78.onmousemove=function (e) {
			me.__81.style.transition='none';
			me.__81.style.visibility=(Number(me.__81.style.opacity)>0||!me.__81.style.opacity)?'inherit':'hidden';
			me.__81.ggVisible=true;
		}
		me.__78.onmouseout=function (e) {
			me.elementMouseOver['_78']=false;
		}
		me.__78.ggCurrentLogicStateVisible = -1;
		me.__78.ggUpdateConditionTimer=function () {
			if (me.elementMouseOver['_78']) {
				me.__81.style.transition='none';
				me.__81.style.visibility=(Number(me.__81.style.opacity)>0||!me.__81.style.opacity)?'inherit':'hidden';
				me.__81.ggVisible=true;
			}
		}
		me.__78.ggUpdatePosition=function (useTransition) {
		}
		el=me.__82=document.createElement('div');
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
		hs+='top : 5px;';
		hs+='visibility : hidden;';
		hs+='width : 100%;';
		hs+='pointer-events:auto;';
		el.setAttribute('style',hs);
		el.style.transformOrigin='50% 50%';
		me.__82.ggIsActive=function() {
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
		me.__82.ggUpdatePosition=function (useTransition) {
		}
		me.__78.appendChild(me.__82);
		el=me.__81=document.createElement('div');
		els=me.__81__text=document.createElement('div');
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
		me.__81.ggUpdateText=function() {
			var params = [];
			var hs = player._("\ub9c1\ud06c\ubcf5\uc0ac\n", params);
			if (hs!=this.ggText) {
				this.ggText=hs;
				this.ggTextDiv.innerHTML=hs;
				if (this.ggUpdatePosition) this.ggUpdatePosition();
			}
		}
		me.__81.ggUpdateText();
		el.appendChild(els);
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
		me.__78.appendChild(me.__81);
		el=me.__80=document.createElement('div');
		els=me.__80__text=document.createElement('div');
		el.className='ggskin ggskin_textdiv';
		el.ggTextDiv=els;
		el.ggId="\ubcf5\uc0ac\uc644\ub8cc\ud0dd\uc2a4\ud2b8";
		el.ggDy=1;
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
		hs+='top : calc(50% - ((40px + 0px) / 2) + 1px);';
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
			var hs = player._("\ubcf5\uc0ac\uc644\ub8cc\n", params);
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
		me.__80.ggUpdatePosition=function (useTransition) {
		}
		me.__78.appendChild(me.__80);
		el=me.__79=document.createElement('div');
		els=me.__79__img=document.createElement('img');
		els.className='ggskin ggskin__79';
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
		me.__79.ggUpdatePosition=function (useTransition) {
		}
		me.__78.appendChild(me.__79);
		me.__71.appendChild(me.__78);
		el=me.__77=document.createElement('div');
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
		me.__77.ggIsActive=function() {
			return (me.__77.ggTimestamp==0 ? false : (Math.floor((skin.ggCurrentTime - me.__77.ggTimestamp) / me.__77.ggTimeout) % 2 == 0));
		}
		el.ggElementNodeId=function() {
			if ((this.parentNode) && (this.parentNode.ggElementNodeId)) {
				return this.parentNode.ggElementNodeId();
			}
			return player.getCurrentNode();
		}
		me.__77.logicBlock_visible = function() {
			var newLogicStateVisible;
			if (
				((me.__77.ggIsActive() == true))
			)
			{
				newLogicStateVisible = 0;
			}
			else {
				newLogicStateVisible = -1;
			}
			if (me.__77.ggCurrentLogicStateVisible != newLogicStateVisible) {
				me.__77.ggCurrentLogicStateVisible = newLogicStateVisible;
				me.__77.style.transition='';
				if (me.__77.ggCurrentLogicStateVisible == 0) {
					me.__77.style.visibility=(Number(me.__77.style.opacity)>0||!me.__77.style.opacity)?'inherit':'hidden';
					me.__77.ggVisible=true;
				}
				else {
					me.__77.style.visibility=(Number(me.__77.style.opacity)>0||!me.__77.style.opacity)?'inherit':'hidden';
					me.__77.ggVisible=true;
				}
			}
		}
		me.__77.logicBlock_visible();
		me.__77.ggActivate=function () {
			me.__80.style.transition='none';
			me.__80.style.visibility='hidden';
			me.__80.ggVisible=false;
			me.__81.style.transition='none';
			me.__81.style.visibility='hidden';
			me.__81.ggVisible=false;
		}
		me.__77.ggCurrentLogicStateVisible = -1;
		me.__77.ggUpdateConditionTimer=function () {
			me.__77.logicBlock_visible();
		}
		me.__77.ggUpdatePosition=function (useTransition) {
		}
		me.__71.appendChild(me.__77);
		el=me.__73=document.createElement('div');
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
		hs+='top : 324px;';
		hs+='visibility : inherit;';
		hs+='width : 43px;';
		hs+='pointer-events:none;';
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
		me.__73.logicBlock_visible = function() {
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
			if (me.__73.ggCurrentLogicStateVisible != newLogicStateVisible) {
				me.__73.ggCurrentLogicStateVisible = newLogicStateVisible;
				me.__73.style.transition='';
				if (me.__73.ggCurrentLogicStateVisible == 0) {
					me.__73.style.visibility="hidden";
					me.__73.ggVisible=false;
				}
				else if (me.__73.ggCurrentLogicStateVisible == 1) {
					me.__73.style.visibility="hidden";
					me.__73.ggVisible=false;
				}
				else {
					me.__73.style.visibility=(Number(me.__73.style.opacity)>0||!me.__73.style.opacity)?'inherit':'hidden';
					me.__73.ggVisible=true;
				}
			}
		}
		me.__73.logicBlock_visible();
		me.__73.onclick=function (e) {
			player.toggleFullscreen();
			me.__76.ggVisible = !me.__76.ggVisible;
			var flag=me.__76.ggVisible;
			me.__76.style.transition='none';
			me.__76.style.visibility=((flag)&&(Number(me.__76.style.opacity)>0||!me.__76.style.opacity))?'inherit':'hidden';
		}
		me.__73.onmouseover=function (e) {
			me.elementMouseOver['_73']=true;
		}
		me.__73.onmousemove=function (e) {
			me.__74.style.transition='none';
			me.__74.style.visibility=(Number(me.__74.style.opacity)>0||!me.__74.style.opacity)?'inherit':'hidden';
			me.__74.ggVisible=true;
		}
		me.__73.onmouseout=function (e) {
			me.elementMouseOver['_73']=false;
		}
		me.__73.ggCurrentLogicStateVisible = -1;
		me.__73.ggUpdateConditionTimer=function () {
			if (me.elementMouseOver['_73']) {
				me.__74.style.transition='none';
				me.__74.style.visibility=(Number(me.__74.style.opacity)>0||!me.__74.style.opacity)?'inherit':'hidden';
				me.__74.ggVisible=true;
			}
		}
		me.__73.ggUpdatePosition=function (useTransition) {
		}
		el=me.__76=document.createElement('div');
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
		me.__76.logicBlock_visible = function() {
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
			if (me.__76.ggCurrentLogicStateVisible != newLogicStateVisible) {
				me.__76.ggCurrentLogicStateVisible = newLogicStateVisible;
				me.__76.style.transition='';
				if (me.__76.ggCurrentLogicStateVisible == 0) {
					me.__76.style.visibility="hidden";
					me.__76.ggVisible=false;
				}
				else {
					me.__76.style.visibility="hidden";
					me.__76.ggVisible=false;
				}
			}
		}
		me.__76.logicBlock_visible();
		me.__76.ggUpdatePosition=function (useTransition) {
		}
		me.__73.appendChild(me.__76);
		el=me.__75=document.createElement('div');
		els=me.__75__img=document.createElement('img');
		els.className='ggskin ggskin__75';
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
		me.__75.ggUpdatePosition=function (useTransition) {
		}
		me.__73.appendChild(me.__75);
		el=me.__74=document.createElement('div');
		els=me.__74__text=document.createElement('div');
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
		me.__74.ggUpdateText=function() {
			var params = [];
			var hs = player._("\uc804\uccb4\ud654\uba74", params);
			if (hs!=this.ggText) {
				this.ggText=hs;
				this.ggTextDiv.innerHTML=hs;
				if (this.ggUpdatePosition) this.ggUpdatePosition();
			}
		}
		me.__74.ggUpdateText();
		el.appendChild(els);
		me.__74.ggIsActive=function() {
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
		me.__74.ggUpdatePosition=function (useTransition) {
		}
		me.__73.appendChild(me.__74);
		me.__71.appendChild(me.__73);
		el=me.__72=document.createElement('div');
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
		me.__72.ggIsActive=function() {
			return (me.__72.ggTimestamp==0 ? false : (Math.floor((skin.ggCurrentTime - me.__72.ggTimestamp) / me.__72.ggTimeout) % 2 == 0));
		}
		el.ggElementNodeId=function() {
			if ((this.parentNode) && (this.parentNode.ggElementNodeId)) {
				return this.parentNode.ggElementNodeId();
			}
			return player.getCurrentNode();
		}
		me.__72.logicBlock_visible = function() {
			var newLogicStateVisible;
			if (
				((me.__72.ggIsActive() == true))
			)
			{
				newLogicStateVisible = 0;
			}
			else {
				newLogicStateVisible = -1;
			}
			if (me.__72.ggCurrentLogicStateVisible != newLogicStateVisible) {
				me.__72.ggCurrentLogicStateVisible = newLogicStateVisible;
				me.__72.style.transition='';
				if (me.__72.ggCurrentLogicStateVisible == 0) {
					me.__72.style.visibility=(Number(me.__72.style.opacity)>0||!me.__72.style.opacity)?'inherit':'hidden';
					me.__72.ggVisible=true;
				}
				else {
					me.__72.style.visibility=(Number(me.__72.style.opacity)>0||!me.__72.style.opacity)?'inherit':'hidden';
					me.__72.ggVisible=true;
				}
			}
		}
		me.__72.logicBlock_visible();
		me.__72.ggActivate=function () {
			me.__74.style.transition='none';
			me.__74.style.visibility='hidden';
			me.__74.ggVisible=false;
		}
		me.__72.ggCurrentLogicStateVisible = -1;
		me.__72.ggUpdateConditionTimer=function () {
			me.__72.logicBlock_visible();
		}
		me.__72.ggUpdatePosition=function (useTransition) {
		}
		me.__71.appendChild(me.__72);
		me._rectangle_2.appendChild(me.__71);
		me.__68.appendChild(me._rectangle_2);
		el=me.__69=document.createElement('div');
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
		hs+='top : 219px;';
		hs+='visibility : inherit;';
		hs+='width : 43px;';
		hs+='pointer-events:none;';
		el.setAttribute('style',hs);
		el.style.transformOrigin='50% 50%';
		me.__69.ggIsActive=function() {
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
		me.__69.ggUpdatePosition=function (useTransition) {
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
		me.__69.appendChild(me._up);
		el=me.__70=document.createElement('div');
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
		me.__70.logicBlock_position = function() {
			var newLogicStatePosition;
			if (
				((me.elementMouseOver['_70'] == true))
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
			if (me.__70.ggCurrentLogicStatePosition != newLogicStatePosition) {
				me.__70.ggCurrentLogicStatePosition = newLogicStatePosition;
				me.__70.style.transition='left 500ms ease 500ms, top 500ms ease 500ms, opacity 500ms ease 0ms';
				if (me.__70.ggCurrentLogicStatePosition == 0) {
					me.__70.style.left='-10px';
					me.__70.style.top = 'calc(50% - (43px / 2))';
				}
				else if (me.__70.ggCurrentLogicStatePosition == 1) {
					me.__70.style.left='20px';
					me.__70.style.top = 'calc(50% - (43px / 2))';
				}
				else {
					me.__70.style.left='0px';
					me.__70.style.top='calc(50% - ((43px + 0px) / 2) + 0px)';
				}
			}
		}
		me.__70.logicBlock_position();
		me.__70.logicBlock_visible = function() {
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
			if (me.__70.ggCurrentLogicStateVisible != newLogicStateVisible) {
				me.__70.ggCurrentLogicStateVisible = newLogicStateVisible;
				me.__70.style.transition='left 500ms ease 500ms, top 500ms ease 500ms, opacity 500ms ease 0ms';
				if (me.__70.ggCurrentLogicStateVisible == 0) {
					me.__70.style.visibility=(Number(me.__70.style.opacity)>0||!me.__70.style.opacity)?'inherit':'hidden';
					me.__70.ggVisible=true;
				}
				else if (me.__70.ggCurrentLogicStateVisible == 1) {
					me.__70.style.visibility="hidden";
					me.__70.ggVisible=false;
				}
				else {
					me.__70.style.visibility="hidden";
					me.__70.ggVisible=false;
				}
			}
		}
		me.__70.logicBlock_visible();
		me.__70.logicBlock_alpha = function() {
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
			if (me.__70.ggCurrentLogicStateAlpha != newLogicStateAlpha) {
				me.__70.ggCurrentLogicStateAlpha = newLogicStateAlpha;
				me.__70.style.transition='left 500ms ease 500ms, top 500ms ease 500ms, opacity 500ms ease 0ms';
				if (me.__70.ggCurrentLogicStateAlpha == 0) {
					me.__70.style.visibility=me.__70.ggVisible?'inherit':'hidden';
					me.__70.style.opacity=1;
				}
				else if (me.__70.ggCurrentLogicStateAlpha == 1) {
					setTimeout(function() { if (me.__70.style.opacity == 0.0) { me.__70.style.visibility="hidden"; } }, 505);
					me.__70.style.opacity=0;
				}
				else {
					setTimeout(function() { if (me.__70.style.opacity == 0.0) { me.__70.style.visibility="hidden"; } }, 505);
					me.__70.style.opacity=0;
				}
			}
		}
		me.__70.logicBlock_alpha();
		me.__70.onmouseover=function (e) {
			me.elementMouseOver['_70']=true;
			me.__70.logicBlock_position();
		}
		me.__70.onmouseout=function (e) {
			me.elementMouseOver['_70']=false;
			me.__70.logicBlock_position();
		}
		me.__70.ggUpdatePosition=function (useTransition) {
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
		me.__70.appendChild(me._rectangle_3);
		me.__69.appendChild(me.__70);
		me.__68.appendChild(me.__69);
		me.divSkin.appendChild(me.__68);
		el=me.__63=document.createElement('div');
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
		me.__63.ggIsActive=function() {
			return false;
		}
		el.ggElementNodeId=function() {
			return player.getCurrentNode();
		}
		me.__63.onclick=function (e) {
			me.__60.style.transition='none';
			me.__60.style.visibility=(Number(me.__60.style.opacity)>0||!me.__60.style.opacity)?'inherit':'hidden';
			me.__60.ggVisible=true;
			if (
				(
					((player.getViewerSize().width > 460))
				)
			||
				(
					((player.getIsMobile() == false))
				)
			) {
				me.__57.style.transition='none';
				me.__57.style.visibility=(Number(me.__57.style.opacity)>0||!me.__57.style.opacity)?'inherit':'hidden';
				me.__57.ggVisible=true;
			}
			var list=me.findElements("ht_node",true);
			while(list.length>0) {
				var e=list.pop();
				e.style.transition='none';
				e.style.visibility=(Number(e.style.opacity)>0||!e.style.opacity)?'inherit':'hidden';
				e.ggVisible=true;
			}
			me.__108.style.transition='none';
			me.__108.style.visibility=(Number(me.__108.style.opacity)>0||!me.__108.style.opacity)?'inherit':'hidden';
			me.__108.ggVisible=true;
			me.__69.style.transition='none';
			me.__69.style.visibility=(Number(me.__69.style.opacity)>0||!me.__69.style.opacity)?'inherit':'hidden';
			me.__69.ggVisible=true;
			me._rectangle_2.style.transition='none';
			me._rectangle_2.style.visibility=(Number(me._rectangle_2.style.opacity)>0||!me._rectangle_2.style.opacity)?'inherit':'hidden';
			me._rectangle_2.ggVisible=true;
			me.__63.style.transition='none';
			me.__63.style.visibility='hidden';
			me.__63.ggVisible=false;
			if (
				(
					((player.getViewerSize().width <= 460))
				)
			||
				(
					((player.getIsMobile() == true))
				)
			) {
				me.__54.style.transition='none';
				me.__54.style.visibility=(Number(me.__54.style.opacity)>0||!me.__54.style.opacity)?'inherit':'hidden';
				me.__54.ggVisible=true;
			}
		}
		me.__63.onmouseover=function (e) {
			me.elementMouseOver['_63']=true;
		}
		me.__63.onmousemove=function (e) {
			me.__65.style.transition='none';
			me.__65.style.visibility=(Number(me.__65.style.opacity)>0||!me.__65.style.opacity)?'inherit':'hidden';
			me.__65.ggVisible=true;
		}
		me.__63.onmouseout=function (e) {
			me.elementMouseOver['_63']=false;
		}
		me.__63.ggUpdateConditionTimer=function () {
			if (me.elementMouseOver['_63']) {
				me.__65.style.transition='none';
				me.__65.style.visibility=(Number(me.__65.style.opacity)>0||!me.__65.style.opacity)?'inherit':'hidden';
				me.__65.ggVisible=true;
			}
		}
		me.__63.ggUpdatePosition=function (useTransition) {
		}
		el=me.__67=document.createElement('div');
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
		me.__67.ggIsActive=function() {
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
		me.__67.ggUpdatePosition=function (useTransition) {
		}
		me.__63.appendChild(me.__67);
		el=me.__66=document.createElement('div');
		els=me.__66__img=document.createElement('img');
		els.className='ggskin ggskin__66';
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
		els=me.__65__text=document.createElement('div');
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
		me.__65.ggUpdateText=function() {
			var params = [];
			var hs = player._("\uc2a4\ud0a8\ubcf4\uae30", params);
			if (hs!=this.ggText) {
				this.ggText=hs;
				this.ggTextDiv.innerHTML=hs;
				if (this.ggUpdatePosition) this.ggUpdatePosition();
			}
		}
		me.__65.ggUpdateText();
		el.appendChild(els);
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
		me.__64.ggIsActive=function() {
			return (me.__64.ggTimestamp==0 ? false : (Math.floor((skin.ggCurrentTime - me.__64.ggTimestamp) / me.__64.ggTimeout) % 2 == 0));
		}
		el.ggElementNodeId=function() {
			if ((this.parentNode) && (this.parentNode.ggElementNodeId)) {
				return this.parentNode.ggElementNodeId();
			}
			return player.getCurrentNode();
		}
		me.__64.logicBlock_visible = function() {
			var newLogicStateVisible;
			if (
				((me.__64.ggIsActive() == true))
			)
			{
				newLogicStateVisible = 0;
			}
			else {
				newLogicStateVisible = -1;
			}
			if (me.__64.ggCurrentLogicStateVisible != newLogicStateVisible) {
				me.__64.ggCurrentLogicStateVisible = newLogicStateVisible;
				me.__64.style.transition='';
				if (me.__64.ggCurrentLogicStateVisible == 0) {
					me.__64.style.visibility=(Number(me.__64.style.opacity)>0||!me.__64.style.opacity)?'inherit':'hidden';
					me.__64.ggVisible=true;
				}
				else {
					me.__64.style.visibility=(Number(me.__64.style.opacity)>0||!me.__64.style.opacity)?'inherit':'hidden';
					me.__64.ggVisible=true;
				}
			}
		}
		me.__64.logicBlock_visible();
		me.__64.ggActivate=function () {
			me.__65.style.transition='none';
			me.__65.style.visibility='hidden';
			me.__65.ggVisible=false;
		}
		me.__64.ggCurrentLogicStateVisible = -1;
		me.__64.ggUpdateConditionTimer=function () {
			me.__64.logicBlock_visible();
		}
		me.__64.ggUpdatePosition=function (useTransition) {
		}
		me.__63.appendChild(me.__64);
		me.divSkin.appendChild(me.__63);
		el=me.__60=document.createElement('div');
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
		me.__60.ggIsActive=function() {
			return false;
		}
		el.ggElementNodeId=function() {
			return player.getCurrentNode();
		}
		me.__60.logicBlock_position = function() {
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
			if (me.__60.ggCurrentLogicStatePosition != newLogicStatePosition) {
				me.__60.ggCurrentLogicStatePosition = newLogicStatePosition;
				me.__60.style.transition='left 0s, top 0s, transform 0s';
				if (me.__60.ggCurrentLogicStatePosition == 0) {
					me.__60.style.left='0px';
					me.__60.style.top='5px';
				}
				else if (me.__60.ggCurrentLogicStatePosition == 1) {
					me.__60.style.left='25px';
					me.__60.style.top='5px';
				}
				else {
					me.__60.style.left='0px';
					me.__60.style.top='4.8px';
				}
			}
		}
		me.__60.logicBlock_position();
		me.__60.logicBlock_scaling = function() {
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
			if (me.__60.ggCurrentLogicStateScaling != newLogicStateScaling) {
				me.__60.ggCurrentLogicStateScaling = newLogicStateScaling;
				me.__60.style.transition='left 0s, top 0s, transform 0s';
				if (me.__60.ggCurrentLogicStateScaling == 0) {
					me.__60.ggParameter.sx = 0.8;
					me.__60.ggParameter.sy = 0.8;
					me.__60.style.transform=parameterToTransform(me.__60.ggParameter);
					skin.updateSize(me.__60);
				}
				else if (me.__60.ggCurrentLogicStateScaling == 1) {
					me.__60.ggParameter.sx = 1;
					me.__60.ggParameter.sy = 0.9;
					me.__60.style.transform=parameterToTransform(me.__60.ggParameter);
					skin.updateSize(me.__60);
				}
				else {
					me.__60.ggParameter.sx = 1;
					me.__60.ggParameter.sy = 1;
					me.__60.style.transform=parameterToTransform(me.__60.ggParameter);
					skin.updateSize(me.__60);
				}
			}
		}
		me.__60.logicBlock_scaling();
		me.__60.onclick=function (e) {
			player.openUrl("www.unfiction.kr","");
		}
		me.__60.ggUpdatePosition=function (useTransition) {
		}
		el=me.__61=document.createElement('div');
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
		me.__61.logicBlock_position = function() {
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
			if (me.__61.ggCurrentLogicStatePosition != newLogicStatePosition) {
				me.__61.ggCurrentLogicStatePosition = newLogicStatePosition;
				me.__61.style.transition='left 0s, top 0s';
				if (me.__61.ggCurrentLogicStatePosition == 0) {
					me.__61.style.left='-9%';
					me.__61.style.top='0px';
				}
				else {
					me.__61.style.left='-5%';
					me.__61.style.top='0px';
				}
			}
		}
		me.__61.logicBlock_position();
		me.__61.ggUpdatePosition=function (useTransition) {
		}
		el=me.__62=document.createElement('div');
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
		me.__62.ggIsActive=function() {
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
		me.__62.logicBlock_position = function() {
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
			if (me.__62.ggCurrentLogicStatePosition != newLogicStatePosition) {
				me.__62.ggCurrentLogicStatePosition = newLogicStatePosition;
				me.__62.style.transition='right 0s, top 0s, width 0s, height 0s';
				if (me.__62.ggCurrentLogicStatePosition == 0) {
					me.__62.style.right='23%';
					me.__62.style.top='0px';
				}
				else if (me.__62.ggCurrentLogicStatePosition == 1) {
					me.__62.style.right='16%';
					me.__62.style.top='0px';
				}
				else if (me.__62.ggCurrentLogicStatePosition == 2) {
					me.__62.style.right='10%';
					me.__62.style.top='0px';
				}
				else {
					me.__62.style.right='2%';
					me.__62.style.top='0px';
				}
			}
		}
		me.__62.logicBlock_position();
		me.__62.logicBlock_size = function() {
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
			if (me.__62.ggCurrentLogicStateSize != newLogicStateSize) {
				me.__62.ggCurrentLogicStateSize = newLogicStateSize;
				me.__62.style.transition='right 0s, top 0s, width 0s, height 0s';
				if (me.__62.ggCurrentLogicStateSize == 0) {
					me.__62.style.width='35%';
					me.__62.style.height='100%';
					skin.updateSize(me.__62);
				}
				else if (me.__62.ggCurrentLogicStateSize == 1) {
					me.__62.style.width='32%';
					me.__62.style.height='100%';
					skin.updateSize(me.__62);
				}
				else {
					me.__62.style.width='40%';
					me.__62.style.height='100%';
					skin.updateSize(me.__62);
				}
			}
		}
		me.__62.logicBlock_size();
		me.__62.ggUpdatePosition=function (useTransition) {
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
			player.openUrl("https:\/\/gregarious-crepe-3d6b27.netlify.app\/","_self");
		}
		me.__74a.ggUpdatePosition=function (useTransition) {
		}
		me.__62.appendChild(me.__74a);
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
			player.openUrl("https:\/\/melodious-tarsier-ef9d43.netlify.app","_self");
		}
		me.__74b.ggUpdatePosition=function (useTransition) {
		}
		me.__62.appendChild(me.__74b);
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
		me.__62.appendChild(me.__84a);
		me.__61.appendChild(me.__62);
		el=me._container_2=document.createElement('div');
		el.ggId="Container 2";
		el.ggDy=0;
		el.ggParameter={ rx:0,ry:0,a:0,sx:1,sy:1,def:'' };
		el.ggVisible=true;
		el.className="ggskin ggskin_container ";
		el.ggType='container';
		hs ='';
		hs+='height : 67px;';
		hs+='left : 45px;';
		hs+='position : absolute;';
		hs+='top : calc(50% - ((67px + 0px) / 2) + 0px);';
		hs+='visibility : inherit;';
		hs+='width : 220px;';
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
				((player.getViewerSize().width <= 420))
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
					me._container_2.style.top = 'calc(50% - (67px / 2))';
				}
				else {
					me._container_2.style.left='45px';
					me._container_2.style.top='calc(50% - ((67px + 0px) / 2) + 0px)';
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
		hs+='left : calc(50% - ((87% + 0px) / 2) + 0%);';
		hs+='position : absolute;';
		hs+='top : calc(50% - ((100% + 0px) / 2) + 0px);';
		hs+='visibility : inherit;';
		hs+='width : 87%;';
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
		me.__61.appendChild(me._container_2);
		me.__60.appendChild(me.__61);
		me.divSkin.appendChild(me.__60);
		el=me.__57=document.createElement('div');
		el.ggId="\ubbf8\ub2c8\ub9f5";
		el.ggParameter={ rx:0,ry:0,a:0,sx:1,sy:1,def:'' };
		el.ggVisible=false;
		el.className="ggskin ggskin_container ";
		el.ggType='container';
		hs ='';
		hs+='height : 190px;';
		hs+='left : 15px;';
		hs+='position : absolute;';
		hs+='top : 65px;';
		hs+='visibility : hidden;';
		hs+='width : 200px;';
		hs+='pointer-events:none;';
		el.setAttribute('style',hs);
		el.style.transformOrigin='50% 50%';
		me.__57.ggIsActive=function() {
			return false;
		}
		el.ggElementNodeId=function() {
			return player.getCurrentNode();
		}
		me.__57.logicBlock_position = function() {
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
			if (me.__57.ggCurrentLogicStatePosition != newLogicStatePosition) {
				me.__57.ggCurrentLogicStatePosition = newLogicStatePosition;
				me.__57.style.transition='left 0s, top 0s, width 0s, height 0s, transform 0s';
				if (me.__57.ggCurrentLogicStatePosition == 0) {
					me.__57.style.left='10px';
					me.__57.style.top='45px';
				}
				else {
					me.__57.style.left='15px';
					me.__57.style.top='65px';
				}
			}
		}
		me.__57.logicBlock_position();
		me.__57.logicBlock_size = function() {
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
			if (me.__57.ggCurrentLogicStateSize != newLogicStateSize) {
				me.__57.ggCurrentLogicStateSize = newLogicStateSize;
				me.__57.style.transition='left 0s, top 0s, width 0s, height 0s, transform 0s';
				if (me.__57.ggCurrentLogicStateSize == 0) {
					me.__57.style.width='110px';
					me.__57.style.height='100px';
					skin.updateSize(me.__57);
				}
				else if (me.__57.ggCurrentLogicStateSize == 1) {
					me.__57.style.width='160px';
					me.__57.style.height='150px';
					skin.updateSize(me.__57);
				}
				else {
					me.__57.style.width='200px';
					me.__57.style.height='190px';
					skin.updateSize(me.__57);
				}
			}
		}
		me.__57.logicBlock_size();
		me.__57.logicBlock_scaling = function() {
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
			if (me.__57.ggCurrentLogicStateScaling != newLogicStateScaling) {
				me.__57.ggCurrentLogicStateScaling = newLogicStateScaling;
				me.__57.style.transition='left 0s, top 0s, width 0s, height 0s, transform 0s';
				if (me.__57.ggCurrentLogicStateScaling == 0) {
					me.__57.ggParameter.sx = 0.85;
					me.__57.ggParameter.sy = 0.8;
					me.__57.style.transform=parameterToTransform(me.__57.ggParameter);
					skin.updateSize(me.__57);
				}
				else {
					me.__57.ggParameter.sx = 1;
					me.__57.ggParameter.sy = 1;
					me.__57.style.transform=parameterToTransform(me.__57.ggParameter);
					skin.updateSize(me.__57);
				}
			}
		}
		me.__57.logicBlock_scaling();
		me.__57.logicBlock_visible = function() {
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
			else if (
				((player.getViewerSize().width > 460))
			)
			{
				newLogicStateVisible = 2;
			}
			else if (
				((player.getIsMobile() == false))
			)
			{
				newLogicStateVisible = 3;
			}
			else {
				newLogicStateVisible = -1;
			}
			if (me.__57.ggCurrentLogicStateVisible != newLogicStateVisible) {
				me.__57.ggCurrentLogicStateVisible = newLogicStateVisible;
				me.__57.style.transition='left 0s, top 0s, width 0s, height 0s, transform 0s';
				if (me.__57.ggCurrentLogicStateVisible == 0) {
					me.__57.style.visibility="hidden";
					me.__57.ggVisible=false;
				}
				else if (me.__57.ggCurrentLogicStateVisible == 1) {
					me.__57.style.visibility="hidden";
					me.__57.ggVisible=false;
				}
				else if (me.__57.ggCurrentLogicStateVisible == 2) {
					me.__57.style.visibility=(Number(me.__57.style.opacity)>0||!me.__57.style.opacity)?'inherit':'hidden';
					me.__57.ggVisible=true;
				}
				else if (me.__57.ggCurrentLogicStateVisible == 3) {
					me.__57.style.visibility=(Number(me.__57.style.opacity)>0||!me.__57.style.opacity)?'inherit':'hidden';
					me.__57.ggVisible=true;
				}
				else {
					me.__57.style.visibility="hidden";
					me.__57.ggVisible=false;
				}
			}
		}
		me.__57.logicBlock_visible();
		me.__57.ggUpdatePosition=function (useTransition) {
		}
		el=me.__58=document.createElement('div');
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
		me.__58.ggUpdatePosition=function (useTransition) {
		}
		el=me._rectangle_41=document.createElement('div');
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
		me._rectangle_41.ggIsActive=function() {
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
		me._rectangle_41.logicBlock_size = function() {
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
			if (me._rectangle_41.ggCurrentLogicStateSize != newLogicStateSize) {
				me._rectangle_41.ggCurrentLogicStateSize = newLogicStateSize;
				me._rectangle_41.style.transition='width 0s, height 0s';
				if (me._rectangle_41.ggCurrentLogicStateSize == 0) {
					me._rectangle_41.style.width='65px';
					me._rectangle_41.style.height='30px';
					me._rectangle_41.style.left = 'calc(50% - (65px / 2))';
					skin.updateSize(me._rectangle_41);
				}
				else {
					me._rectangle_41.style.width='100px';
					me._rectangle_41.style.height='40px';
					me._rectangle_41.style.left = 'calc(50% - (100px / 2))';
					skin.updateSize(me._rectangle_41);
				}
			}
		}
		me._rectangle_41.logicBlock_size();
		me._rectangle_41.ggUpdatePosition=function (useTransition) {
		}
		el=me.__59=document.createElement('div');
		els=me.__59__text=document.createElement('div');
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
		me.__59.ggUpdateText=function() {
			var params = [];
			var hs = player._("MINI MAP", params);
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
		me.__59.logicBlock_scaling = function() {
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
			if (me.__59.ggCurrentLogicStateScaling != newLogicStateScaling) {
				me.__59.ggCurrentLogicStateScaling = newLogicStateScaling;
				me.__59.style.transition='transform 0s';
				if (me.__59.ggCurrentLogicStateScaling == 0) {
					me.__59.ggParameter.sx = 0.7;
					me.__59.ggParameter.sy = 0.7;
					me.__59.style.transform=parameterToTransform(me.__59.ggParameter);
					skin.updateSize(me.__59);
				}
				else {
					me.__59.ggParameter.sx = 1;
					me.__59.ggParameter.sy = 1;
					me.__59.style.transform=parameterToTransform(me.__59.ggParameter);
					skin.updateSize(me.__59);
				}
			}
		}
		me.__59.logicBlock_scaling();
		me.__59.ggUpdatePosition=function (useTransition) {
		}
		me._rectangle_41.appendChild(me.__59);
		me.__58.appendChild(me._rectangle_41);
		el=me._map_11=document.createElement('div');
		el.ggFilter = '';
		el.ggFilteredIds = [];
		el.ggMapNotLoaded = true;
		el.ggMapId = 'FloorPlan01';
		el.ggId="Map 1";
		el.ggDx=-5;
		el.ggDy=-1;
		el.ggParameter={ rx:0,ry:0,a:0,sx:1,sy:1,def:'' };
		el.ggVisible=false;
		el.className="ggskin ggskin_map ";
		el.ggType='map';
		hs ='';
		hs+='border : 0px solid #000000;';
		hs+='cursor : default;';
		hs+='height : 88%;';
		hs+='left : calc(50% - ((88% + 0px) / 2) - 5px);';
		hs+='overflow : hidden;';
		hs+='position : absolute;';
		hs+='top : calc(50% - ((88% + 0px) / 2) - 1%);';
		hs+='visibility : hidden;';
		hs+='width : 88%;';
		hs+='pointer-events:auto;';
		el.setAttribute('style',hs);
		el.style.transformOrigin='50% 50%';
		me._map_11.ggIsActive=function() {
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
		me._map_11.logicBlock_visible = function() {
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
			if (me._map_11.ggCurrentLogicStateVisible != newLogicStateVisible) {
				me._map_11.ggCurrentLogicStateVisible = newLogicStateVisible;
				me._map_11.style.transition='';
				if (me._map_11.ggCurrentLogicStateVisible == 0) {
					me._map_11.style.visibility=(Number(me._map_11.style.opacity)>0||!me._map_11.style.opacity)?'inherit':'hidden';
					if (me._map_11.ggMapNotLoaded && me._map_11.ggInitMap) {
						me._map_11.ggInitMap(false);
						me._map_11.ggInitMapMarkers(true);
					}
					me._map_11.ggVisible=true;
				}
				else {
					me._map_11.style.visibility="hidden";
					if (me._map_11.ggClearMap) me._map_11.ggClearMap();
					me._map_11.ggVisible=false;
				}
			}
		}
		me._map_11.logicBlock_visible();
		me._map_11.ggCurrentLogicStateVisible = -1;
		me._map_11.ggUpdateConditionResize=function () {
			var mapDetails = player.getMapDetails(me._map_11.ggMapId);
			if (mapDetails.hasOwnProperty('title')) {
				me._map_11.ggCalculateFloorplanSize(mapDetails);
				me._map_11.ggShowSimpleFloorplan(mapDetails);
				me._map_11.ggPlaceMarkersOnSimpleFloorplan();
			}
			if (me._map_11.ggRadar) me._map_11.ggRadar.update();
		}
		me._map_11.ggUpdatePosition=function (useTransition) {
			for (var i=0; i < me._map_11.ggMarkerInstances.length; i++) {
				me._map_11.ggMarkerInstances[i].ggEvent_sizechanged();
			}
			me._map_11.ggUpdateConditionResize();
		}
		me.__58.appendChild(me._map_11);
		el=me._map_21=document.createElement('div');
		el.ggFilter = '';
		el.ggFilteredIds = [];
		el.ggMapNotLoaded = true;
		el.ggMapId = 'FloorPlan02';
		el.ggId="Map 2";
		el.ggDx=-5;
		el.ggDy=-1;
		el.ggParameter={ rx:0,ry:0,a:0,sx:1,sy:1,def:'' };
		el.ggVisible=false;
		el.className="ggskin ggskin_map ";
		el.ggType='map';
		hs ='';
		hs+='border : 0px solid #000000;';
		hs+='cursor : default;';
		hs+='height : 88%;';
		hs+='left : calc(50% - ((88% + 0px) / 2) - 5px);';
		hs+='overflow : hidden;';
		hs+='position : absolute;';
		hs+='top : calc(50% - ((88% + 0px) / 2) - 1%);';
		hs+='visibility : hidden;';
		hs+='width : 88%;';
		hs+='pointer-events:auto;';
		el.setAttribute('style',hs);
		el.style.transformOrigin='50% 50%';
		me._map_21.ggIsActive=function() {
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
		me._map_21.logicBlock_visible = function() {
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
			if (me._map_21.ggCurrentLogicStateVisible != newLogicStateVisible) {
				me._map_21.ggCurrentLogicStateVisible = newLogicStateVisible;
				me._map_21.style.transition='';
				if (me._map_21.ggCurrentLogicStateVisible == 0) {
					me._map_21.style.visibility=(Number(me._map_21.style.opacity)>0||!me._map_21.style.opacity)?'inherit':'hidden';
					if (me._map_21.ggMapNotLoaded && me._map_21.ggInitMap) {
						me._map_21.ggInitMap(false);
						me._map_21.ggInitMapMarkers(true);
					}
					me._map_21.ggVisible=true;
				}
				else {
					me._map_21.style.visibility="hidden";
					if (me._map_21.ggClearMap) me._map_21.ggClearMap();
					me._map_21.ggVisible=false;
				}
			}
		}
		me._map_21.logicBlock_visible();
		me._map_21.ggCurrentLogicStateVisible = -1;
		me._map_21.ggUpdateConditionResize=function () {
			var mapDetails = player.getMapDetails(me._map_21.ggMapId);
			if (mapDetails.hasOwnProperty('title')) {
				me._map_21.ggCalculateFloorplanSize(mapDetails);
				me._map_21.ggShowSimpleFloorplan(mapDetails);
				me._map_21.ggPlaceMarkersOnSimpleFloorplan();
			}
			if (me._map_21.ggRadar) me._map_21.ggRadar.update();
		}
		me._map_21.ggUpdatePosition=function (useTransition) {
			for (var i=0; i < me._map_21.ggMarkerInstances.length; i++) {
				me._map_21.ggMarkerInstances[i].ggEvent_sizechanged();
			}
			me._map_21.ggUpdateConditionResize();
		}
		me.__58.appendChild(me._map_21);
		me.__57.appendChild(me.__58);
		me.divSkin.appendChild(me.__57);
		el=me.__54=document.createElement('div');
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
		me.__54.ggIsActive=function() {
			return false;
		}
		el.ggElementNodeId=function() {
			return player.getCurrentNode();
		}
		me.__54.logicBlock_position = function() {
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
			if (me.__54.ggCurrentLogicStatePosition != newLogicStatePosition) {
				me.__54.ggCurrentLogicStatePosition = newLogicStatePosition;
				me.__54.style.transition='left 500ms ease 0ms, bottom 500ms ease 0ms, transform 0s';
				if (me.__54.ggCurrentLogicStatePosition == 0) {
					me.__54.style.left='5px';
					me.__54.style.bottom='-120px';
				}
				else {
					me.__54.style.left='5px';
					me.__54.style.bottom='-10px';
				}
			}
		}
		me.__54.logicBlock_position();
		me.__54.logicBlock_scaling = function() {
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
			if (me.__54.ggCurrentLogicStateScaling != newLogicStateScaling) {
				me.__54.ggCurrentLogicStateScaling = newLogicStateScaling;
				me.__54.style.transition='left 500ms ease 0ms, bottom 500ms ease 0ms, transform 0s';
				if (me.__54.ggCurrentLogicStateScaling == 0) {
					me.__54.ggParameter.sx = 0.85;
					me.__54.ggParameter.sy = 0.8;
					me.__54.style.transform=parameterToTransform(me.__54.ggParameter);
					skin.updateSize(me.__54);
				}
				else {
					me.__54.ggParameter.sx = 1;
					me.__54.ggParameter.sy = 1;
					me.__54.style.transform=parameterToTransform(me.__54.ggParameter);
					skin.updateSize(me.__54);
				}
			}
		}
		me.__54.logicBlock_scaling();
		me.__54.logicBlock_visible = function() {
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
			else if (
				((player.getViewerSize().width > 460))
			)
			{
				newLogicStateVisible = 2;
			}
			else if (
				((player.getIsMobile() == false))
			)
			{
				newLogicStateVisible = 3;
			}
			else {
				newLogicStateVisible = -1;
			}
			if (me.__54.ggCurrentLogicStateVisible != newLogicStateVisible) {
				me.__54.ggCurrentLogicStateVisible = newLogicStateVisible;
				me.__54.style.transition='left 500ms ease 0ms, bottom 500ms ease 0ms, transform 0s';
				if (me.__54.ggCurrentLogicStateVisible == 0) {
					me.__54.style.visibility=(Number(me.__54.style.opacity)>0||!me.__54.style.opacity)?'inherit':'hidden';
					me.__54.ggVisible=true;
				}
				else if (me.__54.ggCurrentLogicStateVisible == 1) {
					me.__54.style.visibility=(Number(me.__54.style.opacity)>0||!me.__54.style.opacity)?'inherit':'hidden';
					me.__54.ggVisible=true;
				}
				else if (me.__54.ggCurrentLogicStateVisible == 2) {
					me.__54.style.visibility="hidden";
					me.__54.ggVisible=false;
				}
				else if (me.__54.ggCurrentLogicStateVisible == 3) {
					me.__54.style.visibility="hidden";
					me.__54.ggVisible=false;
				}
				else {
					me.__54.style.visibility="hidden";
					me.__54.ggVisible=false;
				}
			}
		}
		me.__54.logicBlock_visible();
		me.__54.ggUpdatePosition=function (useTransition) {
		}
		el=me.__55=document.createElement('div');
		el.ggId="\ubbf8\ub2c8\ub9f5\ubc30\uacbd-\ubaa8\ubc14\uc77c";
		el.ggParameter={ rx:0,ry:0,a:0,sx:1,sy:1,def:'' };
		el.ggVisible=true;
		el.className="ggskin ggskin_rectangle ";
		el.ggType='rectangle';
		hs ='';
		hs+='background : rgba(255,255,255,0.470588);';
		hs+='border : 0px solid #000000;';
		hs+='border-radius : 20px 20px 0px 0px;';
		hs+='cursor : pointer;';
		hs+='height : 100%;';
		hs+='left : 0px;';
		hs+='position : absolute;';
		hs+='top : 0px;';
		hs+='visibility : inherit;';
		hs+='width : 100%;';
		hs+='pointer-events:auto;';
		el.setAttribute('style',hs);
		el.style.transformOrigin='50% 50%';
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
		me.__55.onclick=function (e) {
			me.__33.style.transition='none';
			me.__33.style.visibility=(Number(me.__33.style.opacity)>0||!me.__33.style.opacity)?'inherit':'hidden';
			me.__33.ggVisible=true;
			me.__54.style.transition='none';
			me.__54.style.visibility='hidden';
			me.__54.ggVisible=false;
		}
		me.__55.ggUpdatePosition=function (useTransition) {
		}
		el=me._rectangle_40=document.createElement('div');
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
		el=me.__56=document.createElement('div');
		els=me.__56__text=document.createElement('div');
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
		me.__56.ggUpdateText=function() {
			var params = [];
			var hs = player._("MINI MAP", params);
			if (hs!=this.ggText) {
				this.ggText=hs;
				this.ggTextDiv.innerHTML=hs;
				if (this.ggUpdatePosition) this.ggUpdatePosition();
			}
		}
		me.__56.ggUpdateText();
		el.appendChild(els);
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
		me.__56.logicBlock_scaling = function() {
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
			if (me.__56.ggCurrentLogicStateScaling != newLogicStateScaling) {
				me.__56.ggCurrentLogicStateScaling = newLogicStateScaling;
				me.__56.style.transition='transform 0s';
				if (me.__56.ggCurrentLogicStateScaling == 0) {
					me.__56.ggParameter.sx = 0.7;
					me.__56.ggParameter.sy = 0.7;
					me.__56.style.transform=parameterToTransform(me.__56.ggParameter);
					skin.updateSize(me.__56);
				}
				else {
					me.__56.ggParameter.sx = 1;
					me.__56.ggParameter.sy = 1;
					me.__56.style.transform=parameterToTransform(me.__56.ggParameter);
					skin.updateSize(me.__56);
				}
			}
		}
		me.__56.logicBlock_scaling();
		me.__56.ggUpdatePosition=function (useTransition) {
		}
		me._rectangle_40.appendChild(me.__56);
		me.__55.appendChild(me._rectangle_40);
		el=me._map_10=document.createElement('div');
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
		me.__55.appendChild(me._map_10);
		el=me._map_20=document.createElement('div');
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
		me.__55.appendChild(me._map_20);
		el=me._image_7=document.createElement('div');
		els=me._image_7__img=document.createElement('img');
		els.className='ggskin ggskin_image_7';
		hs='data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAAEAAAABACAYAAACqaXHeAAAAAXNSR0IArs4c6QAAA1xJREFUeF7tmw2O00AMhbsnA04GezLgZKAn1ZIx44yff7IloVK123YyY39+9kwmydtj5vX58Xjg/Ul1j8/y+vH85+fzLz7LdzMWOb2+NY0mzn19Op7t9v154LdsB+xxVQBwvOq0ZzNgjIPIAtg5DjlLNOHgSt6iGkkVnSIayiiIDIDvjszF6UouI+KoGysYIyAYAF7UJwwT6SO9RtUQBQDnEflRYxbFACBGIUQArIz4cvK0ZW1AmsGG8msHYGzghOUjthwBsANO5DrLoR2CB8Dm/Cs4L7BabfMA6KmuLd/YcB+0b1PnCoDtfFcnGv2iurJ2pgrzyrlfyoxUp5QbtcZlpVoAmuor5b2HydYDOmAawLT0RVm0kRuRlFTgAeiOvo'+
			'5Ud1EtqUAA2E66C98kAAhEq5cCLI5O5/40gHT/AkDnUbf8EaG0gcQkoX0I1xkBoKe+bvm/PIBp+Z8FIKUyRPsqAACaVrIFEM4dIjfPUgDG0XUglMpolCoe/wCAUDAtgBA147y3m6ubyX4ivrM7xh7LzOYqHUw4TOeNslgfS4oi1DwURdWTrmehYysAVhulIa+IRuyahC7o1RSQffyIT6trg7vj2I3PlALovNlZvfg9NUcnxqF9ufIsECroVwNAF3QAOEOeZ4yRXgmeYdwZY9AzAIitTodD8ydZoP4DUBdXqR0bAjSd/1oB0xGa7j8lfw3AFpDuNJgGoKNPrR69XeFumWoAlIGBFCht59vFAr2SChgoTWTZzC5vd0Oko29T4MyNi51T0d9L0V8BwHfTO8RR53btWi6Tr9bLLR3vrG/4vSR9Gd87YWi59NzgpNdF6Xqg'+
			'7vTojOlVIbTatTtltDdFdk9hjEhW9ymWp+sdAFsU8fkjIBxtv5XsiQCA02335DAhf7Zd3aeIyOsttjSEKIAVhGk1eJKHswDQEhQGgAehG8TKcW+MMgQWgF7W2nt48Rsig6dAmCdARMrecwe7u9BLELIAdiDkd/toDL73HqOx5WHnuG6fhlAFIOcP+tJXos79cQjjeBlCBwBtBEDg7T30sIIjKpHiVgFIK6EbwMp4yXH81Rc8Mxc/I3AoCGcAiBjd3SYM4aoAwou3KwMIQbg6gC2EOwA4hHAXAC6EOwFYQrgbgL8g3BGAhvD+GwYoHE/zzo79AAAAAElFTkSuQmCC';
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
		el.ggId="Image 7";
		el.ggParameter={ rx:0,ry:0,a:0,sx:1,sy:1,def:'' };
		el.ggVisible=true;
		el.className="ggskin ggskin_image ";
		el.ggType='image';
		hs ='';
		hs+='height : 13px;';
		hs+='position : absolute;';
		hs+='right : 8px;';
		hs+='top : 8px;';
		hs+='visibility : inherit;';
		hs+='width : 13px;';
		hs+='pointer-events:auto;';
		el.setAttribute('style',hs);
		el.style.transformOrigin='50% 50%';
		me._image_7.ggIsActive=function() {
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
		me._image_7.ggUpdatePosition=function (useTransition) {
		}
		me.__55.appendChild(me._image_7);
		me.__54.appendChild(me.__55);
		me.divSkin.appendChild(me.__54);
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
		el=me.__52=document.createElement('div');
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
		me.__52.ggIsActive=function() {
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
		me.__52.ggUpdatePosition=function (useTransition) {
		}
		el=me.__53=document.createElement('div');
		els=me.__53__text=document.createElement('div');
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
		me.__53.ggUpdateText=function() {
			var params = [];
			var hs = player._("UNFICTION", params);
			if (hs!=this.ggText) {
				this.ggText=hs;
				this.ggTextDiv.innerHTML=hs;
				if (this.ggUpdatePosition) this.ggUpdatePosition();
			}
		}
		me.__53.ggUpdateText();
		el.appendChild(els);
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
		me.__53.ggUpdatePosition=function (useTransition) {
		}
		me.__52.appendChild(me.__53);
		me._rectangle_11.appendChild(me.__52);
		el=me.__46=document.createElement('div');
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
		el=me.__114=document.createElement('div');
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
		me.__114.ggIsActive=function() {
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
		me.__114.logicBlock_bordercolor = function() {
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
			if (me.__114.ggCurrentLogicStateBorderColor != newLogicStateBorderColor) {
				me.__114.ggCurrentLogicStateBorderColor = newLogicStateBorderColor;
				me.__114.style.transition='border-color 500ms ease 0ms';
				if (me.__114.ggCurrentLogicStateBorderColor == 0) {
					me.__114.style.borderColor="rgba(0,0,0,1)";
				}
				else if (me.__114.ggCurrentLogicStateBorderColor == 1) {
					me.__114.style.borderColor="rgba(0,0,0,0)";
				}
				else {
					me.__114.style.borderColor="rgba(0,0,0,1)";
				}
			}
		}
		me.__114.logicBlock_bordercolor();
		me.__114.ggUpdatePosition=function (useTransition) {
		}
		me._small_1.appendChild(me.__114);
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
		me.__46.appendChild(me._small_1);
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
		el=me.__214=document.createElement('div');
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
		me.__214.ggIsActive=function() {
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
		me.__214.logicBlock_bordercolor = function() {
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
			if (me.__214.ggCurrentLogicStateBorderColor != newLogicStateBorderColor) {
				me.__214.ggCurrentLogicStateBorderColor = newLogicStateBorderColor;
				me.__214.style.transition='border-color 500ms ease 0ms';
				if (me.__214.ggCurrentLogicStateBorderColor == 0) {
					me.__214.style.borderColor="rgba(0,0,0,1)";
				}
				else if (me.__214.ggCurrentLogicStateBorderColor == 1) {
					me.__214.style.borderColor="rgba(0,0,0,0)";
				}
				else {
					me.__214.style.borderColor="rgba(0,0,0,0)";
				}
			}
		}
		me.__214.logicBlock_bordercolor();
		me.__214.ggUpdatePosition=function (useTransition) {
		}
		me._small_2.appendChild(me.__214);
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
		me.__46.appendChild(me._small_2);
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
		el=me.__312=document.createElement('div');
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
		me.__312.ggIsActive=function() {
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
		me.__312.logicBlock_bordercolor = function() {
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
			if (me.__312.ggCurrentLogicStateBorderColor != newLogicStateBorderColor) {
				me.__312.ggCurrentLogicStateBorderColor = newLogicStateBorderColor;
				me.__312.style.transition='border-color 500ms ease 0ms';
				if (me.__312.ggCurrentLogicStateBorderColor == 0) {
					me.__312.style.borderColor="rgba(0,0,0,1)";
				}
				else if (me.__312.ggCurrentLogicStateBorderColor == 1) {
					me.__312.style.borderColor="rgba(0,0,0,0)";
				}
				else {
					me.__312.style.borderColor="rgba(0,0,0,0)";
				}
			}
		}
		me.__312.logicBlock_bordercolor();
		me.__312.ggUpdatePosition=function (useTransition) {
		}
		me._small_3.appendChild(me.__312);
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
		me.__46.appendChild(me._small_3);
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
		el=me.__410=document.createElement('div');
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
		me.__410.ggIsActive=function() {
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
		me.__410.logicBlock_bordercolor = function() {
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
			if (me.__410.ggCurrentLogicStateBorderColor != newLogicStateBorderColor) {
				me.__410.ggCurrentLogicStateBorderColor = newLogicStateBorderColor;
				me.__410.style.transition='border-color 500ms ease 0ms';
				if (me.__410.ggCurrentLogicStateBorderColor == 0) {
					me.__410.style.borderColor="rgba(0,0,0,1)";
				}
				else if (me.__410.ggCurrentLogicStateBorderColor == 1) {
					me.__410.style.borderColor="rgba(0,0,0,0)";
				}
				else {
					me.__410.style.borderColor="rgba(0,0,0,0)";
				}
			}
		}
		me.__410.logicBlock_bordercolor();
		me.__410.ggUpdatePosition=function (useTransition) {
		}
		me._small_4.appendChild(me.__410);
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
		me.__46.appendChild(me._small_4);
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
		el=me.__51=document.createElement('div');
		els=me.__51__text=document.createElement('div');
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
		me.__51.ggUpdateText=function() {
			var params = [];
			var hs = player._("BESPOKE \ub0c9\uc7a5\uace0 1\ub3c4\uc5b4 \n\ud0a4\uce5c\ud54f 409L", params);
			if (hs!=this.ggText) {
				this.ggText=hs;
				this.ggTextDiv.innerHTML=hs;
				if (this.ggUpdatePosition) this.ggUpdatePosition();
			}
		}
		me.__51.ggUpdateText();
		el.appendChild(els);
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
		me.__51.ggUpdatePosition=function (useTransition) {
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
		me.__51.appendChild(me._rectangle_21);
		me._contextbox.appendChild(me.__51);
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
		el=me.__50=document.createElement('div');
		els=me.__50__text=document.createElement('div');
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
		me.__50.ggUpdateText=function() {
			var params = [];
			var hs = player._("\ub9de\ucda4\ud615 \uc870\ud569\uc73c\ub85c \uc8fc\ubc29\uc744 \ub098\ub2f5\uac8c \ub098\ub9cc\uc758 \uc870\ud569 & \uc624\ub9ac\uc9c0\ub110 \ud0a4\uce5c\ud54f BESPOKE \ud0a4\uce5c\ud54f\uc740 700mm \uae4a\uc774\uc758 \ub0c9\uc7a5\uace0 \ub77c\uc778\uc5d0 \ub531 \ub9de\uac8c \ub4e4\uc5b4\uac00 \ube4c\ud2b8\uc778\ucc98\ub7fc \uc5f0\ucd9c \uac00\ub2a5\ud569\ub2c8\ub2e4.\n*\uc6b0\uac1c\ud3d0 \uc88c\uac1c\ud398 \uc120\ud0dd \uac00\ub2a5\n\n\uc804\uccb4\uc6a9\ub7c9(L) 409\n\ud3ed 595mm\n\ub192\uc774 1,853mm\n\uae4a\uc774 68mm\n\n\uc5d0\ub108\uc9c0\uc18c\ube44\ud6a8\uc728\ub4f1\uae09 1\ub4f1\uae09\n\uc0c9\uc0c1 \uae00\ub7a8\ud654\uc774\ud2b8", params);
			if (hs!=this.ggText) {
				this.ggText=hs;
				this.ggTextDiv.innerHTML=hs;
				if (this.ggUpdatePosition) this.ggUpdatePosition();
			}
		}
		me.__50.ggUpdateText();
		el.appendChild(els);
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
		me._container_1111.appendChild(me.__50);
		me._container_21.appendChild(me._container_1111);
		me._contextbox.appendChild(me._container_21);
		me.__46.appendChild(me._contextbox);
		el=me.__48=document.createElement('div');
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
		me.__48.ggUpdatePosition=function (useTransition) {
		}
		el=me.__113=document.createElement('div');
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
		me.__113.ggIsActive=function() {
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
		me.__113.logicBlock_backgroundcolor = function() {
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
			if (me.__113.ggCurrentLogicStateBackgroundColor != newLogicStateBackgroundColor) {
				me.__113.ggCurrentLogicStateBackgroundColor = newLogicStateBackgroundColor;
				me.__113.style.transition='background-color 0s';
				if (me.__113.ggCurrentLogicStateBackgroundColor == 0) {
					me.__113.style.backgroundColor="rgba(89,89,89,1)";
				}
				else {
					me.__113.style.backgroundColor="rgba(89,89,89,0.392157)";
				}
			}
		}
		me.__113.logicBlock_backgroundcolor();
		me.__113.onclick=function (e) {
			player.setVariableValue('vis_button_1', true);
			player.setVariableValue('vis_button_2', false);
			player.setVariableValue('vis_button_3', false);
			player.setVariableValue('vis_button_4', false);
		}
		me.__113.ggUpdatePosition=function (useTransition) {
		}
		me.__48.appendChild(me.__113);
		el=me.__213=document.createElement('div');
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
		me.__213.ggIsActive=function() {
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
		me.__213.logicBlock_backgroundcolor = function() {
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
			if (me.__213.ggCurrentLogicStateBackgroundColor != newLogicStateBackgroundColor) {
				me.__213.ggCurrentLogicStateBackgroundColor = newLogicStateBackgroundColor;
				me.__213.style.transition='background-color 0s';
				if (me.__213.ggCurrentLogicStateBackgroundColor == 0) {
					me.__213.style.backgroundColor="rgba(89,89,89,1)";
				}
				else {
					me.__213.style.backgroundColor="rgba(89,89,89,0.392157)";
				}
			}
		}
		me.__213.logicBlock_backgroundcolor();
		me.__213.onclick=function (e) {
			player.setVariableValue('vis_button_1', false);
			player.setVariableValue('vis_button_2', true);
			player.setVariableValue('vis_button_3', false);
			player.setVariableValue('vis_button_4', false);
		}
		me.__213.ggUpdatePosition=function (useTransition) {
		}
		me.__48.appendChild(me.__213);
		el=me.__311=document.createElement('div');
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
		me.__311.ggIsActive=function() {
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
		me.__311.logicBlock_backgroundcolor = function() {
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
			if (me.__311.ggCurrentLogicStateBackgroundColor != newLogicStateBackgroundColor) {
				me.__311.ggCurrentLogicStateBackgroundColor = newLogicStateBackgroundColor;
				me.__311.style.transition='background-color 0s';
				if (me.__311.ggCurrentLogicStateBackgroundColor == 0) {
					me.__311.style.backgroundColor="rgba(89,89,89,1)";
				}
				else {
					me.__311.style.backgroundColor="rgba(89,89,89,0.392157)";
				}
			}
		}
		me.__311.logicBlock_backgroundcolor();
		me.__311.onclick=function (e) {
			player.setVariableValue('vis_button_1', false);
			player.setVariableValue('vis_button_2', false);
			player.setVariableValue('vis_button_3', true);
			player.setVariableValue('vis_button_4', false);
		}
		me.__311.ggUpdatePosition=function (useTransition) {
		}
		me.__48.appendChild(me.__311);
		el=me.__49=document.createElement('div');
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
		me.__49.logicBlock_backgroundcolor = function() {
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
			if (me.__49.ggCurrentLogicStateBackgroundColor != newLogicStateBackgroundColor) {
				me.__49.ggCurrentLogicStateBackgroundColor = newLogicStateBackgroundColor;
				me.__49.style.transition='background-color 0s';
				if (me.__49.ggCurrentLogicStateBackgroundColor == 0) {
					me.__49.style.backgroundColor="rgba(89,89,89,1)";
				}
				else {
					me.__49.style.backgroundColor="rgba(89,89,89,0.392157)";
				}
			}
		}
		me.__49.logicBlock_backgroundcolor();
		me.__49.onclick=function (e) {
			player.setVariableValue('vis_button_1', false);
			player.setVariableValue('vis_button_2', false);
			player.setVariableValue('vis_button_3', false);
			player.setVariableValue('vis_button_4', true);
		}
		me.__49.ggUpdatePosition=function (useTransition) {
		}
		me.__48.appendChild(me.__49);
		me.__46.appendChild(me.__48);
		el=me.__112=document.createElement('div');
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
		me.__112.ggIsActive=function() {
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
		me.__112.logicBlock_alpha = function() {
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
			if (me.__112.ggCurrentLogicStateAlpha != newLogicStateAlpha) {
				me.__112.ggCurrentLogicStateAlpha = newLogicStateAlpha;
				me.__112.style.transition='opacity 0s';
				if (me.__112.ggCurrentLogicStateAlpha == 0) {
					me.__112.style.visibility=me.__112.ggVisible?'inherit':'hidden';
					me.__112.style.opacity=1;
				}
				else {
					me.__112.style.visibility=me.__112.ggVisible?'inherit':'hidden';
					me.__112.style.opacity=0.01;
				}
			}
		}
		me.__112.logicBlock_alpha();
		me.__112.ggUpdatePosition=function (useTransition) {
		}
		el=me._image_1111=document.createElement('div');
		els=me._image_1111__img=document.createElement('img');
		els.className='ggskin ggskin_image_1111';
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
		me.__112.appendChild(me._image_1111);
		me.__46.appendChild(me.__112);
		el=me.__212=document.createElement('div');
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
		me.__212.ggIsActive=function() {
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
		me.__212.logicBlock_alpha = function() {
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
			if (me.__212.ggCurrentLogicStateAlpha != newLogicStateAlpha) {
				me.__212.ggCurrentLogicStateAlpha = newLogicStateAlpha;
				me.__212.style.transition='opacity 0s';
				if (me.__212.ggCurrentLogicStateAlpha == 0) {
					me.__212.style.visibility=me.__212.ggVisible?'inherit':'hidden';
					me.__212.style.opacity=1;
				}
				else {
					me.__212.style.visibility=me.__212.ggVisible?'inherit':'hidden';
					me.__212.style.opacity=0.01;
				}
			}
		}
		me.__212.logicBlock_alpha();
		me.__212.ggUpdatePosition=function (useTransition) {
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
		me.__212.appendChild(me._image_21);
		me.__46.appendChild(me.__212);
		el=me.__310=document.createElement('div');
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
		me.__310.ggIsActive=function() {
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
		me.__310.logicBlock_alpha = function() {
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
			if (me.__310.ggCurrentLogicStateAlpha != newLogicStateAlpha) {
				me.__310.ggCurrentLogicStateAlpha = newLogicStateAlpha;
				me.__310.style.transition='opacity 0s';
				if (me.__310.ggCurrentLogicStateAlpha == 0) {
					me.__310.style.visibility=me.__310.ggVisible?'inherit':'hidden';
					me.__310.style.opacity=1;
				}
				else {
					me.__310.style.visibility=me.__310.ggVisible?'inherit':'hidden';
					me.__310.style.opacity=0.01;
				}
			}
		}
		me.__310.logicBlock_alpha();
		me.__310.ggUpdatePosition=function (useTransition) {
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
		me.__310.appendChild(me._image_31);
		me.__46.appendChild(me.__310);
		el=me.__47=document.createElement('div');
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
		me.__47.ggIsActive=function() {
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
		me.__47.logicBlock_alpha = function() {
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
			if (me.__47.ggCurrentLogicStateAlpha != newLogicStateAlpha) {
				me.__47.ggCurrentLogicStateAlpha = newLogicStateAlpha;
				me.__47.style.transition='opacity 0s';
				if (me.__47.ggCurrentLogicStateAlpha == 0) {
					me.__47.style.visibility=me.__47.ggVisible?'inherit':'hidden';
					me.__47.style.opacity=1;
				}
				else {
					me.__47.style.visibility=me.__47.ggVisible?'inherit':'hidden';
					me.__47.style.opacity=0.01;
				}
			}
		}
		me.__47.logicBlock_alpha();
		me.__47.ggUpdatePosition=function (useTransition) {
		}
		el=me._image_41=document.createElement('div');
		els=me._image_41__img=document.createElement('img');
		els.className='ggskin ggskin_image_41';
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
		me.__47.appendChild(me._image_41);
		me.__46.appendChild(me.__47);
		me._rectangle_11.appendChild(me.__46);
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
		el=me.__43=document.createElement('div');
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
		me.__43.ggIsActive=function() {
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
		me.__43.ggUpdatePosition=function (useTransition) {
		}
		el=me.__44=document.createElement('div');
		els=me.__44__text=document.createElement('div');
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
		me.__44.ggUpdateText=function() {
			var params = [];
			var hs = player._("BESPOKE \ub0c9\uc7a5\uace0 1\ub3c4\uc5b4 \ud0a4\uce5c\ud54f 409L", params);
			if (hs!=this.ggText) {
				this.ggText=hs;
				this.ggTextDiv.innerHTML=hs;
				if (this.ggUpdatePosition) this.ggUpdatePosition();
			}
		}
		me.__44.ggUpdateText();
		el.appendChild(els);
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
		el=me.__45=document.createElement('div');
		els=me.__45__text=document.createElement('div');
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
		me.__45.ggUpdateText=function() {
			var params = [];
			var hs = player._("\ub9de\ucda4\ud615 \uc870\ud569\uc73c\ub85c \uc8fc\ubc29\uc744 \ub098\ub2f5\uac8c \ub098\ub9cc\uc758 \uc870\ud569 & \uc624\ub9ac\uc9c0\ub110 \ud0a4\uce5c\ud54f", params);
			if (hs!=this.ggText) {
				this.ggText=hs;
				this.ggTextDiv.innerHTML=hs;
				if (this.ggUpdatePosition) this.ggUpdatePosition();
			}
		}
		me.__45.ggUpdateText();
		el.appendChild(els);
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
		me.__45.ggUpdatePosition=function (useTransition) {
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
		me.__45.appendChild(me._text_111);
		me.__44.appendChild(me.__45);
		me.__43.appendChild(me.__44);
		me._container_3.appendChild(me.__43);
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
		el=me.__37=document.createElement('div');
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
		el=me.__42=document.createElement('div');
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
		me.__42.ggUpdatePosition=function (useTransition) {
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
		me.__42.appendChild(me._image_6);
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
		me.__42.appendChild(me._image_111);
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
		me.__42.appendChild(me._image_12);
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
		me.__42.appendChild(me._image_131);
		me.__37.appendChild(me.__42);
		el=me.__41=document.createElement('div');
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
		me.__41.ggUpdatePosition=function (useTransition) {
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
		me.__41.appendChild(me._text_21);
		me.__37.appendChild(me.__41);
		el=me.__38=document.createElement('div');
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
		el=me.__111=document.createElement('div');
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
		me.__111.ggIsActive=function() {
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
		me.__111.logicBlock_bordercolor = function() {
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
			if (me.__111.ggCurrentLogicStateBorderColor != newLogicStateBorderColor) {
				me.__111.ggCurrentLogicStateBorderColor = newLogicStateBorderColor;
				me.__111.style.transition='border-color 0s';
				if (me.__111.ggCurrentLogicStateBorderColor == 0) {
					me.__111.style.borderColor="rgba(0,0,0,1)";
				}
				else {
					me.__111.style.borderColor="rgba(255,255,255,1)";
				}
			}
		}
		me.__111.logicBlock_bordercolor();
		me.__111.onclick=function (e) {
			player.setVariableValue('vis_button_1', true);
			player.setVariableValue('vis_button_2', false);
			player.setVariableValue('vis_button_3', false);
			player.setVariableValue('vis_button_4', false);
		}
		me.__111.ggUpdatePosition=function (useTransition) {
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
		me.__111.appendChild(me._image_711);
		me.__38.appendChild(me.__111);
		el=me.__211=document.createElement('div');
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
		me.__211.ggIsActive=function() {
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
		me.__211.logicBlock_bordercolor = function() {
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
			if (me.__211.ggCurrentLogicStateBorderColor != newLogicStateBorderColor) {
				me.__211.ggCurrentLogicStateBorderColor = newLogicStateBorderColor;
				me.__211.style.transition='border-color 0s';
				if (me.__211.ggCurrentLogicStateBorderColor == 0) {
					me.__211.style.borderColor="rgba(0,0,0,1)";
				}
				else {
					me.__211.style.borderColor="rgba(255,255,255,1)";
				}
			}
		}
		me.__211.logicBlock_bordercolor();
		me.__211.onclick=function (e) {
			player.setVariableValue('vis_button_1', false);
			player.setVariableValue('vis_button_2', true);
			player.setVariableValue('vis_button_3', false);
			player.setVariableValue('vis_button_4', false);
		}
		me.__211.ggUpdatePosition=function (useTransition) {
		}
		el=me._image_811=document.createElement('div');
		els=me._image_811__img=document.createElement('img');
		els.className='ggskin ggskin_image_811';
		hs='data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAAJkAAACfCAYAAADqBXunAAAACXBIWXMAAAsTAAALEwEAmpwYAAATVklEQVR4nO2dXYwlx1XHf9V9Z3Z2sitbNrv+WGftddjYjh07QGwT2wRshOPlKcLiGZFAJByQQEJGggeEIgGOFFk8RERCgQdegQgREovICgrOx1NsQNFqnTi247UX72Ice1bZmbm36/BQ/VFdt7pv3zv3Y6aq/9Lu7VvdVV13+7//c+rUqWp15coVloDrgI8C9wC3ASeBnwKOAu8BNpfRiUjxE+By/ud/gVeBc8ALwHPAm4vugFoQyVLgF4GPA48Ady7iJj32DAG+BzwL/DPwDSCb903mTbIbgE8DvwncOM+GeywFbwBfBL6QH88F8yLZSeBJ4JPAxjwa7LFS7AJ/D3wGY173hL2S7Cjwp8DvAet77UyPfYdt4L'+
			'PAXwIzE2UvJHsM+Bvgplkb6HFg8BLwBPBvs1ROZqizBjwFfIWeYLHgfcAzGEUbTFt5WiW7HvgS8PPT3qhHMPgP4NeZIvQxjZL9NPBNeoLFjl/AxNdu7VqhK8l+dtqGewSNQnA+2OXiLiS7E2OPr9tDp3qEh+sxQdzbJ104iWQ3YQh2bA6d6hEejmEGgK38aCPZOvAP9CPIHu04hRkMNsZJ20j2OeD+efeoR5B4EBPe8KIphHEG+FdALahTPcKDAB8Dvuae8JHsMGZm/tTi+9UjMHwfuBszHVXCZy7/mJ5gPWbDaeCP3EJXyU4CLwKHltSppeD57z7Ps88+S5qmvPfkSdYGA0ajEQIM0pR0MEC0RosmyzSiNUmSgjL+QpIkDIdDyI8BVJKYOloDkA5SlFLoTKOUYjgcoZS5bjAYkKYpWTYydVFkWQZKcd3x4zz40IOr'+
			'+GdZFLYxcbTXiwJ3HupJAiMYwJsX3+TRRx9lc3OTI0eOGELk7qYICIJoQSlDIqUUhl5iGlCqdE5FQFmeqoiYq/K/tAg6y9DaEHY0Gtb6InnLg8EaFy5c4I0LrxMYNoA/BP6gKLBJdj3wiWX3aCkQxalTpzh23B/OGe6O0DojTQcM1tK53Xa4OywVsA7F+qF1dnd3efXVV+Z2v32ETwF/DlyCOsmewDj9wUElip2dXQBGw8wSKaMrOzvbjEYj1tcPAeuoRJUiZhqwjt1yqX8qjLoNRyN2trcR8VUyarizs83W1uV5/tT9gk0Mn/4MKsc/JVQVA0QLWrRVUBzY7FHGh/IEbVRRR+wC67v1Kfmf3d1dtNiV3JsrhsMhFy9dnPr3HBB8kpxfBcl+CTixqt4sGkmacPhwLtIFQXxkKhjmCI80qZrnu1JGybTW1qnxm4kIhw'+
			'5tcPVVV3X5CQcR7wUegopkj6+uL4tHmuQks4RFSUEIM0JMEkWSpMaRF42Iq0A5JKeMq2YWj7TOCqNIbQBRlglaZ1x77TXccccd8/mR+xOPQ0Wyj62wIwuHMmwyblP+3IvHPhqN0FrKUWVh7koUPlfZmOXOle1X3wXYHZrwSGVnbVTfRYRMz30F2n7CY2BIdpJY8sREKN2k3KyNRuYhJ0la+WOFAJX1qu9jvLHMqVKgs4wsGzkG0m2Q6nuDYAaC9wM3DIgg07WIZRmV0hRyVJhGgCSxg1/mL3t8oCS3tpp8gKDq5/OD0SgbD6aNyWFVFjbHAHhgQIeks4MOMRHXnFR1c2X4oFCqPsNWo4XUB6RVWMKWt9z8ZZX5q3tjPjoJKnyW3Z0QAcnqUKX1EqQMW7ihCzV2UIdvwGmi/Bmt5nFsODpV5w8i3p9g5pmChvhUJA8z'+
			'VEqmaoHT0nFv9ttzVZTSJ8uyESI6J6w493WDanUVDBi3DoggtTpR48kmIsZJFxEzGQ6WKRWU/fR94Ypy8AAoQ7TRaOS0Y1+Mv0wTOq5OMFsNhI0GSyW5n6ZU0u6AN3CmiJcpilFlV8bY8Y+OVQ4ujkZBMnEtVXXGMpVNU0BFACw/tq6zBcsQrIsX7zI+eJYdHRDBRil5Uk9VYI00y9SeMlKbXyL2zLdT32lbUIyyUcMsgT2ahco+Fh5b8MPLI1Pva3AQIbWAhPGftM7QWkjTpJwFGKsl1bFdrpyhqIhGZ02R+xaiiuDlZWCYZcOVAwdxXKUiniXezIwcyuP4j38BjMPfONfpVaqmtsNEFCQrMiOgivprbdRNJbmMOWpWji49g0M7MKtFGA5HNLOlnUUqApZFQTIoppaKuJbko0rH/W53qWplIpKPKnVdETuRxp4HCN'+
			'9exkEyJ0+sGEkWI0tfTlgXCMa3E1vafLk/kSMKx9+VI9H5nGWiypGlGVy6oQk3+or13RQVq5WapwbcUap7WfhKFgXJVP6QC19M55mHST4xLiL1DFgpCOeG+vP2lFFBrQvfblKE3xfx9x2HiTjMZY5iblJ0Pm1Umsoij4d67HUCtDtCBRoVy3tNDG5/JCQrTZqVpmP4VTxkz6NuffpmMj3TWUPowlWqpsYEiYBlUZDMLOyQPPhZBUC7OvhOa2VWbeWPQZ1MtWw07zVlblv4LlkcJFNJQvE0tc7KSHvzxLg9A+6Wm8Is86lYUwxkPOWnmJyPAVGQDKk/WC1VsqKfZWqcG0U5IHlyYjW/2TUQGwepXEQxuiTPx7fTr4t0aynjF/m1tim1csYUIPk4YZRlZXxMKbHceHvAoKmTrJoOr0rHY3QhIgqSSe47lesplVk4YpIi'+
			'iuGkp2KRnVGczo+zUVb6Y7bFk9r3QgrH5dLOvoiAY3GYy/JRW9NBpUmsXTXZx9J+O9pSr/3aGNyyKJSsjmLPi6bRn4HU/yKP0OZ7krUFX9sCrx5GRSBlUSiZgnzRiFGhao2lNC9L8jn9Alrby+qa8vddNKmfxMCxOJRMMCk5WhfL1RITxpgQcfeFGHQegC1WJDVNPdXv3oQYKBaNkql8UlzKrAvb+a5gK46MlQkmqDtuaWdxrIzZrpveMBEHyRJVbk+glCJxtxAoF4lYZeW5vI0y8bHJH1P4zWdDnxRsbV3myvZC3gG/rxCFuTQ+2bhqGWtYzzUbJ5qZ4RQqv25sqwvcOh36lCS8/fb/sTYI/xGE/wu96OILOYtFtL3ivDgvnmubfDRH5QQrCyRsRGEuC4+qUh+f7+WW16G1zoO6hQI2hS2aR5IuEqVI0/D/n0dBsn'+
			'zyCKWS0rca96+a5yGNw29NiJdKVr/KOtmpR2tra7xnc3OK33EwEQfJavM9TXGslurWSyHqddy2uq9YUsBwOGRnZ6f13iEgDpKNoSna7zOBYt5S4k5SlgeKySNLd0RK/taSIdvb2/4qASF8h8BBmXWRfzOwCVJNbFemdVzFZIxodnsN97Z8ueLKbEwhw0NESpYryBjBimP7j3Umzz/ztVU/biKYO3dp/ogWrrnmGnYjMJeRKZmzK0ZtlFgni8oTyrTWHv50z7JoOi+iOXr0KBuHNjr1/CAjCiUzfr+2Mi+aQgx18uhibYBVXr3cy8a0wS7ThoiQDub3Lqf9ijiUTKp5y/EdeQptG/et3I2MW25As+PftA7TlBW7PIaMKJSsji7mzZBt/N1IRoGaVznZKtdlMKA6kvhgIw4lY8ydp1CYul+ma+XiGfk1b5AitSN3h/5m'+
			'KvUkCwd2mKumUH5zpss1mtY5RbUmoIaqjeLyKlDhUzRLCsPnWEQkazRx/tGlyQByGNBpozuf/9V0vfQT5GHDN/dYRfCXs29YBAwjJiXLTZ8/JEGtTES3qNYk2CPVtlEnLeVhISolq/ti49NIxfdqi4q9KI17nwZEIGZRkczADjO4zr8pr+YqZ1GabnXi0DCDCEk2Pj9pq47Uh4czoJs0VdG08B9BFD5ZkU5WhSSa/SXdOco/DyxrgLFahP/fqETHhzlxU7t5wqeq4SEOkomtF+3L1vwiNg0RpiRNBFstRkEyQfIpIneFkT2qVB2jFv51APXzDf0Q12zHgThIJrZC2SNLX8r1JC9pL+QYN48xbE0cBcmaUVe1amQ56cVaTSenIUweLlF9+nUYKPL0xzhgB2BdYvnDHO1aN4PvFoHVjCKEofOdqnPtqJ2zX+zlmtC2jY'+
			'fnFnoI31rGo2QV3Ih//QX30JRi3YZZmJLfIwIli4Jk5vXPxTfX+W5Qq6l4M9v0kyBNO7cEhSjMZeFHaa3N9urApHhZU2b+vCghYpbFxSBlUSiZlVZhPdOu6dEV5q85k/Z6DANxkMyGGjswkHnqVHfEMHcZhbkEK30n3yvWlTbjs3WLWY1vHdV9h8UYEQXJxjMr7CzYeZBjD1m0EXAzCnNZOfq+PSxWiThGl1GQzL+h8B7QWr1pW6qmSuFLWRTm0rzKuS02NiWmntf0zCAI9OYyJChof5rTRvjngPCtZIk4SObl1354yhHIGJGYy9quAOVztcMV/oddXw/ghxtdm260uh+IvnhEoWTZKHNK5pdO7dtyOA596o4oSDbKRuVxV+1YOFEiYmIUJFOWY7+MZ9uJyKr4CN9kRkEyg+lSeLo/et/GLZNKasuJO9/poCIikuVk'+
			'6Lr80q7T4coOd55YFioiIpnM8GTbR5Xl8Qxi1PqClMAQRwijBVUS4zgmhSOmJZp3kj58axmTkuF9oKudUYyAYcRGsghM035EFOayWH1UZGNMn0PWJyXuBVEo2WAwAKTDyvAKtamiBRKsj5MFApVM/zPnmH3mhdZClmUkafiPIPxfiLWUd8KArssCNd81re21NJikKVtbWxPuePARhU8GxQPX5YKSNjJNyjwTAY04JrWlPe9JIU0StrYut9QMA1Eo2XSL3abb83XafrgtJEnvkwWB6caG89gWqlsLQj1DJFTEYS4LG9cBzao3+wizTH10Iv7ifU9TeIhCySp+TFajRRivlg0+zZuBA0ccJKthf/lAMezjH/4vBIdXYoUW8h0Wy9J62KG2kYFgXdeSnSFVG/ZnU50YHP84fDJ7uaNYEXyxCqlH9m2i2ZdNpoQ47KwXjV'+
			'0dwS7YcShZiYoys+yjOI/XecWIKEhWj7wvfrbQJ05N94zhRfdRmEsFaNG5/9WcpDgr3LCHUv5QiM80Vm+kCxdRKBlQysuyQhRd5w1iMKNRkGz/rgiS2RYIHDBEYS7bILUVHROnxj3161uM1Xdh7NBmBPuTRU0yafnWdrW7nacd7lANdeySSdeEhijMZdN40n5lxHzu09yeuwKujMyFz7E4SGa/+q8WXM0/fRTcy7OfvKbcir2Fby3jMJcmTparhkW2Nszz2Tev64QIIhgkwO6qO7EMdKPWPO4xbY3g7eXlBAg/yXwBAVgfIrB8s2BrgCHZtavuySKhVLfZR3fkN+/Ja7u94jCZYSXVAcPlBHhr1b1YNKqH206atoUhizJqEWRhvJ0AP1p1Lw4CvCPQjvxouyyCzNiXE+DcqnuxaFRxsny3RalGm0LxaZOmJQHMbncK'+
			'J8ynpWbf4+A9uXMD4PlV92JZUKpKWiw397TTXnGI1hG+eJvt3ylfWf5ugTR8n+y/EuA7q+7FslAQaE/7JzbkirltutH/MR+vJHXwPtm3Bhif7GXg1Io7szAIQpKmDAaD3AfyP1j7lZfFKro2a+bLGWu71nbi1tYGpGkaurn8PnChiPg/A/zOCjuzUCQq4d133uHSpYsMhyPAbHZi3k0uJZmU74HniRS64XXObabSbjdNUjKtEa0RhPX1dd7+8Y9Jw95w5atQTSv9IwGTbG1tjaeffprnX3iBtbU1lMDx646TZZrNzc18aylIBymJRbTKPROSJKmULb8mQUGiSFCIo4CoPCNXa7Is4913t9jYOMSRI0c4dGiD7Z1t0iTlkV9+eEn/CivBl6Ai2b8DbwA3rqo3i8TGxgZnzpzh5ptv4dyL5/jhSy9x+vRp7rrrLgaDNW'+
			'6//TY2Dm8AfhMpWlCJQmcm3JAkCVprRqMRmdYkSVIOKuxPpRRbW5f58r98mddee40TJz7Afffex6n33VqS++qrr1r2P8ey8BrwDahIlgF/B/zJqnq0SNx737289dZb3HjjDbzyyssMhyPOn3+dD33oZ/jtT/3Wwu9/8eJFNjcPc+LETXzkgY9w9z13L/ye+wB/S/4CK3XlypWi8AbgJeDwijq1cJw9e5ZvffPbvHb+Rxw7dpwPf/jnuP/++5dybxHx+3xh4gpwC3AR6iQD+DzwxPL71CMw/BXw+8UXl2Q3Y2YADi23Tz0CwjZwGjhfFLjj51eBzy2zRz2Cw1NYBINxJQPYBL6Hsak9ekyDHwAfxKhZCV8k8CfAp4kgZbPHXCEYf37bPdEUbv4K8IVF9qhHcHgK+JrvhM9cFlgHngPuXVCneoSD54CHAe8GuG0TZ7vA'+
			'r+E4cT16ODgPPE4DwWDyusvzwK8Cl+bYqR7h4BLwKHnQtQldUgD+G3iMnmg96vgf4FeAs5Mu7Jpn8l3gIeCV2fvUIyD8AHgQ+M8uF0+TzPQi8AARZdL28OI5jOD8sGuFaTPmLgAfBZ6mj6PFBsGEKR4G3pymYlsIYxLOAH+Nme/sETZexgRan5ml8l5yf78KfAD4CyLZTyNC7AKfAe5kRoLB3pTMxi3Ak8An6DM4QsA28EXgs8xh8fe8SFbgBPC7wG9gkiB7HCy8gcmQ/jzG/54L5k2yAinwCPDx/PP2Rdykx1xwFvg68E+YtR7ZvG+wKJK5uBEzKr0HuA1jXo8BR4FgV1LsI7yD2b3pIiZn8BzwAmahx9wUqwn/DxWcjJC0Ev2PAAAAAElFTkSuQmCC';
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
		me.__211.appendChild(me._image_811);
		me.__38.appendChild(me.__211);
		el=me.__39=document.createElement('div');
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
		me.__39.logicBlock_bordercolor = function() {
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
			if (me.__39.ggCurrentLogicStateBorderColor != newLogicStateBorderColor) {
				me.__39.ggCurrentLogicStateBorderColor = newLogicStateBorderColor;
				me.__39.style.transition='border-color 0s';
				if (me.__39.ggCurrentLogicStateBorderColor == 0) {
					me.__39.style.borderColor="rgba(0,0,0,1)";
				}
				else {
					me.__39.style.borderColor="rgba(255,255,255,1)";
				}
			}
		}
		me.__39.logicBlock_bordercolor();
		me.__39.onclick=function (e) {
			player.setVariableValue('vis_button_1', false);
			player.setVariableValue('vis_button_2', false);
			player.setVariableValue('vis_button_3', true);
			player.setVariableValue('vis_button_4', false);
		}
		me.__39.ggUpdatePosition=function (useTransition) {
		}
		el=me._image_911=document.createElement('div');
		els=me._image_911__img=document.createElement('img');
		els.className='ggskin ggskin_image_911';
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
		me.__39.appendChild(me._image_911);
		me.__38.appendChild(me.__39);
		el=me.__40=document.createElement('div');
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
		me.__40.logicBlock_bordercolor = function() {
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
			if (me.__40.ggCurrentLogicStateBorderColor != newLogicStateBorderColor) {
				me.__40.ggCurrentLogicStateBorderColor = newLogicStateBorderColor;
				me.__40.style.transition='border-color 0s';
				if (me.__40.ggCurrentLogicStateBorderColor == 0) {
					me.__40.style.borderColor="rgba(0,0,0,1)";
				}
				else {
					me.__40.style.borderColor="rgba(255,255,255,1)";
				}
			}
		}
		me.__40.logicBlock_bordercolor();
		me.__40.onclick=function (e) {
			player.setVariableValue('vis_button_1', false);
			player.setVariableValue('vis_button_2', false);
			player.setVariableValue('vis_button_3', false);
			player.setVariableValue('vis_button_4', true);
		}
		me.__40.ggUpdatePosition=function (useTransition) {
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
		me.__40.appendChild(me._image_1011);
		me.__38.appendChild(me.__40);
		me.__37.appendChild(me.__38);
		me._container_3.appendChild(me.__37);
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
		el=me.__33=document.createElement('div');
		el.ggId="\ubbf8\ub2c8\ub9f5-\ubaa8\ubc14\uc77c-\ud655\ub300";
		el.ggDy=0;
		el.ggParameter={ rx:0,ry:0,a:0,sx:1,sy:1,def:'' };
		el.ggVisible=false;
		el.className="ggskin ggskin_container ";
		el.ggType='container';
		hs ='';
		hs+='height : 55%;';
		hs+='left : 20px;';
		hs+='position : absolute;';
		hs+='top : calc(50% - ((55% + 0px) / 2) + 0px);';
		hs+='visibility : hidden;';
		hs+='width : 85%;';
		hs+='pointer-events:none;';
		el.setAttribute('style',hs);
		el.style.transformOrigin='50% 50%';
		me.__33.ggIsActive=function() {
			return false;
		}
		el.ggElementNodeId=function() {
			return player.getCurrentNode();
		}
		me.__33.logicBlock_position = function() {
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
			if (me.__33.ggCurrentLogicStatePosition != newLogicStatePosition) {
				me.__33.ggCurrentLogicStatePosition = newLogicStatePosition;
				me.__33.style.transition='left 500ms ease 0ms, top 500ms ease 0ms, transform 0s';
				if (me.__33.ggCurrentLogicStatePosition == 0) {
					me.__33.style.left='5px';
					me.__33.style.top = 'calc(50% - (55% / 2) + (0px / 2) + -120px)';
				}
				else {
					me.__33.style.left='20px';
					me.__33.style.top='calc(50% - ((55% + 0px) / 2) + 0px)';
				}
			}
		}
		me.__33.logicBlock_position();
		me.__33.logicBlock_scaling = function() {
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
			if (me.__33.ggCurrentLogicStateScaling != newLogicStateScaling) {
				me.__33.ggCurrentLogicStateScaling = newLogicStateScaling;
				me.__33.style.transition='left 500ms ease 0ms, top 500ms ease 0ms, transform 0s';
				if (me.__33.ggCurrentLogicStateScaling == 0) {
					me.__33.ggParameter.sx = 0.85;
					me.__33.ggParameter.sy = 0.8;
					me.__33.style.transform=parameterToTransform(me.__33.ggParameter);
					skin.updateSize(me.__33);
				}
				else {
					me.__33.ggParameter.sx = 1;
					me.__33.ggParameter.sy = 1;
					me.__33.style.transform=parameterToTransform(me.__33.ggParameter);
					skin.updateSize(me.__33);
				}
			}
		}
		me.__33.logicBlock_scaling();
		me.__33.ggUpdatePosition=function (useTransition) {
		}
		el=me.__34=document.createElement('div');
		el.ggId="\ubbf8\ub2c8\ub9f5\ubc30\uacbd-\ubaa8\ubc14\uc77c-\ud655\ub300";
		el.ggParameter={ rx:0,ry:0,a:0,sx:1,sy:1,def:'' };
		el.ggVisible=true;
		el.className="ggskin ggskin_rectangle ";
		el.ggType='rectangle';
		hs ='';
		hs+='background : rgba(255,255,255,0.470588);';
		hs+='border : 0px solid #000000;';
		hs+='border-radius : 20px 20px 20px 20px;';
		hs+='cursor : pointer;';
		hs+='height : 100%;';
		hs+='left : 0px;';
		hs+='position : absolute;';
		hs+='top : 0px;';
		hs+='visibility : inherit;';
		hs+='width : 100%;';
		hs+='pointer-events:auto;';
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
		me.__34.ggUpdatePosition=function (useTransition) {
		}
		el=me._rectangle_4=document.createElement('div');
		el.ggId="Rectangle 4-\ubaa8\ubc14\uc77c-\ud655\ub300";
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
		me._rectangle_4.ggUpdatePosition=function (useTransition) {
		}
		el=me.__35=document.createElement('div');
		els=me.__35__text=document.createElement('div');
		el.className='ggskin ggskin_textdiv';
		el.ggTextDiv=els;
		el.ggId="\ubbf8\ub2c8\ub9f5\ud0c0\uc774\ud2c0-\ubaa8\ubc14\uc77c-\ud655\ub300";
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
		me.__35.ggUpdateText=function() {
			var params = [];
			var hs = player._("MINI MAP", params);
			if (hs!=this.ggText) {
				this.ggText=hs;
				this.ggTextDiv.innerHTML=hs;
				if (this.ggUpdatePosition) this.ggUpdatePosition();
			}
		}
		me.__35.ggUpdateText();
		el.appendChild(els);
		me.__35.ggIsActive=function() {
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
		me.__35.ggUpdatePosition=function (useTransition) {
		}
		me._rectangle_4.appendChild(me.__35);
		me.__34.appendChild(me._rectangle_4);
		el=me._map_1=document.createElement('div');
		el.ggFilter = '';
		el.ggFilteredIds = [];
		el.ggMapNotLoaded = true;
		el.ggMapId = 'FloorPlan01';
		el.ggId="Map 1-\ubaa8\ubc14\uc77c-\ud655\ub300";
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
		me.__34.appendChild(me._map_1);
		el=me._map_2=document.createElement('div');
		el.ggFilter = '';
		el.ggFilteredIds = [];
		el.ggMapNotLoaded = true;
		el.ggMapId = 'FloorPlan02';
		el.ggId="Map 2-\ubaa8\ubc14\uc77c-\ud655\ub300";
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
		me.__34.appendChild(me._map_2);
		el=me._image_2=document.createElement('div');
		els=me._image_2__img=document.createElement('img');
		els.className='ggskin ggskin_image_2';
		hs='data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAAEAAAABACAYAAACqaXHeAAAAAXNSR0IArs4c6QAAAyZJREFUeF7tmw1OwzAMhbuTAScDTgacDGTUJxljt/5rWFoqIcZI0vjzs5Ol3m25+HU7wP7HZVno52Edm17L65298bosC//7gCnZQ3YBeFlv8VyYPUH4WGEMA1IFQIZbRnMjyDBcUAb9ramD3qe+Q5SRBWAZTpOmC4rwCIIgAKIEcjiIDIA3xXNkeMRoCwxgSBBd4/+6bwQATYqM59dRE9NAHHIvLwAp+UMmo8hCQqeQePLElbeNB8BfGQ8bpBpaIewB+GvjuSN57mmDsAVAyo+kN2x9NiTMHdIShhaAezQeTLgSyhAsAK038SakQLtPsZVOL8EaAO79MuGAUZGmUqF7ucwcW+vIvZ8eOGJNsm1LPpAGtgyaNCjTjYdCylmyEw'+
			'ZsW2YyVgX6lB3GAfC4uoclz8uh5DQOYJbYl2C4CsJhwDuUSHrddUC70qoFALPKHzzhvPCyDQBc/jPFPwCkw0ACmCX7b+WBkAPPAiAdwgAwawLkZwY4rQrlAQnA2zn94SO4ClBIej+CpxJhBoB2Nhi0K9Tc65RhAGj22slwyKpAY29SGwogMP8hTdObof9VYPUPJD3rPqC8DKZ3UkMEvn8TPn9vzvgeFSGQHmB/bkNapBWsfRr0LjtDLHPchMs/HMJnOA9Ixz8PAXo9ax4oHeRYR2KzhEFJ/lIBUgUzQCifY2hnaKktpSNZdTcpe19TwEwqKHvfAkDvlx84dLtbjFd+HoDxrGNkfoPw2jrQ+PLcts7R2yg3Aml/bL/3IOGeHpPLapXQnt9ywh4AmQ/KkkuqQatLbFmmPQC0IqUhVZwrrK1q1DIEDwA4bXTBFN2Pymp5'+
			'0SQqUXl5bglCBIDcIwBMaQJKSGiF1zL02pwRBUDz1ao4cXRdCQ2r4twC3AIhAwBOs+p66f8ockZbfrYPSeO3lHlEWWUIFQAeEJmkHw2pEoQOABwEvaYEZX0PQAOCL0ogx2SgpSF0ApAT5xC07wEgVDIGa31SEI4E0GVYZJwwhLMB0JbqzZxyRgAhCGcF4IZwZgAuCGcHsAvhCgA2IVwFgAnhSgA0CLerAeAQvvcHVwTwY2f5BT9H6kFjaySzAAAAAElFTkSuQmCC';
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
		el.ggId="Image 2";
		el.ggParameter={ rx:0,ry:0,a:0,sx:1,sy:1,def:'' };
		el.ggVisible=true;
		el.className="ggskin ggskin_image ";
		el.ggType='image';
		hs ='';
		hs+='cursor : pointer;';
		hs+='height : 20px;';
		hs+='position : absolute;';
		hs+='right : 15px;';
		hs+='top : 15px;';
		hs+='visibility : inherit;';
		hs+='width : 20px;';
		hs+='pointer-events:auto;';
		el.setAttribute('style',hs);
		el.style.transformOrigin='50% 50%';
		me._image_2.ggIsActive=function() {
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
		me._image_2.onclick=function (e) {
			me.__33.style.transition='none';
			me.__33.style.visibility='hidden';
			me.__33.ggVisible=false;
			me.__54.style.transition='none';
			me.__54.style.visibility=(Number(me.__54.style.opacity)>0||!me.__54.style.opacity)?'inherit':'hidden';
			me.__54.ggVisible=true;
		}
		me._image_2.ggUpdatePosition=function (useTransition) {
		}
		me.__34.appendChild(me._image_2);
		me.__33.appendChild(me.__34);
		me.divSkin.appendChild(me.__33);
		el=me.__9=document.createElement('div');
		el.ggId="\uc0ac\uc6a9\uc548\ub0b4";
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
		me.__9.ggIsActive=function() {
			return false;
		}
		el.ggElementNodeId=function() {
			return player.getCurrentNode();
		}
		me.__9.logicBlock_visible = function() {
			var newLogicStateVisible;
			if (
				((player.getViewerSize().width <= 640))
			)
			{
				newLogicStateVisible = 0;
			}
			else if (
				((player.getViewerSize().width > 640))
			)
			{
				newLogicStateVisible = 1;
			}
			else if (
				((player.getIsMobile() == false))
			)
			{
				newLogicStateVisible = 2;
			}
			else if (
				((player.getIsMobile() == true))
			)
			{
				newLogicStateVisible = 3;
			}
			else {
				newLogicStateVisible = -1;
			}
			if (me.__9.ggCurrentLogicStateVisible != newLogicStateVisible) {
				me.__9.ggCurrentLogicStateVisible = newLogicStateVisible;
				me.__9.style.transition='';
				if (me.__9.ggCurrentLogicStateVisible == 0) {
					me.__9.style.visibility="hidden";
					me.__9.ggVisible=false;
				}
				else if (me.__9.ggCurrentLogicStateVisible == 1) {
					me.__9.style.visibility=(Number(me.__9.style.opacity)>0||!me.__9.style.opacity)?'inherit':'hidden';
					me.__9.ggVisible=true;
				}
				else if (me.__9.ggCurrentLogicStateVisible == 2) {
					me.__9.style.visibility=(Number(me.__9.style.opacity)>0||!me.__9.style.opacity)?'inherit':'hidden';
					me.__9.ggVisible=true;
				}
				else if (me.__9.ggCurrentLogicStateVisible == 3) {
					me.__9.style.visibility="hidden";
					me.__9.ggVisible=false;
				}
				else {
					me.__9.style.visibility="hidden";
					me.__9.ggVisible=false;
				}
			}
		}
		me.__9.logicBlock_visible();
		me.__9.ggUpdatePosition=function (useTransition) {
		}
		el=me.__11=document.createElement('div');
		el.ggId="\uc0ac\uc6a9\uc548\ub0b4\ubc30\uacbd";
		el.ggParameter={ rx:0,ry:0,a:0,sx:1,sy:1,def:'' };
		el.ggVisible=true;
		el.className="ggskin ggskin_rectangle ";
		el.ggType='rectangle';
		hs ='';
		hs+='background : rgba(255,255,255,0.666667);';
		hs+='border : 0px solid #000000;';
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
		el=me.__12=document.createElement('div');
		el.ggId="\uc0ac\uc6a9\uc548\ub0b4\ucee8\ud150\uce20";
		el.ggDx=0;
		el.ggDy=0;
		el.ggParameter={ rx:0,ry:0,a:0,sx:1,sy:1,def:'' };
		el.ggVisible=true;
		el.className="ggskin ggskin_container ";
		el.ggType='container';
		hs ='';
		hs+='height : 700px;';
		hs+='left : calc(50% - ((600px + 0px) / 2) + 0px);';
		hs+='position : absolute;';
		hs+='top : calc(50% - ((700px + 0px) / 2) + 0px);';
		hs+='visibility : inherit;';
		hs+='width : 600px;';
		hs+='pointer-events:none;';
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
		me.__12.ggUpdatePosition=function (useTransition) {
		}
		el=me.__29=document.createElement('div');
		el.ggId="\ubaa8\ub378\ud558\uc6b0\uc2a4\uad00\ub78c";
		el.ggDx=0;
		el.ggParameter={ rx:0,ry:0,a:0,sx:1,sy:1,def:'' };
		el.ggVisible=true;
		el.className="ggskin ggskin_container ";
		el.ggType='container';
		hs ='';
		hs+='height : 10%;';
		hs+='left : calc(50% - ((100% + 0px) / 2) + 0px);';
		hs+='position : absolute;';
		hs+='top : 0px;';
		hs+='visibility : inherit;';
		hs+='width : 100%;';
		hs+='pointer-events:none;';
		el.setAttribute('style',hs);
		el.style.transformOrigin='50% 50%';
		me.__29.ggIsActive=function() {
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
		me.__29.ggUpdatePosition=function (useTransition) {
		}
		el=me.__32=document.createElement('div');
		els=me.__32__text=document.createElement('div');
		el.className='ggskin ggskin_textdiv';
		el.ggTextDiv=els;
		el.ggId="\ubaa8\ub378\ud558\uc6b0\uc2a4 \uad00\ub78c";
		el.ggParameter={ rx:0,ry:0,a:0,sx:1,sy:1,def:'' };
		el.ggVisible=true;
		el.className="ggskin ggskin_text ";
		el.ggType='text';
		hs ='';
		hs+='border : 0px solid #000000;';
		hs+='color : rgba(34,34,34,1);';
		hs+='cursor : default;';
		hs+='height : 100%;';
		hs+='left : 0px;';
		hs+='position : absolute;';
		hs+='top : 0px;';
		hs+='visibility : inherit;';
		hs+='width : 100%;';
		hs+='pointer-events:auto;';
		hs+='@import url(\"https:\/\/fonts.googleapis.com\/css2?family=Nanum+Gothic:wght@400;700&display=swap\"); font-family: \"Nanum Gothic\", sans-serif; letter-spacing:1px;';
		el.setAttribute('style',hs);
		el.style.transformOrigin='50% 50%';
		hs ='';
		hs += 'box-sizing: border-box;';
		hs+='cursor: default;';
		hs+='width: 100%;';
		hs+='height: auto;';
		hs+='max-height: 100%;';
		hs+='font-size: 26px;';
		hs+='font-weight: 600;';
		hs+='text-align: center;';
		hs+='position: absolute;';
		hs+='top: 50%;';
		hs+='transform: translate(0, -50%);';
		hs+='white-space: pre;';
		hs+='padding: 0px;';
		hs+='overflow: hidden;';
		hs+='overflow-y: auto;';
		els.setAttribute('style',hs);
		me.__32.ggUpdateText=function() {
			var params = [];
			var hs = player._("\ubaa8\ub378\ud558\uc6b0\uc2a4 \uad00\ub78c", params);
			if (hs!=this.ggText) {
				this.ggText=hs;
				this.ggTextDiv.innerHTML=hs;
				if (this.ggUpdatePosition) this.ggUpdatePosition();
			}
		}
		me.__32.ggUpdateText();
		el.appendChild(els);
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
		me.__32.ggUpdatePosition=function (useTransition) {
		}
		el=me._container_40=document.createElement('div');
		el.ggId="Container 4";
		el.ggParameter={ rx:0,ry:0,a:0,sx:1,sy:1,def:'' };
		el.ggVisible=true;
		el.className="ggskin ggskin_container ";
		el.ggType='container';
		hs ='';
		hs+='height : 70px;';
		hs+='left : 400px;';
		hs+='position : absolute;';
		hs+='top : 0px;';
		hs+='visibility : inherit;';
		hs+='width : 100px;';
		hs+='pointer-events:none;';
		el.setAttribute('style',hs);
		el.style.transformOrigin='50% 50%';
		me._container_40.ggIsActive=function() {
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
		me._container_40.ggUpdatePosition=function (useTransition) {
		}
		el=me._tip0=document.createElement('div');
		els=me._tip0__text=document.createElement('div');
		el.className='ggskin ggskin_textdiv';
		el.ggTextDiv=els;
		el.ggId="TIP";
		el.ggParameter={ rx:0,ry:0,a:0,sx:1,sy:1,def:'' };
		el.ggVisible=true;
		el.className="ggskin ggskin_text ";
		el.ggType='text';
		hs ='';
		hs+='border : 0px solid #000000;';
		hs+='color : rgba(254,153,0,1);';
		hs+='cursor : default;';
		hs+='height : 100%;';
		hs+='position : absolute;';
		hs+='right : 0px;';
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
		hs+='font-size: 26px;';
		hs+='font-weight: 500;';
		hs+='text-align: left;';
		hs+='position: absolute;';
		hs+='top: 50%;';
		hs+='transform: translate(0, -50%);';
		hs+='white-space: pre;';
		hs+='padding: 0px;';
		hs+='overflow: hidden;';
		els.setAttribute('style',hs);
		me._tip0.ggUpdateText=function() {
			var params = [];
			var hs = player._("Tip", params);
			if (hs!=this.ggText) {
				this.ggText=hs;
				this.ggTextDiv.innerHTML=hs;
				if (this.ggUpdatePosition) this.ggUpdatePosition();
			}
		}
		me._tip0.ggUpdateText();
		el.appendChild(els);
		me._tip0.ggIsActive=function() {
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
		me._tip0.ggUpdatePosition=function (useTransition) {
		}
		me._container_40.appendChild(me._tip0);
		me.__32.appendChild(me._container_40);
		me.__29.appendChild(me.__32);
		me.__12.appendChild(me.__29);
		el=me.__16=document.createElement('div');
		el.ggId="\uc544\uc774\ucf58";
		el.ggDy=-50;
		el.ggParameter={ rx:0,ry:0,a:0,sx:1,sy:1,def:'' };
		el.ggVisible=true;
		el.className="ggskin ggskin_container ";
		el.ggType='container';
		hs ='';
		hs+='height : 30%;';
		hs+='left : 0px;';
		hs+='position : absolute;';
		hs+='top : calc(50% - ((30% + 0px) / 2) - 50px);';
		hs+='visibility : inherit;';
		hs+='width : 100%;';
		hs+='pointer-events:none;';
		el.setAttribute('style',hs);
		el.style.transformOrigin='50% 50%';
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
		el=me.__110=document.createElement('div');
		el.ggId="\uc544\uc774\ucf581";
		el.ggParameter={ rx:0,ry:0,a:0,sx:1,sy:1,def:'' };
		el.ggVisible=true;
		el.className="ggskin ggskin_container ";
		el.ggType='container';
		hs ='';
		hs+='height : 100%;';
		hs+='left : -100px;';
		hs+='position : absolute;';
		hs+='top : 0px;';
		hs+='visibility : inherit;';
		hs+='width : 33.5%;';
		hs+='pointer-events:none;';
		el.setAttribute('style',hs);
		el.style.transformOrigin='50% 50%';
		me.__110.ggIsActive=function() {
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
		me.__110.ggUpdatePosition=function (useTransition) {
		}
		el=me._image_8=document.createElement('div');
		els=me._image_8__img=document.createElement('img');
		els.className='ggskin ggskin_image_8';
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
		el.ggId="Image 8";
		el.ggDx=0;
		el.ggParameter={ rx:0,ry:0,a:0,sx:1,sy:1,def:'' };
		el.ggVisible=true;
		el.className="ggskin ggskin_image ";
		el.ggType='image';
		hs ='';
		hs+='height : 120px;';
		hs+='left : calc(50% - ((100px + 0px) / 2) + 0px);';
		hs+='position : absolute;';
		hs+='top : 0px;';
		hs+='visibility : inherit;';
		hs+='width : 100px;';
		hs+='pointer-events:auto;';
		el.setAttribute('style',hs);
		el.style.transformOrigin='50% 50%';
		me._image_8.ggIsActive=function() {
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
		me._image_8.ggUpdatePosition=function (useTransition) {
		}
		el=me.__28=document.createElement('div');
		els=me.__28__img=document.createElement('img');
		els.className='ggskin ggskin__28';
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
		el.ggId="\uc67c\ucabd";
		el.ggDy=0;
		el.ggParameter={ rx:0,ry:0,a:0,sx:1,sy:1,def:'' };
		el.ggVisible=true;
		el.className="ggskin ggskin_image ";
		el.ggType='image';
		hs ='';
		hs+='height : 50px;';
		hs+='left : -40px;';
		hs+='position : absolute;';
		hs+='top : calc(50% - ((50px + 0px) / 2) + 0px);';
		hs+='visibility : inherit;';
		hs+='width : 50px;';
		hs+='pointer-events:auto;';
		el.setAttribute('style',hs);
		el.style.transformOrigin='50% 50%';
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
		me.__28.logicBlock_position = function() {
			var newLogicStatePosition;
			if (
				((player.getVariableValue('vis_direction') == true))
			)
			{
				newLogicStatePosition = 0;
			}
			else {
				newLogicStatePosition = -1;
			}
			if (me.__28.ggCurrentLogicStatePosition != newLogicStatePosition) {
				me.__28.ggCurrentLogicStatePosition = newLogicStatePosition;
				me.__28.style.transition='left 300ms ease 0ms, top 300ms ease 0ms';
				if (me.__28.ggCurrentLogicStatePosition == 0) {
					me.__28.style.left='-30px';
					me.__28.style.top = 'calc(50% - (50px / 2))';
				}
				else {
					me.__28.style.left='-40px';
					me.__28.style.top='calc(50% - ((50px + 0px) / 2) + 0px)';
				}
			}
		}
		me.__28.logicBlock_position();
		me.__28.ggUpdatePosition=function (useTransition) {
		}
		me._image_8.appendChild(me.__28);
		el=me.__27=document.createElement('div');
		els=me.__27__img=document.createElement('img');
		els.className='ggskin ggskin__27';
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
		el.ggId="\uc624\ub978\ucabd";
		el.ggDy=0;
		el.ggParameter={ rx:0,ry:0,a:180,sx:1,sy:1,def:'' };
		el.ggVisible=true;
		el.className="ggskin ggskin_image ";
		el.ggType='image';
		hs ='';
		hs+='height : 50px;';
		hs+='position : absolute;';
		hs+='right : -40px;';
		hs+='top : calc(50% - ((50px + 0px) / 2) + 0px);';
		hs+='visibility : inherit;';
		hs+='width : 50px;';
		hs+='pointer-events:auto;';
		el.setAttribute('style',hs);
		el.style.transformOrigin='50% 50%';
		el.style.transform=parameterToTransform(el.ggParameter);
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
		me.__27.logicBlock_position = function() {
			var newLogicStatePosition;
			if (
				((player.getVariableValue('vis_direction') == true))
			)
			{
				newLogicStatePosition = 0;
			}
			else {
				newLogicStatePosition = -1;
			}
			if (me.__27.ggCurrentLogicStatePosition != newLogicStatePosition) {
				me.__27.ggCurrentLogicStatePosition = newLogicStatePosition;
				me.__27.style.transition='right 300ms ease 0ms, top 300ms ease 0ms';
				if (me.__27.ggCurrentLogicStatePosition == 0) {
					me.__27.style.right='-30px';
					me.__27.style.top = 'calc(50% - (50px / 2))';
				}
				else {
					me.__27.style.right='-40px';
					me.__27.style.top='calc(50% - ((50px + 0px) / 2) + 0px)';
				}
			}
		}
		me.__27.logicBlock_position();
		me.__27.ggActivate=function () {
			player.setVariableValue('vis_direction', !player.getVariableValue('vis_direction'));
		}
		me.__27.ggUpdatePosition=function (useTransition) {
		}
		me._image_8.appendChild(me.__27);
		el=me._timer_2=document.createElement('div');
		el.ggTimestamp=skin.ggCurrentTime;
		el.ggLastIsActive=true;
		el.ggTimeout=150;
		el.ggId="Timer 2";
		el.ggParameter={ rx:0,ry:0,a:0,sx:1,sy:1,def:'' };
		el.ggVisible=true;
		el.className="ggskin ggskin_timer ";
		el.ggType='timer';
		hs ='';
		hs+='height : 20px;';
		hs+='left : 88px;';
		hs+='position : absolute;';
		hs+='top : 343px;';
		hs+='visibility : inherit;';
		hs+='width : 100px;';
		hs+='pointer-events:none;';
		el.setAttribute('style',hs);
		el.style.transformOrigin='50% 50%';
		me._timer_2.ggIsActive=function() {
			return (me._timer_2.ggTimestamp==0 ? false : (Math.floor((skin.ggCurrentTime - me._timer_2.ggTimestamp) / me._timer_2.ggTimeout) % 2 == 0));
		}
		el.ggElementNodeId=function() {
			if ((this.parentNode) && (this.parentNode.ggElementNodeId)) {
				return this.parentNode.ggElementNodeId();
			}
			return player.getCurrentNode();
		}
		me._timer_2.logicBlock_visible = function() {
			var newLogicStateVisible;
			if (
				((me._timer_2.ggIsActive() == true))
			)
			{
				newLogicStateVisible = 0;
			}
			else {
				newLogicStateVisible = -1;
			}
			if (me._timer_2.ggCurrentLogicStateVisible != newLogicStateVisible) {
				me._timer_2.ggCurrentLogicStateVisible = newLogicStateVisible;
				me._timer_2.style.transition='';
				if (me._timer_2.ggCurrentLogicStateVisible == 0) {
					me._timer_2.style.visibility=(Number(me._timer_2.style.opacity)>0||!me._timer_2.style.opacity)?'inherit':'hidden';
					me._timer_2.ggVisible=true;
				}
				else {
					me._timer_2.style.visibility=(Number(me._timer_2.style.opacity)>0||!me._timer_2.style.opacity)?'inherit':'hidden';
					me._timer_2.ggVisible=true;
				}
			}
		}
		me._timer_2.logicBlock_visible();
		me._timer_2.ggActivate=function () {
			player.setVariableValue('vis_direction', !player.getVariableValue('vis_direction'));
		}
		me._timer_2.ggCurrentLogicStateVisible = -1;
		me._timer_2.ggUpdateConditionTimer=function () {
			me._timer_2.logicBlock_visible();
		}
		me._timer_2.ggUpdatePosition=function (useTransition) {
		}
		me._image_8.appendChild(me._timer_2);
		me.__110.appendChild(me._image_8);
		el=me._text_1=document.createElement('div');
		els=me._text_1__text=document.createElement('div');
		el.className='ggskin ggskin_textdiv';
		el.ggTextDiv=els;
		el.ggId="Text 1";
		el.ggParameter={ rx:0,ry:0,a:0,sx:1,sy:1,def:'' };
		el.ggVisible=true;
		el.className="ggskin ggskin_text ";
		el.ggType='text';
		hs ='';
		hs+='border : 0px solid #000000;';
		hs+='bottom : -10px;';
		hs+='color : rgba(34,34,34,1);';
		hs+='cursor : default;';
		hs+='height : 80px;';
		hs+='left : 0px;';
		hs+='position : absolute;';
		hs+='visibility : inherit;';
		hs+='width : 100%;';
		hs+='pointer-events:auto;';
		hs+='@import url(\"https:\/\/fonts.googleapis.com\/css2?family=Nanum+Gothic:wght@400;700&display=swap\"); font-family: \"Nanum Gothic\", sans-serif; line-height:20px;';
		el.setAttribute('style',hs);
		el.style.transformOrigin='50% 50%';
		hs ='';
		hs += 'box-sizing: border-box;';
		hs+='cursor: default;';
		hs+='width: 100%;';
		hs+='height: 100%;';
		hs+='font-size: 14px;';
		hs+='font-weight: 600;';
		hs+='text-align: center;';
		hs+='white-space: pre;';
		hs+='padding: 0px;';
		hs+='overflow: hidden;';
		hs+='overflow-y: auto;';
		els.setAttribute('style',hs);
		me._text_1.ggUpdateText=function() {
			var params = [];
			var hs = player._("\ub9c8\uc6b0\uc2a4 \uc67c\ucabd\uc744 \ub204\ub978\ucc44 \uc6c0\uc9c1\uc774\uc2dc\uba74\n\uacf5\uac04\uc744 \ub458\ub7ec\ubcf4\uc2e4 \uc218 \uc788\uc2b5\ub2c8\ub2e4.", params);
			if (hs!=this.ggText) {
				this.ggText=hs;
				this.ggTextDiv.innerHTML=hs;
				if (this.ggUpdatePosition) this.ggUpdatePosition();
			}
		}
		me._text_1.ggUpdateText();
		el.appendChild(els);
		me._text_1.ggIsActive=function() {
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
		me._text_1.ggUpdatePosition=function (useTransition) {
		}
		me.__110.appendChild(me._text_1);
		me.__16.appendChild(me.__110);
		el=me.__24=document.createElement('div');
		el.ggId="\uc544\uc774\ucf582";
		el.ggDx=0;
		el.ggParameter={ rx:0,ry:0,a:0,sx:1,sy:1,def:'' };
		el.ggVisible=true;
		el.className="ggskin ggskin_container ";
		el.ggType='container';
		hs ='';
		hs+='height : 100%;';
		hs+='left : calc(50% - ((33.3% + 0px) / 2) + 0px);';
		hs+='position : absolute;';
		hs+='top : 0px;';
		hs+='visibility : inherit;';
		hs+='width : 33.3%;';
		hs+='pointer-events:none;';
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
		el=me.__18=document.createElement('div');
		els=me.__18__img=document.createElement('img');
		els.className='ggskin ggskin__18';
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
		el.ggId="\ub9c8\uc6b0\uc2a4";
		el.ggDx=0;
		el.ggParameter={ rx:0,ry:0,a:0,sx:1,sy:1,def:'' };
		el.ggVisible=true;
		el.className="ggskin ggskin_image ";
		el.ggType='image';
		hs ='';
		hs+='height : 120px;';
		hs+='left : calc(50% - ((100px + 0px) / 2) + 0px);';
		hs+='position : absolute;';
		hs+='top : 0px;';
		hs+='visibility : inherit;';
		hs+='width : 100px;';
		hs+='pointer-events:auto;';
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
		el=me.__26=document.createElement('div');
		els=me.__26__img=document.createElement('img');
		els.className='ggskin ggskin__26';
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
		el.ggId="\uc544\ub798";
		el.ggDx=0;
		el.ggParameter={ rx:0,ry:0,a:270,sx:1,sy:1,def:'' };
		el.ggVisible=true;
		el.className="ggskin ggskin_image ";
		el.ggType='image';
		hs ='';
		hs+='bottom : 20px;';
		hs+='height : 50px;';
		hs+='left : calc(50% - ((50px + 0px) / 2) + 0px);';
		hs+='position : absolute;';
		hs+='visibility : inherit;';
		hs+='width : 50px;';
		hs+='pointer-events:auto;';
		el.setAttribute('style',hs);
		el.style.transformOrigin='50% 50%';
		el.style.transform=parameterToTransform(el.ggParameter);
		me.__26.ggIsActive=function() {
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
		me.__26.logicBlock_position = function() {
			var newLogicStatePosition;
			if (
				((player.getVariableValue('vis_direction') == true))
			)
			{
				newLogicStatePosition = 0;
			}
			else {
				newLogicStatePosition = -1;
			}
			if (me.__26.ggCurrentLogicStatePosition != newLogicStatePosition) {
				me.__26.ggCurrentLogicStatePosition = newLogicStatePosition;
				me.__26.style.transition='left 300ms ease 0ms, bottom 300ms ease 0ms';
				if (me.__26.ggCurrentLogicStatePosition == 0) {
					me.__26.style.left = 'calc(50% - (50px / 2))';
					me.__26.style.bottom='10px';
				}
				else {
					me.__26.style.left='calc(50% - ((50px + 0px) / 2) + 0px)';
					me.__26.style.bottom='20px';
				}
			}
		}
		me.__26.logicBlock_position();
		me.__26.ggUpdatePosition=function (useTransition) {
		}
		me.__18.appendChild(me.__26);
		el=me.__19=document.createElement('div');
		els=me.__19__img=document.createElement('img');
		els.className='ggskin ggskin__19';
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
		el.ggId="\uc704";
		el.ggDx=0;
		el.ggParameter={ rx:0,ry:0,a:90,sx:1,sy:1,def:'' };
		el.ggVisible=true;
		el.className="ggskin ggskin_image ";
		el.ggType='image';
		hs ='';
		hs+='height : 50px;';
		hs+='left : calc(50% - ((50px + 0px) / 2) + 0px);';
		hs+='position : absolute;';
		hs+='top : -40px;';
		hs+='visibility : inherit;';
		hs+='width : 50px;';
		hs+='pointer-events:auto;';
		el.setAttribute('style',hs);
		el.style.transformOrigin='50% 50%';
		el.style.transform=parameterToTransform(el.ggParameter);
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
		me.__19.logicBlock_position = function() {
			var newLogicStatePosition;
			if (
				((player.getVariableValue('vis_direction') == true))
			)
			{
				newLogicStatePosition = 0;
			}
			else {
				newLogicStatePosition = -1;
			}
			if (me.__19.ggCurrentLogicStatePosition != newLogicStatePosition) {
				me.__19.ggCurrentLogicStatePosition = newLogicStatePosition;
				me.__19.style.transition='left 300ms ease 0ms, top 300ms ease 0ms';
				if (me.__19.ggCurrentLogicStatePosition == 0) {
					me.__19.style.left = 'calc(50% - (50px / 2))';
					me.__19.style.top='-30px';
				}
				else {
					me.__19.style.left='calc(50% - ((50px + 0px) / 2) + 0px)';
					me.__19.style.top='-40px';
				}
			}
		}
		me.__19.logicBlock_position();
		me.__19.ggActivate=function () {
			player.setVariableValue('vis_direction', !player.getVariableValue('vis_direction'));
		}
		me.__19.ggUpdatePosition=function (useTransition) {
		}
		me.__18.appendChild(me.__19);
		me.__24.appendChild(me.__18);
		el=me.__25=document.createElement('div');
		els=me.__25__text=document.createElement('div');
		el.className='ggskin ggskin_textdiv';
		el.ggTextDiv=els;
		el.ggId="2";
		el.ggParameter={ rx:0,ry:0,a:0,sx:1,sy:1,def:'' };
		el.ggVisible=true;
		el.className="ggskin ggskin_text ";
		el.ggType='text';
		hs ='';
		hs+='border : 0px solid #000000;';
		hs+='bottom : -10px;';
		hs+='color : rgba(34,34,34,1);';
		hs+='cursor : default;';
		hs+='height : 80px;';
		hs+='left : 0px;';
		hs+='position : absolute;';
		hs+='visibility : inherit;';
		hs+='width : 100%;';
		hs+='pointer-events:auto;';
		hs+='@import url(\"https:\/\/fonts.googleapis.com\/css2?family=Nanum+Gothic:wght@400;700&display=swap\"); font-family: \"Nanum Gothic\", sans-serif; line-height:20px;';
		el.setAttribute('style',hs);
		el.style.transformOrigin='50% 50%';
		hs ='';
		hs += 'box-sizing: border-box;';
		hs+='cursor: default;';
		hs+='width: 100%;';
		hs+='height: 100%;';
		hs+='font-size: 14px;';
		hs+='font-weight: 600;';
		hs+='text-align: center;';
		hs+='white-space: pre;';
		hs+='padding: 0px;';
		hs+='overflow: hidden;';
		hs+='overflow-y: auto;';
		els.setAttribute('style',hs);
		me.__25.ggUpdateText=function() {
			var params = [];
			var hs = player._("\ub9c8\uc6b0\uc2a4 \ud720\uc744 \uc0ac\uc6a9\ud558\uc2dc\uba74\n\ud655\ub300\/\ucd95\uc18c\ub97c \ud558\uc2e4 \uc218 \uc788\uc73c\uc2ed\ub2c8\ub2e4.", params);
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
		me.__25.ggUpdatePosition=function (useTransition) {
		}
		me.__24.appendChild(me.__25);
		me.__16.appendChild(me.__24);
		el=me.__31=document.createElement('div');
		el.ggId="\uc544\uc774\ucf583";
		el.ggParameter={ rx:0,ry:0,a:0,sx:1,sy:1,def:'' };
		el.ggVisible=true;
		el.className="ggskin ggskin_container ";
		el.ggType='container';
		hs ='';
		hs+='height : 100%;';
		hs+='position : absolute;';
		hs+='right : -100px;';
		hs+='top : 0px;';
		hs+='visibility : inherit;';
		hs+='width : 33.3%;';
		hs+='pointer-events:none;';
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
		me.__31.ggUpdatePosition=function (useTransition) {
		}
		el=me._image_9=document.createElement('div');
		els=me._image_9__img=document.createElement('img');
		els.className='ggskin ggskin_image_9';
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
		el.ggId="Image 9";
		el.ggDx=20;
		el.ggParameter={ rx:0,ry:0,a:0,sx:1,sy:1,def:'' };
		el.ggVisible=true;
		el.className="ggskin ggskin_image ";
		el.ggType='image';
		hs ='';
		hs+='height : 110px;';
		hs+='left : calc(50% - ((91px + 0px) / 2) + 20px);';
		hs+='position : absolute;';
		hs+='top : 0px;';
		hs+='visibility : inherit;';
		hs+='width : 91px;';
		hs+='pointer-events:auto;';
		el.setAttribute('style',hs);
		el.style.transformOrigin='50% 50%';
		me._image_9.ggIsActive=function() {
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
		me._image_9.logicBlock_position = function() {
			var newLogicStatePosition;
			if (
				((player.getVariableValue('vis_direction') == true))
			)
			{
				newLogicStatePosition = 0;
			}
			else {
				newLogicStatePosition = -1;
			}
			if (me._image_9.ggCurrentLogicStatePosition != newLogicStatePosition) {
				me._image_9.ggCurrentLogicStatePosition = newLogicStatePosition;
				me._image_9.style.transition='left 800ms ease 100ms, top 800ms ease 100ms';
				if (me._image_9.ggCurrentLogicStatePosition == 0) {
					me._image_9.style.left = 'calc(50% - (91px / 2) + (0px / 2) + 20px)';
					me._image_9.style.top='-10px';
				}
				else {
					me._image_9.style.left='calc(50% - ((91px + 0px) / 2) + 20px)';
					me._image_9.style.top='0px';
				}
			}
		}
		me._image_9.logicBlock_position();
		me._image_9.ggUpdatePosition=function (useTransition) {
		}
		me.__31.appendChild(me._image_9);
		el=me._image_10=document.createElement('div');
		els=me._image_10__img=document.createElement('img');
		els.className='ggskin ggskin_image_10';
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
		el.ggId="Image 10";
		el.ggDx=35;
		el.ggParameter={ rx:0,ry:0,a:0,sx:1,sy:1,def:'' };
		el.ggVisible=true;
		el.className="ggskin ggskin_image ";
		el.ggType='image';
		hs ='';
		hs+='height : 110px;';
		hs+='left : calc(50% - ((91px + 0px) / 2) + 35px);';
		hs+='position : absolute;';
		hs+='top : 0px;';
		hs+='visibility : inherit;';
		hs+='width : 91px;';
		hs+='pointer-events:auto;';
		el.setAttribute('style',hs);
		el.style.transformOrigin='50% 50%';
		me._image_10.ggIsActive=function() {
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
		me._image_10.logicBlock_position = function() {
			var newLogicStatePosition;
			if (
				((player.getVariableValue('vis_direction') == true))
			)
			{
				newLogicStatePosition = 0;
			}
			else {
				newLogicStatePosition = -1;
			}
			if (me._image_10.ggCurrentLogicStatePosition != newLogicStatePosition) {
				me._image_10.ggCurrentLogicStatePosition = newLogicStatePosition;
				me._image_10.style.transition='left 800ms ease 0ms, top 800ms ease 0ms';
				if (me._image_10.ggCurrentLogicStatePosition == 0) {
					me._image_10.style.left = 'calc(50% - (91px / 2) + (0px / 2) + 35px)';
					me._image_10.style.top='10px';
				}
				else {
					me._image_10.style.left='calc(50% - ((91px + 0px) / 2) + 35px)';
					me._image_10.style.top='0px';
				}
			}
		}
		me._image_10.logicBlock_position();
		me._image_10.ggUpdatePosition=function (useTransition) {
		}
		me.__31.appendChild(me._image_10);
		el=me.__17=document.createElement('div');
		els=me.__17__text=document.createElement('div');
		el.className='ggskin ggskin_textdiv';
		el.ggTextDiv=els;
		el.ggId="\ubc1c\ubc14\ub2e5 \uc124\uba85";
		el.ggParameter={ rx:0,ry:0,a:0,sx:1,sy:1,def:'' };
		el.ggVisible=true;
		el.className="ggskin ggskin_text ";
		el.ggType='text';
		hs ='';
		hs+='border : 0px solid #000000;';
		hs+='bottom : -10px;';
		hs+='color : rgba(34,34,34,1);';
		hs+='cursor : default;';
		hs+='height : 80px;';
		hs+='left : 0px;';
		hs+='position : absolute;';
		hs+='visibility : inherit;';
		hs+='width : 122%;';
		hs+='pointer-events:auto;';
		hs+='@import url(\"https:\/\/fonts.googleapis.com\/css2?family=Nanum+Gothic:wght@400;700&display=swap\"); font-family: \"Nanum Gothic\", sans-serif; word-break:keep-all; line-height:20px;';
		el.setAttribute('style',hs);
		el.style.transformOrigin='50% 50%';
		hs ='';
		hs += 'box-sizing: border-box;';
		hs+='cursor: default;';
		hs+='width: 100%;';
		hs+='height: 100%;';
		hs+='font-size: 14px;';
		hs+='font-weight: 600;';
		hs+='text-align: center;';
		hs+='white-space: pre-line;';
		hs+='padding: 0px;';
		hs+='overflow: hidden;';
		els.setAttribute('style',hs);
		me.__17.ggUpdateText=function() {
			var params = [];
			var hs = player._("\ubc14\ub2e5\uba74 \uc120\ud0dd \ub610\ub294 \uacf5\uac04 \uce74\ud14c\uace0\ub9ac\ub85c \uacf5\uac04\uc744 \uc790\uc720\ub86d\uac8c \uc774\ub3d9\ud560 \uc218 \uc788\uc2b5\ub2c8\ub2e4.", params);
			if (hs!=this.ggText) {
				this.ggText=hs;
				this.ggTextDiv.innerHTML=hs;
				if (this.ggUpdatePosition) this.ggUpdatePosition();
			}
		}
		me.__17.ggUpdateText();
		el.appendChild(els);
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
		me.__17.ggUpdatePosition=function (useTransition) {
		}
		me.__31.appendChild(me.__17);
		me.__16.appendChild(me.__31);
		me.__12.appendChild(me.__16);
		el=me.__14=document.createElement('div');
		el.ggId="\ubcf8 \ub0b4\uc6a9";
		el.ggDy=30;
		el.ggParameter={ rx:0,ry:0,a:0,sx:1,sy:1,def:'' };
		el.ggVisible=true;
		el.className="ggskin ggskin_container ";
		el.ggType='container';
		hs ='';
		hs+='height : 30%;';
		hs+='left : 0px;';
		hs+='position : absolute;';
		hs+='top : calc(50% - ((30% + 0px) / 2) + 30%);';
		hs+='visibility : inherit;';
		hs+='width : 100%;';
		hs+='pointer-events:none;';
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
		me.__14.ggUpdatePosition=function (useTransition) {
		}
		el=me._rectangle_50=document.createElement('div');
		el.ggId="Rectangle 5";
		el.ggParameter={ rx:0,ry:0,a:0,sx:1,sy:1,def:'' };
		el.ggVisible=true;
		el.className="ggskin ggskin_rectangle ";
		el.ggType='rectangle';
		hs ='';
		hs+='border : 0px solid #000000;';
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
		me._rectangle_50.ggIsActive=function() {
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
		me._rectangle_50.ggUpdatePosition=function (useTransition) {
		}
		el=me.__15=document.createElement('div');
		els=me.__15__text=document.createElement('div');
		el.className='ggskin ggskin_textdiv';
		el.ggTextDiv=els;
		el.ggId="\ubcf8 \ub0b4\uc6a9 \uba58\ud2b8";
		el.ggParameter={ rx:0,ry:0,a:0,sx:1,sy:1,def:'' };
		el.ggVisible=true;
		el.className="ggskin ggskin_text ";
		el.ggType='text';
		hs ='';
		hs+='border : 0px solid #000000;';
		hs+='color : rgba(34,34,34,1);';
		hs+='cursor : default;';
		hs+='height : 100%;';
		hs+='left : 0px;';
		hs+='position : absolute;';
		hs+='top : 0px;';
		hs+='visibility : inherit;';
		hs+='width : 100%;';
		hs+='pointer-events:auto;';
		hs+='@import url(\"https:\/\/fonts.googleapis.com\/css2?family=Nanum+Gothic:wght@400;700&display=swap\"); font-family: \"Nanum Gothic\", sans-serif; word-break:keep-all; line-height:23px;';
		el.setAttribute('style',hs);
		el.style.transformOrigin='50% 50%';
		hs ='';
		hs += 'box-sizing: border-box;';
		hs+='cursor: default;';
		hs+='width: 100%;';
		hs+='height: 100%;';
		hs+='font-size: 12px;';
		hs+='font-weight: inherit;';
		hs+='text-align: center;';
		hs+='white-space: pre;';
		hs+='padding: 0px;';
		hs+='overflow: hidden;';
		els.setAttribute('style',hs);
		me.__15.ggUpdateText=function() {
			var params = [];
			var hs = player._("\u203b\n\ubcf8 \ucee8\ud150\uce20\ub294 \uc18c\ube44\uc790\uc758 \uc774\ud574\ub97c \ub3d5\uae30 \uc704\ud574 \uc81c\uc791\ub41c \uac83\uc73c\ub85c \uc2e4\uc81c\uc640 \ucc28\uc774\uac00 \uc788\uc73c\uba70\n\uac01\uc885 \uc804\uc2dc\ubb3c \ubc0f \uc18c\ud488, \uc5f0\ucd9c\uc6a9 \uc2dc\uacf5\ubd80\ubd84\uc774 \ud3ec\ud568\ub418\uc5b4 \uc788\uc2b5\ub2c8\ub2e4.\n\uc774\ub3d9\uc2dd \uac00\uad6c \ubc0f \uc18c\ud488\ub4e4\uc740 \uc81c\uacf5\ud488\ubaa9\uc5d0 \ud3ec\ud568\ub418\uc5b4 \uc788\uc9c0 \uc54a\uc2b5\ub2c8\ub2e4. \n\uad6c\uccb4\uc801\uc778 \ud488\ubaa9\uc5d0 \ub300\ud55c \uc790\uc138\ud55c \uc815\ubcf4\uc640 \ucd5c\uc2e0\uc815\ucc45\uc815\ubcf4\ub294 \uace0\uac1d\uc13c\ud130\uc5d0 \uc9c1\uc811 \ubb38\uc758\ud574 \uc8fc\uc138\uc694.\n\ubcf8 \ucee8\ud150\uce20\ub97c \ubb34\ub2e8\uc73c\ub85c \ucea1\uccd0\ud558\uac70\ub098 \ubc30\ud3ec\ud560 \uc2dc \uc800\uc791\uad8c\ubc95 \uc704\ubc18\uc73c\ub85c \ubc95\uc801\uc778 \uccb4\uc81c\ub97c \ubc1b\uc744 \uc218 \uc788\uc2b5\ub2c8\ub2e4.", params);
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
		me._rectangle_50.appendChild(me.__15);
		me.__14.appendChild(me._rectangle_50);
		me.__12.appendChild(me.__14);
		el=me.__13=document.createElement('div');
		el.ggId="\uad00\ub78c\ud558\uae30\ubc84\ud2bc";
		el.ggDx=0;
		el.ggParameter={ rx:0,ry:0,a:0,sx:1,sy:1,def:'' };
		el.ggVisible=true;
		el.className="ggskin ggskin_container ";
		el.ggType='container';
		hs ='';
		hs+='bottom : 0px;';
		hs+='cursor : pointer;';
		hs+='height : 50px;';
		hs+='left : calc(50% - ((200px + 0px) / 2) + 0px);';
		hs+='position : absolute;';
		hs+='visibility : inherit;';
		hs+='width : 200px;';
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
		me.__13.onclick=function (e) {
			me.__9.style.transition='none';
			me.__9.style.visibility='hidden';
			me.__9.ggVisible=false;
		}
		me.__13.ggUpdatePosition=function (useTransition) {
		}
		el=me._text_20=document.createElement('div');
		els=me._text_20__text=document.createElement('div');
		el.className='ggskin ggskin_textdiv';
		el.ggTextDiv=els;
		el.ggId="Text 2";
		el.ggParameter={ rx:0,ry:0,a:0,sx:1,sy:1,def:'' };
		el.ggVisible=true;
		el.className="ggskin ggskin_text ";
		el.ggType='text';
		hs ='';
		hs+='background : #fe9900;';
		hs+='border : 3px solid #ffffff;';
		hs+='border-radius : 25px;';
		hs+='color : rgba(255,255,255,1);';
		hs+='cursor : default;';
		hs+='height : 100%;';
		hs+='left : 0px;';
		hs+='position : absolute;';
		hs+='top : 0px;';
		hs+='visibility : inherit;';
		hs+='width : 100%;';
		hs+='pointer-events:auto;';
		hs+='@import url(\"https:\/\/fonts.googleapis.com\/css2?family=Nanum+Gothic:wght@400;700&display=swap\"); font-family: \"Nanum Gothic\", sans-serif; word-break:keep-all; letter-spacing:1px;';
		el.setAttribute('style',hs);
		el.style.transformOrigin='50% 50%';
		hs ='';
		hs += 'box-sizing: border-box;';
		hs+='cursor: default;';
		hs+='width: 100%;';
		hs+='height: auto;';
		hs+='max-height: 100%;';
		hs+='font-size: 17px;';
		hs+='font-weight: 600;';
		hs+='text-align: center;';
		hs+='position: absolute;';
		hs+='top: 50%;';
		hs+='transform: translate(0, -50%);';
		hs+='white-space: pre;';
		hs+='padding: 6px;';
		hs+='overflow: hidden;';
		els.setAttribute('style',hs);
		me._text_20.ggUpdateText=function() {
			var params = [];
			var hs = player._("\uad00\ub78c\ud558\uae30", params);
			if (hs!=this.ggText) {
				this.ggText=hs;
				this.ggTextDiv.innerHTML=hs;
				if (this.ggUpdatePosition) this.ggUpdatePosition();
			}
		}
		me._text_20.ggUpdateText();
		el.appendChild(els);
		me._text_20.ggIsActive=function() {
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
		me._text_20.ggUpdatePosition=function (useTransition) {
		}
		me.__13.appendChild(me._text_20);
		me.__12.appendChild(me.__13);
		me.__11.appendChild(me.__12);
		me.__9.appendChild(me.__11);
		me.divSkin.appendChild(me.__9);
		el=me.__8=document.createElement('div');
		el.ggId="\ubc1c\uc790\uad6d";
		el.ggParameter={ rx:0,ry:0,a:0,sx:1,sy:1,def:'' };
		el.ggVisible=false;
		el.className="ggskin ggskin_container ";
		el.ggType='container';
		hs ='';
		hs+='height : 50px;';
		hs+='left : 0px;';
		hs+='position : absolute;';
		hs+='top : 0px;';
		hs+='visibility : hidden;';
		hs+='width : 50px;';
		hs+='pointer-events:none;';
		el.setAttribute('style',hs);
		el.style.transformOrigin='50% 50%';
		me.__8.ggIsActive=function() {
			return false;
		}
		el.ggElementNodeId=function() {
			return player.getCurrentNode();
		}
		me.__8.logicBlock_visible = function() {
			var newLogicStateVisible;
			if (
				((player.hotspot.description == "\ubc1c\uc790\uad6d"))
			)
			{
				newLogicStateVisible = 0;
			}
			else if (
				((player.getHasTouch() == true)) && 
				((player.hotspot.description == "\ubc1c\uc790\uad6d"))
			)
			{
				newLogicStateVisible = 1;
			}
			else {
				newLogicStateVisible = -1;
			}
			if (me.__8.ggCurrentLogicStateVisible != newLogicStateVisible) {
				me.__8.ggCurrentLogicStateVisible = newLogicStateVisible;
				me.__8.style.transition='';
				if (me.__8.ggCurrentLogicStateVisible == 0) {
					me.__8.style.visibility=(Number(me.__8.style.opacity)>0||!me.__8.style.opacity)?'inherit':'hidden';
					me.__8.ggVisible=true;
				}
				else if (me.__8.ggCurrentLogicStateVisible == 1) {
					me.__8.style.visibility=(Number(me.__8.style.opacity)>0||!me.__8.style.opacity)?'inherit':'hidden';
					me.__8.ggVisible=true;
				}
				else {
					me.__8.style.visibility="hidden";
					me.__8.ggVisible=false;
				}
			}
		}
		me.__8.logicBlock_visible();
		me.__8.ggUpdatePosition=function (useTransition) {
		}
		el=me.__23=document.createElement('div');
		el.ggTimestamp=skin.ggCurrentTime;
		el.ggLastIsActive=true;
		el.ggTimeout=300;
		el.ggId="\ubc1c\uc790\uad6d \ud0c0\uc774\uba38 2";
		el.ggDx=0;
		el.ggDy=0;
		el.ggParameter={ rx:0,ry:0,a:0,sx:1,sy:1,def:'' };
		el.ggVisible=true;
		el.className="ggskin ggskin_timer ";
		el.ggType='timer';
		hs ='';
		hs+='height : 50%;';
		hs+='left : calc(50% - ((50% + 0px) / 2) + 0px);';
		hs+='position : absolute;';
		hs+='top : calc(50% - ((50% + 0px) / 2) + 0px);';
		hs+='visibility : inherit;';
		hs+='width : 50%;';
		hs+='pointer-events:none;';
		el.setAttribute('style',hs);
		el.style.transformOrigin='50% 50%';
		me.__23.ggIsActive=function() {
			return (me.__23.ggTimestamp==0 ? false : (Math.floor((skin.ggCurrentTime - me.__23.ggTimestamp) / me.__23.ggTimeout) % 2 == 0));
		}
		el.ggElementNodeId=function() {
			if ((this.parentNode) && (this.parentNode.ggElementNodeId)) {
				return this.parentNode.ggElementNodeId();
			}
			return player.getCurrentNode();
		}
		me.__23.logicBlock_position = function() {
			var newLogicStatePosition;
			if (
				((player.getVariableValue('vis_foot') == true))
			)
			{
				newLogicStatePosition = 0;
			}
			else {
				newLogicStatePosition = -1;
			}
			if (me.__23.ggCurrentLogicStatePosition != newLogicStatePosition) {
				me.__23.ggCurrentLogicStatePosition = newLogicStatePosition;
				me.__23.style.transition='left 50ms ease-in-out 0ms, top 50ms ease-in-out 0ms';
				if (me.__23.ggCurrentLogicStatePosition == 0) {
					me.__23.style.left = 'calc(50% - (50% / 2))';
					me.__23.style.top = 'calc(50% - (50% / 2))';
				}
				else {
					me.__23.style.left='calc(50% - ((50% + 0px) / 2) + 0px)';
					me.__23.style.top='calc(50% - ((50% + 0px) / 2) + 0px)';
				}
			}
		}
		me.__23.logicBlock_position();
		me.__23.logicBlock_visible = function() {
			var newLogicStateVisible;
			if (
				((me.__23.ggIsActive() == true))
			)
			{
				newLogicStateVisible = 0;
			}
			else {
				newLogicStateVisible = -1;
			}
			if (me.__23.ggCurrentLogicStateVisible != newLogicStateVisible) {
				me.__23.ggCurrentLogicStateVisible = newLogicStateVisible;
				me.__23.style.transition='left 50ms ease-in-out 0ms, top 50ms ease-in-out 0ms';
				if (me.__23.ggCurrentLogicStateVisible == 0) {
					me.__23.style.visibility=(Number(me.__23.style.opacity)>0||!me.__23.style.opacity)?'inherit':'hidden';
					me.__23.ggVisible=true;
				}
				else {
					me.__23.style.visibility=(Number(me.__23.style.opacity)>0||!me.__23.style.opacity)?'inherit':'hidden';
					me.__23.ggVisible=true;
				}
			}
		}
		me.__23.logicBlock_visible();
		me.__23.ggActivate=function () {
			player.setVariableValue('vis_foot', !player.getVariableValue('vis_foot'));
		}
		me.__23.ggCurrentLogicStatePosition = -1;
		me.__23.ggCurrentLogicStateVisible = -1;
		me.__23.ggUpdateConditionTimer=function () {
			me.__23.logicBlock_visible();
		}
		me.__23.ggUpdatePosition=function (useTransition) {
		}
		el=me._image_3=document.createElement('div');
		els=me._image_3__img=document.createElement('img');
		els.className='ggskin ggskin_image_3';
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
		el.ggId="Image 3";
		el.ggDy=0;
		el.ggParameter={ rx:0,ry:0,a:-15,sx:1,sy:1,def:'' };
		el.ggVisible=true;
		el.className="ggskin ggskin_image ";
		el.ggType='image';
		hs ='';
		hs+='height : 100%;';
		hs+='position : absolute;';
		hs+='right : -10px;';
		hs+='top : calc(50% - ((100% + 0px) / 2) + 0px);';
		hs+='visibility : inherit;';
		hs+='width : 100%;';
		hs+='pointer-events:auto;';
		el.setAttribute('style',hs);
		el.style.transformOrigin='50% 50%';
		el.style.transform=parameterToTransform(el.ggParameter);
		me._image_3.ggIsActive=function() {
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
		me._image_3.logicBlock_position = function() {
			var newLogicStatePosition;
			if (
				((player.getVariableValue('vis_foot') == true))
			)
			{
				newLogicStatePosition = 0;
			}
			else {
				newLogicStatePosition = -1;
			}
			if (me._image_3.ggCurrentLogicStatePosition != newLogicStatePosition) {
				me._image_3.ggCurrentLogicStatePosition = newLogicStatePosition;
				me._image_3.style.transition='right 500ms ease 500ms, top 500ms ease 500ms';
				if (me._image_3.ggCurrentLogicStatePosition == 0) {
					me._image_3.style.right='-10px';
					me._image_3.style.top = 'calc(50% - (100% / 2) + (0px / 2) + -10px)';
				}
				else {
					me._image_3.style.right='-10px';
					me._image_3.style.top='calc(50% - ((100% + 0px) / 2) + 0px)';
				}
			}
		}
		me._image_3.logicBlock_position();
		me._image_3.ggActivate=function () {
			player.setVariableValue('vis_foot', true);
		}
		me._image_3.ggUpdatePosition=function (useTransition) {
		}
		me.__23.appendChild(me._image_3);
		el=me._image_4=document.createElement('div');
		els=me._image_4__img=document.createElement('img');
		els.className='ggskin ggskin_image_4';
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
		el.ggId="Image 4";
		el.ggDy=-10;
		el.ggParameter={ rx:0,ry:0,a:10,sx:1,sy:1,def:'' };
		el.ggVisible=true;
		el.className="ggskin ggskin_image ";
		el.ggType='image';
		hs ='';
		hs+='height : 100%;';
		hs+='left : 0px;';
		hs+='position : absolute;';
		hs+='top : calc(50% - ((100% + 0px) / 2) - 10px);';
		hs+='visibility : inherit;';
		hs+='width : 100%;';
		hs+='pointer-events:auto;';
		el.setAttribute('style',hs);
		el.style.transformOrigin='50% 50%';
		el.style.transform=parameterToTransform(el.ggParameter);
		me._image_4.ggIsActive=function() {
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
		me._image_4.logicBlock_position = function() {
			var newLogicStatePosition;
			if (
				((player.getVariableValue('vis_foot') == true))
			)
			{
				newLogicStatePosition = 0;
			}
			else {
				newLogicStatePosition = -1;
			}
			if (me._image_4.ggCurrentLogicStatePosition != newLogicStatePosition) {
				me._image_4.ggCurrentLogicStatePosition = newLogicStatePosition;
				me._image_4.style.transition='left 500ms ease 0ms, top 500ms ease 0ms';
				if (me._image_4.ggCurrentLogicStatePosition == 0) {
					me._image_4.style.left='0px';
					me._image_4.style.top = 'calc(50% - (100% / 2))';
				}
				else {
					me._image_4.style.left='0px';
					me._image_4.style.top='calc(50% - ((100% + 0px) / 2) - 10px)';
				}
			}
		}
		me._image_4.logicBlock_position();
		me._image_4.ggActivate=function () {
			player.setVariableValue('vis_foot', true);
		}
		me._image_4.ggUpdatePosition=function (useTransition) {
		}
		me.__23.appendChild(me._image_4);
		me.__8.appendChild(me.__23);
		me.divSkin.appendChild(me.__8);
		el=me.__=document.createElement('div');
		el.ggId="\uc0ac\uc6a9\uc548\ub0b4-\ubaa8\ubc14\uc77c";
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
		me.__.ggIsActive=function() {
			return false;
		}
		el.ggElementNodeId=function() {
			return player.getCurrentNode();
		}
		me.__.logicBlock_visible = function() {
			var newLogicStateVisible;
			if (
				((player.getViewerSize().width > 640))
			)
			{
				newLogicStateVisible = 0;
			}
			else if (
				((player.getViewerSize().width <= 640))
			)
			{
				newLogicStateVisible = 1;
			}
			else if (
				((player.getIsMobile() == true))
			)
			{
				newLogicStateVisible = 2;
			}
			else if (
				((player.getIsMobile() == false))
			)
			{
				newLogicStateVisible = 3;
			}
			else {
				newLogicStateVisible = -1;
			}
			if (me.__.ggCurrentLogicStateVisible != newLogicStateVisible) {
				me.__.ggCurrentLogicStateVisible = newLogicStateVisible;
				me.__.style.transition='';
				if (me.__.ggCurrentLogicStateVisible == 0) {
					me.__.style.visibility="hidden";
					me.__.ggVisible=false;
				}
				else if (me.__.ggCurrentLogicStateVisible == 1) {
					me.__.style.visibility=(Number(me.__.style.opacity)>0||!me.__.style.opacity)?'inherit':'hidden';
					me.__.ggVisible=true;
				}
				else if (me.__.ggCurrentLogicStateVisible == 2) {
					me.__.style.visibility=(Number(me.__.style.opacity)>0||!me.__.style.opacity)?'inherit':'hidden';
					me.__.ggVisible=true;
				}
				else if (me.__.ggCurrentLogicStateVisible == 3) {
					me.__.style.visibility="hidden";
					me.__.ggVisible=false;
				}
				else {
					me.__.style.visibility="hidden";
					me.__.ggVisible=false;
				}
			}
		}
		me.__.logicBlock_visible();
		me.__.ggUpdatePosition=function (useTransition) {
		}
		el=me.__2=document.createElement('div');
		el.ggId="\uc0ac\uc6a9\uc548\ub0b4\ubc30\uacbd-\ubaa8\ubc14\uc77c";
		el.ggParameter={ rx:0,ry:0,a:0,sx:1,sy:1,def:'' };
		el.ggVisible=true;
		el.className="ggskin ggskin_rectangle ";
		el.ggType='rectangle';
		hs ='';
		hs+='background : rgba(255,255,255,0.666667);';
		hs+='border : 0px solid #000000;';
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
		me.__2.ggUpdatePosition=function (useTransition) {
		}
		el=me.__3=document.createElement('div');
		el.ggId="\uc0ac\uc6a9\uc548\ub0b4\ucee8\ud150\uce20-\ubaa8\ubc14\uc77c";
		el.ggDx=0;
		el.ggDy=-50;
		el.ggParameter={ rx:0,ry:0,a:0,sx:1,sy:1,def:'' };
		el.ggVisible=true;
		el.className="ggskin ggskin_container ";
		el.ggType='container';
		hs ='';
		hs+='cursor : pointer;';
		hs+='height : 60%;';
		hs+='left : calc(50% - ((46.875% + 0px) / 2) + 0px);';
		hs+='position : absolute;';
		hs+='top : calc(50% - ((60% + 0px) / 2) - 50px);';
		hs+='visibility : inherit;';
		hs+='width : 46.875%;';
		hs+='pointer-events:none;';
		hs+='min-width:150px;';
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
		me.__3.logicBlock_scaling = function() {
			var newLogicStateScaling;
			if (
				((player.getViewerSize().height <= 620))
			)
			{
				newLogicStateScaling = 0;
			}
			else if (
				((player.getViewerSize().height <= 1024))
			)
			{
				newLogicStateScaling = 1;
			}
			else {
				newLogicStateScaling = -1;
			}
			if (me.__3.ggCurrentLogicStateScaling != newLogicStateScaling) {
				me.__3.ggCurrentLogicStateScaling = newLogicStateScaling;
				me.__3.style.transition='transform 0s';
				if (me.__3.ggCurrentLogicStateScaling == 0) {
					me.__3.ggParameter.sx = 0.7;
					me.__3.ggParameter.sy = 0.7;
					me.__3.style.transform=parameterToTransform(me.__3.ggParameter);
					skin.updateSize(me.__3);
				}
				else if (me.__3.ggCurrentLogicStateScaling == 1) {
					me.__3.ggParameter.sx = 0.8;
					me.__3.ggParameter.sy = 0.8;
					me.__3.style.transform=parameterToTransform(me.__3.ggParameter);
					skin.updateSize(me.__3);
				}
				else {
					me.__3.ggParameter.sx = 1;
					me.__3.ggParameter.sy = 1;
					me.__3.style.transform=parameterToTransform(me.__3.ggParameter);
					skin.updateSize(me.__3);
				}
			}
		}
		me.__3.logicBlock_scaling();
		me.__3.ggUpdatePosition=function (useTransition) {
		}
		el=me.__6=document.createElement('div');
		el.ggId="\ubaa8\ub378\ud558\uc6b0\uc2a4\uad00\ub78c-\ubaa8\ubc14\uc77c";
		el.ggDx=0;
		el.ggParameter={ rx:0,ry:0,a:0,sx:1,sy:1,def:'' };
		el.ggVisible=true;
		el.className="ggskin ggskin_container ";
		el.ggType='container';
		hs ='';
		hs+='height : 10%;';
		hs+='left : calc(50% - ((100% + 0px) / 2) + 0px);';
		hs+='position : absolute;';
		hs+='top : -50px;';
		hs+='visibility : inherit;';
		hs+='width : 100%;';
		hs+='pointer-events:none;';
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
		el=me.__7=document.createElement('div');
		els=me.__7__text=document.createElement('div');
		el.className='ggskin ggskin_textdiv';
		el.ggTextDiv=els;
		el.ggId="\ubaa8\ub378\ud558\uc6b0\uc2a4 \uad00\ub78c-\ubaa8\ubc14\uc77c";
		el.ggDx=0;
		el.ggParameter={ rx:0,ry:0,a:0,sx:1,sy:1,def:'' };
		el.ggVisible=true;
		el.className="ggskin ggskin_text ";
		el.ggType='text';
		hs ='';
		hs+='border : 0px solid #000000;';
		hs+='color : rgba(34,34,34,1);';
		hs+='cursor : default;';
		hs+='height : 100%;';
		hs+='left : calc(50% - ((300px + 0px) / 2) + 0px);';
		hs+='position : absolute;';
		hs+='top : 0px;';
		hs+='visibility : inherit;';
		hs+='width : 300px;';
		hs+='pointer-events:auto;';
		hs+='@import url(\"https:\/\/fonts.googleapis.com\/css2?family=Nanum+Gothic:wght@400;700&display=swap\"); font-family: \"Nanum Gothic\", sans-serif; letter-spacing:1px;';
		el.setAttribute('style',hs);
		el.style.transformOrigin='50% 50%';
		hs ='';
		hs += 'box-sizing: border-box;';
		hs+='cursor: default;';
		hs+='width: 100%;';
		hs+='height: auto;';
		hs+='max-height: 100%;';
		hs+='font-size: 17px;';
		hs+='font-weight: 600;';
		hs+='text-align: center;';
		hs+='position: absolute;';
		hs+='top: 50%;';
		hs+='transform: translate(0, -50%);';
		hs+='white-space: pre;';
		hs+='padding: 0px;';
		hs+='overflow: hidden;';
		hs+='overflow-y: auto;';
		els.setAttribute('style',hs);
		me.__7.ggUpdateText=function() {
			var params = [];
			var hs = player._("\ubaa8\ub378\ud558\uc6b0\uc2a4 \uad00\ub78c", params);
			if (hs!=this.ggText) {
				this.ggText=hs;
				this.ggTextDiv.innerHTML=hs;
				if (this.ggUpdatePosition) this.ggUpdatePosition();
			}
		}
		me.__7.ggUpdateText();
		el.appendChild(els);
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
		el=me._container_4=document.createElement('div');
		el.ggId="Container 4-\ubaa8\ubc14\uc77c";
		el.ggParameter={ rx:0,ry:0,a:0,sx:1,sy:1,def:'' };
		el.ggVisible=true;
		el.className="ggskin ggskin_container ";
		el.ggType='container';
		hs ='';
		hs+='height : 100%;';
		hs+='left : 220px;';
		hs+='position : absolute;';
		hs+='top : 0px;';
		hs+='visibility : inherit;';
		hs+='width : 50px;';
		hs+='pointer-events:none;';
		el.setAttribute('style',hs);
		el.style.transformOrigin='50% 50%';
		me._container_4.ggIsActive=function() {
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
		me._container_4.ggUpdatePosition=function (useTransition) {
		}
		el=me._tip=document.createElement('div');
		els=me._tip__text=document.createElement('div');
		el.className='ggskin ggskin_textdiv';
		el.ggTextDiv=els;
		el.ggId="TIP-\ubaa8\ubc14\uc77c";
		el.ggParameter={ rx:0,ry:0,a:0,sx:1,sy:1,def:'' };
		el.ggVisible=true;
		el.className="ggskin ggskin_text ";
		el.ggType='text';
		hs ='';
		hs+='border : 0px solid #000000;';
		hs+='color : rgba(254,153,0,1);';
		hs+='cursor : default;';
		hs+='height : 100%;';
		hs+='left : 0px;';
		hs+='position : absolute;';
		hs+='top : 0px;';
		hs+='visibility : inherit;';
		hs+='width : 50px;';
		hs+='pointer-events:auto;';
		el.setAttribute('style',hs);
		el.style.transformOrigin='50% 50%';
		hs ='';
		hs += 'box-sizing: border-box;';
		hs+='cursor: default;';
		hs+='width: 100%;';
		hs+='height: auto;';
		hs+='max-height: 100%;';
		hs+='font-size: 17px;';
		hs+='font-weight: 600;';
		hs+='text-align: left;';
		hs+='position: absolute;';
		hs+='top: 50%;';
		hs+='transform: translate(0, -50%);';
		hs+='white-space: pre;';
		hs+='padding: 0px;';
		hs+='overflow: hidden;';
		els.setAttribute('style',hs);
		me._tip.ggUpdateText=function() {
			var params = [];
			var hs = player._("Tip", params);
			if (hs!=this.ggText) {
				this.ggText=hs;
				this.ggTextDiv.innerHTML=hs;
				if (this.ggUpdatePosition) this.ggUpdatePosition();
			}
		}
		me._tip.ggUpdateText();
		el.appendChild(els);
		me._tip.ggIsActive=function() {
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
		me._tip.ggUpdatePosition=function (useTransition) {
		}
		me._container_4.appendChild(me._tip);
		me.__7.appendChild(me._container_4);
		me.__6.appendChild(me.__7);
		me.__3.appendChild(me.__6);
		el=me.__5=document.createElement('div');
		el.ggId="\uc544\uc774\ucf58-\ubaa8\ubc14\uc77c";
		el.ggParameter={ rx:0,ry:0,a:0,sx:1,sy:1,def:'' };
		el.ggVisible=true;
		el.className="ggskin ggskin_container ";
		el.ggType='container';
		hs ='';
		hs+='height : 50%;';
		hs+='left : 0px;';
		hs+='position : absolute;';
		hs+='top : 80px;';
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
		el=me.__10=document.createElement('div');
		el.ggId="\uc544\uc774\ucf581-\ubaa8\ubc14\uc77c";
		el.ggDx=0;
		el.ggParameter={ rx:0,ry:0,a:0,sx:1,sy:1,def:'' };
		el.ggVisible=true;
		el.className="ggskin ggskin_container ";
		el.ggType='container';
		hs ='';
		hs+='height : 33.3%;';
		hs+='left : calc(50% - ((100% + 0px) / 2) + 0px);';
		hs+='position : absolute;';
		hs+='top : -70px;';
		hs+='visibility : inherit;';
		hs+='width : 100%;';
		hs+='pointer-events:none;';
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
		me.__10.ggUpdatePosition=function (useTransition) {
		}
		el=me._image_110=document.createElement('div');
		els=me._image_110__img=document.createElement('img');
		els.className='ggskin ggskin_image_110';
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
		el.ggId="Image 11";
		el.ggDx=0;
		el.ggParameter={ rx:0,ry:0,a:0,sx:1,sy:1,def:'' };
		el.ggVisible=true;
		el.className="ggskin ggskin_image ";
		el.ggType='image';
		hs ='';
		hs+='height : 96px;';
		hs+='left : calc(50% - ((80px + 0px) / 2) + 0px);';
		hs+='position : absolute;';
		hs+='top : 0px;';
		hs+='visibility : inherit;';
		hs+='width : 80px;';
		hs+='pointer-events:auto;';
		el.setAttribute('style',hs);
		el.style.transformOrigin='50% 50%';
		me._image_110.ggIsActive=function() {
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
		me._image_110.ggUpdatePosition=function (useTransition) {
		}
		el=me._image_130=document.createElement('div');
		els=me._image_130__img=document.createElement('img');
		els.className='ggskin ggskin_image_130';
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
		el.ggId="Image 13";
		el.ggParameter={ rx:0,ry:0,a:0,sx:1,sy:1,def:'' };
		el.ggVisible=true;
		el.className="ggskin ggskin_image ";
		el.ggType='image';
		hs ='';
		hs+='height : 96px;';
		hs+='left : 0px;';
		hs+='position : absolute;';
		hs+='top : 0px;';
		hs+='visibility : inherit;';
		hs+='width : 80px;';
		hs+='pointer-events:auto;';
		el.setAttribute('style',hs);
		el.style.transformOrigin='50% 50%';
		me._image_130.ggIsActive=function() {
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
		me._image_130.logicBlock_scaling = function() {
			var newLogicStateScaling;
			if (
				((player.getVariableValue('vis_direction') == true))
			)
			{
				newLogicStateScaling = 0;
			}
			else {
				newLogicStateScaling = -1;
			}
			if (me._image_130.ggCurrentLogicStateScaling != newLogicStateScaling) {
				me._image_130.ggCurrentLogicStateScaling = newLogicStateScaling;
				me._image_130.style.transition='transform 0s';
				if (me._image_130.ggCurrentLogicStateScaling == 0) {
					me._image_130.ggParameter.sx = 1.05;
					me._image_130.ggParameter.sy = 1.05;
					me._image_130.style.transform=parameterToTransform(me._image_130.ggParameter);
					skin.updateSize(me._image_130);
				}
				else {
					me._image_130.ggParameter.sx = 1;
					me._image_130.ggParameter.sy = 1;
					me._image_130.style.transform=parameterToTransform(me._image_130.ggParameter);
					skin.updateSize(me._image_130);
				}
			}
		}
		me._image_130.logicBlock_scaling();
		me._image_130.ggUpdatePosition=function (useTransition) {
		}
		me._image_110.appendChild(me._image_130);
		me.__10.appendChild(me._image_110);
		el=me._text_30=document.createElement('div');
		els=me._text_30__text=document.createElement('div');
		el.className='ggskin ggskin_textdiv';
		el.ggTextDiv=els;
		el.ggId="Text 3";
		el.ggDx=0;
		el.ggParameter={ rx:0,ry:0,a:0,sx:1,sy:1,def:'' };
		el.ggVisible=true;
		el.className="ggskin ggskin_text ";
		el.ggType='text';
		hs ='';
		hs+='border : 0px solid #000000;';
		hs+='bottom : -70px;';
		hs+='color : rgba(34,34,34,1);';
		hs+='cursor : default;';
		hs+='height : 50px;';
		hs+='left : calc(50% - ((142% + 0px) / 2) + 0px);';
		hs+='position : absolute;';
		hs+='visibility : inherit;';
		hs+='width : 142%;';
		hs+='pointer-events:auto;';
		hs+='@import url(\"https:\/\/fonts.googleapis.com\/css2?family=Nanum+Gothic:wght@400;700&display=swap\"); font-family: \"Nanum Gothic\", sans-serif; word-break:keep-all; letter-spacing:1px; line-height:18px;';
		el.setAttribute('style',hs);
		el.style.transformOrigin='50% 50%';
		hs ='';
		hs += 'box-sizing: border-box;';
		hs+='cursor: default;';
		hs+='width: 100%;';
		hs+='height: 100%;';
		hs+='font-size: 12px;';
		hs+='font-weight: 600;';
		hs+='text-align: center;';
		hs+='white-space: pre-line;';
		hs+='padding: 0px;';
		hs+='overflow: hidden;';
		els.setAttribute('style',hs);
		me._text_30.ggUpdateText=function() {
			var params = [];
			var hs = player._("\ud654\uba74\uc744 \ub204\ub978\ucc44 \uc6c0\uc9c1\uc774\uba74\n\uacf5\uac04\uc744 \ub458\ub7ec\ubcfc \uc218 \uc788\uc2b5\ub2c8\ub2e4.", params);
			if (hs!=this.ggText) {
				this.ggText=hs;
				this.ggTextDiv.innerHTML=hs;
				if (this.ggUpdatePosition) this.ggUpdatePosition();
			}
		}
		me._text_30.ggUpdateText();
		el.appendChild(els);
		me._text_30.ggIsActive=function() {
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
		me._text_30.ggUpdatePosition=function (useTransition) {
		}
		me.__10.appendChild(me._text_30);
		me.__5.appendChild(me.__10);
		el=me.__20=document.createElement('div');
		el.ggId="\uc544\uc774\ucf582-\ubaa8\ubc14\uc77c";
		el.ggDx=0;
		el.ggDy=0;
		el.ggParameter={ rx:0,ry:0,a:0,sx:1,sy:1,def:'' };
		el.ggVisible=true;
		el.className="ggskin ggskin_container ";
		el.ggType='container';
		hs ='';
		hs+='height : 33.3%;';
		hs+='left : calc(50% - ((100% + 0px) / 2) + 0px);';
		hs+='position : absolute;';
		hs+='top : calc(50% - ((33.3% + 0px) / 2) + 0%);';
		hs+='visibility : inherit;';
		hs+='width : 100%;';
		hs+='pointer-events:none;';
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
		me.__20.ggUpdatePosition=function (useTransition) {
		}
		el=me.__22=document.createElement('div');
		els=me.__22__img=document.createElement('img');
		els.className='ggskin ggskin__22';
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
		el.ggId="\uc544\uc774\ucf582\uc544\uc774\ucf58-\ubaa8\ubc14\uc77c";
		el.ggDx=0;
		el.ggParameter={ rx:0,ry:0,a:0,sx:1,sy:1,def:'' };
		el.ggVisible=true;
		el.className="ggskin ggskin_image ";
		el.ggType='image';
		hs ='';
		hs+='height : 96px;';
		hs+='left : calc(50% - ((80px + 0px) / 2) + 0px);';
		hs+='position : absolute;';
		hs+='top : 0px;';
		hs+='visibility : inherit;';
		hs+='width : 80px;';
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
		me.__22.ggUpdatePosition=function (useTransition) {
		}
		el=me.__210=document.createElement('div');
		els=me.__210__img=document.createElement('img');
		els.className='ggskin ggskin__210';
		hs='data:image/png;base64,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'+
			'IBTR4EXp1kxS2Tq0qkGWYerw3Se5HlMOC1wM7A7wmX9ScnWeGnWZvIuJgPuogFZi/dRSxR0EUMUNBFDFDQRQxQ0EUMUNBFDFDQRQxQ0EUMUNBFDFDQRQxQ0EUMUNBFDFDQRQxQ0EUMUNBFDFDQRQxQ0EUMUNBFDFDQRQxQ0EUMUNBFDFDQRQxQ0EUMUNBFDFDQRQxQ0EUMUNBFDFDQRQxQ0EUMUNBFDFDQRQxQ0EUMUNBFDFDQRQxQ0EUMUNBFDFDQRQxQ0EUMUNBFDFDQRQxQ0EUMUNBFDFDQRQxQ0EUMUNBFDFDQRQxQ0EUMUNBFDFDQRQxQ0EUMUNBFDFDQRQxQ0EUMUNBFDFDQRQxQ0EUMUNBFDFDQRQxQ0EUMUNBFDFDQRQxQ0EUMUNBFDFDQRQxQ0EUMUNBFDFDQRQxQ0EUMUNBFDFDQRQxQ0EUMUNBFDFDQ'+
			'RQxQ0EUMUNBFDFDQRQxQ0EUMUNBFDFDQRQxQ0EUMUNBFDFDQRQxQ0EUMUNBFDFDQRQxQ0EUMUNBFDFDQRQxQ0EUMUNBFDFDQRQxQ0EUMUNBFDFDQRQxQ0EUM+H8n4MyurBbp2gAAAABJRU5ErkJggg==';
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
		el.ggId="\uc544\uc774\ucf582-\ubaa8\ubc14\uc77c1";
		el.ggParameter={ rx:0,ry:0,a:0,sx:1,sy:1,def:'' };
		el.ggVisible=true;
		el.className="ggskin ggskin_image ";
		el.ggType='image';
		hs ='';
		hs+='height : 96px;';
		hs+='left : 0px;';
		hs+='position : absolute;';
		hs+='top : 0px;';
		hs+='visibility : inherit;';
		hs+='width : 80px;';
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
		me.__210.logicBlock_scaling = function() {
			var newLogicStateScaling;
			if (
				((player.getVariableValue('vis_direction') == true))
			)
			{
				newLogicStateScaling = 0;
			}
			else {
				newLogicStateScaling = -1;
			}
			if (me.__210.ggCurrentLogicStateScaling != newLogicStateScaling) {
				me.__210.ggCurrentLogicStateScaling = newLogicStateScaling;
				me.__210.style.transition='transform 0s';
				if (me.__210.ggCurrentLogicStateScaling == 0) {
					me.__210.ggParameter.sx = 1.05;
					me.__210.ggParameter.sy = 1.05;
					me.__210.style.transform=parameterToTransform(me.__210.ggParameter);
					skin.updateSize(me.__210);
				}
				else {
					me.__210.ggParameter.sx = 1;
					me.__210.ggParameter.sy = 1;
					me.__210.style.transform=parameterToTransform(me.__210.ggParameter);
					skin.updateSize(me.__210);
				}
			}
		}
		me.__210.logicBlock_scaling();
		me.__210.ggUpdatePosition=function (useTransition) {
		}
		me.__22.appendChild(me.__210);
		me.__20.appendChild(me.__22);
		el=me.__21=document.createElement('div');
		els=me.__21__text=document.createElement('div');
		el.className='ggskin ggskin_textdiv';
		el.ggTextDiv=els;
		el.ggId="\uc544\uc774\ucf58\ud0dd\uc2a4\ud2b82-\ubaa8\ubc14\uc77c";
		el.ggDx=0;
		el.ggParameter={ rx:0,ry:0,a:0,sx:1,sy:1,def:'' };
		el.ggVisible=true;
		el.className="ggskin ggskin_text ";
		el.ggType='text';
		hs ='';
		hs+='border : 0px solid #000000;';
		hs+='bottom : -70px;';
		hs+='color : rgba(34,34,34,1);';
		hs+='cursor : default;';
		hs+='height : 50px;';
		hs+='left : calc(50% - ((142% + 0px) / 2) + 0px);';
		hs+='position : absolute;';
		hs+='visibility : inherit;';
		hs+='width : 142%;';
		hs+='pointer-events:auto;';
		hs+='@import url(\"https:\/\/fonts.googleapis.com\/css2?family=Nanum+Gothic:wght@400;700&display=swap\"); font-family: \"Nanum Gothic\", sans-serif; word-break:keep-all; letter-spacing:1px; line-height:18px;';
		el.setAttribute('style',hs);
		el.style.transformOrigin='50% 50%';
		hs ='';
		hs += 'box-sizing: border-box;';
		hs+='cursor: default;';
		hs+='width: 100%;';
		hs+='height: 100%;';
		hs+='font-size: 12px;';
		hs+='font-weight: 600;';
		hs+='text-align: center;';
		hs+='white-space: pre-line;';
		hs+='padding: 0px;';
		hs+='overflow: hidden;';
		els.setAttribute('style',hs);
		me.__21.ggUpdateText=function() {
			var params = [];
			var hs = player._("\ub450 \uc190\uac00\ub77d\uc73c\ub85c \ud654\uba74\uc744\n\ud655\ub300\/\ucd95\uc18c \ud560 \uc218 \uc788\uc2b5\ub2c8\ub2e4.", params);
			if (hs!=this.ggText) {
				this.ggText=hs;
				this.ggTextDiv.innerHTML=hs;
				if (this.ggUpdatePosition) this.ggUpdatePosition();
			}
		}
		me.__21.ggUpdateText();
		el.appendChild(els);
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
		me.__21.ggUpdatePosition=function (useTransition) {
		}
		me.__20.appendChild(me.__21);
		me.__5.appendChild(me.__20);
		el=me.__30=document.createElement('div');
		el.ggId="\uc544\uc774\ucf583-\ubaa8\ubc14\uc77c";
		el.ggDx=0;
		el.ggParameter={ rx:0,ry:0,a:0,sx:1,sy:1,def:'' };
		el.ggVisible=true;
		el.className="ggskin ggskin_container ";
		el.ggType='container';
		hs ='';
		hs+='bottom : -70px;';
		hs+='height : 33.3%;';
		hs+='left : calc(50% - ((100% + 0px) / 2) + 0px);';
		hs+='position : absolute;';
		hs+='visibility : inherit;';
		hs+='width : 100%;';
		hs+='pointer-events:none;';
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
		me.__30.ggUpdatePosition=function (useTransition) {
		}
		el=me._image_11=document.createElement('div');
		els=me._image_11__img=document.createElement('img');
		els.className='ggskin ggskin_image_11';
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
		el.ggId="Image 11-\ubaa8\ubc14\uc77c";
		el.ggDx=0;
		el.ggParameter={ rx:0,ry:0,a:0,sx:1,sy:1,def:'' };
		el.ggVisible=true;
		el.className="ggskin ggskin_image ";
		el.ggType='image';
		hs ='';
		hs+='height : 96px;';
		hs+='left : calc(50% - ((80px + 0px) / 2) + 0px);';
		hs+='position : absolute;';
		hs+='top : 0px;';
		hs+='visibility : inherit;';
		hs+='width : 80px;';
		hs+='pointer-events:auto;';
		el.setAttribute('style',hs);
		el.style.transformOrigin='50% 50%';
		me._image_11.ggIsActive=function() {
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
		me._image_11.ggUpdatePosition=function (useTransition) {
		}
		el=me._image_13=document.createElement('div');
		els=me._image_13__img=document.createElement('img');
		els.className='ggskin ggskin_image_13';
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
		el.ggId="Image 13-\ubaa8\ubc14\uc77c";
		el.ggParameter={ rx:0,ry:0,a:0,sx:1,sy:1,def:'' };
		el.ggVisible=true;
		el.className="ggskin ggskin_image ";
		el.ggType='image';
		hs ='';
		hs+='height : 96px;';
		hs+='left : 0px;';
		hs+='position : absolute;';
		hs+='top : 0px;';
		hs+='visibility : inherit;';
		hs+='width : 80px;';
		hs+='pointer-events:auto;';
		el.setAttribute('style',hs);
		el.style.transformOrigin='50% 50%';
		me._image_13.ggIsActive=function() {
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
		me._image_13.logicBlock_scaling = function() {
			var newLogicStateScaling;
			if (
				((player.getVariableValue('vis_direction') == true))
			)
			{
				newLogicStateScaling = 0;
			}
			else {
				newLogicStateScaling = -1;
			}
			if (me._image_13.ggCurrentLogicStateScaling != newLogicStateScaling) {
				me._image_13.ggCurrentLogicStateScaling = newLogicStateScaling;
				me._image_13.style.transition='transform 0s';
				if (me._image_13.ggCurrentLogicStateScaling == 0) {
					me._image_13.ggParameter.sx = 1.05;
					me._image_13.ggParameter.sy = 1.05;
					me._image_13.style.transform=parameterToTransform(me._image_13.ggParameter);
					skin.updateSize(me._image_13);
				}
				else {
					me._image_13.ggParameter.sx = 1;
					me._image_13.ggParameter.sy = 1;
					me._image_13.style.transform=parameterToTransform(me._image_13.ggParameter);
					skin.updateSize(me._image_13);
				}
			}
		}
		me._image_13.logicBlock_scaling();
		me._image_13.ggUpdatePosition=function (useTransition) {
		}
		me._image_11.appendChild(me._image_13);
		me.__30.appendChild(me._image_11);
		el=me._text_3=document.createElement('div');
		els=me._text_3__text=document.createElement('div');
		el.className='ggskin ggskin_textdiv';
		el.ggTextDiv=els;
		el.ggId="Text 3-\ubaa8\ubc14\uc77c";
		el.ggDx=0;
		el.ggParameter={ rx:0,ry:0,a:0,sx:1,sy:1,def:'' };
		el.ggVisible=true;
		el.className="ggskin ggskin_text ";
		el.ggType='text';
		hs ='';
		hs+='border : 0px solid #000000;';
		hs+='bottom : -70px;';
		hs+='color : rgba(34,34,34,1);';
		hs+='cursor : default;';
		hs+='height : 50px;';
		hs+='left : calc(50% - ((142% + 0px) / 2) + 0px);';
		hs+='position : absolute;';
		hs+='visibility : inherit;';
		hs+='width : 142%;';
		hs+='pointer-events:auto;';
		hs+='@import url(\"https:\/\/fonts.googleapis.com\/css2?family=Nanum+Gothic:wght@400;700&display=swap\"); font-family: \"Nanum Gothic\", sans-serif; word-break:keep-all; letter-spacing:1px; line-height:18px;';
		el.setAttribute('style',hs);
		el.style.transformOrigin='50% 50%';
		hs ='';
		hs += 'box-sizing: border-box;';
		hs+='cursor: default;';
		hs+='width: 100%;';
		hs+='height: 100%;';
		hs+='font-size: 12px;';
		hs+='font-weight: 600;';
		hs+='text-align: center;';
		hs+='white-space: pre-line;';
		hs+='padding: 0px;';
		hs+='overflow: hidden;';
		els.setAttribute('style',hs);
		me._text_3.ggUpdateText=function() {
			var params = [];
			var hs = player._("\ubc14\ub2e5\uba74 \uc120\ud0dd\uc73c\ub85c\n\uacf5\uac04\uc744 \uc774\ub3d9\ud560 \uc218 \uc788\uc2b5\ub2c8\ub2e4.", params);
			if (hs!=this.ggText) {
				this.ggText=hs;
				this.ggTextDiv.innerHTML=hs;
				if (this.ggUpdatePosition) this.ggUpdatePosition();
			}
		}
		me._text_3.ggUpdateText();
		el.appendChild(els);
		me._text_3.ggIsActive=function() {
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
		me._text_3.ggUpdatePosition=function (useTransition) {
		}
		me.__30.appendChild(me._text_3);
		me.__5.appendChild(me.__30);
		me.__3.appendChild(me.__5);
		el=me.__4=document.createElement('div');
		el.ggId="\uad00\ub78c\ud558\uae30\ubc84\ud2bc-\ubaa8\ubc14\uc77c";
		el.ggDx=0;
		el.ggParameter={ rx:0,ry:0,a:0,sx:1,sy:1,def:'' };
		el.ggVisible=true;
		el.className="ggskin ggskin_container ";
		el.ggType='container';
		hs ='';
		hs+='bottom : -1%;';
		hs+='cursor : pointer;';
		hs+='height : 50px;';
		hs+='left : calc(50% - ((100% + 0px) / 2) + 0px);';
		hs+='position : absolute;';
		hs+='visibility : inherit;';
		hs+='width : 100%;';
		hs+='pointer-events:none;';
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
		me.__4.logicBlock_position = function() {
			var newLogicStatePosition;
			if (
				((player.getViewerSize().height <= 620))
			)
			{
				newLogicStatePosition = 0;
			}
			else if (
				((player.getViewerSize().height <= 800))
			)
			{
				newLogicStatePosition = 1;
			}
			else if (
				((player.getViewerSize().height <= 1020))
			)
			{
				newLogicStatePosition = 2;
			}
			else {
				newLogicStatePosition = -1;
			}
			if (me.__4.ggCurrentLogicStatePosition != newLogicStatePosition) {
				me.__4.ggCurrentLogicStatePosition = newLogicStatePosition;
				me.__4.style.transition='left 0s, bottom 0s';
				if (me.__4.ggCurrentLogicStatePosition == 0) {
					me.__4.style.left = 'calc(50% - (100% / 2))';
					me.__4.style.bottom='-40%';
				}
				else if (me.__4.ggCurrentLogicStatePosition == 1) {
					me.__4.style.left = 'calc(50% - (100% / 2))';
					me.__4.style.bottom='-20%';
				}
				else if (me.__4.ggCurrentLogicStatePosition == 2) {
					me.__4.style.left = 'calc(50% - (100% / 2))';
					me.__4.style.bottom='-10%';
				}
				else {
					me.__4.style.left='calc(50% - ((100% + 0px) / 2) + 0px)';
					me.__4.style.bottom='-1%';
				}
			}
		}
		me.__4.logicBlock_position();
		me.__4.onclick=function (e) {
			me.__.style.transition='none';
			me.__.style.visibility='hidden';
			me.__.ggVisible=false;
		}
		me.__4.ggUpdatePosition=function (useTransition) {
		}
		el=me._text_2=document.createElement('div');
		els=me._text_2__text=document.createElement('div');
		el.className='ggskin ggskin_textdiv';
		el.ggTextDiv=els;
		el.ggId="Text 2-\ubaa8\ubc14\uc77c";
		el.ggDx=0;
		el.ggDy=0;
		el.ggParameter={ rx:0,ry:0,a:0,sx:1,sy:1,def:'' };
		el.ggVisible=true;
		el.className="ggskin ggskin_text ";
		el.ggType='text';
		hs ='';
		hs+='background : #fe9900;';
		hs+='border : 3px solid #ffffff;';
		hs+='border-radius : 25px;';
		hs+='color : rgba(255,255,255,1);';
		hs+='cursor : default;';
		hs+='height : 100%;';
		hs+='left : calc(50% - ((100% + 6px) / 2) + 0px);';
		hs+='position : absolute;';
		hs+='top : calc(50% - ((100% + 6px) / 2) + 0px);';
		hs+='visibility : inherit;';
		hs+='width : 100%;';
		hs+='pointer-events:auto;';
		hs+='@import url(\"https:\/\/fonts.googleapis.com\/css2?family=Nanum+Gothic:wght@400;700&display=swap\"); font-family: \"Nanum Gothic\", sans-serif; word-break:keep-all; letter-spacing:1px;';
		el.setAttribute('style',hs);
		el.style.transformOrigin='50% 50%';
		hs ='';
		hs += 'box-sizing: border-box;';
		hs+='cursor: default;';
		hs+='width: 100%;';
		hs+='height: auto;';
		hs+='max-height: 100%;';
		hs+='font-size: 12px;';
		hs+='font-weight: 600;';
		hs+='text-align: center;';
		hs+='position: absolute;';
		hs+='top: 50%;';
		hs+='transform: translate(0, -50%);';
		hs+='white-space: pre;';
		hs+='padding: 6px;';
		hs+='overflow: hidden;';
		els.setAttribute('style',hs);
		me._text_2.ggUpdateText=function() {
			var params = [];
			var hs = player._("\uad00\ub78c\ud558\uae30", params);
			if (hs!=this.ggText) {
				this.ggText=hs;
				this.ggTextDiv.innerHTML=hs;
				if (this.ggUpdatePosition) this.ggUpdatePosition();
			}
		}
		me._text_2.ggUpdateText();
		el.appendChild(els);
		me._text_2.ggIsActive=function() {
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
		me._text_2.ggUpdatePosition=function (useTransition) {
		}
		me.__4.appendChild(me._text_2);
		me.__3.appendChild(me.__4);
		me.__2.appendChild(me.__3);
		me.__.appendChild(me.__2);
		el=me.__0=document.createElement('div');
		el.ggId="\ubcf8 \ub0b4\uc6a9-\ubaa8\ubc14\uc77c";
		el.ggDx=0;
		el.ggParameter={ rx:0,ry:0,a:0,sx:1,sy:1,def:'' };
		el.ggVisible=true;
		el.className="ggskin ggskin_container ";
		el.ggType='container';
		hs ='';
		hs+='bottom : -12%;';
		hs+='height : 30%;';
		hs+='left : calc(50% - ((90% + 0px) / 2) + 0px);';
		hs+='position : absolute;';
		hs+='visibility : inherit;';
		hs+='width : 90%;';
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
		me.__0.logicBlock_position = function() {
			var newLogicStatePosition;
			if (
				((player.getViewerSize().height <= 640))
			)
			{
				newLogicStatePosition = 0;
			}
			else {
				newLogicStatePosition = -1;
			}
			if (me.__0.ggCurrentLogicStatePosition != newLogicStatePosition) {
				me.__0.ggCurrentLogicStatePosition = newLogicStatePosition;
				me.__0.style.transition='left 0s, bottom 0s, width 0s, height 0s, transform 0s';
				if (me.__0.ggCurrentLogicStatePosition == 0) {
					me.__0.style.left = 'calc(50% - (90% / 2))';
					me.__0.style.bottom='-5%';
				}
				else {
					me.__0.style.left='calc(50% - ((90% + 0px) / 2) + 0px)';
					me.__0.style.bottom='-12%';
				}
			}
		}
		me.__0.logicBlock_position();
		me.__0.logicBlock_size = function() {
			var newLogicStateSize;
			if (
				((player.getViewerSize().height <= 640))
			)
			{
				newLogicStateSize = 0;
			}
			else {
				newLogicStateSize = -1;
			}
			if (me.__0.ggCurrentLogicStateSize != newLogicStateSize) {
				me.__0.ggCurrentLogicStateSize = newLogicStateSize;
				me.__0.style.transition='left 0s, bottom 0s, width 0s, height 0s, transform 0s';
				if (me.__0.ggCurrentLogicStateSize == 0) {
					me.__0.style.width='100%';
					me.__0.style.height='30%';
					me.__0.style.left = 'calc(50% - (100% / 2))';
					skin.updateSize(me.__0);
				}
				else {
					me.__0.style.width='90%';
					me.__0.style.height='30%';
					me.__0.style.left = 'calc(50% - (90% / 2))';
					skin.updateSize(me.__0);
				}
			}
		}
		me.__0.logicBlock_size();
		me.__0.logicBlock_scaling = function() {
			var newLogicStateScaling;
			if (
				((player.getViewerSize().height <= 640))
			)
			{
				newLogicStateScaling = 0;
			}
			else if (
				((player.getViewerSize().height <= 1024))
			)
			{
				newLogicStateScaling = 1;
			}
			else {
				newLogicStateScaling = -1;
			}
			if (me.__0.ggCurrentLogicStateScaling != newLogicStateScaling) {
				me.__0.ggCurrentLogicStateScaling = newLogicStateScaling;
				me.__0.style.transition='left 0s, bottom 0s, width 0s, height 0s, transform 0s';
				if (me.__0.ggCurrentLogicStateScaling == 0) {
					me.__0.ggParameter.sx = 0.7;
					me.__0.ggParameter.sy = 0.7;
					me.__0.style.transform=parameterToTransform(me.__0.ggParameter);
					skin.updateSize(me.__0);
				}
				else if (me.__0.ggCurrentLogicStateScaling == 1) {
					me.__0.ggParameter.sx = 0.8;
					me.__0.ggParameter.sy = 0.8;
					me.__0.style.transform=parameterToTransform(me.__0.ggParameter);
					skin.updateSize(me.__0);
				}
				else {
					me.__0.ggParameter.sx = 1;
					me.__0.ggParameter.sy = 1;
					me.__0.style.transform=parameterToTransform(me.__0.ggParameter);
					skin.updateSize(me.__0);
				}
			}
		}
		me.__0.logicBlock_scaling();
		me.__0.ggUpdatePosition=function (useTransition) {
		}
		el=me._rectangle_5=document.createElement('div');
		el.ggId="Rectangle 5-\ubaa8\ubc14\uc77c";
		el.ggParameter={ rx:0,ry:0,a:0,sx:1,sy:1,def:'' };
		el.ggVisible=true;
		el.className="ggskin ggskin_rectangle ";
		el.ggType='rectangle';
		hs ='';
		hs+='border : 0px solid #000000;';
		hs+='cursor : default;';
		hs+='height : 100%;';
		hs+='left : 0px;';
		hs+='position : absolute;';
		hs+='top : 0px;';
		hs+='visibility : inherit;';
		hs+='width : 100%;';
		hs+='pointer-events:auto;';
		hs+='min-width:150px;';
		el.setAttribute('style',hs);
		el.style.transformOrigin='50% 50%';
		me._rectangle_5.ggIsActive=function() {
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
		me._rectangle_5.ggUpdatePosition=function (useTransition) {
		}
		el=me.__1=document.createElement('div');
		els=me.__1__text=document.createElement('div');
		el.className='ggskin ggskin_textdiv';
		el.ggTextDiv=els;
		el.ggId="\ubcf8 \ub0b4\uc6a9 \uba58\ud2b8-\ubaa8\ubc14\uc77c";
		el.ggDx=0;
		el.ggParameter={ rx:0,ry:0,a:0,sx:1,sy:1,def:'' };
		el.ggVisible=true;
		el.className="ggskin ggskin_text ";
		el.ggType='text';
		hs ='';
		hs+='border : 0px solid #000000;';
		hs+='color : rgba(34,34,34,1);';
		hs+='cursor : default;';
		hs+='height : 100%;';
		hs+='left : calc(50% - ((115% + 0px) / 2) + 0px);';
		hs+='position : absolute;';
		hs+='top : 0px;';
		hs+='visibility : inherit;';
		hs+='width : 115%;';
		hs+='pointer-events:auto;';
		hs+='@import url(\"https:\/\/fonts.googleapis.com\/css2?family=Nanum+Gothic:wght@400;700&display=swap\"); font-family: \"Nanum Gothic\", sans-serif; word-break:keep-all; line-height:17px;';
		el.setAttribute('style',hs);
		el.style.transformOrigin='50% 50%';
		hs ='';
		hs += 'box-sizing: border-box;';
		hs+='cursor: default;';
		hs+='width: 100%;';
		hs+='height: 100%;';
		hs+='font-size: 10px;';
		hs+='font-weight: inherit;';
		hs+='text-align: center;';
		hs+='white-space: pre-line;';
		hs+='padding: 0px;';
		hs+='overflow: hidden;';
		els.setAttribute('style',hs);
		me.__1.ggUpdateText=function() {
			var params = [];
			var hs = player._("\u203b\n\ubcf8 \ucee8\ud150\uce20\ub294 \uc18c\ube44\uc790\uc758 \uc774\ud574\ub97c \ub3d5\uae30 \uc704\ud574 \uc81c\uc791\ub41c \uac83\uc73c\ub85c \uc2e4\uc81c\uc640 \ucc28\uc774\uac00 \uc788\uc73c\uba70 \uac01\uc885 \uc804\uc2dc\ubb3c \ubc0f \uc18c\ud488, \uc5f0\ucd9c\uc6a9 \uc2dc\uacf5\ubd80\ubd84\uc774 \ud3ec\ud568\ub418\uc5b4 \uc788\uc2b5\ub2c8\ub2e4. \uc774\ub3d9\uc2dd \uac00\uad6c \ubc0f \uc18c\ud488\ub4e4\uc740 \uc81c\uacf5\ud488\ubaa9\uc5d0 \ud3ec\ud568\ub418\uc5b4 \uc788\uc9c0 \uc54a\uc2b5\ub2c8\ub2e4. \uad6c\uccb4\uc801\uc778 \ud488\ubaa9\uc5d0 \ub300\ud55c \uc790\uc138\ud55c \uc815\ubcf4\uc640 \ucd5c\uc2e0\uc815\ucc45\uc815\ubcf4\ub294 \uace0\uac1d\uc13c\ud130\uc5d0 \uc9c1\uc811 \ubb38\uc758\ud574 \uc8fc\uc138\uc694. \ubcf8 \ucee8\ud150\uce20\ub97c \ubb34\ub2e8\uc73c\ub85c \ucea1\uccd0\ud558\uac70\ub098 \ubc30\ud3ec\ud560 \uc2dc \uc800\uc791\uad8c\ubc95 \uc704\ubc18\uc73c\ub85c \ubc95\uc801\uc778 \uccb4\uc81c\ub97c \ubc1b\uc744 \uc218 \uc788\uc2b5\ub2c8\ub2e4.", params);
			if (hs!=this.ggText) {
				this.ggText=hs;
				this.ggTextDiv.innerHTML=hs;
				if (this.ggUpdatePosition) this.ggUpdatePosition();
			}
		}
		me.__1.ggUpdateText();
		el.appendChild(els);
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
		me._rectangle_5.appendChild(me.__1);
		me.__0.appendChild(me._rectangle_5);
		me.__.appendChild(me.__0);
		me.divSkin.appendChild(me.__);
		me.__108.logicBlock_position();
		me._scrollarea_1.logicBlock_position();
		me._scrollarea_1.logicBlock_size();
		me.__109.logicBlock_visible();
		me.__117.logicBlock_size();
		me.__117.logicBlock_visible();
		me.__115.logicBlock_size();
		me.__115.logicBlock_visible();
		me.__68.logicBlock_position();
		me.__68.logicBlock_scaling();
		me._rectangle_2.logicBlock_size();
		me.__105.logicBlock_visible();
		me.__215.logicBlock_visible();
		me.__106.logicBlock_visible();
		me._timer_1.logicBlock_visible();
		me.__101.logicBlock_visible();
		me.__100.logicBlock_visible();
		me.__96.logicBlock_visible();
		me.__95.logicBlock_visible();
		me._onoff.logicBlock_visible();
		me._on.logicBlock_visible();
		me._off.logicBlock_visible();
		me.__94.logicBlock_text();
		me.__93.logicBlock_visible();
		me.__89.logicBlock_visible();
		me.__88.logicBlock_visible();
		me.__84.logicBlock_visible();
		me.__83.logicBlock_visible();
		me.__78.logicBlock_visible();
		me.__77.logicBlock_visible();
		me.__73.logicBlock_visible();
		me.__76.logicBlock_visible();
		me.__72.logicBlock_visible();
		me._up.logicBlock_visible();
		me.__70.logicBlock_position();
		me.__70.logicBlock_visible();
		me.__70.logicBlock_alpha();
		me._rectangle_3.logicBlock_visible();
		me._dowm.logicBlock_visible();
		me.__64.logicBlock_visible();
		me.__60.logicBlock_position();
		me.__60.logicBlock_scaling();
		me.__61.logicBlock_position();
		me.__62.logicBlock_position();
		me.__62.logicBlock_size();
		me.__74a.logicBlock_position();
		me.__74a.logicBlock_backgroundcolor();
		me.__74b.logicBlock_backgroundcolor();
		me.__84a.logicBlock_position();
		me.__84a.logicBlock_backgroundcolor();
		me._container_2.logicBlock_position();
		me.__57.logicBlock_position();
		me.__57.logicBlock_size();
		me.__57.logicBlock_scaling();
		me.__57.logicBlock_visible();
		me._rectangle_41.logicBlock_size();
		me.__59.logicBlock_scaling();
		me._map_11.ggMarkerInstances=[];
		me._map_11.ggLastNodeId=null;
		me._map_11.ggSimpleFloorplanMarkerArray=[];
		me._map_11.ggFloorplanWidth=0;
		me._map_11.ggFloorplanHeight=0;
		me._map_11__mapdiv=document.createElement('div');
		me._map_11__mapdiv.className='ggskin ggskin_map';
		me._map_11.appendChild(me._map_11__mapdiv);
		me._map_11__img=document.createElement('img');
		me._map_11__img.className='ggskin ggskin_map';
		me._map_11__mapdiv.appendChild(me._map_11__img);
		me._map_11.ggRadar={ lastFov : -1, lastPan : -1, xPos : -1, yPos : -1, radarElement : null }
		me._map_11.ggRadar.update=function() {
			var radar=me._map_11.ggRadar;
			var d2r = Math.PI/180 ;
			var fov = player.getFov();
			var pan = player.getPanNorth();
			pan -= me._map_11.ggFloorplanNorth;
			var filterpassed = true;
			var currentId = player.getCurrentNode();
			if (me._map_11.ggFilteredIds.length > 0 && me._map_11.ggFilteredIds.indexOf(currentId) == -1) filterpassed = false;
			if ((me._map_11.ggSimpleFloorplanMarkerArray.hasOwnProperty(currentId)) && filterpassed) {
				var activeMarker = me._map_11.ggSimpleFloorplanMarkerArray[currentId];
				if ((radar.radarElement) && (fov==radar.lastFov) && (pan==radar.lastPan) && (activeMarker.radarXPos==radar.xPos) && (activeMarker.radarYPos==radar.yPos)) return; 
				radar.lastPan=pan; radar.lastFov=fov;
				radar.xPos=activeMarker.radarXPos; radar.yPos=activeMarker.radarYPos;
				if (radar.radarElement) me._map_11__mapdiv.removeChild(radar.radarElement);
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
				me._map_11__mapdiv.appendChild(radar.radarElement);
				var radarXPos = activeMarker.radarXPos - 30;
				var radarYPos = activeMarker.radarYPos - 30;
				radar.radarElement.style['position'] = 'absolute';
				radar.radarElement.style['left'] = '' + radarXPos + 'px';
				radar.radarElement.style['top'] = '' + radarYPos + 'px';
				radar.radarElement.style['z-index'] = me._map_11.style['z-index'] + 1;
			} else {
				if (radar.radarElement) {
					me._map_11__mapdiv.removeChild(radar.radarElement);
					radar.radarElement = null;
				}
			}
		}
		me._map_11.ggShowSimpleFloorplan=function(mapDetails) {
			var mapWidth = me._map_11.clientWidth;
			var mapHeight = me._map_11.clientHeight;
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
			var imageFilename = basePath + 'images/maptiles/' + me._map_11.ggMapId + '_' + level + '.' + mapDetails['tileformat'];
			me._map_11__img.setAttribute('src', imageFilename);
		me._map_11__mapdiv.setAttribute('style','position: absolute; left: 50%; margin-left: -' + me._map_11.ggFloorplanWidth / 2 + 'px; top: 50%; margin-top: -' + me._map_11.ggFloorplanHeight / 2 + 'px;width:' + me._map_11.ggFloorplanWidth + 'px;height:' + me._map_11.ggFloorplanHeight + 'px;overflow:hidden;;');
		var image_rendering_prop = (player.getBrowser() == 2 || player.getBrowser() == 3) ? 'crisp-edges' : 'pixelated';
		me._map_11__img.setAttribute('style','width:' + me._map_11.ggFloorplanWidth + 'px;height:' + me._map_11.ggFloorplanHeight + 'px;-webkit-user-drag:none;pointer-events:none;image-rendering:' + (mapDetails['crispedges'] ? image_rendering_prop : 'auto') + ';');
		}
		me._map_11.ggCalculateFloorplanSize=function(mapDetails) {
			var floorplanWidth = mapDetails['width'];
			var floorplanHeight = mapDetails['height'];
			var frameAR = me._map_11.clientWidth / me._map_11.clientHeight;
			var floorplanAR = floorplanWidth / floorplanHeight;
			if (frameAR > floorplanAR) {
				me._map_11.ggFloorplanHeight = me._map_11.clientHeight;
				me._map_11.ggFloorplanWidth = me._map_11.ggFloorplanHeight * floorplanAR;
			} else {
				me._map_11.ggFloorplanWidth = me._map_11.clientWidth;
				me._map_11.ggFloorplanHeight = me._map_11.ggFloorplanWidth / floorplanAR;
			}
		}
		me._map_11.ggInitMap=function() {
			var mapDetails = player.getMapDetails(me._map_11.ggMapId);
			if (Object.keys(mapDetails).length === 0) return;
			me._map_11.style.backgroundColor = mapDetails['bgcolor'];
			if (mapDetails.hasOwnProperty('transparent') && mapDetails['transparent']) {
				me._map_11.ggPermeableMap = true;
			} else {
				me._map_11.ggPermeableMap = false;
			}
			me._map_11.ggCalculateFloorplanSize(mapDetails);
			me._map_11.ggShowSimpleFloorplan(mapDetails);
			me._map_11.ggFloorplanNorth = mapDetails['floorplannorth'];
			me._map_11.ggMapNotLoaded = false;
		}
		me._map_11.ggClearMap=function() {
			me._map_11.ggClearMapMarkers();
			me._map_11.ggMapNotLoaded = true;
		}
		me._map_11.ggChangeMap=function(mapId) {
			var newMapType = player.getMapType(mapId)
			if (newMapType == 'web') {
				return;
			}
			me._map_11.ggMapId = mapId;
			if (!me._map_11.ggMapNotLoaded) {
				me._map_11.ggClearMap();
				me._map_11.ggInitMap();
				me._map_11.ggInitMapMarkers();
			}
		}
		me._map_11.ggPlaceMarkersOnSimpleFloorplan=function() {
			var markers=me._map_11.ggSimpleFloorplanMarkerArray;
			for (id in markers) {
				if (markers.hasOwnProperty(id)) {
					marker=markers[id];
					var coords = player.getNodeMapCoordsInPercent(id, me._map_11.ggMapId);
					var xPos = (me._map_11.ggFloorplanWidth * coords[0]) / 100.0;
					var yPos = (me._map_11.ggFloorplanHeight * coords[1]) / 100.0;
					marker.radarXPos = xPos;
					marker.radarYPos = yPos;
					xPos -= me._map_11.ggHMarkerAnchorOffset;
					yPos -= me._map_11.ggVMarkerAnchorOffset;
					marker.style['position'] = 'absolute';
					marker.style['left'] = xPos + 'px';
					marker.style['top'] = yPos + 'px';
					marker.style['z-index'] = me._map_11.style['z-index'] + 2;
				}
			}
		}
		me._map_11.ggInitMapMarkers=function() {
			me._map_11.ggClearMapMarkers();
			var ids=player.getNodeIds();
			me._map_11.ggFilteredIds = [];
			if (me._map_11.ggFilter != '') {
				var filter = me._map_11.ggFilter.split(',');
				for (i=0; i < ids.length; i++) {
					var nodeId = ids[i];
					var nodeData = player.getNodeUserdata(nodeId);
					for (var j=0; j < filter.length; j++) {
						if (nodeData['tags'].indexOf(filter[j].trim()) != -1) me._map_11.ggFilteredIds.push(nodeId);
					}
				}
				if (me._map_11.ggFilteredIds.length > 0) ids = me._map_11.ggFilteredIds;
			}
			for(var i=0; i < ids.length; i++) {
				var id = ids[i];
				var coords = player.getNodeMapCoordsInPercent(id, me._map_11.ggMapId);
				if (coords.length>=2) {
					me._map_11.ggHMarkerAnchorOffset = 12;
					me._map_11.ggVMarkerAnchorOffset = 20;
					var markerParent = new Object();
					markerParent.ggElementNodeId=function() { return id };
					var markerClass = new SkinElement_map_pin_Class(me, markerParent);
					me._map_11.ggMarkerInstances.push(markerClass);
					var marker = markerClass._map_pin;
					me._map_11.ggSimpleFloorplanMarkerArray[id] = marker;
					me._map_11__mapdiv.appendChild(marker);
				}
			}
			me._map_11.ggPlaceMarkersOnSimpleFloorplan();
			skin.updateSize(me._map_11);
		}
		me._map_11.ggClearMapMarkers=function() {
			for (id in me._map_11.ggSimpleFloorplanMarkerArray) {
				if (me._map_11.ggSimpleFloorplanMarkerArray.hasOwnProperty(id)) {
					me._map_11__mapdiv.removeChild(me._map_11.ggSimpleFloorplanMarkerArray[id]);
				}
			}
			me._map_11.ggMarkerInstances=[];
			me._map_11.ggSimpleFloorplanMarkerArray=[];
		}
		me._map_11.logicBlock_visible();
		me._map_21.ggMarkerInstances=[];
		me._map_21.ggLastNodeId=null;
		me._map_21.ggSimpleFloorplanMarkerArray=[];
		me._map_21.ggFloorplanWidth=0;
		me._map_21.ggFloorplanHeight=0;
		me._map_21__mapdiv=document.createElement('div');
		me._map_21__mapdiv.className='ggskin ggskin_map';
		me._map_21.appendChild(me._map_21__mapdiv);
		me._map_21__img=document.createElement('img');
		me._map_21__img.className='ggskin ggskin_map';
		me._map_21__mapdiv.appendChild(me._map_21__img);
		me._map_21.ggRadar={ lastFov : -1, lastPan : -1, xPos : -1, yPos : -1, radarElement : null }
		me._map_21.ggRadar.update=function() {
			var radar=me._map_21.ggRadar;
			var d2r = Math.PI/180 ;
			var fov = player.getFov();
			var pan = player.getPanNorth();
			pan -= me._map_21.ggFloorplanNorth;
			var filterpassed = true;
			var currentId = player.getCurrentNode();
			if (me._map_21.ggFilteredIds.length > 0 && me._map_21.ggFilteredIds.indexOf(currentId) == -1) filterpassed = false;
			if ((me._map_21.ggSimpleFloorplanMarkerArray.hasOwnProperty(currentId)) && filterpassed) {
				var activeMarker = me._map_21.ggSimpleFloorplanMarkerArray[currentId];
				if ((radar.radarElement) && (fov==radar.lastFov) && (pan==radar.lastPan) && (activeMarker.radarXPos==radar.xPos) && (activeMarker.radarYPos==radar.yPos)) return; 
				radar.lastPan=pan; radar.lastFov=fov;
				radar.xPos=activeMarker.radarXPos; radar.yPos=activeMarker.radarYPos;
				if (radar.radarElement) me._map_21__mapdiv.removeChild(radar.radarElement);
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
				me._map_21__mapdiv.appendChild(radar.radarElement);
				var radarXPos = activeMarker.radarXPos - 30;
				var radarYPos = activeMarker.radarYPos - 30;
				radar.radarElement.style['position'] = 'absolute';
				radar.radarElement.style['left'] = '' + radarXPos + 'px';
				radar.radarElement.style['top'] = '' + radarYPos + 'px';
				radar.radarElement.style['z-index'] = me._map_21.style['z-index'] + 1;
			} else {
				if (radar.radarElement) {
					me._map_21__mapdiv.removeChild(radar.radarElement);
					radar.radarElement = null;
				}
			}
		}
		me._map_21.ggShowSimpleFloorplan=function(mapDetails) {
			var mapWidth = me._map_21.clientWidth;
			var mapHeight = me._map_21.clientHeight;
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
			var imageFilename = basePath + 'images/maptiles/' + me._map_21.ggMapId + '_' + level + '.' + mapDetails['tileformat'];
			me._map_21__img.setAttribute('src', imageFilename);
		me._map_21__mapdiv.setAttribute('style','position: absolute; left: 50%; margin-left: -' + me._map_21.ggFloorplanWidth / 2 + 'px; top: 50%; margin-top: -' + me._map_21.ggFloorplanHeight / 2 + 'px;width:' + me._map_21.ggFloorplanWidth + 'px;height:' + me._map_21.ggFloorplanHeight + 'px;overflow:hidden;;');
		var image_rendering_prop = (player.getBrowser() == 2 || player.getBrowser() == 3) ? 'crisp-edges' : 'pixelated';
		me._map_21__img.setAttribute('style','width:' + me._map_21.ggFloorplanWidth + 'px;height:' + me._map_21.ggFloorplanHeight + 'px;-webkit-user-drag:none;pointer-events:none;image-rendering:' + (mapDetails['crispedges'] ? image_rendering_prop : 'auto') + ';');
		}
		me._map_21.ggCalculateFloorplanSize=function(mapDetails) {
			var floorplanWidth = mapDetails['width'];
			var floorplanHeight = mapDetails['height'];
			var frameAR = me._map_21.clientWidth / me._map_21.clientHeight;
			var floorplanAR = floorplanWidth / floorplanHeight;
			if (frameAR > floorplanAR) {
				me._map_21.ggFloorplanHeight = me._map_21.clientHeight;
				me._map_21.ggFloorplanWidth = me._map_21.ggFloorplanHeight * floorplanAR;
			} else {
				me._map_21.ggFloorplanWidth = me._map_21.clientWidth;
				me._map_21.ggFloorplanHeight = me._map_21.ggFloorplanWidth / floorplanAR;
			}
		}
		me._map_21.ggInitMap=function() {
			var mapDetails = player.getMapDetails(me._map_21.ggMapId);
			if (Object.keys(mapDetails).length === 0) return;
			me._map_21.style.backgroundColor = mapDetails['bgcolor'];
			if (mapDetails.hasOwnProperty('transparent') && mapDetails['transparent']) {
				me._map_21.ggPermeableMap = true;
			} else {
				me._map_21.ggPermeableMap = false;
			}
			me._map_21.ggCalculateFloorplanSize(mapDetails);
			me._map_21.ggShowSimpleFloorplan(mapDetails);
			me._map_21.ggFloorplanNorth = mapDetails['floorplannorth'];
			me._map_21.ggMapNotLoaded = false;
		}
		me._map_21.ggClearMap=function() {
			me._map_21.ggClearMapMarkers();
			me._map_21.ggMapNotLoaded = true;
		}
		me._map_21.ggChangeMap=function(mapId) {
			var newMapType = player.getMapType(mapId)
			if (newMapType == 'web') {
				return;
			}
			me._map_21.ggMapId = mapId;
			if (!me._map_21.ggMapNotLoaded) {
				me._map_21.ggClearMap();
				me._map_21.ggInitMap();
				me._map_21.ggInitMapMarkers();
			}
		}
		me._map_21.ggPlaceMarkersOnSimpleFloorplan=function() {
			var markers=me._map_21.ggSimpleFloorplanMarkerArray;
			for (id in markers) {
				if (markers.hasOwnProperty(id)) {
					marker=markers[id];
					var coords = player.getNodeMapCoordsInPercent(id, me._map_21.ggMapId);
					var xPos = (me._map_21.ggFloorplanWidth * coords[0]) / 100.0;
					var yPos = (me._map_21.ggFloorplanHeight * coords[1]) / 100.0;
					marker.radarXPos = xPos;
					marker.radarYPos = yPos;
					xPos -= me._map_21.ggHMarkerAnchorOffset;
					yPos -= me._map_21.ggVMarkerAnchorOffset;
					marker.style['position'] = 'absolute';
					marker.style['left'] = xPos + 'px';
					marker.style['top'] = yPos + 'px';
					marker.style['z-index'] = me._map_21.style['z-index'] + 2;
				}
			}
		}
		me._map_21.ggInitMapMarkers=function() {
			me._map_21.ggClearMapMarkers();
			var ids=player.getNodeIds();
			me._map_21.ggFilteredIds = [];
			if (me._map_21.ggFilter != '') {
				var filter = me._map_21.ggFilter.split(',');
				for (i=0; i < ids.length; i++) {
					var nodeId = ids[i];
					var nodeData = player.getNodeUserdata(nodeId);
					for (var j=0; j < filter.length; j++) {
						if (nodeData['tags'].indexOf(filter[j].trim()) != -1) me._map_21.ggFilteredIds.push(nodeId);
					}
				}
				if (me._map_21.ggFilteredIds.length > 0) ids = me._map_21.ggFilteredIds;
			}
			for(var i=0; i < ids.length; i++) {
				var id = ids[i];
				var coords = player.getNodeMapCoordsInPercent(id, me._map_21.ggMapId);
				if (coords.length>=2) {
					me._map_21.ggHMarkerAnchorOffset = 12;
					me._map_21.ggVMarkerAnchorOffset = 20;
					var markerParent = new Object();
					markerParent.ggElementNodeId=function() { return id };
					var markerClass = new SkinElement_map_pin_Class(me, markerParent);
					me._map_21.ggMarkerInstances.push(markerClass);
					var marker = markerClass._map_pin;
					me._map_21.ggSimpleFloorplanMarkerArray[id] = marker;
					me._map_21__mapdiv.appendChild(marker);
				}
			}
			me._map_21.ggPlaceMarkersOnSimpleFloorplan();
			skin.updateSize(me._map_21);
		}
		me._map_21.ggClearMapMarkers=function() {
			for (id in me._map_21.ggSimpleFloorplanMarkerArray) {
				if (me._map_21.ggSimpleFloorplanMarkerArray.hasOwnProperty(id)) {
					me._map_21__mapdiv.removeChild(me._map_21.ggSimpleFloorplanMarkerArray[id]);
				}
			}
			me._map_21.ggMarkerInstances=[];
			me._map_21.ggSimpleFloorplanMarkerArray=[];
		}
		me._map_21.logicBlock_visible();
		me.__54.logicBlock_position();
		me.__54.logicBlock_scaling();
		me.__54.logicBlock_visible();
		me._rectangle_40.logicBlock_size();
		me.__56.logicBlock_scaling();
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
		me._infopopup.logicBlock_visible();
		me.__114.logicBlock_bordercolor();
		me.__214.logicBlock_bordercolor();
		me.__312.logicBlock_bordercolor();
		me.__410.logicBlock_bordercolor();
		me.__113.logicBlock_backgroundcolor();
		player.setVariableValue('vis_button_1', true);
		me.__213.logicBlock_backgroundcolor();
		me.__311.logicBlock_backgroundcolor();
		me.__49.logicBlock_backgroundcolor();
		me.__112.logicBlock_alpha();
		player.setVariableValue('vis_button_1', true);
		me.__212.logicBlock_alpha();
		me.__310.logicBlock_alpha();
		me.__47.logicBlock_alpha();
		me._infopopupm.logicBlock_visible();
		me._image_6.logicBlock_alpha();
		player.setVariableValue('vis_button_1', true);
		me._image_111.logicBlock_alpha();
		me._image_12.logicBlock_alpha();
		me._image_131.logicBlock_alpha();
		me.__111.logicBlock_bordercolor();
		player.setVariableValue('vis_button_1', true);
		me.__211.logicBlock_bordercolor();
		me.__39.logicBlock_bordercolor();
		me.__40.logicBlock_bordercolor();
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
		me.__33.logicBlock_position();
		me.__33.logicBlock_scaling();
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
					var markerClass = new SkinElement_map_pin2_Class(me, markerParent);
					me._map_1.ggMarkerInstances.push(markerClass);
					var marker = markerClass._map_pin2;
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
					var markerClass = new SkinElement_map_pin2_Class(me, markerParent);
					me._map_2.ggMarkerInstances.push(markerClass);
					var marker = markerClass._map_pin2;
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
		me.__9.logicBlock_visible();
		me.__28.logicBlock_position();
		me.__27.logicBlock_position();
		me._timer_2.logicBlock_visible();
		me.__26.logicBlock_position();
		me.__19.logicBlock_position();
		me._image_9.logicBlock_position();
		me._image_10.logicBlock_position();
		me.__8.logicBlock_visible();
		me.__23.logicBlock_position();
		me.__23.logicBlock_visible();
		me._image_3.logicBlock_position();
		me._image_4.logicBlock_position();
		me.__.logicBlock_visible();
		me.__3.logicBlock_scaling();
		me._image_130.logicBlock_scaling();
		me.__210.logicBlock_scaling();
		me._image_13.logicBlock_scaling();
		me.__4.logicBlock_position();
		me.__0.logicBlock_position();
		me.__0.logicBlock_size();
		me.__0.logicBlock_scaling();
		player.addListener('activehotspotchanged', function(event) {
			if (hotspotTemplates.hasOwnProperty('info-냉장고')) {
				for(var i = 0; i < hotspotTemplates['info-냉장고'].length; i++) {
					hotspotTemplates['info-냉장고'][i].ggEvent_activehotspotchanged();
				}
			}
			me.__8.logicBlock_visible();
		});
		player.addListener('changenode', function(event) {
			if (hotspotTemplates.hasOwnProperty('info-냉장고')) {
				for(var i = 0; i < hotspotTemplates['info-냉장고'].length; i++) {
					hotspotTemplates['info-냉장고'][i].ggEvent_changenode();
				}
			}
			me.__108.logicBlock_position();
			me.__109.logicBlock_visible();
			me.__117.logicBlock_visible();
			me.__117.ggUpdateConditionNodeChange();
			me.__115.logicBlock_visible();
			me.__115.ggUpdateConditionNodeChange();
			me._rectangle_2.logicBlock_size();
			me.__105.logicBlock_visible();
			me.__215.logicBlock_visible();
			me.__106.logicBlock_visible();
			me._timer_1.logicBlock_visible();
			me.__101.logicBlock_visible();
			me.__100.logicBlock_visible();
			me.__96.logicBlock_visible();
			me.__95.logicBlock_visible();
			me._onoff.logicBlock_visible();
			me._on.logicBlock_visible();
			me._off.logicBlock_visible();
			me.__94.logicBlock_text();
			me.__93.logicBlock_visible();
			me.__89.logicBlock_visible();
			me.__88.logicBlock_visible();
			me.__84.logicBlock_visible();
			me.__83.logicBlock_visible();
			me.__78.logicBlock_visible();
			me.__77.logicBlock_visible();
			me.__73.logicBlock_visible();
			me.__72.logicBlock_visible();
			me._up.logicBlock_visible();
			me.__70.logicBlock_position();
			me.__70.logicBlock_visible();
			me.__70.logicBlock_alpha();
			me._rectangle_3.logicBlock_visible();
			me._dowm.logicBlock_visible();
			me.__64.logicBlock_visible();
			me.__74a.logicBlock_backgroundcolor();
			me.__74b.logicBlock_backgroundcolor();
			me.__84a.logicBlock_backgroundcolor();
			me._map_11.logicBlock_visible();
			for (var i=0; i < me._map_11.ggMarkerInstances.length; i++) {
				me._map_11.ggMarkerInstances[i].ggEvent_changenode();
			}
			var mapDetails = player.getMapDetails(me._map_11.ggMapId);
			if (mapDetails.hasOwnProperty('title')) {
				me._map_11.ggCalculateFloorplanSize(mapDetails);
				me._map_11.ggShowSimpleFloorplan(mapDetails);
				me._map_11.ggPlaceMarkersOnSimpleFloorplan();
			}
			if (me._map_11.ggRadar) me._map_11.ggRadar.update();
			if (me._map_11.ggLastNodeId) {
				var lastActiveMarker = me._map_11.ggSimpleFloorplanMarkerArray[me._map_11.ggLastNodeId];
				if (lastActiveMarker && lastActiveMarker.ggDeactivate) lastActiveMarker.ggDeactivate();
			}
			var id = player.getCurrentNode();
			var marker = me._map_11.ggSimpleFloorplanMarkerArray[id];
			if (marker) {
				if (marker.ggActivate) marker.ggActivate();
			}
			if (player.getMapType(me._map_11.ggMapId) == 'file') {
				var coords = player.getNodeMapCoords(id, me._map_11.ggMapId);
				if (coords.length < 2) {
					var mapId = player.getMapContainingNode(id);
					if (mapId != '') {
							me._map_11.ggChangeMap(mapId);
					}
				}
			}
			me._map_11.ggLastNodeId = id;
			me._map_11.ggRadar.update();
			me._map_21.logicBlock_visible();
			for (var i=0; i < me._map_21.ggMarkerInstances.length; i++) {
				me._map_21.ggMarkerInstances[i].ggEvent_changenode();
			}
			var mapDetails = player.getMapDetails(me._map_21.ggMapId);
			if (mapDetails.hasOwnProperty('title')) {
				me._map_21.ggCalculateFloorplanSize(mapDetails);
				me._map_21.ggShowSimpleFloorplan(mapDetails);
				me._map_21.ggPlaceMarkersOnSimpleFloorplan();
			}
			if (me._map_21.ggRadar) me._map_21.ggRadar.update();
			if (me._map_21.ggLastNodeId) {
				var lastActiveMarker = me._map_21.ggSimpleFloorplanMarkerArray[me._map_21.ggLastNodeId];
				if (lastActiveMarker && lastActiveMarker.ggDeactivate) lastActiveMarker.ggDeactivate();
			}
			var id = player.getCurrentNode();
			var marker = me._map_21.ggSimpleFloorplanMarkerArray[id];
			if (marker) {
				if (marker.ggActivate) marker.ggActivate();
			}
			if (player.getMapType(me._map_21.ggMapId) == 'file') {
				var coords = player.getNodeMapCoords(id, me._map_21.ggMapId);
				if (coords.length < 2) {
					var mapId = player.getMapContainingNode(id);
					if (mapId != '') {
							me._map_21.ggChangeMap(mapId);
					}
				}
			}
			me._map_21.ggLastNodeId = id;
			me._map_21.ggRadar.update();
			me.__54.logicBlock_position();
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
			me.__114.logicBlock_bordercolor();
			me.__214.logicBlock_bordercolor();
			me.__312.logicBlock_bordercolor();
			me.__410.logicBlock_bordercolor();
			me.__113.logicBlock_backgroundcolor();
			me.__213.logicBlock_backgroundcolor();
			me.__311.logicBlock_backgroundcolor();
			me.__49.logicBlock_backgroundcolor();
			me.__112.logicBlock_alpha();
			me.__212.logicBlock_alpha();
			me.__310.logicBlock_alpha();
			me.__47.logicBlock_alpha();
			me._image_6.logicBlock_alpha();
			me._image_111.logicBlock_alpha();
			me._image_12.logicBlock_alpha();
			me._image_131.logicBlock_alpha();
			me.__111.logicBlock_bordercolor();
			me.__211.logicBlock_bordercolor();
			me.__39.logicBlock_bordercolor();
			me.__40.logicBlock_bordercolor();
			me._markertemplate__normalInst.ggEvent_changenode();
			me._markertemplate__activeInst.ggEvent_changenode();
			me.__33.logicBlock_position();
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
			me.__28.logicBlock_position();
			me.__27.logicBlock_position();
			if (me.__27.ggLastIsActive!=me.__27.ggIsActive()) {
				me.__27.ggLastIsActive=me.__27.ggIsActive();
				if (me.__27.ggIsActive()) {
					if (me.__27.ggActivate) me.__27.ggActivate();
				} else {
					if (me.__27.ggDeactivate) me.__27.ggDeactivate();
				}
			}
			me._timer_2.logicBlock_visible();
			me.__26.logicBlock_position();
			me.__19.logicBlock_position();
			if (me.__19.ggLastIsActive!=me.__19.ggIsActive()) {
				me.__19.ggLastIsActive=me.__19.ggIsActive();
				if (me.__19.ggIsActive()) {
					if (me.__19.ggActivate) me.__19.ggActivate();
				} else {
					if (me.__19.ggDeactivate) me.__19.ggDeactivate();
				}
			}
			me._image_9.logicBlock_position();
			me._image_10.logicBlock_position();
			me.__8.logicBlock_visible();
			me.__23.logicBlock_position();
			me.__23.logicBlock_visible();
			me._image_3.logicBlock_position();
			if (me._image_3.ggLastIsActive!=me._image_3.ggIsActive()) {
				me._image_3.ggLastIsActive=me._image_3.ggIsActive();
				if (me._image_3.ggIsActive()) {
					if (me._image_3.ggActivate) me._image_3.ggActivate();
				} else {
					if (me._image_3.ggDeactivate) me._image_3.ggDeactivate();
				}
			}
			me._image_4.logicBlock_position();
			if (me._image_4.ggLastIsActive!=me._image_4.ggIsActive()) {
				me._image_4.ggLastIsActive=me._image_4.ggIsActive();
				if (me._image_4.ggIsActive()) {
					if (me._image_4.ggActivate) me._image_4.ggActivate();
				} else {
					if (me._image_4.ggDeactivate) me._image_4.ggDeactivate();
				}
			}
			me._image_130.logicBlock_scaling();
			me.__210.logicBlock_scaling();
			me._image_13.logicBlock_scaling();
		});
		player.addListener('configloaded', function(event) {
			if (hotspotTemplates.hasOwnProperty('info-냉장고')) {
				for(var i = 0; i < hotspotTemplates['info-냉장고'].length; i++) {
					hotspotTemplates['info-냉장고'][i].ggEvent_configloaded();
				}
			}
			me.__108.logicBlock_position();
			me._scrollarea_1.ggUpdatePosition();
			me._rectangle_2.logicBlock_size();
			me.__105.logicBlock_visible();
			me.__215.logicBlock_visible();
			me.__106.logicBlock_visible();
			me.__101.logicBlock_visible();
			me.__96.logicBlock_visible();
			me._onoff.logicBlock_visible();
			me.__89.logicBlock_visible();
			me.__84.logicBlock_visible();
			me.__78.logicBlock_visible();
			me.__73.logicBlock_visible();
			me._up.logicBlock_visible();
			me.__70.logicBlock_position();
			me.__70.logicBlock_visible();
			me.__70.logicBlock_alpha();
			me._rectangle_3.logicBlock_visible();
			me._dowm.logicBlock_visible();
			me.__74a.logicBlock_position();
			me.__84a.logicBlock_position();
			me.__57.logicBlock_visible();
			for (var i=0; i < me._map_11.ggMarkerInstances.length; i++) {
				me._map_11.ggMarkerInstances[i].ggEvent_configloaded();
			}
			if (me._map_11.ggVisible) {
				me._map_11.ggClearMap();
				me._map_11.ggInitMap(false);
				me._map_11.ggInitMapMarkers(true);
			}
			for (var i=0; i < me._map_21.ggMarkerInstances.length; i++) {
				me._map_21.ggMarkerInstances[i].ggEvent_configloaded();
			}
			if (me._map_21.ggVisible) {
				me._map_21.ggClearMap();
				me._map_21.ggInitMap(false);
				me._map_21.ggInitMapMarkers(true);
			}
			me.__54.logicBlock_position();
			me.__54.logicBlock_visible();
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
			me._infopopup.logicBlock_visible();
			me.__114.logicBlock_bordercolor();
			me.__214.logicBlock_bordercolor();
			me.__312.logicBlock_bordercolor();
			me.__410.logicBlock_bordercolor();
			me.__113.logicBlock_backgroundcolor();
			me.__213.logicBlock_backgroundcolor();
			me.__311.logicBlock_backgroundcolor();
			me.__49.logicBlock_backgroundcolor();
			me.__112.logicBlock_alpha();
			me.__212.logicBlock_alpha();
			me.__310.logicBlock_alpha();
			me.__47.logicBlock_alpha();
			me._image_6.logicBlock_alpha();
			me._image_111.logicBlock_alpha();
			me._image_12.logicBlock_alpha();
			me._image_131.logicBlock_alpha();
			me.__111.logicBlock_bordercolor();
			me.__211.logicBlock_bordercolor();
			me.__39.logicBlock_bordercolor();
			me.__40.logicBlock_bordercolor();
			player.setMediaVisibility("\uc5d0\uc5b4\ucee8","0",0);
			me._markertemplate__normalInst.ggEvent_configloaded();
			me._markertemplate__activeInst.ggEvent_configloaded();
			me.__33.logicBlock_position();
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
			me.__9.logicBlock_visible();
			me.__28.logicBlock_position();
			me.__27.logicBlock_position();
			me.__26.logicBlock_position();
			me.__19.logicBlock_position();
			me._image_9.logicBlock_position();
			me._image_10.logicBlock_position();
			me.__8.logicBlock_visible();
			me.__23.logicBlock_position();
			me._image_3.logicBlock_position();
			me._image_4.logicBlock_position();
			me.__.logicBlock_visible();
			me._image_130.logicBlock_scaling();
			me.__210.logicBlock_scaling();
			me._image_13.logicBlock_scaling();
		});
		player.addListener('fullscreenenter', function(event) {
			me.__76.logicBlock_visible();
		});
		player.addListener('fullscreenexit', function(event) {
			me.__76.logicBlock_visible();
		});
		player.addListener('hastouch', function(event) {
			me.__8.logicBlock_visible();
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
			me._map_11.ggRadar.update();
			me._map_21.ggRadar.update();
			me._map_10.ggRadar.update();
			me._map_20.ggRadar.update();
			me._map_1.ggRadar.update();
			me._map_2.ggRadar.update();
		});
		player.addListener('sizechanged', function(event) {
			for(var i = 0; i < me.__115.ggInstances.length; i++) {
				me.__115.ggInstances[i].ggEvent_sizechanged(event);
			}
			for(var i = 0; i < me.__117.ggInstances.length; i++) {
				me.__117.ggInstances[i].ggEvent_sizechanged(event);
			}
			me._scrollarea_1.logicBlock_position();
			me._scrollarea_1.logicBlock_size();
			me.__117.logicBlock_size();
			me.__115.logicBlock_size();
			me.__68.logicBlock_position();
			me.__68.logicBlock_scaling();
			me.__60.logicBlock_position();
			me.__60.logicBlock_scaling();
			me.__61.logicBlock_position();
			me.__62.logicBlock_position();
			me.__62.logicBlock_size();
			me.__74a.logicBlock_position();
			me.__84a.logicBlock_position();
			me._container_2.logicBlock_position();
			me.__57.logicBlock_position();
			me.__57.logicBlock_size();
			me.__57.logicBlock_scaling();
			me.__57.logicBlock_visible();
			me._rectangle_41.logicBlock_size();
			me.__59.logicBlock_scaling();
			me.__54.logicBlock_scaling();
			me.__54.logicBlock_visible();
			me._rectangle_40.logicBlock_size();
			me.__56.logicBlock_scaling();
			me._infopopupm.logicBlock_visible();
			me.__33.logicBlock_scaling();
			me.__9.logicBlock_visible();
			me.__.logicBlock_visible();
			me.__3.logicBlock_scaling();
			me.__4.logicBlock_position();
			me.__0.logicBlock_position();
			me.__0.logicBlock_size();
			me.__0.logicBlock_scaling();
		});
		player.addListener('varchanged_vis_button_1', function(event) {
			me.__114.logicBlock_bordercolor();
			me.__113.logicBlock_backgroundcolor();
			me.__112.logicBlock_alpha();
			me._image_6.logicBlock_alpha();
			me.__111.logicBlock_bordercolor();
		});
		player.addListener('varchanged_vis_button_2', function(event) {
			me.__214.logicBlock_bordercolor();
			me.__213.logicBlock_backgroundcolor();
			me.__212.logicBlock_alpha();
			me._image_111.logicBlock_alpha();
			me.__211.logicBlock_bordercolor();
		});
		player.addListener('varchanged_vis_button_3', function(event) {
			me.__312.logicBlock_bordercolor();
			me.__311.logicBlock_backgroundcolor();
			me.__310.logicBlock_alpha();
			me._image_12.logicBlock_alpha();
			me.__39.logicBlock_bordercolor();
		});
		player.addListener('varchanged_vis_button_4', function(event) {
			me.__410.logicBlock_bordercolor();
			me.__49.logicBlock_backgroundcolor();
			me.__47.logicBlock_alpha();
			me._image_131.logicBlock_alpha();
			me.__40.logicBlock_bordercolor();
		});
		player.addListener('varchanged_vis_direction', function(event) {
			me.__28.logicBlock_position();
			me.__27.logicBlock_position();
			me.__26.logicBlock_position();
			me.__19.logicBlock_position();
			me._image_9.logicBlock_position();
			me._image_10.logicBlock_position();
			me._image_130.logicBlock_scaling();
			me.__210.logicBlock_scaling();
			me._image_13.logicBlock_scaling();
		});
		player.addListener('varchanged_vis_foot', function(event) {
			me.__23.logicBlock_position();
			me._image_3.logicBlock_position();
			me._image_4.logicBlock_position();
		});
		player.addListener('varchanged_vis_long', function(event) {
			me.__70.logicBlock_visible();
			me.__70.logicBlock_alpha();
		});
		player.addListener('varchanged_vis_mobilemap', function(event) {
			me.__54.logicBlock_position();
			me.__33.logicBlock_position();
		});
		player.addListener('varchanged_vis_roomchoice', function(event) {
			me.__108.logicBlock_position();
			me.__215.logicBlock_visible();
			me.__106.logicBlock_visible();
		});
		player.addListener('varchanged_vis_short', function(event) {
			me._rectangle_2.logicBlock_size();
			me.__105.logicBlock_visible();
			me.__101.logicBlock_visible();
			me.__96.logicBlock_visible();
			me._onoff.logicBlock_visible();
			me.__89.logicBlock_visible();
			me.__84.logicBlock_visible();
			me.__78.logicBlock_visible();
			me.__73.logicBlock_visible();
			me._up.logicBlock_visible();
			me.__70.logicBlock_position();
			me.__70.logicBlock_visible();
			me.__70.logicBlock_alpha();
			me._rectangle_3.logicBlock_visible();
			me._dowm.logicBlock_visible();
		});
		player.addListener('varchanged_vis_skin_show', function(event) {
			me.__105.logicBlock_visible();
			me.__101.logicBlock_visible();
			me.__96.logicBlock_visible();
			me._onoff.logicBlock_visible();
			me.__89.logicBlock_visible();
			me.__84.logicBlock_visible();
			me.__78.logicBlock_visible();
			me.__73.logicBlock_visible();
		});
		player.addListener('viewerinit', function(event) {
			me.__117.ggUpdate();
			me.__115.ggUpdate();
		});
	};
	function SkinCloner__115_Class(nodeId, parentScope, ggParent, parameter) {
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
		el=me.__116=document.createElement('div');
		el.isDragging = function() {
			let scrollerParent = me.__116;
			while ((scrollerParent = scrollerParent.parentNode) != null) {
				if (scrollerParent.hasOwnProperty('ggIsDragging') && scrollerParent.ggIsDragging == true) return true;
			}
			return false;
		}
		els=me.__116__text=document.createElement('div');
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
		me.__116.ggUpdateText=function() {
			var params = [];
			params.push(String(player._(me.ggUserdata.title)));
			var hs = player._("%1", params);
			if (hs!=this.ggText) {
				this.ggText=hs;
				this.ggTextDiv.innerHTML=hs;
				if (this.ggUpdatePosition) this.ggUpdatePosition();
			}
		}
		me.__116.ggUpdateText();
		player.addListener('changenode', function() {
			me.__116.ggUpdateText();
		});
		el.appendChild(els);
		me.__116.ggIsActive=function() {
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
		me.__116.ggUpdatePosition=function (useTransition) {
		}
		me._rectangle_1.appendChild(me.__116);
		me._nodeimage_1.appendChild(me._rectangle_1);
		me.__div.appendChild(me._nodeimage_1);
		me._nodeimage_1.logicBlock_size();
			me.ggEvent_sizechanged=function(event) {
				me._nodeimage_1.logicBlock_size();
			};
	};
	function SkinCloner__117_Class(nodeId, parentScope, ggParent, parameter) {
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
		el=me.__118=document.createElement('div');
		el.isDragging = function() {
			let scrollerParent = me.__118;
			while ((scrollerParent = scrollerParent.parentNode) != null) {
				if (scrollerParent.hasOwnProperty('ggIsDragging') && scrollerParent.ggIsDragging == true) return true;
			}
			return false;
		}
		els=me.__118__text=document.createElement('div');
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
		me.__118.ggUpdateText=function() {
			var params = [];
			params.push(String(player._(me.ggUserdata.title)));
			var hs = player._("%1", params);
			if (hs!=this.ggText) {
				this.ggText=hs;
				this.ggTextDiv.innerHTML=hs;
				if (this.ggUpdatePosition) this.ggUpdatePosition();
			}
		}
		me.__118.ggUpdateText();
		player.addListener('changenode', function() {
			me.__118.ggUpdateText();
		});
		el.appendChild(els);
		me.__118.ggIsActive=function() {
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
		me.__118.ggUpdatePosition=function (useTransition) {
		}
		me._rectangle_10.appendChild(me.__118);
		me._nodeimage_10.appendChild(me._rectangle_10);
		me.__div.appendChild(me._nodeimage_10);
		me._nodeimage_10.logicBlock_size();
			me.ggEvent_sizechanged=function(event) {
				me._nodeimage_10.logicBlock_size();
			};
	};
	function SkinElement_map_pin2_Class(parentScope,ggParent) {
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
		
		el=me._map_pin2=document.createElement('div');
		el.ggId="map_pin2";
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
		me._map_pin2.ggIsActive=function() {
			return player.getCurrentNode()==this.ggElementNodeId();
		}
		el.ggElementNodeId=function() {
			return me.ggNodeId;
		}
		me._map_pin2.onclick=function (e) {
			if (
				(
					((me._map_pin2.ggIsActive() == false))
				)
			) {
				player.openNext("{"+me.ggNodeId+"}","");
			}
		}
		me._map_pin2.ggUpdatePosition=function (useTransition) {
		}
		el=me._map_pin_active2=document.createElement('div');
		els=me._map_pin_active2__img=document.createElement('img');
		els.className='ggskin ggskin_map_pin_active2';
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
		el.ggId="map_pin_active2";
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
		me._map_pin_active2.ggIsActive=function() {
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
		me._map_pin_active2.logicBlock_size = function() {
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
			if (me._map_pin_active2.ggCurrentLogicStateSize != newLogicStateSize) {
				me._map_pin_active2.ggCurrentLogicStateSize = newLogicStateSize;
				me._map_pin_active2.style.transition='width 0s, height 0s, transform 200ms ease 0ms, opacity 500ms ease 0ms';
				if (me._map_pin_active2.ggCurrentLogicStateSize == 0) {
					me._map_pin_active2.style.width='10px';
					me._map_pin_active2.style.height='10px';
					me._map_pin_active2.style.left = 'calc(50% - (10px / 2))';
					me._map_pin_active2.style.top = 'calc(50% - (10px / 2))';
					skin.updateSize(me._map_pin_active2);
				}
				else if (me._map_pin_active2.ggCurrentLogicStateSize == 1) {
					me._map_pin_active2.style.width='10px';
					me._map_pin_active2.style.height='10px';
					me._map_pin_active2.style.left = 'calc(50% - (10px / 2))';
					me._map_pin_active2.style.top = 'calc(50% - (10px / 2))';
					skin.updateSize(me._map_pin_active2);
				}
				else {
					me._map_pin_active2.style.width='15px';
					me._map_pin_active2.style.height='15px';
					me._map_pin_active2.style.left = 'calc(50% - (15px / 2))';
					me._map_pin_active2.style.top = 'calc(50% - (15px / 2))';
					skin.updateSize(me._map_pin_active2);
				}
			}
		}
		me._map_pin_active2.logicBlock_size();
		me._map_pin_active2.logicBlock_scaling = function() {
			var newLogicStateScaling;
			if (
				((me.elementMouseOver['map_pin_active2'] == true))
			)
			{
				newLogicStateScaling = 0;
			}
			else {
				newLogicStateScaling = -1;
			}
			if (me._map_pin_active2.ggCurrentLogicStateScaling != newLogicStateScaling) {
				me._map_pin_active2.ggCurrentLogicStateScaling = newLogicStateScaling;
				me._map_pin_active2.style.transition='width 0s, height 0s, transform 200ms ease 0ms, opacity 500ms ease 0ms';
				if (me._map_pin_active2.ggCurrentLogicStateScaling == 0) {
					me._map_pin_active2.ggParameter.sx = 1.1;
					me._map_pin_active2.ggParameter.sy = 1.1;
					me._map_pin_active2.style.transform=parameterToTransform(me._map_pin_active2.ggParameter);
					setTimeout(function() {skin.updateSize(me._map_pin_active2);}, 250);
				}
				else {
					me._map_pin_active2.ggParameter.sx = 1;
					me._map_pin_active2.ggParameter.sy = 1;
					me._map_pin_active2.style.transform=parameterToTransform(me._map_pin_active2.ggParameter);
					setTimeout(function() {skin.updateSize(me._map_pin_active2);}, 250);
				}
			}
		}
		me._map_pin_active2.logicBlock_scaling();
		me._map_pin_active2.logicBlock_alpha = function() {
			var newLogicStateAlpha;
			if (
				((me._map_pin_active2.ggIsActive() == true))
			)
			{
				newLogicStateAlpha = 0;
			}
			else {
				newLogicStateAlpha = -1;
			}
			if (me._map_pin_active2.ggCurrentLogicStateAlpha != newLogicStateAlpha) {
				me._map_pin_active2.ggCurrentLogicStateAlpha = newLogicStateAlpha;
				me._map_pin_active2.style.transition='width 0s, height 0s, transform 200ms ease 0ms, opacity 500ms ease 0ms';
				if (me._map_pin_active2.ggCurrentLogicStateAlpha == 0) {
					me._map_pin_active2.style.visibility=me._map_pin_active2.ggVisible?'inherit':'hidden';
					me._map_pin_active2.style.opacity=1;
				}
				else {
					setTimeout(function() { if (me._map_pin_active2.style.opacity == 0.0) { me._map_pin_active2.style.visibility="hidden"; } }, 505);
					me._map_pin_active2.style.opacity=0;
				}
			}
		}
		me._map_pin_active2.logicBlock_alpha();
		me._map_pin_active2.onmouseover=function (e) {
			me.elementMouseOver['map_pin_active2']=true;
			me._map_pin_active2.logicBlock_scaling();
		}
		me._map_pin_active2.onmouseout=function (e) {
			me.elementMouseOver['map_pin_active2']=false;
			me._map_pin_active2.logicBlock_scaling();
		}
		me._map_pin_active2.ggUpdatePosition=function (useTransition) {
		}
		me._map_pin2.appendChild(me._map_pin_active2);
		el=me._map_pin_normal2=document.createElement('div');
		els=me._map_pin_normal2__img=document.createElement('img');
		els.className='ggskin ggskin_map_pin_normal2';
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
		el.ggId="map_pin_normal2";
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
		hs+='position : absolute;';
		hs+='top : calc(50% - ((22px + 0px) / 2) + 0px);';
		hs+='visibility : inherit;';
		hs+='width : 13px;';
		hs+='pointer-events:auto;';
		el.setAttribute('style',hs);
		el.style.transformOrigin='50% 100%';
		me._map_pin_normal2.ggIsActive=function() {
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
		me._map_pin_normal2.logicBlock_size = function() {
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
			if (me._map_pin_normal2.ggCurrentLogicStateSize != newLogicStateSize) {
				me._map_pin_normal2.ggCurrentLogicStateSize = newLogicStateSize;
				me._map_pin_normal2.style.transition='width 0s, height 0s, transform 200ms ease 0ms, opacity 500ms ease 0ms';
				if (me._map_pin_normal2.ggCurrentLogicStateSize == 0) {
					me._map_pin_normal2.style.width='10px';
					me._map_pin_normal2.style.height='19px';
					me._map_pin_normal2.style.left = 'calc(50% - (10px / 2))';
					me._map_pin_normal2.style.top = 'calc(50% - (19px / 2))';
					skin.updateSize(me._map_pin_normal2);
				}
				else if (me._map_pin_normal2.ggCurrentLogicStateSize == 1) {
					me._map_pin_normal2.style.width='10px';
					me._map_pin_normal2.style.height='19px';
					me._map_pin_normal2.style.left = 'calc(50% - (10px / 2))';
					me._map_pin_normal2.style.top = 'calc(50% - (19px / 2))';
					skin.updateSize(me._map_pin_normal2);
				}
				else {
					me._map_pin_normal2.style.width='13px';
					me._map_pin_normal2.style.height='22px';
					me._map_pin_normal2.style.left = 'calc(50% - (13px / 2))';
					me._map_pin_normal2.style.top = 'calc(50% - (22px / 2))';
					skin.updateSize(me._map_pin_normal2);
				}
			}
		}
		me._map_pin_normal2.logicBlock_size();
		me._map_pin_normal2.logicBlock_scaling = function() {
			var newLogicStateScaling;
			if (
				((me.elementMouseOver['map_pin_normal2'] == true))
			)
			{
				newLogicStateScaling = 0;
			}
			else {
				newLogicStateScaling = -1;
			}
			if (me._map_pin_normal2.ggCurrentLogicStateScaling != newLogicStateScaling) {
				me._map_pin_normal2.ggCurrentLogicStateScaling = newLogicStateScaling;
				me._map_pin_normal2.style.transition='width 0s, height 0s, transform 200ms ease 0ms, opacity 500ms ease 0ms';
				if (me._map_pin_normal2.ggCurrentLogicStateScaling == 0) {
					me._map_pin_normal2.ggParameter.sx = 1.1;
					me._map_pin_normal2.ggParameter.sy = 1.1;
					me._map_pin_normal2.style.transform=parameterToTransform(me._map_pin_normal2.ggParameter);
					setTimeout(function() {skin.updateSize(me._map_pin_normal2);}, 250);
				}
				else {
					me._map_pin_normal2.ggParameter.sx = 1;
					me._map_pin_normal2.ggParameter.sy = 1;
					me._map_pin_normal2.style.transform=parameterToTransform(me._map_pin_normal2.ggParameter);
					setTimeout(function() {skin.updateSize(me._map_pin_normal2);}, 250);
				}
			}
		}
		me._map_pin_normal2.logicBlock_scaling();
		me._map_pin_normal2.logicBlock_alpha = function() {
			var newLogicStateAlpha;
			if (
				((me._map_pin_normal2.ggIsActive() == true))
			)
			{
				newLogicStateAlpha = 0;
			}
			else {
				newLogicStateAlpha = -1;
			}
			if (me._map_pin_normal2.ggCurrentLogicStateAlpha != newLogicStateAlpha) {
				me._map_pin_normal2.ggCurrentLogicStateAlpha = newLogicStateAlpha;
				me._map_pin_normal2.style.transition='width 0s, height 0s, transform 200ms ease 0ms, opacity 500ms ease 0ms';
				if (me._map_pin_normal2.ggCurrentLogicStateAlpha == 0) {
					setTimeout(function() { if (me._map_pin_normal2.style.opacity == 0.0) { me._map_pin_normal2.style.visibility="hidden"; } }, 505);
					me._map_pin_normal2.style.opacity=0;
				}
				else {
					me._map_pin_normal2.style.visibility=me._map_pin_normal2.ggVisible?'inherit':'hidden';
					me._map_pin_normal2.style.opacity=1;
				}
			}
		}
		me._map_pin_normal2.logicBlock_alpha();
		me._map_pin_normal2.onmouseover=function (e) {
			me.elementMouseOver['map_pin_normal2']=true;
			me._map_pin_normal2.logicBlock_scaling();
		}
		me._map_pin_normal2.onmouseout=function (e) {
			me.elementMouseOver['map_pin_normal2']=false;
			me._map_pin_normal2.logicBlock_scaling();
		}
		me._map_pin_normal2.ggUpdatePosition=function (useTransition) {
		}
		me._map_pin2.appendChild(me._map_pin_normal2);
		me._map_pin_active2.logicBlock_size();
		me._map_pin_active2.logicBlock_scaling();
		me._map_pin_active2.logicBlock_alpha();
		me._map_pin_normal2.logicBlock_size();
		me._map_pin_normal2.logicBlock_scaling();
		me._map_pin_normal2.logicBlock_alpha();
			me.ggEvent_changenode=function() {
				me._map_pin_active2.logicBlock_alpha();
				me._map_pin_normal2.logicBlock_alpha();
			};
			me.ggEvent_configloaded=function() {
				me._map_pin_active2.logicBlock_size();
				me._map_pin_normal2.logicBlock_size();
			};
			me.ggEvent_sizechanged=function() {
				me._map_pin_active2.logicBlock_size();
				me._map_pin_normal2.logicBlock_size();
			};
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
	function SkinHotspotClass__36(parentScope,hotspot) {
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
		el=me.__36=document.createElement('div');
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
		me.__36.ggIsActive=function() {
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
		me.__36.onclick=function (e) {
			player.setMediaVisibility("\uc5d0\uc5b4\ucee8","1",500);
			player.triggerEvent('hsproxyclick', {'id': me.hotspot.id, 'url': me.hotspot.url});
		}
		me.__36.ondblclick=function (e) {
			player.triggerEvent('hsproxydblclick', {'id': me.hotspot.id, 'url': me.hotspot.url});
		}
		me.__36.onmouseover=function (e) {
			player.setActiveHotspot(me.hotspot);
			me.elementMouseOver['_36']=true;
			player.triggerEvent('hsproxyover', {'id': me.hotspot.id, 'url': me.hotspot.url});
		}
		me.__36.onmouseout=function (e) {
			player.setActiveHotspot(null);
			me.elementMouseOver['_36']=false;
			player.triggerEvent('hsproxyout', {'id': me.hotspot.id, 'url': me.hotspot.url});
		}
		me.__36.ggUpdatePosition=function (useTransition) {
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
		me.__36.appendChild(me._external_2);
		if ((hotspot) && (hotspot.customimage)) {
			me._external_2.style.width=hotspot.customimagewidth + 'px';
			me._external_2.style.height=hotspot.customimageheight + 'px';
		}
			me.ggEvent_hsproxyclick=function() {
				if (event.id=='에어컨') {
					me.__36.onclick();
				}
			};
			me.ggEvent_hsproxydblclick=function() {
				if (event.id=='에어컨') {
					me.__36.ondblclick();
				}
			};
			me.ggEvent_hsproxyout=function() {
				if (event.id=='에어컨') {
					me.__36.onmouseout();
				}
			};
			me.ggEvent_hsproxyover=function() {
				if (event.id=='에어컨') {
					me.__36.onmouseover();
				}
			};
			me.__div = me.__36;
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
			if (hotspot.skinid=='에어컨') {
				hotspot.skinid = '에어컨';
				hsinst = new SkinHotspotClass__36(me, hotspot);
			if (!hotspotTemplates.hasOwnProperty(hotspot.skinid)) {
				hotspotTemplates[hotspot.skinid] = [];
			}
			hotspotTemplates[hotspot.skinid].push(hsinst);
		} else
		{
				hotspot.skinid = 'ht_node';
				hsinst = new SkinHotspotClass_ht_node(me, hotspot);
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
		me.__105.ggUpdateConditionTimer();
		me._timer_1.ggUpdateConditionTimer();
		if (me._timer_1.ggLastIsActive!=me._timer_1.ggIsActive()) {
			me._timer_1.ggLastIsActive=me._timer_1.ggIsActive();
			if (me._timer_1.ggLastIsActive) {
				me.__106.style.transition='none';
				me.__106.style.visibility='hidden';
				me.__106.ggVisible=false;
			} else {
			}
		}
		me.__101.ggUpdateConditionTimer();
		me.__100.ggUpdateConditionTimer();
		if (me.__100.ggLastIsActive!=me.__100.ggIsActive()) {
			me.__100.ggLastIsActive=me.__100.ggIsActive();
			if (me.__100.ggLastIsActive) {
				me.__102.style.transition='none';
				me.__102.style.visibility='hidden';
				me.__102.ggVisible=false;
			} else {
			}
		}
		me.__96.ggUpdateConditionTimer();
		me.__95.ggUpdateConditionTimer();
		if (me.__95.ggLastIsActive!=me.__95.ggIsActive()) {
			me.__95.ggLastIsActive=me.__95.ggIsActive();
			if (me.__95.ggLastIsActive) {
				me.__97.style.transition='none';
				me.__97.style.visibility='hidden';
				me.__97.ggVisible=false;
			} else {
			}
		}
		me._onoff.ggUpdateConditionTimer();
		me.__93.ggUpdateConditionTimer();
		if (me.__93.ggLastIsActive!=me.__93.ggIsActive()) {
			me.__93.ggLastIsActive=me.__93.ggIsActive();
			if (me.__93.ggLastIsActive) {
				me.__94.style.transition='none';
				me.__94.style.visibility='hidden';
				me.__94.ggVisible=false;
			} else {
			}
		}
		me.__89.ggUpdateConditionTimer();
		me.__88.ggUpdateConditionTimer();
		if (me.__88.ggLastIsActive!=me.__88.ggIsActive()) {
			me.__88.ggLastIsActive=me.__88.ggIsActive();
			if (me.__88.ggLastIsActive) {
				me.__90.style.transition='none';
				me.__90.style.visibility='hidden';
				me.__90.ggVisible=false;
			} else {
			}
		}
		me.__84.ggUpdateConditionTimer();
		me.__83.ggUpdateConditionTimer();
		if (me.__83.ggLastIsActive!=me.__83.ggIsActive()) {
			me.__83.ggLastIsActive=me.__83.ggIsActive();
			if (me.__83.ggLastIsActive) {
				me.__85.style.transition='none';
				me.__85.style.visibility='hidden';
				me.__85.ggVisible=false;
			} else {
			}
		}
		me.__78.ggUpdateConditionTimer();
		me.__77.ggUpdateConditionTimer();
		if (me.__77.ggLastIsActive!=me.__77.ggIsActive()) {
			me.__77.ggLastIsActive=me.__77.ggIsActive();
			if (me.__77.ggLastIsActive) {
				me.__80.style.transition='none';
				me.__80.style.visibility='hidden';
				me.__80.ggVisible=false;
				me.__81.style.transition='none';
				me.__81.style.visibility='hidden';
				me.__81.ggVisible=false;
			} else {
			}
		}
		me.__73.ggUpdateConditionTimer();
		me.__72.ggUpdateConditionTimer();
		if (me.__72.ggLastIsActive!=me.__72.ggIsActive()) {
			me.__72.ggLastIsActive=me.__72.ggIsActive();
			if (me.__72.ggLastIsActive) {
				me.__74.style.transition='none';
				me.__74.style.visibility='hidden';
				me.__74.ggVisible=false;
			} else {
			}
		}
		me.__63.ggUpdateConditionTimer();
		me.__64.ggUpdateConditionTimer();
		if (me.__64.ggLastIsActive!=me.__64.ggIsActive()) {
			me.__64.ggLastIsActive=me.__64.ggIsActive();
			if (me.__64.ggLastIsActive) {
				me.__65.style.transition='none';
				me.__65.style.visibility='hidden';
				me.__65.ggVisible=false;
			} else {
			}
		}
		me._timer_2.ggUpdateConditionTimer();
		if (me._timer_2.ggLastIsActive!=me._timer_2.ggIsActive()) {
			me._timer_2.ggLastIsActive=me._timer_2.ggIsActive();
			if (me._timer_2.ggLastIsActive) {
				player.setVariableValue('vis_direction', !player.getVariableValue('vis_direction'));
			} else {
			}
		}
		var hs='';
		if (me.__8.ggParameter) {
			hs+=parameterToTransform(me.__8.ggParameter) + ' ';
		}
		hs+='translate(' + (1 * player.mouse.x + -35) + 'px,0px) ';
		hs+='translate(0px,' + (1 * player.mouse.y + 20) + 'px) ';
		me.__8.style.transform=hs;
		me.__23.ggUpdateConditionTimer();
		if (me.__23.ggLastIsActive!=me.__23.ggIsActive()) {
			me.__23.ggLastIsActive=me.__23.ggIsActive();
			if (me.__23.ggLastIsActive) {
				player.setVariableValue('vis_foot', !player.getVariableValue('vis_foot'));
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