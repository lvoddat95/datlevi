var App = function () {
    //
    // Setup module components
    //

    // Sidebars
    // -------------------------

    //
    // On desktop
    //


    // Resize main sidebar
    var _sidebarMainResize = function () {

        // Elements
        const sidebarMainElement = $('#main-nav'),
            sidebarMainToggler = $('.sidebar-main-toggle'),
            resizeClass = 'sidebar-expand',
            expandClass = 'expand';

        if ($('#main-nav').length > 0) {
            var ps = new PerfectScrollbar('#main-nav', {
                wheelPropagation: true
            });
        }

        // If sidebar is resized by default
        if ($('body').hasClass('sidebar-xs')) {
            sidebarMainElement.addClass(resizeClass);
            // sidebarMainElement.find('.nav-item-submenu').removeClass('nav-item-open');
            if (ps) ps.update();
        }

        // Toggle min sidebar class
        $('.sidebar-main-toggle').on('click', function (e) {
            e.preventDefault();
            $('body').toggleClass('sidebar-xs');
        });

        // Toggle classes on click
        sidebarMainToggler.on('click', function (e) {
            sidebarMainElement.toggleClass(resizeClass);
            !sidebarMainElement.hasClass(resizeClass) && sidebarMainElement.removeClass(expandClass);
        });

        // Add class on mouse enter
        sidebarMainElement.on('mouseenter', function () {
            sidebarMainElement.hasClass(resizeClass) && sidebarMainElement.addClass(expandClass);
            // if($('body').hasClass('sidebar-xs')) {
            //     sidebarMainElement.find('.nav-item-submenu.nav-item-open > ul').show('fast');
            //     if (ps) ps.update();
            // }
        });

        // Remove class on mouse leave
        sidebarMainElement.on('mouseleave', function () {
            sidebarMainElement.removeClass(expandClass);
            // if($('body').hasClass('sidebar-xs')) {
            //     sidebarMainElement.find('.nav-item-submenu.nav-item-open > ul').hide('fast');
            //     if (ps) ps.update();
            // }
            // if ($('body').hasClass('sidebar-xs')) {
            //     sidebarMainElement.find('.nav-item-submenu').removeClass('nav-item-open');
            //     if (ps) ps.update();
            // }
        });

    };

    // Toggle main sidebar
    var _sidebarMainToggle = function () {
        $(document).on('click', '.sidebar-main-hide', function (e) {
            e.preventDefault();
            $('body').toggleClass('sidebar-main-hidden');
        });
    };

    // Toggle content sidebar
    var _sidebarComponentToggle = function () {
        $(document).on('click', '.sidebar-component-toggle', function (e) {
            e.preventDefault();
            $('body').toggleClass('sidebar-component-hidden');
        });

    };


    //
    // On mobile
    //


    // Toggle main sidebar on mobile
    var _sidebarMobileMainToggle = function () {
        $('.content-wrapper').prepend('<div class="sb-overlay"></div>');
        $('.sidebar-mobile-main-toggle').on('click', function (e) {
            return;
            e.preventDefault();
            $('body').toggleClass('sidebar-mobile-main').removeClass('sidebar-mobile-secondary sidebar-mobile-right');
            if ($('.sidebar-main').hasClass('sidebar-fullscreen')) {
                $('.sidebar-main').removeClass('sidebar-fullscreen');
            }

        });

        $('.sidebar-mobile-main-close').on('click', function (e) {
            e.preventDefault();
            $('body').removeClass('sidebar-mobile-main');
        });

        $('body').on('click', '.sb-overlay', function (e) {
            e.preventDefault();
            $('body').removeClass('sidebar-mobile-main');
        });

        if ($('#main-menu').length > 0) {
            if (typeof hcOffcanvasNav == 'undefined') {
                console.warn('Warning - hcOffcanvasNav Js is not loaded.');
                return;
            }
            if ($(".sidebar-mobile-main-toggle").length == 0) {
                console.warn('Warning - Thieu button sidebar-mobile-main-toggle. Kiem tra lai HTML!');
                return;
            }
            var $nav = $('#main-menu').hcOffcanvasNav({
                disableAt: 768,
                customToggle: '.sidebar-mobile-main-toggle',
                levelSpacing: 0,
                navTitle: 'DANH SÁCH MENU',
                levelTitles: true,
                levelTitleAsBack: true,
                pushContent: '.page-content',
                labelBack: 'Quay lại',
                labelClose: false
            });
            var Nav = $nav.data('hcOffcanvasNav');
        }


    };

    // Toggle component sidebar on mobile
    var _sidebarMobileComponentToggle = function () {
        $('.sidebar-mobile-component-toggle').on('click', function (e) {
            e.preventDefault();
            $('body').toggleClass('sidebar-mobile-component');
        });
    };


    // Navigations
    // -------------------------

    // Sidebar navigation
    var _navigationSidebar = function () {

        // Define default class names and options
        var navClass = 'nav-sidebar',
            navItemClass = 'nav-item',
            navItemOpenClass = 'nav-item-open',
            navLinkClass = 'nav-link',
            navSubmenuClass = 'nav-group-sub',
            navSlidingSpeed = 250;

        // Configure collapsible functionality
        $('.' + navClass).each(function () {
            $(this).find('.nav-item-submenu > .nav-link, .nav-item-submenu > .nav-add-link > .nav-link-icon').not('.disabled').on('click', function (e) {
                e.preventDefault();

                // Simplify stuff
                var $target = $(this),
                    $navSidebarMini = $('.sidebar-xs').not('.sidebar-mobile-main').find('.sidebar-main .' + navClass).children('.' + navItemClass);

                // Collapsible
                if ($target.closest('.' + navItemClass).hasClass(navItemOpenClass)) {
                    $target.closest('.' + navItemClass).not($navSidebarMini).removeClass(navItemOpenClass).children('.' + navSubmenuClass).slideUp(navSlidingSpeed);
                } else {
                    $target.closest('.' + navItemClass).not($navSidebarMini).addClass(navItemOpenClass).children('.' + navSubmenuClass).slideDown(navSlidingSpeed);
                }

                // Accordion
                if ($target.closest('.' + navClass).data('nav-type') == 'accordion') {
                    $target.closest('.' + navItemClass).not($navSidebarMini).siblings(':has(.' + navSubmenuClass + ')').removeClass(navItemOpenClass).children('.' + navSubmenuClass).slideUp(navSlidingSpeed);
                }
            });
        });

        // Disable click in disabled navigation items
        $(document).on('click', '.' + navClass + ' .disabled', function (e) {
            e.preventDefault();
        });

        // Scrollspy navigation
        $('.nav-scrollspy').find('.' + navItemClass).has('.' + navSubmenuClass).children('.' + navItemClass + ' > ' + '.' + navLinkClass).off('click');
    };

    // Navbar navigation
    var _navigationNavbar = function () {

        // Prevent dropdown from closing on click
        $(document).on('click', '.dropdown-content', function (e) {
            e.stopPropagation();
        });

        // Disabled links
        $('.navbar-nav .disabled a, .nav-item-levels .disabled').on('click', function (e) {
            e.preventDefault();
            e.stopPropagation();
        });

        // Show tabs inside dropdowns
        $('.dropdown-content a[data-toggle="tab"]').on('click', function (e) {
            $(this).tab('show');
        });
    };

    // Home menu mobile
    var _homeMenuModal = function () {
        if ($('.sec-aplication').length > 0) {
            var fancybox = null;
            if ($(window).width() < 768) {
                $(".about-readmore").on('click', function (e) {
                    e.preventDefault();
                    var menu = $(this).closest('.about-box').find('ul');
                    fancybox = $.fancybox.open({
                        src: menu,
                        type: 'inline',
                        opts: {
                            baseClass: "home-menu-modal",
                        }
                    });
                });
            } else {
                if (fancybox !== null) {
                    fancybox.close();
                }
            }

            if (fancybox !== null) {
                $(window).on('resize', function (evt) {
                    if ($(window).width() > 767) {
                        fancybox.close();
                    }
                });
            }
        }
    }



    // Card actions
    // -------------------------

    // Reload card (uses BlockUI extension)
    var _cardActionReload = function () {
        $('.card [data-action=reload]:not(.disabled)').on('click', function (e) {
            e.preventDefault();
            var $target = $(this),
                block = $target.closest('.card');

            // Block card
            $(block).block({
                message: '<i class="icon-spinner2 spinner"></i>',
                overlayCSS: {
                    backgroundColor: '#fff',
                    opacity: 0.8,
                    cursor: 'wait',
                    'box-shadow': '0 0 0 1px #ddd'
                },
                css: {
                    border: 0,
                    padding: 0,
                    backgroundColor: 'none'
                }
            });

            // For demo purposes
            window.setTimeout(function () {
                $(block).unblock();
            }, 2000);
        });
    };

    // Collapse card
    var _cardActionCollapse = function () {
        var $cardCollapsedClass = $('.card-collapsed');

        // Hide if collapsed by default
        $cardCollapsedClass.children('.card-header').nextAll().hide();

        // Rotate icon if collapsed by default
        $cardCollapsedClass.find('[data-action=collapse]');

        // Collapse on click
        $('.card [data-action=collapse]:not(.disabled)').on('click', function (e) {
            var $target = $(this),
                slidingSpeed = 150;

            e.preventDefault();
            $target.parents('.card').toggleClass('card-collapsed');
            $target.closest('.card').children('.card-header').nextAll().slideToggle(slidingSpeed);
        });
    };

    // Remove card
    var _cardActionRemove = function () {
        $('.card [data-action=remove]').on('click', function (e) {
            e.preventDefault();
            var $target = $(this),
                slidingSpeed = 150;

            // If not disabled
            if (!$target.hasClass('disabled')) {
                $target.closest('.card').slideUp({
                    duration: slidingSpeed,
                    start: function () {
                        $target.addClass('d-block');
                    },
                    complete: function () {
                        $target.remove();
                    }
                });
            }
        });
    };

    // Card fullscreen mode
    var _cardActionFullscreen = function () {
        $('.card [data-action=fullscreen]').on('click', function (e) {
            e.preventDefault();

            // Define vars
            var $target = $(this),
                cardFullscreen = $target.closest('.card'),
                overflowHiddenClass = 'overflow-hidden',
                collapsedClass = 'collapsed-in-fullscreen',
                fullscreenAttr = 'data-fullscreen';

            // Toggle classes on card
            cardFullscreen.toggleClass('fixed-top h-100 rounded-0');

            // Configure
            if (!cardFullscreen.hasClass('fixed-top')) {
                $target.removeAttr(fullscreenAttr);
                cardFullscreen.children('.' + collapsedClass).removeClass('show');
                $('body').removeClass(overflowHiddenClass);
                $target.siblings('[data-action=move], [data-action=remove], [data-action=collapse]').removeClass('d-none');
            } else {
                $target.attr(fullscreenAttr, 'active');
                cardFullscreen.removeAttr('style').children('.collapse:not(.show)').addClass('show ' + collapsedClass);
                $('body').addClass(overflowHiddenClass);
                $target.siblings('[data-action=move], [data-action=remove], [data-action=collapse]').addClass('d-none');
            }
        });
    };


    // Misc
    // -------------------------

    // Dropdown submenus. Trigger on click
    var _dropdownSubmenu = function () {

        // All parent levels require .dropdown-toggle class
        $('.dropdown-menu').find('.dropdown-submenu').not('.disabled').find('.dropdown-toggle').on('click', function (e) {
            e.stopPropagation();
            e.preventDefault();

            // Remove "show" class in all siblings
            $(this).parent().siblings().removeClass('show').find('.show').removeClass('show');

            // Toggle submenu
            $(this).parent().toggleClass('show').children('.dropdown-menu').toggleClass('show');

            // Hide all levels when parent dropdown is closed
            $(this).parents('.show').on('hidden.bs.dropdown', function (e) {
                $('.dropdown-submenu .show, .dropdown-submenu.show').removeClass('show');
            });
        });
    };

    // Header elements toggler
    var _headerElements = function () {

        // Toggle visible state of header elements
        $('.header-elements-toggle').on('click', function (e) {
            e.preventDefault();
            $(this).parents('[class*=header-elements-]').find('.header-elements').toggleClass('d-none');
        });

        // Toggle visible state of footer elements
        $('.footer-elements-toggle').on('click', function (e) {
            e.preventDefault();
            $(this).parents('.card-footer').find('.footer-elements').toggleClass('d-none');
        });
    };


    // Components
    // -------------------------

    // Tooltip
    var _component_tooltip = function () {

        // Initialize
        $('[data-popup="tooltip"]').tooltip();

        // Demo tooltips, remove in production
        var demoTooltipSelector = '[data-popup="tooltip-demo"]';
        if ($(demoTooltipSelector).is(':visible')) {
            $(demoTooltipSelector).tooltip('show');
            setTimeout(function () {
                $(demoTooltipSelector).tooltip('hide');
            }, 2000);
        }
    };

    // Popover
    var _component_popover = function () {
        $('[data-popup="popover"]').popover();
    };


    // Tooltip tipsy
    var _component_tooltip_tipsy = function () {
        if ($('[data-tooltip="tipsy"]').length > 0) {
            if (!$().tipsy) {
                console.warn('Warning - Tipsy js is not loaded.');
                return;
            }
            $('[data-tooltip="tipsy"]').each(function (index) {
                var $this = $(this);
                var v_gravity = '';
                var v_pos = $this.data('position');

                // Mac dinh hien thi "top"
                if (!v_pos || v_pos == 'top') {
                    v_gravity = 's';
                } else if (v_pos == 'bottom') {
                    v_gravity = 'n';
                } else if (v_pos == 'left') {
                    v_gravity = 'e';
                } else if (v_pos == 'right') {
                    v_gravity = 'w';
                } else if (v_pos == 'bottom-left') {
                    v_gravity = 'ne';
                } else if (v_pos == 'bottom-right') {
                    v_gravity = 'nw';
                } else if (v_pos == 'top-left') {
                    v_gravity = 'se';
                } else if (v_pos == 'top-right') {
                    v_gravity = 'sw';
                }

                $this.tipsy({
                    gravity: v_gravity,
                    html: true
                });
            });

        }
    }

    // Select2
    var _component_select2 = function (p_select) {
        if (!$().select2) {
            console.warn('Warning - Select2 Js is not loaded.');
            return;
        }

        let select = $('[select2]');
        if (p_select) select = p_select;


        if (select.length > 0) {

            $(select).select2({
                language: "vi",
                minimumResultsForSearch: 5,
            });

            $(select).each(function (index, element) {
                let attr_add_new_item = $(element).attr('select2-add-new-item');

                if (typeof attr_add_new_item != 'undefined') {
                    if (attr_add_new_item == "") {
                        attr_add_new_item = "Nhập giá trị thêm mới: ";
                    }

                    $(element).on("select2:close", function (e) {
                        let el = $(this);
                        if (el.val() === "new") {
                            let newval = prompt(attr_add_new_item);
                            if (newval !== null) {
                                el.append('<option>' + newval + '</option>')
                                    .val(newval);
                            }
                        }
                    });
                }

            });
        }
    }

    // Datepicker
    var _component_datepicker = function (p_datepicker) {

        if (!$().datepicker) {
            return false;
        }

        var datepicker = $('.datepicker');
        if (p_datepicker) datepicker = p_datepicker;

        if ($().datepicker) {

            $.datepicker._gotoToday = function (id) {
                var target = $(id);
                var inst = this._getInst(target[0]);
                if (this._get(inst, 'gotoCurrent') && inst.currentDay) {
                    inst.selectedDay = inst.currentDay;
                    inst.drawMonth = inst.selectedMonth = inst.currentMonth;
                    inst.drawYear = inst.selectedYear = inst.currentYear;
                } else {
                    var date = new Date();
                    inst.selectedDay = date.getDate();
                    inst.drawMonth = inst.selectedMonth = date.getMonth();
                    inst.drawYear = inst.selectedYear = date.getFullYear();
                    // the below two lines are new
                    this._setDateDatepicker(target, date);
                    this._selectDate(id, this._getDateDatepicker(target));
                }
                this._notifyChange(inst);
                this._adjustDate(target);
            }

            $(datepicker).datepicker({
                firstDay: 1,
                showButtonPanel: true,
                changeMonth: true,
                changeYear: true,
                dateFormat: 'dd/mm/yy',
                onSelect: function (date, obj) {
                    $(datepicker).trigger('change');
                },
                beforeShow: function (input, obj) {
                    var picker = $(obj.dpDiv);
                    var v_type = $(input).attr('type');
                    var btn_today = picker.find('.ui-datepicker-current');

                    if (v_type == 'date') {
                        $(input).datepicker('option', 'dateFormat', 'yy-mm-dd');
                    }

                },

            })

        }
    }

    // Cleave js: dinh dang kieu nhap du lieu input
    var _component_input_type = function () {

        if (typeof Cleave == 'undefined') {
            console.warn('Warning - Cleave Js is not loaded.');
            return;
        }


        $('.input-money').toArray().forEach(function (field) {
            var v_negative = $(field).data('negative');
            new Cleave(field, {
                numeral: true,
                numeralPositiveOnly: !v_negative ? true : false,
                numeralDecimalScale: 5
            });
        });

        $('.input-date').toArray().forEach(function (field) {
            if ($(field).attr('type') == 'date') {
                return;
            }
            var input_date = new Cleave(field, {
                date: true,
                delimiter: '/',
                datePattern: ['d', 'm', 'Y'],
                // dateMin: '2000-01-01',
                // dateMax: '2099-01-01',
                copyDelimiter: true,
            });
        });

        $('.input-day').toArray().forEach(function (field) {
            new Cleave(field, {
                date: true,
                datePattern: ['d'],
                copyDelimiter: true,
            });
        });

        $('.input-month').toArray().forEach(function (field) {
            new Cleave(field, {
                date: true,
                datePattern: ['m'],
                copyDelimiter: true,
            });
        });

        $('.input-year').toArray().forEach(function (field) {
            new Cleave(field, {
                date: true,
                datePattern: ['Y'],
                copyDelimiter: true,
            });
        });

        $('.input-my').toArray().forEach(function (field) {
            new Cleave(field, {
                date: true,
                datePattern: ['m', 'Y'],
                copyDelimiter: true,
            });
        });




        $('.input-time').toArray().forEach(function (field) {
            new Cleave(field, {
                time: true,
                timePattern: ['h', 'm'],
                copyDelimiter: true,
            });
        });

        $('.input-float').toArray().forEach(function (field) {
            var v_negative = $(field).data('negative');
            new Cleave(field, {
                numeral: true,
                numeralPositiveOnly: !v_negative ? true : false,
                numeralDecimalScale: 5
            });
        });
        $('.input-number').toArray().forEach(function (field) {
            var v_negative = $(field).data('negative');
            new Cleave(field, {
                numeral: true,
                numeralPositiveOnly: !v_negative ? true : false,
                numeralDecimalMark: '',
                delimiter: ''
            });
        });
        $('.input-phone').toArray().forEach(function (field) {
            new Cleave(field, {
                phone: true,
                phoneRegionCode: 'VN',
            });
        });
        $('.input-bsx').toArray().forEach(function (field) {
            new Cleave(field, {
                blocks: [4, 5],
                uppercase: true
            });
        });
    }


    // Repeater js
    var _component_repeater = function () {
        if ($('[repeater]').length > 0) {
            if (!$().repeater) {
                console.warn('Warning - Repeater Js is not loaded.');
                return;
            }
            $('[repeater]').each(function (index) {
                window.outerRepeater = $(this).repeater({
                    show: function (e) {
                        var $v_clone = $(this);
                        var v_table = $v_clone.closest('table');
                        var v_parent = $v_clone.closest('[repeater]');
                        var v_select = v_parent.find('[select2]');
                        var v_datepicker = v_parent.find('.datepicker');
                        var v_clone = v_parent.find('[clone]');

                        if (v_table.length > 0) {
                            if (v_table.is('.datatable')) {
                                v_table.DataTable().row.add($v_clone).draw();
                            }
                        }

                        if (v_datepicker.hasClass('hasDatepicker')) {
                            v_datepicker.removeClass('hasDatepicker')
                                .removeData('datepicker')
                                .removeAttr('id')
                                .unbind();
                        }

                        $v_clone.slideDown();

                        _component_input_type();
                        _component_datepicker(v_datepicker);
                        _component_select2(v_select);
                        _component_clone(v_clone);
                    },
                    hide: function (deleteElement) {
                        var $v_clone = $(this);
                        var v_parent = $v_clone.closest('[repeater]');
                        var v_table = $v_clone.closest('table');

                        if (confirm('Xoa dong nay ?')) {
                            if (v_table.length > 0) {
                                if (v_table.is('.datatable')) {
                                    var dt_tb = v_table.DataTable();
                                    var tableRow = dt_tb.row($(this));
                                    dt_tb.row(tableRow).remove().draw();
                                }
                            }
                            console.log($(this));
                            console.log(deleteElement);
                            $(this).slideUp(deleteElement);
                        }
                    },
                    repeaters: [{
                        selector: '[child-repeater]',
                        show: function () {
                            $(this).slideDown();
                        },
                        hide: function (deleteElement) {
                            $(this).slideUp(deleteElement);
                        }
                    }]
                });
            });
        }
    }

    // Clone Form
    var _component_clone = function (p_clone) {

        if ($('[clone]').length > 0) {
            if (!$().repeater) {
                console.warn('Warning - cloner Js is not loaded.');
                return;
            }

            var clone = $('[clone]');
            if (p_clone) clone = p_clone;

            $(clone).each(function (index) {
                $(this).cloner({
                    clonableContainer: '.clonable-block', // the selector to contain all clonables
                    clonable: '.clonable',
                    addButton: '.clonable-button-add',
                    closeButton: '.clonable-button-close',
                    focusableElement: ':input:visible:enabled:first', // this targets all possible input elements

                    clearValueOnClone: true,
                    removeNestedClonablesOnClone: true,
                    limitCloneNumbers: true,

                    debug: false,

                    cloneName: 'clonable-clone',
                    sourceName: 'clonable-source',

                    clonableCloneNumberDecrement: 'clonable-clone-number-decrement',

                    incrementName: 'clonable-increment',
                    decrementName: 'clonable-decrement',

                    beforeToggle: function (clone, index, self) {},
                    afterToggle: function (clone, index, self) {},
                });
            });

        }

    }

    // PerfectScrollbar js
    var _component_perfect_scrollbar = function () {
        if ($('[scrollbar]').length > 0) {
            if (typeof PerfectScrollbar == 'undefined') {
                console.warn('Warning - PerfectScrollbar Js is not loaded.');
                return;
            }
            $('[scrollbar]').each(function () {
                const ps = new PerfectScrollbar($(this)[0], {
                    suppressScrollX: true
                });
            });

        }
    }

    // Chart
    // -------------------------

    // D3 Marketing campaigns donut chart
    var _MarketingCampaignsDonutChart = function (element, size) {
        if (typeof d3 == 'undefined') {
            console.warn('Warning - d3.min.js is not loaded.');
            return;
        }

        // Initialize chart only if element exsists in the DOM
        if ($(element).length > 0) {


            // Basic setup
            // ------------------------------

            // Add data set
            var data = [{
                "browser": "Google Adwords",
                "icon": "<i class='icon-google mr-2'></i>",
                "value": 1047
            }, {
                "browser": "Social media",
                "icon": "<i class='icon-share4 mr-2'></i>",
                "value": 2948
            }, {
                "browser": "Youtube video",
                "icon": "<i class='icon-youtube mr-2'></i>",
                "value": 3909
            }];

            // Main variables
            var d3Container = d3.select(element),
                distance = 2, // reserve 2px space for mouseover arc moving
                radius = (size / 2) - distance,
                sum = d3.sum(data, function (d) {
                    return d.value;
                });

            // Colors
            var colorrange = ['#66BB6A', '#9575CD', '#FF7043'];



            // Tooltip
            // ------------------------------

            var tip = d3.tip()
                .attr('class', 'd3-tip')
                .offset([-10, 0])
                .direction('e')
                .html(function (d) {
                    return '<ul class="list-unstyled mb-1">' +
                        '<li>' + '<div class="font-size-base mb-1 mt-1">' + d.data.icon + d.data.browser + '</div>' + '</li>' +
                        '<li>' + 'Visits: &nbsp;' + '<span class="font-weight-semibold float-right">' + d.value + '</span>' + '</li>' +
                        '<li>' + 'Share: &nbsp;' + '<span class="font-weight-semibold float-right">' + (100 / (sum / d.value)).toFixed(2) + '%' + '</span>' + '</li>' +
                        '</ul>';
                });


            // Create chart
            // ------------------------------

            // Add svg element
            var container = d3Container.append('svg').call(tip);

            // Add SVG group
            var svg = container
                .attr('width', size)
                .attr('height', size)
                .append('g')
                .attr('transform', 'translate(' + (size / 2) + ',' + (size / 2) + ')');



            // Construct chart layout
            // ------------------------------

            // Pie
            var pie = d3.layout.pie()
                .sort(null)
                .startAngle(Math.PI)
                .endAngle(3 * Math.PI)
                .value(function (d) {
                    return d.value;
                });

            // Arc
            var arc = d3.svg.arc()
                .outerRadius(radius)
                .innerRadius(radius / 2);

            // Colors
            var colors = d3.scale.ordinal().range(colorrange);



            //
            // Append chart elements
            //

            // Group chart elements
            var arcGroup = svg.selectAll('.d3-arc')
                .data(pie(data))
                .enter()
                .append('g')
                .attr('class', 'd3-arc d3-slice-border')
                .style('cursor', 'pointer');

            // Append path
            var arcPath = arcGroup
                .append('path')
                .style('fill', function (d) {
                    return colors(d.data.value);
                });

            // Add tooltip
            arcPath
                .on('mouseover', function (d, i) {

                    // Transition on mouseover
                    d3.select(this)
                        .transition()
                        .duration(500)
                        .ease('elastic')
                        .attr('transform', function (d) {
                            d.midAngle = ((d.endAngle - d.startAngle) / 2) + d.startAngle;
                            var x = Math.sin(d.midAngle) * distance;
                            var y = -Math.cos(d.midAngle) * distance;
                            return 'translate(' + x + ',' + y + ')';
                        });
                })

                .on('mousemove', function (d) {

                    // Show tooltip on mousemove
                    tip.show(d)
                        .style('top', (d3.event.pageY - 40) + 'px')
                        .style('left', (d3.event.pageX + 30) + 'px');
                })

                .on('mouseout', function (d, i) {

                    // Mouseout transition
                    d3.select(this)
                        .transition()
                        .duration(500)
                        .ease('bounce')
                        .attr('transform', 'translate(0,0)');

                    // Hide tooltip
                    tip.hide(d);
                });

            // Animate chart on load
            arcPath
                .transition()
                .delay(function (d, i) {
                    return i * 500;
                })
                .duration(500)
                .attrTween('d', function (d) {
                    var interpolate = d3.interpolate(d.startAngle, d.endAngle);
                    return function (t) {
                        d.endAngle = interpolate(t);
                        return arc(d);
                    };
                });
        }
    };

    // D3 Campaign status donut chart
    var _CampaignStatusDonutChart = function (element, size) {
        if (typeof d3 == 'undefined') {
            console.warn('Warning - d3.min.js is not loaded.');
            return;
        }

        // Initialize chart only if element exsists in the DOM
        if ($(element).length > 0) {


            // Basic setup
            // ------------------------------

            // Add data set
            var data = [{
                "status": "Active campaigns",
                "icon": "<i class='icon-checkmark3 text-success mr-2'></i>",
                "value": 439
            }, {
                "status": "Closed campaigns",
                "icon": "<i class='icon-cross2 text-danger mr-2'></i>",
                "value": 290
            }, {
                "status": "Pending campaigns",
                "icon": "<i class='icon-history text-blue mr-2'></i>",
                "value": 190
            }, {
                "status": "Campaigns on hold",
                "icon": "<i class='icon-infinite text-grey mr-2'></i>",
                "value": 148
            }];

            // Main variables
            var d3Container = d3.select(element),
                distance = 2, // reserve 2px space for mouseover arc moving
                radius = (size / 2) - distance,
                sum = d3.sum(data, function (d) {
                    return d.value;
                });

            // Colors
            var colorrange = ['#29B6F6', '#EF5350', '#81C784', '#999'];



            // Tooltip
            // ------------------------------

            var tip = d3.tip()
                .attr('class', 'd3-tip')
                .offset([-10, 0])
                .direction('e')
                .html(function (d) {
                    return '<ul class="list-unstyled mb-1">' +
                        '<li>' + '<div class="font-size-base mb-1 mt-1">' + d.data.icon + d.data.status + '</div>' + '</li>' +
                        '<li>' + 'Total: &nbsp;' + '<span class="font-weight-semibold float-right">' + d.value + '</span>' + '</li>' +
                        '<li>' + 'Share: &nbsp;' + '<span class="font-weight-semibold float-right">' + (100 / (sum / d.value)).toFixed(2) + '%' + '</span>' + '</li>' +
                        '</ul>';
                });



            // Create chart
            // ------------------------------

            // Add svg element
            var container = d3Container.append('svg').call(tip);

            // Add SVG group
            var svg = container
                .attr('width', size)
                .attr('height', size)
                .append('g')
                .attr('transform', 'translate(' + (size / 2) + ',' + (size / 2) + ')');



            // Construct chart layout
            // ------------------------------

            // Pie
            var pie = d3.layout.pie()
                .sort(null)
                .startAngle(Math.PI)
                .endAngle(3 * Math.PI)
                .value(function (d) {
                    return d.value;
                });

            // Arc
            var arc = d3.svg.arc()
                .outerRadius(radius)
                .innerRadius(radius / 2);

            // Colors
            var colors = d3.scale.ordinal().range(colorrange);



            //
            // Append chart elements
            //

            // Group chart elements
            var arcGroup = svg.selectAll('.d3-arc')
                .data(pie(data))
                .enter()
                .append('g')
                .attr('class', 'd3-arc d3-slice-border')
                .style('cursor', 'pointer');

            // Append path
            var arcPath = arcGroup
                .append('path')
                .style('fill', function (d) {
                    return colors(d.data.value);
                });

            // Add tooltip
            arcPath
                .on('mouseover', function (d, i) {

                    // Transition on mouseover
                    d3.select(this)
                        .transition()
                        .duration(500)
                        .ease('elastic')
                        .attr('transform', function (d) {
                            d.midAngle = ((d.endAngle - d.startAngle) / 2) + d.startAngle;
                            var x = Math.sin(d.midAngle) * distance;
                            var y = -Math.cos(d.midAngle) * distance;
                            return 'translate(' + x + ',' + y + ')';
                        });
                })

                .on('mousemove', function (d) {

                    // Show tooltip on mousemove
                    tip.show(d)
                        .style('top', (d3.event.pageY - 40) + 'px')
                        .style('left', (d3.event.pageX + 30) + 'px');
                })

                .on('mouseout', function (d, i) {

                    // Mouseout transition
                    d3.select(this)
                        .transition()
                        .duration(500)
                        .ease('bounce')
                        .attr('transform', 'translate(0,0)');

                    // Hide tooltip
                    tip.hide(d);
                });

            // Animate chart on load
            arcPath
                .transition()
                .delay(function (d, i) {
                    return i * 500;
                })
                .duration(500)
                .attrTween('d', function (d) {
                    var interpolate = d3.interpolate(d.startAngle, d.endAngle);
                    return function (t) {
                        d.endAngle = interpolate(t);
                        return arc(d);
                    };
                });
        }
    };

    // D3 Tickets status donut chart
    var _TicketStatusDonutChart = function (element, size) {
        if (typeof d3 == 'undefined') {
            console.warn('Warning - d3.min.js is not loaded.');
            return;
        }

        // Initialize chart only if element exsists in the DOM
        if ($(element).length > 0) {


            // Basic setup
            // ------------------------------

            // Add data set
            var data = [{
                "status": "Pending tickets",
                "icon": "<i class='icon-history text-blue mr-2'></i>",
                "value": 295
            }, {
                "status": "Resolved tickets",
                "icon": "<i class='icon-checkmark3 text-success mr-2'></i>",
                "value": 189
            }, {
                "status": "Closed tickets",
                "icon": "<i class='icon-cross2 text-danger mr-2'></i>",
                "value": 277
            }];

            // Main variables
            var d3Container = d3.select(element),
                distance = 2, // reserve 2px space for mouseover arc moving
                radius = (size / 2) - distance,
                sum = d3.sum(data, function (d) {
                    return d.value;
                });

            // Colors
            var colorrange = ['#29B6F6', '#66BB6A', '#EF5350'];



            // Tooltip
            // ------------------------------

            var tip = d3.tip()
                .attr('class', 'd3-tip')
                .offset([-10, 0])
                .direction('e')
                .html(function (d) {
                    return '<ul class="list-unstyled mb-1">' +
                        '<li>' + '<div class="font-size-base mb-1 mt-1">' + d.data.icon + d.data.status + '</div>' + '</li>' +
                        '<li>' + 'Total: &nbsp;' + '<span class="font-weight-semibold float-right">' + d.value + '</span>' + '</li>' +
                        '<li>' + 'Share: &nbsp;' + '<span class="font-weight-semibold float-right">' + (100 / (sum / d.value)).toFixed(2) + '%' + '</span>' + '</li>' +
                        '</ul>';
                });



            // Create chart
            // ------------------------------

            // Add svg element
            var container = d3Container.append('svg').call(tip);

            // Add SVG group
            var svg = container
                .attr('width', size)
                .attr('height', size)
                .append('g')
                .attr('transform', 'translate(' + (size / 2) + ',' + (size / 2) + ')');



            // Construct chart layout
            // ------------------------------

            // Pie
            var pie = d3.layout.pie()
                .sort(null)
                .startAngle(Math.PI)
                .endAngle(3 * Math.PI)
                .value(function (d) {
                    return d.value;
                });

            // Arc
            var arc = d3.svg.arc()
                .outerRadius(radius)
                .innerRadius(radius / 2);

            // Colors
            var colors = d3.scale.ordinal().range(colorrange);


            //
            // Append chart elements
            //

            // Group chart elements
            var arcGroup = svg.selectAll('.d3-arc')
                .data(pie(data))
                .enter()
                .append('g')
                .attr('class', 'd3-arc d3-slice-border')
                .style('cursor', 'pointer');

            // Append path
            var arcPath = arcGroup
                .append('path')
                .style('fill', function (d) {
                    return colors(d.data.value);
                });

            // Add tooltip
            arcPath
                .on('mouseover', function (d, i) {

                    // Transition on mouseover
                    d3.select(this)
                        .transition()
                        .duration(500)
                        .ease('elastic')
                        .attr('transform', function (d) {
                            d.midAngle = ((d.endAngle - d.startAngle) / 2) + d.startAngle;
                            var x = Math.sin(d.midAngle) * distance;
                            var y = -Math.cos(d.midAngle) * distance;
                            return 'translate(' + x + ',' + y + ')';
                        });
                })

                .on('mousemove', function (d) {

                    // Show tooltip on mousemove
                    tip.show(d)
                        .style('top', (d3.event.pageY - 40) + 'px')
                        .style('left', (d3.event.pageX + 30) + 'px');
                })

                .on('mouseout', function (d, i) {

                    // Mouseout transition
                    d3.select(this)
                        .transition()
                        .duration(500)
                        .ease('bounce')
                        .attr('transform', 'translate(0,0)');

                    // Hide tooltip
                    tip.hide(d);
                });

            // Animate chart on load
            arcPath
                .transition()
                .delay(function (d, i) {
                    return i * 500;
                })
                .duration(500)
                .attrTween('d', function (d) {
                    var interpolate = d3.interpolate(d.startAngle, d.endAngle);
                    return function (t) {
                        d.endAngle = interpolate(t);
                        return arc(d);
                    };
                });
        }
    };

    // C3 Chart
    var _barsPiesExamples = function () {
        if (typeof c3 == 'undefined') {
            console.warn('Warning - c3.min.js is not loaded.');
            return;
        }

        // Define charts elements
        var pie_chart_element = document.getElementById('c3-pie-chart');
        var pie_chart_element2 = document.getElementById('c3-pie-chart2');
        var pie_chart_element3 = document.getElementById('c3-pie-chart3');
        var pie_chart_element4 = document.getElementById('c3-pie-chart4');

        var donut_chart_element = document.getElementById('c3-donut-chart');
        var bar_chart_element = document.getElementById('c3-bar-chart');
        var bar_stacked_chart_element = document.getElementById('c3-bar-stacked-chart');
        var combined_chart_element = document.getElementById('c3-combined-chart');
        var scatter_chart_element = document.getElementById('c3-scatter-chart');


        // Pie chart
        if (pie_chart_element) {
            var data_size = pie_chart_element.getAttribute('data-size');
            var data_color = pie_chart_element.getAttribute('data-color');
            var data_columns = pie_chart_element.getAttribute('data-columns');

            // Generate chart
            var pie_chart = c3.generate({
                bindto: pie_chart_element,
                size: {
                    width: data_size
                },
                color: {
                    pattern: data_color.split(',')
                },
                data: {
                    columns: JSON.parse("[" + data_columns + "]"),
                    type: 'pie'
                }
            });

            // Resize chart on sidebar width change
            $('.sidebar-control').on('click', function () {
                pie_chart.resize();
            });
        }

        // Pie chart
        if (pie_chart_element2) {
            var data_size = pie_chart_element2.getAttribute('data-size');
            var data_color = pie_chart_element2.getAttribute('data-color');
            var data_columns = pie_chart_element2.getAttribute('data-columns');

            if (!data_size) data_size = '100%';

            // Generate chart
            var pie_chart = c3.generate({
                bindto: pie_chart_element2,
                size: {
                    width: data_size
                },
                color: {
                    pattern: data_color.split(',')
                },
                data: {
                    columns: JSON.parse("[" + data_columns + "]"),
                    type: 'pie'
                }
            });

            // Resize chart on sidebar width change
            $('.sidebar-control').on('click', function () {
                pie_chart.resize();
            });
        }

        // Pie chart
        if (pie_chart_element3) {
            var data_size = pie_chart_element3.getAttribute('data-size');
            var data_color = pie_chart_element3.getAttribute('data-color');
            var data_columns = pie_chart_element3.getAttribute('data-columns');

            // Generate chart
            var pie_chart = c3.generate({
                bindto: pie_chart_element3,
                size: {
                    width: data_size
                },
                color: {
                    pattern: data_color.split(',')
                },
                data: {
                    columns: JSON.parse("[" + data_columns + "]"),
                    type: 'pie'
                }
            });

            // Resize chart on sidebar width change
            $('.sidebar-control').on('click', function () {
                pie_chart.resize();
            });
        }

        // Pie chart
        if (pie_chart_element4) {
            var data_size = pie_chart_element4.getAttribute('data-size');
            var data_color = pie_chart_element4.getAttribute('data-color');
            var data_columns = pie_chart_element4.getAttribute('data-columns');

            // Generate chart
            var pie_chart = c3.generate({
                bindto: pie_chart_element4,
                size: {
                    width: data_size
                },
                color: {
                    pattern: data_color.split(',')
                },
                data: {
                    columns: JSON.parse("[" + data_columns + "]"),
                    type: 'pie'
                }
            });

            // Resize chart on sidebar width change
            $('.sidebar-control').on('click', function () {
                pie_chart.resize();
            });
        }


        // Donut chart
        if (donut_chart_element) {

            // Generate chart
            var donut_chart = c3.generate({
                bindto: donut_chart_element,
                size: {
                    width: 350
                },
                color: {
                    pattern: ['#3F51B5', '#FF9800', '#4CAF50', '#00BCD4', '#F44336']
                },
                data: {
                    columns: [
                        ['data1', 30],
                        ['data2', 120],
                    ],
                    type: 'donut'
                },
                donut: {
                    title: "Iris Petal Width"
                }
            });

            // Change data
            setTimeout(function () {
                donut_chart.load({
                    columns: [
                        ["setosa", 0.2, 0.2, 0.2, 0.2, 0.2, 0.4, 0.3, 0.2, 0.2, 0.1, 0.2, 0.2, 0.1, 0.1, 0.2, 0.4, 0.4, 0.3, 0.3, 0.3, 0.2, 0.4, 0.2, 0.5, 0.2, 0.2, 0.4, 0.2, 0.2, 0.2, 0.2, 0.4, 0.1, 0.2, 0.2, 0.2, 0.2, 0.1, 0.2, 0.2, 0.3, 0.3, 0.2, 0.6, 0.4, 0.3, 0.2, 0.2, 0.2, 0.2],
                        ["versicolor", 1.4, 1.5, 1.5, 1.3, 1.5, 1.3, 1.6, 1.0, 1.3, 1.4, 1.0, 1.5, 1.0, 1.4, 1.3, 1.4, 1.5, 1.0, 1.5, 1.1, 1.8, 1.3, 1.5, 1.2, 1.3, 1.4, 1.4, 1.7, 1.5, 1.0, 1.1, 1.0, 1.2, 1.6, 1.5, 1.6, 1.5, 1.3, 1.3, 1.3, 1.2, 1.4, 1.2, 1.0, 1.3, 1.2, 1.3, 1.3, 1.1, 1.3],
                        ["virginica", 2.5, 1.9, 2.1, 1.8, 2.2, 2.1, 1.7, 1.8, 1.8, 2.5, 2.0, 1.9, 2.1, 2.0, 2.4, 2.3, 1.8, 2.2, 2.3, 1.5, 2.3, 2.0, 2.0, 1.8, 2.1, 1.8, 1.8, 1.8, 2.1, 1.6, 1.9, 2.0, 2.2, 1.5, 1.4, 2.3, 2.4, 1.8, 1.8, 2.1, 2.4, 2.3, 1.9, 2.3, 2.5, 2.3, 1.9, 2.0, 2.3, 1.8],
                    ]
                });
            }, 4000);
            setTimeout(function () {
                donut_chart.unload({
                    ids: 'data1'
                });
                donut_chart.unload({
                    ids: 'data2'
                });
            }, 8000);

            // Resize chart on sidebar width change
            $('.sidebar-control').on('click', function () {
                donut_chart.resize();
            });
        }

        // Bar chart
        if (bar_chart_element) {
            var data_width = bar_chart_element.getAttribute('data-width');
            var data_height = bar_chart_element.getAttribute('data-height');
            var data_boithuong = bar_chart_element.getAttribute('data-boithuong');
            var data_doanhthu = bar_chart_element.getAttribute('data-doanhthu');
            var data_columns = bar_chart_element.getAttribute('data-columns');

            var data = {
                "category": ["Tỷ lệ bồi thường/doanh thu"],
                "data1": [data_boithuong],
                "data2": [data_doanhthu]
            };

            var data_name = {
                "data1": "Bồi thường",
                "data2": "Doanh thu",
            };
            var range = Math.max(data_boithuong, data_doanhthu)
            var list_range = '';
            for (var i=0; i <= range; i+=10) {
                list_range += i + ",";
            }
 
            // Generate chart
            var bar_chart = c3.generate({
                bindto: bar_chart_element,
                size: {
                    width: data_width,
                    height: data_height,
                },
                data: {
                    x: 'category',
                    json: data,
                    types: {
                        data1: 'bar',
                        data2: 'bar',
                    },
                    colors: {
                        data1: "#3F51B5",
                        data2: "#FF9800"
                    }
                },
                axis: {
                    rotated: true,
                    x: {
                        type: 'category'
                    },
                    y: {
                        label: {
                            text: '',
                            position: 'outer-middle'
                        },
                        tick: {
                            culling: false,
                            values: list_range.split(",")
                        }
                    }
                },
                tooltip: {
                    format: {
                        //title: function (d) {  }
                        value: function (value, ratio, id) {
                            //var format = id === 'data1' ? d3.format(',') : d3.format('$');
                            return value + "%";
                        }
                    }
                }
            });
            bar_chart.data.names(data_name);

            // // Change data
            // setTimeout(function () {
            //     bar_chart.load({
            //         columns: [
            //             ['data3', 130, -150, 200, 300, -200, 100]
            //         ]
            //     });
            // }, 6000);

            // Resize chart on sidebar width change
            $('.sidebar-control').on('click', function () {
                bar_chart.resize();
            });
        }

        // Stacked bar chart
        if (bar_stacked_chart_element) {

            // Generate chart
            var bar_stacked_chart = c3.generate({
                bindto: bar_stacked_chart_element,
                size: {
                    height: 400
                },
                color: {
                    pattern: ['#FF9800', '#F44336', '#009688', '#4CAF50']
                },
                data: {
                    columns: [
                        ['data1', -30, 200, 200, 400, -150, 250],
                        ['data2', 130, 100, -100, 200, -150, 50],
                        ['data3', -230, 200, 200, -300, 250, 250]
                    ],
                    type: 'bar',
                    groups: [
                        ['data1', 'data2']
                    ]
                },
                grid: {
                    x: {
                        show: true
                    },
                    y: {
                        lines: [{
                            value: 0
                        }]
                    }
                }
            });

            // Change data
            setTimeout(function () {
                bar_stacked_chart.groups([
                    ['data1', 'data2', 'data3']
                ])
            }, 4000);
            setTimeout(function () {
                bar_stacked_chart.load({
                    columns: [
                        ['data4', 100, -50, 150, 200, -300, -100]
                    ]
                });
            }, 8000);
            setTimeout(function () {
                bar_stacked_chart.groups([
                    ['data1', 'data2', 'data3', 'data4']
                ])
            }, 10000);

            // Resize chart on sidebar width change
            $('.sidebar-control').on('click', function () {
                bar_stacked_chart.resize();
            });
        }

        // Combined chart
        if (combined_chart_element) {

            // Generate chart
            var combined_chart = c3.generate({
                bindto: combined_chart_element,
                size: {
                    height: 400
                },
                color: {
                    pattern: ['#FF9800', '#F44336', '#009688', '#4CAF50', '#03A9F4', '#8BC34A']
                },
                data: {
                    columns: [
                        ['data1', 30, 20, 50, 40, 60, 50],
                        ['data2', 200, 130, 90, 240, 130, 220],
                        ['data3', 300, 200, 160, 400, 250, 250],
                        ['data4', 200, 130, 90, 240, 130, 220],
                        ['data5', 130, 120, 150, 140, 160, 150],
                        ['data6', 90, 70, 20, 50, 60, 120],
                    ],
                    type: 'bar',
                    types: {
                        data3: 'spline',
                        data4: 'line',
                        data6: 'area',
                    },
                    groups: [
                        ['data1', 'data2']
                    ]
                }
            });

            // Resize chart on sidebar width change
            $('.sidebar-control').on('click', function () {
                combined_chart.resize();
            });
        }

        // Scatter chart
        if (scatter_chart_element) {

            // Generate chart
            var scatter_chart = c3.generate({
                size: {
                    height: 400
                },
                bindto: scatter_chart_element,
                data: {
                    xs: {
                        setosa: 'setosa_x',
                        versicolor: 'versicolor_x',
                    },
                    columns: [
                        ["setosa_x", 3.5, 3.0, 3.2, 3.1, 3.6, 3.9, 3.4, 3.4, 2.9, 3.1, 3.7, 3.4, 3.0, 3.0, 4.0, 4.4, 3.9, 3.5, 3.8, 3.8, 3.4, 3.7, 3.6, 3.3, 3.4, 3.0, 3.4, 3.5, 3.4, 3.2, 3.1, 3.4, 4.1, 4.2, 3.1, 3.2, 3.5, 3.6, 3.0, 3.4, 3.5, 2.3, 3.2, 3.5, 3.8, 3.0, 3.8, 3.2, 3.7, 3.3],
                        ["versicolor_x", 3.2, 3.2, 3.1, 2.3, 2.8, 2.8, 3.3, 2.4, 2.9, 2.7, 2.0, 3.0, 2.2, 2.9, 2.9, 3.1, 3.0, 2.7, 2.2, 2.5, 3.2, 2.8, 2.5, 2.8, 2.9, 3.0, 2.8, 3.0, 2.9, 2.6, 2.4, 2.4, 2.7, 2.7, 3.0, 3.4, 3.1, 2.3, 3.0, 2.5, 2.6, 3.0, 2.6, 2.3, 2.7, 3.0, 2.9, 2.9, 2.5, 2.8],
                        ["setosa", 0.2, 0.2, 0.2, 0.2, 0.2, 0.4, 0.3, 0.2, 0.2, 0.1, 0.2, 0.2, 0.1, 0.1, 0.2, 0.4, 0.4, 0.3, 0.3, 0.3, 0.2, 0.4, 0.2, 0.5, 0.2, 0.2, 0.4, 0.2, 0.2, 0.2, 0.2, 0.4, 0.1, 0.2, 0.2, 0.2, 0.2, 0.1, 0.2, 0.2, 0.3, 0.3, 0.2, 0.6, 0.4, 0.3, 0.2, 0.2, 0.2, 0.2],
                        ["versicolor", 1.4, 1.5, 1.5, 1.3, 1.5, 1.3, 1.6, 1.0, 1.3, 1.4, 1.0, 1.5, 1.0, 1.4, 1.3, 1.4, 1.5, 1.0, 1.5, 1.1, 1.8, 1.3, 1.5, 1.2, 1.3, 1.4, 1.4, 1.7, 1.5, 1.0, 1.1, 1.0, 1.2, 1.6, 1.5, 1.6, 1.5, 1.3, 1.3, 1.3, 1.2, 1.4, 1.2, 1.0, 1.3, 1.2, 1.3, 1.3, 1.1, 1.3],
                    ],
                    type: 'scatter'
                },
                color: {
                    pattern: ['#4CAF50', '#F44336']
                },
                grid: {
                    y: {
                        show: true
                    }
                },
                point: {
                    r: 5
                },
                axis: {
                    x: {
                        label: 'Sepal.Width',
                        tick: {
                            fit: false
                        }
                    },
                    y: {
                        label: 'Petal.Width'
                    }
                }
            });

            // Change data
            setTimeout(function () {
                scatter_chart.load({
                    xs: {
                        virginica: 'virginica_x'
                    },
                    columns: [
                        ["virginica_x", 3.3, 2.7, 3.0, 2.9, 3.0, 3.0, 2.5, 2.9, 2.5, 3.6, 3.2, 2.7, 3.0, 2.5, 2.8, 3.2, 3.0, 3.8, 2.6, 2.2, 3.2, 2.8, 2.8, 2.7, 3.3, 3.2, 2.8, 3.0, 2.8, 3.0, 2.8, 3.8, 2.8, 2.8, 2.6, 3.0, 3.4, 3.1, 3.0, 3.1, 3.1, 3.1, 2.7, 3.2, 3.3, 3.0, 2.5, 3.0, 3.4, 3.0],
                        ["virginica", 2.5, 1.9, 2.1, 1.8, 2.2, 2.1, 1.7, 1.8, 1.8, 2.5, 2.0, 1.9, 2.1, 2.0, 2.4, 2.3, 1.8, 2.2, 2.3, 1.5, 2.3, 2.0, 2.0, 1.8, 2.1, 1.8, 1.8, 1.8, 2.1, 1.6, 1.9, 2.0, 2.2, 1.5, 1.4, 2.3, 2.4, 1.8, 1.8, 2.1, 2.4, 2.3, 1.9, 2.3, 2.5, 2.3, 1.9, 2.0, 2.3, 1.8],
                    ]
                });
            }, 4000);
            setTimeout(function () {
                scatter_chart.unload({
                    ids: 'setosa'
                });
            }, 8000);
            setTimeout(function () {
                scatter_chart.load({
                    columns: [
                        ["virginica", 0.2, 0.2, 0.2, 0.2, 0.2, 0.4, 0.3, 0.2, 0.2, 0.1, 0.2, 0.2, 0.1, 0.1, 0.2, 0.4, 0.4, 0.3, 0.3, 0.3, 0.2, 0.4, 0.2, 0.5, 0.2, 0.2, 0.4, 0.2, 0.2, 0.2, 0.2, 0.4, 0.1, 0.2, 0.2, 0.2, 0.2, 0.1, 0.2, 0.2, 0.3, 0.3, 0.2, 0.6, 0.4, 0.3, 0.2, 0.2, 0.2, 0.2],
                    ]
                });
            }, 10000);

            // Resize chart on sidebar width change
            $('.sidebar-control').on('click', function () {
                scatter_chart.resize();
            });
        }
    };

    // Datatable 
    var _component_datatable = function (p_table = '') {

        var v_table = $('.datatable');

        if (p_table) {
            v_table = p_table;
        }

        if (!$().DataTable) {
            console.warn('Warning - datatables.min.js is not loaded.');
            return;
        }

        // Setting datatable defaults
        $.extend($.fn.dataTable.defaults, {
            autoWidth: false,
            processing: true,
            responsive: {
                details: {
                    type: 'column'
                },
                breakpoints: [{
                        name: 'desktop',
                        width: Infinity
                    },
                    {
                        name: 'tablet-l',
                        width: 1200
                    },
                    {
                        name: 'tablet-p',
                        width: 992
                    },
                    {
                        name: 'mobile-l',
                        width: 576
                    },
                    {
                        name: 'mobile-p',
                        width: 320
                    }
                ]
            },
            dom: '<"datatable-header"fr><"datatable-body"t><"datatable-footer"<"datatable-li"li>p>',
            language: {
                decimal: "",
                emptyTable: "Không có dữ liệu trong bảng",
                info: " Tổng số _TOTAL_ bản ghi",
                infoEmpty: "Không có bản ghi nào",
                infoFiltered: "(danh sách từ _MAX_ bản ghi)",
                infoPostFix: "",
                thousands: ",",
                lengthMenu: " _MENU_ ",
                loadingRecords: "Đang tải...",
                processing: "<i class='fas fa-spinner fa-pulse'></i> Đang xử lý...",
                search: "",
                searchPlaceholder: 'Nhập tìm nhanh...',
                zeroRecords: "Không tìm thấy hồ sơ phù hợp",
                paginate: {
                    first: "Đầu",
                    last: "Cuối",
                    next: "Sau <i class='fa fa-chevron-right fa-xs'></i>",
                    previous: "<i class='fa fa-chevron-left fa-xs'></i> Trước"
                },
                aria: {
                    sortAscending: ": kích hoạt để sắp xếp cột tăng dần",
                    sortDescending: ": kích hoạt để sắp xếp cột giảm dần"
                },
                buttons: {
                    copyTitle: 'Đã thêm vào clipboard',
                    copyKeys: 'Nhấn ctrl hoặc <i>\u2318</i> + C để sao chép dữ liệu từ bảng vào khay nhớ tạm của bạn. Để hủy, bấm vào tin nhắn này hoặc nhấn Esc.',
                    copySuccess: {
                        _: 'Sao chép %d dòng ',
                        1: 'Sao chép 1 dòng '
                    }
                }
            },
            lengthMenu: [
                [10, 20, 50, 100, 200, 300, 400, 500, 1000],
                [10, 20, 50, 100, 200, 300, 400, 500, 1000]
            ],
            mark: {
                element: 'span',
                className: 'highlight'
            },
        });



        if (v_table) {

            var v_datatable = $(v_table).DataTable({
                columnDefs: [

                    {
                        className: 'w1p control not-desktop text-center',
                        orderable: false,
                        targets: 0
                    },


                ]
            });

            _datatable_responsive_display(v_datatable);

            let dt_list = $(v_datatable.tables().containers());
            dt_list.each(function (i, e) {
                let v_dataTables_search = $(e).find('.dataTables_search');
                let v_dataTables_search_inline = $(e).closest('.card').find('.dataTables_search_header_card');
                let v_dataTables_filter = $(e).find('.dataTables_filter');

                if (v_dataTables_search_inline.length > 0) {
                    v_dataTables_filter.appendTo(v_dataTables_search_inline);
                }

                if (v_dataTables_search.length > 0) {

                    v_dataTables_filter.appendTo(v_dataTables_search);

                    let v_placeholder = v_dataTables_search.attr("placeholder");
                    if (v_placeholder == undefined) return false;
                    if (v_placeholder.length > 0) {
                        $(e).find('div.dataTables_filter input').attr("placeholder", v_placeholder);
                    }
                }
            });

        }


        // Reponsive recall 
        function _datatable_responsive_display(p_datatable) {

            p_datatable.on('responsive-display', function (e, datatable, row, showHide, update) {
                var li_dtr = $(this).find('tbody > tr.child > td.child > ul.dtr-details > li');
                li_dtr.each(function (index, li) {
                    var v_dtr_title = $(li).find('.dtr-title');
                    var v_dtr_data = $(li).find('.dtr-data');

                    if (v_dtr_title.is(':empty')) {
                        $(li).addClass('dtr-title-empty');
                    }

                    if (v_dtr_data.is(':empty')) {
                        $(li).addClass('dtr-data-empty');
                    }

                });

                console.log(p_datatable);

                // recall
                var select2 = $(this).find('select');
                var datepicker = $(this).find('.datepicker');
                var v_clone = $(this).find('[clone]');

                if (datepicker.hasClass('hasDatepicker')) {
                    datepicker.removeClass('hasDatepicker')
                        .removeData('datepicker')
                        .removeAttr('id')
                        .unbind();
                }

                _component_select2(select2);
                _component_datepicker(datepicker);
                _component_input_type();

            });
        }

        $("[datatable-collapse]").on("shown.bs.collapse", function () {
            $.each($.fn.dataTable.tables(true), function () {
                $(this).DataTable().columns.adjust().draw();
            });
        });

        $('[datatable-modal]').on('shown.bs.modal', function (e) {
            $($.fn.dataTable.tables(true)).DataTable()
                .columns.adjust()
                .responsive.recalc();
        });

        $("[datatable-tab], .steps > .nav-tabs").on("shown.bs.tab", function (e) {
            $($.fn.dataTable.tables(true)).DataTable()
                .columns.adjust()
                .responsive.recalc();
        });


    };

    // Steps Form
    var _component_steps_form = function () {

        // Stop function if validation is missing
        if (!$().validate) {
            console.warn('Warning - validate.min.js is not loaded.');
            return;
        }

        //Wizard
        var li = $(".wizard > .steps > .nav-tabs > li");
        $('.wizard > .steps > .nav-tabs > li > a').on("show.bs.tab", function (e) {
            // e.preventDefault();

            var $target = $(e.target);
            var href = $(this).attr('href');

            if ($target.parent().hasClass("disabled")) {
                return false;
            } else {
                li.removeClass('current');
                $target.parent().addClass('current');
                $target.parent().parent().find('li:not(.disabled,.current)').addClass('done');

                $('html, body').animate({
                    scrollTop: $(href).offset().top
                }, 'slow');

            }

            if ($target.parent().index() > 0) {
                $('.actions ul li:first-child').show();
            } else {
                $('.actions ul li:first-child').hide();
            }

            if ($target.parent().index() == li.length - 1) {
                $('.actions').addClass('last');
            } else {
                $('.actions').removeClass('last');
            }
        });

        $('.next-step').on('click', function (e) {
            e.preventDefault();
            var $active = $(".wizard > .steps > .nav-tabs>  li > .active");
            // if (!form.valid()) {
            //     return false;
            // }
            $active.parent().next().removeClass("disabled").find('a').click();
        })

        $('.prev-step').on('click', function (e) {
            e.preventDefault();
            var $active = $(".wizard > .steps > .nav-tabs > li > .active");
            // if (!form.valid()) {
            //     return false;
            // }
            $active.parent().prev().removeClass("disabled").find('a').click();

        })

    };

    // Isotope
    var _component_isotope = function () {

        if (typeof Isotope == 'undefined') {
            console.warn('Warning - isotope.pkgd.min.js is not loaded.');
            return;
        }

        var filters = [];
        var button_filter;
        var qs_regex;

        var $grid = $(".list-files").isotope({
            itemSelector: ".file-item",
            filter: function () {
                var $this = $(this);
                var searchResult = qs_regex ? $this.find('.name').text().match(qs_regex) : true;
                var buttonResult = button_filter ? $this.is(button_filter) : true;
                return searchResult && buttonResult;
            },
        });

        var $isotope_search = $('.isotope-search').keyup(debounce(function () {
            qs_regex = new RegExp($isotope_search.val(), 'gi');
            $grid.isotope();
        }));

        function debounce(fn, threshold) {
            var timeout;
            threshold = threshold || 100;
            return function debounced() {
                clearTimeout(timeout);
                var args = arguments;
                var _this = this;

                function delayed() {
                    fn.apply(_this, args);
                }
                timeout = setTimeout(delayed, threshold);
            };
        }

        $(".nav-file").on("click", ".nav-button", function (event) {
            var $target = $(event.currentTarget);
            $target.toggleClass("is-checked");
            var isChecked = $target.hasClass("is-checked");
            var filter = $target.attr("data-filter");
            if (isChecked) {
                add_filter(filter);
            } else {
                remove_filter(filter);
            }
            button_filter = filters.join(",");
            $grid.isotope();
        });

        var add_filter = (filter) => {
            if (filters.indexOf(filter) == -1) {
                filters.push(filter);
            }
        }
        var remove_filter = (filter) => {
            var index = filters.indexOf(filter);
            if (index != -1) {
                filters.splice(index, 1);
            }
        }

        $(document).on('afterShow.fb', function (e, instance, slide) {
            if ($(e.target).find('#ds_files').length) {
                $grid.isotope('layout');
            }
        });

        this.list_view = (p_this) => {
            $(p_this).closest('.f-right').removeClass('grid').addClass('list');
            $grid.isotope('layout');
            Array.from($('.file-view > .btn')).forEach((item, index) => {
                if (index === 0) item.classList.add("active");
                else item.classList.remove("active");
            });
        }
        this.grid_view = (p_this) => {
            $(p_this).closest('.f-right').removeClass('list').addClass('grid');
            $grid.isotope('layout');
            Array.from($('.file-view > .btn')).forEach((item, index) => {
                if (index === 1) item.classList.add("active");
                else item.classList.remove("active");
            });
        }
    };

    var _component_responsive_cell_datatables = function () {
        // init control responsive
        $('.datatable').each(function (i, e) {
            var v_th = $(e).children('thead').find('tr:first-child');
            var v_td = $(e).children('tbody').children('tr');

            if (!v_th.children().hasClass('cell')) {
                v_th.prepend('<th class="cell"><i class="fa fa-ellipsis-v"></i></th>');
            }
            if (!v_td.children().hasClass('cell')) {
                v_td.prepend('<td class="cell"></td>');
            }
        });
    }

    //
    // Tra ve cac object duoc gan cho module
    //

    return {

        initResponsiveCellDatatables: function () {
            _component_responsive_cell_datatables();
        },

        // Init truoc khi load trang
        initBeforeLoad: function () {

            // Them event show / hide
            (function ($) {
                $.each(['show', 'hide'], function (i, ev) {
                    var el = $.fn[ev];
                    $.fn[ev] = function () {
                        this.trigger(ev);
                        return el.apply(this, arguments);
                    };
                });
            })(jQuery);

            _component_responsive_cell_datatables();



        },

        // Init sau khi load trang
        initAfterLoad: function () {},

        // Init Resize Trang
        initResize: function () {

        },

        // Initialize all sidebars
        initSidebars: function () {

            // On desktop
            _sidebarMainResize();
            _sidebarMainToggle();
            _sidebarComponentToggle();

            // On mobile
            _sidebarMobileMainToggle();
            _sidebarMobileComponentToggle();
            _homeMenuModal();

        },

        // Initialize all navigations
        initNavigations: function () {
            _navigationSidebar();
            _navigationNavbar();
        },

        // Initialize all components
        initComponents: function () {
            _component_steps_form(); //Khai bao truoc
            _component_tooltip();
            _component_popover();
            _component_repeater();
            _component_clone();
            _component_perfect_scrollbar();
            _component_datatable();
            _component_tooltip_tipsy();
            _component_select2();
            _component_datepicker();
            _component_input_type();
            _component_isotope();

        },

        initChart: function () {
            _CampaignStatusDonutChart('#campaign-status-pie', 42);
            _TicketStatusDonutChart('#tickets-status', 42);
            _barsPiesExamples();
        },


        // Initialize all card actions
        initCardActions: function () {
            _cardActionReload();
            _cardActionCollapse();
            _cardActionRemove();
            _cardActionFullscreen();
        },

        // Dropdown submenu
        initDropdownSubmenu: function () {
            _dropdownSubmenu();
        },

        initHeaderElementsToggle: function () {
            _headerElements();
        },

        // Initialize core
        initCore: function () {
            App.initSidebars();
            App.initNavigations();
            App.initComponents();
            App.initCardActions();
            App.initDropdownSubmenu();
            App.initHeaderElementsToggle();
            App.initChart();
        },

        // Initialize Select2
        initSelect2: function () {
            _component_select2();
        },

        // Initialize Datepicker
        initDatepicker: function () {
            _component_datepicker();
        }
    }
}();



// Initialize module
// ------------------------------

// When content is loaded
document.addEventListener('DOMContentLoaded', function () {
    App.initBeforeLoad();
    App.initCore();



});

// When page is fully loaded
window.addEventListener('load', function () {
    App.initAfterLoad();
});

// When page is resized
window.addEventListener('resize', function () {});