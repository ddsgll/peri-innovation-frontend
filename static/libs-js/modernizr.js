/*! modernizr 3.3.1 (Custom Build) | MIT *
 * http://modernizr.com/download/?-boxsizing-cssgradients-cssremunit-csstransforms-csstransforms3d-csstransitions-cssvhunit-cssvwunit-flexbox-flexboxlegacy-fontface-mediaqueries-nthchild-objectfit-rgba !*/
!function(e,t,n){function r(e,t){return typeof e===t}function i(){var e,t,n,i,o,s,a;for(var d in v)if(v.hasOwnProperty(d)){if(e=[],t=v[d],t.name&&(e.push(t.name.toLowerCase()),t.options&&t.options.aliases&&t.options.aliases.length))for(n=0;n<t.options.aliases.length;n++)e.push(t.options.aliases[n].toLowerCase());for(i=r(t.fn,"function")?t.fn():t.fn,o=0;o<e.length;o++)s=e[o],a=s.split("."),1===a.length?Modernizr[a[0]]=i:(!Modernizr[a[0]]||Modernizr[a[0]]instanceof Boolean||(Modernizr[a[0]]=new Boolean(Modernizr[a[0]])),Modernizr[a[0]][a[1]]=i),x.push((i?"":"no-")+a.join("-"))}}function o(){return"function"!=typeof t.createElement?t.createElement(arguments[0]):T?t.createElementNS.call(t,"http://www.w3.org/2000/svg",arguments[0]):t.createElement.apply(t,arguments)}function s(e){return e.replace(/([a-z])-([a-z])/g,function(e,t,n){return t+n.toUpperCase()}).replace(/^-/,"")}function a(){var e=t.body;return e||(e=o(T?"svg":"body"),e.fake=!0),e}function d(e,n,r,i){var s,d,f,u,l="modernizr",c=o("div"),p=a();if(parseInt(r,10))for(;r--;)f=o("div"),f.id=i?i[r]:l+(r+1),c.appendChild(f);return s=o("style"),s.type="text/css",s.id="s"+l,(p.fake?p:c).appendChild(s),p.appendChild(c),s.styleSheet?s.styleSheet.cssText=e:s.appendChild(t.createTextNode(e)),c.id=l,p.fake&&(p.style.background="",p.style.overflow="hidden",u=b.style.overflow,b.style.overflow="hidden",b.appendChild(p)),d=n(c,e),p.fake?(p.parentNode.removeChild(p),b.style.overflow=u,b.offsetHeight):c.parentNode.removeChild(c),!!d}function f(e,t){return!!~(""+e).indexOf(t)}function u(e,t){return function(){return e.apply(t,arguments)}}function l(e,t,n){var i;for(var o in e)if(e[o]in t)return n===!1?e[o]:(i=t[e[o]],r(i,"function")?u(i,n||t):i);return!1}function c(e){return e.replace(/([A-Z])/g,function(e,t){return"-"+t.toLowerCase()}).replace(/^ms-/,"-ms-")}function p(t,r){var i=t.length;if("CSS"in e&&"supports"in e.CSS){for(;i--;)if(e.CSS.supports(c(t[i]),r))return!0;return!1}if("CSSSupportsRule"in e){for(var o=[];i--;)o.push("("+c(t[i])+":"+r+")");return o=o.join(" or "),d("@supports ("+o+") { #modernizr { position: absolute; } }",function(e){return"absolute"==getComputedStyle(e,null).position})}return n}function m(e,t,i,a){function d(){l&&(delete I.style,delete I.modElem)}if(a=r(a,"undefined")?!1:a,!r(i,"undefined")){var u=p(e,i);if(!r(u,"undefined"))return u}for(var l,c,m,h,g,v=["modernizr","tspan"];!I.style;)l=!0,I.modElem=o(v.shift()),I.style=I.modElem.style;for(m=e.length,c=0;m>c;c++)if(h=e[c],g=I.style[h],f(h,"-")&&(h=s(h)),I.style[h]!==n){if(a||r(i,"undefined"))return d(),"pfx"==t?h:!0;try{I.style[h]=i}catch(y){}if(I.style[h]!=g)return d(),"pfx"==t?h:!0}return d(),!1}function h(e,t,n,i,o){var s=e.charAt(0).toUpperCase()+e.slice(1),a=(e+" "+P.join(s+" ")+s).split(" ");return r(t,"string")||r(t,"undefined")?m(a,t,i,o):(a=(e+" "+R.join(s+" ")+s).split(" "),l(a,t,n))}function g(e,t,r){return h(e,n,n,t,r)}var v=[],y={_version:"3.3.1",_config:{classPrefix:"",enableClasses:!0,enableJSClass:!0,usePrefixes:!0},_q:[],on:function(e,t){var n=this;setTimeout(function(){t(n[e])},0)},addTest:function(e,t,n){v.push({name:e,fn:t,options:n})},addAsyncTest:function(e){v.push({name:null,fn:e})}},Modernizr=function(){};Modernizr.prototype=y,Modernizr=new Modernizr;var x=[],w=y._config.usePrefixes?" -webkit- -moz- -o- -ms- ".split(" "):["",""];y._prefixes=w;var b=t.documentElement,S="CSS"in e&&"supports"in e.CSS,C="supportsCSS"in e;Modernizr.addTest("supports",S||C);var T="svg"===b.nodeName.toLowerCase();Modernizr.addTest("cssgradients",function(){for(var e,t="background-image:",n="gradient(linear,left top,right bottom,from(#9f9),to(white));",r="",i=0,s=w.length-1;s>i;i++)e=0===i?"to ":"",r+=t+w[i]+"linear-gradient("+e+"left top, #9f9, white);";Modernizr._config.usePrefixes&&(r+=t+"-webkit-"+n);var a=o("a"),d=a.style;return d.cssText=r,(""+d.backgroundImage).indexOf("gradient")>-1}),Modernizr.addTest("cssremunit",function(){var e=o("a").style;try{e.fontSize="3rem"}catch(t){}return/rem/.test(e.fontSize)}),Modernizr.addTest("rgba",function(){var e=o("a").style;return e.cssText="background-color:rgba(150,255,150,.5)",(""+e.backgroundColor).indexOf("rgba")>-1});var z=y.testStyles=d,_=function(){var e=navigator.userAgent,t=e.match(/applewebkit\/([0-9]+)/gi)&&parseFloat(RegExp.$1),n=e.match(/w(eb)?osbrowser/gi),r=e.match(/windows phone/gi)&&e.match(/iemobile\/([0-9])+/gi)&&parseFloat(RegExp.$1)>=9,i=533>t&&e.match(/android/gi);return n||i||r}();_?Modernizr.addTest("fontface",!1):z('@font-face {font-family:"font";src:url("https://")}',function(e,n){var r=t.getElementById("smodernizr"),i=r.sheet||r.styleSheet,o=i?i.cssRules&&i.cssRules[0]?i.cssRules[0].cssText:i.cssText||"":"",s=/src/i.test(o)&&0===o.indexOf(n.split(" ")[0]);Modernizr.addTest("fontface",s)}),z("#modernizr div {width:1px} #modernizr div:nth-child(2n) {width:2px;}",function(e){for(var t=e.getElementsByTagName("div"),n=!0,r=0;5>r;r++)n=n&&t[r].offsetWidth===r%2+1;Modernizr.addTest("nthchild",n)},5);var k=function(){var t=e.matchMedia||e.msMatchMedia;return t?function(e){var n=t(e);return n&&n.matches||!1}:function(t){var n=!1;return d("@media "+t+" { #modernizr { position: absolute; } }",function(t){n="absolute"==(e.getComputedStyle?e.getComputedStyle(t,null):t.currentStyle).position}),n}}();y.mq=k,Modernizr.addTest("mediaqueries",k("only all"));var E="Moz O ms Webkit",P=y._config.usePrefixes?E.split(" "):[];y._cssomPrefixes=P;var O=function(t){var r,i=w.length,o=e.CSSRule;if("undefined"==typeof o)return n;if(!t)return!1;if(t=t.replace(/^@/,""),r=t.replace(/-/g,"_").toUpperCase()+"_RULE",r in o)return"@"+t;for(var s=0;i>s;s++){var a=w[s],d=a.toUpperCase()+"_"+r;if(d in o)return"@-"+a.toLowerCase()+"-"+t}return!1};y.atRule=O;var R=y._config.usePrefixes?E.toLowerCase().split(" "):[];y._domPrefixes=R,z("#modernizr { height: 50vh; }",function(t){var n=parseInt(e.innerHeight/2,10),r=parseInt((e.getComputedStyle?getComputedStyle(t,null):t.currentStyle).height,10);Modernizr.addTest("cssvhunit",r==n)});var A={elem:o("modernizr")};Modernizr._q.push(function(){delete A.elem});var I={style:A.elem.style};Modernizr._q.unshift(function(){delete I.style}),y.testAllProps=h,y.testAllProps=g,Modernizr.addTest("boxsizing",g("boxSizing","border-box",!0)&&(t.documentMode===n||t.documentMode>7)),Modernizr.addTest("flexbox",g("flexBasis","1px",!0)),Modernizr.addTest("flexboxlegacy",g("boxDirection","reverse",!0)),Modernizr.addTest("csstransforms",function(){return-1===navigator.userAgent.indexOf("Android 2.")&&g("transform","scale(1)",!0)}),Modernizr.addTest("csstransforms3d",function(){var e=!!g("perspective","1px",!0),t=Modernizr._config.usePrefixes;if(e&&(!t||"webkitPerspective"in b.style)){var n,r="#modernizr{width:0;height:0}";Modernizr.supports?n="@supports (perspective: 1px)":(n="@media (transform-3d)",t&&(n+=",(-webkit-transform-3d)")),n+="{#modernizr{width:7px;height:18px;margin:0;padding:0;border:0}}",z(r+n,function(t){e=7===t.offsetWidth&&18===t.offsetHeight})}return e}),Modernizr.addTest("csstransitions",g("transition","all",!0));var j=y.prefixed=function(e,t,n){return 0===e.indexOf("@")?O(e):(-1!=e.indexOf("-")&&(e=s(e)),t?h(e,t,n):h(e,"pfx"))};Modernizr.addTest("objectfit",!!j("objectFit"),{aliases:["object-fit"]}),z("#modernizr { width: 50vw; }",function(t){var n=parseInt(e.innerWidth/2,10),r=parseInt((e.getComputedStyle?getComputedStyle(t,null):t.currentStyle).width,10);Modernizr.addTest("cssvwunit",r==n)}),i(),delete y.addTest,delete y.addAsyncTest;for(var q=0;q<Modernizr._q.length;q++)Modernizr._q[q]();e.Modernizr=Modernizr}(window,document);