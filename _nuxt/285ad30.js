(window.webpackJsonp=window.webpackJsonp||[]).push([[58,33,34,35,38,39,40,42,48,49,51,52,54,55],{1125:function(t,e,a){var i=a(1129);i.__esModule&&(i=i.default),"string"==typeof i&&(i=[[t.i,i,""]]),i.locals&&(t.exports=i.locals);(0,a(13).default)("787c8c40",i,!0,{sourceMap:!1})},1126:function(t,e,a){var i=a(1132);i.__esModule&&(i=i.default),"string"==typeof i&&(i=[[t.i,i,""]]),i.locals&&(t.exports=i.locals);(0,a(13).default)("8ae11210",i,!0,{sourceMap:!1})},1127:function(t,e,a){"use strict";a.r(e);var i={props:{imageAsset:{type:Object,required:!0},altText:{type:String,default:""},styleText:{type:String,default:""}}},n=a(25),o=Object(n.a)(i,(function(){var t=this.$createElement;return(this._self._c||t)("noscript",{inlineTemplate:{render:function(){var t=this,e=t.$createElement;return(t._self._c||e)("div",{staticClass:"fill-height attach-classes",style:'background-image: url("'+t.imageAsset.optimizedImagePath+'"  ); '+t.styleText})},staticRenderFns:[]}})}),[],!1,null,null,null);e.default=o.exports},1128:function(t,e,a){"use strict";a(1125)},1129:function(t,e,a){var i=a(12)(!1);i.push([t.i,".center-background,.slot-center-background .attach-classes{background-position:50%}.cover-background,.slot-cover-background .attach-classes{background-size:cover}.contain-background,.slot-contain-background .attach-classes{background-size:contain;background-color:#fff}.full-size{height:100%;width:100%}.auto-size{height:auto;width:auto}",""]),t.exports=i},1130:function(t,e,a){"use strict";a.r(e);var i={props:{imageAsset:{type:Object,required:!0},height:{type:String,default:null},width:{type:String,default:null},minHeight:{type:String,default:null},alt:{type:String,default:""},contain:{type:Boolean,default:!1}}},n=(a(1128),a(25)),o=a(28),s=a.n(o),r=a(184),l=Object(n.a)(i,(function(){var t=this,e=t.$createElement,a=t._self._c||e;return t.imageAsset.isSvgImage||t.$config.optimizeImages?a("UiSmartImgFileTypesWrapper",{attrs:{"image-asset":t.imageAsset,height:t.height,width:t.width,"min-height":t.minHeight,alt:t.alt,behind:""},scopedSlots:t._u([{key:"svgImgComponent",fn:function(e){var i=e.imageAsset,n=e.styleText;return[a("div",{staticClass:"lazyload fill-height center-background attach-classes hide-with-noscript",class:t.contain?"contain-background":"cover-background",style:n,attrs:{"data-bgset":i.optimizedImagePath,"data-sizes":"auto"}}),t._v(" "),a("UiNoScriptBackgroundImg",{staticClass:"fill-height slot-center-background",class:t.contain?"slot-contain-background":"slot-cover-background",attrs:{"image-asset":i,"style-text":n}})]}},{key:"imgComponent",fn:function(e){var i=e.imageAsset,n=e.styleText;return[a("div",{staticClass:"lazyload fill-height center-background attach-classes hide-with-noscript",class:t.contain?"contain-background":"cover-background",style:n,attrs:{"data-bgset":i.responsiveWebpImage.srcSet+" [type: image/webp] |\n                    "+i.responsiveImage.srcSet,"data-sizes":"auto"}}),t._v(" "),a("UiNoScriptBackgroundImg",{staticClass:"slot-center-background",class:t.contain?"slot-contain-background":"slot-cover-background",attrs:{"image-asset":i,"style-text":n}})]}}],null,!1,3808305052)}):a("v-img",{class:t.contain?"full-size":"auto-size",staticStyle:{"z-index":"-1"},attrs:{src:t.imageAsset.optimizedImagePath,alt:t.alt,contain:t.contain,"min-height":t.minHeight}})}),[],!1,null,null,null);e.default=l.exports;s()(l,{UiNoScriptBackgroundImg:a(1127).default,UiSmartImgFileTypesWrapper:a(449).default}),s()(l,{VImg:r.a})},1131:function(t,e,a){"use strict";a(1126)},1132:function(t,e,a){var i=a(12)(!1);i.push([t.i,".gradient-fill-header>.v-responsive__content{background:linear-gradient(180deg,rgba(var(--v-accent-rgb),.9),rgba(var(--v-anchor-rgb),.9))}.top-level{z-index:2}.banner{max-height:150px}",""]),t.exports=i},1133:function(t,e,a){"use strict";a.r(e);function i(t,e){return function(t){if(Array.isArray(t))return t}(t)||function(t,e){var a=null==t?null:"undefined"!=typeof Symbol&&t[Symbol.iterator]||t["@@iterator"];if(null==a)return;var i,n,o=[],s=!0,r=!1;try{for(a=a.call(t);!(s=(i=a.next()).done)&&(o.push(i.value),!e||o.length!==e);s=!0);}catch(t){r=!0,n=t}finally{try{s||null==a.return||a.return()}finally{if(r)throw n}}return o}(t,e)||function(t,e){if(!t)return;if("string"==typeof t)return n(t,e);var a=Object.prototype.toString.call(t).slice(8,-1);"Object"===a&&t.constructor&&(a=t.constructor.name);if("Map"===a||"Set"===a)return Array.from(t);if("Arguments"===a||/^(?:Ui|I)nt(?:8|16|32)(?:Clamped)?Array$/.test(a))return n(t,e)}(t,e)||function(){throw new TypeError("Invalid attempt to destructure non-iterable instance.\nIn order to be iterable, non-array objects must have a [Symbol.iterator]() method.")}()}function n(t,e){(null==e||e>t.length)&&(e=t.length);for(var a=0,i=new Array(e);a<e;a++)i[a]=t[a];return i}var o={mixins:[{computed:{cssVars:function(){var t={};return this.createRgbVarsForThemes(this.$vuetify.theme.themes,t),t}},methods:{isObject:function(t){return"[object Object]"===Object.prototype.toString.call(t)},hexToRgb:function(t){var e=0,a=0,i=0;return 4===t.length?(e="0x"+t[1]+t[1],a="0x"+t[2]+t[2],i="0x"+t[3]+t[3]):7===t.length&&(e="0x"+t[1]+t[2],a="0x"+t[3]+t[4],i="0x"+t[5]+t[6]),"".concat(+e,", ").concat(+a,", ").concat(+i)},generateRgbVar:function(t,e,a){var i=this.hexToRgb(e);i.includes("NaN")||(a["--v-".concat(t,"-rgb")]=i)},createRgbVarsForThemes:function(t,e){if(void 0!==t)for(var a=0,n=Object.values(t);a<n.length;a++)for(var o=n[a],s=0,r=Object.entries(o);s<r.length;s++){var l=i(r[s],2),c=l[0],u=l[1];if(this.isObject(u))for(var d=0,m=Object.entries(u);d<m.length;d++){var f=i(m[d],2),v=f[0],h=f[1];this.generateRgbVar("".concat(c,"-").concat(v),h,e)}else this.generateRgbVar(c,u,e)}}}}],props:{pageHeader:{type:String,required:!0},pageHeaderImages:{type:Array,default:function(){return[]}}}},s=(a(1131),a(25)),r=a(28),l=a.n(r),c=a(1114),u=a(241),d=a(231),m=a(1115),f=Object(s.a)(o,(function(){var t=this,e=t.$createElement,a=t._self._c||e;return a("v-responsive",{staticClass:"gradient-fill-header",style:t.cssVars,attrs:{"max-height":"125px","min-height":"75px"}},[a("v-responsive",{staticClass:"mx-auto",attrs:{"aspect-ratio":567/56.3,"max-width":"1258.9"}},[a("v-row",{staticClass:"ma-0",attrs:{"no-gutters":""}},t._l(t.pageHeaderImages,(function(e,i){return a("v-col",{key:i,attrs:{cols:"4"}},[a("v-row",{attrs:{"no-gutters":"",justify:"center"}},[a("v-responsive",{staticClass:"gradient-fill-header top-level",style:t.cssVars,attrs:{width:"33%",height:"100%","aspect-ratio":189/56.3,"max-height":"150px","min-height":"75px"}},[a("UiSmartBackgroundImg",{attrs:{height:"56.3",width:"189","min-height":"75","image-asset":e,contain:""}})],1)],1)],1)})),1)],1),t._v(" "),a("v-overlay",{directives:[{name:"show",rawName:"v-show",value:t.$vuetify.theme.dark,expression:"$vuetify.theme.dark"}],staticClass:"black",staticStyle:{opacity:"0.3"},attrs:{absolute:"","z-index":"3"}}),t._v(" "),a("v-overlay",{attrs:{absolute:"",opacity:"0","z-index":"3"}},[a("h1",{staticClass:"text-md-h2 text-sm-h3 text-h4 font-weight-black text-center"},[t._v("\n      "+t._s(t.pageHeader)+"\n    ")])])],1)}),[],!1,null,null,null);e.default=f.exports;l()(f,{UiSmartBackgroundImg:a(1130).default}),l()(f,{VCol:c.a,VOverlay:u.a,VResponsive:d.a,VRow:m.a})},1134:function(t,e,a){"use strict";a.r(e);var i={props:{pageHeader:{type:String,default:""},pageHeaderImages:{type:Array,default:function(){return[]}},greyBackground:{type:Boolean,default:!1},sectionId:{type:String,default:null},setMargins:{type:Boolean,default:!1}}},n=a(25),o=a(28),s=a.n(o),r=a(1124),l=Object(n.a)(i,(function(){var t=this,e=t.$createElement,a=t._self._c||e;return a("section",{class:t.greyBackground?t.$vuetify.theme.dark?"primary":"grey lighten-4":null,attrs:{id:t.sectionId}},[a("UiPageHeaderBanner",{directives:[{name:"show",rawName:"v-show",value:t.pageHeader,expression:"pageHeader"}],staticClass:"white",attrs:{"page-header":t.pageHeader,"page-header-images":t.pageHeaderImages}}),t._v(" "),a("v-container",{class:t.setMargins?"pa-md-8 pa-4":"pa-0",staticStyle:{"max-width":"1700px"},attrs:{fluid:""}},[t._t("default")],2)],1)}),[],!1,null,null,null);e.default=l.exports;s()(l,{UiPageHeaderBanner:a(1133).default}),s()(l,{VContainer:r.a})},1135:function(t,e,a){"use strict";a.r(e);var i={props:{title:{type:String,default:""}}},n=a(25),o=Object(n.a)(i,(function(){var t=this,e=t.$createElement;return(t._self._c||e)("h3",{staticClass:"text-h4 font-weight-bold mb-5"},[t._v(t._s(t.title))])}),[],!1,null,null,null);e.default=o.exports},1136:function(t,e,a){"use strict";a.r(e);var i={props:{id:{type:String,default:null},href:{type:String,default:null},to:{type:String,default:null},text:{type:String,default:""},icon:{type:String,default:""},large:{type:Boolean,default:!1},xLarge:{type:Boolean,default:!1},small:{type:Boolean,default:!1},xSmall:{type:Boolean,default:!1},doHover:{type:Boolean,default:!1}},data:function(){return{prevButtonHoverId:""}},computed:{buttonHoverId:function(){return this.$store.state.buttonHover.buttonHoverId},shouldHover:function(){return this.doHover&&""===this.buttonHoverId}},methods:{setButtonHoverId:function(t){this.prevButtonHoverId=this.buttonHoverId,this.$store.commit("buttonHover/setButtonHoverId",t)},unsetButtonHoverId:function(){this.prevButtonHoverId="",this.$store.commit("buttonHover/setButtonHoverId",this.prevButtonHoverId)}}},n=a(25),o=a(28),s=a.n(o),r=a(263),l=a(233),c=Object(n.a)(i,(function(){var t=this,e=t.$createElement,a=t._self._c||e;return a("div",{staticClass:"simplebutton"},[a("v-btn",{class:t.$vuetify.theme.dark?t.shouldHover?"custom-hover primary":"primary":t.shouldHover?"custom-hover secondary":"secondary",attrs:{id:t.id,large:t.large,"x-large":t.xLarge,small:t.small,"x-small":t.xSmall,href:t.href,"to:":t.to,ripple:!1},on:{mouseover:function(e){return t.setButtonHoverId(t.id)},mouseleave:function(e){return t.unsetButtonHoverId(t.id)},click:function(e){return e.stopPropagation(),t.$emit("btn-click",!0)}}},[t.icon?a("v-icon",{staticClass:"pr-3 center"},[t._v("\n      "+t._s(t.icon)+"\n    ")]):t._e(),t._v("\n    "+t._s(t.text)+"\n  ")],1)],1)}),[],!1,null,null,null);e.default=c.exports;s()(c,{VBtn:r.a,VIcon:l.a})},1137:function(t,e,a){var i=a(1141);i.__esModule&&(i=i.default),"string"==typeof i&&(i=[[t.i,i,""]]),i.locals&&(t.exports=i.locals);(0,a(13).default)("49d89040",i,!0,{sourceMap:!1})},1140:function(t,e,a){"use strict";a(1137)},1141:function(t,e,a){var i=a(12)(!1);i.push([t.i,".full-overlay>.v-overlay__content{width:100%;height:100%}.above-overlay,.above-overlay>.v-btn,.above-overlay>.v-responsive__content{z-index:2}.size-from-contents:not(.v-dialog--fullscreen){width:auto;overflow:hidden}.no-max-height.v-dialog:not(.v-dialog--fullscreen){max-height:none;margin:0}.max-height-95.v-dialog:not(.v-dialog--fullscreen){max-height:95%;margin:0}.thin-border{border:1px solid #d3d3d3}.thin-border-bottom{border-bottom:1px solid #d3d3d3}",""]),t.exports=i},1142:function(t,e,a){var i=a(1143);i.__esModule&&(i=i.default),"string"==typeof i&&(i=[[t.i,i,""]]),i.locals&&(t.exports=i.locals);(0,a(13).default)("613880ab",i,!0,{sourceMap:!1})},1143:function(t,e,a){var i=a(12)(!1);i.push([t.i,".v-dialog{border-radius:4px;margin:24px;overflow-y:auto;pointer-events:auto;transition:.3s cubic-bezier(.25,.8,.25,1);width:100%;z-index:inherit;box-shadow:0 11px 15px -7px rgba(0,0,0,.2),0 24px 38px 3px rgba(0,0,0,.14),0 9px 46px 8px rgba(0,0,0,.12)}.v-dialog:not(.v-dialog--fullscreen){max-height:90%}.v-dialog>*{width:100%}.v-dialog>.v-card>.v-card__title{font-size:1.25rem;font-weight:500;letter-spacing:.0125em;padding:16px 24px 10px}.v-dialog>.v-card>.v-card__subtitle,.v-dialog>.v-card>.v-card__text{padding:0 24px 20px}.v-dialog>.v-card>.v-card__actions{padding:8px 16px}.v-dialog__content{align-items:center;display:flex;height:100%;justify-content:center;left:0;pointer-events:none;position:fixed;top:0;transition:.2s cubic-bezier(.25,.8,.25,1),z-index 1ms;width:100%;z-index:6;outline:none}.v-dialog__container{display:none}.v-dialog__container--attached{display:inline}.v-dialog--animated{-webkit-animation-duration:.15s;animation-duration:.15s;-webkit-animation-name:animate-dialog;animation-name:animate-dialog;-webkit-animation-timing-function:cubic-bezier(.25,.8,.25,1);animation-timing-function:cubic-bezier(.25,.8,.25,1)}.v-dialog--fullscreen{border-radius:0;margin:0;height:100%;position:fixed;overflow-y:auto;top:0;left:0}.v-dialog--fullscreen>.v-card{min-height:100%;min-width:100%;margin:0!important;padding:0!important}.v-dialog--scrollable,.v-dialog--scrollable>form{display:flex}.v-dialog--scrollable>.v-card,.v-dialog--scrollable>form>.v-card{display:flex;flex:1 1 100%;flex-direction:column;max-height:100%;max-width:100%}.v-dialog--scrollable>.v-card>.v-card__actions,.v-dialog--scrollable>.v-card>.v-card__title,.v-dialog--scrollable>form>.v-card>.v-card__actions,.v-dialog--scrollable>form>.v-card>.v-card__title{flex:0 0 auto}.v-dialog--scrollable>.v-card>.v-card__text,.v-dialog--scrollable>form>.v-card>.v-card__text{-webkit-backface-visibility:hidden;backface-visibility:hidden;flex:1 1 auto;overflow-y:auto}@-webkit-keyframes animate-dialog{0%{-webkit-transform:scale(1);transform:scale(1)}50%{-webkit-transform:scale(1.03);transform:scale(1.03)}to{-webkit-transform:scale(1);transform:scale(1)}}@keyframes animate-dialog{0%{-webkit-transform:scale(1);transform:scale(1)}50%{-webkit-transform:scale(1.03);transform:scale(1.03)}to{-webkit-transform:scale(1);transform:scale(1)}}",""]),t.exports=i},1147:function(t,e,a){"use strict";var i=a(145),n=a(47),o=a(9),s=a(10);e.a=Object(o.a)(i.a,n.a).extend({name:"v-hover",props:{disabled:{type:Boolean,default:!1},value:{type:Boolean,default:void 0}},methods:{onMouseEnter:function(){this.runDelay("open")},onMouseLeave:function(){this.runDelay("close")}},render:function(){return this.$scopedSlots.default||void 0!==this.value?(this.$scopedSlots.default&&(t=this.$scopedSlots.default({hover:this.isActive})),Array.isArray(t)&&1===t.length&&(t=t[0]),t&&!Array.isArray(t)&&t.tag?(this.disabled||(t.data=t.data||{},this._g(t.data,{mouseenter:this.onMouseEnter,mouseleave:this.onMouseLeave})),t):(Object(s.c)("v-hover should only contain a single element",this),t)):(Object(s.c)("v-hover is missing a default scopedSlot or bound value",this),null);var t}})},1149:function(t,e,a){"use strict";a.r(e);var i=a(69),n={props:{value:Boolean,imageAsset:{type:Object,required:!0},alt:{type:String,default:""},buttons:{type:Array,default:function(){return[]}},cropBottom:{type:Boolean,default:!1}},data:function(){return{mdiClose:i.j}},computed:{show:{get:function(){return this.value},set:function(t){this.$emit("input",t)}}}},o=(a(1140),a(25)),s=a(28),r=a.n(s),l=a(263),c=a(242),u=a(190),d=a(1114),m=a(1176),f=a(233),v=a(241),h=a(231),p=a(1115),g=Object(o.a)(n,(function(){var t=this,e=t.$createElement,a=t._self._c||e;return a("v-dialog",{attrs:{"content-class":t.cropBottom?"size-from-contents max-height-95":"size-from-contents no-max-height"},model:{value:t.show,callback:function(e){t.show=e},expression:"show"}},[a("v-card",[a("v-row",{attrs:{"no-gutters":"","fill-height":""}},[a("v-col",{attrs:{cols:"12"}},[a("v-overlay",{staticClass:"full-overlay",attrs:{absolute:"",opacity:"0","z-index":"1"}},[a("v-responsive",{attrs:{height:"100%"}},[a("v-row",{staticClass:"mb-auto",attrs:{"fill-height":"","no-gutters":"",align:"start",justify:"end"}},[a("v-col",{staticClass:"pa-2 ma-0",attrs:{cols:"auto","align-self":"start"}},[a("div",{staticClass:"simplebutton"},[a("v-btn",{staticClass:"pa-0",attrs:{width:"24px",height:"24px","min-width":"24px",ripple:!1},on:{click:function(e){t.show=!1}}},[a("v-icon",[t._v(t._s(t.mdiClose))])],1)],1)])],1)],1)],1),t._v(" "),a("UiSmartImg",{class:t.cropBottom?"mx-10 mt-10 overflow-y-auto thin-border above-overlay":null,attrs:{"image-asset":t.imageAsset,alt:t.alt,"max-height":t.cropBottom?"calc(95vh - 151px)":"calc(95vh - 110px)",width:t.cropBottom?"calc(90vw - 82px)":"90vw","crop-bottom":t.cropBottom}})],1)],1),t._v(" "),a("v-card-actions",[a("v-row",{attrs:{"no-gutters":"",justify:"center"}},t._l(t.buttons,(function(e,i){return a("v-col",{key:"s_"+i,staticClass:"pa-2 ma-0",attrs:{cols:"auto","align-self":"end"}},[a("UiStyledButton",{staticClass:"text-weight-light above-overlay",attrs:{id:"btn_"+i,href:e.href,to:e.to,text:e.text,icon:e.icon,"x-large":""},on:{"btn-click":function(a){!e.link&&(t.show=!1)}}})],1)})),1)],1)],1)],1)}),[],!1,null,null,null);e.default=g.exports;r()(g,{UiSmartImg:a(261).default,UiStyledButton:a(1136).default}),r()(g,{VBtn:l.a,VCard:c.a,VCardActions:u.a,VCol:d.a,VDialog:m.a,VIcon:f.a,VOverlay:v.a,VResponsive:h.a,VRow:p.a})},1175:function(t,e,a){var i=a(1208);i.__esModule&&(i=i.default),"string"==typeof i&&(i=[[t.i,i,""]]),i.locals&&(t.exports=i.locals);(0,a(13).default)("51a0fe28",i,!0,{sourceMap:!1})},1176:function(t,e,a){"use strict";a(1142);var i=a(1117),n=a(114),o=a(146),s=a(266),r=a(267),l=a(264),c=a(265),u=a(147),d=a(9),m=a(10),f=a(0);function v(t,e){var a=Object.keys(t);if(Object.getOwnPropertySymbols){var i=Object.getOwnPropertySymbols(t);e&&(i=i.filter((function(e){return Object.getOwnPropertyDescriptor(t,e).enumerable}))),a.push.apply(a,i)}return a}function h(t){for(var e=1;e<arguments.length;e++){var a=null!=arguments[e]?arguments[e]:{};e%2?v(Object(a),!0).forEach((function(e){b(t,e,a[e])})):Object.getOwnPropertyDescriptors?Object.defineProperties(t,Object.getOwnPropertyDescriptors(a)):v(Object(a)).forEach((function(e){Object.defineProperty(t,e,Object.getOwnPropertyDescriptor(a,e))}))}return t}function p(t){return function(t){if(Array.isArray(t))return g(t)}(t)||function(t){if("undefined"!=typeof Symbol&&null!=t[Symbol.iterator]||null!=t["@@iterator"])return Array.from(t)}(t)||function(t,e){if(!t)return;if("string"==typeof t)return g(t,e);var a=Object.prototype.toString.call(t).slice(8,-1);"Object"===a&&t.constructor&&(a=t.constructor.name);if("Map"===a||"Set"===a)return Array.from(t);if("Arguments"===a||/^(?:Ui|I)nt(?:8|16|32)(?:Clamped)?Array$/.test(a))return g(t,e)}(t)||function(){throw new TypeError("Invalid attempt to spread non-iterable instance.\nIn order to be iterable, non-array objects must have a [Symbol.iterator]() method.")}()}function g(t,e){(null==e||e>t.length)&&(e=t.length);for(var a=0,i=new Array(e);a<e;a++)i[a]=t[a];return i}function b(t,e,a){return e in t?Object.defineProperty(t,e,{value:a,enumerable:!0,configurable:!0,writable:!0}):t[e]=a,t}var y=Object(d.a)(o.a,s.a,r.a,l.a,c.a,n.a);e.a=y.extend({name:"v-dialog",directives:{ClickOutside:u.a},props:{dark:Boolean,disabled:Boolean,fullscreen:Boolean,light:Boolean,maxWidth:[String,Number],noClickAnimation:Boolean,origin:{type:String,default:"center center"},persistent:Boolean,retainFocus:{type:Boolean,default:!0},scrollable:Boolean,transition:{type:[String,Boolean],default:"dialog-transition"},width:[String,Number]},data:function(){return{activatedBy:null,animate:!1,animateTimeout:-1,stackMinZIndex:200,previousActiveElement:null}},computed:{classes:function(){var t;return b(t={},"v-dialog ".concat(this.contentClass).trim(),!0),b(t,"v-dialog--active",this.isActive),b(t,"v-dialog--persistent",this.persistent),b(t,"v-dialog--fullscreen",this.fullscreen),b(t,"v-dialog--scrollable",this.scrollable),b(t,"v-dialog--animated",this.animate),t},contentClasses:function(){return{"v-dialog__content":!0,"v-dialog__content--active":this.isActive}},hasActivator:function(){return Boolean(!!this.$slots.activator||!!this.$scopedSlots.activator)}},watch:{isActive:function(t){var e;t?(this.show(),this.hideScroll()):(this.removeOverlay(),this.unbind(),null==(e=this.previousActiveElement)||e.focus())},fullscreen:function(t){this.isActive&&(t?(this.hideScroll(),this.removeOverlay(!1)):(this.showScroll(),this.genOverlay()))}},created:function(){this.$attrs.hasOwnProperty("full-width")&&Object(m.e)("full-width",this)},beforeMount:function(){var t=this;this.$nextTick((function(){t.isBooted=t.isActive,t.isActive&&t.show()}))},beforeDestroy:function(){"undefined"!=typeof window&&this.unbind()},methods:{animateClick:function(){var t=this;this.animate=!1,this.$nextTick((function(){t.animate=!0,window.clearTimeout(t.animateTimeout),t.animateTimeout=window.setTimeout((function(){return t.animate=!1}),150)}))},closeConditional:function(t){var e=t.target;return!(this._isDestroyed||!this.isActive||this.$refs.content.contains(e)||this.overlay&&e&&!this.overlay.$el.contains(e))&&this.activeZIndex>=this.getMaxZIndex()},hideScroll:function(){this.fullscreen?document.documentElement.classList.add("overflow-y-hidden"):r.a.options.methods.hideScroll.call(this)},show:function(){var t=this;!this.fullscreen&&!this.hideOverlay&&this.genOverlay(),this.$nextTick((function(){t.$nextTick((function(){t.$refs.content.contains(document.activeElement)||(t.previousActiveElement=document.activeElement,t.$refs.content.focus()),t.bind()}))}))},bind:function(){window.addEventListener("focusin",this.onFocusin)},unbind:function(){window.removeEventListener("focusin",this.onFocusin)},onClickOutside:function(t){this.$emit("click:outside",t),this.persistent?this.noClickAnimation||this.animateClick():this.isActive=!1},onKeydown:function(t){if(t.keyCode===f.x.esc&&!this.getOpenDependents().length)if(this.persistent)this.noClickAnimation||this.animateClick();else{this.isActive=!1;var e=this.getActivator();this.$nextTick((function(){return e&&e.focus()}))}this.$emit("keydown",t)},onFocusin:function(t){if(t&&this.retainFocus){var e=t.target;if(e&&![document,this.$refs.content].includes(e)&&!this.$refs.content.contains(e)&&this.activeZIndex>=this.getMaxZIndex()&&!this.getOpenDependentElements().some((function(t){return t.contains(e)}))){var a=p(this.$refs.content.querySelectorAll('button, [href], input, select, textarea, [tabindex]:not([tabindex="-1"])')).find((function(t){return!t.hasAttribute("disabled")}));a&&a.focus()}}},genContent:function(){var t=this;return this.showLazyContent((function(){return[t.$createElement(i.a,{props:{root:!0,light:t.light,dark:t.dark}},[t.$createElement("div",{class:t.contentClasses,attrs:h({role:"dialog",tabindex:t.isActive?0:void 0,"aria-modal":t.hideOverlay?void 0:"true"},t.getScopeIdAttrs()),on:{keydown:t.onKeydown},style:{zIndex:t.activeZIndex},ref:"content"},[t.genTransition()])])]}))},genTransition:function(){var t=this.genInnerContent();return this.transition?this.$createElement("transition",{props:{name:this.transition,origin:this.origin,appear:!0}},[t]):t},genInnerContent:function(){var t={class:this.classes,ref:"dialog",directives:[{name:"click-outside",value:{handler:this.onClickOutside,closeConditional:this.closeConditional,include:this.getOpenDependentElements}},{name:"show",value:this.isActive}],style:{transformOrigin:this.origin}};return this.fullscreen||(t.style=h(h({},t.style),{},{maxWidth:Object(f.h)(this.maxWidth),width:Object(f.h)(this.width)})),this.$createElement("div",t,this.getContentSlot())}},render:function(t){return t("div",{staticClass:"v-dialog__container",class:{"v-dialog__container--attached":""===this.attach||!0===this.attach||"attach"===this.attach}},[this.genActivator(),this.genContent()])}})},1177:function(t,e,a){var i=a(1210);i.__esModule&&(i=i.default),"string"==typeof i&&(i=[[t.i,i,""]]),i.locals&&(t.exports=i.locals);(0,a(13).default)("6ccc6b97",i,!0,{sourceMap:!1})},1207:function(t,e,a){"use strict";a(1175)},1208:function(t,e,a){var i=a(12)(!1);i.push([t.i,".zoom[data-v-4777290a]{-webkit-transform:scale(1.0125) translateY(-5px);transform:scale(1.0125) translateY(-5px)}.halfzoom[data-v-4777290a],.zoom[data-v-4777290a]{transition:-webkit-transform .1s;transition:transform .1s;transition:transform .1s,-webkit-transform .1s}.halfzoom[data-v-4777290a]{-webkit-transform:scale(1.00625) translateY(-2.5px);transform:scale(1.00625) translateY(-2.5px)}.notzoom[data-v-4777290a]{transition:-webkit-transform .1s;transition:transform .1s;transition:transform .1s,-webkit-transform .1s}",""]),t.exports=i},1209:function(t,e,a){"use strict";a(1177)},1210:function(t,e,a){var i=a(12)(!1);i.push([t.i,".team-column[data-v-1ea515ee]{max-width:250px;min-width:250px}",""]),t.exports=i},1249:function(t,e,a){"use strict";a.r(e);var i={props:{card:{type:Object,default:function(){}}},data:function(){return{down:!1}}},n=(a(1207),a(25)),o=a(28),s=a.n(o),r=a(242),l=a(1147),c=Object(n.a)(i,(function(){var t=this,e=t.$createElement,a=t._self._c||e;return a("v-hover",{scopedSlots:t._u([{key:"default",fn:function(e){var i=e.hover;return[a("v-card",{staticClass:"transition-swing mx-auto",class:i?t.down?"halfzoom":"zoom":"notzoom",staticStyle:{"z-index":"2"},attrs:{elevation:i?t.down?6:12:2,href:t.card.link?t.card.link:null,ripple:!1,"max-width":t.card.maxWidth?t.card.maxWidth:null},on:{mousedown:function(e){t.down=!0},mouseup:function(e){t.down=!1},mouseleave:function(e){t.down=!1},click:function(e){return t.$emit("btn-click",!0)}}},[a("UiSmartImg",{attrs:{"image-asset":t.card.img}})],1)]}}])})}),[],!1,null,"4777290a",null);e.default=c.exports;s()(c,{UiSmartImg:a(261).default}),s()(c,{VCard:r.a,VHover:l.a})},1250:function(t,e,a){"use strict";a.r(e);var i={props:{title:{type:String,default:""}}},n=a(25),o=a(28),s=a.n(o),r=a(1114),l=a(1115),c=Object(n.a)(i,(function(){var t=this,e=t.$createElement,a=t._self._c||e;return a("section",[a("v-row",{staticClass:"ma-0 pb-4",attrs:{"no-gutters":""}},[a("UiMinorTitle",{attrs:{title:t.title}}),t._v(" "),a("v-col",{staticClass:"ma-0",attrs:{cols:"12"}},[t._t("default")],2)],1)],1)}),[],!1,null,null,null);e.default=c.exports;s()(c,{UiMinorTitle:a(1135).default}),s()(c,{VCol:r.a,VRow:l.a})},1251:function(t,e,a){"use strict";a.r(e);var i={props:{title:{type:String,default:""},contactPoints:{type:Array,default:function(){return[]}},githubIssues:{type:Object,default:null}}},n=a(25),o=a(28),s=a.n(o),r=a(1114),l=a(233),c=a(234),u=a(136),d=a(57),m=a(111),f=a(1115),v=Object(n.a)(i,(function(){var t=this,e=t.$createElement,a=t._self._c||e;return a("section",[a("v-row",{staticClass:"ma-0",attrs:{"no-gutters":""}},[a("UiMinorTitle",{attrs:{title:t.title}}),t._v(" "),a("v-col",{attrs:{cols:"12"}},[a("v-list",{staticClass:"transparent",attrs:{"two-line":"","max-width":"100%"}},[t._l(t.contactPoints,(function(e,i){return a("v-list-item",{key:"c_"+i},[a("v-list-item-icon",[a("v-icon",{attrs:{color:t.$vuetify.theme.dark?"accent":"primary"}},[t._v("\n              "+t._s(e.icon))])],1),t._v(" "),a("v-list-item-content",[a("v-list-item-title",{staticClass:"text-wrap"},[t._v("\n              "+t._s(e.title)+"\n            ")]),t._v(" "),a("v-list-item-title",{staticClass:"text-wrap"},[a("a",{attrs:{href:e.link}},[t._v("\n                "+t._s(e.linkText)+"\n              ")])])],1)],1)})),t._v(" "),t.githubIssues?a("v-list-item",[a("v-list-item-icon",[a("v-icon",{attrs:{color:t.$vuetify.theme.dark?"accent":"primary"}},[t._v("\n              "+t._s(t.githubIssues.icon))])],1),t._v(" "),a("v-list-item-content",[a("v-list-item-title",{staticClass:"text-wrap"},[t._v("\n              "+t._s(t.githubIssues.title)+"\n            ")]),t._v(" "),t._l(t.githubIssues.repos,(function(e,i){return a("v-list-item-title",{key:"r_"+i,staticClass:"text-wrap"},[a("a",{attrs:{href:e.issuesLink}},[t._v("\n                "+t._s(e.title)+"\n              ")])])})),t._v(" "),a("v-list-item-title",{staticClass:"text-wrap"},[t._v("\n              "+t._s(t.githubIssues.endComment)+"\n              "),a("nuxt-link",{attrs:{to:"/code"}},[t._v(t._s(t.githubIssues.endCommentPageText))])],1)],2)],1):t._e()],2)],1)],1)],1)}),[],!1,null,null,null);e.default=v.exports;s()(v,{UiMinorTitle:a(1135).default}),s()(v,{VCol:r.a,VIcon:l.a,VList:c.a,VListItem:u.a,VListItemContent:d.a,VListItemIcon:m.a,VListItemTitle:d.c,VRow:f.a})},1252:function(t,e,a){"use strict";a.r(e);var i={props:{title:{type:String,default:""},text:{type:String,default:""},references:{type:Array,default:function(){return[]}}}},n=a(25),o=a(28),s=a.n(o),r=a(1114),l=a(233),c=a(234),u=a(136),d=a(57),m=a(111),f=a(1115),v=Object(n.a)(i,(function(){var t=this,e=t.$createElement,a=t._self._c||e;return a("section",[a("v-row",{staticClass:"ma-0 pt-16",attrs:{"no-gutters":""}},[a("UiMinorTitle",{attrs:{title:t.title}}),t._v(" "),a("v-col",{attrs:{cols:"12"}},[a("p",{staticClass:"font-italic"},[t._v("\n        "+t._s(t.text)+"\n      ")])]),t._v(" "),a("v-col",{attrs:{cols:"12"}},[a("v-list",t._l(t.references,(function(e,i){return a("v-list-item",{key:"r_"+i},[a("v-list-item-icon",[a("v-icon",{attrs:{color:"primary"}},[t._v(" "+t._s(e.icon))])],1),t._v(" "),a("v-list-item-content",[a("v-list-item-title",{staticClass:"text-wrap"},[t._v("\n              "+t._s(e.text)+"\n              "),e.doi?a("a",{attrs:{href:"https://doi.org/"+e.doi}},[t._v("doi: "+t._s(e.doi))]):t._e()])],1)],1)})),1)],1)],1)],1)}),[],!1,null,null,null);e.default=v.exports;s()(v,{UiMinorTitle:a(1135).default}),s()(v,{VCol:r.a,VIcon:l.a,VList:c.a,VListItem:u.a,VListItemContent:d.a,VListItemIcon:m.a,VListItemTitle:d.c,VRow:f.a})},1253:function(t,e,a){"use strict";a.r(e);var i={props:{title:{type:String,default:""},logos:{type:Array,default:function(){return[]}}}},n=a(25),o=a(28),s=a.n(o),r=a(1114),l=a(231),c=a(1115),u=Object(n.a)(i,(function(){var t=this,e=t.$createElement,a=t._self._c||e;return a("section",[a("v-row",{staticClass:"ma-0 pt-16",attrs:{"no-gutters":""}},[a("UiMinorTitle",{attrs:{title:t.title}}),t._v(" "),a("v-col",{attrs:{cols:"12"}},[a("v-responsive",{attrs:{"aspect-ratio":t.$vuetify.breakpoint.mdAndUp?.35:.7,"max-height":"1000"}},[a("v-row",{staticClass:"ma-0 pt-0 fill-height d-flow align-content-space-around"},t._l(t.logos,(function(e,i){return a("v-col",{key:i,staticClass:"pa-8 my-auto",attrs:{cols:"6"}},[a("UiSmartImg",{staticClass:"ma-auto",attrs:{"image-asset":t.$getImageAssetObject("images","logos",e.filename),contain:"","max-width":"200",width:e.width,height:e.height}})],1)})),1)],1)],1)],1)],1)}),[],!1,null,null,null);e.default=u.exports;s()(u,{UiMinorTitle:a(1135).default,UiSmartImg:a(261).default}),s()(u,{VCol:r.a,VResponsive:l.a,VRow:c.a})},1254:function(t,e,a){"use strict";a.r(e);var i={props:{teamName:{type:String,default:""},ourTeam:{type:Array,default:function(){return[]}}}},n=(a(1209),a(25)),o=a(28),s=a.n(o),r=a(1114),l=a(1115),c=Object(n.a)(i,(function(){var t=this,e=t.$createElement,a=t._self._c||e;return a("section",{staticClass:"pa-16",class:t.$vuetify.theme.dark?"primary":"grey lighten-4"},[a("v-row",{attrs:{"no-gutters":""}},[a("UiMinorTitle",{attrs:{title:t.teamName}}),t._v(" "),t._l(t.ourTeam,(function(e,i){return a("v-col",{key:"group-"+i,attrs:{cols:"12"}},[a("h4",{staticClass:"text-h5 text-center pb-5 pt-15 px-5"},[t._v(t._s(e.group))]),t._v(" "),a("v-row",t._l(e.members,(function(e,i){return a("v-col",{key:"person-"+i,attrs:{cols:"12"}},[a("v-row",{staticClass:"mx-auto team-column py-0",class:{"flex-row-reverse":i%2==1}},[a("v-col",{staticClass:"pa-0",attrs:{cols:"6"}},[a("UiSmartImg",{class:i%2==1?"mr-auto":"ml-auto",attrs:{"image-asset":t.$getImageAssetObject("images","team",e.photo)}})],1),t._v(" "),a("v-col",{staticClass:"my-auto",attrs:{cols:"6"}},[a("v-row",{staticClass:"pa-4",class:i%2==1?"text-right":"text-left"},[a("div",{staticClass:"text-h6 font-weight-bold"},[t._v("\n                  "+t._s(e.name)+"\n                ")]),t._v(" "),e.position?a("div",{staticClass:"text-uppercase"},[t._v("\n                  "+t._s(e.position)+"\n                ")]):t._e()])],1)],1)],1)})),1)],1)})),t._v(" "),a("v-col",{attrs:{cols:"12"}},[a("h4",{staticClass:"text-h6 font-italic font-weight-light text-center pb-5 pt-15 px-5"},[t._v("\n        * Has changed affiliation since contributing to FAIRtracks\n      ")])])],2)],1)}),[],!1,null,"1ea515ee",null);e.default=c.exports;s()(c,{UiMinorTitle:a(1135).default,UiSmartImg:a(261).default}),s()(c,{VCol:r.a,VRow:l.a})},1331:function(t,e,a){"use strict";a.r(e);var i=a(69),n={data:function(){return{pageHeader:"Community",pageHeaderImages:[this.$getImageAssetObject("images","tracktypes","LP.svg"),this.$getImageAssetObject("images","tracktypes","LS.svg"),this.$getImageAssetObject("images","tracktypes","LBP.svg")],surveyTitle:"Fill out our community survey!",surveyCard:{link:"",img:this.$getImageAssetObject("images","media","FAIRtracks-survey-ad-webpage.png"),maxWidth:"850px"},showSurveyDialog:!1,surveyDialogButtons:[{text:"Fill out survey!",link:"https://fairtracks.net/survey"}],contactUsTitle:"Contact us!",contactPoints:[{icon:i.d,title:"Join the FAIRtracks announcement mailing list:",link:"https://sympa.uio.no/elixir.no/subscribe/fairtracks-info",linkText:"Subscribe here"},{icon:i.S,title:"Follow us on Twitter:",link:"https://twitter.com/fairtracks",linkText:"@fairtracks"},{icon:i.r,title:"Send an e-mail to the international FAIRtracks team:",link:"mailto:fairtracks@elixir.no",linkText:"fairtracks@elixir.no"}],githubIssues:{icon:i.w,title:"Submit an issue to a GitHub repo:",repos:[{title:"The FAIRtracks draft standard",issuesLink:"https://github.com/fairtracks/fairtracks_standard/issues"},{title:"TrackFind",issuesLink:"https://github.com/elixir-oslo/trackfind/issues"},{title:"The FAIRtracks validator",issuesLink:"https://github.com/fairtracks/fairtracks_validator/issues"}],endComment:"...or any of the others listed on the",endCommentPageLink:"/code",endCommentPageText:"source code page"},citeUsTitle:"Cite us!",citeUsText:"Please cite our primary publication in any research that uses or extends FAIRtracks:",references:[{icon:i.K,text:"Gundersen, S. et al. Recommendations to the FAIRification of genomic track metadata. F1000Res 10, ELIXIR-268 (2021).",doi:"10.12688/f1000research.28449.1"}],recommendationsTitle:"Recommendations",recommendationCard:{link:"https://elixir-europe.org/platforms/interoperability/rirs",img:this.$getImageAssetObject("images","logos","elixir-rir.png")},logosTitle:"Funding / Acknowledgements",logos:[{filename:"elixir-norway.png"},{filename:"elixir-spain.png"},{filename:"embl-ebi.svg",width:"587",height:"181"},{filename:"inb.png"},{filename:"bsc.jpeg"},{filename:"rcn.png"},{filename:"uio.png"},{filename:"uib.png"},{filename:"ntnu.png"}],teamName:"The FAIRtracks team",ourTeam:[{group:"ELIXIR Norway at the Centre for Bioinformatics, University of Oslo (UiO)",members:[{name:"Sveinung Gundersen",position:"",photo:"sveinung-gundersen.png"},{name:"Dmytro Titov*",position:"",photo:"dmytro-titov.png"},{name:"Radmila Kompova*",position:"",photo:"radmila-kompova.png"},{name:"Ahmed Ghanem",position:"",photo:"ahmed-ghanem.png"},{name:"Nazeefa Fatima",position:"",photo:"nazeefa-fatima.png"},{name:"Federico Bianchini",position:"",photo:"federico-bianchini.png"},{name:"Eivind Hovig",position:"",photo:"eivind-hovig.png"}]},{group:"ELIXIR Spain at the Life Sciences Department from the Barcelona Supercomputer Centre (BSC)",members:[{name:"José Mariá Fernández",position:"",photo:"jose-maria-fernandez.png"},{name:"Salvador Capella Gutierrez",position:"",photo:"salvador-capella-gutierrez.png"}]},{group:"The Track Hub Registry group at EMBL-EBI, Hinxton, UK",members:[{name:"Sanjay Boddu",position:"",photo:"sanjay-boddu.png"},{name:"Peter Harrison",position:"",photo:"peter-harrison.png"},{name:"Kieron Taylor*",position:"",photo:"kieron-taylor.png"},{name:"Daniel Zerbino*",position:"",photo:"daniel-zerbino.png"}]},{group:"ELIXIR Norway at the Computational Biology Unit, University of Bergen (UiB)",members:[{name:"Matúš Kalaš",position:"",photo:"matus-kalas.png"}]},{group:"ELIXIR Norway at the Department of Clinical and Molecular Medicine, Norwegian University of Science and Technology (NTNU)",members:[{name:"Finn Drabløs*",position:"",photo:"finn-drablos.png"}]}]}},head:function(){return{title:"Community",meta:[]}}},o=a(25),s=a(28),r=a.n(s),l=a(1114),c=a(1115),u=Object(o.a)(n,(function(){var t=this,e=t.$createElement,a=t._self._c||e;return a("SectionsPageContainer",{attrs:{"page-header":t.pageHeader,"page-header-images":t.pageHeaderImages}},[a("v-row",{staticClass:"pa-0",attrs:{"no-gutters":""}},[a("v-col",{staticClass:"pa-16",attrs:{md:"6",cols:"12"}},[a("SectionsSubSection",{attrs:{title:t.surveyTitle}},[a("UiClickableCard",{staticClass:"survey",attrs:{card:t.surveyCard},on:{"btn-click":function(e){t.showSurveyDialog=!0}}})],1),t._v(" "),a("UiPopupDialog",{attrs:{buttons:t.surveyDialogButtons,"image-asset":t.surveyCard.img},model:{value:t.showSurveyDialog,callback:function(e){t.showSurveyDialog=e},expression:"showSurveyDialog"}}),t._v(" "),a("SectionsContactUs",{attrs:{title:t.contactUsTitle,"contact-points":t.contactPoints,"github-issues":t.githubIssues}}),t._v(" "),a("SectionsCiteUs",{attrs:{title:t.citeUsTitle,text:t.citeUsText,references:t.references}}),t._v(" "),a("v-row",{staticClass:"pa-0 pt-16",attrs:{"no-gutters":""}},[a("v-col",{attrs:{md:"12",cols:"12"}},[a("SectionsSubSection",{attrs:{title:t.recommendationsTitle}},[a("UiClickableCard",{attrs:{card:t.recommendationCard}})],1)],1)],1),t._v(" "),a("SectionsLogoList",{attrs:{title:t.logosTitle,logos:t.logos}})],1),t._v(" "),a("v-col",{staticClass:"pt-0",attrs:{md:"6",cols:"12"}},[a("SectionsTeamColumn",{staticClass:"fill-height",attrs:{"our-team":t.ourTeam,"team-name":t.teamName}})],1)],1)],1)}),[],!1,null,null,null);e.default=u.exports;r()(u,{UiClickableCard:a(1249).default,SectionsSubSection:a(1250).default,UiPopupDialog:a(1149).default,SectionsContactUs:a(1251).default,SectionsCiteUs:a(1252).default,SectionsLogoList:a(1253).default,SectionsTeamColumn:a(1254).default,SectionsPageContainer:a(1134).default}),r()(u,{VCol:l.a,VRow:c.a})}}]);