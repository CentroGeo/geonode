(function (cjs, an) {

var p; // shortcut to reference prototypes
var lib={};var ss={};var img={};
lib.ssMetadata = [];


// symbols:



(lib.mc_btn_shadow = function() {
	this.initialize(img.mc_btn_shadow);
}).prototype = p = new cjs.Bitmap();
p.nominalBounds = new cjs.Rectangle(0,0,80,80);


(lib.mc_formas_shadow1 = function() {
	this.initialize(img.mc_formas_shadow1);
}).prototype = p = new cjs.Bitmap();
p.nominalBounds = new cjs.Rectangle(0,0,406,424);


(lib.mc_formas_shadow2 = function() {
	this.initialize(img.mc_formas_shadow2);
}).prototype = p = new cjs.Bitmap();
p.nominalBounds = new cjs.Rectangle(0,0,396,414);


(lib.mc_nav01 = function() {
	this.initialize(img.mc_nav01);
}).prototype = p = new cjs.Bitmap();
p.nominalBounds = new cjs.Rectangle(0,0,80,80);


(lib.mc_nav02 = function() {
	this.initialize(img.mc_nav02);
}).prototype = p = new cjs.Bitmap();
p.nominalBounds = new cjs.Rectangle(0,0,80,80);


(lib.mc_nav03 = function() {
	this.initialize(img.mc_nav03);
}).prototype = p = new cjs.Bitmap();
p.nominalBounds = new cjs.Rectangle(0,0,80,80);


(lib.mc_nav04 = function() {
	this.initialize(img.mc_nav04);
}).prototype = p = new cjs.Bitmap();
p.nominalBounds = new cjs.Rectangle(0,0,80,80);


(lib.mc_nav05 = function() {
	this.initialize(img.mc_nav05);
}).prototype = p = new cjs.Bitmap();
p.nominalBounds = new cjs.Rectangle(0,0,80,80);


(lib.mc_nav06 = function() {
	this.initialize(img.mc_nav06);
}).prototype = p = new cjs.Bitmap();
p.nominalBounds = new cjs.Rectangle(0,0,80,80);


(lib.mc_nav_shadow = function() {
	this.initialize(img.mc_nav_shadow);
}).prototype = p = new cjs.Bitmap();
p.nominalBounds = new cjs.Rectangle(0,0,90,90);// helper functions:

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


(lib.mc_title_mask = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// Capa_1
	this.shape = new cjs.Shape();
	this.shape.graphics.f().s("#CCCC00").ss(1.5,1,1).p("AAALVQCTAACHg5QCBg3BmhlQBkhkA3iCQA5iGAAiUQAAiSg5iHQg3iChkhkQhmhkiBg4QiHg5iTAAQiSAAiHA5QiCA4hlBkQhkBlg3CBQg5CHAACSQAACUA5CGQA3CCBkBkQBlBlCCA3QCGA5CTAAg");

	this.shape_1 = new cjs.Shape();
	this.shape_1.graphics.f().s("rgba(0,0,0,0.118)").ss(1.5,1,1).p("AAALVQCTAACHg5QCBg3BmhlQBkhkA3iCQA5iGAAiUQAAiSg5iHQg3iChkhkQhmhkiBg4QiHg5iTAAQiSAAiHA5QiCA4hlBkQhkBlg3CBQg5CHAACSQAACUA5CGQA3CCBkBkQBlBlCCA3QCGA5CTAAg");
	this.shape_1.setTransform(0,0,1.014,1.014);

	this.timeline.addTween(cjs.Tween.get({}).to({state:[{t:this.shape_1},{t:this.shape}]}).wait(1));

	// Capa_2
	this.shape_2 = new cjs.Shape();
	this.shape_2.graphics.f("#FFFFFF").s().p("Ak2LhQiQg9huhvQhwhvg8iPQg/iUAAijQAAihA/iVQA8iPBwhvQBuhvCQg9QCVg/ChAAQCiAACUA/QCQA9BvBvQBvBuA9CQQA/CVAAChQAACjg/CUQg9CPhvBvQhvBviQA9QiUA/iiAAQihAAiVg/g");

	this.timeline.addTween(cjs.Tween.get(this.shape_2).wait(1));

}).prototype = getMCSymbolPrototype(lib.mc_title_mask, new cjs.Rectangle(-80,-80,160,160), null);


(lib.mc_formas = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// Capa_1
	this.shape = new cjs.Shape();
	this.shape.graphics.f("rgba(255,0,0,0)").s().p("EAu4AiYIAAjIIDIAAIAADIgEgx/gfPIAAjIIDIAAIAADIg");
	this.shape.setTransform(320,220);

	this.timeline.addTween(cjs.Tween.get(this.shape).wait(1));

	// Capa_2
	this.shape_1 = new cjs.Shape();
	this.shape_1.graphics.f("#E68C00").s().p("Ag8FZQiOgZhUh3QhTh3AZiOQAZiOB3hUQB3hTCOAZQCPAZBTB3QBTB3gZCOQgZCPh3BTQhcBAhoAAQggAAghgGg");
	this.shape_1.setTransform(415.2,136.7);

	this.shape_2 = new cjs.Shape();
	this.shape_2.graphics.f("#E68C00").s().p("AjgEMQhvhdgNiQQgMiQBdhvQBdhvCRgNQCPgMBvBdQBvBdANCRQANCPheBvQhdBviQANQgSABgQAAQh7AAhihSg");
	this.shape_2.setTransform(340.2,336.7);

	this.shape_3 = new cjs.Shape();
	this.shape_3.graphics.f("#E68C00").s().p("AiTE9QiDg9gyiIQgxiHA9iEQA9iDCIgyQCIgxCDA9QCDA9AyCIQAxCIg9CDQg9CEiIAxQg9AWg7AAQhKAAhJgig");
	this.shape_3.setTransform(204.5,171.7);

	this.timeline.addTween(cjs.Tween.get({}).to({state:[{t:this.shape_3},{t:this.shape_2},{t:this.shape_1}]}).wait(1));

	// Capa_3
	this.shape_4 = new cjs.Shape();
	this.shape_4.graphics.f("rgba(210,210,5,0.6)").s().p("ArcH2QivhAhPipQhOipA/iuQBAivCphPQFSieFygiQF9gkF3BkQC0AwBdChQBdCigwCzQgwC0ihBdQiiBdi0gwQjZg6jfAVQjWAUjFBcQhdAshfAAQhNAAhPgdg");
	this.shape_4.setTransform(262,72.3);

	this.shape_5 = new cjs.Shape();
	this.shape_5.graphics.f("rgba(210,210,5,0.6)").s().p("AozNNQiEiDAAi7QAAi6CEiEQCfifBdjLQBajEATjYQAQi6CPh4QCOh3C6AQQC5AQB4CPQB4CPgQC5QghF0iaFRQihFdkSESQiDCEi6AAQi7AAiDiEg");
	this.shape_5.setTransform(470.2,234.8);

	this.shape_6 = new cjs.Shape();
	this.shape_6.graphics.f("rgba(210,210,5,0.6)").s().p("ABLNNQkwjVjXkvQjfk6hkl1Qgwi0BdiiQBdihC0gxQC0gwCiBeQCgBdAwC0QA6DZCCC3QB9CwCyB7QCYBrAhC4QAgC3hrCZQhrCYi3AhQgrAHgpAAQiHAAh2hSg");
	this.shape_6.setTransform(227.7,335.1);

	this.timeline.addTween(cjs.Tween.get({}).to({state:[{t:this.shape_6},{t:this.shape_5},{t:this.shape_4}]}).wait(1));

	// Capa_4
	this.instance = new lib.mc_formas_shadow2();
	this.instance.parent = this;
	this.instance.setTransform(146,16);

	this.timeline.addTween(cjs.Tween.get(this.instance).wait(1));

	// Capa_5
	this.shape_7 = new cjs.Shape();
	this.shape_7.graphics.f("#008278").s().p("APaL0QijgdhfiHQiBi5i4iCQi9iGjig9Qjig9jnAWQjgAVjMBfQiXBGibg4Qicg5hGiVQhGiWA5icQA4icCXhGQFKiaFpgiQF2gjFtBiQFuBiEyDaQEnDRDREqQBfCIgdCjQgcCjiIBfQhoBJh4AAQgkAAgngHg");
	this.shape_7.setTransform(309.7,100.5);

	this.shape_8 = new cjs.Shape();
	this.shape_8.graphics.f("#008278").s().p("AwFQ3Qh/hqgOimQgPilBrh/QBrh+ClgPQDggUDMhdQDUhhClilQCmimBgjTQBdjMAUjhQAOilCAhqQB+hrClAPQClAOBrB/QBrB/gPClQggFriXFKQidFUkLEMQkMEMlUCcQlKCYlrAfQgUACgTAAQiNAAhwheg");
	this.shape_8.setTransform(417.5,259.4);

	this.shape_9 = new cjs.Shape();
	this.shape_9.graphics.f("#008278").s().p("ACFVnQkpjQjSkoQjakyhiluQhiltAjl2QAilpCalKQBGiXCcg4QCcg5CWBGQCVBGA5CcQA4CchGCWQhfDMgVDgQgWDnA9DiQA9DiCGC+QCCC3C5CBQCIBfAdCjQAcCjhfCIQhfCIijAdQgmAGgkAAQh4AAhphJg");
	this.shape_9.setTransform(224.8,277.2);

	this.timeline.addTween(cjs.Tween.get({}).to({state:[{t:this.shape_9},{t:this.shape_8},{t:this.shape_7}]}).wait(1));

	// Capa_6
	this.instance_1 = new lib.mc_formas_shadow1();
	this.instance_1.parent = this;
	this.instance_1.setTransform(142,14);

	this.timeline.addTween(cjs.Tween.get(this.instance_1).wait(1));

}).prototype = getMCSymbolPrototype(lib.mc_formas, new cjs.Rectangle(0,0,640,440), null);


(lib.buttons_graph = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// Capa_1
	this.shape = new cjs.Shape();
	this.shape.graphics.f("rgba(255,255,255,0.008)").s().p("AkaEbQh1h1AAimQAAikB1h2QB2h1CkAAQCmAAB1B1QB1B2AACkQAACmh1B1Qh1B1imAAQikAAh2h1g");

	this.timeline.addTween(cjs.Tween.get(this.shape).wait(1));

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = new cjs.Rectangle(-40,-40,80,80);


(lib.mc_nav06_1 = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// Mask (mask)
	var mask = new cjs.Shape();
	mask._off = true;
	mask.graphics.p("Aj3D4QhmhnAAiRQAAiQBmhnQBnhmCQAAQCRAABnBmQBmBnAACQQAACRhmBnQhnBmiRAAQiQAAhnhmg");

	// Frame
	this.shape = new cjs.Shape();
	this.shape.graphics.lf(["#FFFFFF","#CCCCCC"],[0,1],-20,-34.6,20,34.7).s().p("AmPGQIAAsfIMfAAIAAMfgAjvjvQhkBjAACNQAACMBkBjQBjBkCNAAQCMAABjhkQBkhjAAiMQAAiNhkhjQhjhkiMAAQiNAAhjBkg");

	var maskedShapeInstanceList = [this.shape];

	for(var shapedInstanceItr = 0; shapedInstanceItr < maskedShapeInstanceList.length; shapedInstanceItr++) {
		maskedShapeInstanceList[shapedInstanceItr].mask = mask;
	}

	this.timeline.addTween(cjs.Tween.get(this.shape).wait(1));

	// Shadow
	this.shape_1 = new cjs.Shape();
	this.shape_1.graphics.lf(["rgba(0,0,0,0.298)","rgba(0,0,0,0)"],[0,1],-20,-34.6,20,34.6).s().p("AmPGQIAAsfIMfAAIAAMfg");

	var maskedShapeInstanceList = [this.shape_1];

	for(var shapedInstanceItr = 0; shapedInstanceItr < maskedShapeInstanceList.length; shapedInstanceItr++) {
		maskedShapeInstanceList[shapedInstanceItr].mask = mask;
	}

	this.timeline.addTween(cjs.Tween.get(this.shape_1).wait(1));

	// Image
	this.instance = new lib.mc_nav06();
	this.instance.parent = this;
	this.instance.setTransform(-40,-40);

	var maskedShapeInstanceList = [this.instance];

	for(var shapedInstanceItr = 0; shapedInstanceItr < maskedShapeInstanceList.length; shapedInstanceItr++) {
		maskedShapeInstanceList[shapedInstanceItr].mask = mask;
	}

	this.timeline.addTween(cjs.Tween.get(this.instance).wait(1));

	// Shadow_BT
	this.instance_1 = new lib.mc_nav_shadow();
	this.instance_1.parent = this;
	this.instance_1.setTransform(-45,-45);

	this.timeline.addTween(cjs.Tween.get(this.instance_1).wait(1));

	// Background
	this.shape_2 = new cjs.Shape();
	this.shape_2.graphics.f().s("#FFFFFF").ss(1,1,1).p("AFeAAQAACRhmBnQhnBmiRAAQiQAAhnhmQhmhnAAiRQAAiQBmhnQBnhmCQAAQCRAABnBmQBmBnAACQg");

	this.shape_3 = new cjs.Shape();
	this.shape_3.graphics.f("#FFFFFF").s().p("Aj3D4QhmhnAAiRQAAiQBmhnQBnhmCQAAQCRAABnBmQBmBnAACQQAACRhmBnQhnBmiRAAQiQAAhnhmg");

	this.timeline.addTween(cjs.Tween.get({}).to({state:[{t:this.shape_3},{t:this.shape_2}]}).wait(1));

}).prototype = getMCSymbolPrototype(lib.mc_nav06_1, new cjs.Rectangle(-45,-45,90,90), null);


(lib.mc_nav05_1 = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// Mask (mask)
	var mask = new cjs.Shape();
	mask._off = true;
	mask.graphics.p("Aj3D4QhmhnAAiRQAAiQBmhnQBnhmCQAAQCRAABnBmQBmBnAACQQAACRhmBnQhnBmiRAAQiQAAhnhmg");

	// Frame
	this.shape = new cjs.Shape();
	this.shape.graphics.lf(["#FFFFFF","#CCCCCC"],[0,1],-20,-34.6,20,34.7).s().p("AmPGQIAAsfIMfAAIAAMfgAjvjvQhkBjAACNQAACMBkBjQBjBkCNAAQCMAABjhkQBkhjAAiMQAAiNhkhjQhjhkiMAAQiNAAhjBkg");

	var maskedShapeInstanceList = [this.shape];

	for(var shapedInstanceItr = 0; shapedInstanceItr < maskedShapeInstanceList.length; shapedInstanceItr++) {
		maskedShapeInstanceList[shapedInstanceItr].mask = mask;
	}

	this.timeline.addTween(cjs.Tween.get(this.shape).wait(1));

	// Shadow
	this.shape_1 = new cjs.Shape();
	this.shape_1.graphics.lf(["rgba(0,0,0,0.298)","rgba(0,0,0,0)"],[0,1],-20,-34.6,20,34.6).s().p("AmPGQIAAsfIMfAAIAAMfg");

	var maskedShapeInstanceList = [this.shape_1];

	for(var shapedInstanceItr = 0; shapedInstanceItr < maskedShapeInstanceList.length; shapedInstanceItr++) {
		maskedShapeInstanceList[shapedInstanceItr].mask = mask;
	}

	this.timeline.addTween(cjs.Tween.get(this.shape_1).wait(1));

	// Image
	this.instance = new lib.mc_nav05();
	this.instance.parent = this;
	this.instance.setTransform(-40,-40);

	var maskedShapeInstanceList = [this.instance];

	for(var shapedInstanceItr = 0; shapedInstanceItr < maskedShapeInstanceList.length; shapedInstanceItr++) {
		maskedShapeInstanceList[shapedInstanceItr].mask = mask;
	}

	this.timeline.addTween(cjs.Tween.get(this.instance).wait(1));

	// Shadow_BT
	this.instance_1 = new lib.mc_nav_shadow();
	this.instance_1.parent = this;
	this.instance_1.setTransform(-45,-45);

	this.timeline.addTween(cjs.Tween.get(this.instance_1).wait(1));

	// Background
	this.shape_2 = new cjs.Shape();
	this.shape_2.graphics.f().s("#FFFFFF").ss(1,1,1).p("AFeAAQAACRhmBnQhnBmiRAAQiQAAhnhmQhmhnAAiRQAAiQBmhnQBnhmCQAAQCRAABnBmQBmBnAACQg");

	this.shape_3 = new cjs.Shape();
	this.shape_3.graphics.f("#FFFFFF").s().p("Aj3D4QhmhnAAiRQAAiQBmhnQBnhmCQAAQCRAABnBmQBmBnAACQQAACRhmBnQhnBmiRAAQiQAAhnhmg");

	this.timeline.addTween(cjs.Tween.get({}).to({state:[{t:this.shape_3},{t:this.shape_2}]}).wait(1));

}).prototype = getMCSymbolPrototype(lib.mc_nav05_1, new cjs.Rectangle(-45,-45,90,90), null);


(lib.mc_nav04_1 = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// Mask (mask)
	var mask = new cjs.Shape();
	mask._off = true;
	mask.graphics.p("Aj3D4QhmhnAAiRQAAiQBmhnQBnhmCQAAQCRAABnBmQBmBnAACQQAACRhmBnQhnBmiRAAQiQAAhnhmg");

	// Frame
	this.shape = new cjs.Shape();
	this.shape.graphics.lf(["#FFFFFF","#CCCCCC"],[0,1],-20,-34.6,20,34.7).s().p("AmPGQIAAsfIMfAAIAAMfgAjvjvQhkBjAACNQAACMBkBjQBjBkCNAAQCMAABjhkQBkhjAAiMQAAiNhkhjQhjhkiMAAQiNAAhjBkg");

	var maskedShapeInstanceList = [this.shape];

	for(var shapedInstanceItr = 0; shapedInstanceItr < maskedShapeInstanceList.length; shapedInstanceItr++) {
		maskedShapeInstanceList[shapedInstanceItr].mask = mask;
	}

	this.timeline.addTween(cjs.Tween.get(this.shape).wait(1));

	// Shadow
	this.shape_1 = new cjs.Shape();
	this.shape_1.graphics.lf(["rgba(0,0,0,0.298)","rgba(0,0,0,0)"],[0,1],-20,-34.6,20,34.6).s().p("AmPGQIAAsfIMfAAIAAMfg");

	var maskedShapeInstanceList = [this.shape_1];

	for(var shapedInstanceItr = 0; shapedInstanceItr < maskedShapeInstanceList.length; shapedInstanceItr++) {
		maskedShapeInstanceList[shapedInstanceItr].mask = mask;
	}

	this.timeline.addTween(cjs.Tween.get(this.shape_1).wait(1));

	// Image
	this.instance = new lib.mc_nav04();
	this.instance.parent = this;
	this.instance.setTransform(-40,-40);

	var maskedShapeInstanceList = [this.instance];

	for(var shapedInstanceItr = 0; shapedInstanceItr < maskedShapeInstanceList.length; shapedInstanceItr++) {
		maskedShapeInstanceList[shapedInstanceItr].mask = mask;
	}

	this.timeline.addTween(cjs.Tween.get(this.instance).wait(1));

	// Shadow_BT
	this.instance_1 = new lib.mc_nav_shadow();
	this.instance_1.parent = this;
	this.instance_1.setTransform(-45,-45);

	this.timeline.addTween(cjs.Tween.get(this.instance_1).wait(1));

	// Background
	this.shape_2 = new cjs.Shape();
	this.shape_2.graphics.f().s("#FFFFFF").ss(1,1,1).p("AFeAAQAACRhmBnQhnBmiRAAQiQAAhnhmQhmhnAAiRQAAiQBmhnQBnhmCQAAQCRAABnBmQBmBnAACQg");

	this.shape_3 = new cjs.Shape();
	this.shape_3.graphics.f("#FFFFFF").s().p("Aj3D4QhmhnAAiRQAAiQBmhnQBnhmCQAAQCRAABnBmQBmBnAACQQAACRhmBnQhnBmiRAAQiQAAhnhmg");

	this.timeline.addTween(cjs.Tween.get({}).to({state:[{t:this.shape_3},{t:this.shape_2}]}).wait(1));

}).prototype = getMCSymbolPrototype(lib.mc_nav04_1, new cjs.Rectangle(-45,-45,90,90), null);


