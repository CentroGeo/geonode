jQuery(function ($) {

	'use strict';

	$(document).ready(function () {


		/* SECTION [OTROS-SERVICIOS] [MEDIA-DATA-HEIGHT] */
		mediaDataHeight();

		/*******************************************************
		    NAV MENU [ANI]
		*******************************************************/

		TweenMax.set($('#main-content .content-nav-item'), {
			autoAlpha: 0,
			display: 'none'
		});
		TweenMax.fromTo($('#item-ide'), 1.2, {
			autoAlpha: 0,
			display: 'none'
		}, {
			delay: 0.6,
			autoAlpha: 1,
			display: 'block'
		});
		TweenMax.set($('#main-content .content-nav-menu .nav-menu-svg'), {
			autoAlpha: 0,
			display: 'none'
		});
		TweenMax.fromTo($('#main-content .content-nav-menu .nav-menu-img > img'), 1.2, {
			autoAlpha: 0,
			scale: 0.2
		}, {
			autoAlpha: 1,
			scale: 1,
			transformOrigin: 'center center',
			onComplete: complete_navmenu
		});

		function complete_navmenu() {
			TweenMax.set($('#main-content .content-nav-menu .nav-menu-svg'), {
				delay: 0.6,
				autoAlpha: 1,
				display: 'block'
			});
		}

		/*******************************************************
		    NAV MENU SVG [MOUSE]
		*******************************************************/

		var modalItem;
		var modalBody;
		var menu_id;

		// BOOTSTRAP [MODAL]

		$("#modal").modal('hide'); //600
		$("#modal-lg").modal('hide'); //900
		$("#modal-sm").modal('hide'); //300

		// ACERCA
		$('.nav-menu-svg #st00, .modal-acerca').click(function (event) {
			// BOOTSTRAP [MODAL]
			event.preventDefault();
			modalItem = $('#modal-lg');
			modalBody = modalItem.find('.modal-body');
			modalBody.load('modal_acerca.html');
			modalItem.modal('show');
		}).mouseenter(function () {
			if (this.id === "st00") {
				$('.nav-menu-svg #st00-hover').css('opacity', 1.0);
				menu_id = $('#item-acerca');
				showme(menu_id);
			}
		}).mouseleave(function () {
			if (this.id === "st00") {
				$('.nav-menu-svg #st00-hover').css('opacity', 0.0);
				hideme(menu_id);
			}
		});
		// CAPAS
		$('.nav-menu-svg #st01').click(function () {
			window.location.href = 'interactive/projects';
		}).mouseenter(function () {
			$('.nav-menu-svg #st01-hover').css('opacity', 1.0);
			menu_id = $('#item-proyectos');
			showme(menu_id);
		}).mouseleave(function () {
			$('.nav-menu-svg #st01-hover').css('opacity', 0.0);
			hideme(menu_id);
		});
		// MAPAS
		$('.nav-menu-svg #st02').click(function () {
			window.location.href = 'interactive/maps';
		}).mouseenter(function () {
			$('.nav-menu-svg #st02-hover').css('opacity', 1.0);
			menu_id = $('#item-mapas');
			showme(menu_id);
		}).mouseleave(function () {
			$('.nav-menu-svg #st02-hover').css('opacity', 0.0);
			hideme(menu_id);
		});
		// PROYECTOS
		$('.nav-menu-svg #st03').click(function () {
			window.location.href = 'interactive/layers';
		}).mouseenter(function () {
			$('.nav-menu-svg #st03-hover').css('opacity', 1.0);
			menu_id = $('#item-capas');
			showme(menu_id);
		}).mouseleave(function () {
			$('.nav-menu-svg #st03-hover').css('opacity', 0.0);
			hideme(menu_id);
		});
		// DOCUMENTOS
		$('.nav-menu-svg #st04').click(function () {
			window.location.href = 'interactive/documents';
		}).mouseenter(function () {
			$('.nav-menu-svg #st04-hover').css('opacity', 1.0);
			menu_id = $('#item-documentos');
			showme(menu_id);
		}).mouseleave(function () {
			$('.nav-menu-svg #st04-hover').css('opacity', 0.0);
			hideme(menu_id);
		});

		/*******************************************************
		    WINDOW-RESIZE
		*******************************************************/

		$(window).resize(function () {

			/* SECTION [OTROS-SERVICIOS] [MEDIA-DATA-HEIGHT] */
			mediaDataHeight();

		}).resize();

	});

	/*******************************************************
	    FUNCTIONS
	*******************************************************/

	function mediaDataHeight() {
		var maxHeight = -1;
		$('#otros-servicios .col-media-data').each(function () {
			$(this).height('auto');
			maxHeight = maxHeight > $(this).height() ? maxHeight : $(this).height();
		});
		$('#otros-servicios .col-media-data').each(function () {
			$(this).height(maxHeight);
		});
	}

	function showme(menu_id) {
		TweenMax.to($('#item-ide'), 0, {
			autoAlpha: 0
		});
		TweenMax.to($(menu_id), 0.6, {
			autoAlpha: 1
		});
		$('#item-ide').css('display', 'none');
		$(menu_id).css('display', 'block');
	}

	function hideme(menu_id) {
		TweenMax.to($(menu_id), 0, {
			autoAlpha: 0
		});
		TweenMax.to($('#item-ide'), 0.6, {
			autoAlpha: 1
		});
		$(menu_id).css('display', 'none');
		$('#item-ide').css('display', 'block');
	}

});
