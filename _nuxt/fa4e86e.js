(window.webpackJsonp=window.webpackJsonp||[]).push([[30,45],{1298:function(t,e,s){var n=s(1308);n.__esModule&&(n=n.default),"string"==typeof n&&(n=[[t.i,n,""]]),n.locals&&(t.exports=n.locals);(0,s(29).default)("5ce81993",n,!0,{sourceMap:!1})},1301:function(t,e,s){var n=s(1321);n.__esModule&&(n=n.default),"string"==typeof n&&(n=[[t.i,n,""]]),n.locals&&(t.exports=n.locals);(0,s(29).default)("f76c3df4",n,!0,{sourceMap:!1})},1303:function(t,e,s){"use strict";s.r(e);var n={mixins:[s(1283).a],props:{title:{type:String,default:""},subtitle:{type:String,default:""},ingress:{type:String,default:""},info:{type:String,default:""},scaleDownAtSm:{type:Boolean,default:!1},titleStyle:{type:String,default:""},subtitleStyle:{type:String,default:""},ingressStyle:{type:String,default:""},infoStyle:{type:String,default:""}},data:function(){return{componentId:"ui-main-title"}}},i=s(61),a=Object(i.a)(n,(function(){var t=this,e=t._self._c;return e("div",[e("h2",{directives:[{name:"show",rawName:"v-show",value:t.title,expression:"title"}],staticClass:"text-h4 text-center font-weight-black mt-4 mb-8",class:t.scaleDownAtSm?"text-sm-h3":"text-md-h3",style:t.titleStyle,domProps:{textContent:t._s(t.title)}}),t._v(" "),e("h3",{directives:[{name:"show",rawName:"v-show",value:t.subtitle,expression:"subtitle"}],staticClass:"text-h6 font-weight-medium font-italic text-center mb-8",class:t.scaleDownAtSm?"text-sm-h5":"text-md-h5",style:t.subtitleStyle,domProps:{textContent:t._s(t.subtitle)}}),t._v(" "),e("h4",{directives:[{name:"show",rawName:"v-show",value:t.ingress,expression:"ingress"}],staticClass:"text-h6 text-center mb-4",class:t.subtitle?"font-weight-regular":"font-weight-medium font-italic",style:t.ingressStyle,domProps:{innerHTML:t._s(t.compileMarkdown(t.ingress))}}),t._v(" "),e("h4",{directives:[{name:"show",rawName:"v-show",value:!t.ingress,expression:"!ingress"}],staticClass:"text-h6 text-center mb-4",class:t.subtitle?"font-weight-regular":"font-weight-medium font-italic",style:t.ingressStyle},[t._t("ingress")],2),t._v(" "),e("p",{directives:[{name:"show",rawName:"v-show",value:t.info,expression:"info"}],staticClass:"text-subtitle-1 font-weight-light text-center mb-4",style:t.infoStyle,domProps:{innerHTML:t._s(t.compileMarkdown(t.info))}}),t._v(" "),e("p",{directives:[{name:"show",rawName:"v-show",value:!t.info,expression:"!info"}],staticClass:"text-subtitle-1 font-weight-light text-center mb-4",style:t.infoStyle},[t._t("info")],2)])}),[],!1,null,null,null);e.default=a.exports},1307:function(t,e,s){"use strict";s(1298)},1308:function(t,e,s){var n=s(28)(!1);n.push([t.i,".table_header{vertical-align:top}",""]),t.exports=n},1314:function(t,e,s){"use strict";s.r(e);var n=s(1270),i={mixins:[s(1284).b],props:{linkObj:{type:Object,required:!0}},data:function(){return{componentId:"ui-icon-link"}}},a=s(61),r=Object(a.a)(i,(function(){var t=this,e=t._self._c;return e(n.a,{staticClass:"px-4 py-1",attrs:{cols:"12","align-self":"center"}},[e("UiSmartIcon",{attrs:{name:t.linkObj.icon,size:"30px"}}),t._v(" "),t.linkObj.href?e("a",{staticClass:"ml-2 my-auto",attrs:{href:t.linkObj.href}},[t._v(" "+t._s(t.linkObj.text))]):t._e(),t._v(" "),t.linkObj.to?e("nuxt-link",{staticClass:"ml-2 my-auto",attrs:{to:t.linkObj.to}},[t._v("\n    "+t._s(t.linkObj.text))]):t._e()],1)}),[],!1,null,null,null);e.default=r.exports;installComponents(r,{UiSmartIcon:s(402).default})},1315:function(t,e,s){"use strict";s.r(e);var n=s(248),i=s(1270),a=s(1279),r=s(1269),l=s(157),o=s(1275),c=(s(41),s(252),s(42),s(35),s(51),s(56),s(57),s(69),s(86)),u=s(1283),p=s(1284),d={mixins:[u.a,p.b],props:{csvBaseFileName:{type:String,required:!0},delimiter:{type:String,default:""},collapseLargeLists:{type:Boolean,default:!0},tableCaption:{type:String,default:""},tableFootnote:{type:String,default:""},itemsPerPage:{type:Number,required:!0}},data:function(){return{componentId:"ui-csv-table",search:""}},computed:{baseFilePath:function(){return"/data/tables/"+this.csvBaseFileName},headers:function(){return this.createHeaders(this.$nuxt.context.store.getters[c.DATA_G_GET_CONTENTS_BODY_ALL_HEADERS](this.baseFilePath))},items:function(){return this.$nuxt.context.store.getters[c.DATA_G_GET_CONTENTS_BODY_POSSIBLY_SPLIT_TO_ARRAYS](this.baseFilePath,this.delimiter)}},methods:{getMobileBreakpoint:function(){return null},createHeaders:function(t){return t.map((function(t){return{text:t,value:t,class:"table_header"}}))},isLargeList:function(t){return!(!this.collapseLargeLists||!Array.isArray(t))&&t.length>3},parseArrayToString:function(t){return this.compileMarkdown(t.join(",\n"))},isArray:function(t){return Array.isArray(t)}}},f=(s(1307),s(61)),m=Object(f.a)(d,(function(){var t=this,e=t._self._c;return e(r.a,{staticClass:"px-4",attrs:{"no-gutters":""}},[e(i.a,{attrs:{cols:"12"}},[e(n.d,[e(l.a,{attrs:{label:"Search","single-line":"","hide-details":""},scopedSlots:t._u([{key:"append",fn:function(){return[e("UiSmartIcon",{attrs:{name:"magnify"}})]},proxy:!0}]),model:{value:t.search,callback:function(e){t.search=e},expression:"search"}})],1)],1),t._v(" "),e(i.a,{attrs:{cols:"12"}},[e(a.a,{attrs:{dense:"",search:t.search,headers:t.headers,items:t.items,"items-per-page":t.itemsPerPage,height:"100%","fixed-header":"","mobile-breakpoint":t.getMobileBreakpoint()},scopedSlots:t._u([{key:"item",fn:function(s){var n=s.item;return[e("tr",t._l(n,(function(s){return e("td",{key:s.name},[t.isLargeList(s)?e(o.a,{attrs:{bottom:"",transition:"fade-transition"},scopedSlots:t._u([{key:"activator",fn:function(s){var n=s.on,i=s.attrs;return[e("span",t._g(t._b({staticStyle:{"text-align":"center","text-decoration":"underline dotted"}},"span",i,!1),n),[t._v("\n                  Multiple\n                ")])]}}],null,!0)},[t._v(" "),e("div",{staticClass:"d-flex flex-column my-4 mx-2",staticStyle:{"text-align":"center"}},[e("span",{domProps:{innerHTML:t._s(t.parseArrayToString(s))}})])]):t.isArray(s)?e("span",{domProps:{innerHTML:t._s(t.parseArrayToString(s))}}):e("span",{domProps:{innerHTML:t._s(t.compileMarkdown(s))}})],1)})),0)]}}])})],1),t._v(" "),e(i.a,{attrs:{cols:"12"}},[e("p",{directives:[{name:"show",rawName:"v-show",value:t.tableCaption,expression:"tableCaption"}],staticClass:"body-2 font-italic text-center pt-6",domProps:{innerHTML:t._s(t.compileMarkdown(t.tableCaption))}})]),t._v(" "),e(i.a,{attrs:{cols:"12"}},[e("p",{staticClass:"body-2 font-italic text-center pt-6"},[t._v("\n      "+t._s(t.tableFootnote)+"\n    ")])])],1)}),[],!1,null,null,null);e.default=m.exports;installComponents(m,{UiSmartIcon:s(402).default})},1320:function(t,e,s){"use strict";s(1301)},1321:function(t,e,s){var n=s(28)(!1);n.push([t.i,"@media (min-width:1640px){.vl-and-up-align-self-end-else-center[data-v-6a19c2bf]{-ms-flex-item-align:end;align-self:end}}@media (max-width:1639px){.vl-and-up-align-self-end-else-center[data-v-6a19c2bf]{-ms-flex-item-align:center;align-self:center}}",""]),t.exports=n},1331:function(t,e,s){"use strict";s.r(e);var n=s(1270),i=(s(33),s(35),{mixins:[s(1283).a],props:{subSection:{type:Object,required:!0},subSectionIndex:{type:Number,required:!0}},data:function(){return{componentId:"ui-figure-list"}}}),a=(s(1320),s(61)),r=Object(a.a)(i,(function(){var t=this,e=t._self._c;return e(n.a,{staticClass:"px-md-15 px-11 py-2",class:t.subSection.tables&&!t.subSection.links?"vl-and-up-align-self-end-else-center":"align-self-center",attrs:{cols:"12",lg:"6"}},t._l(t.subSection.figures,(function(s,n){return e("UiNumberedFigure",{key:n,class:"".concat(0===n?"pt-lg-0":""," ").concat(n>0&&t.subSection.spaceBetweenFigures?"pt-16":n>0&&t.subSection.littleSpaceBetweenFigures?"pt-lg-2 pt-7":"pt-7"," ").concat(n+1===t.subSection.figures.length?"":t.subSection.spaceBetweenFigures?"pb-16":t.subSection.littleSpaceBetweenFigures?"pb-lg-2 pb-7":"pb-7"),attrs:{"figure-obj":s,"fig-index":n,"sub-section-index":t.subSectionIndex}})})),1)}),[],!1,null,"6a19c2bf",null);e.default=r.exports;installComponents(r,{UiNumberedFigure:s(1379).default})},1332:function(t,e,s){"use strict";s.r(e);var n=s(1269),i={props:{links:{type:Array,required:!0}},data:function(){return{componentId:"ui-link-list"}}},a=s(61),r=Object(a.a)(i,(function(){var t=this,e=t._self._c;return e(n.a,{staticClass:"px-3 pt-6 pb-9"},t._l(t.links,(function(t,s){return e("UiIconLink",{key:s,attrs:{"link-obj":t}})})),1)}),[],!1,null,null,null);e.default=r.exports;installComponents(r,{UiIconLink:s(1314).default})},1333:function(t,e,s){"use strict";s.r(e);var n=s(1269),i=(s(33),s(35),{mixins:[s(1283).a],props:{subSection:{type:Object,required:!0},subSectionIndex:{type:Number,required:!0}},data:function(){return{componentId:"ui-table-list"}}}),a=s(61),r=Object(a.a)(i,(function(){var t=this,e=t._self._c;return t.subSection.tables?e(n.a,{staticClass:"px-md-16 pb-md-16 px-8 pb-8 pt-0",attrs:{justify:"center"}},t._l(t.subSection.tables,(function(s,n){return e("div",{key:n,style:"max-width:"+s.maxWidth},[e("UiCsvTable",{staticClass:"mx-auto",attrs:{"csv-base-file-name":s.csvBaseFileName,delimiter:s.delimiter?s.delimiter:null,"collapse-large-lists":!s.collapseLargeLists||s.collapseLargeLists,"table-caption":"Table ".concat(t.subSectionIndex+1,".").concat(n+1,": ").concat(s.caption),"table-footnote":s.footnote?s.footnote:null,"items-per-page":s.itemsPerPage?s.itemsPerPage:5}})],1)})),0):t._e()}),[],!1,null,null,null);e.default=r.exports;installComponents(r,{UiCsvTable:s(1315).default})},1348:function(t,e,s){"use strict";s.r(e);var n=s(1270),i=s(1269),a={mixins:[s(1283).a],props:{page:{type:String,default:""}},data:function(){return{componentId:"sections-alternating-sub-sections",markdownFilesDir:this.page}}},r=s(61),l=Object(r.a)(a,(function(){var t=this,e=t._self._c;return e("div",t._l(t.markdownFiles,(function(s,a){return e("section",{key:s.slug,attrs:{id:s.slug}},[e(i.a,{staticClass:"pa-0 pt-md-16 pt-8"}),t._v(" "),e(i.a,{class:{"flex-row-reverse":a%2==1},attrs:{"no-gutters":""}},[e("UiFigureList",{staticClass:"lg-and-up",attrs:{"sub-section":s,"sub-section-index":a}}),t._v(" "),e(n.a,{staticClass:"px-md-8 px-4 pb-0",attrs:{cols:"12",lg:"6","align-self":"center"}},[e(i.a,{staticClass:"px-3 py-2",attrs:{"no-gutters":"",justify:"center"}},[e(n.a,{attrs:{cols:"12"}},[e("UiMainTitle",{attrs:{title:s.title,ingress:s.ingress}})],1),t._v(" "),e(n.a,{attrs:{cols:"12"}},[e("nuxt-content",{attrs:{document:s}})],1),t._v(" "),s.links?e("UiLinkList",{attrs:{links:s.links}}):t._e()],1)],1)],1),t._v(" "),e("UiFigureList",{staticClass:"md-and-down",attrs:{"sub-section":s,"sub-section-index":a}}),t._v(" "),e("UiTableList",{attrs:{"sub-section":s,"sub-section-index":a}})],1)})),0)}),[],!1,null,null,null);e.default=l.exports;installComponents(l,{UiFigureList:s(1331).default,UiMainTitle:s(1303).default,UiLinkList:s(1332).default,UiTableList:s(1333).default})}}]);