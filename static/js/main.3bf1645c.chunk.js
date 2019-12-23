(this.webpackJsonpclient=this.webpackJsonpclient||[]).push([[0],{108:function(e,t){},111:function(e,t,a){},112:function(e,t,a){},146:function(e,t,a){},147:function(e,t,a){},148:function(e,t,a){},149:function(e,t,a){"use strict";a.r(t);var n,c=a(0),r=a.n(c),l=a(55),s=a.n(l),m=a(16),o=a(6),i=a(5),u=(a(68),function(){var e=Object(c.useState)(""),t=Object(i.a)(e,2),a=t[0],n=t[1],l=Object(c.useState)(""),s=Object(i.a)(l,2),o=s[0],u=s[1];return r.a.createElement("div",{className:"joinOuterContainer"},r.a.createElement("div",{className:"joinInnerContainer"},r.a.createElement("h1",{className:"heading"},"Join"),r.a.createElement("div",null,r.a.createElement("input",{placeholder:"Name",className:"joinInput",type:"text",onChange:function(e){return n(e.target.value)}})),r.a.createElement("div",null,r.a.createElement("input",{placeholder:"Room",className:"joinInput mt-20",type:"text",onChange:function(e){return u(e.target.value)}})),r.a.createElement(m.b,{onClick:function(e){return a&&o?null:e.preventDefault()},to:"/chat?name=".concat(a,"&room=").concat(o)},r.a.createElement("button",{className:"button mt-20",type:"submit"},"Sign In"))))}),A=a(62),E=(a(73),a(58)),g=a.n(E),p=a(59),f=a.n(p),d=(a(111),a(17)),h=a.n(d),v=a(60),N=a.n(v),b=function(e){var t=e.room;return r.a.createElement("div",{className:"infoBar"},r.a.createElement("div",{className:"leftInnerContainer"},r.a.createElement("img",{className:"onlineIcon",src:h.a,alt:"online"}),r.a.createElement("h3",null,t)),r.a.createElement("div",{className:"rightInnerContainer"},r.a.createElement("a",{href:"/"},r.a.createElement("img",{src:N.a,alt:"close"}))))},j=(a(112),function(e){var t=e.message,a=e.setMessage,n=e.sendMessage;return r.a.createElement("form",{className:"form"},r.a.createElement("input",{className:"input",type:"text",placeholder:"Type a message...",value:t,onChange:function(e){return a(e.target.value)},onKeyPress:function(e){return"Enter"===e.key?n(e):null}}),r.a.createElement("button",{className:"sendButton",onClick:n},"Send"))}),C=a(61),O=a.n(C),I=(a(146),a(147),function(e){var t=e.message,a=t.user,n=t.text,c=!1,l=e.name.trim().toLowerCase();return a===l&&(c=!0),c?r.a.createElement("div",{className:"messageContainer justifyEnd"},r.a.createElement("p",{className:"sentText pr-10"},l),r.a.createElement("div",{className:"messageBox backgroundBlue"},r.a.createElement("p",{className:"messageText colorWhite"},n))):r.a.createElement("div",{className:"messageContainer justifyStart"},r.a.createElement("div",{className:"messageBox backgroundLight"},r.a.createElement("p",{className:"messageText colorDark"},n)),r.a.createElement("p",{className:"sentText pl-10"},a))}),S=function(e){var t=e.messages,a=e.name;return r.a.createElement(O.a,{className:"messages"},t.map((function(e,t){return r.a.createElement("div",{key:t},r.a.createElement(I,{message:e,name:a}))})))},x=(a(148),function(e){var t=e.users;return r.a.createElement("div",{className:"textContainer"},r.a.createElement("div",null,r.a.createElement("h1",null,"Realtime Chat Application ",r.a.createElement("span",{role:"img","aria-label":"emoji"},"\ud83d\udcac")),r.a.createElement("h2",null,"Created with React, Express, Node and Socket.IO ",r.a.createElement("span",{role:"img","aria-label":"emoji"},"\u2764\ufe0f")),r.a.createElement("h2",null,"Try it out right now! ",r.a.createElement("span",{role:"img","aria-label":"emoji"},"\u2b05\ufe0f"))),t?r.a.createElement("div",null,r.a.createElement("h1",null,"People currently chatting:"),r.a.createElement("div",{className:"activeContainer"},r.a.createElement("h2",null,t.map((function(e){var t=e.name;return r.a.createElement("div",{key:t,className:"activeItem"},t,r.a.createElement("img",{alt:"Online Icon",src:h.a}))}))))):null)}),y=function(e){var t=e.location,a=Object(c.useState)(""),l=Object(i.a)(a,2),s=l[0],m=l[1],o=Object(c.useState)(""),u=Object(i.a)(o,2),E=u[0],p=u[1],d=Object(c.useState)(""),h=Object(i.a)(d,2),v=h[0],N=h[1],C=Object(c.useState)([]),O=Object(i.a)(C,2),I=O[0],y=O[1],R=Object(c.useState)([]),k=Object(i.a)(R,2),w=k[0],B=k[1],M="https://react-chat-app-challenge.herokuapp.com/";Object(c.useEffect)((function(){var e=g.a.parse(t.search),a=e.name,c=e.room;n=f()(M),m(a),p(c),n.emit("join",{name:a,room:c},(function(e){e&&alert(e)}))}),[M,t.search]),Object(c.useEffect)((function(){return n.on("message",(function(e){y([].concat(Object(A.a)(I),[e]))})),n.on("roomData",(function(e){var t=e.users;B(t)})),function(){n.emit("disconnect"),n.off()}}),[I]);return console.log(v,I),r.a.createElement("div",{className:"outerContainer"},r.a.createElement("div",{className:"container"},r.a.createElement(b,{room:E}),r.a.createElement(S,{messages:I,name:s}),r.a.createElement(j,{message:v,setMessage:N,sendMessage:function(e){e.preventDefault(),v&&n.emit("sendMessage",v,(function(){N("")}))}})),r.a.createElement(x,{users:w}))},R=function(){return r.a.createElement(m.a,null,r.a.createElement(o.a,{path:"/",exact:!0,component:u}),r.a.createElement(o.a,{path:"/chat",component:y}))};s.a.render(r.a.createElement(R,null),document.getElementById("root"))},17:function(e,t){e.exports="data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAAAYAAAAGCAYAAADgzO9IAAAAAXNSR0IArs4c6QAAAExJREFUCB1jbPh/le3lx5tNDIwMcQwg8J9hkTi/eh0LWJCBoRwoAAPlQDEGJrhKmDCIBupmQuYjs5lAZiILgNlAMRaQRSAz4UZCLQcAIwYaiAejKoYAAAAASUVORK5CYII="},60:function(e,t){e.exports="data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAAAoAAAAKCAYAAACNMs+9AAAAAXNSR0IArs4c6QAAAHBJREFUGBmNkAEKwCAMA2VfGP2mrx3sOV2us6IymIXQGlNTW9zdhCqcZQm4dmelFUp+CZZa6sYpeUVIFyIixMqjCO51Wy5unQExuYSbSF5JASLqPsqRM21lOoWc89tagr3PSMgOiWlwnUeXWA/E78IfuAX270S3ydAAAAAASUVORK5CYII="},63:function(e,t,a){e.exports=a(149)},68:function(e,t,a){},73:function(e,t,a){}},[[63,1,2]]]);
//# sourceMappingURL=main.3bf1645c.chunk.js.map