// Select2 
! function () {
    if (jQuery && jQuery.fn && jQuery.fn.select2 && jQuery.fn.select2.amd) var n = jQuery.fn.select2.amd;
    n.define("select2/i18n/vi", [], function () {
        return {
            inputTooLong: function (n) {
                return "Vui lòng xóa bớt " + (n.input.length - n.maximum) + " ký tự"
            },
            inputTooShort: function (n) {
                return "Vui lòng nhập thêm từ " + (n.minimum - n.input.length) + " ký tự trở lên"
            },
            loadingMore: function () {
                return "Đang lấy thêm kết quả…"
            },
            maximumSelected: function (n) {
                return "Chỉ có thể chọn được " + n.maximum + " lựa chọn"
            },
            noResults: function () {
                return "Không tìm thấy kết quả"
            },
            searching: function () {
                return "Đang tìm…"
            },
            removeAllItems: function () {
                return "Xóa tất cả các mục"
            }
        }
    }), n.define, n.require
}();

// Validator 
(function (window, document, $) {
    'use strict';
    $.extend($.validator.messages, {
        required: "Thông tin bắt buộc.",
        remote: "Hãy sửa cho đúng.",
        email: "Vui lòng nhập địa chỉ email hợp lệ.",
        url: "Vui lòng nhập URL hợp lệ.",
        date: "Vui lòng nhập một ngàyhợp lệ.",
        dateISO: "Vui lòng nhập ngày (ISO).",
        number: "Vui lòng nhập số.",
        digits: "Vui lòng nhập chữ số.",
        creditcard: "Vui lòng nhập số thẻ tín dụng.",
        equalTo: "Vui lòng nhập thêm lần nữa.",
        extension: "Phần mở rộng không đúng.",
        maxlength: $.validator.format("Vui lòng nhập từ {0} kí tự trở xuống."),
        minlength: $.validator.format("Vui lòng nhập từ {0} kí tự trở lên."),
        rangelength: $.validator.format("Vui lòng nhập từ {0} đến {1} kí tự."),
        range: $.validator.format("Vui lòng nhập từ {0} đến {1}."),
        max: $.validator.format("Vui lòng nhập từ {0} trở xuống."),
        min: $.validator.format("Vui lòng nhập từ {0} trở lên.")
    });
})(window, document, jQuery);

// Datepicker 
if ($().datepicker) {
    $.datepicker.regional['vi'] = {
        closeText: "Đóng",
        prevText: "&#x3C;Trước",
        nextText: "Tiếp&#x3E;",
        currentText: "Hôm nay",
        monthNames: ["Tháng Một", "Tháng Hai", "Tháng Ba", "Tháng Tư", "Tháng Năm", "Tháng Sáu",
            "Tháng Bảy", "Tháng Tám", "Tháng Chín", "Tháng Mười", "Tháng Mười Một", "Tháng Mười Hai"
        ],
        monthNamesShort: ["Tháng 1", "Tháng 2", "Tháng 3", "Tháng 4", "Tháng 5", "Tháng 6",
            "Tháng 7", "Tháng 8", "Tháng 9", "Tháng 10", "Tháng 11", "Tháng 12"
        ],
        dayNames: ["Chủ Nhật", "Thứ Hai", "Thứ Ba", "Thứ Tư", "Thứ Năm", "Thứ Sáu", "Thứ Bảy"],
        dayNamesShort: ["CN", "T2", "T3", "T4", "T5", "T6", "T7"],
        dayNamesMin: ["CN", "T2", "T3", "T4", "T5", "T6", "T7"],
        weekHeader: "Tu",
        dateFormat: "dd/mm/yy",
        firstDay: 0,
        isRTL: false,
        showMonthAfterYear: false,
        yearSuffix: ""
    };
    $.datepicker.setDefaults($.datepicker.regional['vi']);
}

