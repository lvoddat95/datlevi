$(function () {

    //Sửa lỗi input select2 khi mở modal bootstrap 4
    if ($.fn.modal !== undefined) {
        $.fn.modal.Constructor.prototype._enforceFocus = function () {
            var that = this;
            $(document)
                .off('focusin.bs.modal')
                .on('focusin.bs.modal', function (e) {
                    if ($(e.target).hasClass('select2-search__field')) {
                        return true;
                    }
                });
        };
    }

    // Click checked all - '#input-ckk-all: id cha' - '.input-chk: id con'
    $("#input-chk-all").click(function () {
        $('.input-chk').not(this).prop('checked', this.checked);
    });

    $(".btn-act-toggle").click(function () {
        $(this).parents('.quick-action').toggleClass('toggle');
    });

    // Slide box
    if ($('.side-box').length > 0) {
        $(".side-box").on('click', '.side-btn', function (e) {
            e.stopPropagation();
            e.preventDefault();
            $(this).parent().toggleClass('open');
        });
        $(".side-btn-close").click(function (e) {
            e.preventDefault();
            $(this).closest('.side-box').removeClass('open');
        });
    }

    // Step 4: Action Button click -> button slide (on/off)
    if ($('.collapse-group').length > 0) {
        $('.cls_ckb').each(function (index, obj) {
            var v_type_radio = $(this).closest('.c-item.radio').find('[datatable-collapse]');

            $(this).change(function () {
                $this = $(this);
                $(this).parent().next().trigger("click");

                $(v_type_radio).on("shown.bs.collapse", function (e) {
                    $(e.currentTarget).parent().siblings('.c-item.radio').find('[datatable-collapse]').collapse('hide');
                    $(e.currentTarget).parent().siblings('.c-item.radio').find('.button-switch > input').prop("checked", false);
                });


            });

        });
    }

    // Chat box
    if ($('.chat-box').length > 0) {
        $(".chat-circle").click(function () {
            $(".chat").toggleClass('open');
        })
        $(".cb-toggle-close").click(function () {
            $(".chat").removeClass('open');
        })
    }


    // Len dau trang
    $(".go-top").click(function () {
        $("html, body").animate({
            scrollTop: 0
        }, 500);
    });



    //Readmore action
    if ($('.about-readmore').length > 0) {
        if (typeof PerfectScrollbar == 'undefined') {
            console.warn('Warning - PerfectScrollbar Js is not loaded.');
            return;
        }
        $('.about-readmore').each(function (index, elem) {
            let ul = $(elem).find('ul');
            let v_parent = $(elem).closest('.about-box');
            let v_scrollbar = v_parent.find('.about-hover > ul');
            let ps;

            $(elem).on("click", function () {
                v_parent.toggleClass('open');

                if (ps) ps.destroy();
                ps = new PerfectScrollbar($(v_scrollbar)[0]);

                if (!v_parent.hasClass('open')) {
                    $(v_scrollbar).scrollTop(0);
                    if (ps) ps.destroy();
                    ps = null;
                }
            });
        });
    }

    //Carousel Slider Config
    function _owl_slider() {
        if ($('.owl-slider').length > 0) {
            $('.owl-slider').each(function () {
                var seff = $(this);
                var item = seff.data('item');
                var speed = seff.data('speed');
                var itemres = seff.data('itemres');
                var nav = seff.data('navigation');
                var pag = seff.data('pagination');
                var text_prev = seff.data('prev');
                var text_next = seff.data('next');
                var margin = seff.data('margin');
                var stage_padding = seff.data('stage_padding');
                var start_position = seff.data('start_position');
                var merge = seff.data('merge');
                var loop = seff.data('loop');
                var mousewheel = seff.data('mousewheel');
                var mousedrag = seff.data('mousedrag');

                var autoplay;
                var autoplaytimeout = 5000;
                if (!margin) margin = 0;
                if (!stage_padding) stage_padding = 0;
                if (!start_position) start_position = 0;

                if (typeof merge == 'undefined') {
                    merge = false;
                }

                if (typeof loop == 'undefined') {
                    loop = false;
                }

                if (typeof mousedrag == 'undefined') {
                    mousedrag = false;
                }

                if (typeof mousewheel == 'undefined') {
                    mousewheel = false;
                }

                if (typeof nav == 'undefined') {
                    nav = true;
                }

                if (typeof pag == 'undefined') {
                    pag = true;
                }
                if (typeof speed != 'undefined') {
                    autoplay = true;
                    autoplaytimeout = parseInt(speed, 10);
                } else {
                    autoplay = false;
                }

                console.log(itemres);


                var dotsContainer = '';
                if (pag == 'pagi-container') dotsContainer = '.dotsContainer';
                var prev_text = '<i class="fas fa-chevron-circle-left" aria-hidden="true"></i>';
                var next_text = '<i class="fas fa-chevron-circle-right" aria-hidden="true"></i>';
                if (text_prev) prev_text = text_prev;
                if (text_next) next_text = text_next;

                if (itemres == '' || itemres === undefined) {
                    if (item == '1') itemres = '0:1,480:1,768:1,1200:1';
                    if (item == '2') itemres = '0:1,480:1,768:2,1200:2';
                    if (item == '3') itemres = '0:1,480:2,768:2,992:3';
                    if (item == '4') itemres = '0:1,480:2,840:3,1200:4';
                    if (item >= '5') itemres = '0:1,480:2,768:3,1024:4,1200:' + item;
                }
                itemres = itemres.split(',');
                var responsive = {};
                var i;
                for (i = 0; i < itemres.length; i++) {
                    itemres[i] = itemres[i].split(':');
                    var res_dv = {};
                    res_dv.items = parseInt(itemres[i][1], 10);
                    responsive[itemres[i][0]] = res_dv;
                }

                seff.owlCarousel({
                    items: parseInt(item, 10),
                    margin: parseInt(margin, 10),
                    loop: loop,
                    stagePadding: parseInt(stage_padding, 10),
                    startPosition: parseInt(start_position, 10),
                    nav: nav,
                    navText: [prev_text, next_text],
                    responsive: responsive,
                    autoplay: autoplay,
                    autoplayTimeout: autoplaytimeout,
                    dots: pag,
                    onTranslate: _owl_on_translate,
                    onTranslated: _owl_on_translated,
                    onInitialize: _owl_on_initialize,
                    dotsContainer: dotsContainer,
                    mouseDrag: mousedrag,
                    rewind: true,
                    smartSpeed: 500,
                });

                if (mousewheel) {
                    seff.on('mousewheel', '.owl-stage', function (e) {
                        if (e.deltaY > 0) {
                            seff.trigger('next.owl');
                        } else {
                            seff.trigger('prev.owl');
                        }
                        e.preventDefault();
                    });
                }
            });
        }
    }

    function _owl_on_translate(event) {

    }

    function _owl_on_translated(event) {
        var element = event.target;
        $(element).find('.owl-item').each(function () {
            var check = $(this).hasClass('active');
            if (check == true) {
                $(this).find('.animated').each(function () {
                    var anime = $(this).attr('data-animated');
                    $(this).addClass(anime);
                });
            } else {
                $(this).find('.animated').each(function () {
                    var anime = $(this).attr('data-animated');
                    $(this).removeClass(anime);
                });
            }
        })
    }

    function _owl_on_initialize() {
        if ($('.bg-slider').length < 0) return;
        $('.bg-slider .item-slider').each(function () {
            $(this).find('.slider-img a img').css('height', $(this).find('.slider-img a img').attr('height'));
            var src = $(this).find('.slider-img a img').attr('src');
            $(this).find('.slider-img').css('background-image', 'url("' + src + '")');
        });
    }

    // TinuMce Editor
    function _tinymce_editor() {
        if (typeof (tinyMCE) == "undefined") {
            console.warn('Warning - tinyMCE Js is not loaded.');
            return;
        }
        var useDarkMode = window.matchMedia('(prefers-color-scheme: dark)').matches;
        // Toolbar config
        var full_toolbar = 'undo redo | bold italic underline strikethrough | fontselect fontsizeselect formatselect | ' +
            'alignleft aligncenter alignright alignjustify | outdent indent |  numlist bullist | ' +
            'forecolor backcolor removeformat | pagebreak | charmap emoticons | fullscreen  preview save print | ' +
            'insertfile image media template link anchor codesample | ltr rtl';
        var less_toolbar = 'undo redo | formatselect | ' +
            'bold italic forecolor backcolor | alignleft aligncenter ' +
            'alignright alignjustify | bullist numlist outdent indent | ' +
            'removeformat | code help';
        // Menubar config
        var menubar = 'file edit view insert format tools table help';
        var height = 450;

        tinymce.init({
            height: height,
            language: 'vi_VN',
            selector: '[tinymce]',
            setup: function (editor) {
                editor.on('change', function () {
                    tinymce.triggerSave();
                });
            },
            plugins: 'print preview paste importcss searchreplace autolink autosave save directionality code visualblocks visualchars fullscreen image link media template codesample table charmap hr pagebreak nonbreaking anchor toc insertdatetime advlist lists wordcount imagetools textpattern noneditable help charmap quickbars emoticons',
            imagetools_cors_hosts: ['picsum.photos'],
            menubar: menubar,
            toolbar: less_toolbar,
            toolbar_sticky: true,
            autosave_ask_before_unload: true,
            autosave_interval: '30s',
            autosave_prefix: '{path}{query}-{id}-',
            autosave_restore_when_empty: false,
            autosave_retention: '2m',
            image_advtab: true,
            link_list: [{
                title: 'My page 1',
                value: 'https://www.tiny.cloud'
            },
            {
                title: 'My page 2',
                value: 'http://www.moxiecode.com'
            }
            ],
            image_list: [{
                title: 'My page 1',
                value: 'https://www.tiny.cloud'
            },
            {
                title: 'My page 2',
                value: 'http://www.moxiecode.com'
            }
            ],
            image_class_list: [{
                title: 'None',
                value: ''
            },
            {
                title: 'Some class',
                value: 'class-name'
            }
            ],
            importcss_append: true,
            file_picker_callback: function (callback, value, meta) {
                /* Provide file and text for the link dialog */
                if (meta.filetype === 'file') {
                    callback('https://www.google.com/logos/google.jpg', {
                        text: 'My text'
                    });
                }

                /* Provide image and alt text for the image dialog */
                if (meta.filetype === 'image') {
                    callback('https://www.google.com/logos/google.jpg', {
                        alt: 'My alt text'
                    });
                }

                /* Provide alternative source and posted for the media dialog */
                if (meta.filetype === 'media') {
                    callback('movie.mp4', {
                        source2: 'alt.ogg',
                        poster: 'https://www.google.com/logos/google.jpg'
                    });
                }
            },
            templates: [{
                title: 'New Table',
                description: 'creates a new table',
                content: '<div class="mceTmpl"><table width="98%%"  border="0" cellspacing="0" cellpadding="0"><tr><th scope="col"> </th><th scope="col"> </th></tr><tr><td> </td><td> </td></tr></table></div>'
            },
            {
                title: 'Starting my story',
                description: 'A cure for writers block',
                content: 'Once upon a time...'
            },
            {
                title: 'New list with dates',
                description: 'New List with dates',
                content: '<div class="mceTmpl"><span class="cdate">cdate</span><br /><span class="mdate">mdate</span><h2>My List</h2><ul><li></li><li></li></ul></div>'
            }
            ],
            template_cdate_format: '[Date Created (CDATE): %m/%d/%Y : %H:%M:%S]',
            template_mdate_format: '[Date Modified (MDATE): %m/%d/%Y : %H:%M:%S]',
            image_caption: true,
            quickbars_selection_toolbar: 'bold italic | quicklink h2 h3 blockquote quickimage quicktable',
            noneditable_noneditable_class: 'mceNonEditable',
            toolbar_mode: 'sliding',
            contextmenu: 'link image imagetools table',
            skin: useDarkMode ? 'oxide-dark' : 'oxide',
            content_css: useDarkMode ? 'dark' : 'default',
            content_style: 'body { font-family:Helvetica,Arial,sans-serif; font-size:14px }'
        });


    }


    var _counter_number = function (p_stop = false) {
        // Run Number
        if ($('.counter').length > 0) {
            $('.counter').each(function () {
                let animate = $(this).prop('Counter', 0).animate({
                    Counter: $(this).data('number')
                }, {
                    duration: 12000,
                    easing: 'swing',
                    step: function (now) {
                        $(this).text(Math.ceil(now).toString().replace(/(\d)(?=(\d\d\d)+(?!\d))/g, "$1,"));
                    },
                });
                if (p_stop) {
                    animate.stop(true);
                }
            });
        }
    }


    $(document).ready(function () {
        // Counter number
        _counter_number();

        // Owl slider
        _owl_slider();

        //Tinymce editor
        _tinymce_editor();

    });

    /* Script mobile nav*/
    $(function () {
        var $window = $(window);
        var lastScrollTop = 0;
        var $header = $('.header-top');
        var $footer = $('.mobile-bottom');
        var headerHeight = $header.outerHeight();

        $(window).scroll(function () {
            var windowTop = $window.scrollTop();

            if (windowTop >= headerHeight) {
                $header.addClass('sticky');
            } else {
                $header.removeClass('sticky').removeClass('show');
                $footer.removeClass('show');
            }
            if ($header.hasClass('sticky')) {
                if (windowTop < lastScrollTop) {
                    $header.addClass('show');
                    $footer.addClass('show');
                } else {
                    $header.removeClass('show');
                    $footer.removeClass('show');
                }
            }
            if (windowTop < lastScrollTop) {
                $footer.addClass('show');
            } else {
                $footer.removeClass('show');
            }
            lastScrollTop = windowTop;
        });
    })



});


