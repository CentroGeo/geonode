(function (cjs, an) {

var p; // shortcut to reference prototypes
var lib={};var ss={};var img={};
lib.webFontTxtInst = {}; 
var loadedTypekitCount = 0;
var loadedGoogleCount = 0;
var gFontsUpdateCacheList = [];
var tFontsUpdateCacheList = [];
lib.ssMetadata = [];



lib.updateListCache = function (cacheList) {		
	for(var i = 0; i < cacheList.length; i++) {		
		if(cacheList[i].cacheCanvas)		
			cacheList[i].updateCache();		
	}		
};		

lib.addElementsToCache = function (textInst, cacheList) {		
	var cur = textInst;		
	while(cur != null && cur != exportRoot) {		
		if(cacheList.indexOf(cur) != -1)		
			break;		
		cur = cur.parent;		
	}		
	if(cur != exportRoot) {		
		var cur2 = textInst;		
		var index = cacheList.indexOf(cur);		
		while(cur2 != null && cur2 != cur) {		
			cacheList.splice(index, 0, cur2);		
			cur2 = cur2.parent;		
			index++;		
		}		
	}		
	else {		
		cur = textInst;		
		while(cur != null && cur != exportRoot) {		
			cacheList.push(cur);		
			cur = cur.parent;		
		}		
	}		
};		

lib.gfontAvailable = function(family, totalGoogleCount) {		
	lib.properties.webfonts[family] = true;		
	var txtInst = lib.webFontTxtInst && lib.webFontTxtInst[family] || [];		
	for(var f = 0; f < txtInst.length; ++f)		
		lib.addElementsToCache(txtInst[f], gFontsUpdateCacheList);		

	loadedGoogleCount++;		
	if(loadedGoogleCount == totalGoogleCount) {		
		lib.updateListCache(gFontsUpdateCacheList);		
	}		
};		

lib.tfontAvailable = function(family, totalTypekitCount) {		
	lib.properties.webfonts[family] = true;		
	var txtInst = lib.webFontTxtInst && lib.webFontTxtInst[family] || [];		
	for(var f = 0; f < txtInst.length; ++f)		
		lib.addElementsToCache(txtInst[f], tFontsUpdateCacheList);		

	loadedTypekitCount++;		
	if(loadedTypekitCount == totalTypekitCount) {		
		lib.updateListCache(tFontsUpdateCacheList);		
	}		
};
// symbols:
// helper functions:

function mc_symbol_clone() {
	var clone = this._cloneProps(new this.constructor(this.mode, this.startPosition, this.loop));
	clone.gotoAndStop(this.currentFrame);
	clone.paused = this.paused;
	clone.framerate = this.framerate;
	return clone;
}

function getMCSymbolPrototype(symbol, nominalBounds, frameBounds) {
	var prototype = cjs.extend(symbol, cjs.MovieClip);
	prototype.clone = mc_symbol_clone;
	prototype.nominalBounds = nominalBounds;
	prototype.frameBounds = frameBounds;
	return prototype;
	}


(lib.navOBJ = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// Capa_1
	this.shape = new cjs.Shape();
	this.shape.graphics.f("#FFFFFF").s().p("Ai3C4QhMhMAAhsQAAhqBMhNQBMhMBrAAQBrAABNBMQBMBNAABqQAABshMBMQhNBMhrAAQhrAAhMhMg");

	this.timeline.addTween(cjs.Tween.get(this.shape).to({_off:true},3).wait(1));

	// Capa_2
	this.shape_1 = new cjs.Shape();
	this.shape_1.graphics.f("#4B92C2").s().p("AjTDUQhYhYAAh8QAAh8BYhXQBYhYB7AAQB8AABYBYQBYBYAAB7QAAB8hYBYQhYBYh8AAQh7AAhYhYg");
	this.shape_1._off = true;

	this.timeline.addTween(cjs.Tween.get(this.shape_1).wait(1).to({_off:false},0).to({_off:true},2).wait(1));

	// Capa_3
	this.shape_2 = new cjs.Shape();
	this.shape_2.graphics.f("#808080").s().p("AjTDUQhYhYAAh8QAAh8BYhXQBYhYB7AAQB8AABYBYQBYBYAAB7QAAB8hYBYQhYBYh8AAQh7AAhYhYg");

	this.timeline.addTween(cjs.Tween.get(this.shape_2).wait(4));

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = new cjs.Rectangle(-30,-30,60,60);


(lib.navDIM_06 = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// Capa_1
	this.shape = new cjs.Shape();
	this.shape.graphics.f("rgba(255,255,255,0.008)").s().p("AlBDRQl1oDg8p4IFcgiQA0IaE9G2QE2GvHiDcIiRE+Qo2kCltn6g");
	this.shape.setTransform(-158.375,116.575);

	this.timeline.addTween(cjs.Tween.get(this.shape).wait(1));

}).prototype = getMCSymbolPrototype(lib.navDIM_06, new cjs.Rectangle(-233.9,19.3,151.10000000000002,194.6), null);


(lib.navDIM_05 = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// Capa_1
	this.shape = new cjs.Shape();
	this.shape.graphics.f("rgba(255,255,255,0.008)").s().p("AzXCHICck4QIIECI/g8QI2g5HBlZIDVEVQoQGVqZBEQh9ANh9AAQocAAnwj3g");
	this.shape.setTransform(19.25,196.8301);

	this.timeline.addTween(cjs.Tween.get(this.shape).wait(1));

}).prototype = getMCSymbolPrototype(lib.navDIM_05, new cjs.Rectangle(-104.7,158.6,247.89999999999998,76.5), null);


(lib.navDIM_04 = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// Capa_1
	this.shape = new cjs.Shape();
	this.shape.graphics.f("rgba(255,255,255,0.008)").s().p("ApRMRQG4k5DdnuQDZnlgyoQIFcgiQA8JskAI5QkEJFoFFwg");
	this.shape.setTransform(175.6869,84.25);

	this.timeline.addTween(cjs.Tween.get(this.shape).wait(1));

}).prototype = getMCSymbolPrototype(lib.navDIM_04, new cjs.Rectangle(116.3,-22.7,118.8,213.89999999999998), null);


(lib.navDIM_03 = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// Capa_1
	this.shape = new cjs.Shape();
	this.shape.graphics.f("rgba(255,255,255,0.008)").s().p("ABCgXQlMnNoLjYICFlDQJnD+GHIdQGPInApKoIldAVQgjpClUnVg");
	this.shape.setTransform(155.525,-114.8);

	this.timeline.addTween(cjs.Tween.get(this.shape).wait(1));

}).prototype = getMCSymbolPrototype(lib.navDIM_03, new cjs.Rectangle(76.5,-217.2,158.1,204.89999999999998), null);