// Cleave phone vn
! function () {
    function n(n, t) {
        var l = n.split("."),
            e = U;
        l[0] in e || !e.execScript || e.execScript("var " + l[0]);
        for (var r; l.length && (r = l.shift());) l.length || void 0 === t ? e = e[r] ? e[r] : e[r] = {} : e[r] = t
    }

    function t(n, t) {
        function l() {}
        l.prototype = t.prototype, n.M = t.prototype, n.prototype = new l, n.prototype.constructor = n, n.N = function (n, l, e) {
            for (var r = Array(arguments.length - 2), u = 2; u < arguments.length; u++) r[u - 2] = arguments[u];
            return t.prototype[l].apply(n, r)
        }
    }

    function l(n, t) {
        null != n && this.a.apply(this, arguments)
    }

    function e(n) {
        n.b = ""
    }

    function r(n, t) {
        n.sort(t || u)
    }

    function u(n, t) {
        return n > t ? 1 : n < t ? -1 : 0
    }

    function i(n) {
        var t, l = [],
            e = 0;
        for (t in n) l[e++] = n[t];
        return l
    }

    function a(n, t) {
        this.b = n, this.a = {};
        for (var l = 0; l < t.length; l++) {
            var e = t[l];
            this.a[e.b] = e
        }
    }

    function o(n) {
        return n = i(n.a), r(n, function (n, t) {
            return n.b - t.b
        }), n
    }

    function s(n, t) {
        switch (this.b = n, this.g = !!t.v, this.a = t.c, this.i = t.type, this.h = !1, this.a) {
            case J:
            case K:
            case L:
            case O:
            case Z:
            case k:
            case Y:
                this.h = !0
        }
        this.f = t.defaultValue
    }

    function f() {
        this.a = {}, this.f = this.j().a, this.b = this.g = null
    }

    function p(n, t) {
        for (var l = o(n.j()), e = 0; e < l.length; e++) {
            var r = l[e],
                u = r.b;
            if (null != t.a[u]) {
                n.b && delete n.b[r.b];
                var i = 11 == r.a || 10 == r.a;
                if (r.g)
                    for (var r = c(t, u) || [], a = 0; a < r.length; a++) {
                        var s = n,
                            f = u,
                            h = i ? r[a].clone() : r[a];
                        s.a[f] || (s.a[f] = []), s.a[f].push(h), s.b && delete s.b[f]
                    } else r = c(t, u), i ? (i = c(n, u)) ? p(i, r) : m(n, u, r.clone()) : m(n, u, r)
            }
        }
    }

    function c(n, t) {
        var l = n.a[t];
        if (null == l) return null;
        if (n.g) {
            if (!(t in n.b)) {
                var e = n.g,
                    r = n.f[t];
                if (null != l)
                    if (r.g) {
                        for (var u = [], i = 0; i < l.length; i++) u[i] = e.b(r, l[i]);
                        l = u
                    } else l = e.b(r, l);
                return n.b[t] = l
            }
            return n.b[t]
        }
        return l
    }

    function h(n, t, l) {
        var e = c(n, t);
        return n.f[t].g ? e[l || 0] : e
    }

    function g(n, t) {
        var l;
        if (null != n.a[t]) l = h(n, t, void 0);
        else n: {
            if (l = n.f[t], void 0 === l.f) {
                var e = l.i;
                if (e === Boolean) l.f = !1;
                else if (e === Number) l.f = 0;
                else {
                    if (e !== String) {
                        l = new e;
                        break n
                    }
                    l.f = l.h ? "0" : ""
                }
            }
            l = l.f
        }
        return l
    }

    function d(n, t) {
        return n.f[t].g ? null != n.a[t] ? n.a[t].length : 0 : null != n.a[t] ? 1 : 0
    }

    function m(n, t, l) {
        n.a[t] = l, n.b && (n.b[t] = l)
    }

    function b(n, t) {
        var l, e = [];
        for (l in t) 0 != l && e.push(new s(l, t[l]));
        return new a(n, e)
    }

    function y() {
        f.call(this)
    }

    function v() {
        f.call(this)
    }

    function _() {
        f.call(this)
    }

    function $() {}

    function S() {}

    function w() {}

    function x() {
        this.a = {}
    }

    function N(n) {
        return 0 == n.length || un.test(n)
    }

    function A(n, t) {
        if (null == t) return null;
        t = t.toUpperCase();
        var l = n.a[t];
        if (null == l) {
            if (l = tn[t], null == l) return null;
            l = (new w).a(_.j(), l), n.a[t] = l
        }
        return l
    }

    function j(n) {
        return n = nn[n], null == n ? "ZZ" : n[0]
    }

    function E(n) {
        this.H = RegExp("â€ˆ"), this.C = "", this.m = new l, this.w = "", this.i = new l, this.u = new l, this.l = !0, this.A = this.o = this.F = !1, this.G = x.b(), this.s = 0, this.b = new l, this.B = !1, this.h = "", this.a = new l, this.f = [], this.D = n, this.J = this.g = B(this, this.D)
    }

    function B(n, t) {
        var l;
        if (null != t && isNaN(t) && t.toUpperCase() in tn) {
            if (l = A(n.G, t), null == l) throw Error("Invalid region code: " + t);
            l = g(l, 10)
        } else l = 0;
        return l = A(n.G, j(l)), null != l ? l : an
    }

    function R(n) {
        for (var t = n.f.length, l = 0; l < t; ++l) {
            var r = n.f[l],
                u = g(r, 1);
            if (n.w == u) return !1;
            var i;
            i = n;
            var a = r,
                o = g(a, 1);
            if (-1 != o.indexOf("|")) i = !1;
            else {
                o = o.replace(on, "\\d"), o = o.replace(sn, "\\d"), e(i.m);
                var s;
                s = i;
                var a = g(a, 2),
                    f = "999999999999999".match(o)[0];
                f.length < s.a.b.length ? s = "" : (s = f.replace(new RegExp(o, "g"), a), s = s.replace(RegExp("9", "g"), "â€ˆ")), 0 < s.length ? (i.m.a(s), i = !0) : i = !1
            }
            if (i) return n.w = u, n.B = pn.test(h(r, 4)), n.s = 0, !0
        }
        return n.l = !1
    }

    function F(n, t) {
        for (var l = [], e = t.length - 3, r = n.f.length, u = 0; u < r; ++u) {
            var i = n.f[u];
            0 == d(i, 3) ? l.push(n.f[u]) : (i = h(i, 3, Math.min(e, d(i, 3) - 1)), 0 == t.search(i) && l.push(n.f[u]))
        }
        n.f = l
    }

    function C(n, t) {
        n.i.a(t);
        var l = t;
        if (rn.test(l) || 1 == n.i.b.length && en.test(l)) {
            var r, l = t;
            "+" == l ? (r = l, n.u.a(l)) : (r = ln[l], n.u.a(r), n.a.a(r)), t = r
        } else n.l = !1, n.F = !0;
        if (!n.l) {
            if (!n.F)
                if (P(n)) {
                    if (q(n)) return I(n)
                } else if (0 < n.h.length && (l = n.a.toString(), e(n.a), n.a.a(n.h), n.a.a(l), l = n.b.toString(), r = l.lastIndexOf(n.h), e(n.b), n.b.a(l.substring(0, r))), n.h != H(n)) return n.b.a(" "), I(n);
            return n.i.toString()
        }
        switch (n.u.b.length) {
            case 0:
            case 1:
            case 2:
                return n.i.toString();
            case 3:
                if (!P(n)) return n.h = H(n), M(n);
                n.A = !0;
            default:
                return n.A ? (q(n) && (n.A = !1), n.b.toString() + n.a.toString()) : 0 < n.f.length ? (l = T(n, t), r = V(n), 0 < r.length ? r : (F(n, n.a.toString()), R(n) ? G(n) : n.l ? D(n, l) : n.i.toString())) : M(n)
        }
    }

    function I(n) {
        return n.l = !0, n.A = !1, n.f = [], n.s = 0, e(n.m), n.w = "", M(n)
    }

    function V(n) {
        for (var t = n.a.toString(), l = n.f.length, e = 0; e < l; ++e) {
            var r = n.f[e],
                u = g(r, 1);
            if (new RegExp("^(?:" + u + ")$").test(t)) return n.B = pn.test(h(r, 4)), t = t.replace(new RegExp(u, "g"), h(r, 2)), D(n, t)
        }
        return ""
    }

    function D(n, t) {
        var l = n.b.b.length;
        return n.B && 0 < l && " " != n.b.toString().charAt(l - 1) ? n.b + " " + t : n.b + t
    }

    function M(n) {
        var t = n.a.toString();
        if (3 <= t.length) {
            for (var l = n.o && 0 == n.h.length && 0 < d(n.g, 20) ? c(n.g, 20) || [] : c(n.g, 19) || [], e = l.length, r = 0; r < e; ++r) {
                var u = l[r];
                0 < n.h.length && N(g(u, 4)) && !h(u, 6) && null == u.a[5] || (0 != n.h.length || n.o || N(g(u, 4)) || h(u, 6)) && fn.test(g(u, 2)) && n.f.push(u)
            }
            return F(n, t), t = V(n), 0 < t.length ? t : R(n) ? G(n) : n.i.toString()
        }
        return D(n, t)
    }

    function G(n) {
        var t = n.a.toString(),
            l = t.length;
        if (0 < l) {
            for (var e = "", r = 0; r < l; r++) e = T(n, t.charAt(r));
            return n.l ? D(n, e) : n.i.toString()
        }
        return n.b.toString()
    }

    function H(n) {
        var t, l = n.a.toString(),
            r = 0;
        return 1 != h(n.g, 10) ? t = !1 : (t = n.a.toString(), t = "1" == t.charAt(0) && "0" != t.charAt(1) && "1" != t.charAt(1)), t ? (r = 1, n.b.a("1").a(" "), n.o = !0) : null != n.g.a[15] && (t = new RegExp("^(?:" + h(n.g, 15) + ")"), t = l.match(t), null != t && null != t[0] && 0 < t[0].length && (n.o = !0, r = t[0].length, n.b.a(l.substring(0, r)))), e(n.a), n.a.a(l.substring(r)), l.substring(0, r)
    }

    function P(n) {
        var t = n.u.toString(),
            l = new RegExp("^(?:\\+|" + h(n.g, 11) + ")"),
            l = t.match(l);
        return null != l && null != l[0] && 0 < l[0].length && (n.o = !0, l = l[0].length, e(n.a), n.a.a(t.substring(l)), e(n.b), n.b.a(t.substring(0, l)), "+" != t.charAt(0) && n.b.a(" "), !0)
    }

    function q(n) {
        if (0 == n.a.b.length) return !1;
        var t, r = new l;
        n: {
            if (t = n.a.toString(), 0 != t.length && "0" != t.charAt(0))
                for (var u, i = t.length, a = 1; 3 >= a && a <= i; ++a)
                    if (u = parseInt(t.substring(0, a), 10), u in nn) {
                        r.a(t.substring(a)), t = u;
                        break n
                    } t = 0
        }
        return 0 != t && (e(n.a), n.a.a(r.toString()), r = j(t), "001" == r ? n.g = A(n.G, "" + t) : r != n.D && (n.g = B(n, r)), n.b.a("" + t).a(" "), n.h = "", !0)
    }

    function T(n, t) {
        var l = n.m.toString();
        if (0 <= l.substring(n.s).search(n.H)) {
            var r = l.search(n.H),
                l = l.replace(n.H, t);
            return e(n.m), n.m.a(l), n.s = r, l.substring(0, n.s + 1)
        }
        return 1 == n.f.length && (n.l = !1), n.w = "", n.i.toString()
    }
    var U = this;
    l.prototype.b = "", l.prototype.set = function (n) {
        this.b = "" + n
    }, l.prototype.a = function (n, t, l) {
        if (this.b += String(n), null != t)
            for (var e = 1; e < arguments.length; e++) this.b += arguments[e];
        return this
    }, l.prototype.toString = function () {
        return this.b
    };
    var Y = 1,
        k = 2,
        J = 3,
        K = 4,
        L = 6,
        O = 16,
        Z = 18;
    f.prototype.set = function (n, t) {
        m(this, n.b, t)
    }, f.prototype.clone = function () {
        var n = new this.constructor;
        return n != this && (n.a = {}, n.b && (n.b = {}), p(n, this)), n
    }, t(y, f);
    var z = null;
    t(v, f);
    var Q = null;
    t(_, f);
    var W = null;
    y.prototype.j = function () {
        var n = z;
        return n || (z = n = b(y, {
            0: {
                name: "NumberFormat",
                I: "i18n.phonenumbers.NumberFormat"
            },
            1: {
                name: "pattern",
                required: !0,
                c: 9,
                type: String
            },
            2: {
                name: "format",
                required: !0,
                c: 9,
                type: String
            },
            3: {
                name: "leading_digits_pattern",
                v: !0,
                c: 9,
                type: String
            },
            4: {
                name: "national_prefix_formatting_rule",
                c: 9,
                type: String
            },
            6: {
                name: "national_prefix_optional_when_formatting",
                c: 8,
                defaultValue: !1,
                type: Boolean
            },
            5: {
                name: "domestic_carrier_code_formatting_rule",
                c: 9,
                type: String
            }
        })), n
    }, y.j = y.prototype.j, v.prototype.j = function () {
        var n = Q;
        return n || (Q = n = b(v, {
            0: {
                name: "PhoneNumberDesc",
                I: "i18n.phonenumbers.PhoneNumberDesc"
            },
            2: {
                name: "national_number_pattern",
                c: 9,
                type: String
            },
            9: {
                name: "possible_length",
                v: !0,
                c: 5,
                type: Number
            },
            10: {
                name: "possible_length_local_only",
                v: !0,
                c: 5,
                type: Number
            },
            6: {
                name: "example_number",
                c: 9,
                type: String
            }
        })), n
    }, v.j = v.prototype.j, _.prototype.j = function () {
        var n = W;
        return n || (W = n = b(_, {
            0: {
                name: "PhoneMetadata",
                I: "i18n.phonenumbers.PhoneMetadata"
            },
            1: {
                name: "general_desc",
                c: 11,
                type: v
            },
            2: {
                name: "fixed_line",
                c: 11,
                type: v
            },
            3: {
                name: "mobile",
                c: 11,
                type: v
            },
            4: {
                name: "toll_free",
                c: 11,
                type: v
            },
            5: {
                name: "premium_rate",
                c: 11,
                type: v
            },
            6: {
                name: "shared_cost",
                c: 11,
                type: v
            },
            7: {
                name: "personal_number",
                c: 11,
                type: v
            },
            8: {
                name: "voip",
                c: 11,
                type: v
            },
            21: {
                name: "pager",
                c: 11,
                type: v
            },
            25: {
                name: "uan",
                c: 11,
                type: v
            },
            27: {
                name: "emergency",
                c: 11,
                type: v
            },
            28: {
                name: "voicemail",
                c: 11,
                type: v
            },
            29: {
                name: "short_code",
                c: 11,
                type: v
            },
            30: {
                name: "standard_rate",
                c: 11,
                type: v
            },
            31: {
                name: "carrier_specific",
                c: 11,
                type: v
            },
            33: {
                name: "sms_services",
                c: 11,
                type: v
            },
            24: {
                name: "no_international_dialling",
                c: 11,
                type: v
            },
            9: {
                name: "id",
                required: !0,
                c: 9,
                type: String
            },
            10: {
                name: "country_code",
                c: 5,
                type: Number
            },
            11: {
                name: "international_prefix",
                c: 9,
                type: String
            },
            17: {
                name: "preferred_international_prefix",
                c: 9,
                type: String
            },
            12: {
                name: "national_prefix",
                c: 9,
                type: String
            },
            13: {
                name: "preferred_extn_prefix",
                c: 9,
                type: String
            },
            15: {
                name: "national_prefix_for_parsing",
                c: 9,
                type: String
            },
            16: {
                name: "national_prefix_transform_rule",
                c: 9,
                type: String
            },
            18: {
                name: "same_mobile_and_fixed_line_pattern",
                c: 8,
                defaultValue: !1,
                type: Boolean
            },
            19: {
                name: "number_format",
                v: !0,
                c: 11,
                type: y
            },
            20: {
                name: "intl_number_format",
                v: !0,
                c: 11,
                type: y
            },
            22: {
                name: "main_country_for_code",
                c: 8,
                defaultValue: !1,
                type: Boolean
            },
            23: {
                name: "leading_digits",
                c: 9,
                type: String
            },
            26: {
                name: "leading_zero_possible",
                c: 8,
                defaultValue: !1,
                type: Boolean
            }
        })), n
    }, _.j = _.prototype.j, $.prototype.a = function (n) {
        throw new n.b, Error("Unimplemented")
    }, $.prototype.b = function (n, t) {
        if (11 == n.a || 10 == n.a) return t instanceof f ? t : this.a(n.i.prototype.j(), t);
        if (14 == n.a) {
            if ("string" == typeof t && X.test(t)) {
                var l = Number(t);
                if (0 < l) return l
            }
            return t
        }
        if (!n.h) return t;
        if (l = n.i, l === String) {
            if ("number" == typeof t) return String(t)
        } else if (l === Number && "string" == typeof t && ("Infinity" === t || "-Infinity" === t || "NaN" === t || X.test(t))) return Number(t);
        return t
    };
    var X = /^-?[0-9]+$/;
    t(S, $), S.prototype.a = function (n, t) {
        var l = new n.b;
        return l.g = this, l.a = t, l.b = {}, l
    }, t(w, S), w.prototype.b = function (n, t) {
        return 8 == n.a ? !!t : $.prototype.b.apply(this, arguments)
    }, w.prototype.a = function (n, t) {
        return w.M.a.call(this, n, t)
    };
    var nn = {
            84: ["VN"]
        },
        tn = {
            VN: [null, [null, null, "[12]\\d{9}|[135-9]\\d{8}|(?:[16]\\d?|[78])\\d{6}", null, null, null, null, null, null, [7, 8, 9, 10]],
                [null, null, "2(?:0[3-9]|1[0-689]|2[0-25-9]|3[2-9]|4[2-8]|5[124-9]|6[0-39]|7[0-7]|8[2-7]|9[0-4679])\\d{7}", null, null, null, "2101234567", null, null, [10]],
                [null, null, "(?:(?:3\\d|7[06-9])\\d|5(?:2[238]|[689]\\d)|8(?:[1-58]\\d|6[5689]|9[689])|9(?:[0-8]\\d|9[013-9]))\\d{6}", null, null, null, "912345678", null, null, [9]],
                [null, null, "1800\\d{4,6}", null, null, null, "1800123456", null, null, [8, 9, 10]],
                [null, null, "1900\\d{4,6}", null, null, null, "1900123456", null, null, [8, 9, 10]],
                [null, null, null, null, null, null, null, null, null, [-1]],
                [null, null, null, null, null, null, null, null, null, [-1]],
                [null, null, "(?:67|99)2\\d{6}", null, null, null, "992012345", null, null, [9]], "VN", 84, "00", "0", null, null, "0", null, null, null, [
                    [null, "(\\d{2})(\\d{5})", "$1 $2", ["80"], "0$1", null, 1],
                    [null, "(\\d{3})(\\d{4})", "$1 $2", ["[17]99"], "0$1", null, 1],
                    [null, "(\\d{3})(\\d{4,5})", "$1 $2", ["69"], "0$1", null, 1],
                    [null, "(\\d{4})(\\d{4,6})", "$1 $2", ["1"], null, null, 1],
                    [null, "(\\d{2})(\\d{3})(\\d{2})(\\d{2})", "$1 $2 $3 $4", ["[69]"], "0$1", null, 1],
                    [null, "(\\d{3})(\\d{3})(\\d{3})", "$1 $2 $3", ["[3578]"], "0$1", null, 1],
                    [null, "(\\d{2})(\\d{4})(\\d{4})", "$1 $2 $3", ["2[48]"], "0$1", null, 1],
                    [null, "(\\d{3})(\\d{4})(\\d{3})", "$1 $2 $3", ["2"], "0$1", null, 1]
                ],
                [
                    [null, "(\\d{2})(\\d{5})", "$1 $2", ["80"], "0$1", null, 1],
                    [null, "(\\d{4})(\\d{4,6})", "$1 $2", ["1"], null, null, 1],
                    [null, "(\\d{2})(\\d{3})(\\d{2})(\\d{2})", "$1 $2 $3 $4", ["[69]"], "0$1", null, 1],
                    [null, "(\\d{3})(\\d{3})(\\d{3})", "$1 $2 $3", ["[3578]"], "0$1", null, 1],
                    [null, "(\\d{2})(\\d{4})(\\d{4})", "$1 $2 $3", ["2[48]"], "0$1", null, 1],
                    [null, "(\\d{3})(\\d{4})(\\d{3})", "$1 $2 $3", ["2"], "0$1", null, 1]
                ],
                [null, null, null, null, null, null, null, null, null, [-1]], null, null, [null, null, "(?:[17]99|69\\d\\d?)\\d{4}", null, null, null, null, null, null, [7, 8]],
                [null, null, "(?:[17]99|69\\d\\d?|80\\d)\\d{4}", null, null, null, "1992000", null, null, [7, 8]], null, null, [null, null, null, null, null, null, null, null, null, [-1]]
            ]
        };
    x.b = function () {
        return x.a ? x.a : x.a = new x
    };
    var ln = {
            0: "0",
            1: "1",
            2: "2",
            3: "3",
            4: "4",
            5: "5",
            6: "6",
            7: "7",
            8: "8",
            9: "9",
            "ï¼": "0",
            "ï¼‘": "1",
            "ï¼’": "2",
            "ï¼“": "3",
            "ï¼”": "4",
            "ï¼•": "5",
            "ï¼–": "6",
            "ï¼—": "7",
            "ï¼˜": "8",
            "ï¼™": "9",
            "Ù ": "0",
            "Ù¡": "1",
            "Ù¢": "2",
            "Ù£": "3",
            "Ù¤": "4",
            "Ù¥": "5",
            "Ù¦": "6",
            "Ù§": "7",
            "Ù¨": "8",
            "Ù©": "9",
            "Û°": "0",
            "Û±": "1",
            "Û²": "2",
            "Û³": "3",
            "Û´": "4",
            "Ûµ": "5",
            "Û¶": "6",
            "Û·": "7",
            "Û¸": "8",
            "Û¹": "9"
        },
        en = RegExp("[+ï¼‹]+"),
        rn = RegExp("([0-9ï¼-ï¼™Ù -Ù©Û°-Û¹])"),
        un = /^\(?\$1\)?$/,
        an = new _;
    m(an, 11, "NA");
    var on = /\[([^\[\]])*\]/g,
        sn = /\d(?=[^,}][^,}])/g,
        fn = RegExp("^[-xâ€-â€•âˆ’ăƒ¼ï¼-ï¼ Â Â­â€‹â ă€€()ï¼ˆï¼‰ï¼»ï¼½.\\[\\]/~â“âˆ¼ï½]*(\\$\\d[-xâ€-â€•âˆ’ăƒ¼ï¼-ï¼ Â Â­â€‹â ă€€()ï¼ˆï¼‰ï¼»ï¼½.\\[\\]/~â“âˆ¼ï½]*)+$"),
        pn = /[- ]/;
    E.prototype.K = function () {
        this.C = "", e(this.i), e(this.u), e(this.m), this.s = 0, this.w = "", e(this.b), this.h = "", e(this.a), this.l = !0, this.A = this.o = this.F = !1, this.f = [], this.B = !1, this.g != this.J && (this.g = B(this, this.D))
    }, E.prototype.L = function (n) {
        return this.C = C(this, n)
    }, n("Cleave.AsYouTypeFormatter", E), n("Cleave.AsYouTypeFormatter.prototype.inputDigit", E.prototype.L), n("Cleave.AsYouTypeFormatter.prototype.clear", E.prototype.K)
}.call("object" == typeof global && global ? global : window);

