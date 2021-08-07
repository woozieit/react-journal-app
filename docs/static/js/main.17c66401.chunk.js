(this["webpackJsonpjournal-app"]=this["webpackJsonpjournal-app"]||[]).push([[0],{170:function(e,t,n){},171:function(e,t,n){"use strict";n.r(t);var a=n(1),c=n(26),r=n.n(c),s=n(6),i=n(23),o=n(59),u="[Auth] Login",l="[Auth] Logout",d="[UI] Set Error",j="[UI] Remove Error",b="[UI] Start Loading",p="[UI] Finish Loading",m="[Notes] New note",f="[Notes] Set active note",h="[Notes] Load notes",O="[Notes] Updated note saved",x="[Notes] Delete note",v="[Notes] Logout Cleaning",_=n(39),y=n(3),g={notes:[],active:null},w={loading:!1,msgError:null},N="undefined"!==typeof window&&window.__REDUX_DEVTOOLS_EXTENSION_COMPOSE__||i.c,k=Object(i.b)({auth:function(){var e=arguments.length>0&&void 0!==arguments[0]?arguments[0]:{},t=arguments.length>1?arguments[1]:void 0;switch(t.type){case u:return{uid:t.payload.uid,name:t.payload.displayName};case l:return{};default:return e}},ui:function(){var e=arguments.length>0&&void 0!==arguments[0]?arguments[0]:w,t=arguments.length>1?arguments[1]:void 0;switch(t.type){case d:return Object(y.a)(Object(y.a)({},e),{},{msgError:t.payload});case j:return Object(y.a)(Object(y.a)({},e),{},{msgError:null});case b:return Object(y.a)(Object(y.a)({},e),{},{loading:!0});case p:return Object(y.a)(Object(y.a)({},e),{},{loading:!1});default:return e}},notes:function(){var e=arguments.length>0&&void 0!==arguments[0]?arguments[0]:g,t=arguments.length>1?arguments[1]:void 0;switch(t.type){case f:return Object(y.a)(Object(y.a)({},e),{},{active:Object(y.a)({},t.payload)});case m:return Object(y.a)(Object(y.a)({},e),{},{notes:[t.payload].concat(Object(_.a)(e.notes))});case h:return Object(y.a)(Object(y.a)({},e),{},{notes:Object(_.a)(t.payload)});case O:return Object(y.a)(Object(y.a)({},e),{},{notes:e.notes.map((function(e){return e.id===t.payload.id?t.payload.note:e}))});case x:return Object(y.a)(Object(y.a)({},e),{},{active:null,notes:e.notes.filter((function(e){return e.id!==t.payload}))});case v:return Object(y.a)(Object(y.a)({},e),{},{active:null,notes:[]});default:return e}}}),C=Object(i.d)(k,N(Object(i.a)(o.a))),S=n(7),E=n.n(S),I=n(9),A=n(15),L=n(16),P=n(8),D=n(22),U=n.n(D);n(73),n(77);U.a.initializeApp({apiKey:"AIzaSyCcHtGSNgqy624yJHxm4QBVMAP93fHF-us",authDomain:"react-app-cursos-27c23.firebaseapp.com",projectId:"react-app-cursos-27c23",storageBucket:"react-app-cursos-27c23.appspot.com",messagingSenderId:"841461271493",appId:"1:841461271493:web:6ebc5f765f9bad391e19ac"});var q=U.a.firestore(),F=new U.a.auth.GoogleAuthProvider,R=n(29),W=function(){var e=arguments.length>0&&void 0!==arguments[0]?arguments[0]:{},t=Object(a.useState)(e),n=Object(A.a)(t,2),c=n[0],r=n[1],s=function(){var t=arguments.length>0&&void 0!==arguments[0]?arguments[0]:e;r(t)},i=function(e){var t=e.target;r(Object(y.a)(Object(y.a)({},c),{},Object(R.a)({},t.name,t.value)))};return[c,i,s]},G=n(17),H=n.n(G),T=function(){var e=Object(I.a)(E.a.mark((function e(t){var n,a,c;return E.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return"https://api.cloudinary.com/v1_1/dccl8ymqy/upload",(n=new FormData).append("upload_preset","react-journal"),n.append("file",t),e.prev=4,e.next=7,fetch("https://api.cloudinary.com/v1_1/dccl8ymqy/upload",{method:"POST",body:n});case 7:if(!(a=e.sent).ok){e.next=15;break}return e.next=11,a.json();case 11:return c=e.sent,e.abrupt("return",c.secure_url);case 15:return e.next=17,a.json();case 17:throw e.sent;case 18:e.next=23;break;case 20:throw e.prev=20,e.t0=e.catch(4),e.t0;case 23:case"end":return e.stop()}}),e,null,[[4,20]])})));return function(t){return e.apply(this,arguments)}}(),z=function(){var e=Object(I.a)(E.a.mark((function e(t){var n,a;return E.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return e.next=2,q.collection("".concat(t,"/journal/notes")).get();case 2:return n=e.sent,a=[],n.forEach((function(e){a.push(Object(y.a)({id:e.id},e.data()))})),e.abrupt("return",a);case 6:case"end":return e.stop()}}),e)})));return function(t){return e.apply(this,arguments)}}(),B=function(e,t){return{type:f,payload:Object(y.a)({id:e},t)}},J=function(e,t){return{type:m,payload:Object(y.a)({id:e},t)}},M=function(e){return function(){var t=Object(I.a)(E.a.mark((function t(n){var a;return E.a.wrap((function(t){for(;;)switch(t.prev=t.next){case 0:return t.next=2,z(e);case 2:a=t.sent,n(V(a));case 4:case"end":return t.stop()}}),t)})));return function(e){return t.apply(this,arguments)}}()},V=function(e){return{type:h,payload:e}},X=function(e){return function(){var t=Object(I.a)(E.a.mark((function t(n,a){var c,r;return E.a.wrap((function(t){for(;;)switch(t.prev=t.next){case 0:return c=a().auth.uid,e.url||delete e.url,delete(r=Object(y.a)({},e)).id,t.next=6,q.doc("".concat(c,"/journal/notes/").concat(e.id)).update(r);case 6:n(K(e.id,r)),H.a.fire("Saved",e.title,"success");case 8:case"end":return t.stop()}}),t)})));return function(e,n){return t.apply(this,arguments)}}()},K=function(e,t){return{type:O,payload:{id:e,note:Object(y.a)({id:e},t)}}},Q=function(e){return{type:x,payload:e}},Y=function(e){return{type:d,payload:e}},Z=function(){return{type:p}},$=function(e,t){return function(n){n({type:b}),U.a.auth().signInWithEmailAndPassword(e,t).then((function(e){var t=e.user;n(ee(t.uid,t.displayName)),n(Z())})).catch((function(e){n(Z()),H.a.fire("Error",e.message,"error")}))}},ee=function(e,t){return{type:u,payload:{uid:e,displayName:t}}},te=function(){return{type:l}},ne=n(0),ae=function(){var e=Object(s.b)(),t=Object(s.c)((function(e){return e.ui})).loading,n=W({email:"nando@gmail.com",password:"123456"}),a=Object(A.a)(n,2),c=a[0],r=a[1],i=c.email,o=c.password;return Object(ne.jsxs)(ne.Fragment,{children:[Object(ne.jsx)("h3",{className:"auth__title",children:"Login"}),Object(ne.jsxs)("form",{onSubmit:function(t){t.preventDefault(),e($(i,o))},className:"animate__animated animate__fadeIn animate__faster",children:[Object(ne.jsx)("input",{type:"text",placeholder:"Email",name:"email",className:"auth__input",autoComplete:"off",value:i,onChange:r}),Object(ne.jsx)("input",{type:"password",placeholder:"Password",name:"password",className:"auth__input",value:o,onChange:r}),Object(ne.jsx)("button",{type:"submit",className:"btn btn-primary btn-block",disabled:t,children:"Login"}),Object(ne.jsxs)("div",{className:"auth__social-networks",children:[Object(ne.jsx)("p",{children:"Login with social networks"}),Object(ne.jsxs)("div",{className:"google-btn",onClick:function(){e((function(e){U.a.auth().signInWithPopup(F).then((function(t){var n=t.user;e(ee(n.uid,n.displayName))}))}))},children:[Object(ne.jsx)("div",{className:"google-icon-wrapper",children:Object(ne.jsx)("img",{className:"google-icon",src:"https://upload.wikimedia.org/wikipedia/commons/5/53/Google_%22G%22_Logo.svg",alt:"google button"})}),Object(ne.jsx)("p",{className:"btn-text",children:Object(ne.jsx)("b",{children:"Sign in with google"})})]})]}),Object(ne.jsx)(L.b,{className:"link",to:"/auth/register",children:"Create new account"})]})]})},ce=n(60),re=n.n(ce),se=function(){var e=Object(s.b)(),t=Object(s.c)((function(e){return e.ui})).msgError,n=W({name:"Hernando",email:"nando@gmail.com",password:"123456",password2:"123456"}),a=Object(A.a)(n,2),c=a[0],r=a[1],i=c.name,o=c.email,u=c.password,l=c.password2,d=function(){return 0===i.trim().length?(e(Y("Name is required!")),!1):re.a.isEmail(o)?u!==l||u.length<5?(e(Y("Password incorrectly")),!1):(e({type:j}),!0):(e(Y("Email is not valid!")),!1)};return Object(ne.jsxs)(ne.Fragment,{children:[Object(ne.jsx)("h3",{className:"auth__title",children:"Register"}),Object(ne.jsxs)("form",{onSubmit:function(t){t.preventDefault(),d()&&e(function(e,t,n){return function(a){U.a.auth().createUserWithEmailAndPassword(e,t).then(function(){var e=Object(I.a)(E.a.mark((function e(t){var c;return E.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return c=t.user,e.next=3,c.updateProfile({displayName:n});case 3:a(ee(c.uid,c.displayName));case 4:case"end":return e.stop()}}),e)})));return function(t){return e.apply(this,arguments)}}()).catch((function(e){H.a.fire("Error",e.message,"error")}))}}(o,u,i))},class:"animate__animated animate__fadeIn animate__faster",children:[t&&Object(ne.jsx)("div",{className:"auth__alert-error",children:t}),Object(ne.jsx)("input",{type:"text",placeholder:"Name",name:"name",className:"auth__input",autoComplete:"off",value:i,onChange:r}),Object(ne.jsx)("input",{type:"text",placeholder:"Email",name:"email",className:"auth__input",autoComplete:"off",value:o,onChange:r}),Object(ne.jsx)("input",{type:"password",placeholder:"Password",name:"password",className:"auth__input",value:u,onChange:r}),Object(ne.jsx)("input",{type:"password",placeholder:"Confirm password",name:"password2",className:"auth__input",value:l,onChange:r}),Object(ne.jsx)("button",{className:"btn btn-primary btn-block mb-5",type:"submit",children:"Register"}),Object(ne.jsx)(L.b,{className:"link",to:"/auth/login",children:"Already registered?"})]})]})},ie=function(){return Object(ne.jsx)("div",{className:"auth__main",children:Object(ne.jsx)("div",{className:"auth__box-container",children:Object(ne.jsxs)(P.d,{children:[Object(ne.jsx)(P.b,{exact:!0,path:"/auth/login",component:ae}),Object(ne.jsx)(P.b,{exact:!0,path:"/auth/register",component:se}),Object(ne.jsx)(P.a,{to:"/auth/login"})]})})})},oe=n(30),ue=["isAuthenticated","component"],le=function(e){var t=e.isAuthenticated,n=e.component,a=Object(oe.a)(e,ue);return Object(ne.jsx)(P.b,Object(y.a)(Object(y.a)({},a),{},{component:function(e){return t?Object(ne.jsx)(n,Object(y.a)({},e)):Object(ne.jsx)(P.a,{to:"/auth/login"})}}))},de=["isAuthenticated","component"],je=function(e){var t=e.isAuthenticated,n=e.component,a=Object(oe.a)(e,de);return Object(ne.jsx)(P.b,Object(y.a)(Object(y.a)({},a),{},{component:function(e){return t?Object(ne.jsx)(P.a,{to:"/"}):Object(ne.jsx)(n,Object(y.a)({},e))}}))},be=n(61),pe=n.n(be),me=function(e){var t=e.id,n=e.date,a=e.title,c=e.body,r=e.url,i=pe()(n),o=Object(s.b)();return Object(ne.jsxs)("div",{className:"journal__entry pointer animate__animated animate__fadeIn animate__faster",onClick:function(){o(B(t,{date:n,title:a,body:c,url:r}))},children:[r&&Object(ne.jsx)("div",{className:"journal__entry-picture",style:{backgroundSize:"cover",backgroundImage:"url(".concat(r,")")}}),Object(ne.jsxs)("div",{className:"journal__entry-body",children:[Object(ne.jsx)("p",{className:"journal__entry-title",children:a}),Object(ne.jsx)("p",{className:"journal__entry-content",children:c})]}),Object(ne.jsxs)("div",{className:"journal__entry-date-box",children:[Object(ne.jsx)("span",{children:i.format("dddd")}),Object(ne.jsx)("h4",{children:i.format("Do")})]})]})},fe=function(){var e=Object(s.c)((function(e){return e.notes})).notes;return Object(ne.jsx)("div",{className:"journal__entries",children:e.map((function(e){return Object(ne.jsx)(me,Object(y.a)({},e),e.id)}))})},he=function(){var e=Object(s.b)(),t=Object(s.c)((function(e){return e.auth})).name;return Object(ne.jsxs)("aside",{className:"journal__sidebar",children:[Object(ne.jsxs)("div",{className:"journal__sidebar-navbar",children:[Object(ne.jsxs)("h3",{className:"mt-5",children:[Object(ne.jsx)("i",{className:"far fa-moon"}),Object(ne.jsxs)("span",{children:[" ",t]})]}),Object(ne.jsx)("button",{className:"btn",onClick:function(){e(function(){var e=Object(I.a)(E.a.mark((function e(t){return E.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return e.next=2,U.a.auth().signOut();case 2:t(te()),t({type:v});case 4:case"end":return e.stop()}}),e)})));return function(t){return e.apply(this,arguments)}}())},children:"Logout"})]}),Object(ne.jsxs)("div",{className:"journal__new-entry",onClick:function(){e(function(){var e=Object(I.a)(E.a.mark((function e(t,n){var a,c,r;return E.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return a=n().auth.uid,c={title:"",body:"",date:(new Date).getTime()},e.next=4,q.collection("".concat(a,"/journal/notes")).add(c);case 4:r=e.sent,t(B(r.id,c)),t(J(r.id,c));case 7:case"end":return e.stop()}}),e)})));return function(t,n){return e.apply(this,arguments)}}())},children:[Object(ne.jsx)("i",{className:"far fa-calendar-plus fa-5x"}),Object(ne.jsx)("p",{className:"mt-5",children:"New entry"})]}),Object(ne.jsx)(fe,{})]})},Oe=function(){var e=Object(s.b)(),t=Object(s.c)((function(e){return e.notes})).active;return Object(ne.jsxs)("div",{className:"notes__appbar",children:[Object(ne.jsx)("span",{children:"28 de deciembre del 2021"}),Object(ne.jsx)("input",{id:"fileSelector",type:"file",name:"file",style:{display:"none"},onChange:function(t){var n=t.target.files[0];n&&e(function(e){return function(){var t=Object(I.a)(E.a.mark((function t(n,a){var c,r;return E.a.wrap((function(t){for(;;)switch(t.prev=t.next){case 0:return c=a().notes.active,H.a.fire({title:"Uploading...",text:"Please wait...",allowOutsideClick:!1,didOpen:function(){H.a.showLoading()}}),t.next=4,T(e);case 4:r=t.sent,c.url=r,n(X(c)),H.a.close();case 8:case"end":return t.stop()}}),t)})));return function(e,n){return t.apply(this,arguments)}}()}(n))}}),Object(ne.jsxs)("div",{children:[Object(ne.jsx)("button",{className:"btn",onClick:function(){document.querySelector("#fileSelector").click()},children:"Picture"}),Object(ne.jsx)("button",{className:"btn",onClick:function(){e(X(t))},children:"Save"})]})]})},xe=function(){var e=Object(s.c)((function(e){return e.notes})).active,t=W(e),n=Object(A.a)(t,3),c=n[0],r=n[1],i=n[2],o=c.body,u=c.title,l=c.id,d=Object(a.useRef)(e.id),j=Object(s.b)();Object(a.useEffect)((function(){e.id!==d.current&&(i(e),d.current=e.id)}),[e,i]),Object(a.useEffect)((function(){j(B(c.id,Object(y.a)({},c)))}),[c,j]);return Object(ne.jsxs)("div",{className:"notes__main-content",children:[Object(ne.jsx)(Oe,{}),Object(ne.jsxs)("div",{className:"notes__content",children:[Object(ne.jsx)("input",{type:"text",placeholder:"Some awesome title",className:"notes__title-input",autoComplete:"off",name:"title",value:u,onChange:r}),Object(ne.jsx)("textarea",{placeholder:"What happened today",className:"notes__textarea",name:"body",value:o,onChange:r}),e.url&&Object(ne.jsx)("div",{className:"notes__image",children:Object(ne.jsx)("img",{src:e.url,alt:"imagen"})})]}),Object(ne.jsx)("button",{className:"btn btn-danger",onClick:function(){j(function(e){return function(){var t=Object(I.a)(E.a.mark((function t(n,a){var c;return E.a.wrap((function(t){for(;;)switch(t.prev=t.next){case 0:return c=a().auth.uid,t.next=3,q.doc("".concat(c,"/journal/notes/").concat(e)).delete();case 3:n(Q(e));case 4:case"end":return t.stop()}}),t)})));return function(e,n){return t.apply(this,arguments)}}()}(l))},children:"Delete"})]})},ve=function(){return Object(ne.jsxs)("div",{className:"nothing__main-content",children:[Object(ne.jsxs)("p",{children:["Select something",Object(ne.jsx)("br",{}),"pr create an entry!"]}),Object(ne.jsx)("i",{className:"far fa-star fa-4x mt-5"})]})},_e=function(){var e=Object(s.c)((function(e){return e.notes})).active;return Object(ne.jsxs)("div",{className:"journal__main-content animate__animated animate__fadeIn animate__faster",children:[Object(ne.jsx)(he,{}),Object(ne.jsx)("main",{children:e?Object(ne.jsx)(xe,{}):Object(ne.jsx)(ve,{})})]})},ye=function(){var e=Object(s.b)(),t=Object(a.useState)(!0),n=Object(A.a)(t,2),c=n[0],r=n[1],i=Object(a.useState)(!1),o=Object(A.a)(i,2),u=o[0],l=o[1];return Object(a.useEffect)((function(){U.a.auth().onAuthStateChanged(function(){var t=Object(I.a)(E.a.mark((function t(n){return E.a.wrap((function(t){for(;;)switch(t.prev=t.next){case 0:(null===n||void 0===n?void 0:n.uid)?(e(ee(n.uid,n.displayName)),l(!0),e(M(n.uid))):l(!1),r(!1);case 2:case"end":return t.stop()}}),t)})));return function(e){return t.apply(this,arguments)}}())}),[e,r,l]),c?Object(ne.jsx)("h1",{children:"Wait..."}):Object(ne.jsx)(L.a,{children:Object(ne.jsx)("div",{children:Object(ne.jsxs)(P.d,{children:[Object(ne.jsx)(je,{path:"/auth",component:ie,isAuthenticated:u}),Object(ne.jsx)(le,{exact:!0,isAuthenticated:u,path:"/",component:_e}),Object(ne.jsx)(P.a,{to:"/auth/login"})]})})})},ge=function(){return Object(ne.jsx)(s.a,{store:C,children:Object(ne.jsx)(ye,{})})};n(170);r.a.render(Object(ne.jsx)(ge,{}),document.getElementById("root"))}},[[171,1,2]]]);
//# sourceMappingURL=main.17c66401.chunk.js.map