// Hiểm thị hoặc ẩn password
var show_password = function (p_this) {
    var x = document.getElementById("password");
    if (x.type === "password") {
        x.type = "text";
        $(p_this).addClass('show');
    } else {
        x.type = "password";
        $(p_this).removeClass('show');
    }
}


// Fix kich thuoc anh ho so boi thuong
var on_change_kich_thuoc_anh = function (p_this) {
    if ($(p_this).is(':checked')) {
        $("#fancybox-gallery").addClass('view-fix')
    } else {
        $("#fancybox-gallery").removeClass('view-fix')
    }
}
// Click chon/bo anh ho so boi thuong can in
var on_change_print_select = function (p_this) {
    if (!$(p_this).is(':checked')) {
        $(p_this).closest('li').addClass('no-print');
    } else {
        $(p_this).closest('li').removeClass('no-print');
    }
}


//Fix z-index cho modal boostrap
var modal_lv = 0;
$('.modal').on('shown.bs.modal', function (e) {
    $('.modal-backdrop:last').css('zIndex', 1051 + modal_lv);
    $(e.currentTarget).css('zIndex', 1052 + modal_lv);
    modal_lv++
});

$('.modal').on('hidden.bs.modal', function (e) {
    modal_lv--
});

//Sap xep anh
if ($(".print-list").length > 0) {
    $(".print-list").sortable({
        handle: ".img-sortable",
    });
}

