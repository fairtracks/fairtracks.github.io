(window.webpackJsonp=window.webpackJsonp||[]).push([[54],{1240:function(t,e,a){"use strict";var s=a(1269);e.a={data:function(){return{markdownFiles:[]}},created:function(){this.markdownFilesDir&&(this.markdownFiles=this.$loadMarkdownFilesInDir(this.markdownFilesDir))},methods:{compileMarkdown:function(t){return t&&"string"==typeof t?s.marked.parseInline(t,{breaks:!0}):t}}}},1480:function(t,e,a){"use strict";a.r(e);var s=a(1228),n=a(1227),i={mixins:[a(1240).a],props:{quote:{type:String,default:""},citation:{type:String,default:""}},data:function(){return{componentId:"ui-quote-text"}},methods:{themeBasedClass:function(t){return"grey--text ".concat(this.$vuetify.theme.dark?t?"text--lighten-1":"text--lighten-3":t?"text--lighten-1":"text--darken-2")}}},o=a(61),r=Object(o.a)(i,(function(){var t=this,e=t._self._c;return e("div",{staticClass:"pa-4"},[e(n.a,[e(s.a,{attrs:{cols:"1"}},[e("UiSmartIcon",{class:t.themeBasedClass(!0),attrs:{name:"format-quote-open","x-large":""}})],1),t._v(" "),e(s.a,{attrs:{cols:"10"}},[e("p",{staticClass:"ma-0 text-h6 font-italic text-center",class:t.themeBasedClass(!1),domProps:{textContent:t._s(t.quote)}})]),t._v(" "),e(s.a,{attrs:{cols:"1"}},[e("UiSmartIcon",{class:t.themeBasedClass(!0),attrs:{name:"format-quote-close","x-large":""}})],1)],1),t._v(" "),t.citation?e(n.a,{staticClass:"pt-2 px-4 justify-end"},[e("p",{staticClass:"body-2 font-italic",domProps:{innerHTML:t._s(t.compileMarkdown(t.citation))}})]):t._e()],1)}),[],!1,null,null,null);e.default=r.exports;installComponents(r,{UiSmartIcon:a(402).default})}}]);