(lib.mc_nav03_1 = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// Mask (mask)
	var mask = new cjs.Shape();
	mask._off = true;
	mask.graphics.p("Aj3D4QhmhnAAiRQAAiQBmhnQBnhmCQAAQCRAABnBmQBmBnAACQQAACRhmBnQhnBmiRAAQiQAAhnhmg");

	// Frame
	this.shape = new cjs.Shape();
	this.shape.graphics.lf(["#FFFFFF","#CCCCCC"],[0,1],-20,-34.6,20,34.7).s().p("AmPGQIAAsfIMfAAIAAMfgAjvjvQhkBjAACNQAACMBkBjQBjBkCNAAQCMAABjhkQBkhjAAiMQAAiNhkhjQhjhkiMAAQiNAAhjBkg");

	var maskedShapeInstanceList = [this.shape];

	for(var shapedInstanceItr = 0; shapedInstanceItr < maskedShapeInstanceList.length; shapedInstanceItr++) {
		maskedShapeInstanceList[shapedInstanceItr].mask = mask;
	}

	this.timeline.addTween(cjs.Tween.get(this.shape).wait(1));

	// Shadow
	this.shape_1 = new cjs.Shape();
	this.shape_1.graphics.lf(["rgba(0,0,0,0.298)","rgba(0,0,0,0)"],[0,1],-20,-34.6,20,34.6).s().p("AmPGQIAAsfIMfAAIAAMfg");

	var maskedShapeInstanceList = [this.shape_1];

	for(var shapedInstanceItr = 0; shapedInstanceItr < maskedShapeInstanceList.length; shapedInstanceItr++) {
		maskedShapeInstanceList[shapedInstanceItr].mask = mask;
	}

	this.timeline.addTween(cjs.Tween.get(this.shape_1).wait(1));

	// Image
	this.instance = new lib.mc_nav03();
	this.instance.parent = this;
	this.instance.setTransform(-40,-40);

	var maskedShapeInstanceList = [this.instance];

	for(var shapedInstanceItr = 0; shapedInstanceItr < maskedShapeInstanceList.length; shapedInstanceItr++) {
		maskedShapeInstanceList[shapedInstanceItr].mask = mask;
	}

	this.timeline.addTween(cjs.Tween.get(this.instance).wait(1));

	// Shadow_BT
	this.instance_1 = new lib.mc_nav_shadow();
	this.instance_1.parent = this;
	this.instance_1.setTransform(-45,-45);

	this.timeline.addTween(cjs.Tween.get(this.instance_1).wait(1));

	// Background
	this.shape_2 = new cjs.Shape();
	this.shape_2.graphics.f().s("#FFFFFF").ss(1,1,1).p("AFeAAQAACRhmBnQhnBmiRAAQiQAAhnhmQhmhnAAiRQAAiQBmhnQBnhmCQAAQCRAABnBmQBmBnAACQg");

	this.shape_3 = new cjs.Shape();
	this.shape_3.graphics.f("#FFFFFF").s().p("Aj3D4QhmhnAAiRQAAiQBmhnQBnhmCQAAQCRAABnBmQBmBnAACQQAACRhmBnQhnBmiRAAQiQAAhnhmg");

	this.timeline.addTween(cjs.Tween.get({}).to({state:[{t:this.shape_3},{t:this.shape_2}]}).wait(1));

}).prototype = getMCSymbolPrototype(lib.mc_nav03_1, new cjs.Rectangle(-45,-45,90,90), null);


(lib.mc_nav02_1 = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// Mask (mask)
	var mask = new cjs.Shape();
	mask._off = true;
	mask.graphics.p("Aj3D4QhmhnAAiRQAAiQBmhnQBnhmCQAAQCRAABnBmQBmBnAACQQAACRhmBnQhnBmiRAAQiQAAhnhmg");

	// Frame
	this.shape = new cjs.Shape();
	this.shape.graphics.lf(["#FFFFFF","#CCCCCC"],[0,1],-20,-34.6,20,34.7).s().p("AmPGQIAAsfIMfAAIAAMfgAjvjvQhkBjAACNQAACMBkBjQBjBkCNAAQCMAABjhkQBkhjAAiMQAAiNhkhjQhjhkiMAAQiNAAhjBkg");

	var maskedShapeInstanceList = [this.shape];

	for(var shapedInstanceItr = 0; shapedInstanceItr < maskedShapeInstanceList.length; shapedInstanceItr++) {
		maskedShapeInstanceList[shapedInstanceItr].mask = mask;
	}

	this.timeline.addTween(cjs.Tween.get(this.shape).wait(1));

	// Shadow
	this.shape_1 = new cjs.Shape();
	this.shape_1.graphics.lf(["rgba(0,0,0,0.298)","rgba(0,0,0,0)"],[0,1],-20,-34.6,20,34.6).s().p("AmPGQIAAsfIMfAAIAAMfg");

	var maskedShapeInstanceList = [this.shape_1];

	for(var shapedInstanceItr = 0; shapedInstanceItr < maskedShapeInstanceList.length; shapedInstanceItr++) {
		maskedShapeInstanceList[shapedInstanceItr].mask = mask;
	}

	this.timeline.addTween(cjs.Tween.get(this.shape_1).wait(1));

	// Image
	this.instance = new lib.mc_nav02();
	this.instance.parent = this;
	this.instance.setTransform(-40,-40);

	var maskedShapeInstanceList = [this.instance];

	for(var shapedInstanceItr = 0; shapedInstanceItr < maskedShapeInstanceList.length; shapedInstanceItr++) {
		maskedShapeInstanceList[shapedInstanceItr].mask = mask;
	}

	this.timeline.addTween(cjs.Tween.get(this.instance).wait(1));

	// Shadow_BT
	this.instance_1 = new lib.mc_nav_shadow();
	this.instance_1.parent = this;
	this.instance_1.setTransform(-45,-45);

	this.timeline.addTween(cjs.Tween.get(this.instance_1).wait(1));

	// Background
	this.shape_2 = new cjs.Shape();
	this.shape_2.graphics.f().s("#FFFFFF").ss(1,1,1).p("AFeAAQAACRhmBnQhnBmiRAAQiQAAhnhmQhmhnAAiRQAAiQBmhnQBnhmCQAAQCRAABnBmQBmBnAACQg");

	this.shape_3 = new cjs.Shape();
	this.shape_3.graphics.f("#FFFFFF").s().p("Aj3D4QhmhnAAiRQAAiQBmhnQBnhmCQAAQCRAABnBmQBmBnAACQQAACRhmBnQhnBmiRAAQiQAAhnhmg");

	this.timeline.addTween(cjs.Tween.get({}).to({state:[{t:this.shape_3},{t:this.shape_2}]}).wait(1));

}).prototype = getMCSymbolPrototype(lib.mc_nav02_1, new cjs.Rectangle(-45,-45,90,90), null);


(lib.mc_nav01_1 = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// Mask (mask)
	var mask = new cjs.Shape();
	mask._off = true;
	mask.graphics.p("Aj3D4QhmhnAAiRQAAiQBmhnQBnhmCQAAQCRAABnBmQBmBnAACQQAACRhmBnQhnBmiRAAQiQAAhnhmg");

	// Frame
	this.shape = new cjs.Shape();
	this.shape.graphics.lf(["#FFFFFF","#CCCCCC"],[0,1],-20,-34.6,20,34.7).s().p("AmPGQIAAsfIMfAAIAAMfgAjvjvQhkBjAACNQAACMBkBjQBjBkCNAAQCMAABjhkQBkhjAAiMQAAiNhkhjQhjhkiMAAQiNAAhjBkg");

	var maskedShapeInstanceList = [this.shape];

	for(var shapedInstanceItr = 0; shapedInstanceItr < maskedShapeInstanceList.length; shapedInstanceItr++) {
		maskedShapeInstanceList[shapedInstanceItr].mask = mask;
	}

	this.timeline.addTween(cjs.Tween.get(this.shape).wait(1));

	// Shadow
	this.shape_1 = new cjs.Shape();
	this.shape_1.graphics.lf(["rgba(0,0,0,0.298)","rgba(0,0,0,0)"],[0,1],-20,-34.6,20,34.6).s().p("AmPGQIAAsfIMfAAIAAMfg");

	var maskedShapeInstanceList = [this.shape_1];

	for(var shapedInstanceItr = 0; shapedInstanceItr < maskedShapeInstanceList.length; shapedInstanceItr++) {
		maskedShapeInstanceList[shapedInstanceItr].mask = mask;
	}

	this.timeline.addTween(cjs.Tween.get(this.shape_1).wait(1));

	// Image
	this.instance = new lib.mc_nav01();
	this.instance.parent = this;
	this.instance.setTransform(-40,-40);

	var maskedShapeInstanceList = [this.instance];

	for(var shapedInstanceItr = 0; shapedInstanceItr < maskedShapeInstanceList.length; shapedInstanceItr++) {
		maskedShapeInstanceList[shapedInstanceItr].mask = mask;
	}

	this.timeline.addTween(cjs.Tween.get(this.instance).wait(1));

	// Shadow_BT
	this.instance_1 = new lib.mc_nav_shadow();
	this.instance_1.parent = this;
	this.instance_1.setTransform(-45,-45);

	this.timeline.addTween(cjs.Tween.get(this.instance_1).wait(1));

	// Background
	this.shape_2 = new cjs.Shape();
	this.shape_2.graphics.f().s("#FFFFFF").ss(1,1,1).p("AFeAAQAACRhmBnQhnBmiRAAQiQAAhnhmQhmhnAAiRQAAiQBmhnQBnhmCQAAQCRAABnBmQBmBnAACQg");

	this.shape_3 = new cjs.Shape();
	this.shape_3.graphics.f("#FFFFFF").s().p("Aj3D4QhmhnAAiRQAAiQBmhnQBnhmCQAAQCRAABnBmQBmBnAACQQAACRhmBnQhnBmiRAAQiQAAhnhmg");

	this.timeline.addTween(cjs.Tween.get({}).to({state:[{t:this.shape_3},{t:this.shape_2}]}).wait(1));

}).prototype = getMCSymbolPrototype(lib.mc_nav01_1, new cjs.Rectangle(-45,-45,90,90), null);


(lib.mc_btn03 = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// Mask (mask)
	var mask = new cjs.Shape();
	mask._off = true;
	mask.graphics.p("AjTDUQhYhYAAh8QAAh7BYhYQBYhYB7AAQB8AABYBYQBYBYAAB7QAAB8hYBYQhYBYh8AAQh7AAhYhYg");

	// Frame
	this.shape = new cjs.Shape();
	this.shape.graphics.lf(["#FFFFFF","#CCCCCC"],[0,1],-17.5,-30.3,17.5,30.3).s().p("AldFeIAAq7IK7AAIAAK7gAjMjMQhVBVAAB3QAAB4BVBVQBVBVB3AAQB4AABVhVQBVhVAAh4QAAh3hVhVQhVhVh4AAQh3AAhVBVg");

	var maskedShapeInstanceList = [this.shape];

	for(var shapedInstanceItr = 0; shapedInstanceItr < maskedShapeInstanceList.length; shapedInstanceItr++) {
		maskedShapeInstanceList[shapedInstanceItr].mask = mask;
	}

	this.timeline.addTween(cjs.Tween.get(this.shape).wait(1));

	// Shadow
	this.shape_1 = new cjs.Shape();
	this.shape_1.graphics.lf(["rgba(0,0,0,0.247)","rgba(0,0,0,0)"],[0,1],-17.5,-30.2,17.5,30.3).s().p("AldFeIAAq7IK7AAIAAK7g");

	var maskedShapeInstanceList = [this.shape_1];

	for(var shapedInstanceItr = 0; shapedInstanceItr < maskedShapeInstanceList.length; shapedInstanceItr++) {
		maskedShapeInstanceList[shapedInstanceItr].mask = mask;
	}

	this.timeline.addTween(cjs.Tween.get(this.shape_1).wait(1));

	// Image
	this.shape_2 = new cjs.Shape();
	this.shape_2.graphics.f("#3F3F3F").s().p("AhWC6Qg+gcgcg/QgOgfACghQADggASgcQgXASgHgKQgFgIAGgdQAPhEA2goQA2gnBFAFQAhADAcATQAcATAQAeQgEgeANABQAKAAAWAVQAxAvAIBAQAHA+gkA5QgUAegfAQQgfAQgkgCQAbALgFALQgEAIgcAJQgdAKgbAAQglAAgjgQgAiNguQg4AuAdBNQAbBIBCAXQAWAIAmABQAtABAFgOQACgFgVgPIgdgUQgkgdgCgsQgDgvAqgQQAGgtgxgNQgNgDgNAAQghAAgbAXgAgjBKQAOAwAuARQBEAZA0hAQAyg7gNhEQgEgWgTgjQgVgngQACQgGABgCAaIgCAjQgHAuglAXQgnAZgjgbQgqARANAxgAgehHQAoAVgGAtQAlAbAjgjQAjgjgJgyQgNhIhQgNQhMgMg1AtQgRAPgUAhQgYAmAKANQADAEAYgLIAggQQATgIATAAQAWAAAWALg");
	this.shape_2.setTransform(0.4,0.2);

	this.shape_3 = new cjs.Shape();
	this.shape_3.graphics.f("rgba(0,0,0,0.2)").s().p("AhWC6Qg+gcgcg/QgOgfACghQADggASgcQgXASgHgKQgFgIAGgdQAPhEA2goQA2gnBFAFQAhADAcATQAcATAQAeQgEgeANABQAKAAAWAVQAxAvAIBAQAHA+gkA5QgUAegfAQQgfAQgkgCQAbALgFALQgEAIgcAJQgdAKgbAAQglAAgjgQgAiNguQg4AuAdBNQAbBIBCAXQAWAIAmABQAtABAFgOQACgFgVgPIgdgUQgkgdgCgsQgDgvAqgQQAGgtgxgNQgNgDgNAAQghAAgbAXgAgjBKQAOAwAuARQBEAZA0hAQAyg7gNhEQgEgWgTgjQgVgngQACQgGABgCAaIgCAjQgHAuglAXQgnAZgjgbQgqARANAxgAgehHQAoAVgGAtQAlAbAjgjQAjgjgJgyQgNhIhQgNQhMgMg1AtQgRAPgUAhQgYAmAKANQADAEAYgLIAggQQATgIATAAQAWAAAWALg");
	this.shape_3.setTransform(1.4,1.2);

	this.shape_4 = new cjs.Shape();
	this.shape_4.graphics.f("rgba(230,140,0,0)").s().p("ABGBxQgXgBgRgSIgBgBIAAgDQAIgagNgXQgMgWgbgLQgagKgeADIgLABIgfALQgNAEgLACQgOADgDgGQgKgSAngsQAJgLAPgOQALgKAIgGQArgbA4ACQA5ADAmAdQArAhACA1QABAqgbAgQgbAhghAAIgBAAg");
	this.shape_4.setTransform(-2.3,-9.5);

	this.shape_5 = new cjs.Shape();
	this.shape_5.graphics.f("rgba(230,140,0,0)").s().p("AhGCDQglgTgPgpQgPgoARgdQAMgTAYgFIADgBIABACQATAUAaAAQAZAAAXgSQAWgRAMgcIAEgKIADgNIAEgTQACgOAEgKQAFgNAGAAQAVAAAUA4QAHATADAOIAEAZQACAygfAwQgeAvgtATQgWAJgVAAQgbAAgagNg");
	this.shape_5.setTransform(8.2,3);

	this.shape_6 = new cjs.Shape();
	this.shape_6.graphics.f("#E68C00").s().p("AAnCOQgQgDgRgGQgMgDgKgFQgtgXgbg0QgagyAHgvQAGg1AugdQAjgWApAHQArAHAQAeQALAUgHAYIgBACIgCAAQgbAHgNAWQgMAWADAcQAEAdASAYIAHAIIAKAJIAgAeQAJALgDAGQgHAMgYAAQgQAAgXgFg");
	this.shape_6.setTransform(-8.8,5.9);

	this.shape_7 = new cjs.Shape();
	this.shape_7.graphics.f("#FFFFFF").s().p("Aj3D4QhmhoAAiQQAAiPBmhoQBohmCPAAQCRAABmBmQBnBoAACPQAACQhnBoQhmBmiRAAQiPAAhohmg");

	var maskedShapeInstanceList = [this.shape_2,this.shape_3,this.shape_4,this.shape_5,this.shape_6,this.shape_7];

	for(var shapedInstanceItr = 0; shapedInstanceItr < maskedShapeInstanceList.length; shapedInstanceItr++) {
		maskedShapeInstanceList[shapedInstanceItr].mask = mask;
	}

	this.timeline.addTween(cjs.Tween.get({}).to({state:[{t:this.shape_7},{t:this.shape_6},{t:this.shape_5},{t:this.shape_4},{t:this.shape_3},{t:this.shape_2}]}).wait(1));

	// Shadow_BT
	this.instance = new lib.mc_btn_shadow();
	this.instance.parent = this;
	this.instance.setTransform(-40,-40);

	this.timeline.addTween(cjs.Tween.get(this.instance).wait(1));

	// Background
	this.shape_8 = new cjs.Shape();
	this.shape_8.graphics.f().s("#FFFFFF").ss(1,1,1).p("AEsAAQAAB8hXBZQhZBXh8AAQh7AAhZhXQhXhZAAh8QAAh7BXhZQBZhXB7AAQB8AABZBXQBXBZAAB7g");

	this.shape_9 = new cjs.Shape();
	this.shape_9.graphics.f("#FFFFFF").s().p("AjTDUQhYhYAAh8QAAh7BYhYQBYhYB7AAQB8AABYBYQBYBYAAB7QAAB8hYBYQhYBYh8AAQh7AAhYhYg");

	this.shape_10 = new cjs.Shape();
	this.shape_10.graphics.f("#E68C00").s().p("Aj3D4QhmhnAAiRQAAiQBmhnQBnhmCQAAQCRAABnBmQBmBnAACQQAACRhmBnQhnBmiRAAQiQAAhnhmg");

	this.timeline.addTween(cjs.Tween.get({}).to({state:[{t:this.shape_10},{t:this.shape_9},{t:this.shape_8}]}).wait(1));

	// Shadow_FT
	this.instance_1 = new lib.mc_nav_shadow();
	this.instance_1.parent = this;
	this.instance_1.setTransform(-45,-45);

	this.timeline.addTween(cjs.Tween.get(this.instance_1).wait(1));

}).prototype = getMCSymbolPrototype(lib.mc_btn03, new cjs.Rectangle(-45,-45,90,90), null);


