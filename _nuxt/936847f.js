(window.webpackJsonp=window.webpackJsonp||[]).push([[9],{647:function(t,e,n){n(6)({target:"Math",stat:!0},{sign:n(370)})},648:function(t,e,n){},661:function(t,e,n){"use strict";n.d(e,"a",(function(){return A}));n(9),n(11),n(10),n(3),n(15),n(8),n(16),n(29),n(60),n(37),n(24),n(72),n(75),n(42);var r=n(2),o=(n(647),n(34),n(26),n(55),n(648),n(100)),c=n(125),l=n(144),h=n(195),f=n(148),v=n(257),d=n(7),w=n(0);function m(t,e){var n="undefined"!=typeof Symbol&&t[Symbol.iterator]||t["@@iterator"];if(!n){if(Array.isArray(t)||(n=function(t,e){if(!t)return;if("string"==typeof t)return y(t,e);var n=Object.prototype.toString.call(t).slice(8,-1);"Object"===n&&t.constructor&&(n=t.constructor.name);if("Map"===n||"Set"===n)return Array.from(t);if("Arguments"===n||/^(?:Ui|I)nt(?:8|16|32)(?:Clamped)?Array$/.test(n))return y(t,e)}(t))||e&&t&&"number"==typeof t.length){n&&(t=n);var i=0,r=function(){};return{s:r,n:function(){return i>=t.length?{done:!0}:{done:!1,value:t[i++]}},e:function(t){throw t},f:r}}throw new TypeError("Invalid attempt to iterate non-iterable instance.\nIn order to be iterable, non-array objects must have a [Symbol.iterator]() method.")}var o,c=!0,l=!1;return{s:function(){n=n.call(t)},n:function(){var t=n.next();return c=t.done,t},e:function(t){l=!0,o=t},f:function(){try{c||null==n.return||n.return()}finally{if(l)throw o}}}}function y(t,e){(null==e||e>t.length)&&(e=t.length);for(var i=0,n=new Array(e);i<e;i++)n[i]=t[i];return n}function O(object,t){var e=Object.keys(object);if(Object.getOwnPropertySymbols){var n=Object.getOwnPropertySymbols(object);t&&(n=n.filter((function(t){return Object.getOwnPropertyDescriptor(object,t).enumerable}))),e.push.apply(e,n)}return e}function $(t){for(var i=1;i<arguments.length;i++){var source=null!=arguments[i]?arguments[i]:{};i%2?O(Object(source),!0).forEach((function(e){Object(r.a)(t,e,source[e])})):Object.getOwnPropertyDescriptors?Object.defineProperties(t,Object.getOwnPropertyDescriptors(source)):O(Object(source)).forEach((function(e){Object.defineProperty(t,e,Object.getOwnPropertyDescriptor(source,e))}))}return t}function x(t){var e=Math.abs(t);return Math.sign(t)*(e/((1/.501-2)*(1-e)+1))}function S(t,e,n,r){var o=t.clientWidth,c=n?e.content-t.offsetLeft-o:t.offsetLeft;n&&(r=-r);var l=e.wrapper+r,h=o+c,f=.4*o;return c<=r?r=Math.max(c-f,0):l<=h&&(r=Math.min(r-(l-h-f),e.content-e.wrapper)),n?-r:r}var A=Object(d.a)(l.a,h.a).extend({name:"base-slide-group",directives:{Resize:f.a,Touch:v.a},props:{activeClass:{type:String,default:"v-slide-item--active"},centerActive:Boolean,nextIcon:{type:String,default:"$next"},prevIcon:{type:String,default:"$prev"},showArrows:{type:[Boolean,String],validator:function(t){return"boolean"==typeof t||["always","desktop","mobile"].includes(t)}}},data:function(){return{internalItemsLength:0,isOverflowing:!1,resizeTimeout:0,startX:0,isSwipingHorizontal:!1,isSwiping:!1,scrollOffset:0,widths:{content:0,wrapper:0}}},computed:{canTouch:function(){return"undefined"!=typeof window},__cachedNext:function(){return this.genTransition("next")},__cachedPrev:function(){return this.genTransition("prev")},classes:function(){return $($({},l.a.options.computed.classes.call(this)),{},{"v-slide-group":!0,"v-slide-group--has-affixes":this.hasAffixes,"v-slide-group--is-overflowing":this.isOverflowing})},hasAffixes:function(){switch(this.showArrows){case"always":return!0;case"desktop":return!this.isMobile;case!0:return this.isOverflowing||Math.abs(this.scrollOffset)>0;case"mobile":return this.isMobile||this.isOverflowing||Math.abs(this.scrollOffset)>0;default:return!this.isMobile&&(this.isOverflowing||Math.abs(this.scrollOffset)>0)}},hasNext:function(){if(!this.hasAffixes)return!1;var t=this.widths,content=t.content,e=t.wrapper;return content>Math.abs(this.scrollOffset)+e},hasPrev:function(){return this.hasAffixes&&0!==this.scrollOffset}},watch:{internalValue:"setWidths",isOverflowing:"setWidths",scrollOffset:function(t){var e=t<=0?x(-t):t>this.widths.content-this.widths.wrapper?-(this.widths.content-this.widths.wrapper)+x(this.widths.content-this.widths.wrapper-t):-t;this.$refs.content.style.transform="translateX(".concat(e,"px)")}},beforeUpdate:function(){this.internalItemsLength=(this.$children||[]).length},updated:function(){this.internalItemsLength!==(this.$children||[]).length&&this.setWidths()},methods:{onScroll:function(){this.$refs.wrapper.scrollLeft=0},onFocusin:function(t){if(this.isOverflowing){var e,n=m(Object(w.g)(t));try{for(n.s();!(e=n.n()).done;){var r,o=e.value,c=m(this.items);try{for(c.s();!(r=c.n()).done;){var l=r.value;if(l.$el===o)return void(this.scrollOffset=S(l.$el,this.widths,this.$vuetify.rtl,this.scrollOffset))}}catch(t){c.e(t)}finally{c.f()}}}catch(t){n.e(t)}finally{n.f()}}},genNext:function(){var t=this,slot=this.$scopedSlots.next?this.$scopedSlots.next({}):this.$slots.next||this.__cachedNext;return this.$createElement("div",{staticClass:"v-slide-group__next",class:{"v-slide-group__next--disabled":!this.hasNext},on:{click:function(){return t.onAffixClick("next")}},key:"next"},[slot])},genContent:function(){return this.$createElement("div",{staticClass:"v-slide-group__content",ref:"content",on:{focusin:this.onFocusin}},this.$slots.default)},genData:function(){return{class:this.classes,directives:[{name:"resize",value:this.onResize}]}},genIcon:function(t){var e=t;this.$vuetify.rtl&&"prev"===t?e="next":this.$vuetify.rtl&&"next"===t&&(e="prev");var n="".concat(t[0].toUpperCase()).concat(t.slice(1)),r=this["has".concat(n)];return this.showArrows||r?this.$createElement(o.a,{props:{disabled:!r}},this["".concat(e,"Icon")]):null},genPrev:function(){var t=this,slot=this.$scopedSlots.prev?this.$scopedSlots.prev({}):this.$slots.prev||this.__cachedPrev;return this.$createElement("div",{staticClass:"v-slide-group__prev",class:{"v-slide-group__prev--disabled":!this.hasPrev},on:{click:function(){return t.onAffixClick("prev")}},key:"prev"},[slot])},genTransition:function(t){return this.$createElement(c.c,[this.genIcon(t)])},genWrapper:function(){var t=this;return this.$createElement("div",{staticClass:"v-slide-group__wrapper",directives:[{name:"touch",value:{start:function(e){return t.overflowCheck(e,t.onTouchStart)},move:function(e){return t.overflowCheck(e,t.onTouchMove)},end:function(e){return t.overflowCheck(e,t.onTouchEnd)}}}],ref:"wrapper",on:{scroll:this.onScroll}},[this.genContent()])},calculateNewOffset:function(t,e,n,r){var o=n?-1:1,c=o*r+("prev"===t?-1:1)*e.wrapper;return o*Math.max(Math.min(c,e.content-e.wrapper),0)},onAffixClick:function(t){this.$emit("click:".concat(t)),this.scrollTo(t)},onResize:function(){this._isDestroyed||this.setWidths()},onTouchStart:function(t){var content=this.$refs.content;this.startX=this.scrollOffset+t.touchstartX,content.style.setProperty("transition","none"),content.style.setProperty("willChange","transform")},onTouchMove:function(t){if(this.canTouch){if(!this.isSwiping){var e=t.touchmoveX-t.touchstartX,n=t.touchmoveY-t.touchstartY;this.isSwipingHorizontal=Math.abs(e)>Math.abs(n),this.isSwiping=!0}this.isSwipingHorizontal&&(this.scrollOffset=this.startX-t.touchmoveX,document.documentElement.style.overflowY="hidden")}},onTouchEnd:function(){if(this.canTouch){var t=this.$refs,content=t.content,e=t.wrapper,n=content.clientWidth-e.clientWidth;content.style.setProperty("transition",null),content.style.setProperty("willChange",null),this.$vuetify.rtl?this.scrollOffset>0||!this.isOverflowing?this.scrollOffset=0:this.scrollOffset<=-n&&(this.scrollOffset=-n):this.scrollOffset<0||!this.isOverflowing?this.scrollOffset=0:this.scrollOffset>=n&&(this.scrollOffset=n),this.isSwiping=!1,document.documentElement.style.removeProperty("overflow-y")}},overflowCheck:function(t,e){t.stopPropagation(),this.isOverflowing&&e(t)},scrollIntoView:function(){if(!this.selectedItem&&this.items.length){var t=this.items[this.items.length-1].$el.getBoundingClientRect(),e=this.$refs.wrapper.getBoundingClientRect();(this.$vuetify.rtl&&e.right<t.right||!this.$vuetify.rtl&&e.left>t.left)&&this.scrollTo("prev")}this.selectedItem&&(0===this.selectedIndex||!this.centerActive&&!this.isOverflowing?this.scrollOffset=0:this.centerActive?this.scrollOffset=function(t,e,n){var r=t.offsetLeft,o=t.clientWidth;if(n){var c=e.content-r-o/2-e.wrapper/2;return-Math.min(e.content-e.wrapper,Math.max(0,c))}var l=r+o/2-e.wrapper/2;return Math.min(e.content-e.wrapper,Math.max(0,l))}(this.selectedItem.$el,this.widths,this.$vuetify.rtl):this.isOverflowing&&(this.scrollOffset=S(this.selectedItem.$el,this.widths,this.$vuetify.rtl,this.scrollOffset)))},scrollTo:function(t){this.scrollOffset=this.calculateNewOffset(t,{content:this.$refs.content?this.$refs.content.clientWidth:0,wrapper:this.$refs.wrapper?this.$refs.wrapper.clientWidth:0},this.$vuetify.rtl,this.scrollOffset)},setWidths:function(){var t=this;window.requestAnimationFrame((function(){var e=t.$refs,content=e.content,n=e.wrapper;t.widths={content:content?content.clientWidth:0,wrapper:n?n.clientWidth:0},t.isOverflowing=t.widths.wrapper+1<t.widths.content,t.scrollIntoView()}))}},render:function(t){return t("div",this.genData(),[this.genPrev(),this.genWrapper(),this.genNext()])}});e.b=A.extend({name:"v-slide-group",provide:function(){return{slideGroup:this}}})},713:function(t,e,n){"use strict";n.r(e);var r={data:function(){return{brandsLogo:["logo-12.svg","logo-17.svg","logo-25.svg","logo-26.svg","logo-20.svg","logo-11.svg","logo-1.svg","logo-22.svg","logo-23.svg","logo-16.svg","logo-8.svg"]}}},o=n(39),c=n(70),l=n.n(c),h=n(242),f=n(619),v=n(626),d=n(608),w=n(185),m=n(231),y=n(620),O=n(661),$=n(2),x=n(145),S=n(7),A=n(13),_=n(1).a.extend({props:{activeClass:String,value:{required:!1}},data:function(){return{isActive:!1}},methods:{toggle:function(){this.isActive=!this.isActive}},render:function(){return this.$scopedSlots.default?(this.$scopedSlots.default&&(element=this.$scopedSlots.default({active:this.isActive,toggle:this.toggle})),Array.isArray(element)&&1===element.length&&(element=element[0]),element&&!Array.isArray(element)&&element.tag?(element.data=this._b(element.data||{},element.tag,{class:Object($.a)({},this.activeClass,this.isActive)}),element):(Object(A.c)("v-item should only contain a single element",this),element)):(Object(A.c)("v-item is missing a default scopedSlot",this),null);var element}}),C=(Object(S.a)(_,Object(x.a)("itemGroup","v-item","v-item-group")).extend({name:"v-item"}),Object(S.a)(_,Object(x.a)("slideGroup")).extend({name:"v-slide-item"})),component=Object(o.a)(r,(function(){var t=this,e=t.$createElement,n=t._self._c||e;return n("section",{class:t.$vuetify.theme.dark?"grey darken-4":"grey lighten-4",attrs:{id:"sponsors"}},[n("v-container",[n("v-row",[n("v-col",{attrs:{cols:"12",sm:"4","align-self":"center"}},[n("h3",{staticClass:"text-h4 text-center font-weight-light mb-xs-4",class:t.$vuetify.theme.dark?"grey--text":null},[t._v("\n          OUR SPONSORS\n        ")])]),t._v(" "),n("v-col",{attrs:{cols:"12",sm:"8"}},[n("v-slide-group",{attrs:{"show-arrows":"",draggable:"true"}},[t._l(t.brandsLogo,(function(e,r){return[n("v-slide-item",{key:e,model:{value:t.brandsLogo,callback:function(e){t.brandsLogo=e},expression:"brandsLogo"}},[n("v-card",{staticClass:"mx-4 pa-0",class:t.$vuetify.theme.dark?"white":"grey lighten-4",attrs:{height:"90",width:"140",flat:""}},[n("v-img",{attrs:{height:"90",contain:"",src:"/brands/"+e}})],1)],1),t._v(" "),r<t.brandsLogo.length-1?n("v-responsive",{key:r,staticClass:"my-auto",attrs:{height:"50"}},[n("v-divider",{attrs:{vertical:""}})],1):t._e()]}))],2)],1)],1)],1)],1)}),[],!1,null,null,null);e.default=component.exports;l()(component,{VCard:h.a,VCol:f.a,VContainer:v.a,VDivider:d.a,VImg:w.a,VResponsive:m.a,VRow:y.a,VSlideGroup:O.b,VSlideItem:C})}}]);