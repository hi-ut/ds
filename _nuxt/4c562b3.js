(window.webpackJsonp=window.webpackJsonp||[]).push([[45],{592:function(t,e,n){"use strict";n.r(e);n(227);var r=n(21),o=n(40),c=n(37),l=n(26),h=n(12),d=n(320);function f(t){var e=function(){if("undefined"==typeof Reflect||!Reflect.construct)return!1;if(Reflect.construct.sham)return!1;if("function"==typeof Proxy)return!0;try{return Boolean.prototype.valueOf.call(Reflect.construct(Boolean,[],(function(){}))),!0}catch(t){return!1}}();return function(){var n,r=Object(l.a)(t);if(e){var o=Object(l.a)(this).constructor;n=Reflect.construct(r,arguments,o)}else n=r.apply(this,arguments);return Object(c.a)(this,n)}}var m=function(t,e,n,desc){var r,o=arguments.length,c=o<3?e:null===desc?desc=Object.getOwnPropertyDescriptor(e,n):desc;if("object"===("undefined"==typeof Reflect?"undefined":Object(h.a)(Reflect))&&"function"==typeof Reflect.decorate)c=Reflect.decorate(t,e,n,desc);else for(var i=t.length-1;i>=0;i--)(r=t[i])&&(c=(o<3?r(c):o>3?r(e,n,c):r(e,n))||c);return o>3&&c&&Object.defineProperty(e,n,c),c},y=function(t){Object(o.a)(n,t);var e=f(n);function n(){var t;return Object(r.a)(this,n),(t=e.apply(this,arguments)).baseUrl="https://hi-ut.github.io/ds",t}return n}(d.Vue);m([Object(d.Prop)({default:4})],y.prototype,"col",void 0),m([Object(d.Prop)({default:[]})],y.prototype,"list",void 0);var v=y=m([d.Component],y),w=n(87),_=n(106),P=n.n(_),j=n(215),k=n(122),R=n(527),O=n(530),x=n(180),C=n(528),I=n(510),E=n(523),component=Object(w.a)(v,(function(){var t=this,e=t.$createElement,n=t._self._c||e;return n("v-row",t._l(t.list,(function(e,r){return n("v-col",{key:r,attrs:{cols:"12",sm:12/t.col}},[n("v-card",{staticClass:"mb-4",attrs:{"no-body":"",flat:"",outlined:""}},[n("nuxt-link",{attrs:{to:t.localePath(e.path)}},[n("v-img",{staticClass:"grey lighten-2",staticStyle:{height:"150px"},attrs:{src:e.image,contain:"",width:"100%"}})],1),t._v(" "),n("div",{staticClass:"pa-4"},[n("nuxt-link",{attrs:{to:t.localePath(e.path)}},[n("b",[t._v(t._s(e.label))])]),t._v(" "),e.description?n("p",{staticClass:"mt-2 mb-0"},[t._v(t._s(e.description))]):t._e()],1),t._v(" "),e.url?[n("v-divider"),t._v(" "),n("v-card-actions",[n("v-spacer"),t._v(" "),n("v-tooltip",{attrs:{bottom:""},scopedSlots:t._u([{key:"activator",fn:function(r){var o=r.on;return[n("a",t._g({attrs:{target:"_blank",href:e.url}},o),[n("img",{attrs:{width:"30px",src:t.baseUrl+"/img/icons/rdf-logo.svg"}})])]}}],null,!0)},[t._v(" "),n("span",[t._v(t._s("RDF"))])])],1)]:t._e()],2)],1)})),1)}),[],!1,null,null,null);e.default=component.exports;P()(component,{VCard:j.a,VCardActions:k.a,VCol:R.a,VDivider:O.a,VImg:x.a,VRow:C.a,VSpacer:I.a,VTooltip:E.a})},639:function(t,e,n){"use strict";n.r(e);n(27),n(17),n(227),n(33),n(234),n(185),n(55),n(64),n(54);var r=n(14),o=n(21),c=n(35),l=n(40),h=n(37),d=n(26),f=n(12),m=n(105),y=n(82),v=n.n(y);function w(t){var e=function(){if("undefined"==typeof Reflect||!Reflect.construct)return!1;if(Reflect.construct.sham)return!1;if("function"==typeof Proxy)return!0;try{return Boolean.prototype.valueOf.call(Reflect.construct(Boolean,[],(function(){}))),!0}catch(t){return!1}}();return function(){var n,r=Object(d.a)(t);if(e){var o=Object(d.a)(this).constructor;n=Reflect.construct(r,arguments,o)}else n=r.apply(this,arguments);return Object(h.a)(this,n)}}var _=function(t,e,n,desc){var r,o=arguments.length,c=o<3?e:null===desc?desc=Object.getOwnPropertyDescriptor(e,n):desc;if("object"===("undefined"==typeof Reflect?"undefined":Object(f.a)(Reflect))&&"function"==typeof Reflect.decorate)c=Reflect.decorate(t,e,n,desc);else for(var i=t.length-1;i>=0;i--)(r=t[i])&&(c=(o<3?r(c):o>3?r(e,n,c):r(e,n))||c);return o>3&&c&&Object.defineProperty(e,n,c),c},P=function(t){Object(l.a)(d,t);var e,n,h=w(d);function d(){var t;return Object(o.a)(this,d),(t=h.apply(this,arguments)).endpoint="https://diyhistory.org/c.php/http://3.212.248.73:8890/sparql",t.settings={agential:{type:"type:Agent",query:"fc-agentials",label:"agential",slug:"entity/chname",mdi:"mdi-account",image:"https://raw.githubusercontent.com/hi-ut/static_images/main/account.png"},spatial:{type:"type:Place",query:"fc-places",label:"spatial",mdi:"mdi-map",slug:"entity/place",image:"https://raw.githubusercontent.com/hi-ut/static_images/main/map-marker.png"},about:{type:"type:Keyword",query:"fc-about",label:"about",mdi:"mdi-tag",slug:"term/keyword",image:"https://raw.githubusercontent.com/hi-ut/static_images/main/tag.png"},temporal:{type:"type:Time",query:"fc-temporal",label:"temporal",mdi:"mdi-calendar",slug:"entity/time",image:"https://raw.githubusercontent.com/hi-ut/static_images/main/calendar.png"}},t.loadingFlag=!0,t.results=[],t.label="",t.people=[],t.total=0,t.perPage=20,t.currentPage=1,t.id="",t.keywordStr="",t}return Object(c.a)(d,[{key:"watchTmp",value:function(){this.search()}},{key:"mounted",value:function(){this.search()}},{key:"paginationLength",get:function(){return Math.ceil(this.total/this.perPage)}},{key:"getTotal",value:(n=Object(r.a)(regeneratorRuntime.mark((function t(){var e,n,r,o,c,l,h;return regeneratorRuntime.wrap((function(t){for(;;)switch(t.prev=t.next){case 0:return e=this.id,n=this.settings[e],r=n.type,o=this.$route.query.keyword||"",c="\n      PREFIX schema: <http://schema.org/>\n      PREFIX type: <https://jpsearch.go.jp/term/type/>\n      PREFIX rdf: <http://www.w3.org/1999/02/22-rdf-syntax-ns#>\n      PREFIX rdfs: <http://www.w3.org/2000/01/rdf-schema#>\n      PREFIX jps: <https://jpsearch.go.jp/term/property#>\n      SELECT DISTINCT (count(DISTINCT ?s) as ?c) WHERE {\n        ?cho ?p ?s; jps:sourceInfo ?source . \n        ?s rdf:type ".concat(r," . \n        ").concat(""!==o?"?s rdfs:label ?label . filter regex(?label, '"+o+"', 'i')":"","\n      }\n    "),l=(l=this.endpoint+"?query=")+encodeURIComponent(c)+"&output=json",t.next=9,v.a.get(l);case 9:return h=t.sent,t.abrupt("return",Number(h.data.results.bindings[0].c.value));case 11:case"end":return t.stop()}}),t,this)}))),function(){return n.apply(this,arguments)})},{key:"search",value:(e=Object(r.a)(regeneratorRuntime.mark((function t(){var e,n,r,o,c,l,h,d,f=this;return regeneratorRuntime.wrap((function(t){for(;;)switch(t.prev=t.next){case 0:return e=this.$route.params.slug,this.id=e,t.next=4,this.getTotal();case 4:n=t.sent,this.total=n,this.loadingFlag=!0,r=this.settings[e],o=r.type,c=Number(this.$route.query.from)||0,this.currentPage=c/this.perPage+1,l=this.$route.query.keyword||"",h="\n      PREFIX schema: <http://schema.org/>\n      PREFIX type: <https://jpsearch.go.jp/term/type/>\n      PREFIX rdf: <http://www.w3.org/1999/02/22-rdf-syntax-ns#>\n      PREFIX rdfs: <http://www.w3.org/2000/01/rdf-schema#>\n      PREFIX jps: <https://jpsearch.go.jp/term/property#>\n      SELECT DISTINCT ?s ?label ?image count(distinct ?cho) as ?c WHERE {\n        ?cho ?p ?s; jps:sourceInfo ?source . \n        ?s rdfs:label ?label;  rdf:type ".concat(o," . \n        ").concat(""!==l?"filter regex(?label, '"+l+"', 'i')":"","\n            optional { ?s schema:image ?image } \n      }\n      ORDER BY desc(?c)\n      LIMIT ").concat(this.perPage,"\n      OFFSET ").concat(c,"\n    "),d=(d=this.endpoint+"?query=")+encodeURIComponent(h)+"&output=json",v.a.get(d).then((function(t){for(var n=t.data.results.bindings,r=[],i=0;i<n.length;i++){var o=n[i],c=e;"dev_MAIN[refinementList][".concat(c,"][0]"),o.label.value;var l={label:o.label.value,path:{name:"entity-entity-id",params:{entity:c,id:o.label.value}}};if(o.image)l.image=o.image.value;else{var image="https://raw.githubusercontent.com/hi-ut/static_images/main/account.png";"spatial"===e?image="https://raw.githubusercontent.com/hi-ut/static_images/main/map-marker.png":"about"===e?image="https://raw.githubusercontent.com/hi-ut/static_images/main/tag.png":"temporal"===e&&(image="https://raw.githubusercontent.com/hi-ut/static_images/main/calendar.png"),l.image=image}var h="https://hi-ut.github.io/ds/snorql/?describe="+o.s.value;l.url=h,r.push(l)}f.people=r,f.loadingFlag=!1}));case 16:case"end":return t.stop()}}),t,this)}))),function(){return e.apply(this,arguments)})},{key:"title",get:function(){return this.$t(this.settings[this.$route.params.slug].label)}},{key:"head",value:function(){return{title:this.$t("category")+" : "+this.title,meta:[{hid:"description",name:"description",content:this.$t("search_by_category")}]}}},{key:"setCurrentPage",value:function(t){var e=(t-1)*this.perPage,n=Object.assign({},this.$route.query);n.from=e,this.$router.push(this.localePath({name:"entity-slug",params:{slug:this.id},query:n}),(function(){}),(function(){}))}},{key:"trigger",value:function(t){13===t.keyCode&&this.updateQuery()}},{key:"updateQuery",value:function(){var t,e=Object.assign({},this.$route.query),n=this.keywordStr;n||(n=""),t=n.startsWith('"')&&n.endsWith('"')?[n]:n.split(" "),e.keyword=t,delete e.from,this.$router.push(this.localePath({name:"entity-slug",params:{slug:this.id},query:e}),(function(){}),(function(){}))}},{key:"bh",get:function(){return[{text:this.$t("top"),disabled:!1,to:this.localePath({name:"index"}),exact:!0},{text:this.$t("entity"),disabled:!1,to:this.localePath({name:"entity"}),exact:!0},{text:this.title}]}}]),d}(m.Vue);_([Object(m.Watch)("$route",{deep:!0})],P.prototype,"watchTmp",null);var j=P=_([Object(m.Component)({})],P),k=n(87),R=n(106),O=n.n(R),x=n(555),C=n(527),I=n(505),E=n(211),V=n(585),F=n(213),$=n(528),S=n(59),T=n(497),component=Object(k.a)(j,(function(){var t=this,e=t.$createElement,n=t._self._c||e;return n("div",[n("v-sheet",{attrs:{color:"grey lighten-2"}},[n("v-container",{staticClass:"py-4",attrs:{fluid:""}},[n("v-breadcrumbs",{staticClass:"py-0",attrs:{items:t.bh},scopedSlots:t._u([{key:"divider",fn:function(){return[n("v-icon",[t._v("mdi-chevron-right")])]},proxy:!0}])})],1)],1),t._v(" "),n("v-container",[n("h2",{staticClass:"my-5"},[t._v("\n      "+t._s(t.title)+" "),n("small",[t._v("（"+t._s(t.total.toLocaleString())+"）")])]),t._v(" "),t.loadingFlag?[n("div",{staticClass:"text-center my-10"},[n("v-progress-circular",{attrs:{indeterminate:"",color:"primary"}})],1)]:[n("v-row",{staticClass:"mt-5",attrs:{align:"center"}},[n("v-col",{attrs:{cols:"12"}},[n("v-text-field",{staticClass:"px-4",attrs:{"single-line":"","background-color":"grey lighten-3",filled:"",rounded:"",dense:"","hide-details":"",label:t.$t("add_a_search_term"),"append-icon":"mdi-magnify",clearable:"","clear-icon":"mdi-close-circle"},on:{"click:append":function(e){return t.updateQuery()},keydown:function(e){return!e.type.indexOf("key")&&t._k(e.keyCode,"enter",13,e.key,"Enter")?null:t.trigger(e)}},model:{value:t.keywordStr,callback:function(e){t.keywordStr=e},expression:"keywordStr"}})],1)],1),t._v(" "),n("div",{staticClass:"text-center my-10"},[n("v-pagination",{attrs:{length:t.paginationLength,"total-visible":7},on:{input:t.setCurrentPage},model:{value:t.currentPage,callback:function(e){t.currentPage=e},expression:"currentPage"}})],1),t._v(" "),n("grid",{attrs:{col:4,list:t.people}}),t._v("\n\n      "+t._s(t.currentPage)+"\n\n      aaa\n\n      "+t._s(t.paginationLength)+"\n\n      "),n("div",{staticClass:"text-center my-10"},[n("v-pagination",{attrs:{length:t.paginationLength,"total-visible":7},on:{input:t.setCurrentPage},model:{value:t.currentPage,callback:function(e){t.currentPage=e},expression:"currentPage"}})],1)]],2)],1)}),[],!1,null,null,null);e.default=component.exports;O()(component,{Grid:n(592).default}),O()(component,{VBreadcrumbs:x.a,VCol:C.a,VContainer:I.a,VIcon:E.a,VPagination:V.a,VProgressCircular:F.a,VRow:$.a,VSheet:S.a,VTextField:T.a})}}]);