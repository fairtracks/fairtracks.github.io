(window.webpackJsonp=window.webpackJsonp||[]).push([[16],{562:function(e,t,n){},572:function(e,t,n){"use strict";n.r(t);var r={data:function(){return{years:[{color:"cyan",year:"1960"},{color:"green",year:"1970"},{color:"pink",year:"1980"},{color:"amber",year:"1990"},{color:"orange",year:"2000"},{color:"teal",year:"2020"}]}}},o=n(38),l=n(66),c=n.n(l),m=n(536),h=(n(9),n(12),n(13),n(4),n(14),n(8),n(15),n(2)),v=(n(562),n(7)),d=n(23);function f(object,e){var t=Object.keys(object);if(Object.getOwnPropertySymbols){var n=Object.getOwnPropertySymbols(object);e&&(n=n.filter((function(e){return Object.getOwnPropertyDescriptor(object,e).enumerable}))),t.push.apply(t,n)}return t}var y=Object(v.a)(d.a).extend({name:"v-timeline",provide:function(){return{timeline:this}},props:{alignTop:Boolean,dense:Boolean,reverse:Boolean},computed:{classes:function(){return function(e){for(var i=1;i<arguments.length;i++){var source=null!=arguments[i]?arguments[i]:{};i%2?f(Object(source),!0).forEach((function(t){Object(h.a)(e,t,source[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(source)):f(Object(source)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(source,t))}))}return e}({"v-timeline--align-top":this.alignTop,"v-timeline--dense":this.dense,"v-timeline--reverse":this.reverse},this.themeClasses)}},render:function(e){return e("div",{staticClass:"v-timeline",class:this.classes},this.$slots.default)}}),O=(n(250),n(100)),j=n(29);function _(object,e){var t=Object.keys(object);if(Object.getOwnPropertySymbols){var n=Object.getOwnPropertySymbols(object);e&&(n=n.filter((function(e){return Object.getOwnPropertyDescriptor(object,e).enumerable}))),t.push.apply(t,n)}return t}function w(e){for(var i=1;i<arguments.length;i++){var source=null!=arguments[i]?arguments[i]:{};i%2?_(Object(source),!0).forEach((function(t){Object(h.a)(e,t,source[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(source)):_(Object(source)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(source,t))}))}return e}var D=Object(v.a)(j.a,d.a).extend().extend({name:"v-timeline-item",inject:["timeline"],props:{color:{type:String,default:"primary"},fillDot:Boolean,hideDot:Boolean,icon:String,iconColor:String,large:Boolean,left:Boolean,right:Boolean,small:Boolean},computed:{hasIcon:function(){return!!this.icon||!!this.$slots.icon}},methods:{genBody:function(){return this.$createElement("div",{staticClass:"v-timeline-item__body"},this.$slots.default)},genIcon:function(){return this.$slots.icon?this.$slots.icon:this.$createElement(O.a,{props:{color:this.iconColor,dark:!this.theme.isDark,small:this.small}},this.icon)},genInnerDot:function(){var data=this.setBackgroundColor(this.color);return this.$createElement("div",w({staticClass:"v-timeline-item__inner-dot"},data),[this.hasIcon&&this.genIcon()])},genDot:function(){return this.$createElement("div",{staticClass:"v-timeline-item__dot",class:{"v-timeline-item__dot--small":this.small,"v-timeline-item__dot--large":this.large}},[this.genInnerDot()])},genDivider:function(){var e=[];return this.hideDot||e.push(this.genDot()),this.$createElement("div",{staticClass:"v-timeline-item__divider"},e)},genOpposite:function(){return this.$createElement("div",{staticClass:"v-timeline-item__opposite"},this.$slots.opposite)}},render:function(e){var t=[this.genBody(),this.genDivider()];return this.$slots.opposite&&t.push(this.genOpposite()),e("div",{staticClass:"v-timeline-item",class:w({"v-timeline-item--fill-dot":this.fillDot,"v-timeline-item--before":this.timeline.reverse?this.right:this.left,"v-timeline-item--after":this.timeline.reverse?this.left:this.right},this.themeClasses)},t)}}),component=Object(o.a)(r,(function(){var e=this,t=e.$createElement,n=e._self._c||t;return n("section",{staticClass:"py-16",attrs:{id:"timeline"}},[n("v-container",[n("h2",{staticClass:"text-h3 text-center font-weight-black mb-8"},[e._v("Our Journey")]),e._v(" "),[n("v-timeline",e._l(e.years,(function(t,i){return n("v-timeline-item",{key:i,attrs:{color:t.color,small:""},scopedSlots:e._u([{key:"opposite",fn:function(){return[n("span",{class:"headline font-weight-bold "+t.color+"--text",domProps:{textContent:e._s(t.year)}})]},proxy:!0}],null,!0)},[e._v(" "),n("div",{staticClass:"py-4"},[n("h2",{class:"headline font-weight-light mb-4 "+t.color+"--text"},[e._v("\n              Lorem ipsum\n            ")]),e._v(" "),n("div",[e._v("\n              Lorem ipsum dolor sit amet, no nam oblique veritus. Commune\n              scaevola imperdiet nec ut, sed euismod convenire principes at.\n              Est et nobis iisque percipit, an vim zril disputando\n              voluptatibus, vix an salutandi sententiae.\n            ")])])])})),1)]],2)],1)}),[],!1,null,null,null);t.default=component.exports;c()(component,{VContainer:m.a,VTimeline:y,VTimelineItem:D})}}]);