(lib.navDIM_02 = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// Capa_1
	this.shape = new cjs.Shape();
	this.shape.graphics.f("rgba(255,255,255,0.008)").s().p("AyRBMQH7loJuhAQJ3hBJCEIIiRE+QnrjgoaA3QoRA2mvEzg");
	this.shape.setTransform(-19.6,-198.9421);

	this.timeline.addTween(cjs.Tween.get(this.shape).wait(1));

}).prototype = getMCSymbolPrototype(lib.navDIM_02, new cjs.Rectangle(-136.5,-235.1,233.9,72.29999999999998), null);


(lib.navDIM_01 = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// Capa_1
	this.shape = new cjs.Shape();
	this.shape.graphics.f("rgba(255,255,255,0.008)").s().p("AmfiHQEWpuI3l4IDBEkQnjFAjsIRQjoIGBKIyIlbAuQhXqUERphg");
	this.shape.setTransform(-172.7762,-82.55);

	this.timeline.addTween(cjs.Tween.get(this.shape).wait(1));

}).prototype = getMCSymbolPrototype(lib.navDIM_01, new cjs.Rectangle(-235.1,-195.9,124.69999999999999,226.70000000000002), null);


(lib.mcRTMG = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// Capa_1
	this.shape = new cjs.Shape();
	this.shape.graphics.f("rgba(255,255,255,0.008)").s().p("EglfAlgIAAjIIDIAAIAADIgEAiYgiXIAAjIIDIAAIAADIg");
	this.shape.setTransform(240,240);

	this.shape_1 = new cjs.Shape();
	this.shape_1.graphics.f("#414141").s().p("AEZTMQiwiqAAkLQAAkNCwiwQCuiuEHAAQB8AABrAmQBvAnBJBIQAxAuAAAwQAAAugjAiQgiAjguAAQgvAAgsgsQgqgrhJgWQhDgVhMAAQijAAhuBtQhxBvAACrQAACnBxBrQBtBnCkAAQCbAABfhBQBRg4AcheImDAAQg2AAgdgdQgcgcAAg1QAAgzAcgbQAdgcA2AAIH+AAQA5AAAhAiQAgAgAAAyQAADWiyCiQi1Clj1AAQkIAAitimgAmGVDQgbgfAAg+IAAneIjkIRQgPAhggAUQgfATgjAAQgiAAghgTQgigUgPghIjgoRIAAHeQAAA+gbAfQgcAeg4AAQg5AAgbgeQgcgfAAg+IAAudQAAhEAlgkQAiggA2AAQBZAAAlBXIE4LXIE4rXQAmhXBYAAQA2AAAiAgQAlAkAABEIAAOdQAAA+gbAfQgbAeg5AAQg5AAgbgegAJZhLQgigjAAhEIAAu8IihAAQhIAAgjggQgjghAAhDQAAh/COAAIJJAAQBFAAAkAhQAkAgAABAQAABAgkAhQgjAhhGAAIilAAIAAO4QAACNiAAAQhAAAghgigAoeg6QgggTgSglIjhnGIhvAAIAAGEQAABEgiAkQghAjhAAAQg/AAgigjQghgkAAhEIAAwkQAAiZCZAAIEqAAQC5AAB4B8QB0B4AACuQAAB3hGBnQhEBjhdAgIC6GEQAQAiAAAdQAAA3gpAnQgoAkgzAAQgjAAgdgRgAugseIDAAAQBKAAAsgzQApgvAAhJQAAhGgpguQgsgxhKAAIjAAAg");
	this.shape_1.setTransform(245.675,238.575);

	this.timeline.addTween(cjs.Tween.get({}).to({state:[{t:this.shape_1},{t:this.shape}]}).wait(1));

}).prototype = getMCSymbolPrototype(lib.mcRTMG, new cjs.Rectangle(0,0,480,480), null);


(lib.localStorage = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// timeline functions:
	this.frame_5 = function() {
		var _this = this;
		var _root = this.parent;
		
		_this.stop();
		
		/************************************************************
			LOCAL-STORAGE
		************************************************************/
		
		if (typeof (Storage) !== 'undefined') {
			var getObject = localStorage.getItem('data_RTMG');
			if (getObject !== null) {
				var goObjectVar = JSON.parse(getObject);
				var dimVALUE = goObjectVar.dimValue;
				if (dimVALUE !== 'inicio') {
					dimSelect();
				} else {
					varRTMG = 'show';
					_root.mcRTMG.alpha = 1;
				}
				//console.log(localStorage.getItem('data_RTMG'));
			} else {
				goObject = {
					'dimSelect': 'select',
					'dimValue': 'inicio'
				};
				varRTMG = 'show';
				_root.mcRTMG.alpha = 1;
				_root.mcDIM.gotoAndStop('inicio');
				localStorage.setItem('data_RTMG', JSON.stringify(goObject));
				//console.log("SIN-DATOS");
			}
		} else {
			varRTMG = 'show';
			_root.mcRTMG.alpha = 1;
			_root.mcDIM.gotoAndStop('inicio');
		}
		
		function dimSelect() {
			var valueSPL = dimVALUE.split('_');
			var valueDAT = valueSPL[1];
			var varRotation = (Number(valueDAT) - 1) * 60;
			varDIM = dimVALUE;
			varOUT = dimVALUE;
			varRTMG = 'hide';
			_root.mcRTMG.alpha = 0;
			_root.mcDIM.gotoAndStop(dimVALUE);
			_root.mcDIM.dimSLC.rotation = varRotation;
			_root.mcDIM.dimSLC.alpha = 1;
		}
		
		// console.log(localStorage.getItem('data_RTMG'));
		
		/***********************************************************/
	}

	// actions tween:
	this.timeline.addTween(cjs.Tween.get(this).wait(5).call(this.frame_5).wait(1));

	// Capa_1
	this.shape = new cjs.Shape();
	this.shape.graphics.f("rgba(255,255,255,0.008)").s().p("AgpAqQgSgRAAgZQAAgYASgRQARgSAYAAQAZAAARASQASARAAAYQAAAZgSARQgRASgZAAQgYAAgRgSg");

	this.timeline.addTween(cjs.Tween.get(this.shape).wait(6));

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = new cjs.Rectangle(-6,-6,12,12);


(lib.dimSLC = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// Capa_1
	this.shape = new cjs.Shape();
	this.shape.graphics.f().s("#DF5353").ss(2,1,1).p("Al0O4Qg2AAgngnQgngnAAg3IAAgCQAAn0DPnFQDPnGF4lIQAqgkA3AEQA2ADAkAqQAkApgEA3QgDA2gqAkQlOEji2GSQi3GRAAG6IAAACQAAA3gnAnQgnAng3AAg");
	this.shape.setTransform(-179.455,-81.67);

	this.shape_1 = new cjs.Shape();
	this.shape_1.graphics.f("#DF5353").s().p("AnRORQgngnAAg3IAAgCQAAn0DPnFQDPnGF4lIQAqgkA3AEQA2ADAkAqQAkApgEA3QgDA2gqAkQlOEji2GSQi3GRAAG6IAAACQAAA3gnAnQgnAng3AAQg2AAgngng");
	this.shape_1.setTransform(-179.455,-81.67);

	this.timeline.addTween(cjs.Tween.get({}).to({state:[{t:this.shape_1},{t:this.shape}]}).wait(1));

}).prototype = getMCSymbolPrototype(lib.dimSLC, new cjs.Rectangle(-231,-177.8,103.1,192.3), null);


