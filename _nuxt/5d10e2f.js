(window.webpackJsonp=window.webpackJsonp||[]).push([[34,47,49,52],{1071:function(t,e,a){var n=a(1076);n.__esModule&&(n=n.default),"string"==typeof n&&(n=[[t.i,n,""]]),n.locals&&(t.exports=n.locals);(0,a(28).default)("5ca67044",n,!0,{sourceMap:!1})},1072:function(t,e,a){var n=a(1079);n.__esModule&&(n=n.default),"string"==typeof n&&(n=[[t.i,n,""]]),n.locals&&(t.exports=n.locals);(0,a(28).default)("8d97ad88",n,!0,{sourceMap:!1})},1074:function(t,e,a){"use strict";a.r(e);a(33);var n={props:{imageAsset:{type:Object,required:!0},altText:{type:String,default:""},styleText:{type:String,default:""}},data:function(){return{componentId:"ui-no-script-background-img"}}},s=a(59),r=Object(s.a)(n,(function(){return(0,this._self._c)("noscript",{inlineTemplate:{render:function(){var t=this;return(0,t._self._c)("div",{staticClass:"fill-height attach-classes",style:'background-image: url("'.concat(t.imageAsset.optimizedImagePath,'"); ').concat(t.styleText)})},staticRenderFns:[]}})}),[],!1,null,null,null);e.default=r.exports},1075:function(t,e,a){"use strict";a(1071)},1076:function(t,e,a){var n=a(27)(!1);n.push([t.i,".center-background,.slot-center-background .attach-classes{background-position:50%}.cover-background,.slot-cover-background .attach-classes{background-size:cover}.contain-background,.slot-contain-background .attach-classes{background-size:contain;background-color:#fff}.full-size{height:100%;width:100%}.auto-size{height:auto;width:auto}",""]),t.exports=n},1077:function(t,e,a){"use strict";a.r(e);a(33),a(85);var n={props:{imageAsset:{type:Object,required:!0},imgHeight:{type:String,default:null},imgWidth:{type:String,default:null},alt:{type:String,default:""},contain:{type:Boolean,default:!1},notResponsive:{type:Boolean,default:!1}},data:function(){return{componentId:"ui-smart-background-img"}},methods:{getDynamicClasses:function(t,e){var a=[];return t?a.push("contain-background"):a.push("cover-background"),e&&a.push("lazyload"),a.join(" ")}}},s=(a(1075),a(59)),r=a(68),i=a.n(r),o=a(263),c=Object(s.a)(n,(function(){var t=this,e=t._self._c;return t.imageAsset.isSvgImage||t.$config.optimizeImages?e("UiSmartImgFileTypesWrapper",{attrs:{"image-asset":t.imageAsset,"img-height":t.imgHeight,"img-width":t.imgWidth,alt:t.alt,behind:"","not-responsive":t.notResponsive},scopedSlots:t._u([{key:"nonRespImgComponent",fn:function(a){var n=a.imageAsset,s=a.styleText,r=a.lazyLoad;return[e("div",{staticClass:"fill-height center-background attach-classes hide-with-noscript",class:t.getDynamicClasses(t.contain,r),style:r?s:'background-image: url("'.concat(t.imageAsset.optimizedImagePath,'"); ').concat(s),attrs:{"data-bgset":r?n.optimizedImagePath:null}}),t._v(" "),e("UiNoScriptBackgroundImg",{staticClass:"fill-height slot-center-background",class:t.contain?"slot-contain-background":"slot-cover-background",attrs:{"image-asset":n,"style-text":s}})]}},{key:"respImgComponent",fn:function(a){var n=a.imageAsset,s=a.styleText;return[e("div",{staticClass:"lazyload fill-height center-background attach-classes hide-with-noscript",class:t.contain?"contain-background":"cover-background",style:s,attrs:{"data-bgset":"".concat(n.responsiveWebpImage.srcSet," [type: image/webp] |\n                      ").concat(n.responsiveImage.srcSet),"data-sizes":"auto"}}),t._v(" "),e("UiNoScriptBackgroundImg",{staticClass:"slot-center-background",class:t.contain?"slot-contain-background":"slot-cover-background",attrs:{"image-asset":n,"style-text":s}})]}}],null,!1,876970809)}):e("v-img",{class:t.contain?"full-size":"auto-size",staticStyle:{"z-index":"-1"},attrs:{src:t.imageAsset.optimizedImagePath,alt:t.alt,contain:t.contain}})}),[],!1,null,null,null);e.default=c.exports;i()(c,{UiNoScriptBackgroundImg:a(1074).default,UiSmartImgFileTypesWrapper:a(571).default}),i()(c,{VImg:o.a})},1078:function(t,e,a){"use strict";a(1072)},1079:function(t,e,a){var n=a(27)(!1);n.push([t.i,".gradient-fill-header>.v-responsive__content{background:-webkit-linear-gradient(top,rgba(var(--v-accent-rgb),.9),rgba(var(--v-anchor-rgb),.9));background:linear-gradient(180deg,rgba(var(--v-accent-rgb),.9),rgba(var(--v-anchor-rgb),.9))}.top-level{z-index:2}",""]),t.exports=n},1081:function(t,e,a){"use strict";a.r(e);var n=a(32),s=(a(4),a(33),a(51),a(75),a(157),a(216),{mixins:[{computed:{cssVars:function(){var t={};return this.createRgbVarsForThemes(this.$vuetify.theme.themes,t),t}},methods:{isObject:function(t){return"[object Object]"===Object.prototype.toString.call(t)},hexToRgb:function(t){var e=0,a=0,n=0;return 4===t.length?(e="0x"+t[1]+t[1],a="0x"+t[2]+t[2],n="0x"+t[3]+t[3]):7===t.length&&(e="0x"+t[1]+t[2],a="0x"+t[3]+t[4],n="0x"+t[5]+t[6]),"".concat(+e,", ").concat(+a,", ").concat(+n)},generateRgbVar:function(t,e,a){var n=this.hexToRgb(e);n.includes("NaN")||(a["--v-".concat(t,"-rgb")]=n)},createRgbVarsForThemes:function(t,e){if(void 0!==t)for(var a=0,s=Object.values(t);a<s.length;a++)for(var r=s[a],i=0,o=Object.entries(r);i<o.length;i++){var c=Object(n.a)(o[i],2),l=c[0],u=c[1];if(this.isObject(u))for(var g=0,d=Object.entries(u);g<d.length;g++){var p=Object(n.a)(d[g],2),h=p[0],m=p[1];this.generateRgbVar("".concat(l,"-").concat(h),m,e)}else this.generateRgbVar(l,u,e)}}}}],props:{pageHeader:{type:String,required:!0},pageHeaderImages:{type:Array,default:function(){return[]}}},data:function(){return{componentId:"ui-page-header-banner"}}}),r=(a(1078),a(59)),i=a(68),o=a.n(i),c=a(1058),l=a(342),u=a(332),g=a(1059),d=Object(r.a)(s,(function(){var t=this,e=t._self._c;return e("v-responsive",{staticClass:"gradient-fill-header",style:t.cssVars,attrs:{"max-height":"125px","min-height":"75px"}},[e("v-responsive",{staticClass:"mx-auto",attrs:{"aspect-ratio":567/56.3,"max-width":"1258.9"}},[e("v-row",{staticClass:"ma-0",attrs:{"no-gutters":""}},t._l(t.pageHeaderImages,(function(a,n){return e("v-col",{key:n,attrs:{cols:"4"}},[e("v-row",{attrs:{"no-gutters":"",justify:"center"}},[e("v-responsive",{staticClass:"gradient-fill-header top-level",style:t.cssVars,attrs:{width:"33%",height:"100%","aspect-ratio":189/56.3,"max-height":"150px","min-height":"75px"}},[e("UiSmartBackgroundImg",{attrs:{"img-height":"56.3","img-width":"189","image-asset":a,contain:"","not-responsive":""}})],1)],1)],1)})),1)],1),t._v(" "),e("v-overlay",{directives:[{name:"show",rawName:"v-show",value:t.$vuetify.theme.dark,expression:"$vuetify.theme.dark"}],staticClass:"black",staticStyle:{opacity:"0.3"},attrs:{absolute:"","z-index":"3"}}),t._v(" "),e("v-overlay",{attrs:{absolute:"",opacity:"0","z-index":"3"}},[e("h1",{staticClass:"text-md-h2 text-sm-h4 text-h5 font-weight-black text-center"},[t._v("\n        "+t._s(t.pageHeader)+"\n      ")])])],1)}),[],!1,null,null,null);e.default=d.exports;o()(d,{UiSmartBackgroundImg:a(1077).default}),o()(d,{VCol:c.a,VOverlay:l.a,VResponsive:u.a,VRow:g.a})},1083:function(t,e,a){"use strict";a.r(e);var n={props:{pageHeader:{type:String,default:""},pageHeaderImages:{type:Array,default:function(){return[]}},greyBackground:{type:Boolean,default:!1},sectionId:{type:String,default:null},setMargins:{type:Boolean,default:!1}},data:function(){return{componentId:"sections-page-container"}}},s=a(59),r=a(68),i=a.n(r),o=a(1070),c=Object(s.a)(n,(function(){var t=this,e=t._self._c;return e("section",{class:t.greyBackground?t.$vuetify.theme.dark?"primary":"grey lighten-4":null,attrs:{id:t.sectionId}},[e("UiPageHeaderBanner",{directives:[{name:"show",rawName:"v-show",value:t.pageHeader,expression:"pageHeader"}],staticClass:"white",attrs:{"page-header":t.pageHeader,"page-header-images":t.pageHeaderImages}}),t._v(" "),e("v-container",{class:t.setMargins?"pa-md-8 pa-4":"pa-0",staticStyle:{"max-width":"1700px"},attrs:{fluid:""}},[t._t("default")],2)],1)}),[],!1,null,null,null);e.default=c.exports;i()(c,{UiPageHeaderBanner:a(1081).default}),i()(c,{VContainer:o.a})}}]);