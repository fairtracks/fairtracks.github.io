(window.webpackJsonp=window.webpackJsonp||[]).push([[11],{1005:function(t,e,s){"use strict";s.d(e,"a",(function(){return g}));s(976);var i=s(69),r=s(92),o=s(110),n=s(151),l=s(116),a=s(226),h=s(5),c=s(0);function f(t,e){var s=Object.keys(t);if(Object.getOwnPropertySymbols){var i=Object.getOwnPropertySymbols(t);e&&(i=i.filter((function(e){return Object.getOwnPropertyDescriptor(t,e).enumerable}))),s.push.apply(s,i)}return s}function p(t){for(var e=1;e<arguments.length;e++){var s=null!=arguments[e]?arguments[e]:{};e%2?f(Object(s),!0).forEach((function(e){v(t,e,s[e])})):Object.getOwnPropertyDescriptors?Object.defineProperties(t,Object.getOwnPropertyDescriptors(s)):f(Object(s)).forEach((function(e){Object.defineProperty(t,e,Object.getOwnPropertyDescriptor(s,e))}))}return t}function v(t,e,s){return e in t?Object.defineProperty(t,e,{value:s,enumerable:!0,configurable:!0,writable:!0}):t[e]=s,t}function d(t){var e=Math.abs(t);return Math.sign(t)*(e/((1/.501-2)*(1-e)+1))}function u(t,e,s,i){var r=t.clientWidth,o=s?e.content-t.offsetLeft-r:t.offsetLeft;s&&(i=-i);var n=e.wrapper+i,l=r+o,a=.4*r;return o<=i?i=Math.max(o-a,0):n<=l&&(i=Math.min(i-(n-l-a),e.content-e.wrapper)),s?-i:i}var g=Object(h.a)(o.a,n.a).extend({name:"base-slide-group",directives:{Resize:l.a,Touch:a.a},props:{activeClass:{type:String,default:"v-slide-item--active"},centerActive:Boolean,nextIcon:{type:String,default:"$next"},prevIcon:{type:String,default:"$prev"},showArrows:{type:[Boolean,String],validator:t=>"boolean"==typeof t||["always","desktop","mobile"].includes(t)}},data:()=>({internalItemsLength:0,isOverflowing:!1,resizeTimeout:0,startX:0,isSwipingHorizontal:!1,isSwiping:!1,scrollOffset:0,widths:{content:0,wrapper:0}}),computed:{canTouch:()=>"undefined"!=typeof window,__cachedNext(){return this.genTransition("next")},__cachedPrev(){return this.genTransition("prev")},classes(){return p(p({},o.a.options.computed.classes.call(this)),{},{"v-slide-group":!0,"v-slide-group--has-affixes":this.hasAffixes,"v-slide-group--is-overflowing":this.isOverflowing})},hasAffixes(){switch(this.showArrows){case"always":return!0;case"desktop":return!this.isMobile;case!0:return this.isOverflowing||Math.abs(this.scrollOffset)>0;case"mobile":return this.isMobile||this.isOverflowing||Math.abs(this.scrollOffset)>0;default:return!this.isMobile&&(this.isOverflowing||Math.abs(this.scrollOffset)>0)}},hasNext(){if(!this.hasAffixes)return!1;var{content:t,wrapper:e}=this.widths;return t>Math.abs(this.scrollOffset)+e},hasPrev(){return this.hasAffixes&&0!==this.scrollOffset}},watch:{internalValue:"setWidths",isOverflowing:"setWidths",scrollOffset(t){this.$vuetify.rtl&&(t=-t);var e=t<=0?d(-t):t>this.widths.content-this.widths.wrapper?-(this.widths.content-this.widths.wrapper)+d(this.widths.content-this.widths.wrapper-t):-t;this.$vuetify.rtl&&(e=-e),this.$refs.content.style.transform="translateX(".concat(e,"px)")}},beforeUpdate(){this.internalItemsLength=(this.$children||[]).length},updated(){this.internalItemsLength!==(this.$children||[]).length&&this.setWidths()},methods:{onScroll(){this.$refs.wrapper.scrollLeft=0},onFocusin(t){if(this.isOverflowing)for(var e of Object(c.g)(t))for(var s of this.items)if(s.$el===e)return void(this.scrollOffset=u(s.$el,this.widths,this.$vuetify.rtl,this.scrollOffset))},genNext(){var t=this.$scopedSlots.next?this.$scopedSlots.next({}):this.$slots.next||this.__cachedNext;return this.$createElement("div",{staticClass:"v-slide-group__next",class:{"v-slide-group__next--disabled":!this.hasNext},on:{click:()=>this.onAffixClick("next")},key:"next"},[t])},genContent(){return this.$createElement("div",{staticClass:"v-slide-group__content",ref:"content",on:{focusin:this.onFocusin}},this.$slots.default)},genData(){return{class:this.classes,directives:[{name:"resize",value:this.onResize}]}},genIcon(t){var e=t;this.$vuetify.rtl&&"prev"===t?e="next":this.$vuetify.rtl&&"next"===t&&(e="prev");var s="".concat(t[0].toUpperCase()).concat(t.slice(1)),r=this["has".concat(s)];return this.showArrows||r?this.$createElement(i.a,{props:{disabled:!r}},this["".concat(e,"Icon")]):null},genPrev(){var t=this.$scopedSlots.prev?this.$scopedSlots.prev({}):this.$slots.prev||this.__cachedPrev;return this.$createElement("div",{staticClass:"v-slide-group__prev",class:{"v-slide-group__prev--disabled":!this.hasPrev},on:{click:()=>this.onAffixClick("prev")},key:"prev"},[t])},genTransition(t){return this.$createElement(r.c,[this.genIcon(t)])},genWrapper(){return this.$createElement("div",{staticClass:"v-slide-group__wrapper",directives:[{name:"touch",value:{start:t=>this.overflowCheck(t,this.onTouchStart),move:t=>this.overflowCheck(t,this.onTouchMove),end:t=>this.overflowCheck(t,this.onTouchEnd)}}],ref:"wrapper",on:{scroll:this.onScroll}},[this.genContent()])},calculateNewOffset(t,e,s,i){var r=s?-1:1,o=r*i+("prev"===t?-1:1)*e.wrapper;return r*Math.max(Math.min(o,e.content-e.wrapper),0)},onAffixClick(t){this.$emit("click:".concat(t)),this.scrollTo(t)},onResize(){this._isDestroyed||this.setWidths()},onTouchStart(t){var{content:e}=this.$refs;this.startX=this.scrollOffset+t.touchstartX,e.style.setProperty("transition","none"),e.style.setProperty("willChange","transform")},onTouchMove(t){if(this.canTouch){if(!this.isSwiping){var e=t.touchmoveX-t.touchstartX,s=t.touchmoveY-t.touchstartY;this.isSwipingHorizontal=Math.abs(e)>Math.abs(s),this.isSwiping=!0}this.isSwipingHorizontal&&(this.scrollOffset=this.startX-t.touchmoveX,document.documentElement.style.overflowY="hidden")}},onTouchEnd(){if(this.canTouch){var{content:t,wrapper:e}=this.$refs,s=t.clientWidth-e.clientWidth;t.style.setProperty("transition",null),t.style.setProperty("willChange",null),this.$vuetify.rtl?this.scrollOffset>0||!this.isOverflowing?this.scrollOffset=0:this.scrollOffset<=-s&&(this.scrollOffset=-s):this.scrollOffset<0||!this.isOverflowing?this.scrollOffset=0:this.scrollOffset>=s&&(this.scrollOffset=s),this.isSwiping=!1,document.documentElement.style.removeProperty("overflow-y")}},overflowCheck(t,e){t.stopPropagation(),this.isOverflowing&&e(t)},scrollIntoView(){if(!this.selectedItem&&this.items.length){var t=this.items[this.items.length-1].$el.getBoundingClientRect(),e=this.$refs.wrapper.getBoundingClientRect();(this.$vuetify.rtl&&e.right<t.right||!this.$vuetify.rtl&&e.left>t.left)&&this.scrollTo("prev")}this.selectedItem&&(0===this.selectedIndex||!this.centerActive&&!this.isOverflowing?this.scrollOffset=0:this.centerActive?this.scrollOffset=function(t,e,s){var{offsetLeft:i,clientWidth:r}=t;if(s){var o=e.content-i-r/2-e.wrapper/2;return-Math.min(e.content-e.wrapper,Math.max(0,o))}var n=i+r/2-e.wrapper/2;return Math.min(e.content-e.wrapper,Math.max(0,n))}(this.selectedItem.$el,this.widths,this.$vuetify.rtl):this.isOverflowing&&(this.scrollOffset=u(this.selectedItem.$el,this.widths,this.$vuetify.rtl,this.scrollOffset)))},scrollTo(t){this.scrollOffset=this.calculateNewOffset(t,{content:this.$refs.content?this.$refs.content.clientWidth:0,wrapper:this.$refs.wrapper?this.$refs.wrapper.clientWidth:0},this.$vuetify.rtl,this.scrollOffset)},setWidths(){window.requestAnimationFrame((()=>{if(!this._isDestroyed){var{content:t,wrapper:e}=this.$refs;this.widths={content:t?t.clientWidth:0,wrapper:e?e.clientWidth:0},this.isOverflowing=this.widths.wrapper+1<this.widths.content,this.scrollIntoView()}}))}},render(t){return t("div",this.genData(),[this.genPrev(),this.genWrapper(),this.genNext()])}});e.b=g.extend({name:"v-slide-group",provide(){return{slideGroup:this}}})},1020:function(t,e,s){"use strict";s.r(e);var i={data:()=>({brandsLogo:["logo-12.svg","logo-17.svg","logo-25.svg","logo-26.svg","logo-20.svg","logo-11.svg","logo-1.svg","logo-22.svg","logo-23.svg","logo-16.svg","logo-8.svg"]})},r=s(19),o=s(25),n=s.n(o),l=s(203),a=s(886),h=s(896),c=s(879),f=s(145),p=s(192),v=s(887),d=s(1005),u=s(1085),g=Object(r.a)(i,(function(){var t=this,e=t.$createElement,s=t._self._c||e;return s("section",{class:t.$vuetify.theme.dark?"grey darken-4":"grey lighten-4",attrs:{id:"sponsors"}},[s("v-container",[s("v-row",[s("v-col",{attrs:{cols:"12",sm:"4","align-self":"center"}},[s("h3",{staticClass:"text-h4 text-center font-weight-light mb-xs-4",class:t.$vuetify.theme.dark?"grey--text":null},[t._v("\n          OUR SPONSORS\n        ")])]),t._v(" "),s("v-col",{attrs:{cols:"12",sm:"8"}},[s("v-slide-group",{attrs:{"show-arrows":"",draggable:"true"}},[t._l(t.brandsLogo,(function(e,i){return[s("v-slide-item",{key:e,model:{value:t.brandsLogo,callback:function(e){t.brandsLogo=e},expression:"brandsLogo"}},[s("v-card",{staticClass:"mx-4 pa-0",class:t.$vuetify.theme.dark?"white":"grey lighten-4",attrs:{height:"90",width:"140",flat:""}},[s("v-img",{attrs:{height:"90",contain:"",src:"brands/"+e}})],1)],1),t._v(" "),i<t.brandsLogo.length-1?s("v-responsive",{key:i,staticClass:"my-auto",attrs:{height:"50"}},[s("v-divider",{attrs:{vertical:""}})],1):t._e()]}))],2)],1)],1)],1)],1)}),[],!1,null,null,null);e.default=g.exports;n()(g,{VCard:l.a,VCol:a.a,VContainer:h.a,VDivider:c.a,VImg:f.a,VResponsive:p.a,VRow:v.a,VSlideGroup:d.b,VSlideItem:u.a})},1085:function(t,e,s){"use strict";var i=s(109),r=s(5),o=s(6),n=s(1).a.extend({props:{activeClass:String,value:{required:!1}},data:()=>({isActive:!1}),methods:{toggle(){this.isActive=!this.isActive}},render(){return this.$scopedSlots.default?(this.$scopedSlots.default&&(t=this.$scopedSlots.default({active:this.isActive,toggle:this.toggle})),Array.isArray(t)&&1===t.length&&(t=t[0]),t&&!Array.isArray(t)&&t.tag?(t.data=this._b(t.data||{},t.tag,{class:{[this.activeClass]:this.isActive}}),t):(Object(o.c)("v-item should only contain a single element",this),t)):(Object(o.c)("v-item is missing a default scopedSlot",this),null);var t}});Object(r.a)(n,Object(i.a)("itemGroup","v-item","v-item-group")).extend({name:"v-item"}),e.a=Object(r.a)(n,Object(i.a)("slideGroup")).extend({name:"v-slide-item"})},976:function(t,e,s){var i=s(977);i.__esModule&&(i=i.default),"string"==typeof i&&(i=[[t.i,i,""]]),i.locals&&(t.exports=i.locals);(0,s(11).default)("6a9893a5",i,!0,{sourceMap:!1})},977:function(t,e,s){var i=s(10)(!1);i.push([t.i,".v-slide-group{display:flex}.v-slide-group:not(.v-slide-group--has-affixes)>.v-slide-group__next,.v-slide-group:not(.v-slide-group--has-affixes)>.v-slide-group__prev{display:none}.v-slide-group.v-item-group>.v-slide-group__next,.v-slide-group.v-item-group>.v-slide-group__prev{cursor:pointer}.v-slide-item{display:inline-flex;flex:0 1 auto}.v-slide-group__next,.v-slide-group__prev{align-items:center;display:flex;flex:0 1 52px;justify-content:center;min-width:52px}.v-slide-group__content{display:flex;flex:1 0 auto;position:relative;transition:.3s cubic-bezier(.25,.8,.5,1);white-space:nowrap}.v-slide-group__wrapper{contain:content;display:flex;flex:1 1 auto;overflow:hidden}.v-slide-group__next--disabled,.v-slide-group__prev--disabled{pointer-events:none}",""]),t.exports=i}}]);