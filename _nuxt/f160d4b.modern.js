(window.webpackJsonp=window.webpackJsonp||[]).push([[31,45],{944:function(t,e,s){"use strict";s.r(e);var i=s(945),a={props:{title:{type:String,default:""},subtitle:{type:String,default:""},ingress:{type:String,default:""},info:{type:String,default:""},scaleDownAtSm:{type:Boolean,default:!1}},methods:{compileMarkdown:t=>i.marked.parseInline(t,[])}},n=s(15),o=Object(n.a)(a,(function(){var t=this,e=t._self._c;return e("div",[e("h2",{directives:[{name:"show",rawName:"v-show",value:t.title,expression:"title"}],staticClass:"text-h4 text-center font-weight-black mt-4 mb-8",class:t.scaleDownAtSm?"text-sm-h3":"text-md-h3",domProps:{textContent:t._s(t.title)}}),t._v(" "),e("h3",{directives:[{name:"show",rawName:"v-show",value:t.subtitle,expression:"subtitle"}],staticClass:"text-h6 font-weight-medium font-italic text-center mb-8",class:t.scaleDownAtSm?"text-sm-h5":"text-md-h5",domProps:{textContent:t._s(t.subtitle)}}),t._v(" "),t.ingress?e("h4",{staticClass:"text-h6 text-center mb-4",class:t.subtitle?"font-weight-light":"font-weight-medium font-italic",domProps:{innerHTML:t._s(t.compileMarkdown(t.ingress))}}):e("h4",{staticClass:"text-h6 text-center mb-4",class:t.subtitle?"font-weight-light":"font-weight-medium font-italic"},[t._t("ingress")],2),t._v(" "),t.info?e("p",{staticClass:"text-subtitle-1 font-weight-light text-center mb-4",domProps:{innerHTML:t._s(t.compileMarkdown(t.info))}}):e("p",{staticClass:"text-subtitle-1 font-weight-light text-center mb-4"},[t._t("info")],2)])}),[],!1,null,null,null);e.default=o.exports},957:function(t,e,s){},978:function(t,e,s){"use strict";s(957)},995:function(t,e,s){"use strict";s.r(e);var i=s(945),a=s(53),n={props:{page:{type:String,default:""},subSections:{type:Array,default:()=>[]},imageAssetObjects:{type:Object,default:()=>{}}},data:()=>({mdiGithub:a.w}),methods:{compileMarkdown:t=>i.marked.parseInline(t,[])}},o=(s(978),s(15)),r=s(19),l=s.n(r),c=s(922),u=s(199),m=s(923),p=Object(o.a)(n,(function(){var t=this,e=t._self._c;return e("div",t._l(t.subSections,(function(s,i){return e("section",{key:i,attrs:{id:s.slug}},[e("v-row",{class:{"flex-row-reverse":i%2==1},attrs:{"no-gutters":""}},[e("v-col",{staticClass:"px-md-8 py-md-16 px-11 py-15",attrs:{cols:"12",md:"6","align-self":"center"}},[e("figure",[e("UiSmartImg",{directives:[{name:"show",rawName:"v-show",value:s.img,expression:"subSection.img"}],staticClass:"mx-auto",attrs:{"max-height":t.$vuetify.breakpoint.mdAndUp?"900px":"600px",contain:"","image-asset":t.imageAssetObjects[s.img]}}),t._v(" "),e("figcaption",[e("p",{directives:[{name:"show",rawName:"v-show",value:s.caption,expression:"subSection.caption"}],staticClass:"body-2 font-italic text-center pt-8",domProps:{innerHTML:t._s(t.compileMarkdown("Figure "+(i+1)+": "+s.caption))}},[t._v("\n                Figure "+t._s(i+1)+":\n                "+t._s(t.compileMarkdown(s.caption))+"\n              ")])])],1)]),t._v(" "),e("v-col",{staticClass:"px-md-8 py-md-16 px-4 py-8",attrs:{cols:"12",md:"6","align-self":"center"}},[e("v-row",{staticClass:"pa-3",attrs:{"no-gutters":"",justify:"center"}},[e("v-col",{attrs:{cols:"12"}},[e("UiMainTitle",{attrs:{title:s.title,ingress:s.ingress}})],1),t._v(" "),e("v-col",{attrs:{cols:"12"}},[e("nuxt-content",{attrs:{document:s}})],1),t._v(" "),e("v-col",{directives:[{name:"show",rawName:"v-show",value:s.github_text,expression:"subSection.github_text"}],attrs:{cols:"12"}},[e("v-row",{staticClass:"pa-3",attrs:{justify:"center"}},[e("v-col",{attrs:{cols:"12"}},[e("v-row",{attrs:{"no-gutters":"",justify:"center"}},[e("v-icon",{staticClass:"px-2",attrs:{size:"24px"}},[t._v(t._s(t.mdiGithub))]),t._v(" "),e("div",{staticClass:"font-weight-medium"},[t._v("GitHub repository:")])],1)],1),t._v(" "),e("v-col",{directives:[{name:"show",rawName:"v-show",value:s.github_link,expression:"subSection.github_link"}],staticClass:"pb-6",attrs:{cols:"12",justify:"center"}},[e("v-row",{attrs:{"no-gutters":"",justify:"center"}},[e("a",{attrs:{href:s.github_link}},[t._v(" "+t._s(s.github_text))])])],1)],1)],1)],1)],1)],1)],1)})),0)}),[],!1,null,null,null);e.default=p.exports;l()(p,{UiSmartImg:s(225).default,UiMainTitle:s(944).default}),l()(p,{VCol:c.a,VIcon:u.a,VRow:m.a})}}]);