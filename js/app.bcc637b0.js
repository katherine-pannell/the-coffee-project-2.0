(function(e){function t(t){for(var r,o,i=t[0],s=t[1],l=t[2],u=0,b=[];u<i.length;u++)o=i[u],Object.prototype.hasOwnProperty.call(n,o)&&n[o]&&b.push(n[o][0]),n[o]=0;for(r in s)Object.prototype.hasOwnProperty.call(s,r)&&(e[r]=s[r]);h&&h(t);while(b.length)b.shift()();return c.push.apply(c,l||[]),a()}function a(){for(var e,t=0;t<c.length;t++){for(var a=c[t],r=!0,i=1;i<a.length;i++){var s=a[i];0!==n[s]&&(r=!1)}r&&(c.splice(t--,1),e=o(o.s=a[0]))}return e}var r={},n={app:0},c=[];function o(t){if(r[t])return r[t].exports;var a=r[t]={i:t,l:!1,exports:{}};return e[t].call(a.exports,a,a.exports,o),a.l=!0,a.exports}o.m=e,o.c=r,o.d=function(e,t,a){o.o(e,t)||Object.defineProperty(e,t,{enumerable:!0,get:a})},o.r=function(e){"undefined"!==typeof Symbol&&Symbol.toStringTag&&Object.defineProperty(e,Symbol.toStringTag,{value:"Module"}),Object.defineProperty(e,"__esModule",{value:!0})},o.t=function(e,t){if(1&t&&(e=o(e)),8&t)return e;if(4&t&&"object"===typeof e&&e&&e.__esModule)return e;var a=Object.create(null);if(o.r(a),Object.defineProperty(a,"default",{enumerable:!0,value:e}),2&t&&"string"!=typeof e)for(var r in e)o.d(a,r,function(t){return e[t]}.bind(null,r));return a},o.n=function(e){var t=e&&e.__esModule?function(){return e["default"]}:function(){return e};return o.d(t,"a",t),t},o.o=function(e,t){return Object.prototype.hasOwnProperty.call(e,t)},o.p="/the-coffee-project-2.0/";var i=window["webpackJsonp"]=window["webpackJsonp"]||[],s=i.push.bind(i);i.push=t,i=i.slice();for(var l=0;l<i.length;l++)t(i[l]);var h=s;c.push([0,"chunk-vendors"]),a()})({0:function(e,t,a){e.exports=a("56d7")},"0243":function(e,t,a){e.exports=a.p+"img/coffee-machine.395c0998.jpg"},"0904":function(e,t,a){"use strict";a("d2bc")},"39d7":function(e,t,a){},"56d7":function(e,t,a){"use strict";a.r(t);a("e260"),a("e6cf"),a("cca6"),a("a79d"),a("ac1f"),a("841c"),a("caad"),a("2532");var r=a("7a23"),n=a("5502"),c={class:"noscroll"},o={id:"topnav"},i=Object(r["f"])("Home"),s=Object(r["f"])("Manual Brews"),l=Object(r["f"])("Machines"),h=Object(r["f"])("Beans");function u(e,t,a,n,u,b){var f=Object(r["w"])("Search"),p=Object(r["w"])("Header"),d=Object(r["w"])("router-link"),j=Object(r["w"])("router-view");return Object(r["p"])(),Object(r["d"])("div",c,[Object(r["g"])("div",null,[Object(r["g"])(f)]),Object(r["g"])(p,{title:"The Coffee Project 3.0"}),Object(r["g"])("div",o,[Object(r["g"])(d,{to:"/"},{default:Object(r["D"])((function(){return[i]})),_:1}),Object(r["g"])(d,{to:"/manual-brews"},{default:Object(r["D"])((function(){return[s]})),_:1}),Object(r["g"])(d,{to:"/machines"},{default:Object(r["D"])((function(){return[l]})),_:1}),Object(r["g"])(d,{to:"/beans"},{default:Object(r["D"])((function(){return[h]})),_:1})]),Object(r["g"])(j)])}var b=Object(r["F"])("data-v-cab68502");Object(r["s"])("data-v-cab68502");var f={class:"header"},p={class:"title"};Object(r["q"])();var d=b((function(e,t,a,n,c,o){return Object(r["p"])(),Object(r["d"])("div",null,[Object(r["g"])("header",f,[Object(r["g"])("h1",p,Object(r["z"])(a.title),1)])])})),j={name:"Header",props:{title:String}};a("81aa");j.render=d,j.__scopeId="data-v-cab68502";var O=j;function g(e,t,a,n,c,o){return Object(r["p"])(),Object(r["d"])("div",null,[Object(r["E"])(Object(r["g"])("input",{type:"text","onUpdate:modelValue":t[1]||(t[1]=function(e){return c.newsearch=e}),onInput:t[2]||(t[2]=function(t){return[e.updateSearch(c.newsearch),e.filterSearch()]}),placeholder:"Search current section..."},null,544),[[r["B"],c.newsearch]])])}var m=a("5530"),v={name:"Search",data:function(){return{newsearch:""}},computed:Object(m["a"])({},Object(n["c"])(["search","searchArray"])),methods:Object(m["a"])({},Object(n["b"])(["updateSearch","filterSearch"]))};a("7141");v.render=g;var w=v,y={name:"App",components:{Header:O,Search:w}};a("0904");y.render=u;var x=y,S=a("6c02"),B=a("7a57"),_=a.n(B),C={class:"main"},z=Object(r["g"])("img",{alt:"Home Coffee Image",src:_.a},null,-1),M=Object(r["g"])("p",{class:"para"},"This is a home page.",-1);function P(e,t,a,n,c,o){return Object(r["p"])(),Object(r["d"])("div",C,[z,M])}var k={name:"Home"};k.render=P;var A=k,R=a("c915"),D=a.n(R),T={class:"main"},L=Object(r["g"])("img",{alt:"Manual Brew Image",src:D.a},null,-1),H=Object(r["g"])("p",{class:"para"},"This is a page about manual coffee brewing methods.",-1),N=Object(r["g"])("h2",{id:"aeropress"},"Aeropress",-1),E=Object(r["g"])("p",null,"Some more Aeropress info.",-1),W=Object(r["g"])("h3",{id:"brew-time"},"Brew time",-1),F=Object(r["g"])("p",null,"Info on brew time and all that goodness.",-1),I=Object(r["g"])("h3",{id:"grind-size"},"Grind size",-1),q=Object(r["g"])("p",null,"Grind size can make or break your cup.",-1),V=Object(r["g"])("h3",{id:"water-temp"},"Water temperature",-1),G=Object(r["g"])("p",null,"Info on how much you should heat your water.",-1),J=Object(r["g"])("h3",{id:"method"},"Method",-1),Y=Object(r["g"])("p",null,"To mix or not to mix is the question and even then, swirl or stir?",-1),U=Object(r["g"])("h2",{id:"v60"},"V60",-1),K=Object(r["g"])("p",null,"Some V60 info.",-1),Q=Object(r["g"])("h2",{id:"chemex"},"Chemex",-1),X=Object(r["g"])("p",null,"Some Chemex info.",-1),Z=Object(r["g"])("h2",{id:"french-press"},"French Press",-1),$=Object(r["g"])("p",null,"Some French Press info.",-1);function ee(e,t,a,n,c,o){var i=Object(r["w"])("LNav"),s=Object(r["x"])("scroll-spy");return Object(r["p"])(),Object(r["d"])(r["a"],null,[Object(r["g"])(i,{parent:"ManualBrews",chapter:["#aeropress","#v60","#chemex","#french-press"],title:["Aeropress","V60","Chemex","French Press"]}),Object(r["E"])(Object(r["g"])("div",T,[L,H,N,E,W,F,I,q,V,G,J,Y,U,K,Q,X,Z,$],512),[[s,{offset:-120}]])],64)}var te={class:"lnav"},ae={href:"chapter[0]"},re={href:"chapter[1]"},ne={href:"chapter[2]"},ce={href:"chapter[3]"},oe={href:"chapter[4]"},ie={href:"chapter[5]"},se={href:"chapter[6]"};function le(e,t,a,n,c,o){var i=Object(r["w"])("router-link"),s=Object(r["w"])("router-view"),l=Object(r["x"])("scroll-spy-active");return Object(r["p"])(),Object(r["d"])(r["a"],null,[Object(r["E"])(Object(r["g"])("ul",te,[Object(r["g"])("a",ae,[Object(r["g"])(i,{to:{name:a.parent,hash:a.chapter[0]}},{default:Object(r["D"])((function(){return[Object(r["f"])(Object(r["z"])(a.title[0]),1)]})),_:1},8,["to"])]),Object(r["g"])("a",re,[Object(r["g"])(i,{to:{name:a.parent,hash:a.chapter[1]}},{default:Object(r["D"])((function(){return[Object(r["f"])(Object(r["z"])(a.title[1]),1)]})),_:1},8,["to"])]),Object(r["g"])("a",ne,[Object(r["g"])(i,{to:{name:a.parent,hash:a.chapter[2]}},{default:Object(r["D"])((function(){return[Object(r["f"])(Object(r["z"])(a.title[2]),1)]})),_:1},8,["to"])]),Object(r["g"])("a",ce,[Object(r["g"])(i,{to:{name:a.parent,hash:a.chapter[3]}},{default:Object(r["D"])((function(){return[Object(r["f"])(Object(r["z"])(a.title[3]),1)]})),_:1},8,["to"])]),Object(r["g"])("a",oe,[Object(r["g"])(i,{to:{name:a.parent,hash:a.chapter[4]}},{default:Object(r["D"])((function(){return[Object(r["f"])(Object(r["z"])(a.title[4]),1)]})),_:1},8,["to"])]),Object(r["g"])("a",ie,[Object(r["g"])(i,{to:{name:a.parent,hash:a.chapter[5]}},{default:Object(r["D"])((function(){return[Object(r["f"])(Object(r["z"])(a.title[5]),1)]})),_:1},8,["to"])]),Object(r["g"])("a",se,[Object(r["g"])(i,{to:{name:a.parent,hash:a.chapter[6]}},{default:Object(r["D"])((function(){return[Object(r["f"])(Object(r["z"])(a.title[6]),1)]})),_:1},8,["to"])])],512),[[l,{class:"scrollactive-item"}]]),Object(r["g"])(s)],64)}var he={name:"LNav",props:{parent:String,chapter:[],title:[]}};he.render=le;var ue=he,be={class:"rnav"},fe=Object(r["g"])("ul",null,[Object(r["g"])("li",null,[Object(r["g"])("a",{href:"#brew-time"},"Brew Time")]),Object(r["g"])("li",null,[Object(r["g"])("a",{href:"#grind-size"},"Grind Size")]),Object(r["g"])("li",null,[Object(r["g"])("a",{href:"#water-temp"},"Water Temperature")]),Object(r["g"])("li",null,[Object(r["g"])("a",{href:"#method"},"Method")])],-1);function pe(e,t,a,n,c,o){return Object(r["p"])(),Object(r["d"])("div",be,[fe])}var de={name:"RNav"};de.render=pe;var je=de,Oe={name:"Manual Brews",components:{LNav:ue,RNav:je}};Oe.render=ee;var ge=Oe,me=a("0243"),ve=a.n(me),we={class:"main"},ye=Object(r["g"])("img",{alt:"Coffee Machine",src:ve.a},null,-1),xe=Object(r["g"])("p",{class:"para"},"This is a page about coffee machines.",-1),Se=Object(r["g"])("h2",{id:"la-marzocco"},"La Marzocco",-1),Be=Object(r["g"])("p",null,"A legendary brand in the industry",-1),_e=Object(r["g"])("h2",{id:"breville"},"Breville",-1),Ce=Object(r["g"])("p",null,"Breville is no stranger to the coffee world.",-1),ze=Object(r["g"])("h2",{id:"rancilio"},"Rancilio",-1),Me=Object(r["g"])("p",null,"You can't go wrong with a good ol' Rancilio machine.",-1),Pe=Object(r["g"])("h2",{id:"specht"},"Specht",-1),ke=Object(r["g"])("p",null,"Specht is for the coffee fanatics. From custom colours to handmade wooden finishes, these machines are nothing short of luxurious.",-1);function Ae(e,t,a,n,c,o){var i=Object(r["w"])("LNav"),s=Object(r["x"])("scroll-spy");return Object(r["p"])(),Object(r["d"])(r["a"],null,[Object(r["g"])(i,{parent:"Machines",chapter:["#la-marzocco","#breville","#rancilio","#specht"],title:["La Marzocco","Breville","Rancilio","Specht"]}),Object(r["E"])(Object(r["g"])("div",we,[ye,xe,Se,Be,_e,Ce,ze,Me,Pe,ke],512),[[s,{offset:-120}]])],64)}var Re={name:"Machines",components:{LNav:ue}};Re.render=Ae;var De=Re,Te=a("9b0c"),Le=a.n(Te),He=Object(r["F"])("data-v-918aff4a");Object(r["s"])("data-v-918aff4a");var Ne=Object(r["g"])("div",{class:"main"},[Object(r["g"])("img",{alt:"Coffee Beans",src:Le.a}),Object(r["g"])("p",null,"This is a page about coffee beans.")],-1),Ee={key:0},We={class:"par"};Object(r["q"])();var Fe=He((function(e,t,a,n,c,o){var i=Object(r["w"])("LNav"),s=Object(r["x"])("scroll-spy");return Object(r["p"])(),Object(r["d"])(r["a"],null,[Object(r["g"])(i,{parent:"Beans",chapter:["#father","#origin","#rosetta"],title:["Father Coffee","Origin Coffee Roasters","Rosetta Roastery"]}),Ne,(Object(r["p"])(!0),Object(r["d"])(r["a"],null,Object(r["v"])(e.beans,(function(e){return Object(r["E"])((Object(r["p"])(),Object(r["d"])("div",{key:e,class:"main"},[e.active?(Object(r["p"])(),Object(r["d"])("div",Ee,[Object(r["g"])("h2",{id:e.id},Object(r["z"])(e.heading),9,["id"]),Object(r["g"])("p",We,Object(r["z"])(e.text),1)])):Object(r["e"])("",!0)],512)),[[s,{offset:-120}]])})),128))],64)})),Ie={name:"Beans",components:{LNav:ue},methods:Object(m["a"])({},Object(n["b"])(["filterSearch"])),computed:Object(m["a"])({},Object(n["c"])(["beans","search"]))};a("c3f3");Ie.render=Fe,Ie.__scopeId="data-v-918aff4a";var qe=Ie,Ve=[{path:"/",name:"Home",component:A},{path:"/manual-brews",name:"ManualBrews",component:ge},{path:"/machines",name:"Machines",component:De},{path:"/beans",name:"Beans",component:qe}],Ge=Object(S["a"])({history:Object(S["b"])(),routes:Ve,scrollBehavior:function(e,t,a){return e.hash?{el:e.hash,top:140,behavior:"smooth"}:{x:0,y:0}}}),Je=Ge,Ye=a("feff"),Ue=Object(n["a"])({state:function(){return{beans:[{id:"father",heading:"Father Coffee",text:"Diego's name has appeared on a lot of our boxes in the last year. We just can't get enough of the distinct coffees the team at El Paraíso are producing. And, our 6th release from the, a natural processed castillo, is no different. Raspberry, peach, sweet melon notes dominate up front before leading to cacao on the finish. A superb natural with a cleanliness that should come as no surprise from a producer that does nothing but reset expectations. NB:While an absolute banger in its own right, this lot is not part of our Special Release genre as Diego's coffees typically are. We'll have more of his signature Hyperprocessed lots coming in the next few months.Diego's name has appeared on a lot of our boxes in the last year. We just can't get enough of the distinct coffees the team at El Paraíso are producing. And, our 6th release from the, a natural processed castillo, is no different. Raspberry, peach, sweet melon notes dominate up front before leading to cacao on the finish. A superb natural with a cleanliness that should come as no surprise from a producer that does nothing but reset expectations. NB:While an absolute banger in its own right, this lot is not part of our Special Release genre as Diego's coffees typically are. We'll have more of his signature Hyperprocessed lots coming in the next few months.",active:!0},{id:"origin",heading:"Origin Coffee Roasters",text:"Origin Carmo do Paranaíbe, Cerrado Mineiro Owner Pedro Humberto Veloso Altitude 1,132 masl Varietals Yellow Catuaí Processing Natural Flavours thick caramel, roasted cashew nuts, yellow cherries, Coca Cola finish Acidity soft apple and orange Body coconut milk Roast medium–light Suggested Brewing pourover, Chemex, Aeropress, siphon",active:!0},{id:"rosetta",heading:"Rosetta Roastery",text:"Over the years, we've released a handful of 'reserve' coffees - unique gems that help showcase the diversity that exists within coffee, as well as the flavour potential that can be achieved when the stars align (and people work incredibly hard). Our first reserve, in 2011, was from Hacienda La Esmeralda. This is our third release from the farm; a worthy member of the triumvirate, and a nostalgic nod to a coffee that astounded us and many of our early supporters. In 2004 Price Peterson and his family, owners of Hacienda La Esmeralda, created waves in the coffee community when one of their lots smashed the record for the most expensive coffee to ever be bought on auction. They'd discovered two types of of the Geisha variety on their farm a little while earlier - and luck had them pick the better one to focus on cultivating. Geisha coffee had been brought to Central America from Ethiopia in the 1950s, after being discovered by a British consul in the West Arsi region of Ethiopia. The reason it was selected was purely for its disease resistance properties. The consul was selecting seeds from trees that had withstood a severe coffee leaf rust disease outbreak; in fact, a botanist describing the cultivar at the time noted its 'very poor cup quality'. We're thankful that fate had a long view, and brought this coffee to the worlds' attention again - this time when the distinctive, floral aromatics and delightful fruit notes it boasts are cup qualities that are lauded and saught after.",active:!0}],searchArray:[""],search:""}},mutations:{updateSearch:function(e,t){e.search=t;for(var a=0;a<e.beans.length;a++)e.beans[a].active=!1},filterSearch:function(e){for(var t=0;t<e.beans.length;t++)e.beans[t].text.toLowerCase().includes(e.search.toLowerCase())&&(e.beans[t].active=!0)}}}),Ke=Object(r["c"])(x);Object(Ye["registerScrollSpy"])(Ke),Ke.use(Je),Ke.use(Ue),Ke.mount("#app")},7141:function(e,t,a){"use strict";a("ad23")},"7a57":function(e,t,a){e.exports=a.p+"img/coffee.1873e76b.jpg"},"7e58":function(e,t,a){},"81aa":function(e,t,a){"use strict";a("7e58")},"9b0c":function(e,t,a){e.exports=a.p+"img/coffee-beans.af2b7005.jpg"},ad23:function(e,t,a){},c3f3:function(e,t,a){"use strict";a("39d7")},c915:function(e,t,a){e.exports=a.p+"img/v60-manual-brew.b1b2c605.jpg"},d2bc:function(e,t,a){}});
//# sourceMappingURL=app.bcc637b0.js.map