(window.webpackJsonp=window.webpackJsonp||[]).push([[63,32,38,45,48,49,51,54],{1120:function(e,t,a){var i=a(1124);i.__esModule&&(i=i.default),"string"==typeof i&&(i=[[e.i,i,""]]),i.locals&&(e.exports=i.locals);(0,a(13).default)("787c8c40",i,!0,{sourceMap:!1})},1121:function(e,t,a){var i=a(1127);i.__esModule&&(i=i.default),"string"==typeof i&&(i=[[e.i,i,""]]),i.locals&&(e.exports=i.locals);(0,a(13).default)("8ae11210",i,!0,{sourceMap:!1})},1122:function(e,t,a){"use strict";a.r(t);var i={props:{imageAsset:{type:Object,required:!0},altText:{type:String,default:""},styleText:{type:String,default:""}}},r=a(25),s=Object(r.a)(i,(function(){var e=this.$createElement;return(this._self._c||e)("noscript",{inlineTemplate:{render:function(){var e=this,t=e.$createElement;return(e._self._c||t)("div",{staticClass:"fill-height attach-classes",style:'background-image: url("'+e.imageAsset.optimizedImagePath+'"  ); '+e.styleText})},staticRenderFns:[]}})}),[],!1,null,null,null);t.default=s.exports},1123:function(e,t,a){"use strict";a(1120)},1124:function(e,t,a){var i=a(12)(!1);i.push([e.i,".center-background,.slot-center-background .attach-classes{background-position:50%}.cover-background,.slot-cover-background .attach-classes{background-size:cover}.contain-background,.slot-contain-background .attach-classes{background-size:contain;background-color:#fff}.full-size{height:100%;width:100%}.auto-size{height:auto;width:auto}",""]),e.exports=i},1125:function(e,t,a){"use strict";a.r(t);var i={props:{imageAsset:{type:Object,required:!0},height:{type:String,default:null},width:{type:String,default:null},minHeight:{type:String,default:null},alt:{type:String,default:""},contain:{type:Boolean,default:!1}}},r=(a(1123),a(25)),s=a(28),n=a.n(s),o=a(183),c=Object(r.a)(i,(function(){var e=this,t=e.$createElement,a=e._self._c||t;return e.imageAsset.isSvgImage||e.$config.optimizeImages?a("UiSmartImgFileTypesWrapper",{attrs:{"image-asset":e.imageAsset,height:e.height,width:e.width,"min-height":e.minHeight,alt:e.alt,behind:""},scopedSlots:e._u([{key:"svgImgComponent",fn:function(t){var i=t.imageAsset,r=t.styleText;return[a("div",{staticClass:"lazyload fill-height center-background attach-classes hide-with-noscript",class:e.contain?"contain-background":"cover-background",style:r,attrs:{"data-bgset":i.optimizedImagePath,"data-sizes":"auto"}}),e._v(" "),a("UiNoScriptBackgroundImg",{staticClass:"fill-height slot-center-background",class:e.contain?"slot-contain-background":"slot-cover-background",attrs:{"image-asset":i,"style-text":r}})]}},{key:"imgComponent",fn:function(t){var i=t.imageAsset,r=t.styleText;return[a("div",{staticClass:"lazyload fill-height center-background attach-classes hide-with-noscript",class:e.contain?"contain-background":"cover-background",style:r,attrs:{"data-bgset":i.responsiveWebpImage.srcSet+" [type: image/webp] |\n                    "+i.responsiveImage.srcSet,"data-sizes":"auto"}}),e._v(" "),a("UiNoScriptBackgroundImg",{staticClass:"slot-center-background",class:e.contain?"slot-contain-background":"slot-cover-background",attrs:{"image-asset":i,"style-text":r}})]}}],null,!1,3808305052)}):a("v-img",{class:e.contain?"full-size":"auto-size",staticStyle:{"z-index":"-1"},attrs:{src:e.imageAsset.optimizedImagePath,alt:e.alt,contain:e.contain,"min-height":e.minHeight}})}),[],!1,null,null,null);t.default=c.exports;n()(c,{UiNoScriptBackgroundImg:a(1122).default,UiSmartImgFileTypesWrapper:a(447).default}),n()(c,{VImg:o.a})},1126:function(e,t,a){"use strict";a(1121)},1127:function(e,t,a){var i=a(12)(!1);i.push([e.i,".gradient-fill-header>.v-responsive__content{background:linear-gradient(180deg,rgba(var(--v-accent-rgb),.9),rgba(var(--v-anchor-rgb),.9))}.top-level{z-index:2}.banner{max-height:150px}",""]),e.exports=i},1128:function(e,t,a){"use strict";a.r(t);function i(e,t){return function(e){if(Array.isArray(e))return e}(e)||function(e,t){var a=null==e?null:"undefined"!=typeof Symbol&&e[Symbol.iterator]||e["@@iterator"];if(null==a)return;var i,r,s=[],n=!0,o=!1;try{for(a=a.call(e);!(n=(i=a.next()).done)&&(s.push(i.value),!t||s.length!==t);n=!0);}catch(e){o=!0,r=e}finally{try{n||null==a.return||a.return()}finally{if(o)throw r}}return s}(e,t)||function(e,t){if(!e)return;if("string"==typeof e)return r(e,t);var a=Object.prototype.toString.call(e).slice(8,-1);"Object"===a&&e.constructor&&(a=e.constructor.name);if("Map"===a||"Set"===a)return Array.from(e);if("Arguments"===a||/^(?:Ui|I)nt(?:8|16|32)(?:Clamped)?Array$/.test(a))return r(e,t)}(e,t)||function(){throw new TypeError("Invalid attempt to destructure non-iterable instance.\nIn order to be iterable, non-array objects must have a [Symbol.iterator]() method.")}()}function r(e,t){(null==t||t>e.length)&&(t=e.length);for(var a=0,i=new Array(t);a<t;a++)i[a]=e[a];return i}var s={mixins:[{computed:{cssVars:function(){var e={};return this.createRgbVarsForThemes(this.$vuetify.theme.themes,e),e}},methods:{isObject:function(e){return"[object Object]"===Object.prototype.toString.call(e)},hexToRgb:function(e){var t=0,a=0,i=0;return 4===e.length?(t="0x"+e[1]+e[1],a="0x"+e[2]+e[2],i="0x"+e[3]+e[3]):7===e.length&&(t="0x"+e[1]+e[2],a="0x"+e[3]+e[4],i="0x"+e[5]+e[6]),"".concat(+t,", ").concat(+a,", ").concat(+i)},generateRgbVar:function(e,t,a){var i=this.hexToRgb(t);i.includes("NaN")||(a["--v-".concat(e,"-rgb")]=i)},createRgbVarsForThemes:function(e,t){if(void 0!==e)for(var a=0,r=Object.values(e);a<r.length;a++)for(var s=r[a],n=0,o=Object.entries(s);n<o.length;n++){var c=i(o[n],2),l=c[0],u=c[1];if(this.isObject(u))for(var d=0,p=Object.entries(u);d<p.length;d++){var h=i(p[d],2),g=h[0],f=h[1];this.generateRgbVar("".concat(l,"-").concat(g),f,t)}else this.generateRgbVar(l,u,t)}}}}],props:{pageHeader:{type:String,required:!0},pageHeaderImages:{type:Array,default:function(){return[]}}}},n=(a(1126),a(25)),o=a(28),c=a.n(o),l=a(1109),u=a(240),d=a(230),p=a(1110),h=Object(n.a)(s,(function(){var e=this,t=e.$createElement,a=e._self._c||t;return a("v-responsive",{staticClass:"gradient-fill-header",style:e.cssVars,attrs:{"max-height":"125px","min-height":"75px"}},[a("v-responsive",{staticClass:"mx-auto",attrs:{"aspect-ratio":567/56.3,"max-width":"1258.9"}},[a("v-row",{staticClass:"ma-0",attrs:{"no-gutters":""}},e._l(e.pageHeaderImages,(function(t,i){return a("v-col",{key:i,attrs:{cols:"4"}},[a("v-row",{attrs:{"no-gutters":"",justify:"center"}},[a("v-responsive",{staticClass:"gradient-fill-header top-level",style:e.cssVars,attrs:{width:"33%",height:"100%","aspect-ratio":189/56.3,"max-height":"150px","min-height":"75px"}},[a("UiSmartBackgroundImg",{attrs:{height:"56.3",width:"189","min-height":"75","image-asset":t,contain:""}})],1)],1)],1)})),1)],1),e._v(" "),a("v-overlay",{directives:[{name:"show",rawName:"v-show",value:e.$vuetify.theme.dark,expression:"$vuetify.theme.dark"}],staticClass:"black",staticStyle:{opacity:"0.3"},attrs:{absolute:"","z-index":"3"}}),e._v(" "),a("v-overlay",{attrs:{absolute:"",opacity:"0","z-index":"3"}},[a("h1",{staticClass:"text-md-h2 text-sm-h3 text-h4 font-weight-black text-center"},[e._v("\n      "+e._s(e.pageHeader)+"\n    ")])])],1)}),[],!1,null,null,null);t.default=h.exports;c()(h,{UiSmartBackgroundImg:a(1125).default}),c()(h,{VCol:l.a,VOverlay:u.a,VResponsive:d.a,VRow:p.a})},1129:function(e,t,a){"use strict";a.r(t);var i={props:{pageHeader:{type:String,default:""},pageHeaderImages:{type:Array,default:function(){return[]}},greyBackground:{type:Boolean,default:!1},sectionId:{type:String,default:null},setMargins:{type:Boolean,default:!1}}},r=a(25),s=a(28),n=a.n(s),o=a(1119),c=Object(r.a)(i,(function(){var e=this,t=e.$createElement,a=e._self._c||t;return a("section",{class:e.greyBackground?e.$vuetify.theme.dark?"primary":"grey lighten-4":null,attrs:{id:e.sectionId}},[a("UiPageHeaderBanner",{directives:[{name:"show",rawName:"v-show",value:e.pageHeader,expression:"pageHeader"}],staticClass:"white",attrs:{"page-header":e.pageHeader,"page-header-images":e.pageHeaderImages}}),e._v(" "),a("v-container",{class:e.setMargins?"pa-md-8 pa-4":"pa-0",staticStyle:{"max-width":"1700px"},attrs:{fluid:""}},[e._t("default")],2)],1)}),[],!1,null,null,null);t.default=c.exports;n()(c,{UiPageHeaderBanner:a(1128).default}),n()(c,{VContainer:o.a})},1130:function(e,t,a){"use strict";a.r(t);var i={props:{title:{type:String,default:""}}},r=a(25),s=Object(r.a)(i,(function(){var e=this,t=e.$createElement;return(e._self._c||t)("h3",{staticClass:"text-h4 font-weight-bold mb-5"},[e._v(e._s(e.title))])}),[],!1,null,null,null);t.default=s.exports},1133:function(e,t,a){"use strict";a.r(t);var i=a(1134),r={props:{title:{type:String,default:""},subtitle:{type:String,default:""},ingress:{type:String,default:""},info:{type:String,default:""},scaleDownAtSm:{type:Boolean,default:!1}},methods:{compileMarkdown:function(e){return i.marked.parseInline(e,[])}}},s=a(25),n=Object(s.a)(r,(function(){var e=this,t=e.$createElement,a=e._self._c||t;return a("div",[a("h2",{directives:[{name:"show",rawName:"v-show",value:e.title,expression:"title"}],staticClass:"text-h4 text-center font-weight-black mt-4 mb-8",class:e.scaleDownAtSm?"text-sm-h3":"text-md-h3",domProps:{textContent:e._s(e.title)}}),e._v(" "),a("h3",{directives:[{name:"show",rawName:"v-show",value:e.subtitle,expression:"subtitle"}],staticClass:"text-h6 font-weight-medium font-italic text-center mb-8",class:e.scaleDownAtSm?"text-sm-h5":"text-md-h5",domProps:{textContent:e._s(e.subtitle)}}),e._v(" "),e.ingress?a("h4",{staticClass:"text-h6 text-center mb-4",class:e.subtitle?"font-weight-light":"font-weight-medium font-italic",domProps:{innerHTML:e._s(e.compileMarkdown(e.ingress))}}):a("h4",{staticClass:"text-h6 text-center mb-4",class:e.subtitle?"font-weight-light":"font-weight-medium font-italic"},[e._t("ingress")],2),e._v(" "),e.info?a("p",{staticClass:"text-subtitle-1 font-weight-light text-center mb-4",domProps:{innerHTML:e._s(e.compileMarkdown(e.info))}}):a("p",{staticClass:"text-subtitle-1 font-weight-light text-center mb-4"},[e._t("info")],2)])}),[],!1,null,null,null);t.default=n.exports},1194:function(e,t,a){"use strict";a.r(t);var i={props:{cardMatrices:{type:Object,default:function(){}}},methods:{createCardId:function(e,t){return"".concat(e,"_c_").concat(t)}}},r=a(25),s=a(28),n=a.n(s),o=a(1109),c=a(1110),l=Object(r.a)(i,(function(){var e=this,t=e.$createElement,a=e._self._c||t;return a("section",{attrs:{id:e.cardMatrices.id}},[e.cardMatrices.title||e.cardMatrices.ingress||e.cardMatrices.info?a("v-row",{staticClass:"pt-16 px-8 pb-8"},[a("v-col",{attrs:{cols:"12"}},[a("UiMainTitle",{attrs:{title:e.cardMatrices.title,ingress:e.cardMatrices.ingress,info:e.cardMatrices.info}})],1)],1):e._e(),e._v(" "),e._l(e.cardMatrices.subsections,(function(t){return a("section",{key:t.id,attrs:{id:t.id}},[t.subtitle?a("v-row",{staticClass:"px-8 pt-8 pb-8",attrs:{id:t.id+"_subtitle",justify:"center"}},[a("UiMinorTitle",{attrs:{title:t.subtitle}})],1):e._e(),e._v(" "),a("v-row",{staticClass:"pa-0 pb-16 px-4",attrs:{"fill-height":"",justify:"space-around"}},e._l(t.cards,(function(i,r){return a("v-col",{key:e.createCardId(t.id,r),attrs:{id:e.createCardId(t.id,r),cols:"auto"}},[e._t("default",null,{subSectionId:t.id,cardId:e.createCardId(t.id,r),card:i})],2)})),1)],1)}))],2)}),[],!1,null,null,null);t.default=l.exports;n()(l,{UiMainTitle:a(1133).default,UiMinorTitle:a(1130).default}),n()(l,{VCol:o.a,VRow:c.a})},1329:function(e,t,a){"use strict";a.r(t);var i=a(68),r={data:function(){return{pageHeader:"Material",pageHeaderImages:[this.$getImageAssetObject("images","tracktypes","LVP.svg"),this.$getImageAssetObject("images","tracktypes","LSF.svg"),this.$getImageAssetObject("images","tracktypes","LF.svg")],cardMatrices:{id:"material",title:"",ingress:"Here you will find a collection of material that showcases work involving FAIRtracks",info:"If you have used FAIRtracks for your work, let us know and we will be happy to mention it here",subsections:[{id:"all-material",cards:[{type:"Publication",previewImg:"f1000-manuscript-2021.png",title:"Recommendations for the FAIRification of genomic track metadata",description:"The FAIRtracks paper has been published by F1000Research. The paper describes particular and general challenges when trying to FAIRify metadata of genomic tracks and discuss how the FAIRtracks ecosystem can help. Read our article to learn about how FAIRness of metadata used for genomic tracks. The article was published on 1 April 2021",infoItems:[{icon:i.f,text:"Published on 1 April 2021"}],cardButtons:[{icon:i.b,text:"Read the full article",href:"https://f1000research.com/articles/10-268/v1"}],dialogButtons:[{icon:i.b,text:"Read the full article",href:"https://f1000research.com/articles/10-268/v1"}]},{type:"Publication",previewImg:"kanduri_colocalisation_2019.png",title:"Colocalization analyses of genomic elements: approaches, recommendations and challenges",description:"The paper discusses different approaches and provide recommendations for performing genomic colocalization analysis, and address the challenges to obtain a robust and biologically meaningful interpretation of genomic region set data.",infoItems:[{icon:i.f,text:"Published on 11 October 2018"}],cardButtons:[{icon:i.b,text:"Read the full article",href:"https://academic.oup.com/bioinformatics/article/35/9/1615/5126923"}],dialogButtons:[{icon:i.b,text:"Read the full article",href:"https://academic.oup.com/bioinformatics/article/35/9/1615/5126923"}]},{type:"Publication",previewImg:"simovski_coloc-stats_2018.png",title:"Coloc-stats: a unified web interface to perform colocalization analysis of genomic features",description:"Coloc-stats provides a unified interface to perform colocalization analysis across various analytical methods and method-specific options (e.g. colocalization measures, resolution, null models). Coloc-stats is freely available at https://hyperbrowser.uio.no/coloc-stats/.",infoItems:[{icon:i.f,text:"Published on 5 June 2018"}],cardButtons:[{icon:i.b,text:"Read the full article",href:"https://academic.oup.com/nar/article/46/W1/W186/5033159"}],dialogButtons:[{icon:i.b,text:"Read the full article",href:"https://academic.oup.com/nar/article/46/W1/W186/5033159"}]},{type:"Publication",previewImg:"simovski_gsuite-hyperbrowser_2017.png",title:"GSuite HyperBrowser: integrative analysis of dataset collections across the genome and epigenome",description:"GSuite HyperBrowser is an open-source software system that represents a first comprehensive solution for integrative analysis of track collections across the genome and epigenome. The software is available at: https://hyperbrowser.uio.no",infoItems:[{icon:i.f,text:"Published on 27 April 2017"}],cardButtons:[{icon:i.b,text:"Read the full article",href:"https://academic.oup.com/gigascience/article/6/7/gix032/3777985"}],dialogButtons:[{icon:i.b,text:"Read the full article",href:"https://academic.oup.com/gigascience/article/6/7/gix032/3777985"}]},{type:"Publication",previewImg:"sandve_genomic-hyperBrowser_2013.png",title:"The Genomic HyperBrowser: an analysis web server for genome-scale data",description:"The Genomic HyperBrowser (http://hyperbrowser.uio.no) is an open-ended web server for the analysis of genomic track data. Through the provision of several highly customizable components for processing and statistical analysis of genomic tracks, the HyperBrowser opens for a range of genomic investigations, related to, e.g., gene regulation, disease association or epigenetic modifications of the genome.",infoItems:[{icon:i.f,text:"Published on 30 April 2013"}],cardButtons:[{icon:i.b,text:"Read the full article",href:"https://academic.oup.com/nar/article/41/W1/W133/1095828"}],dialogButtons:[{icon:i.b,text:"Read the full article",href:"https://academic.oup.com/nar/article/41/W1/W133/1095828"}]},{type:"Publication",previewImg:"gundersen_track-types_2011.png",title:"Identifying elemental genomic track types and representing them uniformly",description:"Add description.",infoItems:[{icon:i.f,text:"Published on 30 December 2011"}],cardButtons:[{icon:i.b,text:"Read the full article",href:"https://bmcbioinformatics.biomedcentral.com/articles/10.1186/1471-2105-12-494"}],dialogButtons:[{icon:i.b,text:"Read the full article",href:"https://bmcbioinformatics.biomedcentral.com/articles/10.1186/1471-2105-12-494"}]},{type:"Publication",previewImg:"sandve_genomic-hyperBrowser_2010.png",title:"The Genomic HyperBrowser: inferential genomics at the sequence level",description:"Seminal study about the Genomic HyperBrowser; the paper provides a collection of generic biological investigations that query pairwise relations between tracks, represented as mathematical objects, along the genome.",infoItems:[{icon:i.f,text:"Published on 23 December 2010"}],cardButtons:[{icon:i.b,text:"Read the full article",href:"https://genomebiology.biomedcentral.com/articles/10.1186/gb-2010-11-12-r121"}],dialogButtons:[{icon:i.b,text:"Read the full article",href:"https://genomebiology.biomedcentral.com/articles/10.1186/gb-2010-11-12-r121"}]},{type:"Publication",previewImg:"BLUEPRINT_Cell_2016.png",title:"The BLUEPRINT Data Analysis Portal",description:"Add description.",infoItems:[{icon:i.f,text:"Published on 15 November 2016"}],cardButtons:[{icon:i.b,text:"Read the full article",href:"https://doi.org/10.1016/j.cels.2016.10.021"}],dialogButtons:[{icon:i.b,text:"Read the full article",href:"https://doi.org/10.1016/j.cels.2016.10.021"}]},{type:"Blog post",previewImg:"f1000-fairtracks-blog-full.png",title:"FAIRtracks featured in F1000 Article",description:"FAIRtracks has been featured in a blog post on the F100Researchjournal web site! The blog post lays out the vision of the FAIRtracks project and makes an appeal to the community for involvement.",infoItems:[{icon:i.f,text:"Published on 1 December 2021"}],cardButtons:[{icon:i.b,text:"Read the blog post",href:"https://blog.f1000.com/2021/12/07/fairtracks/"}],dialogButtons:[{icon:i.b,text:"Open in F1000 blognetwork",href:"https://blog.f1000.com/2021/12/07/fairtracks/"}]},{type:"Poster",previewImg:"Gundersen_Elixir_all_hands_2019_FAIRification.png",title:"FAIRtracks presented at ELIXIR All-Hands 2019",cardButtons:[{icon:i.q,text:"Open the full poster [PDF format]",href:this.$getNonImageAssetPath("materials","posters","Gundersen_Elixir_all_hands_2019_FAIRification.pdf")}],dialogButtons:[{icon:i.q,text:"Open the full poster [PDF format]",href:this.$getNonImageAssetPath("materials","posters","Gundersen_Elixir_all_hands_2019_FAIRification.pdf")}]},{type:"Poster",previewImg:"Kompova_GCC2019_TrackFind.png",title:"TrackFind poster, Galaxy Community Conference 2019",cardButtons:[{icon:i.q,text:"Open the full poster [PDF format]",href:this.$getNonImageAssetPath("materials","posters","Kompova_GCC2019_TrackFind.pdf")}],dialogButtons:[{icon:i.q,text:"Open the full poster [PDF format]",href:this.$getNonImageAssetPath("materials","posters","Kompova_GCC2019_TrackFind.pdf")}]},{type:"Poster",previewImg:"Gundersen_Elixir_all_hands_2018_HyperBrowser.png",title:"The Genomic HyperBrowser, ELIXIR All-Hands 2018",cardButtons:[{icon:i.q,text:"Open the full poster [PDF format]",href:this.$getNonImageAssetPath("materials","posters","Gundersen_Elixir_all_hands_2018_HyperBrowser.pdf")}],dialogButtons:[{icon:i.q,text:"Open the full poster [PDF format]",href:this.$getNonImageAssetPath("materials","posters","Gundersen_Elixir_all_hands_2018_HyperBrowser.pdf")}]},{type:"Poster",previewImg:"Gundersen_GCCBOSC_2018_Coloc_stats.png",title:"Coloc-stats poster, Galaxy Community Conference 2018",cardButtons:[{icon:i.q,text:"Open the full poster [PDF format]",href:this.$getNonImageAssetPath("materials","posters","Gundersen_GCCBOSC_2018_Coloc_stats.pdf")}],dialogButtons:[{icon:i.q,text:"Open the full poster [PDF format]",href:this.$getNonImageAssetPath("materials","posters","Gundersen_GCCBOSC_2018_Coloc_stats.pdf")}]},{type:"Poster",previewImg:"Gundersen_Elixir_all_hands_2017_GTrack.png",title:"The GTrack ecosystem poster, ELIXIR All-Hands 2017",cardButtons:[{icon:i.b,text:"View the published poster",href:"https://doi.org/10.7490/f1000research.1115292.1"}],dialogButtons:[{icon:i.b,text:"View the published poster",href:"https://doi.org/10.7490/f1000research.1115292.1"}]},{type:"Presentation",previewImg:"Gundersen_Elixir_all_hands_2019_FAIRification.png",title:"ELIXIR Webinar on FAIRification of Genomic Tracks",cardButtons:[{icon:i.b,text:"Watch the full webinar",url:"https://elixir-europe.org/events/elixir-webinar-fairification-genomic-tracks"},{icon:i.f,text:"Published on DD MM YYYY"}],dialogButtons:[{icon:i.b,text:"Watch the full webinar",link:"https://elixir-europe.org/events/elixir-webinar-fairification-genomic-tracks"}]}]}]}}},head:function(){return{title:"Material",meta:[]}}},s=a(25),n=Object(s.a)(r,(function(){var e=this,t=e.$createElement,a=e._self._c||t;return a("SectionsPageContainer",{attrs:{"page-header":e.pageHeader,"page-header-images":e.pageHeaderImages,"grey-background":""}},[a("SectionsCardMatrixSubSections",{attrs:{"card-matrices":e.cardMatrices},scopedSlots:e._u([{key:"default",fn:function(e){var t=e.subSectionId,i=e.cardId,r=e.card;return[a("UiMaterialCard",{attrs:{"sub-section-id":t,"card-id":i,card:r}})]}}])})],1)}),[],!1,null,null,null);t.default=n.exports;installComponents(n,{SectionsCardMatrixSubSections:a(1194).default,SectionsPageContainer:a(1129).default})}}]);