(window.webpackJsonp=window.webpackJsonp||[]).push([[62,34,47,49,52],{1071:function(e,t,a){var n=a(1076);n.__esModule&&(n=n.default),"string"==typeof n&&(n=[[e.i,n,""]]),n.locals&&(e.exports=n.locals);(0,a(28).default)("5ca67044",n,!0,{sourceMap:!1})},1072:function(e,t,a){var n=a(1079);n.__esModule&&(n=n.default),"string"==typeof n&&(n=[[e.i,n,""]]),n.locals&&(e.exports=n.locals);(0,a(28).default)("8d97ad88",n,!0,{sourceMap:!1})},1074:function(e,t,a){"use strict";a.r(t);a(33);var n={props:{imageAsset:{type:Object,required:!0},altText:{type:String,default:""},styleText:{type:String,default:""}},data:function(){return{componentId:"ui-no-script-background-img"}}},s=a(59),r=Object(s.a)(n,(function(){return(0,this._self._c)("noscript",{inlineTemplate:{render:function(){var e=this;return(0,e._self._c)("div",{staticClass:"fill-height attach-classes",style:'background-image: url("'.concat(e.imageAsset.optimizedImagePath,'"); ').concat(e.styleText)})},staticRenderFns:[]}})}),[],!1,null,null,null);t.default=r.exports},1075:function(e,t,a){"use strict";a(1071)},1076:function(e,t,a){var n=a(27)(!1);n.push([e.i,".center-background,.slot-center-background .attach-classes{background-position:50%}.cover-background,.slot-cover-background .attach-classes{background-size:cover}.contain-background,.slot-contain-background .attach-classes{background-size:contain;background-color:#fff}.full-size{height:100%;width:100%}.auto-size{height:auto;width:auto}",""]),e.exports=n},1077:function(e,t,a){"use strict";a.r(t);a(33),a(85);var n={props:{imageAsset:{type:Object,required:!0},imgHeight:{type:String,default:null},imgWidth:{type:String,default:null},alt:{type:String,default:""},contain:{type:Boolean,default:!1},notResponsive:{type:Boolean,default:!1}},data:function(){return{componentId:"ui-smart-background-img"}},methods:{getDynamicClasses:function(e,t){var a=[];return e?a.push("contain-background"):a.push("cover-background"),t&&a.push("lazyload"),a.join(" ")}}},s=(a(1075),a(59)),r=a(68),i=a.n(r),o=a(263),c=Object(s.a)(n,(function(){var e=this,t=e._self._c;return e.imageAsset.isSvgImage||e.$config.optimizeImages?t("UiSmartImgFileTypesWrapper",{attrs:{"image-asset":e.imageAsset,"img-height":e.imgHeight,"img-width":e.imgWidth,alt:e.alt,behind:"","not-responsive":e.notResponsive},scopedSlots:e._u([{key:"nonRespImgComponent",fn:function(a){var n=a.imageAsset,s=a.styleText,r=a.lazyLoad;return[t("div",{staticClass:"fill-height center-background attach-classes hide-with-noscript",class:e.getDynamicClasses(e.contain,r),style:r?s:'background-image: url("'.concat(e.imageAsset.optimizedImagePath,'"); ').concat(s),attrs:{"data-bgset":r?n.optimizedImagePath:null}}),e._v(" "),t("UiNoScriptBackgroundImg",{staticClass:"fill-height slot-center-background",class:e.contain?"slot-contain-background":"slot-cover-background",attrs:{"image-asset":n,"style-text":s}})]}},{key:"respImgComponent",fn:function(a){var n=a.imageAsset,s=a.styleText;return[t("div",{staticClass:"lazyload fill-height center-background attach-classes hide-with-noscript",class:e.contain?"contain-background":"cover-background",style:s,attrs:{"data-bgset":"".concat(n.responsiveWebpImage.srcSet," [type: image/webp] |\n                      ").concat(n.responsiveImage.srcSet),"data-sizes":"auto"}}),e._v(" "),t("UiNoScriptBackgroundImg",{staticClass:"slot-center-background",class:e.contain?"slot-contain-background":"slot-cover-background",attrs:{"image-asset":n,"style-text":s}})]}}],null,!1,876970809)}):t("v-img",{class:e.contain?"full-size":"auto-size",staticStyle:{"z-index":"-1"},attrs:{src:e.imageAsset.optimizedImagePath,alt:e.alt,contain:e.contain}})}),[],!1,null,null,null);t.default=c.exports;i()(c,{UiNoScriptBackgroundImg:a(1074).default,UiSmartImgFileTypesWrapper:a(571).default}),i()(c,{VImg:o.a})},1078:function(e,t,a){"use strict";a(1072)},1079:function(e,t,a){var n=a(27)(!1);n.push([e.i,".gradient-fill-header>.v-responsive__content{background:-webkit-linear-gradient(top,rgba(var(--v-accent-rgb),.9),rgba(var(--v-anchor-rgb),.9));background:linear-gradient(180deg,rgba(var(--v-accent-rgb),.9),rgba(var(--v-anchor-rgb),.9))}.top-level{z-index:2}",""]),e.exports=n},1081:function(e,t,a){"use strict";a.r(t);var n=a(32),s=(a(4),a(33),a(51),a(75),a(157),a(216),{mixins:[{computed:{cssVars:function(){var e={};return this.createRgbVarsForThemes(this.$vuetify.theme.themes,e),e}},methods:{isObject:function(e){return"[object Object]"===Object.prototype.toString.call(e)},hexToRgb:function(e){var t=0,a=0,n=0;return 4===e.length?(t="0x"+e[1]+e[1],a="0x"+e[2]+e[2],n="0x"+e[3]+e[3]):7===e.length&&(t="0x"+e[1]+e[2],a="0x"+e[3]+e[4],n="0x"+e[5]+e[6]),"".concat(+t,", ").concat(+a,", ").concat(+n)},generateRgbVar:function(e,t,a){var n=this.hexToRgb(t);n.includes("NaN")||(a["--v-".concat(e,"-rgb")]=n)},createRgbVarsForThemes:function(e,t){if(void 0!==e)for(var a=0,s=Object.values(e);a<s.length;a++)for(var r=s[a],i=0,o=Object.entries(r);i<o.length;i++){var c=Object(n.a)(o[i],2),l=c[0],u=c[1];if(this.isObject(u))for(var d=0,g=Object.entries(u);d<g.length;d++){var m=Object(n.a)(g[d],2),p=m[0],h=m[1];this.generateRgbVar("".concat(l,"-").concat(p),h,t)}else this.generateRgbVar(l,u,t)}}}}],props:{pageHeader:{type:String,required:!0},pageHeaderImages:{type:Array,default:function(){return[]}}},data:function(){return{componentId:"ui-page-header-banner"}}}),r=(a(1078),a(59)),i=a(68),o=a.n(i),c=a(1058),l=a(342),u=a(332),d=a(1059),g=Object(r.a)(s,(function(){var e=this,t=e._self._c;return t("v-responsive",{staticClass:"gradient-fill-header",style:e.cssVars,attrs:{"max-height":"125px","min-height":"75px"}},[t("v-responsive",{staticClass:"mx-auto",attrs:{"aspect-ratio":567/56.3,"max-width":"1258.9"}},[t("v-row",{staticClass:"ma-0",attrs:{"no-gutters":""}},e._l(e.pageHeaderImages,(function(a,n){return t("v-col",{key:n,attrs:{cols:"4"}},[t("v-row",{attrs:{"no-gutters":"",justify:"center"}},[t("v-responsive",{staticClass:"gradient-fill-header top-level",style:e.cssVars,attrs:{width:"33%",height:"100%","aspect-ratio":189/56.3,"max-height":"150px","min-height":"75px"}},[t("UiSmartBackgroundImg",{attrs:{"img-height":"56.3","img-width":"189","image-asset":a,contain:"","not-responsive":""}})],1)],1)],1)})),1)],1),e._v(" "),t("v-overlay",{directives:[{name:"show",rawName:"v-show",value:e.$vuetify.theme.dark,expression:"$vuetify.theme.dark"}],staticClass:"black",staticStyle:{opacity:"0.3"},attrs:{absolute:"","z-index":"3"}}),e._v(" "),t("v-overlay",{attrs:{absolute:"",opacity:"0","z-index":"3"}},[t("h1",{staticClass:"text-md-h2 text-sm-h4 text-h5 font-weight-black text-center"},[e._v("\n        "+e._s(e.pageHeader)+"\n      ")])])],1)}),[],!1,null,null,null);t.default=g.exports;o()(g,{UiSmartBackgroundImg:a(1077).default}),o()(g,{VCol:c.a,VOverlay:l.a,VResponsive:u.a,VRow:d.a})},1083:function(e,t,a){"use strict";a.r(t);var n={props:{pageHeader:{type:String,default:""},pageHeaderImages:{type:Array,default:function(){return[]}},greyBackground:{type:Boolean,default:!1},sectionId:{type:String,default:null},setMargins:{type:Boolean,default:!1}},data:function(){return{componentId:"sections-page-container"}}},s=a(59),r=a(68),i=a.n(r),o=a(1070),c=Object(s.a)(n,(function(){var e=this,t=e._self._c;return t("section",{class:e.greyBackground?e.$vuetify.theme.dark?"primary":"grey lighten-4":null,attrs:{id:e.sectionId}},[t("UiPageHeaderBanner",{directives:[{name:"show",rawName:"v-show",value:e.pageHeader,expression:"pageHeader"}],staticClass:"white",attrs:{"page-header":e.pageHeader,"page-header-images":e.pageHeaderImages}}),e._v(" "),t("v-container",{class:e.setMargins?"pa-md-8 pa-4":"pa-0",staticStyle:{"max-width":"1700px"},attrs:{fluid:""}},[e._t("default")],2)],1)}),[],!1,null,null,null);t.default=c.exports;i()(c,{UiPageHeaderBanner:a(1081).default}),i()(c,{VContainer:o.a})},1084:function(e,t,a){"use strict";a.d(t,"a",(function(){return s}));var n=a(121),s="lateRendererMounted";t.b={computed:{isLateRenderer:function(){return"componentId"in this&&n.MD_REG_LATE_RENDERERS.has(this.componentId)}},mounted:function(){this.isLateRenderer&&this.$nuxt.$emit(s)}}},1086:function(e,t,a){"use strict";a(42),a(4);var n=a(121),s=a(573),r=a(24),i=(a(76),a(34),a(35),a(86),a(72),a(187));function o(e,t,a){var n,s=!1,o=Number(null===(n=getComputedStyle(document.body)["scroll-margin-top"])||void 0===n?void 0:n.replace("px","")),c=window.$nuxt;c.$nextTick((function(){return c.$emit("triggerScroll")})),c.$once("triggerScroll",Object(r.a)(regeneratorRuntime.mark((function t(){var n,r,c;return regeneratorRuntime.wrap((function(t){for(;;)switch(t.prev=t.next){case 0:if(!a){t.next=4;break}s={x:a.x,y:a.y},t.next=21;break;case 4:if(!e.hash){t.next=20;break}return n=e.hash,void 0!==window.CSS&&void 0!==window.CSS.escape&&(n="#"+window.CSS.escape(n.substring(1))),t.prev=7,r=function e(t,a){return document.querySelector(t)||new Promise((function(n){if(a>10)return n();setTimeout((function(){n(e(t,++a||1))}),100)}))},t.next=11,r(e.hash,0);case 11:t.sent&&(s={selector:n}),t.next=18;break;case 15:t.prev=15,t.t0=t.catch(7);case 18:t.next=21;break;case 20:s={x:0,y:0};case 21:return void 0!==s.y?(c=s.y,o&&(c+=o),Object(i.b)(c,{duration:0})):void 0!==s.selector&&(document.getElementById(s.selector.substring(1)).scrollIntoView({block:"start",inline:"nearest"}),o&&window.scrollBy(0,-o)),t.abrupt("return",s);case 23:case"end":return t.stop()}}),t,null,[[7,15]])}))))}"scrollRestoration"in window.history&&(window.history.scrollRestoration="manual",window.addEventListener("beforeunload",(function(){window.history.scrollRestoration="auto"})),window.addEventListener("load",(function(){window.history.scrollRestoration="manual"})));var c=a(1084);t.a={beforeRouteEnter:function(e,t,a){a((function(a){if(a.prevRoute=t,null===t.name){var n=a.$store.state.windowState.reloadScrollPosition;0===n.y&&e.hash||(a.scrollPosition=n)}else a.scrollPosition=void 0}))},data:function(){return{allLateRenderersMounted:void 0,totalLateRenderers:void 0,prevRoute:void 0,scrollPosition:void 0}},beforeMount:function(){window.addEventListener("beforeunload",this.leave)},beforeDestroy:function(){window.removeEventListener("beforeunload",this.leave)},computed:{pageName:function(){return this.componentId}},created:function(){var e=this,t=this.$nuxt.context.store.getters;this.totalLateRenderers=t[n.MD_REG_G_COUNT_LATE_RENDERERS_IN_PAGE](this.pageName),this.totalLateRenderers>0?this.allLateRenderersMounted=new Promise((function(t){var a=0;e.$nuxt.$on(c.a,(function(){(a+=1)===e.totalLateRenderers&&t(!0)}))})):this.allLateRenderersMounted=!0},activated:function(){var e=this;Promise.resolve(this.allLateRenderersMounted).then((function(){var t,a,n;t=e.$route,e.prevRoute,a=e.scrollPosition,null!==(n=t.meta)&&void 0!==n&&n.savedPosition&&(a=t.meta.savedPosition,delete t.meta.savedPosition),o(t,0,a),e.scrollPosition=void 0}))},mounted:function(){Promise.resolve(this.allLateRenderersMounted).then((function(){0}))},methods:{leave:function(){var e=this.$nuxt.context.store.commit,t={x:window.scrollX,y:window.scrollY};e(s.WINDOW_STATE_M_SET_RELOAD_SCROLL_POSITION,t)}}}},1291:function(e,t,a){"use strict";a.r(t);var n={mixins:[a(1086).a],data:function(){return{componentId:"presenting",shown:!1,playmusic:function(){new Audio("https://freemusicarchive.org/track/pay-attention-duffy-duck-cb-052/stream").play()},pageHeader:"Presenting",pageHeaderImages:[this.$getImageAssetObject("images","tracktypes","S.svg"),this.$getImageAssetObject("images","tracktypes","VS.svg"),this.$getImageAssetObject("images","tracktypes","LVS.svg")]}},head:function(){return{title:"Presenting",meta:[]}}},s=a(59),r=a(68),i=a.n(r),o=a(208),c=a(1058),l=a(1070),u=a(1059),d=Object(s.a)(n,(function(){var e=this,t=e._self._c;return t("SectionsPageContainer",{attrs:{"page-header":e.pageHeader,"page-header-images":e.pageHeaderImages}},[t("v-container",{staticStyle:{"max-width":"1300px"}},[t("v-row",{directives:[{name:"show",rawName:"v-show",value:!e.shown,expression:"!shown"}]},[t("v-col",{staticClass:"pa-8"},[t("v-btn",{staticClass:"pa-20",style:{left:"50%",transform:"translateX(-50%)"},attrs:{color:"primary",absolute:""},on:{click:function(t){e.shown=!e.shown,e.playmusic()}}},[e._v("\n            Click me for a surprise\n          ")])],1)],1),e._v(" "),t("v-row",{directives:[{name:"show",rawName:"v-show",value:e.shown,expression:"shown"}],staticClass:"py-8 mt-8",attrs:{"no-gutters":""}},[t("v-col",{attrs:{cols:"12",md:"6","align-self":"center"}},[t("UiSmartImg",{attrs:{"max-height":"250px","max-width":"250px","image-asset":e.$getImageAssetObject("images","team","sveinung-gundersen-big.png")}})],1),e._v(" "),t("v-col",{staticClass:"pa-lg-16 pa-md-10 pa-md-6 px-6 py-16",attrs:{cols:"12",md:"6","align-self":"center"}},[t("h2",{staticClass:"text-md-h3 text-h4 text-center font-weight-black"},[e._v("S. Gundersen")])])],1),e._v(" "),t("v-row",{directives:[{name:"show",rawName:"v-show",value:e.shown,expression:"shown"}],staticClass:"py-8 flex-row-reverse",attrs:{"no-gutters":""}},[t("v-col",{staticClass:"pr-lg-16 pr-md-10 pr-md-6 px-6",attrs:{cols:"12",md:"6","align-self":"center"}},[t("UiSmartImg",{attrs:{"max-height":"405","max-width":"612","image-asset":e.$getImageAssetObject("images","team","fairtracks-team.png")}})],1),e._v(" "),t("v-col",{attrs:{cols:"12",md:"6","align-self":"center"}},[t("div",{staticClass:"pa-lg-16 pa-md-10 pa-md-6 px-6 py-16"},[t("h2",{staticClass:"text-md-h3 text-h4 text-center font-weight-black"},[e._v("\n              ...and the FAIRtracks team\n            ")])])])],1)],1)],1)}),[],!1,null,null,null);t.default=d.exports;i()(d,{UiSmartImg:a(364).default,SectionsPageContainer:a(1083).default}),i()(d,{VBtn:o.a,VCol:c.a,VContainer:l.a,VRow:u.a})}}]);