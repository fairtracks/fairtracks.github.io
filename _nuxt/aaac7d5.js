(window.webpackJsonp=window.webpackJsonp||[]).push([[2],{240:function(t,e,r){"use strict";var o=r(1),n=r(330);o.a.use(n.a)},242:function(t,e,r){"use strict";var o=r(1),n=r(336),c=r.n(n);o.a.component("cookie-law",c.a)},243:function(t,e,r){"use strict";var o=r(1),n=r(337);o.a.component("vue-if-bot",n.a)},244:function(t,e,r){"use strict";var o=r(338),n=new(r.n(o).a)({max:10,maxAge:36e5});e.a=function(t){t.$vuetify.theme.options.themeCache=n}},245:function(t,e,r){"use strict";var o=r(339),n=r.n(o);e.a=function(t){t.$vuetify.theme.options.minifyTheme=n.a}},287:function(t,e,r){},342:function(t,e,r){"use strict";var o=r(18),n=(r(4),r(26),r(35),r(43),r(188),r(280),r(343)),c=r(344);var l=function(t,e){var r,o,g,b,n=(o=0,g=0,b=0,4===(r=e).length?(o="0x"+r[1]+r[1],g="0x"+r[2]+r[2],b="0x"+r[3]+r[3]):7===r.length&&(o="0x"+r[1]+r[2],g="0x"+r[3]+r[4],b="0x"+r[5]+r[6]),"".concat(+o,", ").concat(+g,", ").concat(+b));n.includes("NaN")||document.documentElement.style.setProperty("--v-".concat(t,"-rgb"),n)},d={components:{siteHeader:n.default,siteFooter:c.default},mounted:function(){!function(t){for(var e=0,r=Object.values(t);e<r.length;e++)for(var n=r[e],c=0,d=Object.entries(n);c<d.length;c++){var f=Object(o.a)(d[c],2),v=f[0],h=f[1];if(w=h,"[object Object]"===Object.prototype.toString.call(w))for(var m=0,k=Object.entries(h);m<k.length;m++){var _=Object(o.a)(k[m],2),x=_[0],y=_[1];l("".concat(v,"-").concat(x),y)}else l(v,h)}var w}(this.$vuetify.theme.themes)}},f=r(38),v=r(66),h=r.n(v),m=r(526),k=r(533),component=Object(f.a)(d,(function(){var t=this,e=t.$createElement,r=t._self._c||e;return r("v-app",{attrs:{light:""}},[r("siteHeader"),t._v(" "),r("v-main",[r("nuxt")],1),t._v(" "),r("Notification"),t._v(" "),r("siteFooter")],1)}),[],!1,null,null,null);e.a=component.exports;h()(component,{Notification:r(515).default}),h()(component,{VApp:m.a,VMain:k.a})},343:function(t,e,r){"use strict";r.r(e);var o={data:function(){return{clipped:!1,drawer:!1,items:[{title:"Home",to:"/"},{title:"News",to:"/news"},{title:"Overview",to:"/overview",submenu:[{title:"... of FAIRtracks",to:"/overview#about-fairtracks"},{title:"... for Analytical End-Users",to:"/overview#end-users"},{title:"... for Data Providers/Stewards",to:"/overview#data-providers"},{title:"... for Developers of Tools/Services",to:"/overview#developers"},{title:"... for the FAIR community",to:"/overview#fair-community"},{title:"... of the FAIRtracks team",to:"/overview#who-are-we"}]},{title:"Features",to:"/features",submenu:[{title:"Genomic Tracks",to:"/features#tracks"},{title:"Finding Tracks",to:"/features#finding-tracks"},{title:"Track Collections",to:"/features#track-collections"},{title:"Analysing Tracks",to:"/features#gsuite"},{title:"FAIRification of Track Metadata",to:"/features#fairification"},{title:"Identifiers",to:"/features#identifiers"},{title:"Ontologies",to:"/features#ontologies"},{title:"Validation",to:"/features#validation"},{title:"File formats",to:"/features#file_formats"},{title:"FAIR Interoperability",to:"/features#interoperability"}]},{title:"Standards",to:"/standards",submenu:[{title:"FAIRtracks draft standard",href:"https://github.com/fairtracks/fairtracks_standard#readme"},{title:"GTrack file format",href:"https://github.com/gtrack/gtrack#readme"},{title:"GSuite file format",href:"https://github.com/gsuite/gsuite#readme"},{title:"BioXSD/BioJSON/BioYAML (development on hold)",href:"http://bioxsd.org/"}]},{title:"Services",to:"/services",submenu:[{title:"TrackFind (Web GUI)",href:"https://trackfind.elixir.no"},{title:"TrackFind (API)",href:"https://trackfind.elixir.no/api"},{title:"GSuite HyperBrowser (TF client)",href:"https://hyperbrowser.uio.no/"},{title:"BLUEPRINT / EPICO Data Analysis Portal (TF client)",href:"http://blueprint-data.bsc.es/"},{title:"Track Hub Registry (Web GUI)",href:"https://trackhubregistry.org/"},{title:"Track Hub Registry (API)",href:"https://trackhubregistry.org/docs/apis"},{title:"FAIRtracks validator service (API)",href:"http://fairtracks.bsc.es/api/"},{title:"FAIRtracks augmentation service (API)",href:"https://fairtracks.elixir.no/api/#api-Augmentation-augment"},{title:"FAIRtracks JSON-to-GSuite converter (API)",href:"https://fairtracks.elixir.no/api/#api-Conversion-json2gsuite"}]},{title:"Code",to:"/code",submenu:[{title:"TrackFind",href:"https://github.com/elixir-oslo/trackfind#readme"},{title:"The Genomic HyperBrowser (TrackFind API Client)",href:"https://github.com/hyperbrowser/genomic-hyperbrowser/blob/38a3e27561dd148299d4cd7e594abec1d5cd57a2/lib/hb/quick/trackfind/TrackFindModule.py"},{title:"EPICO (TrackFind API changes)",href:"http://fairtracks.bsc.es/"},{title:"Track Hub Registry (FAIRtracks branch)",href:"https://github.com/Ensembl/trackhub-registry/tree/feature/fairtracks#readme"},{title:"FAIRtracks validator",href:"https://github.com/fairtracks/fairtracks_validator#readme"},{title:"FAIRtracks augmentation service",href:"https://github.com/fairtracks/fairtracks_augment#readme"},{title:"FAIRtracks JSON-to-GSuite converter",href:"https://github.com/fairtracks/fairtracks_json_to_gsuite#readme"},{title:"uniFAIR (under development)",href:"https://github.com/fairtracks/unifair#readme"}]},{title:"Material",to:"/material",submenu:[{title:"Publications",to:"/material#publications"},{title:"Posters",to:"/material#posters"},{title:"Presentations",to:"/material#presentations"},{title:"Workshops",to:"/material#workshops"},{title:"Media",to:"/material#media"}]},{title:"Contact",to:"/contact"}]}},methods:{changeThemeColor:function(){!0===this.$vuetify.theme.dark?this.$vuetify.theme.dark=!1:this.$vuetify.theme.dark=!0}}},n=r(38),c=r(66),l=r.n(c),d=r(535),f=r(529),v=r(249),h=r(227),m=r(228),k=r(229),_=r(136),x=r(78),y=r(232),w=r(534),C=r(537),I=r(530),component=Object(n.a)(o,(function(){var t=this,e=t.$createElement,r=t._self._c||e;return r("div",[r("v-navigation-drawer",{staticClass:"secondary",attrs:{fixed:"",app:"",temporary:""},model:{value:t.drawer,callback:function(e){t.drawer=e},expression:"drawer"}},[r("v-list",{staticClass:"secondary simplebutton",attrs:{dense:""}},t._l(t.items,(function(e,i){return r("v-list-item-group",{key:i},[e.submenu?r("v-list-group",{attrs:{"prepend-icon":e.icon,"no-action":""},scopedSlots:t._u([{key:"activator",fn:function(){return[r("v-list-item",{key:e.title,staticClass:"pl-0",attrs:{to:e.to},on:{click:function(r){return r.stopPropagation(),t.$router.push({path:e.to})}}},[r("v-list-item-content",[r("v-list-item-title",{domProps:{textContent:t._s(e.title.toUpperCase())}})],1)],1)]},proxy:!0}],null,!0)},[t._v(" "),t._l(e.submenu,(function(e){return r("v-list-item",{key:e.title,attrs:{to:e.to,href:e.href}},[r("v-list-item-content",[r("v-list-item-title",{domProps:{textContent:t._s(e.title)}})],1)],1)}))],2):r("v-list-item",{attrs:{to:e.to}},[r("v-list-item-content",[r("v-list-item-title",{domProps:{textContent:t._s(e.title.toUpperCase())}})],1)],1)],1)})),1)],1),t._v(" "),r("v-app-bar",{staticClass:"secondary simplebutton",attrs:{fixed:"",app:"",height:"64"}},[r("v-app-bar-nav-icon",{staticClass:"hidden-lg-and-up",on:{click:function(e){t.drawer=!0}}}),t._v(" "),r("Logo"),t._v(" "),r("v-spacer"),t._v(" "),t._l(t.items,(function(e,menuitem){return[e.submenu?[r("v-menu",{key:menuitem,attrs:{"open-on-hover":"","offset-y":"",bottom:""},scopedSlots:t._u([{key:"activator",fn:function(o){var n=o.on,c=o.attrs;return[r("v-btn",t._g(t._b({staticClass:"py-8 hidden-md-and-down",attrs:{plain:"",to:e.to}},"v-btn",c,!1),n),[t._v("\n              "+t._s(e.title)+"\n              "),r("v-icon",{staticClass:"mx-0",attrs:{right:"",small:""}},[t._v(" mdi-chevron-down")])],1)]}}],null,!0)},[t._v(" "),r("v-list",{staticClass:"secondary simplebutton",attrs:{dense:""}},t._l(e.submenu,(function(e,o){return r("v-list-item",{key:o,attrs:{link:"",to:e.to,href:e.href}},[r("v-list-item-title",[t._v(t._s(e.title))])],1)})),1)],1)]:r("v-btn",{key:menuitem,staticClass:"py-8 hidden-md-and-down",attrs:{depressed:"",tile:"",plain:"",to:e.to}},[t._v(t._s(e.title)+"\n      ")])]})),t._v(" "),r("v-btn",{attrs:{icon:""},on:{click:t.changeThemeColor}},[r("v-icon",[t._v(t._s(t.$vuetify.theme.dark?"mdi-white-balance-sunny":"mdi-weather-night")+"\n      ")])],1)],2)],1)}),[],!1,null,null,null);e.default=component.exports;l()(component,{Logo:r(348).default}),l()(component,{VAppBar:d.a,VAppBarNavIcon:f.a,VBtn:v.a,VIcon:h.a,VList:m.a,VListGroup:k.a,VListItem:_.a,VListItemContent:x.a,VListItemGroup:y.a,VListItemTitle:x.c,VMenu:w.a,VNavigationDrawer:C.a,VSpacer:I.a})},344:function(t,e,r){"use strict";r.r(e);var o={data:function(){return{menu:[{text:"Support",link:"#"},{text:"Contact Us",link:"#"},{text:"Disclaimer",link:"#"},{text:"Covid-19 Operation",link:"#"}],social:[{platform:"Twitter",link:"https://twitter.com/fairtracks",icon:"mdi-twitter"},{platform:"Github",link:"https://github.com/fairtracks",icon:"mdi-github"}]}}},n=r(38),c=r(66),l=r.n(c),d=r(249),f=r(235),v=r(187),h=r(531),m=r(532),k=r(227),component=Object(n.a)(o,(function(){var t=this,e=t.$createElement,r=t._self._c||e;return r("v-card",{attrs:{height:"100px"}},[r("v-footer",{attrs:{padless:""}},[r("v-card",{staticClass:"secondary text-center grey--text text--lighten-1",attrs:{flat:"",tile:"",width:"100%"}},[r("v-card-text",t._l(t.social,(function(e,i){return r("v-btn",{key:"social-"+i,attrs:{icon:"",small:"",color:"info",href:e.link,target:"_blank"}},[r("v-icon",{attrs:{size:"24px"}},[t._v(t._s(e.icon))])],1)})),1),t._v(" "),r("v-divider"),t._v(" "),r("v-card-text",{staticClass:"secondary info--text"},[t._v("\n        "+t._s((new Date).getFullYear())+" ©\n        "),r("nuxt-link",{staticClass:"primary--text",attrs:{to:"/"}},[t._v("FAIRtracks")]),t._v("\n        (based on the\n        "),r("a",{attrs:{href:"https://github.com/staticdesigner/modevue"}},[t._v("ModeVue")]),t._v("\n        template, available under the MIT license)\n      ")],1)],1)],1)],1)}),[],!1,null,null,null);e.default=component.exports;l()(component,{VBtn:d.a,VCard:f.a,VCardText:v.c,VDivider:h.a,VFooter:m.a,VIcon:k.a})},345:function(t,e,r){"use strict";var o=r(38),component=Object(o.a)({},(function(){var t=this.$createElement;return(this._self._c||t)("nuxt")}),[],!1,null,null,null);e.a=component.exports},348:function(t,e,r){"use strict";r.r(e);var o=r(38),component=Object(o.a)({},(function(){var t=this.$createElement;return(this._self._c||t)("nuxt-link",{attrs:{to:"/",contain:"",height:"100%","aspect-ratio":1532/480,tag:"img",src:r(404)}})}),[],!1,null,null,null);e.default=component.exports},351:function(t,e,r){r(352),t.exports=r(353)},381:function(t,e,r){"use strict";r(287)},403:function(t,e,r){},404:function(t,e,r){t.exports=r.p+"img/FairTracks-logo-light-white.db615b0.png"},515:function(t,e,r){"use strict";r.r(e);var o=r(38),component=Object(o.a)({},(function(){var t=this,e=t.$createElement,r=t._self._c||e;return r("vue-if-bot",[r("footer",[r("cookie-law",{staticClass:"secondary grey--text text--lighten-1",attrs:{"button-text":"Accept","button-class":"v-btn v-size--large white black--text","storage-type":"cookies"}},[r("div",{attrs:{slot:"message"},slot:"message"},[t._v("\n        This website uses cookies to ensure you get the best experience on our\n        website.\n        "),r("a",{attrs:{href:"https://elixir-oslo.github.io/gdpr/"}},[t._v("\n          Read more about your privacy and our terms of service .\n        ")])]),t._v(" "),r("div",{attrs:{slot:"buttonText"},slot:"buttonText"},[t._v("Hei hei")])])],1)])}),[],!1,null,null,null);e.default=component.exports},90:function(t,e,r){"use strict";var o={layout:"error-layout",props:{error:{type:Object,default:null}},data:function(){return{pageNotFound:"Page you are looking for could not be found.",otherError:"An error occurred",title404:"404 error"}},head:function(){return{title:404===this.error.statusCode?this.title404:this.otherError}}},n=(r(381),r(38)),c=r(66),l=r.n(c),d=r(526),f=r(527),v=r(536),h=r(180),m=r(528),component=Object(n.a)(o,(function(){var t=this,e=t.$createElement,r=t._self._c||e;return r("v-app",{class:t.$vuetify.theme.dark?"grey darken-4":"white",attrs:{dark:""}},[r("section",{attrs:{id:"error"}},[r("v-row",{attrs:{"no-gutters":""}},[r("v-col",{attrs:{cols:"12"}},[r("v-container",{staticClass:"py-16 text-center"},[r("v-row",[r("v-col",{attrs:{cols:"12"}},[404===t.error.statusCode?r("div",[r("span",{staticClass:"text-h5 text-sm-h4 text--disabled"},[t._v("\n                  "+t._s(t.pageNotFound)+"\n                ")]),t._v(" "),r("div",{staticClass:"pt-16"},[r("v-img",{staticClass:"mx-auto",attrs:{src:"/404.svg","lazy-src":"404.svg","max-width":"700"}}),t._v(" "),r("div",{staticClass:"mt-4"},[r("small",[r("a",{staticClass:"\n                          text--primary text--disabled text-decoration-none\n                        ",attrs:{href:"https://www.freepik.com/vectors/business"}},[t._v("Business vector created by pikisuperstar -\n                        www.freepik.com")])])])],1)]):r("div",{staticClass:"text-h5 text-sm-h4 text--disabled"},[t._v("\n                "+t._s(t.otherError)+"\n              ")]),t._v(" "),r("p",{staticClass:"pt-16 text-uppercase"},[t._v("\n                Go to\n                "),r("NuxtLink",{staticClass:"text-decoration-none",attrs:{to:"/"}},[t._v("\n                  Home page\n                ")])],1)])],1)],1)],1)],1)],1)])}),[],!1,null,"bbf6092a",null);e.a=component.exports;l()(component,{VApp:d.a,VCol:f.a,VContainer:v.a,VImg:h.a,VRow:m.a})}},[[351,27,3,28]]]);