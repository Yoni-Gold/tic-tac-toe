(this["webpackJsonptic-tac-toe"]=this["webpackJsonptic-tac-toe"]||[]).push([[0],{30:function(e,t,a){e.exports=a(57)},35:function(e,t,a){},37:function(e,t,a){},57:function(e,t,a){"use strict";a.r(t);var n=a(0),c=a.n(n),r=a(4),o=a.n(r),i=(a(35),a(10)),l=a(5),s=a.n(l),u=a(12);var m=function(e){return c.a.createElement("div",{onClick:function(e){e.target.parentElement.click()},style:"z"===e.value?{color:"transparent"}:{color:"black"},value:e.value},e.value)},d=(a(37),a(7)),b=a.n(d),p=a(67),f=a(66),v=!1;var h=function(){var e=function(){var e=Object(u.a)(s.a.mark((function e(){var t;return s.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return e.next=2,b.a.get("http://localhost:3001/v1/game").then((function(e){return e.data}));case 2:t=e.sent,o(!t.turn),E(t.move),W(t.board);case 6:case"end":return e.stop()}}),e)})));return function(){return e.apply(this,arguments)}}(),t=Object(n.useState)(!0),a=Object(i.a)(t,2),r=a[0],o=a[1],l=Object(n.useState)(0),d=Object(i.a)(l,2),h=d[0],E=d[1],g=Object(n.useState)(!1),k=Object(i.a)(g,2),w=k[0],N=k[1],z=Object(n.useState)(!1),O=Object(i.a)(z,2),C=O[0],j=O[1],y={a:"z",b:"z",c:"z",d:"z",e:"z",f:"z",g:"z",h:"z",i:"z"},x=Object(n.useState)(0),S=Object(i.a)(x,2),B=S[0],W=S[1],T=(0===B&&b.a.get("http://localhost:3001/v1/game").then((function(e){return e.data})).then((function(e){W(e.board)})),function(){var e=Object(u.a)(s.a.mark((function e(t){var a,n;return s.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:if(v){e.next=7;break}return e.next=3,b.a.get("http://localhost:3001/v1/board");case 3:a=e.sent,n=a.data,console.log(n),n[t]&&(E(n[t].move),W(n[t].board),o(!n[t].turn));case 7:case"end":return e.stop()}}),e)})));return function(t){return e.apply(this,arguments)}}()),A=function(e){if("z"===B[e.target.id]&&!v){if(r){var t=B;t[e.target.id]="X",b.a.post("http://localhost:3001/v1/board",{board:t,turn:r,move:h+1}),W(t),E(h+1)}else{var a=B;a[e.target.id]="O",b.a.post("http://localhost:3001/v1/board",{board:a,turn:r,move:h+1}),W(a),E(h+1)}o(!r),!v&&(n=B[e.target.id],B.a===B.b&&B.b===B.c&&B.a===n||B.d===B.e&&B.e===B.f&&B.d===n||B.g===B.h&&B.h===B.i&&B.g===n||B.a===B.d&&B.d===B.g&&B.a===n||B.b===B.e&&B.e===B.h&&B.b===n||B.c===B.f&&B.f===B.i&&B.c===n||B.a===B.e&&B.e===B.i&&B.a===n||B.c===B.e&&B.e===B.g&&B.c===n?(v=!0,N(!0)):"z"!==B.a&&"z"!==B.b&&"z"!==B.c&&"z"!==B.d&&"z"!==B.e&&"z"!==B.f&&"z"!==B.g&&"z"!==B.h&&"z"!==B.i&&alert("DRAW"))}var n},P=Object(n.useState)([]),D=Object(i.a)(P,2),I=D[0],F=D[1],J=function(){var e=Object(u.a)(s.a.mark((function e(){return s.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return e.next=2,b.a.get("http://localhost:3001/v1/records").then((function(e){return e.data})).then((function(e){var t=e.records.map((function(e){return" Name: ".concat(e.name," , Date: ").concat(e.date," ")}));F(t)}));case 2:case"end":return e.stop()}}),e)})));return function(){return e.apply(this,arguments)}}();return c.a.createElement(c.a.Fragment,null,c.a.createElement("h1",null,"Tic Tac Toe"),c.a.createElement("div",{id:"controlButtons"},c.a.createElement("button",{className:"b",onClick:function(){T(h-1)}},"\u2190 Undo"),c.a.createElement("button",{className:"b",onClick:Object(u.a)(s.a.mark((function e(){return s.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:b.a.delete("http://localhost:3001/v1/game"),E(0),o(!0),W(y),v=!1;case 5:case"end":return e.stop()}}),e)})))},"New Game"),c.a.createElement("button",{className:"b",onClick:function(){T(h+1)}},"Forward \u2192")),c.a.createElement("div",{className:"App"},c.a.createElement("button",{className:"griditem",id:"a",onClick:A},c.a.createElement(m,{value:B.a})),c.a.createElement("button",{className:"griditem",id:"b",onClick:A},c.a.createElement(m,{value:B.b})),c.a.createElement("button",{className:"griditem",id:"c",onClick:A},c.a.createElement(m,{value:B.c})),c.a.createElement("button",{className:"griditem",id:"d",onClick:A},c.a.createElement(m,{value:B.d})),c.a.createElement("button",{className:"griditem",id:"e",onClick:A},c.a.createElement(m,{value:B.e})),c.a.createElement("button",{className:"griditem",id:"f",onClick:A},c.a.createElement(m,{value:B.f})),c.a.createElement("button",{className:"griditem",id:"g",onClick:A},c.a.createElement(m,{value:B.g})),c.a.createElement("button",{className:"griditem",id:"h",onClick:A},c.a.createElement(m,{value:B.h})),c.a.createElement("button",{className:"griditem",id:"i",onClick:A},c.a.createElement(m,{value:B.i}))),c.a.createElement("button",{className:"b",onClick:Object(u.a)(s.a.mark((function e(){return s.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:J(),j(!0);case 2:case"end":return e.stop()}}),e)})))},"show records"),c.a.createElement("button",{className:"b",onClick:function(){e()}},"UPDATE"),c.a.createElement(p.a,{"aria-labelledby":"hi","aria-describedby":"description",open:w,className:"modal",onClose:function(){N(!1)},closeAfterTransition:!0,BackdropProps:{timeout:500}},c.a.createElement(f.a,{in:w},c.a.createElement("div",{className:"paper"},c.a.createElement("h2",null,"Player ",r?"O":"X"," Won!"),c.a.createElement("p",null,"Please Enter Your Name: "),c.a.createElement("input",{id:"inputWinner"}),c.a.createElement("button",{onClick:function(){if(document.getElementById("inputWinner").value){var e={name:document.getElementById("inputWinner").value,date:new Date};b.a.post("http://localhost:3001/v1/records",e)}N(!1)}},"Submit")))),c.a.createElement(p.a,{"aria-labelledby":"hi","aria-describedby":"description",open:C,className:"modal",onClose:function(){j(!1)},closeAfterTransition:!0,BackdropProps:{timeout:500}},c.a.createElement(f.a,{in:C},c.a.createElement("div",{className:"paper"},I.map((function(e,t){return c.a.createElement("div",{key:t},e)}))))))};Boolean("localhost"===window.location.hostname||"[::1]"===window.location.hostname||window.location.hostname.match(/^127(?:\.(?:25[0-5]|2[0-4][0-9]|[01]?[0-9][0-9]?)){3}$/));o.a.render(c.a.createElement(c.a.StrictMode,null,c.a.createElement(h,null)),document.getElementById("root")),"serviceWorker"in navigator&&navigator.serviceWorker.ready.then((function(e){e.unregister()})).catch((function(e){console.error(e.message)}))}},[[30,1,2]]]);
//# sourceMappingURL=main.4ce5f30a.chunk.js.map