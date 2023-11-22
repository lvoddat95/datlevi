var fancyboxClose = function (element) {
    parent.$.fancybox.close();
};

// Hiển thị cửa sổ Popup
var openWindow = function (p_source, options) {
    let source = p_source; // nguồn hiển thì. Nếu type='inline' là ID của html, hoặc url nếu type='iframe'
    let otps = {
        type: "iframe", // Loại hiển thị. type='inline' - Hiển thị html inline, type='iframe' - Hiển thị qua iframe
        allowClose: false, // Cho phép người dùng nhấn ra ngoài để đóng cửa sổ hiển thi
        size: "xl", // Size Alert: xs, s, n, l, xl. Default: auto
        modal: false, // Modal hiển thì theo dạng modal. Mặc định: false
    }
    $.extend(otps, options);

    // Cho phép đóng cửa sổ hiển thi hay không
    if (otps.allowClose == false) {
        clickSlide = false;
        clickOutside = false;
    } else {
        clickSlide = "close";
        clickOutside = "close";
    }

    // Xoá Toastr Message
    // toastr.clear();

    $.fancybox.open({
        src: source,
        type: otps.type,
        // closeExisting: .optionscloseExisting,
        iframe: {
            preload: false,
        },
        opts: {
            btnTpl: {
                smallBtn: "",
            },
            modal: otps.modal,
            touch: false,
            clickSlide: clickSlide,
            clickOutside: clickOutside,
            beforeClose: function (instance, current) {
                // toastr.clear();
            }
        },
    }, {
        baseClass: "fancybox-style",
        slideClass: "fancybox-slide-" + otps.size,
    });
};


// Hiển thị cửa sổ Popup truyền thuộc tính HTML data attribute
var openWindowData = function (element) {
    let elem = $(element);
    let type = elem.data("type"); // Loại hiển thị. type='inline' - Hiển thị html inline, type='iframe' - Hiển thị qua iframe
    let allowClose = elem.data("allow-close"); // Cho phép người dùng nhấn ra ngoài để đóng cửa sổ hiển thi
    let source = elem.data("src"); // nguồn hiển thì. Nếu type='inline' là ID của html, hoặc url nếu type='iframe'
    let size = elem.data("size"); // Size Alert: xs, s, n, l, xl. Default: auto
    let modal = elem.data("modal"); // Modal hiển thì theo dạng modal. Mặc định: false
    let closeExisting = elem.data("close-existing");
    let form_obj = elem.data("form");

    if ($.trim(type).length == 0) type = "iframe";
    if ($.trim(allowClose).length == 0) allowClose = false;
    if ($.trim(size).length == 0) size = "xl";
    if ($.trim(modal).length == 0) modal = false;
    if ($.trim(closeExisting).length == 0) closeExisting = true;

    // Cho phép đóng cửa sổ hiển thi hay không
    if (allowClose == false) {
        clickSlide = false;
        clickOutside = false;
    } else {
        clickSlide = "close";
        clickOutside = "close";
    }

    // console.log(modal)
    // console.log($.trim(modal).length == 0)
    // Xoá Toastr Message
    // toastr.clear();

    $.fancybox.open({
        src: source,
        type: type,
        closeExisting: closeExisting,
        iframe: {
            preload: false,
        },
        opts: {
            btnTpl: {
                smallBtn: "",
            },
            modal: modal,
            touch: false,
            clickSlide: clickSlide,
            clickOutside: clickOutside,
            beforeShow: function (instance, current) {
                // App.initFormValidate();
            },
            beforeClose: function (instance, current) {
                // toastr.clear();
            }
        },
    }, {
        baseClass: "fancybox-style",
        parentEl: form_obj,
        slideClass: "fancybox-slide-" + size,
    });

    // initFormValidate
};

var on_click_change_form = function (p_this) {
    var $this = $(p_this);
    $this.toggleClass('active');
    $this.closest('body').find('.wizard').toggleClass('wizard-style2');
}

