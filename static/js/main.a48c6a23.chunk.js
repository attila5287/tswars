(this.webpackJsonptswars=this.webpackJsonptswars||[]).push([[0],{119:function(e,t,s){"use strict";s.r(t);var a=s(2),n=s.n(a),c=s(37),i=s.n(c),r=(s(17),s(42),s(6)),l=s.n(r),o=s(14),j=s(10),m=s(15),u=s.n(m),d=s(16),b=s.n(d),x=s(4),h=s(0),f=function(e){var t=e.char;return Object(h.jsxs)("div",{className:"container",children:[Object(h.jsx)(x.Animated,{animationIn:"fadeIn",animationOut:"bounceOut",isVisible:!0,children:Object(h.jsxs)("h1",{className:"text-warning d-flex flex-row justify-content-between my-5",children:[Object(h.jsx)("i",{className:"text-2xl fab fa-rebel"}),Object(h.jsx)("i",{className:"text-capitalize",children:t.name}),Object(h.jsx)("i",{className:"text-2xl fab fa-empire"})]})}),Object(h.jsxs)("div",{className:"text-warning d-flex flex-row justify-content-around",children:[Object(h.jsx)(x.Animated,{animationIn:"flipInY",animationOut:"bounceInLeft",isVisible:!0,className:"w-100",children:Object(h.jsxs)("ul",{className:"h-100 w-100 list-group text-center text-uppercase",children:[Object(h.jsxs)("li",{className:"list-group-item",children:["height : ",t.height]}),Object(h.jsxs)("li",{className:"list-group-item",children:["mass : ",t.mass]}),Object(h.jsxs)("li",{className:"list-group-item",children:["hair_color : ",t.hair_color]}),Object(h.jsxs)("li",{className:"list-group-item",children:["skin_color : ",t.skin_color]}),Object(h.jsxs)("li",{className:"list-group-item",children:["eye_color : ",t.eye_color]}),Object(h.jsxs)("li",{className:"list-group-item",children:["birth_year : ",t.birth_year]}),Object(h.jsxs)("li",{className:"list-group-item",children:["gender : ",t.gender]})]})}),Object(h.jsx)(x.Animated,{animationIn:"flipInY",animationOut:"bounceInLeft",isVisible:!0,className:"w-100",children:Object(h.jsxs)("ul",{className:"h-100 w-100 list-group text-center text-uppercase",children:[Object(h.jsxs)("li",{className:"list-group-item",children:["edited : ",b.a.formatDate(t.edited)]}),Object(h.jsxs)("li",{className:"list-group-item",children:["homeworld :",Object(h.jsx)("a",{href:t.homeworld,className:"text-warning",children:Object(h.jsx)("i",{className:"fas fa-globe"})})]}),Object(h.jsxs)("li",{className:"list-group-item",children:["url :",Object(h.jsx)("a",{href:t.url,className:"text-warning",children:Object(h.jsx)("i",{className:"fas fa-external-link-alt"})})]}),Object(h.jsxs)("li",{className:"list-group-item",children:["species : ",t.species.map((function(e){return Object(h.jsx)("i",{children:Object(h.jsxs)("a",{href:e,className:"text-warning",children:[Object(h.jsx)("i",{className:"fas fa-dna mx-1"}),e.split("/")[5]]})},e)}))]}),Object(h.jsxs)("li",{className:"list-group-item",children:["vehicles : ",t.vehicles.map((function(e){return Object(h.jsx)("i",{children:Object(h.jsxs)("a",{href:e,className:"text-warning",children:[Object(h.jsx)("i",{className:"fas fa-space-shuttle mx-1"}),e.split("/")[5]]})},e)}))]}),Object(h.jsxs)("li",{className:"list-group-item",children:["starships : ",t.starships.map((function(e){return Object(h.jsx)("i",{children:Object(h.jsxs)("a",{href:e,className:"text-warning",children:[Object(h.jsx)("i",{className:"fas fa-rocket mx-1"}),e.split("/")[5]]})},e)}))]}),Object(h.jsxs)("li",{className:"list-group-item",children:["films : ",t.films.map((function(e){return Object(h.jsx)("i",{children:Object(h.jsxs)("a",{href:e,className:"text-warning",children:[Object(h.jsx)("i",{className:"fas fa-film mx-1"}),e.split("/")[5]]})},e)}))]})]})})]}),Object(h.jsxs)("p",{className:"text-center text-warning my-5",children:[Object(h.jsx)("i",{className:"fas fa-info-circle mx-1"}),Object(h.jsxs)("i",{children:["created : ",b.a.formatDate(t.created)]})]})]})},p=function(e){return e.loading?Object(h.jsxs)("div",{className:"d-flex flex-row justify-content-center",children:[Object(h.jsx)("h1",{className:"midi fas fa-spinner fa-pulse mx-2"}),Object(h.jsx)(x.Animated,{animationIn:"slideInRight",animationOut:"bounceOut",isVisible:!0,children:Object(h.jsx)("h2",{children:"Loading..."})})]}):Object(h.jsx)(h.Fragment,{children:e.children})};var O=function(){var e=Object(a.useState)([]),t=Object(j.a)(e,2),s=t[0],n=t[1],c=Object(a.useState)([]),i=Object(j.a)(c,2),r=i[0],m=i[1],d=Object(a.useState)(!1),b=Object(j.a)(d,2),O=b[0],g=b[1],N=function(){var e=Object(o.a)(l.a.mark((function e(t){var s;return l.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return g(!0),e.prev=1,e.next=4,u.a.get("https://swapi.dev/api/people/?search="+t);case 4:s=e.sent,console.log("opts",s.data.results.map((function(e){return e.name}))),n(s.data.results.map((function(e){return e.name}))),e.next=12;break;case 9:e.prev=9,e.t0=e.catch(1),console.log("error",e.t0);case 12:return e.prev=12,g(!1),e.finish(12);case 15:case"end":return e.stop()}}),e,null,[[1,9,12,15]])})));return function(t){return e.apply(this,arguments)}}(),w=function(){var e=Object(o.a)(l.a.mark((function e(t){var s,a;return l.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return g(!0),e.prev=1,e.next=4,u.a.get("https://swapi.dev/api/people/?search="+t);case 4:s=e.sent,a=s.data,m(a.results),e.next=12;break;case 9:e.prev=9,e.t0=e.catch(1),console.log("err char fetch swapi");case 12:return e.prev=12,g(!1),e.finish(12);case 15:case"end":return e.stop()}}),e,null,[[1,9,12,15]])})));return function(t){return e.apply(this,arguments)}}();function v(e){var t=e.target.value.trim();console.log(">> q",t),w(t),N(t)}return Object(a.useEffect)((function(){N("skywalker")}),[]),Object(a.useEffect)((function(){w("skywalker")}),[]),Object(h.jsxs)("div",{children:[Object(h.jsx)("nav",{className:"navbar navbar-expand navbar-dark bg-primary pt-0 pb-1",children:Object(h.jsxs)("div",{className:"mini d-flex flex-row",children:[Object(h.jsx)("div",{className:"btn btn-lg btn-outline-warning disabled my-sm-0 text-nowrap border-none",children:Object(h.jsx)("h1",{className:"fas fa-text-height"})}),Object(h.jsx)("input",{className:"w-100 form-control-dark shadow-none form-control-lg text-uppercase",onChange:function(e){return v(e)},defaultValue:"skywalker"}),Object(h.jsx)("div",{className:"btn btn-lg btn-outline-warning disabled my-sm-0 text-nowrap border-none",children:Object(h.jsx)("h1",{className:"fab fa-react fa-spin"})}),Object(h.jsx)("select",{className:"w-100 form-group form-select",onChange:function(e){return v(e)},defaultValue:"anakin",children:s.map((function(e,t){return Object(h.jsx)("option",{value:e,children:e},t)}))})]})}),Object(h.jsxs)("div",{className:"mini",children:[Object(h.jsxs)("p",{children:[Object(h.jsx)("i",{className:"fas fa-question-circle mx-3"}),"Type star wars character name and use dropdown menu to select a specific result"]}),Object(h.jsx)("div",{className:"container pt-2",children:Object(h.jsx)(p,{loading:O,children:r.map((function(e,t){return Object(h.jsx)(x.Animated,{animationIn:"fadeIn",animationOut:"bounceInLeft",isVisible:!0,animationInDelay:1e3*t,children:Object(h.jsx)(f,{char:e},e.name)},t)}))})})]})]})},g=function(e){e&&e instanceof Function&&s.e(3).then(s.bind(null,120)).then((function(t){var s=t.getCLS,a=t.getFID,n=t.getFCP,c=t.getLCP,i=t.getTTFB;s(e),a(e),n(e),c(e),i(e)}))};i.a.render(Object(h.jsx)(n.a.StrictMode,{children:Object(h.jsx)(O,{})}),document.getElementById("root")),g()},16:function(e,t){e.exports={formatAmount:function(e,t){return"minus"==e?"$ ("+parseInt(t).toLocaleString()+")":"$ "+parseInt(t).toLocaleString()},formatDate:function(e){return"".concat(new Date(e).getMonth()+1,"/").concat(new Date(e).getDate(),"/").concat(new Date(e).getFullYear()+5)}}},17:function(e,t,s){}},[[119,1,2]]]);
//# sourceMappingURL=main.a48c6a23.chunk.js.map