(lib.mcDIM = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{inicio:0,dimension_01:9,dimension_02:19,dimension_03:29,dimension_04:39,dimension_05:49,dimension_06:59});

	// timeline functions:
	this.frame_0 = function() {
		var _this = this;
		_this.stop();
		
		/* DIMENSIONES */
		/* INICIO */
		
		_this.navTIP.text = '';
		
		/************************************************************
			OBJETIVOS [DATA][TO-GLOBAL]
		************************************************************/
		
		/************************************************************
			OBJETIVOS [LISTENER]
		************************************************************/
		
		var navOBJS = [
			'navOBJ_11', 'navOBJ_12', 'navOBJ_13', 'navOBJ_14', 'navOBJ_15',
			'navOBJ_21', 'navOBJ_22', 'navOBJ_23',
			'navOBJ_31', 'navOBJ_32', 'navOBJ_33', 'navOBJ_34', 'navOBJ_35', 'navOBJ_36',
			'navOBJ_41', 'navOBJ_42', 'navOBJ_43', 'navOBJ_44', 'navOBJ_45', 'navOBJ_46', 'navOBJ_47', 'navOBJ_48', 'navOBJ_49',
			'navOBJ_51', 'navOBJ_52', 'navOBJ_53', 'navOBJ_54', 'navOBJ_55', 'navOBJ_56', 'navOBJ_57',
			'navOBJ_61', 'navOBJ_62', 'navOBJ_63'
		];
		
		var clickObject = null;
		
		for (i = 0; i < navOBJS.length; i++) {
			clickObject = _this[navOBJS[i]];
			clickObject.addEventListener('mouseover', navOver);
			clickObject.addEventListener('mouseout', navOut);
			clickObject.addEventListener('click', navClick.bind(_this));
		};
		
		/************************************************************
			OBJETIVOS [FUNCTIONS]
		************************************************************/
		
		var itemTIP, itemLNK, elePOS, hgtTIP;
		
		function navOver(event) {
			navTGR = event.target;
			navNAM = navTGR.name;
			navSPL = navNAM.split('_');
			navTPO = navSPL[0];
			navDAT = navSPL[1];
			itemTIP = eval('objTIP_' + navDAT);
			itemLNK = eval('objLNK_' + navDAT);
			_this.dimSUB.alpha = 0;
			_this.navTIP.text = itemTIP;
			elePOS = _this.dimSUB.y;
			elePOS = elePOS + (_this.dimSUB.getMeasuredHeight() / 2) + 1.5;
			hgtTIP = _this.navTIP.getMeasuredHeight() / 2;
			_this.navTIP.y = elePOS - hgtTIP;
		}
		
		function navOut(event) {
			_this.navTIP.text = '';
			_this.dimSUB.alpha = 1;
		}
		
		function navClick(event) {
			if (itemLNK != '') {
				window.open(itemLNK, '_parent');
			}
		}
		
		/***********************************************************/
	}
	this.frame_9 = function() {
		var _this = this;
		_this.stop();
		
		/* DIMENSION_01 */
		/* GEOPOLITICA */
	}
	this.frame_19 = function() {
		var _this = this;
		_this.stop();
		
		/* DIMENSION_02 */
		/* SEGURIDAD */
	}
	this.frame_29 = function() {
		var _this = this;
		_this.stop();
		
		/* DIMENSION_03 */
		/* INSTITUCIONAL */
	}
	this.frame_39 = function() {
		var _this = this;
		_this.stop();
		
		/* DIMENSION_04 */
		/* LABORAL-Y-ECONOMICA */
	}
	this.frame_49 = function() {
		var _this = this;
		_this.stop();
		
		/* DIMENSION_05 */
		/* SOCIAL-Y-CULTURAL */
	}
	this.frame_59 = function() {
		var _this = this;
		_this.stop();
		
		/* DIMENSION_06 */
		/* ASENTAMIENTOS-HUMANOS-CIUDADES-Y-MARCO-AMBIENTAL */
	}

	// actions tween:
	this.timeline.addTween(cjs.Tween.get(this).call(this.frame_0).wait(9).call(this.frame_9).wait(10).call(this.frame_19).wait(10).call(this.frame_29).wait(10).call(this.frame_39).wait(10).call(this.frame_49).wait(10).call(this.frame_59).wait(10));

	// dimTIT
	this.text = new cjs.Text("Geopolítica", "normal 600 32px 'Open Sans'");
	this.text.textAlign = "center";
	this.text.lineHeight = 43;
	this.text.lineWidth = 456;
	this.text.parent = this;
	this.text.setTransform(240,126);
	if(!lib.properties.webfonts['Open Sans']) {
		lib.webFontTxtInst['Open Sans'] = lib.webFontTxtInst['Open Sans'] || [];
		lib.webFontTxtInst['Open Sans'].push(this.text);
	}
	this.text._off = true;

	this.timeline.addTween(cjs.Tween.get(this.text).wait(9).to({_off:false},0).wait(10).to({y:131,text:"Seguridad y\nDerechos Humanos",font:"normal 600 26px 'Open Sans'",lineHeight:36.6},0).wait(10).to({y:126,text:"Institucional",font:"normal 600 32px 'Open Sans'",lineHeight:42.6},0).wait(10).to({text:"Laboral y Económica"},0).wait(10).to({text:"Social y Cultural"},0).wait(10).to({y:131,text:"Asentamientos Humanos,\nCiudades y Marco Ambiental",font:"normal 600 26px 'Open Sans'",lineHeight:36.6},0).wait(10));

	// navTIP
	this.navTIP = new cjs.Text("", "normal 600 16px 'Open Sans'");
	this.navTIP.name = "navTIP";
	this.navTIP.textAlign = "center";
	this.navTIP.lineHeight = 22;
	this.navTIP.lineWidth = 376;
	this.navTIP.parent = this;
	this.navTIP.setTransform(240,189);
	if(!lib.properties.webfonts['Open Sans']) {
		lib.webFontTxtInst['Open Sans'] = lib.webFontTxtInst['Open Sans'] || [];
		lib.webFontTxtInst['Open Sans'].push(this.navTIP);
	}

	this.timeline.addTween(cjs.Tween.get(this.navTIP).wait(69));

	// dimSUB
	this.dimSUB = new cjs.Text("Objetivos", "normal 600 22px 'Open Sans'", "#808080");
	this.dimSUB.name = "dimSUB";
	this.dimSUB.textAlign = "center";
	this.dimSUB.lineHeight = 29;
	this.dimSUB.lineWidth = 316;
	this.dimSUB.parent = this;
	this.dimSUB.setTransform(240,184);
	if(!lib.properties.webfonts['Open Sans']) {
		lib.webFontTxtInst['Open Sans'] = lib.webFontTxtInst['Open Sans'] || [];
		lib.webFontTxtInst['Open Sans'].push(this.dimSUB);
	}
	this.dimSUB._off = true;

	this.timeline.addTween(cjs.Tween.get(this.dimSUB).wait(9).to({_off:false},0).wait(10).to({y:220},0).wait(10).to({y:184},0).wait(30).to({y:220},0).wait(10));

	// navLTR
	this.text_1 = new cjs.Text("d", "34px 'Arial'", "#808080");
	this.text_1.textAlign = "center";
	this.text_1.lineHeight = 46;
	this.text_1.lineWidth = 56;
	this.text_1.parent = this;
	this.text_1.setTransform(130,261);

	this.text_2 = new cjs.Text("e", "34px 'Arial'", "#808080");
	this.text_2.textAlign = "center";
	this.text_2.lineHeight = 46;
	this.text_2.lineWidth = 56;
	this.text_2.parent = this;
	this.text_2.setTransform(240,261);

	this.text_3 = new cjs.Text("f", "34px 'Arial'", "#808080");
	this.text_3.textAlign = "center";
	this.text_3.lineHeight = 46;
	this.text_3.lineWidth = 56;
	this.text_3.parent = this;
	this.text_3.setTransform(350,261);

	this.text_4 = new cjs.Text("g", "34px 'Arial'", "#808080");
	this.text_4.textAlign = "center";
	this.text_4.lineHeight = 46;
	this.text_4.lineWidth = 56;
	this.text_4.parent = this;
	this.text_4.setTransform(185,336);

	this.text_5 = new cjs.Text("h", "34px 'Arial'", "#808080");
	this.text_5.textAlign = "center";
	this.text_5.lineHeight = 46;
	this.text_5.lineWidth = 56;
	this.text_5.parent = this;
	this.text_5.setTransform(295,336);

	this.text_6 = new cjs.Text("q", "34px 'Arial'", "#808080");
	this.text_6.textAlign = "center";
	this.text_6.lineHeight = 46;
	this.text_6.lineWidth = 56;
	this.text_6.parent = this;
	this.text_6.setTransform(240,361);

	this.text_7 = new cjs.Text("x", "34px 'Arial'", "#808080");
	this.text_7.textAlign = "center";
	this.text_7.lineHeight = 46;
	this.text_7.lineWidth = 56;
	this.text_7.parent = this;
	this.text_7.setTransform(333,302);

	this.text_8 = new cjs.Text("y", "34px 'Arial'", "#808080");
	this.text_8.textAlign = "center";
	this.text_8.lineHeight = 46;
	this.text_8.lineWidth = 56;
	this.text_8.parent = this;
	this.text_8.setTransform(193,362);

	this.text_9 = new cjs.Text("z", "34px 'Arial'", "#808080");
	this.text_9.textAlign = "center";
	this.text_9.lineHeight = 46;
	this.text_9.lineWidth = 56;
	this.text_9.parent = this;
	this.text_9.setTransform(287,362);

	this.timeline.addTween(cjs.Tween.get({}).to({state:[]}).to({state:[{t:this.text_5,p:{y:336,text:"h",x:295}},{t:this.text_4,p:{y:336,text:"g",x:185}},{t:this.text_3,p:{x:350,y:261,text:"f"}},{t:this.text_2,p:{x:240,y:261,text:"e"}},{t:this.text_1,p:{x:130,y:261,text:"d"}}]},9).to({state:[{t:this.text_3,p:{x:240,y:343,text:"k"}},{t:this.text_2,p:{x:314.95,y:278,text:"j"}},{t:this.text_1,p:{x:165,y:278,text:"i"}}]},10).to({state:[{t:this.text_6,p:{y:361,text:"q"}},{t:this.text_5,p:{y:306.5,text:"p",x:295}},{t:this.text_4,p:{y:306.5,text:"o",x:185}},{t:this.text_3,p:{x:350,y:252,text:"n"}},{t:this.text_2,p:{x:240,y:252,text:"m"}},{t:this.text_1,p:{x:130,y:252,text:"l"}}]},10).to({state:[{t:this.text_9},{t:this.text_8},{t:this.text_7,p:{x:333,y:302,text:"x"}},{t:this.text_6,p:{y:302,text:"w"}},{t:this.text_5,p:{y:302,text:"v",x:147}},{t:this.text_4,p:{y:242.05,text:"u",x:380}},{t:this.text_3,p:{x:287,y:242,text:"t"}},{t:this.text_2,p:{x:193,y:242.05,text:"s"}},{t:this.text_1,p:{x:100,y:242,text:"r"}}]},10).to({state:[{t:this.text_7,p:{x:330,y:328,text:"gg"}},{t:this.text_6,p:{y:328,text:"ff"}},{t:this.text_5,p:{y:328,text:"ee",x:150}},{t:this.text_4,p:{y:252,text:"dd",x:375}},{t:this.text_3,p:{x:285,y:252,text:"cc"}},{t:this.text_2,p:{x:195,y:252,text:"bb"}},{t:this.text_1,p:{x:105,y:252,text:"aa"}}]},10).to({state:[{t:this.text_3,p:{x:240,y:343,text:"jj"}},{t:this.text_2,p:{x:315,y:278,text:"ii"}},{t:this.text_1,p:{x:165,y:278,text:"hh"}}]},10).wait(10));

	// navOBJ
	this.navOBJ_15 = new lib.navOBJ();
	this.navOBJ_15.name = "navOBJ_15";
	this.navOBJ_15.parent = this;
	this.navOBJ_15.setTransform(295,360);
	new cjs.ButtonHelper(this.navOBJ_15, 0, 1, 2, false, new lib.navOBJ(), 3);

	this.navOBJ_14 = new lib.navOBJ();
	this.navOBJ_14.name = "navOBJ_14";
	this.navOBJ_14.parent = this;
	this.navOBJ_14.setTransform(185,360);
	new cjs.ButtonHelper(this.navOBJ_14, 0, 1, 2, false, new lib.navOBJ(), 3);

	this.navOBJ_13 = new lib.navOBJ();
	this.navOBJ_13.name = "navOBJ_13";
	this.navOBJ_13.parent = this;
	this.navOBJ_13.setTransform(350,285);
	new cjs.ButtonHelper(this.navOBJ_13, 0, 1, 2, false, new lib.navOBJ(), 3);

	this.navOBJ_12 = new lib.navOBJ();
	this.navOBJ_12.name = "navOBJ_12";
	this.navOBJ_12.parent = this;
	this.navOBJ_12.setTransform(240,285);
	new cjs.ButtonHelper(this.navOBJ_12, 0, 1, 2, false, new lib.navOBJ(), 3);

	this.navOBJ_11 = new lib.navOBJ();
	this.navOBJ_11.name = "navOBJ_11";
	this.navOBJ_11.parent = this;
	this.navOBJ_11.setTransform(130,285);
	new cjs.ButtonHelper(this.navOBJ_11, 0, 1, 2, false, new lib.navOBJ(), 3);

	this.navOBJ_23 = new lib.navOBJ();
	this.navOBJ_23.name = "navOBJ_23";
	this.navOBJ_23.parent = this;
	this.navOBJ_23.setTransform(240,367);
	new cjs.ButtonHelper(this.navOBJ_23, 0, 1, 2, false, new lib.navOBJ(), 3);

	this.navOBJ_22 = new lib.navOBJ();
	this.navOBJ_22.name = "navOBJ_22";
	this.navOBJ_22.parent = this;
	this.navOBJ_22.setTransform(314.95,302);
	new cjs.ButtonHelper(this.navOBJ_22, 0, 1, 2, false, new lib.navOBJ(), 3);

	this.navOBJ_21 = new lib.navOBJ();
	this.navOBJ_21.name = "navOBJ_21";
	this.navOBJ_21.parent = this;
	this.navOBJ_21.setTransform(165,302);
	new cjs.ButtonHelper(this.navOBJ_21, 0, 1, 2, false, new lib.navOBJ(), 3);

	this.navOBJ_35 = new lib.navOBJ();
	this.navOBJ_35.name = "navOBJ_35";
	this.navOBJ_35.parent = this;
	this.navOBJ_35.setTransform(295,330.5);
	new cjs.ButtonHelper(this.navOBJ_35, 0, 1, 2, false, new lib.navOBJ(), 3);

	this.navOBJ_34 = new lib.navOBJ();
	this.navOBJ_34.name = "navOBJ_34";
	this.navOBJ_34.parent = this;
	this.navOBJ_34.setTransform(185,330.5);
	new cjs.ButtonHelper(this.navOBJ_34, 0, 1, 2, false, new lib.navOBJ(), 3);

	this.navOBJ_33 = new lib.navOBJ();
	this.navOBJ_33.name = "navOBJ_33";
	this.navOBJ_33.parent = this;
	this.navOBJ_33.setTransform(350,276);
	new cjs.ButtonHelper(this.navOBJ_33, 0, 1, 2, false, new lib.navOBJ(), 3);

	this.navOBJ_32 = new lib.navOBJ();
	this.navOBJ_32.name = "navOBJ_32";
	this.navOBJ_32.parent = this;
	this.navOBJ_32.setTransform(240,276);
	new cjs.ButtonHelper(this.navOBJ_32, 0, 1, 2, false, new lib.navOBJ(), 3);

	this.navOBJ_31 = new lib.navOBJ();
	this.navOBJ_31.name = "navOBJ_31";
	this.navOBJ_31.parent = this;
	this.navOBJ_31.setTransform(130,276);
	new cjs.ButtonHelper(this.navOBJ_31, 0, 1, 2, false, new lib.navOBJ(), 3);

	this.navOBJ_36 = new lib.navOBJ();
	this.navOBJ_36.name = "navOBJ_36";
	this.navOBJ_36.parent = this;
	this.navOBJ_36.setTransform(240,385);
	new cjs.ButtonHelper(this.navOBJ_36, 0, 1, 2, false, new lib.navOBJ(), 3);

	this.navOBJ_45 = new lib.navOBJ();
	this.navOBJ_45.name = "navOBJ_45";
	this.navOBJ_45.parent = this;
	this.navOBJ_45.setTransform(147,326);
	new cjs.ButtonHelper(this.navOBJ_45, 0, 1, 2, false, new lib.navOBJ(), 3);

	this.navOBJ_44 = new lib.navOBJ();
	this.navOBJ_44.name = "navOBJ_44";
	this.navOBJ_44.parent = this;
	this.navOBJ_44.setTransform(380,266.05);
	new cjs.ButtonHelper(this.navOBJ_44, 0, 1, 2, false, new lib.navOBJ(), 3);

	this.navOBJ_43 = new lib.navOBJ();
	this.navOBJ_43.name = "navOBJ_43";
	this.navOBJ_43.parent = this;
	this.navOBJ_43.setTransform(287,266);
	new cjs.ButtonHelper(this.navOBJ_43, 0, 1, 2, false, new lib.navOBJ(), 3);

	this.navOBJ_42 = new lib.navOBJ();
	this.navOBJ_42.name = "navOBJ_42";
	this.navOBJ_42.parent = this;
	this.navOBJ_42.setTransform(193,266.05);
	new cjs.ButtonHelper(this.navOBJ_42, 0, 1, 2, false, new lib.navOBJ(), 3);

	this.navOBJ_41 = new lib.navOBJ();
	this.navOBJ_41.name = "navOBJ_41";
	this.navOBJ_41.parent = this;
	this.navOBJ_41.setTransform(100,266);
	new cjs.ButtonHelper(this.navOBJ_41, 0, 1, 2, false, new lib.navOBJ(), 3);

	this.navOBJ_46 = new lib.navOBJ();
	this.navOBJ_46.name = "navOBJ_46";
	this.navOBJ_46.parent = this;
	this.navOBJ_46.setTransform(240,326);
	new cjs.ButtonHelper(this.navOBJ_46, 0, 1, 2, false, new lib.navOBJ(), 3);

	this.navOBJ_47 = new lib.navOBJ();
	this.navOBJ_47.name = "navOBJ_47";
	this.navOBJ_47.parent = this;
	this.navOBJ_47.setTransform(333,326);
	new cjs.ButtonHelper(this.navOBJ_47, 0, 1, 2, false, new lib.navOBJ(), 3);

	this.navOBJ_48 = new lib.navOBJ();
	this.navOBJ_48.name = "navOBJ_48";
	this.navOBJ_48.parent = this;
	this.navOBJ_48.setTransform(193,386);
	new cjs.ButtonHelper(this.navOBJ_48, 0, 1, 2, false, new lib.navOBJ(), 3);

	this.navOBJ_49 = new lib.navOBJ();
	this.navOBJ_49.name = "navOBJ_49";
	this.navOBJ_49.parent = this;
	this.navOBJ_49.setTransform(287,386);
	new cjs.ButtonHelper(this.navOBJ_49, 0, 1, 2, false, new lib.navOBJ(), 3);

	this.navOBJ_55 = new lib.navOBJ();
	this.navOBJ_55.name = "navOBJ_55";
	this.navOBJ_55.parent = this;
	this.navOBJ_55.setTransform(150,352);
	new cjs.ButtonHelper(this.navOBJ_55, 0, 1, 2, false, new lib.navOBJ(), 3);

	this.navOBJ_54 = new lib.navOBJ();
	this.navOBJ_54.name = "navOBJ_54";
	this.navOBJ_54.parent = this;
	this.navOBJ_54.setTransform(375,276);
	new cjs.ButtonHelper(this.navOBJ_54, 0, 1, 2, false, new lib.navOBJ(), 3);

	this.navOBJ_53 = new lib.navOBJ();
	this.navOBJ_53.name = "navOBJ_53";
	this.navOBJ_53.parent = this;
	this.navOBJ_53.setTransform(285,276);
	new cjs.ButtonHelper(this.navOBJ_53, 0, 1, 2, false, new lib.navOBJ(), 3);

	this.navOBJ_52 = new lib.navOBJ();
	this.navOBJ_52.name = "navOBJ_52";
	this.navOBJ_52.parent = this;
	this.navOBJ_52.setTransform(195,276);
	new cjs.ButtonHelper(this.navOBJ_52, 0, 1, 2, false, new lib.navOBJ(), 3);

	this.navOBJ_51 = new lib.navOBJ();
	this.navOBJ_51.name = "navOBJ_51";
	this.navOBJ_51.parent = this;
	this.navOBJ_51.setTransform(105,276);
	new cjs.ButtonHelper(this.navOBJ_51, 0, 1, 2, false, new lib.navOBJ(), 3);

	this.navOBJ_56 = new lib.navOBJ();
	this.navOBJ_56.name = "navOBJ_56";
	this.navOBJ_56.parent = this;
	this.navOBJ_56.setTransform(240,352);
	new cjs.ButtonHelper(this.navOBJ_56, 0, 1, 2, false, new lib.navOBJ(), 3);

	this.navOBJ_57 = new lib.navOBJ();
	this.navOBJ_57.name = "navOBJ_57";
	this.navOBJ_57.parent = this;
	this.navOBJ_57.setTransform(330,352);
	new cjs.ButtonHelper(this.navOBJ_57, 0, 1, 2, false, new lib.navOBJ(), 3);

	this.navOBJ_63 = new lib.navOBJ();
	this.navOBJ_63.name = "navOBJ_63";
	this.navOBJ_63.parent = this;
	this.navOBJ_63.setTransform(240,367);
	new cjs.ButtonHelper(this.navOBJ_63, 0, 1, 2, false, new lib.navOBJ(), 3);

	this.navOBJ_62 = new lib.navOBJ();
	this.navOBJ_62.name = "navOBJ_62";
	this.navOBJ_62.parent = this;
	this.navOBJ_62.setTransform(315,302);
	new cjs.ButtonHelper(this.navOBJ_62, 0, 1, 2, false, new lib.navOBJ(), 3);

	this.navOBJ_61 = new lib.navOBJ();
	this.navOBJ_61.name = "navOBJ_61";
	this.navOBJ_61.parent = this;
	this.navOBJ_61.setTransform(165,302);
	new cjs.ButtonHelper(this.navOBJ_61, 0, 1, 2, false, new lib.navOBJ(), 3);

	this.timeline.addTween(cjs.Tween.get({}).to({state:[]}).to({state:[{t:this.navOBJ_11},{t:this.navOBJ_12},{t:this.navOBJ_13},{t:this.navOBJ_14},{t:this.navOBJ_15}]},9).to({state:[{t:this.navOBJ_21},{t:this.navOBJ_22},{t:this.navOBJ_23}]},10).to({state:[{t:this.navOBJ_36},{t:this.navOBJ_31},{t:this.navOBJ_32},{t:this.navOBJ_33},{t:this.navOBJ_34},{t:this.navOBJ_35}]},10).to({state:[{t:this.navOBJ_49},{t:this.navOBJ_48},{t:this.navOBJ_47},{t:this.navOBJ_46},{t:this.navOBJ_41},{t:this.navOBJ_42},{t:this.navOBJ_43},{t:this.navOBJ_44},{t:this.navOBJ_45}]},10).to({state:[{t:this.navOBJ_57},{t:this.navOBJ_56},{t:this.navOBJ_51},{t:this.navOBJ_52},{t:this.navOBJ_53},{t:this.navOBJ_54},{t:this.navOBJ_55}]},10).to({state:[{t:this.navOBJ_61},{t:this.navOBJ_62},{t:this.navOBJ_63}]},10).wait(10));

	// dimSLC
	this.dimSLC = new lib.dimSLC();
	this.dimSLC.name = "dimSLC";
	this.dimSLC.parent = this;
	this.dimSLC.setTransform(240,240);
	this.dimSLC.alpha = 0;

	this.timeline.addTween(cjs.Tween.get(this.dimSLC).wait(69));

	// Capa_1
	this.shape = new cjs.Shape();
	this.shape.graphics.f("#808080").s().p("AnRORQgngnAAg3IAAgCQAAn0DPnFQDPnGF4lIQAqgkA3AEQA2ADAkAqQAkApgEA3QgDA2gqAkQlOEji2GSQi3GRAAG6IAAACQAAA3gnAnQgnAng3AAQg2AAgngng");
	this.shape.setTransform(60.545,158.28);

	this.shape_1 = new cjs.Shape();
	this.shape_1.graphics.f("#808080").s().p("AvAEFQgfgRgTggQgbgvAOg1QAOg1AwgcQEFiWEmhPQElhPEvAAQGDAAFqB9QA0ARAYAyQAYAxgSAzQgRA0gyAYQgxAYg0gSQlAhtlXAAQkMAAkDBEQkEBGjoCGQgfASgjAAQgjAAgegRg");
	this.shape_1.setTransform(220.9854,37.775);

	this.shape_2 = new cjs.Shape();
	this.shape_2.graphics.f("#808080").s().p("AG4NDQglgegJgvQhUmykClnQkAlomBjdQgvgcgOg1QgPg0AcgwQAbgwA1gOQA1gOAvAbQGzD7EiGXQEiGVBfHrQALA2gfAtQgeAug2AKQgLACgPAAQgvAAgkgeg");
	this.shape_2.setTransform(400.4592,125.2497);

	this.shape_3 = new cjs.Shape();
	this.shape_3.graphics.f("#808080").s().p("AmrOuQgbgMgTgWQgkgpAEg3QAEg3ApgkQFPkjC3mRQC3mSAAm6IAAgFQAAg2AngnQAngoA3AAQA2AAAnAoQAnAmAAA3IAAAEQAAH0jQHGQjPHHl5FIQglAhgygBQgcAAgagLg");
	this.shape_3.setTransform(419.405,321.65);

	this.shape_4 = new cjs.Shape();
	this.shape_4.graphics.f("#808080").s().p("AurCYQgzgSgYgxQgYgxASgzQARg0AygYQAxgYA0ASQFABuFYAAQEMAAEDhFQEEhFDniGQAvgbA1AOQA1AOAcAvQAbAwgOA1QgOA1gwAbQkFCXklBOQklBPkvAAQmCAAlth+g");
	this.shape_4.setTransform(258.8754,442.2139);

	this.shape_5 = new cjs.Shape();
	this.shape_5.graphics.f("#808080").s().p("AHJNPQmzj7khmXQkjmWhenqQgKg2AegtQAfguA2gKQA2gKAtAeQAuAfAKA2QBTGyEBFnQEAFoGBDeQAvAcAPA1QAOA1gcAvQgSAfgfASQgfARgiAAQgjAAgfgSg");
	this.shape_5.setTransform(79.4767,354.5015);

	this.timeline.addTween(cjs.Tween.get({}).to({state:[]}).to({state:[{t:this.shape}]},9).to({state:[{t:this.shape_1}]},10).to({state:[{t:this.shape_2}]},10).to({state:[{t:this.shape_3}]},10).to({state:[{t:this.shape_4}]},10).to({state:[{t:this.shape_5}]},10).wait(10));

	// Capa_2
	this.shape_6 = new cjs.Shape();
	this.shape_6.graphics.f("#DCDCDC").s().p("AnRORQgngnAAg3IAAgCQAAn0DPnFQDPnGF4lIQAqgkA3AEQA2ADAkAqQAkApgEA3QgDA2gqAkQlOEji2GSQi3GRAAG6IAAACQAAA3gnAnQgnAng3AAQg2AAgngng");
	this.shape_6.setTransform(60.545,158.28);

	this.shape_7 = new cjs.Shape();
	this.shape_7.graphics.f("#DCDCDC").s().p("AvAEFQgfgRgTggQgbgvAOg1QAOg1AwgcQEFiWEmhPQElhPEvAAQGDAAFqB9QA0ARAYAyQAYAxgSAzQgRA0gyAYQgxAYg0gSQlAhtlXAAQkMAAkDBEQkEBGjoCGQgfASgjAAQgjAAgegRg");
	this.shape_7.setTransform(220.9854,37.775);

	this.shape_8 = new cjs.Shape();
	this.shape_8.graphics.f("#DCDCDC").s().p("AG4NDQglgegJgvQhUmykClnQkAlomBjdQgvgcgOg1QgPg0AcgwQAbgwA1gOQA1gOAvAbQGzD7EiGXQEiGVBfHrQALA2gfAtQgeAug2AKQgLACgPAAQgvAAgkgeg");
	this.shape_8.setTransform(400.4592,125.2497);

	this.shape_9 = new cjs.Shape();
	this.shape_9.graphics.f("#DCDCDC").s().p("AmrOuQgbgMgTgWQgkgpAEg3QAEg3ApgkQFPkjC3mRQC3mSAAm6IAAgFQAAg2AngnQAngoA3AAQA2AAAnAoQAnAmAAA3IAAAEQAAH0jQHGQjPHHl5FIQglAhgygBQgcAAgagLg");
	this.shape_9.setTransform(419.405,321.65);

	this.shape_10 = new cjs.Shape();
	this.shape_10.graphics.f("#DCDCDC").s().p("AurCYQgzgSgYgxQgYgxASgzQARg0AygYQAxgYA0ASQFABuFYAAQEMAAEDhFQEEhFDniGQAvgbA1AOQA1AOAcAvQAbAwgOA1QgOA1gwAbQkFCXklBOQklBPkvAAQmCAAlth+g");
	this.shape_10.setTransform(258.8754,442.2139);

	this.shape_11 = new cjs.Shape();
	this.shape_11.graphics.f("#DCDCDC").s().p("AHJNPQmzj7khmXQkjmWhenqQgKg2AegtQAfguA2gKQA2gKAtAeQAuAfAKA2QBTGyEBFnQEAFoGBDeQAvAcAPA1QAOA1gcAvQgSAfgfASQgfARgiAAQgjAAgfgSg");
	this.shape_11.setTransform(79.4767,354.5015);

	this.timeline.addTween(cjs.Tween.get({}).to({state:[{t:this.shape_11},{t:this.shape_10},{t:this.shape_9},{t:this.shape_8},{t:this.shape_7},{t:this.shape_6}]}).wait(69));

	// Capa_3
	this.shape_12 = new cjs.Shape();
	this.shape_12.graphics.f("rgba(255,255,255,0.008)").s().p("EAiYAlgIAAjIIDIAAIAADIgEglfgiXIAAjIIDIAAIAADIg");
	this.shape_12.setTransform(240,240);

	this.shape_13 = new cjs.Shape();
	this.shape_13.graphics.f("#FFFFFF").s().p("AtDe9QmDijkpkqQkqkqijmCQipmPAAm1QAAm1CpmPQCjmCEqkqQEpkpGDijQGPipG0AAQG1AAGQCpQGCCjEpEpQEpEqCkGCQCpGPAAG1QAAG2ipGOQikGCkpEqQkpEqmCCjQmQCpm1AAQm0AAmPipg");
	this.shape_13.setTransform(240,240);

	this.timeline.addTween(cjs.Tween.get({}).to({state:[{t:this.shape_12}]}).to({state:[{t:this.shape_13}]},9).wait(60));

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = new cjs.Rectangle(0,0,480,480);


