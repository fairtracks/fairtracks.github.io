(window.webpackJsonp=window.webpackJsonp||[]).push([[40],{1009:function(e,t,a){"use strict";a(947)},1010:function(e,t,a){var s=a(10)(!1);s.push([e.i,".table_header{vertical-align:top}",""]),e.exports=s},1040:function(e,t,a){"use strict";a.r(t);var s=a(860),r=a(53),l={props:{headers:{type:Array,default:()=>[]},items:{type:Array,default:()=>[]},tableNumber:{type:Number,default:1},tableCaption:{type:String,default:""},tableFootnote:{type:String,default:""},itemsPerPage:{type:Number,default:5}},data:()=>({mdiMagnify:r.s,search:""}),methods:{createHeaders:e=>e.map(((e,t)=>({text:e,value:String(t),class:"table_header"}))),createItems:e=>e.map((e=>Object.assign({},e))),compileMarkdown:e=>s.marked.parseInline(e,[])}},n=(a(1009),a(24)),i=a(33),o=a.n(i),c=a(150),d=a(841),p=a(1028),u=a(842),f=a(878),m=Object(n.a)(l,(function(){var e=this,t=e.$createElement,a=e._self._c||t;return a("v-row",{staticClass:"px-4",attrs:{"no-gutters":""}},[a("v-col",{attrs:{cols:"12"}},[a("v-card-title",[a("v-text-field",{attrs:{"append-icon":e.mdiMagnify,label:"Search","single-line":"","hide-details":""},model:{value:e.search,callback:function(t){e.search=t},expression:"search"}})],1)],1),e._v(" "),a("v-col",{attrs:{cols:"12"}},[a("v-data-table",{attrs:{dense:"",search:e.search,headers:e.createHeaders(e.headers),items:e.createItems(e.items),"items-per-page":e.itemsPerPage,height:"100%","fixed-header":""},scopedSlots:e._u([{key:"item",fn:function(t){var s=t.item;return[a("tr",e._l(s,(function(t){return a("td",{key:t.name,domProps:{innerHTML:e._s(e.compileMarkdown(t))}})})),0)]}}])})],1),e._v(" "),a("v-col",{attrs:{cols:"12"}},[a("p",{staticClass:"body-2 font-italic text-center"},[e._v("\n      Table "+e._s(e.tableNumber)+": "+e._s(e.tableCaption)+"\n    ")])]),e._v(" "),a("v-col",{attrs:{cols:"12"}},[a("p",{staticClass:"body-2 font-italic text-center"},[e._v("\n      "+e._s(e.tableFootnote)+"\n    ")])])],1)}),[],!1,null,null,null);t.default=m.exports;o()(m,{VCardTitle:c.d,VCol:d.a,VDataTable:p.a,VRow:u.a,VTextField:f.a})},947:function(e,t,a){var s=a(1010);s.__esModule&&(s=s.default),"string"==typeof s&&(s=[[e.i,s,""]]),s.locals&&(e.exports=s.locals);(0,a(11).default)("1d0d7d80",s,!0,{sourceMap:!1})}}]);