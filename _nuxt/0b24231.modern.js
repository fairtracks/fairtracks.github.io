(window.webpackJsonp=window.webpackJsonp||[]).push([[41,55],{1036:function(t,e,o){"use strict";e.a={methods:{selectByComponentWidthUnbound:(t,e,o)=>o>=1888&&"xl"in t?t.xl:o>=1248&&"lg"in t?t.lg:o>=960&&"md"in t?t.md:o>=600&&"sm"in t?t.sm:"xs"in t?t.xs:e,calcComponentHeightAsStringUnbound(){return"".concat((arguments.length>2&&void 0!==arguments[2]?arguments[2]:0)*(arguments.length>0&&void 0!==arguments[0]?arguments[0]:1)+(arguments.length>1&&void 0!==arguments[1]?arguments[1]:0),"px")}}}},1113:function(t,e,o){"use strict";o.r(e);var n={mixins:[o(1036).a],props:{buttonToRight:{type:Boolean},slideMarkdownFile:{type:Object,required:!0},carouselWidth:{type:Number,required:!0}}},s=o(16),r=o(21),l=o.n(r),i=o(952),a=o(953),u=Object(s.a)(n,(function(){var t=this,e=t.$createElement,o=t._self._c||e;return o("v-row",{attrs:{"no-gutters":"","align-self":"center"}},[o("v-col",{attrs:{cols:"12"}},[o("div",{staticClass:"font-weight-black",class:t.selectByComponentWidthUnbound({lg:t.buttonToRight?"text-h3":"text-h4",md:"text-h4",sm:"text-h5"},"text-h6",t.carouselWidth)},[t._v("\n      "+t._s(t.slideMarkdownFile.title)+"\n    ")])]),t._v(" "),o("v-col",{directives:[{name:"show",rawName:"v-show",value:t.buttonToRight,expression:"buttonToRight"}],attrs:{cols:t.selectByComponentWidthUnbound({sm:9},8,t.carouselWidth)}},[o("div",{class:t.selectByComponentWidthUnbound({md:"text-body-1",sm:"text-body-2"},"text-caption",t.carouselWidth)},[o("nuxt-content",{attrs:{document:t.slideMarkdownFile}})],1)]),t._v(" "),o("v-col",{directives:[{name:"show",rawName:"v-show",value:t.buttonToRight,expression:"buttonToRight"}],staticClass:"pl-4",attrs:{"align-self":"center",cols:t.selectByComponentWidthUnbound({sm:3},4,t.carouselWidth)}},[o("UiStyledButton",{attrs:{href:t.slideMarkdownFile.href,text:"More Info","x-large":t.selectByComponentWidthUnbound({md:!0},!1,t.carouselWidth)}})],1),t._v(" "),o("v-col",{directives:[{name:"show",rawName:"v-show",value:!t.buttonToRight,expression:"!buttonToRight"}],attrs:{cols:"12"}},[o("p",{class:t.selectByComponentWidthUnbound({md:"text-body-1 mb-5",sm:"text-body-2 mb-3"},"text-caption mb-2",t.carouselWidth)},[o("nuxt-content",{attrs:{document:t.slideMarkdownFile}})],1),t._v(" "),o("UiStyledButton",{staticClass:"ma-auto",attrs:{href:t.slideMarkdownFile.href,text:"More Info","x-large":t.selectByComponentWidthUnbound({md:!0},!1,t.carouselWidth)}})],1)],1)}),[],!1,null,null,null);e.default=u.exports;l()(u,{UiStyledButton:o(974).default}),l()(u,{VCol:i.a,VRow:a.a})},974:function(t,e,o){"use strict";o.r(e);var n={props:{id:{type:String,default:null},href:{type:String,default:null},to:{type:String,default:null},text:{type:String,default:""},icon:{type:String,default:""},large:{type:Boolean,default:!1},xLarge:{type:Boolean,default:!1},small:{type:Boolean,default:!1},xSmall:{type:Boolean,default:!1},doHover:{type:Boolean,default:!1}},data:()=>({prevButtonHoverId:""}),computed:{buttonHoverId(){return this.$store.state.buttonHover.buttonHoverId},shouldHover(){return this.doHover&&""===this.buttonHoverId}},methods:{setButtonHoverId(t){this.prevButtonHoverId=this.buttonHoverId,this.$store.commit("buttonHover/setButtonHoverId",t)},unsetButtonHoverId(){this.prevButtonHoverId="",this.$store.commit("buttonHover/setButtonHoverId",this.prevButtonHoverId)}}},s=o(16),r=o(21),l=o.n(r),i=o(228),a=o(200),u=Object(s.a)(n,(function(){var t=this,e=t.$createElement,o=t._self._c||e;return o("div",{staticClass:"simplebutton"},[o("v-btn",{class:t.$vuetify.theme.dark?t.shouldHover?"custom-hover primary":"primary":t.shouldHover?"custom-hover secondary":"secondary",attrs:{id:t.id,large:t.large,"x-large":t.xLarge,small:t.small,"x-small":t.xSmall,href:t.href,"to:":t.to,ripple:!1},on:{mouseover:function(e){return t.setButtonHoverId(t.id)},mouseleave:function(e){return t.unsetButtonHoverId(t.id)},click:function(e){return e.stopPropagation(),t.$emit("btn-click",!0)}}},[t.icon?o("v-icon",{staticClass:"pr-3 center"},[t._v("\n      "+t._s(t.icon)+"\n    ")]):t._e(),t._v("\n    "+t._s(t.text)+"\n  ")],1)],1)}),[],!1,null,null,null);e.default=u.exports;l()(u,{VBtn:i.a,VIcon:a.a})}}]);