// stage content:
(lib.mm_rtmg = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{"inicio":0,dimensiones:9});

	// timeline functions:
	this.frame_0 = function() {
		stage.enableMouseOver(30);
		
		var _this = this;
		_this.stop();
		
		_this.mcRTMG.alpha = 0;
		_this.mcDIM.dimSLC.alpha = 0;
		
		/************************************************************
			DIMENSIONES [CURSOR]
		************************************************************/
		
		_this.navDIM_01.cursor = 'pointer';
		_this.navDIM_02.cursor = 'pointer';
		_this.navDIM_03.cursor = 'pointer';
		_this.navDIM_04.cursor = 'pointer';
		_this.navDIM_05.cursor = 'pointer';
		_this.navDIM_06.cursor = 'pointer';
		
		/************************************************************
			DIMENSIONES [NAME]
		************************************************************/
		
		_this.navDIM_01.name = 'navDIM_01';
		_this.navDIM_02.name = 'navDIM_02';
		_this.navDIM_03.name = 'navDIM_03';
		_this.navDIM_04.name = 'navDIM_04';
		_this.navDIM_05.name = 'navDIM_05';
		_this.navDIM_06.name = 'navDIM_06';
		
		/************************************************************
			DIMENSIONES [FUNCTIONS]
		************************************************************/
		
		varDIM = 'inicio';
		varOUT = 'inicio';
		varRTMG = 'hide';
		
		function mouseOver(event) {
			thisTGR = event.target.parent;
			thisNAM = thisTGR.name;
			thisSPL = thisNAM.split('_');
			thisTPO = thisSPL[0];
			thisDAT = thisSPL[1];
			varOVER = 'dimension_' + thisDAT;
			//_this.mcDIM.gotoAndStop(varOVER);
			if (varRTMG == 'show') {
				_this.mcRTMG.alpha = 0;
			}
		}
		
		function mouseOut(event) {
			//_this.mcDIM.gotoAndStop(varOUT);
			if (varRTMG == 'show') {
				_this.mcRTMG.alpha = 1;
			}
		}
		
		function mouseClick(event) {
			var varRotation = (Number(thisDAT) - 1) * 60;
			createjs.Tween.get(_this.mcDIM.dimSLC, {
				loop: false,
				override: true
			}).to({
				rotation: varRotation
			}, 600, createjs.Ease.backOut);
			if (varDIM == varOVER) {
				varDIM = 'inicio';
				varOUT = 'inicio';
				varRTMG = 'show';
				_this.mcRTMG.alpha = 1;
				_this.mcDIM.gotoAndStop('inicio');
				_this.mcDIM.dimSLC.alpha = 0;
				//_this.gotoAndStop('inicio');
			} else {
				varDIM = varOVER;
				varOUT = varOVER;
				varRTMG = 'hide';
				_this.mcRTMG.alpha = 0;
				_this.mcDIM.gotoAndStop(varOVER);
				_this.mcDIM.dimSLC.alpha = 1;
				//_this.gotoAndStop('dimensiones');
			}
			/* LOCAL-STORAGE */
			if (typeof (Storage) !== 'undefined') {
				goObject = {
					'dimSelect': 'select',
					'dimValue': varDIM
				};
				localStorage.setItem('data_RTMG', JSON.stringify(goObject));
			}
		}
		
		/************************************************************
			DIMENSIONES [LISTENER]
		************************************************************/
		
		_this.navDIM_01.addEventListener('mouseover', mouseOver);
		_this.navDIM_01.addEventListener('mouseout', mouseOut);
		_this.navDIM_01.addEventListener('click', mouseClick.bind(_this));
		
		_this.navDIM_02.addEventListener('mouseover', mouseOver);
		_this.navDIM_02.addEventListener('mouseout', mouseOut);
		_this.navDIM_02.addEventListener('click', mouseClick.bind(_this));
		
		_this.navDIM_03.addEventListener('mouseover', mouseOver);
		_this.navDIM_03.addEventListener('mouseout', mouseOut);
		_this.navDIM_03.addEventListener('click', mouseClick.bind(_this));
		
		_this.navDIM_04.addEventListener('mouseover', mouseOver);
		_this.navDIM_04.addEventListener('mouseout', mouseOut);
		_this.navDIM_04.addEventListener('click', mouseClick.bind(_this));
		
		_this.navDIM_05.addEventListener('mouseover', mouseOver);
		_this.navDIM_05.addEventListener('mouseout', mouseOut);
		_this.navDIM_05.addEventListener('click', mouseClick.bind(_this));
		
		_this.navDIM_06.addEventListener('mouseover', mouseOver);
		_this.navDIM_06.addEventListener('mouseout', mouseOut);
		_this.navDIM_06.addEventListener('click', mouseClick.bind(_this));
		
		/************************************************************
			NAVIGATION [DATA][TO-GLOBAL]
		************************************************************/
		//...
		/***********************************************************/
	}
	this.frame_9 = function() {
		var _this = this;
		_this.stop();
	}

	// actions tween:
	this.timeline.addTween(cjs.Tween.get(this).call(this.frame_0).wait(9).call(this.frame_9).wait(10));

	// localStorage
	this.localStorage = new lib.localStorage();
	this.localStorage.name = "localStorage";
	this.localStorage.parent = this;

	this.timeline.addTween(cjs.Tween.get(this.localStorage).wait(19));

	// navDIM
	this.navDIM_06 = new lib.navDIM_06();
	this.navDIM_06.name = "navDIM_06";
	this.navDIM_06.parent = this;
	this.navDIM_06.setTransform(240,240);

	this.navDIM_04 = new lib.navDIM_04();
	this.navDIM_04.name = "navDIM_04";
	this.navDIM_04.parent = this;
	this.navDIM_04.setTransform(240,240);

	this.navDIM_02 = new lib.navDIM_02();
	this.navDIM_02.name = "navDIM_02";
	this.navDIM_02.parent = this;
	this.navDIM_02.setTransform(240,240);

	this.navDIM_05 = new lib.navDIM_05();
	this.navDIM_05.name = "navDIM_05";
	this.navDIM_05.parent = this;
	this.navDIM_05.setTransform(240,240);

	this.navDIM_03 = new lib.navDIM_03();
	this.navDIM_03.name = "navDIM_03";
	this.navDIM_03.parent = this;
	this.navDIM_03.setTransform(240,240);

	this.navDIM_01 = new lib.navDIM_01();
	this.navDIM_01.name = "navDIM_01";
	this.navDIM_01.parent = this;
	this.navDIM_01.setTransform(240,240);

	this.timeline.addTween(cjs.Tween.get({}).to({state:[{t:this.navDIM_01},{t:this.navDIM_03},{t:this.navDIM_05},{t:this.navDIM_02},{t:this.navDIM_04},{t:this.navDIM_06}]}).wait(19));

	// mcDIM
	this.mcDIM = new lib.mcDIM();
	this.mcDIM.name = "mcDIM";
	this.mcDIM.parent = this;

	this.timeline.addTween(cjs.Tween.get(this.mcDIM).wait(19));

	// mcRTMG
	this.mcRTMG = new lib.mcRTMG();
	this.mcRTMG.name = "mcRTMG";
	this.mcRTMG.parent = this;

	this.timeline.addTween(cjs.Tween.get(this.mcRTMG).wait(19));

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = new cjs.Rectangle(234,234,246,246);
// library properties:
lib.properties = {
	id: '358EDBC9540CCC468E67EB70DE4E9CCB',
	width: 480,
	height: 480,
	fps: 30,
	color: "#FFFFFF",
	opacity: 0.00,
	webfonts: {},
	manifest: [],
	preloads: []
};