// Phan in anh ho so boi thuong theo dinh dang list/4/6
$('.btn-print').on('click', function () {
    var data = $(this).data('print');
    if (data == 'list') {
        $("#print-claim").removeClass('view-grid4 view-grid6').addClass('view-list');
    } else if (data == 'grid4') {
        $("#print-claim").removeClass('view-list view-grid6').addClass('view-grid4');
    } else {
        $("#print-claim").removeClass('view-list view-grid4').addClass('view-grid6');
    }

    $("#print-claim").print({
        noPrintSelector: ".no-print",
        timeout: 3000,
    });
})



//Faxcybox hien thi danh sach anh  
if ($('[data-fancybox="gallery"]').length > 0) {
    $('[data-fancybox="gallery"]').fancybox({
        buttons: [
            "zoom",
            "fb",
            // "share",
            "slideShow",
            "fullScreen",
            "download",
            "thumbs",
            "close"
        ],
        baseClass: "",
        //div lay noi dung cho anh
        caption: function (instance, item) {
            return $(this).find('figcaption').html();
        },
        // them xoay anh
        rotate: true,
        afterLoad: function (instance, current) {
            console.log(123);
        }
    });
}

if ($('.fancybox_pdf').length > 0) {
    $(".fancybox_pdf").fancybox({
        type: 'iframe',
        padding: 0,
        openEffect: 'fade',
        openSpeed: 150,
        closeEffect: 'fade',
        closeSpeed: 150,
        closeClick: true,
        width: '60%',
        height: '100%',
        maxWidth: '100%',
        maxHeight: '100%',
        iframe: {
            preload: false
        },
        beforeLoad: function () {
            var url = $(this.element).attr("href");
            this.href = "./includes/js/pdfjs/web/viewer.html?file=" + url + "#page=1&pagemode=none";
        }
    });
}

