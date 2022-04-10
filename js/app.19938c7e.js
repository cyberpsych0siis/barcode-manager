(function(){"use strict";var e={1193:function(e,t,n){var o=n(7139);const r=new o.ZP.Store({state(){return{count:0,items:new Map,editMode:!1,scaleMode:!1}},mutations:{increment(e){e.count++},addItem(e,t){e.items.has(t)?e.items.get(t).qty++:e.items.set(t,{qty:1,name:"EAN Code "+t,barcode:t})},increaseQuantity(e,t){e.items.get(t).qty++},decreaseQuantity(e,t){e.items.get(t)>0&&e.items.get(t).qty--},removeItem(e,t){console.log(t,e.items),e.items.has(t)&&(e.items.get(t).qty>1?e.items.get(t).qty--:e.items.delete(t))},toggleEdit(e){e.editMode=!e.editMode}}});var a=n(9242),s=n(3396);function i(e,t,n,o,r,a){const i=(0,s.up)("HeaderComponent"),d=(0,s.up)("ItemsComponent"),l=(0,s.up)("ScanComponent");return(0,s.wg)(),(0,s.iD)(s.HY,null,[(0,s._)("div",null,[(0,s.Wm)(i),(0,s._)("main",null,[(0,s.Wm)(d)])]),(0,s.Wm)(l)],64)}const d=e=>((0,s.dD)("data-v-5fdaafb5"),e=e(),(0,s.Cn)(),e),l={class:"grid"},c=d((()=>(0,s._)("p",{class:"bold"},"Hello Header",-1)));function u(e,t,n,o,r,a){return(0,s.wg)(),(0,s.iD)("header",l,[(0,s._)("p",{onClick:t[0]||(t[0]=(...e)=>this.toggleEdit&&this.toggleEdit(...e))},"Edit"),c,(0,s._)("p",{onClick:t[1]||(t[1]=(...e)=>this.debugAddItem&&this.debugAddItem(...e))},"+")])}var m={setup(){},methods:{...(0,o.OI)(["toggleEdit","addItem"]),debugAddItem(){this.addItem("DEBUG ITEM")}}},p=n(89);const f=(0,p.Z)(m,[["render",u],["__scopeId","data-v-5fdaafb5"]]);var g=f,v=n(2268);const h=e=>((0,s.dD)("data-v-f895c278"),e=e(),(0,s.Cn)(),e),w={class:"withicon"},b=["data-ean"],_=h((()=>(0,s._)("img",{class:"trash",src:"trash.svg"},null,-1))),y=[_];function I(e,t,n,o,r,a){return(0,s.wg)(),(0,s.iD)("li",null,[(0,s._)("span",w,(0,v.zw)(n.item.name)+" - x"+(0,v.zw)(n.item.qty),1),this.editMode?((0,s.wg)(),(0,s.iD)("div",{key:0,onClick:t[0]||(t[0]=(...e)=>this.remove&&this.remove(...e)),"data-ean":n.ean},y,8,b)):(0,s.kq)("",!0)])}var C={computed:{...(0,o.rn)(["editMode"])},props:{item:Object,ean:String},methods:{...(0,o.OI)(["removeItem"]),remove(e){console.log(e),this.removeItem(e.target.dataset.ean)}}};const x=(0,p.Z)(C,[["render",I],["__scopeId","data-v-f895c278"]]);var O=x;const k={data(){return{newItemText:"unused"}},computed:{...(0,o.rn)(["items"])}};var D=Object.assign(k,{setup(e){return(e,t)=>{const n=(0,s.up)("content");return(0,s.wg)(),(0,s.j4)(n,null,{default:(0,s.w5)((()=>[(0,s._)("ul",null,[((0,s.wg)(!0),(0,s.iD)(s.HY,null,(0,s.Ko)(e.items,(([e,t])=>((0,s.wg)(),(0,s.j4)(O,{key:e,item:t,ean:t.barcode},null,8,["item","ean"])))),128))])])),_:1})}}});const M=(0,p.Z)(D,[["__scopeId","data-v-551a7510"]]);var j=M;const q=e=>((0,s.dD)("data-v-462721ab"),e=e(),(0,s.Cn)(),e),E=q((()=>(0,s._)("div",{class:"viewport"},null,-1)));function S(e,t,n,o,r,a){return(0,s.wg)(),(0,s.iD)("div",{class:(0,v.C_)(["scanner",{show:r.expanded}])},[(0,s._)("div",{onClick:t[0]||(t[0]=(...e)=>a.toggle&&a.toggle(...e)),class:"handle"},"Add new Entry"),E],2)}var R=n(928),A={data(){return{expanded:!1,camera:null,boxes:null,lastResult:null}},beforeUnmount(){(0,R.stop)()},mounted(){(0,R.onDetected)((e=>{null==this.lastResult&&(console.log(e.codeResult.code),this.lastResult=null,this.expanded=!1,(0,R.stop)(),this.addItem(e.codeResult.code))})),(0,R.onProcessed)((e=>{e&&console.log(e)}))},methods:{...(0,o.OI)(["addItem"]),toggle(){if(this.expanded=!this.expanded,this.expanded){this.lastResult=null;const e=document.querySelector(".scanner .viewport").getBoundingClientRect();console.log(e),(0,R.init)({inputStream:{type:"LiveStream",constraints:{width:{max:e.width},facingMode:"environment"},target:".viewport"},locator:{patchSize:"medium",halfSample:!0},numOfWorkers:2,frequency:10,decoder:{readers:[{format:"ean_reader",config:{}}]},locate:!0},(e=>{e&&console.error(e),(0,R.start)(),this.expanded=!0}))}else this.lastResult=null,(0,R.stop)(),this.expanded=!1}}};const H=(0,p.Z)(A,[["render",S],["__scopeId","data-v-462721ab"]]);var Z=H,P={name:"App",components:{HeaderComponent:g,ItemsComponent:j,ScanComponent:Z},data(){return{...(0,o.rn)(["scaleMode"])}}};const T=(0,p.Z)(P,[["render",i],["__scopeId","data-v-0a502225"]]);var W=T;const z=(0,a.ri)(W);z.use(r),z.mount("#app")}},t={};function n(o){var r=t[o];if(void 0!==r)return r.exports;var a=t[o]={exports:{}};return e[o].call(a.exports,a,a.exports,n),a.exports}n.m=e,function(){var e=[];n.O=function(t,o,r,a){if(!o){var s=1/0;for(c=0;c<e.length;c++){o=e[c][0],r=e[c][1],a=e[c][2];for(var i=!0,d=0;d<o.length;d++)(!1&a||s>=a)&&Object.keys(n.O).every((function(e){return n.O[e](o[d])}))?o.splice(d--,1):(i=!1,a<s&&(s=a));if(i){e.splice(c--,1);var l=r();void 0!==l&&(t=l)}}return t}a=a||0;for(var c=e.length;c>0&&e[c-1][2]>a;c--)e[c]=e[c-1];e[c]=[o,r,a]}}(),function(){n.n=function(e){var t=e&&e.__esModule?function(){return e["default"]}:function(){return e};return n.d(t,{a:t}),t}}(),function(){n.d=function(e,t){for(var o in t)n.o(t,o)&&!n.o(e,o)&&Object.defineProperty(e,o,{enumerable:!0,get:t[o]})}}(),function(){n.g=function(){if("object"===typeof globalThis)return globalThis;try{return this||new Function("return this")()}catch(e){if("object"===typeof window)return window}}()}(),function(){n.o=function(e,t){return Object.prototype.hasOwnProperty.call(e,t)}}(),function(){var e={143:0};n.O.j=function(t){return 0===e[t]};var t=function(t,o){var r,a,s=o[0],i=o[1],d=o[2],l=0;if(s.some((function(t){return 0!==e[t]}))){for(r in i)n.o(i,r)&&(n.m[r]=i[r]);if(d)var c=d(n)}for(t&&t(o);l<s.length;l++)a=s[l],n.o(e,a)&&e[a]&&e[a][0](),e[a]=0;return n.O(c)},o=self["webpackChunkhello_world"]=self["webpackChunkhello_world"]||[];o.forEach(t.bind(null,0)),o.push=t.bind(null,o.push.bind(o))}();var o=n.O(void 0,[998],(function(){return n(1193)}));o=n.O(o)})();
//# sourceMappingURL=app.19938c7e.js.map