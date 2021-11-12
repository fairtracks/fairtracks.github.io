(window.webpackJsonp=window.webpackJsonp||[]).push([[13],{570:function(t,e,n){"use strict";var o=n(141);e.a=o.a.extend({name:"button-group",provide:function(){return{btnToggle:this}},computed:{classes:function(){return o.a.options.computed.classes.call(this)}},methods:{genData:o.a.options.methods.genData}})},584:function(t,e,n){},598:function(t,e,n){"use strict";n(584)},599:function(t,e,n){},607:function(t,e,n){"use strict";var o=n(146),r=n(51),l=n(7),c=n(13);e.a=Object(l.a)(o.a,r.a).extend({name:"v-hover",props:{disabled:{type:Boolean,default:!1},value:{type:Boolean,default:void 0}},methods:{onMouseEnter:function(){this.runDelay("open")},onMouseLeave:function(){this.runDelay("close")}},render:function(){return this.$scopedSlots.default||void 0!==this.value?(this.$scopedSlots.default&&(element=this.$scopedSlots.default({hover:this.isActive})),Array.isArray(element)&&1===element.length&&(element=element[0]),element&&!Array.isArray(element)&&element.tag?(this.disabled||(element.data=element.data||{},this._g(element.data,{mouseenter:this.onMouseEnter,mouseleave:this.onMouseLeave})),element):(Object(c.c)("v-hover should only contain a single element",this),element)):(Object(c.c)("v-hover is missing a default scopedSlot or bound value",this),null);var element}})},610:function(t,e,n){"use strict";n.r(e);var o={data:function(){return{planDuration:"monthly",plans:[{plan:"Basic",elevation:0,color:"primary darken-1",description:"Best Plan for Small Businesses",monthly:"$10",yearly:"$100",features:[{icon:"mdi-web",text:"5 websites"},{icon:"mdi-harddisk",text:"10 GB storage"},{icon:"mdi-signal",text:"500 GB bandwidth"},{icon:"mdi-account",text:"10 email addreses"},{icon:"mdi-domain",text:"free domain with annual plan"},{icon:"mdi-server",text:"4X pricessing power"},{icon:"mdi-dns",text:"premium DNS"}]},{plan:"Silver",elevation:16,color:"green darken-2",description:"Best Plan for Professional Users",monthly:"$40",yearly:"$400",features:[{icon:"mdi-web",text:"5 websites"},{icon:"mdi-harddisk",text:"10 GB storage"},{icon:"mdi-signal",text:"500 GB bandwidth"},{icon:"mdi-account",text:"10 email addreses"},{icon:"mdi-domain",text:"free domain with annual plan"},{icon:"mdi-server",text:"4X pricessing power"},{icon:"mdi-dns",text:"premium DNS"}]},{plan:"Gold",elevation:0,color:"orange darken-3",description:"Best Plan for Power Users",monthly:"$100",yearly:"$1000",features:[{icon:"mdi-web",text:"unlimited websites"},{icon:"mdi-harddisk",text:"unlimited storage"},{icon:"mdi-signal",text:"unlimited bandwidth"},{icon:"mdi-account",text:"unlimited addreses"},{icon:"mdi-domain",text:"free domain with annual plan"},{icon:"mdi-server",text:"4X pricessing power"},{icon:"mdi-dns",text:"premium DNS"}]}]}}},r=(n(598),n(38)),l=n(69),c=n.n(l),d=n(253),m=(n(9),n(10),n(11),n(3),n(14),n(8),n(15),n(2)),v=(n(599),n(570)),h=n(31),f=n(7);function y(object,t){var e=Object.keys(object);if(Object.getOwnPropertySymbols){var n=Object.getOwnPropertySymbols(object);t&&(n=n.filter((function(t){return Object.getOwnPropertyDescriptor(object,t).enumerable}))),e.push.apply(e,n)}return e}function x(t){for(var i=1;i<arguments.length;i++){var source=null!=arguments[i]?arguments[i]:{};i%2?y(Object(source),!0).forEach((function(e){Object(m.a)(t,e,source[e])})):Object.getOwnPropertyDescriptors?Object.defineProperties(t,Object.getOwnPropertyDescriptors(source)):y(Object(source)).forEach((function(e){Object.defineProperty(t,e,Object.getOwnPropertyDescriptor(source,e))}))}return t}var w=Object(f.a)(v.a,h.a).extend({name:"v-btn-toggle",props:{backgroundColor:String,borderless:Boolean,dense:Boolean,group:Boolean,rounded:Boolean,shaped:Boolean,tile:Boolean},computed:{classes:function(){return x(x({},v.a.options.computed.classes.call(this)),{},{"v-btn-toggle":!0,"v-btn-toggle--borderless":this.borderless,"v-btn-toggle--dense":this.dense,"v-btn-toggle--group":this.group,"v-btn-toggle--rounded":this.rounded,"v-btn-toggle--shaped":this.shaped,"v-btn-toggle--tile":this.tile},this.themeClasses)}},methods:{genData:function(){var data=this.setTextColor(this.color,x({},v.a.options.methods.genData.call(this)));return this.group?data:this.setBackgroundColor(this.backgroundColor,data)}}}),_=n(238),C=n(189),k=n(549),O=n(558),B=n(607),D=n(230),P=n(231),j=n(137),S=n(80),V=n(121),$=n(550),component=Object(r.a)(o,(function(){var t=this,e=t.$createElement,n=t._self._c||e;return n("section",{staticClass:"py-16",class:t.$vuetify.theme.dark?"black":"white"},[n("v-container",[n("v-row",[n("v-col",[n("v-row",{attrs:{"no-gutters":""}},[n("v-col",{staticClass:"text-center"},[n("h2",{staticClass:"\n                text-h4 text-md-h3 text-center\n                font-weight-black\n                text-capitalize\n                mb-4\n              "},[t._v("\n              The most affordable pricing\n            ")]),t._v(" "),n("p",{staticClass:"my-10 title"},[t._v("\n              Lorem ipsum dolor sit amet, consectetuer adipiscing elit, sed\n              diam nonummy nibh euismod tincidunt ut laoreet dolore magna\n              aliquam erat volutpat.\n            ")]),t._v(" "),n("div",{staticClass:"text-center"},[n("v-btn-toggle",{attrs:{"active-class":"primary darken-1",borderless:"",mandatory:"",light:"",color:"white"},model:{value:t.planDuration,callback:function(e){t.planDuration=e},expression:"planDuration"}},[n("v-btn",{attrs:{value:"monthly"}},[t._v(" Monthly Plan ")]),t._v(" "),n("v-btn",{attrs:{value:"yearly"}},[t._v(" Yearly Plan ")])],1)],1)])],1)],1)],1)],1),t._v(" "),n("v-container",{attrs:{fluid:""}},[n("v-row",{staticClass:"mx-auto",staticStyle:{"max-width":"1200px"}},t._l(t.plans,(function(e,o){return n("v-col",{key:"plan-"+o,attrs:{cols:"12",md:"4"}},[n("v-hover",{scopedSlots:t._u([{key:"default",fn:function(o){var r=o.hover;return[n("v-card",{staticClass:"mx-auto transition-swing",class:r?"zoom":"notzoom",attrs:{elevation:r?24:e.elevation,color:e.color,"max-width":"400"}},[n("h3",{staticClass:"text-h4 text-center font-weight-black white--text pt-5",domProps:{textContent:t._s(e.plan)}}),t._v(" "),n("v-card-text",{staticClass:"text-center subtitle-1 white--text py-2",domProps:{textContent:t._s(e.description)}}),t._v(" "),n("v-card-subtitle",{staticClass:"text-h5 font-weight-black text-center white--text pt-0"},[t._v(t._s("monthly"===t.planDuration?e.monthly:e.yearly)+"\n              "),n("span",{staticClass:"subtitle-1"},[t._v("per "+t._s("monthly"===t.planDuration?"month":"year"))])]),t._v(" "),n("v-list",[t._l(e.features,(function(e,o){return n("v-list-item",{key:"feature-"+o,attrs:{dense:""}},[n("v-list-item-icon",[n("v-icon",[t._v("\n                    "+t._s(e.icon)+"\n                  ")])],1),t._v(" "),n("v-list-item-content",[n("v-list-item-title",{staticClass:"text-capitalize",domProps:{textContent:t._s(e.text)}})],1)],1)})),t._v(" "),n("v-list-item",[n("v-btn",{staticClass:"mx-auto my-3",attrs:{color:"primary",large:"",block:"",rounded:""}},[t._v("\n                  Buy Now\n                ")])],1)],2)],1)]}}],null,!0)})],1)})),1)],1)],1)}),[],!1,null,"604166f0",null);e.default=component.exports;c()(component,{VBtn:d.a,VBtnToggle:w,VCard:_.a,VCardSubtitle:C.b,VCardText:C.c,VCol:k.a,VContainer:O.a,VHover:B.a,VIcon:D.a,VList:P.a,VListItem:j.a,VListItemContent:S.a,VListItemIcon:V.a,VListItemTitle:S.c,VRow:$.a})}}]);