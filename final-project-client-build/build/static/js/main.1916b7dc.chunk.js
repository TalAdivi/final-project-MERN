(this["webpackJsonpfinal-project"]=this["webpackJsonpfinal-project"]||[]).push([[0],{238:function(e,a,t){e.exports=t(580)},243:function(e,a,t){},244:function(e,a,t){e.exports=t.p+"static/media/logo.5d5d9eef.svg"},245:function(e,a,t){},273:function(e,a){},580:function(e,a,t){"use strict";t.r(a);var n=t(0),r=t.n(n),c=t(11),l=t.n(c),o=(t(243),t(244),t(245),t(33)),i=t(222),s=t(230),m=t(121),u=t(670),p=t(636),d=t(664),f=t(32),E=t(71),h=t.n(E),v=t(221),b=t.n(v),g=t(633),x=t(635),k=t(634),y=(t(276),t(630)),w=t(632),j=t(46),O=r.a.createContext();var N=Object(i.a)((function(e){return{card:{minWidth:275},bullet:{display:"inline-block",margin:"0 2px",transform:"scale(0.8)"},title:{fontSize:14},pos:{marginBottom:12},Active:{backgroundColor:"#ffca28",float:"right",marginBottom:"8px"},Complete:{backgroundColor:"#66bb6a",float:"right",marginBottom:"8px"},navLinks:{textDecorationLine:"none"},list:{width:"100%",maxWidth:360,backgroundColor:e.palette.background.paper}}}));function C(e){var a=e.allTasks,t=N();return r.a.createElement(O.Provider,null,r.a.createElement(y.a,{className:t.list},a.map((function(e,a){return r.a.createElement(w.a,{dense:"true",key:a},r.a.createElement(j.b,{exact:!0,to:"/chat/"+e.taskID,className:t.navLinks},r.a.createElement(g.a,{className:t.card,variant:"outlined",key:a},r.a.createElement(k.a,null,r.a.createElement(m.a,{variant:"h5",component:"h2"},e.title),r.a.createElement(m.a,{className:t.pos,color:"textSecondary"},"Due date: ",e.datesend.slice(0,10)),r.a.createElement(u.a,{className:"Active"===e.status?t.Active:t.Complete,label:e.status})),r.a.createElement(x.a,null,r.a.createElement(p.a,{size:"small"},"Learn More")))))}))))}var B,P=t(52),S=r.a.createContext();function D(e){B.emit("chat message",e.message,e.from)}var W;function I(e){var a=e.tasks,t=r.a.useState([]),c=Object(o.a)(t,2),l=c[0],i=c[1],s=r.a.useState(!1),m=Object(o.a)(s,2),u=m[0],p=m[1];return Object(n.useEffect)((function(){!function(){var e;h.a.async((function(t){for(;;)switch(t.prev=t.next){case 0:return e=window.location.pathname.split("/")[2],t.next=3,h.a.awrap(a.find((function(a){if(e==a.taskID)return a})));case 3:if(void 0===(W=t.sent)){t.next=10;break}B.emit("update task",W),console.log("currChat&&&&\n",W),i(W.chat),t.next=12;break;case 10:return p(!0),t.abrupt("return");case 12:case"end":return t.stop()}}))}()}),[]),Object(n.useEffect)((function(){return function(){console.log("inside unMount!"),B.emit("disconnect")}})),Object(n.useEffect)((function(){B.emit("update chat",l)}),[l]),B||(B=b()(":3000")).on("chat message",(function(e,a){i((function(t){return[].concat(Object(f.a)(t),[{from:a,message:e}])}))})),r.a.createElement(S.Provider,{value:{user:"Tomer Bar",chats:l,sendChatAction:D}},u?r.a.createElement(P.a,{to:"/"}):null,e.children)}var L=Object(i.a)((function(e){return{root:{"& > *":{padding:e.spacing(3,2)}},flex:{display:"flex",alignItems:"center"},topicWindow:{width:"30%",height:"300px",borderRight:"1px solid grey"},chatWindow:{width:"70%",height:"300px",padding:"20px"},chatBox:{width:"85%"},button:{width:"15%"}}}));function A(){var e=L(),a=r.a.useContext(S),t=a.user,n=a.chats,c=a.sendChatAction,l=r.a.useState(""),i=Object(o.a)(l,2),f=i[0],E=i[1];return r.a.createElement("div",null,r.a.createElement(s.a,{variant:"outlined",className:e.root},r.a.createElement(m.a,{variant:"h4",component:"h4"},"Chat app"),r.a.createElement("div",{className:e.flex},r.a.createElement("div",{className:e.chatWindow},n.map((function(a,n){return r.a.createElement("div",{className:e.flex,key:n},r.a.createElement(u.a,{label:a.from,style:a.from===t?{backgroundColor:"#5c6bc0"}:{backgroundColor:"#7e57c2"}}),r.a.createElement(m.a,{variant:"body1",gutterBottom:!0,style:{paddingLeft:"8px"}}," ",a.message," "))})))),r.a.createElement("div",{className:e.flex},r.a.createElement(d.a,{label:"send a chat",className:e.chatBox,helperText:"\ud83d\udcbb \ud83c\udf86\ud83c\udf86\xaf\\(\xb0_o)/\xaf",value:f,onChange:function(e){E(e.target.value)}}),r.a.createElement(p.a,{variant:"contained",color:"primary",className:e.button,onClick:function(){c({from:t,message:f},n),E("")}},"SEND"))))}var T=t(24),M=t(642),U=t(641),z=t(638),K=t(668),H=t(667),J=t(644),R=t(161),F=t.n(R),G=t(639),$=t(640),_=t(162),q=t.n(_),Q=t(224),V=t.n(Q),X=t(643),Y=t(23),Z=Object(i.a)((function(e){return{root:{display:"flex"},drawer:Object(T.a)({},e.breakpoints.up("sm"),{width:240,flexShrink:0}),appBar:Object(T.a)({},e.breakpoints.up("sm"),{width:"calc(100% - ".concat(240,"px)"),marginLeft:240}),menuButton:Object(T.a)({marginRight:e.spacing(2)},e.breakpoints.up("sm"),{display:"none"}),toolbar:e.mixins.toolbar,drawerPaper:{width:240},content:{flexGrow:1,padding:e.spacing(3)},navLinks:{textDecorationLine:"none"}}}));var ee=function(e){var a=e.container,t=Z(),n=Object(Y.a)(),c=r.a.useState(!1),l=Object(o.a)(c,2),i=l[0],s=l[1],u=function(){s(!i)},p=r.a.createElement("div",null,r.a.createElement("div",{className:t.toolbar}),r.a.createElement(z.a,null),r.a.createElement(y.a,null,["Inbox","Starred","Send email","Drafts"].map((function(e,a){return r.a.createElement(w.a,{button:!0,key:e},r.a.createElement(G.a,null,a%2===0?r.a.createElement(F.a,null):r.a.createElement(q.a,null)," "),r.a.createElement(j.b,{exact:!0,to:"/",className:t.navLinks},r.a.createElement($.a,{primary:e})))}))),r.a.createElement(z.a,null),r.a.createElement(y.a,null,["All mail","Trash","Spam"].map((function(e,a){return r.a.createElement(w.a,{button:!0,key:e},r.a.createElement(G.a,null,a%2===0?r.a.createElement(F.a,null):r.a.createElement(q.a,null)),r.a.createElement($.a,{primary:e}))}))));return r.a.createElement("div",{className:t.root},r.a.createElement(U.a,null),r.a.createElement(M.a,{position:"fixed",className:t.appBar},r.a.createElement(X.a,null,r.a.createElement(J.a,{color:"inherit","aria-label":"open drawer",edge:"start",onClick:u,className:t.menuButton},r.a.createElement(V.a,null)),r.a.createElement(m.a,{variant:"h6",noWrap:!0},"Here4U POC"))),r.a.createElement("nav",{className:t.drawer,"aria-label":"mailbox folders"},r.a.createElement(H.a,{smUp:!0,implementation:"css"},r.a.createElement(K.a,{container:a,variant:"temporary",anchor:"rtl"===n.direction?"right":"left",open:i,onClose:u,classes:{paper:t.drawerPaper},ModalProps:{keepMounted:!0}},p)),r.a.createElement(H.a,{xsDown:!0,implementation:"css"},r.a.createElement(K.a,{classes:{paper:t.drawerPaper},variant:"permanent",open:!0},p))),r.a.createElement("main",{className:t.content},r.a.createElement("div",{className:t.toolbar}),r.a.createElement(m.a,{paragraph:!0},"Welcome"),e.children))};Boolean("localhost"===window.location.hostname||"[::1]"===window.location.hostname||window.location.hostname.match(/^127(?:\.(?:25[0-5]|2[0-4][0-9]|[01]?[0-9][0-9]?)){3}$/));var ae,te=Object(i.a)((function(e){return{chatStyle:{height:"1%"}}})),ne=function(e){return r.a.createElement("div",{className:te.chatStyle},r.a.createElement(I,{tasks:e.allTasks},r.a.createElement(A,null)))},re=t(663),ce=t(69),le=t(39),oe=t(117),ie=t(118),se=t(120),me=t(74),ue=t(15),pe=[{year:"1950",population:2.525},{year:"1960",population:3.018},{year:"1970",population:3.682},{year:"1980",population:4.44},{year:"1990",population:5.31},{year:"2000",population:6.127},{year:"2010",population:6.93}],de=(n.PureComponent,t(226)),fe=t.n(de),Ee=t(156),he=t.n(Ee),ve=t(155),be=t.n(ve),ge=t(157),xe=t.n(ge),ke=t(158),ye=t.n(ke),we=t(154),je=t.n(we),Oe=t(112),Ne=t.n(Oe),Ce=[{name:"Page A",uv:590,pv:800,amt:1400},{name:"Page B",uv:868,pv:967,amt:1506},{name:"Page C",uv:1397,pv:1098,amt:989},{name:"Page D",uv:1480,pv:1200,amt:1228},{name:"Page E",uv:1520,pv:1108,amt:1100},{name:"Page F",uv:1400,pv:680,amt:1700}],Be=function(e){function a(){return Object(ce.a)(this,a),Object(oe.a)(this,Object(ie.a)(a).apply(this,arguments))}return Object(se.a)(a,e),Object(le.a)(a,[{key:"render",value:function(){return r.a.createElement(fe.a,{width:500,height:400,data:Ce,margin:{top:20,right:20,bottom:20,left:20}},r.a.createElement(xe.a,{dataKey:"name"}),r.a.createElement(ye.a,null),r.a.createElement(je.a,null),r.a.createElement(Ne.a,null),r.a.createElement(be.a,{dataKey:"uv",barSize:20,fill:"#413ea0"}),r.a.createElement(he.a,{type:"monotone",dataKey:"uv",stroke:"#ff7300"}))}}]),a}(n.PureComponent),Pe=function(e){var a=r.a.useState([]),t=Object(o.a)(a,2),c=t[0],l=t[1];return Object(n.useEffect)((function(){h.a.async((function(e){for(;;)switch(e.prev=e.next){case 0:return e.prev=0,e.next=3,h.a.awrap(fetch("http://localhost:3000/Help4U/task/getTasksByUID?userID=305171159").then((function(e){return e.json()})));case 3:ae=e.sent,console.log("res MAIN WINDOW\n",ae),e.next=10;break;case 7:e.prev=7,e.t0=e.catch(0),console.log(e.t0);case 10:200==ae.status&&null!=ae.data&&l(ae.data);case 11:case"end":return e.stop()}}),null,null,[[0,7]]),console.log("useEffect of mainWIndow!")}),[]),r.a.createElement("div",null,r.a.createElement(ee,null,r.a.createElement(re.a,{container:!0,spacing:2},r.a.createElement(re.a,{item:!0,xs:8},r.a.createElement(P.b,{exact:!0,path:"/",component:function(){return r.a.createElement(C,{allTasks:c})}}),r.a.createElement(P.b,{path:"/chat",component:function(){return r.a.createElement(ne,{allTasks:c})}})),r.a.createElement(re.a,{item:!0,xs:4},r.a.createElement(Be,null)))))},Se=function(){return r.a.createElement(Pe,null)};l.a.render(r.a.createElement(j.a,null,r.a.createElement(Se,null)),document.getElementById("root")),"serviceWorker"in navigator&&navigator.serviceWorker.ready.then((function(e){e.unregister()}))}},[[238,1,2]]]);
//# sourceMappingURL=main.1916b7dc.chunk.js.map