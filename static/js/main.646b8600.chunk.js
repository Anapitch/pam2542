(this.webpackJsonpcmpj=this.webpackJsonpcmpj||[]).push([[0],{103:function(e,t,a){},104:function(e,t,a){},128:function(e,t,a){"use strict";a.r(t);var n=a(1),l=a.n(n),i=a(11),r=a.n(i),c=(a(103),a(7)),o=a(57),u=a(42),m=a(32),s=[{title:"\u0e1a\u0e17\u0e17\u0e35\u0e48 1 Basic Computing",path:"/pam2542/page1",icon:l.a.createElement(u.a,null),cName:"nav-text"},{title:"\u0e1a\u0e17\u0e17\u0e35\u0e48 2 Linear Equations",path:"/pam2542/page2",cName:"nav-text"},{title:"\u0e1a\u0e17\u0e17\u0e35\u0e48 3 Interpolation",path:"/pam2542/page3",cName:"nav-text"},{title:"\u0e1a\u0e17\u0e17\u0e35\u0e48 4 Differentiation",path:"/pam2542/page4",cName:"nav-text"},{title:"\u0e1a\u0e17\u0e17\u0e35\u0e48 5 Integration",path:"/pam2542/page5",cName:"nav-text"},{title:"\u0e1a\u0e17\u0e17\u0e35\u0e48 6 Root-finding",path:"/pam2542/page6",cName:"nav-text"}],d=(a(104),a(0));var E=function(){var e=Object(n.useState)(!0),t=Object(c.a)(e,2),a=t[0],i=t[1],r=Object(n.useState)("/commath-project/".concat(window.location.href.split("/")[4])),E=Object(c.a)(r,2),b=E[0],v=E[1];console.log(window.location.href.split("/"));var g=function(){return i(!a)};return l.a.createElement(l.a.Fragment,null,l.a.createElement(d.b.Provider,{value:{color:"#fff"}},l.a.createElement("div",{className:"navbar"},l.a.createElement(m.b,{to:"#",className:"menu-bars"},l.a.createElement(o.a,{onClick:g}))),l.a.createElement("nav",{className:a?"nav-menu active":"nav-menu"},l.a.createElement("ul",{className:"nav-menu-items"},l.a.createElement("li",{className:"navbar-toggle"},l.a.createElement(m.b,{to:"#",className:"menu-bars"},l.a.createElement(u.b,{onClick:g}))),s.map((function(e,t){return l.a.createElement("li",{key:t,className:e.cName,onClick:function(t){return a=e.path,v(a),void console.log("id",b);var a}},l.a.createElement(m.b,{to:e.path},b==e.path?l.a.createElement(u.a,null):null,l.a.createElement("span",null,e.title)))}))))))},b=a(12),v=a(75),g=a(27),p=(a(4),a(168)),x=(a(19),a(188),a(173),a(174),a(177),a(171),a(54)),f=a(176);a(175),a(79),a(81),a(80),a(178),a(179),a(180),a(84),a(83),a(82),a(85),a(86),a(88),a(87),Object(p.a)((function(e){return{root:{display:"flex"},appBar:{zIndex:e.zIndex.drawer+1,transition:e.transitions.create(["width","margin"],{easing:e.transitions.easing.sharp,duration:e.transitions.duration.leavingScreen})},appBarShift:{marginLeft:300,width:"calc(100% - ".concat(300,"px)"),transition:e.transitions.create(["width","margin"],{easing:e.transitions.easing.sharp,duration:e.transitions.duration.enteringScreen})},menuButton:{marginRight:36},hide:{display:"none"},drawer:{width:300,flexShrink:0,whiteSpace:"nowrap"},drawerOpen:{width:300,transition:e.transitions.create("width",{easing:e.transitions.easing.sharp,duration:e.transitions.duration.enteringScreen})},drawerClose:Object(g.a)({transition:e.transitions.create("width",{easing:e.transitions.easing.sharp,duration:e.transitions.duration.leavingScreen}),overflowX:"hidden",width:e.spacing(7)+1},e.breakpoints.up("sm"),{width:e.spacing(9)+1}),toolbar:Object(v.a)({display:"flex",alignItems:"center",justifyContent:"flex-end",padding:e.spacing(0,1)},e.mixins.toolbar),content:{flexGrow:1,padding:e.spacing(3)}}}));var h=a(181),O=a(182),j=a(183),y=a(186),S=a(184),C=a(34),w=a.n(C),I="https://commath-phattaraphon.herokuapp.com";function k(){var e=Object(n.useState)(0x650e124ef1c7),t=Object(c.a)(e,2),a=t[0],i=t[1],r=Object(n.useState)(""),o=Object(c.a)(r,2),u=o[0],m=o[1];return l.a.createElement(l.a.Fragment,null,l.a.createElement("div",{class:"container text-center",style:{marginTop:"80px"}},l.a.createElement("h1",null,"\u0e1a\u0e17\u0e17\u0e35\u0e48 1 Basic Computing")),l.a.createElement("div",null,l.a.createElement(h.a,{style:{marginTop:"250px",width:"1200px"},class:"container text-center"},l.a.createElement(O.a,null,l.a.createElement(j.a,{container:!0,spacing:3,alignItems:"flex-end"},l.a.createElement(j.a,{item:!0,xs:12,sm:6,md:6},l.a.createElement(y.a,{id:"outlined-basic",value:a,label:"\u0e01\u0e23\u0e2d\u0e01\u0e40\u0e25\u0e02\u0e10\u0e32\u0e19\u0e2a\u0e2d\u0e07",variant:"outlined",onChange:function(e){return i(e.target.value)}})),l.a.createElement(j.a,{item:!0,xs:12,sm:6,md:6},l.a.createElement(y.a,{id:"outlined-read-only-input",label:"\u0e1c\u0e25\u0e25\u0e31\u0e1e\u0e18\u0e4c",value:""===u?"":u,InputProps:{readOnly:!0},variant:"outlined"}))))),l.a.createElement("div",{class:"container text-center"},l.a.createElement(S.a,{variant:"contained",color:"primary",disableElevation:!0,onClick:function(){var e;(e=a,w.a.get(I+"/b2s/".concat(e)).then((function(e){return console.log(e.data),e.data})).catch((function(e){console.log(e)}))).then((function(e){m(e)}))}},"generate"))))}function N(){var e=Object(n.useState)(6),t=Object(c.a)(e,2),a=t[0],i=t[1],r=Object(n.useState)(-4),o=Object(c.a)(r,2),u=o[0],m=o[1],s=Object(n.useState)(1),d=Object(c.a)(s,2),E=d[0],b=d[1],v=Object(n.useState)(-4),g=Object(c.a)(v,2),p=g[0],h=g[1],C=Object(n.useState)(6),k=Object(c.a)(C,2),N=k[0],T=k[1],P=Object(n.useState)(-4),B=Object(c.a)(P,2),F=B[0],A=B[1],L=Object(n.useState)(1),R=Object(c.a)(L,2),q=R[0],z=R[1],D=Object(n.useState)(-4),J=Object(c.a)(D,2),G=J[0],H=J[1],M=Object(n.useState)(6),X=Object(c.a)(M,2),K=X[0],Q=X[1],U=Object(n.useState)(-14),V=Object(c.a)(U,2),W=V[0],Y=V[1],Z=Object(n.useState)(36),$=Object(c.a)(Z,2),_=$[0],ee=$[1],te=Object(n.useState)(6),ae=Object(c.a)(te,2),ne=ae[0],le=ae[1],ie=Object(n.useState)(""),re=Object(c.a)(ie,2),ce=re[0],oe=re[1],ue=Object(n.useState)(""),me=Object(c.a)(ue,2),se=me[0],de=me[1],Ee=Object(n.useState)(""),be=Object(c.a)(Ee,2),ve=be[0],ge=be[1];return l.a.createElement(l.a.Fragment,null,l.a.createElement("div",{class:"container text-center",style:{marginTop:"80px"}},l.a.createElement("h1",null,"\u0e1a\u0e17\u0e17\u0e35\u0e48 2 Linear Equations")),l.a.createElement("div",null,l.a.createElement("div",{class:"container text-center",style:{marginTop:"50px"}},l.a.createElement(O.a,null,l.a.createElement(j.a,{container:!0,spacing:3,alignItems:"flex-end"},l.a.createElement(j.a,{item:!0,xs:12,sm:6,md:6},l.a.createElement(x.a,null,"\u0e2d\u0e30\u0e40\u0e23\u0e22\u0e4c A = 3 x 3"),l.a.createElement(j.a,{container:!0,spacing:3,alignItems:"flex-end"},l.a.createElement(j.a,{item:!0,xs:12,sm:4,md:4},l.a.createElement(y.a,{id:"outlined-basic",value:a,variant:"outlined",onChange:function(e){return i(e.target.value)}})),l.a.createElement(j.a,{item:!0,xs:12,sm:4,md:4},l.a.createElement(y.a,{id:"outlined-basic",value:u,variant:"outlined",onChange:function(e){return m(e.target.value)}})),l.a.createElement(j.a,{item:!0,xs:12,sm:4,md:4},l.a.createElement(y.a,{id:"outlined-basic",value:E,variant:"outlined",onChange:function(e){return b(e.target.value)}})),l.a.createElement(j.a,{item:!0,xs:12,sm:4,md:4},l.a.createElement(y.a,{id:"outlined-basic",value:p,variant:"outlined",onChange:function(e){return h(e.target.value)}})),l.a.createElement(j.a,{item:!0,xs:12,sm:4,md:4},l.a.createElement(y.a,{id:"outlined-basic",value:N,variant:"outlined",onChange:function(e){return T(e.target.value)}})),l.a.createElement(j.a,{item:!0,xs:12,sm:4,md:4},l.a.createElement(y.a,{id:"outlined-basic",value:F,variant:"outlined",onChange:function(e){return A(e.target.value)}})),l.a.createElement(j.a,{item:!0,xs:12,sm:4,md:4},l.a.createElement(y.a,{id:"outlined-basic",value:q,variant:"outlined",onChange:function(e){return z(e.target.value)}})),l.a.createElement(j.a,{item:!0,xs:12,sm:4,md:4},l.a.createElement(y.a,{id:"outlined-basic",value:G,variant:"outlined",onChange:function(e){return H(e.target.value)}})),l.a.createElement(j.a,{item:!0,xs:12,sm:4,md:4},l.a.createElement(y.a,{id:"outlined-basic",value:K,variant:"outlined",onChange:function(e){return Q(e.target.value)}})))),l.a.createElement(j.a,{item:!0,xs:12,sm:6,md:6},l.a.createElement(x.a,null,"\u0e2d\u0e30\u0e40\u0e23\u0e22\u0e4c B"),l.a.createElement(j.a,{container:!0,spacing:3,alignItems:"flex-end"},l.a.createElement(j.a,{item:!0,xs:12,sm:4,md:4},l.a.createElement(y.a,{id:"outlined-basic",value:W,variant:"outlined",onChange:function(e){return Y(e.target.value)}})),l.a.createElement(j.a,{item:!0,xs:12,sm:4,md:4},l.a.createElement(y.a,{id:"outlined-basic",value:_,variant:"outlined",onChange:function(e){return ee(e.target.value)}})),l.a.createElement(j.a,{item:!0,xs:12,sm:4,md:4},l.a.createElement(y.a,{id:"outlined-basic",value:ne,variant:"outlined",onChange:function(e){return le(e.target.value)}})))),l.a.createElement(j.a,{item:!0,xs:12,sm:12,md:12},l.a.createElement(f.a,null),l.a.createElement(x.a,{style:{marginTop:"80px"}},"\u0e1c\u0e25\u0e25\u0e31\u0e1e\u0e18\u0e4c"),l.a.createElement(j.a,{container:!0,spacing:3,alignItems:"flex-end"},l.a.createElement(j.a,{item:!0,xs:12,sm:4,md:4},l.a.createElement(y.a,{id:"outlined-read-only-input",label:"x0",value:""===ce?"":ce,InputProps:{readOnly:!0},variant:"outlined"})),l.a.createElement(j.a,{item:!0,xs:12,sm:4,md:4},l.a.createElement(y.a,{id:"outlined-read-only-input",label:"x1",value:""===se?"":se,InputProps:{readOnly:!0},variant:"outlined"})),l.a.createElement(j.a,{item:!0,xs:12,sm:4,md:4},l.a.createElement(y.a,{id:"outlined-read-only-input",label:"x2",value:""===ve?"":ve,InputProps:{readOnly:!0},variant:"outlined"})))))),l.a.createElement("div",{class:"container text-center"},l.a.createElement(S.a,{variant:"contained",color:"primary",disableElevation:!0,onClick:function(){(function(e){return w.a.post(I+"/elimination",e).then((function(e){return console.log(e.data),e.data})).catch((function(e){console.log(e)}))})({A:[[a,u,E],[p,N,F],[q,G,K]],b:[W,_,ne]}).then((function(e){oe(e[0]),de(e[1]),ge(e[2]),console.log(e)}))}},"generate")))))}var T=a(185);function P(){var e=Object(n.useState)(5),t=Object(c.a)(e,2),a=t[0],i=t[1],r=Object(n.useState)(0),o=Object(c.a)(r,2),u=o[0],m=o[1],s=Object(n.useState)(8),d=Object(c.a)(s,2),E=d[0],b=d[1],v=Object(n.useState)(14),g=Object(c.a)(v,2),p=g[0],x=g[1],f=Object(n.useState)(20),h=Object(c.a)(f,2),C=h[0],k=h[1],N=Object(n.useState)(23),P=Object(c.a)(N,2),B=P[0],F=P[1],A=Object(n.useState)(30),L=Object(c.a)(A,2),R=L[0],q=L[1],z=Object(n.useState)(0),D=Object(c.a)(z,2),J=D[0],G=D[1],H=Object(n.useState)(50),M=Object(c.a)(H,2),X=M[0],K=M[1],Q=Object(n.useState)(96),U=Object(c.a)(Q,2),V=U[0],W=U[1],Y=Object(n.useState)(110),Z=Object(c.a)(Y,2),$=Z[0],_=Z[1],ee=Object(n.useState)(100),te=Object(c.a)(ee,2),ae=te[0],ne=te[1],le=Object(n.useState)(86),ie=Object(c.a)(le,2),re=ie[0],ce=ie[1],oe=Object(n.useState)(""),ue=Object(c.a)(oe,2),me=ue[0],se=ue[1];return l.a.createElement(l.a.Fragment,null,l.a.createElement("div",{class:"container text-center",style:{marginTop:"80px"}},l.a.createElement("h1",null,"\u0e1a\u0e17\u0e17\u0e35\u0e48 3 Interpolation")),l.a.createElement("div",{class:"container text-center",style:{marginTop:"80px"}},l.a.createElement(O.a,null,l.a.createElement(j.a,{container:!0,spacing:3,alignItems:"flex-end"},l.a.createElement(j.a,{item:!0,xs:12,sm:12,md:12},l.a.createElement(y.a,{id:"outlined-basic",label:"t",value:a,variant:"outlined",onChange:function(e){return i(e.target.value)}})),l.a.createElement(j.a,{item:!0,xs:12,sm:2,md:2},l.a.createElement(y.a,{id:"outlined-basic",label:"x1",value:u,variant:"outlined",onChange:function(e){return m(e.target.value)}})),l.a.createElement(j.a,{item:!0,xs:12,sm:2,md:2},l.a.createElement(y.a,{id:"outlined-basic",label:"x2",value:E,variant:"outlined",onChange:function(e){return b(e.target.value)}})),l.a.createElement(j.a,{item:!0,xs:12,sm:2,md:2},l.a.createElement(y.a,{id:"outlined-basic",label:"x3",value:p,variant:"outlined",onChange:function(e){return x(e.target.value)}})),l.a.createElement(j.a,{item:!0,xs:12,sm:2,md:2},l.a.createElement(y.a,{id:"outlined-basic",label:"x4",value:C,variant:"outlined",onChange:function(e){return k(e.target.value)}})),l.a.createElement(j.a,{item:!0,xs:12,sm:2,md:2},l.a.createElement(y.a,{id:"outlined-basic",label:"x5",value:B,variant:"outlined",onChange:function(e){return F(e.target.value)}})),l.a.createElement(j.a,{item:!0,xs:12,sm:2,md:2},l.a.createElement(y.a,{id:"outlined-basic",label:"x6",value:R,variant:"outlined",onChange:function(e){return q(e.target.value)}})),l.a.createElement(j.a,{item:!0,xs:12,sm:2,md:2},l.a.createElement(y.a,{id:"outlined-basic",label:"y1",value:J,variant:"outlined",onChange:function(e){return G(e.target.value)}})),l.a.createElement(j.a,{item:!0,xs:12,sm:2,md:2},l.a.createElement(y.a,{id:"outlined-basic",label:"y2",value:X,variant:"outlined",onChange:function(e){return K(e.target.value)}})),l.a.createElement(j.a,{item:!0,xs:12,sm:2,md:2},l.a.createElement(y.a,{id:"outlined-basic",label:"y3",value:V,variant:"outlined",onChange:function(e){return W(e.target.value)}})),l.a.createElement(j.a,{item:!0,xs:12,sm:2,md:2},l.a.createElement(y.a,{id:"outlined-basic",label:"y4",value:$,variant:"outlined",onChange:function(e){return _(e.target.value)}})),l.a.createElement(j.a,{item:!0,xs:12,sm:2,md:2},l.a.createElement(y.a,{id:"outlined-basic",label:"y5",value:ae,variant:"outlined",onChange:function(e){return ne(e.target.value)}})),l.a.createElement(j.a,{item:!0,xs:12,sm:2,md:2},l.a.createElement(y.a,{id:"outlined-basic",label:"y6",value:re,variant:"outlined",onChange:function(e){return ce(e.target.value)}})),l.a.createElement(j.a,{item:!0,xs:12,sm:12,md:12},l.a.createElement(y.a,{style:{width:"350px"},id:"outlined-read-only-input",label:"\u0e1c\u0e25\u0e25\u0e31\u0e1e\u0e18\u0e4c",value:""===me?"":me,InputProps:{readOnly:!0},variant:"outlined"})))),l.a.createElement(T.a,null),l.a.createElement("div",{class:"container text-center"},l.a.createElement(S.a,{variant:"contained",color:"primary",disableElevation:!0,onClick:function(){(function(e){return w.a.post(I+"/interpolation",e).then((function(e){return console.log(e.data),e.data})).catch((function(e){console.log(e)}))})({x:a,xi:[u,E,p,C,B,R],yi:[J,X,V,$,ae,re]}).then((function(e){se("\u0e27\u0e34\u0e19\u0e32\u0e17\u0e35\u0e17\u0e35\u0e48 ".concat(a," \u0e08\u0e30\u0e21\u0e35\u0e04\u0e27\u0e32\u0e21\u0e40\u0e23\u0e47\u0e27\u0e1b\u0e23\u0e30\u0e21\u0e32\u0e13 ").concat(e))}))}},"generate"))))}function B(){var e=Object(n.useState)(.64),t=Object(c.a)(e,2),a=t[0],i=t[1],r=Object(n.useState)(2),o=Object(c.a)(r,2),u=o[0],m=o[1],s=Object(n.useState)(""),d=Object(c.a)(s,2),E=d[0],b=d[1];return l.a.createElement(l.a.Fragment,null,l.a.createElement("div",{class:"container text-center",style:{marginTop:"80px"}},l.a.createElement("h1",null,"\u0e1a\u0e17\u0e17\u0e35\u0e48 4 Differentiation")),l.a.createElement("div",{class:"container text-center",style:{marginTop:"120px"}},l.a.createElement(O.a,null,l.a.createElement(j.a,{container:!0,spacing:3,alignItems:"flex-end"},l.a.createElement(j.a,{item:!0,xs:12,sm:6,md:6},l.a.createElement(y.a,{id:"outlined-basic",value:a,label:"\u0e04\u0e48\u0e32 H",variant:"outlined",onChange:function(e){return i(e.target.value)}})),l.a.createElement(j.a,{item:!0,xs:12,sm:6,md:6},l.a.createElement(y.a,{id:"outlined-basic",value:u,label:"\u0e04\u0e48\u0e32 P",variant:"outlined",onChange:function(e){return m(e.target.value)}})),l.a.createElement(j.a,{item:!0,xs:12,sm:12,md:12},l.a.createElement(y.a,{id:"outlined-read-only-input",label:"\u0e1c\u0e25\u0e25\u0e31\u0e1e\u0e18\u0e4c",value:""===E?"":E,InputProps:{readOnly:!0},variant:"outlined"})))),l.a.createElement(T.a,null),l.a.createElement("div",{class:"container text-center"},l.a.createElement(S.a,{variant:"contained",color:"primary",disableElevation:!0,onClick:function(){(function(e){return w.a.post(I+"/differentiation",e).then((function(e){return console.log(e.data),e.data})).catch((function(e){console.log(e)}))})({h:a,p:u}).then((function(e){b(e)}))}},"generate"))))}function F(){var e=Object(n.useState)(""),t=Object(c.a)(e,2),a=t[0],i=t[1],r=Object(n.useState)(0),o=Object(c.a)(r,2),u=o[0],m=o[1],s=Object(n.useState)(3),d=Object(c.a)(s,2),E=d[0],b=d[1];return l.a.createElement(l.a.Fragment,null,l.a.createElement("div",{class:"container text-center",style:{marginTop:"80px"}},l.a.createElement("h1",null,"\u0e1a\u0e17\u0e17\u0e35\u0e48 5 Integration")),l.a.createElement("div",null,l.a.createElement(O.a,{class:"container text-center",style:{marginTop:"180px"}},l.a.createElement(j.a,{container:!0,spacing:3,alignItems:"flex-end"},l.a.createElement(j.a,{item:!0,xs:12,sm:6,md:6},l.a.createElement(y.a,{id:"outlined-basic",value:u,label:"\u0e04\u0e48\u0e32 A",variant:"outlined",onChange:function(e){return m(e.target.value)}})),l.a.createElement(j.a,{item:!0,xs:12,sm:6,md:6},l.a.createElement(y.a,{id:"outlined-basic",value:E,label:"\u0e04\u0e48\u0e32 B",variant:"outlined",onChange:function(e){return b(e.target.value)}})),l.a.createElement(j.a,{item:!0,xs:12,sm:12,md:12},l.a.createElement(y.a,{id:"outlined-read-only-input",label:"\u0e1c\u0e25\u0e25\u0e31\u0e1e\u0e18\u0e4c",value:""===a?"":a,InputProps:{readOnly:!0},variant:"outlined"})))),l.a.createElement(T.a,null),l.a.createElement("div",{class:"container text-center"},l.a.createElement(S.a,{variant:"contained",color:"primary",disableElevation:!0,onClick:function(){(function(e){return w.a.post(I+"/integration",e).then((function(e){return console.log(e.data),e.data})).catch((function(e){console.log(e)}))})({a:u,b:E}).then((function(e){i(e)}))}},"generate"))))}function A(){var e=Object(n.useState)(0),t=Object(c.a)(e,2),a=t[0],i=t[1],r=Object(n.useState)(1),o=Object(c.a)(r,2),u=o[0],m=o[1],s=Object(n.useState)(.001),d=Object(c.a)(s,2),E=d[0],b=d[1],v=Object(n.useState)(""),g=Object(c.a)(v,2),p=g[0],x=g[1];return l.a.createElement(l.a.Fragment,null,l.a.createElement("div",{class:"container text-center",style:{marginTop:"80px"}},l.a.createElement("h1",null,"\u0e1a\u0e17\u0e17\u0e35\u0e48 6 Root-finding")),l.a.createElement("div",null,l.a.createElement(O.a,{class:"container text-center",style:{marginTop:"150px"}},l.a.createElement(j.a,{container:!0,spacing:3,alignItems:"flex-end"},l.a.createElement(j.a,{item:!0,xs:12,sm:4,md:4},l.a.createElement(y.a,{id:"outlined-basic",value:a,label:"\u0e04\u0e48\u0e32 A",variant:"outlined",onChange:function(e){return i(e.target.value)}})),l.a.createElement(j.a,{item:!0,xs:12,sm:4,md:4},l.a.createElement(y.a,{id:"outlined-basic",value:u,label:"\u0e04\u0e48\u0e32 B",variant:"outlined",onChange:function(e){return m(e.target.value)}})),l.a.createElement(j.a,{item:!0,xs:12,sm:4,md:4},l.a.createElement(y.a,{id:"outlined-basic",value:E,label:"\u0e04\u0e48\u0e32\u0e43\u0e01\u0e25\u0e49\u0e40\u0e04\u0e35\u0e22\u0e07",variant:"outlined",onChange:function(e){return b(e.target.value)}})),l.a.createElement(j.a,{item:!0,xs:12,sm:12,md:12},l.a.createElement(y.a,{id:"outlined-read-only-input",label:"\u0e1c\u0e25\u0e25\u0e31\u0e1e\u0e18\u0e4c",value:""===p?"":p,InputProps:{readOnly:!0},variant:"outlined",style:{width:"365px"}})))),l.a.createElement("div",{class:"container text-center",style:{marginTop:"50px"}},l.a.createElement(S.a,{variant:"contained",color:"primary",disableElevation:!0,onClick:function(){(function(e){return w.a.post(I+"/root-finding",e).then((function(e){return console.log(e.data),e.data})).catch((function(e){console.log(e)}))})({a:a,b:u,dx:E}).then((function(e){x(e)}))}},"generate"))))}var L=function(){return l.a.createElement(l.a.Fragment,null,l.a.createElement(m.a,null,l.a.createElement(E,null),l.a.createElement(b.d,null,l.a.createElement(b.b,{path:"/pam2542/page2",component:N}),l.a.createElement(b.b,{path:"/pam2542/page3",component:P}),l.a.createElement(b.b,{path:"/pam2542/page4",component:B}),l.a.createElement(b.b,{path:"/pam2542/page5",component:F}),l.a.createElement(b.b,{path:"/pam2542/page6",component:A}),l.a.createElement(b.b,{path:"/pam2542/page1",component:k}),l.a.createElement(b.b,{path:"/pam2542"},l.a.createElement(b.a,{to:"/pam2542/page1"})))))};r.a.render(l.a.createElement(l.a.StrictMode,null,l.a.createElement(L,null)),document.getElementById("root"))},98:function(e,t,a){e.exports=a(128)}},[[98,1,2]]]);
//# sourceMappingURL=main.646b8600.chunk.js.map