(window.webpackJsonp=window.webpackJsonp||[]).push([[41,55],{1136:function(t,e,o){"use strict";o.r(e);var n=o(114);function r(t,e){var o=Object.keys(t);if(Object.getOwnPropertySymbols){var n=Object.getOwnPropertySymbols(t);e&&(n=n.filter((function(e){return Object.getOwnPropertyDescriptor(t,e).enumerable}))),o.push.apply(o,n)}return o}function s(t){for(var e=1;e<arguments.length;e++){var o=null!=arguments[e]?arguments[e]:{};e%2?r(Object(o),!0).forEach((function(e){i(t,e,o[e])})):Object.getOwnPropertyDescriptors?Object.defineProperties(t,Object.getOwnPropertyDescriptors(o)):r(Object(o)).forEach((function(e){Object.defineProperty(t,e,Object.getOwnPropertyDescriptor(o,e))}))}return t}function i(t,e,o){return e in t?Object.defineProperty(t,e,{value:o,enumerable:!0,configurable:!0,writable:!0}):t[e]=o,t}var l={props:{id:{type:String,default:null},href:{type:String,default:null},to:{type:String,default:null},text:{type:String,default:""},icon:{type:String,default:""},large:{type:Boolean,default:!1},xLarge:{type:Boolean,default:!1},small:{type:Boolean,default:!1},xSmall:{type:Boolean,default:!1},doHover:{type:Boolean,default:!1}},data:function(){return{prevButtonHoverId:""}},computed:s(s({},Object(n.b)({buttonHoverId:function(t){return t.buttonHover.buttonHoverId}})),{},{shouldHover:function(){return this.doHover&&""===this.buttonHoverId}}),mounted:function(){document.addEventListener("mouseup",this.unsetButtonHoverId)},methods:{setButtonHoverId:function(t){this.prevButtonHoverId=this.buttonHoverId,this.$store.commit("buttonHover/setButtonHoverId",t)},unsetButtonHoverId:function(){this.prevButtonHoverId="",this.$store.commit("buttonHover/setButtonHoverId",this.prevButtonHoverId)}}},u=o(25),a=o(28),c=o.n(a),d=o(263),p=o(233),v=Object(u.a)(l,(function(){var t=this,e=t.$createElement,o=t._self._c||e;return o("div",{staticClass:"simplebutton"},[o("v-btn",{class:(t.$vuetify.theme.dark?"primary":"secondary")+(t.shouldHover?" custom-hover":""),attrs:{id:t.id,large:t.large,"x-large":t.xLarge,small:t.small,"x-small":t.xSmall,href:t.href,"to:":t.to,ripple:!1},on:{mouseover:function(e){return t.setButtonHoverId(t.id)},mouseout:function(e){return t.unsetButtonHoverId()},click:function(t){t.stopPropagation()},mousedown:function(t){t.stopPropagation()}}},[t.icon?o("v-icon",{staticClass:"pr-3 center"},[t._v("\n      "+t._s(t.icon)+"\n    ")]):t._e(),t._v("\n    "+t._s(t.text)+"\n  ")],1)],1)}),[],!1,null,null,null);e.default=v.exports;c()(v,{VBtn:d.a,VIcon:p.a})},1198:function(t,e,o){"use strict";e.a={methods:{selectByComponentWidthUnbound:function(t,e,o){return o>=1888&&"xl"in t?t.xl:o>=1248&&"lg"in t?t.lg:o>=960&&"md"in t?t.md:o>=600&&"sm"in t?t.sm:"xs"in t?t.xs:e},calcComponentHeightAsStringUnbound:function(){var t=arguments.length>0&&void 0!==arguments[0]?arguments[0]:1,e=arguments.length>1&&void 0!==arguments[1]?arguments[1]:0,o=arguments.length>2&&void 0!==arguments[2]?arguments[2]:0;return"".concat(o*t+e,"px")}}}},1275:function(t,e,o){"use strict";o.r(e);var n={mixins:[o(1198).a],props:{buttonToRight:{type:Boolean},slideMarkdownFile:{type:Object,required:!0},carouselWidth:{type:Number,default:void 0}}},r=o(25),s=o(28),i=o.n(s),l=o(1114),u=o(1115),a=Object(r.a)(n,(function(){var t=this,e=t.$createElement,o=t._self._c||e;return o("v-row",{attrs:{"no-gutters":"","align-self":"center"}},[o("v-col",{attrs:{cols:"12"}},[o("div",{staticClass:"font-weight-black",class:t.selectByComponentWidthUnbound({lg:t.buttonToRight?"text-h3":"text-h4",md:"text-h4",sm:"text-h5"},"text-h6",t.carouselWidth)},[t._v("\n      "+t._s(t.slideMarkdownFile.title)+"\n    ")])]),t._v(" "),o("v-col",{directives:[{name:"show",rawName:"v-show",value:t.buttonToRight,expression:"buttonToRight"}],attrs:{cols:t.selectByComponentWidthUnbound({sm:9},8,t.carouselWidth)}},[o("div",{class:t.selectByComponentWidthUnbound({md:"text-body-1",sm:"text-body-2"},"text-caption",t.carouselWidth)},[o("nuxt-content",{attrs:{document:t.slideMarkdownFile}})],1)]),t._v(" "),o("v-col",{directives:[{name:"show",rawName:"v-show",value:t.buttonToRight,expression:"buttonToRight"}],staticClass:"pl-4",attrs:{"align-self":"center",cols:t.selectByComponentWidthUnbound({sm:3},4,t.carouselWidth)}},[o("UiStyledButton",{attrs:{href:t.slideMarkdownFile.href,text:"More Info","x-large":t.selectByComponentWidthUnbound({md:!0},!1,t.carouselWidth)}})],1),t._v(" "),o("v-col",{directives:[{name:"show",rawName:"v-show",value:!t.buttonToRight,expression:"!buttonToRight"}],attrs:{cols:"12"}},[o("p",{class:t.selectByComponentWidthUnbound({md:"text-body-1 mb-5",sm:"text-body-2 mb-3"},"text-caption mb-2",t.carouselWidth)},[o("nuxt-content",{attrs:{document:t.slideMarkdownFile}})],1),t._v(" "),o("UiStyledButton",{staticClass:"ma-auto",attrs:{href:t.slideMarkdownFile.href,text:"More Info","x-large":t.selectByComponentWidthUnbound({md:!0},!1,t.carouselWidth)}})],1)],1)}),[],!1,null,null,null);e.default=a.exports;i()(a,{UiStyledButton:o(1136).default}),i()(a,{VCol:l.a,VRow:u.a})}}]);