var fancybox_modal = function (p_this, p_src, p_parent = '#vswForm', p_click_around = 'close') {
    p_parent = p_parent.trim();
    if (p_click_around.length < 0 || p_click_around == false) p_click_around = false;
    p_this = $(p_this);
    // if (p_parent != '') {
    //     //Sap xep anh
    //     if ($(p_src).find('.print-list').length > 0) {
    //         $(p_src).find('.print-list').sortable({
    //             handle: ".img-sortable",
    //         });
    //     }
    //     $.fancybox.open({
    //         src: p_src,
    //         btnTpl: {
    //             smallBtn: "",
    //         },
    //         baseClass: "fancybox-modal",
    //         parentEl: p_parent,
    //         afterLoad: function (instance, current) {
    //             touch: false,
    //             $($.fn.dataTable.tables(true)).DataTable()
    //                 .columns.adjust()
    //                 .responsive.recalc();
    //         }
    //     });
    // } else {
    //Sap xep anh
    // if ($(p_src).find('.print-list').length > 0) {
    //     $(p_src).find('.print-list').sortable({
    //         handle: ".img-sortable",
    //     });
    // }
    $.fancybox.open({
        src: p_src,
        opts: {
            baseClass: "fancybox-modal",
            btnTpl: {
                smallBtn: "",
            },
            touch: false,
            clickSlide: p_click_around,
            clickOutside: p_click_around,
            afterLoad: function (instance, current) {
                $($.fn.dataTable.tables(true)).DataTable()
                    .columns.adjust()
                    .responsive.recalc();

            }
        }
    });
    // }
}

