(window.webpackJsonp=window.webpackJsonp||[]).push([[54,49],{1120:function(t,e,a){var s=a(1124);s.__esModule&&(s=s.default),"string"==typeof s&&(s=[[t.i,s,""]]),s.locals&&(t.exports=s.locals);(0,a(13).default)("787c8c40",s,!0,{sourceMap:!1})},1122:function(t,e,a){"use strict";a.r(e);var s={props:{imageAsset:{type:Object,required:!0},altText:{type:String,default:""},styleText:{type:String,default:""}}},i=a(25),n=Object(i.a)(s,(function(){var t=this.$createElement;return(this._self._c||t)("noscript",{inlineTemplate:{render:function(){var t=this,e=t.$createElement;return(t._self._c||e)("div",{staticClass:"fill-height attach-classes",style:'background-image: url("'+t.imageAsset.optimizedImagePath+'"  ); '+t.styleText})},staticRenderFns:[]}})}),[],!1,null,null,null);e.default=n.exports},1123:function(t,e,a){"use strict";a(1120)},1124:function(t,e,a){var s=a(12)(!1);s.push([t.i,".center-background,.slot-center-background .attach-classes{background-position:50%}.cover-background,.slot-cover-background .attach-classes{background-size:cover}.contain-background,.slot-contain-background .attach-classes{background-size:contain;background-color:#fff}.full-size{height:100%;width:100%}.auto-size{height:auto;width:auto}",""]),t.exports=s},1125:function(t,e,a){"use strict";a.r(e);var s={props:{imageAsset:{type:Object,required:!0},height:{type:String,default:null},width:{type:String,default:null},minHeight:{type:String,default:null},alt:{type:String,default:""},contain:{type:Boolean,default:!1}}},i=(a(1123),a(25)),n=a(28),c=a.n(n),o=a(183),r=Object(i.a)(s,(function(){var t=this,e=t.$createElement,a=t._self._c||e;return t.imageAsset.isSvgImage||t.$config.optimizeImages?a("UiSmartImgFileTypesWrapper",{attrs:{"image-asset":t.imageAsset,height:t.height,width:t.width,"min-height":t.minHeight,alt:t.alt,behind:""},scopedSlots:t._u([{key:"svgImgComponent",fn:function(e){var s=e.imageAsset,i=e.styleText;return[a("div",{staticClass:"lazyload fill-height center-background attach-classes hide-with-noscript",class:t.contain?"contain-background":"cover-background",style:i,attrs:{"data-bgset":s.optimizedImagePath,"data-sizes":"auto"}}),t._v(" "),a("UiNoScriptBackgroundImg",{staticClass:"fill-height slot-center-background",class:t.contain?"slot-contain-background":"slot-cover-background",attrs:{"image-asset":s,"style-text":i}})]}},{key:"imgComponent",fn:function(e){var s=e.imageAsset,i=e.styleText;return[a("div",{staticClass:"lazyload fill-height center-background attach-classes hide-with-noscript",class:t.contain?"contain-background":"cover-background",style:i,attrs:{"data-bgset":s.responsiveWebpImage.srcSet+" [type: image/webp] |\n                    "+s.responsiveImage.srcSet,"data-sizes":"auto"}}),t._v(" "),a("UiNoScriptBackgroundImg",{staticClass:"slot-center-background",class:t.contain?"slot-contain-background":"slot-cover-background",attrs:{"image-asset":s,"style-text":i}})]}}],null,!1,3808305052)}):a("v-img",{class:t.contain?"full-size":"auto-size",staticStyle:{"z-index":"-1"},attrs:{src:t.imageAsset.optimizedImagePath,alt:t.alt,contain:t.contain,"min-height":t.minHeight}})}),[],!1,null,null,null);e.default=r.exports;c()(r,{UiNoScriptBackgroundImg:a(1122).default,UiSmartImgFileTypesWrapper:a(447).default}),c()(r,{VImg:o.a})}}]);