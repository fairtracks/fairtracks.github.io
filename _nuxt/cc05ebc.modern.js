(window.webpackJsonp=window.webpackJsonp||[]).push([[45],{976:function(t,e,s){"use strict";s.r(e);var i=s(977),n={props:{title:{type:String,default:""},subtitle:{type:String,default:""},ingress:{type:String,default:""},info:{type:String,default:""},scaleDownAtSm:{type:Boolean,default:!1}},methods:{compileMarkdown:t=>i.marked.parseInline(t,[])}},l=s(16),o=Object(l.a)(n,(function(){var t=this,e=t.$createElement,s=t._self._c||e;return s("div",[s("h2",{directives:[{name:"show",rawName:"v-show",value:t.title,expression:"title"}],staticClass:"text-h4 text-center font-weight-black mt-4 mb-8",class:t.scaleDownAtSm?"text-sm-h3":"text-md-h3",domProps:{textContent:t._s(t.title)}}),t._v(" "),s("h3",{directives:[{name:"show",rawName:"v-show",value:t.subtitle,expression:"subtitle"}],staticClass:"text-h6 font-weight-medium font-italic text-center mb-8",class:t.scaleDownAtSm?"text-sm-h5":"text-md-h5",domProps:{textContent:t._s(t.subtitle)}}),t._v(" "),t.ingress?s("h4",{staticClass:"text-h6 text-center mb-4",class:t.subtitle?"font-weight-light":"font-weight-medium font-italic",domProps:{innerHTML:t._s(t.compileMarkdown(t.ingress))}}):s("h4",{staticClass:"text-h6 text-center mb-4",class:t.subtitle?"font-weight-light":"font-weight-medium font-italic"},[t._t("ingress")],2),t._v(" "),t.info?s("p",{staticClass:"text-subtitle-1 font-weight-light text-center mb-4",domProps:{innerHTML:t._s(t.compileMarkdown(t.info))}}):s("p",{staticClass:"text-subtitle-1 font-weight-light text-center mb-4"},[t._t("info")],2)])}),[],!1,null,null,null);e.default=o.exports}}]);