// bootstrap callback support:

(lib.Stage = function(canvas) {
	createjs.Stage.call(this, canvas);
}).prototype = p = new createjs.Stage();

p.setAutoPlay = function(autoPlay) {
	this.tickEnabled = autoPlay;
}
p.play = function() { this.tickEnabled = true; this.getChildAt(0).gotoAndPlay(this.getTimelinePosition()) }
p.stop = function(ms) { if(ms) this.seek(ms); this.tickEnabled = false; }
p.seek = function(ms) { this.tickEnabled = true; this.getChildAt(0).gotoAndStop(lib.properties.fps * ms / 1000); }
p.getDuration = function() { return this.getChildAt(0).totalFrames / lib.properties.fps * 1000; }

p.getTimelinePosition = function() { return this.getChildAt(0).currentFrame / lib.properties.fps * 1000; }

an.bootcompsLoaded = an.bootcompsLoaded || [];
if(!an.bootstrapListeners) {
	an.bootstrapListeners=[];
}

an.bootstrapCallback=function(fnCallback) {
	an.bootstrapListeners.push(fnCallback);
	if(an.bootcompsLoaded.length > 0) {
		for(var i=0; i<an.bootcompsLoaded.length; ++i) {
			fnCallback(an.bootcompsLoaded[i]);
		}
	}
};

an.compositions = an.compositions || {};
an.compositions['358EDBC9540CCC468E67EB70DE4E9CCB'] = {
	getStage: function() { return exportRoot.getStage(); },
	getLibrary: function() { return lib; },
	getSpriteSheet: function() { return ss; },
	getImages: function() { return img; }
};

an.compositionLoaded = function(id) {
	an.bootcompsLoaded.push(id);
	for(var j=0; j<an.bootstrapListeners.length; j++) {
		an.bootstrapListeners[j](id);
	}
}

an.getComposition = function(id) {
	return an.compositions[id];
}



})(createjs = createjs||{}, AdobeAn = AdobeAn||{});
var createjs, AdobeAn;