var filter_image = function (p_this) {
    var ourClass = $(p_this).attr('class');
    if (ourClass == 'all') {
        $('#print-list').children('li').show();
    } else {
        $('#print-list').children('li:not(.' + ourClass + ')').hide();
        $('#print-list').children('li.' + ourClass).show();
    }
    return false;
}

$('.toggle-password').on('click', function () {
    console.log(123);
    $(this).children().toggleClass('show');
    let input = $(this).prev();
    input.attr('type', input.attr('type') === 'password' ? 'text' : 'password');
});


// Chuyển đổi số thành từ
// bản quyền ngày 25 tháng 7 năm 2006, bởi Stephen Chapman http://javascript.about.com
// quyền sử dụng Javascript này trên trang web của bạn được cấp
// với điều kiện là tất cả mã (bao gồm cả thông báo bản quyền này) là
// được sử dụng chính xác như được hiển thị (bạn có thể thay đổi hệ thống đánh số nếu bạn muốn)

// Hệ thống đánh số của Mỹ
var th = ['', 'nghìn', 'triệu', 'tỷ', 'nghìn tỷ'];
// bỏ ghi chú dòng này cho English Number System
// var th = ['', 'nghìn', 'triệu', 'milliard', 'tỷ'];

var dg = ['không', 'một', 'hai', 'ba', 'bốn',
    'năm', 'sáu', 'bảy', 'tám', 'chín'
];
var tn = ['mười', 'mười một', 'mười hai', 'mười ba', 'mười bốn', 'mười lăm', 'mười sáu',
    'mười bảy', 'mười tám', 'mười chín'
];
var tw = ['twenty', 'thirty', 'forty', 'fifty',
    'sáu mươi', 'bảy mươi', 'tám mươi', 'chín mươi'
];

