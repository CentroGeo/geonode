<!--SCRIPT-TO-FILE-[SCP01][ADD-MOD]-->

(function ($) {
	
	$(document).ready(function ($) {
		
		/* --TOOLTIP-NAV-- */
	
		$('.tooltip-nav').tooltipster({
			interactive: true,
			contentAsHTML: true,
			position: 'bottom-left',
			offsetX: -6,
			offsetY: -12,
			arrow: false,
			theme: 'mm-header-nav-tooltip'
		});

		
		/* MOSAICO-SIZE */
		
		mosaico_size();
		$(window).scroll(function() {
			/* ... */
		});
		
	});
	
	var mosaico_size_time;
	
	$(window).resize(function () {
		
		/* MOSAICO-SIZE */
		
		clearTimeout(mosaico_size_time);
		mosaico_size_time = setTimeout(mosaico_size, 60);
		
	});
	
})(jQuery);
