(window.webpackJsonp=window.webpackJsonp||[]).push([[0],{13:function(e,n,t){e.exports=t(40)},19:function(e,n,t){},40:function(e,n,t){"use strict";t.r(n);var a=t(0),r=t.n(a),o=t(12),i=t.n(o),c=(t(19),t(4)),u=t(2),l=function(e){var n=e.onSubmit,t=e.onNameChange,a=e.newName,o=e.newPhone,i=e.onPhoneChange;return r.a.createElement("div",null,r.a.createElement("h3",null,"Lis\xe4\xe4 uusi henkil\xf6"),r.a.createElement("form",{onSubmit:n},r.a.createElement("div",null,"nimi: ",r.a.createElement("input",{value:a,onChange:t}),r.a.createElement("br",null),"numero: ",r.a.createElement("input",{value:o,onChange:i})),r.a.createElement("div",null,r.a.createElement("button",{type:"submit"},"Lis\xe4\xe4"))))},m=function(e){var n=e.filter,t=e.onFilterChange;return r.a.createElement("div",null,r.a.createElement("h3",null,"Suodata henkil\xf6it\xe4"),r.a.createElement("input",{value:n,onChange:t}))},d=function(e){var n=e.person,t=e.onDelete;return r.a.createElement("div",null,n.name," - ",n.number," ",r.a.createElement("button",{onClick:function(){return t(n)}},"Poista"))},f=function(e){var n=e.persons,t=e.onDelete;return r.a.createElement("div",null,r.a.createElement("h2",null,"Numerot"),n.map(function(e){return r.a.createElement(d,{person:e,key:e.id,onDelete:t})}))},s=function(e){var n=e.message,t={backgroundColor:"lightgreen",color:"darkgreen",border:"2px solid darkgreen",padding:15,margin:20,width:"20%"},a=Object(c.a)({},t,{backgroundColor:"lightcoral",color:"darkred",border:"2px solid darkred"});return null==n||null===n.text?null:n.error?r.a.createElement("div",{style:a},n.text):r.a.createElement("div",{style:t},n.text)},h=t(3),v=t.n(h),b="/api/persons",g=function(){return v.a.get(b).then(function(e){return e.data})},E=function(e){return v.a.post(b,e).then(function(e){return e.data})},p=function(e,n){return v.a.put("".concat(b,"/").concat(e),n).then(function(e){return e.data})},k=function(e){return v.a.delete("".concat(b,"/").concat(e)).then(function(e){return e.data})},w=function(){var e=Object(a.useState)([]),n=Object(u.a)(e,2),t=n[0],o=n[1],i=Object(a.useState)(""),d=Object(u.a)(i,2),h=d[0],v=d[1],b=Object(a.useState)(""),w=Object(u.a)(b,2),j=w[0],x=w[1],C=Object(a.useState)(""),O=Object(u.a)(C,2),S=O[0],y=O[1],P=Object(a.useState)({error:!0,text:null}),N=Object(u.a)(P,2),D=N[0],L=N[1],B=function(){v(""),x("")},F=function(){setTimeout(function(){L(null)},5e3)};return Object(a.useEffect)(function(){g().then(function(e){return o(e)})},[]),r.a.createElement("div",{className:"container"},r.a.createElement("h2",null,"Puhelinluettelo"),r.a.createElement(m,{filter:S,onFilterChange:function(e){y(e.target.value)}}),r.a.createElement(s,{message:D}),r.a.createElement(l,{onSubmit:function(e){e.preventDefault();var n={name:h,number:j,id:t.length+1},a=t.find(function(e){return e.name===n.name});a?window.confirm("".concat(h," on jo luettelossa, korvataanko vanha numero uudella?"))&&(p(a.id,Object(c.a)({},a,{number:j})).then(function(e){o(t.map(function(n){return n.id!==e.id?n:e})),L({error:!1,text:"P\xe4ivitettiin henkil\xf6n ".concat(e.name," tiedot!")}),F()}).catch(function(e){o(t.filter(function(e){return e.id!==a.id})),L({error:!0,text:"Henkil\xf6n ".concat(n.name," tiedoja ei l\xf6ydy!")}),F()}),B()):(E(n).then(function(e){o(t.concat(e)),L({error:!1,text:"Lis\xe4ttiin ".concat(e.name,"!")}),F()}).catch(function(e){L({error:!0,text:"Virheelliset tiedot"}),F()}),B())},onNameChange:function(e){v(e.target.value)},newName:h,onPhoneChange:function(e){x(e.target.value)},newPhone:j}),r.a.createElement(f,{persons:t.filter(function(e){return e.name.toLowerCase().includes(S)}),onDelete:function(e){k(e.id).then(function(n){o(t.filter(function(n){return n.id!==e.id})),L({error:!1,text:"Poistettiin henkil\xf6n ".concat(e.name," tiedot!")}),F()}).catch(function(n){o(t.filter(function(n){return n.id!==e.id})),L({error:!0,text:"Henkil\xf6n ".concat(e.name," tiedot oli jo poistettu!")}),F()})}}))};Boolean("localhost"===window.location.hostname||"[::1]"===window.location.hostname||window.location.hostname.match(/^127(?:\.(?:25[0-5]|2[0-4][0-9]|[01]?[0-9][0-9]?)){3}$/));i.a.render(r.a.createElement(w,null),document.getElementById("root")),"serviceWorker"in navigator&&navigator.serviceWorker.ready.then(function(e){e.unregister()})}},[[13,2,1]]]);
//# sourceMappingURL=main.76ffb056.chunk.js.map