(window.webpackJsonp=window.webpackJsonp||[]).push([[17],{632:function(t,e,n){},636:function(t,e,n){"use strict";n(632)},641:function(t,e,n){"use strict";n.r(e);var o=n(639),r={props:{page:{type:String,default:""},subSections:{type:Array,default:function(){return[]}}},methods:{compileMarkdown:function(t){return o.marked.parseInline(t,[])}}},c=(n(636),n(39)),l=n(70),d=n.n(l),m=n(619),v=n(626),f=n(233),_=n(185),x=n(620),component=Object(c.a)(r,(function(){var t=this,e=t.$createElement,n=t._self._c||e;return n("section",{attrs:{id:"subsections-alternating"}},t._l(t.subSections,(function(e,o){return n("v-row",{key:o,class:{"flex-row-reverse":o%2==1},attrs:{id:e.slug,"no-gutters":""}},[n("v-col",{staticClass:"px-md-8 py-md-16 px-11 py-15 ma-auto",attrs:{cols:"12",md:"6"}},[n("v-img",{attrs:{"max-height":t.$vuetify.breakpoint.mdAndUp?"900":"500",width:"100%",contain:"",src:t.createAssetPath("illustrations",t.page,e.img)}}),t._v(" "),e.caption?n("v-container",{staticClass:"body-2 font-italic text-center pt-8",domProps:{innerHTML:t._s(t.compileMarkdown("Figure "+(o+1)+": "+e.caption))}},[t._v("\n        Figure "+t._s(o+1)+": "+t._s(t.compileMarkdown(e.caption))+"\n      ")]):t._e()],1),t._v(" "),n("v-col",{staticClass:"px-md-8 py-md-16 px-4 py-8",attrs:{cols:"12",md:"6","align-self":"center"}},[n("v-container",[n("h2",{staticClass:"text-h3 text-center font-weight-black",domProps:{textContent:t._s(e.title)}}),t._v(" "),n("h3",{staticClass:"text-h5 text-uppercase font-weight-light text-center my-8",domProps:{textContent:t._s(e.ingress)}}),t._v(" "),n("section",[n("nuxt-content",{attrs:{document:e}})],1)]),t._v(" "),e.github_text?n("v-row",{staticClass:"d-flex justify-center"},[n("v-col",{staticClass:"d-flex justify-center",attrs:{cols:"12"}},[n("v-icon",{staticClass:"px-2",attrs:{size:"24px"}},[t._v("mdi-github")]),t._v(" "),n("div",{staticClass:"font-weight-medium"},[t._v("GitHub repository:")])],1),t._v(" "),n("v-col",{staticClass:"d-flex justify-center",attrs:{cols:"12"}},[n("a",{attrs:{href:e.github_link}},[t._v(" "+t._s(e.github_text))])])],1):t._e()],1)],1)})),1)}),[],!1,null,null,null);e.default=component.exports;d()(component,{VCol:m.a,VContainer:v.a,VIcon:f.a,VImg:_.a,VRow:x.a})}}]);