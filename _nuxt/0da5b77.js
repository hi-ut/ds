(window.webpackJsonp=window.webpackJsonp||[]).push([[36],{515:function(t,e,r){"use strict";r.r(e);r(225);var n=r(21),o=r(35),c=r(40),l=r(37),f=r(26),v=r(12),h=r(106),d=r(518);function m(t){var e=function(){if("undefined"==typeof Reflect||!Reflect.construct)return!1;if(Reflect.construct.sham)return!1;if("function"==typeof Proxy)return!0;try{return Boolean.prototype.valueOf.call(Reflect.construct(Boolean,[],(function(){}))),!0}catch(t){return!1}}();return function(){var r,n=Object(f.a)(t);if(e){var o=Object(f.a)(this).constructor;r=Reflect.construct(n,arguments,o)}else r=n.apply(this,arguments);return Object(l.a)(this,r)}}var y=function(t,e,r,desc){var n,o=arguments.length,c=o<3?e:null===desc?desc=Object.getOwnPropertyDescriptor(e,r):desc;if("object"===("undefined"==typeof Reflect?"undefined":Object(v.a)(Reflect))&&"function"==typeof Reflect.decorate)c=Reflect.decorate(t,e,r,desc);else for(var i=t.length-1;i>=0;i--)(n=t[i])&&(c=(o<3?n(c):o>3?n(e,r,c):n(e,r))||c);return o>3&&c&&Object.defineProperty(e,r,c),c},_=function(t){Object(c.a)(r,t);var e=m(r);function r(){return Object(n.a)(this,r),e.apply(this,arguments)}return Object(o.a)(r,[{key:"title",get:function(){return this.item.label}},{key:"url",get:function(){return this.item.url}}]),r}(h.Vue);y([Object(h.Prop)()],_.prototype,"item",void 0);var k=_=y([Object(h.Component)({components:{ShareButtons:d.default}})],_),O=r(87),j=r(107),R=r.n(j),w=r(233),P=r(211),V=r(490),component=Object(O.a)(k,(function(){var t=this,e=t.$createElement,r=t._self._c||e;return r("span",[r("v-menu",{attrs:{top:"","offset-y":""},scopedSlots:t._u([{key:"activator",fn:function(e){var n=e.on;return[r("v-btn",t._g({attrs:{depressed:"",icon:""}},n),[r("v-icon",[t._v("mdi-share-variant")])],1)]}}])},[t._v(" "),r("ShareButtons",{attrs:{url:t.url,title:t.title}})],1)],1)}),[],!1,null,null,null);e.default=component.exports;R()(component,{VBtn:w.a,VIcon:P.a,VMenu:V.a})},518:function(t,e,r){"use strict";r.r(e);r(225);var n=r(21),o=r(35),c=r(40),l=r(37),f=r(26),v=r(12),h=r(106);function d(t){var e=function(){if("undefined"==typeof Reflect||!Reflect.construct)return!1;if(Reflect.construct.sham)return!1;if("function"==typeof Proxy)return!0;try{return Boolean.prototype.valueOf.call(Reflect.construct(Boolean,[],(function(){}))),!0}catch(t){return!1}}();return function(){var r,n=Object(f.a)(t);if(e){var o=Object(f.a)(this).constructor;r=Reflect.construct(n,arguments,o)}else r=n.apply(this,arguments);return Object(l.a)(this,r)}}var m=function(t,e,r,desc){var n,o=arguments.length,c=o<3?e:null===desc?desc=Object.getOwnPropertyDescriptor(e,r):desc;if("object"===("undefined"==typeof Reflect?"undefined":Object(v.a)(Reflect))&&"function"==typeof Reflect.decorate)c=Reflect.decorate(t,e,r,desc);else for(var i=t.length-1;i>=0;i--)(n=t[i])&&(c=(o<3?n(c):o>3?n(e,r,c):n(e,r))||c);return o>3&&c&&Object.defineProperty(e,r,c),c},y=function(t){Object(c.a)(r,t);var e=d(r);function r(){var t;return Object(n.a)(this,r),(t=e.apply(this,arguments)).baseUrl="https://hi-ut.github.io/ds",t}return Object(o.a)(r,[{key:"copyLink",value:function(){var t=this.url;document.addEventListener("copy",(function e(r){r.clipboardData.setData("text/plain",t),r.preventDefault(),document.removeEventListener("copy",e)})),document.execCommand("copy")}},{key:"twitterUrl",get:function(){return"https://twitter.com/intent/tweet?url="+this.url+"&text="+this.title}},{key:"facebookUrl",get:function(){return"https://www.facebook.com/sharer/sharer.php?u="+this.url}},{key:"pocketUrl",get:function(){return"http://getpocket.com/edit?url="+this.url}}]),r}(h.Vue);m([Object(h.Prop)({required:!0})],y.prototype,"url",void 0),m([Object(h.Prop)({required:!0})],y.prototype,"title",void 0);var _=y=m([h.Component],y),k=r(87),O=r(107),j=r.n(O),R=r(233),w=r(214),P=r(211),V=r(521),component=Object(k.a)(_,(function(){var t=this,e=t.$createElement,r=t._self._c||e;return r("v-card",{attrs:{flat:""}},[r("v-tooltip",{attrs:{bottom:""},scopedSlots:t._u([{key:"activator",fn:function(e){var n=e.on;return[r("v-btn",t._g({staticClass:"ma-2",attrs:{icon:""},on:{click:function(e){return t.copyLink()}}},n),[r("v-icon",[t._v("mdi-link")])],1)]}}])},[t._v(" "),r("span",[t._v(t._s("Copy this link."))])]),t._v(" "),r("v-tooltip",{attrs:{bottom:""},scopedSlots:t._u([{key:"activator",fn:function(e){var n=e.on;return[r("v-btn",t._g({staticClass:"ma-2",attrs:{icon:"",target:"_blank",href:t.twitterUrl}},n),[r("v-icon",[t._v("mdi-twitter")])],1)]}}])},[t._v(" "),r("span",[t._v(t._s("Twitter"))])]),t._v(" "),r("v-tooltip",{attrs:{bottom:""},scopedSlots:t._u([{key:"activator",fn:function(e){var n=e.on;return[r("v-btn",t._g({staticClass:"ma-2",attrs:{icon:"",target:"_blank",href:t.facebookUrl}},n),[r("v-icon",[t._v("mdi-facebook")])],1)]}}])},[t._v(" "),r("span",[t._v(t._s("Facebook"))])]),t._v(" "),r("v-tooltip",{attrs:{bottom:""},scopedSlots:t._u([{key:"activator",fn:function(e){var n=e.on;return[r("v-btn",t._g({staticClass:"ma-2",attrs:{icon:"",target:"_blank",href:t.pocketUrl}},n),[r("img",{staticStyle:{"font-size":"24px"},attrs:{src:t.baseUrl+"/img/icons/pocket.svg"}})])]}}])},[t._v(" "),r("span",[t._v(t._s("Pocket"))])])],1)}),[],!1,null,null,null);e.default=component.exports;j()(component,{VBtn:R.a,VCard:w.a,VIcon:P.a,VTooltip:V.a})},560:function(t,e,r){"use strict";r.r(e);r(225),r(64);var n=r(21),o=r(35),c=r(40),l=r(37),f=r(26),v=r(12),h=r(106),d=r(515);function m(t){var e=function(){if("undefined"==typeof Reflect||!Reflect.construct)return!1;if(Reflect.construct.sham)return!1;if("function"==typeof Proxy)return!0;try{return Boolean.prototype.valueOf.call(Reflect.construct(Boolean,[],(function(){}))),!0}catch(t){return!1}}();return function(){var r,n=Object(f.a)(t);if(e){var o=Object(f.a)(this).constructor;r=Reflect.construct(n,arguments,o)}else r=n.apply(this,arguments);return Object(l.a)(this,r)}}var y=function(t,e,r,desc){var n,o=arguments.length,c=o<3?e:null===desc?desc=Object.getOwnPropertyDescriptor(e,r):desc;if("object"===("undefined"==typeof Reflect?"undefined":Object(v.a)(Reflect))&&"function"==typeof Reflect.decorate)c=Reflect.decorate(t,e,r,desc);else for(var i=t.length-1;i>=0;i--)(n=t[i])&&(c=(o<3?n(c):o>3?n(e,r,c):n(e,r))||c);return o>3&&c&&Object.defineProperty(e,r,c),c},_=function(t){Object(c.a)(r,t);var e=m(r);function r(){var t;return Object(n.a)(this,r),(t=e.apply(this,arguments)).items=[],t.headers=[],t}return Object(o.a)(r,[{key:"results",get:function(){return this.$store.state.result.hits.hits}},{key:"watchTmp",value:function(){this.main()}},{key:"mounted",value:function(){var t=this.$store.state.facetLabels,e=[{key:"image",label:""},{key:"label",label:this.$t("title")}];for(var r in t)e.push({key:r,label:t[r]});e.push({key:"icons",label:""}),this.fields=e;for(var n=[],i=0;i<e.length;i++){var o=e[i];o.label.startsWith("_")||n.push({text:o.label,align:"start",value:o.key})}this.headers=n,this.main()}},{key:"main",value:function(){for(var t=this.fields,e=this.results,r=[],i=0;i<e.length;i++){for(var n=e[i],o={image:this.$utils.formatArrayValue(n._source._thumbnail),label:this.$utils.formatArrayValue(n._source._label),id:n._id,raw:n},c=0;c<t.length;c++){var label=t[c].key;n._source[label]&&(o[label]=this.$utils.truncate(this.$utils.formatArrayValue(n._source[label]),50))}r.push(o)}this.items=r}}]),r}(h.Vue);y([Object(h.Watch)("results",{deep:!0})],_.prototype,"watchTmp",null);var k=_=y([Object(h.Component)({components:{ResultOption:d.default}})],_),O=r(87),j=r(107),R=r.n(j),w=r(615),P=r(180),component=Object(O.a)(k,(function(){var t=this,e=t.$createElement,r=t._self._c||e;return r("div",[r("v-data-table",{attrs:{headers:t.headers,items:t.items,"hide-default-footer":""},scopedSlots:t._u([{key:"item.image",fn:function(e){var n=e.item;return[r("nuxt-link",{staticClass:"mb-4",attrs:{to:t.localePath({name:"item-id",params:{id:n.id}})}},[r("v-img",{staticClass:"grey lighten-2 my-2",staticStyle:{height:"90px",width:"90px"},attrs:{src:n.image,contain:""}})],1)]}},{key:"item.label",fn:function(e){var n=e.item;return[r("nuxt-link",{staticClass:"mb-4",attrs:{to:t.localePath({name:"item-id",params:{id:n.id}})}},[r("span",{domProps:{innerHTML:t._s(n.label)}})])]}},{key:"item.icons",fn:function(e){var n=e.item;return[r("ResultOption",{attrs:{item:{label:t.$utils.formatArrayValue(n.raw._source._label),url:encodeURIComponent(n.raw._source._url)}}})]}}])})],1)}),[],!1,null,null,null);e.default=component.exports;R()(component,{VDataTable:w.a,VImg:P.a})}}]);