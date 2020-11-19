/* -----------------------------------------------------------------------------------
    REGION-TRANSFRONTERIZA-MEXICO-GUATEMALA [RTMG-190320] [CANVAS]
----------------------------------------------------------------------------------- */
function LoadGFonts(families, comp) {
    var lib = comp.getLibrary();
    var googleObject = {
        type: "Google",
        loadedFonts: 0,
        totalFonts: families.length,
        callOnLoad: lib.gfontAvailable
    };
    for (var i = 0; i < families.length; i++) isFontAvailable(gFontsFamilies[i], googleObject);
}
function isFontAvailable(font, obj) {
    var timeOut = 5000;
    var delay = 200;
    var interval = 0;
    var timeElapsed = 0;
    function checkFont() {
        var node = document.createElement("span");
        node.innerHTML = "giItT1WQy@!-/#";
        node.style.position = "absolute";
        node.style.left = "-1000px";
        node.style.top = "-1000px";
        node.style.fontSize = "300px";
        node.style.fontFamily = "sans-serif";
        node.style.fontVariant = "normal";
        node.style.fontStyle = "normal";
        node.style.fontWeight = "normal";
        node.style.letterSpacing = "0";
        document.body.appendChild(node);
        var width = node.offsetWidth;
        node.style.fontFamily = font + "," + node.style.fontFamily;
        var returnVal = false;
        if ((node && node.offsetWidth != width) || timeElapsed >= timeOut) {
            obj.loadedFonts++;
            if (interval) clearInterval(interval);
            obj.callOnLoad(font, obj.totalFonts);
            returnVal = true;
        }
        if (node) {
            node.parentNode.removeChild(node);
            node = null;
        }
        timeElapsed += delay;
        return returnVal;
    }
    if (!checkFont()) {
        interval = setInterval(checkFont, delay);
    }
}
/* -------------------------------------------------------------------------------- */
var gFontsFamilies = ["Nunito", "Open Sans"];
/* -------------------------------------------------------------------------------- */
/* TEXTBASELINE [FIREFOX-PATCH] */
var firefox = navigator.userAgent.toLowerCase().indexOf('firefox') > -1;
if (firefox && createjs) {
    createjs.Text.prototype._drawTextLine = function(ctx, text, y) {
        if (this.textBaseline === "top") {
            var lineHeight = this.lineHeight || this.getMeasuredLineHeight();
            y += lineHeight * 0.2;
        }
        if (this.outline) {
            ctx.strokeText(text, 0, y, this.maxWidth || 0xFFFF);
        } else {
            ctx.fillText(text, 0, y, this.maxWidth || 0xFFFF);
        }
    };
}
/* -------------------------------------------------------------------------------- */
var canvas, stage, exportRoot, anim_container, dom_overlay_container, fnStartAnimation;
function init() {
    canvas = document.getElementById("canvas");
    anim_container = document.getElementById("animation_container");
    dom_overlay_container = document.getElementById("dom_overlay_container");
    var comp = AdobeAn.getComposition("358EDBC9540CCC468E67EB70DE4E9CCB");
    var lib = comp.getLibrary();
    try {
        if (!(typeof gFontsFamilies === 'undefined' || gFontsFamilies === null)) LoadGFonts(gFontsFamilies, comp);
        if (!(typeof totalTypekitFonts === 'undefined' || totalTypekitFonts === null)) {
            var typekitObject = {
                type: 'Typekit',
                loadedFonts: 0,
                totalFonts: totalTypekitFonts,
                callOnLoad: lib.tfontAvailable
            };
            Typekit.load({
                async: true,
                'fontactive': function(family) {
                    isFontAvailable(family, typekitObject);
                }
            });
        }
    } catch (e) {};
    handleComplete({}, comp);
}
function handleComplete(evt, comp) {
    //This function is always called, irrespective of the content. You can use the variable "stage" after it is created in token create_stage.
    var lib = comp.getLibrary();
    var ss = comp.getSpriteSheet();
    exportRoot = new lib.mm_rtmg();
    stage = new lib.Stage(canvas);
    stage.enableMouseOver();
    //Registers the "tick" event listener.
    fnStartAnimation = function() {
        stage.addChild(exportRoot);
        createjs.Ticker.setFPS(lib.properties.fps);
        createjs.Ticker.addEventListener("tick", stage);
    }
    //Code to support hidpi screens and responsive scaling.
    function makeResponsive(isResp, respDim, isScale, scaleType) {
        var lastW, lastH, lastS = 1;
        window.addEventListener('resize', resizeCanvas);
        resizeCanvas();
        function resizeCanvas() {
            var w = lib.properties.width,
                h = lib.properties.height;
            // var iw = window.innerWidth,
            //     ih = window.innerHeight;
            var iw = document.getElementById('canvas_wrapper').offsetWidth,
                ih = document.getElementById('canvas_wrapper').offsetHeight;
            var pRatio = window.devicePixelRatio || 1,
                xRatio = iw / w,
                yRatio = ih / h,
                sRatio = 1;
            if (isResp) {
                if ((respDim == 'width' && lastW == iw) || (respDim == 'height' && lastH == ih)) {
                    sRatio = lastS;
                } else if (!isScale) {
                    if (iw < w || ih < h) sRatio = Math.min(xRatio, yRatio);
                } else if (scaleType == 1) {
                    sRatio = Math.min(xRatio, yRatio);
                } else if (scaleType == 2) {
                    sRatio = Math.max(xRatio, yRatio);
                }
            }
            canvas.width = w * pRatio * sRatio;
            canvas.height = h * pRatio * sRatio;
            canvas.style.width = dom_overlay_container.style.width = anim_container.style.width = w * sRatio + 'px';
            canvas.style.height = anim_container.style.height = dom_overlay_container.style.height = h * sRatio + 'px';
            stage.scaleX = pRatio * sRatio;
            stage.scaleY = pRatio * sRatio;
            lastW = iw;
            lastH = ih;
            lastS = sRatio;
            stage.tickOnUpdate = false;
            stage.update();
            stage.tickOnUpdate = true;
        }
    }
    makeResponsive(true, 'width', false, 1);
    AdobeAn.compositionLoaded(lib.properties.id);
    fnStartAnimation();
}
/* -------------------------------------------------------------------------------- */