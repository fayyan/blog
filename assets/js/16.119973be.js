(window.webpackJsonp=window.webpackJsonp||[]).push([[16],{499:function(t,e,n){"use strict";var i=n(2),u=n(49).find,r=n(130),l=n(27),s=!0,o=l("find");"find"in[]&&Array(1).find((function(){s=!1})),i({target:"Array",proto:!0,forced:s||!o},{find:function(t){return u(this,t,arguments.length>1?arguments[1]:void 0)}}),r("find")},516:function(t,e,n){"use strict";n.r(e);n(499),n(45);var i=n(10),u={name:"GroupSelect",props:{list:{type:Array,default:function(){return[]}},value:{type:Array,default:function(){return[]}}},watch:{value:function(){this.selectedIds=this.value.map((function(t){return t.id})),console.log(this.list),console.log("======"),console.log(this.value)}},data:function(){return{selectedIds:this.value.map((function(t){return t.id}))}},computed:{valueToEmit:function(){var t=this;return this.selectedIds.map((function(e){return Object(i.a)({},t.list.find((function(t){return t.id===e})))}))}},methods:{handleInput:function(){this.$emit("input",this.valueToEmit)}}},r=n(6),l=Object(r.a)(u,(function(){var t=this,e=t.$createElement,n=t._self._c||e;return n("Select",{attrs:{transfer:"",multiple:"",filterable:""},on:{input:t.handleInput},model:{value:t.selectedIds,callback:function(e){t.selectedIds=e},expression:"selectedIds"}},t._l(t.list,(function(e){return n("Option",{key:e.id,attrs:{value:e.id}},[t._v(t._s(e.name))])})),1)}),[],!1,null,null,null);e.default=l.exports}}]);