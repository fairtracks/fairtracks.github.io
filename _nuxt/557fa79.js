(window.webpackJsonp=window.webpackJsonp||[]).push([[30],{1214:function(t,e,r){"use strict";var n=r(1250);e.a={data:function(){return{markdownFiles:[]}},created:function(){this.markdownFilesDir&&(this.markdownFiles=this.$loadMarkdownFilesInDir(this.markdownFilesDir))},methods:{compileMarkdown:function(t){return t&&"string"==typeof t?n.marked.parseInline(t,{breaks:!0}):t}}}},1217:function(t,e,r){"use strict";var n=r(37);r(4),r(33),r(59),r(73),r(161),r(196);e.a={computed:{cssVars:function(){var t={};return this.createRgbVarsForThemes(this.$vuetify.theme.themes,t),t}},methods:{isObject:function(t){return"[object Object]"===Object.prototype.toString.call(t)},hexToRgb:function(t){var e=0,r=0,n=0;return 4===t.length?(e="0x"+t[1]+t[1],r="0x"+t[2]+t[2],n="0x"+t[3]+t[3]):7===t.length&&(e="0x"+t[1]+t[2],r="0x"+t[3]+t[4],n="0x"+t[5]+t[6]),"".concat(+e,", ").concat(+r,", ").concat(+n)},generateRgbVar:function(t,e,r){var n=this.hexToRgb(e);n.includes("NaN")||(r["--v-".concat(t,"-rgb")]=n)},createRgbVarsForThemes:function(t,e){if(void 0!==t)for(var r=0,s=Object.values(t);r<s.length;r++)for(var i=s[r],o=0,a=Object.entries(i);o<a.length;o++){var c=Object(n.a)(a[o],2),l=c[0],u=c[1];if(this.isObject(u))for(var f=0,h=Object.entries(u);f<h.length;f++){var p=Object(n.a)(h[f],2),d=p[0],v=p[1];this.generateRgbVar("".concat(l,"-").concat(d),v,e)}else this.generateRgbVar(l,u,e)}}}}},1251:function(t,e,r){r(3)({target:"Math",stat:!0},{sign:r(623)})},1252:function(t,e,r){var n=r(1253);n.__esModule&&(n=n.default),"string"==typeof n&&(n=[[t.i,n,""]]),n.locals&&(t.exports=n.locals);(0,r(31).default)("8f7a87bc",n,!0,{sourceMap:!1})},1253:function(t,e,r){var n=r(30)(!1);n.push([t.i,".v-slide-group{display:-webkit-box;display:-ms-flexbox;display:flex}.v-slide-group:not(.v-slide-group--has-affixes)>.v-slide-group__next,.v-slide-group:not(.v-slide-group--has-affixes)>.v-slide-group__prev{display:none}.v-slide-group.v-item-group>.v-slide-group__next,.v-slide-group.v-item-group>.v-slide-group__prev{cursor:pointer}.v-slide-item{display:-webkit-inline-box;display:-ms-inline-flexbox;display:inline-flex;-webkit-box-flex:0;-ms-flex:0 1 auto;flex:0 1 auto}.v-slide-group__next,.v-slide-group__prev{-webkit-box-align:center;-ms-flex-align:center;align-items:center;display:-webkit-box;display:-ms-flexbox;display:flex;-webkit-box-flex:0;-ms-flex:0 1 52px;flex:0 1 52px;-webkit-box-pack:center;-ms-flex-pack:center;justify-content:center;min-width:52px}.v-slide-group__content{-ms-flex:1 0 auto;flex:1 0 auto;position:relative;-webkit-transition:.3s cubic-bezier(.25,.8,.5,1);transition:.3s cubic-bezier(.25,.8,.5,1);white-space:nowrap}.v-slide-group__content,.v-slide-group__wrapper{display:-webkit-box;display:-ms-flexbox;display:flex;-webkit-box-flex:1}.v-slide-group__wrapper{contain:content;-ms-flex:1 1 auto;flex:1 1 auto;overflow:hidden}.v-slide-group__next--disabled,.v-slide-group__prev--disabled{pointer-events:none}",""]),t.exports=n},1257:function(t,e,r){"use strict";r.d(e,"a",(function(){return m}));r(14),r(9),r(15),r(4),r(16),r(5),r(17),r(25),r(10),r(11),r(12),r(13),r(26),r(24),r(23),r(42),r(67),r(49),r(41),r(64),r(66),r(77),r(52),r(58),r(43);var n=r(1),s=(r(1251),r(59),r(33),r(50),r(1252),r(71)),i=r(146),o=r(248),a=r(171),c=r(168),l=r(405),u=r(7),f=r(0);function h(t,e){var r="undefined"!=typeof Symbol&&t[Symbol.iterator]||t["@@iterator"];if(!r){if(Array.isArray(t)||(r=function(t,e){if(!t)return;if("string"==typeof t)return p(t,e);var r=Object.prototype.toString.call(t).slice(8,-1);"Object"===r&&t.constructor&&(r=t.constructor.name);if("Map"===r||"Set"===r)return Array.from(t);if("Arguments"===r||/^(?:Ui|I)nt(?:8|16|32)(?:Clamped)?Array$/.test(r))return p(t,e)}(t))||e&&t&&"number"==typeof t.length){r&&(t=r);var n=0,s=function(){};return{s:s,n:function(){return n>=t.length?{done:!0}:{done:!1,value:t[n++]}},e:function(t){throw t},f:s}}throw new TypeError("Invalid attempt to iterate non-iterable instance.\nIn order to be iterable, non-array objects must have a [Symbol.iterator]() method.")}var i,o=!0,a=!1;return{s:function(){r=r.call(t)},n:function(){var t=r.next();return o=t.done,t},e:function(t){a=!0,i=t},f:function(){try{o||null==r.return||r.return()}finally{if(a)throw i}}}}function p(t,e){(null==e||e>t.length)&&(e=t.length);for(var r=0,n=new Array(e);r<e;r++)n[r]=t[r];return n}function d(t,e){var r=Object.keys(t);if(Object.getOwnPropertySymbols){var n=Object.getOwnPropertySymbols(t);e&&(n=n.filter((function(e){return Object.getOwnPropertyDescriptor(t,e).enumerable}))),r.push.apply(r,n)}return r}function v(t){for(var e=1;e<arguments.length;e++){var r=null!=arguments[e]?arguments[e]:{};e%2?d(Object(r),!0).forEach((function(e){Object(n.a)(t,e,r[e])})):Object.getOwnPropertyDescriptors?Object.defineProperties(t,Object.getOwnPropertyDescriptors(r)):d(Object(r)).forEach((function(e){Object.defineProperty(t,e,Object.getOwnPropertyDescriptor(r,e))}))}return t}function g(t){var e=Math.abs(t);return Math.sign(t)*(e/((1/.501-2)*(1-e)+1))}function y(t,e,r,n){var s=t.clientWidth,i=r?e.content-t.offsetLeft-s:t.offsetLeft;r&&(n=-n);var o=e.wrapper+n,a=s+i,c=.4*s;return i<=n?n=Math.max(i-c,0):o<=a&&(n=Math.min(n-(o-a-c),e.content-e.wrapper)),r?-n:n}var m=Object(u.a)(o.a,a.a).extend({name:"base-slide-group",directives:{Resize:c.a,Touch:l.a},props:{activeClass:{type:String,default:"v-slide-item--active"},centerActive:Boolean,nextIcon:{type:String,default:"$next"},prevIcon:{type:String,default:"$prev"},showArrows:{type:[Boolean,String],validator:function(t){return"boolean"==typeof t||["always","desktop","mobile"].includes(t)}}},data:function(){return{isOverflowing:!1,resizeTimeout:0,startX:0,isSwipingHorizontal:!1,isSwiping:!1,scrollOffset:0,widths:{content:0,wrapper:0}}},computed:{canTouch:function(){return"undefined"!=typeof window},__cachedNext:function(){return this.genTransition("next")},__cachedPrev:function(){return this.genTransition("prev")},classes:function(){return v(v({},o.a.options.computed.classes.call(this)),{},{"v-slide-group":!0,"v-slide-group--has-affixes":this.hasAffixes,"v-slide-group--is-overflowing":this.isOverflowing})},hasAffixes:function(){switch(this.showArrows){case"always":return!0;case"desktop":return!this.isMobile;case!0:return this.isOverflowing||Math.abs(this.scrollOffset)>0;case"mobile":return this.isMobile||this.isOverflowing||Math.abs(this.scrollOffset)>0;default:return!this.isMobile&&(this.isOverflowing||Math.abs(this.scrollOffset)>0)}},hasNext:function(){if(!this.hasAffixes)return!1;var t=this.widths,e=t.content,r=t.wrapper;return e>Math.abs(this.scrollOffset)+r},hasPrev:function(){return this.hasAffixes&&0!==this.scrollOffset}},watch:{internalValue:"setWidths",isOverflowing:"setWidths",scrollOffset:function(t){this.$vuetify.rtl&&(t=-t);var e=t<=0?g(-t):t>this.widths.content-this.widths.wrapper?-(this.widths.content-this.widths.wrapper)+g(this.widths.content-this.widths.wrapper-t):-t;this.$vuetify.rtl&&(e=-e),this.$refs.content.style.transform="translateX(".concat(e,"px)")}},mounted:function(){var t=this;if("undefined"!=typeof ResizeObserver){var e=new ResizeObserver((function(){t.onResize()}));e.observe(this.$el),e.observe(this.$refs.content),this.$on("hook:destroyed",(function(){e.disconnect()}))}else{var r=0;this.$on("hook:beforeUpdate",(function(){var e;r=((null===(e=t.$refs.content)||void 0===e?void 0:e.children)||[]).length})),this.$on("hook:updated",(function(){var e;r!==((null===(e=t.$refs.content)||void 0===e?void 0:e.children)||[]).length&&t.setWidths()}))}},methods:{onScroll:function(){this.$refs.wrapper.scrollLeft=0},onFocusin:function(t){if(this.isOverflowing){var e,r=h(Object(f.g)(t));try{for(r.s();!(e=r.n()).done;){var n,s=e.value,i=h(this.items);try{for(i.s();!(n=i.n()).done;){var o=n.value;if(o.$el===s)return void(this.scrollOffset=y(o.$el,this.widths,this.$vuetify.rtl,this.scrollOffset))}}catch(t){i.e(t)}finally{i.f()}}}catch(t){r.e(t)}finally{r.f()}}},genNext:function(){var t=this,e=this.$scopedSlots.next?this.$scopedSlots.next({}):this.$slots.next||this.__cachedNext;return this.$createElement("div",{staticClass:"v-slide-group__next",class:{"v-slide-group__next--disabled":!this.hasNext},on:{click:function(){return t.onAffixClick("next")}},key:"next"},[e])},genContent:function(){return this.$createElement("div",{staticClass:"v-slide-group__content",ref:"content",on:{focusin:this.onFocusin}},this.$slots.default)},genData:function(){return{class:this.classes,directives:[{name:"resize",value:this.onResize}]}},genIcon:function(t){var e=t;this.$vuetify.rtl&&"prev"===t?e="next":this.$vuetify.rtl&&"next"===t&&(e="prev");var r="".concat(t[0].toUpperCase()).concat(t.slice(1)),n=this["has".concat(r)];return this.showArrows||n?this.$createElement(s.a,{props:{disabled:!n}},this["".concat(e,"Icon")]):null},genPrev:function(){var t=this,e=this.$scopedSlots.prev?this.$scopedSlots.prev({}):this.$slots.prev||this.__cachedPrev;return this.$createElement("div",{staticClass:"v-slide-group__prev",class:{"v-slide-group__prev--disabled":!this.hasPrev},on:{click:function(){return t.onAffixClick("prev")}},key:"prev"},[e])},genTransition:function(t){return this.$createElement(i.c,[this.genIcon(t)])},genWrapper:function(){var t=this;return this.$createElement("div",{staticClass:"v-slide-group__wrapper",directives:[{name:"touch",value:{start:function(e){return t.overflowCheck(e,t.onTouchStart)},move:function(e){return t.overflowCheck(e,t.onTouchMove)},end:function(e){return t.overflowCheck(e,t.onTouchEnd)}}}],ref:"wrapper",on:{scroll:this.onScroll}},[this.genContent()])},calculateNewOffset:function(t,e,r,n){var s=r?-1:1,i=s*n+("prev"===t?-1:1)*e.wrapper;return s*Math.max(Math.min(i,e.content-e.wrapper),0)},onAffixClick:function(t){this.$emit("click:".concat(t)),this.scrollTo(t)},onResize:function(){this._isDestroyed||this.setWidths()},onTouchStart:function(t){var e=this.$refs.content;this.startX=this.scrollOffset+t.touchstartX,e.style.setProperty("transition","none"),e.style.setProperty("willChange","transform")},onTouchMove:function(t){if(this.canTouch){if(!this.isSwiping){var e=t.touchmoveX-t.touchstartX,r=t.touchmoveY-t.touchstartY;this.isSwipingHorizontal=Math.abs(e)>Math.abs(r),this.isSwiping=!0}this.isSwipingHorizontal&&(this.scrollOffset=this.startX-t.touchmoveX,document.documentElement.style.overflowY="hidden")}},onTouchEnd:function(){if(this.canTouch){var t=this.$refs,e=t.content,r=t.wrapper,n=e.clientWidth-r.clientWidth;e.style.setProperty("transition",null),e.style.setProperty("willChange",null),this.$vuetify.rtl?this.scrollOffset>0||!this.isOverflowing?this.scrollOffset=0:this.scrollOffset<=-n&&(this.scrollOffset=-n):this.scrollOffset<0||!this.isOverflowing?this.scrollOffset=0:this.scrollOffset>=n&&(this.scrollOffset=n),this.isSwiping=!1,document.documentElement.style.removeProperty("overflow-y")}},overflowCheck:function(t,e){t.stopPropagation(),this.isOverflowing&&e(t)},scrollIntoView:function(){if(!this.selectedItem&&this.items.length){var t=this.items[this.items.length-1].$el.getBoundingClientRect(),e=this.$refs.wrapper.getBoundingClientRect();(this.$vuetify.rtl&&e.right<t.right||!this.$vuetify.rtl&&e.left>t.left)&&this.scrollTo("prev")}this.selectedItem&&(0===this.selectedIndex||!this.centerActive&&!this.isOverflowing?this.scrollOffset=0:this.centerActive?this.scrollOffset=function(t,e,r){var n=t.offsetLeft,s=t.clientWidth;if(r){var i=e.content-n-s/2-e.wrapper/2;return-Math.min(e.content-e.wrapper,Math.max(0,i))}var o=n+s/2-e.wrapper/2;return Math.min(e.content-e.wrapper,Math.max(0,o))}(this.selectedItem.$el,this.widths,this.$vuetify.rtl):this.isOverflowing&&(this.scrollOffset=y(this.selectedItem.$el,this.widths,this.$vuetify.rtl,this.scrollOffset)))},scrollTo:function(t){this.scrollOffset=this.calculateNewOffset(t,{content:this.$refs.content?this.$refs.content.clientWidth:0,wrapper:this.$refs.wrapper?this.$refs.wrapper.clientWidth:0},this.$vuetify.rtl,this.scrollOffset)},setWidths:function(){var t=this;window.requestAnimationFrame((function(){if(!t._isDestroyed){var e=t.$refs,r=e.content,n=e.wrapper;t.widths={content:r?r.clientWidth:0,wrapper:n?n.clientWidth:0},t.isOverflowing=t.widths.wrapper+1<t.widths.content,t.scrollIntoView()}}))}},render:function(t){return t("div",this.genData(),[this.genPrev(),this.genWrapper(),this.genNext()])}});e.b=m.extend({name:"v-slide-group",provide:function(){return{slideGroup:this}}})},1258:function(t,e,r){var n=r(1287);n.__esModule&&(n=n.default),"string"==typeof n&&(n=[[t.i,n,""]]),n.locals&&(t.exports=n.locals);(0,r(31).default)("8b8bac78",n,!0,{sourceMap:!1})},1264:function(t,e,r){var n=r(1265);n.__esModule&&(n=n.default),"string"==typeof n&&(n=[[t.i,n,""]]),n.locals&&(t.exports=n.locals);(0,r(31).default)("3c0eddd7",n,!0,{sourceMap:!1})},1265:function(t,e,r){var n=r(30)(!1);n.push([t.i,".v-chip-group .v-chip{margin:4px 8px 4px 0}.v-chip-group .v-chip--active{color:inherit}.v-chip-group .v-chip--active.v-chip--no-color:after{opacity:.22}.v-chip-group .v-chip--active.v-chip--no-color:focus:after{opacity:.32}.v-chip-group .v-slide-group__content{padding:4px 0}.v-chip-group--column .v-slide-group__content{white-space:normal;-ms-flex-wrap:wrap;flex-wrap:wrap;max-width:100%}",""]),t.exports=n},1286:function(t,e,r){"use strict";r(1258)},1287:function(t,e,r){var n=r(30)(!1);n.push([t.i,"@media (min-width:1640px){.vl-and-up-redefine-col-lg.col-lg-3[data-v-1932d726]{-webkit-box-flex:0!important;-ms-flex:0 0 16.6666666667%!important;flex:0 0 16.6666666667%!important;max-width:16.6666666667%!important}.vl-and-up-redefine-col-lg.col-lg-4[data-v-1932d726]{-webkit-box-flex:0!important;-ms-flex:0 0 25%!important;flex:0 0 25%!important;max-width:25%!important}.vl-and-up-redefine-col-lg.col-lg-9[data-v-1932d726]{-webkit-box-flex:0!important;-ms-flex:0 0 83.3333333333%!important;flex:0 0 83.3333333333%!important;max-width:83.3333333333%!important}}@media (max-width:599px){.xs-only-flex-column-reverse[data-v-1932d726]{-webkit-box-orient:vertical!important;-webkit-box-direction:reverse!important;-ms-flex-direction:column-reverse!important;flex-direction:column-reverse!important}}",""]),t.exports=n},1313:function(t,e,r){"use strict";r.r(e);var n=r(381),s=r(246),i=r(386),o=r(1322),a=r(1202),c=r(373),l=r(237),u=r(76),f=r(374),h=r(1201),p=(r(97),r(14),r(9),r(25),r(26),r(24),r(23),r(50),r(42),r(67),r(41),r(64),r(66),r(77),r(58),r(43),r(1)),d=r(156),v=r(39),g=(r(59),r(73),r(4),r(201),r(49),r(202),r(203),r(204),r(205),r(206),r(207),r(208),r(209),r(210),r(211),r(212),r(213),r(214),r(215),r(216),r(217),r(52),r(10),r(11),r(5),r(12),r(13),r(84),r(51),r(56),r(57),r(167),r(15),r(16),r(17),r(90),r(100),r(101),r(33),r(164),r(165),r(166),r(121),r(107),r(1214)),y=r(1217),m=["tags"];function w(t,e){var r="undefined"!=typeof Symbol&&t[Symbol.iterator]||t["@@iterator"];if(!r){if(Array.isArray(t)||(r=function(t,e){if(!t)return;if("string"==typeof t)return b(t,e);var r=Object.prototype.toString.call(t).slice(8,-1);"Object"===r&&t.constructor&&(r=t.constructor.name);if("Map"===r||"Set"===r)return Array.from(t);if("Arguments"===r||/^(?:Ui|I)nt(?:8|16|32)(?:Clamped)?Array$/.test(r))return b(t,e)}(t))||e&&t&&"number"==typeof t.length){r&&(t=r);var n=0,s=function(){};return{s:s,n:function(){return n>=t.length?{done:!0}:{done:!1,value:t[n++]}},e:function(t){throw t},f:s}}throw new TypeError("Invalid attempt to iterate non-iterable instance.\nIn order to be iterable, non-array objects must have a [Symbol.iterator]() method.")}var i,o=!0,a=!1;return{s:function(){r=r.call(t)},n:function(){var t=r.next();return o=t.done,t},e:function(t){a=!0,i=t},f:function(){try{o||null==r.return||r.return()}finally{if(a)throw i}}}}function b(t,e){(null==e||e>t.length)&&(e=t.length);for(var r=0,n=new Array(e);r<e;r++)n[r]=t[r];return n}function x(t,e){var r=Object.keys(t);if(Object.getOwnPropertySymbols){var n=Object.getOwnPropertySymbols(t);e&&(n=n.filter((function(e){return Object.getOwnPropertyDescriptor(t,e).enumerable}))),r.push.apply(r,n)}return r}var O="All",_=["FAIR community","Developers","Data providers/stewards","Analytical end users"],$={mixins:[g.a,y.a],props:{markdownFilesDir:{type:String,required:!0},categoryTitle:{type:String,default:"Categories"},sortCategories:{type:Boolean,default:!1}},data:function(){return{path:this.$route.path,componentId:"sections-card-layout",selectedCategory:O,selectedTags:[],posts:[],allTags:[],allCategories:[]}},computed:{filteredPostIndexes:function(){return this.extractPostIndexes(this.filterPostsByCategoryAndTags(this.filteredPostsByCategory,this.filteredPostsByTags))},filteredPostsByCategory:function(){return this.filterPostsByCategory(this.posts,this.selectedCategory)},filteredPostsByTags:function(){return this.filterPostsByTags(this.posts,this.selectedTags)}},watch:{selectedCategory:function(){this.syncQueryIfNeeded(this.path,this.selectedCategory,this.selectedTags)},selectedTags:function(){this.syncQueryIfNeeded(this.path,this.selectedCategory,this.selectedTags)}},created:function(){var t=this;this.posts=this.extractPosts(this.markdownFiles),this.allCategories=this.extractCategories(this.posts),this.allTags=this.extractTagsList(this.posts),this.$nuxt.$on("queryChanged",(function(){if(t.queryAndSelectedOutOfSync(t.path,t.selectedCategory,t.selectedTags)){var e=t.query2selectedVals(),r=e.category,n=e.tags;t.selectedCategory=r,t.selectedTags=n}})),this.$nuxt.$emit("queryChanged")},activated:function(){this.$nuxt.$emit("queryChanged")},beforeDestroy:function(){this.$nuxt.$off("queryChanged")},methods:{toggleTag:function(t){if(this.selectedTags.includes(t)){var e=new Set(this.selectedTags);e.delete(t),this.selectedTags=Object(v.a)(e)}else this.selectedTags.push(t)},extractPosts:function(t){var e=this,r=function(t){var r=[];return t&&t.forEach((function(t){return r.push(t.trim())})),e.sortTags(r)},n=t.map((function(t){var e=t.tags,n=Object(d.a)(t,m);return function(t){for(var e=1;e<arguments.length;e++){var r=null!=arguments[e]?arguments[e]:{};e%2?x(Object(r),!0).forEach((function(e){Object(p.a)(t,e,r[e])})):Object.getOwnPropertyDescriptors?Object.defineProperties(t,Object.getOwnPropertyDescriptors(r)):x(Object(r)).forEach((function(e){Object.defineProperty(t,e,Object.getOwnPropertyDescriptor(r,e))}))}return t}({tags:r(e)},n)}));return n.sort((function(t,e){return"date"in t&&"date"in e?new Date(e.date)-new Date(t.date):0})),n.forEach((function(t,e){t.index=e})),n},extractCategories:function(t){var e=t.map((function(t){return t.category}));return this.sortCategories&&(e=e.sort()),e.unshift(O),Object(v.a)(new Set(e))},extractTagsList:function(t){var e=t.reduce((function(t,e){return t.concat(e.tags)}),[]).filter((function(t,e,r){return r.indexOf(t)===e}));return this.sortTags(e)},allPostsWithDisplayStatus:function(t,e){return t.map((function(t){return{post:t,showPost:e.has(t.index)}}))},extractPostIndexes:function(t){var e=new Set;return t.forEach((function(t){e.add(t.index)})),e},filterPostsByCategoryAndTags:function(t,e){return t.filter((function(t){return e.map((function(t){return t.slug})).includes(t.slug)}))},filterPostsByCategory:function(t,e){if(e===O)return t;var r=[];return this.posts.forEach((function(t){t.category===e&&r.push(t)})),r},filterPostsByTags:function(t,e){if(0===e.length)return t;var r=[];return t.forEach((function(t){"tags"in t&&e.every((function(e){return t.tags.includes(e)}))&&r.push(t)})),r},query2selectedVals:function(){var t=this.$route.query;return{category:t.category?t.category:O,tags:t.tags&&t.tags.length>0?JSON.parse(JSON.stringify(t.tags)):[]}},selected2QueryVals:function(t,e){return{category:t!==O?t:void 0,tags:e.length>0?JSON.parse(JSON.stringify(e)):void 0}},syncQueryIfNeeded:function(t,e,r){this.queryAndSelectedOutOfSync(t,e,r)&&this.syncQueryWithSelected(e,r)},queryAndSelectedOutOfSync:function(t,e,r){var n=this.$route.query,s=this.selected2QueryVals(e,r),i=s.category,o=s.tags;return this.$route.path===t&&(n.category!==i||n.tags!==o)},syncQueryWithSelected:function(t,e){this.$router.push({query:this.selected2QueryVals(t,e)})},sortTags:function(t){t=t.sort((function(t,e){return(t=t.toLowerCase())>(e=e.toLowerCase())?1:t<e?-1:0}));var e,r=w(_);try{for(r.s();!(e=r.n()).done;){var n=e.value,s=t.indexOf(n);s>=0&&t.unshift(t.splice(s,1)[0])}}catch(t){r.e(t)}finally{r.f()}return t}}},C=$,k=(r(1286),r(61)),j=Object(k.a)(C,(function(){var t=this,e=t._self._c;return e(h.a,{staticClass:"xs-only-flex-column-reverse"},[e(a.a,{staticClass:"sm-only",attrs:{sm:"1"}}),t._v(" "),e(a.a,{staticClass:"vl-and-up-redefine-col-lg",attrs:{cols:"12",sm:"6",md:"8",lg:"9",xl:"10"}},[e(h.a,t._l(t.allPostsWithDisplayStatus(t.posts,t.filteredPostIndexes),(function(r){var n=r.post,s=r.showPost;return e(a.a,{directives:[{name:"show",rawName:"v-show",value:s,expression:"showPost"}],key:n.index,staticClass:"vl-and-up-redefine-col-lg",staticStyle:{"min-width":"300px"},attrs:{cols:"12",sm:"12",md:"6",lg:"4",xl:"3"}},[t._t("default",null,{post:n})],2)})),1)],1),t._v(" "),e(a.a,{staticClass:"vl-and-up-redefine-col-lg",attrs:{id:"post-categories",cols:"12",sm:"4",md:"4",lg:"3",xl:"2"}},[e(n.a,{staticClass:"mb-6",attrs:{outlined:""}},[e("div",{staticClass:"subtitle font-weight-black text-uppercase text-center mt-4",domProps:{textContent:t._s(t.categoryTitle)}}),t._v(" "),e(c.a,{staticClass:"simplebutton",class:t.$vuetify.theme.dark?null:"highlight-background",attrs:{dense:""}},[e(f.a,{attrs:{mandatory:""},model:{value:t.selectedCategory,callback:function(e){t.selectedCategory=e},expression:"selectedCategory"}},t._l(t.allCategories,(function(r){return e(l.a,{key:r,style:t.cssVars,attrs:{value:r}},[e(u.a,[e(u.c,{domProps:{textContent:t._s(r)}})],1)],1)})),1)],1)],1),t._v(" "),e(n.a,{staticClass:"mb-6",attrs:{outlined:""}},[e("div",{staticClass:"subtitle font-weight-black text-uppercase text-center mt-4"},[t._v("Tags")]),t._v(" "),e(s.c,[e(o.a,{staticClass:"simplebutton",class:t.$vuetify.theme.dark?null:"highlight-background",attrs:{multiple:"",column:""},model:{value:t.selectedTags,callback:function(e){t.selectedTags=e},expression:"selectedTags"}},t._l(t.allTags,(function(r){return e(i.a,{key:r,attrs:{value:r,ripple:!1},on:{keyup:function(e){return!e.type.indexOf("key")&&t._k(e.keyCode,"enter",13,e.key,"Enter")?null:t.toggleTag(r)}}},[t._v("\n            "+t._s(r)+"\n          ")])})),1)],1)],1)],1),t._v(" "),e(a.a,{staticClass:"sm-only",attrs:{sm:"1"}})],1)}),[],!1,null,"1932d726",null);e.default=j.exports},1322:function(t,e,r){"use strict";r(14),r(9),r(15),r(4),r(16),r(5),r(17),r(25),r(10),r(11),r(12),r(13),r(26),r(24),r(23);var n=r(1),s=(r(1264),r(1257)),i=r(45),o=r(7);function a(t,e){var r=Object.keys(t);if(Object.getOwnPropertySymbols){var n=Object.getOwnPropertySymbols(t);e&&(n=n.filter((function(e){return Object.getOwnPropertyDescriptor(t,e).enumerable}))),r.push.apply(r,n)}return r}function c(t){for(var e=1;e<arguments.length;e++){var r=null!=arguments[e]?arguments[e]:{};e%2?a(Object(r),!0).forEach((function(e){Object(n.a)(t,e,r[e])})):Object.getOwnPropertyDescriptors?Object.defineProperties(t,Object.getOwnPropertyDescriptors(r)):a(Object(r)).forEach((function(e){Object.defineProperty(t,e,Object.getOwnPropertyDescriptor(r,e))}))}return t}e.a=Object(o.a)(s.a,i.a).extend({name:"v-chip-group",provide:function(){return{chipGroup:this}},props:{column:Boolean},computed:{classes:function(){return c(c({},s.a.options.computed.classes.call(this)),{},{"v-chip-group":!0,"v-chip-group--column":this.column})}},watch:{column:function(t){t&&(this.scrollOffset=0),this.$nextTick(this.onResize)}},methods:{genData:function(){return this.setTextColor(this.color,c({},s.a.options.methods.genData.call(this)))}}})}}]);