
        /*******************************************************
            GRID-ACCORDION [INIT]
        *******************************************************/
        var x_s = "{{item.size}}";
        if(x_s="6"){
          x_a = 7;
          x_b = 6;
          x_c = 5;
          x_d = 4;
          x_e = 3;
        }
        if(x_s="5"){
          x_a = 6;
          x_b = 5;
          x_c = 4;
          x_d = 3;
          x_e = 2;
        }
        if(x_s="4"){
          x_a = 5;
          x_b = 4;
          x_c = 3;
          x_d = 2;
          x_e = 1;
        }
        else{
            x_a = 4;
            x_b = 3;
            x_c = 2;
            x_d = 1;
            x_e = 1;
        }
        if ($('.section-component .grid-accordion').length) {
            $('#com_grid-accordion{{item.id}}').gridAccordion({
                width: '100%',
                height: 540,
                responsive: true,
                responsiveMode: 'custom',
                orientation: 'horizontal',
                columns: x_a,
                rows: 2,
                openedPanelWidth: 'auto',
                openedPanelHeight: 'auto',
                maxOpenedPanelWidth: '70%',
                maxOpenedPanelHeight: '70%',
                openPanelOn: 'hover',
                closePanelsOnMouseOut: true,
                mouseDelay: 200,
                panelDistance: 10,
                openPanelDuration: 600,
                closePanelDuration: 600,
                shadow: false,
                autoplay: false,
                mouseWheel: false,
                breakpoints: {
                    1199: {
                        columns: x_b,
                        rows: 3
                    },
                    991: {
                        columns: x_c,
                        rows: 3
                    },
                    767: {
                        columns: x_d,
                        rows: 3
                    },
                    575: {
                        columns: x_e,
                        rows: 4,
                        height: 760,
                        orientation: 'vertical'
                    }
                }
            });
        }
