(window.webpackJsonp=window.webpackJsonp||[]).push([[48,55],{1226:function(t,e,o){"use strict";o.r(e);var a=o(238),n=(o(33),o(327),o(14),o(9),o(15),o(4),o(16),o(5),o(17),o(25),o(10),o(11),o(12),o(13),o(26),o(24),o(23),o(1)),i=o(198),s=o(621);function r(t,e){var o=Object.keys(t);if(Object.getOwnPropertySymbols){var a=Object.getOwnPropertySymbols(t);e&&(a=a.filter((function(e){return Object.getOwnPropertyDescriptor(t,e).enumerable}))),o.push.apply(o,a)}return o}function l(t){for(var e=1;e<arguments.length;e++){var o=null!=arguments[e]?arguments[e]:{};e%2?r(Object(o),!0).forEach((function(e){Object(n.a)(t,e,o[e])})):Object.getOwnPropertyDescriptors?Object.defineProperties(t,Object.getOwnPropertyDescriptors(o)):r(Object(o)).forEach((function(e){Object.defineProperty(t,e,Object.getOwnPropertyDescriptor(o,e))}))}return t}var c={props:{id:{type:String,default:null},href:{type:String,default:null},to:{type:String,default:null},text:{type:String,default:""},icon:{type:String,default:""},large:{type:Boolean,default:!1},xLarge:{type:Boolean,default:!1},small:{type:Boolean,default:!1},xSmall:{type:Boolean,default:!1},doHover:{type:Boolean,default:!1}},data:function(){return{componentId:"ui-styled-button",prevButtonHoverId:""}},computed:l(l({},Object(i.b)({buttonHoverId:function(t){return t.buttonHover.buttonHoverId}})),{},{shouldHover:function(){return this.doHover&&""===this.buttonHoverId}}),mounted:function(){document.addEventListener("mouseup",this.unsetButtonHoverId)},destroyed:function(){document.removeEventListener("mouseup",this.unsetButtonHoverId)},methods:{setButtonHoverId:function(t){this.prevButtonHoverId=this.buttonHoverId,this.$store.commit(s.BUTTON_HOVER_M_SET_ID,t)},unsetButtonHoverId:function(){this.prevButtonHoverId="",this.$store.commit(s.BUTTON_HOVER_M_SET_ID,this.prevButtonHoverId)},onClick:function(t){t&&this.openLink(t),this.$emit("btn-click",!0)},openLink:function(t){window.open(t,"_blank")}}},u=o(61),d=Object(u.a)(c,(function(){var t=this,e=t._self._c;return e("div",{staticClass:"simplebutton"},[e(a.a,{class:"".concat(t.$vuetify.theme.dark?"primary":"secondary").concat(t.shouldHover?" custom-hover":""),attrs:{id:t.id,large:t.large,"x-large":t.xLarge,small:t.small,"x-small":t.xSmall,"to:":t.to,ripple:!1,nuxt:!!t.to||null},on:{mouseover:function(e){return t.setButtonHoverId(t.id)},mouseout:function(e){return t.unsetButtonHoverId()},mousedown:function(t){t.stopPropagation()},click:function(e){return t.onClick(t.href)}}},[t.icon?e("UiSmartIcon",{staticClass:"pr-3 center",attrs:{name:t.icon}}):t._e(),t._v("\n    "+t._s(t.text)+"\n  ")],1)],1)}),[],!1,null,null,null);e.default=d.exports;installComponents(d,{UiSmartIcon:o(402).default})},1228:function(t,e,o){var a=o(1235);a.__esModule&&(a=a.default),"string"==typeof a&&(a=[[t.i,a,""]]),a.locals&&(t.exports=a.locals);(0,o(31).default)("69312fc6",a,!0,{sourceMap:!1})},1234:function(t,e,o){"use strict";o(1228)},1235:function(t,e,o){var a=o(30)(!1);a.push([t.i,".full-overlay>.v-overlay__content{width:100%;height:100%}.above-overlay,.above-overlay>.v-btn,.above-overlay>.v-responsive__content{z-index:2}.size-from-contents:not(.v-dialog--fullscreen){width:auto;overflow:hidden}.no-max-height.v-dialog:not(.v-dialog--fullscreen){max-height:none;margin:0}.max-height-95.v-dialog:not(.v-dialog--fullscreen){max-height:95%;margin:0}.thin-border{border:1px solid #d3d3d3}.thin-border-bottom{border-bottom:1px solid #d3d3d3}",""]),t.exports=a},1236:function(t,e,o){var a=o(1263);a.__esModule&&(a=a.default),"string"==typeof a&&(a=[[t.i,a,""]]),a.locals&&(t.exports=a.locals);(0,o(31).default)("df251190",a,!0,{sourceMap:!1})},1245:function(t,e,o){"use strict";o.r(e);var a=o(238),n=o(381),i=o(246),s=o(1202),r=o(1308),l=o(372),c=o(371),u=o(1201),d={props:{value:Boolean,imageAsset:{type:Object,required:!0},alt:{type:String,default:""},captionHtml:{type:String,default:null},buttons:{type:Array,default:function(){return[]}},cropBottom:{type:Boolean,default:!1}},data:function(){return{componentId:"ui-popup-dialog"}},computed:{show:{get:function(){return this.value},set:function(t){this.$emit("input",t)}}}},p=(o(1234),o(61)),m=Object(p.a)(d,(function(){var t=this,e=t._self._c;return e(r.a,{attrs:{"content-class":t.cropBottom?"size-from-contents max-height-95":"size-from-contents no-max-height"},model:{value:t.show,callback:function(e){t.show=e},expression:"show"}},[e(n.a,[e(u.a,{attrs:{"no-gutters":"","fill-height":""}},[e(s.a,{attrs:{cols:"12"}},[e(l.a,{staticClass:"full-overlay",attrs:{absolute:"",opacity:"0","z-index":"1"}},[e(c.a,{attrs:{height:"100%"}},[e(u.a,{staticClass:"mb-auto",attrs:{"fill-height":"","no-gutters":"",align:"start",justify:"end"}},[e(s.a,{staticClass:"pa-2 ma-0",attrs:{cols:"auto","align-self":"start"}},[e("div",{staticClass:"simplebutton"},[e(a.a,{staticClass:"pa-0",attrs:{width:"24px",height:"24px","min-width":"24px",ripple:!1},on:{click:function(e){t.show=!1}}},[e("UiSmartIcon",{attrs:{name:"close"}})],1)],1)])],1)],1)],1),t._v(" "),e("UiSmartImg",{class:t.cropBottom?"mx-10 mt-10 overflow-y-auto thin-border above-overlay":"mt-4",attrs:{"image-asset":t.imageAsset,alt:t.alt,"max-height":t.cropBottom?"calc(95vh - 151px)":"calc(95vh - 110px)",width:t.cropBottom?"calc(95vw - 82px)":"95vw","crop-bottom":t.cropBottom}})],1),t._v(" "),e(s.a,{directives:[{name:"show",rawName:"v-show",value:t.captionHtml,expression:"captionHtml"}],staticClass:"px-10 overflow-y-auto",staticStyle:{"z-index":"2"},attrs:{cols:"12"}},[e("figcaption",[e("p",{staticClass:"body-2 font-italic text-center pt-8 pb-2",domProps:{innerHTML:t._s(t.captionHtml)}})])])],1),t._v(" "),e(i.a,{directives:[{name:"show",rawName:"v-show",value:t.buttons.length>0,expression:"buttons.length > 0"}]},[e(u.a,{attrs:{"no-gutters":"",justify:"center"}},t._l(t.buttons,(function(o,a){return e(s.a,{key:"s_"+a,staticClass:"pa-2 ma-0",attrs:{cols:"auto","align-self":"end"}},[e("UiStyledButton",{staticClass:"text-weight-light above-overlay",attrs:{id:"btn_"+a,href:o.href,to:o.to,text:o.text,icon:o.icon,"x-large":""},on:{"btn-click":function(e){t.show=!1}}})],1)})),1)],1)],1)],1)}),[],!1,null,null,null);e.default=m.exports;installComponents(m,{UiSmartIcon:o(402).default,UiSmartImg:o(403).default,UiStyledButton:o(1226).default})},1262:function(t,e,o){"use strict";o(1236)},1263:function(t,e,o){var a=o(30)(!1);a.push([t.i,".image-box{box-sizing:border-box;position:relative;margin:auto;overflow:hidden}.image-box .attach-classes.transitioned{display:block;-webkit-transform:scale(1);-ms-transform:scale(1);transform:scale(1);-webkit-transition:opacity .3s,-webkit-transform .3s;transition:opacity .3s,-webkit-transform .3s;transition:transform .3s,opacity .3s;transition:transform .3s,opacity .3s,-webkit-transform .3s}.image-hover .attach-classes.transitioned{max-width:100%;-webkit-transform:scale(1.05);-ms-transform:scale(1.05);transform:scale(1.05);opacity:.5!important}.image-box .v-icon{-webkit-transition:opacity .3s,-webkit-transform .3s;transition:opacity .3s,-webkit-transform .3s;transition:transform .3s,opacity .3s;transition:transform .3s,opacity .3s,-webkit-transform .3s;display:block;opacity:0}.image-hover .v-icon{opacity:.25}",""]),t.exports=a},1277:function(t,e,o){"use strict";o.r(e);var a=o(1247),n=o(372),i={props:{imageAsset:{type:Object,required:!0},height:{type:String,default:null},width:{type:String,default:null},minHeight:{type:String,default:null},minWidth:{type:String,default:null},maxHeight:{type:String,default:null},maxWidth:{type:String,default:null},cropBottom:{type:Boolean,default:null},captionHtml:{type:String,default:null},dialogButtons:{type:Array,default:function(){}},alt:{type:String,default:""}},data:function(){return{componentId:"ui-zoomable-imaged",showDialog:!1}}},s=(o(1262),o(61)),r=Object(s.a)(i,(function(){var t=this,e=t._self._c;return e("div",[e(a.a,{scopedSlots:t._u([{key:"default",fn:function(o){var a=o.hover;return[e("div",{staticClass:"image-box",class:a?"image-hover":null,on:{click:function(e){t.showDialog=!0}}},[e(n.a,{staticStyle:{"z-index":"3"},attrs:{absolute:"",opacity:"0"}},[e("UiSmartIcon",{staticStyle:{transition:"all 0.3s"},attrs:{name:"magnify-expand","x-large":"",color:"black"}})],1),t._v(" "),e("UiSmartImg",{attrs:{"image-asset":t.imageAsset,height:t.height,width:t.width,"min-height":t.minHeight,"min-width":t.minWidth,"max-height":t.maxHeight,"max-width":t.maxWidth,"crop-bottom":t.cropBottom,alt:t.alt}})],1)]}}])}),t._v(" "),e("UiPopupDialog",{attrs:{"max-width":"80vw","image-asset":t.imageAsset,"crop-bottom":t.cropBottom,buttons:t.dialogButtons,"caption-html":t.captionHtml},model:{value:t.showDialog,callback:function(e){t.showDialog=e},expression:"showDialog"}})],1)}),[],!1,null,null,null);e.default=r.exports;installComponents(r,{UiSmartIcon:o(402).default,UiSmartImg:o(403).default,UiPopupDialog:o(1245).default})},1285:function(t,e,o){var a=o(1324);a.__esModule&&(a=a.default),"string"==typeof a&&(a=[[t.i,a,""]]),a.locals&&(t.exports=a.locals);(0,o(31).default)("d3ecd906",a,!0,{sourceMap:!1})},1323:function(t,e,o){"use strict";o(1285)},1324:function(t,e,o){var a=o(30)(!1);a.push([t.i,".card-category[data-v-3dd59f88]{text-align:center;padding-top:3px;padding-bottom:3px;text-transform:uppercase;font-weight:700;color:#fff}.blog[data-v-3dd59f88]{background-color:#966591}.poster[data-v-3dd59f88]{background-color:#dec349}.publication[data-v-3dd59f88]{background-color:#387572}.presentation[data-v-3dd59f88]{background-color:#bdbdbd}.media[data-v-3dd59f88]{background-color:#966591}",""]),t.exports=a},1387:function(t,e,o){"use strict";o.r(e);var a=o(238),n=o(381),i=o(246),s=o(386),r=o(1322),l=o(371),c=(o(69),"Poster"),u="Presentation",d={props:{post:{type:Object,required:!0}},data:function(){return{componentId:"ui-materials-card",locale:null}},computed:{dialogButton:function(){return{icon:this.post.external?"open-in-new":"download",text:this.categoryToLinkText(this.post.category,this.post.external),href:this.post.staticPath?this.getStaticPath(this.post):this.post.href}}},mounted:function(){this.locale=window.navigator.userLanguage||window.navigator.language},methods:{categoryToDateText:function(t){switch(t){case u:case c:return"Presented on";case"Workflow":return"Conducted on";default:return"Published on"}},categoryToLinkText:function(t,e){switch(t){case c:return e?"View poster":"Download poster [pdf]";case"Blog":return"Read blog post";case u:return e?"View presentation":"Download slides [pdf]";default:return"Read full text"}},dateAsStr:function(t,e){return t&&e.date?new Date(e.date).toLocaleDateString(t,{dateStyle:"medium"}):"NA"},getStaticPath:function(t){return this.$router.options.base+t.staticPath.join("/")}}},p=(o(1323),o(61)),m=Object(p.a)(d,(function(){var t=this,e=t._self._c;return e(n.a,{key:t.post.slug,attrs:{id:t.post.slug,elevation:"1",height:"500px",width:"100%"}},[e("p",{staticClass:"card-category my-0",class:"".concat(t.post.category.toLowerCase())},[t._v(t._s(t.post.category))]),t._v(" "),e(l.a,{staticClass:"mx-auto",attrs:{height:"162"}},[e("UiZoomableImage",{staticClass:"thin-border-bottom",attrs:{"image-asset":t.$getImageAssetObject("materials","previews",t.post.previewImg),"max-height":"160px",width:"100%","dialog-buttons":[t.dialogButton],"crop-bottom":""}})],1),t._v(" "),e(i.b,{staticClass:"pb-0"},[e(a.a,{staticClass:"px-0 primary--text",attrs:{text:"",small:"",disabled:""}},[e("div",{staticClass:"primary--text mr-1"},[t._v(t._s(t.categoryToDateText(t.post.category))+":")]),t._v(" "),e("div",{staticClass:"text--primary",staticStyle:{opacity:"60%"}},[t._v("\n        "+t._s(t.dateAsStr(t.locale,t.post))+"\n      ")])])],1),t._v(" "),e(l.a,{staticClass:"pa-0",attrs:{height:"96px"}},[e(i.c,{staticClass:"subtitle-1 font-weight-bold text--primary",staticStyle:{"line-height":"1.6rem"}},[t._v("\n      "+t._s(t.post.title)+"\n    ")])],1),t._v(" "),e(l.a,{staticClass:"pa-0",attrs:{height:"120px"}},[e(r.a,{staticClass:"px-4",attrs:{multiple:"",column:"","active-class":"error--text"}},t._l(t.post.tags,(function(o){return e(s.a,{key:o,staticClass:"px-1",staticStyle:{opacity:"0.9"},attrs:{disabled:"",outlined:"","x-small":""}},[t._v("\n        "+t._s(o)+"\n      ")])})),1)],1),t._v(" "),e(a.a,{staticClass:"ml-3 px-1",attrs:{text:"",color:"primary"}},[e("a",{staticStyle:{"text-decoration":"none"},attrs:{target:"_blank",href:t.dialogButton.href}},[e("UiSmartIcon",{staticClass:"mr-2",attrs:{name:t.dialogButton.icon}}),t._v("\n      "+t._s(t.dialogButton.text)+"\n    ")],1)])],1)}),[],!1,null,"3dd59f88",null);e.default=m.exports;installComponents(m,{UiZoomableImage:o(1277).default,UiSmartIcon:o(402).default})}}]);