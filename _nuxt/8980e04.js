(window.webpackJsonp=window.webpackJsonp||[]).push([[64,36,50,52,55],{1102:function(e,t,a){var o=a(1107);o.__esModule&&(o=o.default),"string"==typeof o&&(o=[[e.i,o,""]]),o.locals&&(e.exports=o.locals);(0,a(31).default)("5ca67044",o,!0,{sourceMap:!1})},1103:function(e,t,a){var o=a(1110);o.__esModule&&(o=o.default),"string"==typeof o&&(o=[[e.i,o,""]]),o.locals&&(e.exports=o.locals);(0,a(31).default)("8d97ad88",o,!0,{sourceMap:!1})},1104:function(e,t,a){"use strict";a.r(t);a(33);var o={props:{imageAsset:{type:Object,required:!0},altText:{type:String,default:""},styleText:{type:String,default:""}},data:function(){return{componentId:"ui-no-script-background-img"}}},r=a(60),i=Object(r.a)(o,(function(){return(0,this._self._c)("noscript",{inlineTemplate:{render:function(){var e=this;return(0,e._self._c)("div",{staticClass:"fill-height attach-classes",style:'background-image: url("'.concat(e.imageAsset.optimizedImagePath,'"); ').concat(e.styleText)})},staticRenderFns:[]}})}),[],!1,null,null,null);t.default=i.exports},1106:function(e,t,a){"use strict";a(1102)},1107:function(e,t,a){var o=a(30)(!1);o.push([e.i,".center-background,.slot-center-background .attach-classes{background-position:50%}.cover-background,.slot-cover-background .attach-classes{background-size:cover}.contain-background,.slot-contain-background .attach-classes{background-size:contain;background-color:#fff}.full-size{height:100%;width:100%}.auto-size{height:auto;width:auto}",""]),e.exports=o},1108:function(e,t,a){"use strict";a.r(t);var o=a(315),r=(a(33),a(69),{props:{imageAsset:{type:Object,required:!0},imgHeight:{type:String,default:null},imgWidth:{type:String,default:null},alt:{type:String,default:""},contain:{type:Boolean,default:!1},notResponsive:{type:Boolean,default:!1}},data:function(){return{componentId:"ui-smart-background-img"}},methods:{getDynamicClasses:function(e,t){var a=[];return e?a.push("contain-background"):a.push("cover-background"),t&&a.push("lazyload"),a.join(" ")}}}),i=(a(1106),a(60)),n=Object(i.a)(r,(function(){var e=this,t=e._self._c;return e.imageAsset.isSvgImage||e.$config.optimizeImages?t("UiSmartImgFileTypesWrapper",{attrs:{"image-asset":e.imageAsset,"img-height":e.imgHeight,"img-width":e.imgWidth,alt:e.alt,behind:"","not-responsive":e.notResponsive},scopedSlots:e._u([{key:"nonRespImgComponent",fn:function(a){var o=a.imageAsset,r=a.styleText,i=a.lazyLoad;return[t("div",{staticClass:"fill-height center-background attach-classes hide-with-noscript",class:e.getDynamicClasses(e.contain,i),style:i?r:'background-image: url("'.concat(e.imageAsset.optimizedImagePath,'"); ').concat(r),attrs:{"data-bgset":i?o.optimizedImagePath:null}}),e._v(" "),t("UiNoScriptBackgroundImg",{staticClass:"fill-height slot-center-background",class:e.contain?"slot-contain-background":"slot-cover-background",attrs:{"image-asset":o,"style-text":r}})]}},{key:"respImgComponent",fn:function(a){var o=a.imageAsset,r=a.styleText;return[t("div",{staticClass:"lazyload fill-height center-background attach-classes hide-with-noscript",class:e.contain?"contain-background":"cover-background",style:r,attrs:{"data-bgset":"".concat(o.responsiveWebpImage.srcSet," [type: image/webp] |\n                    ").concat(o.responsiveImage.srcSet),"data-sizes":"auto"}}),e._v(" "),t("UiNoScriptBackgroundImg",{staticClass:"slot-center-background",class:e.contain?"slot-contain-background":"slot-cover-background",attrs:{"image-asset":o,"style-text":r}})]}}],null,!1,615995449)}):t(o.a,{class:e.contain?"full-size":"auto-size",staticStyle:{"z-index":"-1"},attrs:{src:e.imageAsset.optimizedImagePath,alt:e.alt,contain:e.contain}})}),[],!1,null,null,null);t.default=n.exports;installComponents(n,{UiNoScriptBackgroundImg:a(1104).default,UiSmartImgFileTypesWrapper:a(587).default})},1109:function(e,t,a){"use strict";a(1103)},1110:function(e,t,a){var o=a(30)(!1);o.push([e.i,".gradient-fill-header>.v-responsive__content{background:-webkit-linear-gradient(top,rgba(var(--v-accent-rgb),.9),rgba(var(--v-anchor-rgb),.9));background:linear-gradient(180deg,rgba(var(--v-accent-rgb),.9),rgba(var(--v-anchor-rgb),.9))}.top-level{z-index:2}",""]),e.exports=o},1112:function(e,t,a){"use strict";a.r(t);var o=a(1089),r=a(365),i=a(364),n=a(1088),s=a(36),c=(a(4),a(33),a(58),a(73),a(161),a(194),{mixins:[{computed:{cssVars:function(){var e={};return this.createRgbVarsForThemes(this.$vuetify.theme.themes,e),e}},methods:{isObject:function(e){return"[object Object]"===Object.prototype.toString.call(e)},hexToRgb:function(e){var t=0,a=0,o=0;return 4===e.length?(t="0x"+e[1]+e[1],a="0x"+e[2]+e[2],o="0x"+e[3]+e[3]):7===e.length&&(t="0x"+e[1]+e[2],a="0x"+e[3]+e[4],o="0x"+e[5]+e[6]),"".concat(+t,", ").concat(+a,", ").concat(+o)},generateRgbVar:function(e,t,a){var o=this.hexToRgb(t);o.includes("NaN")||(a["--v-".concat(e,"-rgb")]=o)},createRgbVarsForThemes:function(e,t){if(void 0!==e)for(var a=0,o=Object.values(e);a<o.length;a++)for(var r=o[a],i=0,n=Object.entries(r);i<n.length;i++){var c=Object(s.a)(n[i],2),l=c[0],d=c[1];if(this.isObject(d))for(var p=0,g=Object.entries(d);p<g.length;p++){var u=Object(s.a)(g[p],2),h=u[0],m=u[1];this.generateRgbVar("".concat(l,"-").concat(h),m,t)}else this.generateRgbVar(l,d,t)}}}}],props:{pageHeader:{type:String,required:!0},pageHeaderImages:{type:Array,default:function(){return[]}}},data:function(){return{componentId:"ui-page-header-banner"}}}),l=(a(1109),a(60)),d=Object(l.a)(c,(function(){var e=this,t=e._self._c;return t(i.a,{staticClass:"gradient-fill-header",style:e.cssVars,attrs:{"max-height":"125px","min-height":"75px"}},[t(i.a,{staticClass:"mx-auto",attrs:{"aspect-ratio":567/56.3,"max-width":"1258.9"}},[t(n.a,{staticClass:"ma-0",attrs:{"no-gutters":""}},e._l(e.pageHeaderImages,(function(a,r){return t(o.a,{key:r,attrs:{cols:"4"}},[t(n.a,{attrs:{"no-gutters":"",justify:"center"}},[t(i.a,{staticClass:"gradient-fill-header top-level",style:e.cssVars,attrs:{width:"33%",height:"100%","aspect-ratio":189/56.3,"max-height":"150px","min-height":"75px"}},[t("UiSmartBackgroundImg",{attrs:{"img-height":"56.3","img-width":"189","image-asset":a,contain:"","not-responsive":""}})],1)],1)],1)})),1)],1),e._v(" "),t(r.a,{directives:[{name:"show",rawName:"v-show",value:e.$vuetify.theme.dark,expression:"$vuetify.theme.dark"}],staticClass:"black",staticStyle:{opacity:"0.3"},attrs:{absolute:"","z-index":"3"}}),e._v(" "),t(r.a,{attrs:{absolute:"",opacity:"0","z-index":"3"}},[t("h1",{staticClass:"text-md-h2 text-sm-h4 text-h5 font-weight-black text-center"},[e._v("\n      "+e._s(e.pageHeader)+"\n    ")])])],1)}),[],!1,null,null,null);t.default=d.exports;installComponents(d,{UiSmartBackgroundImg:a(1108).default})},1114:function(e,t,a){"use strict";a.r(t);var o=a(1100),r={props:{pageHeader:{type:String,default:""},pageHeaderImages:{type:Array,default:function(){return[]}},greyBackground:{type:Boolean,default:!1},sectionId:{type:String,default:null},setMargins:{type:Boolean,default:!1}},data:function(){return{componentId:"sections-page-container"}}},i=a(60),n=Object(i.a)(r,(function(){var e=this,t=e._self._c;return t("section",{class:e.greyBackground?e.$vuetify.theme.dark?"primary":"grey lighten-4":null,attrs:{id:e.sectionId}},[t("UiPageHeaderBanner",{directives:[{name:"show",rawName:"v-show",value:e.pageHeader,expression:"pageHeader"}],staticClass:"white",attrs:{"page-header":e.pageHeader,"page-header-images":e.pageHeaderImages}}),e._v(" "),t(o.a,{class:e.setMargins?"pa-md-8 pa-4":"pa-0",staticStyle:{"max-width":"1700px"},attrs:{fluid:""}},[e._t("default")],2)],1)}),[],!1,null,null,null);t.default=n.exports;installComponents(n,{UiPageHeaderBanner:a(1112).default})},1321:function(e,t,a){"use strict";a.r(t);var o={data:function(){return{pageHeader:"Material",pageHeaderImages:[this.$getImageAssetObject("images","tracktypes","LVP.svg"),this.$getImageAssetObject("images","tracktypes","LSF.svg"),this.$getImageAssetObject("images","tracktypes","LF.svg")],cardMatrices:{id:"material",title:"",ingress:"Here you will find a collection of material that showcases work involving FAIRtracks",info:"If you have used FAIRtracks for your work, let us know and we will be happy to mention it here",subsections:[{id:"all-material",cards:[{type:"Publication",previewImg:"f1000-manuscript-2021.png",title:"Recommendations for the FAIRification of genomic track metadata",description:"The FAIRtracks paper has been published by F1000Research. The paper describes particular and general challenges when trying to FAIRify metadata of genomic tracks and discuss how the FAIRtracks ecosystem can help. Read our article to learn about how FAIRness of metadata used for genomic tracks. The article was published on 1 April 2021",infoItems:[{icon:"calendar-check",text:"Published on 1 April 2021"}],cardButtons:[{icon:"arrow-top-right-bold-box",text:"Read the full article",href:"https://f1000research.com/articles/10-268/v1"}],dialogButtons:[{icon:"arrow-top-right-bold-box",text:"Read the full article",href:"https://f1000research.com/articles/10-268/v1"}]},{type:"Publication",previewImg:"kanduri_colocalisation_2019.png",title:"Colocalization analyses of genomic elements: approaches, recommendations and challenges",description:"The paper discusses different approaches and provide recommendations for performing genomic colocalization analysis, and address the challenges to obtain a robust and biologically meaningful interpretation of genomic region set data.",infoItems:[{icon:"calendar-check",text:"Published on 11 October 2018"}],cardButtons:[{icon:"arrow-top-right-bold-box",text:"Read the full article",href:"https://academic.oup.com/bioinformatics/article/35/9/1615/5126923"}],dialogButtons:[{icon:"arrow-top-right-bold-box",text:"Read the full article",href:"https://academic.oup.com/bioinformatics/article/35/9/1615/5126923"}]},{type:"Publication",previewImg:"simovski_coloc-stats_2018.png",title:"Coloc-stats: a unified web interface to perform colocalization analysis of genomic features",description:"Coloc-stats provides a unified interface to perform colocalization analysis across various analytical methods and method-specific options (e.g. colocalization measures, resolution, null models). Coloc-stats is freely available at https://hyperbrowser.uio.no/coloc-stats/.",infoItems:[{icon:"calendar-check",text:"Published on 5 June 2018"}],cardButtons:[{icon:"arrow-top-right-bold-box",text:"Read the full article",href:"https://academic.oup.com/nar/article/46/W1/W186/5033159"}],dialogButtons:[{icon:"arrow-top-right-bold-box",text:"Read the full article",href:"https://academic.oup.com/nar/article/46/W1/W186/5033159"}]},{type:"Publication",previewImg:"simovski_gsuite-hyperbrowser_2017.png",title:"GSuite HyperBrowser: integrative analysis of dataset collections across the genome and epigenome",description:"GSuite HyperBrowser is an open-source software system that represents a first comprehensive solution for integrative analysis of track collections across the genome and epigenome. The software is available at: https://hyperbrowser.uio.no",infoItems:[{icon:"calendar-check",text:"Published on 27 April 2017"}],cardButtons:[{icon:"arrow-top-right-bold-box",text:"Read the full article",href:"https://academic.oup.com/gigascience/article/6/7/gix032/3777985"}],dialogButtons:[{icon:"arrow-top-right-bold-box",text:"Read the full article",href:"https://academic.oup.com/gigascience/article/6/7/gix032/3777985"}]},{type:"Publication",previewImg:"sandve_genomic-hyperBrowser_2013.png",title:"The Genomic HyperBrowser: an analysis web server for genome-scale data",description:"The Genomic HyperBrowser (http://hyperbrowser.uio.no) is an open-ended web server for the analysis of genomic track data. Through the provision of several highly customizable components for processing and statistical analysis of genomic tracks, the HyperBrowser opens for a range of genomic investigations, related to, e.g., gene regulation, disease association or epigenetic modifications of the genome.",infoItems:[{icon:"calendar-check",text:"Published on 30 April 2013"}],cardButtons:[{icon:"arrow-top-right-bold-box",text:"Read the full article",href:"https://academic.oup.com/nar/article/41/W1/W133/1095828"}],dialogButtons:[{icon:"arrow-top-right-bold-box",text:"Read the full article",href:"https://academic.oup.com/nar/article/41/W1/W133/1095828"}]},{type:"Publication",previewImg:"gundersen_track-types_2011.png",title:"Identifying elemental genomic track types and representing them uniformly",description:"Add description.",infoItems:[{icon:"calendar-check",text:"Published on 30 December 2011"}],cardButtons:[{icon:"arrow-top-right-bold-box",text:"Read the full article",href:"https://bmcbioinformatics.biomedcentral.com/articles/10.1186/1471-2105-12-494"}],dialogButtons:[{icon:"arrow-top-right-bold-box",text:"Read the full article",href:"https://bmcbioinformatics.biomedcentral.com/articles/10.1186/1471-2105-12-494"}]},{type:"Publication",previewImg:"sandve_genomic-hyperBrowser_2010.png",title:"The Genomic HyperBrowser: inferential genomics at the sequence level",description:"Seminal study about the Genomic HyperBrowser; the paper provides a collection of generic biological investigations that query pairwise relations between tracks, represented as mathematical objects, along the genome.",infoItems:[{icon:"calendar-check",text:"Published on 23 December 2010"}],cardButtons:[{icon:"arrow-top-right-bold-box",text:"Read the full article",href:"https://genomebiology.biomedcentral.com/articles/10.1186/gb-2010-11-12-r121"}],dialogButtons:[{icon:"arrow-top-right-bold-box",text:"Read the full article",href:"https://genomebiology.biomedcentral.com/articles/10.1186/gb-2010-11-12-r121"}]},{type:"Publication",previewImg:"BLUEPRINT_Cell_2016.png",title:"The BLUEPRINT Data Analysis Portal",description:"Add description.",infoItems:[{icon:"calendar-check",text:"Published on 15 November 2016"}],cardButtons:[{icon:"arrow-top-right-bold-box",text:"Read the full article",href:"https://doi.org/10.1016/j.cels.2016.10.021"}],dialogButtons:[{icon:"arrow-top-right-bold-box",text:"Read the full article",href:"https://doi.org/10.1016/j.cels.2016.10.021"}]},{type:"Blog post",previewImg:"f1000-fairtracks-blog-full.png",title:"FAIRtracks featured in F1000 Article",description:"FAIRtracks has been featured in a blog post on the F100Researchjournal web site! The blog post lays out the vision of the FAIRtracks project and makes an appeal to the community for involvement.",infoItems:[{icon:"calendar-check",text:"Published on 1 December 2021"}],cardButtons:[{icon:"arrow-top-right-bold-box",text:"Read the blog post",href:"https://blog.f1000.com/2021/12/07/fairtracks/"}],dialogButtons:[{icon:"arrow-top-right-bold-box",text:"Open in F1000 blognetwork",href:"https://blog.f1000.com/2021/12/07/fairtracks/"}]},{type:"Poster",previewImg:"Gundersen_Elixir_all_hands_2019_FAIRification.png",title:"FAIRtracks presented at ELIXIR All-Hands 2019",cardButtons:[{icon:"download",text:"Open the full poster [PDF format]",href:this.$getNonImageAssetPath("materials","posters","Gundersen_Elixir_all_hands_2019_FAIRification.pdf")}],dialogButtons:[{icon:"download",text:"Open the full poster [PDF format]",href:this.$getNonImageAssetPath("materials","posters","Gundersen_Elixir_all_hands_2019_FAIRification.pdf")}]},{type:"Poster",previewImg:"Kompova_GCC2019_TrackFind.png",title:"TrackFind poster, Galaxy Community Conference 2019",cardButtons:[{icon:"download",text:"Open the full poster [PDF format]",href:this.$getNonImageAssetPath("materials","posters","Kompova_GCC2019_TrackFind.pdf")}],dialogButtons:[{icon:"download",text:"Open the full poster [PDF format]",href:this.$getNonImageAssetPath("materials","posters","Kompova_GCC2019_TrackFind.pdf")}]},{type:"Poster",previewImg:"Gundersen_Elixir_all_hands_2018_HyperBrowser.png",title:"The Genomic HyperBrowser, ELIXIR All-Hands 2018",cardButtons:[{icon:"download",text:"Open the full poster [PDF format]",href:this.$getNonImageAssetPath("materials","posters","Gundersen_Elixir_all_hands_2018_HyperBrowser.pdf")}],dialogButtons:[{icon:"download",text:"Open the full poster [PDF format]",href:this.$getNonImageAssetPath("materials","posters","Gundersen_Elixir_all_hands_2018_HyperBrowser.pdf")}]},{type:"Poster",previewImg:"Gundersen_GCCBOSC_2018_Coloc_stats.png",title:"Coloc-stats poster, Galaxy Community Conference 2018",cardButtons:[{icon:"download",text:"Open the full poster [PDF format]",href:this.$getNonImageAssetPath("materials","posters","Gundersen_GCCBOSC_2018_Coloc_stats.pdf")}],dialogButtons:[{icon:"download",text:"Open the full poster [PDF format]",href:this.$getNonImageAssetPath("materials","posters","Gundersen_GCCBOSC_2018_Coloc_stats.pdf")}]},{type:"Poster",previewImg:"Gundersen_Elixir_all_hands_2017_GTrack.png",title:"The GTrack ecosystem poster, ELIXIR All-Hands 2017",cardButtons:[{icon:"arrow-top-right-bold-box",text:"View the published poster",href:"https://doi.org/10.7490/f1000research.1115292.1"}],dialogButtons:[{icon:"arrow-top-right-bold-box",text:"View the published poster",href:"https://doi.org/10.7490/f1000research.1115292.1"}]},{type:"Presentation",previewImg:"Gundersen_Elixir_all_hands_2019_FAIRification.png",title:"ELIXIR Webinar on FAIRification of Genomic Tracks",cardButtons:[{icon:"arrow-top-right-bold-box",text:"Watch the full webinar",url:"https://elixir-europe.org/events/elixir-webinar-fairification-genomic-tracks"},{icon:"calendar-check",text:"Published on DD MM YYYY"}],dialogButtons:[{icon:"arrow-top-right-bold-box",text:"Watch the full webinar",link:"https://elixir-europe.org/events/elixir-webinar-fairification-genomic-tracks"}]}]}]}}},head:function(){return{title:"Material",meta:[]}}},r=a(60),i=Object(r.a)(o,(function(){var e=this;return(0,e._self._c)("SectionsPageContainer",{attrs:{"page-header":e.pageHeader,"page-header-images":e.pageHeaderImages,"grey-background":""}})}),[],!1,null,null,null);t.default=i.exports;installComponents(i,{SectionsPageContainer:a(1114).default})}}]);