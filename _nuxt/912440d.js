(window.webpackJsonp=window.webpackJsonp||[]).push([[23,15,17],{616:function(t,e,r){},617:function(t,e,r){"use strict";r(616)},618:function(t,e,r){"use strict";r.r(e);var n={props:{pageHeader:{type:String},pageHeaderImages:{type:Array,default:function(){return[]}}}},c=(r(617),r(38)),o=r(69),l=r.n(o),d=r(185),f=r(240),h=r(230),v=r(608),component=Object(c.a)(n,(function(){var t=this,e=t.$createElement,r=t._self._c||e;return r("section",{attrs:{id:"page-header-banner"}},[r("v-row",{staticClass:"ma-0"},[r("v-responsive",{attrs:{"aspect-ratio":567/56.3,"max-height":"150px","min-height":"75px"}},[r("v-row",{staticClass:"ma-0"},t._l(t.pageHeaderImages,(function(t,i){return r("v-img",{key:i,staticClass:"gradient-fill-header",attrs:{width:"33%",height:"100%","aspect-ratio":189/56.3,src:t,"max-height":"150px","min-height":"75px",dark:""}})})),1),t._v(" "),r("v-overlay",{attrs:{absolute:"",opacity:"0"}},[r("h1",{staticClass:"text-md-h2 text-sm-h3 text-h4 font-weight-black text-center"},[t._v("\n          "+t._s(t.pageHeader.toUpperCase())+"\n        ")])])],1)],1)],1)}),[],!1,null,"79fba40c",null);e.default=component.exports;l()(component,{VImg:d.a,VOverlay:f.a,VResponsive:h.a,VRow:v.a})},620:function(t,e,r){},623:function(t,e,r){"use strict";r(620)},629:function(t,e,r){"use strict";r.r(e);var n=r(627),c={props:{page:{type:String,default:""},subSections:{type:Array,default:function(){return[]}}},methods:{compileMarkdown:function(t){return n.marked.parseInline(t,[])}}},o=(r(623),r(38)),l=r(69),d=r.n(l),f=r(607),h=r(614),v=r(232),m=r(185),x=r(608),component=Object(o.a)(c,(function(){var t=this,e=t.$createElement,r=t._self._c||e;return r("section",{attrs:{id:"subsections-alternating"}},t._l(t.subSections,(function(e,n){return r("v-row",{key:n,class:{"flex-row-reverse":n%2==1},attrs:{id:e.slug,"no-gutters":""}},[r("v-col",{staticClass:"pa-md-0 px-11 py-15",attrs:{cols:"12",md:"6","align-self":"center"}},[r("v-img",{attrs:{"max-height":t.$vuetify.breakpoint.mdAndUp?"900":"500",width:"100%",contain:"",src:t.createAssetPath("illustrations",t.page,e.img)}}),t._v(" "),e.caption?r("v-container",{staticClass:"body-2 font-italic text-center pt-8",domProps:{innerHTML:t._s(t.compileMarkdown("Figure "+(n+1)+": "+e.caption))}},[t._v("\n        Figure "+t._s(n+1)+": "+t._s(t.compileMarkdown(e.caption))+"\n      ")]):t._e()],1),t._v(" "),r("v-col",{staticClass:"px-md-8 py-md-16 px-4 py-8",attrs:{cols:"12",md:"6","align-self":"center"}},[r("v-container",[r("h2",{staticClass:"text-h3 text-center font-weight-black",domProps:{textContent:t._s(e.title)}}),t._v(" "),r("h3",{staticClass:"text-h5 text-uppercase font-weight-light text-center my-8",domProps:{textContent:t._s(e.ingress)}}),t._v(" "),r("section",[r("nuxt-content",{attrs:{document:e}})],1)]),t._v(" "),e.github_text?r("v-row",{staticClass:"d-flex justify-center"},[r("v-col",{staticClass:"d-flex justify-center",attrs:{cols:"12"}},[r("v-icon",{staticClass:"px-2",attrs:{size:"24px"}},[t._v("mdi-github")]),t._v(" "),r("div",{staticClass:"font-weight-medium"},[t._v("GitHub repository:")])],1),t._v(" "),r("v-col",{staticClass:"d-flex justify-center",attrs:{cols:"12"}},[r("a",{attrs:{href:e.github_url}},[t._v(" "+t._s(e.github_text))])])],1):t._e()],1)],1)})),1)}),[],!1,null,null,null);e.default=component.exports;d()(component,{VCol:f.a,VContainer:h.a,VIcon:v.a,VImg:m.a,VRow:x.a})},703:function(t,e,r){"use strict";r.r(e);var n=r(28),c=(r(102),{asyncData:function(t){return Object(n.a)(regeneratorRuntime.mark((function e(){var r,n;return regeneratorRuntime.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return r=t.$content,t.params,e.next=3,r("features").sortBy("slug","asc").fetch();case 3:return n=e.sent,e.abrupt("return",{markdownFiles:n});case 5:case"end":return e.stop()}}),e)})))()},data:function(){return{pageHeader:"Features",pageHeaderImages:[this.createAssetPath("illustrations","tracktypes","VP.svg"),this.createAssetPath("illustrations","tracktypes","VS.svg"),this.createAssetPath("illustrations","tracktypes","SF.svg")]}},head:function(){return{title:"Features",meta:[]}}}),o=r(38),l=r(69),d=r.n(l),f=r(607),h=r(608),component=Object(o.a)(c,(function(){var t=this,e=t.$createElement,r=t._self._c||e;return r("section",[r("v-row",{attrs:{"no-gutters":""}},[r("v-col",{attrs:{cols:"12"}},[r("SectionsPageHeaderBanner",{attrs:{"page-header":t.pageHeader,"page-header-images":t.pageHeaderImages}})],1)],1),t._v(" "),r("SectionsSubSectionsAlternating",{attrs:{page:"features","sub-sections":t.markdownFiles}})],1)}),[],!1,null,null,null);e.default=component.exports;d()(component,{SectionsPageHeaderBanner:r(618).default,SectionsSubSectionsAlternating:r(629).default}),d()(component,{VCol:f.a,VRow:h.a})}}]);