var on_change_disable_control = function (p_this, p_list) {
    const arr = p_list.split(',')
    if (p_this.checked) {
        for (index = 0; index < arr.length; ++index) {
            if (arr[index].length > 0) {
                $('#' + arr[index]).attr('disabled', 'disabled');
            }
        }
    } else {
        for (index = 0; index < arr.length; ++index) {
            if (arr[index].length > 0) {
                $('#' + arr[index]).removeAttr("disabled")
            }
        }
    }
}


var on_change_nguon_dich_vu = function (p_this) {
    var v_input_value = $(p_this).val();
    if (v_input_value == 'NGAN_HANG') {
        $(p_this).closest('fieldset').find('#ngan_hang_opt').slideDown('400');
    } else {
        $(p_this).closest('fieldset').find('#ngan_hang_opt').slideUp('400');
    }
}

var on_change_kenh_ban = function (p_this, p_ngan_hang_opt) {
    var v_input_value = $(p_this).val();
    if (v_input_value == 'NGAN_HANG') {
        $(p_this).closest('.kenh-ban').find(p_ngan_hang_opt).toggle("highlight").show();
    } else {
        $(p_this).closest('.kenh-ban').find(p_ngan_hang_opt).hide();
    }
}

var on_change_kenh_khai_thac = function (p_this) {
    if (p_this.value == 'daili') {
        $('#moigioi').hide();
        $('#daili').show();
    } else if (p_this.value == 'moigioi') {
        $('#daili').hide();
        $('#moigioi').show();
    } else {
        $('#daili, #moigioi').show();
    }
}

var on_change_hinh_thuc_khai_thac = function (p_this) {
    if (p_this.value == 'tai-bh') {
        $('#tai-bh').slideDown();
        $('#dong-bh').slideUp();
        $('#vni-refs, #partner-refs').slideDown();
        $('#so_hop_dong_nhan_tai').hide();
        console.log(p_this.value)
    } else if (p_this.value == 'dong-bh') {
        $('#tai-bh').slideUp();
        $('#dong-bh').slideDown();
        $('#trach-nhiem-dong-bao-hiem').slideDown();
        $($.fn.dataTable.tables(true)).DataTable().columns.adjust().responsive.recalc();
        $('#vni-refs, #partner-refs').slideUp();
        $('#so_hop_dong_nhan_tai').show();
    } else {
        $('#tai-bh, #dong-bh, #trach-nhiem-dong-bao-hiem').slideUp();
        $('#vni-refs, #partner-refs').slideUp();
        $('#so_hop_dong_nhan_tai').show();

    }
}

var on_change_hinh_thuc_khai_thac_step4 = function (p_this) {
    if (p_this.value == 'tai-bh') {
        $('#tai-bh').slideDown();
        $('#dong-bh').slideUp();
        $('#vni-refs, #partner-refs').slideDown();
        $('#so_hop_dong_nhan_tai').hide();
        console.log(p_this.value)
    } else if (p_this.value == 'dong-bh') {
        $('#tai-bh').slideUp();
        $('#dong-bh').slideDown();
        $('#trach-nhiem-dong-bao-hiem').slideDown();
        $($.fn.dataTable.tables(true)).DataTable().columns.adjust().responsive.recalc();
        $('#vni-refs, #partner-refs').slideUp();
        $('#so_hop_dong_nhan_tai').show();
    } else {
        $('#tai-bh, #dong-bh, #trach-nhiem-dong-bao-hiem').slideUp();
        $('#vni-refs, #partner-refs').slideUp();
        $('#so_hop_dong_nhan_tai').show();
    }
}


