/* -------------------------------------------------- */
/* JavaScript Document */
/* -------------------------------------------------- */

/* --SLIDER-OPTIONS-- */

jQuery( '#layerslider' ).layerSlider({

	// Layout properties

	responsive				: true,
	responsiveUnder			: 0,
	layersContainer			: 0,
	hideOnMobile			: false,
	hideUnder				: 0,
	hideOver				: 100000,

	// Slideshow properties

	autoStart				: true,
	startInViewport			: true,
	pauseOnHover			: true,
	firstLayer				: 1,
	animateFirstSlide		: true,
	sliderFadeInDuration	: 350,
	loops					: 0,
	forceLoopNum			: true,
	twoWaySlideshow			: false,
	randomSlideshow			: false,

	// Appearance properties

	skin					: 'v5',
	skinsPath				: '/static/style_adesur/slider/css/skins/',
	globalBGColor			: 'transparent',
	globalBGImage			: false,

	// Navigation properties

	navPrevNext				: true,
	navStartStop			: true,
	navButtons				: true,
	hoverPrevNext			: true,
	hoverBottomNav			: false,
	keybNav					: true,
	touchNav				: true,
	showBarTimer			: false,
	showCircleTimer			: true,
	thumbnailNavigation		: 'disabled',
	tnContainerWidth		: '60%',
	tnWidth					: 100,
	tnHeight				: 60,
	tnActiveOpacity			: 35,
	tnInactiveOpacity		: 100,

	// Video properties

	autoPlayVideos			: true,
	autoPauseSlideshow		: 'auto',
	youtubePreview			: 'maxresdefault.jpg',

	// Image preload properties

	imgPreload				: true,
	lazyLoad				: true,

	// YourLogo properties

	yourLogo				: false,
	yourLogoStyle			: 'left: -10px; top: -10px;',
	yourLogoLink			: false,
	yourLogoTarget			: '_blank'

});


(function ($) {

	$(document).ready(function ($) {

		/* --SLIDER-DATA-- */

		// SLIDER [CONTENEDOR]
		$( '#layerslider .mm-slider' ).attr('data-ls', 'slidedelay: 6000; transition2d: 28;');

		// CAPA [IMAGEN]
		var json = [
			{ 'layer': '#layerslider .mm-slider-img-0', 'valuexin': '0', 'valueyin': '0' },
			{ 'layer': '#layerslider .mm-slider-img-1', 'valuexin': '-600', 'valueyin': '-80' },
			{ 'layer': '#layerslider .mm-slider-img-2', 'valuexin': '-600', 'valueyin': '-200' },
			{ 'layer': '#layerslider .mm-slider-img-3', 'valuexin': '-600', 'valueyin': '-320' },
			{ 'layer': '#layerslider .mm-slider-img-4', 'valuexin': '-600', 'valueyin': '-440' }
		];
		var layerstart = 0;
		$.each(json, function() {
			//$.each(this, function(name, value) {
				$( json[layerstart].layer ).attr('data-ls', 'offsetxin: ' + json[layerstart].valuexin + '; offsetyin: ' + json[layerstart].valueyin + '; durationin: 3000; delayin: 1000; easingin: easeOutQuart; fadein: true; offsetxout: 2400; offsetyout: -400; durationout: 1000; easingout: easeInQuart; fadeout: false; scalexout: 1; scaleyout: 1;');
			//});
			layerstart++;
		});
		// offsetxin: -600;
		// offsetyin: -200,
		//$( '#layerslider .mm-slider-img' ).attr('data-ls', 'offsetyin: -200; offsetxin: -600; durationin: 3000; delayin: 1000; easingin: easeOutQuart; fadein: false; offsetxout: 2400; offsetyout: -400; durationout: 1000; easingout: easeInQuart; fadeout: false; scalexout: 1; scaleyout: 1;');

		// CAPA [TITULO]
		$( '#layerslider .mm-slider-tit' ).attr('data-ls', 'offsetxin: 580; durationin: 1000; delayin: 0; easingin: easeInOutQuint; offsetxout: 0; durationout: 400;');
		// CAPA [TEXTO]
		$( '#layerslider .mm-slider-txt' ).attr('data-ls', 'offsetxin: 580; durationin: 1000; delayin: 500; easingin: easeInOutQuint; offsetxout: 0; durationout: 400;');
		// CAPA [BOTON]
		$( '#layerslider .mm-slider-btn' ).attr('data-ls', 'offsetxin: 500; durationin: 2000; delayin: 500; easingin: easeInOutQuint; offsetxout: 0; durationout: 400;');

	});

})(jQuery);
