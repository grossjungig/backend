(this.webpackJsonpgrossjungig=this.webpackJsonpgrossjungig||[]).push([[0],{13:function(e){e.exports=JSON.parse('{"title":{"en":"Create New Account","de":"Konto Erstellen"},"senior":{"en":"Senior","de":"Senioren"},"youth":{"en":"youth","de":"Jugend"},"password":{"en":"Password","de":"Passwort"},"email":{"en":"Email","de":"E-Mail Adresse"},"role":{"en":"Role","de":"Rolle "},"welcome":{"en":"Welcome! Please create an account","de":"Willkommen! Bitte erstellen Sie ein Konto. "},"submit":{"en":"Submit","de":"Weiter"}}')},15:function(e){e.exports=JSON.parse('{"title":{"en":"Rooms","de":"Zimmer"},"neighborhood":{"en":"District","de":"Bezirk"},"add":{"en":"Add New Room","de":"Neue Zimmer hinzuf\xfcgen"},"search":{"en":"Search Room by Postcode","de":"Zimmer sortieren beim Postleitzahl"},"placeholder":{"en":"Search by Postcode","de":"Zimmer beim Postleitzahl"},"images":{"en":"Upload your pictures","de":"Bildern hochladen"},"suburb":{"en":"Suburb","de":"Stadteil"},"name":{"en":"Room","de":"Zimmer"}}')},16:function(e){e.exports=JSON.parse('{"home":{"en":"Home","de":"Startseite"},"login":{"en":"Login","de":"Einloggen"},"signup":{"en":"Sign Up","de":"Registrieren"},"logout":{"en":"Log Out","de":"Abmelden"},"add":{"en":"Add a new room","de":"Neue raum hinzuf\xfcgen"},"berlin":{"en":"Berlin","de":"Berlin"},"munich":{"en":"Munich","de":"M\xfcnchen"}}')},18:function(e){e.exports=JSON.parse('{"youthB":{"en":"For young people:","de":"F\xfcr junge Leute:"},"youth":{"en":"Help your roommate, get emotional support and care - and save 20% on your rent","de":"Hilfe dein/e Mitbewohner/in, bekomme emotionalle Unterschutzung und F\xfcrsorge - und spare dabei 20% deine Miete"},"seniorsB":{"en":"For seniors:","de":"F\xfcr Senioren:"},"seniors":{"en":"You can find a tenant who becomes like your second family, earn money and get support with your everyday life.","de":"Finden Sie ein/e Mieter/in der/die wie ihre zweite Familie wird, verdienen Sie Geld und bekommen unterschutzung im Alltag."},"welcome":{"en":"Gro\xdfjungig is an accommodation platform for seniors und youth.","de":"Gro\xdfjungig ist ein Wohn-platform f\xfcr Senioren und junge Leute."}}')},19:function(e){e.exports=JSON.parse('{"title":{"en":"Login","de":"Anmelden"},"prompt":{"en":"Welcome back! Please log in to continue.","de":"Willkommen zur\xfcck! Bitte loggen Sie sich ein."},"email":{"en":"Email","de":"E-Mail Adresse"},"password":{"en":"Password","de":"Passwort"},"login":{"en":"Login","de":"Weiter"}}')},22:function(e){e.exports=JSON.parse('{"greeting":{"en":"Welcome Back","de":"Willkommen"},"article":{"en":"Check out what\'s new!","de":"Schauen Sie, was neu ist an!"},"rooms":{"en":"Find a room in Berlin","de":"Zimmer im Berlin finden"},"map":{"en":"View City Map","de":"Stadtkarte anschauen"}}')},40:function(e,t,a){e.exports=a(70)},45:function(e,t,a){},46:function(e,t,a){},70:function(e,t,a){"use strict";a.r(t);var n=a(0),r=a.n(n),o=a(24),l=a.n(o),s=(a(45),a(4)),i=a(5),c=a(7),m=a(6),u=a(2),p=(a(46),a(18)),h=function(e){Object(c.a)(a,e);var t=Object(m.a)(a);function a(){return Object(s.a)(this,a),t.apply(this,arguments)}return Object(i.a)(a,[{key:"render",value:function(){var e=localStorage.getItem("lang");return r.a.createElement("div",{className:"home-component"},r.a.createElement("img",{className:"logo_nb",src:"/image/grossjungig_logo_nb.png",alt:"grossjungig logo with no background"}),r.a.createElement("div",null,r.a.createElement("h1",null,p.welcome[e])),r.a.createElement("div",{className:"benefits"},r.a.createElement("p",{className:"benefits_a"},r.a.createElement("b",null,p.seniorsB[e]," ")," ",r.a.createElement("br",null),p.seniors[e]),r.a.createElement("p",{className:"benefits_b"}," ",r.a.createElement("b",null,p.youthB[e])," ",r.a.createElement("br",null),p.youth[e])))}}]),a}(n.Component),d=a(21),g=a(1),E=a(9),b=a.n(E),v=a(16),f=function(e){var t=Object(n.useState)("/image/germany.png"),a=Object(d.a)(t,2),o=a[0],l=a[1],s=function(){var t=localStorage.getItem("lang");"en"===t?(l("/image/uk.png"),localStorage.setItem("lang","de")):"de"===t&&(l("/image/germany.png"),localStorage.setItem("lang","en")),e.updatePage()},i=localStorage.getItem("lang");return console.log(e.user),e.user?r.a.createElement("nav",{className:"navilink"},r.a.createElement(g.b,{className:"logo-link",to:"/"},r.a.createElement("img",{src:"/image/grossjungig_logo.png",alt:"Grossjungig Logo",height:"85px"})),r.a.createElement("div",{className:"main-nav"},r.a.createElement(g.b,{to:"/berlin"},v.berlin[i]),r.a.createElement(g.b,{to:"/munich"},v.munich[i])),r.a.createElement("div",{className:"login-nav"},r.a.createElement(g.b,{onClick:function(){b.a.delete("".concat("https://grossjungig.herokuapp.com/api","/auth/logout")).then((function(){e.setUser(null)}))},to:"/"},v.logout[i]),r.a.createElement("img",{onClick:s,height:"30px",src:o,alt:""}),r.a.createElement(g.b,{to:"/userportal"},r.a.createElement("img",{height:"30px",src:"/image/user.png",alt:"User Portal"})))):r.a.createElement("nav",{className:"navilink"},r.a.createElement(g.b,{to:"/",className:"logo-link"},r.a.createElement("img",{src:"/image/grossjungig_logo.png",alt:"Grossjungig Logo",height:"65px"})),r.a.createElement("div",{className:"main-nav"},r.a.createElement(g.b,{to:"/berlin"},r.a.createElement("button",{className:"berlin"},v.berlin[i])),r.a.createElement(g.b,{to:"/munich"},r.a.createElement("button",null,v.munich[i]))),r.a.createElement("div",{className:"login-nav"},r.a.createElement(g.b,{to:"/login"},v.login[i]),r.a.createElement(g.b,{to:"/signup"},v.signup[i]),r.a.createElement("img",{onClick:s,height:"20px",src:o,alt:"Language Switcher"})))},S=function(){return r.a.createElement("div",{className:"footer"},r.a.createElement("div",{className:"footer-flex"},r.a.createElement("div",{className:"social-icons"},r.a.createElement("span",{className:"Facebook"},r.a.createElement("img",{src:"../image/Facebook_White.png",alt:"Facebook"})),r.a.createElement("span",{className:"Twitter"},r.a.createElement("img",{src:"../image/Twitter_White.png",alt:"Twitter"})),r.a.createElement("span",{className:"Instagram"},r.a.createElement("img",{src:"../image/Instagram_White.png",alt:"Instagram"})))),r.a.createElement("footer",null,r.a.createElement("p",null,"\xa9 2020 Grossjungig")))},y=a(14),w=a(13),k=function(e){Object(c.a)(a,e);var t=Object(m.a)(a);function a(){var e;Object(s.a)(this,a);for(var n=arguments.length,r=new Array(n),o=0;o<n;o++)r[o]=arguments[o];return(e=t.call.apply(t,[this].concat(r))).state={name:"",email:"",password:"",role:"senior",redirect:!1},e.handleSubmit=function(t){t.preventDefault(),b.a.post("".concat("https://grossjungig.herokuapp.com/api","/auth/signup"),{name:e.state.name,email:e.state.email,password:e.state.password,role:e.state.role}).then((function(t){console.log("RSPONSE",t),e.props.setUser(t.data),e.props.history.push("/userportal")})).catch((function(e){console.log("this is the error",e)}))},e.setFormState=function(t){e.setState(Object(y.a)({},t.target.name,t.target.value))},e.onChange=function(t){var a=t.target.value;"Senioren"===a&&(a="senior"),"Jungend"===a&&(a="youth"),e.setState({role:a})},e}return Object(i.a)(a,[{key:"render",value:function(){var e=localStorage.getItem("lang");return this.state.redirect?r.a.createElement(u.a,{to:"/userportal"}):r.a.createElement("div",{className:"signup-component"},r.a.createElement("h1",null,w.title[e]),r.a.createElement("h3",null,w.welcome[e]),r.a.createElement("div",{className:"signup-container"},r.a.createElement("form",null,r.a.createElement("label",{htmlFor:"name"},"Name"),r.a.createElement("input",{name:"name",id:"name",value:this.state.name,onChange:this.setFormState,type:"text"}),r.a.createElement("label",{htmlFor:"email"},w.email[e]),r.a.createElement("input",{name:"email",id:"email",type:"text",value:this.state.email,onChange:this.setFormState}),r.a.createElement("label",{htmlFor:"password"},w.password[e]),r.a.createElement("input",{type:"password",name:"password",id:"password",value:this.state.password,onChange:this.setFormState}),r.a.createElement("label",{htmlFor:"role"},w.role[e]),r.a.createElement("select",{name:"role",id:"role",value:this.state.role,onChange:this.onChange},r.a.createElement("option",null,w.senior[e]),r.a.createElement("option",null,w.youth[e])),r.a.createElement("br",null),r.a.createElement("button",{onClick:this.handleSubmit,type:"submit"},w.submit[e]))),this.state.message&&r.a.createElement("p",null,this.state.message))}}]),a}(n.Component),j=a(19),N=function(e){Object(c.a)(a,e);var t=Object(m.a)(a);function a(){var e;Object(s.a)(this,a);for(var n=arguments.length,r=new Array(n),o=0;o<n;o++)r[o]=arguments[o];return(e=t.call.apply(t,[this].concat(r))).state={email:"",password:"",redirect:!1},e.handleSubmit=function(t){t.preventDefault(),b.a.post("".concat("https://grossjungig.herokuapp.com/api","/auth/signup"),{email:e.state.email,password:e.state.password}).then((function(t){console.log("loginuser",t.data),e.props.setUser(t.data),e.props.history.push("/userportal")})).catch((function(e){console.log("this is the error",e)}))},e.setFormState=function(t){e.setState(Object(y.a)({},t.target.name,t.target.value))},e.onChange=function(t){e.setState({name:t.target.value})},e}return Object(i.a)(a,[{key:"render",value:function(){var e=localStorage.getItem("lang");return this.state.redirect?r.a.createElement(u.a,{to:"/userportal"}):r.a.createElement("div",{className:"login"},r.a.createElement("h1",null,j.title[e]),r.a.createElement("h3",null,j.prompt[e]),r.a.createElement("div",{className:"login-form"},r.a.createElement("form",null,r.a.createElement("label",{htmlFor:"email"},j.email[e]),r.a.createElement("input",{type:"text",name:"email",id:"email",value:this.state.email,onChange:this.setFormState}),r.a.createElement("label",{htmlFor:"password"},j.password[e]),r.a.createElement("input",{type:"password",name:"password",id:"password",value:this.state.password,onChange:this.setFormState}),r.a.createElement("button",{onClick:this.handleSubmit,type:"submit"},j.login[e]))),this.state.message&&r.a.createElement("p",null,this.state.message))}}]),a}(n.Component),O=a(22),F=function(e){Object(c.a)(a,e);var t=Object(m.a)(a);function a(){var e;Object(s.a)(this,a);for(var n=arguments.length,r=new Array(n),o=0;o<n;o++)r[o]=arguments[o];return(e=t.call.apply(t,[this].concat(r))).state={name:""},e}return Object(i.a)(a,[{key:"render",value:function(){var e=localStorage.getItem("lang");return console.log("USER",this.props.user),r.a.createElement("div",{className:"portal-container"},r.a.createElement("h1",null,O.greeting[e]," ",this.props.user.name,"!"),r.a.createElement("article",null,O.article[e]),r.a.createElement("p",null),r.a.createElement(g.b,{to:"/rooms"},r.a.createElement("button",null,O.rooms[e])),r.a.createElement(g.b,{to:"/map"},r.a.createElement("button",null,O.map[e])),r.a.createElement(g.b,{to:"/addroom"},"senior"===this.props.user.role?r.a.createElement("button",null,"Add room"):null))}}]),a}(n.Component),C=a(15),x=function(e){Object(c.a)(a,e);var t=Object(m.a)(a);function a(){var e;Object(s.a)(this,a);for(var n=arguments.length,r=new Array(n),o=0;o<n;o++)r[o]=arguments[o];return(e=t.call.apply(t,[this].concat(r))).state={rooms:[],search:"",select:"--",searchedRoom:[],photos:[]},e.searchedName=function(t){e.setState(Object(y.a)({},t.target.name,"select"===t.target.type?t.target.selected:t.target.value))},e.handleSelect=function(t){e.setState({select:t.target.value})},e}return Object(i.a)(a,[{key:"componentDidMount",value:function(){var e=this;b.a.get("".concat("https://grossjungig.herokuapp.com/api","/rooms")).then((function(t){console.log(t.data.rooms),e.setState({rooms:t.data.rooms})}))}},{key:"render",value:function(){var e=this,t=this.state.rooms.filter((function(t){return"--"===e.state.select||t.district===e.state.select})).filter((function(t){return""===e.state.search||t.postcode===e.state.search})),a=localStorage.getItem("lang"),n=t.map((function(e){return r.a.createElement("tbody",{className:"table",key:e._id},r.a.createElement("tr",null,r.a.createElement(g.b,{className:"room-container",to:"/berlin/".concat(e._id)},r.a.createElement("td",null,e.name)),r.a.createElement("td",null,e.district)))}));return r.a.createElement("div",{style:{height:"60vh"}},r.a.createElement("h1",null,C.title[a]),r.a.createElement("label",{htmlFor:"searchbypostcode"},C.search[a],": "),r.a.createElement("input",{type:"search",name:"search",value:this.state.search,onChange:this.searchedName,placeholder:C.placeholder[a]}),r.a.createElement("label",{htmlFor:"filterbydistrict"},"Select: "),r.a.createElement("select",{name:"select",type:"select",value:this.state.select,onChange:this.searchedName},r.a.createElement("option",{value:"--"},"select"),r.a.createElement("option",{value:"Charlottenburg-Wilmersdorf"},"Charlottenburg-Wilmersdorf"),r.a.createElement("option",{value:"Friedrichshain-Kreuzberg"},"Friedrichshain-Kreuzberg"),r.a.createElement("option",{value:"Lichtenberg"},"Lichtenberg"),r.a.createElement("option",{value:"Marzahn-Hellersdorf"},"Marzahn-Hellersdorf"),r.a.createElement("option",{value:"Mitte"},"Mitte"),r.a.createElement("option",{value:"Neukoelln"},"Neukoelln"),r.a.createElement("option",{value:"Pankow"},"Pankow"),r.a.createElement("option",{value:"Reinickendorf"},"Reinickendorf"),r.a.createElement("option",{value:"Spandau"},"Spandau"),r.a.createElement("option",{value:"Steglitz-Zehlendorf"},"Steglitz-Zehlendorf"),r.a.createElement("option",{value:"Tempelhof-Schoeneberg"},"Tempelhof-Schoeneberg"),r.a.createElement("option",{value:"Treptow-Koepenick"},"Treptow-Koepenick")),r.a.createElement("table",{className:"table-container"},r.a.createElement("thead",null,r.a.createElement("tr",null,r.a.createElement("th",{width:"20%"},"Room Name"),r.a.createElement("th",{width:"20%"},C.neighborhood[a]))),n))}}]),a}(n.Component),z=function(e){Object(c.a)(a,e);var t=Object(m.a)(a);function a(){var e;Object(s.a)(this,a);for(var n=arguments.length,r=new Array(n),o=0;o<n;o++)r[o]=arguments[o];return(e=t.call.apply(t,[this].concat(r))).state={name:"",district:"select",description:"",price:"",postcode:"",address:"",phoneNumber:"",email:"",neighbourhood:"",redirect:!1},e.setFormState=function(t){e.setState(Object(y.a)({},t.target.name,t.target.value))},e.addNewRoom=function(t){t.preventDefault(),b.a.post("".concat("https://grossjungig.herokuapp.com/api","/addRoom"),{name:e.state.name,district:e.state.district,postcode:e.state.postcode,address:e.state.address,phoneNumber:e.state.phoneNumber,email:e.state.email,description:e.state.description,price:e.state.price}).then((function(t){e.props.history.push("/rooms"),console.log("this is response",t)})).catch((function(t){e.setState({message:t.response.data.message})}))},e}return Object(i.a)(a,[{key:"render",value:function(){var e=localStorage.getItem("lang");return this.state.redirect?r.a.createElement(u.a,{to:"/rooms"}):r.a.createElement("div",{style:{height:"60vh"}},r.a.createElement("h1",null,C.add[e]),r.a.createElement("label",{htmlFor:"name"},"name:"),r.a.createElement("input",{type:"text",name:"name",value:this.state.name,onChange:this.setFormState}),r.a.createElement("label",{htmlFor:"district"},"district:"),r.a.createElement("select",{name:"district",type:"select",value:this.state.district,onChange:this.setFormState},r.a.createElement("option",{value:"--"},"select"),r.a.createElement("option",{value:"Charlottenburg-Wilmersdorf"},"Charlottenburg-Wilmersdorf"),r.a.createElement("option",{value:"Friedrichshain-Kreuzberg"},"Friedrichshain-Kreuzberg"),r.a.createElement("option",{value:"Lichtenberg"},"Lichtenberg"),r.a.createElement("option",{value:"Marzahn-Hellersdorf"},"Marzahn-Hellersdorf"),r.a.createElement("option",{value:"Mitte"},"Mitte"),r.a.createElement("option",{value:"Neukoelln"},"Neukoelln"),r.a.createElement("option",{value:"Pankow"},"Pankow"),r.a.createElement("option",{value:"Reinickendorf"},"Reinickendorf"),r.a.createElement("option",{value:"Spandau"},"Spandau"),r.a.createElement("option",{value:"Steglitz-Zehlendorf"},"Steglitz-Zehlendorf"),r.a.createElement("option",{value:"Tempelhof-Schoeneberg"},"Tempelhof-Schoeneberg"),r.a.createElement("option",{value:"Treptow-Koepenick"},"Treptow-Koepenick")),r.a.createElement("label",{htmlFor:"address"},"address:"),r.a.createElement("input",{type:"text",name:"address",value:this.state.address,onChange:this.setFormState}),r.a.createElement("label",{htmlFor:"postcode"},"postcode"),r.a.createElement("input",{type:"text",name:"postcode",value:this.state.postcode,onChange:this.setFormState}),r.a.createElement("label",{htmlFor:"phoneNumber"},"phone number:"),r.a.createElement("input",{type:"text",name:"phoneNumber",value:this.state.phoneNumber,onChange:this.setFormState}),r.a.createElement("label",{htmlFor:"email"},"email:"),r.a.createElement("input",{type:"text",name:"email",value:this.state.email,onChange:this.setFormState}),r.a.createElement("label",{htmlFor:"description"},"description:"),r.a.createElement("input",{type:"text",name:"description",value:this.state.description,onChange:this.setFormState}),r.a.createElement("label",{htmlFor:"price"},"price in euros:"),r.a.createElement("input",{type:"number",name:"price",value:this.state.price,onChange:this.setFormState}),r.a.createElement("label",{htmlFor:"uploadphotos"},"Upload your pictures"),r.a.createElement("input",{type:"file"}),r.a.createElement(g.b,{to:"/uploadphotos"},r.a.createElement("button",null,C.images[e])),r.a.createElement("button",{type:"submit",onClick:this.addNewRoom},"submit"),this.state.message&&r.a.createElement("p",null,this.state.message))}}]),a}(n.Component),P=a(27),R=a.n(P),U=a(39),I=function(){var e=Object(n.useState)(""),t=Object(d.a)(e,2),a=t[0],o=t[1],l=Object(n.useState)(!1),s=Object(d.a)(l,2),i=s[0],c=s[1],m=function(){var e=Object(U.a)(R.a.mark((function e(t){var a,n,r,l;return R.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return a=t.target.files,(n=new FormData).append("file",a[0]),n.append("upload_preset","pictures"),c(!0),e.next=7,fetch("https://api.cloudinary.com/v1_1/akups/image/upload",{method:"POST",body:n});case 7:return r=e.sent,e.next=10,r.json();case 10:l=e.sent,o(l.secure_url),c(!1);case 13:case"end":return e.stop()}}),e)})));return function(t){return e.apply(this,arguments)}}();return r.a.createElement("div",{style:{height:"60vh"}},r.a.createElement("h1",null,"Upload Images"),r.a.createElement("input",{type:"file",name:"file",placeholder:"Upload an image",onChange:m}),i?r.a.createElement("h3",null,"Loading...."):r.a.createElement("img",{src:a,style:{width:"300px"}}),r.a.createElement("button",{type:"submit"},"Submit"))},W=function(e){Object(c.a)(a,e);var t=Object(m.a)(a);function a(){var e;Object(s.a)(this,a);for(var n=arguments.length,r=new Array(n),o=0;o<n;o++)r[o]=arguments[o];return(e=t.call.apply(t,[this].concat(r))).state={user:e.props.user},e.setUser=function(t){e.setState({user:t})},e.updatePage=function(){e.forceUpdate()},e}return Object(i.a)(a,[{key:"render",value:function(){var e=this;return r.a.createElement("div",{className:"App"},r.a.createElement(f,{setUser:this.setUser,user:this.state.user,updatePage:this.updatePage}),r.a.createElement(u.b,{exact:!0,path:"/",component:h}),r.a.createElement(u.b,{exact:!0,path:"/signup",render:function(t){return r.a.createElement(k,{history:t.history,user:e.state.user,setUser:e.setUser})}}),r.a.createElement(u.b,{exact:!0,path:"/login",render:function(t){return r.a.createElement(N,{history:t.history,setUser:e.setUser})}}),r.a.createElement(u.b,{exact:!0,path:"/userportal",render:function(t){return r.a.createElement(F,Object.assign({},t,{user:e.state.user}))}}),r.a.createElement(u.b,{exact:!0,path:"/berlin",render:function(t){return r.a.createElement(x,Object.assign({},t,{user:e.state.user}))}}),r.a.createElement(u.b,{exact:!0,path:"/addRoom",component:z}),r.a.createElement(u.b,{exact:!0,path:"/uploadphotos",component:I}),r.a.createElement(S,null))}}]),a}(r.a.Component);Boolean("localhost"===window.location.hostname||"[::1]"===window.location.hostname||window.location.hostname.match(/^127(?:\.(?:25[0-5]|2[0-4][0-9]|[01]?[0-9][0-9]?)){3}$/));localStorage.getItem("lang")||localStorage.setItem("lang","de"),b.a.get("/api/auth/loggedin").then((function(e){e.data?l.a.render(r.a.createElement(g.a,null,r.a.createElement(W,{user:e.data})),document.getElementById("root")):l.a.render(r.a.createElement(g.a,null,r.a.createElement(W,null)),document.getElementById("root"))})),"serviceWorker"in navigator&&navigator.serviceWorker.ready.then((function(e){e.unregister()})).catch((function(e){console.error(e.message)}))}},[[40,1,2]]]);
//# sourceMappingURL=main.e27d8f5d.chunk.js.map