(window.webpackJsonp=window.webpackJsonp||[]).push([[62,38,49,51,54],{1109:function(t,e,a){},1110:function(t,e,a){},1111:function(t,e,a){"use strict";a.r(e);var s={props:{imageAsset:{type:Object,required:!0},altText:{type:String,default:""},styleText:{type:String,default:""}}},i=a(22),r=Object(i.a)(s,(function(){return(0,this._self._c)("noscript",{inlineTemplate:{render:function(){var t=this;return(0,t._self._c)("div",{staticClass:"fill-height attach-classes",style:'background-image: url("'.concat(t.imageAsset.optimizedImagePath,'"  ); ').concat(t.styleText)})},staticRenderFns:[]}})}),[],!1,null,null,null);e.default=r.exports},1112:function(t,e,a){"use strict";a(1109)},1113:function(t,e,a){"use strict";a.r(e);var s={props:{imageAsset:{type:Object,required:!0},height:{type:String,default:null},width:{type:String,default:null},minHeight:{type:String,default:null},alt:{type:String,default:""},contain:{type:Boolean,default:!1}}},i=(a(1112),a(22)),r=a(25),n=a.n(r),o=a(183),l=Object(i.a)(s,(function(){var t=this,e=t._self._c;return t.imageAsset.isSvgImage||t.$config.optimizeImages?e("UiSmartImgFileTypesWrapper",{attrs:{"image-asset":t.imageAsset,height:t.height,width:t.width,"min-height":t.minHeight,alt:t.alt,behind:""},scopedSlots:t._u([{key:"svgImgComponent",fn:function(a){var s=a.imageAsset,i=a.styleText;return[e("div",{staticClass:"lazyload fill-height center-background attach-classes hide-with-noscript",class:t.contain?"contain-background":"cover-background",style:i,attrs:{"data-bgset":s.optimizedImagePath,"data-sizes":"auto"}}),t._v(" "),e("UiNoScriptBackgroundImg",{staticClass:"fill-height slot-center-background",class:t.contain?"slot-contain-background":"slot-cover-background",attrs:{"image-asset":s,"style-text":i}})]}},{key:"imgComponent",fn:function(a){var s=a.imageAsset,i=a.styleText;return[e("div",{staticClass:"lazyload fill-height center-background attach-classes hide-with-noscript",class:t.contain?"contain-background":"cover-background",style:i,attrs:{"data-bgset":"".concat(s.responsiveWebpImage.srcSet," [type: image/webp] |\n                      ").concat(s.responsiveImage.srcSet),"data-sizes":"auto"}}),t._v(" "),e("UiNoScriptBackgroundImg",{staticClass:"slot-center-background",class:t.contain?"slot-contain-background":"slot-cover-background",attrs:{"image-asset":s,"style-text":i}})]}}],null,!1,1036633756)}):e("v-img",{class:t.contain?"full-size":"auto-size",staticStyle:{"z-index":"-1"},attrs:{src:t.imageAsset.optimizedImagePath,alt:t.alt,contain:t.contain,"min-height":t.minHeight}})}),[],!1,null,null,null);e.default=l.exports;n()(l,{UiNoScriptBackgroundImg:a(1111).default,UiSmartImgFileTypesWrapper:a(452).default}),n()(l,{VImg:o.a})},1114:function(t,e,a){"use strict";a(1110)},1115:function(t,e,a){"use strict";a.r(e);function s(t,e){return function(t){if(Array.isArray(t))return t}(t)||function(t,e){var a=null==t?null:"undefined"!=typeof Symbol&&t[Symbol.iterator]||t["@@iterator"];if(null==a)return;var s,i,r=[],n=!0,o=!1;try{for(a=a.call(t);!(n=(s=a.next()).done)&&(r.push(s.value),!e||r.length!==e);n=!0);}catch(t){o=!0,i=t}finally{try{n||null==a.return||a.return()}finally{if(o)throw i}}return r}(t,e)||function(t,e){if(!t)return;if("string"==typeof t)return i(t,e);var a=Object.prototype.toString.call(t).slice(8,-1);"Object"===a&&t.constructor&&(a=t.constructor.name);if("Map"===a||"Set"===a)return Array.from(t);if("Arguments"===a||/^(?:Ui|I)nt(?:8|16|32)(?:Clamped)?Array$/.test(a))return i(t,e)}(t,e)||function(){throw new TypeError("Invalid attempt to destructure non-iterable instance.\nIn order to be iterable, non-array objects must have a [Symbol.iterator]() method.")}()}function i(t,e){(null==e||e>t.length)&&(e=t.length);for(var a=0,s=new Array(e);a<e;a++)s[a]=t[a];return s}var r={mixins:[{computed:{cssVars:function(){var t={};return this.createRgbVarsForThemes(this.$vuetify.theme.themes,t),t}},methods:{isObject:function(t){return"[object Object]"===Object.prototype.toString.call(t)},hexToRgb:function(t){var e=0,a=0,s=0;return 4===t.length?(e="0x"+t[1]+t[1],a="0x"+t[2]+t[2],s="0x"+t[3]+t[3]):7===t.length&&(e="0x"+t[1]+t[2],a="0x"+t[3]+t[4],s="0x"+t[5]+t[6]),"".concat(+e,", ").concat(+a,", ").concat(+s)},generateRgbVar:function(t,e,a){var s=this.hexToRgb(e);s.includes("NaN")||(a["--v-".concat(t,"-rgb")]=s)},createRgbVarsForThemes:function(t,e){if(void 0!==t)for(var a=0,i=Object.values(t);a<i.length;a++)for(var r=i[a],n=0,o=Object.entries(r);n<o.length;n++){var l=s(o[n],2),c=l[0],d=l[1];if(this.isObject(d))for(var u=0,g=Object.entries(d);u<g.length;u++){var m=s(g[u],2),v=m[0],p=m[1];this.generateRgbVar("".concat(c,"-").concat(v),p,e)}else this.generateRgbVar(c,d,e)}}}}],props:{pageHeader:{type:String,required:!0},pageHeaderImages:{type:Array,default:function(){return[]}}}},n=(a(1114),a(22)),o=a(25),l=a.n(o),c=a(1098),d=a(246),u=a(236),g=a(1099),m=Object(n.a)(r,(function(){var t=this,e=t._self._c;return e("v-responsive",{staticClass:"gradient-fill-header",style:t.cssVars,attrs:{"max-height":"125px","min-height":"75px"}},[e("v-responsive",{staticClass:"mx-auto",attrs:{"aspect-ratio":567/56.3,"max-width":"1258.9"}},[e("v-row",{staticClass:"ma-0",attrs:{"no-gutters":""}},t._l(t.pageHeaderImages,(function(a,s){return e("v-col",{key:s,attrs:{cols:"4"}},[e("v-row",{attrs:{"no-gutters":"",justify:"center"}},[e("v-responsive",{staticClass:"gradient-fill-header top-level",style:t.cssVars,attrs:{width:"33%",height:"100%","aspect-ratio":189/56.3,"max-height":"150px","min-height":"75px"}},[e("UiSmartBackgroundImg",{attrs:{height:"56.3",width:"189","min-height":"75","image-asset":a,contain:""}})],1)],1)],1)})),1)],1),t._v(" "),e("v-overlay",{directives:[{name:"show",rawName:"v-show",value:t.$vuetify.theme.dark,expression:"$vuetify.theme.dark"}],staticClass:"black",staticStyle:{opacity:"0.3"},attrs:{absolute:"","z-index":"3"}}),t._v(" "),e("v-overlay",{attrs:{absolute:"",opacity:"0","z-index":"3"}},[e("h1",{staticClass:"text-md-h2 text-sm-h3 text-h4 font-weight-black text-center"},[t._v("\n        "+t._s(t.pageHeader)+"\n      ")])])],1)}),[],!1,null,null,null);e.default=m.exports;l()(m,{UiSmartBackgroundImg:a(1113).default}),l()(m,{VCol:c.a,VOverlay:d.a,VResponsive:u.a,VRow:g.a})},1116:function(t,e,a){"use strict";a.r(e);var s={props:{pageHeader:{type:String,default:""},pageHeaderImages:{type:Array,default:function(){return[]}},greyBackground:{type:Boolean,default:!1},sectionId:{type:String,default:null},setMargins:{type:Boolean,default:!1}}},i=a(22),r=a(25),n=a.n(r),o=a(1108),l=Object(i.a)(s,(function(){var t=this,e=t._self._c;return e("section",{class:t.greyBackground?t.$vuetify.theme.dark?"primary":"grey lighten-4":null,attrs:{id:t.sectionId}},[e("UiPageHeaderBanner",{directives:[{name:"show",rawName:"v-show",value:t.pageHeader,expression:"pageHeader"}],staticClass:"white",attrs:{"page-header":t.pageHeader,"page-header-images":t.pageHeaderImages}}),t._v(" "),e("v-container",{class:t.setMargins?"pa-md-8 pa-4":"pa-0",staticStyle:{"max-width":"1700px"},attrs:{fluid:""}},[t._t("default")],2)],1)}),[],!1,null,null,null);e.default=l.exports;n()(l,{UiPageHeaderBanner:a(1115).default}),n()(l,{VContainer:o.a})},1273:function(t,e,a){"use strict";a.r(e);var s=a(67),i={data:function(){return{mdiComment:s.l,mdiHeart:s.x,mdiShareVariant:s.N,mdiMagnify:s.D,pageHeader:"News",pageHeaderImages:[this.$getImageAssetObject("images","tracktypes","P.svg"),this.$getImageAssetObject("images","tracktypes","S.svg"),this.$getImageAssetObject("images","tracktypes","GP.svg")],posts:[{id:"",title:"Hello World",postImage:"",publishedOn:"",lastUpdated:"",author:"",tags:"",category:"",excerpt:"",content:""}],page:2,tags:["Work","Home Improvement","Vacation","Food","Drawers","Shopping","Art","Tech","Creative Writing"],items:[{text:"Technology"},{text:"Health"},{text:"News"},{text:"Recent Discovery"},{text:"Lifestyle and Fitness"},{text:"Fashion"},{text:"Music"}],comments:[{avatar:"https://cdn.vuetifyjs.com/images/lists/1.jpg",title:"Ali Connors",subtitle:"I'll be in your neighborhood doing errands this weekend.\n          Do you want to hang out?"},{divider:!0,inset:!0},{avatar:"https://cdn.vuetifyjs.com/images/lists/2.jpg",title:"Alex Scott",subtitle:"Wish I could come, but I'm out of town this weekend."},{divider:!0,inset:!0},{avatar:"https://cdn.vuetifyjs.com/images/lists/3.jpg",title:"Sandra Adams",subtitle:"Do you have Paris recommendations? Have you ever been?"},{divider:!0,inset:!0},{avatar:"https://cdn.vuetifyjs.com/images/lists/4.jpg",title:"Trevor Hansen",subtitle:"Have any ideas about what we should get Heidi for her birthday?"},{divider:!0,inset:!0},{avatar:"https://cdn.vuetifyjs.com/images/lists/5.jpg",title:"Britta Holt",subtitle:"We should eat this: Grate, Squash, Corn, and tomatillo Tacos."}]}},head:function(){return{title:"News",meta:[]}}},r=a(22),n=a(25),o=a.n(n),l=a(268),c=a(247),d=a(189),u=a(1165),g=a(1248),m=a(1098),v=a(1108),p=a(1091),h=a(238),f=a(183),y=a(239),b=a(137),x=a(242),_=a(53),C=a(244),w=a(1267),k=a(1099),S=a(1103),I=a(1164),V=a(1141),j=Object(r.a)(i,(function(){var t=this,e=t._self._c;return e("SectionsPageContainer",{attrs:{"page-header":t.pageHeader,"page-header-images":t.pageHeaderImages,"grey-background":""}},[e("v-row",[e("v-col",{staticClass:"py-16",attrs:{cols:"12",xl:"10",lg:"9",md:"8",sm:"8"}},[e("v-row",t._l(10,(function(a){return e("v-col",{key:a,attrs:{cols:"12",sm:"6",md:"6",lg:"4",xl:"3"}},[e("v-card",{staticClass:"mx-auto",attrs:{"max-width":"450",elevation:"1"}},[e("v-img",{staticClass:"white--text align-end",attrs:{height:"200px",src:"pexels-moose-photos-1036641.jpg"}}),t._v(" "),e("v-card-subtitle",{staticClass:"pb-0"},[e("v-btn",{staticClass:"px-0",attrs:{href:"#",text:"",small:"",color:"primary"}},[t._v("Admin")]),t._v(" "),e("v-btn",{staticClass:"px-0",attrs:{text:"",small:"",disabled:""}},[t._v("October 13, 2020")])],1),t._v(" "),e("v-card-text",{staticClass:"title font-weight-bold mt-3 pb-0 text--primary",staticStyle:{"line-height":"1.8rem"}},[t._v("\n                Check out the new mansion we got for our eSports team!\n              ")]),t._v(" "),e("v-card-text",{staticClass:"text--primary"},[t._v("\n                An online streamer, also known as a live streamer, internet streamer, or streamer,\n                is a person who broadcasts themself online through a live stream or pre-recorded\n                video. The scope of online streamers has grown to includ...\n                "),e("v-btn",{attrs:{href:"#",small:"",text:"",color:"primary"}},[t._v("Read More")])],1),t._v(" "),e("v-card-actions",[e("v-btn",{attrs:{icon:"",color:"yellow darken-1"}},[e("v-icon",[t._v(t._s(t.mdiComment))])],1),t._v(" "),e("span",{staticClass:"text--disabled"},[t._v("15")]),t._v(" "),e("v-spacer"),t._v(" "),e("v-btn",{attrs:{icon:"",color:"orange"}},[e("v-icon",[t._v(t._s(t.mdiHeart))])],1),e("span",{staticClass:"text--disabled mr-2"},[t._v("45K")]),t._v(" "),e("v-btn",{attrs:{icon:"",color:"primary"}},[e("v-icon",[t._v(t._s(t.mdiShareVariant))])],1),e("span",{staticClass:"text--disabled"},[t._v("25K")]),t._v(" "),e("span",{staticClass:"mr-4"})],1)],1)],1)})),1),t._v(" "),e("div",{staticClass:"text-center"},[e("div",{staticClass:"text-center"},[e("v-container",[e("v-row",{attrs:{justify:"center"}},[e("v-col",{attrs:{cols:"8"}},[e("v-container",{staticClass:"max-width"},[e("v-pagination",{staticClass:"my-4",attrs:{circle:"",length:15},model:{value:t.page,callback:function(e){t.page=e},expression:"page"}})],1)],1)],1)],1)],1)])],1),t._v(" "),e("v-col",{staticClass:"py-16",attrs:{cols:"12",xl:"2",lg:"3",md:"4",sm:"4"}},[e("aside",[e("v-text-field",{staticClass:"mb-6",attrs:{clearable:"",dense:"",flat:"",outlined:"",placeholder:"Search...","append-icon":t.mdiMagnify,"hide-details":""}}),t._v(" "),e("v-card",{staticClass:"mb-6",attrs:{outlined:""}},[e("div",{staticClass:"subtitle font-weight-black text-uppercase text-center mt-4"},[t._v("Categories")]),t._v(" "),e("v-list",{attrs:{dense:""}},[e("v-list-item-group",{attrs:{color:"primary"}},t._l(t.items,(function(a,s){return e("v-list-item",{key:s},[e("v-list-item-content",[e("v-list-item-title",{domProps:{textContent:t._s(a.text)}})],1)],1)})),1)],1)],1),t._v(" "),e("v-card",{staticClass:"mb-6",attrs:{outlined:""}},[e("div",{staticClass:"subtitle font-weight-black text-uppercase text-center mt-4"},[t._v("Tags")]),t._v(" "),e("v-card-text",[e("v-chip-group",{attrs:{column:""}},t._l(t.tags,(function(a){return e("v-chip",{key:a},[t._v("\n                  "+t._s(a)+"\n                ")])})),1)],1)],1),t._v(" "),e("v-card",{staticClass:"mb-6",attrs:{outlined:""}},[e("div",{staticClass:"subtitle font-weight-black text-uppercase text-center mt-4"},[t._v("\n              Recent Comments\n            ")]),t._v(" "),e("v-list",{attrs:{"three-line":"",dense:""}},[t._l(t.comments,(function(a,s){return[a.header?e("v-subheader",{key:a.header,domProps:{textContent:t._s(a.header)}}):a.divider?e("v-divider",{key:s}):e("v-list-item",{key:a.title},[e("v-list-item-avatar",[e("v-img",{attrs:{src:a.avatar}})],1),t._v(" "),e("v-list-item-content",[e("v-list-item-title",{domProps:{textContent:t._s(a.title)}}),t._v(" "),e("v-list-item-subtitle",{domProps:{textContent:t._s(a.subtitle)}})],1)],1)]}))],2)],1)],1)])],1)],1)}),[],!1,null,null,null);e.default=j.exports;o()(j,{SectionsPageContainer:a(1116).default}),o()(j,{VBtn:l.a,VCard:c.a,VCardActions:d.a,VCardSubtitle:d.b,VCardText:d.c,VChip:u.a,VChipGroup:g.a,VCol:m.a,VContainer:v.a,VDivider:p.a,VIcon:h.a,VImg:f.a,VList:y.a,VListItem:b.a,VListItemAvatar:x.a,VListItemContent:_.a,VListItemGroup:C.a,VListItemSubtitle:_.b,VListItemTitle:_.c,VPagination:w.a,VRow:k.a,VSpacer:S.a,VSubheader:I.a,VTextField:V.a})}}]);