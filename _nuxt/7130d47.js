(window.webpackJsonp=window.webpackJsonp||[]).push([[7],{517:function(t,e,r){"use strict";r.r(e);r(227);var n=r(21),o=r(35),c=r(40),l=r(37),d=r(26),h=r(12),v=r(105),f=r(521);function m(t){var e=function(){if("undefined"==typeof Reflect||!Reflect.construct)return!1;if(Reflect.construct.sham)return!1;if("function"==typeof Proxy)return!0;try{return Boolean.prototype.valueOf.call(Reflect.construct(Boolean,[],(function(){}))),!0}catch(t){return!1}}();return function(){var r,n=Object(d.a)(t);if(e){var o=Object(d.a)(this).constructor;r=Reflect.construct(n,arguments,o)}else r=n.apply(this,arguments);return Object(l.a)(this,r)}}var y=function(t,e,r,desc){var n,o=arguments.length,c=o<3?e:null===desc?desc=Object.getOwnPropertyDescriptor(e,r):desc;if("object"===("undefined"==typeof Reflect?"undefined":Object(h.a)(Reflect))&&"function"==typeof Reflect.decorate)c=Reflect.decorate(t,e,r,desc);else for(var i=t.length-1;i>=0;i--)(n=t[i])&&(c=(o<3?n(c):o>3?n(e,r,c):n(e,r))||c);return o>3&&c&&Object.defineProperty(e,r,c),c},_=function(t){Object(c.a)(r,t);var e=m(r);function r(){return Object(n.a)(this,r),e.apply(this,arguments)}return Object(o.a)(r,[{key:"title",get:function(){return this.item.label}},{key:"url",get:function(){return this.item.url}}]),r}(v.Vue);y([Object(v.Prop)()],_.prototype,"item",void 0);var k=_=y([Object(v.Component)({components:{ShareButtons:f.default}})],_),w=r(87),j=r(106),O=r.n(j),R=r(237),x=r(211),C=r(494),component=Object(w.a)(k,(function(){var t=this,e=t.$createElement,r=t._self._c||e;return r("span",[r("v-menu",{attrs:{top:"","offset-y":""},scopedSlots:t._u([{key:"activator",fn:function(e){var n=e.on;return[r("v-btn",t._g({attrs:{depressed:"",icon:""}},n),[r("v-icon",[t._v("mdi-share-variant")])],1)]}}])},[t._v(" "),r("ShareButtons",{attrs:{url:t.url,title:t.title}})],1)],1)}),[],!1,null,null,null);e.default=component.exports;O()(component,{VBtn:R.a,VIcon:x.a,VMenu:C.a})},521:function(t,e,r){"use strict";r.r(e);r(227);var n=r(21),o=r(35),c=r(40),l=r(37),d=r(26),h=r(12),v=r(105);function f(t){var e=function(){if("undefined"==typeof Reflect||!Reflect.construct)return!1;if(Reflect.construct.sham)return!1;if("function"==typeof Proxy)return!0;try{return Boolean.prototype.valueOf.call(Reflect.construct(Boolean,[],(function(){}))),!0}catch(t){return!1}}();return function(){var r,n=Object(d.a)(t);if(e){var o=Object(d.a)(this).constructor;r=Reflect.construct(n,arguments,o)}else r=n.apply(this,arguments);return Object(l.a)(this,r)}}var m=function(t,e,r,desc){var n,o=arguments.length,c=o<3?e:null===desc?desc=Object.getOwnPropertyDescriptor(e,r):desc;if("object"===("undefined"==typeof Reflect?"undefined":Object(h.a)(Reflect))&&"function"==typeof Reflect.decorate)c=Reflect.decorate(t,e,r,desc);else for(var i=t.length-1;i>=0;i--)(n=t[i])&&(c=(o<3?n(c):o>3?n(e,r,c):n(e,r))||c);return o>3&&c&&Object.defineProperty(e,r,c),c},y=function(t){Object(c.a)(r,t);var e=f(r);function r(){var t;return Object(n.a)(this,r),(t=e.apply(this,arguments)).baseUrl="https://hi-ut.github.io/ds",t}return Object(o.a)(r,[{key:"copyLink",value:function(){var t=this.url;document.addEventListener("copy",(function e(r){r.clipboardData.setData("text/plain",t),r.preventDefault(),document.removeEventListener("copy",e)})),document.execCommand("copy")}},{key:"twitterUrl",get:function(){return"https://twitter.com/intent/tweet?url="+this.url+"&text="+this.title}},{key:"facebookUrl",get:function(){return"https://www.facebook.com/sharer/sharer.php?u="+this.url}},{key:"pocketUrl",get:function(){return"http://getpocket.com/edit?url="+this.url}}]),r}(v.Vue);m([Object(v.Prop)({required:!0})],y.prototype,"url",void 0),m([Object(v.Prop)({required:!0})],y.prototype,"title",void 0);var _=y=m([v.Component],y),k=r(87),w=r(106),j=r.n(w),O=r(237),R=r(215),x=r(211),C=r(523),component=Object(k.a)(_,(function(){var t=this,e=t.$createElement,r=t._self._c||e;return r("v-card",{attrs:{flat:""}},[r("v-tooltip",{attrs:{bottom:""},scopedSlots:t._u([{key:"activator",fn:function(e){var n=e.on;return[r("v-btn",t._g({staticClass:"ma-2",attrs:{icon:""},on:{click:function(e){return t.copyLink()}}},n),[r("v-icon",[t._v("mdi-link")])],1)]}}])},[t._v(" "),r("span",[t._v(t._s("Copy this link."))])]),t._v(" "),r("v-tooltip",{attrs:{bottom:""},scopedSlots:t._u([{key:"activator",fn:function(e){var n=e.on;return[r("v-btn",t._g({staticClass:"ma-2",attrs:{icon:"",target:"_blank",href:t.twitterUrl}},n),[r("v-icon",[t._v("mdi-twitter")])],1)]}}])},[t._v(" "),r("span",[t._v(t._s("Twitter"))])]),t._v(" "),r("v-tooltip",{attrs:{bottom:""},scopedSlots:t._u([{key:"activator",fn:function(e){var n=e.on;return[r("v-btn",t._g({staticClass:"ma-2",attrs:{icon:"",target:"_blank",href:t.facebookUrl}},n),[r("v-icon",[t._v("mdi-facebook")])],1)]}}])},[t._v(" "),r("span",[t._v(t._s("Facebook"))])]),t._v(" "),r("v-tooltip",{attrs:{bottom:""},scopedSlots:t._u([{key:"activator",fn:function(e){var n=e.on;return[r("v-btn",t._g({staticClass:"ma-2",attrs:{icon:"",target:"_blank",href:t.pocketUrl}},n),[r("img",{staticStyle:{"font-size":"24px"},attrs:{src:t.baseUrl+"/img/icons/pocket.svg"}})])]}}])},[t._v(" "),r("span",[t._v(t._s("Pocket"))])])],1)}),[],!1,null,null,null);e.default=component.exports;j()(component,{VBtn:O.a,VCard:R.a,VIcon:x.a,VTooltip:C.a})},586:function(t,e,r){"use strict";r.r(e);r(230),r(231),r(38),r(72),r(52),r(17),r(227),r(69),r(33),r(44),r(63),r(185),r(55),r(54);var n=r(14),o=r(21),c=r(35),l=r(40),d=r(37),h=r(26),v=r(12),f=r(105),m=r(82),y=r.n(m),_=r(517);function k(t){var e=function(){if("undefined"==typeof Reflect||!Reflect.construct)return!1;if(Reflect.construct.sham)return!1;if("function"==typeof Proxy)return!0;try{return Boolean.prototype.valueOf.call(Reflect.construct(Boolean,[],(function(){}))),!0}catch(t){return!1}}();return function(){var r,n=Object(h.a)(t);if(e){var o=Object(h.a)(this).constructor;r=Reflect.construct(n,arguments,o)}else r=n.apply(this,arguments);return Object(d.a)(this,r)}}var w=function(t,e,r,desc){var n,o=arguments.length,c=o<3?e:null===desc?desc=Object.getOwnPropertyDescriptor(e,r):desc;if("object"===("undefined"==typeof Reflect?"undefined":Object(v.a)(Reflect))&&"function"==typeof Reflect.decorate)c=Reflect.decorate(t,e,r,desc);else for(var i=t.length-1;i>=0;i--)(n=t[i])&&(c=(o<3?n(c):o>3?n(e,r,c):n(e,r))||c);return o>3&&c&&Object.defineProperty(e,r,c),c},j=r(623).Network;function O(t){return{agential:{type:"type:Agent",query:"fc-agentials",label:"agential",slug:"entity/chname",mdi:"mdi-account",image:"https://raw.githubusercontent.com/hi-ut/static_images/main/account.png"},spatial:{type:"type:Place",query:"fc-places",label:"spatial",mdi:"mdi-map",slug:"entity/place",image:"https://raw.githubusercontent.com/hi-ut/static_images/main/map-marker.png"},about:{type:"type:Keyword",query:"fc-about",label:"about",mdi:"mdi-tag",slug:"term/keyword",image:"https://raw.githubusercontent.com/hi-ut/static_images/main/tag.png"},temporal:{type:"type:Time",query:"fc-temporal",label:"temporal",mdi:"mdi-calendar",slug:"entity/time",image:"https://raw.githubusercontent.com/hi-ut/static_images/main/calendar.png"}}[t].image}var R=function(t){Object(l.a)(d,t);var e,r=k(d);function d(){var t;return Object(o.a)(this,d),(t=r.apply(this,arguments)).dialog=!1,t.settings={"https://w3id.org/hi/api/term/property#agential":"agential","http://schema.org/spatial":"spatial","http://schema.org/temporal":"temporal","http://schema.org/about":"about"},t.loading=!1,t.nodes=[],t.nodesMap={},t.exEdges=[],t.edges=[],t.options={nodes:{color:{background:"lightgray",highlight:{background:"lightgray",border:"#FF6E00"}},borderWidthSelected:8,borderWidth:4,shapeProperties:{useBorderWithImage:!0}},edges:{color:"lightgray"},physics:{enabled:!0},layout:{randomSeed:2}},t.otherId="",t}return Object(c.a)(d,[{key:"watchU",value:function(){this.init()}},{key:"created",value:function(){this.init()}},{key:"init",value:function(){var u=this.u;this.search(u)}},{key:"targetNode",get:function(){return this.nodesMap[this.u]}},{key:"otherNode",get:function(){return this.nodesMap[this.otherId]}},{key:"search",value:(e=Object(n.a)(regeneratorRuntime.mark((function t(u){var e,r,n,o,c,l,d,i,h,v,f,s,m,_,label,k,p,w,j,R,x,C,V,P,N,I,S,E,M,B;return regeneratorRuntime.wrap((function(t){for(;;)switch(t.prev=t.next){case 0:return this.loading=!0,e="\n        PREFIX schema: <http://schema.org/>\n        PREFIX hi: <https://w3id.org/hi/api/term/property#>\n        PREFIX jps: <https://jpsearch.go.jp/term/property#>\n        PREFIX rdfs: <http://www.w3.org/2000/01/rdf-schema#>\n        SELECT DISTINCT ?p ?s  ?image ?label ?description ?keyword ?label_k ?description_k count(DISTINCT ?cho) as ?count ?image_k WHERE { \n          BIND(<".concat(u,"> as ?s)\n          ?cho ?p2 ?s . \n          ?s rdfs:label ?label . \n          optional { ?s schema:image ?image . }\n          optional { ?s schema:description ?description . }\n          ?cho ?p ?keyword . \n          filter (?p != rdf:type && ?p != jps:agential \n          && ?p != schema:license && ?p != jps:relationType && ?p != jps:spatial)\n          filter(?s != ?keyword)\n          ?keyword rdfs:label ?label_k . \n          optional { ?keyword schema:image ?image_k . }\n          optional { ?keyword schema:description ?description_k . }\n        } order by desc(?count) limit 20\n      "),t.next=4,y.a.get("https://diyhistory.org/c.php/http://3.212.248.73:8890/sparql?query="+encodeURIComponent(e)+"&output=json");case 4:for(r=t.sent,n=r.data.results.bindings,o=this.nodes,c=this.edges,l=this.nodesMap,d=this.exEdges,i=0;i<o.length;i++)h=o[i],l[h.uri]=h;v=0;case 12:if(!(v<n.length)){t.next=40;break}if(f=n[v],s=f.s.value,l[s]||(m=this.entity,(_={label:f.label.value,id:s,uri:s,p:"agential"===m?"https://w3id.org/hi/api/term/property#agential":"http://schema.org/"+m,entity:m,color:"lightgreen",url:"https://hi-ut.github.io/ds"+this.localePath({name:"entity-slug-id",params:{slug:m,id:f.label.value}})}).shape="image",_.image=f.imag?f.image.value:O(_.entity),_.borderWidth=4,_.color={border:this.u===s?"white":"lightgreen"},f.description&&(_.description=f.description.value),l[s]=_),label=f.label.value,label=f.name?f.name.value:label,"不明"!==(k=f.label_k.value)){t.next=21;break}return t.abrupt("continue",37);case 21:for(p=f.p.value,w=["creator","publisher","contributor","provider"],j=0;j<w.length;j++)p=p.replace("http://schema.org/"+w[j],"http://schema.org/agential");R=this.settings[p],x=f.keyword.value,l[x]||((C={label:k,id:x,uri:x,p:p,color:"lightgreen",entity:R,url:"https://hi-ut.github.io/ds"+this.localePath({name:"entity-slug-id",params:{slug:R,id:k}})}).shape="image",C.image=f.image_k?f.image_k.value:O(C.entity),C.borderWidth=4,C.color={border:"lightgreen"},f.description_k&&(C.description=f.description_k.value),l[x]=C),V=f.p.value.split("/"),(P=V[V.length-1]).split("#").length>1&&(P=P.split("#")[1]),P=this.$t(P),N={from:l[s].id,to:l[x].id,value:f.count.value,title:Number(f.count.value).toLocaleString(),color:"lightgrey"},(I=[N.to,N.from]).sort(),(S=I.join(", ")).includes(this.u)&&(N.color="orange"),d.includes(S)||(c.push(N),d.push(S));case 37:v++,t.next=12;break;case 40:for(M in E=[],l)B=l[M],E.push(B),B.index=Object.keys(B).length;this.nodes=E,this.edges=c,this.loading=!1,this.exEdges=d;case 46:case"end":return t.stop()}}),t,this)}))),function(t){return e.apply(this,arguments)})},{key:"doubleClick",value:function(t){var e=this.onNodeSelected(t);e&&this.search(e)}},{key:"onNodeSelected",value:function(t){var e=t.nodes,r=this.nodesMap;if(e.length>0){var n=r[e[0]].id;return this.select(n),n}return""}},{key:"focus",value:function(t){this.$refs.network.focus(t)}},{key:"select",value:function(t){var e=arguments.length>1&&void 0!==arguments[1]&&arguments[1],r=this.nodesMap;if(r[t]){this.u!==t&&(this.otherId=t);var n=this.$refs.network;n.selectNodes([t]),e&&this.search(t)}else console.log({uri:t})}},{key:"stabilized",value:function(){this.options.physics.enabled=!1}}]),d}(f.Vue);w([Object(f.Prop)()],R.prototype,"u",void 0),w([Object(f.Prop)()],R.prototype,"entity",void 0),w([Object(f.Watch)("u")],R.prototype,"watchU",null);var x=R=w([Object(f.Component)({components:{network:j,ResultOption:_.default}})],R),C=r(87),V=r(106),P=r.n(V),N=r(237),I=r(215),S=r(122),E=r(525),M=r(505),B=r(507),L=r(528),T=r(211),$=r(180),D=r(216),U=r(136),F=r(218),W=r(100),X=r(212),A=r(526),z=r(59),H=r(510),component=Object(C.a)(x,(function(){var t=this,e=t.$createElement,r=t._self._c||e;return t.nodes.length>0?r("v-container",[r("h2",{staticClass:"my-5 text-center"},[t._v(t._s(t.$t("network")))]),t._v(" "),r("p",{staticClass:"text-center"},[t._v("\n    "+t._s(t.$t("ノードをダブルクリックすることで、当該事物のページに遷移します。"))+"\n  ")]),t._v(" "),r("v-row",{attrs:{dense:""}},[r("v-col",{attrs:{cols:"12",sm:3}},[r("v-card",{staticClass:"mb-5",attrs:{flat:"",outlined:""}},[t.nodesMap[t.u]&&t.nodesMap[t.u].image?r("v-img",{staticClass:"grey lighten-2",staticStyle:{height:"150px"},attrs:{src:t.nodesMap[t.u].image,contain:"",width:"100%"}}):t._e(),t._v(" "),r("div",{staticClass:"pa-4",style:"max-height: 200px; overflow-y: auto;"},[r("nuxt-link",{attrs:{to:t.localePath({name:"entity-slug-id",params:{slug:t.nodesMap[t.u].entity,id:t.nodesMap[t.u].label}})}},[r("h4",{domProps:{innerHTML:t._s(t.nodesMap[t.u].label)}})]),t._v(" "),t.nodesMap[t.u]&&t.nodesMap[t.u].description?[r("div",{staticClass:"mt-2"},[t._v("\n              "+t._s(t.nodesMap[t.u].description)+"\n            ")])]:t._e()],2),t._v(" "),[r("v-divider"),t._v(" "),r("v-card-actions",[t._e(),t._v(" "),r("v-btn",{attrs:{color:"primary"},on:{click:function(e){return t.focus(t.u)}}},[t._v(t._s(t.$t("フォーカス")))]),t._v(" "),r("v-spacer"),t._v(" "),r("ResultOption",{attrs:{item:{label:t.targetNode.label,url:t.targetNode.url}}})],1)]],2),t._v(" "),t.otherId?r("v-card",{staticClass:"mb-5",attrs:{flat:"",outlined:""}},[r("v-img",{staticClass:"grey lighten-2",staticStyle:{height:"150px"},attrs:{src:t.otherNode&&t.otherNode.image?t.otherNode.image:"https://raw.githubusercontent.com/hi-ut/static_images/main/no_image.svg",contain:"",width:"100%"}}),t._v(" "),r("div",{staticClass:"pa-4",style:"max-height: 200px; overflow-y: auto;"},[r("nuxt-link",{attrs:{to:t.localePath({name:"entity-slug-id",params:{slug:t.otherNode.entity,id:"temporal"===t.otherNode.entity?t.otherNode.label.replace("年",""):t.otherNode.label}})}},[r("h4",[t._v(t._s(t.otherNode.label))])]),t._v(" "),t.otherNode&&t.otherNode.description?[r("div",{staticClass:"mt-2"},[t._v("\n              "+t._s(t.otherNode.description)+"\n            ")])]:t._e()],2),t._v(" "),[r("v-divider"),t._v(" "),r("v-card-actions",[t._e(),t._v(" "),r("v-btn",{attrs:{color:"primary"},on:{click:function(e){return t.focus(t.otherId)}}},[t._v(t._s(t.$t("フォーカス")))]),t._v(" "),r("v-btn",{attrs:{color:"primary",loading:t.loading},on:{click:function(e){return t.select(t.otherId,!0)}}},[t._v(t._s(t.$t("search")))]),t._v(" "),r("v-spacer"),t._v(" "),r("ResultOption",{attrs:{item:{label:t.otherNode.label,url:t.otherNode.url}}})],2)]],2):t._e(),t._v(" "),t._e(),t._v(" "),t._e()],1),t._v(" "),r("v-col",{attrs:{cols:"12",sm:9}},[r("v-row",[r("v-col",{attrs:{cols:"12",sm:9}},[r("network",{ref:"network",staticStyle:{height:"650px","background-color":"#f0f4c3"},attrs:{nodes:t.nodes,edges:t.edges,options:t.options},on:{click:t.onNodeSelected,"double-click":t.doubleClick}})],1),t._v(" "),r("v-col",{attrs:{cols:"12",sm:3}},[r("v-sheet",{staticClass:"grey lighten-3 pa-2"},[r("h3",[r("v-icon",[t._v("mdi-view-list")]),t._v(" "+t._s(t.$t("entity"))+"\n            ")],1)]),t._v(" "),r("v-list",{staticStyle:{"max-height":"600px","overflow-y":"auto"},attrs:{dense:""}},t._l(t.nodes,(function(e,n){return r("v-list-item",{key:n,on:{click:function(r){return t.select(e.id)}}},[r("v-list-item-avatar",[r("v-img",{attrs:{src:e.image}})],1),t._v(" "),r("v-list-item-content",[r("v-list-item-title",{domProps:{textContent:t._s(e.label)}})],1)],1)})),1)],1)],1)],1)],1),t._v(" "),r("v-dialog",{attrs:{"hide-overlay":"",persistent:"",width:"300"},model:{value:t.loading,callback:function(e){t.loading=e},expression:"loading"}},[r("v-card",{attrs:{color:"primary",dark:""}},[r("v-card-text",{staticClass:"py-5"},[r("v-progress-linear",{staticClass:"mb-0",attrs:{indeterminate:"",color:"white"}})],1)],1)],1)],1):t._e()}),[],!1,null,null,null);e.default=component.exports;P()(component,{Network:r(586).default}),P()(component,{VBtn:N.a,VCard:I.a,VCardActions:S.a,VCardText:S.b,VCol:E.a,VContainer:M.a,VDialog:B.a,VDivider:L.a,VIcon:T.a,VImg:$.a,VList:D.a,VListItem:U.a,VListItemAvatar:F.a,VListItemContent:W.a,VListItemTitle:W.b,VProgressLinear:X.a,VRow:A.a,VSheet:z.a,VSpacer:H.a})}}]);