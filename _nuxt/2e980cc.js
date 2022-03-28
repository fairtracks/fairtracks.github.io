(window.webpackJsonp=window.webpackJsonp||[]).push([[40,47,48],{1052:function(e,t,r){"use strict";r.r(t);var s=r(1053),n={props:{title:{type:String,default:""},subtitle:{type:String,default:""},ingress:{type:String,default:""},info:{type:String,default:""},scaleDownAtSm:{type:Boolean,default:!1}},methods:{compileMarkdown:function(e){return s.marked.parseInline(e,[])}}},i=r(25),o=Object(i.a)(n,(function(){var e=this,t=e.$createElement,r=e._self._c||t;return r("div",[r("h2",{directives:[{name:"show",rawName:"v-show",value:e.title,expression:"title"}],staticClass:"text-h4 text-center font-weight-black mt-4 mb-8",class:e.scaleDownAtSm?"text-sm-h3":"text-md-h3",domProps:{textContent:e._s(e.title)}}),e._v(" "),r("h3",{directives:[{name:"show",rawName:"v-show",value:e.subtitle,expression:"subtitle"}],staticClass:"text-h6 font-weight-medium font-italic text-center mb-8",class:e.scaleDownAtSm?"text-sm-h5":"text-md-h5",domProps:{textContent:e._s(e.subtitle)}}),e._v(" "),r("h4",{directives:[{name:"show",rawName:"v-show",value:e.ingress,expression:"ingress"}],staticClass:"text-h6 text-center mb-4",class:e.subtitle?"font-weight-light":"font-weight-medium font-italic",domProps:{innerHTML:e._s(e.compileMarkdown(e.ingress))}}),e._v(" "),r("p",{directives:[{name:"show",rawName:"v-show",value:e.info,expression:"info"}],staticClass:"text-subtitle-1 font-weight-light text-center mb-4",domProps:{innerHTML:e._s(e.compileMarkdown(e.info))}})])}),[],!1,null,null,null);t.default=o.exports},1062:function(e,t,r){var s=r(1063);s.__esModule&&(s=s.default),"string"==typeof s&&(s=[[e.i,s,""]]),s.locals&&(e.exports=s.locals);(0,r(13).default)("2e8c002e",s,!0,{sourceMap:!1})},1063:function(e,t,r){var s=r(12)(!1);s.push([e.i,".theme--light.v-subheader{color:rgba(0,0,0,.6)}.theme--dark.v-subheader{color:hsla(0,0%,100%,.7)}.v-subheader{align-items:center;display:flex;height:48px;font-size:.875rem;font-weight:400;padding:0 16px}.v-subheader--inset{margin-left:56px}",""]),e.exports=s},1066:function(e,t,r){"use strict";r.r(t);var s=r(1053),n={props:{sectionId:{type:String,default:""},sectionTitle:{type:String,default:""},introText:{type:String,default:""},referenceLists:{type:Array,default:function(){return[]}},referenceStore:{type:Object,default:function(){}},listsInSecondCol:{type:Number,default:2}},computed:{slicedReferenceLists:function(){return[this.referenceLists.slice(0,this.listsInSecondCol),this.referenceLists.slice(this.listsInSecondCol)]}},methods:{compileMarkdown:function(e){return s.marked.parseInline(e,[])}}},i=r(25),o=r(30),l=r.n(o),a=r(1039),c=r(1040),u=Object(i.a)(n,(function(){var e=this,t=e.$createElement,r=e._self._c||t;return r("section",{attrs:{id:e.sectionId}},[r("UiMainTitle",{attrs:{title:e.sectionTitle}}),e._v(" "),r("v-row",{staticClass:"fill-height",attrs:{justify:"space-around"}},[r("v-col",{attrs:{cols:"4"}},[r("p",{domProps:{innerHTML:e._s(e.compileMarkdown(e.introText))}})]),e._v(" "),e._l([1,2],(function(t){return r("v-col",{key:t,attrs:{cols:"4"}},[r("v-row",e._l(e.slicedReferenceLists[t-1],(function(t,s){return r("v-col",{key:s,attrs:{cols:"12"}},[r("UiListOfReferences",{attrs:{"list-header":t.header,"reference-list":t.references,"reference-store":e.referenceStore}})],1)})),1)],1)}))],2)],1)}),[],!1,null,null,null);t.default=u.exports;l()(u,{UiMainTitle:r(1052).default,UiListOfReferences:r(1067).default}),l()(u,{VCol:a.a,VRow:c.a})},1067:function(e,t,r){"use strict";r.r(t);var s={props:{listHeader:{type:String,default:""},referenceList:{type:Array,default:function(){return[]}},referenceStore:{type:Object,default:function(){}}}},n=r(25),i=r(30),o=r.n(i),l=r(236),a=r(228),c=r(130),u=r(54),f=r(1071),d=Object(n.a)(s,(function(){var e=this,t=e.$createElement,r=e._self._c||t;return r("v-card",[r("v-list",{attrs:{dense:""}},[r("v-subheader",[e._v(e._s(e.listHeader))]),e._v(" "),e._l(e.referenceList,(function(t,s){return r("v-list-item",{key:s},[r("v-list-item-content",[r("v-list-item-title",[r("nuxt-link",{attrs:{to:"referenceStore[listItem.id].to"}},[e._v("\n            "+e._s(e.referenceStore[t.id].title)+"\n          ")])],1),e._v(" "),r("v-list-item-subtitle",[e._v("\n          "+e._s(t.description)+"\n        ")])],1)],1)}))],2)],1)}),[],!1,null,null,null);t.default=d.exports;o()(d,{VCard:l.a,VList:a.a,VListItem:c.a,VListItemContent:u.a,VListItemSubtitle:u.b,VListItemTitle:u.c,VSubheader:f.a})},1071:function(e,t,r){"use strict";r(1062);var s=r(19),n=r(9);function i(e,t){var r=Object.keys(e);if(Object.getOwnPropertySymbols){var s=Object.getOwnPropertySymbols(e);t&&(s=s.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),r.push.apply(r,s)}return r}function o(e){for(var t=1;t<arguments.length;t++){var r=null!=arguments[t]?arguments[t]:{};t%2?i(Object(r),!0).forEach((function(t){l(e,t,r[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(r)):i(Object(r)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(r,t))}))}return e}function l(e,t,r){return t in e?Object.defineProperty(e,t,{value:r,enumerable:!0,configurable:!0,writable:!0}):e[t]=r,e}t.a=Object(n.a)(s.a).extend({name:"v-subheader",props:{inset:Boolean},render:function(e){return e("div",{staticClass:"v-subheader",class:o({"v-subheader--inset":this.inset},this.themeClasses),attrs:this.$attrs,on:this.$listeners},this.$slots.default)}})}}]);