var on_change_trang_thai_don = function (p_this) {
    var v_title = "";
    var v_input_value = $(p_this).val();
    var v_page_title = $(".p-title").find('span');

    var btn_duyet = $('.btn-duyet, .btn-duyet-dong');
    var btn_trinh_duyet = $('.btn-trinh-duyet');
    var btn_xoa = $('.btn-xoa');

    if (v_input_value == "moi-them") {
        v_title = "đang xử lý";
        btn_duyet.hide();
        btn_xoa.show();
        btn_trinh_duyet.show();

    } else if (v_input_value == "tu-choi") {
        v_title = "từ chối";
        btn_duyet.hide();
        btn_xoa.show();
        btn_trinh_duyet.show();

    } else if (v_input_value == "tbh-tu-choi") {
        v_title = "tái bảo hiểm từ chối";
        btn_duyet.hide();
        btn_xoa.show();
        btn_trinh_duyet.show();

    } else if (v_input_value == "chap-nhan") {
        v_title = "chấp nhận";
        btn_duyet.hide();
        btn_xoa.show();
        btn_trinh_duyet.show();

    } else if (v_input_value == "cho-duyet") {
        v_title = "chờ duyệt";
        btn_xoa.hide();
        btn_trinh_duyet.hide();
        btn_duyet.show();
    }

    v_page_title.text(v_title);

}

var on_change_trang_thai_duyet_don = function (p_this) {
    var v_input_value = $(p_this).val();
    var v_li_do = $(p_this).closest('form').find('#tu-choi-don');
    if (v_input_value == 'tu-choi') {
        v_li_do.slideDown();
    } else {
        v_li_do.slideUp();
    }
}

var _xoa_dong = function (p_this) {
    var r = confirm("Xoa doi tuong nay!");
    if (r == true) {
        $(p_this).closest('tr').remove();
    }
}

var on_change_loai_vay_von = function (p_this) {
    var v_input_value = $(p_this).val();
    console.log(v_input_value)
    if (v_input_value == "2") {
        $(p_this).closest('body').find('#upload-excel').slideDown('400');
    } else {
        $(p_this).closest('body').find('#upload-excel').slideUp('400');
    }
}

var on_change_chuyen_can_bo_thu_li = function (p_this) {
    var v_input_value = $(p_this).val();
    if (v_input_value == "1") {
        $('#can_bo_thu_li').slideDown('400');
    } else {
        $('#can_bo_thu_li').slideUp('400');
    }
}

var on_change_tinh_thanh_pho = function (p_this) {
    var v_input_value = $(p_this).val();
    if (v_input_value.length > 0) {
        $('#quan_huyen').removeAttr('disabled');
    } else {
        $('#quan_huyen').attr('disabled', 'disabled');
        $('#phuong_xa').attr('disabled', 'disabled');
    }
}

var on_change_quan_huyen = function (p_this) {
    var v_input_value = $(p_this).val();
    if (v_input_value.length > 0) {
        $('#phuong_xa').removeAttr('disabled');
    } else {
        $('#phuong_xa').attr('disabled', 'disabled');
    }
}


var in_gcn_hssv = function (p_this) {
    p_this = $(p_this);
    $("#print-container").print({
        noPrintSelector: ".no-print",
        timeout: 1500,
        deferred: $.Deferred().done(function () {})
    });
}

var kieu_lay_danh_sach = function (p_this) {
    var v_input_value = $(p_this).val();
    if (v_input_value == "2") {
        $('#stt').hide();
    } else {
        $('#stt').show();
    }
}

var on_change_ngay_di_ngay_ve = function (p_this) {
    if (p_this.checked) {
        $('.add-req').find('.text-danger').remove();
    } else {
        $('.add-req').append('<span class="text-danger">*</span>');

    }
}

var tim_kiem_gxx = function (p_this) {
    var v_input_value = $(p_this).val();
    if (v_input_value == "namsinh") {
        $('#hoten').hide();
        $('#namsinh').show();
    } else {
        $('#hoten').show();
        $('#namsinh').hide();
    }
}