(lib.mc_btn02 = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// Mask (mask)
	var mask = new cjs.Shape();
	mask._off = true;
	mask.graphics.p("AjTDUQhYhYAAh8QAAh7BYhYQBYhYB7AAQB8AABYBYQBYBYAAB7QAAB8hYBYQhYBYh8AAQh7AAhYhYg");

	// Frame
	this.shape = new cjs.Shape();
	this.shape.graphics.lf(["#FFFFFF","#CCCCCC"],[0,1],-17.5,-30.3,17.5,30.3).s().p("AldFeIAAq7IK7AAIAAK7gAjMjMQhVBVAAB3QAAB4BVBVQBVBVB3AAQB4AABVhVQBVhVAAh4QAAh3hVhVQhVhVh4AAQh3AAhVBVg");

	var maskedShapeInstanceList = [this.shape];

	for(var shapedInstanceItr = 0; shapedInstanceItr < maskedShapeInstanceList.length; shapedInstanceItr++) {
		maskedShapeInstanceList[shapedInstanceItr].mask = mask;
	}

	this.timeline.addTween(cjs.Tween.get(this.shape).wait(1));

	// Shadow
	this.shape_1 = new cjs.Shape();
	this.shape_1.graphics.lf(["rgba(0,0,0,0.247)","rgba(0,0,0,0)"],[0,1],-17.5,-30.2,17.5,30.3).s().p("AldFeIAAq7IK7AAIAAK7g");

	var maskedShapeInstanceList = [this.shape_1];

	for(var shapedInstanceItr = 0; shapedInstanceItr < maskedShapeInstanceList.length; shapedInstanceItr++) {
		maskedShapeInstanceList[shapedInstanceItr].mask = mask;
	}

	this.timeline.addTween(cjs.Tween.get(this.shape_1).wait(1));

	// Image
	this.shape_2 = new cjs.Shape();
	this.shape_2.graphics.f("#3F3F3F").s().p("AhWC6Qg+gcgcg/QgOgfACghQADggASgcQgXASgHgKQgFgIAGgdQAPhEA2goQA2gnBFAFQAhADAcATQAcATAQAeQgEgeANABQAKAAAWAVQAxAvAIBAQAHA+gkA5QgUAegfAQQgfAQgkgCQAbALgFALQgEAIgcAJQgdAKgbAAQglAAgjgQgAiNguQg4AuAdBNQAbBIBCAXQAWAIAmABQAtABAFgOQACgFgVgPIgdgUQgkgdgCgsQgDgvAqgQQAGgtgxgNQgNgDgNAAQghAAgbAXgAgjBKQAOAwAuARQBEAZA0hAQAyg7gNhEQgEgWgTgjQgVgngQACQgGABgCAaIgCAjQgHAuglAXQgnAZgjgbQgqARANAxgAgehHQAoAVgGAtQAlAbAjgjQAjgjgJgyQgNhIhQgNQhMgMg1AtQgRAPgUAhQgYAmAKANQADAEAYgLIAggQQATgIATAAQAWAAAWALg");
	this.shape_2.setTransform(0.4,0.2);

	this.shape_3 = new cjs.Shape();
	this.shape_3.graphics.f("rgba(0,0,0,0.2)").s().p("AhWC6Qg+gcgcg/QgOgfACghQADggASgcQgXASgHgKQgFgIAGgdQAPhEA2goQA2gnBFAFQAhADAcATQAcATAQAeQgEgeANABQAKAAAWAVQAxAvAIBAQAHA+gkA5QgUAegfAQQgfAQgkgCQAbALgFALQgEAIgcAJQgdAKgbAAQglAAgjgQgAiNguQg4AuAdBNQAbBIBCAXQAWAIAmABQAtABAFgOQACgFgVgPIgdgUQgkgdgCgsQgDgvAqgQQAGgtgxgNQgNgDgNAAQghAAgbAXgAgjBKQAOAwAuARQBEAZA0hAQAyg7gNhEQgEgWgTgjQgVgngQACQgGABgCAaIgCAjQgHAuglAXQgnAZgjgbQgqARANAxgAgehHQAoAVgGAtQAlAbAjgjQAjgjgJgyQgNhIhQgNQhMgMg1AtQgRAPgUAhQgYAmAKANQADAEAYgLIAggQQATgIATAAQAWAAAWALg");
	this.shape_3.setTransform(1.4,1.2);

	this.shape_4 = new cjs.Shape();
	this.shape_4.graphics.f("rgba(230,140,0,0)").s().p("ABGBxQgXgBgRgSIgBgBIAAgDQAIgagNgXQgMgWgbgLQgagKgeADIgLABIgfALQgNAEgLACQgOADgDgGQgKgSAngsQAJgLAPgOQALgKAIgGQArgbA4ACQA5ADAmAdQArAhACA1QABAqgbAgQgbAhghAAIgBAAg");
	this.shape_4.setTransform(-2.3,-9.5);

	this.shape_5 = new cjs.Shape();
	this.shape_5.graphics.f("#E68C00").s().p("AhGCDQglgTgPgpQgPgoARgdQAMgTAYgFIADgBIABACQATAUAaAAQAZAAAXgSQAWgRAMgcIAEgKIADgNIAEgTQACgOAEgKQAFgNAGAAQAVAAAUA4QAHATADAOIAEAZQACAygfAwQgeAvgtATQgWAJgVAAQgbAAgagNg");
	this.shape_5.setTransform(8.2,3);

	this.shape_6 = new cjs.Shape();
	this.shape_6.graphics.f("rgba(230,140,0,0)").s().p("AAnCOQgQgDgRgGQgMgDgKgFQgtgXgbg0QgagyAHgvQAGg1AugdQAjgWApAHQArAHAQAeQALAUgHAYIgBACIgCAAQgbAHgNAWQgMAWADAcQAEAdASAYIAHAIIAKAJIAgAeQAJALgDAGQgHAMgYAAQgQAAgXgFg");
	this.shape_6.setTransform(-8.8,5.9);

	this.shape_7 = new cjs.Shape();
	this.shape_7.graphics.f("#FFFFFF").s().p("Aj3D4QhmhoAAiQQAAiPBmhoQBohmCPAAQCRAABmBmQBnBoAACPQAACQhnBoQhmBmiRAAQiPAAhohmg");

	var maskedShapeInstanceList = [this.shape_2,this.shape_3,this.shape_4,this.shape_5,this.shape_6,this.shape_7];

	for(var shapedInstanceItr = 0; shapedInstanceItr < maskedShapeInstanceList.length; shapedInstanceItr++) {
		maskedShapeInstanceList[shapedInstanceItr].mask = mask;
	}

	this.timeline.addTween(cjs.Tween.get({}).to({state:[{t:this.shape_7},{t:this.shape_6},{t:this.shape_5},{t:this.shape_4},{t:this.shape_3},{t:this.shape_2}]}).wait(1));

	// Shadow_BT
	this.instance = new lib.mc_btn_shadow();
	this.instance.parent = this;
	this.instance.setTransform(-40,-40);

	this.timeline.addTween(cjs.Tween.get(this.instance).wait(1));

	// Background
	this.shape_8 = new cjs.Shape();
	this.shape_8.graphics.f().s("#FFFFFF").ss(1,1,1).p("AEsAAQAAB8hXBZQhZBXh8AAQh7AAhZhXQhXhZAAh8QAAh7BXhZQBZhXB7AAQB8AABZBXQBXBZAAB7g");

	this.shape_9 = new cjs.Shape();
	this.shape_9.graphics.f("#FFFFFF").s().p("AjTDUQhYhYAAh8QAAh7BYhYQBYhYB7AAQB8AABYBYQBYBYAAB7QAAB8hYBYQhYBYh8AAQh7AAhYhYg");

	this.shape_10 = new cjs.Shape();
	this.shape_10.graphics.f("#E68C00").s().p("Aj3D4QhmhnAAiRQAAiQBmhnQBnhmCQAAQCRAABnBmQBmBnAACQQAACRhmBnQhnBmiRAAQiQAAhnhmg");

	this.timeline.addTween(cjs.Tween.get({}).to({state:[{t:this.shape_10},{t:this.shape_9},{t:this.shape_8}]}).wait(1));

	// Shadow_FT
	this.instance_1 = new lib.mc_nav_shadow();
	this.instance_1.parent = this;
	this.instance_1.setTransform(-45,-45);

	this.timeline.addTween(cjs.Tween.get(this.instance_1).wait(1));

}).prototype = getMCSymbolPrototype(lib.mc_btn02, new cjs.Rectangle(-45,-45,90,90), null);


(lib.mc_btn01 = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// Mask (mask)
	var mask = new cjs.Shape();
	mask._off = true;
	mask.graphics.p("AjTDUQhYhYAAh8QAAh7BYhYQBYhYB7AAQB8AABYBYQBYBYAAB7QAAB8hYBYQhYBYh8AAQh7AAhYhYg");

	// Frame
	this.shape = new cjs.Shape();
	this.shape.graphics.lf(["#FFFFFF","#CCCCCC"],[0,1],-17.5,-30.3,17.5,30.3).s().p("AldFeIAAq7IK7AAIAAK7gAjMjMQhVBVAAB3QAAB4BVBVQBVBVB3AAQB4AABVhVQBVhVAAh4QAAh3hVhVQhVhVh4AAQh3AAhVBVg");

	var maskedShapeInstanceList = [this.shape];

	for(var shapedInstanceItr = 0; shapedInstanceItr < maskedShapeInstanceList.length; shapedInstanceItr++) {
		maskedShapeInstanceList[shapedInstanceItr].mask = mask;
	}

	this.timeline.addTween(cjs.Tween.get(this.shape).wait(1));

	// Shadow
	this.shape_1 = new cjs.Shape();
	this.shape_1.graphics.lf(["rgba(0,0,0,0.247)","rgba(0,0,0,0)"],[0,1],-17.5,-30.2,17.5,30.3).s().p("AldFeIAAq7IK7AAIAAK7g");

	var maskedShapeInstanceList = [this.shape_1];

	for(var shapedInstanceItr = 0; shapedInstanceItr < maskedShapeInstanceList.length; shapedInstanceItr++) {
		maskedShapeInstanceList[shapedInstanceItr].mask = mask;
	}

	this.timeline.addTween(cjs.Tween.get(this.shape_1).wait(1));

	// Image
	this.shape_2 = new cjs.Shape();
	this.shape_2.graphics.f("#3F3F3F").s().p("AhWC6Qg+gcgcg/QgOgfACghQADggASgcQgXASgHgKQgFgIAGgdQAPhEA2goQA2gnBFAFQAhADAcATQAcATAQAeQgEgeANABQAKAAAWAVQAxAvAIBAQAHA+gkA5QgUAegfAQQgfAQgkgCQAbALgFALQgEAIgcAJQgdAKgbAAQglAAgjgQgAiNguQg4AuAdBNQAbBIBCAXQAWAIAmABQAtABAFgOQACgFgVgPIgdgUQgkgdgCgsQgDgvAqgQQAGgtgxgNQgNgDgNAAQghAAgbAXgAgjBKQAOAwAuARQBEAZA0hAQAyg7gNhEQgEgWgTgjQgVgngQACQgGABgCAaIgCAjQgHAuglAXQgnAZgjgbQgqARANAxgAgehHQAoAVgGAtQAlAbAjgjQAjgjgJgyQgNhIhQgNQhMgMg1AtQgRAPgUAhQgYAmAKANQADAEAYgLIAggQQATgIATAAQAWAAAWALg");
	this.shape_2.setTransform(0.4,0.2);

	this.shape_3 = new cjs.Shape();
	this.shape_3.graphics.f("rgba(0,0,0,0.2)").s().p("AhWC6Qg+gcgcg/QgOgfACghQADggASgcQgXASgHgKQgFgIAGgdQAPhEA2goQA2gnBFAFQAhADAcATQAcATAQAeQgEgeANABQAKAAAWAVQAxAvAIBAQAHA+gkA5QgUAegfAQQgfAQgkgCQAbALgFALQgEAIgcAJQgdAKgbAAQglAAgjgQgAiNguQg4AuAdBNQAbBIBCAXQAWAIAmABQAtABAFgOQACgFgVgPIgdgUQgkgdgCgsQgDgvAqgQQAGgtgxgNQgNgDgNAAQghAAgbAXgAgjBKQAOAwAuARQBEAZA0hAQAyg7gNhEQgEgWgTgjQgVgngQACQgGABgCAaIgCAjQgHAuglAXQgnAZgjgbQgqARANAxgAgehHQAoAVgGAtQAlAbAjgjQAjgjgJgyQgNhIhQgNQhMgMg1AtQgRAPgUAhQgYAmAKANQADAEAYgLIAggQQATgIATAAQAWAAAWALg");
	this.shape_3.setTransform(1.4,1.2);

	this.shape_4 = new cjs.Shape();
	this.shape_4.graphics.f("#E68C00").s().p("ABGBxQgXgBgRgSIgBgBIAAgDQAIgagNgXQgMgWgbgLQgagKgeADIgLABIgfALQgNAEgLACQgOADgDgGQgKgSAngsQAJgLAPgOQALgKAIgGQArgbA4ACQA5ADAmAdQArAhACA1QABAqgbAgQgbAhghAAIgBAAg");
	this.shape_4.setTransform(-2.3,-9.5);

	this.shape_5 = new cjs.Shape();
	this.shape_5.graphics.f("rgba(230,140,0,0)").s().p("AhGCDQglgTgPgpQgPgoARgdQAMgTAYgFIADgBIABACQATAUAaAAQAZAAAXgSQAWgRAMgcIAEgKIADgNIAEgTQACgOAEgKQAFgNAGAAQAVAAAUA4QAHATADAOIAEAZQACAygfAwQgeAvgtATQgWAJgVAAQgbAAgagNg");
	this.shape_5.setTransform(8.2,3);

	this.shape_6 = new cjs.Shape();
	this.shape_6.graphics.f("rgba(230,140,0,0)").s().p("AAnCOQgQgDgRgGQgMgDgKgFQgtgXgbg0QgagyAHgvQAGg1AugdQAjgWApAHQArAHAQAeQALAUgHAYIgBACIgCAAQgbAHgNAWQgMAWADAcQAEAdASAYIAHAIIAKAJIAgAeQAJALgDAGQgHAMgYAAQgQAAgXgFg");
	this.shape_6.setTransform(-8.8,5.9);

	this.shape_7 = new cjs.Shape();
	this.shape_7.graphics.f("#FFFFFF").s().p("Aj3D4QhmhoAAiQQAAiPBmhoQBohmCPAAQCRAABmBmQBnBoAACPQAACQhnBoQhmBmiRAAQiPAAhohmg");

	var maskedShapeInstanceList = [this.shape_2,this.shape_3,this.shape_4,this.shape_5,this.shape_6,this.shape_7];

	for(var shapedInstanceItr = 0; shapedInstanceItr < maskedShapeInstanceList.length; shapedInstanceItr++) {
		maskedShapeInstanceList[shapedInstanceItr].mask = mask;
	}

	this.timeline.addTween(cjs.Tween.get({}).to({state:[{t:this.shape_7},{t:this.shape_6},{t:this.shape_5},{t:this.shape_4},{t:this.shape_3},{t:this.shape_2}]}).wait(1));

	// Shadow_BT
	this.instance = new lib.mc_btn_shadow();
	this.instance.parent = this;
	this.instance.setTransform(-40,-40);

	this.timeline.addTween(cjs.Tween.get(this.instance).wait(1));

	// Background
	this.shape_8 = new cjs.Shape();
	this.shape_8.graphics.f().s("#FFFFFF").ss(1,1,1).p("AEsAAQAAB8hXBZQhZBXh8AAQh7AAhZhXQhXhZAAh8QAAh7BXhZQBZhXB7AAQB8AABZBXQBXBZAAB7g");

	this.shape_9 = new cjs.Shape();
	this.shape_9.graphics.f("#FFFFFF").s().p("AjTDUQhYhYAAh8QAAh7BYhYQBYhYB7AAQB8AABYBYQBYBYAAB7QAAB8hYBYQhYBYh8AAQh7AAhYhYg");

	this.shape_10 = new cjs.Shape();
	this.shape_10.graphics.f("#E68C00").s().p("Aj3D4QhmhnAAiRQAAiQBmhnQBnhmCQAAQCRAABnBmQBmBnAACQQAACRhmBnQhnBmiRAAQiQAAhnhmg");

	this.timeline.addTween(cjs.Tween.get({}).to({state:[{t:this.shape_10},{t:this.shape_9},{t:this.shape_8}]}).wait(1));

	// Shadow_FT
	this.instance_1 = new lib.mc_nav_shadow();
	this.instance_1.parent = this;
	this.instance_1.setTransform(-45,-45);

	this.timeline.addTween(cjs.Tween.get(this.instance_1).wait(1));

}).prototype = getMCSymbolPrototype(lib.mc_btn01, new cjs.Rectangle(-45,-45,90,90), null);


(lib.buttons = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// Capa_1
	this.instance = new lib.buttons_graph("single",0);
	this.instance.parent = this;

	this.timeline.addTween(cjs.Tween.get(this.instance).wait(1));

}).prototype = getMCSymbolPrototype(lib.buttons, new cjs.Rectangle(-40,-40,80,80), null);