if (typeof (tinyMCE) != "undefined") {
    tinymce.addI18n('vi_VN', {
        "Cut": "C\u1eaft",
        "Heading 5": "Ti\u00eau \u0111\u1ec1 5",
        "Header 2": "Ti\u00eau \u0111\u1ec1 2",
        "Your browser doesn't support direct access to the clipboard. Please use the Ctrl+X\/C\/V keyboard shortcuts instead.": "Tr\u00ecnh duy\u1ec7t c\u1ee7a b\u1ea1n kh\u00f4ng h\u1ed7 tr\u1ee3 truy c\u1eadp clipboard, vui l\u00f2ng s\u1eed d\u1ee5ng c\u00e1c t\u1ed5 h\u1ee3p Ctrl + X, C, V.",
        "Heading 4": "Ti\u00eau \u0111\u1ec1 4",
        "Div": "Khung",
        "Heading 2": "Ti\u00eau \u0111\u1ec1 2",
        "Paste": "D\u00e1n",
        "Close": "\u0110\u00f3ng",
        "Font Family": "Ph\u00f4ng",
        "Pre": "\u0110\u1ecbnh d\u1ea1ng",
        "Align right": "Canh ph\u1ea3i",
        "New document": "T\u1ea1o t\u00e0i li\u1ec7u m\u1edbi",
        "Blockquote": "Tr\u00edch",
        "Numbered list": "Danh s\u00e1ch s\u1ed1",
        "Heading 1": "Ti\u00eau \u0111\u1ec1 1",
        "Headings": "Ti\u00eau \u0111\u1ec1",
        "Increase indent": "L\u00f9i v\u00e0o",
        "Formats": "\u0110\u1ecbnh d\u1ea1ng",
        "Headers": "\u0110\u1ea7u trang",
        "Select all": "Ch\u1ecdn t\u1ea5t c\u1ea3",
        "Header 3": "Ti\u00eau \u0111\u1ec1 3",
        "Blocks": "Bao",
        "Undo": "Hu\u1ef7 thao t\u00e1c",
        "Strikethrough": "G\u1ea1ch ngang",
        "Bullet list": "D\u1ea5u \u0111\u1ea7u d\u00f2ng",
        "Header 1": "Ti\u00eau \u0111\u1ec1 1",
        "Superscript": "Tr\u00ean d\u00f2ng",
        "Clear formatting": "Xo\u00e1 \u0111\u1ecbnh d\u1ea1ng",
        "Font Sizes": "K\u00edch th\u01b0\u1edbc ph\u00f4ng",
        "Subscript": "D\u01b0\u1edbi d\u00f2ng",
        "Header 6": "Ti\u00eau \u0111\u1ec1 6",
        "Redo": "Ho\u00e0n t\u00e1t",
        "Paragraph": "\u0110o\u1ea1n v\u0103n",
        "Ok": "OK",
        "Bold": "T\u00f4 \u0111\u1eadm",
        "Code": "M\u00e3",
        "Italic": "In nghi\u00eang",
        "Align center": "Canh gi\u1eefa",
        "Header 5": "Ti\u00eau \u0111\u1ec1 5",
        "Heading 6": "Ti\u00eau \u0111\u1ec1 6",
        "Heading 3": "Ti\u00eau \u0111\u1ec1 3",
        "Decrease indent": "L\u00f9i ra",
        "Header 4": "Ti\u00eau \u0111\u1ec1 4",
        "Paste is now in plain text mode. Contents will now be pasted as plain text until you toggle this option off.": "D\u00e1n b\u00e2y gi\u1edd l\u00e0 \u1edf ch\u1ebf \u0111\u1ed9 v\u0103n b\u1ea3n \u0111\u01a1n gi\u1ea3n. N\u1ed9i dung s\u1ebd \u0111\u01b0\u1ee3c d\u00e1n nh\u01b0 \u0111\u1ed3ng b\u1eb1ng v\u0103n b\u1ea3n cho \u0111\u1ebfn khi b\u1ea1n chuy\u1ec3n \u0111\u1ed5i t\u00f9y ch\u1ecdn n\u00e0y.",
        "Underline": "G\u1ea1ch d\u01b0\u1edbi",
        "Cancel": "Hu\u1ef7",
        "Justify": "Canh \u0111\u1ec1u hai b\u00ean",
        "Inline": "C\u00f9ng d\u00f2ng",
        "Copy": "Ch\u00e9p",
        "Align left": "Canh tr\u00e1i",
        "Visual aids": "Hi\u1ec7n khung so\u1ea1n th\u1ea3o",
        "Lower Greek": "S\u1ed1 hy l\u1ea1p th\u01b0\u1eddng",
        "Square": "\u00d4 vu\u00f4ng",
        "Default": "Ng\u1ea7m \u0111\u1ecbnh",
        "Lower Alpha": "K\u00fd t\u1ef1 th\u01b0\u1eddng",
        "Circle": "H\u00ecnh tr\u00f2n",
        "Disc": "H\u00ecnh tr\u00f2n m\u1ecfng",
        "Upper Alpha": "K\u00fd t\u1ef1 hoa",
        "Upper Roman": "S\u1ed1 la m\u00e3 hoa",
        "Lower Roman": "S\u1ed1 la m\u00e3 th\u01b0\u1eddng",
        "Name": "T\u00ean",
        "Anchor": "Neo",
        "You have unsaved changes are you sure you want to navigate away?": "B\u1ea1n ch\u01b0a l\u01b0u c\u00e1c thay \u0111\u1ed5i, b\u1ea1n c\u00f3 th\u1eadt s\u1ef1 mu\u1ed1n \u0111\u00f3ng ?",
        "Restore last draft": "Ph\u1ee5c h\u1ed3i b\u1ea3n l\u01b0u g\u1ea7n nh\u1ea5t",
        "Special character": "K\u00fd t\u1ef1 \u0111\u1eb7c bi\u1ec7t",
        "Source code": "M\u00e3 ngu\u1ed3n",
        "B": "B",
        "R": "R",
        "G": "G",
        "Color": "M\u00e0u",
        "Right to left": "Ph\u1ea3i sang tr\u00e1i",
        "Left to right": "Tr\u00e1i sang ph\u1ea3i",
        "Emoticons": "Bi\u1ec3u t\u01b0\u1ee3ng c\u1ea3m x\u00fac",
        "Robots": "Robots",
        "Document properties": "Thu\u1ed9c t\u00ednh t\u00e0i li\u1ec7u",
        "Title": "Ti\u00eau \u0111\u1ec1",
        "Keywords": "T\u1eeb kho\u00e1",
        "Encoding": "M\u00e3 ho\u00e1",
        "Description": "Mi\u00eau t\u1ea3",
        "Author": "Neo",
        "Fullscreen": "\u0110\u1ea7y m\u00e0n h\u00ecnh",
        "Horizontal line": "G\u1ea1ch ngang",
        "Horizontal space": "Kho\u1ea3ng c\u00e1ch ngang",
        "Insert\/edit image": "Th\u00eam \/ s\u1eeda h\u00ecnh \u1ea3nh",
        "General": "T\u1ed5ng h\u1ee3p",
        "Advanced": "N\u00e2ng cao",
        "Source": "Ngu\u1ed3n",
        "Border": "\u0110\u01b0\u1eddng vi\u1ec1n",
        "Constrain proportions": "H\u1ea1n ch\u1ebf t\u1ef7 l\u1ec7",
        "Vertical space": "Kho\u1ea3ng c\u00e1ch d\u1ecdc",
        "Image description": "Mi\u00eau t\u1ea3 h\u00ecnh \u1ea3nh",
        "Style": "Ki\u1ec3u",
        "Dimensions": "K\u00edch th\u01b0\u1edbc",
        "Insert image": "Ch\u00e8n \u1ea3nh",
        "Zoom in": "Ph\u00f3ng to",
        "Contrast": "\u0110\u1ed9 t\u01b0\u01a1ng ph\u1ea3n",
        "Back": "Tr\u1edf l\u1ea1i",
        "Gamma": "Gamma",
        "Flip horizontally": "L\u1eadt ngang",
        "Resize": "Thay \u0111\u1ed5i k\u00edch th\u01b0\u1edbc",
        "Sharpen": "\u0110\u1ed9 s\u1eafc n\u00e9t",
        "Zoom out": "Thu nh\u1ecf",
        "Image options": "T\u00f9y ch\u1ecdn h\u00ecnh \u1ea3nh",
        "Apply": "\u00c1p d\u1ee5ng",
        "Brightness": "\u0110\u1ed9 s\u00e1ng",
        "Rotate clockwise": "Xoay theo chi\u1ec1u kim \u0111\u1ed3ng h\u1ed3",
        "Rotate counterclockwise": "Xoay ng\u01b0\u1ee3c chi\u1ec1u kim \u0111\u1ed3ng",
        "Edit image": "S\u1eeda \u1ea3nh",
        "Color levels": "M\u1ee9c \u0111\u1ed9 m\u00e0u s\u1eafc",
        "Crop": "X\u00e9n",
        "Orientation": "\u0110\u1ecbnh h\u01b0\u1edbng",
        "Flip vertically": "L\u1eadt d\u1ecdc",
        "Invert": "\u0110\u1ea3o ng\u01b0\u1ee3c",
        "Insert date\/time": "Th\u00eam ng\u00e0y \/ gi\u1edd",
        "Remove link": "Xo\u00e1 li\u00ean k\u1ebft",
        "Url": "Li\u00ean k\u1ebft",
        "Text to display": "Ch\u1eef hi\u1ec3n th\u1ecb",
        "Anchors": "Ghim",
        "Insert link": "Th\u00eam li\u00ean k\u1ebft",
        "New window": "C\u1eeda s\u1ed5 m\u1edbi",
        "None": "Kh\u00f4ng",
        "The URL you entered seems to be an external link. Do you want to add the required http:\/\/ prefix?": "URL b\u1ea1n nh\u1eadp v\u00e0o c\u00f3 v\u1ebb l\u00e0 m\u1ed9t li\u00ean k\u1ebft b\u00ean ngo\u00e0i. B\u1ea1n c\u00f3 mu\u1ed1n th\u00eam ti\u1ec1n t\u1ed1 http:\/\/ c\u1ea7n thi\u1ebft?",
        "Target": "M\u1ee5c ti\u00eau",
        "The URL you entered seems to be an email address. Do you want to add the required mailto: prefix?": "URL b\u1ea1n nh\u1eadp v\u00e0o c\u00f3 v\u1ebb l\u00e0 m\u1ed9t \u0111\u1ecba ch\u1ec9 email. B\u1ea1n c\u00f3 mu\u1ed1n th\u00eam c\u00e1c y\u00eau c\u1ea7u mailto: ti\u1ec1n t\u1ed1?",
        "Insert\/edit link": "Th\u00eam \/ s\u1eeda li\u00ean k\u1ebft",
        "Insert\/edit video": "Th\u00eam \/ s\u1eeda video",
        "Poster": "Ng\u01b0\u1eddi \u0111\u0103ng",
        "Alternative source": "Ngu\u1ed3n thay th\u1ebf",
        "Paste your embed code below:": "D\u00e1n m\u00e3 embed v\u00e0o:",
        "Insert video": "Th\u00eam video",
        "Embed": "Embed",
        "Nonbreaking space": "Kh\u00f4ng ng\u1eaft kho\u1ea3ng",
        "Page break": "Ng\u1eaft trang",
        "Paste as text": "D\u00e1n nh\u01b0 v\u0103n b\u1ea3n",
        "Preview": "Xem tr\u01b0\u1edbc",
        "Print": "In",
        "Save": "L\u01b0u",
        "Could not find the specified string.": "Kh\u00f4ng t\u00ecm th\u1ea5y chu\u1ed7i y\u00eau c\u1ea7u",
        "Replace": "Thay th\u1ebf",
        "Next": "Sau",
        "Whole words": "T\u1ea5t c\u1ea3 \u0111o\u1ea1n",
        "Find and replace": "T\u00ecm v\u00e0 thay th\u1ebf",
        "Replace with": "Thay th\u1ebf b\u1eb1ng",
        "Find": "T\u00ecm",
        "Replace all": "Thay th\u1ebf t\u1ea5t c\u1ea3",
        "Match case": "Ph\u00e2n bi\u1ec7t hoa th\u01b0\u1eddng",
        "Prev": "Tr\u01b0\u1edbc",
        "Spellcheck": "Ki\u1ec3m tra ch\u00ednh t\u1ea3",
        "Finish": "Ho\u00e0n t\u1ea5t",
        "Ignore all": "L\u1edd t\u1ea5t c\u1ea3",
        "Ignore": "L\u1edd qua",
        "Add to Dictionary": "Th\u00eam v\u00e0o t\u1eeb \u0111i\u1ec3n",
        "Insert row before": "Th\u00eam d\u00f2ng ph\u00eda tr\u00ean",
        "Rows": "D\u00f2ng",
        "Height": "Cao",
        "Paste row after": "D\u00e1n v\u00e0o ph\u00eda sau, d\u01b0\u1edbi",
        "Alignment": "Canh ch\u1ec9nh",
        "Border color": "M\u00e0u vi\u1ec1n",
        "Column group": "Nh\u00f3m c\u1ed9t",
        "Row": "D\u00f2ng",
        "Insert column before": "Th\u00eam c\u1ed9t b\u00ean tr\u00e1i",
        "Split cell": "Chia \u00f4",
        "Cell padding": "Kho\u1ea3ng c\u00e1ch trong \u00f4",
        "Cell spacing": "Kho\u1ea3ng c\u00e1ch \u00f4",
        "Row type": "Lo\u1ea1i d\u00f2ng",
        "Insert table": "Th\u00eam b\u1ea3ng",
        "Body": "N\u1ed9i dung",
        "Caption": "Ti\u00eau \u0111\u1ec1",
        "Footer": "Ch\u00e2n",
        "Delete row": "Xo\u00e1 d\u00f2ng",
        "Paste row before": "D\u00e1n v\u00e0o ph\u00eda tr\u01b0\u1edbc, tr\u00ean",
        "Scope": "Quy\u1ec1n",
        "Delete table": "Xo\u00e1 b\u1ea3ng",
        "H Align": "X\u1ebfp ngang",
        "Top": "\u0110\u1ec9nh",
        "Header cell": "Ti\u00eau \u0111\u1ec1 \u00f4",
        "Column": "C\u1ed9t",
        "Row group": "Nh\u00f3m d\u00f2ng",
        "Cell": "\u00d4",
        "Middle": "Gi\u1eefa",
        "Cell type": "Lo\u1ea1i \u00f4",
        "Copy row": "Ch\u00e9p d\u00f2ng",
        "Row properties": "Thu\u1ed9c t\u00ednh d\u00f2ng",
        "Table properties": "Thu\u1ed9c t\u00ednh b\u1ea3ng",
        "Bottom": "\u0110\u00e1y",
        "V Align": "X\u1ebfp d\u1ecdc",
        "Header": "Ti\u00eau \u0111\u1ec1",
        "Right": "Ph\u1ea3i",
        "Insert column after": "Th\u00eam c\u1ed9t b\u00ean ph\u1ea3i",
        "Cols": "C\u1ed9t",
        "Insert row after": "Th\u00eam d\u00f2ng ph\u00eda d\u01b0\u1edbi",
        "Width": "R\u1ed9ng",
        "Cell properties": "Thu\u1ed9c t\u00ednh \u00f4",
        "Left": "Tr\u00e1i",
        "Cut row": "C\u1eaft d\u00f2ng",
        "Delete column": "Xo\u00e1 c\u1ed9t",
        "Center": "Gi\u1eefa",
        "Merge cells": "N\u1ed1i \u00f4",
        "Insert template": "Th\u00eam m\u1eabu",
        "Templates": "M\u1eabu",
        "Background color": "M\u00e0u n\u1ec1n",
        "Custom...": "T\u00f9y ch\u1ecdn...",
        "Custom color": "M\u00e0u t\u00f9y ch\u1ecdn",
        "No color": "Kh\u00f4ng m\u00e1u",
        "Text color": "M\u00e0u ch\u1eef",
        "Show blocks": "Hi\u1ec3n th\u1ecb kh\u1ed1i",
        "Show invisible characters": "Hi\u1ec3n th\u1ecb c\u00e1c k\u00fd t\u1ef1 \u1ea9n",
        "Words: {0}": "T\u1eeb: {0}",
        "Insert": "Th\u00eam",
        "File": "T\u1eadp tin",
        "Edit": "S\u1eeda",
        "Rich Text Area. Press ALT-F9 for menu. Press ALT-F10 for toolbar. Press ALT-0 for help": "Khu v\u1ef1c so\u1ea1n th\u1ea3o. Nh\u1ea5n ALT-F9 \u0111\u1ec3 hi\u1ec7n menu, ALT-F10 \u0111\u1ec3 hi\u1ec7n thanh c\u00f4ng c\u1ee5. C\u1ea7n tr\u1ee3 gi\u00fap nh\u1ea5n ALT-0",
        "Tools": "C\u00f4ng c\u1ee5",
        "View": "Xem",
        "Table": "B\u1ea3ng",
        "Format": "\u0110\u1ecbnh d\u1ea1ng"
    });
}