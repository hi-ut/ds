(window.webpackJsonp=window.webpackJsonp||[]).push([[41],{548:function(t,e,n){"use strict";n.r(e);n(227);var c=n(21),r=n(35),o=n(40),f=n(37),l=n(26),d=n(12),h=n(105);function v(t){var e=function(){if("undefined"==typeof Reflect||!Reflect.construct)return!1;if(Reflect.construct.sham)return!1;if("function"==typeof Proxy)return!0;try{return Boolean.prototype.valueOf.call(Reflect.construct(Boolean,[],(function(){}))),!0}catch(t){return!1}}();return function(){var n,c=Object(l.a)(t);if(e){var r=Object(l.a)(this).constructor;n=Reflect.construct(c,arguments,r)}else n=c.apply(this,arguments);return Object(f.a)(this,n)}}var y=function(t,e,n,desc){var c,r=arguments.length,o=r<3?e:null===desc?desc=Object.getOwnPropertyDescriptor(e,n):desc;if("object"===("undefined"==typeof Reflect?"undefined":Object(d.a)(Reflect))&&"function"==typeof Reflect.decorate)o=Reflect.decorate(t,e,n,desc);else for(var i=t.length-1;i>=0;i--)(c=t[i])&&(o=(r<3?c(o):r>3?c(e,n,o):c(e,n))||o);return r>3&&o&&Object.defineProperty(e,n,o),o},O=n(572).a.Bar,j=function(t){Object(o.a)(n,t);var e=v(n);function n(){return Object(c.a)(this,n),e.apply(this,arguments)}return Object(r.a)(n,[{key:"watchTmp",value:function(){this.main()}},{key:"mounted",value:function(){this.main()}},{key:"main",value:function(){for(var t=this.buckets,e=[],n=[],i=0;i<t.length;i++){var c=t[i];e.push(c.key),n.push(c.doc_count)}var r={labels:e,datasets:[{data:n,label:""}]};this.renderChart(r,{maintainAspectRatio:!1})}}]),n}(Object(h.mixins)(O));y([Object(h.Prop)({default:[]})],j.prototype,"buckets",void 0),y([Object(h.Watch)("buckets",{deep:!0})],j.prototype,"watchTmp",null);var m=j=y([h.Component],j),R=n(87),component=Object(R.a)(m,undefined,undefined,!1,null,null,null);e.default=component.exports}}]);