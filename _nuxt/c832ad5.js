(window.webpackJsonp=window.webpackJsonp||[]).push([[46],{591:function(t,e,n){var content=n(592);"string"==typeof content&&(content=[[t.i,content,""]]),content.locals&&(t.exports=content.locals);(0,n(16).default)("0cd63bd9",content,!0,{sourceMap:!1})},592:function(t,e,n){var r=n(15)(!1);r.push([t.i,".v-parallax{position:relative;overflow:hidden;z-index:0}.v-parallax__image-container{position:absolute;top:0;left:0;right:0;bottom:0;z-index:1;contain:strict}.v-parallax__image{position:absolute;bottom:0;left:50%;min-width:100%;min-height:100%;display:none;transform:translate(-50%);will-change:transform;transition:opacity .3s cubic-bezier(.25,.8,.5,1);z-index:1}.v-parallax__content{color:#fff;height:100%;z-index:2;position:relative;display:flex;flex-direction:column;justify-content:center;padding:0 1rem}",""]),t.exports=r},624:function(t,e,n){"use strict";n.r(e);var r={data:function(){return{baseUrl:"https://hi-ut.github.io/ds",title:this.$t("データ駆動型検索プロトタイプ"),siteDesc:"東京大学史料編纂所・データ駆動型検索システムのプロトタイプです。"}},head:function(){return{titleTemplate:null,title:this.title}}},l=n(87),o=n(107),c=n.n(o),h=n(235),d=n(214),f=n(122),v=n(502),m=(n(231),n(268)),w=Object(m.a)("layout"),x=(n(17),n(591),n(3).default.extend({name:"translatable",props:{height:Number},data:function(){return{elOffsetTop:0,parallax:0,parallaxDist:0,percentScrolled:0,scrollTop:0,windowHeight:0,windowBottom:0}},computed:{imgHeight:function(){return this.objHeight()}},beforeDestroy:function(){window.removeEventListener("scroll",this.translate,!1),window.removeEventListener("resize",this.translate,!1)},methods:{calcDimensions:function(){var t=this.$el.getBoundingClientRect();this.scrollTop=window.pageYOffset,this.parallaxDist=this.imgHeight-this.height,this.elOffsetTop=t.top+this.scrollTop,this.windowHeight=window.innerHeight,this.windowBottom=this.scrollTop+this.windowHeight},listeners:function(){window.addEventListener("scroll",this.translate,!1),window.addEventListener("resize",this.translate,!1)},objHeight:function(){throw new Error("Not implemented !")},translate:function(){this.calcDimensions(),this.percentScrolled=(this.windowBottom-this.elOffsetTop)/(parseInt(this.height)+this.windowHeight),this.parallax=Math.round(this.parallaxDist*this.percentScrolled)}}})),_=n(7),y=Object(_.a)(x).extend().extend({name:"v-parallax",props:{alt:{type:String,default:""},height:{type:[String,Number],default:500},src:String,srcset:String},data:function(){return{isBooted:!1}},computed:{styles:function(){return{display:"block",opacity:this.isBooted?1:0,transform:"translate(-50%, ".concat(this.parallax,"px)")}}},mounted:function(){this.init()},methods:{init:function(){var t=this,img=this.$refs.img;img&&(img.complete?(this.translate(),this.listeners()):img.addEventListener("load",(function(){t.translate(),t.listeners()}),!1),this.isBooted=!0)},objHeight:function(){return this.$refs.img.naturalHeight}},render:function(t){var e=t("div",{staticClass:"v-parallax__image-container"},[t("img",{staticClass:"v-parallax__image",style:this.styles,attrs:{src:this.src,srcset:this.srcset,alt:this.alt},ref:"img"})]),content=t("div",{staticClass:"v-parallax__content"},this.$slots.default);return t("div",{staticClass:"v-parallax",style:{height:"".concat(this.height,"px")},on:this.$listeners},[e,content])}}),component=Object(l.a)(r,(function(){var t=this,e=t.$createElement,n=t._self._c||e;return n("div",[n("section",{staticClass:"mb-5"},[n("v-parallax",{attrs:{src:t.baseUrl+"/img/ogp/home.jpg",height:"300"}},[n("v-layout",{staticClass:"white--text",attrs:{column:"","align-center":"","justify-center":""}},[n("h1",{staticClass:"white--text mb-2 display-1 text-center"},[n("b",[t._v(t._s(t.title))])]),t._v(" "),n("v-btn",{staticClass:"mt-5",attrs:{large:"",to:t.localePath({name:"search"}),color:"primary"}},[t._v(t._s(t.$t("try_out")))])],1)],1)],1),t._v(" "),n("v-container",[n("v-card",{staticClass:"my-5",attrs:{flat:""}},[n("v-card-title",[n("h2",[t._v(t._s(t.$t("about_")))])]),t._v(" "),n("v-card-text",[n("div",{staticClass:"text--primary"},[n("p",[t._v("\n            "+t._s(t.siteDesc)+"\n          ")])])])],1),t._v(" "),n("v-card",{staticClass:"my-5",attrs:{flat:""}},[n("v-card-title",[n("h2",[t._v(t._s(t.$t("updates")))])]),t._v(" "),n("v-card-text",[n("ul",{staticClass:"text--primary"},[n("li",[t._v("2021年XX月XX日: プロトタイプシステムを公開しました。")])])])],1),t._v(" "),n("br")],1)],1)}),[],!1,null,null,null);e.default=component.exports;c()(component,{VBtn:h.a,VCard:d.a,VCardText:f.b,VCardTitle:f.c,VContainer:v.a,VLayout:w,VParallax:y})}}]);