var on_change_hinh_thuc_tbh = function (p_this) {
    var v_input_value = $(p_this).val();
    if (v_input_value == "co-dinh" || v_input_value == "ket-hop") {
        $('#cau-tuc-tai-theo-treaty').slideDown('400');
        $('#tbh-qs, #tbh-sl').show();
    } else {
        $('#cau-tuc-tai-theo-treaty').slideUp('400');
        $('#tbh-qs, #tbh-sl').hide();
    }

    if (v_input_value == "ket-hop") {
        $('#tbh-facout').toggle("highlight").show();
        $('#ti-le-facout').toggle("highlight").show();
        $('#nha-tai-ket-hop-table').show();
        $('#nha-tai-co-dinh-table').hide();
        $('#nha-tai-table').hide();
    } else if (v_input_value == 'co-dinh') {
        $('#tbh-facout').hide();
        $('#ti-le-facout').hide();
        $('#nha-tai-ket-hop-table').hide();
        $('#nha-tai-co-dinh-table').show();
        $('#nha-tai-table').hide();
    } else {
        $('#tbh-facout').hide();
        $('#ti-le-facout').hide();
        $('#nha-tai-ket-hop-table').hide();
        $('#nha-tai-co-dinh-table').hide();
        $('#nha-tai-table').show();
    }

}


$('#tai_bao_hiem_sw').on('change', function () {
    p_this = $(this);
    if (p_this.is(":checked")) {
        $('#so_tham_chieu').find('.input-group-append').show();
        $('.switch-msg-1').hide();
        $('.switch-msg-2').show();
    } else {
        $('#so_tham_chieu').find('.input-group-append').hide();
        $('.switch-msg-1').show();
        $('.switch-msg-2').hide();
    }
    console.log(p_this.val())
});

var on_change_switch_message = function (p_this) {
    let $this = $(p_this);
    if ($this.is(":checked")) {
        $('#switch_message').find('.input-group-append').show();
        $('.switch-msg-1').hide();
        $('.switch-msg-2').show();
    } else {
        $('#switch_message').find('.input-group-append').hide();
        $('.switch-msg-1').show();
        $('.switch-msg-2').hide();
    }
    console.log($this.val())
};

var onchange_form_f02 = function (p_this) {
    let $this = $(p_this);
    let v_nhan_hieu = $this.find('[name="nhan_hieu"]');
    let v_so_loai = $this.find('[name="so_loai"]');
    if (v_nhan_hieu.val() != '' && v_so_loai.val() != '') {
        $('#khoang_gia').slideDown('400');
    } else {
        $('#khoang_gia').slideUp();
    }
};
var onchange_bao_sau = function (p_this) {
    if (p_this.checked) {
        $(p_this).parents('.form-group').find('.text-danger').remove();

    } else {
        $(p_this).parents('.form-group').find('label > span').append('<span class="text-danger">*</span>');
    }
}

var on_change_hop_dong_theo = function (p_this) {
    var v_input_value = $(p_this).val();
    if (v_input_value == 'nam') {
        $('#ten-du-an,#gia-trị-du-an,#phi-du-an').hide();
        $(p_this).closest('#step3').find('.add-req >.text-danger').remove();
    } else if (v_input_value == '') {
        $(p_this).closest('#step3').find('.add-req >.text-danger').remove();
    } else {
        $('#ten-du-an,#gia-trị-du-an,#phi-du-an').show();
        $(p_this).closest('#step3').find('.add-req').append('<span class="text-danger">*</span>');
    }
};

var onchange_ngay_het_han_thong_tu = function (p_this, p_elem_datepicker, p_elem_visible, ) {
    if (p_this.checked) {
        $(p_elem_datepicker).removeAttr('disabled');
        $(p_elem_visible).slideDown('400');
    } else {
        $(p_elem_datepicker).attr('disabled', '');
        $(p_elem_datepicker).val('');
        $(p_elem_visible).slideUp('400');
    }
}


var on_change_trang_thai_ac_huy_mat = function (p_this) {
    var v_input_value = $(p_this).val();
    var v_so_tien = $(p_this).parents('tr').find('.so-tien');
    var v_quyet_dinh = $(p_this).parents('tr').find('.quyet-dinh');
    if (v_input_value == 'HUY') {
        $(v_so_tien).removeAttr('disabled');
        $(v_quyet_dinh).removeAttr('disabled');
    } else {
        $(v_so_tien).attr('disabled', '');
        $(v_quyet_dinh).attr('disabled', '');
    }
}