(function ($) {
    $.fn.extend({
        num2words: function (options) {

            var defaults = {
                units: ['', 'một', 'hai', 'ba', 'bốn', 'năm', 'sáu', 'bảy', 'tám', 'chín', 'mười'],
                teens: ['mười một', 'mười hai', 'mười ba', 'mười bốn', 'mười lăm', 'mười sáu', 'mười bảy', 'mười tám', 'mười chín', 'hai mươi'],
                tens: ['', 'mười', 'hai mươi', 'ba mươi', 'bốn mươi', 'năm mươi', 'sáu mươi', 'bảy mươi', 'tám mươi', 'chín mươi'],
                othersIntl: ["nghìn", "triệu", "tỷ", "nghìn tỷ"]
            };

            var options = $.extend(defaults, options);

            function NumberToWords() {
                var o = options;

                var units = o.units;
                var teens = o.teens;
                var tens = o.tens;
                var othersIntl = o.othersIntl;

                var getBelowHundred = function (n) {
                    if (n >= 100) {
                        return "lớn hơn hoặc bằng 100";
                    };
                    if (n <= 10) {
                        return units[n];
                    };
                    if (n <= 20) {
                        return teens[n - 10 - 1];
                    };
                    var unit = Math.floor(n % 10);
                    n /= 10;
                    var ten = Math.floor(n % 10);
                    var tenWord = (ten > 0 ? (tens[ten] + ' ') : '');
                    var unitWord = (unit > 0 ? units[unit] : '');
                    return tenWord + unitWord;
                };

                var getBelowThousand = function (n) {
                    if (n >= 1000) {
                        return "lớn hơn hoặc bằng 1000";
                    };
                    var word = getBelowHundred(Math.floor(n % 100));

                    n = Math.floor(n / 100);
                    var hun = Math.floor(n % 10);
                    word = (hun > 0 ? (units[hun] + " trăm ") : '') + word;

                    return word;
                };

                return {
                    numberToWords: function (n) {
                        if (isNaN(n)) {
                            return "không phải kiểu số";
                        };

                        var word = '';
                        var val;
                        var word2 = '';
                        var val2;
                        var b = n.split(".");
                        n = b[0];
                        d = b[1];
                        d = String(d);
                        d = d.substr(0, 2);

                        val = Math.floor(n % 1000);
                        n = Math.floor(n / 1000);

                        val2 = Math.floor(d % 1000);
                        d = Math.floor(d / 1000);

                        word = getBelowThousand(val);
                        word2 = getBelowThousand(val2);

                        othersArr = othersIntl;
                        divisor = 1000;
                        func = getBelowThousand;

                        var i = 0;
                        while (n > 0) {
                            if (i == othersArr.length - 1) {
                                word = this.numberToWords(n) + " " + othersArr[i] + " " + word;
                                break;
                            };
                            val = Math.floor(n % divisor);
                            n = Math.floor(n / divisor);
                            if (val != 0) {
                                word = func(val) + " " + othersArr[i] + " " + word;
                            };
                            i++;
                        };


                        var i = 0;
                        while (d > 0) {
                            if (i == othersArr.length - 1) {
                                word2 = this.numberToWords(d) + " " + othersArr[i] + " " + word2;
                                break;
                            };
                            val2 = Math.floor(d % divisor);
                            d = Math.floor(d / divisor);
                            if (val2 != 0) {
                                word2 = func(val2) + " " + othersArr[i] + " " + word2;
                            };
                            i++;
                        };
                        if (word != '') word = word + ' đồng';
                        if (word2 != '') word2 = ' lẻ ' + word2.toUpperCase() + ' ';
                        // return word + word2;
                        return word;

                    }
                }
            }

            return this.each(function () {
                var obj = $(this);
                var input = $(".input-money", obj);
                var div = $(".output-word", obj);
                input.on('change', function () {
                    var inputval = input.val().replace(/,/g, "");
                    var num2words = new NumberToWords();
                    var intl = num2words.numberToWords(inputval).replace(/\s\s+/g, ' ');
                    div.val(intl);
                });
            });
        }
    });
    $('.money-to-word').num2words();
})(jQuery);


