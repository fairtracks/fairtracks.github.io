(window.webpackJsonp=window.webpackJsonp||[]).push([[34,49],{1099:function(t,e,a){"use strict";a.r(e);var s=a(1101),i={props:{title:{type:String,default:""},subtitle:{type:String,default:""},ingress:{type:String,default:""},info:{type:String,default:""},scaleDownAtSm:{type:Boolean,default:!1}},methods:{compileMarkdown:function(t){return s.marked.parseInline(t,[])}}},r=a(25),o=Object(r.a)(i,(function(){var t=this,e=t.$createElement,a=t._self._c||e;return a("div",[a("h2",{directives:[{name:"show",rawName:"v-show",value:t.title,expression:"title"}],staticClass:"text-h4 text-center font-weight-black mt-4 mb-8",class:t.scaleDownAtSm?"text-sm-h3":"text-md-h3",domProps:{textContent:t._s(t.title)}}),t._v(" "),a("h3",{directives:[{name:"show",rawName:"v-show",value:t.subtitle,expression:"subtitle"}],staticClass:"text-h6 font-weight-medium font-italic text-center mb-8",class:t.scaleDownAtSm?"text-sm-h5":"text-md-h5",domProps:{textContent:t._s(t.subtitle)}}),t._v(" "),a("h4",{directives:[{name:"show",rawName:"v-show",value:t.ingress,expression:"ingress"}],staticClass:"text-h6 text-center mb-4",class:t.subtitle?"font-weight-light":"font-weight-medium font-italic",domProps:{innerHTML:t._s(t.compileMarkdown(t.ingress))}}),t._v(" "),a("p",{directives:[{name:"show",rawName:"v-show",value:t.info,expression:"info"}],staticClass:"text-subtitle-1 font-weight-light text-center mb-4",domProps:{innerHTML:t._s(t.compileMarkdown(t.info))}})])}),[],!1,null,null,null);e.default=o.exports},1152:function(t,e,a){"use strict";a.r(e);var s=a(68),i={data:function(){return{mdiWeb:s.S,title:"The FAIRtracks ecosystem",subtitle:"– Hoards of genomic track data at your fingertips",ingress:'In the spirit of Open Science, the FAIRtracks ecosystem provides technical solutions for the abundance of genome browser track files ("genomic tracks") to become "Findable, Accessible, Interoperable, and Reusable ([FAIR](https://www.go-fair.org/fair-principles/)) in new research contexts.',cards:[{title:"Bridging the data gaps",subtitle:"Community building",text:"We aim to connect: <p><ul><li>data producers</li><li>biocurators</li><li>tool developers</li><li>the FAIR community</li><li>researchers/data analysts</li><li>...and other interested parties</li></ul></p>Together we can mobilize the power of genomic track data and metadata at the fingertips of the researchers / bioinformaticians that are the target end users.",callout:"01"},{title:"Quality metadata and services",subtitle:"Technology",text:'Working in concert with the <a href="https://github.com/fairtracks/fairtracks_standard#readme">FAIRtracks draft standard</a> for metadata of genomic tracks, we have built an <nuxt-link to="/services"> ecosystem of services</nuxt-link> to interface with track metadata: <p><ul><li><a href="https://github.com/fairtracks/fairtracks_augment#readme">Metadata augmentation</li><li><a href="https://github.com/fairtracks/fairtracks_validator#readme">Metadata validation</li><li><a href="https://trackfind.elixir.no">Precision search</li><li><a href="/services">...and more</li></ul></p>',callout:"02"},{title:"Endorsed by ELIXIR",subtitle:"Organizational backing",text:'<p>The FAIRtracks ecosystem has been developed and is being provided as pof the national Service Delivery Plans by <a href="https://elixir.no/">ELIXIR Norway</a> and<a href="https://elixir-europe.org/about-us/who-we-are/nodes/spain">ELIXIR Spain</a>, and is supported by the <a href="https://trackhubregistry.org/">Track Hub Registry group</a> at <a href="https://www.ebi.ac.uk/">EMBL-EBI</a>.</p><p>From 2021, FAIRtracks has been endorsed by ELIXIR Europe as a <a href="https://elixir-europe.org/news/four-new-elixir-recommended-interoperability-resources">Recommended Interoperability Resource (RIR)</a>.</p>',callout:"03"}],newsSlides:[{img:this.$getImageAssetObject("images","media","new-rirs-2021.jpeg"),heading:"FAIRtracks: Recommended by ELIXIR",subHeading:'The FAIRtracks ecosystem has been selected as one of four new "Recommended Interoperability Resources" in 2021 by ELIXIR Europe!',href:"https://elixir-europe.org/news/four-new-elixir-recommended-interoperability-resources",topToBottomImg:!0,leftToRightImg:!0},{img:this.$getImageAssetObject("images","media","f1000-blog-post-ad.png"),heading:"FAIRtracks featured in the F1000Research blog",subHeading:"December 2021: FAIRtracks has been featured in a blog post on the F100Researchjournal web site! The blog post lays out the vision of the FAIRtracks project and makes an appeal to the community for involvement.",href:"https://blog.f1000.com/2021/12/07/fairtracks/",topToBottomImg:!0,leftToRightImg:!1},{img:this.$getImageAssetObject("images","media","FAIRtracks-survey-ad-webpage.png"),heading:"Help us shape the first community workshop",subHeading:'October 2021: We plan to host an online workshop together with the ELIXIR Interoperability Platform soon. We want to get in touch with potential participants to receive ideas on its contents. Please fill out our "Survey of community interest"!',href:"https://fairtracks.net/survey",topToBottomImg:!1,leftToRightImg:!0},{img:this.$getImageAssetObject("materials","previews","f1000-manuscript-2021.png"),heading:"The FAIRtracks paper has been published!",subHeading:"April, 2021: The FAIRtracks paper has been published by F1000Research. The paper describes particular and general challenges when trying to FAIRify metadata of genomic tracks and discuss how the FAIRtracks ecosystem can help. ",href:"https://f1000research.com/articles/10-268",topToBottomImg:!0,leftToRightImg:!1}]}}},r=a(25),o=a(28),n=a.n(o),l=a(232),c=a(1077),h=a(227),d=a(235),p=a(225),m=a(1078),u=Object(r.a)(i,(function(){var t=this,e=t.$createElement,a=t._self._c||e;return a("section",{attrs:{id:"intro"}},[a("v-row",{attrs:{"no-gutters":"",align:"center"}},[a("v-col",{staticClass:"pt-8 pa-0",attrs:{cols:"12",lg:"6"}},[a("v-responsive",{staticClass:"mx-auto text-center",attrs:{"max-width":"600"}},[a("v-avatar",{staticClass:"mb-8",attrs:{color:"primary",size:"70"}},[a("v-icon",{attrs:{"x-large":"",dark:""}},[t._v(t._s(t.mdiWeb))])],1),t._v(" "),a("UiMainTitle",{attrs:{title:t.title,subtitle:t.subtitle,ingress:t.ingress,"scale-down-at-sm":""}})],1)],1),t._v(" "),a("v-col",{staticClass:"pt-8 pb-0",attrs:{cols:"12",lg:"6"}},[a("div",{staticClass:"thin-border",style:"border-color: "+(t.$vuetify.theme.dark?"var(--v-primary-lighten1)":"var(--secondary)")},[a("v-responsive",{staticClass:"ma-0 px-0",class:t.$vuetify.theme.dark?"primary lighten-1":"secondary",attrs:{height:"40",width:"100%"}},[a("v-overlay",{attrs:{absolute:"",opacity:"0","z-index":"3"}},[a("h5",{staticClass:"text-h5 font-weight-black text-center"},[t._v("News")])])],1),t._v(" "),a("SectionsCarouselLayout",{attrs:{"slides-data":t.newsSlides,"carousel-id":"news",height:"500px"}})],1)])],1),t._v(" "),a("v-row",{staticClass:"py-8",attrs:{justify:"space-around"}},t._l(t.cards,(function(e){return a("v-col",{key:e.title,staticClass:"pa-4",attrs:{cols:"12",lg:"4",md:"6"}},[a("v-responsive",{staticClass:"mx-auto",attrs:{"max-width":"500px"}},[a("v-row",{staticClass:"px-4 px-lg-8",attrs:{"no-gutters":"",justify:"space-between"}},[a("v-col",{attrs:{cols:e.callout?10:12}},[a("div",{staticClass:"pr-2"},[a("div",{staticClass:"text--disabled",domProps:{textContent:t._s(e.subtitle)}}),t._v(" "),a("h4",{staticClass:"text-uppercase mt-1 mb-4",staticStyle:{"letter-spacing":"0.15em"},domProps:{textContent:t._s(e.title)}}),t._v(" "),a("p",{domProps:{innerHTML:t._s(e.text)}})])]),t._v(" "),e.callout?a("v-col",{attrs:{cols:"2"}},[a("v-row",{attrs:{"no-gutters":"",justify:"end"}},[a("span",{staticClass:"text-h3 text-right font-weight-bold grey--text",style:"opacity: "+(t.$vuetify.theme.dark?"0.5":"0.2")},[t._v(t._s(e.callout)+"\n              ")])])],1):t._e()],1)],1)],1)})),1)],1)}),[],!1,null,null,null);e.default=u.exports;n()(u,{UiMainTitle:a(1099).default,SectionsCarouselLayout:a(1188).default}),n()(u,{VAvatar:l.a,VCol:c.a,VIcon:h.a,VOverlay:d.a,VResponsive:p.a,VRow:m.a})}}]);