function list_to_tree(list) {
    var map = {},
        node, roots = [],
        i;

    for (i = 0; i < list.length; i += 1) {
        map[list[i].id] = i; // initialize the map
        list[i].children = []; // initialize the children
    }

    for (i = 0; i < list.length; i += 1) {
        node = list[i];
        if (node.parent !== "0") {
            list[map[node.parent]].children.push(node);
        } else {
            roots.push(node);
        }
    }
    return roots;
}
var onchange_status = function (p_this) {
    var select_box = $(p_this).find('[repeater] select');
    console.log(select_box);
}
var onchange_ckb_status = function (p_this) {
    var select_box = $('#form-status').find('select');
    var add_btn = $('#form-status').find('.btn-them');
    var remove_btn = $('#form-status').find('.btn-xoa');
    if (p_this.checked) {
        select_box.attr('disabled', '');
        add_btn.attr('disabled', '').addClass('disabled');
        remove_btn.attr('disabled', '').addClass('disabled');
    } else {
        select_box.removeAttr('disabled');
        add_btn.removeAttr('disabled').removeClass('disabled');
        remove_btn.removeAttr('disabled').removeClass('disabled');
    }

}

var on_change_hinh_thuc_ban = function (p_this, p_elem) {
    var v_value = $(p_this).val();
    $('#goi-bao-hiem').find('select').val(null).trigger('change');

    if (v_value == 'ban-nhom') {
        $('#step3').find('.danh-sach-ban-le').hide();
        $('#step3').find('.danh-sach-ban-nhom').show();
        $('#step3').removeClass('ban-le').addClass('ban-nhom');
        $('#quyen-loi-bo-sung').hide();
    } else if (v_value == 'ban-le') {
        $('#step3').find('.danh-sach-ban-le').show();
        $('#step3').find('.danh-sach-ban-nhom').hide();
        $('#step3').removeClass('ban-nhom').addClass('ban-le');
    } else {
        $('#step3').find('.danh-sach-ban').hide();
        $('#step3').removeClass('ban-nhom ban-le');
        $('#quyen-loi-bo-sung').hide();
    }
}

var on_change_print_option = function (p_this) {
    var v_value = $(p_this).val();
    console.log(v_value)
    if (v_value == 'in07') {
        $("#print_option").attr("onclick", "fancybox_modal(this,'#the_vni_care');");
    } else {
        $("#print_option").attr("onclick", "fancybox_modal(this,'#in_gcn_hssv');");
    }
}


var on_change_goi_bao_hiem = function (p_this, p_elem) {
    var v_value = $(p_this).val();
    if (v_value == '' || v_value == 1 || v_value == 2) {
        $(p_elem).hide();
    } else {
        $(p_elem).show();
    }

}

var on_change_nam_sinh_ndbh_g02 = function (p_this) {
    var v_value = $(p_this).val();
    var age = _calculate_age(v_value);
    console.log(age);
    if (age > 18) {
        $('#so-hop-dong-bao-hiem').show();
    } else {
        $('#so-hop-dong-bao-hiem').hide();
    }
}


function _calculate_age(birthday) {
    var newData = birthday.replace(/(\d+[/])(\d+[/])/, '$2$1');
    var dateObject = new Date(newData);
    var ageDifMs = Date.now() - dateObject.getTime();
    var ageDate = new Date(ageDifMs); // miliseconds from epoch
    return Math.abs(ageDate.getUTCFullYear() - 1970);
}

function show_more_filter(p_this, p_elem) {
    $(p_this).toggleClass('open-filter');
    $(p_elem).slideToggle('fast');
}

