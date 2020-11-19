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



(lib.mc_01_background = function() {
	this.initialize(img.mc_01_background);
}).prototype = p = new cjs.Bitmap();
p.nominalBounds = new cjs.Rectangle(0,0,87,69);


(lib.mc_02_background = function() {
	this.initialize(img.mc_02_background);
}).prototype = p = new cjs.Bitmap();
p.nominalBounds = new cjs.Rectangle(0,0,103,91);


(lib.mc_03_background = function() {
	this.initialize(img.mc_03_background);
}).prototype = p = new cjs.Bitmap();
p.nominalBounds = new cjs.Rectangle(0,0,82,121);


(lib.mc_04_background = function() {
	this.initialize(img.mc_04_background);
}).prototype = p = new cjs.Bitmap();
p.nominalBounds = new cjs.Rectangle(0,0,210,142);


(lib.mc_05_background = function() {
	this.initialize(img.mc_05_background);
}).prototype = p = new cjs.Bitmap();
p.nominalBounds = new cjs.Rectangle(0,0,117,109);


(lib.mc_06_background = function() {
	this.initialize(img.mc_06_background);
}).prototype = p = new cjs.Bitmap();
p.nominalBounds = new cjs.Rectangle(0,0,80,73);


(lib.mc_07_background = function() {
	this.initialize(img.mc_07_background);
}).prototype = p = new cjs.Bitmap();
p.nominalBounds = new cjs.Rectangle(0,0,105,102);


(lib.mc_08_background = function() {
	this.initialize(img.mc_08_background);
}).prototype = p = new cjs.Bitmap();
p.nominalBounds = new cjs.Rectangle(0,0,114,61);


(lib.mc_09_background = function() {
	this.initialize(img.mc_09_background);
}).prototype = p = new cjs.Bitmap();
p.nominalBounds = new cjs.Rectangle(0,0,148,107);


(lib.mc_10_background = function() {
	this.initialize(img.mc_10_background);
}).prototype = p = new cjs.Bitmap();
p.nominalBounds = new cjs.Rectangle(0,0,107,154);


(lib.mc_11_background = function() {
	this.initialize(img.mc_11_background);
}).prototype = p = new cjs.Bitmap();
p.nominalBounds = new cjs.Rectangle(0,0,151,127);


(lib.mc_12_background = function() {
	this.initialize(img.mc_12_background);
}).prototype = p = new cjs.Bitmap();
p.nominalBounds = new cjs.Rectangle(0,0,179,122);// helper functions:

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


(lib.mc_simbologia = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{goStart:0,goView:9});

	// timeline functions:
	this.frame_0 = function() {
		this.stop();
	}
	this.frame_9 = function() {
		this.stop();
	}

	// actions tween:
	this.timeline.addTween(cjs.Tween.get(this).call(this.frame_0).wait(9).call(this.frame_9).wait(10));

	// Capa_1
	this.shape = new cjs.Shape();
	this.shape.graphics.f("#394C64").s().p("AgJBGQgKAAAAgJIAAgpIgoAAQgKAAAAgKIAAgTQAAgKAKAAIAoAAIAAgqQAAgIAKAAIATAAQAKAAAAAIIAAAqIAoAAQAKAAAAAKIAAATQAAAKgKAAIgoAAIAAApQAAAJgKAAg");
	this.shape.setTransform(12,12);

	this.shape_1 = new cjs.Shape();
	this.shape_1.graphics.f().s("#FFFFFF").ss(1,1,1).p("AhPh3ICfAAQAoAAAAAoIAACfQAAAogoAAIifAAQgoAAAAgoIAAifQAAgoAoAAg");
	this.shape_1.setTransform(12,12);

	this.shape_2 = new cjs.Shape();
	this.shape_2.graphics.f("rgba(102,164,187,0.498)").s().p("AhPB4QgoAAAAgoIAAifQAAgoAoAAICfAAQAoAAAAAoIAACfQAAAogoAAg");
	this.shape_2.setTransform(12,12);

	this.shape_3 = new cjs.Shape();
	this.shape_3.graphics.f("#000000").s().p("AgeAlQgHgHAAgLQAAgFADgFQADgFAEgEQAFgBAFgCIANgDQAPgCAJgCIAAgEQAAgIgFgEQgFgFgKAAQgJAAgFAEQgFAEgCAIIgOgCQACgJAEgFQAFgGAIgDQAIgDAKAAQAKABAHACQAGADAEADQADAEABAGIAAANIAAASQAAATABAFIAEALIgPAAIgCgLQgIAHgIACQgFAEgJAAQgOAAgHgHgAgDAFIgLADQgFABgCADQgBAEAAADQAAAGAEADQAEAEAJABQAGAAAHgEQAGgEADgGQADgFAAgJIAAgFQgIADgPACg");
	this.shape_3.setTransform(107.6,14.4);

	this.shape_4 = new cjs.Shape();
	this.shape_4.graphics.f("#000000").s().p("AgNA6IAAhTIANAAIAABTgAgNgjIAKgVIARAAIgQAVg");
	this.shape_4.setTransform(101.6,12.8);

	this.shape_5 = new cjs.Shape();
	this.shape_5.graphics.f("#000000").s().p("AgYA1QgJgHAAgNIAOACQABAGAEADQAFAEAJAAQAJAAAFgEQAFgEACgHQABgEAAgOQgJALgNAAQgRAAgJgNQgKgMAAgQQAAgMAFgKQAEgKAIgGQAIgFALAAQAOAAAKAMIAAgKIANAAIAABHQAAATgEAIQgEAIgJAFQgIAEgMAAQgPAAgJgGgAgPgnQgGAIAAAPQAAAQAGAHQAHAHAJAAQAJAAAHgHQAGgHAAgQQAAgPgGgIQgHgHgKAAQgIAAgHAHg");
	this.shape_5.setTransform(94,15.9);

	this.shape_6 = new cjs.Shape();
	this.shape_6.graphics.f("#000000").s().p("AgbAgQgLgLAAgVQAAgWANgLQALgKAOAAQARAAALAMQALALAAAUQAAAPgFAJQgFAJgJAFQgJAGgLAAQgQAAgLgMgAgRgXQgGAIAAAPQAAAQAGAIQAHAIAKAAQAKAAAHgIQAHgIAAgQQAAgPgHgIQgHgHgKgBQgKAAgHAIg");
	this.shape_6.setTransform(85.3,14.4);

	this.shape_7 = new cjs.Shape();
	this.shape_7.graphics.f("#000000").s().p("AgGA5IAAhxIANAAIAABxg");
	this.shape_7.setTransform(79.1,12.8);

	this.shape_8 = new cjs.Shape();
	this.shape_8.graphics.f("#000000").s().p("AgbAgQgLgLAAgVQAAgWANgLQALgKAOAAQARAAALAMQALALAAAUQAAAPgFAJQgFAJgJAFQgJAGgLAAQgQAAgLgMgAgRgXQgGAIAAAPQAAAQAGAIQAHAIAKAAQAKAAAHgIQAHgIAAgQQAAgPgHgIQgHgHgKgBQgKAAgHAIg");
	this.shape_8.setTransform(72.9,14.4);

	this.shape_9 = new cjs.Shape();
	this.shape_9.graphics.f("#000000").s().p("AgWAuIAAAKIgNAAIAAhxIAOAAIAAApQAJgMANAAQAHAAAIAEQAGADAFAFQAEAGADAIQACAHAAAJQAAAVgKALQgLAMgPAAQgOAAgIgMgAgQgIQgGAIAAAOQAAAPAEAHQAHALALAAQAIAAAHgIQAGgIAAgQQAAgQgGgHQgHgIgIAAQgIAAgIAIg");
	this.shape_9.setTransform(64.2,12.9);

	this.shape_10 = new cjs.Shape();
	this.shape_10.graphics.f("#000000").s().p("AAqArIAAg0QAAgIgBgEQgBgEgEgCQgEgCgFAAQgIAAgGAFQgGAHAAAMIAAAwIgNAAIAAg1QAAgKgDgFQgEgEgIAAQgGAAgFADQgFADgCAGQgCAGAAALIAAArIgOAAIAAhTIAMAAIAAAMQAEgGAHgDQAGgFAJAAQAJAAAGAFQAFAEACAGQAKgPAQAAQAMAAAHAIQAGAGAAAOIAAA5g");
	this.shape_10.setTransform(52.9,14.3);

	this.shape_11 = new cjs.Shape();
	this.shape_11.graphics.f("#000000").s().p("AgGA5IAAhSIANAAIAABSgAgGgoIAAgQIANAAIAAAQg");
	this.shape_11.setTransform(44.4,12.8);

	this.shape_12 = new cjs.Shape();
	this.shape_12.graphics.f("#000000").s().p("AgWA3QgKgFgGgJQgGgJgBgMIAPgBQABAJAEAFQADAGAIADQAIAEAJAAQAIAAAHgDQAHgDADgEQADgFAAgFQAAgFgDgEQgDgEgHgDIgUgGQgQgDgGgDQgIgEgEgGQgEgHAAgIQAAgIAFgIQAFgHAJgEQAKgEALAAQAMAAAKAEQAJAEAGAIQAFAIAAAKIgOABQgCgLgGgFQgHgGgNAAQgNAAgGAFQgHAFAAAHQAAAGAFAEQAEAEASAFQASAEAHADQAKAEAFAHQAFAHAAAJQAAAJgGAIQgFAIgKAFQgJAEgNAAQgOAAgLgEg");
	this.shape_12.setTransform(37.3,12.8);

	this.timeline.addTween(cjs.Tween.get({}).to({state:[{t:this.shape_12},{t:this.shape_11},{t:this.shape_10},{t:this.shape_9},{t:this.shape_8},{t:this.shape_7},{t:this.shape_6},{t:this.shape_5},{t:this.shape_4},{t:this.shape_3},{t:this.shape_2},{t:this.shape_1},{t:this.shape}]}).wait(19));

	// Capa_2
	this.shape_13 = new cjs.Shape();
	this.shape_13.graphics.f().s("#FFFFFF").ss(1,1,1).p("Ag7gnIB3AAQAUAAAAAUIAAAnQAAAUgUAAIh3AAQgUAAAAgUIAAgnQAAgUAUAAg");
	this.shape_13.setTransform(16,118);

	this.shape_14 = new cjs.Shape();
	this.shape_14.graphics.f().s("#6C829A").ss(1,1,1).p("Ag7gnIB3AAQAUAAAAAUIAAAnQAAAUgUAAIh3AAQgUAAAAgUIAAgnQAAgUAUAAg");
	this.shape_14.setTransform(16,95);

	this.shape_15 = new cjs.Shape();
	this.shape_15.graphics.f("#6C829A").s().p("Ag7AoQgUAAAAgUIAAgnQAAgUAUAAIB3AAQAUAAAAAUIAAAnQAAAUgUAAg");
	this.shape_15.setTransform(16,95);

	this.shape_16 = new cjs.Shape();
	this.shape_16.graphics.f().s("#394C64").ss(1,1,1).p("Ag7gnIB3AAQAUAAAAAUIAAAnQAAAUgUAAIh3AAQgUAAAAgUIAAgnQAAgUAUAAg");
	this.shape_16.setTransform(16,71);

	this.shape_17 = new cjs.Shape();
	this.shape_17.graphics.f("#394C64").s().p("Ag7AoQgUAAAAgUIAAgnQAAgUAUAAIB3AAQAUAAAAAUIAAAnQAAAUgUAAg");
	this.shape_17.setTransform(16,71);

	this.shape_18 = new cjs.Shape();
	this.shape_18.graphics.f().s("#FFFF00").ss(1,1,1).p("Ag7gnIB3AAQAUAAAAAUIAAAnQAAAUgUAAIh3AAQgUAAAAgUIAAgnQAAgUAUAAg");
	this.shape_18.setTransform(16,49);

	this.shape_19 = new cjs.Shape();
	this.shape_19.graphics.f("#FFFF00").s().p("Ag7AoQgUAAAAgUIAAgnQAAgUAUAAIB3AAQAUAAAAAUIAAAnQAAAUgUAAg");
	this.shape_19.setTransform(16,49);

	this.timeline.addTween(cjs.Tween.get({}).to({state:[]}).to({state:[{t:this.shape_19},{t:this.shape_18},{t:this.shape_17},{t:this.shape_16},{t:this.shape_15},{t:this.shape_14},{t:this.shape_13}]},9).wait(10));

	// Capa_3
	this.shape_20 = new cjs.Shape();
	this.shape_20.graphics.f("#000000").s().p("AgTAgQgIgGgCgLIAMgCQABAHAFAEQAEAEAIAAQAIAAAFgEQAEgDgBgFQAAgEgDgCIgNgFQgNgDgFgCQgFgCgDgEQgCgFAAgFQAAgFACgEQADgEADgDQADgCAFgBQAFgCAGAAQAHAAAHACQAGADADAEQADAEABAHIgLACQgBgGgFgDQgDgDgHAAQgIAAgDADQgEADAAADQAAABAAAAQAAABAAABQABAAAAABQAAAAAAABIAFADIAKADIASAGQAFABADAEQADAFAAAGQAAAGgEAGQgDAFgHADQgHADgIAAQgOAAgGgGg");
	this.shape_20.setTransform(219.2,119.8);

	this.shape_21 = new cjs.Shape();
	this.shape_21.graphics.f("#000000").s().p("AgXAcQgKgKAAgRQAAgSAKgKQAJgKAPAAQAOAAAKAKQAIAKABARIAAADIg1AAQAAAMAGAGQAGAHAIAAQAHAAAFgEQAEgDADgIIANABQgDAMgIAGQgIAGgNAAQgPAAgJgKgAgNgVQgFAFgBAKIAnAAQgBgJgDgFQgGgHgJAAQgIAAgGAGg");
	this.shape_21.setTransform(211.8,119.8);

	this.shape_22 = new cjs.Shape();
	this.shape_22.graphics.f("#000000").s().p("AgFAyIAAhjIALAAIAABjg");
	this.shape_22.setTransform(206.4,118.5);

	this.shape_23 = new cjs.Shape();
	this.shape_23.graphics.f("#000000").s().p("AgaAgQgGgGAAgJQAAgFACgFQADgEADgDIAJgDIALgCQAOgBAHgDIAAgDQAAgIgEgDQgEgEgJAAQgIAAgEADQgFADgBAIIgNgCQACgHAEgFQAEgFAHgCQAHgDAJAAQAJAAAGACQAGACACAEQADADABAFIAAALIAAAQQAAARABAFQABAEACAEIgNAAQgCgEAAgFQgHAGgGACQgGADgGAAQgMAAgHgGgAgCAEIgLADQgDABgBADQgCADgBADQABAFAEADQADADAHAAQAHAAAFgDQAFgDADgFQACgFAAgIIAAgEQgGADgNABg");
	this.shape_23.setTransform(200.9,119.8);

	this.shape_24 = new cjs.Shape();
	this.shape_24.graphics.f("#000000").s().p("AgFAyIAAhIIALAAIAABIgAgFgjIAAgOIALAAIAAAOg");
	this.shape_24.setTransform(195.5,118.5);

	this.shape_25 = new cjs.Shape();
	this.shape_25.graphics.f("#000000").s().p("AgWAcQgIgKgBgSQAAgLAFgIQAEgJAHgFQAIgEAJAAQALAAAIAGQAHAGACALIgLACQgCgHgFgEQgEgEgGAAQgJAAgFAHQgGAGAAAOQAAAPAFAGQAGAHAJAAQAHAAAEgFQAGgEAAgJIAMABQgBANgJAHQgHAHgMAAQgOAAgKgKg");
	this.shape_25.setTransform(190.7,119.8);

	this.shape_26 = new cjs.Shape();
	this.shape_26.graphics.f("#000000").s().p("AgXAcQgKgKAAgRQAAgSAKgKQAJgKAPAAQAOAAAKAKQAIAKABARIAAADIg1AAQAAAMAGAGQAGAHAIAAQAHAAAFgEQAEgDADgIIANABQgDAMgIAGQgIAGgNAAQgPAAgJgKgAgNgVQgFAFgBAKIAnAAQgBgJgDgFQgGgHgJAAQgIAAgGAGg");
	this.shape_26.setTransform(183,119.8);

	this.shape_27 = new cjs.Shape();
	this.shape_27.graphics.f("#000000").s().p("AgfAzIAAhkIAMAAIAAAKQAEgGAFgDQAFgCAGAAQAJAAAHAEQAHAGAEAIQAEAJAAAKQAAALgEAIQgEAJgIAFQgIAFgIgBQgFAAgFgCQgFgDgDgEIAAAkgAgNghQgGAHAAAOQAAANAFAHQAGAGAIAAQAHABAGgIQAGgGAAgOQAAgOgGgGQgFgIgIAAQgHABgGAHg");
	this.shape_27.setTransform(175.4,121.2);

	this.shape_28 = new cjs.Shape();
	this.shape_28.graphics.f("#000000").s().p("AgTAgQgIgGgCgLIAMgCQABAHAFAEQAEAEAIAAQAIAAAEgEQAFgDAAgFQgBgEgDgCIgNgFQgNgDgEgCQgFgCgEgEQgCgFAAgFQAAgFACgEQADgEADgDQADgCAFgBQAFgCAGAAQAHAAAGACQAHADADAEQADAEACAHIgMACQgCgGgEgDQgEgDgGAAQgIAAgDADQgEADAAADQAAABAAAAQAAABAAABQABAAAAABQAAAAAAABIAFADIAKADIASAGQAFABADAEQADAFAAAGQAAAGgDAGQgEAFgHADQgHADgIAAQgOAAgGgGg");
	this.shape_28.setTransform(167.8,119.8);

	this.shape_29 = new cjs.Shape();
	this.shape_29.graphics.f("#000000").s().p("AglAyIAAhjIBIAAIAAALIg6AAIAAAgIA2AAIAAAKIg2AAIAAAiIA9AAIAAAMg");
	this.shape_29.setTransform(159.9,118.5);

	this.shape_30 = new cjs.Shape();
	this.shape_30.graphics.f("#000000").s().p("AgTAgQgIgGgCgLIAMgCQABAHAFAEQAEAEAIAAQAIAAAEgEQAFgDAAgFQgBgEgDgCIgNgFQgNgDgEgCQgFgCgEgEQgCgFAAgFQAAgFACgEQADgEADgDQADgCAFgBQAFgCAGAAQAHAAAGACQAHADADAEQADAEACAHIgMACQgCgGgEgDQgEgDgGAAQgIAAgDADQgEADAAADQAAABAAAAQAAABAAABQABAAAAABQAAAAAAABIAFADIAKADIASAGQAFABADAEQADAFAAAGQAAAGgDAGQgEAFgHADQgHADgIAAQgOAAgGgGg");
	this.shape_30.setTransform(147.6,119.8);

	this.shape_31 = new cjs.Shape();
	this.shape_31.graphics.f("#000000").s().p("AgaAgQgGgGAAgJQAAgFACgFQADgEADgDIAJgDIALgCQAOgBAHgDIAAgDQAAgIgEgDQgEgEgJAAQgIAAgEADQgFADgBAIIgNgCQACgHAEgFQAEgFAHgCQAHgDAJAAQAJAAAGACQAGACACAEQADADABAFIAAALIAAAQQAAARABAFQABAEACAEIgNAAQgCgEAAgFQgHAGgGACQgGADgGAAQgMAAgHgGgAgCAEIgLADQgDABgBADQgCADgBADQABAFAEADQADADAHAAQAHAAAFgDQAFgDADgFQACgFAAgIIAAgEQgGADgNABg");
	this.shape_31.setTransform(140.2,119.8);

	this.shape_32 = new cjs.Shape();
	this.shape_32.graphics.f("#000000").s().p("AgVAcQgKgKABgSQAAgLADgIQAFgJAIgFQAHgEAIAAQANAAAHAGQAIAGACALIgNACQgBgHgEgEQgFgEgGAAQgIAAgGAHQgGAGAAAOQAAAPAGAGQAGAHAHAAQAHAAAGgFQAEgEABgJIANABQgDANgHAHQgJAHgMAAQgOAAgIgKg");
	this.shape_32.setTransform(133,119.8);

	this.shape_33 = new cjs.Shape();
	this.shape_33.graphics.f("#000000").s().p("AgFAyIAAhIIALAAIAABIgAgFgjIAAgOIALAAIAAAOg");
	this.shape_33.setTransform(127.8,118.5);

	this.shape_34 = new cjs.Shape();
	this.shape_34.graphics.f("#000000").s().p("AAlAlIAAgtQAAgHgBgDQgBgEgDgCQgEgCgEAAQgHAAgGAGQgFAEAAAMIAAApIgLAAIAAguQAAgIgDgEQgDgFgHAAQgFABgEACQgFADgCAFQgCAFAAAKIAAAlIgMAAIAAhIIALAAIAAAKQADgEAGgEQAGgDAHAAQAIAAAFADQAEAEADAFQAIgMAOAAQALAAAGAGQAFAGAAAMIAAAxg");
	this.shape_34.setTransform(120.4,119.8);

	this.shape_35 = new cjs.Shape();
	this.shape_35.graphics.f("#000000").s().p("AgXAqQgKgKAAgTQAAgTAMgJQAJgIAMAAQAPAAAJAJQAKAKAAAQQAAAOgEAJQgEAIgIAEQgIAEgKAAQgOAAgJgJgAgOgGQgGAGAAANQAAAOAGAHQAGAHAIAAQAKAAAFgHQAHgHAAgOQAAgNgHgGQgFgHgKAAQgIAAgGAHgAgFgfIAIgTIAPAAIgOATg");
	this.shape_35.setTransform(110.6,118.5);

	this.shape_36 = new cjs.Shape();
	this.shape_36.graphics.f("#000000").s().p("AASAlIAAgrQAAgIgCgDQgBgEgEgDQgEgCgFAAQgHAAgFAGQgGAFAAAOIAAAmIgNAAIAAhIIAMAAIAAAKQAIgLAOAAQAGAAAGACQAGADACAEQADADABAGIABALIAAAsg");
	this.shape_36.setTransform(102.8,119.8);

	this.shape_37 = new cjs.Shape();
	this.shape_37.graphics.f("#000000").s().p("AgYAcQgJgKAAgSQAAgTAMgKQAIgIANAAQAPAAAKAKQAJAKAAARQAAANgEAIQgEAIgIAEQgJAFgJAAQgOAAgKgKgAgOgUQgGAHAAANQAAAOAGAHQAGAHAIAAQAJAAAHgHQAFgHAAgOQAAgNgFgHQgHgHgJAAQgIAAgGAHg");
	this.shape_37.setTransform(95,119.8);

	this.shape_38 = new cjs.Shape();
	this.shape_38.graphics.f("#000000").s().p("AgWAcQgJgKAAgSQAAgLAFgIQADgJAJgFQAHgEAJAAQAMAAAHAGQAIAGACALIgMACQgCgHgFgEQgEgEgGAAQgIAAgGAHQgGAGAAAOQAAAPAFAGQAHAHAIAAQAGAAAFgFQAFgEACgJIALABQgBANgIAHQgJAHgLAAQgOAAgKgKg");
	this.shape_38.setTransform(87.9,119.8);

	this.shape_39 = new cjs.Shape();
	this.shape_39.graphics.f("#000000").s().p("AglAyIAAhjIBIAAIAAALIg6AAIAAAgIA2AAIAAAKIg2AAIAAAiIA9AAIAAAMg");
	this.shape_39.setTransform(79.7,118.5);

	this.shape_40 = new cjs.Shape();
	this.shape_40.graphics.f("#000000").s().p("AgTAgQgIgGgCgLIAMgCQABAHAEAEQAGAEAHAAQAJAAADgEQAFgDAAgFQgBgEgDgCIgMgFQgOgDgEgCQgFgCgEgEQgCgFAAgFQAAgFACgEQADgEADgDQADgCAFgBQAFgCAGAAQAHAAAGACQAHADADAEQADAEACAHIgMACQgCgGgDgDQgFgDgGAAQgIAAgEADQgDADAAADQAAABAAAAQAAABAAABQABAAAAABQAAAAAAABIAFADIAKADIASAGQAFABADAEQADAFAAAGQAAAGgDAGQgEAFgHADQgGADgJAAQgOAAgGgGg");
	this.shape_40.setTransform(67.4,119.8);

	this.shape_41 = new cjs.Shape();
	this.shape_41.graphics.f("#000000").s().p("AgaAgQgGgGAAgJQgBgFADgFQADgEAEgDIAIgDIALgCQAOgBAHgDIAAgDQAAgIgEgDQgEgEgJAAQgIAAgEADQgEADgDAIIgMgCQACgHAEgFQAEgFAHgCQAHgDAJAAQAIAAAGACQAHACACAEQADADABAFIABALIAAAQQAAARAAAFQABAEACAEIgMAAQgCgEgBgFQgGAGgHACQgGADgGAAQgMAAgHgGgAgCAEIgLADQgDABgBADQgDADAAADQAAAFAFADQADADAHAAQAGAAAGgDQAFgDADgFQACgFAAgIIAAgEQgGADgNABg");
	this.shape_41.setTransform(60,119.8);

	this.shape_42 = new cjs.Shape();
	this.shape_42.graphics.f("#000000").s().p("AASAlIAAgrQgBgIgBgDQgCgEgDgDQgEgCgFAAQgGAAgGAGQgGAFAAAOIAAAmIgMAAIAAhIIALAAIAAAKQAIgLAOAAQAGAAAGACQAGADACAEQADADABAGIAAALIAAAsg");
	this.shape_42.setTransform(52.2,119.8);

	this.shape_43 = new cjs.Shape();
	this.shape_43.graphics.f("#000000").s().p("AgXAcQgKgKAAgSQAAgTAMgKQAIgIANAAQAPAAAJAKQAKAKAAARQAAANgEAIQgEAIgIAEQgJAFgJAAQgOAAgJgKgAgOgUQgGAHAAANQAAAOAGAHQAGAHAIAAQAJAAAGgHQAGgHABgOQgBgNgGgHQgGgHgJAAQgIAAgGAHg");
	this.shape_43.setTransform(44.4,119.8);

	this.shape_44 = new cjs.Shape();
	this.shape_44.graphics.f("#000000").s().p("AgmAyIAAgMIAyg/IAKgNIg3AAIAAgLIBHAAIAAALIg4BFIgFAHIA/AAIAAAMg");
	this.shape_44.setTransform(36.3,118.5);

	this.shape_45 = new cjs.Shape();
	this.shape_45.graphics.f("#000000").s().p("AgTAgQgIgGgCgLIAMgCQABAHAEAEQAGAEAHAAQAJAAADgEQAFgDAAgFQgBgEgDgCIgMgFQgOgDgEgCQgFgCgDgEQgDgFAAgFQAAgFACgEQADgEADgDQADgCAFgBQAFgCAGAAQAHAAAGACQAHADADAEQADAEACAHIgMACQgCgGgEgDQgEgDgGAAQgIAAgEADQgDADAAADQAAABAAAAQAAABAAABQABAAAAABQAAAAAAABIAFADIAKADIASAGQAFABADAEQADAFAAAGQAAAGgDAGQgEAFgHADQgGADgJAAQgOAAgGgGg");
	this.shape_45.setTransform(168.6,96.2);

	this.shape_46 = new cjs.Shape();
	this.shape_46.graphics.f("#000000").s().p("AgXAcQgJgKAAgRQAAgSAJgKQAKgKAOAAQAOAAAJAKQAJAKAAARIAAADIg1AAQABAMAGAGQAGAHAJAAQAGAAAFgEQAFgDADgIIAMABQgDAMgIAGQgIAGgNAAQgOAAgKgKgAgNgVQgFAFgBAKIAoAAQgCgJgDgFQgGgHgJAAQgIAAgGAGg");
	this.shape_46.setTransform(161.2,96.2);

	this.shape_47 = new cjs.Shape();
	this.shape_47.graphics.f("#000000").s().p("AgFAyIAAhjIALAAIAABjg");
	this.shape_47.setTransform(155.8,94.9);

	this.shape_48 = new cjs.Shape();
	this.shape_48.graphics.f("#000000").s().p("AgaAgQgGgGAAgJQgBgFADgFQACgEAFgDIAIgDIALgCQAOgBAHgDIAAgDQAAgIgEgDQgEgEgJAAQgIAAgEADQgFADgCAIIgMgCQADgHADgFQAEgFAHgCQAHgDAJAAQAIAAAGACQAHACACAEQADADABAFIABALIAAAQQAAARABAFQAAAEACAEIgMAAQgCgEgBgFQgGAGgHACQgGADgGAAQgNAAgGgGgAgCAEIgLADQgDABgCADQgCADAAADQAAAFAFADQADADAIAAQAFAAAGgDQAFgDADgFQACgFAAgIIAAgEQgHADgMABg");
	this.shape_48.setTransform(150.3,96.2);

	this.shape_49 = new cjs.Shape();
	this.shape_49.graphics.f("#000000").s().p("AASAlIAAgrQgBgIgBgDQgBgEgEgDQgEgBgFAAQgGAAgGAEQgGAGAAAOIAAAmIgMAAIAAhHIALAAIAAAJQAIgLAOAAQAGAAAGACQAGADACAEQADADABAGIAAAMIAAArg");
	this.shape_49.setTransform(142.5,96.2);

	this.shape_50 = new cjs.Shape();
	this.shape_50.graphics.f("#000000").s().p("AgYAcQgJgKAAgSQAAgTAMgKQAIgIANAAQAPAAAKAKQAJAKAAARQAAANgEAIQgEAIgIAEQgJAFgJAAQgOAAgKgKgAgOgUQgGAHAAANQAAAOAGAHQAGAHAIAAQAJAAAHgHQAFgHABgOQgBgNgFgHQgHgHgJAAQgIAAgGAHg");
	this.shape_50.setTransform(134.7,96.2);

	this.shape_51 = new cjs.Shape();
	this.shape_51.graphics.f("#000000").s().p("AgFAyIAAhHIALAAIAABHgAgFgjIAAgOIALAAIAAAOg");
	this.shape_51.setTransform(129.3,94.9);

	this.shape_52 = new cjs.Shape();
	this.shape_52.graphics.f("#000000").s().p("AgVAcQgKgKABgSQAAgLADgIQAFgJAIgFQAHgEAIAAQANAAAHAGQAIAGACALIgNACQgBgHgEgEQgFgEgGAAQgIAAgGAHQgGAGAAAOQAAAPAGAGQAGAHAHAAQAHAAAGgFQAEgEABgJIANABQgDANgHAHQgJAHgMAAQgOAAgIgKg");
	this.shape_52.setTransform(124.5,96.2);

	this.shape_53 = new cjs.Shape();
	this.shape_53.graphics.f("#000000").s().p("AgFAyIAAhHIALAAIAABHgAgFgjIAAgOIALAAIAAAOg");
	this.shape_53.setTransform(119.2,94.9);

	this.shape_54 = new cjs.Shape();
	this.shape_54.graphics.f("#000000").s().p("AgPAuQgHgFgEgIQgEgJAAgLQAAgLADgIQAEgJAHgEQAHgFAJAAQAGAAAFADQAFADADAEIAAgkIAMAAIAABjIgLAAIAAgJQgHALgNAAQgIAAgHgFgAgMgHQgGAHAAANQAAAOAGAHQAGAHAHAAQAIAAAGgHQAFgGAAgOQAAgOgFgHQgGgHgJAAQgHAAgFAHg");
	this.shape_54.setTransform(113.5,94.9);

	this.shape_55 = new cjs.Shape();
	this.shape_55.graphics.f("#000000").s().p("AgaAgQgHgGAAgJQAAgFADgFQACgEAEgDIAJgDIALgCQAOgBAHgDIAAgDQAAgIgDgDQgFgEgJAAQgIAAgEADQgEADgDAIIgLgCQACgHADgFQAEgFAHgCQAHgDAIAAQAKAAAFACQAGACADAEQADADABAFIAAALIAAAQQAAARACAFQAAAEADAEIgOAAQgBgEgBgFQgGAGgHACQgFADgIAAQgMAAgGgGgAgCAEIgLADQgDABgCADQgBADAAADQAAAFADADQAEADAIAAQAFAAAGgDQAGgDACgFQACgFAAgIIAAgEQgHADgMABg");
	this.shape_55.setTransform(105.9,96.2);

	this.shape_56 = new cjs.Shape();
	this.shape_56.graphics.f("#000000").s().p("AgUAgQgHgGgCgLIAMgCQABAHAEAEQAGAEAHAAQAJAAADgEQAEgDABgFQAAgEgEgCIgMgFQgNgDgFgCQgGgCgCgEQgDgFAAgFQAAgFACgEQACgEAEgDQADgCAFgBQAFgCAFAAQAIAAAGACQAHADADAEQADAEACAHIgNACQgBgGgDgDQgFgDgGAAQgIAAgEADQgDADAAADQAAABAAAAQAAABAAABQABAAAAABQAAAAABABIAEADIAKADIASAGQAFABADAEQADAFAAAGQAAAGgDAGQgEAFgHADQgHADgIAAQgNAAgIgGg");
	this.shape_56.setTransform(94.6,96.2);

	this.shape_57 = new cjs.Shape();
	this.shape_57.graphics.f("#000000").s().p("AgXAcQgKgKAAgSQAAgTAMgKQAJgIAMAAQAPAAAJAKQAKAKAAARQAAANgEAIQgEAIgIAEQgIAFgKAAQgOAAgJgKgAgOgUQgGAHAAANQAAAOAGAHQAGAHAIAAQAKAAAFgHQAHgHAAgOQAAgNgHgHQgFgHgKAAQgIAAgGAHg");
	this.shape_57.setTransform(87.2,96.2);

	this.shape_58 = new cjs.Shape();
	this.shape_58.graphics.f("#000000").s().p("AgFAyIAAhHIALAAIAABHgAgFgjIAAgOIALAAIAAAOg");
	this.shape_58.setTransform(81.8,94.9);

	this.shape_59 = new cjs.Shape();
	this.shape_59.graphics.f("#000000").s().p("AgfAzIAAhjIAMAAIAAAJQAEgGAFgDQAFgCAGAAQAJAAAHAEQAHAGAEAIQAEAJAAAKQAAALgEAIQgEAJgIAFQgIAEgIAAQgFABgFgDQgFgDgDgEIAAAkgAgNghQgGAHAAAOQAAANAFAHQAGAGAIAAQAHABAGgIQAGgGAAgOQAAgOgGgGQgFgIgIABQgHAAgGAHg");
	this.shape_59.setTransform(76.5,97.6);

	this.shape_60 = new cjs.Shape();
	this.shape_60.graphics.f("#000000").s().p("AgFAyIAAhHIALAAIAABHgAgFgjIAAgOIALAAIAAAOg");
	this.shape_60.setTransform(70.9,94.9);

	this.shape_61 = new cjs.Shape();
	this.shape_61.graphics.f("#000000").s().p("AgVAcQgKgKABgSQAAgLADgIQAFgJAIgFQAHgEAJAAQALAAAIAGQAIAGACALIgNACQgBgHgEgEQgFgEgGAAQgJAAgFAHQgGAGAAAOQAAAPAGAGQAFAHAJAAQAHAAAFgFQAEgEACgJIAMABQgDANgHAHQgJAHgLAAQgPAAgIgKg");
	this.shape_61.setTransform(66.1,96.2);

	this.shape_62 = new cjs.Shape();
	this.shape_62.graphics.f("#000000").s().p("AgFAyIAAhHIALAAIAABHgAgFgjIAAgOIALAAIAAAOg");
	this.shape_62.setTransform(60.8,94.9);

	this.shape_63 = new cjs.Shape();
	this.shape_63.graphics.f("#000000").s().p("AASAlIAAgrQgBgIgBgDQgCgEgDgDQgEgBgFAAQgGAAgGAEQgGAGAAAOIAAAmIgMAAIAAhHIALAAIAAAJQAIgLAOAAQAGAAAGACQAGADACAEQADADABAGIAAAMIAAArg");
	this.shape_63.setTransform(55.3,96.2);

	this.shape_64 = new cjs.Shape();
	this.shape_64.graphics.f("#000000").s().p("AgQAiQgGgCgCgDQgCgEgCgFIgBgMIAAgsIANAAIAAAnIAAANQACAFADADQAEACAFAAQAFAAAFgDQAFgCACgFQACgFAAgJIAAgmIANAAIAABHIgMAAIAAgKQgIAMgNAAQgHAAgGgDg");
	this.shape_64.setTransform(47.5,96.3);

	this.shape_65 = new cjs.Shape();
	this.shape_65.graphics.f("#000000").s().p("AAjAyIAAhTIgdBTIgLAAIgdhVIAABVIgNAAIAAhjIAUAAIAYBGIAEAOIAFgPIAYhFIASAAIAABjg");
	this.shape_65.setTransform(37.8,94.9);

	this.shape_66 = new cjs.Shape();
	this.shape_66.graphics.f("#000000").s().p("AgUAgQgHgGgCgLIAMgCQABAHAFAEQAEAEAIAAQAIAAAFgEQADgDAAgFQABgEgEgCIgNgFQgMgDgGgCQgEgCgEgEQgCgFAAgFQAAgFACgEQACgEAEgDQADgCAFgBQAFgCAFAAQAIAAAHACQAGADADAEQADAEABAHIgMACQAAgGgFgDQgDgDgHAAQgIAAgDADQgEADAAADQAAABAAAAQAAABAAABQABAAAAABQAAAAABABIAEADIAKADIASAGQAFABADAEQADAFAAAGQAAAGgEAGQgDAFgHADQgGADgJAAQgNAAgIgGg");
	this.shape_66.setTransform(163.2,72.6);

	this.shape_67 = new cjs.Shape();
	this.shape_67.graphics.f("#000000").s().p("AgaAgQgHgGAAgJQAAgFADgFQACgEAEgDIAJgDIALgCQAOgBAHgDIAAgDQAAgIgDgDQgFgEgJAAQgIAAgEADQgEADgCAIIgMgCQABgHAEgFQAEgFAHgCQAHgDAIAAQAJAAAHACQAFACADAEQADADABAFIAAALIAAAQQAAARABAFQABAEADAEIgOAAQgBgEgBgFQgGAGgHACQgFADgIAAQgMAAgGgGgAgCAEIgLADQgDABgCADQgBADAAADQAAAFADADQAEADAHAAQAHAAAFgDQAGgDACgFQACgFAAgIIAAgEQgGADgNABg");
	this.shape_67.setTransform(155.8,72.6);

	this.shape_68 = new cjs.Shape();
	this.shape_68.graphics.f("#000000").s().p("AARAlIAAgrQAAgHgBgEQgCgEgDgCQgEgCgEAAQgIAAgFAEQgGAGAAANIAAAnIgNAAIAAhHIAMAAIAAAKQAIgMAOAAQAGAAAGACQAFACADAEQADAEABAFIABANIAAArg");
	this.shape_68.setTransform(148,72.6);

	this.shape_69 = new cjs.Shape();
	this.shape_69.graphics.f("#000000").s().p("AgaAgQgGgGAAgJQAAgFACgFQADgEADgDIAJgDIALgCQAOgBAHgDIAAgDQAAgIgEgDQgEgEgJAAQgIAAgEADQgFADgBAIIgNgCQACgHAEgFQAEgFAHgCQAHgDAJAAQAJAAAGACQAGACACAEQADADABAFIAAALIAAAQQAAARABAFQABAEACAEIgNAAQgCgEAAgFQgHAGgGACQgGADgGAAQgMAAgHgGgAgCAEIgLADQgDABgBADQgCADgBADQABAFAEADQADADAHAAQAHAAAFgDQAFgDADgFQACgFAAgIIAAgEQgGADgNABg");
	this.shape_69.setTransform(140.2,72.6);

	this.shape_70 = new cjs.Shape();
	this.shape_70.graphics.f("#000000").s().p("AgBAvQgEgCgBgDQgCgDAAgMIAAgpIgJAAIAAgJIAJAAIAAgSIALgIIAAAaIANAAIAAAJIgNAAIAAAqQAAAFABACIACACIAEABIAGAAIACAKIgKABQgGAAgDgCg");
	this.shape_70.setTransform(134.4,71.4);

	this.shape_71 = new cjs.Shape();
	this.shape_71.graphics.f("#000000").s().p("AgFAyIAAhHIALAAIAABHgAgFgjIAAgOIALAAIAAAOg");
	this.shape_71.setTransform(130.9,71.3);

	this.shape_72 = new cjs.Shape();
	this.shape_72.graphics.f("#000000").s().p("AgFAyIAAhjIALAAIAABjg");
	this.shape_72.setTransform(127.7,71.3);

	this.shape_73 = new cjs.Shape();
	this.shape_73.graphics.f("#000000").s().p("AgYAcQgJgKAAgSQAAgTALgKQAJgIANAAQAPAAAKAKQAJAKAAARQAAANgEAIQgEAIgIAEQgIAFgKAAQgOAAgKgKgAgOgUQgGAHAAANQAAAOAGAHQAGAHAIAAQAJAAAHgHQAFgHAAgOQAAgNgFgHQgHgHgJAAQgIAAgGAHg");
	this.shape_73.setTransform(122.3,72.6);

	this.shape_74 = new cjs.Shape();
	this.shape_74.graphics.f("#000000").s().p("AgfAzIAAhjIAMAAIAAAJQAEgFAFgDQAFgDAGAAQAJAAAHAEQAHAFAEAJQAEAJAAAKQAAALgEAJQgEAIgIAFQgIAEgIABQgFgBgFgCQgFgDgDgDIAAAjgAgNghQgGAHAAAOQAAANAFAHQAGAGAIABQAHAAAGgIQAGgHAAgNQAAgOgGgHQgFgGgIAAQgHgBgGAIg");
	this.shape_74.setTransform(114.7,74);

	this.shape_75 = new cjs.Shape();
	this.shape_75.graphics.f("#000000").s().p("AgXAcQgKgKAAgSQAAgTAMgKQAJgIAMAAQAPAAAJAKQAKAKAAARQAAANgEAIQgEAIgIAEQgJAFgJAAQgOAAgJgKgAgOgUQgGAHAAANQAAAOAGAHQAGAHAIAAQAKAAAFgHQAHgHAAgOQAAgNgHgHQgFgHgKAAQgIAAgGAHg");
	this.shape_75.setTransform(106.7,72.6);

	this.shape_76 = new cjs.Shape();
	this.shape_76.graphics.f("#000000").s().p("AgTAlIAAhHIALAAIAAALQAFgJADgCQADgCAEAAQAGAAAHAEIgEALQgFgDgEABQgFgBgCADQgDADgBAEQgCAGAAAIIAAAlg");
	this.shape_76.setTransform(101,72.6);

	this.shape_77 = new cjs.Shape();
	this.shape_77.graphics.f("#000000").s().p("AgBAvQgEgCgBgDQgCgDAAgMIAAgpIgJAAIAAgJIAJAAIAAgSIALgIIAAAaIANAAIAAAJIgNAAIAAAqQAAAFABACIACACIAEABIAGAAIACAKIgKABQgGAAgDgCg");
	this.shape_77.setTransform(96.3,71.4);

	this.shape_78 = new cjs.Shape();
	this.shape_78.graphics.f("#000000").s().p("AgXAcQgKgKAAgRQAAgSAKgKQAJgKAPAAQAOAAAKAKQAIAKABARIAAADIg1AAQAAAMAGAGQAGAHAIAAQAHAAAFgEQAEgDADgIIANABQgDAMgIAGQgIAGgNAAQgPAAgJgKgAgNgVQgFAFgBAKIAnAAQgBgJgDgFQgGgHgJAAQgIAAgGAGg");
	this.shape_78.setTransform(90.3,72.6);

	this.shape_79 = new cjs.Shape();
	this.shape_79.graphics.f("#000000").s().p("AAjAyIAAhTIgdBTIgLAAIgdhVIAABVIgNAAIAAhjIAUAAIAYBFIAEAPIAFgQIAYhEIASAAIAABjg");
	this.shape_79.setTransform(80.6,71.3);

	this.shape_80 = new cjs.Shape();
	this.shape_80.graphics.f("#000000").s().p("AgTAgQgIgGgCgLIAMgCQABAHAEAEQAGAEAHAAQAJAAADgEQAFgDAAgFQgBgEgDgCIgMgFQgOgDgEgCQgFgCgEgEQgCgFAAgFQAAgFACgEQADgEADgDQADgCAFgBQAFgCAGAAQAHAAAGACQAHADADAEQADAEACAHIgMACQgCgGgDgDQgFgDgGAAQgIAAgEADQgDADAAADQAAABAAAAQAAABAAABQABAAAAABQAAAAAAABIAFADIAKADIASAGQAFABADAEQADAFAAAGQAAAGgDAGQgEAFgHADQgGADgJAAQgOAAgGgGg");
	this.shape_80.setTransform(67.4,72.6);

	this.shape_81 = new cjs.Shape();
	this.shape_81.graphics.f("#000000").s().p("AgaAgQgGgGAAgJQgBgFADgFQADgEAEgDIAIgDIALgCQAOgBAHgDIAAgDQAAgIgEgDQgEgEgJAAQgIAAgEADQgEADgDAIIgMgCQACgHAEgFQAEgFAHgCQAHgDAJAAQAIAAAGACQAHACACAEQADADABAFIABALIAAAQQAAARAAAFQABAEACAEIgMAAQgCgEgBgFQgGAGgHACQgGADgGAAQgMAAgHgGgAgCAEIgLADQgDABgBADQgDADAAADQAAAFAFADQADADAHAAQAGAAAGgDQAFgDADgFQACgFAAgIIAAgEQgGADgNABg");
	this.shape_81.setTransform(60,72.6);

	this.shape_82 = new cjs.Shape();
	this.shape_82.graphics.f("#000000").s().p("AASAlIAAgrQgBgHgBgEQgCgEgDgCQgEgCgFAAQgGAAgGAEQgGAGAAANIAAAnIgMAAIAAhHIALAAIAAAKQAIgMAOAAQAGAAAGACQAGACACAEQADAEABAFIAAANIAAArg");
	this.shape_82.setTransform(52.2,72.6);

	this.shape_83 = new cjs.Shape();
	this.shape_83.graphics.f("#000000").s().p("AgXAcQgKgKAAgSQAAgTAMgKQAIgIANAAQAPAAAJAKQAKAKAAARQAAANgEAIQgEAIgIAEQgJAFgJAAQgOAAgJgKgAgOgUQgGAHAAANQAAAOAGAHQAGAHAIAAQAJAAAGgHQAGgHABgOQgBgNgGgHQgGgHgJAAQgIAAgGAHg");
	this.shape_83.setTransform(44.4,72.6);

	this.shape_84 = new cjs.Shape();
	this.shape_84.graphics.f("#000000").s().p("AgmAyIAAgNIAyg/IAKgLIg3AAIAAgMIBHAAIAAAMIg4BEIgFAHIA/AAIAAAMg");
	this.shape_84.setTransform(36.3,71.3);

	this.shape_85 = new cjs.Shape();
	this.shape_85.graphics.f("#000000").s().p("AgTAgQgIgGgCgLIAMgCQABAHAFAEQAEAEAIAAQAIAAAEgEQAFgDAAgFQgBgEgDgCIgNgFQgNgDgEgCQgFgCgEgEQgCgFAAgFQAAgFACgEQADgEADgDQADgCAFgBQAFgCAGAAQAHAAAGACQAHADADAEQADAEACAHIgMACQgCgGgEgDQgEgDgGAAQgIAAgDADQgEADAAADQAAABAAAAQAAABAAABQABAAAAABQAAAAAAABIAFADIAKADIASAGQAFABADAEQADAFAAAGQAAAGgDAGQgEAFgHADQgGADgJAAQgOAAgGgGg");
	this.shape_85.setTransform(121.9,49);

	this.shape_86 = new cjs.Shape();
	this.shape_86.graphics.f("#000000").s().p("AgaAgQgGgGAAgJQAAgFACgFQADgEADgDIAJgDIALgCQAOgBAHgDIAAgDQAAgIgEgDQgEgEgJAAQgIAAgEADQgFADgBAIIgNgCQACgHAEgFQAEgFAHgCQAHgDAJAAQAJAAAGACQAGACACAEQADADABAFIAAALIAAAQQAAARABAFQABAEACAEIgNAAQgCgEAAgFQgHAGgGACQgGADgGAAQgMAAgHgGgAgCAEIgLADQgDABgBADQgCADgBADQABAFAEADQADADAHAAQAHAAAFgDQAFgDADgFQACgFAAgIIAAgEQgGADgNABg");
	this.shape_86.setTransform(114.5,49);

	this.shape_87 = new cjs.Shape();
	this.shape_87.graphics.f("#000000").s().p("AARAlIAAgrQAAgHgBgFQgCgDgDgCQgEgCgFgBQgGABgGAEQgGAFAAAOIAAAnIgMAAIAAhIIALAAIAAALQAIgMAOAAQAHAAAFACQAGACACAEQADAEABAFIAAANIAAArg");
	this.shape_87.setTransform(106.7,49);

	this.shape_88 = new cjs.Shape();
	this.shape_88.graphics.f("#000000").s().p("AgaAgQgHgGABgJQAAgFACgFQADgEAEgDIAIgDIALgCQAOgBAHgDIAAgDQAAgIgDgDQgFgEgJAAQgIAAgEADQgFADgCAIIgLgCQACgHADgFQAEgFAHgCQAHgDAJAAQAIAAAGACQAGACADAEQADADABAFIABALIAAAQQAAARABAFQAAAEACAEIgMAAQgCgEgBgFQgHAGgGACQgFADgIAAQgLAAgHgGgAgCAEIgLADQgDABgCADQgCADAAADQAAAFAFADQADADAIAAQAFAAAGgDQAFgDADgFQACgFAAgIIAAgEQgHADgMABg");
	this.shape_88.setTransform(98.9,49);

	this.shape_89 = new cjs.Shape();
	this.shape_89.graphics.f("#000000").s().p("AgTAoIAAAJIgMAAIAAhjIANAAIAAAkQAIgKALAAQAGAAAGADQAGACAFAFQADAFACAHQACAGAAAIQAAATgJAKQgJAKgNAAQgLAAgIgLgAgNgHQgGAHAAAMQAAANADAGQAHAKAJAAQAHAAAGgHQAGgHAAgOQAAgNgGgHQgFgHgIAAQgIAAgFAHg");
	this.shape_89.setTransform(91.3,47.7);

	this.shape_90 = new cjs.Shape();
	this.shape_90.graphics.f("#000000").s().p("AgTAlIAAhIIALAAIAAAMQAFgJADgCQADgCAEAAQAGAAAHAEIgEALQgFgCgEAAQgFAAgCACQgDADgBAEQgCAGAAAIIAAAlg");
	this.shape_90.setTransform(85.5,49);

	this.shape_91 = new cjs.Shape();
	this.shape_91.graphics.f("#000000").s().p("AgPAjQgHgDgCgEQgCgDgCgGIgBgLIAAgsIANAAIAAAnIABANQABAFADADQAEACAFABQAFAAAFgDQAFgDACgFQACgFAAgJIAAgmIANAAIAABHIgMAAIAAgKQgIAMgNAAQgHAAgFgCg");
	this.shape_91.setTransform(78.7,49.1);

	this.shape_92 = new cjs.Shape();
	this.shape_92.graphics.f("#000000").s().p("AgTAgQgIgGgCgLIAMgCQABAHAEAEQAGAEAHAAQAJAAADgEQAFgDAAgFQgBgEgDgCIgMgFQgOgDgEgCQgFgCgEgEQgCgFAAgFQAAgFACgEQADgEADgDQADgCAFgBQAFgCAGAAQAHAAAGACQAHADADAEQADAEACAHIgMACQgCgGgDgDQgFgDgGAAQgIAAgEADQgDADAAADQAAABAAAAQAAABAAABQABAAAAABQAAAAAAABIAFADIAKADIASAGQAFABADAEQADAFAAAGQAAAGgDAGQgEAFgHADQgGADgJAAQgOAAgGgGg");
	this.shape_92.setTransform(67.4,49);

	this.shape_93 = new cjs.Shape();
	this.shape_93.graphics.f("#000000").s().p("AgaAgQgGgGAAgJQgBgFADgFQADgEAEgDIAIgDIALgCQAOgBAHgDIAAgDQAAgIgEgDQgEgEgJAAQgIAAgEADQgEADgDAIIgMgCQACgHAEgFQAEgFAHgCQAHgDAJAAQAIAAAGACQAHACACAEQADADABAFIABALIAAAQQAAARAAAFQABAEACAEIgMAAQgCgEgBgFQgGAGgHACQgGADgGAAQgMAAgHgGgAgCAEIgLADQgDABgBADQgDADAAADQAAAFAFADQADADAHAAQAGAAAGgDQAFgDADgFQACgFAAgIIAAgEQgGADgNABg");
	this.shape_93.setTransform(60,49);

	this.shape_94 = new cjs.Shape();
	this.shape_94.graphics.f("#000000").s().p("AASAlIAAgrQgBgHgBgFQgCgDgDgCQgEgCgFgBQgGABgGAEQgGAFAAAOIAAAnIgMAAIAAhIIALAAIAAALQAIgMAOAAQAGAAAGACQAGACACAEQADAEABAFIAAANIAAArg");
	this.shape_94.setTransform(52.2,49);

	this.shape_95 = new cjs.Shape();
	this.shape_95.graphics.f("#000000").s().p("AgXAcQgKgKAAgSQAAgTAMgKQAIgIANAAQAPAAAJAKQAKAKAAARQAAANgEAIQgEAIgIAEQgJAFgJAAQgOAAgJgKgAgOgUQgGAHAAANQAAAOAGAHQAGAHAIAAQAJAAAGgHQAGgHABgOQgBgNgGgHQgGgHgJAAQgIAAgGAHg");
	this.shape_95.setTransform(44.4,49);

	this.shape_96 = new cjs.Shape();
	this.shape_96.graphics.f("#000000").s().p("AgmAyIAAgNIAyg+IAKgMIg3AAIAAgMIBHAAIAAAMIg4BEIgFAHIA/AAIAAAMg");
	this.shape_96.setTransform(36.3,47.7);

	this.timeline.addTween(cjs.Tween.get({}).to({state:[]}).to({state:[{t:this.shape_96},{t:this.shape_95},{t:this.shape_94},{t:this.shape_93},{t:this.shape_92},{t:this.shape_91},{t:this.shape_90},{t:this.shape_89},{t:this.shape_88},{t:this.shape_87},{t:this.shape_86},{t:this.shape_85},{t:this.shape_84},{t:this.shape_83},{t:this.shape_82},{t:this.shape_81},{t:this.shape_80},{t:this.shape_79},{t:this.shape_78},{t:this.shape_77},{t:this.shape_76},{t:this.shape_75},{t:this.shape_74},{t:this.shape_73},{t:this.shape_72},{t:this.shape_71},{t:this.shape_70},{t:this.shape_69},{t:this.shape_68},{t:this.shape_67},{t:this.shape_66},{t:this.shape_65},{t:this.shape_64},{t:this.shape_63},{t:this.shape_62},{t:this.shape_61},{t:this.shape_60},{t:this.shape_59},{t:this.shape_58},{t:this.shape_57},{t:this.shape_56},{t:this.shape_55},{t:this.shape_54},{t:this.shape_53},{t:this.shape_52},{t:this.shape_51},{t:this.shape_50},{t:this.shape_49},{t:this.shape_48},{t:this.shape_47},{t:this.shape_46},{t:this.shape_45},{t:this.shape_44},{t:this.shape_43},{t:this.shape_42},{t:this.shape_41},{t:this.shape_40},{t:this.shape_39},{t:this.shape_38},{t:this.shape_37},{t:this.shape_36},{t:this.shape_35},{t:this.shape_34},{t:this.shape_33},{t:this.shape_32},{t:this.shape_31},{t:this.shape_30},{t:this.shape_29},{t:this.shape_28},{t:this.shape_27},{t:this.shape_26},{t:this.shape_25},{t:this.shape_24},{t:this.shape_23},{t:this.shape_22},{t:this.shape_21},{t:this.shape_20}]},9).wait(10));

	// Capa_4
	this.shape_97 = new cjs.Shape();
	this.shape_97.graphics.f().s("#FFFFFF").ss(1,1,1).p("AxVoRMAirAAAQAoAAAAAoIAAPTQAAAogoAAMgirAAAQgoAAAAgoIAAvTQAAgoAoAAg");
	this.shape_97.setTransform(115,82);

	this.shape_98 = new cjs.Shape();
	this.shape_98.graphics.f("#66A4BB").s().p("AxVISQgoAAAAgoIAAvTQAAgoAoAAMAirAAAQAoAAAAAoIAAPTQAAAogoAAg");
	this.shape_98.setTransform(115,82);

	this.timeline.addTween(cjs.Tween.get({}).to({state:[]}).to({state:[{t:this.shape_98},{t:this.shape_97}]},9).wait(10));

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = new cjs.Rectangle(-1,-1,115.3,26);


(lib.mc_background = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// timeline functions:
	this.frame_0 = function() {
		this.stop();
	}

	// actions tween:
	this.timeline.addTween(cjs.Tween.get(this).call(this.frame_0).wait(2));

	// Capa_1
	this.shape = new cjs.Shape();
	this.shape.graphics.f("rgba(255,255,255,0)").s().p("EBGUAtUIAAjIIDIAAIAADIgEhJbgqLIAAjIIDIAAIAADIg");

	this.timeline.addTween(cjs.Tween.get(this.shape).wait(2));

	// Capa_2
	this.shape_1 = new cjs.Shape();
	this.shape_1.graphics.f().s("#65653D").ss(1,1,1).p("AJUybQgMgHgDgMQgDgQgFgGQAAACgEgHQgDgDAAgBQABgDAAgGQgOgBgDgEQgDgHgEgIIgTgZQgEgDgLgDQgMgEgEgEQgDgCgDgEQgCgEgDgCQgNgIgBgBQABgCgFgMQgGgIgDgFQgFgJACgJQABgGgIgHIAIgIQgRgGgBgCQgCgBABgQQgHgFgCgDQgEgEgCgDIgHgEQgHgGgEgTQgEgSgIgGIgBgCIgDgBIgEgJQgEgIgCgCQgEgDgEgDIgMgzQgNgIgDgCQgEgDgHgPQgGgOgHgDQgMgFgEgDIghgWQgHgDgEgHQgFgIgCgFIgFgHQgXgCgGgHQgFgGgTAAQAEgOAAgEQAAgIgIgFIgKARIACgZIgTAAQgCgMgBAAQgCAAgDgFQgDgEAAgDQAAgBACgFQgLADgBgBQgDgFgGgDQgFADgCABQgEACgHgBIgCgKQgFABgKAHQgGAEgOgBIgqgKQgGgCgFACQgIABgHAAQgJAAgGgDQgEgCgOAEQgOAEgJgDQgEgBgPgJQgEgDgOgEQgQgEgGgDQgMAGgDAGQgDAEgFAQQgUgEgEAAQgLgBAAACQgBAEgFACQgGACACgBQACgDgJACIgZAFQgBABgBgBIgpBJQgBAEgCADQgBABgBAIQgCAQgBABQgFADgHAEQgCAMgEAJQABACADAFQABADADAEQgEABgEAAQgBABgLAGQgFACgJABQgDANgOALQgNALgFAVQgdADgSgLIgOgJIgKAFQgKABgRgQQgKgLgFgEQgGgFgQgCQgbgEgQgOQgQgPgVgDQgmgGgIgFQgFgIgPgHQgEgCgFgBQgCgBgGgGQgNgVgDgDQgBgBgggJQgGgCgPgMQgTgPgEgCQgHgFgGgQQgHgTgFgHQgBgCgMgOQgJgLgCgHQgIgVADgaQAEgagMgQQgRgSgLgRQgEgFgDAAQgBAAgEgOQgCgNgCgKQgEgOgFgGQgGgGgOgEQgDgOgCgCQAAgBgOgEQgIgDgGgFQgGgFgEgEQgLgHgfgLQgdgKgFgGIglgfQgKgGgIgOQgGgMgdgOIgOgIQgEgCAAgBQgDgEgBgBQgOgQgOgLIgOgKQgQgSgHgCQgLAAgRgHQgXgJgMgRQgNgWgJgPQgLgRgGgGQgLgKgPAAQgLABgCgDQgDgEgJgBInXABIAAB+IiaAAQj4ABidAAQj3ABgOgDItMkHQisg4gmgIIAAghQAQgOAIgSQg2ABh8AMQh8AMgtAAQg0ABhMAHQhWAJgrADQgaACgOABQgaACgOADQAAAQAKAaQAKAdALAFQAMAGAIAAQADABAGASQAJAaAAAUQACAIAeAFIAFATQAIACAFADQAEACAGAEIAQAIQAAAKgDAHQgFAMgBAEIgcgJQAEAHABABQABAAAFAEQAFADACACQAEAFACACQAAADgBAJIgBAGIgHANIAbAaIAMAFQAKAFAIANQALARAEAEQAGAHALAKQAJAJAGANQAGALgEATQgFAaAAAHIAWgDQADAKABAAQAEACAEAEQACACAiAYQAPALACAmQAAALgCAQQgDAPAAAJQAJANABACQABAEAAAEQABACACAFIAFgBQgBgCADgGQAVgFAOAQQAOANABAVQAAAAgCAUQAAALABAAQACACABAGQABAFgCAPQgCAIgDANQAZABAGAPQAEAKgCAeQAIAHAMAHQANAHACACQAQAQAFAAQAMgBAAAAQAFAEAHAHQAGAFAHACQAdAJAIAJQANARACABQAEADANABQAQABAEACQAYAIASATQAXAZAMAHQALAHACAEQACADAEAMQAHAAAIABQAHABAEAGQAEAFABAHQABAFABAKQABABALAEQADACACAKQALgCAEABQAFABAIAHIAZAkQAEALAEACQAIAFAEAEIAGALQAUAAAFADQAIAEgEATQAJACAGABQACABAGAKQANAUgIASQgQAkAAACIAOAHQgBANgKAOQgBACgBACQgBABgCACQABAAAAgBIACgCAFBkIIgGhQIAXgUIgXgXQgDgkANgTQAOgTAigBQAWgBAWAJQATAHAqgEQgHgdgEgDQgCAAggABQgTABAAgGQADgLgBgKQgRgFgPgLQgOgKAGgCQADgBAPgDQgXgDgUgLQgWgNgJgTQgIgQgEgHQgGgMACgIQAIgagGgBQgNgCgEgIQAAgagMgLQgSgKgLgKQgGgFgDgIQgEgJgGgHIgNgOQgHgHgEgGICChpIAQAiQAQgLAWgnQAFgIAAgZQgBgbAAgLIgtgPQgTAcgPgTIgFgoQAXgOAXgUQAVgOAzgFQAShJAAgBQACgDAugnIA2AzIAxgsAJvyBQgUgWgEgCIgDgCAIFBuQAJgQgFgDQgNgLgBAAQAVgPAEgBIAkAEQgFgUgCgKQgEgRAFgNQATg1AZgBQAHAAARAEQAQADALgBQAKgBAPgQQAOgPABgGQgIgWgagVQgVgQADgTQANgkAEgRQAHgfgigFQgSgCAGgMQAGgLAOgGQAKgFARgBQALgBAGgLQAMgTADgBQANgCALgHQAUgMAHACQAQAGAIAAQAHhFABgDQADgHAVgNQAKgIADADQACACADAIQALANA1gpQAIgGAxghQAtghgBgMIgrgBIgCiYQgKAAgRgDQgSgDgIAAQgOgBgGAGQgLAMgEACIgkgkIgnAOIgJg4IhCgVIAJhRIhKgVIAVgxIg0gPIAcgqIgahrIgvgSQgCgRAXgQQANgIAVgOASYGDIgBgFQgHgQgDgJQgHgQgBgMQgDghAPgqQAQgtgCg3QgCgyAEguQAGhJAAgOQABgNAAglQAAgfACgTQARjdBjijQAdgvAIgTQAQgpgEgqQgIgDgLABQgNAAgHAEIgJAEQgGABgDABQgFABgCAFQgCAFACADQABADgEAHIgFgCQgCAAgCAAQgFgBgGgEQgHgFgIgDQgFgDgDgDQgCgCgFgDQgSgNgFgOQgJgBgHAAQgLAAgEgBQgXgFgRgCQgggFgOAJQgJgFgIAAQgKAAgIgBQgSgBgGgFQgIgHgKgDIgFgMQgNABgFgDQgHgDgFgLQgNAAgGgBQgIgDgIgDQgJgDgGACQgPAEgBAAQgCgIgDgDQgGgEgGgFIgNgIQgDgCgFgHQgQAAgDAAQgHgBgMgDIgXgHQgHgCgDADQgCACgFgCQgGgJACgEQACgFgCgGQgEgIgEgCQAAgBgNgDQADgRgJgXQgNgZgFgNQgDgKgCgCQgCgCgLgDQgBgNgBgBQgGgBgKgEQgBgMgDgEQgHgEgGgGQABgNABgNQACgbgFgOIgNAAQACgJgBgCQgGgBgGgCQAJgGADgRQACgTAAgIIgMgGQACgTgGgFQgLgGgIgIIgPAEQgDgJgDgBQgFABgGgBIgFgFAjUmXIBAAQIgFgfQAtgFAlAIQAWAFA1AOQAVAEAFAQQAHAUAMAHQALAHAIgBQAKgCADAAQANADgDAJQgBAFgEAKQAmAGABAAQAEgBAWgNQALgIAVAFQAVAGAHALQAIANAFAPQAFAJAYAKQAQAHACAAQADgBAMgEQAJgCAGACQAJADALAAIAOAbIAMgIQAIAIAPALQAKAMgFATQgDAOAAADQAAADAGALQAHAOABAAQAFAAAKAHQgEAHgDAaQgDAaACAKQACAMAMAXQANAZABACQgDAGgGAIQAAABACAUQAAAGgHAMQgGALABAGQAHALAHADQADADgFAZQgEAUADACQABABAaAFIABgGIAAgQIAsgSQAFAJgFAHQABAEAfACQgEAUAFAKQAFALARAHQgWARgCAMQgDARACgBQAFgEABABQADADAIABQAHAEgCAOQgCAIgFAEQgIAHgEAGQANAKAJgBQAGgBAQgEQAXgEADAJQAFAOAGADQAJAEANgCQASgDAGAAQAKACAPAHQANAHAJAAIgOglQARABACAEQAHAMACACQACACAKAFQAMAGAEADQAMAIAGAUQAGAWAIAJQAIABAkAAQAXAAARAJQAUAJARgEQAKgCAYgJIBlABIADgUQAdgCACACQAFACAYAVQALAHAJAAQAIAAAGAFQABAAAHAMQAIALAGAFQANAMAEgFQAKgLAIgCAB7IFIAvg3QAAgIgDgEQgCgCABgMQADgfgCgEQgKgLgQgZQAEgHABACQACADAFgHQADgEABgGQAAgEAFgFQADgDAJgDQAIgFAAgQQgBgOgDgHQgCgEgKgKQgHgHADgIQABgFgOgEQgTgGgRATQgIAJgOAYQgGAJgXALQgWALgGgDQgHgEABgCQACgEgHgNQgGgJABgBQADgPAAgBQgWAAgEgBQgDAAgVgQQgQgMgHgFQgMgKgGgLQgDgEgIgZQgHgZgBgEQAEgOABgJQACgRgPgKQgCgCgCABQgBAAAAgKIANgFIgOgGIAUgoIATAbQAyAQBkhNQA0gmBHg7IgGhGQAfgDAJgMQAGgHAIggIAWATIA4g0EA4xAZQIAAAAIABgCQADgEAEgDIAZgHIAJALQAEACADAAQACAAAEACIAXAPQAIgLAGgEQAHgFACgDQADgEADgJQABgEANgHIAJggQADgGAJgFQAJgFACgFQACgFAAgGQAAgDAHgIQAGgHAFgQQAFgPAGgFQAJgGAZACQAOACAVACIAAARIA+AAIAABHQAFABAPABQAMABAFABQAMgJAFgEQAFgjAHgLQAIgMAFgbQAAgEACgFQACgFABgHQAEgaAIgQQAIgRABgDQAEgXAIgTQACgEAQgiQADgGACgRQABgPAEgHQACgDALgKQAHgGAAgIQgKgE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CgBIgJgdQgCgMgCgBQgEgDgDgGQgIgYgEgKQgHgPgSAKQgFAEAAAAIgLABQgEgIAAgEQAAgJgBgDQgBgHgCABQgBABAAgLQgKAEAAgBQgCgEgHgFIgKAIQgBAEACACQAAABgEAGQgLgCgEgLQgEgLADgLQABgGABABQABACACgJIghgsQACgFACgDQACgCABgJQgJgGgOgOQgOgOgIgFIhlhNQgSgQgHgBQgKACgPgCQgFAAgDgDQgEgEgJgCIACgKIgBgDQgBABgCgFQgDgFAAgEQgBgCgEgFIgNgJQADgBgLgHQgDABgJgKQgEgEgMgXQgLgWgIgIQAIgYACggQABgkgLgSQgJgPAAgLQABgOAAgNQgCglgEgGQgDgFgegTQABgFADgMQgMgIgDgEQgGgHABgOQABgXAAgNQACgVAEgOQACgRACgIQACgOAIgJQAKgNgDgLQgIgTAAgJQAHARALAGQAHADAWADQgBgIgBgCQgBgCgFgEIgNgMQAOAEARAAQAIABAPAMQAUAQAVAKQAMAGABAAQACACAGAFQAPAOAVAFQABAAAqAGIACgCIALgKQAHgGAEgDQgFgHgBgKIBIAaQAaAKADAhQABAPgEgFIABAEQACAAAIACQAEABAGADQAFADgDgBQgBAAAIADIAyAIQAKACAaAFQAWAGAJAIQAHAHAEAXQAFAZgPgHQACAXgEAUIgDAUQAJAsAsAqQAhAhgLAfQARAEAGAKQAHAKgBATQgBAPACAFQAEAIAAAEQABAEgBAJQgCAIACAIQAVABACAEQABADAFARQAQAdAFAFQAEADAIAMQAIALAFAEQAMAKABAIQABAFANAEQAAAMgGALQgEAJAAAKQAOAKAJgCQAQgCAIABQAJAKACAHQABAHgFAOIAHAHQAGAFAAAGQAAAEAAAIIAFAUIACAIQgCgCgDAIQASADAFAEQACABAMAQQAFAGANAGQANAGAGAHIgJAKQAEAJADADQAAAAALAJIAXAPQAHAFADAGQACAEAEALQAKAXAOAGQAKAFAuANQAEAVAEACQAIADAFAHIANARQADAGAIAOQAHANAGAFQAFAEAVAOQAQAKAFAIQANABABgDQACgDALgBQAIAHAGACQgIAKAKAGIATAIQAFgIgBgEQgBgEgHgEQAFgBABABQABAAAEgJQADgFgBAAQAAAAACgCIAHAOIBBALQAKADABACQABADACABQgRADgCACQgGAFADATQACANgEAKQgDAJACAJQABAEAFAOQACAEABAHQAAAGAAAHQgBAJgEARQgBAOANAFQAEACAKABQATACANAMQAUATAHAEQAHAEATADQAZAFABAAIAwASQAEAOAJAQQAJAQAEAQQAFAQANAMQANALAQAEQAJADAFgEQAGgEAOACIAmAGQAIACAGAGQADADAIAJQAAAAAMAIQAFADAEAIQAMAWgFAjIAAACIApAHQACgBAMgOQAJgIAJgCIAXgCQAKgCAHgIQALgOgNgFQgLgEAQgLQAGgDARgEQAQgDALgBIBHhvIgbgFIgmhBIATgbIgVhAQgWgKgCgNQgCgSgGgHQgDgDgdgIQgPgEAVgRQgwg/gBgDQgCgVgFgnQAOABAcADQAZACARgEQAOgEAegNQAOgFACAGQABACAUgQIgbhnQgOgMAAgCQgBgFgIgJQgKgNgBgFQAAgJgBgMQgCgUABgWQAAgLgBABQgDABgDgIQgDgGABgCQABgCgCgLQAAgBAPgFQAHgDgCgMQgLglAAAAIATgLIACg/QAugDgQgNQgbgMgBgBIAFiCIATgEQgcgaABgJQAJgIADgIQgQgBgBgHQgCgNgLgJQgHgGgMgCQgRgDgHgDQgGgIACgDQACgFgFgJQgDgFgEgCQgGgDgEgFIADgnIAlgBIAAgcIAigDIgsgkIAHgSIgZgDQAFgFAOgDQAHgCAPgaEgzsgaQQAOgFASAKQAPAJAIALQADAFAHAPQgHAJAAALQAMAEAUABQAVABAFACQgFAPACAQQACAJAEAUIAOAFIgGATQgSgIgOgOQgLgNgDgDQgSgNgIgGQgNgLgDgGQgDgFgCgBIgDgBIgmgpgEg7KgUWQgEgWABgIQAAgOAPgEQAJAPACANQABAIABANQAEASgEAGQgGAGABATIgVAAQgJgRgCAAQgGAEgMACQAAgJAEgFQAGgEADgEQACgBAFgHQAEgFAGgEgEgwNgTdQAIAFAAAIQAAARgCAHQAAABALAOQADAFABACQAAAEACAEQAEAKAQANQAPAMAMADQANAEATAJQATAHAGANQACADABAEQADAJAEAPQACAHARAVQALAOgDASIASALQAJAFAaAIQAQAEAFALQgKACgEAGQgEAGAAANQAGAIAIAIQAHAIABABQACACAKAFQAYgKACABQAFACAUAWIAiAZQAKAGgBAKQAAAGgCAPQABAMANACQAHACAPABQgKAdAHAJQAFAFANALQABAJgBAIQAAAGABAFQABAFAKAXQAHASgBAGQgGAWAAAFQgBAKAFARQADAKACgBQADgBABAHQABADgCADQgBAEAIAHQADACAHADQAFACACAEQADAEADANQADANAHAJQAKAMAGABQAFABASADQADAFgBAGQAAAJAAADIAOAbQAIALACARQADAQAPAVQACADABAEIAFAFQAEAEAJAFQAIAEADAEIAPAaQADAEAEALQAEAJABAGQACAKgRAfQgOAbAQAXQAEAGAGAaQAEAVATARIAGAEQAIAIAcAGQAfAHAHgKQABgEgCgEQgDgEgBgCQgDgHAAgFQgBgEABgKQAVgHAGAEQAFADANARQADAEAhASQAQAJADAiQAFABAGACQAGABAGgBQAGgBAQgDQAKAAgGAQIgHAPQAFAJANALQAHAHAPALQgCASAAAFQABACAFATIArASQAMAGAGABQgBANAAABQABACAIAJQAQAWgOAnQgOAmgZALQgFACgKADQgJACgGAEQgIAEgCAFQgCAFgKAFQgIAFgKAKQgJAJgPAGQglAPgVg/QgQhIgGgKQgKgOgGgLQgFgMgKgNQgNgSgpgRQgsgUgsgxIhahLQg5gjgdgNQhGgegOAfQgggdgUgKQgNgJgPgHQgbgMgCgCQgBgFgLgMQgLgLgCgDQACgCAAAAQABABABgCIAHgHQgCgMgGgFQgGgGgLgCQgKAFABABQABABgDACIgLgPQAPgQAUhFQASg/ADgiQADgmAAgOQAAghgIgTQgLgfgGgNQgLgVgYgHQgHgtgjgKIgKAIQgGgDgSgLQgOgJgKgCQgDAAgBAAIhTg7QgKgGgPgNIgagTQgHgGgIgCQgEgBgRgDQgCgMgFgEQgDgEgNgFQgYgJgMAHQgGADgRAWQgQAAgFgFQgFgIgIgFQgPgJgCgCQgCgGgGgOQgEgKgHgGQgFgFgMgFQgRgIgGACQgIAFgKABQgDgDgMgRQgIgNgIgFQgfgTgUAMQgRgOgRAEQgHgLAAAAQgDgBgLgEQABgSAAgJQAAgQgFgJQgEgGgdgQQgIgDgFgCQgEgBgDgBQgNgFgEgGQgGgNgEgFQgEgHgPAGQgEgIgJgGQgKgIgFgHIgPAAIgWgoQAKgDADACQAHAGADABQAEABAPAAQAPAAAKACIAxAJQAKADAGAAQACAAAQgCQAFAAAIACQAFABAKgEQAHgDARgMQAMgJAPgBQABgNAHgKQAAgBAPgPgEg2LgT4QAAABgBAAQgFAHgHAIQgCADgFAGEguxgYwQATADADgEQAEgFAJgBQAQgBADAHQABADgBAQQAJAKANAYQABAIgNAcQgLAZAGALQgGABgHADQgCABgJgDQgOgEgWgKQgXgLgKgIIACgCQAYgTgCgGQgHgTARgvgEgolgKZQgCgMAAgDQAAgDADgLQgJABgIABQgDABgDABQgFACgFACQACANgIAOQgJARgBALQgBAJADABQABABAGAAQAFgUAFgJQACgEAGgGQAEgGADgHgEgmdgGQQgFgCgGgBQgHgBgDgCQgGgDgBgDQgCgEgFgFIgCASIAMAOQABACACAHQACAFACADQAFAHAFABQAEABAHALIANgBQgLgqgFgFgA9Su9QAHgEAAgFQAAgCAKAAQADAAAIACQAIACAKgBQAIAAATgDQAQgCAIAGIgNAeQANAGADgCQACgCAKAGQApAXgFAXQgBACgSAYQAHACALAMQAKAMACAEQAEAKgJAIQgHAIAKANQAJANARAYQAKAOAGAGQAJAHAGAHQAWgPAbAIQAgAKAGgBQAbgGAPAVQAPATgIAbQAIACAtAhQAMAJABAGQABAFAGAEQADACAMgCQAFgBgBAQEggkgL+QgEASgPAaQgBABgRAYQgKAPgFANQgDAKAEAHQAEALAAADQABAGgBAIQgBAGAFAPIAIAiQAVgFANAEQANADANAPQAEAFAHADQAGADAGAHIAUAVQAWACAIACQAJADARAJQAGADArAKQAnAJAUAOIASATQAIAIABADQABAGADAEQAEAFASAMQAEADADAGQACADAFAIIAbAtQAIAHgBgEQAAAAAEAGQAHAJABABQAFAFACAPQABAHArAbQAHAFAGAIQAEAHAXAMQAQAIAcAUQAcASAOANQALAKAgASQA0AhAeAdQAQAQADAEQADAEAJARQAFAHAKALQAHALgFALQAEABAAgBQAAAAAGAEIAKAHQAKAGAeAhQAfAhACAHQABAGAIAOQAHALAAALQALgBAJAGQAFAEAJALQABABANAKQAIAGAGAGQABABAhAkQAMANAUAOQAaASARAXQAOATAPAhIAAAAIAEAJQARAnAAAxQAAAqAVAfQAOAVAFAKQAHAMAKAXQAHANAWALQAVALARABIAHAQQgQAcACAHQAGARgBANQAAAKgDALQgBAKAAANQgCAIgMAEQgHACgFAHQgHAJgDADQgRANgOAZQgFAJgEAAQgFAAgFAGQADACACAAQAOADAKADQAHABATgEQAFAFAKAOQABADADABQAEAEAJAFQgDAYgRAIQgIADghAFQgoAGgBAAQgFACgXASQAAAPALAMQAGAGAOAOQAJAMACAUQACAWAOAVQAQAZARARQAHAHACAFQAEAHACAEQAPAVAbATIAHAHQAGADABAAQAHADAFAMQAFAQADAEQAFAGABAHQABAGAGAGQAYAXALgBQAHAAASgCIgGASQAFAAAIgBQAHAAAEACIAEACQADACgBgBQAAAAACACIACADQAAABgBAHQAPACAHACQAagaAEAAQADAAAKACQAAAAAQgHQAUgHAbgCQAKgBAMABQAIgBAIgNQAIgMACgLQADgOACgFQATAJARADQAUAEAGACQAPAGAPgJQAYgQAFgBIAqAuQgJAZABAeQAAAeAJAPEglWgDaQAHgFABgDQABgBAGgQQgJgJgEgDQgHgDgLAEIADAPIABACIAHANQABACABACgEgjRgCTIAUADQAAgLgPgZQgLgTgMgOQgHAYAZAqgAxsheIABACAn9tyQBXAfAFADQAGAEALAkQANAoAIANQgHAUgPAeQgJAdAKAqQAHAdgQAZQgWAagKAOIAsAqQgFADgKgCQgLgEgEgBIgWAiQAHAHAiAjQAEAEAJAFQAIAFADAEQAHAIADAVQAKAXArAQQAyASAEAEIA3hZQAOARgEACQgKAEAAAMQAlALAIAyQAEAbAGA0QgLAJghAGQgqAHgVgRQgMgLgeAFQgnAHgIgBQgSgDgQABQggABgFAAQgIAZgFAFQgGAGgXAEIgPAvQgKgEgCgBQgDgBgWARQgYAQgFAGQAAAJAEACQACACgDAUQgBAKADAFQACAFgBAGQgJAkAJAAQALgBgBAMQgFACgIgBQgHgBgJAJQgiAcgKAKQgPAQgEAjQgCAOgKAcQgGATADAYQABAOAGAGQAHAHACAGQABADAFAcIgmgGQgCAHgHAFQgFAEgCAOQgBAIACAHQACAHgBADQgDAJgGAAQgCAAACAQQABANAAABQgFADgIAHAjnIdQgugXAVgoQALgVAdgdQANgUgCgJQgEgRAAgDQAZAAAOABQAFgBAQgOQAEgDAIgCQAKgCAEgBQALgFACgEQAAgGAEgJQADAQAOAGQASAKADACQAEAFgBAHQAAACAOAAQAAAAAKgDQAEgCAIAKQAMAPgIAKQgHAJAHAFQAFAEATAJQANAHAGAJAqfFtIgaBmQAHgDAUACQALACASACIAEAuIBFAJQAKARgFASQgEAPAPAPQAGAGAJAEQAMAFAEADQAJAHgBAIQAAAFgEALQgDAXgRAJQgOAIgagBQgMgBgBAGQgCAIgRACQgEAAgQAAQgPAAgGACIgBBGIgnAgQAEAJALAAQAJAAAGAQQAEAJgCAMQgBALgFAEQgGgHgBgJQgBgGgTgOIgmgcQgEgEgKgPQgDgFgUgEQgPgCgJgJQgJgJgKgCQgPgDgJAIQgKAKgIAFQgPAKgKgCIgRgDQgNABgGAMQgFAQgEAGQgDAFAAABQgDABgCACQgMALgCAGQgCAFgIAEAw4FIIARADQgFgWAAgHQAAgMAVANQAhAVAPgJQAJgQgMgQQgRgVAAgGQgBgOAHgLQAGgJgGgeIAcgmAw4FIIAAAAIAAAAAr+T2QAJACAfAMQAUAHAEgDIAHgGIAPAHIABACIgBAEQgBAFgBgBQgBgBgBAKQAHAEATAGQAWAIAGADQA8AaA4Az");
	this.shape_1.setTransform(-0.5,0.1);

	this.timeline.addTween(cjs.Tween.get(this.shape_1).wait(2));

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = new cjs.Rectangle(-470,-290,940,580);


(lib.btn_simbologia = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// Capa_1
	this.shape = new cjs.Shape();
	this.shape.graphics.f("rgba(255,255,255,0.008)").s().dr(-60,-12,120,24);
	this.shape.setTransform(60,12);

	this.timeline.addTween(cjs.Tween.get(this.shape).wait(1));

}).prototype = getMCSymbolPrototype(lib.btn_simbologia, new cjs.Rectangle(0,0,120,24), null);


(lib.mc_12_bottom = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// Capa_1
	this.shape = new cjs.Shape();
	this.shape.graphics.f().s("#00CCFF").ss(0.2,0,0,22.9).p("AOxKUIAA0nI9hAAIAAQAIAAEnIIlAAg");

	this.shape_1 = new cjs.Shape();
	this.shape_1.graphics.f("#FFFFFF").s().p("AttJXIAAknQAsgFASgtQAMAAA3gJQBUgQA/ABIAIAOQAEAEALAGIABgCQACAGAAgKQABgBABgBQAAgBAAAAQAAgBAAAAQAAAAAAAAIAEgEQATgBAMgGIAZgMIAbgLQAOgHAKgJQAUgUAegOQAhgPAMgKQAVgQAYgOQARgKAcgZQAXgRACgZQAAgcADgRIAEgQQgDgGgBgGIAJgPQAFgLAfgXQAagTgCgQIgDgOQgDgJgBgTIAAgsQAAgfgCgNQgDgPACgIIAIgVQAFgMAAgMQAAgMADgEQACgFADgCQABgBABgJIAEgRQAEgZAJgMQAKgPAYgNIARgLQAJgGAIgEQAHgDAMgDQANgDAHgDIARgKQAKgFAKgDQAwgOCLgPQBzgNAhgXIAPgMQAEgCApgIQAPgDAMABQAOACAGgBQAJgBAPgKQAKgIAyADQAGAAArAPQAvAPAcAEIAYAHIADABIATACIAeAGQAPADARgGIASgIQAFgQgGgFQgDgCAKgIIAPAEIARAGIAFAEIAEAHIASAjQAHARAFAXIACgCIACgDIACgJIABgFIAIgEQgEANACAGIABAQQgBAPADABIAPAFQgGAKgDAHQgCAGgHAJQgFAGgEAOIgHAUQgCAFgDAGIgFAIQgDAAgDADQgFAFgDAGQgDAHgEAEIgRARQgLAPgdAWQgbAUgIAMIgMAYQgJAOgGAHQgTAXgEAdQgEAdAJAdIgMAUQgDADgUACIgVAoIgDAKQgCgBgGACQACgFACgDIAEgLIgXAEIAIAbIAEACIAIAAIADANQAJgLAEgBIAUgCQAHgCALgHQAJgHAHgBQAEAbgFAKIgSARIgHAJQgCACgJABIABgBQABgBgCgGQgRAHgHANQgDAFgGAYQgCAIABADIAHAHQAFgEAFgIIAKgPQAEgGAJgEQAMgGAKAEQAAAIgHAGIgNANQgEAHgBAPQgBARgDAGIgSAmQgJATgEAXIgJAUQgIAQgEAaQAAAHgCAFIgDAJQgFAbgIAMQgGALgFAjIgSANIgRgCIgTgCIAAhHIg/AAIAAgRIgjgEQgZgCgJAGQgGAFgFAPQgFAQgGAHQgHAIAAADQAAAGgCAFQgCAFgJAFQgJAFgDAGIgJAgQgNAHgBAEQgCAJgEAEQgCADgHAFQgFAEgJALIgXgPQgDgCgDAAQgDAAgEgCIgJgLIgYAHIgIAHIAAACIgBAAQgFALADALQADAJgBACQgEAEhgAAIjVgCQiFgChNAEIAABzg");
	this.shape_1.setTransform(-6.7,6.1);

	this.timeline.addTween(cjs.Tween.get({}).to({state:[{t:this.shape_1},{t:this.shape}]}).wait(1));

}).prototype = getMCSymbolPrototype(lib.mc_12_bottom, new cjs.Rectangle(-95.5,-67,191,134), null);


(lib.mc_11_bottom = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// Capa_1
	this.shape = new cjs.Shape();
	this.shape.graphics.f().s("#FF3399").ss(0.2,0,0,22.9).p("AskKtIZJAAIAApBIAAryIAAgmIy3AAImSAAIAAM+g");

	this.shape_1 = new cjs.Shape();
	this.shape_1.graphics.f("#FFFFFF").s().p("AIVH/QgMgKgLgMQgpgogLgOQgJgNgdgXQgfgagJgKIgggfIgNgKIhIg5QgigZgTgMQgigVgYgEQgPgDgOgGQgngVgfgMQg3gThVgDQgTgBgXAEQgZAEgMAAQgOAAgFACIgGACQgUAGgHAGIgMAJIgQAGIgGANIgEAGQgJAIgSADQgZAFgFACQgGADgUAFQgSAFgGADQgLAGgbAIQgcAJgMAGIguAYQgSAFgmgBQgHgBgUAIQgOAFgZgLQgOgGgZgEQgXgEgHgDIgNgHIgRgHQgJgDgZgSQgYgQgegEIgIgBIAAs9IGSAAQAHAGAXAJIAdANQARAIAQACQAcAFA1gDQAtACATAXQAFAIACAFQACADAOADQAPAEAZABQANACAIARQAJAXAHAFIAGAEIAGAFQAKALAFAOQAEAOADAEQAVAZBwgfQAigKAvgPIA2gTQAmgNAigEQAhgEAuAAIBCAAQAlgHARgpQALAAA2gJQBVgQA/ABIAIAOQADAEALAGIACgCQACAFABgJQAAgBABgBQAAgBAAAAQAAgBAAAAQAAAAAAAAIADgEQAUgCAKgFQAIgCAPgJIAALyQgSAAgCABQgGADg6BnQg/BtgKAMQAEANAOAQIAXAZQgFAVgIAAQgIAAgDAJQgBAJAEANQACAFgPALQABAGAGAUQAEARgBAHIgYAng");
	this.shape_1.setTransform(0,-6.9);

	this.timeline.addTween(cjs.Tween.get({}).to({state:[{t:this.shape_1},{t:this.shape}]}).wait(1));

}).prototype = getMCSymbolPrototype(lib.mc_11_bottom, new cjs.Rectangle(-81.5,-69.5,163,139), null);


(lib.mc_10_bottom = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// Capa_1
	this.shape = new cjs.Shape();
	this.shape.graphics.f().s("#00CCFF").ss(0.2,0,0,22.9).p("ApIMCISRAAIAAjLIAA04IsIAAImJAAg");

	this.shape_1 = new cjs.Shape();
	this.shape_1.graphics.f("#FFFFFF").s().p("ApIMCIAA4DIGJAAIAAA4QACA3gPAsQgPAqACAiQABAMAHAQIAKAZIABAFQAEANAAAWQAHAcAnA8QAHAKARARQAPAOANAJIAOALQAJAIAFAFQAEASgNAaQgPAdgBAPQAAASAUAqIAhA7QAFALAJAdQAFATATATIA7A8IANAOIArAtQAZAbAMAWQAFAHAKAKIANAOQAFAEABAFIAFALQADAJADAPIAGAWIAGAYQACAGALANIAAAZQACAOAIAJQAFAFAEADIAMAFQAIAFADAEQAAACAMABQABANACACIAFADQAAADAAAEQgBAEACAJQALAIAGgBQAKgBADABQAFABACALIADAVQAFARAKAJQAIAGAVAIIAeAOQAQAHAQADQAcADA1gCQAtACATAYQADAEADAGQACAEADABIAADLg");

	this.shape_2 = new cjs.Shape();
	this.shape_2.graphics.f("#F1F1E6").s().p("ApIAAIAAAAISRAAIAAAAg");
	this.shape_2.setTransform(0,77);

	this.timeline.addTween(cjs.Tween.get({}).to({state:[{t:this.shape_2},{t:this.shape_1},{t:this.shape}]}).wait(1));

}).prototype = getMCSymbolPrototype(lib.mc_10_bottom, new cjs.Rectangle(-59.5,-78,119,156), null);


(lib.mc_09_bottom = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// Capa_1
	this.shape = new cjs.Shape();
	this.shape.graphics.f().s("#00CCFF").ss(0.2,0,0,22.9).p("AsVJJIMuAAIL9AAIAAyRI3QAAIhbAAg");

	this.shape_1 = new cjs.Shape();
	this.shape_1.graphics.f("#FFFFFF").s().p("AgRJJIg6gTIgIgBIgIgDIgOgHQgVgKgDgGQgDgMgIgQQgHgOgMgKQgNgMgNgCIAHgNIgNgNQg4gyg8gaIgbgLQgUgGgHgFIACgJQAAABABAAQAAAAAAgBQAAAAABgBQAAgBAAgBIABgEIgBgCIgOgIIgIAHQgEACgUgGIgngPIgXgDIACgIIgDgDIgCgCIgCgBIgEgCQgDgCgIAAIgMABIAFgSIgYACQgLAAgZgWQgGgHgBgFQgBgHgFgGQgDgFgFgPQgEgMgIgDQgBAAgGgDIgHgHQgbgTgOgWIgHgLQgCgEgHgHQgQgRgQgZQgOgVgCgWQgCgVgKgLIgUgTQgKgMgBgPQAXgSAFgCIApgGQAigFAHgDQASgJACgYQgJgEgEgEQgDgBgBgDIgPgTQgSAEgIgBIgYgGIgEgCQAEgHAFAAQAEAAAFgJQAOgYARgNIALgMQAEgHAIgCQALgEACgIIABgXQADgLABgKQABgOgHgQQgCgHARgcIgIgQQgRgBgUgLQgXgLgGgNIgRgjQgGgKgOgWQgTgdgCggQgBgzgDgMIXQAAIAASRg");
	this.shape_1.setTransform(4.2,0);

	this.timeline.addTween(cjs.Tween.get({}).to({state:[{t:this.shape_1},{t:this.shape}]}).wait(1));

}).prototype = getMCSymbolPrototype(lib.mc_09_bottom, new cjs.Rectangle(-80,-59.5,160,119), null);


(lib.mc_08_bottom = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// Capa_1
	this.shape = new cjs.Shape();
	this.shape.graphics.f().s("#FF3399").ss(0.2,0,0,22.9).p("AprFjITXAAIAAhZIAApsIzXAAIAACIg");

	this.shape_1 = new cjs.Shape();
	this.shape_1.graphics.f("#FFFFFF").s().p("AJrE2QgYgJgOgEQhJgVgvgFQgkgBgNgDQgNgDgQgKIgcgQIgJgFIAHgLIgKgBQADADgJAFQgIgSgVgIQgcgIgPgGQgdgMhogkQhuglgOgBQAEgIgFgHQgCgCgJgIIgbgUQgHgFgbgLQgZgJgLgDIABgFIgDgMQgFgHgNgCQgOgDgGgEIgEgDIgEgCIgHgBQgBgRgIgGIgTgOIgKgTQgEgGgUgJIgVgLQgMgGgMgCQgOgCgPAKQgJAIgGAFQg7gZg9gNIgegGQgOgCgPgHQgxgVgJgDIgQgDIgOgCIgtgOIAAiIITXAAIAAJsg");
	this.shape_1.setTransform(0,-4.4);

	this.timeline.addTween(cjs.Tween.get({}).to({state:[{t:this.shape_1},{t:this.shape}]}).wait(1));

}).prototype = getMCSymbolPrototype(lib.mc_08_bottom, new cjs.Rectangle(-63,-36.4,126,73), null);


(lib.mc_07_bottom = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// Capa_1
	this.shape = new cjs.Shape();
	this.shape.graphics.f().s("#FF3399").ss(0.2,0,0,22.9).p("AI/ovIx9AAIAARfIR9AAg");

	this.shape_1 = new cjs.Shape();
	this.shape_1.graphics.f("#FFFFFF").s().p("Ao+IwIAAxfIR9AAIAARfg");

	this.timeline.addTween(cjs.Tween.get({}).to({state:[{t:this.shape_1},{t:this.shape}]}).wait(1));

}).prototype = getMCSymbolPrototype(lib.mc_07_bottom, new cjs.Rectangle(-58.5,-57,117,114), null);


(lib.mc_06_bottom = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// Capa_1
	this.shape = new cjs.Shape();
	this.shape.graphics.f().s("#00FF00").ss(0.2,0,0,22.9).p("AGulsItbAAIAALZINbAAg");

	this.shape_1 = new cjs.Shape();
	this.shape_1.graphics.f("#FFFFFF").s().p("AmtFtIAArZINbAAIAALZg");

	this.timeline.addTween(cjs.Tween.get({}).to({state:[{t:this.shape_1},{t:this.shape}]}).wait(1));

}).prototype = getMCSymbolPrototype(lib.mc_06_bottom, new cjs.Rectangle(-44,-37.5,88,75), null);


(lib.mc_05_bottom = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// Capa_1
	this.shape = new cjs.Shape();
	this.shape.graphics.f().s("#00CCFF").ss(0.2,0,0,22.9).p("Ap6JTISNAAIBoAAIAAylIAAAAIz1AAIAAK7IAAAjIAAA3IAAFLg");

	this.shape_1 = new cjs.Shape();
	this.shape_1.graphics.f("#FFFFFF").s().p("AJ7JTIAAylIAAAAIAASlgAITJTQgUgdgcgUQgVgOgMgNIgigkIgOgNIgOgLQgJgKgFgEQgIgHgMABQAAgKgHgMQgIgOgBgFQgBgHgfgiQgfghgJgGIgLgHIgGgEIgEgBQAFgLgHgKQgKgLgEgIIgNgVIgTgTQgegegzghQgggRgMgLQgNgNgcgRQgdgUgOgIQgXgMgFgHQgFgJgHgEQgrgbgBgIQgDgNgFgGIgHgJIgFgGQACADgIgHIgbgtIgHgLQgDgFgFgEQgSgLgDgFQgDgEgBgGQgBgEgIgHIgTgTQgUgPgmgJQgrgKgGgDQgSgJgIgCIgfgFIgTgVQgGgHgHgDQgGgDgEgFQgOgOgNgEQgNgDgVAEIgIgiQgEgPAAgFQACgIgBgHQAAgDgFgKQgDgIADgJQAEgNALgPIARgaQAPgZAEgSIABgDQAFgigMgWQgFgJgEgDIgNgIIgLgMQgFgGgIgCIgngFQgNgCgGAEQgFADgKgCQgPgEgMgKQgNgKgFgPITmAAIAASlgAH2DZIACACIgCgDgAp6DDIACAAIAWgFQALAAgHAQIgGAQQAFAIANAMIAVASQgCARABAFIAGAWIArASQAMAGAGABIgBAPIAJALQAPAVgOAnQgNAngaAKIgPAFQgIADgHADQgIAFgCAFQgBAFgKAFQgJAEgKALQgJAJgOAFIgEACgApuCjQgGgKgGgOIAAgiQALAOAKASQALAUABAKgAJ7pSg");

	this.timeline.addTween(cjs.Tween.get({}).to({state:[{t:this.shape_1},{t:this.shape}]}).wait(1));

}).prototype = getMCSymbolPrototype(lib.mc_05_bottom, new cjs.Rectangle(-64.5,-60.5,129,121), null);


(lib.mc_04_bottom = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// Capa_1
	this.shape = new cjs.Shape();
	this.shape.graphics.f().s("#00CCFF").ss(0.2,0,0,22.9).p("ARML4IAA3vMgiXAAAIAAAAIAAXvId0AAg");

	this.shape_1 = new cjs.Shape();
	this.shape_1.graphics.f("#FFFFFF").s().p("AwML4IAA3vIBQAAQAGAGAIAAQAPAIAFAHQAIAGAmAFQAVAEAQAOQAQAPAbADQAQACAGAGQAFADAKAMQARAPAKAAIAKgFIAOAJQASAKAdgCQAFgVANgLQAOgMADgNQAJAAAFgDIAMgGIAIgCIgEgGIgEgIQAEgIACgMIALgGQACgCABgIIICAAQAFAGAGAEIAhAWQAEADAMAFQAGACAGAOQAHAQAEACIAQAKIAMAzIAIAGIAGALIAEAIIADACIABABQAIAGAEATQAEATAHAFIAHAFIAGAHQACADAHAEQgBAQACACQABABARAGIgIAJQAIAGgBAHQgCAIAFAKIAJAMQAFAMgBADIAOAIQADACACAEIAGAHQAEAEAMADQALAEAEADIATAZIAHAPQADADAOACIgBAIIADAFQAEAGAAgCQAFAHADAQQADALAMAHIADACQAEACAUAWIAFAGQAGABAFgBQADAAADAKIAPgEQAIAIALAFQAGAGgCASIAMAGIgCAcQgDAQgJAGIAMAEQABABgCAKIANgBQAFAOgCAbIgCAaIANALQADADABANIAQAEQABABABAOQALACACADIAFAMIASAlQAJAWgDASIANADQAEACAEAJQACAGgCAFQgCAEAGAIQAFACACgCQADgCAHABIAXAHIATAFIATgBQAFAHADACIANAJIAMAIQADADACAJIAQgFQAGgCAJADIAQAGQAGACANgBQAFAMAHADQAFADANgBIAFAMQAKACAIAHQAGAGASABIASAAQAIABAJAEQAOgJAgAFIAoAIIAPAAIAQACQAFAOASAMIAHAFQADAEAFACIAPAIQAGAFAFAAIAEAAIAFADQAEgIgBgDQgCgDACgFQACgEAFgCIAJgBIAJgFQAHgDANgBQALAAAIACQAEArgQApQgIASgdAwQhjCjgRDdIgBAIg");
	this.shape_1.setTransform(-6.3,0);

	this.timeline.addTween(cjs.Tween.get({}).to({state:[{t:this.shape_1},{t:this.shape}]}).wait(1));

}).prototype = getMCSymbolPrototype(lib.mc_04_bottom, new cjs.Rectangle(-111,-77,222,154), null);


(lib.mc_03_bottom = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// Capa_1
	this.shape = new cjs.Shape();
	this.shape.graphics.f().s("#FF3399").ss(0.2,0,0,22.9).p("AHMqOIuXAAIAACAIAASdIOXAAIAAoVg");

	this.shape_1 = new cjs.Shape();
	this.shape_1.graphics.f("#FFFFFF").s().p("AnLJPIAAydIEEAAQAJABADAEQACADALgBQAPAAALAKQAHAGAKARIAWAlQAMARAXAJQARAHALAAQAIACAPASIAOAKQAOALANAQIAEAFIAEADIAOAIQAdAOAHAMQAHAOAKAGIAlAfQAFAGAdAKQAgALAKAHIALAJQAFAFAIADQAOAEABABQABACADAOQAOAEAGAGQAFAGAEAOIAFAXQADAOABAAQADAAAEAFQALARARASQAMAQgEAaQgCAaAHAVQADAHAIALIANAQQAFAHAIATQAGAPAGAFIAYARQAPAMAFACIAgAJIAAIVg");
	this.shape_1.setTransform(0,6.4);

	this.timeline.addTween(cjs.Tween.get({}).to({state:[{t:this.shape_1},{t:this.shape}]}).wait(1));

}).prototype = getMCSymbolPrototype(lib.mc_03_bottom, new cjs.Rectangle(-47,-66.4,94,133), null);


(lib.mc_02_bottom = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// Capa_1
	this.shape = new cjs.Shape();
	this.shape.graphics.f().s("#FF3399").ss(0.2,0,0,22.9).p("Ao0n4IAAHdIAAIUIGkAAIJxAAIBUAAIAAvxIwYAAg");

	this.shape_1 = new cjs.Shape();
	this.shape_1.graphics.f("#FFFFFF").s().p("AHhH5IgKgLQgFgGgJgBIgmgGQgOgCgFAEQgGADgJgCQgQgEgNgLQgNgMgFgQQgEgQgIgQQgKgQgEgOIgwgSIgagFQgTgDgHgFQgHgEgUgSQgNgNgSgCQgKAAgFgCQgNgFACgOQAEgRAAgJQABgQgDgJIgHgSQgCgJADgJQAFgJgCgNQgEgTAHgFQABgCARgDQgCgBgBgDQAAgCgLgEIhBgLIgHgNIgCACIgCAEIgFAJQgBgBgFABQAIAFAAADQABAFgFAIIgTgIQgJgGAHgKQgFgCgJgHQgLABgBADQgCADgMgBQgFgJgQgJQgVgOgFgEQgFgFgIgNIgLgUIgNgRQgFgHgIgEQgEgBgEgVQgtgMgLgFQgNgGgLgXIgGgPQgDgGgHgFIgXgPIgLgKIgHgLIAJgKQgGgHgNgGQgMgGgGgGQgMgQgCgBQgEgEgTgEQADgHACABIgBgHIgGgUIAAgMQAAgGgGgFIgHgIQAFgOgBgGQgCgHgJgKQgHgBgRACQgJACgOgKQAAgKAEgJQAGgLABgNQgOgEgBgEQgBgIgMgKQgFgEgIgLIgLgQQgFgEgQgdIgHgUQgCgEgVgCQgBgIABgHIAAgNQAAgFgDgHQgCgFAAgPIAAgMIQYAAIAAPxgAo0H5IAAoUIAJAFQAKADAVgHIACACIAPALQgKAfAFAJQADAHATAVIgGAKQgBAGABAHIADAZIADACQAJAGAAAIQgBARgCAHIALAPIAEAHIACAIQAEAKARAMQAPANAMADQANADASAKQAUAHAFANQAEAHAGAYQADAHAQAUQALAPgDASIASALQAJAFAaAHQARAFAEALQgKABgEAHQgEAFAAANQAGAJAIAIIAIAJQADACAJAFQAYgKACABQAFACAVAWIAiAZQAIAFABAJIgDASgAlrhqQgOgEgWgLQgXgLgKgHIADgCQAXgTgCgGQgHgTARgvQATACADgDQAEgFAJgBQAQgBADAGQABADgBARQAKAKAMAXQABAJgNAcQgLAZAGALIgNAEIgBAAIgKgCg");

	this.timeline.addTween(cjs.Tween.get({}).to({state:[{t:this.shape_1},{t:this.shape}]}).wait(1));

}).prototype = getMCSymbolPrototype(lib.mc_02_bottom, new cjs.Rectangle(-57.5,-51.5,115,103), null);


(lib.mc_01_bottom = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// Capa_1
	this.shape = new cjs.Shape();
	this.shape.graphics.f().s("#FF3399").ss(0.2,0,0,22.9).p("AnkGLIG/AAIGJAAICBAAIAAk4IAAjjIAAj6IvJAAg");

	this.shape_1 = new cjs.Shape();
	this.shape_1.graphics.f("#FFFFFF").s().p("AhmFJIgBgDIgKgPQAAgIADgPQACgQAAgLQgCgmgPgLIgkgaQgEgEgDgCIgFgKIgWADQAAgHAFgaQAEgTgGgLQgGgNgJgJIgRgRIgPgWQgIgMgKgGIgMgEIgagaIAHgMIABgGIABgNIgHgGIgHgGIgGgDIgFgIIAcAJIAGgQQAEgHgBgLIgQgHIgKgGQgFgDgIgCIgFgTQgegFgCgJQAAgTgIgaQgHgSgDgBQgIAAgLgGQgMgFgKgdQgKgaAAgQQAPgDAZgCIAogDICBgMQBMgHA1gBQAsAAB7gMQB9gMA1gBQgHASgRAOIAAAgQAvALCFArIAADjQgZgFgPgOIgJgHIgMgHQgWgKgTgPQgPgMgJgBQgRAAgOgEIANAMQAGADAAADIACAJQgWgCgHgDQgKgGgIgRQABAIAHAUQADALgKANQgIAIgCANIgEAZQgEAOgBAWIgCAjQgBAPAGAGQADAFAMAIIgEARQAeASADAFQAFAHABAkQAAAOgBAOQAAAKAKAPQAKAQgBAhg");
	this.shape_1.setTransform(6.5,6.6);

	this.timeline.addTween(cjs.Tween.get({}).to({state:[{t:this.shape_1},{t:this.shape}]}).wait(1));

}).prototype = getMCSymbolPrototype(lib.mc_01_bottom, new cjs.Rectangle(-49.5,-40.5,99,81), null);


(lib.graph_BTN = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// Capa_1
	this.shape = new cjs.Shape();
	this.shape.graphics.f("rgba(255,255,255,0.008)").s().p("AnzH0IAAvnIPnAAIAAPng");

	this.timeline.addTween(cjs.Tween.get(this.shape).wait(1));

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = new cjs.Rectangle(-50,-50,100,100);


(lib.graph_12 = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// Capa_1
	this.shape = new cjs.Shape();
	this.shape.graphics.f().s("#00CCFF").ss(0.2,0,0,22.9).p("AuwKUIdhAAIAA0nI9hAAg");

	this.timeline.addTween(cjs.Tween.get(this.shape).wait(1));

	// Capa_2
	this.shape_1 = new cjs.Shape();
	this.shape_1.graphics.f("#FFFF00").s().p("ADuGoIAAABIgBAAIAAABIgBgBIAAABIAAAAIAAgEIABAAIAAABIABAAIAAABIACAAIACABIgBABgADyGlIAAgCIgBAAIAAgBIABAAIAAgBIABAAIAAgBIAAAAIAAgBIABAAIABgBIABAAIAAgBIABABIADAAIAAAEIgBAAIAAABIgFAAIAAAAIgBAAIAAACgACmF1IAAgBIgCAAIAAgDIAFAAIAAABIABAAIAAABIABAAIAAABIgCAAIAAABgAFcFqIAAgBIgGAAIAAgBIgCAAIgCABIAAgBIgBAAIgBABIAAABIgBAAIAAgEIgBAAIAAgBIgBAAIAAgCIAAAAIAAgBIABAAIAAgBIABAAIAAAAIABAAIAAgBIABAAIAAABIACAAIAAgDIABAAIAAgBIACAAIAAABIACAAIAAgDIgBAAIAAgBIABAAIAAgBIABgBIABAAIAAABIgBAAIABABIADAAIAAgBIABAAIAAABIABAAIAAgBIgBAAIAAgBIABAAIAAgCIAAgBIABAAIAAACIgBAAIAAADIgBAAIgCAAIAAADIADAAIAAABIACgDIgBgBIAAAAIACAAIAAABIABACIgBABIABAAIgBABIAAABIABABIAAAAIgBAAIAAACIgCAAIAAACIgBAAIAAACIAAAAIAAACIgCAAIAAABgAEMFlIAAgCIgBAAIAAgCIADAAIAAABIACAAIAAADgAFlFaIAAgBIgBABIAAgEIACAAIAAABIABgBIAAgCIABAAIAAABIABAAIAAABIgBAAIAAACIgBAAIAAABIgBAAIAAABgAr/FIIAAAAIgGAAIAAgDIAEAAIACgBIAAABIABAAIAAABIAAAAIAAACgArvFFIAQAAIAAABIgOAAIgCABgAreFFIABAAIAAABgAsXFGIgBgBIgDAAIAAgCIAFAAIAAgBIABAAIAAABIABAAIAAgBIABAAIAAABIADAAIAAABIAAAAIAAABIAAABgArSFFIABgBIACAAIAAABgAqOFCIgDAAIAAgBIAAgBIgBAAIAAgBIgBAAIAAgBIgDAAIAAgBIgBAAIAAgBIABAAIAAgBIABAAIAAgBIACgBIAJAAIAAgCIAGAAIABgBIACAAIAIgBIACgBIABAAIABgBIACgBIACAAIgBABIgBAAIgBABIgBAAIAAABIgBAAIgBABIgBAAIgBAAIAAABIABACIgBAAIAAABIgBAAIAAABIgBAAIAAABIgBAAIAAABIgBAAIAAAAIgBAAIAAABIgBAAIAAABIAAAAIAAABIgBAAIAAABIgFAAIgBgBIgBgBIgBAAIAAABIgBAAIAAABIgBAAIAAABIgDAAIgBABgAqVE9IACAAIgCgBgAE8E7IABgCIAAgCIgBAAIAAgBIAAAAIAAgBIAAAAIAAgBIAAgCIABAAIAAgBIABAAIAAgBIADAAIAAABIABAAIAAABIgBAAIABABIAAABIgBAAIAAACIgBAAIAAAAIgBABIAAACIgBAAIAAABIgBAAIAAABgAoyEYIAAgDIABgCIABAAIABgBIABAAIAAABIgBAAIAAACIACAAIAAgCIAAgBIABAAIAAADIgBAAIAAABIABAAIAAACgAnaDkIgBgBIgBAAIABgBIACAAIAAgBIACAAIAAgBIACAAIAAgBIABABIAAABIgBABIgBAAIAAABIgDAAIAAABgAGPDWIAAgEIAAgBIgBAAIAAgBIAEAAIAAACIABAAIAAACIgEAAIAAACgAkWACIAAAAIAAgBIgBAAIAAgCIABgBIAAgCIgBgBIABAAIAAACIABAAIAAABIABAAIAAABIABABIAAAAIABABIgBAAIAAABIgCAAIAAABgAk2gFIAAgBIgBgBIgBAAIAAgBIABAAIAAgBIACAAIAAgBIACAAIAAgCIABAAIAAgBIABAAIAAgBIABAAIAAACIgBAAIAAACIAAACIgBAAIAAABIgBAAIgBABIAAABgAkWgHIAAAAIgFAAIgBgBIgBAAIgBABIABAAIAAAAIgCAAIAAgBIgFAAIAAgBIABAAIAAgDIgDAAIAAgCIgBAAIAAgBIgBAAIAAABIAAgBIgBAAIAAgBIgBAAIAAgBIACAAIAAgBIABAAIAAgBIABAAIAAgBIACAAIAAgBIABAAIAAgBIABAAIAAgBIABAAIAAgBIABAAIAAgBIABAAIAAAAIACAAIAAgBIACAAIAAgBIADAAIAAgBIACAAIAAgCIABAAIAAgBIABAAIABADIAAABIABAAIAAABIABAAIAAgBIABABIABAAIAAABIgCAAIABAAIgBAAIABABIABAAIAAABIABAAIAAACIgBABIAAACIgCAAIgBABIgBgBIgBAAIAAgBIgBAAIAAADIABABIAAADIABAAIAAAFIgDAAIAAAAgAktgPIAAgBIADAAIAAABgAkqgQgAJNh6IABgBIABABIgBAAIAAABgAJPh7IAAAAIABAAIAAAAgAJDh7IAAgBIgCAAIAAgCIABgBIABAAIAAgCIAFAAIAAABIACAAIAAgBIAAABIABAAIAAABIgBAAIAAACIgCAAIAAABIgBAAIAAgBIgBAAIAAABIABABIgEAAIAAAAgAJQh8IAAgBIABgBIAAACgAKKjPIAAgBIgBAAIAAgEIgBAAIAAgBIABAAIAAAAIACAAIAAABIABAAIAAABIACABIgCAAIAAACIAAABgAKvjuIAAgBIgBAAIAAgBIgBgBIAAAAIABAAIAAgBIABAAIAAgCIgCAAIgBgCIABAAIAAgBIgBAAIgBABIAAgBIADgBIACAAIAAgBIgBAAIABAAIAAgBIgBgBIgBAAIgBgBIAAABIgBAAIAAgCIABAAIAAgBIABAAIAAACIABAAIABABIACAAIABgBIgBAAIgCgBIAAAAIAAgCIAAABIACgBIAAABIABAAIAAABIACAAIAAgBIAAAAIgBgBIABAAIgCgBIAAgBIgBAAIAAgBIABAAIACABIAAABIAAAAIAAgBIACAAIABABIABAAIgDgCIABAAIgCgBIAAAAIABAAIAAgBIgBAAIAAgBIACAAIABABIABABIAAgBIABgBIAAgDIgCgBIABgBIABgBIACABIgBACIAAACIABAAIAAABIABAAIABABIABAAIAAABIACgCIAAABIABAAIAAABIADABIAAABIgBAAIAAABIgCAAIAAABIAAABIgBAAIAAABIgBAAIAAABIgBAAIAAABIgBAAIAAABIgCAAIAAABIgBAAIAAABIgBAAIAAABIgBAAIAAABIgBAAIAAACIgBAAIAAABIgBAAIAAABIgBAAIAAABIAAAAIgBABIgBABIAAABIgBAAIgCABgAKtkAIAAABIgBAAIAAgBIgCAAIAAABIgBgBIgCAAIACgCIAAgBIABAAIAAABIABAAIABABIABAAIACABIgBABgAK1kKIAAgBIACAAIAAAAIgBABgAgqkqIAAgEIABAAIAAgBIABAAIAAABIABAAIAAgBIACAAIAAADIABACgALoktIABgBIAAgBIABAAIAAAAIABAAIAAABIgBAAIgBABgAgokvIAAgBIABAAIAAABgAgokvgALrkvIAAgBIAAAAIAAgBIABAAIAAABIgBAAIAAABgALrkvgALlkxIAAgBIABgBIAAAAIAAABIAAAAIAAABgALtkyIAAgBIABAAIAAABgALukzIAAgBIABgBIAAACgALukzgALmkzIAAgBIAAAAIAAgCIgBAAIAAABIgBAAIAAgBIgCAAIAAgBIgBgBIAAgBIACAAIABABIABAAIAAgBIABAAIAAACIADAAIAAABIABABIgBAAIAAABIgBAAIAAABgALmkzgALmk4IAAgBIADAAIAAABgAhDk4IgBgBIABAAIgBgBIgBAAIgBgBIABAAIAAgEIgBAAIAAgCIABAAIABABIADAAIAAgBIADAAIABAAIABAAIAAgBIAFgDIAAACIgBAAIAAABIgCABIABAAIAAAAIABAAIAAACIgFAAIAAADIgBAAIABABIACABIgBAAIAAABIgBAAIAAAAIgDAAIAAABgALpk5IAAgBIABAAIAAgBIABAAIAAACIgBAAIAAAAgALpk5gALxk+IABAAIAAADIgBABgAgfk6IgBgBIAAgBIgBAAIAAgDIACAAIAAgDIgBAAIAAgBIgBAAIAAACIgBAAIAAACIgCAAIAAABIgDAAIgBgBIgDAAIgBgBIAAgBIAAAAIAAgBIAAgBIgBAAIgBgCIgDAAIAAABIgBAAIAAABIgBAAIAAgCIgEAAIAAgBIABAAIAAgBIgBAAIAAgCIABAAIAAACIABAAIAAgBIABAAIAAgBIABAAIAAgBIABAAIABgBIACAAIAAAAIgCAAIAAAAIgBAAIgBgCIgBgBIAAgCIAAAAIAAgBIgBAAIABgDIABAAIAAABIgBACIABgBIAFAAIAAgBIABAAIAAgBIgEAAIAAgDIACAAIAAgBIgCgBIgCAAIgBgBIAAACIAAgBIAAgBIgCAAIAAgBIgEAAIgBgBIAAgCIACAAIAAgCIABAAIAAgDIABAAIAAgBIgBAAIgBgBIAAgBIABABIAAgBIACAAIAAAAIACAAIAAAAIABAAIAAABIACAAIAAgBIADAAIABABIgCACIABAAIAAABIgBAAIAAACIACAAIAAABIABAAIAAABIABAAIAAgCIgBAAIAAgFIAAAAIAAgBIAAAAIAAAAIADAAIAAAAIABAAIABgBIgBgBIgEAAIAAgBIAAAAIAAgBIADAAIgBgBIAAgBIgBAAIAAgCIABAAIAAgBIABAAIAAABIACgBIABAAIAAAAIABAAIAAgBIABAAIAAgBIgHAAIAAgBIADAAIAAgCIgBAAIAAgDIACAAIAAACIACgBIgBACIAAACIADAAIAAADIABgBIAAgCIAAAAIAAgDIAAAAIAAgBIgBAAIgBgBIABAAIAAgBIABAAIAAABIAAABIABAAIAAAFIAHAAIAAACIABAAIAAADIACABIAAgBIABgCIABAAIABABIAAACIgBAAIAAgBIgBAAIAAACIACAAIABABIACAAIABABIAAgBIABAAIAAABIABgBIAAgCIgBAAIAAgBIABAAIAAgCIABgBIAEAAIACABIAAABIgBABIAAABIABAAIAAABIgBABIABAAIAAABIAAABIgBAAIAAgBIgCAAIAAABIgBAAIAAABIACAAIABAAIAAABIgCAAIAAABIgBgBIAAABIgCAAIAAABIACAAIAAABIADAAIAAACIABAAIAAgCIAAACIABgCIABACIAAABIgCAAIAAACIAAAAIAAACIADAAIAAgBIABAAIAAADIgEAAIAAACIAAAAIAAADIAAgBIAAABIABAAIAAAAIgBAAIAAAEIABACIgBABIAAABIAAABIABAAIAAABIgBAAIAAABIABAAIAAABIABABIABAAIAAABIgBAAIgBgBIgBAAIAAgBIgBAAIAAgBIgDAAIAAACIgCAAIAAABIgBgBIgBAAIAAABIgBABIAAABIAAABIgBgBIgCAAIAAgDIgCABIgBABIAAADIgBAAIgBgBIAAgDIgBAAIAAgBIACAAIABAAIAAgDIgBAAIAAABIgBAAIAAABIgBAAIgBABIAAAAIAAABIAAAAIAAABIAAAAIAAABIgBAAIAAABIABAAIAAACIAAAAIAAABIAAACIgBgBIgBAAIAAABIgBAAIAAAEgAgslCIAAABIAEAAIAAgCIABAAIAAgCIgCAAIAAgBIgBAAIAAACIgBAAIAAABIgBAAgAgvlLIADAAIAAgBIAAAAIAAgBIABAAIABgBIABAAIAAgEIgDAAIAAACIAAAAIgBgBIAAADIgBAAIAAABIgBgBgAgPlEIABAAIgBABgAg1lNIAAgBIABAAIAAABgAg0lOgAKQlYIAAgBIgBAAIAAABIgBAAIAAgBIgCAAIAAgBIACAAIAAgBIABAAIAAgCIACAAIAAgBIACAAIAAABIABAAIAAAAIABAAIAAAAIABAAIAAABIgCAAIgBABIAAABIABAAIgBABIgCAAIAAABIgCABgAhBllIAAgBIgDAAIAAAAIABgCIACAAIAAgBIABAAIAAgBIACAAIAAABIAAAAIAAAEgAMJlnIAAgDIABABIAAACgAMJltIAAgBIgBAAIAAgBIABAAIAAgBIgBAAIAAgEIABAAIAAACIABAAIAAgCIAAAAIAAgDIACAAIAAgBIABAAIAAABIgBABIAAACIgCACIAAACIAAABIAAACgAgClvIgBAAIgBABIgBgBIAAAAIABgBIABAAIAAgCIABAAIAAgCIgBAAIAAgBIACAAIAAgCIABAAIAAgBIABAAIAAABIAAABIAAABIABAAIAAADIABAAIAAABIgCAAIAAABIgBAAIAAABIgBAAIAAABgAL0lvIAAgBIABAAIAAgBIgBgBIgDAAIAAgEIABgBIgBAAIAAgBIABAAIAAgHIABgCIAAgCIgBAAIAAABIgBAAIgBABIAAACIgBgBIAAABIgBAAIAAABIgDAAIAAgBIgCAAIAAAOIgBAAIAAgSIgCAAIAAABIgBABIAAAIIgBAAIAAgEIgBgBIABAAIAAgEIgBAAIAAAEIAAAGIABAAIgCAAIABADIgCAAIAAAFIABAAIAAABIgBAAIgBgBIgBAAIgCgCIgCgCIgCgDIgDgBIgCgBIAAgBIAAgBIAAgBIACAAIAAgBIACAAIAAgFIABAAIAAADIABABIAAgBIABAAIAAgBIACAAIAAgBIACAAIABAAIABAAIAAgCIgBAAIgBgBIAAgCIACAAIAAACIABAAIAAgDIgBAAIAAgBIgBAAIgBABIAAgBIABgBIgCAAIAAgBIADAAIAAAAIABAAIAAgBIgBAAIAAgDIADAAIAAABIACAAIAAgBIACAAIAAgBIABAAIgBgBIAAgCIABABIABAAIABgBIgBAAIAAgBIABAAIAAAAIAAAAIAAAAIABAAIABAAIgBgBIACAAIAAgBIgBAAIAAgBIgBgCIAAgBIABAAIABgBIAAABIABABIgBAAIAAACIACAAIABABIAAgBIABAAIAAABIABgBIAAgCIABAAIAAgBIADAAIAAgCIgBAAIAAgBIgBAAIAAgBIgBgBIAAgBIgBAAIgBgBIAAgBIACAAIAAABIACAAIAAABIACACIAAABIAAAAIAAABIAEAAIAAABIABAAIAAACIABAAIAAACIABgCIAAACIgBABIAAACIACAAIABAAIABAAIAAAEIABAAIAAAEIgDAAIgCABIAAAAIACAAIAAADIgBAAIgBgBIAAABIAAAAIAAADIgBABIAAABIgBACIAAACIgBABIAAACIgDAHIAAAAIgBACIAAADgALqmAIABAAIAAgBIABAAIAAAAIgCAAgAL3mYIABAAIAAgBIgBAAgAgIlvIgBgBIAAgBIABAAIAAABIABAAIAAABgAgSl3IAAgBIABAAIAAAAIgBAAIAAgDIABAAIAAgBIABAAIAAABIACAAIAAABIgBAAIAAABIABAAIAAABIgCAAIAAAAIAAAAIgBABgAgpl5IAAgCIgDAAIAAgDIAFAAIAAABIACAAIAAABIABAAIAAABIgCAAIgBABIgBAAIAAABgAMOl6IAAgCIABAAIAAgCIAAAAIAAABIAAABIAAACgAMNl+IAAgCIABAAIABABIAAABgALjl+gAMNmBIAAgBIABAAIAAgCIgBgCIAEAAIABgBIAAABIADAAIAAACIgDAAIAAgCIgBACIgBAAIAAABIgBAAIAAACIgBAAIAAAAgAMKmHIAAgBIACAAIAAABgAMHmHIAAgBIgDAAIAAgBIADAAIABABIAAABgAMambIAAgBIgBAAIAAAAIgBAAIAAgCIgCAAIAAgBIABAAIAAgBIgBAAIAAgBIgBgBIAAgCIABAAIAAABIABAAIAAABIABAAIAAACIABAAIAAACIABAAIAAABIABABIAAABIABAAIAAACgAMUmhIAAgBIABAAIAAABgAMVmigAMSmmIAAgEIABAAIAAADIABABg");
	this.shape_1.setTransform(2.2,-1);

	this.timeline.addTween(cjs.Tween.get(this.shape_1).wait(1));

	// Capa_3
	this.shape_2 = new cjs.Shape();
	this.shape_2.graphics.f("#394C64").s().p("AmAB+IAAgBIABgBIABAAIABgBIABAAIgFgFIgBgCIgFgDIAAABIABAAIAAAFIgBAAIAAABIgBAAIAAABIgFAAIgFgBIABgCIAAgDIgBABIgBAAIAAgBIgBAAIABgCIgDAAIABgCIAAgCIABgBIAAgCIACAAIAAgBIgBgBIgCgBIgCAAIgDABIgCABIgBABIgBAAIgBAAIgDACIAAgCIABgCIgBAAIAAABIgCAAIAAgBIgBAAIAAABIgBABIgCAAIAAgBIgBAAIAAgBIgBAAIAAgBIgBAAIgBgCIgCgBIgGgCIABgCIgCAAIABgCIAAgEIgGAAIgBgBIgDgBIAAAAIABgCIABAAIABgBIACAAIAAgBIgCAAIgDgBIAAgDIACAAIAAgBIADAAIAAgBIgEgBIABgBIAAgDIAEACIANAAIAAgDIgBAAIAAgCIACAAIAAgBIABAAIAAgBIABAAIAAgBIABgBIgDgDIABAAIABgCIABgBIAAgFIgBAAIgBgBIAAgCIABgBIAAAAIABAAIABgBIAAgBIABgBIAAgBIAAgBIAAAAIAAgCIgBAAIAAgKIABAAIAAgBIgBAAIABgDIAAAAIAAgBIAAgBIgDAAIABgBIgBgDIAAgPIgDABIAAgDIgBAAIAAgDIABgEIgCAAIAAgCIgDAAIAAgCIABgDIAAgCIACAAIgCgIIADAAIAAABIAHAPIAAgCIACgCIACgDIADABIAEAAIABgEIAIAAIAAAAIACAAIACAHIACABIABAAIAAgCIABgCIACABIAEAAIAAAEIACAAIAAABIABAAIAAABIACAAIAAAAIABAAIABAAIAAgCIgCAAIAAAAIACgBIACAAIgBgBIAAgBIACAAIAAgDIgBAAIAAgDIAFAAIABABIAEAAIABABIAAAAIAAgDIAJAAIABABIACAAIAAAGIABAAIAAABIADAAIAAADIABAAIAAABIgCAAIAAABIgBAAIAAACIABAAIAAACIADAAIAAABIABAAIAAAAIABAAIAAAAIACAAIABAAIABAAIABACIABAAIAAgBIABAAIABgBIACAAIAAABIABAAIAAABIABgCIACAAIgBABIgBAAIAAACIACAAIABAFIABgBIABAAIAAABIAAAAIAAABIABgBIABAAIAAABIABAAIABgBIABAAIAAABIABAAIAAABIABgBIABAAIACgBIAAABIACABIgBAAIAAABIgBAAIAAABIgCAAIAAABIgCAAIAAACIgCAAIgBABIgBAAIgBgDIgBAAIAAgCIgBgBIgCACIgBADIgCACIAAABIACAAIAAACIABAAIAAACIgCAAIAAACIAFAAIABABIAEAAIgBABIgBAAIAAABIABAAIgBABIgCAAIgBABIAAAAIgDgBIAAAGIgDAAIAAACIACAAIAAAAIgBAAIAAAEIgBABIAAABIABAAIAAABIgCAAIAAgDIgJAAIAAADIgCAAIAAACIAEAAIABAAIAFAAIAAAAIABAAIAAACIABAAIABgBIAAADIABACIAAABIAEAAIAAABIAAAAIABgBIABABIgEAEIAAABIABAAIAAAIIgCgBIgBAEIgBAAIAAABIgBAAIAAABIgBAAIAAgBIgBgBIAAABIgDAAIAAgBIgCgCIAAADIgBgBIAAADIgBgBIAAABIgBAAIAAgBIgCAAIAAABIABAAIABAAIAAABIgBAAIAAACIABAAIAAABIACgBIABABIAAABIgGAAIABACIAAABIABABIgGgBIgDAAIgBABIAAABIgBAAIgCgBIAAAEIgBACIABAAIABABIAAgBIACAAIgBABIAEAAIAAACIADAAIAAACIgEgBIAAAEIABAAIgCADIgCAEIgBABIgBADIAAACIACAAIAAADIgCAAIgCACIAAgBIgBABIAAABIgCAAIgCACIAAAAIgGgCIABgEIgFAAIAAACIgBADIgBAAIABABIAAACIABAAIAAAAIABAAIAAABIgDAAIAAABgAE/BsIgBgBIAIgBIAAgcIgsAAIAAgaIABgKIAAgeIAVAAIAJABIACgNIAEAAIAAgLIAEAAIAHAAIAAgNIAPAAIAAglIgBAAIgHgBIAAgQIgNAAIgEgBIgDACIgGAAIAAgBIgBgBIAAgDIABAAIAAgBIABAAIAAgBIAFAAIAAABIACAAIABAAIAAAAIACAAIAAgBIACAAIAAgBIACAAIAAgDIABAAIAAgBIABAAIAAgBIABgBIADAAIAAABIADAAIAAABIACAAIAAgBIAAAAIAAgBIABAAIAAgBIABAAIAAAAIABAAIABAAIAAgBIABAAIAAgBIgBgBIAAgBIABAAIAAgEIABAAIAAgCIgBAAIAAgFIABAAIAAgBIABAAIAAgBIABAAIAAgCIgBAAIAAgDIgDAAIAAgBIgEAAIAAgCIACAAIAAgBIABAAIAAgBIABAAIAAgBIACAAIAAgCIABAAIAAgDIABAAIAAABIABAAIAAgBIABAAIAAgBIADAAIAAABIACAAIAAABIgBACIABAAIAAABIACAAIAAABIABAAIAAABIADAAIABAAIABABIABAAIAAgBIACAAIAAABIABAAIABABIAAgBIABAAIAAABIAFAAIAAABIABAAIAAABIABABIAAABIAAAAIAAADIABAAIAAAAIABAAIAAABIABAAIAAABIACAAIABABIgBABIABAAIAAACIABAAIAAgEIABAAIAAgBIABAAIAAgBIgCAAIgBgBIgBAAIAAgBIgEAAIAAgCIACAAIAAgCIACAAIAAABIABAAIAAABIABAAIAAABIABABIAAABIABAAIABABIAAAAIACACIAAABIABAAIAAABIACADIAAACIABABIAAABIgBABIgBAAIAAABIABABIABAAIABACIAAABIABAAIAAABIABAAIAAAAIAAABIAAABIABACIABAAIAAACIABABIABAAIAAACIACABIAAgBIACACIAAACIACACIABACIABAAIABABIABAAIAAAHIABABIAAABIABACIAAACIABABIAAACIABABIAAABIAAAAIAAACIABAAIAAABIABABIAAADIABAAIAAABIgBAAIAAAFIABAAIAAAFIABAAIABABIgBAAIAAABIABAAIAAAFIABABIAAABIACAAIABAAIADAAIABABIACAAIAAgBIgBAAIAAAAIgBAAIgBgBIAAgEIABgBIgBAAIAAgDIACAAIAAAAIABAAIAAgBIgBgBIAAgBIgBAAIABgBIgBAAIAAgCIABAAIAAgDIABAAIAAgBIACAAIAAgBIABAAIADgEIAAADIgBAAIAAABIgBABIgBABIAAACIAAABIgBAAIAAADIgBAAIAAADIABABIAAADIABAFIAAAAIABABIAAABIABAAIAAADIgBAAIAAADIABAAIAAABIgBABIAAAFIgBABIAAAGIABAAIAAAEIABAAIAAABIABAAIAAAAIABAAIAAABIABAAIABABIAEAAIAAAAIABAAIAAABIAFAAIABgBIAAABIACAAIAAACIgBAAIAAABIgBABIAAABIgBAAIAAAAIgBABIAAABIgBABIAAABIgBABIAAACIgBAAIAAABIgBABIAAABIgBABIAAACIgBACIAAACIgBABIAAACIgBAAIAAADIABABIAAACIgDAAIAAgBIgEAAIgBABIAAABIgBAAIgBACIAAACIgBACIAAABIgBABIAAACIgBABIAAABIgBACIAAAEIgBAAIAAACIgBABIAAAHIgBAAIAAABIgBAAIAAACIgBABIAAADIgCACIgBAAIgBAAIAAACIgBAAIAAAEIgBABIAAACIgBAAIAAADIAAAAIAAACIgBAAIAAABIgBAAIAAABIgBAAIAAABIgBAAIAAABIgBAAIAAABIgCAAIAAACIgCADIAAABIgyAAIAAABIgBAAIgCAAIAAACIgBAAIAAgCIgCAAIAAACIgDAAIAAADIgCAAIAAADIgCAAIAAAEIACAAIAAgCIACAAIACAAIACAAIABABIgCAEIgDgCIgBAAIgDAEIgDAFgAlJA1IABABIgCAAIgBgCIAAgBIgBAAIAAABIgBgBIAAgBIgBAAIgBgBIACAAIADgBIAAACIACAAIgBABIADAAIAAAAIAEAAIAAABIgCgBIAAADgAGwg4IAAAAIgBgBIAAgDIABgBIgBAAIAAgDIgBAAIAAgBIgCAAIAAAAIABAAIAAgBIgBgBIAAgBIAAgCIgBAAIAAgBIABgBIgBgBIgBAAIAAgBIgCAAIAAAAIgBgBIAAgBIABgBIAAgBIABABIABAAIAAABIABAAIABABIAAABIABAAIAAADIABABIAAACIACAAIAAgCIgBAAIAAgDIgBAAIAAgBIABAAIABABIAAACIABADIAAAMgAGvhKIAAAAIABAAg");
	this.shape_2.setTransform(36.4,-40.2);

	this.shape_3 = new cjs.Shape();
	this.shape_3.graphics.f("#6C829A").s().p("AovGeIgBgBIgBgBIgBgBIgHgEIgEgEIgEAAIAAgBIgDgCIAAgBIABAAIACgEIACgCIgJgKIAAgCIgBgCIAHAAIACgBIAGAAIAIgBIAEAAIAAgCIgDABIgGAAIgDABIgIAAIgGgFIgDgGIAAgBIABAAIAFgBIACgBIAAgKIgGgOIAFgBIABAAIAAgDIgBgBIgBABIgCgEIAAgBIgBgBIgFAEIAAAHIABAEIAAAGIgBAAIgBgDIAAgGIgBAAIAAgJIgCgBIgBAAIAAgBIgBgBIgBAAIAAgBIgBAAIAAgBIgBAAIAAgBIgBAAIAAgEIABAAIAAgCIgBAAIAAgBIgCAAIAAgCIgBAAIAAgBIgBAAIAAgBIABAAIAAgBIgBAAIAAgBIgBAAIAAgBIABAAIgBgBIAAgBIgBAAIABgBIAAgBIgBAAIAAAAIgBAAIgBgBIABAAIAAgBIgBAAIAAgGIAAAAIAAgEIAAAAIABgBIgBgBIAAgBIAAAAIAAgBIAAAAIAAgBIACAAIAAgBIgBAAIgBAAIAAAAIgBAAIAAAAIgBAAIgCgBIgOAGIgCAEIgGgFIAAgBIgBAAIAAgCIADgCIACgBIAAgBIAEAAIAAABIABAAIAAgBIACAAIAGgEIABgBIAAgBIgBgBIAAgBIABgCIABAAIgBgCIAAgCIACAAIAAgBIgBAAIAAAAIgBAAIAAgCIAHgCIgEAAIgBgBIAEgDIABgBIABgBIABgFIABAAIgBgCIAAgBIACAAIAAABIADAAIAAgBIABAAIAAgCIABAAIAAgCIABAAIAAgCIABAAIAAgCIAAAAIAAABIABAAIAAABIACAAIAAgCIABAAIAAgCIACAAIAAgBIgCAAIAAgBIgCAAIAAgBIgDAAIAAgBIgBAAIgBgBIgBAAIAAABIgEAAIAAgBIgCAAIAAgBIgGAAIAAgEIgCAAIAAgCIgCAAIAAgBIgCAAIAAgBIgBAAIAAgBIgDAAIAAgBIgCAAIAAgBIgBAAIAAABIgEAAIAAABIgDAAIAAgBIgBAAIAAABIgBAAIgBABIAAABIgEAAIAAACIgBAAIAAABIgCAAIAAACIgFAAIAAAAIgBAAIAAAAIgEAAIAAgBIgBAAIgBgBIgCAAIAAgBIgBAAIAAgEIgBAAIAAACIgCAAIAAABIgCAAIAAgBIgCAAIgNgDIAAgCIABgBIAAgCIgBAAIAAgCIABAAIAAgDIACAAIAAgCIgBAAIAAgCIgBAAIAAABIgCAAIAAABIAAAAIAAABIgBAAIAAABIgDAAIAAAAIgEAAIAAAAIgDAAIAAgBIgDAAIAAABIgCAAIAAADIgBAAIAAABIgCACIAAAAIAAABIgBAAIAAABIgEAAIgBABIgFAAIgBgBIgEAAIgDAKIAEADIAIANIglAAIgBABIAAgCIgCgCIgBAAIAAgCIgBABIAAABIgCACIgBAAIAAABIgBAAIgBABIAAABIAAAAIgBABIgCAAIAAABIgBAAIAAgBIgBAAIgBgBIAAgBIABgBIgBAAIAAgBIgBgBIAAAAIAAgBIgBAAIgBgBIgBAAIgBgBIAAgBIgBAAIgBgBIgCAAIgBABIgBgBIgBAAIAAgBIgBAAIgCgBIAAgBIgBgBIAAgBIgBgCIAAgBIgBgBIAAAAIgBgBIABAAIAAgMIgBgBIAAgCIgBgBIgBgBIAAgBIgBAAIAAgBIgCgCIAAgBIgBgBIAAgCIgBgBIgBgBIgDgDIAAgCIABgBIAAgCIgBAAIAAgDIACAAIADgBIADAAIABgBIACAAIAAgBIAGAAIAAgBIAFAAIAAgBIAIAAIAAgBIAMAAIABgBIASAAIAAgBIAMAAIABgBIAHAAIABgBIAEAAIAAgBIAPAAIAAgBIAKAAIAAgBIAMAAIAAgBIAXAAIAAABIABAAIAAABIABAAIABABIAAABIABAAIAAABIABAAIAAABIABABIABACIABABIABABIAAACIAAAAIAAABIABABIAAABIABAAIAAABIACAAIAAABIACAAIABABIABABIACABIACACIADAAIABABIACAAIAAABIABAAIABgLIAAgBIABAAIAAgBIABAAIAAgBIACgBIAJAAIAAgBIAGAAIABgBIAEAAIAAgBIADAAIABgBIADAAIABgBIABAAIABgBIABAAIABgBIACAAIACgBIABAAIAAgBIABAAIAAgBIABAAIABgBIAAgBIACAAIAAgBIACAAIACgBIACAAIAAgBIACAAIABgBIABAAIACgBIAAgBIACAAIAAgBIAAAAIABgBIABAAIABgBIABAAIACgBIABAAIACgBIABgBIADgBIABAAIAAgBIADAAIABgBIABAAIABgBIACAAIAAgBIACAAIAAAAIACAAIAAgBIABAAIABgBIAAAAIACgCIABAAIAKgDIABgBIABAAIAAgBIABAAIACgDIADgCIADgCIAAgBIABAAIAAgBIABAAIAAAAIAAAAIABgBIABAAIAAgBIABgBIACgBIACgDIAAgBIABgBIABAAIAAgBIABgBIAAAAIAAgBIABAAIABgCIABgBIAAgBIABAAIAAgBIACAAIABgBIABAAIAAAAIAAgBIACAAIAAgBIABAAIACgCIABAAIACgBIABgBIABAAIACgCIAEgCIABAAIABgBIABAAIABgBIABAAIAAgBIABAAIACgBIABAAIABgBIACAAIABgCIACAAIAFgCIABAAIABAAIABAAIABgBIACAAIAAgBIACAAIABgBIABAAIAAgBIACgBIABAAIABgBIACAAIABgBIABAAIAAgBIABAAIABgBIABAAIAAgBIABAAIAAABIABAAIAAgBIABAAIAAgBIAEAAIAAABIAAAAIAAABIACAAIAAgBIABAAIAAgBIAEAAIAAgBIABgBIAAgBIgBAAIAAgBIACAAIAAgBIADAAIAAgBIABAAIAAgBIABAAIAAgBIABAAIAAgBIADAAIAAAAIABAAIABACIABAAIAGAGIABAAIAFAFIACgFIADgFIAAABIAFAEIAAABIACAEIgGAFIABABIAFACIAEAEIAAABIAEADIACADIAIgHIACACIABABIAGAFIAAgBIACACIAAACIgBAAIgDADIACAEIgBACIABAAIABACIABABIAHAGIAAABIABABIACAAIAAgBIACABIAHAAIABABIADAAIAAAAIgBACIgCAHIgDgBIAAAIIgBABIAAACIAIAAIABABIABAAIAAAEIAFABIgBAAIAAADIgBABIAAADIgBABIgFAAIAAAEIgBACIAAABIgGAAIAAACIgGAAIgBABIAAACIgBAAIgBgBIgBAAIgCgBIAAACIgCABIAAACIgBABIAAACIgBAAIAAAEIgBACIAAACIgDgBIgBAAIABgDIABgFIgDAAIgBgBIgEAAIAAABIgFAAIgCgBIgDAAIAAABIgBACIAAACIACAAIABABIAAACIgBAAIAAAFIAAADIAAAEIgHAAIABABIAAABIACABIAEAFIgBABIgDADIgCgDIADgDIgDgDIAAABIgBAAIgCACIAAAAIgCACIACABIABADIACACIgCABIAAADIgBADIAAAIIgDAJIgCAEIgBACIAAABIgBABIgBADIABAAIAAABIABgBIAFAEIAAABIABABIAAABIADAAIAAAFIgBABIAAADIgCgBIgCAAIgBACIAAAGIgEgBIgIAAIgBgBIgCAAIAAgFIABgEIgDAAIgHACIAAAGIAEAAIAAACIgDAAIgBgBIgBAAIAAAEIgCAAIAAgBIgFABIABABIADAAIgBAEIAEAAIgBABIgEAAIAAABIgDAEIgGAAIgCABIgBgBIgBABIAAABIgBAAIAAABIgEAAIAAABIgBAAIAAAHIgBABIAAADIABACIgCAAIAAABIgDAAIgCABIgDAAIgBABIgDAAIgBABIgCAAIgCABIgCAAIgBADIADAAIACgBIABABIAAABIgBABIAAACIgBAAIAAACIABAAIAAABIgBAAIAAADIgBAAIAAABIABAAIAAABIgBAAIAAABIABAAIAAADIADAGIAAADIABABIAAADIgBgBIgIAAIgCgBIgCAAIgBABIgBAAIAAgBIgCAAIgBADIAAACIgBADIAAgBIgBgBIgBAAIgEAEIAAABIAAAAIgIAAIAAAAIAAAAIAAgBIgDAAIAAABIgEAAIAAAAIgDAAIAAAAIAAAAIAAgBIgBAAIAAgCIgBAAIAAgBIgLAAIAAgBIgBAAIAAgBIgBAAIAAgCIgBAAIAAgBIgBAAIAAABIgBgBIgBAAIAAgBIgDAAIAAgBIgCAAIgBgBIAAgBIgBAAIAAgBIgBAAIAAgBIgFAAIAAgCIgBAAIAAgBIgDAAIAAgBIAAgBIAAgFIAEAAIAAgBIgBAAIAAgDIgBgBIgBAAIAAABIgBAAIAAABIgBAAIAAABIgBAAIgEAEIgBAAIgBgCIgBAAIgBgBIgIAAIAAABIAAACIACACIgBAAIgBABIAAABIgBAAIgBABIgCAAIAAAAIgBAAIAAACIABAAIAAADIACAAIAAABIgGAAIAAACIAAAAIAAABIgBAAIAAABIABAAIAAACIAAABIAAABIAAADIgBAAIgBABIgBAAIAAADIABAAIAAACIABAAIAAABIgBAAIAAAFIgBAAIAAABIABAAIgBABIAAAIIABAAIAAABIgBAAIAAADIgBAAIAAABIABAAIAAABIgBAAIAAAGIgBAAIABACIAAAFIABABIABACIABAAIgBABIgBAAIgCABIgBAAIgCABIABACIABAAIgCAEIABAAIgBACIgBAAgADsGcIgCgBIAAABIgCAAIAAgBIAAAAIAAABIgBAAIAAgBIgBAAIAAgCIgBAAIAAgBIgEAAIAAgBIgBAAIAAgBIgCAAIAAABIAAAAIAAgCIgCAAIAAgBIgBAAIAAgCIgBAAIAAgBIgDAAIAAgBIABAAIAAgCIgBAAIAAABIgBAAIAAgCIAAAAIAAgBIgBAAIAAgDIgBAAIAAABIgBAAIgBABIAAgBIgBAAIAAABIgBABIAAgBIgFAAIAAgBIgBAAIAAACIgCAAIAAgBIgCAAIAAgDIgBAAIAAgCIgBAAIAAgBIAAAAIAAgBIAAAAIAAgCIAAAAIAAgBIgCAAIAAgBIgCAAIgBgBIgBAAIAAgBIgCAAIAAgBIABAAIAAAAIgEAAIAAAAIgDAAIAAACIgCABIgDAAIAAgBIgDAAIAAABIgCAAIAAABIgBAAIgCACIgCAAIAAABIAAAAIAAABIgBABIgBAAIgBABIAAgBIgDAAIAAgBIgCAAIAAABIAAAAIAAADIgBAAIAAACIgBAAIgBABIAAABIgBAAIAAABIgBABIAAgEIgQAAIAAgTIADAAIAJABIAAgMIAGAAIAAgHIgRAAIABgRIAKAAIAGgBIAAgWIgEABIACgVIAFAAIgBgaIABAAIADAAIgBgSIgHAAIAAhRIgBgCIgBgEIAEgBIAChqIgDgBIAAgpIAiACIgBABIAGAAIgBAGIAFAAIAFABIADAAIADABIADAAIABgDIgGAAIAAgDIADAAIAAgEIAFAAIABgEIADAAIAAANIAeAAIAAAEIAcAAIAAAEIAjAAIABABIAAAGIAKAAIgBgDIAWAAIAAACIAHAAIAEgBIARAAIgBABIgCAEIgBABIAAABIgBAAIgFAUIgCACIALABIAOADIAFACIAWAHIAAgCIAAgBIABgBIAFgKIABgBIAAgDIAAgDIAAgCIADgHIAEABIACABIADAAIAAAAIABAAIAAABIgBAAIAAABIAJAAIACABIAdAGIAFAAICBAOIAAABIgBAAIAAACIgBAAIAAACIgBABIAAACIgBAAIAAABIgBAAIAAACIgBABIAAABIAAABIAAABIgBAAIABABIgBAAIAAACIgBAAIAAABIgBAAIAAACIgCAAIAAABIgBAAIAAABIAAAAIAAAEIgBAAIAAACIgBAAIAAACIgBAAIAAADIgCAAIAAABIgBAAIAAADIgBAAIAAADIgBAAIAAAEIABABIAAABIgBABIAAABIgBAAIAAABIgBAAIAAADIgBABIAAABIABABIAAADIgBAAIAAABIgBAAIAAABIAAAAIAAABIgBABIAAADIgBAAIAAACIgBAAIAAAAIgCAAIAAAEIgBABIAAACIAAABIAAABIAAABIAAACIAAABIAAADIAAABIAAABIAAACIgBAAIAAACIgBAAIAAABIgBABIAAABIgBAAIAAABIgCAAIAAABIgBAAIAAABIgBAAIAAABIgBAAIAAABIgBAAIAAABIgBAAIAAACIgBAAIAAABIAAAAIAAADIgBAAIABABIgBAAIAAADIgBAAIAAABIgBABIAAADIgCAAIAAAIIgBABIAAAFIAAAAIAAAEIgBABIAAAEIgBAAIAAAMIgBABIAAAEIgBAAIgBABIAAABIgBAAIAAABIgBAAIAAABIgBAAIAAAEIgBAAIAAACIABABIAAADIgBABIAAAGIABABIAAAAIgBAAIAAABIABABIgBAAIAAAHIgBABIAAACIgBAAIAAACIAAAAIgCACIAAABIgBAAIAAABIgBAAIAAAAIgCABIAAABIgBABIAAABIAAAAIAAACIgBAAIAAADIgBABIgBABIAAABIgBAAIgBABIAAABIgBAAIAAABIgBABIAAABIgBABIAAABIgBAAIAAADIgBAAIAAADIgBAAIAAAKIAAAAIAAAGIgBAAIAAAFIgBAAIAAABIABAAIgBABIABABIAAABIgBAAIAAAFIgBAAIAAABIgBAAIAAABIgDAAIAAgCIgCAAIAAABIgKANIgHgFIgdAAIAAhIIg/AAIAAgRIgLAAIgFgBIgBgCIgBAAIAAgBIgDAAIAAgBIgCAAIAAABIgEAAIAAABIgDAAIgCgBIgCAAIAAABIgBAAIAAABIgBAAIgBABIAAgBIgCAAIAAgBIgBAAIAAgBIgBAAIAAgBIgBAAIAAgBIgBAAIAAgBIgBAAIAAABIgCAAIAAABIgCAAIAAABIgDAAIAAABIgBAAIgBABIgCAAIAAABIgCAAIAAgBIgBAAIAAgCIgBAAIAAgBIgBAAIAAABIgCAAIAAgBIgBAAIAAgBIgCAAIAAABIgBAAIAAABIgCAAIAAABIgCAAIAAACIAAAAIgBABIgBAAIAAABIgCAAIAAABIgBAAIAAABIgBAAIAAABIgBAAIAAACIgBABIAAACIgBAAIAAAFIgBABIAAAEIgBAAIAAABIAAABIAAABIgBAAIAAABIgBAAIAAABIgBAAIAAACIgCAAIAAADIACAAIAAABIABAAIAAADIgBAAIAAABIgCAAIAAABIgBAAIAAABIgBABIAAAAIAAACIgBAAIAAABIgBAAIAAABIgBAAIAAACIgBAAIAAAAIgCAAIAAABIgCACIAAABIgBAAIgBABIAAABIAAAAIAAABIgBAAIgCACIADAAIAAABIgBABIAAAEIgBAAIAAACIgBAAIAAABIABAAIgBAAIAAABIABAAIAAACIgBAAIAAABIABAAIAAABIgBAAIAAABIgBAAIAAABIgCAAIAAADIgCAAIAAABIAAAAIgBABIgBgBIAAABIgBAAIAAABIgCAAIAAgBIgBAAIAAABIgBABIgBAAIAAABIgCAAIAAABIgCAAIAAABIgBABIAAAAIgFAAIgDADIAAABIABABIACAAIAAAEIABAAIAAACIgCAAIAAACIgBAAIAAABIgBAAIAAACIgBAAIAAABIgBABIAAABIgBAAIgBABIAAADIgBAAIgBABIAAABIABAAIAAABIABAAIAAACIgBABIgBAAIAAADIgBAAIAAABIACAAIAAACIgBABIAAgBIgBABIAAABIABAAIAAABIgBAAIAAABIAAABIgBAAIgBABIgBAAIgBABIgCAAIAAABIgCAAIAAABIAAAAIgBABIgCAAIAAABIgCAAIAAABIgBAAIAAACIABAAIAAADIgBAAIgBABIAAABIABAAIgBABIgCAAIAAAAIgBAAIAAACIgBAAIAAACIABAAIAAACIgBAAIAAADIgBAAIAAgBIgBAAIAAABIgBAAIAAABIgCAAIAAACIgBAAIAAABIgBAAIAAABIAAAAIAAABIgCAAIgBABIgDAAIAAACIgDAAIAAAAIgBAAIgBABIAAAAIAAACIgBAAIgBABIABAAIAAACIABAAIAAAEIgBAAIAAACIgBAAIAAABgApoDwIAAgBIgDAAIAAgBIgCAAIAAgCIABAAIAAAAIABAAIAAgBIADAAIAAACIABAAIAAABIAAAAIAAACgAiKAjIgBgBIgFAAIAAgEIgBgEIAAgCIgCAAIAAgBIgEAAIgCgBIgBAAIAAABIgBAAIAAABIgBAAIAAABIgNAAIAAgDIgDAAIAAgDIADAAIAAgJIgFAAIAAgpIgHgFIgCgBIAAgBIgCABIABACIgDABIgBAAIAAADIADgBIADAAIAAADIACAAIAAAEIgBABIgBAAIgBACIgGgDIgCAFIgBAAIAAABIgBAAIAAgHIgIAAIgBgLIABgCIgBgDIADgBIAJAAIgBgBIgBgBIgGABIgDAAIADgIIABgFIgFADIgDABIgCABIgGAAIAAgCIABAAIAAgBIACgEIAAgBIAAgCIAAgBIABgDIgCgBIABgCIgBAAIAAABIgEAAIAAADIgHAAIgFgBIgBAAIgBgBIgBAAIgBgBIAAgJIAMAAIgBgEIgKAAIAAgCIgIAAIgDgDIgCgBIgBgBIgBACIgBgBIAAgCIgFABIgBgBIgLgGIgDABIgBABIgDAAIgKgDIgBgBIgCAAIAAgBIABAAIAAgBIAAAAIAAgBIABAAIAAgCIABAAIABgBIAAgBIABAAIAAgBIABAAIAAgBIABAAIAAgEIgBAAIAAgBIABAAIAAgCIABAAIAAgDIABAAIAAgCIABAAIAAgBIABAAIAAgBIABAAIAAgBIABAAIAAgBIABAAIAAgBIACAAIAAgBIABAAIABgBIABAAIAAgBIAAAAIAAgBIACAAIAAgBIACAAIAAgBIABAAIAAgBIACAAIAAgBIABAAIAAgBIABAAIAAgBIABAAIAAgBIACAAIAAgBIABAAIACgBIABAAIAAgBIACAAIAAgBIABAAIAAgBIABAAIABgBIABAAIAAgBIABAAIAAgBIABAAIAAgBIABAAIAAAAIABAAIAAgBIABAAIAAgBIACAAIAAgBIACAAIAAgBIADAAIAAgCIABgBIABAAIAAgCIAAAAIAAgBIABAAIABgBIAAgBIACgCIAAgCIABAAIAAgBIABAAIAAgBIABgBIAAgCIABAAIAAgBIABAAIAAgBIABAAIAAgDIABAAIAAgCIABAAIAAgDIABAAIAAgBIACAAIAEACIAIAAIAEABIAAgEIADABIAAgBIACAAIACABIAEAAIABABIAAADIACAAIAAABIAEAAIAFACIACAHIAAADIABAAIAAACIAFABIADAAIAEgBIAFgFIAAAJIABAAIgBABIgBABIgBACIAAABIAAAAIgCADIABABIABAAIABABIACABIABgBIAFAAIAAgBIAIAFIABACIgIAIIABAAIAHABIAAgBIAJgEIAAAAIAAABIAKAAIACABIADABIAAgBIAEADIAGABIACAAIAFADIACABIgBADIgBAAIAAACIgBABIAAABIgBABIgDAHIgBgBIgBABIAAABIgHAMIAEABIAAgBIALAEIAHgJIACAAIgDACIADABIAAACIADABIAAABIACAAIAAACIgBAGIgHADIAEAJIABAAIAAAFIABADIAAAEIAAADIACAAIAFACIAEABIgBAIIgFABIgDAAIAAAEIABAGIgCgBIgBACIADABIAAAEIABAAIAAABIABAAIABABIABAAIgBABIAAABIABABIABAAIAAACIACABIAAAAIADACIAEABIABABIABABIACAAIABgBIAHAAIAEgBIADAAIABAHIgBAZIgOAAIABgCIAAgNIABgDIAAgDIgGAAIgBABIgEAAIgDgBIgpgBIgFgBIgJAmIgKgEIABAKgAJ1h7IAAgBIAAAAIAAgBIAAAAIgBAAIgBAAIAAgEIABAAIAAgBIABAAIAAgDIAAAAIAAAEIABABIAAACIACAAIAAADgAJviDIAAhdIgkAAIAAgVIhigBIAAgFIgEgnIgBgDIAAgJIgBgCIAAgJIAIAAIA/g7IAmAAIAAACIgBAFIAAAIIAaADIAAgUIAWAAIACABIAQAAIgGgUIAPABIgCAGIAPAAIAAgMIgFAAIAYgEIAAgBIALAAIABABIAQAJIAEgFIADgDIABAAIADABIABgDIAAgCIgCAAIgCABIgCAAIAAACIgCAAIAAgFIACAAIAAgDIACAAIAAgDIADAAIAAgBIABAAIAAABIACAAIAAgBIACgBIABAAIAAgBIAuAAIAAABIgBAAIgBABIAAAAIgBAAIAAABIgBAAIAAACIgBAAIAAABIgBAAIAAABIgBAAIAAABIgBABIAAABIgBABIAAACIAAAAIgBABIgBAAIAAACIgBAAIAAACIgBAAIAAACIgCAAIACABIAAACIgCAAIAAABIgCAAIAAABIgBAAIgBABIgBAAIAAABIgCAAIAAABIgBAAIgCACIgCAAIAAABIgBACIAAABIgBABIAAADIgBAAIAAABIgBAAIAAABIgCAAIAAABIAAABIgBAAIAAABIgBAAIAAABIgBAAIAAABIgBAAIAAABIgCAAIAAABIgBAAIAAACIgBAAIAAABIgBAAIAAABIgBAAIAAABIgBAAIAAABIgBAAIAAABIgBAAIAAACIAAAAIgBAAIgBABIAAABIgBAAIAAABIgCAAIAAABIAAAAIAAABIgBAAIAAABIgBAAIAAABIgBAAIgBABIgBAAIAAABIgBAAIAAABIgBAAIAAABIgBAAIAAgBIgBAAIgCgCIgBAAIAAgBIgLgDIgBAAIgBABIgCADIAJAEIAGgDIACADIAAABIgBABIgBAAIgCACIAAABIgBAAIAAABIgBAAIAAAAIgCAAIAAABIgDADIgBAAIAAABIgEAAIAAACIgBABIgBAAIAAABIgBAAIgBABIgBAAIAAABIAAAAIgCACIgDAAIAAABIAAABIgDAAIAAACIgBABIgBAAIgBABIgBAAIAAAAIABAAIgBABIgCAAIAAABIgBAAIAAABIgBAAIAAACIgBAAIAAABIAAABIgBAAIAAABIgBAAIAAABIgBAAIgDACIAAABIAAAAIAAABIAAABIgBAAIABABIgCAAIAAABIABAAIgBABIAAABIgBAAIAAABIgCAAIAAACIgBAAIAAABIgBAAIAAABIABAAIgBABIAAABIgCAAIAAABIgBAAIAAABIgBAAIAAAEIgBAAIAAABIgBAAIAAACIAAAAIAAACIgBAAIAAABIgBAAIAAACIgBAAIAAABIgCAAIAAABIAAAAIAAACIgBAAIAAACIgBAAIgCADIABABIABAAIAAABIgBAAIAAADIgBAAIAAABIgBAAIgBgBIAAABIgBAAIAAABIgBABIgBAAIAAAFIgDAAIgBABIAAABIAAAAIAAABIgBABIAAABIgBAAIAAABIgBAAIAAABIgCAAIAAABIgBAAIAAABIAAABIAAABIgBAAIAAAAIgBAAIAAABIgBABIAAACIgBAAIAAADIgBAAIAAACIgBAAIAAABIgBAAIAAACIgBABIAAACIgBAAIAAACIgBAAIAAABIgBAAIAAACIAAAAIAAACIgBABIAAACIgBABIAAAEIgBAAIAAACIgBABIAAADIgCAAIAAADIgBABIAAAKIAAACIAAACIAAAAIAAAMIADACIABAAIAAgBIABAAIAAADIgBAAIAAAEIABAAIAAABIgBAAIAAACIABAAIAAACIABAAIAAABIABAAIAAADIAAAAIAAACIACAAIAAABIABgBIACAAIAAAEIABAAIAAABIgBAAIAAAAIgCAAIAAAAIgBAAIAAgCIgCAAIAAgBIgBAAIAAgBIABAAIAAgDIgBAAIAAgBIgBAAIAAgBIgEAAIAAADIACAAIAAABIABAAIAAADIABAAIAAACIABAAIAAAAIgBAAIAAAGIABAAIAAABIACAAIAAABIgBAAIAAACIAAAAIAAABIAAAAIAAABIgBAAIAAADIgCAAIAAABIgDAAIAAABIgBAAIAAABIAAABIAAACIgCAAIAAACIgBAAIABABIAAABIgBAAIAAACIgBAAIAAADgAJ1iFIAAgCIABAAIAAACgAJ1iFgAJ2iHIAAgCIgBAAIAAgBIADAAIAAgBIgCAAIAAgBIACAAIAAABIABAAIAAgBIAEAAIAAABIgCAAIAAABIgCAAIAAABIgBAAIAAACgAJ9iNIAAgCIABAAIAAACgAKAiUIAAgEIABAAIAAgCIABAAIAAAEIgBAAIAAACg");
	this.shape_3.setTransform(-2.8,10.9);

	this.timeline.addTween(cjs.Tween.get({}).to({state:[{t:this.shape_3},{t:this.shape_2}]}).wait(1));

	// Capa_4
	this.shape_4 = new cjs.Shape();
	this.shape_4.graphics.f().s("#65653D").ss(0.5,1,1).p("AKLoxIgJgCQgcgEgvgPQgrgPgGAAQgygDgKAIQgPAKgJABQgGABgOgCQgMgBgPADQgqAIgDACQgIAHgHAFQgiAXhyANQiMAPgvAOQgKADgKAFQgLAHgGADQgHADgNADQgMADgHADQgJAEgIAGQgKAHgHAEQgYANgKAPQgJAMgFAZIAHBTIApAFQACADADAOQABAFAPAFQAWAHAGgFQAPgNABAAQAHADAPAQQAOAQAEAJQAFAMgFgBQgEgBAIANQAGALADAAQACAAAEAOQAHACACgDQABgCAAgDQACgCAfAiQANAPABAPQABAUAGALQAEAIAFAFQADADAHAGQADACAMATQARAXAcASQAPASARAJQAJAJAAAsQAABjABARQAAAGgCAyQgCAmAGAUQAEANgBAIQgBAGgEATIABAhQAAAIgRAAIAAATIARADQgBABgKALQgHAIgBACQgCAMAGABQAEABAMACIAAAAIABgCQADgEAEgDIAZgHIAJALQAEACADAAQACAAAEACIAXAPQAIgLAGgEQAHgFACgDQADgEADgJQABgEANgHIAJggQADgGAJgFQAJgFACgFQACgFAAgGQAAgDAHgIQAGgHAFgQQAFgPAGgFQAJgGAZACQAOACAVACIAAARIA+AAIAABHQAFABAPABQAMABAFABQAMgJAFgEQAFgjAHgLQAIgMAFgbQAAgEACgFQACgFABgHQAEgaAIgQQAIgRABgDQAEgXAIgTQACgEAQgiQADgGACgRQABgPAEgHQACgDALgKQAHgGAAgIQgKgEgMAGQgJAEgEAGQgHALgDAEQgFAIgGAEQgFgFgBgCQgBgDACgIQAGgYADgFQAHgNAQgHQADAGgBABQAAAAgBABQAJgBACgCQABgCAFgHQARgPABgCQAGgKgEgbQgHABgJAHQgLAHgHACQgQABgEABQgFABgIALIgDgNQgHAAgBAAQAAAAgEgCIgIgbIAWgEQgCAKgBABQgCADgCAFQAGgCABABQAAgCADgIIAWgoQAUgCADgDQACgEAKgQQgJgdAEgdQAEgdATgXQAGgHAIgOQAFgJAIgPQAIgMAbgUQAdgWALgPIARgRQAEgEADgHQACgGAGgFQADgDADAAQAAgBAFgHQADgGACgFQABgDAFgRQAFgOAEgGQAIgJACgGQACgHAHgKQgNgEgCgBQgDgBAAgPQAAgFgBgLQgBgGADgNIgHAEIgBAFQgCAEgBAFIgBADIgCACQgFgXgHgRQgCgFgQgeQgDgGgBgBQgDgDgDgBQgCgCgOgEQgMgEgDAAQgLAIAEACQAGAFgGAQIgSAIQgQAGgQgDQgSgEgMgCIgSgCIgDgBIgPgFQgBAXADA9QAAA3gLASQgoBAgKANQgaAiglAbQgJAHgMAOQgNAPgGAGQgFAEg7AIQgxAHAAAZQgXACgKADQgQAFgGAcQgWAEgCABQAAAEgKASQgGAMgKACQgHABgEAUIglARIANAEQgBAFAAABQgCAAgHABIgdABIAFAiIgEADIgLgVIgDgCIgjAbAMhjXQgGgTgBgEQgBgMAHgMQAXgkAEAAQAEgBAWAEQAKgCAFgDQAHgFAFgCQAAAPgfAkQggAkgQAFgAlKHkQBMgECFACQBKAACMACQBgAAAEgEQABgCgDgJQgDgLAFgLAiml5IgDARQgBAJgBABQgDACgDAFQgCAEAAAMQAAAMgGAMQgHARgBAEQgBAIACAPQADANAAAfQAAAmAAAGQABATADAJQADALAAADQACAQgaATQgfAXgFALQgBACgIANQABAGADAGQAAABgEAPQgEARABAcQgCAZgXARQgcAZgRAKQgYAOgVAQQgMAKghAPQgeAOgUAUQgKAJgOAHQgRAHgLAEQgRAJgHADQgMAGgUABQgEAEABAAQABAAgDAEQAAAKgCgGQgBACgBAAQgLgGgDgEQgBAAgHgOQg/gBhVAQQg3AJgLAAQgSAtgsAFIAAEMIAAAbIAZAAAlKHkIAAguQgkAAgJgBQgXgDgOgMQgKgIgegIQgWgGgEgSIgMADQgCgCACgCQAAAAgIABIgEAKIgNBHQgKgDgVgLQgYgNgMgFQgQgFgEgBQgHgDgKgJQgOgMgHACQgHABgHgHIgMhDIgBggIgpgCQgRAGgMgTQgLgRgDgVAspJXQAFgGALgPQAJgNAIgFQAIgFAKgBQAQgDAFgBQAQgEACgKQADgRADgDQAFgDAFADQAGADAMgMQAJgIACgCQABgBAMgBQAGgCAFgGQAHgKACgCQAHgGAXgNQAGADABAGQAAACANgEQAVgGAGAKIgEAoIArAQQAGAXAAAKQgBANgMANIAtARICdAAIAAhzAtvI8QAHgBAGAAQAEAKADAKQACAGADACIAtAAIFCAA");
	this.shape_4.setTransform(-6.5,6.1);

	this.timeline.addTween(cjs.Tween.get(this.shape_4).wait(1));

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = new cjs.Rectangle(-95.5,-67,191,134);


(lib.graph_11 = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// Capa_1
	this.shape = new cjs.Shape();
	this.shape.graphics.f().s("#FF3399").ss(0.2,0,0,22.9).p("AskKtIZJAAIAA1ZI5JAAg");

	this.timeline.addTween(cjs.Tween.get(this.shape).wait(1));

	// Capa_2
	this.shape_1 = new cjs.Shape();
	this.shape_1.graphics.f("#FFFF00").s().p("AKNIPIgBgBIgBAAIABgBIAAgBIAEAAIAAABIgBAAIAAACgAKYH5IAAAAIgBAAIAAgCIgBAAIAAgBIABAAIAAgBIABAAIAAgBIAAAAIAAgCIABAAIAAgBIACAAIAAADIgBAAIAAAFIgBAAIAAgBIgBAAIAAABgAJTHxIgBABIgCgCIAAAAIAAgBIAAgBIAAAAIAAgBIgBAAIAAgBIgBAAIAAgBIgBAAIAAgBIgBAAIAAgBIgCAAIAAgBIgBgBIAAAAIABAAIAAAAIACAAIAAABIABAAIAAABIABAAIABABIAAABIABAAIAAABIACAAIAAgBIACAAIAAABIABAAIAAABIABAAIAAAGgAKQHaIAAgBIAAgCIAAgBIAAABIACAAIAAABIACAAIABABIgBAAIAAABIgDAAIAAABgAKNHKIAAgBIgBAAIAAgCIADAAIAAABIABAAIAAACgAJDHDIgBAAIAAgCIgBgCIACgBIACAAIACABIAAADIgBAAIAAABIABAAIgBAAgAJqHBIgBgBIABAAIAAgBIABAAIAAgCIACAAIAAgBIgBAAIAAgBIgCAAIgBgCIADAAIAAgBIAEAAIAAgCIgDAAIAAgBIADAAIACgBIgBAAIABgBIABAAIgBgBIAAgBIACAAIAAgBIABAAIAAgDIABAAIAAgBIABABIAAgBIABAAIAAgCIACAAIAAABIABAAIAAgEIABAAIAAACIABAAIAAgBIABAAIAAABIAAAAIAAABIAAAAIAAACIABAAIAAABIABAAIgBABIAAACIgBAAIAAABIABAAIAAAAIADAAIAAABIgCAAIAAABIgCAAIAAABIABAAIAAABIADAAIAAACIgCAAIAAABIgBAAIAAADIgBAAIAAABIAAABIAAACIgBAAIAAABIgBAAIAAgBIgDAAIAAABIgBAAIAAgDIgCAAIAAABIgBgBIAAABIgBAAIgBABIAAAAIAAABIgCAAIAAgBIABAAIAAgBIgBgBIgBAAIAAABIgCABIgBAAIAAgBIgBABIAAABIAAAAIAAABgAI7G7IgBgBIAAgCIAEAAIAAABIgBABIAAABgAJZGyIgBgBIAAABIgBAAIAAgBIgBAAIAAgBIABAAIAAgBIABAAIAAgDIABAAIAAABIABAAIAAABIAAACIACAAIgBABIgBAAIAAABgAKSGvIgBgBIABAAIAAgCIACAAIAAgCIABAAIAAgBIACAAIAAgBIABABIAAABIgBABIAAACIgBABIgBAAIAAABgAKUGfIAAgBIgDAAIAAgBIABAAIAAgDIACAAIAAgDIABABIABAAIABABIABAAIAAACIAAAAIAAADIgBAAIAAABgAJRGbIAAgBIgBAAIAAgBIAAAAIAAABIgBgBIAAgEIABAAIAAgBIABAAIAAABIAEAAIAAgBIACgCIABABIAAgBIACAAIAAABIAAABIAAABIgBAAIgBABIgDAAIAAABIgBAAIAAACIgCAAIAAACgAKLGYIAAgBIABAAIAAgCIACAAIAAACIgBAAIAAABgAKHGQIAAgBIACgCIACAAIAAABIgBAAIAAACgAj5BjIAAgBIgBAAIAAABIgCAAIAAgBIgBAAIAAgDIgBAAIABgBIABAAIAAABIADAAIAAABIgBAAIABABIABAAIAAACgAjIBQIAAgBIgCAAIAAgCIgBAAIAAgGIgDAAIAAgCIABAAIAAgBIgCAAIAAgCIgCAAIAAgCIADAAIAAgEIABAAIAAgBIADACIABAAIAAABIADAAIABgBIAAACIACAAIABABIADAAIAAAEIgBABIgBABIgBABIAAAAIACAAIgBABIAAABIgCAAIAAABIABAAIAAACIABAAIABABIAAABIgCAAIgBgBIgCAAIAAABIgBAAIgBABIAAABgAjPA2IgBgBIABAAIAAAAIABAAIAAgBIABAAIAAABIgBAAIAAABgAjSArIgBgCIgBAAIgBgBIAAgBIgBAAIAAgBIgBgBIAAABIgBAAIAAABIgBABIAAgBIgBAAIAAgBIgBAAIAAgBIABAAIAAgCIABAAIgBAAIAAgBIgBAAIAAgCIAEAAIABABIABgBIAAgCIABgBIAAABIABAAIAAACIACAAIAAgBIgBAAIAAgBIABgBIAAABIAAgCIABgBIAAgBIABAAIAAABIgCAGIAAADIAAABIAAAEIABAAIAAABIgBAAIAAABgAjPAjIAAgBIgCAAIAAgCIABAAIAAgBIACAAIAAgBIABAAIAAACIgBAAIAAABIABAAIAAACgAjNAegAjNAeIgCgDIABAAIAAgBIABAAIACABIAAABIgCABIAAABgAF3hEIAAgBIgFAAIAAgBIgDAAIAAgBIAAAAIAAgBIgBAAIAAAAIgBAAIAAgBIgBAAIAAgBIgBAAIAAgBIgBAAIgBgBIABAAIAAgBIABAAIABgBIAAgBIACAAIAAgBIACAAIgBgBIAAgDIAAABIgBAAIAAgBIgBAAIAAgBIABAAIAAgBIgBgBIgBAAIAAgDIgBAAIAAgCIABgBIAAgCIABAAIAAgBIACAAIAAABIAAABIACAAIAAgBIABAAIAAgBIADAAIAAgBIABgBIABAAIAAAEIABAAIAAABIADAAIAAABIAGAAIAAgBIABAAIAAgCIACAAIAAgBIACAAIgCgBIAAgBIAEAAIAAgDIgBAAIAAgBIABAAIAAABIABgBIABgBIACAAIAAABIABAAIABABIAAABIABAAIAAABIACAAIABABIAAABIABAAIAAACIAAAAIAAABIABABIAAABIABABIAAABIABAAIAAABIACAAIAAABIAEAAIABABIABABIAAABIADAAIAAgBIABAAIAAABIABAAIAAABIABAAIABgBIAAADIAAABIAAABIAAABIABAAIAAABIgBAAIAAABIABAAIAAABIABAAIAAABIADAAIAAgBIABAAIAAgBIABAAIAAgBIABAAIAAgBIABAAIAAABIAAAAIAAABIAAAAIgDADIgDAAIAAACIgBgBIgBAAIAAABIgBAAIAAACIAAAAIAAgCIgBAAIAAgBIgBAAIgCgBIgBgBIAAgDIABgDIAAgCIgCABIABAAIAAACIgCAAIgBgBIgBgBIAAABIgCAAIAAABIgBAAIAAACIgBAAIAAABIgCAAIAAABIgBAAIAAgBIgBAAIgBgBIgHAAIgBABIgCAAIAAgBIgDAAIgCgBIgCAAIgBgBIAAAAIAAgCIgCAAIAAABIgBAAIAAACIABAAIgBABIAAABIABAAIABABIgBAAIgBABIgBAAIAAABIgBAAIAAABIgBAAIAAABIACAAIAAABIABAAIAAABIgCAAIABABIgCAAIAAgBIgBAAIAAABIgDAAIAAABgAGJhHIAAgBIAAAAIAAAAIAAgBIAAAAIAAgBIgBABIgCAAIAAABIgDAAIgBgBIAAgBIACgCIAAgBIAFAAIAAABIAAAAIAAABIABgBIAAABIABAAIAAABIABABIAAgBIABAAIAAABIgBABIAAAAIgDAAIABABgAIUhIIAAgBIgEAAIAAABIgCgBIgBAAIAAgBIgBAAIgBgBIgBAAIAAgBIgBAAIAAgBIgBAAIAAgBIgCAAIAAgBIgBAAIAAABIgEAAIAAgBIABAAIAAgBIADAAIABgBIABAAIgBgBIABAAIAAgDIgCAAIAAgCIABAAIAAgBIgCAAIAAgBIgCAAIAAgBIACAAIABAAIACAAIABAAIAAAAIACAAIAAABIABgBIACAAIAAABIADAAIAAABIABAAIAAgBIAAABIABAAIAAABIACAAIAAABIACAAIAAABIABAAIACABIAAABIgDAAIAAABIgDAAIAAABIAFAAIAAABIgEAAIAAACIACABIABAAIAAABIABAAIAAACIgCAAIAAABIACAAIAAABgAFZhgIAAgBIgBAAIAAgBIgBAAIAAgBIACAAIgBgBIAAgBIABgBIAAgBIgBgBIAAgBIABAAIAAgBIABAAIAAABIADAAIAAABIABAAIAAABIAEAAIAAACIgEAAIgBABIAAACIAAAAIAAABIgBAAIAAABgAp7iCIAAgBIAAAAIAAgBIACAAIAAgBIABAAIABABIAAABIgCABgApxiFIAAgCIABAAIAAACgApyiIIAAgBIgDAAIAAgBIABAAIAAgBIgBAAIABgBIgBAAIAAgCIABABIABAAIAAABIACAAIAAABIACAAIAAABIABAAIAAABIgBAAIAAABgAqFiMIAAgCIgBAAIAAgCIABAAIAAgBIABAAIAAAAIABAAIAAgBIgBgBIAFAAIAAACIABAAIAAADIgBAAIAAABIgBAAIAAABgAp2iPIAAgBIABgBIgBAAIAAAAIgBAAIABgBIAAgBIABAAIAAgFIABABIAAABIABABIACAAIAAABIgCAAIAAABIABABIAAABIgBAAIAAABIgBABgAp3iZIAAgBIgBAAIAAgCIADAAIAAADgAp3idIAAgCIgBgBIAAgBIABAAIAAgBIABAAIAAgBIgBAAIAAgBIAEgEIACgCIgCAAIAAgCIgBAAIAAgBIgBAAIAAgEIABAAIAAgEIABAAIAAAAIADAAIgBABIAAACIABAAIAAABIABAAIAAADIAAABIgBAAIAAABIgBAAIAAACIAAACIAAABIABAAIgBABIAAACIgBAAIAAABIABAAIAAAAIgBAAIAAABIgBAAIAAACIgBAAIAAACIgCAAIAAABgAqEidIAAgDIABAAIAAgBIABAAIAAgCIgGAAIAAgBIABAAIAAgBIABAAIAAABIADAAIAAgBIgBAAIAAgBIADAAIAAgBIABAAIAAgBIABAAIAAgBIABAAIAAgBIABAAIAAgBIAEAAIAAABIABAAIAAABIABABIAAABIgBAAIAAABIABAAIAAABIgBAAIAAACIABAAIAAAAIgCAAIAAABIgBAAIAAgBIgBAAIAAABIgCAAIAAACIgBABIgCAAIAAgBIgBAAIAAABIAAAAIAAACgApXigIAAgBIgCAAIAAgBIACAAIAAgBIAAAAIAAgBIAAgBIgCAAIAAgBIgBAAIABgBIAAgCIACABIAAAAIAAABIACAAIAAgBIABAAIAAACIABAAIAAABIACAAIAAABIABAAIAAABIgBAAIAAABIgCAAIAAABIgBAAIAAABgApvinIAAgBIgCAAIABgCIAAgCIABAAIAAABIAAAAIAAAAIABgBIAAAGgApgipIgBAAIAAgBIgBAAIAAgCIABgBIACAAIAAABIABAAIAAgEIABABIAAgCIABAAIAAACIABAAIABABIgCAAIAAABIgBAAIAAABIAAAAIAAABIAAABIAAABIgBAAIgBgBIAAACIgBABgAplirIAAgBIgBAAIgBgBIAAgBIgCAAIAAgBIAAAAIAAgBIgCAAIgCgBIgCAAIAAgCIAHAAIAAgCIABgBIAAgBIACAAIAAABIABAAIAAgBIABAAIABABIABAAIABABIACAAIAAAAIABAAIAAADIgCAAIAAACIgCAAIgBABIABAAIAAACIgCAAIAAABIgBAAIAAABgApoivIABAAIAAgBIABAAIAAgBIgBAAIAAgBIgBAAgAqBirIAAgBIAAABIAAgBIgCAAIAAgBIgBAAIAAgGIABAAIAAgBIAGAJgAqGizIAAgCIgBAAIAAgCIgBAAIAAgBIgDAAIAAgDIABAAIAAgBIADAAIAAABIABAAIAAABIABAAIAAgEIACAAIAAABIABAAIABABIAAAHIAAAAIAAABIgBAAIAAgBIgBAAIAAABIgCAAIAAABgApwi1IABAAIAAAAIAAAAgApwi1IgIgHIAAAAIABAAIAAgCIADAAIAAABIADAAIAAABIABAAIAAACIABABIgBAAIAAAEgApvi2IAAgDIAAgBIAAAAIAAABIADAAIAAABIgBAAIAAABIgBAAIAAABgAp6i4IAAgBIgBAAIAAgCIgCAAIAAgBIgCAAIAAgBIgCAAIAAgCIAAgBIAAgBIAAgBIABAAIAAgBIAIAHIAAACIgCAAIABABIAAABgApsi5IAAgBIADAAIAAgCIAAABIABAAIAAABIABAAIAAABgApsi5gAp4i8gAqHi+IAAgBIgBAAIAAgBIgBAAIAAgBIAAgBIACAAIgBgBIgBAAIAAgDIgBAAIAAgBIgDAAIAAgBIAAAAIAAgBIAAAAIAAgBIABAAIAAgBIABAAIAAgBIABAAIAAABIADAAIAAACIgCAAIAAACIAEAAIAAgCIABAAIAAgDIADAAIAAgBIAAAAIAAABIABAAIAAACIABAAIAAADIgBAAIAAAAIgBAAIAAACIgBAAIAAABIgDAAIAAgBIABAAIAAgBIgBgBIAAABIgDAAIAAACIABAAIAAABIABAAIAAACIgDAAIAEADgAqPi/IAAgBIgBAAIAAABIgEAAIAAgBIgBAAIAAgCIABAAIAAgCIABAAIAAgBIAGAAIAAABIACAAIAAABIgBAAIgBABIAAAAIAAABIAAAAIAAABIAAAAIAAABgAqRjMIAAgBIgCAAIAAgBIgBAAIAAABIgBAAIAAABIgCAAIAAgBIgBAAIAAgCIgBAAIAAgBIgBAAIAAgBIABgBIAAABIACAAIgBgBIAAgBIgBgBIACAAIAAABIABgBIABAAIAAABIABAAIAAABIABAAIAAABIABAAIAAABIABAAIAAACIABAAIAAACgAqIjQIAAgCIABAAIAAgDIABAAIAAgBIABAAIAAgBIAEAAIAAABIgBAAIAAABIgBAAIAAABIABAAIAAADIgBAAIAAABgAqQjTIgBAAIAAgBIgBAAIAAgCIgEAAIAAgBIABAAIAAgBIABAAIAAgBIABAAIAAAAIABAAIAAgBIACAAIAAABIADAAIAAABIAAAAIAAAEIABAAIAAABIgDAAIAAABgAgsl4IAAABIgBAAIAAgDIABAAIABgBIACAAIAAADIgCAAIAAABgAG/mMIAAgBIgBAAIgBABIAAgBIgBgBIgCAAIAAgBIgBgBIABgBIACAAIAAgBIgCAAIAAgBIACAAIAAgCIABABIAAgBIACAAIAAACIAAAAIAAADIgBAAIABABIAAABIAAAAIAAAAIACAAIAAABIgBABgAGTmUIAAAAIAAgBIAAAAIAAgBIgBAAIAAgBIABAAIAAgCIAAAAIAAABIABAAIAAACIABAAIAAACIgBAAIgBABgAG9mWIAAgBIABAAIAAgBIABAAIAAgCIABAAIAAABIgBAAIABABIAAABIgBgBIAAACgAGVmYIAAgBIgBAAIAAgBIABgBIAAACIABAAIAAABgAG+mdIAAgBIgCAAIAAgCIgCAAIgBABIAAgDIABAAIACABIAAABIABgBIAAABIABAAIAAgEIABAAIAAgDIAAAAIAAACIABABIABABIgBAAIABABIACAAIAAACIgCAAIAAAAIgCAAIAAACIAAAAIAAABgAG4meIAAgBIABAAIAAABgAG5mfgAhzmjIAAgBIgBAAIAAgBIgBAAIAAgBIABAAIAAgBIgBgBIAFAAIAAABIABAAIAAABIABAAIAAADgAgzmkIAAgEIABAAIAAABIABgBIABgCIAAgBIABAAIAAAEIAAABIAAAAIAAABIAAABgAGtmmIAAgDIgBAAIAAgDIgBAAIAAgBIABAAIAAgCIAAgBIABAAIAAgBIABAAIAAADIAAAAIgBABIAAACIABAAIAAABIAAAAIAAACIAAAAIAAACgAh6mmIAAgBIgCAAIAAgCIgBAAIAAgBIABAAIAAgBIgBAAIAAgBIACAAIAAgBIABgCIAAgCIgBAAIAAgBIADAAIAAACIABABIAAAAIAAgBIABAAIAAgBIACAAIABABIADAAIAAABIgBABIAAABIABAAIgBABIAAABIgDAAIAAABIgBABIgBABIgBABIgCAAIAAABgAG3moIAAgBIgBAAIAAgBIgBAAIgBgBIgBAAIAAgBIgBAAIAAgDIABAAIAAgBIgBAAIAAgBIgCAAIADgHIABAAIAAgBIAAgBIgBACIgCAAIgBABIAAADIgDAAIgBABIgBAAIAAABIACAAIgBAAIAAABIgBAAIAAABIABABIgCAAIgCABIgDAAIgBgBIAAABIgBABIgBAAIAAgCIgCAAIAAgBIABAAIAAgDIABAAIgBgBIACgBIAAACIABAAIAAgBIABAAIAAgBIgBAAIAAgBIAMgGIABAAIAAACIABgBIADAAIAAgDIgCAAIAAgCIgBAAIAAgBIgBAAIAAgBIACAAIAAABIACAAIAAABIACAAIAAgBIABgBIgBAAIAAgBIABAAIAAgBIACAAIAAAAIADAAIAAACIACAAIAAgBIACAAIAAgCIACAAIAAgCIABAAIAAABIACACIABAAIAAAAIABAAIAAABIABAAIAAABIgCAAIAAABIgBAAIAAADIgBAAIAAABIABAAIAAABIgCAAIAAADIgBAAIAAACIgCgBIAAADIACAAIAAADIADAAIAAAAIABAAIAAABIgBAAIAAABIgBAAIAAABIgCAAIAAgBIgBAAIAAABIgBAAIAAgDIgBAAIAAABIgDAAIAAAEIgDAAIgBABIgCAAIAAABIAAAAIAAABIAAACgAGlmyIAAACIACAAIABgBIAAgBIACAAIAAAAIABAAIgHgBIAAABIgBAAIABAAIABABIAAgBgAiQmoIAAgBIgBAAIACgCIABAAIAAABIABAAIAAABIgBAAIAAABgAgpmrIgCAAIgBgBIgBAAIAAgCIABAAIAAgCIAEAAIAAABIABAAIAAACIABAAIAAABIgBAAIAAACIgBAAIAAABgAGSmrIAAgEIABAAIAAgBIABAAIAAgBIACAAIAAgBIACAAIAAAAIABAAIAAgBIADAAIAAABIAAAAIAAABIAAAAIAAABIgCAAIAAABIgBAAIAAABIgDAAIgBABIgBAAIAAABIgBAAIAAABgAg+msIAAABIgBAAIAAgBIgDAAIAAgBIgBAAIAAgBIgBgBIAAgDIABAAIABAAIABgBIgBgDIABAAIABgBIAGAAIAAABIgBAAIAAABIgCAAIAAACIAFAAIAAADIgBAAIAAABIgBAAIAAABIgDAAIACABIAAABIgCAAIAAABgAhvmuIAAgCIAAAAIAAgBIAAAAIAAgBIACABIABAAIAAADgAFfmvIAAgBIgBAAIgBgBIAAgBIAAAAIAAAAIgBAAIAAgBIgBAAIAAgBIgBgBIgBAAIAAgDIABAAIAAgBIABAAIAAgCIACAAIAAABIAAAAIAAgBIABABIABAAIAAgBIAEAAIAAgBIABAAIAAABIABAAIAAACIAAAAIAAAHIgBAAIAAAAIgCABIgCAAIACABIABAAIAAABgAEImvIAAgBIgCAAIAAgCIADAAIAAADgAE8mwIAAgCIgBAAIAAAAIgBAAIAAgCIgBgBIgCAAIAAgBIgEAAIAAgBIABAAIABgBIACAAIAAgCIACAAIAAgBIAAAAIAAgBIABgBIAAABIABAAIAAgBIABgBIAAgBIgDAAIAAgBIgBAAIAAgBIACAAIABABIAEAAIAAgBIABAAIAAgBIABAAIAAABIABAAIAAABIABAAIAAADIgBAAIAAADIAFAAIAAABIgCAAIgBABIACAAIgBABIgCAAIAAAEIgBAAIAAACIgBgBIAAAAIgBAAIAAAAIABAAIAAABIgCAAIAAABgAEYmwIAAgBIgBgBIAAAAIAFAAIAAACgAGumxIAAgBIACAAIAAABgAgJmyIgBAAIgBAAIAAAAIAAgBIgBAAIAAgBIgCAAIAAABIgBAAIAAABIgBAAIAAAAIgBAAIAAAAIgDAAIAAAAIAAAAIgBAAIgCAAIAAAAIgDAAIAAgBIgBAAIAAgBIgCgBIAAAAIAAgBIAAAAIAAgEIACAAIAAABIABAAIAAgEIgBAAIAAgCIACAAIgCgCIAAgBIABAAIAAABIAEAAIgBgBIABAAIAAgBIABAAIAAgBIABAAIAAAAIAAAAIAAAAIAEAAIAAABIgDAAIAAABIgBAAIAAACIgBAAIAAAAIABAAIAAABIAAAAIAAABIACAAIAAgBIABAAIAAgCIACAAIAAgBIACAAIAAgBIACAAIAAABIABgCIABAAIAAACIABAAIAAABIgBAAIAAABIABAAIAAAEIADABIABAAIABABIgBAAIgDADIgBABIABAAIAAABIgBAAIABABIACAAIAAACIABAAIgBAAIgDAAIAAABgAGemyIAAAAIABAAIAAAAgAgjmyIgBgBIAAgCIADAAIAAgBIABAAIAAABIADAAIAAABIgBAAIAAACgAgpmyIAAgCIABAAIAAABIABAAIAAABgAg2mzIABgBIAAgCIgBgCIAAgCIgBgCIgBAAIAAABIAAgBIAAgBIAAgCIABAAIAAgBIABAAIAAgDIADAAIAAgBIABAAIABABIAAAFIABAAIABABIAAgBIAAAAIAAgBIADAAIAAAFIABgBIACAAIACgCIACAAIABABIAAACIgBABIAAACIgBAAIAAABIgCAAIgEgBIgBAAIgCABIgBABIgDABIgBABgAgdm1gAgfm4IAAgBIgBAAIAAgCIgCAAIAAgBIACAAIAAABIACAAIAAADgAECm5IAAgCIgBAAIAAgBIACAAIAAADgAGym9IAAgBIABAAIAAABgAAbm+IAAgCIgBAAIAAgBIgBAAIAAgCIACAAIABABIACAAIAAABIADAAIAAABIgBAAIAAABIgCAAIgCABgAEYm/IAAgDIAEAAIAAADgAEGm/IAAgDIAFAAIAAADgAFCnEIAAgBIAAAAIAAgBIACAAIAAABIABAAIAAABgAG8nGIAAgBIgCAAIAAgCIAFAAIAAABIAAAAIAAABIgCAAIAAABgAEonGIAAgDIAEAAIAAADgAAYnHIAAgBIgBAAIgBgBIABAAIAAgBIABAAIAAgCIgBAAIAAgBIgBAAIAAgEIACAAIAAABIACAAIAAABIABAAIAAABIAEAAIAAABIgBAAIAAABIgCAAIAAgBIgDAAIAAACIAAAAIAAABIABAAIAAACIgBAAIAAABgAHLnJIgBAAIAAABIgDAAIAAgBIgBAAIAAgBIABAAIAAgBIACAAIAAgBIACAAIAAgEIADAAIAAABIgCAAIAAABIAEAAIAAACIgBAAIAAACIgBAAIgCABIAAABgAGznLIgBAAIAAgBIgBgBIABAAIAAgBIACAAIAAABIgBAAIAAABIABAAIAAABIgBABgAEXnMIABAAIAAgCIADAAIAAgBIABAAIAAADIgCAAIgDABgAD3nLIAAgBIgBAAIAAgCIADAAIgBABIAAACgAAknRIgBAAIAAgBIgBAAIAAABIgGAAIAAgBIgBAAIAAgCIABgBIACAAIAAgBIABABIAAABIABAAIABABIAAgEIAAAAIAAABIABAAIAAAAIABAAIAAgBIACAAIAAgBIABAAIAAgBIABAAIAAABIABAAIAAAGIgBgBIgDADgAFFnSIgBgBIgBAAIAAABIgBAAIAAgBIgCAAIAAgBIACAAIAAgBIAAgBIAAABIACAAIAAABIABAAIAAgCIABAAIAAABIABAAIAAABIgBAAIAAACgAAJnWIgBABIAAgBIgBAAIAAgCIgBgBIgBAAIAAgEIgFAAIAAgBIgBAAIAAgBIgCAAIAAgBIgCAAIAAgBIABAAIAAgCIgFAAIAAABIgCAAIAAgDIABgBIAAgBIABAAIAAABIABAAIAAABIABAAIAAgBIADABIAAACIACAAIAAgBIAAAAIAAgCIABAAIAAABIANAAIAAgBIAGAAIAAgBIAEAAIAAABIABAAIAAAFIgBABIAAABIgBABIAAABIgCACIAAABIgCAAIgBgBIgBAAIAAACIAAAAIAAABIgBAAIAAABIgBABIgBAAIAAABIABAAIgBABgAFJnWIAAgBIgBAAIAAgCIABAAIAAgBIACAAIAAgBIAAABIAAABIABAAIAAACIABAAIAAABgAAbnWIAAgBIgBgBIgBAAIAAgBIgBAAIAAgBIgCAAIAAgDIABAAIAAgDIABgBIABAAIAAgGIgBgBIALAAIABAAIAGAAIAAAAIgBAAIAAABIgBAAIAAABIgCAAIAAACIABAAIAAAEIgHAAIAAAEIgBAAIAAAGgAAZndIAAABIABgBIACAAIACgBIAAgBIgCAAIAAgBIgDAAIAAABIgBAAIAAADIABAAIAAgBgAHMnZIAAgDIACABIAAABIABAAIAAACgAEYnYIAAgDIAEAAIAAADgAEGnYIAAgBIgBAAIAAgCIAEAAIABADgAiynYIAAgBIABgBIAAgCIACAAIAAACIABAAIAAABIgBABgADdnZIAAgCIgBAAIAAgBIACAAIAAgCIACAAIAAADIgCAAIAAACgAEmnbIAAgCIACAAIAAABIABAAIAAABgAHPncIAAgBIgDAAIAAgBIACAAIAAgBIgCABIAAgBIgBgBIABAAIAAgDIACAAIABgCIABgBIAAgCIABAAIAAADIABAAIAAABIgBAAIAAACIABAAIAAACIgBAAIAAAEgAgRniIAAgCIgBAAIAAgEIADAAIAAADIgBAAIAAAEgAHuniIAAgBIgBAAIAAgBIABAAIABgBIAAABIABAAIAAABIgBAAIAAABgAHknmIAAgDIADAAIAAABIgBAAIAAAAIABAAIAAACIgBAAIAAABgAGinnIAAgBIgBAAIAAAAIgBAAIAAgCIABgBIAAgBIgBAAIABgBIABABIAAgCIACAAIAAABIABAAIAAABIAAAAIAAACIACAAIAAACIgBAAIgBAAIAAABgAGunoIAAAAIgBAAIAAgBIABAAIAAgBIAAAAIABgBIABAAIgBABIABAAIgBABIABAAIgBABIgBAAIAAAAgACmnoIAAgBIgBAAIAAgCIgBAAIAAgBIgBAAIAAgBIABAAIAAgBIABAAIAAABIADAAIAAACIAAABIAAACIgBAAIAAAAgAD0noIAAgEIADAAIAAgBIABAAIAAABIABAAIAAACIgBAAIABABIgCAAIAAABgAEFnpIAAgDIgBAAIAAgDIABgBIABAAIAAADIAEAAIAAABIgCAAIAAABIABAAIAAABIgDAAIAAABgAEcnqIAAgDIACAAIAAADgADuoFIAAgCIgBAAIAAgBIACAAIAAABIABAAIAAgBIABAAIAAADgACxoMIAAgBIABAAIAAABIgBAAIAAAAgACyoNIAAgBIADAAIgBABgACyoNg");
	this.shape_1.setTransform(-0.2,0.3);

	this.timeline.addTween(cjs.Tween.get(this.shape_1).wait(1));

	// Capa_5
	this.shape_2 = new cjs.Shape();
	this.shape_2.graphics.f().s("#FFFFFF").ss(0.5,1,1).p("AAABYIgBAAIgBgCIAAgBIgBgBIgCAAIgBgBIgCgBIgHgHIgBgBIgBgBIgBAAIAAgCIgBAAIgDgCIgBAAIgDgDIgBAAIAAgBIABgBIgBAAIAAgBIgBAAIAAgBIgBAAIAAgBIgBAAIAAgBIgBAAIAAgBIgBAAIAAgBIgBgBIAAgBIgBAAIAAgBIAAAAIgBgBIgBAAIAAAAIgBAAIAAgBIgBAAIAAgCIgBgBIgBAAIgCgBIAAgBIABAAIACABIACgBIADAAIAAgDIAAgBIAAgCIADAAIgCgBIADAAIABgBIABAAIAAgBIABAAIgCgDIABAAIAAgBIABAAIABgBIABAAIADAAIABAAIACAAIgCgFIgBAAIAAgBIgBgBIAAgHIADgBIgBAAIABgBIABAAIgBgCIAAgLIgCAAIgBgBIgBAAIAAgBIgBAAIgDgCIgCgBIAAgCIgBgCIAAgBIgBAAIgBgBIACgBIABgBIABAAIABgBIABACIgBAAIAAABIADAAIAAACIAFAAIABgBIgBAAIADgCIABABIgCABIACAAIAAABIACgBIABgCIAEAAIAAgCIAEAAIABABIAAgBIACAAIAAgBIABABIABAAIAAgBIAAgBIABAAIAAgBIAAAAIgBgCIABAAIAAgBIAAABIABgBIABAAIAAgDIgBgBIgBAAIAAgBIgBAAIAAgCIgBAAIAAgBIABAAIAAgBIgBgEIAAABIgEAAIAAgBIABAAIAAgCIgCAAIgCgBIAAgBIACAAIAAgBIgBAAIAAgCIgBAAIAAgEIABABIABAAIAAADIABAAIAAAAIACAAIAAgCIABgBIAAgBIABAAIAAgBIgBAAIAAAAIACAAIAAgCIgBAAIgBAAIAAgCIgCAAIAAgBIgBAAIAAgCIABAAIAAgCIgBAAIgCgBIgHAAIAAAAIgCAAIAAgCIAAgFIACAAIABgCIABgBIAAAAIgEAAIgBgBIgBAAIABgBIABAAIAAgBIABAAIAAgBIABAAIAAgBIABAAIAAABIACgCIABAAIAAgBIABgBIgBAAIABgBIABAAIAAgBIABAAIAAgCIABAAIABgBIAAgGIABgBIABAAIAAgHIAEACIABAAIAAgBIACABIABAAIAGADIACAHIgHAAIAAAAIgBABIAAACIACAAIABAFIAAABIABgCIAAgBIABgBIABAAIABABIABgDIADAAIAAgBIACAAIAAgBIABABIAAgBIAAAAIADgDIgBAAIgDgBIABgCIAGACIABAAIAAAAIABAAIAAgBIADAAIACgCIAAgCIACAAIAAgBIADAAIABABIAAABIACACIAAABIABABIABAAIABABIgBAAIAAACIgBAAIAAABIgBAAIAAABIgBAAIgBABIAAACIgBAAIAAADIABABIAAABIgBABIAAABIAAAAIAAADIgBAAIAAAAIgBAAIAAABIgCAAIAAABIgBAAIAAABIgBAAIABACIgBAAIAAADIABAAIAAACIgBAAIAAACIgBABIgBAAIAAABIABAAIgBABIgBAAIABABIgBAAIABABIgBABIgBAAIABAAIgBACIAAABIgBAAIAAACIABAAIAAACIgBAAIAAABIgBABIAAABIgBABIABAAIAAACIAGAAIAAABIAEAAIAAABIACAAIgBACIAAAHIgBAAIAAABIgBgBIgEAAIAAAGIACAAIAAABIABAAIAAABIgBAAIAAACIgBAAIgBgBIAAABIgBgBIgBAAIAAABIgBAAIAAABIgBAAIAAABIgBABIABAAIAAACIABAAIAAABIgBAAIAAACIgBgCIgBAAIAAACIABAAIAAAAIgBAAIAAADIgBAAIAAACIgBAAIAAAEIgBAAIAAABIgBAAIAAADIgBAAIAAABIAAAAIAAAFIgBAAIAAADIgBAAIAAABIABAAIAAACIgBAAIAAACIgBAAIAAABIgBAAIAAABIABAAIAAAFIABAAIAAABIgBAAIAAABIABAAIAAADIgBgBIAAABIACAAIAAACIgDAAIAAACIgBAAIAAABIABAAIAAACIgBAAIAAABIABAAIAAABIgBAAIAAABIABAAIAAAEIgBAAIAAABIABAAIAAABIgBAAIAAADIgBAAIAAABIgBAAIAAABIABAAIAAACIgBAAIAAACIgCAAIAAACIgBAAIAAAAIgBAAIAAAEIgBAAIAAAEIgBAAIAAAAIgBAAIAAADIgBAAIgBACIAAABIgBABIgBAAIAAABIABAAIAAABIgBAAIAAABIgBAAIAAABIAAAAIAAABIAAAAgAAlAbIAAAAIAAACIAAABIAAAAIABABIAAAEIgBAAIAAgBIgBAAIAAAAIgBAAIAAACIgBAAIAAACIgDAAIgBABIgBAAIAAAAIgBAAIABgBIgCAAIAAgEIgBAAIgBAAIAAgBIABAAIAAgCIgBgBIgBAAIgBAAIgBAAIgBgBIABAAIAAgBIADAAIgBABIABABIACAAIAAgCIABAAIAAgBIABAAIAAgDIABAAIAAgBIABAAIAAgCIABAAIABABIAAABIABgBIADABg");
	this.shape_2.setTransform(61.7,43.4);

	this.shape_3 = new cjs.Shape();
	this.shape_3.graphics.f("#6C829A").s().p("AgBBYIgBgBIAAgBIgBgBIgCAAIgBgCIgCgBIgHgHIgBgBIgBgCIgBAAIAAgBIgBAAIgDgCIgBAAIgDgDIgBAAIAAgBIABgBIgBAAIAAgBIgBAAIAAgBIgBAAIAAgBIgBAAIAAgBIgBAAIAAgBIgBAAIAAgBIgBgBIAAgBIgBAAIAAgBIAAAAIgBgBIgBAAIAAgBIgBAAIAAgBIgBAAIAAAAIgBgBIgBAAIgCgCIAAgBIABAAIACABIACgBIADAAIAAgDIAAgBIAAgCIADAAIgCgBIADAAIABgBIABAAIAAgBIABgBIgCgCIABAAIAAgBIABAAIABgBIABAAIADAAIABAAIACAAIgCgFIgBAAIAAgBIgBgBIAAgHIADgBIgBgBIABgBIABAAIgBgBIAAgLIgCAAIgBgBIgBAAIAAgBIgBAAIgDgCIgCgBIAAgBIgBgCIAAgCIgBAAIgBgBIACgBIABgBIABAAIABgBIABACIgBAAIAAABIADAAIAAADIAFAAIABgCIgBAAIADgCIABABIgCABIACAAIAAACIACgBIABgDIAEAAIAAgCIAEAAIABABIAAgBIACAAIAAgBIABABIABAAIAAgBIAAgBIABAAIAAgBIAAAAIgBgCIABAAIAAgBIAAABIABgBIABAAIAAgDIgBgBIgBAAIAAAAIgBgBIAAgBIgBAAIAAgBIABAAIAAgCIgBgEIAAABIgEAAIAAgBIABAAIAAgCIgCAAIgCgBIAAgBIACAAIAAgBIgBAAIAAgCIgBgBIAAgCIABABIABAAIAAABIABAAIAAABIACAAIAAgCIABAAIAAgBIABAAIAAgBIgBAAIAAgBIACAAIAAgCIgBAAIgBAAIAAgCIgCAAIAAgBIgBAAIAAgCIABAAIAAgCIgBAAIgCgBIgHAAIAAgBIgCAAIAAgBIAAgEIACAAIABgCIABgCIAAAAIgEAAIgBgBIgBAAIABgBIABAAIAAgBIABAAIAAgBIABAAIAAgBIABAAIAAABIACgCIABAAIAAgBIABgBIgBAAIABgBIABAAIAAgBIABAAIAAgCIABAAIABgBIAAgGIABgBIABAAIAAgHIAEACIABAAIAAgBIACABIABAAIAGADIACAHIgHAAIAAABIgBABIAAABIACAAIABAFIAAABIABgCIAAgBIABgBIABAAIABABIABgDIADAAIAAgBIACAAIAAAAIABAAIAAAAIAAAAIADgDIgBAAIgDgCIABgCIAGACIABAAIAAAAIABAAIAAgBIADAAIACgCIAAgCIACAAIAAgBIADAAIABABIAAABIACACIAAABIABABIABAAIABACIgBAAIAAACIgBAAIAAABIgBAAIAAAAIgBAAIgBABIAAABIgBABIAAADIABABIAAABIgBABIAAABIAAAAIAAADIgBAAIAAAAIgBAAIAAACIgCAAIAAABIgBAAIAAABIgBAAIABABIgBAAIAAADIABAAIAAABIgBAAIAAADIgBABIgBAAIAAABIABAAIgBABIgBAAIABABIgBAAIABABIgBABIgBAAIABAAIgBACIAAACIgBAAIAAABIABAAIAAABIgBAAIAAACIgBABIAAABIgBABIABAAIAAACIAGAAIAAABIAEAAIAAABIACAAIgBACIAAAHIgBAAIAAABIgBgBIgEAAIAAAGIACAAIAAABIABAAIAAABIgBAAIAAACIgBAAIgBgBIAAABIgBgBIgBAAIAAABIgBAAIAAABIgBAAIAAABIgBABIABAAIAAADIABAAIAAABIgBAAIAAABIgBgBIgBAAIAAABIABAAIAAAAIgBAAIAAADIgBAAIAAACIgBAAIAAAEIgBAAIAAABIgBAAIAAADIgBAAIAAABIAAABIAAADIgBAAIAAAEIgBAAIAAABIABAAIAAACIgBAAIAAACIgBAAIAAABIgBAAIAAABIABAAIAAAFIABAAIAAABIgBAAIAAABIABAAIAAACIgBgBIAAACIACAAIAAACIgDAAIAAACIgBAAIAAABIABAAIAAACIgBAAIAAABIABAAIAAABIgBAAIAAABIABAAIAAADIgBAAIAAACIABAAIAAABIgBAAIAAADIgBAAIAAABIgBAAIAAABIABAAIAAACIgBAAIAAACIgCAAIAAACIgBAAIAAABIgBAAIAAADIgBAAIAAADIgBAAIAAABIgBAAIAAADIgBAAIgBACIAAABIgBABIgBAAIAAABIABAAIAAABIgBAAIAAACIgBAAIAAABIAAAAIAAABIAAAAIAAABgAAcAmIABgBIgCAAIAAgDIgBAAIgBAAIAAgBIABAAIAAgBIgBgBIgBAAIgBgBIgBAAIgBgBIABAAIAAgBIADAAIgBABIABABIACAAIAAgCIABAAIAAgBIABAAIAAgDIABAAIAAgBIABAAIAAgCIABAAIABABIAAABIABgBIADABIAAAEIAAAAIAAACIAAABIAAABIABABIAAADIgBAAIAAgBIgBAAIAAAAIgBAAIAAACIgBAAIAAABIgDAAIgBABIgBAAIAAABg");
	this.shape_3.setTransform(61.7,43.4);

	this.shape_4 = new cjs.Shape();
	this.shape_4.graphics.f().s("#FFFFFF").ss(0.5,1,1).p("AlUnoIABABIAAgBIABAAIABgBIAAAAIAAACIAEAAIAAgBIAGAAIAAgBIABAAIAAgBIABAAIAAABIADAAIAAgCIgBAAIAAgBIACAAIAAABIABAAIAAABIABAAIAAABIACAAIAAgBIABAAIAAgEIABAAIAAgDIgCAAIgBgBIgBAAIAAAAIAAAAIAAgBIAAAAIAAgCIAAAAIAAgEIgGAAIAAgBIgCAAIAAgBIgBAAIgBgBIABgBIgBAAIgBgCIAAgCIABgBIAAgCIABgBIABgCIABgBIAAgBIABAAIAAgBIABABIACAAIAAABIABABIAAACIABAAIABAAIAAABIAAgBIABAAIAAABIABAAIAAABIABAAIAAABIACAAIAAABIACAAIAAABIABAAIAAABIACAAIAAABIACAAIAAABIACAAIAAABIADAAIAAABIACAAIAAABIAEAAIAAABIAGAAIAAABIANAAIAAgBIAHAAIAAgBIAEAAIABgBIAMAAIABgBIAFAAIAAgBIAFAAIAAgBIAGAAIAAgBIAFAAIAAgBIADAAIAAgBIAEAAIAAgBIAFAAIAAgBIADAAIgBABIAAADIACAAIAAAEIACACIAAABIABAAIAAAEIABAAIgBABIgBAAIAAABIgBAAIAAAAIgCAAIABABIgBABIAAABIgBAAIAAAIIABABIgBAAIgBACIgBABIgDACIgBAAIAAgBIgBAAIAAgBIgCAAIgBABIgDAAIAAgBIgBAAIABgBIAAgBIgBAAIAAgBIgCAAIAAgBIgBAAIAAgCIgDAAIAAABIgBAAIAAADIgBAAIAAABIAAAAIAAABIgEADIgBAAIAAAAIABAAIAAABIACAAIAAABIACAAIAAACIAAAAIAAACIgCAAIAAABIgBABIgBAAIAAACIgBAAIAAAFIABABIAAABIgBAAIAAgBIgCAAIAAABIgBAAIAAABIAAgBIgBAAIAAABIgBAAIAAABIgBAAIAAACIgDAAIAAABIgBAAIAAABIACACIgBABIABAAIAAAEIABAAIAAADIABAAIAAACIABABIAAADIACAAIAAADIgBAAIAAABIABABIABAAIACABIAAABIABAAIABgBIADAAIABgBIAEAAIABACIACAAIAAACIABgBIAAACIACAAIAAABIACAAIAAABIACAAIAAACIgCABIACAAIAAACIgDACIAAgBIgBAAIAAABIgBAAIAAACIgBAAIAAgBIgBAAIgBgBIAAgBIABAAIABABIAAgBIABAAIAAgCIgDAAIAAABIgCAAIAAACIABAAIAAABIABAAIAAACIgFAAIAAABIABAAIAAACIgCAAIABABIAEAAIABgBIABAAIAAgBIADAAIAAgBIABAAIAAgBIAEAAIAAABIABABIAAADIABAAIAAABIACAAIAAgEIABAAIAAABIACAAIAAgBIABAAIAAgBIACAAIAAgBIABAAIAAgBIACAAIAAgBIABAAIAAgBIABAAIABABIABAAIAAABIACAAIAAAEIgCAAIAAACIgBAAIAAABIgCACIAAABIAAAAIAAACIgBAAIAAABIgBABIAAAFIABAAIAAgBIABAAIAAgCIABAAIAAgBIABABIABAAIAAABIACAAIAAACIgCAAIAAABIgCAAIAAABIgBAAIAAABIgBABIAAABIgBAAIAAACIgBAAIAAACIABAAIAAABIABAAIAAADIgBAAIAAABIgBAAIAAABIABABIABAAIABgBIABAAIAAABIABAAIABABIACAAIAAABIAAAAIAAABIABAAIAAABIABAAIAAABIABAAIAAABIABAAIAAACIgBAAIgBABIgBABIAAABIABAAIAAABIABABIABAAIAAAAIABABIAAACIgCAAIgBABIgBAAIAAABIgBAAIAAABIAAABIgCABIAAABIACAAIAAgBIABAAIAAABIABAAIAAABIACAAIAAgBIABAAIABgBIABAAIAAgBIABAAIAAAEIABAAIAAABIABAAIAAABIACAAIAAABIADAAIAAACIgDAAIAAABIgBAAIAAABIgBAAIAAACIgBAAIgBACIAAACIABABIAAgBIABAAIAAgBIABAAIABgBIABAAIAAABIACAAIAAABIAAABIAFAAIAAABIABAAIAAACIgBAAIAAABIgCAAIAAABIgBAAIAAABIgBAAIgBABIAAAAIAAgBIgCgBIgBAAIAAABIgBAAIAAABIgCAAIAAgCIgBAAIAAgBIgCAAIAAABIgBAAIAAADIgBAAIAAABIgCAAIAAABIgBAAIAAgEIgBgBIAAgCIgCAAIAAABIgBABIAAABIgBAAIAAgBIgBAAIAAgBIgBAAIAAABIgBAAIAAAGIgBAAIAAAAIABABIABAAIABgBIAAAAIABABIABAAIABABIACAAIAAACIgCAAIAAABIgDAAIAAgBIgBAAIAAgBIgCAAIAAABIgBAAIAAABIgDAAIAAABIACAAIAAABIgBAAIAAACIABAAIAAABIABAAIAAAEIAEAAIAAABIABAAIgBgBIABAAIAAgCIABABIAAgBIABAAIAAACIACAAIAAACIgCAAIgBABIgBAAIAAABIABAAIAAAAIABABIgBABIgBAAIgBgBIAAgBIAAAAIgBAAIgBAAIgBAAIgBABIAAAEIgBABIAAACIABAAIAAAFIABABIABAAIABABIAAABIABABIAAABIAAAAIABABIABAAIAAACIABAAIAAADIADAAIAAgBIACAAIAAAHIgBAAIAAABIgBAAIAAABIgBAAIAAABIAAAAIAAACIgDAAIAAABIgCAAIAAACIAAAAIAAAEIAAABIAAACIABAAIAAAFIgBAAIAAABIAAAAIgGgMIgBgDIgBgBIgEgIIgaABIAAgBIgEAAIABgBIgBAAIAAgCIgBAAIAAgBIABAAIAAgBIgBAAIAAgCIgBAAIAAgBIgBAAIAAgBIACAAIAAAAIADAAIABgBIAAgCIgBgCIgDAAIgBABIgCAAIgBABIgCAAIAAABIgCAAIgBABIgDAAIAAABIgCAAIAAAAIgDAAIgBABIgBAAIgBgBIABAAIABAAIAAgBIgBAAIAAgBIgBAAIAAgEIABAAIgBgBIAAgDIgBAAIAAgBIgCAAIAAgCIABAAIAAgBIgEAAIAAgDIgBAAIAAABIgCAAIAAgCIgBAAIABAAIgBAAIAAgDIgBAAIAAgCIABAAIAAgDIgBAAIAAABIgBgBIABAAIAAgBIAAAAIAAgDIAAgCIgBAAIAAgBIABAAIAAgBIABAAIgBgBIABAAIAAgBIACAAIAAgBIgBAAIAAgBIAEAAIAAgCIABAAIAAgCIABABIAAgBIABAAIAAgBIABAAIgBgBIABAAIAAgBIABAAIAAgBIgCAAIABgBIgBAAIAAgBIACAAIAAgBIgBAAIAAgBIABAAIAAgBIgBAAIAAgDIgDAAIABAAIgBgBIgEAAIAAgBIgBAAIAAgDIgBAAIAAgBIgEAAIgBgBIABAAIAAgCIgBAAIAAABIgBAAIAAACIgBgBIgBAAIAAABIgCAAIABgBIgCAAIAAgCIgBAAIAAACIgBABIABAAIgBABIgBAAIAAgBIgDAAIABgBIgBgBIgBAAIAAgBIgBAAIAAABIgBAAIABABIgBAAIAAABIgDAAIAAABIgBgCIAAgCIgCAAIgBABIgBABIgDAAIAAgDIgBgBIAAgFIgBgBIAAgDIgBAAIAAgGIACAAIAAgBIgBAAIABgBIAAgBIgCAAIAAgBIgDAAIAAgCIAAgBIAAgBIAAAAIAAgBIAAAAIAAgBIgBAAIAAgBIgBAAIAAgBIABAAIAAgEIABAAIAAgCIABAAIAAgBIgBgBIADAAIACgCIAAgCIADgDIABAAIAAABIABgBIAAgBIgBAAIAAAAIgBAAIgBAAIgBgBIAAABIgDAAIgDAAIAAABIgBAAIgBgBIAAAAIABgBIABAAIAAgBIAAAAIAAgBIgBAAIAAABIgCAAIAAABIgBAAIAAABIgBgBIAAgBIABAAIgBgBIAAgBIABAAIAAgBIgCAAIABgBIgCAAIAAgBIgCgBIAAgBIgBAAIAAACIABABIABAAIAAADIABAAIAAACIgGAAIAAABIgBAAIAAACIgBAAIAAAFIABAAIAAABIABABIAAABIgBABIgCAAIgBABIgDAAIAAABIgBAAIAAABIABABIABgBIABAAIAAABIgBAAIAAABIgBAAIAAACIgBAAIgBABIgBAAIAAABIgBAAIAAABIABAAIAAABIABAAIAAABIABABIAAAHIgBAAIAAABIgBABIgCAAIgBgBIAAgBIABAAIAAgBIABAAIAAgDIgBAAIAAgBIgBAAIAAgBIgBAAIAAgBIgDAAIAAADIgDAAIAAgCIABAAIAAgCIACAAIAAgCIgCAAIAAABIgBAAIAAgCIgDAAIgBABIgBAAIAAgBIgBAAIAAgCIABAAIgGAAIAAgEIgBAAIAAgCIABgBIgBgBIgFAAIAAgBIgBAAIAAgBIABAAIAAgCIgBAAIAAgBIABAAIAAgBIABAAIAAgBIABAAIAAgCIABAAIAAgBIgBAAIgCAAIAAgBIABAAIAAgBIACAAIAAgCIABAAIABABIAAgCIACAAIABgBIAAgCIACAAIAAACIABAAIABgBIABAAIAAgBIABgCIAAgBIABAAIAAgBIACAAIAAgCIABAAIAAgBIgBAAIAAgBIgCAAIAAgBIABgBIABAAIgBAAIgBgBIgCAAIgBgBIgJAAIAAgEIgCAAIAAgDIABgBIgCAAIAAgBIgCAAIABgBIABAAIAAgBIABAAIAAgBIACAAIAAgBIABAAIAAgDIACABIgBgBIAAAAIgCAAIgBABIgCAAIAAABIgCAAIgBgCIAAgEIABAAIgBgBIgDAAIAAgBIABgBIABAAIAAgBIABAAIAAgDIgBgBIAAAAIAAgBIACAAIAAgFIAEAAIABABIABAAIAAgBIgBAAIAAgFIgBgBIAAgBIgDAAIAAABIgDAAIAAgCIgBAAIAAgBIgBAAIAAgBIgBAAIABgBIgDAAIAAgBIgCAAIAAgBIABgBIAAgBIABAAIAAgBIABAAIAAgBIABAAIAAgBIABAAIABgBIAAgBIgBAAIAAgEIABABIABAAIAAgBIADAAIAAABIACAAIAAgBIABAAIABABIAEAAIABABIABAAIAAgBIABgBIgBgBIABAAIAAgBIABAAIAAgBIABgBIgCgBIAAgCIgBgBIABgBIAEAAIAAgBIAAAAIAAACIACAAIAAABIACAAIAAACIABAAIAAgBIABABIABAAIAAABIACAAIAAgBIABAAIAAACIABAAIAAgBIABAAIAAABIACAAIABABIgBAAIAAABIABAAgAkblKIABABIAAgBgAEfHMIgBgBIAAgBIgDgDIgCgBIgBgCIgCgBIgBgBIgCgBIAAgBIgBAAIAAgBIgBAAIAAgBIgBAAIgBgBIAAgBIgLgMIgBAAIgFgGIgCgBIgBgBIgBgBIgKgLIgBAAIAAgBIgGgGIgCgEIgBgBIABgBIABACIACACIABAAIABgCIACADIAKAAIAAgBIAJgJIABABIAAgCIABgBIABgBIACAAIAAgCIABAAIACgCIAAgBIACgBIAAgBIABAAIAAgBIABAAIAAgBIABAAIAAgBIADgCIABAAIABABIABgBIAAgBIABAAIAAgBIABAAIAAgBIADAAIACABIABAAIACgEIAAAAIAAABIACAAIAAABIABABIABAAIABgBIABAAIABABIAAABIABAAIABABIABgBIAAgBIABAAIAAgBIABAAIAAgBIABAAIAAgBIABgBIAAgBIABAAIAAgBIABAAIAAgBIACACIgBAAIABABIAAgBIABAAIAAgBIABAAIAAgBIABAAIABABIADAAIAAgDIAFAAIAAgEIgBAAIgBgBIAAABIgBAAIABABIgBAAIAAABIgBAAIAAgDIABgBIAAgBIABAAIAAAAIACAAIAAAAIAGAAIACABIABAAIAAACIgBAAIAAACIABAAIAAABIACAAIAAACIABAAIABABIAAABIgCAAIAAABIABAAIAAABIgBAAIAAABIgBABIAAACIgCAAIAAgBIgBAAIAAgCIgBAAIAAgBIAAADIAAABIAAACIABAAIAAAAIgBAAIAAABIABABIACAAIAAACIgBAAIAAABIAEAAIAAgBIACAFIgBABIgBAAIAAABIABAAIAAABIACABIAAABIACAAIAAABIAAADIAAAAIgBAAIgBAAIAAAAIgBAAIACACIgBAAIAAABIgBAAIgBABIAAABIgBAAIgBgBIAAABIgCAAIAAABIgBgBIgDAAIAAACIgEAAIgBADIgCABIgBgCIgCAAIACgBIgBgBIgDACIABAAIgBACIgFAAIAAgDIgCAAIAAgBIABAAIgBgCIgBABIgBAAIgBABIgCABIABABIABAAIAAACIABACIAAACIACACIACABIABAAIAAABIABAAIABABIACAAIAAAMIABABIgBAAIgBABIABABIgDABIAAAGIABABIAAABIABAAIACAFIgCABIgBgBIgDABIAAAAIgBABIgBAAIAAABIgBAAIACACIgBAAIAAABIgBAAIgBABIgDAAIACABIgDAAIAAACIgBABIAAADIgDAAIgCABIgCgBIgBAAgAFwGKIAAgBIgDAAIAAABIgBgBIgEAAIAAAFIACAAIAAABIABAAIAAABIgBAAIAAACIgBAAIgBgBIAAABIgBgBIgBAAIAAABIAAAAIAAABIgCAAIAAABIAAABIAAAAIAAADIACAAIAAABIgCAAIAAABIAAgBIgBAAIAAABIABAAIAAACIgBAAIAAACIgCAAIAAACIAAAAIAAAEIgBAAIAAABIgBAAIAAADIgBAAIAAABIgBABIAAAEIgBAAIAAADIgBAAIAAABIABAAIAAACIgBAAIAAACIgBAAIAAABIgBAAIAAABIABAAIAAAFIABAAIAAACIgBAAIAAABIABAAIAAACIgBgBIAAABIACAAIAAACIgDAAIAAACIgBAAIAAABIABAAIAAACIgBAAIAAABIABAAIAAABIgBAAIAAABIABAAIAAAEIgBAAIAAACIABAAIAAABIgBAAIAAACIgBAAIAAABIgBAAIAAABIABAAIAAACIgBAAIAAACIgCAAIAAACIAAAAIAAABIgCAAIAAAEIAAAAIAAADIgBAAIAAABIgBAAIAAACIgBAAIgCACIAAABIAAABIgBAAIAAABIABAAIAAABIgCAAIAAACIgBAAIAAABIgBAAIAAABIABAAIAAABIgBAAIABACIADACIACACIAIAHIABACIACACIADACIABACIABAAIACADIACAAIABAAIAAAAIACAAIAAgCIAAAAIAAgEIABAAIAAgBIABAAIABgBIACAAIAAgBIABAAIAAgBIABAAIAAgBIABAAIAAgBIABAAIABgBIAAgEIAAgBIAAgDIACAAIAAgBIgCAAIAAgBIAAAAIAAgDIACAAIAAgBIABAAIAAgDIAAAAIAAgBIACAAIAAABIACAAIAAgCIgCAAIAAgBIACAAIAAgBIABAAIAAgBIABAAIAAgBIABgBIAAAAIgBAAIAAgFIABgBIAAgBIABAAIgBgBIAAgBIgBAAIAAgIIgBAAIAAgBIAAAAIAAgBIgBgBIgCAAIAAgBIAAAAIAAgBIgCAAIAAgBIAAAAIAAgBIAAAAIAAgCIAAgBIACAAIAAgFIAAAAIAAgCIgCgCIAAAAIgDgCIAAgBIgBAAIAAgBIgBAAIAAgBIgBAAIAAADIgBAAIAAABIgDAAIgBABIgBAAIAAAAIgBAAIABgBIgBAAIAAgDIgCgBIAAAAIAAgBIAAAAIAAgBIAAgBIgBAAIgCgBIAAAAIgBgBIABAAIAAgBIADAAIgBABIABABIACAAIAAgCIAAAAIAAgBIABAAIAAgDIABAAIAAgBIABAAIAAgCIABAAIABABIAAABIABgBIAEABIAAgBIACAAIAAgBIABAAIAAgBIACAAIAAgBIACAAIABgBIABAAIAAgBIABAAIAAgDIABgBIAAgBIABAAIAAgBIABgBIgBAAIAAgCIgBAAIAAgCIgBAAIAAgCIABAAIAAgDIgBAAIAAgCIABgBIAAgBIgBAAIAAgBIgBAAIAAgEIABAAIAAgBIgBAAIAAgDIABgBIAAgCIgBAAIAAAAIgBAAIAAgBIABAAIAAgBIgBAAIAAABIgDAAIAAABIgFAAIAAABIAAAAIAAABIgBgBIAAgDg");
	this.shape_4.setTransform(28.7,2.3);

	this.shape_5 = new cjs.Shape();
	this.shape_5.graphics.f("rgba(255,255,255,0)").s().p("AFjILIgBAAIgEgEIgBAAIAAgBIgDgCIgCgCIgBgCIgIgHIgDgDIgCgCIgBgBIABAAIAAgBIgBAAIAAgBIABAAIAAgBIABAAIAAgCIABAAIAAgBIgBAAIAAgBIABAAIABgBIAAgBIACgCIABAAIAAgDIABAAIAAgBIABAAIAAgDIAAAAIAAgDIABAAIAAgBIABAAIAAgCIACAAIAAgCIABAAIAAgCIgBAAIAAgBIABAAIAAgBIABAAIAAgDIABAAIAAgBIgBAAIAAgCIABAAIAAgDIgBAAIAAgBIABAAIAAgBIgBAAIAAgBIABAAIAAgCIgBAAIAAgBIABAAIAAgCIADAAIAAgCIgCAAIAAgCIABABIAAgCIgBAAIAAgBIABAAIAAgBIgBAAIAAgFIgBAAIAAgBIABAAIAAgBIABAAIAAgCIABAAIAAgCIgBAAIAAgBIABAAIAAgEIABAAIAAgDIAAgBIAAgBIABAAIAAgDIABAAIAAgBIACAAIAAgEIABAAIAAgCIABAAIAAgDIABAAIAAgBIgBAAIAAgBIABAAIAAABIAAgBIABAAIAAgBIgBAAIAAgDIAAAAIAAgBIAAgBIABAAIAAgBIABAAIAAgBIABAAIABABIAAgBIABABIABAAIAAgCIABAAIAAgBIgBAAIAAgBIgCAAIAAgGIAEAAIABABIAAgBIACAAIAAABIAAAAIAAAEIAAABIAAgBIABAAIAAgCIAGAAIAAgBIABAAIAAgBIACAAIAAABIgBAAIAAABIABAAIAAABIABAAIAAACIgBABIAAADIABAAIAAABIgBAAIAAAEIABAAIAAABIABAAIAAABIgBABIAAABIABAAIAAAEIgBAAIAAACIABAAIAAACIABAAIAAACIABAAIgBABIAAABIgBAAIAAABIgBABIAAADIgBAAIAAAAIgCAAIAAABIgBAAIgBABIgCAAIAAABIgCAAIAAACIgCAAIAAABIgDgBIgBABIAAgBIgBgBIgBAAIAAACIgBAAIAAABIgBAAIAAADIgBAAIAAABIgBAAIAAACIgBAAIgBgBIABgBIgDAAIAAABIgCAAIACABIABAAIABABIABAAIAAABIAAABIAAAAIAAABIAAAAIABAAIAAADIACAAIgBABIABABIAAgBIABAAIABgBIADAAIAAgBIABAAIAAgCIABAAIAAAAIABAAIAAABIABAAIAAABIADACIAAABIACACIAAACIABAAIAAAFIgCAAIgBABIAAACIABAAIAAABIgBAAIAAAAIACAAIAAABIABAAIAAABIABAAIAAABIAAACIABAAIAAABIABAAIAAAIIABAAIAAABIABABIgBAAIAAABIgBABIAAAEIABAAIAAABIgBABIAAABIgBAAIAAABIgBAAIAAABIgBAAIAAABIABAAIAAACIgBAAIAAgBIgCAAIAAABIgBAAIAAADIgCAAIAAABIgBAAIAAADIgBAAIAAAAIACAAIAAABIgBAAIAAAEIgBABIAAAEIAAABIgBAAIAAABIgBAAIAAABIgBAAIAAABIgBAAIAAABIgCAAIgBABIgBAAIAAABIgBAAIAAADIgBAAIAAADIgBAAIAAAAgAEgHLIgBAAIAAABIgBgBIgBgBIgCgDIgCgBIgCgCIgCgBIAAgCIgCgBIAAgBIgBAAIAAgBIgBAAIAAgBIgBAAIgBAAIAAgBIgMgMIgBgBIgEgFIgCgBIgBgBIgBgBIgKgMIgBAAIAAgBIgGgGIgCgDIgBgBIABgBIABACIACACIABAAIABgCIACADIAKAAIAAgBIAJgKIABABIAAgCIAAgBIABAAIACAAIAAgCIACAAIACgDIAAAAIABgBIAAgBIABAAIABgBIABAAIAAgBIABAAIAAgBIADgCIABAAIABABIABgBIAAgBIABAAIAAgCIAAAAIAAgBIAEAAIACABIABAAIABgDIABAAIAAAAIACAAIAAABIABABIABAAIABgBIABAAIABABIAAABIABAAIABABIAAgBIAAgBIABAAIAAgBIABAAIAAgBIACAAIAAAAIABgBIAAgBIABAAIAAgBIABAAIAAgCIABADIAAAAIAAABIABgBIABAAIAAgBIABAAIAAgCIABAAIABACIADAAIAAgDIAEAAIAAgEIgBAAIgBgBIAAABIAAAAIAAABIAAAAIAAABIgBAAIAAgDIABgBIAAgBIAAAAIAAgBIACAAIAAABIAHAAIACABIABAAIAAACIgBAAIAAACIABAAIAAABIACAAIAAACIABAAIABAAIAAACIgCAAIAAABIABAAIAAABIgBAAIAAABIgBAAIAAACIgCAAIAAgBIgBAAIAAgBIgBAAIgBgBIAAACIABABIAAACIABAAIAAABIgCAAIAAABIACABIACAAIAAACIgBAAIAAABIAEAAIAAgBIACAEIgBACIgBAAIAAABIABAAIAAABIACABIAAAAIABAAIABABIAAADIgBAAIgBABIAAgBIAAABIgBAAIABACIAAAAIAAABIgBAAIgBABIAAABIgBAAIgBgBIAAABIgCAAIAAABIgBgBIgDAAIAAACIgEAAIgCADIgCABIAAgCIgCAAIACgBIgBgBIgDACIABAAIgBACIgFAAIAAgDIgCAAIAAgBIABAAIgBgCIgBABIgBAAIgBABIgDABIABABIACAAIAAACIABACIAAABIACACIACACIABAAIAAABIABAAIABABIACAAIAAAMIABAAIgBAAIgBABIABABIgDABIAAAHIABABIAAABIABAAIACAFIgCAAIgBAAIgDAAIgBAAIAAABIgBAAIAAABIgBAAIACACIgBABIAAABIgBAAIgBABIgEAAIADABIgEAAIAAACIAAABIAAADIgDAAIgCABgAjRkLIgGgMIgBgDIgBgBIgDgIIgbABIAAgBIgEAAIABgBIgBAAIAAgBIgBAAIAAgBIABAAIAAgBIgBAAIAAgDIgBAAIAAgBIgBAAIAAgBIACAAIAAAAIADAAIABgBIAAgCIgBgCIgDAAIgBABIgCAAIAAABIgCAAIAAABIgDAAIgBABIgDAAIAAABIgCAAIAAAAIgDAAIgBABIgBAAIgBgBIABAAIABAAIAAgBIgBAAIAAgBIgBAAIAAgEIABAAIgBgBIAAgDIgBAAIAAAAIgBAAIAAgCIABAAIAAgBIgFAAIAAgEIgBAAIAAABIgCAAIAAgCIgBAAIABAAIgBAAIAAgDIAAAAIAAgCIAAAAIAAgDIAAAAIgBABIgBgBIABAAIAAgBIABAAIAAgCIAAgCIgCAAIAAgCIABAAIAAgBIABAAIAAgBIAAAAIAAgBIACAAIAAgBIgBAAIAAgBIAFAAIAAgCIABAAIAAgCIABABIAAgBIABAAIAAgBIAAAAIAAgBIAAAAIAAgBIABAAIAAgBIgBAAIAAAAIAAAAIAAgBIABAAIAAgBIgBAAIAAgBIABAAIAAgCIgBAAIAAgDIgCAAIABAAIgBgBIgFAAIAAgBIgBAAIAAgDIgBAAIAAgBIgEAAIgBgBIABAAIAAgCIgBAAIAAABIgBAAIAAACIgBgBIgBAAIAAABIgBAAIAAgBIgBAAIAAgCIgBAAIAAACIgBABIABAAIgBABIgCAAIAAgBIgDAAIABgBIgBgBIgBAAIAAgBIgBAAIAAABIgBAAIABABIgBAAIAAABIgDAAIAAABIgBgCIAAgCIgCAAIgBABIAAABIgDAAIAAgDIgCAAIAAgGIgBgBIAAgDIgBAAIAAgGIACAAIAAgBIgBAAIABgBIAAAAIgCAAIAAgBIgCAAIAAgCIgBgCIAAgBIABAAIAAgBIgBAAIAAgBIgBAAIAAgBIgBAAIAAgBIABAAIAAgEIACAAIAAgCIAAAAIAAgBIAAgBIACAAIACgBIAAgCIAEgEIABAAIAAABIAAgBIAAgBIAAAAIAAAAIgBAAIgBAAIgBgBIAAABIgEAAIgCAAIgBABIgBAAIgBgBIAAAAIABgBIABAAIAAgBIABAAIAAgBIgCAAIAAABIgCAAIAAABIgBAAIAAABIgBgBIAAgBIABAAIgBgBIAAgBIABAAIAAgBIgCAAIABgBIgCAAIAAgBIgBgBIAAgBIgBAAIAAACIABABIAAAAIAAADIABAAIAAACIgGAAIAAABIgBAAIAAACIgBAAIAAAGIABAAIAAAAIABABIAAABIgBABIgCAAIgBABIgDAAIAAABIgBAAIAAABIABABIABgBIABAAIAAABIgBAAIAAABIgBAAIAAACIgBAAIgBABIgBAAIAAABIgBAAIAAABIABAAIAAACIABAAIAAABIABABIAAAGIgBAAIAAABIgBABIgCAAIgBgBIAAgBIABAAIAAgBIABAAIAAgDIgBAAIAAgBIgBAAIAAAAIAAAAIAAgBIgDAAIAAACIgEAAIAAgBIABAAIAAgCIADAAIAAgDIgDAAIAAACIgBAAIAAgDIgDAAIgBABIgBAAIAAgBIgBAAIAAgCIABAAIgGAAIAAgEIgBAAIAAgCIABgBIgBgBIgFAAIAAgBIgBAAIAAgBIABAAIAAgBIgBAAIAAgBIABAAIAAgBIABAAIAAgCIACAAIAAgCIABAAIAAgBIgBAAIgDAAIAAgBIABAAIAAgBIADAAIAAgCIABAAIAAABIAAgCIACAAIABgBIAAgCIACAAIAAACIABAAIABgBIABAAIAAgBIACgCIAAAAIAAAAIAAgBIACAAIAAgCIABAAIAAgCIgBAAIAAgBIgCAAIAAgBIABgBIABAAIgBAAIgBgBIgCAAIgBgBIgIAAIAAgEIgDAAIAAgDIACgBIgDAAIAAAAIgCAAIABgBIABAAIAAgBIABAAIAAgBIADAAIAAgCIABAAIAAgDIABABIgBgBIAAAAIgBAAIgBABIgDAAIAAABIgCAAIgBgCIAAgEIABAAIgBgBIgDAAIAAgBIABgBIABAAIAAgBIABAAIAAgCIgBgBIABAAIAAgBIABAAIAAgGIAFAAIABABIABAAIAAgBIgBAAIAAgFIgBgBIAAgBIgEAAIAAABIgDAAIAAgCIgBAAIAAgBIgBAAIAAgBIgBAAIABAAIgDAAIAAgBIgCAAIAAgBIABgBIAAgCIABAAIAAgBIABAAIAAgBIABAAIAAgBIABAAIABgBIAAgBIgBAAIAAgEIABABIACAAIAAgBIACAAIAAABIACAAIAAgBIACAAIABABIADAAIABABIABAAIAAgBIABgBIgBgBIABAAIAAgBIABAAIAAgBIABgBIgCAAIAAgCIgBgBIABgCIAEAAIAAgBIABAAIAAADIABAAIAAABIACAAIAAACIABAAIAAgBIACABIABAAIAAAAIACAAIAAAAIAAAAIAAABIABAAIAAgBIABAAIAAABIACAAIABABIgBAAIAAABIABAAIAAgBIABABIAAgBIABAAIABgBIABAAIAAACIADAAIAAgBIAGAAIAAgBIABAAIAAgBIABAAIAAABIADAAIAAgBIgBAAIAAgBIACAAIAAABIABAAIAAAAIACAAIAAABIABAAIAAgBIABAAIAAgDIABAAIAAgEIgCAAIgBgBIAAAAIAAAAIgBAAIAAgBIABAAIAAgCIgBAAIAAgEIgGAAIAAgBIgCAAIAAgBIAAAAIgBgBIABAAIgBAAIgBgCIAAgDIABgBIAAgCIABgBIAAgCIABgBIAAgBIABAAIAAgBIABABIACAAIAAABIABABIAAACIABAAIABAAIABABIAAgBIAAAAIAAABIABAAIAAABIABAAIAAABIACAAIAAABIADAAIAAACIABAAIAAABIABAAIAAABIACAAIAAABIACAAIAAAAIADAAIAAABIACAAIAAABIAEAAIAAABIAGAAIAAABIAOAAIAAgBIAGAAIAAgBIAEAAIACgBIALAAIABgBIAGAAIAAAAIAEAAIAAgBIAGAAIAAgBIAFAAIAAgBIADAAIAAgCIAEAAIAAgBIAFAAIAAgBIADAAIgBABIAAAEIACAAIAAADIACACIAAABIABAAIAAAEIABAAIgBABIgBAAIAAABIgBAAIAAAAIgCAAIABABIgBABIAAABIgBAAIAAAIIABABIgBAAIgBACIgBABIgCACIgBAAIAAgBIgCAAIAAgBIgCAAIgBABIgDAAIAAgBIgBAAIABgBIAAgBIgBAAIAAgBIgCAAIAAgBIgBAAIAAgCIgDAAIAAABIAAAAIAAADIgBAAIAAABIgBAAIAAABIgEADIgBAAIAAAAIABAAIAAABIADAAIAAABIACAAIAAADIgBAAIAAACIgBAAIAAABIgCAAIgBAAIAAACIgBAAIAAAFIABABIAAABIgCAAIAAgBIgBAAIAAABIAAAAIAAABIgBgBIgBAAIAAABIgBAAIAAABIgBAAIAAACIgDAAIAAACIgBAAIAAABIACACIgBAAIABAAIAAAEIABAAIAAADIABAAIAAACIABABIAAADIACAAIAAAEIgBAAIAAABIABAAIABAAIABABIAAABIACAAIABgBIAEAAIABgBIADAAIABACIACAAIAAACIABgBIAAACIACAAIAAABIACAAIAAABIABAAIAAACIgBABIABAAIAAACIgCADIAAgCIgBAAIAAACIgBAAIAAACIgBAAIAAgBIgBAAIgBgBIAAgCIABAAIABACIAAgCIABAAIAAgCIgDAAIAAABIgCAAIAAADIABAAIAAABIABAAIAAACIgFAAIAAAAIABAAIAAACIgBAAIAAABIAEAAIABgBIABAAIAAgBIADAAIAAgBIABAAIAAAAIAFAAIAAAAIABABIAAADIABAAIAAABIABAAIAAgEIABAAIAAABIACAAIAAgBIABAAIAAgBIACAAIAAAAIABAAIAAgBIACAAIAAgBIABAAIAAgBIABAAIABABIABAAIAAABIACAAIAAADIgCAAIAAACIgBAAIAAABIgCACIAAABIAAAAIAAACIgBAAIAAABIgBABIAAAGIABAAIAAgBIABAAIAAgCIABAAIAAgCIABACIABAAIAAABIACAAIAAACIgCAAIAAAAIgCAAIAAABIgBAAIAAABIgBABIAAABIgBAAIAAACIgBAAIAAACIABAAIAAABIABAAIAAADIgBAAIAAABIgBAAIAAACIABABIABAAIABgBIABAAIAAABIABAAIABABIACAAIAAABIABAAIAAAAIABAAIAAABIABAAIAAABIAAAAIAAABIABAAIAAACIgBAAIAAABIgBABIAAABIABAAIAAABIAAABIABAAIAAAAIABABIAAACIgCAAIAAACIgBAAIAAABIgBAAIgBABIAAABIgCAAIAAABIACAAIABgBIABAAIAAABIABAAIAAABIABAAIAAgBIABAAIABgBIABAAIAAAAIABAAIAAADIABAAIAAABIABAAIAAABIACAAIAAABIACAAIAAACIgCAAIAAABIgBAAIAAABIgBAAIAAACIgBAAIgBADIAAACIABABIAAgBIABAAIAAgBIABAAIABgBIABAAIAAABIABAAIAAABIABABIAFAAIAAAAIABAAIAAACIAAAAIAAABIgCAAIAAABIgBAAIAAABIgCAAIgBABIgBAAIAAgBIgBgBIgBAAIAAABIgBAAIAAABIgCAAIAAgCIgBAAIAAgBIgCAAIAAABIgBAAIAAADIgBAAIAAABIgBAAIAAABIgBAAIAAgEIgBgBIAAgCIgDAAIAAABIgBABIAAABIgBAAIAAgBIgBAAIAAgBIgBAAIAAABIgBAAIAAAGIgBAAIAAAAIABABIABAAIABgBIAAAAIABABIABAAIABABIACAAIAAADIgCAAIAAABIgDAAIAAgBIgBAAIAAgCIgCAAIAAACIgBAAIAAABIgDAAIAAABIACAAIAAABIgBAAIAAABIABAAIAAABIABAAIAAAEIAEAAIAAABIABAAIgBgBIABAAIAAgCIABABIAAgBIABAAIAAACIACAAIAAACIgCAAIgBABIgBAAIAAABIABAAIAAAAIABABIgBABIgBAAIgBgBIAAgBIAAAAIgBAAIgBAAIgBAAIgBABIAAAFIgBABIAAABIABAAIAAAFIABABIABAAIABABIAAABIABABIAAABIAAAAIABABIABAAIAAACIABAAIAAAEIAEAAIAAgBIABAAIAAAGIAAAAIAAABIgBAAIAAABIgBAAIAAABIgBAAIAAACIgDAAIAAABIgCAAIAAACIAAAAIAAAFIAAABIAAABIABAAIAAAFIgBAAIAAABgAkalIIAAgBIAAAAg");
	this.shape_5.setTransform(28.7,2.3);

	this.timeline.addTween(cjs.Tween.get({}).to({state:[{t:this.shape_5},{t:this.shape_4},{t:this.shape_3},{t:this.shape_2}]}).wait(1));

	// Capa_3
	this.shape_6 = new cjs.Shape();
	this.shape_6.graphics.f("#394C64").s().p("AjgFTIgCgGIAAgFIgFgRIgMgJIABgEIgDgKIgEAAIgFADIABgBIgBAAIAAgBIACgCIAAgBIACAAIABABIAAgDIABAAIAAABIABAAIAAgBIABAAIACAAIABgBIAAABIABAAIABgBIAAgBIACAAIABgBIABAAIAAABIABAAIAAABIABAAIgBABIADAAIAAAAIACAAIAAABIABgBIAAACIADAAIAAADIABAAIAAABIABAAIAAABIABAAIAAgCIABgDIABgCIAAAAIgBgCIAFgWIABgCIAEgHIAAgDIgCgBIgCgCIgDgFIAAgBIgBAAIgCgDIgEgGIAEgBIADgCIABgBIAHAAIACgBIABABIADgDIAcgPIAUAUIABAAIACACIAEAAIAAgCIACgCIADAAIAAgBIgBAAIgBgCIABgBIgBAAIABgBIABgBIAAAAIAAABIADgBIACgCIABAAIAAgDIABgCIABgBIABgBIABgDIABABIABAAIAAgBIABAAIABgBIACAAIAAgBIACAAIAAgBIAAAAIAAgBIABAAIAAgBIABAAIABgBIABAAIAAgBIABAAIABgBIABAAIAAgBIADAAIABABIADAAIAAAEIACAAIAAACIAJAAIgDAEIAAACIgBAAIgBACIAAACIADADIgBACIAGAMIAAABIABABIgEADIAAABIgCACIgBAAIAAABIgDAAIAAABIAAAAIAAgBIgEAAIAAABIABAAIAAADIgBABIAAABIgBAAIAAAAIABABIgBAAIAAABIABABIAAADIgDgBIgBABIgEAAIgBgBIgBAAIABgBIgCAAIAAgBIgBAAIAAABIABAAIgBACIgDAAIAAACIACACIABACIAAABIgBABIgCAAIgBACIAAACIAEAAIAEABIAAgBIABABIABAAIABgBIABAEIgBAFIgBAAIAAABIgDAAIAAABIgBAAIAAADIABAAIAAACIgEAAIgBABIAAgBIgCAAIgBgBIgCAAIAAABIgBAAIgBABIAAABIgKAAIgBAAIgBAAIAAABIgCABIgBABIAAADIABABIgDAAIgBABIgCAAIgCABIgBAAIAAABIgBAAIgBABIAAABIABAAIAAACIABAAIAAABIgCAAIgBABIAAABIgEAAIgBABIAAAAIgFAAIAAABIgEAAIAAABIgDAAIAAABIgBAAIAAABIgCAAIAAABIgBAAIAAABIgBABIAAABIAAABIgBABIgBABIAAABIgBAAIAAABIgBABIAAACIABAAIAAACIABAAIAAABIABAAIAAACIgBAAIAAABIgFAAIgBABIgBAAIgBABIAAABIgCAAIgBABIgDAAIAAABIgCAAIAAACIAAAAIAAABIAAAAIAAACIgBAAIAAABIgBAAIAAABIgQAAIAAABIgBAAIAAABIgCAAIAAABgAIJD2IAAgDIgCAAIAAgMIgDAAIAAgBIgBAAIABAAIABAAIAAgCIABAAIAAgBIABAAIAAgCIABAAIgBgBIgBAAIAAgBIgCAAIAAgBIgBAAIAAgBIgBAAIAAgBIgBAAIgDgDIgCAAIAAgBIgBAAIAAgBIgBAAIgBgBIgBAAIAAgCIAAAAIAAAAIgBAAIAAgCIgBAAIgBgBIgBAAIAAgBIgGAAIgBgBIgCAAIgEgBIgEAAIgCABIgBgBIAAgBIgBgBIgDAAIgBACIgCAAIAAABIgCAAIAAABIgBABIAAABIgBAAIAAABIgBAAIAAABIgCAAIgBAAIAAABIgCACIgBAAIAAgBIgBAAIAAgCIABAAIAAgBIABAAIAAgCIABAAIAAgCIABAAIAAgBIABAAIAAgBIABAAIABgBIAAgBIABAAIAAgBIABAAIgBgBIABAAIAAgBIACAAIACgCIAAgBIABAAIAAgCIgCABIgCAAIAAgDIABgBIgCgBIgEAAIAAgBIgBgBIgBAAIgBgBIgCAAIAAABIgBAAIgBgBIABAAIAAgBIACgBIAFAAIABgBIAAgFIAAgDIAAgBIABABIAAABIABAAIAAABIABAAIAAgBIABAAIAAgBIABAAIAAgBIABgBIgBAAIAAAAIgBAAIAAgBIgBAAIAAgBIABAAIAAgBIgBAAIAAgBIABAAIgBgBIAAgJIABAAIAAgDIABAAIAAgBIADAAIAAgBIABAAIAAgBIgBgBIgBAAIAAgCIgBAAIgBgBIgBAAIAAgEIgBAAIgBABIgCAAIAAABIAAgCIAAAAIAAgCIABABIAAgBIABAAIgBgBIAAgBIgBgBIACAAIAAgBIACAAIAAgCIgBAAIAAgBIgBAAIgBgBIgBgDIgCgBIgBgBIgBAAIAAADIABAAIAAACIABAAIABABIAAABIgCAAIAAAAIgBAAIgBABIABAAIAAABIgBAAIgBABIgBAAIgBgBIgBAAIgDgBIgBAAIgBgBIgBAAIAAAAIgBAAIAAAAIgBAAIAAABIgBAAIAAABIgBAAIAAgCIgBAAIAAgBIgDAAIAAABIgBAAIAAAAIABAAIAAABIABAAIAAABIABABIgBAAIgBABIgBAAIAAADIgCgCIgBAAIAAgBIgCAAIAAgBIgBAAIgBABIAAACIgBgBIgBAAIgBgBIAAgBIgBAAIgBABIAAABIAAAAIAAgBIgCgBIgBgBIgBAAIAAgCIABAAIAAAAIgDgDIAAABIgCAAIAAABIgCAAIABgEIAAgBIgBgBIgDgCIABgDIAAgDIgCAAIAAgBIABgBIAAgBIACAAIABAAIABgBIAAgBIABAAIABgBIgDgBIgEAAIAAACIgCAAIAAACIgCAAIAAAAIgCAAIABAAIgBAAIAAADIgBAAIAAABIgEAAIAAgBIgCAAIgBgBIgBAAIgCgBIgDAAIAAgEIABgBIgBAAIAAgBIgBgBIAAgBIgBAAIABgBIABgBIABAAIAAgFIABABIAAgBIABgBIgBAAIgBgBIAAgBIgBAAIgBgBIgBAAIgCAAIgIAAIgCACIgBgBIAAgBIgBAAIgBAAIABAAIABgCIAAgCIABgBIgBgCIgEgFIgBgCIAAgCIAAgBIgBgBIgBAAIAAgBIgCAAIAAgDIABAAIAAgGIABAAIAAgBIgFAAIAAADIgDAAIgBgBIgBAAIAAgDIAEgBIAIAAIAAABIAAgCIAEgCIgBgBIgBgBIAAgBIADgCIAAgDIgBAAIAAgBIgBAAIABgCIABAAIgBgBIgBgBIAAgBIgBAAIgCgBIgBAAIAAgBIgBAAIAAgDIACAAIAAgBIABgBIABABIADAAIAAgGIABgBIAAgCIgDAAIAAgBIABAAIAAgBIAEAAIAAgBIAEAAIACABIABAAIAAABIADAAIADADIADAAIgBADIAAACIABAAIAAACIgBAAIgBAAIABAAIAAABIABAAIAAgBIACAAIABABIAAABIABABIABAAIAAAMIgEAAIAAAEIgBABIgBAAIAAABIABABIACABIAAABIABAAIAAABIABAAIAAABIACAAIAAABIADAAIAAACIABAAIgBABIABAAIAAAEIABABIAAABIABABIAAACIgCAAIAAABIABABIgBABIACAAIAAABIABAAIAAABIACAAIAAABIABAAIABABIABAAIABABIADAAIAAABIABAAIACABIADACIAAABIABABIADgBIABAAIABABIACABIABAAIACgBIABAAIAAgDIAGABIABAAIABgBIAAgBIAAgCIgBgCIABgDIAAgCIANAAIAAACIABAAIABgBIABAAIACgBIABAAIABABIABAAIABgBIABAAIABABIACgCIABABIABAAIAAgBIABAAIgBgBIACAAIAAgBIACgCIABgCIgCAAIAAABIgBAAIgBABIgBAAIAAgBIgCAAIAAgBIgBgBIgCAAIAAgDIABAAIACgBIADAAIAAAEIACgCIgBAAIAAgDIgGAAIAAgBIgBAAIAAgBIgCAAIAAgCIABgCIADAAIABABIACAAIAAADIACAAIACABIAAABIABAAIABgBIABAAIAAgBIABAAIAAgBIABAAIAAgBIABAAIAAgBIACAAIAAgBIACAAIAAABIABAAIABABIABAAIAAABIACAAIAAABIABAAIADACIABAAIACABIAAABIABAAIAAABIgBABIAAABIgBAAIAAABIgBAAIgBABIAAABIgBgBIgCAAIAAgBIgBAAIAAABIgCAAIAAABIgBAAIABABIABAAIAAACIACAAIAAABIABABIABAAIAAABIgCAAIAAABIgBAAIAAABIgBAAIAAACIgDAAIAAADIABABIAAADIABAAIgFACIgDAAIgBAAIAAgBIAAABIgBABIAAAEIACgBIAAABIgBAAIAAABIgCAAIgBABIABAAIAAABIACABIAAgBIABgBIACAAIABgBIAAgDIACAAIAAABIABAAIgBABIABAAIAAABIgBABIAAABIABAAIABABIABAAIABABIAAgCIABAAIABABIAFAAIABABIACAAIAAABIABAAIAAABIAEAAIAAABIADAAIAAACIACAAIAAABIACAAIAAABIgEAFIACAAIAAABIABAAIAAgBIABAAIAAgBIABgBIAAgBIABgBIABAAIABAAIAAAAIAAADIgBACIABAAIAAgBIABgBIAAABIABAAIAAgBIACAAIAAABIgBAAIAAABIABAAIAAAEIgBABIgBAAIAAgBIgBAAIAAgBIgBACIAAAAIAAABIACAAIAAABIABAAIAAABIAEAAIgBABIAAABIgBACIgBABIAAAAIAGABIACgBIgBACIAAADIgMAAIgFABIgEACIgBAAIAAACIgBAAIAAABIgBAAIgBABIAAACIgBACIgBABIgCABIAAACIgBACIgBADIAAABIgBABIAAAFIABAAIABgBIAAADIABAAIAAACIgBAAIABACIABAAIgBACIAAADIAAAAIAAABIABABIAAABIABAAIAAABIgBAAIAAABIgBAAIAAABIAAACIABABIAAABIABAAIABgBIAAABIABAAIAAACIABAAIACgCIABAAIAAgBIABAAIAAABIABAAIAAABIABABIAAAAIABABIABAAIAAgBIgBAAIAAAAIABAAIAAgBIABAAIABABIABAAIACgBIAAAAIAAABIACAAIAAAAIACAAIAAABIABAAIgBABIAAADIABAAIAAABIACAAIAAgBIABAAIABgBIAAACIABABIAAACIABAAIAAADIABABIAAABIgBAAIAAABIgBABIgBAAIAAABIgBgBIAAgBIgCAAIAAgBIgBAAIAAgBIgBgBIAAABIgBAAIAAgCIgBgBIAAgBIgCACIgCAAIAAABIACAEIAAACIABAAIABAAIADAAIABAAIAHgBIAAgCIABgBIACAAIAAgBIACACIAAAAIAAABIAAAAIAAABIgBAAIAAABIgCAAIAAAAIgBAAIAAABIgBAAIAAABIABAAIAAABIACAAIAAACIABAAIAAABIACAAIAAABIACAAIAAABIABAAIAAABIABABIAAACIgBAAIAAABIgBAAIAAABIgBAAIAAABIgBAAIAAABIABAAIAAACIgBAAIAAgBIgBAAIAAABIgBAAIAAAAIgBAAIgBAAIAAAAIgBAAIAAABIgBABIgBAAIAAACIgCAAIAAgBIgFAGIAAAHgAjUBNIgCAAIAAgDIgBAAIAAACIgFACIgCgBIgCAAIAAgBIgBAAIgBABIAAgDIADAAIAAgCIABAAIAAgBIABAAIAAgBIACAAIAAgDIgBAAIAAAAIgBAAIAAgCIABABIAAABIABAAIABAAIABAAIAAAAIABAAIAAgCIABAAIAAgBIACAAIABABIACAAIAAABIABAAIAAABIABAAIAAABIABAAIgFALgAoxBJIgDADIgCgEIAAgBIgCABIgDAAIAAgBIgEAAIAAABIgCAAIAAABIgBAAIAAgEIgBAAIABgBIABAAIAAgBIgBAAIgBgBIgBAAIgCgBIAAgCIABAAIAAgCIgDgBIgEAAIgEABIgGAAIABgBIgFgBIAAgDIgBgBIgEABIACgBIAAgCIABgCIAAgBIABgBIABAAIACAAIAAgCIgBgBIgBAAIgCgCIADgBIACgCIAAgBIABAAIABgBIAAAAIAAACIACACIABAAIAAACIABABIAAABIgBACIABABIAAABIACAAIABABIAAACIABAAIACgBIAAABIADABIABAAIAAADIADgBIABgCIAEAAIABgBIgBgBIAAgEIABAAIAAgBIABAAIAAgCIgGAAIAAgDIAAAAIAAgBIABAAIAAgCIgFAAIgCgBIgEgCIACgBIAAgBIgCAAIgBgBIAAgBIgBAAIgBgBIACgBIAEAAIAAAAIABAAIAAgBIgBgBIgBgDIAAABIgBgBIgBAAIgBABIAAgFIgCAAIAAABIgEAAIgCgEIgBgBIAAgBIABgBIAAgCIABAAIAAgDIAAAAIAAgBIAAgBIAAgBIAAgBIAAgEIgBABIgBAAIgBgDIgCgBIgEAAIABgBIABAAIABgBIAAgCIAGAAIAAAAIABAAIAAAAIABAAIAAABIABAAIAAABIACAAIAAABIABAAIAAABIABAAIAAgCIgBAAIAAgCIACAAIAAgBIABABIABgBIACAAIgBgBIAAgBIgBAAIAAABIgGAAIAAgEIABAAIAAgDIgBAAIAAgCIACAAIAAABIACAAIAAACIACAAIAAABIABAAIAAABIABAAIAAgBIACAAIAAgBIABAAIAAAGIgBAAIAAABIgBABIABAAIAAAAIABAAIAAAAIADADIABgBIABgBIANgEIADAAIAJABIADABIABABIABAFIAAACIACABIACACIABgBIACgBIABADIACACIABAAIAAABIABABIACABIACgBIAOgDIACAAIAAABIABAAIAAACIACABIABABIgCAAIgBABIgBAAIgBACIAAABIgDADIABABIgEACIgCACIgBABIgCABIgCACIgBAAIAAACIgCAAIgCACIgCAAIAAACIgBABIAAABIACAAIgBABIAAABIgBgBIgBAAIgCABIAAABIgBAAIgCACIgCAAIgBABIgEAAIgBgBIgBABIABAAIAAABIABAEIABABIACACIgCAAIgBACIAAANIgBABIAAABIgEAAIgDAJgApJgGIABAAIAAgCIgBAAgACPgsIgFgMIgBgDIgBgBIgEgIIgaABIAAgBIgEAAIABgBIgBAAIAAgCIgBAAIAAgBIABAAIAAgBIgBAAIAAgCIgBAAIAAgBIgBAAIAAgBIACAAIAAAAIADAAIABgBIAAgCIgBgCIgDAAIgBABIgCAAIgBABIgCAAIAAABIgCAAIgBABIgDAAIAAABIgCAAIAAAAIgDAAIgBABIgBAAIgBgBIABAAIABAAIAAgBIgBAAIAAgBIgBAAIAAgEIABAAIgBgBIAAgDIgBAAIAAgBIgCAAIAAgCIABAAIAAgBIgEAAIAAgDIgBAAIAAABIgCAAIAAgCIgBAAIABAAIgBAAIAAgDIgBAAIAAgCIABAAIAAgDIgBAAIAAABIgBgBIABAAIAAgBIAAAAIAAgDIAAgCIgBAAIAAgBIABAAIAAgBIABAAIgBgBIABAAIAAgBIACAAIAAgBIgBAAIAAgBIAEAAIAAgCIABAAIAAgCIABABIAAgBIABAAIAAgBIABAAIgBgBIABAAIAAgBIABAAIAAgBIgCAAIABgBIgBAAIAAgBIACAAIAAgBIgBAAIAAgBIABAAIAAgBIgBAAIAAgDIgDAAIABAAIgBgBIgEAAIAAgBIgBAAIAAgDIgBAAIAAgBIgEAAIgBgBIABAAIAAgCIgBAAIAAABIgBAAIAAACIgBgBIgBAAIAAABIgCAAIABgBIgCAAIAAgCIgBAAIAAACIgBABIABAAIgBABIgBAAIAAgBIgDAAIABgBIgBgBIgBAAIAAgBIgBAAIAAABIgBAAIABABIgBAAIAAABIgDAAIAAABIgBgCIAAgCIgCAAIgBABIgBABIgDAAIAAgDIgBgBIAAgFIgBgBIAAgDIgBAAIAAgGIACAAIAAgBIgBAAIABgBIAAgBIgCAAIAAgBIgDAAIAAgCIAAgBIAAgBIAAAAIAAgBIAAAAIAAgBIgBAAIAAgBIgBAAIAAgBIABAAIAAgEIABAAIAAgCIABAAIAAgBIgBgBIADAAIACgCIAAgCIADgDIABAAIAAABIABgBIAAgBIgBAAIAAAAIgBAAIgBAAIgBgBIAAABIgDAAIgDAAIAAABIgBAAIgBgBIAAAAIABgBIABAAIAAgBIAAAAIAAgBIgBAAIAAABIgCAAIAAABIgBAAIAAABIgBgBIAAgBIABAAIgBgBIAAgBIABAAIAAgBIgCAAIABgBIgCAAIAAgBIgCgBIAAgBIgBAAIAAACIABABIABAAIAAADIABAAIAAACIgGAAIAAABIgBAAIAAACIgBAAIAAAFIABAAIAAABIABABIAAABIgBABIgCAAIgBABIgDAAIAAABIgBAAIAAABIABABIABgBIABAAIAAABIgBAAIAAABIgBAAIAAACIgBAAIgBABIgBAAIAAABIgBAAIAAABIABAAIAAABIABAAIAAABIABABIAAAHIgBAAIAAABIgBABIgCAAIgBgBIAAgBIABAAIAAgBIABAAIAAgDIgBAAIAAgBIgBAAIAAgBIgBAAIAAgBIgDAAIAAADIgDAAIAAgCIABAAIAAgCIACAAIAAgCIgCAAIAAABIgBAAIAAgCIgCAAIgBABIgBAAIAAgBIgBAAIAAgCIABAAIgGAAIAAgEIgBAAIAAgCIABgBIgBgBIgFAAIAAgBIgBAAIAAgBIABAAIAAgCIgBAAIAAgBIABAAIAAgBIABAAIAAgBIABAAIAAgCIABAAIAAgBIgBAAIgCAAIAAgBIABAAIAAgBIACAAIAAgCIABAAIABABIAAgCIACAAIABgBIAAgCIACAAIAAACIABAAIABgBIABAAIAAgBIABgCIAAgBIABAAIAAgBIABAAIAAgCIABAAIAAgBIgBAAIAAgBIgBAAIAAgBIAAgBIABAAIgBAAIAAgBIgCAAIgBgBIgJAAIAAgEIgCAAIAAgDIABgBIgCAAIAAgBIgCAAIABgBIABAAIAAgBIABAAIAAgBIACAAIAAgBIABAAIAAgDIACABIgBgBIAAAAIgCAAIgBABIgCAAIAAABIgCAAIgBgCIAAgEIABAAIgBgBIgDAAIAAgBIABgBIABAAIAAgBIABAAIAAgDIgBgBIAAABIgCAAIgCABIgCACIgBAAIAAgCIgCAAIgCACIgCAAIgBABIgBAAIAAABIgCAAIAAABIgBAAIAAABIAAAAIAAACIgBAAIAAACIABAAIAAAAIABAAIAAABIABAAIAAACIgBABIABAAIgBABIAAABIgBABIABAAIgBABIAAACIgDAAIAAABIABABIAAABIABABIABAAIAAADIAAAAIAAABIAAAAIAAABIgCAAIAAABIgBAAIgBABIgEAAIAAACIgBAAIgBgBIgBAAIAAABIgBAAIAAACIABAAIAAABIABABIAAABIgBAAIAAABIgBAAIAAgBIgBAAIAAgBIABAAIgBgBIABAAIgBgBIgEAAIAAgDIgBAAIAAgBIgCAAIAAgBIgBAAIAAgCIgBAAIAAAAIgBAAIAAgBIABAAIAAgCIABAAIAAgBIgEAAIAAgBIgCAAIAAgCIABAAIAAgBIAIAAIAAgBIAAAAIAAgBIgGAAIABgBIAAgBIABAAIAAgBIgFAAIAAgCIgBAAIAAABIgBAAIAAgBIgCAAIAAABIgBAAIAAABIABAAIgBABIgBgBIgBABIABABIgBABIgBAAIAAgBIgBACIgBgBIAAgBIABAAIgBgBIAAgDIgBAAIAAgBIgGAAIAAgGIACAAIAAgBIgCAAIAAgCIgDAAIAAABIgJAAIgBgBIgBAAIAAgDIgGAAIAAgBIgCAAIAAABIgDAAIAAAFIgDAAIAAgBIgBAAIAAABIgBAAIgBgBIgBAAIAAgBIgBAAIAAgBIgDAAIAAADIABABIAAABIgBAAIABABIAAABIgBgBIgBAAIgBABIgCAAIAAgCIgBAAIgBgBIgDAAIAAgBIgBAAIAAgFIABAAIAAgCIgBAAIAAgBIgCAAIAAgBIgBAAIAAABIgCAAIAAABIgBAAIgBgBIAAgCIgBgBIAAgCIgBAAIgBAAIAAgCIgBAAIAAgBIABgBIgBAAIAAgBIADAAIAAABIABAAIAAABIABAAIAAgBIABAAIAAgBIgBAAIAAgBIgGAAIABgBIACAAIAAgBIABAAIAAgDIgDAAIAAADIgCAAIAAgCIgBAAIAAgCIgBAAIAAgCIgCAAIAAABIgCAAIAAgBIgBAAIAAgCIgBAAIAAgBIABAAIAAgBIABAAIAAABIABAAIAAABIABAAIAAgCIgBAAIAAgBIgBAAIAAgCIABAAIAAgBIABAAIAAgBIABAAIAAgBIgBgBIgBAAIAAgBIgBAAIAAgBIAAAAIAAgBIgCAAIAAABIgBAAIAAgDIgBAAIAAgBIgBAAIAAgCIgBAAIAAgCIABAAIAAABIABAAIAAABIABAAIAAABIABAAIAAABIABABIAAgBIABAAIABgBIACAAIAAAFIABAAIAAABIABgBIACABIAAACIACAAIAAABIABAAIgBABIABAAIAAABIADAAIAAADIABAAIAAAAIABAAIAAAAIABgBIAAgBIACAAIAAgBIABAAIAAgBIABABIABgBIABABIABgCIAAgBIgBABIAAgCIABAAIAAgBIABAAIAAgBIABAAIAAgCIABAAIAAgBIABABIAAgBIABAAIABgBIgBgBIAAgBIACAAIABgBIAAgCIABAAIABAAIAAAAIABgBIAAABIADAAIAAAAIABAAIABAAIABAAIAAgBIABAAIAAgBIABAAIAAgBIABgBIAAABIACAAIAAABIABAAIABABIAAgBIABAAIAAgBIABAAIABgBIABABIABAAIgBABIgBAAIgBABIACAAIAAABIABAAIAAAAIABAAIABAAIAAAEIABAAIAAABIAAgBIABAAIAAgBIACAAIAAgBIADAAIAAgDIABAAIAAgBIABAAIAAgBIABABIACAAIAAACIABAAIAAgDIgBgBIABAAIAAgBIACAAIABABIAAABIgBAAIgBABIABAAIAAACIgBAAIAAAAIADAAIAAACIgBABIAAADIABAAIACgBIAAAAIAAgBIABAAIACgCIABAAIAAgBIABAAIABgBIABAAIABAAIABgBIABAAIAAgBIABAAIABgBIABAAIAAACIABAAIABgBIAAABIACAAIAAABIABAAIAAABIAAACIAAAAIAAABIgBAAIACABIAAgBIAFAAIAAABIACAAIgBABIACAAIAAABIABABIgBAAIAAABIABAAIAAABIABAAIAAACIgBAAIAAABIABAAIAAABIgBABIABAAIAAACIABAAIAAABIABAAIAAABIACAAIAAACIADAAIAAgBIAAABIAAgBIABABIADgCIADAAIAAABIABgBIACAAIAAABIABABIAAABIABAAIAAgBIABAAIAAgBIABAAIAAgBIABAAIAAgBIABAAIABgBIAAgBIgBAAIAAgEIABABIABAAIAAgBIADAAIAAABIACAAIAAgBIABAAIABABIAEAAIABABIABAAIAAgBIABgBIgBgBIABAAIAAgBIABAAIAAgBIABgBIgCgBIAAgCIgBgBIABgBIAEAAIAAgBIAAAAIAAACIABAAIAAABIACAAIAAACIABAAIAAgBIABABIABAAIAAABIACAAIAAgBIABAAIAAACIABAAIAAgBIABAAIAAABIACAAIABABIgBAAIAAABIABAAIAAgBIABABIAAgBIABAAIABgBIAAAAIAAACIAEAAIAAgBIAGAAIAAgBIABAAIAAgBIABAAIAAABIADAAIAAgCIgBAAIAAgBIACAAIAAABIABAAIAAABIABAAIAAABIACAAIAAgBIABAAIAAgEIABAAIAAgDIgCAAIgBgBIgBAAIAAAAIAAAAIAAgBIAAAAIAAgCIAAAAIAAgEIgGAAIAAgBIgCAAIAAgBIgBAAIgBgBIABgBIgBAAIgBgCIAAgCIABgBIAAgCIABgBIABgCIABgBIAAgBIABAAIAAgBIABABIACAAIAAABIABABIAAACIABAAIABAAIAAABIAAgBIABAAIAAABIABAAIAAABIABAAIAAABIACAAIAAABIACAAIAAABIABAAIAAABIACAAIAAABIACAAIAAABIACAAIAAABIADAAIAAABIACAAIAAABIAEAAIAAABIAGAAIAAABIANAAIAAgBIAHAAIAAgBIAEAAIABgBIAMAAIABgBIAFAAIAAgBIAFAAIAAgBIAGAAIAAgBIAFAAIAAgBIADAAIAAgBIAEAAIAAgBIAEAAIAAgBIAEAAIgBABIAAADIACAAIAAAEIACACIAAABIABAAIAAAEIABAAIgBABIgBAAIAAABIgBAAIAAAAIgCAAIABABIgBABIAAABIgBAAIAAAIIABABIgBAAIgBACIgBABIgDACIgBAAIAAgBIgBAAIAAgBIgCAAIgBABIgDAAIAAgBIgBAAIABgBIAAgBIgBAAIAAgBIgCAAIAAgBIgBAAIAAgCIgDAAIAAABIgBAAIAAADIgBAAIAAABIgBAAIAAABIgDADIgBAAIAAAAIABAAIAAABIACAAIAAABIACAAIAAACIgBAAIAAACIgBAAIAAABIgBABIgBAAIAAACIgBAAIAAAFIABABIAAABIgCAAIAAgBIgBAAIAAABIgBAAIAAABIAAgBIgBAAIAAABIgBAAIAAABIgBAAIAAACIgDAAIAAABIgBAAIAAABIACACIgBABIABAAIAAAEIABAAIAAADIABAAIAAACIABABIAAADIACAAIAAADIgBAAIAAABIABABIABAAIABABIAAABIACAAIABgBIADAAIABgBIAEAAIABACIACAAIAAACIABgBIAAACIACAAIAAABIACAAIAAABIABAAIAAACIgBABIABAAIAAACIgCACIAAgBIgBAAIAAABIgBAAIAAACIgBAAIAAgBIgBAAIgBgBIAAgBIABAAIABABIAAgBIABAAIAAgCIgDAAIAAABIgCAAIAAACIABAAIAAABIABAAIAAACIgFAAIAAABIABAAIAAACIgCAAIABABIAEAAIABgBIABAAIAAgBIADAAIAAgBIABAAIAAgBIAEAAIAAABIABABIAAADIABAAIAAABIABAAIAAgEIACAAIAAABIACAAIAAgBIABAAIAAgBIACAAIAAgBIABAAIAAgBIACAAIAAgBIABAAIAAgBIABAAIABABIABAAIAAABIABAAIAAAEIgBAAIAAACIgBAAIAAABIgCACIAAABIgBAAIAAACIAAAAIAAABIgBABIAAAFIABAAIAAgBIAAAAIAAgCIACAAIAAgBIABABIABAAIAAABIABAAIAAACIgBAAIAAABIgCAAIAAABIgBAAIgBABIAAABIAAABIgBAAIAAACIgBAAIAAACIABAAIAAABIABAAIAAADIgBAAIAAABIgBAAIAAABIABABIABAAIAAgBIACAAIAAABIABAAIABABIABAAIAAABIABAAIAAABIABAAIAAABIABAAIAAABIABAAIAAABIABAAIAAACIgBAAIgBABIgBABIAAABIABAAIAAABIABABIABAAIAAAAIABABIAAACIgCAAIgBABIgBAAIAAABIgBAAIgBABIAAABIgBABIAAABIABAAIABgBIABAAIAAABIABAAIAAABIACAAIAAgBIABAAIABgBIABAAIAAgBIABAAIAAAEIABAAIAAABIABAAIAAABIACAAIAAABIACAAIAAACIgCAAIAAABIgBAAIAAABIgBAAIAAACIgBAAIgBACIAAACIABABIAAgBIABAAIAAgBIABAAIABgBIABAAIAAABIABAAIAAABIABABIAEAAIAAABIACAAIAAACIgBAAIAAABIgCAAIAAABIgBAAIAAABIgBAAIgBABIgBAAIAAgBIgBgBIgBAAIAAABIgBAAIAAABIgCAAIAAgCIgBAAIAAgBIgCAAIAAABIgBAAIAAADIgBAAIAAABIgCAAIAAABIgBAAIAAgEIgBgBIAAgCIgCAAIAAABIgBABIAAABIgBAAIAAgBIgBAAIAAgBIgBAAIAAABIgBAAIAAAGIgBAAIAAAAIABABIABAAIAAgBIABAAIABABIABAAIABABIABAAIAAACIgBAAIAAABIgDAAIAAgBIgBAAIAAgBIgCAAIAAABIgBAAIAAABIgDAAIAAABIACAAIAAABIgBAAIAAACIABAAIAAABIABAAIAAAEIADAAIAAABIACAAIgBgBIABAAIAAgCIABABIAAgBIABAAIAAACIABAAIAAACIgBAAIgBABIgBAAIAAABIABAAIAAAAIABABIgBABIgBAAIgBgBIAAgBIgBAAIAAAAIgBAAIgBAAIgBABIAAAEIgBABIAAACIABAAIAAAFIABABIABAAIABABIAAABIAAABIAAABIABAAIABABIABAAIAAACIABAAIAAADIADAAIAAgBIACAAIAAAHIgBAAIAAABIgBAAIAAABIgBAAIAAABIgBAAIAAACIgCAAIAAABIgCAAIAAACIgBAAIAAAEIABABIAAACIABAAIAAAFIgBAAIAAABgABHhqIAAgBIgBAAgAHridIAAgBIgBAAIgCgCIgBAAIAAgBIgBAAIAAgBIACgFIABAAIgBAAIgBAAIAAgBIgBAAIAAgBIgCAAIAAABIgBgBIAAgBIgDAAIAAgCIgBAAIAAgBIACAAIAAgBIABAAIAAgCIACAAIAAgBIABAAIAAgBIgBAAIAAgBIABAAIAAgDIgBAAIAAgDIgBAAIgBgBIAAgBIgBAAIAAgBIABAAIAAgBIgBAAIAAgBIgBgBIgDgCIgBAAIABgBIgKAAIgBABIgFAAIAAgBIgCAAIAAACIgBAAIAAACIgBAAIAAABIgBAAIAAABIgBAAIAAgCIgBgBIAAgBIgBAAIAAgBIgBAAIAAgCIgBgBIAAgBIABgBIAAgCIABAAIAAgDIABAAIAAAAIAEAAIABgBIABAAIAAgBIABAAIABgBIABAAIAAgBIABAAIAAgBIgBAAIAAgBIgBAAIgBgBIgBAAIAAgCIgJAAIAAgCIgBAAIAAgBIgBAAIAAgBIgCAAIAAgBIABAAIAAgDIgDAAIgBgBIgBAAIgBABIgBAAIAAgBIgBAAIAAAAIgDAAIgBgBIAAgBIgBAAIAAgCIgBAAIAAgBIgCAAIgBgBIgBAAIAAABIgJAAIAAABIgBAAIAAgBIgBgBIAAgBIgBAAIgBgBIABAAIACgBIAAgBIABAAIAAABIADAAIABgBIAAABIACAAIAAABIABAAIgBABIAIAAIAAgCIgCAAIAAgBIACAAIAAgBIADAAIAAgBIABAAIABgBIABAAIAAgBIABAAIAAgBIgBAAIAAgDIABAAIAAgCIABAAIAAACIABAAIAAgCIABAAIAAABIABAAIAAABIABAAIAAABIABAAIAAABIABAAIAAABIABAAIAAABIAAAAIAAABIAAAAIAAACIACAAIAAABIABAAIAAgBIACAAIAAABIABAAIAAABIgBAAIAAABIABAAIABgBIABAAIAAABIABAAIAAgCIgBAAIAAgBIABAAIAAABIACAAIAAgBIABAAIAAABIABAAIAAgBIACAAIAAgCIABgBIABAAIAAgBIABABIAAAAIAAgBIAFAAIAAgBIABAAIAAgBIgBAAIAAgBIABAAIAAgEIACAAIAAgBIACAAIAAgBIACAAIAAgBIABAAIABgBIAAgDIgBgBIAAgBIABAAIAAgEIgCAAIACgBIAAgCIABAAIAAgCIABAAIAAgCIABAAIAAgCIABAAIAAgCIAAAAIAAgCIABAAIgBgBIAAAAIAAgBIgBAAIAAgBIgCAAIABgBIgBAAIAAgBIABAAIAAgBIABgBIABAAIAAgBIgDAAIAAgBIABAAIAAgBIgBAAIgBgBIgCAAIAAgCIgCAAIAAgBIABAAIAAgBIABAAIAAgCIABAAIAAgBIABgBIAAgBIgCAAIAAABIgBgBIgBAAIAAgBIABAAIAAgBIACAAIAAgDIgBAAIAAgBIgEAAIgBgBIAAgBIgBgBIAAgCIgBgBIgCgCIACAAIABgBIAAgDIACAAIABgBIACAAIAAgBIABAAIgCgDIABgBIABAAIgBgBIAAgBIgBgCIADgDIgBgEIAAgEIADgBIABgBIAAAEIACAAIAHABIALAAIABgMIAAgBIACAAIABABIADAAIAAABIABAAIAAABIABAAIAAABIABAAIAAABIABAAIAAABIADAAIABABIAAABIABAAIAAAAIACAAIAAgCIAAAAIABgBIAAgBIABAAIABgBIABAAIACABIgBABIAAABIABABIACAAIAAABIAFAAIAAgBIABABIAAAAIABAAIAAABIABAAIAAABIACAAIAAABIAAAAIAAABIABAAIAAACIABAAIAAADIABAAIAFAJIAAABIAVgNIAFABIADAAIAEABIgCAGIgCABIAAACIgBABIAAAAIAAAAIgBABIAAADIABABIAAADIgBABIgBABIgBAAIAAABIgBAAIAAABIgCABIgBACIgBABIgCACIgBAAIADACIABAAIABABIACABIABABIABAAIABgBIABAAIAEACIAAgBIABAAIABgCIABABIgBAAIAAADIgCAAIAAACIABAAIAAABIABAAIAAABIgBAAIAAABIACAAIAAABIgBAAIAAACIABAAIABgBIACABIACgFIAEAFIABgBIABAAIAAABIABACIABAAIAAABIABABIAAAAIgBABIAAAFIgBACIAAAGIAFABIgBADIAAABIgBAAIAAABIgDAAIAAgBIgBgBIAAAAIgBAAIAAgBIgBgBIAAgBIgBAAIgJAIIADADIACAAIACABIABAAIAAABIADABIABAAIAEABIAFAAIABABIgBAEIAFAAIgBABIAAABIgBABIAAADIgBABIAAABIABAAIAAABIgBAAIAAABIgFgCIAAgBIABgCIgDAAIAAADIgCABIgCAAIAAABIgBAAIgDABIgBgBIgBAAIABABIAAACIgBABIgBAAIAAABIgBAAIAAgBIgBAAIAAgBIgBABIgBAAIAAABIABAAIAAABIABAAIAAABIgCAAIAAABIgBAAIAAABIABAAIAAABIgBAAIAAABIgBAAIgBABIgEAAIAAgBIgDAAIAAADIgBAAIgBgBIgBAAIAAACIgBAAIAAABIgCAAIgBABIgBAAIAAgBIgCAAIAAACIgBABIgBAAIAAABIgBAAIABABIAAABIgBAAIgBABIgBAAIAAACIgCAAIAAgBIgBAAIAAABIgDAAIAAgBIgBAAIAAgBIgFAAIAAgBIgBAAIAAgBIgCAAIAAACIgBAAIAAgBIgCAAIAAgBIgDACIgBAAIAAABIgBAAIABABIABAAIAAABIgBABIAAABIgBAAIAAACIgCAAIgBABIgBAAIAAACIABABIAAACIgCAAIAAABIgBAAIAAACIgDAAIAAABIgCAAIAAACIgBAAIAAACIgBABIAAABIABAAIAAACIgBAAIAAACIAAAAIAAABIgCAAIAAABIgBAAIAAABIABABIgCAAIAAgCIgBAAIAAgBIgBAAIAAgBIgBAAIAAgCIgDAAIAAABIgBAAIAAACIgBgBIAAgBIgCAAIAAACIABABIAAABIgCAAIAAACIgBABIACAAIAAACIABABIAAABIABABIgBAAIAAABIABAAIAAABIABAAIAAABIgBAAIAAABIgBgBIgCAAIgBgBIgBAAIgBAAIAAgBIgBABIgCAAIgBAAIgCAAIAAABIgCAAIgBABIgBAAIgBgBIAAgCIgBAAIAAABIgBABIAAABIgBABIABAAIACABIABAAIAAABIABABIAAAEg");
	this.shape_6.setTransform(-6.7,-20);

	this.shape_7 = new cjs.Shape();
	this.shape_7.graphics.f("#6C829A").s().p("AEBImIgBAAIgDgDIgBAAIgBgCIgDgCIgCgCIgBgBIgCgCIgGgGIgCgCIgDgCIgBgCIgBAAIgBgBIAAgBIgBgBIgCAAIgBgBIgBgBIgHgIIgCAAIgBgCIgBAAIAAgBIgBAAIgDgDIgBAAIgCgCIgBAAIAAgBIABgBIgBAAIAAgBIgBAAIAAgBIgBAAIAAgCIgBAAIAAgBIgBAAIAAgBIgBAAIAAgBIgBgBIAAAAIgBAAIAAgBIgBAAIgBgBIgBAAIAAgBIgBAAIAAgBIgBAAIAAgBIgBgBIgBAAIgCgCIgBgBIAAAAIgDgDIgCgCIgBgCIgCgBIgBgBIgCgBIAAgBIgBAAIAAgBIgBAAIAAgBIgBAAIgBgBIAAgBIgLgLIgBgBIgFgGIgCgBIgBgBIgBgBIgKgLIgBAAIAAgBIgGgGIgCgDIgBgCIABgBIABADIACACIABAAIABgCIACADIAKAAIAAgBIAJgKIABABIAAgCIABgBIABgBIACAAIAAgCIABAAIACgCIAAAAIACgBIAAgBIABAAIAAgBIABAAIAAgCIABAAIAAgBIADgCIABAAIABABIABgBIAAgBIABAAIAAgBIABAAIAAgBIADAAIACABIABAAIACgEIAAAAIAAABIACAAIAAABIABABIABAAIABgBIABAAIABABIAAABIABAAIABABIABgBIAAgBIABAAIAAgBIABAAIAAgBIABAAIAAgBIABgBIAAgBIABAAIAAgBIABAAIAAgBIACACIgBAAIABABIAAgBIABAAIAAgBIABAAIAAgBIABAAIABABIADAAIAAgCIAFAAIAAgFIgBAAIgBgBIAAABIgBAAIABABIgBAAIAAACIgBAAIAAgEIABgBIAAAAIABAAIAAgBIgBAAIABgBIAAgFIACAAIABgCIABgBIAAAAIgFAAIgBgBIgBAAIABgBIABAAIAAgBIACAAIAAgCIABAAIAAgBIABAAIAAABIACgCIABAAIAAgBIABAAIgBAAIABgBIABAAIAAgBIAAAAIAAgCIABAAIABgBIAAgGIABgBIABAAIAAgHIAGABIABAAIAAgBIACABIABAAIAFADIACAHIgGAAIAAABIgBABIAAACIACAAIABAEIAAABIABgBIAAgBIAAgBIABAAIABABIABgDIADAAIAAgBIACAAIAAgBIABABIAAgBIABAAIADgDIgBAAIgEgBIABgCIAHACIABAAIAAAAIABAAIAAgBIACAAIACgCIAAgDIACAAIAAgBIAEAAIABABIAAABIACADIAAABIABABIABAAIABABIgBAAIAAACIgBAAIAAABIgBAAIAAABIgBAAIgBABIAAABIgBABIAAACIABABIAAABIgBABIAAACIgBAAIAAADIgBAAIAAAAIgBAAIAAABIgCAAIAAABIgBAAIAAABIgBAAIABABIgBAAIAAAEIABAAIAAABIgBAAIAAACIgBABIgBAAIAAABIABAAIgBACIgBAAIABABIgBAAIABABIgBABIAAAAIAAAAIAAABIAAACIgBAAIAAACIABAAIAAABIgBAAIAAACIgBABIAAAAIgBABIABAAIAAACIAFAAIAAABIAEAAIAAACIACAAIgBACIAAAHIACAAIAAABIgBAAIAAADIABABIAAgBIABAAIAAgBIAFAAIAAgBIACAAIAAgBIABAAIAAABIgBAAIAAABIABAAIAAAAIABAAIAAACIgBABIAAAEIABAAIAAABIgBAAIAAADIABAAIAAABIABAAIAAABIgBABIAAACIABAAIAAADIgBAAIAAACIABAAIAAADIABAAIAAACIABAAIgBABIAAAAIgBAAIAAABIgBABIAAADIgBAAIAAABIgBAAIgBABIgBAAIgBABIgCAAIAAABIgBAAIAAABIgCAAIAAAGIgBAAIAAACIABAAIAAABIABABIAAAFIACACIAAABIACABIAAACIABAAIAAAFIgCAAIgBABIAAACIABAAIAAABIgBAAIAAABIACAAIAAABIABAAIAAABIABAAIABABIAAABIAAAAIAAABIABAAIAAAJIABAAIAAAAIABABIgBAAIAAABIgBABIAAAFIABAAIAAAAIgBABIAAABIgBAAIAAABIgBAAIAAABIgBAAIAAACIABAAIAAACIgBAAIAAgBIgCAAIAAABIgBAAIAAACIgBAAIAAABIgBAAIAAADIgBAAIAAABIACAAIAAABIgBAAIAAADIgBABIAAAFIgBABIgBAAIAAABIgBAAIAAAAIgBAAIAAABIgBAAIAAABIgCAAIgBABIgBAAIAAABIgBAAIAAAEIAAAAIAAACIgBAAIAAAAgADegTIgDAAIgCgDIgBAAIgDgBIgBAAIAAgBIADgDIABAAIgBgDIAAgCIADgDIABgBIABAAIAEAEIAAACIABABIgBACIAAABIgBAAIAAABIgBABIgBACIACADIABAAgACdgdIAAgBIgDAAIAAgCIgBAAIAAgBIgFADIgBABIgDgBIgCAAIAAgBIgDgBIgBgBIgBAAIACgDIAAgBIgDAAIgBAAIgBAAIAAgBIgBgFIgFAAIgCgBIgBABIgDABIgBAAIAAABIgBAAIAAgBIABgBIgBgBIgBAAIAAgEIABgBIABAAIAAgCIgBAAIAAgBIgBAAIAAgBIABgCIAAgBIgCgCIAAgDIACAAIAAgDIgBAAIAAgBIgBAAIAAgBIgBAAIAAgDIABAAIAAgCIgBAAIAAgBIACAAIAAgBIABAAIAAAAIACAAIAAgBIABAAIABgCIABAAIAAgBIABAAIAAgBIABAAIAAgBIABgBIgCAAIAAAAIgCAAIAAgBIABAAIAAgBIABAAIABABIABAAIABgBIABABIACAAIABgCIADAAIABgBIABAAIAAABIABAAIAAABIADAAIABABIABAAIACgBIAAgCIABAAIAAgBIAFgFIABACIAAACIABAAIAAACIABAAIAAABIABACIAAACIABAAIABABIABAAIABABIACAAIAAABIACAAIAAACIAEAAIAAgCIACAAIAAgBIABgBIgBgBIAAAAIAAgDIgBAAIAAgEIABAAIAAABIAGAAIAAACIgBAAIAAABIgBABIAAABIABAAIAAABIABAAIAAABIgBAAIAAAEIABABIAAACIgBABIAAAFIABAAIAAACIgCAAIABABIgBAAIAAABIABAAIAAADIAHAAIAAACIABAAIAAgCIADAAIAAACIACAAIABgCIACAAIAAgBIABAAIAAABIACAAIgBADIACAAIADABIAAgBIACAAIABABIACABIAAADIABAAIAAACIgBgBIgCAAIgBgBIgBAAIAAgBIgBAAIAAABIgBAAIAAABIgBAAIAAABIABAAIAAABIgBAAIgBgBIgFAAIAAABIgBAAIAAgBIgBAAIAAABIAAAAIAAABIgEAAIgBABIgEAAIAAgBIgFAAIABgDIAAgBIgEAAIAAACIABAAIAAACIgBAAIAAABIABAAIAAABIgBAAIgBAAIAAAAIgBABIgBACIgQgHIAAACIABABIADACIgCACIAAABIgBAAIAAgBIgBAAIAAgBIgBAFIAFACIABACIAAACIABABIAAABgAhBmeIAAgCIgFAAIAAgCIAEAAIAAgDIgBAAIAAgBIgBAAIAAgBIgBAAIAAgCIgBAAIAAgBIgBAAIAAgCIgBgBIgBAAIgBABIgBAAIgBABIgEAAIAAABIgOAAIAAABIgBAAIAAgBIgBABIAAgBIgBAAIAAABIgCAAIAAgBIgBAAIAAABIAAAAIAAgBIgKAAIAAgBIgBABIAAgBIgBAAIAAABIgCAAIAAABIgCAAIAAAFIgDAAIAAgBIgCAAIAAgBIgDAAIgBABIgEAAIAAgIIgGAAIAAgBIgDAAIAAgBIgBAAIAAgBIgBAAIgBgBIAGAAIAAgNIgUAAIAAgGIgBAAIAAgDIgBgBIAAgCIABgBIgOAAIAAAJIgBAAIAAgBIgDAAIAAgBIACgEIgEgCIgBAAIgJgBIgEgBIAAAAIgBgBIgDgCIgBAAIgBABIgBABIgCAAIAAgCIgBAAIAAgBIgCAAIgBABIAAACIgBAAIAAABIgFAAIAAgBIAAAAIAAgBIgDAAIAAABIgBAAIAAABIgBAAIAAgBIgBgBIAAgBIgCgCIAAgBIABAAIABgBIgDAAIgBgDIAAgEIgBAAIAAgCIgBgBIgCAAIAAABIgDAAIAAAAIgCAAIgBABIgCAAIgBABIgBAAIAAgCIgCAAIAAAAIgEAAIAAABIgCAAIgBABIgCAAIAAABIgBAAIAAABIAAAAIAAACIgBAAIAAABIgBAAIgBABIgDAAIAAgBIgBAAIAAgBIgBAAIAAgEIABAAIAAgBIABAAIABgBIABAAIAAAAIACAAIAAgBIACAAIAAgBIABAAIAAgBIABgBIAAgDIgBgBIAAgDIgBAAIAAgCIAAAAIAAABIgDAAIAAgBIgBAAIAAgBIgBgBIgBABIAAABIgBAAIAAgBIgBAAIAAgBIgBAAIAAABIgBAAIgBABIgBAAIgBgBIAAABIgBAAIABABIABAAIAAABIgCAAIAAgBIgBABIgBAAIAAgBIgCAAIAAgBIAAgBIgBgBIgBAAIgBgBIgBAAIAAgBIgBAAIgBgBIgEAAIAAABIgBAAIAAABIABABIAAACIgBAAIAAABIgDAAIgBgBIgDAAIgBgBIAAgFIADAAIAAgBIAEAAIAAgBIADAAIABgBIACAAIABgBIADAAIAAgBIACAAIAAgBIAEAAIAAgBIACAAIABgBIADAAIAAgBIADAAIAAgBIADAAIABgBIABAAIAAgBIADAAIABgBIACAAIAAgBIADAAIABgBIADAAIAAgBIADAAIAAgBIACAAIAAAAIADAAIAAgBIADAAIAAgBIADAAIABgBIACAAIABgBIADAAIAAgBIACAAIABgBIADAAIAAgBIABAAIAAABIACAAIAAgDIAEAAIAAgBIAEAAIAAgBIADAAIAAgBIACAAIAAgBIACAAIAAgBIADAAIAAgBIADAAIABgBIACAAIABgBIACAAIAAgBIADAAIAAAAIACAAIAAgBIACAAIABgBIACAAIABgBIACAAIABgBIACAAIABgBIACAAIAAgBIACAAIAAgBIADAAIAAgBIACAAIABgBIADAAIAAgBIABAAIACgBIADAAIAAgBIADAAIAAgBIACAAIAAgBIAFAAIAAgBIABAAIAAgBIAEAAIAAgBIADAAIABgBIACAAIABAAIADAAIACgBIABAAIAAABIACAAIAAAAIACAAIAAABIgBAAIAAABIgBAAIAAABIACACIgDABIABAAIgBAFIgBABIAAAEIgBAAIAAABIACAAIAAABIABAAIAAABIACgBIABABIAAACIABAAIAAACIABAAIAAABIABABIAAABIACAAIABABIAAAAIAAAGIABAAIAAABIACAAIAAACIABAAIAAABIgBABIAAABIgCAAIAAABIgBAAIABABIAAADIgBAAIABABIAAABIABAAIAAABIABAAIABABIABAAIgBABIAAABIgBAAIAAABIABABIAAABIgBABIgBAAIAAAAIABABIAAABIACAAIAAgBIABAAIAAACIAFAAIAAADIABAAIABABIABAAIAAABIACAAIAAgBIACAAIAAgBIAAAAIAAAHIABAAIAAgBIACAAIAAAEIABAAIAAABIABABIABAAIAAADIgBAAIAAABIABAAIAAACIgBAAIAAAAIABAAIACABIACAAIAAABIACAAIABABIABAAIADADIABADIABAAIAAABIABAAIAAABIABAAIAAgCIABAAIAAABIACAAIABgBIADADIgBABIAAABIABAAIAAABIABABIAAACIgCAAIgBAAIgCAAIABABIACAAIAAADIABAAIABgBIAAABIABAAIAAABIACADIgCAAIAAABIgCAAIgBABIAAABIgBABIADAAIAAgBIABAAIAAABIABAAIAAABIABAAIAAABIABAAIAAABIABAAIAAADIAEAAIAAAEIgBABIABAAIAAABIACAAIAAAEIgBAAIAAABIgBABIgBAAIgBAAIAAACIAAABIgGAAIAAgBIgBAAIAAgBIgFAAIAAABIgBAAIgCACIAAACIgBAAIgBAAIgBgCIAAACIAAAAIAAACg");
	this.shape_7.setTransform(38.5,-0.5);

	this.timeline.addTween(cjs.Tween.get({}).to({state:[{t:this.shape_7},{t:this.shape_6}]}).wait(1));

	// Capa_4
	this.shape_8 = new cjs.Shape();
	this.shape_8.graphics.f().s("#65653D").ss(0.5,1,1).p("AI+orQg3AKgLAAQgRApglAHQgFABg9gBQguAAghAEQgiAEgmANQgeAKgYAJQguAPgjAKIAMBgQApAOgDAGQgFAIA1AYQAEACAuArIgWAsIAUAUQALgGAJgQQAFgJAHgVQAFgNAkgfQABgIgBgEQgBgEgBgFIAJg0QAKgTAVAHQALAEAWAKQgMAYAJgDQASgGAFAJQABABgFAUQgEAVAKAVQANAbAFABQAFACAWgDQAJAZABACQABABAbARQAKgFAQgXQAQgXAKgGQAHgFALgBQAQgCAEgBQARgFACgKQADgQACgDQAFgEAGAEQAFADANgMQAIgIACgDQABAAANgCQAFgBAFgHQAHgJACgCQAHgGAXgOQAHAEAAAFQAAADANgEQAWgGAGAKIgFAoIArAQQAGAUAAADAMllRQgIgEgWgLQgUgMgMgEQgRgFgEgCQgGgCgKgJQgOgMgIABQgHABgHgGIgLhEIgBgfIgqgCQgQAGgNgUQgKgQgDgWAMllRIAAjwQgPAJgHACQgLAFgTACQgEAEAAAAQABgBgCAFQgBAJgCgFQgBABAAABQgLgGgEgEQAAgBgIgNQg/gBhUAPACwh8QgIAcgXA3QgMAfgXA1QgMAcAOARQARAUgBAPQAAAPgLAEQgKAEADALQABAGAJANQAGAKgCAIQANAGAQADQAXAEAiAVQATAMAiAZIBIA6QAGAFAIAFIAfAeQAJAKAfAZQAdAZAKAMQAKAOAqAoQAKAMAMAKIBsBpIAYgmQACgIgFgRQgGgUAAgGQAOgKgCgGQgEgNACgJQACgJAIAAQAJAAAEgUQgSgUgFgGQgOgQgEgMQAKgNA/htQA6hnAGgCQADgCARAAIAAmFIgMgFQAKgLACgLIAAAbACwh8QAIgTAcgKQAdgKAHgMAMljvIAAgOIAAhUAskmcIAAJzIAHABQAfAEAXAQQAaASAJADQAJADAIAEQAEACAJAFQAGADAYAEQAZAFAOAFQAZALAOgFQAUgHAHAAQAmACASgGQACgBAsgXQAMgGAcgJQAbgIALgGQAGgDASgFQAUgFAFgCQAGgDAYgEQATgEAIgIQADgCACgEQAGgKAAgDQABgBAOgFQAEgCAJgHQAHgFAUgHIAFgCQAGgCAOAAQAMAAAZgEQAXgEASABQBWADA3AUQAfALAoAVABmmwQhwAegVgZQgDgDgEgOQgFgNgKgMQgEgDgCgCQgEgCgCgBQgHgGgJgXQgIgRgNgDQgaAAgPgEQgNgDgCgDQgCgGgFgHQgTgXgtgCQg1ACgcgDQgRgDgQgHQgYgNgFgBQgXgJgHgHImMAAIgGAGIAAA0QAHAFAMACQANADAGADQAGAEAKAQQALAUAEAFQARgYARgBQAIAAASAJQAOAGACAAQABgBgDgDAsepnIgGAAIAAAGAqDndQAGABALACQAGgDgHgjQgCgJgDAAQAAAAAFgLQAGgOgBgCQgCgEABgEQAMAHAKAGQAHAEAUAFQANAEAHAOQAKAWADACQAOASARAdQAMAVAUARIBegBQACALAFAWQADASgEALQgDAIgLAUQgLAUgBAEIAdAdIAKABIgEAHIABACIADADIATASQATgEARgBQAMgDAVgPQALgIAWgNQAXgNAJgDQANATgDACQgKADgMAGQACAJAoAwQAMAQAPAHQAKAEAcAHIgHAiIEsAPAqDndQgMAHgIASQgHAMgPAEQgDABgMABQgJACgFACQgEADgEAHQgDAFgGADQgPgEgMgCQgXgFgXALAqTn9IAQAgAskotIAACR");
	this.shape_8.setTransform(0,-6.9);

	this.timeline.addTween(cjs.Tween.get(this.shape_8).wait(1));

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = new cjs.Rectangle(-81.5,-69.5,163,139);


(lib.graph_10 = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// Capa_1
	this.shape = new cjs.Shape();
	this.shape.graphics.f().s("#00CCFF").ss(0.2,0,0,22.9).p("ApIMCISRAAIAA4DIyRAAg");

	this.timeline.addTween(cjs.Tween.get(this.shape).wait(1));

	// Capa_2
	this.shape_1 = new cjs.Shape();
	this.shape_1.graphics.f("#FFFF00").s().p("AhEJnIAAgBIgBAAIgBABIgCAAIAAgBIACgBIgDAAIAAgBIABAAIAAgCIgCAAIAAgCIgCAAIAAABIgCAAIAAACIABAAIAAACIgCAAIAAABIgDAAIAAgBIgBgBIAAgBIABAAIAAgCIgBgBIAAgCIgFAAIAAgBIABAAIAAAAIAAAAIAAgBIAAAAIAAgBIAAAAIAAgDIgBAAIAAgBIgCAAIgBgBIgBAAIAAgBIgBAAIgBAAIAAAAIAAgBIABAAIABABIABAAIAAgBIABAAIACABIAAgCIABAAIAAgDIAAAAIAAgCIABAAIAAABIABABIAAABIABAAIAAABIABABIAAABIACAAIAAgCIgBAAIAAgBIgBAAIgBgBIABAAIgBgBIABAAIAAgBIABAAIAAABIABAAIABABIAAgDIABgBIABABIACAAIAAABIAAAAIAAACIABAAIAAABIADAAIgBABIABAAIAAACIADAAIAAABIAAAAIAAACIAAAAIAAAHIACAAIAAACIgBAAIAAABIgBAAIAAABIABAAIAAABIABAAIAAABIgBAAIAAABIABABIAAABgAh5JVIAAgBIABAAIAAgCIABAAIAAgCIABgBIABAAIAAgBIABAAIABgBIABAAIABgBIABAAIAAAAIAAAAIABAAIABABIACABIACABIABAAIAAABIgBAAIAAACIgCAAIAAACIgBAAIAAABIgDAAIAAAAgAgvJRIAAgBIgCAAIAAgCIgBgBIAAgCIABAAIAAgDIACAAIABABIAAACIgBAAIAAACIABAAIAAgBIABAAIAAAEIgBAAIAAABgAh4JMIAAgBIgBAAIAAgBIgBAAIgBABIAAgBIAAAAIAAgCIgDAAIAAgEIADAAIAAgBIAAACIACAAIAAABIAGAAIAAAEIgBAAIAAABIgBAAIAAABgAhbJIIgBAAIAAgEIgCAAIAAgBIAAAAIAAgBIAAAAIAAgDIABABIAAgBIACAAIAAgBIADAAIAAABIABAAIAAABIAAABIAAABIABAAIAAAAIgBABIAAADIAAAAIAAACIgDAAIAAABgAhhJFIAAgBIgEAAIAAgBIgHAAIAAgBIgBAAIAAgCIADgDIACAAIAAABIADAAIAAACIACAAIAAACIABAAIAAABIABAAIAAgBIABAAIAAACIABAAIAAABgAGDIEIAAgBIgCAAIAAAAIgCAAIAAgBIgBAAIAAgBIAAAAIAAgBIAAAAIABABIAAgBIgBgCIABAAIAAgBIABAAIAAADIABAAIAAABIACAAIAAgBIACAAIAAABIgBAAIABABIgBAAIAAACgAAfICIAAgBIgBAAIAAgBIgBAAIAAgCIABAAIAAgBIABAAIAAgBIAAAAIAAgBIABAAIAAADIgBAAIAAAEgAAHH9IAAgBIACAAIAAABgAgVH9IAAgBIgBAAIAAgBIABAAIAAgBIgBgBIAAgBIgBAAIAAgEIABAAIAAABIACAAIAAABIABAAIAAgBIABAAIAAABIADAAIABgBIAAAAIAAgDIABAAIAAAAIABAAIAAgBIABgCIAAgDIADADIABgBIABAAIAAgCIABAAIAAgBIABgBIABAAIAAACIABACIADAAIAAgCIgBAAIAAgEIAAAAIAAAAIAAgCIgBAAIAAgDIABAAIAAABIACAAIAAgBIABgBIAAAAIAAgBIAAAAIAAgBIAAAAIAAAAIABAAIAAACIABABIAAABIABAAIAAABIACAAIAAADIABAAIAAABIABAAIACgBIABAAIAAgBIAAAAIAAgBIABAAIAAgBIgBAAIAAgDIABAAIAAgBIABABIABAAIAAABIgBAAIAAABIAGAAIAAACIgBgBIAAABIgBABIAAABIABAAIABAAIAAAAIAEAAIAAABIgCAAIABABIgBAAIAAABIgCgBIgBAAIAAAFIgDAAIAAgBIgCAAIAAgCIgCAAIgBADIAAABIgBAAIAAABIgBAAIAAABIACAAIAAACIABAAIAAABIAAABIAAgBIACAAIAAgCIABAAIAAAGIgBAAIgBABIgBAAIAAgBIAAgBIgBAAIAAgBIgBAAIAAgCIgCAAIAAABIgBAAIAAgBIgBAAIAAgDIABAAIAAgBIgFAAIAAABIAAAAIAAAAIgBAAIgBAAIgBAAIAAgBIgCAAIAAgBIgBABIgBgBIAAABIgBAAIAAABIgCAAIAAABIACACIgBABIgDAAIAAABIgDAAIAAACIgBABIgBAAIgBAAIABAAIAAABIgFAAIAAABIgBAAIAAABgAg0H7IAAgBIABAAIAAAAIAAABgAAEH6IAAgBIABAAIAAgBIABAAIAAgBIABAAIABgBIAAABIABABIAAABIgCAAIgBABgAgrH5IgBAAIAAABIgEAAIAAgBIgBgBIABAAIAAgBIABAAIABABIAAgBIABAAIAAgCIABAAIAAgBIAEAAIAAgBIAAAAIAAABIABAAIAAADIgBAAIAAABIAAAAIAAABIgCAAIgBABgAAtH5IAAgBIgBgBIgBAAIAAgBIABAAIABgBIAAABIABAAIAAABIACAAIAAABIgBAAIAAABgAA5H4IgBgBIgBAAIAAgDIABAAIAAgBIABAAIAAABIABABIAAABIgBAAIAAACgAAeH1IgBgBIAAgBIABAAIAAgBIACAAIAAACIgBAAIAAABgABbHzIgCgBIAAgBIgBAAIAAgBIAFAAIAAABIAAAAIAAABIABAAIAAAAIgBAAIAAABgAA5HwIAAgFIAAAAIAAgBIAAgBIAAAAIAAgBIgBAAIAAgBIgFAAIAAgBIgCAAIAAgDIAAAAIgBgBIgBAAIAAABIgBAAIAAABIgBAAIAAABIgCAAIAAgBIgBAAIAAgBIgCAAIAAgCIABAAIgBgBIgBAAIAAgBIAAAAIAAABIgBAAIAAAAIgFAAIgBAAIgBgBIAAgCIAAAAIAAgDIAAAAIAAgCIgBAAIAAgCIABAAIAAAAIAAAAIAAABIABAAIAAABIABAAIAAABIACAAIAAABIACAAIAAACIABABIABAAIAAgBIAAAAIAAgDIACAAIAAABIABAAIAAADIABgBIABAAIAAgDIgBAAIAAgBIABAAIAAABIABAAIAAABIABAAIAAgBIABgBIABAAIAAgCIABAAIAAABIAAAAIABABIgBAAIAAABIABAAIAAABIABAAIAAACIABgCIAAgBIAEAAIAAADIABABIAAACIAAAAIAAABIABABIABAAIAAADIABAAIAAABIABAAIAAABIAGAAIAAABIgBAAIABABIABAAIAAAAIgBAAIAAABIgCAAIAAgBIgDAAIAAAAIgBgBIAAABIgDAAIAAAAIABAAIAAACIABAAIAAACIABAAIgBACIAAACIgDAAIAAABgAAjHxIgBgBIAAgCIAFAAIAAADgAAbHrIAAgBIgCgCIAAgBIABAAIAAgBIgBAAIAAgCIABAAIAAgCIABAAIAAgBIABAAIAAgBIABAAIAAABIABAAIAAACIgBABIABAAIAAABIABAAIAAACIgCAAIgBABIAAAAIABAAIAAADgAAZHogABJHmIAAgBIgDAAIAAgBIABAAIAAgCIACAAIAAgBIACAAIAAACIABAAIAAACIgBABgAgHHgIAAAAIgBAAIAAgDIACAAIAAABIABAAIAAACIgBAAIAAAAgAAKHgIgBgBIAAgDIgBAAIAAgDIgBAAIAAgBIAFAAIAAABIABAAIAAAGIgBABgAAbHeIAAgBIgBAAIAAgBIABAAIAAgCIACAAIABACIAAACgAgDHdIAAgBIACAAIAAABgAAaHTIAAgCIgBAAIAAgDIABgBIABAAIAAADIABAAIAAACIgBAAIAAABgAAdHNIAAAAIgBAAIAAgBIABAAIAAgEIACAAIAAACIAAACIAAAAIAAABIgBAAgAEbHLIABgBIAAgFIABAAIAAAFIABAAIAAABgAEXG7IAAgDIgBAAIAAgDIADAAIAAAGgAD5G4IAAgCIgBAAIAAgDIAAAAIAAABIACAAIAAgBIABAAIACABIAAABIgCAAIAAABIgBAAIAAACgAFBGzIAAgBIgBAAIAAABIgBAAIAAgCIAAAAIAAgBIABAAIAAgBIADAAIAAABIACAAIABABIAAABIgBAAIAAABIgCgBIgBAAIAAABgAESGyIAAgBIgBAAIAAgCIgBAAIAAgCIgBAAIAAgBIgCAAIAAgBIADAAIABgBIAAgBIABAAIAAAAIABAAIAAAAIABAAIAAABIgBABIABAAIAAABIgBAAIAAABIgBAAIAAABIgBAAIAAABIABAAIAAABIABAAIAAABIgBAAIAAABgAESGoIgCAAIAAgBIABAAIAAgBIgCAAIAAgDIABAAIAAgCIABABIABAAIAAgBIAAAAIABABIABAAIAAAEIgBACIgBABgAEeGkIAAgGIgBAAIAAABIgDAAIAAgEIgEAAIAAABIgCAAIABgBIAAgCIgCAAIgBgBIgBAAIAAgBIgEAAIAAAAIgEgBIAAAAIAAgCIABAAIAAABIACAAIAAgDIgBAAIAAgGIgBAAIAAgBIgBAAIAAABIgCAAIAAgCIgCAAIAAgBIgCAAIgBgBIgCAAIAAgDIgCAAIAAABIABAAIAAABIgBABIgBAAIAAgDIABAAIAAgCIACAAIAAABIgBAAIAAABIABAAIAAAAIABAAIAAACIABAAIAAgBIABAAIAAgBIABAAIAAAAIABAAIAAAAIACAAIAAgBIABAAIAAgCIABAAIAAgCIACAAIABACIAAABIABAAIACABIABAAIAAABIABAAIAAgBIAGAAIACgBIgBABIADAAIAAABIAAAAIAAABIgCAAIAAgBIgBAAIAAAAIgBABIABAAIgBABIABAAIAAABIACAAIAAACIABAAIAAAEIABAAIAAACIABAAIAAABIAEAAIAAABIABAAIAAACIABAAIAAABIABAAIAAABIAAAAIAAABIAAAAIAAABIgBAAIgBABIAAADIgBAAIAAADIABABIAAABIABABIAAACgAEEGaIAAgBIABAAIAAgDIgBAAIAAgBIgBAAIAAABIgBAAIgBABIAAgBIgBAAIAAABIgBAAIABgBIAAgBIgBAAIAAABIgCAAIgCABIAAAAIgBAAIAAgBIgBAAIAAgBIgBAAIAAgEIABAAIAAgCIABABIAAgBIgCgBIAAAAIAAgBIAAgCIAGAAIAAACIgBAAIAAABIABAAIABAAIAAAAIABAAIAAgBIAAAAIAAABIACAAIAAAAIABAAIAAABIgCABIABABIAAABIABAAIABACIACAAIABABIAAADIgBAAIAAABIACAAIAAABgAEDGNIgBgBIAAgCIACAAIAAADgAEBGMIABAAIAAABgAECGMgADyGHIAAABIgCAAIAAgCIgBAAIAAgBIADAAIAAAAIABAAIAAADgAD5GEIAAgCIgBAAIAAgCIABAAIAAACIACAAIAAABIgBAAIAAABgACfFgIAAgBIgCAAIAAgBIgCAAIAAgCIgBAAIAAgCIABAAIABgBIABAAIAAABIAAAAIABgBIAAABIABAAIAAABIABABIAAAEgACCFbIAAgBIgBAAIAAgBIABAAIAAgBIADAAIAAABIABAAIAAABIgCAAIAAABgABHFRIAAgCIACAAIAAAAIgCAAIAAgBIACAAIAAgBIACAAIAAACIAAAAIAAAAIAAAAIAAACgAA5FPIAAgBIAAAAIAAgBIAAAAIAAgBIAAAAIAAgCIAAAAIAAACIABAAIAAABIABAAIAAABIgBAAIAAABgAAsFMIgCAAIAAgCIgBAAIAAgBIgBAAIAAgBIADAAIAAgBIADAAIAAADIgBAAIAAACIgBABgAAuFEIAAABIgBAAIgBgBIgCAAIAAgCIgBgBIgBAAIAAgEIABAAIAAAAIABAAIAAgBIADAAIAAgBIABABIAAABIACAAIABgBIABAAIAAABIABAAIAAABIgBAAIAAACIABAAIAAACIABAAIgBABIAAABIgBAAIAAgBIgBABIgBAAIAAgBIgBABIAAABgABKFAIAAgDIABAAIAAgCIAAAAIABABIABAAIAAACIgCAAIAAABIAAABgABcE6IAAgCIgBAAIAAgCIACAAIAAABIAAAAIABABIgBAAIAAACgAA5E6IAAgDIAAAAIAAgBIACAAIAAABIABAAIAAABIgBACgABME1IAAAAIgBAAIAAAAIAAAAIAAgCIAAABIADAAIAAABIgBAAIABAAgABCEzIgCAAIAAABIgBAAIgBgBIgCAAIAAgBIgCAAIAAABIgBAAIAAgBIgCAAIAAgCIgCgBIgBAAIAAgBIgBABIgCAAIAAgCIgBAAIAAgBIABAAIAAgBIAAAAIAAAAIgBgBIABAAIAAgBIgBgBIABAAIgBgCIABAAIgBgBIgBgBIgCAAIAAgCIACAAIAAgCIACAAIAAgBIABAAIABgBIAAgBIABgBIgBAAIAAgCIgCAAIAAgBIgHAAIAAAAIABAAIAAgBIABAAIAAABIABgBIAAABIABAAIABgBIABABIAAgBIABAAIAAgBIACAAIAAABIABAAIAAABIABAAIAAAAIACAAIAAABIABAAIAAABIgBAAIAAABIABAAIAAABIAEAAIAAABIABAAIAAABIABAAIAAgBIABAAIAAABIAEAAIAAAEIAAAAIAAAHIABABIAGAAIAAADIABAAIAAADIgBAAIAAABIgDAAIAAABIgBAAIgBABIAAABIgCAAIgBAAgABKEoIAAgCIgDAAIAAACIgCAAIAAgCIABAAIgBgBIgBAAIAAgBIADAAIAAgCIACABIAAABIACAAIAAABIAAAAIAAABIAAAAIAAACgAApEiIAAgCIABAAIAAACgAAlEaIgCgBIACAAIAAgBIABAAIAAgBIABAAIAAABIAAABIAAAAIAAABgAA/EXIgBgBIgCAAIAAgCIABAAIAAgBIADAAIAAAEgAAwEWIAAgDIgCAAIAAgBIAEAAIAAABIgBAAIAAABIAAACgAhFDhIAAgBIgBAAIAAABIgCAAIAAgFIgBAAIAAgFIABAAIAAgCIADAAIAAgBIAAAAIAAgBIABAAIAAgBIABAAIAAgEIABAAIAAgCIgBAAIADgCIABAAIAAABIABAAIAAABIgBAAIAAADIADAAIAAABIgBAAIAAAAIgBAAIAAAGIgBAAIAAAEIgBAAIAAABIgBAAIAAADIgBAAIAAACIgBAAIAAABgAhODgIAAgCIgBAAIAAgBIgFAAIAAgCIACAAIAAAAIABAAIAAAAIACAAIAAAAIABAAIAAgCIACAAIAAgBIABAAIAAgBIABAAIAAADIgBABIAAACIgBAAIAAABIgBAAIAAACgAhGDRIgCgBIgBAAIAAAAIABAAIAAgEIACAAIAAgDIgCAAIAAgDIAEAAIAAABIABAAIAAACIgBAAIAAgBIgBAAIAAADIABAAIAAADIgBAAIAAACIAAABgAgoBdIAAgBIAEAAIAAABIgBAAIAAAAgAgyBBIAAgHIABAAIABgBIAAACIACAAIAAADIgBAAIAAACIgCAAIAAABgAg9A2IAAgDIgBAAIAAgBIgBgBIgBABIgBAAIAAABIgBAAIAAgCIABAAIAAgBIADAAIABABIAAgBIACAAIAAABIgBAAIAAACIACAAIAAABIgCAAIABABIgBAAIAAABgAg4ApIgCAAIAAgBIAAABIgEAAIAAgBIABAAIAAgBIgBAAIgBgBIAAgBIABAAIAAgBIABgBIAAgCIADAAIAAACIAAAAIAAgBIAHAAIAAADIAAABIAAACIgDAAIgBABIAAABgAhcAfIgBgBIAAgBIgDAAIgBgBIgBAAIAAABIgBgBIgBAAIAAgCIgBAAIAAgDIABAAIAAABIACAAIAAgCIgBAAIgBgBIABAAIgBgBIgDAAIAAgBIABAAIAAgCIABgBIAAgCIgBAAIAAgBIgBAAIAAgBIABAAIAAgBIgBAAIABgBIgBAAIAAgFIABAAIAAgBIADAAIAAABIABAAIAAABIABAAIAAADIADAAIAAgBIAAAAIAAgCIAAAAIAAgBIACAAIAAgCIACAAIAAAAIADAAIAAAAIAAABIAAABIgBAAIAAABIADAAIABACIgDAAIAAABIADAAIAAABIgBABIACAAIAAABIABAAIAAABIgCAAIAAgBIgBAAIAAAEIAEAAIAAABIABAAIgBABIgBAAIAAACIABAAIAAAAIACAAIAAABIgFAAIAAACIgBAAIAAgBIgHAAIAAABIgCgBIAAAAIgBABIgCAAIAAADIADAAIAAABIAAAAIAAgBIACAAIAAABIABAAIAAABIgBAAIAAAAIABABIABAAIAAABIgBAAIAAABgAhzAYIAAgDIACAAIAAABIABAAIAAACgAhpADIAAgBIABAAIAAgBIACAAIAAACgAglgPIAAgDIADAAIAAADgAg3ghIgBAAIAAgBIACAAIAAgBIACAAIAAgBIABAAIAAACIgBAAIABABIAAAAgAh1giIAAgBIgBAAIAAgCIgBAAIAAgBIgBAAIgBgBIADAAIAAgBIABgBIAAABIABAAIAAgCIABAAIAAABIABAAIAAACIgBAAIAAACIABAAIAAABIgBAAIgBABIAAABgAhRhhIAAgEIgBACIAAgGIABABIADAAIAAgBIgCAAIgBAAIgBAAIgCAAIAAADIgBAAIAAgBIgCAAIAAABIgBAAIAAgBIgFAAIAAABIgBAAIAAgDIAAAAIAAABIgBAAIAAgBIABAAIAAAAIAAgBIACAAIAAgBIgBAAIAAgBIACAAIAAABIAEAAIAAgBIADAAIAAgBIABAAIAAgEIACAAIAAABIABAAIAAgBIACAAIAAABIABAAIABABIAAgBIAAAAIAAgBIABAAIAAACIgBABIAAACIACAAIAAgBIABAAIAAABIABAAIAAABIgBAAIAAABIABAAIAAABIACAAIABAAIAAAAIABAAIAAAAIABAAIACAAIgBAAIAAgBIABAAIAAgBIABAAIABgBIACAAIgBgBIACAAIgBgBIACAAIAAABIABAAIAAABIAAAAIAAABIgCAAIgBABIgBAAIAAABIgBAAIAAAAIgCAAIAAABIgBAAIgBABIgCAAIAAABIgHAAIAAABIgBgBIAAABIgBgBIgCAAIAAABIABAAIAAACIgBAAIAAACgAhehqIAAgBIAAAAIAAABgAkumXIAAgBIgBAAIABgBIAAgBIgBAAIAAgBIgBAAIAAgCIgCgBIAAgBIgBAAIAAgBIgCAAIAAgDIACgBIABAAIAAgDIACAAIAAAAIACAAIAAgCIACAAIAAACIABgCIAAACIgBABIAAACIABAAIAAACIABABIAAABIACAAIgBABIgDAAIAAABIgBAAIAAABIABABIAAABIACABIABAAIAAACIgDAAIAAABgAjKnDIgBgBIAAgDIABAAIAAgCIgBAAIAAgBIgBAAIAAgBIgCAAIAAABIgBAAIAAACIgBAAIAAgCIgBAAIAAgCIgBAAIAAgBIgBAAIAAgBIgCAAIABgBIAAgBIgBAAIgBgBIgCAAIgEAAIgEAAIgBAAIgBAAIgBAAIgBAAIgBAAIAAAAIABAAIAAgDIABAAIAAgBIABAAIAAABIAEAAIAAgBIABAAIAAABIABAAIAAgDIACAAIAAgDIABgBIAAgBIgBgCIgBgCIAAgBIgBAAIAAgFIAAAAIgBgBIAAgBIABAAIAAgBIAAAAIAAgDIAAAAIAAgFIAAAAIAAABIACAAIAAgBIABgBIABgCIAAgBIADAAIgBAAIgEAAIAAgBIgBAAIAAgBIgBAAIAAABIABABIgBAAIAAAAIAAAAIAAABIgEAAIAAgCIABgBIgBAAIAAgBIgCAAIAAgDIACAAIAAgBIABAAIgBgBIgBAAIAAgCIABAAIgBgBIABAAIgBgBIgCAAIAAABIgBAAIAAgBIgBgBIgBAAIAAABIgBAAIAAABIgFAAIAAgDIACAAIAAgBIgBAAIAAgCIgBgBIgBAAIAAAAIABAAIAAgDIABgBIAAgCIABAAIACABIAAgBIABAAIAAABIABAAIAAgBIABABIAEAAIAAABIgBAAIAAABIgBAAIAAABIAEAAIAAgBIABAAIAAABIABAAIAAABIABABIAAAAIAAgDIACAAIABgBIAAACIADAAIAAADIgEAAIAAgBIgBABIgEAAIAAADIgBAAIAAgCIgBAAIAAABIgBABIAAABIACAAIABgBIACAAIAAgBIABAAIAAABIAAABIABAAIAAgDIADAAIAAADIgBAAIAAABIADAAIABABIgDAAIgBABIAAADIABAAIAAgBIADAAIAAACIABAAIAAABIgCAAIAAACIABAAIAAABIACAAIAAgBIABAAIABABIAEAAIAAACIgBAAIAAABIgBAAIAAgBIgBAAIAAAAIgBAAIgBAAIAAADIABAAIAAgBIABAAIAAACIgBAAIAAABIABAAIAAABIABAAIAAgBIACAAIABABIgBAAIAAABIADAAIAAgBIAEAAIAAABIACAAIAAACIABABIAAABIAAABIAAABIABABIAAABIABAAIAAABIABABIAAABIABAAIAAAAIABABIAAABIABAAIAAABIABABIAAABIABAAIAAABIgDAAIgBABIgBAAIgHAEIABABIgBAAIAAABIADAAIAAABIABAAIAAACIgBAAIAAADIgCAAIAAgBIgBAAIAAAAIgBAAIAAgBIgCAAIAAABIAAABIAAAAIAAADIABAAIAAgBIABAAIAAAEIABABIAAABIgBABIAAACIgBAAIAAABIgBAAIABABgAjen/IABABIABAAIAAgBIAAgBIAAgCIAAABIAAgBIgBAAIAAgBIgBABIAAABIABAAIAAABIgBAAgAj5nNIAAgBIAAgBIgBAAIABgBIgBgBIABAAIAAAAIgBAAIAAgBIABAAIAAgBIAAAAIABABIAAgBIABABIAAABIABgBIABABIAAAAIABAAIAAABIABAAIAAABIgDAAIgBABIgBAAIAAABgAmCn8IAAgCIgCAAIAAgDIABAAIAAgBIADAAIAAAFIgBAAIAAABgAkmoqIAAgBIgBAAIAAAAIABAAIAAgDIACAAIAAgCIABAAIAAACIABAAIABABIAAABIgBAAIgBABIAAgBIgBAAIAAABIAAAAIAAAAIgBAAIAAABgAkloxIAAgBIABAAIAAABgAlRpgIAAgBIgBABIAAABIgBAAIAAABIgBAAIAAgBIAAABIAAgBIgCAAIAAgCIgCAAIAAAAIgBAAIAAgBIABgEIABAAIABACIACAAIAAABIAAABIABAAIAAgBIABAAIAAABIABgBIACAAIAAADIgBAAIABABIAAABg");
	this.shape_1.setTransform(-0.9,-0.2);

	this.timeline.addTween(cjs.Tween.get(this.shape_1).wait(1));

	// Capa_3
	this.shape_2 = new cjs.Shape();
	this.shape_2.graphics.f("#394C64").s().p("AiIJ9IgBgBIgCAAIAAgBIgBAAIAAgCIgBAAIAAgCIABAAIAAgBIABAAIAAgBIgBAAIAAgCIgBAAIAAgBIgBAAIAAgBIAAAAIAAgCIgBAAIAAgDIgBAAIAAgBIgBAAIAAgBIgCgBIACgBIgCAAIAAgBIACgBIAAgBIgCAAIAAgCIgBAAIAAAAIgBAAIAAgCIAAgBIgBgBIABAAIAAgBIAAAAIAAAAIAEAAIAAgCIABAAIAAgBIABAAIABgBIAAgBIAAgBIAAgCIABAAIAAgCIABAAIAAgBIgCAAIAAgBIgBAAIgBABIAAABIgBAAIAAgBIgEAAIAAgCIAAAAIAAgCIgEAAIAAgFIADAAIAAgCIACAAIABABIACAAIAAgBIACAAIAAgBIABAAIAAABIAAAAIAAgBIABABIAAgCIABgBIABAAIAAgBIABAAIAAgBIABAAIAAgBIABAAIAAgBIACAAIABgBIABAAIAAgBIAFAAIABgBIABABIACACIABABIABAAIABABIAAABIgEADIgFABIAAACIACAAIAAABIABAAIAAACIgBAAIAAACIgCAAIAAACIACAAIAAABIgDABIAAABIABAAIAAABIACAAIABgBIAAADIABAAIABABIAAAAIAAACIABAAIAAABIAFAAIABgBIABAAIABgBIAAgBIABAAIAAABIABAAIAAgBIAAAAIAAgBIABAAIAAgDIABAAIAAgBIACAAIAAgBIABAAIABgBIAAAAIABAAIAAgFIABABIABAAIAAABIABAAIABABIAAgDIgBAAIAAAAIgBAAIAAgBIgCAAIAAgBIAAAAIgBgBIgBAAIAAgDIgBAAIgCgBIgBAAIgBgCIgBAAIAAgBIABAAIAAgBIgDgDIAAgDIACgCIABAAIACgBIACAAIAAgDIgCAAIAAgCIgBAAIAAgCIgBAAIAAgBIABAAIAAgBIAFAAIABABIACAAIAAgBIACAAIAAgBIAEAAIAAgBIACAAIAAgBIABAAIAAABIABAAIAAABIABABIgBAAIgBABIAAADIAEAAIABgBIAAABIACAAIAAABIAAAAIAAABIABAAIgBABIgBAAIAAADIgBAAIgBAAIgDACIAAABIABAAIAAABIADAAIACgCIAAgCIAAAAIAAAAIABAAIAAgBIABAAIAAgBIACAAIAAgBIABAAIABgBIAAABIACAAIAAgBIABgBIACAAIAAgBIAAAAIAAgBIACAAIAAgBIAFAAIAAABIAHAAIAAgBIABAAIAAACIgBACIABAAIABABIABAAIAAgBIABAAIAAgCIAAAAIAAgBIACAAIACABIABAAIAAgCIACAAIAAgBIAAAAIAAgBIABAAIAAABIADAAIAAABIABAAIAAABIADAAIABgBIAAgBIABAAIAAgBIABgBIABgCIAJACIgBAAIAAABIgCAAIAAABIgCAAIAAACIgBAAIAAACIgCAAIAAABIgBAAIAAADIAAABIAAgBIgDAAIAAgBIgCAAIAAABIgDAAIAAACIgBAAIAAACIgBABIgBAAIAAABIgBAAIAAABIAAAAIAAABIgBAAIgCACIAAABIgCAAIAAABIgBAAIAAABIgBAAIAAgBIgBAAIAAgBIgDAAIAAABIABAAIAAABIABABIAAABIABAAIAAABIgBAAIAAABIgBAAIgCACIAAABIABAAIAAABIABAAIAAAEIABAAIgBAAIAAACIABAAIAAABIABAAIAAABIgBAAIAAABIACAAIgBABIgBAAIgBABIAAACIgBgBIAAABIgBAAIAAACIACAAIAAACIgBAAIAAACIgBABIABAAIAAACIABAAIAAABIACAAIAAABIABAAIAAABIABAAIAAABIABABIgCAAIAAABIgBABIgBgBIgFAAIAAgBIgBAAIAAgBIABAAIgBgBIgCAAIAAADIABAAIAAABIABAAIAAAFIABAAIAAADIgCgBIAAACIgCAAIgBgCIgFAAIAAABIgBABIgBAAIAAgBIgCAAIAAgBIgDAAIAAgBIgBABIAAgBIgBAAIAAgBIgBAAIAAgCIgBAAIAAgBIgBAAIAAgBIgCAAIAAABIgFAAIAAgDIABgBIAAgBIAFAAIAAgCIgBAAIAAgBIgBAAIAAgBIgEAAIAAAAIgDAAIgBgCIAAACIgBAAIAAAAIgBAAIAAAAIgFAAIAAAAIgCAAIAAABIgEAAIAAAEIgBAAIAAADIAAAAIgBABIgBAAIAAABIgCAAIAAACIgBAAIAAACIgBAAIAAACIgBAAIAAACIgDAAIAAAAIgBAAIAAABIgBAAIAAABIgBgBIgBAAIAAABIgEAAIAAABIAAABIAAAEgAhLJvIACAAIAAAAIgCAAgAF7I5IAAAAIAAAAIgBAAIAAgCIgEAAIAAgBIAAAAIAAgBIgBAAIAAgBIgBAAIAAgCIABAAIAAgBIgBAAIAAgBIgBAAIAAgEIgBAAIAAgDIgCAAIAAABIgDAAIAAgBIgBAAIABgBIAAgBIABgBIAAgBIABgBIAAgDIgBAAIgBABIgCAAIAAgBIgBAAIAAABIAAAAIgBgBIAAgCIABAAIAAgBIgDAAIAAABIgDAAIAAgBIgBgBIgBAAIAAABIABAAIAAACIgBAAIAAABIgEAAIAAABIgBAAIgEAEIAAABIgBAAIAAAAIgBAAIgBABIAAgBIgCAAIAAgBIABAAIABgBIAAgCIABgBIAAgEIABgBIAAgIIAAgBIAAgCIAAAAIAAgDIAAAAIAAgEIADAAIAAgEIABAAIAAgBIABAAIAAgCIgBgBIgBAAIAAABIgBAAIAAAAIgBAAIAAgDIgCAAIAAABIgBAAIgBABIAAABIgDAAIAAgBIgBAAIABgBIgBgBIAAgFIgBAAIgBgBIgBAAIAAgBIgBAAIAAgBIgDAAIAAgBIgBAAIAAgBIgEAAIgBABIAAgBIgEAAIAAABIgCAAIAAgDIgBAAIAAABIgBAAIAAgBIgEAAIAAgEIgBAAIAAgDIACAAIAAgBIACAAIABgBIgBgBIAAgBIABgBIAAgJIgBAAIAAgCIgKAAIAAgDIgBAAIAAgBIgCABIAAgBIAAAAIAAgFIAAAAIAAgEIACAAIABgBIAAgBIABAAIAAgCIgBAAIAAABIgBgBIgCAAIAAABIAAAAIAAABIgBAAIAAACIgBABIAAgBIgCAAIgCgCIAAgCIABAAIgBgBIgBAAIgCABIgBABIgCAAIABgBIAAAAIABgBIgBAAIAAgBIgBAAIAAABIgBgBIAAACIgBABIAAABIgBABIAAABIgBABIAAADIgCABIAAgCIAAABIgBAAIAAACIgBAAIAAACIABABIABAAIAAABIgGAAIAAgBIgBAAIAAABIgBAAIAAADIgBABIAAABIgBABIAAACIgBABIgBAAIAAABIAAABIgBAAIAAACIgBAAIAAACIgEAAIgBgBIAAgBIgBAAIAAABIgCAAIAAgBIgBAAIAAABIgDAAIAAgFIgBgCIgBgJIgBgBIgBAAIAAACIgCAAIAAABIABABIgBAAIAAABIgBAAIAAgCIgBAAIAAgBIgCAAIAAgBIADAAIAAgBIgBAAIAAgDIABAAIgBgBIAAgBIgCAAIAAABIgBAAIAAABIgCAAIAAABIgBABIgDAAIAAACIgBAAIAAgBIgBAAIgBABIAAgBIgCAAIAAgEIgEAAIAAgDIgCAAIAAgEIAAAAIgBAAIgBAAIAAABIgBAAIAAABIgBAAIAAgBIgBAAIAAgBIABAAIAAgFIABAAIAAgCIgCAAIAAgCIgBAAIAAgCIABAAIAAgBIgCAAIAAABIgCAAIAAgCIABAAIAAgCIgBgBIACAAIAAgBIABAAIABABIABAAIAAgBIABAAIAAgCIgBAAIAAgCIgBAAIAAABIgBgBIAAgCIgBAAIAAAAIgBAAIAAgBIADAAIAAgCIABAAIAAgBIABAAIAAgBIABAAIAAgDIABAAIABgBIAAgBIAAAAIAAgBIAEAAIAAgBIABAAIAAABIAAAAIAAgCIABgBIAAgCIABAAIAAgCIABAAIAAgBIgBAAIgBgBIAAgHIgBAAIgBgBIACgCIAAgBIgBAAIAAgBIAAAAIAAgBIgBAAIgBgBIgBAAIAAgCIgCAAIAAAAIgBAAIgBgBIAAgBIgDAAIgBgBIAAABIgCAAIAAgEIABgBIAAgDIACAAIAAgBIgBAAIAAgBIgDAAIgBgBIgDAAIAAgCIgBAAIAAgBIABAAIAAgCIABAAIAAgCIgBgBIAAgBIgBAAIgBgBIAAgDIACAAIABABIABAAIAAABIABAAIAAABIABAAIAAgBIACAAIABgBIADAAIAAgBIABgBIABAAIAAgEIABAAIAAAAIAAAAIACAAIAAAAIABAAIAAgBIACAAIAAABIAAAAIAAABIABAAIAAABIABAAIAAABIABAAIAAADIABAAIACACIAAABIABAAIAAABIADAAIABABIABAAIAAgIIABAAIgBgBIAAgBIABgBIgBAAIAAAAIABgBIACAAIAAABIACAAIABAAIACAAIAAABIABAAIAAABIAEAAIAAABIABABIAAACIABAAIAAABIgBABIAAABIABAAIAAABIABAAIAAABIABAAIAAABIALAAIAAABIABAAIAAACIgDAAIAAgCIgBAAIAAAAIAAACIAAAAIAAABIAAAAIAAABIACAAIAAABIACAAIAAAFIABAAIAAACIABAAIAAABIADAAIAAABIABAAIAAABIABAAIAAABIABAAIAAABIAAAAIAAABIAAAAIAAACIgBAAIgBABIAAACIgBABIAAACIABABIAAACIABABIAAACIgBAAIAAABIABAAIAAABIABAAIAAABIAAABIACAAIACADIABAAIAAABIADACIABAAIACAAIABABIABAAIACABIALAAIABgBIABAAIABgBIADAAIAAABIACAAIAAABIABAAIAAABIABABIAAAHIAAABIAAAJIACABIAAAGIABABIAAABIABACIAAACIABABIAAAAIAAABIAAABIABAAIAAABIABABIAAAHIABAAIAAABIABABIABABIAAABIAGAFIAAABIABAAIABABIAAAAIAAABIACABIAEADIABABIABABIABAAIAAABIABAAIAAABIACAAIAAABIACAAIAAABIACAAIAAABIACAAIAAABIACAAIACABIABAAIABABIABAAIAAAAIACAAIAAABIADAAIAAABIACAAIABABIACAAIAAABIAEAAIABABIACAAIABABIADABIABABIABAAIACACIAAABIABAAIAAABIABABIACABIACABIABAAIABABIABAAIAAABIACAAIABABIABAAIABAAIABAAIABABIACAAIAAABIADAAIAAABIADAAIAAABIADAAIAAABIADAAIABABIADAAIABABIAFAAIAAABIAGAAIAAABIAJAAIABABIACAAIAAABIABAAIAAACIABAAIAAABIABAAIAAABIABAAIAAABIABABIAAAAIgBAAIAAACIABAAIgBABIAAAEIgBAAIgBABIgBAAIAAABIgEAAIgBABIgEAAIAAgBIgBAAIAAgBIgCAAIAAgBIgDAAIAAgBIgBAAIAAgDIgBAAIAAgBIgCAAIAAgBIAAAAIAAgBIgBAAIAAAAIgBAAIAAgBIgEAAIgBgBIgCAAIAAABIgDAAIAAgCIgBgBIAAgBIAAAAIAAAEIgBAAIgCgBIgCABIAAAAIAAABIgBAAIAAAAIgCAAIgBABIgBAAIAAABIgCAAIAAgBIgBAAIgBABIgBAAIAAABIgBAAIAAABIgFAAIAAgBIgCAAIAAACIgBAAIAAABIgCAAIAAABIABABIAAABIgBAAIAAAGIABABIAAACIABAAIAAAAIgCAAIAAABIABAAIAAACIgEADIAAABIgCAAIAAgBIgBAAIAAABIgCAAIAAACIABAAIAAADIgBAAIAAABIABAAIAAABIgBAAIAAADIgBAAIAAACIgBABgAAWICIAAgBIgBAAIgBgBIgBgBIAAgBIAAAAIAAgBIgCgCIAAgBIgBAAIAAgBIgCgBIAAABIgBAAIAAABIAAAAIAAABIgBAAIAAABIgBAAIAAABIgCAAIAAgBIgCAAIAAgDIgBAAIAAgBIgCAAIAAgBIgCAAIAAgBIAAABIgCAAIAAABIAAABIAAgBIgEAAIAAABIgBAAIAAABIgBAAIgBABIAAACIABAAIAAABIABAAIAAABIABAAIAAADIgCAAIgBgBIAAgBIgBAAIAAgBIgEAAIAAABIgBAAIAAABIgBAAIAAgBIgIAAIAAACIgGAAIAAgFIgBAAIgBgBIABAAIgBgBIAAABIgBAAIAAgBIgBAAIAAgBIgBAAIAAgBIgBAAIAAgBIgGAAIAAABIgBAAIAAABIgEAAIAAABIgCAAIAAABIgBAAIAAABIgBAAIAAABIgBgBIgCAAIAAACIABAAIgBABIgCAAIAAgBIgBAAIAAgBIgCAAIAAgBIgBAAIgBABIgCAAIAAABIgBAAIgBABIgCAAIAAgBIACAAIAAgBIABAAIAAgBIABAAIAAgBIAEAAIAAgCIACAAIAAgBIgCgBIAAgBIgBAAIAAgBIgBAAIAAgBIAAAAIAAgBIgBAAIAAgBIgBgBIgDAAIAAAAIgBAAIAAgBIABAAIAAgBIABAAIAAgBIgBAAIAAgEIADAAIAAgBIABAAIAAgCIABAAIAAgBIAAAAIAAgCIABAAIAAgBIABAAIAAgDIACAAIACgCIABAAIAAAAIAAAAIAAgBIABAAIAAgBIABAAIAAgBIACAAIABgBIADAAIAAABIABAAIAAgBIABAAIAAgBIABAAIAAgFIgBAAIAAgCIgBAAIgBgBIAAgDIgBgBIAAgBIABAAIABgBIABAAIABgBIAAgBIABAAIAAgCIgBAAIAAAAIABAAIAAgBIAAAAIAAgDIABAAIAAgCIACAAIAAABIACAAIAAABIABAAIAAACIAAAAIAAABIACAAIAAgBIADAAIABABIACAAIAAABIACAAIAAAAIAGAAIABACIAAABIABAAIAAABIABAAIAAABIABAAIAAAAIABAAIABABIAAACIABAAIAAADIAEAAIAAgBIABAAIAAgBIABAAIAAgBIABABIAAABIAAAAIAAABIAAAAIAAABIABAAIAAACIADAAIAAgBIAAgBIACAAIAAgBIAAgBIAAgCIgBAAIAAgCIgBAAIAAgBIgEAAIAAAAIgBAAIAAgBIgCAAIAAgBIABAAIAAgBIgBAAIAAgCIABAAIAAAAIgBAAIgBgBIAAgDIABgBIADAAIAAgBIAAAAIAAgBIABAAIAAgBIACgBIABAAIAAABIAAAAIAAABIACAAIAAABIAAAAIAAACIAEAAIABgBIABAAIAAgBIABAAIAAgBIADAAIAAgBIABAAIAAgBIABAAIAAABIACAAIAAADIABAAIAAACIgBAAIAAABIABAAIAAABIABAAIAAgCIABgBIACAAIABgBIABAAIgBgBIABgBIAAgBIABABIACAAIAAABIADAAIAAgBIgBAAIAAgBIABAAIABgBIAAABIABAAIAAgBIABAAIAAgCIgBAAIAAgBIABAAIAAgBIACAAIABAAIAFAAIAAAAIABAAIAAAAIACAAIABgBIAFAAIAAABIADAAIAAAAIABAAIAAABIABAAIAAABIABAAIAAACIABgBIAAACIgCAAIAAABIABABIAAACIgBABIABAAIAAABIgBAAIAAABIADAAIAAABIADAAIABAAIAFAAIAAAAIACAAIACAAIACAAIAAADIABAAIAAACIAAAAIACAAIAAACIgBAAIAAABIgBAAIAAACIABAAIAAACIABAAIAAACIACAAIAAABIABAAIAAABIgBAAIAAABIgCAAIAAABIABABIAAAEIABAAIABAAIABAAIAAAAIABAAIAAAAIAJAAIAAABIABAAIAAABIABABIABAAIAAABIAAAAIABABIABAAIAAABIgBAAIAAABIABAAIAAABIADAAIAAABIACAAIgBABIAAADIgBAAIAAABIgBAAIAAACIgBAAIAAACIgBAAIAAABIgBAAIAAABIABAAIABABIABAAIAAACIgCAAIgBABIgBAAIAAgBIgBAAIgBABIAAABIABAAIAAABIABAAIAAABIABAAIgBABIgCAAIAAADIABAAIAAABIgCAAIAAABIgDAAIACgBIgCAAIAAgBIgBAAIAAgBIgKAAIAAgCIgBAAIgBgBIAAgBIgDAAIAAABIgCAAIAAgBIgCAAIAAABIgCAAIgBgBIgBAAIAAgBIgBAAIAAgBIgBAAIgBgBIAAgBIgBAAIAAACIgBAAIAAABIgCAAIAAABIgBAAIgBgBIgEAAIAAgBIgBAAIAAgDIgBAAIAAABIgBAAIgBgBIgBAAIAAABIgBAAIAAgBIgCAAIAAgBIgBAAIAAgBIgCAAIAAAAIgBAAIAAgCIgBAAIAAgBIgCAAIAAAHIgDAAIAAABIAAAAIAAAEIAAAAIAAABIgBAAIAAABIgBAAIAAABIgFAAIAAAEIgBAAIAAABgAgeH8gAB9FcIAAAAIgBAAIAAgDIgCAAIAAgDIgBAAIAAgBIgBAAIAAgBIgCAAIAAgCIABAAIAAgCIgBAAIAAABIgCAAIAAABIgCAAIAAABIgBAAIAAABIgBAAIAAABIgCAAIAAACIgCAAIAAgBIgBAAIAAgBIgBgBIgDAAIAAgCIgCAAIAAgBIgDAAIAAgBIABAAIAAgBIgBAAIAAgBIgBAAIAAgBIgFAAIAAgDIAAAAIAAAEIgBAAIAAgBIgCAAIAAACIABAAIAAADIgBAAIgBgBIgDAAIAAgBIgBAAIAAAAIgBAAIgBgBIgBAAIAAgBIgBAAIAAgBIgBAAIAAADIgBAAIAAAAIgBAAIgBABIACAAIAAABIADAAIAAABIABAAIABABIABAAIAAADIgCAAIAAgBIgCAAIAAgBIgBAAIgBgBIgGAAIAAgCIgBAAIAAgBIgEAAIAAgBIAAAAIAAAAIgBAAIAAAAIgHAAIAAAAIgBAAIAAAAIgBAAIAAABIgBABIAAgBIgDAAIAAgBIgBAAIgCgBIAAgBIgBAAIAAgBIAAgBIgBAAIAAgCIgBAAIgBAAIAAgBIgCAAIAAgBIgDgDIgBAAIAAgBIgCAAIAAgBIgCAAIAAgBIgBAAIAAgBIgBAAIAAgBIgDAAIAAgBIgCAAIAAgBIgBAAIgBgBIABgCIgBgBIAAgCIgEAAIAAAAIgEAAIAAgBIgCAAIAAgBIgDAAIAAgBIgBgBIAAAAIAAgCIgBgBIgBAAIAAgCIgBAAIAAgBIgCAAIAAgBIgBAAIAAgBIgBAAIAAgBIgCAAIgBAAIgBAAIAAgBIgBAAIAAgBIgBAAIAAABIgBAAIAAgBIgCAAIAAgBIACAAIAAgCIgCAAIAAAAIAFAAIAAAAIAAAAIABACIABAAIAAABIACAAIAAABIABAAIAAABIABgBIAAABIABAAIAAgBIACAAIAAABIABAAIAAAAIAEAAIAAABIADAAIAAgBIABAAIAAAAIABAAIABAAIgBAAIAAgBIABAAIAAgBIABAAIAAgBIgDAAIABgCIADAAIAAAAIACAAIAAgBIgCAAIAAgBIABAAIAAgBIgDAAIAAgEIADAAIAAgBIACAAIAAgBIADAAIAAgBIgDAAIAAgDIABAAIAAgIIgBAAIABgBIAAgCIgBAAIAAgCIAEAAIgBgBIABAAIAAgCIABAAIAAgBIACgBIABAAIABAAIAAgBIABAAIAAABIAAAAIAAAAIACAAIAAAAIAEAAIAAAAIAGAAIAAABIADAAIAAABIAEAAIAAABIACAAIAAABIABAAIAAABIADAAIAAABIABAAIAAABIABAAIgBABIACAAIAAABIAGAAIABABIAAADIADAAIAAgBIABAAIAAABIABAAIAAAAIABAAIAAACIADAAIAAABIACAAIAAADIABgBIAAABIABAAIAAAAIAAAAIAFACIAAgBIACAAIAAADIAAAAIAAABIgDAAIAAgBIgBAAIAAABIgCAAIgBABIAAACIADAAIAAABIACAAIAAABIABABIAAABIABAAIAAAAIAAAAIAAAAIABAAIAAACIABgCIABAAIAAACIACAAIAAABIAFAAIAAABIABAAIAAABIAAAAIAAACIAAAAIAAABIADAAIAAABIACAAIAAABIABAAIAAABIABACIAAABIAAAAIAAABIgBABIABAAIAAABIABAAIAAABIADAAIAAACIABABIAAABIABgBIACAAIABABIAHAAIAAABIABABIgBAAIABABIAAABIACAAIAAABIACAAIABABIACAAIAAABIACAAIAAABIABAAIAAABIAGAAIABgBIABAAIAAABIACAAIAAABIABAAIAAADIACAAIAAgDIACAAIAAABIABAAIAAADIAEAAIAAACIAAAAIAAABIAAAEIgBABIABAAIAAACIgBAAIAAABIgBgBIgBABIgCAAIAAABIgBAAIAAABIABAAIAAABIgBAAIAAACIABABIgBAAIAAABIgGAAIAAgBIgBAAIAAgBIgCAAIAAgBIgCABIgBAAIAAABIAAAAIAAgBIgBAAIAAgBIgBAAIAAABIgHAAIAAgBIgBAAIAAABIgBAAIAAABIgBAAIAAABIgBAAIAAAAgAhsEHIAAgBIgDAAIAAgCIgBAAIgBgCIAAAAIAAgDIgBAAIAAgFIgBgBIAAgJIABAAIAAAAIABAAIAAgBIAAAAIAAgCIABAAIAAgBIABAAIAAgBIACAAIAAgBIABAAIAAgBIADAAIAAgBIABAAIAAgBIADAAIAAgBIACAAIAAgBIABAAIAAgBIACAAIAAgBIgBAAIAAgCIABAAIAAgEIABAAIAAgBIABAAIAAgBIABAAIAAgCIgBgBIAAgBIADAAIAAgBIABAAIAAgDIACAAIAAgBIABAAIAAgBIABAAIAAgCIABAAIAAgBIgBAAIgCgDIAAAAIAAAAIgBgBIgBAAIAAABIgBAAIAAgBIgCAAIACgBIAAgBIABgBIABAAIABgBIAAgBIACAAIAAgBIgBAAIAAgDIABAAIABgBIAAgBIABAAIAAgBIADAAIAAgBIABAAIAAgBIABAAIABABIABAAIAAgBIAAAAIAAgCIAAgBIABAAIAAAAIABAAIAAgBIgBAAIAAgEIABgBIgBAAIAAgBIABAAIAAgBIgBAAIAAgCIgBAAIAAgBIABAAIAAgGIAEAAIAAgBIgDAAIAEAAIAAABIABAAIAAADIABAAIAAABIABABIAAACIgBAAIAAABIgBAAIAAAFIABAAIAAgBIABABIABAAIAAABIgBAAIAAACIgBAAIAAABIgBAAIAAABIAAACIAAACIgBAAIAAABIgBAAIAAABIgBAAIAAABIACAAIAAACIABAAIABACIABAAIAAgBIABABIAEAAIAAAGIgBAAIABABIAAACIABAAIgBABIAAABIgBAAIAAABIgBAAIAAAAIABABIAAACIgBAAIAAABIgBAAIgBABIgBAAIAAACIgCAAIAAACIgBAAIAAACIgBAAIAAABIgBAAIAAAAIgCAAIAAABIgBAAIAAACIgBAAIAAABIgBAAIAAgDIgBAAIAAADIgBAAIAAABIgBAAIAAgBIgCAAIAAACIgBAAIAAACIgBAAIAAABIgBAAIAAAEIgBABIAAAFIgBAAIAAAEIAAABIAAABIAAAAIACABIAAACIgBABIAAACIgDAAIgBABIgDAAIgBABIAAAAIAAABIgBAAIgBABIgBAAIAAABIgBAAIgBgBIAAABIABABIAAAAIgBAAIAAAAIgBACIgBAAIAAABIgDAAIgBABIAAAAIgBABgAgTB2IgCgBIgBAAIgBgBIgCAAIgBgCIgDAAIgBgBIgBAAIgBAAIgCAAIAAgBIAAABIgBgBIgFAAIgBgBIAAgCIgCAAIAAABIgCAAIAAgBIgBAAIAAABIgBAAIgBgBIgBAAIAAgCIgBAAIAAABIgCAAIAAABIAAAAIAAgCIgBAAIAAgBIgCgBIgDAAIgBgBIgCAAIAAgBIgDAAIgBgBIgCAAIgBgBIgBAAIgBAAIgCAAIgDgBIgBAAIAAgBIgCAAIAAgDIgCAAIABgBIAAAAIABgBIgBgBIAAgBIABAAIAAgBIgBAAIAAgBIgBAAIAAgDIgBgBIgCAAIAAgBIgBAAIAAgBIgBAAIAAgBIgBgBIAAgBIgCAAIAAgEIAAAAIAAAAIAAAAIAAgBIAAAAIAAgBIACAAIAAgBIgBAAIAAgBIgBABIAAgBIAAAAIAAgBIgBABIgCAAIAAgBIgEgDIAAAAIAAgBIgDAAIAAgBIgBAAIAAABIgCAAIAAgBIABAAIAAgBIgCAAIAAABIgFAAIAAgBIgEAAIgBAAIgCAAIgBgBIgEAAIAAgBIABgBIAAgDIABAAIAAgBIgBAAIAAAAIgBAAIAAgBIgBAAIAAgCIgBAAIAAgBIgBAAIAAABIgCAAIAAABIAAAAIAAABIgDAAIgCABIgFAAIAAAAIgBAAIAAABIgDAAIgBgBIgBABIAAgBIgBAAIgBABIgBAAIgBACIgDAAIAAgDIgCAAIAAABIAAAAIAAgBIgBAAIAAAAIABAAIAAgBIgCAAIAAgBIgBAAIAAgBIgBAAIAAgBIgBABIAAgBIgCgCIAAgBIgBgBIAAABIgBgBIgBgBIABAAIAAgDIABAAIAAAAIABAAIABAAIABABIAAgBIABAAIgBAAIAAgBIgCAAIAAgBIABAAIAAgBIABAAIAAgCIgBAAIAAgBIACAAIAAgFIgBgBIAAgCIABAAIAAgBIADAAIAAgCIABAAIAAABIABAAIADgCIADAAIAAAAIAAgBIABAAIABgBIABAAIAAgDIABAAIAAgBIABAAIABAAIAAgCIAFAAIAAABIAAAAIAAABIABAAIAAgBIABAAIAAABIADAAIAAgCIgBgBIAAgCIgCAAIAAgBIgBgBIAAABIgBAAIAAgCIAAgBIgBgBIgCgBIAAgBIgBgBIgBAAIAAgCIgBAAIAAgCIABAAIAAgBIgBAAIAAgBIgBAAIAAAAIgBAAIAAgBIgBAAIgBgBIgCAAIAAgBIgCAAIAAgBIgFAAIAAACIgCAAIAAABIgCAAIAAgCIgCAAIAAgBIgCAAIAAABIgBABIAAADIgBAAIAAgBIgBAAIAAAAIgCAAIgCgBIgCAAIAAgDIAAgBIgFAAIAAgBIABAAIAAgEIABAAIAAgCIABAAIgBgBIgBAAIAAgCIgBAAIAAACIgBAAIAAgCIgBAAIAAgBIgCAAIAAgBIABAAIAAgCIACAAIgBgBIAAgBIABAAIAAgCIABAAIAAgCIAEAAIAAABIABgBIAAAAIAAABIAHAAIABgBIgCAAIAAgCIABAAIAAgBIAAAAIAAgBIABAAIAAABIABAAIAAgBIABAAIAAABIABgBIABABIAAgBIACAAIABABIAAgBIABAAIAAgBIgBAAIABgBIACAAIAAgCIgBAAIABgBIAAABIACAAIAAgBIACAAIAAgBIgCAAIAAgCIACAAIAAgBIgDAAIAAgBIADAAIAAgBIACAAIAAgBIABAAIgBgBIgBAAIAAgBIACAAIAAgBIgBAAIAAgCIABAAIAAgCIgBgBIABAAIgBgCIABgBIAAgBIAAAAIAAAAIgBAAIAAgCIABABIABAAIAAgCIABgBIABAAIAAgCIgBAAIAAgBIABAAIAAgCIABAAIAAgBIgBAAIABgBIgBAAIABAAIAAgBIABAAIAAgEIABAAIAAgBIgBAAIAAgBIgCAAIAAgDIACAAIAAABIABAAIAAgBIABABIAAgCIADAAIAAgBIABgCIAAACIABAAIABABIADAAIAAgBIACAAIAAgBIABAAIABgBIABAAIAAgCIABAAIAAgBIgBAAIAAgBIgBAAIAAAAIgBAAIAAgBIABgBIgBAAIAAgDIAEAAIAAACIACAAIAAABIABAAIAAgIIABAAIAAgBIABAAIAAgCIgBAAIAAgFIgBAAIAAgDIABAAIAAgCIABgBIAAgCIgGAAIAAgBIABgBIAAgBIgCgCIgBAAIAAgBIgDAAIgBABIgJAAIgDgDIgBgBIAAgBIgBAAIgBAAIAAgBIABAAIAAgCIgBAAIAAgDIgBABIAAgBIAAAAIAAgCIAEAAIAAABIABAAIAAgBIABABIADAAIAAgCIgBAAIAAgBIgDAAIAAABIgDAAIAAgBIgBgBIgBAAIAAgBIABAAIAAgFIABAAIAAABIACAAIABABIABAAIAAgBIABAAIAAgBIACAAIAAgBIABAAIAAAAIABAAIAAgCIAAAAIAAgBIABAAIAAgCIABAAIAAgBIAEAAIAAgBIgBAAIAAAAIgBAAIAAAAIgEAAIAAAAIAAgCIgBAAIAAgCIABAAIAAgBIAAgBIAAgCIABAAIABABIACAAIAAABIABAAIAAACIADAAIAAgBIAHAAIgBgBIAAgDIgBAAIAAgBIgBAAIAAgBIABAAIAAAAIABAAIAAgBIgBAAIAAgBIgBABIAAgBIgBAAIAAgBIgCAAIAAABIgHAAIAAgBIgCAAIAAgDIACAAIAAgBIADAAIAAAAIABAAIAAgBIABAAIAAABIAEAAIAAgBIABAAIAAABIABAAIABgBIACAAIAAgBIACAAIAAgBIAAAAIAAgBIACAAIAAgBIAKAAIAAABIABAAIAAACIACAAIAAABIABAAIAAgBIABAAIAAABIABAAIAAACIAGAAIAAABIgBAAIAAACIABAAIABgCIAAgCIABAAIABgBIAAgBIgBAAIAAgBIACAAIABgBIABAAIABABIABAAIAAACIgBABIABAAIAAABIABAAIAAABIABAAIAAACIABAAIAAABIABAAIAAACIAAAAIAAAAIABAAIAAABIABABIAAACIACABIAAABIABACIABABIAAACIABAAIAAACIAAAAIAAACIABADIABAAIABABIAAACIABAAIAAABIABAAIgBABIAAABIABABIAAACIABAAIAAACIABAAIAAAAIABABIAAABIABAAIAAADIABAAIAAABIABAAIAAACIAAABIAAACIABAAIAAACIABAAIAAACIACAAIAAACIABAAIAAABIABABIABAEIAAAAIAAABIABABIAAAAIABABIABACIABACIAAABIABAAIAAABIABABIAAABIABABIAAABIABAAIAAAAIABABIAAABIABACIAAABIABAAIAAABIABABIAAAAIAAABIABAAIAAABIACAAIAAACIABAAIAAAFIABAAIAAACIABAAIAAACIAAAAIAAACIABABIAAABIABABIAAAAIABAAIAAABIABAAIgBABIAAADIABAAIAAADIABAAIAAABIABABIAAABIABAAIAAAAIgBAAIAAABIgBAAIAAADIgBAAIAAABIABAAIAAABIABAAIAAAFIABAAIAAACIABABIAAABIABABIAAABIABAAIAAACIABAAIAAADIABABIAAABIAAAAIAAABIABAAIAAABIACABIAAABIABAAIAAABIABABIAAABIABAAIAAABIAAAAIAAACIACABIAAABIABAAIAAAAIADAEIAAABIgEAAIAAABIgCAAIAAgBIAAAAIgBABIAAACIgEAAIgBABIAAABIgBAAIAAACIgDAAIAAABIgBAAIAAABIABAAIAAABIABAAIAAABIABAAIAAABIgBAAIAAABIgCAAIAAABIgDAAIAAACIgDAAIAAACIgBAAIAAABIAFAAIAAABIADAAIABAAIACAAIAAABIABAAIAAADIABAAIAAABIACAAIAAgBIACAAIAAABIABAAIAAADIABgBIABAAIAAABIgBABIAAACIgBAAIAAAAIgBAAIAAAGIgBAAIAAABIgBAAIAAgBIgFAAIAAABIABAAIABABIAAACIgFAAIAAACIABABIAAABIACAAIAAACIgBABIAAABIABAAIgBAAIAAADIABAAIAAgCIABAAIAAAEIABAAIAAABIAEAAIAAADIACAAIAAABIACAAIAAACIABAAIAAAEIgBAAIAAACIABAAIAAADIABABIgCAAIAAACIgCACIAAgBIgBAAIAAAAIgBAAIAAAAIABAAIAAABIABABIAAAAIAAABIAAABIACAAIAAABIABABIABgBIAAABIABAAIAAACIABABIgBABIACAAIAAgBIABAAIAAgBIADAAIAAABIABAAIAAACIABAAIAAABIACAAIAAAJIgCABIgCAAIAAABIgBAAIAAABIgCAAIAAACIABAAIAAACIgBAAIAAABIgCAAIAAAEIACAAIAAABIABAAIAAABIgCAAIAAACIgCAAIAAACIgBAAIAAACIgBABIAAAFIgBAAIAAABIgDAAIAAACIgBAAIAAACgAgRBCgAlak/IAAgCIABgBIAAgCIgDAAIAAgBIAAgIIABAAIAAgGIABAAIAAgGIABgBIAAgHIACgBIAAgDIgLAAIAAABIgMAAIAAAAIgCAAIAAgCIgBAAIAAgBIgEAAIAAgCIACAAIAAgBIgBAAIAAgEIgBAAIAAgBIABAAIAAgCIgBgCIAAgCIgCAAIAAgBIgBAAIAAAAIgBAAIABAAIgBAAIAAgBIgBAAIAAgBIgBABIgDAAIAAADIgCAAIgBABIAAACIgBAAIgCADIgBAAIgBABIgBgBIgDAAIAAAFIgDAAIAAABIgCAAIAAABIgBAAIgCACIgBAAIAAgBIgBgBIAAgDIgBgBIAAgCIgBgBIAAgBIgBAAIAAgBIgBAAIAAABIgCAAIgBABIgBAAIAAgCIABgBIAAgCIABAAIAAgCIgBgBIAAAAIgBAAIAAgBIABgBIAAgBIABAAIAAgBIABAAIAAgBIgBAAIAAgBIADAAIACACIACAAIAAgBIABAAIAAgBIAAAAIAAgCIAAgBIAAgBIgBAAIgBABIgDAAIAAgBIgFAAIAAgCIABAAIAAgBIABgCIADAAIABACIADAAIABABIAAAAIABABIABAAIABABIAAgDIgBgCIAAgBIgCgCIAAAAIAAAAIAAgBIgFAAIgBABIAAAAIgBAAIAAABIgBABIgBAAIAAABIgEAAIgCgBIgCAAIAAgBIgBAAIAAgBIAAAAIAAgCIgBgBIAAgCIABgBIAFAAIAAABIABAAIABABIABAAIAAgBIABAAIABgBIABgBIABAAIAAgBIACgBIADAAIAAABIABABIAAABIACAAIAAABIABAAIACABIACAAIABABIABAAIABgBIABAAIABgBIAAgBIgCgCIgBgBIAAgBIgBAAIABAAIAAgBIgBgBIABAAIAAgBIABgCIAAACIABACIABAAIAAgBIABABIAAgBIABAAIAAgBIABAAIAAgEIABgBIAAAAIABAAIAAgBIABgBIAAgDIAAAAIABgBIAAgCIgBgBIAAgBIACgBIADAAIAAgCIgCAAIgBgCIAAgEIAEAAIAAgBIgBAAIAAgDIACAAIABgBIAAgBIAAAAIAAgBIAAAAIAAgBIgBAAIAAgBIgBAAIgBAAIgDAAIAAgBIADAAIAAgFIABAAIAAgBIACAAIAAgBIAAAAIAAAAIABgBIABAAIABgBIAPgKIACAAIABgBIABAAIABgCIABAAIAAgBIABgCIABgBIgCAAIAAgCIgCAAIgBgBIABAAIAAgBIgCAAIgBgBIADAAIACgDIABgBIACgBIgCAAIgEABIgCAAIAAgBIgBABIgDAAIAAAAIgCAAIAAgBIACgBIAAgBIABAAIAAgDIgEAAIAAABIgBgBIgBABIAAgBIgGAAIAAgBIABAAIAAgBIgBAAIABgBIAAAAIABgBIAAgBIABAAIAAgBIgCAAIAAgBIgBgBIgBAAIgBABIgCACIgDAAIAAgCIACAAIAAgBIgBAAIgBgBIgCAAIAAgBIgBAAIAAgBIgBgBIgBgBIgBAAIgBABIgBAAIgBgBIgBABIAAAAIABABIgCAAIAAABIgBAAIgBABIAAgCIgBAAIAAgBIgBAAIAAgBIgDAAIAAgBIgEAAIAAgDIgBgBIgEAAIAAgDIgDAAIAAgCIgFAAIAAgBIgDAAIAAgCIgCAAIgBABIAAgBIgBAAIAAgDIgBAAIAAgBIABAAIAAgDIgBABIgbAAIAAgEIABAAIAAgDIAAAAIAAgBIABgCIADAAIAAgBIAEAAIAAgBIACAAIAAgBIAAAAIAAABIABAAIAAABIABAAIAAABIABAAIAAABIADAAIAAgBIABAAIAAgBIACAAIgBABIABAAIAAABIABAAIAAABIABgBIAAABIACAAIAAABIACAAIAAgBIABAAIAAABIADAAIAAgCIACAAIAAABIACAAIAAgBIACAAIAAABIABAAIAAgBIABAAIAAgBIAFAAIAAgBIABAAIAAgBIADAAIAAgBIAAAAIAAgBIAAgBIAAAAIAAgBIABAAIAAAAIACAAIACAAIAAAAIABAAIAAACIABAAIAAgCIABAAIABAAIABAAIADAAIABAAIgBABIAAADIACAAIABgBIABAAIABgBIAAgBIAAgBIABgBIABAAIABgBIACABIAAABIABAAIgBABIAAADIACAAIABgBIAAAAIAAABIABAAIAAABIABABIAAABIABAAIAAABIABAAIAAgBIADgDIAAgBIABgBIAAgBIABgBIABAAIAAABIAAAGIAAAAIAAABIgBAAIAAABIABABIADAAIAAgBIAEgBIABgCIAAAAIAAgBIABABIABABIAAABIgCAAIAAABIABABIADAAIABgBIACgBIACAAIABABIAAAAIABAAIAAgEIABgBIAAgCIgBAAIAAgBIgBAAIgBgBIAAgCIABgBIAAAAIAAgCIACAAIAAgEIgBAAIAAgBIgBAAIAAgCIAFAAIABACIABAAIABgBIAAgDIgBAAIAAgBIgBAAIgBgCIAAgCIgCAAIAAgBIACAAIgCgBIAAgCIACgBIgEgBIgDAAIAAgCIABAAIAAgEIABgDIAAgDIgGgBIADgYIAAgDIACABIAEAAIACgEIABgHIgDAAIAAgCIACgCIAAgEIABABIAAgBIgBgBIABAAIAAgGIABgCIABABIABgIIAEAEIAAAFIgBAEIAEAAIAAADIACAAIAAADIAAAFIAAADIABACIAEAAIAAgBIADAAIAAgBIADAAIgBABIABAAIAAABIACAAIgBgBIAAgGIABgDIAAgCIABgJIAMABIABAAIAHgBIABgBIAGgDIAAgDIABgBIAAgEIABgCIAAgBIABAAIABABIADAAIAAgDIAMACIAAACIgBACIAAAEIgCACIAAAGIACABIAAADIABACIAAADIABABIAAACIABAGIAAABIAAAAIAAAEIABABIAAAEIACAAIAAABIABAAIABABIAAgBIABgBIACAAIAAADIABAAIAAgBIABgBIABgCIAAAAIAAgBIAAAAIAAgCIAAgBIABABIABAAIAAgCIACAAIAAgBIADAAIAAABIAAACIAAABIgBAAIAAABIABAAIABgBIAAgFIABABIAAAEIgBABIABAAIABgBIAAgBIABgBIACAAIAAADIgBAAIAAABIAEAAIAAAAIACgCIAAAAIABgBIABABIAAACIgBAAIgBABIAAABIABAAIABgBIAAgBIACAAIABgBIABAAIAAABIABAAIAAABIAAACIAAADIAAACIAAABIABAAIAAAEIgBABIAAABIABAAIAAAEIABABIAAABIAEAAIAAABIABAAIAAADIABAAIABgBIABAAIAAABIABAAIAAgEIAAAAIAAADIABAAIAAACIABAAIAAABIADABIAAAKIABABIAAAEIABABIgCAAIAAACIABAAIAAABIgBABIAAABIABAAIAAAGIABAAIAAADIAAACIAAACIABACIAAAEIABAAIAAAEIABAAIAAADIABAAIAAAEIABABIAAACIABAAIAAACIABABIAAACIABABIAAACIABAAIAAACIABAAIAAACIABACIAAABIAAABIAAABIABAAIAAABIABAAIAAABIACABIAAABIABAAIAAABIABABIAAABIABAAIAAABIAAABIAAAAIABAAIAAABIgBAAIAAABIgBAAIAAAQIABACIAAAFIAAACIAAACIAAAAIAAABIgCAAIgDACIgBAAIgBABIgIAAIgBABIAAACIgBAAIAAgBIgCAAIAAgBIgBAAIgHADIgEADIAAAFIABAAIAAACIgBABIAAABIABABIgFAAIAAABIgBAAIAAABIgBAAIAAACIgBAAIAAABIABAAIAAAAIgEAAIgBAAIgEAAIAAgBIgBAAIAAgBIABgBIAAgBIABAAIAAgBIABAAIAAgDIABAAIAAgBIAAAAIABgBIgBAAIAAAAIABAAIAAgCIgBAAIAAgBIgCAAIgCgCIABACIgBABIAAgBIgFAAIgBgCIAAACIgBAAIAAADIAAAAIAAAAIgBAAIAAAGIABAAIAAADIgBAAIgBABIgBAAIgCAAIgCAAIgBABIAAABIgCAAIAAAEIgBAAIAAABIgBABIAAgCIgDAAIAAABIABAAIAAAEIABAAIAAACIgCAAIAAABIgCAAIAAABIgBAAIAAABIgBAAIAAABIgCAAIAAgBIgCAAIAAgBIgCAAIAAgBIAAAAIAAABIgBAAIAAABIgCAAIAAABIgBAAIAAACIABAAIAAABIABAAIAAAEIgCAAIAAABIgBABIAAgBIgBAAIAAABIgBAAIAAAAIgBAAIAAgBIgBAAIAAABIgBAAIgBAAIAAABIAAAAIAAABIAAAAIAAABIABAAIAAABIgBAAIAAABIACAAIAAABIABAAIAAACIgCAAIAAACIgBAAIAAAAIgBAAIAAABIgEAAIAAABIgBAAIAAADIABAAIAAACIgBAAIAAABIADAAIAAACIACAAIAAABIABAAIAAADIABAAIAAABIABAAIAAABIgCAAIAAABIABAAIAAACIABAAIAAABIACAAIAAABIgBAAIABACIAAABIABAAIAAABIgBAAIAAABIABAAIAAAAIgBAAIgBAAIgBAAIAAABIgBAAIAAABIgCAAIAAABIgFAAIAAABIgBAAIAAABIABAAIAAABIgBAAIAAABIAAAAIAAABIAAAAIAAACIABAAIAAAHIABAAIAAABIgBAAIAAABIgBAAIAAACIgBAAIAAgBIgBABIgBAAIAAACIgBAAIAAACIgBAAIAAADIABAAIgBAAIAAACIABAAIAAABIACAAIAAACIgEAAIAAABIgCAAIAAABIAEAAIAAABIABAAIAAABIgCAAIAAACIgBAAIAAABIgBAAIAAABIgBAAIAAABIgBgBIgCAAIgBgBIgGAAIAAgBIgBAAIAAgBIgDAAIAAABIgBAAIAAACIgCAAIgBgBIgCAAIAAADIgEAAIAAABIgFAAIAAABIAAAAIAAgBIgCAAIAAABIgEAAIAAABIgEAAIAAAAIgFAAIAAABgAk4lFIAAgBIABAAIAAABgAk3lGgAjimwIAAgBIACAAIAAABg");
	this.shape_2.setTransform(-0.1,0.2);

	this.timeline.addTween(cjs.Tween.get(this.shape_2).wait(1));

	// Capa_4
	this.shape_3 = new cjs.Shape();
	this.shape_3.graphics.f().s("#65653D").ss(0.5,1,1).p("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");

	this.timeline.addTween(cjs.Tween.get(this.shape_3).wait(1));

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = new cjs.Rectangle(-59.5,-78,119,156.1);


(lib.graph_09 = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// Capa_1
	this.shape = new cjs.Shape();
	this.shape.graphics.f().s("#00CCFF").ss(0.2,0,0,22.9).p("AsVJJIYrAAIAAyRI4rAAg");

	this.timeline.addTween(cjs.Tween.get(this.shape).wait(1));

	// Capa_2
	this.shape_1 = new cjs.Shape();
	this.shape_1.graphics.f("#FFFF00").s().p("AiPGVIgBgBIgBABIAAgBIgBgBIAAgBIABAAIAAgBIgBAAIAAgBIgBAAIAAgBIACAAIAAABIACAAIAAACIABABIABAAIAAABIgBAAIAAABgAi/FtIAAgBIABgBIAAgBIgCAAIAAgBIgBAAIAAgBIABAAIAAgEIgBAAIAAgBIABAAIAAgBIgCAAIAAgBIACAAIAAgBIgBAAIAAgBIgBAAIABgBIgBgBIACAAIAAgBIACAAIAAABIABAAIABABIABAAIAAABIACAAIABABIABAAIAAAGIABAAIgBABIgEAAIAAABIgBAAIAAABIgBAAIABABIABAAIAAABIgCACgAjZFhIgBgBIgBAAIAAgBIAEAAIAAgBIgBgBIAAgCIACAAIAAgBIABABIABAAIABABIABAAIABABIAAAAIAAABIAAAAIAAABIgBAAIABABIgEAAIAAABgAjPFfIgBgBIAAgBIgBAAIAAgBIAAAAIAAgBIAAgBIAAAAIAAgBIgBAAIAAgBIgBAAIAAgBIgBAAIABgBIgBAAIAAgCIACAAIAAABIABAAIAAADIAAAAIAAABIABAAIAAADIABAAIAAABIABAAIABgBIACAAIAAgBIAIAAIAAgBIADAAIgBACIgKAAIAAABIgCAAIgBABIAAABgAjRFdgAk2FIIgBgBIgDAAIgBgBIgCAAIAAgCIAAgBIAEAAIAAABIADAAIAAABIABAAIAAADgAkvFAIgBgBIgBAAIAAgBIgIAAIAAACIgBgBIgCAAIAAABIgBAAIAAgDIAAAAIAAAAIABAAIAAgBIADAAIAAABIACAAIAAgBIABAAIAAgGIgBAAIAAgCIgBAAIAAgBIgBAAIAAgBIgBAAIAAgBIgBAAIAAgBIgCAAIAAgBIgBAAIAAgBIgDAAIAAACIgBAAIAAACIgCAAIAAgDIABAAIAAgBIgBAAIABgBIAAgCIgBAAIgBAAIgDAAIAAgBIgEAAIAAABIgDAAIAAAAIAAAAIgBABIAAgDIgBAAIAAgBIACAAIAAgBIABAAIACACIACAAIAAgBIABAAIAAgBIABAAIAAgBIABgBIADAAIAAgBIAFAAIgBABIABAAIACABIABAAIAAgBIACgBIAAACIgBAAIAAABIgBAAIABABIACABIgBAAIAAABIgBABIABAAIAAAAIABAAIAAABIABgBIABAAIAAACIABAAIABABIABAAIAAABIgBAAIAAABIABAAIABgBIABAAIAAABIAEAAIAAABIABAAIAAAFIgBAAIAAABIgBAAIABABIgBAAIAAACIABAAIAAACIACAAIAAABIgBAAIAAAAIgCAAIAAABIABAAIAAACgAk1E7IABABIABAAIAAgBIABAAIAAgGIgCAAIAAgBIgBAAIAAABIgBgBIABgBIgBAAIAAgCIgBAAIABgBIgBAAIAAgBIgCgCIAAABIgDAAIAAABIACAAIAAABIABAAIAAABIABAAIAAABIABAAIAAABIABABIAAABIABABIAAACIABAAIAAABIABAAIgBABIgBAAgAjME/IAAgBIgBAAIAAgBIgBAAIAAgBIACAAIAAABIABAAIAAACgAkmE9IAAAAIgCAAIAAgBIgDAAIAAABIAAAAIAAgCIABAAIAAgCIABAAIAAgBIABABIABAAIABABIAAABIABAAIAAABIABAAIAAABIgBAAIAAAAgAi8E2IAAgDIgBgBIAEAAIAAADIgCAAIAAABgAk/EiIAAgBIABAAIAAgBIABAAIAAACgAjOEeIAAgBIgBAAIAAgBIABAAIAAgCIABgBIACAAIAAABIABAAIABgBIAAADIgBAAIgBABIgCAAIAAABgAlDEdIAAgCIABAAIAAACgAisEUIABAAIAAgCIgBAAIAAgBIABAAIAAgCIABAAIABgBIAAgBIABAAIAAABIABAAIgBABIABAAIAAABIgBAAIAAADIgBABIAAABIgCAAIgBABgAiSETIAAgBIABAAIAAgDIgEAAIAAgDIgCAAIAAgBIgBAAIAAgBIgCAAIAAgBIgCAAIAAADIgDAAIAAgCIgCAAIAAgBIABgBIACAAIAAgBIABAAIAAgBIACAAIgBgBIAAgBIAAAAIAAgCIgBAAIAAABIgBAAIAAgBIgBAAIAAgCIABAAIABgBIABAAIAAABIABAAIAAgBIABAAIAAgBIAAAAIAAgCIABAAIAAgCIgCAAIAAgBIAEAAIABgBIgCAAIABgBIAAgCIAEAAIgBABIAAABIABAAIAAABIABAAIAAABIABAAIABABIAAABIABAAIAAABIABAAIAAgBIACAAIAAABIABAAIAAABIABAAIABABIgBAAIAAABIABAAIAAABIABAAIAAABIACAAIAAABIgBAAIAAACIABAAIAAABIgBAAIAAABIABAAIABgBIAAgBIABAAIAAACIgCAAIABABIACAAIAAAEIgDAAIAAABIgBAAIAAgBIgBAAIAAADIgCAAIgBABIAAgCIgBAAIgBgBIgBABIAAACIABABIAAABIgBAAIAAABIgCAAIAAABgAiEEDIAAgCIABABIAAABgAiCEAIAAgCIABAAIAAACgAigEAIAAgBIgBAAIgBgBIABAAIAAgBIABABIABAAIAAACgAiAD/IgBgBIAAgBIABAAIAAgBIABAAIAAgBIABAAIAAACIgBAAIAAACgAiBD+gAicD+IAAgBIgBAAIABgBIAAgBIABAAIAAADgAiLD7IAAgBIABAAIAAABgAiaD1IAAAAIAAAAIAAgCIgBAAIAAABIgCAAIAAgBIABAAIAAgBIgBAAIAAgCIABAAIgBgBIAAgBIABAAIAAgBIABgBIAAACIABAAIAAgBIABAAIAAgBIABABIAAABIgBAAIAAABIACAAIAAACIgBAAIAAABIgBAAIAAABIgBAAIAAABIACAAIAAABIgBAAIAAAAgAhwDxIAAgBIgBAAIAAgDIABAAIAAgBIABAAIAAgBIABAAIAAACIACAAIAAgBIABAAIAAABIABAAIAAABIgBAAIAAABIgBAAIAAACgAiNDjIAAgBIgCAAIAAgCIADAAIAAADgAhnDhIAAgBIgCgCIAAgBIABAAIAAgBIABAAIAAABIABAAIAAgBIABAAIAAABIABABIAAAAIAAABIAAAAIgBABIgBAAIAAABgAhhDZIAAgBIgBgBIABAAIAAgCIACAAIAAABIACAAIAAACIgCAAIAAABgAIxCYIAAgBIgDAAIAAgBIgCAAIAAgBIgBAAIABgBIABAAIgBgBIAFAAIAAgBIABAAIAAgBIgBAAIAAgBIgBgBIAAgCIgBgBIAAgBIABAAIAAABIABAAIAAgEIgBABIgBAAIABgBIgBAAIAAAAIgCAAIAAABIgCAAIgBABIAAgCIgEAAIAAAAIgFAAIAAgBIABgBIABAAIAAABIACAAIgBgBIABAAIAAgCIADAAIAAgBIABAAIAAgBIABAAIAAgCIADAAIAAgBIABAAIAAgBIACAAIAAACIABAAIABgBIAAgCIgDAAIAAgBIABAAIAAgBIABAAIAAABIACAAIAAgBIABAAIAAgBIADAAIAAgBIgBAAIABgBIAAgBIABAAIAAgBIABAAIAAAAIABAAIABAAIACAAIAAAAIABAAIAAABIgBAAIAAAFIACAAIAAgBIABAAIAAgBIACAAIAAgCIACgCIABAAIAAABIABAAIAAABIABABIgBAAIAAABIABAAIAAACIACAAIAAABIABAAIABgBIgBgBIAAAAIAAgDIAAAAIAAgBIABABIAAgCIADAAIAAAAIACAAIAAABIgBAAIAAABIABAAIAAACIACAAIAAABIgCAAIAAABIgBAAIAAgBIgBABIgBAAIAAABIABABIgBABIgBAAIAAACIgBABIABABIgCAAIABABIABAAIAAAEIABAAIAAAAIABAAIAAABIgFAAIgBABIgCABIABAAIAAACIgBABIgBgBIAAgCIgCAAIAAACIgBAAIABABIgBAAIABABIgBAAIAAACIgDAAIAAACIgDAAIAAABIgBAAIAAgBIgBAAIAAgBIgBAAIAAgDIgBAAIAAABIgBAAIAAABIAAAAIgBABIgBAAIAAgBIgBAAIAAABIgBAAIAAACIACACIAAABIgBAAIAAABgAJKCWIgBgBIgCAAIAAgCIgBAAIAAgBIgBAAIABgBIAAgCIADAAIAAACIABAAIAAABIAAAAIAAAEgAIlCPIAAgBIACAAIgBABgAIICPIAAgBIABAAIAAgBIABAAIAAACgAICCPIABgBIAAgDIgBAAIAAgBIAFAAIAAACIABABIgBAAIAAABIgCAAIgBABgAIcCNIAAgBIgBAAIAAgBIABAAIAAgBIABAAIAAgBIACAAIAAABIgBAAIAAABIABAAIAAACgAIXCMIAAgCIABAAIAAACgAJOCKIAAgBIABAAIAAgBIADAAIAAAAIABAAIAAABIgDAAIAAABgAIeCIIAAAAIABAAIAAgBIABAAIAAABgAJSCIIABgBIABAAIAAABgAJSCIgAJkB7IAAgBIABAAIAAABgAJcB7IAAgBIAAAAIAAgBIACAAIAAABIgBAAIAAABgAJlB6IAAgBIABAAIAAgBIgBAAIAAgCIAEAAIAAAAIgBAAIABABIAAABIABgBIAAABIABAAIAAABIgEAAIAAABgAJlB6gAI5B2IAAgCIACAAIAAABIgBAAIAAABgAI7B0IAAgBIABAAIAAgBIABAAIAAACgAJQBzIAAgCIABABIACAAIABgBIAAABIABAAIAAABgAJcBsIAAgBIAAAAIAAABIgBAAIAAgBIgBgBIADAAIAAACgAJCBsIAAgBIgDAAIAAgBIgBgBIABAAIAAgBIACAAIAAABIACAAIAAgBIABAAIAAgBIABAAIAAABIABAAIAAABIABABIgDAAIAAABIgBAAIAAABgAJXBhIAAgBIgBAAIAAgBIABAAIAAgBIAEAAIAAACIgCAAIgBABgAJKBYIAAgGIABAAIAAABIABAAIAAADIgBAAIAAACgAERBFIAAgBIgBAAIAAABIgCAAIAAgCIgBAAIAAgBIABgBIABAAIAAABIACAAIAAABIACAAIAAACgAD9BCIAAgBIgBAAIAAABIgBAAIAAgBIgCAAIAAgBIgBgBIABgBIABAAIAAABIACAAIAAgBIgDgBIAAgEIABABIABAAIAAACIAEAAIABgBIAAgCIACAAIAAgBIgBAAIAAgBIADAAIAAgCIAAAAIAAgBIABAAIAAgBIgBAAIAAgBIgDAAIAAgDIgDAAIABgBIgCAAIAAAAIgCAAIABgBIAAgDIABAAIAAABIABAAIAAACIABAAIAEABIAAAAIABAAIAAgCIACAAIAAgBIACAAIABABIAAABIABABIABAAIAAABIABAAIAAABIgCAAIABABIABAAIAAADIgBABIAAABIABAAIAAABIgBAAIAAACIgCAAIAAACIgBAAIgCgCIgBAAIgBgBIAAAAIAAADIAAABIAAACIAAgBIAAABIgBAAIAAACIgBAAIAAAAIABAAIAAABIgBAAIAAABgAEOA/IAAgBIACAAIAAABgAEPA9IgBgBIgBAAIAAgDIABABIAAABIACAAIAAABIABABgAEOA6IAAgBIABABgAEOA6gAEQAzIAAgBIgBAAIAAgBIgBAAIAAACIgBAAIAAgEIABABIAAgBIABAAIAAABIABAAIAAACIABAAIABgBIAAACgAD4AtIAAgBIgBAAIAAgBIgBAAIAAABIgBAAIgBgBIAAgCIgBgBIgBAAIAAgBIABAAIAAgBIACAAIAAgBIABAAIAAABIACAAIAAABIABAAIAAAGgAEFAlIAAgBIgBAAIAAgBIAAAAIAAgBIADAAIAAACIABABgAEWAeIAAgBIAAAAIAAABIgCAAIAAgBIgBAAIgBgBIAAAAIADAAIAAgBIABAAIAAABIAAAAIAAgBIACAAIAAABIgBAAIAAACgAEQAcIAAgBIABAAIABABgAD1AXIgBgBIAAgBIABAAIAAgCIABAAIAAACIABABIAAABgABjAQIABAAIAAgEIABAAIAAgBIABABIAAgBIABAAIAAABIABAAIAAABIABABIAAABIgBABIAAgBIgBAAIAAABIgBAAIgBABIgBAAIgBABgAB/AIIAAgBIgBAAIgBgBIACAAIAAgBIABAAIABgBIABAAIAAAEgAB8AIIABgBIABAAIAAABgAB+AHgAA9ACIAAgCIACAAIAAABIgBAAIAAABgAB+gkIgCgBIgBgCIAAgBIgBgBIAAgBIgBAAIAAgBIgBAAIAAgBIABAAIAAgBIgDAAIABgBIgCAAIAAgBIABAAIAAgBIABABIABgBIAAgCIACAAIAAgBIgBAAIAAgBIgBAAIAAgDIABAAIAAgDIABAAIABgBIAAgBIABAAIABABIABAAIAAABIABAAIAAABIABAAIAAABIgBACIAAABIABAAIAAgBIABAAIAAABIABAAIAAADIACAAIAAABIgBAAIAAACIgBAAIAAABIgBAAIAAABIgCAAIAAABIABAAIAAABIgBAAIAAgBIgBAAIAAAHIABABgAB/glIAAgBIABAAIAAABgACAgmIAAgBIABABgACAgmgABJgpIgBgBIAAgBIgCAAIAAgBIACAAIAAABIABAAIAAABIABAAIAAgBIABAAIAAACgAA4gtIAAgBIgCAAIAAABIgCAAIAAgBIABgBIAAgBIACAAIAAABIACAAIABABIgBAAIAAABgAAGgxIAAABIgCAAIAAgBIgBABIAAgBIgBAAIAAgBIgBAAIgBABIAAgEIAAAAIAAgBIAAAAIABABIAAgDIADAAIAAgBIACAAIAAgBIABAAIAAgBIAAAAIAAADIAAAAIAAABIAAAAIAAABIAAAAIgBABIAAABIABAAIAAgBIABAAIAAgBIABABIAAABIgBABIgBAAIAAACIAAAAIAAABgACbg4IgBAAIAAgBIgBAAIAAgBIACAAIABABIABAAIAAABIgBAAIgBABgABig4IAAgBIgBAAIAAgBIABAAIAAgBIABAAIABABIgBAAIAAACgABPg4IAAgDIgDAAIABgBIAAgCIABAAIABABIAAgBIAAgBIAAAAIAAgBIABAAIAAACIACAAIAAABIACABIABAAIAAABIgBAAIAAABIgCAAIAAABIgBABgAAUg9IAAgBIgBAAIAAgBIgBAAIAAgBIgBgBIACAAIAAgBIABABIAEAAIgBABIABAAIAAABIACAAIABgBIAEAAIAAABIgBAAIgBABIgDAAIAAAAIgFAAIAAABgAgphCIgBAAIAAABIgBAAIAAgCIgCAAIABgBIADAAIAAABIABAAIAAABIgBABgAgzhEIAAgCIgBAAIAAgDIABAAIAAABIABAAIAAABIABAAIABgBIAAABIABAAIgBABIACAAIAAABIgBABgAgbhIIAAgBIgBAAIAAgBIAAAAIAAgCIAAAAIABgBIAAADIACAAIAAACgAABhMIgBAAIAAgBIAAAAIABgBIABAAIAAgCIACAAIAAAAIABAAIAAABIABABIgCAAIAAABIgCAAIAAACgAgFhLIAAgBIABAAIAAABgAgehLIAAgBIACAAIgBABgAgHhMIAAgDIABAAIABACIgBAAIAAABgAgbhNIAAgBIgBAAIAAgBIAAAAIAAgBIAAAAIAAAAIACAAIAAABIABAAIAAACgAg/hOIgBAAIAAABIAAAAIAAgCIgBAAIAAgBIgBAAIAAgCIABAAIgBgBIgBAAIgBgBIAAgCIABAAIAAgBIgCAAIAAgCIACAAIABABIAAgCIABAAIAAACIABAAIAAACIAAAAIAAACIABAAIAAABIABAAIAAABIADAAIAAgBIABAAIAAADIgBAAIAAABIgBAAIAAgBIgBAAIAAACIgBAAIgBABgAhYhPIAAgBIgBAAIgBAAIAAgCIABAAIAAABIABAAIAAgBIABAAIABABIABAAIAAABIgCAAIAAABgAg3hRIAAgBIABAAIAAABgAg2hSIgBgBIAAgBIABAAIAAgBIABAAIAAABIABAAIAAABIgBAAIAAABgAg2hSgAgVhUIgBABIgBAAIAAgBIABgBIACAAIABgBIABAAIAAgBIABAAIAAgBIACAAIABABIAAABIgBAAIAAABIgEAAIgCACgAgNhVIAAgBIgBAAIACgCIABgBIAAABIABABIAAACgAhRhXIgBAAIAAABIgCAAIAAgBIgBAAIAAgBIgCAAIAAgBIACAAIAAgCIABAAIAAABIABABIABgBIABAAIAAgBIADAAIAAACIgBABIAAABIgBABgAg4hYIAAgBIgDAAIgBgBIABAAIABgBIAAgBIgBAAIAAgCIADAAIAAABIABAAIAAgBIABAAIAAgBIgBAAIAAgBIABAAIAAgBIABAAIAAABIACAAIAAACIgBABIgBAAIAAABIABAAIgBABIAAABIgBAAIAAABIgBAAIAAABgAgNhbIgBAAIgBgBIABAAIABgBIABAAIAAgBIABAAIAAgDIABAAIAAABIAAAAIAAABIACAAIgBgBIAAgBIgBAAIAAgBIAAAAIAAAAIAAgBIABAAIgBgBIABAAIABgBIABAAIAAABIABAAIAAgBIABAAIAAACIABAAIAAACIgBAAIAAAEIgBAAIgBgBIgBAAIAAABIgBAAIAAABIgBABIAAAAIgBABgAgPhaIAAgBIABAAIAAABgAgqhaIAAgCIgCAAIABgBIgCAAIgBgBIACAAIAAgBIgCAAIAAgBIAAAAIgBgBIgCAAIAAgCIgBAAIAAABIgDAAIABAAIAAgBIABAAIAAgBIgBAAIAAgCIgBgBIgBAAIAAgBIACAAIABABIAAgBIACAAIAAABIACAAIAAgBIABAAIAAgBIAAgCIABAAIAAgBIABAAIAAgCIABAAIAAgCIABgBIABAAIAAgBIgEAAIAAgBIgCAAIgBgBIAAABIgDAAIAAgBIgCAAIAAAAIgCgBIAAgBIgBAAIgBgBIgBABIgBAAIAAABIgBAAIgBABIAAAAIgBAAIAAABIgBgBIAAABIgBAAIAAABIAAAAIAAABIgCACIABAAIAAABIABAAIAAgBIACAAIAAABIgBABIAAABIABAAIAAACIgBAAIAAABIADAAIAAABIACAAIAAABIgBAAIAAABIABAAIAAAEIgBAAIAAAAIgBAAIAAgCIgBgBIAAABIgCAAIAAABIgBAAIAAgCIAAgBIAAgBIAAAAIAAgCIAAAAIAAABIgBAAIAAABIgBAAIAAABIgCAAIAAgBIgCAAIABABIgCAAIAAADIABAAIAAABIgCAAIAAgCIgEAAIAAgBIgCAAIAAgBIgCAAIAAgBIACAAIAAgBIABAAIAAgBIgDAAIAAABIgCAAIAAgBIAAAAIAAgCIAAAAIAAABIACAAIAAgCIACAAIAAgBIACAAIAAgBIgBAAIAAgCIgBAAIAAgDIABAAIAAABIADAAIAAgBIABAAIAAgBIACAAIAAABIABAAIAAgBIABAAIAAAAIABAAIAAgCIgBAAIAAABIgBAAIAAABIgEAAIAAgBIgBAAIAAgCIgBAAIgBgBIABgBIAIAAIAAgCIgBAAIAAgBIgDAAIAAgBIgBAAIAAABIgBAAIAAABIgCAAIAAgBIgBAAIAAgBIABAAIAAgBIABAAIAAgCIgBAAIgBgBIABgBIgBAAIAAgDIABAAIAAgBIgBAAIAAAAIABAAIAAgBIgBAAIAAgBIADAAIAAABIAEAAIAAgBIABAAIAAgBIABAAIAAgCIgBAAIAAgBIgCAAIAAgBIgBgBIgBAAIAAgEIgBgBIgBgBIABgBIAAABIACgBIAAgBIgCAAIAAgCIACAAIAAAAIgCAAIgBgBIACAAIAAgBIgBgBIgBAAIgBgBIACAAIABABIACAAIAAgBIgBAAIgBgBIABAAIAAgBIACAAIAAABIABgBIAAgBIgCAAIAAgBIgCAAIABgBIAAgBIACABIAAgBIABABIABAAIAAABIABAAIAAgFIgEAAIAAABIgBAAIAAgCIgBAAIAAgCIAEAAIAAgDIABAAIgBgBIADAAIAAgBIACAAIABgBIAAgBIACAAIAAABIgBAAIAAADIABAAIAAgBIABAAIAAABIACAAIAAABIABAAIAAABIgBAAIAAABIACAAIAAACIABAAIAAgCIACAAIgBgBIAAgBIABAAIAAAAIABAAIABgBIAAABIABAAIABAAIAAAAIACAAIAAACIABAAIAAABIABAAIABgBIAAgBIgBAAIAAgBIgBAAIAAAAIgBAAIAAgBIABAAIgBgBIABAAIAAgBIADAAIAAgCIACAAIAAgBIABAAIAAACIACAAIAAABIgBAAIAAABIACAAIAAABIACAAIAAABIADAAIAAABIABAAIAAABIABABIgBAAIAAACIgCAAIAAABIgBABIACAAIAAACIACAAIAAgBIABAAIAAgBIABAAIAAABIABAAIAAACIADAAIAAABIABAAIABABIAAACIABAAIAAAEIADAAIAAABIABAAIAAABIABAAIAAABIABgBIABAAIAAABIABAAIAAABIABAAIABgBIABAAIAAABIABAAIABgBIABAAIABABIAAACIABAAIAAACIABAAIAAABIABAAIABABIACAAIAAABIABAAIAAgBIABAAIAAABIACAAIAAACIgEAAIAAgBIgBAAIAAABIABAAIAAABIAAABIACAAIAAACIgBgBIgBAAIAAABIABAAIAAABIgCAAIAAAAIABAAIAAACIgCAAIAAgBIgBAAIAAgCIgBAAIAAABIgBAAIAAAAIgBAAIAAgCIgBACIgBAAIAAgBIgBAAIAAABIgBAAIAAABIAAAAIAAABIAAABIAAAAIAAgBIACAAIAAgBIACAAIAAABIADAAIAAACIgBAAIAAABIgBAAIAAABIABAAIAAABIgCAAIAAACIgBAAIAAABIABAAIAAABIACAAIAAABIACAAIAAABIABAAIABABIAAACIgBAAIAAACIABAAIAAABIAAAAIAAABIAEAAIAAABIgBAAIAAABIgDAAIAAgBIAAAAIAAgBIgBAAIAAgBIgBgBIgCAAIAAACIgBAAIAAgCIgBAAIgBAAIAAAAIgBAAIAAgBIgBAAIAAABIgFAAIAAAAIgBAAIAAgCIgCAAIAAgBIgBAAIAAABIgBAAIAAgBIgHAAIAAADIACAAIAAAAIgBAAIABABIgBACIABAAIAAABIACAAIAAABIABAAIAAgDIgBAAIAAgBIABAAIAAgBIABAAIAAACIAFAAIAAAEIACAAIAAAEIgBACIAAgBIgCAAIAAgBIgBABIgBAAIAAABIgEAAIAAABIgBAAIAAgBIgBAAIAAgCIgCAAIAAABIgCAAIAAgBIgBAAIAAgBIgDAAIAAADIgBAAIAAgBIgBAAIAAABIgBAAIAAgBIgCAAIAAgBIgCAAIAAgBIABAAIAAgBIgCAAIAAgBIgCAAIABABIAAABIABABIgBABIgCABIAAACIABAAIAAABIABABIAAABIgBAAIAAABIgBABIABABIABAAIAAgBIACAAIAAABIABgBIAAABIABAAIAAABIgBAAIAAABIgBAAIAAADIgBAAIAAABgAhGhpIABAAIABABIAAgBIABAAIgBgBIAAgBIgCAAgAgwh2IACAAIAAABIABAAIAAABIABAAIAAgBIADAAIAAgBIgBAAIAAgBIABAAIAAgBIABAAIAAgCIgGAAIAAABIgCAAgAgrh7IABAAIAAgCIgBAAgAALhcIAAgCIgBAAIAAgEIgBAAIAAADIgCAAIAAgBIgDAAIAAADIgCAAIgBgBIAAgCIABAAIAAgBIACAAIAAgBIgCAAIAAgBIACAAIAAABIABAAIABAAIAAgBIABgBIAAgBIAAAAIAAgBIABgBIAAABIACAAIAAAEIABgBIAAgBIABAAIAAABIACAAIAAAEIgBAAIgBABIAAABIABAAIAAABIgBABgAgOhbgAhOhbIAAgCIABAAIAAACgAhOhbgAgYhcIgBgBIgBAAIAAgDIgBAAIgBgBIABAAIAAgBIgBAAIAAAAIACAAIAAAAIABAAIABABIADAAIAAABIACAAIgBABIgBAAIAAABIABAAIAAABIgCAAIAAABgAAihiIAAgFIABAAIABABIABAAIAAACIABAAIAAABIgBAAIgBABgAAMhtIAAgCIgBAAIABgBIABAAIAAgDIABAAIAAABIAEAAIAAABIgBAAIAAABIgBAAIAAABIgBAAIAAABIgBAAIAAABgAAHhuIAAgCIgBAAIAAgBIgBAAIAAgBIABAAIABgBIAAAAIAAABIABAAIAAgBIACAAIAAACIABAAIgBABIAAABIgBgBIgBAAIABABIgBAAIAAABgAgxhwIAAgBIABAAIAAABgApBh1IAAgDIABAAIAAgBIABAAIAAgDIABAAIAAgCIABAAIAAgGIgBAAIAAgBIgBAAIAAgBIgBAAIAAgBIgBAAIAAgCIgCAAIAAgBIgBAAIAAgBIgCAAIAAgBIgBAAIAAgBIgCAAIAJgIIgBAAIgBABIAAgBIgBABIAAgCIgBAAIAAgCIAEAAIAAAAIABAAIABAAIABABIgBAAIAAABIABABIABAAIAAABIABABIAAgCIABAAIAAABIABAAIAAABIgBABIgBAAIAAACIABgBIABAAIAAABIADAAIAAgBIABAAIAAABIABgBIABABIABgBIAAABIABABIAAgBIADAAIAAABIgBAAIAAABIgBABIAAABIgBAAIAAACIgCAAIAAABIgBAAIABABIABAAIgBABIAAABIgBAAIAAACIgBAAIAAACIgBAAIgBABIAAABIgBAAIAAABIgCAAIAAAGIgBAAIgBABIgBAAIgCACIAAABgAgGiFIAAgBIABAAIAAABgAgGiFgApLiTIAAABIgBAAIAAgBIAAAAIAAgBIAAAAIAAgBIACgCIABAAIgBgBIABAAIAAAAIgBAAIAAgCIgBgBIAAgCIgBAAIAAABIAAAAIAAgBIgBAAIAAgBIgBgBIABAAIAAgCIADAAIgBABIACAAIAAABIgCAAIAAABIABAAIAAABIABAAIAAgBIACAAIAAADIgBAAIAAACIgBAAIAAABIACAAIgBAAIABAAIAAADIgCAAIAAACIgBAAIAAABgAo5iUIAAgBIABAAIAAgBIADAAIAAABIgBAAIAAABgAo5iUgAo7iXIAAgBIABAAIAAAAIgBgBIABAAIAAgBIAAgBIABAAIAAgCIABAAIAAABIABAAIAAgBIABAAIAAABIABAAIAAgBIACAAIAAABIACAAIAAABIgCAAIABABIgCAAIABABIgCAAIgBABIgBAAIAAAAIgCAAIAAABgAhgicIAAgBIgBgBIAAgBIADAAIAAgBIADAAIAAABIgBABIAAABIgBAAIAAABgApCiiIgDAAIAAgDIgBAAIAAgBIADAAIAAgBIACAAIAAgBIABABIAAgBIACAAIAAgBIABAAIAAgCIACAAIAAgBIABAAIAAABIADAAIAAABIgBAAIAAAAIgCAAIAAABIAAAAIAAABIgCAAIAAABIgBAAIgBABIgBAAIAAACIgCAAIAAABIABAAIAAABIgBAAIgBABgAh7ijIgBgBIgBAAIgBgBIgBAAIAAgBIABAAIABABIAAgBIABABIAAgBIACAAIAAABIACAAIgBABIAAABgApYikIgBABIAAgBIgBAAIAAgBIgCAAIAAgBIgBAAIAAgBIgBAAIAAgBIAAAAIAAgBIAFAAIAAABIACAAIAAABIABAAIAAADIgBgBIAAABIgBABgApqijIAAgDIABAAIAAgCIABAAIAAABIABAAIAAgBIABAAIgBgBIAHAAIAAABIgDAAIAAABIgBAAIAAABIgBAAIAAABIgDAAIAAACgAhainIAAgBIABAAIAAgCIABAAIAAAAIABAAIABAAIAAABIgCAAIAAACgApFipIAAgBIABAAIAAAAIABABgApEiqIABAAIAAAAgAg0iqIgBgBIAAgBIgBAAIAAgDIABAAIAAABIABAAIAAABIABAAIgBABIAAACgAhMitIAAgDIgBAAIAAACIgBAAIAAgCIgBAAIAAACIgBAAIAAgBIgCAAIAAABIgBgBIgBAAIAAgBIABAAIAAgEIABgBIAAgBIAAAAIAAgBIABAAIAAgBIABgBIAAACIABAAIAAABIABAAIAAgCIABAAIAAABIABAAIAAADIADAAIAAgCIABAAIAAgBIACAAIAAgBIACAAIABgBIAAACIgBAAIAAACIgBAAIAAABIABAAIAAABIgDAAIAAABIABAAIAAABIgCAAIAAADIgBgBIgBABIgBAAIAAABgAgvivIAAgCIABAAIAAgDIAAgBIgBAAIAAgCIABAAIAAABIABAAIAAABIgBAAIAAABIABAAIAAACIACAAIABABIgDAAIAAABIgBAAIAAABgApCiyIAAgBIgBAAIAAgBIgBAAIgBgBIABAAIAAgBIACAAIAAgBIABAAIAAABIABAAIAAADIgBAAIAAABgAozi0IAAgBIgBAAIAAgBIgBAAIAAgCIgBAAIABgBIADAAIAAgBIACAAIAAABIgBAAIABABIAAACIgBAAIgBABIAAABgAoXi3IAAgBIgBABIAAgCIgCAAIAAgCIABAAIABgBIAAABIACAAIAAABIAAAAIAAABIAAAAIAAACgAhCi4IAAgBIACAAIAAgBIAAABIAAABgAnVljIAAgDIACAAIAAABIABAAIAAABIgCAAIAAABgAnglmIAAgCIAAAAIAAgBIgCAAIABgBIgBAAIAAgCIABAAIAAgCIgBAAIAAgBIABAAIAAgBIACAAIAAABIABAAIAAgCIABABIAAgBIABABIABAAIAAAFIgBAAIAAABIgBAAIAAABIgBAAIAAABIgBAAIAAACgAnJlqIgBAAIAAgBIABgBIABAAIAAgBIABAAIAAABIABAAIAAABIgBAAIAAABIgBAAIgBABgAnGlsIABAAIAAABgAnKluIgBAAIAAgBIgBAAIAAgBIABAAIABABIABAAIAAACgAnWluIAAgBIgBAAIAAgBIgCAAIgBgBIgCAAIAAAAIgDAAIAAgBIABAAIAAgBIgCAAIAAgBIAAAAIAAABIgBAAIAAABIgBgBIgBAAIAAgBIACAAIAAgCIABgBIAAgBIgEAAIAAgBIgBAAIAAgDIgBgBIAAgBIgBAAIAAABIgCAAIAAgCIgBAAIAAgBIgBAAIAAgBIACAAIAAgBIACAAIABABIAAgCIACAAIABAAIAAAAIABABIABAAIAAgBIABAAIAAgBIADAAIAAABIABAAIABAAIABABIAAgBIABAAIgBAAIAAgCIACABIAAgBIADAAIAAADIgBAAIAAABIgBgBIgBAAIAAABIABAAIABABIABAAIAAACIgBAAIABABIgDAAIABABIABAAIAAABIABAAIgBABIAAABIABABIAAABIABAAIAAgBIADAAIAAABIADAAIAAgBIACAAIAAgBIABAAIAAABIADAAIAAABIABAAIAAABIgBABIgBAAIgBABIgEAAIAAACIAAAAIAAABIgCAAIABAAIABAAIAAABIAAABIgCAAIAAgCIgBAAIAAABIgBAAIAAABIgDAAIAAABgAnLmQIAAgCIABAAIAAgBIABAAIAAABIACAAIAAgCIABAAIAAABIABAAIAAABIgBAAIAAABIgCAAIAAABgAnOmRIAAgBIAAAAIAAgBIABAAIAAABIABAAIgBABg");
	this.shape_1.setTransform(0,2.5);

	this.timeline.addTween(cjs.Tween.get(this.shape_1).wait(1));

	// Capa_3
	this.shape_2 = new cjs.Shape();
	this.shape_2.graphics.f("#394C64").s().p("AiRHCIAAgBIgCgCIAAgBIgBgBIgCAAIgBgBIgBAAIgDgFIgEgCIgDgEIgBAAIgCgCIgCgBIgBgBIgBgBIgBAAIAAgBIgBAAIgCgBIgfgTIgBgBIgDgEIAAgBIgBAAIgBgBIAAAAIgCAAIgBgBIAAgBIgBgBIgCAAIgCgCIgCAAIAAgBIgFgCIgDAAIgCgBIgBgBIgEgCIgBgCIgBAAIAAgBIgBAAIgBgBIgBAAIgBgBIgBgBIgBAAIgCAAIgCgCIgBAAIgBgBIAAAAIgBgBIgBAAIgBgBIABAAIAAgBIgBAAIAAgCIABAAIACgDIAAgFIABgBIAAAAIAHAAIABgBIAAgCIABAAIAAgCIABAAIAAgBIACgCIABABIAAgBIABAAIAAABIABAAIAAABIABAAIABgBIABAAIACgBIgCgCIABAAIABAAIgBAAIAAgBIABgBIAAgBIACAAIAAgDIgBgBIAAgEIgBAAIAAgDIgBAAIgCgCIAAgBIAAgBIgBAAIgBAAIgEgFIgBAAIABgEIABAAIgCgDIAAgCIABgDIABAAIAAgBIgBAAIAAgBIACgCIACAAIABgCIgCgDIgCAAIgBAAIgCgBIgBgBIgBgBIgBgBIgBAAIAAgBIgBgBIgBAAIABgBIAAgBIgBAAIgBgBIgBAAIgBgBIgBAAIAAAAIADgBIACAAIAAgBIADAAIABgBIADgEIgBgCIADgCIACAAIABABIABgBIAAgBIAAgBIAAgBIABAAIAAgBIABAAIAAgBIABgBIAAgBIgBAAIgEAAIAAAAIgBAAIAAgCIgCABIgBAAIgBgBIAAgBIABAAIABgCIABAAIAAgBIgBAAIAAgCIADAAIAAgBIABABIABAAIAAABIAAABIACAAIAAABIABgBIAAABIABAAIAAgBIABAAIAAgCIABAAIAAgCIgBAAIAAgCIABAAIACgCIABgBIABAAIABgCIAAgBIACAAIAAgDIACAAIACABIABgFIAAgBIACAAIABABIACAAIABACIACAAIACACIACABIAAABIABAAIAAgBIAFgGIABAAIgBACIABAGIADAAIAEgFIACgBIgBgDIAAgFIABgCIgCgCIABgCIAAgFIgCAAIAAgBIgBAAIAAgBIgBAAIgBAAIABAAIAAgBIgDgFIABAAIAAgBIACgBIABAAIAAgBIACAAIAAABIABABIABABIAAABIABACIADAAIAAgBIABAAIABABIABACIAAABIABAAIAAAAIACAAIAAgBIACAAIAAgBIACAAIAAABIACAAIAAABIgBAAIAAAAIABAAIAAACIABAAIAAABIgBAAIAAABIABACIAAACIABAAIAAgBIABAAIAAgBIACAAIAAgCIABAAIAAgBIACAAIAAgBIABAAIAAgBIABAAIABgBIAEAAIAAAAIABAAIAAgBIACAAIAAgBIABAAIABgBIAHAAIAAgBIABAAIAAgBIABAAIAAgBIABAAIAAgDIADAAIAAgCIABAAIAAgBIABAAIAAgCIABAAIAAgCIACAAIAAgBIADAAIAAgBIADAAIAAgBIACAAIAAgBIAAAAIAAABIAEAAIAJgDIADADIAAABIgBAAIAAABIgBAAIAAAAIABAAIAAACIgBAAIAAAFIACAAIAAABIACAAIAAACIAAAAIAAABIABAAIAAABIABAAIAAABIABAAIAAABIABABIgBAAIABABIABAAIABABIAAADIABAAIgBABIAAACIABAAIAAABIABAAIAAABIAFAAIAAABIABAAIAAABIABAAIABABIAAABIABAAIAAABIABAAIAAACIAAAAIAAABIACAAIgBABIABAAIAAABIABAAIAAADIABAAIAAABIABgBIAAABIABAAIAAACIACAAIAAABIABAAIAAABIACAAIAAgBIACAAIAAACIABAAIAAAEIgCAAIAAACIABAAIAAADIgBAAIAAgBIgBAAIAAABIgBAAIAAABIgBAAIAAABIgBAAIAAAMIABABIAAABIgBAAIAAACIgBAAIAAAAIABAAIAAABIABAAIgBABIAAAEIgBAAIAAABIgBAAIAAABIABAAIAAABIgBAAIABABIAAADIACAAIAAABIABAAIAAACIABAAIAAAEIgBAAIAAAEIgBAAIAAABIgBAAIAAABIgBAAIAAACIgBABIAAABIABABIAAABIgBAAIAAABIgBAAIAAABIgBAAIAAACIgBAAIAAAAIABAAIAAAEIABAAIAAACIgBABIAAABIgBAAIAAACIgBAAIAAABIACAAIAAACIgBAAIAAABIABAAIAAABIABAAIAAABIACAAIAAABIABAAIAAACIABAAIABAAIABAAIAAAFIACAAIAAACIABAAIgBABIgBAAIAAACIgBAAIAAABIABAAIAAACIABABIAAAGIgBAAIAAADIABAAIAAABIABAAIAAACIgBAAIAAAAIgBAAIgBAAIgCAAIAAgBIgBAAIAAABIABAAIAAADIgCAAIAAgBIgDAAIAAACIABAAIAAABIABAAIAAACIgBAAIgBABIAAABIgEAAIAAABIABABIAAABIABAAIAAABIgBAAIAAADIgBAAIAAgBIAAAAIgBgCIgBAAIAAACIgEAAIAAADIgBAAIAAABIgCAAIAAACIgBABIAAADIgBAAIAAgBIgBAAIgBgBIABAAIAAgBIgBgBIAAgBIgBgBIgBAAIAAgBIgBgBIAAgBIgCAAIACgBIABAAIAAgEIACAAIAAgCIgCAAIgBgCIABgCIAAgBIgBgBIABgBIAAgFIABgDIgCgBIABgBIAAAAIgBgBIAAgCIgBgBIABgBIgBgBIgBAAIgBgBIAAgBIgBgBIAAgBIgBgBIgCgBIgBABIgCgBIgBAAIAAABIgBAAIgEABIAAgGIABAAIAAgEIgEAAIAAgCIgBAAIgBgBIgCAAIgBgBIgBAAIgBgBIABAAIgLgDIAAAAIgBAAIAAACIgBABIAAAAIAAACIAAABIAAAAIgBgBIgCAAIAAgBIgBAAIAAACIgDAAIAAgCIgFAAIAAABIgCACIAAACIABAAIAAAHIABAAIAAABIgBABIAAAGIgDAAIAAABIABADIAAADIgCAFIADACIABABIgBABIgBAAIAEABIABgCIADABIgBABIgCACIgBABIAAABIgCAAIAAABIgCABIABAAIAAABIACgCIAAgBIABABIgBABIAAACIAGACIAAgCIABgBIAAgBIABAAIAAAFIACAAIABgBIAAgCIABgBIAAAEIABABIADAAIAAACIABAAIABAAIADADIAAgBIACAAIAAACIgBACIgBACIAFABIABAAIABABIABgBIACABIACACIgBACIABAAIAAABIAIADIAAABIABABIAAAGIgBAAIAAABIgBAAIAAABIgCAAIAAABIgBABIgCAAIAAACIgBAAIgBABIgCAAIAAgBIgBABIgBAAIAAABIgEAAIAAABIgBAAIAAADIgBABIgCAAIgBgBIAAABIgBAAIAAABIgBABIAAAEIgBAAIAAABIgBAAIgBABIAAADIgBAAIAAACIgCAAIAAABIAAAAIAAABIgBABIgCAAIAAADgAhOF1gAiVFYIAAgBIABAAIAAABgAiUFXgAJEDoIAAgBIgEAAIAAgCIgBAAIAAAAIgBAAIAAgBIgCAAIAAgBIgBAAIAAgBIgBAAIAAgCIgBAAIAAACIgCAAIAAgCIgCAAIAAACIgBAAIAAABIgBAAIAAACIgBAAIAAABIgCAAIAAgBIgCAAIAAgCIgBgBIABAAIAAgCIgBAAIAAgGIADAAIAAgDIABAAIAAgCIgBAAIAAABIgBABIgBAAIAAABIgBAAIAAgBIgBAAIABgBIAAgDIgBAAIgBAAIgBAAIAAAAIgBABIgBABIgBgBIgBAAIgBgBIAAABIgBAAIAAABIgBAAIgBgBIgBAAIAAgBIAAgBIgBgBIgCAAIAAgBIgBgCIgBACIgCAAIAAgCIgBAAIgBADIgBAAIAAABIgCAAIAAACIgBAAIAAABIgBAAIAAABIgCAAIAAABIgBAAIAAABIgBAAIAAADIAAAAIAAABIgBAAIgCgBIgBABIAAABIABACIADAAIAAABIgBAAIAAACIgBAAIAAABIgBAAIgBABIgBAAIAAABIgBAAIAAABIgBABIgBAAIAAgBIgBAAIAAgBIgDAAIgBABIAAABIgCAAIAAABIgBAAIAAgCIgBAAIAAgBIABAAIAAAAIABAAIAAgBIABAAIAAgBIABAAIAAgDIACAAIAAgBIABAAIAAgHIgBgBIADgBIADAAIAAABIABAAIAAgDIABAAIAAgCIgBgBIAAgBIgBAAIAAgDIADAAIAAgCIgCAAIAAgBIgBAAIADAAIAAgBIABAAIAAgEIABAAIAAgCIgBAAIAAgBIgBAAIAAgBIgBAAIAAgCIABAAIAAgBIABgCIABgCIAAgBIABAAIAAAAIgCgBIgBAAIgBgBIgDAAIgBgBIgGAAIAAABIgBABIgBABIgBAAIAAAAIgBAAIAAgCIgCAAIAAgBIgCAAIAAgCIgBAAIAAgCIABAAIAAgBIABgBIAAgBIgBAAIAAgDIABAAIAAgDIABAAIAAgCIABAAIAAgBIABAAIAAAAIABAAIAAAAIABAAIABAAIAAgBIACAAIAAABIABAAIAAAAIABAAIAAAAIABAAIAAgBIgBgBIgCAAIAAgCIgCAAIAAgBIgBAAIAAgBIgBAAIAAgCIgBAAIAAgBIgBAAIAAAAIAAgBIgBAAIgBgBIAAACIgBAAIAAAAIgBAAIAAABIgBAAIAAACIgBABIAAABIgDAAIAAABIgCAAIAAABIgDAAIgBABIgBAAIAAgBIgBAAIAAgDIgBAAIABgCIAAgLIgBAAIAAAAIgBgCIgCgBIABgFIABgBIAAgBIABAAIAAgEIgBAAIABgBIAAAAIAAgBIABAAIAAABIAFAAIAAgBIABgBIAAgBIABAAIAAgBIABAAIABgBIAKAAIACgBIABAAIABABIABAAIAAgBIADAAIAEgBIADAAIABABIAAABIAAABIACAAIAAgBIACAAIAAgBIABAAIgBgBIAAgDIgBAAIABgBIABAAIAAABIABAAIAAgBIACAAIAAgBIACAAIAAgBIADAAIABAAIACAAIAAgBIACAAIAAgBIAEAAIABgCIAFAAIAAACIADAAIAAgCIADAAIAAACIADAAIAAgDIABAAIAAADIADAAIABgCIABAAIAAACIACAAIABgCIAAgBIACAAIAAgBIACAAIAAABIAEAAIAAABIAAAAIAAgDIAAgBIAAAAIAAgCIABABIABAAIAAABIABgBIABABIADAAIAAgBIgBAAIAAgBIABAAIAAgBIADAAIAAgCIABAAIAAABIADAAIAAgBIABABIACAAIgBABIAAACIABgBIABAAIAAgBIACAAIABABIABAAIgBABIABAAIgBABIACAAIAAgBIABAAIABgBIAAABIACAAIABABIACABIABAAIACAAIgBABIAAABIgBABIABAAIAAAEIgBAAIAAABIABAAIgBABIABAAIAAABIABAAIAAACIgCAAIAAABIABAAIAAABIgBAAIAAACIABAAIAAACIABABIAAABIABABIgCAAIAAACIADAAIAAACIABAAIAAgBIABABIABAAIABAAIACAAIAAAAIACAAIAAAAIABAAIAAgBIABAAIAAABIABAAIAAgBIADAAIAAgBIABAAIAAABIABAAIAAABIABAAIAAACIgBAAIAAABIABAAIAAABIgBABIAAACIABAAIAAACIABAAIAAACIABAAIAAABIABAAIABABIABAAIAAADIABAAIAAABIABAAIAAABIADAAIAAABIABAAIAAAAIACAAIADACIABABIAAABIABAAIAAADIgBABIACABIABABIAAABIAAABIABAAIAAABIABACIAAADIABAAIAAABIgBAAIAAABIABAAIAAABIgCAAIgBABIAAAAIAAABIAAAAIAAABIADAAIAAACIABABIgBAAIAAABIgCAAIAAABIgBAAIAAABIgBABIgBAAIgBACIAAgCIgBAAIAAgBIgBAAIAAAEIgBAAIgBABIAAABIgEAAIAAgBIgBAAIAAABIABAAIAAABIgBAAIAAABIgBAAIAAADIABAAIAAACIgDAAIAAgBIgBAAIAAABIgCAAIAAACIAAAAIgBABIgFAAIgBgBIgBAAIAAACIgBABIAAADIgDAAIAAgCIgBAAIAAgBIgBABIAAgBIgBgBIgBAAIgBgBIAAgBIgCAAIAAgCIgCAAIAAgCIgCAAIAAgBIgBgBIgCAAIAAgBIgFAAIAAgBIgDAAIAAABIgBAAIgBABIAAABIAAABIgBAAIAAABIgBAAIAAABIgBAAIAAABIABAAIAAABIgBAAIAAACIAEAAIABgBIABAAIAAACIgCADIgBAAIAAABIAAAAIAAABIgBAAIABABIgCAAIAAAAIgBAAIAAABIgCAAIAAgCIgBAAIAAgBIgCAAIAAABIgBAAIAAABIgBAAIAAAAIgCAAIAAABIgCAAIAAABIgBABIAAACIgBAAIAAACIgBABIAAACIgBAAIAAAAIAAABIAAAEIAAABIAAAFgAEOBuIgGAAIAAgBIgBAAIAAABIgBgBIgFAAIAAgBIgBgBIAAgDIAAABIAAgCIgBAAIAAABIgBAAIAAACIgBAAIAAABIgBAAIAAACIgBAAIAAABIgBgBIAAABIgBAAIAAgBIgDAAIgBgBIgBAAIAAgCIABAAIAAgBIgBgBIAAgEIgBgCIAAgIIgBAAIAAgCIgBAAIAAgBIABgBIgBAAIAAgBIABAAIAAgBIABAAIAAgBIgBAAIAAgBIgBAAIAAgCIgBAAIgCgBIAAAAIAAgBIABgBIAAgBIABAAIABAAIAAgCIgFAAIAAgBIgBAAIAAgFIgBAAIAAgCIgBAAIAAgBIACAAIABgBIAEAAIABgCIAAgBIABgBIAAgBIgBAAIABAAIAAgDIACAAIAAgFIABAAIAAgCIgBAAIAAgBIACAAIAAgBIABAAIAAABIACAAIADAAIAAAAIADAAIABgBIAFAAIACABIADACIAAABIABAAIAGABIABAAIAAgDIABAAIABABIABAAIAAgBIAHAAIAAABIABABIAEAAIAAABIACAAIAAABIADAAIABABIADAAIADABIABgBIAEAAIABABIABAAIAAABIABABIABABIAAABIAAAAIACABIgBAAIAAABIgBAAIAAABIgDAEIgCABIACABIACAAIAAABIgBABIgBAAIAAABIgBAAIAAABIABAAIABgBIACAAIAAABIAAAAIAAgBIADAAIAAADIgBAAIAAABIABAAIgBABIAAABIgBAAIAAAFIgBAAIAAABIgBAAIgBgBIgCAAIgCgCIgBAAIgBgBIgBAAIAAgBIgDAAIAAABIABABIAAAEIgGAAIAAgBIgEAAIAAABIgBAAIAAABIgBAAIAAABIgBAAIgCADIgBABIgBgBIAAABIgGAAIABABIgBAAIAAABIgCAAIAAgBIgBAAIAAADIABAAIAAABIABAAIAAAAIACAAIAAABIACAAIAAACIgBAAIAAAEIgBAAIAAADIgDACIgBACIAAABIgBAAIgBABgAB0AvIgCAAIgBgBIgBAAIAAgCIgBAAIAAgBIAAABIgBAAIAAgBIgBgBIAAgBIgBAAIAAgBIgBAAIAAgBIgBAAIAAgCIgBAAIAAgCIACAAIgBgBIgBAAIgBgBIgBAAIAAgCIgCAAIAAABIgDAAIAAgBIgBAAIAAABIgBAAIAAgBIgBAAIAAgBIgDAAIAAABIgCAAIAAgBIgEAAIAAAAIgDAAIAAgBIgJAAIAAgBIgDAAIgBABIgFAAIAAABIgBAAIAAAAIgFAAIAAABIgBAAIAAgBIgBAAIAAAAIAAAAIgDgEIAAgBIABgDIAAgDIACgIIAAgQIgCgLIAAgBIgCAAIAAABIgBAAIgBgBIgBAAIAAABIgCAAIAAgBIgBAAIAAABIgEAAIAAgBIgCAAIgBABIgBAAIAAACIgFAAIgBABIgBAAIAAgFIABAAIAAgCIABAAIAAgBIABAAIABgBIAAABIABAAIAAgBIACAAIAAgBIAAgBIAFAAIAAgBIABAAIAAgDIABAAIAAgCIgBAAIAAgBIgDAAIAAAAIgCAAIAAgBIgBAAIAAgCIAAAAIACgBIgBAAIAAgBIgIAAIAAgBIgCAAIgBABIABAAIAAABIgBAAIAAABIgBAAIAAgBIgBAAIAAABIgBAAIAAABIgBAAIAAABIADAAIAAAHIABAAIAAABIgDACIAAABIgBAAIAAABIgBAAIAAABIgBAAIAAABIgBABIAAgBIgBAAIAAgBIAAAAIAAgBIgBAAIAAACIgCAAIAAABIgCAAIgBABIAAgBIgDAAIAAACIgDAAIAAABIgBgBIgCAAIgBgBIAAABIgBgBIgBAAIAAgBIgBAAIgCgBIgIAAIAAgBIgFAAIgBABIgBAAIAAABIgBABIAAgDIgBAAIAAgBIABAAIgBgBIAAgBIgBAAIAAgBIABAAIAAgBIABAAIgBgBIAAgCIgBAAIAAgCIgBAAIAAgBIABAAIgBgBIAAgEIADAAIAAgBIgGAAIgBABIAAABIgBAAIAAgBIgBAAIAAABIgCAAIgBABIgBAAIAAABIgBAAIAAACIgCAAIAAACIAAAAIAAABIgDAAIAAACIgBAAIAAABIgDAAIAAgBIgGAAIAAABIgKAAIgCgBIgCAAIgCgDIgBgBIgDAAIgBgCIgBAAIAAAAIgCAAIAAgBIAAAAIAAgBIgBAAIgCgCIgCAAIgBgBIgDAAIAAgBIgDAAIAAgBIgDAAIgBgBIgBAAIgBABIgCAAIABgBIgBAAIgBABIAAgDIgBAAIAAgBIgBgBIAAgDIgBAAIAAgCIgBAAIAAgBIgBAAIAAgBIgBgBIAAgBIgBAAIAAgBIABAAIgGgGIgCAAIAAgBIABAAIAAgDIgBAAIAAgBIABAAIAAgBIgBgCIgBAAIAAAAIACAAIABgBIAAgCIACgBIACAAIgDgCIABAAIAAgCIABAAIABgBIAAgCIABgBIABAAIAAgDIABAAIAAgBIACAAIAAgBIABAAIAAgBIABAAIAAAAIABgBIABAAIAAgCIABgBIABAAIAAgBIAAgEIAAAAIgBgBIgBAAIAAgBIgDAAIgCAAIgCAAIAAAAIgBAAIAAABIgBAAIAAABIgBgBIAAABIgBgBIAAABIgDAAIAAABIgBAAIAAgBIgBAAIAAgBIAAAAIAAgBIAAAAIAAgDIAAAAIAAgEIgCAAIAAAAIgDAAIAAgBIADAAIAAgCIgBAAIAAgBIgDAAIAAgBIgBAAIAAgBIACAAIAAgBIABAAIAAgHIABAAIAAgBIgBAAIAAgBIgCAAIAAgBIABAAIAAgCIgBgBIABAAIAAgBIgBAAIAAgCIgBAAIABgBIgBAAIACgCIACAAIAAgCIABgBIABAAIAAgDIgBAAIAAgBIgBAAIAAgBIABAAIAAgCIgBAAIAAgBIgCAAIAAgBIgBAAIAAABIgBAAIAAABIgBAAIAAABIgBAAIAAABIgCAAIAAABIgCAAIAAgBIgCAAIAAgCIABAAIgBgBIgBABIAAgBIgBAAIAAABIgBAAIAAAAIAAgCIAAAAIAAgEIABAAIgBgBIABAAIAAgBIgBAAIAAgBIACAAIAAgBIADAAIAAgBIABAAIAAAAIgBAAIAAgDIgBAAIAAgDIgBgBIAAAAIgBAAIAAgBIABAAIgBgBIAAgBIABAAIAAgBIABAAIAAgCIABAAIgBgBIABAAIAAgCIABAAIAAgBIABAAIAAgBIgBAAIAAAAIABAAIAAgBIABAAIAAgCIgBgBIAAgBIABgBIgBgBIgBAAIAAAAIgCAAIAAgBIgBAAIAAgCIgBAAIAAgBIABgBIAAgDIACAAIABgCIABAAIABgBIABAAIAAgEIABgBIABgBIABAAIAAgBIABAAIAAgCIABAAIAAgBIAFAAIABABIABAAIAAABIACAAIABgBIAAgBIABAAIAAgBIACAAIAAABIADAAIAAgBIACAAIABgBIAAgDIADAAIAAgBIABAAIAAgBIABAAIABgBIAAgBIACAAIAAABIABAAIAAABIABAAIAAABIADAAIAAABIABAAIAAgBIAHAAIAAABIACAAIAAACIABAAIAAABIAEAAIAAABIACAAIAAABIACAAIAAABIABABIAAABIgBAAIAAAAIABAAIAAABIgBAAIAAACIgBAAIAAADIACAAIAAgCIACAAIAAgBIABAAIAAgBIABAAIAAgBIACAAIAAgBIAAAAIAAAAIABAAIAAgBIABAAIAAABIACAAIAAABIAEAAIAAgBIABAAIAAABIABAAIAAACIABAAIAAADIABAAIAAABIABAAIAAABIABAAIAAABIABAAIAAACIABAAIABABIAAACIgBAAIAAABIABAAIAAADIACABIAAAAIAAACIABAAIAAADIABAAIAAABIABAAIAAABIgBAAIABABIAAABIABAAIAAACIABAAIAAABIgBAAIAAACIgBABIgBABIABABIAAAAIABABIAAACIgBAAIAAADIgBABIAAAAIACAAIAAABIABABIABAAIAAABIgBABIAAACIAFAAIAAAFIgBAAIAAABIgBAAIAAACIABAAIABABIABAAIAAACIACAAIAAABIABAAIABAAIACAAIAAACIABABIAAADIAAAAIAAABIABABIABAAIAAABIABAAIAAABIAEAAIAAABIAEAAIAAgBIABABIABAAIAAAAIABAAIABABIgBAAIABABIACAAIAAABIABABIADAAIAAADIACAAIABAAIAAABIABAAIAAACIABAAIAAABIABAAIAAABIgBAAIAAADIgBAAIAAAEIABAAIAAABIACAAIAAgBIABAAIAAABIABAAIAAACIACAAIAAACIADAAIAAgCIABAAIAAgBIABAAIAAABIABAAIAAADIgBAAIAAABIgBAAIAAACIABAAIAAADIgBAAIAAABIABAAIAAACIgBgBIAAACIACAAIAAABIABAAIACABIAAACIgBABIAAACIABAAIAAABIABAAIABABIACAAIABABIABAAIABABIAAABIADAAIAAACIgBAAIAAABIgBAAIAAABIgBAAIAAABIABAAIAAABIACAAIABgBIABAAIAAABIAAAAIAAAIIgBAAIAAABIACAAIAAgBIABAAIAAABIgBABIAAAKIgBABIAAAGIAAAAIAAACIAAAAIAAABIABAAIAAACIACAAIABgBIAFAAIABgBIACAAIAAgBIABAAIABABIADAAIgBgBIAAgCIABAAIAAAAIACAAIABAAIABAAIAAABIABAAIAAABIABAAIAAABIACAAIAAABIACAAIABABIAGAAIAAgBIACAAIACABIABAAIAAABIABAAIAAABIADAAIAAACIABAAIAAABIABgBIABABIACAAIACAAIAIAAIAAAAIABAAIAAgDIAGgFIACAAIABgBIABAAIACgBIABABIADAAIAFABIABgCIABgBIACAAIAAgBIABAAIAAgDIABgBIgBAAIAAgCIABAAIAAAAIABAAIAAAAIACAAIAAAAIACAAIAAABIABAAIAAABIACAAIAAABIgBAAIABABIABAAIAAgCIABAAIAAgCIACAAIAAABIACAAIgBABIABAAIAAABIABAAIAAABIABACIAAABIABAAIAAgBIABgCIABAAIABgBIACAAIAAgBIAAAAIAAgBIABAAIACgBIACAAIAAgBIgBgBIAAgEIAEAAIAAgEIAEAAIAAAAIABAAIAAAAIABABIAAADIACAAIAAABIACACIAAAAIAAgBIABAAIAAgBIABABIAAgBIACAAIABgBIABAAIAAACIABAAIAAABIABAAIAAABIAFAAIAAABIABAAIAAABIABAAIAAAAIgBAAIAAABIgBAAIAAAFIgBAAIAAABIgBAAIAAABIgBAAIgDACIgBAAIAAACIgCAAIAAABIgBAAIAAACIgCAAIAAABIgBABIAAABIAAAAIAAABIgBAAIgBABIgCgBIAAACIgBgBIgCAAIgCgBIgBAAIAAABIACAAIAAAEIgBAAIAAACIgBAAIgHABIgBABIgBAAIAAABIgEAAIAAABIgBAAIgCACIAAABIgBAAIAAACIgBAAIAAABIgBAAIABAAIAAACIADAAIAAACIABAAIAAACIgBAAIAAACIgBACIgBAIIgBAAIgBAHIABAAIAAABIgBABIgBAAIABABIAAACIABgBIAKAAIAAABIADAAIAAgBIADAAIAAABIABAAIAAAFIABAAIAAAAIABACIgBACIAAADIgBAAIgBABIgBAAIgCAAIgFAAIgCAAIgBAAIgBAAIAAAAIgBAAIgBACIgBAAIgBABIgBAAIgBABIAAABIgBAAIAAgCIgBAAIgBABIgBAAIAAABIgCAAIAAABIAAAAIAAACIgFAAIAAgBIgHAAIAAABIABABIABAAIAAABIABAAIAAABIABAAIAAABIgBAAIAAACIgBAAIAAACIgBAAIAAABIgBAAIgBABgAo4g6IAAgBIgBAAIgGAAIAAgBIgDAAIgBgBIgBAAIAAgCIABAAIAAgCIgBgCIgBAAIgFAAIAAAAIgDAAIAAACIgBAAIAAACIACAAIAAADIABAAIAAABIgBAAIAAABIgBgBIgBAAIAAABIgDAAIAAgBIgBgBIAAgDIgBAAIAAgFIABAAIABABIAAAAIAAgBIAAAAIAAgCIABAAIAAgBIACAAIAAgBIABAAIAAgBIADAAIAAgCIABAAIAAgCIADAAIAAgBIACAAIAAAAIABAAIABgBIACAAIAAgDIABAAIAAgBIAAgBIAAgBIABAAIAAgCIABAAIAAgEIABAAIAAgBIABAAIAAgDIABAAIAAgBIABAAIAAgHIgBAAIAAAAIgBAAIAAgBIgBAAIAAgCIgBAAIAAgCIgCAAIAAgBIAAAAIAAgBIgCAAIAAgBIgBAAIAAgBIgDAAIAAgBIgDAAIAAgBIgBAAIAAAAIgBgBIAAgCIgBgBIAAgBIgBgBIAAgBIgBAAIAAgDIgBAAIAAgCIgBAAIAAgCIgBAAIAAgBIgBAAIAAgBIAAgBIAAgBIgBAAIAAAAIgBAAIgBgBIAAgCIgBAAIAAgBIgCAAIAAgBIgBAAIAAgBIgCAAIAAgBIgFAAIAAABIgBAAIAAABIgBAAIAAABIgCAAIAAADIgCAAIAAABIgBAAIAAAAIgCAAIAAABIgBAAIAAgBIgBABIAAgBIgCAAIAAABIgBAAIAAgBIgBAAIAAAAIgCAAIAAgBIgBAAIgBgCIgEAAIAAgBIgEAAIAAgBIgGAAIAAgBIgCAAIAAgBIgBAAIAAAAIgCAAIAAgBIgCAAIAAgBIgEAAIAAABIgBAAIAAABIgBAAIgBAAIAAABIgBAAIAAgBIgBAAIAAgDIABAAIAAgBIABAAIAAgBIABAAIAAgCIABAAIAAgBIACAAIAAABIABAAIAAABIABAAIAAABIABAAIAAgBIACAAIAAgBIABAAIABgBIAAgBIABAAIAAgBIABAAIAAgBIABAAIAAgBIABgCIAAgBIABgBIgBgBIACAAIgBgBIABAAIAAAAIABAAIAAgCIABAAIAAgDIABgBIAAgCIABAAIAAgBIABAAIAAgDIABAAIAAgCIABAAIAAACIACAAIACgDIAAgBIABAAIABgBIAAgBIABAAIAAgCIABAAIAAgBIABAAIAAgCIABAAIAAgCIABgBIABgBIAAgBIABgBIAAAAIABAAIABgBIABAAIAAgCIACAAIAAgCIACAAIAAgBIABAAIAAgBIABAAIAAAAIADAAIAAgBIACAAIABABIABAAIAAAAIABAAIAAABIABAAIAAABIABAAIAAABIACABIAAACIABAAIAAABIgBAAIAAABIgBAAIgBACIgEAFIAAABIgBAAIAAABIgFAEIgBADIAGAEIAMgEIAEgGIABgBIABgCIACgBIABgCIABAAIABgCIAAgBIABgBIAEACIAAgCIAHgIIABABIABAAIAAABIAIAAIAAgBIABAAIABgBIAAABIACAAIAAgBIADAAIAAAAIABAAIAAAAIABAAIAAgBIABAAIABABIAAgBIABAAIAAABIABgBIAAABIABAAIAAAAIABAAIAAAAIABAAIAAgBIABAAIAAgBIABAAIABABIAAAAIAAgBIADAAIAAACIABAAIAAgBIABgBIABgBIABgBIAAgBIABAAIAAgBIAJAAIAAABIAGAAIACgEIAKAAIABgBIAAABIABABIAAABIAAADIABACIACAAIAIACIgCAHIAAACIgBACIAAACIgBAAIAAgBIgCAAIAAgBIgBAAIgBgBIgBAAIAAgBIgCAAIAAACIgBAAIAAgBIgBAAIAAgBIgCAAIAAABIgDAAIAAACIgCAAIAAABIgBAAIgBgBIgBAAIAAgDIABgBIgBAAIAAgBIgCAAIAAgBIgBAAIAAABIgDAAIgBgBIAAABIgCAAIAAAAIgBAAIAAAAIgCAAIAAAAIgBAAIAAABIgBAAIAAABIABAAIAAACIABAAIAAADIABAAIAAABIABAAIAAABIABAAIAAACIABAAIAAAAIABAAIABABIABAAIACACIABAAIAAADIABAAIAAABIgCAAIAAABIgBAAIAAABIABAAIAAABIABAAIAAgBIABAAIAAABIABABIAAACIgBAAIAAABIgBAAIAAAEIABAAIAAgBIACAAIAAABIACAAIAAAAIAEAAIAAACIABAAIABABIABAAIAAAEIABAAIAAABIABAAIAAgBIABAAIAAABIACAAIAAABIABAAIAAACIABAAIAAABIABABIABACIAAABIgCAAIAAABIABAAIAAAEIgBAAIAAABIgCAAIAAACIgIAAIAAABIgDAAIAAAAIgCAAIAAABIgBAAIAAABIgDAAIAAABIgBAAIAAABIgBAAIAAABIgBgBIgBAAIAAACIgBAAIAAABIAAAAIAAACIgBAAIAAACIgCABIgBAAIAAABIgBAAIAAABIgBgBIgCAAIAAACIgBAAIgBgBIgBAAIAAgDIgBAAIAAABIgCAAIgBABIAAgBIgFAAIgBgBIAAAEIgCAAIAAgBIgBAAIAAgBIgBAAIAAgBIgEAAIAAABIgBAAIAAABIgCAAIAAABIAEAAIAAACIABAAIAAABIABAAIAAABIACAAIAAACIgBAAIAAABIABAAIAAABIABAAIAAABIABAAIAAABIABAAIAAAEIABAAIAAAAIABAAIAAAEIgBAAIAAACIgBAAIAAABIABAAIAAAAIABAAIAAABIgBAAIAAABIgBAAIAAADIACAAIAAACIABAAIAAABIACAAIAAABIABAAIAAADIgBABIABAAIAAAEIgBAAIAAACIABAAIAAAFIgBAAIAAABIgBAAIAAABIgBAAIAAABIgBAAIAAABIgCAAIAAgBIgBAAIAAgCIgBAAIAAgBIgBAAIgBgBIAAABIgBAAIAAgBIgCAAIAAgCIgBAAIAAABIgBAAIAAADIgBAAIAAABIgBAAIAAABIgDAAIgBABIgBAAIAAABIgBAAIAAABIgBAAIAAADIABAAIAAAEIgBAAIgBgBIgBAAIAAgBIgCAAIAAABIgBAAIAAABIgBAAIAAABgAh5h2IAAgDIgBAAIAAgDIABgBIAEgBIACAAIAAAFIgBAAIACABIACAAIAAABIABAAIAAABgAhvh3gAnfklIgCAAIAAABIgCgBIgBABIgBAAIAAgBIABAAIAAgBIgBAAIAAABIgBAAIAAgBIgCAAIAAABIgEAAIAAgBIgBAAIAAgBIgCAAIAAgCIgDAAIAAgBIgBgBIgBAAIAAgBIgBAAIAAgBIgBAAIAAgBIAAAAIgBABIgBgBIAAABIgCAAIgBgBIgBAAIgBgBIgBAAIgCgBIgBgBIAAABIgBABIgDAAIAAABIgBAAIAAABIgCABIgBACIgDgDIAAAAIgBAAIgBABIgBAAIAAABIgBAAIgBABIgBABIgBAAIgCgCIgCAAIgEgDIAAgBIgCgCIgEgCIAAgDIgBgBIAAgCIgBAAIADAAIABAAIAAgDIABgBIAAgCIABAAIABABIAGAAIAAgBIABAAIAAAAIACgCIAAgBIABgCIAAgFIABgCIgCAAIABAAIABAAIAAgDIABAAIAAgBIABAAIAAgBIABAAIABABIAAgBIAEAAIAAgBIAEAAIAEgCIAAgDIACgBIAAgBIACgBIgBgBIgCAAIgBgBIgCAAIAAgBIgBgBIgCAAIgBAAIgCgGIAAgDIAAgBIAAgBIACgCIABAAIABgBIAAgDIgBgBIgCAAIAAgDIABAAIAAgDIABgBIgCABIADgCIgBAAIgCgBIgBgBIgBAAIAAgCIgCgBIgCgCIAAgIIgBAAIABgBIAAAAIABAAIAAgBIABAAIAAgBIABgBIAAgBIgBgBIgBAAIAAgBIABgBIgFAAIgBgBIgCAAIgBABIgCAAIAAgFIgBAAIAAgEIACAAIAAABIABAAIAAgBIAEAAIAAgBIABgBIgBAAIgDAAIAAgBIgBABIgBgBIAAgBIgBAAIgBgBIAAgBIgBAAIgBgBIAAgCIgBAAIAAgBIACAAIABgBIABAAIAAACIABABIABgBIADAAIAAgBIgBgBIACAAIABABIAAABIADAAIABgBIgBAAIgBgCIAIAAIABABIACAAIAAABIACACIAAABIABAAIAAACIABAAIAAABIACAAIAAABIAHAAIAAABIABgBIABAAIABgBIABAAIABgBIABAAIABgBIACAAIABgBIABABIAAABIAFgEIAAgBIABAAIABgBIAAAAIAAgBIABAAIAAgBIgBAAIAAgBIABAAIAAgGIABAAIAAgCIABgCIAAgBIACAAIAAABIABAAIABABIAAABIABAAIAAABIACAAIABABIABgBIABAAIAEABIABAAIAAAAIABAAIAAABIABAAIABgBIAAAAIABgBIACAAIACgCIgBgBIgBgCIgBgBIAAgBIACgCIACAAIAAgBIABgBIAAAAIABAAIAAgCIABgBIADAAIAAgBIABAAIAAgBIABAAIABgBIABAAIABAAIACAAIAGAAIABgBIABAAIAAgBIABgBIABgBIABAAIACABIABABIAAABIAGAAIAAABIACAAIAAABIgBABIAAACIABACIAAAAIABAAIgBABIABABIABABIABAAIACABIABABIgBABIAAACIABABIAAABIABAAIAAABIABAAIAAABIACAAIAAADIAAAAIAAADIABAAIABgCIABAAIABACIABAAIAAADIgCACIAAABIABABIAAABIACABIABAAIABABIABABIAAABIACAAIABAAIgBABIgBAAIgBABIAAACIABAAIABACIACABIABABIABACIABABIABACIAAAFIABAAIAAAAIABABIABACIABABIABACIAAAFIABABIAAABIgBAAIAAABIgCAAIgCADIAAAAIAAABIgCAAIgBgBIgDAAIgBABIgCAAIgBgBIgBAAIgBABIABAAIAAABIgBABIAAABIgBADIAAABIgBADIAAABIACACIAAABIAEADIAAABIABAAIAAAAIADACIABABIAAABIgBACIgIAAIAAAAIgFAAIAAAFIgBAAIAAABIAAAAIgFAEIgBAAIAAABIgBAAIgBABIgBAAIAAAAIgBAAIgFAEIAIAEIABAAIAAABIABAAIADABIgCABIgCACIAAACIgBABIAAACIgDAAIAAgBIgBgBIgBgBIAAgBIgBgBIgDAAIAAACIgBAAIAAABIgDAAIAAABIgCAAIgCABIACAAIAAAEIgBAAIAAACIgFAAIAAABIgIALIABAAIAAABIABAAIAAACIgBgBIgBgCIAAACIgEAAIAAgCIgBAAIAAAAIgBAAIgDAAIgBAAIgCAAIgCAAIgBgBIgBABIgCgBIAAABIAAAAIAAAAIgBAAIAAABIgBAAIAAABIgBAAIABABIAAABIgBAAIAAADIgGAAIAAgBIgBAAIgBABIABAAIgBAAIAAABIgBAAIAAABg");
	this.shape_2.setTransform(-0.4,-0.4);

	this.shape_3 = new cjs.Shape();
	this.shape_3.graphics.f("#6C829A").s().p("ABDA0IgBgBIgBAAIgJgEIgCAAIgBgBIgCgBIgBAAIgEgDIgCAAIgBgBIgEgBIgCAAIgDgBIgBgBIgBAAIgBgBIgEAAIAAgBIgBAAIAAgBIgCAAIgBgBIgCAAIgBgBIgBAAIgBgBIgDAAIgBgBIgDAAIgBgBIgCAAIAAABIAAAAIAAgBIgBAAIAAgDIABAAIAAgFIAAAAIAAAAIAAAAIAAgBIABAAIAAgBIACAAIAAABIADAAIAAgBIABAAIAAgGIgBAAIAAgCIgBAAIAAAAIgBAAIAAgBIgBAAIAAgBIgBAAIAAgBIgCAAIAAgCIgBAAIAAgBIgDAAIAAADIgBAAIAAACIgCAAIAAgEIABAAIAAgBIgBAAIABgBIAAgCIgBAAIgBAAIgCAAIAAgBIgEAAIAAABIgDAAIAAAAIAAAAIgBABIAAACIABABIAAAAIAAAEIAAAAIAAABIgBAAIAAgCIgBAAIAAgBIgBAAIAAgDIgDAAIAAgBIgBABIAAABIgCAAIAAACIgBAAIAAABIgCAAIAAgBIgBAAIAAADIgBAAIAAAAIgBAAIAAgCIgBAAIAAgDIgBAAIAAgCIgBgBIgDAAIAAgBIgBAAIAAAAIgCAAIgBgBIgBAAIAAgBIgDAAIAAgBIgDAAIgCAAIgCAAIAAgBIgCAAIgCgBIgCAAIgDgBIgCAAIgBgBIgDAAIgCgBIgFAAIAAAAIADAAIAAgDIABAAIgBgCIgBAAIAAACIgBgCIgBAAIAAgBIABAAIAAgBIgBAAIAAgBIgBAAIAAgBIABAAIAAgBIABAAIABgBIABAAIAAABIABAAIAAACIABAAIAAgBIABAAIAAgEIABAAIAAgBIABAAIAAgEIgBAAIAAAAIABgBIAAgBIABAAIAAABIABAAIAAgBIABAAIAAgBIgBAAIAAgCIABAAIAAgCIABAAIAAgBIABAAIAAgBIABAAIAAAAIABAAIAAgBIACAAIAAgBIABAAIAAgCIABAAIAAgBIADAAIAAABIAAABIABABIAAABIABAAIAAABIACAAIAAgCIABAAIAAgBIACAAIABABIAAABIABAAIAAACIgBABIABABIACAAIAAgBIABgBIABAAIAAACIADAAIAAgBIABAAIAAgBIgBAAIAAgBIgBAAIAAAAIABgBIACAAIAAgBIAAgBIgBAAIABgBIAAgBIABAAIAAABIABAAIAAgBIACAAIAAgBIABAAIAAgBIABAAIAAgBIgBAAIAAgCIABABIABAAIAAgBIAFAAIAAgBIABAAIAAgBIAEAAIAAABIgBABIAAABIgBAAIAAABIABAAIAAABIABAAIAAgBIADAAIAAgBIABAAIAAAAIABAAIAAgBIADAAIAAABIABAAIAAACIABAAIAAgBIAAAAIABgBIAAAAIABAAIAAgBIABAAIAAgBIABgBIAAgCIABAAIAAACIADAAIAAABIABAAIAAABIAEAAIAAgEIABAAIABgBIABAAIAAgBIABAAIAAgBIACAAIAAAAIABAAIAAABIACAAIAAgBIABAAIAAAAIADAAIAAAAIAAAAIAAgBIABAAIAAgBIAGAAIAAABIADAAIAAABIABAAIABAAIgBAAIAAABIADAAIABABIABAAIACABIAAAAIAAgBIABABIABAAIABACIADAAIABABIABAAIABABIAAABIABAAIAEAAIAAABIACAAIABABIAHAAIgBABIAAACIABAAIABABIADAAIACABIAGAAIACACIABACIgDAEIAAABIgDAAIAAABIgCAAIgDABIAAAAIABAAIABABIABAAIABABIABAAIAAABIgBABIABAAIABABIAAABIABAAIABABIAAABIABABIACABIABAAIACAAIACADIgBACIgCAAIgCACIAAABIABAAIAAABIgBAAIgBADIAAABIACADIgBAAIgBAEIABAAIAEAFIABAAIABAAIABABIAAABIACACIABAAIAAADIABAAIAAAEIABABIAAADIgCAAIAAABIgBABIAAABIABAAIgBAAIgBAAIACACIgCABIgBAAIgCABIgBAAIAAgBIgBAAIAAgBIgBAAIAAABIgBgBIgCACIAAABIgBAAIAAACIgBAAIAAACIAAABIgHAAIAAAAIgBABIgBAFIgCADIgBAAIAAACIABAAIAAABgAhGgFIgBgBIACAAIAAABgAhJgGIgBgBIgBAAIgBgBIgDAAIAAgCIgDAAIAAgBIgCAAIgBgBIgBAAIgCgBIgCAAIgBAAIgDAAIAAgBIABAAIAAgBIABAAIAAABIABAAIAAgCIgBAAIAAgBIABgBIAAABIABAAIAAABIABAAIAAABIAEAAIABABIAAgBIABAAIAAABIACAAIAAABIACAAIAAAAIAEAAIAAgBIACAAIAAABIABAAIAAABIgBAAIAAACIABACIABAAIAAABIgBAAIAAABg");
	this.shape_3.setTransform(-32.6,32.1);

	this.timeline.addTween(cjs.Tween.get({}).to({state:[{t:this.shape_3},{t:this.shape_2}]}).wait(1));

	// Capa_4
	this.shape_4 = new cjs.Shape();
	this.shape_4.graphics.f().s("#65653D").ss(0.5,1,1).p("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");
	this.shape_4.setTransform(4.2,0);

	this.timeline.addTween(cjs.Tween.get(this.shape_4).wait(1));

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = new cjs.Rectangle(-80,-59.5,160,119);


(lib.graph_08 = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// Capa_1
	this.shape = new cjs.Shape();
	this.shape.graphics.f().s("#FF3399").ss(0.2,0,0,22.9).p("AprFjITXAAIAArFIzXAAg");

	this.timeline.addTween(cjs.Tween.get(this.shape).wait(1));

	// Capa_2
	this.shape_1 = new cjs.Shape();
	this.shape_1.graphics.f("#FFFF00").s().p("AGGC/IAAgBIgBAAIAAgBIgCAAIgBABIAAABIgBAAIgCgBIgBAAIAAgBIgBAAIgBAAIgBAAIAAgBIAAAAIAAgBIgBAAIAAgBIgBAAIAAgBIgBAAIgBgBIgBAAIgDgDIgBAAIAAgBIgBAAIAAgBIgBAAIAAgBIgBAAIAAgBIgFAAIAAABIAAAAIAAABIgCAAIAAgBIgCAAIAAgCIgDAAIAAgBIABAAIAAgBIACAAIAAABIABAAIAAABIABAAIABgBIAAgDIABAAIAAgBIAAAAIAAAAIABAAIAAgCIABAAIAAgDIgBgBIAAgCIACAAIAAgBIgBAAIAAgBIgBAAIAAgBIgBAAIAAgBIACAAIAAgDIgBAAIAAgCIgBAAIAAgBIAAAAIAAABIgBgBIgEAAIAAABIgCAAIAAACIgBAAIAAABIAEAAIAAgCIABAAIAAABIACAAIAAAEIgBAAIAAABIABAAIAAABIgBAAIAAABIABABIAAABIgBgBIAAABIgCAAIgBABIAFAAIAAABIAAAAIAAACIAAgBIgCAAIABABIgBAAIAAABIgBAAIABABIABAAIAAABIgBAAIAAgBIgDAAIAAABIgDAAIAAgBIgEAAIAAAAIgBAAIAAgBIACAAIAAgCIABAAIAAgCIABAAIAAgBIADAAIAAgBIABAAIAAgCIgBAAIAAgCIgBAAIAAgBIgCAAIAAgBIgEAAIAAgBIgDAAIAAABIgCAAIAAABIgBAAIAAACIgCAAIAAABIgBAAIAAACIACAAIAAgBIACAAIAAACIAAAAIAAABIgDAAIAAABIgCAAIAAgBIgBAAIAAgBIgBAAIAAgBIABAAIAAgBIABAAIAAgBIgBAAIAAgBIgBAAIAAgBIgBAAIAAgDIgDAAIAAgCIgBAAIAAgBIgBAAIAAAAIAAAAIAAgBIgCAAIAAgBIgCAAIAAgBIgBAAIAAgCIgBAAIAAgBIAAAAIAAgBIgCAAIAAgBIgCAAIAAgBIgBAAIgBgBIgBAAIgBgBIgCAAIAAgBIgCAAIAAgCIABAAIAAABIADAAIAAABIADAAIAAABIABAAIAAACIACAAIAAgHIABAAIAAABIABAAIAAgBIABAAIAAABIACAAIAAABIADAAIAAACIgCAAIgBABIAAABIABAAIAAABIACAAIAAADIAAABIAAABIABAAIAAABIABAAIAAABIABABIgBAAIABABIAAAAIABAAIABAAIADAAIAAgBIgBAAIAAgBIADAAIAAgCIABAAIAAABIABAAIAAgBIACAAIgBABIAAABIAFAAIAAgBIABAAIAAABIACAAIAAgBIACAAIAAgDIABAAIAAgBIgBAAIAAgBIgBAAIAAgBIABAAIAAgBIABAAIAAgEIABAAIABgBIAAABIACAAIAAgBIABAAIAAgCIACAAIgBgBIABAAIAAAAIABABIAAACIAEAAIAAgBIABAAIAAABIABABIAAABIgBAAIAAABIACAAIAAgBIABAAIAAABIABAAIAAABIgCAAIAAABIgBAAIAAACIgBAAIAAABIgBAAIAAADIgCAAIAAACIACAAIAAACIAAAAIAAAAIACAAIAAABIABAAIAAABIABAAIAAABIABAAIAAABIABAAIAAAEIgDAAIgBABIADAAIAAADIABAAIAAADIgBAAIAAACIABAAIAAAAIgCAAIAAABIABABIABAAIAAACIACAAIAAABIABAAIABABIABAAIAAABIABAAIAAABIABAAIAAABIABAAIAAABIACAAIAAACIACAAIAAABIABAAIAAABIACAAIAAABIABAAIAAABIACAAIAAABIACAAIAAABIgCAAIAAACgAFyCnIABgBIAAgBIgBAAgAGYCqIAAgCIADAAIAAABIgBAAIAAABgAGHCqIAAgBIgDAAIAAgBIABgBIAAgBIACAAIAAABIADAAIAAABIgCAAIAAACgAF4CoIAAgCIABgBIgBgBIAFAAIAAACIgCAAIAAABIgBAAIAAABgAFDCCIgBAAIgBAAIAAgBIgCAAIABgCIABAAIAAABIABAAIAAgBIABgBIAAABIABAAIABABIAAABIgBAAIAAABgAF3B3IgBAAIAAgBIACAAIAAgBIgBAAIAAgBIADAAIAAADIgBAAIAAABIgBAAIgBABgAEhB1IAAgFIACAAIgBAAIABACIAAgCIABAAIAAADIABABIAAABIgBgBIAAACIgBAAIAAAAgAEiBvIAAgBIABAAIAAABgAFFBmIAAgBIgBAAIAAgBIADAAIAAABIgBAAIAAABgAGLBdIgBgBIgBAAIgBABIgBAAIAAgCIgBAAIAAgBIgBAAIAAgDIABAAIAAABIABAAIABABIAAgBIABAAIAAgBIABAAIAAgBIABAAIAAgBIACAAIAAABIABAAIAAABIgBAAIAAABIAAAAIAAAFgAEYA6IAAAAIgBAAIAAgBIABAAIAAgCIACAAIAAgBIABAAIAAADIgBAAIAAABIgBAAIAAAAgAHEAyIAAgBIgBAAIAAgEIABAAIAAABIAAgBIADAAIgBABIAAABIABAAIAAABIgCAAIAAABIgBAAIAAABgAHSgDIAAgBIgCAAIAAgCIgBAAIAAgCIACAAIAAAAIACAAIAAABIABAAIAAADIgBAAIAAABgAFggHIAAgBIgBAAIAAAAIABgBIACAAIAAgBIABAAIABABIAAACgAHTgNIAAgDIACAAIgBAAIABABIAAAAIAAABIAAAAIAAABgAHTgSIAAgBIgBAAIAAgBIgCAAIAAgBIABAAIAAgDIgBAAIAAgBIgBAAIAAABIgBAAIAAgCIgBAAIAAgBIgEAAIAAgBIAAABIgCAAIAAgBIgCAAIAAgBIgBAAIAAgDIgBAAIAAgBIgBAAIAAABIgBABIgCAAIAAgBIABgBIAAgBIABAAIAAgCIADAAIAAgCIgCAAIAAgBIgBAAIAAgBIgCAAIAAgCIABAAIAAgBIABAAIAAgDIgBAAIAAgBIABAAIAAgCIABAAIAAACIABgCIAAgBIABAAIAAgBIAAAAIAAABIAAABIAAAAIAAAEIAFAAIAAABIAAAAIABAAIAAABIABAAIAAABIgBAAIAAABIACAAIAAABIABAAIAAADIABAAIABABIAAAEIgBAAIABABIAAACIABAAIAAABIgCAAIAAABIABABIAAgBIACAAIABgBIABAAIAAACIgBAAIAAgBIgBABIABAAIAAAAIABAAIAAABIABAAIAAACIABAAIAAgBIAAAAIAAAEIABAAIAAACgAHUgZIAAgBIABAAIAAABgAHUgZgAHSgagAkziNIAAgBIgDAAIAAgBIgBAAIAAgBIgDAAIAAgBIgCAAIAAgBIgBAAIAAgBIABAAIAAgCIACgCIAAgCIgDAAIAAgBIgBAAIAAgBIgCAAIAAgCIgBAAIAAgBIABAAIgCAAIAAgCIABAAIAAgBIgBAAIAAgBIABAAIAAABIABAAIAAgBIgBAAIAAgCIACAAIAAABIABAAIAAACIABAAIAAgCIgCgEIABAAIAAgCIgBAAIAAgBIABAAIAAAAIgBAAIAAgBIgBAAIAAgBIABAAIAAgBIABAAIAAgCIACAAIAAgBIACAAIAAABIABAAIAAgBIABAAIAAAAIABAAIAAABIACAAIgBACIAEAAIAAABIgDAAIgBABIAAAAIAAABIgBAAIAAAAIgBAAIAAACIgBgBIgBAAIAAABIgBAAIAAABIgBAAIAAABIgBABIAAABIABAAIAAgBIABAAIABgBIAAABIABAAIAAABIgBAAIAAACIgBAAIAAACIABAAIAAgBIABgBIAAABIABAAIAAACIgBAAIABABIAAgBIABAAIAAABIABgBIAAABIAAgBIADAAIAAgBIABAAIAAgCIgBAAIAAgBIgDAAIAAgBIAAAAIAAgBIADAAIAAgBIACAAIAAgBIABAAIAAACIAAAAIABABIAAABIABABIABAAIADADIADAAIABABIABAAIAAAAIABAAIAAAFIAAABIAAAAIAAAAIAAAEIgBAAIAAABIgDAAIAAABIgCAAIgBABIgBAAIAAABIgBAAIAAABIgCAAIAAABIgBAAIAAABgAjGieIAAgDIgBAAIAAgBIgCAAIAAgBIACgBIAAABIABAAIAAgBIABABIABAAIAAABIAAAAIAAABIAAAAIAAACIgBAAIAAABgAkeieIAAgCIABAAIAAgCIACAAIAAABIABABIgBAAIAAABIgBAAIAAABgAlfifIAAgBIgEAAIAAgBIgBAAIAAgBIABAAIABgBIAAABIACAAIABABIABAAIABABIABAAIAAABgAlBimIgBAAIAAgBIAAAAIAAgBIABAAIAAgBIABAAIAAAEgAlOipIAAgBIgCAAIAAgBIABAAIAAgBIgDAAIAAgBIABAAIAAgCIADAAIAAACIABAAIAAABIABAAIAAACIABAAIgBAAIABABgAlairIgBgBIgBAAIAAgBIACAAIAAgCIgBAAIgBgBIgBAAIABgBIgBAAIAAgBIABAAIAAABIABAAIAAgCIABAAIAAgBIAAABIABABIAAABIACAAIAAABIABAAIAAADIgBAAIAAACgAnVi6IAAgCIABAAIAAgCIACAAIAAACIAAAAIAAABIgCAAIAAABg");
	this.shape_1.setTransform(-0.1,1.8);

	this.timeline.addTween(cjs.Tween.get(this.shape_1).wait(1));

	// Capa_5
	this.shape_2 = new cjs.Shape();
	this.shape_2.graphics.f().s("#FFFFFF").ss(0.5,1,1).p("AAIg7IAAAEIgEAAIAAABIACAAIAAABIABAAIgBABIAAABIgCAAIAAACIAFAAIAAgBIADAAIAAgBIANAAIABgBIABAAIACgCIAAgBIAFAAIABABIABAAIAAABIABAAIAAgBIAIAAIABgBIACAAIABgBIAAgCIgBAAIAAgDIABAAIAAgBIACAAIAAABIADAAIABABIACAAIAAgBIACAAIAAgBIABAAIAAABIACAAIAAgBIABAAIAAgBIABAAIAAgBIADAAIAAgBIABAAIAAgBIAHAAIAHACIABAAIACABIACABIABAAIADABIABABIABAAIAAACIgBAAIABABIAAABIAAABIgBAAIAAABIgDAAIAAgCIgCAAIgBABIAAADIgCABIAAgBIgBAAIgBACIgBABIgBAAIAAgBIgBABIgCAAIgCADIAAAAIAAACIgBABIgDABIgBABIADAFIACABIAAACIABAAIADACIADAAIAHAGIAGAEIACAAIADACIAEAAIABACIAAgBIABgEIACAAIAAABIABABIABAAIABABIADAAIABABIABAAIAAABIACAAIgBABIAAABIABABIAAgBIABAAIAAABIACAAIABABIACAAIAAgBIABAAIAAABIABAAIAAgDIABAAIAAgBIACABIABABIACAGIACACIABAAIAAABIADABIAAACIAEAAIAAABIACAAIAAABIABAAIgBABIAAABIgBACIgBABIADACIACgBIAAgEIADAAIAAABIACAAIAAgBIABAAIAAgBIACAAIAAABIACAAIAAABIACAAIACgBIAFAAIAAgBIACAAIABABIABACIAAABIADAAIgBgCIABAAIAAABIABAAIABABIABAAIAAABIABABIABAAIAAACIgBABIABABIAAgBIACAAIAAgCIADAAIAAABIABAAIABABIABAAIAAACIgBAAIgBAGIABAFIgBAFIgDACIgGAAIgBAAIgIgEIgBAAIgCACIAAABIABABIAAAAIADAAIAAADIABABIAAABIgBAAIgBACIABAAIgBABIAAACIABAAIgBABIAAABIABAAIABABIAAgBIABgCIABABIAAACIgBAAIAAABIgBAAIAAACIABAAIAAABIABAAIAAABIABABIABAAIAAgBIABAAIAAgBIACAAIAAACIABgBIABAAIgBABIADAAIAAACIACgBIgFAFIAAABIgBgBIgCAAIAAgBIgDAAIAAgBIgBAAIAAABIgCAAIAAgBIgBAAIAAABIgDAAIgBgBIAAgCIABAAIAAgCIgBAAIAAgBIgBABIAAABIgBABIAAgBIgBAAIAAgBIgBAAIAAgBIgBAAIABAFIgTAAIAFADIgDAEIgDACIgDADIgDABIgEgDIgEAGIgBgBIgBAAIAAgBIgBAAIgBgBIgBAAIAAAAIgCAAIAAgBIgCAAIAAgBIgCAAIAAgBIABAAIAAgBIgBAAIAAgBIgBgBIABAAIAAgCIgBAAIAAgBIgBAAIAAgBIAAAAIAAgBIgBAAIAAgBIgBAAIAAgBIgCAAIAAgFIgBAAIAAgBIgBAAIAAgBIgBAAIAAgCIgBAAIAAgCIgBAAIgCgCIAAgBIgBAAIgCgCIgBAAIgDgDIgBgBIgBAAIgBgBIgBAAIgBgBIgBAAIgBgBIgCAAIgBAAIgEAAIAAgBIgBgBIAAgBIgBAAIgBgBIgBAAIAAgBIgCAAIAAgBIgBAAIgBgBIgBAAIAAgBIgBAAIgBgBIgCAAIAAgBIgCAAIAAgBIgCAAIgDgDIgCAAIAAgBIgBAAIgBgBIgCAAIgBgBIgBAAIgCgBIgCAAIgBAAIgEAAIAAgBIgCAAIAAgBIgCAAIAAgBIgCAAIgBgBIgQAAIAAABIgGAAIAAABIgBAAIAAACIgBAAIgBAAIgBACIAAABIgBAAIgCACIgBAAIgCACIAAACIAAABIgBAAIAAABIgCAAIAAABIgCAAIgBABIgBAAIAAABIgBAAIAAABIgCAAIAAABIgCAAIAAABIgDAAIAAgBIgCAAIAAgBIgBAAIAAgBIgDAAIAAgBIgCAAIAAgBIgBAAIgBgBIgEgCIgBAAIgBgBIgCgBIgBAAIAAgBIgBAAIgBgBIgBAAIgBgBIgBAAIgBgBIgCAAIgCgBIgBAAIgBgBIgBAAIgCgBIgCAAIgBAAIgCAAIgBgBIgDAAIAAgBIgEAAIAAgBIgEAAIgBgBIgDAAIAAgBIgCAAIgBgBIgDAAIAAgBIgDAAIAAgBIgDAAIAAgBIgDAAIAAgBIgEAAIAAgBIgCAAIAAAAIgDAAIgBgBIgDAAIgBgBIgIAAIAAgBIgBAAIAAABIAAAAIAAgBIgBAAIAAgBIgEAAIAAgBIgDAAIgBgBIgFAAIAAAAIgDAAIAAgBIgCAAIAAgBIgDAAIAAgBIgGAAIgBgBIgFAAIgBgBIgBABIAAgBIAAAAIAAABIgCAAIAAgBIgCAAIAAgBIgDAAIAAgBIgCAAIAAABIgBAAIAAgBIgDAAIAAACIgBgBIgEAAIAAgBIgCAAIAAgCIgBAAIAAgBIgEAAIgBgBIgBAAIAAACIgBAAIAAgCIgEAAIAAABIgBAAIAAgCIgBAAIgBgBIgEAAIgBgBIAAgDIgBAAIAAgBIgBAAIAAAAIABgBIACAAIAAgCIgEAAIAAgCIABAAIAAgCIgBgBIAAgBIgBAAIAAgDIACAAIABgBIAAgCIADAAIABABIABAAIAAABIABAAIAAACIAEAAIAAgDIABAAIAAgBIABgBIACAAIAAABIACAAIADgBIADAAIAAgBIABAAIAAgBIACACIAAABIABAAIAAABIgBAAIAAADIgBAAIAAABIgBABIAAABIADAAIABABIADAAIAAABIADAAIACADIABAAIABABIABgBIAAACIABgBIAAgBIADAAIAAgCIACAAIABgBIAAgBIgBAAIAAgCIgBAAIAAgCIACAAIAAgBIABAAIAAgBIACAAIAAgBIABAAIAAgBIACAAIABgBIABgCIAAAAIABAAIAAABIABABIABAAIAAgBIADAAIAAgBIAAACIAAAAIAAABIAAAAIAAABIABABIAAAHIABABIADAAIAAgCIAFAAIAAgBIABAAIABgBIABgBIABABIABAAIAAABIABAAIAAABIABAAIAAACIABABIAAAAIAAABIAAADIAAABIABAAIAAABIACAAIAAgCIABAAIACACIACAAIAAgBIADAAIAAgBIACAAIABAAIABAAIACAAIAAAAIABAAIAAgBIABABIABAAIAAgBIgBAAIAAgBIABAAIAAgDIAFAAIABgBIABAAIAAABIABgBIAAgEIgBAAIAAgBIABAAIAAgCIgDAAIgBgBIAAgBIABAAIAAgBIgBAAIAAgCIABAAIAAAAIACAAIAAgBIABAAIAAABIAFAAIAAAAIACAAIABAAIACAAIgBgBIAAgBIAJAAIAAgBIABAAIABgBIAHAAIAAgIIgBAAIAAgBIgBAAIAAgBIABAAIAAgCIgBAAIAAgBIABgBIABAAIAAAAIABAAIAAgBIAJAAIAAgBIABAAIAAABIACAAIAAABIABAAIAAACIADAAIgBABIADAAIAAgBIADAAIAAgCIgBAAIAAAAIgBAAIAAgCIgBAAIAAgFIADAAIABABIADAAIACABIADAAIAAgBIAFAAIAAABIAAgBIABABIAFAAIAAABIADAAIAAABIADAAIAAABIABgBIABAAIABgBIACAAIAAABIACAAIAAgBIABAAIAAABIABAAIAAABIABAAIAAgBIABAAIAAADIABAAIAAAAIgBAAIAAABIgBAAIAAgBIgBAAIAAABg");
	this.shape_2.setTransform(-29.7,-15.2);

	this.shape_3 = new cjs.Shape();
	this.shape_3.graphics.f("rgba(255,255,255,0)").s().p("AB7BDIgBAAIAAgBIgBAAIgBgBIgBAAIAAAAIgCAAIAAgBIgCAAIAAgBIgCAAIAAgBIABAAIAAgBIgBAAIAAgBIgBgBIABAAIAAgCIgBAAIAAgBIgBAAIAAgBIAAAAIAAgBIgBAAIAAgBIgBAAIAAgBIgCAAIAAgFIgBAAIAAgBIgBAAIAAgBIgBAAIAAgCIgBAAIAAgCIgBAAIgCgCIAAgBIgBAAIgCgCIgBAAIgDgDIgBgBIgBAAIgBgBIgBAAIgBgBIgBAAIgBgBIgCAAIgBAAIgEAAIAAgBIgBgBIAAgBIgBAAIgBgBIgBAAIAAgBIgCAAIAAgBIgBAAIgBgBIgBAAIAAgBIgBAAIgBgBIgCAAIAAgBIgCAAIAAgBIgCAAIgDgDIgCAAIAAgBIgBAAIgBgBIgCAAIgBgBIgBAAIgCgBIgCAAIgBAAIgEAAIAAgBIgCAAIAAgBIgCAAIAAgBIgCAAIgBgBIgQAAIAAABIgGAAIAAABIgBAAIAAACIgBAAIgBAAIgBACIAAABIgBAAIgCACIgBAAIgCACIAAACIAAABIgBAAIAAABIgCAAIAAABIgCAAIgBABIgBAAIAAABIgBAAIAAABIgCAAIAAABIgCAAIAAABIgDAAIAAgBIgCAAIAAgBIgBAAIAAgBIgDAAIAAgBIgCAAIAAgBIgBAAIgBgBIgEgCIgBAAIgBgBIgCgBIgBAAIAAgBIgBAAIgBgBIgBAAIgBgBIgBAAIgBgBIgCAAIgCgBIgBAAIgBgBIgBAAIgCgBIgCAAIgBAAIgCAAIgBgBIgDAAIAAgBIgEAAIAAgBIgEAAIgBgBIgDAAIAAgBIgCAAIgBgBIgDAAIAAgBIgDAAIAAgBIgDAAIAAgBIgDAAIAAgBIgEAAIAAgBIgCAAIAAAAIgDAAIgBgBIgDAAIgBgBIgIAAIAAgBIgBAAIAAABIAAAAIAAgBIgBAAIAAgBIgEAAIAAgBIgDAAIgBgBIgFAAIAAAAIgDAAIAAgBIgCAAIAAgBIgDAAIAAgBIgGAAIgBgBIgFAAIgBgBIgBABIAAgBIAAAAIAAABIgCAAIAAgBIgCAAIAAgBIgDAAIAAgBIgCAAIAAABIgBAAIAAgBIgDAAIAAACIgBgBIgEAAIAAgBIgCAAIAAgCIgBAAIAAgBIgEAAIgBgBIgBAAIAAACIgBAAIAAgCIgEAAIAAABIgBAAIAAgCIgBAAIgBgBIgEAAIgBgBIAAgDIgBAAIAAgBIgBAAIAAAAIABgBIACAAIAAgCIgEAAIAAgCIABAAIAAgCIgBgBIAAgBIgBAAIAAgDIACAAIABgBIAAgCIADAAIABABIABAAIAAABIABAAIAAACIAEAAIAAgDIABAAIAAgBIABgBIACAAIAAABIACAAIADgBIADAAIAAgBIABAAIAAgBIACACIAAABIABAAIAAABIgBAAIAAADIgBAAIAAABIgBABIAAABIADAAIABABIADAAIAAABIADAAIACADIABAAIABABIABgBIAAACIABgBIAAgBIADAAIAAgCIACAAIABgBIAAgBIgBAAIAAgCIgBAAIAAgCIACAAIAAgBIABAAIAAgBIACAAIAAgBIABAAIAAgBIACAAIABgBIABgCIAAAAIABAAIAAABIABABIABAAIAAgBIADAAIAAgBIAAACIAAAAIAAABIAAAAIAAABIABABIAAAHIABABIADAAIAAgCIAFAAIAAgBIABAAIABgBIABgBIABABIABAAIAAABIABAAIAAABIABAAIAAACIABABIAAAAIAAABIAAADIAAABIABAAIAAABIACAAIAAgCIABAAIACACIACAAIAAgBIADAAIAAgBIACAAIABAAIABAAIACAAIAAAAIABAAIAAgBIABABIABAAIAAgBIgBAAIAAgBIABAAIAAgDIAFAAIABgBIABAAIAAABIABgBIAAgEIgBAAIAAgBIABAAIAAgCIgDAAIgBgBIAAgBIABAAIAAgBIgBAAIAAgCIABAAIAAAAIACAAIAAgBIABAAIAAABIAFAAIAAAAIACAAIABAAIACAAIgBgBIAAgBIAJAAIAAgBIABAAIABgBIAHAAIAAgIIgBAAIAAgBIgBAAIAAgBIABAAIAAgCIgBAAIAAgBIABgBIABAAIAAAAIABAAIAAgBIAJAAIAAgBIABAAIAAABIACAAIAAABIABAAIAAACIADAAIgBABIADAAIAAgBIADAAIAAgCIgBAAIAAAAIgBAAIAAgCIgBAAIAAgFIADAAIABABIADAAIACABIADAAIAAgBIAFAAIAAABIAAgBIABABIAFAAIAAABIADAAIAAABIADAAIAAABIABgBIABAAIABgBIACAAIAAABIACAAIAAgBIABAAIAAABIABAAIAAABIABAAIAAgBIABAAIAAADIABAAIAAAAIgBAAIAAABIgBAAIAAgBIgBAAIAAABIABAAIAAAEIgEAAIAAABIACAAIAAABIABAAIgBABIAAABIgCAAIAAACIAFAAIAAgBIADAAIAAgBIANAAIABgBIABAAIACgCIAAgBIAFAAIABABIABAAIAAABIABAAIAAgBIAIAAIABgBIACAAIABgBIAAgCIgBAAIAAgDIABAAIAAgBIACAAIAAABIADAAIABABIACAAIAAgBIACAAIAAgBIABAAIAAABIACAAIAAgBIABAAIAAgBIABAAIAAgBIADAAIAAgBIABAAIAAgBIAHAAIAHACIABAAIACABIACABIABAAIADABIABABIABAAIAAACIgBAAIABABIAAABIAAABIgBAAIAAABIgDAAIAAgCIgCAAIgBABIAAADIgCABIAAgBIgBAAIgBACIgBABIgBAAIAAgBIgBABIgCAAIgCADIAAAAIAAACIgBABIgDABIgBABIADAFIACABIAAACIABAAIADACIADAAIAHAGIAGAEIACAAIADACIAEAAIABACIAAgBIABgEIACAAIAAABIABABIABAAIABABIADAAIABABIABAAIAAABIACAAIgBABIAAABIABABIAAgBIABAAIAAABIACAAIABABIACAAIAAgBIABAAIAAABIABAAIAAgDIABAAIAAgBIACABIABABIACAGIACACIABAAIAAABIADABIAAACIAEAAIAAABIACAAIAAABIABAAIgBABIAAABIgBACIgBABIADACIACgBIAAgEIADAAIAAABIACAAIAAgBIABAAIAAgBIACAAIAAABIACAAIAAABIACAAIACgBIAFAAIAAgBIACAAIABABIABACIAAABIADAAIgBgCIABAAIAAABIABAAIABABIABAAIAAABIABABIABAAIAAACIgBABIABABIAAgBIACAAIAAgCIADAAIAAABIABAAIABABIABAAIAAACIgBAAIgBAGIABAFIgBAFIgDACIgGAAIgBAAIgIgEIgBAAIgCACIAAABIABABIAAAAIADAAIAAADIABABIAAABIgBAAIgBACIABAAIgBABIAAACIABAAIgBABIAAABIABAAIABABIAAgBIABgCIABABIAAACIgBAAIAAABIgBAAIAAACIABAAIAAABIABAAIAAABIABABIABAAIAAgBIABAAIAAgBIACAAIAAACIABgBIABAAIgBABIADAAIAAACIACgBIgFAFIAAABIgBgBIgCAAIAAgBIgDAAIAAgBIgBAAIAAABIgCAAIAAgBIgBAAIAAABIgDAAIgBgBIAAgCIABAAIAAgCIgBAAIAAgBIgBABIAAABIgBABIAAgBIgBAAIAAgBIgBAAIAAgBIgBAAIABAFIgTAAIAFADIgDAEIgDACIgDADIgDABIgEgDIgEAGg");
	this.shape_3.setTransform(-29.7,-15.2);

	this.timeline.addTween(cjs.Tween.get({}).to({state:[{t:this.shape_3},{t:this.shape_2}]}).wait(1));

	// Capa_3
	this.shape_4 = new cjs.Shape();
	this.shape_4.graphics.f("#394C64").s().p("ABOBuIAAgBIgEAAIgBgBIgCAAIgBgBIgBAAIgBgBIgCAAIgCgBIgBAAIgCAAIgBAAIgBgBIgBAAIAAgBIgDAAIgBgBIgBAAIgBgCIAAAAIgBgBIgBAAIgBgBIgBAAIAAgBIgCAAIAAgBIgCAAIgBAAIgBAAIAAgBIgBAAIgBgBIAAAAIgCgBIgBAAIAAgBIgBAAIgBgBIgBAAIAAgBIAAAAIAAgBIgBAAIAAgBIgBAAIAAAAIgBAAIgBgBIgBAAIgDgDIgBAAIAAgCIgBAAIAAgBIgBAAIAAgBIgBAAIAAgBIgFAAIAAABIgBAAIAAABIgBAAIAAgBIgCAAIAAgBIgDAAIAAgBIABAAIAAgBIACAAIAAABIABAAIAAABIABAAIABgBIAAgDIgBAAIAAgBIgDAAIAAABIgDAAIAAgBIgEAAIAAgBIgBAAIAAgBIACAAIAAgCIABAAIAAgBIABAAIAAgBIADAAIAAgBIABAAIAAgDIgBAAIAAgCIgBAAIAAgBIgCAAIAAgBIgEAAIAAAAIgDAAIAAAAIgBAAIAAABIgBAAIAAACIgCAAIAAABIgBAAIAAADIACAAIAAgBIACAAIAAACIAAAAIAAABIgDAAIAAAAIgCAAIAAAAIgBAAIAAgBIgBAAIAAgBIABAAIAAgBIABAAIAAgCIgBAAIAAgBIgBAAIAAgBIgBAAIAAgCIgDAAIAAgCIgBAAIAAgBIgBAAIAAgBIAAAAIAAgBIgCAAIAAgBIgCAAIAAgBIgBAAIAAgCIgBAAIAAAAIAAAAIAAgBIgCAAIAAgBIgCAAIAAgBIgBAAIgBgCIgBAAIgBgBIgCAAIAAgBIgCAAIAAgBIgEAAIgBAAIgDgBIgCgBIgBgBIgDAAIgBgBIgBAAIgBgBIgDAAIgBgBIgDAAIAAgBIgDAAIAAgBIgGAAIAAgBIgCAAIgBgBIgCAAIgJgFIgBAAIgDgBIgHgDIgBAAIgBAAIgCAAIgBgBIABAAIAAgBIgBAAIAAgBIgCAAIAAgCIABAAIAAgBIgBAAIAAgBIgDAAIAAgBIgCAAIAAgBIgCAAIAAgBIgDAAIAAABIgBAAIAAgCIgDAAIAAgBIgBAAIAAgDIgBAAIAAgDIgBAAIAAgBIgCAAIAAgCIABgBIgBAAIgBgBIABAAIAAgBIgBAAIAAgCIABAAIgBgBIABgBIgBAAIAAgBIgCAAIAAgCIACgCIgBAAIAAgBIACAAIAAgBIABgBIABAAIAAABIABgBIgBgBIAAgCIABAAIAAgDIABAAIACgCIAAAAIgBgBIgBAAIAAgBIACAAIAAABIADAAIAAgBIAGAAIgBABIAEgCIABgCIAAgBIAEAAIgDgCIgBAAIgFgDIABgBIADgFIAEgDIABgDIgCAAIAAgCIgBAAIAAgBIABAAIAAgBIACAAIAAAAIABgBIAAgBIAAgBIAAgBIgBAAIABgFIACgFIgCgEIAfgQIgOgMIAHgQIAAABIAEAAIAGAFIAAADIABAAIABAAIABAAIAAABIACACIABAEIAAABIADAAIAFgBIADAHIAKAMIACADIADADIAAABIABABIABAAIABABIACAAIAAAAIABAAIAAABIAAAAIAAABIAAAAIAAABIAAAGIABAAIgBAAIABAAIAAABIABAAIAAACIABAAIABgBIAAABIACAAIAAABIADAAIAAABIACAAIAAABIABAAIAAgCIABAAIAAgBIABgBIABgBIAAgCIABABIAAgBIABAAIAAABIABAAIAAgBIABAAIAAABIAAAAIAAABIAHAAIADgDIAGABIAAAAIgBADIgBADIgCACIgBABIACAEIABAAIACADIAAADIAAAAIADACIAFAIIAQAAIAAgCIAHABIAAgBIABgBIAAgHIABgDIAAgDIgBAAIAAgCIABAAIAAABIABABIACAAIADgBIABAAIAAABIAEAAIAAgBIAEAAIAAACIABAAIAAACIgDAAIAAABIABAAIAAABIACAAIAAABIgCAAIABABIAAABIABAAIAAABIACAAIAAgBIABAAIAAAEIABAAIAAgBIACAAIAAABIABAAIAAgCIgBAAIAAgCIABAAIAAACIABAAIAAABIABAAIAAABIgBAAIAAACIABAAIAAABIACAAIAAACIgCABIAEAAIAAgCIADAAIAAABIABAAIAAABIABAAIAAgBIACAAIAAACIABAAIAAADIgBAAIAAACIABAAIAAAAIgCADIADAAIAEABIAEAAIgBABIAAABIAAADIAAAAIAAAAIABAAIABABIABAAIAAAFIgBAAIAAADIABAAIAAAAIABABIAAABIABABIAAACIgBAAIAAABIgBAAIAAgBIgCAAIgBABIAAABIgCAAIAAABIgBAAIAAABIABABIACAAIAAABIAAABIAAADIABABIgBAAIAAABIgDAAIgBgBIgBAAIAAABIAAAAIAAAAIgBAAIAAAAIgBAAIAAgBIgDAAIgBABIgBAAIgBgBIAAABIgBAAIAAAEIgBAAIAAABIABABIAAADIACAAIAAAAIABAAIAAABIABAAIAAABIABAAIABABIAAABIACAAIAAACIABgCIAFACIAIgEIAEAAIAAgCIABgBIABgBIACgBIACABIACAAIAAACIACAAIABABIABgBIABADIAAABIgBADIgBABIgBAAIAAABIgBAAIAAAAIgCAAIgBACIAAAEIAAAAIgCABIgFAAIAAABIgBAAIAAABIgCAAIAEAJIAAAGIAAAEIgDAGIgEAEIABAAIAAABIgBADIAAABIgCgCIgBAAIAAgBIgBAAIAAABIgBAAIAAABIAAAAIAAABIgCAAIAAABIgBAAIgBABIAAgCIgBAAIAAABIgBAAIgBABIAAABIgDAAIAAAAIgBABIgBAAIADACIAAADIgDAAIAAACIgBAAIAAABIgBAAIAAABIgBAAIAAABIgBAAIgBABIgBAAIAAADIABABIgBAAIAAABIABAAIAAABIABAAIABABIACAAIAAACIABAAIAAACIgBAAIAAAEIgBABIAAADg");
	this.shape_4.setTransform(34.4,11.5);

	this.shape_5 = new cjs.Shape();
	this.shape_5.graphics.f("#6C829A").s().p("AgXA+IgEgHIgDgDIgBAAIAAgDIgCgCIgBAAIgCgFIABgBIACgCIABgCIACgEIgBAAIgGgBIgDAEIgHAAIAAgCIgBAAIAAgBIgBAAIAAABIgBAAIAAgBIgBAAIAAABIgBgBIAAADIgBABIgBABIAAABIgBAAIAAABIgBAAIAAgBIgCAAIAAAAIgDAAIAAgBIgBAAIAAgBIgBABIgBAAIAAgCIgBAAIAAgCIgBAAIABAAIgBAAIAAgFIgBgBIABAAIAAgBIgBAAIAAgBIgBAAIAAgBIgCAAIgBgBIgBAAIgBgBIAAgBIgDgCIgCgEIgKgMIgDgGIgEgCIAAgBIABgBIAAgBIABAAIABgBIAAgCIgBAAIAAgBIgBAAIACgDIAFAAIAAAAIABgBIABAAIAAgBIABAAIABgGIABAAIAAgBIABAAIABgCIAAABIABABIABAAIABgBIABAAIACABIADABIACgCIABABIACgDIABgCIABgCIABgBIABAAIABgBIABAAIAAACIABgBIABABIAAgBIAEAAIAAABIADAAIAAgBIAFAAIgBgBIAAAAIABAAIAAgCIABgBIgBAAIAAgDIgBAAIAAgBIgBAAIAAgBIgBAAIAAgBIABAAIAAgBIgBgBIAGAAIADgBIACgDIABAAIAAABIgBACIABAEIAAACIgCAGIADADIABABIABACIABAGIACgEIACACIABAAIAAgBIADAAIAAgBIAHAAIgBgCIADgBIADgCIABAAIACgBIABgCIACgBIABgCIACgCIAAgEIgBgBIAAgBIABAAIAAgCIABgBIABAAIAAgBIADAAIAAgBIAFAAIABABIABAAIABABIABAAIAAgDIAAAAIAAgGIABAAIADAAIACAAIADAAIAAACIABABIAAABIADAAIABABIACAAIAAAAIACAAIAAAAIgDgCIAAgDIgCAAIACgBIABgCIACAAIABABIAIAAIAAgBIgBAAIAAgBIABAAIACABIADgBIABAAIAAAAIAFABIAJgCIABAAIAAgBIABABIACgBIADABIAAABIAAABIAHACIACABIAAADIADAAIABgBIABAAIAAABIACACIAAAAIABABIABACIgBABIAAABIABABIgCACIABAAIAFABIABABIAAADIABACIABABIAAABIACgBIAAgBIABAAIAAACIABAAIAAABIADAAIgDADIgCAAIAAABIgBAAIAAADIABAAIAAABIABAAIAAABIgDgBIgCABIgBAAIgBgBIgBABIgCAAIABABIAAADIABACIgCABIADACIgBAAIgCAAIAAAAIAAAAIAAABIABAAIAAACIgBAAIAAABIgCAAIAAABIABABIAAABIgBABIgBAAIAAABIACAAIAAABIgBAAIAAACIgBAAIABABIgBAAIAAAAIABABIAAABIABAAIgCACIgCABIAAABIgCAAIAAACIADACIAAABIABAAIgCABIgBABIAAABIgDAAIAAABIgCACIADAAIAAADIgBgBIAAACIABAAIAAABIgBAAIgCACIABAAIgBABIABAAIAAABIABAAIABABIAAABIABAAIgBABIgBAAIAAABIgBABIABAAIgCACIAAABIADgBIAAACIACACIgBABIgCACIABAAIABABIgDAAIAAAFIACAGIgBADIAAABIgHAAIAAABIgCAAIAAABIgBAAIAAgBIgBAAIAAgEIgBAAIAAAAIgCAAIgBAAIAAAAIgBAAIAAAAIgBAAIAAACIgBAAIAAABIgBAAIAAACIgCAAIgEgBIgCgCIgDgCIgEAAIgFgBIgBgCIgBgBIgEADIAAABIgCAAIAAAEIgBAAIAAgBIgBAAIAAACIABAAIAAABIgBAAIAAgBIgDAAIAAABIgBAAIAAgDIgBAAIAAABIgCAAIAAgBIgBAAIAAgBIgBgCIACAAIAAgBIgCAAIAAgBIgBAAIAAgBIADAAIAAgBIgBAAIAAgCIgEAAIAAABIgDAAIAAgBIgBAAIgEABIgCAAIgBgBIAAgBIgBAAIAAACIABAAIAAACIgBADIAAAHIAAABIAAABIgHgBIAAACg");
	this.shape_5.setTransform(39.1,2.4);

	this.timeline.addTween(cjs.Tween.get({}).to({state:[{t:this.shape_5},{t:this.shape_4}]}).wait(1));

	// Capa_4
	this.shape_6 = new cjs.Shape();
	this.shape_6.graphics.f().s("#65653D").ss(0.5,1,1).p("AGAk2QAAABgDAKQgDAKgLAGQgGAEgHABQgJABgDABQgJACgEAFQgFAFgGADQgSgQgDAEQgJATgLAIQgDACgYASQgSAPgFACQgVgFAAgSQABgTgIgBQgLABgBgBQAAAAgBgRQAAgMgDABQgEACgHgMIAMgUIhcAAQADAqAFAJQADAFAgAWQATAMgaAQQgHgFgCgDQgCgDgIgEQgHgEgLgJQgOgMgLAFQgNAHgLABQgQgTgDgBQgIACgUAAQgFAAgXgFQgPgEgRAFQgPAGgIACQgMAEgOgCQgSgCgGgJQgKgRgEgDQgZgBgLABQgUADgNAPQAEBKgFAGQgEAEgRADQgaAGgSAGQgLADgEAIQgDAHgBAOQgBAUAFADQAIAGACAGQAOgLAPACQALACAMAGQAHAEAPAHQAUAKADAFQALATAAAAQACACARAMQAIAGABARQAFABACAAQABAAADACIAEADQAFAEAPADQANACAFAHIADANIgBAEQALADAZAKQAbAKAHAFIAbAVQAJAHACADQAFAGgDAIQANABBvAmQBnAjAdAMQAQAGAbAIQAVAIAIASQAKgFgEgDQAAAAAKABIgGALIAJAGQAFACAWANQAQAKAOADQAMADAkABQAwAFBIAVQAOAEAYAKIABAAIAAnPQgMgCgHgGQgFgEABAAQAAgCgFgGQgJgKgDAGQgBAAgDgZQgBgDAAgDQAAgCgHgKQgKgNgIAAQgcAAgLgCQgdgEgahEIACgEAGLk2IgLAAIjIAAAJsjoIAAhOIiiAAIgiAAIgTAAIACAEQgHgDgFgBAHIkyQgMAEgUgIAJsiYIAAhQIgsAfAGVk2IgKAAABck2IrHAAIAACIIAsAOQADABAMABQAKACAGACQAJACAxAVQAPAHANADQAdAFABAAQA+ANA7AZQAGgEAJgI");
	this.shape_6.setTransform(0,-4.4);

	this.timeline.addTween(cjs.Tween.get(this.shape_6).wait(1));

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = new cjs.Rectangle(-63,-36.4,126,73);


(lib.graph_07 = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// Capa_1
	this.shape = new cjs.Shape();
	this.shape.graphics.f().s("#FF3399").ss(0.2,0,0,22.9).p("Ao+IwIR9AAIAAxfIx9AAg");

	this.timeline.addTween(cjs.Tween.get(this.shape).wait(1));

	// Capa_2
	this.shape_1 = new cjs.Shape();
	this.shape_1.graphics.f("#FFFF00").s().p("AAYGJIgBgBIACAAIAAABgAAWGJIAAgBIgBAAIAAgBIgBAAIAAgBIABAAIAAgBIgBAAIgBgBIAAADIgCAAIAAgBIgDAAIAAABIgBAAIAAABIgCAAIAAgBIABAAIAAgBIgCAAIAAgBIABAAIAAgBIABAAIAAgBIgBAAIAAgBIgBAAIAAgCIABAAIAAABIABAAIAAgBIABAAIAAgCIABAAIAAgBIABAAIAAAAIABAAIAAgBIABAAIAAgCIABAAIAAgCIABgBIABAAIAAABIABAAIAAACIABAAIABABIABAAIAAgBIABAAIAAgCIABAAIAAAEIABAAIAAAGIgCAAIgBABIABABIAAACIgBAAIAAABIgBAAIAAABIAAABgAjFFgIAAgBIgBAAIAAABIgBAAIAAgBIgBAAIAAgBIgBAAIAAgCIAEAAIAAABIABABIABABIAAABgAGGFTIAAgCIABAAIAAgBIABgBIAAABIACAAIAAABIgBAAIAAABIgBAAIAAABgAjYFQIAAgBIgBAAIABgBIgCAAIAAgCIgBAAIAAgBIgCAAIAAgBIABAAIAAgBIgCAAIAAgBIgCAAIAAAAIgBAAIAAgBIABAAIAAgBIgFAAIAAgFIgBAAIABAAIABAAIAAgCIADAAIAAgDIACAAIAAgBIABAAIABgBIACAAIAAABIACAAIABABIgBAAIABABIAAABIABAAIAAABIABACIABAAIgCAAIAAABIgBAAIAAADIABAAIAAACIABAAIAAABIABAAIAAAAIgBABIAAABIACAAIABABIAAABIgDAAIAAAEIgBAAIAAABgAjUFKIAAgBIACAAIAAABgAF3FIIAAgDIgBAAIAAgDIABAAIAAACIABAAIAAACIADAAIAAABIgBAAIAAABgAFvFBIAAgBIgBABIAAgBIgDgDIgBAAIgBABIgCAAIAAgBIgBAAIgBgBIgBAAIAAABIABAAIAAABIgCAAIgBgBIgBAAIAAgBIgBAAIAAgEIgBAAIAAgBIABAAIAAgBIABAAIAAgBIgBAAIAAgBIgCAAIAAgCIACAAIAAgCIACAAIAAgBIAAAAIAAABIABAAIAAgBIABAAIAAgBIABgBIACAAIAAgBIgBAAIAAgFIABAAIAAABIABAAIAAADIABAAIAAACIABAAIAAACIABAAIgBAAIAAAEIABAAIAAgBIACAAIAAACIABAAIAAgBIACAAIAAACIABAAIAAACIACAAIAAABIABAAIAAgBIAAAAIABgBIgBAAIAAgBIABAAIAAABIADAAIgBACIgBABIgBAAIAAABIABAAIAAABIgBAAIAAADIgBAAIAAgBIAAAAIAAgBIgCAAIAAABIgEAAIABABIABAAIAAADgAEWE+IAAgBIgDAAIAAgBIACAAIAAgBIABAAIAAABIABAAIAAACgABXE+IgBgBIAAABIgBgBIAAgBIgBAAIAAgBIABAAIAAgBIABAAIgBgBIACAAIAAABIABAAIAAAEgAEWE7IAAgBIABAAIAAABgAEWE7gAFHE6IAAgCIgBAAIAAgBIgBAAIAAgBIABAAIAAgBIACAAIAAABIABAAIAAACIgBAAIAAACgAjGE4IAAgBIACAAIAAgBIABAAIAAAAIACAAIAAACgAh9E3IAAgBIACAAIAAABgAFFE0IAAgBIgCAAIAAgBIgCAAIAAgCIACAAIAAgBIACAAIAAABIACAAIAAADIgBAAIAAABgAiHEzIAAgEIgDAAIAAgBIABAAIAAgBIgBAAIAAgBIACAAIAAgBIgCAAIAAgCIABAAIAAgBIAFAAIgBABIACAAIAAgBIABAAIAAABIACAAIAAABIABAAIABABIgBAAIAAABIgBAAIAAABIgBAAIAAABIgCAAIAAABIgDAAIAAABIABAAIgBACIAAABgACMEyIAAgDIgDAAIAAAAIAAAAIAAgBIAAAAIAAgBIACAAIAAgBIgBAAIABgBIABAAIAAABIAAABIAEAAIAAABIgBAAIAAABIgBAAIAAAAIgBAAIAAADgAFPEvIAAgBIADAAIAAABIABAAIAAAAgAF/EuIAAgEIACAAIAAgBIABAAIAAACIgCAAIAAADgAEAEuIAAgDIACAAIAAABIgBAAIAAACgAD+EtIAAgBIABAAIAAACgACMEsIABgBIAAABgAB+EqIAAgBIABAAIAAgBIABAAIAAgBIABAAIAAADgAFpEoIAAgBIABgBIAAABIABAAIABgBIAAABIgBABIgBAAIAAABgAENEkIABgBIABAAIAAAAIABAAIAAAAIADAAIAAABgACNEkIAAgBIgBAAIABAAIgBAAIAAgBIABAAIAAgEIADAAIAAgBIABAAIAAADIgBAAIAAADIgBgBIAAABIgBAAIAAABgAA8EkIAAgBIgBAAIAAABIgBAAIAAgBIABAAIAAgBIABABIAAgBIABAAIAAABIACAAIAAABgAFjEjIAAgBIgBAAIAAgBIABAAIABABIAAgBIACAAIAAABIACAAIAAABgABREjIAAgBIgCAAIAAgCIgBAAIAAgCIgBAAIAAgBIgBAAIAAAAIADAAIAAgBIgCAAIAAgBIADAAIAAgBIACAAIAAABIABAAIAAABIAAAAIAAgBIABAAIAAgBIADAAIAAACIABgBIAAAFIgBAAIAAABIACAAIAAABIgCAAIAAABgAB9EgIAAgDIABAAIAAADgAB8EdIgBgBIgCAAIAAgCIABAAIAAgBIgBAAIAAgBIgDAAIAAABIgBAAIAAgBIABgBIAAgBIgCAAIAAgBIgBAAIAAgBIgFAAIAAgBIACAAIAAgBIgBAAIAAgBIABAAIAAgCIABAAIgBgBIgBAAIAAgEIABAAIgBAAIgBAAIAAgBIgCAAIABgBIAAgBIgBAAIAAgBIACAAIAAABIACAAIAAgBIABABIAFAAIAAABIABAAIAAgBIAAgBIAAgBIABAAIAAgBIABAAIABgBIABAAIAAgBIABAAIAAgBIACAAIgBABIAAAGIABAAIAAgBIABAAIAAgBIADAAIAAABIgBAAIAAACIACAAIAAgBIABAAIAAABIADAAIACABIAAAAIAAABIgDAAIABADIAAADIABAAIAAACIgBABIgBAAIAAACIgBAAIAAABIgBABIgBAAIAAgBIgCACIAAgBIgBAAIAAAFgAFaEZIABAAIAAgBIABAAIAAgBIgBgBIACAAIAAAEIgBABgABvEaIAAgBIABAAIAAgBIABAAIAAgBIABABIAAABIABABgABHEWIgBgBIgCAAIAAgDIAFAAIAAAAIACAAIAAABIABAAIAAABIABABIgBAAIAAABgABoEVIAAgBIgBABIAAgBIgBAAIAAgCIABAAIAAABIADAAIAAACgAA1EVIAAgBIgBgBIAAgBIgBAAIAAAAIgBAAIgBAAIABgBIgBAAIAAgBIgBAAIAAgBIADAAIAAgBIABAAIAAABIABAAIAAACIABAAIAAABIABAAIAAACIgBAAIAAABgADkETIAAgBIgDAAIAAAAIgCAAIAAgBIgBAAIAAgCIgBAAIAAgBIgBgCIABAAIgBgBIAAgBIABAAIABgBIACABIAAAAIABAAIAAAAIACAAIAAgBIgBAAIAAgDIACAAIAAABIABgBIADAAIAAACIABAAIABABIAAABIABAAIAAgBIABgBIgCAAIAAgBIACAAIAAgEIABAAIAAgBIgCAAIAAgBIgBAAIAAgCIgDAAIAAAAIgBAAIAAAAIgDAAIAAgFIACAAIAAgCIgBAAIgBAAIAAgBIAAAAIAAgBIgBAAIAAgBIgCAAIAAADIgBAAIAAAAIgBAAIAAAAIgBAAIAAgBIgBAAIAAgBIgBgBIAAgBIABAAIAAgBIABAAIAAgDIgBAAIAAgCIABAAIAAgBIgBgBIAAgBIABAAIABgBIACAAIgBABIABABIABAAIAAgBIABABIAAgBIABAAIAAABIABAAIAAgCIgBgCIAAAAIAAgBIgBAAIAAgBIgBAAIAAAAIgBAAIAAgBIABAAIAAgBIACAAIAAABIABAAIAAABIgBAAIABAAIAAABIACAAIAAADIABAAIAAACIABAAIAAgBIACAAIAAgDIABAAIAAgBIACAAIAAABIgBAAIAAACIgBABIAAABIgBAAIAAAEIABABIABAAIABABIABABIAAgCIgBgBIAAgCIACAAIAAgBIABAAIAAgCIADAAIABABIAEAAIAAgCIABAAIAAABIABAAIgBABIAAABIgBAAIAAABIgBAAIAAABIgBAAIAAABIgCAAIAAABIABAAIAAABIADAAIgBABIgBAAIAAABIgBAAIAAACIABAAIABABIADAAIAAABIAEAAIAAgCIABAAIAAgBIADAAIABgBIABAAIAAAEIACAAIAAgBIABAAIAAgBIABAAIAAgBIACAAIAAABIgBAAIAAABIABAAIAAABIgBAAIgBAAIgBABIAAABIgBAAIAAACIgDAAIAAgCIgBAAIAAAEIABAAIAAABIgDAAIAAAAIgBAAIAAABIgBAAIAAADIgBAAIAAABIABAAIAAAEIgCAAIAAABIgBAAIAAABIgBAAIgBAAIAAABIgBAAIAAgBIgBAAIAAABIgBAAIAAABIgBAAIAAACIgCAAIAAABIgBAAIAAABIgBAAIAAgBIgBAAIAAACIgBAAIAAgBIgBABIAAgCIgBAAIAAABIgBABIABAAIAAABIgCAAIAAgEIgCAAIAAACIgCAAIAAABIABABIAAAAIgBABgADvESIAAAAIABAAIAAAAgAAjERIgBABIgCAAIAAgBIgBAAIAAgBIABAAIAAgBIABgBIAAgCIACAAIAAgBIABAAIABABIACACIAAABIgBAAIAAACIgBAAIgBABgAAMERIAAgBIgCAAIAAgBIAAAAIAAgBIABAAIAAgEIgBAAIAAgBIAAAAIAAgCIgCAAIAAgDIgBAAIAAgCIgBAAIAAgBIABAAIAAgCIABAAIABAAIAAAAIABAAIAAAAIAAAAIAAAAIABAAIABAAIACAAIAAgBIgCAAIAAgBIACAAIAAgBIAFAAIABgCIACAAIAAACIABAAIABABIAAgBIABAAIAAABIACAAIAAACIgBAAIAAABIgCAAIAAABIACAAIgBABIgBAAIAAABIABABIgBAAIAAABIABAAIAAABIABAAIABABIAAACIgCAAIAAgBIgBABIgCAAIAAgCIgDAAIAAADIgBAAIAAAAIABAAIgBABIgBAAIAAABIgCAAIgBACIAAACIgBABgADXEQIAAgBIABAAIAAgBIACAAIABABIgBAAIAAABgAFaELIAAgBIgBAAIAAAAIgBAAIAAgBIABAAIAAgCIABAAIAAADIABAAIAAABgABlEKIAAgBIAAAAIAAgBIAAAAIABgBIABAAIAAABIgBAAIAAACgAEdEIIAAgCIgBAAIAAgBIABAAIAAgBIABABIACAAIAAACIgCAAIAAABgAEHEGIAAgCIgBAAIAAgBIABAAIAAABIABAAIAAABIgBAAIAAABgABaEGIAAgBIAEAAIABABgAgNEGIAAgCIgBAAIAAgBIABAAIAAgBIABAAIAAABIACAAIAAACIgBgBIAAABIgBAAIAAABgACNEFIAAgBIgBAAIAAgBIABAAIAAgCIABAAIAAABIACAAIAAgBIABAAIAAADIgBABgAgEEEIAAgBIgBAAIAAgBIABAAIAAgCIABAAIAAAEgAEbEDIAAgBIgCAAIAAgCIABABIAAAAIAAgBIABABIABAAIABABIgBAAIAAABgAB1ECIAAgBIgBAAIAAgBIADAAIAAABIgBAAIAAABgAAhEAIAAgDIABABIAAgCIABAAIAAABIAEAAIAAABIgCAAIgBABIgBAAIAAAAIgBAAIAAABgAgZD/IABgBIgBAAIAAgBIgBAAIAAgBIABgCIAAACIABAAIABABIABAAIAAACgAggD+IAAABIgCAAIAAgBIABAAIAAgBIACAAIAAACgACAD+IAAgCIACAAIAAABIABAAIAAABgACKD4IAAgBIgBAAIAAgBIAAAAIAAgDIAAAAIAAgBIACAAIAAgBIABAAIAAACIABAAIAAABIgBAAIAAAEIABAAIAAAAgAgID4IAAgBIABAAIAAABgAEUD4IAAgBIABAAIAAABgAEUD2IAAgCIgDAAIAAABIgBAAIAAABIgBAAIAAgDIAGAAIAAABIABAAIAAABIABAAIAAABIgCAAIAAABgAEaD2IAAgBIACAAIAAABgAAID2IAAgEIACAAIAAgBIAAAAIAAABIAAABIAAACIgBAAIAAABgAgZDyIAAgBIAAAAIAAgBIAAAAIAAgBIgBAAIAAgBIgDAAIAAABIgBAAIgBAAIgCgBIAAABIgBAAIAAgBIgBABIABABIgBAAIAAgBIgBABIgCAAIAAABIgBAAIAAgDIABAAIABAAIAAAAIABAAIAAgBIgDAAIAAgFIABAAIAAgCIABAAIAAgBIABgBIAAgCIABAAIAAgBIgBAAIAAgBIABAAIAAgCIABgBIgBAAIAAgBIABAAIAAgDIgCAAIAAgDIAEAAIAAACIABAAIAAACIgBAAIAAABIADAAIAAAAIACAAIAAgBIACAAIAAABIAAABIAAgBIABAAIAAgBIABAAIAAABIgBAAIAAABIABABIgBAAIABABIABABIAAACIgBAAIAAABIABABIAAgBIABAAIAAgBIACAAIAAABIABAAIABgBIABABIAAABIABAAIAAABIABAAIAAABIABAAIAAABIABAAIAAAGIABAAIAAABIgBAAIAAABIgIAAIAAAAIgBAAIAAABIgBAAIAAABIgBAAIAAABIgBABgAgfDwIABgBIAAABgAEDDuIgBAAIAAgDIADAAIAAABIgCAAIAAACIABAAIAAABgADTDuIgBgBIgBAAIgBgBIABAAIABgBIAAgDIABAAIAAgBIABABIAAACIABAAIAAABIgBAAIAAADgAhADtIAAgCIgBAAIABgBIAAgCIABAAIAAACIABAAIAAgCIABAAIAAAFgACPDqIgCAAIgCACIAAgBIgBAAIABgBIAAgCIACAAIAAgBIgBAAIAAgBIgBAAIAAgBIAFAAIAAgBIgBAAIAAgBIACAAIAAABIABAAIgBABIAAABIABAAIAAABIgBAAIAAAEIgBAAIgBABgAg9DsIAAgCIABAAIAAgCIABAAIABACIAAACgAEeDrIAAgDIABAAIAAgBIACAAIgBABIAAACIABAAIgBABgAgvDmIAAAAIABAAIAAgCIABgBIAAgBIABAAIAAgCIADAAIAAACIABAAIAAAEIgBAAIAAgCIgBAAIAAABIgBAAIAAABIgBAAIgBAAgAgFDmIABgBIAAgBIABAAIAAgBIABgBIAAgBIgBAAIAAgBIABAAIAAABIABAAIAAADIgBAAIAAABIgBABgAgmDlIAAgBIABAAIAAABgADjDjIAAgBIgBAAIgBABIgBAAIAAgCIgBAAIgBABIAAgBIgCAAIAAgBIABgBIgBgBIAAgCIABAAIAAABIABAAIAAABIACAAIAAgEIADAAIABgBIABAAIAAgBIgBAAIAAgCIgCAAIgBgBIACAAIAAgBIgDAAIACgCIAAgBIABAAIAAABIABAAIAAgBIACAAIAAAEIgBAAIAAADIABAAIAAAGIgBAAIABABIAAADIgDAAIAAABgACJDjIAAgBIABgBIAAgNIABAAIAAAAIABgBIABAAIAAABIgBAAIAAACIABAAIAAACIgBABIACAAIAAgBIABABIAAABIgBAAIAAAGIgBAAIgBABIgBAAIABABIgBAAIAAABgAEZDgIAAgBIgBAAIAAgCIABgBIABABIgBAAIABABIAAABIAAAAIAAABgAB1DfIAAgBIgBAAIAAgBIgBAAIAAgBIACAAIAAgBIABAAIAAABIABgBIAAABIAAAAIAAABIgBAAIAAABIABAAIAAABgAgRDfIAAgBIABAAIAAgCIACAAIAAgBIgBAAIAAAAIACAAIAAACIgBAAIAAABIgBAAIAAABgAEMDeIAAgDIABAAIAAAAIABAAIAAACIgBAAIAAABgAg0DdIAAgBIgBAAIAAgBIACAAIAAABIABAAIAAABgADUDVIAAgBIABAAIAAAAIABAAIgBAAIABAAIAAABgADzDUIAAgBIgBAAIAAgBIACAAIAAACgAgNDUIAAgBIgCAAIgBgBIABAAIAAgDIABAAIAAABIABACIACAAIAAABIgBAAIAAABgADpDPIAAgBIgBAAIAAgBIABAAIAAgBIABAAIAAABIABAAIAAACgAgZDPIAAgBIgBAAIAAgBIABgBIAAgBIAAAAIAAABIADAAIAAABIgBAAIAAABIgBAAIAAABgAEEDOIgBgBIgBAAIAAgBIAEAAIABABIgCAAIAAABgAEeDMIAAgBIgBAAIAAgCIACAAIAAABIABAAIAAABIABAAIAAABgAD2DJIAAAAIABAAIAAgBIABAAIAAABgADWDJIAAgBIgBAAIAAgBIABAAIAAgBIABAAIAAABIABAAIAAABIABAAIAAABgADTDGIAAgCIABAAIAAACgAgVDGIAAgCIgBAAIAAgBIgCAAIAAgBIACAAIAAgBIABAAIAAABIABAAIAAAEgADqDBIAAgBIABAAIAAABgAgRDBIAAgBIgBAAIAAgBIgBAAIAAgBIABAAIAAgBIACAAIAAACIABAAIAAACgADeC+IAAgBIgBgBIAAgBIACAAIAAACIABABgAgRC3IAAgCIgBAAIAAgDIABAAIAAgBIACAAIAAABIABAAIABgBIAAABIgBACIABABIgCAAIAAABIgBAAIAAABgAD4CyIAAgBIgBAAIAAgBIgBgBIACAAIABABIAAgBIABAAIAAACIgBAAIAAABgAhNCyIAAgBIgBAAIABgBIgBAAIAAgDIABAAIAAABIABgBIAAgBIABAAIAAgBIACAAIAAABIgBAAIAAABIACAAIABgBIABAAIAAACIgCAAIAAABIgBAAIABABIAAABIgCAAIAAABgACKCqIgDAAIAAgEIABAAIAAgBIABAAIABAAIAAgBIgBAAIAAgEIgBAAIgBgBIAAgBIABAAIAAgCIABAAIAAABIABAAIAAABIABgBIABABIABAAIABgBIgBAAIAAgBIgBgBIAFAAIAAABIACAAIAAABIgCAAIAAABIgBAAIAAAAIABAAIAAABIABAAIAAgBIABAAIAAAEIADAAIAAABIACAAIAAgBIABAAIAAABIgBABIAAABIABAAIAAABIgBABIAAACIABABIgCAAIAAgCIgBAAIABgBIgBAAIAAgBIgBgBIgBABIgBAAIAAABIgBAAIAAgBIgCAAIAAABIgBAAIAAABIgBABIgCAAIgBABIAAABgAARCpIAAgBIgBAAIAAgBIgCAAIAAgBIADAAIAAgBIABAAIAAAEgAg/CoIAAgBIgCAAIAAgCIACAAIAAAAIABAAIAAADgAgHCfIgBgBIABAAIAAAAIgBAAIAAgBIgBAAIAAgBIgBAAIAAgCIADAAIAAABIAAgBIAAABIAAABIAAAAIAAADgAgzCeIAAAAIgCAAIAAgCIgEAAIAAABIgBgBIgBAAIAAgBIgCAAIAAgCIACAAIAAgBIAEAAIAAgBIABAAIAAgBIABAAIAAgBIABAAIAAABIABAAIAAgBIADAAIAAgBIACAAIAAABIABAAIAAACIABAAIAAACIABAAIAAACIgCAAIAAABIgCAAIABABIgBAAIAAABIgBAAIgBAAgAgfCeIAAgBIgBAAIAAgCIACAAIAAABIABgBIAAADgAhGCaIAAgBIgBAAIAAgCIABAAIAAABIABAAIAAgBIABAAIAAACIABAAIAAABgAgTCZIAAgCIgBAAIAAgDIABAAIAAAAIABAAIAAgCIABAAIAAABIABAAIAAABIgBAAIAAABIABAAIAAABIgBAAIAAABIgBAAIAAACgAhcCXIAAABIgBAAIAAgBIgBAAIgCgBIAAgBIABAAIABgBIABAAIABABIACAAIgBABIAAACgAgGCXIAAgBIgBgBIAAABIAAABIAAgBIgDAAIABgBIAAgBIgBAAIgBAAIgCAAIAAgBIABAAIAAgBIABAAIAAgBIgBgBIAAgCIABAAIAAgCIgBAAIAAABIgBAAIAAgBIABAAIAAgBIABAAIAAgCIABgBIAAgBIABAAIAAgBIABAAIAAgBIABAAIAAgCIABAAIAAgBIABAAIAAABIABAAIAAgBIACAAIAAgBIgBAAIAAgGIACAAIAAADIABAAIAAADIABAAIAAABIABAAIAAACIABAAIAAACIgBABIACAAIAAAEIgCAAIAAgBIgCAAIAAgCIgBAAIAAgBIgCAAIAAABIgBAAIAAABIgBAAIAAgBIgBAAIAAABIgBAAIAAAEIAAAAIAAABIAAAAIAAACIABAAIAAACIABAAIAAACIABAAIAAABIgBAAIAAACgAg4CSIAAgBIgCAAIAAgBIABAAIAAgCIABAAIAAACIABAAIAAACgAg9CSIAAgBIAAAAIAAABIgBAAIAAgBIgBAAIAAgBIgBAAIAAABIgBAAIAAgBIgBAAIAAgCIgBACIgBgCIABgBIACAAIAAgBIgBAAIgDgDIgBAAIAAgCIACAAIAAABIACACIABAAIAAABIABAAIABABIAAAAIABAAIABABIAAABIAAACIABAAIAAACgAipCMIgBgBIgDAAIAAgBIgCAAIAAgBIgBAAIgBgBIgBAAIAAgCIABAAIAAgBIgDAAIAAgCIgBAAIAAgDIACAAIABgBIAAgBIABAAIgBgCIABAAIAAgCIACAAIAAAAIgBAAIAAgBIACAAIAAACIABAAIAAgBIABAAIAAAAIABAAIAAgBIABAAIAAABIABAAIAAAAIAAAAIAAABIABAAIAAABIABgBIAAABIABAAIgBACIAAACIgBAAIAAABIACAAIAAAAIADAAIAAABIABAAIAAABIgBAAIAAACIgBAAIAAABIgBgBIgCAAIAAABIABAAIAAABIgBABIgBAAIAAABIgBAAIAAABIABAAIAAABIgBAAIAAABgAhcCBIgBAAIgBAAIABgBIAAgBIABAAIAAgBIgBgCIgCAAIAAgBIgBAAIgBgBIAAAAIgBAAIgBAAIABgBIgBAAIgBgBIgBAAIAAACIgBAAIAAAAIgBAAIgBAAIgBAAIAAgBIgCAAIAAgBIgBAAIAAgBIgCAAIAAgBIgCAAIAAgBIgBAAIgBgBIgBAAIAAgBIAAABIgDACIAAABIABABIgDAAIAAACIgBAAIAAACIgBAAIAAgBIgCAAIABgBIgCAAIABAAIABAAIgBgBIgBgBIABgCIABgBIAAgBIABAAIAAgBIABAAIAAgBIgDAAIAAgBIgCAAIAAgBIgBAAIAAgBIgEAAIAAABIgBAAIAAACIgBAAIAAABIgCAAIgCABIAAgBIgBABIAAgBIgCAAIAAgBIABAAIgBgBIgBAAIgBgBIAAABIgEAAIAAgCIABAAIAAAAIABAAIADAAIAAgBIACAAIAAABIABgBIAAABIABAAIAAgBIABAAIAAgBIABAAIAAgEIgBAAIAAgBIgBAAIAAgBIgBAAIAAABIgBAAIgBgBIgBAAIAAgBIgDAAIAAgBIgBAAIAAgBIACAAIAAgBIgCAAIgBgBIAAABIgBAAIgBABIgBgBIABAAIAAgBIABAAIgBgBIACAAIAAgCIADAAIAAACIABAAIAAgBIABAAIAAgCIgBAAIABgBIACAAIAAABIABAAIAAgBIACAAIABgBIABAAIAAABIABAAIAAgCIgBAAIgBgBIABAAIAAgDIABABIAAAAIAAACIABAAIAAgCIABAAIAAgBIgBAAIgBgBIAAgCIAAABIAAgCIgBAAIAAABIgBAAIgBgBIABAAIAAgBIgBAAIABgBIAAgEIABABIABAAIAAADIABAAIAAACIABAAIAAABIABAAIAAABIABAAIABABIAAAAIABAAIAAABIABAAIAAgCIgBAAIAAgEIABgBIAAACIACAAIAAgBIABABIAAACIgBAAIAAABIADAAIAAgCIgBAAIAAgBIABAAIAAgCIgCAAIAAgBIABgBIABAAIAAgBIABAAIgBABIACAAIAAABIACAAIAAABIABAAIAAABIgBAAIAAABIABAAIAAABIABAAIABgBIAAABIABAAIAAACIgBAAIABABIACAAIABAAIABABIABAAIAAgBIABAAIAAABIABAAIAAABIgBAAIAAAFIABAAIAAAAIABAAIAAABIACgBIAAABIACAAIAAABIgBAAIAAABIABAAIAAABIgCAAIAAABIgBAAIAAgBIgCAAIAAACIACAAIgBABIAAABIAHAAIAAABIABAAIAAABIAEAAIAAABIgBAAIAAABIgCAAIAAABIABAAIAAACIACAAIAAABIACAAIAAACIgBAAIABAAIgBAAIAAABIgCAAIAAABIgBAAIAAgBIgBAAIAAABIgBAAIAAABIABAAIAAABIgBABIACAAIAAgBIABABIABAAIAAABIACAAIAAABIACAAIAAgBIABAAIABABIABAAIAAABIgBABIAAACIgDAAIAAAAIACAAIAAAEIABABIgBAAIAAABIgCABgACtCAIAAgBIgBAAIAAgDIABAAIAAAEgAhsB7IgCAAIAAgCIABAAIAAABIACAAIAAACgACrB7IAAgBIABAAIAAABgAg+B5IAAgBIgBAAIAAgBIACAAIAAABIAAAAIAAABgAhUB3IAAgCIABABIAAgBIABAAIAAACgAiFB3IAAgBIAAABIgBAAIAAgBIgBAAIAAgBIAGAAIAAABIgDAAIAAABgAhMBzIAAgBIABgBIABAAIAAABIABAAIgBABgAhPBzIAAgDIADAAIAAACIgBAAIAAABgAhXBqIAAgCIABAAIAAAAIABAAIAAABIgBAAIAAABgAhxBTIAAgBIABAAIAAABgAjKAsIAAgBIgCAAIgBABIAAAAIAAgBIAAgBIABAAIgBgBIAGAAIAAgIIgCAAIAAgBIACAAIAAgBIAHAAIAAAAIACAAIABgBIAAACIACAAIAAgBIABABIABgBIAAABIABAAIABgBIACAAIAAABIABAAIAAACIABAAIAAACIAEAAIAAABIgBAAIABABIgCAAIgBABIAAgCIgCAAIgBABIgBAAIgBgBIAAABIgFAAIAAABIgBAAIAAABIgBAAIgBABIgBABIAAgCIgBAAIgBABIAAABIgBABIgCgBIgBABIgBAAIAAABgAiQgDIAAgBIgBAAIABAAIAAgBIABAAIABgBIABAAIAAABIgBABIACAAIAAABIgBgBIAAABIgCAAIAAABgAkKheIgDAAIAAgBIABAAIAAgBIABABIABgBIAAgDIABAAIAAABIABAAIAAgCIACAAIAAABIABAAIAAABIgCAAIAAACIgBAAIAAABIABAAIAAABIgBAAIAAAAIgBAAIgBABgAkjheIAAAAIgCAAIAAgBIgCAAIAAgBIgBAAIAAgBIgBAAIAAgCIgCAAIAAgCIgBAAIAAAEIgDAAIgBgBIgBAAIAAgBIABAAIAAgDIgDAAIAAABIgBgBIAAABIgBgBIAAgBIgCAAIABgBIAAAAIgBAAIgBAAIgBAAIAAAAIABAAIACgCIACAAIAAABIABgBIABAAIAAgBIgCAAIAAgDIABAAIAAgBIgCAAIAAgBIgCAAIAAAAIAEAAIAAAAIABAAIAAACIACAAIAAgCIABAAIAAAAIgBAAIAAgBIABAAIAAgBIgCAAIAAgBIABAAIAAgBIABAAIAAgBIABAAIAAgBIgBAAIAAgBIgDAAIAAgCIgBAAIAAgBIgBAAIAAgCIgBAAIABgBIAAABIABAAIAAgBIABAAIAAgCIABAAIAAgBIgBgBIgBAAIAAgCIAEAAIAAABIAEAAIAAAAIABAAIAAABIACAAIAAgBIABAAIAAADIABAAIABgBIABAAIAAgBIABAAIAAAGIACAAIAAgBIABAAIAAgDIABAAIAAgBIABAAIAAgBIACAAIAAABIADAAIAAABIgBAAIAAADIABAAIAAABIgDAAIAAABIABAAIAAAAIABAAIAAAAIABAAIAAABIACAAIAAABIABAAIAAABIgBAAIAAAEIgBAAIAAABIABAAIAAACIABAAIAAgBIAAAAIAAABIABAAIAAAAIgBAAIAAABIAAABIAAABIABAAIgBACIAAABIABAAIAAABIgBAAIAAABIgCAAIAAACIgBAAIAAABIgBAAIAAACIgBAAIAAABIgBAAIAAgBIgBgBIgCAAIAAgCIgBAAIAAgBIgBAAIAAADIgBAAIAAgCIgBAAIAAAGIACAAIAAABIgBAAIAAABgAkKhkIAAgCIABAAIAAACgAkQhoIAAgBIABgBIABAAIAAABIABAAIAAABIgBAAgAkUhwIAAgBIgBAAIAAgCIABAAIAAACIACAAIAAgCIABAAIAAgBIABAAIAAABIABAAIAAABIgBAAIAAABIgBAAIAAABgAFohyIAAgEIgBAAIABgBIgBAAIAAgBIgBAAIAAgBIgCAAIAAABIgCAAIABABIAAAEIgCAAIAAgBIABAAIAAgEIgCAAIAAgBIABgBIABAAIAAAAIAAAAIAAgCIgDAAIAAABIgBAAIAAgBIgCAAIAAACIgBAAIAAABIgBAAIAAADIgBAAIAAgBIgDAAIAAABIgCgBIgCAAIAAgDIABAAIAAgBIgBAAIAAgCIABAAIAAgDIgBAAIAAgBIgBAAIACgBIAAAAIABAAIAAAAIACAAIABABIACAAIAAgBIABAAIAAgCIgBgBIAAgBIgBAAIAAgBIABgBIACAAIAAABIACAAIAAABIgBAAIAAABIABAAIAAABIADAAIAAgBIACAAIAAgBIAAAAIAAABIABABIgBABIABABIABAAIAAAAIABAAIAAAAIADAAIAAAAIACAAIAAABIABgBIAAAAIABAAIAAAAIABABIgBAAIAAACIgBAAIAAACIABAAIAAABIABAAIAAgDIABACIAAADIgDAAIAAACIACAAIAAACIgBAAIABABIgCAAIAAADgAFxh6IAAgBIABAAIAAABgAk2iCIgDAAIAAgBIgBAAIAAgBIABAAIAAgCIABAAIAAgBIgDAAIAAgBIABAAIAAgCIABAAIAAABIACAAIAAgBIABAAIAAgBIABAAIAAABIABAAIAAACIABAAIAAABIgBAAIAAABIADAAIAAABIgBAAIAAABIgCAAIAAABIgBAAIAAABIgBABgAkjiFIAAgBIACAAIAAABgAkqiGIAAgBIABAAIAAgCIABAAIAAABIABAAIAAABIgBAAIAAABgAkoiMIAAgFIAAAAIAAgBIAAAAIAAgBIACAAIAAACIABAAIAAACIABAAIgCACIABAAIgBABgAkOiRIAAgBIADAAIgBABgABtiXIgBgBIABgBIgBAAIAAgBIgBAAIAAgBIgBAAIAAgBIgBAAIAAABIgBAAIAAABIgBAAIAAAEIgBAAIAAgDIgBAAIAAABIAAAAIAAgMIgBgBIAAgDIgBAAIAAgBIgBgBIgBAAIgCgCIAAgBIgBgBIgBAAIgBgBIgBAAIAAABIgBAAIAAgBIgDAAIAAADIgBAAIAAgCIgBABIAAgBIgBAAIAAgBIgBAAIAAACIgBAAIAAgBIgBAAIAAgBIgBAAIAAgBIgBAAIAAABIgDAAIAAgBIgCAAIAAAAIABgBIgFAAIAAgBIgDAAIAAABIgCAAIAAABIgCAAIgEgCIAAgDIABAAIAAgBIgBAAIAAgBIABAAIAAgBIgBAAIAAgEIACAAIAAgBIABAAIgCgBIgCAAIABgBIAAgBIABAAIAAgCIABAAIAAgBIABAAIAAgBIgBAAIAAgBIABAAIAAgCIABAAIAAgBIABAAIAAgBIABAAIAAgBIABAAIAAgBIACAAIABgBIACAAIACgBIABAAIABgBIACAAIAAgCIABAAIAAABIACAAIAAABIABAAIAAADIACAAIABABIAAACIABAAIAAgBIACAAIAAgCIABABIABgBIAAAAIABAAIABAAIAAAAIADAAIABgCIABgBIAAADIABAAIABAAIAAABIgBAAIAAACIABAAIgBABIgDAAIAAACIABABIAAACIABABIAAADIABAAIABgBIACAAIAAACIABAAIAAABIABAAIAAABIABAAIAAACIgBAAIAAABIgBAAIAAADIABAAIAAACIACACIACAAIAAACIABAAIABABIAAABIABAAIAAgCIACAAIgBABIAAACIgBAAIAAABIABAAIABABIAAABIgBAAIAAABIgBgBIgBABIAAABIABAAIAAABIgBAAIAAABIABABIgBAAIgBABIAAACIACAAIAAgCIABADIABABIABABIABAAIABABIgBABIgBAAIAAgBIgBAAIAAACIgBAAIABABIAAABIABAAIAAABIgBAAIAAABIgBAAIgBABgABuijIAAgCIABAAIAAACgAkfijIAAgBIgBAAIAAABIgDAAIAAgBIABAAIAAgBIgBAAIAAgDIABAAIAAgBIABAAIAAABIABAAIAAABIABAAIAAABIgBAAIAAAAIACAAIAAADgAAtitIAAgCIABAAIAAACgAAwiuIAAgBIgBAAIAAgBIAAAAIAAgBIABABIABAAIAAgBIACAAIABgBIgBAAIAAgBIABAAIAAABIAAACIgBAAIAAAAIgBAAIAAACgABxiwIAAgCIADAAIAAACIgBAAIAAAAIgBAAIAAABgAA4i9IAAgBIgBgBIACAAIAAABIABAAIAAABgAA6i+gABhjCIAAgBIADAAIAAABgAA2jFIAAgCIABAAIAAgBIgBAAIAAgDIABABIACAAIAAABIACAAIAAABIABAAIAAABIgCAAIAAACgABmjLIAAAAIACAAIAAAAgABajNIAAgBIgCAAIAAgBIACAAIAAgBIABAAIAAgBIABAAIAAgCIABAAIABABIABAAIAAABIgBABIAAABIgBAAIAAABIgCAAIAAABgAlglJIAAAAIgBgBIAAgCIABAAIABgBIABAAIAAAEIAAgBIgBAAIAAABIABAAgAlhlaIAAgBIABAAIAAgBIgBAAIgBgBIAAgBIADAAIAAABIABAAIABgBIAAACIgBAAIAAABIAAAAIgBgBIAAABIgBAAIAAABgAlclfIAAgBIgBAAIAAgBIADAAIgBABIABAAIAAABIgBAAIAAABgAlqlgIAAgBIgBAAIAAgCIACAAIAAgBIgBAAIAAgBIgFAAIAAgBIgBgBIAAAAIAAgCIgBAAIgBgBIABAAIAAgBIgCAAIAAABIgBAAIAAABIABAAIAAADIgBAAIAAABIgBAAIAAgBIgCAAIgBgBIgBAAIAAADIgBAAIAAACIgBAAIAAgBIgCAAIAAgCIgFAAIAAABIgCAAIAAgBIABAAIAAgCIABgCIAAgBIgBAAIAAgCIgBAAIgBABIAAgBIgBAAIAAABIgBAAIAAABIgBgBIgBAAIABgBIAAgBIgBAAIABAAIAAgBIABAAIAAgBIABAAIAAABIABAAIABABIAAgDIACAAIAAADIACAAIAAgCIABAAIAAABIAFAAIAAgBIABAAIAAABIACAAIAAgDIADAAIAAACIgCAAIAAABIABAAIAAABIABAAIAAAAIAFAAIAAAAIACAAIAAAAIABAAIAAgBIABABIAAABIABAAIABABIACAAIAAgBIABAAIABgBIAAAAIACAAIAAgCIABABIABAAIAAABIABgBIAAABIACAAIAAAAIABAAIAAABIgCAAIAAABIABAAIABABIABAAIAAAEIgBAAIAAgDIgBAAIAAACIgBAAIAAABIABAAIAAABIgCAAIAAABIgBAAIAAABIABAAIAAABIgBAAIABABIgDAAIAAABgAlcltIABAAIAAABIgBABgAleltIAAgBIABAAIAAABgAleltgAlNluIAAgEIABAAIAAgBIABAAIABABIgBAAIAAABIABAAIAAABIgBABIgBAAIAAABgAlIl3IAAgBIgBAAIAAgDIgCAAIAAgCIABgBIAAABIAFAAIAAABIABABIgBAAIAAAEgAmCl7IAAgBIgBAAIAAgBIAFAAIABABIAAABgAmFmDIAAgEIADAAIAAgBIAAAAIABAAIABABIAAADIgBAAIAAgBIgBAAIAAABIgBAAIgBABIAAABg");
	this.shape_1.setTransform(1.7,1);

	this.timeline.addTween(cjs.Tween.get(this.shape_1).wait(1));

	// Capa_3
	this.shape_2 = new cjs.Shape();
	this.shape_2.graphics.f("#394C64").s().p("AAXGsIgCAAIgBgBIgBgCIgBgBIAAgBIgCgBIgBAAIgBABIAAAAIAAABIgCAAIAAgCIgBgBIgBAAIgBABIgDAAIgBABIgBAAIgCgCIgBAAIAAgDIgBAAIAAABIgBAAIgBABIAAgEIgDAAIAAACIgBAAIgBgCIAAgDIgBAAIAAgGIACgBIADAAIAAgCIgCABIAAgBIgBgBIABAAIACgBIAAABIABgBIABAAIgBgBIABAAIABgBIABAAIAAgCIABAAIgBgBIAAgCIACAAIAAABIABAAIAAgBIABAAIAAgBIACAAIAAgBIABAAIAAgCIgBAAIABgBIABAAIAAgBIgBgBIAAgBIACAAIAAgBIABAAIAAgBIADAAIAAACIACAAIAAgBIABAAIABABIAAABIABAAIAAABIAEAAIAAABIACAAIAAgBIABAAIAAgCIABAAIgBgCIgCAAIAAgFIABgBIAAgEIABAAIAAgBIAAAAIAAABIABAAIAAABIgBABIABAAIAAACIAGAAIAAgDIABAAIAAACIABABIABAAIAAgBIADAAIABgBIABAAIAAgBIACAAIgBABIAAABIgBAAIAAABIgBAAIAAABIgBAAIAAAEIgBAAIAAABIACAAIABgBIADAAIAAAAIABAAIACAAIABABIAAACIACAAIAAABIAAAAIAAABIABAAIAAABIgBAAIAAABIADAAIAAACIABgBIAAACIABAAIAAAAIACAAIAAAAIgBAAIABABIABAAIAAABIgBAAIAAACIgCAAIABACIAAABIABAAIAAABIABgBIAAABIABAAIAAACIABgBIABAAIAAAFIgGAAIgBABIgBAAIgBABIAAgBIgBAAIAAABIgBAAIAAACIgCAAIgCABIgBAAIgBgBIAAAAIAAAAIAAgBIgBAAIAAgBIgBgBIgBAAIgBgCIgBAAIAAgBIgDAAIAAgBIgBgBIAAgBIgBAAIgBABIABAAIAAADIABAAIAAACIgBAAIABABIgBABIAAABIgCABIgCAAIgCABIgBAAIACABIADAAIAAABIABAAIACACIAAABIABAAIABgBIAAABIABAAIAAABIgBAAIgBAAIAAABIgCAAIgBABIgBAAIAAABIgEAAIAAABIgCAAIAAADIAAACgAh0F4IAAgBIgBAAIAAgCIgFAAIAAgCIgBgBIAAABIgBAAIgBABIgCAAIAAABIgEAAIAAABIgBAAIgBgBIgCAAIAAgBIAAAAIgBgBIgCAAIAAgCIgDAAIAAABIgBAAIAAABIgBAAIAAgBIgBAAIAAABIgBAAIAAACIgCAAIAAABIgDAAIAAgBIABAAIAAgCIgBAAIAAgBIgBAAIgBgBIAAgCIgBAAIAAABIgBAAIgBABIgCAAIAAABIgBAAIAAABIgFAAIAAACIgBAAIAAABIgCAAIAAACIABAAIAAAAIgBABIgBAAIAAgBIgBABIAAgDIgBAAIAAgBIgCAAIAAABIgCAAIAAABIgBAAIAAABIgCAAIAAgBIgBAAIABgBIAAgCIABAAIAAABIABAAIABgBIAAgCIgBgBIgDAAIAAABIgBAAIgBABIAAABIgBAAIAAgFIgCAAIgBgBIAAAAIABgBIAAgDIABAAIAAgCIgBgBIgBAAIgBAAIgBgBIAAgBIABAAIAAgCIgBgBIgBAAIAAgBIABAAIAAgBIACAAIAAgBIABAAIAAgBIgDAAIAAgBIABAAIAAgBIABAAIAAAAIACAAIAAgBIgCAAIAAgBIgCAAIAAABIgBAAIAAgBIgBAAIAAgCIgCAAIAAgBIABAAIAAgCIABAAIAAABIABAAIAAgBIgBAAIgBAAIAAgBIgBAAIAAgBIABAAIAAgBIACAAIAAgBIABAAIAAgBIABAAIAAgCIgBgBIgBABIgCABIgBABIgCAAIAAACIgBABIAAACIgBAAIgCAAIAAgBIgBAAIAAABIABAAIAAACIACAAIAAAFIABABIgBAAIAAABIgEAAIgBABIAAABIABAAIAAAEIABABIgBAAIAAACIgCAAIAAgBIgBAAIAAgBIgCAAIAAACIgBAAIAAABIgBAAIAAABIgCAAIAAABIgBAAIAAACIAAABIgBAAIAAABIgIAAIAAAAIgBAAIgBAAIgCAAIgCAAIgCACIAAABIgBAAIAAABIgBAAIAAADIgBAAIgBABIAAgCIgCAAIAAgBIgBAAIAAgBIgBAAIgBgBIgBAAIAAgCIgBAAIAAgBIgCAAIgBgBIgCAAIAAgBIgCAAIAAgCIgBAAIAAgBIgCAAIgBABIgDAAIAAgBIABgBIAAgBIAAAAIACAAIAAgBIgCAAIAAgCIAAAAIAAgBIADAAIAAgBIAEAAIADgCIAAgBIADgDIAAAAIACgEIAAgBIgCAAIgBgBIgBAAIAAgBIgBAAIgBAAIgBAAIgBgBIgBAAIAAgBIgBAAIAAgBIgBAAIAAgBIgEAAIAAgCIACgBIABAAIAAgBIgEAAIAAgBIgBAAIAAgBIgBAAIAAgBIACAAIAAgBIgBAAIAAgDIAFAAIAAgCIgDAAIAAgBIACAAIAAgBIABABIAEAAIAAABIADAAIAAgCIACAAIAAABIADAAIAAgBIACAAIAAABIABAAIAAgBIACAAIAAAAIABAAIAAgCIABAAIAAABIABAAIAAgBIAAAAIAAgDIABAAIAAgBIABAAIAAgBIADAAIAAgCIgCAAIAAgDIABAAIAAgCIABAAIAAgBIABAAIAAgCIACAAIAAAAIABAAIAAgCIADAAIAAgBIABAAIAAgJIABAAIAAgBIABAAIAAgCIACAAIAAgBIABgBIAAgBIAAAAIAAgBIABAAIAAgCIABAAIAAgBIABAAIAAgBIABAAIAAgCIABAAIAAgBIgBAAIAAgBIgBAAIAAgCIADAAIAAgBIABAAIAAABIABAAIgBABIADAAIAAgBIABAAIAAACIABABIAAgBIABAAIAAgBIABAAIAAgBIABABIAAgCIABgDIABgBIABAAIACgBIAFAAIABgBIACAAIgBACIAAAFIABgBIABAAIABAAIABAAIACgBIABAAIABgCIABAAIABgCIABAEIgBAAIABABIABAAIAAABIADAAIAAgBIACAAIABABIAAABIAEAAIAAgBIgBAAIAAgBIABAAIAAgBIABAAIAAgGIABAAIAAABIABgBIAAABIACAAIADgBIAAgBIADAAIAAgCIACAAIAAgBIgBAAIABgBIAAgBIABAAIAAgCIgBAAIAAgCIABAAIAAgBIABAAIABAAIABAAIAAgBIACAAIABgCIACAAIABACIACAAIAAABIABAAIAAABIABAAIAAABIABAAIAAgBIACAAIAAABIACAAIAAABIADAAIAAgBIACAAIAAgBIACAAIAAABIABAAIAAACIABABIgBABIAAABIABAAIAAABIAAAAIAAABIAAABIgCACIABAAIAAAAIABAAIAAABIgKAAIAAACIABACIAFAAIAAABIABAAIAAACIgBABIAJAAIAAABIACAAIABgBIADAAIAAgBIABAAIAAgBIABAAIAAgBIABAAIAAAAIAFAAIAAAAIACAAIAAAGIAJAAIAAACIgBAAIAAADIABAAIAAABIABAAIAAAFIgBABIAAAEIgDAAIAAABIABAAIAAAEIABAAIAAABIgBAAIAAACIABAAIAAAAIABABIABAAIAAACIACAAIAAACIgBABIgBAAIAAABIABAAIAAABIgCAAIAAABIABAAIAAADIgBAAIAAABIgBAAIgBABIAAABIgBAAIAAACIgCAAIAAACIgDAAIAAABIgDAAIABABIgBAAIAAADIgBABIAAAAIAAABIAAAAIAAABIABAAIAAABIABAAIAAADIADAAIAAACIACAAIAAABIgBAAIAAABIgBAAIgBABIABAAIAAAAIgBAAIAAABIgBAAIAAABIACAAIAAAFIgBAAIgBAAIAAACIABAAIAAABIABAAIAAABIABAAIAAACIgBAAIAAACIgCAAIAAgCIgBAAIAAACIgBAAIAAgBIgBAAIAAACIAAAAIAAACIgBAAIAAAAIABAAIAAABIAAACIgBAAIAAACIgBgCIAAgBIgBAAIAAABIgBAAIAAACIgBAAIAAACIgBAAIAAACIgBABIABAAIABABIgCAAIgBABIAAgCIgEAAIAAABIgBAAIAAACIgBAAIABABIAAADIgBAAIgBAAIgBABgAEYFeIgCgBIgCgBIgBAAIgBAAIgDAAIAAgBIgCAAIAAABIgBAAIAAABIgBAAIAAgBIAAAAIgBAAIgCgBIgBAAIAAgBIgDAAIAAgCIgBAAIgBgBIgBAAIAAgCIgBAAIAAgCIABgCIAAgCIgBAAIAAgEIgBAAIAAgBIgBAAIAAgBIgBAAIAAgDIgBAAIAAgBIgBAAIAAgCIgCAAIgDgBIgBAAIAAAAIgCAAIAAgBIgKAAIgBgBIAAgIIgBAAIgBgBIgCgDIAAgLIACAAIAAgBIgCAAIAAgBIgBgBIAAgCIgBAAIAAgDIgBAAIAAgBIABgBIgCAAIAAgBIABAAIAAgCIgBAAIAAgGIAAgDIAAgBIAHAAIAAgIIgBgBIAAgBIgCgCIAAgCIgBAAIAAgCIgBAAIAAgBIABAAIgBAAIgBgBIgBAAIgBgCIgBgBIgBABIAAgBIgBAAIgBgBIgBAAIAAgCIgBAAIgDAAIgBAAIgBAAIgCgBIAAgCIgBAAIgBgEIAAgDIgEAAIAAgBIgBAAIgBAAIAAgEIABgBIgBgBIAAgBIgBAAIAAgBIgBgCIgCgCIABAAIAAgBIACAAIAAgCIABAAIABgBIADAAIAAgBIAGAAIAAgBIABgDIgDgCIAAgBIgBAAIAAAAIgBAAIAAgBIgBgBIAAgEIABgCIAAgEIABAAIgEAAIgBgBIAAgEIACAAIAAgBIAAAAIACgBIAAgBIAFgBIABgBIADgBIABgBIABAAIACgBIACgBIABAAIAAgDIAAgBIgBgBIABgCIABgCIABgBIABgBIAAgBIABAAIAAgBIACgBIABAAIAAgBIgBAAIAAgBIAEAAIgBgGIACAAIAAABIAEAAIAAAIIACAAIACABIABAAIACABIADAAIAAABIADAAIABgBIAUAAIAJgHIAAgBIgBAAIAAgBIgBgBIABAAIAAgBIABAAIAKAAIABAAIAAgHIABAAIgBAAIgBgBIgCgCIABAAIAAgBIABAAIABgBIABABIACAAIAAABIABAAIABABIABAAIABABIADABIAAAAIAEACIAEACIAAACIAEABIgFAAIgHACIgBAAIAAABIgCABIAAABIgBAAIgBACIgCADIAAACIgBABIAAACIgBAAIgBACIgCADIAAABIALgDIABAAIAEAIIAAABIABABIgBAAIAAABIABAAIAAAHIABACIAAABIACACIAAAEIADAAIABgBIAAAAIAAgBIAAAAIABgBIAAAEIgBAAIAAABIgCABIABABIAAABIACAEIgBAAIAAABIABABIAFAAIABABIAAACIgBAAIAAADIgBABIAAABIABAAIAAABIACAAIABAAIgEAAIgCABIgBAAIgBABIAAABIgBAEIgCAFIAAACIgBACIABACIABAAIAAABIABABIAAAEIAAABIAAAAIAAABIAAACIgBACIAAABIgBAAIAAABIgBAAIAAABIgBAAIAAABIABABIAAABIgBABIABAAIAAABIABABIAAABIABACIAAABIABgBIAAABIAAAAIAAADIABABIgBABIABAAIABABIAAABIgCAAIgEACIgBAAIgBgBIAEgDIAAABIABgCIgEAAIgCgBIgCAAIgBABIgBAAIgCABIABABIAAABIAAAAIABgBIABABIAAACIgBAAIgBABIAAABIAAAAIAAABIgEAAIAAACIgBAAIAAABIgBACIAAABIgBAAIAAACIABAGIgBAAIAAgBIgCAAIAAABIgEACIgGAAIgCABIADAAIAAABIAAAAIAAABIABAAIAAABIABAAIAAADIABACIABAAIgBAAIAAABIABABIgBAAIAAADIABAAIAAABIABAAIAAABIAEAAIAAgBIACAAIAAgBIAAAAIAAABIABAAIAAACIADAAIAAgBIACAAIAAABIABAAIAAABIgBABIgGAAIAAACIgBABIABADIAAACIAQgBIAAgDIABACIABABIABAAIAAABIgBAFIgCADIgBAAIgCABIgBAAIAAABIgBAAIgBABIgBAAIgBgBIgIAAIAAAEIAAAAIAAACIgBABIAAABIgCAAIAAABIgJAAIAAABgAheFQIgBgBIABAAIAAgBIACAAIAAACgAheFQgACPFKIAAgBIgBAAIgBABIAAgBIgBAAIAAgBIgCAAIAAgCIgBAAIgBgBIgCAAIAAgBIAAAAIAAgBIgBAAIgBgBIgBAAIgBAAIAAgBIgBAAIgBgBIAAgCIABAAIAAgCIABAAIAAgCIABAAIAAgCIABAAIAAgCIABgCIgCAAIgBgBIgCAAIgBgBIgBAAIAAgGIABAAIAAgGIgCAAIAAgBIgDAAIAAgBIgEAAIgBgCIgBAAIAAgBIgBAAIAAgBIgBAAIAAACIgBgBIgBABIAAgCIgCAAIAAgCIgBgBIgLAAIAAABIgFAAIAAABIgCAAIAAABIgBAAIAAgBIgEAAIAAgBIgHAAIAAAAIgBAAIAAAAIgFAAIgBAAIgBAAIAAAAIgGAAIAAAAIgBAAIgBgBIAAgCIAAgBIgCAAIAAABIgCAAIAAgDIABAAIAAgDIACAAIAAgCIgBgBIAAgCIgBAAIAAgBIgIAAIAAgEIACAAIAAABIABAAIABABIAAAAIABAAIAAABIAIAAIAAABIABAAIAAABIACAAIAAACIABAAIgBgDIAAgCIAAgBIAAgBIABAAIACACIAAAAIACAAIAAABIAEAAIAAABIABAAIAAgBIABAAIAAABIABgBIABAAIAAgBIADAAIAAgBIgCAAIAAgBIABAAIAAgBIABAAIACABIAAAAIAAgDIABAAIABgBIABAAIAAACIABAAIAAACIAGAAIABgBIABAAIAAABIAGAAIAAACIAHAAIAAgCIABABIADAAIAAgBIABgBIAAgCIAAAAIABABIACAAIAAgCIgBgBIAAgDIgBAAIAAgDIgBAAIAAgEIAEAAIAAgCIACAAIAAgCIgCgBIACAAIgCgBIACAAIAAgDIABAAIAAgCIABgBIAAgBIABAAIAAAAIABgBIgBgCIgCgBIgBAAIAAgBIgDAAIAAgBIgCAAIgBgBIgBAAIgBABIgCAAIgCABIgDAAIAAgCIgDAAIAAAAIgEAAIAAAAIgBAAIAAAAIgBAAIAAAAIgCAAIAAgBIgBAAIAAgGIgBAAIAAgDIgBAAIAAABIgBAAIAAgBIgBABIAAgCIgBAAIAAACIgBAAIAAgGIABAAIAAABIABAAIAAgDIABAAIAAgFIABgBIgBgBIAAgBIgBgBIAAgBIgBAAIgBABIgCABIgBAAIAAgDIAAAAIAAgBIABgBIAAgCIADAAIAAgBIABAAIAAABIACACIABABIABAAIACAAIAAABIADAAIAAgBIABABIABAAIAAgBIACAAIAAAAIACAAIABgBIACAAIAAABIABAAIAAAAIACAAIAAAAIABAAIABABIABAAIAAABIADAAIABgBIAJAAIACgBIABAAIADAAIABAAIAAAAIABAAIAAABIABAAIAAgBIgBAAIACgBIACAAIAAADIAAAAIABABIAAABIABAAIAAABIABAAIAAABIABAAIABgBIABAAIABgBIAAgBIABgBIABAAIAJgDIABgDIAAgBIACAAIAAgCIABAAIABAAIAAgBIACAAIABABIACAAIACABIAAABIAAAAIAAABIABABIABAAIAAACIABAAIAAABIABAAIAAAAIACAAIAAABIABABIACAAIABgBIAAABIACAAIABABIAAgBIAEAAIABABIABAAIgBABIAAAGIACAAIAAABIACAAIAAABIgBAAIAAACIgCAAIAAABIgBAAIAAACIADAAIAAACIABAAIAAABIgBAAIAAABIABAAIAAABIgBAAIgBABIABAAIAAABIABABIAAAEIgBAAIAAABIgCAAIAAABIAAAAIAAABIgBAAIABADIAAABIAAgBIgBAAIAAAEIgBAAIABABIgBAAIAAABIgBAAIAAABIgCAAIgBgBIgBAAIgBgBIgDAAIgBgBIABAEIAAABIABAAIABABIAAADIgBABIAAgBIgBAAIAAADIgCAAIAAACIgGAAIAAgCIgDAHIAAACIgBAAIAAAFIgBABIgFAAIgCADIAAACIgCAAIAAABIgCAAIAAABIgBAAIAAACIAAAAIAAABIgBABIAAACIgBAAIAAAEIAHADIgCABIgBADIgBABIAEAAIAAAAIAAAAIAAABIACAAIABgBIAAAAIACAAIAAgBIABABIACAAIAAAAIAEAAIAAABIAAAKIAAAAIAAABIAAABIAAAEIABAAIAAABIgBAAIAAAAIgBABIABAAIAAACIgBAAIAAACIgDAAIAAgDIgCAAIAAABIgBAAIAAABIgCAAIAAABIgBAAIAAABIABAAIAAADIgBAAIAAABIgBAAIAAAAIgBAAIAAABIAAABIgNAAIAAAGgAjcDTIgBAAIAAABIgBAAIAAgBIgCAAIAAgBIgBAAIAAgBIgBABIAAgBIgBAAIABgBIAAgBIABgBIAAgCIAAAAIAAgBIACAAIAAgBIABAAIAAgGIgBAAIAAgBIABAAIAAgBIABAAIAAgBIADAAIAAgBIABAAIAAgBIACAAIAAgBIADAAIABABIAAgBIABAAIABgBIAAgBIABAAIABgCIABAAIAAgBIABAAIABAAIAAgEIgBAAIAAgBIABAAIAAgBIACAAIAAgBIABAAIAAgCIABAAIABgBIAAgBIABAAIAAgBIABAAIAAgBIABAAIABgBIABAAIAAgDIAFAAIAAABIABgDIACABIACAAIAAAAIABAAIAAAAIABAAIAAgDIgBAAIABgBIgBAAIAAgBIABAAIAAgBIgBAAIAAgBIABAAIAAgBIABAAIAAgBIABgBIAAgBIABAAIAAgBIACAAIgBgBIAAgDIABAAIABgCIABAAIAAAAIABAAIAAgBIABAAIgBgCIABgBIAAgCIABAAIgBgBIAAAAIABgCIgBAAIAAgBIABgBIABAAIAAgDIAAAAIAAgCIAAgBIABAAIAAgBIABAAIABgBIACgCIACgCIAAgBIgBgBIAAgDIABAAIAAgBIAEAAIABgBIAGAAIAAgBIAAABIAAgBIADAAIAAgBIABAAIABgBIgBgCIAAgBIgBAAIgBAAIgBAAIAAgDIgBAAIAAgDIAFAAIABAAIABAAIAAgCIgCAAIABgBIAAgBIABAAIABgBIABAAIAAgCIABAAIACABIACACIAAgBIABAAIABgBIAAgBIgBgBIAAgCIABAAIAAgFIABAAIAAgBIABAAIAAgJIAAgBIAAgCIABgBIABAAIABgBIACAAIgCgBIgBAAIAAgCIgBAAIAAgCIABABIABgBIABAAIAAgBIgBAAIAAgBIABAAIAAAAIABAAIAAAAIAEAAIAAAAIABAAIAAgCIAGAAIACgBIAAABIAAABIACAAIAAgBIABAAIAAgCIABAAIAAgBIABgBIABAAIAAgBIABAAIAAABIACAAIAAABIAFAAIAAgBIABABIAAgCIABAAIAAgBIACAAIAAgBIABgBIAAgEIgBgBIAAgBIAAAAIAAgBIACAAIAAABIABAAIAAgBIABAAIAAABIAEAAIAAABIABAAIAAADIAFAAIABABIACAAIAAAAIABAAIAAABIgBAAIAAACIABABIAAABIAAAAIAAABIADAAIAAABIADAAIAAABIAAAAIABABIAAABIACAAIAAABIABgBIAAABIADAAIAAADIADABIAAADIABAAIAAAEIABAAIAAABIACAAIABgBIADgBIAAgBIgCAAIAAgBIACAAIAAgBIgDAAIABAAIACgBIAAgCIAAAAIACACIACAAIABgCIADAAIAAgBIACAAIABABIABAAIAAACIAEAAIACABIAAAAIAAABIABAAIgBABIABAAIAAACIABAAIAAABIACAAIABABIAAgBIABAAIAAACIABAAIAAABIABABIAEAAIAAABIAAAAIAAABIACADIAAABIgBACIABAAIAAABIACAAIAAAAIACAAIAAACIgCABIAAABIgBAAIAAACIgBAAIAAABIgBABIAAABIABAAIAAABIgBAAIAAAEIgBAAIAAABIgBAAIAAgBIgDAAIAAgBIgDAAIAAABIgCAAIAAgBIgBAAIAAgBIgCAAIAAABIAAABIAAAAIAAABIABAAIAAAEIgBAAIAAADIAAABIAAABIACAAIAAABIABAAIAAgBIADAAIAAgBIADAAIAAADIABAAIAAACIgBAAIAAADIABAAIABABIABAAIAAABIAAAAIABACIABAAIAAABIACAAIAAAAIACAAIAAABIAAAAIAAABIABAAIAAABIABAAIACACIABAAIAAABIABAAIAAADIgBABIAAABIgBAAIAAABIABAAIAAABIACAAIAAACIABAAIABACIAAABIACAAIAAACIgBAAIAAAIIgBAAIAAABIgCAAIAAAAIgDAAIgBAAIAAABIABAAIAAABIAFAAIAAAFIgBAAIgCAAIAAACIABAAIAAABIABAAIAAgCIABABIADAAIAAACIABAAIABABIgCAAIAAABIAAABIAAAAIAAABIABAAIAAABIgBAAIAAABIADAAIAAACIgBAAIgBABIAAABIgBAAIAAABIAAAAIAAACIgDAAIAAABIgBAAIAAAAIgBAAIAAABIgBAAIAAAEIgBAAIAAABIgBABIgCAAIAAgBIgBAAIgBgBIAAACIgHAAIgBgBIgCAAIAAABIgBAAIAAALIgNAAIAAAAIgBAAIAAgEIgBgBIAAgDIABgBIAAgEIgGAAIgBgBIgGAAIAAgCIACAAIAAgBIgDAAIAAgBIADAAIAAgHIAAAAIAAgGIAAgBIgDgBIgDAAIAAgGIgBgBIgGAAIgDgBIgCAAIAAABIAAABIAAAGIgCABIAAADIgCAAIAAgBIgDAAIABgBIAAgBIAAAAIAAgCIAAAAIAAgBIgCAAIAAgCIABAAIAAgCIgCAAIAAAEIgEAAIAAgBIgKAAIgBACIAAAGIAAACIAAABIgBAAIAAgBIgCAAIAAgBIgCAAIgBABIAAABIgBAAIACABIAAABIgCAAIABgBIgDAAIAAABIgBABIAAABIgBAAIAAACIgBAAIAAABIgBAAIgBAAIAAgDIgBAAIABgBIAAgBIABgBIAAgBIABgBIgDAAIAAADIgBABIAAAHIgBAAIAAAIIgBAAIAAAEIABAAIAAADIgDAAIAAAAIgBABIgBABIgLAAIAAgBIgDAAIAAgBIAAAAIgBAAIgBAAIAAgBIgCAAIAAgCIgBAAIgBgBIgBAAIAAgBIgBAAIgBgBIgBAAIAAgBIgBAAIABAAIAAgBIABAAIAAgBIgMAAIAAgBIgBgBIgBAAIAAAEIgBAAIAAgCIgBAAIAAgDIgCAAIgBABIgCABIgCABIgBAAIgBABIgBAAIgBABIAAAAIgBAAIgCAAIAAABIgBAAIgCABIgBABIgBAAIgBABIgCAAIAAgBIgBAAIAAgCIABAAIAAgBIgCgBIgIAAIgBgBIgGAAIAAACIgCAAIAAABIgBAAIgBgBIgCAAIgEABIgEAAIAAABIgBABIgBAAIAAADIgBAAIAAABIgBADIAAABIgDAAIAAABIABABIAAADgAg8CsIAAgBIADABgAFZgMIgCgBIAAAAIgBAAIgBgCIgCgBIgEgDIgFgEIAAgBIgCgBIgBgCIgBgBIgCAAIgBABIAAABIgBAAIAAACIgBAAIAAABIgBAAIAAgBIgCAAIAAgFIACAAIAAgCIgCAAIACAAIABAAIAAgCIgDgCIAAgBIgDgDIABgCIACAAIADgBIAAgBIgBgFIAAgBIgEgGIAAgBIgBgCIAAgGIABgDIAAgFIABgBIAAgCIgCgCIgCgGIgBAAIAAgBIgBAAIAAgBIgBAAIABAAIgBgCIAAgDIgBgBIgKABIAAgBIgBABIAAgBIgBAAIAAAAIgBAAIAAgBIAAgBIAAgCIgBAAIAAgBIgBAAIgBgBIAAgBIgBAAIgDgIIgCADIgBAAIAAAAIgBAAIAAAAIAAAAIgBgCIAAgBIgCAAIgGAIIgDgBIgEAEIgHgDIgBgBIAAgDIgBAAIAAgBIABgCIgBgBIAAAAIAAgBIgEAAIgBgBIAAgBIgBgCIAAgCIgBgFIgCAAIAAgDIgBAAIAAgCIgBAAIAAgBIAAAAIAAgBIgBAAIAAABIgDAAIgBABIgCAAIAAgBIgBAAIgCADIgEgDIgCAAIAAgBIgCAAIAAgBIAAAAIgFgBIgBgBIAAgBIABAAIgBgBIABAAIAAgCIABgBIAAgCIABAAIAAgCIADAAIAAgBIABAAIABgBIAAAAIgCAAIAAgDIgBAAIAAgBIABgBIABAAIABgBIAEgBIAGAAIACgBIAAgBIABAAIAAgBIACAAIABgBIAAgBIgGAAIAAgBIAAgBIgBAAIABgBIABAAIAAgBIABAAIADgBIABAAIABgBIABAAIAAgCIABAAIAAgBIABAAIAAgBIACAAIABgBIABAAIAAgBIACAAIAAAAIACAAIACAAIADAAIABgBIABgCIABgCIACAAIACgEIABgBIgCAAIAAgBIgBAAIAAgBIgBAAIAAgCIgBAAIADgBIABAAIAEgCIACAFIALACIAEAAIAGABIAAgBIgBAAIAAgBIABAAIAAgBIACAAIAAgCIABAAIAAgBIACAAIAAgBIABgBIABAAIAGAFIADgDIAEgBIABAAIAAgBIABAAIAGgCIgBgBIgBgFIAAgBIABAAIAAgCIABAAIABgBIgHgNIABgBIAAgBIgBgBIACAAIABgBIABABIAEAAIAAgCIADgOIALADIADgOIABAAIABAAIAEAAIAFgFIAEgGIAEgFIAJAHIAIAKIAHAAIACgBIgFAHIABAAIABABIgBABIgBgBIgBABIAAAJIAKABIACABIADAAIABABIACABIABADIABAAIgBADIgEAIIAAAAIAPALIgEADIAIAGIgJACIgMAAIAFAFIABACIAAAAIAAACIABAAIABgBIAAACIABAAIAAADIADAAIAAABIgBAAIAEADIAAABIABACIABABIABACIgBAAIAAABIgBAAIACACIAFgBIANANIABAEIAAAGIAFACIgBACIgCAAIgBgBIAAACIgHAAIAAADIABAIIgHgEIABAIIALAGIAAgCIACAAIAAAGIgEAFIgEADIgCACIACAIIAAAFIgFAKIgCAEIACgBIAAABIAJgBIgCALIgBAAIgJAEIAAgDIABAAIAAgEIgBAAIgBgCIgCgCIgDAAIgCABIgBAAIACACIACACIABAFIABACIAAACIgBABIAAgBIgDACIgCgDIgBgBIAAgBIgBgBIgBAAIgCAAIAAABIgCADIgBAAIAAACIAAAAIAAABIgBABIgIgDIgCAAIgBACIAAABIgBADIgEACIgIAAIgCAGIgJgGIgCAAIAAgBIgKgGIgBAAIgCABIAAAMIgDgBIAAAAIgBABIAAgBIgBACIABAAIgBABIgGABIgEAAIAAABIAAAAIAAABIAAAAIABABIAFAEIABAAIAAABIACAAIAAADIgCAEIAAABgAklgeIgBAAIgEgBIgGgEIgBgCIgFAAIAAgBIgDAAIgBgBIgBAAIAAgBIAAgBIAAAAIgBgBIgEAAIAAgBIgDAAIAAgBIgCAAIgBgBIgBAAIAAgBIgCAAIAAgBIABAAIAAgBIgBAAIAAgBIgBAAIAAgCIgDAAIgBACIgBAAIAAgDIgBgBIgCAAIAAgBIgCAAIgHgDIgBAAIgBgBIgBAAIgDgCIgBAAIABgBIgBgBIgCAAIAAgBIgBgBIgFAAIgBABIgBAAIAAgCIACgBIABAAIAAgBIADAAIAAgCIgBAAIABgBIAAgBIACAAIgBgBIAAgCIAGAAIAAgBIAAgBIAAAAIAAgBIgBAAIAAgBIgCgCIABgBIgBgBIAAgBIgCAAIAAgBIAAAAIAAgBIgEAAIAAABIgBgBIgBAAIAAABIgCAAIAAABIgCAAIgBABIAAgDIABgDIgCAAIAAgDIgBgBIAAgBIAAgBIAAgEIAAAAIABgBIACAAIAAgDIgCAAIAAgBIABAAIAAgCIABAAIAAgCIABgBIgDAAIABgBIABAAIABAAIgBAAIAAgCIgCAAIABgBIABAAIgBgBIgCAAIAAgHIAEAAIgBgBIAAgCIABgBIAAgBIABgBIAAgBIABAAIAAAAIACAAIADABIABAAIAAgBIABgBIADAAIAAABIACAAIAAgBIACAAIAEgBIABgBIAAABIABAAIAAABIABAAIABABIACAAIAAgCIgBAAIAAgDIgBAAIAAABIgBgBIAAgCIgBAAIAAgCIABgBIAEAAIgBACIABAAIAAgBIACABIAAgBIABAAIABABIABADIAAABIACAAIACABIABAAIAAgCIABAAIAAgBIAHAAIAAgBIAAAAIgDgBIABAAIAAgEIABgDIABAAIAAgCIACgBIAAgDIAIAAIABgBIAAgDIABgBIABAAIAAABIABAAIAAABIACAAIAAABIABAAIABABIAAgCIAAAAIAAgBIACgBIAAgBIAEAAIAAABIABAAIgBABIABABIACAAIAAABIABABIgDAAIAAADIgBAAIAAABIACAAIAAAAIgBAAIAEgBIAAgCIADABIABAAIAAgBIABgBIABgBIAAgBIABAAIAAgBIACAAIAAgBIABAAIAAgEIgDAAIAAgEIACAAIAAABIACAAIAAgCIACAAIAAABIABAAIAAABIABAAIAAABIACAAIAAgDIACAAIAAABIAJAAIAAAEIABgCIABACIABAAIABAAIABAAIAAABIACAAIAAACIgBAAIAAACIABAAIABgBIAAgCIADAAIAAgCIABgCIAAgCIADAAIAAgBIACgBIAAgCIABABIABAAIAAABIABAAIAAABIAAAAIACACIAAABIABACIAHAAIADADIAAABIAAAAIAAABIgBAAIAAABIgBAAIABABIAAABIgCAAIAAACIABAAIAAACIABAAIABABIADABIAAAIIABAAIAAABIABAAIABACIABAAIADABIAAABIABAAIgBABIAAABIABAAIgBABIgBAAIgEgBIgBAAIAAACIgBAAIgBgBIAAgBIgCAAIAAgBIgFAAIgCgBIgBACIAAACIgBACIAAAEIABAAIABABIgFAAIgBABIgBAAIAAgBIgCAAIAAAEIgCABIAAABIADAAIAAADIABgBIABAAIAAACIgBABIAAAJIgFgBIAAAEIgBAEIABAAIABABIAAAAIAAACIADAAIABABIAAADIgBAAIAAACIACABIAAADIAAACIAAABIABAAIABgBIAAgBIABgBIAAABIACAAIAAABIABgBIAAgBIABABIADAAIABgCIAAABIACAAIAAgBIADAAIABABIACAAIABABIADAAIAAgBIABAAIABABIgBAAIAAACIgBACIgBAAIAAgBIgDgBIgCADIAAAAIABAAIAAABIAAABIgBABIgBABIgDAAIAAACIACAAIgCAAIAAABIAAAAIgBABIAAABIgCAAIAAABIABAAIAAACIgCAAIgBADIgBAAIAAgBIgBABIAAABIgCAAIAAACIgBACIgDAAIAAABIgFAAIAAgBIAAgBIgCAFIAAABIgDgBIgCAAIgEAAIgCAAIAAABIAAABIAAACIgBABIAAABIgBADIgBABIgCABIgBAAIAAABIgCAAIgBgBIgJAAIAAgBIAAgBIAAgBIgGAAIgBgBIAAABIABABIAAABIgBABIACAAIAAABIAAAAIAAAAIgBABIAAABIgCACIgBACIgCAAIgBAAIgBAAIAAACgAlLgtIABgBIABAAIAAABgAlJgugACEh9IAAgCIgIgIIgUAAIgCABIgCAAIAAgBIgBAAIgBABIAAAAIgBgBIgBAAIgPAHIgFgBIgFAAIgIgHIgHgCIgBgBIAAAAIgBAAIgPgEIgBAAIAAgBIgBgBIgBAAIAAgBIABgBIAAgBIABAAIAAgCIAFgHIABgDIABgBIAAgFIgBgEIAEgEIgBgEIgBAAIAEgCIAHgBIAEAAIABAAIABAAIAAAAIAAAAIAAgBIABAAIAAgBIABAAIAAgBIABAAIAAgBIACAAIAAgBIAAAAIAAgBIABAAIAAgBIABAAIAAgBIABAAIABgBIABAAIAAgBIACAAIAAgCIABAAIAAgCIABAAIAAgBIABAAIAAgBIABAAIAAgCIABAAIAAAAIABAAIABgCIAAgBIABAAIAAgCIABAAIAAgCIACAAIAAgBIAAAAIAAgBIABAAIAAgBIgBAAIAAgCIAAgBIgCAAIAAgCIgBAAIAAgCIADgBIABAAIAAgEIAGgBIABAAIgBgDIgHAAIAAgGIAAAAIAAgNIgGAAIABgDIAAgBIAAgFIgBAAIAAgDIgBgDIgBAAIgBgBIgEAAIgBgFIgCAAIgBgBIgFAAIAAABIgFgGIACAAIAAgEIgBgBIgCAAIgDgCIgNgIIADgBIgCgFIABgCIAKgDIAEgCIACgBIABgBIABAAIACgCIACAAIAAgBIACAAIABgBIABAAIAEgCIAAgBIgBgBIAAgDIgBAAIAAgCIgCgFIABAAIAHACIABAAIABABIAGACIAAgDIADAAIAAgBIABgBIAAgDIAIAAIAAABIABgCIABAAIABABIABAAIAAgCIACgBIABABIADAAIADABIADAAIgBACIgBABIAAACIgBABIAEABIAAABIgCACIgBABIAAAAIgCACIAAABIgCACIAAAAIgBAAIAAABIgBABIAAABIgBAAIgBABIAAABIAAABIgCABIAAgBIgDAAIgBABIABACIABABIAEACIAAABIAAAAIACAEIABACIADgBIABAEIgCABIAAABIABAAIAAACIABABIgBAAIgFABIgBAAIgDABIABABIAAABIACABIAAABIACAJIAHABIADAAIABgCIABgBIABgBIABAAIACgBIABAAIAAgBIAEAAIABgBIACAAIABAAIAAAAIABAAIAFAAIABAAIACAAIAAAAIACAAIABgBIAEgBIAAABIABAAIAAABIgBAAIAAADIACAAIABABIABAAIAAABIABAAIAAACIABAAIAAABIgIALIABgBIADAAIACABIAAADIABAAIAAADIgBAAIAAABIgCAAIAAAEIAEABIAAABIgBABIAAgBIgIAAIgBgBIAAABIgBABIAAABIADAHIgEgFIAAACIgBABIAAADIgEAAIgBACIgCACIgBACIgCABIAAABIgCABIAHACIgBACIABAAIAFABIgDAEIAHgBIABAAIAHgDIAAABIgHADIAAABIABACIAFABIABAAIgBABIgFADIgBADIAAABIgHgBIAAAEIgBAAIAAABIgDACIAAABIgBAAIgCABIAAACIgDAAIgBABIgBAAIgBABIgCAAIAAABIgDAAIgBABIgCAAIAAABIgBAAIAAACIABAAIAAACIACABIADAAIABgBIACAAIACABIAAABIACAAIAAgCIABAAIAAgBIACAAIAAAAIAGAAIAAABIAEAAIADABIACAAIgBABIACAAIAAAEIABACIABAFIABABIABADIAEADIgDgBIACAEIAAABIABAEIgJgBIAAAFIgGgBIACAFIAAAHIgKAAIAAgCIgCAAIgBAAIABACIAAABIAEAJIgCACgAlZkhIAAgBIgCAAIAAgBIgDAAIAAgBIgCAAIAAgCIgCAAIAAAAIgCAAIAAgBIgEAAIABgDIAAgGIABAAIAAgCIABAAIAAgBIABAAIAAgCIgDABIgCABIgDAAIAAgBIgDAAIgBgBIgBAAIAAgBIgFAAIAAABIACABIAAABIgDAAIAAgBIgFAAIgBABIgBAAIAAgBIgBAAIAAABIgCAAIAAgCIgBAAIAAgBIgBgCIAAAAIgBAAIAAgBIgJAAIAAgBIgBAAIAAgBIgDAAIAAgEIACAAIAAgCIgBAAIAAgBIgHAAIAAgBIgDAAIAAgBIAAAAIAAgBIAAAAIAAgBIgBAAIgBgBIgDAAIAAABIgBABIgCAAIAAgBIgCAAIgBgBIgBAAIAAgBIgBAAIAAgCIAAAAIAAgCIABAAIgBgDIACAAIAAgBIABAAIAAgBIABAAIAAgBIABgBIAAgBIABAAIAAgDIgBAAIAAAAIgDAAIAAgBIgBAAIAAgHIgBAAIAAgCIABAAIAAgBIAGAAIAAgBIABgBIAAgBIgBAAIAAgCIgEAAIAAgBIgBAAIAAgBIgCAAIAAAAIgBAAIgBgBIgFAAIABgEIgBAAIAAACIgCAAIgBgCIgDAAIgCAAIgDAAIAAgCIABAAIAAgBIABgBIAAgDIgBgCIAJAAIACABIAAgBIADAAIAAABIABAAIAAgBIABAAIAAgCIgBAAIABgBIAAgCIgBAAIAAgCIADAAIAAgEIAUAAIAAgCIABgDIADAAIABgBIACAAIAAgFIABAAIAAAAIACAAIACAAIAAABIACAAIAAgBIABAAIAAgFIAAAAIABAAIAAAGIgBAAIAAABIACABIADAAIAAABIABABIABABIABAAIAAABIABAAIAAABIABABIAAABIACAAIAAABIABAAIAAgBIADgCIAAgBIABAAIABABIAAAAIAAABIABAAIAAACIgBAAIAAABIAEABIABAAIAAACIABACIAAABIABAAIgCAAIAAABIgBAAIgBABIAAABIgBABIAEAAIAAABIACAAIgBABIgCAAIgBABIgDAAIAAABIABAAIAAACIABABIgBAAIABABIABABIADAAIACAAIAAAAIABAAIAAgBIABAAIAAABIABACIABAAIAAACIACAAIAAADIABAAIAAACIABAAIAAABIABAAIAAgBIABAAIAAgCIACAAIAAgBIABAAIAAABIABAAIAAgBIADAAIAAgBIABAAIAAgBIADAAIAAgBIABAAIAAgBIAJAAIABgCIABAAIAAgBIABAAIAAgBIABgBIAAgBIABAAIABgBIgBAAIAAgBIABAAIAAgBIABAAIAAgBIAFAAIAAgCIABAAIAAgBIABAAIAAgBIAAgDIABAAIAAgDIABAAIAAAAIABAAIAAgHIAEAAIAAgBIABAAIgBgBIgCAAIgBABIgBgBIgDAAIAAABIgBAAIAAgBIgBAAIAAgJIABAAIAAgGIAEAAIAAABIADAAIAAgBIAEAAIAAACIABAAIAAABIABAAIAAgBIABABIAAgDIAFAAIAAgCIAAAAIAAgDIABAAIAAgBIACAAIAAgBIACAAIAAgBIAIAAIAAgCIADAAIAAABIAHAAIgBgFIAAgBIABAAIAIgFIACAIIAIAhIgCADIAAAAIgCAEIAAABIgBAAIACAFIgCAAIgGABIgDABIgBAAIgBABIgEAAIgCABIgBAAIgNADIgDAAIgCABIgCAAIgBAAIgCAAIgCACIgBAAIgCgCIgDAAIgDgBIgBAAIAAAEIABAAIAAABIAEAAIgBACIgBAEIgBAAIAAACIgDAAIADALIABABIABABIAAABIACADIAAABIADAAIAAABIADAHIgBAAIgCgCIAAACIgBABIAAABIgBAAIAAABIgBAAIAAgBIgBAAIAAABIgBAAIAAAAIgEAAIAAACIgBAAIAAABIABAAIAAABIgBAAIAAABIAAABIAAACIgBABIAAABIgBAAIgBgBIgCAAIAAgBIgBAAIAAACIgBAAIAAACIgBAAIAAABIABAAIAAAEIABAAIAAABIgBAAIgBgBIgBAAIAAgBIgCAAIAAgBIgBAAIAAgCIgCAAIAAAAIgCAAIAAgBIgCAAIgBgBIABACIAAADIAAABIAAADIAAABIgBADIgBAAIgBgBIgCAAIAAABIAAABIAAgCIgCAAIgCgBIgCAEIADAAIgBABIAAABIgBAAIAAABIABABIABAAIAAABIABAAIAAADIgBAAIAAABIgCAAIgBABg");
	this.shape_2.setTransform(0.5,0.2);

	this.shape_3 = new cjs.Shape();
	this.shape_3.graphics.f("#6C829A").s().p("AEVDvIgBgBIgBAAIAAgBIgBAAIAAgBIgBAAIABgBIABgBIgDgBIgCAAIgBgBIAAABIABABIgBAAIgBABIgCgBIgBgBIABgCIAAgBIABAAIAAgBIABgBIgDAAIgCgBIgBgCIgBAAIAAgBIgCAAIgBgBIAAAAIABAAIAAgBIABAAIAAgBIABgBIAAgBIABAAIAAgCIABAAIAAgBIgBAAIAAgBIgBAAIAAgCIACAAIAAgBIgBgBIAAgBIgBAAIAAgDIgBAAIAAACIgBAAIABABIAAACIgBAAIAAABIgBAAIAAgBIgCAAIAAgCIABAAIAAgCIgFAAIgDgBIgCAAIgBgBIAAABIgCgBIgCAAIAAgBIgBAAIgBAAIgBAAIAAgBIgCAAIAAgBIgBAAIAAgBIgBAAIgBgBIABgCIABAAIAAgBIgBAAIgBgCIgCAAIAAgBIgCAAIgBgBIAAgBIAAgBIACgBIAFgGIADgFIABgBIACAAIAAABIADAAIAAgDIABgBIAAgCIABAAIAAgCIABAAIAAACIgBAAIAAACIAAABIAAABIABAAIAAgCIABgBIAAgCIABgBIgCAAIAAgBIADAAIAAABIABAAIAAgBIABABIADAAIABgBIAAgBIABABIAAgBIABAAIAAgBIgBAAIAAgGIACACIABgBIAAgBIACACIABgDIABABIAAgBIAAgBIACAAIAAgBIADAAIAAABIACAAIAAgBIABgCIgCAAIgBABIgBAAIAAgBIgEAAIAAgBIAAAAIABgBIAAgBIABAAIgBgBIAAgDIgBAAIAAgCIABAAIAAgBIABAAIAAgBIgBAAIAAgBIgBgBIAAgBIABAAIAEgBIACAAIABgBIACAAIAAACIgBAAIAAABIABAAIAAAEIABAAIABgBIACAAIAAgBIACAAIAAgBIACgBIAAABIAAAAIAAABIACAEIACgBIABABIgDAGIAIABIAAABIABABIAAADIABAAIAAABIABAAIAAACIgBAAIgBABIAAACIABAAIAAAAIABAAIAAgBIABAAIAAABIABAAIAAACIABABIAAABIACAAIAAACIABAAIAAgBIABAAIAGgDIAAgFIAEAAIACABIACAAIACgCIABABIACAAIABABIABAAIAAABIABAAIABgCIACgBIACgBIAAgBIABgBIAAAHIgHA1IgBAAIgBgBIgDAAIgCgBIgBAAIAAgBIgCAAIgBgBIgBAAIgBgBIgDAAIAAABIgBAAIAAABIgBAAIAAABIgBAAIAAACIgBAAIAAAEIgBAAIAAADIABAAIAAACIABABIABAAIAAACIABABIAAACIABAAIAAABIgDAAIAAgBIgGAAIAAgFIgBAAIAAgDIgBgBIAAgCIgBAAIAAgBIgBAAIAAgBIgCAAIAAgBIgBAAIAAgCIgCAAIAAABIgBAAIAAABIgBAAIAAABIABABIABAAIAAAEIABABIgBABIgDAAIAAABIgBAAIAAABIgBAAIAAABIgCAAIAAABIgBAAIAAABIgBABIgBAAIgBABIAAABgAAEDMIABgBIACAAIgCACgAAGDKIAAgDIgCAAIAAgBIgDgEIgCAAIAAACIgBAAIAAgBIgBAAIAAgBIgBAAIAAgBIgBAAIAAgBIABgBIAAgCIABAAIAAgCIABAAIAAgCIgBgBIAAgBIABAAIAAgBIgDAAIABABIgBAAIAAABIAAgBIAAgBIgBAAIAAgCIgBgBIAAgDIgBgBIAAgCIgCAAIAAgBIgBAAIAAgDIgCAAIgBABIgBAAIAAgBIgBAAIgBAAIgCAAIAAACIgBAAIAAACIgCAAIAAgBIgBAAIAAgBIgBABIgCAAIAAgBIgBAAIAAgEIgCAAIAAgBIgBAAIgBgBIAAgCIgCAAIAAgCIgBAAIAAgBIgBgBIAAgBIgBAAIAAABIgCAAIAAABIgBAAIAAABIABAAIAAACIgBAAIAAgBIgDAAIAAgCIgFAAIgDACIgBAAIAAADIgCAAIgBgBIgFAAIAAABIgBABIAAABIgBAAIAAABIgBAAIgBABIgBgBIAAgBIgBAAIAAACIgCAAIAAAAIABAAIAAgCIgCAAIAAgDIgBgBIAAgCIgCAAIAAABIgBAAIAAgCIgBgCIAAgBIgBAAIAAgBIgDAAIgBgBIgCAAIgBABIgBAAIAAgDIABAAIAAgCIABAAIABgBIAAgDIABAAIgEgBIgDAAIAAABIgBAAIAAACIgBAAIAAgEIgBAAIAAgDIACgBIAAgCIABgBIABAAIAAgDIgBAAIAAgCIgGAAIAAAAIgBAAIgBABIgDAAIAAABIAAAAIAAgBIgBgBIAAgDIgCgBIgBABIAAABIgBABIAAABIgBAAIAAgBIgBAAIAAABIgCAAIgBACIgDAAIAAABIgCAAIgBABIAAABIgCAAIAAABIgBAAIAAABIgBAAIgBABIAAACIAEAAIAAABIgBAAIABABIgBAAIAAACIABAAIAAAEIgBAAIgBABIgDABIgBAAIgBABIgDAAIAAABIgCAAIgBgBIAAgBIgBAAIgBABIgEAAIAAABIgBAAIAAgBIgDAAIAAgBIgDAAIAAgBIgBAAIAAgBIgBAAIAAgCIgBgBIAAgFIgBgBIAAgEIADAAIAAgBIAEAAIABgBIACgBIAAgFIgDAAIgCgBIgCAAIAAgOIACAAIAAAAIACAAIAAAAIABAAIAAgBIABAAIAAgBIgBAAIgCABIgBAAIAAgBIgBAAIAAgBIgBAAIAAgBIgBgBIAAgBIABAAIgCgEIAAgBIgCAAIgDgEIgBgBIAAgBIgBgBIgCAAIgBABIABgBIACgDIgDgEIACgDIAAgBIAAAAIAAgBIABAAIABgBIABAAIAAgBIABAAIABgBIABAAIABgBIABgCIABgBIABAAIAAgBIABAAIAAgBIACAAIAAgBIADAAIAAgBIACAAIAAgBIADAAIAAgBIABAAIAAgCIANAAIAAgLIABAAIAAgBIABAAIABABIAIAAIAAgCIABABIABAAIAAABIACAAIABgBIAAgBIABAAIAAgEIABAAIAAgBIABAAIAAgBIAAAAIAAgBIADAAIAAgBIABAAIAAgBIABAAIAAgBIABgBIABAAIAAgDIgDAAIAAAAIABAAIAAgBIgBAAIAAgBIgBAAIABgBIAAgBIACAAIgBgBIgBAAIAAgCIgEAAIAAgBIAAACIgBAAIAAgBIgBAAIAAgCIACAAIAAgBIAAgEIgEAAIAAgBIgBAAIAAgBIABgBIADAAIAAABIABAAIAAgCIABAAIAAgHIABAAIAAgDIgCAAIAAgBIAAgBIgBAAIAAgCIgCAAIAAgBIgBAAIAAgCIABAAIAAgBIABgBIAAgCIgBAAIAAgBIgBAAIgCgCIgBAAIAAgBIgBAAIAAAAIgBAAIAAgBIgBAAIAAgBIgCAAIAAgBIgBAAIgBgBIgBAAIAAgBIgBAAIgBgBIgBAAIAAgEIABAAIAAgBIgBAAIAAgDIgCAAIAAABIgDAAIAAABIgBAAIAAgBIgDAAIAAgBIABgBIAAgDIABAAIAAgEIgBAAIAAgBIgBAAIAAgBIABgBIACAAIAAABIABAAIAAABIACAAIAAgBIADAAIAAABIACAAIAAABIABAAIAAgBIACAAIAAgBIABgBIAAABIABAAIAAgBIABAAIAAgBIABAAIAAgBIABAAIAAABIADAAIAAgBIABAAIAAgBIAGAAIAAgBIABAAIABAAIAAgBIABAAIAAgBIABABIAAgHIAEAAIAAgBIgBAAIAAgBIgBAAIAAgBIACAAIAAABIACAAIAAgBIABAAIAAgDIACgBIANAAIABgBIAFAAIACgFIACAEIACACIAEgBIACAAIACgBIAAABIABACIgCABIACADIAFAAIAAAEIADAAIgCAEIAAABIACAAIAAABIACAAIABgBIABAAIACABIABAAIAAABIADAAIAAADIgBAAIABABIgBAAIAAACIgBAAIgBABIgBABIAAABIABABIgBABIAAABIgBAAIAAABIgBAAIAAACIABAAIAAACIgBAAIAAAAIgBACIgCAAIAAABIABABIABAAIAAABIABAAIABABIgBAAIACACIgBAAIAAADIgCAAIgBAAIgBAAIAAAAIgDABIABACIAAABIABAAIAAABIACABIABABIgBAAIgBACIADACIABAAIAAgBIADAAIACgBIABABIAFACIAAADIABAAIAAABIACAAIAAABIACAAIAAABIABAAIAAABIABAAIABABIgCABIAAABIgBAAIAAABIgBAAIgBABIAAAAIgDAAIAAABIgCAAIgDABIgDAAIAAABIABAAIAAADIgDAAIgBABIAAACIAFAAIAAABIABAAIAAACIABAAIAAACIABABIgBAAIAAABIACAAIAAACIgBABIABAAIAAABIABADIABACIAAABIgBAAIgBABIABAAIAAABIABAAIAAABIABAAIABgBIAAgBIACAAIABgBIADAAIACgBIADgBIACgBIACgCIABAAIAAgBIAAAAIABgBIAAAAIABAAIABgBIAAgBIABAAIABgBIAAgBIAAAAIAAgBIABAAIAAgBIABgBIACABIABAAIAAgDIAEAAIAAgBIABAAIAAgBIgBAAIAAgDIACAAIABgBIgBAAIABgBIABAAIAAABIABAAIAAABIADAAIAAgCIABAAIAAgCIACAAIAAgBIACAAIAAgIIABABIABAAIAAABIABAAIAAABIABAAIAAABIABAAIAAABIABAAIAAgBIABAAIAAgBIABAAIAAgBIgBAAIAAgBIgCAAIAAgBIgBAAIAAgEIAEAAIgBgBIACAAIAAgBIACAAIgBgBIAAgDIABAAIAAABIABABIABAAIAAABIACAAIAAABIACAAIABgBIABAAIAAgBIAGAAIgDgCIAAgDIgBgBIAAgCIgBgBIAAgEIADAAIAAgBIADAAIAEAEIABgBIABAAIAAgBIABgBIABAAIAAgBIABAAIAAgBIACgBIABgBIAAgCIABAAIAHAAIABgBIAEAAIABgBIACAAIABgBIAHAAIAAgBIALAAIABgBIAOAAIAAABIAEAAIABABIAKAAIABABIABAAIAAABIABABIAAAAIABAAIABABIAAABIABAAIAAABIABAAIABABIABAAIAAABIABABIAAAFIgCAAIABAAIgBAAIAAACIABgBIAAACIABABIAAACIABAAIAAABIABABIAAACIABAAIAAACIAAAAIAAABIgDAAIAAABIgBAAIAAACIACAAIAAABIABABIAAABIABABIAAABIAAABIABAAIACgCIABAAIAAADIABAAIAAABIABAAIAAABIACABIABAAIAAAFIABAAIAAACIACAAIAAABIABAGIgFAAIAAABIABAAIAAABIgBAAIgBABIAAAAIgBAAIAAABIgBACIgBABIgBACIgCABIABABIABACIAAADIgCAAIgBABIgCABIgBAAIgBABIgDABIgCABIgEAAIAAABIgCACIgBAAIAAABIgCAAIAAADIABABIAFAAIgBABIAAAEIgBACIAAADIABABIAAABIABAAIAAABIABAAIAAABIACACIgBADIAAABIgFAAIgBABIgCAAIgBABIgBAAIAAACIgCAAIAAABIgGAAIgBABIgBgBIAAgBIgBAAIABgBIABAAIAAgBIgBAAIAAgBIABAAIAAgBIgBAAIAAgDIgEAAIAAgBIACAAIAAgBIACAAIAAgCIABgBIAAgBIgCAAIAAgBIgDAAIAAgFIABgBIgBAAIgBgBIgDAAIAAABIgBgBIgCAAIAAgBIgBABIgDAAIgBgBIAAgBIgBAAIAAgBIgBAAIAAgBIgBAAIAAgBIgBAAIgBgBIAAgBIgBAAIAAgBIgCgCIgBAAIgBgBIgCAAIAAABIgBAAIgBABIAAACIgCAAIAAABIgCACIgIAEIgBAAIgBABIAAABIgBABIgBAAIgBABIgBAAIAAgBIgBAAIAAgBIgBAAIAAgBIgBgBIgBAAIAAgEIgBAAIgCABIABAAIAAACIgBAAIAAgBIgBAAIAAgBIgCAAIgCABIgBAAIgCABIgJAAIgBABIgEAAIAAgBIgBAAIAAgBIgBAAIAAgBIgCAAIAAABIgBAAIAAgCIgCAAIgBABIgCAAIAAABIgCAAIAAABIgBAAIgBgBIAAABIgEAAIAAgBIgBAAIgBgBIgBgBIgCgBIAAgBIgBAAIAAABIgDAAIAAABIgBABIAAACIgBAAIABADIgCAAIAAABIgBAAIAAABIgBgBIgHAAIAAgFIgCAAIAAgBIgCAAIgDgCIgCgBIgBAAIAAABIgBAAIAAABIABAAIAAABIgBAAIAAABIgDAAIAAACIgBAAIAAgBIAAAAIAAACIgBAAIAAABIABAAIAAABIgCACIgBACIAAACIgDAAIAAACIgBAAIgBgBIgCAAIAAACIABAAIAAABIABAAIAAABIABAAIAAABIACAAIABACIgBABIABAAIAAADIgBAAIAAABIgBAAIAAABIgBAAIAAACIABgBIABAAIAAABIADAAIAAgBIABABIAAAAIgBAAIAAABIAFAAIAAABIABAAIAAABIABAAIAAABIABABIAAAEIAIAAIAAABIABABIgHAAIAAgBIgHAAIABABIAAABIABABIAEAAIABgBIABAAIAAACIgDAAIAAABIgCAAIABADIABAAIgCAAIgBABIgCAAIAAABIgBAAIAAAEIAEAAIAAADIABAAIAAAEIgBAAIAAABIABABIgBAAIAAABIABAAIAAADIABAAIAAADIgIAAIAAgBIgBAAIAAgBIgBgBIgBAAIAAgBIgCAAIAAAFIAHAAIAAABIABAAIAAABIABABIAAADIgCAAIAAADIAAAAIAAADIABAAIAAgBIACAAIABABIAAABIABABIABAAIAAABIAGAAIAAgBIABAAIABABIAEAAIAAgBIABAAIAAABIAGAAIAAABIAFAAIAAABIABAAIAAgBIACAAIAAgCIAEAAIAAgBIAMAAIABABIAAADIACAAIAAACIABgBIAAABIAAgCIABAAIAAABIACAAIAAABIABAAIABABIAEAAIAAABIADAAIAAABIACAAIAAAHIgBAAIAAAGIABAAIABABIACAAIABABIABAAIgBABIAAACIAAABIAAACIgBAAIAAACIgBAAIAAACIgBAAIAAACIABAAIABAAIAAABIABABIAAAAIABABIABAAIAAADIgBABIAAADIgPAAIAAgBIgBgHIgEABIAAADIgBABIAAACIgBAAIAAADIgBABIAAABIgOAAIgBABIgCAAIgCABgAjzgkIAAgFIgBAAIAAgBIgBAAIgBgBIAAgBIABgBIAAgBIgBAAIAAgBIgBgCIgBAAIgBgBIAAgBIgBAAIAAgBIgBgCIgBAAIAAgCIgBAAIgBABIgBAAIAAgCIgCgBIgBAAIgCgBIgIAAIgDgCIgBAAIgEgCIgBAAIgBABIgCAAIABgBIgBgBIgCAAIAAACIgBAAIAAABIgEAAIAAgBIgCAAIAAgCIgBAAIAAABIgBAAIAAABIgBAAIAAABIgBAAIAAABIACAAIAAABIABgBIACAAIAAADIABADIAAABIgBAAIAAABIgBAAIAAABIgBAAIAAABIgBAAIAAACIgCAAIAAgCIgBgBIAAgDIgBAAIAAACIgHAAIAAABIgBAAIAAABIgBABIgBABIAAABIgBAAIAAgBIgBAAIAAgBIgDAAIAAgBIABgBIgDAAIAAgBIgBAAIABgBIACAAIABgBIACAAIAAgCIgCAAIAAgBIgBAAIAAgBIgBAAIAAgBIgCAAIAAgBIgBAAIAAgCIgBgBIgCAAIAAABIgCAAIAAgBIABAAIAAgBIgBAAIAAgBIgDAAIAAABIgCAAIAAgBIACgCIACgDIgFABIAAgCIgBAAIgBgBIgDAAIAAgCIABAAIAAgBIABAAIAAgDIgBAAIAAgEIABAAIAAgCIADAAIAAgBIACAAIAAgBIgBgBIAAgDIgBgBIAAgCIgBAAIAAgCIABAAIAAgDIABAAIAAgBIABAAIABABIAAgBIABAAIAAgBIABAAIABgBIAAAAIABAAIAAgBIABAAIAAgEIABAAIAAgBIgBAAIAAgBIgDAAIgBgBIgBAAIAAgCIAEAAIAAgBIACAAIAAgBIABAAIAAgBIAFAAIACgCIAEAAIAAgBIADAAIAAgBIABAAIAAABIADAAIAAgBIgBAAIAAgBIABAAIAAAAIABAAIAAgEIgEgCIgBgBIADAAIAAgBIABAAIAAgCIABAAIAAgCIACAAIAAABIABAAIAAABIABAAIABgBIABAAIAAgCIgBAAIAAgFIABAAIAAABIAEAAIAAgBIABgCIABgBIAAgBIABgBIgBgCIABAAIAAgBIABAAIAAgFIACAAIABgBIABAAIAAgBIABAAIAAgCIABAAIAAgBIgBAAIgCgCIgBAAIAAgEIABAAIAAgBIABgBIABAAIAAgBIABAAIAAgBIABAAIAAgBIgBAAIAAgBIAAgBIgBAAIAAgBIgEgEIgBAAIAAgBIABgBIAAgBIABAAIAAABIABABIACAAIAAABIABAAIAAgBIgBgCIAAgBIABAAIAAgCIAAAAIAAgCIABgDIAAgCIgBgBIAAAAIgBABIgBAAIABgBIAAgBIgBAAIAAgBIABAAIAAgBIgBAAIAAgBIgBAAIAAAAIgBAAIAAAAIgBAAIAAABIgBAAIAAABIgDAAIAAgBIgBAAIAAgCIgDgBIgBABIAAgDIACgDIgBAAIAAgBIgKAAIgBABIgBAAIgBgBIgCAAIgBgBIAAABIgBABIgDAAIAAgBIgEAAIAAgBIABAAIgBgBIAAgBIACAAIABgBIACgBIgBgBIAAgBIgBAAIAAgBIADgDIADABIAAABIABAAIABgCIAAgBIABAAIAAgBIABAAIAAgBIABAAIAAgCIABAAIAAgCIABgBIABgBIACAAIAAgEIAAAAIAAgFIAFAAIAAgCIAHgCIAAgBIADgBIABAAIAGgCIABgBIACAAIABgBIAFAAIAAABIABAAIAAABIgBAAIAAACIgBAAIAAADIACAAIAAABIgBAAIAAACIADAAIABAAIADAAIAAABIAHAAIAAABIABAAIAAABIACAAIAAACIABABIABAAIAAACIABAAIAAADIABABIAAAEIABAAIABABIAAAAIAAABIABAAIAAAAIAEAAIAAABIABAAIAAACIgEAEIgBAAIgBABIAAABIABAAIABgBIACAAIAAABIABAAIAAADIABgBIABAAIAAgBIABAAIAAgBIAEAAIAAACIABAAIACACIAAACIgBAAIAAABIgBAAIAAABIABAAIAAABIgCAAIAAgBIgEAAIAAABIABAAIAAABIABAAIABABIAAABIABAAIAAABIABAAIAAABIABAAIAAABIABAAIAAABIABAAIAAABIABAAIAAABIABAAIAAABIAAAAIAAABIABAAIAAABIABAAIAAABIABAAIAAABIABAAIAAABIABAAIAAgBIACAAIABABIACAAIABABIABAAIACACIABAAIAAACIgCACIAAABIABAAIAAABIABAAIABABIABAAIAAABIABAAIAAABIABAAIABABIAGAAIAAACIABAAIAAABIABAAIAAABIACAAIAAAEIgBAAIAAADIgBADIABAAIAAABIABAAIAAACIABAAIAAABIABAAIAAABIgBABIAAABIABAAIAAgBIAEAAIAAACIACAAIABABIABAAIAAABIABAAIAAABIABAAIAAgBIAEAAIAAABIABAAIgBABIAAABIgCAAIAAAAIgCAAIAAABIgBAAIAAAEIABAAIAAgBIACAAIAAABIABAAIAAABIACADIAGAGIACAEIABAAIAAABIgBABIAAABIABAAIAAABIgBAAIAAACIABABIABgBIABAAIAAAGIABAAIAAABIABAAIAAABIgDAAIAAABIgCAAIAAgBIgBAAIAAgBIgBAAIgBABIgBAAIAAABIgEAAIgCABIAAABIgDAAIAAgBIgBAAIAAABIgFAAIAAAAIgCAAIAAABIgBAAIAAABIgBAAIAAABIgCAAIAAACIACAAIABABIAAABIABAAIAAABIACAAIAAABIAAAAIABABIAAABIABAAIAAACIABAAIABABIAAAFIgBAAIAAAEIABAAIAAABIABABIAAAEIgBABIAAABIgDAAIAAABIgBAAIAAACIAAgBIAAABIgFAAIAAgBIgCAAIAAgBIgBAAIAAABIgBAAIgBABIAAABIgBAAIAAABIgBAAIAAABIgCAAIAAgBIgBAAIgCAAIgFAAIAAADIgBAAIAAgBIgEAAIAAABIgBgBIAAABIgBAAIAAABIABAAIAAABIgBAAIgBABIgBgBIAAACIABAAIAAABIABAAIACACIgCAAIgBABIgBAAIgBABIAAACIgBABIAAADIgDAAIAAAAIgDAAIAAABIgCAAIgBABIgBAAIABABIgBABIABABIgCAAIAAABIgBAAIAAABIgEAAIAAABIgBAAIAAACIgBAAIAAgBIgCAAIAAABIgBAAIAAABg");
	this.shape_3.setTransform(8.8,13.5);

	this.timeline.addTween(cjs.Tween.get({}).to({state:[{t:this.shape_3},{t:this.shape_2}]}).wait(1));

	// Capa_4
	this.shape_4 = new cjs.Shape();
	this.shape_4.graphics.f().s("#65653D").ss(0.5,1,1).p("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");

	this.timeline.addTween(cjs.Tween.get(this.shape_4).wait(1));

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = new cjs.Rectangle(-58.5,-57,117,114);


(lib.graph_06 = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// Capa_1
	this.shape = new cjs.Shape();
	this.shape.graphics.f().s("#00FF00").ss(0.2,0,0,22.9).p("AmtFtINbAAIAArZItbAAg");

	this.timeline.addTween(cjs.Tween.get(this.shape).wait(1));

	// Capa_2
	this.shape_1 = new cjs.Shape();
	this.shape_1.graphics.f("#FFFF00").s().p("AgjDiIAAgBIgBAAIAAgBIABAAIAAgBIABAAIAAABIACAAIAAABIABAAIAAABgAggDgIAAgBIABAAIAAABgAggDggAhbDZIAAgBIgBAAIAAgCIgDAAIABAAIAAgCIgBAAIAAgBIADAAIAAABIAAAAIAAACIABAAIAAgDIACAAIAAgFIADAAIgCgBIAAgJIADAAIAAAGIAAAAIAAACIAAAAIAAADIgBAAIAAADIABAAIAAABIgBABIAAAFgAhMDTIAAgDIACAAIAAABIABAAIAAgBIABAAIAAgDIABAAIAAgBIABAAIAAgBIADAAIAAgBIAAAAIAAAEIAAAAIAAABIAAABIAAABIgBAAIAAABIgCAAIAAgBIgBAAIAAABIgDAAIAAgBIAAAAIAAABIgBAAIAAABgAgHDGIAAgBIgBAAIAAgBIACAAIAAgCIACAAIAAACIgBAAIAAACgAggDGIAAgBIgCAAIAAgBIgCAAIAAgCIABAAIAAABIABAAIACAAIABAAIAAACIAAAAIAAABgAgWDDIAAAAIgCAAIAAgCIACAAIAAABIACAAIAAABIgBAAIAAAAgAhuDCIAAgDIAAAAIAAgBIgBAAIAAgBIADAAIAAgBIABAAIAAACIADAAIgCABIAAABIgBABIgBAAIAAABgAhkDBIAAgCIgBAAIAAgBIABAAIAAgBIABAAIAAgBIACAAIAAACIgBAAIAAABIgBAAIAAACgAhHC/IAAgFIgBAAIAAgBIABAAIAAgBIABAAIAAAAIADAAIAAAAIAAAAIAAAFIAAAAIAAACgAgfC6IAAAAIAAgBIgBAAIAAgBIgCAAIACgBIAAgGIgCAAIAAgBIACAAIAAABIABAAIAAAAIABAAIAAABIABgBIABAAIAAACIgBAAIAAACIgBAAIAAACIABAAIAAABIACAAIAAABIABAAIAAABIgEAAIgBABgAhVC5IAAgBIgBAAIAAAAIgDAAIAAgBIABAAIACgCIAAACIABAAIAAgDIAAAAIAAABIABAAIAAADIgBAAIAAABgAhlC4IABgBIgBAAIAAgDIgBAAIAAgCIABAAIAAgBIgBAAIAAAAIgBAAIAAAAIAAAAIAAgCIABAAIAAgCIADAAIAAABIABAAIAAABIABAAIAAABIgBAAIAAABIgCAAIAAABIABAAIAAABIABABIgBABIAAACIgBABIAAAAgAhUC1IAAgBIABAAIAAABgAhUC1gAhfC1IgCgBIAAgCIACAAIAAgBIADAAIAAAAIgBAAIAAgBIABAAIAAgBIgBAAIAAgCIgBgBIAAgBIgBAAIAAABIgDAAIAAgBIgDAAIAAABIgCAAIAAABIAAAAIAAgBIgBAAIAAgCIgDAAIAAABIgBABIgBAAIAAgBIgBAAIAAgBIAAAAIAAgDIAAAAIAAgBIABAAIAAAAIABgBIgBAAIAAgCIABAAIAAgBIABgBIAAgBIABABIAAACIACAAIAAgDIABAAIAAgBIgBAAIAAgBIgDAAIgBgBIAAgCIABAAIAAgBIgBAAIAAgCIgBAAIAAgCIABAAIABABIAAABIABAAIAAgBIACAAIAAACIACAAIAAgBIACAAIAAgCIgBAAIAAgCIgBAAIAAgDIgBACIAAgCIAAAAIAAgBIgBAAIAAgBIgCAAIAAgBIACAAIAAgBIgCAAIAAgBIgBAAIAAgCIgBAAIAAgCIgBAAIAAgBIgBAAIAAgBIAAAAIAAgBIgCAAIAAgCIgBAAIAAgBIgBgBIAAAAIgBAAIAAgCIgBAAIAAgBIACAAIAAABIABAAIAAACIACAAIAAgEIgBAAIAAgBIABAAIAAAAIgBgBIACAAIAAABIAAAAIAAgBIABAAIAAgDIgBAAIAAgDIADAAIAAADIABAAIAAABIAGAAIAAADIAEAAIABgBIABAAIAAABIACAAIAAAAIABAAIAAAAIABAAIABAAIgBAAIAAABIgBAAIAAABIgBAAIAAABIAAAAIAAACIgCAAIAAAAIACAAIAAABIADAAIAAABIABABIAAABIACAAIAAADIABAAIAAABIABAAIAAABIABAAIABABIABAAIAAABIABAAIAAABIABAAIAAABIABAAIAAAAIABAAIAAACIgCAAIAAAEIABAAIAAAAIADAAIAAADIABAAIAAgBIABAAIAAgDIAGAAIAAABIAAAAIAAAAIABAAIAAACIgBAAIAAACIABAAIAAACIgBAAIAAABIgBAAIAAgDIgEAAIAAgCIgBAAIAAADIgCAAIAAABIgCAAIABgBIAAgBIgCAAIAAgCIgBAAIAAACIgEAAIAAABIABABIAAADIgCAAIAAABIABAAIAAACIABAAIAAABIgBAAIAAABIgBAAIgBABIAAADIAAAAIAAAAIgBAAIAAAGIgCAAIAAABIgCAAIABABIgBAAIAAABIgBAAIAAgBIgBAAIAAABIAAAAIAAACIABAAIAAAAIABAAIAAABIgBAAIABABIgBAAIAAABIgBgBIAAABIAAAAIAAABgAhcCpIAAABIAAAAIAAgBIABAAIAAgDIgBAAIAAAAIAAAAIAAgBIAAAAIAAgCIABAAIgBgBIACAAIAAgCIgBAAIAAgBIgBAAIAAgBIAAAAIAAACIgBAAIAAABIgCAAIAAACIgCAAIgBgBIAAABIgBAAIAAADIABAAIAAACIADAAIAAgBIABAAIAAADIABAAIAAgBgAgRCyIAAgDIgBAAIAAABIgCAAIAAABIAAAAIAAABIAAgBIgBAAIgCAAIAAAAIABAAIAAABIgCAAIAAgBIgBAAIAAAAIgBAAIAAgCIABAAIAAgBIABgBIAAgDIgBAAIAAgBIABAAIAAgCIABAAIAAgBIABAAIAAgBIgCAAIAAgCIABAAIAAgDIgBAAIAAgBIgBAAIAAAAIABAAIAAgDIgEAAIAAgCIABAAIAAgBIACAAIAAABIABABIADAAIAAABIABAAIAAACIABAAIAAgBIABAAIAAgBIABAAIgBgBIAAgCIABAAIgBgBIACAAIAAgBIADAAIAAgBIAAAAIAAABIABAAIAAABIABAAIAAABIABAAIAAABIgBABIAAABIgCAAIAAABIgBAAIAAABIABABIgBAAIAAAAIgCAAIAAABIACAAIAAACIgCAAIAAAEIgBAAIAAAAIAEAAIAAABIABAAIAAACIABAAIAAAEIAFAAIAAACIgBAAIAAgBIgBAAIAAABIgBAAIAAACIgCAAIgBAAIAAgCIgBAAIAAABIgBAAIAAgBIgCAAIAAACIACAAIAAABgAg4CfIAAgBIAAAAIAAgBIAAgBIgBAAIAAABIgBAAIAAgEIABAAIAAgBIgBAAIAAgBIABAAIAAgDIABAAIAAgBIAAAAIAAgDIACAAIAAABIABAAIAAACIABAAIAAgDIADAAIAAAEIABAAIABgBIABAAIAAABIgBAAIAAABIgCACIAAABIgBAAIAAABIgCAAIAAABIgBAAIAAABIABAAIAAACIgBAAIAAABIgCAAIAAABgAiACeIAAgDIACAAIAAABIABAAIAAABIgBAAIAAABgAADCbIAAgBIgCAAIAAgBIACgBIgCAAIACgBIgEAAIAAgCIACAAIAAgBIADAAIAAAAIABAAIAAACIADAAIAAABIABAAIAAgBIACAAIAAACIgCAAIAAACIgCAAIAAABgAgfCVIAAAAIABgBIAAgDIgBgBIAAgBIAAAAIAAgBIAAAAIAAABIACAAIAAgBIgBAAIAAgBIABAAIAAgCIACAAIAAABIABAAIAAgBIABAAIAAgBIACAAIAAABIADAAIAAgBIAAAAIAAABIABAAIAAgBIAFAAIAAADIABAAIAAgDIAAAAIAAABIABAAIAAADIgBAAIAAABIgDAAIAAgBIgCAAIAAABIgBAAIAAABIgEAAIAAABIgBAAIAAACIgCAAIAAABIACAAIAAAAIABAAIAAADIgEAAIgBABIgDAAIAAABgAAPCXIAAAAIAAABIgBAAIAAgBIgCAAIAAgBIAEAAIAAgBIABAAIAAgBIABAAIAAACIgBAAIAAABIgBAAIgBABgAgqCWIAAgBIgBAAIAAgCIABAAIAAABIACAAIAAACgACvCVIgBgBIAAgDIgBAAIABgBIAAgBIABAAIAAgBIABAAIAAABIACAAIAAgBIACAAIgBACIgBABIAAACIAAAAIAAABIgBAAIgBABgAASCUIAAgBIABAAIAAABgAASCUgADGCQIAAgDIADAAIAAACIgCAAIAAABgAgtCOIAAgCIgBAAIAAgBIAEAAIAAADgAgHCLIAAgBIgBAAIAAgBIABAAIAAgBIgBAAIAAgBIABAAIAAgCIABAAIAAgBIABAAIAAACIABAAIAAABIABAAIAAACIgCAAIAAACgADJCHIAAgBIABAAIAAgCIAEAAIAAABIABABIAAABIgFAAIAAABgAChCIIAAgBIgCgBIABAAIABgEIAFAAIAAABIgBAAIAAADIgCABIAAABgACzCGIAAgBIgBAAIAAgBIgBAAIAAgDIgCAAIAAABIgDAAIAAABIgBAAIAAgCIgBAAIAAgEIgBAAIAAgBIgBAAIAAgBIgBAAIAAgDIABAAIAAgBIABAAIAAgBIgBAAIgBABIAAAAIgBABIAAgBIgBAAIAAgBIgCAAIAAgBIgCAAIABgBIgBgBIgBAAIAAgBIgBAAIgBgBIgBAAIAAgBIABAAIAAgBIgCgCIAAgBIABAAIAAgBIABAAIAAgBIgBAAIAAgBIgBAAIAAABIgBAAIAAABIABAAIgBABIgBAAIgBgBIgBAAIAAABIgBAAIABABIAAACIACAAIABAAIAAABIACACIAAABIABABIABAAIAAABIABAAIAAABIgBAAIAAABIgBAAIAAABIgBAAIAAABIgDAAIgBgBIgBgBIgBAAIABgBIABAAIABgBIgEAAIAAgBIABAAIAAgBIABgBIABAAIAAgDIgBAAIgBABIAAABIgBAAIgBgBIAAAAIgBgBIABAAIAAgCIAAAAIAAgBIABAAIAAgBIgBAAIAAgBIAAgBIgEAAIAAgDIACgBIABAAIAAgBIgBAAIgCABIAAgBIgBAAIAAgBIgBAAIgCgBIAAgBIABgBIABAAIAAgBIABAAIAAABIABAAIACABIABAAIAAABIABAAIgBABIAAABIABgBIADAAIAAABIABAAIAAgBIABAAIAAgBIABAAIAAgBIgBAAIAAgDIgBAAIgBgBIgBAAIAAAAIgBAAIAAAAIgBAAIAAAAIgBAAIAAgCIABgBIAAgBIAAAAIAAgBIgBAAIAAAAIgEAAIAAgBIABAAIAAgBIgCAAIAAgBIgCAAIAAgBIgBAAIABgBIABAAIAAgBIACAAIgBgBIAAgBIAFAAIAAABIABAAIAAABIgBABIADAAIAAABIgBAAIAAABIACAAIAAABIABAAIAAgBIABgBIAAgBIABAAIAAACIABAAIAAABIACAAIAAABIgBAAIABABIgBAAIAAAAIABAAIABABIAAgBIABAAIAAgBIgBAAIAAgBIAAAAIAAgCIgBAAIAAgCIgBgBIAAgEIABAAIABABIAAAAIAAgBIABAAIABABIAAABIACAAIAAACIACAAIgCABIACAAIACACIgBABIgBAAIAAAFIgCAAIAAAEIADAAIAAABIABAAIAAgCIAAAAIAAgFIACAAIAAAAIABgBIgBAAIAAgCIgCAAIAAgBIgBgCIAAgBIgBgBIAAgBIACgCIAAgCIAAAAIAAAAIABAAIABAAIAAABIABAAIABABIABAAIABABIABAAIAAABIgBABIAAABIABAAIABgCIADABIACADIgBABIABAAIAAACIABAAIAAABIACAAIAAgBIABAAIAAgCIgBAAIAAgBIABAAIAAgEIgGAAIAAgCIAAAAIAAgBIAAgBIABAAIgBAAIAAgCIABAAIAAgBIgBAAIAAgBIgCAAIAAABIABAAIAAABIgBAAIAAACIABAAIAAAAIgEAAIAAAAIABAAIAAgDIABgBIgBAAIAAgBIABAAIAAgBIADAAIAAgBIgBAAIAAgBIgBAAIAAgDIgBAAIAAgDIABAAIAAgCIgBAAIAAgCIABAAIAAgDIgCAAIAAgBIABAAIAAgBIABAAIAAgBIgBAAIAAAAIABAAIAAgBIABAAIAAgCIgBAAIAAABIgBABIgFAAIAAABIABAAIAAAAIABAAIgBABIgBAAIAAgBIgDAAIAAABIAAAAIAAABIgCAAIAAgBIgCAAIAAgBIgBAAIAAgBIgBAAIAAABIgBAAIAAAAIABAAIAAABIgCAAIAAACIgBABIAAgCIgBAAIAAgCIABAAIAAgBIABAAIAAgDIAAAAIAAgBIAAgBIgBAAIAAgBIACAAIAAABIABAAIgBABIAAABIABABIAAABIABAAIAAgBIABAAIAAABIADAAIAAgBIABAAIAAgCIACAAIAAABIABAAIAAABIABAAIAAgBIAEAAIAAgBIABABIAAgBIABAAIAAABIABAAIAAgBIAAAAIAAgBIAAAAIAAABIAGAAIAAgBIABAAIAAACIAAAAIAAABIgCAAIAAABIgCAAIAAABIgBAAIAAABIABAAIAAABIADAAIAAABIgBAAIAAABIACAAIAAABIAFAAIAAACIADAAIAAACIACAAIAAACIgBAAIAAABIgBAAIAAABIgBAAIAAgBIgEAAIAAABIgBAAIAAAEIgBAAIAAABIACAAIAAgBIABAAIAAgBIABAAIAAgBIACAAIAAgBIABAAIAAABIABAAIAAgCIABAAIgBgBIABAAIAAABIACAAIAAACIAFAAIAAABIgBAAIAAABIgCAAIAAABIgEAAIAAABIAAAAIAAABIABAAIAAABIgBAAIAAACIgBAAIAAACIABAAIAAABIAAAAIAAABIgCAAIAAABIgCAAIAAABIgBAAIAAABIABAAIgBABIABABIAAACIACAAIAAgBIABAAIAAgBIABAAIAAgBIACAAIAAgBIACAAIAAgBIAEAAIAAgBIAAAAIABgBIAAgBIACAAIAAgBIABABIgBABIABAAIABABIACAAIAAABIgBAAIAAABIgBAAIAAABIgBAAIAAACIgBAAIAAABIgCAAIAAABIgBABIAAABIACAAIAAABIgBAAIAAABIgBAAIAAABIABAAIAAABIACAAIABACIACAAIAAgDIABAAIAAgBIgBAAIABgBIgBAAIAAAAIACAAIAAgCIADAAIAAgBIAAABIAAACIgBAAIAAACIABgBIAAAAIAAABIAAAAIAAABIgBAAIABACIAAABIABAAIAAgBIABAAIAAgCIABAAIAAgBIACAAIAAgCIABAAIAAAAIADAAIAAABIABAAIABABIgBAAIAAABIgBAAIAAACIgBAAIAAAAIgBAAIAAABIAAAAIAAABIgCAAIAAgBIgCAAIAAABIgBAAIABABIACAAIAAABIABAAIAAABIgDAAIAAABIgBAAIAAABIgBAAIAAABIABAAIAAABIAMAAIABABIACAAIAAABIABAAIABgBIAAgBIABAAIAAgDIgBgBIAAgBIAEAAIABgBIAAACIABAAIAAABIAAAAIAAADIABAAIAAACIABAAIABABIgBAAIAAABIACAAIAAACIgCAAIAAADIgCAAIAAgCIAAAAIAAgBIgBAAIAAABIgEAAIAAgBIgBAAIAAgBIgBAAIAAgCIgDAAIAAABIgBAAIAAACIgBABIAAgCIgCAAIAAgCIgBAAIAAABIgDAAIAAgBIAAAAIAAABIgCAAIAAgBIgCAAIAAABIgCAAIAAABIgBAAIAAABIgDAAIAAABIABAAIAAACIgBAAIAAAAIgBABIgBAAIAAgBIgBAAIgBABIgBAAIAAgEIgBAAIAAgBIgBAAIAAgCIgDAAIAAACIgCAAIAAABIgBAAIAAADIABAAIACAAIAAABIABAAIAAABIABAAIgBABIAAACIgBAAIAAADIgCAAIAAACIgDAAIAAACIABAAIAAACIABAAIAAgCIADABIABAAIAAgBIABAAIAAgBIAAAAIAAABIABAAIAAABIgBAAIAAABIAAAAIAAABIgCAAIAAADIABgCIABAAIAAACIAAAAIAAACIgCAAIAAgBIgCAAIAAgBIgBAAIAAAAIgBAAIAAABIgBgBIgBAAIAAABIgBAAIAAgBIABAAIAAAAIgBgCIgEAAIAAgBIgBAAIAAADIgCAAIAAAAIgBAAIAAACIgBAAIAAABIAAAAIAAgBIgBAAIAAABIgBAAIAAABIgDAAIAAABgAChBtIACAAIAAACIACAAIAAgCIABAAIAAgBIABAAIAAgBIABAAIAAgCIgBAAIAAAAIgFAAIAAAAIgBAAIAAABIABAAIAAACIgBAAgAAjCEIAAgBIgDAAIAAgEIABAAIAAgBIAAAAIAAgBIACAAIAAgBIACAAIAAACIADAAIAAABIAAAAIAAADIAAAAIAAABIgEAAIAAABgAgeCEIAAgBIgCAAIAAgBIABAAIAAgBIgBAAIAAgCIABAAIAAgBIABAAIAAABIACAAIABACIAAAAIABAAIAAACIgCAAIAAABgAARCBIgCAAIAAAAIABAAIAAgCIABAAIAAgBIABAAIAAgBIABAAIAAgBIACAAIAAABIABAAIAAACIAAAAIAAACIgEAAIAAABgADOCBIAAAAIgBAAIgBAAIAAgCIgBAAIAAgCIABgBIACAAIAAABIABAAIAAABIABAAIAAABIgBACIAAAAgACZB/IAAgBIgCAAIAAgCIADAAIAAAAIABAAIAAABIgBAAIAAACgAhMB/IAAgBIgBABIAAgCIgBAAIAAgBIgBAAIAAAAIABAAIAAgBIAEAAIAAABIAAAAIAAACIAAAAIgBABgAChB+IAAgBIgCAAIAAgBIAAAAIAAAAIAAgCIABAAIAAgBIABABIABAAIAAABIADAAIAAABIABABIgBAAIAAABgAAHB9IAAgBIgCAAIABgBIgBgBIABAAIAAgDIAEAAIAAABIACAAIAAADIgBAAIAAABIgBAAIgBAAIgBAAIAAABgAh3B9IAAgBIgBAAIAAAAIABgBIAAABIABAAIAAAAIACAAIgBABgAg7B8IAAAAIgDAAIAAAAIgBAAIAAAAIgCAAIgBgBIAAABIgBAAIAAgDIAAAAIAAgEIAAABIABAAIAAABIADAAIAAgBIACAAIACgBIACACIACACIAAABIgBAAIAAABIABAAIAAABIgBAAIAAgBIgCAAIAAABgAAWB8IAAgBIABAAIAAgEIACAAIAAACIABAAIAAABIABAAIAAABIgBAAIAAABgAhYB8IAAgBIgBAAIAAgBIADAAIAAACgADNB3IAAgCIABAAIAAACgACVB2IAAgBIABAAIAAABgACWB1gAEEBwIgDAAIgBgBIgBAAIABAAIABAAIAAgEIAAAAIAAgBIABgBIABABIABAAIACABIgBAAIAAABIABAAIAAABIACAAIgBACIgBAAIAAABIgBAAIAAABgAAbBwIAAgBIgCAAIAAAAIgBAAIAAgDIgBAAIAAABIgBAAIAAgBIgBAAIAAABIgEAAIAAADIgBAAIAAgBIgBAAIAAABIAAAAIAAgBIgCAAIAAgDIABAAIAAgCIABAAIAAABIAAAAIAAgBIABgBIAAABIADAAIAAgBIADAAIAAgBIgBAAIAAgCIABAAIAAgBIAAgBIABAAIAAABIACAAIAAACIABAAIABABIgBAAIAAABIgBAAIAAAAIABAAIAAACIABAAIAAgBIADAAIAAACIgBABIABAAIAAACIgBAAIAAABgAhuBvIgBAAIABAAIgBgCIgBAAIAAgCIACAAIAAgCIAAAAIAAABIABAAIABABIAAACIgCAAIAAACgACJBsIAAgDIgBAAIAAgBIACAAIAAABIAFAAIAAABIgCAAIAAABIgBAAIAAABgAEJBpIgBAAIAAAAIgBAAIAAgCIgCAAIAAgEIACgBIABAAIAAgBIgBAAIABgBIABAAIAAgBIACAAIAAABIABAAIAAgBIAAAAIAAgBIADAAIAAgBIAFAAIgBABIAAAEIAAAAIgBgBIgBAAIAAABIgDAAIAAABIgBAAIAAgCIgBAAIAAACIAAAAIgBgBIAAADIABAAIAAABIAAAAIABABIAAABIABABIgBAAIgBAAgAhnBpIAAgBIgBAAIAAgBIgCAAIAAgDIACAAIAAgBIABAAIAAABIABAAIAAAFgAEBBpIAAgBIAAAAIAAgBIgBgBIAAgBIABAAIgBgBIADAAIAAAFgAAdBoIAAgCIgBAAIAAgBIACAAIAAgBIADAAIAAACIgBAAIAAABIgCAAIAAABgAD5BnIAAgBIAAAAIgBgBIAAgDIABAAIAAABIACAAIABABIAAADgAECBiIAAgBIgBgBIAAAAIgBABIgBAAIgCABIgBgBIAAgCIABAAIAAgBIgBAAIABgBIACAAIAAAAIABAAIABgCIAAgBIABAAIAAADIABAAIAAABIABAAIAAADIgBAAIAAABgAAoBfIAAgBIgBAAIAAgBIgCAAIAAAAIADAAIAAAAIABAAIAAACgAAFBeIAAgBIABAAIAAgCIABAAIAAADgAEEBaIAAgCIgBAAIAAgBIgBAAIAAgDIgBAAIAAgCIABAAIAAgBIABAAIAAABIABAAIAAgBIABAAIAAABIABAAIAAACIABAAIAAABIABAAIAAgBIABAAIgBgBIAAgBIABAAIAAgBIACAAIABgBIAAgBIABAAIAAADIgBAAIAAACIACAAIABgBIAAACIgBAAIAAADIgDAAIgBABIgBABIgBAAIgBgBIgCACgADmBbIAAgCIACAAIABABIgCABgAgCBbIAAgBIAAgBIgBAAIAAgBIABAAIAAgBIAAAAIAAgBIABAAIAAABIABAAIAAABIABAAIAAACIgCAAIAAABgAAdBXIAAgBIgCAAIAAgDIABAAIAAgBIABAAIAAgCIgBAAIAAgCIABAAIAAgCIABABIADAAIAAABIABAAIAAACIgBABIAAABIAAAAIAAACIABAAIAAACIgBAAIAAgBIgBAAIAAABIgBAAIAAABgAi7BXIAAgBIgBAAIAAgDIABAAIAAABIABAAIABABIAAACgAD/BWIAAgBIgCAAIgBABIgDAAIAAgBIABAAIAAgBIgBAAIAAgCIADAAIAAABIABAAIACgBIAAABIABAAIAAADgAAWBTIAAgBIgEAAIAAgBIgBAAIABgBIABAAIAAgCIACAAIAAABIABAAIgBABIABAAIAAADgAjLBTIAAgCIgBgBIAAgBIABAAIAAABIADAAIAAABIAAAAIAAABIAAABgAiyBRIgBAAIAAgDIABgBIADAAIAAADIgBAAIAAABIgCABgAhVBRIAAgBIgDAAIAAgBIADAAIAAgCIABAAIAAgBIABABIABAAIgBABIAAACIgBAAIAAABgAB5BQIAAgBIgEAAIgBgBIgBAAIAAgCIACAAIAAABIABAAIAAgBIABAAIAAgBIABAAIAAABIABAAIAAgBIABAAIAAABIABAAIAAABIAAADgABqBQIgBgBIABAAIAAgCIABAAIACgBIAEAAIAAABIAAAAIAAACIgEAAIgBABgAieBPIAAgBIAAAAIAAgBIACAAIAAACgACiBNIgBAAIAAgBIgBAAIgBgBIAAAAIAAgEIgBAAIAAgBIgBgBIAAAAIABgBIAAgBIABgBIAAAAIAAABIABAAIACACIABAAIAAABIACAAIAAABIACACIgBACIAAABIgBAAIAAACgADWBNIAAgCIACAAIAAgCIgBgBIAAgCIABAAIAAgBIADAAIAAAAIABAAIAAABIABAAIAAACIAAAAIAAABIAAAAIAAACIAAAAIAAABIgBAAIAAABgACFBNIAAgBIgBAAIgBgBIAAAAIAAAAIAAAAIAAgCIgBAAIAAgBIABAAIAAgBIgBAAIAAgCIADAAIAAgBIADAAIgBABIABAAIACAAIgBAAIAAACIgBAAIAAACIgBAAIAAACIABAAIAAAAIgBAAIAAABIgBAAIAAABgAjKBNIAAgBIABAAIAAgDIACAAIAAACIACAAIAAABIgDAAIAAABgAB7BMIAAgBIABAAIAAABgAAZBMIAAgBIgBAAIAAgCIABAAIAAgBIABABIABAAIAAACIgBABgAjcBMIAAgBIACAAIAAgCIAAAAIAAACIACAAIAAAAIgBAAIAAABgABrBLIAAAAIgCAAIAAgCIABAAIAAgBIAAAAIABABIAGAAIAAACIgCAAIAAAAgAAFBLIAAAAIgBAAIAAAAIgBAAIAAgEIABAAIAAgBIABAAIAAABIABAAIAAACIABAAIAAACIgBAAIAAAAgAiuBLIAAgCIgBAAIAAgHIgBAAIAAgBIAEAAIAAABIACAAIAAgBIgBAAIAAgDIACAAIAAgBIABAAIAAgCIABAAIAAgBIABgBIAAABIABAAIAAACIABAAIAAACIAAAAIAAABIgBAAIAAABIgBAAIAAABIADAAIAAgBIADAAIAAABIgBAAIgBABIgCAAIAAABIgBAAIAAABIgBAAIAAABIgBAAIAAAAIABACIgCAAIAAgBIgCAAIAAgBIgBAAIAAADIgBAAIAAABIgBgBIAAADgAjHBJIAAgBIABAAIAAgBIABAAIAAgBIgBAAIAAgBIAFAAIAAACIgBAAIAAACgAjHBJgAjTBJIAAgBIgBAAIAAgBIAAAAIAAgBIAAAAIAAgBIADAAIAAADIgBAAIAAABgACXBHIgBgBIgBAAIAAgBIAAAAIAAAAIAAAAIAAgDIABAAIAAgCIABgBIABABIAAACIgBAAIAAABIABAAIABABIACAAIAAABIgBAAIAAABIgBAAIgBABgAggBGIAAgBIgDAAIAAAAIgCAAIAAgBIgBAAIAAgDIABAAIAAABIACAAIAAgBIABAAIgBgBIgDAAIAAABIgDAAIAAABIgCAAIAAABIABAAIAAABIgBAAIAAABIgDAAIAAgDIABAAIAAgBIABAAIAAgDIgBAAIAAgDIADAAIAAABIACAAIAAgBIACAAIAAABIABAAIAAgBIABAAIAAgBIABgBIgBAAIAAgDIgBAAIAAgBIACAAIAAgBIgCAAIAAgBIgBAAIAAgBIAAAAIAAgBIgBAAIAAABIgBAAIAAgBIgCAAIAAABIgBAAIAAgCIgFAAIAAABIgCAAIgCgBIgBAAIAAACIgBAAIAAABIgCAAIAAgDIgBAAIAAABIgBAAIAAABIgBAAIAAACIABAAIAAACIgCAAIAAABIgBAAIAAACIABAAIAAAAIgCAAIAAABIABABIAAABIABAAIAAABIACAAIAAABIACAAIAAABIADAAIAAABIABAAIAAABIgBAAIAAABIgBAAIAAABIgBAAIAAABIgBABIAAgCIAAAAIAAgBIgBAAIAAgBIgBAAIAAgBIgEAAIAAgBIgBAAIAAgBIgBAAIAAgBIgCAAIAAgCIABAAIAAABIABAAIAAgBIABAAIAAgCIgBAAIAAgCIgBAAIAAgBIgBAAIAAABIgBgBIAAAAIAAABIgBAAIAAADIgCAAIAAABIACAAIAAABIABAAIAAADIgDAAIAAgBIgBAAIAAgBIgCAAIAAABIgBAAIAAACIgBAAIAAABIgBAAIAAgCIgCAAIAAgBIgCAAIAAABIgBAAIAAABIgBgBIAAgDIADAAIAAgCIgCAAIAAgDIACAAIAAACIABAAIABABIADAAIAAgBIABAAIAAAAIABAAIAAgCIABgBIAAgBIABAAIAAgCIgDAAIAAgBIgBAAIgBABIAAAAIgDAAIAAADIgBAAIAAgBIgDAAIAAgBIgCAAIAAABIgBAAIAAgBIAAAAIAAgBIgBAAIAAAAIgDAAIAAgCIABgBIgDAAIAAgBIgBAAIAAgCIAAAAIAAgCIgBAAIAAgBIgBAAIAAgBIgBAAIgBgBIAAABIgDAAIAAACIgCAAIAAgBIABAAIAAgBIgCAAIAAABIgBAAIAAgBIgEAAIAAgBIABAAIAAgBIACAAIAAAAIABAAIAAgCIgDAAIAAgBIACAAIAAgBIgCAAIAAgCIgBABIAAgBIgCAAIAAABIgBAAIAAgCIgCAAIAAgEIgBgBIABAAIAAgDIgBAAIAAABIgBAAIAAABIgBAAIAAACIgCAAIAAgBIgDAAIAAgBIACAAIAAgBIgBAAIAAgDIABAAIAAgBIABgCIgDAAIAAACIgBAAIgBAAIgCAAIAAgDIgBAAIAAABIgBAAIAAgBIgBAAIAAgBIgBAAIAAABIAAgBIgBAAIAAAEIgBAAIAAgCIgBAAIAAACIgCAAIAAgCIgBAAIAAgBIABAAIAAgCIABAAIAAgBIgCAAIAAABIgDAAIAAgBIgBAAIAAAAIgBAAIAAgBIACAAIAAgBIACAAIAAgBIABAAIAAgBIABAAIAAgBIACAAIAAADIACAAIAAABIABAAIAAABIADAAIAAAAIAEAAIAAgBIAAAAIAAgBIABAAIAAgDIABAAIAAgKIgBAAIAAgBIABAAIAAgHIgBAAIAAgBIgBgBIAAgBIADAAIAAgCIgBAAIAAgEIADAAIAAgCIABAAIAAgBIACAAIAAAAIgDAAIAAAAIgBAAIAAgCIABAAIAAgDIACAAIAAgHIACAAIAAAAIgCAAIAAgCIABAAIAAgCIgBAAIABgBIAAgBIgBAAIAAAAIAAgEIABAAIAAgCIABAAIAAgBIABAAIAAgDIgDAAIAAACIgCAAIAAABIgBAAIAAABIgBAAIAAABIgBAAIAAAEIAEAAIABABIgBAAIAAABIgBAAIAAABIgBABIAAABIgCAAIAAACIgBAAIAAABIgBAAIAAgFIgBAAIgCgBIACAAIAAgBIgCAAIAAAAIgBAAIAAgBIgBAAIgBgBIgBAAIAAgBIAAAAIAAgCIgCAAIAAgBIABAAIAAgBIABgBIgBAAIAAgCIABAAIAAgBIAAAAIAAgBIABAAIAAAAIACAAIABgCIAAgDIgBAAIAAABIgDAAIAAgBIgEAAIAAABIgDAAIAAgBIgCAAIAAgBIgBAAIAAgBIgBAAIAAgBIADAAIAAgBIACAAIABgBIABAAIAAgBIgHAAIAAABIAAAAIAAgEIAHAAIAAABIAEAAIABgBIABAAIAAgBIABAAIAAgBIABABIACAAIAAgBIACAAIAAgBIABAAIAAgBIABAAIAAAAIABAAIAAAAIABAAIAAACIgBAAIAAABIABAAIAAADIABAAIAAABIABAAIAAABIABAAIAAABIACAAIAAABIABAAIAAgCIABAAIAAgCIABAAIAAgCIgCAAIAAgBIgBAAIAAABIgBAAIAAgCIABAAIABgBIAAAAIAAgBIACAAIAAAAIABAAIAAgDIABAAIACgBIABAAIAAgCIAAAAIAAAAIACAAIAAgCIgBAAIAAgCIACAAIAAABIABgBIAAgCIABAAIAAgBIgDAAIgBABIgBAAIAAABIAAAAIgBABIABAAIAAACIAAABIgDAAIAAABIgBAAIgBAAIAAABIgCAAIAAABIgBAAIAAgCIABAAIAAgBIAAAAIAAgBIACAAIAAgBIgBAAIAAgBIACAAIAAgBIgBAAIAAgBIgCAAIAAgBIABAAIgBgBIAAgBIACAAIAAgBIACAAIACgBIADAAIAAgBIABAAIAAgCIgBAAIAAgBIgBAAIAAgBIgBAAIAAgBIADAAIAAABIACAAIAAgBIABAAIAAABIABAAIAAACIACAAIAAgEIACAAIABACIAAAFIABAAIAAgEIAFAAIAAAGIABAAIAAgBIACAAIAAABIADAAIgBABIAAADIgBABIAAABIABAAIACAAIAAACIgBAAIAAABIABAAIABgBIAAgDIgBAAIAAgHIADAAIAAgBIgDAAIAAAAIAMAAIAAACIABAAIAAABIgDAAIAAgBIgDAAIAAABIgBAAIAAABIAEAAIAAABIABAAIAAABIABAAIAAgBIABgBIAAACIABAAIAAABIgBAAIAAABIgBAAIAAABIABAAIAAABIABAAIAAgBIABAAIABABIAAgCIABABIACAAIABABIACAAIAAACIABAAIAAABIABACIABABIAAACIABAAIAAABIACAAIAAACIABAAIAAABIADAAIABgBIABAAIAAgBIgBAAIgBABIgBAAIAAgCIABgBIAAgDIABgBIACAAIAAgBIgEAAIAAgBIABgBIgBAAIAAgBIABAAIAAgCIABAAIABABIABAAIABABIABAAIABAAIAAgCIABAAIABgCIAAgBIAAABIACAAIAAABIACAAIACABIABAAIABgBIAAgBIABAAIAAgCIABAAIAAgBIgBAAIAAgBIABAAIAAgBIgBAAIAAgBIABgCIAAACIACAAIAAgCIABAAIAAACIACAAIAAAAIgBABIABAAIAAACIABABIgDAAIACACIAAABIgCAAIAAgBIgBAAIAAgBIgBAAIAAABIgBABIABABIABAAIAAABIADAAIAAABIABAAIAAABIgBgBIAAABIgBgBIAAACIACAAIABAAIABABIgBAAIAAABIgDAAIAAgBIgBAAIAAgBIgBAAIAAACIgCAAIAAgBIgBAAIgBgBIgBAAIAAAAIAAAAIgBAAIAAACIgDAAIgBABIAAADIABAAIAAgDIAEAAIAAADIgBAAIAAABIACAAIAAABIABAAIABABIAAADIgBAAIAAAEIAFAAIAAgBIAEAAIAAABIACAAIABgBIABAAIAAgEIADgBIAAAAIAAgBIACAAIAAgCIABABIAAgBIABAAIAAgBIABAAIAAAAIABAAIAAgCIgBAAIAAgBIgBAAIAAgBIABAAIAAgBIADAAIAAABIACAAIAAAEIgBAAIAAABIACAAIgBABIgBABIgBABIgBAAIgBABIAAABIgBAAIgBABIgBAAIAAABIgBAAIAAgBIgCAAIAAgBIAAAAIAAACIAAAAIAAABIABABIAAABIACAAIAAgBIABABIAAABIAEAAIAAgBIADAAIAAABIgBAAIAAABIgBAAIAAACIgBAAIAAABIABACIAAAAIABAAIAAACIgDAAIAAgBIgGAAIAAgFIABAAIAAgBIgCgBIAAADIgDAAIAAADIgCAAIAAAAIgBABIABAAIAAACIgBAAIAAABIgBgBIAAAAIAAgBIgMAAIAAgBIgCAAIAAABIgEAAIAAABIAAAAIAAABIgCAAIAAACIABAAIAAABIABAAIAAAXIgEAAIAAAAIgBAAIAAABIgBAAIAAABIgBABIAAADIgBAAIAAACIgBAAIAAABIgBABIgBAAIAAABIABAAIAAACIABAAIAAABIACAAIABABIACAAIAAABIgBAAIAAACIACAAIACAAIABAAIABABIADAAIACABIABAAIAAgBIAAAAIAAgBIAAAAIAAgCIAAAAIABgBIABAAIAAgBIABgBIAAgCIACAAIAAgBIAMAAIAAABIABAAIAAAEIAAAAIAAACIACAAIAAABIABAAIABgCIAAgBIgBAAIAAgBIgCAAIAAgBIACAAIAAgBIAGAAIAAABIABAAIAAABIgBAAIAAACIgBAAIAAABIgBABIADAAIAAgCIADAAIAAADIgBAAIAAABIABAAIAAADIgBAAIABAAIgBAAIgBgCIgEAAIAAACIgBgCIAAACIABABIABAAIAAAHIgDAAIAAABIgBABIgBgBIgBABIAAgBIgCAAIAAgBIgBAAIAAABIABABIgBABIABAAIAAABIgBAAIAAAAIgDAAIAAgBIgBAAIAAABIgCAAIAAABIABAAIAAABIADAAIAAABIADAAIAAABIgBAAIAAACIABAAIgBAAIAAABIABAAIAAACIABgBIAAgCIABAAIABAAIgBAAIABgCIACAAIAAACIADAAIAAgCIADAAIAAgBIACAAIAAABIAAAAIAAACIAAAAIABAAIAAgCIACACIABAAIAAAAIgBAAIAAAEIgCAAIAAACIgBABIAAACIABAAIAAgBIADAAIAAgBIACAAIAAgBIABAAIAAABIACAAIAAgBIABAAIAAACIACAAIAAABIgCAAIgBABIgBAAIAAgBIgBAAIAAACIgCAAIAAACIgBAAIAAABIAAAAIAAABIgEgCIAAgBIABAAIAAgCIgDAAIAAABIAAABIABAAIAAADIABABIgBAAIAAACIgBAAIAAACIABABIAAAEIABAAIAAACIgBAAIgBgBIgCAAIAAgBIgBAAIAAABIgBAAIAAABIACAAIAAACIgBAAIgBgBIgCAAIgBgBIgBAAIgBABIABAAIAAABIABAAIgBABIAAACIABAAIAAABIADAAIgBABIABAAIgBACIAAAAIgBAAIAAABIgDAAIAAgBIgBAAIAAgCIABAAIAAgBIABAAIAAgBIgBAAIgBgBIAAABIgBAAIAAABIgEAAIAAgBIABgBIAAgBIACAAIAAAAIABAAIAAgBIAAgBIABAAIAAgCIADAAIAAgBIABABIAAgDIgCAAIAAABIgBAAIAAABIgBAAIAAgBIgBgBIAAgBIABAAIAAgBIABAAIABgBIABAAIgBgBIAAgBIgCAAIAAABIgBAAIAAABIgBAAIAAABIgCABIgBAAIAAgBIgDAAIAAACIAAAAIAAgBIgCAAIAAgBIgCAAIAAgDIABgCIAAgEIgDAAIABgCIAAgBIgCAAIgBABIgBgBIABAAIAAgBIABAAIAAgCIADAAIgBgBIAAgBIgEAAIAAgBIgGAAIgCABIgBAAIgCABIgCAAIgEACIABAAIAAABIABAAIAAABIABAAIABABIADAAIAAABIABAAIAAABIAEAAIAAABIADAAIAAADIgBAAIAAAFIgCAAIgBABIAAACIgBABIACAAIACABIAAAEIABAAIAAAAIABAAIgBABIgBAAIAAABIABAAIAAABIABAAIAAABIACACIgBgCIAAgBIABAAIAAgBIABABIABAAIAAgDIADAAIAAABIACAAIABABIAAAAIAAABIgCAAIAAgBIgBAAIAAABIgCAAIgBABIAAACIABAAIABAAIAEAAIAAAAIgBAAIAAACIgBAAIAAABIgDAAIAAgBIgBAAIgBgBIAAgBIgBAAIgBAAIAAAAIgBABIgBAAIAAgBIgBAAIAAABIgCAAIAAACIgBAAIAAABIABAAIAAABIACABIAAADIABAAIAAAEgAhLAvIABAAIAAABIAAAAIAAgBIABAAIAAgBIgBAAIAAgBIAAAAIAAABIgBAAgAg0AqIAAACIADAAIAAABIAAgBIABgBIACAAIABgBIABAAIAAgBIABABIAAABIACAAIAAgCIADAAIAAgBIABAAIAAgBIgBAAIAAgCIgBAAIgBgBIAAgBIABgBIgCAAIAAAAIgCACIABAAIAAABIABAAIgBACIAAAAIgBAAIgBAAIAAABIgCAAIAAgBIgCAAIgBAAIAAAAIAAgCIgEAAIgCgBIAAgBIgBAAIAAgBIAAAAIAAAAIgBAAIAAgBIgBAAIAAgBIgBAAIAAgBIgBABIAAACIgBAAIAAABIgBAAIAAABIgBgBIgBAAIAAAEIABAAIAAAAIACAAIAAAAIABABIgBABIAAABIADAAIAAABIAFAAIAAgBgAgVAGIgBgBIACAAIAAgBIgBAAIAAgBIgBAAIAAAAIgBAAIAAgCIABAAIAAgBIgBAAIAAAAIgBAAIAAAEIABAAIAAACIACAAgAhuggIAAAAIAAgDIAAAAgAhAglIABAAIAAgBIgBAAIAAgCIABAAIAAgBIABAAIAAgBIgBgBIABAAIAAgBIgBAAIAAgBIACAAIAAABIABAAIAAgBIABAAIAAACIABAAIAAABIABAAIAAABIACAAIAAgCIgBAAIAAgBIAAgBIAAAAIAAgCIACAAIAAgBIACAAIAAABIADAAIAAgBIgBAAIABgBIgBAAIAAgBIABAAIAAgCIgEAAIAAgBIgBAAIAAgBIgCAAIAAgBIAAAAIAAgBIgBAAIgBAAIgBAAIAAAAIgBAAIAAAAIgBAAIgBAAIAAAAIgBAAIAAgBIgCAAIAAgBIgCAAIAAgBIgFAAIAAABIgBAAIAAACIgCAAIABAAIAAABIgBAAIAAABIgBAAIAAABIgBAAIgBABIgBAAIAAACIgBAAIAAACIgBAAIAAACIgEAAIAAAEIAEAAIAAAEIABAAIAAAAIABgBIAAgCIACAAIABgBIAAgBIACgCIAAgBIABgCIAAgBIACAAIABgBIAAAAIADAAIgBACIABABIAAAAIAAAEIACABIgBABIgBABIAAAAIAAABIAAAAIAAABIABAAIAAABIABAAIAAgBgAgUg3IABAAIABABIABAAIAAgBIgBAAIAAgBIgCAAgAhOg9IACAAIACgCIgDAAIABgBIABgBIABAAIAAgBIgBAAIABgBIAAgBIgBAAIAAgCIgCAAIAAADIABAAIAAACIgBAAIAAABIgBAAgAhJhCIAAABIACAAIABABIAAgDIgCAAgAgthDIACAAIABgBIABAAIABAAIABAAIABAAIAAAAIAAgDIAAAAIgBgBIgBAAIAAAEIgEAAIAAAAIgBAAgAhGhIIADAAIABABIABAAIAAgBIABAAIAAgBIgBAAIgBgBIAAAAIABgBIAAgBIgCAAIAAACIAAAAIgBAAIgDAAIgBAAIABAAIAAABIgCAAIAAgBIgBAAIgBAAIAAABIABAAIAAABIABAAIABABIAAgBIABgBgAhVhMIACAAIAAABIABAAIABABIABgBIAAgCIgBABIgBAAIAAgBIgBAAIAAgCIgCAAgAglhMIACAAIAAgBIABAAIgBgBIgBAAIgBgBgABmBFIAAgBIADAAIAAgBIADAAIABgBIADAAIAAABIgBAAIAAABIgCAAIAAABgAiZBFIgBgBIgCAAIAAgBIgBAAIAAgBIABAAIAAgCIgEAAIAAgBIACAAIAAgCIACAAIAAgBIABAAIAAABIADAAIAAADIABAAIAAACIABAAIAAABIgBAAIAAABIgBAAIAAABgAjFBFIAAgBIABgBIADAAIAAACgAgxBAIAAgBIAAAAIAAgCIgDAAIAAgCIADAAIAAgCIABAAIAAACIACAAIAAABIgBAAIAAABIgBAAIAAADgAiXBAIAAgBIABAAIAAABgAiXBAgAi1BAIAAgBIgBAAIAAgCIABAAIAAgCIABAAIAAgBIABAAIABABIAAgBIACAAIAAgBIABAAIAAACIABAAIgBABIABABIAAABIgBAAIAAACgAjKBAIAAgDIACAAIAAACIAAAAIAAABgAB1A/IAAgBIgBAAIAAgBIgCAAIgBgBIAAAAIAAABIgCAAIAAABIgDAAIAAABIgBAAIAAgDIgBAAIAAgCIAAABIgBAAIAAABIgBAAIAAgCIgCAAIAAgDIABAAIAAgBIABAAIAAgFIABAAIAAgBIABAAIAAgBIACAAIAAABIABAAIAAABIgBAAIAAADIgCAAIAAABIAAAAIAAABIACAAIAAADIAFAAIAAgCIAAAAIAAgBIACAAIABABIABAAIAAACIABAAIAAAAIgBAAIAAABIACAAIAAABIACAAIAAABIACAAIAAABIgCAAIAAABIgBAAIAAABgAjUA/IgCgBIAAABIgBAAIAAgBIgBAAIAAgBIABAAIAAgBIABAAIAAgCIgBAAIAAgBIgBAAIAAAAIABAAIAAgCIADAAIAAACIAAAAIAAABIAAAAIAAACIAAAAIAAADgACJA+IABgBIAAgCIgBAAIAAgBIABAAIAAgBIgBAAIAAAAIABAAIABgCIABAAIAAgBIABgCIABAAIAAACIABAAIAAABIABACIgBAAIAAAAIgBABIABAAIgBABIgBAAIAAACIgBAAIAAABgAAdA+IAAgBIgBAAIAAABIgDAAIABgBIAAgDIABgBIAAABIAEAAIAAgBIACAAIAAAAIAAgCIADAAIAAACIABAAIAAAAIgBAAIAAABIgBAAIAAABIgBAAIAAABIgBAAIAAgBIgDAAIAAADgAAVA+IAAgBIgDAAIAAgBIgBAAIAAgCIgBAAIAAgBIgBAAIAAgCIABAAIgBgBIAAgBIAAgBIAAgBIAAAAIAAAAIABAAIAAgBIABAAIAAABIACAAIAAADIgBAAIAAABIADAAIAAACIABAAIAAgCIAAACIACAAIAAAAIACAAIgBABIAAABIgBgBIgBABIAAABIgBAAIAAABIAAAAIAAABgAAhA9IAAgBIAAAAIAAABgAAAA9IAAgCIAAAAIAAgBIAAgBIAEAAIAAABIAAABIAAAAIAAABIgBAAIAAABgAjAA9IAAgBIgBAAIAAABIgBAAIAAgBIgCAAIAAgBIACAAIAAgBIAAABIACAAIAAgFIABAAIAAAEIACAAIAAABIgBAAIAAABIABABgAAhA8gAgNA7IAAABIgDAAIAAgBIgCAAIAAgCIABAAIAAAAIABAAIAAAAIACAAIAAAAIACAAIAAADgAg4A8IAAgBIAAgBIAAAAIAAgBIABAAIAAABIABgBIAAABIABAAIAAABIgBAAIAAABgAhVA7IgBgBIAAgBIgCAAIgBAAIgBAAIAAACIgBgBIAAgBIgEAAIAAABIgCAAIAAgBIgCAAIAAAAIABgCIAAgCIgBAAIAAgBIgBgBIADAAIAAAAIACAAIAAAAIACAAIAAAAIADAAIAAAEIAFAAIAAACIABAAIAAAAIgBAAIAAACgAiiA7IAAgBIgBAAIAAgBIABAAIAAAAIAEAAIAAACgAjKA6IAAgBIgBAAIAAAAIABAAIAAgCIgBgBIAAgCIgBAAIAAgCIgBAAIAAgBIgBAAIAAgBIgEAAIAAACIgBAAIAAABIgBAAIAAABIAAAAIAAABIgCAAIAAABIgCAAIAAABIgCAAIAAgBIAAAAIAAgCIAAAAIAAgBIADAAIgBAAIABAAIAAgBIgCAAIAAABIgCAAIAAgBIABAAIAAgCIABAAIAAgCIgFAAIAAACIgBABIAAgBIgEAAIAAgBIgCAAIAAgDIgEAAIAAABIgBABIAAABIgBAAIAAACIgBgBIgBAAIAAgFIgCAAIAAgBIABAAIAAgBIACAAIAAgCIACAAIAAgCIgGAAIAAACIgBAAIAAACIgBAAIAAAEIABAAIAAgBIABAAIAAgBIABAAIAAACIgBAAIAAADIgBAAIAAABIgBAAIAAgBIgBAAIAAABIgBAAIAAgDIABAAIAAgBIgBAAIABgBIAAgBIgCAAIAAABIgBABIAAgBIgBAAIAAgBIgBABIAAAEIAAAAIAAABIgDAAIAAABIgCAAIgBgBIAAABIAAgBIgCAAIAAgDIgBAAIAAgBIABAAIAAgEIgBAAIAAgBIABAAIAAgEIABAAIgBgBIAAgBIgDAAIAAgBIADAAIAAgCIACAAIAAgBIACAAIAAACIACAAIAAgBIgBAAIAAgDIADAAIAAABIACAAIAAABIACAAIAAABIADAAIAAABIACAAIAAgDIABAAIAAABIAJAAIAAABIgBAAIAAACIABAAIAAABIACAAIAAgCIABAAIAAgDIgBAAIAAgBIABAAIAAgBIgDAAIAAgBIABgBIgBAAIgBgBIABAAIgBgBIgCAAIAAgBIgCAAIAAgBIABAAIAAAAIADAAIAAAAIABAAIAAABIABAAIAAACIABAAIAAABIABAAIAAgEIABAAIAAgCIgBAAIgBgBIACAAIAAgBIgBAAIAAgCIgCAAIAAgBIABAAIAAgBIAGAAIAAgDIABAAIAAABIACAAIAAgBIABAAIAAgBIAGAAIAAgBIABAAIAAgBIABAAIgBgBIAAgBIgCAAIAAgBIgCAAIAAgBIACAAIABAAIABABIACAAIAAABIABAAIAAABIADAAIAAABIABAAIAAABIABAAIAAgBIABAAIAAgBIABAAIABgBIAAADIgBAAIAAABIAAABIAAABIAAAAIAAABIABAAIAAABIgBABIAAABIABAAIAAgBIABAAIAAgBIACAAIAAABIADAAIAAgBIACAAIAAgBIABAAIAAABIACACIAAABIABABIABACIgCAAIAAACIgCAAIAAAAIgDAAIAAgEIgBAAIAAgCIAAAAIAAAAIgCAAIAAABIgBAAIAAABIABACIACACIAAAAIAAABIABAAIAAABIABACIACABIAAgCIACAAIAAgBIADAAIAAAEIABABIAAADIABABIAAADIABAAIAAgCIABAAIAAgBIACAAIAAACIABAAIAAABIACAAIAAAEIgDAAIAAAAIABAAIAAACIACAAIAAABIgDAAIAAABIgBAAIAAABIgBAAIAAgBIgBAAIAAgBIgBAAIAAABIABAAIAAADIgBABIABAAIAAAFIgJAAIAAgCIgCAAIAAgEIgGAAIAAADIgBAAIAAABIgBAAIAAABIABAAIAAACIgCAAIAAABIACAAIAAADIABAAIAAABIgCAAIAAABgAjXAwIABAAIAAgBIgBAAgAjAAuIAEAAIAAgBIgBAAIAAgBIgDAAgAj+AtIACAAIAAABIABAAIAAgDIABAAIAAgBIACAAIAAgCIgCAAIAAgBIACAAIAAAAIAAAAIAAgCIABAAIAAgBIgBAAIAAgBIgCAAIAAgBIgDAAIAAACIABAAIAAADIgBAAIAAACIABAAIAAABIgBAAIAAABIgBAAIAAABIAAAAgAjhAbIABAAIAAgBIgBAAgAjLASIABAAIAAgBIABAAIAAgCIABAAIAAAAIAAgBIAAABIgBAAIgBgBIAAgBIgBAAIAAABIgBgBIAAACIgCAAIAAAAIgBAAIABABIABAAIAAgBIABAAIABAAIAAgBIABAAIAAABIgBAAgAhkA6IAAgBIABAAIAAABgACYA5IAAAAIgBAAIAAgCIgBAAIAAgBIgBgBIACAAIABgBIACAAIgBABIABABIABAAIgBABIAAACgAhjA5gAgxA5IAAgCIAAAAIAAACgAinA5IAAgEIgBgBIABAAIAAgBIADAAIAAACIAAAAIAAABIAAAAIAAABIgBAAIAAACgAjhA5IAAgCIgBAAIAAgDIgCAAIAAgBIADAAIAAAAIABAAIAAABIACAAIAAABIABAAIAAAEgAjgA3IABAAIAAgBIgBAAgADAA2IAAgBIgBAAIAAABIgBAAIAAgBIgCAAIABgBIgEAAIAAgBIAEAAIAAgCIgCAAIAAgCIABABIAAgBIABABIAAgBIABAAIAAgCIgBAAIgBgBIgBAAIAAgBIgBAAIAAgBIABAAIgBgBIAAgCIgBAAIAAAAIAAABIgBABIAAABIgBAAIAAABIgDAAIAAgBIgBAAIAAgBIgBAAIAAABIgBAAIAAABIgBAAIAAgBIgBAAIAAgCIgBAAIAAgBIgBAAIAAgCIgCAAIAAACIgBAAIAAAAIgCAAIAAABIgBAAIAAABIgBAAIAAgBIgBAAIABgBIAAAAIABAAIAAgCIgBAAIAAgBIgBAAIAAgBIABAAIAAgBIABAAIAAAAIABAAIACgCIAAgBIgBAAIAAgBIgCAAIAAgBIABAAIABgBIAAgBIgCAAIAAgBIAAAAIAAgBIADAAIAAABIABAAIAAgBIABABIAAgCIACAAIAAgBIAEAAIAAABIAAgBIAAABIABAAIAAABIABAAIAAgBIAFAAIAAgBIAAAAIAAgCIAAAAIAAAAIgBAAIAAgCIABAAIAAgCIAGAAIAAABIABAAIAAABIABAAIAAgBIABAAIAAgBIABAAIAAgCIAAAAIABAAIAAgBIgCAAIAAgDIgBAAIAAgBIABAAIAAgBIACAAIAAABIABgBIAAgDIgBAAIAAgBIgBAAIAAgCIAAAAIAAgCIgBAAIAAgBIABAAIAAAAIgBAAIAAgBIABAAIAAgBIgBAAIAAAAIABgBIAAgBIADAAIAAACIADAAIAAgBIABAAIAAgCIABAAIAAgBIAAAAIAAgCIABAAIAAABIABAAIAAABIACAAIAAgGIgBAAIAAgBIgBAAIAAABIgBgBIAAgGIABgBIAAAAIABAAIAAAAIABAAIAAABIACAAIABABIAAABIABAAIAAABIABAAIAAACIABAAIAAABIACAAIAAgBIgBAAIAAgDIACAAIAAgBIADAAIAAgBIABAAIAAABIABABIAAABIAAACIABABIABACIABAAIAAgBIACAAIAAABIgBAAIABABIAAABIABACIgBABIAAABIgBAAIAAABIABAAIADACIgCACIgCAAIAAAAIgCAAIAAABIABACIgCAAIAAACIgBgBIAAgBIAAAAIAAADIAAAAIAAADIABAAIAAgBIACAAIAAABIABAAIAAABIABAAIAAABIgBAAIAAABIgBAAIAAABIABABIgBAAIAAABIABAAIAAABIgCAAIABABIAAACIgBAAIAAACIgCAAIAAgCIAAAAIAAgBIgBAAIAAgBIgBAAIgCgBIgBAAIgBgBIAAABIgBAAIAAABIgBAAIAAgBIgDAAIAAABIACAAIAAABIgCAAIAAABIgBAAIAAgBIgCAAIAAgBIgBAAIAAABIgBABIABAAIAAACIgBAAIAAAAIACAAIAAACIgCAAIAAABIACAAIAAACIgBAAIAAABIABAAIAAABIABAAIAAACIgBgBIgCAAIAAgBIgCAAIAAgBIAAABIAAABIgCAAIAAABIgDAAIAAACIgBABIABAAIAAABIADAAIABAAIABAAIAAAAIAAAAIAAgBIgBAAIAAgBIgBAAIAAgBIACAAIAAABIADAAIAAgBIABABIACAAIAAACIABAAIAAAAIgBAAIAAABIgBAAIAAgBIgDAAIADADIABAAIAAACIABAAIAAAAIgFAAIAAABIgCAAIAAgBIAAABIAAABIADAAIAAABIABAAIAAADIgBAAIAAABIgBAAIAAgBIgDAAIAAABIgBABIgDAAIAAABIADAAIAAACIgCAAIAAABIgBAAIAAAAIgDAAIAAABIgBAAIAAABIABAAIAAABgADNAMIAAgCIABAAIAAgBIgBAAIAAgBIgBAAIAAgCIgCAAIAAgBIABAAIAAgBIgBAAIAAgBIgBAAIAAAAIgEAAIAAAAIABABIAAACIABAAIAAABIACAAIAAAFIADAAIAAgBgAAEA0IAAABIAAgBIgEAAIAAgCIABAAIAAgBIADAAIAAABIABAAIAAADgACDAzIAAgBIgBAAIAAABIgHAAIAAgBIgBAAIAAgFIgBAAIgBABIgBAAIgBgBIAAgFIgCAAIAAgBIgDAAIAAgCIABAAIAAgBIgFAAIAAgCIACAAIAAAAIACAAIAAgBIgEAAIACgBIAAgBIgCAAIgBgBIABAAIACgBIABAAIAAgBIAEAAIAAACIABAAIABABIABAAIAAgBIABAAIgBgBIACAAIABABIABAAIAAACIgBAAIAAABIABAAIAAABIAAAAIAAgBIADAAIAAABIAFAAIAAABIAAAAIAAABIABAAIgBABIAAACIABAAIAAAAIABAAIAAAAIABAAIAAACIgBABIAAACIABAAIAAABIACAAIAAADIABAAIgBABIgBAAIAAABIgBABgAB+ArIAAACIABABIACAAIAAgBIACAAIAAgCIgBAAIAAgBIgBAAIAAgBIABAAIAAABIABAAIAAgBIgBgBIgBAAIgCgBIAAACIgEAAIAAABIAAgBIgBAAIAAABIABAAIgBABIAAABIABAAIAAgBgAB6ApIABgBIAAgBIgEAAIgBABIABAAIAAABIABgBgAAJAyIgBAAIAAABIgBAAIAAgBIgBAAIAAgBIgCAAIAAgDIAAAAIAAgCIgBAAIAAgCIABAAIAAgBIgDAAIAAgCIADAAIAAgCIABAAIAAACIAFAAIAAgCIACAAIAAgBIACAAIAAABIABAAIAAACIACAAIAAAAIABAAIAAABIgBAAIAAABIgBgBIAAABIgEAAIAAABIAHAAIAAABIACAAIAAABIgCAAIgCACIAAABIgDAAIgBgBIAAgDIgBAAIAAABIgBAAIAAACIgCAAIAAgBIgBAAIAAgCIgBgBIgBAAIAAAEIgBAAIAAABIADAAIAAABIACAAIAAADgAAHApIABABIABAAIAAgCgAB0AyIAAgCIgBAAIAAgCIAEAAIAAABIABAAIAAABIABAAIAAABIgDAAIABABgAiTAyIAAgBIgBAAIAAgCIABAAIAAgBIABAAIAAABIAAAAIAAgBIABAAIAAABIABAAIAAACIgCAAIAAABgACPAxIgBgBIgBAAIAAgDIABgBIgBAAIAAgCIgBAAIAAgBIgBAAIAAgBIgBAAIACgBIABAAIAAAAIAAAAIAAABIACACIABgBIAAABIgBABIACAAIAAABIACABIABAAIAAABIgEAAIADABIAAACgAipAwIAAgCIgBAAIAAgBIABAAIAAgBIABAAIABgCIAAgBIgCAAIABgBIgCAAIAAgBIABAAIAAAAIABAAIAAgCIABAAIAAACIABAAIAAAAIABAAIABAAIAAgCIAAAAIAAACIACAAIAAAAIABAAIAAABIABAAIAAgBIACAAIAAABIAAAAIAAABIAAAAIAAABIgCAAIAAgBIgEAAIAAABIgBAAIAAABIgCAAIAAACIACAAIAAABIgBAAIAAABIgCAAIAAABgAB3AugABfAuIAAgFIAAABIAEAAIgBABIABABIgBAAIAAABIgBAAIAAABgAgSAuIgBgBIACAAIAAABgABwAsIAAgBIgBAAIAAgCIABAAIAAABIABAAIAAgBIADAAIAAACIgCAAIAAABgABpAsIAAgBIgBAAIAAgBIgDAAIgBgBIAAgBIABAAIAAgBIACAAIAAABIACAAIAAABIABAAIAAgBIABAAIAAgBIACAAIAAADIgCAAIAAABIgBAAIAAABgAiuAsIAAgDIgBAAIABgBIACAAIAAgBIABABIABACIgBgBIgBAAIAAACIABAAIAAABgAiYArIAAgBIgBAAIAAABIgBgBIAAgBIgBAAIAAgBIACAAIAAABIACAAIAAACgAkRApIAAgCIgBAAIAAAAIgBAAIAAgCIABAAIAAgBIABAAIAAgBIABAAIAAgBIAAAAIAAAAIABAAIAAgCIABAAIAAACIAEAAIAAABIgCAAIAAACIgBACIAAAAIgBAAIAAABIgCAAIAAABgACJAnIAAAAIgBAAIgBgCIAAgBIgBAAIAAgBIgBAAIgBgBIAAgBIABAAIAAgBIABAAIAAgBIABAAIAAgCIACAAIAAABIABAAIgBABIgBAAIAAADIABAAIAAADIABAAIAAACgACfAnIAAgCIgBAAIAAgBIgBAAIAAgCIgBABIgDAAIAAgBIgBAAIAAAAIgBAAIAAACIgBgBIAAABIgBAAIAAgBIgBgBIAAAAIABAAIAAgBIAAAAIAAgBIAAAAIAAgBIgCAAIAAgBIgDAAIAAACIgBgBIAAABIgBgBIAAABIgBgBIAAAAIgBABIgBAAIAAgCIgBAAIABgBIAAgBIAGAAIAAgBIADAAIAAgDIABABIAAABIADAAIAAABIACAAIAAACIABABIAAACIABAAIAAABIABAAIAAABIACAAIAAABIABAAIAAABIABAAIAAABIgBAAIAAACgABhAjIAAgDIACAAIAAADgAAHAjIgBgBIABAAIAAgBIACAAIAAgBIACAAIAAABIABAAIAAACgAimAhIAAgEIABAAIAAgBIABABIAAAAIAAACIAAAAIAAABIgBAAIAAABgAiCAfIgBAAIgBgBIAAgBIABAAIAAgCIABAAIAAgBIABAAIAAgDIABAAIAAgBIgBAAIABgBIAAAAIABAAIAAAAIABAAIAAADIABAAIAAABIgBAAIAAABIgCAAIAAAFIgBAAIAAABgADVAfIAAgBIgCAAIAAgBIgBAAIAAgCIABAAIAAABIACAAIAAABIABAAIAAABIAAAAIAAABgACfAcIAAAAIAAABIgBgBIAAgEIABAAIAAgBIgBAAIAAgBIgBAAIAAgBIABAAIgBgCIACAAIAAACIACAAIAAAAIABAAIgCACIAAABIgBAAIAAABIADAAIAAABIABAAIAAABIgBAAIAAABIgCAAIAAABgAiqAcIABgCIgBAAIABgBIgBAAIAAgBIgBAAIAAgBIABAAIAAgCIABAAIAAAAIACAAIAAAAIACAAIAAAAIABAAIAAABIgBAAIAAABIABAAIAAgBIADAAIABgBIAAACIgDAAIAAACIgBAAIAAABIgBAAIAAABIgBAAIAAABgADnAbIAAgBIgBAAIAAgBIgBAAIAAgBIgBAAIAAgGIABAAIABABIABAAIAAACIAAgCIABAAIABgBIAAgBIACAAIAAgBIACAAIABgBIABAAIAAABIAAAAIAAACIAAAAIAAABIAAAAIAAACIgCAAIAAADIgEAAIAAABIgBAAIAAABIgBAAIAAABgACLAbIAAgDIABAAIgBgBIABAAIAAgCIABAAIAAACIABAAIAAABIABgBIAAgFIACAAIAAABIACAAIAAACIABAAIAAABIgBAAIAAABIgDAAIAAACIgBAAIAAABIgCAAIAAABgAAeAbIAAgDIACAAIAAgBIABAAIAAABIABAAIAAABIgBAAIAAABIAAAAIAAABgADZAaIAAgBIgCAAIAAgBIgBAAIAAgBIgCAAIABgBIAAgBIABAAIAAAAIABAAIAAAAIAEAAIAAABIABAAIABABIAAAAIAAABIABAAIAAACgAj1AZIAAgCIABAAIAAgBIgBAAIAAgBIgBAAIABAAIAAgCIgCAAIAAACIgBAAIAAAAIAAAAIAAABIgCAAIAAgBIgCAAIAAgCIABAAIAAgCIABAAIAAgDIgBAAIAAABIgDAAIAAgCIABAAIAAgBIABAAIAAgBIAEAAIAAACIACAAIAAACIgBAAIAAAAIADAAIAAABIABAAIAAABIgBAAIAAABIACAAIAAgBIACAAIAAAEIgBAAIAAABIgCAAIAAACIABAAIAAABgAAFAVIAAAAIgBAAIAAgCIAAAAIAAgCIABAAIAAgBIAGAAIAAABIgBAAIAAABIgBAAIAAADgAkJATIAAgBIgBAAIAAgBIAAAAIAAgBIABAAIAAgBIABAAIgBAAIABAAIAAgDIAEAAIAAAEIgBAAIAAABIgBAAIAAABIgCAAIAAABgAA6ARIAAABIAAAAIgBgBIAAgCIABAAIAAAAIACAAIABABIAAABIgCAAIAAABgAirAPIABAAIAAAAgAirAPIgEAAIAAAAIABAAIAAgBIABAAIABABIABAAIAAAAgAB2APIAAgBIgBAAIAAgBIgDAAIAAgBIgBAAIAAgCIAAgBIAAgCIABAAIAAABIAEAAIgBABIAEAAIAAACIgBAAIAAACIgBABIAAABgAikAPIAAgDIAAAAIAAgBIABAAIgBgBIACAAIAAABIACAAIAAABIgBAAIAAACIgDAAIAAABgAj1AOIACAAIgBABgAiwAOIAAgCIAAAAIAAgEIAAABIAAgBIABAAIAAgBIABABIAAACIgBAAIAAACIABAAIAAABIgBAAIAAABgAjKAOgAj2ANIAAgCIACAAIAAABIgBAAIAAABgAj2ANgAkAANIAAgBIACAAIAAABgACsAMIAAgBIgBAAIAAgCIgBAAIAAgBIgBAAIAAgBIgBAAIAAgBIABAAIAAgCIABAAIAAABIABAAIAAABIABAAIAAgBIABAAIABABIAAABIABABIgCAAIAAABIABAAIgBABIAAACgAh6AMIAAgDIABAAIAAgCIgBgBIABAAIAAgBIAAAAIAAACIABAAIAAADIgBAAIAAACgAiKAMIgBgBIAAgBIgBAAIAAgBIgCAAIAAgBIgCAAIAAgBIgBAAIgBgBIABAAIAAgBIADAAIACABIAAgBIABABIAAAAIAAACIACAAIgBABIAAABIABAAIAAACgADvAKIAAAAIAAABIgBAAIAAgBIgBAAIAAgBIgCAAIAAgBIgBAAIgBgBIgBAAIgBgBIAAAAIAAgBIgCAAIAAgBIgCAAIAAgBIABAAIAAAAIABAAIAAgDIABAAIABAAIAAAAIABAAIAAgBIgBAAIABgBIgBAAIAAgBIADAAIAAgBIABAAIAAgBIACABIAAgBIACAAIAAACIAAAAIAAABIAAAAIAAABIABAAIAAACIABAAIAAACIADAAIAAABIABAAIAAADIABAAIAAACIgCAAIAAABIgEAAIAAABgAALALIAAgBIgEAAIAAgBIgBAAIAAgDIAFAAIAAABIABAAIAAABIgBAAIAAABIABAAIAAACgAC5AHIAAgBIAAAAIAAABIgBgBIAAgBIgBAAIgCgBIgBAAIAAgDIABAAIAAgBIACAAIAAAAIABgBIABAAIAAgCIAAAAIAAABIABAAIAAAAIABABIAAgBIABAAIAAABIABAAIAAABIABAAIAAAAIgDAAIAAADIgBAAIAAAAIABAAIAAAEgAjbAHIAAgBIABAAIAAgBIAAAAIAAACgAjsAHIAAgBIAAAAIAAgCIgBAAIAAgBIABAAIAAgEIAAAAIAAABIABAAIAAAAIABAAIAAABIABACIAAAAIABAAIAAACIgBAAIAAABIgBAAIAAABgAh/AFIAAgBIADAAIAAgBIACAAIAAAAIABAAIAAAAIAAAAIAAABIgBAAIAAABgAiCAFIAAgCIgBAAIAAgCIADAAIAAgBIAAAAIAAgBIgBAAIAAgBIgDAAIAAAAIgDAAIgCgCIACAAIAAABIADAAIAAABIACAAIAAgBIABAAIAAABIABAAIAAAAIACAAIAAAFIgBgCIAAACIgBAAIAAAAIgBAAIAAACgAi7AEIAAgBIgBAAIAAAAIABAAIAAgCIABgBIADAAIAAAAIABAAIAAgBIAAAAIAAgBIABAAIAAABIABABIgBAAIAAAAIACAAIAAABIgBACIgBAAIAAAAIgDAAIAAABgAjEADIAAgCIgBgBIABAAIgBAAIAAgCIADAAIgCAAIAAgCIAAgDIgBAAIAAADIABAAIgBABIgDAAIAAABIAAAAIAAgBIgBAAIAAgBIABAAIAAgDIAAABIACAAIAAgCIACAAIAAABIACAAIAAADIABAAIAAgCIABAAIAAABIABAAIAAAIIgBAAgAiwABIAAgBIAAAAIAAAAIgCAAIAAgCIACAAIAAAAIACAAIAAgBIABAAIAAABIACAAIgBABIgBAAIAAABIgBAAIAAABgAiEgGIAAgBIgBAAIAAABIgBgBIgBAAIAAgBIAHAAIAAABIgBAAIAAABgAABgIIgBAAIAAABIAAAAIAAgBIgCAAIAAgBIAAgBIAAgCIAAgBIAAgBIAAAAIAAAAIAAAAIAAgCIgBAAIAAgBIgBAAIAAADIgBAAIAAABIgBABIAAACIgBAAIgBgBIgDAAIAAgBIABAAIAAgBIABAAIAAgBIABAAIAAAAIABgCIgDAAIAAgCIgBgBIAEAAIABgBIABAAIAAABIABAAIAAABIABAAIAAABIACAAIAAABIABAAIAAADIAAAAIAAABIABAAIAAABIADAAIAAACIgBAAIAAACgAiugHIAAgBIgBAAIAAgBIgBAAIAAgEIAEAAIAAABIgBABIAAAEgAjRgHIAAgBIABAAIAAgBIABAAIAAACgAjfgIIAAgBIgBAAIAAgCIABAAIAAABIABAAIAAACgAjPgJIgBgBIABAAIAAgBIgBAAIgBABIgBAAIAAABIgBAAIAAgDIABAAIAAgBIABAAIAAgBIgBAAIAAgEIACAAIAAABIABAAIAAAFIABAAIAAgCIABAAIAAAAIABAAIAAgCIABAAIAAgCIABAAIAAACIABAAIAAACIgBAAIAAABIgBAAIAAABIgBAAIAAACIgBAAIAAABgAjPgJgAj7gKIAAgBIgCAAIAAgCIgBgBIABAAIAAgDIABAAIAAgBIAEAAIgCABIACAAIAAABIABAAIAAgBIACAAIAAABIABAAIAAACIABAAIAAABIgDAAIAAgBIgBABIgBAAIAAABIAAAAIAAACgAjegMIAAgBIgBAAIAAgBIgBAAIAAAAIgBAAIAAgCIACAAIAAgBIADAAIAAgBIABAAIAAABIABAAIAAAFgAi6gOIAAgCIABAAIAAgBIABAAIAAADIgBAAIAAAAgAiFgOIABgCIgBAAIAAgDIACAAIAAABIACAAIAAABIgBAAIAAABIgBAAIAAACgAAdgRIAAgBIgBAAIAAgBIgCAAIAAgBIgBgBIABAAIAAgBIgBAAIAAgBIgBAAIAAgBIADAAIAAABIACAAIgBgBIABAAIgBgBIABgBIAAABIABAAIAAgCIACAAIAAgBIgDAAIAAgBIgCAAIAAgBIABAAIAAgBIAFAAIAAgBIAAAAIAAABIABAAIAAgBIABAAIAAABIABAAIAAABIgBABIAAABIgBAAIAAACIgBAAIAAACIAAAAIAAACIgDAAIAAAFgAAMgRIAAgBIgBAAIAAgCIABAAIAAAAIABAAIAAgCIACAAIAAABIAAAAIAAABIACAAIAAAAIgBAAIAAABIABAAIAAACgAABgRIAAgBIgBAAIAAABIAAAAIAAgBIgCAAIAAgBIgBAAIAAgBIgCAAIAAAAIgBAAIgCgBIAAgBIgBAAIAAgCIABAAIAAABIADAAIAAgBIABAAIAAgBIgEAAIAAgBIABgBIADAAIAAgBIgGAAIAAgCIgBAAIAAgEIABAAIAAgBIABAAIAAADIABAAIAAgCIADAAIABgBIACAAIAAgBIAAAAIAAgBIgBAAIgBgBIAAAAIgDAAIAAAAIgBABIgBgBIgBAAIAAACIgDAAIAAgBIABgBIgBAAIAAgCIAAAAIAAgDIACAAIAAgBIABAAIABABIAAgEIACAAIAAABIABAAIAAABIACAAIAAABIADAAIAAADIAEAAIAAgBIgCAAIAAgBIACAAIAAABIABAAIAAgCIAAgBIAAgBIAAAAIAAgBIAAAAIAAgDIABAAIAAAAIABAAIAAAAIABAAIAAACIABgBIAAgBIACAAIAAABIABAAIAAABIgBAAIAAACIgBAAIAAACIgCAAIAAABIgBAAIAAABIACAAIAAABIgBAAIAAABIgDAAIAAABIAAAAIAAABIgBAAIAAABIgDAAIAAADIAEAAIAAACIAAAAIAAAAIABAAIAAABIACAAIAAABIACAAIAAACIgBAAIAAABIgBABIgBAAIAAgBIgCAAIAAABIABAAIAAADIgBAAIAAABIAAAAIAAABIAAAAIABABIACAAIAAABIgBAAIAAABIgDAAIAAABgAjEgRIAAgBIACAAIAAABgAjIgRIAAgBIgBAAIAAgCIABAAIAAgBIAAAAIAAABIACAAIAAABIgBAAIAAABIgBAAIAAABgAjFgTIAAgBIABAAIAAAAIACAAIAAgCIAAAAIAAgBIACAAIAAACIgCAAIAAABIAAAAIAAABgAgFgUgAiLgWIAAgBIABAAIAAgBIABABIACAAIAAgBIABAAIAAACIgFAAIAAABgAjHgXIAAgEIABAAIAAgBIABAAIAAgBIABAAIAAABIgBABIAAAEgAARgYIAAgBIgBAAIAAgBIgBAAIgBgBIACAAIAAgBIgBAAIAAgBIgBAAIAAgCIABAAIAAgBIgDAAIABAAIAAgCIgBAAIAAgBIABAAIgCgBIABAAIAAgBIACAAIAAgBIABAAIAAABIAAAAIAAABIAAAAIAAABIgBAAIAAABIABAAIAAACIABAAIAAAAIABAAIAAABIABAAIAAABIABAAIAAACIACABIAAABIgCAAIACABIAAABgAiSgZIAAgCIgBAAIAAgBIABAAIAAgDIAEAAIACgBIAAABIABAAIAAABIgBAAIAAABIgDAAIAAABIgBAAIABABIgDAAIAAACgAAKgbIgBgBIAEAAIAAABgAAkgiIAAgBIgBAAIAAgBIgBAAIAAgBIgBAAIAAgBIABAAIAAAAIADAAIAAABIACAAIAAABIABAAIAAABIAAAAIAAABgAiUgiIgBgBIAAgBIADAAIAAABIgBAAIAAABgAiZgmIAAgBIgCAAIAAgBIABAAIAAgBIACAAIAAABIABAAIAAABIgBAAIAAABgAiYgpIAAgBIABAAIAAABgAiYgpgAANgqIAAgBIABAAIgBgBIAAgBIABAAIAAgCIABAAIAAgBIAAAAIAAABIABgBIABAAIAAABIABAAIAAgBIABAAIAAADIgBAAIAAABIgCAAIAAABIABAAIAAABgAiYgsIAAgBIgEAAIAAgBIAEAAIAAgBIADAAIAAgBIACAAIAAABIABAAIAAABIgDAAIAAABIgCAAIAAABgAgSgtIAAgBIABAAIAAgBIABgBIADAAIAAABIAAAAIAAACgAieg1IAAgBIABAAIAAgCIABAAIAAgBIABAAIAAgBIABAAIAAgGIABAAIAAgBIABAAIAAgBIABAAIAAABIABAAIAAABIABAAIAAACIABAAIAAABIgCAAIAAABIgBAAIAAABIgBAAIAAAEIgCAAIAAABIgBAAIAAABgAgEg6IAAgBIgBAAIAAgBIABgBIABAAIABgBIAAgBIgBAAIAAABIgBAAIAAgCIACAAIAAgBIAAAAIAAgCIACAAIgBABIABAAIAAABIAAABIAAABIgBAAIAAACIgBAAIAAABIABAAIAAABIgCAAIAAABgAAWhBIAAAAIAAgBIgBAAIAAgCIgCAAIACAAIAAgCIAFAAIAAADIgBAAIAAABIgBAAIAAABIgBAAIgBABgAiShBIAAgBIAAAAIAAgCIAAAAIAAAAIABAAIAAgCIABAAIAAgBIAFAAIAAADIAAAAIAAAAIgBAAIAAABIgFAAIAAACgAgBhGIAAgEIABABIAEAAIAAACIgBABgAgRhGIgBgBIAAgCIABAAIAAgBIADAAIAAAAIABAAIAAACIAAAAIAAABIgBAAIAAABgAAHhJIAAgCIACAAIAAgDIACAAIAAgBIgBAAIAAgCIgBAAIABgBIgBAAIgBgBIABAAIAAgBIADAAIABgBIABABIAAABIABAAIAAACIgBAAIAAACIgBAAIAAACIABAAIAAABIgBAAIAAABIgBAAIAAABIgCAAIAAAAIgBAAIAAABgAh3hJIAAgCIgBAAIAAgBIABAAIgBgBIgBAAIAAgCIABAAIABgBIAAABIABAAIAAgBIAGAAIAAACIABAAIAAADIgCAAIAAABIgEAAIAAABgAABhKIAAgBIgDAAIAAABIgDAAIAAgBIgBAAIAAgBIACAAIAAgDIABAAIAAgBIABAAIAAABIAAAAIAAgBIABAAIAAABIACAAIAAABIACABIAAgCIABAAIAAgBIAAAAIABABIACAAIAAACIgDAAIAAADIAAAAIAAAAgAgxhKIAAgBIgDAAIAAgEIADAAIAAABIABAAIABABIAAABIgBAAIAAACgAiGhLIAAgBIgBAAIgBABIAAgBIgCAAIAAgCIAEAAIAAABIABAAIAAgBIABABIAAgCIgBAAIAAgBIgBAAIAAgCIABAAIAAABIACAAIAAgBIABAAIAAgCIACAAIAAADIAAAAIAAABIAAABIAAABIgDAAIAAABIgBABIgBAAIAAABgAilhLIAAgBIABAAIAAgCIABAAIAAgCIABAAIAAgBIABAAIAAADIgBAAIAAABIgBAAIAAACgAgphMIgBgBIABAAIAAABgAAhhNIAAgBIgCAAIAAgBIgBAAIABgBIAAgBIABAAIgBgBIAAgBIACAAIAAgBIAEAAIgBABIAAABIABAAIAAABIACAAIAAABIgCAAIgBABIABABIgCAAIAAABgAAYhNIAAgBIgBAAIAAgCIACAAIAAgBIAEAAIAAACIgCAAIAAABIgBAAIAAABgAgShPIgCAAIAAgCIABgBIABAAIAAABIABABIAAACgAg4hOIAAgBIABAAIAAABgAg4hQIAAgCIAAAAIAAgBIAAAAIAAgBIABAAIABgBIAAAFgAgxhUIAAgFIACAAIAAAEIgBAAIAAABgAimhVIgBgBIAAABIgCAAIAAgBIgEAAIAAAAIABAAIAAgCIABAAIAAgCIABAAIAAgBIACAAIAAgBIACAAIAAAAIABAAIAAgCIACAAIAAAGIgBAAIAAACIgBAAIAAABgAAhhWIAAAAIAAAAIAAAAIgBAAIAAgDIABgBIABAAIAAABIADAAIAAABIgCAAIAAACIgBAAIAAAAgAAWhWIAAgCIAAgBIAAgDIABAAIAAACIABgBIAAABIABABIAAABIgBACIgCAAIAAAAgAhShWIAAgEIgDAAIAAgBIgDAAIAAgBIgBAAIAAgBIABAAIAAgBIgEAAIAAgBIgBAAIAAgCIgBAAIAAgDIgBAAIAAABIgCAAIAAgBIgBAAIgBABIAAgBIgDAAIAAgCIACAAIAAABIABAAIAAgCIgBAAIAAgCIACAAIAAgCIABAAIAAABIABAAIAAgBIACAAIABgBIABAAIAAABIAAAAIAAgBIABgBIACAAIAAADIgBAAIAAAEIABAAIAAAEIABAAIAAADIADAAIAAgBIgBgBIAAgDIABAAIAAgBIAAAAIAAgBIABAAIAAADIACAAIAAABIACAAIAAgBIACAAIAAgBIABABIABAAIAAABIABAAIAAACIgBAAIAAADIgBAAIAAgBIgEAAIAAACIABAAIABAAIABAAIAAADIgBABIAAACgABDhYIAAgBIgBAAIAAgBIABAAIgBgBIACAAIAAABIABAAIAAgBIAAAAIABgBIAAACIgBAAIAAABIAAAAIAAABgAg6haIgBgBIgCAAIAAgBIgCAAIAAgBIgBAAIAAgEIABAAIAAgCIACAAIAAABIADAAIABABIgBABIAAACIACAAIAAgBIAAAAIAAgCIACAAIABABIADAAIAAABIgCABIAAACIgBAAIAAAAIgBAAIAAABIgBAAIAAABIgBAAIgBgBIAAACgAgVhcIgBAAIAAgBIgBAAIAAgBIABAAIAAgCIgCAAIAAgBIgCAAIAAABIgCAAIAAgBIgBAAIAAgBIgCAAIgBgBIgDAAIgBgBIgCAAIABgCIAAgBIgBAAIAAgBIgBAAIgBABIgBAAIgBAAIAAgCIACAAIABgBIABAAIAAgBIACAAIAAABIAFAAIAAABIAAgCIACAAIAAABIABAAIAAABIABAAIAAABIABAAIAAABIABAAIAAACIABAAIAAABIACAAIAAgBIABAAIAAgBIABAAIAAABIAAAAIAAAEIgCAAIAAABIACAAIAAAEIAAABgAgehdIAAgBIgBAAIAAgBIACAAIAAABIACAAIAAABgABWhfIgBgBIgIAAIAAgBIABAAIAAgCIABAAIAAgBIABgBIAAgBIABAAIAAgCIABAAIAAABIABAAIAAgCIAEAAIAAABIABAAIAAABIABAAIAAABIgBAAIAAABIAAAAIAAACIAAAAIAAABIABAAIAAADgAgChiIAAAAIAAgBIgBAAIAAABIgCAAIAAgCIABAAIABgBIABgBIAAABIACAAIAAACIAAAAIAAABIgBAAIgBABgAgLhhIAAgBIABAAIAAABgAgKhiIAAgBIgCAAIAAgCIABAAIAAgBIABAAIABgBIAAgBIABAAIAAABIACAAIAAADIgBAAIAAABIgBABgAgKhigAgyhjIAAgBIgDAAIAAgBIgBgBIgCAAIAAgBIAAAAIAAgBIAAgBIAAAAIAAgBIgCAAIAAgBIgCAAIAAABIgBAAIAAADIgBAAIAAgBIgCAAIAAACIgDAAIgBgBIAAgCIABAAIAAgCIAAgBIAAgCIABgBIgBAAIAAgDIABAAIAAgBIADAAIAAACIABAAIAAABIAEAAIAAABIADAAIAAgBIABAAIAAACIACAAIAAABIADAAIAAABIgBAAIgCABIAAABIAEAAIABABIgBAAIAAABIgBAAIAAABIABABIAAABIgBABIAAABgAg3hrIACAAIABgCIgBAAIgBgBIAAABIgBAAgAAthkIgBgBIgBAAIAAgCIgBAAIAAgBIABAAIAAgBIABAAIABABIABAAIAAgCIADAAIAAABIABAAIgBABIAAABIgBAAIAAABIgBAAIAAABIgBAAIAAABgAgqhlIAAgBIABAAIAAgBIABABIAAABgAAehmIgBgBIgBAAIAAgBIgBAAIAAgBIABAAIAAgBIADAAIAAgBIABAAIAAABIABAAIAAABIgBAAIAAABIABAAIAAABIgBABgAAwhsIgBgBIAAgBIABAAIAAgDIACAAIAAACIACAAIAAABIABAAIgBAAIgCAAIAAABIgBAAIAAABgAAHhsIAAgBIgBAAIAAgBIgCAAIAAAAIAAAAIAAgBIABAAIAAgBIACAAIABABIAAABIABAAIAAAAIgBAAIAAACgAhPhtIAAgBIgBAAIAAABIgDAAIAAgBIABAAIgBAAIAAgBIgBAAIABgBIgBgBIAAgBIABgBIABAAIABABIACAAIAAgBIABAAIAAgBIACAAIAAABIACAAIAAgDIAAABIABAAIAAACIgBAAIAAACIABAAIgBABIABAAIAAABIgBAAIAAABIgCAAIgBAAIgBAAIAAABgAgXhuIAAAAIgBAAIAAgBIgCAAIgCgBIAAgBIgBAAIgBgBIgBAAIAAgBIgDAAIAAgCIACgBIgCAAIAAgCIACAAIAAgCIgCAAIACgBIAAgBIABAAIAAgCIABAAIAAgBIABAAIAAABIADAAIAAABIgBAAIAAABIAFAAIAAABIACAAIAAABIAAgBIACAAIAAACIgBAAIAAABIABAAIAAABIgBAAIAAABIgBAAIAAgBIgBgBIgBAAIAAABIgBAAIAAABIABAAIAAACIABAAIABgBIAAABIAAAAIAAAGIAAAAgAglhvIAAABIgBgBIAAAAIAAABIgBAAIAAgCIgBAAIAAgBIABAAIAAgBIABgBIAAgBIACAAIAAABIACAAIAAABIgBAAIAAACIgBAAIAAACgAgxhuIAAgEIACAAIABgBIAAACIgBAAIAAABIABAAIAAABIgCAAIAAABgAh0huIAAgFIgBAAIAAgCIADAAIAAABIgCAAIAAABIABAAIAAAFgAgHhxIAAgBIgBAAIAAgCIgDAAIAAgCIABAAIAAgBIABAAIAAgBIADAAIABABIAAgBIABAAIAAACIACAAIAAACIgCAAIgBABIgBAAIAAACgAhWhyIgCgBIgBAAIAAgCIgBAAIAAABIgBgBIgBAAIABABIAAACIgCAAIAAgBIgCAAIAAgBIgFAAIAAgDIACAAIABgBIAAABIACAAIAAABIACAAIAAgCIgBAAIAAgCIgBgBIAAgBIACAAIAAgCIABAAIAAADIAAAAIAAADIAAgBIAAgBIAGAAIAAADIABAAIAAABIAAAAIAAADIAAAAIAAABgAgihzgAg8hzIAAgCIgDAAIAAgCIACAAIAAgCIACAAIAAABIADAAIAAADIgBAAIAAABIgBABgAAHh3IgDAAIAAgCIABAAIAAgBIABgBIAAABIACAAIAAADIgBABgAhqh2IAAgCIACABIAAgCIABAAIAAgBIgBAAIAAgBIABAAIAAgDIAAgBIABABIAAgCIABAAIAAAAIgBgBIAAgBIABAAIABACIACAAIAAACIgBAAIAAABIgBABIAAADIABAAIAAABIgEAAIAAABIgBABgAhmh7IABAAIAAgCIgBAAgAA7h5IAAABIgBAAIAAgBIgDgCIACgBIABAAIAAgBIAAAAIABgBIABAAIgBABIABAAIAAACIgBAAIABABIABAAIAAABIgBAAIAAABgAhuh4IAAgBIAAAAIAAgBIAAAAIAAgBIABgBIABAAIAAABIABAAIAAABIgBAAIAAABIgBAAIAAABgAAkh6IgBgBIgCAAIAAgBIABAAIAAgBIgBAAIABgBIAAgBIABAAIAAgBIAEAAIAAADIABAAIAAACIgBAAIAAABgAgSh9IAAgCIgBgBIABAAIAAgDIABAAIAAgBIADAAIAAABIgCABIACAAIABABIAAAAIAAgBIACAAIAAACIgBAAIAAAAIgBABIgDAAIAAABIgBAAIAAABgAg2h+IgBgBIAAgDIABgBIAFAAIAAgBIAAABIACAAIAAADIgBAAIAAABIgBAAIAAABgAhBh+IAAgBIgBABIAAgBIABgBIgBAAIAAAAIABAAIAAgBIADAAIAAgBIADAAIAAABIgBAAIAAABIgBAAIABAAIAAABIgCAAIAAABgAgXiBIAAgBIgBAAIAAABIgDAAIgBgBIgBAAIAAgBIACAAIAAgBIgBAAIAAgBIABAAIAAgBIACAAIAAABIABAAIAAgBIADAAIgBgBIgBAAIAAgBIABAAIAAgDIABgBIABAAIAAAEIgBAAIAAABIABAAIAAABIABAAIAAABIgBAAIAAABIAAABIgBAAIAAABIgBABgAAQiCIAAgBIgBAAIAAABIgDAAIAAgBIABAAIAAgBIgBAAIAAgCIABgBIAAABIABAAIAAABIABAAIAAgBIAAgBIABAAIABABIACAAIgBABIAAADgAhciCIAAgCIAAAAIAAgCIgBAAIAAgCIABAAIAAACIABABIAAABIABABIgBABgAADiEIAAgBIgCABIAAgBIgBAAIAAgBIAEAAIAAgBIABAAIAAADgAhMiEIAAgBIgDAAIAAABIgBAAIAAgCIACAAIgBgBIAAgBIgBAAIAAgDIgBAAIAAgBIgBAAIAAgDIgBgBIABAAIABgBIABAAIABABIAFAAIAAgBIAAAAIAAABIABAAIAAgBIACAAIAAABIABAAIAAABIACAAIAAACIABAAIAAABIAAAAIAAABIAAAAIgBABIAAACIgEAAIAAACIgBAAIAAABIgCAAIAAABgAA6iJIAAgCIgBAAIAAgBIgFAAIAAgDIACAAIAAgBIADAAIAAgBIABAAIAAABIAEAAIAAABIABAAIAAABIABAAIABABIABAAIAAABIgDAAIgBgBIAAABIgBAAIgBABIABAAIAAABIgCAAIAAABgAg6iKIAAgCIgBAAIAAgCIgBAAIAAgBIADAAIAAgBIACAAIAAABIACAAIAAAEIgBAAIAAgBIgBAAIAAACgAgeiOIAAgBIgBAAIABgBIgBgBIAAgBIAAAAIAAgCIgBAAIAAgBIABAAIAAABIABAAIAAABIACAAIgBABIACAAIAAAAIABAAIAAACIgDAAIAAACgAg/iQIAAgBIgBAAIAAgBIgBABIgBAAIAAgCIABAAIAAgBIgBAAIAAgDIACAAIAAACIACAAIAAgBIABAAIAAABIABAAIAAADIgCAAIAAACgAgoiSIAAgDIADAAIAAADgAh0iTIAAgCIgBAAIAAgEIACAAIABABIABAAIAAABIABAAIAAABIABABIgCAAIAAABIgBABgAhaiWIAAgBIgBABIAAgEIABAAIAAgBIABAAIAAgBIABAAIAAABIADAAIAAACIgBAAIAAABIgCAAIAAABIgBAAIAAABgAhUiZIAAgDIgBAAIAAgDIAAAAIAAABIgBAAIAAgBIgCAAIAAgCIACAAIAAABIABgBIAAAAIAAgBIAAgBIAAAAIAAABIACAAIAAABIABAAIAAACIABAAIAAACIABAAIAAABIgCAAIABABIAAABIgCAAIAAABgAhoiaIAAgBIgEAAIAAgBIgCAAIAAgBIABgBIAAgBIABAAIAAgCIACAAIAAgCIACAAIAAABIABAAIAAgBIABAAIAAABIABAAIAAACIABAAIAAABIgBAAIAAABIgCAAIAAADIAAAAIAAABgAgvidIgBAAIAAABIgEAAIAAgBIgBAAIAAgBIgBgBIACAAIAAgCIACAAIAAgDIADAAIAAACIABAAIAAABIABAAIAAgBIABAAIAAADIgBAAIAAACIgBAAIAAABIgBABgAAEidIgEAAIAAgDIAAgBIgBAAIABgBIgBAAIAAgCIACAAIAAgBIACAAIAAgBIABAAIAAABIAAABIABAAIAAABIgBAAIAAACIABAAIAAACIABAAIAAABIgCACgAAaidIAAgBIgBAAIgBABIAAgCIgBAAIgBABIAAAAIAAgCIABgBIAAgCIAEAAIAAABIABAAIAAACIgBABIAAACgAhcigIAAgCIgBAAIABgBIAAgBIgBAAIgBAAIgBAAIAAgBIgDAAIAAABIgCAAIAAgBIABAAIAAgBIgBAAIAAgBIABAAIAAgGIgDAAIAAABIABAAIAAACIgCAAIAAgBIgHAAIAAACIAAAAIAAABIgBAAIAAABIgEAAIAAgEIABAAIABgBIABAAIAAgBIACAAIAAABIAAAAIAAgBIABAAIAAgCIAGAAIAAgDIABAAIAAgDIgBAAIAAgCIgBAAIAAgCIABAAIAAgBIAAAAIAAgBIABAAIAAABIABAAIAAACIABAAIAAABIABAAIAAABIABAAIAAgCIACAAIAAABIABAAIAAgBIABAAIAAABIACAAIAAABIABAAIAAAAIgCAAIAAAAIgCAAIAAAAIABAAIAAADIgDAAIAAABIgBAAIAAACIABAAIAAABIgBABIABAAIACACIAAAEIABAAIAAABIACAAIAAABIACAAIAAABIABAAIAAADIgCAAIAAACgAh/igIAAgBIgBABIAAgBIAAAAIAAgBIgDAAIAAgBIgBABIgBAAIAAgDIADAAIABgBIABAAIAAABIAAAAIAAgDIABAAIAAADIABAAIAAgBIABAAIAAgBIABAAIAAACIACAAIAAACIgDAAIAAABIgBAAIAAABIABAAIAAABgACyihIAAgBIgBAAIAAgBIgDAAIAAgBIgCAAIAAgBIACAAIAAgBIAEAAIAAgBIABAAIAAgBIABAAIAAABIABAAIAAABIAEAAIAAABIAAAAIAAABIAAAAIAAAAIgBABIgDgBIAAACIgCAAIAAABgAhlikIAAAAIABAAIAAAAgAiOikIAAAAIgBAAIgBgBIACAAIACgBIABAAIAAABIABABIgBAAIAAAAgAhkikgACiioIAAgBIgBgBIABAAIAAgBIgBAAIAAgCIgBAAIAAADIgEAAIgBgBIACAAIAAgDIABAAIAAgBIgBAAIAAgCIgBAAIAAgBIgBAAIAAgBIgDAAIAAgBIgDAAIAAACIACAAIAAACIgBABIgBAAIAAABIgBAAIAAABIgBAAIAAgBIgEAAIAAgBIABAAIgBgBIAAgBIgBAAIAAgBIAFAAIAAgBIgCAAIAAgCIgBAAIAAgBIgBAAIAAgBIgCAAIAAgCIAAAAIAAgBIgBAAIAAABIgBAAIgBgBIgBAAIAAgDIABAAIAAABIABAAIAAgBIABgBIAAgBIABAAIAAgEIAAAAIAAgBIABAAIAAgDIABAAIAAgDIAEAAIAAABIgCABIAAABIACAAIABABIABAAIAAADIAAAAIAAACIAAAAIAAABIABAAIAAgBIADAAIAAACIgCAAIAAABIgBAAIAAACIACAAIAAABIACAAIAAABIgBAAIAAABIgBAAIAAABIABAAIAAABIABAAIAAABIACAAIAAAAIACAAIAAABIABABIAAABIACAAIAAABIABABIAAgDIABAAIAAABIADAAIAAgBIABAAIAAACIACAAIAAABIgBAAIAAABIgBABIAAgBIgCAAIAAgBIgCAAIAAABIgBAAIAAABIABAAIAAACIgBAAIAAABIABAAIAAABIACAAIAAABIgCAAIAAACgACUi3IABAAIAAACIAAAAIAAgBIABAAIAAgDIgBABIgBAAgABAipIAAgBIABAAIAAgBIABAAIAAgBIADAAIAAgBIAAAAIAAABIABAAIAAACIgCAAIAAABgAAZipIAAgBIgDAAIAAgBIAAAAIAAgCIACAAIAAgBIABAAIAAABIABAAIAAAEgAAJipIAAgBIgBAAIAAABIgBAAIAAgCIgBAAIABgBIgBAAIAAgCIABAAIAAgDIABAAIAAgBIADAAIAAABIABAAIAAACIABAAIAAAEIgBAAIAAABIgBAAIAAABgAiDiqIgBgBIgBAAIAAgBIgBAAIAAgCIgCAAIAAgBIABAAIAAgBIABAAIAAABIABAAIAAgDIgBABIgBAAIAAgBIgBAAIAAgBIgBAAIAAgCIACAAIAAgBIgCAAIAAAAIABAAIAAgBIABAAIABgBIAAgBIABAAIAAgBIACAAIAAABIgBAAIAAACIACAAIAAgBIABAAIABgBIAAAAIAAgBIABAAIAAgBIgBAAIAAgBIABAAIAAgCIABAAIAAABIABAAIAAACIABAAIAAAFIADAAIAAgBIAEAAIAAACIgBAAIAAACIgBAAIAAACIgFAAIAAgDIgCAAIAAgBIgCAAIAAACIAAAAIAAAGIAAAAIAAABIAAABIgBAAIAAgBIgBAAIAAACgAAuitIAAgBIgBAAIAAgBIACAAIAAABIADAAIAAABgAAZiuIAAgBIgBAAIgBgBIgBAAIAAABIAAABIgBAAIgCgBIgBAAIAAgBIgBAAIAAgBIABAAIAAgBIABAAIAAgEIACABIABAAIAAgBIAAAAIgDAAIACgBIABAAIAAgBIAAgBIABAAIAAgCIgBgBIAAgCIAAgCIgBAAIAAgCIgCAAIAAgBIgBAAIAAgBIgBAAIAAABIgBgBIAAgBIABgBIAAgBIABAAIAAgBIABAAIAAAAIgBAAIAAgBIABgBIAAABIADAAIABABIACAAIAAgCIACAAIAAABIABAAIAAgDIgBAAIAAgBIABAAIAAgCIABAAIAAABIABAAIAAACIABgBIAAABIADAAIAAABIABAAIAAgBIABAAIAAABIAEAAIAAgCIABAAIACAAIAAABIgBAAIAAACIAFAAIAAACIACAAIAAAAIADAAIAAABIAAAAIAAACIgDAAIAAACIACAAIAAABIgBAAIAAABIABAAIAAABIgBAAIAAABIgBABIAAgBIgBAAIAAADIABgBIAAABIACAAIAAABIAEAAIAAACIgBAAIAAACIgCAAIAAgBIAAAAIAAgBIgBAAIAAABIgDAAIAAACIgCAAIABAAIgCAAIAAABIgCAAIgBgBIAAAAIABAAIAAgBIABgBIAAgBIgDAAIABABIgCAAIAAgDIgBAAIgCgBIgDAAIAAABIgBAAIAAABIAAABIgBAAIAAABIABAAIAAABIAAABIAAgBIABAAIAAADIgBAAIAAgBIAAAAIAAABIgBAAIAAgBIgBAAIgBABIAAABIgBgBIgCAAIAAACIABABIgCAAIABABIABAAIAAABIgBAAIAAABgAAgi2IABAAIAAgBIgBAAgAAoi6IAFAAIAAABIACAAIAAgBIgBAAIAAgCIABAAIAAgBIgBAAIAAgBIgDAAIAAACIgCAAIAAABIgBAAgAAZiugACCi2IAAgBIgDAAIAAgBIgBAAIABgBIAAgCIACAAIAAgBIABAAIAAgBIABABIAAgBIABAAIAAAEIACAAIAAACIgDAAIAAABgAAPi5IAAgBIAAgBIAAAAIAAgBIAAAAIAAgBIABAAIAAACIABAAIAAABIgCAAIAAABgAhni8IgDgCIAAgEIACAAIAAgBIACAAIAAABIABAAIAAgCIABAAIAAACIABAAIAAgBIACAAIAAgBIABABIAAABIACAAIAAACIABAAIAAABIgBAAIAAABIABAAIAAABIgJAAIAAABgAAMjAIAAgBIgBAAIAAgBIgBAAIAAABIgBgBIgBAAIAAgBIABAAIAAgBIgBAAIAAgBIABAAIAAgBIAEAAIABgBIAAgBIABACIAAAAIAAABIAAABIAAAAIgBABIABAAIgBABIAAACIgBAAIAAABgAAAjAIAAgBIgBAAIAAABIgBAAIAAgBIgBAAIAAgCIgBAAIAAgBIgBAAIAAABIgCAAIAAgFIgBAAIAAgCIADAAIAAABIADAAIAAABIACAAIAAAAIABAAIAAADIACACIAAACIgDAAIAAABgACDjEIgBAAIAAgBIgDAAIgBgBIAAgBIgBAAIAAgBIACAAIAAAAIACAAIABgBIABAAIAAABIAAAAIABAAIAAABIABAAIAAACIgBAAIAAgBIgBAAIAAABIAAAAIABABIgBABgAiDjFIAAgBIABAAIAAgBIgCAAIAAgBIgDAAIAAAAIgCAAIABgBIAAgBIABAAIAAABIABgBIAAgBIACAAIAAgBIABAAIAAABIABAAIAAACIABAAIAAAEgAhdjGIAAgBIABAAIAAgBIgBAAIAAgCIgBAAIAAgBIABAAIAAgBIACAAIAAABIABAAIAAABIABAAIgBABIgBAAIABABIABAAIABAAIgBAAIABABIgBAAIAAABgACGjIIgBAAIADAAIAAAAgAhkjIIgBAAIAAgCIgBAAIAAgDIgBAAIAAgBIAAgBIADAAIAAACIADAAIAAACIgBABIABAAIAAABIgBAAIAAABIgBAAIgBAAgAA5jLIAAgBIgDAAIAAgBIgCAAIAAgBIAAAAIAAgCIACAAIAAgBIAEAAIAAABIACAAIAAAFgACtjMIAAgBIgBAAIAAgBIgBAAIAAgBIgDAAIAAgCIgBAAIAAgDIABAAIAAgBIACAAIAAgBIABAAIAAABIABAAIAAADIABAAIAAABIABAAIAAABIABABIAAADgACWjNIAAgBIABAAIAAgBIABAAIgBgBIACAAIAAABIABABIgCAAIAAABgAAojOIABAAIAAABgAAWjOIAAgBIAAAAIAAABIgBAAIgCgBIgBAAIAAgBIgCAAIAAgDIABgBIAAgBIAFAAIAAgBIACAAIAAgBIABAAIAAADIABABIAAABIgBAAIAAABIgCAAIAAABIgBAAIABABIACAAIAAABgAhtjRIAAgBIgBAAIAAgDIAAAAIAAgBIAAAAIAAgCIACAAIAAABIABAAIAAABIABAAIAAACIADAAIAAgBIACAAIAAgBIABAAIAAACIgBAAIAAABIgBABIAAgBIgEAAIAAABIgBAAIgBABgACdjTIAAgBIgBABIgBgBIAAgEIABAAIAAgCIABAAIAAgBIACAAIAAABIABAAIAAAAIACAAIAAABIABAAIAAABIACAAIAAAEIgFAAIAAgBIgBAAIAAABIgBAAIAAABgAgVjaIgCAAIgBAAIgBgBIAAgEIACAAIAAgBIABAAIAAgBIACAAIAAABIAAAAIAAADIABAAIABABIgBAAIAAACIgBAAIAAAAg");
	this.shape_1.setTransform(0.3,-1.1);

	this.timeline.addTween(cjs.Tween.get(this.shape_1).wait(1));

	// Capa_3
	this.shape_2 = new cjs.Shape();
	this.shape_2.graphics.f("#394C64").s().p("AgqDpIAAgBIgCAAIAAgBIgBAAIAAgEIgBAAIAAABIgEAAIAAACIgBgCIgBAAIAAgBIgBgBIAAgCIgBAAIABAAIAAgBIgBAAIAAgDIgBAAIAAgCIgBAAIAAgCIgBAAIAAgEIAAAAIAAgCIgBACIgCgDIgCgCIgCAAIAAACIgBABIgBAAIgGgDIgCAAIgBAAIgBAAIAAgFIgCAAIAAABIgCAAIgBABIgBAAIAAgBIgBAAIAAABIgCAAIAAABIgBAAIAAgCIABAAIAAgDIgDAAIAAgEIABAAIAAgEIABAAIAAgBIgEAAIgEABIAAgCIgKAAIAAgBIgEAAIgCgBIgBAAIAAgDIgDAAIgCgBIAAgCIACAAIAAgCIACAAIAAgBIACAAIAAgCIgBAAIAAgBIAAgCIAAgBIgBgBIAAgBIgBgBIABAAIgBAAIABgBIgBAAIAAgBIgBAAIgCgBIgBAAIgCgEIgBAAIgCgBIgDgCIgCAAIgDgBIgBgEIADgDIABAAIACgCIAAgFIgBAAIAAgCIgBgBIAAgBIgBgGIAAgCIgBgBIABgBIABgBIAAgBIABAAIABgBIACAAIABgBIAAgBIABABIAAgBIACgCIAAgMIgBgCIgCgDIAAgDIACAAIAAAAIgCgDIABgCIAAgBIACAAIAAAAIgBAAIAAgBIgBAAIAAgCIgBgCIAAgDIABgBIAAgDIABgEIAEgGIgBAAIgBgBIAAAAIgJADIgCAAIgGABIgEAAIAAABIgCAAIAAgBIgEAAIAAABIgHAAIAAABIgEAAIgBAAIgCgBIgCABIgDABIgCACIgBABIAAABIgBAAIAAgCIgCAAIAAgBIgBAAIAAgBIgBAAIAAgBIgBAAIAAAAIAAAAIAAgBIgBAAIAAgBIgBAAIAAgBIgBAAIAAgBIgCAAIAAgBIgBAAIAAABIgBAAIAAgBIgRAAIABgBIAAgBIgBAAIAAgCIABAAIAAgBIgDAAIAAACIgBAAIAAgBIgBAAIAAABIgCAAIAAgBIgBAAIAAgBIgDAAIAAgBIgBAAIAAAEIgBAAIAAgDIgBAAIAAgBIgDAAIAAAFIgRAAIAAACIgJAAIAAAEIgDABIgBABIgBAAIAAABIgBACIAAABIABAAIAAABIgGAAIAAABIgDAAIAAABIgDAAIAAgBIgHAAIAAgBIgBABIgFAAIAAgBIgDAAIAAgBIABAAIAAgDIABAAIAAgDIABgBIAAgFIABAAIAAgDIgBgBIAAgBIgBgBIAAgBIgCAAIAAgCIgGAAIAAgBIgBAAIAAgBIADAAIABgBIACAAIAAgBIABAAIAAgCIgBAAIAAgBIABgBIAAgBIgBAAIAAgBIAAAAIAAgBIgBAAIAAgBIgBABIgBAAIgCgBIgBAAIAAgBIgCAAIAAgBIgBAAIAAgBIABAAIAAgBIAAAAIAAgCIADAAIAAgBIgBAAIAAgDIgBAAIAAgBIgBABIAAAAIAAABIgDAAIgBABIgCAAIAAgCIgBAAIAAgBIABAAIAAgLIgBAAIgBAAIgBAAIAAgCIgBAAIAAgCIAAAAIAAgBIgBAAIABAAIAAgFIgBAAIAAgDIgBAAIAAgFIABgCIAAgBIgBAAIAAgCIABAAIAAgBIgBAAIAAAAIABAAIAAgBIAHAAIAAgEIgEAAIAAABIgCAAIAAgEIABAAIAAgCIABAAIAAgBIACAAIAAgCIADAAIAAACIACAAIAAgFIgBAAIAAgBIABAAIAAABIABAAIAAAFIADAAIAAgDIgBAAIAAgCIgBAAIAAgBIgBAAIAAAAIACAAIAAAAIADAAIAAABIADAAIAAgBIgBgBIAAgBIgBgBIAAgBIgEAAIAAgBIgCAAIAAABIgBAAIAAABIgBAAIAAgBIgCAAIAAgBIABAAIAAgEIgBAAIAAgCIgBAAIAAgBIgCAAIAAABIgBAAIAAgBIABAAIgCAAIAAgDIgBAAIAAgCIAAAAIgBgBIgEAAIAAAAIgCAAIAAgFIABgBIAAgFIABAAIAAgFIgBAAIAAgCIgBAAIAAAAIAEAAIAAAAIAFAAIABABIAFAAIAAABIAFAAIAAABIAEAAIAAABIABAAIABACIABAAIAAgCIABAAIABgBIABAAIAAADIACAAIAAAAIACAAIAAABIABAAIAAABIAAAAIAAABIACAAIAAABIADACIABAAIAAABIABAAIAAAFIABAAIAAABIABAAIAAABIADAAIAAAEIABAAIAAgFIACAAIAAgBIACAAIAAABIABAAIAAABIgBABIABAAIAAABIABAAIAAgBIACAAIAAABIADAAIAAgCIABAAIAAgBIAEAAIAAgBIABAAIAAgCIABAAIAAgBIABAAIAAgCIABAAIAAgBIABAAIAAgFIABAAIABABIAAAAIAAAGIABAAIAAgCIAEAAIAAADIABAAIAAgBIABAAIAAgCIACAAIAAAGIACAAIAAAAIABgBIAAgBIABgBIABgBIAAgBIACAAIAAABIACAAIAAgBIABAAIAAgBIABAAIABgBIACAAIAAgBIADAAIAAgBIABAAIABgBIABAAIAAgBIAEAAIAAgBIABAAIAAgCIABAAIAAgCIABgBIAAgCIAAAAIAAgCIABgBIAAgBIABgBIAAgBIABAAIACgBIABAAIAAgBIAEAAIAAgCIgBAAIAAgBIgBAAIAAgDIABAAIAAgBIABAAIAAgDIgBAAIAAgBIgBAAIgBgBIgBAAIAAgBIgDAAIAAgBIgBAAIAAgBIgBAAIAAgBIgBAAIAAgBIAAAAIAAgBIgBAAIAAgBIgBAAIAAgBIgBAAIAAgBIgBAAIAAAAIgBAAIAAgCIgBAAIAAgBIgBAAIgBgBIgCAAIAAgBIAAAAIAAgBIgFAAIAAABIgDAAIAAABIgDAAIAAABIgBAAIAAABIgBAAIAAgBIgBAAIgBgBIAAgCIAEAAIAAgEIABAAIAAABIACAAIAAABIABAAIABABIAEAAIAAgBIgBAAIAAgBIABAAIAAgDIABAAIAAABIABAAIAAABIACAAIAAABIADAAIAAABIABAAIAAACIAFAAIABAAIAFAAIAAgDIABAAIAAgBIAAgBIAAgBIABAAIAAgBIABAAIAAgCIABAAIAAgBIgIAAIgBABIgFAAIAAgFIABAAIAAgCIgDAAIAAgCIAFAAIAAAAIABAAIAAAAIABAAIAAAAIABAAIAAgBIACAAIAAABIABAAIAAgBIABAAIAAgCIABgBIADAAIABABIACAAIAAACIABAAIAAACIAEAAIAAgBIABAAIAAAAIgBgBIAAgCIABgBIAAgBIABAAIAAgBIACAAIAAgBIgCAAIAAgCIADAAIAAgEIABAAIAAgBIABAAIAAgDIABAAIgBgBIABAAIAAgCIABAAIAAgBIABAAIAAABIACAAIAAgBIABAAIAAgBIgBAAIAAgBIgBAAIAAgBIgBAAIABgBIABAAIAAgBIABAAIAAgBIABAAIAAgBIACAAIAAABIABAAIAAgBIACAAIABgBIACAAIAAgBIgCAAIAAgCIgBAAIAAgDIgBAAIAAgDIABAAIAAACIABAAIAAACIACAAIAAABIACABIACgBIADgCIABABIACAAIABABIABAAIAAABIABAAIgBABIAAABIABAAIAAACIgBAAIgBABIAAABIgBAAIAAACIABABIgBAAIAAACIgBAAIAAADIABAAIAAABIACAAIgBABIgCAAIAAABIgBAAIAAACIADAAIAAABIgBAAIAAABIgBAAIABABIAAABIABAAIAAgBIACAAIAAgCIAFAAIAAABIABAAIAAABIABAAIAAgBIABAAIAAgBIAAgBIAAAAIAAgBIAAgCIABAAIAAgCIABAAIAAABIACAAIAAABIADAAIAAgBIABAAIAAABIABgBIACAAIAAgBIgBAAIAAAAIgBAAIAAgBIABAAIAAgBIABAAIAAgBIgBAAIAAgBIABgBIAAgBIAAAAIAAgBIABAAIAAgBIABgBIAEgBIAAgBIACAAIgBgBIABAAIAAgDIABAAIAAgBIABAAIAAgBIABAAIAAABIAEAAIAAgBIACAAIAAgCIABgBIABAAIAAgCIgBgBIAAgCIAAAAIAAgBIgCAAIAAABIgBAAIAAABIgBAAIAAgBIgBAAIAAgCIgBAAIAAgCIgBABIAAgBIgBAAIAAgCIgBAAIAAgBIABAAIAAgBIgBAAIAAgBIAEAAIAAgBIABgBIAAAAIACAAIgBgBIAAgBIABgCIgBgBIAAgCIgBAAIABgBIgBAAIgBgBIgCAAIgBgBIgBABIAAABIgBAAIAAABIgBAAIAAABIAAgBIgCAAIAAAEIgBAAIgDABIABAAIACABIgDAAIAAABIgBAAIAAgDIgDgEIAAgBIgBAAIAAgCIABAAIAAgBIgCAAIAAABIgCAAIAAABIgBAAIgBABIgBAAIAAABIABAAIAAABIACAAIABABIABAAIAAABIgGAAIAAgBIgCgBIAAgDIgBgBIgCAAIAAgCIgBAAIAAgCIgBAAIAAgDIABAAIAAgBIABABIACAAIAAgBIABAAIgEAAIAAgCIgCAAIAAgBIgDAAIAAgBIgBAAIAAgBIgBAAIAAABIABABIgGAAIAAgBIgBAAIAAgCIgIAAIgBgCIAAgCIgBgBIAAgDIgBAAIAAgBIgBAAIAAgBIgBgBIAAgBIgBAAIAAgDIgBAAIgCgDIgCgBIgBgEIAAgCIgCAAIAAgCIgBAAIgCgCIAAgBIAAgBIAAgBIgBAAIgBgBIAAgBIgBgBIAAgBIgCAAIAAgBIgBgBIABAAIAAgBIAEAAIAAgCIABAAIAAACIABAAIAAgDIABAAIAAgBIABAAIAAgCIACAAIAAABIACAAIABABIABAAIABABIABAAIAAgBIABAAIAAABIABAAIAAgBIABAAIAAABIABgBIAAABIABAAIAAgBIABABIAAABIABAAIAAACIAAAAIAAABIABAAIAAACIAEAAIAAABIADAAIAAABIACAAIAAABIABAAIABABIABAAIADACIABAAIAAABIABABIgBAAIAAABIABAAIAAABIABABIAAgCIAAAAIABgBIgBAAIAAgDIAAAAIAAgBIAAAAIAAgBIAGAAIABgBIAAgBIABAAIAAgCIACAAIAAABIABABIAAABIABAAIAAABIABAAIAAABIABABIAAABIABAAIABAAIAAABIACACIAAABIABABIABAAIAAABIACABIABAAIABgBIABAAIAAgBIAAAAIABgBIABAAIADgDIABAAIAAgBIABAAIACgBIABAAIABgBIAAAAIAAgBIAAgBIAAgCIAAgBIABAAIAAgBIABAAIAAgCIACAAIAAgBIADAAIAAABIABAAIABgBIAAgBIAEACIACAAIAAADIACAAIAAACIABAAIAAABIACAAIACABIAAACIgCAAIAAABIgCABIAAAAIAAABIgCAAIgBABIAAABIABAAIAAABIABAAIAAABIABAAIAAABIACAAIAAABIgBAAIAAACIgBAAIAAABIAAAAIgCACIgBAAIAAABIABAAIAAABIABAAIABABIAAAAIAAABIACAAIAAABIADAAIAAABIABAAIAAABIABAAIAAABIACAAIAAACIgBAAIAAABIABAAIABABIAAABIAEAAIAAgBIABAAIADABIAAAAIABgBIAGAAIAAgBIABABIACABIAAADIADAAIAAgBIgBAAIAAgEIgBAAIAAgBIABAAIgBgBIABAAIAAgBIABAAIAAgIIABAAIAAABIADAAIAAABIAFAAIAAgBIACAAIAAgCIABABIAGACIAAgBIABAAIAAgEIgBAAIAAABIgBAAIAAgBIgBAAIAAgCIgBAAIAAgDIABAAIAAgCIABgBIABAAIABABIABAAIABgBIgBAAIgBgBIAAgBIABAAIAAgBIADAAIAAgBIAAAAIAAgBIgDAAIAAgBIgDAAIAAgDIABgBIAAgBIABAAIAAgBIABAAIAAgBIADAAIAAABIAEAAIAAgBIABAAIAAgCIABAAIAAgFIgBAAIABAAIAAgBIABAAIAAABIABAAIACAAIAHAAIAAABIABAAIAAACIACAAIAAABIAEAAIAAgBIABAAIAAABIAAABIACAAIAAABIABABIAAgBIACAAIABgBIAAABIABAAIAAABIACAAIABgBIAAAAIAAABIAEAAIAAABIADAAIABABIAAABIABAAIAAgBIABAAIAAgBIABAAIAAgBIABgBIAAgCIABAAIAAgBIABgBIADAAIABgBIABABIAFAAIAAAGIgCAAIAAABIgDAAIAAABIgBAAIABABIAGAAIAAgBIAFAAIAAABIACAAIAAgGIABAAIADgFIABAAIAAAAIABAAIAAAAIAEAAIAAAAIABAAIAAAAIAAAAIABABIAEAAIAAgBIABAAIAAAAIACAAIAAgBIABAAIAAgBIABAAIAAgDIABAAIAAAAIABAAIAAgBIABAAIAAgBIACAAIAAACIgCAAIAAAFIgBAAIAAAAIADAAIAAACIgCABIAAABIACAAIAAABIgDAAIAAABIABAAIAAABIACABIgCAAIACABIABAAIAAABIABABIACAAIAAgBIADAAIAAACIgBAAIABADIABAAIAAABIACAAIAAgBIACAAIAAABIABAAIAAgBIABgBIAAACIAAABIAAABIABAAIAHAAIgBAAIgCAEIAAABIAAACIgBAAIAAABIgCAAIAAABIgBAAIAAABIABAAIACABIAAABIgCAAIAAACIADAAIACgCIAAABIABAAIAAABIABAAIAAABIgBAAIAAACIgDACIgBACIgCAAIAAACIgBAAIgBABIAAABIAAAAIgCACIAAABIgBABIACAAIAAABIADADIAAABIADgCIAAABIABAAIABABIABAAIgBACIABAAIAAABIAAAAIAAABIAAAAIAAABIgBAAIAAAFIgBAAIAAABIgBAAIAAACIABAAIABgBIAAABIABAAIAAABIACAAIgBABIAAABIACAAIAAADIAHAAIAAABIABAAIAAABIAAABIADAAIAAABIABAAIAAAEIgBAAIgCABIACAAIAAACIgCABIAAABIgBAAIgBgBIgBAAIAAABIgBAAIAAgBIgBAAIAAABIgBgBIAAABIgBAAIAAgBIgDAAIAAAHIgBAAIAAABIgCAAIgBACIgCABIgDAAIgBABIgBAAIAAABIgBAAIAAABIgBAAIAAACIgBAAIAAgBIgBAAIAAgEIgCAAIAAABIgDAAIgBgBIgBAAIAAAEIgBAAIAAABIgBAAIAAABIABAAIAAABIABAAIAAABIABAAIAAABIABAAIAAABIAAAAIAAACIABAAIAAABIABAAIgBABIAAAAIABABIABAAIABABIACAAIAAABIgBACIABAAIAAgBIADAAIAAACIABABIgBABIABAAIAAABIABAAIABABIAAADIgBAAIAAAGIgBABIAAACIAAAAIAAgBIgBAAIgBgBIAAABIgDAAIAAADIgCAAIAAAAIABAAIAAABIgBAAIAAABIABAAIAAACIABABIAAABIABAAIgBABIAAACIgBAAIAAADIgBAAIAAAAIgCAAIAAACIABAAIAAgBIABABIABAAIAAABIACAAIAAABIABAAIgBACIAAAAIgBAAIAAAAIgBAAIgBAAIgCAAIAAABIgBAAIAAABIAAAAIAAgBIgBAAIAAgBIgBAAIAAABIgBAAIAAgBIgDAAIAAgCIgBAAIgBACIAAACIABABIgBAAIAAACIAAAAIAAABIAAAAIAAABIAAACIAAAAIAAACIABAAIABABIAAABIgBAAIAAACIgBAAIAAABIAAAAIAAgBIgCAAIAAABIgBAAIAAACIABAAIgCACIgBAAIAAACIgBABIgBAAIAAABIgBAAIAAACIgBAAIAAACIgBgBIAAADIABABIAAACIABADIABAAIAAAAIABAAIAAABIABAAIABABIABAAIAAABIABACIABABIAAADIABABIABAAIAAABIADABIgCABIAEADIAAACIgCABIAAACIABAAIAAABIACACIABABIABABIAAABIABABIABAAIgBABIgCAAIAAgBIAAgBIgBAAIAAABIgDAAIABABIAAACIgBAAIAAAFIgCAAIADABIAAAGIABABIAAABIABAAIAAABIACAAIAAABIABAAIgCAAIAAACIgEAAIAAAEIgCAEIAAABIAEAFIABABIABACIABADIACAFIABAAIAAACIACAAIAAACIABAAIAAgCIABAAIAAgBIABABIAAABIABAAIAAABIABAAIAAABIgBAAIAAABIABAAIAAACIABAAIACABIABAAIgBgBIABAAIAAgBIABAAIABABIABAAIAAgBIAAAAIAAgBIAAAAIAAgBIAAAAIAAgBIAAAAIAAgBIgBAAIAAgCIABAAIAAABIADAAIAAgBIADAAIAAgBIADAAIAAgBIABAAIAAgCIABAAIAAAAIADAAIAAAAIABAAIAAAAIABAAIAAgEIACAAIABgBIACAAIAAgCIABAAIAAgDIAGAAIAAgBIABAAIAAgBIAAAAIAAgCIAAAAIAAgEIABAAIAAgCIACAAIAAgBIADAAIAAABIAAAAIAAgBIgBgCIAAgBIgCAAIgCgBIAAgBIgBgBIAAgBIAAgBIgCgDIAAAAIACAAIAAAAIABAAIAAABIAEAAIAAgBIACAAIAAAAIABAAIAAgCIACAAIABABIAAABIgBAAIAAABIADAAIAAgBIABAAIAAAAIABAAIAAAAIABAAIAAgBIABAAIAAgEIABAAIAAgCIAAgBIADAAIAAABIADAAIAAgBIAFAAIAAABIABAAIAAgCIACAAIAAADIABABIAAgBIABAAIAAABIABAAIAAADIABAAIAAACIAAAAIAAABIABAAIAAACIACAAIAAgCIACAAIAAgCIACAAIAAABIACAAIABAAIABAAIAAABIABAAIABgBIAAAAIACAAIAAgBIACAAIAAgBIgCAAIAAgBIADAAIAAgCIAAgBIAAgBIADAAIAAABIABAAIAAABIACAAIAAACIAAAAIAAABIABAAIABABIAAABIACAAIAAAAIABAAIAAADIABAAIAAACIABAAIAAgCIABAAIAAACIABAAIAAACIABAAIAAgBIABAAIAAgDIgBAAIAAgCIABAAIAAgBIABABIADAAIAAABIACAAIAAABIACAAIAAgBIAAgBIgCAAIAAgBIgBAAIAAAAIgBAAIAAgCIADAAIAAgBIABAAIAAAAIgBAAIAAgEIABAAIAAABIABAAIABgBIAAgBIABAAIAAgBIgBAAIAAAAIABgBIAAgBIAEAAIAAgBIgBAAIAAgJIABAAIAAgCIgBAAIAAgEIgBAAIAAgBIACAAIAAgBIABAAIABgBIAAABIACAAIAAgBIABAAIAAgBIACAAIAAgCIgCAAIAAgBIADAAIAAgBIACAAIAAABIAAAAIAAgBIABAAIAAgBIABgBIAAABIABAAIAAABIgBAAIAAABIgBAAIAAACIADAAIACABIAAgBIACAAIAAgEIABAAIADgBIAAAAIADgBIAAABIABgBIABAAIACAEIABAAIAAgFIABAAIAAAAIABAAIAAgCIABAAIAAgBIgBAAIAAgCIABAAIAAgBIABAAIgBgCIABgCIACgCIABAAIABACIAAABIABAAIAAABIABAAIAAACIAAgBIADAAIAAABIABAAIAAABIACAAIABABIABAAIAAABIgBAAIAAABIAAAAIAAACIgBAAIAAAAIgBAAIAAABIgBABIABAAIABABIgBAAIAAABIgEAAIgBABIgBABIAAABIABAAIAAACIAFAAIAAABIACAAIAAABIAEAAIAAABIACAAIABAAIABABIAAADIgBACIAAABIgBAAIAAACIgBAAIgBABIgBAAIAAACIgBAAIAAABIgBAAIAAABIADAAIAAgBIABAAIABABIAAABIABAAIAAACIABAAIABABIABAAIAAAAIABAAIAAABIAAAAIAAABIgFAAIABABIgBABIAAACIgBABIgBACIAAABIABAAIAAABIgEAAIAAABIgBAAIAAABIAAABIAAABIgBAAIAAABIgCgCIgDAAIAAABIgBAAIAAABIAAAAIAAACIAAAAIAAgBIgBAAIgCAAIAAAAIgBAAIAAAAIgBAAIAAAAIgBAAIAAAAIgBAAIAAADIABAAIAAABIgBAAIAAACIgBgCIgBAAIgBgBIgBAAIAAgBIgBAAIAAACIAAAAIAAACIAAAAIAAAAIgCAAIAAABIgBAAIAAABIABAAIgBABIAAACIABAAIAAABIABAAIAAABIABAAIAAgBIABAAIABABIAAABIACAAIAAABIABAAIAAABIABAAIAAABIABAAIAAABIACgBIAAACIABAAIAAABIABAAIAAACIABAAIAAAEIAAAAIAAAKIAHAGIABAAIAAABIABAAIAAABIABAAIAAACIACAAIAAABIAEAAIACABIABABIACABIABAAIAAABIACAAIAAABIAAAAIACABIABABIABAAIAAAAIABAAIABABIABAAIAAgBIABAAIAAAAIABAAIABgBIABAAIAAABIABAAIAAAAIAAAAIAAABIABABIgBAAIAAAEIAAABIAAAAIAAABIAFABIAIAAIAAABIACAAIAAgBIABAAIAAABIgBABIAAACIACAAIAAgBIABAAIAAABIABAAIAAABIACAAIgDACIAAABIgDACIgBAAIgDAAIgCADIgBACIAAAAIgBAAIAAABIgBAAIAAABIgCAAIAAABIgBAAIAAABIgCAAIAAABIgBAAIAAABIAAAAIAAABIgBAAIAAABIgBAAIgBABIgBABIAAADIgBAAIgBABIgBAAIAAABIgBAAIAAADIgBAAIAAAAIgBAAIAAADIABAAIAAACIgBAAIAAgBIgBAAIAAgBIgBAAIAAgBIgBAAIgBgBIgEAAIgBgBIgBAAIABAAIABAAIAAgCIgDAAIAAAEIgBAAIgBABIgCAAIgBgBIgBAAIAAABIgBAAIAAACIgBAAIAAABIAAAAIAAABIABAAIAAABIgCAAIAAABIgBAAIAAABIgBAAIgBgBIAAgBIgCAAIAAgBIgBAAIAAgBIAAAAIgBgBIgDAAIAAABIgBAAIAAABIgCAAIAAABIgBgBIAAABIgCAAIAAgBIgBAAIgBgBIAAAAIAAABIgCAAIAAABIgBAAIAAABIgDAAIAAgBIgBAAIAAgBIgGAAIAAABIgCAAIAAABIgCAAIAAACIABAAIAAACIgBAAIAAAHIACAAIgBABIACAAIAAABIACAAIABABIAAABIABAAIAAABIgBAAIAAACIACAAIgBABIACAAIAAABIACAAIAAABIAAAAIAAABIgFAAIAAACIgCAAIAAgCIgBAAIAAAAIgCAAIAAAAIgBAAIAAAAIgBAAIAAAAIAAAAIAAABIgBgBIAAABIgBAAIAAACIABAAIAAADIACAAIAAABIgBAAIAAABIAAAAIAAABIgCAAIAAABIgBAAIAAACIgCAAIAAABIgBAAIAAACIABAAIAAABIADAAIAAABIABAAIAAABIgBAAIAAABIgEAAIAAABIAAAAIAAgBIgBAAIAAACIgEAAIgBgBIAAgBIgGAAIAAABIgFAAIAAgBIgDAAIAAgBIgCAAIAAgBIgEAAIAAABIgCAAIAAgBIgHAAIAAAAIgBAAIgBAAIAAAAIgEAAIAAgCIgCAAIAAABIgBgBIgDAAIAAABIAAABIgBAAIAAgEIABAAIAAgDIgBAAIAAgBIgBAAIAAgCIgEgBIgBAAIAAAAIgBAAIAAgBIgBAAIAAgEIgBAAIAAgBIABAAIAAgBIABgBIABAAIAAgCIgCAAIAAgBIgBAAIAAABIgBAAIAAgCIgBAAIAAgLIABAAIAAgBIABAAIAAgBIACAAIAAABIACAAIAAgBIACAAIAAgBIgDAAIAAgCIAAAAIgFgCIAAgBIABAAIAAgBIABgBIAAgBIABAAIAAgCIABgBIABAAIAAgCIAAAAIAAgBIABAAIAAgBIgBAAIAAgBIAAgBIgDAAIAAABIgCAAIAAABIgBAAIAAABIgBgBIgBAAIAAABIgBAAIAAABIgCAAIAAgBIgBAAIAAgBIgBAAIAAgBIgBAAIAAgEIAEAAIAAgBIABAAIAAgBIADAAIAAgBIgBAAIAAgBIgBAAIAAABIgBgBIgBAAIAAgBIABAAIAAgDIgCAAIAAABIgBAAIAAgCIAAAAIAAgDIgCgCIAAAAIgBAAIAAgBIgCgBIAAgBIgBAAIAAgBIAAABIgBgBIAAABIgEAAIAAgBIgCAAIAAgBIgKAAIAAgBIgDAAIAAgBIgHAAIgBgBIgDAAIAAgBIgEAAIAAgBIgBAAIgBgBIgBAAIgBgBIgBAAIAAABIgCAAIAAgBIgCAAIAAABIgCAAIgBgCIAAABIgBAAIAAgBIgBABIgCAAIgCABIgBAAIAAgBIgCAAIAAgBIgCAAIAAAAIgEAAIAAgCIgBAAIAAACIgBAAIAAAHIAEAAIAAACIgBAAIAAAEIgBAAIAAABIABAAIAAABIABAAIAAADIgCAAIAAAAIgBAAIAAACIgBAAIABABIAAABIACABIABgBIAAABIABAAIgCACIAAABIABABIAAACIgBAAIAAABIADACIgCAEIAAAAIgCACIgEACIgBAAIgCABIgCAAIgCACIgFAIIgBAAIAAABIgBAAIgBACIAAABIgCAAIAAABIgCADIAAgBIgMAAIAAABIgDAAIAAgBIgBAAIAAABIgBAAIAAgBIgBABIgCAAIAAgBIgCACIgBABIAAACIgBAAIAAADIAAAAIAAABIgBAAIAAACIgBAAIAAAEIgBAAIAAACIgBAAIAAABIgBAAIgBABIAAgBIgBAAIAAABIgBAAIAAAEIABABIAAABIABAAIAAgBIACAAIAAACIgBAAIAAABIgBAAIAAABIgBAAIAAABIgBAAIAAABIgBAAIAAACIgBAAIAAABIABAAIAAAAIABAAIAAABIABAAIAAABIABAAIgBABIABAAIAAABIACAAIAAgBIABAAIACgCIAAACIABAAIAAABIgBAAIAAABIABAAIAAABIAAAAIAAABIAAAAIAAACIgBAAIABABIgBAAIAAABIgBAAIgBAAIAAABIgBAAIgBABIAAABIgBAAIAAABIgBACIAAABIgDAAIAAAAIAAAAIAAAEIgBAAIAAACIABAAIAAABIgBAAIAAABIgBAAIgBABIAAABIgBAAIAAABIgCAAIAAABIgBAAIgBgBIgBAAIgBAAIgCAGIACABIABACIAAACIgBABIgCAAIAAADIgCAAIAAgBIgBABIAAgBIAAABIgDAAIAAgBIgFAAIAAABIgCAAIgBgBIAAABIgBAAIgBABIgCADIABAAIAAACIABAAIAAADIABAAIAAABIABAAIAAABIABACIAAACIgEAAIgBgBIgCAAIgBgBIAAgBIABAAIAAgKIgBAAIAAABIgBAAIAAABIgCAAIABAAIAAADIgBAAIAAACIAAABIgCAAIAAABIgBAAIgCABIAAABIACABIAAABIABABIAAAFIgEACIgGAAIgCABIgBAEIgBAAIgBAAIgBAAIgCACIAAABgAgRB0IACAAIABABIACAAIAAAAIABAAIgBACIACAAIAAADIABAAIAAAAIgBABIAFAAIABgBIABAAIAAgEIABAAIAAgBIABABIABgBIAAAAIAAgDIABgCIAAgCIAFAAIAAgBIgBAAIgBgBIAAgEIABAAIgDgCIgCgDIgDAAIAAgBIgBAAIgBgBIgBgBIgCgDIAAgBIgBAAIgBgBIgEAAIgBgBIgBABIgBAAIAAABIgBAAIgBABIgDgCIgBAAIgEgDIgMgCIgFADIgCACIgBAEIgBACIgBAAIAIAIIABACIABABIAAACIADABIAAAFIABAAIAAABIABgBIACAAIAAgBIABAAIAAgBIAEAAIAAgBIABgBIAAABIADAAIAAABIACAAIAAABIAAAAIAAgBIACAAIAAADIABAAIAAgCgAANiLIACAAIAAABIAAABIACAAIABABIABAAIABABIABAAIAAAAIACAAIAAABIACAAIAAABIABAAIAAgBIABAAIAAgCIgBAAIADgCIACgCIAAABIABAAIAAABIACAAIABABIACAAIAAgBIABAAIAAgHIgBAAIAAgCIABAAIAAgBIABAAIAAgBIACAAIAAgDIgBAAIAAgBIgBAAIAAABIgBAAIAAgBIgBAAIAAgBIgBAAIAAgBIgBAAIAAgBIgCAAIAAgBIABAAIgBgBIgBAAIAAgCIgBAAIAAgBIgCAAIAAgBIgCAAIgBgBIgBAAIAAgBIAAAAIAAgBIgBAAIgBABIgBACIgGAGIgBACIgBABIgBABIgGgCIAAgBIgCgBIgBAAIAAABIgBABIAAABIgBAAIAAABIgBAAIAAgBIgBAAIAAAAIAAAAIACgDIABgBIACgCIAAgBIgBgBIgBAAIgDgCIgBgEIAAgCIgBgBIAAgBIABgBIgEAAIAAgBIgBAAIAAgBIABgBIACAAIAAgDIgBAAIAAgBIgBAAIAAgCIgBAAIAAgCIgCAAIAAgCIgBAAIAAgBIgBAAIAAABIgCAAIAAgCIgBgCIAAABIgCAAIABABIgCAAIAAgBIgDAAIgCACIAAABIABAAIAAAEIABAAIABgBIAAABIABAAIABgBIAAACIABABIgBAAIAAABIABAAIgBACIAAACIABAAIAAAIIgGAAIAAABIgFAFIgEgBIAAADIgBAAIAAACIACgBIABAAIABgBIAAADIAEABIABAAIABABIAAAAIAAAAIABABIAAgBIABAAIABAFIAAABIABAAIAAADIACAAIAAADIACAAIAAgBIABAAIAAABIACAAIAAABIABAAIgBABIACAAIAAABIADAAIgBgBIABAAIACgCIAAABIABAAIAAgDIABAAIABgBIAAAAIAAgBIACAAIAAABIABAAIACABIABABIAAgBIABgBIAAgBIABgBIADABIADADIgBAAgAD3B0IAAgCIABAAIAAACgACeiBIAAgBIgBAAIAAgBIgBAAIAAgCIgDAAIgBgBIAAABIAAgBIgDAAIAAABIgBgBIgDAAIAAABIABAAIAAACIgBAAIAAABIgCAAIAAgBIgBAAIACgJIAAgFIgBAAIABgBIABAAIABgBIAAgCIgBAAIAAgBIgBgBIABAAIAAgCIABAAIAAgCIABAAIAAgBIgBAAIAAgBIABAAIAAgBIADAAIAAgBIgCgCIAAgFIgBgBIAAgBIABAAIAAgBIACAAIAAgBIgBgBIgDAAIgBABIgDAAIgCgBIAAAAIgBAAIAAgCIABAAIAAgDIAAAAIAAgBIABgBIAAgBIgCAAIAAgBIgEAAIAAABIgCAAIAAgBIgBAAIgBgBIgBAAIAAgCIgBAAIgBgBIgBgBIAAgBIgDAAIAAABIgCAAIAAABIgFAAIAAgBIACAAIAAgBIABgBIABAAIABgBIgBgBIAAAAIgFAAIAAgCIgFAAIAAgBIgBgBIAAgCIgBAAIAAgBIADAAIAAABIABABIABAAIABABIABgBIAAgBIAAABIABAAIAAgBIACAAIAAgBIABAAIAAgBIABAAIAAgBIABAAIAAgBIAAAAIAAgBIABAAIAAgBIABAAIAAgBIABAAIAAgBIABAAIAAgBIACgCIABAAIAAgBIACAAIAAAAIABAAIABgBIABAAIAAgBIAAAAIAAgBIABgBIADAAIABABIADAAIAAgBIABAAIAAgBIACAAIAAgBIACAAIAAgBIgBAAIAAgDIgBAAIAAgCIgBAAIAAgCIABgBIAAgBIABgBIABAAIAAgCIgBgBIABAAIAAgDIABAAIAAgBIgDAAIAAgBIAFAAIAAABIABAAIAAABIABAAIABACIADABIABABIABAAIAAgEIABgBIABAAIAAABIABAAIAAAAIACAAIABACIACgDIABAAIAAABIADgDIABACIACgBIABAAIAAACIABAAIAAACIgCABIgCAAIAAgBIgCAAIAAABIABAAIgBABIABABIAAAAIABAAIgBAAIAAABIAAABIAAAAIABgBIAAABIACABIAAACIABAAIAAgBIABAAIAAABIABAAIAAADIABAAIAAABIACAAIAAACIABAAIAAACIABAAIAAACIABAAIAAAFIgCAAIAAABIgBAAIABABIgBAAIABABIgCAAIgBACIgBAAIAAABIAAAAIgBABIgBAAIAAADIABAAIABABIAAgCIAAAAIAAABIABAAIAAABIABAAIADgDIABAAIABgBIABABIABAAIABABIAAADIADAAIAAgDIAGAAIAAgBIABAAIAAACIAFAAIAAgBIACAAIAAgBIADAAIAAACIAAAAIAAABIgBAAIAAABIABAAIgBABIAAACIgBABIAAAAIgCAAIAAABIgBAAIAAADIABAAIAAABIABAAIAAACIgBAAIABABIADACIgBABIAAABIgBAAIAAADIgBAAIAAADIABAAIABAAIAAABIABABIAAABIAAABIAAAAIAAABIgBAAIAAABIgEADIgGAAIAAgBIgDAAIAAgBIgDAAIAAABIgBAAIAAABIAAABIAAACIAAAAIAAABIgDAAIAAgBIgCAAIAAABIgDAAIAAABIACAAIAAABIABAAIAAABIgCAAIAAACIgBAAIAAAAIgBAAIAAABIADAAIAAABIgBAAIAAABIgBAAIAAABIgBAAIAAgBIgBAAIAAABIgBAAIAAgBIgBABIAAgBIAAABIAAABIAAAAIAAADIAAAAIAAACIgCAAIgDACIgBAAIAAACIgBAAIAAABIABABIgCAAIAAABIgCAAIgBABIAAAAIgBAAIAAABIgBABIAAABIgBAAIAAABIgBABIgBABgABUjKIABAAIAAABg");
	this.shape_2.setTransform(-0.1,-0.4);

	this.timeline.addTween(cjs.Tween.get(this.shape_2).wait(1));

	// Capa_4
	this.shape_3 = new cjs.Shape();
	this.shape_3.graphics.f().s("#65653D").ss(0.5,1,1).p("AC1hXIAMgWIgggfQAkgfACgCQACgDALgnIgKghIgdAKQgIgUASgFQAEgBADABQADgBAKgGIAIgFQAGgFAQgSQARgUABgGABylsIgGANQgFANgHAHQgJAHgGAHQAGAIAHAVQAEAOALACQAEABAUgLQATgKAFgEQAGgEAMgLQAJgIAPgJQAGgDAOgQIANgOIATAlQADABAIgHQAIgGAFgGQAFgGgBgQIilAAIkgAAIj/AAIAABdAFElsQAEAKALAPIAnANQgCAGgMAKQgNAKgEAEIgTgNQgMASADAGQACAFAQAOQgKAKgEgCQgBAAAAAJQABAKABAEQADAFAGADQATAHAEgHQAAgBAMAdIArgsIATAHAFElsIgtAAAkTkBQAKADAIAIQAFAEAIAJQARAOAvgIIASAhQAIAPgLAOQgIAJAZARQAMAIgDACQgFADAJAKQAfgUALgcQAIgUAQgCQAOgCAFAIQACAEANgNQAIgIAFAFQAFAEAAAKIgHAfQgHAEgDAFQgHAJAQAEQAJACAFgKQADgFAFgMQAKABATAEQAbAFAEAFIAFAGQANAKAHAIIgUAsIBSgEQACgBANgbQAGgLAQAXIA5gNQAFASAAAGQACACAVAIQAXAMgBAFQgCAIAFAFQAFAFAJAAQAJAAANANQAJAJANAJQAIAIABAMIg9AEQgGAEABALQABAKgWALIgegPIgmAfQgIgCgHgGQgHgHgOgDQgKgDgDgCQgCgCgHgNQgGgLgngxIglgEQgJgPgCgHQgEgLAOgIAGuhOQgHAEgEACQgFAEgCADQABATAFAHQACACAKAGAGugFIAAgLIgHAIgAGugQIAAgPIAAgvIAAieIAAiAIhqAAAGuFlIgJAIIAJAAIAAgIIAAlqAgaBTQAFAEADgBQAFgBAIAHQAKAHAAAFQABAHAGAFQAMAMATgJQAKgEANgLIgQAmIALgHQgYAZAFAgQAJAvgGAZIgbgWIhHA0QgBgDAAgEQAAgCgIgJQgKgNgHAAQgcAAgMgCQgdgEgZhEIAVgwIgEgCQAlgJgDgZQgDgSAAgCQABgKAMgGQgDgMgJgQQgHgNgCgMQAdgWACgCQAJgJAAgRQAKgHADAEQAAgCAIgUQADAEAAABQgBACABADQADAJALAGQAHAEgCAYQAQAFAFAGQAEAGAAAQQAAAGACAWQACAUgFAIQgQgBgEADQgGAFgCABQgMgDgDgEQgCgDgNgCQgOgCgCgBQgDgDgJgEAF0FtQgBgFgDgCQgFgDgHgIQgEgGAAgJQAAgOgCgJIgrAEQgPAZAAANQgBAIAGAGIBLAAIAxAAAAFFtIEkAAAA/gaIADCCAmfkDIgOgMIAABgIAAD7QAKgUAGgTQAIgYAGgTQAjgEgJgaQgRgjgCgSQAEgDASgBQAKgBACgPQAEgXACgBQAOgEADgDQgOgEgDgLQAAgOgCgHQgCgJgDAEQgBABABgIIA+gJIgJgyIAIALQAHgVABABQAEAFALgGAmfkDQADALgEAJQgCAGgHAQQgEAKADAHQADAKAAAMIgGADAiulsIABAAIheAkIgIBHAlni8QgCgFgHgFQgHgFgDgJQgEgMADgBQAHgDABgMIgsgTAitC9QgSAGgZgPQgBgBgDgDQgBgCgJgDIAHASQgWgIgCAIQgDAQgMAHQgHAEgGABQgKABgCABQgJACgEAFQgGAFgGACQgSgPgCAEQgKATgLAHQgDACgXATQgTAPgEABQgVgEAAgSQAAgSgGgCAAFFtQABgSgKgDQgVgGgEgDQgEgEAAgBQAAgCgEgFQgJgLgEAGQAAAAgDgYAmtBMIAACnIAAB6IGyAA");

	this.timeline.addTween(cjs.Tween.get(this.shape_3).wait(1));

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = new cjs.Rectangle(-44,-37.5,88,75);


(lib.graph_05 = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// Capa_1
	this.shape = new cjs.Shape();
	this.shape.graphics.f().s("#00CCFF").ss(0.2,0,0,22.9).p("Ap6JTIT1AAIAAylIz1AAg");

	this.timeline.addTween(cjs.Tween.get(this.shape).wait(1));

	// Capa_2
	this.shape_1 = new cjs.Shape();
	this.shape_1.graphics.f("#FFFF00").s().p("AGsHHIAAgCIADAAIAAgBIABABIAAABIgBAAIAAABIgBABgAF6G7IgBgBIABAAIAAgBIABAAIAAACgAG1G6IAAgBIgBAAIAAgBIgBAAIAAAAIABAAIAAgCIABABIAAgBIABAAIAAgBIADAAIAAgBIAAAAIAAABIACAAIAAABIgCAAIAAACIgCAAIAAAAIACAAIAAABIgCAAIAAABgAGXG4IgCAAIAAAAIAAAAIAAgBIACAAIAAABIABAAIAAABgAF+G5IAAgBIAAAAIAAgBIABAAIAAgCIABAAIAAgCIADAAIAAABIgCAAIAAACIgBAAIAAABIABAAIAAABIgBAAIAAAAIgBAAIgBAAIAAABgAGPG4IAAAAIgCAAIAAgDIgBAAIAAgBIgBAAIAAgCIgBAAIAAgBIgDAAIAAgBIgBAAIAAgCIgDAAIAAABIACAAIAAABIgBAAIAAABIgEAAIAAABIgBAAIAAABIgBAAIAAACIAAABIAAACIgBAAIAAAAIgCAAIAAAAIgBAAIAAgDIgBAAIAAgCIABAAIAAgBIACAAIAAgDIgBgBIAAgBIgBAAIAAgBIgBAAIgBgBIgBAAIAAgBIgBAAIAAgBIgCAAIAAgBIgCAAIAAgCIgBAAIAAgBIAAAAIAAgBIgCAAIAAgBIgBAAIAAgCIABAAIAAgBIgBAAIAAgCIgBgBIAAgBIgBAAIAAgBIAAAAIAAgBIgBAAIAAgBIgBAAIAAgBIgBAAIAAgBIgBAAIAAgBIgBAAIABgBIADAAIAAgBIABAAIAAAAIAAAAIADADIACAAIAAABIAAABIACACIAAABIACABIABABIgBAAIAAADIADAAIABABIAAgCIgBgBIgBAAIAAgBIABAAIAAgCIABAAIAAgBIABAAIABgBIAAADIgBAAIAAABIADAAIABABIAAgCIAAAAIAAgBIAAAAIAAgBIADAAIACgBIAAABIADAAIAAABIABAAIAAABIgCAAIAAgBIgBAAIAAACIABAAIAAABIABAAIAAABIACAAIAAgCIABABIAAgBIACAAIAAAEIABAAIAAACIgBABIAAADIgBAAIAAgBIgBAAIAAABIgBAAIAAABIACAAIAAABIABABIABAAIgBABIAAABIABAAIAAAEIABAAIAAACIABABIAAABIABAAIAAACIAAAAIAAABgAGHGsIACAAIgBgBIACAAIAAgBIgCAAIAAABIgBAAgAGIGrgAG3GnIACgBIACAAIgBABIAAABIgBAAIgCABgAG7GmIAAAAIABAAIAAAAgAG7GmgACsCAIAAgBIgBAAIAAgBIgBABIgCAAIABgBIAAgBIABAAIAAgCIACAAIAAACIABAAIABACIAAABgABvB4IAAgBIAAABIgCAAIABgBIAAgBIgBAAIgDgCIACAAIAAgBIADAAIAAgBIACAAIAAABIADAAIAAACIgCAAIAAABIABAAIAAABIABAAIgBABIgBgBIgBAAIAAABIgBAAIgBABgACXBbIgBAAIAAgDIABAAIAAgBIACAAIABgBIABAAIAAACIgCACIAAABIgBAAIgBABgABsBTIAAgBIgCAAIAAgCIACABIAAgBIABAAIAAABIABAAIAAACgABnAsIAAgBIgEAAIAAgBIABAAIAAgBIADAAIgBgBIgBAAIABgBIABAAIAAgBIABAAIAAABIACAAIAAgDIAAAAIAAAEIACAAIAAACIgCABIgBAAIAAABgABYAHIAAgBIAAgBIgCAAIAAgBIgBAAIAAgBIABAAIAAgCIACAAIAAgBIAAAAIACAAIgCAAIACAAIAAADIgCgBIAAACIAAAAIAAABIAAAAIAAABIADAAIAAAAIgBAAIAAABgABnADIAAgCIgBAAIAAgBIgBABIAAgBIgBAAIAAAAIABAAIAAgBIACAAIABgBIAAgBIgBgBIAAgBIgBAAIAAgCIgCAAIAAABIgBAAIABABIACAAIgBABIgBAAIAAABIgCAAIAAABIgBAAIAAABIgCAAIAAgBIgDAAIAAgCIgBAAIAAgFIgBAAIABgBIgDAAIACABIAAABIgCAAIAAACIgBAAIAAABIgBAAIAAABIgCAAIAAgBIgCAAIAAgBIgDAAIAAABIgCAAIAAgBIgBAAIAAgBIAAAAIgCgBIgCAAIAAgCIgCAAIAAABIAAAAIAAgBIgCAAIAAgCIACAAIAAgBIACAAIAAABIAEAAIAAgBIACAAIAAgBIABAAIAAABIADAAIAAACIABAAIAAgBIABAAIAAABIABgBIADAAIAAgBIAAAAIAAgBIAAAAIAAgBIgBAAIAAgBIABgBIAAgBIgDAAIAAABIgBAAIgBgBIAAABIgDAAIAAgBIACAAIAAgBIgBAAIAAgBIABAAIAAgBIACAAIAAABIAGAAIAAgCIgCAAIAAgDIAEAAIAAABIABAAIAAgCIgCAAIAAgBIACAAIAAgBIgBAAIAAgBIABAAIAAgBIAAAAIAAgBIAAgBIACAAIAAABIABAAIAAABIACAAIABABIACAAIAAgBIABAAIAAgCIgBgBIAAgBIgBAAIAAgBIADAAIAAgGIABAAIAAABIABAAIAAABIADAAIAAgDIABAAIAAAEIgDAAIAAAEIAAAAIAAABIACAAIAAACIgCAAIACABIAAgBIACAAIAAABIABAAIAAADIAAAAIAAgBIABAAIAAABIABAAIAAABIgBAAIAAABIgBAAIABABIABACIAAABIABABIABAAIAAABIABAAIAAgBIADAAIAAABIABAAIAAgBIADAAIAAABIgBAAIAAACIgBAAIAAABIgBAAIAAgBIgBAAIAAgBIgBAAIAAADIgBAAIABABIAAACIgBAAIAAABIABAAIAAADIgBABIAAgBIgBgBIgBAAIAAACIgBAAIAAABIABAAIAAADIgBABIAAgBIgBAAIAAgBIgCAAIgBABIgBAAIAAgCIgBAAIAAACIgCAAIAAABIgBAAIAAAFgABPgLIACAAIAAgBIgCAAgABjgcIABAAIAAgBIgBAAgAA3gHIABgBIAAgBIgBAAIAAgBIACAAIAAgBIAAAAIABAAIAAAAIABAAIABAAIABAAIAAABIABAAIAAABIgEAAIgBACgAA/gWIgBgBIABAAIgBgBIgBAAIAAgBIABAAIAAgBIAEAAIAAABIgBAAIAAABIgBABIAAABgABXgXIAAgBIgBAAIAAgBIgBgBIAAgBIgBAAIABgBIABAAIAAABIABAAIAAACIABABIAAABgABwgdIAAgCIgBAAIAAgBIAAAAIAAgBIADAAIAAACIABAAIgBABIgBAAIAAABgAAigrIAAgBIAAABIAAgDIAAgBIACAAIAAAAIACAAIAAABIgBABIgBACgABCgxIgBAAIAAgCIABAAIAAABIABAAIAAgBIABAAIAAABIABAAIAAACIgBAAIAAABgABAg0IAAgBIABAAIAAABgAk4jqIAAgBIgBAAIAAgBIACAAIAAABIACAAIAAABgAlyjwIgBgBIABAAIAAgDIABAAIAAgBIABgBIgBAAIAAAAIABAAIAAgBIABAAIAAgBIABAAIAAgCIABgBIABABIAAACIgBAAIAAABIABABIAAABIgDAAIAAABIgCAAIABABIgBAAIAAACIABgBIAAACIgBAAIgBABgAllkaIABgCIAAAAIAAABIAAABIgBAAgAlOkbIgBAAIAAgCIABgBIAAABIACAAIAAABIgBACgAlYkeIgBAAIAAgCIABgBIAAABIABAAIACABIgCAAIAAABIgBABgAkukeIAAgBIAAAAIAAABIgBAAIAAgBIgBAAIgBgBIABAAIAAgBIgBAAIAAABIgDAAIAAgCIABAAIAAgCIACAAIAAgBIgCgBIACAAIABgBIAAACIACAAIAAABIAAgBIACABIABABIAAABIACABIABAAIAAABIgCAAIAAABIgCAAIAAABgAldkeIAAgBIgDAAIgBgBIgCACIAAgCIgBgBIABAAIAAgCIABAAIAAgBIgCAAIAAgBIAAAAIgBgBIgBAAIAAgBIgDAAIAAgCIgBAAIAAgBIgBAAIAAABIAAAAIgBgBIAAgBIABAAIAAgBIAAAAIAAABIABgBIgBAAIAAgBIAAAAIAAAAIAAgBIABAAIAAgBIgBAAIAAgBIABAAIAAgBIABAAIAAABIADAAIAAgBIABAAIAAgBIABAAIABgBIAAgBIABgBIACAAIAAgBIACAAIAAgBIABAAIAAABIABAAIAAABIgBAAIABABIAAgBIABABIABAAIAAgCIABABIAAgBIABAAIAAgBIABAAIAAADIACABIAAABIABABIABgBIABAAIAAABIABAAIAAACIABAAIAAACIgBAAIAAAAIgBABIAAABIAAABIAAABIgBABIgBgBIABgBIgBAAIABgBIAAgBIABAAIgBgBIABAAIAAgBIgBAAIAAgBIgBAAIgBgCIAAABIgCAAIAAABIADAAIAAABIgBAAIAAABIgCACIgBABIABAAIAAABIACAAIAAACIgCABIACAAIABABIAAABIgBAAIgDADIgBAAIAAgBIgBAAIgBABIABAAIAAABIgBAAIAAABIgBAAIAAABgAkxkggAm6kgIAAgBIgBAAIAAgBIABAAIAAgBIABAAIAAADgAlpkhIAAgBIACgBIAAABIABAAIAAABgAlmkjIAAgCIABAAIAAACgAlpklIAAgBIACAAIAAABgAlxk2IABgBIABAAIABABIAAgBIABABIAAABIgBABgAldk4IAAgBIABAAIAAABgAlmk4IAAgBIgBAAIABgBIAAgBIABgBIAAABIABAAIAAABIAAAAIAAACgAmClCIgBAAIAAgDIABABIABAAIAAABIABAAIABABIgDADgAlFlDIgBAAIAAgBIABAAIAAgBIACAAIAAACIgCABgAmQlMIAAgCIgCAAIAAgBIgCAAIABgBIAAgBIgBAAIAAgBIABAAIAAABIACAAIAAgBIABABIAAAAIABAAIAAACIACAAIAAABIgBAAIAAABIgBAAIAAgBIAAAAIAAACgAmWlSIgBgBIAAgBIACAAIAAACgAmPlVIAAgCIABAAIAAABIADAAIAAABgAlvlWIAAgBIgBAAIAAgDIACAAIAAABIABAAIAAABIABgBIABAAIAAABIgBAAIAAACgAlxlbIAAgDIABgBIAAABIABAAIAAACIgBAAIAAABgAm4lbIAAgCIgBAAIAAgBIgCAAIAAgBIABAAIAAgBIABABIAAgBIADAAIAAABIABAAIABgBIAAABIABAAIAAABIAAgBIABAAIAAABIgBAAIAAABIAAAAIAAABIgCAAIAAgBIgCAAIAAACgAlml1IAAgCIgBgBIAAgCIABgBIACAAIAAABIAAAAIAAACIAAAAIAAACIgBAAIAAABgAlwmQIAAgBIgBAAIAAgEIABgBIABAAIAAADIABAAIAAACIgBAAIAAABgAlzmkIAAgEIABAAIABABIABAAIAAACIgBABgAlsmwIAAgBIgBAAIABgBIAAgDIABAAIAAABIAEAAIAAABIgCAAIAAABIgBgBIAAADgAlpnDIgBgBIAAgCIABgBIADAAIgBACIAAACg");
	this.shape_1.setTransform(-2.1,-0.3);

	this.timeline.addTween(cjs.Tween.get(this.shape_1).wait(1));

	// Capa_3
	this.shape_2 = new cjs.Shape();
	this.shape_2.graphics.f("#6C829A").s().p("AGVHZIgCgBIAAgBIgCAAIgBgCIgDgCIAAAAIAAgBIgBAAIgBgBIgBgCIgDgDIgBAAIAAgBIgBgBIgCAAIgCgCIAAgBIAAAAIgCgBIgBAAIAAgBIgBAAIAAgBIgBAAIAAgBIgBAAIAAgBIAAAAIgBgBIgBAAIAAgBIgBAAIAAgBIgBAAIgCgCIgBAAIAAgBIgBAAIAAgBIgBAAIAAgBIgBAAIgBgBIgBAAIAAgBIgDAAIAAAAIgBAAIgBAAIAAACIgDAAIAAABIgBAAIgBgBIABAAIAAgBIABAAIAAgBIgBAAIAAgDIgBAAIAAgCIABAAIAAgBIACAAIAAgDIgBgBIAAgBIgBAAIAAgBIgBAAIgBgBIgBAAIAAgBIgBAAIAAgBIgCAAIAAgBIgCAAIAAgCIgBAAIAAgBIAAAAIAAgBIgCAAIAAgBIgBAAIAAgCIABAAIAAgBIgBAAIAAgCIgBgBIAAgBIgBAAIAAgBIAAAAIAAgBIgBAAIAAgBIgBAAIAAgBIgBAAIAAgBIgBAAIAAgBIgBAAIABgBIADAAIAAgBIABAAIAAgCIgBAAIAAgDIgBAAIgBgBIAAgBIgBAAIAAgBIgBgBIAAgBIgCgCIAAgBIgBAAIAAgBIgDgDIAAgBIgBgBIgBAAIgCgDIgEgFIgBgBIgCgCIgBgBIgDgDIgDgCIgBgBIgBAAIgCgBIgBAAIAAgBIgEgFIgCgBIAAgDIABgBIAAgGIABAAIAAgEIABgBIAAgCIABgDIAAgEIAAgCIAAgFIABgFIAAgFIAFgBIAEAAIAEgBIAKgBIgBgDIAAgDIgCgBIAAgEIACAAIgCgBIACgHIABAAIAHABIAFAAIABgCIACAAIAFAAIABAAIAJABIAAAAIABABIAHADIAAABIAFALIAAgBIABAAIAAABIADAAIAAABIABAAIAAAAIACAAIAAACIADAAIAAACIAAAAIAAABIAHAAIAAABIgBABIAAABIACAAIAAABIAEAAIAAABIAAgBIACAAIAAABIABgBIAAgBIABAAIACABIAAgBIAAAAIAAgBIABAAIAAgDIACAAIAAgCIABAAIAAgCIABAAIAAABIABAAIAAgCIABAAIAAgBIABAAIAAABIABAAIAAABIABAAIAAgBIABAAIAAgDIABAAIAAgCIAAAAIAAABIABAAIAAgCIACAAIAAABIABAAIAAgBIACAAIAAgDIAAAAIAAgDIABAAIAHAFIACgNIAQgGIgNgLIAagjIAhAUIAEAIIACgBIAAACIABAAIAAAEIABAAIAAACIgBAAIAAACIgBABIgBAAIAAgBIgBAAIgBAAIgBAAIAAAAIgFAAIAAAAIgBAAIAAgBIgDAAIAAABIgCAAIAAACIgBAAIAAABIgBAAIAAABIgBAAIAAgBIgBAAIAAgBIgBAAIAAABIgBgBIAAABIgCAAIAAADIABAAIAAABIABAAIAAACIgBAAIAAABIABABIAAABIgBAAIAAABIgBAAIAAABIgBAAIAAgBIgDAAIAAADIABAAIAAABIACAAIAAABIAAAAIAAABIgCAAIAAAEIgDAAIAAgBIgBAAIAAABIgCAAIAAACIACAAIAAADIAAAAIAAACIgCAAIAAABIgBAAIAAABIgBAAIAAgBIgEAAIAAABIgBABIAAABIABAAIAAABIABAAIAAABIgBAAIAAABIgBAAIAAABIABAAIAAACIABAAIAAACIgCAAIAAgBIgDAAIAAABIAAAAIAAgBIgDAAIAAgCIgCAAIAAACIABAAIAAABIABAAIAAABIABAAIAAACIgCAAIAAABIgDAAIAAgBIgBAAIAAABIgBAAIAAAFIACAAIAAABIgBABIgCABIAAAAIgCAAIAAgBIgGgCIAAgBIgCAAIgBABIAAABIgBABIABABIAAAAIABAAIAAABIACAAIAAACIgCAAIAAABIgCAAIAAgBIgCAAIAAgBIgBAAIAAgBIgCAAIgBABIgBAAIAAABIABAAIAAABIgBAAIAAABIgDAAIAAADIABAAIAAABIABAAIAAAEIgBABIgBAAIAAABIgBAAIAAABIgBAAIAAAJIgCAAIAAACIABAAIAAACIgBAAIAAgBIgCAAIAAACIACABIAAABIgCAAIAAACIgGAAIAAADIABAAIAAABIADAAIAAABIABAAIAAACIABAAIAAAEIACAAIAAADIgCAAIAAABIgDAAIAAABIABAAIAAABIABAAIAAABIABAAIAAADIACAAIAAABIgDAAIAAABIgBAAIAAgBIgCAAIgBABIgBAAIAAABIABABIABAAIAAABIgBAAIAAAEIABAAIAAABIABgBIAAADIABAAIAAABIABAAIAAgBIABAAIAAABIACABIAAgBIAAABIAEAAIABABIABgBIAAAEIADACIAEAUIAAAEIAAABIAAABIgCAAIgCABIgDAAIAAABIgBAAIgBABIgCAAIgBABIgBAAIAAABIACAAIAAABIgBABIACAAIAAABIAKAAIAAgBIADAAIACABIAAAAIAAAAIABAAIABABIgBAAIAAADIABABIAAABIADAAIAAABIAGAAIAAABIABgBIABABIgBAAIABABIAAACIgBAAIgBABIAAABIgBAAIABABIgBAAIAAABIgDAFIgCACIAAABIgBAAIAAABIgBABIgBACIgBACIgBAAIAAgBIgDAAIgBgBIgBAAIAAgBIgBgBIgBAAIAAgBIgBgBIAAgBIgBAAIgBgBIgBABIgBgBIAAgBIgBAAIAAgCIgBAAIAAABIgBABIABAAIAAACIABAAIAAABIgFAEIgFgBIAAAEIgBAAIAAgDIgFAAIgCgBIgBAAIgBACIADADIgDADgACjDGIgBAAIgGgFIgCgCIgHgEIgCgBIgCgBIgCgDIgBAAIAAgCIgBgBIgBAAIAAgBIgCAAIgBgCIgCgBIgCgBIgCgBIgBAAIAAgBIgBgBIgJgFIgBAAIgGgFIgEgCIgFgEIgQgJIgDgBIgEgCIAAgBIgBAAIAAgCIgBgBIgBAAIAAgBIgBgBIgCgCIgCgCIgJgFIAAgBIgBAAIAAgBIgBAAIgBgBIgEgDIgFgEIgEgCIgDgCIgCgBIgEgCIgFgEIgDgCIgGgEIgCgBIgCgCIgHgEIgBAAIgCgBIgCgCIgBAAIgBgBIgCgBIgBgBIgBgBIgBgBIAAAAIAAgBIgDgBIgBgBIgCgBIgBgBIgDgCIgCgBIgCAAIgBAAIgBgBIgBgBIgBAAIgBgBIgCAAIAAgBIgCAAIgBgBIgBAAIgCgBIgDgBIgBgBIgBAAIAAgBIgBAAIgBgBIAAgBIAAAAIAAgDIAAAAIgDgEIAGAAIAyAeIAYgLIgBgTIABAAIAAgBIABAAIABgBIAAgBIgBgBIAAgKIADAAIAAgEIACAAIABgDIAAgJIAAgDIAAgDIACgDIAAgBIABgCIAKAAIgBgBIAAgCIACAAIAAgFIADAAIAAgDIgDgBIgEAAIAAgIIgBgBIAAgBIgBgBIgBAAIAAgBIgBAAIAAgBIAAAAIgCgBIgCAAIAAgCIgCAAIAAABIAAAAIAAgBIgGAAIgBABIgBAAIAAgBIgBAAIAAgBIgBgBIAAgBIgBABIAAgBIgBgBIAAgEIgBAAIAAABIgBAAIAAgCIgBABIgGAAIAAgCIgEAAIAAgCIAEAAIAAgCIgEAAIAAgDIgEAAIAAgEIABgBIAAgBIgCAAIAAgBIgBAAIAAgBIgCAAIAAgBIgDAAIAAgBIgCAAIgBgBIAAgBIgCAAIgCgCIgCAAIgBgBIgCAAIAAgBIgBAAIAAgBIgBAAIAAgBIgBAAIAAgBIgCgBIgDgBIgBgBIgBAAIgBgBIAAgCIgBAAIAAgBIABAAIAAgBIACABIACAAIABABIABAAIAAgBIADAAIAAgBIABABIAAAAIAAgBIADAAIAAgBIACAAIABABIACAAIABgBIAAgBIABAAIgBgCIABABIABAAIAAgBIABgBIAAgEIABAAIAAgBIAAAAIACgBIACAAIAAAAIABgCIAAAAIAAABIABAAIAAABIABgBIAEAAIAAgBIADAAIAAgCIABgBIACAAIAAgBIgCAAIAAgBIgBgBIgCABIABgCIAAgBIABgBIAAgEIgBgFIAKgJIAAAAIAAgBIAIgCIABgCIABAAIAAgCIgBgBIAAgBIgBgCIAAgCIABgBIABAAIAJgBIAHAAIABABIABAAIABABIABAAIAAABIABABIACABIAAABIABAAIAHADIACACIANAFIABgJIAAgBIABABIABgBIAAABIABAAIAAAAIABABIAAgBIABAAIAAAAIACAAIAAgBIABAAIAAgDIABABIAAgBIgBgBIgEgDIgCgGIAAgEIACAAIABgDIgCACIgEAAIACgCIgEAAIgDgDIABgBIgDgDIAFgFIAGAAIAEgBIACAGIAEAGIgEAEIABgBIAQABIAIACIgGgVIgFgOIAUAAIAKAFIAHAAIABABIABAAIAAABIABAAIAAABIACAAIABABIAAABIABAAIgDADIAAACIgFAAIAGAKIABAAIgBAnIADABIABAAIANAFIACABIgBAAIAAACIABACIAAADIABAAIAAABIACACIABAFIACACIAGAKIgCABIAAABIABAFIAGgFIAAgBIAIAGIAGAFIACAAIADADIABABIAAABIABACIgHACIACAAIAAACIABADIgBAAIACABIACAEIADADIAFgFIAEABIABAAIAEAFIgBAEIgJAHIgLABIAAAHIgBAAIAAABIgBAAIAAAAIgBAAIAAAAIgBAAIAAAAIgDAAIAAABIgBAAIAAABIABAAIAAABIgCAAIAAABIgCAAIAAgBIgBAAIAAgBIAAAAIAAABIgEAAIAAABIgBAAIAAACIgBAAIgBgBIAAABIgBABIgIAIIAGAGIACADIAAABIgBAAIAAgBIgBAAIAAgBIgCAAIAAABIgBAAIgBAAIgBABIgBAAIAAADIABAAIAAADIABAAIAAAEIABABIAAABIABAAIAAABIABAAIAAABIABAAIAAADIABAAIAAABIABAAIAAAEIgBAAIAAABIgBAAIAAABIgBAAIAAABIABAAIAAABIABABIACAAIABABIAEAAIAFACIADAJIgGACIgBAAIgBABIgBAAIgCABIgCAAIgDABIAAACIgHAAIAAABIgCAAIAAABIABACIAAAGIABACIAAADIAAAAIAAABIAEgBIAAABIABAAIAAABIABABIAAACIABAAIAAABIABAAIAAAEIABAAIAHAIIAJADIAGAJIgDAIIADABIAHAGIgBACIgBAAIAAADIAAACIgBABIAAAEIgBACIgBAAIgBABIAAABIABABIAAABIABAAIAAABIABACIgBABIgBAAIAAABIgBAAIgBABIAAABIgBABIAAABIABAAIAAAEIgBAAIAAADIgDAAIAAgCIABgBIgBAAIgBABIgFAAIgBABIgDAAIgCgBIgBAAIAAgBIgCAAIAAABIgBAAIgBABIgFAAIAAgBIgCAAIAAABIgDAAIAAACIAAAAIAAACIAAABIAAAAIABAAIAAABIABAAIAAABIABABIgCACIgBAAIAAACIABAEIABAAIADAEIAAABIgBAAIAAABIABABIABAAIABAAIACACIgGAAIgBABIAAgBIgBAAIgBABIgBAAIgBABIgBgBIgCAAIAAABIABABIABAAIAAACIgBAAIAAACIABAAIAAABIgCAAIgBgBIgBAAIAAgBIgBAAIAAgBIgCAAIAAgCIgBAAIAAgBIgBAAIAAgBIgBAAIAAgBIgEAAIAAgBIgCAAIAAgBIgBAAIAAAAIgBAAIAAgBIgBAAIAAgDIgBAAIAAgBIgBAAIAAABIgCAAIAAgBIgBAAIgBABIAAgBIgCAAIAAgBIgBAAIAAgBIgBAAIgBgBIgBAAIAAACIACAAIAAABIACAAIAAABIABAAIAAABIABAAIAAABIABAAIAAABIACAAIAAABIABAAIAAAAIACAAIAAABIABAAIAAABIABAAIAAABIABAAIAAABIABAAIAAADIgBAAIAAABIABAAIAAABIABAAIAAABIgCAAIAAABIABAAIgBABgAl7jJIgEgEIAAgBIgBAAIgCgCIgBAAIAAgBIgBAAIAAgBIgBAAIgBAAIAAgBIgBgBIgBgBIgCAAIAAgBIAAgCIgBAAIABgBIgBAAIAAgBIgBgBIgBgBIgCgBIAAgBIgBAAIgBgBIAAgBIAAAAIAAgBIgBAAIAAgBIgBAAIAAgBIgBAAIAAgBIgBAAIAAAAIgBAAIAAgBIgNgEIAAgCIAAAAIAAgCIgBgBIAAgBIgDgDIAAgBIgCgCIgBAAIgEgDIAAAAIgDgDIgCAAIgCgBIgBgBIgBAAIgBgBIgBAAIgDgBIgCAAIgEgCIgFAAIAAgBIgQAAIgBABIgCAAIgCABIgCAAIgBABIgBAAIgBgBIgBABIgCAAIAAgCIAAAAIAAgEIABgDIgBgCIAAgBIAAgBIgBAAIAAgHIgBgBIAAgFIgBgBIAAgDIgCgCIAAgCIgBgBIAAgCIgBgBIAAgCIgBgBIAAgBIgBgCIAAgBIgBgBIAAgBIgBgBIAAgCIABgCIAAgBIABgBIAAgDIABgCIAAgCIABgDIAAgGIgBgBIAAgDIgBgBIAAgBIgDgDIAAgBIgBgBIAAgBIgBgBIAAgDIgBgCIgBgBIABAAIAAgEIABgEIACgDIAAgDIACgDIADgHIAAgDIACgEIADgBIADgIIACAAIABgCIAAgBIAGgGIABgEIAEgDIADgGIAEgGIAFgKIAAgBIACgHIAAgGIABgCIAEgDIAEgEIACgCIgCgCIADABIABAAIABgBIADgBIABgCIAEgCIAAgBIABAAIAAgBIAEAAIAAABIACAAIAAACIABAAIAAABIABABIABAAIAAACIABAAIAAABIABABIABAAIAAABIABAAIAAABIAHAAIAAAAIABAAIAAABIABAAIAAABIABAAIAAgBIABAAIAAABIABAAIAAgBIABAAIAAgBIAFgCIABAAIAAgBIABAAIAAgCIACAAIAAgBIABAAIAAgBIgBAAIABgBIAAgBIABAAIAAgBIABAAIAAgCIAAAAIAAgCIABAAIAAgBIABAAIAAgBIABAAIACgCIABAAIABAAIABgBIABAAIACgCIAGgEIABgCIACgBIABABIADAAIADABIAHABIACAAIABABIABAAIAAABIACABIAAABIABAAIAAAVIABAAIAAABIgBAAIAAABIgBAAIgBABIgCAAIgBABIAAAAIAAgBIAAgDIAAAAIAAAAIgBAAIgBAAIAAACIgBABIAAACIgEgBIgCAAIgBgBIgDAAIgIAFIABABIgBAAIAAABIgCAAIAAABIgBgBIAAADIgBAAIAAADIAAAAIAAABIgBAAIABABIAAAAIABAAIABABIAEAAIABABIABAAIAAACIABAAIAAABIAEAAIAAACIgBABIAAABIgCAGIAAADIgBAAIAAACIgBACIAAACIgBABIAAACIAAACIAAABIADABIABABIAAABIADAAIAAABIABAAIAAABIABABIABAAIAAAAIABABIABAAIAAgBIABAAIAAABIgCACIABABIABAAIACABIABAAIAAABIgDACIgBAAIAAABIgBABIAAABIgDADIgBAAIAAABIgGAFIgCACIAIAJIgBACIgBABIAAABIACAFIgCAAIAAADIgBAAIgBABIAAABIgBABIAAABIgBABIAAABIABAAIABABIABAAIAAABIACABIAAABIAFAAIAAABIAAAAIAAAAIgBAAIgBABIAAAGIABAAIAAAFIABABIAAACIgBACIABABIABAAIAAAAIABAAIAAABIACABIABAAIAAgBIABgBIAAgBIABgCIAAgBIABAAIAAABIABAAIABgBIABABIADABIABABIABAAIABABIABAAIAAAAIABAAIAAAAIAAgBIgBgBIgCgBIgBAAIAAgCIABAAIAAgBIABgBIgBAAIAAgBIABAAIAAgBIACABIABABIADABIAAABIgBAAIAAABIACABIACADIABAAIACABIADADIABAAIAAABIABABIAAABIgBAAIAAABIgBABIAAABIgBABIAAABIACAAIAAgBIABAAIAAgEIABgBIAJgEIACgBIABAAIAAgBIACAAIAAAAIACAAIACgCIACAAIAAgBIAAAAIABABIADAAIAAACIABAAIAAADIABACIAAACIAAAAIAAACIAAAAIAAABIgBAAIgBABIAAABIgDAAIAAABIgBAAIAAABIAAABIgBAAIAAACIgBABIgCABIgBgBIgBAAIAAAAIgCAAIAAAAIgBAAIgBABIAAABIgBAAIgBABIAAAAIAAABIgBABIAAABIgBAAIAAACIACAAIAAABIgBAAIAAABIgBgBIAAABIgBAAIAAACIgCAAIAAABIgDAAIgBABIgBACIgCABIAEAAIgCACIgBAAIAAABIgCACIAAAHIABAAIAAAMIABADIgBABIABABIAAAEIABAAIABAEIADADIAAACIAAABIAAABIAAAAIAAABIAAAAIgBgBIAAgCIgBgBIgBAAIABABIAAADIgBAAIgBABIAAABIgBABIgIAQIABABIAAAEIgCAFIgEAJg");
	this.shape_2.setTransform(-0.1,-0.3);

	this.timeline.addTween(cjs.Tween.get(this.shape_2).wait(1));

	// Capa_4
	this.shape_3 = new cjs.Shape();
	this.shape_3.graphics.f().s("#65653D").ss(0.5,1,1).p("AHbpSIgSAAIosAAQAOAQgJAQQgMAPgDAEQAGACAMANQAKALACAFQAEAKgJAIQgHAHAJAOQAJAMASAYQAJAPAHAFQAIAHAGAIQAXgPAZAIQAgAKAHgCQAagGAQAVQAPAUgIAaQAIADAsAhQANAJAAAGQABAFAGADQAEACALgCQAFgBgBAQQAfAWACAAQAFACAagDQALgBAFABQAFABACgBQAEAAAPgOQAPgOACgFIgHgBIgBg+IAegPQgCgSAAgDQAAgEAIgTQADgHABgMQAAgHAOgPQAQgSAEgFQAKgOADgMQADgNgFgCQgDgCAAgBQALgfAEgHQAJgRAPgCIgMgTQASAAAHABQABAAAFgLAHbpSQAGAEAOAHQAOAGAGAEQAJAGACAGQABACAJgCQAGgBAEgFQADAAAMANQAGAHAFAHQADACAJgFQAFgDAAgGQAAAAAJASQAKAVAbABIAAhSgAH2DZIAAgBQAAgBgBgEIAAgEQgBgBgEgEQgTgRACgEQADgHgIgQQgNgbgUgQQgbgXgaAKQgBAAgQAPQgKAKgfgFQgTgVABgIQAFgLACgMQgYgRgGgNQgJgVgighQgMgNgHAAQgKgCgDgBIg4g/QAAg4gFgEQgEgBgCgBQgDgBgCgKQgGgbAFgFQAJgKABgEQACgMgBACQgFAFgCgPQAEgCAMgEQAOgEAGgDQATgJAAgFQAAgFACgCAH4DbIgCgCIAAAAgAJ7HFIg0ACIgCgmQgEgKgFAAQgFgBgFgOQAAgBgGgdQgDgNgLgUQgNgVgPANQgHAFgBgBQgDgCgBgSQgBgHACgMQABgGgFgKQgGgPAAgCQgDgIACgMIAZAHQACgHgGgGQgHgFgCgDAJ7HlIAAggIAAvFAnBnGQgEASgPAZQAAABgRAZQgLAPgEANQgDAJADAIQAFAKAAADQABAHgCAIQAAAFAEAPIAIAiQAVgEANADQANAEAOAOQAEAFAGADQAHADAGAHIATAVQAWADAJACQAIACASAJQAGADArAKQAmAJAUAPIATATQAIAHABAEQABAGADAEQADAFASALQAFAEADAFQACADAFAIIAbAtQAIAHgCgDQAAgBAFAHQAGAIABABQAFAGADANQABAIArAbQAHAEAFAJQAFAHAXAMQAOAIAdAUQAcARANANQAMALAgARQAzAhAeAeQAQAPADAEQAEAFAJAQQAEAIAKALQAHAKgFALQAEABAAAAQABAAAFAEIALAHQAJAGAfAhQAfAiABAHQABAFAIAOQAHAMAAAKQAMgBAIAHQAFAEAJAKQACACAMAJQAIAHAGAGQABABAhAjQAMANAVAOQAcAUAUAdIBlAAIADAAIAAhuAJ4JTQgHgJgDgEQgGgIgBgGQgBgOAHgLQAGgKgGgeIAOgSAnBnGIApAHQACgCANgNQAIgJAJgCIAXgCQALgBAHgJQAKgNgNgFQgKgEAPgLQAGgEASgEQAPgDALgBIAqhAAhjpSIiOAAIl6AAQAFAPANAKQAMAKAPAEQAKACAFgDQAGgEANACIAnAFQAIACAFAGQAEAEAHAIQABABAMAHQAEADAFAJQAMAWgFAiIgBADAp6CLIAAgiQALAOAKASQALAUABAKIgVgEQgGgKgGgOgAp6DDIACAAQAHgBAPgEQALAAgHAQIgGAQQAFAIANAMQAHAGAOAMQgCARABAFQAAADAGATIArASQAMAGAGABQgCANABACQABACAIAJQAPAVgOAnQgNAngaAKQgEACgLADQgIADgHADQgIAFgCAFQgBAFgKAFQgJAEgKALQgJAJgOAFIgEACg");

	this.timeline.addTween(cjs.Tween.get(this.shape_3).wait(1));

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = new cjs.Rectangle(-64.5,-60.5,129.1,121);


(lib.graph_04 = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// Capa_1
	this.shape = new cjs.Shape();
	this.shape.graphics.f().s("#00CCFF").ss(0.2,0,0,22.9).p("AxLL4MAiXAAAIAA3vMgiXAAAg");

	this.timeline.addTween(cjs.Tween.get(this.shape).wait(1));

	// Capa_2
	this.shape_1 = new cjs.Shape();
	this.shape_1.graphics.f("#FFFF00").s().p("AiNHjIgBAAIAAgDIABAAIAAgBIABgBIAAgCIABAAIAAgEIgCAAIAAgBIgBAAIAAgEIABAAIAAgCIgBAAIAAgBIgBAAIAAABIAAAAIAAgCIAAgBIAAgBIABAAIAAgFIgBAAIAAABIAAAAIAAgCIAAAAIABgBIAAgBIgBAAIAAAAIgDAAIAAgBIADAAIABgBIACAAIAAgBIABgBIgBAAIgBgBIgBAAIAAgBIABAAIAFgGIAAABIACAAIAAABIAEAAIAAgBIACAAIAAgCIACAAIAAgCIABAAIAAgBIACAAIAAgCIABAAIAAAAIABAAIAAgBIADAAIAAgCIABAAIAAgBIABAAIAAgBIgCAAIAAgBIgCAAIAAABIgDAAIABgBIAAgBIAEAAIAAgBIABAAIgBgBIgDAAIAAgCIgDAAIABgBIACAAIAAgBIgBAAIABgBIAAgBIACAAIAAgBIACAAIAAABIABAAIAAgBIACAAIgBgBIAEAAIAAABIACAAIAAgBIABAAIAAgBIABAAIAAgBIAAABIABAAIABAAIAAACIABABIgBAAIAAABIgBAAIAAABIgBAAIAAABIAAAAIAAACIABAAIAAABIgBAAIAAAGIgBAAIAAABIgBAAIACACIAAAAIAAABIAAAAIAAgBIgBAAIAAACIgBAAIAAABIABAAIAAACIgBAAIAAABIABAAIABABIACAAIAAABIADAAIAAABIABAAIABACIgBABIAAABIABABIgBAAIAAACIABABIAAACIABABIAAACIABAAIAAAFIgBAAIAAABIgBAAIAAABIgBAAIAAgDIgBAAIAAgCIgCABIABACIAAABIABABIgBAAIAAACIgCAAIgBgBIAAACIgBAAIAAgBIgBgCIAAgBIgBgCIAAgCIgBgBIAAgBIgBAAIAAABIABACIAAADIABAAIAAACIABAAIAAACIgBAAIAAABIABABIAAABIgCABIgCAAIgCABIgCAAIAAgBIgCAAIAAgCIgBAAIAAgCIgCAAIAAABIABAAIAAADIABAAIAAABIgBAAIAAABIgCAAIAAACIABAAIAAABIABABIAAACIgBAAIAAgBIgCAAIAAgBIgCAAIAAgBIgCACIABABIAAABIgBAAIgBABIgCAAIAAABIgBAAIgBgBIgCAAIAAABIgFAAIAAABIgBAAIgBABgACDHhIgBgBIgCAAIgBgBIgBAAIAAgBIgBAAIAAgBIgBAAIAAgBIgBAAIAAABIgDAAIAAgCIABAAIAAgBIgBAAIAAgBIgBAAIAAgBIgBAAIAAAAIgDAAIAAAAIgBAAIAAABIgBAAIAAABIgBAAIAAABIgDAAIAAgFIACAAIAAgBIADAAIAAgBIADAAIAAgBIgBAAIAAgBIgCAAIAAABIgCAAIAAgBIgFAAIAAgBIgDAAIAAgBIABAAIAAgBIABAAIAAgCIABAAIAAgBIACAAIAAgDIAAAAIAAgBIgBAAIgBABIAAgDIgBAAIAAABIgCAAIAAgCIABAAIAAAAIgBAAIAAgBIgBAAIAAgBIgBAAIAAgBIgBAAIAAgCIgEAAIAAgBIADAAIAAgBIABAAIAAgBIgBAAIAAgBIgBAAIAAgCIgBAAIAAgBIgBAAIAAgCIACAAIAAgBIgBgBIABAAIAAgCIgBAAIAAAAIgCAAIAAAAIgBABIgBAAIAAABIgBAAIgBABIgBgCIAAgBIgBAAIAAABIgCAAIgBgBIAAgBIABAAIABgCIABAAIgBgBIAAgBIABAAIAAgBIgBAAIAAgBIABAAIAAgCIgBAAIgBgBIAAgBIgBgBIgBgDIAAABIgBAAIAAABIgBgBIgBAAIAAgDIgCAAIAAACIgCAAIAAgCIgBAAIAAACIgCAAIgBgBIABAAIAAgBIgBAAIAAgCIgBAAIAAABIgBAAIAAgBIAAgBIAAgBIABAAIAAgBIABgBIgBAAIAAgBIABAAIAAgBIgBgCIgCAAIgBgBIgCAAIAAABIgBAAIgBgBIgDAAIgDgCIACgBIABgDIgDAAIAAACIABAAIAAABIgBABIgBAAIAAABIgBgBIgBAAIgBgCIgCAAIAAABIgBABIgBAAIAAABIgDAAIAAgBIgBAAIgCgCIgBAAIAAgEIgDAAIAAAAIgCAAIAAgBIgBAAIAAgBIgCAAIAAgBIgBgBIABgBIAAgBIgBAAIAAABIgBAAIAAABIgDAAIAAgBIgBAAIAAACIgBAAIgBgBIgCAAIAAABIgCAAIAAgBIgCAAIAAgEIgBAAIgBABIgBgBIgCAAIAAgBIgBAAIABgBIAAgBIgBAAIAAABIgBgBIgBAAIAAABIgCgBIAAgCIgCAAIAAgCIABgBIgDAAIAAgBIgBgBIAAgBIABAAIACgCIAAABIABAAIAAABIABAAIACgBIAAgBIABAAIABABIABACIADABIAAgBIABAAIAAAAIABAAIAAgCIACAAIAAABIACAAIAAABIACAAIAAAAIAEAAIAAABIADAAIAAABIAAAAIAAABIACAAIAAABIACAAIAAABIABAAIABABIACAAIAAABIABAAIAAgBIABAAIgBgBIACAAIAAgCIgBAAIAAgCIACAAIAAgBIgBAAIAAgBIgBAAIAAgBIgBAAIAAgBIgDAAIACgBIgBAAIAAgBIgCAAIAAgBIgBAAIAAgBIgBABIgBAAIAAgBIABAAIAAgBIABAAIAAgBIgCAAIAAABIgBAAIAAgGIABAAIAAgBIgBAAIAAgBIgBAAIAAACIAAAAIAAgCIgBAAIAAgBIgDAAIAAgBIgBABIAAgBIgBAAIAAAAIABAAIAAgCIABAAIAAgBIgDAAIABgBIAAgBIgCAAIgBABIgBAAIgBABIgCAAIgBABIAAgDIgBAAIAAgBIACgBIACgCIgDAAIAAgCIADAAIAAACIAEAAIABgBIgBAAIAAgCIADAAIABgBIABAAIAAABIABAAIAAACIACAAIAAgBIABAAIAAgBIABABIADAAIAAgBIgBgBIACAAIABABIAAgBIABABIAAABIABAAIAAgBIACAAIAAgCIABAAIAAgJIgDAAIAAABIgDAAIAAABIgDAAIAAgCIABgBIABAAIAAABIABgBIAAgCIACAAIgBgBIACAAIAAACIABAAIAAABIAEAAIAAACIABAAIAAAHIAEAAIAAgBIADAAIAAABIABABIADAAIAAgBIAEAAIAAgCIACAAIAAgBIgCgBIABAAIAAgFIACAAIgBgBIAAgFIgBgBIAAgBIAEAAIAAADIABAAIAAAEIgBAAIAAABIAAAAIAAAEIgBAAIAAABIABAAIAAAGIACAAIAAgBIACAAIAAgCIABAAIAAgBIABAAIAAgBIADgBIACAAIAAACIgBgBIAAABIABABIAAAFIACAAIABgBIAAgBIgBAAIAAgDIACAAIAAgCIABAAIAAAAIABAAIAAAAIABAAIAAgCIABAAIAAACIABAAIAAAAIABAAIAAgBIABAAIAAACIgCAAIAAABIgBAAIAAABIgCAAIgBgBIAAADIABAAIAAACIgBgBIgBAAIAAABIABAAIAAABIABAAIABABIAAABIAAAAIAAABIABAAIAAACIgBAAIAAABIAAAAIAAACIgBgBIAAADIABgBIgBABIAAABIABAAIAAABIABAAIABABIABgBIAAgBIgBAAIAAgBIACAAIAAABIABgBIAAAAIgBgBIABAAIAAgBIABAAIAAABIABAAIABgBIAAgBIgBABIAAgDIABgBIAAgDIgCAAIABgBIABAAIAAgDIADAAIAAACIgBABIAAABIABAAIAAACIACgCIACAAIAAABIgBABIAAABIABACIABAAIABgBIABAAIAAABIABAAIAAABIABABIAAABIACAAIAAABIAGAAIgBABIABAAIAAACIgEAAIAAgBIgBAAIAAgBIgBAAIAAABIgBAAIAAABIACAAIAAACIgBABIgBAAIgBgBIAAgBIgBAAIAAACIACACIAAAEIABAAIAAACIABAAIAAACIACAAIAAACIgEAAIgBgBIgBAAIAAABIABAAIAAABIgCAAIAAgBIgBAAIgDAAIAAABIgBAAIAAABIAEAAIgBABIAAABIABABIABAAIAAgBIABAAIAAABIABABIACAAIABABIADAAIAAABIABAAIAAgCIACAAIABABIgBAAIAAABIABAAIgBABIABAAIAAABIACAAIAAABIgCAAIAAABIADAAIAAABIADAAIABgBIgBAAIAAgBIgBAAIAAABIgBAAIAAgBIgBAAIAAgBIABgBIAAgBIACAAIAAABIABAAIABABIACAAIAAABIACAAIAAgBIgBgBIgCgCIgBAAIAAgBIgBAAIABgBIABAAIAAgCIABAAIAAABIABAAIABABIgBAAIAAABIgBAAIAAABIABABIABAAIAAABIABAAIAAABIACACIgCAAIABABIgBAAIAAABIABAAIABABIAAABIgBAAIAAgBIgBABIgBAAIAAACIgCAAIABAAIgCACIAAACIABAAIAAACIgBAAIAAgBIgBAAIgBgBIgBAAIABgBIgBAAIAAgBIAAABIgBgBIgBAAIAAgBIACAAIAAgBIgBAAIgCAAIAAAAIgDAAIgBABIgBAAIAAgBIACAAIAAgBIABAAIgBgBIACgCIABAAIgDgBIgBAAIAAABIgBAAIgBABIABAAIAAABIgBABIgBABIAAgCIgBABIgBAAIAAABIgBAAIAAABIABAAIAAABIgBAAIgBgBIgBABIABAAIAAABIgBAAIgBABIgBAAIAAABIgCAAIAAABIABABIABAAIAAABIAAABIgBAAIAAgBIAAgBIgBAAIAAABIgBAAIAAABIgBAAIAAABIgBAAIAAgCIgBAAIgBgBIABgBIgBAAIAAgBIgBgBIAAgCIgCAAIAAgBIgDAAIAAgBIgCAAIAAAAIgBAAIAAgBIgDAAIAAgDIgDAAIAAgBIgEAAIAAABIgBAAIAAABIgBAAIgBABIABAAIAAACIgBAAIABAAIAAABIgBAAIAAADIABAAIAAABIABAAIgBABIABABIAAABIABAAIAAABIABABIAAABIACAAIAAABIABAAIAAACIABAAIAAABIACAAIAAABIAAABIAAABIABAAIAAABIACAAIAAABIgBAAIAAABIABAAIAAABIABAAIAAACIABAAIABABIAAABIACAAIAAACIABAAIAAABIABAAIAAABIABAAIAAABIABAAIAAADIADAAIAAACIABAAIgBAAIAAABIgBAAIAAACIABAAIAAgBIABAAIAAACIABAAIAAABIABAAIAAABIAAAAIAAADIABAAIgBABIAAABIACAAIAAgBIABAAIAAABIgBABIABAAIAAADIABAAIAAABIgBAAIAAABIABAAIABABIAAAAIABAAIAAACIABAAIAAACIACAAIAAACIABAAIAAgBIABABIAAABIgBAAIAAACIACAAIAAABIABAAIAAABIgBAAIAAACIABABIABAAIAAACIABAAIABABIAAACIABAAIAAAAIABAAIAAABIAAAAIAAACIABAAIAAABIABAAIAAABIgBABIABAAIAAABIABAAIAAgBIABAAIAAABIABAAIAAABIABAAIAAABIgBAAIAAABgABrGRIACAAIAAABIABAAIAAgBIABAAIAAgCIABAAIAAAAIgCAAIAAAAIgBAAIAAABIAAgBIgBAAIAAABIgBAAgAA7FtIAAACIABABIABAAIAAABIACAAIAAgCIgCAAIAAgBIgCgCIAAgBIACAAIAAgCIgBAAIAAgCIgBAAIAAgCIgBAAIAAgBIgBAAIgBgBIgBAAIAAgBIAAAAIAAgBIgBgBIgBAAIgBABIAAABIABAAIAAABIgBABIAAABIABACIAAABIABAAIAAACIABAAIAAABIAAAAIAAABIABAAIAAABIABAAIAAABIABgBgAsyHWIAAgBIgBAAIAAgBIABAAIAAgCIABAAIAAgBIABAAIAAgBIABABIABAAIAAABIACAAIAAABIAAABIgDAAIAAABIgBAAIAAABgAhKHNIAAgBIgBgBIAAgCIgCAAIAAgCIADAAIAAABIACAAIAAAEIgBAAIAAABgAhUHHIAAgCIgEAAIgBABIAAgBIAAAAIAAAAIAAgBIgBAAIAAgBIgBgBIABAAIAAgCIABAAIAAABIAAABIABAAIAAgBIACAAIAAABIACAAIAAACIABAAIABABIABAAIABgBIgBAAIABgBIABAAIABABIgBABIgBAAIAAAAIABABIABAAIAAABIgCAAIAAgBIgBAAIAAABIgBAAIAAgBIgBAAIAAACgAhfHGIAAgBIAGAAIgBAAIgEAAIAAABgAt3HCIgBgBIAAgBIADAAIAAABIgBAAIAAABgAseHAIAAgBIgBAAIgBgBIAAABIgCAAIgBgBIABgBIAAgBIACAAIABABIABgBIABAAIAAgCIgCAAIAAgBIgHAAIgBABIAAABIgBABIAAgBIgDAAIgBgBIABAAIgBgBIAAAAIAAgBIgBAAIAAgBIgCAAIAAgBIgBgBIgBAAIAAgBIgBAAIAAgBIgDAAIgBAAIgBAAIgBgBIAAABIgBAAIAAgBIgBAAIAAgBIgCAAIAAABIgBAAIAAABIgBAAIAAgBIAAAAIAAgBIgDgDIAAABIgBAAIAAABIABAAIAAABIgBAAIABABIABAAIAAABIgBAAIAAAAIABAAIAAABIgCAAIAAgBIgBAAIAAAAIgBAAIAAgBIABAAIgBgBIAAgBIABAAIAAgBIgBAAIAAgBIACAAIAAgBIgCgBIAAgBIgBABIgBAAIAAgBIgBABIgCAAIAAABIgCAAIAAABIgBAAIAAACIgBAAIAAACIgBAAIAAABIgBAAIgBgGIgCAAIAAgBIgBAAIAAgBIgBgBIgBAAIAAgDIACAAIAAABIABgBIABAAIAAgBIgBAAIAAgBIACAAIAAgCIAAAAIAAgCIAAAAIAAgCIgBAAIAAgBIgBgBIABAAIAAgBIABABIAAgBIAAABIAAgCIAAAAIAAgBIAAgBIAAgBIABAAIAAACIABAAIAAABIABAAIAAgCIABAAIABABIAAgCIABgBIAAACIABAAIAAgDIgBAAIABgBIAAgBIABAAIAAgBIACAAIAAgBIgBAAIAAgBIABAAIAAgBIABAAIAAgBIACACIgCAAIAAADIACAAIAAgBIACAAIAAABIACAAIAAACIgCAAIABABIgBAAIAAABIACAAIAAgBIABAAIAAgBIABAAIAAgBIABgBIABAAIACACIABgBIABAAIABgBIAAgBIABAAIAAABIABABIABABIAAABIgBABIAAgBIgBAAIAAAEIgBAAIAAADIABAAIAAABIACAAIAAgDIgBAAIAAgBIACAAIAAgBIABAAIAAgBIABAAIAAgBIABAAIAAABIACAAIAAgBIABAAIgBgBIABAAIAAgBIAAAAIAAgBIAAAAIAAgBIgBAAIAAgBIABAAIAAgBIADAAIAAgBIACAAIAAgBIABAAIAAgBIAEAAIABgBIABAAIgBABIABAAIABABIgBAAIgBgBIAAABIgCAAIAAACIABAAIAAACIgBAAIgBABIAAABIgCABIgBAAIAAgCIgCAAIAAABIgBAAIAAADIACAAIAAgBIABAAIAAABIABABIAAgBIABAAIAAgBIABAAIABgBIABgBIACAAIAAACIABAAIAAABIABABIgFAAIAAACIABABIAAgCIACAAIAAABIACAAIAAgBIACAAIAAACIgCAAIAAABIABAAIAAABIABAAIAAABIgCAAIgBABIAAgBIgCAAIABABIgCAAIAAACIgBAAIAAABIABAAIABABIAGAAIAAADIACAAIAAABIAAgBIABAAIAAgCIACAAIAAgBIABAAIAAABIACAAIAAABIADAAIAAAEIABAAIAAgBIABAAIAAABIABAAIABgBIABAAIAAABIACAAIAAgCIABAAIAAADIgFAAIAAABIgBAAIAAABIgDAAIAAABIgBAAIAAABIgDAAIAAgBIgCAAIAAABIgBABIAAgBIgBAAIAAACIAAABIAAAAIAAACIgBAAIAAABIgBgBIAAABIgBAAIAAABIgBAAIAAABIACAAIAAABIgCAAIABABIACAAIAAABIABAAIgBACIAAgBIgBABIAAABIgBgBIgBACIAAABgAt1HAIAAgBIABAAIAAABgAt1HAgAtiG8IAAgDIgBAAIAAgCIgBAAIAAgBIABAAIAAABIABAAIAAgCIAAAAIAAABIABAAIAAgCIABAAIAAACIAEAAIAAABIABAAIAAgBIABAAIAAABIACAAIAAABIgBAAIAAABIgFAAIAAABIgBAAIAAACgArhG6IAAgCIABgBIACAAIABABIgBABIAAABgAsbG4IABgBIABAAIAAABgAsbG4gAtyG3IgCAAIAAABIgCAAIAAgBIABAAIAAgDIABgBIAAABIABgBIAAABIABAAIAAgBIABABIAAABIgBAAIAAABIABAAIgBABIABAAIgBABgAtNG2IAAgBIgBAAIAAgBIgBAAIAAgBIABAAIAAABIABAAIABgBIACAAIABAAIACAAIAAgBIABAAIAAABIgDABIgCAAIAAABIgBAAIAAABgAt4G2IAAgBIABAAIAAABgAr4G0IAAgBIgDAAIgBAAIAAgBIgBAAIABgBIgDAAIAAgCIgDAAIABABIgDgBIgBAAIAAgCIgBAAIABgBIgCAAIAAgCIABAAIAAABIACAAIAAABIACAAIAAgBIACAAIAAABIACAAIAAgBIACAAIAAgBIABAAIAAgCIADAAIAAABIACAAIgBABIAAACIACAAIABABIAAACIgBAAIAAADIAAAAIAAgBIgBABIAAABIgBAAIAAABgACWGlIABgBIgEAAIAAgDIABAAIAAgCIAEAAIAAgCIgBAAIAAABIgGAAIAAABIAAAAIAAgCIAAAAIABgBIABAAIABABIAAgCIgEAAIAAgHIABAAIAAABIABAAIAAABIABABIACAAIAAABIABAAIABABIAAgBIABAAIAAABIACAAIAAgCIABAAIABABIAAgCIABAAIABABIABAAIAAABIAEAAIABABIAAABIADAAIABABIAJAAIAAADIABABIgEACIgCAAIgDAAIAAgEIgBgBIgBAAIgCgBIgBACIgBAAIAAABIAAAAIgBABIAAABIABAAIAAABIgBAAIAAAAIgBABIABABIAAABIABAAIAAABIgCAAIAAgBIgBgDIgBAAIAAAAIgDAAIAAAAIgBAAIAAABIgBADIgBgBIAAABIgCAAIAAABgAsNGfIAAgBIgBAAIAAABIgBgBIAAgCIgBAAIAAgCIABAAIAAACIABAAIAAgBIADAAIAAACIgBABIABAAIAAABgABwGaIAAgBIgBAAIABgBIgBAAIAAgBIgBAAIABgBIAAgBIABgBIAAgBIABAAIAAABIABAAIAAgBIADAAIAAACIABABIADAAIAAgBIABAAIAAgBIABAAIgBgBIABgBIABAAIABABIgBAAIgBABIABAAIAAACIgBgBIgBABIABAAIAAABIgBAAIAAACIgBgBIgBABIgCAAIAAgBIgFAAIAAACgAsXGPIAAAAIABAAIAAgBIgBgBIACAAIABABIACAAIAAABIgCAAIgBAAgACMGPIgBgBIAAgBIgBAAIgBgBIgBAAIAAgBIABAAIAEACIgBABIABAAIAAABgAs9GFIAAgBIgBAAIAAgDIABAAIAAABIACAAIAAADgAtJGEIAAgBIgBAAIAAgCIACAAIAAABIABAAIAAACgAsIGBIAAgBIgBAAIgCgBIABAAIAAgCIACAAIAAAAIABAAIAAgBIAAAAIAAgBIABAAIAAABIgBABIAAADIAAAAIAAABgAsnGBIAAgCIABAAIAAgBIABgBIABAAIAAACIgBAAIAAABIgBABgAsQGAIAAgBIAEAAIgBABgAAuF+IABgBIAAABgAAVF9IAAAAIABAAIAAAAgAB2F9IAAgBIgBAAIAAgCIABAAIAAgCIABAAIAAAEIABABgAByFyIABgBIAAgCIABAAIAAABIABAAIAAACgAAkFwIAAgBIABAAIAAABgAgMFpIAAgBIgBAAIAAgBIgBAAIABgBIABAAIAAgBIgBAAIAAgBIgBAAIAAACIgBAAIAAgBIgBAAIACgCIgBAAIAAgBIgBAAIABgBIgBAAIAAABIAAABIgBgBIgBAAIAAgBIABAAIAAgBIgBAAIgBgBIAAgBIgCAAIABgBIgBAAIABgBIgBAAIgBgBIABgBIAAABIADAAIgBABIAAABIgBAAIACABIABgBIABAAIAAgBIAAAAIABgBIAAgBIACAAIAAABIABABIABAAIABgBIAAABIACABIgBAAIAAABIABAAIgBABIAAABIAEAAIAAgBIACAAIAAACIABAAIABABIABABIgBABIgBAAIgBABIgBAAIAAABIABAAIgBABIgBAAIAAgBIgDAAIAAgBIgBAAIAAABIgBABIAAABIgBABgANcFoIAAgBIgBAAIgBgBIgBAAIAAABIgBABIAAgBIgBAAIAAgBIABAAIABgBIAAgBIABAAIAAgFIgBAAIAAgCIgBAAIAAgBIgEAAIAAgCIABgBIgBAAIABAAIABgBIAAgBIgBgBIgDAAIAAgBIAAAAIAAgBIABAAIAAABIACAAIAAgBIABAAIAAgBIABAAIgBgBIgBAAIAAgBIgDAAIAAABIAAAAIAAABIgBAAIAAgCIgEAAIgBABIAAABIgBABIgBAAIAAgBIgBAAIAAgKIABAAIAAAGIABgBIABAAIACgCIAAABIABAAIABABIAAgCIABAAIAAABIABAAIAAgBIAAgBIgBAAIAAgBIABAAIAAgBIgBAAIgBABIAAgCIgDAAIAAgBIABAAIACAAIAAAAIABAAIAAAAIABAAIAAAAIABAAIACAAIAAgEIgBAAIgBABIAAACIgBAAIAAgBIAAAAIAAgBIAAAAIAAgBIAAAAIABgBIAAgBIABAAIAAABIACAAIAAABIABAAIAAABIACAAIAAABIgBAAIABABIABAAIAAgBIABABIAAABIABAAIAAABIAEAAIAAgBIABAAIAAAAIABAAIAAgBIABAAIAAgBIABAAIAAAFIAAAAIAAgBIABAAIAAgBIABAAIAAACIACAAIADgDIAAACIgBAAIAAABIgBAAIAAABIACAAIABgBIAAgBIACAAIABgBIAAAGIABAAIAAgBIABgBIABAAIAAADIgBAAIAAABIgBAAIAAABIADAAIAAABIgBAAIAAABIAEAAIAAACIAAABIABAAIABABIAAABIABAAIAAABIgDAAIAAAAIgCAAIAAAAIgBAAIAAAAIgBAAIAAABIgBAAIAAgBIgBAAIAAADIABAAIABgBIABAAIAAACIgDAAIAAgBIgBAAIAAgCIgBAAIAAgBIgEAAIAAABIgBAAIAAgBIgBAAIAAABIgBAAIAAACIACAAIAAABIgBAAIAAADIgCAAIAAgBIgBABIAAABIgBAAIAAADIgBAAIgBABIgBAAIgCACIgBAAIAAgCIABgBIABAAIAAgBIgCAAIAAgDIgBgBIAAAJgAAPFkIAAgCIAEAAIAAgBIABAAIAAgBIABAAIAAADIgCAAIAAABgABdFiIAAgCIgBAAIAAACIgBAAIAAgEIAAAAIAAgBIABABIAAgBIABgCIAAABIABAAIAAABIABgBIABABIgBAAIgBABIABAAIABABIgCABIABAAIAAABIABAAIAAABgABbFigAgYFgIAAgBIgBgBIAAgBIABABIAAgBIABABIABAAIAAABIgBAAIAAABgANuFdIAAgBIABAAIAAABgANvFcgAgSFbIAAgBIACAAIAAABIgBAAIAAABgANLFbIgBgBIABAAIABgBIABAAIAAABIgBAAIAAABgABWFaIAAgBIABAAIAAABgANQFZIAAAAIACAAIAAgBIABAAIAAABIgBAAIAAAAgABVFTIgEAAIAAgBIgBAAIAAgEIACAAIAAgBIADAAIABABIAAABIABACIAAACIgBAAIAAABIgBABgANEFSIAAgCIACAAIAAABIgBAAIAAABgAsqFMIAAgBIgBAAIgBgBIAAgBIABAAIAAgBIABAAIAAABIABABIAAACgABKFHIAAgCIABgBIAAgCIABAAIAAgBIACAAIAAgBIABAAIAAgBIABAAIACACIgBAAIgBABIAAABIgBAAIAAABIgCAAIAAABIgBAAIAAABIgBAAIAAABgAA3FAIAAgDIgBAAIAAABIgBAAIAAgCIgBAAIAAgBIgCAAIAAgDIABAAIAAgDIADAAIABABIACAAIABgBIAAACIgBAAIAAACIgCAAIAAABIAAAAIAAABIAEAAIAAABIgBAAIAAABIgBAAIAAABIgBABIAAABgAKLE6IAAgBIgBAAIAAgBIABAAIAAACgAMWE5IgBgBIgBAAIgBgBIgBAAIgDgBIgBAAIABgBIAAAAIACAAIABAAIABAAIAAABIAEAAIAAADgABCE2IgBgBIgBAAIAAgBIgBAAIAAgBIADAAIAAACIACAAIAAAAIgBAAIgBACgAMJE2IAAgEIgCgBIACAAIABABIAAABIADABIABABIgCgBIAAABIgCgBIAAABIAAABgABFE0IABAAIAAgBIgCAAIAAgBIADAAIAAgBIABAAIAAgCIABAAIAAABIABAAIAAgCIABAAIAAABIACAAIAAADIgCAAIAAABIgBAAIAAABIgBAAIAAABIgCAAIAAAAgAKzEzIAAgCIgCAAIAAgCIgCAAIAAgCIABAAIgBgBIABAAIAAgBIgCAAIAAgBIABAAIAAgCIABAAIAAgBIAAAAIAAgCIADAAIAAABIAEAAIAAABIABAAIAAABIAFAAIAAgBIADAAIAAgBIACAAIAAgCIABAAIAAACIgBAAIAAABIABAAIAAABIADAAIAAACIgBAAIAAABIABAAIAAADIABABIAAABIgBAAIAAABIgCAAIAAgBIgEAAIAAgBIgLAAIAAABIgBAAIAAADgAKJEyIgBgBIgBAAIAAgBIACAAIABABIABAAIAAABgAKAEtIgBAAIAAgCIACAAIACABIgCAAIAAACgAKbEtIAAgEIgCAAIgCACIgBgBIgCgDIgBAAIAAABIgCAAIAAABIABAAIAAABIgEAAIgBgBIAAABIgCAAIAAgBIgCAAIAAACIABAAIAAABIgDAAIAAABIgBAAIgDgBIADAAIAAgGIgEAAIgBgBIgBAAIAAgBIgDAAIAAABIgBAAIAAgBIgBAAIAAgBIACAAIAAgBIABAAIAAgBIABAAIAAgBIgDAAIAAACIgBAAIAAgDIgBAAIAAgBIABgBIgBAAIAAgBIgBAAIAAABIAAAAIAAABIgBAAIAAgBIgCAAIgBABIAAABIgFAAIAAACIgCAAIAAgBIgBAAIAAABIgDAAIAAgCIABgBIgCAAIAAABIgDAAIAAABIgBAAIgBgBIgBAAIAAgBIABAAIAAgBIABgCIgBAAIgBABIgBAAIgBABIAAAGIABAAIAAACIADAAIAAACIgEAAIAAgBIgBAAIAAgJIgBAAIAAgCIgBgBIAAgCIgBAAIAAgBIABAAIAAgDIACAAIgBABIAAABIACgBIAAABIgBAAIAAABIABACIABAAIAAABIABgBIAAABIACAAIAAgBIABAAIgBgBIAAgCIABAAIAAgBIgBAAIAAgBIACAAIABgDIAAAAIABgCIABABIACAAIABABIACAAIAAAAIgBAAIAAABIACAAIAAABIABgBIAAgBIABABIABAAIAAgDIABAAIAAgBIABgBIAAABIABAAIAAABIABAAIAAgCIABgBIgBAAIAAgCIgBAAIAAgBIgBAAIAAgBIgBgBIAAgBIADAAIABABIAAgCIABAAIAAABIAAAAIAAABIADAAIAAACIABAAIAAACIADAAIAAgBIgCAAIAAgCIABAAIAAgCIAFAAIAAABIADAAIAAACIABAAIAAABIgDAAIAAgBIgBAAIAAABIgCAAIAAABIABAAIABABIACAAIABABIABAAIAAABIABAAIAAADIABABIABAAIAAACIABABIABAAIAAABIABgBIABAAIAAABIABAAIAAACIABAAIAAgBIACAAIAAABIgBAAIAAABIABAAIAAABIAFAAIAAABIABAAIAKAGIgDgBIgBAAIAAgBIgBAAIgBgBIAAAAIgBgBIgBAAIgBgBIAAACIgBAAIAAAFIABAAIABABIACAAIAAABIgBAAIAAACIABAAIAAABIABAAIAAABIgCAAIAAADIACAAIAAABgAK+EmIAAgBIABAAIAAABgAKuEmIAAgCIABAAIAAACgAJmEmIAAgCIACAAIAAABIgBAAIAAABgAJkEjIAAgBIACAAIAAABgAJiEjIAAgCIABAAIAAACgALlEcIAAgBIgBABIgFAAIAAgCIABAAIAAgCIABAAIAAgCIADAAIAAABIABAAIAAABIABABIgBAAIAAACIABAAIAAABgAJjEXIAAgDIABAAIAAADgAj2BQIAAgBIgCgCIAAgBIgBAAIAAgBIgCAAIAAABIgBAAIAAgBIgBgBIAAAAIgBgCIgBAAIAAgBIgBAAIAAgBIADAAIAAgBIACAAIAAABIABgBIAAgBIACAAIAAgCIACAAIAAADIABAAIAAgBIABAAIAAADIgBAAIAAABIACAAIABgBIAAABIACAAIAAABIABAAIAAADIgCAAIgBABIABAAIAAABIgBAAIgCACgAj4A7IAAgDIgCAAIAAAAIgBAAIAAgBIAAAAIgBgBIgCAAIgBABIAAgBIgBAAIAAgBIgBgBIAEAAIAAgBIgBAAIAAgCIgCAAIAAgBIgBAAIAAgBIgBAAIAAgBIgBAAIAAABIgEAAIAAgCIACAAIAAgBIgBAAIAAgBIACgBIAAgCIgBAAIAAgBIABAAIAAgBIgBAAIAAAAIgBAAIAAAAIgBAAIgBgBIABgBIAAgBIABgBIAAgBIABAAIAAgCIABAAIAAgCIABAAIAAgBIgBgBIAAgBIgEAAIgBgBIADgBIACgBIABgBIAAABIACABIABgCIACgCIAAABIABAAIAAACIgBABIABABIABAAIAAABIABAAIAAgBIABgBIAAgBIABgBIABAAIAAgBIABgBIACAAIABAAIAAAAIABAAIgBAAIABAAIABABIAAgBIACAAIAAgBIABAAIAAABIABAAIAAABIADAAIgBABIAAABIgBAAIAAABIgDAAIAAABIgBAAIAAgBIgBAAIAAABIgBAAIAAABIABAAIAAABIABgBIAAABIABAAIAAABIgCAAIAAABIABAAIgBABIAAACIABAAIAAABIABAAIAAgBIABAAIAAgBIACAAIABgBIABAAIAAABIABAAIAAABIgBAAIAAABIgBAAIAAABIABAAIAAACIABAAIAAACIgBAAIAAABIgBgBIAAABIgBAAIAAABIgCAAIgBABIABAAIAAABIABAAIAAABIABAAIADABIgBAAIAAABIgBAAIAAABIgBAAIgBABIAAABIgBAAIAAABIgBAAIgBgBIgBAAIAAABIgBAAIAAABIgDAAIAAgBIgDAAIAAABIABAAIABACIgBAAIAAABIABAAIAAAGgAkNANIAAgCIABAAIAAACgAEXhaIAAgCIABgBIAAgBIgEAAIABgCIABAAIAAgDIgCAAIAAgEIAEAAIAAgDIgCAAIAAAAIAFAAIgCgBIgBAAIAAgCIgCgDIgDgEIgCAAIAAgBIABAAIAAgDIABAAIAAABIACAAIAAgDIgEAAIAAgBIgBAAIAAgBIAAAAIABAAIAAAAIABAAIAAAAIABAAIAAgBIACAAIAAgBIABAAIAAgBIgDAAIAAgBIgBgBIAAgBIgBgBIgBAAIAAgBIAAABIgBAAIAAgBIgCAAIAAABIgCAAIAAgCIABAAIAAgBIACAAIAAgBIABgBIABAAIAAABIABAAIAAgCIABAAIAAACIACAAIAAgBIADAAIgBgBIABgBIgBAAIAAgBIgCAAIAAgBIgBAAIAAgBIADAAIABgBIABAAIAAABIABABIAAACIADAAIAAgDIAHAAIAAAFIgBAAIAAACIABAAIAAABIgBAAIAAAFIADAAIAAgBIAGAAIAAABIADAAIAAABIABAAIAAABIABAAIAAADIgBAAIAAADIgBABIAAABIgBAAIAAABIgBAAIAAACIgBABIAAACIgBABIAAABIgCABIAAABIADAAIAAABIgFAAIAAACIgBAAIAAABIgBgBIAAADIgBAAIAAgBIgBAAIAAABIgBABIAAABIgBABIACAAIAAABIgBAAIAAABIgCAAIAAACIgDAAIgBABIgBACIgBABIgBAAIABABgAEPh3IAAgBIgBgBIACAAIAAACgAEIh4IAAgBIgBAAIAAgCIACAAIAAABIABAAIAAACgAEOh9IAAgBIgBAAIAAgCIACAAIAAABIABAAIAAABIAAAAIAAgBIABAAIAAABIABABgAhAmDIAAgBIgBAAIAAABIgBgBIAAgDIABgBIAAgDIADAAIACgBIAAgBIABAAIAAgBIACAAIAAABIgBAAIAAABIABAAIAAABIgBABIgBAAIAAABIACAAIAAgBIADAAIAAACIgBAAIAAABIgBAAIAAABIgBAAIAAABIgBAAIAAABIgBAAIAAgBIgBAAIAAABIgBAAIAAgBIgBABIgBACgAgMm8IABgCIAAgBIABAAIABgBIAAgCIABAAIAAgBIABAAIAAgDIADAAIAAABIABAAIAAgBIgBgCIAAgHIgBgBIgBAAIgBABIgDAAIAAgCIgBAAIAAgCIAEAAIAAgBIACAAIAAgBIABAAIAAgBIABAAIgBgBIAAgBIABAAIAAgCIgBAAIAAABIgBgBIAAgBIgFAAIAAgDIAEAAIgBgBIAAgBIABAAIAAABIACAAIAAABIABAAIAAgBIACAAIAAABIABAAIAAABIAAAAIABgBIAAABIAEAAIAAgBIABAAIAAgBIABgBIABAAIAAgBIABAAIAAgBIABAAIACAAIAAAJIgBAAIAAAGIABAAIAAADIABAAIAAADIABAAIAAABIgDAAIAAgBIgCAAIAAgBIgCAAIAAgBIgCAAIAAADIgCAAIAAABIABABIAAABIgBAAIAAAEIgBAAIABABIACACIADACIABABIgBAAIgBgBIAAABIgDgCIgCABIgBgCIAAgBIgBABIAAAAIAAAAIAAABIgBAAIgBABIgDAAIABgBIAAgBIgBAAIAAABIgCAEIAAABIgBAAIAAABIgCACIgCABgAgLnaIAAgBIABAAIAAABgAgKnbgAAJnjIABAAIAAABg");
	this.shape_1.setTransform(0.7,-8.9);

	this.timeline.addTween(cjs.Tween.get(this.shape_1).wait(1));

	// Capa_3
	this.shape_2 = new cjs.Shape();
	this.shape_2.graphics.f("#394C64").s().p("AiOJlIgFgCIgNgIIgKgSIgFgOIAAgCIgCgCIgEgGIgEgCIgGgBIgegJIgDAAIgOAGIgBACIgCADIgOAKIgGgCIgCAAIgFgBIgJAAIgQgDIgBAAIgBgEIgBAAIgBgCIAHAAIABgBIAAgEIADgHIAAgBIANgMIgCgHIAAgDIAHgIIABAAIAPgOIADgGIAAgEIABgEIACgBIAKAAIABgCIACgJIAAgBIABgEIgIAAIAAABIgCgCIgDABIAAAFIgCACIAAgCIgBAAIgBACIgBgCIAAACIgBAAIAAAAIgDAAIAAgHIgDgBIgDAAIgPgCIgCAKIgCgCIgGAAIADgVIgEAAIgGgCIgCgCIABgGIAAgBIgHgBIACgEIAKADIAJAAIABAAIABAAIACAAIASACIAEAAIABABIADAAIACABIADgIIADAAIAFABIgCgBIABgBIABABIAAgBIADACIADgVIAAgGIABAAIAAgEIABgFIAOAAIABgBIAAgMIAGgBIABgBIADAAIgBADIABAAIAAABIADAAIAAgBIAFgDIAAAAIgGAAIgBAAIgBAAIABAAIAAgCIACAAIAAgBIgBgBIgBABIgDAAIgBgBIAAgBIABgBIgHAAIgDAAIgFAAIgFgBIgDgBIABgFIgGAAIABgDIgBgBIgBgCIAAgBIgBgBIAAgBIgBAAIAAgBIgBAAIgBgDIALAAIABgBIAGAAIAAABIABAAIABABIABAAIgBgBIAAgBIAEAAIAOgEIAAgCIABgHIAKgCIACAAIgIgBIAAgGIACgGIABAAIACgCIAGgDIABgBIAEAAIADgCIgDgBIgCAAIgCgDIgDAAIgEgDIgcgBIgDgGIgGgDIAAAGIgCABIAAABIgBgBIgBABIgDgBIgBACIgCgBIACADIgEgCIgBAFIAAACIgRgNIACgDIADADIAFgFIgBAAIAGgEIACgEIAAgBIABAAIAAgFIADgKIghgEIALAOIAIAGIgDgBIgngBIAAgNIAEgRIAdgLIgEABIgBgCIgCAAIAAgDIgBAAIgFgCIgJAEIgLgQIABADIgCADIAAABIgBAAIABACIAAACIAAABIADACIgJAPIgCABIgRgHIgUgEIgBAIIgEgOIABAAIgBgKIgEgDIAAAAIgHgHIgBgCIgBgGIAAgBIAMgGIgHgSIgCgQIgZgFIAIgZIgBgDIAWAAIgFgdIAAgBIAUAGIAHgBIACACIAEACIAEgcIAGAVIAFADIADACIABADIAFACIABAAIAHACIABABIABAAIAFADIAPgVIgIgKIAIgFIgHgDIgJgEIAOACIABAAIAHgCIgEgEIgCAAIgBgDIgBgBIgBAAIgBgCIgVgVIgTgJIgCgEIgFgFIAAgFIgJgGIgBgBIgBABIgDAFIgegsIAfgVIAHgEIALgGIAEgEIgEgQIgEgCIgDgDIAAgBIgFgDIgBAAIgBgBIAAAAIgBgBIAAgCIABABIAFgDIACAAIAFgBIABAGIALADIAVgBIABgCIADgDIABAAIABgCIAAgBIgBAAIABAAIAAgDIABABIAAAAIADgBIACgBIABAAIAEgDIAJgFIABAAIACABIAAgBIACgCIADgEIADgEIABgBIABAAIAAgBIACgCIAAgBIATAKIAOANIAIAEIABAAIAAgBIAJgFIABAAIAEgDIADgBIADADIAEAFIAdgJIADAHIACgBIACAEIAFAHIAKACIABAAIAFADIABABIADAGIAAAAIACAEIADADIACABIACACIACADIACACIAAABIABAAIAAABIgDACIgCACIgBADIAAAFIgMAIIACAFIACABIgBABIgGAAIgEgCIgBAAIgEAEIgCABIAAABIgBAAIAAABIgBAAIgGAFIgBAAIgCADIgDACIgCABIgCACIgFAFIAAABIgBABIANAOIABAAIACADIAEAAIAAACIABABIABAAIAFAIIAGAAIAAABIACABIAAABIgBABIAAAEIABABIAAABIABABIgBAAIAAACIACACIgIAFIgJAJIgLAHIgEAFIgCAAIgSAPIgBAAIgCACIgEACIgFAFIAbAbIAAABIABAAIABABIAAABIABAAIABACIADADIAEANIACADIAGAGIAGACIABAAIADACIACAAIABABIABAAIABABIACABIADADIABACIACADIACAAIAAADIABACIADACIAAABIAIADIADASIABABIAAAGIgBAJIAIADIANAAIABABIABAAIACgCIAAADIABAAIAMgDIAFgDIAFgGIAFAKIAHAAIACgBIAFAAIAAABIABAAIAAgCIACAAIAAABIABAAIAAgBIACAAIAAgBIABAAIAAgBIACAAIACgBIADAAIABgBIAAACIABAAIAAABIABACIAAAZIABAAIAAgCIABAAIAAgBIACAAIAAgBIACAAIAAgBIADAAIAAgBIACAAIAAgBIABAAIAMgGIACABIADABIACgBIABAAIAAABIAJAAIACABIABAAIAAABIACAAIAAABIABgBIADAAIAAgBIABAAIAAABIAGAAIADgEIAAAAIABAAIAAgBIABAAIAAgCIAAgCIABAAIAAAAIABAAIAAgFIACgGIABgFIABAAIAAgEIgBgBIAAgCIgBgBIAAgBIgBgBIgBAAIAAgBIgBgBIAAgBIgBAAIAAgBIAAAAIAAgBIgBAAIgCgBIAAgBIgCAAIAAgBIgBgCIgBAAIgBAAIgBAAIgCgCIgCgBIABgBIgBAAIgCgBIgDgCIAAAAIAAgBIgCAAIAAgBIgCAAIAAgBIgCAAIgDgCIgBAAIgCgBIgBAAIAAgBIgBAAIgBgBIgBAAIgBgBIgBAAIAAgCIAAAAIgBAAIgCAAIAAAAIgCAAIAAACIgDAAIgBgCIgDgBIgBAAIAAgBIAHgQIAAgCIABAAIABgDIABgCIABgBIAAgBIACAAIAAABIADACIABgBIgBAAIAAgBIgBgBIABAAIAAgBIABAAIAEgDIACgDIABgCIACgBIACgCIAAgBIADgBIAAgGIgDgCIgBgCIABgDIAAAAIgBAAIgBgCIAAgBIgCgCIABgCIAAgBIgCgBIADgCIgDgBIAIgGIAAgEIAAgBIACAAIAAgBIABAAIABgBIAHAAIAAABIADAAIAAgBIACAAIAAgBIABAAIAAABIABADIAAABIAAAGIABgBIAIAAIADAEIAAACIABABIAAABIABABIAAABIABABIACAAIAAACIABAAIAAgBIACAAIAAABIACAAIAAADIACAAIAAACIABAAIABABIgBABIABAAIAAABIABABIAAACIABABIAMAAIACACIAAABIACAAIABABIABAAIAAgCIACgCIABgBIABAAIACgBIACgCIADAAIABAAIgCgCIABgBIAAgCIABgBIgBAAIAAgCIABAAIAAgBIgBgBIAAgCIACABIAFAAIAJABIACAAIACABIAEAAIADABIACAAIACABIADABIABABIADAAIgBAAIACADIgBABIACAEIACgBIACAAIABABIgCACIADABIADADIgCABIATADIAKgBIgBABIgBACIgBAIIgBABIACACIgFABIgEgCIgDAAIAAAEIABABIAAADIgBAAIAAACIABABIgFAAIgBAAIgCAAIAAAAIgCAAIgBgBIgBABIgBgBIgCAAIAAABIgBABIAAABIgMAGIgBAAIAAABIgBAAIgCABIgDABIgEACIABAAIAAACIADAFIACADIACAEIAAABIABAAIgIAFIgCAAIgBABIgBAAIAAABIgBAAIgEADIgBABIgBABIgBABIAAABIgCgFIAAgBIgBAAIAAgBIgBAAIAAgBIgCAAIAAABIgBAAIgBABIgBAAIgDACIAAABIgBAAIgCABIAAAAIgCgBIAAgCIgHACIgCABIAAABIABABIAAADIgBAAIgBgBIgBAAIgBgBIgBAAIgBgBIgCAAIAAgBIgBAAIAAgBIgCAAIAAgBIgBAAIAAACIgBAAIAAABIgBAAIAAABIADAAIAAABIACAAIAAABIADAAIAAACIABABIAAABIABAAIAAAAIABACIAAABIACAAIgBADIAAACIABAAIABACIgBABIgBAAIAAABIgBAAIAAACIgBAAIAAADIABABIAAACIABABIgBABIAAACIgBABIAAABIgBAAIAAABIgBAAIAAACIgBAAIAAADIABACIABABIAAABIABACIAAABIABgBIAAgCIABAAIASAAIAAAAIABAAIACAAIABAAIAAACIADAAIABABIABAAIABABIACABIAEAAIAAAAIABABIAAABIgCAAIgBABIgBAAIgBABIAAAEIABAAIAAABIADAAIAAABIABAAIAAABIACAAIAAABIABAAIABABIgBAAIAAAAIgBAAIAAACIABAAIAAABIABABIAAACIgBACIgIAIIgBAAIAAABIgBAAIgDACIAGAAIAAgBIABAAIAAAFIADAAIgBACIACAAIAAABIABABIACABIAIAAIAAgBIABABIADAAIABABIAAgCIADAAIACABIgBABIAFABIAGAAIABABIABAAIgBABIABABIADAAIAAABIAEAAIAAgBIACAAIgBgBIABAAIABgBIAAgBIAHAAIABgBIABAAIAAABIABAAIAAABIAEAAIAAABIACAAIAAgBIABAAIAAgBIACAAIAAABIABAAIAAgBIACAAIAAABIABAAIAAABIAIAAIAAABIABAAIAAADIADABIACAAIAAADIADAAIAAgBIABgBIAAAAIABgBIAAgBIAEAAIAAACIgBAAIAAABIgBAAIAAABIABABIAAgBIACgCIAAgBIABgBIACAAIACABIACAAIABABIAAADIABABIAAgBIACAAIAAABIABAAIAAAGIABAAIAAABIACAAIAAAUIABABIAAACIABgBIAGABIABAAIAAABIABABIACACIAAABIABAAIAAABIABAAIAAACIABAAIAAAEIAAAAIAAABIgBABIgBAAIAAABIgCAAIAAgBIgBAAIAAgBIgCAAIAAgBIgBABIgBAAIAAACIgBABIAAACIgCAAIAAADIgBAAIAAABIgBAAIAAgBIgDAAIAAACIgBAAIAAABIAAAAIAAABIgCAAIAAACIgBAAIAAABIgBAAIAAADIgBAAIAAABIgBAAIAAABIgBAAIAAgBIgCAAIAAABIgBAAIAAACIgBAAIAAABIgBAAIAAABIABAAIAAABIgBAAIAAACIABAAIAAACIgBAAIAAACIgBAAIAAABIABAAIAAADIgBAAIAAABIgBAAIAAABIgBAEIgBAAIAAACIgCAAIAAABIgCAAIAAABIgBAAIAAABIgCgCIgGgEIgDgDIgEgCIAAgBIgBAAIgBgCIgCgBIgDgCIgBgBIgBgBIgEgCIAAgBIgBAAIAAgBIgCAAIAAACIgBAAIAAABIgBAAIAAACIABAAIAAABIABAAIAAABIABAAIAAABIABAAIAAADIgBAAIAAABIgDAAIAAABIgCAAIAAADIgCAAIAAgBIgCAAIAAABIgCAAIgBgBIAAACIgCAAIgBABIgFAAIgBABIAAAAIAAABIgBAAIAAABIgCAAIAAgBIgCAAIAAgBIgGAAIgEgDIgEAGIAAABIgBAAIgNAHIgFAEIABAAIAAABIABAAIAAABIAAABIAAABIACAAIAAACIABAAIAAABIABAAIAAAAIABAAIAAACIABAAIAAABIADAAIAAADIABAAIAAAAIACAAIAAABIABAAIAAADIgNgGIgFAEIgBABIgFAGIgLgOIgDAAIAAABIgBAAIAAgBIgGAAIAAABIgDAAIgCAEIAIAFIgDACIAAABIABAAIADACIgIADIgOgBIgBgBIgEgCIgCAKIgNgEIgBgBIgCgBIgFAAIgDgBIgEgCIgBAAIgLgEIgBAAIgGgCIgJAAIgFgBIgBgBIgDAAIAAgBIgCAAIgCgBIgDAAIAAAAIgCAAIgBAAIgHAAIgBABIgEAAIAAABIgEAAIgNACIgCABIgJAHIgBABIgGADIgBACIgGAEIAAABIgCABIgCABIAAAEIgBAFIAAACIgCASIAAACIgCALIAAAGIAFADIADACIABACIABAAIAJAIIAEADIAEAEIgLAIIgBABIgEAEIgKAJIgDACIAAACIADAGIABAEIAFALIgCArIgBACIACAMIgBAAIgJAAIgDAAIgEgDIgBAAIgBgBIgCAAIgCgBIAAgBIgBAAIgBAAIgBAAIgCgCIgBAAIgBABIgCABIgBAAIgBAAIgEAFIgHAEgAq2IqIAAgBIgBAAIAAgBIgBAAIAAgBIgBAAIAAABIgBAAIAAgBIgBAAIgBgBIgBAAIAAgBIgBAAIAAAAIgCAAIAAAAIgEAAIAAAAIgBAAIAAgCIgCAAIAAgBIgGAAIAAgBIgCAAIAAgBIgBAAIgtgmIAAgCIACAAIAAgDIAAAAIAAgBIABAAIAAgBIgBAAIABgBIgBAAIAAgDIAAAAIAAAAIgBAAIAAgCIgCAAIAAgBIgBAAIAAgBIgBAAIgBgBIAAgBIgBAAIAAgBIACAAIAAgBIgBgBIgCAAIAAgBIABAAIAAgBIABAAIAAgBIgBgBIAAgBIACAAIAAgBIgBAAIAAgBIABAAIABABIABAAIAAgCIgDAAIAAgBIgCAAIgBAAIgBAAIAAgCIgCAAIAAgCIgBgBIgBAAIAAgBIgDAAIAAAAIgBAAIAAgBIgBAAIgBgBIAAgBIgEAAIAAgBIgBAAIAAgBIgBAAIAAgBIABAAIgBgBIgBAAIAAgBIgBABIgBAAIAAABIgBgBIgCAAIAAgBIgBgBIAAgBIgBAAIAAgBIgBAAIAAgDIgBAAIAAgCIAAAAIAAgBIgBAAIAAgBIgBAAIAAgBIgBAAIAAgBIgCAAIAAgCIgBAAIAAgEIgBAAIAAgCIgDAAIABgBIgCAAIAAgBIgBAAIAAgCIgBAAIAAgBIgBAAIAAgBIgBAAIgBABIgBAAIAAgBIgBAAIAAgBIgCgBIAAgCIgBAAIAAgBIABAAIAAgBIgBgBIgBAAIAAgBIgCAAIAAgCIgBAAIAAgBIgBAAIgBgBIAAgBIgCAAIAAgBIgFAAIAAAAIgBAAIAAgEIgBAAIAAgBIAAgBIgBAAIABABIgBAJIgCADIgFACIgMAEIgLADIgBAAIgGACIABAAIAAAAIgNACIgCgCIgCAAIgBAAIgBAAIgCABIAAgBIgCACIAAABIgBABIgLgEIgDgKIAAgCIABgBIAAgCIgBAAIAAgCIgBgBIAAgDIgBAAIAAgCIACgBIgDABIgBgCIgBAAIgBgDIgKgRIAEgEIAEgJIAAgBIgPgSIgEAAIgLACIgBgFIgFACIgIABIAAAAIAAgBIgBAAIABgBIAAgBIgBAAIgBgCIAAgBIgBAAIAAgCIgBgBIAAgBIgBAAIAAgCIgBAAIAAgEIABAAIAAgBIgBAAIAAgDIgBgBIAAgCIgBAAIAAgCIAKAOIABACIAMgCIABAHIAIgBIgGgRIAJAAIgCgEIgBgDIgOAAIABgRIAEgCIgLgMIgDgFIgCACIgDgHIABgBIgCgCIAJgCIACgBIgCgEIACgBIgCAAIAAgBIgBAAIAAgBIACgBIABgBIACgBIADgBIABAAIACgBIAQAAIAAABIAIACIAgADIADAEIAQgEIABgBIAAgBIABgBIAAAAIAAgBIAAgBIgBAAIABgCIABgBIgBAAIABAAIABABIABgBIAAgCIABgBIgBgBIABgCIADgNIAFgCIACgDIAAAAIABgBIAAgCIABAAIABgCIAAgDIABABIAAACIAAABIADgCIABABIAAABIADgBIgBAEIAEABIAEAAIABgBIADAAIgBAJIAGAAIABgIIACAAIAEACIAAADIADABIADAAIAAADIADgBIABAAIAEgBIgDgCIgEAAIABgDIgCgCIgBgCIADAAIADgBIACAAIACgBIACAAIAAABIABAAIAAABIABACIABACIADgCIAAACIABAAIAAABIABAAIAAgBIgBgCIAAgBIAEAAIACgCIACgBIAAAEIABAAIAAAEIABAAIAAABIABAAIAAAAIABABIABACIACACIABABIAAABIABABIAAADIgCACIABAAIAAAAIgBACIAAAEIgBABIAAAGIgBADIgBABIAAABIgBABIAAACIABgBIABAAIABgBIgBAAIABgBIACAAIAAgBIABAAIABgBIAAAAIAAgCIABAAIAAgBIACAAIAAgBIACAAIgBABIAAABIgBAAIAAAFIgBABIgCACIABAAIABABIAAAAIACAAIABAAIAAADIABAAIABgBIAEAAIAAgBIABAAIAAgBIABgCIABgBIABgBIABAAIACgBIAAgCIAAAAIADgCIAAgBIgBAAIAAABIgBgCIACAAIAAgBIABAAIAAgBIABAAIAAgCIABgCIACAAIAAABIgBAAIAAACIgBABIABABIAAABIABAAIABABIABAAIAAgBIACgBIABAAIAAAEIABAHIAAAEIABAIIAGABIADAAIADABIABAAIABABIABAAIACACIAAgCIAEAEIADAAIAAABIACACIABABIAIAGIADgJIAGABIACABIABAAIAAACIgMAMIgCgCIgEABIAAABIABADIACACIgBABIAAAHIACAAIgCAIIgBAFIADAAIAAAGIgBABIAAABIgDAAIAAADIgBACIAAACIgBADIAAAEIgBABIAAAEIgCAFIgDgBIgEAAIAAgCIgCgBIgFAAIAAgBIgBAAIAAgBIgcgBIgHAEIgDABIgCABIgBABIAAABIgBAAIAAACIgBAAIAAABIgBAAIgBABIgBAAIgBgBIAAABIgDAAIAAABIgBAAIAAgBIgCAAIgBgBIAAgBIgBAAIAAgCIgBAAIAAgBIgBgBIgCAAIAAABIgBAAIgBgBIgBAAIAAgBIgFAAIAAgBIgCAAIAAABIgEAAIAAABIgBAAIAAABIgCAAIAAABIgDAAIAAACIgCAAIAAAAIgCAAIAAABIgBAAIAAADIgBAAIAAACIgBAAIABABIgBAAIAAACIgBAAIAAACIgBAAIAAABIgBAAIAAAAIgCAAIAAABIgBAAIAAABIACAAIAAABIABAAIAAABIgBAAIAAACIgBAAIAAAAIgBAAIAAABIgCAAIAAABIAIAKIABAAIAGgBIgIgHIAJgGIADAGIAMAIIABAAIALAEIgBALIAjAGIADAAIAGABIABAIIAAADIATAMIAFABIAAADIABABIAAAKIABACIAAAKIABAAIACAAIAHADIABAAIAAADIABAAIADAEIAIAEIgOAAIAHADIABAAIgCAHIgDADIASALIABAAIAAABIAIAEIABABIAAALIgLADIACAFIAAABIgCAAIAAgBIgBAAIAAACgANgHiIABgBIgBAAIgBgBIAAgBIgpgwIgGgEIgBgCIgCgBIgFgHIAAADIgDgDIgFgDIgEgEIgFgEIgBgBIgCgDIgFgEIABgBIgDgCIgBAAIgDgBIgGgDIgBgBIACgCIgBgBIgDgCIgBACIgCgDIgDgCIgDADIgBACIgCABIAAgBIgCAAIgDAAIgJAAIAAgNIgIAAIAAgFIgPAAIAAAFIgIAAIAAgGIgvAAIAAgBIgCAAIAAABIgCAAIAAgIIgBgCIgGgHIgFAFIgBAAIgDADIAAAEIgGgBIgDAAIAAACIgNAAIgBgCIAAgGIgCAAIgHgBIgDgBIgEAAIAAACIgrAAIAAgCIABgMIAAgwIgBgEIAAhMIgBgDIAAgLIAHAAIAAgRIgCAAIAAgDIACAAIABgCIABAAIABAAIAAgCIABgCIAAgEIABgBIAAgEIABgBIAAgFIAAgCIAAgFIABgBIACgCIABAAIABgBIABAAIAAgBIAEAAIAAAAIACAAIAAABIgBAAIAAABIgBAAIAAACIADAAIAAgBIAEAAIAAAEIABAAIAAgBIAAAAIAAgBIAAgBIAAgBIgBAAIAAgCIADAAIAAgBIABAAIABAAIACAAIAAACIABAAIAAgBIABgBIACAAIABABIAAADIgBABIAAACIABAAIAAABIADAAIAAABIABAAIADADIADAAIAAAEIADAAIAAABIABAAIAAABIABAAIAAABIAGAAIAAgBIABAAIAAAAIgBAAIAAgCIABAAIAAgBIABAAIABABIAAABIgBABIAAAAIABAAIAAACIABAAIAAgCIABAAIAAgBIAEAAIAAACIgBAAIAAABIgBAAIAAABIABAAIAAABIADAAIAAABIgCAAIgBABIAAABIABAAIABABIAAABIABAAIAAACIABAAIAAABIABAAIAAABIADAAIAAACIABAAIAAACIADAAIAAgBIgCAAIAAgDIABAAIAAgBIAEAAIAAABIADAAIAAACIABAAIAAABIgDAAIAAgBIgBAAIAAABIgBAAIAAABIAAAAIABABIACAAIABABIABAAIAAAAIABAAIAAACIABAAIAAABIABAAIACABIABAAIAAACIACAAIAAgBIAHAAIAAABIABABIACAAIAAABIABAAIAAABIABABIAAABIABAAIAAABIABAAIAAgBIABAAIAAgCIABAAIAAgBIABABIABAAIAAgEIABAAIAAABIABAAIAAABIABAAIAAACIACAAIAAgBIAAABIABAAIAAABIgBAAIAAABIAAAAIAAABIAAAAIABgBIABAAIAAgBIABAAIAAACIACAAIAAAAIABgBIAAgBIABAAIAAgEIABAAIABgBIAAAEIADAAIAAgBIAGAAIAAACIADAAIAAgBIABAAIABgBIgBAAIAAgCIABAAIAAABIABAAIAAADIABAAIAAABIABAAIAAADIgBAAIAAABIgCAAIAAABIABABIACAAIAAgBIABgBIAAgBIAGAAIAAABIACAAIABgBIAAgCIAAAAIAAgEIACAAIABABIAAABIACAAIAAgBIABAAIAAgBIABAAIAAABIABAAIABgBIACAAIAAABIABAAIAAABIABAAIAAgCIADAAIAAACIACAAIAAABIAAAAIAAABIACAAIAAgBIABAAIAAgBIABAAIAAgBIADAAIAAABIABAAIAAABIABAAIAAABIACAAIAAgCIgBAAIAAgCIACAAIAAADIADAAIAAgBIABAAIAAABIACAAIAAABIgBAAIAAACIABADIgBABIAAALIgBAAIAAAHIgCAAIAAAKIgCgBIAAALIADAAIAAADIgDAAIAAACIgCAAIAAAFIAFAAIAAAQIgEAAIAAAOIgFAAIAAAKIgCABIgCAAIAAAUIABABIAAAIIAGAAIAAAfIADgBIADAAIABABIAIAAIAFABIAEAAIADgBIACABIAdAAIAAhYIgDgDIAAgBIgGgFIAAgBIgBAAIgBgCIgEgFIgEgGIgBAAIAAgDIgBABIgBABIgBAAIgBABIgBAAIgCgBIgEgDIgBAAIgDgCIgDgBIgCgCIgBAAIgCAAIgBAAIgDgBIgBAAIgBgBIgCAAIAAgJIACAAIAAgPIAAgDIABgBIgBgCIAAgCIACAAIAAgCIgBAAIAAgCIABgBIABABIACAAIAAgCIAEAAIAAABIABAAIAAABIACAAIAAgCIABAAIAAgBIABAAIAAACIgBAAIAAADIAHAAIAAACIABAAIABgCIAAAAIABAAIAAgBIADAAIAAAEIABAAIAAgDIABgBIAAgBIADAAIAAACIADAAIAAACIgCAAIAAADIABAAIAAAAIADAAIAAABIABAAIAAgBIABAAIAAAAIABAAIgBgBIgBAAIAAgCIADAAIABABIAAAEIACAAIAAgBIABAAIAAgBIABAAIAAACIABAAIAAgBIADAAIAAgBIACAAIAAABIACAAIAAgBIABAAIAAACIgBAAIAAABIACAAIAAgBIABAAIAAgCIABgBIAAABIABAAIAAABIABAAIAAgBIABAAIAAADIABAAIAAgDIABAAIAAACIAFAAIAAgBIgBAAIAAgBIACAAIAAABIABAAIAAgBIABAAIAAAAIABAAIAAABIgBAAIAAABIgBAAIAAABIgBAAIAAABIAFAAIAAABIAAAAIAAgDIADAAIAAABIABAAIAAADIgEAAIAAABIABAAIAAABIACAAIAAABIABAAIAAABIABAAIAAgBIABgBIABAAIAAACIgBAAIAAABIgBAAIAAABIgBAAIAAABIAFAAIAAADIADAAIAAABIABAAIAAABIgBABIAAABIABAAIABABIAAABIACAAIAAgCIADAAIAAADIABABIAAACIABAAIgBABIgBAAIAAACIACAAIAAgBIACAAIAAABIABAAIAAABIgBAAIABABIACAAIAAgCIABgBIADAAIAAADIABAAIAAACIAEAAIAAABIgBABIAAABIABAAIABABIAAABIAAAAIAAAEIAEAAIAAgBIABAAIAAgBIABAAIAAgBIABAAIAAgBIABAAIAAAGIABAAIAAgBIABAAIAAgBIABAAIAAACIACAAIADgDIAAACIgBAAIAAABIgBAAIAAABIACAAIABgBIAAgBIABAAIABgBIAAAGIABAAIAAgBIABgBIABAAIAAADIgBAAIAAAAIgBAAIAAACIADAAIAAABIgBAAIAAABIAEAAIAAABIABAAIAAAAIABAAIAAABIAEAAIAAgBIgBAAIAAgBIABAAIAAgEIACAAIAAAAIgBAAIAAAFIABAAIAAgBIABAAIAAgBIABAAIAAADIAAAAIAAABIABAAIAAgBIABAAIAAgBIACAAIAAABIADAAIAAgCIADAAIgBgBIgBAAIAAgDIABAAIAAgBIABAAIAAgBIABAAIAAgDIgEAAIAAgBIABAAIABgBIADAAIAAgBIgDAAIAAgEIgBAAIgBgBIgBAAIAAAAIACAAIAAgCIADAAIABgBIABAAIAAgCIABAAIAAgCIABAAIAAABIADAAIAAABIgBAAIAAACIACAAIAAABIABAAIAAgDIABAAIAAgBIABAAIAAgBIACAAIAAABIABABIABAAIAAgBIABAAIAAgCIABAAIAAABIACAAIAAgBIAFAAIAAgBIgBgBIAAgCIgCAAIAAgBIgBAAIAAgBIABAAIAAgBIABAAIABABIAAABIAFAAIAAABIAEAAIAAgBIABAAIABgBIADAAIAAgBIACAAIAAABIABAAIAAgBIACAAIAAgBIABAAIAAABIADAAIAAABIABAAIABABIABAAIAAgCIACAAIAAgBIABAAIAAgBIABAAIAAABIABAAIAAABIACAAIABgBIAAAEIACAAIAAgBIACAAIAAAIIAAACIAAACIAAABIAAANIgBACIAAAGIgBABIAAAGIgBAAIAAAHIgBAAIAAAEIgBAAIAAAGIgBAAIAAAFIgBAAIAAAEIgBAAIAAADIgBAAIAAADIgBABIAAACIgBAAIAAADIgBAAIAAACIgBAAIAAADIgBAAIAAACIgBAAIAAACIgBAAIAAACIgBAAIAAACIgBAAIAAACIAAAAIAAACIgBAAIAAABIgBABIAAABIgBAAIAAACIgBAAIAAACIgBAAIAAABIgBAAIAAABIgBABIAAABIgBAAIAAACIgBAAIAAACIgBAAIAAACIgBAAIAAACIgBAAIAAABIgBAAIAAACIgBAAIAAABIgBABIAAABIgBAAIAAABIgBAAIAAACIgBAAIAAABIAAAAIAAACIgBAAIAAABIgBABIAAABIgBAAIAAACIgBAAIAAABIgBAAIAAACIgBAAIAAACIgBAAIAAABIgBAAIAAACIgBAAIAAABIgBAAIAAABIgBAAIAAACIgBAAIAAABIgBABIAAABIgBAAIAAACIgBAAIAAABIgBABIAAABIgBAAIAAACIgBAAIAAACIAAAAIAAABIgBAAIAAABIgBAAIAAACIgBAAIAAADIgBAAIAAAAIgBAAIAAACIgBAAIAAACIgBAAIAAABIgBABIAAABIgBAAIAAACIgBAAIAAACIgBAAIAAABIgBAAIAAABIgBABIAAABIgBAAIAAADIgBAAIAAABIgBAAIAAACIgBAAIAAABIgBABIAAABIAAABIAAABIgBAAIAAACIgBAAIAAACIgBAAIAAABIgBAAIAAACIgBAAIAAADIgBAAIAAABIgBAAIAAADIgBABIgBAAIAAACIgBAAIAAABIgBAAIAAACIgBAAIAAABIgBABIAAABIgBAAIAAABIgBABIAAABIgBACIAAABIgBAAIAAABIgBABIAAABIAAACIAAABIgBABIAAABIgBABIAAABIgBABIAAABIgBAAIAAACIgBABIAAACIgBAAIAAABIgBABIAAABIgBABIAAABIgBACIAAABIgBACIgBABIAAABIgBABIAAABIgBABIgBADIAAABIgBACIAAABIgBABgALUDDIABAAIAAgBIgBAAgANbDoIAAgBIABAAIAAABgANRDjIAAgDIACAAIAAADgANCDVIAAgBIABAAIAAgBIABAAIAAACgANEDTIAAgBIABAAIAAABgANEDTgAETiXIgFgBIAAgBIABAAIAAgBIABgBIgJgBIAAACIgbgCIgBACIgCgBIgDAAIAAgMIgBgHIAAgEIgBgFIAAgNIgDgBIgEgDIgFgBIgegKIgEgBIAAgDIgBgFIgBgJIAhgVIABgBIAEgDIASgMIABAAIAAABIABAAIAAADIABAAIAAABIABAAIACACIADAAIABgBIAAgBIACgCIAAACIAAAAIABABIAFAAIACACIAAABIABAAIAAABIgBAAIAAABIgBAAIAAAAIgBAAIAAABIABAAIAAABIABAAIAAACIAFAAIABABIACAAIAAgBIACAAIAAgCIAAgBIAAAAIAAgBIABAAIAAAAIABAAIAAABIABAAIAAgBIADAAIAAAAIABAAIAAAAIACAAIAAAEIABABIABAAIAAABIABAAIAAABIACAAIAAACIgBABIgBAAIAAABIAEAAIAAgBIACAAIAAgBIABAAIAAgBIABAAIABABIABAAIABABIABAAIAAACIABAAIAAADIABAAIAAACIABAAIAAABIABAAIAAAAIABAAIABABIABAAIAAABIABAAIAAACIABAAIAAABIgBAAIAAACIgBAAIAAAAIgBAAIAAACIgBAAIAAAHIgBAAIAAACIABAAIAAAAIgBAAIAAAGIADAAIAAgBIAFAAIAAABIADAAIAAABIABAAIAAAAIABAAIAAAEIgBAAIAAADIgBABIAAABIgBAAIAAABIgBAAIAAABIgBABIAAAEIABAAIAAACIABAAIAAADIABABIAAABIgBABIAAADIgBABIAAAFIgBAAIAAABIAAAAIAAABIgBABIAAABIgBAAIAAAFIABAAIAAACIgBAAIgCACIgBAAIAAABIgBAAIAAABIgEAAIAAAAIgBAAIAAADIABABIAAABIADAAIAAABIAEAAIAAgBIADAAIAAABIABAAIAAAAIABAAIAAABIABAAIAAACIgBABIAAABIgBABIAAABIgBAAIAAABgAgOnQIgYAAIgBABIgTAAIgBABIgCgBIgCgBIgEAAIAAAAIgDAAIABgLIAAgCIgBgBIgFgDIgBAAIgCABIAHgNIABgBIACgFIABgBIACgCIAAgBIABAAIACgEIADgCIADgEIgBAAIACgBIABAAIALgMIABAAIAAgBIACAAIAAgBIAAAAIABgBIAEAAIACgCIACgBIABgBIABgBIACAAIABgCIABAAIACAAIABAAIAAgBIAAgBIABgBIADAAIABABIABgBIABAAIACgCIABAAIABgBIgFAAIgDgBIgBAAIgBgBIgBgJIAAgCIgDgPIgEAAIgDgBIgTgaIgHgGIANgNIAKgBIAAgCIgFgCIAAgBIABgBIAJACIABgBIAGgCIABAAIAAACIAAAAIAAACIACAAIABABIAAACIgDAAIAAABIABAAIAAAAIABABIAAABIACAAIABgBIAAgBIACAAIAAACIABAAIAAABIABAAIAAgBIADAAIAAABIgBACIAAADIACAAIABgBIABAAIAAABIgCAAIAAABIgBAAIAAACIADAAIAAAEIABAAIABABIABAAIAAABIABABIAAABIgBABIAAAEIABAAIAAABIACAAIABgBIABAAIABABIACAAIAAADIABABIABABIABAAIABABIAAAFIgBAAIAAACIABAAIAAABIABAAIAAADIgBABIAAABIAFAAIAAABIAAABIAAABIAAABIAAAAIAAABIACAAIAAAIIgBAAIAAAHIABAAIAAADIABAAIAAADIABAAIAAACIABAAIABAAIAEAAIAAABIABAAIAAABIABABIABAAIAAACIABAAIACABIABAAIAAgBIACAAIAAAJIABABIADAAIAAACIABABIABAAIABAAIACAAIABABIABAAIABABIADAAIAAAFIgBAAIAAABIgBABIgBABIAAABIgDAAIAAACIgEAAIgCABIgCACIAAABIgBAAIgBgBIAAABIgEAAIgHABIADAJIAAABIABAEIgBAAIgCABIgEABIANAHIgGAKIgCACIgBAAIgEAGIgCADIgBABIgLAFIgCACIgKAEg");
	this.shape_2.setTransform(0.3,-0.3);

	this.timeline.addTween(cjs.Tween.get(this.shape_2).wait(1));

	// Capa_4
	this.shape_3 = new cjs.Shape();
	this.shape_3.graphics.f().s("#65653D").ss(0.5,1,1).p("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");
	this.shape_3.setTransform(-6.3,0);

	this.timeline.addTween(cjs.Tween.get(this.shape_3).wait(1));

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = new cjs.Rectangle(-111,-77,222,154);


(lib.graph_03 = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// Capa_1
	this.shape = new cjs.Shape();
	this.shape.graphics.f().s("#FF3399").ss(0.2,0,0,22.9).p("AnLKPIOXAAIAA0dIuXAAg");

	this.timeline.addTween(cjs.Tween.get(this.shape).wait(1));

	// Capa_2
	this.shape_1 = new cjs.Shape();
	this.shape_1.graphics.f("#FFFF00").s().p("AAjHKIAAgBIAAgBIgBAAIAAAAIgBAAIAAgBIgBgBIgBAAIAAABIgCAAIAAABIgBAAIgBABIgBgBIgBAAIgBABIgBABIgBAAIAAgCIgBABIAAgBIgBAAIAAgBIgBAAIAAgBIABAAIAAgBIABAAIABABIACABIABAAIABgBIABAAIABgBIACAAIAAgBIgBAAIAAgCIABAAIABgBIACAAIAAgBIgBAAIAAAAIgBAAIAAgBIgBABIAAgBIgBAAIAAgBIgBAAIABgBIAAgCIABAAIABABIABAAIAAgBIABAAIAAgBIgCAAIgBgBIAAgCIgBAAIAAgBIgBAAIgBgBIAAgBIgDAAIAAgBIgBAAIAAgBIgBAAIAAgEIgBAAIAAABIgBAAIAAgBIABAAIABgBIABAAIAAABIABAAIAAAAIABAAIAAgCIABAAIAAgBIABAAIAAgBIgBAAIAAgBIgBgBIgCgCIABAAIAAgCIgBAAIAAgBIgBAAIgBAAIABAAIAAgFIABAAIAAgCIgBAAIAAAAIgBAAIAAgBIABAAIgBgCIgCAAIAAgBIgBAAIAAgBIABAAIAAgBIgCABIAAgBIAAAAIAAgCIACAAIAAgBIACAAIAAgBIAHAAIABgBIABAAIAAAAIgEAAIAAAAIgIAAIAAgBIgBAAIAAgGIABAAIAAAAIABAAIAAgBIADAAIAAABIgCAAIABABIAAABIABAAIAAAEIAEAAIACgBIAFAAIAAgBIACAAIAAACIAAAAIAAABIABAAIAAAEIABAAIAAABIABABIAAABIACAAIAAADIABAAIAAABIABAAIAAAEIABAAIAAABIABABIgBAAIAAABIABAAIAAABIABAAIAAACIABAAIAAACIABABIAAADIABAAIABABIAAABIADAAIAAAAIABAAIAAgBIABAAIAAgBIABAAIAAgDIgBAAIAAgBIgBAAIAAgBIABgBIAAgCIABABIABAAIgBgBIABAAIAAgCIgBAAIAAgCIABAAIAAgCIABAAIAAgBIABgBIAAAAIABAAIAAgBIABgBIgBgBIAAgBIABgBIAAABIABAAIAAgBIABAAIAAgBIABABIABAAIAAgBIABAAIAAADIABAAIAAABIACAAIABgBIAAgBIABAAIAAABIABAAIgBABIAAACIgBAAIAAABIgBAAIAAABIgBAAIAAADIgBAAIAAACIgBAAIAAACIgBAAIAAACIACAAIAAgBIABAAIAAACIgBAAIAAABIABABIABAAIAAABIABAAIAAgCIADAAIABABIAAACIABAAIgBABIgBAAIAAABIgBAAIAAgBIAAAAIAAABIgBAAIgBAAIAAgCIgBABIgCAAIAAABIACAAIAAABIACAAIAAABIABAAIAAgBIAAABIAAgCIACAAIABAAIAAgBIACgBIAAABIABABIABAAIABgBIAAgDIABAAIAAACIACAAIAAgBIACAAIAAABIgBABIABAAIABABIgBAAIAAAAIgBABIAAABIgBAAIAAgCIABAAIgEAAIgBAAIAAACIgBAAIAAgBIgBABIAAgBIgCAAIABABIAAADIgCAAIABADIgBgBIgBAAIAAABIgBAAIAAACIADAAIABABIABAAIAAABIACAAIAAABIgBAAIAAABIACAAIAAABIgBABIgCAAIAAABIABABIgBAAIAAAAIABAAIAAABIgFAAIgBgBIAAABIAAAAIAAABIABAAIAAACIABAAIAAACIgBAAIAAgBIgBAAIAAgBIgBAAIAAACIgBAAIAAgBIgBAAIAAACIgBAAIAAABIADAAIAAAAIgEAAIAAAAIgDAAIAAgCIgCAAIAAgBIgBAAIAAABIgBAAIAAABIgBAAIAAgBIgCAAIAAABIgBAAIAAgBIgCAAIAAgBIAAAAIAAgBIAAgCIAAgCIABAAIAAgCIgEAAIgBABIAAABIgBAAIAAAAIgBAAIAAABIgBAAIABADIgDgCIgGAAIAAACIABAAIAAABIgBAAIAAABIgBABIgBgCIAAACIABAAIAAADgABfHCIABgBIABAAIAAABIgBAAIgBACgABhHBIAAgBIABAAIAAgBIACAAIAAgBIACABIAAABIgBAAIAAAAIgCAAIgBABgABhHBgABUG/IAAgBIABgBIAAgBIgBgBIACAAIAAAEIgBABgAATGgIAAgDIgBAAIAAgBIACAAIAAABIABAAIAAABIgBAAIAAACgABGGWIAAgBIgCAAIAAgBIABgBIABABIABAAIAAgBIAAgBIAAgBIAAAAIAAAAIABAAIABAAIAAABIgBAAIAAABIgBABIAAABIAAABgAAYGIIAAgBIADAAIAAABgABZF/IgBAAIAAAAIgBAAIgBgBIAAABIgBAAIAAgBIgCAAIABgBIgBAAIgBgBIAAgDIABgBIgCAAIAAgCIABAAIAAgCIADAAIAAABIABAAIAAABIgBAAIAAABIABAAIAAABIACAAIABgBIAAgBIACAAIAAACIABAAIgBAAIABAAIAAABIACAAIgBABIACADIgCAAIAAABIgDAAIgBABIABAAIgBAAIAAABgAgll/IgBgBIAAgBIgBABIgCAAIAAgBIABgBIABAAIAAgCIgBAAIgBgBIAAABIgBAAIAAABIgBAAIAAgBIgBAAIAAgBIgBAAIAAgBIABAAIACgBIgDgEIgBAAIAAgBIgBAAIgEgDIgBAAIgBgBIAAgBIgBAAIgBgBIABAAIgBgBIAAAAIAAgCIgBAAIgEADIABAAIgBABIgBAAIgBABIgDACIAAgBIgCAAIAAAAIgBAAIAAABIgCAAIgBABIgBAAIAAgBIgBAAIAAABIgCAAIAAgBIABAAIAAgGIgDAAIgCABIgCAAIAAABIgBAAIAAABIgBAAIAAABIgDAAIAAgBIABgBIAAgDIgBAAIABgBIABAAIAAgBIgDAAIAAgBIgDAAIAAADIgBABIAAABIgCAAIAAgDIABgBIgBAAIAAgBIgDAAIgBABIgBAAIAAgBIgDAAIAAgBIABgBIAAgFIABAAIAAgCIADAAIAAABIADAAIAAABIgBABIAAAEIgBABIABAAIAAAAIADAAIAAAAIAAAAIAAgBIACAAIAAABIAEAAIAAgBIABAAIAAABIABAAIAAgCIACAAIAAABIABAAIAAABIACAAIABAAIACAAIAAABIACAAIAAABIABAAIAAgBIgBgBIACAAIgBAAIgBgBIAAgBIABAAIAAABIABAAIABABIABAAIACgCIAAgCIgBAAIAAgBIgBAAIAAgBIgBAAIACgCIACABIABgCIgBgBIgBAAIAAgBIgDAAIABABIgEAAIAAgBIgBAAIAAgBIAEAAIAAgBIgBAAIAAgCIgBAAIAAgBIgBABIgBgCIAAgBIgBAAIAAgBIABAAIAAgDIABAAIAAgBIAAgBIAAgBIgBgBIAAAAIgGAAIAAgBIgBAAIAAgBIgCAAIAAgBIgDAAIAAABIgCAAIAAgBIABAAIgBgBIABAAIABgBIAAgBIgBAAIAAgBIgBAAIABgCIAAgBIgCAAIAAAAIACAAIAAgBIACAAIAAgBIABAAIAAgDIgBAAIAAgDIAAAAIAAgBIACAAIAAgBIACAAIAAABIABABIACAAIAAABIABABIABAAIAAABIACAAIAAABIABAAIAAACIAAAAIAAABIADAAIABgBIACAAIAAgCIACgCIABAAIABgBIACAAIACABIABABIACABIADAAIACACIADACIACAAIABAAIADACIABABIABAAIAAABIABABIAAADIABAAIABABIABABIADACIABAAIAAABIABADIACACIAAACIACADIABABIAAABIABABIAAABIABAAIAAABIABAAIABAAIABACIACACIAAACIABABIAAACIABAEIgBABIgCAAIAAABIgCAAIAAABIgGAAIgBABIADAAIgBABIACABIgBAAIAAACIgBAAIAAADIgBAAIAAABIgBABIAAAAIgBAAIAAACIgBAAIAAgBIgBAAIAAABIgCAAIABABIgDABIAAgBIgBAAIAAABIAAABIAAABIAAAAIAAABIABAAIgBABgAgPmDIAAgEIACAAIAAAAIABAAIABABIAAABIABABIgDAAIAAABgAhWnFIABAAIgBABgAhbnEIAAgBIgBABIgBgBIABAAIAAAAIgFAAIAAgBIABAAIAAgDIAFAAIABABIABAAIABABIACABIABABIgBAAIAAAAIgBAAIAAAAIgCAAIAAABgAhVnFg");
	this.shape_1.setTransform(-10.9,-6.8);

	this.timeline.addTween(cjs.Tween.get(this.shape_1).wait(1));

	// Capa_3
	this.shape_2 = new cjs.Shape();
	this.shape_2.graphics.f("#394C64").s().p("Ah9IMIAAgBIgBAAIAAgBIgBAAIAAgBIgBAAIAAgBIgBAAIAAgBIAAAAIAAgBIgBAAIAAgBIgCAAIAAgBIgCAAIAAgBIgBAAIAAAAIgBAAIAAgBIgBAAIAAgBIgCAAIAAgDIAMgEIgBgCIAAgGIABgBIAAgDIABgDIAAgCIABgBIgBAAIgCgCIAAgBIADAAIAAgBIADAAIAAABIgBAAIAAACIABAAIAAABIABAAIAAADIAAAAIAAgBIADAAIAAgBIADAAIAAgGIgBgBIAAgFIgBAAIAAgDIABAAIAAgCIABAAIAAgFIABgDIAAgGIABgDIACgBIgCgBIgBAAIAAgBIgBgBIgBAAIAAgBIgBAAIAAgBIgBAAIAAgBIgBAAIAAgBIgCAAIgBgBIgDAAIADgBIACgCIABAAIACgCIABAAIAAgDIgBAAIAAgBIgBAAIAAgBIgBAAIAAgCIgBgBIgBAAIAAgBIgBAAIAAgBIgDAAIgEACIAAABIgCAAIAAgBIgEAAIgEgEIgBgJIACgEIgBAAIAAgBIAAAAIAAgBIgCAAIAAgCIgDAAIAAgDIABAAIAAgBIACAAIAAgCIgCgBIgBAAIAAgBIgBAAIAAABIgCAAIAAgEIgBAAIAAgDIABAAIAAgBIAAgCIAJgDIgBgCIAAAAIAAAAIgBAAIAAgCIgBAAIAAgCIgDAAIABgCIgBAAIAAgBIgBAAIAAgBIgCAAIAAAAIAAAAIAAgBIgBAAIgBgBIgBAAIgBgBIgDAAIAAgBIgBgBIgBAAIAAgBIgBAAIAAgBIgBAAIAAgCIAAAAIgBgBIgDgBIgBgCIgBgBIgEgEIAAAAIgBAAIAAgBIgBAAIAAgDIgBAAIAAgDIgBAAIAAgBIgBAAIAAgBIgCAAIAAgBIgBAAIAAgCIAAgBIgBAAIAAgDIABAAIABgBIADAAIAAABIABAAIAAgCIgFgDIABgCIgCAAIgEgBIgCAAIAAgCIgCgEIAAgBIgBAAIAAgBIgBAAIAAgCIgDAAIgLADIgBABIgRACIgFgIIABgSIgCgnIgBgGIAAgKIADAAIgBgCIgEgBIgBgDIAAgCIgBgCIAAgCIAGgLIACgCIACAAIAIgJIAFgfIgEAAIgKgBIACgPIACgJIgGAAIgCgFIACgCIAAgDIgBgBIABAAIAAgBIABAAIAAgBIABAAIAAgCIABAAIAAgFIgBgBIAAgHIABAAIAAgCIAIgBIAAgVIAMgCIAJgEIAAgBIgLgKIAAgBIgVgRIAAgWIADAAIABABIATAAIAAAFIgBACIACABIgDACIAAACIABAAIAAgBIABAAIAAABIABABIAAACIABAAIAAABIABAAIAAABIACAAIAAABIABAAIAAAAIAAAAIAAAAIABAAIAAAAIABAAIAAAAIgBgBIAAgBIgFgGIAIgEIABgBIABAAIACgCIgDgDIABAAIABAAIAaAAIACAFIABABIAAACIAcAAIgBgCIgCgDIgDgEIgCAAIgBgBIgBgBIADgGIAFACIgBgBIAAgBIABAAIABgBIACAAIAAgBIABABIABAAIABgBIABAAIAAgBIAFAAIAJADIAAABIAQAEIACABIACAAIAIACIgBgBIAFAAIAEgBIAagBIAEgBIAMAAIgCACIgBABIAAABIgDAIIAAAFIAAAEIAGADIACABIADAAIANAFIgCABIAAABIgBABIAAADIADAAIAAADIABAAIAAABIABAAIAAgCIAAAAIAAgCIAAgBIAAgBIAAAAIAAgCIABAAIAAgBIABAAIABAAIAtAAIAAARIAPAAIgBAYIA3AAIAAACIgBAAIAAABIgBAAIAAABIgGAAIAAACIgBAAIAAACIAAAAIAAACIgBAAIAAABIgBABIAAACIABAAIAAAHIABAAIAAABIABABIABAAIADADIABAAIAAgBIABAAIABgBIADAAIACgBIAFAAIAAABIADAAIAAABIABAAIAHgBIABgBIAFAHIAAACIgBAAIAAABIgBAAIAAABIgCAAIAAABIgBAAIAAABIABABIADAAIAAABIACAAIAAABIABAAIABABIADAAIAAABIABAAIAAgBIABAAIAAABIgBAAIACACIABAAIAAABIABAAIAAADIAAAAIAAABIABAAIACgBIAEACIAAABIAWAXIAAABIACABIANAJIAEABIAQAAIADgCIACAAIAAABIABAAIAAABIABAAIgBABIABAAIABABIAAADIACAAIABABIAAACIgBAAIgBABIgBAAIAAABIAAAAIAAABIgBAAIAAAGIgCAAIAAABIABAAIAAAEIgBAAIAAABIgDAAIAAADIgBAAIgBABIAAABIgBAAIAAAAIgGAAIAAACIACAAIAAAEIgCABIAAABIgCAAIAAAAIABAAIgDAFIgBACIgBABIAIAIIAAABIAMAMIAAgEIAEgBIADgBIAOAEIADgBIAEAAIACABIAEgCIAIgFIABACIACADIABAEIABAAIABAAIAHgCIAIgDIADAEIADAFIAAABIAHAHIACACIABABIAGAKIAFAFIADAFIABABIACAAIADAGIADACIACACIACADIAFAGIADABIgDACIgNADIgEAAIgBABIgCAAIAAgBIgBAAIgBAAIAAgBIgCAAIgBgBIgFAAIgCgIIgNADIgCgBIgBAAIAAgBIgBAAIgBABIgEAAIAAABIgDAAIAAAAIAAAAIgBABIgBAAIAAgFIACgGIgtALIgCAAIAAgBIgBAAIgCAAIAAgBIgBAAIAAgBIgBAAIgLgJIgOAVIgGgNIgPAIIgBABIAAAAIgFgGIgDAAIAAgBIgBAAIAAgCIgBAAIAAgBIgCAAIAAgBIgBAAIgBABIgBAAIAAgBIgBAAIAAgBIgBAAIAAABIgBABIgBAAIAAABIgBAAIAAABIgBABIAAADIgDAAIAAACIgBAAIgBABIAAACIAAAAIAAAAIgBAAIgBABIgBAAIAAABIgCAAIAAABIgBAAIgBABIgBAAIAAABIgBAAIAAACIgBAAIAAgBIAAAAIAAACIgBAAIAAACIgBAAIAAABIgDAAIAAAAIgBAAIAAAEIgIAAIAAABIgBAAIAAABIgBAAIAAABIgCAAIAAAAIgDAAIACALIgWAKIgCACIAAgDIgBgBIgBAAIAAABIABAAIAAACIgBAAIAAABIABAAIAAADIgBAAIAAABIAAABIAAABIgBAAIAAABIgBAAIAAABIgBAAIAAAFIABABIgDAAIAAAAIgBAAIAAABIABAAIAAABIgEAAIAAABIgBAAIAAgBIAAAAIAAgBIgEAAIAAgBIgEAAIAAAAIgBAAIAAgBIgBgBIgBAAIgDgEIgBACIgBgCIgBAAIAAgBIgBAAIAAgBIAAAAIAAAAIgBAAIAAgBIgBAAIAAgCIgCAAIAAANIgFAAIAAgBIACAAIAAgBIACAAIAAAAIgCAAIAAgCIgBAAIAAACIgBAAIAAgDIgEAAIAAgBIgDAAIAAgCIgGAAIAAADIgDAAIAAAGIgRAAIAGAFIAAACIABAAIABABIABAAIAGAHIAAAAIABAAIAAABIABAAIAAABIgGAGIAAABIgHABIAAAAIABACIABACIAAABIAAAAIAAAEIACAAIABACIACAEIAAABIADAUIgIgBIAAgJIgBgBIgBABIAAADIgCAFIgDAAIAAACIgCAAIAAAAIABAAIAAABIgBAAIAAAFIABAAIAAABIABAAIAAABIgBABIAAABIABAAIAAACIgBABIgBABIAAABIgCAAIgCgCIgFAAIAAABIgHAAIAAABIgBAAIgCABIgBAAIACACIAAABIgCAAIAAABIgEAAIAAgBIgBAAIgCgBIgDAAIgFAAIgCAAIAAAAIgEAIIgBAAIAAgBIgCAAIAAgBIAAAAIAAACIgBAAIAAACIgBABIAAABIgCABIACABIAAABIgEAEIgBABIgBACIgIAAIAAATIgGgBIgDAAIgGgCIgEgBIgIAAIgMAFIgQABIgBAAIAAABIgEAAIAAABIgBAAIAAABIgBAAIAAABIgBAAIgBABIAAgBIgEAAIAAABIgCAAIAAABIgCAAIAAABIgBAAIAAABIgBAAIAAABgAkglPIgBgBIAAgCIABAAIAAgBIABgBIgBAAIAAgCIgCAAIAAgBIgBAAIAAgBIgBAAIAAgBIgBAAIAAgCIgBAAIAAgBIgBAAIAAgBIgBAAIgBAAIAAgCIgBAAIAAgCIgBAAIAAgBIgBAAIAAgCIgBAAIAAgBIgBAAIAAgDIAAAAIAAgCIgBAAIAAgCIgCAAIAAgDIgLAAIgJgdIAfgJIgBgJIAeAAIAAgCIAEgCIAGgCIAAAAIAGgCIgKgHIAEgEIgBAAIgBgBIgBAAIgBgBIgCAAIAAgBIgDAAIAAgBIgBgBIgBgBIAAAAIAAgCIgBgCIABAAIAAgBIAAAAIAAgcIgDAAIAAgBIgMABIgBAAIAAgBIgBAAIgBgBIgDAAIAAgBIgDAAIAAAAIgEAAIAAgBIgBAAIAAABIgBAAIAAgBIgCAAIAAgBIgBAAIAAABIgCAAIAAgBIgBAAIAAABIgBAAIAAgBIABAAIAAgCIAAAAIAAgBIABAAIAKgMIAAgDIAAAAIgBgDIAAgDIgBgCIAAgEIgBgCIAAgCIgBAAIAAAAIgCAAIgBgBIgBgDIAAgEIgBgBIAAgCIgBgBIBhAAIAAABIABABIABAAIAAABIABABIABAAIAAABIABABIABAAIAAABIADAAIAAABIABAAIAAACIAAAAIAAABIADAAIABgBIACAAIAAgCIACgCIABAAIABgBIABAAIACABIABABIADABIADAAIACACIADACIACAAIABAAIACACIABABIABAAIAAABIABABIAAADIACAAIABABIABABIADACIABAAIAAABIABADIACACIAAACIACADIABABIAAABIAAABIAAABIABAAIAAABIABAAIABAAIABACIADACIAAACIABABIAAACIABAEIACACIAAACIACAFIAAACIABAAIAIAEIACABIAAABIACAGIAAAAIAAAAIAAABIACACIABAAIAAABIACAFIAAACIABAAIACADIABABIABAAIAAABIABAAIAFABIAAABIgDAAIAAABIgBAAIgCABIAAABIAAABIgBAAIAAACIgBAAIgBABIAAABIgBAAIAAAAIgCACIgBAAIAAABIgBAAIgBABIgBAAIgBgCIgGgEIgGASIAEAAIABAMIACAAIAAACIgCAAIAAANIgFABIAAAEIACABIABADIABgDIABgBIAAAXIgCABIgDABIgBABIgIADIgFgEIgEgBIgBgBIgFgEIAAAFIgBACIgCADIgFgCIABgIIgiAAIABADIABAHIgYABIAAgBIgCAAIAAABIgBAAIAAgBIgEAAIAAABIgBAAIAAgBIgBAAIAAgBIgDAAIgCgCIAAgBIgBAAIgBgBIgBAAIAAAAIgEAAIAAAAIgCAAIAAABIgEAAIAAABIgKAAIgBABIgHAAIAAAHIgJADIgJABg");
	this.shape_2.setTransform(1.3,-0.2);

	this.timeline.addTween(cjs.Tween.get(this.shape_2).wait(1));

	// Capa_4
	this.shape_3 = new cjs.Shape();
	this.shape_3.graphics.f().s("#65653D").ss(0.5,1,1).p("AHMA6QgBgBgegIQgGgCgPgMQgUgPgDgCQgHgFgGgPQgIgTgFgHQgBgCgMgOQgIgLgDgHQgHgVADgaQADgagLgQQgSgSgLgRQgDgFgDAAQgBAAgEgOQgCgNgCgKQgEgOgGgGQgGgGgNgEQgEgOgBgCQgBgBgNgEQgJgDgFgFQgGgFgFgEQgKgHgggLQgdgKgFgGIglgfQgKgGgHgOQgHgMgdgOIgNgIQgFgCAAgBQgDgEgBgBQgNgQgOgLIgOgKQgQgSgHgCQgLAAgRgHQgXgJgMgRQgNgWgJgPQgLgRgGgGQgLgKgPAAQgLABgCgDQgDgEgJgBIkEAAIAASdIOXAAg");
	this.shape_3.setTransform(0,6.4);

	this.timeline.addTween(cjs.Tween.get(this.shape_3).wait(1));

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = new cjs.Rectangle(-47,-66.4,94,133);


(lib.graph_02 = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// Capa_1
	this.shape = new cjs.Shape();
	this.shape.graphics.f().s("#FF3399").ss(0.2,0,0,22.9).p("Ao0H5IRpAAIAAvxIxpAAg");

	this.timeline.addTween(cjs.Tween.get(this.shape).wait(1));

	// Capa_2
	this.shape_1 = new cjs.Shape();
	this.shape_1.graphics.f("#FFFF00").s().p("AEcETIAAgEIABABIABAAIAAABIABAAIAAABIgBAAIAAABgAEHD6IAAgBIgBAAIAAABIgBAAIAAgBIgEAAIAAgCIACAAIAAgBIACAAIAAgBIACAAIAAABIABAAIAAABIABAAIAAABIgCAAIAAACgAEuD2IAAgBIgCAAIAAABIgBAAIAAgDIgBAAIAAAAIAGAAIAAADgAEJDjIAAgBIgCAAIAAAAIABAAIAAgBIACAAIAAACgAEeDhIAAgCIgBAAIAAACIgBAAIAAgFIgBAAIAAAAIgBAAIAAgBIABAAIAAgBIABAAIAAgBIgDAAIAAgBIgBAAIAAgBIAAAAIAAgBIAAAAIAAgCIgCAAIAAgBIABAAIAAgCIgEAAIAAgBIACAAIAAgBIABAAIAAgBIABAAIAAABIABAAIAAgBIABAAIAAgBIACAAIAAgBIgBgCIABAAIAAAAIABAAIAAgBIAFAAIAAgEIABAAIAAACIABAAIAAgCIAGAAIAAABIgEAAIAAABIgBAAIAAACIAEAAIAAABIABAAIAAAAIgBAAIAAAEIABAAIgBABIABAAIAAAAIADAAIAAACIgBAAIAAACIgBAAIAAAFIACACIABAAIABABIABAAIAAABIACAAIABACIABAAIAAACIgBAAIgCgCIgDAAIAAgCIgBAAIAAgBIgBgBIgBAAIAAABIgCAAIAAADIgBAAIAAABIgCAAIAAABIgBAAIAAABgADtDcIAAgDIgBAAIAAgBIACAAIAAABIADAAIAAgBIADAAIAAACIgFAAIAAACgAEODUIAAgCIgBAAIAAgCIABAAIAAgBIADAAIAAACIACAAIAAABIACAAIAAABIgEAAIAAABgAETDRgAERDPIAAgBIAAgBIAAABIAAgBIABAAIgBgBIgBAAIAAgCIABAAIABgBIAAABIADAAIAAADIABAAIAAABIgBAAIAAgBIgCAAIAAACgAEqDKIAAAAIAAAAIAAAAgAEpDJIAAgBIABAAIAAgBIACAAIAAgBIABAAIAAACIgBAAIAAABgAEcDFIAAgBIABAAIAAABgAEcC/IAAgCIABAAIAAAAIABAAIAAgCIgBAAIgBABIAAgBIgCAAIAAABIgCAAIAAgCIAAAAIAAgCIAAAAIAAAAIABAAIAAgBIABAAIAAgBIABAAIAAACIABAAIABAAIAAAAIABAAIAAAAIACAAIAAgBIABAAIABgBIAAgCIABAAIAAABIABAAIAAABIADAAIAAACIgCAAIAAACIACAAIAAgCIABAAIAAACIABAAIAAABIgEAAIAAACIgBAAIAAAAIgBAAIAAAAIgBAAIAAAAIgBAAIAAAAIgCAAIAAACgACZCtIAAgBIgCAAIgCAAIAAgBIACAAIAAgBIABAAIAAgBIACAAIAAABIAAAAIAAACIAAAAIAAABgAC+CrIAAgBIAAAAIgBABIAAgBIgBAAIAAgBIgBAAIAAgBIgCAAIAAgCIgBAAIAAgBIgBAAIAAgBIgBAAIAAgBIgBAAIAAgCIABAAIAAABIABAAIAAABIABAAIAAABIABAAIAAgBIACAAIAAABIABABIABAAIAAgBIABAAIAAABIAAAAIAAABIAAAAIAAAAIAAAAIABACIABAAIABABIgBAAIAAABIgBABgAAKBlIAAgCIABgBIgBAAIAAgCIgCAAIAAgDIgDAAIAAgDIACAAIABgBIAAgCIABAAIAAgBIgBAAIAAgBIgDAAIAAABIgCACIABAAIgBABIABABIgBAAIAAABIgBAAIgBgBIABAAIAAgEIgBAAIAAgBIgBAAIABgBIAAgBIABAAIAAgCIAAAAIAAAAIABAAIAAgBIABAAIAAgBIABAAIgBgDIgCAAIAAAAIABAAIAAgCIABAAIAAABIABAAIAAADIACAAIgCABIADAAIAAgBIABAAIAAgCIABAAIAAAAIACAAIAAgBIABAAIAAABIgBAAIABAAIgBACIAAABIgBAAIAAABIgCAAIAAABIgBAAIgBAAIABAAIAAABIABAAIAAACIABABIAAgBIAAABIABAAIAAgBIABAAIAAgBIACAAIAAgBIADAAIABgBIACAAIABAAIACAAIAAABIACAAIABgBIAAAAIABAAIAAAAIgBABIAAABIABAAIAAABIgBABIgBAAIAAADIgDAAIAAgBIgBAAIAAgBIgCAAIgBABIAAACIgBAAIAAACIgBAAIAAgBIgBAAIAAACIgBAAIAAABIgBAAIAAABIADAAIAAAAIACAAIAAgBIABAAIAAABIABAAIAAAAIgBACIgBAAIAAACIgCAAIAAABIgBAAIAAAAIgBAAIAAAAIgBgBIAAABIgBAAIAAABIgBAAIAAABgAAWBkIAAgCIADAAIAAgBIABAAIAAACIgDAAIAAABgAAZBgIAAgCIABAAIAAACgAAaBeIAAAAIABAAIAAAAgAAaBegAAXBdIAAgBIAEAAIgBABgAAmBRIAAAAIAAgBIgBAAIAAgCIgBAAIAAgCIgBgBIAAgEIABAAIABgBIABABIAAgBIAFAAIAAABIABABIAAgBIABAAIAAgBIABAAIAAACIABAAIAAABIACAAIAAACIABAAIAAABIADAAIAAADIgEAAIAAgBIgEAAIAAABIgBgBIgDAAIgBACIgCABgAkWinIgBgBIgBAAIAAgBIgEAAIAAgBIgBAAIAAgBIgBAAIAAgBIAAAAIAAgBIgCAAIAAgCIACAAIAAACIAAAAIACACIAAABIABAAIADAAIAAAAIgCAAIAAgBIADAAIAAABIACAAIAAAAIACAAIAAABIgBAAIAAABIgBAAIAAABIAAAAIAAABgAiTisIAAgBIgEAAIAAABIAAAAIAAgBIgBAAIgBABIgBAAIAAgBIgEAAIAAgCIgCAAIAAgBIAAAAIAAgBIABAAIACABIAGAAIABAAIADAAIAAAAIABAAIAAABIABAAIAAADgAkniwIAAgBIACAAIAAABgAkqixIAAgBIgGAAIAAgBIgBAAIAAgBIgBAAIAAgBIABAAIAAgCIABAAIAAACIACAAIAAABIgBAAIAAABIACAAIAAgBIAFAAIgBABIABAAIgBABIABAAIAAABgAANjYIgBABIgCAAIABgBIgBAAIAAgBIABAAIAAgBIgBAAIABgBIAAgBIgBgBIAAADIgBAAIAAgDIgBAAIAAABIgBAAIAAABIgCAAIAAgCIgBAAIAAACIgBAAIAAACIgBAAIAAgBIgBAAIAAgDIABAAIAAgBIgCAAIAAABIgCAAIAAgCIgEAAIAAADIgBAAIAAgDIgBgBIAAAAIgCgBIgCABIgCAAIgBAAIAAAAIgBAAIgBAAIAAgBIABgBIABAAIAAgBIAAAAIAAgDIABgBIABAAIgBAAIAAgBIgBAAIAAABIAAAAIAAgDIgEAAIAAABIgCAAIAAgCIABAAIAAgBIABgBIADAAIAAgBIABAAIAAABIAAAAIAAgBIABAAIACgBIgDAAIAAgBIgBAAIABgBIAAgBIAAAAIAAAAIgBAAIAAAAIgBAAIABABIgCAAIAAgBIgBAAIAAABIABABIgDAAIAAgCIgCAAIAAABIgBAAIAAgBIgCAAIAAAAIgBAAIAAAAIgBAAIAAABIgCAAIAAgBIgDAAIAAABIAAAAIgBABIAAgBIgBABIAAgBIgBgBIABAAIAAgBIABABIABAAIAAgBIAGgEIgBgBIAAgBIACABIAAgBIgBAAIgBAAIgCAAIgBAAIgBAAIgBAAIAAAAIAAAAIgBAAIAAgCIABgBIAAgBIAAABIADAAIADgBIgBAAIAAgCIgDAAIAAgBIgBAAIAAgCIgBAAIAAgCIABAAIAAACIAEAAIABABIAAADIACAAIAAgBIADAAIAAgDIABAAIAAgBIgBAAIAAgCIABAAIgBgCIACAAIAAACIACAAIAAgBIgBgBIABAAIAAgDIgBAAIAAgBIgBAAIAAAAIACAAIAAgBIgCAAIAAgBIADAAIAAACIABAAIABgBIAAABIABAAIAAAAIACAAIACAEIgCABIADAAIAAgBIABAAIAAABIABAAIAAgBIACAAIAAABIABgBIAAABIABABIABAAIAAgBIABAAIAAABIABgBIAAAAIAAABIAAAAIAAABIAAAAIAAABIACAAIAAABIgBAAIABABIAAABIAAAAIAAABIAAABIABAAIAAACIABABIABAAIAAABIACAAIABABIABgBIAAgBIABAAIAAABIAAAAIAAABIABAAIAAgDIgCAAIAAgCIABAAIAAABIABAAIAAgBIgBAAIAAgBIABAAIAAgBIABABIACAAIABABIACAAIAAABIgBAAIAAABIgBAAIAAABIgBAAIAAABIgBAAIABABIgBAAIgBAAIAAABIgBAAIAAABIgBAAIAAACIABAAIAAABIgBAAIAAABIAAAAIAAAFIgBAAIAAACIgBAAIAAACIABAAIAAADIABAAIAAABIABAAIAAgBIgBAAIAAAAIAFAAIAAAAIABAAIAAAEIgCAAIABABIgBAAIAAABIABABIAAADIgBAAIABABIgBABIAAABIABAAIAAABIgBAAIABABIgBABgAgIjgIABAAIAAAAIAFAAIABAAIgCAAIAAgCIgEAAIAAABIgBAAgAgcjsIAAgBIACAAIAAABgAAIj/IAAgBIACAAIAAABgAgHkJIAAgBIgBAAIAAgBIABAAIAAACgAAUkKIgBgBIgBAAIAAgHIABAAIAAABIABAAIAAAHgAAOkLIACgCIABAAIAAACIgBAAIAAgBIgBABIgBAAgAgPkMIgBgBIABAAIAAABg");
	this.shape_1.setTransform(3,4.5);

	this.timeline.addTween(cjs.Tween.get(this.shape_1).wait(1));

	// Capa_3
	this.shape_2 = new cjs.Shape();
	this.shape_2.graphics.f("#394C64").s().p("AAlCdIAAgDIgBAAIAAgCIAAAAIAAgCIgBAAIAAgBIgBgBIAAgCIgBAAIAAgDIgBAAIAAgBIgBgBIAAgCIgBAAIAAgCIgBgBIAAgCIgBAAIAAgCIgBgBIAAgIIABgBIAAgDIABgBIAAgCIABAAIAAgBIACAAIgBABIAAACIABABIABgCIgBAAIAAgBIABAAIAAgFIABAAIAAgFIABAAIAAgBIgBAAIAAgHIgBAAIAAgBIgBgBIAAgGIgBgCIAAgDIgBgBIAAgGIABAAIAAgBIABAAIAAgBIABAAIABgBIAAgBIABAAIAAgBIABAAIAAgCIABAAIAAgCIABAAIAAgDIABAAIAAACIACAAIAAgBIABAAIAAgBIACAAIABABIABABIACAAIAAgBIABABIABAAIAAgBIgBAAIAAgBIABAAIAAgBIABAAIAAABIAFAAIAAgCIgBgBIAAgBIgBABIAAgBIgCAAIgCgCIgBAAIAAgBIgBAAIgBgBIAAgBIgCAAIgCgCIgCAAIAAgBIgFAAIAAgBIgCAAIgBgBIgCAAIgBABIgCAAIgBABIgCAAIgBgBIgCAAIAAgEIgBAAIAAgBIgCAAIgBgBIAAACIgBAAIAAABIgBAAIABABIgEAAIAAABIgCAAIAAgBIgCAAIgCgCIgCAAIgBgBIgBAAIgBgBIgCAAIgBgBIgCAAIgCgBIgEAAIgCgBIgFAAIgBgBIgEAAIAAgBIgEAAIAAgDIgBAAIAAgCIgBAAIAAgBIgBAAIAAgCIgFAAIAAgBIAEAAIAAgBIgBgBIAAgCIgBAAIAAgBIgBAAIAAgBIgBAAIAAgBIgCAAIAAgBIAAAAIAAACIgBAAIgBgBIgCAAIAAABIACAAIAAABIgBAAIAAABIABAAIAAABIgBAAIAAACIADAAIAAACIAAABIgBAAIAAABIgBAAIAAACIgBAAIAAADIgBAAIgBAAIAAADIgCAAIAAgBIgBAAIAAgBIgDAAIgBABIAAACIgBAAIAAACIgBAAIAAgBIgBAAIAAACIgBAAIAAABIgBAAIAAACIADAAIAAgBIACAAIAAgBIABAAIAAABIACAAIABgBIACAAIAAgBIADAAIABABIgBAAIAAACIgBAAIAAABIgCAAIAAACIABAAIAAgBIABAAIAAADIgCAAIAAADIgDAAIAAABIABAAIAAADIgCAAIAAADIgCAAIAAgCIABgBIgBAAIAAgBIgBAAIAAgBIgDAAIAAgBIgBAAIAAgBIABAAIAAAAIgCAAIAAgBIgCAAIAAABIgCAAIAAgCIABgBIgBAAIAAgBIgCAAIAAgBIgBABIAAABIgBAAIAAACIgCAAIAAABIgBAAIAAgFIgBAAIAAgBIABAAIAAgBIgCAAIAAgBIgCAAIAAgEIABABIAAgBIABAAIAAgBIADAAIAAgEIgBAAIAAgBIgFAAIAAAAIgBAAIgBgBIAAgBIAAgBIAAgBIgBAAIAAgCIABAAIAAgBIgBAAIAAgBIgBAAIAAgBIgDAAIAAgBIgLAAIAAABIgBAAIAAABIgBAAIAAABIgCAAIgBABIAAACIgCAAIAAADIgBAAIAAABIgBAAIAAgCIgBgBIAAABIgBgBIgBAAIgBABIgCAAIAAgBIgDAAIAAABIgDAAIAAgDIADAAIAAgCIgBAAIAAgCIgBAAIAAgBIgBAAIAAgBIgCAAIAAgBIgBAAIAAgCIgBAAIgBgBIgBAAIgBABIgBAAIAAgCIgBAAIAAgBIgDAAIAAABIgBAAIAAgBIgCAAIAAgBIgDAAIAAAAIgCAAIAAgCIgBAAIAAgCIgBAAIAAgCIgBAAIAAgCIgBAAIAAgBIgCAAIgBgBIgBAAIAAgBIgBAAIAAgCIgBAAIAAgBIgBgBIgBAAIgBgBIgCAAIgBgBIgCAAIAAgBIABAAIgBAAIgBgBIgBAAIAAABIgDAAIAAAAIABAAIAAgBIABAAIAAgBIgBAAIAAgBIgBAAIAAgBIgBAAIAAgBIgCAAIAAAAIgBAAIAAgBIgCAAIAAgCIABAAIAAgBIgDAAIAAgEIgBgBIAAgCIgBAAIAAgBIgBAAIAAgBIAAAAIAAgBIAAgBIAAAAIAAgBIgBAAIAAABIgBgBIAAgBIgBAAIAAgBIgDAAIAAgBIABgBIAAgBIgCAAIAAgCIgCAAIAAgBIgBAAIAAgBIgBAAIAAgBIABAAIgBgBIAAgDIABAAIAAAAIgBgBIAAgDIgBAAIAAgBIgBAAIAAgCIgBAAIAAgBIgBAAIAAgBIgCAAIAAgBIgBAAIAAgBIgDAAIAAABIgBAAIgBgBIAAgCIgBAAIABgBIABAAIAAgBIgBAAIAAgCIgBgBIgBAAIAAAAIgBAAIAAgBIgBgBIABAAIAAgBIABABIAZAHIACAAIgIgNIAGgGIAAABIABgBIgBAAIAAgBIAFgDIADAAIAAgDIABAAIAEABIAEAAIADABIAHAAIACABIAFABIACAAIAEgBIABAAIAAAAIgCgJIAAgGIAIAAIAJACIgCgGIAJgBIAIgCIABAAIAAgMIgBgEIAAgDIgBgBIAAgDIACgHIAMAGIAFgQIAEABIAAgCIAGgCIAFgCIgFgPIAagJIACACIAIABIAGAKIABAAIABAJIADABIABABIACABIACAAIABgBIADAAIADACIABAAIAAABIADAAIACgBIAAgBIADgEIAGAAIAAACIgBADIAAABIABAAIAFgBIACAAIACgBIACAAIAAAMIABACIANAEIAAgBIAAABIAAABIACABIAAABIAEAEIANgDIgEgFIAAgCIABgCIABgBIABAAIAFgFIAJABIAGAAIABgDIAEAAIABgDIABgHIAFABIgDAJIAHAAIgBgCIABgCIADgEIgBgCIAGAAIABABIABAAIAAABIABAAIABgBIADgFIAAgCIAFACIAFAAIACABIABACIAFAAIAFABIAOAAIAIAEIACACIABgBIABAAIAGgDIAAACIACAAIABgCIAGACIAGABIACgBIABAAIACgHIABAUIAAADIACAFIAAABIABgBIAFACIABACIgEACIAEAJIgEABIgBAAIACAHIgDABIABAEIgMAFIACAKIAAABIABAAIABABIAAABIABAMIAAABIgBABIgCAAIgLACIAFANIgHADIABABIABACIAFgCIgBALIAAACIgBAFIgGgEIgpgVIgFAIIAJApIgBAnIAnBhIAAABIgDAAIgDACIgCAAIgBABIAAAIIhzABgAgpAeIABAAIAAgBIgBAAgAAlBCIAAgBIABAAIAAABgAAbA7IAAgBIACAAIAAABgAAZA6IAAgBIgCgBIgCgCIADAAIAAABIABAAIAAABIABAAIAAACgAATA0IgBAAIgBgBIADAAIAAABIABABIAAABgAAVA2gAgjAuIAAgBIAAAAIAAgBIAAAAIAAABIACAAIAAABgAgdAsIABgBIACAAIgBABgAgaArIAAgBIABAAIAAABgAgZAqg");
	this.shape_2.setTransform(9.6,8.8);

	this.shape_3 = new cjs.Shape();
	this.shape_3.graphics.f("#6C829A").s().p("AE7F/IAAgCIAAgBIAAgCIgBAAIAAgBIgBgBIgBgBIAAgBIABAAIAAABIABAAIAAABIABAAIAAABIAAABIAAACIABAAIAAABIABAAIAAACgAE2F1IgCgBIgCgCIgCAAIgBgBIAAAAIgBAAIgDAAIgDgBIgBgBIgBgBIgEAAIgBgBIgEAAIAAABIgBAAIAAgBIgCAAIgEgEIAAAAIgBgBIgCgBIgBgVIgCAAIAAgCIACAAIAAgCIgBAAIAAg/IgCAAIAAgCIACAAIAAgNIgDAAIAAgCIABgBIAAgCIgBAAIAAgFIADAAIAAgFIAXAAIAAgDIAAgBIAAgPIgBAAIACgBIAAgCIABgBIAAgBIgBAAIAAgBIABAAIAAgBIgBgCIAAgBIgBgCIgBAAIAAgDIgBgBIAAgEIABgBIABgDIgCgCIACgCIAAgBIgBgBIABgCIgBABIgBAAIAAgCIgCgBIAAgCIABgBIgEAAIgBgBIgCgBIgBAAIgBABIgGAAIgBABIgCADIgBAAIgBABIAAgBIgCgBIgHAAIAAgBIgCABIgBgBIABgBIACAAIACgBIAAgBIABgBIAAgCIAAgFIABgDIAAgBIABgBIABAAIAAgEIABAAIAAgBIgBAAIAAgCIACAAIAAgBIgBAAIAAgBIgBAAIAAgBIABAAIAAgBIgBAAIAAgBIABAAIAAgBIgBgBIADgHIAAgDIACgCIAAgCIABgCIAAgBIABgBIAAgBIABgBIAAAAIAAgBIABAAIAAgBIgBAAIAAgDIABAAIAGgDIABAAIAAgEIgBAAIAAgBIAAgBIAAAAIAAgBIAAAAIAAgDIgEAAIgBgBIAAgBIABAAIgBAAIgBgBIAAgBIgBAAIAAgBIAAAAIAAgBIgBAAIAAgBIgBAAIAAgBIgBAAIAAgCIgBAAIAAgBIgBAAIAAgBIgBgBIgBAAIAAgBIgBAAIAAgBIgCAAIAAgDIgCgCIAAgBIgCAAIgDgCIAAgCIADgCIADAAIAAgCIABAAIAAgBIABAAIAAgBIABAAIgBgBIgBAAIAAgBIgBgCIABgBIAEgCIAAAAIADgCIABAAIAAgCIABgCIgPgHIABgFIAAgBIABgMIgEACIgCgCIgBgBIAHgDIgEgNIAKgCIACAAIABgBIAAgBIgBgMIAPAAIAAABIAEACIAJADIAIAEIACACIAFADIAAACIAAAHIAAACIAMAFIABAAIADgCIgDgBIgCAAIgBAAIABgHIAAgEIgBgDIAAgBIACAAIACgBIAAABIABAAIAAACIACAAIAAgCIAAAAIAAgBIAAAAIAAgBIABAAIAAgBIAGAAIAAgBIADAAIAAAAIACAAIACgBIAPgDIADAKIAXgEIgCgDIgNgDIgDgIIACgEIgGgTIAVAAIABACIAGAAIABABIABABIACAAIAZAFIAAAAIAAABIgBABIgBgBIgEAAIgBABIgBACIgBAAIgBABIAAABIAAAAIAAACIgBAAIAAACIABgBIAAABIABABIAAACIABACIAAADIgBAAIAAAGIgBAAIAAABIAAABIgBACIABABIgBABIAAABIgDAAIgBABIgBAAIAAABIgBAAIAAABIAAAAIAAACIgBAAIAAABIgBAAIAAgBIgBAAIAAgBIgCAAIgBgBIAAABIgBAAIAAABIgBAAIAAAFIABAAIAAABIABAAIAAACIgCAAIgBABIgBAAIAAAAIABABIAAACIgBABIAAACIALAAIAAAEIAEABIgEAFIAAAFIgQAAIgCAPIAFACIACAIIABAGIACADIADAEIAGAAIAAACIAFgCIABAAIAEgCIABAAIAEABIACAFIgCAAIADAEIABAAIgDAGIADADIACAAIACAIIADgBIgBADIgGAIIACADIgCACIAAACIgCABIgGgBIgBAAIAAACIgBgBIgCgBIAAABIgBgBIgBAAIgBABIgBAAIAAABIgDAAIgBABIgBABIgEAAIAAgBIgBAAIgEACIACAQIgGgHIgDABIAAgIIgBAAIAAAAIgEAAIAAADIABAAIAAACIgBAAIgBABIgBAAIAAABIgCAAIAAAEIgCAGIgBAAIAAABIgDABIAAABIABAAIAAABIgBAAIAAABIgCAAIAAABIgCAAIgCACIABACIgBABIAAABIgBAAIgBABIgBAAIgCACIACAEIADAHIAEgBIACAKIAAACIABAEIABABIgLACIABADIAAACIgCADIgIAGIgCABIACAAIABABIgBABIAAABIABABIAAABIgBAAIgCACIAAADIgBADIAPgBIAAABIAHABIABAAIACADIgKAEIAAAMIAKABIAAACIgIAHIAMAJIgBABIgBAAIgBABIAAABIgBgBIgBAAIgBgBIgCAAIgCgBIgGAAIAAgHIgCAAIAAAMIACACIgBACIAAABIgCgCIgMAAIAAAKIAFAAIAAAFIgCAAIACABIAAABIABAAIABACIABAAIAAgBIABAAIAAABIgBABIAAADIgBAAIAAABIgBABIgBAAIAAABIABABIgBAAIAAAAIgGAAIAAADIAAAAIACABIAAABIgBACIAAACIgBAAIAAABIgBAAIAAAGIgEAAIAAABIgBAAIAAABIgBAAIAAAEIgDAAIgBABIAAACIAAAAIAAACIgBAAIAAABIgCABIACABIgEAAIAAACIgJAAIAAgCIgJAAIABACIAAADIgDAAIAAAFIgGAAIAAAFIgBAAIAAABIgEAEIAAABIAAAAIAAABIgBAAIAAABIABAAIAAABIABAAIAAAAIAEAAIAAACIACAAIAAABIABAAIAAABgAhDAoIgZgIIgBgBIAAgDIAAgBIgCgBIgBAAIAAgBIgCAAIAAABIgBAAIAAgBIgBAAIAAgCIgEAAIAAgCIgBgBIAAABIgBAAIAAgBIgBAAIAAgBIgBAAIAAgBIgBgBIgCAAIAAgCIgCAAIAAgCIACAAIAAgDIgCAAIAAgBIgBAAIAAgCIABAAIAAgFIgBAAIAAgBIgCgBIgBgBIAAgBIgCgBIgBgBIgBAAIgBgBIgBAAIgBgBIgCAAIgBgBIgBAAIgBgBIgCAAIgCgBIgBAAIgBgBIAAAAIgCAAIgDAAIgBgBIgEAAIgBgBIgCAAIgBgBIgBAAIgBgBIgBAAIgBgBIgBAAIgCgCIgDAAIAAgBIgCAAIAAgBIgCAAIgCgCIgDAAIAAgBIgDAAIgCgBIgEAAIgBgBIgEAAIAAgBIgDAAIAAgGIgBgBIAAgCIgBgBIAAgBIgBgBIAAgBIgBAAIAAgCIAAAAIAAgBIgBAAIAAgBIgBAAIAAgBIgBAAIAAgBIgBAAIAAgDIgBAAIAAgCIgBAAIAAgCIgBAAIAAgDIgBAAIAAgDIgBAAIAAgBIgBAAIAAgCIgBgBIAAgDIgBAAIAAAAIgBgBIgBgBIAAgBIgCgCIgBAAIAAgBIgBAAIAAgBIAAAAIAAgBIgBAAIgBgBIgBAAIgBgBIgBAAIgBgBIgEgCIAAgBIgBAAIgCgBIgCgBIgBgBIgBAAIgBgBIAAAAIgCgCIgCgBIgBAAIAAgBIgBAAIAAgBIgBgBIgBAAIAAgBIgBgBIAAgBIgBAAIgGgDIAAgDIgBAAIgBgCIgBAAIgBgBIAAAAIgBAAIABgBIAAgBIgBAAIAAgBIgCgBIAAAAIAAgCIgBAAIAAgBIgBAAIAAgBIgBAAIgBgBIgBgBIAAgBIABAAIAAgBIABAAIABABIAAgBIACAAIAAABIAAgBIACAAIAAgBIACAAIAAgBIABAAIAAgBIAAAAIAAgBIABAAIAAgBIABAAIAAgBIABAAIABAAIgEgBIAAAAIAAgBIgBAAIAAgCIgBAAIAAgBIgDgCIAAgBIgBgBIgBgBIgBAAIAAgBIgDAAIAAgBIgBgBIAAgBIgBAAIAAgBIgBAAIAAgBIgCAAIAAgBIgBAAIgBgBIgBAAIAAAAIgEAAIAAgBIgDAAIAAgBIgFAAIAAgBIgCAAIAAgBIgBAAIAAgBIABAAIAAgBIgBAAIAAgDIgBAAIAAgBIgBAAIgBgBIgBAAIAAgCIABAAIAAgCIgBAAIAAgBIgBAAIgCgBIAAAAIAAgBIgBAAIgBAAIgBAAIAAgBIgBAAIAAgBIgCAAIAAgBIgBAAIAAgBIgBAAIAAgCIgBAAIAAgBIgBgBIAAgDIgBAAIAAgBIgBAAIgBgBIAAAAIAAgBIgCAAIgDgBIgGAAIgBABIgBAAIgBgBIgEAAIAAgBIgBAAIAAgCIABAAIAAAAIABAAIAAgBIACAAIAAgBIABAAIAAgBIABAAIAAgDIgBgBIAAgBIgBgBIAAgBIgBAAIAAgBIgBAAIAAgBIgBgBIAAgGIAAAAIAAgBIgBAAIAAgBIABAAIAAgHIgBAAIAAgBIgCAAIgCABIAAAAIAAgBIAAAAIAAgCIACgBIAAgBIACgCIAAgBIABgBIAAAAIAAgDIAAgBIAAgCIgBAAIAAgCIgBgBIAAgBIgBgBIAAgBIgCgBIAAgBIgBAAIgCgBIgBAAIABgCIABAAIAAgBIgBgBIgBAAIAAgBIgBAAIAAgBIgFAAIgBABIgBAAIgBgBIAAgBIABAAIAAgCIABgCIABgCIABgBIAAgDIABgBIAAgCIABgBIAAgJIgBAAIAAgCIgBgBIAAgBIgBgBIAAgBIgCgCIAAgBIgBgBIAAgBIAAgBIAAgBIgBAAIAAgBIgBgBIAEgDIABgBIACAAIABgBIAEAAIAAABIABABIACABIALAAIACABIAcAAIABABIADgSIABgBIAAgGIACgGIACgMIAHgIIABgBIACgEIADgDIABgCIALgMIABgGIgLgIIAEgEIALgKIABgBIAFgDIABgBIAGAFIAIgGIAMAMIACAAIAAgBIACAAIAGABIAEAGIAJAIIgGAGIgCABIgHAGIADACIADgDIANgLIAAACIAEAEIAEgBIACAAIAEgEIADgEIgCgBIgBAAIgBgCIgDgDIgDAAIgBgBIAAgBIABgBIAAgBIACAAIAAABIASABIAAgBIABgCIAAgBIABAAIAAgBIAEAAIADgBIAGgBIACAAIAFgLIABgCIABgCIAYAGIABAAIABABIAEABIAAABIACAAIABABIAEABIABAAIAIADIgDACIgCABIgCAAIgBABIAAAFIABAHIAAAHIABAAIAKAEIAFgNIABgBIAAABIABABIAGAPIAWABIAFABIgCABIgCAAIAAAAIgBAAIAAABIADAAIACgBIAMAEIgDAOIAKAAIABABIABAAIABgDIALABIAEAAIAIABIgCAHIAAABIgBAAIgEAPIAGAAIAGABIAEgBIACgBIACAAIABgBIACAAIAAADIACAHIgbAAIAAACIAAAEIAAACIAHgDIADAFIACADIAAAHIABAAIABgBIAaAAIAFABIAGAAIAAgGIAEAAIAAgCIABgBIACAAIABABIACAAIABgCIABgDIADgBIABAAIAAgBIABAAIAAgBIADAAIAAgBIAAABIABAAIABABIACAAIAIABIgFAMIABAAIACABIABAAIABACIACABIABABIABAAIAGAGIABgFIACgCIAHgGIAAgBIACAAIADgDIgDgFIAAgBIgBgBIgBAAIgCgFIANAAIAFgBIAEAAIAHAHIADAGIABgBIAEAGIABABIAHAGIgCABIgBABIgFABIgKAEIAIAFIABABIABgBIABgBIABABIAPAKIgCAEIAGgDIgCAEIAAACIgBAJIAAABIgBAFIgHAHIgBAAIgBgCIgDAAIAAACIgFARIAGgBIAAAAIAEgBIABgBIABACIACAAIgHAJIAEAAIACABIACAAIADADIADAAIACgBIABgCIABgGIAAgCIAGgCIgBgEIAAgCIAXANIAAABIAAABIAAAAIADAKIgDgBIAAAAIgEACIgIAAIgFgBIgCAAIABAHIAEgBIgCABIgOADIgGgFIgGAEIgBABIgCABIgBAAIgCgBIgCAAIgBgCIgFgEIgBgBIgDAAIABAGIADACIAAABIgCgBIgGAAIgEgBIgJgEIgCAAIgLgBIgEABIgOACIgFAEIAEAEIgDACIgDAAIgDADIAAgBIgFACIgIAAIgHAAIAAATIADAAIAAAMIgDABIACAKIgGACIAGAHIACgDIAKgDIABABIAFAGIgJAIIAHAHIgGADIgKgCIgBAAIgGABIAMALIgZAKIAEAPIgEACIgGABIAAACIgFgBIgFARIgMgGIgCAGIAAADIABABIAAADIABAFIAAALIgBAAIgGACIgJABIACAGIgKgCIgHAAIAAAFIABAJIAAABIgBAAIgDABIgDAAIgFgBIgBgCIgHAAIgEgBIgEAAIgDgBIgCAAIAAADIgDABIgEADIAAABIABAAIgBABIgBgBIgGAFIAJAOgAlkhrIAAgCIgBAAIAAgBIgBAAIAAABIgBAAIAAgCIgBAAIAAgBIgCAAIgBgBIgEAAIAAABIgCAAIAAABIAAAAIgBgBIAAgDIgBAAIAAgBIgBAAIgCABIgBAAIAAgBIgCAAIAAgBIgBAAIAAgBIgCAAIAAgBIgBAAIAAgBIgCgCIgEAAIAAABIgBAAIAAgBIgCAAIgCgBIgHAAIAAgBIgBAAIAAgDIgBgBIgBAAIAAgBIgGAAIABgBIgBAAIAAgCIgCAAIAAgBIAAAAIAAgBIgCAAIgBgBIgCAAIgBgBIgCAAIgBAAIgBAAIAAgBIgCAAIAAgBIgBAAIAAgBIAAAAIAAgBIgBAAIAAgBIgBgBIgEAAIgBABIAAgBIgBAAIAAgBIgBAAIAAgBIABgBIACAAIAAgCIADAAIAAgBIACAAIABgBIAAAAIAAgBIABAAIAAgBIABAAIABgBIABAAIABgBIABAAIABgBIAAAAIABAAIABgBIABAAIAAgBIABgBIABAAIAAgBIABAAIAAgDIAAgBIACAAIAAgBIABAAIAAgBIABgBIAAgBIABgBIAAgCIgBAAIAAgBIgBAAIAAgBIABgBIAAgDIgBAAIAAgBIgBAAIgCgBIAAgDIAAAAIAAgBIAAAAIAAgBIgBgBIAAgBIABAAIAAgDIAAAAIAAgBIAAgEIAAAAIAAgDIAAAAIAAgCIAAgBIADgBIAAgEIABAAIAAgBIgBAAIAAgDIABgCIAAgBIABAAIAAgCIgBAAIAAgCIABgBIgBAAIABgBIABgCIABgBIAAgIIABAAIACgCIAAgBIABgBIAAgBIABAAIAAgBIACgCIABAAIAAgBIABAAIAAABIACAAIAAgBIACAAIAAABIACACIABAAIAAABIAFAAIACgCIABAAIABgBIABgBIACgCIABAAIAAgBIAAAAIAAgBIADAAIAAgBIABAAIABgBIAFAAIAAgBIABABIAHAAIAAgBIAEAAIABABIABAAIAAABIABAAIAAABIACAAIAAACIABABIACAAIgBABIAAABIABAAIABABIABAAIgCACIAAACIABAAIAAABIgCACIAAADIABAAIAAABIgBABIAAAFIABABIABAAIAAABIABAAIAAABIACAAIAAACIABAAIAAABIABAAIAAABIAAABIACAAIAAABIACABIAAABIABAAIAAADIAAAAIAAABIABABIAAABIABABIAAADIABAAIAAACIABAAIAAABIABAAIAAABIABAAIAAABIABAAIAAACIABAAIAAADIABAAIABABIAAABIgCABIAAADIABAAIgCACIgBAAIAAABIgBAAIAAAHIgBAAIAAADIABAAIgBABIAAAFIgBAAIAAADIgBAAIAAACIgBAAIAAABIgBABIABAAIgBABIAAABIgBACIgBAAIAAACIgBAAIABABIAAABIABABIgBAAIAAADIgBAAIAAABIgCAAIAAABIgCACIAAADIgBAAIAAABIgBABIAAABIgBAAIAAACIgBAAIgBABIAAABIgBABIABAAIAAACIgBAAIAAACIABAAIAAAGIADAAIAAABIABAAIAAABIACAAIAAACIgBAAIAAgBIgBAAIAAABIgDAAIAAgBIgCAAIgBABIgCABIgBAAIgBABIAAABIgBAAIgBABIgBAAIAAABIgCABg");
	this.shape_3.setTransform(0.1,0.5);

	this.timeline.addTween(cjs.Tween.get({}).to({state:[{t:this.shape_3},{t:this.shape_2}]}).wait(1));

	// Capa_4
	this.shape_4 = new cjs.Shape();
	this.shape_4.graphics.f().s("#65653D").ss(0.5,1,1).p("Anjn4IAAAMQgBAOACAFQAEAIAAAFQABAEgBAIQgCAIACAIQAVABACAFQABADAFARQAQAdAFAEQAEAEAIAMQAIAKAFAFQAMAKABAIQABAEANAEQAAANgGAKQgEAKAAAKQAOAJAJgBQAQgDAIABQAJALACAGQABAHgFAOIAHAHQAGAGAAAGQAAADAAAJIAFATIACAIQgCgBgDAHQASAEAFADQACABAMAQQAFAHANAGQANAGAGAGIgJALQAEAIADADQAAAAALAKIAXAPQAHAFADAFQACAEAEALQAKAYAOAGQAKAEAuANQAEAVAEACQAIADAFAHIANARQADAGAIAOQAHANAGAFQAFAEAVAOQAQAKAFAIQAMABACgDQABgDAMgBQAIAHAFACQgHAKAKAGIATAIQAEgIgBgEQAAgEgIgEQAFgBACABQAAAAAFgJQACgFAAAAQgBAAACgCIAIAOIBAALQALADAAACQABADACABQgQADgCACQgGAFADATQACANgEAKQgEAJACAJQABAEAGAOQADAIgBAQQAAAJgEARQgCAOANAFQAFACAKABQATACANAMQATATAHAEQAIAEASADQAZAFABAAIAwASQAEAOAKAQQAIAQAFAQQAEAQAOAMQAMALAQAEQAKADAFgEQAGgEANACIAnAGQAIACAFAFQADADAHAIIBUAAIAAvxgAmOjpQATADADgDQAEgFAJgBQAQgCADAHQABADgBAQQAJAKANAYQABAJgNAcQgLAZAGALQgGABgHACQgCABgJgCQgOgEgWgLQgXgLgKgIIACgBQAYgTgCgHQgHgSARgwgAnqBqIgEgDIgCgZQgBgHABgGQABgCAFgIQgTgVgDgHQgFgJAKgfIgPgMIgCgBQgVAHgKgEIgJgEIAACEAnqBqQAIAFAAAIQAAARgCAHQAAABALAOQADAFABACQAAAEACAEQAEAKAQANQAPAMAMADQANAEATAJQATAHAGANQAEAIAGAXQACAHARAVQALAOgDASIASALQAJAFAaAIQAQAEAFALQgKACgEAGQgEAGAAANQAGAIAIAIQAHAIABABQACACAKAFQAYgKACABQAFACAUAWIAiAZQAJAFAAAJQAAAFgCANImkAAIAAmQg");

	this.timeline.addTween(cjs.Tween.get(this.shape_4).wait(1));

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = new cjs.Rectangle(-57.5,-51.5,115,103);


(lib.graph_01 = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// Capa_1
	this.shape = new cjs.Shape();
	this.shape.graphics.f().s("#FF3399").ss(0.2,0,0,22.9).p("AnkGLIPJAAIAAsVIvJAAg");

	this.timeline.addTween(cjs.Tween.get(this.shape).wait(1));

	// Capa_2
	this.shape_1 = new cjs.Shape();
	this.shape_1.graphics.f("#FFFF00").s().p("AE2D1IAAgBIgDAAIAAgFIgBgBIAAABIgBAAIAAgCIgBAAIAAgCIgBAAIAAgCIgCgCIAJAAIABABIABAAIAAADIgBAAIAAABIgBAAIAAAHIABAAIAAABIABAAIAAABgAE4DoIAAgBIABAAIAAABgAE4DogAEFhbIAAgHIABAAIAAABIABAAIACABIABAAIAAABIgBAAIAAACIgDAAIAAACgAELhgIAAgBIgBABIgGgEIADAAIAAABIgBAAIABAAIACAAIAAgBIABABIAAABIABAAIAAgBIABAAIAAADgAEKhggAkZhlIAAgBIgBgCIAAgBIABAAIAAABIABgBIADAAIAAABIgBAAIAAAAIgBAAIAAACIgBAAIAAABgADWhoIAAgEIgBAAIAAgBIAFAAIAAAEIABAAIAAABgADph2IgBgBIAAABIAAAAIAAgBIgBgBIgCAAIAAgCIgCAAIAAAAIACAAIAAgBIABAAIAAgBIABAAIAAgBIABAAIAAgBIAAAAIAAgBIACAAIgBABIAAABIgBAAIAAABIABAAIAAgBIAFAAIgCACIgBAAIAAABIACAAIAAACIgCAAIAAABIgBAAIABABgAk8h8IAAgCIgBAAIAAgCIgBAAIAAgDIgBAAIAAgCIgBgBIAAgBIgBAAIAAgCIgBAAIAAgBIgBAAIAAgCIgBAAIAAgDIgBAAIAAgCIgBAAIABgBIgBAAIAAgBIgBAAIAAgCIAAAAIAAgBIgBAAIAAgCIABABIAEAAIAAgBIABAAIAAAAIgBAAIAAgBIgBAAIAAgCIgBAAIAAgDIACAAIAAgCIABABIAAgCIABABIACAAIAAACIABAAIABgBIABAAIgBABIABAAIADAAIAEAAIAAAAIAAAAIAAACIAAAAIAAABIgDAAIgBgBIgBAAIAAABIgCAAIABABIAAABIgCAAIAAABIABACIAAADIAAAAIAAAEIAAAAIAAABIAAAAIABgBIABACIAAABIABADIgCABIgCAAIgBABIgBAAIAAABIABAAIAAABIACAGIAAABIABAAIgBABIAAABgADTiKIAAgCIgCAAIAAACIgBAAIAAgCIgCAAIgBgBIgBAAIAAgBIABAAIAAgBIABAAIABgBIABABIAAABIADAAIABgBIAAABIABAAIAAABIABAAIAAABIgCADgAkeiWIAAgBIgBAAIAAgBIAAgBIAAAAIAAABIgCgCIAAgBIgBAAIAAgBIABgCIABAAIABAAIABAAIAAACIgCAAIAAABIABAAIAAABIABAAIAAABIgBAAIABABIAAAAIABABIAAABgAkjiYIgBAAIAAAAIABAAIAAABgADPiZIAAgDIgCAAIAAgDIABAAIAAgBIAFAAIAAAHgAkpibIAAgDIACAAIAAAAIABAAIAAACIgBAAIAAABgAkpieIAAgCIgBAAIAAgCIACAAIAAgBIABAAIAAABIADAAIgCgBIACAAIAAgBIABAAIAAABIABAAIABABIABAAIAAABIgBAAIAAABIgCAAIAAABIgFAAIAAABgAk1ihIAAgBIAAAAIAAgBIgFAAIgBABIAAgBIgBAAIAAgBIABAAIAAgBIgDAAIAAgBIABgBIABAAIgBgBIgBAAIAAgBIACAAIAAABIABAAIAAABIACAAIAAACIADAAIAAgCIgCAAIAAgDIACgBIAAABIABAAIAAABIABAAIAAABIABAAIAAgBIABgBIACAAIAAgBIgGAAIAAgBIABAAIAAgBIgDAAIAAgBIgCAAIAAABIgBAAIAAgBIgBAAIAAgCIAAAAIAAAAIgBAAIAAAAIgFAAIAAACIgDAAIAAgCIgCAAIAAAAIAAAAIAAAAIgDAAIAAAAIACAAIAAgCIgFAAIAAgBIABAAIAAgCIgBAAIAAgBIgBAAIAAABIgBgBIABAAIAAgBIABAAIAAgDIgBAAIAAgBIAAABIgCAAIAAABIgBAAIAAADIgBAAIAAABIgBgBIAAgBIgBAAIAAgJIAFAAIABgCIALAAIAAAAIAKAAIAAgBIAMAAIABgBIAKAAIAAgBIALAAIAAgBIAKAAIACABIgBAAIAAABIABAAIAAACIgBAAIAAAAIACAAIAAACIABAAIABgCIAAADIABAAIAAACIABAAIABAAIAAAAIAAAAIABAAIAAgBIABAAIAAgBIABgBIAAgCIACAAIAAADIABAAIAAABIAAAAIAAABIABAAIAAAAIgBAAIAAABIAAAAIAAACIgEAAIAAACIgCAAIAAACIgBAAIAAACIACAAIABgBIAEAAIAAABIACAAIAAADIgDAAIAAgCIgDAAIAAACIABAAIACABIABAAIAAAAIgBACIgDAAIAAABIgBAAIAAABIACAAIAAgBIADAAIAAAAIABAAIgBgBIABAAIAAgCIACAAIAAAAIgBAAIACgBIAAgCIACAAIAAABIgBAAIAAABIABABIABAAIAAADIgEABIAAgBIgBAAIAAABIgBAAIAAABIABAAIAAAAIgCAAIgBABIAAgBIgDAAIAAABIgCAAIAAgBIAAAAIAAAAIABAAIAAgBIgBgBIgBAAIAAABIgBAAIAAABIgCAAIAAACIgBAAIgBABIgEAAIgBABIAAABIgCAAIAAgBIABAAIAAgBIAAAAIAAgDIgDAAIAAABIgDAAIAAgBIgBAAIAAABIABAAIAAACIgBAAIgBABIAAABIgBAAIgBABIgBAAIAAgBIgCAAIAAgCIABgBIgCAAIAAgBIgBAAIAAABIgBAAIgBABIgFAAIgCABIAAABIABAAIAAABIgCAAIAAgCIAAAAIAAgBIgBAAIAAABIgBABIAAACIABAAIgBABIgBgBIAAABIgFAAIgBABIAAABgAkSjAIAAABIgCABIADAAIAAgBIACAAIAAgDIgBAAIgBAAIAAAAIAAAAgAlFijIAAgCIABAAIAAgBIABAAIAAgBIABAAIABABIAAABIgBAAIAAABIgCAAIAAABgAkXiqgACvirIgCAAIAAgBIgBAAIAAgBIABAAIAAgDIACAAIADAEIAAABIgCAAIAAAAgAi3iwIAAgBIgEAAIAAABIgCAAIABgBIAAgBIgCAAIgBABIAAgCIABAAIAAgCIAAAAIAAABIABAAIAAgBIACAAIAAgCIABABIACAAIABgBIAAAAIAAABIAAAAIACgCIgBAAIABgBIADABIgBABIABAAIAAABIgBABIgDAAIAAADIABABIgBAAIAAABgAhvi2IAAgBIAAgBIABAAIAAgBIABAAIAAgCIAIAAIAAABIACAAIgBACIAAABIgBAAIAAgBIgGAAIAAABIgBABgAiyi2IABgBIAAABgAjoi3IAAgFIABABIADAAIAAgBIABABIAAABIgBAAIAAACIgDAAIAAABgAj3i3IAAgDIABAAIAAgBIACAAIAAACIAAAAIAAABIgBAAIAAABgAEbi4IAAgEIADAAIAAAEgAjOjAIgBAAIAAgCIABgBIgCAAIAAgCIABgBIgBgBIAAgCIAAAAIAAgDIAIAAIAAgBIAKAAIABABIABAAIAAABIACAAIAAACIgCAAIAAACIgBAAIABABIgHAAIgBABIgBAAIAAABIgCAAIAAgBIgGAAIAAABIgBAAIAAABIACAAIAAABIgBAAIAAACIgBABgAi9jLIAAgBIgBAAgADbjCIAAgCIgBAAIAAgCIABAAIABgBIAAABIAHAAIAAABIgEAAIAAABIAAAAIAAABIgBAAIgBABgAC4jCIAAgDIgBAAIAAgBIAGAAIAAACIgCAAIAAACgACxjGIAAgBIgEAAIAAgBIgCAAIgBgBIAAABIgBAAIgBgBIgBACIAAABIgBAAIAAgCIgCAAIAAABIgCAAIABABIgBAAIgBgBIgBAAIAAgBIgBAAIABABIgCAAIAAgBIgBgBIAAgBIgCgBIAAgBIgBAAIAAgBIgBAAIABgBIgCABIAAgCIABAAIgBAAIgBAAIAAAAIgBAAIAAADIgBABIAAABIgBAAIAAABIgBABIgBAAIAAgBIgBAAIAAACIgBABIgDAAIAAgBIAAAAIAAgBIgBAAIABgBIAAAAIAAgCIgCAAIAAgBIgDAAIABgBIgBgBIgBABIgCAAIAAgCIABAAIAAAAIgBAAIAAgBIgBAAIAAgCIgBAAIAAABIgBAAIAAADIABAAIAAABIABAAIAAACIgDAAIAAgBIgCAAIAAABIABABIgDAAIAAABIgBAAIAAgDIgBAAIAAgBIAAAAIAAABIgBgBIgBAAIAAgDIgCAAIAAACIgCAAIAAgBIABAAIAAAAIgBAAIAAgCIgCAAIABABIAAABIgBAAIAAgBIAAAAIAAgHIgDAAIAAgFIABAAIAAgBIgDAAIAAgBIgBAAIAAgBIgCAAIAAACIgBAAIAAgDIgBAAIAAgCIABAAIAAgCIAHAAIAAgCIAMAAIADAAIALAAIACgBIAJAAIACgBIABAAIAAACIgBAAIgBAAIADAAIAAACIABAAIAAgCIADAAIAAACIABAAIAAABIABAAIAAABIgBAAIAAABIgEAAIAAACIgBAAIAAABIABAAIAAABIgBABIAAACIABAAIAAgBIADAAIAAAEIACAAIAAACIACAAIAAAEIgBAAIAAABIABABIABAAIACABIgBABIACAAIAAABIABAAIABABIABgBIABABIgBAAIABABIAAAAIACABIABAAIAAgBIACAAIAAABIADAAIAAABIAAABIAAABgAEHjIIgBABIgBAAIAAgEIgBABIAAgCIACAAIAAABIABgBIACAAIACgBIAAADIgBABIgBAAIAAABIgCABgABejLIAAgBIABgBIAAgBIABAAIAAgBIABgBIAAAAIACgCIABAAIgBgCIABAAIAAAAIABAAIAAgBIADAAIAAABIgBAAIAAAAIgCAAIAAADIgBAAIgBABIACAAIAAABIgBAAIABAAIgBABIAAABIgBAAIAAABIgBAAIgBABgABcjLIAAgBIABAAIABABgACljQIAAgBIgBAAIAAgBIABAAIAAgCIgCAAIABAAIACAAIAAADIABABIgBAAIAAABgAEcjSIAAgCIgBAAIAAAAIgCAAIgBAAIgBACIgBAAIABgCIAAAAIABAAIAAgBIABAAIADgBIABAAIABABIgBAAIAAABIABAAIAAACgABijXIAAgEIgBAAIAAABIAAAAIAAgBIgBAAIAAgDIgBgBIAAgBIABABIABAAIAAgBIACAAIAAABIAEAAIAAABIACAAIAAACIABAAIAAACIgCAAIAAABIgDAAIAAACgAEtjZIAAgBIgCAAIAAgBIgCAAIAAgBIABgBIABAAIAAABIACAAIAAgBIADAAIAAgBIAAAAIAAABIABgBIACAAIAAABIgBAAIAAABIgBAAIAAABIgBAAIAAgBIAAAAIAAADgABrjZIAAgDIABAAIAAADgAFSjxIABgBIAAAAIgCABIgCAAIAAgBIgBAAIABAAIAAgBIgBAAIAAgBIAHAAIAAABIgBAAIAAABIAAAAIAAABg");
	this.shape_1.setTransform(-1.3,-1.6);

	this.timeline.addTween(cjs.Tween.get(this.shape_1).wait(1));

	// Capa_3
	this.shape_2 = new cjs.Shape();
	this.shape_2.graphics.f("#394C64").s().p("AFKEGIgBAAIhrgQIgBAAIgCgBIgCAAIgJgCIgFAAIgOgDIgEAAIgtgGIgBgJIgLhUIAAgBIgIgwIAAgEIgbgVIgrhAIgBgCIgLgQIgBgBIgYgkIgCgEIAAgHIgBgcIgBgDIgBgXIgCgGIAAgHIgBgEIAAgHIgBgIIAAgSIgCAAIAAABIgCAAIAAAAIAAAAIgBABIgBAAIAAABIgCAAIAAABIgCAAIAAACIgBAAIAAABIgBAAIgBABIgCAAIgBABIgBAAIAAAAIgBAAIAAABIgCAAIAAABIgCAAIAAABIgCAAIAAABIgBAAIgBABIgBAAIAAABIgBAAIAAABIgCAAIAAABIgDAAIAAABIgBAAIgBABIAAAAIgBAAIgBAAIAAABIgCAAIAAABIgCAAIAAABIgCAAIAAACIgBAAIgBABIgBAAIAAABIgBAAIAAABIgCAAIAAAAIgDAAIAAABIgBAAIAAABIgBAAIgBABIgBAAIAAABIgCAAIAAABIgCAAIAAABIgCAAIAAABIgBAAIgBABIAAAAIAAABIgCAAIAAABIgDAAIAAAAIgCAAIAAABIAAAAIgBABIgBAAIAAABIgCAAIAAACIgCAAIAAABIgBgBIgXAAIgBgCIgZAAIAAgBIgaAAIAAgBIgaAAIAAgBIgIAAIgBABIgBAAIgBABIgBAAIAAABIgCAAIAAACIgDAAIAAABIgCAAIAAABIgBAAIgBABIgCAAIAAAAIgCAAIAAABIgCAAIAAABIgCAAIAAABIgCAAIAAABIgBAAIgCABIgCAAIAAABIgBAAIAAABIgCAAIAAABIgCAAIgBABIgCAAIAAABIgCAAIAAAAIgBAAIAAABIgCABIgEABIgcAOIgCABIgCAAIgFACIgFADIgFADIgBAAIAAAAIgGACIgBAAIAAgJIgBAAIAAgDIAAAAIAAgCIgBAAIAAgEIgBAAIAAgBIgBAAIAAgBIgCAAIAAgGIgBAAIAAgCIgBAAIAAgGIgBAAIAAgCIgBgBIAAgBIgBAAIAAgBIAAAAIAAgCIgBAAIgBgCIgBAAIAAgBIgCAAIgBgBIgCAAIAAgBIgCAAIAAAAIgDAAIAAgBIgDAAIAAgBIgEAAIAAgBIgDAAIgBgBIgCAAIAAgBIAAAAIAAABIgCAAIAAgCIgBAAIAAgBIgBAAIAAgBIgBAAIgBgBIAAgBIgBAAIAAgDIgBAAIAAgDIgBAAIAAgCIgBAAIAAgCIAAgBIAAgCIgBAAIAAgCIgBAAIAAgBIgBAAIAAgCIgCAAIAAgCIgBAAIAAgDIgBAAIAAgCIgBAAIAAgBIAAAAIAAgBIgBAAIAAgCIgBAAIAAgBIgBgBIAAgCIgBgBIAAgCIgBAAIAAgDIgBAAIAAgFIgBAAIAAAAIgBAAIAAgBIgBgBIAAgBIgBgBIAAgCIAAAAIAAgCIgBAAIAAgDIgBAAIAAgEIABAAIAAgCIgBAAIAAgJIAEAAIABgBIAMAAIAAgBIAKAAIAAAAIALAAIABgBIAKAAIAAgBIAMAAIAAgBIAMAAIAAgCIALAAIAAgBIALAAIAAgBIAMAAIAAgBIAKAAIABAAIAHAAIAGgBIAIAAIAAgBIAMAAIACgBIAKAAIABgBIAKAAIABgBIAKAAIACgBIAIAAIAGgBIAEAAIAIgBIAGAAIAFgBIAPgBIAHAAIAHAAIA/gGIABgBIAjgCIABAAIAvgDIABAAIAGgBIAIAAIAAgBIALAAIABgBIAMAAIAGgBIAHAAIAAgBIAMAAIAEgBIAKAAIACAAIAKAAIACgBIALAAIACgBIAMAAIAEgBIAlgDIABgBIALAAIAEgBIBfgFIAFgBIAIAAIgCABIAAABIgBAAIAAABIAAABIAAACIgBAAIAAABIgBAAIAAABIgCADIAAABIgBABIAAABIgBABIAAABIgBABIgBAAIAAABIgBAAIAAABIgBAAIAAADIgBAAIAAABIgBAAIgBAAIgBAAIAAABIgBAAIAAADIgDAAIAAgBIgEAAIAAADIgBAAIABABIAAADIABAAIAAABIABABIAAACIgBABIAAACIgCACIAAACIABABIABgBIADAAIAAABIAAACIAAABIgBAAIgBABIgBAAIAAAGIgCAAIAAACIABABIAAACIgBAAIAAAAIgBAAIAAAHIgBAAIAAABIgFAAIAAAAIAAABIgGAAIAAgBIgBAAIgBAAIgBAAIAAgBIgBAAIAAgBIgCAAIAAgBIgEAAIAAABIgCAAIAAABIgBAAIgBABIgBAAIgCgBIgFAAIAAABIgBAAIAAABIgBAAIAAACIABABIAAADIABABIAAACIABAAIAAAAIgCACIgBAAIAAABIgBAAIAAADIgBABIAAABIgBAAIgBAAIgBAAIAAAEIAAAAIAAABIABAAIAAACIgBAAIAAgBIgCAAIAAAEIABAAIAAAGIABAAIAAACIgBAAIAAADIgBAAIAAABIgBAAIAAABIgBAAIgCABIgBAAIAAABIAAAAIAAABIgBAAIAAABIgBAAIAAABIgBAAIAAABIgBAAIAAABIgDAAIAAADIgBAAIgBABIgBAAIAAABIgBAAIgBABIAAAAIAAAAIAAABIgBAAIAAABIgBAAIAAABIgBAAIAAABIgCAAIAAABIgBAAIAAABIABAAIAAACIgBAAIAAABIAAAAIAAABIgBAAIAAABIgBAAIAAABIACAAIAAABIAAAAIAAADIABAAIAAABIAEABIACACIABABIABABIABAAIAAABIABAAIABABIAAABIABAAIAAABIABAAIABABIABAAIAAABIACAAIAAABIADACIgCACIgBACIAAABIAAABIgBACIgBABIABABIAAACIABADIAAAAIAAABIAAACIADAGIABACIAAACIABADIAAABIABAAIAAABIABADIAAADIAAADIAAABIAAABIgCAHIABAYIABAAIAAABIACAAIABABIABAAIAAACIABAAIAAADIACAAIAAABIADAAIAAABIABAAIABABIACAAIAAADIADAAIAAgBIAFAAIAAABIABAAIABABIADAAIABgBIACAAIACABIACAAIAAADIABABIAAABIAAAAIAAACIABAAIAAABIABABIAAABIABABIAAABIABAAIAAABIACAAIAAABIACAAIAAAGIgBABIAAACIgBABIAAABIgBADIAAALIABABIADAGIADADIAAACIAAABIAAACIABADIAAACIACADIAAADIgCADIgBACIAAABIgCABIgBgBIgEAAIAAAGIgBACIgCABIgBAAIgBABIAAADIAAACIgBABIAAABIgBAAIAAACIgBACIAAACIgCACIAAABIgBAAIAAAEIAAABIAAAGIAAAAIAAAJIAAABIAAADIgBABIAAACIgBAAIgCAAIAAACIABACIgBABIAAABIgBABIABAAIAAABIgBAAIgBAAIAAABIgBAAIAAABIABABIAAAHIgBAAIAAARIgBAAIABABIAAACIgBAAIgBADIAAAEIgBAAIAAABIACABIAAACIABAAIAAAGIgBABIAAAIIgBABIAAAFIgBABIAAAJIABAAIAAAGIABAAIAAADIABAAIAAABIABAAIAAABIACADIABACIACACIAEACIACABIAAABIACAAIAAACIACAAIAAACIADAAIAAACIABAAIgBAAIgBABIgCAAIAAABIgBAAIAAAEIgBAAIAAABIgBAAIAAAHIABAAIAAABIABAAIAAABIABgBIAAACIABAAIAAABIABAAIAAABIACAAIAAAAIABAAIABABIACACIABAAIABABIACABIACAAIACABIAAAAIAAABIACAAIABAAIACAAIAAABIACAAIAAABIACAAIAAABIACAAIAAABIAAAAIABABIACAAIAAABIABAAIAAADIABAAIAAACIABABIAAAHIAAAAIAAACIABAAIAAACIgBAAIAAABIABAAIAAABgAFbAhIAAgBIgBAAIABAAIgDAAIAAgBIgCAAIgCgCIAAADIgBAAIgBAAIgBAAIAAgCIgBAAIAAABIgBAAIAAABIgCAAIgBgBIgCAAIAAgDIgBAAIAAgBIgBABIgCAAIgBgBIgBAAIgBgBIgCAAIAAgBIgCAAIgBgCIgBAAIgBgBIgBAAIAAgCIgDAAIAAgBIgBAAIAAgBIAAgCIAAgBIgBgBIAAgCIgBgCIAAgPIABAAIABgBIAHAAIABABIABAAIAAABIACAAIAAABIABAAIAAAAIABAAIAAACIABAAIAAADIABABIAAABIACACIABADIAFAEIAFACIACADIADACIABAAIAAABIABAAIABABIAAAAIAAAAIAAABIADACIAAACIABAAIAAACIABAAIAAADIgEAAIAAABg");
	this.shape_2.setTransform(-0.2,0.1);

	this.timeline.addTween(cjs.Tween.get(this.shape_2).wait(1));

	// Capa_4
	this.shape_3 = new cjs.Shape();
	this.shape_3.graphics.f().s("#65653D").ss(0.5,1,1).p("ADxkIIAAghQAQgNAHgSQg1ABh9ALQh7AMgtABQg0AAhMAIQhWAIgrAEQgaACgOABQgaACgOADQAAAPAKAaQAKAeALAFQAMAGAIAAQADABAGASQAJAaAAATQACAJAeAFIAFATQAIACAFADQAEACAGAEIAQAHQAAAKgDAIQgFAMgBADIgcgIQAEAHABABQABAAAFADQAFAEACACQAEAFACABQAAAEgBAJIgBAGIgHAMIAbAaIAMAFQAKAFAIANQALARAEAEQAGAHALAKQAJAJAGANQAGALgEATQgFAZAAAIIAWgDQADAKABAAQAEACAEAEQACACAiAYQAPALACAmQAAALgCAQQgDAPAAAJQAJAMABADIABACIGJAAQAAgggKgQQgJgPgBgLQACgOgBgNQgBglgEgGQgDgFgfgUQACgEACgMQgLgIgEgEQgGgHABgPQABgWABgNQABgVAEgOQADgRABgIQADgOAHgIQALgNgEgLQgHgTAAgJQAHARAKAGQAHADAWADQgBgJAAgBQgBgDgFgDIgOgMQgIgKgCgBQgNgFgOgIQgPgGgGgDQgJgGgCgNQgCgjgDgQQgCgRgDgCQgKgHgFgHQAEgIAKgKQAIgHACgHQAHgcACgIIAngCQAuALCFAsIAADiQgZgFgPgOQgGgFgDgCQAAAAgMgGQgWgKgTgQQgPgMgJgCQgRAAgOgD");
	this.shape_3.setTransform(6.5,6.6);

	this.timeline.addTween(cjs.Tween.get(this.shape_3).wait(1));

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = new cjs.Rectangle(-49.5,-40.5,99,81);


(lib.btn_nav_graph = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// Capa_1
	this.shape = new cjs.Shape();
	this.shape.graphics.f("rgba(255,255,255,0.008)").s().p("Aq7BkIAAjHIV3AAIAADHg");
	this.shape.setTransform(70,10);

	this.timeline.addTween(cjs.Tween.get(this.shape).wait(1));

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = new cjs.Rectangle(0,0,140,20);


(lib.btn_go04 = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// Capa_1
	this.shape = new cjs.Shape();
	this.shape.graphics.f("#000000").s().p("AgmA5IAAhxIBNAAIAAANIg9AAIAAAkIA0AAIAAAMIg0AAIAAA0g");
	this.shape.setTransform(57.7,-0.2);

	this.shape_1 = new cjs.Shape();
	this.shape_1.graphics.f("#000000").s().p("AgqA5IAAhxIBSAAIAAANIhCAAIAAAjIA+AAIAAANIg+AAIAAAnIBFAAIAAANg");
	this.shape_1.setTransform(47.4,-0.2);

	this.shape_2 = new cjs.Shape();
	this.shape_2.graphics.f("#000000").s().p("AgjA5IAAhxIAQAAIAABkIA3AAIAAANg");
	this.shape_2.setTransform(37.8,-0.2);

	this.shape_3 = new cjs.Shape();
	this.shape_3.graphics.f("#000000").s().p("AgcAzQgMgHgHgOQgHgNAAgQQAAgbAQgQQAPgQAXAAQAQAAAMAHQAOAIAGANQAHAOAAAQQAAASgHANQgIAOgMAHQgNAHgPAAQgPAAgNgIgAgbgiQgLALAAAZQAAAUALAMQALAMAQAAQARAAALgMQALgMAAgWQAAgNgFgKQgFgLgIgFQgJgGgMAAQgPAAgMALg");
	this.shape_3.setTransform(26.8,-0.2);

	this.shape_4 = new cjs.Shape();
	this.shape_4.graphics.f("#000000").s().p("AgaA0QgMgIgFgOQgHgOABgQQgBgSAIgNQAGgNANgHQANgHAOAAQAQAAAMAJQAMAIAFAQIgPAEQgEgNgHgGQgJgFgLAAQgMAAgJAGQgJAGgEALQgDALAAALQAAAOAEALQAEAKAKAGQAIAFAKAAQANAAAIgHQAKgHACgPIAPAEQgEATgNAJQgMAKgRAAQgSAAgMgHg");
	this.shape_4.setTransform(14.9,-0.2);

	this.timeline.addTween(cjs.Tween.get({}).to({state:[{t:this.shape_4},{t:this.shape_3},{t:this.shape_2},{t:this.shape_1},{t:this.shape}]}).to({state:[]},3).wait(1));

	// Capa_2
	this.shape_5 = new cjs.Shape();
	this.shape_5.graphics.f("#FFFFFF").s().p("AgjAjQgOgOAAgVQAAgUAOgOQAPgPAUAAQAVAAAOAPQAPAOAAAUQAAAVgPAOQgOAPgVAAQgUAAgPgPg");

	this.shape_6 = new cjs.Shape();
	this.shape_6.graphics.f("#999999").s().p("AgqAqQgRgRAAgZQAAgXARgSQASgSAYAAQAYAAASASQASASAAAXQAAAZgSARQgSASgYAAQgYAAgSgSg");

	this.shape_7 = new cjs.Shape();
	this.shape_7.graphics.f("#FFFFFF").s().p("AgVAVQgIgJAAgMQAAgMAIgIQAKgJALAAQANAAAIAJQAJAIAAAMQAAAMgJAJQgIAJgNAAQgLAAgKgJg");

	this.shape_8 = new cjs.Shape();
	this.shape_8.graphics.f("#000000").s().p("AmPBkIAAjHIMfAAIAADHg");
	this.shape_8.setTransform(30,0);

	this.timeline.addTween(cjs.Tween.get({}).to({state:[{t:this.shape_6},{t:this.shape_5}]}).to({state:[{t:this.shape_6},{t:this.shape_7}]},1).to({state:[{t:this.shape_8}]},2).wait(1));

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = new cjs.Rectangle(-6,-11,70.5,21.9);


(lib.btn_go03 = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// Capa_1
	this.shape = new cjs.Shape();
	this.shape.graphics.f("#000000").s().p("AgWA3QgKgFgGgJQgGgJgBgMIAPgBQABAJAEAFQADAGAIADQAIAEAJAAQAIAAAHgDQAHgDADgEQADgFAAgFQAAgFgDgEQgDgEgHgDIgUgGQgQgDgGgDQgIgEgEgGQgEgHAAgIQAAgIAFgIQAFgHAJgEQAKgEALAAQAMAAAKAEQAJAEAGAIQAFAIAAAKIgOABQgCgLgGgFQgHgGgNAAQgNAAgGAFQgHAFAAAHQAAAGAFAEQAEAEASAFQASAEAHADQAKAEAFAHQAFAHAAAJQAAAJgGAIQgFAIgKAFQgJAEgNAAQgOAAgLgEg");
	this.shape.setTransform(62.2,-0.2);

	this.shape_1 = new cjs.Shape();
	this.shape_1.graphics.f("#000000").s().p("AAkA5IgNgiIgvAAIgNAiIgQAAIAshxIAPAAIAvBxgAgHgWIgNAgIAmAAIgMgeIgHgYQgCALgEALg");
	this.shape_1.setTransform(51.7,-0.2);

	this.shape_2 = new cjs.Shape();
	this.shape_2.graphics.f("#000000").s().p("AgWA3QgKgFgGgJQgGgJgBgMIAPgBQABAJAEAFQADAGAIADQAIAEAJAAQAIAAAHgDQAHgDADgEQADgFAAgFQAAgFgDgEQgDgEgHgDIgUgGQgQgDgGgDQgIgEgEgGQgEgHAAgIQAAgIAFgIQAFgHAJgEQAKgEALAAQAMAAAKAEQAJAEAGAIQAFAIAAAKIgOABQgCgLgGgFQgHgGgNAAQgNAAgGAFQgHAFAAAHQAAAGAFAEQAEAEASAFQASAEAHADQAKAEAFAHQAFAHAAAJQAAAJgGAIQgFAIgKAFQgJAEgNAAQgOAAgLgEg");
	this.shape_2.setTransform(40.9,-0.2);

	this.shape_3 = new cjs.Shape();
	this.shape_3.graphics.f("#000000").s().p("AgqA5IAAhxIBSAAIAAANIhCAAIAAAjIA+AAIAAANIg+AAIAAAnIBFAAIAAANg");
	this.shape_3.setTransform(30.5,-0.2);

	this.shape_4 = new cjs.Shape();
	this.shape_4.graphics.f("#000000").s().p("AgHA5IAAhxIAPAAIAABxg");
	this.shape_4.setTransform(22.8,-0.2);

	this.shape_5 = new cjs.Shape();
	this.shape_5.graphics.f("#000000").s().p("AgaA0QgMgIgFgOQgHgOABgQQgBgSAIgNQAGgNANgHQANgHAOAAQAQAAAMAJQAMAIAFAQIgPAEQgEgNgHgGQgJgFgLAAQgMAAgJAGQgJAGgEALQgDALAAALQAAAOAEALQAEAKAKAGQAIAFAKAAQANAAAIgHQAKgHACgPIAPAEQgEATgNAJQgMAKgRAAQgSAAgMgHg");
	this.shape_5.setTransform(14.9,-0.2);

	this.timeline.addTween(cjs.Tween.get({}).to({state:[{t:this.shape_5},{t:this.shape_4},{t:this.shape_3},{t:this.shape_2},{t:this.shape_1},{t:this.shape}]}).to({state:[]},3).wait(1));

	// Capa_2
	this.shape_6 = new cjs.Shape();
	this.shape_6.graphics.f("#FFFFFF").s().p("AgjAjQgOgOAAgVQAAgUAOgOQAPgPAUAAQAVAAAOAPQAPAOAAAUQAAAVgPAOQgOAPgVAAQgUAAgPgPg");

	this.shape_7 = new cjs.Shape();
	this.shape_7.graphics.f("#999999").s().p("AgqAqQgRgRAAgZQAAgXARgSQASgSAYAAQAYAAASASQASASAAAXQAAAZgSARQgSASgYAAQgYAAgSgSg");

	this.shape_8 = new cjs.Shape();
	this.shape_8.graphics.f("#FFFFFF").s().p("AgVAVQgIgJAAgMQAAgMAIgIQAKgJALAAQANAAAIAJQAJAIAAAMQAAAMgJAJQgIAJgNAAQgLAAgKgJg");

	this.shape_9 = new cjs.Shape();
	this.shape_9.graphics.f("#000000").s().p("AmtBkIAAjHINbAAIAADHg");
	this.shape_9.setTransform(33,0);

	this.timeline.addTween(cjs.Tween.get({}).to({state:[{t:this.shape_7},{t:this.shape_6}]}).to({state:[{t:this.shape_7},{t:this.shape_8}]},1).to({state:[{t:this.shape_9}]},2).wait(1));

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = new cjs.Rectangle(-6,-11,75.8,21.9);


(lib.btn_go02 = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// Capa_1
	this.shape = new cjs.Shape();
	this.shape.graphics.f("#000000").s().p("AgqA5IAAhxIBSAAIAAANIhCAAIAAAjIA+AAIAAANIg+AAIAAAnIBFAAIAAANg");
	this.shape.setTransform(42.1,-0.2);

	this.shape_1 = new cjs.Shape();
	this.shape_1.graphics.f("#000000").s().p("AguA5IAAhxIAnAAQAMAAAHABQAKADAHAGQAJAHAFAMQAEAMAAAPQAAAMgDAKQgDALgFAGQgEAHgGAEQgGADgIACQgIACgJAAgAgfAsIAYAAQALAAAGgCQAGgCAEgEQAGgGADgJQADgJAAgMQAAgSgGgJQgGgKgJgDQgGgDgMAAIgYAAg");
	this.shape_1.setTransform(31,-0.2);

	this.shape_2 = new cjs.Shape();
	this.shape_2.graphics.f("#000000").s().p("AgHA5IAAhxIAPAAIAABxg");
	this.shape_2.setTransform(22.8,-0.2);

	this.shape_3 = new cjs.Shape();
	this.shape_3.graphics.f("#000000").s().p("AgaA0QgMgIgFgOQgHgOABgQQgBgSAIgNQAGgNANgHQANgHAOAAQAQAAAMAJQAMAIAFAQIgPAEQgEgNgHgGQgJgFgLAAQgMAAgJAGQgJAGgEALQgDALAAALQAAAOAEALQAEAKAKAGQAIAFAKAAQANAAAIgHQAKgHACgPIAPAEQgEATgNAJQgMAKgRAAQgSAAgMgHg");
	this.shape_3.setTransform(14.9,-0.2);

	this.timeline.addTween(cjs.Tween.get({}).to({state:[{t:this.shape_3},{t:this.shape_2},{t:this.shape_1},{t:this.shape}]}).to({state:[]},3).wait(1));

	// Capa_2
	this.shape_4 = new cjs.Shape();
	this.shape_4.graphics.f("#FFFFFF").s().p("AgjAjQgOgOAAgVQAAgUAOgOQAPgPAUAAQAVAAAOAPQAPAOAAAUQAAAVgPAOQgOAPgVAAQgUAAgPgPg");

	this.shape_5 = new cjs.Shape();
	this.shape_5.graphics.f("#999999").s().p("AgqAqQgRgRAAgZQAAgXARgSQASgSAYAAQAYAAASASQASASAAAXQAAAZgSARQgSASgYAAQgYAAgSgSg");

	this.shape_6 = new cjs.Shape();
	this.shape_6.graphics.f("#FFFFFF").s().p("AgVAVQgIgJAAgMQAAgMAIgIQAKgJALAAQANAAAIAJQAJAIAAAMQAAAMgJAJQgIAJgNAAQgLAAgKgJg");

	this.shape_7 = new cjs.Shape();
	this.shape_7.graphics.f("#000000").s().p("AlEBkIAAjHIKJAAIAADHg");
	this.shape_7.setTransform(22.5,0);

	this.timeline.addTween(cjs.Tween.get({}).to({state:[{t:this.shape_5},{t:this.shape_4}]}).to({state:[{t:this.shape_5},{t:this.shape_6}]},1).to({state:[{t:this.shape_7}]},2).wait(1));

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = new cjs.Rectangle(-6,-11,55.4,21.9);


(lib.btn_go01 = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// Capa_1
	this.shape = new cjs.Shape();
	this.shape.graphics.f("#000000").s().p("AgbAgQgLgLAAgVQAAgWANgLQALgJAOAAQARAAALALQALALAAAUQAAAPgFAJQgFAJgJAGQgJAEgLAAQgQAAgLgLgAgRgXQgGAIAAAPQAAAQAGAIQAHAIAKAAQAKAAAHgIQAHgIAAgQQAAgPgHgHQgHgJgKAAQgKABgHAHg");
	this.shape.setTransform(82.8,1.4);

	this.shape_1 = new cjs.Shape();
	this.shape_1.graphics.f("#000000").s().p("AgbAgQgKgLAAgUQAAgUAKgMQALgLAQAAQARAAALALQAKALAAAUIAAAEIg9AAQABAOAHAGQAHAIAJAAQAIAAAFgEQAGgFADgIIAPABQgEANgJAIQgJAGgPAAQgRAAgLgLgAgPgYQgGAGgBALIAtAAQgBgLgEgEQgHgJgKAAQgJAAgHAHg");
	this.shape_1.setTransform(73.9,1.4);

	this.shape_2 = new cjs.Shape();
	this.shape_2.graphics.f("#000000").s().p("AgYA0QgOgHgHgOQgHgOAAgQQAAgQAHgPQAHgOANgHQANgHAQAAQANAAAKAEQAKAEAFAHQAHAHACAMIgNAEQgDgJgEgFQgEgFgHgDQgHgDgJAAQgJAAgIADQgHADgEAFQgFAFgDAHQgFAKABAMQgBAPAGAKQAFALALAFQAJAFAKAAQAKAAAKgEQAKgEAEgEIAAgWIgiAAIAAgMIAxAAIAAApQgLAJgMAFQgMAEgNAAQgQAAgNgHg");
	this.shape_2.setTransform(63.2,-0.2);

	this.shape_3 = new cjs.Shape();
	this.shape_3.graphics.f("#000000").s().p("AgbAgQgLgLAAgVQAAgWANgLQALgJAOAAQARAAALALQALALAAAUQAAAPgFAJQgFAJgJAGQgJAEgLAAQgQAAgLgLgAgRgXQgGAIAAAPQAAAQAGAIQAHAIAKAAQAKAAAHgIQAHgIAAgQQAAgPgHgHQgHgJgKAAQgKABgHAHg");
	this.shape_3.setTransform(52.6,1.4);

	this.shape_4 = new cjs.Shape();
	this.shape_4.graphics.f("#000000").s().p("AgWAqIAAhRIANAAIAAAMQAFgJAEgDQADgCAFAAQAHgBAHAFIgEANQgGgDgEAAQgGAAgCADQgDACgCAFQgDAIABAJIAAAqg");
	this.shape_4.setTransform(46.1,1.3);

	this.shape_5 = new cjs.Shape();
	this.shape_5.graphics.f("#000000").s().p("AgBA2QgFgCgBgEQgCgEAAgNIAAgvIgKAAIAAgKIAKAAIAAgVIANgIIAAAdIAOAAIAAAKIgOAAIAAAwQAAAGABABQAAABAAAAQAAABABAAQAAABAAAAQABAAAAABIAFABIAGgBIACAMIgLABQgHABgDgDg");
	this.shape_5.setTransform(40.7,0);

	this.shape_6 = new cjs.Shape();
	this.shape_6.graphics.f("#000000").s().p("AAUAqIAAgxQAAgJgCgEQgCgEgEgDQgEgCgGAAQgIAAgGAGQgHAFAAAQIAAAsIgOAAIAAhRIANAAIAAALQAJgNAQAAQAIAAAGACQAGADAEAFQADAEABAGIABANIAAAyg");
	this.shape_6.setTransform(33.9,1.3);

	this.shape_7 = new cjs.Shape();
	this.shape_7.graphics.f("#000000").s().p("AgbAgQgKgLAAgUQAAgUAKgMQALgLAQAAQARAAALALQAKALAAAUIAAAEIg9AAQABAOAHAGQAHAIAJAAQAIAAAFgEQAGgFADgIIAPABQgEANgJAIQgJAGgPAAQgRAAgLgLgAgPgYQgGAGgBALIAtAAQgBgLgEgEQgHgJgKAAQgJAAgHAHg");
	this.shape_7.setTransform(25,1.4);

	this.shape_8 = new cjs.Shape();
	this.shape_8.graphics.f("#000000").s().p("AgaA0QgMgIgFgOQgHgOABgQQgBgSAIgNQAGgNANgHQANgHAOAAQAQAAAMAJQAMAIAFAQIgPAEQgEgNgHgGQgJgFgLAAQgMAAgJAGQgJAGgEALQgDALAAALQAAAOAEALQAEAKAKAGQAIAFAKAAQANAAAIgHQAKgHACgPIAPAEQgEATgNAJQgMAKgRAAQgSAAgMgHg");
	this.shape_8.setTransform(14.9,-0.2);

	this.timeline.addTween(cjs.Tween.get({}).to({state:[{t:this.shape_8},{t:this.shape_7},{t:this.shape_6},{t:this.shape_5},{t:this.shape_4},{t:this.shape_3},{t:this.shape_2},{t:this.shape_1},{t:this.shape}]}).to({state:[]},3).wait(1));

	// Capa_2
	this.shape_9 = new cjs.Shape();
	this.shape_9.graphics.f("#FFFFFF").s().p("AgjAjQgOgOAAgVQAAgUAOgOQAPgPAUAAQAVAAAOAPQAPAOAAAUQAAAVgPAOQgOAPgVAAQgUAAgPgPg");

	this.shape_10 = new cjs.Shape();
	this.shape_10.graphics.f("#999999").s().p("AgqAqQgRgRAAgZQAAgXARgSQASgSAYAAQAYAAASASQASASAAAXQAAAZgSARQgSASgYAAQgYAAgSgSg");

	this.shape_11 = new cjs.Shape();
	this.shape_11.graphics.f("#FFFFFF").s().p("AgVAVQgIgJAAgMQAAgMAIgIQAKgJALAAQANAAAIAJQAJAIAAAMQAAAMgJAJQgIAJgNAAQgLAAgKgJg");

	this.shape_12 = new cjs.Shape();
	this.shape_12.graphics.f("#000000").s().p("AoMBkIAAjHIQZAAIAADHg");
	this.shape_12.setTransform(42.5,0);

	this.timeline.addTween(cjs.Tween.get({}).to({state:[{t:this.shape_10},{t:this.shape_9}]}).to({state:[{t:this.shape_10},{t:this.shape_11}]},1).to({state:[{t:this.shape_12}]},2).wait(1));

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = new cjs.Rectangle(-6,-11,95.5,21.9);


(lib.btn_go_graph = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// Capa_1
	this.shape = new cjs.Shape();
	this.shape.graphics.f("#FFFFFF").s().p("AgUAWQgJgKAAgMQAAgMAJgIQAJgJALAAQANAAAIAJQAJAIAAAMQAAAMgJAKQgIAIgNAAQgLAAgJgIg");

	this.shape_1 = new cjs.Shape();
	this.shape_1.graphics.f("#394C64").s().p("AgpAqQgSgRAAgZQAAgYASgRQARgSAYAAQAYAAASASQASARAAAYQAAAZgSARQgSASgYAAQgYAAgRgSg");

	this.timeline.addTween(cjs.Tween.get({}).to({state:[{t:this.shape_1},{t:this.shape}]}).wait(1));

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = new cjs.Rectangle(-6,-6,12,12);


(lib.mc_12 = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// Title
	this.shape = new cjs.Shape();
	this.shape.graphics.f("#000000").s().p("AgMAQQgGgGAAgKQAAgJAGgGQAEgGAIAAQAJAAAFAGQAFAGAAAJIAAACIgeAAQAAAHAEADQAEAEADAAQAEAAAEgCQACgCABgFIAIABQgCAHgFADQgEAEgIAAQgIAAgEgGgAgHgMQgDAEAAAFIAWAAQAAgFgDgDQgEgEgFAAQgEAAgDADg");
	this.shape.setTransform(-47.6,-50.9);

	this.shape_1 = new cjs.Shape();
	this.shape_1.graphics.f("#000000").s().p("AgKAXIAAAFIgHAAIAAg4IAIAAIAAAUQADgFAHAAQAEAAADABQADACACADIAEAGIABAIQAAALgFAFQgGAGgGAAQgHAAgEgGgAgHgDQgEADAAAHQABAIACADQADAFAFAAQAEAAAEgEQADgEAAgIQAAgHgDgEQgDgDgFAAQgDAAgEAEg");
	this.shape_1.setTransform(-52,-51.6);

	this.shape_2 = new cjs.Shape();
	this.shape_2.graphics.f("#000000").s().p("AgCAdIAAgpIAGAAIAAApgAgCgTIAAgJIAGAAIAAAJg");
	this.shape_2.setTransform(-55.2,-51.7);

	this.shape_3 = new cjs.Shape();
	this.shape_3.graphics.f("#000000").s().p("AgKAVIAAgoIAGAAIAAAGIAEgGQAAAAABAAQAAgBABAAQAAAAABAAQABAAAAAAQAEAAADACIgCAHIgFgCIgEACQAAAAAAAAQgBABAAAAQAAABAAAAQgBABAAAAQgBAEAAAEIAAAVg");
	this.shape_3.setTransform(-57.1,-50.9);

	this.shape_4 = new cjs.Shape();
	this.shape_4.graphics.f("#000000").s().p("AgPASQgDgDAAgFQAAgDACgDQAAgCADgCIAFgBIAGgBIAMgDIAAgBQAAgFgCgBQgDgDgFAAQgEAAgCACQgDACgBAEIgHgBQABgEACgDQACgDAFgBQAEgCAEAAQAFAAAEACQADABABACIADAFIAAAGIAAAIIABANIABAFIgHAAQgCgCABgDIgIAEIgHACQgHAAgEgEgAAAADIgHABIgCACIgCAEQAAAAABABQAAABAAAAQAAABABAAQAAABABAAQACACAEAAQADAAADgCQADgBACgDQABgDAAgEIAAgDIgKADg");
	this.shape_4.setTransform(-61,-50.9);

	this.shape_5 = new cjs.Shape();
	this.shape_5.graphics.f("#000000").s().p("AgMAZQgGgDgDgHQgDgIAAgHQAAgIADgHQAEgHAGgDQAGgEAHAAQAIAAAGAFQAGAEACAIIgHABQgCgFgEgEQgEgDgFAAQgGABgEADQgFADgCAFQgBAGAAAFQAAAGACAGQACAGAEADQAFACAEAAQAGAAAFgDQAEgFACgGIAHACQgCAIgGAFQgGAGgJAAQgJAAgFgFg");
	this.shape_5.setTransform(-66.1,-51.6);

	this.timeline.addTween(cjs.Tween.get({}).to({state:[{t:this.shape_5},{t:this.shape_4},{t:this.shape_3},{t:this.shape_2},{t:this.shape_1},{t:this.shape}]}).wait(1));

	// Frame
	this.shape_6 = new cjs.Shape();
	this.shape_6.graphics.f().s("#94945A").ss(1,0,0,22.9).p("At+phIb9AAIAATDI79AAg");

	this.timeline.addTween(cjs.Tween.get(this.shape_6).wait(1));

	// Mask (mask)
	var mask = new cjs.Shape();
	mask._off = true;
	mask.graphics.p("At+JiIAAzDIb9AAIAATDg");

	// Map
	this.instance = new lib.graph_12("synched",0);
	this.instance.parent = this;

	var maskedShapeInstanceList = [this.instance];

	for(var shapedInstanceItr = 0; shapedInstanceItr < maskedShapeInstanceList.length; shapedInstanceItr++) {
		maskedShapeInstanceList[shapedInstanceItr].mask = mask;
	}

	this.timeline.addTween(cjs.Tween.get(this.instance).wait(1));

	// Map_Bottom
	this.map_bottom = new lib.mc_12_bottom();
	this.map_bottom.name = "map_bottom";
	this.map_bottom.parent = this;
	this.map_bottom.alpha = 0.602;

	this.shape_7 = new cjs.Shape();
	this.shape_7.graphics.f("#F1F1E6").s().p("AgqAXQgBgMAHgLQAXgkAEAAQAEgBAVAEQAKgCAFgDIAMgHQAAAPgfAjQgfAkgQAFQgGgTgBgEg");
	this.shape_7.setTransform(77.2,-20.1);

	var maskedShapeInstanceList = [this.map_bottom,this.shape_7];

	for(var shapedInstanceItr = 0; shapedInstanceItr < maskedShapeInstanceList.length; shapedInstanceItr++) {
		maskedShapeInstanceList[shapedInstanceItr].mask = mask;
	}

	this.timeline.addTween(cjs.Tween.get({}).to({state:[{t:this.shape_7},{t:this.map_bottom}]}).wait(1));

	// Texture
	this.instance_1 = new lib.mc_12_background();
	this.instance_1.parent = this;
	this.instance_1.setTransform(-89,-61);

	this.timeline.addTween(cjs.Tween.get(this.instance_1).wait(1));

	// Background
	this.shape_8 = new cjs.Shape();
	this.shape_8.graphics.f("rgba(255,255,255,0.2)").s().p("At+JiIAAzDIb9AAIAATDg");

	this.timeline.addTween(cjs.Tween.get(this.shape_8).wait(1));

}).prototype = getMCSymbolPrototype(lib.mc_12, new cjs.Rectangle(-90.5,-62,181,124), null);


(lib.mc_11 = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// Title
	this.shape = new cjs.Shape();
	this.shape.graphics.f("#000000").s().p("AgNAQQgGgFAAgLQAAgLAHgFQAGgFAGAAQAIAAAGAGQAFAGABAJQgBAHgCAFQgCAFgFACQgEADgGAAQgIAAgFgGgAgHgLQgEAEAAAHQAAAIAEAEQADAEAEAAQAGAAADgEQADgEAAgIQAAgHgDgEQgDgEgGAAQgEAAgDAEg");
	this.shape.setTransform(-5.7,56.1);

	this.shape_1 = new cjs.Shape();
	this.shape_1.graphics.f("#000000").s().p("AAVAVIAAgZIAAgGIgDgDQAAAAgBAAQgBgBAAAAQgBAAAAAAQgBAAgBAAQgEAAgDADQgCADAAAGIAAAXIgHAAIAAgaQAAgEgBgDQgCgCgEAAQgDAAgCABQgDACgBADIgBAIIAAAVIgHAAIAAgoIAGAAIAAAGQACgDAEgCQACgCAEAAQAGAAACACQACACACADQAEgHAIAAQAGAAADADQAEAEAAAHIAAAbg");
	this.shape_1.setTransform(-11.2,56.1);

	this.shape_2 = new cjs.Shape();
	this.shape_2.graphics.f("#000000").s().p("AAAAbIgDgDIgBgIIAAgXIgFAAIAAgGIAFAAIAAgKIAGgEIAAAOIAHAAIAAAGIgHAAIAAAXIABAEIAAABIADABIADgBIABAHIgFAAIgFgBg");
	this.shape_2.setTransform(-15.6,55.4);

	this.shape_3 = new cjs.Shape();
	this.shape_3.graphics.f("#000000").s().p("AgLASQgEgDgBgHIAHgBQAAAEADADQADACADAAQAFAAADgCQAAgBABAAQAAgBAAAAQABgBAAgBQAAAAAAgBQAAAAAAgBQAAAAgBgBQAAAAAAgBQgBAAAAAAIgHgDIgKgDQgDgBgCgCQgBgDAAgDIABgFQABgCADgCIAEgCIAGgBQAEAAAEACQADABACADIADAGIgHABQgBgDgCgCQgCgCgEAAQgEAAgCACQgBAAAAABQAAAAgBAAQAAABAAAAQAAABAAAAIABADQAAAAAAAAQAAABABAAQAAAAAAAAQABABAAAAIAFACIALADQADAAABADQACACAAAEQAAADgCADQgCADgEACQgEACgFAAQgHAAgEgEg");
	this.shape_3.setTransform(-18.8,56.1);

	this.shape_4 = new cjs.Shape();
	this.shape_4.graphics.f("#000000").s().p("AgDAdIAAg5IAHAAIAAA5g");
	this.shape_4.setTransform(-21.9,55.3);

	this.timeline.addTween(cjs.Tween.get({}).to({state:[{t:this.shape_4},{t:this.shape_3},{t:this.shape_2},{t:this.shape_1},{t:this.shape}]}).wait(1));

	// Frame
	this.shape_5 = new cjs.Shape();
	this.shape_5.graphics.f().s("#94945A").ss(1,0,0,22.9).p("Aryp6IXlAAIAAT1I3lAAg");

	this.timeline.addTween(cjs.Tween.get(this.shape_5).wait(1));

	// Mask (mask)
	var mask = new cjs.Shape();
	mask._off = true;
	mask.graphics.p("AryJ7IAAz1IXlAAIAAT1g");

	// Map
	this.instance = new lib.graph_11("synched",0);
	this.instance.parent = this;

	var maskedShapeInstanceList = [this.instance];

	for(var shapedInstanceItr = 0; shapedInstanceItr < maskedShapeInstanceList.length; shapedInstanceItr++) {
		maskedShapeInstanceList[shapedInstanceItr].mask = mask;
	}

	this.timeline.addTween(cjs.Tween.get(this.instance).wait(1));

	// Map_Bottom
	this.map_bottom = new lib.mc_11_bottom();
	this.map_bottom.name = "map_bottom";
	this.map_bottom.parent = this;
	this.map_bottom.alpha = 0.602;

	var maskedShapeInstanceList = [this.map_bottom];

	for(var shapedInstanceItr = 0; shapedInstanceItr < maskedShapeInstanceList.length; shapedInstanceItr++) {
		maskedShapeInstanceList[shapedInstanceItr].mask = mask;
	}

	this.timeline.addTween(cjs.Tween.get(this.map_bottom).wait(1));

	// Texture
	this.instance_1 = new lib.mc_11_background();
	this.instance_1.parent = this;
	this.instance_1.setTransform(-75,-63);

	this.timeline.addTween(cjs.Tween.get(this.instance_1).wait(1));

	// Background
	this.shape_6 = new cjs.Shape();
	this.shape_6.graphics.f("rgba(255,255,255,0.2)").s().p("AryJ7IAAz1IXlAAIAAT1g");

	this.timeline.addTween(cjs.Tween.get(this.shape_6).wait(1));

}).prototype = getMCSymbolPrototype(lib.mc_11, new cjs.Rectangle(-76.5,-64.5,153,129), null);


(lib.mc_10 = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// Title
	this.shape = new cjs.Shape();
	this.shape.graphics.f("#000000").s().p("AgNAQQgFgFgBgLQABgLAGgFQAFgFAHAAQAJAAAFAGQAGAGAAAJQAAAHgDAFQgCAFgFACQgEADgGAAQgHAAgGgGgAgIgLQgDAEAAAHQAAAIADAEQAEAEAEAAQAGAAADgEQADgEABgIQgBgHgDgEQgDgEgGAAQgEAAgEAEg");
	this.shape.setTransform(26.5,-67.9);

	this.shape_1 = new cjs.Shape();
	this.shape_1.graphics.f("#000000").s().p("AgFAdIAAgjIgGAAIAAgFIAGAAIAAgFIABgGQABgDADgCQABgBAFAAIAGAAIgBAHIgEgBQgBAAAAAAQgBAAgBAAQAAABgBAAQAAAAAAABQgCABAAADIAAAFIAIAAIAAAFIgIAAIAAAjg");
	this.shape_1.setTransform(23.3,-68.7);

	this.shape_2 = new cjs.Shape();
	this.shape_2.graphics.f("#000000").s().p("AgCAdIAAg5IAFAAIAAA5g");
	this.shape_2.setTransform(21.1,-68.7);

	this.shape_3 = new cjs.Shape();
	this.shape_3.graphics.f("#000000").s().p("AgNAQQgGgFAAgLQAAgLAHgFQAFgFAHAAQAJAAAFAGQAGAGAAAJQAAAHgDAFQgDAFgEACQgFADgFAAQgIAAgFgGgAgHgLQgEAEAAAHQAAAIAEAEQADAEAEAAQAFAAAEgEQADgEABgIQgBgHgDgEQgEgEgFAAQgEAAgDAEg");
	this.shape_3.setTransform(18,-67.9);

	this.shape_4 = new cjs.Shape();
	this.shape_4.graphics.f("#000000").s().p("AgMAaQgGgDgEgIQgDgGAAgJQAAgHADgIQAEgGAGgEQAHgEAHAAQAGABAFACQAFACADADQADAEACAFIgHACIgDgGQgCgDgEgCQgDgCgFAAQgEAAgEACQgEACgCADQgCACgBADQgDAFAAAGQAAAHADAFQADAFAFADQAFADAEgBQAFABAFgCQAFgCACgCIAAgLIgRAAIAAgGIAYAAIAAAUQgFAFgGADQgGABgGAAQgIAAgHgDg");
	this.shape_4.setTransform(12.7,-68.6);

	this.timeline.addTween(cjs.Tween.get({}).to({state:[{t:this.shape_4},{t:this.shape_3},{t:this.shape_2},{t:this.shape_1},{t:this.shape}]}).wait(1));

	// Frame
	this.shape_5 = new cjs.Shape();
	this.shape_5.graphics.f().s("#94945A").ss(1,0,0,22.9).p("AoWsBIQtAAIAAYDIwtAAg");

	this.timeline.addTween(cjs.Tween.get(this.shape_5).wait(1));

	// Mask (mask)
	var mask = new cjs.Shape();
	mask._off = true;
	mask.graphics.p("AoWMCIAA4DIQtAAIAAYDg");

	// Map
	this.instance = new lib.graph_10("synched",0);
	this.instance.parent = this;

	var maskedShapeInstanceList = [this.instance];

	for(var shapedInstanceItr = 0; shapedInstanceItr < maskedShapeInstanceList.length; shapedInstanceItr++) {
		maskedShapeInstanceList[shapedInstanceItr].mask = mask;
	}

	this.timeline.addTween(cjs.Tween.get(this.instance).wait(1));

	// Map_Bottom
	this.map_bottom = new lib.mc_10_bottom();
	this.map_bottom.name = "map_bottom";
	this.map_bottom.parent = this;
	this.map_bottom.alpha = 0.602;

	var maskedShapeInstanceList = [this.map_bottom];

	for(var shapedInstanceItr = 0; shapedInstanceItr < maskedShapeInstanceList.length; shapedInstanceItr++) {
		maskedShapeInstanceList[shapedInstanceItr].mask = mask;
	}

	this.timeline.addTween(cjs.Tween.get(this.map_bottom).wait(1));

	// Texture
	this.instance_1 = new lib.mc_10_background();
	this.instance_1.parent = this;
	this.instance_1.setTransform(-53,-77);

	this.timeline.addTween(cjs.Tween.get(this.instance_1).wait(1));

	// Background
	this.shape_6 = new cjs.Shape();
	this.shape_6.graphics.f("rgba(255,255,255,0.2)").s().p("AoWMCIAA4DIQtAAIAAYDg");

	this.timeline.addTween(cjs.Tween.get(this.shape_6).wait(1));

}).prototype = getMCSymbolPrototype(lib.mc_10, new cjs.Rectangle(-54.5,-78,109,156), null);


(lib.mc_09 = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// Title
	this.shape = new cjs.Shape();
	this.shape.graphics.f("#000000").s().p("AgNAQQgGgFABgLQgBgLAHgFQAFgFAHAAQAIAAAGAGQAFAGAAAJQAAAHgCAFQgCAFgFACQgEADgGAAQgHAAgGgGgAgHgLQgEAEAAAHQAAAIAEAEQADAEAEAAQAGAAADgEQAEgEgBgIQABgHgEgEQgDgEgGAAQgEAAgDAEg");
	this.shape.setTransform(-18.6,48.1);

	this.shape_1 = new cjs.Shape();
	this.shape_1.graphics.f("#000000").s().p("AgKAVIAAgoIAGAAIAAAGIAEgGQAAAAABAAQAAgBABAAQAAAAABAAQABAAAAAAQAEAAADACIgCAHIgFgCIgEACQAAAAAAAAQgBABAAAAQAAABAAAAQgBABAAAAQgBAEAAAEIAAAVg");
	this.shape_1.setTransform(-21.8,48.1);

	this.shape_2 = new cjs.Shape();
	this.shape_2.graphics.f("#000000").s().p("AAAAbIgDgDIgBgIIAAgXIgFAAIAAgGIAFAAIAAgKIAGgEIAAAOIAHAAIAAAGIgHAAIAAAXIABAEIABABIACABIADgBIABAHIgFAAIgFgBg");
	this.shape_2.setTransform(-24.5,47.4);

	this.shape_3 = new cjs.Shape();
	this.shape_3.graphics.f("#000000").s().p("AAKAVIAAgYIgBgGQAAgBgBAAQAAgBAAAAQgBgBAAAAQgBAAAAgBQgBAAAAAAQgBgBAAAAQgBAAgBAAQAAAAgBAAQgDAAgEADQgDADAAAIIAAAVIgHAAIAAgoIAGAAIAAAGQAFgHAIAAQADAAADABQAEACABACIACAFIABAHIAAAYg");
	this.shape_3.setTransform(-27.9,48.1);

	this.shape_4 = new cjs.Shape();
	this.shape_4.graphics.f("#000000").s().p("AgMAQQgGgGAAgKQAAgJAGgGQAEgGAIAAQAJAAAFAGQAFAGAAAJIAAACIgeAAQAAAHAEADQAEAEADAAQAEAAAEgCQACgCABgFIAIABQgCAHgFADQgEAEgIAAQgIAAgEgGgAgHgMQgDAEAAAFIAWAAQAAgFgDgDQgEgEgFAAQgEAAgDADg");
	this.shape_4.setTransform(-32.3,48.1);

	this.shape_5 = new cjs.Shape();
	this.shape_5.graphics.f("#000000").s().p("AgMAZQgGgDgDgHQgDgIAAgHQAAgIADgHQAEgHAGgDQAGgEAHAAQAIAAAGAFQAGAEACAIIgHABQgCgFgEgEQgEgCgFAAQgGAAgEADQgFADgCAFQgBAGAAAFQAAAGACAGQACAGAEADQAFACAEAAQAGAAAFgDQAEgFACgGIAHACQgCAIgGAFQgGAGgJAAQgJAAgFgFg");
	this.shape_5.setTransform(-37.4,47.4);

	this.shape_6 = new cjs.Shape();
	this.shape_6.graphics.f("#000000").s().p("AgNAQQgGgFABgLQgBgLAHgFQAGgFAGAAQAIAAAGAGQAFAGABAJQgBAHgCAFQgCAFgFACQgEADgGAAQgHAAgGgGgAgHgLQgEAEAAAHQAAAIAEAEQADAEAEAAQAGAAADgEQADgEAAgIQAAgHgDgEQgDgEgGAAQgEAAgDAEg");
	this.shape_6.setTransform(-44.8,48.1);

	this.shape_7 = new cjs.Shape();
	this.shape_7.graphics.f("#000000").s().p("AgMAQQgFgFAAgLQAAgGACgFQACgFAFgCQAEgDAFAAQAHAAAEAEQAEADABAGIgGACQgBgFgDgCQgCgCgEAAQgEAAgEAEQgDAEAAAHQAAAIADAEQAEAEAEAAQAEAAADgDQACgCABgFIAHAAQgBAIgFAEQgEAEgHAAQgIAAgFgGg");
	this.shape_7.setTransform(-48.9,48.1);

	this.shape_8 = new cjs.Shape();
	this.shape_8.graphics.f("#000000").s().p("AgDAdIAAgpIAGAAIAAApgAgDgTIAAgJIAGAAIAAAJg");
	this.shape_8.setTransform(-51.9,47.3);

	this.shape_9 = new cjs.Shape();
	this.shape_9.graphics.f("#000000").s().p("AgFAdIAAgjIgGAAIAAgFIAGAAIAAgFIABgGQABgDADgCQABgBAFAAIAGABIgBAGIgEgBQgBAAAAAAQgBAAgBAAQAAABgBAAQAAAAAAABQgCABAAADIAAAFIAIAAIAAAFIgIAAIAAAjg");
	this.shape_9.setTransform(-53.7,47.3);

	this.shape_10 = new cjs.Shape();
	this.shape_10.graphics.f("#000000").s().p("AgGAdIAAgpIAGAAIAAApgAgGgRIAFgLIAIAAIgIALg");
	this.shape_10.setTransform(-55.7,47.3);

	this.shape_11 = new cjs.Shape();
	this.shape_11.graphics.f("#000000").s().p("AgMAQQgFgFAAgLQAAgGACgFQACgFAFgCQAEgDAFAAQAHAAAEAEQAEADABAGIgGACQgBgFgDgCQgCgCgEAAQgEAAgEAEQgDAEAAAHQAAAIADAEQAEAEAEAAQAEAAADgDQACgCABgFIAHAAQgBAIgFAEQgEAEgHAAQgIAAgFgGg");
	this.shape_11.setTransform(-59.1,48.1);

	this.shape_12 = new cjs.Shape();
	this.shape_12.graphics.f("#000000").s().p("AgOASQgEgDAAgFQAAgDACgDQABgCACgCIAFgBIAGgBIAMgDIAAgBQAAgFgCgBQgDgDgFAAQgEAAgCACQgDACgBAEIgHgBIADgHQADgDAEgBQAEgCAEAAQAFAAAEACQADABABACIACAFIABAGIAAAIIAAANIACAFIgHAAQgBgCAAgDIgIAEIgHACQgHAAgDgEgAgBADIgGABIgDACIgBAEQAAAAABABQAAABAAAAQAAABABAAQAAABAAAAQADACAEAAQADAAADgCQADgBABgDQACgDAAgEIAAgDIgLADg");
	this.shape_12.setTransform(-63.4,48.1);

	this.shape_13 = new cjs.Shape();
	this.shape_13.graphics.f("#000000").s().p("AgVAdIAAg5IAVAAIAJABQADABADACQAEACABADQACAEAAAEQAAAHgFAEQgEAFgMAAIgOAAIAAAYgAgNAAIAOAAQAHAAADgDQADgDAAgFQAAgDgCgDQgBgCgDgBIgHgBIgOAAg");
	this.shape_13.setTransform(-68.2,47.3);

	this.timeline.addTween(cjs.Tween.get({}).to({state:[{t:this.shape_13},{t:this.shape_12},{t:this.shape_11},{t:this.shape_10},{t:this.shape_9},{t:this.shape_8},{t:this.shape_7},{t:this.shape_6},{t:this.shape_5},{t:this.shape_4},{t:this.shape_3},{t:this.shape_2},{t:this.shape_1},{t:this.shape}]}).wait(1));

	// Frame
	this.shape_14 = new cjs.Shape();
	this.shape_14.graphics.f().s("#94945A").ss(1,0,0,22.9).p("ArjoWIXHAAIAAQtI3HAAg");

	this.timeline.addTween(cjs.Tween.get(this.shape_14).wait(1));

	// Mask (mask)
	var mask = new cjs.Shape();
	mask._off = true;
	mask.graphics.p("ArjIXIAAwtIXHAAIAAQtg");

	// Map
	this.instance = new lib.graph_09("synched",0);
	this.instance.parent = this;

	var maskedShapeInstanceList = [this.instance];

	for(var shapedInstanceItr = 0; shapedInstanceItr < maskedShapeInstanceList.length; shapedInstanceItr++) {
		maskedShapeInstanceList[shapedInstanceItr].mask = mask;
	}

	this.timeline.addTween(cjs.Tween.get(this.instance).wait(1));

	// Map_Bottom
	this.map_bottom = new lib.mc_09_bottom();
	this.map_bottom.name = "map_bottom";
	this.map_bottom.parent = this;
	this.map_bottom.alpha = 0.602;

	var maskedShapeInstanceList = [this.map_bottom];

	for(var shapedInstanceItr = 0; shapedInstanceItr < maskedShapeInstanceList.length; shapedInstanceItr++) {
		maskedShapeInstanceList[shapedInstanceItr].mask = mask;
	}

	this.timeline.addTween(cjs.Tween.get(this.map_bottom).wait(1));

	// Texture
	this.instance_1 = new lib.mc_09_background();
	this.instance_1.parent = this;
	this.instance_1.setTransform(-74,-53);

	this.timeline.addTween(cjs.Tween.get(this.instance_1).wait(1));

	// Background
	this.shape_15 = new cjs.Shape();
	this.shape_15.graphics.f("rgba(255,255,255,0.2)").s().p("ArjIXIAAwtIXHAAIAAQtg");

	this.timeline.addTween(cjs.Tween.get(this.shape_15).wait(1));

}).prototype = getMCSymbolPrototype(lib.mc_09, new cjs.Rectangle(-75,-54.5,150,109), null);


(lib.mc_08 = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// Title
	this.shape = new cjs.Shape();
	this.shape.graphics.f("#000000").s().p("AgNAQQgGgFABgLQgBgLAHgFQAGgFAGAAQAIAAAGAGQAFAGABAJQgBAHgCAFQgCAFgFACQgEADgGAAQgHAAgGgGgAgHgLQgEAEAAAHQAAAIAEAEQADAEAEAAQAGAAADgEQADgEAAgIQAAgHgDgEQgDgEgGAAQgEAAgDAEg");
	this.shape.setTransform(-4.3,23.1);

	this.shape_1 = new cjs.Shape();
	this.shape_1.graphics.f("#000000").s().p("AgMAQQgFgFAAgLQAAgGACgFQACgFAFgCQAEgDAFAAQAHAAAEAEQAEADABAGIgGACQgBgFgDgCQgCgCgEAAQgEAAgEAEQgDAEAAAHQAAAIADAEQAEAEAEAAQAEAAADgDQACgCABgFIAHAAQgBAIgFAEQgEAEgHAAQgIAAgFgGg");
	this.shape_1.setTransform(-8.4,23.1);

	this.shape_2 = new cjs.Shape();
	this.shape_2.graphics.f("#000000").s().p("AgCAdIAAg5IAGAAIAAA5g");
	this.shape_2.setTransform(-11.4,22.3);

	this.shape_3 = new cjs.Shape();
	this.shape_3.graphics.f("#000000").s().p("AgIAUIgGgEIgCgFIAAgHIAAgYIAHAAIAAAWIABAHQAAADACACQACABAEAAQACAAACgBQAEgCABgDIABgIIAAgVIAHAAIAAAoIgHAAIAAgGQgEAHgHAAQgFAAgCgBg");
	this.shape_3.setTransform(-14.5,23.2);

	this.shape_4 = new cjs.Shape();
	this.shape_4.graphics.f("#000000").s().p("AgRAdIAAg4IAGAAIAAAFQACgDADgCQADgBADAAQAGAAADADQAEACADAFQACAFAAAGQAAAHgCAEQgDAFgEACQgFADgEAAQgDAAgDgBQgDgCgBgCIAAAUgAgIgSQgDAEAAAIQAAAHADAEQADADAFAAQAEAAAEgEQACgEAAgHQAAgIgCgEQgEgEgEAAQgEAAgEAFg");
	this.shape_4.setTransform(-18.8,23.9);

	this.shape_5 = new cjs.Shape();
	this.shape_5.graphics.f("#000000").s().p("AgPASQgDgDAAgFQAAgDABgDQACgCACgCIAFgBIAGgBIAMgDIAAgBQAAgFgCgBQgDgDgFAAQgEAAgDACQgCACgBAEIgHgBIADgHQADgDADgBQAEgCAFAAQAFAAADACQAEABACACIACAFIAAAGIAAAIIABANIABAFIgHAAQgBgCgBgDIgHAEIgHACQgHAAgEgEgAAAADIgHABIgCACIgBAEQAAAAAAABQAAABAAAAQAAABABAAQAAABABAAQACACAEAAQADAAADgCQADgBACgDQABgDAAgEIAAgDIgKADg");
	this.shape_5.setTransform(-23.4,23.1);

	this.shape_6 = new cjs.Shape();
	this.shape_6.graphics.f("#000000").s().p("AgMAQQgFgFAAgLQAAgGACgFQACgFAFgCQAEgDAFAAQAHAAAEAEQAEADABAGIgGACQgBgFgDgCQgCgCgEAAQgEAAgEAEQgDAEAAAHQAAAIADAEQAEAEAEAAQAEAAADgDQACgCABgFIAHAAQgBAIgFAEQgEAEgHAAQgIAAgFgGg");
	this.shape_6.setTransform(-27.5,23.1);

	this.shape_7 = new cjs.Shape();
	this.shape_7.graphics.f("#000000").s().p("AASAdIgHgSIgXAAIgGASIgIAAIAWg5IAHAAIAYA5gAgDgLIgGAQIASAAIgGgPIgDgLIgDAKg");
	this.shape_7.setTransform(-32.3,22.3);

	this.timeline.addTween(cjs.Tween.get({}).to({state:[{t:this.shape_7},{t:this.shape_6},{t:this.shape_5},{t:this.shape_4},{t:this.shape_3},{t:this.shape_2},{t:this.shape_1},{t:this.shape}]}).wait(1));

	// Frame
	this.shape_8 = new cjs.Shape();
	this.shape_8.graphics.f().s("#94945A").ss(1,0,0,22.9).p("Ao5kwIRzAAIAAJhIxzAAg");

	this.timeline.addTween(cjs.Tween.get(this.shape_8).wait(1));

	// Mask (mask)
	var mask = new cjs.Shape();
	mask._off = true;
	mask.graphics.p("Ao5ExIAAphIRzAAIAAJhg");

	// Map
	this.instance = new lib.graph_08("synched",0);
	this.instance.parent = this;

	var maskedShapeInstanceList = [this.instance];

	for(var shapedInstanceItr = 0; shapedInstanceItr < maskedShapeInstanceList.length; shapedInstanceItr++) {
		maskedShapeInstanceList[shapedInstanceItr].mask = mask;
	}

	this.timeline.addTween(cjs.Tween.get(this.instance).wait(1));

	// Map_Bottom
	this.map_bottom = new lib.mc_08_bottom();
	this.map_bottom.name = "map_bottom";
	this.map_bottom.parent = this;
	this.map_bottom.alpha = 0.602;

	var maskedShapeInstanceList = [this.map_bottom];

	for(var shapedInstanceItr = 0; shapedInstanceItr < maskedShapeInstanceList.length; shapedInstanceItr++) {
		maskedShapeInstanceList[shapedInstanceItr].mask = mask;
	}

	this.timeline.addTween(cjs.Tween.get(this.map_bottom).wait(1));

	// Texture
	this.instance_1 = new lib.mc_08_background();
	this.instance_1.parent = this;
	this.instance_1.setTransform(-57,-30);

	this.timeline.addTween(cjs.Tween.get(this.instance_1).wait(1));

	// Background
	this.shape_9 = new cjs.Shape();
	this.shape_9.graphics.f("rgba(255,255,255,0.2)").s().p("Ao5ExIAAphIRzAAIAAJhg");

	this.timeline.addTween(cjs.Tween.get(this.shape_9).wait(1));

}).prototype = getMCSymbolPrototype(lib.mc_08, new cjs.Rectangle(-58,-31.5,116,63), null);


(lib.mc_07 = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// Title
	this.shape = new cjs.Shape();
	this.shape.graphics.f("#000000").s().p("AgNAQQgFgFgBgLQABgLAGgFQAGgFAGAAQAIAAAGAGQAGAGgBAJQAAAHgCAFQgDAFgEACQgEADgGAAQgHAAgGgGgAgIgLQgDAEAAAHQAAAIADAEQAEAEAEAAQAGAAADgEQAEgEAAgIQAAgHgEgEQgDgEgGAAQgEAAgEAEg");
	this.shape.setTransform(-28.5,44.1);

	this.shape_1 = new cjs.Shape();
	this.shape_1.graphics.f("#000000").s().p("AgGAdIAAgpIAGAAIAAApgAgGgRIAFgLIAIAAIgIALg");
	this.shape_1.setTransform(-31.5,43.3);

	this.shape_2 = new cjs.Shape();
	this.shape_2.graphics.f("#000000").s().p("AgHAkIABgGIAEABIACgBQAAgCAAgGIAAgqIAIAAIAAArQAAAHgCADQgDAEgEAAIgGgBgAAAgcIAAgIIAIAAIAAAIg");
	this.shape_2.setTransform(-34.2,44.2);

	this.shape_3 = new cjs.Shape();
	this.shape_3.graphics.f("#000000").s().p("AgPASQgDgDAAgFQAAgDABgDQACgCACgCIAFgBIAGgBIAMgDIAAgBQAAgFgCgBQgDgDgFAAQgEAAgDACQgCACgBAEIgHgBIADgHQADgDADgBQAEgCAFAAQAFAAADACQAEABACACIACAFIAAAGIAAAIIABANIABAFIgHAAQgBgCgBgDIgHAEIgHACQgHAAgEgEgAAAADIgHABIgCACIgBAEQAAAAAAABQAAABAAAAQAAABABAAQAAABABAAQACACAEAAQADAAADgCQADgBACgDQABgDAAgEIAAgDIgKADg");
	this.shape_3.setTransform(-36.9,44.1);

	this.shape_4 = new cjs.Shape();
	this.shape_4.graphics.f("#000000").s().p("AgVAdIAAg5IAVAAQAGAAAFACQADACACAEQADADAAAEQAAAEgCADQgCADgEACQAFABADADQACAEAAAFQAAAEgBAEQgCADgDACIgFADIgKABgAgNAWIANAAIAFAAIAFgCQAAAAAAAAQABgBAAAAQABgBAAAAQAAgBAAAAQABgBAAAAQAAgBABAAQAAgBAAgBQAAAAAAgBQAAgDgCgCQgBgDgEgBIgHgBIgNAAgAgNgDIAMAAIAGgBQADgBACgCQABgCABgDQgBgDgBgCQgCgCgCgBIgIgBIgLAAg");
	this.shape_4.setTransform(-41.7,43.3);

	this.timeline.addTween(cjs.Tween.get({}).to({state:[{t:this.shape_4},{t:this.shape_3},{t:this.shape_2},{t:this.shape_1},{t:this.shape}]}).wait(1));

	// Frame
	this.shape_5 = new cjs.Shape();
	this.shape_5.graphics.f().s("#94945A").ss(1,0,0,22.9).p("AoMn9IQZAAIAAP7IwZAAg");

	this.timeline.addTween(cjs.Tween.get(this.shape_5).wait(1));

	// Mask (mask)
	var mask = new cjs.Shape();
	mask._off = true;
	mask.graphics.p("AoMH+IAAv7IQZAAIAAP7g");

	// Map
	this.instance = new lib.graph_07("synched",0);
	this.instance.parent = this;

	var maskedShapeInstanceList = [this.instance];

	for(var shapedInstanceItr = 0; shapedInstanceItr < maskedShapeInstanceList.length; shapedInstanceItr++) {
		maskedShapeInstanceList[shapedInstanceItr].mask = mask;
	}

	this.timeline.addTween(cjs.Tween.get(this.instance).wait(1));

	// Map_Bottom
	this.map_bottom = new lib.mc_07_bottom();
	this.map_bottom.name = "map_bottom";
	this.map_bottom.parent = this;
	this.map_bottom.alpha = 0.602;

	var maskedShapeInstanceList = [this.map_bottom];

	for(var shapedInstanceItr = 0; shapedInstanceItr < maskedShapeInstanceList.length; shapedInstanceItr++) {
		maskedShapeInstanceList[shapedInstanceItr].mask = mask;
	}

	this.timeline.addTween(cjs.Tween.get(this.map_bottom).wait(1));

	// Texture
	this.instance_1 = new lib.mc_07_background();
	this.instance_1.parent = this;
	this.instance_1.setTransform(-52,-51);

	this.timeline.addTween(cjs.Tween.get(this.instance_1).wait(1));

	// Background
	this.shape_6 = new cjs.Shape();
	this.shape_6.graphics.f("rgba(255,255,255,0.2)").s().p("AoMH+IAAv7IQZAAIAAP7g");

	this.timeline.addTween(cjs.Tween.get(this.shape_6).wait(1));

}).prototype = getMCSymbolPrototype(lib.mc_07, new cjs.Rectangle(-53.5,-52,107,104), null);


(lib.mc_06 = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// Title
	this.shape = new cjs.Shape();
	this.shape.graphics.f("#000000").s().p("AgLASQgEgDgBgHIAHgBQAAAEADADQADACADAAQAFAAADgCQAAgBABAAQAAgBAAAAQABgBAAgBQAAAAAAgBQAAAAAAgBQAAAAgBgBQAAAAAAgBQgBAAAAAAIgHgDIgKgDQgDgBgCgCQgBgDAAgDIABgFQABgCADgCIAEgCIAGgBQAEAAAEACQADABACADIADAGIgHABQgBgDgCgCQgCgCgEAAQgEAAgCACQgBAAAAABQAAAAgBAAQAAABAAAAQAAABAAAAIABADQAAAAAAAAQAAABABAAQAAAAAAAAQABABAAAAIAFACIALADQADAAABADQACACAAAEQAAADgCADQgCADgEACQgEACgFAAQgHAAgEgEg");
	this.shape.setTransform(19.3,30.1);

	this.shape_1 = new cjs.Shape();
	this.shape_1.graphics.f("#000000").s().p("AgCAdIAAgpIAGAAIAAApgAgCgTIAAgJIAGAAIAAAJg");
	this.shape_1.setTransform(16.5,29.3);

	this.shape_2 = new cjs.Shape();
	this.shape_2.graphics.f("#000000").s().p("AgDAdIAAg5IAGAAIAAA5g");
	this.shape_2.setTransform(14.6,29.3);

	this.shape_3 = new cjs.Shape();
	this.shape_3.graphics.f("#000000").s().p("AgNAQQgFgFgBgLQABgLAGgFQAGgFAGAAQAIAAAGAGQAGAGgBAJQAAAHgCAFQgDAFgEACQgEADgGAAQgHAAgGgGgAgIgLQgDAEAAAHQAAAIADAEQAEAEAEAAQAGAAADgEQAEgEAAgIQAAgHgEgEQgDgEgGAAQgEAAgEAEg");
	this.shape_3.setTransform(11.5,30.1);

	this.shape_4 = new cjs.Shape();
	this.shape_4.graphics.f("#000000").s().p("AgRAdIAAg4IAGAAIAAAFQADgDADgCQACgBADAAQAFAAAFADQADACACAFQADAFAAAGQAAAHgDAEQgCAFgEACQgEADgFAAQgDAAgCgBQgDgCgCgCIAAAUgAgHgSQgEAEAAAIQAAAHAEAEQADADAEAAQAEAAADgEQAEgEAAgHQAAgIgEgEQgDgEgEAAQgEAAgDAFg");
	this.shape_4.setTransform(7.2,30.9);

	this.shape_5 = new cjs.Shape();
	this.shape_5.graphics.f("#000000").s().p("AgNAYQgFgGgBgKQABgLAGgGQAFgEAHAAQAJAAAFAFQAGAGAAAJQAAAIgDAFQgDAEgEADQgFACgFAAQgHAAgGgFgAgIgDQgDADAAAIQAAAHADAEQAEAEAEAAQAFAAAEgEQADgEABgIQgBgHgDgDQgEgEgFAAQgEAAgEAEgAgDgRIAFgLIAJAAIgJALg");
	this.shape_5.setTransform(2.6,29.4);

	this.shape_6 = new cjs.Shape();
	this.shape_6.graphics.f("#000000").s().p("AgDAdIAAg5IAHAAIAAA5g");
	this.shape_6.setTransform(-0.5,29.3);

	this.shape_7 = new cjs.Shape();
	this.shape_7.graphics.f("#000000").s().p("AgPASQgDgDAAgFQAAgDABgDQACgCACgCIAFgBIAGgBIAMgDIAAgBQAAgFgCgBQgDgDgFAAQgEAAgDACQgCACgBAEIgHgBIADgHQADgDADgBQAEgCAFAAQAFAAADACQAEABACACIACAFIAAAGIAAAIIABANIABAFIgHAAQgBgCgBgDIgHAEIgHACQgHAAgEgEgAAAADIgHABIgCACIgBAEQAAAAAAABQAAABAAAAQAAABABAAQAAABABAAQACACAEAAQADAAADgCQADgBACgDQABgDAAgEIAAgDIgKADg");
	this.shape_7.setTransform(-3.6,30.1);

	this.shape_8 = new cjs.Shape();
	this.shape_8.graphics.f("#000000").s().p("AgLAaQgFgDAAgHIAHABQAAABABABQAAAAAAABQAAAAABABQAAAAAAABQADACAEAAQAEAAADgCQADgCABgEIAAgJQgEAGgHAAQgIAAgEgGQgFgHAAgHQAAgGACgFQACgFAEgDQAEgDAFAAQAHAAAFAGIAAgFIAGAAIAAAjQAAAKgCAEQgCAEgEACQgEADgGAAQgHAAgEgEgAgHgTQgDAEAAAHQAAAIADADQAEAEADAAQAFAAAEgEQADgDAAgHQAAgIgEgEQgDgEgFAAQgDAAgEAEg");
	this.shape_8.setTransform(-8.2,30.9);

	this.shape_9 = new cjs.Shape();
	this.shape_9.graphics.f("#000000").s().p("AgMAQQgGgGAAgKQAAgJAGgGQAEgGAIAAQAJAAAFAGQAFAGAAAJIAAACIgeAAQAAAHAEADQAEAEADAAQAEAAAEgCQACgCABgFIAIABQgCAHgFADQgEAEgIAAQgIAAgEgGgAgHgMQgDAEAAAFIAWAAQAAgFgDgDQgEgEgFAAQgEAAgDADg");
	this.shape_9.setTransform(-12.5,30.1);

	this.shape_10 = new cjs.Shape();
	this.shape_10.graphics.f("#000000").s().p("AAUAdIAAgvIgRAvIgFAAIgRgwIAAAwIgHAAIAAg5IALAAIAOAoIABAJIADgKIAOgnIAKAAIAAA5g");
	this.shape_10.setTransform(-18.1,29.3);

	this.timeline.addTween(cjs.Tween.get({}).to({state:[{t:this.shape_10},{t:this.shape_9},{t:this.shape_8},{t:this.shape_7},{t:this.shape_6},{t:this.shape_5},{t:this.shape_4},{t:this.shape_3},{t:this.shape_2},{t:this.shape_1},{t:this.shape}]}).wait(1));

	// Frame
	this.shape_11 = new cjs.Shape();
	this.shape_11.graphics.f().s("#94945A").ss(1,0,0,22.9).p("AmPlsIMfAAIAALZIsfAAg");

	this.timeline.addTween(cjs.Tween.get(this.shape_11).wait(1));

	// Mask (mask)
	var mask = new cjs.Shape();
	mask._off = true;
	mask.graphics.p("AmPFtIAArZIMfAAIAALZg");

	// Map
	this.instance = new lib.graph_06("synched",0);
	this.instance.parent = this;

	var maskedShapeInstanceList = [this.instance];

	for(var shapedInstanceItr = 0; shapedInstanceItr < maskedShapeInstanceList.length; shapedInstanceItr++) {
		maskedShapeInstanceList[shapedInstanceItr].mask = mask;
	}

	this.timeline.addTween(cjs.Tween.get(this.instance).wait(1));

	// Map_Bottom
	this.map_bottom = new lib.mc_06_bottom();
	this.map_bottom.name = "map_bottom";
	this.map_bottom.parent = this;
	this.map_bottom.alpha = 0.602;

	var maskedShapeInstanceList = [this.map_bottom];

	for(var shapedInstanceItr = 0; shapedInstanceItr < maskedShapeInstanceList.length; shapedInstanceItr++) {
		maskedShapeInstanceList[shapedInstanceItr].mask = mask;
	}

	this.timeline.addTween(cjs.Tween.get(this.map_bottom).wait(1));

	// Texture
	this.instance_1 = new lib.mc_06_background();
	this.instance_1.parent = this;
	this.instance_1.setTransform(-40,-36);

	this.timeline.addTween(cjs.Tween.get(this.instance_1).wait(1));

	// Background
	this.shape_12 = new cjs.Shape();
	this.shape_12.graphics.f("rgba(255,255,255,0.2)").s().p("AmPFtIAArZIMfAAIAALZg");

	this.timeline.addTween(cjs.Tween.get(this.shape_12).wait(1));

}).prototype = getMCSymbolPrototype(lib.mc_06, new cjs.Rectangle(-41,-37.5,82,75), null);


(lib.mc_05 = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// Title
	this.shape = new cjs.Shape();
	this.shape.graphics.f("#000000").s().p("AgNAQQgGgFABgLQgBgLAHgFQAFgFAHAAQAIAAAGAGQAFAGAAAJQAAAHgCAFQgCAFgFACQgEADgGAAQgHAAgGgGgAgHgLQgEAEAAAHQAAAIAEAEQADAEAEAAQAGAAADgEQAEgEgBgIQABgHgEgEQgDgEgGAAQgEAAgDAEg");
	this.shape.setTransform(1.2,47.1);

	this.shape_1 = new cjs.Shape();
	this.shape_1.graphics.f("#000000").s().p("AgMAQQgFgFAAgLQAAgGACgFQACgFAFgCQAEgDAFAAQAHAAAEAEQAEADABAGIgGACQgBgFgDgCQgCgCgEAAQgEAAgEAEQgDAEAAAHQAAAIADAEQAEAEAEAAQAEAAADgDQACgCABgFIAHAAQgBAIgFAEQgEAEgHAAQgIAAgFgGg");
	this.shape_1.setTransform(-2.9,47.1);

	this.shape_2 = new cjs.Shape();
	this.shape_2.graphics.f("#000000").s().p("AgCAdIAAgpIAFAAIAAApgAgCgTIAAgJIAFAAIAAAJg");
	this.shape_2.setTransform(-5.9,46.3);

	this.shape_3 = new cjs.Shape();
	this.shape_3.graphics.f("#000000").s().p("AgFAdIAAgjIgGAAIAAgFIAGAAIAAgFIABgGQABgDADgBQABgCAFAAIAGABIgBAFIgEAAQgBAAAAAAQgBAAgBAAQAAABgBAAQAAAAAAABQgCABAAADIAAAFIAIAAIAAAFIgIAAIAAAjg");
	this.shape_3.setTransform(-7.7,46.3);

	this.shape_4 = new cjs.Shape();
	this.shape_4.graphics.f("#000000").s().p("AgGAdIAAgpIAGAAIAAApgAgGgRIAFgLIAIAAIgIALg");
	this.shape_4.setTransform(-9.7,46.3);

	this.shape_5 = new cjs.Shape();
	this.shape_5.graphics.f("#000000").s().p("AgMAQQgFgFAAgLQAAgGACgFQACgFAFgCQAEgDAFAAQAHAAAEAEQAEADABAGIgGACQgBgFgDgCQgCgCgEAAQgEAAgEAEQgDAEAAAHQAAAIADAEQAEAEAEAAQAEAAADgDQACgCABgFIAHAAQgBAIgFAEQgEAEgHAAQgIAAgFgGg");
	this.shape_5.setTransform(-13.1,47.1);

	this.shape_6 = new cjs.Shape();
	this.shape_6.graphics.f("#000000").s().p("AgOASQgEgDAAgFQAAgDACgDQAAgCADgCIAFgBIAGgBIAMgDIAAgBQAAgFgCgBQgDgDgFAAQgEAAgCACQgDACgBAEIgHgBIADgHQADgDAEgBQAEgCAEAAQAFAAAEACQADABABACIACAFIABAGIAAAIIABANIABAFIgHAAQgCgCABgDIgIAEIgHACQgHAAgDgEgAgBADIgGABIgDACIgBAEQAAAAABABQAAABAAAAQAAABABAAQAAABABAAQABACAFAAQADAAADgCQADgBACgDQABgDAAgEIAAgDIgLADg");
	this.shape_6.setTransform(-17.4,47.1);

	this.shape_7 = new cjs.Shape();
	this.shape_7.graphics.f("#000000").s().p("AgVAdIAAg5IAVAAIAJABQADABAEACQACACACADQACAEAAAEQAAAHgFAEQgEAFgMAAIgOAAIAAAYgAgNAAIAOAAQAHAAADgDQADgDAAgFQAAgDgCgDQgCgCgCgBIgHgBIgOAAg");
	this.shape_7.setTransform(-22.2,46.3);

	this.timeline.addTween(cjs.Tween.get({}).to({state:[{t:this.shape_7},{t:this.shape_6},{t:this.shape_5},{t:this.shape_4},{t:this.shape_3},{t:this.shape_2},{t:this.shape_1},{t:this.shape}]}).wait(1));

	// Frame
	this.shape_8 = new cjs.Shape();
	this.shape_8.graphics.f().s("#94945A").ss(1,0,0,22.9).p("ApIogISRAAIAARBIyRAAg");

	this.timeline.addTween(cjs.Tween.get(this.shape_8).wait(1));

	// Mask (mask)
	var mask = new cjs.Shape();
	mask._off = true;
	mask.graphics.p("ApIIhIAAxBISRAAIAARBg");

	// Map
	this.instance = new lib.graph_05("synched",0);
	this.instance.parent = this;

	var maskedShapeInstanceList = [this.instance];

	for(var shapedInstanceItr = 0; shapedInstanceItr < maskedShapeInstanceList.length; shapedInstanceItr++) {
		maskedShapeInstanceList[shapedInstanceItr].mask = mask;
	}

	this.timeline.addTween(cjs.Tween.get(this.instance).wait(1));

	// Map_Bottom
	this.map_bottom = new lib.mc_05_bottom();
	this.map_bottom.name = "map_bottom";
	this.map_bottom.parent = this;
	this.map_bottom.alpha = 0.602;

	var maskedShapeInstanceList = [this.map_bottom];

	for(var shapedInstanceItr = 0; shapedInstanceItr < maskedShapeInstanceList.length; shapedInstanceItr++) {
		maskedShapeInstanceList[shapedInstanceItr].mask = mask;
	}

	this.timeline.addTween(cjs.Tween.get(this.map_bottom).wait(1));

	// Texture
	this.instance_1 = new lib.mc_05_background();
	this.instance_1.parent = this;
	this.instance_1.setTransform(-58,-54);

	this.timeline.addTween(cjs.Tween.get(this.instance_1).wait(1));

	// Background
	this.shape_9 = new cjs.Shape();
	this.shape_9.graphics.f("rgba(255,255,255,0.2)").s().p("ApIIhIAAxBISRAAIAARBg");

	this.timeline.addTween(cjs.Tween.get(this.shape_9).wait(1));

}).prototype = getMCSymbolPrototype(lib.mc_05, new cjs.Rectangle(-59.5,-55.5,119,111), null);


(lib.mc_04 = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// Title
	this.shape = new cjs.Shape();
	this.shape.graphics.f("#000000").s().p("AgMAQQgGgGAAgKQAAgJAGgGQAEgGAIAAQAJAAAFAGQAFAGAAAJIAAACIgeAAQAAAHAEADQAEAEADAAQAEAAAEgCQACgCABgFIAIABQgCAHgFADQgEAEgIAAQgIAAgEgGgAgHgMQgDAEAAAFIAWAAQAAgFgDgDQgEgEgFAAQgEAAgDADg");
	this.shape.setTransform(83.8,-60.9);

	this.shape_1 = new cjs.Shape();
	this.shape_1.graphics.f("#000000").s().p("AAAAbIgDgDIgBgIIAAgXIgFAAIAAgGIAFAAIAAgKIAGgEIAAAOIAHAAIAAAGIgHAAIAAAXIAAAEIABABIADABIADgBIABAHIgFAAIgFgBg");
	this.shape_1.setTransform(80.5,-61.6);

	this.shape_2 = new cjs.Shape();
	this.shape_2.graphics.f("#000000").s().p("AgLASQgEgDgBgHIAHgBQAAAEADADQADACADAAQAFAAADgCQAAgBABAAQAAgBAAAAQABgBAAgBQAAAAAAgBQAAAAAAgBQAAAAgBgBQAAAAAAgBQgBAAAAAAIgHgDIgKgDQgDgBgCgCQgBgDAAgDIABgFQABgCADgCIAEgCIAGgBQAEAAAEACQADABACADIADAGIgHABQgBgDgCgCQgCgCgEAAQgEAAgCACQgBAAAAABQAAAAgBAAQAAABAAAAQAAABAAAAIABADQAAAAAAAAQAAABABAAQAAAAAAAAQABABAAAAIAFACIALADQADAAABADQACACAAAEQAAADgCADQgCADgEACQgEACgFAAQgHAAgEgEg");
	this.shape_2.setTransform(77.3,-60.9);

	this.shape_3 = new cjs.Shape();
	this.shape_3.graphics.f("#000000").s().p("AgNAQQgFgGAAgKQAAgJAFgGQAGgGAIAAQAHAAAGAGQAFAGAAAJIAAACIgeAAQABAHADADQAEAEAEAAQADAAAEgCQACgCACgFIAHABQgCAHgFADQgEAEgHAAQgIAAgGgGgAgGgMQgEAEgBAFIAXAAQgBgFgCgDQgEgEgEAAQgFAAgCADg");
	this.shape_3.setTransform(73.1,-60.9);

	this.shape_4 = new cjs.Shape();
	this.shape_4.graphics.f("#000000").s().p("AgKAVIAAgoIAGAAIAAAGIAEgGQAAAAABAAQAAgBABAAQAAAAABAAQABAAAAAAQAEAAADACIgCAHIgFgCIgEACQAAAAAAAAQgBABAAAAQAAABAAAAQgBABAAAAQgBAEAAAEIAAAVg");
	this.shape_4.setTransform(69.9,-60.9);

	this.shape_5 = new cjs.Shape();
	this.shape_5.graphics.f("#000000").s().p("AgNAQQgGgFABgLQgBgLAHgFQAFgFAHAAQAIAAAGAGQAFAGAAAJQAAAHgCAFQgCAFgFACQgEADgGAAQgHAAgGgGgAgHgLQgEAEAAAHQAAAIAEAEQADAEAEAAQAGAAADgEQAEgEgBgIQABgHgEgEQgDgEgGAAQgEAAgDAEg");
	this.shape_5.setTransform(66,-60.9);

	this.shape_6 = new cjs.Shape();
	this.shape_6.graphics.f("#000000").s().p("AAPAdIgdgsIAAAsIgIAAIAAg5IAIAAIAdAsIAAgsIAHAAIAAA5g");
	this.shape_6.setTransform(60.9,-61.7);

	this.shape_7 = new cjs.Shape();
	this.shape_7.graphics.f("#000000").s().p("AgOASQgEgDAAgFQAAgDACgDQABgCACgCIAFgBIAGgBIAMgDIAAgBQAAgFgCgBQgDgDgFAAQgEAAgCACQgDACgBAEIgHgBIADgHQADgDAEgBQAEgCAEAAQAFAAAEACQADABABACIACAFIABAGIAAAIIAAANIACAFIgHAAQgBgCAAgDIgIAEIgHACQgHAAgDgEgAgBADIgGABIgDACIgBAEQAAAAABABQAAABAAAAQAAABABAAQAAABAAAAQADACAEAAQADAAADgCQADgBABgDQACgDAAgEIAAgDIgLADg");
	this.shape_7.setTransform(53.6,-60.9);

	this.shape_8 = new cjs.Shape();
	this.shape_8.graphics.f("#000000").s().p("AgKAVIAAgoIAGAAIAAAGIAEgGQAAAAABAAQAAgBABAAQAAAAABAAQABAAAAAAQAEAAADACIgCAHIgFgCIgEACQAAAAAAAAQgBABAAAAQAAABAAAAQgBABAAAAQgBAEAAAEIAAAVg");
	this.shape_8.setTransform(50.3,-60.9);

	this.shape_9 = new cjs.Shape();
	this.shape_9.graphics.f("#000000").s().p("AgNAQQgFgGAAgKQAAgJAFgGQAFgGAJAAQAHAAAGAGQAFAGAAAJIAAACIgeAAQABAHADADQADAEAFAAQADAAADgCQADgCACgFIAHABQgCAHgEADQgFAEgHAAQgJAAgFgGgAgGgMQgEAEgBAFIAXAAQgBgFgCgDQgDgEgFAAQgFAAgCADg");
	this.shape_9.setTransform(46.5,-60.9);

	this.shape_10 = new cjs.Shape();
	this.shape_10.graphics.f("#000000").s().p("AAAAbIgDgDQgBgCAAgGIAAgXIgFAAIAAgGIAFAAIAAgKIAGgEIAAAOIAHAAIAAAGIgHAAIAAAXIABAEIABABIACABIADgBIABAHIgFAAIgFgBg");
	this.shape_10.setTransform(43.2,-61.6);

	this.shape_11 = new cjs.Shape();
	this.shape_11.graphics.f("#000000").s().p("AAKAVIAAgYIgBgGQAAgBgBAAQAAgBAAAAQgBgBAAAAQgBAAAAgBQgBAAAAAAQgBgBAAAAQgBAAgBAAQAAAAgBAAQgDAAgEADQgDADAAAIIAAAVIgHAAIAAgoIAGAAIAAAGQAFgHAIAAQADAAADABQAEACABACIACAFIABAHIAAAYg");
	this.shape_11.setTransform(39.8,-60.9);

	this.shape_12 = new cjs.Shape();
	this.shape_12.graphics.f("#000000").s().p("AgNAQQgFgFgBgLQABgLAGgFQAGgFAGAAQAIAAAGAGQAGAGgBAJQAAAHgCAFQgDAFgEACQgEADgGAAQgHAAgGgGgAgIgLQgDAEAAAHQAAAIADAEQAEAEAEAAQAGAAADgEQAEgEAAgIQAAgHgEgEQgDgEgGAAQgEAAgEAEg");
	this.shape_12.setTransform(35.4,-60.9);

	this.shape_13 = new cjs.Shape();
	this.shape_13.graphics.f("#000000").s().p("AgKAVIAAgoIAGAAIAAAGIAEgGQAAAAABAAQAAgBABAAQAAAAABAAQABAAAAAAQAEAAADACIgCAHIgFgCIgEACQAAAAAAAAQgBABAAAAQAAABAAAAQgBABAAAAQgBAEAAAEIAAAVg");
	this.shape_13.setTransform(32.1,-60.9);

	this.shape_14 = new cjs.Shape();
	this.shape_14.graphics.f("#000000").s().p("AgSAdIAAg5IAlAAIAAAHIgeAAIAAASIAaAAIAAAGIgaAAIAAAag");
	this.shape_14.setTransform(28.2,-61.7);

	this.timeline.addTween(cjs.Tween.get({}).to({state:[{t:this.shape_14},{t:this.shape_13},{t:this.shape_12},{t:this.shape_11},{t:this.shape_10},{t:this.shape_9},{t:this.shape_8},{t:this.shape_7},{t:this.shape_6},{t:this.shape_5},{t:this.shape_4},{t:this.shape_3},{t:this.shape_2},{t:this.shape_1},{t:this.shape}]}).wait(1));

	// Frame
	this.shape_15 = new cjs.Shape();
	this.shape_15.graphics.f().s("#94945A").ss(1,0,0,22.9).p("AwZrFMAgzAAAIAAWLMggzAAAg");

	this.timeline.addTween(cjs.Tween.get(this.shape_15).wait(1));

	// Mask (mask)
	var mask = new cjs.Shape();
	mask._off = true;
	mask.graphics.p("AwZLGIAA2LMAgzAAAIAAWLg");

	// Map
	this.instance = new lib.graph_04("synched",0);
	this.instance.parent = this;

	var maskedShapeInstanceList = [this.instance];

	for(var shapedInstanceItr = 0; shapedInstanceItr < maskedShapeInstanceList.length; shapedInstanceItr++) {
		maskedShapeInstanceList[shapedInstanceItr].mask = mask;
	}

	this.timeline.addTween(cjs.Tween.get(this.instance).wait(1));

	// Map_Bottom
	this.map_bottom = new lib.mc_04_bottom();
	this.map_bottom.name = "map_bottom";
	this.map_bottom.parent = this;
	this.map_bottom.alpha = 0.602;

	var maskedShapeInstanceList = [this.map_bottom];

	for(var shapedInstanceItr = 0; shapedInstanceItr < maskedShapeInstanceList.length; shapedInstanceItr++) {
		maskedShapeInstanceList[shapedInstanceItr].mask = mask;
	}

	this.timeline.addTween(cjs.Tween.get(this.map_bottom).wait(1));

	// Texture
	this.instance_1 = new lib.mc_04_background();
	this.instance_1.parent = this;
	this.instance_1.setTransform(-105,-71);

	this.timeline.addTween(cjs.Tween.get(this.instance_1).wait(1));

	// Background
	this.shape_16 = new cjs.Shape();
	this.shape_16.graphics.f("rgba(255,255,255,0.2)").s().p("AwZLGIAA2LMAgzAAAIAAWLg");

	this.timeline.addTween(cjs.Tween.get(this.shape_16).wait(1));

}).prototype = getMCSymbolPrototype(lib.mc_04, new cjs.Rectangle(-106,-72,212,144), null);


(lib.mc_03 = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// Title
	this.shape = new cjs.Shape();
	this.shape.graphics.f("#000000").s().p("AgMAQQgGgGAAgKQAAgJAGgGQAFgGAHAAQAJAAAFAGQAFAGAAAJIAAACIgeAAQABAHADADQAEAEADAAQAFAAACgCQADgCABgFIAIABQgCAHgEADQgFAEgIAAQgHAAgFgGgAgHgMQgDAEAAAFIAWAAQAAgFgDgDQgEgEgFAAQgDAAgEADg");
	this.shape.setTransform(24.5,-42);

	this.shape_1 = new cjs.Shape();
	this.shape_1.graphics.f("#000000").s().p("AAAAbIgDgDIgBgIIAAgXIgFAAIAAgGIAFAAIAAgKIAGgEIAAAOIAHAAIAAAGIgHAAIAAAXIAAAEIABABIADABIADgBIABAHIgFAAIgFgBg");
	this.shape_1.setTransform(21.2,-42.7);

	this.shape_2 = new cjs.Shape();
	this.shape_2.graphics.f("#000000").s().p("AgKAVIAAgoIAGAAIAAAGIAEgGQAAAAABAAQAAgBABAAQAAAAABAAQABAAAAAAQAEAAADACIgCAHIgFgCIgEACQAAAAAAAAQgBABAAAAQAAABAAAAQgBABAAAAQgBAEAAAEIAAAVg");
	this.shape_2.setTransform(19,-42);

	this.shape_3 = new cjs.Shape();
	this.shape_3.graphics.f("#000000").s().p("AgNAQQgGgFABgLQgBgLAHgFQAGgFAGAAQAIAAAGAGQAFAGABAJQgBAHgCAFQgCAFgFACQgEADgGAAQgHAAgGgGgAgHgLQgEAEAAAHQAAAIAEAEQADAEAEAAQAGAAADgEQAEgEgBgIQABgHgEgEQgDgEgGAAQgEAAgDAEg");
	this.shape_3.setTransform(15.2,-42);

	this.shape_4 = new cjs.Shape();
	this.shape_4.graphics.f("#000000").s().p("AAPAdIgdgsIAAAsIgIAAIAAg5IAJAAIAcAsIAAgsIAHAAIAAA5g");
	this.shape_4.setTransform(10,-42.8);

	this.shape_5 = new cjs.Shape();
	this.shape_5.graphics.f("#000000").s().p("AgOASQgEgDAAgFQAAgDACgDQAAgCADgCIAFgBIAGgBIAMgDIAAgBQAAgFgCgBQgDgDgFAAQgEAAgCACQgDACgBAEIgHgBIADgHQADgDAEgBQAEgCAEAAQAFAAAEACQADABABACIACAFIABAGIAAAIIABANIABAFIgHAAQgCgCABgDIgIAEIgHACQgHAAgDgEgAgBADIgGABIgDACIgBAEQAAAAABABQAAABAAAAQAAABABAAQAAABABAAQABACAFAAQADAAADgCQADgBACgDQABgDAAgEIAAgDIgLADg");
	this.shape_5.setTransform(29.8,-50.9);

	this.shape_6 = new cjs.Shape();
	this.shape_6.graphics.f("#000000").s().p("AgKAVIAAgoIAGAAIAAAGIAEgGQAAAAABAAQAAgBABAAQAAAAABAAQABAAAAAAQAEAAADACIgCAHIgFgCIgEACQAAAAAAAAQgBABAAAAQAAABAAAAQgBABAAAAQgBAEAAAEIAAAVg");
	this.shape_6.setTransform(26.6,-50.9);

	this.shape_7 = new cjs.Shape();
	this.shape_7.graphics.f("#000000").s().p("AgNAQQgFgGAAgKQAAgJAFgGQAGgGAIAAQAHAAAGAGQAFAGAAAJIAAACIgeAAQABAHADADQAEAEAEAAQADAAAEgCQACgCACgFIAHABQgCAHgFADQgEAEgHAAQgIAAgGgGgAgGgMQgEAEgBAFIAXAAQgBgFgCgDQgEgEgEAAQgFAAgCADg");
	this.shape_7.setTransform(22.7,-50.9);

	this.shape_8 = new cjs.Shape();
	this.shape_8.graphics.f("#000000").s().p("AAAAbIgDgDIgBgIIAAgXIgFAAIAAgGIAFAAIAAgKIAGgEIAAAOIAHAAIAAAGIgHAAIAAAXIABAEIAAABIADABIADgBIABAHIgFAAIgFgBg");
	this.shape_8.setTransform(19.5,-51.6);

	this.shape_9 = new cjs.Shape();
	this.shape_9.graphics.f("#000000").s().p("AAKAVIAAgYIgBgGQAAgBgBAAQAAgBAAAAQgBgBAAAAQgBAAAAgBQgBAAAAAAQgBgBAAAAQgBAAgBAAQAAAAgBAAQgDAAgEADQgDADAAAIIAAAVIgHAAIAAgoIAGAAIAAAGQAFgHAIAAQADAAADABQAEACABACIACAFIABAHIAAAYg");
	this.shape_9.setTransform(16.1,-50.9);

	this.shape_10 = new cjs.Shape();
	this.shape_10.graphics.f("#000000").s().p("AgNAQQgFgFgBgLQABgLAGgFQAFgFAHAAQAJAAAFAGQAGAGAAAJQAAAHgDAFQgDAFgEACQgEADgGAAQgHAAgGgGgAgIgLQgDAEAAAHQAAAIADAEQAEAEAEAAQAGAAADgEQADgEABgIQgBgHgDgEQgDgEgGAAQgEAAgEAEg");
	this.shape_10.setTransform(11.6,-50.9);

	this.shape_11 = new cjs.Shape();
	this.shape_11.graphics.f("#000000").s().p("AgKAVIAAgoIAGAAIAAAGIAEgGQAAAAABAAQAAgBABAAQAAAAABAAQABAAAAAAQAEAAADACIgCAHIgFgCIgEACQAAAAAAAAQgBABAAAAQAAABAAAAQgBABAAAAQgBAEAAAEIAAAVg");
	this.shape_11.setTransform(8.4,-50.9);

	this.shape_12 = new cjs.Shape();
	this.shape_12.graphics.f("#000000").s().p("AgSAdIAAg5IAlAAIAAAHIgeAAIAAASIAaAAIAAAGIgaAAIAAAag");
	this.shape_12.setTransform(4.4,-51.7);

	this.timeline.addTween(cjs.Tween.get({}).to({state:[{t:this.shape_12},{t:this.shape_11},{t:this.shape_10},{t:this.shape_9},{t:this.shape_8},{t:this.shape_7},{t:this.shape_6},{t:this.shape_5},{t:this.shape_4},{t:this.shape_3},{t:this.shape_2},{t:this.shape_1},{t:this.shape}]}).wait(1));

	// Frame
	this.shape_13 = new cjs.Shape();
	this.shape_13.graphics.f().s("#94945A").ss(1,0,0,22.9).p("AmZpcIMzAAIAAS5IszAAg");

	this.timeline.addTween(cjs.Tween.get(this.shape_13).wait(1));

	// Mask (mask)
	var mask = new cjs.Shape();
	mask._off = true;
	mask.graphics.p("AmZJdIAAy5IMzAAIAAS5g");

	// Map
	this.instance = new lib.graph_03("synched",0);
	this.instance.parent = this;

	var maskedShapeInstanceList = [this.instance];

	for(var shapedInstanceItr = 0; shapedInstanceItr < maskedShapeInstanceList.length; shapedInstanceItr++) {
		maskedShapeInstanceList[shapedInstanceItr].mask = mask;
	}

	this.timeline.addTween(cjs.Tween.get(this.instance).wait(1));

	// Map_Bottom
	this.map_bottom = new lib.mc_03_bottom();
	this.map_bottom.name = "map_bottom";
	this.map_bottom.parent = this;
	this.map_bottom.alpha = 0.602;

	var maskedShapeInstanceList = [this.map_bottom];

	for(var shapedInstanceItr = 0; shapedInstanceItr < maskedShapeInstanceList.length; shapedInstanceItr++) {
		maskedShapeInstanceList[shapedInstanceItr].mask = mask;
	}

	this.timeline.addTween(cjs.Tween.get(this.map_bottom).wait(1));

	// Texture
	this.instance_1 = new lib.mc_03_background();
	this.instance_1.parent = this;
	this.instance_1.setTransform(-41,-60);

	this.timeline.addTween(cjs.Tween.get(this.instance_1).wait(1));

	// Background
	this.shape_14 = new cjs.Shape();
	this.shape_14.graphics.f("rgba(255,255,255,0.2)").s().p("AmZJdIAAy5IMzAAIAAS5g");

	this.timeline.addTween(cjs.Tween.get(this.shape_14).wait(1));

}).prototype = getMCSymbolPrototype(lib.mc_03, new cjs.Rectangle(-42,-61.5,84,123), null);


(lib.mc_02 = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// Title
	this.shape = new cjs.Shape();
	this.shape.graphics.f("#000000").s().p("AgNAQQgFgGAAgKQAAgJAFgGQAGgGAIAAQAHAAAGAGQAFAGAAAJIAAACIgeAAQABAHADADQAEAEAEAAQADAAAEgCQACgCABgFIAIABQgCAHgFADQgEAEgHAAQgIAAgGgGgAgGgMQgEAEgBAFIAXAAQgBgFgCgDQgEgEgEAAQgFAAgCADg");
	this.shape.setTransform(7,38.1);

	this.shape_1 = new cjs.Shape();
	this.shape_1.graphics.f("#000000").s().p("AAAAbIgDgDIgBgIIAAgXIgFAAIAAgGIAFAAIAAgKIAGgEIAAAOIAHAAIAAAGIgHAAIAAAXIABAEIAAABIADABIADgBIABAHIgFAAIgFgBg");
	this.shape_1.setTransform(3.7,37.4);

	this.shape_2 = new cjs.Shape();
	this.shape_2.graphics.f("#000000").s().p("AgKAVIAAgoIAGAAIAAAGIAEgGQAAAAABAAQAAgBABAAQAAAAABAAQABAAAAAAQAEAAADACIgCAHIgFgCIgEACQAAAAAAAAQgBABAAAAQAAABAAAAQgBABAAAAQgBAEAAAEIAAAVg");
	this.shape_2.setTransform(1.5,38.1);

	this.shape_3 = new cjs.Shape();
	this.shape_3.graphics.f("#000000").s().p("AgNAQQgFgFgBgLQABgLAGgFQAFgFAHAAQAJAAAFAGQAGAGAAAJQAAAHgDAFQgDAFgEACQgFADgFAAQgHAAgGgGgAgIgLQgDAEAAAHQAAAIADAEQAEAEAEAAQAFAAAEgEQADgEABgIQgBgHgDgEQgEgEgFAAQgEAAgEAEg");
	this.shape_3.setTransform(-2.3,38.1);

	this.shape_4 = new cjs.Shape();
	this.shape_4.graphics.f("#000000").s().p("AAPAdIgdgsIAAAsIgHAAIAAg5IAIAAIAdAsIAAgsIAHAAIAAA5g");
	this.shape_4.setTransform(-7.5,37.3);

	this.shape_5 = new cjs.Shape();
	this.shape_5.graphics.f("#000000").s().p("AgNAQQgFgFAAgLQAAgLAGgFQAGgFAGAAQAIAAAGAGQAGAGgBAJQABAHgDAFQgDAFgEACQgFADgFAAQgIAAgFgGgAgIgLQgDAEAAAHQAAAIADAEQAEAEAEAAQAFAAAEgEQADgEAAgIQAAgHgDgEQgEgEgFAAQgEAAgEAEg");
	this.shape_5.setTransform(-14.8,38.1);

	this.shape_6 = new cjs.Shape();
	this.shape_6.graphics.f("#000000").s().p("AgMAQQgFgFAAgLQAAgGACgFQACgFAFgCQAEgDAFAAQAHAAAEAEQAEADABAGIgGACQgBgFgDgCQgCgCgEAAQgEAAgEAEQgDAEAAAHQAAAIADAEQAEAEAEAAQAEAAADgDQACgCABgFIAHAAQgBAIgFAEQgEAEgHAAQgIAAgFgGg");
	this.shape_6.setTransform(-18.9,38.1);

	this.shape_7 = new cjs.Shape();
	this.shape_7.graphics.f("#000000").s().p("AgCAdIAAgpIAGAAIAAApgAgCgTIAAgJIAGAAIAAAJg");
	this.shape_7.setTransform(-21.9,37.3);

	this.shape_8 = new cjs.Shape();
	this.shape_8.graphics.f("#000000").s().p("AgFAdIAAgjIgGAAIAAgFIAGAAIAAgFIABgGQABgDADgBQABgCAFAAIAGABIgBAFIgEAAQgBAAAAAAQgBAAgBAAQAAABgBAAQAAAAAAABQgCABAAADIAAAFIAIAAIAAAFIgIAAIAAAjg");
	this.shape_8.setTransform(-23.7,37.3);

	this.shape_9 = new cjs.Shape();
	this.shape_9.graphics.f("#000000").s().p("AgGAdIAAgpIAGAAIAAApgAgGgRIAFgLIAIAAIgIALg");
	this.shape_9.setTransform(-25.7,37.3);

	this.shape_10 = new cjs.Shape();
	this.shape_10.graphics.f("#000000").s().p("AgMAQQgFgFAAgLQAAgGACgFQACgFAFgCQAEgDAFAAQAHAAAEAEQAEADABAGIgGACQgBgFgDgCQgCgCgEAAQgEAAgEAEQgDAEAAAHQAAAIADAEQAEAEAEAAQAEAAADgDQACgCABgFIAHAAQgBAIgFAEQgEAEgHAAQgIAAgFgGg");
	this.shape_10.setTransform(-29.1,38.1);

	this.shape_11 = new cjs.Shape();
	this.shape_11.graphics.f("#000000").s().p("AgPASQgDgDAAgFQAAgDACgDQABgCACgCIAFgBIAGgBIAMgDIAAgBQAAgFgCgBQgDgDgFAAQgEAAgDACQgCACgBAEIgHgBIADgHQADgDAEgBQADgCAFAAQAFAAAEACQADABABACIADAFIAAAGIAAAIIABANIABAFIgHAAQgBgCgBgDIgHAEIgHACQgHAAgEgEgAAAADIgHABIgCACIgBAEQAAAAAAABQAAABAAAAQAAABABAAQAAABABAAQACACAEAAQADAAADgCQADgBACgDQABgDAAgEIAAgDIgKADg");
	this.shape_11.setTransform(-33.4,38.1);

	this.shape_12 = new cjs.Shape();
	this.shape_12.graphics.f("#000000").s().p("AgVAdIAAg5IAVAAIAIABQAFABADACQADACABADQACAEAAAEQAAAHgFAEQgEAFgNAAIgNAAIAAAYgAgNAAIANAAQAIAAADgDQADgDAAgFQAAgDgCgDQgCgCgCgBIgIgBIgNAAg");
	this.shape_12.setTransform(-38.2,37.3);

	this.timeline.addTween(cjs.Tween.get({}).to({state:[{t:this.shape_12},{t:this.shape_11},{t:this.shape_10},{t:this.shape_9},{t:this.shape_8},{t:this.shape_7},{t:this.shape_6},{t:this.shape_5},{t:this.shape_4},{t:this.shape_3},{t:this.shape_2},{t:this.shape_1},{t:this.shape}]}).wait(1));

	// Frame
	this.shape_13 = new cjs.Shape();
	this.shape_13.graphics.f().s("#94945A").ss(1,0,0,22.9).p("AoCnGIQFAAIAAONIwFAAg");

	this.timeline.addTween(cjs.Tween.get(this.shape_13).wait(1));

	// Mask (mask)
	var mask = new cjs.Shape();
	mask._off = true;
	mask.graphics.p("AoCHHIAAuNIQFAAIAAONg");

	// Map
	this.instance = new lib.graph_02("synched",0);
	this.instance.parent = this;

	var maskedShapeInstanceList = [this.instance];

	for(var shapedInstanceItr = 0; shapedInstanceItr < maskedShapeInstanceList.length; shapedInstanceItr++) {
		maskedShapeInstanceList[shapedInstanceItr].mask = mask;
	}

	this.timeline.addTween(cjs.Tween.get(this.instance).wait(1));

	// Map_Bottom
	this.map_bottom = new lib.mc_02_bottom();
	this.map_bottom.name = "map_bottom";
	this.map_bottom.parent = this;
	this.map_bottom.alpha = 0.602;

	var maskedShapeInstanceList = [this.map_bottom];

	for(var shapedInstanceItr = 0; shapedInstanceItr < maskedShapeInstanceList.length; shapedInstanceItr++) {
		maskedShapeInstanceList[shapedInstanceItr].mask = mask;
	}

	this.timeline.addTween(cjs.Tween.get(this.map_bottom).wait(1));

	// Texture
	this.instance_1 = new lib.mc_02_background();
	this.instance_1.parent = this;
	this.instance_1.setTransform(-51,-45);

	this.timeline.addTween(cjs.Tween.get(this.instance_1).wait(1));

	// Background
	this.shape_14 = new cjs.Shape();
	this.shape_14.graphics.f("rgba(255,255,255,0.2)").s().p("AoCHHIAAuNIQFAAIAAONg");

	this.timeline.addTween(cjs.Tween.get(this.shape_14).wait(1));

}).prototype = getMCSymbolPrototype(lib.mc_02, new cjs.Rectangle(-52.5,-46.5,105,93), null);


(lib.mc_01 = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// Title
	this.shape = new cjs.Shape();
	this.shape.graphics.f("#000000").s().p("AgMAQQgGgGAAgKQAAgJAGgGQAEgGAIAAQAJAAAFAGQAFAGAAAJIAAACIgeAAQAAAHAEADQAEAEADAAQAEAAAEgCQACgCABgFIAIABQgCAHgFADQgEAEgIAAQgIAAgEgGgAgHgMQgDAEAAAFIAWAAQAAgFgDgDQgEgEgFAAQgEAAgDADg");
	this.shape.setTransform(-1.7,27);

	this.shape_1 = new cjs.Shape();
	this.shape_1.graphics.f("#000000").s().p("AAAAbIgDgDIgBgIIAAgXIgFAAIAAgGIAFAAIAAgKIAGgEIAAAOIAHAAIAAAGIgHAAIAAAXIAAAEIABABIADABIADgBIABAHIgFAAIgFgBg");
	this.shape_1.setTransform(-5,26.3);

	this.shape_2 = new cjs.Shape();
	this.shape_2.graphics.f("#000000").s().p("AgLASQgEgDgBgHIAHgBQAAAEADADQADACADAAQAFAAADgCQAAgBABAAQAAgBAAAAQABgBAAgBQAAAAAAgBQAAAAAAgBQAAAAgBgBQAAAAAAgBQgBAAAAAAIgHgDIgKgDQgDgBgCgCQgBgDAAgDIABgFQABgCADgCIAEgCIAGgBQAEAAAEACQADABACADIADAGIgHABQgBgDgCgCQgCgCgEAAQgEAAgCACQgBAAAAABQAAAAgBAAQAAABAAAAQAAABAAAAIABADQAAAAAAAAQAAABABAAQAAAAAAAAQABABAAAAIAFACIALADQADAAABADQACACAAAEQAAADgCADQgCADgEACQgEACgFAAQgHAAgEgEg");
	this.shape_2.setTransform(-8.2,27);

	this.shape_3 = new cjs.Shape();
	this.shape_3.graphics.f("#000000").s().p("AgNAQQgFgGAAgKQAAgJAFgGQAGgGAIAAQAHAAAGAGQAFAGAAAJIAAACIgeAAQABAHADADQAEAEAEAAQADAAAEgCQACgCABgFIAIABQgCAHgFADQgEAEgHAAQgIAAgGgGgAgGgMQgEAEgBAFIAXAAQgBgFgCgDQgEgEgEAAQgFAAgCADg");
	this.shape_3.setTransform(-12.4,27);

	this.shape_4 = new cjs.Shape();
	this.shape_4.graphics.f("#000000").s().p("AgNAQQgFgFgBgLQABgLAGgFQAGgFAGAAQAIAAAGAGQAGAGgBAJQAAAHgCAFQgDAFgEACQgEADgGAAQgHAAgGgGgAgIgLQgDAEAAAHQAAAIADAEQAEAEAEAAQAGAAADgEQAEgEAAgIQAAgHgEgEQgDgEgGAAQgEAAgEAEg");
	this.shape_4.setTransform(-16.8,27);

	this.shape_5 = new cjs.Shape();
	this.shape_5.graphics.f("#000000").s().p("AgKAVIAAgoIAGAAIAAAGIAEgGQAAAAABAAQAAgBABAAQAAAAABAAQABAAAAAAQAEAAADACIgCAHIgFgCIgEACQAAAAAAAAQgBABAAAAQAAABAAAAQgBABAAAAQgBAEAAAEIAAAVg");
	this.shape_5.setTransform(-20.1,27);

	this.shape_6 = new cjs.Shape();
	this.shape_6.graphics.f("#000000").s().p("AgNAQQgFgFgBgLQABgLAGgFQAFgFAHAAQAJAAAFAGQAGAGAAAJQAAAHgDAFQgDAFgEACQgFADgFAAQgHAAgGgGgAgIgLQgDAEAAAHQAAAIADAEQAEAEAEAAQAFAAAEgEQADgEABgIQgBgHgDgEQgEgEgFAAQgEAAgEAEg");
	this.shape_6.setTransform(-23.9,27);

	this.shape_7 = new cjs.Shape();
	this.shape_7.graphics.f("#000000").s().p("AAPAdIgdgsIAAAsIgHAAIAAg5IAIAAIAdAsIAAgsIAHAAIAAA5g");
	this.shape_7.setTransform(-29.1,26.2);

	this.shape_8 = new cjs.Shape();
	this.shape_8.graphics.f("#000000").s().p("AgPASQgDgDAAgFQAAgDACgDQABgCACgCIAFgBIAGgBIAMgDIAAgBQAAgFgCgBQgDgDgFAAQgEAAgDACQgCACgBAEIgHgBIADgHQADgDAEgBQADgCAFAAQAFAAAEACQADABABACIADAFIAAAGIAAAIIABANIABAFIgHAAQgBgCgBgDIgHAEIgHACQgHAAgEgEgAAAADIgHABIgCACIgBAEQAAAAAAABQAAABAAAAQAAABABAAQAAABABAAQACACAEAAQADAAADgCQADgBACgDQABgDAAgEIAAgDIgKADg");
	this.shape_8.setTransform(-2.8,18.1);

	this.shape_9 = new cjs.Shape();
	this.shape_9.graphics.f("#000000").s().p("AgKAVIAAgoIAGAAIAAAGIAEgGQAAAAABAAQAAgBABAAQAAAAABAAQABAAAAAAQAEAAADACIgCAHIgFgCIgEACQAAAAAAAAQgBABAAAAQAAABAAAAQgBABAAAAQgBAEAAAEIAAAVg");
	this.shape_9.setTransform(-6.1,18.1);

	this.shape_10 = new cjs.Shape();
	this.shape_10.graphics.f("#000000").s().p("AgNAQQgFgGAAgKQAAgJAFgGQAFgGAIAAQAJAAAFAGQAFAGAAAJIAAACIgeAAQAAAHAEADQAEAEADAAQAFAAADgCQACgCABgFIAIABQgCAHgFADQgEAEgIAAQgIAAgFgGgAgHgMQgDAEAAAFIAWAAQAAgFgDgDQgEgEgFAAQgDAAgEADg");
	this.shape_10.setTransform(-9.9,18.1);

	this.shape_11 = new cjs.Shape();
	this.shape_11.graphics.f("#000000").s().p("AAAAbIgDgDIgBgIIAAgXIgFAAIAAgGIAFAAIAAgKIAGgEIAAAOIAHAAIAAAGIgHAAIAAAXIAAAEIABABIADABIADgBIABAHIgFAAIgFgBg");
	this.shape_11.setTransform(-13.2,17.4);

	this.shape_12 = new cjs.Shape();
	this.shape_12.graphics.f("#000000").s().p("AAKAVIAAgYIgBgGQAAgBgBAAQAAgBAAAAQgBgBAAAAQgBAAAAgBQgBAAAAAAQgBgBAAAAQgBAAgBAAQAAAAgBAAQgDAAgEADQgDADAAAIIAAAVIgHAAIAAgoIAGAAIAAAGQAFgHAIAAQADAAADABQAEACABACIACAFIABAHIAAAYg");
	this.shape_12.setTransform(-16.6,18.1);

	this.shape_13 = new cjs.Shape();
	this.shape_13.graphics.f("#000000").s().p("AgNAQQgGgFAAgLQAAgLAHgFQAGgFAGAAQAIAAAGAGQAFAGABAJQgBAHgCAFQgCAFgFACQgEADgGAAQgIAAgFgGgAgHgLQgEAEAAAHQAAAIAEAEQADAEAEAAQAGAAADgEQADgEAAgIQAAgHgDgEQgDgEgGAAQgEAAgDAEg");
	this.shape_13.setTransform(-21,18.1);

	this.shape_14 = new cjs.Shape();
	this.shape_14.graphics.f("#000000").s().p("AgKAVIAAgoIAGAAIAAAGIAEgGQAAAAABAAQAAgBABAAQAAAAABAAQABAAAAAAQAEAAADACIgCAHIgFgCIgEACQAAAAAAAAQgBABAAAAQAAABAAAAQgBABAAAAQgBAEAAAEIAAAVg");
	this.shape_14.setTransform(-24.3,18.1);

	this.shape_15 = new cjs.Shape();
	this.shape_15.graphics.f("#000000").s().p("AgSAdIAAg5IAlAAIAAAHIgeAAIAAASIAaAAIAAAGIgaAAIAAAag");
	this.shape_15.setTransform(-28.2,17.3);

	this.timeline.addTween(cjs.Tween.get({}).to({state:[{t:this.shape_15},{t:this.shape_14},{t:this.shape_13},{t:this.shape_12},{t:this.shape_11},{t:this.shape_10},{t:this.shape_9},{t:this.shape_8},{t:this.shape_7},{t:this.shape_6},{t:this.shape_5},{t:this.shape_4},{t:this.shape_3},{t:this.shape_2},{t:this.shape_1},{t:this.shape}]}).wait(1));

	// Frame
	this.shape_16 = new cjs.Shape();
	this.shape_16.graphics.f().s("#94945A").ss(1,0,0,22.9).p("AmylYINlAAIAAKxItlAAg");

	this.timeline.addTween(cjs.Tween.get(this.shape_16).wait(1));

	// Mask (mask)
	var mask = new cjs.Shape();
	mask._off = true;
	mask.graphics.p("AmyFZIAAqxINlAAIAAKxg");

	// Map
	this.instance = new lib.graph_01("synched",0);
	this.instance.parent = this;

	var maskedShapeInstanceList = [this.instance];

	for(var shapedInstanceItr = 0; shapedInstanceItr < maskedShapeInstanceList.length; shapedInstanceItr++) {
		maskedShapeInstanceList[shapedInstanceItr].mask = mask;
	}

	this.timeline.addTween(cjs.Tween.get(this.instance).wait(1));

	// Map_Bottom
	this.map_bottom = new lib.mc_01_bottom();
	this.map_bottom.name = "map_bottom";
	this.map_bottom.parent = this;
	this.map_bottom.alpha = 0.602;

	var maskedShapeInstanceList = [this.map_bottom];

	for(var shapedInstanceItr = 0; shapedInstanceItr < maskedShapeInstanceList.length; shapedInstanceItr++) {
		maskedShapeInstanceList[shapedInstanceItr].mask = mask;
	}

	this.timeline.addTween(cjs.Tween.get(this.map_bottom).wait(1));

	// Texture
	this.instance_1 = new lib.mc_01_background();
	this.instance_1.parent = this;
	this.instance_1.setTransform(-43,-34);

	this.timeline.addTween(cjs.Tween.get(this.instance_1).wait(1));

	// Background
	this.shape_17 = new cjs.Shape();
	this.shape_17.graphics.f("rgba(255,255,255,0.2)").s().p("AmyFZIAAqxINlAAIAAKxg");

	this.timeline.addTween(cjs.Tween.get(this.shape_17).wait(1));

}).prototype = getMCSymbolPrototype(lib.mc_01, new cjs.Rectangle(-44.5,-35.5,89,71), null);


(lib.btn_12 = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// Capa_1
	this.instance = new lib.graph_BTN("single",0);
	this.instance.parent = this;
	this.instance.setTransform(0,0,1.79,1.22);

	this.timeline.addTween(cjs.Tween.get(this.instance).wait(1));

}).prototype = getMCSymbolPrototype(lib.btn_12, new cjs.Rectangle(-89.5,-61,179,122), null);


(lib.btn_11 = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// Capa_1
	this.instance = new lib.graph_BTN("single",0);
	this.instance.parent = this;
	this.instance.setTransform(0,0,1.51,1.27);

	this.timeline.addTween(cjs.Tween.get(this.instance).wait(1));

}).prototype = getMCSymbolPrototype(lib.btn_11, new cjs.Rectangle(-75.5,-63.5,151,127), null);


(lib.btn_10 = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// Capa_1
	this.instance = new lib.graph_BTN("single",0);
	this.instance.parent = this;
	this.instance.setTransform(0,0,1.07,1.54);

	this.timeline.addTween(cjs.Tween.get(this.instance).wait(1));

}).prototype = getMCSymbolPrototype(lib.btn_10, new cjs.Rectangle(-53.5,-77,107,154), null);


(lib.btn_09 = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// Capa_1
	this.instance = new lib.graph_BTN("single",0);
	this.instance.parent = this;
	this.instance.setTransform(0,0,1.48,1.07);

	this.timeline.addTween(cjs.Tween.get(this.instance).wait(1));

}).prototype = getMCSymbolPrototype(lib.btn_09, new cjs.Rectangle(-74,-53.5,148,107), null);


(lib.btn_08 = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// Capa_1
	this.instance = new lib.graph_BTN("single",0);
	this.instance.parent = this;
	this.instance.setTransform(0,0,1.14,0.61);

	this.timeline.addTween(cjs.Tween.get(this.instance).wait(1));

}).prototype = getMCSymbolPrototype(lib.btn_08, new cjs.Rectangle(-57,-30.5,114,61), null);


(lib.btn_07 = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// Capa_1
	this.instance = new lib.graph_BTN("single",0);
	this.instance.parent = this;
	this.instance.setTransform(0,0,1.05,1.02);

	this.timeline.addTween(cjs.Tween.get(this.instance).wait(1));

}).prototype = getMCSymbolPrototype(lib.btn_07, new cjs.Rectangle(-52.5,-51,105,102), null);


(lib.btn_06 = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// Capa_1
	this.instance = new lib.graph_BTN("single",0);
	this.instance.parent = this;
	this.instance.setTransform(0,0,0.8,0.73);

	this.timeline.addTween(cjs.Tween.get(this.instance).wait(1));

}).prototype = getMCSymbolPrototype(lib.btn_06, new cjs.Rectangle(-40,-36.5,80,73), null);


(lib.btn_05 = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// Capa_1
	this.instance = new lib.graph_BTN("single",0);
	this.instance.parent = this;
	this.instance.setTransform(0,0,1.17,1.09);

	this.timeline.addTween(cjs.Tween.get(this.instance).wait(1));

}).prototype = getMCSymbolPrototype(lib.btn_05, new cjs.Rectangle(-58.5,-54.5,117,109), null);


(lib.btn_04 = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// Capa_1
	this.instance = new lib.graph_BTN("single",0);
	this.instance.parent = this;
	this.instance.setTransform(0,0,2.1,1.42);

	this.timeline.addTween(cjs.Tween.get(this.instance).wait(1));

}).prototype = getMCSymbolPrototype(lib.btn_04, new cjs.Rectangle(-105,-71,210,142), null);


(lib.btn_03 = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// Capa_1
	this.instance = new lib.graph_BTN("single",0);
	this.instance.parent = this;
	this.instance.setTransform(0,0,0.82,1.21);

	this.timeline.addTween(cjs.Tween.get(this.instance).wait(1));

}).prototype = getMCSymbolPrototype(lib.btn_03, new cjs.Rectangle(-41,-60.5,82,121), null);


(lib.btn_02 = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// Capa_1
	this.instance = new lib.graph_BTN("single",0);
	this.instance.parent = this;
	this.instance.setTransform(0,0,1.03,0.91);

	this.timeline.addTween(cjs.Tween.get(this.instance).wait(1));

}).prototype = getMCSymbolPrototype(lib.btn_02, new cjs.Rectangle(-51.5,-45.5,103,91), null);


(lib.btn_01 = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// Capa_1
	this.instance = new lib.graph_BTN("single",0);
	this.instance.parent = this;
	this.instance.setTransform(0,0,0.87,0.69);

	this.timeline.addTween(cjs.Tween.get(this.instance).wait(1));

}).prototype = getMCSymbolPrototype(lib.btn_01, new cjs.Rectangle(-43.5,-34.5,87,69), null);


(lib.btn_nav = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{"goStart":0,goActive:9});

	// timeline functions:
	this.frame_0 = function() {
		this.stop();
	}
	this.frame_9 = function() {
		this.stop();
	}

	// actions tween:
	this.timeline.addTween(cjs.Tween.get(this).call(this.frame_0).wait(9).call(this.frame_9).wait(10));

	// Capa_1
	this.instance = new lib.btn_nav_graph("single",0);
	this.instance.parent = this;
	this.instance.setTransform(0.1,0.1,1,1,0,0,0,0.1,0.1);

	this.timeline.addTween(cjs.Tween.get(this.instance).wait(19));

	// Capa_2
	this.shape = new cjs.Shape();
	this.shape.graphics.f("rgba(0,0,0,0.298)").s().p("AgbAcQgMgMAAgQQAAgQAMgMQAMgLAPAAQARAAALALQAMAMAAAQQAAAQgMAMQgLAMgRAAQgPAAgMgMg");
	this.shape.setTransform(12,10);

	this.shape_1 = new cjs.Shape();
	this.shape_1.graphics.f("#FFFFFF").s().p("AgUAVQgJgJAAgMQAAgLAJgJQAJgJALAAQAMAAAJAJQAJAJAAALQAAAMgJAJQgJAJgMAAQgLAAgJgJg");
	this.shape_1.setTransform(12,10);

	this.shape_2 = new cjs.Shape();
	this.shape_2.graphics.f("#394C64").s().p("AgxAxQgUgVAAgcQAAgcAUgVQAWgUAbAAQAcAAAVAUQAVAVAAAcQAAAcgVAVQgVAVgcAAQgbAAgWgVg");
	this.shape_2.setTransform(12,10);

	this.timeline.addTween(cjs.Tween.get({}).to({state:[{t:this.shape}]}).to({state:[{t:this.shape_2},{t:this.shape_1}]},9).wait(10));

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = new cjs.Rectangle(0,0,140,20);


// stage content:
(lib.mainmenu_nwo = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{"goStart":0,go01:9,go02:19,go03:29,go04:39});

	// timeline functions:
	this.frame_0 = function() {
		var frequency = 30;
		stage.enableMouseOver(frequency);
		
		var _this = this;
		_this.stop();
		
		
		/************************************************************
			REGIONES [BOTONES-DATA]
		************************************************************/
		
		/** FRONTERA NOROESTE **/
		_this.btn_01.name = "btn_01";
		var btn_01_scale = 4.0;
		var btn_01_posX = 184; //73
		var btn_01_posY = 148; //58
		
		/** PACIFICO NORTE **/
		_this.btn_02.name = "btn_02";
		var btn_02_scale = 3.0;
		var btn_02_posX = 210; //210
		var btn_02_posY = 155; //155
		
		/** FRONTERA NORTE **/
		_this.btn_03.name = "btn_03";
		var btn_03_scale = 2.5;
		var btn_03_posX = 358; //358
		var btn_03_posY = 161; //111
		
		/** FRONTERA NORESTE **/
		_this.btn_04.name = "btn_04";
		var btn_04_scale = 2.0;
		var btn_04_posX = 508; //508
		var btn_04_posY = 202; //202
		
		/** PACIFICO **/
		_this.btn_05.name = "btn_05";
		var btn_05_scale = 2.5;
		var btn_05_posX = 306; //306
		var btn_05_posY = 259; //259
		
		/** MEGALOPOLIS **/
		_this.btn_06.name = "btn_06";
		var btn_06_scale = 4.0;
		var btn_06_posX = 556; //556
		var btn_06_posY = 411; //411
		
		/** BAJIO **/
		_this.btn_07.name = "btn_07";
		var btn_07_scale = 3.0;
		var btn_07_posX = 487; //487
		var btn_07_posY = 350; //350
		
		/** ACAPULCO **/
		_this.btn_08.name = "btn_08";
		var btn_08_scale = 4.5;
		var btn_08_posX = 493; //493
		var btn_08_posY = 433; //465
		
		/** PACIFICO CENTRO **/
		_this.btn_09.name = "btn_09";
		var btn_09_scale = 2.5;
		var btn_09_posX = 433; //433
		var btn_09_posY = 386; //386
		
		/** GOLFO **/
		_this.btn_10.name = "btn_10";
		var btn_10_scale = 2.5;
		var btn_10_posX = 607; //607
		var btn_10_posY = 377; //377
		
		/** ISTMO **/
		_this.btn_11.name = "btn_11";
		var btn_11_scale = 2.5;
		var btn_11_posX = 681; //681
		var btn_11_posY = 411; //494
		
		/** CARIBE **/
		_this.btn_12.name = "btn_12";
		var btn_12_scale = 2.5;
		var btn_12_posX = 706; //820
		var btn_12_posY = 401; //401
		
		
		/************************************************************
			REGIONES [BOTONES-DATA-URL]
			CENTROGEO - CIDE - CIESAS - COLEF
		************************************************************/
		
		//var btn_01_winOpen, btn_02_winOpen, btn_03_winOpen, btn_04_winOpen, btn_05_winOpen, btn_06_winOpen, btn_07_winOpen, btn_08_winOpen, btn_09_winOpen, btn_10_winOpen, btn_11_winOpen, btn_12_winOpen;
		
		
		/************************************************************
			REGIONES [BOTONES-LISTENER]
		************************************************************/
		
		_this.btn_01.addEventListener("mouseover", mouseOver);
		_this.btn_01.addEventListener("mouseout", mouseOut);
		_this.btn_01.addEventListener("click", mouseClick.bind(_this));
		
		_this.btn_02.addEventListener("mouseover", mouseOver);
		_this.btn_02.addEventListener("mouseout", mouseOut);
		_this.btn_02.addEventListener("click", mouseClick.bind(_this));
		
		_this.btn_03.addEventListener("mouseover", mouseOver);
		_this.btn_03.addEventListener("mouseout", mouseOut);
		_this.btn_03.addEventListener("click", mouseClick.bind(_this));
		
		_this.btn_04.addEventListener("mouseover", mouseOver);
		_this.btn_04.addEventListener("mouseout", mouseOut);
		_this.btn_04.addEventListener("click", mouseClick.bind(_this));
		
		_this.btn_05.addEventListener("mouseover", mouseOver);
		_this.btn_05.addEventListener("mouseout", mouseOut);
		_this.btn_05.addEventListener("click", mouseClick.bind(_this));
		
		_this.btn_06.addEventListener("mouseover", mouseOver);
		_this.btn_06.addEventListener("mouseout", mouseOut);
		_this.btn_06.addEventListener("click", mouseClick.bind(_this));
		
		_this.btn_07.addEventListener("mouseover", mouseOver);
		_this.btn_07.addEventListener("mouseout", mouseOut);
		_this.btn_07.addEventListener("click", mouseClick.bind(_this));
		
		_this.btn_08.addEventListener("mouseover", mouseOver);
		_this.btn_08.addEventListener("mouseout", mouseOut);
		_this.btn_08.addEventListener("click", mouseClick.bind(_this));
		
		_this.btn_09.addEventListener("mouseover", mouseOver);
		_this.btn_09.addEventListener("mouseout", mouseOut);
		_this.btn_09.addEventListener("click", mouseClick.bind(_this));
		
		_this.btn_10.addEventListener("mouseover", mouseOver);
		_this.btn_10.addEventListener("mouseout", mouseOut);
		_this.btn_10.addEventListener("click", mouseClick.bind(_this));
		
		_this.btn_11.addEventListener("mouseover", mouseOver);
		_this.btn_11.addEventListener("mouseout", mouseOut);
		_this.btn_11.addEventListener("click", mouseClick.bind(_this));
		
		_this.btn_12.addEventListener("mouseover", mouseOver);
		_this.btn_12.addEventListener("mouseout", mouseOut);
		_this.btn_12.addEventListener("click", mouseClick.bind(_this));
		
		
		/************************************************************
			REGIONES [SET-CURSOR]
		************************************************************/
		
		_this.btn_01.cursor = "pointer";
		_this.btn_02.cursor = "pointer";
		_this.btn_03.cursor = "pointer";
		_this.btn_04.cursor = "pointer";
		_this.btn_05.cursor = "pointer";
		_this.btn_06.cursor = "pointer";
		_this.btn_07.cursor = "pointer";
		_this.btn_08.cursor = "pointer";
		_this.btn_09.cursor = "pointer";
		_this.btn_10.cursor = "pointer";
		_this.btn_11.cursor = "pointer";
		_this.btn_12.cursor = "pointer";
		
		
		/************************************************************
			REGIONES [GRAPHS-INDEX]
		************************************************************/
		
		_this.setChildIndex(_this.mc_01, 12);
		_this.setChildIndex(_this.mc_02, 11);
		_this.setChildIndex(_this.mc_03, 10);
		_this.setChildIndex(_this.mc_04, 9);
		_this.setChildIndex(_this.mc_05, 8);
		_this.setChildIndex(_this.mc_06, 7);
		_this.setChildIndex(_this.mc_07, 6);
		_this.setChildIndex(_this.mc_08, 5);
		_this.setChildIndex(_this.mc_09, 4);
		_this.setChildIndex(_this.mc_10, 3);
		_this.setChildIndex(_this.mc_11, 2);
		_this.setChildIndex(_this.mc_12, 1);
		
		
		/************************************************************
			REGIONES [BOTONES-NAV]
		************************************************************/
		
		_this.nav_01.name = "nav_01";
		_this.nav_02.name = "nav_02";
		_this.nav_03.name = "nav_03";
		_this.nav_04.name = "nav_04";
		_this.nav_05.name = "nav_05";
		_this.nav_06.name = "nav_06";
		_this.nav_07.name = "nav_07";
		_this.nav_08.name = "nav_08";
		_this.nav_09.name = "nav_09";
		_this.nav_10.name = "nav_10";
		_this.nav_11.name = "nav_11";
		_this.nav_12.name = "nav_12";
		
		_this.nav_01.addEventListener("mouseover", mouseOver);
		_this.nav_01.addEventListener("mouseout", mouseOut);
		_this.nav_01.addEventListener("click", mouseClick.bind(_this));
		
		_this.nav_02.addEventListener("mouseover", mouseOver);
		_this.nav_02.addEventListener("mouseout", mouseOut);
		_this.nav_02.addEventListener("click", mouseClick.bind(_this));
		
		_this.nav_03.addEventListener("mouseover", mouseOver);
		_this.nav_03.addEventListener("mouseout", mouseOut);
		_this.nav_03.addEventListener("click", mouseClick.bind(_this));
		
		_this.nav_04.addEventListener("mouseover", mouseOver);
		_this.nav_04.addEventListener("mouseout", mouseOut);
		_this.nav_04.addEventListener("click", mouseClick.bind(_this));
		
		_this.nav_05.addEventListener("mouseover", mouseOver);
		_this.nav_05.addEventListener("mouseout", mouseOut);
		_this.nav_05.addEventListener("click", mouseClick.bind(_this));
		
		_this.nav_06.addEventListener("mouseover", mouseOver);
		_this.nav_06.addEventListener("mouseout", mouseOut);
		_this.nav_06.addEventListener("click", mouseClick.bind(_this));
		
		_this.nav_07.addEventListener("mouseover", mouseOver);
		_this.nav_07.addEventListener("mouseout", mouseOut);
		_this.nav_07.addEventListener("click", mouseClick.bind(_this));
		
		_this.nav_08.addEventListener("mouseover", mouseOver);
		_this.nav_08.addEventListener("mouseout", mouseOut);
		_this.nav_08.addEventListener("click", mouseClick.bind(_this));
		
		_this.nav_09.addEventListener("mouseover", mouseOver);
		_this.nav_09.addEventListener("mouseout", mouseOut);
		_this.nav_09.addEventListener("click", mouseClick.bind(_this));
		
		_this.nav_10.addEventListener("mouseover", mouseOver);
		_this.nav_10.addEventListener("mouseout", mouseOut);
		_this.nav_10.addEventListener("click", mouseClick.bind(_this));
		
		_this.nav_11.addEventListener("mouseover", mouseOver);
		_this.nav_11.addEventListener("mouseout", mouseOut);
		_this.nav_11.addEventListener("click", mouseClick.bind(_this));
		
		_this.nav_12.addEventListener("mouseover", mouseOver);
		_this.nav_12.addEventListener("mouseout", mouseOut);
		_this.nav_12.addEventListener("click", mouseClick.bind(_this));
		
		_this.nav_01.cursor = "pointer";
		_this.nav_02.cursor = "pointer";
		_this.nav_03.cursor = "pointer";
		_this.nav_04.cursor = "pointer";
		_this.nav_05.cursor = "pointer";
		_this.nav_06.cursor = "pointer";
		_this.nav_07.cursor = "pointer";
		_this.nav_08.cursor = "pointer";
		_this.nav_09.cursor = "pointer";
		_this.nav_10.cursor = "pointer";
		_this.nav_11.cursor = "pointer";
		_this.nav_12.cursor = "pointer";
		
		
		/************************************************************
			REGIONES [BOTONES-FUNCTIONS]
		************************************************************/
		
		var itemName, nameSplit, navSplit, itemTarget, itemGo, itemAni, navAni, itemScale, itemPosX, itemPosY, itemPosStart, itemOpen;
		
		function mouseOver(event) {
			itemName = event.target.parent.parent.name;
			navSplit = itemName.split("_");
			if (navSplit[0] == "nav") {
				itemName = "btn_" + navSplit[1];
			}
			nameSplit = itemName.split("_");
			itemTarget = eval("_this." + itemName);
			itemScale = eval(itemName + "_scale");
			itemPosX = eval(itemName + "_posX");
			itemPosY = eval(itemName + "_posY");
			itemAni = eval("_this.mc_" + nameSplit[1]);
			navAni = eval("_this.nav_" + navSplit[1]);
			navAni.gotoAndStop("goActive");
			//itemGo = "go" + nameSplit[1];
			//_this.gotoAndStop(itemGo);
			_this.setChildIndex(itemAni, _this.getNumChildren() - 1);
			//console.log(itemAni.getNumChildren());
			//itemTarget.cursor = "pointer";
			/*TweenMax.to(itemAni.map_bottom, 0.2, {
				alpha: 0.60,
				ease: Sine.easeInOut
			});*/
			TweenMax.to(itemAni, 0.2, {
				scaleX: itemScale,
				scaleY: itemScale,
				x: itemPosX,
				y: itemPosY,
				ease: Sine.easeInOut
			});
		}
		
		function mouseOut(event) {
			itemPosStart = eval("_this." + itemName);
			navAni.gotoAndStop("goStart");
			//_this.gotoAndStop("goStart");
			_this.setChildIndex(_this.mc_01, 12);
			_this.setChildIndex(_this.mc_02, 11);
			_this.setChildIndex(_this.mc_03, 10);
			_this.setChildIndex(_this.mc_04, 9);
			_this.setChildIndex(_this.mc_05, 8);
			_this.setChildIndex(_this.mc_06, 7);
			_this.setChildIndex(_this.mc_07, 6);
			_this.setChildIndex(_this.mc_08, 5);
			_this.setChildIndex(_this.mc_09, 4);
			_this.setChildIndex(_this.mc_10, 3);
			_this.setChildIndex(_this.mc_11, 2);
			_this.setChildIndex(_this.mc_12, 1);
			/*TweenMax.to(itemAni.map_bottom, 0.4, {
				alpha: 0.60
			});*/
			TweenMax.to(itemAni, 0.4, {
				scaleX: 1,
				scaleY: 1,
				x: itemPosStart.x,
				y: itemPosStart.y,
				//onComplete: goComplete
			});
		}
		
		/*function goComplete() {
			console.log("COMPLETE");
		}*/
		
		function mouseClick(event) {
			//itemOpen = eval(itemName + "_winOpen");
			itemOpen = eval("this." + itemName + "_winOpen");
			console.log(itemOpen);
			if (itemOpen != "") {
				window.open(itemOpen[0], itemOpen[1]);
			}
		}
		
		
		/************************************************************
			INSTITUCIONES [BOTONES-NAV]
		************************************************************/
		
		/** CENTROGEO **/
		_this.btn_go01.name = "go01";
		var go01_tip = "Centro de Investigación en Ciencias de Información Geoespacial A.C.";
		
		/** CIDE **/
		_this.btn_go02.name = "go02";
		var go02_tip = "Centro de Investigación y Docencia Económicas A.C.";
		
		/** CIESAS **/
		_this.btn_go03.name = "go03";
		var go03_tip = "Centro de Investigaciones y Estudios Superiores en Antropología Social";
		
		/** COLEF **/
		_this.btn_go04.name = "go04";
		var go04_tip = "El Colegio de la Frontera Norte";
		
		_this.btn_go01.addEventListener("mouseover", mouseOverGo);
		_this.btn_go01.addEventListener("mouseout", mouseOutGo);
		_this.btn_go01.addEventListener("click", clickGo.bind(_this));
		
		_this.btn_go02.addEventListener("mouseover", mouseOverGo);
		_this.btn_go02.addEventListener("mouseout", mouseOutGo);
		_this.btn_go02.addEventListener("click", clickGo.bind(_this));
		
		_this.btn_go03.addEventListener("mouseover", mouseOverGo);
		_this.btn_go03.addEventListener("mouseout", mouseOutGo);
		_this.btn_go03.addEventListener("click", clickGo.bind(_this));
		
		_this.btn_go04.addEventListener("mouseover", mouseOverGo);
		_this.btn_go04.addEventListener("mouseout", mouseOutGo);
		_this.btn_go04.addEventListener("click", clickGo.bind(_this));
		
		var goName, goTip, goObject;
		
		function mouseOverGo(event) {
			goName = event.target.name;
			goTip = eval(goName + "_tip");
			_this.tip_output.text = goTip;
		}
		
		function mouseOutGo(event) {
			_this.tip_output.text = "";
		}
		
		function clickGo(event) {
			if (typeof (Storage) !== "undefined") {
				goObject = {
					"nameVar": "N.W.O",
					"gotoVar": goName
				};
				// LOCAL-STORAGE [SET-OBJECT]
				localStorage.setItem("nwoData", JSON.stringify(goObject));
			}
			// GOTO [LABEL]
			_this.gotoAndStop(goName);
		}
		
		
		/************************************************************
			LOCAL-STORAGE [OBJECT]
			GOTO [LABEL]
		************************************************************/
		
		if (typeof (Storage) !== "undefined") {
			// LOCAL-STORAGE [GET-OBJECT]
			var getObject = localStorage.getItem("nwoData");
			if (getObject !== null) {
				var goObjectVar = JSON.parse(getObject);
				// GOTO [LABEL]
				_this.gotoAndStop(goObjectVar.gotoVar);
				//console.log(localStorage.getItem("nwoData"));
			} else {
				goObject = {
					"nameVar": "N.W.O",
					"gotoVar": "go01"
				};
				// LOCAL-STORAGE [SET-OBJECT]
				localStorage.setItem("nwoData", JSON.stringify(goObject));
				// GOTO [LABEL]
				_this.gotoAndStop("go01");
				//console.log("SIN DATOS");
			}
		} else {
			// GOTO [LABEL]
			_this.gotoAndStop("go01");
		}
		
		/************************************************************
			SIMBOLOGIA [BOTON]
		************************************************************/
		
		_this.btn_simbologia.name = "btn_simbologia";
		//_this.btn_simbologia.cursor = "pointer";
		_this.btn_simbologia.addEventListener("mouseover", mouseBtnOverGo);
		_this.btn_simbologia.addEventListener("mouseout", mouseBtnOutGo);
		
		function mouseBtnOverGo(event) {
			_this.mc_simbologia.gotoAndStop("goView");
		}
		
		function mouseBtnOutGo(event) {
			_this.mc_simbologia.gotoAndStop("goStart");
		}
		
		/************************************************************
			START-ANIMATE
		************************************************************/
		
		tl = new TimelineMax();
		
		/** INSTITUCIONES [BOTONES-NAV] **/
		tl.staggerFrom([_this.btn_go01, _this.btn_go02, _this.btn_go03, _this.btn_go04], 0.2, {
			alpha: 0,
			ease: Sine.easeInOut
		}, 0.1);
		
		/** REGIONES [GRAPHS] **/
		tl.staggerFrom([_this.mc_01, _this.mc_02, _this.mc_03, _this.mc_04, _this.mc_05, _this.mc_09, _this.mc_12, _this.mc_11, _this.mc_08, _this.mc_07, _this.mc_10, _this.mc_06], 0.2, {
			scaleX: 0.10,
			scaleY: 0.10,
			//x: 470,
			//y: 290,
			alpha: 0,
			ease: Sine.easeInOut
		}, 0.05);
		
		/** REGIONES [BOTONES] **/
		tl.staggerFrom([_this.btn_01, _this.btn_02, _this.btn_03, _this.btn_04, _this.btn_05, _this.btn_06, _this.btn_07, _this.btn_08, _this.btn_09, _this.btn_10, _this.btn_11, _this.btn_12], 0.2, {
			alpha: 0,
			ease: Linear.easeNone
		}, 0.0);
		
		/** REGIONES [BOTONES-NAV] **/
		tl.staggerFrom([_this.nav_08, _this.nav_07, _this.nav_12, _this.nav_04, _this.nav_01, _this.nav_03, _this.nav_10, _this.nav_11, _this.nav_06, _this.nav_05, _this.nav_09, _this.nav_02], 0.2, {
			alpha: 0,
			ease: Sine.easeInOut
		}, 0.1);
	}
	this.frame_9 = function() {
		this.stop();
		
		/************************************************************
			REGIONES [BOTONES-DATA-URL]
			CENTROGEO
		************************************************************/
		
		this.btn_01_winOpen = Array("capacidadinnovacion/category/77", "_parent");
		this.btn_02_winOpen = Array("capacidadinnovacion/category/68", "_parent");
		this.btn_03_winOpen = Array("capacidadinnovacion/category/70", "_parent");
		this.btn_04_winOpen = Array("capacidadinnovacion/category/71", "_parent");
		this.btn_05_winOpen = Array("capacidadinnovacion/category/121", "_parent");
		this.btn_06_winOpen = Array("capacidadinnovacion/category/74", "_parent");
		this.btn_07_winOpen = Array("capacidadinnovacion/category/73", "_parent");
		this.btn_08_winOpen = Array("capacidadinnovacion/category/76", "_parent");
		this.btn_09_winOpen = Array("capacidadinnovacion/category/72", "_parent");
		this.btn_10_winOpen = Array("capacidadinnovacion/category/75", "_parent");
		this.btn_11_winOpen = Array("capacidadinnovacion/category/66", "_parent");
		this.btn_12_winOpen = Array("capacidadinnovacion/category/67", "_parent");
	}
	this.frame_19 = function() {
		this.stop();
		
		/************************************************************
			REGIONES [BOTONES-DATA-URL]
			CIDE
		************************************************************/
		
		this.btn_01_winOpen = Array("narrative/02-01.html", "_parent");
		this.btn_02_winOpen = Array("narrative/02-02.html", "_parent");
		this.btn_03_winOpen = Array("narrative/02-03.html", "_parent");
		this.btn_04_winOpen = Array("narrative/02-04.html", "_parent");
		this.btn_05_winOpen = Array("narrative/02-05.html", "_parent");
		this.btn_06_winOpen = Array("narrative/02-06.html", "_parent");
		this.btn_07_winOpen = Array("narrative/02-07.html", "_parent");
		this.btn_08_winOpen = Array("narrative/02-08.html", "_parent");
		this.btn_09_winOpen = Array("narrative/02-09.html", "_parent");
		this.btn_10_winOpen = Array("narrative/02-10.html", "_parent");
		this.btn_11_winOpen = Array("narrative/02-11.html", "_parent");
		this.btn_12_winOpen = Array("narrative/02-12.html", "_parent");
	}
	this.frame_29 = function() {
		this.stop();
		
		/************************************************************
			REGIONES [BOTONES-DATA-URL]
			CIESAS
		************************************************************/
		
		this.btn_01_winOpen = Array("narrative/03-01.html", "_parent");
		this.btn_02_winOpen = Array("narrative/03-02.html", "_parent");
		this.btn_03_winOpen = Array("narrative/03-03.html", "_parent");
		this.btn_04_winOpen = Array("narrative/03-04.html", "_parent");
		this.btn_05_winOpen = Array("narrative/03-05.html", "_parent");
		this.btn_06_winOpen = Array("narrative/03-06.html", "_parent");
		this.btn_07_winOpen = Array("narrative/03-07.html", "_parent");
		this.btn_08_winOpen = Array("narrative/03-08.html", "_parent");
		this.btn_09_winOpen = Array("narrative/03-09.html", "_parent");
		this.btn_10_winOpen = Array("narrative/03-10.html", "_parent");
		this.btn_11_winOpen = Array("narrative/03-11.html", "_parent");
		this.btn_12_winOpen = Array("narrative/03-12.html", "_parent");
	}
	this.frame_39 = function() {
		this.stop();
		
		/************************************************************
			REGIONES [BOTONES-DATA-URL]
			COLEF
		************************************************************/
		
		this.btn_01_winOpen = Array("narrative/04-01.html", "_parent");
		this.btn_02_winOpen = Array("narrative/04-02.html", "_parent");
		this.btn_03_winOpen = Array("narrative/04-03.html", "_parent");
		this.btn_04_winOpen = Array("narrative/04-04.html", "_parent");
		this.btn_05_winOpen = Array("narrative/04-05.html", "_parent");
		this.btn_06_winOpen = Array("narrative/04-06.html", "_parent");
		this.btn_07_winOpen = Array("narrative/04-07.html", "_parent");
		this.btn_08_winOpen = Array("narrative/04-08.html", "_parent");
		this.btn_09_winOpen = Array("narrative/04-09.html", "_parent");
		this.btn_10_winOpen = Array("narrative/04-10.html", "_parent");
		this.btn_11_winOpen = Array("narrative/04-11.html", "_parent");
		this.btn_12_winOpen = Array("narrative/04-12.html", "_parent");
	}

	// actions tween:
	this.timeline.addTween(cjs.Tween.get(this).call(this.frame_0).wait(9).call(this.frame_9).wait(10).call(this.frame_19).wait(10).call(this.frame_29).wait(10).call(this.frame_39).wait(10));

	// Regiones_BTN
	this.btn_simbologia = new lib.btn_simbologia();
	this.btn_simbologia.name = "btn_simbologia";
	this.btn_simbologia.parent = this;
	this.btn_simbologia.setTransform(10,302);

	this.btn_01 = new lib.btn_01();
	this.btn_01.name = "btn_01";
	this.btn_01.parent = this;
	this.btn_01.setTransform(73,58);

	this.btn_02 = new lib.btn_02();
	this.btn_02.name = "btn_02";
	this.btn_02.parent = this;
	this.btn_02.setTransform(210,155);

	this.btn_03 = new lib.btn_03();
	this.btn_03.name = "btn_03";
	this.btn_03.parent = this;
	this.btn_03.setTransform(358,111);

	this.btn_04 = new lib.btn_04();
	this.btn_04.name = "btn_04";
	this.btn_04.parent = this;
	this.btn_04.setTransform(508,202);

	this.btn_05 = new lib.btn_05();
	this.btn_05.name = "btn_05";
	this.btn_05.parent = this;
	this.btn_05.setTransform(306,259);

	this.btn_06 = new lib.btn_06();
	this.btn_06.name = "btn_06";
	this.btn_06.parent = this;
	this.btn_06.setTransform(556,411);

	this.btn_07 = new lib.btn_07();
	this.btn_07.name = "btn_07";
	this.btn_07.parent = this;
	this.btn_07.setTransform(487,350);

	this.btn_08 = new lib.btn_08();
	this.btn_08.name = "btn_08";
	this.btn_08.parent = this;
	this.btn_08.setTransform(493,465);

	this.btn_09 = new lib.btn_09();
	this.btn_09.name = "btn_09";
	this.btn_09.parent = this;
	this.btn_09.setTransform(433,386);

	this.btn_10 = new lib.btn_10();
	this.btn_10.name = "btn_10";
	this.btn_10.parent = this;
	this.btn_10.setTransform(607,377);

	this.btn_11 = new lib.btn_11();
	this.btn_11.name = "btn_11";
	this.btn_11.parent = this;
	this.btn_11.setTransform(681,494);

	this.btn_12 = new lib.btn_12();
	this.btn_12.name = "btn_12";
	this.btn_12.parent = this;
	this.btn_12.setTransform(820,401);

	this.timeline.addTween(cjs.Tween.get({}).to({state:[{t:this.btn_12},{t:this.btn_11},{t:this.btn_10},{t:this.btn_09},{t:this.btn_08},{t:this.btn_07},{t:this.btn_06},{t:this.btn_05},{t:this.btn_04},{t:this.btn_03},{t:this.btn_02},{t:this.btn_01},{t:this.btn_simbologia}]}).wait(49));

	// Simbologia
	this.mc_simbologia = new lib.mc_simbologia();
	this.mc_simbologia.name = "mc_simbologia";
	this.mc_simbologia.parent = this;
	this.mc_simbologia.setTransform(10,302);

	this.timeline.addTween(cjs.Tween.get(this.mc_simbologia).wait(49));

	// Regiones_MC
	this.mc_01 = new lib.mc_01();
	this.mc_01.name = "mc_01";
	this.mc_01.parent = this;
	this.mc_01.setTransform(73,58);

	this.mc_02 = new lib.mc_02();
	this.mc_02.name = "mc_02";
	this.mc_02.parent = this;
	this.mc_02.setTransform(210,155);

	this.mc_03 = new lib.mc_03();
	this.mc_03.name = "mc_03";
	this.mc_03.parent = this;
	this.mc_03.setTransform(358,111);

	this.mc_04 = new lib.mc_04();
	this.mc_04.name = "mc_04";
	this.mc_04.parent = this;
	this.mc_04.setTransform(508,202);

	this.mc_05 = new lib.mc_05();
	this.mc_05.name = "mc_05";
	this.mc_05.parent = this;
	this.mc_05.setTransform(306,259);

	this.mc_06 = new lib.mc_06();
	this.mc_06.name = "mc_06";
	this.mc_06.parent = this;
	this.mc_06.setTransform(556,411);

	this.mc_07 = new lib.mc_07();
	this.mc_07.name = "mc_07";
	this.mc_07.parent = this;
	this.mc_07.setTransform(487,350);

	this.mc_08 = new lib.mc_08();
	this.mc_08.name = "mc_08";
	this.mc_08.parent = this;
	this.mc_08.setTransform(493,465);

	this.mc_09 = new lib.mc_09();
	this.mc_09.name = "mc_09";
	this.mc_09.parent = this;
	this.mc_09.setTransform(433,386);

	this.mc_10 = new lib.mc_10();
	this.mc_10.name = "mc_10";
	this.mc_10.parent = this;
	this.mc_10.setTransform(607,377);

	this.mc_11 = new lib.mc_11();
	this.mc_11.name = "mc_11";
	this.mc_11.parent = this;
	this.mc_11.setTransform(681,494);

	this.mc_12 = new lib.mc_12();
	this.mc_12.name = "mc_12";
	this.mc_12.parent = this;
	this.mc_12.setTransform(820,401);

	this.timeline.addTween(cjs.Tween.get({}).to({state:[{t:this.mc_12},{t:this.mc_11},{t:this.mc_10},{t:this.mc_09},{t:this.mc_08},{t:this.mc_07},{t:this.mc_06},{t:this.mc_05},{t:this.mc_04},{t:this.mc_03},{t:this.mc_02},{t:this.mc_01}]}).wait(49));

	// itemGo
	this.shape = new cjs.Shape();
	this.shape.graphics.f("rgba(57,76,100,0.8)").s().p("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AAIAAgDIgPgBQgHABgBgBIgBgCIAAgGIgCgLQAAgDACgBQADAAACADIAAAHIADgBIADABIAEACIAGAAIADABIADADIAEABIgBAEQACgBADABQADACABACIABACQAAAAAAABQAAAAAAAAQgBAAAAABQAAAAgBAAIgBAAgABho/QgogLgCgEIACAAIgHgCIAAABQgHAAgEgCQgGAAgEgCIgFgBIABAAIgXgBIgVgBIADgBIgJAAIACAAIABAAIBSAEQAPACAQAEIAGABIAGACIADAAQADABAAADIgFgCIAEACIgBAAIAQAIQAKAFAFAFIgBABIgogMgAgno4IgEAAQADgCABgEQAAAAAAAAQAAgBAAAAQABAAAAAAQAAgBABAAIABAAIAEABIAGABIADABQAGACACgBIAAABIgDACIgFgBIgEAAIgEACIgEABIgEgBgAh5o9IABgCIgCAAIgCAAQAAgDAPgBQgBAAAAAAQgBgBAAAAQgBAAgBABQAAAAgBAAIgEABIAAAAIAFgCIgCAAIAJgEIgMAFIgHABIABgBIAYgHIABAAIADgBIgFACIAEAAIgDABIAFgBIAAAAIAFgBIgCACQACAAAEgDIAEAAQAAgBAAAAQABAAAAgBQABAAABAAQAAAAABAAIgCACQgHABAAADIAFABIAAABIgHABIACAAQAAACgFABIgEAAIgDgBIgLACIgLADgAhKpKQAAAAAAAAQAAgBAAAAQgBAAAAAAQAAAAgBAAIgBAAIABgBIACAAQABAAAAAAQABAAAAAAQAAAAAAAAQABgBAAAAIgBAAIAJgCIABAAIgBABIgDABIACAAIACgBIgCACIgFACIgDABIgCgBgAhapMIAEgBIgEABIALgDIADAAIAFgCIAAAAIgBABIACgBIAAABIgTAEgAhCpRIgBABIAAgBIADgBIAAAAIAAABIACgBIABAAIAFAAIAAAAIgCABIgGABgAgypSIAAgBIgEABIAAgBIACAAIAIAAIgBAAQABABAHgBQAIgCABABIAAABQgBABgVAAIAAAAg");
	this.shape.setTransform(790,230);

	this.instance = new lib.btn_go_graph("synched",0);
	this.instance.parent = this;
	this.instance.setTransform(507,45);

	this.shape_1 = new cjs.Shape();
	this.shape_1.graphics.f("rgba(57,76,100,0.8)").s().p("AlmHRQgmgiAAg5QAAg2AngmQAmgkA3AAQAoAAAlARIgIAfQgVghgwAAQglgBgYAkQgXAhAAAtQAAAuAZAhQAYAhAjAAQAWgBAQgFQARgIATgSIAAAaQgPALgPAEQgRAFgbAAQg4AAgmgjgAEEHqIAAjrICJAAIAAAZQgUgHgZgCIgsgBIAABVIBZABIAAARIhZAAIAABnIAsgBQAZgCAUgGIAAAXgAgRHqIAAjrIBDgCQBVgFAiAcQAgAaAABDQAABAglAeQgkAchOgBgAAeERIAADIQBGAMAdgfQAZgZAAg8QAAg6gigaQgWgRggAAQgRAAgTAFgAiGHqIAAjrIAvAAIAADrgAk9CHIAAi4IAeAAQgeg+AAhHQAAhFAehAIgeAAIAAi4IJ6AAIAAC4IgdAAQAdBAAABFQAABHgdA+IAdAAIAAC4gAChBbIBwAAIAAhfIgLAAQgnA5g+AmgAkQBbIEQAAQBxAABQhQQBQhPAAhyQAAhHgjg+Ih5AAQAcAZAQAiQAQAjAAAnQAABKg0A0Qg0A0hJAAIkQAAgAhdkUQgoAnAAA3QAAA3AoAoQAnAnA2gBQA3ABAngnQAngoAAg3QAAg3gngnQgngng3AAQg2AAgnAngAh1gxQgcgZgQghQgQgkAAgnQAAhJA0g1QA0g0BJABIERAAIAAhgIkRAAQhwAAhQBRQhQBQAABwQAABIAjA9IB4AAIAAAAgAkQlnIAKAAQAog8A9gkIhvAAgAgfiWQgNgNAAgTQAAgSANgNQANgNASAAQASAAANANQANANAAASQAAATgNANQgNANgSgBQgSABgNgNg");
	this.shape_1.setTransform(790,230);

	this.shape_2 = new cjs.Shape();
	this.shape_2.graphics.f("rgba(57,76,100,0.8)").s().p("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EACAIQACAHAGADQADgCAfgNQAcgLAFgGIgFgEIgDgCIgkAJgADIiyQAFACADAFIAIALQACgKACgEQAEgFAIgDQAFgBAEACQAEACABAGIgBAJQARAAAMgKQAKgIAKgRQAKgMgCgVQgCgWgOgKQgKgGAFgRQAGgVgCgGQABgEgGgDQgGgBgHAIQgCADgJAUQgGAPgLACQgQgFgUABQgNAAgYAGQgMgEgGgPQgIgQgJgFQgRgCgBALQAAAGACAGQAOARABAQQAAAJgGAPQgGAPAAAHQgBAOANANQAbAbAVgGIgBgGQAAgDAEgEQADgFAGAAQAEAAAGAEgAAwjKQggAFgFADQgJAIANAJQANAIAFgCQBEgHAEgLQgGgFgBgKIABgJQgQAGgjAFgADijEQgMgMAAgQQAAgQAMgLQALgMARAAQAQAAAMAMQALALAAAQQAAAQgLAMQgMALgQAAQgRAAgLgLgADpj1QgJAJAAAMQAAAMAJAJQAJAJAMgBQAMABAIgJQAJgJAAgMQAAgMgJgJQgIgIgMAAQgMAAgJAIgACQjEQgLgMAAgQQAAgQALgLQALgMARAAQAQAAAMAMQAKALABAQQgBAQgKAMQgMALgQAAQgRAAgLgLgACXj1QgJAJAAAMQAAAMAJAJQAJAJAMgBQAMABAJgJQAIgJAAgMQAAgMgIgJQgJgIgMAAQgMAAgJAIgADxjUQgFgEAAgIQAAgHAFgGQAFgEAIAAQAGAAAGAEQAFAGAAAHQAAAIgFAEQgGAFgGABQgIgBgFgFgACgjUQgFgEAAgIQAAgHAFgGQAFgEAHAAQAIAAAEAEQAFAGAAAHQAAAIgFAEQgEAFgIABQgHgBgFgFg");
	this.shape_2.setTransform(790,230);

	this.shape_3 = new cjs.Shape();
	this.shape_3.graphics.f("rgba(57,76,100,0.8)").s().p("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");
	this.shape_3.setTransform(790,220);

	this.timeline.addTween(cjs.Tween.get({}).to({state:[]}).to({state:[{t:this.instance,p:{x:507}},{t:this.shape}]},9).to({state:[{t:this.instance,p:{x:623}},{t:this.shape_1}]},10).to({state:[{t:this.instance,p:{x:698}},{t:this.shape_2}]},10).to({state:[{t:this.instance,p:{x:794}},{t:this.shape_3}]},10).wait(10));

	// Instituciones_NAV
	this.btn_go04 = new lib.btn_go04();
	this.btn_go04.name = "btn_go04";
	this.btn_go04.parent = this;
	this.btn_go04.setTransform(794,45);
	new cjs.ButtonHelper(this.btn_go04, 0, 1, 2, false, new lib.btn_go04(), 3);

	this.btn_go03 = new lib.btn_go03();
	this.btn_go03.name = "btn_go03";
	this.btn_go03.parent = this;
	this.btn_go03.setTransform(698,45);
	new cjs.ButtonHelper(this.btn_go03, 0, 1, 2, false, new lib.btn_go03(), 3);

	this.btn_go02 = new lib.btn_go02();
	this.btn_go02.name = "btn_go02";
	this.btn_go02.parent = this;
	this.btn_go02.setTransform(623,45);
	new cjs.ButtonHelper(this.btn_go02, 0, 1, 2, false, new lib.btn_go02(), 3);

	this.btn_go01 = new lib.btn_go01();
	this.btn_go01.name = "btn_go01";
	this.btn_go01.parent = this;
	this.btn_go01.setTransform(507,45);
	new cjs.ButtonHelper(this.btn_go01, 0, 1, 2, false, new lib.btn_go01(), 3);

	this.shape_4 = new cjs.Shape();
	this.shape_4.graphics.lf(["rgba(255,255,255,0)","#FFFFFF","#FFFFFF","rgba(255,255,255,0)"],[0,0.153,0.867,1],-240,0,240,0).s().p("EglfACMIAAkXMBK/AAAIAAEXg");
	this.shape_4.setTransform(680,44);

	this.tip_output = new cjs.Text(".", "normal 600 12px 'Open Sans'");
	this.tip_output.name = "tip_output";
	this.tip_output.textAlign = "center";
	this.tip_output.lineHeight = 16;
	this.tip_output.lineWidth = 476;
	this.tip_output.parent = this;
	this.tip_output.setTransform(680,68);
	if(!lib.properties.webfonts['Open Sans']) {
		lib.webFontTxtInst['Open Sans'] = lib.webFontTxtInst['Open Sans'] || [];
		lib.webFontTxtInst['Open Sans'].push(this.tip_output);
	}

	this.timeline.addTween(cjs.Tween.get({}).to({state:[{t:this.tip_output},{t:this.shape_4},{t:this.btn_go01},{t:this.btn_go02},{t:this.btn_go03},{t:this.btn_go04}]}).wait(49));

	// Regiones_NAV
	this.nav_05 = new lib.btn_nav();
	this.nav_05.name = "nav_05";
	this.nav_05.parent = this;
	this.nav_05.setTransform(160,500);

	this.nav_04 = new lib.btn_nav();
	this.nav_04.name = "nav_04";
	this.nav_04.parent = this;
	this.nav_04.setTransform(160,417);

	this.nav_01 = new lib.btn_nav();
	this.nav_01.name = "nav_01";
	this.nav_01.parent = this;
	this.nav_01.setTransform(10,445);

	this.nav_02 = new lib.btn_nav();
	this.nav_02.name = "nav_02";
	this.nav_02.parent = this;
	this.nav_02.setTransform(160,528);

	this.nav_03 = new lib.btn_nav();
	this.nav_03.name = "nav_03";
	this.nav_03.parent = this;
	this.nav_03.setTransform(160,445);

	this.nav_06 = new lib.btn_nav();
	this.nav_06.name = "nav_06";
	this.nav_06.parent = this;
	this.nav_06.setTransform(10,500);

	this.nav_09 = new lib.btn_nav();
	this.nav_09.name = "nav_09";
	this.nav_09.parent = this;
	this.nav_09.setTransform(10,528);

	this.nav_10 = new lib.btn_nav();
	this.nav_10.name = "nav_10";
	this.nav_10.parent = this;
	this.nav_10.setTransform(10,472);

	this.nav_12 = new lib.btn_nav();
	this.nav_12.name = "nav_12";
	this.nav_12.parent = this;
	this.nav_12.setTransform(10,417);

	this.nav_11 = new lib.btn_nav();
	this.nav_11.name = "nav_11";
	this.nav_11.parent = this;
	this.nav_11.setTransform(160,472);

	this.nav_08 = new lib.btn_nav();
	this.nav_08.name = "nav_08";
	this.nav_08.parent = this;
	this.nav_08.setTransform(10,390);

	this.nav_07 = new lib.btn_nav();
	this.nav_07.name = "nav_07";
	this.nav_07.parent = this;
	this.nav_07.setTransform(160,390);

	this.timeline.addTween(cjs.Tween.get({}).to({state:[{t:this.nav_07},{t:this.nav_08},{t:this.nav_11},{t:this.nav_12},{t:this.nav_10},{t:this.nav_09},{t:this.nav_06},{t:this.nav_03},{t:this.nav_02},{t:this.nav_01},{t:this.nav_04},{t:this.nav_05}]}).wait(49));

	// Titles_NAV
	this.shape_5 = new cjs.Shape();
	this.shape_5.graphics.f("#000000").s().p("AgXAlQgIgHgCgOIANgCQABAJAGAFQAFAEAJAAQAJAAAFgEQAFgEAAgFQAAgFgFgDQgCgCgLgDQgPgDgGgDQgGgDgDgEQgDgGAAgGQAAgFACgFQADgEAEgEQADgCAGgCQAGgBAGAAQAJAAAHACQAIADAEAFQADAFABAIIgNACQgCgGgEgEQgFgEgHAAQgKAAgDADQgEADAAAFIABAFIAFADIAMAEQAPAEAGADQAFABAEAFQADAFAAAHQAAAHgDAGQgFAGgHAEQgJADgJAAQgPAAgJgGg");
	this.shape_5.setTransform(140.5,362.4);

	this.shape_6 = new cjs.Shape();
	this.shape_6.graphics.f("#000000").s().p("AgeAlQgHgHAAgKQAAgHADgEQADgGAEgCQAEgDAGgBIAMgCQAQgCAJgDIAAgEQAAgIgFgEQgFgEgKgBQgKABgEADQgFAEgCAIIgOgCQACgJAEgFQAFgGAIgDQAIgCAKAAQALgBAGADQAHACADAFQADADABAGIAAANIAAARQAAAVACAEIADAKIgPAAIgDgKQgHAHgIACQgFADgJAAQgOAAgHgGgAgDAFIgMADQgEACgCADQgBACAAAEQAAAGAEAEQAEADAIAAQAIABAGgEQAGgDAEgHQACgFAAgJIAAgFQgIADgPACg");
	this.shape_6.setTransform(132.1,362.4);

	this.shape_7 = new cjs.Shape();
	this.shape_7.graphics.f("#000000").s().p("AAUAqIAAgxQAAgJgCgEQgCgEgEgDQgEgCgGAAQgIAAgGAGQgHAFAAAQIAAAsIgOAAIAAhSIANAAIAAAMQAJgOAQABQAIAAAGACQAGADAEAFQADAEABAGIABAOIAAAxg");
	this.shape_7.setTransform(123.2,362.3);

	this.shape_8 = new cjs.Shape();
	this.shape_8.graphics.f("#000000").s().p("AgeAlQgHgHAAgKQAAgHACgEQADgGAFgCQAFgDAFgBIAMgCQARgCAHgDIAAgEQAAgIgDgEQgGgEgKgBQgKABgEADQgFAEgCAIIgOgCQACgJAFgFQADgGAJgDQAIgCAJAAQALgBAHADQAGACADAFQAEADABAGIABANIAAARQAAAVABAEIADAKIgOAAIgEgKQgHAHgHACQgHADgIAAQgNAAgIgGgAgCAFIgNADQgDACgCADQgCACAAAEQAAAGAEAEQAFADAHAAQAIABAGgEQAHgDADgHQABgFAAgJIAAgFQgHADgOACg");
	this.shape_8.setTransform(114.3,362.4);

	this.shape_9 = new cjs.Shape();
	this.shape_9.graphics.f("#000000").s().p("AgWAuIAAAKIgNAAIAAhxIAOAAIAAApQAJgMANAAQAHAAAIAEQAGADAFAFQAEAGADAIQACAHAAAJQAAAVgKALQgLAMgPAAQgOAAgIgMgAgQgIQgGAIAAAOQAAAPAEAHQAHALALAAQAIAAAHgIQAGgIAAgQQAAgQgGgHQgHgIgIAAQgIAAgIAIg");
	this.shape_9.setTransform(105.6,360.9);

	this.shape_10 = new cjs.Shape();
	this.shape_10.graphics.f("#000000").s().p("AgVAqIAAhSIAMAAIAAANQAFgJAEgDQADgCAFAAQAHgBAIAFIgGANQgEgDgGAAQgEAAgDADQgDACgCAGQgDAHAAAJIAAAqg");
	this.shape_10.setTransform(98.9,362.3);

	this.shape_11 = new cjs.Shape();
	this.shape_11.graphics.f("#000000").s().p("AgZA1QgKgGgEgKQgFgLAAgSIAAhBIAPAAIAABBQAAAPADAHQADAHAGAEQAIAEAJAAQAQAAAHgIQAHgIAAgVIAAhBIAPAAIAABBQAAARgDAKQgEAKgLAHQgKAGgRAAQgOAAgLgFg");
	this.shape_11.setTransform(89.8,360.9);

	this.shape_12 = new cjs.Shape();
	this.shape_12.graphics.f("#000000").s().p("AgXAlQgIgHgDgOIAPgCQAAAJAGAFQAFAEAJAAQAJAAAFgEQAFgEAAgFQAAgFgEgDQgDgCgMgDQgOgDgGgDQgGgDgDgEQgDgGAAgGQAAgFADgFQACgEAEgEQADgCAGgCQAGgBAHAAQAIAAAIACQAHADAEAFQADAFABAIIgNACQgCgGgEgEQgFgEgHAAQgJAAgFADQgDADAAAFIABAFIAGADIALAEQAPAEAGADQAGABADAFQADAFABAHQAAAHgFAGQgEAGgHAEQgJADgJAAQgQAAgIgGg");
	this.shape_12.setTransform(75.6,362.4);

	this.shape_13 = new cjs.Shape();
	this.shape_13.graphics.f("#000000").s().p("AgbAgQgKgLAAgUQAAgUAKgMQALgLAQAAQARAAALALQAKALAAAUIAAADIg9AAQABAPAHAGQAHAIAJAAQAIAAAFgEQAGgFADgIIAPABQgEANgJAIQgJAGgPAAQgRABgLgMgAgPgYQgGAGgBALIAtAAQgBgLgEgFQgHgIgKAAQgJAAgHAHg");
	this.shape_13.setTransform(67.1,362.4);

	this.shape_14 = new cjs.Shape();
	this.shape_14.graphics.f("#000000").s().p("AAUAqIAAgxQAAgJgCgEQgCgEgEgDQgEgCgGAAQgIAAgGAGQgHAFAAAQIAAAsIgOAAIAAhSIANAAIAAAMQAJgOAQABQAIAAAGACQAGADAEAFQADAEABAGIABAOIAAAxg");
	this.shape_14.setTransform(58.2,362.3);

	this.shape_15 = new cjs.Shape();
	this.shape_15.graphics.f("#000000").s().p("AgbAgQgLgLAAgVQAAgWANgLQALgJAOAAQARAAALALQALALAAAUQAAAPgFAJQgFAJgJAGQgJAEgLAAQgQABgLgMgAgRgXQgGAIAAAPQAAAQAGAIQAHAIAKAAQAKAAAHgIQAHgIAAgQQAAgPgHgIQgHgIgKAAQgKABgHAHg");
	this.shape_15.setTransform(49.3,362.4);

	this.shape_16 = new cjs.Shape();
	this.shape_16.graphics.f("#000000").s().p("AgGA5IAAhSIANAAIAABSgAgGgoIAAgQIANAAIAAAQg");
	this.shape_16.setTransform(43.1,360.8);

	this.shape_17 = new cjs.Shape();
	this.shape_17.graphics.f("#000000").s().p("AgYA1QgJgHAAgNIAOACQABAGAEADQAFAEAJAAQAJAAAFgEQAFgEACgHQABgEAAgOQgJALgNAAQgRAAgJgNQgKgMAAgQQAAgMAFgKQAEgKAIgGQAIgFALAAQAOAAAKAMIAAgKIANAAIAABHQAAATgEAIQgEAIgJAFQgIAEgMAAQgPAAgJgGgAgPgnQgGAIAAAPQAAAQAGAHQAHAHAJAAQAJAAAHgHQAGgHAAgQQAAgPgGgIQgHgHgKAAQgIAAgHAHg");
	this.shape_17.setTransform(36.6,363.9);

	this.shape_18 = new cjs.Shape();
	this.shape_18.graphics.f("#000000").s().p("AgbAgQgKgLAAgUQAAgUAKgMQALgLAQAAQARAAALALQAKALAAAUIAAADIg9AAQABAPAHAGQAHAIAJAAQAIAAAFgEQAGgFADgIIAPABQgEANgJAIQgJAGgPAAQgRABgLgMgAgPgYQgGAGgBALIAtAAQgBgLgEgFQgHgIgKAAQgJAAgHAHg");
	this.shape_18.setTransform(28,362.4);

	this.shape_19 = new cjs.Shape();
	this.shape_19.graphics.f("#000000").s().p("AAfA5IgOgYIgMgPIgGgIIgHgDIgIgBIgSAAIAAAzIgQAAIAAhxIAzAAQAPAAAHADQAJADAFAIQAEAIAAAJQAAAMgHAJQgIAHgRACIAJAGQAHAGAFAJIAUAfgAgigGIAhAAQAIAAAGgCQAHgCACgFQAEgEAAgGQgBgIgGgFQgFgGgNAAIgjAAg");
	this.shape_19.setTransform(18.3,360.8);

	this.shape_20 = new cjs.Shape();
	this.shape_20.graphics.f("#000000").s().p("AgXAcQgJgKAAgRQAAgSAJgKQAKgKAOAAQAOAAAJAKQAJAKAAARIAAADIg1AAQABAMAGAGQAGAHAJAAQAGAAAFgEQAFgDADgIIAMABQgDAMgIAGQgIAGgNAAQgPAAgJgKgAgNgVQgFAFgBAKIAoAAQgCgJgDgFQgGgHgJAAQgIAAgGAGg");
	this.shape_20.setTransform(266.1,539);

	this.shape_21 = new cjs.Shape();
	this.shape_21.graphics.f("#000000").s().p("AgBAvQgEgCgBgDQgCgEAAgLIAAgpIgJAAIAAgJIAJAAIAAgSIALgHIAAAZIANAAIAAAJIgNAAIAAAqQAAAFABACIACACIAEABIAGgBIACALIgKACQgGgBgDgCg");
	this.shape_21.setTransform(260.3,537.8);

	this.shape_22 = new cjs.Shape();
	this.shape_22.graphics.f("#000000").s().p("AgTAlIAAhHIALAAIAAAKQAFgHADgDQADgCAEAAQAGAAAHADIgEAMQgFgCgEgBQgFABgCACQgDADgBADQgCAHAAAIIAAAlg");
	this.shape_22.setTransform(256.5,539);

	this.shape_23 = new cjs.Shape();
	this.shape_23.graphics.f("#000000").s().p("AgYAcQgJgKAAgSQAAgTALgKQAJgIANAAQAPAAAKAKQAJAKAAARQAAANgEAIQgEAIgIAEQgIAFgKAAQgOAAgKgKgAgOgUQgGAHAAANQAAAOAGAHQAGAHAIAAQAJAAAHgHQAFgHAAgOQAAgNgFgHQgHgHgJAAQgIAAgGAHg");
	this.shape_23.setTransform(249.7,539);

	this.shape_24 = new cjs.Shape();
	this.shape_24.graphics.f("#000000").s().p("AAaAyIgzhOIAABOIgOAAIAAhjIAPAAIAzBOIAAhOIANAAIAABjg");
	this.shape_24.setTransform(240.8,537.7);

	this.shape_25 = new cjs.Shape();
	this.shape_25.graphics.f("#000000").s().p("AgYAcQgJgKAAgSQAAgTALgKQAKgIAMAAQAPAAAJAKQAKAKAAARQAAANgEAIQgEAIgIAEQgIAFgKAAQgOAAgKgKgAgOgUQgGAHAAANQAAAOAGAHQAGAHAIAAQAKAAAFgHQAHgHgBgOQABgNgHgHQgFgHgKAAQgIAAgGAHg");
	this.shape_25.setTransform(227.9,539);

	this.shape_26 = new cjs.Shape();
	this.shape_26.graphics.f("#000000").s().p("AgVAcQgKgKABgSQAAgLADgIQAFgJAIgFQAHgEAIAAQANAAAHAGQAIAGACALIgNACQgBgHgEgEQgFgEgGAAQgIAAgGAHQgGAGAAAOQAAAPAGAGQAGAHAHAAQAHAAAGgFQAEgEABgJIANABQgDANgHAHQgJAHgMAAQgOAAgIgKg");
	this.shape_26.setTransform(220.8,539);

	this.shape_27 = new cjs.Shape();
	this.shape_27.graphics.f("#000000").s().p("AgFAyIAAhHIALAAIAABHgAgFgjIAAgOIALAAIAAAOg");
	this.shape_27.setTransform(215.5,537.7);

	this.shape_28 = new cjs.Shape();
	this.shape_28.graphics.f("#000000").s().p("AgKAzIAAg+IgKAAIAAgJIAKAAIAAgJQAAgGACgEQABgFAFgDQADgDAJAAIALACIgCAKIgHAAQgGAAgCABQgCADAAAGIAAAIIAOAAIAAAJIgOAAIAAA+g");
	this.shape_28.setTransform(212.3,537.6);

	this.shape_29 = new cjs.Shape();
	this.shape_29.graphics.f("#000000").s().p("AgLAyIAAhHIALAAIAABHgAgMgeIAJgUIAQAAIgPAUg");
	this.shape_29.setTransform(208.7,537.6);

	this.shape_30 = new cjs.Shape();
	this.shape_30.graphics.f("#000000").s().p("AgVAcQgKgKABgSQAAgLADgIQAFgJAIgFQAHgEAJAAQALAAAIAGQAIAGACALIgNACQgBgHgEgEQgFgEgGAAQgJAAgFAHQgGAGAAAOQAAAPAGAGQAFAHAJAAQAHAAAFgFQAEgEACgJIAMABQgDANgHAHQgJAHgLAAQgPAAgIgKg");
	this.shape_30.setTransform(202.9,539);

	this.shape_31 = new cjs.Shape();
	this.shape_31.graphics.f("#000000").s().p("AgaAgQgHgGABgJQAAgFACgFQADgEAEgDIAIgDIALgCQAOgBAHgDIAAgDQAAgIgDgDQgFgEgJAAQgIAAgEADQgFADgCAIIgLgCQACgHADgFQAEgFAHgCQAHgDAJAAQAIAAAGACQAGACADAEQADADABAFIABALIAAAQQAAARABAFQAAAEACAEIgMAAQgCgEgBgFQgHAGgGACQgFADgIAAQgLAAgHgGgAgCAEIgLADQgDABgCADQgCADAAADQAAAFAFADQADADAIAAQAFAAAGgDQAFgDADgFQACgFAAgIIAAgEQgHADgMABg");
	this.shape_31.setTransform(195.2,539);

	this.shape_32 = new cjs.Shape();
	this.shape_32.graphics.f("#000000").s().p("AglAyIAAhjIAlAAIAPABQAHABAFADQAFAEADAGQADAGAAAIQAAAMgIAIQgIAJgVAAIgZAAIAAApgAgYgCIAZAAQANAAAFgEQAFgFAAgJQAAgGgDgEQgDgFgFgCIgNgBIgYAAg");
	this.shape_32.setTransform(186.9,537.7);

	this.shape_33 = new cjs.Shape();
	this.shape_33.graphics.f("#000000").s().p("AgYAcQgJgKAAgSQAAgTALgKQAKgIAMAAQAPAAAJAKQAKAKAAARQAAANgEAIQgEAIgIAEQgIAFgKAAQgOAAgKgKgAgOgUQgGAHAAANQAAAOAGAHQAGAHAIAAQAKAAAFgHQAHgHgBgOQABgNgHgHQgFgHgKAAQgIAAgGAHg");
	this.shape_33.setTransform(227.9,511.4);

	this.shape_34 = new cjs.Shape();
	this.shape_34.graphics.f("#000000").s().p("AgVAcQgKgKABgSQAAgLADgIQAFgJAIgFQAHgEAIAAQANAAAHAGQAIAGACALIgNACQgBgHgEgEQgFgEgGAAQgIAAgGAHQgGAGAAAOQAAAPAGAGQAGAHAHAAQAHAAAGgFQAEgEABgJIANABQgDANgHAHQgJAHgMAAQgOAAgIgKg");
	this.shape_34.setTransform(220.8,511.4);

	this.shape_35 = new cjs.Shape();
	this.shape_35.graphics.f("#000000").s().p("AgFAyIAAhIIALAAIAABIgAgFgjIAAgOIALAAIAAAOg");
	this.shape_35.setTransform(215.5,510.1);

	this.shape_36 = new cjs.Shape();
	this.shape_36.graphics.f("#000000").s().p("AgKAzIAAg+IgKAAIAAgKIAKAAIAAgIQAAgGACgEQABgFAFgDQADgDAJAAIALABIgCALIgHgBQgGAAgCACQgCADAAAGIAAAHIAOAAIAAAKIgOAAIAAA+g");
	this.shape_36.setTransform(212.3,510);

	this.shape_37 = new cjs.Shape();
	this.shape_37.graphics.f("#000000").s().p("AgLAzIAAhIIALAAIAABIgAgMgeIAJgTIAQAAIgPATg");
	this.shape_37.setTransform(208.7,510);

	this.shape_38 = new cjs.Shape();
	this.shape_38.graphics.f("#000000").s().p("AgVAcQgKgKABgSQAAgLADgIQAFgJAIgFQAHgEAJAAQALAAAIAGQAIAGACALIgNACQgBgHgEgEQgFgEgGAAQgJAAgFAHQgGAGAAAOQAAAPAGAGQAFAHAJAAQAHAAAFgFQAEgEACgJIAMABQgDANgHAHQgJAHgLAAQgPAAgIgKg");
	this.shape_38.setTransform(202.9,511.4);

	this.shape_39 = new cjs.Shape();
	this.shape_39.graphics.f("#000000").s().p("AgaAgQgHgGABgJQAAgFACgFQADgEAEgDIAIgDIALgCQAOgBAHgDIAAgDQAAgIgDgDQgFgEgJAAQgIAAgEADQgFADgCAIIgLgCQACgHADgFQAEgFAHgCQAHgDAJAAQAIAAAGACQAGACADAEQADADABAFIABALIAAAQQAAARABAFQAAAEACAEIgMAAQgCgEgBgFQgHAGgGACQgFADgIAAQgLAAgHgGgAgCAEIgLADQgDABgCADQgCADAAADQAAAFAFADQADADAIAAQAFAAAGgDQAFgDADgFQACgFAAgIIAAgEQgHADgMABg");
	this.shape_39.setTransform(195.2,511.4);

	this.shape_40 = new cjs.Shape();
	this.shape_40.graphics.f("#000000").s().p("AglAyIAAhjIAlAAIAPAAQAHACAFAEQAFADADAGQADAGAAAIQAAAMgIAJQgIAIgVABIgZAAIAAAogAgYgCIAZAAQANAAAFgEQAFgFAAgJQAAgGgDgFQgDgEgFgBIgNgCIgYAAg");
	this.shape_40.setTransform(186.9,510.1);

	this.shape_41 = new cjs.Shape();
	this.shape_41.graphics.f("#000000").s().p("AgXAcQgKgKAAgSQAAgTAMgKQAJgIAMAAQAPAAAJAKQAKAKAAARQAAANgEAIQgEAIgIAEQgIAFgKAAQgOAAgJgKgAgOgUQgGAHAAANQAAAOAGAHQAGAHAIAAQAKAAAFgHQAHgHAAgOQAAgNgHgHQgFgHgKAAQgIAAgGAHg");
	this.shape_41.setTransform(212.3,483.8);

	this.shape_42 = new cjs.Shape();
	this.shape_42.graphics.f("#000000").s().p("AAlAlIAAgsQAAgIgBgEQgBgDgDgBQgEgCgEAAQgHAAgGAEQgFAGAAALIAAApIgLAAIAAguQAAgJgDgEQgDgDgHAAQgFAAgEACQgFADgCAFQgCAGAAAJIAAAlIgMAAIAAhHIALAAIAAAKQADgGAGgDQAGgDAHAAQAIAAAFADQAEADADAHQAIgNAOAAQALAAAGAGQAFAGAAAMIAAAxg");
	this.shape_42.setTransform(202.6,483.8);

	this.shape_43 = new cjs.Shape();
	this.shape_43.graphics.f("#000000").s().p("AgBAwQgEgDgBgDQgCgDAAgMIAAgpIgJAAIAAgJIAJAAIAAgSIALgIIAAAaIANAAIAAAJIgNAAIAAAqQAAAFABACIACACIAEABIAGAAIACAKIgKABQgGAAgDgBg");
	this.shape_43.setTransform(194.9,482.6);

	this.shape_44 = new cjs.Shape();
	this.shape_44.graphics.f("#000000").s().p("AgUAgQgHgGgCgLIAMgCQABAHAEAEQAFAEAIAAQAJAAAEgEQADgDAAgFQABgEgEgCIgMgFQgNgDgGgCQgEgCgDgEQgDgFAAgFQAAgFACgEQACgEAEgDQADgCAFgBQAFgCAFAAQAIAAAHACQAGADADAEQADAEABAHIgMACQgBgGgDgDQgFgDgGAAQgIAAgEADQgDADAAADQAAABAAAAQAAABAAABQABAAAAABQAAAAABABIAEADIAKADIASAGQAFABADAEQADAFAAAGQAAAGgEAGQgDAFgHADQgGADgJAAQgNAAgIgGg");
	this.shape_44.setTransform(189.4,483.8);

	this.shape_45 = new cjs.Shape();
	this.shape_45.graphics.f("#000000").s().p("AgGAyIAAhjIANAAIAABjg");
	this.shape_45.setTransform(184,482.5);

	this.shape_46 = new cjs.Shape();
	this.shape_46.graphics.f("#000000").s().p("AgXAcQgJgKAAgRQAAgSAJgKQAJgKAPAAQAOAAAJAKQAKAKgBARIAAADIg1AAQABAMAGAGQAGAHAJAAQAGAAAFgEQAFgDADgIIAMABQgDAMgIAGQgIAGgNAAQgOAAgKgKgAgNgVQgFAFgBAKIAoAAQgBgJgEgFQgGgHgJAAQgIAAgGAGg");
	this.shape_46.setTransform(269.1,456.2);

	this.shape_47 = new cjs.Shape();
	this.shape_47.graphics.f("#000000").s().p("AgBAvQgEgCgBgDQgCgEAAgLIAAgpIgJAAIAAgJIAJAAIAAgSIALgHIAAAZIANAAIAAAJIgNAAIAAAqQAAAFABACIACACIAEABIAGgBIACALIgKACQgGgBgDgCg");
	this.shape_47.setTransform(263.4,455);

	this.shape_48 = new cjs.Shape();
	this.shape_48.graphics.f("#000000").s().p("AgTAlIAAhHIALAAIAAAKQAFgHADgDQADgCAEAAQAGAAAHADIgEAMQgFgCgEgBQgFABgCACQgDADgBADQgCAHAAAIIAAAlg");
	this.shape_48.setTransform(259.6,456.2);

	this.shape_49 = new cjs.Shape();
	this.shape_49.graphics.f("#000000").s().p("AgYAcQgJgKAAgSQAAgTALgKQAJgIANAAQAPAAAKAKQAJAKAAARQAAANgEAIQgEAIgIAEQgIAFgKAAQgOAAgKgKgAgOgUQgGAHAAANQAAAOAGAHQAGAHAIAAQAJAAAHgHQAFgHAAgOQAAgNgFgHQgHgHgJAAQgIAAgGAHg");
	this.shape_49.setTransform(252.8,456.2);

	this.shape_50 = new cjs.Shape();
	this.shape_50.graphics.f("#000000").s().p("AAaAyIg0hOIAABOIgNAAIAAhjIAPAAIAzBOIAAhOIANAAIAABjg");
	this.shape_50.setTransform(243.8,454.9);

	this.shape_51 = new cjs.Shape();
	this.shape_51.graphics.f("#000000").s().p("AgaAgQgGgGAAgJQgBgFADgFQADgEAEgDIAIgDIALgCQAOgBAHgDIAAgDQAAgIgEgDQgEgEgJAAQgIAAgEADQgEADgDAIIgMgCQACgHAEgFQAEgFAHgCQAHgDAJAAQAIAAAGACQAHACACAEQADADABAFIABALIAAAQQAAARABAFQAAAEACAEIgMAAQgCgEgBgFQgGAGgHACQgGADgGAAQgMAAgHgGgAgCAEIgLADQgDABgBADQgDADAAADQAAAFAFADQADADAHAAQAGAAAGgDQAFgDADgFQACgFAAgIIAAgEQgGADgNABg");
	this.shape_51.setTransform(231,456.2);

	this.shape_52 = new cjs.Shape();
	this.shape_52.graphics.f("#000000").s().p("AgTAlIAAhHIALAAIAAAKQAFgHADgDQADgCAEAAQAGAAAHADIgEAMQgFgCgEgBQgFABgCACQgDADgBADQgCAHAAAIIAAAlg");
	this.shape_52.setTransform(225.3,456.2);

	this.shape_53 = new cjs.Shape();
	this.shape_53.graphics.f("#000000").s().p("AgXAcQgKgKABgRQgBgSAKgKQAKgKANAAQAPAAAJAKQAKAKgBARIAAADIg1AAQABAMAGAGQAGAHAIAAQAHAAAFgEQAFgDADgIIAMABQgDAMgIAGQgIAGgNAAQgOAAgKgKgAgMgVQgHAFAAAKIAoAAQgCgJgDgFQgGgHgKAAQgHAAgFAGg");
	this.shape_53.setTransform(218.5,456.2);

	this.shape_54 = new cjs.Shape();
	this.shape_54.graphics.f("#000000").s().p("AgBAvQgEgCgBgDQgCgEAAgLIAAgpIgJAAIAAgJIAJAAIAAgSIALgHIAAAZIANAAIAAAJIgNAAIAAAqQAAAFABACIACACIAEABIAGgBIACALIgKACQgGgBgDgCg");
	this.shape_54.setTransform(212.8,455);

	this.shape_55 = new cjs.Shape();
	this.shape_55.graphics.f("#000000").s().p("AARAlIAAgrQABgIgCgDQgCgEgDgDQgEgBgEAAQgIAAgFAEQgGAGAAAOIAAAmIgNAAIAAhHIAMAAIAAAKQAIgMAOAAQAGAAAGACQAFADADAEQADADABAGIABALIAAAsg");
	this.shape_55.setTransform(206.8,456.2);

	this.shape_56 = new cjs.Shape();
	this.shape_56.graphics.f("#000000").s().p("AgXAcQgKgKAAgSQAAgTALgKQAKgIAMAAQAPAAAJAKQAKAKAAARQAAANgEAIQgEAIgIAEQgJAFgJAAQgOAAgJgKgAgOgUQgGAHAAANQAAAOAGAHQAGAHAIAAQAKAAAFgHQAHgHgBgOQABgNgHgHQgFgHgKAAQgIAAgGAHg");
	this.shape_56.setTransform(199,456.2);

	this.shape_57 = new cjs.Shape();
	this.shape_57.graphics.f("#000000").s().p("AgTAlIAAhHIALAAIAAAKQAFgHADgDQADgCAEAAQAGAAAHADIgEAMQgFgCgEgBQgFABgCACQgDADgBADQgCAHAAAIIAAAlg");
	this.shape_57.setTransform(193.4,456.2);

	this.shape_58 = new cjs.Shape();
	this.shape_58.graphics.f("#000000").s().p("AghAyIAAhjIBDAAIAAALIg2AAIAAAgIAvAAIAAALIgvAAIAAAtg");
	this.shape_58.setTransform(186.5,454.9);

	this.shape_59 = new cjs.Shape();
	this.shape_59.graphics.f("#000000").s().p("AgXAcQgKgKAAgRQAAgSAKgKQAJgKAOAAQAPAAAKAKQAIAKABARIAAADIg1AAQAAAMAGAGQAGAHAIAAQAHAAAFgEQAEgDADgIIANABQgDAMgIAGQgIAGgNAAQgPAAgJgKgAgNgVQgGAFAAAKIAnAAQgBgJgDgFQgGgHgKAAQgHAAgGAGg");
	this.shape_59.setTransform(283.9,428.6);

	this.shape_60 = new cjs.Shape();
	this.shape_60.graphics.f("#000000").s().p("AgBAwQgEgDgBgDQgCgEAAgLIAAgoIgJAAIAAgKIAJAAIAAgSIALgHIAAAZIANAAIAAAKIgNAAIAAApQAAAFABABIACADIAEABIAGAAIACALIgKABQgGAAgDgCg");
	this.shape_60.setTransform(278.2,427.4);

	this.shape_61 = new cjs.Shape();
	this.shape_61.graphics.f("#000000").s().p("AgUAgQgHgGgCgLIAMgCQABAHAFAEQAEAEAIAAQAJAAAEgEQADgDAAgFQABgEgEgCIgMgFQgNgDgGgCQgEgCgDgEQgDgFAAgFQAAgFACgEQACgEAEgDQADgCAFgBQAFgCAFAAQAIAAAHACQAGADADAEQADAEABAHIgMACQgBgGgDgDQgFgDgGAAQgIAAgDADQgEADAAADQAAABAAAAQAAABAAABQABAAAAABQAAAAABABIAEADIAKADIASAGQAFABADAEQADAFAAAGQAAAGgEAGQgDAFgHADQgGADgJAAQgNAAgIgGg");
	this.shape_61.setTransform(272.6,428.6);

	this.shape_62 = new cjs.Shape();
	this.shape_62.graphics.f("#000000").s().p("AgXAcQgKgKAAgRQAAgSAKgKQAKgKANAAQAPAAAKAKQAJAKAAARIAAADIg1AAQAAAMAGAGQAGAHAIAAQAHAAAFgEQAEgDADgIIANABQgDAMgIAGQgIAGgNAAQgOAAgKgKgAgMgVQgHAFAAAKIAnAAQAAgJgEgFQgGgHgKAAQgHAAgFAGg");
	this.shape_62.setTransform(265.2,428.6);

	this.shape_63 = new cjs.Shape();
	this.shape_63.graphics.f("#000000").s().p("AgTAlIAAhIIALAAIAAALQAFgHADgDQADgCAEAAQAGAAAHADIgEAMQgFgDgEAAQgFAAgCADQgDACgBAEQgCAHAAAIIAAAlg");
	this.shape_63.setTransform(259.6,428.6);

	this.shape_64 = new cjs.Shape();
	this.shape_64.graphics.f("#000000").s().p("AgYAcQgJgKAAgSQAAgTALgKQAJgIANAAQAPAAAKAKQAJAKAAARQAAANgEAIQgEAIgIAEQgIAFgKAAQgOAAgKgKgAgOgUQgGAHAAANQAAAOAGAHQAGAHAIAAQAJAAAHgHQAFgHAAgOQAAgNgFgHQgHgHgJAAQgIAAgGAHg");
	this.shape_64.setTransform(252.8,428.6);

	this.shape_65 = new cjs.Shape();
	this.shape_65.graphics.f("#000000").s().p("AAaAyIg0hNIAABNIgNAAIAAhjIAPAAIAzBOIAAhOIANAAIAABjg");
	this.shape_65.setTransform(243.8,427.3);

	this.shape_66 = new cjs.Shape();
	this.shape_66.graphics.f("#000000").s().p("AgaAgQgGgGAAgJQgBgFADgFQADgEAEgDIAIgDIALgCQAOgBAHgDIAAgDQAAgIgEgDQgEgEgJAAQgIAAgEADQgEADgDAIIgMgCQACgHAEgFQAEgFAHgCQAHgDAJAAQAIAAAGACQAHACACAEQADADABAFIABALIAAAQQAAARABAFQAAAEACAEIgMAAQgCgEgBgFQgGAGgHACQgGADgGAAQgMAAgHgGgAgCAEIgLADQgDABgBADQgDADAAADQAAAFAFADQADADAHAAQAGAAAGgDQAFgDADgFQACgFAAgIIAAgEQgGADgNABg");
	this.shape_66.setTransform(231,428.6);

	this.shape_67 = new cjs.Shape();
	this.shape_67.graphics.f("#000000").s().p("AgTAlIAAhIIALAAIAAALQAFgHADgDQADgCAEAAQAGAAAHADIgEAMQgFgDgEAAQgFAAgCADQgDACgBAEQgCAHAAAIIAAAlg");
	this.shape_67.setTransform(225.3,428.6);

	this.shape_68 = new cjs.Shape();
	this.shape_68.graphics.f("#000000").s().p("AgXAcQgKgKABgRQgBgSAKgKQAKgKANAAQAPAAAJAKQAKAKgBARIAAADIg1AAQABAMAGAGQAGAHAIAAQAHAAAFgEQAFgDADgIIAMABQgDAMgIAGQgIAGgNAAQgOAAgKgKgAgMgVQgHAFAAAKIAoAAQgCgJgDgFQgGgHgKAAQgHAAgFAGg");
	this.shape_68.setTransform(218.5,428.6);

	this.shape_69 = new cjs.Shape();
	this.shape_69.graphics.f("#000000").s().p("AgBAwQgEgDgBgDQgCgEAAgLIAAgoIgJAAIAAgKIAJAAIAAgSIALgHIAAAZIANAAIAAAKIgNAAIAAApQAAAFABABIACADIAEABIAGAAIACALIgKABQgGAAgDgCg");
	this.shape_69.setTransform(212.8,427.4);

	this.shape_70 = new cjs.Shape();
	this.shape_70.graphics.f("#000000").s().p("AARAlIAAgrQABgIgCgEQgCgDgDgDQgEgCgEAAQgIAAgFAGQgGAEAAAPIAAAmIgNAAIAAhIIAMAAIAAAKQAIgLAOAAQAGAAAGACQAFADADADQADAEABAGIABALIAAAsg");
	this.shape_70.setTransform(206.8,428.6);

	this.shape_71 = new cjs.Shape();
	this.shape_71.graphics.f("#000000").s().p("AgXAcQgKgKAAgSQAAgTALgKQAKgIAMAAQAPAAAJAKQAKAKAAARQAAANgEAIQgEAIgIAEQgJAFgJAAQgOAAgJgKgAgOgUQgGAHAAANQAAAOAGAHQAGAHAIAAQAKAAAFgHQAHgHgBgOQABgNgHgHQgFgHgKAAQgIAAgGAHg");
	this.shape_71.setTransform(199,428.6);

	this.shape_72 = new cjs.Shape();
	this.shape_72.graphics.f("#000000").s().p("AgTAlIAAhIIALAAIAAALQAFgHADgDQADgCAEAAQAGAAAHADIgEAMQgFgDgEAAQgFAAgCADQgDACgBAEQgCAHAAAIIAAAlg");
	this.shape_72.setTransform(193.4,428.6);

	this.shape_73 = new cjs.Shape();
	this.shape_73.graphics.f("#000000").s().p("AghAyIAAhjIBDAAIAAALIg2AAIAAAgIAvAAIAAAKIgvAAIAAAug");
	this.shape_73.setTransform(186.5,427.3);

	this.shape_74 = new cjs.Shape();
	this.shape_74.graphics.f("#000000").s().p("AgYAcQgJgKAAgSQAAgTALgKQAJgIANAAQAPAAAKAKQAJAKAAARQAAANgEAIQgEAIgIAEQgIAFgKAAQgOAAgKgKgAgOgUQgGAHAAANQAAAOAGAHQAGAHAIAAQAJAAAHgHQAFgHAAgOQAAgNgFgHQgHgHgJAAQgIAAgGAHg");
	this.shape_74.setTransform(210,401);

	this.shape_75 = new cjs.Shape();
	this.shape_75.graphics.f("#000000").s().p("AgLAyIAAhHIALAAIAABHgAgLgeIAJgTIAOAAIgNATg");
	this.shape_75.setTransform(204.8,399.6);

	this.shape_76 = new cjs.Shape();
	this.shape_76.graphics.f("#000000").s().p("AgNA/IACgKIAGABQAEAAABgDQABgCABgKIAAhLIAMAAIAABLQAAAOgDAFQgFAHgKAAQgEAAgFgCgAACgyIAAgOIAMAAIAAAOg");
	this.shape_76.setTransform(199.9,401.1);

	this.shape_77 = new cjs.Shape();
	this.shape_77.graphics.f("#000000").s().p("AgaAgQgHgGABgJQAAgFACgFQADgEAEgDIAIgDIALgCQAOgBAHgDIAAgDQAAgIgDgDQgFgEgJAAQgIAAgEADQgFADgCAIIgLgCQACgHADgFQAEgFAHgCQAHgDAJAAQAIAAAGACQAGACADAEQADADABAFIABALIAAAQQAAARABAFQAAAEACAEIgMAAQgCgEgBgFQgHAGgGACQgFADgIAAQgLAAgHgGgAgCAEIgLADQgDABgCADQgCADAAADQAAAFAFADQADADAIAAQAFAAAGgDQAFgDADgFQACgFAAgIIAAgEQgHADgMABg");
	this.shape_77.setTransform(195.2,401);

	this.shape_78 = new cjs.Shape();
	this.shape_78.graphics.f("#000000").s().p("AglAyIAAhjIAlAAQALAAAHADQAHADAEAGQAEAHAAAGQAAAHgEAGQgDAFgHAEQAJACAFAGQAFAGAAAJQAAAHgDAGQgDAGgFAEQgEACgHACQgGACgKAAgAgYAmIAYAAIAJgBQAFAAADgCQADgCACgEQACgEAAgEQAAgGgDgEQgDgEgFgBQgFgCgJgBIgXAAgAgYgHIAWAAQAIAAAEgCQAFgBACgEQADgDAAgFQAAgFgDgEQgCgDgEgCQgFgCgKABIgUAAg");
	this.shape_78.setTransform(186.8,399.7);

	this.shape_79 = new cjs.Shape();
	this.shape_79.graphics.f("#000000").s().p("AgXAcQgKgKAAgSQAAgTALgKQAKgIAMAAQAPAAAJAKQAKAKAAARQAAANgEAIQgEAIgIAEQgJAFgJAAQgOAAgJgKgAgOgUQgGAHAAANQAAAOAGAHQAGAHAIAAQAKAAAFgHQAHgHAAgOQAAgNgHgHQgFgHgKAAQgIAAgGAHg");
	this.shape_79.setTransform(123.9,539);

	this.shape_80 = new cjs.Shape();
	this.shape_80.graphics.f("#000000").s().p("AgTAlIAAhHIALAAIAAAKQAFgHADgDQADgCAEAAQAGAAAHADIgEAMQgFgCgEgBQgFABgCACQgDADgBADQgCAHAAAIIAAAlg");
	this.shape_80.setTransform(118.2,539);

	this.shape_81 = new cjs.Shape();
	this.shape_81.graphics.f("#000000").s().p("AgBAvQgEgCgBgDQgCgEAAgLIAAgpIgJAAIAAgJIAJAAIAAgSIALgHIAAAZIANAAIAAAJIgNAAIAAAqQAAAFABACIACACIAEABIAGgBIACALIgKACQgGgBgDgCg");
	this.shape_81.setTransform(113.5,537.8);

	this.shape_82 = new cjs.Shape();
	this.shape_82.graphics.f("#000000").s().p("AASAlIAAgrQgBgIgBgDQgCgEgDgDQgEgBgFAAQgGAAgGAEQgGAFAAAPIAAAmIgMAAIAAhHIALAAIAAAJQAIgLAOAAQAGAAAGACQAGADACAEQADADABAGIAAAMIAAArg");
	this.shape_82.setTransform(107.5,539);

	this.shape_83 = new cjs.Shape();
	this.shape_83.graphics.f("#000000").s().p("AgXAcQgKgKABgRQgBgSAKgKQAKgKANAAQAPAAAKAKQAJAKgBARIAAADIg0AAQAAAMAGAGQAGAHAIAAQAHAAAFgEQAFgDADgIIAMABQgDAMgIAGQgIAGgNAAQgOAAgKgKgAgMgVQgHAFAAAKIAoAAQgCgJgDgFQgGgHgKAAQgHAAgFAGg");
	this.shape_83.setTransform(99.7,539);

	this.shape_84 = new cjs.Shape();
	this.shape_84.graphics.f("#000000").s().p("AgWAtQgLgGgFgNQgFgMAAgOQAAgPAGgMQAGgMALgGQALgGAMAAQAPAAAKAIQALAIAEAOIgNADQgEgLgHgFQgGgFgKAAQgLAAgIAFQgHAGgDAJQgEAJAAAKQAAAMAEAKQAEAJAIAFQAIAFAIAAQALAAAIgHQAHgGADgNIANADQgEARgLAIQgLAJgPAAQgPAAgKgHg");
	this.shape_84.setTransform(90.9,537.6);

	this.shape_85 = new cjs.Shape();
	this.shape_85.graphics.f("#000000").s().p("AgYAcQgJgKAAgSQAAgTAMgKQAIgIANAAQAPAAAKAKQAJAKAAARQAAANgEAIQgEAIgIAEQgJAFgJAAQgOAAgKgKgAgOgUQgGAHAAANQAAAOAGAHQAGAHAIAAQAJAAAHgHQAFgHAAgOQAAgNgFgHQgHgHgJAAQgIAAgGAHg");
	this.shape_85.setTransform(77.9,539);

	this.shape_86 = new cjs.Shape();
	this.shape_86.graphics.f("#000000").s().p("AgWAcQgJgKAAgSQAAgLAFgIQADgJAJgFQAHgEAJAAQAMAAAHAGQAIAGABALIgLACQgCgHgEgEQgFgEgGAAQgIAAgGAHQgGAGAAAOQAAAPAFAGQAHAHAIAAQAGAAAFgFQAFgEACgJIALABQgBANgIAHQgJAHgLAAQgOAAgKgKg");
	this.shape_86.setTransform(70.8,539);

	this.shape_87 = new cjs.Shape();
	this.shape_87.graphics.f("#000000").s().p("AgFAyIAAhHIALAAIAABHgAgFgjIAAgOIALAAIAAAOg");
	this.shape_87.setTransform(65.5,537.7);

	this.shape_88 = new cjs.Shape();
	this.shape_88.graphics.f("#000000").s().p("AgKAzIAAg+IgKAAIAAgJIAKAAIAAgJQAAgGACgEQABgFAFgDQADgDAJAAIALACIgCAKIgHAAQgGAAgCABQgCADAAAGIAAAIIAOAAIAAAJIgOAAIAAA+g");
	this.shape_88.setTransform(62.3,537.6);

	this.shape_89 = new cjs.Shape();
	this.shape_89.graphics.f("#000000").s().p("AgLAyIAAhHIAMAAIAABHgAgMgeIAJgUIAPAAIgOAUg");
	this.shape_89.setTransform(58.7,537.6);

	this.shape_90 = new cjs.Shape();
	this.shape_90.graphics.f("#000000").s().p("AgWAcQgIgKgBgSQAAgLAFgIQADgJAIgFQAIgEAJAAQAMAAAHAGQAHAGACALIgLACQgCgHgFgEQgEgEgGAAQgIAAgGAHQgGAGAAAOQAAAPAFAGQAHAHAIAAQAGAAAFgFQAGgEABgJIALABQgBANgJAHQgHAHgMAAQgOAAgKgKg");
	this.shape_90.setTransform(52.9,539);

	this.shape_91 = new cjs.Shape();
	this.shape_91.graphics.f("#000000").s().p("AgaAgQgGgGgBgJQABgFACgFQADgEADgDIAJgDIALgCQAOgBAHgDIAAgDQAAgIgEgDQgEgEgJAAQgIAAgEADQgFADgBAIIgNgCQACgHAEgFQAEgFAHgCQAHgDAJAAQAJAAAGACQAGACACAEQADADABAFIAAALIAAAQQAAARABAFQABAEACAEIgNAAQgCgEAAgFQgHAGgGACQgGADgGAAQgMAAgHgGgAgCAEIgLADQgDABgBADQgCADgBADQABAFAEADQADADAHAAQAHAAAFgDQAFgDADgFQACgFAAgIIAAgEQgGADgNABg");
	this.shape_91.setTransform(45.2,539);

	this.shape_92 = new cjs.Shape();
	this.shape_92.graphics.f("#000000").s().p("AglAyIAAhjIAlAAIAPABQAHABAFADQAFAEADAGQADAGAAAIQAAAMgIAIQgIAJgVAAIgZAAIAAApgAgYgCIAZAAQANAAAFgEQAFgFAAgJQAAgGgDgEQgDgFgFgCIgNgBIgYAAg");
	this.shape_92.setTransform(36.9,537.7);

	this.shape_93 = new cjs.Shape();
	this.shape_93.graphics.f("#000000").s().p("AgTAgQgIgGgCgLIAMgCQABAHAFAEQAEAEAIAAQAIAAAFgEQADgDAAgFQAAgEgDgCIgNgFQgMgDgGgCQgEgCgEgEQgCgFAAgFQAAgFACgEQACgEAEgDQADgCAFgBQAFgCAFAAQAIAAAHACQAGADADAEQADAEABAHIgLACQgBgGgFgDQgDgDgHAAQgIAAgDADQgEADAAADQAAABAAAAQAAABAAABQABAAAAABQAAAAABABIAEADIAKADIASAGQAFABADAEQADAFAAAGQAAAGgEAGQgDAFgHADQgHADgIAAQgOAAgGgGg");
	this.shape_93.setTransform(103.2,511.4);

	this.shape_94 = new cjs.Shape();
	this.shape_94.graphics.f("#000000").s().p("AgFAyIAAhIIALAAIAABIgAgFgjIAAgOIALAAIAAAOg");
	this.shape_94.setTransform(98.2,510.1);

	this.shape_95 = new cjs.Shape();
	this.shape_95.graphics.f("#000000").s().p("AgFAyIAAhjIALAAIAABjg");
	this.shape_95.setTransform(95.1,510.1);

	this.shape_96 = new cjs.Shape();
	this.shape_96.graphics.f("#000000").s().p("AgYAcQgJgKAAgSQAAgTAMgKQAIgIANAAQAPAAAKAKQAJAKAAARQAAANgEAIQgEAIgIAEQgJAFgJAAQgOAAgKgKgAgOgUQgGAHAAANQAAAOAGAHQAGAHAIAAQAJAAAHgHQAFgHAAgOQAAgNgFgHQgHgHgJAAQgIAAgGAHg");
	this.shape_96.setTransform(89.6,511.4);

	this.shape_97 = new cjs.Shape();
	this.shape_97.graphics.f("#000000").s().p("AgfAzIAAhkIAMAAIAAAKQAEgFAFgEQAFgCAGAAQAJAAAHAFQAHAEAEAJQAEAJAAAKQAAAMgEAHQgEAJgIAFQgIAFgIgBQgFAAgFgCQgFgDgDgEIAAAkgAgNghQgGAHAAAOQAAANAFAHQAGAHAIgBQAHAAAGgGQAGgIAAgNQAAgOgGgGQgFgIgIAAQgHABgGAHg");
	this.shape_97.setTransform(82,512.8);

	this.shape_98 = new cjs.Shape();
	this.shape_98.graphics.f("#000000").s().p("AgYAqQgJgKAAgTQAAgTALgJQAKgIAMAAQAPAAAJAJQAKAKAAAQQAAAOgEAJQgEAIgIAEQgIAEgKAAQgOAAgKgJgAgOgGQgGAGAAANQAAAOAGAHQAGAHAIAAQAKAAAFgHQAHgHgBgOQABgNgHgGQgFgHgKAAQgIAAgGAHgAgGgfIAJgTIAQAAIgQATg");
	this.shape_98.setTransform(74,510.1);

	this.shape_99 = new cjs.Shape();
	this.shape_99.graphics.f("#000000").s().p("AgFAyIAAhjIALAAIAABjg");
	this.shape_99.setTransform(68.6,510.1);

	this.shape_100 = new cjs.Shape();
	this.shape_100.graphics.f("#000000").s().p("AgaAgQgGgGAAgJQgBgFADgFQADgEAEgDIAIgDIALgCQAOgBAHgDIAAgDQAAgIgEgDQgEgEgJAAQgIAAgEADQgEADgDAIIgMgCQACgHAEgFQAEgFAHgCQAHgDAJAAQAIAAAGACQAHACACAEQADADABAFIABALIAAAQQAAARABAFQAAAEACAEIgMAAQgCgEgBgFQgGAGgHACQgGADgGAAQgMAAgHgGgAgCAEIgLADQgDABgBADQgDADAAADQAAAFAFADQADADAHAAQAGAAAGgDQAFgDADgFQACgFAAgIIAAgEQgGADgNABg");
	this.shape_100.setTransform(63.1,511.4);

	this.shape_101 = new cjs.Shape();
	this.shape_101.graphics.f("#000000").s().p("AgVAuQgIgGAAgMIANACQAAAGADACQAFAEAIAAQAIAAAEgEQAFgDACgGIABgQQgJAJgLAAQgPAAgIgLQgIgKAAgOQAAgLAEgJQADgIAIgFQAHgFAJAAQAMAAAIAKIAAgIIAMAAIAAA9QAAARgDAHQgEAIgHAEQgIAEgKAAQgNAAgIgGgAgNgiQgFAHAAANQAAAOAFAGQAGAGAIAAQAIAAAGgGQAFgGAAgOQABgNgHgHQgGgHgHAAQgIAAgGAHg");
	this.shape_101.setTransform(55.1,512.8);

	this.shape_102 = new cjs.Shape();
	this.shape_102.graphics.f("#000000").s().p("AgXAcQgKgKABgRQgBgSAKgKQAKgKANAAQAPAAAKAKQAJAKgBARIAAADIg0AAQAAAMAGAGQAGAHAIAAQAHAAAFgEQAFgDADgIIAMABQgDAMgIAGQgIAGgNAAQgOAAgKgKgAgMgVQgHAFAAAKIAoAAQgCgJgDgFQgGgHgKAAQgHAAgFAGg");
	this.shape_102.setTransform(47.5,511.4);

	this.shape_103 = new cjs.Shape();
	this.shape_103.graphics.f("#000000").s().p("AAjAyIAAhTIgdBTIgLAAIgdhUIAABUIgNAAIAAhjIAUAAIAYBFIAEAQIAFgQIAYhFIASAAIAABjg");
	this.shape_103.setTransform(37.8,510.1);

	this.shape_104 = new cjs.Shape();
	this.shape_104.graphics.f("#000000").s().p("AgXAcQgKgKAAgSQAAgTAMgKQAJgIAMAAQAPAAAJAKQAKAKAAARQAAANgEAIQgEAIgIAEQgIAFgKAAQgOAAgJgKgAgOgUQgGAHAAANQAAAOAGAHQAGAHAIAAQAKAAAFgHQAHgHAAgOQAAgNgHgHQgFgHgKAAQgIAAgGAHg");
	this.shape_104.setTransform(61.6,483.8);

	this.shape_105 = new cjs.Shape();
	this.shape_105.graphics.f("#000000").s().p("AgKAzIAAg+IgKAAIAAgJIAKAAIAAgIQAAgIACgDQABgFAFgDQADgDAJAAIALABIgCALIgHAAQgGAAgCACQgCACAAAHIAAAHIAOAAIAAAJIgOAAIAAA+g");
	this.shape_105.setTransform(56.1,482.4);

	this.shape_106 = new cjs.Shape();
	this.shape_106.graphics.f("#000000").s().p("AgFAyIAAhjIALAAIAABjg");
	this.shape_106.setTransform(52.2,482.5);

	this.shape_107 = new cjs.Shape();
	this.shape_107.graphics.f("#000000").s().p("AgYAcQgJgKAAgSQAAgTALgKQAJgIANAAQAPAAAKAKQAJAKAAARQAAANgEAIQgEAIgIAEQgIAFgKAAQgOAAgKgKgAgOgUQgGAHAAANQAAAOAGAHQAGAHAIAAQAJAAAHgHQAFgHAAgOQAAgNgFgHQgHgHgJAAQgIAAgGAHg");
	this.shape_107.setTransform(46.8,483.8);

	this.shape_108 = new cjs.Shape();
	this.shape_108.graphics.f("#000000").s().p("AgVAuQgMgHgGgMQgGgMAAgOQAAgOAGgNQAGgMALgHQAMgGAOAAQALAAAJAEQAIADAFAHQAFAGADAKIgMADQgCgHgEgFQgDgEgGgDQgGgCgIAAQgIAAgHACQgGADgEAFQgFAEgCAGQgEAJAAAKQAAANAFAJQAFAJAIAFQAJAEAJAAQAJAAAIgDQAIgEAEgDIAAgTIgdAAIAAgLIAqAAIAAAkQgJAIgLAEQgKAEgLAAQgOAAgMgGg");
	this.shape_108.setTransform(37.4,482.4);

	this.shape_109 = new cjs.Shape();
	this.shape_109.graphics.f("#000000").s().p("AgXAcQgKgKAAgRQAAgSAKgKQAJgKAPAAQAOAAAKAKQAIAKABARIAAADIg1AAQAAAMAGAGQAGAHAIAAQAHAAAFgEQAEgDADgIIANABQgDAMgIAGQgIAGgNAAQgPAAgJgKgAgNgVQgGAFAAAKIAnAAQgBgJgDgFQgGgHgJAAQgIAAgGAGg");
	this.shape_109.setTransform(141.7,456.2);

	this.shape_110 = new cjs.Shape();
	this.shape_110.graphics.f("#000000").s().p("AgBAvQgEgCgBgDQgCgEAAgLIAAgpIgJAAIAAgJIAJAAIAAgSIALgHIAAAZIANAAIAAAJIgNAAIAAAqQAAAFABACIACACIAEABIAGgBIACALIgKACQgGgBgDgCg");
	this.shape_110.setTransform(136,455);

	this.shape_111 = new cjs.Shape();
	this.shape_111.graphics.f("#000000").s().p("AgUAgQgHgGgCgLIAMgCQABAHAEAEQAFAEAIAAQAJAAAEgEQADgDAAgFQABgEgEgCIgMgFQgNgDgGgCQgEgCgDgEQgDgFAAgFQAAgFACgEQACgEAEgDQADgCAFgBQAFgCAFAAQAIAAAHACQAGADADAEQADAEABAHIgMACQAAgGgEgDQgFgDgGAAQgIAAgEADQgDADAAADQAAABAAAAQAAABAAABQABAAAAABQAAAAABABIAEADIAKADIASAGQAFABADAEQADAFAAAGQAAAGgEAGQgDAFgHADQgGADgJAAQgNAAgIgGg");
	this.shape_111.setTransform(130.4,456.2);

	this.shape_112 = new cjs.Shape();
	this.shape_112.graphics.f("#000000").s().p("AgXAcQgKgKAAgRQAAgSAKgKQAKgKANAAQAPAAAKAKQAJAKAAARIAAADIg1AAQAAAMAGAGQAGAHAIAAQAHAAAFgEQAEgDADgIIANABQgDAMgIAGQgIAGgNAAQgOAAgKgKgAgMgVQgHAFAAAKIAnAAQAAgJgEgFQgGgHgKAAQgHAAgFAGg");
	this.shape_112.setTransform(123,456.2);

	this.shape_113 = new cjs.Shape();
	this.shape_113.graphics.f("#000000").s().p("AgXAcQgKgKAAgSQAAgTALgKQAKgIAMAAQAPAAAJAKQAKAKAAARQAAANgEAIQgEAIgIAEQgJAFgJAAQgOAAgJgKgAgOgUQgGAHAAANQAAAOAGAHQAGAHAIAAQAKAAAFgHQAHgHAAgOQAAgNgHgHQgFgHgKAAQgIAAgGAHg");
	this.shape_113.setTransform(115.2,456.2);

	this.shape_114 = new cjs.Shape();
	this.shape_114.graphics.f("#000000").s().p("AgTAlIAAhHIALAAIAAAKQAFgHADgDQADgCAEAAQAGAAAHADIgEAMQgFgCgEgBQgFABgCACQgDADgBADQgCAHAAAIIAAAlg");
	this.shape_114.setTransform(109.6,456.2);

	this.shape_115 = new cjs.Shape();
	this.shape_115.graphics.f("#000000").s().p("AgYAcQgJgKAAgSQAAgTAMgKQAIgIANAAQAPAAAKAKQAJAKAAARQAAANgEAIQgEAIgIAEQgJAFgJAAQgOAAgKgKgAgOgUQgGAHAAANQAAAOAGAHQAGAHAIAAQAJAAAHgHQAFgHABgOQgBgNgFgHQgHgHgJAAQgIAAgGAHg");
	this.shape_115.setTransform(102.8,456.2);

	this.shape_116 = new cjs.Shape();
	this.shape_116.graphics.f("#000000").s().p("AAaAyIgzhOIAABOIgOAAIAAhjIAPAAIAzBOIAAhOIAMAAIAABjg");
	this.shape_116.setTransform(93.8,454.9);

	this.shape_117 = new cjs.Shape();
	this.shape_117.graphics.f("#000000").s().p("AgaAgQgGgGgBgJQABgFACgFQACgEAEgDIAJgDIALgCQAOgBAHgDIAAgDQAAgIgEgDQgEgEgJAAQgIAAgEADQgEADgCAIIgNgCQADgHADgFQAEgFAHgCQAHgDAIAAQAJAAAHACQAFACADAEQADADABAFIAAALIAAAQQAAARABAFQABAEADAEIgOAAQgCgEAAgFQgHAGgGACQgFADgIAAQgLAAgHgGgAgCAEIgLADQgDABgBADQgCADAAADQAAAFADADQAEADAHAAQAHAAAFgDQAGgDACgFQACgFAAgIIAAgEQgGADgNABg");
	this.shape_117.setTransform(81,456.2);

	this.shape_118 = new cjs.Shape();
	this.shape_118.graphics.f("#000000").s().p("AgTAlIAAhHIALAAIAAAKQAFgHADgDQADgCAEAAQAGAAAHADIgEAMQgFgCgEgBQgFABgCACQgDADgBADQgCAHAAAIIAAAlg");
	this.shape_118.setTransform(75.3,456.2);

	this.shape_119 = new cjs.Shape();
	this.shape_119.graphics.f("#000000").s().p("AgXAcQgJgKAAgRQAAgSAJgKQAKgKAOAAQAOAAAJAKQAJAKAAARIAAADIg1AAQABAMAGAGQAGAHAJAAQAGAAAFgEQAFgDADgIIAMABQgDAMgIAGQgIAGgNAAQgPAAgJgKgAgNgVQgFAFgBAKIAoAAQgCgJgDgFQgGgHgJAAQgIAAgGAGg");
	this.shape_119.setTransform(68.5,456.2);

	this.shape_120 = new cjs.Shape();
	this.shape_120.graphics.f("#000000").s().p("AgBAvQgEgCgBgDQgCgEAAgLIAAgpIgJAAIAAgJIAJAAIAAgSIALgHIAAAZIANAAIAAAJIgNAAIAAAqQAAAFABACIACACIAEABIAGgBIACALIgKACQgGgBgDgCg");
	this.shape_120.setTransform(62.8,455);

	this.shape_121 = new cjs.Shape();
	this.shape_121.graphics.f("#000000").s().p("AASAlIAAgrQAAgIgCgDQgBgEgEgDQgEgBgEAAQgIAAgFAEQgGAGAAAOIAAAmIgNAAIAAhHIAMAAIAAAKQAIgMAOAAQAHAAAFACQAFADADAEQADADABAGIABALIAAAsg");
	this.shape_121.setTransform(56.8,456.2);

	this.shape_122 = new cjs.Shape();
	this.shape_122.graphics.f("#000000").s().p("AgYAcQgJgKAAgSQAAgTALgKQAJgIANAAQAPAAAKAKQAJAKAAARQAAANgEAIQgEAIgIAEQgIAFgKAAQgOAAgKgKgAgOgUQgGAHAAANQAAAOAGAHQAGAHAIAAQAJAAAHgHQAFgHAAgOQAAgNgFgHQgHgHgJAAQgIAAgGAHg");
	this.shape_122.setTransform(49,456.2);

	this.shape_123 = new cjs.Shape();
	this.shape_123.graphics.f("#000000").s().p("AgTAlIAAhHIALAAIAAAKQAFgHADgDQADgCAEAAQAGAAAHADIgEAMQgFgCgEgBQgFABgCACQgDADgBADQgCAHAAAIIAAAlg");
	this.shape_123.setTransform(43.4,456.2);

	this.shape_124 = new cjs.Shape();
	this.shape_124.graphics.f("#000000").s().p("AghAyIAAhjIBDAAIAAALIg2AAIAAAgIAvAAIAAALIgvAAIAAAtg");
	this.shape_124.setTransform(36.5,454.9);

	this.shape_125 = new cjs.Shape();
	this.shape_125.graphics.f("#000000").s().p("AgXAcQgJgKAAgRQAAgSAJgKQAJgKAPAAQAOAAAJAKQAKAKgBARIAAADIg1AAQABAMAGAGQAGAHAJAAQAGAAAFgEQAFgDADgIIAMABQgDAMgIAGQgIAGgNAAQgOAAgKgKgAgNgVQgFAFgBAKIAoAAQgBgJgEgFQgGgHgJAAQgIAAgGAGg");
	this.shape_125.setTransform(69.3,428.6);

	this.shape_126 = new cjs.Shape();
	this.shape_126.graphics.f("#000000").s().p("AgTAoIAAAJIgLAAIAAhjIAMAAIAAAkQAIgKALAAQAGAAAHADQAFACAFAFQADAFACAHQACAGABAIQgBATgIAKQgKAKgNAAQgLAAgIgLgAgNgHQgGAHAAAMQAAANADAGQAHAKAJAAQAIAAAFgHQAGgHAAgOQAAgNgFgHQgGgHgIAAQgIAAgFAHg");
	this.shape_126.setTransform(61.7,427.3);

	this.shape_127 = new cjs.Shape();
	this.shape_127.graphics.f("#000000").s().p("AgFAyIAAhIIALAAIAABIgAgFgjIAAgOIALAAIAAAOg");
	this.shape_127.setTransform(56.1,427.3);

	this.shape_128 = new cjs.Shape();
	this.shape_128.graphics.f("#000000").s().p("AgTAlIAAhIIALAAIAAALQAFgHADgDQADgCAEAAQAGAAAHADIgEAMQgFgDgEAAQgFAAgCADQgDACgBAEQgCAHAAAIIAAAlg");
	this.shape_128.setTransform(52.8,428.6);

	this.shape_129 = new cjs.Shape();
	this.shape_129.graphics.f("#000000").s().p("AgaAgQgHgGAAgJQAAgFADgFQACgEAEgDIAJgDIALgCQAOgBAHgDIAAgDQAAgIgDgDQgFgEgJAAQgIAAgEADQgEADgCAIIgMgCQABgHAEgFQAEgFAHgCQAHgDAIAAQAJAAAHACQAFACADAEQADADABAFIAAALIAAAQQAAARABAFQABAEADAEIgOAAQgBgEgBgFQgGAGgHACQgFADgIAAQgMAAgGgGgAgCAEIgLADQgDABgCADQgBADAAADQAAAFADADQAEADAHAAQAHAAAFgDQAGgDACgFQACgFAAgIIAAgEQgGADgNABg");
	this.shape_129.setTransform(46,428.6);

	this.shape_130 = new cjs.Shape();
	this.shape_130.graphics.f("#000000").s().p("AgWAtQgLgGgFgNQgFgMAAgOQAAgPAGgMQAGgMALgGQALgGAMAAQAPAAAKAIQALAIAEAOIgNADQgEgLgHgFQgGgFgKAAQgLAAgIAFQgHAGgDAJQgEAJAAAKQAAAMAEAKQAEAJAIAFQAIAFAIAAQALAAAIgHQAHgGADgNIANADQgEARgLAIQgLAJgPAAQgPAAgKgHg");
	this.shape_130.setTransform(37.1,427.2);

	this.shape_131 = new cjs.Shape();
	this.shape_131.graphics.f("#000000").s().p("AgXAcQgKgKAAgSQAAgTALgKQAKgIAMAAQAPAAAJAKQAKAKAAARQAAANgEAIQgEAIgIAEQgIAFgKAAQgOAAgJgKgAgOgUQgGAHAAANQAAAOAGAHQAGAHAIAAQAKAAAFgHQAHgHgBgOQABgNgHgHQgFgHgKAAQgIAAgGAHg");
	this.shape_131.setTransform(85.7,401);

	this.shape_132 = new cjs.Shape();
	this.shape_132.graphics.f("#000000").s().p("AgVAcQgKgKABgSQAAgLADgIQAFgJAIgFQAHgEAIAAQANAAAHAGQAIAGACALIgNACQgBgHgEgEQgFgEgGAAQgIAAgGAHQgGAGAAAOQAAAPAGAGQAGAHAHAAQAHAAAGgFQAEgEABgJIANABQgDANgHAHQgJAHgMAAQgOAAgIgKg");
	this.shape_132.setTransform(78.6,401);

	this.shape_133 = new cjs.Shape();
	this.shape_133.graphics.f("#000000").s().p("AgFAyIAAhjIALAAIAABjg");
	this.shape_133.setTransform(73.3,399.7);

	this.shape_134 = new cjs.Shape();
	this.shape_134.graphics.f("#000000").s().p("AgPAiQgGgCgDgEQgDgDgBgGIAAgLIAAgsIAMAAIAAAnIABANQAAAFAFADQADACAGAAQAFAAAEgCQAFgDACgFQACgFAAgJIAAgmIAMAAIAABHIgKAAIAAgKQgJAMgOAAQgGAAgFgDg");
	this.shape_134.setTransform(67.8,401.1);

	this.shape_135 = new cjs.Shape();
	this.shape_135.graphics.f("#000000").s().p("AgfAzIAAhjIAMAAIAAAJQAEgFAFgDQAFgDAGAAQAJAAAHAFQAHAEAEAJQAEAJAAAKQAAALgEAJQgEAIgIAFQgIAEgIABQgFgBgFgCQgFgCgDgEIAAAjgAgNghQgGAHAAAOQAAANAFAHQAGAHAIAAQAHgBAGgGQAGgIAAgNQAAgOgGgHQgFgGgIgBQgHAAgGAIg");
	this.shape_135.setTransform(60.2,402.4);

	this.shape_136 = new cjs.Shape();
	this.shape_136.graphics.f("#000000").s().p("AgaAgQgGgGAAgJQgBgFADgFQACgEAFgDIAIgDIALgCQAOgBAHgDIAAgDQAAgIgEgDQgEgEgJAAQgIAAgEADQgFADgCAIIgMgCQADgHADgFQAEgFAHgCQAHgDAJAAQAIAAAGACQAHACACAEQADADABAFIABALIAAAQQAAARABAFQAAAEACAEIgMAAQgCgEgBgFQgGAGgHACQgGADgGAAQgNAAgGgGgAgCAEIgLADQgDABgCADQgCADAAADQAAAFAFADQADADAIAAQAFAAAGgDQAFgDADgFQACgFAAgIIAAgEQgHADgMABg");
	this.shape_136.setTransform(52.2,401);

	this.shape_137 = new cjs.Shape();
	this.shape_137.graphics.f("#000000").s().p("AgVAcQgJgKAAgSQAAgLADgIQAFgJAHgFQAIgEAIAAQAMAAAIAGQAHAGACALIgMACQgBgHgFgEQgEgEgGAAQgIAAgGAHQgGAGAAAOQAAAPAGAGQAGAHAHAAQAHAAAGgFQAEgEABgJIANABQgDANgIAHQgHAHgNAAQgOAAgIgKg");
	this.shape_137.setTransform(45.1,401);

	this.shape_138 = new cjs.Shape();
	this.shape_138.graphics.f("#000000").s().p("AAgAyIgMgfIgpAAIgLAfIgOAAIAnhjIANAAIApBjgAgGgTIgLAcIAhAAIgLgbIgGgUIgFATg");
	this.shape_138.setTransform(36.7,399.7);

	this.timeline.addTween(cjs.Tween.get({}).to({state:[]}).to({state:[{t:this.shape_138},{t:this.shape_137},{t:this.shape_136},{t:this.shape_135},{t:this.shape_134},{t:this.shape_133},{t:this.shape_132},{t:this.shape_131},{t:this.shape_130},{t:this.shape_129},{t:this.shape_128},{t:this.shape_127},{t:this.shape_126},{t:this.shape_125},{t:this.shape_124},{t:this.shape_123},{t:this.shape_122},{t:this.shape_121},{t:this.shape_120},{t:this.shape_119},{t:this.shape_118},{t:this.shape_117},{t:this.shape_116},{t:this.shape_115},{t:this.shape_114},{t:this.shape_113},{t:this.shape_112},{t:this.shape_111},{t:this.shape_110},{t:this.shape_109},{t:this.shape_108},{t:this.shape_107},{t:this.shape_106},{t:this.shape_105},{t:this.shape_104},{t:this.shape_103},{t:this.shape_102},{t:this.shape_101},{t:this.shape_100},{t:this.shape_99},{t:this.shape_98},{t:this.shape_97},{t:this.shape_96},{t:this.shape_95},{t:this.shape_94},{t:this.shape_93},{t:this.shape_92},{t:this.shape_91},{t:this.shape_90},{t:this.shape_89},{t:this.shape_88},{t:this.shape_87},{t:this.shape_86},{t:this.shape_85},{t:this.shape_84},{t:this.shape_83},{t:this.shape_82},{t:this.shape_81},{t:this.shape_80},{t:this.shape_79},{t:this.shape_78},{t:this.shape_77},{t:this.shape_76},{t:this.shape_75},{t:this.shape_74},{t:this.shape_73},{t:this.shape_72},{t:this.shape_71},{t:this.shape_70},{t:this.shape_69},{t:this.shape_68},{t:this.shape_67},{t:this.shape_66},{t:this.shape_65},{t:this.shape_64},{t:this.shape_63},{t:this.shape_62},{t:this.shape_61},{t:this.shape_60},{t:this.shape_59},{t:this.shape_58},{t:this.shape_57},{t:this.shape_56},{t:this.shape_55},{t:this.shape_54},{t:this.shape_53},{t:this.shape_52},{t:this.shape_51},{t:this.shape_50},{t:this.shape_49},{t:this.shape_48},{t:this.shape_47},{t:this.shape_46},{t:this.shape_45},{t:this.shape_44},{t:this.shape_43},{t:this.shape_42},{t:this.shape_41},{t:this.shape_40},{t:this.shape_39},{t:this.shape_38},{t:this.shape_37},{t:this.shape_36},{t:this.shape_35},{t:this.shape_34},{t:this.shape_33},{t:this.shape_32},{t:this.shape_31},{t:this.shape_30},{t:this.shape_29},{t:this.shape_28},{t:this.shape_27},{t:this.shape_26},{t:this.shape_25},{t:this.shape_24},{t:this.shape_23},{t:this.shape_22},{t:this.shape_21},{t:this.shape_20},{t:this.shape_19},{t:this.shape_18},{t:this.shape_17},{t:this.shape_16},{t:this.shape_15},{t:this.shape_14},{t:this.shape_13},{t:this.shape_12},{t:this.shape_11},{t:this.shape_10},{t:this.shape_9},{t:this.shape_8},{t:this.shape_7},{t:this.shape_6},{t:this.shape_5}]},9).wait(40));

	// Background
	this.instance_1 = new lib.mc_background();
	this.instance_1.parent = this;
	this.instance_1.setTransform(470,290);

	this.timeline.addTween(cjs.Tween.get(this.instance_1).wait(49));

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = new cjs.Rectangle(470,290,940,580);
// library properties:
lib.properties = {
	id: '07053B836AAC214CA6E17D0016CCFE38',
	width: 940,
	height: 580,
	fps: 30,
	color: "#FFFFFF",
	opacity: 0.00,
	webfonts: {},
	manifest: [
		{src:"../static/ms/23/canvas_graphics/mainmenu_nwo/images/mc_01_background.png", id:"mc_01_background"},
		{src:"../static/ms/23/canvas_graphics/mainmenu_nwo/images/mc_02_background.png", id:"mc_02_background"},
		{src:"../static/ms/23/canvas_graphics/mainmenu_nwo/images/mc_03_background.png", id:"mc_03_background"},
		{src:"../static/ms/23/canvas_graphics/mainmenu_nwo/images/mc_04_background.png", id:"mc_04_background"},
		{src:"../static/ms/23/canvas_graphics/mainmenu_nwo/images/mc_05_background.png", id:"mc_05_background"},
		{src:"../static/ms/23/canvas_graphics/mainmenu_nwo/images/mc_06_background.png", id:"mc_06_background"},
		{src:"../static/ms/23/canvas_graphics/mainmenu_nwo/images/mc_07_background.png", id:"mc_07_background"},
		{src:"../static/ms/23/canvas_graphics/mainmenu_nwo/images/mc_08_background.png", id:"mc_08_background"},
		{src:"../static/ms/23/canvas_graphics/mainmenu_nwo/images/mc_09_background.png", id:"mc_09_background"},
		{src:"../static/ms/23/canvas_graphics/mainmenu_nwo/images/mc_10_background.png", id:"mc_10_background"},
		{src:"../static/ms/23/canvas_graphics/mainmenu_nwo/images/mc_11_background.png", id:"mc_11_background"},
		{src:"../static/ms/23/canvas_graphics/mainmenu_nwo/images/mc_12_background.png", id:"mc_12_background"}
	],
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
an.compositions['07053B836AAC214CA6E17D0016CCFE38'] = {
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