(window.webpackJsonp=window.webpackJsonp||[]).push([[61,31,41,48,50,51,52,53,56],{1088:function(t,e,a){var r=a(1095);r.__esModule&&(r=r.default),"string"==typeof r&&(r=[[t.i,r,""]]),r.locals&&(t.exports=r.locals);(0,a(13).default)("8ae11210",r,!0,{sourceMap:!1})},1089:function(t,e,a){var r=a(1097);r.__esModule&&(r=r.default),"string"==typeof r&&(r=[[t.i,r,""]]),r.locals&&(t.exports=r.locals);(0,a(13).default)("787c8c40",r,!0,{sourceMap:!1})},1090:function(t,e,a){"use strict";a.r(e);var r=a(1091),i={props:{title:{type:String,default:""},subtitle:{type:String,default:""},ingress:{type:String,default:""},info:{type:String,default:""},scaleDownAtSm:{type:Boolean,default:!1}},methods:{compileMarkdown:function(t){return r.marked.parseInline(t,[])}}},s=a(25),n=Object(s.a)(i,(function(){var t=this,e=t.$createElement,a=t._self._c||e;return a("div",[a("h2",{directives:[{name:"show",rawName:"v-show",value:t.title,expression:"title"}],staticClass:"text-h4 text-center font-weight-black mt-4 mb-8",class:t.scaleDownAtSm?"text-sm-h3":"text-md-h3",domProps:{textContent:t._s(t.title)}}),t._v(" "),a("h3",{directives:[{name:"show",rawName:"v-show",value:t.subtitle,expression:"subtitle"}],staticClass:"text-h6 font-weight-medium font-italic text-center mb-8",class:t.scaleDownAtSm?"text-sm-h5":"text-md-h5",domProps:{textContent:t._s(t.subtitle)}}),t._v(" "),a("h4",{directives:[{name:"show",rawName:"v-show",value:t.ingress,expression:"ingress"}],staticClass:"text-h6 text-center mb-4",class:t.subtitle?"font-weight-light":"font-weight-medium font-italic",domProps:{innerHTML:t._s(t.compileMarkdown(t.ingress))}}),t._v(" "),a("p",{directives:[{name:"show",rawName:"v-show",value:t.info,expression:"info"}],staticClass:"text-subtitle-1 font-weight-light text-center mb-4",domProps:{innerHTML:t._s(t.compileMarkdown(t.info))}})])}),[],!1,null,null,null);e.default=n.exports},1092:function(t,e,a){"use strict";a.r(e);var r={props:{imageAsset:{type:Object,required:!0},height:{type:String,default:null},width:{type:String,default:null},minHeight:{type:String,default:null},alt:{type:String,default:""},contain:{type:Boolean,default:!1}}},i=(a(1096),a(25)),s=a(28),n=a.n(s),o=a(178),c=Object(i.a)(r,(function(){var t=this,e=t.$createElement,a=t._self._c||e;return t.imageAsset.isSvgImage||t.$config.optimizeImages?a("UiSmartImgFileTypesWrapper",{attrs:{"image-asset":t.imageAsset,height:t.height,width:t.width,"min-height":t.minHeight,alt:t.alt,behind:""},scopedSlots:t._u([{key:"svgImgComponent",fn:function(e){var r=e.imageAsset,i=e.styleText;return[a("div",{staticClass:"lazyload fill-height center-background attach-classes hide-with-noscript",class:t.contain?"contain-background":"cover-background",style:i,attrs:{"data-bgset":r.optimizedImagePath,"data-sizes":"auto"}}),t._v(" "),a("UiNoScriptBackgroundImg",{staticClass:"fill-height slot-center-background",class:t.contain?"slot-contain-background":"slot-cover-background",attrs:{"image-asset":r,"style-text":i}})]}},{key:"imgComponent",fn:function(e){var r=e.imageAsset,i=e.styleText;return[a("div",{staticClass:"lazyload fill-height center-background attach-classes hide-with-noscript",class:t.contain?"contain-background":"cover-background",style:i,attrs:{"data-bgset":r.responsiveWebpImage.srcSet+" [type: image/webp] |\n                    "+r.responsiveImage.srcSet,"data-sizes":"auto"}}),t._v(" "),a("UiNoScriptBackgroundImg",{staticClass:"slot-center-background",class:t.contain?"slot-contain-background":"slot-cover-background",attrs:{"image-asset":r,"style-text":i}})]}}],null,!1,3808305052)}):a("v-img",{class:t.contain?"full-size":"auto-size",attrs:{src:t.imageAsset.optimizedImagePath,alt:t.alt,contain:t.contain,"min-height":t.minHeight}})}),[],!1,null,null,null);e.default=c.exports;n()(c,{UiNoScriptBackgroundImg:a(1093).default,UiSmartImgFileTypesWrapper:a(437).default}),n()(c,{VImg:o.a})},1093:function(t,e,a){"use strict";a.r(e);var r={props:{imageAsset:{type:Object,required:!0},altText:{type:String,default:""},styleText:{type:String,default:""}}},i=a(25),s=Object(i.a)(r,(function(){var t=this.$createElement;return(this._self._c||t)("noscript",{inlineTemplate:{render:function(){var t=this,e=t.$createElement;return(t._self._c||e)("div",{staticClass:"fill-height attach-classes",style:'background-image: url("'+t.imageAsset.optimizedImagePath+'"  ); '+t.styleText})},staticRenderFns:[]}})}),[],!1,null,null,null);e.default=s.exports},1094:function(t,e,a){"use strict";a(1088)},1095:function(t,e,a){var r=a(12)(!1);r.push([t.i,".gradient-fill-header>.v-responsive__content{background:-webkit-gradient(linear,left top,left bottom,from(rgba(var(--v-accent-rgb),.9)),to(rgba(var(--v-anchor-rgb),.9)));background:linear-gradient(180deg,rgba(var(--v-accent-rgb),.9),rgba(var(--v-anchor-rgb),.9))}.top-level{z-index:2}.banner{max-height:150px}",""]),t.exports=r},1096:function(t,e,a){"use strict";a(1089)},1097:function(t,e,a){var r=a(12)(!1);r.push([t.i,".center-background,.slot-center-background .attach-classes{background-position:50%}.cover-background,.slot-cover-background .attach-classes{background-size:cover}.contain-background,.slot-contain-background .attach-classes{background-size:contain;background-color:#fff}.full-size{height:100%;width:100%}.auto-size{height:auto;width:auto}",""]),t.exports=r},1098:function(t,e,a){"use strict";a.r(e);function r(t,e){return function(t){if(Array.isArray(t))return t}(t)||function(t,e){var a=null==t?null:"undefined"!=typeof Symbol&&t[Symbol.iterator]||t["@@iterator"];if(null==a)return;var r,i,s=[],n=!0,o=!1;try{for(a=a.call(t);!(n=(r=a.next()).done)&&(s.push(r.value),!e||s.length!==e);n=!0);}catch(t){o=!0,i=t}finally{try{n||null==a.return||a.return()}finally{if(o)throw i}}return s}(t,e)||function(t,e){if(!t)return;if("string"==typeof t)return i(t,e);var a=Object.prototype.toString.call(t).slice(8,-1);"Object"===a&&t.constructor&&(a=t.constructor.name);if("Map"===a||"Set"===a)return Array.from(t);if("Arguments"===a||/^(?:Ui|I)nt(?:8|16|32)(?:Clamped)?Array$/.test(a))return i(t,e)}(t,e)||function(){throw new TypeError("Invalid attempt to destructure non-iterable instance.\nIn order to be iterable, non-array objects must have a [Symbol.iterator]() method.")}()}function i(t,e){(null==e||e>t.length)&&(e=t.length);for(var a=0,r=new Array(e);a<e;a++)r[a]=t[a];return r}var s={mixins:[{computed:{cssVars:function(){var t={};return this.createRgbVarsForThemes(this.$vuetify.theme.themes,t),t}},methods:{isObject:function(t){return"[object Object]"===Object.prototype.toString.call(t)},hexToRgb:function(t){var e=0,a=0,r=0;return 4===t.length?(e="0x"+t[1]+t[1],a="0x"+t[2]+t[2],r="0x"+t[3]+t[3]):7===t.length&&(e="0x"+t[1]+t[2],a="0x"+t[3]+t[4],r="0x"+t[5]+t[6]),"".concat(+e,", ").concat(+a,", ").concat(+r)},generateRgbVar:function(t,e,a){var r=this.hexToRgb(e);r.includes("NaN")||(a["--v-".concat(t,"-rgb")]=r)},createRgbVarsForThemes:function(t,e){if(void 0!==t)for(var a=0,i=Object.values(t);a<i.length;a++)for(var s=i[a],n=0,o=Object.entries(s);n<o.length;n++){var c=r(o[n],2),l=c[0],d=c[1];if(this.isObject(d))for(var u=0,p=Object.entries(d);u<p.length;u++){var g=r(p[u],2),h=g[0],m=g[1];this.generateRgbVar("".concat(l,"-").concat(h),m,e)}else this.generateRgbVar(l,d,e)}}}}],props:{pageHeader:{type:String,required:!0},pageHeaderImages:{type:Array,default:function(){return[]}}}},n=(a(1094),a(25)),o=a(28),c=a.n(o),l=a(1077),d=a(235),u=a(225),p=a(1078),g=Object(n.a)(s,(function(){var t=this,e=t.$createElement,a=t._self._c||e;return a("v-responsive",{staticClass:"gradient-fill-header",style:t.cssVars,attrs:{"max-height":"125px","min-height":"75px"}},[a("v-responsive",{staticClass:"mx-auto",attrs:{"aspect-ratio":567/56.3,"max-width":"1258.9"}},[a("v-row",{staticClass:"ma-0",attrs:{"no-gutters":""}},t._l(t.pageHeaderImages,(function(e,r){return a("v-col",{key:r,attrs:{cols:"4"}},[a("v-row",{attrs:{"no-gutters":"",justify:"center"}},[a("v-responsive",{staticClass:"gradient-fill-header top-level",style:t.cssVars,attrs:{width:"33%",height:"100%","aspect-ratio":189/56.3,"max-height":"150px","min-height":"75px"}},[a("UiSmartBackgroundImg",{attrs:{height:"56.3",width:"189","min-height":"75","image-asset":e,contain:""}})],1)],1)],1)})),1)],1),t._v(" "),a("v-overlay",{directives:[{name:"show",rawName:"v-show",value:t.$vuetify.theme.dark,expression:"$vuetify.theme.dark"}],staticClass:"black",staticStyle:{opacity:"0.3"},attrs:{absolute:"","z-index":"3"}}),t._v(" "),a("v-overlay",{attrs:{absolute:"",opacity:"0","z-index":"3"}},[a("h1",{staticClass:"text-md-h2 text-sm-h3 text-h4 font-weight-black text-center"},[t._v("\n      "+t._s(t.pageHeader)+"\n    ")])])],1)}),[],!1,null,null,null);e.default=g.exports;c()(g,{UiSmartBackgroundImg:a(1092).default}),c()(g,{VCol:l.a,VOverlay:d.a,VResponsive:u.a,VRow:p.a})},1099:function(t,e,a){"use strict";a.r(e);var r={props:{title:{type:String,default:""}}},i=a(25),s=Object(i.a)(r,(function(){var t=this,e=t.$createElement;return(t._self._c||e)("h3",{staticClass:"text-h4 font-weight-bold mb-5"},[t._v(t._s(t.title))])}),[],!1,null,null,null);e.default=s.exports},1100:function(t,e,a){"use strict";a.r(e);var r={props:{pageHeader:{type:String,default:""},pageHeaderImages:{type:Array,default:function(){return[]}},greyBackground:{type:Boolean,default:!1},sectionId:{type:String,default:null},setMargins:{type:Boolean,default:!1}}},i=a(25),s=a(28),n=a.n(s),o=a(1087),c=Object(i.a)(r,(function(){var t=this,e=t.$createElement,a=t._self._c||e;return a("section",{class:t.greyBackground?t.$vuetify.theme.dark?"primary":"grey lighten-4":null,attrs:{id:t.sectionId}},[a("UiPageHeaderBanner",{directives:[{name:"show",rawName:"v-show",value:t.pageHeader,expression:"pageHeader"}],staticClass:"white",attrs:{"page-header":t.pageHeader,"page-header-images":t.pageHeaderImages}}),t._v(" "),a("v-container",{class:t.setMargins?"pa-md-8 pa-4":"pa-0",staticStyle:{"max-width":"1700px"},attrs:{fluid:""}},[t._t("default")],2)],1)}),[],!1,null,null,null);e.default=c.exports;n()(c,{UiPageHeaderBanner:a(1098).default}),n()(c,{VContainer:o.a})},1135:function(t,e,a){var r=a(1165);r.__esModule&&(r=r.default),"string"==typeof r&&(r=[[t.i,r,""]]),r.locals&&(t.exports=r.locals);(0,a(13).default)("5f88ebd6",r,!0,{sourceMap:!1})},1149:function(t,e,a){"use strict";a.r(e);var r={props:{cardMatrices:{type:Object,default:function(){}}},methods:{createCardId:function(t,e){return"".concat(t,"_c_").concat(e)}}},i=a(25),s=a(28),n=a.n(s),o=a(1077),c=a(1078),l=Object(i.a)(r,(function(){var t=this,e=t.$createElement,a=t._self._c||e;return a("section",{attrs:{id:t.cardMatrices.id}},[t.cardMatrices.title||t.cardMatrices.ingress||t.cardMatrices.info?a("v-row",{staticClass:"pt-16 px-8 pb-8"},[a("v-col",{attrs:{cols:"12"}},[a("UiMainTitle",{attrs:{title:t.cardMatrices.title,ingress:t.cardMatrices.ingress,info:t.cardMatrices.info}})],1)],1):t._e(),t._v(" "),t._l(t.cardMatrices.subsections,(function(e){return a("section",{key:e.id,attrs:{id:e.id}},[e.subtitle?a("v-row",{staticClass:"px-8 pt-8 pb-8",attrs:{id:e.id+"_subtitle",justify:"center"}},[a("UiMinorTitle",{attrs:{title:e.subtitle}})],1):t._e(),t._v(" "),a("v-row",{staticClass:"pa-0 pb-16 px-4",attrs:{"fill-height":"",justify:"space-around"}},t._l(e.cards,(function(r,i){return a("v-col",{key:t.createCardId(e.id,i),attrs:{id:t.createCardId(e.id,i),cols:"auto"}},[t._t("default",null,{subSectionId:e.id,cardId:t.createCardId(e.id,i),card:r})],2)})),1)],1)}))],2)}),[],!1,null,null,null);e.default=l.exports;n()(l,{UiMainTitle:a(1090).default,UiMinorTitle:a(1099).default}),n()(l,{VCol:o.a,VRow:c.a})},1164:function(t,e,a){"use strict";a(1135)},1165:function(t,e,a){var r=a(12)(!1);r.push([t.i,".card-title{word-break:normal;line-height:1.7rem!important}.gradient-material-header-publication>.v-responsive__content{background:-webkit-gradient(linear,left top,left bottom,from(var(--v-primary-lighten3)),to(var(--v-primary-lighten1)));background:linear-gradient(180deg,var(--v-primary-lighten3),var(--v-primary-lighten1))}.gradient-material-header-poster>.v-responsive__content{background:-webkit-gradient(linear,left top,left bottom,from(var(--v-accent-base)),to(var(--v-anchor-base)));background:linear-gradient(180deg,var(--v-accent-base),var(--v-anchor-base))}.gradient-material-header-presentation>.v-responsive__content{background:-webkit-gradient(linear,left top,left bottom,from(var(--v-secondary-lighten2)),to(var(--v-secondary-base)));background:linear-gradient(180deg,var(--v-secondary-lighten2),var(--v-secondary-base))}.gradient-material-header-workshop>.v-responsive__content{background:-webkit-gradient(linear,left top,left bottom,from(#bdbdbd),to(#757575));background:linear-gradient(180deg,#bdbdbd,#757575)}.gradient-material-header-blog-post>.v-responsive__content{background:-webkit-gradient(linear,left top,left bottom,from(var(--v-error-lighten2)),to(var(--v-error-base)));background:linear-gradient(180deg,var(--v-error-lighten2),var(--v-error-base))}",""]),t.exports=r},1205:function(t,e,a){"use strict";a.r(e);var r={props:{subSectionId:{type:String,required:!0},cardId:{type:String,required:!0},card:{type:Object,default:function(){}}}},i=(a(1164),a(25)),s=a(28),n=a.n(s),o=a(236),c=a(184),l=a(1077),d=a(227),u=a(228),p=a(130),g=a(55),h=a(105),m=a(235),f=a(225),b=a(1078),v=Object(i.a)(r,(function(){var t=this,e=t.$createElement,a=t._self._c||e;return a("v-card",{staticClass:"mx-auto-center",attrs:{width:"540",height:"auto"}},[a("v-row",{staticClass:"ma-0",attrs:{justify:"center","no-gutters":""}},[a("v-responsive",{class:"gradient-material-header-"+t.card.type.toLowerCase().replace(" ","-")+" mx-0 px-0 mb-4",attrs:{height:"40",width:"100%"}},[a("v-overlay",{attrs:{absolute:"",opacity:"0","z-index":"3"}},[a("h5",{staticClass:"text-h5 font-weight-black text-center"},[t._v(t._s(t.card.type))])])],1),t._v(" "),a("v-responsive",{attrs:{height:"162",width:"100%"}},[a("UiZoomableImage",{staticClass:"mx-4 thin-border",attrs:{"image-asset":t.$getImageAssetObject("materials","previews",t.card.previewImg),"max-height":"160px",width:"100%","dialog-buttons":t.card.dialogButtons,"crop-bottom":""}})],1),t._v(" "),a("v-card-title",{staticClass:"text-subtitle-1 text-center font-weight-bold card-title px-4 py-5"},[t._v("\n      "+t._s(t.card.title)+"\n    ")]),t._v(" "),a("v-responsive",{attrs:{height:"48",width:"100%"}},[a("v-card-text",{staticClass:"px-4 py-0"},[t._v("\n        "+t._s(t.card.description)+"\n      ")])],1),t._v(" "),a("v-responsive",{attrs:{height:"64",width:"100%"}},[a("v-list",{staticClass:"transparent pa-0",attrs:{"max-width":"100%"}},t._l(t.card.infoItems,(function(e,r){return a("v-list-item",{key:"c_"+r},[a("v-list-item-icon",{staticClass:"my-5"},[a("v-icon",{attrs:{color:t.$vuetify.theme.dark?"accent":"primary"},domProps:{textContent:t._s(e.icon)}})],1),t._v(" "),a("v-list-item-content",[a("v-list-item-title",{staticClass:"text-wrap",domProps:{textContent:t._s(e.text)}})],1)],1)})),1)],1)],1),t._v(" "),a("v-card-actions",{staticClass:"pa-4 pt-0"},[a("v-col",{staticClass:"pa-0",attrs:{cols:"12","align-self":"end"}},[a("v-row",{class:1==t.card.cardButtons.length?"justify-start":"justify-space-between",attrs:{"no-gutters":""}},t._l(t.card.cardButtons,(function(e,r){return a("v-col",{key:"b_"+t.cardId+"_"+r,staticClass:"pa-0 ma-0",attrs:{cols:"auto","align-self":"end"}},[a("UiStyledButton",{staticClass:"text-weight-light",attrs:{id:"btn_"+t.cardId+"_"+r,href:e.href,to:e.to,text:e.text,icon:e.icon,small:""}}),t._v("\n          "+t._s(e.to)+"\n        ")],1)})),1)],1)],1)],1)}),[],!1,null,null,null);e.default=v.exports;n()(v,{UiZoomableImage:a(1206).default,UiStyledButton:a(1103).default}),n()(v,{VCard:o.a,VCardActions:c.a,VCardText:c.c,VCardTitle:c.d,VCol:l.a,VIcon:d.a,VList:u.a,VListItem:p.a,VListItemContent:g.a,VListItemIcon:h.a,VListItemTitle:g.c,VOverlay:m.a,VResponsive:f.a,VRow:b.a})},1286:function(t,e,a){"use strict";a.r(e);var r=a(68),i={data:function(){return{pageHeader:"Material",pageHeaderImages:[this.$getImageAssetObject("images","tracktypes","LVP.svg"),this.$getImageAssetObject("images","tracktypes","LSF.svg"),this.$getImageAssetObject("images","tracktypes","LF.svg")],cardMatrices:{id:"material",title:"",ingress:"Here you will find a collection of material that showcases work involving FAIRtracks",info:"If you have used FAIRtracks for your work, let us know and we will be happy to mention it here",subsections:[{id:"all-material",cards:[{type:"Publication",previewImg:"f1000-manuscript-2021.png",title:"Recommendations for the FAIRification of genomic track metadata",description:"The FAIRtracks paper has been published by F1000Research. The paper describes particular and general challenges when trying to FAIRify metadata of genomic tracks and discuss how the FAIRtracks ecosystem can help. Read our article to learn about how FAIRness of metadata used for genomic tracks. The article was published on 1 April 2021",infoItems:[{icon:r.e,text:"Published on 1 April 2021"}],cardButtons:[{icon:r.b,text:"Read the full article",href:"https://f1000research.com/articles/10-268/v1"}],dialogButtons:[{icon:r.b,text:"Read the full article",href:"https://f1000research.com/articles/10-268/v1"}]},{type:"Publication",previewImg:"kanduri_colocalisation_2019.png",title:"Colocalization analyses of genomic elements: approaches, recommendations and challenges",description:"The paper discusses different approaches and provide recommendations for performing genomic colocalization analysis, and address the challenges to obtain a robust and biologically meaningful interpretation of genomic region set data.",infoItems:[{icon:r.e,text:"Published on 11 October 2018"}],cardButtons:[{icon:r.b,text:"Read the full article",href:"https://academic.oup.com/bioinformatics/article/35/9/1615/5126923"}],dialogButtons:[{icon:r.b,text:"Read the full article",href:"https://academic.oup.com/bioinformatics/article/35/9/1615/5126923"}]},{type:"Publication",previewImg:"simovski_coloc-stats_2018.png",title:"Coloc-stats: a unified web interface to perform colocalization analysis of genomic features",description:"Coloc-stats provides a unified interface to perform colocalization analysis across various analytical methods and method-specific options (e.g. colocalization measures, resolution, null models). Coloc-stats is freely available at https://hyperbrowser.uio.no/coloc-stats/.",infoItems:[{icon:r.e,text:"Published on 5 June 2018"}],cardButtons:[{icon:r.b,text:"Read the full article",href:"https://academic.oup.com/nar/article/46/W1/W186/5033159"}],dialogButtons:[{icon:r.b,text:"Read the full article",href:"https://academic.oup.com/nar/article/46/W1/W186/5033159"}]},{type:"Publication",previewImg:"simovski_gsuite-hyperbrowser_2017.png",title:"GSuite HyperBrowser: integrative analysis of dataset collections across the genome and epigenome",description:"GSuite HyperBrowser is an open-source software system that represents a first comprehensive solution for integrative analysis of track collections across the genome and epigenome. The software is available at: https://hyperbrowser.uio.no",infoItems:[{icon:r.e,text:"Published on 27 April 2017"}],cardButtons:[{icon:r.b,text:"Read the full article",href:"https://academic.oup.com/gigascience/article/6/7/gix032/3777985"}],dialogButtons:[{icon:r.b,text:"Read the full article",href:"https://academic.oup.com/gigascience/article/6/7/gix032/3777985"}]},{type:"Publication",previewImg:"sandve_genomic-hyperBrowser_2013.png",title:"The Genomic HyperBrowser: an analysis web server for genome-scale data",description:"The Genomic HyperBrowser (http://hyperbrowser.uio.no) is an open-ended web server for the analysis of genomic track data. Through the provision of several highly customizable components for processing and statistical analysis of genomic tracks, the HyperBrowser opens for a range of genomic investigations, related to, e.g., gene regulation, disease association or epigenetic modifications of the genome.",infoItems:[{icon:r.e,text:"Published on 30 April 2013"}],cardButtons:[{icon:r.b,text:"Read the full article",href:"https://academic.oup.com/nar/article/41/W1/W133/1095828"}],dialogButtons:[{icon:r.b,text:"Read the full article",href:"https://academic.oup.com/nar/article/41/W1/W133/1095828"}]},{type:"Publication",previewImg:"gundersen_track-types_2011.png",title:"Identifying elemental genomic track types and representing them uniformly",description:"Add description.",infoItems:[{icon:r.e,text:"Published on 30 December 2011"}],cardButtons:[{icon:r.b,text:"Read the full article",href:"https://bmcbioinformatics.biomedcentral.com/articles/10.1186/1471-2105-12-494"}],dialogButtons:[{icon:r.b,text:"Read the full article",href:"https://bmcbioinformatics.biomedcentral.com/articles/10.1186/1471-2105-12-494"}]},{type:"Publication",previewImg:"sandve_genomic-hyperBrowser_2010.png",title:"The Genomic HyperBrowser: inferential genomics at the sequence level",description:"Seminal study about the Genomic HyperBrowser; the paper provides a collection of generic biological investigations that query pairwise relations between tracks, represented as mathematical objects, along the genome.",infoItems:[{icon:r.e,text:"Published on 23 December 2010"}],cardButtons:[{icon:r.b,text:"Read the full article",href:"https://genomebiology.biomedcentral.com/articles/10.1186/gb-2010-11-12-r121"}],dialogButtons:[{icon:r.b,text:"Read the full article",href:"https://genomebiology.biomedcentral.com/articles/10.1186/gb-2010-11-12-r121"}]},{type:"Publication",previewImg:"BLUEPRINT_Cell_2016.png",title:"The BLUEPRINT Data Analysis Portal",description:"Add description.",infoItems:[{icon:r.e,text:"Published on 15 November 2016"}],cardButtons:[{icon:r.b,text:"Read the full article",href:"https://doi.org/10.1016/j.cels.2016.10.021"}],dialogButtons:[{icon:r.b,text:"Read the full article",href:"https://doi.org/10.1016/j.cels.2016.10.021"}]},{type:"Blog post",previewImg:"f1000-fairtracks-blog-full.png",title:"FAIRtracks featured in F1000 Article",description:"FAIRtracks has been featured in a blog post on the F100Researchjournal web site! The blog post lays out the vision of the FAIRtracks project and makes an appeal to the community for involvement.",infoItems:[{icon:r.e,text:"Published on 1 December 2021"}],cardButtons:[{icon:r.b,text:"Read the blog post",href:"https://blog.f1000.com/2021/12/07/fairtracks/"}],dialogButtons:[{icon:r.b,text:"Open in F1000 blognetwork",href:"https://blog.f1000.com/2021/12/07/fairtracks/"}]},{type:"Poster",previewImg:"Gundersen_Elixir_all_hands_2019_FAIRification.png",title:"FAIRtracks presented at ELIXIR All-Hands 2019",cardButtons:[{icon:r.p,text:"Open the full poster [PDF format]",href:this.$getNonImageAssetPath("materials","posters","Gundersen_Elixir_all_hands_2019_FAIRification.pdf")}],dialogButtons:[{icon:r.p,text:"Open the full poster [PDF format]",href:this.$getNonImageAssetPath("materials","posters","Gundersen_Elixir_all_hands_2019_FAIRification.pdf")}]},{type:"Poster",previewImg:"Kompova_GCC2019_TrackFind.png",title:"TrackFind poster, Galaxy Community Conference 2019",cardButtons:[{icon:r.p,text:"Open the full poster [PDF format]",href:this.$getNonImageAssetPath("materials","posters","Kompova_GCC2019_TrackFind.pdf")}],dialogButtons:[{icon:r.p,text:"Open the full poster [PDF format]",href:this.$getNonImageAssetPath("materials","posters","Kompova_GCC2019_TrackFind.pdf")}]},{type:"Poster",previewImg:"Gundersen_Elixir_all_hands_2018_HyperBrowser.png",title:"The Genomic HyperBrowser, ELIXIR All-Hands 2018",cardButtons:[{icon:r.p,text:"Open the full poster [PDF format]",href:this.$getNonImageAssetPath("materials","posters","Gundersen_Elixir_all_hands_2018_HyperBrowser.pdf")}],dialogButtons:[{icon:r.p,text:"Open the full poster [PDF format]",href:this.$getNonImageAssetPath("materials","posters","Gundersen_Elixir_all_hands_2018_HyperBrowser.pdf")}]},{type:"Poster",previewImg:"Gundersen_GCCBOSC_2018_Coloc_stats.png",title:"Coloc-stats poster, Galaxy Community Conference 2018",cardButtons:[{icon:r.p,text:"Open the full poster [PDF format]",href:this.$getNonImageAssetPath("materials","posters","Gundersen_GCCBOSC_2018_Coloc_stats.pdf")}],dialogButtons:[{icon:r.p,text:"Open the full poster [PDF format]",href:this.$getNonImageAssetPath("materials","posters","Gundersen_GCCBOSC_2018_Coloc_stats.pdf")}]},{type:"Poster",previewImg:"Gundersen_Elixir_all_hands_2017_GTrack.png",title:"The GTrack ecosystem poster, ELIXIR All-Hands 2017",cardButtons:[{icon:r.b,text:"View the published poster",href:"https://doi.org/10.7490/f1000research.1115292.1"}],dialogButtons:[{icon:r.b,text:"View the published poster",href:"https://doi.org/10.7490/f1000research.1115292.1"}]},{type:"Presentation",previewImg:"Gundersen_Elixir_all_hands_2019_FAIRification.png",title:"ELIXIR Webinar on FAIRification of Genomic Tracks",cardButtons:[{icon:r.b,text:"Watch the full webinar",url:"https://elixir-europe.org/events/elixir-webinar-fairification-genomic-tracks"},{icon:r.e,text:"Published on DD MM YYYY"}],dialogButtons:[{icon:r.b,text:"Watch the full webinar",link:"https://elixir-europe.org/events/elixir-webinar-fairification-genomic-tracks"}]}]}]}}},head:function(){return{title:"Material",meta:[]}}},s=a(25),n=Object(s.a)(i,(function(){var t=this,e=t.$createElement,a=t._self._c||e;return a("SectionsPageContainer",{attrs:{"page-header":t.pageHeader,"page-header-images":t.pageHeaderImages,"grey-background":""}},[a("SectionsCardMatrixSubSections",{attrs:{"card-matrices":t.cardMatrices},scopedSlots:t._u([{key:"default",fn:function(t){var e=t.subSectionId,r=t.cardId,i=t.card;return[a("UiMaterialCard",{attrs:{"sub-section-id":e,"card-id":r,card:i}})]}}])})],1)}),[],!1,null,null,null);e.default=n.exports;installComponents(n,{UiMaterialCard:a(1205).default,SectionsCardMatrixSubSections:a(1149).default,SectionsPageContainer:a(1100).default})}}]);