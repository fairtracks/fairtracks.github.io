(window.webpackJsonp=window.webpackJsonp||[]).push([[42],{1125:function(t,e,n){"use strict";var a=n(36);n(4),n(32),n(58),n(73),n(161),n(194);e.a={computed:{cssVars:function(){var t={};return this.createRgbVarsForThemes(this.$vuetify.theme.themes,t),t}},methods:{isObject:function(t){return"[object Object]"===Object.prototype.toString.call(t)},hexToRgb:function(t){var e=0,n=0,a=0;return 4===t.length?(e="0x"+t[1]+t[1],n="0x"+t[2]+t[2],a="0x"+t[3]+t[3]):7===t.length&&(e="0x"+t[1]+t[2],n="0x"+t[3]+t[4],a="0x"+t[5]+t[6]),"".concat(+e,", ").concat(+n,", ").concat(+a)},generateRgbVar:function(t,e,n){var a=this.hexToRgb(e);a.includes("NaN")||(n["--v-".concat(t,"-rgb")]=a)},createRgbVarsForThemes:function(t,e){if(void 0!==t)for(var n=0,r=Object.values(t);n<r.length;n++)for(var s=r[n],o=0,c=Object.entries(s);o<c.length;o++){var i=Object(a.a)(c[o],2),g=i[0],u=i[1];if(this.isObject(u))for(var l=0,f=Object.entries(u);l<f.length;l++){var h=Object(a.a)(f[l],2),b=h[0],d=h[1];this.generateRgbVar("".concat(g,"-").concat(b),d,e)}else this.generateRgbVar(g,u,e)}}}}},1287:function(t,e,n){var a=n(1333);a.__esModule&&(a=a.default),"string"==typeof a&&(a=[[t.i,a,""]]),a.locals&&(t.exports=a.locals);(0,n(31).default)("0b3492d0",a,!0,{sourceMap:!1})},1332:function(t,e,n){"use strict";n(1287)},1333:function(t,e,n){var a=n(30)(!1);a.push([t.i,".nuxt-content>.fairtracks-content.light{background-color:rgba(var(--v-primary-rgb),.15)}.nuxt-content>.fairtracks-content.dark{background-color:var(--v-primary-base)}.nuxt-content>.fairtracks-content{padding:16px}.nuxt-content>.fairtracks-content>p{margin:16px}.nuxt-content>.fairtracks-content>p:last-child{margin-bottom:0}",""]),t.exports=a},1353:function(t,e,n){"use strict";n.r(e);var a=n(368),r={mixins:[n(1125).a],data:function(){return{componentId:"ui-plain-logo"}},computed:{logoAssetObject:function(){return this.$vuetify.theme.dark?this.$getImageAssetObject("images","logos","FAIRtracks-logo-light-white-180-[fixed].png"):this.$getImageAssetObject("images","logos","FAIRtracks-logo-transparent-180-[fixed].png")}}},s=(n(1332),n(60)),o=Object(s.a)(r,(function(){var t=this,e=t._self._c;return e("div",{staticClass:"fairtracks-content",class:t.$vuetify.theme.dark?"dark":"light",style:t.cssVars},[e(a.a,{attrs:{"max-width":"180","min-width":"180"}},[e("UiSmartImg",{attrs:{"image-asset":t.logoAssetObject,"img-height":"100","img-width":"320","not-responsive":""}})],1),t._v(" "),t._t("default")],2)}),[],!1,null,null,null);e.default=o.exports;installComponents(o,{UiSmartImg:n(400).default})}}]);