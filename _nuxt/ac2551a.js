(window.webpackJsonp=window.webpackJsonp||[]).push([[59,42,53,54,57],{1088:function(t,e,a){var r=a(1093);r.__esModule&&(r=r.default),"string"==typeof r&&(r=[[t.i,r,""]]),r.locals&&(t.exports=r.locals);(0,a(13).default)("8ae11210",r,!0,{sourceMap:!1})},1089:function(t,e,a){var r=a(1095);r.__esModule&&(r=r.default),"string"==typeof r&&(r=[[t.i,r,""]]),r.locals&&(t.exports=r.locals);(0,a(13).default)("787c8c40",r,!0,{sourceMap:!1})},1090:function(t,e,a){"use strict";a.r(e);var r={props:{imageAsset:{type:Object,required:!0},height:{type:String,default:null},width:{type:String,default:null},minHeight:{type:String,default:null},alt:{type:String,default:""},contain:{type:Boolean,default:!1}}},n=(a(1094),a(25)),i=a(28),s=a.n(i),o=a(178),l=Object(n.a)(r,(function(){var t=this,e=t.$createElement,a=t._self._c||e;return t.imageAsset.isSvgImage||t.$config.optimizeImages?a("UiSmartImgFileTypesWrapper",{attrs:{"image-asset":t.imageAsset,height:t.height,width:t.width,"min-height":t.minHeight,alt:t.alt,behind:""},scopedSlots:t._u([{key:"svgImgComponent",fn:function(e){var r=e.imageAsset,n=e.styleText;return[a("div",{staticClass:"lazyload fill-height center-background attach-classes hide-with-noscript",class:t.contain?"contain-background":"cover-background",style:n,attrs:{"data-bgset":r.optimizedImagePath,"data-sizes":"auto"}}),t._v(" "),a("UiNoScriptBackgroundImg",{staticClass:"fill-height slot-center-background",class:t.contain?"slot-contain-background":"slot-cover-background",attrs:{"image-asset":r,"style-text":n}})]}},{key:"imgComponent",fn:function(e){var r=e.imageAsset,n=e.styleText;return[a("div",{staticClass:"lazyload fill-height center-background attach-classes hide-with-noscript",class:t.contain?"contain-background":"cover-background",style:n,attrs:{"data-bgset":r.responsiveWebpImage.srcSet+" [type: image/webp] |\n                    "+r.responsiveImage.srcSet,"data-sizes":"auto"}}),t._v(" "),a("UiNoScriptBackgroundImg",{staticClass:"slot-center-background",class:t.contain?"slot-contain-background":"slot-cover-background",attrs:{"image-asset":r,"style-text":n}})]}}],null,!1,3808305052)}):a("v-img",{class:t.contain?"full-size":"auto-size",staticStyle:{"z-index":"-1"},attrs:{src:t.imageAsset.optimizedImagePath,alt:t.alt,contain:t.contain,"min-height":t.minHeight}})}),[],!1,null,null,null);e.default=l.exports;s()(l,{UiNoScriptBackgroundImg:a(1091).default,UiSmartImgFileTypesWrapper:a(437).default}),s()(l,{VImg:o.a})},1091:function(t,e,a){"use strict";a.r(e);var r={props:{imageAsset:{type:Object,required:!0},altText:{type:String,default:""},styleText:{type:String,default:""}}},n=a(25),i=Object(n.a)(r,(function(){var t=this.$createElement;return(this._self._c||t)("noscript",{inlineTemplate:{render:function(){var t=this,e=t.$createElement;return(t._self._c||e)("div",{staticClass:"fill-height attach-classes",style:'background-image: url("'+t.imageAsset.optimizedImagePath+'"  ); '+t.styleText})},staticRenderFns:[]}})}),[],!1,null,null,null);e.default=i.exports},1092:function(t,e,a){"use strict";a(1088)},1093:function(t,e,a){var r=a(12)(!1);r.push([t.i,".gradient-fill-header>.v-responsive__content{background:-webkit-gradient(linear,left top,left bottom,from(rgba(var(--v-accent-rgb),.9)),to(rgba(var(--v-anchor-rgb),.9)));background:linear-gradient(180deg,rgba(var(--v-accent-rgb),.9),rgba(var(--v-anchor-rgb),.9))}.top-level{z-index:2}.banner{max-height:150px}",""]),t.exports=r},1094:function(t,e,a){"use strict";a(1089)},1095:function(t,e,a){var r=a(12)(!1);r.push([t.i,".center-background,.slot-center-background .attach-classes{background-position:50%}.cover-background,.slot-cover-background .attach-classes{background-size:cover}.contain-background,.slot-contain-background .attach-classes{background-size:contain;background-color:#fff}.full-size{height:100%;width:100%}.auto-size{height:auto;width:auto}",""]),t.exports=r},1096:function(t,e,a){"use strict";a.r(e);function r(t,e){return function(t){if(Array.isArray(t))return t}(t)||function(t,e){var a=null==t?null:"undefined"!=typeof Symbol&&t[Symbol.iterator]||t["@@iterator"];if(null==a)return;var r,n,i=[],s=!0,o=!1;try{for(a=a.call(t);!(s=(r=a.next()).done)&&(i.push(r.value),!e||i.length!==e);s=!0);}catch(t){o=!0,n=t}finally{try{s||null==a.return||a.return()}finally{if(o)throw n}}return i}(t,e)||function(t,e){if(!t)return;if("string"==typeof t)return n(t,e);var a=Object.prototype.toString.call(t).slice(8,-1);"Object"===a&&t.constructor&&(a=t.constructor.name);if("Map"===a||"Set"===a)return Array.from(t);if("Arguments"===a||/^(?:Ui|I)nt(?:8|16|32)(?:Clamped)?Array$/.test(a))return n(t,e)}(t,e)||function(){throw new TypeError("Invalid attempt to destructure non-iterable instance.\nIn order to be iterable, non-array objects must have a [Symbol.iterator]() method.")}()}function n(t,e){(null==e||e>t.length)&&(e=t.length);for(var a=0,r=new Array(e);a<e;a++)r[a]=t[a];return r}var i={mixins:[{computed:{cssVars:function(){var t={};return this.createRgbVarsForThemes(this.$vuetify.theme.themes,t),t}},methods:{isObject:function(t){return"[object Object]"===Object.prototype.toString.call(t)},hexToRgb:function(t){var e=0,a=0,r=0;return 4===t.length?(e="0x"+t[1]+t[1],a="0x"+t[2]+t[2],r="0x"+t[3]+t[3]):7===t.length&&(e="0x"+t[1]+t[2],a="0x"+t[3]+t[4],r="0x"+t[5]+t[6]),"".concat(+e,", ").concat(+a,", ").concat(+r)},generateRgbVar:function(t,e,a){var r=this.hexToRgb(e);r.includes("NaN")||(a["--v-".concat(t,"-rgb")]=r)},createRgbVarsForThemes:function(t,e){if(void 0!==t)for(var a=0,n=Object.values(t);a<n.length;a++)for(var i=n[a],s=0,o=Object.entries(i);s<o.length;s++){var l=r(o[s],2),c=l[0],u=l[1];if(this.isObject(u))for(var g=0,d=Object.entries(u);g<d.length;g++){var f=r(d[g],2),m=f[0],p=f[1];this.generateRgbVar("".concat(c,"-").concat(m),p,e)}else this.generateRgbVar(c,u,e)}}}}],props:{pageHeader:{type:String,required:!0},pageHeaderImages:{type:Array,default:function(){return[]}}}},s=(a(1092),a(25)),o=a(28),l=a.n(o),c=a(1077),u=a(235),g=a(225),d=a(1078),f=Object(s.a)(i,(function(){var t=this,e=t.$createElement,a=t._self._c||e;return a("v-responsive",{staticClass:"gradient-fill-header",style:t.cssVars,attrs:{"max-height":"125px","min-height":"75px"}},[a("v-responsive",{staticClass:"mx-auto",attrs:{"aspect-ratio":567/56.3,"max-width":"1258.9"}},[a("v-row",{staticClass:"ma-0",attrs:{"no-gutters":""}},t._l(t.pageHeaderImages,(function(e,r){return a("v-col",{key:r,attrs:{cols:"4"}},[a("v-row",{attrs:{"no-gutters":"",justify:"center"}},[a("v-responsive",{staticClass:"gradient-fill-header top-level",style:t.cssVars,attrs:{width:"33%",height:"100%","aspect-ratio":189/56.3,"max-height":"150px","min-height":"75px"}},[a("UiSmartBackgroundImg",{attrs:{height:"56.3",width:"189","min-height":"75","image-asset":e,contain:""}})],1)],1)],1)})),1)],1),t._v(" "),a("v-overlay",{directives:[{name:"show",rawName:"v-show",value:t.$vuetify.theme.dark,expression:"$vuetify.theme.dark"}],staticClass:"black",staticStyle:{opacity:"0.3"},attrs:{absolute:"","z-index":"3"}}),t._v(" "),a("v-overlay",{attrs:{absolute:"",opacity:"0","z-index":"3"}},[a("h1",{staticClass:"text-md-h2 text-sm-h3 text-h4 font-weight-black text-center"},[t._v("\n      "+t._s(t.pageHeader)+"\n    ")])])],1)}),[],!1,null,null,null);e.default=f.exports;l()(f,{UiSmartBackgroundImg:a(1090).default}),l()(f,{VCol:c.a,VOverlay:u.a,VResponsive:g.a,VRow:d.a})},1098:function(t,e,a){"use strict";a.r(e);var r={props:{pageHeader:{type:String,default:""},pageHeaderImages:{type:Array,default:function(){return[]}},greyBackground:{type:Boolean,default:!1},sectionId:{type:String,default:null},setMargins:{type:Boolean,default:!1}}},n=a(25),i=a(28),s=a.n(i),o=a(1087),l=Object(n.a)(r,(function(){var t=this,e=t.$createElement,a=t._self._c||e;return a("section",{class:t.greyBackground?t.$vuetify.theme.dark?"primary":"grey lighten-4":null,attrs:{id:t.sectionId}},[a("UiPageHeaderBanner",{directives:[{name:"show",rawName:"v-show",value:t.pageHeader,expression:"pageHeader"}],staticClass:"white",attrs:{"page-header":t.pageHeader,"page-header-images":t.pageHeaderImages}}),t._v(" "),a("v-container",{class:t.setMargins?"pa-md-8 pa-4":"pa-0",staticStyle:{"max-width":"1700px"},attrs:{fluid:""}},[t._t("default")],2)],1)}),[],!1,null,null,null);e.default=l.exports;s()(l,{UiPageHeaderBanner:a(1096).default}),s()(l,{VContainer:o.a})},1287:function(t,e,a){"use strict";a.r(e);var r=a(8);function n(t,e){var a="undefined"!=typeof Symbol&&t[Symbol.iterator]||t["@@iterator"];if(!a){if(Array.isArray(t)||(a=function(t,e){if(!t)return;if("string"==typeof t)return i(t,e);var a=Object.prototype.toString.call(t).slice(8,-1);"Object"===a&&t.constructor&&(a=t.constructor.name);if("Map"===a||"Set"===a)return Array.from(t);if("Arguments"===a||/^(?:Ui|I)nt(?:8|16|32)(?:Clamped)?Array$/.test(a))return i(t,e)}(t))||e&&t&&"number"==typeof t.length){a&&(t=a);var r=0,n=function(){};return{s:n,n:function(){return r>=t.length?{done:!0}:{done:!1,value:t[r++]}},e:function(t){throw t},f:n}}throw new TypeError("Invalid attempt to iterate non-iterable instance.\nIn order to be iterable, non-array objects must have a [Symbol.iterator]() method.")}var s,o=!0,l=!1;return{s:function(){a=a.call(t)},n:function(){var t=a.next();return o=t.done,t},e:function(t){l=!0,s=t},f:function(){try{o||null==a.return||a.return()}finally{if(l)throw s}}}}function i(t,e){(null==e||e>t.length)&&(e=t.length);for(var a=0,r=new Array(e);a<e;a++)r[a]=t[a];return r}var s={asyncData:function(t){var e,a=t.store,i=a.getters[r.GITHUB_G_GET_ALL_REPOS],s={},o=n(i);try{for(o.s();!(e=o.n()).done;){var l=e.value;s[l.name]=[{title:"Repository URL",value:a.getters[r.GITHUB_G_GET_REPO_URL](l),clientRender:!1},{title:"Open issues",value:a.getters[r.GITHUB_G_GET_REPO_OPEN_ISSUES](l),clientRender:!1},{title:"Main programming language",value:a.getters[r.GITHUB_G_GET_REPO_LANGUAGE](l),clientRender:!1},{title:"Time of first commit",value:a.getters[r.GITHUB_G_GET_REPO_FIRST_COMMIT_DATE](l),clientRender:"relativeDate"},{title:"Time of most recent commit",value:a.getters[r.GITHUB_G_GET_REPO_LAST_COMMIT_DATE](l),clientRender:"relativeDate"},{title:l.parentCommit?'#Commits (children of parent commit "'.concat(l.parentCommit,'")'):"#Commits (total)",value:a.getters[r.GITHUB_G_GET_REPO_COMMIT_COUNT](l),clientRender:!1},{title:"Top 3 committers",value:a.getters[r.GITHUB_G_GET_REPO_TOP_COMMITTERS](l),clientRender:!1}]}}catch(t){o.e(t)}finally{o.f()}return{repos:i,repoInfoItems:s}},data:function(){return{keyUpdateIndex:0,pageHeader:"Code",pageHeaderImages:[this.$getImageAssetObject("images","tracktypes","VS.svg"),this.$getImageAssetObject("images","tracktypes","SF.svg"),this.$getImageAssetObject("images","tracktypes","F.svg")]}},head:function(){return{title:"Code",meta:[]}},created:function(){this.timer=setInterval(this.forceRerender,6e4)},mounted:function(){this.forceRerender()},methods:{renderRelativeDate:function(t){return this.$dayjs(t).fromNow()},forceRerender:function(){this.keyUpdateIndex+=1}}},o=a(25),l=a(28),c=a.n(l),u=a(236),g=a(184),d=a(1077),f=a(1281),m=a(228),p=a(130),h=a(55),v=a(1078),y=Object(o.a)(s,(function(){var t=this,e=t.$createElement,a=t._self._c||e;return a("SectionsPageContainer",{attrs:{"page-header":t.pageHeader,"page-header-images":t.pageHeaderImages,"grey-background":""}},[a("v-data-iterator",{attrs:{items:t.repos,"item-key":"repo"},scopedSlots:t._u([{key:"default",fn:function(e){var r=e.items;return[a("v-row",{staticClass:"mt-4 mx-4"},t._l(r,(function(e,r){return a("v-col",{key:"r_"+r,attrs:{cols:"12"}},[a("v-card",[a("v-card-title",[t._v(t._s(e.title)+" ")]),t._v(" "),a("v-list",{attrs:{"two-line":""}},t._l(t.repoInfoItems[e.name],(function(e,n){return a("v-list-item",{key:"i_"+r+"_"+n},[a("v-list-item-content",[a("v-list-item-title",[t._v(t._s(e.title))]),t._v(" "),e.clientRender?"relativeDate"===e.clientRender?a("v-list-item-subtitle",[a("client-only",{key:"i_"+r+"_"+n+"_"+t.keyUpdateIndex,attrs:{placeholder:"Loading..."}},[t._v("\n                      "+t._s(t.renderRelativeDate(e.value))+"\n                    ")])],1):t._e():a("v-list-item-subtitle",[t._v(t._s(e.value))])],1)],1)})),1)],1)],1)})),1)]}}])})],1)}),[],!1,null,null,null);e.default=y.exports;c()(y,{SectionsPageContainer:a(1098).default}),c()(y,{VCard:u.a,VCardTitle:g.d,VCol:d.a,VDataIterator:f.a,VList:m.a,VListItem:p.a,VListItemContent:h.a,VListItemSubtitle:h.b,VListItemTitle:h.c,VRow:v.a})}}]);