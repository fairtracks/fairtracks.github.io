(window.webpackJsonp=window.webpackJsonp||[]).push([[18],{1001:function(t,e,o){"use strict";var n=o(156),a=o(52),r=o(3),i=o(12);e.a=Object(r.a)(n.a,a.a).extend({name:"v-hover",props:{disabled:{type:Boolean,default:!1},value:{type:Boolean,default:void 0}},methods:{onMouseEnter(){this.runDelay("open")},onMouseLeave(){this.runDelay("close")}},render(){return this.$scopedSlots.default||void 0!==this.value?(this.$scopedSlots.default&&(t=this.$scopedSlots.default({hover:this.isActive})),Array.isArray(t)&&1===t.length&&(t=t[0]),t&&!Array.isArray(t)&&t.tag?(this.disabled||(t.data=t.data||{},this._g(t.data,{mouseenter:this.onMouseEnter,mouseleave:this.onMouseLeave})),t):(Object(i.c)("v-hover should only contain a single element",this),t)):(Object(i.c)("v-hover is missing a default scopedSlot or bound value",this),null);var t}})},1041:function(t,e,o){var n=o(1112);n.__esModule&&(n=n.default),"string"==typeof n&&(n=[[t.i,n,""]]),n.locals&&(t.exports=n.locals);(0,o(18).default)("47330a69",n,!0,{sourceMap:!1})},1111:function(t,e,o){"use strict";o(1041)},1112:function(t,e,o){var n=o(17)(!1);n.push([t.i,".zoom[data-v-da1fc414]{-webkit-transform:scale(1.025) translateY(-10px);-ms-transform:scale(1.025) translateY(-10px);transform:scale(1.025) translateY(-10px)}.notzoom[data-v-da1fc414],.zoom[data-v-da1fc414]{-webkit-transition:-webkit-transform .2s;transition:-webkit-transform .2s;transition:transform .2s;transition:transform .2s,-webkit-transform .2s}",""]),t.exports=n},1113:function(t,e,o){var n=o(1114);n.__esModule&&(n=n.default),"string"==typeof n&&(n=[[t.i,n,""]]),n.locals&&(t.exports=n.locals);(0,o(18).default)("01907af4",n,!0,{sourceMap:!1})},1114:function(t,e,o){var n=o(17)(!1);n.push([t.i,".theme--light.v-btn-toggle:not(.v-btn-toggle--group){background:#fff;color:rgba(0,0,0,.87)}.theme--light.v-btn-toggle:not(.v-btn-toggle--group) .v-btn.v-btn{border-color:rgba(0,0,0,.12)!important}.theme--light.v-btn-toggle:not(.v-btn-toggle--group) .v-btn.v-btn:focus:not(:active){border-color:rgba(0,0,0,.26)}.theme--light.v-btn-toggle:not(.v-btn-toggle--group) .v-btn.v-btn .v-icon{color:#000}.theme--dark.v-btn-toggle:not(.v-btn-toggle--group){background:#121212!important;background:var(--v-background-base,#121212)!important;color:#fff}.theme--dark.v-btn-toggle:not(.v-btn-toggle--group) .v-btn.v-btn{border-color:hsla(0,0%,100%,.12)!important}.theme--dark.v-btn-toggle:not(.v-btn-toggle--group) .v-btn.v-btn:focus:not(:active){border-color:hsla(0,0%,100%,.3)}.theme--dark.v-btn-toggle:not(.v-btn-toggle--group) .v-btn.v-btn .v-icon{color:#fff}.v-btn-toggle{border-radius:4px;display:-webkit-inline-box;display:-ms-inline-flexbox;display:inline-flex;max-width:100%}.v-btn-toggle>.v-btn.v-btn{border-radius:0;border-style:solid;border-width:thin;box-shadow:none;opacity:.8;padding:0 12px}.v-application--is-ltr .v-btn-toggle>.v-btn.v-btn:first-child{border-top-left-radius:inherit;border-bottom-left-radius:inherit}.v-application--is-ltr .v-btn-toggle>.v-btn.v-btn:last-child,.v-application--is-rtl .v-btn-toggle>.v-btn.v-btn:first-child{border-top-right-radius:inherit;border-bottom-right-radius:inherit}.v-application--is-rtl .v-btn-toggle>.v-btn.v-btn:last-child{border-top-left-radius:inherit;border-bottom-left-radius:inherit}.v-btn-toggle>.v-btn.v-btn--active{color:inherit;opacity:1}.v-btn-toggle>.v-btn.v-btn:after{display:none}.v-application--is-ltr .v-btn-toggle>.v-btn.v-btn:not(:first-child),.v-application--is-rtl .v-btn-toggle>.v-btn.v-btn:not(:last-child){border-left-width:0}.v-btn-toggle .v-btn.v-btn.v-size--default{min-width:48px;min-height:0}.v-btn-toggle:not(.v-btn-toggle--dense) .v-btn.v-btn.v-size--default{height:48px}.v-btn-toggle--borderless>.v-btn.v-btn{border-width:0}.v-btn-toggle--dense>.v-btn.v-btn{padding:0 8px}.v-btn-toggle--group{border-radius:0}.v-btn-toggle--group>.v-btn.v-btn{background-color:rgba(0,0,0,0)!important;border-color:rgba(0,0,0,0);margin:4px;min-width:auto}.v-btn-toggle--rounded{border-radius:24px}.v-btn-toggle--shaped{border-radius:24px 4px}.v-btn-toggle--tile{border-radius:0}",""]),t.exports=n},1155:function(t,e,o){"use strict";o.r(e);o(486);var n={data:()=>({planDuration:"monthly",plans:[{plan:"Basic",elevation:0,color:"primary darken-1",description:"Best Plan for Small Businesses",monthly:"$10",yearly:"$100",features:[{icon:"mdi-web",text:"5 websites"},{icon:"mdi-harddisk",text:"10 GB storage"},{icon:"mdi-signal",text:"500 GB bandwidth"},{icon:"mdi-account",text:"10 email addreses"},{icon:"mdi-domain",text:"free domain with annual plan"},{icon:"mdi-server",text:"4X pricessing power"},{icon:"mdi-dns",text:"premium DNS"}]},{plan:"Silver",elevation:16,color:"green darken-2",description:"Best Plan for Professional Users",monthly:"$40",yearly:"$400",features:[{icon:"mdi-web",text:"5 websites"},{icon:"mdi-harddisk",text:"10 GB storage"},{icon:"mdi-signal",text:"500 GB bandwidth"},{icon:"mdi-account",text:"10 email addreses"},{icon:"mdi-domain",text:"free domain with annual plan"},{icon:"mdi-server",text:"4X pricessing power"},{icon:"mdi-dns",text:"premium DNS"}]},{plan:"Gold",elevation:0,color:"orange darken-3",description:"Best Plan for Power Users",monthly:"$100",yearly:"$1000",features:[{icon:"mdi-web",text:"unlimited websites"},{icon:"mdi-harddisk",text:"unlimited storage"},{icon:"mdi-signal",text:"unlimited bandwidth"},{icon:"mdi-account",text:"unlimited addreses"},{icon:"mdi-domain",text:"free domain with annual plan"},{icon:"mdi-server",text:"4X pricessing power"},{icon:"mdi-dns",text:"premium DNS"}]}]})},a=(o(1111),o(34)),r=o(38),i=o.n(r),s=o(147),l=o(1172),d=o(269),c=o(201),v=o(967),b=o(979),g=o(1001),u=o(192),p=o(260),m=o(148),h=o(58),f=o(130),x=o(968),y=Object(a.a)(n,(function(){var t=this,e=t._self._c;return e("section",{staticClass:"py-16",class:t.$vuetify.theme.dark?"black":"white"},[e("v-container",[e("v-row",[e("v-col",[e("v-row",{attrs:{"no-gutters":""}},[e("v-col",{staticClass:"text-center"},[e("h2",{staticClass:"text-h4 text-md-h3 text-center font-weight-black text-capitalize mb-4"},[t._v("\n                The most affordable pricing\n              ")]),t._v(" "),e("p",{staticClass:"my-10 title"},[t._v("\n                Lorem ipsum dolor sit amet, consectetuer adipiscing elit, sed diam nonummy nibh\n                euismod tincidunt ut laoreet dolore magna aliquam erat volutpat.\n              ")]),t._v(" "),e("div",{staticClass:"text-center"},[e("v-btn-toggle",{attrs:{"active-class":"primary darken-1",borderless:"",mandatory:"",light:"",color:"white"},model:{value:t.planDuration,callback:function(e){t.planDuration=e},expression:"planDuration"}},[e("v-btn",{attrs:{value:"monthly"}},[t._v(" Monthly Plan ")]),t._v(" "),e("v-btn",{attrs:{value:"yearly"}},[t._v(" Yearly Plan ")])],1)],1)])],1)],1)],1)],1),t._v(" "),e("v-container",{attrs:{fluid:""}},[e("v-row",{staticClass:"mx-auto",staticStyle:{"max-width":"1200px"}},t._l(t.plans,(function(o,n){return e("v-col",{key:"plan-".concat(n),attrs:{cols:"12",md:"4"}},[e("v-hover",{scopedSlots:t._u([{key:"default",fn:function(n){var{hover:a}=n;return[e("v-card",{staticClass:"mx-auto transition-swing",class:a?"zoom":"notzoom",attrs:{elevation:a?24:o.elevation,color:o.color,"max-width":"400"}},[e("h3",{staticClass:"text-h4 text-center font-weight-black white--text pt-5",domProps:{textContent:t._s(o.plan)}}),t._v(" "),e("v-card-text",{staticClass:"text-center subtitle-1 white--text py-2",domProps:{textContent:t._s(o.description)}}),t._v(" "),e("v-card-subtitle",{staticClass:"text-h5 font-weight-black text-center white--text pt-0"},[t._v(t._s("monthly"===t.planDuration?o.monthly:o.yearly)+"\n                "),e("span",{staticClass:"subtitle-1"},[t._v("per "+t._s("monthly"===t.planDuration?"month":"year"))])]),t._v(" "),e("v-list",[t._l(o.features,(function(o,n){return e("v-list-item",{key:"feature-".concat(n),attrs:{dense:""}},[e("v-list-item-icon",[e("v-icon",[t._v("\n                      "+t._s(o.icon)+"\n                    ")])],1),t._v(" "),e("v-list-item-content",[e("v-list-item-title",{staticClass:"text-capitalize",domProps:{textContent:t._s(o.text)}})],1)],1)})),t._v(" "),e("v-list-item",[e("v-btn",{staticClass:"mx-auto my-3",attrs:{color:"primary",large:"",block:"",rounded:""}},[t._v(" Buy Now ")])],1)],2)],1)]}}],null,!0)})],1)})),1)],1)],1)}),[],!1,null,"da1fc414",null);e.default=y.exports;i()(y,{VBtn:s.a,VBtnToggle:l.a,VCard:d.a,VCardSubtitle:c.b,VCardText:c.c,VCol:v.a,VContainer:b.a,VHover:g.a,VIcon:u.a,VList:p.a,VListItem:m.a,VListItemContent:h.a,VListItemIcon:f.a,VListItemTitle:h.c,VRow:x.a})},1172:function(t,e,o){"use strict";o(7),o(4),o(8),o(9),o(10);var n=o(2),a=(o(1113),o(998)),r=o(23),i=o(3);function s(t,e){var o=Object.keys(t);if(Object.getOwnPropertySymbols){var n=Object.getOwnPropertySymbols(t);e&&(n=n.filter((function(e){return Object.getOwnPropertyDescriptor(t,e).enumerable}))),o.push.apply(o,n)}return o}function l(t){for(var e=1;e<arguments.length;e++){var o=null!=arguments[e]?arguments[e]:{};e%2?s(Object(o),!0).forEach((function(e){Object(n.a)(t,e,o[e])})):Object.getOwnPropertyDescriptors?Object.defineProperties(t,Object.getOwnPropertyDescriptors(o)):s(Object(o)).forEach((function(e){Object.defineProperty(t,e,Object.getOwnPropertyDescriptor(o,e))}))}return t}e.a=Object(i.a)(a.a,r.a).extend({name:"v-btn-toggle",props:{backgroundColor:String,borderless:Boolean,dense:Boolean,group:Boolean,rounded:Boolean,shaped:Boolean,tile:Boolean},computed:{classes(){return l(l({},a.a.options.computed.classes.call(this)),{},{"v-btn-toggle":!0,"v-btn-toggle--borderless":this.borderless,"v-btn-toggle--dense":this.dense,"v-btn-toggle--group":this.group,"v-btn-toggle--rounded":this.rounded,"v-btn-toggle--shaped":this.shaped,"v-btn-toggle--tile":this.tile},this.themeClasses)}},methods:{genData(){var t=this.setTextColor(this.color,l({},a.a.options.methods.genData.call(this)));return this.group?t:this.setBackgroundColor(this.backgroundColor,t)}}})},998:function(t,e,o){"use strict";var n=o(154);e.a=n.a.extend({name:"button-group",provide(){return{btnToggle:this}},computed:{classes(){return n.a.options.computed.classes.call(this)}},methods:{genData:n.a.options.methods.genData}})}}]);