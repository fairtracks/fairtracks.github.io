(window.webpackJsonp=window.webpackJsonp||[]).push([[67,30,41,48,52,53,56],{1088:function(t,e,a){var s=a(1095);s.__esModule&&(s=s.default),"string"==typeof s&&(s=[[t.i,s,""]]),s.locals&&(t.exports=s.locals);(0,a(13).default)("8ae11210",s,!0,{sourceMap:!1})},1089:function(t,e,a){var s=a(1097);s.__esModule&&(s=s.default),"string"==typeof s&&(s=[[t.i,s,""]]),s.locals&&(t.exports=s.locals);(0,a(13).default)("787c8c40",s,!0,{sourceMap:!1})},1090:function(t,e,a){"use strict";a.r(e);var s=a(1091),n={props:{title:{type:String,default:""},subtitle:{type:String,default:""},ingress:{type:String,default:""},info:{type:String,default:""},scaleDownAtSm:{type:Boolean,default:!1}},methods:{compileMarkdown:function(t){return s.marked.parseInline(t,[])}}},r=a(25),i=Object(r.a)(n,(function(){var t=this,e=t.$createElement,a=t._self._c||e;return a("div",[a("h2",{directives:[{name:"show",rawName:"v-show",value:t.title,expression:"title"}],staticClass:"text-h4 text-center font-weight-black mt-4 mb-8",class:t.scaleDownAtSm?"text-sm-h3":"text-md-h3",domProps:{textContent:t._s(t.title)}}),t._v(" "),a("h3",{directives:[{name:"show",rawName:"v-show",value:t.subtitle,expression:"subtitle"}],staticClass:"text-h6 font-weight-medium font-italic text-center mb-8",class:t.scaleDownAtSm?"text-sm-h5":"text-md-h5",domProps:{textContent:t._s(t.subtitle)}}),t._v(" "),a("h4",{directives:[{name:"show",rawName:"v-show",value:t.ingress,expression:"ingress"}],staticClass:"text-h6 text-center mb-4",class:t.subtitle?"font-weight-light":"font-weight-medium font-italic",domProps:{innerHTML:t._s(t.compileMarkdown(t.ingress))}}),t._v(" "),a("p",{directives:[{name:"show",rawName:"v-show",value:t.info,expression:"info"}],staticClass:"text-subtitle-1 font-weight-light text-center mb-4",domProps:{innerHTML:t._s(t.compileMarkdown(t.info))}})])}),[],!1,null,null,null);e.default=i.exports},1092:function(t,e,a){"use strict";a.r(e);var s={props:{imageAsset:{type:Object,required:!0},height:{type:String,default:null},width:{type:String,default:null},minHeight:{type:String,default:null},alt:{type:String,default:""},contain:{type:Boolean,default:!1}}},n=(a(1096),a(25)),r=a(28),i=a.n(r),o=a(178),c=Object(n.a)(s,(function(){var t=this,e=t.$createElement,a=t._self._c||e;return t.imageAsset.isSvgImage||t.$config.optimizeImages?a("UiSmartImgFileTypesWrapper",{attrs:{"image-asset":t.imageAsset,height:t.height,width:t.width,"min-height":t.minHeight,alt:t.alt,behind:""},scopedSlots:t._u([{key:"svgImgComponent",fn:function(e){var s=e.imageAsset,n=e.styleText;return[a("div",{staticClass:"lazyload fill-height center-background attach-classes hide-with-noscript",class:t.contain?"contain-background":"cover-background",style:n,attrs:{"data-bgset":s.optimizedImagePath,"data-sizes":"auto"}}),t._v(" "),a("UiNoScriptBackgroundImg",{staticClass:"fill-height slot-center-background",class:t.contain?"slot-contain-background":"slot-cover-background",attrs:{"image-asset":s,"style-text":n}})]}},{key:"imgComponent",fn:function(e){var s=e.imageAsset,n=e.styleText;return[a("div",{staticClass:"lazyload fill-height center-background attach-classes hide-with-noscript",class:t.contain?"contain-background":"cover-background",style:n,attrs:{"data-bgset":s.responsiveWebpImage.srcSet+" [type: image/webp] |\n                    "+s.responsiveImage.srcSet,"data-sizes":"auto"}}),t._v(" "),a("UiNoScriptBackgroundImg",{staticClass:"slot-center-background",class:t.contain?"slot-contain-background":"slot-cover-background",attrs:{"image-asset":s,"style-text":n}})]}}],null,!1,3808305052)}):a("v-img",{class:t.contain?"full-size":"auto-size",attrs:{src:t.imageAsset.optimizedImagePath,alt:t.alt,contain:t.contain,"min-height":t.minHeight}})}),[],!1,null,null,null);e.default=c.exports;i()(c,{UiNoScriptBackgroundImg:a(1093).default,UiSmartImgFileTypesWrapper:a(437).default}),i()(c,{VImg:o.a})},1093:function(t,e,a){"use strict";a.r(e);var s={props:{imageAsset:{type:Object,required:!0},altText:{type:String,default:""},styleText:{type:String,default:""}}},n=a(25),r=Object(n.a)(s,(function(){var t=this.$createElement;return(this._self._c||t)("noscript",{inlineTemplate:{render:function(){var t=this,e=t.$createElement;return(t._self._c||e)("div",{staticClass:"fill-height attach-classes",style:'background-image: url("'+t.imageAsset.optimizedImagePath+'"  ); '+t.styleText})},staticRenderFns:[]}})}),[],!1,null,null,null);e.default=r.exports},1094:function(t,e,a){"use strict";a(1088)},1095:function(t,e,a){var s=a(12)(!1);s.push([t.i,".gradient-fill-header>.v-responsive__content{background:-webkit-gradient(linear,left top,left bottom,from(rgba(var(--v-accent-rgb),.9)),to(rgba(var(--v-anchor-rgb),.9)));background:linear-gradient(180deg,rgba(var(--v-accent-rgb),.9),rgba(var(--v-anchor-rgb),.9))}.top-level{z-index:2}.banner{max-height:150px}",""]),t.exports=s},1096:function(t,e,a){"use strict";a(1089)},1097:function(t,e,a){var s=a(12)(!1);s.push([t.i,".center-background,.slot-center-background .attach-classes{background-position:50%}.cover-background,.slot-cover-background .attach-classes{background-size:cover}.contain-background,.slot-contain-background .attach-classes{background-size:contain;background-color:#fff}.full-size{height:100%;width:100%}.auto-size{height:auto;width:auto}",""]),t.exports=s},1098:function(t,e,a){"use strict";a.r(e);function s(t,e){return function(t){if(Array.isArray(t))return t}(t)||function(t,e){var a=null==t?null:"undefined"!=typeof Symbol&&t[Symbol.iterator]||t["@@iterator"];if(null==a)return;var s,n,r=[],i=!0,o=!1;try{for(a=a.call(t);!(i=(s=a.next()).done)&&(r.push(s.value),!e||r.length!==e);i=!0);}catch(t){o=!0,n=t}finally{try{i||null==a.return||a.return()}finally{if(o)throw n}}return r}(t,e)||function(t,e){if(!t)return;if("string"==typeof t)return n(t,e);var a=Object.prototype.toString.call(t).slice(8,-1);"Object"===a&&t.constructor&&(a=t.constructor.name);if("Map"===a||"Set"===a)return Array.from(t);if("Arguments"===a||/^(?:Ui|I)nt(?:8|16|32)(?:Clamped)?Array$/.test(a))return n(t,e)}(t,e)||function(){throw new TypeError("Invalid attempt to destructure non-iterable instance.\nIn order to be iterable, non-array objects must have a [Symbol.iterator]() method.")}()}function n(t,e){(null==e||e>t.length)&&(e=t.length);for(var a=0,s=new Array(e);a<e;a++)s[a]=t[a];return s}var r={mixins:[{computed:{cssVars:function(){var t={};return this.createRgbVarsForThemes(this.$vuetify.theme.themes,t),t}},methods:{isObject:function(t){return"[object Object]"===Object.prototype.toString.call(t)},hexToRgb:function(t){var e=0,a=0,s=0;return 4===t.length?(e="0x"+t[1]+t[1],a="0x"+t[2]+t[2],s="0x"+t[3]+t[3]):7===t.length&&(e="0x"+t[1]+t[2],a="0x"+t[3]+t[4],s="0x"+t[5]+t[6]),"".concat(+e,", ").concat(+a,", ").concat(+s)},generateRgbVar:function(t,e,a){var s=this.hexToRgb(e);s.includes("NaN")||(a["--v-".concat(t,"-rgb")]=s)},createRgbVarsForThemes:function(t,e){if(void 0!==t)for(var a=0,n=Object.values(t);a<n.length;a++)for(var r=n[a],i=0,o=Object.entries(r);i<o.length;i++){var c=s(o[i],2),l=c[0],u=c[1];if(this.isObject(u))for(var g=0,d=Object.entries(u);g<d.length;g++){var p=s(d[g],2),m=p[0],f=p[1];this.generateRgbVar("".concat(l,"-").concat(m),f,e)}else this.generateRgbVar(l,u,e)}}}}],props:{pageHeader:{type:String,required:!0},pageHeaderImages:{type:Array,default:function(){return[]}}}},i=(a(1094),a(25)),o=a(28),c=a.n(o),l=a(1077),u=a(235),g=a(225),d=a(1078),p=Object(i.a)(r,(function(){var t=this,e=t.$createElement,a=t._self._c||e;return a("v-responsive",{staticClass:"gradient-fill-header",style:t.cssVars,attrs:{"max-height":"125px","min-height":"75px"}},[a("v-responsive",{staticClass:"mx-auto",attrs:{"aspect-ratio":567/56.3,"max-width":"1258.9"}},[a("v-row",{staticClass:"ma-0",attrs:{"no-gutters":""}},t._l(t.pageHeaderImages,(function(e,s){return a("v-col",{key:s,attrs:{cols:"4"}},[a("v-row",{attrs:{"no-gutters":"",justify:"center"}},[a("v-responsive",{staticClass:"gradient-fill-header top-level",style:t.cssVars,attrs:{width:"33%",height:"100%","aspect-ratio":189/56.3,"max-height":"150px","min-height":"75px"}},[a("UiSmartBackgroundImg",{attrs:{height:"56.3",width:"189","min-height":"75","image-asset":e,contain:""}})],1)],1)],1)})),1)],1),t._v(" "),a("v-overlay",{directives:[{name:"show",rawName:"v-show",value:t.$vuetify.theme.dark,expression:"$vuetify.theme.dark"}],staticClass:"black",staticStyle:{opacity:"0.3"},attrs:{absolute:"","z-index":"3"}}),t._v(" "),a("v-overlay",{attrs:{absolute:"",opacity:"0","z-index":"3"}},[a("h1",{staticClass:"text-md-h2 text-sm-h3 text-h4 font-weight-black text-center"},[t._v("\n      "+t._s(t.pageHeader)+"\n    ")])])],1)}),[],!1,null,null,null);e.default=p.exports;c()(p,{UiSmartBackgroundImg:a(1092).default}),c()(p,{VCol:l.a,VOverlay:u.a,VResponsive:g.a,VRow:d.a})},1100:function(t,e,a){"use strict";a.r(e);var s={props:{pageHeader:{type:String,default:""},pageHeaderImages:{type:Array,default:function(){return[]}},greyBackground:{type:Boolean,default:!1},sectionId:{type:String,default:null},setMargins:{type:Boolean,default:!1}}},n=a(25),r=a(28),i=a.n(r),o=a(1087),c=Object(n.a)(s,(function(){var t=this,e=t.$createElement,a=t._self._c||e;return a("section",{class:t.greyBackground?t.$vuetify.theme.dark?"primary":"grey lighten-4":null,attrs:{id:t.sectionId}},[a("UiPageHeaderBanner",{directives:[{name:"show",rawName:"v-show",value:t.pageHeader,expression:"pageHeader"}],staticClass:"white",attrs:{"page-header":t.pageHeader,"page-header-images":t.pageHeaderImages}}),t._v(" "),a("v-container",{class:t.setMargins?"pa-md-8 pa-4":"pa-0",staticStyle:{"max-width":"1700px"},attrs:{fluid:""}},[t._t("default")],2)],1)}),[],!1,null,null,null);e.default=c.exports;i()(c,{UiPageHeaderBanner:a(1098).default}),i()(c,{VContainer:o.a})},1115:function(t,e,a){var s=a(1138);s.__esModule&&(s=s.default),"string"==typeof s&&(s=[[t.i,s,""]]),s.locals&&(t.exports=s.locals);(0,a(13).default)("1276683c",s,!0,{sourceMap:!1})},1137:function(t,e,a){"use strict";a(1115)},1138:function(t,e,a){var s=a(12)(!1);s.push([t.i,".nuxt-content>p{margin:16px}.nuxt-content>blockquote{padding-left:20px;margin-left:45px;border-left:3px solid #ccc}.nuxt-content>blockquote>p{display:block;font:14px/22px sans-serif}.footnotes{font:12px/20px sans-serif}",""]),t.exports=s},1151:function(t,e,a){"use strict";a.r(e);var s=a(1091),n=a(68),r={props:{page:{type:String,default:""},subSections:{type:Array,default:function(){return[]}},imageAssetObjects:{type:Object,default:function(){}}},data:function(){return{mdiGithub:n.v}},methods:{compileMarkdown:function(t){return s.marked.parseInline(t,[])}}},i=(a(1137),a(25)),o=a(28),c=a.n(o),l=a(1077),u=a(227),g=a(1078),d=Object(i.a)(r,(function(){var t=this,e=t.$createElement,a=t._self._c||e;return a("div",t._l(t.subSections,(function(e,s){return a("section",{key:s,attrs:{id:e.slug}},[a("v-row",{class:{"flex-row-reverse":s%2==1},attrs:{"no-gutters":""}},[a("v-col",{staticClass:"px-md-8 py-md-16 px-11 py-15",attrs:{cols:"12",md:"6","align-self":"center"}},[a("figure",[a("UiSmartImg",{directives:[{name:"show",rawName:"v-show",value:e.img,expression:"subSection.img"}],staticClass:"mx-auto",attrs:{"max-height":t.$vuetify.breakpoint.mdAndUp?"900px":"600px",contain:"","image-asset":t.imageAssetObjects[e.img]}}),t._v(" "),a("figcaption",[a("p",{directives:[{name:"show",rawName:"v-show",value:e.caption,expression:"subSection.caption"}],staticClass:"body-2 font-italic text-center pt-8",domProps:{innerHTML:t._s(t.compileMarkdown("Figure "+(s+1)+": "+e.caption))}},[t._v("\n              Figure "+t._s(s+1)+":\n              "+t._s(t.compileMarkdown(e.caption))+"\n            ")])])],1)]),t._v(" "),a("v-col",{staticClass:"px-md-8 py-md-16 px-4 py-8",attrs:{cols:"12",md:"6","align-self":"center"}},[a("v-row",{staticClass:"pa-3",attrs:{"no-gutters":"",justify:"center"}},[a("v-col",{attrs:{cols:"12"}},[a("UiMainTitle",{attrs:{title:e.title,ingress:e.ingress}})],1),t._v(" "),a("v-col",{attrs:{cols:"12"}},[a("nuxt-content",{attrs:{document:e}})],1),t._v(" "),a("v-col",{directives:[{name:"show",rawName:"v-show",value:e.github_text,expression:"subSection.github_text"}],attrs:{cols:"12"}},[a("v-row",{staticClass:"pa-3",attrs:{justify:"center"}},[a("v-col",{attrs:{cols:"12"}},[a("v-row",{attrs:{"no-gutters":"",justify:"center"}},[a("v-icon",{staticClass:"px-2",attrs:{size:"24px"}},[t._v(t._s(t.mdiGithub))]),t._v(" "),a("div",{staticClass:"font-weight-medium"},[t._v("GitHub repository:")])],1)],1),t._v(" "),a("v-col",{directives:[{name:"show",rawName:"v-show",value:e.github_link,expression:"subSection.github_link"}],staticClass:"pb-6",attrs:{cols:"12",justify:"center"}},[a("v-row",{attrs:{"no-gutters":"",justify:"center"}},[a("a",{attrs:{href:e.github_link}},[t._v(" "+t._s(e.github_text))])])],1)],1)],1)],1)],1)],1)],1)})),0)}),[],!1,null,null,null);e.default=d.exports;c()(d,{UiSmartImg:a(255).default,UiMainTitle:a(1090).default}),c()(d,{VCol:l.a,VIcon:u.a,VRow:g.a})},1291:function(t,e,a){"use strict";a.r(e);var s={asyncData:function(t){var e=t.$content;return(0,t.$loadMarkdownFiles)("standards",e)},data:function(){return{pageHeader:"Standards",pageHeaderImages:[this.$getImageAssetObject("images","tracktypes","S.svg"),this.$getImageAssetObject("images","tracktypes","VS.svg"),this.$getImageAssetObject("images","tracktypes","LVS.svg")]}},head:function(){return{title:"Standards",meta:[]}}},n=a(25),r=Object(n.a)(s,(function(){var t=this,e=t.$createElement,a=t._self._c||e;return a("SectionsPageContainer",{attrs:{"page-header":t.pageHeader,"page-header-images":t.pageHeaderImages}},[a("SectionsAlternatingSubSections",{attrs:{page:"standards","sub-sections":t.markdownFiles,"image-asset-objects":t.imageAssetObjects}})],1)}),[],!1,null,null,null);e.default=r.exports;installComponents(r,{SectionsAlternatingSubSections:a(1151).default,SectionsPageContainer:a(1100).default})}}]);