var AlertMessage = function (source, urlBack) {
    Swal.fire({
        template: '#alert-message-template',
        title: '<span><i class="fad fa-bullhorn text-warning mr-2"></i>Thông báo</span>',
        html: $(source).html(),
        width: 600,
        backdrop: `rgba(0,0,0,.8)`,
        position: 'center',
        showCancelButton: true,
        showConfirmButton: true,
        confirmButtonText: `<i class="far fa-eye mr-1"></i>Xem báo cáo`,
        cancelButtonText: `Đóng`,
        customClass: {
            htmlContainer: 'swal-box',
            confirmButton: 'btn-lg border-0 mx-1 bg-primary',
            cancelButton: 'btn-lg border-0 mx-1'
        },
        buttonsStyling: false,
    }).then((result) => {
        if (result.isConfirmed) {
            if (urlBack.length > 0) {
                window.location.href = urlBack;
            }
        }
    })
}



jQuery(document).ready(function ($) {
    var bsOverlay = $('.bs-canvas-overlay');
    $('[data-toggle="canvas"]').on('click', function () {
        var ctrl = $(this),
            elm = ctrl.is('button') ? ctrl.data('target') : ctrl.attr('href');
        $(elm).addClass('mr-0');
        $(elm + ' .bs-canvas-close').attr('aria-expanded', "true");
        $('[data-target="' + elm + '"], a[href="' + elm + '"]').attr('aria-expanded', "true");
        if (bsOverlay.length)
            bsOverlay.addClass('show');
        return false;
    });

    $('.bs-canvas-close, .bs-canvas-overlay').on('click', function () {
        var elm;
        if ($(this).hasClass('bs-canvas-close')) {
            elm = $(this).closest('.bs-canvas');
            $('[data-target="' + elm + '"], a[href="' + elm + '"]').attr('aria-expanded', "false");
        } else {
            elm = $('.bs-canvas')
            $('[data-toggle="canvas"]').attr('aria-expanded', "false");
        }
        elm.removeClass('mr-0');
        $('.bs-canvas-close', elm).attr('aria-expanded', "false");
        if (bsOverlay.length)
            bsOverlay.removeClass('show');
        return false;
    });
});


jscolor.presets.default = {
    alpha: 1,
    previewSize: 30,
    backgroundColor: '#333',
    palette: '#056170 #e79341 #007f74 #DE8208 #1C3FAA #A839A1 #EE4A85 #FF7E65 #11C19A #67FBD1 #0062C5 #007ECB #0096C1 #00ACAD #00BF97',
};

function update_theme_color(picker, key) {
    // console.log(picker.toRGBAString());

    switch (key) {
        case "sub-color":
            $(":root").css("--sub-color", picker.toRGBAString());
            break;

        case "text-color":
            $(":root").css("--text-color", picker.toRGBAString());
            break;

        case "table-color":
            $(":root").css("--table-color", picker.toRGBAString());
            break;

        case "border-color":
            $(":root").css("--border-color", picker.toRGBAString());
            break;

        case "button-color":
            $(":root").css("--button-color", picker.toRGBAString());
            break;

        default:
            $(":root").css("--main-color", picker.toRGBAString());
            break;
    }
}


