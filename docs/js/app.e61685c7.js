(function(t){function a(a){for(var s,o,n=a[0],c=a[1],l=a[2],u=0,m=[];u<n.length;u++)o=n[u],Object.prototype.hasOwnProperty.call(e,o)&&e[o]&&m.push(e[o][0]),e[o]=0;for(s in c)Object.prototype.hasOwnProperty.call(c,s)&&(t[s]=c[s]);d&&d(a);while(m.length)m.shift()();return r.push.apply(r,l||[]),i()}function i(){for(var t,a=0;a<r.length;a++){for(var i=r[a],s=!0,n=1;n<i.length;n++){var c=i[n];0!==e[c]&&(s=!1)}s&&(r.splice(a--,1),t=o(o.s=i[0]))}return t}var s={},e={app:0},r=[];function o(a){if(s[a])return s[a].exports;var i=s[a]={i:a,l:!1,exports:{}};return t[a].call(i.exports,i,i.exports,o),i.l=!0,i.exports}o.m=t,o.c=s,o.d=function(t,a,i){o.o(t,a)||Object.defineProperty(t,a,{enumerable:!0,get:i})},o.r=function(t){"undefined"!==typeof Symbol&&Symbol.toStringTag&&Object.defineProperty(t,Symbol.toStringTag,{value:"Module"}),Object.defineProperty(t,"__esModule",{value:!0})},o.t=function(t,a){if(1&a&&(t=o(t)),8&a)return t;if(4&a&&"object"===typeof t&&t&&t.__esModule)return t;var i=Object.create(null);if(o.r(i),Object.defineProperty(i,"default",{enumerable:!0,value:t}),2&a&&"string"!=typeof t)for(var s in t)o.d(i,s,function(a){return t[a]}.bind(null,s));return i},o.n=function(t){var a=t&&t.__esModule?function(){return t["default"]}:function(){return t};return o.d(a,"a",a),a},o.o=function(t,a){return Object.prototype.hasOwnProperty.call(t,a)},o.p="/ecomerce-demo/";var n=window["webpackJsonp"]=window["webpackJsonp"]||[],c=n.push.bind(n);n.push=a,n=n.slice();for(var l=0;l<n.length;l++)a(n[l]);var d=c;r.push([0,"chunk-vendors"]),i()})({0:function(t,a,i){t.exports=i("56d7")},"56d7":function(t,a,i){"use strict";i.r(a);i("e260"),i("e6cf"),i("cca6"),i("a79d");var s=i("2b0e"),e=function(){var t=this,a=t.$createElement,i=t._self._c||a;return i("div",{attrs:{id:"app"}},[i("Menu",{attrs:{carrito:t.carrito}}),i("router-view",{attrs:{data:t.data},on:{agregarCarrito:t.agregarCarrito}})],1)},r=[],o=function(){var t=this,a=t.$createElement,i=t._self._c||a;return i("nav",{staticClass:"navbar navbar-expand-lg navbar-light bg-light"},[i("a",{staticClass:"navbar-brand",attrs:{href:"#"}},[t._v("Navbar")]),t._m(0),i("div",{staticClass:"collapse navbar-collapse",attrs:{id:"navbarSupportedContent"}},[i("ul",{staticClass:"navbar-nav mr-auto"},[i("li",{staticClass:"nav-item"},[i("router-link",{staticClass:"nav-link",attrs:{to:"/"}},[t._v("Home")])],1),i("li",{staticClass:"nav-item"},[i("router-link",{staticClass:"nav-link",attrs:{to:"/productos"}},[t._v("Productos")])],1),i("li",{staticClass:"nav-item"},[i("router-link",{staticClass:"nav-link",attrs:{to:"/servicios"}},[t._v("Servicios")])],1)]),i("form",{staticClass:"form-inline my-2 my-lg-0"},[i("input",{staticClass:"form-control my-2 my-sm-0",attrs:{type:"search",placeholder:"Buscar","aria-label":"Search"}}),t._m(1),i("button",{staticClass:"btn btn-light my-2 my-sm-0",attrs:{"data-toggle":"modal","data-target":"#carrito"},on:{click:t.actualizarTotal}},[i("span",{staticClass:"material-icons"},[t._v(" shopping_cart ")])])])]),i("div",{staticClass:"modal fade",attrs:{id:"carrito","data-backdrop":"static","data-keyboard":"false",tabindex:"-1","aria-labelledby":"staticBackdropLabel","aria-hidden":"true"}},[i("div",{staticClass:"modal-dialog modal-dialog-centered"},[i("div",{staticClass:"modal-content"},[t._m(2),i("div",{staticClass:"modal-body"},[t._l(t.carrito,(function(a,s){return i("div",{key:s,staticClass:"media mb-1"},[i("img",{staticClass:"mr-3",attrs:{src:a.media,width:"20%",alt:"..."}}),i("div",{staticClass:"media-body"},[i("h5",{staticClass:"mt-0"},[t._v(t._s(a.titulo))]),i("b",[t._v("$"+t._s(a.precio))]),i("br"),i("div",{staticClass:"btn-group btn-group-sm",attrs:{role:"group","aria-label":"Basic example"}},[i("button",{staticClass:"btn btn-secondary",attrs:{type:"button"},on:{click:function(a){return t.decrement(s)}}},[i("span",{staticClass:"material-icons"},[t._v(" remove ")])]),i("button",{staticClass:"btn btn-secondary",attrs:{type:"button"}},[i("input",{staticClass:"form-control",attrs:{width:"20%",type:"number",name:"",id:"",min:"0",max:""},domProps:{value:a.cantidad},on:{change:t.actualizarTotal}})]),i("button",{staticClass:"btn btn-secondary",attrs:{type:"button"},on:{click:function(a){return t.increment(s)}}},[i("span",{staticClass:"material-icons"},[t._v(" add ")])])]),t._v(" "+t._s(a.cantidad)+" ")])])})),i("hr"),i("h5",{staticClass:"mt-0"},[i("b",[t._v("Total: ")]),t._v("$"+t._s(t.total))])],2),t._m(3)])])])])},n=[function(){var t=this,a=t.$createElement,i=t._self._c||a;return i("button",{staticClass:"navbar-toggler",attrs:{type:"button","data-toggle":"collapse","data-target":"#navbarSupportedContent","aria-controls":"navbarSupportedContent","aria-expanded":"false","aria-label":"Toggle navigation"}},[i("span",{staticClass:"navbar-toggler-icon"})])},function(){var t=this,a=t.$createElement,i=t._self._c||a;return i("button",{staticClass:"btn btn-outline-success my-2 my-sm-0",attrs:{type:"submit"}},[i("span",{staticClass:"material-icons"},[t._v(" search ")])])},function(){var t=this,a=t.$createElement,i=t._self._c||a;return i("div",{staticClass:"modal-header"},[i("h5",{staticClass:"modal-title",attrs:{id:"staticBackdropLabel"}},[t._v("Carrito")]),i("button",{staticClass:"close",attrs:{type:"button","data-dismiss":"modal","aria-label":"Close"}},[i("span",{attrs:{"aria-hidden":"true"}},[t._v("×")])])])},function(){var t=this,a=t.$createElement,i=t._self._c||a;return i("div",{staticClass:"modal-footer"},[i("button",{staticClass:"btn btn-secondary",attrs:{type:"button","data-dismiss":"modal"}},[t._v("Close")]),i("button",{staticClass:"btn btn-success",attrs:{type:"button"}},[t._v("Comprar")])])}],c={name:"menu",props:{carrito:Array},data:function(){return{total:0}},mounted:function(){this.actualizarTotal()},methods:{actualizarTotal:function(){this.total=0;for(var t=0;t<this.carrito.length;t++)this.total+=Math.round10(this.carrito[t].precio*this.carrito[t].cantidad,-2)},increment:function(t){this.carrito[t].cantidad++,this.actualizarTotal()},decrement:function(t){this.carrito[t].cantidad--,this.actualizarTotal()},modificar:function(t){this.carrito[t].cantidad++,this.actualizarTotal()}}},l=c,d=i("2877"),u=Object(d["a"])(l,o,n,!1,null,null,null),m=u.exports,p={components:{Menu:m},data:function(){return{carrito:[],data:[{id:1,titulo:"Producto 1",descripcion:"lorem ipsum dolor sit amet, consectetur adipiscing elit. lorem ipsum dolor sit amet, consectetur adipiscing elit. ",precio:150.3,likes:15,media:"/480x480.png",cantidad:1},{id:2,titulo:"Producto 2",descripcion:"lorem ipsum dolor sit amet, consectetur adipiscing elit. lorem ipsum dolor sit amet, consectetur adipiscing elit. ",precio:350.4,likes:30,media:"/480x480.png",cantidad:1},{id:3,titulo:"Producto 3",descripcion:"lorem ipsum dolor sit amet, consectetur adipiscing elit. lorem ipsum dolor sit amet, consectetur adipiscing elit. ",precio:21.25,likes:13,media:"/480x480.png",cantidad:1},{id:4,titulo:"Producto 4",descripcion:"lorem ipsum dolor sit amet, consectetur adipiscing elit. lorem ipsum dolor sit amet, consectetur adipiscing elit. ",precio:115.15,likes:8,media:"/480x480.png",cantidad:1},{id:5,titulo:"Producto 5",descripcion:"lorem ipsum dolor sit amet, consectetur adipiscing elit. lorem ipsum dolor sit amet, consectetur adipiscing elit. ",precio:420.1,likes:23,media:"/480x480.png",cantidad:1},{id:6,titulo:"Producto 6",descripcion:"lorem ipsum dolor sit amet, consectetur adipiscing elit. lorem ipsum dolor sit amet, consectetur adipiscing elit. ",precio:20.25,likes:5,media:"/480x480.png",cantidad:1}]}},methods:{agregarCarrito:function(t){this.carrito.push(this.data[t])}}},v=p,b=Object(d["a"])(v,e,r,!1,null,null,null),f=b.exports,C=i("8c4f"),g=function(){var t=this,a=t.$createElement,i=t._self._c||a;return i("div",{staticClass:"home container-fluid"},[i("dir",{staticClass:"row"},[i("div",{staticClass:"col"},[i("h1",{staticClass:"text-center"},[t._v("Ecommerce Demo")]),i("p",[t._v("En la presente demo podrán realizar las operaciones comunes en un ecommerce. De esta manera podrá experimentar un poco la experiencia de nuestro servicio de Ecommerce. artiendo de este sistema, podemos customizar las cosas que sean necesarias para adaptarse a su negocio. En la siguiente demo, usted podrá realizar lo siguiente: ")])])]),i("dir",{staticClass:"row"},[i("div",{staticClass:"col-sm"},[i("h5",{staticClass:"text-center"},[t._v("Listar los productos")]),i("p",[t._v("Como toda sección de productos podemos ver los productos o servicios que tenga dicho emprendimiento.")])]),i("div",{staticClass:"col-sm d-none d-md-block d-lg-block d-xl-block"},[t._v("d-none")])]),i("dir",{staticClass:"row"},[i("div",{staticClass:"col-sm d-none d-md-block d-lg-block d-xl-block"},[t._v("asd")]),i("div",{staticClass:"col-sm"},[i("h5",{staticClass:"text-center"})])]),i("dir",{staticClass:"row"},[i("div",{staticClass:"col-sm"}),i("div",{staticClass:"col-sm"})])],1)},h=[],_={name:"Home",components:{}},y=_,x=Object(d["a"])(y,g,h,!1,null,null,null),k=x.exports,w=function(){var t=this,a=t.$createElement,i=t._self._c||a;return i("div",{staticClass:"container-fluid"},[i("Card",{attrs:{producto:t.producto}})],1)},$=[],O=function(){var t=this,a=t.$createElement,i=t._self._c||a;return i("div",{staticClass:"card container",staticStyle:{"margin-top":"5%"}},[i("div",{staticClass:"row"},[t._m(0),i("div",{staticClass:"col-sm"},[i("h1",[t._v(t._s(t.producto.titulo))]),i("p",[t._v(t._s(t.producto.descripcion))]),i("p",[i("b",[t._v("$"+t._s(t.producto.precio))])]),i("hr"),t._m(1)])])])},E=[function(){var t=this,a=t.$createElement,i=t._self._c||a;return i("div",{staticClass:"col-sm-4"},[i("img",{staticClass:"card-img",attrs:{src:"/480x480.png",alt:""}})])},function(){var t=this,a=t.$createElement,i=t._self._c||a;return i("form",{attrs:{action:""}},[i("div",{staticClass:"row w-50"},[i("div",{staticClass:"col"},[i("button",{staticClass:"btn btn-primary"},[t._v(" Comprar ")])]),i("div",{staticClass:"col"},[i("button",{staticClass:"btn btn-secondary"},[t._v(" Añadir al Carrito ")])])])])}],j={name:"Card",props:{producto:Object}},P=j,S=Object(d["a"])(P,O,E,!1,null,null,null),T=S.exports,z={name:"producto",components:{Card:T},data:function(){return{producto:null}},props:{data:Array},mounted:function(){console.log(this.$route.params.id),this.producto=this.data[this.$route.params.id]}},M=z,A=Object(d["a"])(M,w,$,!1,null,null,null),B=A.exports,H=function(){var t=this,a=t.$createElement,i=t._self._c||a;return i("div",{staticClass:"about container-fluid",staticStyle:{"margin-top":"5%"}},[i("div",{staticClass:"row row-cols-1 row-cols-md-4"},t._l(t.productos,(function(a,s){return i("item",{key:s,attrs:{id:s,titulo:a.nombre,descripcion:a.descripcion,precio:a.precio,media:a.media},on:{agregarCarrito:t.agregarCarrito}})})),1)])},L=[],N=function(){var t=this,a=t.$createElement,i=t._self._c||a;return i("div",{staticClass:"col mb-4"},[i("div",{staticClass:"card"},[i("router-link",{staticClass:"nav-link",attrs:{to:t.src}},[i("img",{staticClass:"card-img-top",attrs:{src:t.media,alt:""}}),i("div",{staticClass:"card-body"},[i("h5",{staticClass:"card-title"},[i("b",[t._v(t._s(t.titulo))])]),i("p",{staticClass:"card-text"},[t._v(t._s(t.descripcion))]),i("p",[t._v("$"+t._s(t.precio))])])]),i("div",{staticClass:"card-footer text-muted"},[i("button",{staticClass:"btn btn-primary",on:{click:t.agregarCarrito}},[i("span",{staticClass:"material-icons"},[t._v(" add_shopping_cart ")])])])],1)])},q=[],D=(i("a9e3"),{name:"item",props:{id:Number,titulo:String,descripcion:String,precio:Number,media:String},data:function(){return{src:null}},mounted:function(){this.src="/producto/"+this.id},methods:{agregarCarrito:function(){this.$emit("agregarCarrito",this.id)}}}),J=D,F=(i("9894"),Object(d["a"])(J,N,q,!1,null,null,null)),G=F.exports,I={name:"productos",components:{item:G},props:{data:Array},data:function(){return{productos:[]}},mounted:function(){this.productos=this.data},methods:{agregarCarrito:function(t){console.log(t),this.$emit("agregarCarrito",t)}}},K=I,Q=Object(d["a"])(K,H,L,!1,null,null,null),R=Q.exports,U=function(){var t=this,a=t.$createElement;t._self._c;return t._m(0)},V=[function(){var t=this,a=t.$createElement,i=t._self._c||a;return i("div",[i("h1",[t._v("Servicion")])])}],W={name:"servicio"},X=W,Y=Object(d["a"])(X,U,V,!1,null,null,null),Z=Y.exports;s["a"].use(C["a"]);var tt=[{path:"/",name:"Home",component:k},{path:"/productos",name:"Productos",component:R},{path:"/producto/:id",name:"produto",component:B},{path:"/servicios",name:"servicos",component:Z}],at=new C["a"]({routes:tt}),it=at,st=i("dad5"),et=i.n(st);s["a"].config.productionTip=!1,new s["a"]({router:it,render:function(t){return t(f)}}).$mount("#app"),s["a"].use(et.a)},9894:function(t,a,i){"use strict";i("d434")},d434:function(t,a,i){}});
//# sourceMappingURL=app.e61685c7.js.map