// stage content:
(lib.mainmenu_vese = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{goStart:9,paso01:19,paso02:29,resultados01:39,paso03:49,paso04:59,resultados02:69,paso05:79,paso06:89,resultados03:99});

	// timeline functions:
	this.frame_0 = function() {
		var frequency = 30;
		stage.enableMouseOver(frequency);
		
		var _this = this;
		_this.stop();
		
		/************************************************************
			BOTONES BTN [DATA]
		************************************************************/
		
		/** RESULTADOS 1+2 **/
		_this.btn_01.name = "btn_01";
		_this.btn_01_winOpen = Array(liga_1, "_parent");
		
		/** RESULTADOS 3+4 **/
		_this.btn_02.name = "btn_02";
		_this.btn_02_winOpen = Array(liga_2, "_parent");
		
		/** RESULTADOS 5+6 **/
		_this.btn_03.name = "btn_03";
		_this.btn_03_winOpen = Array(liga_3, "_parent");
		
		/************************************************************
			BOTONES BTN [LISTENER]
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
		
		/************************************************************
			BOTONES BTN [CURSOR]
		************************************************************/
		
		_this.btn_01.cursor = "pointer";
		_this.btn_02.cursor = "pointer";
		_this.btn_03.cursor = "pointer";
		
		/************************************************************
			BOTONES NAV [DATA]
		************************************************************/
		
		/** PASO 1 **/
		_this.nav_01.name = "nav_01";
		
		/** PASO 2 **/
		_this.nav_02.name = "nav_02";
		
		/** PASO 3 **/
		_this.nav_03.name = "nav_03";
		
		/** PASO 4 **/
		_this.nav_04.name = "nav_04";
		
		/** PASO 5 **/
		_this.nav_05.name = "nav_05";
		
		/** PASO 6 **/
		_this.nav_06.name = "nav_06";
		
		/************************************************************
			BOTONES NAV [LISTENER]
		************************************************************/
		
		_this.nav_01.addEventListener("mouseover", mouseOver);
		_this.nav_01.addEventListener("mouseout", mouseOut);
		//_this.nav_01.addEventListener("click", mouseClick.bind(_this));
		
		_this.nav_02.addEventListener("mouseover", mouseOver);
		_this.nav_02.addEventListener("mouseout", mouseOut);
		//_this.nav_02.addEventListener("click", mouseClick.bind(_this));
		
		_this.nav_03.addEventListener("mouseover", mouseOver);
		_this.nav_03.addEventListener("mouseout", mouseOut);
		//_this.nav_03.addEventListener("click", mouseClick.bind(_this));
		
		_this.nav_04.addEventListener("mouseover", mouseOver);
		_this.nav_04.addEventListener("mouseout", mouseOut);
		//_this.nav_04.addEventListener("click", mouseClick.bind(_this));
		
		_this.nav_05.addEventListener("mouseover", mouseOver);
		_this.nav_05.addEventListener("mouseout", mouseOut);
		//_this.nav_05.addEventListener("click", mouseClick.bind(_this));
		
		_this.nav_06.addEventListener("mouseover", mouseOver);
		_this.nav_06.addEventListener("mouseout", mouseOut);
		//_this.nav_06.addEventListener("click", mouseClick.bind(_this));
		
		/************************************************************
			BOTONES NAV [CURSOR]
		************************************************************/
		
		//_this.nav_01.cursor = "pointer";
		//_this.nav_02.cursor = "pointer";
		//_this.nav_03.cursor = "pointer";
		//_this.nav_04.cursor = "pointer";
		//_this.nav_05.cursor = "pointer";
		//_this.nav_06.cursor = "pointer";
		
		/************************************************************
			REGIONES [BOTONES-FUNCTIONS]
		************************************************************/
		
		var eventName, nameSplit, groupAni, itemGo, itemAni, itemScale;
		
		function mouseOver(event) {
			eventName = event.target.parent.parent.name;
			nameSplit = eventName.split("_");
			if (nameSplit[0] == "btn") {
				itemGo = "resultados" + nameSplit[1];
				itemAni = eval("_this.mc_btn" + nameSplit[1]);
			}
			if (nameSplit[0] == "nav") {
				itemGo = "paso" + nameSplit[1];
				itemAni = eval("_this.mc_nav" + nameSplit[1]);
			}
			_this.gotoAndStop(itemGo);
			TweenMax.to(itemAni, 0.2, {
				scaleX: 1.26,
				scaleY: 1.26,
				ease: Power2.easeOut
			});
			TweenMax.to(_this.mc_title_mask, 0.4, {
				scaleX: 0.1,
				scaleY: 0.1,
				alpha: 0.0,
				ease: Sine.easeInOut
			});
		}
		
		function mouseOut(event) {
			_this.gotoAndStop("goStart");
			TweenMax.to(itemAni, 0.6, {
				scaleX: 1.0,
				scaleY: 1.0
			});
			TweenMax.to(_this.mc_title_mask, 0.2, {
				scaleX: 1.0,
				scaleY: 1.0,
				alpha: 1
			});
		}
		
		var winOpen;
		
		function mouseClick(event) {
			winOpen = eval("this." + eventName + "_winOpen");
			if (winOpen != "") {
				window.open(winOpen[0], winOpen[1]);
			};
		}
	}
	this.frame_9 = function() {
		this.stop();
	}
	this.frame_19 = function() {
		this.stop();
	}
	this.frame_29 = function() {
		this.stop();
	}
	this.frame_39 = function() {
		this.stop();
	}
	this.frame_49 = function() {
		this.stop();
	}
	this.frame_59 = function() {
		this.stop();
	}
	this.frame_69 = function() {
		this.stop();
	}
	this.frame_79 = function() {
		this.stop();
	}
	this.frame_89 = function() {
		this.stop();
	}
	this.frame_99 = function() {
		this.stop();
	}

	// actions tween:
	this.timeline.addTween(cjs.Tween.get(this).call(this.frame_0).wait(9).call(this.frame_9).wait(10).call(this.frame_19).wait(10).call(this.frame_29).wait(10).call(this.frame_39).wait(10).call(this.frame_49).wait(10).call(this.frame_59).wait(10).call(this.frame_69).wait(10).call(this.frame_79).wait(10).call(this.frame_89).wait(10).call(this.frame_99).wait(10));

	// BTN_Pasos
	this.nav_06 = new lib.buttons();
	this.nav_06.name = "nav_06";
	this.nav_06.parent = this;
	this.nav_06.setTransform(194.4,287.5);

	this.nav_05 = new lib.buttons();
	this.nav_05.name = "nav_05";
	this.nav_05.parent = this;
	this.nav_05.setTransform(261.1,382.8);

	this.nav_04 = new lib.buttons();
	this.nav_04.name = "nav_04";
	this.nav_04.parent = this;
	this.nav_04.setTransform(445.6,287.5);

	this.nav_03 = new lib.buttons();
	this.nav_03.name = "nav_03";
	this.nav_03.parent = this;
	this.nav_03.setTransform(494.7,182.1);

	this.nav_02 = new lib.buttons();
	this.nav_02.name = "nav_02";
	this.nav_02.parent = this;
	this.nav_02.setTransform(320,70);

	this.nav_01 = new lib.buttons();
	this.nav_01.name = "nav_01";
	this.nav_01.parent = this;
	this.nav_01.setTransform(204.2,80.1);

	this.btn_03 = new lib.buttons();
	this.btn_03.name = "btn_03";
	this.btn_03.parent = this;
	this.btn_03.setTransform(204.5,171.7);

	this.btn_02 = new lib.buttons();
	this.btn_02.name = "btn_02";
	this.btn_02.parent = this;
	this.btn_02.setTransform(340.2,336.7);

	this.btn_01 = new lib.buttons();
	this.btn_01.name = "btn_01";
	this.btn_01.parent = this;
	this.btn_01.setTransform(415.3,136.7);

	this.timeline.addTween(cjs.Tween.get({}).to({state:[{t:this.btn_01},{t:this.btn_02},{t:this.btn_03},{t:this.nav_01},{t:this.nav_02},{t:this.nav_03},{t:this.nav_04},{t:this.nav_05},{t:this.nav_06}]}).wait(109));

	// MC_Pasos
	this.mc_nav02 = new lib.mc_nav02_1();
	this.mc_nav02.name = "mc_nav02";
	this.mc_nav02.parent = this;
	this.mc_nav02.setTransform(320,70);

	this.mc_btn01 = new lib.mc_btn01();
	this.mc_btn01.name = "mc_btn01";
	this.mc_btn01.parent = this;
	this.mc_btn01.setTransform(415.2,136.7);

	this.mc_nav01 = new lib.mc_nav01_1();
	this.mc_nav01.name = "mc_nav01";
	this.mc_nav01.parent = this;
	this.mc_nav01.setTransform(204.1,80.2);

	this.mc_btn03 = new lib.mc_btn03();
	this.mc_btn03.name = "mc_btn03";
	this.mc_btn03.parent = this;
	this.mc_btn03.setTransform(204.5,171.7);

	this.mc_btn02 = new lib.mc_btn02();
	this.mc_btn02.name = "mc_btn02";
	this.mc_btn02.parent = this;
	this.mc_btn02.setTransform(340.2,336.7);

	this.mc_nav06 = new lib.mc_nav06_1();
	this.mc_nav06.name = "mc_nav06";
	this.mc_nav06.parent = this;
	this.mc_nav06.setTransform(194.4,287.6);

	this.mc_nav05 = new lib.mc_nav05_1();
	this.mc_nav05.name = "mc_nav05";
	this.mc_nav05.parent = this;
	this.mc_nav05.setTransform(261.1,382.8);

	this.mc_nav04 = new lib.mc_nav04_1();
	this.mc_nav04.name = "mc_nav04";
	this.mc_nav04.parent = this;
	this.mc_nav04.setTransform(445.6,287.6);

	this.mc_nav03 = new lib.mc_nav03_1();
	this.mc_nav03.name = "mc_nav03";
	this.mc_nav03.parent = this;
	this.mc_nav03.setTransform(494.7,182.2);

	this.timeline.addTween(cjs.Tween.get({}).to({state:[{t:this.mc_nav03},{t:this.mc_nav04},{t:this.mc_nav05},{t:this.mc_nav06},{t:this.mc_btn02},{t:this.mc_btn03},{t:this.mc_nav01},{t:this.mc_btn01},{t:this.mc_nav02}]}).wait(109));

	// MC_Formas
	this.mc_formas = new lib.mc_formas();
	this.mc_formas.name = "mc_formas";
	this.mc_formas.parent = this;

	this.timeline.addTween(cjs.Tween.get(this.mc_formas).wait(109));

	// TXT_Titulo
	this.shape = new cjs.Shape();
	this.shape.graphics.f("#000000").s().p("AgeBLQgPgGgIgMQgIgNAAgQIATgCQABAMAFAIQAFAHALAFQALAFANAAQAMAAAIgEQAJgDAGgGQADgHAAgHQAAgHgDgGQgFgFgKgEQgGgDgVgFQgWgFgIgEQgLgGgGgIQgFgJgBgLQABgMAGgKQAHgLANgFQANgFAQAAQAQAAAOAFQANAGAHALQAIALAAAOIgUABQgBgPgKgHQgJgIgSAAQgSAAgJAHQgJAHAAAKQABAIAFAGQAHAFAYAGQAZAGAKAEQAOAFAGAKQAHAKgBAMQAAANgGALQgIALgNAGQgOAGgRAAQgUAAgOgGg");
	this.shape.setTransform(330.3,229.6);

	this.shape_1 = new cjs.Shape();
	this.shape_1.graphics.f("#000000").s().p("Ag6BPIAAidIBxAAIAAATIhcAAIAAAwIBWAAIAAASIhWAAIAAA1IBgAAIAAATg");
	this.shape_1.setTransform(316,229.6);

	this.shape_2 = new cjs.Shape();
	this.shape_2.graphics.f("#000000").s().p("AgJBPIAAidIATAAIAACdg");
	this.shape_2.setTransform(305.4,229.6);

	this.shape_3 = new cjs.Shape();
	this.shape_3.graphics.f("#000000").s().p("AgkAsQgQgPABgcQgBgcAQgQQAOgPAXAAQAWAAAPAPQAPAPAAAcIAAAFIhVAAQABATAKAKQAJAKAOgBQALAAAHgFQAHgGAFgLIAUACQgEARgNAKQgNAKgUAAQgYAAgOgQgAgVgiQgIAJgCAPIA/AAQgBgPgGgGQgJgMgPAAQgNAAgJAJg");
	this.shape_3.setTransform(354.8,203.2);

	this.shape_4 = new cjs.Shape();
	this.shape_4.graphics.f("#000000").s().p("AgZA2QgJgDgEgGQgEgGgCgJQgBgFAAgNIAAhFIATAAIAAA+QAAAPABAFQACAIAGAEQAGAFAJAAQAHAAAIgFQAIgEADgIQADgIAAgOIAAg8IATAAIAABxIgRAAIAAgRQgNATgWAAQgKAAgJgEg");
	this.shape_4.setTransform(342.5,203.3);

	this.shape_5 = new cjs.Shape();
	this.shape_5.graphics.f("#000000").s().p("AAeBQIAAg3QgFAFgHAFQgJAEgIAAQgUAAgOgQQgPgQgBgbQABgSAGgOQAGgNALgHQALgHAOAAQAUAAAMARIAAgPIARAAIAACdgAgUg1QgIALgBAWQAAAVAKALQAJALAMAAQAMAAAJgKQAJgLAAgUQAAgXgJgMQgJgLgNAAQgMAAgJALg");
	this.shape_5.setTransform(330,205.3);

	this.shape_6 = new cjs.Shape();
	this.shape_6.graphics.f("#000000").s().p("AgmAsQgOgPAAgdQAAgfARgPQAPgMAUAAQAYAAAPAPQAOAPAAAbQAAAWgGAMQgHANgMAGQgNAIgPAAQgXAAgPgQgAgXggQgKALAAAVQAAAWAKALQAKAKANAAQAOABAKgLQAKgLAAgWQAAgVgKgKQgKgMgOAAQgNAAgKALg");
	this.shape_6.setTransform(318.1,203.2);

	this.shape_7 = new cjs.Shape();
	this.shape_7.graphics.f("#000000").s().p("AgQBQIAAhiIgRAAIAAgPIARAAIAAgMQAAgMACgFQADgIAHgFQAHgEAMAAQAJAAAKACIgEARIgLgBQgJAAgDADQgEAEAAALIAAAKIAWAAIAAAPIgWAAIAABig");
	this.shape_7.setTransform(309.5,200.9);

	this.shape_8 = new cjs.Shape();
	this.shape_8.graphics.f("#000000").s().p("AAbA6IAAhEQAAgMgCgGQgCgGgGgDQgGgEgIAAQgLAAgJAIQgJAIAAAWIAAA9IgTAAIAAhxIARAAIAAAQQANgSAWAAQALAAAIADQAJAEAEAGQAFAGABAIIABATIAABFg");
	this.shape_8.setTransform(299.7,203.1);

	this.shape_9 = new cjs.Shape();
	this.shape_9.graphics.f("#000000").s().p("Ag6BPIAAidIBxAAIAAATIhcAAIAAAwIBWAAIAAASIhWAAIAAA1IBgAAIAAATg");
	this.shape_9.setTransform(286.6,201);

	this.shape_10 = new cjs.Shape();
	this.shape_10.graphics.f("rgba(0,0,0,0.2)").s().p("AgeBLQgPgGgIgMQgIgNAAgQIATgCQABAMAGAIQAFAHAKAFQALAFAMAAQANAAAIgEQAKgDAFgGQADgHAAgHQAAgHgDgGQgFgFgKgEQgGgDgVgFQgWgFgIgEQgLgGgGgIQgGgJAAgLQAAgMAHgKQAHgLANgFQANgFAQAAQAQAAAOAFQANAGAHALQAIALAAAOIgUABQgBgPgKgHQgJgIgSAAQgSAAgJAHQgJAHABAKQAAAIAFAGQAHAFAYAGQAZAGAKAEQAOAFAGAKQAHAKAAAMQgBANgGALQgIALgNAGQgOAGgRAAQgUAAgOgGg");
	this.shape_10.setTransform(331.3,230.6);

	this.shape_11 = new cjs.Shape();
	this.shape_11.graphics.f("rgba(0,0,0,0.2)").s().p("Ag6BPIAAidIBxAAIAAATIhcAAIAAAwIBWAAIAAASIhWAAIAAA1IBgAAIAAATg");
	this.shape_11.setTransform(317,230.6);

	this.shape_12 = new cjs.Shape();
	this.shape_12.graphics.f("rgba(0,0,0,0.2)").s().p("AgJBPIAAidIATAAIAACdg");
	this.shape_12.setTransform(306.4,230.6);

	this.shape_13 = new cjs.Shape();
	this.shape_13.graphics.f("rgba(0,0,0,0.2)").s().p("AgkAsQgPgPgBgcQABgcAPgQQAOgPAXAAQAWAAAPAPQAPAPAAAcIAAAFIhVAAQABASAKAKQAJALAOgBQAKABAIgGQAIgFAEgMIAUACQgEARgNAKQgNAJgUAAQgYAAgOgPgAgVgiQgIAJgCAPIA/AAQgBgPgGgGQgJgMgPAAQgNAAgJAJg");
	this.shape_13.setTransform(355.8,204.2);

	this.shape_14 = new cjs.Shape();
	this.shape_14.graphics.f("rgba(0,0,0,0.2)").s().p("AgZA2QgJgDgEgGQgEgGgCgJQgBgFAAgNIAAhFIATAAIAAA+QAAAPABAFQACAIAGAEQAGAFAJAAQAHAAAIgFQAIgEADgIQADgIAAgOIAAg8IATAAIAABxIgRAAIAAgRQgNATgWAAQgKAAgJgEg");
	this.shape_14.setTransform(343.5,204.3);

	this.shape_15 = new cjs.Shape();
	this.shape_15.graphics.f("rgba(0,0,0,0.2)").s().p("AAeBQIAAg3QgFAFgHAFQgJAEgIAAQgUAAgOgQQgPgQgBgbQABgSAGgOQAFgNAMgHQALgHAOAAQAUAAAMARIAAgOIARAAIAACcgAgUg1QgIAKgBAXQAAAVAKALQAJALAMAAQAMAAAJgKQAJgLAAgUQAAgXgJgMQgJgLgNAAQgMAAgJALg");
	this.shape_15.setTransform(331,206.3);

	this.shape_16 = new cjs.Shape();
	this.shape_16.graphics.f("rgba(0,0,0,0.2)").s().p("AgmAsQgOgPAAgdQAAgeARgQQAPgMAUAAQAYAAAPAPQAOAPAAAbQAAAWgGAMQgHAMgMAHQgNAIgPgBQgXAAgPgPgAgXggQgKALAAAVQAAAWAKALQAKAKANAAQAOABAKgMQAKgKAAgWQAAgVgKgKQgKgLgOAAQgNgBgKALg");
	this.shape_16.setTransform(319.1,204.2);

	this.shape_17 = new cjs.Shape();
	this.shape_17.graphics.f("rgba(0,0,0,0.2)").s().p("AgQBQIAAhiIgRAAIAAgPIARAAIAAgMQAAgMACgFQAEgIAGgFQAHgEAMAAQAJAAAKACIgEAQIgLAAQgJAAgDADQgEAEAAALIAAAKIAWAAIAAAPIgWAAIAABig");
	this.shape_17.setTransform(310.5,201.9);

	this.shape_18 = new cjs.Shape();
	this.shape_18.graphics.f("rgba(0,0,0,0.2)").s().p("AAbA6IAAhEQAAgMgCgGQgCgGgGgDQgGgEgIAAQgLAAgJAIQgJAIAAAWIAAA9IgTAAIAAhxIARAAIAAAQQANgSAWAAQALAAAIADQAJAEAEAGQAFAGABAIIABATIAABFg");
	this.shape_18.setTransform(300.7,204.1);

	this.shape_19 = new cjs.Shape();
	this.shape_19.graphics.f("rgba(0,0,0,0.2)").s().p("Ag6BPIAAidIBxAAIAAATIhcAAIAAAwIBWAAIAAASIhWAAIAAA1IBgAAIAAATg");
	this.shape_19.setTransform(287.6,202);

	this.timeline.addTween(cjs.Tween.get({}).to({state:[{t:this.shape_19},{t:this.shape_18},{t:this.shape_17},{t:this.shape_16},{t:this.shape_15},{t:this.shape_14},{t:this.shape_13},{t:this.shape_12},{t:this.shape_11},{t:this.shape_10},{t:this.shape_9},{t:this.shape_8},{t:this.shape_7},{t:this.shape_6},{t:this.shape_5},{t:this.shape_4},{t:this.shape_3},{t:this.shape_2},{t:this.shape_1},{t:this.shape}]}).to({state:[]},19).wait(90));

	// MC_Mask
	this.mc_title_mask = new lib.mc_title_mask();
	this.mc_title_mask.name = "mc_title_mask";
	this.mc_title_mask.parent = this;
	this.mc_title_mask.setTransform(320,215);

	this.timeline.addTween(cjs.Tween.get(this.mc_title_mask).wait(109));

	// itemGo
	this.shape_20 = new cjs.Shape();
	this.shape_20.graphics.f("#000000").s().p("AAJBPIAAh6QgGAHgLAGQgLAHgJADIAAgSQAQgIAMgLQAMgLAEgKIANAAIAACdg");
	this.shape_20.setTransform(347.3,186);

	this.shape_21 = new cjs.Shape();
	this.shape_21.graphics.f("#000000").s().p("AgmAsQgOgPAAgdQAAgeARgQQAPgMAUAAQAYAAAPAPQAOAPAAAbQAAAWgGAMQgHANgMAGQgNAIgPgBQgXAAgPgPgAgXggQgKALAAAVQAAAWAKALQAKALANgBQAOAAAKgLQAKgKAAgWQAAgVgKgLQgKgLgOABQgNAAgKAKg");
	this.shape_21.setTransform(329.7,188.2);

	this.shape_22 = new cjs.Shape();
	this.shape_22.graphics.f("#000000").s().p("AggAyQgLgJgDgSIATgDQABALAIAHQAHAFAMAAQAOAAAGgEQAGgGAAgIQAAgGgFgEQgEgCgQgEQgUgGgJgDQgIgEgEgHQgEgGAAgJQAAgHADgHQAEgHAGgDQAEgEAIgDQAIgCAJABQAMAAAKADQAKAEAFAHQAFAGACAMIgTACQgBgJgGgFQgHgFgKAAQgNAAgGAEQgGAFAAAGQAAADADADQACAEAFACIAQAFQAVAGAIADQAIACAFAHQAEAGAAAKQAAAKgFAIQgGAJgLAFQgKAFgOgBQgVABgMgKg");
	this.shape_22.setTransform(318.1,188.2);

	this.shape_23 = new cjs.Shape();
	this.shape_23.graphics.f("#000000").s().p("AgpAyQgKgJAAgOQAAgJADgGQAEgIAGgDQAHgDAHgDIASgCQAWgEALgDIAAgGQAAgMgFgEQgIgGgOAAQgNgBgHAFQgGAFgEAMIgSgCQADgMAFgIQAGgHAMgFQALgEANABQAPAAAJADQAJADAFAFQADAGADAIIABASIAAAYQAAAbABAHQABAIADAGIgUAAQgCgGgBgIQgLAJgKAEQgJAEgLgBQgTABgKgKgAgDAHQgNACgFACQgEACgDAFQgDADAAAGQAAAHAGAFQAGAFALABQAKgBAJgFQAJgEADgJQAEgGAAgNIAAgHQgKAEgUADg");
	this.shape_23.setTransform(306.5,188.2);

	this.shape_24 = new cjs.Shape();
	this.shape_24.graphics.f("#000000").s().p("Ag7BPIAAidIA7AAQAPAAAJACQALACAIAFQAIAGAEAJQAFAKAAAMQAAAUgNANQgNAOghAAIgnAAIAABAgAgmgDIAnAAQAVAAAIgHQAJgIgBgOQABgJgFgHQgFgHgJgDQgEgBgPAAIgnAAg");
	this.shape_24.setTransform(293.5,186);

	this.shape_25 = new cjs.Shape();
	this.shape_25.graphics.f("#000000").s().p("AgXAcQgKgKAAgSQAAgTALgKQAKgIAMAAQAPAAAJAKQAKAKAAARQAAANgEAIQgEAIgIAEQgJAFgJAAQgOAAgJgKgAgOgUQgGAHAAANQAAAOAGAHQAGAHAIAAQAKAAAFgHQAHgHgBgOQABgNgHgHQgFgHgKAAQgIAAgGAHg");
	this.shape_25.setTransform(348.4,238.6);

	this.shape_26 = new cjs.Shape();
	this.shape_26.graphics.f("#000000").s().p("AgFAyIAAhIIALAAIAABIgAgFgjIAAgOIALAAIAAAOg");
	this.shape_26.setTransform(343,237.3);

	this.shape_27 = new cjs.Shape();
	this.shape_27.graphics.f("#000000").s().p("AgPAuQgHgFgEgIQgEgJAAgLQAAgLADgIQAEgJAHgEQAHgFAJAAQAGAAAFADQAFADADAEIAAgkIAMAAIAABjIgLAAIAAgJQgHALgNAAQgIAAgHgFgAgMgHQgGAHAAANQAAAOAGAHQAGAHAHAAQAIAAAGgHQAFgGAAgOQAAgOgFgHQgGgHgJAAQgHAAgFAHg");
	this.shape_27.setTransform(337.3,237.3);

	this.shape_28 = new cjs.Shape();
	this.shape_28.graphics.f("#000000").s().p("AgQAjQgFgDgDgDQgDgEgBgFIAAgMIAAgsIAMAAIAAAnIAAANQABAFAFADQADADAGAAQAFAAAEgEQAFgCACgFQACgFAAgJIAAgmIAMAAIAABIIgKAAIAAgLQgJAMgOAAQgGAAgGgCg");
	this.shape_28.setTransform(329.7,238.7);

	this.shape_29 = new cjs.Shape();
	this.shape_29.graphics.f("#000000").s().p("AgBAwQgEgDgBgDQgCgDAAgMIAAgoIgJAAIAAgKIAJAAIAAgSIALgHIAAAZIANAAIAAAKIgNAAIAAApQAAAFABABIACADIAEABIAGgBIACAMIgKABQgGAAgDgCg");
	this.shape_29.setTransform(324,237.4);

	this.shape_30 = new cjs.Shape();
	this.shape_30.graphics.f("#000000").s().p("AgTAgQgIgGgCgLIAMgCQABAHAFAEQAEAEAIAAQAIAAAFgEQADgDAAgFQABgEgEgCIgNgFQgMgDgGgCQgEgCgEgEQgCgFAAgFQAAgFACgEQACgEAEgDQADgCAFgBQAFgCAFAAQAIAAAHACQAGADADAEQADAEABAHIgMACQAAgGgFgDQgDgDgHAAQgIAAgDADQgEADAAADQAAABAAAAQAAABAAABQABAAAAABQAAAAABABIAEADIAKADIASAGQAFABADAEQADAFAAAGQAAAGgEAGQgDAFgHADQgGADgJAAQgNAAgHgGg");
	this.shape_30.setTransform(318.4,238.6);

	this.shape_31 = new cjs.Shape();
	this.shape_31.graphics.f("#000000").s().p("AgXAcQgKgKAAgRQAAgSAKgKQAKgKANAAQAPAAAKAKQAIAKABARIAAADIg1AAQAAAMAGAGQAGAHAIAAQAHAAAFgEQAEgDADgIIANABQgDAMgIAGQgIAGgNAAQgOAAgKgKgAgMgVQgHAFAAAKIAnAAQAAgJgEgFQgGgHgKAAQgHAAgFAGg");
	this.shape_31.setTransform(311,238.6);

	this.shape_32 = new cjs.Shape();
	this.shape_32.graphics.f("#000000").s().p("AgXAcQgKgKAAgRQAAgSAKgKQAKgKANAAQAPAAAKAKQAIAKABARIAAADIg1AAQAAAMAGAGQAGAHAIAAQAHAAAFgEQAEgDADgIIANABQgDAMgIAGQgIAGgNAAQgOAAgKgKgAgMgVQgHAFAAAKIAnAAQAAgJgEgFQgGgHgKAAQgHAAgFAGg");
	this.shape_32.setTransform(299.3,238.6);

	this.shape_33 = new cjs.Shape();
	this.shape_33.graphics.f("#000000").s().p("AgPAuQgHgFgEgIQgEgJAAgLQAAgLADgIQAEgJAHgEQAHgFAJAAQAGAAAFADQAFADADAEIAAgkIAMAAIAABjIgLAAIAAgJQgHALgNAAQgIAAgHgFgAgMgHQgGAHAAANQAAAOAGAHQAGAHAHAAQAIAAAGgHQAFgGAAgOQAAgOgFgHQgGgHgJAAQgHAAgFAHg");
	this.shape_33.setTransform(291.3,237.3);

	this.shape_34 = new cjs.Shape();
	this.shape_34.graphics.f("#000000").s().p("AgXAcQgKgKAAgSQAAgTAMgKQAJgIAMAAQAPAAAJAKQAKAKAAARQAAANgEAIQgEAIgIAEQgIAFgKAAQgOAAgJgKgAgOgUQgGAHAAANQAAAOAGAHQAGAHAIAAQAKAAAFgHQAHgHAAgOQAAgNgHgHQgFgHgKAAQgIAAgGAHg");
	this.shape_34.setTransform(366.7,217);

	this.shape_35 = new cjs.Shape();
	this.shape_35.graphics.f("#000000").s().p("AgBAwQgEgDgBgDQgCgDAAgMIAAgoIgJAAIAAgKIAJAAIAAgSIALgHIAAAZIANAAIAAAKIgNAAIAAApQAAAFABABIACADIAEABIAGgBIACAMIgKABQgGAAgDgCg");
	this.shape_35.setTransform(360.9,215.8);

	this.shape_36 = new cjs.Shape();
	this.shape_36.graphics.f("#000000").s().p("AgFAyIAAhIIALAAIAABIgAgFgjIAAgOIALAAIAAAOg");
	this.shape_36.setTransform(357.4,215.7);

	this.shape_37 = new cjs.Shape();
	this.shape_37.graphics.f("#000000").s().p("AgTAoIAAAJIgLAAIAAhjIAMAAIAAAkQAIgKALAAQAGAAAHADQAFACAFAFQADAFACAHQADAGAAAIQgBATgIAKQgKAKgNAAQgLAAgIgLgAgNgHQgGAHAAAMQAAANADAGQAHAKAJAAQAHAAAGgHQAGgHAAgOQAAgNgFgHQgGgHgIAAQgHAAgGAHg");
	this.shape_37.setTransform(352.1,215.7);

	this.shape_38 = new cjs.Shape();
	this.shape_38.graphics.f("#000000").s().p("AAlAlIAAgtQAAgHgBgDQgBgEgDgCQgEgCgEAAQgHAAgGAGQgFAEAAAMIAAApIgLAAIAAguQAAgIgDgEQgDgFgHAAQgFABgEACQgFADgCAFQgCAFAAAKIAAAlIgMAAIAAhIIALAAIAAAKQADgEAGgEQAGgDAHAAQAIAAAFADQAEAEADAFQAIgMAOAAQALAAAGAGQAFAGAAAMIAAAxg");
	this.shape_38.setTransform(342.2,217);

	this.shape_39 = new cjs.Shape();
	this.shape_39.graphics.f("#000000").s().p("AgaAuQgGgGgBgJQABgGACgEQADgFADgCIAJgEIALgCQAOgCAHgCIAAgEQAAgGgEgDQgEgEgJAAQgIAAgEADQgEADgCAHIgNgBQACgIAEgFQAEgEAHgDQAHgCAIAAQAJAAAHACQAFACADADQADAEABAFIAAAKIAAAQQAAARABAFQABAFADAEIgOAAQgCgEAAgFQgHAGgGACQgGACgGAAQgMAAgHgFgAgCASIgLACQgDACgBACQgCADAAADQAAAFAEADQADAEAHAAQAHAAAFgDQAGgDACgGQACgEAAgIIAAgFQgGADgNACgAgGgfIAIgTIARAAIgQATg");
	this.shape_39.setTransform(332.4,215.7);

	this.shape_40 = new cjs.Shape();
	this.shape_40.graphics.f("#000000").s().p("AgFAyIAAhjIALAAIAABjg");
	this.shape_40.setTransform(323.1,215.7);

	this.shape_41 = new cjs.Shape();
	this.shape_41.graphics.f("#000000").s().p("AgXAcQgJgKAAgRQAAgSAJgKQAJgKAOAAQAPAAAJAKQAKAKgBARIAAADIg1AAQABAMAGAGQAGAHAJAAQAGAAAFgEQAEgDAEgIIAMABQgDAMgIAGQgIAGgNAAQgOAAgKgKgAgMgVQgHAFAAAKIAoAAQgBgJgEgFQgGgHgKAAQgHAAgFAGg");
	this.shape_41.setTransform(317.6,217);

	this.shape_42 = new cjs.Shape();
	this.shape_42.graphics.f("#000000").s().p("AgTAlIAAhIIALAAIAAALQAFgHADgDQADgCAEAAQAGAAAHADIgEAMQgFgDgEAAQgFAAgCADQgDACgBAEQgCAHAAAIIAAAlg");
	this.shape_42.setTransform(308.1,217);

	this.shape_43 = new cjs.Shape();
	this.shape_43.graphics.f("#000000").s().p("AgFAyIAAhIIALAAIAABIgAgFgjIAAgOIALAAIAAAOg");
	this.shape_43.setTransform(303.7,215.7);

	this.shape_44 = new cjs.Shape();
	this.shape_44.graphics.f("#000000").s().p("AARAlIAAgrQABgIgCgEQgCgDgDgDQgEgCgEAAQgIAAgFAGQgGAFAAAOIAAAmIgNAAIAAhIIAMAAIAAAKQAIgLAOAAQAGAAAGACQAFADADAEQADADABAGIABALIAAAsg");
	this.shape_44.setTransform(298.2,217);

	this.shape_45 = new cjs.Shape();
	this.shape_45.graphics.f("#000000").s().p("AgFAyIAAhIIALAAIAABIgAgFgjIAAgOIALAAIAAAOg");
	this.shape_45.setTransform(292.8,215.7);

	this.shape_46 = new cjs.Shape();
	this.shape_46.graphics.f("#000000").s().p("AgKAzIAAg+IgKAAIAAgKIAKAAIAAgIQAAgGACgEQABgFAFgDQADgDAJAAIALABIgCALIgHgBQgGAAgCACQgCADAAAGIAAAHIAOAAIAAAKIgOAAIAAA+g");
	this.shape_46.setTransform(289.6,215.6);

	this.shape_47 = new cjs.Shape();
	this.shape_47.graphics.f("#000000").s().p("AgXAcQgKgKAAgRQAAgSAKgKQAJgKAPAAQAOAAAKAKQAIAKABARIAAADIg1AAQAAAMAGAGQAGAHAIAAQAHAAAFgEQAEgDADgIIANABQgDAMgIAGQgIAGgNAAQgPAAgJgKgAgNgVQgFAFgBAKIAnAAQgBgJgDgFQgGgHgJAAQgIAAgGAGg");
	this.shape_47.setTransform(283.4,217);

	this.shape_48 = new cjs.Shape();
	this.shape_48.graphics.f("#000000").s().p("AgoAyIAAhjIAiAAIARABQAJACAGAFQAIAHAEALQADAKAAANQAAALgCAJQgDAIgEAGQgEAGgFADQgFAEgHABQgHACgIAAgAgbAmIAVAAQAJAAAGgBQAFgCAEgEQAEgFADgHQADgJAAgKQAAgPgFgJQgGgIgHgDQgFgDgLAAIgVAAg");
	this.shape_48.setTransform(274.6,215.7);

	this.shape_49 = new cjs.Shape();
	this.shape_49.graphics.f("#000000").s().p("AgaAgQgHgGABgJQAAgFACgFQADgEAEgDIAIgDIALgCQAOgBAHgDIAAgDQAAgIgDgDQgFgEgJAAQgIAAgEADQgFADgCAIIgLgCQACgHADgFQAEgFAHgCQAHgDAJAAQAIAAAGACQAGACADAEQADADABAFIABALIAAAQQAAARABAFQAAAEACAEIgMAAQgCgEgBgFQgHAGgGACQgFADgIAAQgLAAgHgGgAgCAEIgLADQgDABgCADQgCADAAADQAAAFAFADQADADAIAAQAFAAAGgDQAFgDADgFQACgFAAgIIAAgEQgHADgMABg");
	this.shape_49.setTransform(369.4,217);

	this.shape_50 = new cjs.Shape();
	this.shape_50.graphics.f("#000000").s().p("AgfAkIAAgKIAtg0IgOABIgcAAIAAgKIA6AAIAAAIIgmAtIgIAIIAQAAIAgAAIAAAKg");
	this.shape_50.setTransform(362,217);

	this.shape_51 = new cjs.Shape();
	this.shape_51.graphics.f("#000000").s().p("AgTAlIAAhIIALAAIAAALQAFgHADgDQADgCAEAAQAGAAAHADIgEAMQgFgDgEAAQgFAAgCADQgDACgBAEQgCAHAAAIIAAAlg");
	this.shape_51.setTransform(353.6,217);

	this.shape_52 = new cjs.Shape();
	this.shape_52.graphics.f("#000000").s().p("AgYAcQgJgKAAgSQAAgTALgKQAJgIANAAQAPAAAKAKQAJAKAAARQAAANgEAIQgEAIgIAEQgIAFgKAAQgOAAgKgKgAgOgUQgGAHAAANQAAAOAGAHQAGAHAIAAQAJAAAHgHQAFgHAAgOQAAgNgFgHQgHgHgJAAQgIAAgGAHg");
	this.shape_52.setTransform(346.8,217);

	this.shape_53 = new cjs.Shape();
	this.shape_53.graphics.f("#000000").s().p("AgTAlIAAhIIALAAIAAALQAFgHADgDQADgCAEAAQAGAAAHADIgEAMQgFgDgEAAQgFAAgCADQgDACgBAEQgCAHAAAIIAAAlg");
	this.shape_53.setTransform(338.1,217);

	this.shape_54 = new cjs.Shape();
	this.shape_54.graphics.f("#000000").s().p("AgfAzIAAhkIAMAAIAAAKQAEgGAFgDQAFgCAGAAQAJAAAHAEQAHAGAEAIQAEAJAAAKQAAALgEAIQgEAJgIAFQgIAFgIgBQgFAAgFgCQgFgDgDgEIAAAkgAgNghQgGAHAAAOQAAANAFAHQAGAGAIAAQAHABAGgIQAGgGAAgOQAAgOgGgGQgFgIgIAAQgHABgGAHg");
	this.shape_54.setTransform(331.5,218.4);

	this.shape_55 = new cjs.Shape();
	this.shape_55.graphics.f("#000000").s().p("AgaAyIgBgMIAHABQAEAAACgCQADgBABgCIAEgKIABgCIgbhIIANAAIAPAqIAEAQIAFgQIAQgqIAMAAIgcBJIgGAQQgDAHgEACQgEADgGAAIgIgBg");
	this.shape_55.setTransform(320.1,218.5);

	this.shape_56 = new cjs.Shape();
	this.shape_56.graphics.f("#000000").s().p("AgTAlIAAhIIALAAIAAALQAFgHADgDQADgCAEAAQAGAAAHADIgEAMQgFgDgEAAQgFAAgCADQgDACgBAEQgCAHAAAIIAAAlg");
	this.shape_56.setTransform(310.8,217);

	this.shape_57 = new cjs.Shape();
	this.shape_57.graphics.f("#000000").s().p("AgaAgQgHgGABgJQAAgFACgFQACgEAFgDIAIgDIALgCQAOgBAHgDIAAgDQAAgIgDgDQgFgEgJAAQgIAAgEADQgFADgCAIIgLgCQACgHADgFQAEgFAHgCQAHgDAIAAQAKAAAFACQAGACADAEQADADABAFIABALIAAAQQAAARABAFQAAAEADAEIgNAAQgDgEAAgFQgHAGgGACQgFADgIAAQgMAAgGgGgAgCAEIgLADQgDABgCADQgCADAAADQAAAFAEADQAEADAIAAQAFAAAGgDQAFgDADgFQACgFAAgIIAAgEQgHADgMABg");
	this.shape_57.setTransform(304,217);

	this.shape_58 = new cjs.Shape();
	this.shape_58.graphics.f("#000000").s().p("AgfAkIAAgKIAtg0IgOABIgcAAIAAgKIA6AAIAAAIIgmAtIgIAIIAQAAIAgAAIAAAKg");
	this.shape_58.setTransform(296.6,217);

	this.shape_59 = new cjs.Shape();
	this.shape_59.graphics.f("#000000").s().p("AgaAgQgGgGgBgJQABgFACgFQACgEAEgDIAJgDIALgCQAOgBAHgDIAAgDQAAgIgEgDQgEgEgJAAQgIAAgEADQgEADgCAIIgNgCQADgHADgFQAEgFAHgCQAHgDAIAAQAJAAAHACQAFACADAEQADADABAFIAAALIAAAQQAAARABAFQABAEADAEIgOAAQgCgEAAgFQgHAGgGACQgFADgIAAQgLAAgHgGgAgCAEIgLADQgDABgBADQgCADAAADQAAAFADADQAEADAHAAQAHAAAFgDQAGgDACgFQACgFAAgIIAAgEQgGADgNABg");
	this.shape_59.setTransform(283,217);

	this.shape_60 = new cjs.Shape();
	this.shape_60.graphics.f("#000000").s().p("AARAlIAAgrQABgIgCgEQgCgDgDgDQgEgCgEAAQgIAAgFAGQgGAFAAAOIAAAmIgMAAIAAhIIALAAIAAAKQAIgLAOAAQAGAAAGACQAFADADAEQADADABAGIABALIAAAsg");
	this.shape_60.setTransform(275.2,217);

	this.shape_61 = new cjs.Shape();
	this.shape_61.graphics.f("#000000").s().p("AAgAyIgMgeIgpAAIgLAeIgOAAIAnhjIANAAIApBjgAgGgUIgLAdIAhAAIgLgbIgGgVIgFATg");
	this.shape_61.setTransform(266.7,215.7);

	this.shape_62 = new cjs.Shape();
	this.shape_62.graphics.f("#000000").s().p("AgzBPQAAgHACgHQAEgKAJgLQAJgKAQgNQAZgVAJgLQAJgNAAgLQAAgMgIgHQgJgIgNAAQgNAAgIAIQgIAJgBAPIgTgDQACgWANgLQANgMAWAAQAWAAAOANQANAMAAASQAAAKgEAJQgEAJgJAJQgJALgVARQgQAPgFAFQgFAFgDAGIBMAAIAAASg");
	this.shape_62.setTransform(347.9,186);

	this.shape_63 = new cjs.Shape();
	this.shape_63.graphics.f("#000000").s().p("AAMBkIAAibQgJAIgNAJQgPAIgLAEIAAgXQAVgKAPgOQAOgOAHgNIAQAAIAADIg");
	this.shape_63.setTransform(356.3,212.7);

	this.shape_64 = new cjs.Shape();
	this.shape_64.graphics.f("#000000").s().p("AgnBKIAAiQIAXAAIAAAWQAIgPAIgFQAGgFAIAAQAMAAANAIIgIAXQgJgGgJAAQgIAAgFAFQgHAFgCAJQgFANAAAPIAABLg");
	this.shape_64.setTransform(338.2,215.3);

	this.shape_65 = new cjs.Shape();
	this.shape_65.graphics.f("#000000").s().p("AgvA4QgTgTAAgkQAAgjATgVQATgUAdAAQAdAAASAUQATAUAAAjIAAAGIhsAAQACAYAMANQAMANARAAQAOgBAJgGQAKgIAGgQIAZAEQgGAWgQAMQgRANgZAAQgfAAgSgUgAgagsQgMAMgBATIBQAAQgCgTgHgIQgMgOgTgBQgQABgLAKg");
	this.shape_65.setTransform(324.6,215.5);

	this.shape_66 = new cjs.Shape();
	this.shape_66.graphics.f("#000000").s().p("AgLBkIAAjHIAXAAIAADHg");
	this.shape_66.setTransform(313.7,212.7);

	this.shape_67 = new cjs.Shape();
	this.shape_67.graphics.f("#000000").s().p("AgLBkIAAjHIAXAAIAADHg");
	this.shape_67.setTransform(307.5,212.7);

	this.shape_68 = new cjs.Shape();
	this.shape_68.graphics.f("#000000").s().p("Ag1BAQgNgMAAgSQAAgLAFgIQAFgJAIgGQAIgDAKgDQAGgDAPgBQAdgEAOgFIABgGQAAgPgIgHQgJgHgSgBQgRAAgJAHQgIAFgDAQIgZgDQADgQAIgJQAHgKAPgFQAOgFASAAQASAAAMAEQAMAFAFAHQAGAGACAKIABAXIAAAgQAAAiACAJQABAJAFAIIgaAAQgDgHgCgLQgNAMgNAFQgMAFgPAAQgXAAgNgMgAgFAJQgPACgGADQgHADgDAFQgDAFAAAGQgBALAIAGQAHAHAPAAQANgBALgFQALgHAFgLQAEgIAAgRIAAgIQgNAFgaAEg");
	this.shape_68.setTransform(296.6,215.5);

	this.shape_69 = new cjs.Shape();
	this.shape_69.graphics.f("#000000").s().p("AgNBkIAAiwIhBAAIAAgXICdAAIAAAXIhCAAIAACwg");
	this.shape_69.setTransform(283.5,212.7);

	this.shape_70 = new cjs.Shape();
	this.shape_70.graphics.f("#000000").s().p("AgjBEQgOgMgCgUIAUgCQADAQAIAHQAIAHAMAAQAMAAAKgJQAJgJAAgPQAAgNgJgIQgIgJgOAAQgEAAgIACIACgQIADAAQALAAAKgGQAKgHAAgNQAAgLgHgHQgHgGgLAAQgLAAgIAGQgHAIgCAOIgUgEQAEgTANgLQAMgKATAAQAMAAALAFQAKAFAGAKQAGAKAAAKQAAAKgGAJQgFAJgLAEQAOAEAIAIQAIALAAAPQAAAUgPAPQgPAPgWAAQgVAAgOgNg");
	this.shape_70.setTransform(348.1,186.2);

	this.shape_71 = new cjs.Shape();
	this.shape_71.graphics.f("#000000").s().p("AgTAgQgIgGgCgLIAMgCQABAHAEAEQAGAEAHAAQAJAAADgEQAFgDAAgFQgBgEgDgCIgNgFQgNgDgEgCQgFgCgEgEQgCgFAAgFQAAgFACgEQADgEADgDQADgCAFgBQAFgCAGAAQAHAAAGACQAHADADAEQADAEACAHIgMACQgCgGgDgDQgFgDgGAAQgIAAgEADQgDADAAADQAAABAAAAQAAABAAABQABAAAAABQAAAAAAABIAFADIAKADIASAGQAFABADAEQADAFAAAGQAAAGgDAGQgEAFgHADQgGADgJAAQgOAAgGgGg");
	this.shape_71.setTransform(358.1,260.2);

	this.shape_72 = new cjs.Shape();
	this.shape_72.graphics.f("#000000").s().p("AgUAgQgHgGgCgLIAMgCQABAHAEAEQAFAEAIAAQAJAAAEgEQADgDAAgFQABgEgEgCIgMgFQgNgDgGgCQgEgCgDgEQgDgFAAgFQAAgFACgEQACgEAEgDQADgCAFgBQAFgCAFAAQAIAAAHACQAGADADAEQADAEABAHIgMACQAAgGgEgDQgFgDgGAAQgIAAgEADQgDADAAADQAAABAAAAQAAABAAABQABAAAAABQAAAAABABIAEADIAKADIASAGQAFABADAEQADAFAAAGQAAAGgEAGQgDAFgHADQgGADgJAAQgNAAgIgGg");
	this.shape_72.setTransform(343.3,260.2);

	this.shape_73 = new cjs.Shape();
	this.shape_73.graphics.f("#000000").s().p("AgXAcQgKgKAAgSQAAgTAMgKQAIgIANAAQAPAAAJAKQAKAKAAARQAAANgEAIQgEAIgIAEQgJAFgJAAQgOAAgJgKgAgOgUQgGAHAAANQAAAOAGAHQAGAHAIAAQAJAAAGgHQAGgHABgOQgBgNgGgHQgGgHgJAAQgIAAgGAHg");
	this.shape_73.setTransform(321.1,260.2);

	this.shape_74 = new cjs.Shape();
	this.shape_74.graphics.f("#000000").s().p("AAlAlIAAgtQAAgHgBgDQgBgEgDgCQgEgCgEAAQgHAAgGAGQgFAEAAAMIAAApIgLAAIAAguQAAgIgDgEQgDgFgHAAQgFABgEACQgFADgCAFQgCAFAAAKIAAAlIgMAAIAAhIIALAAIAAAKQADgEAGgEQAGgDAHAAQAIAAAFADQAEAEADAFQAIgMAOAAQALAAAGAGQAFAGAAAMIAAAxg");
	this.shape_74.setTransform(299,260.2);

	this.shape_75 = new cjs.Shape();
	this.shape_75.graphics.f("#000000").s().p("AgVAcQgKgKABgSQAAgLADgIQAFgJAIgFQAHgEAJAAQALAAAIAGQAIAGACALIgNACQgBgHgEgEQgFgEgGAAQgJAAgFAHQgGAGAAAOQAAAPAGAGQAFAHAJAAQAHAAAFgFQAEgEACgJIAMABQgDANgHAHQgJAHgLAAQgPAAgIgKg");
	this.shape_75.setTransform(282.1,260.2);

	this.shape_76 = new cjs.Shape();
	this.shape_76.graphics.f("#000000").s().p("AgTAgQgIgGgCgLIAMgCQABAHAFAEQAEAEAIAAQAIAAAFgEQADgDABgFQgBgEgDgCIgNgFQgNgDgFgCQgFgCgDgEQgCgFAAgFQAAgFACgEQADgEADgDQADgCAFgBQAFgCAGAAQAHAAAHACQAGADADAEQADAEABAHIgLACQgCgGgEgDQgDgDgHAAQgIAAgDADQgEADAAADQAAABAAAAQAAABAAABQABAAAAABQAAAAAAABIAFADIAKADIASAGQAFABADAEQADAFAAAGQAAAGgEAGQgDAFgHADQgHADgIAAQgOAAgGgGg");
	this.shape_76.setTransform(377.6,238.6);

	this.shape_77 = new cjs.Shape();
	this.shape_77.graphics.f("#000000").s().p("AgYAcQgJgKAAgSQAAgTALgKQAJgIANAAQAPAAAKAKQAJAKAAARQAAANgEAIQgEAIgIAEQgIAFgKAAQgOAAgKgKgAgOgUQgGAHAAANQAAAOAGAHQAGAHAIAAQAJAAAHgHQAFgHAAgOQAAgNgFgHQgHgHgJAAQgIAAgGAHg");
	this.shape_77.setTransform(370.2,238.6);

	this.shape_78 = new cjs.Shape();
	this.shape_78.graphics.f("#000000").s().p("AgaAyIgBgMIAHABQAEAAACgCQADgBABgCIAEgJIABgDIgbhIIANAAIAPAqIAEAQIAFgQIAQgqIAMAAIgcBJIgGAQQgDAHgEACQgEADgGAAIgIgBg");
	this.shape_78.setTransform(355.9,240.1);

	this.shape_79 = new cjs.Shape();
	this.shape_79.graphics.f("#000000").s().p("AgUAgQgHgGgCgLIAMgCQABAHAEAEQAGAEAHAAQAJAAADgEQAFgDAAgFQAAgEgEgCIgMgFQgOgDgEgCQgGgCgCgEQgDgFAAgFQAAgFACgEQADgEADgDQADgCAFgBQAFgCAGAAQAHAAAGACQAHADADAEQADAEACAHIgNACQgBgGgDgDQgEgDgHAAQgIAAgEADQgDADAAADQAAABAAAAQAAABAAABQABAAAAABQAAAAAAABIAFADIAKADIASAGQAFABADAEQADAFAAAGQAAAGgDAGQgEAFgHADQgGADgJAAQgNAAgIgGg");
	this.shape_79.setTransform(344.9,238.6);

	this.shape_80 = new cjs.Shape();
	this.shape_80.graphics.f("#000000").s().p("AgaAgQgGgGAAgJQgBgFADgFQACgEAFgDIAIgDIALgCQAOgBAHgDIAAgDQAAgIgDgDQgFgEgJAAQgIAAgEADQgFADgCAIIgLgCQABgHAEgFQAEgFAHgCQAHgDAJAAQAIAAAGACQAHACACAEQADADABAFIABALIAAAQQAAARABAFQAAAEACAEIgMAAQgCgEgBgFQgGAGgHACQgGADgGAAQgNAAgGgGgAgCAEIgLADQgDABgCADQgCADAAADQAAAFAFADQADADAIAAQAFAAAGgDQAFgDADgFQACgFAAgIIAAgEQgHADgMABg");
	this.shape_80.setTransform(337.5,238.6);

	this.shape_81 = new cjs.Shape();
	this.shape_81.graphics.f("#000000").s().p("AgWAcQgJgKAAgSQAAgLAFgIQADgJAJgFQAHgEAJAAQAMAAAHAGQAIAGABALIgLACQgCgHgEgEQgFgEgGAAQgIAAgGAHQgGAGAAAOQAAAPAFAGQAHAHAIAAQAGAAAFgFQAFgEACgJIALABQgBANgJAHQgIAHgLAAQgOAAgKgKg");
	this.shape_81.setTransform(327.3,238.6);

	this.shape_82 = new cjs.Shape();
	this.shape_82.graphics.f("#000000").s().p("AASAlIAAgrQAAgIgCgEQgBgDgEgDQgEgCgEAAQgIAAgFAGQgGAFAAAOIAAAmIgNAAIAAhIIAMAAIAAAKQAIgLAOAAQAHAAAFACQAFADADAEQADADABAGIABALIAAAsg");
	this.shape_82.setTransform(319.6,238.6);

	this.shape_83 = new cjs.Shape();
	this.shape_83.graphics.f("#000000").s().p("AgXAcQgKgKAAgRQAAgSAKgKQAJgKAPAAQAOAAAKAKQAIAKABARIAAADIg1AAQAAAMAGAGQAGAHAIAAQAHAAAFgEQAEgDADgIIANABQgDAMgIAGQgIAGgNAAQgPAAgJgKgAgNgVQgGAFAAAKIAnAAQgBgJgDgFQgGgHgJAAQgIAAgGAGg");
	this.shape_83.setTransform(311.8,238.6);

	this.shape_84 = new cjs.Shape();
	this.shape_84.graphics.f("#000000").s().p("AASAlIAAgrQAAgIgCgEQgBgDgEgDQgEgCgEAAQgIAAgFAGQgGAFAAAOIAAAmIgNAAIAAhIIAMAAIAAAKQAIgLAOAAQAHAAAFACQAFADADAEQADADABAGIABALIAAAsg");
	this.shape_84.setTransform(296.2,238.6);

	this.shape_85 = new cjs.Shape();
	this.shape_85.graphics.f("#000000").s().p("AgXAcQgKgKAAgRQAAgSAKgKQAJgKAOAAQAPAAAKAKQAIAKABARIAAADIg1AAQAAAMAGAGQAGAHAIAAQAHAAAFgEQAEgDADgIIANABQgDAMgIAGQgIAGgNAAQgPAAgJgKgAgNgVQgGAFAAAKIAnAAQgBgJgDgFQgGgHgKAAQgHAAgGAGg");
	this.shape_85.setTransform(288.4,238.6);

	this.shape_86 = new cjs.Shape();
	this.shape_86.graphics.f("#000000").s().p("AgTAgQgIgGgCgLIAMgCQABAHAFAEQAEAEAIAAQAIAAAFgEQADgDAAgFQAAgEgDgCIgNgFQgNgDgFgCQgFgCgDgEQgCgFAAgFQAAgFACgEQADgEADgDQADgCAFgBQAFgCAGAAQAHAAAHACQAGADADAEQADAEABAHIgLACQgBgGgFgDQgDgDgHAAQgIAAgDADQgEADAAADQAAABAAAAQAAABAAABQABAAAAABQAAAAAAABIAFADIAKADIASAGQAFABADAEQADAFAAAGQAAAGgDAGQgEAFgHADQgHADgIAAQgOAAgGgGg");
	this.shape_86.setTransform(273.2,238.6);

	this.shape_87 = new cjs.Shape();
	this.shape_87.graphics.f("#000000").s().p("AgaAgQgGgGgBgJQABgFACgFQADgEADgDIAJgDIALgCQAOgBAHgDIAAgDQAAgIgEgDQgEgEgJAAQgIAAgEADQgEADgCAIIgNgCQACgHAEgFQAEgFAHgCQAHgDAIAAQAKAAAGACQAFACADAEQADADABAFIAAALIAAAQQAAARABAFQABAEADAEIgOAAQgCgEAAgFQgHAGgGACQgGADgGAAQgMAAgHgGgAgCAEIgLADQgDABgBADQgCADAAADQAAAFADADQAEADAHAAQAHAAAFgDQAGgDACgFQACgFAAgIIAAgEQgGADgNABg");
	this.shape_87.setTransform(265.8,238.6);

	this.shape_88 = new cjs.Shape();
	this.shape_88.graphics.f("#000000").s().p("AgFAyIAAhjIALAAIAABjg");
	this.shape_88.setTransform(260.4,237.3);

	this.shape_89 = new cjs.Shape();
	this.shape_89.graphics.f("#000000").s().p("AgGAMQADgCACgEQABgDABgFIgGAAIAAgOIAMAAIAAAOQAAAGgDAGQgCAEgFADg");
	this.shape_89.setTransform(380.7,221);

	this.shape_90 = new cjs.Shape();
	this.shape_90.graphics.f("#000000").s().p("AgXAcQgKgKAAgSQAAgTAMgKQAJgIAMAAQAPAAAJAKQAKAKAAARQAAANgEAIQgEAIgIAEQgJAFgJAAQgOAAgJgKgAgOgUQgGAHAAANQAAAOAGAHQAGAHAIAAQAKAAAFgHQAHgHAAgOQAAgNgHgHQgFgHgKAAQgIAAgGAHg");
	this.shape_90.setTransform(374.9,217);

	this.shape_91 = new cjs.Shape();
	this.shape_91.graphics.f("#000000").s().p("AgaAgQgHgGAAgJQAAgFADgFQACgEAEgDIAJgDIALgCQAOgBAHgDIAAgDQAAgIgDgDQgFgEgJAAQgIAAgEADQgEADgDAIIgLgCQABgHAEgFQAEgFAHgCQAHgDAIAAQAKAAAFACQAGACADAEQADADABAFIAAALIAAAQQAAARACAFQAAAEADAEIgOAAQgBgEgBgFQgGAGgHACQgFADgIAAQgMAAgGgGgAgCAEIgLADQgDABgCADQgBADAAADQAAAFADADQAEADAIAAQAFAAAGgDQAGgDACgFQACgFAAgIIAAgEQgHADgMABg");
	this.shape_91.setTransform(359.3,217);

	this.shape_92 = new cjs.Shape();
	this.shape_92.graphics.f("#000000").s().p("AgUAgQgHgGgCgLIAMgCQABAHAEAEQAGAEAHAAQAJAAADgEQAEgDABgFQAAgEgEgCIgMgFQgNgDgFgCQgGgCgCgEQgDgFAAgFQAAgFACgEQACgEAEgDQADgCAFgBQAFgCAFAAQAIAAAGACQAHADADAEQADAEACAHIgNACQgBgGgDgDQgFgDgGAAQgIAAgEADQgDADAAADQAAABAAAAQAAABAAABQABAAAAABQAAAAABABIAEADIAKADIASAGQAFABADAEQADAFAAAGQAAAGgDAGQgEAFgHADQgHADgIAAQgNAAgIgGg");
	this.shape_92.setTransform(348,217);

	this.shape_93 = new cjs.Shape();
	this.shape_93.graphics.f("#000000").s().p("AgFAyIAAhjIALAAIAABjg");
	this.shape_93.setTransform(331.2,215.7);

	this.shape_94 = new cjs.Shape();
	this.shape_94.graphics.f("#000000").s().p("AgXAcQgKgKAAgRQAAgSAKgKQAJgKAOAAQAPAAAKAKQAIAKABARIAAADIg1AAQAAAMAGAGQAGAHAIAAQAHAAAFgEQAEgDADgIIANABQgDAMgIAGQgIAGgNAAQgPAAgJgKgAgNgVQgGAFAAAKIAnAAQgBgJgDgFQgGgHgKAAQgHAAgGAGg");
	this.shape_94.setTransform(325.8,217);

	this.shape_95 = new cjs.Shape();
	this.shape_95.graphics.f("#000000").s().p("AgaAgQgHgGABgJQAAgFACgFQADgEAEgDIAIgDIALgCQAOgBAHgDIAAgDQAAgIgDgDQgFgEgJAAQgIAAgEADQgFADgCAIIgLgCQACgHADgFQAEgFAHgCQAHgDAIAAQAKAAAFACQAGACADAEQADADABAFIABALIAAAQQAAARABAFQAAAEADAEIgNAAQgDgEAAgFQgHAGgGACQgFADgIAAQgMAAgGgGgAgCAEIgLADQgDABgCADQgCADABADQgBAFAEADQAEADAIAAQAFAAAGgDQAFgDADgFQACgFAAgIIAAgEQgHADgMABg");
	this.shape_95.setTransform(309.4,217);

	this.shape_96 = new cjs.Shape();
	this.shape_96.graphics.f("#000000").s().p("AgWAcQgIgKgBgSQAAgLAFgIQADgJAIgFQAIgEAIAAQAMAAAIAGQAHAGACALIgLACQgCgHgFgEQgEgEgGAAQgJAAgFAHQgGAGAAAOQAAAPAFAGQAGAHAIAAQAIAAAEgFQAGgEAAgJIAMABQgBANgJAHQgHAHgNAAQgNAAgKgKg");
	this.shape_96.setTransform(302.3,217);

	this.shape_97 = new cjs.Shape();
	this.shape_97.graphics.f("#000000").s().p("AgBAwQgEgDgBgDQgCgDAAgMIAAgoIgJAAIAAgKIAJAAIAAgSIALgHIAAAZIANAAIAAAKIgNAAIAAApQAAAFABABIACADIAEABIAGgBIACAMIgKABQgGAAgDgCg");
	this.shape_97.setTransform(286.6,215.8);

	this.shape_98 = new cjs.Shape();
	this.shape_98.graphics.f("#000000").s().p("AgXAcQgJgKAAgRQAAgSAJgKQAKgKAOAAQAOAAAJAKQAJAKAAARIAAADIg1AAQABAMAGAGQAGAHAJAAQAGAAAFgEQAFgDADgIIAMABQgDAMgIAGQgIAGgNAAQgPAAgJgKgAgNgVQgFAFgBAKIAoAAQgCgJgDgFQgGgHgJAAQgIAAgGAGg");
	this.shape_98.setTransform(272.8,217);

	this.shape_99 = new cjs.Shape();
	this.shape_99.graphics.f("#000000").s().p("AgPAuQgHgFgEgIQgEgJAAgLQAAgLADgIQAEgJAHgEQAHgFAJAAQAGAAAFADQAFADADAEIAAgkIAMAAIAABjIgLAAIAAgJQgHALgNAAQgIAAgHgFgAgMgHQgGAHAAANQAAAOAGAHQAGAHAHAAQAIAAAGgHQAFgGAAgOQAAgOgFgHQgGgHgJAAQgHAAgFAHg");
	this.shape_99.setTransform(264.8,215.7);

	this.shape_100 = new cjs.Shape();
	this.shape_100.graphics.f("#000000").s().p("AgGAyIAAhjIANAAIAABjg");
	this.shape_100.setTransform(259.2,215.7);

	this.shape_101 = new cjs.Shape();
	this.shape_101.graphics.f("#000000").s().p("AgPAjQgHgDgCgDQgCgEgCgFIgBgMIAAgsIANAAIAAAnIABANQABAFADADQAEADAFAAQAFAAAFgEQAFgCACgFQACgFAAgJIAAgmIANAAIAABIIgMAAIAAgLQgIAMgNAAQgHAAgFgCg");
	this.shape_101.setTransform(352.3,238.7);

	this.shape_102 = new cjs.Shape();
	this.shape_102.graphics.f("#000000").s().p("AgWAcQgIgKgBgSQABgLAEgIQAEgJAHgFQAIgEAIAAQAMAAAIAGQAHAGACALIgMACQgBgHgFgEQgEgEgGAAQgJAAgFAHQgGAGAAAOQAAAPAFAGQAGAHAIAAQAIAAAEgFQAGgEAAgJIAMABQgBANgJAHQgHAHgNAAQgNAAgKgKg");
	this.shape_102.setTransform(345.1,238.6);

	this.shape_103 = new cjs.Shape();
	this.shape_103.graphics.f("#000000").s().p("AgaAgQgHgGAAgJQAAgFADgFQACgEAEgDIAJgDIALgCQAOgBAHgDIAAgDQAAgIgDgDQgFgEgJAAQgIAAgEADQgEADgCAIIgMgCQABgHAEgFQAEgFAHgCQAHgDAIAAQAJAAAHACQAFACADAEQADADABAFIAAALIAAAQQAAARABAFQABAEADAEIgOAAQgBgEgBgFQgGAGgHACQgFADgIAAQgMAAgGgGgAgCAEIgLADQgDABgCADQgBADAAADQAAAFADADQAEADAHAAQAHAAAFgDQAGgDACgFQACgFAAgIIAAgEQgHADgMABg");
	this.shape_103.setTransform(319.6,238.6);

	this.shape_104 = new cjs.Shape();
	this.shape_104.graphics.f("#000000").s().p("AARAlIAAgrQAAgIgBgEQgCgDgDgDQgEgCgEAAQgIAAgFAGQgGAFAAAOIAAAmIgNAAIAAhIIAMAAIAAAKQAIgLAOAAQAGAAAGACQAFADADAEQADADABAGIABALIAAAsg");
	this.shape_104.setTransform(311.8,238.6);

	this.shape_105 = new cjs.Shape();
	this.shape_105.graphics.f("#000000").s().p("AgYAcQgJgKAAgSQAAgTALgKQAKgIAMAAQAPAAAJAKQAKAKAAARQAAANgEAIQgEAIgIAEQgIAFgKAAQgOAAgKgKgAgOgUQgGAHAAANQAAAOAGAHQAGAHAIAAQAKAAAFgHQAHgHgBgOQABgNgHgHQgFgHgKAAQgIAAgGAHg");
	this.shape_105.setTransform(304,238.6);

	this.shape_106 = new cjs.Shape();
	this.shape_106.graphics.f("#000000").s().p("AgWAcQgIgKgBgSQAAgLAFgIQAEgJAHgFQAIgEAJAAQALAAAIAGQAHAGACALIgLACQgCgHgFgEQgEgEgGAAQgJAAgFAHQgGAGAAAOQAAAPAFAGQAGAHAJAAQAHAAAEgFQAGgEAAgJIAMABQgBANgJAHQgHAHgMAAQgOAAgKgKg");
	this.shape_106.setTransform(293.7,238.6);

	this.shape_107 = new cjs.Shape();
	this.shape_107.graphics.f("#000000").s().p("AgQAjQgFgDgDgDQgDgEgBgFIAAgMIAAgsIAMAAIAAAnIAAANQABAFAFADQADADAGAAQAFAAAEgEQAFgCACgFQACgFAAgJIAAgmIAMAAIAABIIgKAAIAAgLQgJAMgOAAQgGAAgGgCg");
	this.shape_107.setTransform(286.1,238.7);

	this.shape_108 = new cjs.Shape();
	this.shape_108.graphics.f("#000000").s().p("AgUAgQgHgGgCgLIAMgCQABAHAEAEQAFAEAIAAQAJAAAEgEQADgDAAgFQAAgEgDgCIgMgFQgNgDgFgCQgGgCgCgEQgDgFAAgFQAAgFACgEQADgEADgDQADgCAFgBQAFgCAFAAQAIAAAHACQAGADADAEQADAEACAHIgNACQgBgGgDgDQgFgDgGAAQgIAAgEADQgDADAAADQAAABAAAAQAAABAAABQABAAAAABQAAAAABABIAEADIAKADIASAGQAFABADAEQADAFAAAGQAAAGgEAGQgDAFgHADQgHADgIAAQgNAAgIgGg");
	this.shape_108.setTransform(267.8,238.6);

	this.shape_109 = new cjs.Shape();
	this.shape_109.graphics.f("#000000").s().p("AgXAcQgKgKAAgSQAAgTAMgKQAIgIANAAQAPAAAKAKQAJAKAAARQAAANgEAIQgEAIgIAEQgJAFgJAAQgOAAgJgKgAgOgUQgGAHAAANQAAAOAGAHQAGAHAIAAQAJAAAGgHQAGgHABgOQgBgNgGgHQgGgHgJAAQgIAAgGAHg");
	this.shape_109.setTransform(370.2,217);

	this.shape_110 = new cjs.Shape();
	this.shape_110.graphics.f("#000000").s().p("AgaAgQgHgGAAgJQAAgFADgFQACgEAEgDIAJgDIALgCQAOgBAHgDIAAgDQAAgIgDgDQgFgEgJAAQgIAAgEADQgEADgDAIIgLgCQACgHADgFQAEgFAHgCQAHgDAIAAQAKAAAGACQAFACADAEQADADABAFIAAALIAAAQQAAARACAFQAAAEADAEIgOAAQgBgEgBgFQgGAGgHACQgFADgIAAQgMAAgGgGgAgCAEIgLADQgDABgCADQgBADAAADQAAAFADADQAEADAIAAQAFAAAGgDQAGgDACgFQACgFAAgIIAAgEQgHADgMABg");
	this.shape_110.setTransform(350.7,217);

	this.shape_111 = new cjs.Shape();
	this.shape_111.graphics.f("#000000").s().p("AgFAyIAAhjIALAAIAABjg");
	this.shape_111.setTransform(329.7,215.7);

	this.shape_112 = new cjs.Shape();
	this.shape_112.graphics.f("#000000").s().p("AgXAcQgKgKABgRQgBgSAKgKQAKgKANAAQAPAAAJAKQAKAKAAARIAAADIg2AAQABAMAGAGQAGAHAIAAQAHAAAFgEQAFgDADgIIAMABQgDAMgIAGQgIAGgNAAQgOAAgKgKgAgMgVQgHAFAAAKIAoAAQgCgJgDgFQgGgHgKAAQgHAAgFAGg");
	this.shape_112.setTransform(324.3,217);

	this.shape_113 = new cjs.Shape();
	this.shape_113.graphics.f("#000000").s().p("AgaAgQgGgGAAgJQgBgFADgFQADgEAEgDIAIgDIALgCQAOgBAHgDIAAgDQAAgIgEgDQgEgEgJAAQgIAAgEADQgEADgDAIIgMgCQACgHAEgFQAEgFAHgCQAHgDAJAAQAIAAAGACQAHACACAEQADADABAFIABALIAAAQQAAARAAAFQABAEACAEIgMAAQgCgEgBgFQgGAGgHACQgGADgGAAQgMAAgHgGgAgCAEIgLADQgDABgBADQgDADAAADQAAAFAFADQADADAIAAQAFAAAGgDQAGgDACgFQACgFAAgIIAAgEQgHADgMABg");
	this.shape_113.setTransform(307.9,217);

	this.shape_114 = new cjs.Shape();
	this.shape_114.graphics.f("#000000").s().p("AgFAyIAAhjIALAAIAABjg");
	this.shape_114.setTransform(292.4,215.7);

	this.shape_115 = new cjs.Shape();
	this.shape_115.graphics.f("#000000").s().p("AAOBPIAAgmIhDAAIAAgSIBGhlIAQAAIAABlIAVAAIAAASIgVAAIAAAmgAgiAXIAwAAIAAhGg");
	this.shape_115.setTransform(347.7,186);

	this.shape_116 = new cjs.Shape();
	this.shape_116.graphics.f("#000000").s().p("AhBBkQgBgIAEgIQAFgOALgNQALgOAVgRQAggaALgPQAMgQAAgOQAAgPgLgKQgKgJgRgBQgRAAgLAMQgKAKAAATIgagDQADgcARgPQARgPAbAAQAdAAARAQQARAQAAAYQAAAMgFAMQgFALgLAMQgMANgaAXIgcAYIgKAOIBhAAIAAAXg");
	this.shape_116.setTransform(357,212.7);

	this.shape_117 = new cjs.Shape();
	this.shape_117.graphics.f("#000000").s().p("AgTAgQgIgGgCgLIAMgCQABAHAFAEQAEAEAIAAQAIAAAFgEQADgDAAgFQAAgEgDgCIgNgFQgMgDgGgCQgEgCgEgEQgCgFAAgFQAAgFACgEQACgEAEgDQADgCAFgBQAFgCAFAAQAIAAAHACQAGADADAEQADAEABAHIgLACQgBgGgFgDQgDgDgHAAQgIAAgDADQgEADAAADQAAABAAAAQAAABAAABQABAAAAABQAAAAABABIAEADIAKADIASAGQAFABADAEQADAFAAAGQAAAGgEAGQgDAFgHADQgHADgIAAQgOAAgGgGg");
	this.shape_117.setTransform(376.8,238.6);

	this.shape_118 = new cjs.Shape();
	this.shape_118.graphics.f("#000000").s().p("AgTAgQgIgGgCgLIAMgCQABAHAFAEQAEAEAIAAQAIAAAEgEQAFgDAAgFQgBgEgDgCIgNgFQgNgDgFgCQgEgCgEgEQgCgFAAgFQAAgFACgEQADgEADgDQADgCAFgBQAFgCAGAAQAHAAAGACQAHADADAEQADAEABAHIgLACQgCgGgEgDQgEgDgGAAQgIAAgDADQgEADAAADQAAABAAAAQAAABAAABQABAAAAABQAAAAAAABIAFADIAKADIASAGQAFABADAEQADAFAAAGQAAAGgDAGQgEAFgHADQgHADgIAAQgOAAgGgGg");
	this.shape_118.setTransform(343.3,238.6);

	this.shape_119 = new cjs.Shape();
	this.shape_119.graphics.f("#000000").s().p("AgWAcQgJgKAAgSQAAgLAEgIQAFgJAIgFQAHgEAJAAQAMAAAHAGQAIAGACALIgMACQgCgHgEgEQgFgEgGAAQgIAAgGAHQgGAGAAAOQAAAPAGAGQAFAHAJAAQAHAAAEgFQAFgEACgJIAMABQgDANgHAHQgIAHgMAAQgOAAgKgKg");
	this.shape_119.setTransform(333.5,238.6);

	this.shape_120 = new cjs.Shape();
	this.shape_120.graphics.f("#000000").s().p("AgXAcQgJgKAAgRQAAgSAJgKQAJgKAPAAQAOAAAJAKQAKAKgBARIAAADIg1AAQABAMAGAGQAGAHAJAAQAGAAAFgEQAFgDADgIIAMABQgDAMgIAGQgIAGgNAAQgOAAgKgKgAgNgVQgFAFgBAKIAoAAQgBgJgEgFQgGgHgJAAQgIAAgGAGg");
	this.shape_120.setTransform(325.8,238.6);

	this.shape_121 = new cjs.Shape();
	this.shape_121.graphics.f("#000000").s().p("AgaAgQgHgGAAgJQAAgFADgFQACgEAEgDIAJgDIALgCQAOgBAHgDIAAgDQAAgIgDgDQgFgEgJAAQgIAAgEADQgEADgCAIIgMgCQACgHADgFQAEgFAHgCQAHgDAIAAQAKAAAFACQAGACADAEQADADABAFIAAALIAAAQQAAARACAFQAAAEADAEIgOAAQgBgEgBgFQgGAGgHACQgFADgIAAQgMAAgGgGgAgCAEIgLADQgDABgCADQgBADAAADQAAAFADADQAEADAIAAQAFAAAGgDQAGgDACgFQACgFAAgIIAAgEQgHADgMABg");
	this.shape_121.setTransform(286.8,238.6);

	this.shape_122 = new cjs.Shape();
	this.shape_122.graphics.f("#000000").s().p("AgYAcQgJgKAAgSQAAgTAMgKQAIgIANAAQAPAAAKAKQAJAKAAARQAAANgEAIQgEAIgIAEQgJAFgJAAQgOAAgKgKgAgOgUQgGAHAAANQAAAOAGAHQAGAHAIAAQAJAAAHgHQAFgHAAgOQAAgNgFgHQgHgHgJAAQgIAAgGAHg");
	this.shape_122.setTransform(267.4,238.6);

	this.shape_123 = new cjs.Shape();
	this.shape_123.graphics.f("#000000").s().p("AgYAcQgJgKAAgSQAAgTAMgKQAIgIANAAQAPAAAKAKQAJAKAAARQAAANgEAIQgEAIgIAEQgJAFgJAAQgOAAgKgKgAgOgUQgGAHAAANQAAAOAGAHQAGAHAIAAQAJAAAHgHQAFgHAAgOQAAgNgFgHQgHgHgJAAQgIAAgGAHg");
	this.shape_123.setTransform(371.8,217);

	this.shape_124 = new cjs.Shape();
	this.shape_124.graphics.f("#000000").s().p("AgNA/IADgKIAFABQAEAAABgDQABgCAAgKIAAhLIANAAIAABLQAAAOgEAFQgEAHgJAAQgGAAgEgCgAABgyIAAgOIANAAIAAAOg");
	this.shape_124.setTransform(365.6,217.1);

	this.shape_125 = new cjs.Shape();
	this.shape_125.graphics.f("#000000").s().p("AASAlIAAgrQgBgIgBgEQgBgDgEgDQgEgCgFAAQgGAAgGAGQgGAFAAAOIAAAmIgMAAIAAhIIALAAIAAAKQAIgLAOAAQAGAAAGACQAGADACAEQADADABAGIAAALIAAAsg");
	this.shape_125.setTransform(329.7,217);

	this.shape_126 = new cjs.Shape();
	this.shape_126.graphics.f("#000000").s().p("AgQAjQgFgDgDgDQgCgEgCgFIAAgMIAAgsIAMAAIAAAnIAAANQACAFAEADQADADAGAAQAEAAAFgEQAFgCACgFQACgFAAgJIAAgmIAMAAIAABIIgLAAIAAgLQgIAMgNAAQgHAAgGgCg");
	this.shape_126.setTransform(321.9,217.1);

	this.shape_127 = new cjs.Shape();
	this.shape_127.graphics.f("#000000").s().p("AgaAgQgHgGABgJQgBgFADgFQACgEAFgDIAIgDIALgCQAOgBAHgDIAAgDQAAgIgEgDQgEgEgJAAQgIAAgEADQgFADgCAIIgMgCQADgHADgFQAEgFAHgCQAHgDAJAAQAIAAAGACQAHACACAEQADADABAFIABALIAAAQQAAARABAFQAAAEACAEIgMAAQgCgEgBgFQgHAGgGACQgGADgGAAQgNAAgGgGgAgCAEIgLADQgDABgCADQgCADAAADQAAAFAFADQADADAIAAQAFAAAGgDQAFgDADgFQACgFAAgIIAAgEQgHADgMABg");
	this.shape_127.setTransform(305.6,217);

	this.shape_128 = new cjs.Shape();
	this.shape_128.graphics.f("#000000").s().p("AgaAgQgHgGAAgJQAAgFADgFQACgEAEgDIAJgDIALgCQAOgBAHgDIAAgDQAAgIgDgDQgFgEgJAAQgIAAgEADQgEADgDAIIgLgCQACgHADgFQAEgFAHgCQAHgDAIAAQAKAAAFACQAGACADAEQADADABAFIAAALIAAAQQAAARACAFQAAAEADAEIgOAAQgBgEgBgFQgGAGgHACQgFADgIAAQgMAAgGgGgAgCAEIgLADQgDABgCADQgBADAAADQAAAFADADQAEADAIAAQAFAAAGgDQAGgDACgFQACgFAAgIIAAgEQgHADgMABg");
	this.shape_128.setTransform(293.1,217);

	this.shape_129 = new cjs.Shape();
	this.shape_129.graphics.f("#000000").s().p("AgXAcQgKgKAAgRQAAgSAKgKQAJgKAPAAQAOAAAKAKQAIAKABARIAAADIg1AAQAAAMAGAGQAGAHAIAAQAHAAAFgEQAEgDADgIIANABQgDAMgIAGQgIAGgNAAQgPAAgJgKgAgNgVQgFAFgBAKIAnAAQgBgJgDgFQgGgHgJAAQgIAAgGAGg");
	this.shape_129.setTransform(277.5,217);

	this.shape_130 = new cjs.Shape();
	this.shape_130.graphics.f("#000000").s().p("AglAyIAAhjIAlAAIAPAAQAHACAFAEQAFADADAGQADAHAAAHQAAANgIAIQgIAIgVABIgZAAIAAAogAgYgCIAZAAQANAAAFgEQAFgFAAgJQAAgGgDgFQgDgEgFgCIgNgBIgYAAg");
	this.shape_130.setTransform(264.6,215.7);

	this.shape_131 = new cjs.Shape();
	this.shape_131.graphics.f("#000000").s().p("AgkBDQgNgMgCgTIAUgCQACAOAJAIQAIAHALAAQANAAAKgKQAKgLAAgRQAAgQgJgJQgKgKgOAAQgJAAgIAEQgHAFgFAFIgSgCIAQhQIBNAAIAAASIg+AAIgIArQAOgKAOAAQAVAAAOAOQAOANAAAXQAAAWgMAPQgPATgaAAQgVAAgOgMg");
	this.shape_131.setTransform(348.1,186.3);

	this.shape_132 = new cjs.Shape();
	this.shape_132.graphics.f("#000000").s().p("AgTAoIAAAJIgLAAIAAhjIAMAAIAAAkQAIgKALAAQAGAAAHADQAFACAFAFQADAFACAHQACAGABAIQgBATgIAKQgKAKgNAAQgLAAgIgLgAgNgHQgGAHAAAMQAAANADAGQAHAKAJAAQAIAAAFgHQAGgHAAgOQAAgNgFgHQgGgHgIAAQgIAAgFAHg");
	this.shape_132.setTransform(335.3,237.3);

	this.shape_133 = new cjs.Shape();
	this.shape_133.graphics.f("#000000").s().p("AgaAgQgGgGgBgJQABgFACgFQADgEADgDIAJgDIALgCQAOgBAHgDIAAgDQAAgIgEgDQgEgEgJAAQgIAAgEADQgFADgBAIIgNgCQACgHAEgFQAEgFAHgCQAHgDAJAAQAJAAAGACQAGACACAEQADADABAFIABALIAAAQQAAARAAAFQABAEACAEIgNAAQgCgEAAgFQgGAGgHACQgGADgGAAQgMAAgHgGgAgCAEIgLADQgDABgBADQgDADAAADQABAFAEADQADADAHAAQAHAAAFgDQAFgDADgFQACgFAAgIIAAgEQgGADgNABg");
	this.shape_133.setTransform(315.7,238.6);

	this.shape_134 = new cjs.Shape();
	this.shape_134.graphics.f("#000000").s().p("AgVAcQgKgKABgSQAAgLADgIQAFgJAIgFQAHgEAIAAQANAAAHAGQAHAGADALIgNACQgBgHgEgEQgFgEgGAAQgIAAgGAHQgGAGAAAOQAAAPAGAGQAGAHAHAAQAHAAAGgFQAEgEABgJIANABQgDANgHAHQgJAHgMAAQgOAAgIgKg");
	this.shape_134.setTransform(308.5,238.6);

	this.shape_135 = new cjs.Shape();
	this.shape_135.graphics.f("#000000").s().p("AgaAgQgGgGgBgJQABgFACgFQADgEAEgDIAIgDIALgCQAOgBAHgDIAAgDQAAgIgEgDQgEgEgJAAQgIAAgEADQgFADgBAIIgNgCQACgHAEgFQAEgFAHgCQAHgDAJAAQAJAAAGACQAGACACAEQADADABAFIABALIAAAQQAAARAAAFQABAEACAEIgMAAQgDgEAAgFQgHAGgGACQgGADgGAAQgMAAgHgGgAgCAEIgLADQgDABgBADQgCADgBADQABAFAEADQADADAHAAQAHAAAFgDQAFgDADgFQACgFAAgIIAAgEQgGADgNABg");
	this.shape_135.setTransform(350.3,217);

	this.shape_136 = new cjs.Shape();
	this.shape_136.graphics.f("#000000").s().p("AASAlIAAgrQAAgIgCgEQgBgDgEgDQgEgCgEAAQgIAAgFAGQgGAFAAAOIAAAmIgNAAIAAhIIAMAAIAAAKQAIgLAOAAQAGAAAGACQAFADADAEQADADABAGIAAALIAAAsg");
	this.shape_136.setTransform(338.6,217);

	this.shape_137 = new cjs.Shape();
	this.shape_137.graphics.f("#000000").s().p("AAlAlIAAgtQAAgHgBgDQgBgEgDgCQgEgCgEAAQgHAAgGAGQgFAEAAAMIAAApIgLAAIAAguQAAgIgDgEQgDgFgHAAQgFABgEACQgFADgCAFQgCAFAAAKIAAAlIgMAAIAAhIIALAAIAAAKQADgEAGgEQAGgDAHAAQAIAAAFADQAEAEADAFQAIgMAOAAQALAAAGAGQAFAGAAAMIAAAxg");
	this.shape_137.setTransform(290.8,217);

	this.shape_138 = new cjs.Shape();
	this.shape_138.graphics.f("#000000").s().p("AgkA/QgPgSAAgpQAAgtARgUQAOgSAYAAQATAAAMAKQALAKADATIgUABQgCgLgFgFQgIgIgLAAQgIAAgHAFQgKAGgEANQgGANAAAYQAHgLAKgFQAKgFAKAAQATAAAOAOQAOANAAAXQAAAOgGANQgHANgLAHQgMAGgOAAQgXAAgPgRgAgUACQgJAJAAAQQAAAKAFAJQADAJAIAFQAHAFAIAAQAMAAAJgKQAJgKAAgRQAAgRgJgJQgIgIgNAAQgMAAgKAIg");
	this.shape_138.setTransform(348.1,186.1);

	this.shape_139 = new cjs.Shape();
	this.shape_139.graphics.f("#000000").s().p("AgtBXQgRgQgCgZIAYgDQAEAUALAKQAKAJAOAAQARAAAMgMQALgMAAgSQAAgRgLgLQgLgLgRAAQgGAAgKADIACgVIAFABQAOAAANgJQAMgIAAgRQAAgNgJgJQgJgJgNAAQgPAAgJAJQgKAJgCASIgZgFQAEgYAQgOQAQgNAYAAQAPAAAOAHQAOAHAHAMQAIAMgBAOQABANgIAKQgGALgOAGQASAEAJAMQALANgBAUQAAAagTASQgTASgcAAQgaAAgSgPg");
	this.shape_139.setTransform(357.3,212.8);

	this.timeline.addTween(cjs.Tween.get({}).to({state:[]}).to({state:[{t:this.shape_48},{t:this.shape_47,p:{x:283.4,y:217}},{t:this.shape_46,p:{x:289.6}},{t:this.shape_45,p:{x:292.8}},{t:this.shape_44,p:{x:298.2,y:217}},{t:this.shape_43,p:{x:303.7,y:215.7}},{t:this.shape_42,p:{x:308.1,y:217}},{t:this.shape_41,p:{x:317.6}},{t:this.shape_40,p:{x:323.1,y:215.7}},{t:this.shape_39},{t:this.shape_38,p:{x:342.2,y:217}},{t:this.shape_37},{t:this.shape_36,p:{x:357.4,y:215.7}},{t:this.shape_35,p:{x:360.9,y:215.8}},{t:this.shape_34},{t:this.shape_33,p:{x:291.3,y:237.3}},{t:this.shape_32},{t:this.shape_31,p:{x:311,y:238.6}},{t:this.shape_30},{t:this.shape_29,p:{x:324,y:237.4}},{t:this.shape_28,p:{x:329.7}},{t:this.shape_27,p:{x:337.3}},{t:this.shape_26,p:{x:343,y:237.3}},{t:this.shape_25,p:{x:348.4,y:238.6}},{t:this.shape_24},{t:this.shape_23},{t:this.shape_22},{t:this.shape_21},{t:this.shape_20}]},19).to({state:[{t:this.shape_24},{t:this.shape_23},{t:this.shape_22},{t:this.shape_21},{t:this.shape_62},{t:this.shape_61,p:{x:266.7}},{t:this.shape_60},{t:this.shape_59},{t:this.shape_40,p:{x:288.5,y:215.7}},{t:this.shape_43,p:{x:291.6,y:215.7}},{t:this.shape_58},{t:this.shape_57},{t:this.shape_56,p:{x:310.8}},{t:this.shape_55},{t:this.shape_54,p:{x:331.5,y:218.4}},{t:this.shape_53,p:{x:338.1}},{t:this.shape_36,p:{x:341.4,y:215.7}},{t:this.shape_52,p:{x:346.8,y:217}},{t:this.shape_51,p:{x:353.6}},{t:this.shape_26,p:{x:357,y:215.7}},{t:this.shape_50,p:{x:362}},{t:this.shape_49},{t:this.shape_42,p:{x:376.2,y:217}}]},10).to({state:[{t:this.shape_69},{t:this.shape_68},{t:this.shape_67},{t:this.shape_66},{t:this.shape_65},{t:this.shape_64},{t:this.shape_63}]},10).to({state:[{t:this.shape_100,p:{x:259.2}},{t:this.shape_99},{t:this.shape_98},{t:this.shape_44,p:{x:280.6,y:217}},{t:this.shape_97,p:{x:286.6,y:215.8}},{t:this.shape_45,p:{x:290}},{t:this.shape_46,p:{x:293.8}},{t:this.shape_43,p:{x:297,y:215.7}},{t:this.shape_96,p:{x:302.3}},{t:this.shape_95,p:{x:309.4}},{t:this.shape_51,p:{x:316.2}},{t:this.shape_94,p:{x:325.8}},{t:this.shape_93,p:{x:331.2,y:215.7}},{t:this.shape_41,p:{x:340.6}},{t:this.shape_92},{t:this.shape_35,p:{x:353.5,y:215.8}},{t:this.shape_91,p:{x:359.3,y:217}},{t:this.shape_33,p:{x:366.8,y:215.7}},{t:this.shape_90},{t:this.shape_89},{t:this.shape_88,p:{x:260.4,y:237.3}},{t:this.shape_87},{t:this.shape_86},{t:this.shape_29,p:{x:282.7,y:237.4}},{t:this.shape_85,p:{x:288.4,y:238.6}},{t:this.shape_84},{t:this.shape_27,p:{x:303.8}},{t:this.shape_83},{t:this.shape_82,p:{x:319.6,y:238.6}},{t:this.shape_81},{t:this.shape_36,p:{x:332.1,y:237.3}},{t:this.shape_80,p:{y:238.6}},{t:this.shape_79},{t:this.shape_78,p:{x:355.9}},{t:this.shape_40,p:{x:364.8,y:237.3}},{t:this.shape_77},{t:this.shape_76},{t:this.shape_75},{t:this.shape_52,p:{x:289.2,y:260.2}},{t:this.shape_74,p:{x:299,y:260.2}},{t:this.shape_54,p:{x:308.9,y:261.6}},{t:this.shape_42,p:{x:315.5,y:260.2}},{t:this.shape_73},{t:this.shape_38,p:{x:330.9,y:260.2}},{t:this.shape_26,p:{x:338.3,y:258.9}},{t:this.shape_72},{t:this.shape_25,p:{x:350.7,y:260.2}},{t:this.shape_71},{t:this.shape_24},{t:this.shape_23},{t:this.shape_22},{t:this.shape_21},{t:this.shape_70}]},10).to({state:[{t:this.shape_24},{t:this.shape_23},{t:this.shape_22},{t:this.shape_21},{t:this.shape_115},{t:this.shape_61,p:{x:270.6}},{t:this.shape_82,p:{x:279.1,y:217}},{t:this.shape_95,p:{x:286.9}},{t:this.shape_114},{t:this.shape_45,p:{x:295.5}},{t:this.shape_50,p:{x:300.5}},{t:this.shape_113},{t:this.shape_53,p:{x:314.7}},{t:this.shape_112},{t:this.shape_111},{t:this.shape_38,p:{x:341,y:217}},{t:this.shape_110},{t:this.shape_51,p:{x:357.5}},{t:this.shape_96,p:{x:363}},{t:this.shape_109},{t:this.shape_43,p:{x:255,y:237.3}},{t:this.shape_44,p:{x:260.4,y:238.6}},{t:this.shape_108},{t:this.shape_97,p:{x:273.3,y:237.4}},{t:this.shape_36,p:{x:276.8,y:237.3}},{t:this.shape_35,p:{x:280.3,y:237.4}},{t:this.shape_107},{t:this.shape_106},{t:this.shape_26,p:{x:298.6,y:237.3}},{t:this.shape_105},{t:this.shape_104},{t:this.shape_103},{t:this.shape_93,p:{x:325,y:237.3}},{t:this.shape_78,p:{x:334.1}},{t:this.shape_102},{t:this.shape_101},{t:this.shape_88,p:{x:357.7,y:237.3}},{t:this.shape_29,p:{x:361.3,y:237.4}},{t:this.shape_28,p:{x:367.1}},{t:this.shape_42,p:{x:373.9,y:238.6}},{t:this.shape_91,p:{x:379.5,y:238.6}},{t:this.shape_40,p:{x:385,y:237.3}}]},10).to({state:[{t:this.shape_69},{t:this.shape_68},{t:this.shape_67},{t:this.shape_66},{t:this.shape_65},{t:this.shape_64},{t:this.shape_116}]},10).to({state:[{t:this.shape_24},{t:this.shape_23},{t:this.shape_22},{t:this.shape_21},{t:this.shape_131},{t:this.shape_130},{t:this.shape_56,p:{x:271.9}},{t:this.shape_129},{t:this.shape_54,p:{x:285.5,y:218.4}},{t:this.shape_128},{t:this.shape_53,p:{x:299.9}},{t:this.shape_127},{t:this.shape_51,p:{x:312.4}},{t:this.shape_126},{t:this.shape_125},{t:this.shape_80,p:{y:217}},{t:this.shape_74,p:{x:351.2,y:217}},{t:this.shape_94,p:{x:360.9}},{t:this.shape_124},{t:this.shape_123},{t:this.shape_42,p:{x:378.6,y:217}},{t:this.shape_29,p:{x:261.6,y:237.4}},{t:this.shape_122},{t:this.shape_38,p:{x:277.1,y:238.6}},{t:this.shape_121},{t:this.shape_33,p:{x:298.3,y:237.3}},{t:this.shape_47,p:{x:306.3,y:238.6}},{t:this.shape_27,p:{x:317.8}},{t:this.shape_120,p:{x:325.8}},{t:this.shape_119},{t:this.shape_36,p:{x:338.3,y:237.3}},{t:this.shape_118},{t:this.shape_26,p:{x:348.4,y:237.3}},{t:this.shape_25,p:{x:353.8,y:238.6}},{t:this.shape_44,p:{x:361.6,y:238.6}},{t:this.shape_85,p:{x:369.4,y:238.6}},{t:this.shape_117}]},10).to({state:[{t:this.shape_24},{t:this.shape_23},{t:this.shape_22},{t:this.shape_21},{t:this.shape_138},{t:this.shape_100,p:{x:283}},{t:this.shape_137},{t:this.shape_54,p:{x:300.7,y:218.4}},{t:this.shape_88,p:{x:305.9,y:215.7}},{t:this.shape_85,p:{x:311.4,y:217}},{t:this.shape_74,p:{x:321.1,y:217}},{t:this.shape_31,p:{x:330.8,y:217}},{t:this.shape_136},{t:this.shape_29,p:{x:344.6,y:215.8}},{t:this.shape_135},{t:this.shape_42,p:{x:357.1,y:217}},{t:this.shape_120,p:{x:293.9}},{t:this.shape_40,p:{x:299.3,y:237.3}},{t:this.shape_134},{t:this.shape_133},{t:this.shape_38,p:{x:325.4,y:238.6}},{t:this.shape_132},{t:this.shape_26,p:{x:340.6,y:237.3}},{t:this.shape_52,p:{x:346,y:238.6}}]},10).to({state:[{t:this.shape_69},{t:this.shape_68},{t:this.shape_67},{t:this.shape_66},{t:this.shape_65},{t:this.shape_64},{t:this.shape_139}]},10).wait(10));

	// GRF_Centro
	this.shape_140 = new cjs.Shape();
	this.shape_140.graphics.f("#DCD773").s().p("AksLKQiLg7hshsQhrhrg7iKQg9iQAAieQAAicA9iQQA7iLBrhrQBshsCLg7QCQg9CcAAQCdAACQA9QCLA7BsBsQBrBqA7CMQA9CQAACcQAACeg9CQQg7CKhrBrQhsBsiLA7QiQA9idAAQicAAiQg9g");
	this.shape_140.setTransform(320,215);
	this.shape_140._off = true;

	this.timeline.addTween(cjs.Tween.get(this.shape_140).wait(9).to({_off:false},0).wait(100));

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = new cjs.Rectangle(320,220,640,440);
// library properties:
lib.properties = {
	id: '07053B836AAC214CA6E17D0016CCFE38',
	width: 640,
	height: 440,
	fps: 30,
	color: "#FFFFFF",
	opacity: 0.00,
	manifest: [
		{src:"../static/ms/25/canvas_graphics/mainmenu_vese/images/mc_btn_shadow.png", id:"mc_btn_shadow"},
		{src:"../static/ms/25/canvas_graphics/mainmenu_vese/images/mc_formas_shadow1.png", id:"mc_formas_shadow1"},
		{src:"../static/ms/25/canvas_graphics/mainmenu_vese/images/mc_formas_shadow2.png", id:"mc_formas_shadow2"},
		{src:"../static/ms/25/canvas_graphics/mainmenu_vese/images/mc_nav01.png", id:"mc_nav01"},
		{src:"../static/ms/25/canvas_graphics/mainmenu_vese/images/mc_nav02.png", id:"mc_nav02"},
		{src:"../static/ms/25/canvas_graphics/mainmenu_vese/images/mc_nav03.png", id:"mc_nav03"},
		{src:"../static/ms/25/canvas_graphics/mainmenu_vese/images/mc_nav04.png", id:"mc_nav04"},
		{src:"../static/ms/25/canvas_graphics/mainmenu_vese/images/mc_nav05.png", id:"mc_nav05"},
		{src:"../static/ms/25/canvas_graphics/mainmenu_vese/images/mc_nav06.png", id:"mc_nav06"},
		{src:"../static/ms/25/canvas_graphics/mainmenu_vese/images/mc_nav_shadow.png", id:"mc_nav_shadow"}
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