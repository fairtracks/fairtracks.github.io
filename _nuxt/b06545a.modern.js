(window.webpackJsonp=window.webpackJsonp||[]).push([[33,38],{847:function(t,e,a){"use strict";a.r(e);var i=a(848),s={props:{title:{type:String,default:""},subtitle:{type:String,default:""},ingress:{type:String,default:""},info:{type:String,default:""}},methods:{compileMarkdown:t=>i.marked.parseInline(t,[])}},r=a(24),o=Object(r.a)(s,(function(){var t=this,e=t.$createElement,a=t._self._c||e;return a("div",[a("h2",{directives:[{name:"show",rawName:"v-show",value:t.title,expression:"title"}],staticClass:"text-h4 text-md-h3 text-center font-weight-black mt-4 mb-8",domProps:{textContent:t._s(t.title)}}),t._v(" "),a("h3",{directives:[{name:"show",rawName:"v-show",value:t.subtitle,expression:"subtitle"}],staticClass:"text-h6 text-md-h5 font-weight-medium font-italic text-center mb-8",domProps:{textContent:t._s(t.subtitle)}}),t._v(" "),a("h4",{directives:[{name:"show",rawName:"v-show",value:t.ingress,expression:"ingress"}],staticClass:"text-h6 font-weight-medium font-italic text-center mb-4",domProps:{innerHTML:t._s(t.compileMarkdown(t.ingress))}}),t._v(" "),a("p",{directives:[{name:"show",rawName:"v-show",value:t.info,expression:"info"}],staticClass:"text-subtitle-1 font-weight-light text-center mb-4",domProps:{innerHTML:t._s(t.compileMarkdown(t.info))}})])}),[],!1,null,null,null);e.default=o.exports},938:function(t,e,a){"use strict";a.r(e);var i=a(53),s={data:()=>({mdiWeb:i.A,title:"The FAIRtracks ecosystem",subtitle:"– Hoards of genomic track data at your fingertips",cards:[{title:"Bridging the data gaps",subtitle:"Community building",text:"We aim to connect: <p><ul><li>data producers</li><li>biocurators</li><li>tool developers</li><li>the FAIR community</li><li>researchers/data analysts</li><li>...and other interested parties</li></ul></p>Together we can mobilize the power of genomic track data and metadata at the fingertips of the researchers / bioinformaticians that are the target end users.",callout:"01"},{title:"Quality metadata and services",subtitle:"Technology",text:'Working in concert with the <a href="https://github.com/fairtracks/fairtracks_standard#readme">FAIRtracks draft standard</a> for metadata of genomic tracks, we have built an <nuxt-link to="/services"> ecosystem of services</nuxt-link> to interface with track metadata: <p><ul><li><a href="https://github.com/fairtracks/fairtracks_augment#readme">Metadata augmentation</li><li><a href="https://github.com/fairtracks/fairtracks_validator#readme">Metadata validation</li><li><a href="https://trackfind.elixir.no">Precision search</li><li><a href="/services">...and more</li></ul></p>',callout:"02"},{title:"Endorsed by ELIXIR",subtitle:"Organizational backing",text:'<p>The FAIRtracks ecosystem has been developed and is being provided as part of the national Service Delivery Plans by <a href="https://elixir.no/">ELIXIR Norway</a> and <a href="https://elixir-europe.org/about-us/who-we-are/nodes/spain">ELIXIR Spain</a>,  and is supported by the <a href="https://trackhubregistry.org/">Track Hub Registry group</a> at <a href="https://www.ebi.ac.uk/">EMBL-EBI</a>.</p><p>From 2021, FAIRtracks has been endorsed by ELIXIR Europe as a <a href="https://elixir-europe.org/news/four-new-elixir-recommended-interoperability-resources">Recommended Interoperability Resource (RIR)</a>.</p>',callout:"03"}]})},r=a(24),o=a(33),n=a.n(o),l=a(199),c=a(829),d=a(194),h=a(192),p=a(830),u=Object(r.a)(s,(function(){var t=this,e=t.$createElement,a=t._self._c||e;return a("section",{staticClass:"py-16",attrs:{id:"intro"}},[a("v-responsive",{staticClass:"max-auto mx-auto text-center",attrs:{"max-width":"600"}},[a("v-avatar",{staticClass:"mb-8",attrs:{color:"primary",size:"70"}},[a("v-icon",{attrs:{"x-large":"",dark:""}},[t._v(t._s(t.mdiWeb))])],1),t._v(" "),a("UiMainTitle",{attrs:{title:t.title,"sub-title":t.subtitle}}),t._v(" "),a("h3",{staticClass:"text-h5 text-md-h4 text-italic text-center font-weight-bold mb-7"},[t._v("\n      – Hoards of genomic track data at your fingertips\n    ")]),t._v(" "),a("p",{staticClass:"title font-weight-light"},[t._v('\n      In the spirit of Open Science, the FAIRtracks ecosystem provides\n      technical solutions for the abundance of genome browser track files\n      ("genomic tracks") to become "Findable, Accessible, Interoperable, and\n      Reusable"\n      '),a("a",{attrs:{href:"https://www.go-fair.org/fair-principles/"}},[t._v(" (FAIR) ")]),t._v("\n      in new research contexts.\n    ")])],1),t._v(" "),a("v-row",{staticClass:"pt-12"},t._l(t.cards,(function(e){return a("v-col",{key:e.title,staticClass:"pa-6",attrs:{cols:"12",md:"4"}},[a("v-row",{attrs:{"no-gutters":""}},[a("v-col",{attrs:{cols:e.callout?9:12}},[a("div",{staticClass:"pr-2"},[a("div",{staticClass:"text--disabled",domProps:{textContent:t._s(e.subtitle)}}),t._v(" "),a("h4",{staticClass:"text-uppercase mt-1 mb-4",staticStyle:{"letter-spacing":"0.15em"},domProps:{textContent:t._s(e.title)}}),t._v(" "),a("p",{domProps:{innerHTML:t._s(e.text)}})])]),t._v(" "),e.callout?a("v-col",{attrs:{cols:"2"}},[a("span",{staticClass:"text-h3 grey--text font-weight-bold pr-8",staticStyle:{opacity:"0.1"}},[t._v(t._s(e.callout))])]):t._e()],1)],1)})),1)],1)}),[],!1,null,null,null);e.default=u.exports;n()(u,{UiMainTitle:a(847).default}),n()(u,{VAvatar:l.a,VCol:c.a,VIcon:d.a,VResponsive:h.a,VRow:p.a})}}]);