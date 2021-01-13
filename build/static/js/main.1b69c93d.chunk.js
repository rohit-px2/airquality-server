(this.webpackJsonpclient=this.webpackJsonpclient||[]).push([[0],{48:function(e,t,n){},81:function(e,t,n){"use strict";n.r(t);var a=n(1),c=n(2),r=n(16),s=n.n(r),o=(n(48),n(25)),i=n(6),l=n(10),u=n.n(l),d=n(14),j=n(15),b=n.n(j),h="/api/info",p="/api/users/location",x=null;function O(){return(O=Object(d.a)(u.a.mark((function e(t){var n;return u.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return e.next=2,b.a.get("".concat(h,"/").concat(t.country,"/").concat(t.city));case 2:return n=e.sent,e.abrupt("return",n.data);case 4:case"end":return e.stop()}}),e)})))).apply(this,arguments)}function m(){return(m=Object(d.a)(u.a.mark((function e(t){var n,a;return u.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return n={headers:{Authorization:x}},e.next=3,b.a.post(p,t,n);case 3:return a=e.sent,e.abrupt("return",a);case 5:case"end":return e.stop()}}),e)})))).apply(this,arguments)}var f={getAQI:function(e){return O.apply(this,arguments)},setToken:function(e){x="bearer ".concat(e)},create:function(e){return m.apply(this,arguments)}},g="/api/location";function v(){return(v=Object(d.a)(u.a.mark((function e(){var t;return u.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return e.next=2,b.a.get(g);case 2:return t=e.sent,e.abrupt("return",t.data);case 4:case"end":return e.stop()}}),e)})))).apply(this,arguments)}var y={getLocation:function(){return v.apply(this,arguments)}};function N(){return Object(a.jsxs)("footer",{className:"container py-5 transparent",children:[Object(a.jsx)("h2",{className:"text-center text-white",children:"Information Provided by the World Air Quality Index"}),Object(a.jsxs)("h3",{className:"m-4 text-center text-white",children:["Website made by",Object(a.jsx)("a",{href:"https://github.com/rohit-px2",className:"text-decoration-none",children:" Rohit Pradhan"})]})]})}var w=n(82);function S(e){var t=e.city,n=e.country,r=e.setLocation,s=e.user,o=e.addLocation,l=Object(c.useState)(""),u=Object(i.a)(l,2),d=u[0],j=u[1],b=Object(c.useState)(""),h=Object(i.a)(b,2),p=h[0],x=h[1];function O(){o({city:t,country:n})}return Object(a.jsxs)(w.a,{className:"p-5 m-0 transparent text-white",children:[s&&s&&s.locations&&void 0===s.locations.find((function(e){return e.city===t&&e.country===n}))?Object(a.jsx)("button",{className:"btn btn-secondary mr-auto",onClick:O,type:"button",children:"Add to Dashboard"}):null,Object(a.jsxs)("div",{className:"row row-header justify-content-center",children:[Object(a.jsx)("div",{className:"col-12 mr-5",children:Object(a.jsxs)("h1",{style:{fontSize:"4rem"},className:"text-center",children:[t,", ",n]})}),Object(a.jsxs)("form",{onSubmit:function(){r({city:d,country:p})},className:"mt-2",children:[Object(a.jsxs)("div",{className:"row mr-5",children:[Object(a.jsx)("div",{className:"col",children:Object(a.jsx)("input",{type:"text",value:d,onChange:function(e){return j(e.target.value)},placeholder:"City...",className:"form-control mr-2"})}),Object(a.jsx)("div",{className:"col",children:Object(a.jsx)("input",{type:"text",value:p,onChange:function(e){return x(e.target.value)},placeholder:"Country...",className:" form-control ml-2"})})]}),Object(a.jsx)("div",{className:"row justify-content-center mr-5 mt-3",children:Object(a.jsx)("button",{type:"submit",className:"btn btn-primary",children:"Submit"})})]})]})]})}var k=n(83),U=n(84),C={Safe:"The air quality is very good. Air pollution poses very little to no risk to anyone.","Moderately Safe":"The air quality is moderately safe. Active children and adults, and people with respiratory disease, such as asthma, should limit prolonged outdoor exertion.","Moderately Unhealthy":"Active children and adults, and people with respiratory disease, such as asthma, should limit prolonged outdoor exertion.",Unhealthy:"Active children and adults, and people with respiratory disease, such as asthma, should avoid prolonged outdoor exertion; everyone else, especially children, should limit prolonged outdoor exertion","Very Unhealthy":"Active children and adults, and people with respiratory disease, such as asthma, should avoid all outdoor exertion; everyone else, especially children, should limit outdoor exertion.",Hazardous:"Everyone should avoid all outdoor exertion."},A={Safe:"#43a047","Moderately Safe":"#fdd835","Moderately Unhealthy":"#f4511e",Unhealthy:"#e53935","Very Unhealthy":"#5e35b1",Hazardous:"#C04000"};function L(e){var t=e.aqi,n=Object(c.useState)(""),r=Object(i.a)(n,2),s=r[0],o=r[1];Object(c.useEffect)((function(){null!==t&&(t<=50?o("Safe"):t>50&&t<=100?o("Moderately Safe"):t>100&&t<=150?o("Moderately Unhealthy"):t>150&&t<=200?o("Unhealthy"):t>200&&t<=300?o("Very Unhealthy"):t>300&&o("Hazardous"))}),[t]);var l={backgroundColor:A[s]};return Object(a.jsxs)(w.a,{style:{backdropFilter:"blur(6px)"},className:"text-white transparent",children:[Object(a.jsx)(k.a,{style:l,className:"mr-auto p-3",children:Object(a.jsxs)(U.a,{children:[Object(a.jsxs)("h1",{className:"text-dark text-center",children:["AQI: ",t]}),Object(a.jsx)("h2",{className:"text-dark text-center",children:s})]})}),Object(a.jsx)("p",{className:"h4 ml-auto p-3 text-center",children:C[s]})]})}var I={co:"Carbon Monoxide",o3:"Ozone",so2:"Sulfur Dioxide",no2:"Nitrogen Dioxide",pm10:Object(a.jsxs)("span",{children:["PM",Object(a.jsx)("sub",{children:"10"})]}),pm25:Object(a.jsxs)("span",{children:["PM",Object(a.jsx)("sub",{children:"2.5"})]}),t:"Temperature",w:"Wind Speed",p:"Air Pressure",h:"Humidity"},M=" ppm",P={co:M,o3:M,so2:M,no2:M,t:Object(a.jsxs)("span",{children:[Object(a.jsx)("sup",{children:" o"}),"C"]}),w:" km/h",p:" hPa",h:Object(a.jsxs)("span",{children:[" g/cm",Object(a.jsx)("sup",{children:"3"})]})};function T(e){var t=e.stat;if(void 0!==t&&null!==t){var n=Object.keys(t)[0],c=t[n].v;return Object(a.jsxs)("div",{className:"d-flex text-white col-md-12 col-xs-6",children:[Object(a.jsx)("h2",{className:"mr-auto p-5",children:I[n]}),Object(a.jsxs)("h2",{className:"ml-auto p-5",children:[c,P[n]?P[n]:""]})]})}return null}function D(e){var t=e.stats;return void 0===t||null===t?null:t.map((function(e,t){return Object(a.jsx)(T,{stat:e},t)}))}var F=n(19);function q(e){var t=e.info,n=e.setLocation,c=e.user,r=e.addLocation;return Object(a.jsxs)(a.Fragment,{children:[Object(a.jsx)(F.b,{children:Object(a.jsx)("title",{children:"AQInfo: ".concat(t.city,", ").concat(t.country)})}),Object(a.jsxs)("div",{className:"container",children:[Object(a.jsx)(S,{setLocation:n,country:t.country,city:t.city,user:c,addLocation:r}),Object(a.jsx)(L,{aqi:t.aqi}),Object(a.jsx)(D,{stats:t.stats})]})]})}var J=n(87),z=n(85),Q=n(86),E="/api/login";function H(){return(H=Object(d.a)(u.a.mark((function e(t){var n;return u.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return e.next=2,b.a.post(E,t);case 2:return n=e.sent,e.abrupt("return",n);case 4:case"end":return e.stop()}}),e)})))).apply(this,arguments)}var V={login:function(e){return H.apply(this,arguments)}},W=n(5);function B(e){var t=e.isOpen,n=e.toggleModal,r=e.setUser,s=(Object(W.f)(),Object(c.useState)("")),o=Object(i.a)(s,2),l=o[0],u=o[1],d=Object(c.useState)(""),j=Object(i.a)(d,2),b=j[0],h=j[1],p=Object(c.useState)(null),x=Object(i.a)(p,2),O=x[0],m=x[1];function f(){u(""),h(""),m(null),n()}return Object(a.jsxs)(J.a,{isOpen:t,toggle:f,children:[Object(a.jsx)(z.a,{toggle:f,children:"Login"}),Object(a.jsx)("p",{className:"text-danger text-center",children:O||""}),Object(a.jsx)(Q.a,{children:Object(a.jsxs)("form",{onSubmit:function(e){return function(e){e.preventDefault(),V.login({username:l,password:b}).then((function(e){console.log(e.data),window.localStorage.setItem("loggedAqiUser",JSON.stringify(e.data)),r(e.data),window.location.replace("/")})).catch((function(e){m(e.response.data.error)}))}(e)},children:[Object(a.jsx)("label",{htmlFor:"username",children:"Username"}),Object(a.jsx)("input",{className:"form-control",onChange:function(e){return u(e.target.value)},type:"text",value:l,placeholder:"Username"}),Object(a.jsx)("br",{}),Object(a.jsx)("label",{htmlFor:"password",children:"Password"}),Object(a.jsx)("input",{className:"form-control",onChange:function(e){return h(e.target.value)},type:"password",value:b,placeholder:"Password"}),Object(a.jsx)("br",{}),Object(a.jsx)("div",{className:"d-flex justify-content-center",children:Object(a.jsx)("button",{className:"btn btn-success rounded",type:"submit",children:"Login"})})]})})]})}var R="/api/users";function G(){return(G=Object(d.a)(u.a.mark((function e(t){var n;return u.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return e.next=2,b.a.post(R,t);case 2:return n=e.sent,e.abrupt("return",n);case 4:case"end":return e.stop()}}),e)})))).apply(this,arguments)}var K={createUser:function(e){return G.apply(this,arguments)}};function X(e){var t=e.isOpen,n=e.toggleModal,r=(e.createUser,Object(W.f)(),Object(c.useState)("")),s=Object(i.a)(r,2),o=s[0],l=s[1],u=Object(c.useState)(""),d=Object(i.a)(u,2),j=d[0],b=d[1],h=Object(c.useState)(""),p=Object(i.a)(h,2),x=p[0],O=p[1],m=Object(c.useState)(""),f=Object(i.a)(m,2),g=f[0],v=f[1];function y(){b(""),O(""),v(""),l(""),n()}return Object(a.jsxs)(J.a,{isOpen:t,toggle:y,children:[Object(a.jsx)(z.a,{toggle:y,children:"Sign Up"}),Object(a.jsx)("p",{className:"text-success text-center",children:o}),Object(a.jsx)("p",{className:"text-danger text-center",children:g}),Object(a.jsx)(Q.a,{children:Object(a.jsxs)("form",{onSubmit:function(e){return function(e){e.preventDefault(),K.createUser({username:j,password:x}).then((function(e){l("Successfully signed up!"),setTimeout((function(){return window.location.replace("/")}),500)})).catch((function(e){409===e.response.status?v("That username is taken."):500===e.response.status&&v("Unable to sign up right now. Please try later.")}))}(e)},children:[Object(a.jsx)("label",{htmlFor:"username",children:"Username"}),Object(a.jsx)("input",{className:"form-control",onChange:function(e){return b(e.target.value)},type:"text",value:j,placeholder:"Username"}),Object(a.jsx)("br",{}),Object(a.jsx)("label",{htmlFor:"password",children:"Password"}),Object(a.jsx)("input",{className:"form-control",onChange:function(e){return O(e.target.value)},type:"password",value:x,placeholder:"Password"}),Object(a.jsx)("br",{}),Object(a.jsx)("div",{className:"d-flex justify-content-center",children:Object(a.jsx)("button",{className:"btn btn-success rounded",type:"submit",children:"Sign Up"})})]})})]})}function Y(e){var t=e.user,n=e.clearUser,r=e.setUser,s=Object(c.useState)(!1),o=Object(i.a)(s,2),l=o[0],u=o[1],d=Object(c.useState)(!1),j=Object(i.a)(d,2),b=j[0],h=j[1];function p(){console.log("Toggling login..."),u(!l)}function x(){console.log("Toggling signup..."),h(!b)}return Object(a.jsxs)("nav",{className:"navbar navbar-light bg-dark",children:[Object(a.jsxs)("div",{className:"container",children:[Object(a.jsxs)("ul",{className:"nav",children:[Object(a.jsx)("li",{className:"nav-item",children:Object(a.jsx)("a",{href:"/",className:"navbar-brand text-light",children:"AQInfo"})}),Object(a.jsx)("li",{className:"nav-item",children:Object(a.jsx)("a",{href:"/dashboard",className:"nav-link active text-light",children:"Dashboard"})})]}),Object(a.jsxs)("ul",{className:"nav",children:[Object(a.jsx)("li",{className:"nav-item px-2",children:null===t||void 0===t?Object(a.jsxs)("button",{className:"btn btn-outline-light rounded",onClick:function(){return p()},children:[Object(a.jsx)("span",{className:"fa fa-sign-in fa-lg"})," Login"]}):Object(a.jsx)("span",{className:"text-light",children:t.username})}),Object(a.jsx)("li",{className:"nav-item",children:null===t||void 0===t?Object(a.jsxs)("button",{className:"btn btn-outline-light rounded",onClick:function(){return x()},children:[Object(a.jsx)("span",{className:"fa fa-address-card fa-lg"})," Sign Up"]}):Object(a.jsx)("button",{className:"btn btn-outline-light rounded",onClick:function(){return n(),void window.location.replace("/")},children:"Log Out"})})]})]}),Object(a.jsx)(B,{isOpen:l,toggleModal:p,setUser:r}),Object(a.jsx)(X,{isOpen:b,toggleModal:x})]})}var Z=n(18);function $(e){var t=e.user,n=e.setLocation;var c=t?t.locations.map((function(e,t){return Object(a.jsx)("div",{className:"col-12 col-md-6 m-3",children:Object(a.jsxs)("button",{className:"btn btn-outline-light",onClick:function(){return function(e){n(e),window.location.assign("/")}(e)},children:[e.city,", ",e.country]})},t)})):null;return Object(a.jsxs)(a.Fragment,{children:[Object(a.jsx)(F.a,{children:Object(a.jsx)("title",{children:"Dashboard"})}),Object(a.jsxs)("div",{className:"container",children:[Object(a.jsx)("h2",{className:"text-center text-white p-2",children:"Dashboard"}),Object(a.jsx)("hr",{style:{backgroundColor:"white"},className:"m-2"}),c]})]})}function _(){var e=Object(c.useState)({}),t=Object(i.a)(e,2),n=t[0],r=t[1],s=Object(c.useState)({}),l=Object(i.a)(s,2),u=(l[0],l[1]),d=Object(c.useState)(null),j=Object(i.a)(d,2),b=j[0],h=j[1],p="loggedAqiUser";var x="location";function O(e){u(e),window.localStorage.setItem(x,JSON.stringify(e)),f.getAQI(e).then((function(e){return r(e)})).catch((function(e){return console.error("File not found:",e)}))}return Object(c.useEffect)((function(){var e=window.localStorage.getItem(p);if(e){var t=JSON.parse(e);h(t),f.setToken(t.token)}}),[]),Object(c.useEffect)((function(){var e=window.localStorage.getItem(x);e?O(JSON.parse(e)):y.getLocation().then((function(e){return O(e)}))}),[]),Object(a.jsxs)(Z.a,{children:[Object(a.jsx)(Y,{user:b,clearUser:function(){h(null),window.localStorage.clear()},setUser:function(e){h(e),f.setToken(e.token)}}),Object(a.jsxs)(W.c,{children:[Object(a.jsx)(W.a,{path:"/dashboard",children:Object(a.jsx)($,{user:b,setLocation:O})}),Object(a.jsx)(W.a,{path:"/",children:Object(a.jsx)(q,{info:n,setLocation:O,user:b,addLocation:function(e){f.create(e).then((function(t){var n=b.locations.concat(e),a=Object(o.a)(Object(o.a)({},b),{},{locations:n});window.localStorage.setItem(p,JSON.stringify(a)),h(a)})).catch((function(e){return console.log("Could not add to dashboard")}))}})})]}),Object(a.jsx)(N,{})]})}n(79),n(80);s.a.render(Object(a.jsx)(_,{}),document.getElementById("root"))}},[[81,1,2]]]);
//# sourceMappingURL=main.1b69c93d.chunk.js.map