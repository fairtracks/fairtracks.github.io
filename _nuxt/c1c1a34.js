(window.webpackJsonp=window.webpackJsonp||[]).push([[42],{1217:function(t,e,a){"use strict";var n=a(37);a(4),a(33),a(59),a(73),a(161),a(196);e.a={computed:{cssVars:function(){var t={};return this.createRgbVarsForThemes(this.$vuetify.theme.themes,t),t}},methods:{isObject:function(t){return"[object Object]"===Object.prototype.toString.call(t)},hexToRgb:function(t){var e=0,a=0,n=0;return 4===t.length?(e="0x"+t[1]+t[1],a="0x"+t[2]+t[2],n="0x"+t[3]+t[3]):7===t.length&&(e="0x"+t[1]+t[2],a="0x"+t[3]+t[4],n="0x"+t[5]+t[6]),"".concat(+e,", ").concat(+a,", ").concat(+n)},generateRgbVar:function(t,e,a){var n=this.hexToRgb(e);n.includes("NaN")||(a["--v-".concat(t,"-rgb")]=n)},createRgbVarsForThemes:function(t,e){if(void 0!==t)for(var a=0,r=Object.values(t);a<r.length;a++)for(var s=r[a],o=0,c=Object.entries(s);o<c.length;o++){var i=Object(n.a)(c[o],2),u=i[0],l=i[1];if(this.isObject(l))for(var g=0,f=Object.entries(l);g<f.length;g++){var h=Object(n.a)(f[g],2),p=h[0],b=h[1];this.generateRgbVar("".concat(u,"-").concat(p),b,e)}else this.generateRgbVar(u,l,e)}}}}},1379:function(t,e,a){var n=a(1425);n.__esModule&&(n=n.default),"string"==typeof n&&(n=[[t.i,n,""]]),n.locals&&(t.exports=n.locals);(0,a(31).default)("309e44ae",n,!0,{sourceMap:!1})},1424:function(t,e,a){"use strict";a(1379)},1425:function(t,e,a){var n=a(30)(!1);n.push([t.i,".nuxt-content .fairtracks-content.light{background-color:rgba(var(--v-primary-rgb),.15)}.nuxt-content .fairtracks-content.dark{background-color:var(--v-primary-base)}.nuxt-content .fairtracks-content{padding:16px;margin-bottom:16px}.nuxt-content .fairtracks-content>p{margin:16px}.nuxt-content .fairtracks-content>p:last-child{margin-bottom:0}",""]),t.exports=n},1445:function(t,e,a){"use strict";a.r(e);var n=a(371),r={mixins:[a(1217).a],props:{spaceAbove:{type:Boolean,default:!1}},data:function(){return{componentId:"ui-fairtracks-content"}},computed:{logoAssetObject:function(){return this.$vuetify.theme.dark?this.$getImageAssetObject("images","logos","FAIRtracks-logo-light-white-180-[fixed].png"):this.$getImageAssetObject("images","logos","FAIRtracks-logo-transparent-180-[fixed].png")}}},s=(a(1424),a(61)),o=Object(s.a)(r,(function(){var t=this,e=t._self._c;return e("div",{class:t.spaceAbove?"pt-4":null},[e("div",{staticClass:"fairtracks-content",class:t.$vuetify.theme.dark?"dark":"light",style:t.cssVars},[e(n.a,{attrs:{"max-width":"180","min-width":"180"}},[e("UiSmartImg",{attrs:{"image-asset":t.logoAssetObject,"img-height":"100","img-width":"320","not-responsive":""}})],1),t._v(" "),t._t("default")],2)])}),[],!1,null,null,null);e.default=o.exports;installComponents(o,{UiSmartImg:a(403).default})}}]);