var on_change_chung_tu_loai_nghiep_vu = function (p_this) {
    var v_value = $(p_this).val();
    if (v_value == '1') {
        $('.loai-nghiep-vu').hide();
        $('#danh-sach-hoa-don-vat').show();
        $('#chi-tien-gui-ngan-hang').slideDown();
    } else if (v_value == '2' || v_value == '4') {
        $('.loai-nghiep-vu').hide();
        $('#danh-sach-hoa-don-vat').show();
        $('#thu-tien-gui-ngan-hang').slideDown();
    } else if (v_value == '3' || v_value == '7') {
        $('.loai-nghiep-vu').hide();
        $('#danh-sach-hoa-don-vat').show();
        $('#chi-tien-mat').slideDown();
    } else if (v_value == '5') {
        $('.loai-nghiep-vu').hide();
        $('#danh-sach-hoa-don-vat').show();
        $('#thanh-toan-tam-ung').slideDown();
    } else if (v_value == '10' || v_value == '12' || v_value == '13') {
        $('.loai-nghiep-vu').hide();
        $('#danh-sach-hoa-don-vat').hide();
        $('#doi-tuong-thanh-toan').slideDown();
    } else {
        $('.loai-nghiep-vu').hide();
        $('#danh-sach-hoa-don-vat').show();
        $('#doi-tuong-thanh-toan').slideDown();
    }
}

var onchange_ty_gia_loai_tien = function (p_this) {
    var v_value = $(p_this).val();
    if (v_value != 'VND' && v_value.length > 0) {
        $('#ty-gia-loai-tien').slideDown();
    } else {
        $('#ty-gia-loai-tien').hide();
    }
}

var on_change_mua_theo_muc_luong = function (p_this) {
    var v_value = $(p_this).val();
    if (v_value == '1') {
        $('.mua-theo-muc-luong').hide();
    } else {
        $('.mua-theo-muc-luong').toggle("highlight").show();
    }
}

var on_change_danh_sach_import = function (p_this) {
    var v_value = $(p_this).val();
    console.log($('#import-name').text())
    if (v_value == '1') {
        $('#import-name').text("Import danh sách tạm");
    } else {
        $('#import-name').text("Import danh sách chính thức");
    }
}
var onchange_show_ds_hang = function (p_this) {
    var v_value = $(p_this).val();

    if (v_value) {
        $('#ds-hang').toggle("highlight").show();
    } else {
        $('#ds-hang').hide();
    }
}

var onchange_cu_phap_nop_tien = function (p_this) {
    let v_radio_value = $(p_this).val();
    if (v_radio_value == "cu-phap-1") {
        $('#form-cu-phap-1').slideDown("400");
        $('#form-cu-phap-2').slideUp("400");
    } else {
        $('#form-cu-phap-2').slideDown("400");
        $('#form-cu-phap-1').slideUp("400");
    }
}

$(function () {
    if ($('#data-tree').length > 0) {
        var list_data = $('#data-tree').data('tree');
        let tree_arr = list_to_tree(list_data)[0];

        for (var i = 0; i < list_data.length; i++) {
            list_data[i].text = JSON.parse('{' + '"name":"' + list_data[i].text + '"}');
            delete list_data[i].parent;
            delete list_data[i].id;
        }


        tree_structure = {
            chart: {
                container: "#chart-tree",
                levelSeparation: 60,
                siblingSeparation: 60,
                nodeAlign: "BOTTOM",
                connectors: {
                    type: "step",
                    style: {
                        "stroke-width": 2,
                        "stroke": "#00CE67",
                        "stroke-dasharray": "", //"", "-", ".", "-.", "-..", ". ", "- ", "--", "- .", "--.", "--.."
                        "arrow-end": "classic-wide-long"
                    }
                },
                node: {
                    HTMLclass: "big-commpany"
                }
            },

            nodeStructure: tree_arr
        };

        new Treant(tree_structure);
    }
    $(".my-picker").datepicker({
        dateFormat: 'mm/yy',
        changeMonth: true,
        changeYear: true,
        showButtonPanel: true,

        onClose: function (dateText, inst) {
            var month = $("#ui-datepicker-div .ui-datepicker-month :selected").val();
            var year = $("#ui-datepicker-div .ui-datepicker-year :selected").val();
            $(this).val($.datepicker.formatDate('mm/yy', new Date(year, month, 1)));
        }
    });

    $(".my-picker").focus(function () {
        $(".ui-datepicker-calendar").hide();
        // $("#ui-datepicker-div").position({
        //     my: "center top",
        //     at: "center bottom",
        //     of: $(this)
        // });
    });
});