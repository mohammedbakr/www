(window.webpackJsonp = window.webpackJsonp || []).push([[2], { 333: function (t, e, o) { var content = o(335); "string" == typeof content && (content = [[t.i, content, ""]]), content.locals && (t.exports = content.locals); (0, o(10).default)("d311c0cc", content, !0, { sourceMap: !1 }) }, 334: function (t, e, o) { "use strict"; o(333) }, 335: function (t, e, o) { (e = o(9)(!1)).push([t.i, '.app[data-v-542b73ae]{font-family:"Roboto","Condensed","Montserrat",sans-serif}', ""]), t.exports = e }, 336: function (t, e, o) { var content = o(337); "string" == typeof content && (content = [[t.i, content, ""]]), content.locals && (t.exports = content.locals); (0, o(10).default)("0cd63bd9", content, !0, { sourceMap: !1 }) }, 337: function (t, e, o) { (e = o(9)(!1)).push([t.i, ".v-parallax{position:relative;overflow:hidden;z-index:0}.v-parallax__image-container{position:absolute;top:0;left:0;right:0;bottom:0;z-index:1;contain:strict}.v-parallax__image{position:absolute;bottom:0;left:50%;min-width:100%;min-height:100%;display:none;transform:translate(-50%);will-change:transform;transition:opacity .3s cubic-bezier(.25,.8,.5,1);z-index:1}.v-parallax__content{color:#fff;height:100%;z-index:2;position:relative;display:flex;flex-direction:column;justify-content:center;padding:0 1rem}", ""]), t.exports = e }, 339: function (t, e, o) { "use strict"; o.r(e); var n = {}, r = (o(334), o(76)), l = o(120), c = o.n(l), d = o(323), v = o(213), h = o(325), m = o(332), f = o(158), w = o(128), y = (o(14), o(336), o(0).a.extend({ name: "translatable", props: { height: Number }, data: function () { return { elOffsetTop: 0, parallax: 0, parallaxDist: 0, percentScrolled: 0, scrollTop: 0, windowHeight: 0, windowBottom: 0 } }, computed: { imgHeight: function () { return this.objHeight() } }, beforeDestroy: function () { window.removeEventListener("scroll", this.translate, !1), window.removeEventListener("resize", this.translate, !1) }, methods: { calcDimensions: function () { var t = this.$el.getBoundingClientRect(); this.scrollTop = window.pageYOffset, this.parallaxDist = this.imgHeight - this.height, this.elOffsetTop = t.top + this.scrollTop, this.windowHeight = window.innerHeight, this.windowBottom = this.scrollTop + this.windowHeight }, listeners: function () { window.addEventListener("scroll", this.translate, !1), window.addEventListener("resize", this.translate, !1) }, objHeight: function () { throw new Error("Not implemented !") }, translate: function () { this.calcDimensions(), this.percentScrolled = (this.windowBottom - this.elOffsetTop) / (parseInt(this.height) + this.windowHeight), this.parallax = Math.round(this.parallaxDist * this.percentScrolled) } } })), _ = o(6), x = Object(_.a)(y).extend().extend({ name: "v-parallax", props: { alt: { type: String, default: "" }, height: { type: [String, Number], default: 500 }, src: String, srcset: String }, data: function () { return { isBooted: !1 } }, computed: { styles: function () { return { display: "block", opacity: this.isBooted ? 1 : 0, transform: "translate(-50%, ".concat(this.parallax, "px)") } } }, mounted: function () { this.init() }, methods: { init: function () { var t = this, img = this.$refs.img; img && (img.complete ? (this.translate(), this.listeners()) : img.addEventListener("load", (function () { t.translate(), t.listeners() }), !1), this.isBooted = !0) }, objHeight: function () { return this.$refs.img.naturalHeight } }, render: function (t) { var e = t("div", { staticClass: "v-parallax__image-container" }, [t("img", { staticClass: "v-parallax__image", style: this.styles, attrs: { src: this.src, srcset: this.srcset, alt: this.alt }, ref: "img" })]), content = t("div", { staticClass: "v-parallax__content" }, this.$slots.default); return t("div", { staticClass: "v-parallax", style: { height: "".concat(this.height, "px") }, on: this.$listeners }, [e, content]) } }), C = o(328), component = Object(r.a)(n, (function () { var t = this, e = t.$createElement, o = t._self._c || e; return o("v-app", { staticClass: "app" }, [o("v-parallax", { attrs: { src: "/www/img/main-banner.jpg", alt: "Main banner", height: "600" } }, [o("v-container", [o("v-row", { attrs: { align: "center", justify: "center" } }, [o("v-col", { staticClass: "text-center", attrs: { cols: "12" } }, [o("h1", [t._v("Innovative Information "), o("u", [t._v("Security")]), t._v(" Solutions & Services.")]), t._v(" "), o("p", { staticClass: "title mt-4" }, [t._v("\n            Egirna Technologies Limited is an information security solutions and services provider based in Egypt with global reach. The company focus is providing innovative and budget conscious information security solutions and services. Our team members expertise ranging from young enthusiasts to +20 years of experience in the field.\n          ")])])], 1)], 1)], 1), t._v(" "), o("v-container", { staticClass: "mt-10 py-10", attrs: { id: "products" } }, [o("v-row", [o("v-col", { staticClass: "6" }, [o("v-row", [o("v-col", { attrs: { cols: "3", md: "2" } }, [o("v-btn", { attrs: { elevation: "2", fab: "", "x-large": "" } }, [o("v-icon", { attrs: { color: "orange darken-2" } }, [t._v("mdi-flag")])], 1)], 1), t._v(" "), o("v-col", [o("h1", { staticClass: "display-2 font-weight-bold", staticStyle: { color: "#0081c3" } }, [t._v("SquidVA")]), t._v(" "), o("h3", { staticClass: "headline font-weight-bold", staticStyle: { color: "#0081c3" } }, [t._v("Squid based Virtual Appliance")])])], 1), t._v(" "), o("v-row", [o("v-col", { attrs: { cols: "12" } }, [o("p", { staticClass: "title", staticStyle: { color: "#6e7a85" } }, [t._v("A hassle free virtual appliance of Ubuntu with Squid Cache & ClamAV preinstalled for your convenience!")])])], 1)], 1), t._v(" "), o("v-col", { staticClass: "hidden-sm-and-down", attrs: { cols: "6" } }, [o("v-img", { attrs: { src: "/www/img/proxyeg.png", alt: "Proxy image", width: "350" } })], 1)], 1), t._v(" "), o("v-row", { staticClass: "mt-10" }, [o("v-col", { staticClass: "hidden-sm-and-down", attrs: { cols: "6" } }, [o("v-img", { attrs: { src: "/www/img/squidcp.png", alt: "Proxy image", width: "500" } })], 1), t._v(" "), o("v-col", { staticClass: "6" }, [o("v-row", [o("v-col", { attrs: { cols: "3", md: "2" } }, [o("v-btn", { attrs: { elevation: "2", fab: "", "x-large": "" } }, [o("v-icon", { attrs: { color: "orange darken-2" } }, [t._v("mdi-signal")])], 1)], 1), t._v(" "), o("v-col", [o("h1", { staticClass: "display-2 font-weight-bold", staticStyle: { color: "#0081c3" } }, [t._v("SquidCP")]), t._v(" "), o("h3", { staticClass: "headline font-weight-bold", staticStyle: { color: "#0081c3" } }, [t._v("Squid Configuration Manager")])])], 1), t._v(" "), o("v-row", [o("v-col", { attrs: { cols: "12" } }, [o("p", { staticClass: "title", staticStyle: { color: "#6e7a85" } }, [t._v("\n              Manage your access control lists with an easy to use ACL Manager."), o("br"), t._v("\n              Configure your basics preferences using the configuration manager for network and cache parameters\n            ")])])], 1)], 1)], 1)], 1), t._v(" "), o("v-row", { staticClass: "mt-10 py-10 mx-1", staticStyle: { "background-color": "#F4F4F4" }, attrs: { id: "services" } }, [o("v-container", [o("v-row", [o("v-col", [o("h1", { staticClass: "display-2 font-weight-bold", staticStyle: { color: "#0081c3" } }, [t._v("Services We Provide")])])], 1), t._v(" "), o("v-row", [o("v-col", { attrs: { cols: "12", md: "6" } }, [o("v-row", [o("v-col", { attrs: { cols: "2", md: "1" } }, [o("v-icon", { attrs: { "x-large": "", color: "orange darken-2" } }, [t._v("mdi-signal")])], 1), t._v(" "), o("v-col", [o("h2", { staticClass: "headline font-weight-bold", staticStyle: { color: "#0081c3" } }, [t._v("Professional Services")]), t._v(" "), o("p", { staticClass: "title", staticStyle: { color: "#6e7a85" } }, [t._v("We will help you plan, design, implement, operate, and manage your network protection solutions")])])], 1)], 1), t._v(" "), o("v-col", { attrs: { cols: "12", md: "6" } }, [o("v-row", [o("v-col", { attrs: { cols: "2", md: "1" } }, [o("v-icon", { attrs: { "x-large": "", color: "orange darken-2" } }, [t._v("mdi-signal")])], 1), t._v(" "), o("v-col", [o("h2", { staticClass: "headline font-weight-bold", staticStyle: { color: "#0081c3" } }, [t._v("Outsourcing")]), t._v(" "), o("p", { staticClass: "title", staticStyle: { color: "#6e7a85" } }, [t._v("Maintain the operational aspects of your network protection solutions by utilizing the services of our onsite or remote engineers")])])], 1)], 1)], 1)], 1)], 1), t._v(" "), o("v-row", { staticClass: "mt-10 mx-1", attrs: { id: "about" } }, [o("v-container", [o("v-row", [o("v-col", { staticClass: "mt-10 pt-10", attrs: { cols: "12", md: "7" } }, [o("h1", { staticClass: "display-2 font-weight-bold", staticStyle: { color: "#0081c3" } }, [t._v("About Egirna Technologies")]), t._v(" "), o("p", { staticClass: "title mt-4", staticStyle: { color: "#6e7a85" } }, [t._v("\n            Egirna Technologies Limited is an information security solutions and services provider based in Egypt with global reach. The company focus is providing innovative and budget conscious information security solutions and services. Our team members expertise ranging from young enthusiasts to +20 years of experience in the field.\n          ")])]), t._v(" "), o("v-col", { staticClass: "hidden-sm-and-down pt-0", attrs: { cols: "5" } }, [o("v-img", { attrs: { src: "/www/img/home-about.jpg", alt: "About image", width: "400" } })], 1)], 1)], 1)], 1)], 1) }), [], !1, null, "542b73ae", null); e.default = component.exports; c()(component, { VApp: d.a, VBtn: v.a, VCol: h.a, VContainer: m.a, VIcon: f.a, VImg: w.a, VParallax: x, VRow: C.a }) } }]);