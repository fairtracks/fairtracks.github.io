(window.webpackJsonp=window.webpackJsonp||[]).push([[43],{1254:function(t,e,i){"use strict";var n=i(1275);e.a={computed:{markdownFiles:function(){return this.markdownFilesDir?this.$loadMarkdownFilesInDir(this.markdownFilesDir):[]}},methods:{compileMarkdown:function(t){return t&&"string"==typeof t?n.marked.parseInline(t,{breaks:!0}):t}}}},1255:function(t,e,i){"use strict";i.d(e,"a",(function(){return o}));var n=i(126),o="lateRendererMounted";e.b={computed:{isLateRenderer:function(){return"componentId"in this&&n.MD_REG_LATE_RENDERERS.has(this.componentId)}},mounted:function(){this.isLateRenderer&&this.$nuxt.$emit(o)}}},1288:function(t,e,i){var n=i(1317);n.__esModule&&(n=n.default),"string"==typeof n&&(n=[[t.i,n,""]]),n.locals&&(t.exports=n.locals);(0,i(31).default)("0776a746",n,!0,{sourceMap:!1})},1314:function(t,e,i){var n=i(1315);n.__esModule&&(n=n.default),"string"==typeof n&&(n=[[t.i,n,""]]),n.locals&&(t.exports=n.locals);(0,i(31).default)("dc0628f2",n,!0,{sourceMap:!1})},1315:function(t,e,i){var n=i(30)(!1);n.push([t.i,".v-tooltip{display:none}.v-tooltip--attached{display:inline}.v-tooltip__content{background:rgba(97,97,97,.9);color:#fff;border-radius:4px;font-size:14px;line-height:22px;display:inline-block;padding:5px 16px;position:absolute;text-transform:none;width:auto;opacity:0;pointer-events:none}.v-tooltip__content.menuable__content__active{opacity:.9}.v-tooltip__content--fixed{position:fixed}.v-tooltip__content[class*=-active]{-webkit-transition-timing-function:cubic-bezier(0,0,.2,1);transition-timing-function:cubic-bezier(0,0,.2,1)}",""]),t.exports=n},1316:function(t,e,i){"use strict";i(1288)},1317:function(t,e,i){var n=i(30)(!1);n.push([t.i,".table_header{vertical-align:top}",""]),t.exports=n},1345:function(t,e,i){"use strict";i.r(e);var n=i(246),o=i(1240),s=i(1248),a=i(1239),r=i(155),c=i(1),l=(i(35),i(74),i(1314),i(200)),u=i(45),h=i(248),d=i(162),p=i(329),f=i(0),m=i(22),v=i(7),g=Object(v.a)(u.a,h.a,d.a,p.a).extend({name:"v-tooltip",props:{closeDelay:{type:[Number,String],default:0},disabled:Boolean,openDelay:{type:[Number,String],default:0},openOnHover:{type:Boolean,default:!0},openOnFocus:{type:Boolean,default:!0},tag:{type:String,default:"span"},transition:String},data:function(){return{calculatedMinWidth:0,closeDependents:!1}},computed:{calculatedLeft:function(){var t=this.dimensions,e=t.activator,i=t.content,n=!(this.bottom||this.left||this.top||this.right),o=!1!==this.attach?e.offsetLeft:e.left,s=0;return this.top||this.bottom||n?s=o+e.width/2-i.width/2:(this.left||this.right)&&(s=o+(this.right?e.width:-i.width)+(this.right?10:-10)),this.nudgeLeft&&(s-=parseInt(this.nudgeLeft)),this.nudgeRight&&(s+=parseInt(this.nudgeRight)),"".concat(this.calcXOverflow(s,this.dimensions.content.width),"px")},calculatedTop:function(){var t=this.dimensions,e=t.activator,i=t.content,n=!1!==this.attach?e.offsetTop:e.top,o=0;return this.top||this.bottom?o=n+(this.bottom?e.height:-i.height)+(this.bottom?10:-10):(this.left||this.right)&&(o=n+e.height/2-i.height/2),this.nudgeTop&&(o-=parseInt(this.nudgeTop)),this.nudgeBottom&&(o+=parseInt(this.nudgeBottom)),!1===this.attach&&(o+=this.pageYOffset),"".concat(this.calcYOverflow(o),"px")},classes:function(){return{"v-tooltip--top":this.top,"v-tooltip--right":this.right,"v-tooltip--bottom":this.bottom,"v-tooltip--left":this.left,"v-tooltip--attached":""===this.attach||!0===this.attach||"attach"===this.attach}},computedTransition:function(){return this.transition?this.transition:this.isActive?"scale-transition":"fade-transition"},offsetY:function(){return this.top||this.bottom},offsetX:function(){return this.left||this.right},styles:function(){return{left:this.calculatedLeft,maxWidth:Object(f.h)(this.maxWidth),minWidth:Object(f.h)(this.minWidth),top:this.calculatedTop,zIndex:this.zIndex||this.activeZIndex}}},beforeMount:function(){var t=this;this.$nextTick((function(){t.value&&t.callActivate()}))},mounted:function(){"v-slot"===Object(f.s)(this,"activator",!0)&&Object(m.b)("v-tooltip's activator slot must be bound, try '<template #activator=\"data\"><v-btn v-on=\"data.on>'",this)},methods:{activate:function(){this.updateDimensions(),requestAnimationFrame(this.startTransition)},deactivate:function(){this.runDelay("close")},genActivatorListeners:function(){var t=this,e=l.a.options.methods.genActivatorListeners.call(this);return this.openOnFocus&&(e.focus=function(e){t.getActivator(e),t.runDelay("open")},e.blur=function(e){t.getActivator(e),t.runDelay("close")}),e.keydown=function(e){e.keyCode===f.w.esc&&(t.getActivator(e),t.runDelay("close"))},e},genActivatorAttributes:function(){return{"aria-haspopup":!0,"aria-expanded":String(this.isActive)}},genTransition:function(){var t=this.genContent();return this.computedTransition?this.$createElement("transition",{props:{name:this.computedTransition}},[t]):t},genContent:function(){var t;return this.$createElement("div",this.setBackgroundColor(this.color,{staticClass:"v-tooltip__content",class:(t={},Object(c.a)(t,this.contentClass,!0),Object(c.a)(t,"menuable__content__active",this.isActive),Object(c.a)(t,"v-tooltip__content--fixed",this.activatorFixed),t),style:this.styles,attrs:this.getScopeIdAttrs(),directives:[{name:"show",value:this.isContentActive}],ref:"content"}),this.getContentSlot())}},render:function(t){var e=this;return t(this.tag,{staticClass:"v-tooltip",class:this.classes},[this.showLazyContent((function(){return[e.genTransition()]})),this.genActivator()])}}),b=(i(41),i(252),i(42),i(52),i(56),i(57),i(69),i(86)),_=i(1254),y=i(1255),x={mixins:[_.a,y.b],props:{csvBaseFileName:{type:String,required:!0},delimiter:{type:String,default:""},collapseLargeLists:{type:Boolean,default:!0},tableCaption:{type:String,default:""},tableFootnote:{type:String,default:""},itemsPerPage:{type:Number,required:!0}},data:function(){return{componentId:"ui-csv-table",search:""}},computed:{baseFilePath:function(){return"/data/tables/"+this.csvBaseFileName},headers:function(){return this.createHeaders(this.$nuxt.context.store.getters[b.DATA_G_GET_CONTENTS_BODY_ALL_HEADERS](this.baseFilePath))},items:function(){return this.$nuxt.context.store.getters[b.DATA_G_GET_CONTENTS_BODY_POSSIBLY_SPLIT_TO_ARRAYS](this.baseFilePath,this.delimiter)}},methods:{getMobileBreakpoint:function(){return null},createHeaders:function(t){return t.map((function(t){return{text:t,value:t,class:"table_header"}}))},isLargeList:function(t){return!(!this.collapseLargeLists||!Array.isArray(t))&&t.length>3},parseArrayToString:function(t){return this.compileMarkdown(t.join(",\n"))},isArray:function(t){return Array.isArray(t)}}},A=(i(1316),i(61)),w=Object(A.a)(x,(function(){var t=this,e=t._self._c;return e(a.a,{staticClass:"px-4",attrs:{"no-gutters":""}},[e(o.a,{attrs:{cols:"12"}},[e(n.d,[e(r.a,{attrs:{label:"Search","single-line":"","hide-details":""},scopedSlots:t._u([{key:"append",fn:function(){return[e("UiSmartIcon",{attrs:{name:"magnify"}})]},proxy:!0}]),model:{value:t.search,callback:function(e){t.search=e},expression:"search"}})],1)],1),t._v(" "),e(o.a,{attrs:{cols:"12"}},[e(s.a,{attrs:{dense:"",search:t.search,headers:t.headers,items:t.items,"items-per-page":t.itemsPerPage,height:"100%","fixed-header":"","mobile-breakpoint":t.getMobileBreakpoint()},scopedSlots:t._u([{key:"item",fn:function(i){var n=i.item;return[e("tr",t._l(n,(function(i){return e("td",{key:i.name},[t.isLargeList(i)?e(g,{attrs:{bottom:"",transition:"transition-duration: 1s"},scopedSlots:t._u([{key:"activator",fn:function(i){var n=i.on,o=i.attrs;return[e("span",t._g(t._b({staticStyle:{"text-align":"center","text-decoration":"underline dotted"}},"span",o,!1),n),[t._v("\n                  Multiple\n                ")])]}}],null,!0)},[t._v(" "),e("div",{staticClass:"d-flex flex-column",staticStyle:{"text-align":"center"}},[e("span",{domProps:{innerHTML:t._s(t.parseArrayToString(i))}})])]):t.isArray(i)?e("span",{domProps:{innerHTML:t._s(t.parseArrayToString(i))}}):e("span",{domProps:{innerHTML:t._s(t.compileMarkdown(i))}})],1)})),0)]}}])})],1),t._v(" "),e(o.a,{attrs:{cols:"12"}},[e("p",{directives:[{name:"show",rawName:"v-show",value:t.tableCaption,expression:"tableCaption"}],staticClass:"body-2 font-italic text-center pt-6",domProps:{innerHTML:t._s(t.compileMarkdown(t.tableCaption))}})]),t._v(" "),e(o.a,{attrs:{cols:"12"}},[e("p",{staticClass:"body-2 font-italic text-center pt-6"},[t._v("\n      "+t._s(t.tableFootnote)+"\n    ")])])],1)}),[],!1,null,null,null);e.default=w.exports;installComponents(w,{UiSmartIcon:i(402).default})}}]);