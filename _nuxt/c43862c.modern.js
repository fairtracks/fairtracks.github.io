(window.webpackJsonp=window.webpackJsonp||[]).push([[44],{1004:function(e,t,r){var n=r(1005);n.__esModule&&(n=n.default),"string"==typeof n&&(n=[[e.i,n,""]]),n.locals&&(e.exports=n.locals);(0,r(11).default)("2e8c002e",n,!0,{sourceMap:!1})},1005:function(e,t,r){var n=r(10)(!1);n.push([e.i,".theme--light.v-subheader{color:rgba(0,0,0,.6)}.theme--dark.v-subheader{color:hsla(0,0%,100%,.7)}.v-subheader{align-items:center;display:flex;height:48px;font-size:.875rem;font-weight:400;padding:0 16px}.v-subheader--inset{margin-left:56px}",""]),e.exports=n},1026:function(e,t,r){"use strict";r(1004);var n=r(14),s=r(6);function i(e,t){var r=Object.keys(e);if(Object.getOwnPropertySymbols){var n=Object.getOwnPropertySymbols(e);t&&(n=n.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),r.push.apply(r,n)}return r}function a(e){for(var t=1;t<arguments.length;t++){var r=null!=arguments[t]?arguments[t]:{};t%2?i(Object(r),!0).forEach((function(t){o(e,t,r[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(r)):i(Object(r)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(r,t))}))}return e}function o(e,t,r){return t in e?Object.defineProperty(e,t,{value:r,enumerable:!0,configurable:!0,writable:!0}):e[t]=r,e}t.a=Object(s.a)(n.a).extend({name:"v-subheader",props:{inset:Boolean},render(e){return e("div",{staticClass:"v-subheader",class:a({"v-subheader--inset":this.inset},this.themeClasses),attrs:this.$attrs,on:this.$listeners},this.$slots.default)}})},1175:function(e,t,r){"use strict";r.r(t);var n={props:{listHeader:{type:String,default:""},referenceList:{type:Array,default:()=>[]},referenceStore:{type:Object,default:()=>{}}}},s=r(16),i=r(21),a=r.n(i),o=r(208),l=r(200),c=r(105),u=r(42),p=r(1026),f=Object(s.a)(n,(function(){var e=this,t=e.$createElement,r=e._self._c||t;return r("v-card",[r("v-list",{attrs:{dense:""}},[r("v-subheader",[e._v(e._s(e.listHeader))]),e._v(" "),e._l(e.referenceList,(function(t,n){return r("v-list-item",{key:n},[r("v-list-item-content",[r("v-list-item-title",[r("nuxt-link",{attrs:{to:"referenceStore[listItem.id].to"}},[e._v("\n            "+e._s(e.referenceStore[t.id].title)+"\n          ")])],1),e._v(" "),r("v-list-item-subtitle",[e._v("\n          "+e._s(t.description)+"\n        ")])],1)],1)}))],2)],1)}),[],!1,null,null,null);t.default=f.exports;a()(f,{VCard:o.a,VList:l.a,VListItem:c.a,VListItemContent:u.a,VListItemSubtitle:u.b,VListItemTitle:u.c,VSubheader:p.a})}}]);