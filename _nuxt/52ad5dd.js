(window.webpackJsonp=window.webpackJsonp||[]).push([[58,33,34,35,38,39,40,42,48,49,51,52,54,55],{1109:function(t,e,n){},1110:function(t,e,n){},1111:function(t,e,n){"use strict";n.r(e);var i={props:{imageAsset:{type:Object,required:!0},altText:{type:String,default:""},styleText:{type:String,default:""}}},a=n(22),s=Object(a.a)(i,(function(){return(0,this._self._c)("noscript",{inlineTemplate:{render:function(){var t=this;return(0,t._self._c)("div",{staticClass:"fill-height attach-classes",style:'background-image: url("'.concat(t.imageAsset.optimizedImagePath,'"  ); ').concat(t.styleText)})},staticRenderFns:[]}})}),[],!1,null,null,null);e.default=s.exports},1112:function(t,e,n){"use strict";n(1109)},1113:function(t,e,n){"use strict";n.r(e);var i={props:{imageAsset:{type:Object,required:!0},height:{type:String,default:null},width:{type:String,default:null},minHeight:{type:String,default:null},alt:{type:String,default:""},contain:{type:Boolean,default:!1}}},a=(n(1112),n(22)),s=n(25),o=n.n(s),r=n(183),l=Object(a.a)(i,(function(){var t=this,e=t._self._c;return t.imageAsset.isSvgImage||t.$config.optimizeImages?e("UiSmartImgFileTypesWrapper",{attrs:{"image-asset":t.imageAsset,height:t.height,width:t.width,"min-height":t.minHeight,alt:t.alt,behind:""},scopedSlots:t._u([{key:"svgImgComponent",fn:function(n){var i=n.imageAsset,a=n.styleText;return[e("div",{staticClass:"lazyload fill-height center-background attach-classes hide-with-noscript",class:t.contain?"contain-background":"cover-background",style:a,attrs:{"data-bgset":i.optimizedImagePath,"data-sizes":"auto"}}),t._v(" "),e("UiNoScriptBackgroundImg",{staticClass:"fill-height slot-center-background",class:t.contain?"slot-contain-background":"slot-cover-background",attrs:{"image-asset":i,"style-text":a}})]}},{key:"imgComponent",fn:function(n){var i=n.imageAsset,a=n.styleText;return[e("div",{staticClass:"lazyload fill-height center-background attach-classes hide-with-noscript",class:t.contain?"contain-background":"cover-background",style:a,attrs:{"data-bgset":"".concat(i.responsiveWebpImage.srcSet," [type: image/webp] |\n                      ").concat(i.responsiveImage.srcSet),"data-sizes":"auto"}}),t._v(" "),e("UiNoScriptBackgroundImg",{staticClass:"slot-center-background",class:t.contain?"slot-contain-background":"slot-cover-background",attrs:{"image-asset":i,"style-text":a}})]}}],null,!1,1036633756)}):e("v-img",{class:t.contain?"full-size":"auto-size",staticStyle:{"z-index":"-1"},attrs:{src:t.imageAsset.optimizedImagePath,alt:t.alt,contain:t.contain,"min-height":t.minHeight}})}),[],!1,null,null,null);e.default=l.exports;o()(l,{UiNoScriptBackgroundImg:n(1111).default,UiSmartImgFileTypesWrapper:n(452).default}),o()(l,{VImg:r.a})},1114:function(t,e,n){"use strict";n(1110)},1115:function(t,e,n){"use strict";n.r(e);function i(t,e){return function(t){if(Array.isArray(t))return t}(t)||function(t,e){var n=null==t?null:"undefined"!=typeof Symbol&&t[Symbol.iterator]||t["@@iterator"];if(null==n)return;var i,a,s=[],o=!0,r=!1;try{for(n=n.call(t);!(o=(i=n.next()).done)&&(s.push(i.value),!e||s.length!==e);o=!0);}catch(t){r=!0,a=t}finally{try{o||null==n.return||n.return()}finally{if(r)throw a}}return s}(t,e)||function(t,e){if(!t)return;if("string"==typeof t)return a(t,e);var n=Object.prototype.toString.call(t).slice(8,-1);"Object"===n&&t.constructor&&(n=t.constructor.name);if("Map"===n||"Set"===n)return Array.from(t);if("Arguments"===n||/^(?:Ui|I)nt(?:8|16|32)(?:Clamped)?Array$/.test(n))return a(t,e)}(t,e)||function(){throw new TypeError("Invalid attempt to destructure non-iterable instance.\nIn order to be iterable, non-array objects must have a [Symbol.iterator]() method.")}()}function a(t,e){(null==e||e>t.length)&&(e=t.length);for(var n=0,i=new Array(e);n<e;n++)i[n]=t[n];return i}var s={mixins:[{computed:{cssVars:function(){var t={};return this.createRgbVarsForThemes(this.$vuetify.theme.themes,t),t}},methods:{isObject:function(t){return"[object Object]"===Object.prototype.toString.call(t)},hexToRgb:function(t){var e=0,n=0,i=0;return 4===t.length?(e="0x"+t[1]+t[1],n="0x"+t[2]+t[2],i="0x"+t[3]+t[3]):7===t.length&&(e="0x"+t[1]+t[2],n="0x"+t[3]+t[4],i="0x"+t[5]+t[6]),"".concat(+e,", ").concat(+n,", ").concat(+i)},generateRgbVar:function(t,e,n){var i=this.hexToRgb(e);i.includes("NaN")||(n["--v-".concat(t,"-rgb")]=i)},createRgbVarsForThemes:function(t,e){if(void 0!==t)for(var n=0,a=Object.values(t);n<a.length;n++)for(var s=a[n],o=0,r=Object.entries(s);o<r.length;o++){var l=i(r[o],2),c=l[0],u=l[1];if(this.isObject(u))for(var d=0,m=Object.entries(u);d<m.length;d++){var h=i(m[d],2),f=h[0],p=h[1];this.generateRgbVar("".concat(c,"-").concat(f),p,e)}else this.generateRgbVar(c,u,e)}}}}],props:{pageHeader:{type:String,required:!0},pageHeaderImages:{type:Array,default:function(){return[]}}}},o=(n(1114),n(22)),r=n(25),l=n.n(r),c=n(1098),u=n(246),d=n(236),m=n(1099),h=Object(o.a)(s,(function(){var t=this,e=t._self._c;return e("v-responsive",{staticClass:"gradient-fill-header",style:t.cssVars,attrs:{"max-height":"125px","min-height":"75px"}},[e("v-responsive",{staticClass:"mx-auto",attrs:{"aspect-ratio":567/56.3,"max-width":"1258.9"}},[e("v-row",{staticClass:"ma-0",attrs:{"no-gutters":""}},t._l(t.pageHeaderImages,(function(n,i){return e("v-col",{key:i,attrs:{cols:"4"}},[e("v-row",{attrs:{"no-gutters":"",justify:"center"}},[e("v-responsive",{staticClass:"gradient-fill-header top-level",style:t.cssVars,attrs:{width:"33%",height:"100%","aspect-ratio":189/56.3,"max-height":"150px","min-height":"75px"}},[e("UiSmartBackgroundImg",{attrs:{height:"56.3",width:"189","min-height":"75","image-asset":n,contain:""}})],1)],1)],1)})),1)],1),t._v(" "),e("v-overlay",{directives:[{name:"show",rawName:"v-show",value:t.$vuetify.theme.dark,expression:"$vuetify.theme.dark"}],staticClass:"black",staticStyle:{opacity:"0.3"},attrs:{absolute:"","z-index":"3"}}),t._v(" "),e("v-overlay",{attrs:{absolute:"",opacity:"0","z-index":"3"}},[e("h1",{staticClass:"text-md-h2 text-sm-h3 text-h4 font-weight-black text-center"},[t._v("\n        "+t._s(t.pageHeader)+"\n      ")])])],1)}),[],!1,null,null,null);e.default=h.exports;l()(h,{UiSmartBackgroundImg:n(1113).default}),l()(h,{VCol:c.a,VOverlay:u.a,VResponsive:d.a,VRow:m.a})},1116:function(t,e,n){"use strict";n.r(e);var i={props:{pageHeader:{type:String,default:""},pageHeaderImages:{type:Array,default:function(){return[]}},greyBackground:{type:Boolean,default:!1},sectionId:{type:String,default:null},setMargins:{type:Boolean,default:!1}}},a=n(22),s=n(25),o=n.n(s),r=n(1108),l=Object(a.a)(i,(function(){var t=this,e=t._self._c;return e("section",{class:t.greyBackground?t.$vuetify.theme.dark?"primary":"grey lighten-4":null,attrs:{id:t.sectionId}},[e("UiPageHeaderBanner",{directives:[{name:"show",rawName:"v-show",value:t.pageHeader,expression:"pageHeader"}],staticClass:"white",attrs:{"page-header":t.pageHeader,"page-header-images":t.pageHeaderImages}}),t._v(" "),e("v-container",{class:t.setMargins?"pa-md-8 pa-4":"pa-0",staticStyle:{"max-width":"1700px"},attrs:{fluid:""}},[t._t("default")],2)],1)}),[],!1,null,null,null);e.default=l.exports;o()(l,{UiPageHeaderBanner:n(1115).default}),o()(l,{VContainer:r.a})},1117:function(t,e,n){"use strict";n.r(e);var i={props:{title:{type:String,default:""}}},a=n(22),s=Object(a.a)(i,(function(){var t=this;return(0,t._self._c)("h3",{staticClass:"text-h4 font-weight-bold mb-5"},[t._v(t._s(t.title))])}),[],!1,null,null,null);e.default=s.exports},1118:function(t,e,n){"use strict";n.r(e);var i=n(114);function a(t,e){var n=Object.keys(t);if(Object.getOwnPropertySymbols){var i=Object.getOwnPropertySymbols(t);e&&(i=i.filter((function(e){return Object.getOwnPropertyDescriptor(t,e).enumerable}))),n.push.apply(n,i)}return n}function s(t){for(var e=1;e<arguments.length;e++){var n=null!=arguments[e]?arguments[e]:{};e%2?a(Object(n),!0).forEach((function(e){o(t,e,n[e])})):Object.getOwnPropertyDescriptors?Object.defineProperties(t,Object.getOwnPropertyDescriptors(n)):a(Object(n)).forEach((function(e){Object.defineProperty(t,e,Object.getOwnPropertyDescriptor(n,e))}))}return t}function o(t,e,n){return e in t?Object.defineProperty(t,e,{value:n,enumerable:!0,configurable:!0,writable:!0}):t[e]=n,t}var r={props:{id:{type:String,default:null},href:{type:String,default:null},to:{type:String,default:null},text:{type:String,default:""},icon:{type:String,default:""},large:{type:Boolean,default:!1},xLarge:{type:Boolean,default:!1},small:{type:Boolean,default:!1},xSmall:{type:Boolean,default:!1},doHover:{type:Boolean,default:!1}},data:function(){return{prevButtonHoverId:""}},computed:s(s({},Object(i.b)({buttonHoverId:function(t){return t.buttonHover.buttonHoverId}})),{},{shouldHover:function(){return this.doHover&&""===this.buttonHoverId}}),mounted:function(){document.addEventListener("mouseup",this.unsetButtonHoverId)},destroyed:function(){document.removeEventListener("mouseup",this.unsetButtonHoverId)},methods:{setButtonHoverId:function(t){this.prevButtonHoverId=this.buttonHoverId,this.$store.commit("buttonHover/setButtonHoverId",t)},unsetButtonHoverId:function(){this.prevButtonHoverId="",this.$store.commit("buttonHover/setButtonHoverId",this.prevButtonHoverId)}}},l=n(22),c=n(25),u=n.n(c),d=n(268),m=n(238),h=Object(l.a)(r,(function(){var t=this,e=t._self._c;return e("div",{staticClass:"simplebutton"},[e("v-btn",{class:"".concat(t.$vuetify.theme.dark?"primary":"secondary").concat(t.shouldHover?" custom-hover":""),attrs:{id:t.id,large:t.large,"x-large":t.xLarge,small:t.small,"x-small":t.xSmall,href:t.href,"to:":t.to,ripple:!1},on:{mouseover:function(e){return t.setButtonHoverId(t.id)},mouseout:function(e){return t.unsetButtonHoverId()},click:function(t){t.stopPropagation()},mousedown:function(t){t.stopPropagation()}}},[t.icon?e("v-icon",{staticClass:"pr-3 center"},[t._v("\n        "+t._s(t.icon)+"\n      ")]):t._e(),t._v("\n      "+t._s(t.text)+"\n    ")],1)],1)}),[],!1,null,null,null);e.default=h.exports;u()(h,{VBtn:d.a,VIcon:m.a})},1119:function(t,e,n){},1122:function(t,e,n){"use strict";n(1119)},1123:function(t,e,n){},1127:function(t,e,n){"use strict";var i=n(145),a=n(44),s=n(8),o=n(9);e.a=Object(s.a)(i.a,a.a).extend({name:"v-hover",props:{disabled:{type:Boolean,default:!1},value:{type:Boolean,default:void 0}},methods:{onMouseEnter:function(){this.runDelay("open")},onMouseLeave:function(){this.runDelay("close")}},render:function(){return this.$scopedSlots.default||void 0!==this.value?(this.$scopedSlots.default&&(t=this.$scopedSlots.default({hover:this.isActive})),Array.isArray(t)&&1===t.length&&(t=t[0]),t&&!Array.isArray(t)&&t.tag?(this.disabled||(t.data=t.data||{},this._g(t.data,{mouseenter:this.onMouseEnter,mouseleave:this.onMouseLeave})),t):(Object(o.c)("v-hover should only contain a single element",this),t)):(Object(o.c)("v-hover is missing a default scopedSlot or bound value",this),null);var t}})},1129:function(t,e,n){"use strict";n.r(e);var i=n(67),a={props:{value:Boolean,imageAsset:{type:Object,required:!0},alt:{type:String,default:""},buttons:{type:Array,default:function(){return[]}},cropBottom:{type:Boolean,default:!1}},data:function(){return{mdiClose:i.j}},computed:{show:{get:function(){return this.value},set:function(t){this.$emit("input",t)}}}},s=(n(1122),n(22)),o=n(25),r=n.n(o),l=n(268),c=n(247),u=n(189),d=n(1098),m=n(1149),h=n(238),f=n(246),p=n(236),g=n(1099),v=Object(s.a)(a,(function(){var t=this,e=t._self._c;return e("v-dialog",{attrs:{"content-class":t.cropBottom?"size-from-contents max-height-95":"size-from-contents no-max-height"},model:{value:t.show,callback:function(e){t.show=e},expression:"show"}},[e("v-card",[e("v-row",{attrs:{"no-gutters":"","fill-height":""}},[e("v-col",{attrs:{cols:"12"}},[e("v-overlay",{staticClass:"full-overlay",attrs:{absolute:"",opacity:"0","z-index":"1"}},[e("v-responsive",{attrs:{height:"100%"}},[e("v-row",{staticClass:"mb-auto",attrs:{"fill-height":"","no-gutters":"",align:"start",justify:"end"}},[e("v-col",{staticClass:"pa-2 ma-0",attrs:{cols:"auto","align-self":"start"}},[e("div",{staticClass:"simplebutton"},[e("v-btn",{staticClass:"pa-0",attrs:{width:"24px",height:"24px","min-width":"24px",ripple:!1},on:{click:function(e){t.show=!1}}},[e("v-icon",[t._v(t._s(t.mdiClose))])],1)],1)])],1)],1)],1),t._v(" "),e("UiSmartImg",{class:t.cropBottom?"mx-10 mt-10 overflow-y-auto thin-border above-overlay":null,attrs:{"image-asset":t.imageAsset,alt:t.alt,"max-height":t.cropBottom?"calc(95vh - 151px)":"calc(95vh - 110px)",width:t.cropBottom?"calc(90vw - 82px)":"90vw","crop-bottom":t.cropBottom}})],1)],1),t._v(" "),e("v-card-actions",[e("v-row",{attrs:{"no-gutters":"",justify:"center"}},t._l(t.buttons,(function(n,i){return e("v-col",{key:"s_"+i,staticClass:"pa-2 ma-0",attrs:{cols:"auto","align-self":"end"}},[e("UiStyledButton",{staticClass:"text-weight-light above-overlay",attrs:{id:"btn_"+i,href:n.href,to:n.to,text:n.text,icon:n.icon,"x-large":""},on:{"btn-click":function(e){!n.link&&(t.show=!1)}}})],1)})),1)],1)],1)],1)}),[],!1,null,null,null);e.default=v.exports;r()(v,{UiSmartImg:n(266).default,UiStyledButton:n(1118).default}),r()(v,{VBtn:l.a,VCard:c.a,VCardActions:u.a,VCol:d.a,VDialog:m.a,VIcon:h.a,VOverlay:f.a,VResponsive:p.a,VRow:g.a})},1148:function(t,e,n){},1149:function(t,e,n){"use strict";n(1123);var i=n(1101),a=n(115),s=n(146),o=n(271),r=n(272),l=n(269),c=n(270),u=n(147),d=n(8),m=n(9),h=n(0);function f(t,e){var n=Object.keys(t);if(Object.getOwnPropertySymbols){var i=Object.getOwnPropertySymbols(t);e&&(i=i.filter((function(e){return Object.getOwnPropertyDescriptor(t,e).enumerable}))),n.push.apply(n,i)}return n}function p(t){for(var e=1;e<arguments.length;e++){var n=null!=arguments[e]?arguments[e]:{};e%2?f(Object(n),!0).forEach((function(e){y(t,e,n[e])})):Object.getOwnPropertyDescriptors?Object.defineProperties(t,Object.getOwnPropertyDescriptors(n)):f(Object(n)).forEach((function(e){Object.defineProperty(t,e,Object.getOwnPropertyDescriptor(n,e))}))}return t}function g(t){return function(t){if(Array.isArray(t))return v(t)}(t)||function(t){if("undefined"!=typeof Symbol&&null!=t[Symbol.iterator]||null!=t["@@iterator"])return Array.from(t)}(t)||function(t,e){if(!t)return;if("string"==typeof t)return v(t,e);var n=Object.prototype.toString.call(t).slice(8,-1);"Object"===n&&t.constructor&&(n=t.constructor.name);if("Map"===n||"Set"===n)return Array.from(t);if("Arguments"===n||/^(?:Ui|I)nt(?:8|16|32)(?:Clamped)?Array$/.test(n))return v(t,e)}(t)||function(){throw new TypeError("Invalid attempt to spread non-iterable instance.\nIn order to be iterable, non-array objects must have a [Symbol.iterator]() method.")}()}function v(t,e){(null==e||e>t.length)&&(e=t.length);for(var n=0,i=new Array(e);n<e;n++)i[n]=t[n];return i}function y(t,e,n){return e in t?Object.defineProperty(t,e,{value:n,enumerable:!0,configurable:!0,writable:!0}):t[e]=n,t}var b=Object(d.a)(s.a,o.a,r.a,l.a,c.a,a.a);e.a=b.extend({name:"v-dialog",directives:{ClickOutside:u.a},props:{dark:Boolean,disabled:Boolean,fullscreen:Boolean,light:Boolean,maxWidth:[String,Number],noClickAnimation:Boolean,origin:{type:String,default:"center center"},persistent:Boolean,retainFocus:{type:Boolean,default:!0},scrollable:Boolean,transition:{type:[String,Boolean],default:"dialog-transition"},width:[String,Number]},data:function(){return{activatedBy:null,animate:!1,animateTimeout:-1,stackMinZIndex:200,previousActiveElement:null}},computed:{classes:function(){var t;return y(t={},"v-dialog ".concat(this.contentClass).trim(),!0),y(t,"v-dialog--active",this.isActive),y(t,"v-dialog--persistent",this.persistent),y(t,"v-dialog--fullscreen",this.fullscreen),y(t,"v-dialog--scrollable",this.scrollable),y(t,"v-dialog--animated",this.animate),t},contentClasses:function(){return{"v-dialog__content":!0,"v-dialog__content--active":this.isActive}},hasActivator:function(){return Boolean(!!this.$slots.activator||!!this.$scopedSlots.activator)}},watch:{isActive:function(t){var e;t?(this.show(),this.hideScroll()):(this.removeOverlay(),this.unbind(),null==(e=this.previousActiveElement)||e.focus())},fullscreen:function(t){this.isActive&&(t?(this.hideScroll(),this.removeOverlay(!1)):(this.showScroll(),this.genOverlay()))}},created:function(){this.$attrs.hasOwnProperty("full-width")&&Object(m.e)("full-width",this)},beforeMount:function(){var t=this;this.$nextTick((function(){t.isBooted=t.isActive,t.isActive&&t.show()}))},beforeDestroy:function(){"undefined"!=typeof window&&this.unbind()},methods:{animateClick:function(){var t=this;this.animate=!1,this.$nextTick((function(){t.animate=!0,window.clearTimeout(t.animateTimeout),t.animateTimeout=window.setTimeout((function(){return t.animate=!1}),150)}))},closeConditional:function(t){var e=t.target;return!(this._isDestroyed||!this.isActive||this.$refs.content.contains(e)||this.overlay&&e&&!this.overlay.$el.contains(e))&&this.activeZIndex>=this.getMaxZIndex()},hideScroll:function(){this.fullscreen?document.documentElement.classList.add("overflow-y-hidden"):r.a.options.methods.hideScroll.call(this)},show:function(){var t=this;!this.fullscreen&&!this.hideOverlay&&this.genOverlay(),this.$nextTick((function(){t.$nextTick((function(){var e,n;null!=(e=t.$refs.dialog)&&e.contains(document.activeElement)||(t.previousActiveElement=document.activeElement,null==(n=t.$refs.dialog)||n.focus());t.bind()}))}))},bind:function(){window.addEventListener("focusin",this.onFocusin)},unbind:function(){window.removeEventListener("focusin",this.onFocusin)},onClickOutside:function(t){this.$emit("click:outside",t),this.persistent?this.noClickAnimation||this.animateClick():this.isActive=!1},onKeydown:function(t){if(t.keyCode===h.x.esc&&!this.getOpenDependents().length)if(this.persistent)this.noClickAnimation||this.animateClick();else{this.isActive=!1;var e=this.getActivator();this.$nextTick((function(){return e&&e.focus()}))}this.$emit("keydown",t)},onFocusin:function(t){if(t&&this.retainFocus){var e=t.target;if(e&&this.$refs.dialog&&![document,this.$refs.dialog].includes(e)&&!this.$refs.dialog.contains(e)&&this.activeZIndex>=this.getMaxZIndex()&&!this.getOpenDependentElements().some((function(t){return t.contains(e)}))){var n=g(this.$refs.dialog.querySelectorAll('button, [href], input, select, textarea, [tabindex]:not([tabindex="-1"])')).find((function(t){return!t.hasAttribute("disabled")}));n&&n.focus()}}},genContent:function(){var t=this;return this.showLazyContent((function(){return[t.$createElement(i.a,{props:{root:!0,light:t.light,dark:t.dark}},[t.$createElement("div",{class:t.contentClasses,attrs:p({role:"dialog","aria-modal":t.hideOverlay?void 0:"true"},t.getScopeIdAttrs()),on:{keydown:t.onKeydown},style:{zIndex:t.activeZIndex},ref:"content"},[t.genTransition()])])]}))},genTransition:function(){var t=this.genInnerContent();return this.transition?this.$createElement("transition",{props:{name:this.transition,origin:this.origin,appear:!0}},[t]):t},genInnerContent:function(){var t={class:this.classes,attrs:{tabindex:this.isActive?0:void 0},ref:"dialog",directives:[{name:"click-outside",value:{handler:this.onClickOutside,closeConditional:this.closeConditional,include:this.getOpenDependentElements}},{name:"show",value:this.isActive}],style:{transformOrigin:this.origin}};return this.fullscreen||(t.style=p(p({},t.style),{},{maxWidth:Object(h.h)(this.maxWidth),width:Object(h.h)(this.width)})),this.$createElement("div",t,this.getContentSlot())}},render:function(t){return t("div",{staticClass:"v-dialog__container",class:{"v-dialog__container--attached":""===this.attach||!0===this.attach||"attach"===this.attach}},[this.genActivator(),this.genContent()])}})},1150:function(t,e,n){},1178:function(t,e,n){"use strict";n(1148)},1179:function(t,e,n){"use strict";n(1150)},1204:function(t,e,n){"use strict";n.r(e);var i={props:{card:{type:Object,default:function(){}}},data:function(){return{down:!1}}},a=(n(1178),n(22)),s=n(25),o=n.n(s),r=n(247),l=n(1127),c=Object(a.a)(i,(function(){var t=this,e=t._self._c;return e("v-hover",{scopedSlots:t._u([{key:"default",fn:function(n){var i=n.hover;return[e("v-card",{staticClass:"transition-swing mx-auto",class:i?t.down?"halfzoom":"zoom":"notzoom",staticStyle:{"z-index":"2"},attrs:{elevation:i?t.down?6:12:2,href:t.card.link?t.card.link:null,ripple:!1,"max-width":t.card.maxWidth?t.card.maxWidth:null},on:{mousedown:function(e){t.down=!0},mouseup:function(e){t.down=!1},mouseleave:function(e){t.down=!1},click:function(e){return t.$emit("btn-click",!0)}}},[e("UiSmartImg",{attrs:{"image-asset":t.card.img}})],1)]}}])})}),[],!1,null,"4777290a",null);e.default=c.exports;o()(c,{UiSmartImg:n(266).default}),o()(c,{VCard:r.a,VHover:l.a})},1205:function(t,e,n){"use strict";n.r(e);var i={props:{title:{type:String,default:""}}},a=n(22),s=n(25),o=n.n(s),r=n(1098),l=n(1099),c=Object(a.a)(i,(function(){var t=this,e=t._self._c;return e("section",[e("v-row",{staticClass:"ma-0 pb-4",attrs:{"no-gutters":""}},[e("UiMinorTitle",{attrs:{title:t.title}}),t._v(" "),e("v-col",{staticClass:"ma-0",attrs:{cols:"12"}},[t._t("default")],2)],1)],1)}),[],!1,null,null,null);e.default=c.exports;o()(c,{UiMinorTitle:n(1117).default}),o()(c,{VCol:r.a,VRow:l.a})},1206:function(t,e,n){"use strict";n.r(e);var i={props:{title:{type:String,default:""},contactPoints:{type:Array,default:function(){return[]}},githubIssues:{type:Object,default:null}}},a=n(22),s=n(25),o=n.n(s),r=n(1098),l=n(238),c=n(239),u=n(137),d=n(53),m=n(111),h=n(1099),f=Object(a.a)(i,(function(){var t=this,e=t._self._c;return e("section",[e("v-row",{staticClass:"ma-0",attrs:{"no-gutters":""}},[e("UiMinorTitle",{attrs:{title:t.title}}),t._v(" "),e("v-col",{attrs:{cols:"12"}},[e("v-list",{staticClass:"transparent",attrs:{"two-line":"","max-width":"100%"}},[t._l(t.contactPoints,(function(n,i){return e("v-list-item",{key:"c_"+i},[e("v-list-item-icon",[e("v-icon",{attrs:{color:t.$vuetify.theme.dark?"accent":"primary"}},[t._v("\n                "+t._s(n.icon))])],1),t._v(" "),e("v-list-item-content",[e("v-list-item-title",{staticClass:"text-wrap"},[t._v("\n                "+t._s(n.title)+"\n              ")]),t._v(" "),e("v-list-item-title",{staticClass:"text-wrap"},[e("a",{attrs:{href:n.link}},[t._v("\n                  "+t._s(n.linkText)+"\n                ")])])],1)],1)})),t._v(" "),t.githubIssues?e("v-list-item",[e("v-list-item-icon",[e("v-icon",{attrs:{color:t.$vuetify.theme.dark?"accent":"primary"}},[t._v("\n                "+t._s(t.githubIssues.icon))])],1),t._v(" "),e("v-list-item-content",[e("v-list-item-title",{staticClass:"text-wrap"},[t._v("\n                "+t._s(t.githubIssues.title)+"\n              ")]),t._v(" "),t._l(t.githubIssues.repos,(function(n,i){return e("v-list-item-title",{key:"r_"+i,staticClass:"text-wrap"},[e("a",{attrs:{href:n.issuesLink}},[t._v("\n                  "+t._s(n.title)+"\n                ")])])})),t._v(" "),e("v-list-item-title",{staticClass:"text-wrap"},[t._v("\n                "+t._s(t.githubIssues.endComment)+"\n                "),e("nuxt-link",{attrs:{to:"/code"}},[t._v(t._s(t.githubIssues.endCommentPageText))])],1)],2)],1):t._e()],2)],1)],1)],1)}),[],!1,null,null,null);e.default=f.exports;o()(f,{UiMinorTitle:n(1117).default}),o()(f,{VCol:r.a,VIcon:l.a,VList:c.a,VListItem:u.a,VListItemContent:d.a,VListItemIcon:m.a,VListItemTitle:d.c,VRow:h.a})},1207:function(t,e,n){"use strict";n.r(e);var i={props:{title:{type:String,default:""},text:{type:String,default:""},references:{type:Array,default:function(){return[]}}}},a=n(22),s=n(25),o=n.n(s),r=n(1098),l=n(238),c=n(239),u=n(137),d=n(53),m=n(111),h=n(1099),f=Object(a.a)(i,(function(){var t=this,e=t._self._c;return e("section",[e("v-row",{staticClass:"ma-0 pt-16",attrs:{"no-gutters":""}},[e("UiMinorTitle",{attrs:{title:t.title}}),t._v(" "),e("v-col",{attrs:{cols:"12"}},[e("p",{staticClass:"font-italic"},[t._v("\n          "+t._s(t.text)+"\n        ")])]),t._v(" "),e("v-col",{attrs:{cols:"12"}},[e("v-list",t._l(t.references,(function(n,i){return e("v-list-item",{key:"r_"+i},[e("v-list-item-icon",[e("v-icon",{attrs:{color:"primary"}},[t._v(" "+t._s(n.icon))])],1),t._v(" "),e("v-list-item-content",[e("v-list-item-title",{staticClass:"text-wrap"},[t._v("\n                "+t._s(n.text)+"\n                "),n.doi?e("a",{attrs:{href:"https://doi.org/"+n.doi}},[t._v("doi: "+t._s(n.doi))]):t._e()])],1)],1)})),1)],1)],1)],1)}),[],!1,null,null,null);e.default=f.exports;o()(f,{UiMinorTitle:n(1117).default}),o()(f,{VCol:r.a,VIcon:l.a,VList:c.a,VListItem:u.a,VListItemContent:d.a,VListItemIcon:m.a,VListItemTitle:d.c,VRow:h.a})},1208:function(t,e,n){"use strict";n.r(e);var i={props:{title:{type:String,default:""},logos:{type:Array,default:function(){return[]}}}},a=n(22),s=n(25),o=n.n(s),r=n(1098),l=n(236),c=n(1099),u=Object(a.a)(i,(function(){var t=this,e=t._self._c;return e("section",[e("v-row",{staticClass:"ma-0 pt-16",attrs:{"no-gutters":""}},[e("UiMinorTitle",{attrs:{title:t.title}}),t._v(" "),e("v-col",{attrs:{cols:"12"}},[e("v-responsive",{attrs:{"aspect-ratio":t.$vuetify.breakpoint.mdAndUp?.35:.7,"max-height":"1000"}},[e("v-row",{staticClass:"ma-0 pt-0 fill-height d-flow align-content-space-around"},t._l(t.logos,(function(n,i){return e("v-col",{key:i,staticClass:"pa-8 my-auto",attrs:{cols:"6"}},[e("UiSmartImg",{staticClass:"ma-auto",attrs:{"image-asset":t.$getImageAssetObject("images","logos",n.filename),contain:"","max-width":"200",width:n.width,height:n.height}})],1)})),1)],1)],1)],1)],1)}),[],!1,null,null,null);e.default=u.exports;o()(u,{UiMinorTitle:n(1117).default,UiSmartImg:n(266).default}),o()(u,{VCol:r.a,VResponsive:l.a,VRow:c.a})},1209:function(t,e,n){"use strict";n.r(e);var i={props:{teamName:{type:String,default:""},ourTeam:{type:Array,default:function(){return[]}}}},a=(n(1179),n(22)),s=n(25),o=n.n(s),r=n(1098),l=n(1099),c=Object(a.a)(i,(function(){var t=this,e=t._self._c;return e("section",{staticClass:"pa-16",class:t.$vuetify.theme.dark?"primary":"grey lighten-4"},[e("v-row",{attrs:{"no-gutters":""}},[e("UiMinorTitle",{attrs:{title:t.teamName}}),t._v(" "),t._l(t.ourTeam,(function(n,i){return e("v-col",{key:"group-".concat(i),attrs:{cols:"12"}},[e("h4",{staticClass:"text-h5 text-center pb-5 pt-15 px-5"},[t._v(t._s(n.group))]),t._v(" "),e("v-row",t._l(n.members,(function(n,i){return e("v-col",{key:"person-".concat(i),attrs:{cols:"12"}},[e("v-row",{staticClass:"mx-auto team-column py-0",class:{"flex-row-reverse":i%2==1}},[e("v-col",{staticClass:"pa-0",attrs:{cols:"6"}},[e("UiSmartImg",{class:i%2==1?"mr-auto":"ml-auto",attrs:{"image-asset":t.$getImageAssetObject("images","team",n.photo)}})],1),t._v(" "),e("v-col",{staticClass:"my-auto",attrs:{cols:"6"}},[e("v-row",{staticClass:"pa-4",class:i%2==1?"text-right":"text-left"},[e("div",{staticClass:"text-h6 font-weight-bold"},[t._v("\n                    "+t._s(n.name)+"\n                  ")]),t._v(" "),n.position?e("div",{staticClass:"text-uppercase"},[t._v("\n                    "+t._s(n.position)+"\n                  ")]):t._e()])],1)],1)],1)})),1)],1)})),t._v(" "),e("v-col",{attrs:{cols:"12"}},[e("h4",{staticClass:"text-h6 font-italic font-weight-light text-center pb-5 pt-15 px-5"},[t._v("\n          * Has changed affiliation since contributing to FAIRtracks\n        ")])])],2)],1)}),[],!1,null,"1ea515ee",null);e.default=c.exports;o()(c,{UiMinorTitle:n(1117).default,UiSmartImg:n(266).default}),o()(c,{VCol:r.a,VRow:l.a})},1271:function(t,e,n){"use strict";n.r(e);var i=n(67),a={data:function(){return{pageHeader:"Community",pageHeaderImages:[this.$getImageAssetObject("images","tracktypes","LP.svg"),this.$getImageAssetObject("images","tracktypes","LS.svg"),this.$getImageAssetObject("images","tracktypes","LBP.svg")],surveyTitle:"Fill out our community survey!",surveyCard:{link:"",img:this.$getImageAssetObject("images","media","FAIRtracks-survey-ad-webpage.png"),maxWidth:"850px"},showSurveyDialog:!1,surveyDialogButtons:[{text:"Fill out survey!",link:"https://fairtracks.net/survey"}],contactUsTitle:"Contact us!",contactPoints:[{icon:i.d,title:"Join the FAIRtracks announcement mailing list:",link:"https://sympa.uio.no/elixir.no/subscribe/fairtracks-info",linkText:"Subscribe here"},{icon:i.S,title:"Follow us on Twitter:",link:"https://twitter.com/fairtracks",linkText:"@fairtracks"},{icon:i.r,title:"Send an e-mail to the international FAIRtracks team:",link:"mailto:fairtracks@elixir.no",linkText:"fairtracks@elixir.no"}],githubIssues:{icon:i.w,title:"Submit an issue to a GitHub repo:",repos:[{title:"The FAIRtracks draft standard",issuesLink:"https://github.com/fairtracks/fairtracks_standard/issues"},{title:"TrackFind",issuesLink:"https://github.com/elixir-oslo/trackfind/issues"},{title:"The FAIRtracks validator",issuesLink:"https://github.com/fairtracks/fairtracks_validator/issues"}],endComment:"...or any of the others listed on the",endCommentPageLink:"/code",endCommentPageText:"source code page"},citeUsTitle:"Cite us!",citeUsText:"Please cite our primary publication in any research that uses or extends FAIRtracks:",references:[{icon:i.K,text:"Gundersen, S. et al. Recommendations to the FAIRification of genomic track metadata. F1000Res 10, ELIXIR-268 (2021).",doi:"10.12688/f1000research.28449.1"}],recommendationsTitle:"Recommendations",recommendationCard:{link:"https://elixir-europe.org/platforms/interoperability/rirs",img:this.$getImageAssetObject("images","logos","elixir-rir.png")},logosTitle:"Funding / Acknowledgements",logos:[{filename:"elixir-norway.png"},{filename:"elixir-spain.png"},{filename:"embl-ebi.svg",width:"587",height:"181"},{filename:"inb.png"},{filename:"bsc.jpeg"},{filename:"rcn.png"},{filename:"uio.png"},{filename:"uib.png"},{filename:"ntnu.png"}],teamName:"The FAIRtracks team",ourTeam:[{group:"ELIXIR Norway at the Centre for Bioinformatics, University of Oslo (UiO)",members:[{name:"Sveinung Gundersen",position:"",photo:"sveinung-gundersen.png"},{name:"Dmytro Titov*",position:"",photo:"dmytro-titov.png"},{name:"Radmila Kompova*",position:"",photo:"radmila-kompova.png"},{name:"Ahmed Ghanem",position:"",photo:"ahmed-ghanem.png"},{name:"Nazeefa Fatima",position:"",photo:"nazeefa-fatima.png"},{name:"Federico Bianchini",position:"",photo:"federico-bianchini.png"},{name:"Eivind Hovig",position:"",photo:"eivind-hovig.png"}]},{group:"ELIXIR Spain at the Life Sciences Department from the Barcelona Supercomputer Centre (BSC)",members:[{name:"José Mariá Fernández",position:"",photo:"jose-maria-fernandez.png"},{name:"Salvador Capella Gutierrez",position:"",photo:"salvador-capella-gutierrez.png"}]},{group:"The Track Hub Registry group at EMBL-EBI, Hinxton, UK",members:[{name:"Sanjay Boddu",position:"",photo:"sanjay-boddu.png"},{name:"Peter Harrison",position:"",photo:"peter-harrison.png"},{name:"Kieron Taylor*",position:"",photo:"kieron-taylor.png"},{name:"Daniel Zerbino*",position:"",photo:"daniel-zerbino.png"}]},{group:"ELIXIR Norway at the Computational Biology Unit, University of Bergen (UiB)",members:[{name:"Matúš Kalaš",position:"",photo:"matus-kalas.png"}]},{group:"ELIXIR Norway at the Department of Clinical and Molecular Medicine, Norwegian University of Science and Technology (NTNU)",members:[{name:"Finn Drabløs*",position:"",photo:"finn-drablos.png"}]}]}},head:function(){return{title:"Community",meta:[]}}},s=n(22),o=n(25),r=n.n(o),l=n(1098),c=n(1099),u=Object(s.a)(a,(function(){var t=this,e=t._self._c;return e("SectionsPageContainer",{attrs:{"page-header":t.pageHeader,"page-header-images":t.pageHeaderImages}},[e("v-row",{staticClass:"pa-0",attrs:{"no-gutters":""}},[e("v-col",{staticClass:"pa-16",attrs:{md:"6",cols:"12"}},[e("SectionsSubSection",{attrs:{title:t.surveyTitle}},[e("UiClickableCard",{staticClass:"survey",attrs:{card:t.surveyCard},on:{"btn-click":function(e){t.showSurveyDialog=!0}}})],1),t._v(" "),e("UiPopupDialog",{attrs:{buttons:t.surveyDialogButtons,"image-asset":t.surveyCard.img},model:{value:t.showSurveyDialog,callback:function(e){t.showSurveyDialog=e},expression:"showSurveyDialog"}}),t._v(" "),e("SectionsContactUs",{attrs:{title:t.contactUsTitle,"contact-points":t.contactPoints,"github-issues":t.githubIssues}}),t._v(" "),e("SectionsCiteUs",{attrs:{title:t.citeUsTitle,text:t.citeUsText,references:t.references}}),t._v(" "),e("v-row",{staticClass:"pa-0 pt-16",attrs:{"no-gutters":""}},[e("v-col",{attrs:{md:"12",cols:"12"}},[e("SectionsSubSection",{attrs:{title:t.recommendationsTitle}},[e("UiClickableCard",{attrs:{card:t.recommendationCard}})],1)],1)],1),t._v(" "),e("SectionsLogoList",{attrs:{title:t.logosTitle,logos:t.logos}})],1),t._v(" "),e("v-col",{staticClass:"pt-0",attrs:{md:"6",cols:"12"}},[e("SectionsTeamColumn",{staticClass:"fill-height",attrs:{"our-team":t.ourTeam,"team-name":t.teamName}})],1)],1)],1)}),[],!1,null,null,null);e.default=u.exports;r()(u,{UiClickableCard:n(1204).default,SectionsSubSection:n(1205).default,UiPopupDialog:n(1129).default,SectionsContactUs:n(1206).default,SectionsCiteUs:n(1207).default,SectionsLogoList:n(1208).default,SectionsTeamColumn:n(1209).default,SectionsPageContainer:n(1116).default}),r()(u,{VCol:l.a,VRow:c.a})}}]);