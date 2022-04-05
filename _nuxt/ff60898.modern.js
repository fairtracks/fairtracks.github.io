(window.webpackJsonp=window.webpackJsonp||[]).push([[15,28,29],{1e3:function(e,t,i){"use strict";i(965);var a=i(982),l=i(5);function n(e,t){var i=Object.keys(e);if(Object.getOwnPropertySymbols){var a=Object.getOwnPropertySymbols(e);t&&(a=a.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),i.push.apply(i,a)}return i}function r(e,t,i){return t in e?Object.defineProperty(e,t,{value:i,enumerable:!0,configurable:!0,writable:!0}):e[t]=i,e}var o=Object(l.a)(a.a);t.a=o.extend({name:"v-textarea",props:{autoGrow:Boolean,noResize:Boolean,rowHeight:{type:[Number,String],default:24,validator:e=>!isNaN(parseFloat(e))},rows:{type:[Number,String],default:5,validator:e=>!isNaN(parseInt(e,10))}},computed:{classes(){return function(e){for(var t=1;t<arguments.length;t++){var i=null!=arguments[t]?arguments[t]:{};t%2?n(Object(i),!0).forEach((function(t){r(e,t,i[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(i)):n(Object(i)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(i,t))}))}return e}({"v-textarea":!0,"v-textarea--auto-grow":this.autoGrow,"v-textarea--no-resize":this.noResizeHandle},a.a.options.computed.classes.call(this))},noResizeHandle(){return this.noResize||this.autoGrow}},watch:{autoGrow(e){this.$nextTick((()=>{var t;e?this.calculateInputHeight():null==(t=this.$refs.input)||t.style.removeProperty("height")}))},lazyValue(){this.autoGrow&&this.$nextTick(this.calculateInputHeight)},rowHeight(){this.autoGrow&&this.$nextTick(this.calculateInputHeight)}},mounted(){setTimeout((()=>{this.autoGrow&&this.calculateInputHeight()}),0)},methods:{calculateInputHeight(){var e=this.$refs.input;if(e){e.style.height="0";var t=e.scrollHeight,i=parseInt(this.rows,10)*parseFloat(this.rowHeight);e.style.height=Math.max(i,t)+"px"}},genInput(){var e=a.a.options.methods.genInput.call(this);return e.tag="textarea",delete e.data.attrs.type,e.data.attrs.rows=this.rows,e},onInput(e){a.a.options.methods.onInput.call(this,e),this.autoGrow&&this.calculateInputHeight()},onKeyDown(e){this.isFocused&&13===e.keyCode&&e.stopPropagation(),this.$emit("keydown",e)}}})},1005:function(e,t,i){"use strict";i.r(t);var a=i(15),l=i(21),n=i.n(l),r=i(223),o=i(999),s=i(982),d=i(1e3),v=Object(a.a)({},(function(){var e=this,t=e.$createElement,i=e._self._c||t;return i("v-form",[i("v-text-field",{attrs:{label:"Name",dense:"",outlined:""}}),e._v(" "),i("v-text-field",{attrs:{label:"Email",dense:"",outlined:""}}),e._v(" "),i("v-text-field",{attrs:{label:"Subject",dense:"",outlined:""}}),e._v(" "),i("v-textarea",{attrs:{dense:"",label:"Your Message","auto-grow":"",outlined:"",rows:"8","row-height":"20"}}),e._v(" "),i("v-btn",{attrs:{outlined:"",block:"",color:"primary"}},[e._v("SEND MESSAGE")])],1)}),[],!1,null,null,null);t.default=v.exports;n()(v,{VBtn:r.a,VForm:o.a,VTextField:s.a,VTextarea:d.a})},1075:function(e,t,i){"use strict";i.r(t);var a={data:()=>({social:[{platform:"Facebook",link:"https://www.facebook.com/",icon:"mdi-facebook"},{platform:"Twitter",link:"https://twitter.com/",icon:"mdi-twitter"},{platform:"Instagram",link:"https://www.instagram.com/",icon:"mdi-instagram"},{platform:"Linkedin",link:"https://www.linkedin.com/",icon:"mdi-linkedin"},{platform:"Github",link:"https://modevue.staticdesigner.com/",icon:"mdi-github"}]})},l=i(15),n=i(21),r=i.n(n),o=i(223),s=i(929),d=i(939),v=i(922),x=i(194),u=i(195),p=i(102),f=i(41),c=i(88),h=i(930),_=Object(l.a)(a,(function(){var e=this,t=e.$createElement,i=e._self._c||t;return i("section",{class:e.$vuetify.theme.dark?"blue-grey darken-4 grey--text text--lighten-1":"grey lighten-3 grey--text text--darken-4",attrs:{id:"footer-top"}},[i("v-container",[i("v-row",[i("v-col",{staticClass:"py-12",attrs:{cols:"12",md:"5"}},[i("v-row",{attrs:{"no-gutters":""}},[i("v-col",{attrs:{cols:"12"}},[i("DemoUiLogo")],1),e._v(" "),i("v-col",{attrs:{cols:"12"}},[i("p",{staticClass:"mt-8 text-justify",staticStyle:{"max-width":"400px"}},[e._v("\n              Lorem ipsum dolor, sit amet consectetur adipisicing elit. Illo pariatur quidem, quis\n              modi iure nihil commodi suscipit, corporis dicta adipisci, voluptatum quia\n              cupiditate. Nulla minus voluptatum nostrum deleniti, asperiores facere.\n            ")])]),e._v(" "),i("v-col",{attrs:{cols:"12"}},[i("v-list",{staticClass:"transparent",attrs:{"two-line":""}},[i("v-list-item",[i("v-list-item-icon",[i("v-icon",[e._v(" mdi-map-marker ")])],1),e._v(" "),i("v-list-item-content",[i("v-list-item-title",[e._v("ADDRESS")]),e._v(" "),i("v-list-item-subtitle",[e._v("1400 Main Street, Orlando, FL 79938")])],1)],1),e._v(" "),i("v-divider"),e._v(" "),i("v-list-item",[i("v-list-item-icon",[i("v-icon",[e._v(" mdi-email ")])],1),e._v(" "),i("v-list-item-content",[i("v-list-item-title",[e._v("EMAIL")]),e._v(" "),i("v-list-item-subtitle",[e._v("info@example.com")]),e._v(" "),i("v-list-item-subtitle",[e._v("support@example.com")])],1)],1),e._v(" "),i("v-divider"),e._v(" "),i("v-list-item",[i("v-list-item-icon",[i("v-icon",[e._v(" mdi-phone ")])],1),e._v(" "),i("v-list-item-content",[i("v-list-item-title",[e._v("PHONE")]),e._v(" "),i("v-list-item-subtitle",[e._v("(323) 555-6789")]),e._v(" "),i("v-list-item-subtitle",[e._v("(650) 555-1234")])],1)],1),e._v(" "),i("v-divider")],1),e._v(" "),i("div",{staticClass:"d-flex justify-center mt-5"},e._l(e.social,(function(t,a){return i("v-btn",{key:"social-"+a,staticClass:"d-flex",attrs:{icon:"",large:"",color:"primary",href:t.link,target:"_blank"}},[i("v-icon",[e._v(e._s(t.icon))])],1)})),1)],1)],1)],1),e._v(" "),i("v-col",{staticClass:"text-center hidden-sm-and-down col col-2 py-12",attrs:{cols:"1"}},[i("v-divider",{attrs:{vertical:""}})],1),e._v(" "),i("v-col",{staticClass:"py-12",attrs:{cols:"12",md:"5"}},[i("h3",{staticClass:"mb-8"},[e._v("SEND YOUR MESSAGE")]),e._v(" "),i("DemoUiFooterContactForm")],1)],1)],1)],1)}),[],!1,null,null,null);t.default=_.exports;r()(_,{DemoUiLogo:i(980).default,DemoUiFooterContactForm:i(1005).default}),r()(_,{VBtn:o.a,VCol:s.a,VContainer:d.a,VDivider:v.a,VIcon:x.a,VList:u.a,VListItem:p.a,VListItemContent:f.a,VListItemIcon:c.a,VListItemSubtitle:f.b,VListItemTitle:f.c,VRow:h.a})},960:function(e,t,i){var a=i(979);a.__esModule&&(a=a.default),"string"==typeof a&&(a=[[e.i,a,""]]),a.locals&&(e.exports=a.locals);(0,i(11).default)("4f2031a1",a,!0,{sourceMap:!1})},965:function(e,t,i){var a=i(966);a.__esModule&&(a=a.default),"string"==typeof a&&(a=[[e.i,a,""]]),a.locals&&(e.exports=a.locals);(0,i(11).default)("ddcad30e",a,!0,{sourceMap:!1})},966:function(e,t,i){var a=i(10)(!1);a.push([e.i,".theme--light.v-textarea.v-text-field--solo-inverted.v-input--is-focused textarea{color:#fff}.theme--light.v-textarea.v-text-field--solo-inverted.v-input--is-focused textarea::-webkit-input-placeholder{color:hsla(0,0%,100%,.5)}.theme--light.v-textarea.v-text-field--solo-inverted.v-input--is-focused textarea::-moz-placeholder{color:hsla(0,0%,100%,.5)}.theme--light.v-textarea.v-text-field--solo-inverted.v-input--is-focused textarea:-ms-input-placeholder{color:hsla(0,0%,100%,.5)}.theme--light.v-textarea.v-text-field--solo-inverted.v-input--is-focused textarea::placeholder{color:hsla(0,0%,100%,.5)}.theme--dark.v-textarea.v-text-field--solo-inverted.v-input--is-focused textarea{color:rgba(0,0,0,.87)}.theme--dark.v-textarea.v-text-field--solo-inverted.v-input--is-focused textarea::-webkit-input-placeholder{color:rgba(0,0,0,.38)}.theme--dark.v-textarea.v-text-field--solo-inverted.v-input--is-focused textarea::-moz-placeholder{color:rgba(0,0,0,.38)}.theme--dark.v-textarea.v-text-field--solo-inverted.v-input--is-focused textarea:-ms-input-placeholder{color:rgba(0,0,0,.38)}.theme--dark.v-textarea.v-text-field--solo-inverted.v-input--is-focused textarea::placeholder{color:rgba(0,0,0,.38)}.v-textarea textarea{align-self:stretch;-webkit-box-flex:1;flex:1 1 auto;line-height:1.75rem;max-width:100%;min-height:32px;outline:none;padding:0;width:100%}.v-textarea .v-text-field__prefix,.v-textarea .v-text-field__suffix{padding-top:2px;align-self:start}.v-textarea.v-text-field--box .v-text-field__prefix,.v-textarea.v-text-field--box textarea,.v-textarea.v-text-field--enclosed .v-text-field__prefix,.v-textarea.v-text-field--enclosed textarea{margin-top:24px}.v-textarea.v-text-field--box.v-text-field--outlined:not(.v-input--dense) .v-text-field__prefix,.v-textarea.v-text-field--box.v-text-field--outlined:not(.v-input--dense) .v-text-field__suffix,.v-textarea.v-text-field--box.v-text-field--outlined:not(.v-input--dense) textarea,.v-textarea.v-text-field--box.v-text-field--single-line:not(.v-input--dense) .v-text-field__prefix,.v-textarea.v-text-field--box.v-text-field--single-line:not(.v-input--dense) .v-text-field__suffix,.v-textarea.v-text-field--box.v-text-field--single-line:not(.v-input--dense) textarea,.v-textarea.v-text-field--enclosed.v-text-field--outlined:not(.v-input--dense) .v-text-field__prefix,.v-textarea.v-text-field--enclosed.v-text-field--outlined:not(.v-input--dense) .v-text-field__suffix,.v-textarea.v-text-field--enclosed.v-text-field--outlined:not(.v-input--dense) textarea,.v-textarea.v-text-field--enclosed.v-text-field--single-line:not(.v-input--dense) .v-text-field__prefix,.v-textarea.v-text-field--enclosed.v-text-field--single-line:not(.v-input--dense) .v-text-field__suffix,.v-textarea.v-text-field--enclosed.v-text-field--single-line:not(.v-input--dense) textarea{margin-top:10px}.v-textarea.v-text-field--box.v-text-field--outlined:not(.v-input--dense) .v-label,.v-textarea.v-text-field--box.v-text-field--single-line:not(.v-input--dense) .v-label,.v-textarea.v-text-field--enclosed.v-text-field--outlined:not(.v-input--dense) .v-label,.v-textarea.v-text-field--enclosed.v-text-field--single-line:not(.v-input--dense) .v-label{top:18px}.v-textarea.v-text-field--box.v-text-field--outlined.v-input--dense .v-text-field__prefix,.v-textarea.v-text-field--box.v-text-field--outlined.v-input--dense .v-text-field__suffix,.v-textarea.v-text-field--box.v-text-field--outlined.v-input--dense textarea,.v-textarea.v-text-field--box.v-text-field--single-line.v-input--dense .v-text-field__prefix,.v-textarea.v-text-field--box.v-text-field--single-line.v-input--dense .v-text-field__suffix,.v-textarea.v-text-field--box.v-text-field--single-line.v-input--dense textarea,.v-textarea.v-text-field--enclosed.v-text-field--outlined.v-input--dense .v-text-field__prefix,.v-textarea.v-text-field--enclosed.v-text-field--outlined.v-input--dense .v-text-field__suffix,.v-textarea.v-text-field--enclosed.v-text-field--outlined.v-input--dense textarea,.v-textarea.v-text-field--enclosed.v-text-field--single-line.v-input--dense .v-text-field__prefix,.v-textarea.v-text-field--enclosed.v-text-field--single-line.v-input--dense .v-text-field__suffix,.v-textarea.v-text-field--enclosed.v-text-field--single-line.v-input--dense textarea{margin-top:6px}.v-textarea.v-text-field--box.v-text-field--outlined.v-input--dense .v-input__append-inner,.v-textarea.v-text-field--box.v-text-field--outlined.v-input--dense .v-input__append-outer,.v-textarea.v-text-field--box.v-text-field--outlined.v-input--dense .v-input__prepend-inner,.v-textarea.v-text-field--box.v-text-field--outlined.v-input--dense .v-input__prepend-outer,.v-textarea.v-text-field--box.v-text-field--single-line.v-input--dense .v-input__append-inner,.v-textarea.v-text-field--box.v-text-field--single-line.v-input--dense .v-input__append-outer,.v-textarea.v-text-field--box.v-text-field--single-line.v-input--dense .v-input__prepend-inner,.v-textarea.v-text-field--box.v-text-field--single-line.v-input--dense .v-input__prepend-outer,.v-textarea.v-text-field--enclosed.v-text-field--outlined.v-input--dense .v-input__append-inner,.v-textarea.v-text-field--enclosed.v-text-field--outlined.v-input--dense .v-input__append-outer,.v-textarea.v-text-field--enclosed.v-text-field--outlined.v-input--dense .v-input__prepend-inner,.v-textarea.v-text-field--enclosed.v-text-field--outlined.v-input--dense .v-input__prepend-outer,.v-textarea.v-text-field--enclosed.v-text-field--single-line.v-input--dense .v-input__append-inner,.v-textarea.v-text-field--enclosed.v-text-field--single-line.v-input--dense .v-input__append-outer,.v-textarea.v-text-field--enclosed.v-text-field--single-line.v-input--dense .v-input__prepend-inner,.v-textarea.v-text-field--enclosed.v-text-field--single-line.v-input--dense .v-input__prepend-outer{align-self:flex-start;margin-top:8px}.v-textarea.v-text-field--solo{-webkit-box-align:start;align-items:flex-start}.v-textarea.v-text-field--solo .v-input__control textarea{caret-color:auto}.v-textarea.v-text-field--solo .v-input__append-inner,.v-textarea.v-text-field--solo .v-input__append-outer,.v-textarea.v-text-field--solo .v-input__prepend-inner,.v-textarea.v-text-field--solo .v-input__prepend-outer{align-self:flex-start;margin-top:12px}.v-application--is-ltr .v-textarea.v-text-field--solo .v-input__append-inner{padding-left:12px}.v-application--is-rtl .v-textarea.v-text-field--solo .v-input__append-inner{padding-right:12px}.v-textarea--auto-grow textarea{overflow:hidden}.v-textarea--no-resize textarea{resize:none}.v-textarea.v-text-field--enclosed .v-text-field__slot{align-self:stretch}.v-application--is-ltr .v-textarea.v-text-field--enclosed .v-text-field__slot{margin-right:-12px}.v-application--is-rtl .v-textarea.v-text-field--enclosed .v-text-field__slot{margin-left:-12px}.v-application--is-ltr .v-textarea.v-text-field--enclosed .v-text-field__slot textarea{padding-right:12px}.v-application--is-rtl .v-textarea.v-text-field--enclosed .v-text-field__slot textarea{padding-left:12px}",""]),e.exports=a},978:function(e,t,i){"use strict";i(960)},979:function(e,t,i){var a=i(10)(!1);a.push([e.i,".fill-theme-color[data-v-5a8f9e6e]{fill:#1976d2}.fill-light-color[data-v-5a8f9e6e]{fill:#fff}.fill-dark-color[data-v-5a8f9e6e]{fill:#000}",""]),e.exports=a},980:function(e,t,i){"use strict";i.r(t);i(978);var a=i(15),l=Object(a.a)({},(function(){var e=this,t=e.$createElement,i=e._self._c||t;return i("svg",{attrs:{width:"151",height:"55",viewBox:"0 0 151 55",fill:"none",xmlns:"http://www.w3.org/2000/svg"}},[i("path",{staticClass:"fill-theme-color",attrs:{d:"M53.6914 18.9375L57.5 30.8086L61.2969 18.9375H66.7109V36H62.5859V32.0156L62.9844 23.8594L58.8594 36H56.1406L52.0039 23.8477L52.4023 32.0156V36H48.2891V18.9375H53.6914ZM116.012 31.3594L119.41 18.9375H124.004L118.262 36H113.762L108.066 18.9375H112.625L116.012 31.3594Z"}}),e._v(" "),i("path",{class:e.$vuetify.theme.dark?"fill-light-color":"fill-dark-color",attrs:{d:"M68.6562 29.543C68.6562 28.2773 68.9023 27.1523 69.3945 26.168C69.8867 25.1758 70.5938 24.4141 71.5156 23.8828C72.4375 23.3516 73.5195 23.0859 74.7617 23.0859C76.6602 23.0859 78.1562 23.6758 79.25 24.8555C80.3438 26.0273 80.8906 27.625 80.8906 29.6484V29.7891C80.8906 31.7656 80.3398 33.3359 79.2383 34.5C78.1445 35.6562 76.6602 36.2344 74.7852 36.2344C72.9805 36.2344 71.5312 35.6953 70.4375 34.6172C69.3438 33.5312 68.7539 32.0625 68.668 30.2109L68.6562 29.543ZM72.6055 29.7891C72.6055 30.9609 72.7891 31.8203 73.1562 32.3672C73.5234 32.9141 74.0664 33.1875 74.7852 33.1875C76.1914 33.1875 76.9102 32.1055 76.9414 29.9414V29.543C76.9414 27.2695 76.2148 26.1328 74.7617 26.1328C73.4414 26.1328 72.7266 27.1133 72.6172 29.0742L72.6055 29.7891ZM82.1328 29.5664C82.1328 27.5586 82.5664 25.9766 83.4336 24.8203C84.3008 23.6641 85.5117 23.0859 87.0664 23.0859C88.1992 23.0859 89.1523 23.5312 89.9258 24.4219V18H93.8867V36H90.3359L90.1367 34.6406C89.3242 35.7031 88.293 36.2344 87.043 36.2344C85.5352 36.2344 84.3398 35.6562 83.457 34.5C82.5742 33.3438 82.1328 31.6992 82.1328 29.5664ZM86.082 29.8125C86.082 32.0625 86.7383 33.1875 88.0508 33.1875C88.9258 33.1875 89.5508 32.8203 89.9258 32.0859V27.2578C89.5664 26.5078 88.9492 26.1328 88.0742 26.1328C86.8555 26.1328 86.1953 27.1172 86.0938 29.0859L86.082 29.8125ZM102.266 36.2344C100.32 36.2344 98.7461 35.6562 97.543 34.5C96.3398 33.3359 95.7383 31.8242 95.7383 29.9648V29.6367C95.7383 28.3398 95.9766 27.1953 96.4531 26.2031C96.9375 25.2109 97.6406 24.4453 98.5625 23.9062C99.4844 23.3594 100.578 23.0859 101.844 23.0859C103.625 23.0859 105.031 23.6406 106.062 24.75C107.094 25.8516 107.609 27.3906 107.609 29.3672V30.9023H99.7578C99.8984 31.6133 100.207 32.1719 100.684 32.5781C101.16 32.9844 101.777 33.1875 102.535 33.1875C103.785 33.1875 104.762 32.75 105.465 31.875L107.27 34.0078C106.777 34.6875 106.078 35.2305 105.172 35.6367C104.273 36.0352 103.305 36.2344 102.266 36.2344ZM101.82 26.1328C100.664 26.1328 99.9766 26.8984 99.7578 28.4297H103.742V28.125C103.758 27.4922 103.598 27.0039 103.262 26.6602C102.926 26.3086 102.445 26.1328 101.82 26.1328ZM132.629 34.6289C131.793 35.6992 130.664 36.2344 129.242 36.2344C127.852 36.2344 126.797 35.832 126.078 35.0273C125.367 34.2148 125.012 33.0508 125.012 31.5352V23.3203H128.961V31.5586C128.961 32.6445 129.488 33.1875 130.543 33.1875C131.449 33.1875 132.094 32.8633 132.477 32.2148V23.3203H136.449V36H132.746L132.629 34.6289ZM144.758 36.2344C142.812 36.2344 141.238 35.6562 140.035 34.5C138.832 33.3359 138.23 31.8242 138.23 29.9648V29.6367C138.23 28.3398 138.469 27.1953 138.945 26.2031C139.43 25.2109 140.133 24.4453 141.055 23.9062C141.977 23.3594 143.07 23.0859 144.336 23.0859C146.117 23.0859 147.523 23.6406 148.555 24.75C149.586 25.8516 150.102 27.3906 150.102 29.3672V30.9023H142.25C142.391 31.6133 142.699 32.1719 143.176 32.5781C143.652 32.9844 144.27 33.1875 145.027 33.1875C146.277 33.1875 147.254 32.75 147.957 31.875L149.762 34.0078C149.27 34.6875 148.57 35.2305 147.664 35.6367C146.766 36.0352 145.797 36.2344 144.758 36.2344ZM144.312 26.1328C143.156 26.1328 142.469 26.8984 142.25 28.4297H146.234V28.125C146.25 27.4922 146.09 27.0039 145.754 26.6602C145.418 26.3086 144.938 26.1328 144.312 26.1328Z"}}),e._v(" "),i("path",{staticClass:"fill-theme-color",attrs:{d:"M13.0125 9.81917L20.419 32.9045L27.8026 9.81917H38.3312V43H30.3094V35.2517L31.0842 19.3906L23.0625 43H17.7754L9.73092 19.3678L10.5057 35.2517V43H2.50679V9.81917H13.0125Z"}}),e._v(" "),i("path",{class:e.$vuetify.theme.dark?"fill-light-color":"fill-dark-color",attrs:{d:"M20.4063 33.9755L27.0151 9.81917H35.9484L24.7818 43H16.0308L4.95534 9.81917H13.8203L20.4063 33.9755Z"}})])}),[],!1,null,"5a8f9e6e",null);t.default=l.exports},999:function(e,t,i){"use strict";var a=i(5),l=i(71),n=i(112);function r(e,t){var i=Object.keys(e);if(Object.getOwnPropertySymbols){var a=Object.getOwnPropertySymbols(e);t&&(a=a.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),i.push.apply(i,a)}return i}function o(e){for(var t=1;t<arguments.length;t++){var i=null!=arguments[t]?arguments[t]:{};t%2?r(Object(i),!0).forEach((function(t){s(e,t,i[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(i)):r(Object(i)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(i,t))}))}return e}function s(e,t,i){return t in e?Object.defineProperty(e,t,{value:i,enumerable:!0,configurable:!0,writable:!0}):e[t]=i,e}t.a=Object(a.a)(l.a,Object(n.b)("form")).extend({name:"v-form",provide(){return{form:this}},inheritAttrs:!1,props:{disabled:Boolean,lazyValidation:Boolean,readonly:Boolean,value:Boolean},data:()=>({inputs:[],watchers:[],errorBag:{}}),watch:{errorBag:{handler(e){var t=Object.values(e).includes(!0);this.$emit("input",!t)},deep:!0,immediate:!0}},methods:{watchInput(e){var t=e=>e.$watch("hasError",(t=>{this.$set(this.errorBag,e._uid,t)}),{immediate:!0}),i={_uid:e._uid,valid:()=>{},shouldValidate:()=>{}};return this.lazyValidation?i.shouldValidate=e.$watch("shouldValidate",(a=>{a&&(this.errorBag.hasOwnProperty(e._uid)||(i.valid=t(e)))})):i.valid=t(e),i},validate(){return 0===this.inputs.filter((e=>!e.validate(!0))).length},reset(){this.inputs.forEach((e=>e.reset())),this.resetErrorBag()},resetErrorBag(){this.lazyValidation&&setTimeout((()=>{this.errorBag={}}),0)},resetValidation(){this.inputs.forEach((e=>e.resetValidation())),this.resetErrorBag()},register(e){this.inputs.push(e),this.watchers.push(this.watchInput(e))},unregister(e){var t=this.inputs.find((t=>t._uid===e._uid));if(t){var i=this.watchers.find((e=>e._uid===t._uid));i&&(i.valid(),i.shouldValidate()),this.watchers=this.watchers.filter((e=>e._uid!==t._uid)),this.inputs=this.inputs.filter((e=>e._uid!==t._uid)),this.$delete(this.errorBag,t._uid)}}},render(e){return e("form",{staticClass:"v-form",attrs:o({novalidate:!0},this.attrs$),on:{submit:e=>this.$emit("submit",e)}},this.$slots.default)}})}}]);