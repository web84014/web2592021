(function(t) {

        for (var s, o, r = e[0], l = e[1], c = e[2], m = 0, u = []; m < r.length; m++) o = r[m], Object.prototype.hasOwnProperty.call(a, o) && a[o] && u.push(a[o][0]), a[o] = 0;
        for (s in l) Object.prototype.hasOwnProperty.call(l, s) && (t[s] = l[s]);
        p && p(e);
        while (u.length) u.shift()();
        return n.push.apply(n, c || []), i()
    }

    function i() {
        for (var t, e = 0; e < n.length; e++) {
            for (var i = n[e], s = !0, r = 1; r < i.length; r++) {
                var l = i[r];
                0 !== a[l] && (s = !1)
            }
            s && (n.splice(e--, 1), t = o(o.s = i[0]))
        }
        return t
    }
    var s = {},
        a = {
            wizard: 0
        },
        n = [];

    function o(e) {
        if (s[e]) return s[e].exports;
        var i = s[e] = {
            i: e,
            l: !1,
            exports: {}
        };
        return t[e].call(i.exports, i, i.exports, o), i.l = !0, i.exports
    }
    o.m = t, o.c = s, o.d = function(t, e, i) {
        o.o(t, e) || Object.defineProperty(t, e, {
            enumerable: !0,
            get: i
        })
    }, o.r = function(t) {
        "undefined" !== typeof Symbol && Symbol.toStringTag && Object.defineProperty(t, Symbol.toStringTag, {
            value: "Module"
        }), Object.defineProperty(t, "__esModule", {
            value: !0
        })
    }, o.t = function(t, e) {
        if (1 & e && (t = o(t)), 8 & e) return t;
        if (4 & e && "object" === typeof t && t && t.__esModule) return t;
        var i = Object.create(null);
        if (o.r(i), Object.defineProperty(i, "default", {
                enumerable: !0,
                value: t
            }), 2 & e && "string" != typeof t)
            for (var s in t) o.d(i, s, function(e) {
                return t[e]
            }.bind(null, s));
        return i
    }, o.n = function(t) {
        var e = t && t.__esModule ? function() {
            return t["default"]
        } : function() {
            return t
        };
        return o.d(e, "a", e), e
    }, o.o = function(t, e) {
        return Object.prototype.hasOwnProperty.call(t, e)
    }, o.p = "http://localhost:8080/";
    var r = window["mo2fjsonp"] = window["mo2fjsonp"] || [],
        l = r.push.bind(r);
    r.push = e, r = r.slice();
    for (var c = 0; c < r.length; c++) e(r[c]);
    var p = l;
    n.push([0, "chunk-vendors"]), i()
})({
    0: function(t, e, i) {
        t.exports = i("9f7c")
    },
    "107e": function(t, e, i) {
        t.exports = i.p + "img/long-arrow-alt-right-regular.svg"
    },
    1532: function(t, e) {
        t.exports = "data:image/png;base64,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"
    },
    "1f7f": function(t, e, i) {
        "use strict";
        i("e8f2")
    },
    "1fa5": function(t, e, i) {
        t.exports = i.p + "img/long-arrow-alt-left-regular.svg"
    },
    "29b8": function(t, e) {
        t.exports = "data:image/png;base64,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"
    },
    "2adc": function(t, e) {
        t.exports = "data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAACAAAAAgCAYAAABzenr0AAAAAXNSR0IArs4c6QAAADhlWElmTU0AKgAAAAgAAYdpAAQAAAABAAAAGgAAAAAAAqACAAQAAAABAAAAIKADAAQAAAABAAAAIAAAAACPTkDJAAADyklEQVRYCbVXa0hTURz/nW0+Ssc0zdIQDR+RFoGGFFkolYkUZCJYIfSgiB4U1Kc+mN8qUnp8KAjC3g+KRZRlKZSlZUGZZaa23maumWXTzW262zkrL9vuPdPpdi6Xc87/8fv/7rn3f87/EvxrJPFwVgEBWQQiBPyX+aUjEOxDdvLsfavxIk4+txEWJelI1iUavMgvETmggiDUBvYackhSedZyoiQ3OXZ+FdsFYbuCKJDp1ygewOnyz1cIBEEebESVJkgtjn01IARKlRyYSqFCalQS0qJnIS2G3tGpiJgYjr01h6BtqZJzGbNMQkBJ38nt4grEhU2TgG6euxrXW+5CoJevmsIdKFgVLBuc2U0Pj0Vm3Fx3l3HNJQTMg2bYBTsXtHhOPlc3FoWEAE0NdPf3cLEWxmcgTiN9PVyHERQSAsz+46+vXDeWt/kpy7h6bxWyBF7r27k4A4MWPPvWxNV7q5Al8LSjURany2jA2qs78fjLc1n9WISSNGQgDZSA0dIHdVCoiPnu5yes1+6BwcT/PkRjLwayK2AdsqGy7b4LTPgEDfptZheZLyayBBjwuSatSzpG0p1wa0axL2K6YHAJ6Ho+4057rYvxhrRCpMfMdpGNd8IlwIDL6k/CbBsQYygVShzL24dp6imibLwDjwQ6jXoHCecgkSGTcKagHDEcEjMnJ2JTehGi1VHObtyxMiI3PpdWQ/N4Fq/0rUiOmI7EiDjRRBOsRl5SNhq/v0FXn0GUs5W5UHgUixMWgG3ZMyIT0E2zhj0IpzWPSIA5Pvj4BPNj0zBVPVnECQmcSHfEHATQE72pq4X2AajIL0OsJsZhw3ZMRnpVSi6WJmTCZDWj7ecH0f//oJnQevAwXYFd7hr3OdsTTq08iDlTZ7qrwDaob/Qp02nt4KktrliDjj9dTibCZY/fgJOlY2Nap92Nal2ds9gxZiszUnDLoBX6vm6J76gJME8TzYgdlSXY//A42JngTXutb4PNPihx8YoA82a10OnGa1hxfiNq3teBltcSUDnBi+/NcmJ4TWAY5UtvJ7bdKkHB5S248fYeBmyeV+RFpzyBUWXBcFC53kCLl2q6EmdfavH2hw69FiMILXdDaZawzGDtz4ARBx6dgGXI6g7RLHsauluNZm6iB1WVrtZxD9urA0MQGhTi+ID7rKZhsUuvIgIscPyguch9MjFa+8FuXqP/JEMKWgPW8wz8LbcLaGDPTpKPZF+hfaG/Azrj0+ypE5QdS/4tfikUyWFZhTSjsunrGNWvmjOYN2MBxEaT+anut+EcSt9Y/wKYPTFLjUA+DAAAAABJRU5ErkJggg=="
    },
    "2bc2": function(t, e, i) {
        t.exports = i.p + "img/zoho.svg"
    },
    "2cf42": function(t, e) {
        t.exports = "data:image/png;base64,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"
    },
    "2db4": function(t, e, i) {
        t.exports = i.p + "img/outlook.svg"
    },
    "31f1": function(t, e, i) {
        var s = {
            "./googleAuthenticator.svg": "7de8",
            "./AuthyAuthenticator.svg": "ddc9",
            "./OTPOverSMS.svg": "776b",
            "./OTPOverEmail.svg": "2db4",
            "./KBA.svg": "b1c2",
            "./DuoPush.svg": "7f3e",
            "./OTPOverTelegram.svg": "5f30",
        };

        function a(t) {
            var e = n(t);
            return i(e)
        }

        function n(t) {
            if (!i.o(s, t)) {
                var e = new Error("Cannot find module '" + t + "'");
                throw e.code = "MODULE_NOT_FOUND", e
            }
            return s[t]
        }
        a.keys = function() {
            return Object.keys(s)
        }, a.resolve = n, t.exports = a, a.id = "31f1"
    },
    "3af1": function(t, e, i) {
        t.exports = i.p + "img/check-solid.svg"
    },
    "3dce": function(t, e, i) {
        t.exports = i.p + "img/loading-white.svg"
    },
    "4bd8": function(t, e, i) {
        t.exports = i.p + "img/logo.svg"
    },
    "4e2d": function(t, e, i) {
        t.exports = i.p + "img/times-solid.svg"
    },
    "50bf": function(t, e, i) {
        t.exports = i.p + "img/arrow.svg"
    },
    5711: function(t, e, i) {
        var s = {
            "./loading-blue.svg": "8e56",
            "./loading-white.svg": "3dce",
            "./loading.svg": "8e57"
        };

        function a(t) {
            var e = n(t);
            return i(e)
        }

        function n(t) {
            if (!i.o(s, t)) {
                var e = new Error("Cannot find module '" + t + "'");
                throw e.code = "MODULE_NOT_FOUND", e
            }
            return s[t]
        }
        a.keys = function() {
            return Object.keys(s)
        }, a.resolve = n, t.exports = a, a.id = "5711"
    },
    "5f30": function(t, e, i) {
        t.exports = i.p + "img/smtp.svg"
    },
    "6f43": function(t, e, i) {
        t.exports = i.p + "img/star-solid.svg"
    },
    "776b": function(t, e, i) {
        t.exports = i.p + "img/mailgun.svg"
    },
    "78cb": function(t, e, i) {
        t.exports = i.p + "img/smtpcom.svg"
    },
    "7c9b": function(t, e, i) {
        var s = {
            "./all-in-one-seo-pack@2x.png": "2cf42",
            "./coming-soon@2x.png": "9f86",
            "./google-analytics-for-wordpress@2x.png": "82f2",
            "./instagram-feed@2x.png": "877f",
            "./rafflepress@2x.png": "a1c2",
            "./wp-call-button@2x.png": "1532"
        };

        function a(t) {
            var e = n(t);
            return i(e)
        }

        function n(t) {
            if (!i.o(s, t)) {
                var e = new Error("Cannot find module '" + t + "'");
                throw e.code = "MODULE_NOT_FOUND", e
            }
            return s[t]
        }
        a.keys = function() {
            return Object.keys(s)
        }, a.resolve = n, t.exports = a, a.id = "7c9b"
    },
    "7de8": function(t, e, i) {
        t.exports = i.p + "img/amazonses.svg"
    },
    "7f3e": function(t, e, i) {
        t.exports = i.p + "img/sendinblue.svg"
    },
    "827a": function(t, e, i) {
        t.exports = i.p + "img/exclamation-circle-solid.svg"
    },
    "82f2": function(t, e, i) {
        t.exports = i.p + "img/google-analytics-for-wordpress@2x.png"
    },
    8398: function(t, e, i) {
        t.exports = i.p + "img/working.svg"
    },
    8475: function(t, e, i) {
        t.exports = i.p + "img/question-circle-solid.svg"
    },
    "84d7": function(t, e, i) {
        t.exports = i.p + "img/info-circle-solid.svg"
    },
    "877f": function(t, e, i) {
        t.exports = i.p + "img/instagram-feed@2x.png"
    },
    "87eb": function(t, e, i) {
        t.exports = i.p + "img/pro-badge.svg"
    },
    8888: function(t, e, i) {
        t.exports = i.p + "img/post-smtp-mailer.png"
    },
    "8cbb": function(t, e, i) {
        "use strict";
        i("da18")
    },
    "8d41": function(t, e) {
        t.exports = "data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAAEAAAABACAYAAACqaXHeAAAAAXNSR0IArs4c6QAAADhlWElmTU0AKgAAAAgAAYdpAAQAAAABAAAAGgAAAAAAAqACAAQAAAABAAAAQKADAAQAAAABAAAAQAAAAABlmWCKAAAJsUlEQVR4AeVbC3ATxxn+93SS/JAtY8DYGDuAbd4QQoEkTRlCmzakEyYhAxRCYAjT6QBJWxIIr5Kp2yktj5KQJiSUPGoKmNSTQEmaZ6e0CQwpBUJJKClYro2NH2DLtmTJ1kl3u/1XVKqEJetOPoFtdjRze//++z++2+e/KwKJToyR775emS8BGU3AMJgwmssI5DEGOW6JWRrbFQUIOAXGGhjAZUJYvcxIreD1fFWxcdxlAILkxCWSCNH3/bbCKpqMIwhlj/ooXUaIkBRJj0ui0NSuRCry0ygDD2ZeAgXeJBIrtxUXOaMyx1mgKwAryq5aqpwd+3wAD6mxJxYAnWQo5O3yWroQXiySOpXFSdAFgMWlVyY0tLlKqcEwggAxqrVFMwB+wcwHlH3FDGSBbXXRebW6ovF1C4AFpXWjmju8zykMZqLjmmXFB8A1VxgQCgzeYwp7umJ9oS2ag7Homo3mAsvKmGGPs2q1F0gxDlIR+3csxby8OwAE5ONg2g7ANtrWFD0foGl5agZg4b7LQ5ol5YjMoEiLoki8egAQlEvhgtckzrj01ND6IE1FRlDBE2SZu79+6lWPUqOH80GhemUEGGmS5bqhWy9O1CJSNQCz99QubW2XPtUi/GbwisRwvHBb+WNqdasCYFZJ9WqXT34FxzmzWsE3i48AS8Z+/VrBVtsP1dgQEwD+5SWZbUJhJjUCewYPMQsEthVuLp8Xy54uB8H5B2rutLuUTxL15XUdBCN6ynxeGe68tL7oTMRiJEZtAY//sTbP7qZ/T5Tz0QzSl06MJpGdGrq1Mjua3IgA/JUxscEu/yVapd5FFwQRlHej2RwRgB046PXIqS6aFzHouEadXLi54ulIbJ3GgMfL6sdcdkqnu7PCi6QoEi3xY0CYVieVYFzFxsKaUGqnFnClTdp+I5wPNeIG5dOFJPby9brCAHji7bpJXgb3X8/UV94pJQ8UbLflhfoTBoCtqWNvPLu6UIE9OY9rAwPI8FGojUEA9n/R2k8xGLq9wQkV3hPzGHIryCwuTw/YJgYyb55y7NESzOD15o5LhUGWoIiAqOue0UN6Pox5dWCf60666lJg10n1kTJCiCkjhf2yGeBJrtc/Cyw51JJRa3e2aDUkK9UAC263wN15SXGEQwADOwzwF3c6fskDO084oLJF1iiD0Va31dpYnOXyd4F2t3OsRgkwor8RUowEXjjugJ8daYb6Nhmd6YY3Kg3gOriudR/ZYfWHdj+AE7K1blOIkJHa6vfZD4DChPkq9QfZ+JffMrM//GBKGtjsPlj5nh3+8KUbfBgfS1SSUfZb59wwp/QKfFbtgeVT06H0e4Ng5det2lUy8du8ksCXvQ6P8n3tEq7V+ObwFHjloYFwV54ZDp13w7LDjXDyMo9m65v+WS/B7P0N8Dy2uCm5Zji4MBsem2jxK+m0mlOhmhK6nLOJew9W5+PAEHdcj4dC08wCPHVPBlxo9MKrJ9tg+zEHjMnqgGVT0yAr5iDZtbUtHQps/qQVjuMXH4hjzm8eHACTBptA0B6DDVOETX/woG22LNHuZqP+NxaGMcTzMnKgCX51fyZ8eLEdDmJr+DF2iwdHpsDDY1Ih1RSccVWJ9uBmpOxLF5R87sR+TmDxHWn+L55s1CanK2WpVBkvMhDyMaraFZ+mMqOBwKzRqTBtaBLs+ocT/nShHY5WdcDSyenwtcFmMOBqpKuEMyN8XuuBX2MrqnbIcEeOCTZMz4Bcq7GranGVEcEwXBQFyI2rdoxKGckGWDe9H5Q3eWEH9lveLQoyRVgzLQOsSQJOm52BcHgobPpbMxy7JEG/ZAG2zcyEe25LjqEp/mI8ussVgcKQ+EXErlk0wAQvYL/9AFvCvrMuWPFOE3yrIBmWTEoLrh34Vy892wavnXKCF48K5+ECa8VdVjBha0pkwo+QI8oUokZL9FIuYrPn3WIqLph+f6YNPrZ1wOk6CeaPt0CySGDL0RaocSgwfpDJ30KGZxqD4OhlQyQ5uAzLFnE1FlwXR2LSkzbIYoBV37DC6VoJgXCh461gdyuQjl1i470Z8J3CFBAT/NVD/cGlvxUX8nxUpaH0hOb59DVlSBJMzDHDHhzh69sU+NHd6WAxGxKqN5JwbAEUx0DWFqkw0TQ+W/CZ4QasnqO7QkijIAjQEJ2jj5fwmyiCQQiLkfVxl8PdI3BFkH20Npx667zhGNAsEAOpvnVcDvcUL1lUCv1TTf8OJ986b5LPe0ZY9EgWbwG6XTrqLfDh7FNdu2G0XZhBiJxmJm/0FsP1s5OVcFn+vWWyybBfP8G9RBKDD4IAMFnWfN3Mi/v1npLafdpswXWvYrZYz3H7g9utWW/UvO+h9AG1TvEt7dxxFty2chFBMWqr+/l4jE/C3Vi8ibvd3E5hN+4iWzrUy2GUPGdbW7CK6w1azg9GSk44riIlVqA/Xns71bvBh6N+/Qiax+GWBjYWj3Vxgn8M4JmFEzJaQKAXeb4vJ6KwswHnuZ9BAPjLMGvyUoy7a+tQvGJvSdjjfB7vw6HmhgGwe072CVEkfw5l6Et5jH0crioeG7b5CwOAO5trNePgwPQP7N90JFkzUa6dB4aa0gmA1x/JPpdigl+EMvWFvEKFZ20bihqv96UTAJxhZd5tWzBecel65t76jk3/yH/WFnS6HcL9iQjAjBlEzk4x3dtbHQ63m3ncMswPp/3/LSIAvLhkQU7VgBTjNMz23o0SAy9TYHJDhKYfgCAqAJzhwKODj1lEtgpXS95Ahd7yxLm8gxE2z7au6F9d2dwlALzioSVDd+LF25/jzIB/Beodye88oyttzxQdjmVxTAC4gHeX5m9KFcmTeISo9SpGLP2JKPcSmS6qWDNitxrhwb2AGuY5e6unOST2qRpeNTz67wUo3o0Wp1Q+M/wLNfo5j6oWEBD21qL8oxkmNhzP1MoDtJ7yxADnZ7JRzNfiPLddUwsIOMv/NFXirnrWR4U12C3iPr7VowWg406gwk9xe7sjYJ+WZ1wABBTM3Vc/ptUj7cTT3el45KVZVrcAYIyHZN6XmLK8Zu2ouoBNWp+ajY6kYHFpzYS6dvkdwoRcLfGEuABgzIsb1osyNc6qWj+sKpI9Wmi6AOBXiPdYFhyozGqVxF0Y6QnbckYzSAsAlBEFzzFfbmmSf9K0dZRu55n6ARDi5dyymkxnm3I7Hj/PphSW4hWf1JDiYDYWADx0zYC+imv5j10W+XzjE9eiOEEBOmQSAkCYXdgy7vtd9TCBkgkKY/kKIwPxH+U5isKyPApLc3soRgZxqwqkgRFSiyfWjVilEiM35yLt3sJk6/DyX5qvt56zCsMvAAAAAElFTkSuQmCC"
    },
    "8e56": function(t, e, i) {
        t.exports = i.p + "img/loading-blue.svg"
    },
    "8e57": function(t, e, i) {
        t.exports = i.p + "img/loading.svg"
    },
    "9a1d": function(t, e, i) {
        t.exports = i.p + "img/check-circle-solid.svg"
    },
    "9da7": function(t, e) {
        t.exports = "data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAACAAAAAgCAYAAABzenr0AAAACXBIWXMAAA7DAAAOwwHHb6hkAAAAGXRFWHRTb2Z0d2FyZQB3d3cuaW5rc2NhcGUub3Jnm+48GgAABKdJREFUWIWtl11sFFUUx39ndqf0C0EhiKVluy01ARuoxMRo1CBBIqKRqNV2C4Sg8cGowQcViUFtFOmDCSYaE9SEqN0tluiDIRBBosYHQlBDowbSwu62fNTKh/JRSnd3jg9TdruzMzsN8H+79/zP+f/vzZ17zwgTRfNAGSWZh1FZCtoI3A6YwBRgECGBcghhD6R+oLPh/ETKii9j9dHZpAPrgVVA5QTtXgS2kTG2sH320Wsz0PxnCWZ5O8grQMkEhZ24gmgHZ9Ob2NVwZeIGVg7Mwcp8Ddx5jcJO9GClH6VrzoC/gdbkHRi6F2XmDRK/ipOotYxYXc/4SSOPsioRRvRHT3HlBOiHwBGXaA8q7wP9HgaqEGMXLX017gbWxEvJsAOY7lGgn3SggWh4HYb1ODAyLnaJACuIhTZQWTIXYdDbRPA7lvVOKjSQMt4CFnok2tzumssAfFV3BGUxIq+jvAbWYr6sjQOwtWoYJehZRVjAzcE3ckOASLIO9C9gklceoJRoOdvCI0U40NZ7E2r+V5QDV0DmEQ0ds3dAdb2POKhs9hUH6Gw4j8hmH9YkRNcBCKsGK8iMnAImOxR7QXqBeajEiIU2+IqPR1viXZSngB6ERpS5DsYFSkdmCa3JpxHd7ghmwKonWpd0L368mlEdprvmLGAf4FGrhmh9ryu/JV6LIX1AwLHIFQaG3ueS8runOICmOzDTL2fHo8ZjENjhye8KJ4CegnmRpQYqd7ukNNGWWOtZEEwQM1dITQTTnapCJPEisKAwxIIgaJVLVhDlc1qT1cRC7dnZRRqkKnk/yK2IpokklwBg0YhoBZHkElJl++mecTGbE0m2A296LCQUBKZ5rlM0/y2ojtdjGftAQQG01eZll7QHc/hJ4JtxWY2e9WGaQcHBuE6o431R26oHUgbg1Tgowt58ejDtayBgpPLGhuwCLA/2ZQPkmFsA1UforP04b3bKUD+QcuHnoNqXN+4MfYrqYuwmxQE5YqB6qLAIR4mFdxfMb70rBXQXkf+VhtmHC2Zj4Z9QCjsj0T8MRPcVBmgkEm9ylbCMV4FCERgCfY63Jbfda+KlAETiTQjzCzJUvxfWHp7MSOkgUO4InwZOAnMR/ZaKMyvHdgCaB27BtF4C3YD9DXxEMLOFL+rtXuD5gyYXpkcRngD6gBnAVEf9i6QCM8Zew8RnwLOuK86hi2goApI71W2JUygW0dpZecxIIga0+NT7hGjtC2P9QKYDv8MFLbT1Tfbh2O07POPDGkGCm+BqQxKt70XY4pN0Mq/Xbx4oQ5kCTB0TtWE3LfGilYQP6Kw+njMAYOpGYH+RtFJa+u1ru3mokmCmEygDyjGtGGsP27tjc4rt1EEqTr+T8zIeKxO3YXEAqPZIHgZ2Y7frYUesH/vFewiv5kY5gcgDREPZu8elLT82HzF2FjFxrfgb1UXEwnmfsFFAi9X1kEotBPn5Bor/RoB7nOLuBgC6G/7h3OhSRNuBS9chfBnhPc6l7s12zQ74/5w2x2diykZgNVAxQeF/EaIEMh3Zy8kD/gayRoYqKbm0HIwHQZtQwti3WxrkDOhx0AOI8Qujxs7sP4QP/gdLfYuNd8XCxgAAAABJRU5ErkJggg=="
    },
    "9f7c": function(t, e, i) {
        "use strict";
        i.r(e);
        i("e260"), i("e6cf"), i("cca6"), i("a79d");
        var s = function() {
                var t = this,
                    e = t.$createElement,
                    s = t._self._c || e;
                return s("div", {
                    staticClass: "mo2f-setup-admin-page"
                }, [s("router-view"), t.blocked ? s("div", {
                    staticClass: "mo2f-setup-blocked"
                }) : t.loading ? s("div", {
                    staticClass: "mo2f-setup-loading"
                }, [s("inline-svg", {
                    staticClass: "icon",
                    attrs: {
                        src: i("c869"),
                        width: "195"
                    }
                })], 1) : t._e()], 1)
            },
            a = [],
            n = i("5530"),
            o = i("8c4f"),
            r = function() {
                var t = this,
                    e = t.$createElement,
                    s = t._self._c || e;
                return s("div", {
                    staticClass: "mo2f-setup-welcome"
                }, [s("the-wizard-header"), s("div", {
                    staticClass: "mo2f-setup-setup-wizard-container"
                }, [s("main", {
                    staticClass: "mo2f-setup-setup-wizard-content"
                }, [s("div", {
                    staticClass: "mo2f-setup-setup-wizard-content-container"
                }, [s("content-header", {
                    attrs: {
                        title: t.text_header_title,
                        subtitle: t.text_header_subtitle
                    }
                }), s("button", {
                    staticClass: "mo2f-setup-button mo2f-setup-button-main mo2f-setup-button-large",
                    attrs: {
                        type: "button"
                    },
                    on: {
                        click: function(e) {
                            return e.preventDefault(), t.nextStep(e)
                        }
                    }
                }, [s("span", {
                    staticClass: "text-with-arrow text-with-arrow-right"
                }, [t._v(" " + t._s(t.text_button) + " "), s("inline-svg", {
                    staticClass: "icon",
                    attrs: {
                        src: i("107e"),
                        width: "16",
                        height: "22"
                    }
                })], 1)])], 1)]), s("footer", [s("p", {
                    staticClass: "mo2f-setup-exit-link"
                }, [s("a", {
                    attrs: {
                        href: t.exit_href
                    }
                }, [t._v(t._s(t.text_exit_link))])])])])], 1)
            },
            l = [],
            c = (i("cc99"), i("561c")),
            p = function() {
                var t = this,
                    e = t.$createElement,
                    i = t._self._c || e;
                return i("div", {
                    staticClass: "mo2f-setup-content-header"
                }, [i("h2", {
                    domProps: {
                        innerHTML: t._s(t.title)
                    }
                }), t.subtitle ? i("p", {
                    staticClass: "subtitle",
                    domProps: {
                        innerHTML: t._s(t.subtitle)
                    }
                }) : t._e()])
            },
            m = [],
            u = {
                name: "ContentHeader",
                props: {
                    title: String,
                    subtitle: String
                }
            },
            d = u,
            _ = i("2877"),
            f = Object(_["a"])(d, p, m, !1, null, null, null),
            h = f.exports,
            g = function() {
                var t = this,
                    e = t.$createElement,
                    s = t._self._c || e;
                return s("header", {
                    staticClass: "mo2f-setup-wizard-header"
                }, [s("h1", {
                    staticClass: "mo2f-setup-setup-wizard-logo"
                }, [s("div", {
                    staticClass: "mo2f-setup-logo"
                }, [s("img", {
                    staticClass: "mo2f-setup-logo-img",
                    attrs: {
                        src: i("4bd8"),
                        alt: t.text_logo_alt
                    }
                })])])])
            },
            w = [],
            b = {
                name: "TheWizardHeader",
                data: function() {
                    return {
                        text_logo_alt: Object(c["a"])("miniOrange 2-Factor Authentication LOGO", "mo2f-setup")
                    }
                }
            },
            A = b,
            v = Object(_["a"])(A, g, w, !1, null, null, null),
            x = v.exports,
            y = {
                name: "SetupWizardWelcome",
                components: {
                    ContentHeader: h,
                    TheWizardHeader: x
                },
                data: function() {
                    return {
                        text_header_title: Object(c["a"])("Welcome to the 2FA Setup Wizard!", "mo2f-setup"),
                        text_header_subtitle: Object(c["a"])("This setup guide will take you through all the steps you need to follow to enable the two-factor authentication for your website.", "mo2f-setup"),
                        text_button: Object(c["a"])("Let's Get Started", "mo2f-setup"),
                        text_exit_link: Object(c["a"])("Go back to the Dashboard", "mo2f-setup"),
                        exit_href: this.$wpms.exit_url
                    }
                },
                methods: {
                    nextStep: function() {
                        this.$router.push({
                            name: this.$wizard_steps[0]
                        })
                    }
                }
            },
            C = y,
            k = Object(_["a"])(C, r, l, !1, null, null, null),
            O = k.exports,
            j = function() {
                var t = this,
                    e = t.$createElement,
                    i = t._self._c || e;
                return i("div", {
                    staticClass: "mo2f-setup-step"
                }, [i("the-wizard-header"), i("the-wizard-timeline"), i("div", {
                    staticClass: "mo2f-setup-setup-wizard-container"
                }, [i("main", {
                    staticClass: "mo2f-setup-setup-wizard-content"
                }, [i("router-view", {
                    on: {
                        displayContentBelow: t.displayContentBelow
                    }
                })], 1), i("footer", [t.content_below.length > 0 ? i("div", {
                    staticClass: "mo2f-setup-step-below-content",
                    domProps: {
                        innerHTML: t._s(t.content_below)
                    }
                }) : t._e(), t.display_exit_link ? i("p", {
                    staticClass: "mo2f-setup-exit-link"
                }, [i("a", {
                    attrs: {
                        href: t.exit_href
                    }
                }, [t._v(t._s(t.text_exit_link))])]) : t._e()])])], 1)
            },
            S = [],
            P = (i("caad"), i("b0c0"), i("d3b7"), i("2532"), i("3ca3"), i("ddb0"), function() {
                var t = this,
                    e = t.$createElement,
                    s = t._self._c || e;
                return s("div", {
                    staticClass: "mo2f-setup-setup-wizard-container"
                }, [s("div", {
                    staticClass: "mo2f-setup-setup-wizard-timeline"
                }, [t._l(t.steps, (function(e, a) {
                    return [a > 0 ? s("div", {
                        key: a + "line",
                        class: t.lineClass(a)
                    }) : t._e(), s("div", {
                        key: a,
                        class: t.stepClass(a)
                    }, [s("inline-svg", {
                        staticClass: "icon icon-success",
                        attrs: {
                            src: i("3af1"),
                            width: "10",
                            height: "10"
                        }
                    }), s("inline-svg", {
                        staticClass: "icon icon-failed",
                        attrs: {
                            src: i("4e2d"),
                            width: "8",
                            height: "11"
                        }
                    })], 1)]
                }))], 2)])
            }),
            E = [],
            T = (i("c740"), {
                name: "TheWizardTimeline",
                data: function() {
                    return {
                        steps: this.$wizard_steps
                    }
                },
                methods: {
                    stepClass: function(t) {
                        var e = this,
                            i = "mo2f-setup-setup-wizard-timeline-step",
                            s = this.steps.findIndex((function(t) {
                                return e.$route.name.includes(t)
                            }));
                        return (t < s || parseInt(s) === this.steps.length - 1 && this.$route.name.includes("_success")) && (i += " mo2f-setup-setup-wizard-timeline-step-completed"), t === s && parseInt(s) === this.steps.length - 1 && this.$route.name.includes("_failure") && (i += " mo2f-setup-setup-wizard-timeline-step-failed"), parseInt(t) === parseInt(s) && (i += " mo2f-setup-setup-wizard-timeline-step-active"), i
                    },
                    lineClass: function(t) {
                        var e = this,
                            i = "mo2f-setup-setup-wizard-timeline-step-line",
                            s = this.steps.findIndex((function(t) {
                                return e.$route.name.includes(t)
                            }));
                        return t <= s && (i += " mo2f-setup-setup-wizard-timeline-line-active"), i
                    }
                }
            }),
            z = T,
            B = Object(_["a"])(z, P, E, !1, null, null, null),
            I = B.exports,
            M = {
                name: "SetupWizardSteps",
                components: {
                    TheWizardHeader: x,
                    TheWizardTimeline: I
                },
                data: function() {
                    return {
                        text_exit_link: Object(c["a"])("Close and exit the Setup Wizard", "mo2f-setup"),
                        exit_href: this.$wpms.exit_url,
                        content_below: ""
                    }
                },
                computed: {
                    display_exit_link: function() {
                        return !this.$route.name.includes("check_configuration_step")
                    }
                },
                methods: {
                    displayContentBelow: function(t) {
                        this.content_below = t
                    }
                },
                mounted: function() {
                    var t = this;
                    this.$store.dispatch("$_app/start_loading"), Promise.all([this.$store.dispatch("$_settings/getSettings"), this.$store.dispatch("$_plugins/getPlugins")]).finally((function() {
                        t.$store.dispatch("$_app/stop_loading")
                    }))
                }
            },
            D = M,
            F = Object(_["a"])(D, j, S, !1, null, null, null),
            N = F.exports,
            Q = function() {
                var t = this,
                    e = t.$createElement,
                    s = t._self._c || e;
                return s("div", {
                    staticClass: "mo2f-setup-setup-wizard-step mo2f-setup-setup-wizard-step-import"
                }, [s("div", {
                    staticClass: "mo2f-setup-setup-wizard-content-container"
                }, [s("the-wizard-step-counter"), s("content-header", {
                    attrs: {
                        title: t.text_header_title,
                        subtitle: t.text_header_subtitle
                    }
                }), s("div", {
                    staticClass: "mo2f-setup-setup-wizard-form"
                }, [s("form", [s("div", {
                    staticClass: "mo2f-setup-setup-wizard-form-row"
                }, [s("settings-input-radios-with-icons", {
                    attrs: {
                        name: "import_from_plugin",
                        options: t.options
                    },
                    model: {
                        value: t.selectedImport,
                        callback: function(e) {
                            t.selectedImport = e
                        },
                        expression: "selectedImport"
                    }
                })], 1)])])], 1), s("div", {
                    staticClass: "mo2f-setup-separator mo2f-setup-separator-no-margin"
                }), s("div", {
                    staticClass: "mo2f-setup-setup-wizard-step-footer"
                }, [s("a", {
                    attrs: {
                        href: "#"
                    },
                    on: {
                        click: function(e) {
                            return e.preventDefault(), t.previousStep(e)
                        }
                    }
                }, [s("span", {
                    staticClass: "text-with-arrow text-with-arrow-left"
                }, [s("inline-svg", {
                    staticClass: "icon",
                    attrs: {
                        src: i("1fa5"),
                        width: "16",
                        height: "18"
                    }
                }), t._v(t._s(t.text_previous_step) + " ")], 1)]), s("div", {
                    staticClass: "mo2f-setup-setup-wizard-step-footer-buttons"
                }, [s("button", {
                    staticClass: "mo2f-setup-button",
                    attrs: {
                        type: "button",
                        name: "skip_step"
                    },
                    domProps: {
                        textContent: t._s(t.text_skip)
                    },
                    on: {
                        click: function(e) {
                            return e.preventDefault(), t.nextStep(e)
                        }
                    }
                }), s("button", {
                    staticClass: "mo2f-setup-button mo2f-setup-button-main",
                    attrs: {
                        type: "submit",
                        name: "next_step",
                        disabled: null === t.selectedImport
                    },
                    on: {
                        click: function(e) {
                            return e.preventDefault(), t.handleSubmit(e)
                        }
                    }
                }, [s("span", {
                    staticClass: "text-with-arrow text-with-arrow-right"
                }, [t._v(" " + t._s(t.text_save) + " "), s("inline-svg", {
                    staticClass: "icon",
                    attrs: {
                        src: i("107e"),
                        width: "16",
                        height: "19"
                    }
                })], 1)])])])])
            },
            L = [],
            W = function() {
                var t = this,
                    e = t.$createElement,
                    s = t._self._c || e;
                return s("div", {
                    staticClass: "mo2f-setup-input-radios-with-icons"
                }, t._l(t.options, (function(e) {
                    return s("label", {
                        key: e.value,
                        class: t.labelClass(e),
                        attrs: {
                            for: "mo2f-setup-settings-radio-" + t.name + "[" + e.value + "]"
                        },
                        on: {
                            click: function(i) {
                                return t.clicked(e)
                            }
                        }
                    }, [s("span", {
                        class: t.titleClass(e.value)
                    }, [s("inline-svg", {
                        staticClass: "icon",
                        attrs: {
                            src: i("3af1"),
                            width: "16",
                            height: "16"
                        }
                    })], 1), e.logo.length ? s("img", {
                        staticClass: "mo2f-setup-logo-icon",
                        attrs: {
                            src: e.logo,
                            alt: e.label
                        }
                    }) : t._e(), s("input", {
                        directives: [{
                            name: "model",
                            rawName: "v-model",
                            value: t.selectedImport,
                            expression: "selectedImport"
                        }],
                        attrs: {
                            id: "mo2f-setup-settings-radio-" + t.name + "[" + e.value + "]",
                            type: "radio",
                            name: t.name,
                            autocomplete: "off",
                            disabled: e.disabled || !1
                        },
                        domProps: {
                            value: e.value,
                            checked: t.isChecked(e.value),
                            checked: t._q(t.selectedImport, e.value)
                        },
                        on: {
                            change: function(i) {
                                t.selectedImport = e.value
                            }
                        }
                    }), s("span", {
                        staticClass: "mo2f-setup-styled-radio-text",
                        domProps: {
                            innerHTML: t._s(e.label)
                        }
                    }), e.is_pro ? s("inline-svg", {
                        staticClass: "mo2f-setup-pro-badge",
                        attrs: {
                            src: i("87eb"),
                            width: "46",
                            height: "26"
                        }
                    }) : t._e()], 1)
                })), 0)
            },
            U = [],
            H = {
                name: "SettingsInputRadiosWithIcons",
                props: {
                    options: Array,
                    name: String,
                    value: String
                },
                data: function() {
                    return {
                        has_error: !1
                    }
                },
                computed: {
                    selectedImport: {
                        get: function() {
                            return this.value
                        },
                        set: function(t) {
                            this.$emit("input", t)
                        }
                    }
                },
                methods: {
                    titleClass: function(t) {
                        var e = "mo2f-setup-styled-radio";
                        return this.isChecked(t) && (e += " mo2f-setup-styled-radio-checked"), e
                    },
                    labelClass: function(t) {
                        var e = "";
                        return this.isChecked(t.value) && (e += " mo2f-setup-styled-radio-label-checked"), t.disabled && (e += " mo2f-setup-styled-radio-label-disabled"), t.readonly && (e += " mo2f-setup-styled-radio-label-readonly"), e
                    },
                    isChecked: function(t) {
                        return t === this.selectedImport
                    },
                    clicked: function(t) {
                        t.disabled && this.$emit("clicked-disabled", t)
                    }
                }
            },
            R = H,
            G = (i("8cbb"), Object(_["a"])(R, W, U, !1, null, "1652957d", null)),
            V = G.exports,
            Y = function() {
                var t = this,
                    e = t.$createElement,
                    i = t._self._c || e;
                return i("p", {
                    staticClass: "mo2f-setup-setup-wizard-step-count"
                }, [t._v(" " + t._s(t.stepValue) + " ")])
            },
            J = [],
            K = {
                name: "TheWizardStepCounter",
                computed: {
                    stepValue: function() {
                        var t = this,
                            e = this.$wizard_steps.findIndex((function(e) {
                                return t.$route.name.includes(e)
                            })) + 1;
                        return Object(c["c"])(Object(c["a"])("Step %1$s of %2$s", "mo2f-setup"), e, this.$wizard_steps.length)
                    }
                }
            },
            q = K,
            Z = (i("1f7f"), Object(_["a"])(q, Y, J, !1, null, "44fd4a93", null)),
            X = Z.exports,
            $ = {
                name: "WizardStepImport",
                components: {
                    SettingsInputRadiosWithIcons: V,
                    ContentHeader: h,
                    TheWizardStepCounter: X
                },
                data: function() {
                    return {
                        text_header_title: Object(c["a"])("Import data from your current plugins", "mo2f-setup"),
                        text_header_subtitle: Object(c["a"])("We have detected other 2FA plugins installed on your website. Select which plugin's data you would like to import to miniOrange 2-Factor authentication.", "mo2f-setup"),
                        text_save: Object(c["a"])("Import Data and Continue", "mo2f-setup"),
                        text_skip: Object(c["a"])("Skip this Step", "mo2f-setup"),
                        text_previous_step: Object(c["a"])("Previous Step", "mo2f-setup"),
                        options: [{
                            value: "easy-smtp",
                            label: Object(c["a"])("Wordfence", "mo2f-setup"),
                         //   logo: i("8d41"),
                         //   disabled: !this.$wpms.other_2FA_plugins.includes("easy-smtp"),
                           // readonly: !this.$wpms.other_2FA_plugins.includes("easy-smtp")
                        }, {
                            value: "post-smtp-mailer",
                            label: Object(c["a"])("WP 2FA", "mo2f-setup"),
                            //logo: i("8888"),
                        //    disabled: !this.$wpms.other_2FA_plugins.includes("post-smtp-mailer"),
                          //  readonly: !this.$wpms.other_2FA_plugins.includes("post-smtp-mailer")
                        }, {
                            value: "smtp-mailer",
                            label: Object(c["a"])("Two Factor authentication", "mo2f-setup"),
                            //logo: i("29b8"),
                           // disabled: !this.$wpms.other_2FA_plugins.includes("smtp-mailer"),
                         //   readonly: !this.$wpms.other_2FA_plugins.includes("smtp-mailer")
                        }, {
                            value: "wp-smtp",
                            label: Object(c["a"])("Google Authenticator", "mo2f-setup"),
                            //logo: i("b98f"),
                        //    disabled: !this.$wpms.other_2FA_plugins.includes("wp-smtp"),
                          //  readonly: !this.$wpms.other_2FA_plugins.includes("wp-smtp")
                        }],
                        selectedImport: null
                    }
                },
                methods: {
                    handleSubmit: function() {
                        var t = this;
                        null !== this.selectedImport && (this.$store.dispatch("$_app/start_loading"), this.$store.dispatch("$_settings/importOtherPlugin", {
                            value: this.selectedImport
                        }).then((function(e) {
                            e ? t.nextStep() : t.$wpms_error_toast({})
                        })).finally((function() {
                            t.$store.dispatch("$_app/stop_loading")
                        })))
                    },
                    nextStep: function() {
                        this.$next_step()
                    },
                    previousStep: function() {
                        this.$previous_step()
                    }
                }
            },
            tt = $,
            et = Object(_["a"])(tt, Q, L, !1, null, null, null),
            it = et.exports,
            st = function() {
                var t = this,
                    e = t.$createElement,
                    s = t._self._c || e;
                return s("div", {
                    staticClass: "mo2f-setup-setup-wizard-step mo2f-setup-setup-wizard-step-choose-mailer"
                }, [s("div", {
                    staticClass: "mo2f-setup-setup-wizard-content-container"
                }, [s("the-wizard-step-counter"), s("content-header", {
                    attrs: {
                        title: t.text_header_title,
                        subtitle: t.text_header_subtitle
                    }
                }), s("div", {
                    staticClass: "mo2f-setup-setup-wizard-form"
                }, [s("form", [s("div", {
                    staticClass: "mo2f-setup-setup-wizard-form-row mo2f-setup-setup-wizard-form-row-highlight"
                }, [s("h3", [t._v(t._s(t.text_recommended_mailers))]), s("settings-input-radios-with-icons", {
                    attrs: {
                        name: "choose_mailer",
                        options: t.recommended_options
                    },
                    model: {
                        value: t.selectedMailer,
                        callback: function(e) {
                            t.selectedMailer = e
                        },
                        expression: "selectedMailer"
                    }
                })], 1), s("div", {
                    staticClass: "mo2f-setup-setup-wizard-form-row"
                }, [s("settings-input-radios-with-icons", {
                    attrs: {
                        name: "choose_mailer",
                        options: t.options
                    },
                    on: {
                        "clicked-disabled": t.clickedDisabledOption
                    },
                    model: {
                        value: t.selectedMailer,
                        callback: function(e) {
                            t.selectedMailer = e
                        },
                        expression: "selectedMailer"
                    }
                })], 1)])])], 1), s("div", {
                    staticClass: "mo2f-setup-separator mo2f-setup-separator-no-margin"
                }), s("div", {
                    staticClass: "mo2f-setup-setup-wizard-step-footer"
                }, [s("a", {
                    attrs: {
                        href: "#"
                    },
                    on: {
                        click: function(e) {
                            return e.preventDefault(), t.previousStep(e)
                        }
                    }
                }, [s("span", {
                    staticClass: "text-with-arrow text-with-arrow-left"
                }, [s("inline-svg", {
                    staticClass: "icon",
                    attrs: {
                        src: i("1fa5"),
                        width: "16",
                        height: "18"
                    }
                }), t._v(t._s(t.text_previous_step) + " ")], 1)]), s("div", {
                    staticClass: "mo2f-setup-setup-wizard-step-footer-buttons"
                }, [s("button", {
                    staticClass: "mo2f-setup-button mo2f-setup-button-main",
                    attrs: {
                        type: "submit",
                        name: "next_step",
                        disabled: null === t.selectedMailer
                    },
                    on: {
                        click: function(e) {
                            return e.preventDefault(), t.handleSubmit(e)
                        }
                    }
                }, [s("span", {
                    staticClass: "text-with-arrow text-with-arrow-right"
                }, [t._v(" " + t._s(t.text_save) + " "), s("inline-svg", {
                    staticClass: "icon",
                    attrs: {
                        src: i("107e"),
                        width: "16",
                        height: "19"
                    }
                })], 1)])])])])
            },
            at = [],
            nt = (i("99af"), i("7db0"), i("ac1f"), i("5319"), i("2f62")),
            ot = {
                name: "WizardStepChooseMailer",
                components: {
                    SettingsInputRadiosWithIcons: V,
                    ContentHeader: h,
                    TheWizardStepCounter: X
                },
                data: function() {
                    return {
                        text_header_title: Object(c["a"])("Choose Your 2FA method", "mo2f-setup"),
                        text_header_subtitle: Object(c["c"])(Object(c["a"])("Which method would you like to use for 2-factor authentication? Not sure which method to choose? Reach out to us", "mo2f-setup"), '<a href="https://plugins.miniorange.com/2-factor-authentication-for-wordpress" target="_blank" rel="noopener noreferrer">', "</a>"),
                        text_save: Object(c["a"])("Save and Continue", "mo2f-setup"),
                        text_previous_step: Object(c["a"])("Previous Step", "mo2f-setup"),
                        text_recommended_mailers: Object(c["a"])("Recommended Methods", "mo2f-setup"),
                        // recommended_options: [{
                        //     value: "smtpcom",
                        //     label: this.$wpms.mailer_options["smtpcom"].title,
                        //     logo: i("78cb")
                        // }, {
                        //     value: "sendinblue",
                        //     label: this.$wpms.mailer_options["sendinblue"].title,
                        //     logo: i("7f3e")
                        // }],
                        // options: [{
                        //     value: "mailgun",
                        //     label: this.$wpms.mailer_options["mailgun"].title,
                        //     logo: i("776b")
                        // }, {
                        //     value: "sendgrid",
                        //     label: this.$wpms.mailer_options["sendgrid"].title,
                        //     logo: i("b1c2")
                        // }, {
                        //     value: "gmail",
                        //     label: this.$wpms.mailer_options["gmail"].title,
                        //     logo: i("ddc9"),
                        //     notice: this.$wpms.mailer_options["gmail"].edu_notice
                        // }, {
                        //     value: "amazonses",
                        //     label: this.$wpms.mailer_options["amazonses"].title,
                        //     logo: i("7de8"),
                        //     disabled: !this.$wpms.is_pro,
                        //     is_pro: !this.$wpms.is_pro,
                        //     notice: this.$wpms.mailer_options["amazonses"].edu_notice
                        // }, {
                        //     value: "outlook",
                        //     label: this.$wpms.mailer_options["outlook"].title,
                        //     logo: i("2db4"),
                        //     disabled: !this.$wpms.is_pro,
                        //     is_pro: !this.$wpms.is_pro,
                        //     notice: this.$wpms.mailer_options["outlook"].edu_notice
                        // }, {
                        //     value: "zoho",
                        //     label: this.$wpms.mailer_options["zoho"].title,
                        //     logo: i("2bc2"),
                        //     disabled: !this.$wpms.is_pro,
                        //     is_pro: !this.$wpms.is_pro
                        // }, {
                        //     value: "smtp",
                        //     label: this.$wpms.mailer_options["smtp"].title,
                        //     logo: i("5f30")
                        // }],
                        // selectedMailer: this.currentMailer
                    }
                },
                watch: {
                    currentMailer: function(t) {
                        this.selectedMailer = t
                    }
                },
                computed: Object(n["a"])(Object(n["a"])({}, Object(nt["b"])({
                    currentMailer: "$_settings/mailer"
                })), {}, {
                    selectedMailerOptions: function() {
                        var t = this;
                        return this.recommended_options.concat(this.options).find((function(e) {
                            return e.value === t.selectedMailer
                        }))
                    }
                }),
                methods: {
                    handleSubmit: function(t) {
                        var e = this,
                            i = arguments.length > 1 && void 0 !== arguments[1] && arguments[1];
                        null !== this.selectedMailer && (void 0 === this.selectedMailerOptions.notice || i ? (this.$store.dispatch("$_app/start_loading"), this.$store.dispatch("$_settings/updateSettings", {
                            value: {
                                mail: {
                                    mailer: this.selectedMailer
                                }
                            }
                        }).then((function(t) {
                            t.success ? (e.$store.dispatch("$_settings/setMailer", e.selectedMailer), e.nextStep()) : e.$wpms_error_toast({})
                        })).finally((function() {
                            e.$store.dispatch("$_app/stop_loading")
                        }))) : this.$swal({
                            title: this.selectedMailerOptions.label + " " + Object(c["a"])("Mailer", "mo2f-setup"),
                            html: this.selectedMailerOptions.notice,
                            width: 650,
                            showCloseButton: !0,
                            allowOutsideClick: !1,
                            allowEscapeKey: !1,
                            allowEnterKey: !1,
                            customClass: {
                                container: "mo2f-setup-swal"
                            },
                            confirmButtonText: Object(c["a"])("I Understand, Continue", "mo2f-setup"),
                            cancelButtonText: Object(c["a"])("Choose a Different Mailer", "mo2f-setup"),
                            showCancelButton: !0,
                            reverseButtons: !0
                        }).then((function(t) {
                            t.value ? e.handleSubmit(null, !0) : void 0 !== t.dismiss && "cancel" === t.dismiss && (e.selectedMailer = null)
                        })))
                    },
                    nextStep: function() {
                        var t = this,
                            e = this.$wizard_steps.findIndex((function(e) {
                                return t.$route.name.includes(e)
                            })) + 1;
                        this.$router.push({
                            name: "".concat(this.$wizard_steps[e], "_").concat(this.selectedMailer)
                        })
                    },
                    previousStep: function() {
                        this.$previous_step()
                    },
                    clickedDisabledOption: function(t) {
                        this.$swal({
                            title: t.label + " " + Object(c["a"])("is a PRO Feature", "mo2f-setup"),
                            html: "<p>".concat(this.$wpms.education.upgrade_text.replace("%mailer%", t.label), '</p>\n\t\t\t\t\t\t<p><a href="').concat(this.$wpms.education.upgrade_url + "&utm_content=" + t.value, '" class="mo2f-setup-button mo2f-setup-button-small mo2f-setup-button-main" target="_blank" rel="noopener noreferrer">').concat(this.$wpms.education.upgrade_button, '</a></p>\n\t\t\t\t\t\t<p class="upgrade-bonus"><span class="icon-container"><svg data-v-6d7a07a8="" viewBox="0 0 512 512" role="img" class="icon" data-icon="check" data-prefix="fas" focusable="false" aria-hidden="true" xmlns="http://www.w3.org/2000/svg" width="16"><path xmlns="http://www.w3.org/2000/svg" fill="currentColor" d="M173.898 439.404l-166.4-166.4c-9.997-9.997-9.997-26.206 0-36.204l36.203-36.204c9.997-9.998 26.207-9.998 36.204 0L192 312.69 432.095 72.596c9.997-9.997 26.207-9.997 36.204 0l36.203 36.204c9.997 9.997 9.997 26.206 0 36.204l-294.4 294.401c-9.998 9.997-26.207 9.997-36.204-.001z"></path></svg></span>').concat(this.$wpms.education.upgrade_bonus, "</p>\n\t\t\t\t\t\t<p>").concat(this.$wpms.education.upgrade_doc, "</p>"),
                            width: 550,
                            imageUrl: i("b32f"),
                            imageWidth: 31,
                            imageHeight: 35,
                            showCloseButton: !0,
                            customClass: {
                                container: "mo2f-setup-swal mo2f-setup-upgrade-popup"
                            },
                            showConfirmButton: !1
                        })
                    }
                },
                mounted: function() {
                    this.selectedMailer = this.currentMailer
                }
            },
            rt = ot,
            lt = Object(_["a"])(rt, st, at, !1, null, null, null),
            ct = lt.exports,
            pt = function() {
                var t = this,
                    e = t.$createElement,
                    s = t._self._c || e;
                return s("div", {
                    staticClass: "mo2f-setup-setup-wizard-step mo2f-setup-setup-wizard-step-configure-mailer"
                }, [s("div", {
                    staticClass: "mo2f-setup-setup-wizard-content-container"
                }, [s("div", {
                    staticClass: "mo2f-setup-configure-mailer-header"
                }, [s("div", {
                    staticClass: "mo2f-setup-configure-mailer-header-container"
                }, [s("the-wizard-step-counter"), s("content-header", {
                    attrs: {
                        title: t.text_header_title,
                        subtitle: t.text_header_subtitle
                    }
                })], 1), s("span", {
                    staticClass: "mo2f-setup-configure-mailer-logo"
                }, [s("inline-svg", {
                    attrs: {
                        src: t.logo(t.mailer),
                        height: "40"
                    }
                })], 1)]), s("div", {
                    staticClass: "mo2f-setup-separator mo2f-setup-separator-no-margin"
                }), s("router-view", {
                    ref: "mailerConfiguration"
                })], 1), s("div", {
                    staticClass: "mo2f-setup-separator mo2f-setup-separator-no-margin"
                }), s("div", {
                    staticClass: "mo2f-setup-setup-wizard-step-footer"
                }, [s("a", {
                    attrs: {
                        href: "#"
                    },
                    on: {
                        click: function(e) {
                            return e.preventDefault(), t.previousStep(e)
                        }
                    }
                }, [s("span", {
                    staticClass: "text-with-arrow text-with-arrow-left"
                }, [s("inline-svg", {
                    staticClass: "icon",
                    attrs: {
                        src: i("1fa5"),
                        width: "16",
                        height: "18"
                    }
                }), t._v(t._s(t.text_previous_step) + " ")], 1)]), s("div", {
                    staticClass: "mo2f-setup-setup-wizard-step-footer-buttons"
                }, [s("button", {
                    staticClass: "mo2f-setup-button mo2f-setup-button-main",
                    attrs: {
                        type: "submit",
                        name: "next_step",
                        disabled: null === t.mailer || !0 === t.blocked_step
                    },
                    on: {
                        click: function(e) {
                            return e.preventDefault(), t.handleSubmit(e)
                        }
                    }
                }, [s("span", {
                    staticClass: "text-with-arrow text-with-arrow-right"
                }, [t._v(" " + t._s(t.text_save) + " "), s("inline-svg", {
                    staticClass: "icon",
                    attrs: {
                        src: i("107e"),
                        width: "16",
                        height: "19"
                    }
                })], 1)])])])])
            },
            mt = [],
            ut = i("5935"),
            dt = {
                name: "WizardStepConfigureMailer",
                components: {
                    ContentHeader: h,
                    TheWizardStepCounter: X
                },
                data: function() {
                    return {
                        text_header_title: Object(c["a"])("Configure Mailer Settings", "mo2f-setup"),
                        text_header_subtitle: Object(c["a"])("Below, we'll show you all of the settings required to set up this mailer.", "mo2f-setup"),
                        text_save: Object(c["a"])("Save and Continue", "mo2f-setup"),
                        text_previous_step: Object(c["a"])("Previous Step", "mo2f-setup")
                    }
                },
                computed: Object(n["a"])(Object(n["a"])({}, Object(nt["b"])({
                    mailer: "$_settings/mailer"
                })), Object(ut["b"])("$_wizard", ["blocked_step"])),
                methods: {
                    handleSubmit: function() {
                        var t = this;
                        return !this.blocked_step && (this.$refs.mailerConfiguration.areRequiredFieldsValid() ? (this.$store.dispatch("$_app/start_loading"), void this.$store.dispatch("$_settings/saveCurrentSettings").then((function(e) {
                            e.success ? t.$next_step() : t.$wpms_error_toast({})
                        })).finally((function() {
                            t.$store.dispatch("$_app/stop_loading")
                        }))) : (this.$required_fields_modal(), !1))
                    },
                    previousStep: function() {
                        this.blocked_step = !1, this.$previous_step()
                    },
                    logo: function(t) {
                        return t = "mail" === t ? "smtp" : t, i("31f1")("./".concat(t, ".svg"))
                    }
                }
            },
            _t = dt,
            ft = Object(_["a"])(_t, pt, mt, !1, null, null, null),
            ht = ft.exports,
            gt = function() {
                var t = this,
                    e = t.$createElement,
                    s = t._self._c || e;
                return s("div", {
                    staticClass: "mo2f-setup-setup-wizard-step mo2f-setup-setup-wizard-step-plugin-features"
                }, [s("div", {
                    staticClass: "mo2f-setup-setup-wizard-content-container"
                }, [s("div", {
                    staticClass: "mo2f-setup-plugin-features-header"
                }, [s("the-wizard-step-counter"), s("content-header", {
                    attrs: {
                        title: t.text_header_title,
                        subtitle: t.text_header_subtitle
                    }
                })], 1), s("div", {
                    staticClass: "mo2f-setup-plugin-features-list"
                }, [s("settings-input-long-checkbox", {
                    attrs: {
                        value: !0,
                        name: "improved_deliverability",
                        label: t.text_improved_email_deliverability,
                        description: t.text_improved_email_deliverability_desc,
                        disabled: ""
                    }
                }), s("settings-input-long-checkbox", {
                    attrs: {
                        value: !0,
                        name: "error_tracking",
                        label: t.text_error_tracking,
                        description: t.text_error_tracking_desc,
                        disabled: ""
                    }
                }), t.contact_form_already_installed ? t._e() : s("settings-input-long-checkbox", {
                    attrs: {
                        name: "smart_contact_form",
                        label: t.text_smart_contact_form,
                        description: t.text_smart_contact_form_desc
                    },
                    model: {
                        value: t.smart_contact_form,
                        callback: function(e) {
                            t.smart_contact_form = e
                        },
                        expression: "smart_contact_form"
                    }
                }), s("settings-input-long-checkbox", {
                    attrs: {
                        name: "email_log",
                        label: t.text_email_log,
                        description: t.text_email_log_desc,
                        show_pro: !t.is_pro
                    },
                    model: {
                        value: t.email_log,
                        callback: function(e) {
                            t.email_log = e
                        },
                        expression: "email_log"
                    }
                }), t.is_pro ? t._e() : s("settings-input-long-checkbox", {
                    attrs: {
                        name: "manage_notifications",
                        label: t.text_manage_notifications,
                        description: t.text_manage_notifications_desc,
                        show_pro: !t.is_pro
                    },
                    model: {
                        value: t.manage_notifications,
                        callback: function(e) {
                            t.manage_notifications = e
                        },
                        expression: "manage_notifications"
                    }
                }), t.is_multisite && !t.is_pro ? s("settings-input-long-checkbox", {
                    attrs: {
                        name: "network_settings",
                        label: t.text_network_settings,
                        description: t.text_network_settings_desc,
                        show_pro: !t.is_pro
                    },
                    model: {
                        value: t.network_settings,
                        callback: function(e) {
                            t.network_settings = e
                        },
                        expression: "network_settings"
                    }
                }) : t._e()], 1)]), s("div", {
                    staticClass: "mo2f-setup-separator mo2f-setup-separator-no-margin"
                }), s("div", {
                    staticClass: "mo2f-setup-setup-wizard-step-footer"
                }, [s("a", {
                    attrs: {
                        href: "#"
                    },
                    on: {
                        click: function(e) {
                            return e.preventDefault(), t.previousStep(e)
                        }
                    }
                }, [s("span", {
                    staticClass: "text-with-arrow text-with-arrow-left"
                }, [s("inline-svg", {
                    staticClass: "icon",
                    attrs: {
                        src: i("1fa5"),
                        width: "16",
                        height: "18"
                    }
                }), t._v(t._s(t.text_previous_step) + " ")], 1)]), s("div", {
                    staticClass: "mo2f-setup-setup-wizard-step-footer-buttons"
                }, [s("button", {
                    staticClass: "mo2f-setup-button mo2f-setup-button-main",
                    attrs: {
                        type: "submit",
                        name: "next_step"
                    },
                    on: {
                        click: function(e) {
                            return e.preventDefault(), t.handleSubmit(e)
                        }
                    }
                }, [s("span", {
                    staticClass: "text-with-arrow text-with-arrow-right"
                }, [t._v(" " + t._s(t.text_save) + " "), s("inline-svg", {
                    staticClass: "icon",
                    attrs: {
                        src: i("107e"),
                        width: "16",
                        height: "19"
                    }
                })], 1)])])])])
            },
            wt = [],
            bt = (i("4de4"), function() {
                var t = this,
                    e = t.$createElement,
                    s = t._self._c || e;
                return s("label", {
                    staticClass: "settings-input-long-checkbox",
                    class: {
                        "settings-input-long-checkbox-checked": t.value, "settings-input-long-checkbox-disabled": t.disabled
                    },
                    attrs: {
                        for: "mo2f-setup-settings-long-checkbox-" + t.name
                    }
                }, [s("div", {
                    staticClass: "settings-input-long-checkbox-header"
                }, [s("span", {
                    staticClass: "title-container"
                }, [s("span", {
                    staticClass: "label",
                    domProps: {
                        innerHTML: t._s(t.label)
                    }
                }), t.show_pro ? s("inline-svg", {
                    staticClass: "mo2f-setup-pro-badge",
                    attrs: {
                        src: i("87eb"),
                        width: "46",
                        height: "24"
                    }
                }) : t._e()], 1), t.description ? s("p", {
                    staticClass: "description",
                    domProps: {
                        innerHTML: t._s(t.description)
                    }
                }) : t._e()]), s("span", {
                    staticClass: "settings-input-long-checkbox-container"
                }, [s("span", {
                    staticClass: "checkbox",
                    class: {
                        "checkbox-checked": t.value, "checkbox-disabled": t.disabled
                    }
                }, [s("inline-svg", {
                    staticClass: "icon",
                    attrs: {
                        src: i("3af1"),
                        width: "16",
                        height: "16"
                    }
                })], 1), s("input", {
                    attrs: {
                        id: "mo2f-setup-settings-long-checkbox-" + t.name,
                        type: "checkbox",
                        name: t.name,
                        disabled: t.disabled
                    },
                    domProps: {
                        checked: t.value
                    },
                    on: {
                        input: function(e) {
                            return t.$emit("input", e.target.checked)
                        }
                    }
                })])])
            }),
            At = [],
            vt = {
                name: "SettingsInputLongCheckbox",
                props: {
                    label: String,
                    name: String,
                    value: Boolean,
                    description: String,
                    disabled: Boolean,
                    show_pro: Boolean
                }
            },
            xt = vt,
            yt = Object(_["a"])(xt, bt, At, !1, null, null, null),
            Ct = yt.exports,
            kt = {
                name: "WizardStepPluginFeatures",
                components: {
                    ContentHeader: h,
                    TheWizardStepCounter: X,
                    SettingsInputLongCheckbox: Ct
                },
                data: function() {
                    return {
                        text_header_title: Object(c["a"])("Which email features do you want to enable?", "mo2f-setup"),
                        text_header_subtitle: Object(c["a"])("Make sure you're getting the most out of WP Mail SMTP. Just check all of the features you'd like to use, and we'll go ahead and enable those for you.", "mo2f-setup"),
                        text_save: Object(c["a"])("Save and Continue", "mo2f-setup"),
                        text_previous_step: Object(c["a"])("Previous Step", "mo2f-setup"),
                        text_improved_email_deliverability: Object(c["a"])("Improved Email Deliverability", "mo2f-setup"),
                        text_improved_email_deliverability_desc: Object(c["a"])("Ensure your emails are sent successfully and reliably.", "mo2f-setup"),
                        text_error_tracking: Object(c["a"])("Email Error Tracking", "mo2f-setup"),
                        text_error_tracking_desc: Object(c["a"])("Easily spot errors causing delivery issues.", "mo2f-setup"),
                        text_smart_contact_form: Object(c["a"])("Smart Contact Form", "mo2f-setup"),
                        text_smart_contact_form_desc: Object(c["a"])("Create beautiful contact forms with just a few clicks.", "mo2f-setup"),
                        text_email_log: Object(c["a"])("Detailed Email Logs", "mo2f-setup"),
                        text_email_log_desc: Object(c["a"])("Keep records of every email that's sent out from your website.", "mo2f-setup"),
                        text_manage_notifications: Object(c["a"])("Manage Default Notifications", "mo2f-setup"),
                        text_manage_notifications_desc: Object(c["a"])("Control which email notifications your WordPress site sends.", "mo2f-setup"),
                        text_network_settings: Object(c["a"])("Multisite Network Settings", "mo2f-setup"),
                        text_network_settings_desc: Object(c["a"])("Save time with powerful WordPress Multisite controls.", "mo2f-setup"),
                        is_pro: this.$wpms.is_pro,
                        is_multisite: this.$wpms.is_multisite,
                        email_log: !1,
                        manage_notifications: !1,
                        network_settings: !1
                    }
                },
                computed: Object(n["a"])(Object(n["a"])({}, Object(nt["b"])({
                    contact_form_already_installed: "$_plugins/contact_form_plugin_already_installed",
                    email_log_setting: "$_settings/email_log_enabled"
                })), Object(ut["b"])("$_plugins", {
                    smart_contact_form: "smart_contact_form_setting"
                })),
                watch: {
                    smart_contact_form: function(t) {
                        if (this.contact_form_already_installed) return !1;
                        this.showWPFormsPluginInstallFooterNotice(t)
                    },
                    contact_form_already_installed: function(t) {
                        t && this.$emit("displayContentBelow", "")
                    },
                    email_log_setting: function(t) {
                        this.email_log = t
                    }
                },
                methods: {
                    handleSubmit: function() {
                        var t = this;
                        this.$store.dispatch("$_app/start_loading");
                        var e = [];
                        if (this.is_pro) {
                            var i = {
                                value: {
                                    logs: {
                                        enabled: this.email_log
                                    }
                                }
                            };
                            e.push(this.$store.dispatch("$_settings/updateSettings", i)), e.push(this.$store.dispatch("$_settings/setLogs", this.email_log))
                        }
                        if (this.smart_contact_form && !this.contact_form_already_installed && e.push(this.$store.dispatch("$_plugins/installPlugin", "wpforms-lite")), !this.is_pro) {
                            var s = [];
                            this.email_log && s.push("email_log"), this.manage_notifications && s.push("manage_notifications"), this.network_settings && s.push("network_settings"), e.push(this.$store.dispatch("$_settings/savePluginFeatures", s))
                        }
                        Promise.all(e).then((function(e) {
                            var i = e.filter((function(t) {
                                return t.success
                            }));
                            i.length === e.length && (t.$emit("displayContentBelow", ""), t.$next_step())
                        })).finally((function() {
                            t.$store.dispatch("$_app/stop_loading")
                        }))
                    },
                    previousStep: function() {
                        var t = this;
                        this.$emit("displayContentBelow", "");
                        var e = this.$wizard_steps.findIndex((function(e) {
                            return t.$route.name.includes(e)
                        })) - 1;
                        this.$router.push({
                            name: "".concat(this.$wizard_steps[e], "_").concat(this.$store.getters["$_settings/mailer"])
                        })
                    },
                    showWPFormsPluginInstallFooterNotice: function(t) {
                        var e = t ? "<p> ".concat(Object(c["a"])("The following plugin will be installed for free: WPForms", "mo2f-setup"), "</p>") : "";
                        this.$emit("displayContentBelow", e)
                    }
                },
                mounted: function() {
                    if (this.showWPFormsPluginInstallFooterNotice(this.smart_contact_form && !this.contact_form_already_installed), this.email_log = this.$store.getters["$_settings/email_log_enabled"], !this.$wpms.is_pro) {
                        var t = this.$store.getters["$_settings/plugin_features"];
                        t.includes("email_log") && (this.email_log = !0), t.includes("manage_notifications") && (this.manage_notifications = !0), t.includes("network_settings") && (this.network_settings = !0)
                    }
                }
            },
            Ot = kt,
            jt = Object(_["a"])(Ot, gt, wt, !1, null, null, null),
            St = jt.exports,
            Pt = function() {
                var t = this,
                    e = t.$createElement,
                    s = t._self._c || e;
                return s("div", {
                    staticClass: "mo2f-setup-setup-wizard-step mo2f-setup-setup-wizard-step-help-improve"
                }, [s("div", {
                    staticClass: "mo2f-setup-setup-wizard-content-container"
                }, [s("div", {
                    staticClass: "mo2f-setup-help-improve-header"
                }, [s("the-wizard-step-counter"), s("content-header", {
                    attrs: {
                        title: t.text_header_title,
                        subtitle: t.text_header_subtitle
                    }
                })], 1), s("settings-input-text", {
                    attrs: {
                        name: "email",
                        type: "email",
                        label: t.text_email_label,
                        description: t.text_email_description
                    },
                    model: {
                        value: t.email,
                        callback: function(e) {
                            t.email = e
                        },
                        expression: "email"
                    }
                }), s("settings-input-checkbox", {
                    attrs: {
                        name: "usage_tracking",
                        label: t.text_usage_tracking_label,
                        description: t.text_usage_tracking_description,
                        tooltip: t.text_usage_tracking_tooltip
                    },
                    model: {
                        value: t.usage_tracking,
                        callback: function(e) {
                            t.usage_tracking = e
                        },
                        expression: "usage_tracking"
                    }
                })], 1), s("div", {
                    staticClass: "mo2f-setup-separator mo2f-setup-separator-no-margin"
                }), s("div", {
                    staticClass: "mo2f-setup-setup-wizard-step-footer"
                }, [s("a", {
                    attrs: {
                        href: "#"
                    },
                    on: {
                        click: function(e) {
                            return e.preventDefault(), t.previousStep(e)
                        }
                    }
                }, [s("span", {
                    staticClass: "text-with-arrow text-with-arrow-left"
                }, [s("inline-svg", {
                    staticClass: "icon",
                    attrs: {
                        src: i("1fa5"),
                        width: "16",
                        height: "18"
                    }
                }), t._v(t._s(t.text_previous_step) + " ")], 1)]), s("div", {
                    staticClass: "mo2f-setup-setup-wizard-step-footer-buttons"
                }, [s("button", {
                    staticClass: "mo2f-setup-button",
                    attrs: {
                        type: "button",
                        name: "skip_step"
                    },
                    domProps: {
                        textContent: t._s(t.text_skip)
                    },
                    on: {
                        click: function(e) {
                            return e.preventDefault(), t.nextStep(e)
                        }
                    }
                }), s("button", {
                    staticClass: "mo2f-setup-button mo2f-setup-button-main",
                    attrs: {
                        type: "submit",
                        name: "next_step"
                    },
                    on: {
                        click: function(e) {
                            return e.preventDefault(), t.handleSubmit(e)
                        }
                    }
                }, [s("span", {
                    staticClass: "text-with-arrow text-with-arrow-right"
                }, [t._v(" " + t._s(t.text_save) + " "), s("inline-svg", {
                    staticClass: "icon",
                    attrs: {
                        src: i("107e"),
                        width: "16",
                        height: "19"
                    }
                })], 1)])])])])
            },
            Et = [],
            Tt = function() {
                var t = this,
                    e = t.$createElement,
                    s = t._self._c || e;
                return s("div", {
                    staticClass: "settings-input-text",
                    class: {
                        "settings-input-text-with-copy": t.copy, "input-error": t.has_errors || t.field_error
                    }
                }, [s("label", {
                    staticClass: "settings-input-label-container",
                    attrs: {
                        for: t.id
                    }
                }, [t.label ? s("span", {
                    staticClass: "label",
                    domProps: {
                        innerHTML: t._s(t.label)
                    }
                }) : t._e(), t.tooltip ? s("settings-info-tooltip", {
                    attrs: {
                        content: t.tooltip
                    }
                }) : t._e()], 1), s("span", {
                    staticClass: "settings-input-container"
                }, ["checkbox" === t.type ? s("input", {
                    directives: [{
                        name: "model",
                        rawName: "v-model",
                        value: t.currentValue,
                        expression: "currentValue"
                    }],
                    ref: "input",
                    attrs: {
                        id: t.id,
                        name: t.name,
                        placeholder: t.placeholder,
                        readonly: t.readonly,
                        disabled: t.disabled,
                        type: "checkbox"
                    },
                    domProps: {
                        checked: Array.isArray(t.currentValue) ? t._i(t.currentValue, null) > -1 : t.currentValue
                    },
                    on: {
                        change: [function(e) {
                            var i = t.currentValue,
                                s = e.target,
                                a = !!s.checked;
                            if (Array.isArray(i)) {
                                var n = null,
                                    o = t._i(i, n);
                                s.checked ? o < 0 && (t.currentValue = i.concat([n])) : o > -1 && (t.currentValue = i.slice(0, o).concat(i.slice(o + 1)))
                            } else t.currentValue = a
                        }, t.inputUpdate]
                    }
                }) : "radio" === t.type ? s("input", {
                    directives: [{
                        name: "model",
                        rawName: "v-model",
                        value: t.currentValue,
                        expression: "currentValue"
                    }],
                    ref: "input",
                    attrs: {
                        id: t.id,
                        name: t.name,
                        placeholder: t.placeholder,
                        readonly: t.readonly,
                        disabled: t.disabled,
                        type: "radio"
                    },
                    domProps: {
                        checked: t._q(t.currentValue, null)
                    },
                    on: {
                        change: [function(e) {
                            t.currentValue = null
                        }, t.inputUpdate]
                    }
                }) : s("input", {
                    directives: [{
                        name: "model",
                        rawName: "v-model",
                        value: t.currentValue,
                        expression: "currentValue"
                    }],
                    ref: "input",
                    attrs: {
                        id: t.id,
                        name: t.name,
                        placeholder: t.placeholder,
                        readonly: t.readonly,
                        disabled: t.disabled,
                        type: t.type
                    },
                    domProps: {
                        value: t.currentValue
                    },
                    on: {
                        change: t.inputUpdate,
                        input: function(e) {
                            e.target.composing || (t.currentValue = e.target.value)
                        }
                    }
                }), t.copy ? s("button", {
                    staticClass: "mo2f-setup-button mo2f-setup-button-small",
                    class: {
                        "mo2f-setup-button-copied": t.show_copied
                    },
                    attrs: {
                        title: t.text_copy_button
                    },
                    on: {
                        click: function(e) {
                            return e.preventDefault(), t.copyValue(e)
                        }
                    }
                }, [s("span", {
                    staticClass: "copy-button-container"
                }, [s("inline-svg", {
                    staticClass: "icon",
                    class: {
                        active: !t.show_copied
                    },
                    attrs: {
                        src: i("d51e"),
                        width: "16",
                        height: "16"
                    }
                }), s("inline-svg", {
                    staticClass: "icon copied",
                    class: {
                        active: t.show_copied
                    },
                    attrs: {
                        src: i("e108"),
                        width: "16",
                        height: "16"
                    }
                })], 1)]) : t._e()]), t.has_errors ? s("p", {
                    staticClass: "error"
                }, [s("inline-svg", {
                    staticClass: "icon",
                    attrs: {
                        src: i("827a"),
                        width: "16"
                    }
                }), s("span", {
                    domProps: {
                        innerHTML: t._s(t.text_error)
                    }
                })], 1) : t._e(), t.description ? s("p", {
                    staticClass: "description",
                    domProps: {
                        innerHTML: t._s(t.description)
                    }
                }) : t._e()])
            },
            zt = [],
            Bt = (i("4d63"), i("25f0"), i("4795"), function() {
                var t = this,
                    e = t.$createElement,
                    s = t._self._c || e;
                return s("span", {
                    directives: [{
                        name: "tooltip",
                        rawName: "v-tooltip",
                        value: t.tooltip_data,
                        expression: "tooltip_data"
                    }],
                    staticClass: "mo2f-setup-info",
                    attrs: {
                        tabindex: "0"
                    }
                }, [s("inline-svg", {
                    staticClass: "icon",
                    attrs: {
                        src: i("8475"),
                        width: "14",
                        height: "14"
                    }
                })], 1)
            }),
            It = [],
            Mt = {
                name: "SettingsInfoTooltip",
                props: {
                    content: String
                },
                data: function() {
                    return {
                        tooltip_data: {
                            content: this.content,
                            autoHide: !1,
                            trigger: "hover focus click"
                        }
                    }
                }
            },
            Dt = Mt,
            Ft = (i("ba75"), Object(_["a"])(Dt, Bt, It, !1, null, "74a4d2ae", null)),
            Nt = Ft.exports,
            Qt = {
                name: "SettingsInputText",
                components: {
                    SettingsInfoTooltip: Nt
                },
                props: {
                    name: String,
                    value: String,
                    label: String,
                    description: String,
                    placeholder: String,
                    type: {
                        type: String,
                        default: "text"
                    },
                    tooltip: String,
                    readonly: Boolean,
                    disabled: Boolean,
                    format: RegExp,
                    error: {
                        type: String,
                        default: ""
                    },
                    copy: {
                        type: Boolean,
                        default: !1
                    },
                    is_error: Boolean
                },
                data: function() {
                    return {
                        has_error: !1,
                        id: "input-" + this.name,
                        text_copy_button: Object(c["a"])("Copy input value", "mo2f-setup"),
                        text_copied: Object(c["a"])("Copied!", "mo2f-setup"),
                        show_copied: !1
                    }
                },
                computed: {
                    currentValue: {
                        get: function() {
                            return this.value
                        },
                        set: function(t) {
                            this.$emit("is_error_update", !1), this.$emit("input", t)
                        }
                    },
                    field_error: {
                        get: function() {
                            return this.is_error
                        },
                        set: function(t) {
                            this.$emit("is_error_update", t)
                        }
                    },
                    has_errors: function() {
                        return this.error.length > 0 || this.has_error
                    },
                    text_error: function() {
                        return this.error.length > 0 ? this.error : Object(c["a"])("The value entered does not match the required format", "mo2f-setup")
                    }
                },
                methods: {
                    inputUpdate: function(t) {
                        return !this.disabled && (this.has_error = !1, this.format && !this.format.test(t.target.value) ? (this.has_error = !0, !1) : void 0)
                    },
                    copyValue: function() {
                        var t = this.$refs.input;
                        t.select(), document.execCommand("copy"), this.show_copied = !0;
                        var e = this;
                        setTimeout((function() {
                            e.show_copied = !1
                        }), 1e3)
                    }
                }
            },
            Lt = Qt,
            Wt = Object(_["a"])(Lt, Tt, zt, !1, null, null, null),
            Ut = Wt.exports,
            Ht = function() {
                var t = this,
                    e = t.$createElement,
                    s = t._self._c || e;
                return s("div", {
                    staticClass: "settings-input-checkbox",
                    class: {
                        "settings-input-checkbox-checked": t.value, "settings-input-checkbox-disabled": t.disabled
                    }
                }, [s("span", {
                    staticClass: "settings-input-label-container"
                }, [s("span", {
                    staticClass: "label",
                    domProps: {
                        innerHTML: t._s(t.label)
                    }
                }), t.tooltip ? s("settings-info-tooltip", {
                    attrs: {
                        content: t.tooltip
                    }
                }) : t._e()], 1), s("label", {
                    staticClass: "settings-input-checkbox-container",
                    attrs: {
                        for: "mo2f-setup-settings-checkbox-" + t.name
                    }
                }, [s("span", {
                    staticClass: "checkbox",
                    class: {
                        "checkbox-checked": t.value, "checkbox-disabled": t.disabled
                    }
                }, [s("inline-svg", {
                    staticClass: "icon",
                    attrs: {
                        src: i("3af1"),
                        width: "14",
                        height: "14"
                    }
                })], 1), s("input", {
                    attrs: {
                        id: "mo2f-setup-settings-checkbox-" + t.name,
                        type: "checkbox",
                        name: t.name,
                        disabled: t.disabled
                    },
                    domProps: {
                        checked: t.value
                    },
                    on: {
                        input: function(e) {
                            return t.$emit("input", e.target.checked)
                        }
                    }
                }), t.description ? s("span", {
                    staticClass: "input-label",
                    domProps: {
                        innerHTML: t._s(t.description)
                    }
                }) : t._e()])])
            },
            Rt = [],
            Gt = {
                name: "SettingsInputCheckbox",
                components: {
                    SettingsInfoTooltip: Nt
                },
                props: {
                    label: String,
                    name: String,
                    value: Boolean,
                    description: String,
                    tooltip: String,
                    disabled: Boolean
                }
            },
            Vt = Gt,
            Yt = Object(_["a"])(Vt, Ht, Rt, !1, null, null, null),
            Jt = Yt.exports,
            Kt = {
                name: "WizardStepHelpImprove",
                components: {
                    ContentHeader: h,
                    TheWizardStepCounter: X,
                    SettingsInputText: Ut,
                    SettingsInputCheckbox: Jt
                },
                data: function() {
                    return {
                        text_header_title: Object(c["a"])("Help Improve WP Mail SMTP + Smart Recommendations", "mo2f-setup"),
                        text_header_subtitle: Object(c["a"])("Get helpful suggestions from WP Mail SMTP on how to optimize your email deliverability and grow your business.", "mo2f-setup"),
                        text_save: Object(c["a"])("Save and Continue", "mo2f-setup"),
                        text_skip: Object(c["a"])("Skip this Step", "mo2f-setup"),
                        text_previous_step: Object(c["a"])("Previous Step", "mo2f-setup"),
                        text_email_label: Object(c["a"])("Your Email Address", "mo2f-setup"),
                        text_email_description: Object(c["a"])("Your email is needed, so you can receive recommendations.", "mo2f-setup"),
                        text_usage_tracking_label: Object(c["a"])("Help make WP Mail SMTP better for everyone", "mo2f-setup"),
                        text_usage_tracking_description: Object(c["a"])("Yes, count me in", "mo2f-setup"),
                        text_usage_tracking_tooltip: Object(c["a"])("By allowing us to track usage data we can better help you because we know with which WordPress configurations, themes and plugins we should test.", "mo2f-setup"),
                        is_pro: this.$wpms.is_pro,
                        email: "",
                        usage_tracking: !1
                    }
                },
                methods: {
                    handleSubmit: function() {
                        var t = this;
                        this.$store.dispatch("$_app/start_loading");
                        var e = [];
                        if (this.email && e.push(this.$store.dispatch("$_settings/subscribeToNewsletter", this.email)), this.usage_tracking) {
                            var i = {
                                value: {
                                    general: {
                                        "usage-tracking-enabled": !0
                                    }
                                }
                            };
                            e.push(this.$store.dispatch("$_settings/updateSettings", i))
                        }
                        Promise.all(e).then((function() {
                            t.nextStep()
                        })).finally((function() {
                            t.$store.dispatch("$_app/stop_loading")
                        }))
                    },
                    nextStep: function() {
                        this.$next_step()
                    },
                    previousStep: function() {
                        this.$previous_step()
                    }
                }
            },
            qt = Kt,
            Zt = Object(_["a"])(qt, Pt, Et, !1, null, null, null),
            Xt = Zt.exports,
            $t = function() {
                var t = this,
                    e = t.$createElement,
                    s = t._self._c || e;
                return s("div", {
                    staticClass: "mo2f-setup-setup-wizard-step mo2f-setup-setup-wizard-step-license"
                }, [s("div", {
                    staticClass: "mo2f-setup-setup-wizard-content-container"
                }, [s("div", {
                    staticClass: "mo2f-setup-license-header"
                }, [s("the-wizard-step-counter"), s("content-header", {
                    attrs: {
                        title: t.text_header_title,
                        subtitle: t.text_header_subtitle
                    }
                })], 1), t.is_pro ? t._e() : s("div", {
                    staticClass: "upgrade-content"
                }, [s("p", {
                    staticClass: "medium-bold",
                    domProps: {
                        innerHTML: t._s(t.text_upgrade_paragraph)
                    }
                }), s("div", {
                    staticClass: "checked-item-list"
                }, [s("span", {
                    staticClass: "checked-item"
                }, [s("inline-svg", {
                    staticClass: "icon",
                    attrs: {
                        src: i("3af1"),
                        width: "16",
                        height: "16"
                    }
                }), t._v(" "), s("span", [t._v(t._s(t.text_email_log))])], 1), s("span", {
                    staticClass: "checked-item"
                }, [s("inline-svg", {
                    staticClass: "icon",
                    attrs: {
                        src: i("3af1"),
                        width: "16",
                        height: "16"
                    }
                }), t._v(" "), s("span", [t._v(t._s(t.text_manage_notifications))])], 1), s("span", {
                    staticClass: "checked-item"
                }, [s("inline-svg", {
                    staticClass: "icon",
                    attrs: {
                        src: i("3af1"),
                        width: "16",
                        height: "16"
                    }
                }), t._v(" "), s("span", [t._v(t._s(t.text_network_settings))])], 1)])]), t.verified ? s("div", {
                    staticClass: "verified-license"
                }, [s("p", {
                    domProps: {
                        innerHTML: t._s(t.text_verified_license)
                    }
                })]) : s("div", {
                    staticClass: "license-form",
                    class: {
                        "license-form-error": t.license_error
                    }
                }, [s("p", {
                    domProps: {
                        innerHTML: t._s(t.text_license_form)
                    }
                }), s("div", {
                    staticClass: "license-control"
                }, [s("input", {
                    directives: [{
                        name: "model",
                        rawName: "v-model",
                        value: t.license,
                        expression: "license"
                    }],
                    attrs: {
                        name: "license",
                        type: "password",
                        placeholder: t.text_license_input_placeholder,
                        "aria-label": t.text_aria_label_for_license_input
                    },
                    domProps: {
                        value: t.license
                    },
                    on: {
                        input: function(e) {
                            e.target.composing || (t.license = e.target.value)
                        }
                    }
                }), s("button", {
                    staticClass: "mo2f-setup-button mo2f-setup-button-success mo2f-setup-button-small",
                    attrs: {
                        type: "button"
                    },
                    on: {
                        click: function(e) {
                            return e.preventDefault(), t.handleLicenseSubmit(e)
                        }
                    }
                }, [t._v(" " + t._s(t.text_license_button) + " ")])]), t.license_error ? s("p", {
                    staticClass: "error-message",
                    domProps: {
                        textContent: t._s(t.text_license_error)
                    }
                }) : t._e()])]), s("div", {
                    staticClass: "mo2f-setup-separator mo2f-setup-separator-no-margin"
                }), s("div", {
                    staticClass: "mo2f-setup-setup-wizard-step-footer"
                }, [s("a", {
                    attrs: {
                        href: "#"
                    },
                    on: {
                        click: function(e) {
                            return e.preventDefault(), t.previousStep(e)
                        }
                    }
                }, [s("span", {
                    staticClass: "text-with-arrow text-with-arrow-left"
                }, [s("inline-svg", {
                    staticClass: "icon",
                    attrs: {
                        src: i("1fa5"),
                        width: "16",
                        height: "18"
                    }
                }), t._v(t._s(t.text_previous_step) + " ")], 1)]), s("div", {
                    staticClass: "mo2f-setup-setup-wizard-step-footer-buttons"
                }, [t.verified ? s("button", {
                    staticClass: "mo2f-setup-button mo2f-setup-button-main",
                    attrs: {
                        type: "submit",
                        name: "next_step"
                    },
                    on: {
                        click: function(e) {
                            return e.preventDefault(), t.handleSubmit(e)
                        }
                    }
                }, [s("span", {
                    staticClass: "text-with-arrow text-with-arrow-right"
                }, [t._v(" " + t._s(t.text_save) + " "), s("inline-svg", {
                    staticClass: "icon",
                    attrs: {
                        src: i("107e"),
                        width: "16",
                        height: "19"
                    }
                })], 1)]) : s("button", {
                    staticClass: "mo2f-setup-button",
                    attrs: {
                        type: "button",
                        name: "skip_step"
                    },
                    domProps: {
                        textContent: t._s(t.text_skip)
                    },
                    on: {
                        click: function(e) {
                            return e.preventDefault(), t.nextStep(e)
                        }
                    }
                })])])])
            },
            te = [],
            ee = (i("841c"), i("2b3d"), i("6341")),
            ie = i.n(ee),
            se = {
                name: "WizardStepLicense",
                components: {
                    ContentHeader: h,
                    TheWizardStepCounter: X
                },
                data: function() {
                    return {
                        text_header_title: Object(c["a"])("Enter your WP Mail SMTP License Key", "mo2f-setup"),
                        text_header_subtitle: this.$wpms.is_pro ? "" : Object(c["c"])(Object(c["a"])("You're currently using %1$sWP Mail SMTP Lite%2$s - no license needed. Enjoy!", "mo2f-setup"), '<span class="medium-bold">', "</span>") + " 🙂",
                        text_save: Object(c["a"])("Continue", "mo2f-setup"),
                        text_skip: Object(c["a"])("Skip this Step", "mo2f-setup"),
                        text_previous_step: Object(c["a"])("Previous Step", "mo2f-setup"),
                        text_upgrade_paragraph: Object(c["c"])(Object(c["a"])("To unlock selected features, %1$sUpgrade to Pro%2$s and enter your license key below.", "mo2f-setup"), '<a href="' + this.$wpms.upgrade_link + '" target="_blank" rel="noopener noreferrer">', "</a>"),
                        text_network_settings: Object(c["a"])("Multisite Network Settings", "mo2f-setup"),
                        text_manage_notifications: Object(c["a"])("Manage Default Notifications", "mo2f-setup"),
                        text_email_log: Object(c["a"])("Detailed Email Logs", "mo2f-setup"),
                        text_license_form_lite: Object(c["c"])(Object(c["a"])("Already purchased? Enter your license key below to connect with %1$sWP Mail SMTP Pro%2$s!", "mo2f-setup"), "<b>", "</b>"),
                        text_license_form_pro: Object(c["a"])("Enter your license key below to unlock plugin updates!", "mo2f-setup"),
                        text_license_button: this.$wpms.is_pro ? Object(c["a"])("Verify License Key", "mo2f-setup") : Object(c["a"])("Connect", "mo2f-setup"),
                        text_license_error: Object(c["a"])("The License Key format is incorrect. Please enter a valid key and try again.", "mo2f-setup"),
                        text_verified_license: Object(c["a"])("Your license was successfully verified! You are ready for the next step.", "mo2f-setup"),
                        text_email_log_desc: Object(c["a"])("Keep records of every email that's sent out from your website.", "mo2f-setup"),
                        text_manage_notifications_desc: Object(c["a"])("Control which email notifications your WordPress site sends.", "mo2f-setup"),
                        text_network_settings_desc: Object(c["a"])("Save time with powerful WordPress Multisite controls.", "mo2f-setup"),
                        text_pro_badge: Object(c["a"])("Pro badge", "mo2f-setup"),
                        text_aria_label_for_license_input: Object(c["a"])("License key input", "mo2f-setup"),
                        text_license_input_placeholder: Object(c["a"])("Paste your license key here", "mo2f-setup"),
                        pro_badge: i("87eb"),
                        is_pro: this.$wpms.is_pro,
                        verified: !1,
                        license: "",
                        license_error: !1
                    }
                },
                computed: Object(n["a"])({
                    text_license_form: function() {
                        return this.is_pro ? this.text_license_form_pro : this.text_license_form_lite
                    }
                }, Object(nt["b"])({
                    selectedProFeatures: "$_settings/plugin_features"
                })),
                methods: {
                    handleLicenseSubmit: function() {
                        var t = this;
                        return this.license_error = !1, !(!this.is_pro && 0 === this.license.length) && (this.is_pro && this.license.length < 16 ? (this.license_error = !0, !1) : (this.$store.dispatch("$_app/start_loading"), void(this.is_pro ? this.$store.dispatch("$_settings/verifyLicense", this.license).then((function(e) {
                            e.success ? (t.verified = !0, t.$swal({
                                title: Object(c["a"])("Successful Verification!", "mo2f-setup"),
                                html: e.data.message,
                                width: 450,
                                showCloseButton: !0,
                                customClass: {
                                    container: "mo2f-setup-swal mo2f-setup-swal-alert"
                                }
                            })) : t.$swal({
                                title: Object(c["a"])("Verification Error!", "mo2f-setup"),
                                html: e.data,
                                width: 450,
                                showCloseButton: !0,
                                customClass: {
                                    container: "mo2f-setup-swal mo2f-setup-swal-alert"
                                }
                            })
                        })).finally((function() {
                            t.$store.dispatch("$_app/stop_loading")
                        })) : this.$store.dispatch("$_settings/upgradePlugin", this.license).then((function(e) {
                            if (e.success && ie()(e, "data.redirect_url")) return window.location = e.data.redirect_url;
                            t.$store.dispatch("$_app/stop_loading"), t.$swal({
                                title: e.success ? Object(c["a"])("Successful Upgrade!", "mo2f-setup") : Object(c["a"])("Upgrade Failed!", "mo2f-setup"),
                                html: e.data,
                                width: 450,
                                showCloseButton: !0,
                                customClass: {
                                    container: "mo2f-setup-swal mo2f-setup-swal-alert"
                                }
                            })
                        })))))
                    },
                    handleSubmit: function() {
                        this.nextStep()
                    },
                    nextStep: function() {
                        this.$next_step()
                    },
                    previousStep: function() {
                        this.$previous_step()
                    },
                    prepareLongCheckbox: function(t, e) {
                        return '<label for="email_log" class="settings-input-long-checkbox settings-input-long-checkbox-checked settings-input-long-checkbox-disabled">\n\t\t\t\t\t\t<div class="settings-input-long-checkbox-header">\n\t\t\t\t\t\t\t<span class="title-container">\n\t\t\t\t\t\t\t\t<span class="label">\n\t\t\t\t\t\t\t\t\t'.concat(t, '\n\t\t\t\t\t\t\t\t</span>\n\t\t\t\t\t\t\t\t<img src="').concat(this.pro_badge, '" alt="').concat(this.text_pro_badge, '" class="mo2f-setup-pro-badge">\n\t\t\t\t\t\t\t</span>\n\t\t\t\t\t\t\t<p class="description">\n\t\t\t\t\t\t\t\t').concat(e, '\n\t\t\t\t\t\t\t</p>\n\t\t\t\t\t\t</div>\n\t\t\t\t\t\t<span class="settings-input-long-checkbox-container">\n\t\t\t\t\t\t\t<span class="checkbox checkbox-checked checkbox-disabled">\n\t\t\t\t\t\t\t\t<svg viewBox="0 0 512 512" role="img" class="icon" data-icon="check" data-prefix="fas" focusable="false" aria-hidden="true" xmlns="http://www.w3.org/2000/svg" width="16"><path xmlns="http://www.w3.org/2000/svg" fill="currentColor" d="M173.898 439.404l-166.4-166.4c-9.997-9.997-9.997-26.206 0-36.204l36.203-36.204c9.997-9.998 26.207-9.998 36.204 0L192 312.69 432.095 72.596c9.997-9.997 26.207-9.997 36.204 0l36.203 36.204c9.997 9.997 9.997 26.206 0 36.204l-294.4 294.401c-9.998 9.997-26.207 9.997-36.204-.001z"></path></svg>\n\t\t\t\t\t\t\t</span>\n\t\t\t\t\t\t\t<input id="email_log" type="checkbox" name="email_log" disabled="disabled">\n\t\t\t\t\t\t</span>\n\t\t\t\t\t</label>')
                    },
                    prepareProFeaturesHtml: function() {
                        var t = "<div>";
                        return this.selectedProFeatures.includes("email_log") && (t += this.prepareLongCheckbox(this.text_email_log, this.text_email_log_desc)), this.selectedProFeatures.includes("manage_notifications") && (t += this.prepareLongCheckbox(this.text_manage_notifications, this.text_manage_notifications_desc)), this.selectedProFeatures.includes("network_settings") && (t += this.prepareLongCheckbox(this.text_network_settings, this.text_network_settings_desc)), t + "</div>"
                    }
                },
                mounted: function() {
                    var t = this;
                    if (!this.is_pro && this.selectedProFeatures.length > 0) {
                        var e = this.prepareProFeaturesHtml();
                        this.$swal({
                            title: Object(c["a"])("Would you like to purchase the following features now?", "mo2f-setup"),
                            html: '<p class="subtitle">'.concat(Object(c["a"])("These features are available as part of WP Mail SMTP Pro plan.", "mo2f-setup"), "</p>\n\t\t\t\t\t\t").concat(e, '\n\t\t\t\t\t\t<p class="bonus">').concat(Object(c["c"])(Object(c["a"])("%1$sBonus:%2$s You can upgrade to the Pro plan and %3$ssave %5$s today%4$s, automatically applied at checkout.", "mo2f-setup"), "<b>", "</b>", '<span class="medium-bold">', "</span>", "$50"), "</p>\n\t\t\t\t\t"),
                            width: 850,
                            showCloseButton: !0,
                            allowOutsideClick: !1,
                            allowEscapeKey: !1,
                            allowEnterKey: !1,
                            customClass: {
                                container: "mo2f-setup-swal mo2f-setup-swal-plugin-upgrade"
                            },
                            confirmButtonText: Object(c["a"])("Purchase Now", "mo2f-setup"),
                            cancelButtonText: Object(c["a"])("I'll do it later", "mo2f-setup"),
                            showCancelButton: !0,
                            reverseButtons: !0
                        }).then((function(e) {
                            if (e.value) {
                                var i = window.open(t.$wpms.upgrade_link, "_blank");
                                i.focus()
                            }
                        }))
                    }
                    this.verified = this.$wpms.license_exists
                },
                created: function() {
                    var t = new URLSearchParams(window.location.search);
                    this.$wpms.license_exists && !t.has("upgrade-redirect") && this.nextStep()
                }
            },
            ae = se,
            ne = Object(_["a"])(ae, $t, te, !1, null, null, null),
            oe = ne.exports,
            re = function() {
                var t = this,
                    e = t.$createElement,
                    s = t._self._c || e;
                return s("div", {
                    staticClass: "mo2f-setup-setup-wizard-step mo2f-setup-setup-wizard-check-configuration"
                }, [s("div", {
                    staticClass: "mo2f-setup-setup-wizard-content-container"
                }, [s("div", {
                    staticClass: "mo2f-setup-check-configuration-header"
                }, [s("content-header", {
                    attrs: {
                        title: t.text_header_title,
                        subtitle: t.text_header_subtitle
                    }
                })], 1), s("div", {
                    staticClass: "check-configuration-loading-image-container"
                }, [s("img", {
                    attrs: {
                        src: i("8398"),
                        alt: t.text_image_alt
                    }
                })])])])
            },
            le = [],
            ce = {
                name: "WizardStepCheckConfiguration",
                components: {
                    ContentHeader: h
                },
                data: function() {
                    return {
                        text_header_title: Object(c["a"])("Checking Mailer Configuration", "mo2f-setup"),
                        text_header_subtitle: Object(c["a"])("We're running some tests in the background to make sure everything is set up properly.", "mo2f-setup"),
                        text_image_alt: Object(c["a"])("Checking mailer configuration image", "mo2f-setup")
                    }
                },
                mounted: function() {
                    var t = this;
                    this.$store.dispatch("$_wizard/checkMailerConfiguration").then((function(e) {
                        e.success ? t.$router.push({
                            name: "check_configuration_step_success"
                        }) : t.$router.push({
                            name: "check_configuration_step_failure"
                        })
                    }))
                }
            },
            pe = ce,
            me = Object(_["a"])(pe, re, le, !1, null, null, null),
            ue = me.exports,
            de = function() {
                var t = this,
                    e = t.$createElement,
                    s = t._self._c || e;
                return s("div", {
                    staticClass: "mo2f-setup-setup-wizard-step mo2f-setup-setup-wizard-configuration-success"
                }, [s("div", {
                    staticClass: "mo2f-setup-setup-wizard-content-container"
                }, [s("div", {
                    staticClass: "mo2f-setup-configuration-success-header"
                }, [s("the-wizard-step-counter"), s("content-header", {
                    attrs: {
                        title: t.text_header_title,
                        subtitle: t.text_header_subtitle
                    }
                })], 1), s("div", {
                    staticClass: "plugin-item-container"
                }, [s("p", {
                    staticClass: "medium-bold",
                    domProps: {
                        textContent: t._s(t.text_free_plugins_header)
                    }
                }), s("div", t._l(t.plugins, (function(t, e) {
                    return s("plugin-item", {
                        key: e,
                        attrs: {
                            name: t.name,
                            slug: t.slug,
                            is_installed: t.is_installed,
                            is_activated: t.is_activated
                        }
                    })
                })), 1)]), t.is_pro ? t._e() : s("div", {
                    staticClass: "upgrade-banner-container"
                }, [s("div", {
                    staticClass: "upgrade-banner"
                }, [s("h2", {
                    domProps: {
                        textContent: t._s(t.text_upgrade_title)
                    }
                }), s("p", {
                    staticClass: "subtitle",
                    domProps: {
                        textContent: t._s(t.text_upgrade_subtitle)
                    }
                }), s("div", {
                    staticClass: "checked-item-list"
                }, [s("span", {
                    staticClass: "checked-item"
                }, [s("inline-svg", {
                    staticClass: "icon",
                    attrs: {
                        src: i("3af1"),
                        width: "16",
                        height: "16"
                    }
                }), t._v(" "), s("span", [t._v(t._s(t.text_email_log))])], 1), s("span", {
                    staticClass: "checked-item"
                }, [s("inline-svg", {
                    staticClass: "icon",
                    attrs: {
                        src: i("3af1"),
                        width: "16",
                        height: "16"
                    }
                }), t._v(" "), s("span", [t._v(t._s(t.text_manage_notifications))])], 1), s("span", {
                    staticClass: "checked-item"
                }, [s("inline-svg", {
                    staticClass: "icon",
                    attrs: {
                        src: i("3af1"),
                        width: "16",
                        height: "16"
                    }
                }), t._v(" "), s("span", [t._v(t._s(t.text_network_settings))])], 1)]), s("button", {
                    staticClass: "mo2f-setup-button mo2f-setup-button-success",
                    attrs: {
                        type: "button"
                    },
                    domProps: {
                        textContent: t._s(t.text_upgrade_button)
                    },
                    on: {
                        click: t.openUpgradePage
                    }
                })]), s("p", {
                    staticClass: "bonus",
                    domProps: {
                        innerHTML: t._s(t.text_bonus)
                    }
                })])]), s("div", {
                    staticClass: "mo2f-setup-separator mo2f-setup-separator-no-margin"
                }), s("div", {
                    staticClass: "mo2f-setup-setup-wizard-step-footer"
                }, [s("button", {
                    staticClass: "mo2f-setup-button",
                    attrs: {
                        type: "button",
                        name: "send_test_email"
                    },
                    domProps: {
                        textContent: t._s(t.text_test_email)
                    },
                    on: {
                        click: function(e) {
                            return e.preventDefault(), t.handleTestEmail(e)
                        }
                    }
                }), s("button", {
                    staticClass: "mo2f-setup-button",
                    attrs: {
                        type: "button",
                        name: "send_feedback"
                    },
                    domProps: {
                        textContent: t._s(t.text_send_feedback)
                    },
                    on: {
                        click: function(e) {
                            return e.preventDefault(), t.handleFeedback(e)
                        }
                    }
                }), s("button", {
                    staticClass: "mo2f-setup-button mo2f-setup-button-main",
                    attrs: {
                        type: "button",
                        name: "finish_setup"
                    },
                    domProps: {
                        textContent: t._s(t.text_finish)
                    },
                    on: {
                        click: function(e) {
                            return e.preventDefault(), t.handleFinish(e)
                        }
                    }
                })])])
            },
            _e = [],
            fe = function() {
                var t = this,
                    e = t.$createElement,
                    i = t._self._c || e;
                return i("div", {
                    class: "mo2f-setup-plugin-item mo2f-setup-plugin-" + t.slug
                }, [i("span", {
                    staticClass: "mo2f-setup-plugin-item-title-container"
                }, [t.logo.length ? i("img", {
                    staticClass: "mo2f-setup-logo-icon",
                    attrs: {
                        src: t.logo2x,
                        srcset: t.logo_srcset,
                        alt: t.name
                    }
                }) : t._e(), i("span", {
                    domProps: {
                        textContent: t._s(t.name)
                    }
                })]), i("button", {
                    staticClass: "mo2f-setup-button",
                    attrs: {
                        type: "button",
                        disabled: t.is_activated || t.is_installed
                    },
                    on: {
                        click: function(e) {
                            return e.preventDefault(), t.handleClick(e)
                        }
                    }
                }, [t.loading ? i("loader", {
                    attrs: {
                        color: "white"
                    }
                }) : i("span", [t._v(" " + t._s(t.text_button_label) + " ")])], 1)])
            },
            he = [],
            ge = function() {
                var t = this,
                    e = t.$createElement,
                    i = t._self._c || e;
                return i("img", {
                    class: "mo2f-setup-loader mo2f-setup-loader-" + t.size,
                    attrs: {
                        src: t.image,
                        alt: t.text_loading
                    }
                })
            },
            we = [],
            be = {
                name: "Loader",
                props: {
                    color: {
                        type: String,
                        default: ""
                    },
                    size: {
                        type: String,
                        default: "sm"
                    }
                },
                data: function() {
                    return {
                        image: i("5711")("./loading".concat(this.color.length ? "-" + this.color : "", ".svg")),
                        text_loading: Object(c["a"])("Loading", "mo2f-setup")
                    }
                }
            },
            Ae = be,
            ve = Object(_["a"])(Ae, ge, we, !1, null, null, null),
            xe = ve.exports,
            ye = {
                name: "PluginItem",
                components: {
                    Loader: xe
                },
                props: {
                    slug: String,
                    name: String,
                    is_installed: Boolean,
                    is_activated: Boolean
                },
                data: function() {
                    return {
                        loading: !1,
                        logo: i("bbc2")("./".concat(this.slug, ".png")),
                        logo2x: i("7c9b")("./".concat(this.slug, "@2x.png"))
                    }
                },
                computed: {
                    text_button_label: function() {
                        var t = Object(c["a"])("Install", "mo2f-setup");
                        return this.is_installed && !this.is_activated && (t = Object(c["a"])("Installed", "mo2f-setup")), this.is_activated && (t = Object(c["a"])("Activated", "mo2f-setup")), t
                    },
                    logo_srcset: function() {
                        return "".concat(this.logo, ", ").concat(this.logo2x, " 2x")
                    }
                },
                methods: {
                    handleClick: function() {
                        var t = this;
                        this.loading || (this.loading = !0, this.$store.dispatch("$_plugins/installPlugin", this.slug).then((function(e) {
                            e.success && t.$wpms_success_toast({
                                title: "Plugin: ".concat(t.name, " installed!")
                            }), t.loading = !1
                        })))
                    }
                }
            },
            Ce = ye,
            ke = (i("f8b1"), Object(_["a"])(Ce, fe, he, !1, null, "6b0d8118", null)),
            Oe = ke.exports,
            je = {
                name: "WizardStepConfigurationSuccess",
                components: {
                    ContentHeader: h,
                    TheWizardStepCounter: X,
                    PluginItem: Oe
                },
                data: function() {
                    return {
                        text_header_title: Object(c["a"])("Congrats, you’ve successfully set up WP Mail SMTP!", "mo2f-setup"),
                        text_header_subtitle: Object(c["a"])("Here’s what to do next:", "mo2f-setup"),
                        text_free_plugins_header: Object(c["a"])("Check out our other free WordPress plugins:", "mo2f-setup"),
                        text_upgrade_title: Object(c["a"])("Upgrade to Unlock Powerful SMTP Features", "mo2f-setup"),
                        text_upgrade_subtitle: Object(c["a"])("Upgrade to WP Mail SMTP Pro to unlock more awesome features and experience why WP Mail SMTP is used by over 2,000,000 websites.", "mo2f-setup"),
                        text_network_settings: Object(c["a"])("Multisite Network Settings", "mo2f-setup"),
                        text_manage_notifications: Object(c["a"])("Manage Default Notifications", "mo2f-setup"),
                        text_email_log: Object(c["a"])("Detailed Email Logs", "mo2f-setup"),
                        text_upgrade_button: Object(c["a"])("Upgrade to Pro Today", "mo2f-setup"),
                        text_test_email: Object(c["a"])("Send a Test Email", "mo2f-setup"),
                        text_send_feedback: Object(c["a"])("Send us Feedback", "mo2f-setup"),
                        text_finish: Object(c["a"])("Finish Setup", "mo2f-setup"),
                        text_bonus: Object(c["c"])(Object(c["a"])("%1$sBonus:%2$s You can upgrade to the Pro plan and %3$ssave %5$s today%4$s, automatically applied at checkout.", "mo2f-setup"), "<b>", "</b>", '<span class="medium-bold">', "</span>", "$50"),
                        star_image_html: '<img src="'.concat(i("6f43"), '" alt="').concat(Object(c["a"])("Star icon", "mo2f-setup"), '" class="icon" / >'),
                        is_pro: this.$wpms.is_pro
                    }
                },
                computed: Object(n["a"])({}, Object(nt["b"])({
                    plugins: "$_plugins/partner_plugins"
                })),
                methods: {
                    handleTestEmail: function() {
                        return window.location = this.$wpms.email_test_tab_url
                    },
                    goodFeedback: function() {
                        this.$swal({
                            title: Object(c["a"])("Thanks for the feedback!", "mo2f-setup"),
                            html: "".concat(Object(c["c"])(Object(c["a"])("Help us spread the word %1$sby giving WP Mail SMTP a 5-star rating %3$s(%4$s) on WordPress.org%2$s. Thanks for your support and we look forward to bringing you more awesome features.", "mo2f-setup"), '<span class="medium-bold">', "</span>", "<br>", this.star_image_html + "" + this.star_image_html + this.star_image_html + this.star_image_html + this.star_image_html)),
                            width: 650,
                            showCloseButton: !0,
                            allowEnterKey: !1,
                            confirmButtonText: Object(c["a"])("Rate on WordPress.org", "mo2f-setup"),
                            customClass: {
                                container: "mo2f-setup-swal mo2f-setup-swal-feedback-good"
                            }
                        }).then((function(t) {
                            if (t.value) {
                                var e = window.open("https://wordpress.org/support/plugin/mo2f-setup/reviews/#new-post", "_blank");
                                e.focus()
                            }
                        }))
                    },
                    badFeedback: function() {
                        var t = this;
                        this.$swal({
                            title: Object(c["a"])("What could we do to improve?", "mo2f-setup"),
                            html: "".concat(Object(c["a"])("We're sorry things didn't go smoothly for you, and want to keep improving. Please let us know any specific parts of this process that you think could be better. We really appreciate any details you're willing to share!", "mo2f-setup"), '\n\t\t\t\t\t\t\t\t<textarea id="feedback" name="feedback" rows="9"></textarea>\n\t\t\t\t\t\t\t\t<span class="permission-container">\n\t\t\t\t\t\t\t\t\t<input type="checkbox" id="permission" name="permission">\n\t\t\t\t\t\t\t\t\t<label for="permission">').concat(Object(c["a"])("Yes, I give WP Mail SMTP permission to contact me for any follow up questions.", "mo2f-setup"), "</label>\n\t\t\t\t\t\t\t\t</span>\n\t\t\t\t\t\t\t"),
                            width: 650,
                            showCloseButton: !0,
                            allowEnterKey: !1,
                            allowOutsideClick: !1,
                            allowEscapeKey: !1,
                            confirmButtonText: Object(c["a"])("Submit Feedback", "mo2f-setup"),
                            customClass: {
                                container: "mo2f-setup-swal mo2f-setup-swal-feedback-bad"
                            },
                            preConfirm: function() {
                                return [document.getElementById("feedback").value, document.getElementById("permission").checked]
                            }
                        }).then((function(e) {
                            if (e.value) {
                                var i = e.value[0],
                                    s = e.value[1];
                                t.$store.dispatch("$_wizard/sendFeedback", {
                                    feedback: i,
                                    permission: s
                                })
                            }
                        }))
                    },
                    handleFeedback: function() {
                        var t = this;
                        this.$swal({
                            title: Object(c["a"])("How was your WP Mail SMTP setup experience?", "mo2f-setup"),
                            text: Object(c["a"])("Our goal is to make your SMTP setup as simple and straightforward as possible. We'd love to know how this process went for you!", "mo2f-setup"),
                            width: 650,
                            showCloseButton: !0,
                            allowEnterKey: !1,
                            customClass: {
                                container: "mo2f-setup-swal mo2f-setup-swal-feedback"
                            },
                            showCancelButton: !0
                        }).then((function(e) {
                            e.value ? t.goodFeedback() : void 0 !== e.dismiss && "cancel" === e.dismiss && t.badFeedback()
                        }))
                    },
                    handleFinish: function() {
                        return window.location = this.$wpms.exit_url
                    },
                    openUpgradePage: function() {
                        var t = window.open(this.$wpms.upgrade_link, "_blank");
                        t.focus()
                    }
                }
            },
            Se = je,
            Pe = Object(_["a"])(Se, de, _e, !1, null, null, null),
            Ee = Pe.exports,
            Te = function() {
                var t = this,
                    e = t.$createElement,
                    s = t._self._c || e;
                return s("div", {
                    staticClass: "mo2f-setup-setup-wizard-step mo2f-setup-setup-wizard-configuration-failure"
                }, [s("div", {
                    staticClass: "mo2f-setup-setup-wizard-content-container"
                }, [s("div", {
                    staticClass: "mo2f-setup-configuration-failure-header"
                }, [s("the-wizard-step-counter"), s("content-header", {
                    attrs: {
                        title: t.text_header_title,
                        subtitle: t.text_header_subtitle
                    }
                })], 1), s("div", {
                    staticClass: "start-troubleshooting-arrow-container"
                }, [s("inline-svg", {
                    staticClass: "icon",
                    attrs: {
                        src: i("50bf"),
                        width: "112",
                        height: "112"
                    }
                })], 1)]), s("div", {
                    staticClass: "mo2f-setup-separator mo2f-setup-separator-no-margin"
                }), s("div", {
                    staticClass: "mo2f-setup-setup-wizard-step-footer"
                }, [s("button", {
                    staticClass: "mo2f-setup-button mo2f-setup-button-main",
                    attrs: {
                        type: "button",
                        name: "start_troubleshooting"
                    },
                    domProps: {
                        textContent: t._s(t.text_start_troubleshooting)
                    },
                    on: {
                        click: function(e) {
                            return e.preventDefault(), t.handleTroubleshooting(e)
                        }
                    }
                }), s("button", {
                    staticClass: "mo2f-setup-button",
                    attrs: {
                        type: "button",
                        name: "finish_setup"
                    },
                    domProps: {
                        textContent: t._s(t.text_finish)
                    },
                    on: {
                        click: function(e) {
                            return e.preventDefault(), t.handleFinish(e)
                        }
                    }
                })])])
            },
            ze = [],
            Be = {
                name: "WizardStepConfigurationFailure",
                components: {
                    ContentHeader: h,
                    TheWizardStepCounter: X
                },
                data: function() {
                    return {
                        text_header_title: Object(c["a"])("Whoops, looks like things aren’t configured properly.", "mo2f-setup"),
                        text_header_subtitle: Object(c["a"])("We just tried to send a test email, but something prevented that from working. To see more details about the issue we detected, as well as our suggestions to fix it, please start troubleshooting.", "mo2f-setup"),
                        text_start_troubleshooting: Object(c["a"])("Start Troubleshooting", "mo2f-setup"),
                        text_send_feedback: Object(c["a"])("Send us Feedback", "mo2f-setup"),
                        text_finish: Object(c["a"])("Finish Setup", "mo2f-setup")
                    }
                },
                methods: {
                    handleTroubleshooting: function() {
                        return window.location = "".concat(this.$wpms.email_test_tab_url, "&auto-start=1")
                    },
                    handleFinish: function() {
                        return window.location = this.$wpms.exit_url
                    }
                }
            },
            Ie = Be,
            Me = Object(_["a"])(Ie, Te, ze, !1, null, null, null),
            De = Me.exports,
            Fe = function() {
                var t = this,
                    e = t.$createElement,
                    i = t._self._c || e;
                return i("div", {
                    staticClass: "mo2f-setup-setup-wizard-step-configure-mailer-settings mo2f-setup-setup-wizard-step-configure-mailer-settings-smtp"
                }, [i("p", {
                    staticClass: "mailer-description",
                    domProps: {
                        innerHTML: t._s(t.description)
                    }
                }), i("div", {
                    staticClass: "mo2f-setup-setup-wizard-form"
                }, [i("settings-input-text", {
                    attrs: {
                        name: "host",
                        label: t.text_host_label,
                        is_error: t.field_errors.includes("host")
                    },
                    on: {
                        is_error_update: function(e) {
                            return t.removeFieldError("host")
                        }
                    },
                    model: {
                        value: t.host,
                        callback: function(e) {
                            t.host = e
                        },
                        expression: "host"
                    }
                }), i("settings-input-radio", {
                    attrs: {
                        name: "encryption",
                        label: t.text_encryption_label,
                        options: t.encryptionOptions,
                        description: t.text_encryption_description
                    },
                    on: {
                        input: t.encryptionChanged
                    },
                    model: {
                        value: t.encryption,
                        callback: function(e) {
                            t.encryption = e
                        },
                        expression: "encryption"
                    }
                }), i("settings-input-number", {
                    attrs: {
                        name: "port",
                        label: t.text_port_label,
                        is_error: t.field_errors.includes("port")
                    },
                    on: {
                        is_error_update: function(e) {
                            return t.removeFieldError("port")
                        }
                    },
                    model: {
                        value: t.port,
                        callback: function(e) {
                            t.port = e
                        },
                        expression: "port"
                    }
                }), i("settings-input-switch", {
                    directives: [{
                        name: "show",
                        rawName: "v-show",
                        value: t.show_autotls,
                        expression: "show_autotls"
                    }],
                    attrs: {
                        name: "autotls",
                        title: t.text_autotls_title,
                        label: t.text_autotls_label,
                        description: t.text_autotls_description
                    },
                    model: {
                        value: t.autotls,
                        callback: function(e) {
                            t.autotls = e
                        },
                        expression: "autotls"
                    }
                }), i("div", {
                    staticClass: "mo2f-setup-separator mo2f-setup-separator-big-margin"
                }), i("settings-input-switch", {
                    attrs: {
                        name: "auth",
                        title: t.text_auth_title,
                        label: t.text_auth_label
                    },
                    model: {
                        value: t.auth,
                        callback: function(e) {
                            t.auth = e
                        },
                        expression: "auth"
                    }
                }), i("settings-input-text", {
                    directives: [{
                        name: "show",
                        rawName: "v-show",
                        value: t.auth,
                        expression: "auth"
                    }],
                    attrs: {
                        name: "user",
                        label: t.text_user_label,
                        is_error: t.field_errors.includes("user")
                    },
                    on: {
                        is_error_update: function(e) {
                            return t.removeFieldError("user")
                        }
                    },
                    model: {
                        value: t.user,
                        callback: function(e) {
                            t.user = e
                        },
                        expression: "user"
                    }
                }), i("settings-input-text", {
                    directives: [{
                        name: "show",
                        rawName: "v-show",
                        value: t.auth,
                        expression: "auth"
                    }],
                    attrs: {
                        name: "pass",
                        type: "password",
                        label: t.text_pass_label,
                        is_error: t.field_errors.includes("pass")
                    },
                    on: {
                        is_error_update: function(e) {
                            return t.removeFieldError("pass")
                        }
                    },
                    model: {
                        value: t.pass,
                        callback: function(e) {
                            t.pass = e
                        },
                        expression: "pass"
                    }
                }), i("div", {
                    staticClass: "mo2f-setup-separator mo2f-setup-separator-big-margin"
                }), i("settings-input-text", {
                    attrs: {
                        name: "from_name",
                        label: t.text_from_name_label,
                        description: t.text_from_name_description
                    },
                    model: {
                        value: t.from_name,
                        callback: function(e) {
                            t.from_name = e
                        },
                        expression: "from_name"
                    }
                }), i("settings-input-switch", {
                    attrs: {
                        classname: "sub_setting",
                        name: "from_name_force",
                        title: t.text_force_from_name_title,
                        label: t.text_force_from_name_label
                    },
                    model: {
                        value: t.from_name_force,
                        callback: function(e) {
                            t.from_name_force = e
                        },
                        expression: "from_name_force"
                    }
                }), i("settings-input-text", {
                    attrs: {
                        name: "from_email",
                        type: "email",
                        label: t.text_from_email_label,
                        description: t.text_from_email_description,
                        is_error: t.field_errors.includes("from_email")
                    },
                    on: {
                        is_error_update: function(e) {
                            return t.removeFieldError("from_email")
                        }
                    },
                    model: {
                        value: t.from_email,
                        callback: function(e) {
                            t.from_email = e
                        },
                        expression: "from_email"
                    }
                }), i("settings-input-switch", {
                    attrs: {
                        classname: "sub_setting",
                        name: "from_email_force",
                        title: t.text_force_from_email_title,
                        label: t.text_force_from_email_label
                    },
                    model: {
                        value: t.from_email_force,
                        callback: function(e) {
                            t.from_email_force = e
                        },
                        expression: "from_email_force"
                    }
                })], 1)])
            },
            Ne = [],
            Qe = (i("a4d3"), i("e01a"), function() {
                var t = this,
                    e = t.$createElement,
                    i = t._self._c || e;
                return i("div", {
                    staticClass: "settings-input-radio"
                }, [t.label ? i("span", {
                    staticClass: "settings-input-label-container"
                }, [i("span", {
                    staticClass: "label",
                    domProps: {
                        innerHTML: t._s(t.label)
                    }
                })]) : t._e(), i("div", {
                    staticClass: "settings-input-radio-container"
                }, t._l(t.options, (function(e) {
                    return i("label", {
                        key: e.value,
                        class: t.labelClass(e.value),
                        attrs: {
                            for: "mo2f-setup-settings-radio-" + t.name + "[" + e.value + "]"
                        }
                    }, [i("span", {
                        class: t.titleClass(e.value)
                    }), i("input", {
                        directives: [{
                            name: "model",
                            rawName: "v-model",
                            value: t.selected,
                            expression: "selected"
                        }],
                        attrs: {
                            id: "mo2f-setup-settings-radio-" + t.name + "[" + e.value + "]",
                            type: "radio",
                            name: t.name,
                            autocomplete: "off",
                            readonly: t.disabled
                        },
                        domProps: {
                            value: e.value,
                            checked: t.isChecked(e.value),
                            checked: t._q(t.selected, e.value)
                        },
                        on: {
                            change: [function(i) {
                                t.selected = e.value
                            }, t.updateSetting]
                        }
                    }), i("span", {
                        staticClass: "input-label",
                        domProps: {
                            innerHTML: t._s(e.label)
                        }
                    })])
                })), 0), t.description ? i("p", {
                    staticClass: "description",
                    domProps: {
                        innerHTML: t._s(t.description)
                    }
                }) : t._e()])
            }),
            Le = [],
            We = {
                name: "SettingsInputRadio",
                props: {
                    options: Array,
                    label: String,
                    name: String,
                    value: String,
                    description: String,
                    disabled: Boolean
                },
                data: function() {
                    return {
                        has_error: !1
                    }
                },
                computed: {
                    selected: {
                        get: function() {
                            return this.value
                        },
                        set: function(t) {
                            this.$emit("input", t)
                        }
                    }
                },
                methods: {
                    updateSetting: function() {
                        if (this.disabled) return !1
                    },
                    titleClass: function(t) {
                        var e = "mo2f-setup-styled-radio";
                        return this.isChecked(t) && (e += " mo2f-setup-styled-radio-checked"), e
                    },
                    labelClass: function(t) {
                        var e = "";
                        return this.isChecked(t) && (e += " mo2f-setup-styled-radio-label-checked"), e
                    },
                    isChecked: function(t) {
                        return t === this.selected
                    }
                }
            },
            Ue = We,
            He = Object(_["a"])(Ue, Qe, Le, !1, null, null, null),
            Re = He.exports,
            Ge = function() {
                var t = this,
                    e = t.$createElement,
                    s = t._self._c || e;
                return s("div", {
                    staticClass: "settings-input-number",
                    class: {
                        "settings-input-number-error": t.field_error
                    }
                }, [s("label", {
                    staticClass: "settings-input-label-container",
                    attrs: {
                        for: t.id
                    }
                }, [t.label ? s("span", {
                    staticClass: "label",
                    domProps: {
                        innerHTML: t._s(t.label)
                    }
                }) : t._e(), t.tooltip ? s("settings-info-tooltip", {
                    attrs: {
                        content: t.tooltip
                    }
                }) : t._e()], 1), s("input", {
                    directives: [{
                        name: "model",
                        rawName: "v-model",
                        value: t.currentValue,
                        expression: "currentValue"
                    }],
                    attrs: {
                        id: t.id,
                        type: "number",
                        name: t.name,
                        placeholder: t.placeholder,
                        min: t.min,
                        max: t.max,
                        step: t.step,
                        readonly: t.disabled
                    },
                    domProps: {
                        value: t.currentValue
                    },
                    on: {
                        change: t.inputUpdate,
                        input: function(e) {
                            e.target.composing || (t.currentValue = e.target.value)
                        }
                    }
                }), t.has_error ? s("p", {
                    staticClass: "error"
                }, [s("inline-svg", {
                    staticClass: "icon",
                    attrs: {
                        src: i("827a"),
                        width: "16"
                    }
                }), s("span", {
                    domProps: {
                        innerHTML: t._s(t.has_error)
                    }
                })], 1) : t._e(), t.description ? s("p", {
                    staticClass: "description",
                    domProps: {
                        innerHTML: t._s(t.description)
                    }
                }) : t._e()])
            },
            Ve = [],
            Ye = (i("a9e3"), {
                name: "SettingsInputNumber",
                components: {
                    SettingsInfoTooltip: Nt
                },
                props: {
                    name: String,
                    value: [Number, String],
                    label: String,
                    description: String,
                    placeholder: String,
                    type: {
                        type: String,
                        default: "text"
                    },
                    tooltip: String,
                    default_value: String,
                    min: Number,
                    max: Number,
                    disabled: Boolean,
                    step: {
                        type: Number,
                        default: 1
                    },
                    round: {
                        type: Boolean,
                        default: !1
                    },
                    is_error: Boolean
                },
                data: function() {
                    return {
                        has_error: !1,
                        id: "input-" + this.name,
                        text_error_value: Object(c["c"])(Object(c["a"])("Please enter a value between %1$s and %2$s", "mo2f-setup"), "<strong>" + this.min + "</strong>", "<strong>" + this.max + "</strong>"),
                        text_error_round: Object(c["a"])("Value has to be a round number", "mo2f-setup")
                    }
                },
                computed: {
                    currentValue: {
                        get: function() {
                            return this.value
                        },
                        set: function(t) {
                            this.$emit("is_error_update", !1), this.$emit("input", parseInt(t, 10))
                        }
                    },
                    field_error: {
                        get: function() {
                            return this.is_error
                        },
                        set: function(t) {
                            this.$emit("is_error_update", t)
                        }
                    }
                },
                methods: {
                    inputUpdate: function(t) {
                        if (this.disabled) return !1;
                        this.has_error = !1;
                        var e = parseFloat(t.target.value);
                        return this.round && e % 1 !== 0 ? (this.has_error = this.text_error_round, !1) : e > this.max || e < this.min ? (this.has_error = this.text_error_value, !1) : void 0
                    }
                }
            }),
            Je = Ye,
            Ke = Object(_["a"])(Je, Ge, Ve, !1, null, null, null),
            qe = Ke.exports,
            Ze = function() {
                var t = this,
                    e = t.$createElement,
                    i = t._self._c || e;
                return i("div", {
                    staticClass: "settings-input-switch",
                    class: t.classname
                }, [i("label", {
                    attrs: {
                        for: t.id
                    }
                }, [i("span", {
                    staticClass: "title settings-input-label-container"
                }, [i("span", {
                    staticClass: "label",
                    domProps: {
                        innerHTML: t._s(t.title)
                    }
                }), t.tooltip ? i("settings-info-tooltip", {
                    attrs: {
                        content: t.tooltip
                    }
                }) : t._e()], 1), t.description ? i("p", {
                    staticClass: "description",
                    domProps: {
                        innerHTML: t._s(t.description)
                    }
                }) : t._e(), i("span", {
                    staticClass: "control"
                }, [i("input", {
                    directives: [{
                        name: "model",
                        rawName: "v-model",
                        value: t.currentValue,
                        expression: "currentValue"
                    }],
                    attrs: {
                        id: t.id,
                        type: "checkbox",
                        name: t.name,
                        disabled: t.disabled
                    },
                    domProps: {
                        checked: Array.isArray(t.currentValue) ? t._i(t.currentValue, null) > -1 : t.currentValue
                    },
                    on: {
                        change: [function(e) {
                            var i = t.currentValue,
                                s = e.target,
                                a = !!s.checked;
                            if (Array.isArray(i)) {
                                var n = null,
                                    o = t._i(i, n);
                                s.checked ? o < 0 && (t.currentValue = i.concat([n])) : o > -1 && (t.currentValue = i.slice(0, o).concat(i.slice(o + 1)))
                            } else t.currentValue = a
                        }, t.inputUpdate]
                    }
                }), i("span", {
                    class: {
                        "toggle-switch": !0, "toggle-switch-with-label": t.label
                    }
                }), t.label ? i("span", {
                    staticClass: "label-description",
                    domProps: {
                        innerHTML: t._s(t.label)
                    }
                }) : t._e()])])])
            },
            Xe = [],
            $e = {
                name: "SettingsInputSwitch",
                components: {
                    SettingsInfoTooltip: Nt
                },
                props: {
                    name: String,
                    value: Boolean,
                    title: String,
                    label: String,
                    description: String,
                    tooltip: String,
                    classname: String,
                    disabled: Boolean
                },
                data: function() {
                    return {
                        has_error: !1,
                        id: "input-" + this.name
                    }
                },
                computed: {
                    currentValue: {
                        get: function() {
                            return this.value
                        },
                        set: function(t) {
                            this.$emit("input", !!t)
                        }
                    }
                },
                methods: {
                    inputUpdate: function() {
                        if (this.disabled) return !1
                    }
                }
            },
            ti = $e,
            ei = Object(_["a"])(ti, Ze, Xe, !1, null, null, null),
            ii = ei.exports,
            si = {
                name: "WizardStepConfigureMailerSmtp",
                components: {
                    SettingsInputText: Ut,
                    SettingsInputRadio: Re,
                    SettingsInputNumber: qe,
                    SettingsInputSwitch: ii
                },
                data: function() {
                    return {
                        mailer: "smtp",
                        text_host_label: Object(c["a"])("SMTP Host", "mo2f-setup"),
                        text_encryption_label: Object(c["a"])("Encryption", "mo2f-setup"),
                        text_port_label: Object(c["a"])("SMTP Port", "mo2f-setup"),
                        text_autotls_title: Object(c["a"])("Auto TLS", "mo2f-setup"),
                        text_autotls_label: Object(c["a"])("Enable Auto TLS", "mo2f-setup"),
                        text_autotls_description: Object(c["a"])("By default, TLS encryption is automatically used if the server supports it (recommended). In some cases, due to server misconfigurations, this can cause issues and may need to be disabled.", "mo2f-setup"),
                        text_auth_title: Object(c["a"])("Authentication", "mo2f-setup"),
                        text_auth_label: Object(c["a"])("Enable Authentication", "mo2f-setup"),
                        text_user_label: Object(c["a"])("SMTP Username", "mo2f-setup"),
                        text_pass_label: Object(c["a"])("SMTP Password", "mo2f-setup"),
                        text_from_name_label: Object(c["a"])("From Name", "mo2f-setup"),
                        text_force_from_name_title: Object(c["a"])("Force From Name", "mo2f-setup"),
                        text_from_email_label: Object(c["a"])("From Email", "mo2f-setup"),
                        text_force_from_email_title: Object(c["a"])("Force From Email", "mo2f-setup"),
                        text_from_name_description: Object(c["a"])("The name that emails are sent from.", "mo2f-setup"),
                        text_from_email_description: Object(c["a"])("The email address that emails are sent from.", "mo2f-setup"),
                        text_encryption_description: Object(c["a"])("For most servers TLS is the recommended option. If your SMTP provider offers both SSL and TLS options, we recommend using TLS.", "mo2f-setup"),
                        text_force_from_name_label: Object(c["a"])("If enabled, the From Name setting above will be used for all emails, ignoring values set by other plugins.", "mo2f-setup"),
                        text_force_from_email_label: Object(c["a"])("If enabled, the From Email setting above will be used for all emails, ignoring values set by other plugins.", "mo2f-setup"),
                        description: this.$wpms.mailer_options.smtp.description,
                        encryptionOptions: [{
                            label: Object(c["a"])("None", "mo2f-setup"),
                            value: "none",
                            default_port: 25
                        }, {
                            label: Object(c["a"])("SSL", "mo2f-setup"),
                            value: "ssl",
                            default_port: 465
                        }, {
                            label: Object(c["a"])("TLS", "mo2f-setup"),
                            value: "tls",
                            default_port: 587
                        }],
                        show_autotls: !0,
                        show_user_and_pass: !0,
                        field_errors: []
                    }
                },
                computed: Object(n["a"])({}, Object(ut["b"])("$_settings", ["settings.smtp.host", "settings.smtp.auth", "settings.smtp.port", "settings.smtp.encryption", "settings.smtp.user", "settings.smtp.pass", "settings.smtp.autotls", "settings.mail.from_email", "settings.mail.from_name", "settings.mail.from_email_force", "settings.mail.from_name_force"])),
                watch: {
                    encryption: function(t) {
                        this.show_autotls = "tls" !== t
                    }
                },
                methods: {
                    getEncryptionDefaultPort: function(t) {
                        return this.encryptionOptions.find((function(e) {
                            return e.value === t
                        })).default_port
                    },
                    encryptionChanged: function(t) {
                        this.port = this.getEncryptionDefaultPort(t)
                    },
                    areRequiredFieldsValid: function() {
                        var t = !0;
                        return "" === this.host && (t = !1, this.field_errors.push("host")), ("" === this.port || isNaN(this.port)) && (t = !1, this.field_errors.push("port")), this.auth && ("" === this.user && (t = !1, this.field_errors.push("user")), "" === this.pass && (t = !1, this.field_errors.push("pass"))), "" === this.from_email && (t = !1, this.field_errors.push("from_email")), t
                    },
                    removeFieldError: function(t) {
                        this.field_errors = this.field_errors.filter((function(e) {
                            return e !== t
                        }))
                    }
                },
                mounted: function() {
                    "tls" === this.encryption && (this.show_autotls = !1)
                }
            },
            ai = si,
            ni = Object(_["a"])(ai, Fe, Ne, !1, null, null, null),
            oi = ni.exports,
            ri = function() {
                var t = this,
                    e = t.$createElement,
                    s = t._self._c || e;
                return s("div", {
                    staticClass: "mo2f-setup-setup-wizard-step-configure-mailer-settings mo2f-setup-setup-wizard-step-configure-mailer-settings-smtpcom"
                }, [s("p", {
                    staticClass: "mailer-description",
                    domProps: {
                        innerHTML: t._s(t.description)
                    }
                }), s("p", {
                    staticClass: "mailer-description mailer-description-links"
                }, [s("a", {
                    staticClass: "mo2f-setup-button mo2f-setup-button-small mo2f-setup-button-secondary",
                    attrs: {
                        href: "https://wpmailsmtp.com/go/smtp/",
                        target: "_blank",
                        rel: "noopener noreferrer"
                    }
                }, [s("span", {
                    staticClass: "text-with-arrow text-with-arrow-right"
                }, [t._v(" " + t._s(t.text_get_started_button)), s("inline-svg", {
                    staticClass: "icon",
                    attrs: {
                        src: i("107e"),
                        width: "16",
                        height: "23"
                    }
                })], 1)]), s("a", {
                    staticClass: "mo2f-setup-link",
                    attrs: {
                        href: "https://wpmailsmtp.com/docs/how-to-set-up-the-smtp-com-mailer-in-mo2f-setup",
                        target: "_blank",
                        rel: "noopener noreferrer"
                    }
                }, [t._v(t._s(t.text_documentation_link))])]), s("div", {
                    staticClass: "mo2f-setup-setup-wizard-form"
                }, [s("settings-input-text", {
                    attrs: {
                        name: "api_key",
                        type: "password",
                        label: t.text_api_key_label,
                        description: t.text_api_key_description,
                        is_error: t.field_errors.includes("api_key")
                    },
                    on: {
                        is_error_update: function(e) {
                            return t.removeFieldError("api_key")
                        }
                    },
                    model: {
                        value: t.api_key,
                        callback: function(e) {
                            t.api_key = e
                        },
                        expression: "api_key"
                    }
                }), s("settings-input-text", {
                    attrs: {
                        name: "channel",
                        label: t.text_channel_label,
                        description: t.text_channel_description,
                        is_error: t.field_errors.includes("channel")
                    },
                    on: {
                        is_error_update: function(e) {
                            return t.removeFieldError("channel")
                        }
                    },
                    model: {
                        value: t.channel,
                        callback: function(e) {
                            t.channel = e
                        },
                        expression: "channel"
                    }
                }), s("settings-input-text", {
                    attrs: {
                        name: "from_name",
                        label: t.text_from_name_label,
                        description: t.text_from_name_description
                    },
                    model: {
                        value: t.from_name,
                        callback: function(e) {
                            t.from_name = e
                        },
                        expression: "from_name"
                    }
                }), s("settings-input-switch", {
                    attrs: {
                        classname: "sub_setting",
                        name: "from_name_force",
                        title: t.text_force_from_name_title,
                        label: t.text_force_from_name_label
                    },
                    model: {
                        value: t.from_name_force,
                        callback: function(e) {
                            t.from_name_force = e
                        },
                        expression: "from_name_force"
                    }
                }), s("settings-input-text", {
                    attrs: {
                        name: "from_email",
                        type: "email",
                        label: t.text_from_email_label,
                        description: t.text_from_email_description,
                        is_error: t.field_errors.includes("from_email")
                    },
                    on: {
                        is_error_update: function(e) {
                            return t.removeFieldError("from_email")
                        }
                    },
                    model: {
                        value: t.from_email,
                        callback: function(e) {
                            t.from_email = e
                        },
                        expression: "from_email"
                    }
                }), s("settings-input-switch", {
                    attrs: {
                        classname: "sub_setting",
                        name: "from_email_force",
                        title: t.text_force_from_email_title,
                        label: t.text_force_from_email_label
                    },
                    model: {
                        value: t.from_email_force,
                        callback: function(e) {
                            t.from_email_force = e
                        },
                        expression: "from_email_force"
                    }
                })], 1)])
            },
            li = [],
            ci = (i("baa5"), {
                name: "WizardStepConfigureMailerSmtpCom",
                components: {
                    SettingsInputText: Ut,
                    SettingsInputSwitch: ii
                },
                data: function() {
                    return {
                        mailer: "smtpcom",
                        text_api_key_label: Object(c["a"])("API Key", "mo2f-setup"),
                        text_channel_label: Object(c["a"])("Sender Name", "mo2f-setup"),
                        text_api_key_description: Object(c["c"])(Object(c["a"])("%1$sFollow this link%2$s to get an API Key for SMTP.com.", "mo2f-setup"), '<a href="https://my.smtp.com/settings/api" target="_blank" rel="noopener noreferrer">', "</a>"),
                        text_channel_description: Object(c["c"])(Object(c["a"])("%1$sFollow this link%2$s to get a Sender Name for SMTP.com.", "mo2f-setup"), '<a href="https://my.smtp.com/senders/" target="_blank" rel="noopener noreferrer">', "</a>"),
                        text_from_name_label: Object(c["a"])("From Name", "mo2f-setup"),
                        text_force_from_name_title: Object(c["a"])("Force From Name", "mo2f-setup"),
                        text_from_email_label: Object(c["a"])("From Email", "mo2f-setup"),
                        text_force_from_email_title: Object(c["a"])("Force From Email", "mo2f-setup"),
                        text_force_from_name_label: Object(c["a"])("If enabled, the From Name setting above will be used for all emails, ignoring values set by other plugins.", "mo2f-setup"),
                        text_force_from_email_label: Object(c["a"])("If enabled, the From Email setting above will be used for all emails, ignoring values set by other plugins.", "mo2f-setup"),
                        text_from_name_description: Object(c["a"])("The name that emails are sent from.", "mo2f-setup"),
                        text_from_email_description: Object(c["a"])("The email address that emails are sent from.", "mo2f-setup"),
                        text_get_started_button: Object(c["a"])("Get Started with SMTP.com", "mo2f-setup"),
                        text_documentation_link: Object(c["a"])("Read how to set up SMTP.com", "mo2f-setup"),
                        description: this.$wpms.mailer_options.smtpcom.description.substr(0, this.$wpms.mailer_options.smtpcom.description.lastIndexOf("<br><br>")),
                        field_errors: []
                    }
                },
                computed: Object(n["a"])({}, Object(ut["b"])("$_settings", ["settings.smtpcom.api_key", "settings.smtpcom.channel", "settings.mail.from_email", "settings.mail.from_name", "settings.mail.from_email_force", "settings.mail.from_name_force"])),
                methods: {
                    areRequiredFieldsValid: function() {
                        var t = !0;
                        return "" === this.api_key && (t = !1, this.field_errors.push("api_key")), "" === this.channel && (t = !1, this.field_errors.push("channel")), "" === this.from_email && (t = !1, this.field_errors.push("from_email")), t
                    },
                    removeFieldError: function(t) {
                        this.field_errors = this.field_errors.filter((function(e) {
                            return e !== t
                        }))
                    }
                }
            }),
            pi = ci,
            mi = Object(_["a"])(pi, ri, li, !1, null, null, null),
            ui = mi.exports,
            di = function() {
                var t = this,
                    e = t.$createElement,
                    s = t._self._c || e;
                return s("div", {
                    staticClass: "mo2f-setup-setup-wizard-step-configure-mailer-settings mo2f-setup-setup-wizard-step-configure-mailer-settings-sendinblue"
                }, [s("p", {
                    staticClass: "mailer-description",
                    domProps: {
                        innerHTML: t._s(t.description)
                    }
                }), s("p", {
                    staticClass: "mailer-description mailer-description-links"
                }, [s("a", {
                    staticClass: "mo2f-setup-button mo2f-setup-button-small mo2f-setup-button-secondary",
                    attrs: {
                        href: "https://wpmailsmtp.com/go/sendinblue/",
                        target: "_blank",
                        rel: "noopener noreferrer"
                    }
                }, [s("span", {
                    staticClass: "text-with-arrow text-with-arrow-right"
                }, [t._v(" " + t._s(t.text_get_started_button)), s("inline-svg", {
                    staticClass: "icon",
                    attrs: {
                        src: i("107e"),
                        width: "16",
                        height: "23"
                    }
                })], 1)]), s("a", {
                    staticClass: "mo2f-setup-link",
                    attrs: {
                        href: "https://wpmailsmtp.com/docs/how-to-set-up-the-sendinblue-mailer-in-mo2f-setup",
                        target: "_blank",
                        rel: "noopener noreferrer"
                    }
                }, [t._v(t._s(t.text_documentation_link))])]), s("div", {
                    staticClass: "mo2f-setup-setup-wizard-form"
                }, [s("settings-input-text", {
                    attrs: {
                        name: "api_key",
                        type: "password",
                        label: t.text_api_key_label,
                        description: t.text_api_key_description,
                        is_error: t.field_errors.includes("api_key")
                    },
                    on: {
                        is_error_update: function(e) {
                            return t.removeFieldError("api_key")
                        }
                    },
                    model: {
                        value: t.api_key,
                        callback: function(e) {
                            t.api_key = e
                        },
                        expression: "api_key"
                    }
                }), s("settings-input-text", {
                    attrs: {
                        name: "domain",
                        label: t.text_domain_label,
                        description: t.text_domain_description
                    },
                    model: {
                        value: t.domain,
                        callback: function(e) {
                            t.domain = e
                        },
                        expression: "domain"
                    }
                }), s("settings-input-text", {
                    attrs: {
                        name: "from_name",
                        label: t.text_from_name_label,
                        description: t.text_from_name_description
                    },
                    model: {
                        value: t.from_name,
                        callback: function(e) {
                            t.from_name = e
                        },
                        expression: "from_name"
                    }
                }), s("settings-input-switch", {
                    attrs: {
                        classname: "sub_setting",
                        name: "from_name_force",
                        title: t.text_force_from_name_title,
                        label: t.text_force_from_name_label
                    },
                    model: {
                        value: t.from_name_force,
                        callback: function(e) {
                            t.from_name_force = e
                        },
                        expression: "from_name_force"
                    }
                }), s("settings-input-text", {
                    attrs: {
                        name: "from_email",
                        type: "email",
                        label: t.text_from_email_label,
                        description: t.text_from_email_description,
                        is_error: t.field_errors.includes("from_email")
                    },
                    on: {
                        is_error_update: function(e) {
                            return t.removeFieldError("from_email")
                        }
                    },
                    model: {
                        value: t.from_email,
                        callback: function(e) {
                            t.from_email = e
                        },
                        expression: "from_email"
                    }
                }), s("settings-input-switch", {
                    attrs: {
                        classname: "sub_setting",
                        name: "from_email_force",
                        title: t.text_force_from_email_title,
                        label: t.text_force_from_email_label
                    },
                    model: {
                        value: t.from_email_force,
                        callback: function(e) {
                            t.from_email_force = e
                        },
                        expression: "from_email_force"
                    }
                })], 1)])
            },
            _i = [],
            fi = {
                name: "WizardStepConfigureMailerSendinblue",
                components: {
                    SettingsInputText: Ut,
                    SettingsInputSwitch: ii
                },
                data: function() {
                    return {
                        mailer: "sendinblue",
                        text_api_key_label: Object(c["a"])("API Key", "mo2f-setup"),
                        text_domain_label: Object(c["a"])("Sending Domain", "mo2f-setup"),
                        text_api_key_description: Object(c["c"])(Object(c["a"])("%1$sFollow this link%2$s to get an API Key for Sendinblue.", "mo2f-setup"), '<a href="https://account.sendinblue.com/advanced/api" target="_blank" rel="noopener noreferrer">', "</a>"),
                        text_domain_description: Object(c["c"])(Object(c["a"])("Please input the sending domain/subdomain you configured in your Sendinblue dashboard. More information can be found in our %1$sSendinblue documentation%2$s", "mo2f-setup"), '<a href="https://wpmailsmtp.com/docs/how-to-set-up-the-sendinblue-mailer-in-mo2f-setup#setup-smtp" target="_blank" rel="noopener noreferrer">', "</a>"),
                        text_from_name_label: Object(c["a"])("From Name", "mo2f-setup"),
                        text_force_from_name_title: Object(c["a"])("Force From Name", "mo2f-setup"),
                        text_from_email_label: Object(c["a"])("From Email", "mo2f-setup"),
                        text_force_from_email_title: Object(c["a"])("Force From Email", "mo2f-setup"),
                        text_force_from_name_label: Object(c["a"])("If enabled, the From Name setting above will be used for all emails, ignoring values set by other plugins.", "mo2f-setup"),
                        text_force_from_email_label: Object(c["a"])("If enabled, the From Email setting above will be used for all emails, ignoring values set by other plugins.", "mo2f-setup"),
                        text_from_name_description: Object(c["a"])("The name that emails are sent from.", "mo2f-setup"),
                        text_from_email_description: Object(c["a"])("The email address that emails are sent from.", "mo2f-setup"),
                        text_get_started_button: Object(c["a"])("Get Started with Sendinblue", "mo2f-setup"),
                        text_documentation_link: Object(c["a"])("Read how to set up Sendinblue", "mo2f-setup"),
                        description: this.$wpms.mailer_options.sendinblue.description.substr(0, this.$wpms.mailer_options.sendinblue.description.lastIndexOf("<br><br>")),
                        field_errors: []
                    }
                },
                computed: Object(n["a"])({}, Object(ut["b"])("$_settings", ["settings.sendinblue.api_key", "settings.sendinblue.domain", "settings.mail.from_email", "settings.mail.from_name", "settings.mail.from_email_force", "settings.mail.from_name_force"])),
                methods: {
                    areRequiredFieldsValid: function() {
                        var t = !0;
                        return "" === this.api_key && (t = !1, this.field_errors.push("api_key")), "" === this.from_email && (t = !1, this.field_errors.push("from_email")), t
                    },
                    removeFieldError: function(t) {
                        this.field_errors = this.field_errors.filter((function(e) {
                            return e !== t
                        }))
                    }
                }
            },
            hi = fi,
            gi = Object(_["a"])(hi, di, _i, !1, null, null, null),
            wi = gi.exports,
            bi = function() {
                var t = this,
                    e = t.$createElement,
                    i = t._self._c || e;
                return i("div", {
                    staticClass: "mo2f-setup-setup-wizard-step-configure-mailer-settings mo2f-setup-setup-wizard-step-configure-mailer-settings-mailgun"
                }, [i("p", {
                    staticClass: "mailer-description",
                    domProps: {
                        innerHTML: t._s(t.description)
                    }
                }), i("p", {
                    staticClass: "mailer-description mailer-description-links"
                }, [i("a", {
                    staticClass: "mo2f-setup-link",
                    attrs: {
                        href: "https://wpmailsmtp.com/docs/how-to-set-up-the-mailgun-mailer-in-mo2f-setup/",
                        target: "_blank",
                        rel: "noopener noreferrer"
                    }
                }, [t._v(t._s(t.text_documentation_link))])]), i("div", {
                    staticClass: "mo2f-setup-setup-wizard-form"
                }, [i("settings-input-text", {
                    attrs: {
                        name: "api_key",
                        type: "password",
                        label: t.text_api_key_label,
                        description: t.text_api_key_description,
                        is_error: t.field_errors.includes("api_key")
                    },
                    on: {
                        is_error_update: function(e) {
                            return t.removeFieldError("api_key")
                        }
                    },
                    model: {
                        value: t.api_key,
                        callback: function(e) {
                            t.api_key = e
                        },
                        expression: "api_key"
                    }
                }), i("settings-input-text", {
                    attrs: {
                        name: "domain",
                        label: t.text_domain_label,
                        description: t.text_domain_description,
                        is_error: t.field_errors.includes("domain")
                    },
                    on: {
                        is_error_update: function(e) {
                            return t.removeFieldError("domain")
                        }
                    },
                    model: {
                        value: t.domain,
                        callback: function(e) {
                            t.domain = e
                        },
                        expression: "domain"
                    }
                }), i("settings-input-radio", {
                    attrs: {
                        name: "region",
                        label: t.text_region_label,
                        options: t.regionOptions,
                        description: t.text_region_description
                    },
                    model: {
                        value: t.region,
                        callback: function(e) {
                            t.region = e
                        },
                        expression: "region"
                    }
                }), i("settings-input-text", {
                    attrs: {
                        name: "from_name",
                        label: t.text_from_name_label,
                        description: t.text_from_name_description
                    },
                    model: {
                        value: t.from_name,
                        callback: function(e) {
                            t.from_name = e
                        },
                        expression: "from_name"
                    }
                }), i("settings-input-switch", {
                    attrs: {
                        classname: "sub_setting",
                        name: "from_name_force",
                        title: t.text_force_from_name_title,
                        label: t.text_force_from_name_label
                    },
                    model: {
                        value: t.from_name_force,
                        callback: function(e) {
                            t.from_name_force = e
                        },
                        expression: "from_name_force"
                    }
                }), i("settings-input-text", {
                    attrs: {
                        name: "from_email",
                        type: "email",
                        label: t.text_from_email_label,
                        description: t.text_from_email_description,
                        is_error: t.field_errors.includes("from_email")
                    },
                    on: {
                        is_error_update: function(e) {
                            return t.removeFieldError("from_email")
                        }
                    },
                    model: {
                        value: t.from_email,
                        callback: function(e) {
                            t.from_email = e
                        },
                        expression: "from_email"
                    }
                }), i("settings-input-switch", {
                    attrs: {
                        classname: "sub_setting",
                        name: "from_email_force",
                        title: t.text_force_from_email_title,
                        label: t.text_force_from_email_label
                    },
                    model: {
                        value: t.from_email_force,
                        callback: function(e) {
                            t.from_email_force = e
                        },
                        expression: "from_email_force"
                    }
                })], 1)])
            },
            Ai = [],
            vi = (i("c975"), {
                name: "WizardStepConfigureMailerMailgun",
                components: {
                    SettingsInputText: Ut,
                    SettingsInputRadio: Re,
                    SettingsInputSwitch: ii
                },
                data: function() {
                    return {
                        mailer: "mailgun",
                        text_api_key_label: Object(c["a"])("API Key", "mo2f-setup"),
                        text_domain_label: Object(c["a"])("Domain Name", "mo2f-setup"),
                        text_region_label: Object(c["a"])("Region", "mo2f-setup"),
                        text_api_key_description: Object(c["c"])(Object(c["a"])("%1$sFollow this link%2$s to get an API Key from Mailgun.", "mo2f-setup"), '<a href="https://app.mailgun.com/app/account/security/api_keys" target="_blank" rel="noopener noreferrer">', "</a>"),
                        text_domain_description: Object(c["c"])(Object(c["a"])("%1$sFollow this link%2$s to get a Domain Name from Mailgun.", "mo2f-setup"), '<a href="https://app.mailgun.com/app/domains" target="_blank" rel="noopener noreferrer">', "</a>"),
                        text_region_description: Object(c["c"])(Object(c["a"])("Define which endpoint you want to use for sending messages. If you are operating under EU laws, you may be required to use EU region. %1$sMore information%2$s on Mailgun.com.", "mo2f-setup"), '<a href="https://www.mailgun.com/regions" target="_blank" rel="noopener noreferrer">', "</a>"),
                        text_from_name_label: Object(c["a"])("From Name", "mo2f-setup"),
                        text_force_from_name_title: Object(c["a"])("Force From Name", "mo2f-setup"),
                        text_from_email_label: Object(c["a"])("From Email", "mo2f-setup"),
                        text_force_from_email_title: Object(c["a"])("Force From Email", "mo2f-setup"),
                        text_force_from_name_label: Object(c["a"])("If enabled, the From Name setting above will be used for all emails, ignoring values set by other plugins.", "mo2f-setup"),
                        text_force_from_email_label: Object(c["a"])("If enabled, the From Email setting above will be used for all emails, ignoring values set by other plugins.", "mo2f-setup"),
                        text_from_name_description: Object(c["a"])("The name that emails are sent from.", "mo2f-setup"),
                        text_from_email_description: Object(c["a"])("The email address that emails are sent from.", "mo2f-setup"),
                        text_documentation_link: Object(c["a"])("Read how to set up Mailgun", "mo2f-setup"),
                        description: this.$wpms.mailer_options.mailgun.description.substr(0, this.$wpms.mailer_options.mailgun.description.indexOf("<br>")),
                        regionOptions: [{
                            label: Object(c["a"])("US", "mo2f-setup"),
                            value: "US"
                        }, {
                            label: Object(c["a"])("EU", "mo2f-setup"),
                            value: "EU"
                        }],
                        field_errors: []
                    }
                },
                computed: Object(n["a"])({}, Object(ut["b"])("$_settings", ["settings.mailgun.api_key", "settings.mailgun.domain", "settings.mailgun.region", "settings.mail.from_email", "settings.mail.from_name", "settings.mail.from_email_force", "settings.mail.from_name_force"])),
                methods: {
                    areRequiredFieldsValid: function() {
                        var t = !0;
                        return "" === this.api_key && (t = !1, this.field_errors.push("api_key")), "" === this.domain && (t = !1, this.field_errors.push("domain")), "" === this.from_email && (t = !1, this.field_errors.push("from_email")), t
                    },
                    removeFieldError: function(t) {
                        this.field_errors = this.field_errors.filter((function(e) {
                            return e !== t
                        }))
                    }
                }
            }),
            xi = vi,
            yi = Object(_["a"])(xi, bi, Ai, !1, null, null, null),
            Ci = yi.exports,
            ki = function() {
                var t = this,
                    e = t.$createElement,
                    i = t._self._c || e;
                return i("div", {
                    staticClass: "mo2f-setup-setup-wizard-step-configure-mailer-settings mo2f-setup-setup-wizard-step-configure-mailer-settings-sendgrid"
                }, [i("p", {
                    staticClass: "mailer-description",
                    domProps: {
                        innerHTML: t._s(t.description)
                    }
                }), i("p", {
                    staticClass: "mailer-description mailer-description-links"
                }, [i("a", {
                    staticClass: "mo2f-setup-link",
                    attrs: {
                        href: "https://wpmailsmtp.com/docs/how-to-set-up-the-sendgrid-mailer-in-mo2f-setup/",
                        target: "_blank",
                        rel: "noopener noreferrer"
                    }
                }, [t._v(t._s(t.text_documentation_link))])]), i("div", {
                    staticClass: "mo2f-setup-setup-wizard-form"
                }, [i("settings-input-text", {
                    attrs: {
                        name: "api_key",
                        type: "password",
                        label: t.text_api_key_label,
                        description: t.text_api_key_description,
                        is_error: t.field_errors.includes("api_key")
                    },
                    on: {
                        is_error_update: function(e) {
                            return t.removeFieldError("api_key")
                        }
                    },
                    model: {
                        value: t.api_key,
                        callback: function(e) {
                            t.api_key = e
                        },
                        expression: "api_key"
                    }
                }), i("settings-input-text", {
                    attrs: {
                        name: "domain",
                        label: t.text_domain_label,
                        description: t.text_domain_description
                    },
                    model: {
                        value: t.domain,
                        callback: function(e) {
                            t.domain = e
                        },
                        expression: "domain"
                    }
                }), i("settings-input-text", {
                    attrs: {
                        name: "from_name",
                        label: t.text_from_name_label,
                        description: t.text_from_name_description
                    },
                    model: {
                        value: t.from_name,
                        callback: function(e) {
                            t.from_name = e
                        },
                        expression: "from_name"
                    }
                }), i("settings-input-switch", {
                    attrs: {
                        classname: "sub_setting",
                        name: "from_name_force",
                        title: t.text_force_from_name_title,
                        label: t.text_force_from_name_label
                    },
                    model: {
                        value: t.from_name_force,
                        callback: function(e) {
                            t.from_name_force = e
                        },
                        expression: "from_name_force"
                    }
                }), i("settings-input-text", {
                    attrs: {
                        name: "from_email",
                        type: "email",
                        label: t.text_from_email_label,
                        description: t.text_from_email_description,
                        is_error: t.field_errors.includes("from_email")
                    },
                    on: {
                        is_error_update: function(e) {
                            return t.removeFieldError("from_email")
                        }
                    },
                    model: {
                        value: t.from_email,
                        callback: function(e) {
                            t.from_email = e
                        },
                        expression: "from_email"
                    }
                }), i("settings-input-switch", {
                    attrs: {
                        classname: "sub_setting",
                        name: "from_email_force",
                        title: t.text_force_from_email_title,
                        label: t.text_force_from_email_label
                    },
                    model: {
                        value: t.from_email_force,
                        callback: function(e) {
                            t.from_email_force = e
                        },
                        expression: "from_email_force"
                    }
                })], 1)])
            },
            Oi = [],
            ji = {
                name: "WizardStepConfigureMailerSendgrid",
                components: {
                    SettingsInputText: Ut,
                    SettingsInputSwitch: ii
                },
                data: function() {
                    return {
                        mailer: "sendgrid",
                        text_api_key_label: Object(c["a"])("API Key", "mo2f-setup"),
                        text_domain_label: Object(c["a"])("Sending Domain", "mo2f-setup"),
                        text_api_key_description: Object(c["c"])(Object(c["a"])("%1$sFollow this link%2$s to get an API Key for Sendgrid.", "mo2f-setup"), '<a href="https://app.sendgrid.com/settings/api_keys" target="_blank" rel="noopener noreferrer">', "</a>") + "<br>" + Object(c["c"])(Object(c["a"])("To send emails you will need only a %1$sMail Send%2$s access level for this API key.", "mo2f-setup"), "<i>", "</i>"),
                        text_domain_description: Object(c["c"])(Object(c["a"])("Please input the sending domain/subdomain you configured in your SendGrid dashboard. More information can be found in our %1$sSendGrid documentation%2$s", "mo2f-setup"), '<a href="https://wpmailsmtp.com/docs/how-to-set-up-the-sendgrid-mailer-in-mo2f-setup/#setup" target="_blank" rel="noopener noreferrer">', "</a>"),
                        text_from_name_label: Object(c["a"])("From Name", "mo2f-setup"),
                        text_force_from_name_title: Object(c["a"])("Force From Name", "mo2f-setup"),
                        text_from_email_label: Object(c["a"])("From Email", "mo2f-setup"),
                        text_force_from_email_title: Object(c["a"])("Force From Email", "mo2f-setup"),
                        text_force_from_name_label: Object(c["a"])("If enabled, the From Name setting above will be used for all emails, ignoring values set by other plugins.", "mo2f-setup"),
                        text_force_from_email_label: Object(c["a"])("If enabled, the From Email setting above will be used for all emails, ignoring values set by other plugins.", "mo2f-setup"),
                        text_from_name_description: Object(c["a"])("The name that emails are sent from.", "mo2f-setup"),
                        text_from_email_description: Object(c["a"])("The email address that emails are sent from.", "mo2f-setup"),
                        text_documentation_link: Object(c["a"])("Read how to set up Sendgrid", "mo2f-setup"),
                        description: this.$wpms.mailer_options.sendgrid.description.substr(0, this.$wpms.mailer_options.sendgrid.description.indexOf("<br>")),
                        field_errors: []
                    }
                },
                computed: Object(n["a"])({}, Object(ut["b"])("$_settings", ["settings.sendgrid.api_key", "settings.sendgrid.domain", "settings.mail.from_email", "settings.mail.from_name", "settings.mail.from_email_force", "settings.mail.from_name_force"])),
                methods: {
                    areRequiredFieldsValid: function() {
                        var t = !0;
                        return "" === this.api_key && (t = !1, this.field_errors.push("api_key")), "" === this.from_email && (t = !1, this.field_errors.push("from_email")), t
                    },
                    removeFieldError: function(t) {
                        this.field_errors = this.field_errors.filter((function(e) {
                            return e !== t
                        }))
                    }
                }
            },
            Si = ji,
            Pi = Object(_["a"])(Si, ki, Oi, !1, null, null, null),
            Ei = Pi.exports,
            Ti = function() {
                var t = this,
                    e = t.$createElement,
                    i = t._self._c || e;
                return i("div", {
                    staticClass: "mo2f-setup-setup-wizard-step-configure-mailer-settings mo2f-setup-setup-wizard-step-configure-mailer-settings-amazonses"
                }, [i("p", {
                    staticClass: "mailer-description",
                    domProps: {
                        innerHTML: t._s(t.description)
                    }
                }), i("p", {
                    staticClass: "mailer-description mailer-description-links"
                }, [i("b", [i("a", {
                    staticClass: "mo2f-setup-link",
                    attrs: {
                        href: "https://wpmailsmtp.com/docs/how-to-set-up-the-amazon-ses-mailer-in-mo2f-setup/",
                        target: "_blank",
                        rel: "noopener noreferrer"
                    }
                }, [t._v(t._s(t.text_documentation_link))])])]), i("div", {
                    staticClass: "mo2f-setup-setup-wizard-form"
                }, [i("settings-input-text", {
                    attrs: {
                        name: "client_id",
                        label: t.text_client_id_label,
                        is_error: t.field_errors.includes("client_id")
                    },
                    on: {
                        is_error_update: function(e) {
                            return t.removeFieldError("client_id")
                        }
                    },
                    model: {
                        value: t.client_id,
                        callback: function(e) {
                            t.client_id = e
                        },
                        expression: "client_id"
                    }
                }), i("settings-input-text", {
                    attrs: {
                        name: "client_secret",
                        type: "password",
                        label: t.text_client_secret_label,
                        is_error: t.field_errors.includes("client_secret")
                    },
                    on: {
                        is_error_update: function(e) {
                            return t.removeFieldError("client_secret")
                        }
                    },
                    model: {
                        value: t.client_secret,
                        callback: function(e) {
                            t.client_secret = e
                        },
                        expression: "client_secret"
                    }
                }), i("settings-input-select", {
                    attrs: {
                        name: "region",
                        label: t.text_region_label,
                        options: t.regionOptions,
                        description: t.text_region_description,
                        is_error: t.field_errors.includes("region")
                    },
                    on: {
                        is_error_update: function(e) {
                            return t.removeFieldError("region")
                        }
                    },
                    model: {
                        value: t.region,
                        callback: function(e) {
                            t.region = e
                        },
                        expression: "region"
                    }
                }), t.is_api_auth_missing ? t._e() : i("div", [i("div", {
                    staticClass: "mo2f-setup-separator mo2f-setup-separator-big-margin"
                }), i("settings-amazon-s-e-s-identities", {
                    attrs: {
                        options: t.identities,
                        label: t.text_identities_label,
                        columns: t.identities_columns
                    }
                }), i("div", {
                    staticClass: "mo2f-setup-separator mo2f-setup-separator-big-margin"
                }), i("settings-input-text", {
                    attrs: {
                        name: "from_name",
                        label: t.text_from_name_label,
                        description: t.text_from_name_description
                    },
                    model: {
                        value: t.from_name,
                        callback: function(e) {
                            t.from_name = e
                        },
                        expression: "from_name"
                    }
                }), i("settings-input-switch", {
                    attrs: {
                        classname: "sub_setting",
                        name: "from_name_force",
                        title: t.text_force_from_name_title,
                        label: t.text_force_from_name_label
                    },
                    model: {
                        value: t.from_name_force,
                        callback: function(e) {
                            t.from_name_force = e
                        },
                        expression: "from_name_force"
                    }
                }), i("settings-input-text", {
                    attrs: {
                        name: "from_email",
                        type: "email",
                        label: t.text_from_email_label,
                        description: t.text_from_email_description,
                        is_error: t.field_errors.includes("from_email")
                    },
                    on: {
                        is_error_update: function(e) {
                            return t.removeFieldError("from_email")
                        }
                    },
                    model: {
                        value: t.from_email,
                        callback: function(e) {
                            t.from_email = e
                        },
                        expression: "from_email"
                    }
                }), i("settings-input-switch", {
                    attrs: {
                        classname: "sub_setting",
                        name: "from_email_force",
                        title: t.text_force_from_email_title,
                        label: t.text_force_from_email_label
                    },
                    model: {
                        value: t.from_email_force,
                        callback: function(e) {
                            t.from_email_force = e
                        },
                        expression: "from_email_force"
                    }
                })], 1)], 1)])
            },
            zi = [],
            Bi = i("f7fe"),
            Ii = i.n(Bi),
            Mi = function() {
                var t = this,
                    e = t.$createElement,
                    i = t._self._c || e;
                return i("div", {
                    staticClass: "settings-input-select",
                    class: {
                        "settings-input-select-error": t.field_error
                    }
                }, [i("label", {
                    staticClass: "settings-input-label-container",
                    attrs: {
                        for: "mo2f-setup-settings-select-" + t.name
                    }
                }, [i("span", {
                    staticClass: "label",
                    domProps: {
                        innerHTML: t._s(t.label)
                    }
                })]), i("div", {
                    staticClass: "settings-input-select-container"
                }, [i("select", {
                    directives: [{
                        name: "model",
                        rawName: "v-model",
                        value: t.selected,
                        expression: "selected"
                    }],
                    attrs: {
                        id: "mo2f-setup-settings-select-" + t.name,
                        name: t.name,
                        readonly: t.disabled
                    },
                    on: {
                        change: function(e) {
                            var i = Array.prototype.filter.call(e.target.options, (function(t) {
                                return t.selected
                            })).map((function(t) {
                                var e = "_value" in t ? t._value : t.value;
                                return e
                            }));
                            t.selected = e.target.multiple ? i : i[0]
                        }
                    }
                }, t._l(t.options, (function(e) {
                    return i("option", {
                        key: e.value,
                        domProps: {
                            value: e.value
                        }
                    }, [t._v(" " + t._s(e.label) + " ")])
                })), 0)]), t.description ? i("p", {
                    staticClass: "description",
                    domProps: {
                        innerHTML: t._s(t.description)
                    }
                }) : t._e()])
            },
            Di = [],
            Fi = {
                name: "SettingsInputSelect",
                props: {
                    options: Array,
                    label: String,
                    name: String,
                    value: String,
                    description: String,
                    disabled: Boolean,
                    is_error: Boolean
                },
                computed: {
                    selected: {
                        get: function() {
                            return this.value
                        },
                        set: function(t) {
                            this.$emit("is_error_update", !1), this.$emit("input", t)
                        }
                    },
                    field_error: {
                        get: function() {
                            return this.is_error
                        },
                        set: function(t) {
                            this.$emit("is_error_update", t)
                        }
                    }
                }
            },
            Ni = Fi,
            Qi = Object(_["a"])(Ni, Mi, Di, !1, null, null, null),
            Li = Qi.exports,
            Wi = function() {
                var t = this,
                    e = t.$createElement,
                    s = t._self._c || e;
                return s("div", {
                    staticClass: "settings-amazon-ses-identities"
                }, [s("label", {
                    staticClass: "settings-input-label-container"
                }, [s("span", {
                    staticClass: "label",
                    domProps: {
                        innerHTML: t._s(t.label)
                    }
                }), t.tooltip ? s("settings-info-tooltip", {
                    attrs: {
                        content: t.tooltip
                    }
                }) : t._e()], 1), t.options ? s("div", [t.options && 0 !== t.options.length ? s("p", {
                    staticClass: "description"
                }, [t._v(" " + t._s(t.text_identities_table_description) + " ")]) : s("p", {
                    staticClass: "description"
                }, [s("strong", [t._v(t._s(t.text_no_registered_identities_title))]), t._v(" " + t._s(t.text_no_registered_identities_content) + " ")]), s("div", {
                    staticClass: "ses-identities-container"
                }, [t.options && t.options.length > 0 ? s("div", {
                    staticClass: "ses-identities-table-container"
                }, [s("table", [t.columns ? s("tr", {
                    staticClass: "ses-identity-columns"
                }, t._l(t.filtered_columns, (function(e) {
                    return s("th", {
                        key: e.key,
                        class: "ses-identity-column ses-identity-column-" + e.key
                    }, [t._v(" " + t._s(e.label) + " ")])
                })), 0) : t._e(), t._l(t.options, (function(e, i) {
                    return s("tr", {
                        key: i
                    }, [s("td", [t._v(" " + t._s(e.value) + " ")]), s("td", [t._v(" " + t._s(e.type) + " ")]), s("td", [t._v(" " + t._s(e.status) + " ")])])
                })), t.show_identity_form ? t._e() : s("button", {
                    staticClass: "mo2f-setup-button mo2f-setup-button-main mo2f-setup-button-small",
                    attrs: {
                        type: "button"
                    },
                    on: {
                        click: function(e) {
                            return e.preventDefault(), t.addNewIdentity(e)
                        }
                    }
                }, [t._v(" " + t._s(t.text_add_new_identity) + " ")])], 2)]) : t._e(), t.show_identity_form || !t.options || 0 === t.options.length ? s("div", {
                    staticClass: "mo2f-setup-amazonses-identity-form"
                }, [t.options && 0 !== t.options.length ? t._e() : s("h3", [t._v(" " + t._s(t.text_verify_identity) + " ")]), s("div", {
                    directives: [{
                        name: "show",
                        rawName: "v-show",
                        value: 1 === t.verify_identity_step,
                        expression: "verify_identity_step === 1"
                    }],
                    staticClass: "amazonses-identity-form-step"
                }, [s("settings-input-radio", {
                    attrs: {
                        name: "identity_type",
                        options: t.identity_type_options
                    },
                    model: {
                        value: t.identity_type,
                        callback: function(e) {
                            t.identity_type = e
                        },
                        expression: "identity_type"
                    }
                }), s("p", {
                    domProps: {
                        textContent: t._s(t.verify_identity_text)
                    }
                }), s("settings-input-text", {
                    attrs: {
                        name: "identity_value",
                        placeholder: t.identity_value_placeholder
                    },
                    model: {
                        value: t.identity_value,
                        callback: function(e) {
                            t.identity_value = e
                        },
                        expression: "identity_value"
                    }
                }), s("button", {
                    staticClass: "mo2f-setup-button mo2f-setup-button-main mo2f-setup-button-small mo2f-setup-button-verify",
                    attrs: {
                        type: "button"
                    },
                    on: {
                        click: function(e) {
                            return e.preventDefault(), t.verifyIdentity(e)
                        }
                    }
                }, [t.loading_verify_identity ? s("loader", {
                    attrs: {
                        color: "white"
                    }
                }) : s("span", [t._v(t._s(t.text_verify))])], 1)], 1), s("div", {
                    directives: [{
                        name: "show",
                        rawName: "v-show",
                        value: 2 === t.verify_identity_step && "domain" === t.verify_identity_result.type,
                        expression: "verify_identity_step === 2 && verify_identity_result.type === 'domain'"
                    }],
                    staticClass: "amazonses-identity-form-step amazonses-identity-form-step-domain"
                }, [s("p", {
                    domProps: {
                        innerHTML: t._s(t.text_verify_identity_step2_domain_text)
                    }
                }), s("div", {
                    staticClass: "amazonses-domain-identity-added-inputs"
                }, [s("settings-input-text", {
                    attrs: {
                        value: t.ses_domain_name,
                        label: t.text_name,
                        name: "ses_domain_name",
                        readonly: "",
                        copy: ""
                    }
                }), s("settings-input-text", {
                    attrs: {
                        value: t.verify_identity_result.domain_txt,
                        label: t.text_value,
                        name: "ses_domain_value",
                        readonly: "",
                        copy: ""
                    }
                })], 1)]), s("div", {
                    directives: [{
                        name: "show",
                        rawName: "v-show",
                        value: 2 === t.verify_identity_step && "email" === t.verify_identity_result.type,
                        expression: "verify_identity_step === 2 && verify_identity_result.type === 'email'"
                    }],
                    staticClass: "amazonses-identity-form-step"
                }, [s("p", {
                    staticClass: "ses-identities-email-success-notice"
                }, [s("inline-svg", {
                    staticClass: "icon",
                    attrs: {
                        src: i("84d7"),
                        width: "16",
                        height: "16"
                    }
                }), t._v(" "), s("span", {
                    domProps: {
                        innerHTML: t._s(t.text_verify_identity_step2_email_text)
                    }
                })], 1)])]) : t._e()])]) : s("loader", {
                    attrs: {
                        size: "md"
                    }
                })], 1)
            },
            Ui = [],
            Hi = {
                name: "SettingsAmazonSESIdentities",
                components: {
                    SettingsInfoTooltip: Nt,
                    SettingsInputRadio: Re,
                    SettingsInputText: Ut,
                    Loader: xe
                },
                props: {
                    options: Array,
                    columns: Array,
                    label: String,
                    tooltip: String
                },
                computed: {
                    filtered_columns: function() {
                        return this.columns.filter((function(t) {
                            return "action" !== t.key
                        }))
                    },
                    identity_value_placeholder: function() {
                        return "domain" === this.identity_type ? Object(c["a"])("Please enter a domain", "mo2f-setup") : Object(c["a"])("Please enter a valid email address", "mo2f-setup")
                    },
                    verify_identity_text: function() {
                        return "domain" === this.identity_type ? Object(c["a"])("Enter the domain name to verify it on Amazon SES and generate the required DNS TXT record.", "mo2f-setup") : Object(c["a"])("Enter a valid email address. A verification email will be sent to the email address you entered.", "mo2f-setup")
                    },
                    text_verify_identity_step2_email_text: function() {
                        return Object(c["c"])(Object(c["a"])("Please check the inbox of <b>%s</b> for a confirmation email.", "mo2f-setup"), this.verify_identity_result.value)
                    },
                    ses_domain_name: function() {
                        return this.verify_identity_result.value ? "_amazonses.".concat(this.verify_identity_result.value) : ""
                    },
                    text_verify: function() {
                        return "domain" === this.identity_type ? Object(c["a"])("Verify Domain", "mo2f-setup") : Object(c["a"])("Verify Email", "mo2f-setup")
                    }
                },
                data: function() {
                    return {
                        text_no_registered_identities_title: Object(c["a"])("No registered domains or emails.", "mo2f-setup"),
                        text_no_registered_identities_content: Object(c["a"])("You will not be able to send emails until you verify at least one domain or email address for the selected Amazon SES Region.", "mo2f-setup"),
                        text_view_dns: Object(c["a"])("View DNS", "mo2f-setup"),
                        text_resend: Object(c["a"])("Resend", "mo2f-setup"),
                        text_identities_table_description: Object(c["a"])("Here are the domains and email addresses that have been verified and can be used as the From Email.", "mo2f-setup"),
                        text_verify_identity: Object(c["a"])("Verify SES Identity", "mo2f-setup"),
                        text_add_new_identity: Object(c["a"])("Add New SES Identity", "mo2f-setup"),
                        text_name: Object(c["a"])("Name", "mo2f-setup"),
                        text_value: Object(c["a"])("Value", "mo2f-setup"),
                        text_verify_identity_step2_domain_text: Object(c["c"])(Object(c["a"])("Please add this TXT record to your domain's DNS settings. For information on how to add TXT DNS records, please refer to the %1$sAmazon SES documentation%2$s.", "mo2f-setup"), '<a href="https://docs.aws.amazon.com/ses/latest/DeveloperGuide/dns-txt-records.html" target="_blank" rel="noopener noreferrer">', "</a>"),
                        show_identity_form: !1,
                        identity_type: "domain",
                        identity_type_options: [{
                            label: Object(c["a"])("Verify Domain", "mo2f-setup"),
                            value: "domain"
                        }, {
                            label: Object(c["a"])("Verify Email Address", "mo2f-setup"),
                            value: "email"
                        }],
                        identity_value: "",
                        verify_identity_step: 1,
                        verify_identity_result: {},
                        loading_verify_identity: !1
                    }
                },
                methods: {
                    verifyIdentity: function() {
                        if (!this.loading_verify_identity) {
                            this.loading_verify_identity = !0;
                            var t = this;
                            this.$store.dispatch("$_settings/amazonSESRegisterIdentity", {
                                value: this.identity_value,
                                type: this.identity_type
                            }).then((function(e) {
                                t.loading_verify_identity = !1, e.success && e.data && (t.verify_identity_result = e.data, t.verify_identity_step = 2)
                            }))
                        }
                    },
                    addNewIdentity: function() {
                        this.show_identity_form = !0
                    }
                }
            },
            Ri = Hi,
            Gi = Object(_["a"])(Ri, Wi, Ui, !1, null, null, null),
            Vi = Gi.exports,
            Yi = {
                name: "WizardStepConfigureMailerAmazonSES",
                components: {
                    SettingsInputText: Ut,
                    SettingsInputSelect: Li,
                    SettingsInputSwitch: ii,
                    SettingsAmazonSESIdentities: Vi
                },
                data: function() {
                    return {
                        mailer: "amazonses",
                        text_client_id_label: Object(c["a"])("Access Key ID", "mo2f-setup"),
                        text_client_secret_label: Object(c["a"])("Secret Access Key", Object({
                            NODE_ENV: "production",
                            VUE_APP_TEXTDOMAIN: "mo2f-setup",
                            VUE_APP_PRODUCT_NAME: "WPMailSMTP",
                            BASE_URL: "http://localhost:8080/"
                        }).VUE_APP_TEXTclient_id),
                        text_region_label: Object(c["a"])("Region", "mo2f-setup"),
                        text_identities_label: Object(c["a"])("SES Identities", "mo2f-setup"),
                        text_region_description: Object(c["a"])("Please select the Amazon SES API region which is the closest to where your website is hosted. This can help to decrease network latency between your site and Amazon SES, which will speed up email sending.", "mo2f-setup"),
                        text_from_name_label: Object(c["a"])("From Name", "mo2f-setup"),
                        text_force_from_name_title: Object(c["a"])("Force From Name", "mo2f-setup"),
                        text_from_email_label: Object(c["a"])("From Email", "mo2f-setup"),
                        text_force_from_email_title: Object(c["a"])("Force From Email", "mo2f-setup"),
                        text_force_from_name_label: Object(c["a"])("If enabled, the From Name setting above will be used for all emails, ignoring values set by other plugins.", "mo2f-setup"),
                        text_force_from_email_label: Object(c["a"])("If enabled, the From Email setting above will be used for all emails, ignoring values set by other plugins.", "mo2f-setup"),
                        text_from_name_description: Object(c["a"])("The name that emails are sent from.", "mo2f-setup"),
                        text_from_email_description: Object(c["a"])("The email address that emails are sent from.", "mo2f-setup"),
                        text_documentation_link: Object(c["a"])("Read how to set up Amazon SES", "mo2f-setup"),
                        description: this.$wpms.mailer_options.amazonses.description.substr(0, this.$wpms.mailer_options.amazonses.description.indexOf("<br>")),
                        regionOptions: this.$wpms.mailer_options.amazonses.region_options || [],
                        fetching_identities: !1,
                        field_errors: []
                    }
                },
                computed: Object(n["a"])(Object(n["a"])(Object(n["a"])({}, Object(ut["b"])("$_settings", ["settings.amazonses.client_id", "settings.amazonses.client_secret", "settings.amazonses.region", "settings.mail.from_email", "settings.mail.from_name", "settings.mail.from_email_force", "settings.mail.from_name_force"])), Object(ut["b"])("$_settings", {
                    identities_columns: "amazonses_identities.columns",
                    identities: "amazonses_identities.data"
                })), {}, {
                    is_api_auth_missing: function() {
                        return !this.client_id || !this.client_secret || !this.region
                    }
                }),
                watch: {
                    client_id: function() {
                        this.getIdentitiesDelayed()
                    },
                    client_secret: function() {
                        this.getIdentitiesDelayed()
                    },
                    region: function() {
                        this.getIdentities()
                    }
                },
                methods: {
                    getIdentities: function() {
                        var t = this;
                        this.fetching_identities || this.client_id.length < 20 || this.client_secret.length < 40 || !this.region || (this.fetching_identities = !0, this.$store.dispatch("$_app/start_loading"), this.$store.dispatch("$_settings/getAmazonSESIdentities").then((function() {
                            t.fetching_identities = !1
                        })).finally((function() {
                            t.$store.dispatch("$_app/stop_loading")
                        })))
                    },
                    getIdentitiesDelayed: Ii()((function() {
                        this.getIdentities()
                    }), 500),
                    areRequiredFieldsValid: function() {
                        var t = !0;
                        return "" === this.client_id && (t = !1, this.field_errors.push("client_id")), "" === this.client_secret && (t = !1, this.field_errors.push("client_secret")), "" === this.region && (t = !1, this.field_errors.push("region")), "" === this.from_email && (t = !1, this.field_errors.push("from_email")), t
                    },
                    removeFieldError: function(t) {
                        this.field_errors = this.field_errors.filter((function(e) {
                            return e !== t
                        }))
                    }
                },
                mounted: function() {
                    this.getIdentities()
                }
            },
            Ji = Yi,
            Ki = Object(_["a"])(Ji, Ti, zi, !1, null, null, null),
            qi = Ki.exports,
            Zi = function() {
                var t = this,
                    e = t.$createElement,
                    i = t._self._c || e;
                return i("div", {
                    staticClass: "mo2f-setup-setup-wizard-step-configure-mailer-settings mo2f-setup-setup-wizard-step-configure-mailer-settings-gmail"
                }, [i("p", {
                    staticClass: "mailer-description",
                    domProps: {
                        innerHTML: t._s(t.description)
                    }
                }), i("p", {
                    staticClass: "mailer-description mailer-description-links"
                }, [i("b", [i("a", {
                    staticClass: "mo2f-setup-link",
                    attrs: {
                        href: "https://wpmailsmtp.com/docs/how-to-set-up-the-gmail-mailer-in-mo2f-setup/#create-app",
                        target: "_blank",
                        rel: "noopener noreferrer"
                    }
                }, [t._v(t._s(t.text_documentation_link))])])]), i("div", {
                    staticClass: "mo2f-setup-setup-wizard-form"
                }, [i("settings-input-text", {
                    attrs: {
                        name: "client_id",
                        label: t.text_client_id_label,
                        is_error: t.field_errors.includes("client_id")
                    },
                    on: {
                        is_error_update: function(e) {
                            return t.removeFieldError("client_id")
                        }
                    },
                    model: {
                        value: t.client_id,
                        callback: function(e) {
                            t.client_id = e
                        },
                        expression: "client_id"
                    }
                }), i("settings-input-text", {
                    attrs: {
                        name: "client_secret",
                        type: "password",
                        label: t.text_client_secret_label,
                        is_error: t.field_errors.includes("client_secret")
                    },
                    on: {
                        is_error_update: function(e) {
                            return t.removeFieldError("client_secret")
                        }
                    },
                    model: {
                        value: t.client_secret,
                        callback: function(e) {
                            t.client_secret = e
                        },
                        expression: "client_secret"
                    }
                }), i("settings-input-text", {
                    attrs: {
                        value: t.redirect_uri,
                        name: "redirect_uri",
                        label: t.text_redirect_uri_label,
                        copy: "",
                        readonly: ""
                    }
                }), i("div", {
                    staticClass: "mo2f-setup-separator mo2f-setup-separator-big-margin"
                }), i("settings-o-auth-connection", {
                    attrs: {
                        label: t.text_authorization_label,
                        mailer: t.mailer,
                        connected_email: t.connected_email_address,
                        is_auth_required: t.is_auth_required,
                        client_id: t.client_id,
                        client_secret: t.client_secret
                    }
                }), t.is_auth_required ? t._e() : i("div", {
                    staticClass: "mo2f-setup-setup-wizard-form-general-settings"
                }, [i("div", {
                    staticClass: "mo2f-setup-separator mo2f-setup-separator-big-margin"
                }), i("settings-input-text", {
                    attrs: {
                        name: "from_name",
                        label: t.text_from_name_label,
                        description: t.text_from_name_description
                    },
                    model: {
                        value: t.from_name,
                        callback: function(e) {
                            t.from_name = e
                        },
                        expression: "from_name"
                    }
                }), i("settings-input-switch", {
                    attrs: {
                        classname: "sub_setting",
                        name: "from_name_force",
                        title: t.text_force_from_name_title,
                        label: t.text_force_from_name_label
                    },
                    model: {
                        value: t.from_name_force,
                        callback: function(e) {
                            t.from_name_force = e
                        },
                        expression: "from_name_force"
                    }
                }), i("settings-input-select", {
                    attrs: {
                        name: "from_email",
                        label: t.text_from_email_label,
                        options: t.possible_send_as_emails,
                        description: t.text_from_email_description
                    },
                    model: {
                        value: t.from_email,
                        callback: function(e) {
                            t.from_email = e
                        },
                        expression: "from_email"
                    }
                })], 1)], 1)])
            },
            Xi = [],
            $i = function() {
                var t = this,
                    e = t.$createElement,
                    s = t._self._c || e;
                return s("div", {
                    staticClass: "settings-oauth-connection"
                }, [s("label", {
                    staticClass: "settings-input-label-container"
                }, [s("span", {
                    staticClass: "label",
                    domProps: {
                        innerHTML: t._s(t.label)
                    }
                }), t.tooltip ? s("settings-info-tooltip", {
                    attrs: {
                        content: t.tooltip
                    }
                }) : t._e()], 1), t.is_auth_required ? s("div", {
                    staticClass: "add-authorization-container"
                }, [s("p", {
                    staticClass: "description",
                    domProps: {
                        textContent: t._s(t.text_authorization_button_description)
                    }
                }), s("button", {
                    staticClass: "mo2f-setup-button mo2f-setup-button-main mo2f-setup-button-small",
                    attrs: {
                        type: "button",
                        disabled: !t.are_client_details_ready
                    },
                    on: {
                        click: function(e) {
                            return e.preventDefault(), t.authorize(e)
                        }
                    }
                }, [t._v(" " + t._s(t.text_authorization_button) + " ")])]) : s("div", {
                    staticClass: "remove-authorization-container"
                }, [t.connected_email ? s("p", {
                    staticClass: "description connected-as"
                }, [s("span", {
                    domProps: {
                        innerHTML: t._s(t.text_connected_as_with_email)
                    }
                }), t._v(" "), s("inline-svg", {
                    staticClass: "icon",
                    attrs: {
                        src: i("9a1d"),
                        width: "16",
                        height: "16"
                    }
                })], 1) : t._e(), "gmail" === t.mailer ? s("p", {
                    staticClass: "description",
                    domProps: {
                        innerHTML: t._s(t.text_remove_authorization_button_description_google)
                    }
                }) : t._e(), s("p", {
                    staticClass: "description",
                    domProps: {
                        innerHTML: t._s(t.text_remove_authorization_button_description)
                    }
                }), s("button", {
                    staticClass: "mo2f-setup-button mo2f-setup-button-red mo2f-setup-button-small",
                    attrs: {
                        type: "button"
                    },
                    on: {
                        click: function(e) {
                            return e.preventDefault(), t.removeAuthorization(e)
                        }
                    }
                }, [t._v(" " + t._s(t.text_remove_authorization_button) + " ")])])])
            },
            ts = [],
            es = {
                name: "SettingsOAuthConnection",
                components: {
                    SettingsInfoTooltip: Nt
                },
                props: {
                    label: String,
                    mailer: String,
                    connected_email: String,
                    is_auth_required: Boolean,
                    client_id: String,
                    client_secret: String,
                    tooltip: String,
                    disabled: Boolean
                },
                data: function() {
                    return {
                        text_allow_button: Object(c["a"])("Connect to %s", "mo2f-setup"),
                        text_authorization_button_description_general: Object(c["a"])("Before continuing, you'll need to allow this plugin to send emails using your %s account.", "mo2f-setup"),
                        text_remove_authorization_button: Object(c["a"])("Remove Connection", "mo2f-setup"),
                        text_remove_authorization_button_description_google: Object(c["c"])(Object(c["a"])("If you want to use a different From Email address you can setup a Google email alias. %1$sFollow these instructions%2$s, then select the alias in the From Email section below.", "mo2f-setup"), '<a href="https://wpmailsmtp.com/gmail-send-from-alias-mo2f-setup/" target="_blank" rel="noopener noreferrer">', "</a>"),
                        text_remove_authorization_button_desc_template: Object(c["a"])("Removing this connection will give you the ability to redo the connection or connect to different %s account.", "mo2f-setup"),
                        text_connected_as: Object(c["a"])("Connected as", "mo2f-setup")
                    }
                },
                computed: {
                    are_client_details_ready: function() {
                        return !!this.client_id && !!this.client_secret
                    },
                    mailer_name: function() {
                        var t = "Google";
                        return "outlook" === this.mailer ? t = "Microsoft Outlook" : "zoho" === this.mailer && (t = "Zoho Mail"), t
                    },
                    text_authorization_button: function() {
                        return Object(c["c"])(this.text_allow_button, this.mailer_name)
                    },
                    text_authorization_button_description: function() {
                        return Object(c["c"])(this.text_authorization_button_description_general, this.mailer_name)
                    },
                    text_remove_authorization_button_description: function() {
                        return Object(c["c"])(this.text_remove_authorization_button_desc_template, this.mailer_name)
                    },
                    text_connected_as_with_email: function() {
                        return "".concat(this.text_connected_as, " <b>").concat(this.connected_email, "</b>")
                    }
                },
                methods: {
                    authorize: function() {
                        var t = this;
                        this.$store.dispatch("$_app/start_loading"), this.$store.dispatch("$_settings/getAuthUrl", this.mailer).then((function(t) {
                            t.success && t.data.oauth_url && (window.location.href = t.data.oauth_url)
                        })).finally((function() {
                            t.$store.dispatch("$_app/stop_loading")
                        }))
                    },
                    removeAuthorization: function() {
                        var t = this;
                        this.$store.dispatch("$_app/start_loading"), this.$store.dispatch("$_settings/removeAuth", this.mailer).finally((function() {
                            t.$store.dispatch("$_app/stop_loading")
                        }))
                    },
                    removeUrlParam: function(t, e, i) {
                        e.delete(i), t.search = e.toString(), window.history.replaceState({}, document.title, t.toString())
                    },
                    catchAuthNotice: function() {
                        var t = new URL(window.location.href),
                            e = new URLSearchParams(t.search),
                            i = "",
                            s = "",
                            a = !1;
                        switch (e.has("success") ? (i = e.get("success"), a = !0, this.removeUrlParam(t, e, "success")) : e.has("error") && (i = e.get("error"), this.removeUrlParam(t, e, "error")), i) {
                            case "google_access_denied":
                            case "zoho_access_denied":
                            case "google_no_code_scope":
                            case "microsoft_no_code":
                            case "zoho_no_code":
                            case "zoho_invalid_nonce":
                                s = Object(c["a"])("There was an error while processing the authentication request. Please try again.", "mo2f-setup");
                                break;
                            case "google_no_clients":
                            case "zoho_no_clients":
                            case "zoho_unsuccessful_oauth":
                            case "microsoft_unsuccessful_oauth":
                            case "google_unsuccessful_oauth":
                                s = Object(c["a"])("There was an error while processing the authentication request. Please recheck your Client ID and Client Secret and try again.", "mo2f-setup");
                                break;
                            case "google_site_linked":
                                s = Object(c["a"])("You have successfully linked the current site with your Google API project. Now you can start sending emails through Gmail.", "mo2f-setup");
                                break;
                            case "microsoft_site_linked":
                                s = Object(c["a"])("You have successfully linked the current site with your Microsoft API project. Now you can start sending emails through Outlook.", "mo2f-setup");
                                break;
                            case "zoho_site_linked":
                                s = Object(c["a"])("You have successfully linked the current site with your Zoho Mail API project. Now you can start sending emails through Zoho Mail.", "mo2f-setup");
                                break
                        }
                        s.length > 0 && this.$swal({
                            title: a ? Object(c["a"])("Successful Authorization", "mo2f-setup") : Object(c["a"])("Authorization Error!", "mo2f-setup"),
                            text: s,
                            width: 550,
                            showCloseButton: !0,
                            customClass: {
                                container: "mo2f-setup-swal mo2f-setup-swal-alert"
                            }
                        })
                    }
                },
                mounted: function() {
                    this.catchAuthNotice()
                }
            },
            is = es,
            ss = Object(_["a"])(is, $i, ts, !1, null, null, null),
            as = ss.exports,
            ns = {
                name: "WizardStepConfigureMailerGmail",
                components: {
                    SettingsInputText: Ut,
                    SettingsInputSwitch: ii,
                    SettingsOAuthConnection: as,
                    SettingsInputSelect: Li
                },
                data: function() {
                    return {
                        mailer: "gmail",
                        text_client_id_label: Object(c["a"])("Client ID", "mo2f-setup"),
                        text_client_secret_label: Object(c["a"])("Client Secret", "mo2f-setup"),
                        text_redirect_uri_label: Object(c["a"])("Authorized Redirect URI", "mo2f-setup"),
                        text_authorization_label: Object(c["a"])("Authorization", "mo2f-setup"),
                        text_from_name_label: Object(c["a"])("From Name", "mo2f-setup"),
                        text_force_from_name_title: Object(c["a"])("Force From Name", "mo2f-setup"),
                        text_from_email_label: Object(c["a"])("From Email", "mo2f-setup"),
                        text_force_from_name_label: Object(c["a"])("If enabled, the From Name setting above will be used for all emails, ignoring values set by other plugins.", "mo2f-setup"),
                        text_from_name_description: Object(c["a"])("The name that emails are sent from.", "mo2f-setup"),
                        text_from_email_description: Object(c["a"])("Select which email address you would like to send your emails from.", "mo2f-setup"),
                        text_documentation_link: Object(c["a"])("Read how to set up the Gmail mailer", "mo2f-setup"),
                        description: this.$wpms.mailer_options.gmail.description.substr(0, this.$wpms.mailer_options.gmail.description.indexOf("<br>")),
                        redirect_uri: this.$wpms.mailer_options.gmail.redirect_uri,
                        connected_email_address: null,
                        possible_send_as_emails: [],
                        field_errors: []
                    }
                },
                computed: Object(n["a"])(Object(n["a"])(Object(n["a"])({}, Object(ut["b"])("$_settings", ["settings.gmail.client_id", "settings.gmail.client_secret", "settings.gmail.access_token", "settings.gmail.refresh_token", "settings.mail.from_email", "settings.mail.from_name", "settings.mail.from_name_force"])), Object(ut["b"])("$_wizard", ["blocked_step"])), {}, {
                    is_auth_required: function() {
                        return !this.access_token || !this.refresh_token
                    }
                }),
                watch: {
                    is_auth_required: function(t) {
                        this.blocked_step = t
                    }
                },
                methods: {
                    getConnectedData: function() {
                        var t = this;
                        this.$store.dispatch("$_settings/getConnectedData", this.mailer).then((function(e) {
                            e.success && e.data && (t.connected_email_address = e.data.connected_email || null, t.possible_send_as_emails = e.data.possible_send_from_addresses || [], t.isEmailInPosibleAddresses(t.from_email) || (t.from_email = t.connected_email_address))
                        }))
                    },
                    isEmailInPosibleAddresses: function(t) {
                        return this.possible_send_as_emails.find((function(e) {
                            return e.value === t
                        }))
                    },
                    areRequiredFieldsValid: function() {
                        var t = !0;
                        return "" === this.client_id && (t = !1, this.field_errors.push("client_id")), "" === this.client_secret && (t = !1, this.field_errors.push("client_secret")), t
                    },
                    removeFieldError: function(t) {
                        this.field_errors = this.field_errors.filter((function(e) {
                            return e !== t
                        }))
                    }
                },
                mounted: function() {
                    this.getConnectedData(), this.is_auth_required && (this.blocked_step = !0)
                }
            },
            os = ns,
            rs = Object(_["a"])(os, Zi, Xi, !1, null, null, null),
            ls = rs.exports,
            cs = function() {
                var t = this,
                    e = t.$createElement,
                    i = t._self._c || e;
                return i("div", {
                    staticClass: "mo2f-setup-setup-wizard-step-configure-mailer-settings mo2f-setup-setup-wizard-step-configure-mailer-settings-outlook"
                }, [i("p", {
                    staticClass: "mailer-description",
                    domProps: {
                        innerHTML: t._s(t.description)
                    }
                }), i("p", {
                    staticClass: "mailer-description mailer-description-links"
                }, [i("a", {
                    staticClass: "mo2f-setup-link",
                    attrs: {
                        href: "https://wpmailsmtp.com/docs/how-to-set-up-the-outlook-mailer-in-mo2f-setup/#microsoft-setup",
                        target: "_blank",
                        rel: "noopener noreferrer"
                    }
                }, [t._v(t._s(t.text_documentation_link))])]), i("div", {
                    staticClass: "mo2f-setup-setup-wizard-form"
                }, [i("settings-input-text", {
                    attrs: {
                        name: "client_id",
                        label: t.text_client_id_label,
                        is_error: t.field_errors.includes("client_id")
                    },
                    on: {
                        is_error_update: function(e) {
                            return t.removeFieldError("client_id")
                        }
                    },
                    model: {
                        value: t.client_id,
                        callback: function(e) {
                            t.client_id = e
                        },
                        expression: "client_id"
                    }
                }), i("settings-input-text", {
                    attrs: {
                        name: "client_secret",
                        type: "password",
                        label: t.text_client_secret_label,
                        is_error: t.field_errors.includes("client_secret")
                    },
                    on: {
                        is_error_update: function(e) {
                            return t.removeFieldError("client_secret")
                        }
                    },
                    model: {
                        value: t.client_secret,
                        callback: function(e) {
                            t.client_secret = e
                        },
                        expression: "client_secret"
                    }
                }), i("settings-input-text", {
                    attrs: {
                        value: t.redirect_uri,
                        name: "redirect_uri",
                        label: t.text_redirect_uri_label,
                        copy: "",
                        readonly: ""
                    }
                }), i("settings-o-auth-connection", {
                    attrs: {
-                        mailer: t.mailer,
                        connected_email: t.connected_email_address,
                        is_auth_required: t.is_auth_required,
                        client_id: t.client_id,
                        client_secret: t.client_secret
                    }
                })], 1)])
            },
            ps = [],
            ms = {
                name: "WizardStepConfigureMailerOutlook",
                components: {
                    SettingsInputText: Ut,
                    SettingsOAuthConnection: as
                },
                data: function() {
                    return {
                        mailer: "outlook",
                        text_client_id_label: Object(c["a"])("Application ID", "mo2f-setup"),
                        text_client_secret_label: Object(c["a"])("Application Password", "mo2f-setup"),
                        text_redirect_uri_label: Object(c["a"])("Redirect URI", "mo2f-setup"),
                        text_authorization_label: Object(c["a"])("Authorization", "mo2f-setup"),
                        text_documentation_link: Object(c["a"])("Read how to set up Outlook", "mo2f-setup"),
                        description: this.$wpms.mailer_options.outlook.description.substr(0, this.$wpms.mailer_options.outlook.description.indexOf("<br>")),
                        redirect_uri: this.$wpms.mailer_options.outlook.redirect_uri,
                        field_errors: []
                    }
                },
                computed: Object(n["a"])(Object(n["a"])(Object(n["a"])(Object(n["a"])({}, Object(ut["b"])("$_settings", ["settings.outlook.client_id", "settings.outlook.client_secret", "settings.outlook.access_token", "settings.outlook.refresh_token"])), Object(ut["b"])("$_wizard", ["blocked_step"])), Object(nt["b"])({
                    connected_email_address: "$_settings/outlook_email"
                })), {}, {
                    is_auth_required: function() {
                        return !this.access_token || !this.refresh_token
                    }
                }),
                watch: {
                    is_auth_required: function(t) {
                        this.blocked_step = t
                    }
                },
                methods: {
                    areRequiredFieldsValid: function() {
                        var t = !0;
                        return "" === this.client_id && (t = !1, this.field_errors.push("client_id")), "" === this.client_secret && (t = !1, this.field_errors.push("client_secret")), t
                    },
                    removeFieldError: function(t) {
                        this.field_errors = this.field_errors.filter((function(e) {
                            return e !== t
                        }))
                    }
                },
                mounted: function() {
                    this.is_auth_required && (this.blocked_step = !0)
                }
            },
            us = ms,
            ds = Object(_["a"])(us, cs, ps, !1, null, null, null),
            _s = ds.exports,
            fs = function() {
                var t = this,
                    e = t.$createElement,
                    i = t._self._c || e;
                return i("div", {
                    staticClass: "mo2f-setup-setup-wizard-step-configure-mailer-settings mo2f-setup-setup-wizard-step-configure-mailer-settings-zoho"
                }, [i("p", {
                    staticClass: "mailer-description",
                    domProps: {
                        innerHTML: t._s(t.description)
                    }
                }), i("p", {
                    staticClass: "mailer-description mailer-description-links"
                }, [i("a", {
                    staticClass: "mo2f-setup-link",
                    attrs: {
                        href: "https://wpmailsmtp.com/docs/how-to-set-up-the-zoho-mailer-in-mo2f-setup/#zoho-account",
                        target: "_blank",
                        rel: "noopener noreferrer"
                    }
                }, [t._v(t._s(t.text_documentation_link))])]), i("div", {
                    staticClass: "mo2f-setup-setup-wizard-form"
                }, [i("settings-input-select", {
                    attrs: {
                        name: "domain",
                        label: t.text_domain_label,
                        options: t.domain_options,
                        description: t.text_domain_description,
                        is_error: t.field_errors.includes("domain")
                    },
                    on: {
                        is_error_update: function(e) {
                            return t.removeFieldError("domain")
                        }
                    },
                    model: {
                        value: t.domain,
                        callback: function(e) {
                            t.domain = e
                        },
                        expression: "domain"
                    }
                }), i("settings-input-text", {
                    attrs: {
                        name: "client_id",
                        label: t.text_client_id_label,
                        is_error: t.field_errors.includes("client_id")
                    },
                    on: {
                        is_error_update: function(e) {
                            return t.removeFieldError("client_id")
                        }
                    },
                    model: {
                        value: t.client_id,
                        callback: function(e) {
                            t.client_id = e
                        },
                        expression: "client_id"
                    }
                }), i("settings-input-text", {
                    attrs: {
                        name: "client_secret",
                        type: "password",
                        label: t.text_client_secret_label,
                        is_error: t.field_errors.includes("client_secret")
                    },
                    on: {
                        is_error_update: function(e) {
                            return t.removeFieldError("client_secret")
                        }
                    },
                    model: {
                        value: t.client_secret,
                        callback: function(e) {
                            t.client_secret = e
                        },
                        expression: "client_secret"
                    }
                }), i("settings-input-text", {
                    attrs: {
                        value: t.redirect_uri,
                        name: "redirect_uri",
                        label: t.text_redirect_uri_label,
                        copy: "",
                        readonly: ""
                    }
                }), i("settings-o-auth-connection", {
                    attrs: {
                        label: t.text_authorization_label,
                        mailer: t.mailer,
                        connected_email: t.connected_email_address,
                        is_auth_required: t.is_auth_required,
                        client_id: t.client_id,
                        client_secret: t.client_secret
                    }
                }), t.is_auth_required ? t._e() : i("div", [i("settings-input-text", {
                    attrs: {
                        name: "from_name",
                        label: t.text_from_name_label,
                        description: t.text_from_name_description
                    },
                    model: {
                        value: t.from_name,
                        callback: function(e) {
                            t.from_name = e
                        },
                        expression: "from_name"
                    }
                }), i("settings-input-switch", {
                    attrs: {
                        classname: "sub_setting",
                        name: "from_name_force",
                        title: t.text_force_from_name_title,
                        label: t.text_force_from_name_label
                    },
                    model: {
                        value: t.from_name_force,
                        callback: function(e) {
                            t.from_name_force = e
                        },
                        expression: "from_name_force"
                    }
                })], 1)], 1)])
            },
            hs = [],
            gs = {
                name: "WizardStepConfigureMailerZoho",
                components: {
                    SettingsInputText: Ut,
                    SettingsInputSwitch: ii,
                    SettingsInputSelect: Li,
                    SettingsOAuthConnection: as
                },
                data: function() {
                    return {
                        mailer: "zoho",
                        text_domain_label: Object(c["a"])("Region", "mo2f-setup"),
                        text_domain_description: Object(c["a"])("The data center location used by your Zoho account.", "mo2f-setup"),
                        text_client_id_label: Object(c["a"])("Client ID", "mo2f-setup"),
                        text_client_secret_label: Object(c["a"])("Client Secret", "mo2f-setup"),
                        text_redirect_uri_label: Object(c["a"])("Redirect URI", "mo2f-setup"),
                        text_authorization_label: Object(c["a"])("Authorization", "mo2f-setup"),
                        text_from_name_label: Object(c["a"])("From Name", "mo2f-setup"),
                        text_force_from_name_title: Object(c["a"])("Force From Name", "mo2f-setup"),
                        text_force_from_name_label: Object(c["a"])("If enabled, the From Name setting above will be used for all emails, ignoring values set by other plugins.", "mo2f-setup"),
                        text_from_name_description: Object(c["a"])("The name that emails are sent from.", "mo2f-setup"),
                        text_documentation_link: Object(c["a"])("Read how to set up Zoho Mail", "mo2f-setup"),
                        description: this.$wpms.mailer_options.zoho.description.substr(0, this.$wpms.mailer_options.zoho.description.indexOf("<br>")),
                        redirect_uri: this.$wpms.mailer_options.zoho.redirect_uri,
                        domain_options: this.$wpms.mailer_options.zoho.domain_options,
                        field_errors: []
                    }
                },
                computed: Object(n["a"])(Object(n["a"])(Object(n["a"])(Object(n["a"])({}, Object(ut["b"])("$_settings", ["settings.zoho.domain", "settings.zoho.client_id", "settings.zoho.client_secret", "settings.zoho.access_token", "settings.zoho.refresh_token", "settings.mail.from_name", "settings.mail.from_name_force"])), Object(ut["b"])("$_wizard", ["blocked_step"])), Object(nt["b"])({
                    connected_email_address: "$_settings/zoho_email"
                })), {}, {
                    is_auth_required: function() {
                        return !this.access_token || !this.refresh_token
                    }
                }),
                watch: {
                    is_auth_required: function(t) {
                        this.blocked_step = t
                    }
                },
                methods: {
                    areRequiredFieldsValid: function() {
                        var t = !0;
                        return "" === this.domain && (t = !1, this.field_errors.push("domain")), "" === this.client_id && (t = !1, this.field_errors.push("client_id")), "" === this.client_secret && (t = !1, this.field_errors.push("client_secret")), t
                    },
                    removeFieldError: function(t) {
                        this.field_errors = this.field_errors.filter((function(e) {
                            return e !== t
                        }))
                    }
                },
                mounted: function() {
                    this.is_auth_required && (this.blocked_step = !0)
                }
            },
            ws = gs,
            bs = Object(_["a"])(ws, fs, hs, !1, null, null, null),
            As = bs.exports,
            vs = new o["a"]({
                routes: [{
                    path: "*",
                    redirect: "/"
                }, {
                    path: "/",
                    name: "welcome",
                    component: O
                }, {
                    path: "/step",
                    name: "step",
                    component: N,
                    children: [{
                        path: "import",
                        name: "import_step",
                        component: it
                    }, {
                        path: "choose_mailer",
                        name: "choose_mailer_step",
                        component: ct
                    }, {
                        path: "configure_mailer",
                        name: "configure_mailer_step",
                        component: ht,
                        children: [{
                            path: "smtp",
                            name: "configure_mailer_step_smtp",
                            component: oi
                        }, {
                            path: "smtpcom",
                            name: "configure_mailer_step_smtpcom",
                            component: ui
                        }, {
                            path: "sendinblue",
                            name: "configure_mailer_step_sendinblue",
                            component: wi
                        }, {
                            path: "mailgun",
                            name: "configure_mailer_step_mailgun",
                            component: Ci
                        }, {
                            path: "sendgrid",
                            name: "configure_mailer_step_sendgrid",
                            component: Ei
                        }, {
                            path: "amazoneses",
                            name: "configure_mailer_step_amazonses",
                            component: qi
                        }, {
                            path: "gmail",
                            name: "configure_mailer_step_gmail",
                            component: ls
                        }, {
                            path: "outlook",
                            name: "configure_mailer_step_outlook",
                            component: _s
                        }, {
                            path: "zoho",
                            name: "configure_mailer_step_zoho",
                            component: As
                        }]
                    }, {
                        path: "plugin_features",
                        name: "plugin_features_step",
                        component: St
                    }, {
                        path: "help_improve",
                        name: "help_improve_step",
                        component: Xt
                    }, {
                        path: "license",
                        name: "license_step",
                        component: oe
                    }, {
                        path: "check_configuration",
                        name: "check_configuration_step",
                        component: ue
                    }, {
                        path: "successful_configuration",
                        name: "check_configuration_step_success",
                        component: Ee
                    }, {
                        path: "failed_configuration",
                        name: "check_configuration_step_failure",
                        component: De
                    }]
                }],
                scrollBehavior: function() {
                    return {
                        x: 0,
                        y: 0
                    }
                }
            }),
            xs = {
                name: "SetupWizardApp",
                router: vs,
                computed: Object(n["a"])({}, Object(nt["b"])({
                    blocked: "$_app/blocked",
                    loading: "$_app/loading"
                }))
            },
            ys = xs,
            Cs = Object(_["a"])(ys, s, a, !1, null, null, null),
            ks = Cs.exports,
            Os = i("2b0e"),
            js = i("5886"),
            Ss = (i("466d"), {
                install: function(t) {
                    window.wp_mail_smtp_vue && (t.prototype.$wpms = window.wp_mail_smtp_vue), t.prototype.$isPro = Ps, t.prototype.$addQueryArg = Es
                }
            });

        function Ps() {
            return window.wp_mail_smtp_vue.is_pro
        }

        function Es(t, e, i) {
            var s = new RegExp("([?&])" + e + "=.*?(&|#|$)", "i");
            if (t.match(s)) return t.replace(s, "$1" + e + "=" + i + "$2");
            var a = ""; - 1 !== t.indexOf("#") && (a = t.replace(/.*#/, "#"), t = t.replace(/#.*/, ""));
            var n = -1 !== t.indexOf("?") ? "&" : "?";
            return t + n + e + "=" + i + a
        }
        var Ts = Ss,
            zs = {
                install: function(t) {
                    t.prototype.$next_step = function() {
                        var e = this,
                            i = t.prototype.$wizard_steps.findIndex((function(t) {
                                return e.$route.name.includes(t)
                            })) + 1;
                        this.$router.push({
                            name: t.prototype.$wizard_steps[i]
                        })
                    }, t.prototype.$previous_step = function() {
                        var e = this,
                            i = "welcome",
                            s = t.prototype.$wizard_steps.findIndex((function(t) {
                                return e.$route.name.includes(t)
                            })) - 1;
                        s >= 0 && (i = t.prototype.$wizard_steps[s]), this.$router.push({
                            name: i
                        })
                    }, t.prototype.$swal && (t.prototype.$wpms_success_toast = function(e) {
                        var i = e.animation,
                            s = void 0 !== i && i,
                            a = e.toast,
                            n = void 0 === a || a,
                            o = e.position,
                            r = void 0 === o ? "top-end" : o,
                            l = e.showConfirmButton,
                            p = void 0 !== l && l,
                            m = e.icon,
                            u = void 0 === m ? "success" : m,
                            d = e.timer,
                            _ = void 0 === d ? 3e3 : d,
                            f = e.showCloseButton,
                            h = void 0 === f || f,
                            g = e.title,
                            w = void 0 === g ? Object(c["a"])("Settings Updated", "mo2f-setup") : g,
                            b = e.showCancelButton,
                            A = void 0 !== b && b,
                            v = e.confirmButtonText,
                            x = void 0 === v ? "" : v,
                            y = e.cancelButtonText,
                            C = void 0 === y ? "" : y,
                            k = e.text,
                            O = void 0 === k ? "" : k;
                        return t.prototype.$swal({
                            animation: s,
                            toast: n,
                            position: r,
                            showConfirmButton: p,
                            icon: u,
                            showCloseButton: h,
                            title: w,
                            timer: _,
                            showCancelButton: A,
                            confirmButtonText: x,
                            cancelButtonText: C,
                            text: O
                        })
                    }, t.prototype.$wpms_error_toast = function(e) {
                        var i = e.animation,
                            s = void 0 !== i && i,
                            a = e.toast,
                            n = void 0 === a || a,
                            o = e.position,
                            r = void 0 === o ? "top-end" : o,
                            l = e.showConfirmButton,
                            p = void 0 !== l && l,
                            m = e.icon,
                            u = void 0 === m ? "error" : m,
                            d = e.showCloseButton,
                            _ = void 0 === d || d,
                            f = e.title,
                            h = void 0 === f ? Object(c["a"])("Could Not Save Changes", "mo2f-setup") : f,
                            g = e.text,
                            w = void 0 === g ? "" : g;
                        return t.prototype.$swal({
                            animation: s,
                            toast: n,
                            position: r,
                            showConfirmButton: p,
                            icon: u,
                            showCloseButton: _,
                            title: h,
                            text: w,
                            onOpen: function() {
                                t.prototype.$swal.hideLoading()
                            }
                        })
                    }, t.prototype.$wpms_error_modal = function(e) {
                        var i = e.position,
                            s = void 0 === i ? "center" : i,
                            a = e.width,
                            n = void 0 === a ? 650 : a,
                            o = e.showConfirmButton,
                            r = void 0 === o || o,
                            l = e.confirmButtonText,
                            p = void 0 === l ? Object(c["a"])("Return to Mailer Settings", "mo2f-setup") : l,
                            m = e.customClass,
                            u = void 0 === m ? {
                                container: "mo2f-setup-swal mo2f-setup-swal-error"
                            } : m,
                            d = e.showCloseButton,
                            _ = void 0 === d || d,
                            f = e.title,
                            h = void 0 === f ? Object(c["a"])("Whoops, we found an issue!", "mo2f-setup") : f,
                            g = e.subtitle,
                            w = void 0 === g ? Object(c["a"])("It looks like something went wrong...", "mo2f-setup") : g,
                            b = e.detailedError,
                            A = void 0 === b ? "" : b;
                        return t.prototype.$swal({
                            position: s,
                            width: n,
                            showConfirmButton: r,
                            confirmButtonText: p,
                            customClass: u,
                            showCloseButton: _,
                            title: h,
                            html: '\n\t\t\t\t\t\t<p class="subtitle">'.concat(w, '</p>\n\t\t\t\t\t\t<div class="detailed-error">\n\t\t\t\t\t\t\t<h3>').concat(Object(c["a"])("Error Message:", "mo2f-setup"), "</h3>\n\t\t\t\t\t\t\t<div>").concat(A, "</div>\n\t\t\t\t\t\t</div>\n\t\t\t\t\t"),
                            allowEscapeKey: !1,
                            allowOutsideClick: !1,
                            onOpen: function() {
                                t.prototype.$swal.hideLoading()
                            }
                        })
                    }, t.prototype.$required_fields_modal = function() {
                        return t.prototype.$swal({
                            position: "center",
                            width: 450,
                            showConfirmButton: !0,
                            confirmButtonText: Object(c["a"])("OK", "mo2f-setup"),
                            customClass: {
                                container: "mo2f-setup-swal mo2f-setup-swal-alert"
                            },
                            showCloseButton: !0,
                            title: Object(c["a"])("Heads up!", "mo2f-setup"),
                            text: Object(c["a"])("Please fill out all the required fields to continue.", "mo2f-setup"),
                            allowEscapeKey: !1,
                            allowOutsideClick: !1
                        })
                    })
                }
            },
            Bs = zs,
            Is = i("bc3a"),
            Ms = i.n(Is),
            Ds = function(t, e) {
                return new Promise((function(i, s) {
                    var a = new FormData;
                    a.append("action", "wp_mail_smtp_vue_install_plugin"), a.append("nonce", Os["a"].prototype.$wpms.nonce), a.append("slug", e), Ms.a.post(Os["a"].prototype.$wpms.ajax_url, a).then((function(e) {
                        if (e.data.success) t.commit("PLUGIN_INSTALLED", e.data);
                        else {
                            var s = "";
                            ie()(e.data, "data[0].message") ? s = e.data.data[0].message : ie()(e.data, "data") && (s = e.data.data), Os["a"].prototype.$wpms_error_modal({
                                subtitle: Object(c["a"])("It looks like the plugin installation failed!", "mo2f-setup"),
                                detailedError: s
                            })
                        }
                        i(e.data)
                    })).catch((function(t) {
                        if (s(t), t.response) {
                            var e = t.response;
                            return Os["a"].prototype.$wpms_error_modal({
                                subtitle: Object(c["a"])("It looks like we can't install the plugin.", "mo2f-setup"),
                                detailedError: Object(c["c"])(Object(c["a"])("%1$s, %2$s", "mo2f-setup"), e.status, e.statusText)
                            })
                        }
                        Os["a"].prototype.$wpms_error_toast({
                            title: Object(c["a"])("You appear to be offline. Plugin not installed.", "mo2f-setup")
                        })
                    }))
                }))
            },
            Fs = function(t) {
                return new Promise((function(e, i) {
                    var s = new FormData;
                    s.append("action", "wp_mail_smtp_vue_get_partner_plugins_info"), s.append("nonce", Os["a"].prototype.$wpms.nonce), Ms.a.post(Os["a"].prototype.$wpms.ajax_url, s).then((function(i) {
                        i.data.success ? t.commit("PLUGINS_FETCHED", i.data) : Os["a"].prototype.$wpms_error_toast({
                            title: Object(c["a"])("Can't fetch plugins information.", "mo2f-setup")
                        }), e(i.data)
                    })).catch((function(t) {
                        if (i(t), t.response) {
                            var e = t.response;
                            return Os["a"].prototype.$wpms_error_modal({
                                subtitle: Object(c["a"])("It looks like we can't fetch plugins information.", "mo2f-setup"),
                                detailedError: Object(c["c"])(Object(c["a"])("%1$s, %2$s", "mo2f-setup"), e.status, e.statusText)
                            })
                        }
                        Os["a"].prototype.$wpms_error_toast({
                            title: Object(c["a"])("You appear to be offline. Plugin information not retrieved.", "mo2f-setup")
                        })
                    }))
                }))
            },
            Ns = {
                installPlugin: Ds,
                fetchPlugins: Fs
            },
            Qs = function(t, e) {
                return Ns.installPlugin(t, e)
            },
            Ls = function(t) {
                return Ns.fetchPlugins(t)
            },
            Ws = {
                installPlugin: Qs,
                getPlugins: Ls
            },
            Us = function(t) {
                return t.plugins
            },
            Hs = function(t) {
                return t.plugins.filter((function(t) {
                    return "wpforms-lite" !== t.slug
                }))
            },
            Rs = function(t) {
                return t.contact_form_plugin_already_installed
            },
            Gs = {
                getField: ut["a"],
                plugins: Us,
                partner_plugins: Hs,
                contact_form_plugin_already_installed: Rs
            },
            Vs = (i("d81d"), function(t, e) {
                t.plugins.map((function(i) {
                    return i.slug === e.data.slug && (i.is_installed = e.data.is_installed, i.is_activated = e.data.is_activated), "wpforms-lite" === e.data.slug && (t.contact_form_plugin_already_installed = !0), i
                }))
            }),
            Ys = function(t, e) {
                t.plugins = e.data.plugins, t.contact_form_plugin_already_installed = e.data.contact_form_plugin_already_installed
            },
            Js = {
                updateField: ut["c"],
                PLUGIN_INSTALLED: Vs,
                PLUGINS_FETCHED: Ys
            },
            Ks = {
                plugins: [],
                contact_form_plugin_already_installed: !1,
                smart_contact_form_setting: !0
            },
            qs = {
                namespaced: !0,
                state: Ks,
                actions: Ws,
                getters: Gs,
                mutations: Js
            },
            Zs = (i("b64b"), function(t) {
                return new Promise((function(e, i) {
                    var s = new FormData;
                    s.append("action", "wp_mail_smtp_vue_get_settings"), s.append("nonce", Os["a"].prototype.$wpms.nonce), Ms.a.post(Os["a"].prototype.$wpms.ajax_url, s).then((function(t) {
                        t.data.success ? e(t.data) : i(t.data)
                    })).catch((function(e) {
                        if (t.dispatch("$_app/block", !1, {
                                root: !0
                            }), e.response) {
                            var i = e.response;
                            return Os["a"].prototype.$wpms_error_modal({
                                subtitle: Object(c["a"])("It looks like we can't load the settings.", "mo2f-setup"),
                                detailedError: Object(c["c"])(Object(c["a"])("%1$s, %2$s", "mo2f-setup"), i.status, i.statusText)
                            })
                        }
                        Os["a"].prototype.$wpms_error_toast({
                            title: Object(c["a"])("You appear to be offline.", "mo2f-setup")
                        })
                    }))
                }))
            }),
            Xs = function(t, e) {
                return new Promise((function(t, i) {
                    var s = new FormData;
                    s.append("action", "wp_mail_smtp_vue_get_amazon_ses_identities"), s.append("nonce", Os["a"].prototype.$wpms.nonce), !1 !== e && s.append("value", JSON.stringify(e)), Ms.a.post(Os["a"].prototype.$wpms.ajax_url, s).then((function(e) {
                        e.data.success ? t(e.data) : i(e.data)
                    })).catch((function(t) {
                        if (t.response) {
                            var e = t.response;
                            return Os["a"].prototype.$wpms_error_modal({
                                subtitle: Object(c["a"])("It looks like we can't retrieve Amazon SES Identities.", "mo2f-setup"),
                                detailedError: Object(c["c"])(Object(c["a"])("%1$s, %2$s", "mo2f-setup"), e.status, e.statusText)
                            })
                        }
                        Os["a"].prototype.$wpms_error_toast({
                            title: Object(c["a"])("Can't retrieve Amazon SES Identities.", "mo2f-setup")
                        })
                    }))
                }))
            },
            $s = function(t, e) {
                return new Promise((function(t, i) {
                    var s = new FormData;
                    s.append("action", "wp_mail_smtp_vue_amazon_ses_identity_registration"), s.append("nonce", Os["a"].prototype.$wpms.nonce), !1 !== e.value && s.append("value", e.value), !1 !== e.value && s.append("type", e.type), Ms.a.post(Os["a"].prototype.$wpms.ajax_url, s).then((function(e) {
                        e.data.success ? t(e.data) : i(e.data)
                    })).catch((function(t) {
                        if (t.response) {
                            var e = t.response;
                            return Os["a"].prototype.$wpms_error_modal({
                                subtitle: Object(c["a"])("It looks like we can't register the Amazon SES Identity.", "mo2f-setup"),
                                detailedError: Object(c["c"])(Object(c["a"])("%1$s, %2$s", "mo2f-setup"), e.status, e.statusText)
                            })
                        }
                        Os["a"].prototype.$wpms_error_toast({
                            title: Object(c["a"])("Can't register the Amazon SES Identity", "mo2f-setup")
                        })
                    }))
                }))
            },
            ta = function(t, e) {
                return new Promise((function(t) {
                    var i = new FormData;
                    i.append("action", "wp_mail_smtp_vue_update_settings"), i.append("nonce", Os["a"].prototype.$wpms.nonce), void 0 !== e.overwrite && i.append("overwrite", e.overwrite), !1 !== e.value && i.append("value", JSON.stringify(e.value)), Ms.a.post(Os["a"].prototype.$wpms.ajax_url, i).then((function(e) {
                        t(e.data)
                    })).catch((function(t) {
                        if (t.response) {
                            var e = t.response;
                            return Os["a"].prototype.$wpms_error_modal({
                                subtitle: Object(c["a"])("It looks like we can't save the settings.", "mo2f-setup"),
                                detailedError: Object(c["c"])(Object(c["a"])("%1$s, %2$s", "mo2f-setup"), e.status, e.statusText)
                            })
                        }
                        Os["a"].prototype.$wpms_error_toast({
                            title: Object(c["a"])("Network error encountered. Settings not saved.", "mo2f-setup")
                        })
                    }))
                }))
            },
            ea = function(t, e) {
                return new Promise((function(t) {
                    var i = new FormData;
                    i.append("action", "wp_mail_smtp_vue_import_settings"), i.append("nonce", Os["a"].prototype.$wpms.nonce), !1 !== e.value && i.append("value", e.value), Ms.a.post(Os["a"].prototype.$wpms.ajax_url, i).then((function(e) {
                        t(e.data)
                    })).catch((function(t) {
                        if (t.response) {
                            var e = t.response;
                            return Os["a"].prototype.$wpms_error_modal({
                                subtitle: Object(c["a"])("It looks like we can't import the plugin settings.", "mo2f-setup"),
                                detailedError: Object(c["c"])(Object(c["a"])("%1$s, %2$s", "mo2f-setup"), e.status, e.statusText)
                            })
                        }
                        Os["a"].prototype.$wpms_error_toast({
                            title: Object(c["a"])("Network error encountered. SMTP plugin import failed!", "mo2f-setup")
                        })
                    }))
                }))
            },
            ia = function(t, e) {
                return new Promise((function(i, s) {
                    var a = new FormData;
                    a.append("action", "wp_mail_smtp_vue_get_oauth_url"), a.append("nonce", Os["a"].prototype.$wpms.nonce), !1 !== t && a.append("mailer", t), !1 !== e && a.append("settings", JSON.stringify(e)), Ms.a.post(Os["a"].prototype.$wpms.ajax_url, a).then((function(t) {
                        t.data.success ? i(t.data) : s(t.data)
                    })).catch((function(t) {
                        if (t.response) {
                            var e = t.response;
                            return Os["a"].prototype.$wpms_error_modal({
                                subtitle: Object(c["a"])("It looks like we can't load authentication details.", "mo2f-setup"),
                                detailedError: Object(c["c"])(Object(c["a"])("%1$s, %2$s", "mo2f-setup"), e.status, e.statusText)
                            })
                        }
                        Os["a"].prototype.$wpms_error_toast({
                            title: Object(c["a"])("You appear to be offline.", "mo2f-setup")
                        })
                    }))
                }))
            },
            sa = function(t) {
                return new Promise((function(e, i) {
                    var s = new FormData;
                    s.append("action", "wp_mail_smtp_vue_remove_oauth_connection"), s.append("nonce", Os["a"].prototype.$wpms.nonce), !1 !== t && s.append("mailer", t), Ms.a.post(Os["a"].prototype.$wpms.ajax_url, s).then((function(t) {
                        t.data.success ? e(t.data) : i(t.data)
                    })).catch((function(t) {
                        if (t.response) {
                            var e = t.response;
                            return Os["a"].prototype.$wpms_error_modal({
                                subtitle: Object(c["a"])("It looks like we can't remove oAuth connection.", "mo2f-setup"),
                                detailedError: Object(c["c"])(Object(c["a"])("%1$s, %2$s", "mo2f-setup"), e.status, e.statusText)
                            })
                        }
                        Os["a"].prototype.$wpms_error_toast({
                            title: Object(c["a"])("You appear to be offline.", "mo2f-setup")
                        })
                    }))
                }))
            },
            aa = function(t) {
                return new Promise((function(e, i) {
                    var s = new FormData;
                    s.append("action", "wp_mail_smtp_vue_get_connected_data"), s.append("nonce", Os["a"].prototype.$wpms.nonce), !1 !== t && s.append("mailer", t), Ms.a.post(Os["a"].prototype.$wpms.ajax_url, s).then((function(t) {
                        t.data.success ? e(t.data) : i(t.data)
                    })).catch((function(t) {
                        if (t.response) {
                            var e = t.response;
                            return Os["a"].prototype.$wpms_error_modal({
                                subtitle: Object(c["a"])("It looks like we can't load oAuth connected data.", "mo2f-setup"),
                                detailedError: Object(c["c"])(Object(c["a"])("%1$s, %2$s", "mo2f-setup"), e.status, e.statusText)
                            })
                        }
                        Os["a"].prototype.$wpms_error_toast({
                            title: Object(c["a"])("You appear to be offline.", "mo2f-setup")
                        })
                    }))
                }))
            },
            na = function(t) {
                return new Promise((function(e) {
                    var i = new FormData;
                    i.append("action", "wp_mail_smtp_vue_subscribe_to_newsletter"), i.append("nonce", Os["a"].prototype.$wpms.nonce), i.append("email", t), Ms.a.post(Os["a"].prototype.$wpms.ajax_url, i).then((function(t) {
                        e(t.data)
                    }))
                }))
            },
            oa = function(t) {
                return new Promise((function(e) {
                    var i = new FormData;
                    i.append("action", "wp_mail_smtp_vue_verify_license_key"), i.append("nonce", Os["a"].prototype.$wpms.nonce), i.append("license_key", t), Ms.a.post(Os["a"].prototype.$wpms.ajax_url, i).then((function(t) {
                        e(t.data)
                    }))
                }))
            },
            ra = function(t) {
                return new Promise((function(e) {
                    var i = new FormData;
                    i.append("action", "wp_mail_smtp_vue_upgrade_plugin"), i.append("nonce", Os["a"].prototype.$wpms.nonce), i.append("license_key", t), Ms.a.post(Os["a"].prototype.$wpms.ajax_url, i).then((function(t) {
                        e(t.data)
                    }))
                }))
            },
            la = {
                fetchSettings: Zs,
                saveSettings: ta,
                importOtherPluginSettings: ea,
                fetchAmazonSESIdentities: Xs,
                amazonSESRegisterIdentity: $s,
                getAuthRedirect: ia,
                removeAuth: sa,
                getConnectedData: aa,
                subscribeToNewsletter: na,
                verifyLicense: oa,
                upgradePlugin: ra
            },
            ca = function(t) {
                return la.fetchSettings(t).then((function(e) {
                    t.commit("SETTINGS_UPDATED", e.data)
                })).catch((function(t) {
                    if (t.data) return Os["a"].prototype.$wpms_error_modal({
                        subtitle: Object(c["a"])("It looks like we can't load existing settings.", "mo2f-setup"),
                        detailedError: t.data
                    })
                }))
            },
            pa = function(t) {
                var e = t.getters.settings.amazonses;
                if (0 !== Object.keys(e).length) return la.fetchAmazonSESIdentities(t, e).then((function(e) {
                    t.commit("AMAZONSES_IDENTITIES_UPDATED", e), Os["a"].swal.close()
                })).catch((function(t) {
                    Os["a"].prototype.$wpms_error_modal({
                        subtitle: Object(c["a"])("It looks like we can't retrieve the Amazon SES Identities.", "mo2f-setup"),
                        detailedError: t.data ? t.data : ""
                    })
                }))
            },
            ma = function(t, e) {
                return la.amazonSESRegisterIdentity(t, e).catch((function(t) {
                    Os["a"].prototype.$wpms_error_modal({
                        subtitle: Object(c["a"])("It looks like we can't register the Amazon SES Identity.", "mo2f-setup"),
                        detailedError: t.data
                    })
                }))
            },
            ua = function(t, e) {
                t.commit("MAILER_UPDATE", e)
            },
            da = function(t, e) {
                return new Promise((function(i) {
                    t.commit("LOGS_UPDATE", e), i({
                        success: !0
                    })
                }))
            },
            _a = function(t, e) {
                t.commit("SETTINGS_SAVE_START");
                var i = la.saveSettings(t, e);
                return i.then((function() {
                    t.commit("SETTINGS_SAVE_END")
                })), i
            },
            fa = function(t) {
                var e = t.getters.settings;
                t.commit("SETTINGS_SAVE_START");
                var i = la.saveSettings(t, {
                    value: e
                });
                return i.then((function() {
                    t.commit("SETTINGS_SAVE_END")
                })), i
            },
            ha = function(t, e) {
                return t.commit("SETTINGS_SAVE_START"), new Promise((function(i) {
                    la.importOtherPluginSettings(t, e).then((function(e) {
                        t.commit("SETTINGS_SAVE_END"), e.success ? ca(t).then((function() {
                            i(!0)
                        })) : i(!1)
                    }))
                }))
            },
            ga = function(t, e) {
                return la.getAuthRedirect(e, t.getters.settings[e]).catch((function(t) {
                    Os["a"].prototype.$wpms_error_modal({
                        subtitle: Object(c["a"])("It looks like we can't load oAuth redirect.", "mo2f-setup"),
                        detailedError: t.data
                    })
                }))
            },
            wa = function(t, e) {
                return la.getConnectedData(e).catch((function(t) {
                    Os["a"].prototype.$wpms_error_modal({
                        subtitle: Object(c["a"])("It looks like we can't load oAuth connected data.", "mo2f-setup"),
                        detailedError: t.data
                    })
                }))
            },
            ba = function(t, e) {
                return la.removeAuth(e).then((function() {
                    t.commit("SETTINGS_REMOVE_AUTH", e)
                })).catch((function(t) {
                    Os["a"].prototype.$wpms_error_modal({
                        subtitle: Object(c["a"])("It looks like we can't remove oAuth connection.", "mo2f-setup"),
                        detailedError: t.data
                    })
                }))
            },
            Aa = function(t, e) {
                return new Promise((function(i) {
                    t.commit("SETTINGS_SAVE_PLUGIN_FEATURES", e), i({
                        success: !0,
                        features: e
                    })
                }))
            },
            va = function(t, e) {
                return la.subscribeToNewsletter(e)
            },
            xa = function(t, e) {
                return la.verifyLicense(e)
            },
            ya = function(t, e) {
                return la.upgradePlugin(e)
            },
            Ca = {
                getSettings: ca,
                updateSettings: _a,
                importOtherPlugin: ha,
                setMailer: ua,
                setLogs: da,
                saveCurrentSettings: fa,
                getAmazonSESIdentities: pa,
                amazonSESRegisterIdentity: ma,
                getAuthUrl: ga,
                removeAuth: ba,
                getConnectedData: wa,
                savePluginFeatures: Aa,
                subscribeToNewsletter: va,
                verifyLicense: xa,
                upgradePlugin: ya
            },
            ka = (i("4160"), i("1276"), i("159b"), function(t) {
                return t.settings
            }),
            Oa = function(t) {
                return t.settings.mail.mailer
            },
            ja = function(t) {
                return t.settings.outlook.user_details ? t.settings.outlook.user_details.email : null
            },
            Sa = function(t) {
                return t.settings.zoho.user_details ? t.settings.zoho.user_details.email : null
            },
            Pa = function(t) {
                return t.plugin_features
            },
            Ea = function(t) {
                return !!t.settings.logs.enabled && t.settings.logs.enabled
            },
            Ta = function(t) {
                return function(e) {
                    var i = !1,
                        s = t.amazonses_identities.data,
                        a = e.split("@").pop();
                    return void 0 !== s && (s.forEach((function(t) {
                        ("email" === t.type && t.value === e || "domain" === t.type && t.value === a) && (i = !0)
                    })), i)
                }
            },
            za = {
                getField: ut["a"],
                settings: ka,
                mailer: Oa,
                outlook_email: ja,
                zoho_email: Sa,
                plugin_features: Pa,
                amazonses_is_email_registered: Ta,
                email_log_enabled: Ea
            },
            Ba = i("da81"),
            Ia = i.n(Ba),
            Ma = function(t, e) {
                t.is_saving = !1, t.settings = Ia()(t.settings, e)
            },
            Da = function(t, e) {
                t.amazonses_identities = e.data
            },
            Fa = function(t, e) {
                t.settings.mail.mailer = e
            },
            Na = function(t, e) {
                t.settings.logs.enabled = e
            },
            Qa = function(t) {
                t.is_saving = !0
            },
            La = function(t) {
                t.is_saving = !1
            },
            Wa = function(t, e) {
                var i = t.settings[e];
                t.settings[e] = {
                    client_id: i.client_id,
                    client_secret: i.client_secret
                }, "zoho" === e && (t.settings[e].domain = i.domain)
            },
            Ua = function(t, e) {
                t.plugin_features = e
            },
            Ha = {
                updateField: ut["c"],
                SETTINGS_UPDATED: Ma,
                SETTINGS_SAVE_START: Qa,
                SETTINGS_SAVE_END: La,
                MAILER_UPDATE: Fa,
                LOGS_UPDATE: Na,
                AMAZONSES_IDENTITIES_UPDATED: Da,
                SETTINGS_REMOVE_AUTH: Wa,
                SETTINGS_SAVE_PLUGIN_FEATURES: Ua
            },
            Ra = {
                settings: {
                    mail: {
                        mailer: "mail",
                        from_email: "",
                        from_name: "",
                        return_path: !1,
                        from_email_force: !0,
                        from_name_force: !1
                    },
                    smtp: {
                        host: "",
                        port: "587",
                        encryption: "tls",
                        autotls: !0,
                        auth: !0,
                        user: "",
                        pass: ""
                    },
                    smtpcom: {
                        api_key: "",
                        channel: ""
                    },
                    sendinblue: {
                        api_key: "",
                        domain: ""
                    },
                    mailgun: {
                        api_key: "",
                        domain: "",
                        region: "US"
                    },
                    sendgrid: {
                        api_key: "",
                        domain: ""
                    },
                    amazonses: {
                        client_id: "",
                        client_secret: "",
                        region: "us-east-1"
                    },
                    gmail: {
                        client_id: "",
                        client_secret: "",
                        access_token: {},
                        refresh_token: ""
                    },
                    outlook: {
                        client_id: "",
                        client_secret: "",
                        access_token: {},
                        refresh_token: "",
                        user_details: {
                            email: ""
                        }
                    },
                    zoho: {
                        client_id: "",
                        client_secret: "",
                        domain: "com",
                        access_token: {},
                        refresh_token: "",
                        user_details: {
                            email: ""
                        }
                    },
                    logs: {
                        enabled: !1
                    }
                },
                amazonses_identities: {},
                plugin_features: []
            },
            Ga = {
                namespaced: !0,
                state: Ra,
                actions: Ca,
                getters: za,
                mutations: Ha
            },
            Va = function() {
                return new Promise((function(t) {
                    var e = new FormData;
                    e.append("action", "wp_mail_smtp_vue_check_mailer_configuration"), e.append("nonce", Os["a"].prototype.$wpms.nonce), Ms.a.post(Os["a"].prototype.$wpms.ajax_url, e).then((function(e) {
                        t(e.data)
                    })).catch((function(t) {
                        if (t.response) {
                            var e = t.response;
                            return Os["a"].prototype.$wpms_error_modal({
                                subtitle: Object(c["a"])("It looks like we can't perform the mailer configuration check.", "mo2f-setup"),
                                detailedError: Object(c["c"])(Object(c["a"])("%1$s, %2$s", "mo2f-setup"), e.status, e.statusText)
                            })
                        }
                        Os["a"].prototype.$wpms_error_toast({
                            title: Object(c["a"])("You appear to be offline.", "mo2f-setup")
                        })
                    }))
                }))
            },
            Ya = function(t) {
                var e = new FormData;
                e.append("action", "wp_mail_smtp_vue_send_feedback"), e.append("nonce", Os["a"].prototype.$wpms.nonce), e.append("data", JSON.stringify(t)), Ms.a.post(Os["a"].prototype.$wpms.ajax_url, e).catch((function(t) {
                    if (t.response) {
                        var e = t.response;
                        return Os["a"].prototype.$wpms_error_modal({
                            subtitle: Object(c["a"])("It looks like we can't send the feedback.", "mo2f-setup"),
                            detailedError: Object(c["c"])(Object(c["a"])("%1$s, %2$s", "mo2f-setup"), e.status, e.statusText)
                        })
                    }
                    Os["a"].prototype.$wpms_error_toast({
                        title: Object(c["a"])("You appear to be offline.", "mo2f-setup")
                    })
                }))
            },
            Ja = {
                checkMailerConfiguration: Va,
                sendFeedback: Ya
            },
            Ka = function() {
                return Ja.checkMailerConfiguration()
            },
            qa = function(t, e) {
                Ja.sendFeedback(e)
            },
            Za = {
                checkMailerConfiguration: Ka,
                sendFeedback: qa
            },
            Xa = function(t) {
                return t.blocked_step
            },
            $a = {
                getField: ut["a"],
                blocked_step: Xa
            },
            tn = {
                updateField: ut["c"]
            },
            en = {
                blocked_step: !1
            },
            sn = {
                namespaced: !0,
                state: en,
                actions: Za,
                getters: $a,
                mutations: tn
            },
            an = function(t) {
                t.commit("INIT")
            },
            nn = function(t) {
                t.commit("BLOCK_APP")
            },
            on = function(t) {
                t.commit("UNBLOCK_APP")
            },
            rn = function(t) {
                t.commit("APP_LOADING_START")
            },
            ln = function(t) {
                t.commit("APP_LOADING_STOP")
            },
            cn = {
                init: an,
                block: nn,
                unblock: on,
                start_loading: rn,
                stop_loading: ln
            },
            pn = function(t) {
                return t.blocked
            },
            mn = function(t) {
                return t.loading
            },
            un = function(t) {
                return t.wpms
            },
            dn = {
                blocked: pn,
                loading: mn,
                wpms: un
            },
            _n = function() {},
            fn = function(t) {
                t.blocked = !0
            },
            hn = function(t) {
                t.blocked = !1
            },
            gn = function(t) {
                t.loading = !0
            },
            wn = function(t) {
                t.loading = !1
            },
            bn = {
                INIT: _n,
                BLOCK_APP: fn,
                UNBLOCK_APP: hn,
                APP_LOADING_START: gn,
                APP_LOADING_STOP: wn
            },
            An = {
                blocked: !1,
                loading: !1,
                wpms: window.wp_mail_smtp_vue ? window.wp_mail_smtp_vue : {}
            },
            vn = {
                namespaced: !0,
                state: An,
                actions: cn,
                getters: dn,
                mutations: bn
            },
            xn = function(t) {
                t.subscribe((function(e, i) {
                    if ("$_app/INIT" === e.type) {
                        var s = i["$_app"].wpms.versions,
                            a = "",
                            n = "";
                        s.php_version_below_55 ? (a = Object(c["a"])("Yikes! PHP Update Required", "mo2f-setup"), n = Object(c["c"])(Object(c["a"])("WP Mail SMTP has detected that your site is running an outdated, insecure version of PHP (%1$s), which could be putting your site at risk for being hacked. WordPress stopped supporting your PHP version in April, 2019. Updating to the recommended version (PHP %2$s) only takes a few minutes and will make your website significantly faster and more secure.", "mo2f-setup"), s.php_version, "7.4")) : s.php_version_below_56 ? (a = Object(c["a"])("Yikes! PHP Update Required", "mo2f-setup"), n = Object(c["c"])(Object(c["a"])("WP Mail SMTP has detected that your site is running an outdated, insecure version of PHP (%1$s). Some mailers require at least PHP version 5.6. Updating to the recommended version (PHP %2$s) only takes a few minutes and will make your website significantly faster and more secure.", "mo2f-setup"), s.php_version, "7.4")) : s.wp_version_below_49 && (a = Object(c["a"])("Yikes! WordPress Update Required", "mo2f-setup"), n = Object(c["c"])(Object(c["a"])("WP Mail SMTP has detected that your site is running an outdated version of WordPress (%s). WP Mail SMTP requires at least WordPress version 4.9.", "mo2f-setup"), s.wp_version)), Os["a"].prototype.$swal && a.length && (t.dispatch("$_app/block"), Os["a"].prototype.$swal.close(), Os["a"].prototype.$swal({
                            title: a,
                            html: "<p>".concat(n, '</p><p><a href="').concat(Os["a"].prototype.$wpms.exit_url, '">').concat(Object(c["a"])("Return to Plugin Settings", "mo2f-setup"), "</a></p>"),
                            customClass: {
                                container: "mo2f-setup-swal mo2f-setup-swal-alert"
                            },
                            allowOutsideClick: !1,
                            allowEscapeKey: !1,
                            allowEnterKey: !1,
                            showConfirmButton: !1,
                            onOpen: function() {
                                Os["a"].prototype.$swal.hideLoading()
                            }
                        }))
                    }
                }))
            },
            yn = xn;
        Os["a"].use(nt["a"]);
        var Cn = [yn],
            kn = new nt["a"].Store({
                modules: {
                    $_app: vn,
                    $_plugins: qs,
                    $_settings: Ga,
                    $_wizard: sn
                },
                plugins: Cn
            }),
            On = i("e37d"),
            jn = (i("6c6b"), i("6d5e")),
            Sn = document.getElementById("mo2f-setup-vue-setup-wizard");
        Os["a"].config.productionTip = !1, i.p = window.wp_mail_smtp_vue.public_url, Os["a"].use(jn["InlineSvgPlugin"]), Os["a"].use(o["a"]), Os["a"].use(js["a"]), Os["a"].use(On["a"], {
            defaultTemplate: '<div class="mo2f-setup-tooltip" role="tooltip"><div class="mo2f-setup-tooltip-arrow"></div><div class="mo2f-setup-tooltip-inner"></div></div>',
            defaultArrowSelector: ".mo2f-setup-tooltip-arrow, .mo2f-setup-tooltip__arrow",
            defaultInnerSelector: ".mo2f-setup-tooltip-inner, .mo2f-setup-tooltip__inner"
        }), Os["a"].use(Ts), Object(c["b"])(window.wp_mail_smtp_vue.translations, "mo2f-setup");
        var Pn = {
            install: function(t) {
                t.prototype.$wizard_steps = [], t.prototype.$wpms && t.prototype.$wpms.other_2FA_plugins.length > 0 && t.prototype.$wizard_steps.push("import_step"), t.prototype.$wizard_steps.push("choose_mailer_step"), t.prototype.$wizard_steps.push("configure_mailer_step"), t.prototype.$wizard_steps.push("plugin_features_step"), t.prototype.$wpms && !t.prototype.$wpms.is_pro && t.prototype.$wizard_steps.push("help_improve_step"), t.prototype.$wizard_steps.push("license_step"), t.prototype.$wizard_steps.push("check_configuration_step")
            }
        };
        Os["a"].use(Pn), Os["a"].use(Bs), new Os["a"]({
            store: kn,
            mounted: function() {
                kn.dispatch("$_app/init")
            },
            render: function(t) {
                return t(ks)
            }
        }).$mount(Sn)
    },
    "9f86": function(t, e) {
        t.exports = "data:image/png;base64,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"
    },
    "9fec": function(t, e, i) {},
    a1c2: function(t, e) {
        t.exports = "data:image/png;base64,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"
    },
    b0d2: function(t, e, i) {},
    b1c2: function(t, e, i) {
        t.exports = i.p + "img/sendgrid.svg"
    },
    b32f: function(t, e, i) {
        t.exports = i.p + "img/lock-solid.svg"
    },
    b98f: function(t, e, i) {
        t.exports = i.p + "img/wp-smtp.png"
    },
    ba75: function(t, e, i) {
        "use strict";
        i("b0d2")
    },
    bbc2: function(t, e, i) {
        var s = {
            "./all-in-one-seo-pack.png": "9da7",
            "./all-in-one-seo-pack@2x.png": "2cf42",
            "./coming-soon.png": "d686",
            "./coming-soon@2x.png": "9f86",
            "./google-analytics-for-wordpress.png": "c2d9",
            "./google-analytics-for-wordpress@2x.png": "82f2",
            "./instagram-feed.png": "e0ed",
            "./instagram-feed@2x.png": "877f",
            "./rafflepress.png": "d3f3",
            "./rafflepress@2x.png": "a1c2",
            "./wp-call-button.png": "2adc",
            "./wp-call-button@2x.png": "1532"
        };

        function a(t) {
            var e = n(t);
            return i(e)
        }

        function n(t) {
            if (!i.o(s, t)) {
                var e = new Error("Cannot find module '" + t + "'");
                throw e.code = "MODULE_NOT_FOUND", e
            }
            return s[t]
        }
        a.keys = function() {
            return Object.keys(s)
        }, a.resolve = n, t.exports = a, a.id = "bbc2"
    },
    c2d9: function(t, e) {
        t.exports = "data:image/png;base64,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"
    },
    c869: function(t, e, i) {
        t.exports = i.p + "img/loading-pattie.svg"
    },
    cc99: function(t, e, i) {},
    d3f3: function(t, e) {
        t.exports = "data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAACAAAAAgCAYAAABzenr0AAAAAXNSR0IArs4c6QAAADhlWElmTU0AKgAAAAgAAYdpAAQAAAABAAAAGgAAAAAAAqACAAQAAAABAAAAIKADAAQAAAABAAAAIAAAAACPTkDJAAAFG0lEQVRYCaVXa0xcRRQ+M/exsJTFUgOCpawGLU9taBuB1kdqjRQxwWhMQNPaNqExjTXGgk3sDxOLptb+ayRVafyDRVJfNAImPtpQCdSaKK8mDW1poU2BQq0sLNzde8e5d5m7d+5ddhc9f+acb86c883MnTNzEfwHCbz1dDnM+ZpxwJ/qu3NbE7wFfVKKZ4frva/7lhsOLWcASyyoSiobNzM6zFQQ8kv+XC6RuAgEP9j+Erkx3CQs+D1mNqqonlXgT3sAyK8tVhjE4i3Dck7hTml3wzmuI4IRlYAxY8X/FZeYaBDMzAGx5h1AuRthcnYehMnrILV+DKSnHWDuHzONTkR0iS9G25qIBEhFRnbgobU/ibN3c8xoNLHqLQCx9jBA2moT1gkwwbN3QW7/FEjbcZ5IybZO99nWanQG/ma+rHUQUOoqmvHUWA3GAvMBNTvPkZh1WgkwDFEiLp1IyxEGAVqVoUiPPP5+4oGmQyZIFZOAsdwz09/TtDJz0EQJ8JvHjKVmmL2NRID5GFtzbB+QgW4GAfbm3ZIzsp5l22IQUA+9Ug9X+g+jxVkTjQDZWgNCdZ05UO3rArX3R8AFJSCWVZq4lYD8eyfga4OgFZSCkldm+sgXOgE1vQswMRrC3B4il5bXJtY3fW4QCOxapwoYYWD7fLDZHKwrCwcqQRofASTSxVGDQN4+TomUGj6MgHB1AMT9W8xx6LEKmK//wrR1xdVKt+R06PtAqenznpPDiVjvMJLTVttYDqItebCxDuSpm6HkhrMIcO2irnEizM9wNulth8SOzzhs4WW6orsbDIxMjyfoCg68kLmZeaGsh5kabvu7wvqipkUgAOPXHX7Q84MDI+lrOAyrsryBQ2wGIsSGUJOuiEMmnAQijOSG+Z5JWmdsAYfaDHJ/uBTYujgTI/NAhfFCc3HDmEUjAronJgG8fqtlSEglk2NO7KrzHtK8hQ4/OxCbwLadALZtwEq4+rGAeDZcgg3M7QGFftSxJCYBPYDqzefi4AU/Z+uGZik2Rufzexw+kYC4CBj1n9YIUwR6FH3hsq6XXk702T9Xy0FLGTRSHEIvH3VTFQjdbaazureM7owGrgnniSD0rJOkFNM3mhLXCmiX+0Dt+oaLg+UEEFxuDmMGohVPHBlk5pJtcqfvDBYU5cKSHosdgYZXQdaXPV6hRUn4aEdc3lj69ua5aJ7aHz8vLzkLRknEswoxt0C7eJ6FNFr9ptSvabsIRZsApWVxMB78jbMjGRwBMnrJ6TMywGH4w9MgNPaCakkmV70OSUc6IPkTPqHjdNBIyHZnGASISqdFBZ/vgCDd76jiXmF0E8G5CvZxyFaeE04dBThx0HBDK9OMamZ8WcG01Uel22P7gT5IhJEhUGvXA6raC7hilz0mBPY9SY+YByT97C9+mMp3jaBe6QfNNjttsYKKQ90g0sSEvhkMSUwmUvFTb0DLZf5Jhnx32jAh5tTUlHsB0r0gXFr6oFj/C+xsSWUt4LkZIL+cNLtwdu4tOXMN/yQze6kSepTeoI9S7vOwunB6NAJWR5R6nyI9+sTSj1Krs/4sV9bmn5VmprOteCQ9JgG63GLuhjZ3T9trcT3LrUmMl/KC7xQtVklW3KpHIyAUbR6SVrir2QvYOo7pEV4RrCvc6r9m2ujwCTHgTw6jIS0SAT2xK694z//+NbMni0TESoD+nP5Ff063R5uxPWZcK2AfpG8NmfN9KQTmV/qmxlXhwaKB5SZmMf8F4cLeesegrcIAAAAASUVORK5CYII="
    },
    d51e: function(t, e, i) {
        t.exports = i.p + "img/copy-solid.svg"
    },
    d686: function(t, e) {
        t.exports = "data:image/png;base64,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"
    },
    da18: function(t, e, i) {},
    ddc9: function(t, e, i) {
        t.exports = i.p + "img/gmail.svg"
    },
    e0ed: function(t, e) {
        t.exports = "data:image/png;base64,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"
    },
    e108: function(t, e, i) {
        t.exports = i.p + "img/check-circle-solid-white.svg"
    },
    e8f2: function(t, e, i) {},
    f8b1: function(t, e, i) {
        "use strict";
        i("9fec")
    }
});