(window.webpackJsonp=window.webpackJsonp||[]).push([[2,41,49,54,55],{1031:function(t,e,i){"use strict";e.a={methods:{selectByComponentWidthUnbound:(t,e,i)=>i>=1888&&"xl"in t?t.xl:i>=1248&&"lg"in t?t.lg:i>=960&&"md"in t?t.md:i>=600&&"sm"in t?t.sm:"xs"in t?t.xs:e,calcComponentHeightAsStringUnbound(){return"".concat((arguments.length>2&&void 0!==arguments[2]?arguments[2]:0)*(arguments.length>0&&void 0!==arguments[0]?arguments[0]:1)+(arguments.length>1&&void 0!==arguments[1]?arguments[1]:0),"px")}}}},1072:function(t,e,i){"use strict";i(992),i(994);var o=i(226),n=i(406),s=i(69),r=i(113);function a(t,e){var i=Object.keys(t);if(Object.getOwnPropertySymbols){var o=Object.getOwnPropertySymbols(t);e&&(o=o.filter((function(e){return Object.getOwnPropertyDescriptor(t,e).enumerable}))),i.push.apply(i,o)}return i}function l(t){for(var e=1;e<arguments.length;e++){var i=null!=arguments[e]?arguments[e]:{};e%2?a(Object(i),!0).forEach((function(e){c(t,e,i[e])})):Object.getOwnPropertyDescriptors?Object.defineProperties(t,Object.getOwnPropertyDescriptors(i)):a(Object(i)).forEach((function(e){Object.defineProperty(t,e,Object.getOwnPropertyDescriptor(i,e))}))}return t}function c(t,e,i){return e in t?Object.defineProperty(t,e,{value:i,enumerable:!0,configurable:!0,writable:!0}):t[e]=i,t}var d=r.a.extend({name:"v-window",directives:{Touch:o.a},provide(){return{windowGroup:this}},props:{activeClass:{type:String,default:"v-window-item--active"},continuous:Boolean,mandatory:{type:Boolean,default:!0},nextIcon:{type:[Boolean,String],default:"$next"},prevIcon:{type:[Boolean,String],default:"$prev"},reverse:Boolean,showArrows:Boolean,showArrowsOnHover:Boolean,touch:Object,touchless:Boolean,value:{required:!1},vertical:Boolean},data:()=>({changedByDelimiters:!1,internalHeight:void 0,transitionHeight:void 0,transitionCount:0,isBooted:!1,isReverse:!1}),computed:{isActive(){return this.transitionCount>0},classes(){return l(l({},r.a.options.computed.classes.call(this)),{},{"v-window--show-arrows-on-hover":this.showArrowsOnHover})},computedTransition(){if(!this.isBooted)return"";var t=this.vertical?"y":"x",e=(this.internalReverse?!this.isReverse:this.isReverse)?"-reverse":"";return"v-window-".concat(t).concat(e,"-transition")},hasActiveItems(){return Boolean(this.items.find((t=>!t.disabled)))},hasNext(){return this.continuous||this.internalIndex<this.items.length-1},hasPrev(){return this.continuous||this.internalIndex>0},internalIndex(){return this.items.findIndex(((t,e)=>this.internalValue===this.getValue(t,e)))},internalReverse(){return this.$vuetify.rtl?!this.reverse:this.reverse}},watch:{internalIndex(t,e){this.isReverse=this.updateReverse(t,e)}},mounted(){window.requestAnimationFrame((()=>this.isBooted=!0))},methods:{genDefaultSlot(){return this.$slots.default},genContainer(){var t=[this.genDefaultSlot()];return this.showArrows&&t.push(this.genControlIcons()),this.$createElement("div",{staticClass:"v-window__container",class:{"v-window__container--is-active":this.isActive},style:{height:this.internalHeight||this.transitionHeight}},t)},genIcon(t,e,i){var o,r,a,l={click:t=>{t.stopPropagation(),this.changedByDelimiters=!0,i()}},c={"aria-label":this.$vuetify.lang.t("$vuetify.carousel.".concat(t))},d=null!=(o=null==(r=(a=this.$scopedSlots)[t])?void 0:r.call(a,{on:l,attrs:c}))?o:[this.$createElement(n.a,{props:{icon:!0},attrs:c,on:l},[this.$createElement(s.a,{props:{large:!0}},e)])];return this.$createElement("div",{staticClass:"v-window__".concat(t)},d)},genControlIcons(){var t=[],e=this.$vuetify.rtl?this.nextIcon:this.prevIcon;if(this.hasPrev&&e&&"string"==typeof e){var i=this.genIcon("prev",e,this.prev);i&&t.push(i)}var o=this.$vuetify.rtl?this.prevIcon:this.nextIcon;if(this.hasNext&&o&&"string"==typeof o){var n=this.genIcon("next",o,this.next);n&&t.push(n)}return t},getNextIndex(t){var e=(t+1)%this.items.length;return this.items[e].disabled?this.getNextIndex(e):e},getPrevIndex(t){var e=(t+this.items.length-1)%this.items.length;return this.items[e].disabled?this.getPrevIndex(e):e},next(){if(this.hasActiveItems&&this.hasNext){var t=this.getNextIndex(this.internalIndex),e=this.items[t];this.internalValue=this.getValue(e,t)}},prev(){if(this.hasActiveItems&&this.hasPrev){var t=this.getPrevIndex(this.internalIndex),e=this.items[t];this.internalValue=this.getValue(e,t)}},updateReverse(t,e){var i=this.items.length,o=i-1;return i<=2?t<e:t===o&&0===e||(0!==t||e!==o)&&t<e}},render(t){var e={staticClass:"v-window",class:this.classes,directives:[]};if(!this.touchless){var i=this.touch||{left:()=>{this.$vuetify.rtl?this.prev():this.next()},right:()=>{this.$vuetify.rtl?this.next():this.prev()},end:t=>{t.stopPropagation()},start:t=>{t.stopPropagation()}};e.directives.push({name:"touch",value:i})}return t("div",e,[this.genContainer()])}}),u=i(232),h=i(981),v=i(0),m=i(7);function p(t,e){var i=Object.keys(t);if(Object.getOwnPropertySymbols){var o=Object.getOwnPropertySymbols(t);e&&(o=o.filter((function(e){return Object.getOwnPropertyDescriptor(t,e).enumerable}))),i.push.apply(i,o)}return i}function g(t){for(var e=1;e<arguments.length;e++){var i=null!=arguments[e]?arguments[e]:{};e%2?p(Object(i),!0).forEach((function(e){w(t,e,i[e])})):Object.getOwnPropertyDescriptors?Object.defineProperties(t,Object.getOwnPropertyDescriptors(i)):p(Object(i)).forEach((function(e){Object.defineProperty(t,e,Object.getOwnPropertyDescriptor(i,e))}))}return t}function w(t,e,i){return e in t?Object.defineProperty(t,e,{value:i,enumerable:!0,configurable:!0,writable:!0}):t[e]=i,t}e.a=d.extend({name:"v-carousel",props:{continuous:{type:Boolean,default:!0},cycle:Boolean,delimiterIcon:{type:String,default:"$delimiter"},height:{type:[Number,String],default:500},hideDelimiters:Boolean,hideDelimiterBackground:Boolean,interval:{type:[Number,String],default:6e3,validator:t=>t>0},mandatory:{type:Boolean,default:!0},progress:Boolean,progressColor:String,showArrows:{type:Boolean,default:!0},verticalDelimiters:{type:String,default:void 0}},provide(){return{parentTheme:this.theme}},data(){return{internalHeight:this.height,slideTimeout:void 0}},computed:{classes(){return g(g({},d.options.computed.classes.call(this)),{},{"v-carousel":!0,"v-carousel--hide-delimiter-background":this.hideDelimiterBackground,"v-carousel--vertical-delimiters":this.isVertical})},isDark(){return this.dark||!this.light},isVertical(){return null!=this.verticalDelimiters}},watch:{internalValue:"restartTimeout",interval:"restartTimeout",height(t,e){t!==e&&t&&(this.internalHeight=t)},cycle(t){t?this.restartTimeout():(clearTimeout(this.slideTimeout),this.slideTimeout=void 0)}},created(){this.$attrs.hasOwnProperty("hide-controls")&&Object(m.a)("hide-controls",':show-arrows="false"',this)},mounted(){this.startTimeout()},methods:{genControlIcons(){return this.isVertical?null:d.options.methods.genControlIcons.call(this)},genDelimiters(){return this.$createElement("div",{staticClass:"v-carousel__controls",style:{left:"left"===this.verticalDelimiters&&this.isVertical?0:"auto",right:"right"===this.verticalDelimiters?0:"auto"}},[this.genItems()])},genItems(){for(var t=this.items.length,e=[],i=0;i<t;i++){var o=this.$createElement(n.a,{staticClass:"v-carousel__controls__item",attrs:{"aria-label":this.$vuetify.lang.t("$vuetify.carousel.ariaLabel.delimiter",i+1,t)},props:{icon:!0,small:!0,value:this.getValue(this.items[i],i)}},[this.$createElement(s.a,{props:{size:18}},this.delimiterIcon)]);e.push(o)}return this.$createElement(h.a,{props:{value:this.internalValue,mandatory:this.mandatory},on:{change:t=>{this.internalValue=t}}},e)},genProgress(){return this.$createElement(u.a,{staticClass:"v-carousel__progress",props:{color:this.progressColor,value:(this.internalIndex+1)/this.items.length*100}})},restartTimeout(){this.slideTimeout&&clearTimeout(this.slideTimeout),this.slideTimeout=void 0,window.requestAnimationFrame(this.startTimeout)},startTimeout(){this.cycle&&(this.slideTimeout=window.setTimeout(this.next,+this.interval>0?+this.interval:6e3))}},render(t){var e=d.options.render.call(this,t);return e.data.style="height: ".concat(Object(v.h)(this.height),";"),this.hideDelimiters||e.children.push(this.genDelimiters()),(this.progress||this.progressColor)&&e.children.push(this.genProgress()),e}})},1073:function(t,e,i){"use strict";var o=i(119),n=i(112),s=i(226),r=i(0),a=i(6),l=Object(a.a)(o.a,Object(n.a)("windowGroup","v-window-item","v-window")).extend().extend().extend({name:"v-window-item",directives:{Touch:s.a},props:{disabled:Boolean,reverseTransition:{type:[Boolean,String],default:void 0},transition:{type:[Boolean,String],default:void 0},value:{required:!1}},data:()=>({isActive:!1,inTransition:!1}),computed:{classes(){return this.groupClasses},computedTransition(){return this.windowGroup.internalReverse?void 0!==this.reverseTransition?this.reverseTransition||"":this.windowGroup.computedTransition:void 0!==this.transition?this.transition||"":this.windowGroup.computedTransition}},methods:{genDefaultSlot(){return this.$slots.default},genWindowItem(){return this.$createElement("div",{staticClass:"v-window-item",class:this.classes,directives:[{name:"show",value:this.isActive}],on:this.$listeners},this.genDefaultSlot())},onAfterTransition(){this.inTransition&&(this.inTransition=!1,this.windowGroup.transitionCount>0&&(this.windowGroup.transitionCount--,0===this.windowGroup.transitionCount&&(this.windowGroup.transitionHeight=void 0)))},onBeforeTransition(){this.inTransition||(this.inTransition=!0,0===this.windowGroup.transitionCount&&(this.windowGroup.transitionHeight=Object(r.h)(this.windowGroup.$el.clientHeight)),this.windowGroup.transitionCount++)},onTransitionCancelled(){this.onAfterTransition()},onEnter(t){this.inTransition&&this.$nextTick((()=>{this.computedTransition&&this.inTransition&&(this.windowGroup.transitionHeight=Object(r.h)(t.clientHeight))}))}},render(t){return t("transition",{props:{name:this.computedTransition},on:{beforeEnter:this.onBeforeTransition,afterEnter:this.onAfterTransition,enterCancelled:this.onTransitionCancelled,beforeLeave:this.onBeforeTransition,afterLeave:this.onAfterTransition,leaveCancelled:this.onTransitionCancelled,enter:this.onEnter}},this.showLazyContent((()=>[this.genWindowItem()])))}}),c=i(148),d=i(46);function u(t,e){var i=Object.keys(t);if(Object.getOwnPropertySymbols){var o=Object.getOwnPropertySymbols(t);e&&(o=o.filter((function(e){return Object.getOwnPropertyDescriptor(t,e).enumerable}))),i.push.apply(i,o)}return i}function h(t){for(var e=1;e<arguments.length;e++){var i=null!=arguments[e]?arguments[e]:{};e%2?u(Object(i),!0).forEach((function(e){v(t,e,i[e])})):Object.getOwnPropertyDescriptors?Object.defineProperties(t,Object.getOwnPropertyDescriptors(i)):u(Object(i)).forEach((function(e){Object.defineProperty(t,e,Object.getOwnPropertyDescriptor(i,e))}))}return t}function v(t,e,i){return e in t?Object.defineProperty(t,e,{value:i,enumerable:!0,configurable:!0,writable:!0}):t[e]=i,t}var m=Object(a.a)(l,d.a);e.a=m.extend().extend({name:"v-carousel-item",inject:{parentTheme:{default:{isDark:!1}}},provide(){return{theme:this.parentTheme}},inheritAttrs:!1,methods:{genDefaultSlot(){return[this.$createElement(c.a,{staticClass:"v-carousel__item",props:h(h({},this.$attrs),{},{height:this.windowGroup.internalHeight}),on:this.$listeners,scopedSlots:{placeholder:this.$scopedSlots.placeholder}},Object(r.s)(this))]},genWindowItem(){var{tag:t,data:e}=this.generateRouteLink();return e.staticClass="v-window-item",e.directives.push({name:"show",value:this.isActive}),this.$createElement(t,e,this.genDefaultSlot())}}})},1078:function(t,e,i){var o=i(1141);o.__esModule&&(o=o.default),"string"==typeof o&&(o=[[t.i,o,""]]),o.locals&&(t.exports=o.locals);(0,i(11).default)("b8d150bc",o,!0,{sourceMap:!1})},1081:function(t,e,i){"use strict";i.r(e);var o={mixins:[{mixins:[i(1031).a],data:()=>({componentWidth:void 0,componentHeight:void 0,componentKey:0,componentRef:void 0}),computed:{componentHorizontal(){return this.componentHeight<this.componentWidth},componentHorizontalAndVeryWide(){return 1.7*this.componentHeight<this.componentWidth}},mounted(){window.addEventListener("resize",this.onResizeWindow),this.componentKey+=1,this.onResizeWindow()},destroyed(){window.removeEventListener("resize",this.onResizeWindow)},methods:{onResizeWindow(t){void 0!==this.$refs[this.componentRef]&&(this.componentWidth=this.$refs[this.componentRef].clientWidth,this.componentHeight=this.$refs[this.componentRef].clientHeight)},selectByComponentWidth(t,e){return this.selectByComponentWidthUnbound(t,e,this.componentWidth)},calcComponentHeightAsString(t,e){return this.calcComponentHeightAsStringUnbound(t,e,this.componentHeight)}}}],props:{carouselId:{type:String,required:!0},slidesFiles:{type:Object,default:()=>{}},height:{type:String,required:!0}},data:()=>({componentRef:"carousel-section"}),methods:{showFullPageImg(t){return"fullPage"===this._calcLayoutType(t)},showLeftToRightImg(t){return"imgAtTop"===this._calcLayoutType(t)},showTopToBottomImg(t){return"sideBySide"===this._calcLayoutType(t)},_calcLayoutType(t){var e=null;return t.topToBottomImg&&t.leftToRightImg?e=this.componentHorizontal?"fullPage":"imgAtTop":t.topToBottomImg?e=this.componentHorizontal?"sideBySide":"imgAtTop":t.leftToRightImg&&(e=this.componentHorizontalAndVeryWide?"sideBySide":"imgAtTop"),e},containImage:t=>!t.topToBottomImg||null}},n=(i(1140),i(16)),s=i(21),r=i.n(s),a=i(1072),l=i(1073),c=i(947),d=i(980),u=i(948),h=Object(n.a)(o,(function(){var t=this,e=t.$createElement,i=t._self._c||e;return i("section",[i("v-hover",{scopedSlots:t._u([{key:"default",fn:function(e){var o=e.hover;return[i("div",{key:t.componentKey,ref:"carousel-section"},[i("v-carousel",{directives:[{name:"tooltip",rawName:"v-tooltip",value:{content:"Tip: move mouse pointer away from carousel to resume auto-cycling of slides",delay:{show:1e3},placement:"bottom"},expression:"{\n          content: 'Tip: move mouse pointer away from carousel to resume auto-cycling of slides',\n          delay: { show: 1000 },\n          placement: 'bottom',\n        }"}],attrs:{id:t.carouselId,dark:"",cycle:!o,"show-arrows-on-hover":"",draggable:"true","hide-delimiter-background":"",height:t.height}},t._l(t.slidesFiles.markdownFiles,(function(e,o){return i("v-carousel-item",{key:o,staticClass:"gradient-fill-carousel",class:t.$vuetify.theme.dark?"background-dark":"background-light",attrs:{src:t.showFullPageImg(e)&&!t.$config.optimizeImages?t.slidesFiles.imageAssetObjects[e.img].optimizedImagePath:null,dark:""}},[i("div",{directives:[{name:"show",rawName:"v-show",value:t.showFullPageImg(e),expression:"showFullPageImg(slideMdFile)"}],staticClass:"v-responsive fill-height"},[i("UiSmartBackgroundImg",{directives:[{name:"show",rawName:"v-show",value:t.$config.optimizeImages,expression:"$config.optimizeImages"}],attrs:{"image-asset":t.slidesFiles.imageAssetObjects[e.img]}}),t._v(" "),i("v-row",{staticClass:"fill-height",attrs:{"no-gutters":""}},[i("v-col",{attrs:{cols:"12","align-self":"end"}},[i("UiCarouselText",{class:t.selectByComponentWidth({md:"px-12 pb-12",sm:"px-8 pb-8"},"px-4 pb-4"),attrs:{"button-to-right":!0,"slide-markdown-file":e,"carousel-width":t.componentWidth}})],1)],1)],1),t._v(" "),i("v-row",{directives:[{name:"show",rawName:"v-show",value:t.showLeftToRightImg(e),expression:"showLeftToRightImg(slideMdFile)"}],staticClass:"fill-height",attrs:{"no-gutters":""}},[i("v-col",{attrs:{cols:"12"}},[i("UiSmartImg",{attrs:{"max-height":t.selectByComponentWidth({sm:t.componentHorizontal?t.calcComponentHeightAsString(.6,0):t.calcComponentHeightAsString(.75,0)},t.calcComponentHeightAsString(.5,0)),f:"","image-asset":t.slidesFiles.imageAssetObjects[e.img],"align-self":"start","crop-bottom":!!e.topToBottomImg||null,behind:""}})],1),t._v(" "),i("v-col",{attrs:{cols:"12"}},[i("UiCarouselText",{class:t.selectByComponentWidth({md:"pa-12",sm:"pa-8"},"pa-4"),attrs:{"button-to-right":t.componentHorizontal,"slide-markdown-file":e,"carousel-width":t.componentWidth}})],1)],1),t._v(" "),i("v-row",{directives:[{name:"show",rawName:"v-show",value:t.showTopToBottomImg(e),expression:"showTopToBottomImg(slideMdFile)"}],staticClass:"fill-height",attrs:{"no-gutters":""}},[i("v-col",{attrs:{cols:"6","align-self":"center"}},[i("UiSmartImg",{class:e.topToBottomImg?null:"cropImgBottom",attrs:{"image-asset":t.slidesFiles.imageAssetObjects[e.img],"max-height":t.calcComponentHeightAsString(1),contain:"",behind:""}})],1),t._v(" "),i("v-col",{class:t.selectByComponentWidth({md:"pa-12"},"pa-4"),attrs:{cols:"6","align-self":"center"}},[i("UiCarouselText",{attrs:{"button-to-right":!1,"slide-markdown-file":e,"carousel-width":t.componentWidth}})],1)],1)],1)})),1)],1)]}}])})],1)}),[],!1,null,null,null);e.default=h.exports;r()(h,{UiSmartBackgroundImg:i(963).default,UiCarouselText:i(1108).default,UiSmartImg:i(225).default}),r()(h,{VCarousel:a.a,VCarouselItem:l.a,VCol:c.a,VHover:d.a,VRow:u.a})},1108:function(t,e,i){"use strict";i.r(e);var o={mixins:[i(1031).a],props:{buttonToRight:{type:Boolean},slideMarkdownFile:{type:Object,required:!0},carouselWidth:{type:Number,required:!0}}},n=i(16),s=i(21),r=i.n(s),a=i(947),l=i(948),c=Object(n.a)(o,(function(){var t=this,e=t.$createElement,i=t._self._c||e;return i("v-row",{attrs:{"no-gutters":"","align-self":"center"}},[i("v-col",{attrs:{cols:"12"}},[i("div",{staticClass:"font-weight-black",class:t.selectByComponentWidthUnbound({lg:t.buttonToRight?"text-h3":"text-h4",md:"text-h4",sm:"text-h5"},"text-h6",t.carouselWidth)},[t._v("\n      "+t._s(t.slideMarkdownFile.title)+"\n    ")])]),t._v(" "),i("v-col",{directives:[{name:"show",rawName:"v-show",value:t.buttonToRight,expression:"buttonToRight"}],attrs:{cols:t.selectByComponentWidthUnbound({sm:9},8,t.carouselWidth)}},[i("div",{class:t.selectByComponentWidthUnbound({md:"text-body-1",sm:"text-body-2"},"text-caption",t.carouselWidth)},[i("nuxt-content",{attrs:{document:t.slideMarkdownFile}})],1)]),t._v(" "),i("v-col",{directives:[{name:"show",rawName:"v-show",value:t.buttonToRight,expression:"buttonToRight"}],staticClass:"pl-4",attrs:{"align-self":"center",cols:t.selectByComponentWidthUnbound({sm:3},4,t.carouselWidth)}},[i("UiStyledButton",{attrs:{href:t.slideMarkdownFile.href,text:"More Info","x-large":t.selectByComponentWidthUnbound({md:!0},!1,t.carouselWidth)}})],1),t._v(" "),i("v-col",{directives:[{name:"show",rawName:"v-show",value:!t.buttonToRight,expression:"!buttonToRight"}],attrs:{cols:"12"}},[i("p",{class:t.selectByComponentWidthUnbound({md:"text-body-1 mb-5",sm:"text-body-2 mb-3"},"text-caption mb-2",t.carouselWidth)},[i("nuxt-content",{attrs:{document:t.slideMarkdownFile}})],1),t._v(" "),i("UiStyledButton",{staticClass:"ma-auto",attrs:{href:t.slideMarkdownFile.href,text:"More Info","x-large":t.selectByComponentWidthUnbound({md:!0},!1,t.carouselWidth)}})],1)],1)}),[],!1,null,null,null);e.default=c.exports;r()(c,{UiStyledButton:i(969).default}),r()(c,{VCol:a.a,VRow:l.a})},1140:function(t,e,i){"use strict";i(1078)},1141:function(t,e,i){var o=i(10)(!1);o.push([t.i,".cropImgBottom .v-image__image--cover{background-position:top!important}.background-light>.v-responsive{background:var(--v-primary-lighten1)}.background-dark>.v-responsive{background:var(--v-primary-base)}.gradient-fill-carousel>.v-responsive>.v-responsive__content{background:linear-gradient(180deg,transparent,70%,rgba(0,0,0,.2))}",""]),t.exports=o},406:function(t,e,i){"use strict";var o=i(227);e.a=o.a},958:function(t,e,i){var o=i(962);o.__esModule&&(o=o.default),"string"==typeof o&&(o=[[t.i,o,""]]),o.locals&&(t.exports=o.locals);(0,i(11).default)("787c8c40",o,!0,{sourceMap:!1})},960:function(t,e,i){"use strict";i.r(e);var o={props:{imageAsset:{type:Object,required:!0},altText:{type:String,default:""},styleText:{type:String,default:""}}},n=i(16),s=Object(n.a)(o,(function(){var t=this.$createElement;return(this._self._c||t)("noscript",{inlineTemplate:{render:function(){var t=this,e=t.$createElement;return(t._self._c||e)("div",{staticClass:"fill-height attach-classes",style:'background-image: url("'+t.imageAsset.optimizedImagePath+'"  ); '+t.styleText})},staticRenderFns:[]}})}),[],!1,null,null,null);e.default=s.exports},961:function(t,e,i){"use strict";i(958)},962:function(t,e,i){var o=i(10)(!1);o.push([t.i,".center-background,.slot-center-background .attach-classes{background-position:50%}.cover-background,.slot-cover-background .attach-classes{background-size:cover}.contain-background,.slot-contain-background .attach-classes{background-size:contain;background-color:#fff}.full-size{height:100%;width:100%}.auto-size{height:auto;width:auto}",""]),t.exports=o},963:function(t,e,i){"use strict";i.r(e);var o={props:{imageAsset:{type:Object,required:!0},height:{type:String,default:null},width:{type:String,default:null},minHeight:{type:String,default:null},alt:{type:String,default:""},contain:{type:Boolean,default:!1}}},n=(i(961),i(16)),s=i(21),r=i.n(s),a=i(148),l=Object(n.a)(o,(function(){var t=this,e=t.$createElement,i=t._self._c||e;return t.imageAsset.isSvgImage||t.$config.optimizeImages?i("UiSmartImgFileTypesWrapper",{attrs:{"image-asset":t.imageAsset,height:t.height,width:t.width,"min-height":t.minHeight,alt:t.alt,behind:""},scopedSlots:t._u([{key:"svgImgComponent",fn:function(e){var o=e.imageAsset,n=e.styleText;return[i("div",{staticClass:"lazyload fill-height center-background attach-classes hide-with-noscript",class:t.contain?"contain-background":"cover-background",style:n,attrs:{"data-bgset":o.optimizedImagePath,"data-sizes":"auto"}}),t._v(" "),i("UiNoScriptBackgroundImg",{staticClass:"fill-height slot-center-background",class:t.contain?"slot-contain-background":"slot-cover-background",attrs:{"image-asset":o,"style-text":n}})]}},{key:"imgComponent",fn:function(e){var o=e.imageAsset,n=e.styleText;return[i("div",{staticClass:"lazyload fill-height center-background attach-classes hide-with-noscript",class:t.contain?"contain-background":"cover-background",style:n,attrs:{"data-bgset":o.responsiveWebpImage.srcSet+" [type: image/webp] |\n                    "+o.responsiveImage.srcSet,"data-sizes":"auto"}}),t._v(" "),i("UiNoScriptBackgroundImg",{staticClass:"slot-center-background",class:t.contain?"slot-contain-background":"slot-cover-background",attrs:{"image-asset":o,"style-text":n}})]}}],null,!1,3808305052)}):i("v-img",{class:t.contain?"full-size":"auto-size",staticStyle:{"z-index":"-1"},attrs:{src:t.imageAsset.optimizedImagePath,alt:t.alt,contain:t.contain,"min-height":t.minHeight}})}),[],!1,null,null,null);e.default=l.exports;r()(l,{UiNoScriptBackgroundImg:i(960).default,UiSmartImgFileTypesWrapper:i(407).default}),r()(l,{VImg:a.a})},969:function(t,e,i){"use strict";i.r(e);var o={props:{id:{type:String,default:null},href:{type:String,default:null},to:{type:String,default:null},text:{type:String,default:""},icon:{type:String,default:""},large:{type:Boolean,default:!1},xLarge:{type:Boolean,default:!1},small:{type:Boolean,default:!1},xSmall:{type:Boolean,default:!1},doHover:{type:Boolean,default:!1}},data:()=>({prevButtonHoverId:""}),computed:{buttonHoverId(){return this.$store.state.buttonHover.buttonHoverId},shouldHover(){return this.doHover&&""===this.buttonHoverId}},methods:{setButtonHoverId(t){this.prevButtonHoverId=this.buttonHoverId,this.$store.commit("buttonHover/setButtonHoverId",t)},unsetButtonHoverId(){this.prevButtonHoverId="",this.$store.commit("buttonHover/setButtonHoverId",this.prevButtonHoverId)}}},n=i(16),s=i(21),r=i.n(s),a=i(227),l=i(199),c=Object(n.a)(o,(function(){var t=this,e=t.$createElement,i=t._self._c||e;return i("div",{staticClass:"simplebutton"},[i("v-btn",{class:t.$vuetify.theme.dark?t.shouldHover?"custom-hover primary":"primary":t.shouldHover?"custom-hover secondary":"secondary",attrs:{id:t.id,large:t.large,"x-large":t.xLarge,small:t.small,"x-small":t.xSmall,href:t.href,"to:":t.to,ripple:!1},on:{mouseover:function(e){return t.setButtonHoverId(t.id)},mouseleave:function(e){return t.unsetButtonHoverId(t.id)},click:function(e){return e.stopPropagation(),t.$emit("btn-click",!0)}}},[t.icon?i("v-icon",{staticClass:"pr-3 center"},[t._v("\n      "+t._s(t.icon)+"\n    ")]):t._e(),t._v("\n    "+t._s(t.text)+"\n  ")],1)],1)}),[],!1,null,null,null);e.default=c.exports;r()(c,{VBtn:a.a,VIcon:l.a})},980:function(t,e,i){"use strict";var o=i(114),n=i(37),s=i(6),r=i(7);e.a=Object(s.a)(o.a,n.a).extend({name:"v-hover",props:{disabled:{type:Boolean,default:!1},value:{type:Boolean,default:void 0}},methods:{onMouseEnter(){this.runDelay("open")},onMouseLeave(){this.runDelay("close")}},render(){return this.$scopedSlots.default||void 0!==this.value?(this.$scopedSlots.default&&(t=this.$scopedSlots.default({hover:this.isActive})),Array.isArray(t)&&1===t.length&&(t=t[0]),t&&!Array.isArray(t)&&t.tag?(this.disabled||(t.data=t.data||{},this._g(t.data,{mouseenter:this.onMouseEnter,mouseleave:this.onMouseLeave})),t):(Object(r.c)("v-hover should only contain a single element",this),t)):(Object(r.c)("v-hover is missing a default scopedSlot or bound value",this),null);var t}})},981:function(t,e,i){"use strict";var o=i(113);e.a=o.a.extend({name:"button-group",provide(){return{btnToggle:this}},computed:{classes(){return o.a.options.computed.classes.call(this)}},methods:{genData:o.a.options.methods.genData}})},992:function(t,e,i){var o=i(993);o.__esModule&&(o=o.default),"string"==typeof o&&(o=[[t.i,o,""]]),o.locals&&(t.exports=o.locals);(0,i(11).default)("26754d5a",o,!0,{sourceMap:!1})},993:function(t,e,i){var o=i(10)(!1);o.push([t.i,".v-carousel{overflow:hidden;position:relative;width:100%}.v-carousel__controls{align-items:center;background:rgba(0,0,0,.3);bottom:0;display:flex;height:50px;justify-content:center;list-style-type:none;position:absolute;width:100%;z-index:1}.v-carousel__controls>.v-item-group{flex:0 1 auto}.v-carousel__controls__item{margin:0 8px}.v-carousel__controls__item .v-icon{opacity:.5}.v-carousel__controls__item--active .v-icon{opacity:1;vertical-align:middle}.v-carousel__controls__item:hover{background:none}.v-carousel__controls__item:hover .v-icon{opacity:.8}.v-carousel__progress{margin:0;position:absolute;bottom:0;left:0;right:0}.v-carousel .v-window-item{display:block;height:inherit;text-decoration:none}.v-carousel--hide-delimiter-background .v-carousel__controls{background:transparent}.v-carousel--vertical-delimiters .v-carousel__controls{height:100%!important;width:50px}",""]),t.exports=o},994:function(t,e,i){var o=i(995);o.__esModule&&(o=o.default),"string"==typeof o&&(o=[[t.i,o,""]]),o.locals&&(t.exports=o.locals);(0,i(11).default)("4de61803",o,!0,{sourceMap:!1})},995:function(t,e,i){var o=i(10)(!1);o.push([t.i,".v-window{overflow:hidden}.v-window__container{display:flex;flex-direction:column;height:inherit;position:relative;transition:.3s cubic-bezier(.25,.8,.5,1)}.v-window__container--is-active{overflow:hidden}.v-window__next,.v-window__prev{background:rgba(0,0,0,.3);border-radius:50%;position:absolute;margin:0 16px;top:calc(50% - 20px);z-index:1}.v-window__next .v-btn:hover,.v-window__prev .v-btn:hover{background:none}.v-application--is-ltr .v-window__prev{left:0}.v-application--is-ltr .v-window__next,.v-application--is-rtl .v-window__prev{right:0}.v-application--is-rtl .v-window__next{left:0}.v-window--show-arrows-on-hover{overflow:hidden}.v-window--show-arrows-on-hover .v-window__next,.v-window--show-arrows-on-hover .v-window__prev{transition:transform .2s cubic-bezier(.25,.8,.5,1)}.v-application--is-ltr .v-window--show-arrows-on-hover .v-window__prev{-webkit-transform:translateX(-200%);transform:translateX(-200%)}.v-application--is-ltr .v-window--show-arrows-on-hover .v-window__next,.v-application--is-rtl .v-window--show-arrows-on-hover .v-window__prev{-webkit-transform:translateX(200%);transform:translateX(200%)}.v-application--is-rtl .v-window--show-arrows-on-hover .v-window__next{-webkit-transform:translateX(-200%);transform:translateX(-200%)}.v-window--show-arrows-on-hover:hover .v-window__next,.v-window--show-arrows-on-hover:hover .v-window__prev{-webkit-transform:translateX(0);transform:translateX(0)}.v-window-x-reverse-transition-enter-active,.v-window-x-reverse-transition-leave-active,.v-window-x-transition-enter-active,.v-window-x-transition-leave-active,.v-window-y-reverse-transition-enter-active,.v-window-y-reverse-transition-leave-active,.v-window-y-transition-enter-active,.v-window-y-transition-leave-active{transition:.3s cubic-bezier(.25,.8,.5,1)}.v-window-x-reverse-transition-leave,.v-window-x-reverse-transition-leave-to,.v-window-x-transition-leave,.v-window-x-transition-leave-to,.v-window-y-reverse-transition-leave,.v-window-y-reverse-transition-leave-to,.v-window-y-transition-leave,.v-window-y-transition-leave-to{position:absolute!important;top:0;width:100%}.v-window-x-transition-enter{-webkit-transform:translateX(100%);transform:translateX(100%)}.v-window-x-reverse-transition-enter,.v-window-x-transition-leave-to{-webkit-transform:translateX(-100%);transform:translateX(-100%)}.v-window-x-reverse-transition-leave-to{-webkit-transform:translateX(100%);transform:translateX(100%)}.v-window-y-transition-enter{-webkit-transform:translateY(100%);transform:translateY(100%)}.v-window-y-reverse-transition-enter,.v-window-y-transition-leave-to{-webkit-transform:translateY(-100%);transform:translateY(-100%)}.v-window-y-reverse-transition-leave-to{-webkit-transform:translateY(100%);transform:translateY(100%)}",""]),t.exports=o}}]);