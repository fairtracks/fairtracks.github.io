(window.webpackJsonp=window.webpackJsonp||[]).push([[55,30,38,39,41,42,45,46],{1001:function(t,e,a){"use strict";a.r(e);var s={props:{id:{type:String,default:null},href:{type:String,default:null},text:{type:String,default:""},xLarge:{type:Boolean,default:!1},doHover:{type:Boolean,default:!1}},data:function(){return{prevButtonHoverId:""}},computed:{buttonHoverId:function(){return this.$store.state.buttonHover.buttonHoverId},shouldHover:function(){return this.doHover&&""===this.buttonHoverId}},methods:{setButtonHoverId:function(t){this.prevButtonHoverId=this.buttonHoverId,this.$store.commit("buttonHover/setButtonHoverId",t)},unsetButtonHoverId:function(){this.prevButtonHoverId="",this.$store.commit("buttonHover/setButtonHoverId",this.prevButtonHoverId)}}},r=a(29),i=a(44),n=a.n(i),o=a(256),l=Object(r.a)(s,(function(){var t=this,e=t.$createElement,a=t._self._c||e;return a("div",{staticClass:"simplebutton"},[a("v-btn",{staticClass:"secondary",class:t.shouldHover?"custom-hover":null,attrs:{id:t.id,"x-large":t.xLarge,href:t.href,ripple:!1},on:{mouseover:function(e){return t.setButtonHoverId(t.id)},mouseleave:function(e){return t.unsetButtonHoverId(t.id)},click:function(e){return e.stopPropagation(),t.$emit("btn-click",!0)}}},[t._v("\n    "+t._s(t.text)+"\n  ")])],1)}),[],!1,null,null,null);e.default=l.exports;n()(l,{VBtn:o.a})},1017:function(t,e,a){"use strict";var s=a(138),r=a(33),i=a(9),n=a(10);e.a=Object(i.a)(s.a,r.a).extend({name:"v-hover",props:{disabled:{type:Boolean,default:!1},value:{type:Boolean,default:void 0}},methods:{onMouseEnter:function(){this.runDelay("open")},onMouseLeave:function(){this.runDelay("close")}},render:function(){return this.$scopedSlots.default||void 0!==this.value?(this.$scopedSlots.default&&(t=this.$scopedSlots.default({hover:this.isActive})),Array.isArray(t)&&1===t.length&&(t=t[0]),t&&!Array.isArray(t)&&t.tag?(this.disabled||(t.data=t.data||{},this._g(t.data,{mouseenter:this.onMouseEnter,mouseleave:this.onMouseLeave})),t):(Object(n.c)("v-hover should only contain a single element",this),t)):(Object(n.c)("v-hover is missing a default scopedSlot or bound value",this),null);var t}})},1024:function(t,e,a){var s=a(1057);s.__esModule&&(s=s.default),"string"==typeof s&&(s=[[t.i,s,""]]),s.locals&&(t.exports=s.locals);(0,a(12).default)("1ee89e2b",s,!0,{sourceMap:!1})},1056:function(t,e,a){"use strict";a(1024)},1057:function(t,e,a){var s=a(11)(!1);s.push([t.i,".zoom[data-v-01d6f506]{-webkit-transform:scale(1.025) translateY(-10px);transform:scale(1.025) translateY(-10px)}.notzoom[data-v-01d6f506],.zoom[data-v-01d6f506]{transition:-webkit-transform .2s;transition:transform .2s;transition:transform .2s,-webkit-transform .2s}.text-h6[data-v-01d6f506]{line-height:1.7rem!important}.v-list-item__content[data-v-01d6f506],.v-list-item__icon[data-v-01d6f506]{align-self:center;align-items:center}",""]),t.exports=s},1091:function(t,e,a){"use strict";a.r(e);var s={props:{cardId:{type:Number,required:!0},card:{type:Object,default:function(){}}}},r=(a(1056),a(29)),i=a(44),n=a.n(i),o=a(236),l=a(981),c=a(1017),d=a(227),u=a(228),f=a(129),v=a(54),g=a(103),h=a(225),p=a(982),m=Object(r.a)(s,(function(){var t=this,e=t.$createElement,a=t._self._c||e;return a("v-hover",{scopedSlots:t._u([{key:"default",fn:function(e){var s=e.hover;return[a("v-card",{staticClass:"py-4 px-4 mx-auto transition-swing",class:s?"zoom":"notzoom",attrs:{elevation:s?24:2,outlined:"",shaped:"",width:"380px",height:"586px",href:t.card.services[t.card.services.length-1].link}},[a("div",[a("v-responsive",{staticClass:"pt-3 px-1",attrs:{height:"170"}},[a("v-row",{staticClass:"fill-height pa-0",attrs:{"no-gutters":""}},[a("v-col",{staticClass:"pa-0",attrs:{cols:"12"}},[t.card.logo?a("UiSmartImg",{staticClass:"ma-auto",attrs:{contain:"","image-asset":t.$getImageAssetObject("images",t.card.logo[0],t.card.logo[1]),"max-height":"75"}}):a("h2",{staticClass:"text-h5 text-center font-weight-black ma-auto",domProps:{textContent:t._s(t.card.title)}})],1),t._v(" "),a("v-col",{staticClass:"pa-0",attrs:{cols:"12",ali:""}},[a("h3",{staticClass:"text-h6 text-center font-weight-bold"},[t._v("\n              "+t._s(t.card.subtitle)+"\n            ")])])],1)],1),t._v(" "),a("v-responsive",{staticClass:"pt-0 pb-3 px-1",attrs:{height:"380"}},[a("v-row",{staticClass:"fill-height",attrs:{"no-gutters":""}},[a("v-col",{attrs:{"align-self":"center",cols:"12"}},[a("v-list",{staticClass:"pa-0"},t._l(t.card.features,(function(e,s){return a("v-list-item",{key:"feature-"+s,attrs:{dense:""}},[a("v-list-item-icon",[a("v-icon",{staticClass:"grey--text-2"},[t._v("\n                    "+t._s(e.icon)+"\n                  ")])],1),t._v(" "),a("v-list-item-content",[a("v-list-item-title",{staticClass:"text-wrap text-left grey--text-2",domProps:{textContent:t._s(e.text)}})],1)],1)})),1)],1),t._v(" "),a("v-col",{attrs:{cols:"12","align-self":"end"}},[a("v-row",{class:1==t.card.services.length?"justify-end":"justify-space-between",attrs:{"no-gutters":""}},t._l(t.card.services,(function(e,r){return a("v-col",{key:"s_"+t.cardId+"_"+r,staticClass:"pa-0 ma-0",attrs:{cols:"auto","align-self":"end"}},[a("UiStyledButton",{staticClass:"text-weight-light",attrs:{id:"btn_"+t.cardId+"_"+r,href:e.link,text:e.text,"do-hover":s&&r+1==t.card.services.length}})],1)})),1)],1)],1)],1)],1)])]}}])})}),[],!1,null,"01d6f506",null);e.default=m.exports;n()(m,{UiSmartImg:a(255).default,UiStyledButton:a(1001).default}),n()(m,{VCard:o.a,VCol:l.a,VHover:c.a,VIcon:d.a,VList:u.a,VListItem:f.a,VListItemContent:v.a,VListItemIcon:g.a,VListItemTitle:v.c,VResponsive:h.a,VRow:p.a})},1092:function(t,e,a){"use strict";a.r(e);var s={props:{cardMatrices:{type:Object,default:function(){}}},methods:{createCardId:function(t,e){return"".concat(t,"_c_").concat(e)}}},r=a(29),i=a(44),n=a.n(i),o=a(981),l=a(982),c=Object(r.a)(s,(function(){var t=this,e=t.$createElement,a=t._self._c||e;return a("section",{class:t.$vuetify.theme.dark?"grey darken-4":"grey lighten-4",attrs:{id:t.cardMatrices.id}},[t.cardMatrices.title?a("v-row",{staticClass:"pt-16 px-8 pb-8"},[a("UiMainTitle",{attrs:{title:t.cardMatrices.title,ingress:t.cardMatrices.ingress,info:t.cardMatrices.info}})],1):t._e(),t._v(" "),t._l(t.cardMatrices.subsections,(function(e){return a("section",{key:e.id,attrs:{id:e.id}},[e.subtitle?a("v-row",{staticClass:"px-8 pt-8 pb-8",attrs:{id:e.id+"_subtitle",justify:"center"}},[a("UiMinorTitle",{attrs:{title:e.subtitle}})],1):t._e(),t._v(" "),a("v-row",{staticClass:"pa-0 pb-16 px-8",attrs:{"fill-height":"",justify:"start"}},t._l(e.cards,(function(s,r){return a("v-col",{key:t.createCardId(e.id,r),attrs:{id:t.createCardId(e.id,r),cols:"12",md:"6",lg:"4",xl:"3"}},[t._t("default",null,{cardId:t.createCardId(e.id,r),card:s})],2)})),1)],1)}))],2)}),[],!1,null,null,null);e.default=c.exports;n()(c,{UiMainTitle:a(999).default,UiMinorTitle:a(994).default}),n()(c,{VCol:o.a,VRow:l.a})},1171:function(t,e,a){"use strict";a.r(e);var s=a(68),r={data:function(){return{pageHeader:"Services",pageHeaderImages:[this.$getImageAssetObject("images","tracktypes","P.svg"),this.$getImageAssetObject("images","tracktypes","VP.svg"),this.$getImageAssetObject("images","tracktypes","LP.svg")],cardMatrices:{id:"fairtracks",title:"The FAIRtracks ecosystem",ingress:"The FAIRtracks ecosystem contains an interconnected group of services built around [the FAIRtracks draft standard](standards#s01-fairtracks). The services are aimed at gathering, curating, validating, integrating, indexing, and analysing the metadata of genomic tracks.",info:"(Please refer to the [overview](/overview#ecosystem) page for images of the interconnections between the services, both internally within the FAIRtracks ecosystem, as well as to external services.)",subsections:[{id:"core",subtitle:"Core services",cards:[{logo:["logos","trackfind.png"],title:"TrackFind",subtitle:"Search engine for genomic track metadata",icon:s.t,color:"green darken-2",features:[{icon:s.l,text:"Hierarchical browser of the metadata attributes and all values actually present in the database"},{icon:s.z,text:"Categorical search"},{icon:s.A,text:"Graphical builder of SQL-based search queries"},{icon:s.y,text:"Browse results in table or hierarchical form"},{icon:s.f,text:"Export results in JSON or GSuite formats"},{icon:s.a,text:"REST API for integration into downstream tools and scripts"}],services:[{text:"REST API",link:"https://app.swaggerhub.com/apis-docs/FAIRtracks/TrackFind/1.0.0"},{text:"Web GUI",link:"https://trackfind.elixir.no/"}]},{logo:["logos","FAIRtracks-logo.png"],title:"FAIRtracks augmentation service",subtitle:"metadata augmentation service",icon:s.t,color:"green darken-2",features:[{icon:s.a,text:"RESTful API for automatised augmentation of minimum information"},{icon:s.q,text:"import a FAIRtracks-annotated JSON file with a minimal set of fields"},{icon:s.k,text:"export a JSON file with augmented human-readable fields of relevance of downstream users "},{icon:s.b,text:"Automated generation of human-readable ontology labels and most recent versions"}],services:[{text:"REST API",link:"https://fairtracks.elixir.no/api/"},{text:"GitHub",link:"https://github.com/fairtracks/fairtracks_augment"}]}]},{id:"connected",subtitle:"Connected services",cards:[{logo:["logos","gsuite-hyperbrowser.png"],title:"GSuite HyperBrowser",subtitle:"Statistical analysis framework for track data",icon:s.t,color:"green darken-2",features:[{icon:s.d,text:"The first general framework for statistical analysis of genomic tracks"},{icon:s.u,text:"Created at the crossroads of biology, statistics, and computer science"},{icon:s.D,text:"Open-ended web server, based on the Galaxy web framework"},{icon:s.i,text:"Can analyse genomic variation, gene regulation, chromatin structure, 3D genome organization, and more..."},{icon:s.w,text:"Hundreds of precise tools and analyses"},{icon:s.h,text:"Prototype track search and import tool that inspired FAIRtracks is being replaced by TrackFind client"}],services:[{text:"Web GUI",link:"https://hyperbrowser.uio.no/"}]}]}]}}},head:function(){return{title:"Services",meta:[]}}},i=a(29),n=a(44),o=a.n(n),l=a(982),c=a(986),d=Object(i.a)(r,(function(){var t=this,e=t.$createElement,a=t._self._c||e;return a("section",{staticClass:"fill-height",class:t.$vuetify.theme.dark?"grey darken-4":"grey lighten-4"},[a("UiPageHeaderBanner",{attrs:{"page-header":t.pageHeader,"page-header-images":t.pageHeaderImages}}),t._v(" "),a("SectionsCardMatrixSubSections",{attrs:{"card-matrices":t.cardMatrices},scopedSlots:t._u([{key:"default",fn:function(t){var e=t.cardId,s=t.card;return[a("UiInfoCard",{attrs:{"card-id":e,card:s}})]}}])}),t._v(" "),a("v-spacer",{class:t.$vuetify.theme.dark?"grey darken-4":"grey lighten-4"}),t._v(" "),a("v-row")],1)}),[],!1,null,null,null);e.default=d.exports;o()(d,{UiPageHeaderBanner:a(997).default,UiInfoCard:a(1091).default,SectionsCardMatrixSubSections:a(1092).default}),o()(d,{VRow:l.a,VSpacer:c.a})},992:function(t,e,a){var s=a(996);s.__esModule&&(s=s.default),"string"==typeof s&&(s=[[t.i,s,""]]),s.locals&&(t.exports=s.locals);(0,a(12).default)("8ae11210",s,!0,{sourceMap:!1})},993:function(t,e,a){"use strict";a.r(e);var s={props:{imageAsset:{type:Object,required:!0}},data:function(){return{fullCoverStyle:"background-position: center center; position: absolute; background-size: cover; width: 100%;object-fit: contain;z-index: -1"}},computed:{altText:function(){return this.alt?this.alt:this.imageAsset.filename}}},r=a(29),i=Object(r.a)(s,(function(){var t=this,e=t.$createElement,a=t._self._c||e;return a("div",{},[t.imageAsset.isSvgImage?a("div",{staticClass:"lazyload fill-height",style:t.fullCoverStyle,attrs:{"data-bgset":t.imageAsset.optimizedImagePath,"data-sizes":"auto"}}):t._e(),t._v(" "),t.imageAsset.isSvgImage?t._e():a("div",{staticClass:"lazyload fill-height",style:t.fullCoverStyle,attrs:{"data-bgset":t.imageAsset.responsiveWebpImage.srcSet+" [type: image/webp] | "+t.imageAsset.responsiveImage.srcSet,"data-sizes":"auto"}})])}),[],!1,null,null,null);e.default=i.exports},994:function(t,e,a){"use strict";a.r(e);var s={props:{title:{type:String,default:""}}},r=a(29),i=Object(r.a)(s,(function(){var t=this,e=t.$createElement;return(t._self._c||e)("h3",{staticClass:"text-h4 font-weight-bold mb-5"},[t._v(t._s(t.title))])}),[],!1,null,null,null);e.default=i.exports},995:function(t,e,a){"use strict";a(992)},996:function(t,e,a){var s=a(11)(!1);s.push([t.i,".gradient-fill-header .v-responsive__content{background:linear-gradient(180deg,rgba(var(--v-accent-rgb),.9),rgba(var(--v-anchor-rgb),.9))}.banner{max-height:150px}",""]),t.exports=s},997:function(t,e,a){"use strict";a.r(e);var s={props:{pageHeader:{type:String,required:!0},pageHeaderImages:{type:Array,default:function(){return[]}}}},r=(a(995),a(29)),i=a(44),n=a.n(i),o=a(981),l=a(235),c=a(225),d=a(982),u=Object(r.a)(s,(function(){var t=this,e=t.$createElement,a=t._self._c||e;return a("v-responsive",{attrs:{"aspect-ratio":567/56.3,"max-height":"150px","min-height":"75px"}},[a("v-row",{staticClass:"ma-0",attrs:{"no-gutters":""}},t._l(t.pageHeaderImages,(function(t,e){return a("v-col",{key:e,attrs:{cols:"4"}},[a("v-row",{staticClass:"ma-0 gradient-fill-header",attrs:{justify:"center"}},[a("v-responsive",{staticStyle:{"z-index":"2"},attrs:{width:"33%",height:"100%","aspect-ratio":189/56.3,"max-height":"150px","min-height":"75px"}},[a("UiSmartBackgroundImg",{attrs:{"image-asset":t}})],1)],1)],1)})),1),t._v(" "),a("v-overlay",{attrs:{absolute:"",opacity:"0","z-index":"3"}},[a("h1",{staticClass:"text-md-h2 text-sm-h3 text-h4 font-weight-black text-center"},[t._v("\n      "+t._s(t.pageHeader.toUpperCase())+"\n    ")])])],1)}),[],!1,null,null,null);e.default=u.exports;n()(u,{UiSmartBackgroundImg:a(993).default}),n()(u,{VCol:o.a,VOverlay:l.a,VResponsive:c.a,VRow:d.a})},999:function(t,e,a){"use strict";a.r(e);var s=a(1e3),r={props:{title:{type:String,default:""},subtitle:{type:String,default:""},ingress:{type:String,default:""},info:{type:String,default:""}},methods:{compileMarkdown:function(t){return s.marked.parseInline(t,[])}}},i=a(29),n=Object(i.a)(r,(function(){var t=this,e=t.$createElement,a=t._self._c||e;return a("div",[a("h2",{directives:[{name:"show",rawName:"v-show",value:t.title,expression:"title"}],staticClass:"text-h4 text-md-h3 text-center font-weight-black mt-4 mb-8",domProps:{textContent:t._s(t.title)}}),t._v(" "),a("h3",{directives:[{name:"show",rawName:"v-show",value:t.subtitle,expression:"subtitle"}],staticClass:"text-h6 text-md-h5 font-weight-medium font-italic text-center mb-8",domProps:{textContent:t._s(t.subtitle)}}),t._v(" "),a("h4",{directives:[{name:"show",rawName:"v-show",value:t.ingress,expression:"ingress"}],staticClass:"text-h6 font-weight-medium font-italic text-center mb-4",domProps:{innerHTML:t._s(t.compileMarkdown(t.ingress))}}),t._v(" "),a("p",{directives:[{name:"show",rawName:"v-show",value:t.info,expression:"info"}],staticClass:"text-subtitle-1 font-weight-light text-center mb-4",domProps:{innerHTML:t._s(t.compileMarkdown(t.info))}})])}),[],!1,null,null,null);e.default=n.exports}}]);