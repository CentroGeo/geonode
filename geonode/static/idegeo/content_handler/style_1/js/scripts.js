jQuery(function($) {
    'use strict';
    $(document).ready(function() {
        //var pagePATH = document.location.pathname.match(/[^\/]+$/)[0];
        // var locPathN1 = pagePATH.split('_')[0];
        // var locPathN2 = pagePATH.split('_')[1];
        // console.log(pagePATH);
        var pageIDE = $('body').attr('class').split(' ')[0];
        var pageTPO = pageIDE.split('_')[0];
        var numLEVS = pageIDE.split('_')[1];
        // var pageSTEM = $('body').attr('class').split(' ')[1];
        // var numberLEV = pageSTEM.split('_')[1];
        // var parentLEV = 'stem_' + numberLEV.substring(0, 2);
        // console.log(pageIDE + ' : ' + pageTPO + '_' + numLEVS);
        window.FontAwesomeConfig.searchPseudoElements = true;
        /*******************************************************
            CONTENT [FIRST-ELEMENT]
        *******************************************************/
        $('section .section-wrapper .content').each(function() {
            $(this).find('>').first().css('margin-top', '0px').addClass('content-eone');
        });
        $('section .section-wrapper .content .row-block').each(function() {
            $(this).find('>').first().css('margin-top', '0px').addClass('row-content-eone');
        });
        /*******************************************************
            HEADER [FUNCTION] [HEIGHT-CHANGE]
        *******************************************************/
        var _sectionHD = '#header',
            _sectionMH = '#header + section > .section-mh',
            _sectionSH = '#header + section > .section-sh',
            height_secHD,
            paddbt_secMH,
            paddbt_secSH,
            paddtp_padMH,
            paddtp_padSH;

        function headerHeight_change() {
            height_secHD = Math.floor($(_sectionHD).outerHeight());
            paddbt_secMH = $(_sectionMH).css('padding-bottom');
            paddbt_secSH = $(_sectionSH).css('padding-bottom');
            paddtp_padMH = height_secHD - 30; // -60
            paddtp_padSH = height_secHD + 60; // -50
            $(_sectionMH).css({
                'padding-top': 'calc(' + paddtp_padMH + 'px + ' + paddbt_secMH + ')'
            });
            $(_sectionSH).css({
                'padding-top': 'calc(' + paddtp_padSH + 'px + ' + paddbt_secSH + ')'
            });
            // console.log(paddbt_secMH + ' :: ' + paddbt_secSH);
        }
        headerHeight_change();
        /*******************************************************
            HEADER [SCROLLMAGIC] [HEIGHT-CHANGE]
        *******************************************************/
        if ($('#header').length) {
            // INIT-CONTROLLER
            var controllerHeader = new ScrollMagic.Controller({
                globalSceneOptions: {
                    triggerHook: 'onLeave',
                    offset: height_secHD
                }
            });
            // BUILD-TWEEN
            var tweenHeader = TweenMax.fromTo('#header', 0.40, {
                css: {
                    paddingTop: '20px'
                }
            }, {
                css: {
                    paddingTop: '15px'
                },
                ease: Power0.easeNone
            });
            // BUILD-SCENE
            var sceneHeader = new ScrollMagic.Scene().setTween(tweenHeader).setClassToggle('#header', 'active').addTo(controllerHeader);
            // .addIndicators({name: 'INDICATOR'})
            // BUILD-SCENE
            // var sceneHeadName = new ScrollMagic.Scene().setTween('body.content-features #header .head-name', 0.30, {
            //     visibility: 'visible',
            //     opacity: 1,
            //     ease: Power0.easeNone,
            //     delay: 0.40
            // }).addTo(controllerHeader);
            // BUILD-SCENE
            var sceneHeaderMenu = new ScrollMagic.Scene().setTween('#header .header-menu', 0.30, {
                css: {
                    paddingTop: '15px'
                },
                ease: Power0.easeNone
            }).addTo(controllerHeader);
            // BUILD-SCENE
            var sceneHeadeLogos = new ScrollMagic.Scene().setTween('#header .sitelogo > img', 0.30, {
                css: {
                    height: '64px'
                },
                ease: Power0.easeNone
            }).addTo(controllerHeader);
            // BUILD-SCENE
            // var headerNav = new ScrollMagic.Scene().setTween('#header .header-menu .nav-child', 0.30, {
            //     css: {
            //         marginTop: '8px'
            //     },
            //     ease: Power0.easeNone
            // }).addTo(controllerHeader);
            // BUILD-SCENE
            var sceneHeaderMenuNav = new ScrollMagic.Scene().setTween('#header .header-menu .nav-menu > li > a, #header .header-menu .nav-menu > li > span', 0.30, {
                css: {
                    paddingBottom: '10px'
                },
                ease: Power0.easeNone
            }).addTo(controllerHeader);
            // INIT-CONTROLLER
            var controllerHeaderLeave = new ScrollMagic.Controller({
                globalSceneOptions: {
                    triggerHook: 'onLeave',
                    offset: (height_secHD * -1) + 36
                }
            });
            // BUILD-SCENE
            // var sceneHeaderLeave = new ScrollMagic.Scene({
            //     triggerElement: '#section-intro + .section-component',
            // }).setTween('#header', 0.30, {
            //     css: {
            //         boxShadow: '0px 6px 12px 0px rgba(0, 0, 0, 0.12)'
            //     },
            //     ease: Power0.easeNone
            // }).addTo(controllerHeaderLeave);
        }
        /*******************************************************
            FEATURES [SCROLLMAGIC] [SET-PIN]
        *******************************************************/
        if ($('body.content-features ').length) {
            // INIT-CONTROLLER
            var controllerFeatures = new ScrollMagic.Controller({
                globalSceneOptions: {
                    triggerHook: 'onLeave',
                    duration: 0,
                    offset: 0
                }
            });
            // GET-SLIDES
            var slidesFeatures = document.querySelectorAll('.content-features section.section-content');
            // BUILD-SCENE
            for (var i = 0; i < slidesFeatures.length; i++) {
                var sceneFeatures = new ScrollMagic.Scene({
                    triggerElement: slidesFeatures[i]
                }).setPin(slidesFeatures[i]).setClassToggle(slidesFeatures[i], 'active').addTo(controllerFeatures);
                // var start = sceneFeatures.scrollOffset();
                // var end = sceneFeatures.scrollOffset() + sceneFeatures.duration();
                // console.log('start: ' + start + ' end: ' + end);
            }
        }
        /*******************************************************
            SLIDER-NAV [FIRST-LETTER]
        *******************************************************/
        if ($('#slider-nav').length) {
            $('#slider-nav ul.slider-menu li.xtoc a').each(function(index) {
                var slideNavLTTR = $(this).text().substr(0, 1),
                    slideNavCODE = '<span class="xtoc-ltr">' + slideNavLTTR + '</span>',
                    slideTocITEM = $(this).find('.xtoc-txt'),
                    slideTocWDTH = Math.ceil(slideTocITEM.outerWidth());
                $(this).prepend(slideNavCODE);
                TweenMax.set(slideTocITEM, {
                    width: 0,
                    opacity: 0,
                    visibility: 'hidden'
                });

                function xtoc_mouseLeave() {
                    TweenMax.to(slideTocITEM, 0.30, {
                        width: 0,
                        visibility: 'hidden'
                    });
                }
                $(this).mouseenter(function() {
                    TweenMax.to(slideTocITEM, 0.30, {
                        visibility: 'visible',
                        width: slideTocWDTH,
                        opacity: 1,
                        ease: Linear.easeNone
                    });
                    $(this).css({
                        'width': slideTocWDTH
                    });
                }).mouseleave(function() {
                    TweenMax.to(slideTocITEM, 0.30, {
                        opacity: 0,
                        ease: Linear.easeNone,
                        onComplete: xtoc_mouseLeave
                    });
                    $(this).css({
                        'width': 15
                    });
                });
            });
        }
        /*******************************************************
            SLIDER-NAV [SCROLLMAGIC] [HIGHLIGHT]
        *******************************************************/
        if ($('#slider-nav').length) {
            // INIT-CONTROLLER
            var controllerHighlight = new ScrollMagic.Controller({
                globalSceneOptions: {
                    triggerHook: 'onLeave',
                    offset: height_secHD * -1
                }
            });
            // BUILD-SCENE
            $('.xtoc').each(function() {
                var eleIDE = $(this).children('a:first-of-type').attr('href'),
                    eleHGT = $(eleIDE).height();
                var highlightScene = new ScrollMagic.Scene({
                    triggerElement: eleIDE,
                    duration: eleHGT
                }).setClassToggle(this, 'active').addTo(controllerHighlight);
            });
        }
        /*******************************************************
            SLIDER-NAV [SCROLLMAGIC] [SHOW-HIDE]
        *******************************************************/
        if ($('#slider-nav').length) {
            // INIT-CONTROLLER
            var controllerSlidenav = new ScrollMagic.Controller({
                globalSceneOptions: {
                    triggerElement: '#xtoc-01',
                    triggerHook: 'onLeave',
                    offset: height_secHD * -1
                }
            });
            // BUILD-TWEEN
            var tweenSlidenav = TweenMax.fromTo('#slider-nav', 0.60, {
                x: 65,
                opacity: 0,
                visibility: 'hidden'
            }, {
                x: 0,
                visibility: 'visible',
                opacity: 1,
                ease: Power0.easeNone
            });
            // BUILD-SCENE
            var sceneSlidenav = new ScrollMagic.Scene().setTween(tweenSlidenav).setClassToggle('#slider-nav', 'active').addTo(controllerSlidenav);
        }
        /*******************************************************
            SLIDER-NAV [SCROLLMAGIC] [SCROLL-TO] [CLICK]
        *******************************************************/
        if ($('#slider-nav').length) {
            // INIT-CONTROLLER
            var controller = new ScrollMagic.Controller();
            controller.scrollTo(function(newpos) {
                TweenMax.to(window, 1.2, {
                    scrollTo: {
                        y: newpos
                    },
                    ease: Power3.easeOut
                });
            });
            // SCROLL-TO-ANCHOR-LINKS
            $(document).on('click', 'a[href^="#"]', function(e) {
                var id = $(this).attr('href');
                if ($(id).length > 0) {
                    e.preventDefault();
                    controller.scrollTo(id);
                    if (window.history && window.history.pushState) {
                        history.pushState('', document.title, id);
                    }
                }
            });
        }
        /*******************************************************
            ACCORDION-SLIDER [INIT]
        *******************************************************/
        if ($('.section-component .accordion-slider').length) {
            $('#com_accordion-slider').accordionSlider({
                width: '100%',
                height: 420,
                responsive: true,
                responsiveMode: 'custom',
                orientation: 'horizontal',
                openedPanelSize: 'max',
                maxOpenedPanelSize: 780,
                openPanelOn: 'hover',
                closePanelsOnMouseOut: true,
                mouseDelay: 200,
                panelDistance: 0,
                openPanelDuration: 600,
                closePanelDuration: 600,
                visiblePanels: 5,
                shadow: true,
                autoplay: false,
                mouseWheel: false,
                breakpoints: {
                    939: {
                        height: 320,
                        maxOpenedPanelSize: 594
                    },
                    759: {
                        height: 580,
                        orientation: 'vertical',
                        maxOpenedPanelSize: 780,
                        closePanelsOnMouseOut: false,
                        visiblePanels: 5
                    }
                }
            });
        }
        /*******************************************************
            GRID-ACCORDION [INIT]
        *******************************************************/
        if ($('.section-component .grid-accordion').length) {
            $('#com_grid-accordion').gridAccordion({
                width: '100%',
                height: 640,
                responsive: true,
                responsiveMode: 'custom',
                orientation: 'horizontal',
                columns: 6,
                rows: 2,
                openedPanelWidth: 'auto',
                openedPanelHeight: 'auto',
                maxOpenedPanelWidth: '70%',
                maxOpenedPanelHeight: '70%',
                openPanelOn: 'hover',
                closePanelsOnMouseOut: false,
                mouseDelay: 200,
                panelDistance: 10,
                openPanelDuration: 600,
                closePanelDuration: 600,
                shadow: false,
                autoplay: false,
                mouseWheel: false,
                breakpoints: {
                    1199: {
                        columns: 5,
                        rows: 3
                    },
                    991: {
                        columns: 4,
                        rows: 3
                    },
                    767: {
                        columns: 3,
                        rows: 3
                    },
                    575: {
                        columns: 2,
                        rows: 4,
                        height: 760,
                        orientation: 'vertical'
                    }
                }
            });
        }
        /*******************************************************
            DRAWER-NAV
        *******************************************************/
        /* SCRIPTS_DRAWER.JS *
        /*******************************************************
            COM_SLIDER-THUMB
        *******************************************************/
        /* SCRIPTS_JSSORSLIDER.JS */
        /*******************************************************
            COM_SLIDER-THUMBNAV
        *******************************************************/
        /* SCRIPTS_JSSORSLIDER.JS */
        /*******************************************************
            COM_UNITEGALLERY
        *******************************************************/
        /* SCRIPTS_UNITEGALLERY.JS *
        /*******************************************************
            LINK LONG [WORD-BREAK]
        *******************************************************/
        $('a:contains("http"), a:contains("www")').css('word-break', 'break-all');
        /*******************************************************
            BOTTOM [DATE-YEAR]
        *******************************************************/
        $('#section-bottom .bottom-year').html(new Date().getFullYear());
        /*******************************************************
            FUNCTION [WINDOW-RESIZE DONE]
        *******************************************************/
        function doneResize() {
            headerHeight_change();
            // console.log('DONE-RESIZE');
            // -------------------------------------------------
            // var docWidth = $(document).width();
            // console.log(docWidth);
            // -------------------------------------------------
            // var docWidth = $(document).width() + 15;
            // var eleWidth = $('.section-component .mosaic-item img').width();
            // console.log(docWidth + ' : ' + eleWidth);
            // -------------------------------------------------
            // var docWidth = $(document).width();
            // var eleWidth = $('.section-component .grid-accordion .ga-panel').width();
            // var eleHeight = $('.section-component .grid-accordion .ga-panel').height();
            // console.log(docWidth + ' : ' + eleWidth + ' x ' + eleHeight);
        }
        doneResize();
        /*******************************************************
            WINDOW-RESIZE
        *******************************************************/
        var resizeID;
        $(window).resize(function() {
            clearTimeout(resizeID);
            resizeID = setTimeout(doneResize, 400);
        });
    });
});