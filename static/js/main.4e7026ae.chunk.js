(this.webpackJsonphuddle=this.webpackJsonphuddle||[]).push([[0],{36:function(e,t,a){},42:function(e,t,a){e.exports=a(77)},47:function(e,t,a){},51:function(e,t,a){e.exports=a.p+"static/media/logo.5d5d9eef.svg"},76:function(e,t,a){},77:function(e,t,a){"use strict";a.r(t);var n=a(1),r=a.n(n),l=a(13),i=a.n(l),c=(a(47),a(48),a(49),a(50),a(51),a(19)),o=a(20),s=a(14),m=a(21),u=a(22),h=a(11),d=a(3),E=function(e){Object(u.a)(a,e);var t=Object(m.a)(a);function a(e){var n;return Object(c.a)(this,a),(n=t.call(this,e)).state={feedback:"",name:"Shubham Giri",email:""},n.handleChange=n.handleChange.bind(Object(s.a)(n)),n.handleSubmit=n.handleSubmit.bind(Object(s.a)(n)),n}return Object(o.a)(a,[{key:"handleChange",value:function(e){this.setState({email:e.target.value})}},{key:"handleSubmit",value:function(e){this.sendFeedback("template_hO3IhqwA",{message_html:this.state.feedback,to_email:this.state.email,from_name:this.state.name,reply_to:this.state.email})}},{key:"sendFeedback",value:function(e,t){window.emailjs.send("gmail",e,t).then((function(e){console.log("Email successfully sent!")})).catch((function(e){return console.error("Oh well, you failed. Here some thoughts on the error that occured:",e)}))}},{key:"render",value:function(){var e=this;return r.a.createElement("form",{className:"test-mailing"},r.a.createElement("h1",null,"Let's see if it works"),r.a.createElement(d.v,{center:!0},r.a.createElement(d.h,{md:4},r.a.createElement(d.l,{outline:!0,value:this.state.email,type:"email",hint:"Example@company.com",onChange:function(t){e.handleChange(t)}}))),r.a.createElement(d.b,{type:"button",color:"success",value:"Submit",className:"btn btn--submit",onClick:this.handleSubmit}," ","Send Invitation"," "))}}]),a}(r.a.Component),p=(a(36),function(e){Object(u.a)(a,e);var t=Object(m.a)(a);function a(e){var n;return Object(c.a)(this,a),(n=t.call(this,e)).state={collapse:!1,isWideEnough:!1},n.onClick=n.onClick.bind(Object(s.a)(n)),n}return Object(o.a)(a,[{key:"onClick",value:function(){this.setState({collapse:!this.state.collapse})}},{key:"render",value:function(){return r.a.createElement("div",null,r.a.createElement("header",null,r.a.createElement(h.a,null,r.a.createElement(d.p,{color:"dark",fixed:"top",dark:!0,expand:"md",scrolling:!0,transparent:!0},r.a.createElement(d.q,{href:"/"},r.a.createElement("strong",null,r.a.createElement("img",{src:"./../logo.png"}))),!this.state.isWideEnough&&r.a.createElement(d.s,{onClick:this.onClick}),r.a.createElement(d.i,{isOpen:this.state.collapse,navbar:!0},r.a.createElement(d.r,{right:!0},r.a.createElement(d.n,{active:!0},r.a.createElement(d.o,{to:"#"},"Home")),r.a.createElement(d.n,null,r.a.createElement(d.o,{to:"#"},"Link")),r.a.createElement(d.n,null,r.a.createElement(d.o,{to:"#"},r.a.createElement(h.b,{to:"/invite"},"INVITE"))))))),r.a.createElement(d.x,{src:"https://assets.huddleai.com/img/chat-on-swings.48b2d505.jpg"},r.a.createElement(d.m,{overlay:"black-strong",className:"flex-center flex-column text-white text-center"},r.a.createElement("h1",{style:{fontSize:"64px",fontFamily:"'Dosis', sans-serif",width:"65%",fontWeight:"700",wordWrap:"break-word",marginTop:"100px"}},"Boost your Customer Service with an Intelligent Assistant"),r.a.createElement("h3",{style:{width:"65%",fontWeight:"200",marginTop:"30px"}},"Build an intuitive Intelligent Chatbot powered by a knowledge graph to answer or action your customers queries."),r.a.createElement(d.h,{style:{marginTop:"80px"}},r.a.createElement(d.v,null,r.a.createElement(d.h,{style:{display:"flex",justifyContent:"flex-end"}}," ",r.a.createElement("a",{href:"/invite"},r.a.createElement(d.b,{style:{borderRadius:"25px"},color:"success"},"INVITE"))),r.a.createElement(d.h,{style:{display:"flex",justifyContent:"flex-start"}}," ",r.a.createElement(d.b,{id:"featuredbtn",style:{borderRadius:"25px"},outline:!0,color:"grey"},"FEATURES"))))))))}}]),a}(r.a.Component));var g=function(){return r.a.createElement("div",null,r.a.createElement(p,null))},b=[{title:"customerService",body:"Go beyond the standard customer service chatbot and give your customers deeper experience by integrating with your internal applications",image:"./../research.svg"},{title:"customerService",body:"Go beyond the standard customer service chatbot and give your customers deeper experience by integrating with your internal applications",image:"./../research.svg"},{title:"customerService",body:"Go beyond the standard customer service chatbot and give your customers deeper experience by integrating with your internal applications",image:"./../research.svg"},{title:"customerService",body:"Go beyond the standard customer service chatbot and give your customers deeper experience by integrating with your internal applications",image:"./../research.svg"}];var v=function(){return r.a.createElement("div",null,r.a.createElement("main",null,r.a.createElement(d.j,{className:"text-center my-5"},r.a.createElement(d.v,null,b.map((function(e){return r.a.createElement(d.h,{md:3},r.a.createElement(d.c,null,r.a.createElement(d.e,{style:{height:"150px",width:"150px"},className:"img-fluid",src:"./../research.png",waves:!0}),r.a.createElement(d.d,null,r.a.createElement(d.g,null,e.title),r.a.createElement(d.f,null,e.body),r.a.createElement(d.b,{href:"#"},"Read more..."))))}))))))},y=(a(76),a(6));var f=function(){return r.a.createElement("div",{className:"App"},r.a.createElement(h.a,null,r.a.createElement(y.c,null,r.a.createElement(y.a,{exact:!0,path:"/"},r.a.createElement(r.a.Fragment,null,r.a.createElement(g,null),r.a.createElement(v,null))),r.a.createElement(y.a,{path:"/invite/"},r.a.createElement(E,null)))))};Boolean("localhost"===window.location.hostname||"[::1]"===window.location.hostname||window.location.hostname.match(/^127(?:\.(?:25[0-5]|2[0-4][0-9]|[01]?[0-9][0-9]?)){3}$/));i.a.render(r.a.createElement(r.a.StrictMode,null,r.a.createElement(f,null)),document.getElementById("root")),"serviceWorker"in navigator&&navigator.serviceWorker.ready.then((function(e){e.unregister()})).catch((function(e){console.error(e.message)}))}},[[42,1,2]]]);
//# sourceMappingURL=main.4e7026ae.chunk.js.map