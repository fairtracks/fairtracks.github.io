(window.webpackJsonp=window.webpackJsonp||[]).push([[24],{1116:function(e,t,i){var n=i(1117);n.__esModule&&(n=n.default),"string"==typeof n&&(n=[[e.i,n,""]]),n.locals&&(e.exports=n.locals);(0,i(18).default)("56407fa2",n,!0,{sourceMap:!1})},1117:function(e,t,i){var n=i(17)(!1);n.push([e.i,'.theme--light.v-timeline:before{background:rgba(0,0,0,.12)}.theme--light.v-timeline .v-timeline-item .v-card:not(.v-card--link):before{border-right-color:rgba(0,0,0,.12)}.theme--dark.v-timeline:before{background:hsla(0,0%,100%,.12)}.theme--dark.v-timeline .v-timeline-item .v-card:not(.v-card--link):before{border-right-color:rgba(0,0,0,.12)}.v-timeline{padding-top:24px;position:relative}.v-timeline:before{bottom:0;content:"";height:100%;position:absolute;top:0;width:2px}.v-timeline-item{display:-webkit-box;display:-ms-flexbox;display:flex;padding-bottom:24px}.v-timeline:not(.v-timeline--dense):not(.v-timeline--reverse) .v-timeline-item:nth-child(odd):not(.v-timeline-item--before){-webkit-box-orient:horizontal;-webkit-box-direction:reverse;-ms-flex-direction:row-reverse;flex-direction:row-reverse}.v-timeline:not(.v-timeline--dense):not(.v-timeline--reverse) .v-timeline-item:nth-child(2n):not(.v-timeline-item--after){-webkit-box-orient:horizontal;-webkit-box-direction:normal;-ms-flex-direction:row;flex-direction:row}.v-application--is-ltr .v-timeline:not(.v-timeline--dense):not(.v-timeline--reverse):before{left:calc(50% - 1px);right:auto}.v-application--is-rtl .v-timeline:not(.v-timeline--dense):not(.v-timeline--reverse):before{left:auto;right:calc(50% - 1px)}',""]),e.exports=n},1159:function(e,t,i){"use strict";i.r(t);var n={data:()=>({years:[{color:"cyan",year:"1960"},{color:"green",year:"1970"},{color:"pink",year:"1980"},{color:"amber",year:"1990"},{color:"orange",year:"2000"},{color:"teal",year:"2020"}]})},r=i(34),o=i(38),s=i.n(o),l=i(979),a=i(1173),c=i(1174),m=Object(r.a)(n,(function(){var e=this,t=e._self._c;return t("section",{staticClass:"py-16",attrs:{id:"timeline"}},[t("v-container",[t("h2",{staticClass:"text-h3 text-center font-weight-black mb-8"},[e._v("Our Journey")]),e._v(" "),t("v-timeline",e._l(e.years,(function(i,n){return t("v-timeline-item",{key:n,attrs:{color:i.color,small:""},scopedSlots:e._u([{key:"opposite",fn:function(){return[t("span",{class:"headline font-weight-bold ".concat(i.color,"--text"),domProps:{textContent:e._s(i.year)}})]},proxy:!0}],null,!0)},[e._v(" "),t("div",{staticClass:"py-4"},[t("h2",{class:"headline font-weight-light mb-4 ".concat(i.color,"--text")},[e._v("Lorem ipsum")]),e._v(" "),t("div",[e._v("\n              Lorem ipsum dolor sit amet, no nam oblique veritus. Commune scaevola imperdiet nec ut,\n              sed euismod convenire principes at. Est et nobis iisque percipit, an vim zril\n              disputando voluptatibus, vix an salutandi sententiae.\n            ")])])])})),1)],1)],1)}),[],!1,null,null,null);t.default=m.exports;s()(m,{VContainer:l.a,VTimeline:a.a,VTimelineItem:c.a})},1173:function(e,t,i){"use strict";i(7),i(4),i(8),i(9),i(10);var n=i(2),r=(i(202),i(1116),i(3)),o=i(19);function s(e,t){var i=Object.keys(e);if(Object.getOwnPropertySymbols){var n=Object.getOwnPropertySymbols(e);t&&(n=n.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),i.push.apply(i,n)}return i}t.a=Object(r.a)(o.a).extend({name:"v-timeline",provide(){return{timeline:this}},props:{alignTop:Boolean,dense:Boolean,reverse:Boolean},computed:{classes(){return function(e){for(var t=1;t<arguments.length;t++){var i=null!=arguments[t]?arguments[t]:{};t%2?s(Object(i),!0).forEach((function(t){Object(n.a)(e,t,i[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(i)):s(Object(i)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(i,t))}))}return e}({"v-timeline--align-top":this.alignTop,"v-timeline--dense":this.dense,"v-timeline--reverse":this.reverse},this.themeClasses)}},render(e){return e("div",{staticClass:"v-timeline",class:this.classes},this.$slots.default)}})},1174:function(e,t,i){"use strict";i(7),i(4),i(8),i(9),i(10);var n=i(2),r=(i(202),i(3)),o=i(36),s=i(19),l=i(23);function a(e,t){var i=Object.keys(e);if(Object.getOwnPropertySymbols){var n=Object.getOwnPropertySymbols(e);t&&(n=n.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),i.push.apply(i,n)}return i}function c(e){for(var t=1;t<arguments.length;t++){var i=null!=arguments[t]?arguments[t]:{};t%2?a(Object(i),!0).forEach((function(t){Object(n.a)(e,t,i[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(i)):a(Object(i)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(i,t))}))}return e}var m=Object(r.a)(l.a,s.a);t.a=m.extend().extend({name:"v-timeline-item",inject:["timeline"],props:{color:{type:String,default:"primary"},fillDot:Boolean,hideDot:Boolean,icon:String,iconColor:String,large:Boolean,left:Boolean,right:Boolean,small:Boolean},computed:{hasIcon(){return!!this.icon||!!this.$slots.icon}},methods:{genBody(){return this.$createElement("div",{staticClass:"v-timeline-item__body"},this.$slots.default)},genIcon(){return this.$slots.icon?this.$slots.icon:this.$createElement(o.a,{props:{color:this.iconColor,dark:!this.theme.isDark,small:this.small}},this.icon)},genInnerDot(){var e=this.setBackgroundColor(this.color);return this.$createElement("div",c({staticClass:"v-timeline-item__inner-dot"},e),[this.hasIcon&&this.genIcon()])},genDot(){return this.$createElement("div",{staticClass:"v-timeline-item__dot",class:{"v-timeline-item__dot--small":this.small,"v-timeline-item__dot--large":this.large}},[this.genInnerDot()])},genDivider(){var e=[];return this.hideDot||e.push(this.genDot()),this.$createElement("div",{staticClass:"v-timeline-item__divider"},e)},genOpposite(){return this.$createElement("div",{staticClass:"v-timeline-item__opposite"},this.$slots.opposite)}},render(e){var t=[this.genBody(),this.genDivider()];return this.$slots.opposite&&t.push(this.genOpposite()),e("div",{staticClass:"v-timeline-item",class:c({"v-timeline-item--fill-dot":this.fillDot,"v-timeline-item--before":this.timeline.reverse?this.right:this.left,"v-timeline-item--after":this.timeline.reverse?this.left:this.right},this.themeClasses)},t)}})}}]);