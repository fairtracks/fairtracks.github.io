(window.webpackJsonp=window.webpackJsonp||[]).push([[65,28,34,43,47,49,52],{1071:function(t,e,a){var n=a(1076);n.__esModule&&(n=n.default),"string"==typeof n&&(n=[[t.i,n,""]]),n.locals&&(t.exports=n.locals);(0,a(28).default)("5ca67044",n,!0,{sourceMap:!1})},1072:function(t,e,a){var n=a(1079);n.__esModule&&(n=n.default),"string"==typeof n&&(n=[[t.i,n,""]]),n.locals&&(t.exports=n.locals);(0,a(28).default)("8d97ad88",n,!0,{sourceMap:!1})},1073:function(t,e,a){"use strict";var n=a(1099);e.a={computed:{markdownFiles:function(){return this.markdownFilesDir?this.$loadMarkdownFilesInDir(this.markdownFilesDir):[]}},methods:{compileMarkdown:function(t){return t&&"string"==typeof t?n.marked.parseInline(t,[]):t}}}},1074:function(t,e,a){"use strict";a.r(e);a(33);var n={props:{imageAsset:{type:Object,required:!0},altText:{type:String,default:""},styleText:{type:String,default:""}},data:function(){return{componentId:"ui-no-script-background-img"}}},s=a(59),i=Object(s.a)(n,(function(){return(0,this._self._c)("noscript",{inlineTemplate:{render:function(){var t=this;return(0,t._self._c)("div",{staticClass:"fill-height attach-classes",style:'background-image: url("'.concat(t.imageAsset.optimizedImagePath,'"); ').concat(t.styleText)})},staticRenderFns:[]}})}),[],!1,null,null,null);e.default=i.exports},1075:function(t,e,a){"use strict";a(1071)},1076:function(t,e,a){var n=a(27)(!1);n.push([t.i,".center-background,.slot-center-background .attach-classes{background-position:50%}.cover-background,.slot-cover-background .attach-classes{background-size:cover}.contain-background,.slot-contain-background .attach-classes{background-size:contain;background-color:#fff}.full-size{height:100%;width:100%}.auto-size{height:auto;width:auto}",""]),t.exports=n},1077:function(t,e,a){"use strict";a.r(e);a(33),a(85);var n={props:{imageAsset:{type:Object,required:!0},imgHeight:{type:String,default:null},imgWidth:{type:String,default:null},alt:{type:String,default:""},contain:{type:Boolean,default:!1},notResponsive:{type:Boolean,default:!1}},data:function(){return{componentId:"ui-smart-background-img"}},methods:{getDynamicClasses:function(t,e){var a=[];return t?a.push("contain-background"):a.push("cover-background"),e&&a.push("lazyload"),a.join(" ")}}},s=(a(1075),a(59)),i=a(68),r=a.n(i),o=a(263),c=Object(s.a)(n,(function(){var t=this,e=t._self._c;return t.imageAsset.isSvgImage||t.$config.optimizeImages?e("UiSmartImgFileTypesWrapper",{attrs:{"image-asset":t.imageAsset,"img-height":t.imgHeight,"img-width":t.imgWidth,alt:t.alt,behind:"","not-responsive":t.notResponsive},scopedSlots:t._u([{key:"nonRespImgComponent",fn:function(a){var n=a.imageAsset,s=a.styleText,i=a.lazyLoad;return[e("div",{staticClass:"fill-height center-background attach-classes hide-with-noscript",class:t.getDynamicClasses(t.contain,i),style:i?s:'background-image: url("'.concat(t.imageAsset.optimizedImagePath,'"); ').concat(s),attrs:{"data-bgset":i?n.optimizedImagePath:null}}),t._v(" "),e("UiNoScriptBackgroundImg",{staticClass:"fill-height slot-center-background",class:t.contain?"slot-contain-background":"slot-cover-background",attrs:{"image-asset":n,"style-text":s}})]}},{key:"respImgComponent",fn:function(a){var n=a.imageAsset,s=a.styleText;return[e("div",{staticClass:"lazyload fill-height center-background attach-classes hide-with-noscript",class:t.contain?"contain-background":"cover-background",style:s,attrs:{"data-bgset":"".concat(n.responsiveWebpImage.srcSet," [type: image/webp] |\n                      ").concat(n.responsiveImage.srcSet),"data-sizes":"auto"}}),t._v(" "),e("UiNoScriptBackgroundImg",{staticClass:"slot-center-background",class:t.contain?"slot-contain-background":"slot-cover-background",attrs:{"image-asset":n,"style-text":s}})]}}],null,!1,876970809)}):e("v-img",{class:t.contain?"full-size":"auto-size",staticStyle:{"z-index":"-1"},attrs:{src:t.imageAsset.optimizedImagePath,alt:t.alt,contain:t.contain}})}),[],!1,null,null,null);e.default=c.exports;r()(c,{UiNoScriptBackgroundImg:a(1074).default,UiSmartImgFileTypesWrapper:a(571).default}),r()(c,{VImg:o.a})},1078:function(t,e,a){"use strict";a(1072)},1079:function(t,e,a){var n=a(27)(!1);n.push([t.i,".gradient-fill-header>.v-responsive__content{background:-webkit-linear-gradient(top,rgba(var(--v-accent-rgb),.9),rgba(var(--v-anchor-rgb),.9));background:linear-gradient(180deg,rgba(var(--v-accent-rgb),.9),rgba(var(--v-anchor-rgb),.9))}.top-level{z-index:2}",""]),t.exports=n},1081:function(t,e,a){"use strict";a.r(e);var n=a(32),s=(a(4),a(33),a(51),a(75),a(157),a(216),{mixins:[{computed:{cssVars:function(){var t={};return this.createRgbVarsForThemes(this.$vuetify.theme.themes,t),t}},methods:{isObject:function(t){return"[object Object]"===Object.prototype.toString.call(t)},hexToRgb:function(t){var e=0,a=0,n=0;return 4===t.length?(e="0x"+t[1]+t[1],a="0x"+t[2]+t[2],n="0x"+t[3]+t[3]):7===t.length&&(e="0x"+t[1]+t[2],a="0x"+t[3]+t[4],n="0x"+t[5]+t[6]),"".concat(+e,", ").concat(+a,", ").concat(+n)},generateRgbVar:function(t,e,a){var n=this.hexToRgb(e);n.includes("NaN")||(a["--v-".concat(t,"-rgb")]=n)},createRgbVarsForThemes:function(t,e){if(void 0!==t)for(var a=0,s=Object.values(t);a<s.length;a++)for(var i=s[a],r=0,o=Object.entries(i);r<o.length;r++){var c=Object(n.a)(o[r],2),l=c[0],u=c[1];if(this.isObject(u))for(var d=0,g=Object.entries(u);d<g.length;d++){var p=Object(n.a)(g[d],2),m=p[0],h=p[1];this.generateRgbVar("".concat(l,"-").concat(m),h,e)}else this.generateRgbVar(l,u,e)}}}}],props:{pageHeader:{type:String,required:!0},pageHeaderImages:{type:Array,default:function(){return[]}}},data:function(){return{componentId:"ui-page-header-banner"}}}),i=(a(1078),a(59)),r=a(68),o=a.n(r),c=a(1058),l=a(342),u=a(332),d=a(1059),g=Object(i.a)(s,(function(){var t=this,e=t._self._c;return e("v-responsive",{staticClass:"gradient-fill-header",style:t.cssVars,attrs:{"max-height":"125px","min-height":"75px"}},[e("v-responsive",{staticClass:"mx-auto",attrs:{"aspect-ratio":567/56.3,"max-width":"1258.9"}},[e("v-row",{staticClass:"ma-0",attrs:{"no-gutters":""}},t._l(t.pageHeaderImages,(function(a,n){return e("v-col",{key:n,attrs:{cols:"4"}},[e("v-row",{attrs:{"no-gutters":"",justify:"center"}},[e("v-responsive",{staticClass:"gradient-fill-header top-level",style:t.cssVars,attrs:{width:"33%",height:"100%","aspect-ratio":189/56.3,"max-height":"150px","min-height":"75px"}},[e("UiSmartBackgroundImg",{attrs:{"img-height":"56.3","img-width":"189","image-asset":a,contain:"","not-responsive":""}})],1)],1)],1)})),1)],1),t._v(" "),e("v-overlay",{directives:[{name:"show",rawName:"v-show",value:t.$vuetify.theme.dark,expression:"$vuetify.theme.dark"}],staticClass:"black",staticStyle:{opacity:"0.3"},attrs:{absolute:"","z-index":"3"}}),t._v(" "),e("v-overlay",{attrs:{absolute:"",opacity:"0","z-index":"3"}},[e("h1",{staticClass:"text-md-h2 text-sm-h4 text-h5 font-weight-black text-center"},[t._v("\n        "+t._s(t.pageHeader)+"\n      ")])])],1)}),[],!1,null,null,null);e.default=g.exports;o()(g,{UiSmartBackgroundImg:a(1077).default}),o()(g,{VCol:c.a,VOverlay:l.a,VResponsive:u.a,VRow:d.a})},1083:function(t,e,a){"use strict";a.r(e);var n={props:{pageHeader:{type:String,default:""},pageHeaderImages:{type:Array,default:function(){return[]}},greyBackground:{type:Boolean,default:!1},sectionId:{type:String,default:null},setMargins:{type:Boolean,default:!1}},data:function(){return{componentId:"sections-page-container"}}},s=a(59),i=a(68),r=a.n(i),o=a(1070),c=Object(s.a)(n,(function(){var t=this,e=t._self._c;return e("section",{class:t.greyBackground?t.$vuetify.theme.dark?"primary":"grey lighten-4":null,attrs:{id:t.sectionId}},[e("UiPageHeaderBanner",{directives:[{name:"show",rawName:"v-show",value:t.pageHeader,expression:"pageHeader"}],staticClass:"white",attrs:{"page-header":t.pageHeader,"page-header-images":t.pageHeaderImages}}),t._v(" "),e("v-container",{class:t.setMargins?"pa-md-8 pa-4":"pa-0",staticStyle:{"max-width":"1700px"},attrs:{fluid:""}},[t._t("default")],2)],1)}),[],!1,null,null,null);e.default=c.exports;r()(c,{UiPageHeaderBanner:a(1081).default}),r()(c,{VContainer:o.a})},1084:function(t,e,a){"use strict";a.d(e,"a",(function(){return s}));var n=a(121),s="lateRendererMounted";e.b={computed:{isLateRenderer:function(){return"componentId"in this&&n.MD_REG_LATE_RENDERERS.has(this.componentId)}},mounted:function(){this.isLateRenderer&&this.$nuxt.$emit(s)}}},1086:function(t,e,a){"use strict";a(42),a(4);var n=a(121),s=a(573),i=a(24),r=(a(76),a(34),a(35),a(86),a(72),a(187));function o(t,e,a){var n,s=!1,o=Number(null===(n=getComputedStyle(document.body)["scroll-margin-top"])||void 0===n?void 0:n.replace("px","")),c=window.$nuxt;c.$nextTick((function(){return c.$emit("triggerScroll")})),c.$once("triggerScroll",Object(i.a)(regeneratorRuntime.mark((function e(){var n,i,c;return regeneratorRuntime.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:if(!a){e.next=4;break}s={x:a.x,y:a.y},e.next=21;break;case 4:if(!t.hash){e.next=20;break}return n=t.hash,void 0!==window.CSS&&void 0!==window.CSS.escape&&(n="#"+window.CSS.escape(n.substring(1))),e.prev=7,i=function t(e,a){return document.querySelector(e)||new Promise((function(n){if(a>10)return n();setTimeout((function(){n(t(e,++a||1))}),100)}))},e.next=11,i(t.hash,0);case 11:e.sent&&(s={selector:n}),e.next=18;break;case 15:e.prev=15,e.t0=e.catch(7);case 18:e.next=21;break;case 20:s={x:0,y:0};case 21:return void 0!==s.y?(c=s.y,o&&(c+=o),Object(r.b)(c,{duration:0})):void 0!==s.selector&&(document.getElementById(s.selector.substring(1)).scrollIntoView({block:"start",inline:"nearest"}),o&&window.scrollBy(0,-o)),e.abrupt("return",s);case 23:case"end":return e.stop()}}),e,null,[[7,15]])}))))}"scrollRestoration"in window.history&&(window.history.scrollRestoration="manual",window.addEventListener("beforeunload",(function(){window.history.scrollRestoration="auto"})),window.addEventListener("load",(function(){window.history.scrollRestoration="manual"})));var c=a(1084);e.a={beforeRouteEnter:function(t,e,a){a((function(a){if(a.prevRoute=e,null===e.name){var n=a.$store.state.windowState.reloadScrollPosition;0===n.y&&t.hash||(a.scrollPosition=n)}else a.scrollPosition=void 0}))},data:function(){return{allLateRenderersMounted:void 0,totalLateRenderers:void 0,prevRoute:void 0,scrollPosition:void 0}},beforeMount:function(){window.addEventListener("beforeunload",this.leave)},beforeDestroy:function(){window.removeEventListener("beforeunload",this.leave)},computed:{pageName:function(){return this.componentId}},created:function(){var t=this,e=this.$nuxt.context.store.getters;this.totalLateRenderers=e[n.MD_REG_G_COUNT_LATE_RENDERERS_IN_PAGE](this.pageName),this.totalLateRenderers>0?this.allLateRenderersMounted=new Promise((function(e){var a=0;t.$nuxt.$on(c.a,(function(){(a+=1)===t.totalLateRenderers&&e(!0)}))})):this.allLateRenderersMounted=!0},activated:function(){var t=this;Promise.resolve(this.allLateRenderersMounted).then((function(){var e,a,n;e=t.$route,t.prevRoute,a=t.scrollPosition,null!==(n=e.meta)&&void 0!==n&&n.savedPosition&&(a=e.meta.savedPosition,delete e.meta.savedPosition),o(e,0,a),t.scrollPosition=void 0}))},mounted:function(){Promise.resolve(this.allLateRenderersMounted).then((function(){0}))},methods:{leave:function(){var t=this.$nuxt.context.store.commit,e={x:window.scrollX,y:window.scrollY};t(s.WINDOW_STATE_M_SET_RELOAD_SCROLL_POSITION,e)}}}},1087:function(t,e,a){"use strict";a.r(e);var n={mixins:[a(1073).a],props:{title:{type:String,default:""},subtitle:{type:String,default:""},ingress:{type:String,default:""},info:{type:String,default:""},scaleDownAtSm:{type:Boolean,default:!1},titleStyle:{type:String,default:""},subtitleStyle:{type:String,default:""},ingressStyle:{type:String,default:""},infoStyle:{type:String,default:""}},data:function(){return{componentId:"ui-main-title"}}},s=a(59),i=Object(s.a)(n,(function(){var t=this,e=t._self._c;return e("div",[e("h2",{directives:[{name:"show",rawName:"v-show",value:t.title,expression:"title"}],staticClass:"text-h4 text-center font-weight-black mt-4 mb-8",class:t.scaleDownAtSm?"text-sm-h3":"text-md-h3",style:t.titleStyle,domProps:{textContent:t._s(t.title)}}),t._v(" "),e("h3",{directives:[{name:"show",rawName:"v-show",value:t.subtitle,expression:"subtitle"}],staticClass:"text-h6 font-weight-medium font-italic text-center mb-8",class:t.scaleDownAtSm?"text-sm-h5":"text-md-h5",style:t.subtitleStyle,domProps:{textContent:t._s(t.subtitle)}}),t._v(" "),e("h4",{directives:[{name:"show",rawName:"v-show",value:t.ingress,expression:"ingress"}],staticClass:"text-h6 text-center mb-4",class:t.subtitle?"font-weight-light":"font-weight-medium font-italic",style:t.ingressStyle,domProps:{innerHTML:t._s(t.compileMarkdown(t.ingress))}}),t._v(" "),e("h4",{directives:[{name:"show",rawName:"v-show",value:!t.ingress,expression:"!ingress"}],staticClass:"text-h6 text-center mb-4",class:t.subtitle?"font-weight-light":"font-weight-medium font-italic",style:t.ingressStyle},[t._t("ingress")],2),t._v(" "),e("p",{directives:[{name:"show",rawName:"v-show",value:t.info,expression:"info"}],staticClass:"text-subtitle-1 font-weight-light text-center mb-4",style:t.infoStyle,domProps:{innerHTML:t._s(t.compileMarkdown(t.info))}}),t._v(" "),e("p",{directives:[{name:"show",rawName:"v-show",value:!t.info,expression:"!info"}],staticClass:"text-subtitle-1 font-weight-light text-center mb-4",style:t.infoStyle},[t._t("info")],2)])}),[],!1,null,null,null);e.default=i.exports},1156:function(t,e,a){"use strict";a.r(e);var n=a(129),s={mixins:[a(1073).a],props:{page:{type:String,default:""}},data:function(){return{componentId:"sections-alternating-sub-sections",markdownFilesDir:this.page,mdiGithub:n.mdiGithub}}},i=a(59),r=a(68),o=a.n(r),c=a(1058),l=a(265),u=a(1059),d=Object(i.a)(s,(function(){var t=this,e=t._self._c;return e("div",t._l(t.markdownFiles,(function(a,n){return e("section",{key:n,attrs:{id:a.slug}},[e("v-row",{class:{"flex-row-reverse":n%2==1},attrs:{"no-gutters":""}},[e("v-col",{staticClass:"px-md-8 py-md-16 px-11 py-15",attrs:{cols:"12",lg:"6","align-self":"center"}},[e("figure",[a.img?e("UiSmartImg",{staticClass:"mx-auto",attrs:{"max-width":"600px",contain:"","image-asset":t.$getImageAssetObjectFromPathArray(a.img)}}):t._e(),t._v(" "),e("figcaption",[e("p",{directives:[{name:"show",rawName:"v-show",value:a.caption,expression:"subSection.caption"}],staticClass:"body-2 font-italic text-center pt-8",domProps:{innerHTML:t._s(t.compileMarkdown("Figure "+(n+1)+": "+a.caption))}},[t._v("\n                Figure "+t._s(n+1)+":\n                "+t._s(t.compileMarkdown(a.caption))+"\n              ")])])],1)]),t._v(" "),e("v-col",{staticClass:"px-md-8 py-md-16 px-4 py-8",attrs:{cols:"12",lg:"6","align-self":"center"}},[e("v-row",{staticClass:"pa-3",attrs:{"no-gutters":"",justify:"center"}},[e("v-col",{attrs:{cols:"12"}},[e("UiMainTitle",{attrs:{title:a.title,ingress:a.ingress}})],1),t._v(" "),e("v-col",{attrs:{cols:"12"}},[e("nuxt-content",{attrs:{document:a}})],1),t._v(" "),e("v-col",{directives:[{name:"show",rawName:"v-show",value:a.github_text,expression:"subSection.github_text"}],attrs:{cols:"12"}},[e("v-row",{staticClass:"pa-3",attrs:{justify:"center"}},[e("v-col",{attrs:{cols:"12"}},[e("v-row",{attrs:{"no-gutters":"",justify:"center"}},[e("v-icon",{staticClass:"px-2",attrs:{size:"24px"}},[t._v(t._s(t.mdiGithub))]),t._v(" "),e("div",{staticClass:"font-weight-medium"},[t._v("GitHub repository:")])],1)],1),t._v(" "),e("v-col",{directives:[{name:"show",rawName:"v-show",value:a.github_link,expression:"subSection.github_link"}],staticClass:"pb-6",attrs:{cols:"12",justify:"center"}},[e("v-row",{attrs:{"no-gutters":"",justify:"center"}},[e("a",{attrs:{href:a.github_link}},[t._v(" "+t._s(a.github_text))])])],1)],1)],1)],1)],1)],1)],1)})),0)}),[],!1,null,null,null);e.default=d.exports;o()(d,{UiSmartImg:a(364).default,UiMainTitle:a(1087).default}),o()(d,{VCol:c.a,VIcon:l.a,VRow:u.a})},1294:function(t,e,a){"use strict";a.r(e);var n={mixins:[a(1086).a],data:function(){return{componentId:"topics",pageHeader:"Topics",pageHeaderImages:[this.$getImageAssetObject("images","tracktypes","VP.svg"),this.$getImageAssetObject("images","tracktypes","VS.svg"),this.$getImageAssetObject("images","tracktypes","SF.svg")]}},head:function(){return{title:"Topics",meta:[]}}},s=a(59),i=Object(s.a)(n,(function(){var t=this,e=t._self._c;return e("SectionsPageContainer",{attrs:{"page-header":t.pageHeader,"page-header-images":t.pageHeaderImages}},[e("SectionsAlternatingSubSections",{attrs:{page:t.pageName}})],1)}),[],!1,null,null,null);e.default=i.exports;installComponents(i,{SectionsAlternatingSubSections:a(1156).default,SectionsPageContainer:a(1083).default})}}]);