(this.webpackJsonpmaze=this.webpackJsonpmaze||[]).push([[0],{25:function(e,t,a){},26:function(e,t,a){},33:function(e,t,a){"use strict";a.r(t);var c=a(0),i=a(13),l=a.n(i),r=(a(25),a(3)),n=(a(26),a(9)),s=a(1),o=function(){return Object(s.jsxs)("div",{className:"main",children:[Object(s.jsxs)("h1",{className:"textShadow",children:["\u0426\u0438\u0444\u0440\u043e\u0432\u043e\u0439 ",Object(s.jsx)("br",{})," \u041b\u0430\u0431\u0438\u0440\u0438\u043d\u0442"]}),Object(s.jsx)(n.b,{to:"/main",className:"linkStart",children:"\u041d\u0430\u0447\u0430\u0442\u044c \u0438\u0433\u0440\u0443"})]})},v=function(){return Object(s.jsx)("section",{className:"win",children:Object(s.jsxs)("div",{className:" win__main",children:[Object(s.jsx)("h1",{className:"title",children:"\u0412\u044b \u0432\u044b\u0448\u043b\u0438 \u0438\u0437 \u043b\u0430\u0431\u0438\u0440\u0438\u043d\u0442\u0430!!!"}),Object(s.jsx)(n.b,{to:"/main",className:"linkStart",children:"\u0418\u0433\u0440\u0430\u0442\u044c \u0435\u0449\u0435 \u0440\u0430\u0437"})]})})},j=function(){return Object(s.jsxs)("section",{className:"over",children:[Object(s.jsx)("h1",{className:"title",children:"\u0412\u044b \u0432\u044b\u0431\u0440\u0430\u043b\u0438 \u043d\u0435\u0432\u0435\u0440\u043d\u044b\u0439 \u043f\u0443\u0442\u044c \u0438 \u0437\u0430\u0448\u043b\u0438 \u0432 \u0442\u0443\u043f\u0438\u043a!"}),Object(s.jsx)(n.b,{to:"/main",className:"linkStart",children:"\u0418\u0433\u0440\u0430\u0442\u044c \u0435\u0449\u0435 \u0440\u0430\u0437"})]})},u=a(15),d=a(12),b=a(7),m="START-GAME",C="IS-OVER",O="STEP-TOP",x="STEP-RIGHT",h="STEP-BOTTOM",f="STEP-LEFT",p={chooseMatrices:function(){return Math.floor(Math.random()*this.matrices.length)},matrices:[[[33,34,33,31,33,32,31,26,25,26,27,26],[34,32,31,30,31,26,25,24,23,24,25,27],[17,15,14,29,28,27,6,23,22,23,24,26],[16,14,13,12,11,10,5,6,21,24,25,27],[11,9,8,7,8,9,4,5,20,19,18,20],[14,10,5,6,3,2,3,4,5,18,17,19],[13,11,4,3,2,1,2,3,6,7,16,18],[10,8,7,8,3,2,5,4,5,14,15,17],[9,7,6,5,4,7,6,7,12,13,14,16],[12,10,7,6,5,6,8,10,11,16,15,17],[11,9,8,7,6,7,8,9,18,17,16,18],[10,11,10,9,8,10,12,11,20,19,18,17]],[[25,24,23,24,25,20,21,19,21,22,23,24],[24,22,21,8,7,8,19,18,13,12,13,25],[25,23,20,7,6,7,18,17,14,11,14,24],[26,18,19,6,5,6,17,16,15,10,15,23],[27,17,16,17,4,3,4,5,6,9,16,22],[23,18,15,16,11,2,3,4,7,8,9,21],[24,19,14,13,10,1,4,5,8,9,12,20],[23,18,15,12,9,8,7,6,7,10,11,21],[22,17,16,11,10,9,8,13,12,11,20,22],[23,16,13,12,13,14,15,14,17,18,19,23],[24,15,14,20,18,17,16,15,16,17,18,24],[25,24,23,22,23,21,20,21,22,23,24,25]],[[19,20,19,18,21,22,23,24,25,26,27,26],[20,18,17,16,20,6,7,8,9,10,24,25],[21,19,16,15,16,5,6,7,8,9,10,24],[20,18,17,14,5,4,5,6,7,8,9,23],[19,17,12,13,14,3,4,5,6,7,8,22],[30,12,11,10,9,2,9,8,9,10,9,21],[31,13,12,7,8,1,2,7,12,11,10,20],[32,30,13,6,3,2,5,6,13,14,19,21],[31,29,14,5,4,3,4,5,6,15,18,20],[20,28,7,6,25,22,21,20,7,16,17,19],[29,27,26,25,24,23,24,19,18,17,18,20],[28,29,28,27,25,27,26,27,28,29,30,31]]]},T={activeCell:[6,5],matrix:[],start:!0,distanceTraveled:[]},w=function(e,t){var a=t.chooseMatrices(),c=JSON.stringify(t.matrices[a]);return c=JSON.parse(c),Object(b.a)(Object(b.a)({},e),{},{activeCell:[6,5],matrix:c,start:!0,distanceTraveled:[[6,5]]})},N=function(){var e=arguments.length>0&&void 0!==arguments[0]?arguments[0]:T,t=arguments.length>1?arguments[1]:void 0;switch(t.type){case O:return e.matrix[e.activeCell[0]-1][e.activeCell[1]]===e.matrix[e.activeCell[0]][e.activeCell[1]]+1?Object(b.a)(Object(b.a)({},e),{},{activeCell:[e.activeCell[0]-1,e.activeCell[1]],distanceTraveled:[].concat(Object(d.a)(e.distanceTraveled),[[e.activeCell[0]-1,e.activeCell[1]]])}):e;case x:return e.matrix[e.activeCell[0]][e.activeCell[1]+1]===e.matrix[e.activeCell[0]][e.activeCell[1]]+1?Object(b.a)(Object(b.a)({},e),{},{activeCell:[e.activeCell[0],e.activeCell[1]+1],distanceTraveled:[].concat(Object(d.a)(e.distanceTraveled),[[e.activeCell[0],e.activeCell[1]+1]])}):e;case h:return e.matrix[e.activeCell[0]+1][e.activeCell[1]]===e.matrix[e.activeCell[0]][e.activeCell[1]]+1?Object(b.a)(Object(b.a)({},e),{},{activeCell:[e.activeCell[0]+1,e.activeCell[1]],distanceTraveled:[].concat(Object(d.a)(e.distanceTraveled),[[e.activeCell[0]+1,e.activeCell[1]]])}):e;case f:return e.matrix[e.activeCell[0]][e.activeCell[1]-1]===e.matrix[e.activeCell[0]][e.activeCell[1]]+1?Object(b.a)(Object(b.a)({},e),{},{activeCell:[e.activeCell[0],e.activeCell[1]-1],distanceTraveled:[].concat(Object(d.a)(e.distanceTraveled),[[e.activeCell[0],e.activeCell[1]-1]])}):e;case m:return w(e,p);case C:return e.matrix[e.activeCell[0]][e.activeCell[1]-1]!==e.matrix[e.activeCell[0]][e.activeCell[1]]+1&&e.matrix[e.activeCell[0]][e.activeCell[1]+1]!==e.matrix[e.activeCell[0]][e.activeCell[1]]+1&&e.matrix[e.activeCell[0]-1][e.activeCell[1]]!==e.matrix[e.activeCell[0]][e.activeCell[1]]+1&&e.matrix[e.activeCell[0]+1][e.activeCell[1]]!==e.matrix[e.activeCell[0]][e.activeCell[1]]+1?Object(b.a)(Object(b.a)({},e),{},{start:!1}):e}return w(e,p)},S=Object(r.e)((function(e){var t=function(t,a){return e.distanceTraveled.some((function(e){return e[0]===t&&e[1]===a}))?"cell activeCell":"cell"};Object(c.useEffect)((function(){(e.activeCell.includes(0)||e.activeCell.includes(11))&&(e.startGame(),e.history.push("/win")),e.start||setTimeout((function(){e.startGame(),e.history.push("/gameOver")}),3e3),e.isOver()}),[e.activeCell,e.start]);var a=e.matrix.map((function(e,a){return Object(s.jsx)("tr",{children:e.map((function(e,c){return Object(s.jsx)("td",{className:t(a,c),children:e},"_".concat(a,"_").concat(c))}))},"_".concat(a))}));return Object(s.jsxs)("div",{className:"main",children:[Object(s.jsx)("table",{className:"table",children:Object(s.jsx)("tbody",{children:a})}),Object(s.jsxs)("section",{className:"arrows",children:[Object(s.jsx)("button",{className:"arrow arrow-top",onClick:e.takeStepUp,children:"\u27a4"}),Object(s.jsx)("button",{className:"arrow arrow-right",onClick:e.takeStepRight,children:"\u27a4"}),Object(s.jsx)("button",{className:"arrow arrow-bottom",onClick:e.takeStepDown,children:"\u27a4"}),Object(s.jsx)("button",{className:"arrow arrow-left",onClick:e.takeStepLeft,children:"\u27a4"})]})]})})),k=Object(u.b)((function(e){return{activeCell:e.reducer.activeCell,matrix:e.reducer.matrix,start:e.reducer.start,distanceTraveled:e.reducer.distanceTraveled}}),{takeStepUp:function(){return{type:O}},takeStepRight:function(){return{type:x}},takeStepDown:function(){return{type:h}},takeStepLeft:function(){return{type:f}},startGame:function(){return{type:m}},isOver:function(){return{type:C}}})(S),g=function(){return Object(s.jsxs)("div",{className:"App",children:[Object(s.jsx)(r.a,{exact:!0,path:["/","/home"],render:function(){return Object(s.jsx)(o,{})}}),Object(s.jsx)(r.a,{path:"/main",render:function(){return Object(s.jsx)(k,{})}}),Object(s.jsx)(r.a,{path:"/win",render:function(){return Object(s.jsx)(v,{})}}),Object(s.jsx)(r.a,{path:"/gameOver",render:function(){return Object(s.jsx)(j,{})}})]})},y=function(e){e&&e instanceof Function&&a.e(3).then(a.bind(null,34)).then((function(t){var a=t.getCLS,c=t.getFID,i=t.getFCP,l=t.getLCP,r=t.getTTFB;a(e),c(e),i(e),l(e),r(e)}))},E=a(20),P=Object(E.a)({reducer:N}),M=Object(E.b)(P);window.store=M;var F=M;l.a.render(Object(s.jsx)(n.a,{basename:"/maze",children:Object(s.jsx)(u.a,{store:F,children:Object(s.jsx)(g,{})})}),document.getElementById("root")),y()}},[[33,1,2]]]);
//# sourceMappingURL=main.d77311c0.chunk.js.map