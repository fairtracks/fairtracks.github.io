(window.webpackJsonp=window.webpackJsonp||[]).push([[41,44,47,48],{1029:function(t,e,i){"use strict";i.r(e);var n={props:{id:{type:String,default:null},href:{type:String,default:null},text:{type:String,default:""},xLarge:{type:Boolean,default:!1},doHover:{type:Boolean,default:!1}},data:function(){return{prevButtonHoverId:""}},computed:{buttonHoverId:function(){return this.$store.state.buttonHover.buttonHoverId},shouldHover:function(){return this.doHover&&""===this.buttonHoverId}},methods:{setButtonHoverId:function(t){this.prevButtonHoverId=this.buttonHoverId,this.$store.commit("buttonHover/setButtonHoverId",t)},unsetButtonHoverId:function(){this.prevButtonHoverId="",this.$store.commit("buttonHover/setButtonHoverId",this.prevButtonHoverId)}}},o=i(25),a=i(30),r=i.n(a),s=i(258),l=Object(o.a)(n,(function(){var t=this,e=t.$createElement,i=t._self._c||e;return i("div",{staticClass:"simplebutton"},[i("v-btn",{staticClass:"secondary",class:t.shouldHover?"custom-hover":null,attrs:{id:t.id,"x-large":t.xLarge,href:t.href,ripple:!1},on:{mouseover:function(e){return t.setButtonHoverId(t.id)},mouseleave:function(e){return t.unsetButtonHoverId(t.id)},click:function(e){return e.stopPropagation(),t.$emit("btn-click",!0)}}},[t._v("\n    "+t._s(t.text)+"\n  ")])],1)}),[],!1,null,null,null);e.default=l.exports;r()(l,{VBtn:s.a})},1038:function(t,e,i){"use strict";var n=i(140),o=i(35),a=i(9),r=i(10);e.a=Object(a.a)(n.a,o.a).extend({name:"v-hover",props:{disabled:{type:Boolean,default:!1},value:{type:Boolean,default:void 0}},methods:{onMouseEnter:function(){this.runDelay("open")},onMouseLeave:function(){this.runDelay("close")}},render:function(){return this.$scopedSlots.default||void 0!==this.value?(this.$scopedSlots.default&&(t=this.$scopedSlots.default({hover:this.isActive})),Array.isArray(t)&&1===t.length&&(t=t[0]),t&&!Array.isArray(t)&&t.tag?(this.disabled||(t.data=t.data||{},this._g(t.data,{mouseenter:this.onMouseEnter,mouseleave:this.onMouseLeave})),t):(Object(r.c)("v-hover should only contain a single element",this),t)):(Object(r.c)("v-hover is missing a default scopedSlot or bound value",this),null);var t}})},1039:function(t,e,i){var n=i(1040);n.__esModule&&(n=n.default),"string"==typeof n&&(n=[[t.i,n,""]]),n.locals&&(t.exports=n.locals);(0,i(12).default)("613880ab",n,!0,{sourceMap:!1})},1040:function(t,e,i){var n=i(11)(!1);n.push([t.i,".v-dialog{border-radius:4px;margin:24px;overflow-y:auto;pointer-events:auto;transition:.3s cubic-bezier(.25,.8,.25,1);width:100%;z-index:inherit;box-shadow:0 11px 15px -7px rgba(0,0,0,.2),0 24px 38px 3px rgba(0,0,0,.14),0 9px 46px 8px rgba(0,0,0,.12)}.v-dialog:not(.v-dialog--fullscreen){max-height:90%}.v-dialog>*{width:100%}.v-dialog>.v-card>.v-card__title{font-size:1.25rem;font-weight:500;letter-spacing:.0125em;padding:16px 24px 10px}.v-dialog>.v-card>.v-card__subtitle,.v-dialog>.v-card>.v-card__text{padding:0 24px 20px}.v-dialog>.v-card>.v-card__actions{padding:8px 16px}.v-dialog__content{align-items:center;display:flex;height:100%;justify-content:center;left:0;pointer-events:none;position:fixed;top:0;transition:.2s cubic-bezier(.25,.8,.25,1),z-index 1ms;width:100%;z-index:6;outline:none}.v-dialog__container{display:none}.v-dialog__container--attached{display:inline}.v-dialog--animated{-webkit-animation-duration:.15s;animation-duration:.15s;-webkit-animation-name:animate-dialog;animation-name:animate-dialog;-webkit-animation-timing-function:cubic-bezier(.25,.8,.25,1);animation-timing-function:cubic-bezier(.25,.8,.25,1)}.v-dialog--fullscreen{border-radius:0;margin:0;height:100%;position:fixed;overflow-y:auto;top:0;left:0}.v-dialog--fullscreen>.v-card{min-height:100%;min-width:100%;margin:0!important;padding:0!important}.v-dialog--scrollable,.v-dialog--scrollable>form{display:flex}.v-dialog--scrollable>.v-card,.v-dialog--scrollable>form>.v-card{display:flex;flex:1 1 100%;flex-direction:column;max-height:100%;max-width:100%}.v-dialog--scrollable>.v-card>.v-card__actions,.v-dialog--scrollable>.v-card>.v-card__title,.v-dialog--scrollable>form>.v-card>.v-card__actions,.v-dialog--scrollable>form>.v-card>.v-card__title{flex:0 0 auto}.v-dialog--scrollable>.v-card>.v-card__text,.v-dialog--scrollable>form>.v-card>.v-card__text{-webkit-backface-visibility:hidden;backface-visibility:hidden;flex:1 1 auto;overflow-y:auto}@-webkit-keyframes animate-dialog{0%{-webkit-transform:scale(1);transform:scale(1)}50%{-webkit-transform:scale(1.03);transform:scale(1.03)}to{-webkit-transform:scale(1);transform:scale(1)}}@keyframes animate-dialog{0%{-webkit-transform:scale(1);transform:scale(1)}50%{-webkit-transform:scale(1.03);transform:scale(1.03)}to{-webkit-transform:scale(1);transform:scale(1)}}",""]),t.exports=n},1043:function(t,e,i){var n=i(1061);n.__esModule&&(n=n.default),"string"==typeof n&&(n=[[t.i,n,""]]),n.locals&&(t.exports=n.locals);(0,i(12).default)("7140d6a0",n,!0,{sourceMap:!1})},1045:function(t,e,i){"use strict";i.r(e);var n={props:{value:Boolean,buttons:{type:Array,default:function(){return[]}}},computed:{show:{get:function(){return this.value},set:function(t){this.$emit("input",t)}}}},o=i(25),a=i(30),r=i.n(a),s=i(236),l=i(1009),c=(i(1039),i(1012)),u=i(109),d=i(142),h=i(262),f=i(264),v=i(263),m=i(261),g=i(35),p=i(143),b=i(9),y=i(10),x=i(0);function w(t,e){var i=Object.keys(t);if(Object.getOwnPropertySymbols){var n=Object.getOwnPropertySymbols(t);e&&(n=n.filter((function(e){return Object.getOwnPropertyDescriptor(t,e).enumerable}))),i.push.apply(i,n)}return i}function _(t){for(var e=1;e<arguments.length;e++){var i=null!=arguments[e]?arguments[e]:{};e%2?w(Object(i),!0).forEach((function(e){S(t,e,i[e])})):Object.getOwnPropertyDescriptors?Object.defineProperties(t,Object.getOwnPropertyDescriptors(i)):w(Object(i)).forEach((function(e){Object.defineProperty(t,e,Object.getOwnPropertyDescriptor(i,e))}))}return t}function k(t){return function(t){if(Array.isArray(t))return O(t)}(t)||function(t){if("undefined"!=typeof Symbol&&null!=t[Symbol.iterator]||null!=t["@@iterator"])return Array.from(t)}(t)||function(t,e){if(!t)return;if("string"==typeof t)return O(t,e);var i=Object.prototype.toString.call(t).slice(8,-1);"Object"===i&&t.constructor&&(i=t.constructor.name);if("Map"===i||"Set"===i)return Array.from(t);if("Arguments"===i||/^(?:Ui|I)nt(?:8|16|32)(?:Clamped)?Array$/.test(i))return O(t,e)}(t)||function(){throw new TypeError("Invalid attempt to spread non-iterable instance.\nIn order to be iterable, non-array objects must have a [Symbol.iterator]() method.")}()}function O(t,e){(null==e||e>t.length)&&(e=t.length);for(var i=0,n=new Array(e);i<e;i++)n[i]=t[i];return n}function S(t,e,i){return e in t?Object.defineProperty(t,e,{value:i,enumerable:!0,configurable:!0,writable:!0}):t[e]=i,t}var A=Object(b.a)(u.a,d.a,h.a,f.a,v.a,m.a,g.a).extend({name:"v-dialog",directives:{ClickOutside:p.a},props:{dark:Boolean,disabled:Boolean,fullscreen:Boolean,light:Boolean,maxWidth:[String,Number],noClickAnimation:Boolean,origin:{type:String,default:"center center"},persistent:Boolean,retainFocus:{type:Boolean,default:!0},scrollable:Boolean,transition:{type:[String,Boolean],default:"dialog-transition"},width:[String,Number]},data:function(){return{activatedBy:null,animate:!1,animateTimeout:-1,isActive:!!this.value,stackMinZIndex:200,previousActiveElement:null}},computed:{classes:function(){var t;return S(t={},"v-dialog ".concat(this.contentClass).trim(),!0),S(t,"v-dialog--active",this.isActive),S(t,"v-dialog--persistent",this.persistent),S(t,"v-dialog--fullscreen",this.fullscreen),S(t,"v-dialog--scrollable",this.scrollable),S(t,"v-dialog--animated",this.animate),t},contentClasses:function(){return{"v-dialog__content":!0,"v-dialog__content--active":this.isActive}},hasActivator:function(){return Boolean(!!this.$slots.activator||!!this.$scopedSlots.activator)}},watch:{isActive:function(t){var e;t?(this.show(),this.hideScroll()):(this.removeOverlay(),this.unbind(),null==(e=this.previousActiveElement)||e.focus())},fullscreen:function(t){this.isActive&&(t?(this.hideScroll(),this.removeOverlay(!1)):(this.showScroll(),this.genOverlay()))}},created:function(){this.$attrs.hasOwnProperty("full-width")&&Object(y.e)("full-width",this)},beforeMount:function(){var t=this;this.$nextTick((function(){t.isBooted=t.isActive,t.isActive&&t.show()}))},beforeDestroy:function(){"undefined"!=typeof window&&this.unbind()},methods:{animateClick:function(){var t=this;this.animate=!1,this.$nextTick((function(){t.animate=!0,window.clearTimeout(t.animateTimeout),t.animateTimeout=window.setTimeout((function(){return t.animate=!1}),150)}))},closeConditional:function(t){var e=t.target;return!(this._isDestroyed||!this.isActive||this.$refs.content.contains(e)||this.overlay&&e&&!this.overlay.$el.contains(e))&&this.activeZIndex>=this.getMaxZIndex()},hideScroll:function(){this.fullscreen?document.documentElement.classList.add("overflow-y-hidden"):f.a.options.methods.hideScroll.call(this)},show:function(){var t=this;!this.fullscreen&&!this.hideOverlay&&this.genOverlay(),this.$nextTick((function(){t.$nextTick((function(){t.$refs.content.contains(document.activeElement)||(t.previousActiveElement=document.activeElement,t.$refs.content.focus()),t.bind()}))}))},bind:function(){window.addEventListener("focusin",this.onFocusin)},unbind:function(){window.removeEventListener("focusin",this.onFocusin)},onClickOutside:function(t){this.$emit("click:outside",t),this.persistent?this.noClickAnimation||this.animateClick():this.isActive=!1},onKeydown:function(t){if(t.keyCode===x.x.esc&&!this.getOpenDependents().length)if(this.persistent)this.noClickAnimation||this.animateClick();else{this.isActive=!1;var e=this.getActivator();this.$nextTick((function(){return e&&e.focus()}))}this.$emit("keydown",t)},onFocusin:function(t){if(t&&this.retainFocus){var e=t.target;if(e&&![document,this.$refs.content].includes(e)&&!this.$refs.content.contains(e)&&this.activeZIndex>=this.getMaxZIndex()&&!this.getOpenDependentElements().some((function(t){return t.contains(e)}))){var i=k(this.$refs.content.querySelectorAll('button, [href], input, select, textarea, [tabindex]:not([tabindex="-1"])')).find((function(t){return!t.hasAttribute("disabled")}));i&&i.focus()}}},genContent:function(){var t=this;return this.showLazyContent((function(){return[t.$createElement(c.a,{props:{root:!0,light:t.light,dark:t.dark}},[t.$createElement("div",{class:t.contentClasses,attrs:_({role:"dialog",tabindex:t.isActive?0:void 0,"aria-modal":t.hideOverlay?void 0:"true"},t.getScopeIdAttrs()),on:{keydown:t.onKeydown},style:{zIndex:t.activeZIndex},ref:"content"},[t.genTransition()])])]}))},genTransition:function(){var t=this.genInnerContent();return this.transition?this.$createElement("transition",{props:{name:this.transition,origin:this.origin,appear:!0}},[t]):t},genInnerContent:function(){var t={class:this.classes,ref:"dialog",directives:[{name:"click-outside",value:{handler:this.onClickOutside,closeConditional:this.closeConditional,include:this.getOpenDependentElements}},{name:"show",value:this.isActive}],style:{transformOrigin:this.origin}};return this.fullscreen||(t.style=_(_({},t.style),{},{maxWidth:Object(x.h)(this.maxWidth),width:Object(x.h)(this.width)})),this.$createElement("div",t,this.getContentSlot())}},render:function(t){return t("div",{staticClass:"v-dialog__container",class:{"v-dialog__container--attached":""===this.attach||!0===this.attach||"attach"===this.attach}},[this.genActivator(),this.genContent()])}}),C=i(1010),I=Object(o.a)(n,(function(){var t=this,e=t.$createElement,i=t._self._c||e;return i("v-dialog",{model:{value:t.show,callback:function(e){t.show=e},expression:"show"}},[i("v-card",[t._t("default"),t._v(" "),i("v-col",{attrs:{"align-self":"end",cols:"12"}},[i("v-row",{class:1==t.buttons.length?"justify-end":"justify-space-between",attrs:{"no-gutters":""}},t._l(t.buttons,(function(e,n){return i("v-col",{key:"s_"+n,staticClass:"pa-0 ma-0",attrs:{cols:"auto","align-self":"end"}},[i("UiStyledButton",{staticClass:"text-weight-light",attrs:{id:"btn_"+n,href:e.link,text:e.text},on:{"btn-click":function(i){!e.link&&(t.show=!1)}}})],1)})),1)],1)],2)],1)}),[],!1,null,null,null);e.default=I.exports;r()(I,{UiStyledButton:i(1029).default}),r()(I,{VCard:s.a,VCol:l.a,VDialog:A,VRow:C.a})},1059:function(t,e,i){var n=i(1094);n.__esModule&&(n=n.default),"string"==typeof n&&(n=[[t.i,n,""]]),n.locals&&(t.exports=n.locals);(0,i(12).default)("01a00801",n,!0,{sourceMap:!1})},1060:function(t,e,i){"use strict";i(1043)},1061:function(t,e,i){var n=i(11)(!1);n.push([t.i,".image-box{box-sizing:border-box;position:relative;margin:auto;overflow:hidden}.image-box img{transition:all .3s;display:block;-webkit-transform:scale(1);transform:scale(1)}.image-hover img{max-width:100%;-webkit-transform:scale(1.1);transform:scale(1.1);opacity:1%}",""]),t.exports=n},1075:function(t,e,i){"use strict";i.r(e);var n={props:{imageAsset:{type:Object,required:!0},height:{type:String,default:null},width:{type:String,default:null},minHeight:{type:String,default:null},minWidth:{type:String,default:null},maxHeight:{type:String,default:null},maxWidth:{type:String,default:null},cropBottom:{type:Boolean,default:null},alt:{type:String,default:""}},data:function(){return{showDialog:!1}}},o=(i(1060),i(25)),a=i(30),r=i.n(a),s=i(1038),l=Object(o.a)(n,(function(){var t=this,e=t.$createElement,i=t._self._c||e;return i("div",[i("v-hover",{scopedSlots:t._u([{key:"default",fn:function(e){var n=e.hover;return[i("div",{staticClass:"image-box",class:n?"image-hover":null,on:{click:function(e){t.showDialog=!0}}},[i("UiSmartImg",{attrs:{"image-asset":t.imageAsset,height:t.height,width:t.width,"min-height":t.minHeight,"min-width":t.minWidth,"max-height":t.maxHeight,"max-width":t.maxWidth,"crop-bottom":t.cropBottom,alt:t.alt}})],1)]}}])}),t._v(" "),i("UiPopupDialog",{model:{value:t.showDialog,callback:function(e){t.showDialog=e},expression:"showDialog"}},[i("UiSmartImg",{attrs:{"image-asset":t.imageAsset}})],1)],1)}),[],!1,null,null,null);e.default=l.exports;r()(l,{UiSmartImg:i(257).default,UiPopupDialog:i(1045).default}),r()(l,{VHover:s.a})},1093:function(t,e,i){"use strict";i(1059)},1094:function(t,e,i){var n=i(11)(!1);n.push([t.i,".card-title[data-v-449143e2]{word-break:normal;line-height:1.7rem!important}",""]),t.exports=n},1130:function(t,e,i){"use strict";i.r(e);var n={props:{subSectionId:{type:String,required:!0},card:{type:Object,default:function(){}}}},o=(i(1093),i(25)),a=i(30),r=i.n(a),s=i(236),l=i(184),c=i(1009),u=i(225),d=i(1010),h=Object(o.a)(n,(function(){var t=this,e=t.$createElement,i=t._self._c||e;return i("v-card",{staticClass:"mx-auto",attrs:{width:"380"}},[i("v-responsive",{attrs:{height:"280"}},[i("v-row",{staticClass:"ma-2",attrs:{justify:"center","no-gutters":""}},[i("v-col",{attrs:{cols:"6"}},[i("UiZoomableImage",{attrs:{"image-asset":t.$getImageAssetObject("materials","previews",t.card.previewImg),"max-height":"300"}})],1),t._v(" "),i("v-col",{attrs:{cols:"6"}},[i("v-card-title",{staticClass:"text-subtitle-1 text-left font-weight-bold card-title"},[t._v("\n          "+t._s(t.card.title)+"\n        ")])],1)],1)],1)],1)}),[],!1,null,"449143e2",null);e.default=h.exports;r()(h,{UiZoomableImage:i(1075).default}),r()(h,{VCard:s.a,VCardTitle:l.d,VCol:c.a,VResponsive:u.a,VRow:d.a})}}]);