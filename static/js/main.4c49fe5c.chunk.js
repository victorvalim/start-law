(this["webpackJsonpstart-law"]=this["webpackJsonpstart-law"]||[]).push([[0],{206:function(e,t,n){},210:function(e,t,n){},380:function(e,t,n){"use strict";n.r(t);var a=n(1),i=n(53),c=n.n(i),r=(n(206),n(45)),o=n(67),s=n(171),l=n(172),u=n(44),d=n(10),j=n(19),b=(n(210),n(27)),f=n(173),p=n.n(f),h=n(28),O=n(381),x=n(387),g=n(85),m=n(82),v=n(186),y=n(100),w=n(3),C=["#8884d8","#00C49F","#FFBB28","#FF8042"];var I=function(e){var t=e.data;return Object(w.jsx)(O.a,{height:"90%",width:"90%",children:Object(w.jsxs)(x.a,{margin:{top:0,right:0,left:0,bottom:0},children:[Object(w.jsx)(g.a,{}),Object(w.jsx)(m.a,{verticalAlign:"top",height:50}),Object(w.jsx)(v.a,{data:t,dataKey:"value",nameKey:"name",fill:"#8884d8",children:t.map((function(e,t){return Object(w.jsx)(y.a,{fill:C[t]},"cell-".concat(t))}))})]})})},A=n(388),E=n(385),S=n(191),F=n(196),k=["#8884d8","#00C49F","#FFBB28","#FF8042","#0088FE"];var T,L,R,D=function(e){var t=e.data;return Object(w.jsx)(O.a,{height:"70%",width:"100%",children:Object(w.jsxs)(A.a,{barGap:0,margin:{top:0,right:22,left:0,bottom:0},barSize:30,maxBarSize:30,data:t,children:[Object(w.jsx)(E.a,{}),Object(w.jsx)(g.a,{}),Object(w.jsx)(S.a,{dataKey:"name"}),Object(w.jsx)(F.a,{dataKey:"value",fill:"#8884d8",children:t.map((function(e,t){return Object(w.jsx)(y.a,{fill:k[t]},"cell-".concat(t))}))})]})})},z=n.p+"static/media/start4.fe1ee487.jpg",H=n.p+"static/media/add.acf3a340.svg",M=n(50),B=n(124),N=n(21),U=n.n(N),P=n(46),_=n(34),K=n.n(_),W=[{name:"Abertura",value:1},{name:"An\xe1lise Inicial",value:0},{name:"Relat\xf3rio Inicial",value:0},{name:"Relat\xf3rio Final",value:0},{name:"Conclu\xedda",value:0}],G=["Contratos","Esclarecimentos","Investimentos"],J=["Contratos","Esclarecimentos","Investimentos","Outros"],Y=function(){return{type:"LOADER"}},Z=function(e){return{type:"SOLICITATION",payload:e}},V=function(e){return{type:"STATUS",payload:e}},q=function(e){return{type:"USERS",payload:e}},Q=function(e){return{type:"USER_CLIENT",payload:e}},X=function(e){return{type:"FILTERED",payload:e}},$=function(e){return{type:"SHOULD_EDIT",payload:e}},ee=function(e){return function(){var e=Object(P.a)(U.a.mark((function e(t){var n,a,i,c,r,o,s,l;return U.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return e.next=2,K.a.get("https://my-json-server.typicode.com/victorvalim/banco-de-dados/solicitacoes");case 2:return n=e.sent,a=n.data,e.next=6,K.a.get("https://my-json-server.typicode.com/victorvalim/banco-de-dados/usuarios");case 6:i=e.sent,c=a.map((function(e){return null!==e.categoria&&G.includes(e.categoria)?e.categoria:"Outros"})),r=J.map((function(e){return{name:e,value:c.filter((function(t){return t===e})).length}})),o=a.map((function(e){return{name:e.status,value:1}})),s=W.map((function(e){return Object(d.a)(Object(d.a)({},e),{},{value:o.filter((function(t){return t.name==e.name})).length})})),l=a.map((function(e){return e.cliente})).concat(i.data.map((function(e){return e.nome}))).filter((function(e,t,n){return n.indexOf(e)===t})),t(Z(r)),t(V(s)),t(q(i.data)),t(Q(l));case 16:case"end":return e.stop()}}),e)})));return function(t){return e.apply(this,arguments)}}()},te={userActions:{defaultAction:function(){return{type:"DEFAULT"}},fetchAPI:function(e){return function(){var e=Object(P.a)(U.a.mark((function e(t){return U.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:t(ee()),setTimeout((function(){return t({type:"LOADER"})}),3e3);case 2:case"end":return e.stop()}}),e)})));return function(t){return e.apply(this,arguments)}}()},response:function(e){return{type:"RESPONSE",payload:e}},loader:Y,solicitation:Z,innerSize:function(e){return{type:"INNER_SIZE",payload:e}},users:q,postAPI:function(e){return function(){var t=Object(P.a)(U.a.mark((function t(n){var a,i,c;return U.a.wrap((function(t){for(;;)switch(t.prev=t.next){case 0:return a=new Date,i="".concat(a.getDate(),"/").concat(a.getMonth()+1,"/").concat(a.getFullYear()),c={status:"Abertura",titulo:e.titulo,atendente:e.atendente,cliente:e.cliente,categoria:e.categoria,dataInicial:i},t.next=5,K.a.post("http://localhost:3300/solicitacoes",Object(d.a)({},c));case 5:n(ee());case 6:case"end":return t.stop()}}),t)})));return function(e){return t.apply(this,arguments)}}()},postUser:function(e){return function(){var t=Object(P.a)(U.a.mark((function t(n){return U.a.wrap((function(t){for(;;)switch(t.prev=t.next){case 0:return t.next=2,K.a.post("http://localhost:3300/usuarios",Object(d.a)({},e));case 2:n(ee());case 3:case"end":return t.stop()}}),t)})));return function(e){return t.apply(this,arguments)}}()},fullSolicitation:function(e){return{type:"FULL_SOLICITATION",payload:e}},filter:function(e){return function(){var t=Object(P.a)(U.a.mark((function t(n){var a,i,c,r,o,s,l;return U.a.wrap((function(t){for(;;)switch(t.prev=t.next){case 0:return t.next=2,K.a.get("https://my-json-server.typicode.com/victorvalim/banco-de-dados/solicitacoes");case 2:return a=t.sent,i=a.data,c=i.map((function(e){return Object(d.a)(Object(d.a)({},e),{},{notFilteredCategory:e.categoria})})).map((function(e){return Object(d.a)(Object(d.a)({},e),{},{categoria:null!==e.categoria&&G.includes(e.categoria)?e.categoria:"Outros"})})),c=e.titulo?c.filter((function(t){return t.titulo.toLowerCase().includes(e.titulo.toLowerCase())})):c,c=e.id?c.filter((function(t){return t.id===+e.id})):c,c=e.status?c.filter((function(t){return t.status.includes(e.status)})):c,c=e.categoria?c.filter((function(t){return t.categoria.includes(e.categoria)})):c,c=e.autor?c.filter((function(t){return t.cliente.includes(e.autor)||t.atendente.includes(e.autor)})):c,n(X(c)),t.next=13,K.a.get("https://my-json-server.typicode.com/victorvalim/banco-de-dados/usuarios");case 13:r=t.sent,o=J.map((function(e){return{name:e,value:c.filter((function(t){return t.categoria===e})).length}})),s=c.map((function(e){return{name:e.status,value:1}})),l=W.map((function(e){return Object(d.a)(Object(d.a)({},e),{},{value:s.filter((function(t){return t.name==e.name})).length})})),n(Z(o)),n(V(l)),n(q(r.data));case 20:case"end":return t.stop()}}),t)})));return function(e){return t.apply(this,arguments)}}()},editInfoATM:$,edit:function(e){return function(){var t=Object(P.a)(U.a.mark((function t(n){var a,i,c;return U.a.wrap((function(t){for(;;)switch(t.prev=t.next){case 0:return a=new Date,i="".concat(a.getDate(),"/").concat(a.getMonth()+1,"/").concat(a.getFullYear()," (").concat(a.getMinutes(),":").concat(a.getSeconds(),")"),t.next=4,K.a.get("https://my-json-server.typicode.com/victorvalim/banco-de-dados/solicitacoes/".concat(e.id));case 4:return c=(c=t.sent).data,c=Object(d.a)(Object(d.a)(Object(d.a)({},c),e),{},{ultimaAtualizacao:i}),t.next=9,K.a.put("https://my-json-server.typicode.com/victorvalim/banco-de-dados/solicitacoes/".concat(e.id),Object(d.a)({},c));case 9:n(ee());case 10:case"end":return t.stop()}}),t)})));return function(e){return t.apply(this,arguments)}}()},deleteAction:function(e){return function(){var t=Object(P.a)(U.a.mark((function t(n){return U.a.wrap((function(t){for(;;)switch(t.prev=t.next){case 0:return t.next=2,K.a.delete("http://localhost:3300/solicitacoes/".concat(e));case 2:n(ee());case 3:case"end":return t.stop()}}),t)})));return function(e){return t.apply(this,arguments)}}()},editInfoData:function(e){return function(){var t=Object(P.a)(U.a.mark((function t(n){var a,i;return U.a.wrap((function(t){for(;;)switch(t.prev=t.next){case 0:return t.next=2,K.a.get("https://my-json-server.typicode.com/victorvalim/banco-de-dados/solicitacoes".concat(e));case 2:a=t.sent,i=a.data,n($(i));case 5:case"end":return t.stop()}}),t)})));return function(e){return t.apply(this,arguments)}}()}}},ne=h.b.div(T||(T=Object(b.a)(["\nwidth: 100%;\nheight: 100%;\nposition:fixed;\ndisplay:flex;\nflex-direction:column;\njustify-content:flex-start;\nalign-items:center;\nmargin:0;\nz-index:10;\n"]))),ae=h.b.div(L||(L=Object(b.a)(["\nbutton {\n    border-radius:5px;\n    opacity:0.4;\n    transition:2s;\n  }\n  button:enabled {\n    color:white;\n    border: 1.5px solid #1a73e8;\n    opacity:0.6;\n    background-color: #1a73e8;\n  }\nform{\n  display:flex;\n  flex-wrap:wrap;\n  justify-content:space-between;\n  align-items:flex-end;\n}\nmargin:0;\nwidth:70%;\nheight:20%;\nz-index:20000000;\nborder-radius:40px;\n\ninput {\n  margin\n  box-sizing: border-box;\n  border: 1px inset grey;\n  border-radius:5px;\n  padding:2px;\n}\nselect {\n  padding:2px;\n  box-sizing: border-box;\n  border: 1px inset grey;\n  border-radius:5px;\n}\n\n"]))),ie=h.b.div(R||(R=Object(b.a)(["\ndisplay:flex;\njustify-content:center;\nalign-items:baseline;\nwidth:100%;\nmargin:auto;\ncursor:pointer;\nsvg{\n  magin:0;\n}\n"])));var ce=function(e){var t=e.showModal,n=e.setShowModal,i=e.clickHandler,c=e.signHandler,o=e.setEdit,s=e.edit,l=(e.setEditInfo,Object(r.b)()),b=Object(r.c)((function(e){return e.userReducer})).editInfo,f=Object(a.useState)({}),p=Object(j.a)(f,2),h=(p[0],p[1],Object(a.useState)({})),O=Object(j.a)(h,2),x=O[0],g=O[1],m=Object(a.useState)({nome:""}),v=Object(j.a)(m,2),y=v[0],C=v[1],I=Object(a.useState)("cadastro"),A=Object(j.a)(I,2),E=A[0],S=A[1],F=Object(r.c)((function(e){return e.userReducer})).users;function k(e){var t=e.target,n=t.value,a=t.name;g((function(e){return Object(d.a)(Object(d.a)({},e),{},Object(u.a)({},a,n))}))}function T(e){var t=e.target,n=t.name,a=t.value;l(te.userActions.editInfoATM(Object(u.a)({},n,a)))}return Object(w.jsxs)(w.Fragment,{children:[t?Object(w.jsx)(ne,{children:Object(w.jsxs)(ae,{children:[Object(w.jsxs)(ie,{children:[Object(w.jsx)(M.c,{onClick:function(){g({}),S("cadastro")},size:25}),Object(w.jsx)(M.e,{onClick:function(){C({nome:""}),S("usuario")},size:25}),Object(w.jsx)(B.a,{onClick:function(){C({nome:""}),g({}),n((function(e){return!e}))},size:25})]}),"cadastro"===E?Object(w.jsxs)("form",{children:[Object(w.jsx)("input",{autoComplete:"off",onChange:k,name:"titulo",placeholder:"T\xcdTULO"}),Object(w.jsx)("input",{autoComplete:"off",onChange:k,name:"cliente",placeholder:"CLIENTE"}),Object(w.jsx)("input",{autoComplete:"off",onChange:k,name:"categoria",placeholder:"CATEGORIA"}),Object(w.jsxs)("select",{onChange:k,name:"atendente",children:[Object(w.jsx)("option",{value:"",disabled:!0,defaultValue:"",selected:!0,hidden:!0,children:"Atendente"}),F.map((function(e){return Object(w.jsx)("option",{value:e.nome,children:e.nome})}))]}),Object(w.jsx)("button",{onClick:function(){g({}),i(x)},type:"button",disabled:!(4===Object.values(x).length&&!Object.values(x).includes("")&&x.atendente!==x.cliente),children:"Enviar"})]}):Object(w.jsx)(w.Fragment,{children:Object(w.jsxs)(ie,{children:[Object(w.jsx)("input",{autoComplete:"off",onChange:function(e){return C(Object(u.a)({},e.target.name,e.target.value))},name:"nome",placeholder:"NOME"}),Object(w.jsx)("button",{onClick:function(){C({nome:""}),c(y)},type:"button",disabled:F.map((function(e){return e.nome})).includes(y.nome)||""===y.nome,children:"Enviar"})]})})]})}):null,s?Object(w.jsx)(ne,{children:Object(w.jsxs)(ae,{children:[Object(w.jsx)(ie,{children:Object(w.jsx)(B.a,{onClick:function(){return o((function(e){return!e}))},size:25})}),Object(w.jsxs)("form",{children:[Object(w.jsx)("input",{autoComplete:"off",onChange:T,value:b.titulo,name:"titulo",placeholder:b.titulo}),Object(w.jsxs)("select",{onChange:T,name:"atendente",children:[Object(w.jsx)("option",{value:"",disabled:!0,selected:!0,hidden:!0,children:"Atendente"}),F.map((function(e){return Object(w.jsx)("option",{value:e.nome,children:e.nome})}))]}),Object(w.jsx)("input",{autoComplete:"off",onChange:T,value:b.cliente,name:"cliente",placeholder:"CLIENTE"}),Object(w.jsxs)("select",{onChange:T,name:"status",children:[Object(w.jsx)("option",{value:"",disabled:!0,selected:!0,hidden:!0,children:"Status"}),Object(w.jsx)("option",{name:"Abertura",value:"Abertura",children:"Abertura"}),Object(w.jsx)("option",{name:"An\xe1lise Inicial",value:"An\xe1lise Inicial",children:"An\xe1lise Inicial"}),Object(w.jsx)("option",{name:"Relat\xf3rio Inicial",value:"Relat\xf3rio Inicial",children:"Relat\xf3rio Inicial"}),Object(w.jsx)("option",{name:"Relat\xf3rio Final",value:"Relat\xf3rio Final",children:"Relat\xf3rio Final"}),Object(w.jsx)("option",{name:"Conclu\xedda",value:"Conclu\xedda",children:"Conclu\xedda"})]}),Object(w.jsx)("input",{autoComplete:"off",onChange:T,value:b.categoria,name:"categoria"}),Object(w.jsx)("button",{onClick:function(){return e=b,o((function(e){return!e})),void l(te.userActions.edit(e));var e},type:"button",children:"Enviar"})]})]})}):null]})};var re,oe,se,le,ue,de,je,be=function(e){var t=e.dataBase,n=(e.isLoading,e.inputTable),a=e.userAndClient,i=e.editHandler,c=e.deleteHandler;return Object(w.jsx)(w.Fragment,{children:Object(w.jsxs)("table",{children:[Object(w.jsx)("thead",{children:Object(w.jsxs)("tr",{align:"left",children:[Object(w.jsxs)("th",{align:"left",children:[Object(w.jsx)(M.d,{}),Object(w.jsx)("input",{id:"funkystyling",onChange:n,name:"titulo",placeholder:"T\xedtulo",autoComplete:"off"})]}),Object(w.jsxs)("th",{align:"left",children:[Object(w.jsx)(M.d,{}),Object(w.jsx)("input",{type:"number",onChange:n,name:"id",placeholder:"ID",autoComplete:"off"})]}),Object(w.jsx)("th",{align:"left",children:Object(w.jsxs)("select",{onChange:n,name:"status",children:[Object(w.jsx)("option",{value:"",selected:!0,children:"N\xe3o conclu\xeddas"}),Object(w.jsx)("option",{name:"Abertura",value:"Abertura",children:"Abertura"}),Object(w.jsx)("option",{name:"An\xe1lise Inicial",value:"An\xe1lise Inicial",children:"An\xe1lise Inicial"}),Object(w.jsx)("option",{name:"Relat\xf3rio Final",value:"Relat\xf3rio Final",children:"Relat\xf3rio Final"}),Object(w.jsx)("option",{name:"Conclu\xedda",value:"Conclu\xedda",children:"Conclu\xedda"})]})}),Object(w.jsx)("th",{align:"left",children:Object(w.jsxs)("select",{onChange:n,name:"categoria",children:[Object(w.jsx)("option",{value:"",selected:!0,children:"Sem restri\xe7\xe3o"}),Object(w.jsx)("option",{value:"Contratos",children:"Contratos"}),Object(w.jsx)("option",{value:"Esclarecimentos",children:"Esclarecimentos"}),Object(w.jsx)("option",{value:"Investimentos",children:"Investimentos"}),Object(w.jsx)("option",{value:"Outros",children:"Outros"})]})}),Object(w.jsx)("th",{colSpan:"4",align:"left",children:Object(w.jsxs)("select",{onChange:n,name:"autor",children:[Object(w.jsx)("option",{value:"",selected:!0,children:"Autor/Cliente"}),a.map((function(e){return Object(w.jsx)("option",{value:e,children:e})}))]})})]})})," ",Object(w.jsx)("thead",{children:Object(w.jsxs)("tr",{children:[Object(w.jsx)("th",{align:"left",children:"T\xedtulo"}),Object(w.jsx)("th",{align:"left",children:"ID"}),Object(w.jsx)("th",{align:"left",children:"Status"}),Object(w.jsx)("th",{align:"left",children:"Categoria"}),Object(w.jsx)("th",{align:"left",children:"Data Inicial"}),Object(w.jsx)("th",{align:"left",children:"\xdaltima atualiza\xe7\xe3o"}),Object(w.jsx)("th",{align:"left",children:"Atendente"}),Object(w.jsx)("th",{align:"left",children:"Cliente"}),Object(w.jsx)("th",{align:"left",children:"Botao"})]})}),t.map((function(e){return Object(w.jsx)("tbody",{children:Object(w.jsxs)("tr",{align:"left",children:[Object(w.jsx)("td",{align:"left",children:e.titulo}),Object(w.jsx)("td",{align:"left",children:e.id}),Object(w.jsx)("td",{align:"left",children:e.status}),Object(w.jsx)("td",{align:"left",children:null!==e.categoria&&["Contratos","Esclarecimentos","Investimentos"].includes(e.categoria)?e.categoria:"Outros"}),Object(w.jsx)("td",{align:"left",children:e.dataInicial}),Object(w.jsx)("td",{align:"left",children:e.ultimaAtualizacao}),Object(w.jsx)("td",{align:"left",children:e.atendente}),Object(w.jsxs)("td",{align:"left",children:[e.cliente," "]}),Object(w.jsxs)("td",{children:[Object(w.jsx)(M.b,{onClick:function(){return i(e.id)},style:{cursor:"pointer",margin:"3px"}}),Object(w.jsx)(M.a,{onClick:function(){return c(e.id)},style:{cursor:"pointer",margin:"3px"}})]})]})})}))]})})},fe=h.b.div(re||(re=Object(b.a)(["\nwidth:95vw;\nmax-width:95vw;\nheight:100vh;\nmargin:auto;\n"]))),pe=h.b.div(oe||(oe=Object(b.a)(["\ndisplay:flex;\nflex-wrap: nowrap;\njustify-content:space-between;\nalign-items: center;\nheight:33vh;\n  svg {\n   margin:0;\n    padding:0;\n  }\n"]))),he=h.b.div(se||(se=Object(b.a)(["\ndisplay:flex;\njustify-content: space-around;\nalign-items: center;\nwidth:49%;\nheight:100%;\nbackground-color:rgb(252,252,252);\nborder-radius:25px;\nmargin:0;\n"]))),Oe=h.b.div(le||(le=Object(b.a)(["\ndisplay:flex;\njustify-content:flex-start;\nflex-wrap: nowrap;\nalign-items: center;\nwidth:100%;\nheight:5%;\npadding-top:20px;\n  a {\n    margin:0;\n    padding-top:5px;\n  }\n"]))),xe=h.b.button(ue||(ue=Object(b.a)(["\ncolor:inherit;\nbackground:rgb(244, 244, 250);\nborder:none;\nwidth:40px;\nheight:40px;\ncursor:pointer;\n"]))),ge=h.b.img(de||(de=Object(b.a)(["\nmargin:0;\nborder:none;\nborder-radius: 50px;\n"]))),me=h.b.div(je||(je=Object(b.a)(["\ndisplay:flex;\nwhite-space: wrap;\nheight:50%;\nmax-height:50%;\noverflow-y: scroll;\nwidth:100%;\nmax-width:100%;\nmargin:0;\n  table {\n    display: table;\n    border: 4px solid rgb(233, 236, 248);\n    width:100%;\n    max-width:100%;\n    border-radius:40px;\n    overflow:hidden\n    height:50%;\n    border-spacing: 20px;\n      input {\n        background: transparent;\n        border: none;\n\n      }\n      th {\n        font-weight:400;\n       opacity:0.6;\n      }\n    svg {\n      margin:0;\n      padding:0;\n    }\n  }\n}\n"])));var ve,ye=function(e){var t=e.isLoading,n=e.solicitation,a=e.status,i=e.functionModal,c=(e.innerSize,e.showModal),r=e.setShowModal,o=e.clickHandler,s=e.signHandler,l=(e.dataBase,e.inputTable),u=e.filtered,d=e.userAndClient,j=e.setEdit,b=e.edit,f=e.editInfo,h=e.setEditInfo,O=e.editHandler,x=e.editData,g=e.deleteHandler;return Object(w.jsx)(w.Fragment,{children:t?Object(w.jsx)(p.a,{type:"Bars",color:"#00BFFF",height:window.innerHeight,width:window.innerWidth}):Object(w.jsxs)(w.Fragment,{children:[Object(w.jsx)(ce,{showModal:c,setShowModal:r,clickHandler:o,signHandler:s}),Object(w.jsx)(ce,{edit:b,setEdit:j,setEditInfo:h,editInfo:f}),Object(w.jsxs)(fe,{children:[Object(w.jsxs)(Oe,{children:[Object(w.jsx)("a",{href:"https://thestartlaw.com/",target:"blank",children:Object(w.jsx)(ge,{src:z,width:53})}),Object(w.jsx)(xe,{onClick:i,children:Object(w.jsx)("img",{src:H,width:40})})]}),Object(w.jsxs)(pe,{children:[Object(w.jsx)(he,{children:Object(w.jsx)(D,{data:a})}),Object(w.jsx)(he,{children:Object(w.jsx)(I,{data:n})})]}),Object(w.jsx)(me,{children:Object(w.jsx)(be,{dataBase:u,isLoading:t,inputTable:l,userAndClient:d,editHandler:O,editData:x,deleteHandler:g})})]})]})})},we=Object(h.a)(ve||(ve=Object(b.a)(["\n\n* {\n\n  button{\n    cursor:pointer;\n\n  }\n\n  select {\n    background-color: transparent;\n    border:none;\n    align-items: start;\n      -webkit-appearance: none;\n    -moz-appearance : none;\n  }\n\n  select:focus {\n    outline:none !important;\n  }\n\n  input {\n    background-color: transparent;\n    border:none;\n  }\n  input:focus {\n    outline:none !important;\n  }\n  color:rgb(54,64,97);\n  box-sizing: border-box;\n  margin:2%;\n  font-family:  Arial;\n  font-size:15px;\n    ::-webkit-scrollbar {\n      display: none;\n    }\n  }\nhtml {\n\nbackground-color:rgb(231,232,238);\n  margin:10px;\n}\n\nbody{\n  border-radius: 40px;\n  background-color: rgb(244, 244, 250);\n\n}\n\nsvg.recharts-surface tspan {\nfont-size: 13px !important;\ncolor: black !important;\nfont-family:  Arial;\n}\n"])));var Ce=function(){var e=Object(a.useState)({atendente:"",cliente:"",id:"",status:"",titulo:"",autor:""}),t=Object(j.a)(e,2),n=t[0],i=t[1],c=Object(a.useState)(!1),o=Object(j.a)(c,2),s=o[0],l=o[1],b=Object(a.useState)({}),f=Object(j.a)(b,2),p=f[0],h=f[1],O=Object(a.useState)(!1),x=Object(j.a)(O,2),g=x[0],m=x[1],v=Object(r.b)(),y=Object(r.c)((function(e){return e.userReducer})),C=y.isLoading,I=y.dataBase,A=y.solicitation,E=y.status,S=(y.response,y.users,y.filtered),F=y.userAndClient;return Object(a.useEffect)((function(){v(te.userActions.fetchAPI(C)),v(te.userActions.innerSize({width:window.innerWidth,height:window.innerHeight}))}),[]),Object(a.useEffect)((function(){v(te.userActions.filter(n))}),[n,I,F]),Object(w.jsxs)(w.Fragment,{children:[Object(w.jsx)(ye,{isLoading:C,solicitation:A,status:E,functionModal:function(){m((function(e){return!e}))},showModal:g,setShowModal:m,clickHandler:function(e){v(te.userActions.postAPI(e)),m((function(e){return!e}))},signHandler:function(e){v(te.userActions.postUser(e)),m((function(e){return!e}))},dataBase:I,inputTable:function(e){var t=e.target,n=t.name,a=t.value;i((function(e){return Object(d.a)(Object(d.a)({},e),{},Object(u.a)({},n,a))}))},filtered:S,userAndClient:F,edit:s,setEdit:l,setEditInfo:h,editInfo:p,editHandler:function(e){l((function(e){return!e})),v(te.userActions.editInfoData(e))},deleteHandler:function(e){v(te.userActions.deleteAction(e))}}),Object(w.jsx)(we,{showModal:g})]})},Ie=function(e){e&&e instanceof Function&&n.e(3).then(n.bind(null,389)).then((function(t){var n=t.getCLS,a=t.getFID,i=t.getFCP,c=t.getLCP,r=t.getTTFB;n(e),a(e),i(e),c(e),r(e)}))},Ae=n(57),Ee={dataBase:[],isLoading:!0,solicitation:[],status:[],innerSize:{},users:[],filtered:[],userAndClient:[],editInfo:{}},Se=function(){var e=arguments.length>0&&void 0!==arguments[0]?arguments[0]:Ee,t=arguments.length>1?arguments[1]:void 0;switch(t.type){case"RESPONSE":return Object(d.a)(Object(d.a)({},e),{},{dataBase:Object(Ae.a)(t.payload)});case"SHOULD_EDIT":return Object(d.a)(Object(d.a)({},e),{},{editInfo:Object(d.a)(Object(d.a)({},e.editInfo),t.payload)});case"USER_CLIENT":return Object(d.a)(Object(d.a)({},e),{},{userAndClient:Object(Ae.a)(t.payload)});case"FILTERED":return Object(d.a)(Object(d.a)({},e),{},{filtered:Object(Ae.a)(t.payload)});case"USERS":return Object(d.a)(Object(d.a)({},e),{},{users:Object(Ae.a)(t.payload)});case"INNER_SIZE":return Object(d.a)(Object(d.a)({},e),{},{innerSize:Object(d.a)({},t.payload)});case"LOADER":return Object(d.a)(Object(d.a)({},e),{},{isLoading:!e.isLoading});case"SOLICITATION":return Object(d.a)(Object(d.a)({},e),{},{solicitation:Object(Ae.a)(t.payload)});case"STATUS":return Object(d.a)(Object(d.a)({},e),{},{status:Object(Ae.a)(t.payload)});default:return e}},Fe=Object(o.combineReducers)({userReducer:Se}),ke=Object(o.createStore)(Fe,Object(l.composeWithDevTools)(Object(o.applyMiddleware)(s.a)));c.a.render(Object(w.jsx)(r.a,{store:ke,children:Object(w.jsx)(Ce,{})}),document.getElementById("root")),Ie()}},[[380,1,2]]]);
//# sourceMappingURL=main.4c49fe5c.chunk.js.map