(window.webpackJsonp=window.webpackJsonp||[]).push([[68,31,38,45,49,51,54],{1015:function(t,e,a){"use strict";a(987)},1016:function(t,e,a){var s=a(10)(!1);s.push([t.i,".nuxt-content>p{margin:16px}.nuxt-content>blockquote{padding-left:20px;margin-left:45px;border-left:3px solid #ccc}.nuxt-content>blockquote>p{display:block;font:14px/22px sans-serif}.footnotes{font:12px/20px sans-serif}",""]),t.exports=s},1033:function(t,e,a){"use strict";a.r(e);var s=a(972),i=a(53),n={props:{page:{type:String,default:""},subSections:{type:Array,default:()=>[]},imageAssetObjects:{type:Object,default:()=>{}}},data:()=>({mdiGithub:i.w}),methods:{compileMarkdown:t=>s.marked.parseInline(t,[])}},r=(a(1015),a(16)),o=a(21),c=a.n(o),l=a(947),u=a(199),g=a(948),d=Object(r.a)(n,(function(){var t=this,e=t.$createElement,a=t._self._c||e;return a("div",t._l(t.subSections,(function(e,s){return a("section",{key:s,attrs:{id:e.slug}},[a("v-row",{class:{"flex-row-reverse":s%2==1},attrs:{"no-gutters":""}},[a("v-col",{staticClass:"px-md-8 py-md-16 px-11 py-15",attrs:{cols:"12",md:"6","align-self":"center"}},[a("figure",[a("UiSmartImg",{directives:[{name:"show",rawName:"v-show",value:e.img,expression:"subSection.img"}],staticClass:"mx-auto",attrs:{"max-height":t.$vuetify.breakpoint.mdAndUp?"900px":"600px",contain:"","image-asset":t.imageAssetObjects[e.img]}}),t._v(" "),a("figcaption",[a("p",{directives:[{name:"show",rawName:"v-show",value:e.caption,expression:"subSection.caption"}],staticClass:"body-2 font-italic text-center pt-8",domProps:{innerHTML:t._s(t.compileMarkdown("Figure "+(s+1)+": "+e.caption))}},[t._v("\n              Figure "+t._s(s+1)+":\n              "+t._s(t.compileMarkdown(e.caption))+"\n            ")])])],1)]),t._v(" "),a("v-col",{staticClass:"px-md-8 py-md-16 px-4 py-8",attrs:{cols:"12",md:"6","align-self":"center"}},[a("v-row",{staticClass:"pa-3",attrs:{"no-gutters":"",justify:"center"}},[a("v-col",{attrs:{cols:"12"}},[a("UiMainTitle",{attrs:{title:e.title,ingress:e.ingress}})],1),t._v(" "),a("v-col",{attrs:{cols:"12"}},[a("nuxt-content",{attrs:{document:e}})],1),t._v(" "),a("v-col",{directives:[{name:"show",rawName:"v-show",value:e.github_text,expression:"subSection.github_text"}],attrs:{cols:"12"}},[a("v-row",{staticClass:"pa-3",attrs:{justify:"center"}},[a("v-col",{attrs:{cols:"12"}},[a("v-row",{attrs:{"no-gutters":"",justify:"center"}},[a("v-icon",{staticClass:"px-2",attrs:{size:"24px"}},[t._v(t._s(t.mdiGithub))]),t._v(" "),a("div",{staticClass:"font-weight-medium"},[t._v("GitHub repository:")])],1)],1),t._v(" "),a("v-col",{directives:[{name:"show",rawName:"v-show",value:e.github_link,expression:"subSection.github_link"}],staticClass:"pb-6",attrs:{cols:"12",justify:"center"}},[a("v-row",{attrs:{"no-gutters":"",justify:"center"}},[a("a",{attrs:{href:e.github_link}},[t._v(" "+t._s(e.github_text))])])],1)],1)],1)],1)],1)],1)],1)})),0)}),[],!1,null,null,null);e.default=d.exports;c()(d,{UiSmartImg:a(225).default,UiMainTitle:a(971).default}),c()(d,{VCol:l.a,VIcon:u.a,VRow:g.a})},1172:function(t,e,a){"use strict";a.r(e);var s={asyncData(t){var{$content:e,$loadMarkdownFiles:a}=t;return a("topics",e)},data(){return{pageHeader:"Topics",pageHeaderImages:[this.$getImageAssetObject("images","tracktypes","VP.svg"),this.$getImageAssetObject("images","tracktypes","VS.svg"),this.$getImageAssetObject("images","tracktypes","SF.svg")]}},head:()=>({title:"Topics",meta:[]})},i=a(16),n=Object(i.a)(s,(function(){var t=this,e=t.$createElement,a=t._self._c||e;return a("SectionsPageContainer",{attrs:{"page-header":t.pageHeader,"page-header-images":t.pageHeaderImages}},[a("SectionsAlternatingSubSections",{attrs:{page:"topics","sub-sections":t.markdownFiles,"image-asset-objects":t.imageAssetObjects}})],1)}),[],!1,null,null,null);e.default=n.exports;installComponents(n,{SectionsAlternatingSubSections:a(1033).default,SectionsPageContainer:a(967).default})},958:function(t,e,a){var s=a(962);s.__esModule&&(s=s.default),"string"==typeof s&&(s=[[t.i,s,""]]),s.locals&&(t.exports=s.locals);(0,a(11).default)("787c8c40",s,!0,{sourceMap:!1})},959:function(t,e,a){var s=a(965);s.__esModule&&(s=s.default),"string"==typeof s&&(s=[[t.i,s,""]]),s.locals&&(t.exports=s.locals);(0,a(11).default)("8ae11210",s,!0,{sourceMap:!1})},960:function(t,e,a){"use strict";a.r(e);var s={props:{imageAsset:{type:Object,required:!0},altText:{type:String,default:""},styleText:{type:String,default:""}}},i=a(16),n=Object(i.a)(s,(function(){var t=this.$createElement;return(this._self._c||t)("noscript",{inlineTemplate:{render:function(){var t=this,e=t.$createElement;return(t._self._c||e)("div",{staticClass:"fill-height attach-classes",style:'background-image: url("'+t.imageAsset.optimizedImagePath+'"  ); '+t.styleText})},staticRenderFns:[]}})}),[],!1,null,null,null);e.default=n.exports},961:function(t,e,a){"use strict";a(958)},962:function(t,e,a){var s=a(10)(!1);s.push([t.i,".center-background,.slot-center-background .attach-classes{background-position:50%}.cover-background,.slot-cover-background .attach-classes{background-size:cover}.contain-background,.slot-contain-background .attach-classes{background-size:contain;background-color:#fff}.full-size{height:100%;width:100%}.auto-size{height:auto;width:auto}",""]),t.exports=s},963:function(t,e,a){"use strict";a.r(e);var s={props:{imageAsset:{type:Object,required:!0},height:{type:String,default:null},width:{type:String,default:null},minHeight:{type:String,default:null},alt:{type:String,default:""},contain:{type:Boolean,default:!1}}},i=(a(961),a(16)),n=a(21),r=a.n(n),o=a(148),c=Object(i.a)(s,(function(){var t=this,e=t.$createElement,a=t._self._c||e;return t.imageAsset.isSvgImage||t.$config.optimizeImages?a("UiSmartImgFileTypesWrapper",{attrs:{"image-asset":t.imageAsset,height:t.height,width:t.width,"min-height":t.minHeight,alt:t.alt,behind:""},scopedSlots:t._u([{key:"svgImgComponent",fn:function(e){var s=e.imageAsset,i=e.styleText;return[a("div",{staticClass:"lazyload fill-height center-background attach-classes hide-with-noscript",class:t.contain?"contain-background":"cover-background",style:i,attrs:{"data-bgset":s.optimizedImagePath,"data-sizes":"auto"}}),t._v(" "),a("UiNoScriptBackgroundImg",{staticClass:"fill-height slot-center-background",class:t.contain?"slot-contain-background":"slot-cover-background",attrs:{"image-asset":s,"style-text":i}})]}},{key:"imgComponent",fn:function(e){var s=e.imageAsset,i=e.styleText;return[a("div",{staticClass:"lazyload fill-height center-background attach-classes hide-with-noscript",class:t.contain?"contain-background":"cover-background",style:i,attrs:{"data-bgset":s.responsiveWebpImage.srcSet+" [type: image/webp] |\n                    "+s.responsiveImage.srcSet,"data-sizes":"auto"}}),t._v(" "),a("UiNoScriptBackgroundImg",{staticClass:"slot-center-background",class:t.contain?"slot-contain-background":"slot-cover-background",attrs:{"image-asset":s,"style-text":i}})]}}],null,!1,3808305052)}):a("v-img",{class:t.contain?"full-size":"auto-size",staticStyle:{"z-index":"-1"},attrs:{src:t.imageAsset.optimizedImagePath,alt:t.alt,contain:t.contain,"min-height":t.minHeight}})}),[],!1,null,null,null);e.default=c.exports;r()(c,{UiNoScriptBackgroundImg:a(960).default,UiSmartImgFileTypesWrapper:a(407).default}),r()(c,{VImg:o.a})},964:function(t,e,a){"use strict";a(959)},965:function(t,e,a){var s=a(10)(!1);s.push([t.i,".gradient-fill-header>.v-responsive__content{background:linear-gradient(180deg,rgba(var(--v-accent-rgb),.9),rgba(var(--v-anchor-rgb),.9))}.top-level{z-index:2}.banner{max-height:150px}",""]),t.exports=s},966:function(t,e,a){"use strict";a.r(e);var s={mixins:[{computed:{cssVars(){var t={};return this.createRgbVarsForThemes(this.$vuetify.theme.themes,t),t}},methods:{isObject:t=>"[object Object]"===Object.prototype.toString.call(t),hexToRgb(t){var e=0,a=0,s=0;return 4===t.length?(e="0x"+t[1]+t[1],a="0x"+t[2]+t[2],s="0x"+t[3]+t[3]):7===t.length&&(e="0x"+t[1]+t[2],a="0x"+t[3]+t[4],s="0x"+t[5]+t[6]),"".concat(+e,", ").concat(+a,", ").concat(+s)},generateRgbVar(t,e,a){var s=this.hexToRgb(e);s.includes("NaN")||(a["--v-".concat(t,"-rgb")]=s)},createRgbVarsForThemes(t,e){if(void 0!==t)for(var a of Object.values(t))for(var[s,i]of Object.entries(a))if(this.isObject(i))for(var[n,r]of Object.entries(i))this.generateRgbVar("".concat(s,"-").concat(n),r,e);else this.generateRgbVar(s,i,e)}}}],props:{pageHeader:{type:String,required:!0},pageHeaderImages:{type:Array,default:()=>[]}}},i=(a(964),a(16)),n=a(21),r=a.n(n),o=a(947),c=a(207),l=a(197),u=a(948),g=Object(i.a)(s,(function(){var t=this,e=t.$createElement,a=t._self._c||e;return a("v-responsive",{staticClass:"gradient-fill-header",style:t.cssVars,attrs:{"max-height":"125px","min-height":"75px"}},[a("v-responsive",{staticClass:"mx-auto",attrs:{"aspect-ratio":567/56.3,"max-width":"1258.9"}},[a("v-row",{staticClass:"ma-0",attrs:{"no-gutters":""}},t._l(t.pageHeaderImages,(function(e,s){return a("v-col",{key:s,attrs:{cols:"4"}},[a("v-row",{attrs:{"no-gutters":"",justify:"center"}},[a("v-responsive",{staticClass:"gradient-fill-header top-level",style:t.cssVars,attrs:{width:"33%",height:"100%","aspect-ratio":189/56.3,"max-height":"150px","min-height":"75px"}},[a("UiSmartBackgroundImg",{attrs:{height:"56.3",width:"189","min-height":"75","image-asset":e,contain:""}})],1)],1)],1)})),1)],1),t._v(" "),a("v-overlay",{directives:[{name:"show",rawName:"v-show",value:t.$vuetify.theme.dark,expression:"$vuetify.theme.dark"}],staticClass:"black",staticStyle:{opacity:"0.3"},attrs:{absolute:"","z-index":"3"}}),t._v(" "),a("v-overlay",{attrs:{absolute:"",opacity:"0","z-index":"3"}},[a("h1",{staticClass:"text-md-h2 text-sm-h3 text-h4 font-weight-black text-center"},[t._v("\n      "+t._s(t.pageHeader)+"\n    ")])])],1)}),[],!1,null,null,null);e.default=g.exports;r()(g,{UiSmartBackgroundImg:a(963).default}),r()(g,{VCol:o.a,VOverlay:c.a,VResponsive:l.a,VRow:u.a})},967:function(t,e,a){"use strict";a.r(e);var s={props:{pageHeader:{type:String,default:""},pageHeaderImages:{type:Array,default:()=>[]},greyBackground:{type:Boolean,default:!1},sectionId:{type:String,default:null},setMargins:{type:Boolean,default:!1}}},i=a(16),n=a(21),r=a.n(n),o=a(957),c=Object(i.a)(s,(function(){var t=this,e=t.$createElement,a=t._self._c||e;return a("section",{class:t.greyBackground?t.$vuetify.theme.dark?"primary":"grey lighten-4":null,attrs:{id:t.sectionId}},[a("UiPageHeaderBanner",{directives:[{name:"show",rawName:"v-show",value:t.pageHeader,expression:"pageHeader"}],staticClass:"white",attrs:{"page-header":t.pageHeader,"page-header-images":t.pageHeaderImages}}),t._v(" "),a("v-container",{class:t.setMargins?"pa-md-8 pa-4":"pa-0",staticStyle:{"max-width":"1700px"},attrs:{fluid:""}},[t._t("default")],2)],1)}),[],!1,null,null,null);e.default=c.exports;r()(c,{UiPageHeaderBanner:a(966).default}),r()(c,{VContainer:o.a})},971:function(t,e,a){"use strict";a.r(e);var s=a(972),i={props:{title:{type:String,default:""},subtitle:{type:String,default:""},ingress:{type:String,default:""},info:{type:String,default:""},scaleDownAtSm:{type:Boolean,default:!1}},methods:{compileMarkdown:t=>s.marked.parseInline(t,[])}},n=a(16),r=Object(n.a)(i,(function(){var t=this,e=t.$createElement,a=t._self._c||e;return a("div",[a("h2",{directives:[{name:"show",rawName:"v-show",value:t.title,expression:"title"}],staticClass:"text-h4 text-center font-weight-black mt-4 mb-8",class:t.scaleDownAtSm?"text-sm-h3":"text-md-h3",domProps:{textContent:t._s(t.title)}}),t._v(" "),a("h3",{directives:[{name:"show",rawName:"v-show",value:t.subtitle,expression:"subtitle"}],staticClass:"text-h6 font-weight-medium font-italic text-center mb-8",class:t.scaleDownAtSm?"text-sm-h5":"text-md-h5",domProps:{textContent:t._s(t.subtitle)}}),t._v(" "),t.ingress?a("h4",{staticClass:"text-h6 text-center mb-4",class:t.subtitle?"font-weight-light":"font-weight-medium font-italic",domProps:{innerHTML:t._s(t.compileMarkdown(t.ingress))}}):a("h4",{staticClass:"text-h6 text-center mb-4",class:t.subtitle?"font-weight-light":"font-weight-medium font-italic"},[t._t("ingress")],2),t._v(" "),t.info?a("p",{staticClass:"text-subtitle-1 font-weight-light text-center mb-4",domProps:{innerHTML:t._s(t.compileMarkdown(t.info))}}):a("p",{staticClass:"text-subtitle-1 font-weight-light text-center mb-4"},[t._t("info")],2)])}),[],!1,null,null,null);e.default=r.exports},987:function(t,e,a){var s=a(1016);s.__esModule&&(s=s.default),"string"==typeof s&&(s=[[t.i,s,""]]),s.locals&&(t.exports=s.locals);(0,a(11).default)("1276683c",s,!0,{sourceMap:!1})}}]);