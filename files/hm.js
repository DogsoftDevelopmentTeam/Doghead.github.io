(function(){var h={},mt={},c={id:"685b103977a8d5da29aa8db2d36c64bb",dm:["otp.landian.vip"],js:"tongji.baidu.com/hm-web/js/",etrk:[],cetrk:[],cptrk:[],icon:'',ctrk:[],vdur:1800000,age:31536000000,qiao:0,pt:0,spa:0,aet:'',hca:'C0091A82296D277F',ab:'0',v:1};var r=void 0,s=!0,u=null,v=!1;mt.cookie={};mt.cookie.set=function(f,a,b){var e;b.D&&(e=new Date,e.setTime(e.getTime()+b.D));document.cookie=f+"="+a+(b.domain?"; domain="+b.domain:"")+(b.path?"; path="+b.path:"")+(e?"; expires="+e.toGMTString():"")+(b.gc?"; secure":"")};mt.cookie.get=function(f){return(f=RegExp("(^| )"+f+"=([^;]*)(;|$)").exec(document.cookie))?f[2]:u};
mt.cookie.tb=function(f,a){try{var b="Hm_ck_"+ +new Date;mt.cookie.set(b,"42",{domain:f,path:a,D:r});var e="42"===mt.cookie.get(b)?"1":"0";mt.cookie.set(b,"",{domain:f,path:a,D:-1});return e}catch(d){return"0"}};mt.event={};mt.event.c=function(f,a,b,e){f.addEventListener?f.addEventListener(a,b,e||v):f.attachEvent&&f.attachEvent("on"+a,function(e){b.call(f,e)})};
(function(){var f=mt.event;mt.lang={};mt.lang.j=function(a,b){return"[object "+b+"]"==={}.toString.call(a)};mt.lang.k=function(a){return mt.lang.j(a,"Function")};mt.lang.K=function(a){return mt.lang.j(a,"Object")};mt.lang.Yb=function(a){return mt.lang.j(a,"Number")&&isFinite(a)};mt.lang.$=function(a){return mt.lang.j(a,"String")};mt.lang.isArray=function(a){return mt.lang.j(a,"Array")};mt.lang.g=function(a){return a.replace?a.replace(/'/g,"'0").replace(/\*/g,"'1").replace(/!/g,"'2"):a};mt.lang.trim=
function(a){return a.replace(/^\s+|\s+$/g,"")};mt.lang.find=function(a,b,e){if(mt.lang.isArray(a)&&mt.lang.k(b))for(var d=a.length,g=0;g<d;g++)if(g in a&&b.call(e||a,a[g],g))return a[g];return u};mt.lang.Y=function(a,b){return mt.lang.find(a,function(e){return e===b})!=u};mt.lang.filter=function(a,b){var e=-1,d=0,g=a==u?0:a.length,m=[];if(mt.lang.k(b))for(;++e<g;){var l=a[e];b(l,e,a)&&(m[d++]=l)}return m};mt.lang.unique=function(a,b){var e=a.length,d=a.slice(0),g,m;for(mt.lang.k(b)||(b=function(b,
e){return b===e});0<--e;){m=d[e];for(g=e;g--;)if(b(m,d[g])){d.splice(e,1);break}}return d};mt.lang.ac=function(a,b){function e(b){b=(d+d+Number(b).toString(2)).slice(-64);return[parseInt(b.slice(0,32),2),parseInt(b.slice(-32),2)]}var d="00000000000000000000000000000000",g=e(a),m=e(b);return parseInt((d+((g[0]|m[0])>>>0).toString(2)).slice(-32)+(d+((g[1]|m[1])>>>0).toString(2)).slice(-32),2)};mt.lang.extend=function(a){for(var b=Array.prototype.slice.call(arguments,1),e=0;e<b.length;e++){var d=b[e],
g;for(g in d)Object.prototype.hasOwnProperty.call(d,g)&&d[g]&&(a[g]=d[g])}return a};mt.lang.Qb=function(a){function b(b,d){var a=window.history,m=a[b];a[b]=function(){m.apply(a,arguments);mt.lang.k(d)&&d()}}b("pushState",function(){a()});b("replaceState",function(){a()});f.c(window,window.history.pushState?"popstate":"hashchange",function(){a()})};return mt.lang})();mt.url={};mt.url.f=function(f,a){var b=f.match(RegExp("(^|&|\\?|#)("+a+")=([^&#]*)(&|$|#)",""));return b?b[3]:u};
mt.url.Ua=function(f){return(f=f.match(/^(https?:\/\/)?([^\/\?#]*)/))?f[2].replace(/.*@/,""):u};mt.url.W=function(f){return(f=mt.url.Ua(f))?f.replace(/:\d+$/,""):f};mt.url.rb=function(f){var a=document.location.href,a=a.replace(/^https?:\/\//,"");return 0===a.indexOf(f)};mt.url.sb=function(f,a){f="."+f.replace(/:\d+/,"");a="."+a.replace(/:\d+/,"");var b=f.indexOf(a);return-1<b&&b+a.length===f.length};
(function(){var f=mt.lang,a=mt.url;mt.d={};mt.d.Na=function(b){return document.getElementById(b)};mt.d.Xb=function(b){if(!b)return u;try{b=String(b);if(0===b.indexOf("!HMCQ!"))return b;if(0===b.indexOf("!HMCC!"))return document.querySelector(b.substring(6,b.length));for(var e=b.split(">"),d=document.body,a=e.length-1;0<=a;a--)if(-1<e[a].indexOf("#")){var m=e[a].split("#")[1];(d=document.getElementById(m))||(d=document.getElementById(decodeURIComponent(m)));e=e.splice(a+1,e.length-(a+1));break}for(b=
0;d&&b<e.length;){var l=String(e[b]).toLowerCase();if(!("html"===l||"body"===l)){var a=0,f=e[b].match(/\[(\d+)\]/i),m=[];if(f)a=f[1]-1,l=l.split("[")[0];else if(1!==d.childNodes.length){for(var n=0,t=0,k=d.childNodes.length;t<k;t++){var p=d.childNodes[t];1===p.nodeType&&p.nodeName.toLowerCase()===l&&n++;if(1<n)return u}if(1!==n)return u}for(n=0;n<d.childNodes.length;n++)1===d.childNodes[n].nodeType&&d.childNodes[n].nodeName.toLowerCase()===l&&m.push(d.childNodes[n]);if(!m[a])return u;d=m[a]}b++}return d}catch(w){return u}};
mt.d.ha=function(b,e){var a=[],g=[];if(!b)return g;for(;b.parentNode!=u;){for(var m=0,l=0,f=b.parentNode.childNodes.length,n=0;n<f;n++){var t=b.parentNode.childNodes[n];if(t.nodeName===b.nodeName&&(m++,t===b&&(l=m),0<l&&1<m))break}if((f=""!==b.id)&&e){a.unshift("#"+encodeURIComponent(b.id));break}else f&&(f="#"+encodeURIComponent(b.id),f=0<a.length?f+">"+a.join(">"):f,g.push(f)),a.unshift(encodeURIComponent(String(b.nodeName).toLowerCase())+(1<m?"["+l+"]":""));b=b.parentNode}g.push(a.join(">"));return g};
mt.d.Za=function(b){return(b=mt.d.ha(b,s))&&b.length?String(b[0]):""};mt.d.Ya=function(b){return mt.d.ha(b,v)};mt.d.Oa=function(b){var e;for(e="A";(b=b.parentNode)&&1==b.nodeType;)if(b.tagName==e)return b;return u};mt.d.Ra=function(b){return 9===b.nodeType?b:b.ownerDocument||b.document};mt.d.Wa=function(b){var e={top:0,left:0};if(!b)return e;var a=mt.d.Ra(b).documentElement;"undefined"!==typeof b.getBoundingClientRect&&(e=b.getBoundingClientRect());return{top:e.top+(window.pageYOffset||a.scrollTop)-
(a.clientTop||0),left:e.left+(window.pageXOffset||a.scrollLeft)-(a.clientLeft||0)}};mt.d.ic=function(b,e){if(b)for(var a=b.childNodes,g=0,m=a.length;g<m;g++){var l=a[g];if(l&&3===l.nodeType)return a=l.textContent||l.innerText||l.nodeValue||"",l.textContent?l.textContent=e:l.innerText?l.innerText=e:l.nodeValue=e,a}};mt.d.hc=function(b,a){if(!b)return{};var d={};a=a||{};for(var g in a)a.hasOwnProperty(g)&&a[g]!==r&&(d[g]=b.getAttribute(g)||"",b.setAttribute(g,a[g]));return d};mt.d.getAttribute=function(b,
a){var d=b.getAttribute&&b.getAttribute(a)||u;if(!d&&b.attributes&&b.attributes.length)for(var g=b.attributes,m=g.length,l=0;l<m;l++)g[l].nodeName===a&&(d=g[l].nodeValue);return d};mt.d.Sa=function(a){var e="document";a.tagName!==r&&(e=a.tagName);return e.toLowerCase()};mt.d.bb=function(a){var e="";a.textContent?e=f.trim(a.textContent):a.innerText&&(e=f.trim(a.innerText));e&&(e=e.replace(/\s+/g," ").substring(0,255));return e};mt.d.Wb=function(b,e){var d;f.$(b)&&0===String(b).indexOf("!HMCQ!")?(d=
String(b),d=a.f(document.location.href,d.substring(6,d.length))):f.$(b)||(d=mt.d.Sa(b),"input"===d&&e&&("button"===b.type||"submit"===b.type)?d=f.trim(b.value)||"":"input"===d&&!e&&"password"!==b.type?d=f.trim(b.value)||"":"img"===d?(d=mt.d.getAttribute,d=d(b,"alt")||d(b,"title")||d(b,"src")):d="body"===d||"html"===d?["(hm-default-content-for-",d,")"].join(""):mt.d.bb(b));return String(d||"").substring(0,255)};(function(){(mt.d.dc=function(){function a(){if(!a.L){a.L=s;for(var e=0,d=g.length;e<d;e++)g[e]()}}
function e(){try{document.documentElement.doScroll("left")}catch(d){setTimeout(e,1);return}a()}var d=v,g=[],m;document.addEventListener?m=function(){document.removeEventListener("DOMContentLoaded",m,v);a()}:document.attachEvent&&(m=function(){"complete"===document.readyState&&(document.detachEvent("onreadystatechange",m),a())});(function(){if(!d)if(d=s,"complete"===document.readyState)a.L=s;else if(document.addEventListener)document.addEventListener("DOMContentLoaded",m,v),window.addEventListener("load",
a,v);else if(document.attachEvent){document.attachEvent("onreadystatechange",m);window.attachEvent("onload",a);var g=v;try{g=window.frameElement==u}catch(f){}document.documentElement.doScroll&&g&&e()}})();return function(e){a.L?e():g.push(e)}}()).L=v})();return mt.d})();
(function(){var f=mt.event;mt.e={};mt.e.ob=/msie (\d+\.\d+)/i.test(navigator.userAgent);mt.e.cookieEnabled=navigator.cookieEnabled;mt.e.javaEnabled=navigator.javaEnabled();mt.e.language=navigator.language||navigator.browserLanguage||navigator.systemLanguage||navigator.userLanguage||"";mt.e.Cb=(window.screen.width||0)+"x"+(window.screen.height||0);mt.e.colorDepth=window.screen.colorDepth||0;mt.e.$a=function(){var a;a=a||document;return parseInt(window.pageYOffset||a.documentElement.scrollTop||a.body&&
a.body.scrollTop||0,10)};mt.e.cb=function(){var a=document;return parseInt(window.innerHeight||a.documentElement.clientHeight||a.body&&a.body.clientHeight||0,10)};mt.e.X=function(){return mt.e.$a()+mt.e.cb()};mt.e.ua=0;mt.e.eb=function(){var a=document;return parseInt(window.innerWidth||a.documentElement.clientWidth||a.body.offsetWidth||0,10)};mt.e.orientation=0;(function(){function a(){var a=0;window.orientation!==r&&(a=window.orientation);screen&&(screen.orientation&&screen.orientation.angle!==
r)&&(a=screen.orientation.angle);mt.e.orientation=a;mt.e.ua=mt.e.eb()}a();f.c(window,"orientationchange",a)})();return mt.e})();mt.z={};mt.z.parse=function(f){return(new Function("return ("+f+")"))()};
mt.z.stringify=function(){function f(a){/["\\\x00-\x1f]/.test(a)&&(a=a.replace(/["\\\x00-\x1f]/g,function(a){var e=b[a];if(e)return e;e=a.charCodeAt();return"\\u00"+Math.floor(e/16).toString(16)+(e%16).toString(16)}));return'"'+a+'"'}function a(a){return 10>a?"0"+a:a}var b={"\b":"\\b","\t":"\\t","\n":"\\n","\f":"\\f","\r":"\\r",'"':'\\"',"\\":"\\\\"};return function(e){switch(typeof e){case "undefined":return"undefined";case "number":return isFinite(e)?String(e):"null";case "string":return f(e);case "boolean":return String(e);
default:if(e===u)return"null";if(e instanceof Array){var b=["["],g=e.length,m,l,q;for(l=0;l<g;l++)switch(q=e[l],typeof q){case "undefined":case "function":case "unknown":break;default:m&&b.push(","),b.push(mt.z.stringify(q)),m=1}b.push("]");return b.join("")}if(e instanceof Date)return'"'+e.getFullYear()+"-"+a(e.getMonth()+1)+"-"+a(e.getDate())+"T"+a(e.getHours())+":"+a(e.getMinutes())+":"+a(e.getSeconds())+'"';m=["{"];l=mt.z.stringify;for(g in e)if(Object.prototype.hasOwnProperty.call(e,g))switch(q=
e[g],typeof q){case "undefined":case "unknown":case "function":break;default:b&&m.push(","),b=1,m.push(l(g)+":"+l(q))}m.push("}");return m.join("")}}}();mt.localStorage={};mt.localStorage.R=function(){if(!mt.localStorage.h)try{mt.localStorage.h=document.createElement("input"),mt.localStorage.h.type="hidden",mt.localStorage.h.style.display="none",mt.localStorage.h.addBehavior("#default#userData"),document.getElementsByTagName("head")[0].appendChild(mt.localStorage.h)}catch(f){return v}return s};
mt.localStorage.set=function(f,a,b){var e=new Date;e.setTime(e.getTime()+(b||31536E6));try{window.localStorage?(a=e.getTime()+"|"+a,window.localStorage.setItem(f,a)):mt.localStorage.R()&&(mt.localStorage.h.expires=e.toUTCString(),mt.localStorage.h.load(document.location.hostname),mt.localStorage.h.setAttribute(f,a),mt.localStorage.h.save(document.location.hostname))}catch(d){}};
mt.localStorage.get=function(f){if(window.localStorage){if(f=window.localStorage.getItem(f)){var a=f.indexOf("|"),b=f.substring(0,a)-0;if(b&&b>(new Date).getTime())return f.substring(a+1)}}else if(mt.localStorage.R())try{return mt.localStorage.h.load(document.location.hostname),mt.localStorage.h.getAttribute(f)}catch(e){}return u};
mt.localStorage.remove=function(f){if(window.localStorage)window.localStorage.removeItem(f);else if(mt.localStorage.R())try{mt.localStorage.h.load(document.location.hostname),mt.localStorage.h.removeAttribute(f),mt.localStorage.h.save(document.location.hostname)}catch(a){}};mt.sessionStorage={};mt.sessionStorage.set=function(f,a){try{window.sessionStorage&&window.sessionStorage.setItem(f,a)}catch(b){}};
mt.sessionStorage.get=function(f){try{return window.sessionStorage?window.sessionStorage.getItem(f):u}catch(a){return u}};mt.sessionStorage.remove=function(f){try{window.sessionStorage&&window.sessionStorage.removeItem(f)}catch(a){}};
(function(){var f=mt.z;mt.B={};mt.B.log=function(a,b){var e=new Image,d="mini_tangram_log_"+Math.floor(2147483648*Math.random()).toString(36);window[d]=e;e.onload=function(){e.onload=u;e=window[d]=u;b&&b(a)};e.src=a};mt.B.get=function(a,b){return mt.B.ya({url:a,method:"GET",data:b.data,timeout:b.timeout,noCache:s,success:b.success,fail:b.fail})};mt.B.ya=function(a){function b(a){var b=[],e;for(e in a)a.hasOwnProperty(e)&&b.push(encodeURIComponent(e)+"="+encodeURIComponent(a[e]));return b.join("&")}
function e(b){var e=a[b];if(e)if(p&&clearTimeout(p),"success"!==b)e&&e(k);else{var d;try{d=f.parse(k.responseText)}catch(g){e&&e(k);return}e&&e(k,d)}}a=a||{};var d=a.data;"object"===typeof d&&(d=b(a.data||{}));var g=a.url,m=(a.method||"GET").toUpperCase(),l=a.headers||{},q=a.timeout||0,n=a.noCache||v,t=a.withCredentials||v,k,p;try{a:if(window.XMLHttpRequest)k=new XMLHttpRequest;else{try{k=new ActiveXObject("Microsoft.XMLHTTP");break a}catch(w){}k=r}"GET"===m&&(d&&(g+=(0<=g.indexOf("?")?"&":"?")+d,
d=u),n&&(g+=(0<=g.indexOf("?")?"&":"?")+"b"+ +new Date+"=1"));k.open(m,g,s);k.onreadystatechange=function(){if(4===k.readyState){var a=0;try{a=k.status}catch(b){e("fail");return}200<=a&&300>a||304===a||1223===a?e("success"):e("fail")}};for(var x in l)l.hasOwnProperty(x)&&k.setRequestHeader(x,l[x]);t&&(k.withCredentials=s);q&&(p=setTimeout(function(){k.onreadystatechange=function(){};k.abort();e("fail")},q));k.send(d)}catch(y){e("fail")}return k};return mt.B})();
h.s={mb:"http://tongji.baidu.com/hm-web/welcome/ico",ba:"hm.baidu.com/hm.gif",za:/^(tongji|hmcdn).baidu.com$/,Ib:"tongji.baidu.com",jb:"hmmd",kb:"hmpl",Lb:"utm_medium",ib:"hmkw",Nb:"utm_term",gb:"hmci",Kb:"utm_content",lb:"hmsr",Mb:"utm_source",hb:"hmcu",Jb:"utm_campaign",ma:0,C:Math.round(+new Date/1E3),protocol:"https:"===document.location.protocol?"https:":"http:",M:"https:",Fa:6E5,ec:5E3,Ga:5,ea:1024,H:2147483647,ta:"hca cc cf ci ck cl cm cp cu cw ds vl ep et ja ln lo lt rnd si su v cv lv api sn r ww p ct u tt".split(" "),
ia:s,Rb:{id:"data-hm-id",Vb:"data-hm-class",lc:"data-hm-xpath",content:"data-hm-content",jc:"data-hm-tag",link:"data-hm-link"},Tb:"data-hm-enabled",Sb:"data-hm-disabled",zb:"https://hmcdn.baidu.com/static/tongji/plugins/",pa:["UrlChangeTracker"],Pb:{bc:0,kc:1,Zb:2},$b:"https://fclog.baidu.com/log/ocpcagl?type=behavior&emd=euc"};
(function(){var f={w:{},c:function(a,b){this.w[a]=this.w[a]||[];this.w[a].push(b)},l:function(a,b){this.w[a]=this.w[a]||[];for(var e=this.w[a].length,d=0;d<e;d++)this.w[a][d](b)}};return h.t=f})();
(function(){var f=mt.lang,a=/^https?:\/\//,b={Qa:function(a){var b;try{b=JSON.parse(decodeURIComponent(a[0]))}catch(g){}return b},na:function(a,d){return b.oa(h.b&&h.b.a&&h.b.a.u,a,d)||b.oa(document.location.href,a,d)},oa:function(b,d,g){if(b===r)return v;a.test(d)||(b=b.replace(a,""));d=d.replace(/\/$/,"");b=b.replace(/\/$/,"");g&&(b=b.replace(/^(https?:\/\/)?www\./,"$1"));return RegExp("^"+d.replace(/[?.+^${}()|[\]\\]/g,"\\$&").replace(/\*/g,".*")+"$").test(b)},I:function(a,d){var g=b.Qa(a);if(!f.j(g,
"Undefined")){if(f.isArray(g)){for(var m=0;m<g.length;m++)if(b.na(g[m],d))return s;return v}if(f.K(g)){var m=[],l;for(l in g)g.hasOwnProperty(l)&&b.na(l,d)&&(m=m.concat(g[l]));return m}}}};return h.T=b})();
(function(){function f(b,e){var d=document.createElement("script");d.charset="utf-8";a.k(e)&&(d.readyState?d.onreadystatechange=function(){if("loaded"===d.readyState||"complete"===d.readyState)d.onreadystatechange=u,e()}:d.onload=function(){e()});d.src=b;var g=document.getElementsByTagName("script")[0];g.parentNode.insertBefore(d,g)}var a=mt.lang;return h.load=f})();
(function(){var f=h.s,a={F:function(){if(""!==c.icon){var a=c.icon.split("|"),e=f.mb+"?s="+c.id,d="https://hmcdn.baidu.com/static"+a[0]+".gif";document.write("swf"===a[1]||"gif"===a[1]?'<a href="'+e+'" target="_blank"><img border="0" src="'+d+'" width="'+a[2]+'" height="'+a[3]+'"></a>':'<a href="'+e+'" target="_blank">'+a[0]+"</a>")}}};h.t.c("pv-b",a.F);return a})();
(function(){var f=mt.url,a=mt.cookie,b=mt.localStorage,e=mt.sessionStorage,d={getData:function(d){try{return a.get(d)||e.get(d)||b.get(d)}catch(m){}},setData:function(g,m,f){try{a.set(g,m,{domain:d.J(),path:d.V(),D:f}),f?b.set(g,m,f):e.set(g,m)}catch(q){}},removeData:function(g){try{a.set(g,"",{domain:d.J(),path:d.V(),D:-1}),e.remove(g),b.remove(g)}catch(f){}},J:function(){for(var a=document.location.hostname,b=0,e=c.dm.length;b<e;b++)if(f.sb(a,c.dm[b]))return c.dm[b].replace(/(:\d+)?[/?#].*/,"");
return a},V:function(){for(var a=0,b=c.dm.length;a<b;a++){var e=c.dm[a];if(-1<e.indexOf("/")&&f.rb(e))return e.replace(/^[^/]+(\/.*)/,"$1")+"/"}return"/"}};return h.S=d})();
(function(){var f=mt.lang,a=mt.d,b=h.T,e={Ja:function(d,g){return function(f){var l=f.target||f.srcElement;if(l){var q=b.I(g)||[],n=l.getAttribute(d.Q);f=f.clientX+":"+f.clientY;if(n&&n===f)l.removeAttribute(d.Q);else if(0<q.length&&(l=a.Ya(l))&&l.length)if(q=l.length,n=l[l.length-1],1E4>q*n.split(">").length)for(n=0;n<q;n++)e.sa(d,l[n]);else e.sa(d,n)}}},sa:function(a,b){for(var e={},l=String(b).split(">").length,q=0;q<l;q++)e[b]="",/\[1\]$/.test(b)&&(e[b.substring(0,b.lastIndexOf("["))]=""),/\]$/.test(b)||
(e[b+"[1]"]=""),b=b.substring(0,b.lastIndexOf(">"));a&&(f.K(a)&&a.da)&&a.da(e)},Bb:function(a,b){return function(e){(e.target||e.srcElement).setAttribute(a.Q,e.clientX+":"+e.clientY);a&&a.O&&(b?a.O(b):a.O("#"+encodeURIComponent(this.id),e.type))}}};return h.Ka=e})();
(function(){var f=mt.d,a=mt.event,b=h.T,e=h.Ka,d={Q:"HM_fix",wa:function(){a.c(document,"click",e.Ja(d,c.etrk),s);if(!document.addEventListener)for(var g=b.I(c.etrk)||[],m=0;m<g.length;m++){var l=g[m];-1===l.indexOf(">")&&(0===l.indexOf("#")&&(l=l.substring(1)),(l=f.Na(l))&&a.c(l,"click",e.Bb(d),s))}},da:function(a){for(var e=b.I(c.etrk)||[],f=0;f<e.length;f++){var q=e[f];a.hasOwnProperty(q)&&d.O(q)}},O:function(a,b){h.b.a.et=1;h.b.a.ep="{id:"+a+",eventType:"+(b||"click")+"}";h.b.n()}};h.t.c("pv-b",
d.wa);return d})();
(function(){var f=mt.d,a=mt.lang,b=mt.event,e=mt.e,d=h.s,g=h.T,m=[],l={va:function(){c.ctrk&&0<c.ctrk.length&&(b.c(document,"mouseup",l.Ea()),b.c(window,"unload",function(){l.N()}),setInterval(function(){l.N()},d.Fa))},Ea:function(){return function(a){if(g.I(c.ctrk,s)&&(a=l.Pa(a),""!==a)){var b=(d.M+"//"+d.ba+"?"+h.b.ra().replace(/ep=[^&]*/,"ep="+encodeURIComponent(a))).length;b+(d.H+"").length>d.ea||(b+encodeURIComponent(m.join("!")+(m.length?"!":"")).length+(d.H+"").length>d.ea&&l.N(),m.push(a),
(m.length>=d.Ga||/\*a\*/.test(a))&&l.N())}}},Pa:function(b){var d=b.target||b.srcElement,g,k;e.ob?(k=Math.max(document.documentElement.scrollTop,document.body.scrollTop),g=Math.max(document.documentElement.scrollLeft,document.body.scrollLeft),g=b.clientX+g,k=b.clientY+k):(g=b.pageX,k=b.pageY);b=l.Va(b,d,g,k);var p=window.innerWidth||document.documentElement.clientWidth||document.body.offsetWidth;switch(c.align){case 1:g-=p/2;break;case 2:g-=p}p=[];p.push(g);p.push(k);p.push(b.wb);p.push(b.xb);p.push(b.Ab);
p.push(a.g(b.yb));p.push(b.Ob);p.push(b.fb);(d="a"===(d.tagName||"").toLowerCase()?d:f.Oa(d))?(p.push("a"),p.push(a.g(encodeURIComponent(d.href)))):p.push("b");return p.join("*")},Va:function(b,d,g,k){b=f.Za(d);var p=0,l=0,x=0,y=0;if(d&&(p=d.offsetWidth||d.clientWidth,l=d.offsetHeight||d.clientHeight,y=f.Wa(d),x=y.left,y=y.top,a.k(d.getBBox)&&(l=d.getBBox(),p=l.width,l=l.height),"html"===(d.tagName||"").toLowerCase()))p=Math.max(p,d.clientWidth),l=Math.max(l,d.clientHeight);return{wb:Math.round(100*
((g-x)/p)),xb:Math.round(100*((k-y)/l)),Ab:e.orientation,yb:b,Ob:p,fb:l}},N:function(){0!==m.length&&(h.b.a.et=2,h.b.a.ep=m.join("!"),h.b.n(),m=[])}};h.t.c("pv-b",l.va);return l})();
(function(){function f(){return function(){h.b.a.et=3;h.b.a.ep=h.U.Xa()+","+h.U.Ta();h.b.a.hca=c.hca;h.b.n()}}function a(){clearTimeout(C);var b;x&&(b="visible"==document[x]);y&&(b=!document[y]);l="undefined"==typeof b?s:b;if((!m||!q)&&l&&n)w=s,k=+new Date;else if(m&&q&&(!l||!n))w=v,p+=+new Date-k;m=l;q=n;C=setTimeout(a,100)}function b(a){var b=document,e="";if(a in b)e=a;else for(var p=["webkit","ms","moz","o"],d=0;d<p.length;d++){var f=p[d]+a.charAt(0).toUpperCase()+a.slice(1);if(f in b){e=f;break}}return e}
function e(b){if(!("focus"==b.type||"blur"==b.type)||!(b.target&&b.target!=window))n="focus"==b.type||"focusin"==b.type?s:v,a()}var d=mt.event,g=h.t,m=s,l=s,q=s,n=s,t=+new Date,k=t,p=0,w=s,x=b("visibilityState"),y=b("hidden"),C;a();(function(){var b=x.replace(/[vV]isibilityState/,"visibilitychange");d.c(document,b,a);d.c(window,"pageshow",a);d.c(window,"pagehide",a);"object"==typeof document.onfocusin?(d.c(document,"focusin",e),d.c(document,"focusout",e)):(d.c(window,"focus",e),d.c(window,"blur",
e))})();h.U={Xa:function(){return+new Date-t},Ta:function(){return w?+new Date-k+p:p}};g.c("pv-b",function(){d.c(window,"unload",f())});g.c("duration-send",f());g.c("duration-done",function(){k=t=+new Date;p=0});return h.U})();
(function(){var f=mt.lang,a=h.s,b=h.load,e=h.S,d={nb:function(d){if((window._dxt===r||f.j(window._dxt,"Array"))&&"undefined"!==typeof h.b){var m=e.J();b([a.protocol,"//datax.baidu.com/x.js?si=",c.id,"&dm=",encodeURIComponent(m)].join(""),d)}},Hb:function(a){if(f.j(a,"String")||f.j(a,"Number"))window._dxt=window._dxt||[],window._dxt.push(["_setUserId",a])}};return h.Ha=d})();
(function(){function f(a,b,e,d){if(!(a===r||b===r||d===r)){if(""===a)return[b,e,d].join("*");a=String(a).split("!");for(var f,g=v,k=0;k<a.length;k++)if(f=a[k].split("*"),String(b)===f[0]){f[1]=e;f[2]=d;a[k]=f.join("*");g=s;break}g||a.push([b,e,d].join("*"));return a.join("!")}}function a(b){for(var d in b)if({}.hasOwnProperty.call(b,d)){var f=b[d];e.K(f)||e.isArray(f)?a(f):b[d]=String(f)}}var b=mt.url,e=mt.lang,d=mt.z,g=mt.e,m=h.s,l=h.t,q=h.Ha,n=h.load,t=h.S,k={G:[],P:0,Z:v,o:{ca:"",page:""},F:function(){k.i=
0;l.c("pv-b",function(){k.Ia();k.La()});l.c("pv-d",function(){k.Ma();k.o.page=""});l.c("stag-b",function(){h.b.a.api=k.i||k.P?k.i+"_"+k.P:"";h.b.a.ct=[decodeURIComponent(t.getData("Hm_ct_"+c.id)||""),k.o.ca,k.o.page].join("!")});l.c("stag-d",function(){h.b.a.api=0;k.i=0;k.P=0})},Ia:function(){var a=window._hmt||[];if(!a||e.j(a,"Array"))window._hmt={id:c.id,cmd:{},push:function(){for(var a=window._hmt,b=0;b<arguments.length;b++){var d=arguments[b];e.j(d,"Array")&&(a.cmd[a.id].push(d),"_setAccount"===
d[0]&&(1<d.length&&/^[0-9a-f]{31,32}$/.test(d[1]))&&(d=d[1],a.id=d,a.cmd[d]=a.cmd[d]||[]))}}},window._hmt.cmd[c.id]=[],window._hmt.push.apply(window._hmt,a)},La:function(){var a=window._hmt;if(a&&a.cmd&&a.cmd[c.id])for(var b=a.cmd[c.id],e=/^_track(Event|Order)$/,d=0,f=b.length;d<f;d++){var g=b[d];e.test(g[0])?k.G.push(g):k.aa(g)}a.cmd[c.id]={push:k.aa}},Ma:function(){if(0<k.G.length)for(var a=0,b=k.G.length;a<b;a++)k.aa(k.G[a]);k.G=u},aa:function(a){var b=a[0];if(k.hasOwnProperty(b)&&e.k(k[b]))k[b](a)},
_setAccount:function(a){1<a.length&&/^[0-9a-f]{31,32}$/.test(a[1])&&(k.i|=1)},_setAutoPageview:function(a){if(1<a.length&&(a=a[1],v===a||s===a))k.i|=2,h.b.ka=a},_trackPageview:function(a){1<a.length&&(a[1].charAt&&"/"===a[1].charAt(0))&&(k.i|=4,h.b.a.sn=h.b.ga(),h.b.a.et=0,h.b.a.ep="",h.b.a.vl=g.X(),k.Z||(h.b.a.su=h.b.a.u||document.location.href),h.b.a.u=m.protocol+"//"+document.location.host+a[1],h.b.n(),h.b.ub=+new Date)},_trackEvent:function(a){2<a.length&&(k.i|=8,h.b.a.et=4,h.b.a.ep=e.g(a[1])+
"*"+e.g(a[2])+(a[3]?"*"+e.g(a[3]):"")+(a[4]?"*"+e.g(a[4]):""),h.b.n())},_setCustomVar:function(a){if(!(4>a.length)){var b=a[1],d=a[4]||3;if(0<b&&6>b&&0<d&&4>d){k.P++;for(var f=(h.b.a.cv||"*").split("!"),g=f.length;g<b-1;g++)f.push("*");f[b-1]=d+"*"+e.g(a[2])+"*"+e.g(a[3]);h.b.a.cv=f.join("!");a=h.b.a.cv.replace(/[^1](\*[^!]*){2}/g,"*").replace(/((^|!)\*)+$/g,"");""!==a?t.setData("Hm_cv_"+c.id,encodeURIComponent(a),c.age):t.removeData("Hm_cv_"+c.id)}}},_setUserTag:function(a){if(!(3>a.length)){var b=
e.g(a[1]);a=e.g(a[2]);if(b!==r&&a!==r){var d=decodeURIComponent(t.getData("Hm_ct_"+c.id)||""),d=f(d,b,1,a);t.setData("Hm_ct_"+c.id,encodeURIComponent(d),c.age)}}},_setVisitTag:function(a){if(!(3>a.length)){var b=e.g(a[1]);a=e.g(a[2]);if(b!==r&&a!==r){var d=k.o.ca,d=f(d,b,2,a);k.o.ca=d}}},_setPageTag:function(a){if(!(3>a.length)){var b=e.g(a[1]);a=e.g(a[2]);if(b!==r&&a!==r){var d=k.o.page,d=f(d,b,3,a);k.o.page=d}}},_setReferrerOverride:function(a){1<a.length&&(a=a[1],e.j(a,"String")?(h.b.a.su="/"===
a.charAt(0)?m.protocol+"//"+window.location.host+a:a,k.Z=s):k.Z=v)},_trackOrder:function(b){b=b[1];e.K(b)&&(a(b),k.i|=16,h.b.a.et=94,h.b.a.ep=d.stringify(b),h.b.n())},_setDataxId:function(a){a=a[1];q.nb();q.Hb(a)},_setAutoTracking:function(a){if(1<a.length&&(a=a[1],v===a||s===a))h.b.la=a},_trackPageDuration:function(a){1<a.length?(a=a[1],2===String(a).split(",").length&&(h.b.a.et=3,h.b.a.ep=a,h.b.n())):l.l("duration-send");l.l("duration-done")},_require:function(a){1<a.length&&(a=a[1],m.za.test(b.W(a))&&
n(a))},_providePlugin:function(a){if(1<a.length){var b=window._hmt,d=a[1];a=a[2];if(e.Y(m.pa,d)&&e.k(a)&&(b.plugins=b.plugins||{},b.A=b.A||{},b.plugins[d]=a,b.m=b.m||[],a=b.m.slice(),d&&a.length&&a[0][1]===d))for(var f=0,g=a.length;f<g;f++){var k=a[f][2]||{};if(b.plugins[d]&&!b.A[d])b.A[d]=new b.plugins[d](k),b.m.shift();else break}}},_requirePlugin:function(a){if(1<a.length){var b=window._hmt,d=a[1],f=a[2]||{};if(e.Y(m.pa,d))if(b.plugins=b.plugins||{},b.A=b.A||{},b.plugins[d]&&!b.A[d])b.A[d]=new b.plugins[d](f);
else{b.m=b.m||[];for(var f=0,g=b.m.length;f<g;f++)if(b.m[f][1]===d)return;b.m.push(a);k._require([u,m.zb+d+".js"])}}}};k.F();h.Aa=k;return h.Aa})();(function(){var f=h.t;c.spa!==r&&"1"===String(c.spa)&&(window._hmt=window._hmt||[],window._hmt.push(["_requirePlugin","UrlChangeTracker"]),f.c("pv-b",function(){""!==window.location.hash&&(h.b.a.u=window.location.href)}))})();
(function(){function f(){"undefined"===typeof window["_bdhm_loaded_"+c.id]&&(window["_bdhm_loaded_"+c.id]=s,this.a={},this.qb=this.la=this.ka=s,this.ia=k.ia,this.Ub=e.$(c.aet)&&0<c.aet.length?c.aet.split(","):"",this.F())}var a=mt.url,b=mt.B,e=mt.lang,d=mt.cookie,g=mt.e,m=mt.sessionStorage,l=mt.z,q=mt.event,n=h.S,t=mt.localStorage,k=h.s,p=h.load,w=h.t;f.prototype={Fb:function(){var a,b,e,f;k.ma=n.getData("Hm_lpvt_"+c.id)||0;if(f=n.getData("Hm_lvt_"+c.id)){for(b=f.split(",");2592E3<k.C-b[0];)b.shift();
e=4>b.length?2:3;for(k.C-k.ma>c.vdur&&b.push(k.C);4<b.length;)b.shift();f=b.join(",");b=b[b.length-1]}else f=k.C,b="",e=1;this.pb()?(n.setData("Hm_lvt_"+c.id,f,c.age),n.setData("Hm_lpvt_"+c.id,k.C),a=d.tb(n.J(),n.V())):this.fa();this.a.cc=a;this.a.lt=b;this.a.lv=e},pb:function(){var b=a.W(document.location.href);return!e.Y("sjh.baidu.com isite.baidu.com ls.wejianzhan.com bs.wejianzhan.com product.weijianzhan.com qianhu.weijianzhan.com aisite.wejianzhan.com".split(" "),b)},Ca:function(){var a="Hm_clear_cookie_"+
c.id,b=t.get(a)||0;c.fc&&Number(c.fc)>Number(b)&&(this.fa(),t.set(a,c.fc))},fa:function(){for(var a=document.cookie.split(";"),b=0;b<a.length;b++){var d=a[b].split("=");d.length&&/Hm_(up|ct|cv|lp?vt)_[0-9a-f]{31}/.test(String(d[0]))&&n.removeData(e.trim(d[0]));d.length&&/Hm_ck_[0-9]{13}/.test(String(d[0]))&&n.removeData(e.trim(d[0]))}},ra:function(){for(var a=[],b=this.a.et,d=0,e=k.ta.length;d<e;d++){var f=k.ta[d],g=this.a[f];"undefined"!==typeof g&&""!==g&&("tt"!==f||"tt"===f&&0===b)&&("ct"!==f||
"ct"===f&&0===b)&&a.push(f+"="+encodeURIComponent(g))}return a.join("&")},Gb:function(){this.Fb();this.a.si=c.id;this.a.sn=this.ga();this.a.su=document.referrer;this.a.ds=g.Cb;this.a.cl=g.colorDepth+"-bit";this.a.ln=String(g.language).toLowerCase();this.a.ja=g.javaEnabled?1:0;this.a.ck=g.cookieEnabled?1:0;this.a.lo="number"===typeof _bdhm_top?1:0;this.a.v="1.2.83";this.a.cv=decodeURIComponent(n.getData("Hm_cv_"+c.id)||"");this.a.tt=document.title||"";this.a.vl=g.X();var b=document.location.href;this.a.cm=
a.f(b,k.jb)||"";this.a.cp=a.f(b,k.kb)||a.f(b,k.Lb)||"";this.a.cw=a.f(b,k.ib)||a.f(b,k.Nb)||"";this.a.ci=a.f(b,k.gb)||a.f(b,k.Kb)||"";this.a.cf=a.f(b,k.lb)||a.f(b,k.Mb)||"";this.a.cu=a.f(b,k.hb)||a.f(b,k.Jb)||"";/https?:/.test(document.location.protocol)&&(this.a.u=b)},F:function(){try{this.Ca(),this.Gb(),this.Eb(),h.b=this,this.Ba(),this.vb(),w.l("pv-b"),this.qb&&this.Db()}catch(a){var d=[];d.push("si="+c.id);d.push("n="+encodeURIComponent(a.name));d.push("m="+encodeURIComponent(a.message));d.push("r="+
encodeURIComponent(document.referrer));b.log(k.M+"//"+k.ba+"?"+d.join("&"))}},Db:function(){function a(){w.l("pv-d")}this.ka?(this.a.et=0,this.a.ep="",w.l("setPageviewProp"),this.a.vl=g.X(),this.n(a),this.a.p=""):a();this.ub=+new Date;w.l("clearPageviewProp")},n:function(a){if(this.la){var d=this;d.a.rnd=Math.round(Math.random()*k.H);d.a.r=g.orientation;d.a.ww=g.ua;w.l("stag-b");var f=k.M+"//"+k.ba+"?"+d.ra();w.l("stag-d");d.xa(f);b.log(f,function(b){d.qa(b);e.k(a)&&a.call(d)})}},Ba:function(){try{if(window.postMessage&&
window.self!==window.parent){var b=this;q.c(window,"message",function(d){if(a.W(d.origin)===k.Ib){d=d.data||{};var e=d.jn||"",f=/^customevent$|^heatmap$|^pageclick$|^select$/.test(e);if(RegExp(c.id).test(d.sd||"")&&f)b.a.rnd=Math.round(Math.random()*k.H),p(k.protocol+"//"+c.js+e+".js?"+b.a.rnd)}});window.parent.postMessage({id:c.id,url:document.location.href,status:"__Messenger__hmLoaded"},"*")}}catch(d){}},vb:function(){try{if(window.self===window.parent){var b=document.location.href,d=a.f(b,"baidu-analytics-token"),
e=a.f(b,"baidu-analytics-jn");/^[a-f0-9]{32}\/?$/.test(d)&&/^(overlay|vabtest)\/?$/.test(e)&&p(k.protocol+"//"+c.js+e+".js?"+Math.round(Math.random()*k.H))}}catch(f){}},xa:function(a){var b;try{b=l.parse(m.get("Hm_unsent_"+c.id)||"[]")}catch(d){b=[]}var e=this.a.u?"":"&u="+encodeURIComponent(document.location.href);b.push(a.replace(/^https?:\/\//,"")+e);m.set("Hm_unsent_"+c.id,l.stringify(b))},qa:function(a){var b;try{b=l.parse(m.get("Hm_unsent_"+c.id)||"[]")}catch(d){b=[]}if(b.length){a=a.replace(/^https?:\/\//,
"");for(var e=0;e<b.length;e++)if(a.replace(/&u=[^&]*/,"")===b[e].replace(/&u=[^&]*/,"")){b.splice(e,1);break}b.length?m.set("Hm_unsent_"+c.id,l.stringify(b)):this.Da()}},Da:function(){m.remove("Hm_unsent_"+c.id)},Eb:function(){var a=this,d;try{d=l.parse(m.get("Hm_unsent_"+c.id)||"[]")}catch(e){d=[]}if(d.length)for(var f=function(d){b.log(k.M+"//"+d,function(b){a.qa(b)})},g=0;g<d.length;g++)f(d[g])},ga:function(){return Math.round(+new Date/1E3)%65535}};return new f})();var z=h.s,A=h.load;
if(c.apps){var B=[z.protocol,"//ers.baidu.com/app/s.js?"];B.push(c.apps);A(B.join(""))}var D=h.s,E=h.load;c.pt&&E([D.protocol,"//ada.baidu.com/phone-tracker/insert_bdtj?sid=",c.pt].join(""));var F=h.load;if(c.qiao){for(var G=["https://goutong.baidu.com/site/"],H=c.id,I=5381,J=H.length,K=0;K<J;K++)I=(33*I+Number(H.charCodeAt(K)))%4294967296;2147483648<I&&(I-=2147483648);G.push(I%1E3+"/");G.push(c.id+"/b.js");G.push("?siteId="+c.qiao);F(G.join(""))};})();
