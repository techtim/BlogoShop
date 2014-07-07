/*! jQuery v2.1.1 | (c) 2005, 2014 jQuery Foundation, Inc. | jquery.org/license */
!function(a,b){"object"==typeof module&&"object"==typeof module.exports?module.exports=a.document?b(a,!0):function(a){if(!a.document)throw new Error("jQuery requires a window with a document");return b(a)}:b(a)}("undefined"!=typeof window?window:this,function(a,b){var c=[],d=c.slice,e=c.concat,f=c.push,g=c.indexOf,h={},i=h.toString,j=h.hasOwnProperty,k={},l=a.document,m="2.1.1",n=function(a,b){return new n.fn.init(a,b)},o=/^[\s\uFEFF\xA0]+|[\s\uFEFF\xA0]+$/g,p=/^-ms-/,q=/-([\da-z])/gi,r=function(a,b){return b.toUpperCase()};n.fn=n.prototype={jquery:m,constructor:n,selector:"",length:0,toArray:function(){return d.call(this)},get:function(a){return null!=a?0>a?this[a+this.length]:this[a]:d.call(this)},pushStack:function(a){var b=n.merge(this.constructor(),a);return b.prevObject=this,b.context=this.context,b},each:function(a,b){return n.each(this,a,b)},map:function(a){return this.pushStack(n.map(this,function(b,c){return a.call(b,c,b)}))},slice:function(){return this.pushStack(d.apply(this,arguments))},first:function(){return this.eq(0)},last:function(){return this.eq(-1)},eq:function(a){var b=this.length,c=+a+(0>a?b:0);return this.pushStack(c>=0&&b>c?[this[c]]:[])},end:function(){return this.prevObject||this.constructor(null)},push:f,sort:c.sort,splice:c.splice},n.extend=n.fn.extend=function(){var a,b,c,d,e,f,g=arguments[0]||{},h=1,i=arguments.length,j=!1;for("boolean"==typeof g&&(j=g,g=arguments[h]||{},h++),"object"==typeof g||n.isFunction(g)||(g={}),h===i&&(g=this,h--);i>h;h++)if(null!=(a=arguments[h]))for(b in a)c=g[b],d=a[b],g!==d&&(j&&d&&(n.isPlainObject(d)||(e=n.isArray(d)))?(e?(e=!1,f=c&&n.isArray(c)?c:[]):f=c&&n.isPlainObject(c)?c:{},g[b]=n.extend(j,f,d)):void 0!==d&&(g[b]=d));return g},n.extend({expando:"jQuery"+(m+Math.random()).replace(/\D/g,""),isReady:!0,error:function(a){throw new Error(a)},noop:function(){},isFunction:function(a){return"function"===n.type(a)},isArray:Array.isArray,isWindow:function(a){return null!=a&&a===a.window},isNumeric:function(a){return!n.isArray(a)&&a-parseFloat(a)>=0},isPlainObject:function(a){return"object"!==n.type(a)||a.nodeType||n.isWindow(a)?!1:a.constructor&&!j.call(a.constructor.prototype,"isPrototypeOf")?!1:!0},isEmptyObject:function(a){var b;for(b in a)return!1;return!0},type:function(a){return null==a?a+"":"object"==typeof a||"function"==typeof a?h[i.call(a)]||"object":typeof a},globalEval:function(a){var b,c=eval;a=n.trim(a),a&&(1===a.indexOf("use strict")?(b=l.createElement("script"),b.text=a,l.head.appendChild(b).parentNode.removeChild(b)):c(a))},camelCase:function(a){return a.replace(p,"ms-").replace(q,r)},nodeName:function(a,b){return a.nodeName&&a.nodeName.toLowerCase()===b.toLowerCase()},each:function(a,b,c){var d,e=0,f=a.length,g=s(a);if(c){if(g){for(;f>e;e++)if(d=b.apply(a[e],c),d===!1)break}else for(e in a)if(d=b.apply(a[e],c),d===!1)break}else if(g){for(;f>e;e++)if(d=b.call(a[e],e,a[e]),d===!1)break}else for(e in a)if(d=b.call(a[e],e,a[e]),d===!1)break;return a},trim:function(a){return null==a?"":(a+"").replace(o,"")},makeArray:function(a,b){var c=b||[];return null!=a&&(s(Object(a))?n.merge(c,"string"==typeof a?[a]:a):f.call(c,a)),c},inArray:function(a,b,c){return null==b?-1:g.call(b,a,c)},merge:function(a,b){for(var c=+b.length,d=0,e=a.length;c>d;d++)a[e++]=b[d];return a.length=e,a},grep:function(a,b,c){for(var d,e=[],f=0,g=a.length,h=!c;g>f;f++)d=!b(a[f],f),d!==h&&e.push(a[f]);return e},map:function(a,b,c){var d,f=0,g=a.length,h=s(a),i=[];if(h)for(;g>f;f++)d=b(a[f],f,c),null!=d&&i.push(d);else for(f in a)d=b(a[f],f,c),null!=d&&i.push(d);return e.apply([],i)},guid:1,proxy:function(a,b){var c,e,f;return"string"==typeof b&&(c=a[b],b=a,a=c),n.isFunction(a)?(e=d.call(arguments,2),f=function(){return a.apply(b||this,e.concat(d.call(arguments)))},f.guid=a.guid=a.guid||n.guid++,f):void 0},now:Date.now,support:k}),n.each("Boolean Number String Function Array Date RegExp Object Error".split(" "),function(a,b){h["[object "+b+"]"]=b.toLowerCase()});function s(a){var b=a.length,c=n.type(a);return"function"===c||n.isWindow(a)?!1:1===a.nodeType&&b?!0:"array"===c||0===b||"number"==typeof b&&b>0&&b-1 in a}var t=function(a){var b,c,d,e,f,g,h,i,j,k,l,m,n,o,p,q,r,s,t,u="sizzle"+-new Date,v=a.document,w=0,x=0,y=gb(),z=gb(),A=gb(),B=function(a,b){return a===b&&(l=!0),0},C="undefined",D=1<<31,E={}.hasOwnProperty,F=[],G=F.pop,H=F.push,I=F.push,J=F.slice,K=F.indexOf||function(a){for(var b=0,c=this.length;c>b;b++)if(this[b]===a)return b;return-1},L="checked|selected|async|autofocus|autoplay|controls|defer|disabled|hidden|ismap|loop|multiple|open|readonly|required|scoped",M="[\\x20\\t\\r\\n\\f]",N="(?:\\\\.|[\\w-]|[^\\x00-\\xa0])+",O=N.replace("w","w#"),P="\\["+M+"*("+N+")(?:"+M+"*([*^$|!~]?=)"+M+"*(?:'((?:\\\\.|[^\\\\'])*)'|\"((?:\\\\.|[^\\\\\"])*)\"|("+O+"))|)"+M+"*\\]",Q=":("+N+")(?:\\((('((?:\\\\.|[^\\\\'])*)'|\"((?:\\\\.|[^\\\\\"])*)\")|((?:\\\\.|[^\\\\()[\\]]|"+P+")*)|.*)\\)|)",R=new RegExp("^"+M+"+|((?:^|[^\\\\])(?:\\\\.)*)"+M+"+$","g"),S=new RegExp("^"+M+"*,"+M+"*"),T=new RegExp("^"+M+"*([>+~]|"+M+")"+M+"*"),U=new RegExp("="+M+"*([^\\]'\"]*?)"+M+"*\\]","g"),V=new RegExp(Q),W=new RegExp("^"+O+"$"),X={ID:new RegExp("^#("+N+")"),CLASS:new RegExp("^\\.("+N+")"),TAG:new RegExp("^("+N.replace("w","w*")+")"),ATTR:new RegExp("^"+P),PSEUDO:new RegExp("^"+Q),CHILD:new RegExp("^:(only|first|last|nth|nth-last)-(child|of-type)(?:\\("+M+"*(even|odd|(([+-]|)(\\d*)n|)"+M+"*(?:([+-]|)"+M+"*(\\d+)|))"+M+"*\\)|)","i"),bool:new RegExp("^(?:"+L+")$","i"),needsContext:new RegExp("^"+M+"*[>+~]|:(even|odd|eq|gt|lt|nth|first|last)(?:\\("+M+"*((?:-\\d)?\\d*)"+M+"*\\)|)(?=[^-]|$)","i")},Y=/^(?:input|select|textarea|button)$/i,Z=/^h\d$/i,$=/^[^{]+\{\s*\[native \w/,_=/^(?:#([\w-]+)|(\w+)|\.([\w-]+))$/,ab=/[+~]/,bb=/'|\\/g,cb=new RegExp("\\\\([\\da-f]{1,6}"+M+"?|("+M+")|.)","ig"),db=function(a,b,c){var d="0x"+b-65536;return d!==d||c?b:0>d?String.fromCharCode(d+65536):String.fromCharCode(d>>10|55296,1023&d|56320)};try{I.apply(F=J.call(v.childNodes),v.childNodes),F[v.childNodes.length].nodeType}catch(eb){I={apply:F.length?function(a,b){H.apply(a,J.call(b))}:function(a,b){var c=a.length,d=0;while(a[c++]=b[d++]);a.length=c-1}}}function fb(a,b,d,e){var f,h,j,k,l,o,r,s,w,x;if((b?b.ownerDocument||b:v)!==n&&m(b),b=b||n,d=d||[],!a||"string"!=typeof a)return d;if(1!==(k=b.nodeType)&&9!==k)return[];if(p&&!e){if(f=_.exec(a))if(j=f[1]){if(9===k){if(h=b.getElementById(j),!h||!h.parentNode)return d;if(h.id===j)return d.push(h),d}else if(b.ownerDocument&&(h=b.ownerDocument.getElementById(j))&&t(b,h)&&h.id===j)return d.push(h),d}else{if(f[2])return I.apply(d,b.getElementsByTagName(a)),d;if((j=f[3])&&c.getElementsByClassName&&b.getElementsByClassName)return I.apply(d,b.getElementsByClassName(j)),d}if(c.qsa&&(!q||!q.test(a))){if(s=r=u,w=b,x=9===k&&a,1===k&&"object"!==b.nodeName.toLowerCase()){o=g(a),(r=b.getAttribute("id"))?s=r.replace(bb,"\\$&"):b.setAttribute("id",s),s="[id='"+s+"'] ",l=o.length;while(l--)o[l]=s+qb(o[l]);w=ab.test(a)&&ob(b.parentNode)||b,x=o.join(",")}if(x)try{return I.apply(d,w.querySelectorAll(x)),d}catch(y){}finally{r||b.removeAttribute("id")}}}return i(a.replace(R,"$1"),b,d,e)}function gb(){var a=[];function b(c,e){return a.push(c+" ")>d.cacheLength&&delete b[a.shift()],b[c+" "]=e}return b}function hb(a){return a[u]=!0,a}function ib(a){var b=n.createElement("div");try{return!!a(b)}catch(c){return!1}finally{b.parentNode&&b.parentNode.removeChild(b),b=null}}function jb(a,b){var c=a.split("|"),e=a.length;while(e--)d.attrHandle[c[e]]=b}function kb(a,b){var c=b&&a,d=c&&1===a.nodeType&&1===b.nodeType&&(~b.sourceIndex||D)-(~a.sourceIndex||D);if(d)return d;if(c)while(c=c.nextSibling)if(c===b)return-1;return a?1:-1}function lb(a){return function(b){var c=b.nodeName.toLowerCase();return"input"===c&&b.type===a}}function mb(a){return function(b){var c=b.nodeName.toLowerCase();return("input"===c||"button"===c)&&b.type===a}}function nb(a){return hb(function(b){return b=+b,hb(function(c,d){var e,f=a([],c.length,b),g=f.length;while(g--)c[e=f[g]]&&(c[e]=!(d[e]=c[e]))})})}function ob(a){return a&&typeof a.getElementsByTagName!==C&&a}c=fb.support={},f=fb.isXML=function(a){var b=a&&(a.ownerDocument||a).documentElement;return b?"HTML"!==b.nodeName:!1},m=fb.setDocument=function(a){var b,e=a?a.ownerDocument||a:v,g=e.defaultView;return e!==n&&9===e.nodeType&&e.documentElement?(n=e,o=e.documentElement,p=!f(e),g&&g!==g.top&&(g.addEventListener?g.addEventListener("unload",function(){m()},!1):g.attachEvent&&g.attachEvent("onunload",function(){m()})),c.attributes=ib(function(a){return a.className="i",!a.getAttribute("className")}),c.getElementsByTagName=ib(function(a){return a.appendChild(e.createComment("")),!a.getElementsByTagName("*").length}),c.getElementsByClassName=$.test(e.getElementsByClassName)&&ib(function(a){return a.innerHTML="<div class='a'></div><div class='a i'></div>",a.firstChild.className="i",2===a.getElementsByClassName("i").length}),c.getById=ib(function(a){return o.appendChild(a).id=u,!e.getElementsByName||!e.getElementsByName(u).length}),c.getById?(d.find.ID=function(a,b){if(typeof b.getElementById!==C&&p){var c=b.getElementById(a);return c&&c.parentNode?[c]:[]}},d.filter.ID=function(a){var b=a.replace(cb,db);return function(a){return a.getAttribute("id")===b}}):(delete d.find.ID,d.filter.ID=function(a){var b=a.replace(cb,db);return function(a){var c=typeof a.getAttributeNode!==C&&a.getAttributeNode("id");return c&&c.value===b}}),d.find.TAG=c.getElementsByTagName?function(a,b){return typeof b.getElementsByTagName!==C?b.getElementsByTagName(a):void 0}:function(a,b){var c,d=[],e=0,f=b.getElementsByTagName(a);if("*"===a){while(c=f[e++])1===c.nodeType&&d.push(c);return d}return f},d.find.CLASS=c.getElementsByClassName&&function(a,b){return typeof b.getElementsByClassName!==C&&p?b.getElementsByClassName(a):void 0},r=[],q=[],(c.qsa=$.test(e.querySelectorAll))&&(ib(function(a){a.innerHTML="<select msallowclip=''><option selected=''></option></select>",a.querySelectorAll("[msallowclip^='']").length&&q.push("[*^$]="+M+"*(?:''|\"\")"),a.querySelectorAll("[selected]").length||q.push("\\["+M+"*(?:value|"+L+")"),a.querySelectorAll(":checked").length||q.push(":checked")}),ib(function(a){var b=e.createElement("input");b.setAttribute("type","hidden"),a.appendChild(b).setAttribute("name","D"),a.querySelectorAll("[name=d]").length&&q.push("name"+M+"*[*^$|!~]?="),a.querySelectorAll(":enabled").length||q.push(":enabled",":disabled"),a.querySelectorAll("*,:x"),q.push(",.*:")})),(c.matchesSelector=$.test(s=o.matches||o.webkitMatchesSelector||o.mozMatchesSelector||o.oMatchesSelector||o.msMatchesSelector))&&ib(function(a){c.disconnectedMatch=s.call(a,"div"),s.call(a,"[s!='']:x"),r.push("!=",Q)}),q=q.length&&new RegExp(q.join("|")),r=r.length&&new RegExp(r.join("|")),b=$.test(o.compareDocumentPosition),t=b||$.test(o.contains)?function(a,b){var c=9===a.nodeType?a.documentElement:a,d=b&&b.parentNode;return a===d||!(!d||1!==d.nodeType||!(c.contains?c.contains(d):a.compareDocumentPosition&&16&a.compareDocumentPosition(d)))}:function(a,b){if(b)while(b=b.parentNode)if(b===a)return!0;return!1},B=b?function(a,b){if(a===b)return l=!0,0;var d=!a.compareDocumentPosition-!b.compareDocumentPosition;return d?d:(d=(a.ownerDocument||a)===(b.ownerDocument||b)?a.compareDocumentPosition(b):1,1&d||!c.sortDetached&&b.compareDocumentPosition(a)===d?a===e||a.ownerDocument===v&&t(v,a)?-1:b===e||b.ownerDocument===v&&t(v,b)?1:k?K.call(k,a)-K.call(k,b):0:4&d?-1:1)}:function(a,b){if(a===b)return l=!0,0;var c,d=0,f=a.parentNode,g=b.parentNode,h=[a],i=[b];if(!f||!g)return a===e?-1:b===e?1:f?-1:g?1:k?K.call(k,a)-K.call(k,b):0;if(f===g)return kb(a,b);c=a;while(c=c.parentNode)h.unshift(c);c=b;while(c=c.parentNode)i.unshift(c);while(h[d]===i[d])d++;return d?kb(h[d],i[d]):h[d]===v?-1:i[d]===v?1:0},e):n},fb.matches=function(a,b){return fb(a,null,null,b)},fb.matchesSelector=function(a,b){if((a.ownerDocument||a)!==n&&m(a),b=b.replace(U,"='$1']"),!(!c.matchesSelector||!p||r&&r.test(b)||q&&q.test(b)))try{var d=s.call(a,b);if(d||c.disconnectedMatch||a.document&&11!==a.document.nodeType)return d}catch(e){}return fb(b,n,null,[a]).length>0},fb.contains=function(a,b){return(a.ownerDocument||a)!==n&&m(a),t(a,b)},fb.attr=function(a,b){(a.ownerDocument||a)!==n&&m(a);var e=d.attrHandle[b.toLowerCase()],f=e&&E.call(d.attrHandle,b.toLowerCase())?e(a,b,!p):void 0;return void 0!==f?f:c.attributes||!p?a.getAttribute(b):(f=a.getAttributeNode(b))&&f.specified?f.value:null},fb.error=function(a){throw new Error("Syntax error, unrecognized expression: "+a)},fb.uniqueSort=function(a){var b,d=[],e=0,f=0;if(l=!c.detectDuplicates,k=!c.sortStable&&a.slice(0),a.sort(B),l){while(b=a[f++])b===a[f]&&(e=d.push(f));while(e--)a.splice(d[e],1)}return k=null,a},e=fb.getText=function(a){var b,c="",d=0,f=a.nodeType;if(f){if(1===f||9===f||11===f){if("string"==typeof a.textContent)return a.textContent;for(a=a.firstChild;a;a=a.nextSibling)c+=e(a)}else if(3===f||4===f)return a.nodeValue}else while(b=a[d++])c+=e(b);return c},d=fb.selectors={cacheLength:50,createPseudo:hb,match:X,attrHandle:{},find:{},relative:{">":{dir:"parentNode",first:!0}," ":{dir:"parentNode"},"+":{dir:"previousSibling",first:!0},"~":{dir:"previousSibling"}},preFilter:{ATTR:function(a){return a[1]=a[1].replace(cb,db),a[3]=(a[3]||a[4]||a[5]||"").replace(cb,db),"~="===a[2]&&(a[3]=" "+a[3]+" "),a.slice(0,4)},CHILD:function(a){return a[1]=a[1].toLowerCase(),"nth"===a[1].slice(0,3)?(a[3]||fb.error(a[0]),a[4]=+(a[4]?a[5]+(a[6]||1):2*("even"===a[3]||"odd"===a[3])),a[5]=+(a[7]+a[8]||"odd"===a[3])):a[3]&&fb.error(a[0]),a},PSEUDO:function(a){var b,c=!a[6]&&a[2];return X.CHILD.test(a[0])?null:(a[3]?a[2]=a[4]||a[5]||"":c&&V.test(c)&&(b=g(c,!0))&&(b=c.indexOf(")",c.length-b)-c.length)&&(a[0]=a[0].slice(0,b),a[2]=c.slice(0,b)),a.slice(0,3))}},filter:{TAG:function(a){var b=a.replace(cb,db).toLowerCase();return"*"===a?function(){return!0}:function(a){return a.nodeName&&a.nodeName.toLowerCase()===b}},CLASS:function(a){var b=y[a+" "];return b||(b=new RegExp("(^|"+M+")"+a+"("+M+"|$)"))&&y(a,function(a){return b.test("string"==typeof a.className&&a.className||typeof a.getAttribute!==C&&a.getAttribute("class")||"")})},ATTR:function(a,b,c){return function(d){var e=fb.attr(d,a);return null==e?"!="===b:b?(e+="","="===b?e===c:"!="===b?e!==c:"^="===b?c&&0===e.indexOf(c):"*="===b?c&&e.indexOf(c)>-1:"$="===b?c&&e.slice(-c.length)===c:"~="===b?(" "+e+" ").indexOf(c)>-1:"|="===b?e===c||e.slice(0,c.length+1)===c+"-":!1):!0}},CHILD:function(a,b,c,d,e){var f="nth"!==a.slice(0,3),g="last"!==a.slice(-4),h="of-type"===b;return 1===d&&0===e?function(a){return!!a.parentNode}:function(b,c,i){var j,k,l,m,n,o,p=f!==g?"nextSibling":"previousSibling",q=b.parentNode,r=h&&b.nodeName.toLowerCase(),s=!i&&!h;if(q){if(f){while(p){l=b;while(l=l[p])if(h?l.nodeName.toLowerCase()===r:1===l.nodeType)return!1;o=p="only"===a&&!o&&"nextSibling"}return!0}if(o=[g?q.firstChild:q.lastChild],g&&s){k=q[u]||(q[u]={}),j=k[a]||[],n=j[0]===w&&j[1],m=j[0]===w&&j[2],l=n&&q.childNodes[n];while(l=++n&&l&&l[p]||(m=n=0)||o.pop())if(1===l.nodeType&&++m&&l===b){k[a]=[w,n,m];break}}else if(s&&(j=(b[u]||(b[u]={}))[a])&&j[0]===w)m=j[1];else while(l=++n&&l&&l[p]||(m=n=0)||o.pop())if((h?l.nodeName.toLowerCase()===r:1===l.nodeType)&&++m&&(s&&((l[u]||(l[u]={}))[a]=[w,m]),l===b))break;return m-=e,m===d||m%d===0&&m/d>=0}}},PSEUDO:function(a,b){var c,e=d.pseudos[a]||d.setFilters[a.toLowerCase()]||fb.error("unsupported pseudo: "+a);return e[u]?e(b):e.length>1?(c=[a,a,"",b],d.setFilters.hasOwnProperty(a.toLowerCase())?hb(function(a,c){var d,f=e(a,b),g=f.length;while(g--)d=K.call(a,f[g]),a[d]=!(c[d]=f[g])}):function(a){return e(a,0,c)}):e}},pseudos:{not:hb(function(a){var b=[],c=[],d=h(a.replace(R,"$1"));return d[u]?hb(function(a,b,c,e){var f,g=d(a,null,e,[]),h=a.length;while(h--)(f=g[h])&&(a[h]=!(b[h]=f))}):function(a,e,f){return b[0]=a,d(b,null,f,c),!c.pop()}}),has:hb(function(a){return function(b){return fb(a,b).length>0}}),contains:hb(function(a){return function(b){return(b.textContent||b.innerText||e(b)).indexOf(a)>-1}}),lang:hb(function(a){return W.test(a||"")||fb.error("unsupported lang: "+a),a=a.replace(cb,db).toLowerCase(),function(b){var c;do if(c=p?b.lang:b.getAttribute("xml:lang")||b.getAttribute("lang"))return c=c.toLowerCase(),c===a||0===c.indexOf(a+"-");while((b=b.parentNode)&&1===b.nodeType);return!1}}),target:function(b){var c=a.location&&a.location.hash;return c&&c.slice(1)===b.id},root:function(a){return a===o},focus:function(a){return a===n.activeElement&&(!n.hasFocus||n.hasFocus())&&!!(a.type||a.href||~a.tabIndex)},enabled:function(a){return a.disabled===!1},disabled:function(a){return a.disabled===!0},checked:function(a){var b=a.nodeName.toLowerCase();return"input"===b&&!!a.checked||"option"===b&&!!a.selected},selected:function(a){return a.parentNode&&a.parentNode.selectedIndex,a.selected===!0},empty:function(a){for(a=a.firstChild;a;a=a.nextSibling)if(a.nodeType<6)return!1;return!0},parent:function(a){return!d.pseudos.empty(a)},header:function(a){return Z.test(a.nodeName)},input:function(a){return Y.test(a.nodeName)},button:function(a){var b=a.nodeName.toLowerCase();return"input"===b&&"button"===a.type||"button"===b},text:function(a){var b;return"input"===a.nodeName.toLowerCase()&&"text"===a.type&&(null==(b=a.getAttribute("type"))||"text"===b.toLowerCase())},first:nb(function(){return[0]}),last:nb(function(a,b){return[b-1]}),eq:nb(function(a,b,c){return[0>c?c+b:c]}),even:nb(function(a,b){for(var c=0;b>c;c+=2)a.push(c);return a}),odd:nb(function(a,b){for(var c=1;b>c;c+=2)a.push(c);return a}),lt:nb(function(a,b,c){for(var d=0>c?c+b:c;--d>=0;)a.push(d);return a}),gt:nb(function(a,b,c){for(var d=0>c?c+b:c;++d<b;)a.push(d);return a})}},d.pseudos.nth=d.pseudos.eq;for(b in{radio:!0,checkbox:!0,file:!0,password:!0,image:!0})d.pseudos[b]=lb(b);for(b in{submit:!0,reset:!0})d.pseudos[b]=mb(b);function pb(){}pb.prototype=d.filters=d.pseudos,d.setFilters=new pb,g=fb.tokenize=function(a,b){var c,e,f,g,h,i,j,k=z[a+" "];if(k)return b?0:k.slice(0);h=a,i=[],j=d.preFilter;while(h){(!c||(e=S.exec(h)))&&(e&&(h=h.slice(e[0].length)||h),i.push(f=[])),c=!1,(e=T.exec(h))&&(c=e.shift(),f.push({value:c,type:e[0].replace(R," ")}),h=h.slice(c.length));for(g in d.filter)!(e=X[g].exec(h))||j[g]&&!(e=j[g](e))||(c=e.shift(),f.push({value:c,type:g,matches:e}),h=h.slice(c.length));if(!c)break}return b?h.length:h?fb.error(a):z(a,i).slice(0)};function qb(a){for(var b=0,c=a.length,d="";c>b;b++)d+=a[b].value;return d}function rb(a,b,c){var d=b.dir,e=c&&"parentNode"===d,f=x++;return b.first?function(b,c,f){while(b=b[d])if(1===b.nodeType||e)return a(b,c,f)}:function(b,c,g){var h,i,j=[w,f];if(g){while(b=b[d])if((1===b.nodeType||e)&&a(b,c,g))return!0}else while(b=b[d])if(1===b.nodeType||e){if(i=b[u]||(b[u]={}),(h=i[d])&&h[0]===w&&h[1]===f)return j[2]=h[2];if(i[d]=j,j[2]=a(b,c,g))return!0}}}function sb(a){return a.length>1?function(b,c,d){var e=a.length;while(e--)if(!a[e](b,c,d))return!1;return!0}:a[0]}function tb(a,b,c){for(var d=0,e=b.length;e>d;d++)fb(a,b[d],c);return c}function ub(a,b,c,d,e){for(var f,g=[],h=0,i=a.length,j=null!=b;i>h;h++)(f=a[h])&&(!c||c(f,d,e))&&(g.push(f),j&&b.push(h));return g}function vb(a,b,c,d,e,f){return d&&!d[u]&&(d=vb(d)),e&&!e[u]&&(e=vb(e,f)),hb(function(f,g,h,i){var j,k,l,m=[],n=[],o=g.length,p=f||tb(b||"*",h.nodeType?[h]:h,[]),q=!a||!f&&b?p:ub(p,m,a,h,i),r=c?e||(f?a:o||d)?[]:g:q;if(c&&c(q,r,h,i),d){j=ub(r,n),d(j,[],h,i),k=j.length;while(k--)(l=j[k])&&(r[n[k]]=!(q[n[k]]=l))}if(f){if(e||a){if(e){j=[],k=r.length;while(k--)(l=r[k])&&j.push(q[k]=l);e(null,r=[],j,i)}k=r.length;while(k--)(l=r[k])&&(j=e?K.call(f,l):m[k])>-1&&(f[j]=!(g[j]=l))}}else r=ub(r===g?r.splice(o,r.length):r),e?e(null,g,r,i):I.apply(g,r)})}function wb(a){for(var b,c,e,f=a.length,g=d.relative[a[0].type],h=g||d.relative[" "],i=g?1:0,k=rb(function(a){return a===b},h,!0),l=rb(function(a){return K.call(b,a)>-1},h,!0),m=[function(a,c,d){return!g&&(d||c!==j)||((b=c).nodeType?k(a,c,d):l(a,c,d))}];f>i;i++)if(c=d.relative[a[i].type])m=[rb(sb(m),c)];else{if(c=d.filter[a[i].type].apply(null,a[i].matches),c[u]){for(e=++i;f>e;e++)if(d.relative[a[e].type])break;return vb(i>1&&sb(m),i>1&&qb(a.slice(0,i-1).concat({value:" "===a[i-2].type?"*":""})).replace(R,"$1"),c,e>i&&wb(a.slice(i,e)),f>e&&wb(a=a.slice(e)),f>e&&qb(a))}m.push(c)}return sb(m)}function xb(a,b){var c=b.length>0,e=a.length>0,f=function(f,g,h,i,k){var l,m,o,p=0,q="0",r=f&&[],s=[],t=j,u=f||e&&d.find.TAG("*",k),v=w+=null==t?1:Math.random()||.1,x=u.length;for(k&&(j=g!==n&&g);q!==x&&null!=(l=u[q]);q++){if(e&&l){m=0;while(o=a[m++])if(o(l,g,h)){i.push(l);break}k&&(w=v)}c&&((l=!o&&l)&&p--,f&&r.push(l))}if(p+=q,c&&q!==p){m=0;while(o=b[m++])o(r,s,g,h);if(f){if(p>0)while(q--)r[q]||s[q]||(s[q]=G.call(i));s=ub(s)}I.apply(i,s),k&&!f&&s.length>0&&p+b.length>1&&fb.uniqueSort(i)}return k&&(w=v,j=t),r};return c?hb(f):f}return h=fb.compile=function(a,b){var c,d=[],e=[],f=A[a+" "];if(!f){b||(b=g(a)),c=b.length;while(c--)f=wb(b[c]),f[u]?d.push(f):e.push(f);f=A(a,xb(e,d)),f.selector=a}return f},i=fb.select=function(a,b,e,f){var i,j,k,l,m,n="function"==typeof a&&a,o=!f&&g(a=n.selector||a);if(e=e||[],1===o.length){if(j=o[0]=o[0].slice(0),j.length>2&&"ID"===(k=j[0]).type&&c.getById&&9===b.nodeType&&p&&d.relative[j[1].type]){if(b=(d.find.ID(k.matches[0].replace(cb,db),b)||[])[0],!b)return e;n&&(b=b.parentNode),a=a.slice(j.shift().value.length)}i=X.needsContext.test(a)?0:j.length;while(i--){if(k=j[i],d.relative[l=k.type])break;if((m=d.find[l])&&(f=m(k.matches[0].replace(cb,db),ab.test(j[0].type)&&ob(b.parentNode)||b))){if(j.splice(i,1),a=f.length&&qb(j),!a)return I.apply(e,f),e;break}}}return(n||h(a,o))(f,b,!p,e,ab.test(a)&&ob(b.parentNode)||b),e},c.sortStable=u.split("").sort(B).join("")===u,c.detectDuplicates=!!l,m(),c.sortDetached=ib(function(a){return 1&a.compareDocumentPosition(n.createElement("div"))}),ib(function(a){return a.innerHTML="<a href='#'></a>","#"===a.firstChild.getAttribute("href")})||jb("type|href|height|width",function(a,b,c){return c?void 0:a.getAttribute(b,"type"===b.toLowerCase()?1:2)}),c.attributes&&ib(function(a){return a.innerHTML="<input/>",a.firstChild.setAttribute("value",""),""===a.firstChild.getAttribute("value")})||jb("value",function(a,b,c){return c||"input"!==a.nodeName.toLowerCase()?void 0:a.defaultValue}),ib(function(a){return null==a.getAttribute("disabled")})||jb(L,function(a,b,c){var d;return c?void 0:a[b]===!0?b.toLowerCase():(d=a.getAttributeNode(b))&&d.specified?d.value:null}),fb}(a);n.find=t,n.expr=t.selectors,n.expr[":"]=n.expr.pseudos,n.unique=t.uniqueSort,n.text=t.getText,n.isXMLDoc=t.isXML,n.contains=t.contains;var u=n.expr.match.needsContext,v=/^<(\w+)\s*\/?>(?:<\/\1>|)$/,w=/^.[^:#\[\.,]*$/;function x(a,b,c){if(n.isFunction(b))return n.grep(a,function(a,d){return!!b.call(a,d,a)!==c});if(b.nodeType)return n.grep(a,function(a){return a===b!==c});if("string"==typeof b){if(w.test(b))return n.filter(b,a,c);b=n.filter(b,a)}return n.grep(a,function(a){return g.call(b,a)>=0!==c})}n.filter=function(a,b,c){var d=b[0];return c&&(a=":not("+a+")"),1===b.length&&1===d.nodeType?n.find.matchesSelector(d,a)?[d]:[]:n.find.matches(a,n.grep(b,function(a){return 1===a.nodeType}))},n.fn.extend({find:function(a){var b,c=this.length,d=[],e=this;if("string"!=typeof a)return this.pushStack(n(a).filter(function(){for(b=0;c>b;b++)if(n.contains(e[b],this))return!0}));for(b=0;c>b;b++)n.find(a,e[b],d);return d=this.pushStack(c>1?n.unique(d):d),d.selector=this.selector?this.selector+" "+a:a,d},filter:function(a){return this.pushStack(x(this,a||[],!1))},not:function(a){return this.pushStack(x(this,a||[],!0))},is:function(a){return!!x(this,"string"==typeof a&&u.test(a)?n(a):a||[],!1).length}});var y,z=/^(?:\s*(<[\w\W]+>)[^>]*|#([\w-]*))$/,A=n.fn.init=function(a,b){var c,d;if(!a)return this;if("string"==typeof a){if(c="<"===a[0]&&">"===a[a.length-1]&&a.length>=3?[null,a,null]:z.exec(a),!c||!c[1]&&b)return!b||b.jquery?(b||y).find(a):this.constructor(b).find(a);if(c[1]){if(b=b instanceof n?b[0]:b,n.merge(this,n.parseHTML(c[1],b&&b.nodeType?b.ownerDocument||b:l,!0)),v.test(c[1])&&n.isPlainObject(b))for(c in b)n.isFunction(this[c])?this[c](b[c]):this.attr(c,b[c]);return this}return d=l.getElementById(c[2]),d&&d.parentNode&&(this.length=1,this[0]=d),this.context=l,this.selector=a,this}return a.nodeType?(this.context=this[0]=a,this.length=1,this):n.isFunction(a)?"undefined"!=typeof y.ready?y.ready(a):a(n):(void 0!==a.selector&&(this.selector=a.selector,this.context=a.context),n.makeArray(a,this))};A.prototype=n.fn,y=n(l);var B=/^(?:parents|prev(?:Until|All))/,C={children:!0,contents:!0,next:!0,prev:!0};n.extend({dir:function(a,b,c){var d=[],e=void 0!==c;while((a=a[b])&&9!==a.nodeType)if(1===a.nodeType){if(e&&n(a).is(c))break;d.push(a)}return d},sibling:function(a,b){for(var c=[];a;a=a.nextSibling)1===a.nodeType&&a!==b&&c.push(a);return c}}),n.fn.extend({has:function(a){var b=n(a,this),c=b.length;return this.filter(function(){for(var a=0;c>a;a++)if(n.contains(this,b[a]))return!0})},closest:function(a,b){for(var c,d=0,e=this.length,f=[],g=u.test(a)||"string"!=typeof a?n(a,b||this.context):0;e>d;d++)for(c=this[d];c&&c!==b;c=c.parentNode)if(c.nodeType<11&&(g?g.index(c)>-1:1===c.nodeType&&n.find.matchesSelector(c,a))){f.push(c);break}return this.pushStack(f.length>1?n.unique(f):f)},index:function(a){return a?"string"==typeof a?g.call(n(a),this[0]):g.call(this,a.jquery?a[0]:a):this[0]&&this[0].parentNode?this.first().prevAll().length:-1},add:function(a,b){return this.pushStack(n.unique(n.merge(this.get(),n(a,b))))},addBack:function(a){return this.add(null==a?this.prevObject:this.prevObject.filter(a))}});function D(a,b){while((a=a[b])&&1!==a.nodeType);return a}n.each({parent:function(a){var b=a.parentNode;return b&&11!==b.nodeType?b:null},parents:function(a){return n.dir(a,"parentNode")},parentsUntil:function(a,b,c){return n.dir(a,"parentNode",c)},next:function(a){return D(a,"nextSibling")},prev:function(a){return D(a,"previousSibling")},nextAll:function(a){return n.dir(a,"nextSibling")},prevAll:function(a){return n.dir(a,"previousSibling")},nextUntil:function(a,b,c){return n.dir(a,"nextSibling",c)},prevUntil:function(a,b,c){return n.dir(a,"previousSibling",c)},siblings:function(a){return n.sibling((a.parentNode||{}).firstChild,a)},children:function(a){return n.sibling(a.firstChild)},contents:function(a){return a.contentDocument||n.merge([],a.childNodes)}},function(a,b){n.fn[a]=function(c,d){var e=n.map(this,b,c);return"Until"!==a.slice(-5)&&(d=c),d&&"string"==typeof d&&(e=n.filter(d,e)),this.length>1&&(C[a]||n.unique(e),B.test(a)&&e.reverse()),this.pushStack(e)}});var E=/\S+/g,F={};function G(a){var b=F[a]={};return n.each(a.match(E)||[],function(a,c){b[c]=!0}),b}n.Callbacks=function(a){a="string"==typeof a?F[a]||G(a):n.extend({},a);var b,c,d,e,f,g,h=[],i=!a.once&&[],j=function(l){for(b=a.memory&&l,c=!0,g=e||0,e=0,f=h.length,d=!0;h&&f>g;g++)if(h[g].apply(l[0],l[1])===!1&&a.stopOnFalse){b=!1;break}d=!1,h&&(i?i.length&&j(i.shift()):b?h=[]:k.disable())},k={add:function(){if(h){var c=h.length;!function g(b){n.each(b,function(b,c){var d=n.type(c);"function"===d?a.unique&&k.has(c)||h.push(c):c&&c.length&&"string"!==d&&g(c)})}(arguments),d?f=h.length:b&&(e=c,j(b))}return this},remove:function(){return h&&n.each(arguments,function(a,b){var c;while((c=n.inArray(b,h,c))>-1)h.splice(c,1),d&&(f>=c&&f--,g>=c&&g--)}),this},has:function(a){return a?n.inArray(a,h)>-1:!(!h||!h.length)},empty:function(){return h=[],f=0,this},disable:function(){return h=i=b=void 0,this},disabled:function(){return!h},lock:function(){return i=void 0,b||k.disable(),this},locked:function(){return!i},fireWith:function(a,b){return!h||c&&!i||(b=b||[],b=[a,b.slice?b.slice():b],d?i.push(b):j(b)),this},fire:function(){return k.fireWith(this,arguments),this},fired:function(){return!!c}};return k},n.extend({Deferred:function(a){var b=[["resolve","done",n.Callbacks("once memory"),"resolved"],["reject","fail",n.Callbacks("once memory"),"rejected"],["notify","progress",n.Callbacks("memory")]],c="pending",d={state:function(){return c},always:function(){return e.done(arguments).fail(arguments),this},then:function(){var a=arguments;return n.Deferred(function(c){n.each(b,function(b,f){var g=n.isFunction(a[b])&&a[b];e[f[1]](function(){var a=g&&g.apply(this,arguments);a&&n.isFunction(a.promise)?a.promise().done(c.resolve).fail(c.reject).progress(c.notify):c[f[0]+"With"](this===d?c.promise():this,g?[a]:arguments)})}),a=null}).promise()},promise:function(a){return null!=a?n.extend(a,d):d}},e={};return d.pipe=d.then,n.each(b,function(a,f){var g=f[2],h=f[3];d[f[1]]=g.add,h&&g.add(function(){c=h},b[1^a][2].disable,b[2][2].lock),e[f[0]]=function(){return e[f[0]+"With"](this===e?d:this,arguments),this},e[f[0]+"With"]=g.fireWith}),d.promise(e),a&&a.call(e,e),e},when:function(a){var b=0,c=d.call(arguments),e=c.length,f=1!==e||a&&n.isFunction(a.promise)?e:0,g=1===f?a:n.Deferred(),h=function(a,b,c){return function(e){b[a]=this,c[a]=arguments.length>1?d.call(arguments):e,c===i?g.notifyWith(b,c):--f||g.resolveWith(b,c)}},i,j,k;if(e>1)for(i=new Array(e),j=new Array(e),k=new Array(e);e>b;b++)c[b]&&n.isFunction(c[b].promise)?c[b].promise().done(h(b,k,c)).fail(g.reject).progress(h(b,j,i)):--f;return f||g.resolveWith(k,c),g.promise()}});var H;n.fn.ready=function(a){return n.ready.promise().done(a),this},n.extend({isReady:!1,readyWait:1,holdReady:function(a){a?n.readyWait++:n.ready(!0)},ready:function(a){(a===!0?--n.readyWait:n.isReady)||(n.isReady=!0,a!==!0&&--n.readyWait>0||(H.resolveWith(l,[n]),n.fn.triggerHandler&&(n(l).triggerHandler("ready"),n(l).off("ready"))))}});function I(){l.removeEventListener("DOMContentLoaded",I,!1),a.removeEventListener("load",I,!1),n.ready()}n.ready.promise=function(b){return H||(H=n.Deferred(),"complete"===l.readyState?setTimeout(n.ready):(l.addEventListener("DOMContentLoaded",I,!1),a.addEventListener("load",I,!1))),H.promise(b)},n.ready.promise();var J=n.access=function(a,b,c,d,e,f,g){var h=0,i=a.length,j=null==c;if("object"===n.type(c)){e=!0;for(h in c)n.access(a,b,h,c[h],!0,f,g)}else if(void 0!==d&&(e=!0,n.isFunction(d)||(g=!0),j&&(g?(b.call(a,d),b=null):(j=b,b=function(a,b,c){return j.call(n(a),c)})),b))for(;i>h;h++)b(a[h],c,g?d:d.call(a[h],h,b(a[h],c)));return e?a:j?b.call(a):i?b(a[0],c):f};n.acceptData=function(a){return 1===a.nodeType||9===a.nodeType||!+a.nodeType};function K(){Object.defineProperty(this.cache={},0,{get:function(){return{}}}),this.expando=n.expando+Math.random()}K.uid=1,K.accepts=n.acceptData,K.prototype={key:function(a){if(!K.accepts(a))return 0;var b={},c=a[this.expando];if(!c){c=K.uid++;try{b[this.expando]={value:c},Object.defineProperties(a,b)}catch(d){b[this.expando]=c,n.extend(a,b)}}return this.cache[c]||(this.cache[c]={}),c},set:function(a,b,c){var d,e=this.key(a),f=this.cache[e];if("string"==typeof b)f[b]=c;else if(n.isEmptyObject(f))n.extend(this.cache[e],b);else for(d in b)f[d]=b[d];return f},get:function(a,b){var c=this.cache[this.key(a)];return void 0===b?c:c[b]},access:function(a,b,c){var d;return void 0===b||b&&"string"==typeof b&&void 0===c?(d=this.get(a,b),void 0!==d?d:this.get(a,n.camelCase(b))):(this.set(a,b,c),void 0!==c?c:b)},remove:function(a,b){var c,d,e,f=this.key(a),g=this.cache[f];if(void 0===b)this.cache[f]={};else{n.isArray(b)?d=b.concat(b.map(n.camelCase)):(e=n.camelCase(b),b in g?d=[b,e]:(d=e,d=d in g?[d]:d.match(E)||[])),c=d.length;while(c--)delete g[d[c]]}},hasData:function(a){return!n.isEmptyObject(this.cache[a[this.expando]]||{})},discard:function(a){a[this.expando]&&delete this.cache[a[this.expando]]}};var L=new K,M=new K,N=/^(?:\{[\w\W]*\}|\[[\w\W]*\])$/,O=/([A-Z])/g;function P(a,b,c){var d;if(void 0===c&&1===a.nodeType)if(d="data-"+b.replace(O,"-$1").toLowerCase(),c=a.getAttribute(d),"string"==typeof c){try{c="true"===c?!0:"false"===c?!1:"null"===c?null:+c+""===c?+c:N.test(c)?n.parseJSON(c):c}catch(e){}M.set(a,b,c)}else c=void 0;return c}n.extend({hasData:function(a){return M.hasData(a)||L.hasData(a)},data:function(a,b,c){return M.access(a,b,c)},removeData:function(a,b){M.remove(a,b)
},_data:function(a,b,c){return L.access(a,b,c)},_removeData:function(a,b){L.remove(a,b)}}),n.fn.extend({data:function(a,b){var c,d,e,f=this[0],g=f&&f.attributes;if(void 0===a){if(this.length&&(e=M.get(f),1===f.nodeType&&!L.get(f,"hasDataAttrs"))){c=g.length;while(c--)g[c]&&(d=g[c].name,0===d.indexOf("data-")&&(d=n.camelCase(d.slice(5)),P(f,d,e[d])));L.set(f,"hasDataAttrs",!0)}return e}return"object"==typeof a?this.each(function(){M.set(this,a)}):J(this,function(b){var c,d=n.camelCase(a);if(f&&void 0===b){if(c=M.get(f,a),void 0!==c)return c;if(c=M.get(f,d),void 0!==c)return c;if(c=P(f,d,void 0),void 0!==c)return c}else this.each(function(){var c=M.get(this,d);M.set(this,d,b),-1!==a.indexOf("-")&&void 0!==c&&M.set(this,a,b)})},null,b,arguments.length>1,null,!0)},removeData:function(a){return this.each(function(){M.remove(this,a)})}}),n.extend({queue:function(a,b,c){var d;return a?(b=(b||"fx")+"queue",d=L.get(a,b),c&&(!d||n.isArray(c)?d=L.access(a,b,n.makeArray(c)):d.push(c)),d||[]):void 0},dequeue:function(a,b){b=b||"fx";var c=n.queue(a,b),d=c.length,e=c.shift(),f=n._queueHooks(a,b),g=function(){n.dequeue(a,b)};"inprogress"===e&&(e=c.shift(),d--),e&&("fx"===b&&c.unshift("inprogress"),delete f.stop,e.call(a,g,f)),!d&&f&&f.empty.fire()},_queueHooks:function(a,b){var c=b+"queueHooks";return L.get(a,c)||L.access(a,c,{empty:n.Callbacks("once memory").add(function(){L.remove(a,[b+"queue",c])})})}}),n.fn.extend({queue:function(a,b){var c=2;return"string"!=typeof a&&(b=a,a="fx",c--),arguments.length<c?n.queue(this[0],a):void 0===b?this:this.each(function(){var c=n.queue(this,a,b);n._queueHooks(this,a),"fx"===a&&"inprogress"!==c[0]&&n.dequeue(this,a)})},dequeue:function(a){return this.each(function(){n.dequeue(this,a)})},clearQueue:function(a){return this.queue(a||"fx",[])},promise:function(a,b){var c,d=1,e=n.Deferred(),f=this,g=this.length,h=function(){--d||e.resolveWith(f,[f])};"string"!=typeof a&&(b=a,a=void 0),a=a||"fx";while(g--)c=L.get(f[g],a+"queueHooks"),c&&c.empty&&(d++,c.empty.add(h));return h(),e.promise(b)}});var Q=/[+-]?(?:\d*\.|)\d+(?:[eE][+-]?\d+|)/.source,R=["Top","Right","Bottom","Left"],S=function(a,b){return a=b||a,"none"===n.css(a,"display")||!n.contains(a.ownerDocument,a)},T=/^(?:checkbox|radio)$/i;!function(){var a=l.createDocumentFragment(),b=a.appendChild(l.createElement("div")),c=l.createElement("input");c.setAttribute("type","radio"),c.setAttribute("checked","checked"),c.setAttribute("name","t"),b.appendChild(c),k.checkClone=b.cloneNode(!0).cloneNode(!0).lastChild.checked,b.innerHTML="<textarea>x</textarea>",k.noCloneChecked=!!b.cloneNode(!0).lastChild.defaultValue}();var U="undefined";k.focusinBubbles="onfocusin"in a;var V=/^key/,W=/^(?:mouse|pointer|contextmenu)|click/,X=/^(?:focusinfocus|focusoutblur)$/,Y=/^([^.]*)(?:\.(.+)|)$/;function Z(){return!0}function $(){return!1}function _(){try{return l.activeElement}catch(a){}}n.event={global:{},add:function(a,b,c,d,e){var f,g,h,i,j,k,l,m,o,p,q,r=L.get(a);if(r){c.handler&&(f=c,c=f.handler,e=f.selector),c.guid||(c.guid=n.guid++),(i=r.events)||(i=r.events={}),(g=r.handle)||(g=r.handle=function(b){return typeof n!==U&&n.event.triggered!==b.type?n.event.dispatch.apply(a,arguments):void 0}),b=(b||"").match(E)||[""],j=b.length;while(j--)h=Y.exec(b[j])||[],o=q=h[1],p=(h[2]||"").split(".").sort(),o&&(l=n.event.special[o]||{},o=(e?l.delegateType:l.bindType)||o,l=n.event.special[o]||{},k=n.extend({type:o,origType:q,data:d,handler:c,guid:c.guid,selector:e,needsContext:e&&n.expr.match.needsContext.test(e),namespace:p.join(".")},f),(m=i[o])||(m=i[o]=[],m.delegateCount=0,l.setup&&l.setup.call(a,d,p,g)!==!1||a.addEventListener&&a.addEventListener(o,g,!1)),l.add&&(l.add.call(a,k),k.handler.guid||(k.handler.guid=c.guid)),e?m.splice(m.delegateCount++,0,k):m.push(k),n.event.global[o]=!0)}},remove:function(a,b,c,d,e){var f,g,h,i,j,k,l,m,o,p,q,r=L.hasData(a)&&L.get(a);if(r&&(i=r.events)){b=(b||"").match(E)||[""],j=b.length;while(j--)if(h=Y.exec(b[j])||[],o=q=h[1],p=(h[2]||"").split(".").sort(),o){l=n.event.special[o]||{},o=(d?l.delegateType:l.bindType)||o,m=i[o]||[],h=h[2]&&new RegExp("(^|\\.)"+p.join("\\.(?:.*\\.|)")+"(\\.|$)"),g=f=m.length;while(f--)k=m[f],!e&&q!==k.origType||c&&c.guid!==k.guid||h&&!h.test(k.namespace)||d&&d!==k.selector&&("**"!==d||!k.selector)||(m.splice(f,1),k.selector&&m.delegateCount--,l.remove&&l.remove.call(a,k));g&&!m.length&&(l.teardown&&l.teardown.call(a,p,r.handle)!==!1||n.removeEvent(a,o,r.handle),delete i[o])}else for(o in i)n.event.remove(a,o+b[j],c,d,!0);n.isEmptyObject(i)&&(delete r.handle,L.remove(a,"events"))}},trigger:function(b,c,d,e){var f,g,h,i,k,m,o,p=[d||l],q=j.call(b,"type")?b.type:b,r=j.call(b,"namespace")?b.namespace.split("."):[];if(g=h=d=d||l,3!==d.nodeType&&8!==d.nodeType&&!X.test(q+n.event.triggered)&&(q.indexOf(".")>=0&&(r=q.split("."),q=r.shift(),r.sort()),k=q.indexOf(":")<0&&"on"+q,b=b[n.expando]?b:new n.Event(q,"object"==typeof b&&b),b.isTrigger=e?2:3,b.namespace=r.join("."),b.namespace_re=b.namespace?new RegExp("(^|\\.)"+r.join("\\.(?:.*\\.|)")+"(\\.|$)"):null,b.result=void 0,b.target||(b.target=d),c=null==c?[b]:n.makeArray(c,[b]),o=n.event.special[q]||{},e||!o.trigger||o.trigger.apply(d,c)!==!1)){if(!e&&!o.noBubble&&!n.isWindow(d)){for(i=o.delegateType||q,X.test(i+q)||(g=g.parentNode);g;g=g.parentNode)p.push(g),h=g;h===(d.ownerDocument||l)&&p.push(h.defaultView||h.parentWindow||a)}f=0;while((g=p[f++])&&!b.isPropagationStopped())b.type=f>1?i:o.bindType||q,m=(L.get(g,"events")||{})[b.type]&&L.get(g,"handle"),m&&m.apply(g,c),m=k&&g[k],m&&m.apply&&n.acceptData(g)&&(b.result=m.apply(g,c),b.result===!1&&b.preventDefault());return b.type=q,e||b.isDefaultPrevented()||o._default&&o._default.apply(p.pop(),c)!==!1||!n.acceptData(d)||k&&n.isFunction(d[q])&&!n.isWindow(d)&&(h=d[k],h&&(d[k]=null),n.event.triggered=q,d[q](),n.event.triggered=void 0,h&&(d[k]=h)),b.result}},dispatch:function(a){a=n.event.fix(a);var b,c,e,f,g,h=[],i=d.call(arguments),j=(L.get(this,"events")||{})[a.type]||[],k=n.event.special[a.type]||{};if(i[0]=a,a.delegateTarget=this,!k.preDispatch||k.preDispatch.call(this,a)!==!1){h=n.event.handlers.call(this,a,j),b=0;while((f=h[b++])&&!a.isPropagationStopped()){a.currentTarget=f.elem,c=0;while((g=f.handlers[c++])&&!a.isImmediatePropagationStopped())(!a.namespace_re||a.namespace_re.test(g.namespace))&&(a.handleObj=g,a.data=g.data,e=((n.event.special[g.origType]||{}).handle||g.handler).apply(f.elem,i),void 0!==e&&(a.result=e)===!1&&(a.preventDefault(),a.stopPropagation()))}return k.postDispatch&&k.postDispatch.call(this,a),a.result}},handlers:function(a,b){var c,d,e,f,g=[],h=b.delegateCount,i=a.target;if(h&&i.nodeType&&(!a.button||"click"!==a.type))for(;i!==this;i=i.parentNode||this)if(i.disabled!==!0||"click"!==a.type){for(d=[],c=0;h>c;c++)f=b[c],e=f.selector+" ",void 0===d[e]&&(d[e]=f.needsContext?n(e,this).index(i)>=0:n.find(e,this,null,[i]).length),d[e]&&d.push(f);d.length&&g.push({elem:i,handlers:d})}return h<b.length&&g.push({elem:this,handlers:b.slice(h)}),g},props:"altKey bubbles cancelable ctrlKey currentTarget eventPhase metaKey relatedTarget shiftKey target timeStamp view which".split(" "),fixHooks:{},keyHooks:{props:"char charCode key keyCode".split(" "),filter:function(a,b){return null==a.which&&(a.which=null!=b.charCode?b.charCode:b.keyCode),a}},mouseHooks:{props:"button buttons clientX clientY offsetX offsetY pageX pageY screenX screenY toElement".split(" "),filter:function(a,b){var c,d,e,f=b.button;return null==a.pageX&&null!=b.clientX&&(c=a.target.ownerDocument||l,d=c.documentElement,e=c.body,a.pageX=b.clientX+(d&&d.scrollLeft||e&&e.scrollLeft||0)-(d&&d.clientLeft||e&&e.clientLeft||0),a.pageY=b.clientY+(d&&d.scrollTop||e&&e.scrollTop||0)-(d&&d.clientTop||e&&e.clientTop||0)),a.which||void 0===f||(a.which=1&f?1:2&f?3:4&f?2:0),a}},fix:function(a){if(a[n.expando])return a;var b,c,d,e=a.type,f=a,g=this.fixHooks[e];g||(this.fixHooks[e]=g=W.test(e)?this.mouseHooks:V.test(e)?this.keyHooks:{}),d=g.props?this.props.concat(g.props):this.props,a=new n.Event(f),b=d.length;while(b--)c=d[b],a[c]=f[c];return a.target||(a.target=l),3===a.target.nodeType&&(a.target=a.target.parentNode),g.filter?g.filter(a,f):a},special:{load:{noBubble:!0},focus:{trigger:function(){return this!==_()&&this.focus?(this.focus(),!1):void 0},delegateType:"focusin"},blur:{trigger:function(){return this===_()&&this.blur?(this.blur(),!1):void 0},delegateType:"focusout"},click:{trigger:function(){return"checkbox"===this.type&&this.click&&n.nodeName(this,"input")?(this.click(),!1):void 0},_default:function(a){return n.nodeName(a.target,"a")}},beforeunload:{postDispatch:function(a){void 0!==a.result&&a.originalEvent&&(a.originalEvent.returnValue=a.result)}}},simulate:function(a,b,c,d){var e=n.extend(new n.Event,c,{type:a,isSimulated:!0,originalEvent:{}});d?n.event.trigger(e,null,b):n.event.dispatch.call(b,e),e.isDefaultPrevented()&&c.preventDefault()}},n.removeEvent=function(a,b,c){a.removeEventListener&&a.removeEventListener(b,c,!1)},n.Event=function(a,b){return this instanceof n.Event?(a&&a.type?(this.originalEvent=a,this.type=a.type,this.isDefaultPrevented=a.defaultPrevented||void 0===a.defaultPrevented&&a.returnValue===!1?Z:$):this.type=a,b&&n.extend(this,b),this.timeStamp=a&&a.timeStamp||n.now(),void(this[n.expando]=!0)):new n.Event(a,b)},n.Event.prototype={isDefaultPrevented:$,isPropagationStopped:$,isImmediatePropagationStopped:$,preventDefault:function(){var a=this.originalEvent;this.isDefaultPrevented=Z,a&&a.preventDefault&&a.preventDefault()},stopPropagation:function(){var a=this.originalEvent;this.isPropagationStopped=Z,a&&a.stopPropagation&&a.stopPropagation()},stopImmediatePropagation:function(){var a=this.originalEvent;this.isImmediatePropagationStopped=Z,a&&a.stopImmediatePropagation&&a.stopImmediatePropagation(),this.stopPropagation()}},n.each({mouseenter:"mouseover",mouseleave:"mouseout",pointerenter:"pointerover",pointerleave:"pointerout"},function(a,b){n.event.special[a]={delegateType:b,bindType:b,handle:function(a){var c,d=this,e=a.relatedTarget,f=a.handleObj;return(!e||e!==d&&!n.contains(d,e))&&(a.type=f.origType,c=f.handler.apply(this,arguments),a.type=b),c}}}),k.focusinBubbles||n.each({focus:"focusin",blur:"focusout"},function(a,b){var c=function(a){n.event.simulate(b,a.target,n.event.fix(a),!0)};n.event.special[b]={setup:function(){var d=this.ownerDocument||this,e=L.access(d,b);e||d.addEventListener(a,c,!0),L.access(d,b,(e||0)+1)},teardown:function(){var d=this.ownerDocument||this,e=L.access(d,b)-1;e?L.access(d,b,e):(d.removeEventListener(a,c,!0),L.remove(d,b))}}}),n.fn.extend({on:function(a,b,c,d,e){var f,g;if("object"==typeof a){"string"!=typeof b&&(c=c||b,b=void 0);for(g in a)this.on(g,b,c,a[g],e);return this}if(null==c&&null==d?(d=b,c=b=void 0):null==d&&("string"==typeof b?(d=c,c=void 0):(d=c,c=b,b=void 0)),d===!1)d=$;else if(!d)return this;return 1===e&&(f=d,d=function(a){return n().off(a),f.apply(this,arguments)},d.guid=f.guid||(f.guid=n.guid++)),this.each(function(){n.event.add(this,a,d,c,b)})},one:function(a,b,c,d){return this.on(a,b,c,d,1)},off:function(a,b,c){var d,e;if(a&&a.preventDefault&&a.handleObj)return d=a.handleObj,n(a.delegateTarget).off(d.namespace?d.origType+"."+d.namespace:d.origType,d.selector,d.handler),this;if("object"==typeof a){for(e in a)this.off(e,b,a[e]);return this}return(b===!1||"function"==typeof b)&&(c=b,b=void 0),c===!1&&(c=$),this.each(function(){n.event.remove(this,a,c,b)})},trigger:function(a,b){return this.each(function(){n.event.trigger(a,b,this)})},triggerHandler:function(a,b){var c=this[0];return c?n.event.trigger(a,b,c,!0):void 0}});var ab=/<(?!area|br|col|embed|hr|img|input|link|meta|param)(([\w:]+)[^>]*)\/>/gi,bb=/<([\w:]+)/,cb=/<|&#?\w+;/,db=/<(?:script|style|link)/i,eb=/checked\s*(?:[^=]|=\s*.checked.)/i,fb=/^$|\/(?:java|ecma)script/i,gb=/^true\/(.*)/,hb=/^\s*<!(?:\[CDATA\[|--)|(?:\]\]|--)>\s*$/g,ib={option:[1,"<select multiple='multiple'>","</select>"],thead:[1,"<table>","</table>"],col:[2,"<table><colgroup>","</colgroup></table>"],tr:[2,"<table><tbody>","</tbody></table>"],td:[3,"<table><tbody><tr>","</tr></tbody></table>"],_default:[0,"",""]};ib.optgroup=ib.option,ib.tbody=ib.tfoot=ib.colgroup=ib.caption=ib.thead,ib.th=ib.td;function jb(a,b){return n.nodeName(a,"table")&&n.nodeName(11!==b.nodeType?b:b.firstChild,"tr")?a.getElementsByTagName("tbody")[0]||a.appendChild(a.ownerDocument.createElement("tbody")):a}function kb(a){return a.type=(null!==a.getAttribute("type"))+"/"+a.type,a}function lb(a){var b=gb.exec(a.type);return b?a.type=b[1]:a.removeAttribute("type"),a}function mb(a,b){for(var c=0,d=a.length;d>c;c++)L.set(a[c],"globalEval",!b||L.get(b[c],"globalEval"))}function nb(a,b){var c,d,e,f,g,h,i,j;if(1===b.nodeType){if(L.hasData(a)&&(f=L.access(a),g=L.set(b,f),j=f.events)){delete g.handle,g.events={};for(e in j)for(c=0,d=j[e].length;d>c;c++)n.event.add(b,e,j[e][c])}M.hasData(a)&&(h=M.access(a),i=n.extend({},h),M.set(b,i))}}function ob(a,b){var c=a.getElementsByTagName?a.getElementsByTagName(b||"*"):a.querySelectorAll?a.querySelectorAll(b||"*"):[];return void 0===b||b&&n.nodeName(a,b)?n.merge([a],c):c}function pb(a,b){var c=b.nodeName.toLowerCase();"input"===c&&T.test(a.type)?b.checked=a.checked:("input"===c||"textarea"===c)&&(b.defaultValue=a.defaultValue)}n.extend({clone:function(a,b,c){var d,e,f,g,h=a.cloneNode(!0),i=n.contains(a.ownerDocument,a);if(!(k.noCloneChecked||1!==a.nodeType&&11!==a.nodeType||n.isXMLDoc(a)))for(g=ob(h),f=ob(a),d=0,e=f.length;e>d;d++)pb(f[d],g[d]);if(b)if(c)for(f=f||ob(a),g=g||ob(h),d=0,e=f.length;e>d;d++)nb(f[d],g[d]);else nb(a,h);return g=ob(h,"script"),g.length>0&&mb(g,!i&&ob(a,"script")),h},buildFragment:function(a,b,c,d){for(var e,f,g,h,i,j,k=b.createDocumentFragment(),l=[],m=0,o=a.length;o>m;m++)if(e=a[m],e||0===e)if("object"===n.type(e))n.merge(l,e.nodeType?[e]:e);else if(cb.test(e)){f=f||k.appendChild(b.createElement("div")),g=(bb.exec(e)||["",""])[1].toLowerCase(),h=ib[g]||ib._default,f.innerHTML=h[1]+e.replace(ab,"<$1></$2>")+h[2],j=h[0];while(j--)f=f.lastChild;n.merge(l,f.childNodes),f=k.firstChild,f.textContent=""}else l.push(b.createTextNode(e));k.textContent="",m=0;while(e=l[m++])if((!d||-1===n.inArray(e,d))&&(i=n.contains(e.ownerDocument,e),f=ob(k.appendChild(e),"script"),i&&mb(f),c)){j=0;while(e=f[j++])fb.test(e.type||"")&&c.push(e)}return k},cleanData:function(a){for(var b,c,d,e,f=n.event.special,g=0;void 0!==(c=a[g]);g++){if(n.acceptData(c)&&(e=c[L.expando],e&&(b=L.cache[e]))){if(b.events)for(d in b.events)f[d]?n.event.remove(c,d):n.removeEvent(c,d,b.handle);L.cache[e]&&delete L.cache[e]}delete M.cache[c[M.expando]]}}}),n.fn.extend({text:function(a){return J(this,function(a){return void 0===a?n.text(this):this.empty().each(function(){(1===this.nodeType||11===this.nodeType||9===this.nodeType)&&(this.textContent=a)})},null,a,arguments.length)},append:function(){return this.domManip(arguments,function(a){if(1===this.nodeType||11===this.nodeType||9===this.nodeType){var b=jb(this,a);b.appendChild(a)}})},prepend:function(){return this.domManip(arguments,function(a){if(1===this.nodeType||11===this.nodeType||9===this.nodeType){var b=jb(this,a);b.insertBefore(a,b.firstChild)}})},before:function(){return this.domManip(arguments,function(a){this.parentNode&&this.parentNode.insertBefore(a,this)})},after:function(){return this.domManip(arguments,function(a){this.parentNode&&this.parentNode.insertBefore(a,this.nextSibling)})},remove:function(a,b){for(var c,d=a?n.filter(a,this):this,e=0;null!=(c=d[e]);e++)b||1!==c.nodeType||n.cleanData(ob(c)),c.parentNode&&(b&&n.contains(c.ownerDocument,c)&&mb(ob(c,"script")),c.parentNode.removeChild(c));return this},empty:function(){for(var a,b=0;null!=(a=this[b]);b++)1===a.nodeType&&(n.cleanData(ob(a,!1)),a.textContent="");return this},clone:function(a,b){return a=null==a?!1:a,b=null==b?a:b,this.map(function(){return n.clone(this,a,b)})},html:function(a){return J(this,function(a){var b=this[0]||{},c=0,d=this.length;if(void 0===a&&1===b.nodeType)return b.innerHTML;if("string"==typeof a&&!db.test(a)&&!ib[(bb.exec(a)||["",""])[1].toLowerCase()]){a=a.replace(ab,"<$1></$2>");try{for(;d>c;c++)b=this[c]||{},1===b.nodeType&&(n.cleanData(ob(b,!1)),b.innerHTML=a);b=0}catch(e){}}b&&this.empty().append(a)},null,a,arguments.length)},replaceWith:function(){var a=arguments[0];return this.domManip(arguments,function(b){a=this.parentNode,n.cleanData(ob(this)),a&&a.replaceChild(b,this)}),a&&(a.length||a.nodeType)?this:this.remove()},detach:function(a){return this.remove(a,!0)},domManip:function(a,b){a=e.apply([],a);var c,d,f,g,h,i,j=0,l=this.length,m=this,o=l-1,p=a[0],q=n.isFunction(p);if(q||l>1&&"string"==typeof p&&!k.checkClone&&eb.test(p))return this.each(function(c){var d=m.eq(c);q&&(a[0]=p.call(this,c,d.html())),d.domManip(a,b)});if(l&&(c=n.buildFragment(a,this[0].ownerDocument,!1,this),d=c.firstChild,1===c.childNodes.length&&(c=d),d)){for(f=n.map(ob(c,"script"),kb),g=f.length;l>j;j++)h=c,j!==o&&(h=n.clone(h,!0,!0),g&&n.merge(f,ob(h,"script"))),b.call(this[j],h,j);if(g)for(i=f[f.length-1].ownerDocument,n.map(f,lb),j=0;g>j;j++)h=f[j],fb.test(h.type||"")&&!L.access(h,"globalEval")&&n.contains(i,h)&&(h.src?n._evalUrl&&n._evalUrl(h.src):n.globalEval(h.textContent.replace(hb,"")))}return this}}),n.each({appendTo:"append",prependTo:"prepend",insertBefore:"before",insertAfter:"after",replaceAll:"replaceWith"},function(a,b){n.fn[a]=function(a){for(var c,d=[],e=n(a),g=e.length-1,h=0;g>=h;h++)c=h===g?this:this.clone(!0),n(e[h])[b](c),f.apply(d,c.get());return this.pushStack(d)}});var qb,rb={};function sb(b,c){var d,e=n(c.createElement(b)).appendTo(c.body),f=a.getDefaultComputedStyle&&(d=a.getDefaultComputedStyle(e[0]))?d.display:n.css(e[0],"display");return e.detach(),f}function tb(a){var b=l,c=rb[a];return c||(c=sb(a,b),"none"!==c&&c||(qb=(qb||n("<iframe frameborder='0' width='0' height='0'/>")).appendTo(b.documentElement),b=qb[0].contentDocument,b.write(),b.close(),c=sb(a,b),qb.detach()),rb[a]=c),c}var ub=/^margin/,vb=new RegExp("^("+Q+")(?!px)[a-z%]+$","i"),wb=function(a){return a.ownerDocument.defaultView.getComputedStyle(a,null)};function xb(a,b,c){var d,e,f,g,h=a.style;return c=c||wb(a),c&&(g=c.getPropertyValue(b)||c[b]),c&&(""!==g||n.contains(a.ownerDocument,a)||(g=n.style(a,b)),vb.test(g)&&ub.test(b)&&(d=h.width,e=h.minWidth,f=h.maxWidth,h.minWidth=h.maxWidth=h.width=g,g=c.width,h.width=d,h.minWidth=e,h.maxWidth=f)),void 0!==g?g+"":g}function yb(a,b){return{get:function(){return a()?void delete this.get:(this.get=b).apply(this,arguments)}}}!function(){var b,c,d=l.documentElement,e=l.createElement("div"),f=l.createElement("div");if(f.style){f.style.backgroundClip="content-box",f.cloneNode(!0).style.backgroundClip="",k.clearCloneStyle="content-box"===f.style.backgroundClip,e.style.cssText="border:0;width:0;height:0;top:0;left:-9999px;margin-top:1px;position:absolute",e.appendChild(f);function g(){f.style.cssText="-webkit-box-sizing:border-box;-moz-box-sizing:border-box;box-sizing:border-box;display:block;margin-top:1%;top:1%;border:1px;padding:1px;width:4px;position:absolute",f.innerHTML="",d.appendChild(e);var g=a.getComputedStyle(f,null);b="1%"!==g.top,c="4px"===g.width,d.removeChild(e)}a.getComputedStyle&&n.extend(k,{pixelPosition:function(){return g(),b},boxSizingReliable:function(){return null==c&&g(),c},reliableMarginRight:function(){var b,c=f.appendChild(l.createElement("div"));return c.style.cssText=f.style.cssText="-webkit-box-sizing:content-box;-moz-box-sizing:content-box;box-sizing:content-box;display:block;margin:0;border:0;padding:0",c.style.marginRight=c.style.width="0",f.style.width="1px",d.appendChild(e),b=!parseFloat(a.getComputedStyle(c,null).marginRight),d.removeChild(e),b}})}}(),n.swap=function(a,b,c,d){var e,f,g={};for(f in b)g[f]=a.style[f],a.style[f]=b[f];e=c.apply(a,d||[]);for(f in b)a.style[f]=g[f];return e};var zb=/^(none|table(?!-c[ea]).+)/,Ab=new RegExp("^("+Q+")(.*)$","i"),Bb=new RegExp("^([+-])=("+Q+")","i"),Cb={position:"absolute",visibility:"hidden",display:"block"},Db={letterSpacing:"0",fontWeight:"400"},Eb=["Webkit","O","Moz","ms"];function Fb(a,b){if(b in a)return b;var c=b[0].toUpperCase()+b.slice(1),d=b,e=Eb.length;while(e--)if(b=Eb[e]+c,b in a)return b;return d}function Gb(a,b,c){var d=Ab.exec(b);return d?Math.max(0,d[1]-(c||0))+(d[2]||"px"):b}function Hb(a,b,c,d,e){for(var f=c===(d?"border":"content")?4:"width"===b?1:0,g=0;4>f;f+=2)"margin"===c&&(g+=n.css(a,c+R[f],!0,e)),d?("content"===c&&(g-=n.css(a,"padding"+R[f],!0,e)),"margin"!==c&&(g-=n.css(a,"border"+R[f]+"Width",!0,e))):(g+=n.css(a,"padding"+R[f],!0,e),"padding"!==c&&(g+=n.css(a,"border"+R[f]+"Width",!0,e)));return g}function Ib(a,b,c){var d=!0,e="width"===b?a.offsetWidth:a.offsetHeight,f=wb(a),g="border-box"===n.css(a,"boxSizing",!1,f);if(0>=e||null==e){if(e=xb(a,b,f),(0>e||null==e)&&(e=a.style[b]),vb.test(e))return e;d=g&&(k.boxSizingReliable()||e===a.style[b]),e=parseFloat(e)||0}return e+Hb(a,b,c||(g?"border":"content"),d,f)+"px"}function Jb(a,b){for(var c,d,e,f=[],g=0,h=a.length;h>g;g++)d=a[g],d.style&&(f[g]=L.get(d,"olddisplay"),c=d.style.display,b?(f[g]||"none"!==c||(d.style.display=""),""===d.style.display&&S(d)&&(f[g]=L.access(d,"olddisplay",tb(d.nodeName)))):(e=S(d),"none"===c&&e||L.set(d,"olddisplay",e?c:n.css(d,"display"))));for(g=0;h>g;g++)d=a[g],d.style&&(b&&"none"!==d.style.display&&""!==d.style.display||(d.style.display=b?f[g]||"":"none"));return a}n.extend({cssHooks:{opacity:{get:function(a,b){if(b){var c=xb(a,"opacity");return""===c?"1":c}}}},cssNumber:{columnCount:!0,fillOpacity:!0,flexGrow:!0,flexShrink:!0,fontWeight:!0,lineHeight:!0,opacity:!0,order:!0,orphans:!0,widows:!0,zIndex:!0,zoom:!0},cssProps:{"float":"cssFloat"},style:function(a,b,c,d){if(a&&3!==a.nodeType&&8!==a.nodeType&&a.style){var e,f,g,h=n.camelCase(b),i=a.style;return b=n.cssProps[h]||(n.cssProps[h]=Fb(i,h)),g=n.cssHooks[b]||n.cssHooks[h],void 0===c?g&&"get"in g&&void 0!==(e=g.get(a,!1,d))?e:i[b]:(f=typeof c,"string"===f&&(e=Bb.exec(c))&&(c=(e[1]+1)*e[2]+parseFloat(n.css(a,b)),f="number"),null!=c&&c===c&&("number"!==f||n.cssNumber[h]||(c+="px"),k.clearCloneStyle||""!==c||0!==b.indexOf("background")||(i[b]="inherit"),g&&"set"in g&&void 0===(c=g.set(a,c,d))||(i[b]=c)),void 0)}},css:function(a,b,c,d){var e,f,g,h=n.camelCase(b);return b=n.cssProps[h]||(n.cssProps[h]=Fb(a.style,h)),g=n.cssHooks[b]||n.cssHooks[h],g&&"get"in g&&(e=g.get(a,!0,c)),void 0===e&&(e=xb(a,b,d)),"normal"===e&&b in Db&&(e=Db[b]),""===c||c?(f=parseFloat(e),c===!0||n.isNumeric(f)?f||0:e):e}}),n.each(["height","width"],function(a,b){n.cssHooks[b]={get:function(a,c,d){return c?zb.test(n.css(a,"display"))&&0===a.offsetWidth?n.swap(a,Cb,function(){return Ib(a,b,d)}):Ib(a,b,d):void 0},set:function(a,c,d){var e=d&&wb(a);return Gb(a,c,d?Hb(a,b,d,"border-box"===n.css(a,"boxSizing",!1,e),e):0)}}}),n.cssHooks.marginRight=yb(k.reliableMarginRight,function(a,b){return b?n.swap(a,{display:"inline-block"},xb,[a,"marginRight"]):void 0}),n.each({margin:"",padding:"",border:"Width"},function(a,b){n.cssHooks[a+b]={expand:function(c){for(var d=0,e={},f="string"==typeof c?c.split(" "):[c];4>d;d++)e[a+R[d]+b]=f[d]||f[d-2]||f[0];return e}},ub.test(a)||(n.cssHooks[a+b].set=Gb)}),n.fn.extend({css:function(a,b){return J(this,function(a,b,c){var d,e,f={},g=0;if(n.isArray(b)){for(d=wb(a),e=b.length;e>g;g++)f[b[g]]=n.css(a,b[g],!1,d);return f}return void 0!==c?n.style(a,b,c):n.css(a,b)},a,b,arguments.length>1)},show:function(){return Jb(this,!0)},hide:function(){return Jb(this)},toggle:function(a){return"boolean"==typeof a?a?this.show():this.hide():this.each(function(){S(this)?n(this).show():n(this).hide()})}});function Kb(a,b,c,d,e){return new Kb.prototype.init(a,b,c,d,e)}n.Tween=Kb,Kb.prototype={constructor:Kb,init:function(a,b,c,d,e,f){this.elem=a,this.prop=c,this.easing=e||"swing",this.options=b,this.start=this.now=this.cur(),this.end=d,this.unit=f||(n.cssNumber[c]?"":"px")},cur:function(){var a=Kb.propHooks[this.prop];return a&&a.get?a.get(this):Kb.propHooks._default.get(this)},run:function(a){var b,c=Kb.propHooks[this.prop];return this.pos=b=this.options.duration?n.easing[this.easing](a,this.options.duration*a,0,1,this.options.duration):a,this.now=(this.end-this.start)*b+this.start,this.options.step&&this.options.step.call(this.elem,this.now,this),c&&c.set?c.set(this):Kb.propHooks._default.set(this),this}},Kb.prototype.init.prototype=Kb.prototype,Kb.propHooks={_default:{get:function(a){var b;return null==a.elem[a.prop]||a.elem.style&&null!=a.elem.style[a.prop]?(b=n.css(a.elem,a.prop,""),b&&"auto"!==b?b:0):a.elem[a.prop]},set:function(a){n.fx.step[a.prop]?n.fx.step[a.prop](a):a.elem.style&&(null!=a.elem.style[n.cssProps[a.prop]]||n.cssHooks[a.prop])?n.style(a.elem,a.prop,a.now+a.unit):a.elem[a.prop]=a.now}}},Kb.propHooks.scrollTop=Kb.propHooks.scrollLeft={set:function(a){a.elem.nodeType&&a.elem.parentNode&&(a.elem[a.prop]=a.now)}},n.easing={linear:function(a){return a},swing:function(a){return.5-Math.cos(a*Math.PI)/2}},n.fx=Kb.prototype.init,n.fx.step={};var Lb,Mb,Nb=/^(?:toggle|show|hide)$/,Ob=new RegExp("^(?:([+-])=|)("+Q+")([a-z%]*)$","i"),Pb=/queueHooks$/,Qb=[Vb],Rb={"*":[function(a,b){var c=this.createTween(a,b),d=c.cur(),e=Ob.exec(b),f=e&&e[3]||(n.cssNumber[a]?"":"px"),g=(n.cssNumber[a]||"px"!==f&&+d)&&Ob.exec(n.css(c.elem,a)),h=1,i=20;if(g&&g[3]!==f){f=f||g[3],e=e||[],g=+d||1;do h=h||".5",g/=h,n.style(c.elem,a,g+f);while(h!==(h=c.cur()/d)&&1!==h&&--i)}return e&&(g=c.start=+g||+d||0,c.unit=f,c.end=e[1]?g+(e[1]+1)*e[2]:+e[2]),c}]};function Sb(){return setTimeout(function(){Lb=void 0}),Lb=n.now()}function Tb(a,b){var c,d=0,e={height:a};for(b=b?1:0;4>d;d+=2-b)c=R[d],e["margin"+c]=e["padding"+c]=a;return b&&(e.opacity=e.width=a),e}function Ub(a,b,c){for(var d,e=(Rb[b]||[]).concat(Rb["*"]),f=0,g=e.length;g>f;f++)if(d=e[f].call(c,b,a))return d}function Vb(a,b,c){var d,e,f,g,h,i,j,k,l=this,m={},o=a.style,p=a.nodeType&&S(a),q=L.get(a,"fxshow");c.queue||(h=n._queueHooks(a,"fx"),null==h.unqueued&&(h.unqueued=0,i=h.empty.fire,h.empty.fire=function(){h.unqueued||i()}),h.unqueued++,l.always(function(){l.always(function(){h.unqueued--,n.queue(a,"fx").length||h.empty.fire()})})),1===a.nodeType&&("height"in b||"width"in b)&&(c.overflow=[o.overflow,o.overflowX,o.overflowY],j=n.css(a,"display"),k="none"===j?L.get(a,"olddisplay")||tb(a.nodeName):j,"inline"===k&&"none"===n.css(a,"float")&&(o.display="inline-block")),c.overflow&&(o.overflow="hidden",l.always(function(){o.overflow=c.overflow[0],o.overflowX=c.overflow[1],o.overflowY=c.overflow[2]}));for(d in b)if(e=b[d],Nb.exec(e)){if(delete b[d],f=f||"toggle"===e,e===(p?"hide":"show")){if("show"!==e||!q||void 0===q[d])continue;p=!0}m[d]=q&&q[d]||n.style(a,d)}else j=void 0;if(n.isEmptyObject(m))"inline"===("none"===j?tb(a.nodeName):j)&&(o.display=j);else{q?"hidden"in q&&(p=q.hidden):q=L.access(a,"fxshow",{}),f&&(q.hidden=!p),p?n(a).show():l.done(function(){n(a).hide()}),l.done(function(){var b;L.remove(a,"fxshow");for(b in m)n.style(a,b,m[b])});for(d in m)g=Ub(p?q[d]:0,d,l),d in q||(q[d]=g.start,p&&(g.end=g.start,g.start="width"===d||"height"===d?1:0))}}function Wb(a,b){var c,d,e,f,g;for(c in a)if(d=n.camelCase(c),e=b[d],f=a[c],n.isArray(f)&&(e=f[1],f=a[c]=f[0]),c!==d&&(a[d]=f,delete a[c]),g=n.cssHooks[d],g&&"expand"in g){f=g.expand(f),delete a[d];for(c in f)c in a||(a[c]=f[c],b[c]=e)}else b[d]=e}function Xb(a,b,c){var d,e,f=0,g=Qb.length,h=n.Deferred().always(function(){delete i.elem}),i=function(){if(e)return!1;for(var b=Lb||Sb(),c=Math.max(0,j.startTime+j.duration-b),d=c/j.duration||0,f=1-d,g=0,i=j.tweens.length;i>g;g++)j.tweens[g].run(f);return h.notifyWith(a,[j,f,c]),1>f&&i?c:(h.resolveWith(a,[j]),!1)},j=h.promise({elem:a,props:n.extend({},b),opts:n.extend(!0,{specialEasing:{}},c),originalProperties:b,originalOptions:c,startTime:Lb||Sb(),duration:c.duration,tweens:[],createTween:function(b,c){var d=n.Tween(a,j.opts,b,c,j.opts.specialEasing[b]||j.opts.easing);return j.tweens.push(d),d},stop:function(b){var c=0,d=b?j.tweens.length:0;if(e)return this;for(e=!0;d>c;c++)j.tweens[c].run(1);return b?h.resolveWith(a,[j,b]):h.rejectWith(a,[j,b]),this}}),k=j.props;for(Wb(k,j.opts.specialEasing);g>f;f++)if(d=Qb[f].call(j,a,k,j.opts))return d;return n.map(k,Ub,j),n.isFunction(j.opts.start)&&j.opts.start.call(a,j),n.fx.timer(n.extend(i,{elem:a,anim:j,queue:j.opts.queue})),j.progress(j.opts.progress).done(j.opts.done,j.opts.complete).fail(j.opts.fail).always(j.opts.always)}n.Animation=n.extend(Xb,{tweener:function(a,b){n.isFunction(a)?(b=a,a=["*"]):a=a.split(" ");for(var c,d=0,e=a.length;e>d;d++)c=a[d],Rb[c]=Rb[c]||[],Rb[c].unshift(b)},prefilter:function(a,b){b?Qb.unshift(a):Qb.push(a)}}),n.speed=function(a,b,c){var d=a&&"object"==typeof a?n.extend({},a):{complete:c||!c&&b||n.isFunction(a)&&a,duration:a,easing:c&&b||b&&!n.isFunction(b)&&b};return d.duration=n.fx.off?0:"number"==typeof d.duration?d.duration:d.duration in n.fx.speeds?n.fx.speeds[d.duration]:n.fx.speeds._default,(null==d.queue||d.queue===!0)&&(d.queue="fx"),d.old=d.complete,d.complete=function(){n.isFunction(d.old)&&d.old.call(this),d.queue&&n.dequeue(this,d.queue)},d},n.fn.extend({fadeTo:function(a,b,c,d){return this.filter(S).css("opacity",0).show().end().animate({opacity:b},a,c,d)},animate:function(a,b,c,d){var e=n.isEmptyObject(a),f=n.speed(b,c,d),g=function(){var b=Xb(this,n.extend({},a),f);(e||L.get(this,"finish"))&&b.stop(!0)};return g.finish=g,e||f.queue===!1?this.each(g):this.queue(f.queue,g)},stop:function(a,b,c){var d=function(a){var b=a.stop;delete a.stop,b(c)};return"string"!=typeof a&&(c=b,b=a,a=void 0),b&&a!==!1&&this.queue(a||"fx",[]),this.each(function(){var b=!0,e=null!=a&&a+"queueHooks",f=n.timers,g=L.get(this);if(e)g[e]&&g[e].stop&&d(g[e]);else for(e in g)g[e]&&g[e].stop&&Pb.test(e)&&d(g[e]);for(e=f.length;e--;)f[e].elem!==this||null!=a&&f[e].queue!==a||(f[e].anim.stop(c),b=!1,f.splice(e,1));(b||!c)&&n.dequeue(this,a)})},finish:function(a){return a!==!1&&(a=a||"fx"),this.each(function(){var b,c=L.get(this),d=c[a+"queue"],e=c[a+"queueHooks"],f=n.timers,g=d?d.length:0;for(c.finish=!0,n.queue(this,a,[]),e&&e.stop&&e.stop.call(this,!0),b=f.length;b--;)f[b].elem===this&&f[b].queue===a&&(f[b].anim.stop(!0),f.splice(b,1));for(b=0;g>b;b++)d[b]&&d[b].finish&&d[b].finish.call(this);delete c.finish})}}),n.each(["toggle","show","hide"],function(a,b){var c=n.fn[b];n.fn[b]=function(a,d,e){return null==a||"boolean"==typeof a?c.apply(this,arguments):this.animate(Tb(b,!0),a,d,e)}}),n.each({slideDown:Tb("show"),slideUp:Tb("hide"),slideToggle:Tb("toggle"),fadeIn:{opacity:"show"},fadeOut:{opacity:"hide"},fadeToggle:{opacity:"toggle"}},function(a,b){n.fn[a]=function(a,c,d){return this.animate(b,a,c,d)}}),n.timers=[],n.fx.tick=function(){var a,b=0,c=n.timers;for(Lb=n.now();b<c.length;b++)a=c[b],a()||c[b]!==a||c.splice(b--,1);c.length||n.fx.stop(),Lb=void 0},n.fx.timer=function(a){n.timers.push(a),a()?n.fx.start():n.timers.pop()},n.fx.interval=13,n.fx.start=function(){Mb||(Mb=setInterval(n.fx.tick,n.fx.interval))},n.fx.stop=function(){clearInterval(Mb),Mb=null},n.fx.speeds={slow:600,fast:200,_default:400},n.fn.delay=function(a,b){return a=n.fx?n.fx.speeds[a]||a:a,b=b||"fx",this.queue(b,function(b,c){var d=setTimeout(b,a);c.stop=function(){clearTimeout(d)}})},function(){var a=l.createElement("input"),b=l.createElement("select"),c=b.appendChild(l.createElement("option"));a.type="checkbox",k.checkOn=""!==a.value,k.optSelected=c.selected,b.disabled=!0,k.optDisabled=!c.disabled,a=l.createElement("input"),a.value="t",a.type="radio",k.radioValue="t"===a.value}();var Yb,Zb,$b=n.expr.attrHandle;n.fn.extend({attr:function(a,b){return J(this,n.attr,a,b,arguments.length>1)},removeAttr:function(a){return this.each(function(){n.removeAttr(this,a)})}}),n.extend({attr:function(a,b,c){var d,e,f=a.nodeType;if(a&&3!==f&&8!==f&&2!==f)return typeof a.getAttribute===U?n.prop(a,b,c):(1===f&&n.isXMLDoc(a)||(b=b.toLowerCase(),d=n.attrHooks[b]||(n.expr.match.bool.test(b)?Zb:Yb)),void 0===c?d&&"get"in d&&null!==(e=d.get(a,b))?e:(e=n.find.attr(a,b),null==e?void 0:e):null!==c?d&&"set"in d&&void 0!==(e=d.set(a,c,b))?e:(a.setAttribute(b,c+""),c):void n.removeAttr(a,b))
},removeAttr:function(a,b){var c,d,e=0,f=b&&b.match(E);if(f&&1===a.nodeType)while(c=f[e++])d=n.propFix[c]||c,n.expr.match.bool.test(c)&&(a[d]=!1),a.removeAttribute(c)},attrHooks:{type:{set:function(a,b){if(!k.radioValue&&"radio"===b&&n.nodeName(a,"input")){var c=a.value;return a.setAttribute("type",b),c&&(a.value=c),b}}}}}),Zb={set:function(a,b,c){return b===!1?n.removeAttr(a,c):a.setAttribute(c,c),c}},n.each(n.expr.match.bool.source.match(/\w+/g),function(a,b){var c=$b[b]||n.find.attr;$b[b]=function(a,b,d){var e,f;return d||(f=$b[b],$b[b]=e,e=null!=c(a,b,d)?b.toLowerCase():null,$b[b]=f),e}});var _b=/^(?:input|select|textarea|button)$/i;n.fn.extend({prop:function(a,b){return J(this,n.prop,a,b,arguments.length>1)},removeProp:function(a){return this.each(function(){delete this[n.propFix[a]||a]})}}),n.extend({propFix:{"for":"htmlFor","class":"className"},prop:function(a,b,c){var d,e,f,g=a.nodeType;if(a&&3!==g&&8!==g&&2!==g)return f=1!==g||!n.isXMLDoc(a),f&&(b=n.propFix[b]||b,e=n.propHooks[b]),void 0!==c?e&&"set"in e&&void 0!==(d=e.set(a,c,b))?d:a[b]=c:e&&"get"in e&&null!==(d=e.get(a,b))?d:a[b]},propHooks:{tabIndex:{get:function(a){return a.hasAttribute("tabindex")||_b.test(a.nodeName)||a.href?a.tabIndex:-1}}}}),k.optSelected||(n.propHooks.selected={get:function(a){var b=a.parentNode;return b&&b.parentNode&&b.parentNode.selectedIndex,null}}),n.each(["tabIndex","readOnly","maxLength","cellSpacing","cellPadding","rowSpan","colSpan","useMap","frameBorder","contentEditable"],function(){n.propFix[this.toLowerCase()]=this});var ac=/[\t\r\n\f]/g;n.fn.extend({addClass:function(a){var b,c,d,e,f,g,h="string"==typeof a&&a,i=0,j=this.length;if(n.isFunction(a))return this.each(function(b){n(this).addClass(a.call(this,b,this.className))});if(h)for(b=(a||"").match(E)||[];j>i;i++)if(c=this[i],d=1===c.nodeType&&(c.className?(" "+c.className+" ").replace(ac," "):" ")){f=0;while(e=b[f++])d.indexOf(" "+e+" ")<0&&(d+=e+" ");g=n.trim(d),c.className!==g&&(c.className=g)}return this},removeClass:function(a){var b,c,d,e,f,g,h=0===arguments.length||"string"==typeof a&&a,i=0,j=this.length;if(n.isFunction(a))return this.each(function(b){n(this).removeClass(a.call(this,b,this.className))});if(h)for(b=(a||"").match(E)||[];j>i;i++)if(c=this[i],d=1===c.nodeType&&(c.className?(" "+c.className+" ").replace(ac," "):"")){f=0;while(e=b[f++])while(d.indexOf(" "+e+" ")>=0)d=d.replace(" "+e+" "," ");g=a?n.trim(d):"",c.className!==g&&(c.className=g)}return this},toggleClass:function(a,b){var c=typeof a;return"boolean"==typeof b&&"string"===c?b?this.addClass(a):this.removeClass(a):this.each(n.isFunction(a)?function(c){n(this).toggleClass(a.call(this,c,this.className,b),b)}:function(){if("string"===c){var b,d=0,e=n(this),f=a.match(E)||[];while(b=f[d++])e.hasClass(b)?e.removeClass(b):e.addClass(b)}else(c===U||"boolean"===c)&&(this.className&&L.set(this,"__className__",this.className),this.className=this.className||a===!1?"":L.get(this,"__className__")||"")})},hasClass:function(a){for(var b=" "+a+" ",c=0,d=this.length;d>c;c++)if(1===this[c].nodeType&&(" "+this[c].className+" ").replace(ac," ").indexOf(b)>=0)return!0;return!1}});var bc=/\r/g;n.fn.extend({val:function(a){var b,c,d,e=this[0];{if(arguments.length)return d=n.isFunction(a),this.each(function(c){var e;1===this.nodeType&&(e=d?a.call(this,c,n(this).val()):a,null==e?e="":"number"==typeof e?e+="":n.isArray(e)&&(e=n.map(e,function(a){return null==a?"":a+""})),b=n.valHooks[this.type]||n.valHooks[this.nodeName.toLowerCase()],b&&"set"in b&&void 0!==b.set(this,e,"value")||(this.value=e))});if(e)return b=n.valHooks[e.type]||n.valHooks[e.nodeName.toLowerCase()],b&&"get"in b&&void 0!==(c=b.get(e,"value"))?c:(c=e.value,"string"==typeof c?c.replace(bc,""):null==c?"":c)}}}),n.extend({valHooks:{option:{get:function(a){var b=n.find.attr(a,"value");return null!=b?b:n.trim(n.text(a))}},select:{get:function(a){for(var b,c,d=a.options,e=a.selectedIndex,f="select-one"===a.type||0>e,g=f?null:[],h=f?e+1:d.length,i=0>e?h:f?e:0;h>i;i++)if(c=d[i],!(!c.selected&&i!==e||(k.optDisabled?c.disabled:null!==c.getAttribute("disabled"))||c.parentNode.disabled&&n.nodeName(c.parentNode,"optgroup"))){if(b=n(c).val(),f)return b;g.push(b)}return g},set:function(a,b){var c,d,e=a.options,f=n.makeArray(b),g=e.length;while(g--)d=e[g],(d.selected=n.inArray(d.value,f)>=0)&&(c=!0);return c||(a.selectedIndex=-1),f}}}}),n.each(["radio","checkbox"],function(){n.valHooks[this]={set:function(a,b){return n.isArray(b)?a.checked=n.inArray(n(a).val(),b)>=0:void 0}},k.checkOn||(n.valHooks[this].get=function(a){return null===a.getAttribute("value")?"on":a.value})}),n.each("blur focus focusin focusout load resize scroll unload click dblclick mousedown mouseup mousemove mouseover mouseout mouseenter mouseleave change select submit keydown keypress keyup error contextmenu".split(" "),function(a,b){n.fn[b]=function(a,c){return arguments.length>0?this.on(b,null,a,c):this.trigger(b)}}),n.fn.extend({hover:function(a,b){return this.mouseenter(a).mouseleave(b||a)},bind:function(a,b,c){return this.on(a,null,b,c)},unbind:function(a,b){return this.off(a,null,b)},delegate:function(a,b,c,d){return this.on(b,a,c,d)},undelegate:function(a,b,c){return 1===arguments.length?this.off(a,"**"):this.off(b,a||"**",c)}});var cc=n.now(),dc=/\?/;n.parseJSON=function(a){return JSON.parse(a+"")},n.parseXML=function(a){var b,c;if(!a||"string"!=typeof a)return null;try{c=new DOMParser,b=c.parseFromString(a,"text/xml")}catch(d){b=void 0}return(!b||b.getElementsByTagName("parsererror").length)&&n.error("Invalid XML: "+a),b};var ec,fc,gc=/#.*$/,hc=/([?&])_=[^&]*/,ic=/^(.*?):[ \t]*([^\r\n]*)$/gm,jc=/^(?:about|app|app-storage|.+-extension|file|res|widget):$/,kc=/^(?:GET|HEAD)$/,lc=/^\/\//,mc=/^([\w.+-]+:)(?:\/\/(?:[^\/?#]*@|)([^\/?#:]*)(?::(\d+)|)|)/,nc={},oc={},pc="*/".concat("*");try{fc=location.href}catch(qc){fc=l.createElement("a"),fc.href="",fc=fc.href}ec=mc.exec(fc.toLowerCase())||[];function rc(a){return function(b,c){"string"!=typeof b&&(c=b,b="*");var d,e=0,f=b.toLowerCase().match(E)||[];if(n.isFunction(c))while(d=f[e++])"+"===d[0]?(d=d.slice(1)||"*",(a[d]=a[d]||[]).unshift(c)):(a[d]=a[d]||[]).push(c)}}function sc(a,b,c,d){var e={},f=a===oc;function g(h){var i;return e[h]=!0,n.each(a[h]||[],function(a,h){var j=h(b,c,d);return"string"!=typeof j||f||e[j]?f?!(i=j):void 0:(b.dataTypes.unshift(j),g(j),!1)}),i}return g(b.dataTypes[0])||!e["*"]&&g("*")}function tc(a,b){var c,d,e=n.ajaxSettings.flatOptions||{};for(c in b)void 0!==b[c]&&((e[c]?a:d||(d={}))[c]=b[c]);return d&&n.extend(!0,a,d),a}function uc(a,b,c){var d,e,f,g,h=a.contents,i=a.dataTypes;while("*"===i[0])i.shift(),void 0===d&&(d=a.mimeType||b.getResponseHeader("Content-Type"));if(d)for(e in h)if(h[e]&&h[e].test(d)){i.unshift(e);break}if(i[0]in c)f=i[0];else{for(e in c){if(!i[0]||a.converters[e+" "+i[0]]){f=e;break}g||(g=e)}f=f||g}return f?(f!==i[0]&&i.unshift(f),c[f]):void 0}function vc(a,b,c,d){var e,f,g,h,i,j={},k=a.dataTypes.slice();if(k[1])for(g in a.converters)j[g.toLowerCase()]=a.converters[g];f=k.shift();while(f)if(a.responseFields[f]&&(c[a.responseFields[f]]=b),!i&&d&&a.dataFilter&&(b=a.dataFilter(b,a.dataType)),i=f,f=k.shift())if("*"===f)f=i;else if("*"!==i&&i!==f){if(g=j[i+" "+f]||j["* "+f],!g)for(e in j)if(h=e.split(" "),h[1]===f&&(g=j[i+" "+h[0]]||j["* "+h[0]])){g===!0?g=j[e]:j[e]!==!0&&(f=h[0],k.unshift(h[1]));break}if(g!==!0)if(g&&a["throws"])b=g(b);else try{b=g(b)}catch(l){return{state:"parsererror",error:g?l:"No conversion from "+i+" to "+f}}}return{state:"success",data:b}}n.extend({active:0,lastModified:{},etag:{},ajaxSettings:{url:fc,type:"GET",isLocal:jc.test(ec[1]),global:!0,processData:!0,async:!0,contentType:"application/x-www-form-urlencoded; charset=UTF-8",accepts:{"*":pc,text:"text/plain",html:"text/html",xml:"application/xml, text/xml",json:"application/json, text/javascript"},contents:{xml:/xml/,html:/html/,json:/json/},responseFields:{xml:"responseXML",text:"responseText",json:"responseJSON"},converters:{"* text":String,"text html":!0,"text json":n.parseJSON,"text xml":n.parseXML},flatOptions:{url:!0,context:!0}},ajaxSetup:function(a,b){return b?tc(tc(a,n.ajaxSettings),b):tc(n.ajaxSettings,a)},ajaxPrefilter:rc(nc),ajaxTransport:rc(oc),ajax:function(a,b){"object"==typeof a&&(b=a,a=void 0),b=b||{};var c,d,e,f,g,h,i,j,k=n.ajaxSetup({},b),l=k.context||k,m=k.context&&(l.nodeType||l.jquery)?n(l):n.event,o=n.Deferred(),p=n.Callbacks("once memory"),q=k.statusCode||{},r={},s={},t=0,u="canceled",v={readyState:0,getResponseHeader:function(a){var b;if(2===t){if(!f){f={};while(b=ic.exec(e))f[b[1].toLowerCase()]=b[2]}b=f[a.toLowerCase()]}return null==b?null:b},getAllResponseHeaders:function(){return 2===t?e:null},setRequestHeader:function(a,b){var c=a.toLowerCase();return t||(a=s[c]=s[c]||a,r[a]=b),this},overrideMimeType:function(a){return t||(k.mimeType=a),this},statusCode:function(a){var b;if(a)if(2>t)for(b in a)q[b]=[q[b],a[b]];else v.always(a[v.status]);return this},abort:function(a){var b=a||u;return c&&c.abort(b),x(0,b),this}};if(o.promise(v).complete=p.add,v.success=v.done,v.error=v.fail,k.url=((a||k.url||fc)+"").replace(gc,"").replace(lc,ec[1]+"//"),k.type=b.method||b.type||k.method||k.type,k.dataTypes=n.trim(k.dataType||"*").toLowerCase().match(E)||[""],null==k.crossDomain&&(h=mc.exec(k.url.toLowerCase()),k.crossDomain=!(!h||h[1]===ec[1]&&h[2]===ec[2]&&(h[3]||("http:"===h[1]?"80":"443"))===(ec[3]||("http:"===ec[1]?"80":"443")))),k.data&&k.processData&&"string"!=typeof k.data&&(k.data=n.param(k.data,k.traditional)),sc(nc,k,b,v),2===t)return v;i=k.global,i&&0===n.active++&&n.event.trigger("ajaxStart"),k.type=k.type.toUpperCase(),k.hasContent=!kc.test(k.type),d=k.url,k.hasContent||(k.data&&(d=k.url+=(dc.test(d)?"&":"?")+k.data,delete k.data),k.cache===!1&&(k.url=hc.test(d)?d.replace(hc,"$1_="+cc++):d+(dc.test(d)?"&":"?")+"_="+cc++)),k.ifModified&&(n.lastModified[d]&&v.setRequestHeader("If-Modified-Since",n.lastModified[d]),n.etag[d]&&v.setRequestHeader("If-None-Match",n.etag[d])),(k.data&&k.hasContent&&k.contentType!==!1||b.contentType)&&v.setRequestHeader("Content-Type",k.contentType),v.setRequestHeader("Accept",k.dataTypes[0]&&k.accepts[k.dataTypes[0]]?k.accepts[k.dataTypes[0]]+("*"!==k.dataTypes[0]?", "+pc+"; q=0.01":""):k.accepts["*"]);for(j in k.headers)v.setRequestHeader(j,k.headers[j]);if(k.beforeSend&&(k.beforeSend.call(l,v,k)===!1||2===t))return v.abort();u="abort";for(j in{success:1,error:1,complete:1})v[j](k[j]);if(c=sc(oc,k,b,v)){v.readyState=1,i&&m.trigger("ajaxSend",[v,k]),k.async&&k.timeout>0&&(g=setTimeout(function(){v.abort("timeout")},k.timeout));try{t=1,c.send(r,x)}catch(w){if(!(2>t))throw w;x(-1,w)}}else x(-1,"No Transport");function x(a,b,f,h){var j,r,s,u,w,x=b;2!==t&&(t=2,g&&clearTimeout(g),c=void 0,e=h||"",v.readyState=a>0?4:0,j=a>=200&&300>a||304===a,f&&(u=uc(k,v,f)),u=vc(k,u,v,j),j?(k.ifModified&&(w=v.getResponseHeader("Last-Modified"),w&&(n.lastModified[d]=w),w=v.getResponseHeader("etag"),w&&(n.etag[d]=w)),204===a||"HEAD"===k.type?x="nocontent":304===a?x="notmodified":(x=u.state,r=u.data,s=u.error,j=!s)):(s=x,(a||!x)&&(x="error",0>a&&(a=0))),v.status=a,v.statusText=(b||x)+"",j?o.resolveWith(l,[r,x,v]):o.rejectWith(l,[v,x,s]),v.statusCode(q),q=void 0,i&&m.trigger(j?"ajaxSuccess":"ajaxError",[v,k,j?r:s]),p.fireWith(l,[v,x]),i&&(m.trigger("ajaxComplete",[v,k]),--n.active||n.event.trigger("ajaxStop")))}return v},getJSON:function(a,b,c){return n.get(a,b,c,"json")},getScript:function(a,b){return n.get(a,void 0,b,"script")}}),n.each(["get","post"],function(a,b){n[b]=function(a,c,d,e){return n.isFunction(c)&&(e=e||d,d=c,c=void 0),n.ajax({url:a,type:b,dataType:e,data:c,success:d})}}),n.each(["ajaxStart","ajaxStop","ajaxComplete","ajaxError","ajaxSuccess","ajaxSend"],function(a,b){n.fn[b]=function(a){return this.on(b,a)}}),n._evalUrl=function(a){return n.ajax({url:a,type:"GET",dataType:"script",async:!1,global:!1,"throws":!0})},n.fn.extend({wrapAll:function(a){var b;return n.isFunction(a)?this.each(function(b){n(this).wrapAll(a.call(this,b))}):(this[0]&&(b=n(a,this[0].ownerDocument).eq(0).clone(!0),this[0].parentNode&&b.insertBefore(this[0]),b.map(function(){var a=this;while(a.firstElementChild)a=a.firstElementChild;return a}).append(this)),this)},wrapInner:function(a){return this.each(n.isFunction(a)?function(b){n(this).wrapInner(a.call(this,b))}:function(){var b=n(this),c=b.contents();c.length?c.wrapAll(a):b.append(a)})},wrap:function(a){var b=n.isFunction(a);return this.each(function(c){n(this).wrapAll(b?a.call(this,c):a)})},unwrap:function(){return this.parent().each(function(){n.nodeName(this,"body")||n(this).replaceWith(this.childNodes)}).end()}}),n.expr.filters.hidden=function(a){return a.offsetWidth<=0&&a.offsetHeight<=0},n.expr.filters.visible=function(a){return!n.expr.filters.hidden(a)};var wc=/%20/g,xc=/\[\]$/,yc=/\r?\n/g,zc=/^(?:submit|button|image|reset|file)$/i,Ac=/^(?:input|select|textarea|keygen)/i;function Bc(a,b,c,d){var e;if(n.isArray(b))n.each(b,function(b,e){c||xc.test(a)?d(a,e):Bc(a+"["+("object"==typeof e?b:"")+"]",e,c,d)});else if(c||"object"!==n.type(b))d(a,b);else for(e in b)Bc(a+"["+e+"]",b[e],c,d)}n.param=function(a,b){var c,d=[],e=function(a,b){b=n.isFunction(b)?b():null==b?"":b,d[d.length]=encodeURIComponent(a)+"="+encodeURIComponent(b)};if(void 0===b&&(b=n.ajaxSettings&&n.ajaxSettings.traditional),n.isArray(a)||a.jquery&&!n.isPlainObject(a))n.each(a,function(){e(this.name,this.value)});else for(c in a)Bc(c,a[c],b,e);return d.join("&").replace(wc,"+")},n.fn.extend({serialize:function(){return n.param(this.serializeArray())},serializeArray:function(){return this.map(function(){var a=n.prop(this,"elements");return a?n.makeArray(a):this}).filter(function(){var a=this.type;return this.name&&!n(this).is(":disabled")&&Ac.test(this.nodeName)&&!zc.test(a)&&(this.checked||!T.test(a))}).map(function(a,b){var c=n(this).val();return null==c?null:n.isArray(c)?n.map(c,function(a){return{name:b.name,value:a.replace(yc,"\r\n")}}):{name:b.name,value:c.replace(yc,"\r\n")}}).get()}}),n.ajaxSettings.xhr=function(){try{return new XMLHttpRequest}catch(a){}};var Cc=0,Dc={},Ec={0:200,1223:204},Fc=n.ajaxSettings.xhr();a.ActiveXObject&&n(a).on("unload",function(){for(var a in Dc)Dc[a]()}),k.cors=!!Fc&&"withCredentials"in Fc,k.ajax=Fc=!!Fc,n.ajaxTransport(function(a){var b;return k.cors||Fc&&!a.crossDomain?{send:function(c,d){var e,f=a.xhr(),g=++Cc;if(f.open(a.type,a.url,a.async,a.username,a.password),a.xhrFields)for(e in a.xhrFields)f[e]=a.xhrFields[e];a.mimeType&&f.overrideMimeType&&f.overrideMimeType(a.mimeType),a.crossDomain||c["X-Requested-With"]||(c["X-Requested-With"]="XMLHttpRequest");for(e in c)f.setRequestHeader(e,c[e]);b=function(a){return function(){b&&(delete Dc[g],b=f.onload=f.onerror=null,"abort"===a?f.abort():"error"===a?d(f.status,f.statusText):d(Ec[f.status]||f.status,f.statusText,"string"==typeof f.responseText?{text:f.responseText}:void 0,f.getAllResponseHeaders()))}},f.onload=b(),f.onerror=b("error"),b=Dc[g]=b("abort");try{f.send(a.hasContent&&a.data||null)}catch(h){if(b)throw h}},abort:function(){b&&b()}}:void 0}),n.ajaxSetup({accepts:{script:"text/javascript, application/javascript, application/ecmascript, application/x-ecmascript"},contents:{script:/(?:java|ecma)script/},converters:{"text script":function(a){return n.globalEval(a),a}}}),n.ajaxPrefilter("script",function(a){void 0===a.cache&&(a.cache=!1),a.crossDomain&&(a.type="GET")}),n.ajaxTransport("script",function(a){if(a.crossDomain){var b,c;return{send:function(d,e){b=n("<script>").prop({async:!0,charset:a.scriptCharset,src:a.url}).on("load error",c=function(a){b.remove(),c=null,a&&e("error"===a.type?404:200,a.type)}),l.head.appendChild(b[0])},abort:function(){c&&c()}}}});var Gc=[],Hc=/(=)\?(?=&|$)|\?\?/;n.ajaxSetup({jsonp:"callback",jsonpCallback:function(){var a=Gc.pop()||n.expando+"_"+cc++;return this[a]=!0,a}}),n.ajaxPrefilter("json jsonp",function(b,c,d){var e,f,g,h=b.jsonp!==!1&&(Hc.test(b.url)?"url":"string"==typeof b.data&&!(b.contentType||"").indexOf("application/x-www-form-urlencoded")&&Hc.test(b.data)&&"data");return h||"jsonp"===b.dataTypes[0]?(e=b.jsonpCallback=n.isFunction(b.jsonpCallback)?b.jsonpCallback():b.jsonpCallback,h?b[h]=b[h].replace(Hc,"$1"+e):b.jsonp!==!1&&(b.url+=(dc.test(b.url)?"&":"?")+b.jsonp+"="+e),b.converters["script json"]=function(){return g||n.error(e+" was not called"),g[0]},b.dataTypes[0]="json",f=a[e],a[e]=function(){g=arguments},d.always(function(){a[e]=f,b[e]&&(b.jsonpCallback=c.jsonpCallback,Gc.push(e)),g&&n.isFunction(f)&&f(g[0]),g=f=void 0}),"script"):void 0}),n.parseHTML=function(a,b,c){if(!a||"string"!=typeof a)return null;"boolean"==typeof b&&(c=b,b=!1),b=b||l;var d=v.exec(a),e=!c&&[];return d?[b.createElement(d[1])]:(d=n.buildFragment([a],b,e),e&&e.length&&n(e).remove(),n.merge([],d.childNodes))};var Ic=n.fn.load;n.fn.load=function(a,b,c){if("string"!=typeof a&&Ic)return Ic.apply(this,arguments);var d,e,f,g=this,h=a.indexOf(" ");return h>=0&&(d=n.trim(a.slice(h)),a=a.slice(0,h)),n.isFunction(b)?(c=b,b=void 0):b&&"object"==typeof b&&(e="POST"),g.length>0&&n.ajax({url:a,type:e,dataType:"html",data:b}).done(function(a){f=arguments,g.html(d?n("<div>").append(n.parseHTML(a)).find(d):a)}).complete(c&&function(a,b){g.each(c,f||[a.responseText,b,a])}),this},n.expr.filters.animated=function(a){return n.grep(n.timers,function(b){return a===b.elem}).length};var Jc=a.document.documentElement;function Kc(a){return n.isWindow(a)?a:9===a.nodeType&&a.defaultView}n.offset={setOffset:function(a,b,c){var d,e,f,g,h,i,j,k=n.css(a,"position"),l=n(a),m={};"static"===k&&(a.style.position="relative"),h=l.offset(),f=n.css(a,"top"),i=n.css(a,"left"),j=("absolute"===k||"fixed"===k)&&(f+i).indexOf("auto")>-1,j?(d=l.position(),g=d.top,e=d.left):(g=parseFloat(f)||0,e=parseFloat(i)||0),n.isFunction(b)&&(b=b.call(a,c,h)),null!=b.top&&(m.top=b.top-h.top+g),null!=b.left&&(m.left=b.left-h.left+e),"using"in b?b.using.call(a,m):l.css(m)}},n.fn.extend({offset:function(a){if(arguments.length)return void 0===a?this:this.each(function(b){n.offset.setOffset(this,a,b)});var b,c,d=this[0],e={top:0,left:0},f=d&&d.ownerDocument;if(f)return b=f.documentElement,n.contains(b,d)?(typeof d.getBoundingClientRect!==U&&(e=d.getBoundingClientRect()),c=Kc(f),{top:e.top+c.pageYOffset-b.clientTop,left:e.left+c.pageXOffset-b.clientLeft}):e},position:function(){if(this[0]){var a,b,c=this[0],d={top:0,left:0};return"fixed"===n.css(c,"position")?b=c.getBoundingClientRect():(a=this.offsetParent(),b=this.offset(),n.nodeName(a[0],"html")||(d=a.offset()),d.top+=n.css(a[0],"borderTopWidth",!0),d.left+=n.css(a[0],"borderLeftWidth",!0)),{top:b.top-d.top-n.css(c,"marginTop",!0),left:b.left-d.left-n.css(c,"marginLeft",!0)}}},offsetParent:function(){return this.map(function(){var a=this.offsetParent||Jc;while(a&&!n.nodeName(a,"html")&&"static"===n.css(a,"position"))a=a.offsetParent;return a||Jc})}}),n.each({scrollLeft:"pageXOffset",scrollTop:"pageYOffset"},function(b,c){var d="pageYOffset"===c;n.fn[b]=function(e){return J(this,function(b,e,f){var g=Kc(b);return void 0===f?g?g[c]:b[e]:void(g?g.scrollTo(d?a.pageXOffset:f,d?f:a.pageYOffset):b[e]=f)},b,e,arguments.length,null)}}),n.each(["top","left"],function(a,b){n.cssHooks[b]=yb(k.pixelPosition,function(a,c){return c?(c=xb(a,b),vb.test(c)?n(a).position()[b]+"px":c):void 0})}),n.each({Height:"height",Width:"width"},function(a,b){n.each({padding:"inner"+a,content:b,"":"outer"+a},function(c,d){n.fn[d]=function(d,e){var f=arguments.length&&(c||"boolean"!=typeof d),g=c||(d===!0||e===!0?"margin":"border");return J(this,function(b,c,d){var e;return n.isWindow(b)?b.document.documentElement["client"+a]:9===b.nodeType?(e=b.documentElement,Math.max(b.body["scroll"+a],e["scroll"+a],b.body["offset"+a],e["offset"+a],e["client"+a])):void 0===d?n.css(b,c,g):n.style(b,c,d,g)},b,f?d:void 0,f,null)}})}),n.fn.size=function(){return this.length},n.fn.andSelf=n.fn.addBack,"function"==typeof define&&define.amd&&define("jquery",[],function(){return n});var Lc=a.jQuery,Mc=a.$;return n.noConflict=function(b){return a.$===n&&(a.$=Mc),b&&a.jQuery===n&&(a.jQuery=Lc),n},typeof b===U&&(a.jQuery=a.$=n),n});
//# sourceMappingURL=jquery.min.map
/*
 AngularJS v1.3.0-beta.13
 (c) 2010-2014 Google, Inc. http://angularjs.org
 License: MIT
*/
(function(K,T,s){'use strict';function G(b){return function(){var a=arguments[0],c,a="["+(b?b+":":"")+a+"] http://errors.angularjs.org/1.3.0-beta.13/"+(b?b+"/":"")+a;for(c=1;c<arguments.length;c++)a=a+(1==c?"?":"&")+"p"+(c-1)+"="+encodeURIComponent("function"==typeof arguments[c]?arguments[c].toString().replace(/ \{[\s\S]*$/,""):"undefined"==typeof arguments[c]?"undefined":"string"!=typeof arguments[c]?JSON.stringify(arguments[c]):arguments[c]);return Error(a)}}function gb(b){if(null==b||Na(b))return!1;
var a=b.length;return 1===b.nodeType&&a?!0:E(b)||L(b)||0===a||"number"===typeof a&&0<a&&a-1 in b}function q(b,a,c){var d,e;if(b)if(N(b))for(d in b)"prototype"==d||("length"==d||"name"==d||b.hasOwnProperty&&!b.hasOwnProperty(d))||a.call(c,b[d],d);else if(b.forEach&&b.forEach!==q)b.forEach(a,c);else if(gb(b))for(d=0,e=b.length;d<e;d++)a.call(c,b[d],d);else for(d in b)b.hasOwnProperty(d)&&a.call(c,b[d],d);return b}function Xb(b){var a=[],c;for(c in b)b.hasOwnProperty(c)&&a.push(c);return a.sort()}function hd(b,
a,c){for(var d=Xb(b),e=0;e<d.length;e++)a.call(c,b[d[e]],d[e]);return d}function Yb(b){return function(a,c){b(c,a)}}function Zb(b,a){a?b.$$hashKey=a:delete b.$$hashKey}function v(b){var a=b.$$hashKey;q(arguments,function(a){a!==b&&q(a,function(a,c){b[c]=a})});Zb(b,a);return b}function X(b){return parseInt(b,10)}function $b(b,a){return v(new (v(function(){},{prototype:b})),a)}function C(){}function Ca(b){return b}function ca(b){return function(){return b}}function y(b){return"undefined"===typeof b}
function F(b){return"undefined"!==typeof b}function P(b){return null!=b&&"object"===typeof b}function E(b){return"string"===typeof b}function Da(b){return"number"===typeof b}function na(b){return"[object Date]"===va.call(b)}function N(b){return"function"===typeof b}function hb(b){return"[object RegExp]"===va.call(b)}function Na(b){return b&&b.window===b}function id(b){return!(!b||!(b.nodeName||b.prop&&b.attr&&b.find))}function jd(b){var a={};b=b.split(",");var c;for(c=0;c<b.length;c++)a[b[c]]=!0;
return a}function kd(b,a,c){var d=[];q(b,function(b,f,g){d.push(a.call(c,b,f,g))});return d}function Oa(b,a){if(b.indexOf)return b.indexOf(a);for(var c=0;c<b.length;c++)if(a===b[c])return c;return-1}function Ea(b,a){var c=Oa(b,a);0<=c&&b.splice(c,1);return a}function wa(b,a,c,d){if(Na(b)||b&&b.$evalAsync&&b.$watch)throw Pa("cpws");if(a){if(b===a)throw Pa("cpi");c=c||[];d=d||[];if(P(b)){var e=Oa(c,b);if(-1!==e)return d[e];c.push(b);d.push(a)}if(L(b))for(var f=a.length=0;f<b.length;f++)e=wa(b[f],null,
c,d),P(b[f])&&(c.push(b[f]),d.push(e)),a.push(e);else{var g=a.$$hashKey;q(a,function(b,c){delete a[c]});for(f in b)e=wa(b[f],null,c,d),P(b[f])&&(c.push(b[f]),d.push(e)),a[f]=e;Zb(a,g)}}else(a=b)&&(L(b)?a=wa(b,[],c,d):na(b)?a=new Date(b.getTime()):hb(b)?a=RegExp(b.source):P(b)&&(a=wa(b,{},c,d)));return a}function ia(b,a){var c=0;if(L(b))for(a=a||[];c<b.length;c++)a[c]=b[c];else if(P(b)){a=a||{};for(var d=Object.keys(b),e=d.length;c<e;c++){var f=d[c];if("$"!==f.charAt(0)||"$"!==f.charAt(1))a[f]=b[f]}}return a||
b}function xa(b,a){if(b===a)return!0;if(null===b||null===a)return!1;if(b!==b&&a!==a)return!0;var c=typeof b,d;if(c==typeof a&&"object"==c)if(L(b)){if(!L(a))return!1;if((c=b.length)==a.length){for(d=0;d<c;d++)if(!xa(b[d],a[d]))return!1;return!0}}else{if(na(b))return na(a)&&b.getTime()==a.getTime();if(hb(b)&&hb(a))return b.toString()==a.toString();if(b&&b.$evalAsync&&b.$watch||a&&a.$evalAsync&&a.$watch||Na(b)||Na(a)||L(a))return!1;c={};for(d in b)if("$"!==d.charAt(0)&&!N(b[d])){if(!xa(b[d],a[d]))return!1;
c[d]=!0}for(d in a)if(!c.hasOwnProperty(d)&&"$"!==d.charAt(0)&&a[d]!==s&&!N(a[d]))return!1;return!0}return!1}function ac(){return T.securityPolicy&&T.securityPolicy.isActive||T.querySelector&&!(!T.querySelector("[ng-csp]")&&!T.querySelector("[data-ng-csp]"))}function Cb(b,a){var c=2<arguments.length?oa.call(arguments,2):[];return!N(a)||a instanceof RegExp?a:c.length?function(){return arguments.length?a.apply(b,c.concat(oa.call(arguments,0))):a.apply(b,c)}:function(){return arguments.length?a.apply(b,
arguments):a.call(b)}}function ld(b,a){var c=a;"string"===typeof b&&"$"===b.charAt(0)&&"$"===b.charAt(1)?c=s:Na(a)?c="$WINDOW":a&&T===a?c="$DOCUMENT":a&&(a.$evalAsync&&a.$watch)&&(c="$SCOPE");return c}function pa(b,a){return"undefined"===typeof b?s:JSON.stringify(b,ld,a?"  ":null)}function bc(b){return E(b)?JSON.parse(b):b}function Qa(b){"function"===typeof b?b=!0:b&&0!==b.length?(b=r(""+b),b=!("f"==b||"0"==b||"false"==b||"no"==b||"n"==b||"[]"==b)):b=!1;return b}function ga(b){b=z(b).clone();try{b.empty()}catch(a){}var c=
z("<div>").append(b).html();try{return 3===b[0].nodeType?r(c):c.match(/^(<[^>]+>)/)[1].replace(/^<([\w\-]+)/,function(a,b){return"<"+r(b)})}catch(d){return r(c)}}function cc(b){try{return decodeURIComponent(b)}catch(a){}}function dc(b){var a={},c,d;q((b||"").split("&"),function(b){b&&(c=b.split("="),d=cc(c[0]),F(d)&&(b=F(c[1])?cc(c[1]):!0,a[d]?L(a[d])?a[d].push(b):a[d]=[a[d],b]:a[d]=b))});return a}function Db(b){var a=[];q(b,function(b,d){L(b)?q(b,function(b){a.push(ya(d,!0)+(!0===b?"":"="+ya(b,!0)))}):
a.push(ya(d,!0)+(!0===b?"":"="+ya(b,!0)))});return a.length?a.join("&"):""}function ib(b){return ya(b,!0).replace(/%26/gi,"&").replace(/%3D/gi,"=").replace(/%2B/gi,"+")}function ya(b,a){return encodeURIComponent(b).replace(/%40/gi,"@").replace(/%3A/gi,":").replace(/%24/g,"$").replace(/%2C/gi,",").replace(/%20/g,a?"%20":"+")}function md(b,a){var c,d,e=ec.length;b=z(b);for(d=0;d<e;++d)if(c=ec[d]+a,E(c=b.attr(c)))return c;return null}function nd(b,a){function c(a){a&&d.push(a)}var d=[b],e,f,g={},h=["ng:app",
"ng-app","x-ng-app","data-ng-app"],n=/\sng[:\-]app(:\s*([\w\d_]+);?)?\s/;q(h,function(a){h[a]=!0;c(T.getElementById(a));a=a.replace(":","\\:");b.querySelectorAll&&(q(b.querySelectorAll("."+a),c),q(b.querySelectorAll("."+a+"\\:"),c),q(b.querySelectorAll("["+a+"]"),c))});q(d,function(a){if(!e){var b=n.exec(" "+a.className+" ");b?(e=a,f=(b[2]||"").replace(/\s+/g,",")):q(a.attributes,function(b){!e&&h[b.name]&&(e=a,f=b.value)})}});e&&(g.strictDi=null!==md(e,"strict-di"),a(e,f?[f]:[],g))}function fc(b,
a,c){P(c)||(c={});c=v({strictDi:!1},c);var d=function(){b=z(b);if(b.injector()){var d=b[0]===T?"document":ga(b);throw Pa("btstrpd",d);}a=a||[];a.unshift(["$provide",function(a){a.value("$rootElement",b)}]);a.unshift("ng");d=Eb(a,c.strictDi);d.invoke(["$rootScope","$rootElement","$compile","$injector",function(a,b,c,d){a.$apply(function(){b.data("$injector",d);c(b)(a)})}]);return d},e=/^NG_DEFER_BOOTSTRAP!/;if(K&&!e.test(K.name))return d();K.name=K.name.replace(e,"");Ra.resumeBootstrap=function(b){q(b,
function(b){a.push(b)});d()}}function jb(b,a){a=a||"_";return b.replace(od,function(b,d){return(d?a:"")+b.toLowerCase()})}function pd(){var b;(qa=K.jQuery)&&qa.fn.on?(z=qa,v(qa.fn,{scope:Fa.scope,isolateScope:Fa.isolateScope,controller:Fa.controller,injector:Fa.injector,inheritedData:Fa.inheritedData}),b=qa.cleanData,b=b.$$original||b,qa.cleanData=function(a){for(var c=0,d;null!=(d=a[c]);c++)qa(d).triggerHandler("$destroy");b(a)},qa.cleanData.$$original=b):z=O;Ra.element=z}function Fb(b,a,c){if(!b)throw Pa("areq",
a||"?",c||"required");return b}function Sa(b,a,c){c&&L(b)&&(b=b[b.length-1]);Fb(N(b),a,"not a function, got "+(b&&"object"==typeof b?b.constructor.name||"Object":typeof b));return b}function za(b,a){if("hasOwnProperty"===b)throw Pa("badname",a);}function gc(b,a,c){if(!a)return b;a=a.split(".");for(var d,e=b,f=a.length,g=0;g<f;g++)d=a[g],b&&(b=(e=b)[d]);return!c&&N(b)?Cb(e,b):b}function Gb(b){var a=b[0];b=b[b.length-1];if(a===b)return z(a);var c=[a];do{a=a.nextSibling;if(!a)break;c.push(a)}while(a!==
b);return z(c)}function qd(b){var a=G("$injector"),c=G("ng");b=b.angular||(b.angular={});b.$$minErr=b.$$minErr||G;return b.module||(b.module=function(){var b={};return function(e,f,g){if("hasOwnProperty"===e)throw c("badname","module");f&&b.hasOwnProperty(e)&&(b[e]=null);return b[e]||(b[e]=function(){function b(a,d,e,f){f||(f=c);return function(){f[e||"push"]([a,d,arguments]);return k}}if(!f)throw a("nomod",e);var c=[],d=[],m=[],p=b("$injector","invoke","push",d),k={_invokeQueue:c,_configBlocks:d,
_runBlocks:m,requires:f,name:e,provider:b("$provide","provider"),factory:b("$provide","factory"),service:b("$provide","service"),value:b("$provide","value"),constant:b("$provide","constant","unshift"),animation:b("$animateProvider","register"),filter:b("$filterProvider","register"),controller:b("$controllerProvider","register"),directive:b("$compileProvider","directive"),config:p,run:function(a){m.push(a);return this}};g&&p(g);return k}())}}())}function rd(b){v(b,{bootstrap:fc,copy:wa,extend:v,equals:xa,
element:z,forEach:q,injector:Eb,noop:C,bind:Cb,toJson:pa,fromJson:bc,identity:Ca,isUndefined:y,isDefined:F,isString:E,isFunction:N,isObject:P,isNumber:Da,isElement:id,isArray:L,version:sd,isDate:na,lowercase:r,uppercase:Ga,callbacks:{counter:0},$$minErr:G,$$csp:ac});Ta=qd(K);try{Ta("ngLocale")}catch(a){Ta("ngLocale",[]).provider("$locale",td)}Ta("ng",["ngLocale"],["$provide",function(a){a.provider({$$sanitizeUri:ud});a.provider("$compile",hc).directive({a:vd,input:ic,textarea:ic,form:wd,script:xd,
select:yd,style:zd,option:Ad,ngBind:Bd,ngBindHtml:Cd,ngBindTemplate:Dd,ngClass:Ed,ngClassEven:Fd,ngClassOdd:Gd,ngCloak:Hd,ngController:Id,ngForm:Jd,ngHide:Kd,ngIf:Ld,ngInclude:Md,ngInit:Nd,ngNonBindable:Od,ngPluralize:Pd,ngRepeat:Qd,ngShow:Rd,ngStyle:Sd,ngSwitch:Td,ngSwitchWhen:Ud,ngSwitchDefault:Vd,ngOptions:Wd,ngTransclude:Xd,ngModel:Yd,ngList:Zd,ngChange:$d,pattern:jc,ngPattern:jc,required:kc,ngRequired:kc,minlength:lc,ngMinlength:lc,maxlength:mc,ngMaxlength:mc,ngValue:ae,ngModelOptions:be}).directive({ngInclude:ce}).directive(kb).directive(nc);
a.provider({$anchorScroll:de,$animate:ee,$browser:fe,$cacheFactory:ge,$controller:he,$document:ie,$exceptionHandler:je,$filter:oc,$interpolate:ke,$interval:le,$http:me,$httpBackend:ne,$location:oe,$log:pe,$parse:qe,$rootScope:re,$q:se,$sce:te,$sceDelegate:ue,$sniffer:ve,$templateCache:we,$timeout:xe,$window:ye,$$rAF:ze,$$asyncCallback:Ae})}])}function Ua(b){return b.replace(Be,function(a,b,d,e){return e?d.toUpperCase():d}).replace(Ce,"Moz$1")}function De(b,a){var c,d,e=a.createDocumentFragment(),
f=[];if(Hb.test(b)){c=c||e.appendChild(a.createElement("div"));d=(Ee.exec(b)||["",""])[1].toLowerCase();d=da[d]||da._default;c.innerHTML=d[1]+b.replace(Fe,"<$1></$2>")+d[2];for(d=d[0];d--;)c=c.lastChild;f=f.concat(oa.call(c.childNodes,void 0));c=e.firstChild;c.textContent=""}else f.push(a.createTextNode(b));e.textContent="";e.innerHTML="";q(f,function(a){e.appendChild(a)});return e}function O(b){if(b instanceof O)return b;E(b)&&(b=$(b));if(!(this instanceof O)){if(E(b)&&"<"!=b.charAt(0))throw Ib("nosel");
return new O(b)}if(E(b)){var a;a=T;var c;b=(c=Ge.exec(b))?[a.createElement(c[1])]:(c=De(b,a))?c.childNodes:[]}pc(this,b)}function Jb(b){return b.cloneNode(!0)}function Ha(b){qc(b);for(var a=0,c=b.children,d=c&&c.length||0;a<d;a++)b=c[a],Ha(b)}function rc(b,a,c,d){if(F(d))throw Ib("offargs");var e=ja(b,"events");ja(b,"handle")&&(y(a)?q(e,function(a,c){Va(b,c,a);delete e[c]}):q(a.split(" "),function(a){y(c)?(Va(b,a,e[a]),delete e[a]):Ea(e[a]||[],c)}))}function qc(b,a){var c=b.ng339,d=Wa[c];d&&(a?delete Wa[c].data[a]:
(d.handle&&(d.events.$destroy&&d.handle({},"$destroy"),rc(b)),delete Wa[c],b.ng339=s))}function ja(b,a,c){var d=b.ng339,d=Wa[d||-1];if(F(c))d||(b.ng339=d=++He,d=Wa[d]={}),d[a]=c;else return d&&d[a]}function sc(b,a,c){var d=ja(b,"data"),e=F(c),f=!e&&F(a),g=f&&!P(a);d||g||ja(b,"data",d={});if(e){if(1===b.nodeType||9===b.nodeType)d[a]=c}else if(f){if(g)return d&&d[a];v(d,a)}else return d}function Kb(b,a){return b.getAttribute?-1<(" "+(b.getAttribute("class")||"")+" ").replace(/[\n\t]/g," ").indexOf(" "+
a+" "):!1}function lb(b,a){a&&b.setAttribute&&q(a.split(" "),function(a){b.setAttribute("class",$((" "+(b.getAttribute("class")||"")+" ").replace(/[\n\t]/g," ").replace(" "+$(a)+" "," ")))})}function mb(b,a){if(a&&b.setAttribute){var c=(" "+(b.getAttribute("class")||"")+" ").replace(/[\n\t]/g," ");q(a.split(" "),function(a){a=$(a);-1===c.indexOf(" "+a+" ")&&(c+=a+" ")});b.setAttribute("class",$(c))}}function pc(b,a){if(a)if(a.nodeType)b[b.length++]=a;else{var c=a.length;"number"===typeof c&&a.window!==
a?c&&tc.apply(b,a):b[b.length++]=a}}function uc(b,a){return nb(b,"$"+(a||"ngController")+"Controller")}function nb(b,a,c){b=z(b);9==b[0].nodeType&&(b=b.find("html"));for(a=L(a)?a:[a];b.length;){for(var d=b[0],e=0,f=a.length;e<f;e++)if((c=b.data(a[e]))!==s)return c;b=z(d.parentNode||11===d.nodeType&&d.host)}}function vc(b){for(var a=0,c=b.childNodes;a<c.length;a++)Ha(c[a]);for(;b.firstChild;)b.removeChild(b.firstChild)}function wc(b,a){var c=ob[a.toLowerCase()];return c&&xc[b.nodeName]&&c}function Ie(b,
a){var c=b.nodeName;return("INPUT"===c||"TEXTAREA"===c)&&yc[a]}function Je(b,a){var c=function(c,e){c.preventDefault||(c.preventDefault=function(){c.returnValue=!1});c.stopPropagation||(c.stopPropagation=function(){c.cancelBubble=!0});c.target||(c.target=c.srcElement||T);if(y(c.defaultPrevented)){var f=c.preventDefault;c.preventDefault=function(){c.defaultPrevented=!0;f.call(c)};c.defaultPrevented=!1}c.isDefaultPrevented=function(){return c.defaultPrevented||!1===c.returnValue};var g=ia(a[e||c.type]||
[]);q(g,function(a){a.call(b,c)});8>=U?(c.preventDefault=null,c.stopPropagation=null,c.isDefaultPrevented=null):(delete c.preventDefault,delete c.stopPropagation,delete c.isDefaultPrevented)};c.elem=b;return c}function Ia(b){var a=typeof b,c;"object"==a&&null!==b?"function"==typeof(c=b.$$hashKey)?c=b.$$hashKey():c===s&&(c=b.$$hashKey=++pb):c=b;return a+":"+c}function Xa(b){q(b,this.put,this)}function Ke(b){return(b=b.toString().replace(zc,"").match(Ac))?"function("+(b[1]||"").replace(/[\s\r\n]+/,
" ")+")":"fn"}function Lb(b,a,c){var d;if("function"==typeof b){if(!(d=b.$inject)){d=[];if(b.length){if(a)throw E(c)&&c||(c=b.name||Ke(b)),Ja("strictdi",c);a=b.toString().replace(zc,"");a=a.match(Ac);q(a[1].split(Le),function(a){a.replace(Me,function(a,b,c){d.push(c)})})}b.$inject=d}}else L(b)?(a=b.length-1,Sa(b[a],"fn"),d=b.slice(0,a)):Sa(b,"fn",!0);return d}function Eb(b,a){function c(a){return function(b,c){if(P(b))q(b,Yb(a));else return a(b,c)}}function d(a,b){za(a,"service");if(N(b)||L(b))b=
k.instantiate(b);if(!b.$get)throw Ja("pget",a);return p[a+n]=b}function e(a,b){return d(a,{$get:b})}function f(a){var b=[],c;q(a,function(a){function d(a){var b,c;b=0;for(c=a.length;b<c;b++){var e=a[b],f=k.get(e[0]);f[e[1]].apply(f,e[2])}}if(!m.get(a)){m.put(a,!0);try{E(a)?(c=Ta(a),b=b.concat(f(c.requires)).concat(c._runBlocks),d(c._invokeQueue),d(c._configBlocks)):N(a)?b.push(k.invoke(a)):L(a)?b.push(k.invoke(a)):Sa(a,"module")}catch(e){throw L(a)&&(a=a[a.length-1]),e.message&&(e.stack&&-1==e.stack.indexOf(e.message))&&
(e=e.message+"\n"+e.stack),Ja("modulerr",a,e.stack||e.message||e);}}});return b}function g(b,c){function d(a){if(b.hasOwnProperty(a)){if(b[a]===h)throw Ja("cdep",a+" <- "+l.join(" <- "));return b[a]}try{return l.unshift(a),b[a]=h,b[a]=c(a)}catch(e){throw b[a]===h&&delete b[a],e;}finally{l.shift()}}function e(b,c,f,h){"string"===typeof f&&(h=f,f=null);var g=[];h=Lb(b,a,h);var n,k,m;k=0;for(n=h.length;k<n;k++){m=h[k];if("string"!==typeof m)throw Ja("itkn",m);g.push(f&&f.hasOwnProperty(m)?f[m]:d(m))}b.$inject||
(b=b[n]);return b.apply(c,g)}return{invoke:e,instantiate:function(a,b,c){var d=function(){};d.prototype=(L(a)?a[a.length-1]:a).prototype;d=new d;a=e(a,d,b,c);return P(a)||N(a)?a:d},get:d,annotate:Lb,has:function(a){return p.hasOwnProperty(a+n)||b.hasOwnProperty(a)}}}a=!0===a;var h={},n="Provider",l=[],m=new Xa,p={$provide:{provider:c(d),factory:c(e),service:c(function(a,b){return e(a,["$injector",function(a){return a.instantiate(b)}])}),value:c(function(a,b){return e(a,ca(b))}),constant:c(function(a,
b){za(a,"constant");p[a]=b;t[a]=b}),decorator:function(a,b){var c=k.get(a+n),d=c.$get;c.$get=function(){var a=w.invoke(d,c);return w.invoke(b,null,{$delegate:a})}}}},k=p.$injector=g(p,function(){throw Ja("unpr",l.join(" <- "));},a),t={},w=t.$injector=g(t,function(a){var b=k.get(a+n);return w.invoke(b.$get,b,s,a)},a);q(f(b),function(a){w.invoke(a||C)});return w}function de(){var b=!0;this.disableAutoScrolling=function(){b=!1};this.$get=["$window","$location","$rootScope",function(a,c,d){function e(a){var b=
null;q(a,function(a){b||"a"!==r(a.nodeName)||(b=a)});return b}function f(){var b=c.hash(),d;b?(d=g.getElementById(b))?d.scrollIntoView():(d=e(g.getElementsByName(b)))?d.scrollIntoView():"top"===b&&a.scrollTo(0,0):a.scrollTo(0,0)}var g=a.document;b&&d.$watch(function(){return c.hash()},function(){d.$evalAsync(f)});return f}]}function Ae(){this.$get=["$$rAF","$timeout",function(b,a){return b.supported?function(a){return b(a)}:function(b){return a(b,0,!1)}}]}function Ne(b,a,c,d){function e(a){try{a.apply(null,
oa.call(arguments,1))}finally{if(w--,0===w)for(;Q.length;)try{Q.pop()()}catch(b){c.error(b)}}}function f(a,b){(function Oe(){q(u,function(a){a()});I=b(Oe,a)})()}function g(){x=null;A!=h.url()&&(A=h.url(),q(V,function(a){a(h.url())}))}var h=this,n=a[0],l=b.location,m=b.history,p=b.setTimeout,k=b.clearTimeout,t={};h.isMock=!1;var w=0,Q=[];h.$$completeOutstandingRequest=e;h.$$incOutstandingRequestCount=function(){w++};h.notifyWhenNoOutstandingRequests=function(a){q(u,function(a){a()});0===w?a():Q.push(a)};
var u=[],I;h.addPollFn=function(a){y(I)&&f(100,p);u.push(a);return a};var A=l.href,D=a.find("base"),x=null;h.url=function(a,c){l!==b.location&&(l=b.location);m!==b.history&&(m=b.history);if(a){if(A!=a)return A=a,d.history?c?m.replaceState(null,"",a):(m.pushState(null,"",a),D.attr("href",D.attr("href"))):(x=a,c?l.replace(a):l.href=a),h}else return x||l.href.replace(/%27/g,"'")};var V=[],M=!1;h.onUrlChange=function(a){if(!M){if(d.history)z(b).on("popstate",g);if(d.hashchange)z(b).on("hashchange",g);
else h.addPollFn(g);M=!0}V.push(a);return a};h.baseHref=function(){var a=D.attr("href");return a?a.replace(/^(https?\:)?\/\/[^\/]*/,""):""};var R={},S="",W=h.baseHref();h.cookies=function(a,b){var d,e,f,g;if(a)b===s?n.cookie=escape(a)+"=;path="+W+";expires=Thu, 01 Jan 1970 00:00:00 GMT":E(b)&&(d=(n.cookie=escape(a)+"="+escape(b)+";path="+W).length+1,4096<d&&c.warn("Cookie '"+a+"' possibly not set or overflowed because it was too large ("+d+" > 4096 bytes)!"));else{if(n.cookie!==S)for(S=n.cookie,d=
S.split("; "),R={},f=0;f<d.length;f++)e=d[f],g=e.indexOf("="),0<g&&(a=unescape(e.substring(0,g)),R[a]===s&&(R[a]=unescape(e.substring(g+1))));return R}};h.defer=function(a,b){var c;w++;c=p(function(){delete t[c];e(a)},b||0);t[c]=!0;return c};h.defer.cancel=function(a){return t[a]?(delete t[a],k(a),e(C),!0):!1}}function fe(){this.$get=["$window","$log","$sniffer","$document",function(b,a,c,d){return new Ne(b,d,a,c)}]}function ge(){this.$get=function(){function b(b,d){function e(a){a!=p&&(k?k==a&&(k=
a.n):k=a,f(a.n,a.p),f(a,p),p=a,p.n=null)}function f(a,b){a!=b&&(a&&(a.p=b),b&&(b.n=a))}if(b in a)throw G("$cacheFactory")("iid",b);var g=0,h=v({},d,{id:b}),n={},l=d&&d.capacity||Number.MAX_VALUE,m={},p=null,k=null;return a[b]={put:function(a,b){if(l<Number.MAX_VALUE){var c=m[a]||(m[a]={key:a});e(c)}if(!y(b))return a in n||g++,n[a]=b,g>l&&this.remove(k.key),b},get:function(a){if(l<Number.MAX_VALUE){var b=m[a];if(!b)return;e(b)}return n[a]},remove:function(a){if(l<Number.MAX_VALUE){var b=m[a];if(!b)return;
b==p&&(p=b.p);b==k&&(k=b.n);f(b.n,b.p);delete m[a]}delete n[a];g--},removeAll:function(){n={};g=0;m={};p=k=null},destroy:function(){m=h=n=null;delete a[b]},info:function(){return v({},h,{size:g})}}}var a={};b.info=function(){var b={};q(a,function(a,e){b[e]=a.info()});return b};b.get=function(b){return a[b]};return b}}function we(){this.$get=["$cacheFactory",function(b){return b("templates")}]}function hc(b,a){var c={},d="Directive",e=/^\s*directive\:\s*([\d\w_\-]+)\s+(.*)$/,f=/(([\d\w_\-]+)(?:\:([^;]+))?;?)/,
g=jd("ngSrc,ngSrcset,src,srcset"),h=/^(on[a-z]+|formaction)$/;this.directive=function l(a,e){za(a,"directive");E(a)?(Fb(e,"directiveFactory"),c.hasOwnProperty(a)||(c[a]=[],b.factory(a+d,["$injector","$exceptionHandler",function(b,d){var e=[];q(c[a],function(c,f){try{var g=b.invoke(c);N(g)?g={compile:ca(g)}:!g.compile&&g.link&&(g.compile=ca(g.link));g.priority=g.priority||0;g.index=f;g.name=g.name||a;g.require=g.require||g.controller&&g.name;g.restrict=g.restrict||"A";e.push(g)}catch(h){d(h)}});return e}])),
c[a].push(e)):q(a,Yb(l));return this};this.aHrefSanitizationWhitelist=function(b){return F(b)?(a.aHrefSanitizationWhitelist(b),this):a.aHrefSanitizationWhitelist()};this.imgSrcSanitizationWhitelist=function(b){return F(b)?(a.imgSrcSanitizationWhitelist(b),this):a.imgSrcSanitizationWhitelist()};this.$get=["$injector","$interpolate","$exceptionHandler","$http","$templateCache","$parse","$controller","$rootScope","$document","$sce","$animate","$$sanitizeUri",function(a,b,p,k,t,w,Q,u,I,A,D,x){function V(a,
b,c,d,e){a instanceof z||(a=z(a));q(a,function(b,c){3==b.nodeType&&b.nodeValue.match(/\S+/)&&(a[c]=z(b).wrap("<span></span>").parent()[0])});var f=R(a,b,a,c,d,e);M(a,"ng-scope");return function(b,c,d,e){Fb(b,"scope");var g=c?Fa.clone.call(a):a;q(d,function(a,b){g.data("$"+b+"Controller",a)});d=0;for(var h=g.length;d<h;d++){var k=g[d].nodeType;1!==k&&9!==k||g.eq(d).data("$scope",b)}c&&c(g,b);f&&f(b,g,g,e);return g}}function M(a,b){try{a.addClass(b)}catch(c){}}function R(a,b,c,d,e,f){function g(a,c,
d,e){var f,k,m,l,p,t,I;f=c.length;var w=Array(f);for(p=0;p<f;p++)w[p]=c[p];I=p=0;for(t=h.length;p<t;I++)k=w[I],c=h[p++],f=h[p++],m=z(k),c?(c.scope?(l=a.$new(),m.data("$scope",l)):l=a,m=c.transcludeOnThisElement?S(a,c.transclude,e):!c.templateOnThisElement&&e?e:!e&&b?S(a,b):null,c(f,l,k,d,m)):f&&f(a,k.childNodes,s,e)}for(var h=[],k,m,l,p,t=0;t<a.length;t++)k=new Mb,m=W(a[t],[],k,0===t?d:s,e),(f=m.length?J(m,a[t],k,b,c,null,[],[],f):null)&&f.scope&&M(z(a[t]),"ng-scope"),k=f&&f.terminal||!(l=a[t].childNodes)||
!l.length?null:R(l,f?(f.transcludeOnThisElement||!f.templateOnThisElement)&&f.transclude:b),h.push(f,k),p=p||f||k,f=null;return p?g:null}function S(a,b,c){return function(d,e,f){var g=!1;d||(d=a.$new(),g=d.$$transcluded=!0);e=b(d,e,f,c);if(g)e.on("$destroy",function(){d.$destroy()});return e}}function W(a,b,c,d,g){var h=c.$attr,k;switch(a.nodeType){case 1:ra(b,la(Ka(a).toLowerCase()),"E",d,g);var m,l,p;k=a.attributes;for(var t=0,I=k&&k.length;t<I;t++){var w=!1,A=!1;m=k[t];if(!U||8<=U||m.specified){l=
m.name;p=la(l);Aa.test(p)&&(l=jb(p.substr(6),"-"));var Q=p.replace(/(Start|End)$/,"");p===Q+"Start"&&(w=l,A=l.substr(0,l.length-5)+"end",l=l.substr(0,l.length-6));p=la(l.toLowerCase());h[p]=l;c[p]=m=$(m.value);wc(a,p)&&(c[p]=!0);Y(a,b,m,p);ra(b,p,"A",d,g,w,A)}}a=a.className;if(E(a)&&""!==a)for(;k=f.exec(a);)p=la(k[2]),ra(b,p,"C",d,g)&&(c[p]=$(k[3])),a=a.substr(k.index+k[0].length);break;case 3:G(b,a.nodeValue);break;case 8:try{if(k=e.exec(a.nodeValue))p=la(k[1]),ra(b,p,"M",d,g)&&(c[p]=$(k[2]))}catch(u){}}b.sort(y);
return b}function B(a,b,c){var d=[],e=0;if(b&&a.hasAttribute&&a.hasAttribute(b)){do{if(!a)throw ha("uterdir",b,c);1==a.nodeType&&(a.hasAttribute(b)&&e++,a.hasAttribute(c)&&e--);d.push(a);a=a.nextSibling}while(0<e)}else d.push(a);return z(d)}function Z(a,b,c){return function(d,e,f,g,h){e=B(e[0],b,c);return a(d,e,f,g,h)}}function J(a,c,d,e,f,g,h,k,l){function t(a,b,c,d){if(a){c&&(a=Z(a,c,d));a.require=H.require;a.directiveName=v;if(x===H||H.$$isolateScope)a=Cc(a,{isolateScope:!0});h.push(a)}if(b){c&&
(b=Z(b,c,d));b.require=H.require;b.directiveName=v;if(x===H||H.$$isolateScope)b=Cc(b,{isolateScope:!0});k.push(b)}}function I(a,b,c,d){var e,f="data",g=!1;if(E(b)){for(;"^"==(e=b.charAt(0))||"?"==e;)b=b.substr(1),"^"==e&&(f="inheritedData"),g=g||"?"==e;e=null;d&&"data"===f&&(e=d[b]);e=e||c[f]("$"+b+"Controller");if(!e&&!g)throw ha("ctreq",b,a);}else L(b)&&(e=[],q(b,function(b){e.push(I(a,b,c,d))}));return e}function A(a,e,f,g,l){function t(a,b){var c;2>arguments.length&&(b=a,a=s);y&&(c=W);return l(a,
b,c)}var u,D,Bc,B,V,J,W={},Z;u=c===f?d:ia(d,new Mb(z(f),d.$attr));D=u.$$element;if(x){var Pe=/^\s*([@=&])(\??)\s*(\w*)\s*$/;g=z(f);J=e.$new(!0);!R||R!==x&&R!==x.$$originalDirective?g.data("$isolateScopeNoTemplate",J):g.data("$isolateScope",J);M(g,"ng-isolate-scope");q(x.scope,function(a,c){var d=a.match(Pe)||[],f=d[3]||c,g="?"==d[2],d=d[1],h,k,l,p;J.$$isolateBindings[c]=d+f;switch(d){case "@":u.$observe(f,function(a){J[c]=a});u.$$observers[f].$$scope=e;u[f]&&(J[c]=b(u[f])(e));break;case "=":if(g&&
!u[f])break;k=w(u[f]);p=k.literal?xa:function(a,b){return a===b};l=k.assign||function(){h=J[c]=k(e);throw ha("nonassign",u[f],x.name);};h=J[c]=k(e);J.$watch(function Qe(){var a=k(e);p(a,J[c])||(p(a,h)?l(e,a=J[c]):J[c]=a);Qe.$$unwatch=k.$$unwatch;return h=a},null,k.literal);break;case "&":k=w(u[f]);J[c]=function(a){return k(e,a)};break;default:throw ha("iscp",x.name,c,a);}})}Z=l&&t;S&&q(S,function(a){var b={$scope:a===x||a.$$isolateScope?J:e,$element:D,$attrs:u,$transclude:Z},c;V=a.controller;"@"==
V&&(V=u[a.name]);c=Q(V,b);W[a.name]=c;y||D.data("$"+a.name+"Controller",c);a.controllerAs&&(b.$scope[a.controllerAs]=c)});g=0;for(Bc=h.length;g<Bc;g++)try{B=h[g],B(B.isolateScope?J:e,D,u,B.require&&I(B.directiveName,B.require,D,W),Z)}catch(ka){p(ka,ga(D))}g=e;x&&(x.template||null===x.templateUrl)&&(g=J);a&&a(g,f.childNodes,s,l);for(g=k.length-1;0<=g;g--)try{B=k[g],B(B.isolateScope?J:e,D,u,B.require&&I(B.directiveName,B.require,D,W),Z)}catch(r){p(r,ga(D))}}l=l||{};for(var u=-Number.MAX_VALUE,D,S=l.controllerDirectives,
x=l.newIsolateScopeDirective,R=l.templateDirective,J=l.nonTlbTranscludeDirective,ra=!1,Za=!1,y=l.hasElementTranscludeDirective,Y=d.$$element=z(c),H,v,r,Ya=e,G,K=0,O=a.length;K<O;K++){H=a[K];var Aa=H.$$start,qb=H.$$end;Aa&&(Y=B(c,Aa,qb));r=s;if(u>H.priority)break;if(r=H.scope)H.templateUrl||(P(r)?(La("new/isolated scope",x||D,H,Y),x=H):La("new/isolated scope",x,H,Y)),D=D||H;v=H.name;!H.templateUrl&&H.controller&&(r=H.controller,S=S||{},La("'"+v+"' controller",S[v],H,Y),S[v]=H);if(r=H.transclude)ra=
!0,H.$$tlb||(La("transclusion",J,H,Y),J=H),"element"==r?(y=!0,u=H.priority,r=B(c,Aa,qb),Y=d.$$element=z(T.createComment(" "+v+": "+d[v]+" ")),c=Y[0],rb(f,z(oa.call(r,0)),c),Ya=V(r,e,u,g&&g.name,{nonTlbTranscludeDirective:J})):(r=z(Jb(c)).contents(),Y.empty(),Ya=V(r,e));if(H.template)if(Za=!0,La("template",R,H,Y),R=H,r=N(H.template)?H.template(Y,d):H.template,r=Dc(r),H.replace){g=H;r=Hb.test(r)?z(Ec(H.type,$(r))):[];c=r[0];if(1!=r.length||1!==c.nodeType)throw ha("tplrt",v,"");rb(f,Y,c);O={$attr:{}};
r=W(c,[],O);var U=a.splice(K+1,a.length-(K+1));x&&F(r);a=a.concat(r).concat(U);ka(d,O);O=a.length}else Y.html(r);if(H.templateUrl)Za=!0,La("template",R,H,Y),R=H,H.replace&&(g=H),A=C(a.splice(K,a.length-K),Y,d,f,ra&&Ya,h,k,{controllerDirectives:S,newIsolateScopeDirective:x,templateDirective:R,nonTlbTranscludeDirective:J}),O=a.length;else if(H.compile)try{G=H.compile(Y,d,Ya),N(G)?t(null,G,Aa,qb):G&&t(G.pre,G.post,Aa,qb)}catch(X){p(X,ga(Y))}H.terminal&&(A.terminal=!0,u=Math.max(u,H.priority))}A.scope=
D&&!0===D.scope;A.transcludeOnThisElement=ra;A.templateOnThisElement=Za;A.transclude=Ya;l.hasElementTranscludeDirective=y;return A}function F(a){for(var b=0,c=a.length;b<c;b++)a[b]=$b(a[b],{$$isolateScope:!0})}function ra(b,e,f,g,h,k,m){if(e===h)return null;h=null;if(c.hasOwnProperty(e)){var t;e=a.get(e+d);for(var I=0,w=e.length;I<w;I++)try{t=e[I],(g===s||g>t.priority)&&-1!=t.restrict.indexOf(f)&&(k&&(t=$b(t,{$$start:k,$$end:m})),b.push(t),h=t)}catch(u){p(u)}}return h}function ka(a,b){var c=b.$attr,
d=a.$attr,e=a.$$element;q(a,function(d,e){"$"!=e.charAt(0)&&(b[e]&&b[e]!==d&&(d+=("style"===e?";":" ")+b[e]),a.$set(e,d,!0,c[e]))});q(b,function(b,f){"class"==f?(M(e,b),a["class"]=(a["class"]?a["class"]+" ":"")+b):"style"==f?(e.attr("style",e.attr("style")+";"+b),a.style=(a.style?a.style+";":"")+b):"$"==f.charAt(0)||a.hasOwnProperty(f)||(a[f]=b,d[f]=c[f])})}function C(a,b,c,d,e,f,g,h){var l=[],p,m,I=b[0],w=a.shift(),u=v({},w,{templateUrl:null,transclude:null,replace:null,$$originalDirective:w}),D=
N(w.templateUrl)?w.templateUrl(b,c):w.templateUrl,Q=w.type;b.empty();k.get(A.getTrustedResourceUrl(D),{cache:t}).success(function(k){var t,A;k=Dc(k);if(w.replace){k=Hb.test(k)?z(Ec(Q,$(k))):[];t=k[0];if(1!=k.length||1!==t.nodeType)throw ha("tplrt",w.name,D);k={$attr:{}};rb(d,b,t);var x=W(t,[],k);P(w.scope)&&F(x);a=x.concat(a);ka(c,k)}else t=I,b.html(k);a.unshift(u);p=J(a,t,c,e,b,w,f,g,h);q(d,function(a,c){a==t&&(d[c]=b[0])});for(m=R(b[0].childNodes,e);l.length;){k=l.shift();A=l.shift();var B=l.shift(),
V=l.shift(),x=b[0];if(A!==I){var Z=A.className;h.hasElementTranscludeDirective&&w.replace||(x=Jb(t));rb(B,z(A),x);M(z(x),Z)}A=p.transcludeOnThisElement?S(k,p.transclude,V):V;p(m,k,x,d,A)}l=null}).error(function(a,b,c,d){throw ha("tpload",d.url);});return function(a,b,c,d,e){a=e;l?(l.push(b),l.push(c),l.push(d),l.push(a)):(p.transcludeOnThisElement&&(a=S(b,p.transclude,e)),p(m,b,c,d,a))}}function y(a,b){var c=b.priority-a.priority;return 0!==c?c:a.name!==b.name?a.name<b.name?-1:1:a.index-b.index}function La(a,
b,c,d){if(b)throw ha("multidir",b.name,c.name,a,ga(d));}function G(a,c){var d=b(c,!0);d&&a.push({priority:0,compile:function(a){var e=a.parent().length;e&&M(a.parent(),"ng-binding");return function(a,f){var g=f.parent(),h=g.data("$binding")||[];d=b(c);h.push(d);g.data("$binding",h);e||M(g,"ng-binding");a.$watch(d,function(a){f[0].nodeValue=a})}}})}function Ec(a,b){a=r(a||"html");switch(a){case "svg":case "math":var c=T.createElement("div");c.innerHTML="<"+a+">"+b+"</"+a+">";return c.childNodes[0].childNodes;
default:return b}}function Za(a,b){if("srcdoc"==b)return A.HTML;var c=Ka(a);if("xlinkHref"==b||"FORM"==c&&"action"==b||"IMG"!=c&&("src"==b||"ngSrc"==b))return A.RESOURCE_URL}function Y(a,c,d,e){var f=b(d,!0);if(f){if("multiple"===e&&"SELECT"===Ka(a))throw ha("selmulti",ga(a));c.push({priority:100,compile:function(){return{pre:function(c,d,k){d=k.$$observers||(k.$$observers={});if(h.test(e))throw ha("nodomevents");if(f=b(k[e],!0,Za(a,e),g[e]))k[e]=f(c),(d[e]||(d[e]=[])).$$inter=!0,(k.$$observers&&
k.$$observers[e].$$scope||c).$watch(f,function(a,b){"class"===e&&a!=b?k.$updateClass(a,b):k.$set(e,a)})}}}})}}function rb(a,b,c){var d=b[0],e=b.length,f=d.parentNode,g,h;if(a)for(g=0,h=a.length;g<h;g++)if(a[g]==d){a[g++]=c;h=g+e-1;for(var k=a.length;g<k;g++,h++)h<k?a[g]=a[h]:delete a[g];a.length-=e-1;break}f&&f.replaceChild(c,d);a=T.createDocumentFragment();a.appendChild(d);c[z.expando]=d[z.expando];d=1;for(e=b.length;d<e;d++)f=b[d],z(f).remove(),a.appendChild(f),delete b[d];b[0]=c;b.length=1}function Cc(a,
b){return v(function(){return a.apply(null,arguments)},a,b)}var Mb=function(a,b){this.$$element=a;this.$attr=b||{}};Mb.prototype={$normalize:la,$addClass:function(a){a&&0<a.length&&D.addClass(this.$$element,a)},$removeClass:function(a){a&&0<a.length&&D.removeClass(this.$$element,a)},$updateClass:function(a,b){var c=Fc(a,b),d=Fc(b,a);0===c.length?D.removeClass(this.$$element,d):0===d.length?D.addClass(this.$$element,c):D.setClass(this.$$element,c,d)},$set:function(a,b,c,d){var e=this.$$element[0],
f=wc(e,a),g=Ie(e,a),e=a;f?(this.$$element.prop(a,b),d=f):g&&(this[g]=b,e=g);this[a]=b;d?this.$attr[a]=d:(d=this.$attr[a])||(this.$attr[a]=d=jb(a,"-"));f=Ka(this.$$element);if("A"===f&&"href"===a||"IMG"===f&&"src"===a)this[a]=b=x(b,"src"===a);!1!==c&&(null===b||b===s?this.$$element.removeAttr(d):this.$$element.attr(d,b));(a=this.$$observers)&&q(a[e],function(a){try{a(b)}catch(c){p(c)}})},$observe:function(a,b){var c=this,d=c.$$observers||(c.$$observers={}),e=d[a]||(d[a]=[]);e.push(b);u.$evalAsync(function(){e.$$inter||
b(c[a])});return function(){Ea(e,b)}}};var K=b.startSymbol(),O=b.endSymbol(),Dc="{{"==K||"}}"==O?Ca:function(a){return a.replace(/\{\{/g,K).replace(/}}/g,O)},Aa=/^ngAttr[A-Z]/;return V}]}function la(b){return Ua(b.replace(Re,""))}function Fc(b,a){var c="",d=b.split(/\s+/),e=a.split(/\s+/),f=0;a:for(;f<d.length;f++){for(var g=d[f],h=0;h<e.length;h++)if(g==e[h])continue a;c+=(0<c.length?" ":"")+g}return c}function he(){var b={},a=/^(\S+)(\s+as\s+(\w+))?$/;this.register=function(a,d){za(a,"controller");
P(a)?v(b,a):b[a]=d};this.$get=["$injector","$window",function(c,d){return function(e,f){var g,h,n;E(e)&&(g=e.match(a),h=g[1],n=g[3],e=b.hasOwnProperty(h)?b[h]:gc(f.$scope,h,!0)||gc(d,h,!0),Sa(e,h,!0));g=c.instantiate(e,f,h);if(n){if(!f||"object"!=typeof f.$scope)throw G("$controller")("noscp",h||e.name,n);f.$scope[n]=g}return g}}]}function ie(){this.$get=["$window",function(b){return z(b.document)}]}function je(){this.$get=["$log",function(b){return function(a,c){b.error.apply(b,arguments)}}]}function Gc(b){var a=
{},c,d,e;if(!b)return a;q(b.split("\n"),function(b){e=b.indexOf(":");c=r($(b.substr(0,e)));d=$(b.substr(e+1));c&&(a[c]=a[c]?a[c]+(", "+d):d)});return a}function Hc(b){var a=P(b)?b:s;return function(c){a||(a=Gc(b));return c?a[r(c)]||null:a}}function Ic(b,a,c){if(N(c))return c(b,a);q(c,function(c){b=c(b,a)});return b}function me(){var b=/^\s*(\[|\{[^\{])/,a=/[\}\]]\s*$/,c=/^\)\]\}',?\n/,d={"Content-Type":"application/json;charset=utf-8"},e=this.defaults={transformResponse:[function(d){E(d)&&(d=d.replace(c,
""),b.test(d)&&a.test(d)&&(d=bc(d)));return d}],transformRequest:[function(a){return P(a)&&"[object File]"!==va.call(a)&&"[object Blob]"!==va.call(a)?pa(a):a}],headers:{common:{Accept:"application/json, text/plain, */*"},post:ia(d),put:ia(d),patch:ia(d)},xsrfCookieName:"XSRF-TOKEN",xsrfHeaderName:"X-XSRF-TOKEN"},f=this.interceptors=[];this.$get=["$httpBackend","$browser","$cacheFactory","$rootScope","$q","$injector",function(a,b,c,d,m,p){function k(a){function b(a){var d=v({},a,{data:Ic(a.data,a.headers,
c.transformResponse)});return 200<=a.status&&300>a.status?d:m.reject(d)}var c={method:"get",transformRequest:e.transformRequest,transformResponse:e.transformResponse},d=function(a){function b(a){var c;q(a,function(b,d){N(b)&&(c=b(),null!=c?a[d]=c:delete a[d])})}var c=e.headers,d=v({},a.headers),f,g,c=v({},c.common,c[r(a.method)]);b(c);b(d);a:for(f in c){a=r(f);for(g in d)if(r(g)===a)continue a;d[f]=c[f]}return d}(a);v(c,a);c.headers=d;c.method=Ga(c.method);var f=[function(a){d=a.headers;var c=Ic(a.data,
Hc(d),a.transformRequest);y(a.data)&&q(d,function(a,b){"content-type"===r(b)&&delete d[b]});y(a.withCredentials)&&!y(e.withCredentials)&&(a.withCredentials=e.withCredentials);return t(a,c,d).then(b,b)},s],g=m.when(c);for(q(u,function(a){(a.request||a.requestError)&&f.unshift(a.request,a.requestError);(a.response||a.responseError)&&f.push(a.response,a.responseError)});f.length;){a=f.shift();var h=f.shift(),g=g.then(a,h)}g.success=function(a){g.then(function(b){a(b.data,b.status,b.headers,c)});return g};
g.error=function(a){g.then(null,function(b){a(b.data,b.status,b.headers,c)});return g};return g}function t(c,f,n){function p(a,b,c,e){W&&(200<=a&&300>a?W.put(Z,[a,b,Gc(c),e]):W.remove(Z));t(b,a,c,e);d.$$phase||d.$apply()}function t(a,b,d,e){b=Math.max(b,0);(200<=b&&300>b?q.resolve:q.reject)({data:a,status:b,headers:Hc(d),config:c,statusText:e})}function u(){var a=Oa(k.pendingRequests,c);-1!==a&&k.pendingRequests.splice(a,1)}var q=m.defer(),S=q.promise,W,B,Z=w(c.url,c.params);k.pendingRequests.push(c);
S.then(u,u);(c.cache||e.cache)&&(!1!==c.cache&&"GET"==c.method)&&(W=P(c.cache)?c.cache:P(e.cache)?e.cache:Q);if(W)if(B=W.get(Z),F(B)){if(B.then)return B.then(u,u),B;L(B)?t(B[1],B[0],ia(B[2]),B[3]):t(B,200,{},"OK")}else W.put(Z,S);y(B)&&((B=Nb(c.url)?b.cookies()[c.xsrfCookieName||e.xsrfCookieName]:s)&&(n[c.xsrfHeaderName||e.xsrfHeaderName]=B),a(c.method,Z,f,p,n,c.timeout,c.withCredentials,c.responseType));return S}function w(a,b){if(!b)return a;var c=[];hd(b,function(a,b){null===a||y(a)||(L(a)||(a=
[a]),q(a,function(a){P(a)&&(a=pa(a));c.push(ya(b)+"="+ya(a))}))});0<c.length&&(a+=(-1==a.indexOf("?")?"?":"&")+c.join("&"));return a}var Q=c("$http"),u=[];q(f,function(a){u.unshift(E(a)?p.get(a):p.invoke(a))});k.pendingRequests=[];(function(a){q(arguments,function(a){k[a]=function(b,c){return k(v(c||{},{method:a,url:b}))}})})("get","delete","head","jsonp");(function(a){q(arguments,function(a){k[a]=function(b,c,d){return k(v(d||{},{method:a,url:b,data:c}))}})})("post","put");k.defaults=e;return k}]}
function Se(b){if(8>=U&&(!b.match(/^(get|post|head|put|delete|options)$/i)||!K.XMLHttpRequest))return new K.ActiveXObject("Microsoft.XMLHTTP");if(K.XMLHttpRequest)return new K.XMLHttpRequest;throw G("$httpBackend")("noxhr");}function ne(){this.$get=["$browser","$window","$document",function(b,a,c){return Te(b,Se,b.defer,a.angular.callbacks,c[0])}]}function Te(b,a,c,d,e){function f(a,b,c){var f=e.createElement("script"),g=null;f.type="text/javascript";f.src=a;f.async=!0;g=function(a){Va(f,"load",g);
Va(f,"error",g);e.body.removeChild(f);f=null;var h=-1,w="unknown";a&&("load"!==a.type||d[b].called||(a={type:"error"}),w=a.type,h="error"===a.type?404:200);c&&c(h,w)};sb(f,"load",g);sb(f,"error",g);e.body.appendChild(f);return g}var g=-1;return function(e,n,l,m,p,k,t,w){function Q(){I=g;D&&D();x&&x.abort()}function u(a,d,e,f,g){M&&c.cancel(M);D=x=null;0===d&&(d=e?200:"file"==sa(n).protocol?404:0);a(1223===d?204:d,e,f,g||"");b.$$completeOutstandingRequest(C)}var I;b.$$incOutstandingRequestCount();
n=n||b.url();if("jsonp"==r(e)){var A="_"+(d.counter++).toString(36);d[A]=function(a){d[A].data=a;d[A].called=!0};var D=f(n.replace("JSON_CALLBACK","angular.callbacks."+A),A,function(a,b){u(m,a,d[A].data,"",b);d[A]=C})}else{var x=a(e);x.open(e,n,!0);q(p,function(a,b){F(a)&&x.setRequestHeader(b,a)});x.onreadystatechange=function(){if(x&&4==x.readyState){var a=null,b=null;I!==g&&(a=x.getAllResponseHeaders(),b="response"in x?x.response:x.responseText);u(m,I||x.status,b,a,x.statusText||"")}};t&&(x.withCredentials=
!0);if(w)try{x.responseType=w}catch(V){if("json"!==w)throw V;}x.send(l||null)}if(0<k)var M=c(Q,k);else k&&k.then&&k.then(Q)}}function ke(){var b="{{",a="}}";this.startSymbol=function(a){return a?(b=a,this):b};this.endSymbol=function(b){return b?(a=b,this):a};this.$get=["$parse","$exceptionHandler","$sce",function(c,d,e){function f(a){return"\\\\\\"+a}function g(f,g,t,w){w=!!w;for(var Q,u,I=0,A=[],D=[],x=[],V=f.length,M=!1,R=!1,S=[],r={},B={};I<V;)if(-1!=(Q=f.indexOf(b,I))&&-1!=(u=f.indexOf(a,Q+h)))I!==
Q&&(R=!0),A.push(f.substring(I,Q)),I=f.substring(Q+h,u),D.push(I),x.push(c(I)),I=u+n,M=!0;else{I!==V&&(R=!0,A.push(f.substring(I)));break}q(A,function(c,d){A[d]=A[d].replace(l,b).replace(m,a)});A.length===D.length&&A.push("");if(t&&M&&(R||1<D.length))throw Jc("noconcat",f);if(!g||M){S.length=A.length+D.length;var Z=function(a){for(var b=0,c=D.length;b<c;b++)S[2*b]=A[b],S[2*b+1]=a[b];S[2*c]=A[c];return S.join("")},J=function(a){return a=t?e.getTrusted(t,a):e.valueOf(a)},z=function(a){if(null==a)return"";
switch(typeof a){case "string":break;case "number":a=""+a;break;default:a=pa(a)}return a};return v(function ka(a){var b=a&&a.$id||"notAScope",c=r[b],e=B[b],g=0,h=D.length,k=Array(h),n,l=e===s?!0:!1;c||(c=[],l=!0,a&&a.$on&&a.$on("$destroy",function(){r[b]=null;B[b]=null}));try{for(ka.$$unwatch=!0;g<h;g++){n=J(x[g](a));if(w&&y(n)){ka.$$unwatch=s;return}n=z(n);n!==c[g]&&(l=!0);k[g]=n;ka.$$unwatch=ka.$$unwatch&&x[g].$$unwatch}l&&(r[b]=k,B[b]=e=Z(k))}catch(t){a=Jc("interr",f,t.toString()),d(a)}return e},
{exp:f,separators:A,expressions:D})}}var h=b.length,n=a.length,l=RegExp(b.replace(/./g,f),"g"),m=RegExp(a.replace(/./g,f),"g");g.startSymbol=function(){return b};g.endSymbol=function(){return a};return g}]}function le(){this.$get=["$rootScope","$window","$q",function(b,a,c){function d(d,g,h,n){var l=a.setInterval,m=a.clearInterval,p=c.defer(),k=p.promise,t=0,w=F(n)&&!n;h=F(h)?h:0;k.then(null,null,d);k.$$intervalId=l(function(){p.notify(t++);0<h&&t>=h&&(p.resolve(t),m(k.$$intervalId),delete e[k.$$intervalId]);
w||b.$apply()},g);e[k.$$intervalId]=p;return k}var e={};d.cancel=function(a){return a&&a.$$intervalId in e?(e[a.$$intervalId].reject("canceled"),clearInterval(a.$$intervalId),delete e[a.$$intervalId],!0):!1};return d}]}function td(){this.$get=function(){return{id:"en-us",NUMBER_FORMATS:{DECIMAL_SEP:".",GROUP_SEP:",",PATTERNS:[{minInt:1,minFrac:0,maxFrac:3,posPre:"",posSuf:"",negPre:"-",negSuf:"",gSize:3,lgSize:3},{minInt:1,minFrac:2,maxFrac:2,posPre:"\u00a4",posSuf:"",negPre:"(\u00a4",negSuf:")",
gSize:3,lgSize:3}],CURRENCY_SYM:"$"},DATETIME_FORMATS:{MONTH:"January February March April May June July August September October November December".split(" "),SHORTMONTH:"Jan Feb Mar Apr May Jun Jul Aug Sep Oct Nov Dec".split(" "),DAY:"Sunday Monday Tuesday Wednesday Thursday Friday Saturday".split(" "),SHORTDAY:"Sun Mon Tue Wed Thu Fri Sat".split(" "),AMPMS:["AM","PM"],medium:"MMM d, y h:mm:ss a","short":"M/d/yy h:mm a",fullDate:"EEEE, MMMM d, y",longDate:"MMMM d, y",mediumDate:"MMM d, y",shortDate:"M/d/yy",
mediumTime:"h:mm:ss a",shortTime:"h:mm a"},pluralCat:function(b){return 1===b?"one":"other"}}}}function Ob(b){b=b.split("/");for(var a=b.length;a--;)b[a]=ib(b[a]);return b.join("/")}function Kc(b,a,c){b=sa(b,c);a.$$protocol=b.protocol;a.$$host=b.hostname;a.$$port=X(b.port)||Ue[b.protocol]||null}function Lc(b,a,c){var d="/"!==b.charAt(0);d&&(b="/"+b);b=sa(b,c);a.$$path=decodeURIComponent(d&&"/"===b.pathname.charAt(0)?b.pathname.substring(1):b.pathname);a.$$search=dc(b.search);a.$$hash=decodeURIComponent(b.hash);
a.$$path&&"/"!=a.$$path.charAt(0)&&(a.$$path="/"+a.$$path)}function ma(b,a){if(0===a.indexOf(b))return a.substr(b.length)}function $a(b){var a=b.indexOf("#");return-1==a?b:b.substr(0,a)}function Pb(b){return b.substr(0,$a(b).lastIndexOf("/")+1)}function Mc(b,a){this.$$html5=!0;a=a||"";var c=Pb(b);Kc(b,this,b);this.$$parse=function(a){var e=ma(c,a);if(!E(e))throw Qb("ipthprfx",a,c);Lc(e,this,b);this.$$path||(this.$$path="/");this.$$compose()};this.$$compose=function(){var a=Db(this.$$search),b=this.$$hash?
"#"+ib(this.$$hash):"";this.$$url=Ob(this.$$path)+(a?"?"+a:"")+b;this.$$absUrl=c+this.$$url.substr(1)};this.$$rewrite=function(d){var e;if((e=ma(b,d))!==s)return d=e,(e=ma(a,e))!==s?c+(ma("/",e)||e):b+d;if((e=ma(c,d))!==s)return c+e;if(c==d+"/")return c}}function Rb(b,a){var c=Pb(b);Kc(b,this,b);this.$$parse=function(d){var e=ma(b,d)||ma(c,d),e="#"==e.charAt(0)?ma(a,e):this.$$html5?e:"";if(!E(e))throw Qb("ihshprfx",d,a);Lc(e,this,b);d=this.$$path;var f=/^\/[A-Z]:(\/.*)/;0===e.indexOf(b)&&(e=e.replace(b,
""));f.exec(e)||(d=(e=f.exec(d))?e[1]:d);this.$$path=d;this.$$compose()};this.$$compose=function(){var c=Db(this.$$search),e=this.$$hash?"#"+ib(this.$$hash):"";this.$$url=Ob(this.$$path)+(c?"?"+c:"")+e;this.$$absUrl=b+(this.$$url?a+this.$$url:"")};this.$$rewrite=function(a){if($a(b)==$a(a))return a}}function Sb(b,a){this.$$html5=!0;Rb.apply(this,arguments);var c=Pb(b);this.$$rewrite=function(d){var e;if(b==$a(d))return d;if(e=ma(c,d))return b+a+e;if(c===d+"/")return c};this.$$compose=function(){var c=
Db(this.$$search),e=this.$$hash?"#"+ib(this.$$hash):"";this.$$url=Ob(this.$$path)+(c?"?"+c:"")+e;this.$$absUrl=b+a+this.$$url}}function tb(b){return function(){return this[b]}}function Nc(b,a){return function(c){if(y(c))return this[b];this[b]=a(c);this.$$compose();return this}}function oe(){var b="",a=!1;this.hashPrefix=function(a){return F(a)?(b=a,this):b};this.html5Mode=function(b){return F(b)?(a=b,this):a};this.$get=["$rootScope","$browser","$sniffer","$rootElement",function(c,d,e,f){function g(a){c.$broadcast("$locationChangeSuccess",
h.absUrl(),a)}var h,n,l=d.baseHref(),m=d.url(),p;a?(p=m.substring(0,m.indexOf("/",m.indexOf("//")+2))+(l||"/"),n=e.history?Mc:Sb):(p=$a(m),n=Rb);h=new n(p,"#"+b);h.$$parse(h.$$rewrite(m));f.on("click",function(a){if(!a.ctrlKey&&!a.metaKey&&2!=a.which){for(var e=z(a.target);"a"!==r(e[0].nodeName);)if(e[0]===f[0]||!(e=e.parent())[0])return;var g=e.prop("href");P(g)&&"[object SVGAnimatedString]"===g.toString()&&(g=sa(g.animVal).href);if(n===Sb){var k=e.attr("href")||e.attr("xlink:href");if(0>k.indexOf("://"))if(g=
"#"+b,"/"==k[0])g=p+g+k;else if("#"==k[0])g=p+g+(h.path()||"/")+k;else{for(var l=h.path().split("/"),k=k.split("/"),m=0;m<k.length;m++)"."!=k[m]&&(".."==k[m]?l.pop():k[m].length&&l.push(k[m]));g=p+g+l.join("/")}}l=h.$$rewrite(g);g&&(!e.attr("target")&&l&&!a.isDefaultPrevented())&&(a.preventDefault(),l!=d.url()&&(h.$$parse(l),c.$apply(),K.angular["ff-684208-preventDefault"]=!0))}});h.absUrl()!=m&&d.url(h.absUrl(),!0);d.onUrlChange(function(a){h.absUrl()!=a&&(c.$evalAsync(function(){var b=h.absUrl();
h.$$parse(a);c.$broadcast("$locationChangeStart",a,b).defaultPrevented?(h.$$parse(b),d.url(b)):g(b)}),c.$$phase||c.$digest())});var k=0;c.$watch(function(){var a=d.url(),b=h.$$replace;k&&a==h.absUrl()||(k++,c.$evalAsync(function(){c.$broadcast("$locationChangeStart",h.absUrl(),a).defaultPrevented?h.$$parse(a):(d.url(h.absUrl(),b),g(a))}));h.$$replace=!1;return k});return h}]}function pe(){var b=!0,a=this;this.debugEnabled=function(a){return F(a)?(b=a,this):b};this.$get=["$window",function(c){function d(a){a instanceof
Error&&(a.stack?a=a.message&&-1===a.stack.indexOf(a.message)?"Error: "+a.message+"\n"+a.stack:a.stack:a.sourceURL&&(a=a.message+"\n"+a.sourceURL+":"+a.line));return a}function e(a){var b=c.console||{},e=b[a]||b.log||C;a=!1;try{a=!!e.apply}catch(n){}return a?function(){var a=[];q(arguments,function(b){a.push(d(b))});return e.apply(b,a)}:function(a,b){e(a,null==b?"":b)}}return{log:e("log"),info:e("info"),warn:e("warn"),error:e("error"),debug:function(){var c=e("debug");return function(){b&&c.apply(a,
arguments)}}()}}]}function ea(b,a){if("constructor"===b)throw Ba("isecfld",a);return b}function ab(b,a){if(b){if(b.constructor===b)throw Ba("isecfn",a);if(b.document&&b.location&&b.alert&&b.setInterval)throw Ba("isecwindow",a);if(b.children&&(b.nodeName||b.prop&&b.attr&&b.find))throw Ba("isecdom",a);}return b}function ub(b,a,c,d){a=a.split(".");for(var e,f=0;1<a.length;f++){e=ea(a.shift(),d);var g=b[e];g||(g={},b[e]=g);b=g}e=ea(a.shift(),d);return b[e]=c}function Oc(b,a,c,d,e,f){ea(b,f);ea(a,f);ea(c,
f);ea(d,f);ea(e,f);return function(f,h){var n=h&&h.hasOwnProperty(b)?h:f;if(null==n)return n;n=n[b];if(!a)return n;if(null==n)return s;n=n[a];if(!c)return n;if(null==n)return s;n=n[c];if(!d)return n;if(null==n)return s;n=n[d];return e?null==n?s:n=n[e]:n}}function Ve(b,a){ea(b,a);return function(a,d){return null==a?s:(d&&d.hasOwnProperty(b)?d:a)[b]}}function We(b,a,c){ea(b,c);ea(a,c);return function(c,e){if(null==c)return s;c=(e&&e.hasOwnProperty(b)?e:c)[b];return null==c?s:c[a]}}function Pc(b,a,c){if(Tb.hasOwnProperty(b))return Tb[b];
var d=b.split("."),e=d.length;if(1===e)a=Ve(d[0],c);else if(2===e)a=We(d[0],d[1],c);else if(a.csp)a=6>e?Oc(d[0],d[1],d[2],d[3],d[4],c):function(a,b){var f=0,l;do l=Oc(d[f++],d[f++],d[f++],d[f++],d[f++],c)(a,b),b=s,a=l;while(f<e);return l};else{var f="var p;\n";q(d,function(a,b){ea(a,c);f+="if(s == null) return undefined;\ns="+(b?"s":'((k&&k.hasOwnProperty("'+a+'"))?k:s)')+'["'+a+'"];\n'});f+="return s;";a=new Function("s","k",f);a.toString=ca(f)}"hasOwnProperty"!==b&&(Tb[b]=a);return a}function qe(){var b=
{},a={csp:!1};this.$get=["$filter","$sniffer",function(c,d){a.csp=d.csp;return function(d){function f(a){function b(e,f){c||(d=a(e,f),b.$$unwatch=F(d),b.$$unwatch&&(e&&e.$$postDigestQueue)&&e.$$postDigestQueue.push(function(){!(c=F(d))||null!==d&&d.$$unwrapTrustedValue||(d=wa(d,null))}));return d}var c=!1,d;b.literal=a.literal;b.constant=a.constant;b.assign=a.assign;return b}var g,h;switch(typeof d){case "string":d=$(d);":"===d.charAt(0)&&":"===d.charAt(1)&&(h=!0,d=d.substring(2));if(b.hasOwnProperty(d))return h?
f(b[d]):b[d];g=new Ub(a);g=(new bb(g,c,a)).parse(d);"hasOwnProperty"!==d&&(b[d]=g);g.constant&&(g.$$unwatch=!0);return h?f(g):g;case "function":return d;default:return C}}}]}function se(){this.$get=["$rootScope","$exceptionHandler",function(b,a){return Xe(function(a){b.$evalAsync(a)},a)}]}function Xe(b,a){function c(a){return a}function d(a){return g(a)}var e=function(){var g=[],l,m;return m={resolve:function(a){if(g){var c=g;g=s;l=f(a);c.length&&b(function(){for(var a,b=0,d=c.length;b<d;b++)a=c[b],
l.then(a[0],a[1],a[2])})}},reject:function(a){m.resolve(h(a))},notify:function(a){if(g){var c=g;g.length&&b(function(){for(var b,d=0,e=c.length;d<e;d++)b=c[d],b[2](a)})}},promise:{then:function(b,f,h){var m=e(),Q=function(d){try{m.resolve((N(b)?b:c)(d))}catch(e){m.reject(e),a(e)}},u=function(b){try{m.resolve((N(f)?f:d)(b))}catch(c){m.reject(c),a(c)}},I=function(b){try{m.notify((N(h)?h:c)(b))}catch(d){a(d)}};g?g.push([Q,u,I]):l.then(Q,u,I);return m.promise},"catch":function(a){return this.then(null,
a)},"finally":function(a){function b(a,c){var d=e();c?d.resolve(a):d.reject(a);return d.promise}function d(e,f){var g=null;try{g=(a||c)()}catch(h){return b(h,!1)}return g&&N(g.then)?g.then(function(){return b(e,f)},function(a){return b(a,!1)}):b(e,f)}return this.then(function(a){return d(a,!0)},function(a){return d(a,!1)})}}}},f=function(a){return a&&N(a.then)?a:{then:function(c){var d=e();b(function(){d.resolve(c(a))});return d.promise}}},g=function(a){var b=e();b.reject(a);return b.promise},h=function(c){return{then:function(f,
g){var h=e();b(function(){try{h.resolve((N(g)?g:d)(c))}catch(b){h.reject(b),a(b)}});return h.promise}}};return{defer:e,reject:g,when:function(h,l,m,p){var k=e(),t,w=function(b){try{return(N(l)?l:c)(b)}catch(d){return a(d),g(d)}},Q=function(b){try{return(N(m)?m:d)(b)}catch(c){return a(c),g(c)}},u=function(b){try{return(N(p)?p:c)(b)}catch(d){a(d)}};b(function(){f(h).then(function(a){t||(t=!0,k.resolve(f(a).then(w,Q,u)))},function(a){t||(t=!0,k.resolve(Q(a)))},function(a){t||k.notify(u(a))})});return k.promise},
all:function(a){var b=e(),c=0,d=L(a)?[]:{};q(a,function(a,e){c++;f(a).then(function(a){d.hasOwnProperty(e)||(d[e]=a,--c||b.resolve(d))},function(a){d.hasOwnProperty(e)||b.reject(a)})});0===c&&b.resolve(d);return b.promise}}}function ze(){this.$get=["$window","$timeout",function(b,a){var c=b.requestAnimationFrame||b.webkitRequestAnimationFrame||b.mozRequestAnimationFrame,d=b.cancelAnimationFrame||b.webkitCancelAnimationFrame||b.mozCancelAnimationFrame||b.webkitCancelRequestAnimationFrame,e=!!c,f=e?
function(a){var b=c(a);return function(){d(b)}}:function(b){var c=a(b,16.66,!1);return function(){a.cancel(c)}};f.supported=e;return f}]}function re(){var b=10,a=G("$rootScope"),c=null;this.digestTtl=function(a){arguments.length&&(b=a);return b};this.$get=["$injector","$exceptionHandler","$parse","$browser",function(d,e,f,g){function h(){this.$id=++pb;this.$$phase=this.$parent=this.$$watchers=this.$$nextSibling=this.$$prevSibling=this.$$childHead=this.$$childTail=null;this["this"]=this.$root=this;
this.$$destroyed=!1;this.$$asyncQueue=[];this.$$postDigestQueue=[];this.$$listeners={};this.$$listenerCount={};this.$$isolateBindings={}}function n(b){if(k.$$phase)throw a("inprog",k.$$phase);k.$$phase=b}function l(a,b){var c=f(a);Sa(c,b);return c}function m(a,b,c){do a.$$listenerCount[c]-=b,0===a.$$listenerCount[c]&&delete a.$$listenerCount[c];while(a=a.$parent)}function p(){}h.prototype={constructor:h,$new:function(a){a?(a=new h,a.$root=this.$root,a.$$asyncQueue=this.$$asyncQueue,a.$$postDigestQueue=
this.$$postDigestQueue):(this.$$childScopeClass||(this.$$childScopeClass=function(){this.$$watchers=this.$$nextSibling=this.$$childHead=this.$$childTail=null;this.$$listeners={};this.$$listenerCount={};this.$id=++pb;this.$$childScopeClass=null},this.$$childScopeClass.prototype=this),a=new this.$$childScopeClass);a["this"]=a;a.$parent=this;a.$$prevSibling=this.$$childTail;this.$$childHead?this.$$childTail=this.$$childTail.$$nextSibling=a:this.$$childHead=this.$$childTail=a;return a},$watch:function(a,
b,d){var e=l(a,"watch"),f=this.$$watchers,g={fn:b,last:p,get:e,exp:a,eq:!!d};c=null;if(!N(b)){var h=l(b||C,"listener");g.fn=function(a,b,c){h(c)}}f||(f=this.$$watchers=[]);f.unshift(g);return function(){Ea(f,g);c=null}},$watchGroup:function(a,b){function c(){return h}var d=Array(a.length),e=Array(a.length),g=[],h=0,k=this,n=Array(a.length),l=a.length;q(a,function(a,b){var c=f(a);g.push(k.$watch(c,function(a,f){e[b]=a;d[b]=f;h++;n[b]&&!c.$$unwatch&&l++;!n[b]&&c.$$unwatch&&l--;n[b]=c.$$unwatch}))},
this);g.push(k.$watch(c,function(){b(e,d,k);c.$$unwatch=0===l?!0:!1}));return function(){q(g,function(a){a()})}},$watchCollection:function(a,b){function c(){e=l(d);var a,b;if(P(e))if(gb(e))for(g!==m&&(g=m,B=g.length=0,n++),a=e.length,B!==a&&(n++,g.length=B=a),b=0;b<a;b++)g[b]!==g[b]&&e[b]!==e[b]||g[b]===e[b]||(n++,g[b]=e[b]);else{g!==p&&(g=p={},B=0,n++);a=0;for(b in e)e.hasOwnProperty(b)&&(a++,g.hasOwnProperty(b)?g[b]!==e[b]&&(n++,g[b]=e[b]):(B++,g[b]=e[b],n++));if(B>a)for(b in n++,g)g.hasOwnProperty(b)&&
!e.hasOwnProperty(b)&&(B--,delete g[b])}else g!==e&&(g=e,n++);c.$$unwatch=l.$$unwatch;return n}var d=this,e,g,h,k=1<b.length,n=0,l=f(a),m=[],p={},q=!0,B=0;return this.$watch(c,function(){q?(q=!1,b(e,e,d)):b(e,h,d);if(k)if(P(e))if(gb(e)){h=Array(e.length);for(var a=0;a<e.length;a++)h[a]=e[a]}else for(a in h={},e)Qc.call(e,a)&&(h[a]=e[a]);else h=e})},$digest:function(){var d,f,g,h,l=this.$$asyncQueue,m=this.$$postDigestQueue,q,x,s=b,M,R=[],r=[],z,B,F;n("$digest");c=null;do{x=!1;for(M=this;l.length;){try{F=
l.shift(),F.scope.$eval(F.expression)}catch(J){k.$$phase=null,e(J)}c=null}a:do{if(h=M.$$watchers)for(q=h.length;q--;)try{if(d=h[q])if((f=d.get(M))!==(g=d.last)&&!(d.eq?xa(f,g):"number"==typeof f&&"number"==typeof g&&isNaN(f)&&isNaN(g)))x=!0,c=d,d.last=d.eq?wa(f,null):f,d.fn(f,g===p?f:g,M),5>s&&(z=4-s,R[z]||(R[z]=[]),B=N(d.exp)?"fn: "+(d.exp.name||d.exp.toString()):d.exp,B+="; newVal: "+pa(f)+"; oldVal: "+pa(g),R[z].push(B)),d.get.$$unwatch&&r.push({watch:d,array:h});else if(d===c){x=!1;break a}}catch(E){k.$$phase=
null,e(E)}if(!(q=M.$$childHead||M!==this&&M.$$nextSibling))for(;M!==this&&!(q=M.$$nextSibling);)M=M.$parent}while(M=q);if((x||l.length)&&!s--)throw k.$$phase=null,a("infdig",b,pa(R));}while(x||l.length);for(k.$$phase=null;m.length;)try{m.shift()()}catch(v){e(v)}for(q=r.length-1;0<=q;--q)d=r[q],d.watch.get.$$unwatch&&Ea(d.array,d.watch)},$destroy:function(){if(!this.$$destroyed){var a=this.$parent;this.$broadcast("$destroy");this.$$destroyed=!0;this!==k&&(q(this.$$listenerCount,Cb(null,m,this)),a.$$childHead==
this&&(a.$$childHead=this.$$nextSibling),a.$$childTail==this&&(a.$$childTail=this.$$prevSibling),this.$$prevSibling&&(this.$$prevSibling.$$nextSibling=this.$$nextSibling),this.$$nextSibling&&(this.$$nextSibling.$$prevSibling=this.$$prevSibling),this.$parent=this.$$nextSibling=this.$$prevSibling=this.$$childHead=this.$$childTail=this.$root=null,this.$$listeners={},this.$$watchers=this.$$asyncQueue=this.$$postDigestQueue=[],this.$destroy=this.$digest=this.$apply=C,this.$on=this.$watch=this.$watchGroup=
function(){return C})}},$eval:function(a,b){return f(a)(this,b)},$evalAsync:function(a){k.$$phase||k.$$asyncQueue.length||g.defer(function(){k.$$asyncQueue.length&&k.$digest()});this.$$asyncQueue.push({scope:this,expression:a})},$$postDigest:function(a){this.$$postDigestQueue.push(a)},$apply:function(a){try{return n("$apply"),this.$eval(a)}catch(b){e(b)}finally{k.$$phase=null;try{k.$digest()}catch(c){throw e(c),c;}}},$on:function(a,b){var c=this.$$listeners[a];c||(this.$$listeners[a]=c=[]);c.push(b);
var d=this;do d.$$listenerCount[a]||(d.$$listenerCount[a]=0),d.$$listenerCount[a]++;while(d=d.$parent);var e=this;return function(){c[Oa(c,b)]=null;m(e,1,a)}},$emit:function(a,b){var c=[],d,f=this,g=!1,h={name:a,targetScope:f,stopPropagation:function(){g=!0},preventDefault:function(){h.defaultPrevented=!0},defaultPrevented:!1},k=[h].concat(oa.call(arguments,1)),n,l;do{d=f.$$listeners[a]||c;h.currentScope=f;n=0;for(l=d.length;n<l;n++)if(d[n])try{d[n].apply(null,k)}catch(m){e(m)}else d.splice(n,1),
n--,l--;if(g)return h.currentScope=null,h;f=f.$parent}while(f);h.currentScope=null;return h},$broadcast:function(a,b){for(var c=this,d=this,f={name:a,targetScope:this,preventDefault:function(){f.defaultPrevented=!0},defaultPrevented:!1},g=[f].concat(oa.call(arguments,1)),h,k;c=d;){f.currentScope=c;d=c.$$listeners[a]||[];h=0;for(k=d.length;h<k;h++)if(d[h])try{d[h].apply(null,g)}catch(n){e(n)}else d.splice(h,1),h--,k--;if(!(d=c.$$listenerCount[a]&&c.$$childHead||c!==this&&c.$$nextSibling))for(;c!==
this&&!(d=c.$$nextSibling);)c=c.$parent}f.currentScope=null;return f}};var k=new h;return k}]}function ud(){var b=/^\s*(https?|ftp|mailto|tel|file):/,a=/^\s*(https?|ftp|file|blob):|data:image\//;this.aHrefSanitizationWhitelist=function(a){return F(a)?(b=a,this):b};this.imgSrcSanitizationWhitelist=function(b){return F(b)?(a=b,this):a};this.$get=function(){return function(c,d){var e=d?a:b,f;if(!U||8<=U)if(f=sa(c).href,""!==f&&!f.match(e))return"unsafe:"+f;return c}}}function Ye(b){if("self"===b)return b;
if(E(b)){if(-1<b.indexOf("***"))throw ta("iwcard",b);b=b.replace(/([-()\[\]{}+?*.$\^|,:#<!\\])/g,"\\$1").replace(/\x08/g,"\\x08").replace("\\*\\*",".*").replace("\\*","[^:/.?&;]*");return RegExp("^"+b+"$")}if(hb(b))return RegExp("^"+b.source+"$");throw ta("imatcher");}function Rc(b){var a=[];F(b)&&q(b,function(b){a.push(Ye(b))});return a}function ue(){this.SCE_CONTEXTS=fa;var b=["self"],a=[];this.resourceUrlWhitelist=function(a){arguments.length&&(b=Rc(a));return b};this.resourceUrlBlacklist=function(b){arguments.length&&
(a=Rc(b));return a};this.$get=["$injector",function(c){function d(a){var b=function(a){this.$$unwrapTrustedValue=function(){return a}};a&&(b.prototype=new a);b.prototype.valueOf=function(){return this.$$unwrapTrustedValue()};b.prototype.toString=function(){return this.$$unwrapTrustedValue().toString()};return b}var e=function(a){throw ta("unsafe");};c.has("$sanitize")&&(e=c.get("$sanitize"));var f=d(),g={};g[fa.HTML]=d(f);g[fa.CSS]=d(f);g[fa.URL]=d(f);g[fa.JS]=d(f);g[fa.RESOURCE_URL]=d(g[fa.URL]);
return{trustAs:function(a,b){var c=g.hasOwnProperty(a)?g[a]:null;if(!c)throw ta("icontext",a,b);if(null===b||b===s||""===b)return b;if("string"!==typeof b)throw ta("itype",a);return new c(b)},getTrusted:function(c,d){if(null===d||d===s||""===d)return d;var f=g.hasOwnProperty(c)?g[c]:null;if(f&&d instanceof f)return d.$$unwrapTrustedValue();if(c===fa.RESOURCE_URL){var f=sa(d.toString()),m,p,k=!1;m=0;for(p=b.length;m<p;m++)if("self"===b[m]?Nb(f):b[m].exec(f.href)){k=!0;break}if(k)for(m=0,p=a.length;m<
p;m++)if("self"===a[m]?Nb(f):a[m].exec(f.href)){k=!1;break}if(k)return d;throw ta("insecurl",d.toString());}if(c===fa.HTML)return e(d);throw ta("unsafe");},valueOf:function(a){return a instanceof f?a.$$unwrapTrustedValue():a}}}]}function te(){var b=!0;this.enabled=function(a){arguments.length&&(b=!!a);return b};this.$get=["$parse","$sniffer","$sceDelegate",function(a,c,d){if(b&&c.msie&&8>c.msieDocumentMode)throw ta("iequirks");var e=ia(fa);e.isEnabled=function(){return b};e.trustAs=d.trustAs;e.getTrusted=
d.getTrusted;e.valueOf=d.valueOf;b||(e.trustAs=e.getTrusted=function(a,b){return b},e.valueOf=Ca);e.parseAs=function(b,c){var d=a(c);return d.literal&&d.constant?d:function k(a,c){var f=e.getTrusted(b,d(a,c));k.$$unwatch=d.$$unwatch;return f}};var f=e.parseAs,g=e.getTrusted,h=e.trustAs;q(fa,function(a,b){var c=r(b);e[Ua("parse_as_"+c)]=function(b){return f(a,b)};e[Ua("get_trusted_"+c)]=function(b){return g(a,b)};e[Ua("trust_as_"+c)]=function(b){return h(a,b)}});return e}]}function ve(){this.$get=
["$window","$document",function(b,a){var c={},d=X((/android (\d+)/.exec(r((b.navigator||{}).userAgent))||[])[1]),e=/Boxee/i.test((b.navigator||{}).userAgent),f=a[0]||{},g=f.documentMode,h,n=/^(Moz|webkit|O|ms)(?=[A-Z])/,l=f.body&&f.body.style,m=!1,p=!1;if(l){for(var k in l)if(m=n.exec(k)){h=m[0];h=h.substr(0,1).toUpperCase()+h.substr(1);break}h||(h="WebkitOpacity"in l&&"webkit");m=!!("transition"in l||h+"Transition"in l);p=!!("animation"in l||h+"Animation"in l);!d||m&&p||(m=E(f.body.style.webkitTransition),
p=E(f.body.style.webkitAnimation))}return{history:!(!b.history||!b.history.pushState||4>d||e),hashchange:"onhashchange"in b&&(!g||7<g),hasEvent:function(a){if("input"==a&&9==U)return!1;if(y(c[a])){var b=f.createElement("div");c[a]="on"+a in b}return c[a]},csp:ac(),vendorPrefix:h,transitions:m,animations:p,android:d,msie:U,msieDocumentMode:g}}]}function xe(){this.$get=["$rootScope","$browser","$q","$exceptionHandler",function(b,a,c,d){function e(e,h,n){var l=c.defer(),m=l.promise,p=F(n)&&!n;h=a.defer(function(){try{l.resolve(e())}catch(a){l.reject(a),
d(a)}finally{delete f[m.$$timeoutId]}p||b.$apply()},h);m.$$timeoutId=h;f[h]=l;return m}var f={};e.cancel=function(b){return b&&b.$$timeoutId in f?(f[b.$$timeoutId].reject("canceled"),delete f[b.$$timeoutId],a.defer.cancel(b.$$timeoutId)):!1};return e}]}function sa(b,a){var c=b;U&&(aa.setAttribute("href",c),c=aa.href);aa.setAttribute("href",c);return{href:aa.href,protocol:aa.protocol?aa.protocol.replace(/:$/,""):"",host:aa.host,search:aa.search?aa.search.replace(/^\?/,""):"",hash:aa.hash?aa.hash.replace(/^#/,
""):"",hostname:aa.hostname,port:aa.port,pathname:"/"===aa.pathname.charAt(0)?aa.pathname:"/"+aa.pathname}}function Nb(b){b=E(b)?sa(b):b;return b.protocol===Sc.protocol&&b.host===Sc.host}function ye(){this.$get=ca(K)}function oc(b){function a(d,e){if(P(d)){var f={};q(d,function(b,c){f[c]=a(c,b)});return f}return b.factory(d+c,e)}var c="Filter";this.register=a;this.$get=["$injector",function(a){return function(b){return a.get(b+c)}}];a("currency",Tc);a("date",Uc);a("filter",Ze);a("json",$e);a("limitTo",
af);a("lowercase",bf);a("number",Vc);a("orderBy",Wc);a("uppercase",cf)}function Ze(){return function(b,a,c){if(!L(b))return b;var d=typeof c,e=[];e.check=function(a){for(var b=0;b<e.length;b++)if(!e[b](a))return!1;return!0};"function"!==d&&(c="boolean"===d&&c?function(a,b){return Ra.equals(a,b)}:function(a,b){if(a&&b&&"object"===typeof a&&"object"===typeof b){for(var d in a)if("$"!==d.charAt(0)&&Qc.call(a,d)&&c(a[d],b[d]))return!0;return!1}b=(""+b).toLowerCase();return-1<(""+a).toLowerCase().indexOf(b)});
var f=function(a,b){if("string"==typeof b&&"!"===b.charAt(0))return!f(a,b.substr(1));switch(typeof a){case "boolean":case "number":case "string":return c(a,b);case "object":switch(typeof b){case "object":return c(a,b);default:for(var d in a)if("$"!==d.charAt(0)&&f(a[d],b))return!0}return!1;case "array":for(d=0;d<a.length;d++)if(f(a[d],b))return!0;return!1;default:return!1}};switch(typeof a){case "boolean":case "number":case "string":a={$:a};case "object":for(var g in a)(function(b){"undefined"!=typeof a[b]&&
e.push(function(c){return f("$"==b?c:c&&c[b],a[b])})})(g);break;case "function":e.push(a);break;default:return b}d=[];for(g=0;g<b.length;g++){var h=b[g];e.check(h)&&d.push(h)}return d}}function Tc(b){var a=b.NUMBER_FORMATS;return function(b,d){y(d)&&(d=a.CURRENCY_SYM);return Xc(b,a.PATTERNS[1],a.GROUP_SEP,a.DECIMAL_SEP,2).replace(/\u00A4/g,d)}}function Vc(b){var a=b.NUMBER_FORMATS;return function(b,d){return Xc(b,a.PATTERNS[0],a.GROUP_SEP,a.DECIMAL_SEP,d)}}function Xc(b,a,c,d,e){if(null==b||!isFinite(b)||
P(b))return"";var f=0>b;b=Math.abs(b);var g=b+"",h="",n=[],l=!1;if(-1!==g.indexOf("e")){var m=g.match(/([\d\.]+)e(-?)(\d+)/);m&&"-"==m[2]&&m[3]>e+1?g="0":(h=g,l=!0)}if(l)0<e&&(-1<b&&1>b)&&(h=b.toFixed(e));else{g=(g.split(Yc)[1]||"").length;y(e)&&(e=Math.min(Math.max(a.minFrac,g),a.maxFrac));g=Math.pow(10,e+1);b=Math.floor(b*g+5)/g;b=(""+b).split(Yc);g=b[0];b=b[1]||"";var m=0,p=a.lgSize,k=a.gSize;if(g.length>=p+k)for(m=g.length-p,l=0;l<m;l++)0===(m-l)%k&&0!==l&&(h+=c),h+=g.charAt(l);for(l=m;l<g.length;l++)0===
(g.length-l)%p&&0!==l&&(h+=c),h+=g.charAt(l);for(;b.length<e;)b+="0";e&&"0"!==e&&(h+=d+b.substr(0,e))}n.push(f?a.negPre:a.posPre);n.push(h);n.push(f?a.negSuf:a.posSuf);return n.join("")}function vb(b,a,c){var d="";0>b&&(d="-",b=-b);for(b=""+b;b.length<a;)b="0"+b;c&&(b=b.substr(b.length-a));return d+b}function ba(b,a,c,d){c=c||0;return function(e){e=e["get"+b]();if(0<c||e>-c)e+=c;0===e&&-12==c&&(e=12);return vb(e,a,d)}}function wb(b,a){return function(c,d){var e=c["get"+b](),f=Ga(a?"SHORT"+b:b);return d[f][e]}}
function Zc(b){var a=(new Date(b,0,1)).getDay();return new Date(b,0,(4>=a?5:12)-a)}function $c(b){return function(a){var c=Zc(a.getFullYear());a=+new Date(a.getFullYear(),a.getMonth(),a.getDate()+(4-a.getDay()))-+c;a=1+Math.round(a/6048E5);return vb(a,b)}}function Uc(b){function a(a){var b;if(b=a.match(c)){a=new Date(0);var f=0,g=0,h=b[8]?a.setUTCFullYear:a.setFullYear,n=b[8]?a.setUTCHours:a.setHours;b[9]&&(f=X(b[9]+b[10]),g=X(b[9]+b[11]));h.call(a,X(b[1]),X(b[2])-1,X(b[3]));f=X(b[4]||0)-f;g=X(b[5]||
0)-g;h=X(b[6]||0);b=Math.round(1E3*parseFloat("0."+(b[7]||0)));n.call(a,f,g,h,b)}return a}var c=/^(\d{4})-?(\d\d)-?(\d\d)(?:T(\d\d)(?::?(\d\d)(?::?(\d\d)(?:\.(\d+))?)?)?(Z|([+-])(\d\d):?(\d\d))?)?$/;return function(c,e){var f="",g=[],h,n;e=e||"mediumDate";e=b.DATETIME_FORMATS[e]||e;E(c)&&(c=df.test(c)?X(c):a(c));Da(c)&&(c=new Date(c));if(!na(c))return c;for(;e;)(n=ef.exec(e))?(g=g.concat(oa.call(n,1)),e=g.pop()):(g.push(e),e=null);q(g,function(a){h=ff[a];f+=h?h(c,b.DATETIME_FORMATS):a.replace(/(^'|'$)/g,
"").replace(/''/g,"'")});return f}}function $e(){return function(b){return pa(b,!0)}}function af(){return function(b,a){if(!L(b)&&!E(b))return b;a=Infinity===Math.abs(Number(a))?Number(a):X(a);if(E(b))return a?0<=a?b.slice(0,a):b.slice(a,b.length):"";var c=[],d,e;a>b.length?a=b.length:a<-b.length&&(a=-b.length);0<a?(d=0,e=a):(d=b.length+a,e=b.length);for(;d<e;d++)c.push(b[d]);return c}}function Wc(b){return function(a,c,d){function e(a,b){return Qa(b)?function(b,c){return a(c,b)}:a}function f(a,b){var c=
typeof a,d=typeof b;return c==d?("string"==c&&(a=a.toLowerCase(),b=b.toLowerCase()),a===b?0:a<b?-1:1):c<d?-1:1}if(!L(a)||!c)return a;c=L(c)?c:[c];c=kd(c,function(a){var c=!1,d=a||Ca;if(E(a)){if("+"==a.charAt(0)||"-"==a.charAt(0))c="-"==a.charAt(0),a=a.substring(1);d=b(a);if(d.constant){var g=d();return e(function(a,b){return f(a[g],b[g])},c)}}return e(function(a,b){return f(d(a),d(b))},c)});for(var g=[],h=0;h<a.length;h++)g.push(a[h]);return g.sort(e(function(a,b){for(var d=0;d<c.length;d++){var e=
c[d](a,b);if(0!==e)return e}return 0},d))}}function ua(b){N(b)&&(b={link:b});b.restrict=b.restrict||"AC";return ca(b)}function ad(b,a,c,d){function e(a,c){c=c?"-"+jb(c,"-"):"";d.removeClass(b,(a?xb:yb)+c);d.addClass(b,(a?yb:xb)+c)}var f=this,g=b.parent().controller("form")||zb,h=0,n=f.$error={},l=[];f.$name=a.name||a.ngForm;f.$dirty=!1;f.$pristine=!0;f.$valid=!0;f.$invalid=!1;g.$addControl(f);b.addClass(Ma);e(!0);f.$commitViewValue=function(){q(l,function(a){a.$commitViewValue()})};f.$addControl=
function(a){za(a.$name,"input");l.push(a);a.$name&&(f[a.$name]=a)};f.$removeControl=function(a){a.$name&&f[a.$name]===a&&delete f[a.$name];q(n,function(b,c){f.$setValidity(c,!0,a)});Ea(l,a)};f.$setValidity=function(a,b,c){var d=n[a];if(b)d&&(Ea(d,c),d.length||(h--,h||(e(b),f.$valid=!0,f.$invalid=!1),n[a]=!1,e(!0,a),g.$setValidity(a,!0,f)));else{h||e(b);if(d){if(-1!=Oa(d,c))return}else n[a]=d=[],h++,e(!1,a),g.$setValidity(a,!1,f);d.push(c);f.$valid=!1;f.$invalid=!0}};f.$setDirty=function(){d.removeClass(b,
Ma);d.addClass(b,Ab);f.$dirty=!0;f.$pristine=!1;g.$setDirty()};f.$setPristine=function(){d.removeClass(b,Ab);d.addClass(b,Ma);f.$dirty=!1;f.$pristine=!0;q(l,function(a){a.$setPristine()})}}function cb(b,a,c,d){b.$setValidity(a,c);return c?d:s}function gf(b,a,c){var d=c.prop("validity");P(d)&&b.$parsers.push(function(c){if(b.$error[a]||!(d.badInput||d.customError||d.typeMismatch)||d.valueMissing)return c;b.$setValidity(a,!1)})}function db(b,a,c,d,e,f){var g=a.prop("validity"),h=a[0].placeholder,n=
{};if(!e.android){var l=!1;a.on("compositionstart",function(a){l=!0});a.on("compositionend",function(){l=!1;m()})}var m=function(e){if(!l){var f=a.val(),k=e&&e.type;if(U&&"input"===(e||n).type&&a[0].placeholder!==h)h=a[0].placeholder;else if(Qa(c.ngTrim||"T")&&(f=$(f)),d.$viewValue!==f||g&&""===f&&!g.valueMissing)b.$$phase?d.$setViewValue(f,k):b.$apply(function(){d.$setViewValue(f,k)})}};if(e.hasEvent("input"))a.on("input",m);else{var p,k=function(a){p||(p=f.defer(function(){m(a);p=null}))};a.on("keydown",
function(a){var b=a.keyCode;91===b||(15<b&&19>b||37<=b&&40>=b)||k(a)});if(e.hasEvent("paste"))a.on("paste cut",k)}a.on("change",m);d.$render=function(){a.val(d.$isEmpty(d.$viewValue)?"":d.$viewValue)}}function Bb(b,a){return function(c){var d;return na(c)?c:E(c)&&(b.lastIndex=0,c=b.exec(c))?(c.shift(),d={yyyy:0,MM:1,dd:1,HH:0,mm:0},q(c,function(b,c){c<a.length&&(d[a[c]]=+b)}),new Date(d.yyyy,d.MM-1,d.dd,d.HH,d.mm)):NaN}}function eb(b,a,c,d){return function(e,f,g,h,n,l,m){db(e,f,g,h,n,l);h.$parsers.push(function(d){if(h.$isEmpty(d))return h.$setValidity(b,
!0),null;if(a.test(d))return h.$setValidity(b,!0),c(d);h.$setValidity(b,!1);return s});h.$formatters.push(function(a){return na(a)?m("date")(a,d):""});g.min&&(e=function(a){var b=h.$isEmpty(a)||c(a)>=c(g.min);h.$setValidity("min",b);return b?a:s},h.$parsers.push(e),h.$formatters.push(e));g.max&&(e=function(a){var b=h.$isEmpty(a)||c(a)<=c(g.max);h.$setValidity("max",b);return b?a:s},h.$parsers.push(e),h.$formatters.push(e))}}function Vb(b,a){b="ngClass"+b;return["$animate",function(c){function d(a,
b){var c=[],d=0;a:for(;d<a.length;d++){for(var e=a[d],m=0;m<b.length;m++)if(e==b[m])continue a;c.push(e)}return c}function e(a){if(!L(a)){if(E(a))return a.split(" ");if(P(a)){var b=[];q(a,function(a,c){a&&(b=b.concat(c.split(" ")))});return b}}return a}return{restrict:"AC",link:function(f,g,h){function n(a,b){var c=g.data("$classCounts")||{},d=[];q(a,function(a){if(0<b||c[a])c[a]=(c[a]||0)+b,c[a]===+(0<b)&&d.push(a)});g.data("$classCounts",c);return d.join(" ")}function l(b){if(!0===a||f.$index%2===
a){var k=e(b||[]);if(!m){var l=n(k,1);h.$addClass(l)}else if(!xa(b,m)){var q=e(m),l=d(k,q),k=d(q,k),k=n(k,-1),l=n(l,1);0===l.length?c.removeClass(g,k):0===k.length?c.addClass(g,l):c.setClass(g,l,k)}}m=ia(b)}var m;f.$watch(h[b],l,!0);h.$observe("class",function(a){l(f.$eval(h[b]))});"ngClass"!==b&&f.$watch("$index",function(c,d){var g=c&1;if(g!==(d&1)){var l=e(f.$eval(h[b]));g===a?(g=n(l,1),h.$addClass(g)):(g=n(l,-1),h.$removeClass(g))}})}}}]}var hf=/^\/(.+)\/([a-z]*)$/,r=function(b){return E(b)?b.toLowerCase():
b},Qc=Object.prototype.hasOwnProperty,Ga=function(b){return E(b)?b.toUpperCase():b},U,z,qa,oa=[].slice,tc=[].push,va=Object.prototype.toString,Pa=G("ng"),Ra=K.angular||(K.angular={}),Ta,Ka,pb=0;U=X((/msie (\d+)/.exec(r(navigator.userAgent))||[])[1]);isNaN(U)&&(U=X((/trident\/.*; rv:(\d+)/.exec(r(navigator.userAgent))||[])[1]));C.$inject=[];Ca.$inject=[];var L=function(){return N(Array.isArray)?Array.isArray:function(b){return"[object Array]"===va.call(b)}}(),$=function(){return String.prototype.trim?
function(b){return E(b)?b.trim():b}:function(b){return E(b)?b.replace(/^\s\s*/,"").replace(/\s\s*$/,""):b}}();Ka=9>U?function(b){b=b.nodeName?b:b[0];return b.scopeName&&"HTML"!=b.scopeName?Ga(b.scopeName+":"+b.nodeName):b.nodeName}:function(b){return b.nodeName?b.nodeName:b[0].nodeName};var ec=["ng-","data-ng-","ng:","x-ng-"],od=/[A-Z]/g,sd={full:"1.3.0-beta.13",major:1,minor:3,dot:0,codeName:"idiosyncratic-numerification"};O.expando="ng339";var Wa=O.cache={},He=1,sb=K.document.addEventListener?function(b,
a,c){b.addEventListener(a,c,!1)}:function(b,a,c){b.attachEvent("on"+a,c)},Va=K.document.removeEventListener?function(b,a,c){b.removeEventListener(a,c,!1)}:function(b,a,c){b.detachEvent("on"+a,c)};O._data=function(b){return this.cache[b[this.expando]]||{}};var Be=/([\:\-\_]+(.))/g,Ce=/^moz([A-Z])/,Ib=G("jqLite"),Ge=/^<(\w+)\s*\/?>(?:<\/\1>|)$/,Hb=/<|&#?\w+;/,Ee=/<([\w:]+)/,Fe=/<(?!area|br|col|embed|hr|img|input|link|meta|param)(([\w:]+)[^>]*)\/>/gi,da={option:[1,'<select multiple="multiple">',"</select>"],
thead:[1,"<table>","</table>"],col:[2,"<table><colgroup>","</colgroup></table>"],tr:[2,"<table><tbody>","</tbody></table>"],td:[3,"<table><tbody><tr>","</tr></tbody></table>"],_default:[0,"",""]};da.optgroup=da.option;da.tbody=da.tfoot=da.colgroup=da.caption=da.thead;da.th=da.td;var Fa=O.prototype={ready:function(b){function a(){c||(c=!0,b())}var c=!1;"complete"===T.readyState?setTimeout(a):(this.on("DOMContentLoaded",a),O(K).on("load",a))},toString:function(){var b=[];q(this,function(a){b.push(""+
a)});return"["+b.join(", ")+"]"},eq:function(b){return 0<=b?z(this[b]):z(this[this.length+b])},length:0,push:tc,sort:[].sort,splice:[].splice},ob={};q("multiple selected checked disabled readOnly required open".split(" "),function(b){ob[r(b)]=b});var xc={};q("input select option textarea button form details".split(" "),function(b){xc[Ga(b)]=!0});var yc={ngMinlength:"minlength",ngMaxlength:"maxlength",ngPattern:"pattern"};q({data:sc,inheritedData:nb,scope:function(b){return z(b).data("$scope")||nb(b.parentNode||
b,["$isolateScope","$scope"])},isolateScope:function(b){return z(b).data("$isolateScope")||z(b).data("$isolateScopeNoTemplate")},controller:uc,injector:function(b){return nb(b,"$injector")},removeAttr:function(b,a){b.removeAttribute(a)},hasClass:Kb,css:function(b,a,c){a=Ua(a);if(F(c))b.style[a]=c;else{var d;8>=U&&(d=b.currentStyle&&b.currentStyle[a],""===d&&(d="auto"));d=d||b.style[a];8>=U&&(d=""===d?s:d);return d}},attr:function(b,a,c){var d=r(a);if(ob[d])if(F(c))c?(b[a]=!0,b.setAttribute(a,d)):
(b[a]=!1,b.removeAttribute(d));else return b[a]||(b.attributes.getNamedItem(a)||C).specified?d:s;else if(F(c))b.setAttribute(a,c);else if(b.getAttribute)return b=b.getAttribute(a,2),null===b?s:b},prop:function(b,a,c){if(F(c))b[a]=c;else return b[a]},text:function(){function b(a,b){if(y(b)){var d=a.nodeType;return 1===d||3===d?a.textContent:""}a.textContent=b}b.$dv="";return b}(),val:function(b,a){if(y(a)){if("SELECT"===Ka(b)&&b.multiple){var c=[];q(b.options,function(a){a.selected&&c.push(a.value||
a.text)});return 0===c.length?null:c}return b.value}b.value=a},html:function(b,a){if(y(a))return b.innerHTML;for(var c=0,d=b.childNodes;c<d.length;c++)Ha(d[c]);b.innerHTML=a},empty:vc},function(b,a){O.prototype[a]=function(a,d){var e,f,g=this.length;if(b!==vc&&(2==b.length&&b!==Kb&&b!==uc?a:d)===s){if(P(a)){for(e=0;e<g;e++)if(b===sc)b(this[e],a);else for(f in a)b(this[e],f,a[f]);return this}e=b.$dv;g=e===s?Math.min(g,1):g;for(f=0;f<g;f++){var h=b(this[f],a,d);e=e?e+h:h}return e}for(e=0;e<g;e++)b(this[e],
a,d);return this}});q({removeData:qc,dealoc:Ha,on:function a(c,d,e,f){if(F(f))throw Ib("onargs");var g=ja(c,"events"),h=ja(c,"handle");g||ja(c,"events",g={});h||ja(c,"handle",h=Je(c,g));q(d.split(" "),function(d){var f=g[d];if(!f){if("mouseenter"==d||"mouseleave"==d){var m=T.body.contains||T.body.compareDocumentPosition?function(a,c){var d=9===a.nodeType?a.documentElement:a,e=c&&c.parentNode;return a===e||!!(e&&1===e.nodeType&&(d.contains?d.contains(e):a.compareDocumentPosition&&a.compareDocumentPosition(e)&
16))}:function(a,c){if(c)for(;c=c.parentNode;)if(c===a)return!0;return!1};g[d]=[];a(c,{mouseleave:"mouseout",mouseenter:"mouseover"}[d],function(a){var c=a.relatedTarget;c&&(c===this||m(this,c))||h(a,d)})}else sb(c,d,h),g[d]=[];f=g[d]}f.push(e)})},off:rc,one:function(a,c,d){a=z(a);a.on(c,function f(){a.off(c,d);a.off(c,f)});a.on(c,d)},replaceWith:function(a,c){var d,e=a.parentNode;Ha(a);q(new O(c),function(c){d?e.insertBefore(c,d.nextSibling):e.replaceChild(c,a);d=c})},children:function(a){var c=
[];q(a.childNodes,function(a){1===a.nodeType&&c.push(a)});return c},contents:function(a){return a.contentDocument||a.childNodes||[]},append:function(a,c){q(new O(c),function(c){1!==a.nodeType&&11!==a.nodeType||a.appendChild(c)})},prepend:function(a,c){if(1===a.nodeType){var d=a.firstChild;q(new O(c),function(c){a.insertBefore(c,d)})}},wrap:function(a,c){c=z(c)[0];var d=a.parentNode;d&&d.replaceChild(c,a);c.appendChild(a)},remove:function(a){Ha(a);var c=a.parentNode;c&&c.removeChild(a)},after:function(a,
c){var d=a,e=a.parentNode;q(new O(c),function(a){e.insertBefore(a,d.nextSibling);d=a})},addClass:mb,removeClass:lb,toggleClass:function(a,c,d){c&&q(c.split(" "),function(c){var f=d;y(f)&&(f=!Kb(a,c));(f?mb:lb)(a,c)})},parent:function(a){return(a=a.parentNode)&&11!==a.nodeType?a:null},next:function(a){if(a.nextElementSibling)return a.nextElementSibling;for(a=a.nextSibling;null!=a&&1!==a.nodeType;)a=a.nextSibling;return a},find:function(a,c){return a.getElementsByTagName?a.getElementsByTagName(c):[]},
clone:Jb,triggerHandler:function(a,c,d){c=(ja(a,"events")||{})[c];d=d||[];var e=[{preventDefault:C,stopPropagation:C}];q(c,function(c){c.apply(a,e.concat(d))})}},function(a,c){O.prototype[c]=function(c,e,f){for(var g,h=0;h<this.length;h++)y(g)?(g=a(this[h],c,e,f),F(g)&&(g=z(g))):pc(g,a(this[h],c,e,f));return F(g)?g:this};O.prototype.bind=O.prototype.on;O.prototype.unbind=O.prototype.off});Xa.prototype={put:function(a,c){this[Ia(a)]=c},get:function(a){return this[Ia(a)]},remove:function(a){var c=this[a=
Ia(a)];delete this[a];return c}};var Ac=/^function\s*[^\(]*\(\s*([^\)]*)\)/m,Le=/,/,Me=/^\s*(_?)(\S+?)\1\s*$/,zc=/((\/\/.*$)|(\/\*[\s\S]*?\*\/))/mg,Ja=G("$injector");Eb.$$annotate=Lb;var jf=G("$animate"),ee=["$provide",function(a){this.$$selectors={};this.register=function(c,d){var e=c+"-animation";if(c&&"."!=c.charAt(0))throw jf("notcsel",c);this.$$selectors[c.substr(1)]=e;a.factory(e,d)};this.classNameFilter=function(a){1===arguments.length&&(this.$$classNameFilter=a instanceof RegExp?a:null);return this.$$classNameFilter};
this.$get=["$timeout","$$asyncCallback",function(a,d){return{enter:function(a,c,g,h){g?g.after(a):c.prepend(a);h&&d(h)},leave:function(a,c){a.remove();c&&d(c)},move:function(a,c,d,h){this.enter(a,c,d,h)},addClass:function(a,c,g){c=E(c)?c:L(c)?c.join(" "):"";q(a,function(a){mb(a,c)});g&&d(g)},removeClass:function(a,c,g){c=E(c)?c:L(c)?c.join(" "):"";q(a,function(a){lb(a,c)});g&&d(g)},setClass:function(a,c,g,h){q(a,function(a){mb(a,c);lb(a,g)});h&&d(h)},enabled:C}}]}],ha=G("$compile");hc.$inject=["$provide",
"$$sanitizeUriProvider"];var Re=/^(x[\:\-_]|data[\:\-_])/i,Jc=G("$interpolate"),kf=/^([^\?#]*)(\?([^#]*))?(#(.*))?$/,Ue={http:80,https:443,ftp:21},Qb=G("$location");Sb.prototype=Rb.prototype=Mc.prototype={$$html5:!1,$$replace:!1,absUrl:tb("$$absUrl"),url:function(a,c){if(y(a))return this.$$url;var d=kf.exec(a);d[1]&&this.path(decodeURIComponent(d[1]));(d[2]||d[1])&&this.search(d[3]||"");this.hash(d[5]||"",c);return this},protocol:tb("$$protocol"),host:tb("$$host"),port:tb("$$port"),path:Nc("$$path",
function(a){return"/"==a.charAt(0)?a:"/"+a}),search:function(a,c){switch(arguments.length){case 0:return this.$$search;case 1:if(E(a))this.$$search=dc(a);else if(P(a))this.$$search=a;else throw Qb("isrcharg");break;default:y(c)||null===c?delete this.$$search[a]:this.$$search[a]=c}this.$$compose();return this},hash:Nc("$$hash",Ca),replace:function(){this.$$replace=!0;return this}};var Ba=G("$parse"),fb={"null":function(){return null},"true":function(){return!0},"false":function(){return!1},undefined:C,
"+":function(a,c,d,e){d=d(a,c);e=e(a,c);return F(d)?F(e)?d+e:d:F(e)?e:s},"-":function(a,c,d,e){d=d(a,c);e=e(a,c);return(F(d)?d:0)-(F(e)?e:0)},"*":function(a,c,d,e){return d(a,c)*e(a,c)},"/":function(a,c,d,e){return d(a,c)/e(a,c)},"%":function(a,c,d,e){return d(a,c)%e(a,c)},"^":function(a,c,d,e){return d(a,c)^e(a,c)},"=":C,"===":function(a,c,d,e){return d(a,c)===e(a,c)},"!==":function(a,c,d,e){return d(a,c)!==e(a,c)},"==":function(a,c,d,e){return d(a,c)==e(a,c)},"!=":function(a,c,d,e){return d(a,c)!=
e(a,c)},"<":function(a,c,d,e){return d(a,c)<e(a,c)},">":function(a,c,d,e){return d(a,c)>e(a,c)},"<=":function(a,c,d,e){return d(a,c)<=e(a,c)},">=":function(a,c,d,e){return d(a,c)>=e(a,c)},"&&":function(a,c,d,e){return d(a,c)&&e(a,c)},"||":function(a,c,d,e){return d(a,c)||e(a,c)},"&":function(a,c,d,e){return d(a,c)&e(a,c)},"|":function(a,c,d,e){return e(a,c)(a,c,d(a,c))},"!":function(a,c,d){return!d(a,c)}},lf={n:"\n",f:"\f",r:"\r",t:"\t",v:"\v","'":"'",'"':'"'},Ub=function(a){this.options=a};Ub.prototype=
{constructor:Ub,lex:function(a){this.text=a;this.index=0;this.ch=s;for(this.tokens=[];this.index<this.text.length;)if(this.ch=this.text.charAt(this.index),this.is("\"'"))this.readString(this.ch);else if(this.isNumber(this.ch)||this.is(".")&&this.isNumber(this.peek()))this.readNumber();else if(this.isIdent(this.ch))this.readIdent();else if(this.is("(){}[].,;:?"))this.tokens.push({index:this.index,text:this.ch}),this.index++;else if(this.isWhitespace(this.ch))this.index++;else{a=this.ch+this.peek();
var c=a+this.peek(2),d=fb[this.ch],e=fb[a],f=fb[c];f?(this.tokens.push({index:this.index,text:c,fn:f}),this.index+=3):e?(this.tokens.push({index:this.index,text:a,fn:e}),this.index+=2):d?(this.tokens.push({index:this.index,text:this.ch,fn:d}),this.index+=1):this.throwError("Unexpected next character ",this.index,this.index+1)}return this.tokens},is:function(a){return-1!==a.indexOf(this.ch)},peek:function(a){a=a||1;return this.index+a<this.text.length?this.text.charAt(this.index+a):!1},isNumber:function(a){return"0"<=
a&&"9">=a},isWhitespace:function(a){return" "===a||"\r"===a||"\t"===a||"\n"===a||"\v"===a||"\u00a0"===a},isIdent:function(a){return"a"<=a&&"z">=a||"A"<=a&&"Z">=a||"_"===a||"$"===a},isExpOperator:function(a){return"-"===a||"+"===a||this.isNumber(a)},throwError:function(a,c,d){d=d||this.index;c=F(c)?"s "+c+"-"+this.index+" ["+this.text.substring(c,d)+"]":" "+d;throw Ba("lexerr",a,c,this.text);},readNumber:function(){for(var a="",c=this.index;this.index<this.text.length;){var d=r(this.text.charAt(this.index));
if("."==d||this.isNumber(d))a+=d;else{var e=this.peek();if("e"==d&&this.isExpOperator(e))a+=d;else if(this.isExpOperator(d)&&e&&this.isNumber(e)&&"e"==a.charAt(a.length-1))a+=d;else if(!this.isExpOperator(d)||e&&this.isNumber(e)||"e"!=a.charAt(a.length-1))break;else this.throwError("Invalid exponent")}this.index++}a*=1;this.tokens.push({index:c,text:a,constant:!0,fn:function(){return a}})},readIdent:function(){for(var a=this,c="",d=this.index,e,f,g,h;this.index<this.text.length;){h=this.text.charAt(this.index);
if("."===h||this.isIdent(h)||this.isNumber(h))"."===h&&(e=this.index),c+=h;else break;this.index++}if(e)for(f=this.index;f<this.text.length;){h=this.text.charAt(f);if("("===h){g=c.substr(e-d+1);c=c.substr(0,e-d);this.index=f;break}if(this.isWhitespace(h))f++;else break}d={index:d,text:c};if(fb.hasOwnProperty(c))d.fn=fb[c],d.constant=!0;else{var n=Pc(c,this.options,this.text);d.fn=v(function(a,c){return n(a,c)},{assign:function(d,e){return ub(d,c,e,a.text)}})}this.tokens.push(d);g&&(this.tokens.push({index:e,
text:"."}),this.tokens.push({index:e+1,text:g}))},readString:function(a){var c=this.index;this.index++;for(var d="",e=a,f=!1;this.index<this.text.length;){var g=this.text.charAt(this.index),e=e+g;if(f)"u"===g?(g=this.text.substring(this.index+1,this.index+5),g.match(/[\da-f]{4}/i)||this.throwError("Invalid unicode escape [\\u"+g+"]"),this.index+=4,d+=String.fromCharCode(parseInt(g,16))):d=(f=lf[g])?d+f:d+g,f=!1;else if("\\"===g)f=!0;else{if(g===a){this.index++;this.tokens.push({index:c,text:e,string:d,
constant:!0,fn:function(){return d}});return}d+=g}this.index++}this.throwError("Unterminated quote",c)}};var bb=function(a,c,d){this.lexer=a;this.$filter=c;this.options=d};bb.ZERO=v(function(){return 0},{constant:!0});bb.prototype={constructor:bb,parse:function(a){this.text=a;this.tokens=this.lexer.lex(a);a=this.statements();0!==this.tokens.length&&this.throwError("is an unexpected token",this.tokens[0]);a.literal=!!a.literal;a.constant=!!a.constant;return a},primary:function(){var a;if(this.expect("("))a=
this.filterChain(),this.consume(")");else if(this.expect("["))a=this.arrayDeclaration();else if(this.expect("{"))a=this.object();else{var c=this.expect();(a=c.fn)||this.throwError("not a primary expression",c);c.constant&&(a.constant=!0,a.literal=!0)}for(var d;c=this.expect("(","[",".");)"("===c.text?(a=this.functionCall(a,d),d=null):"["===c.text?(d=a,a=this.objectIndex(a)):"."===c.text?(d=a,a=this.fieldAccess(a)):this.throwError("IMPOSSIBLE");return a},throwError:function(a,c){throw Ba("syntax",
c.text,a,c.index+1,this.text,this.text.substring(c.index));},peekToken:function(){if(0===this.tokens.length)throw Ba("ueoe",this.text);return this.tokens[0]},peek:function(a,c,d,e){if(0<this.tokens.length){var f=this.tokens[0],g=f.text;if(g===a||g===c||g===d||g===e||!(a||c||d||e))return f}return!1},expect:function(a,c,d,e){return(a=this.peek(a,c,d,e))?(this.tokens.shift(),a):!1},consume:function(a){this.expect(a)||this.throwError("is unexpected, expecting ["+a+"]",this.peek())},unaryFn:function(a,
c){return v(function(d,e){return a(d,e,c)},{constant:c.constant})},ternaryFn:function(a,c,d){return v(function(e,f){return a(e,f)?c(e,f):d(e,f)},{constant:a.constant&&c.constant&&d.constant})},binaryFn:function(a,c,d){return v(function(e,f){return c(e,f,a,d)},{constant:a.constant&&d.constant})},statements:function(){for(var a=[];;)if(0<this.tokens.length&&!this.peek("}",")",";","]")&&a.push(this.filterChain()),!this.expect(";"))return 1===a.length?a[0]:function(c,d){for(var e,f=0;f<a.length;f++){var g=
a[f];g&&(e=g(c,d))}return e}},filterChain:function(){for(var a=this.expression(),c;;)if(c=this.expect("|"))a=this.binaryFn(a,c.fn,this.filter());else return a},filter:function(){for(var a=this.expect(),c=this.$filter(a.text),d=[];this.expect(":");)d.push(this.expression());return ca(function(a,f,g){g=[g];for(var h=0;h<d.length;h++)g.push(d[h](a,f));return c.apply(a,g)})},expression:function(){return this.assignment()},assignment:function(){var a=this.ternary(),c,d;return(d=this.expect("="))?(a.assign||
this.throwError("implies assignment but ["+this.text.substring(0,d.index)+"] can not be assigned to",d),c=this.ternary(),function(d,f){return a.assign(d,c(d,f),f)}):a},ternary:function(){var a=this.logicalOR(),c,d;if(this.expect("?")){c=this.ternary();if(d=this.expect(":"))return this.ternaryFn(a,c,this.ternary());this.throwError("expected :",d)}else return a},logicalOR:function(){for(var a=this.logicalAND(),c;;)if(c=this.expect("||"))a=this.binaryFn(a,c.fn,this.logicalAND());else return a},logicalAND:function(){var a=
this.equality(),c;if(c=this.expect("&&"))a=this.binaryFn(a,c.fn,this.logicalAND());return a},equality:function(){var a=this.relational(),c;if(c=this.expect("==","!=","===","!=="))a=this.binaryFn(a,c.fn,this.equality());return a},relational:function(){var a=this.additive(),c;if(c=this.expect("<",">","<=",">="))a=this.binaryFn(a,c.fn,this.relational());return a},additive:function(){for(var a=this.multiplicative(),c;c=this.expect("+","-");)a=this.binaryFn(a,c.fn,this.multiplicative());return a},multiplicative:function(){for(var a=
this.unary(),c;c=this.expect("*","/","%");)a=this.binaryFn(a,c.fn,this.unary());return a},unary:function(){var a;return this.expect("+")?this.primary():(a=this.expect("-"))?this.binaryFn(bb.ZERO,a.fn,this.unary()):(a=this.expect("!"))?this.unaryFn(a.fn,this.unary()):this.primary()},fieldAccess:function(a){var c=this,d=this.expect().text,e=Pc(d,this.options,this.text);return v(function(c,d,h){return e(h||a(c,d))},{assign:function(e,g,h){return ub(a(e,h),d,g,c.text)}})},objectIndex:function(a){var c=
this,d=this.expression();this.consume("]");return v(function(e,f){var g=a(e,f),h=d(e,f);return g?ab(g[h],c.text):s},{assign:function(e,f,g){var h=d(e,g);return ab(a(e,g),c.text)[h]=f}})},functionCall:function(a,c){var d=[];if(")"!==this.peekToken().text){do d.push(this.expression());while(this.expect(","))}this.consume(")");var e=this;return function(f,g){for(var h=[],n=c?c(f,g):f,l=0;l<d.length;l++)h.push(d[l](f,g));l=a(f,g,n)||C;ab(n,e.text);ab(l,e.text);h=l.apply?l.apply(n,h):l(h[0],h[1],h[2],
h[3],h[4]);return ab(h,e.text)}},arrayDeclaration:function(){var a=[],c=!0;if("]"!==this.peekToken().text){do{if(this.peek("]"))break;var d=this.expression();a.push(d);d.constant||(c=!1)}while(this.expect(","))}this.consume("]");return v(function(c,d){for(var g=[],h=0;h<a.length;h++)g.push(a[h](c,d));return g},{literal:!0,constant:c})},object:function(){var a=[],c=!0;if("}"!==this.peekToken().text){do{if(this.peek("}"))break;var d=this.expect(),d=d.string||d.text;this.consume(":");var e=this.expression();
a.push({key:d,value:e});e.constant||(c=!1)}while(this.expect(","))}this.consume("}");return v(function(c,d){for(var e={},n=0;n<a.length;n++){var l=a[n];e[l.key]=l.value(c,d)}return e},{literal:!0,constant:c})}};var Tb={},ta=G("$sce"),fa={HTML:"html",CSS:"css",URL:"url",RESOURCE_URL:"resourceUrl",JS:"js"},aa=T.createElement("a"),Sc=sa(K.location.href,!0);oc.$inject=["$provide"];Tc.$inject=["$locale"];Vc.$inject=["$locale"];var Yc=".",ff={yyyy:ba("FullYear",4),yy:ba("FullYear",2,0,!0),y:ba("FullYear",
1),MMMM:wb("Month"),MMM:wb("Month",!0),MM:ba("Month",2,1),M:ba("Month",1,1),dd:ba("Date",2),d:ba("Date",1),HH:ba("Hours",2),H:ba("Hours",1),hh:ba("Hours",2,-12),h:ba("Hours",1,-12),mm:ba("Minutes",2),m:ba("Minutes",1),ss:ba("Seconds",2),s:ba("Seconds",1),sss:ba("Milliseconds",3),EEEE:wb("Day"),EEE:wb("Day",!0),a:function(a,c){return 12>a.getHours()?c.AMPMS[0]:c.AMPMS[1]},Z:function(a){a=-1*a.getTimezoneOffset();return a=(0<=a?"+":"")+(vb(Math[0<a?"floor":"ceil"](a/60),2)+vb(Math.abs(a%60),2))},ww:$c(2),
w:$c(1)},ef=/((?:[^yMdHhmsaZEw']+)|(?:'(?:[^']|'')*')|(?:E+|y+|M+|d+|H+|h+|m+|s+|a|Z|w+))(.*)/,df=/^\-?\d+$/;Uc.$inject=["$locale"];var bf=ca(r),cf=ca(Ga);Wc.$inject=["$parse"];var vd=ca({restrict:"E",compile:function(a,c){8>=U&&(c.href||c.name||c.$set("href",""),a.append(T.createComment("IE fix")));if(!c.href&&!c.xlinkHref&&!c.name)return function(a,c){var f="[object SVGAnimatedString]"===va.call(c.prop("href"))?"xlink:href":"href";c.on("click",function(a){c.attr(f)||a.preventDefault()})}}}),kb=
{};q(ob,function(a,c){if("multiple"!=a){var d=la("ng-"+c);kb[d]=function(){return{priority:100,link:function(a,f,g){a.$watch(g[d],function(a){g.$set(c,!!a)})}}}}});q(yc,function(a,c){kb[c]=function(){return{priority:100,link:function(a,e,f){if("ngPattern"===c&&"/"==f.ngPattern.charAt(0)&&(e=f.ngPattern.match(hf))){f.$set("ngPattern",RegExp(e[1],e[2]));return}a.$watch(f[c],function(a){f.$set(c,a)})}}}});q(["src","srcset","href"],function(a){var c=la("ng-"+a);kb[c]=function(){return{priority:99,link:function(d,
e,f){var g=a,h=a;"href"===a&&"[object SVGAnimatedString]"===va.call(e.prop("href"))&&(h="xlinkHref",f.$attr[h]="xlink:href",g=null);f.$observe(c,function(a){a&&(f.$set(h,a),U&&g&&e.prop(g,f[h]))})}}}});var zb={$addControl:C,$removeControl:C,$setValidity:C,$setDirty:C,$setPristine:C};ad.$inject=["$element","$attrs","$scope","$animate"];var bd=function(a){return["$timeout",function(c){return{name:"form",restrict:a?"EAC":"E",controller:ad,compile:function(){return{pre:function(a,e,f,g){if(!f.action){var h=
function(c){a.$apply(function(){g.$commitViewValue()});c.preventDefault?c.preventDefault():c.returnValue=!1};sb(e[0],"submit",h);e.on("$destroy",function(){c(function(){Va(e[0],"submit",h)},0,!1)})}var n=e.parent().controller("form"),l=f.name||f.ngForm;l&&ub(a,l,g,l);if(n)e.on("$destroy",function(){n.$removeControl(g);l&&ub(a,l,s,l);v(g,zb)})}}}}}]},wd=bd(),Jd=bd(!0),mf=/^(ftp|http|https):\/\/(\w+:{0,1}\w*@)?(\S+)(:[0-9]+)?(\/|\/([\w#!:.?+=&%@!\-\/]))?$/,nf=/^[a-z0-9!#$%&'*+/=?^_`{|}~.-]+@[a-z0-9-]+(\.[a-z0-9-]+)*$/i,
of=/^\s*(\-|\+)?(\d+|(\d*(\.\d*)))\s*$/,cd=/^(\d{4})-(\d{2})-(\d{2})$/,dd=/^(\d{4})-(\d\d)-(\d\d)T(\d\d):(\d\d)$/,Wb=/^(\d{4})-W(\d\d)$/,ed=/^(\d{4})-(\d\d)$/,fd=/^(\d\d):(\d\d)$/,pf=/(\s+|^)default(\s+|$)/,gd={text:db,date:eb("date",cd,Bb(cd,["yyyy","MM","dd"]),"yyyy-MM-dd"),"datetime-local":eb("datetimelocal",dd,Bb(dd,["yyyy","MM","dd","HH","mm"]),"yyyy-MM-ddTHH:mm"),time:eb("time",fd,Bb(fd,["HH","mm"]),"HH:mm"),week:eb("week",Wb,function(a){if(na(a))return a;if(E(a)){Wb.lastIndex=0;var c=Wb.exec(a);
if(c){a=+c[1];var d=+c[2],c=Zc(a),d=7*(d-1);return new Date(a,0,c.getDate()+d)}}return NaN},"yyyy-Www"),month:eb("month",ed,Bb(ed,["yyyy","MM"]),"yyyy-MM"),number:function(a,c,d,e,f,g){db(a,c,d,e,f,g);e.$parsers.push(function(a){var c=e.$isEmpty(a);if(c||of.test(a))return e.$setValidity("number",!0),""===a?null:c?a:parseFloat(a);e.$setValidity("number",!1);return s});gf(e,"number",c);e.$formatters.push(function(a){return e.$isEmpty(a)?"":""+a});d.min&&(a=function(a){var c=parseFloat(d.min);return cb(e,
"min",e.$isEmpty(a)||a>=c,a)},e.$parsers.push(a),e.$formatters.push(a));d.max&&(a=function(a){var c=parseFloat(d.max);return cb(e,"max",e.$isEmpty(a)||a<=c,a)},e.$parsers.push(a),e.$formatters.push(a));e.$formatters.push(function(a){return cb(e,"number",e.$isEmpty(a)||Da(a),a)})},url:function(a,c,d,e,f,g){db(a,c,d,e,f,g);a=function(a){return cb(e,"url",e.$isEmpty(a)||mf.test(a),a)};e.$formatters.push(a);e.$parsers.push(a)},email:function(a,c,d,e,f,g){db(a,c,d,e,f,g);a=function(a){return cb(e,"email",
e.$isEmpty(a)||nf.test(a),a)};e.$formatters.push(a);e.$parsers.push(a)},radio:function(a,c,d,e){y(d.name)&&c.attr("name",++pb);c.on("click",function(f){c[0].checked&&a.$apply(function(){e.$setViewValue(d.value,f&&f.type)})});e.$render=function(){c[0].checked=d.value==e.$viewValue};d.$observe("value",e.$render)},checkbox:function(a,c,d,e){var f=d.ngTrueValue,g=d.ngFalseValue;E(f)||(f=!0);E(g)||(g=!1);c.on("click",function(d){a.$apply(function(){e.$setViewValue(c[0].checked,d&&d.type)})});e.$render=
function(){c[0].checked=e.$viewValue};e.$isEmpty=function(a){return a!==f};e.$formatters.push(function(a){return a===f});e.$parsers.push(function(a){return a?f:g})},hidden:C,button:C,submit:C,reset:C,file:C},ic=["$browser","$sniffer","$filter",function(a,c,d){return{restrict:"E",require:["?ngModel"],link:function(e,f,g,h){h[0]&&(gd[r(g.type)]||gd.text)(e,f,g,h[0],c,a,d)}}}],yb="ng-valid",xb="ng-invalid",Ma="ng-pristine",Ab="ng-dirty",qf=["$scope","$exceptionHandler","$attrs","$element","$parse","$animate",
"$timeout",function(a,c,d,e,f,g,h){function n(a,c){c=c?"-"+jb(c,"-"):"";g.removeClass(e,(a?xb:yb)+c);g.addClass(e,(a?yb:xb)+c)}this.$modelValue=this.$viewValue=Number.NaN;this.$validators={};this.$parsers=[];this.$formatters=[];this.$viewChangeListeners=[];this.$untouched=!0;this.$touched=!1;this.$pristine=!0;this.$dirty=!1;this.$valid=!0;this.$invalid=!1;this.$name=d.name;var l=f(d.ngModel),m=l.assign,p=null,k=this;if(!m)throw G("ngModel")("nonassign",d.ngModel,ga(e));this.$render=C;this.$isEmpty=
function(a){return y(a)||""===a||null===a||a!==a};var t=e.inheritedData("$formController")||zb,w=0,r=this.$error={};e.addClass(Ma).addClass("ng-untouched");n(!0);this.$setValidity=function(a,c){r[a]!==!c&&(c?(r[a]&&w--,w||(n(!0),k.$valid=!0,k.$invalid=!1)):(n(!1),k.$invalid=!0,k.$valid=!1,w++),r[a]=!c,n(c,a),t.$setValidity(a,c,k))};this.$setPristine=function(){k.$dirty=!1;k.$pristine=!0;g.removeClass(e,Ab);g.addClass(e,Ma)};this.$setUntouched=function(){k.$touched=!1;k.$untouched=!0;g.setClass(e,
"ng-untouched","ng-touched")};this.$setTouched=function(){k.$touched=!0;k.$untouched=!1;g.setClass(e,"ng-touched","ng-untouched")};this.$rollbackViewValue=function(){h.cancel(p);k.$viewValue=k.$$lastCommittedViewValue;k.$render()};this.$validate=function(){this.$$runValidators(k.$modelValue,k.$viewValue)};this.$$runValidators=function(a,c){q(k.$validators,function(d,e){k.$setValidity(e,d(a,c))})};this.$commitViewValue=function(){var d=k.$viewValue;h.cancel(p);if(k.$$lastCommittedViewValue!==d){k.$$lastCommittedViewValue=
d;k.$pristine&&(k.$dirty=!0,k.$pristine=!1,g.removeClass(e,Ma),g.addClass(e,Ab),t.$setDirty());var f=d;q(k.$parsers,function(a){f=a(f)});k.$modelValue===f||!y(k.$$invalidModelValue)&&k.$$invalidModelValue==f||(k.$$runValidators(f,d),k.$modelValue=k.$valid?f:s,k.$$invalidModelValue=k.$valid?s:f,m(a,k.$modelValue),q(k.$viewChangeListeners,function(a){try{a()}catch(d){c(d)}}))}};this.$setViewValue=function(a,c){k.$viewValue=a;k.$options&&!k.$options.updateOnDefault||k.$$debounceViewValueCommit(c)};this.$$debounceViewValueCommit=
function(a){var c=0,d=k.$options;d&&F(d.debounce)&&(d=d.debounce,Da(d)?c=d:Da(d[a])?c=d[a]:Da(d["default"])&&(c=d["default"]));h.cancel(p);c?p=h(function(){k.$commitViewValue()},c):k.$commitViewValue()};a.$watch(function(){var c=l(a);if(k.$modelValue!==c&&(y(k.$$invalidModelValue)||k.$$invalidModelValue!=c)){for(var d=k.$formatters,e=d.length,f=c;e--;)f=d[e](f);k.$$runValidators(c,f);k.$modelValue=k.$valid?c:s;k.$$invalidModelValue=k.$valid?s:c;k.$viewValue!==f&&(k.$viewValue=k.$$lastCommittedViewValue=
f,k.$render())}return c})}],Yd=function(){return{require:["ngModel","^?form","^?ngModelOptions"],controller:qf,link:{pre:function(a,c,d,e){e[2]&&(e[0].$options=e[2].$options);var f=e[0],g=e[1]||zb;g.$addControl(f);a.$on("$destroy",function(){g.$removeControl(f)})},post:function(a,c,d,e){var f=e[0];if(f.$options&&f.$options.updateOn)c.on(f.$options.updateOn,function(c){a.$apply(function(){f.$$debounceViewValueCommit(c&&c.type)})});c.on("blur",function(c){a.$apply(function(){f.$setTouched()})})}}}},
$d=ca({require:"ngModel",link:function(a,c,d,e){e.$viewChangeListeners.push(function(){a.$eval(d.ngChange)})}}),kc=function(){return{require:"?ngModel",link:function(a,c,d,e){e&&(d.required=!0,e.$validators.required=function(a,c){return!d.required||!e.$isEmpty(c)},d.$observe("required",function(){e.$validate()}))}}},jc=function(){return{require:"?ngModel",link:function(a,c,d,e){if(e){var f,g=d.ngPattern||d.pattern;d.$observe("pattern",function(a){E(a)&&0<a.length&&(a=RegExp(a));if(a&&!a.test)throw G("ngPattern")("noregexp",
g,a,ga(c));f=a||s;e.$validate()});e.$validators.pattern=function(a){return e.$isEmpty(a)||y(f)||f.test(a)}}}}},mc=function(){return{require:"?ngModel",link:function(a,c,d,e){if(e){var f=0;d.$observe("maxlength",function(a){f=X(a)||0;e.$validate()});e.$validators.maxlength=function(a){return e.$isEmpty(a)||a.length<=f}}}}},lc=function(){return{require:"?ngModel",link:function(a,c,d,e){if(e){var f=0;d.$observe("minlength",function(a){f=X(a)||0;e.$validate()});e.$validators.minlength=function(a){return e.$isEmpty(a)||
a.length>=f}}}}},Zd=function(){return{require:"ngModel",link:function(a,c,d,e){var f=(a=/\/(.*)\//.exec(d.ngList))&&RegExp(a[1])||d.ngList||",";e.$parsers.push(function(a){if(!y(a)){var c=[];a&&q(a.split(f),function(a){a&&c.push($(a))});return c}});e.$formatters.push(function(a){return L(a)?a.join(", "):s});e.$isEmpty=function(a){return!a||!a.length}}}},rf=/^(true|false|\d+)$/,ae=function(){return{priority:100,compile:function(a,c){return rf.test(c.ngValue)?function(a,c,f){f.$set("value",a.$eval(f.ngValue))}:
function(a,c,f){a.$watch(f.ngValue,function(a){f.$set("value",a)})}}}},be=function(){return{controller:["$scope","$attrs",function(a,c){var d=this;this.$options=a.$eval(c.ngModelOptions);this.$options.updateOn!==s?(this.$options.updateOnDefault=!1,this.$options.updateOn=$(this.$options.updateOn.replace(pf,function(){d.$options.updateOnDefault=!0;return" "}))):this.$options.updateOnDefault=!0}]}},Bd=ua({compile:function(a){a.addClass("ng-binding");return function(a,d,e){d.data("$binding",e.ngBind);
a.$watch(e.ngBind,function(a){d.text(a==s?"":a)})}}}),Dd=["$interpolate",function(a){return function(c,d,e){c=a(d.attr(e.$attr.ngBindTemplate));d.addClass("ng-binding").data("$binding",c);e.$observe("ngBindTemplate",function(a){d.text(a)})}}],Cd=["$sce","$parse",function(a,c){return function(d,e,f){function g(){var a=h(d);g.$$unwatch=h.$$unwatch;return(a||"").toString()}e.addClass("ng-binding").data("$binding",f.ngBindHtml);var h=c(f.ngBindHtml);d.$watch(g,function(c){e.html(a.getTrustedHtml(h(d))||
"")})}}],Ed=Vb("",!0),Gd=Vb("Odd",0),Fd=Vb("Even",1),Hd=ua({compile:function(a,c){c.$set("ngCloak",s);a.removeClass("ng-cloak")}}),Id=[function(){return{scope:!0,controller:"@",priority:500}}],nc={};q("click dblclick mousedown mouseup mouseover mouseout mousemove mouseenter mouseleave keydown keyup keypress submit focus blur copy cut paste".split(" "),function(a){var c=la("ng-"+a);nc[c]=["$parse",function(d){return{compile:function(e,f){var g=d(f[c]);return function(c,d){d.on(r(a),function(a){c.$apply(function(){g(c,
{$event:a})})})}}}}]});var Ld=["$animate",function(a){return{transclude:"element",priority:600,terminal:!0,restrict:"A",$$tlb:!0,link:function(c,d,e,f,g){var h,n,l;c.$watch(e.ngIf,function(c){Qa(c)?n||g(function(c,f){n=f;c[c.length++]=T.createComment(" end ngIf: "+e.ngIf+" ");h={clone:c};a.enter(c,d.parent(),d)}):(l&&(l.remove(),l=null),n&&(n.$destroy(),n=null),h&&(l=Gb(h.clone),a.leave(l,function(){l=null}),h=null))})}}}],Md=["$http","$templateCache","$anchorScroll","$animate","$sce",function(a,
c,d,e,f){return{restrict:"ECA",priority:400,terminal:!0,transclude:"element",controller:Ra.noop,compile:function(g,h){var n=h.ngInclude||h.src,l=h.onload||"",m=h.autoscroll;return function(g,h,q,w,r){var u=0,s,A,D,x=function(){A&&(A.remove(),A=null);s&&(s.$destroy(),s=null);D&&(e.leave(D,function(){A=null}),A=D,D=null)};g.$watch(f.parseAsResourceUrl(n),function(f){var n=function(){!F(m)||m&&!g.$eval(m)||d()},q=++u;f?(a.get(f,{cache:c}).success(function(a){if(q===u){var c=g.$new();w.template=a;a=r(c,
function(a){x();e.enter(a,null,h,n)});s=c;D=a;s.$emit("$includeContentLoaded");g.$eval(l)}}).error(function(){q===u&&(x(),g.$emit("$includeContentError"))}),g.$emit("$includeContentRequested")):(x(),w.template=null)})}}}}],ce=["$compile",function(a){return{restrict:"ECA",priority:-400,require:"ngInclude",link:function(c,d,e,f){d.html(f.template);a(d.contents())(c)}}}],Nd=ua({priority:450,compile:function(){return{pre:function(a,c,d){a.$eval(d.ngInit)}}}}),Od=ua({terminal:!0,priority:1E3}),Pd=["$locale",
"$interpolate",function(a,c){var d=/{}/g;return{restrict:"EA",link:function(e,f,g){var h=g.count,n=g.$attr.when&&f.attr(g.$attr.when),l=g.offset||0,m=e.$eval(n)||{},p={},k=c.startSymbol(),t=c.endSymbol(),w=/^when(Minus)?(.+)$/;q(g,function(a,c){w.test(c)&&(m[r(c.replace("when","").replace("Minus","-"))]=f.attr(g.$attr[c]))});q(m,function(a,e){p[e]=c(a.replace(d,k+h+"-"+l+t))});e.$watch(function(){var c=parseFloat(e.$eval(h));if(isNaN(c))return"";c in m||(c=a.pluralCat(c-l));return p[c](e)},function(a){f.text(a)})}}}],
Qd=["$parse","$animate",function(a,c){var d=G("ngRepeat");return{transclude:"element",priority:1E3,terminal:!0,$$tlb:!0,link:function(e,f,g,h,n){var l=g.ngRepeat,m=l.match(/^\s*([\s\S]+?)\s+in\s+([\s\S]+?)(?:\s+track\s+by\s+([\s\S]+?))?\s*$/),p,k,t,w,s,u,r={$id:Ia};if(!m)throw d("iexp",l);g=m[1];h=m[2];(m=m[3])?(p=a(m),k=function(a,c,d){u&&(r[u]=a);r[s]=c;r.$index=d;return p(e,r)}):(t=function(a,c){return Ia(c)},w=function(a){return a});m=g.match(/^(?:([\$\w]+)|\(([\$\w]+)\s*,\s*([\$\w]+)\))$/);if(!m)throw d("iidexp",
g);s=m[3]||m[1];u=m[2];var A={};e.$watchCollection(h,function(a){var e,g,h=f[0],m,p={},r,B,F,J,I,E,v,y=[],C=function(a,c){a[s]=F;u&&(a[u]=B);a.$index=c;a.$first=0===c;a.$last=c===r-1;a.$middle=!(a.$first||a.$last);a.$odd=!(a.$even=0===(c&1))};if(gb(a))E=a,I=k||t;else{I=k||w;E=[];for(g in a)a.hasOwnProperty(g)&&"$"!=g.charAt(0)&&E.push(g);E.sort()}r=E.length;g=y.length=E.length;for(e=0;e<g;e++)if(B=a===E?e:E[e],F=a[B],J=I(B,F,e),za(J,"`track by` id"),A.hasOwnProperty(J))v=A[J],delete A[J],p[J]=v,y[e]=
v;else{if(p.hasOwnProperty(J))throw q(y,function(a){a&&a.scope&&(A[a.id]=a)}),d("dupes",l,J);y[e]={id:J};p[J]=!1}for(m in A)A.hasOwnProperty(m)&&(v=A[m],g=Gb(v.clone),c.leave(g),q(g,function(a){a.$$NG_REMOVED=!0}),v.scope.$destroy());e=0;for(g=E.length;e<g;e++)if(B=a===E?e:E[e],F=a[B],v=y[e],y[e-1]&&(h=y[e-1].clone[y[e-1].clone.length-1]),v.scope){m=h;do m=m.nextSibling;while(m&&m.$$NG_REMOVED);v.clone[0]!=m&&c.move(Gb(v.clone),null,z(h));h=v.clone[v.clone.length-1];C(v.scope,e)}else n(function(a,
d){v.scope=d;a[a.length++]=T.createComment(" end ngRepeat: "+l+" ");c.enter(a,null,z(h));h=a;v.clone=a;p[v.id]=v;C(v.scope,e)});A=p})}}}],Rd=["$animate",function(a){return function(c,d,e){c.$watch(e.ngShow,function(c){a[Qa(c)?"removeClass":"addClass"](d,"ng-hide")})}}],Kd=["$animate",function(a){return function(c,d,e){c.$watch(e.ngHide,function(c){a[Qa(c)?"addClass":"removeClass"](d,"ng-hide")})}}],Sd=ua(function(a,c,d){a.$watch(d.ngStyle,function(a,d){d&&a!==d&&q(d,function(a,d){c.css(d,"")});a&&
c.css(a)},!0)}),Td=["$animate",function(a){return{restrict:"EA",require:"ngSwitch",controller:["$scope",function(){this.cases={}}],link:function(c,d,e,f){var g=[],h=[],n=[],l=[];c.$watch(e.ngSwitch||e.on,function(d){var p,k;p=0;for(k=n.length;p<k;++p)n[p].remove();p=n.length=0;for(k=l.length;p<k;++p){var t=h[p];l[p].$destroy();n[p]=t;a.leave(t,function(){n.splice(p,1)})}h.length=0;l.length=0;if(g=f.cases["!"+d]||f.cases["?"])c.$eval(e.change),q(g,function(d){var e=c.$new();l.push(e);d.transclude(e,
function(c){var e=d.element;h.push(c);a.enter(c,e.parent(),e)})})})}}}],Ud=ua({transclude:"element",priority:800,require:"^ngSwitch",link:function(a,c,d,e,f){e.cases["!"+d.ngSwitchWhen]=e.cases["!"+d.ngSwitchWhen]||[];e.cases["!"+d.ngSwitchWhen].push({transclude:f,element:c})}}),Vd=ua({transclude:"element",priority:800,require:"^ngSwitch",link:function(a,c,d,e,f){e.cases["?"]=e.cases["?"]||[];e.cases["?"].push({transclude:f,element:c})}}),Xd=ua({link:function(a,c,d,e,f){if(!f)throw G("ngTransclude")("orphan",
ga(c));f(function(a){c.empty();c.append(a)})}}),xd=["$templateCache",function(a){return{restrict:"E",terminal:!0,compile:function(c,d){"text/ng-template"==d.type&&a.put(d.id,c[0].text)}}}],sf=G("ngOptions"),Wd=ca({terminal:!0}),yd=["$compile","$parse",function(a,c){var d=/^\s*([\s\S]+?)(?:\s+as\s+([\s\S]+?))?(?:\s+group\s+by\s+([\s\S]+?))?\s+for\s+(?:([\$\w][\$\w]*)|(?:\(\s*([\$\w][\$\w]*)\s*,\s*([\$\w][\$\w]*)\s*\)))\s+in\s+([\s\S]+?)(?:\s+track\s+by\s+([\s\S]+?))?$/,e={$setViewValue:C};return{restrict:"E",
require:["select","?ngModel"],controller:["$element","$scope","$attrs",function(a,c,d){var n=this,l={},m=e,p;n.databound=d.ngModel;n.init=function(a,c,d){m=a;p=d};n.addOption=function(c){za(c,'"option value"');l[c]=!0;m.$viewValue==c&&(a.val(c),p.parent()&&p.remove())};n.removeOption=function(a){this.hasOption(a)&&(delete l[a],m.$viewValue==a&&this.renderUnknownOption(a))};n.renderUnknownOption=function(c){c="? "+Ia(c)+" ?";p.val(c);a.prepend(p);a.val(c);p.prop("selected",!0)};n.hasOption=function(a){return l.hasOwnProperty(a)};
c.$on("$destroy",function(){n.renderUnknownOption=C})}],link:function(e,g,h,n){function l(a,c,d,e){d.$render=function(){var a=d.$viewValue;e.hasOption(a)?(D.parent()&&D.remove(),c.val(a),""===a&&u.prop("selected",!0)):y(a)&&u?c.val(""):e.renderUnknownOption(a)};c.on("change",function(){a.$apply(function(){D.parent()&&D.remove();d.$setViewValue(c.val())})})}function m(a,c,d){var e;d.$render=function(){var a=new Xa(d.$viewValue);q(c.find("option"),function(c){c.selected=F(a.get(c.value))})};a.$watch(function(){xa(e,
d.$viewValue)||(e=ia(d.$viewValue),d.$render())});c.on("change",function(){a.$apply(function(){var a=[];q(c.find("option"),function(c){c.selected&&a.push(c.value)});d.$setViewValue(a)})})}function p(e,f,g){function h(){var a={"":[]},c=[""],d,k,r,s,w;s=g.$modelValue;w=x(e)||[];var B=m?Xb(w):w,D,y,C;y={};r=!1;var G,K;if(t)if(u&&L(s))for(r=new Xa([]),C=0;C<s.length;C++)y[n]=s[C],r.put(u(e,y),s[C]);else r=new Xa(s);for(C=0;D=B.length,C<D;C++){k=C;if(m){k=B[C];if("$"===k.charAt(0))continue;y[m]=k}y[n]=
w[k];d=p(e,y)||"";(k=a[d])||(k=a[d]=[],c.push(d));t?d=F(r.remove(u?u(e,y):q(e,y))):(u?(d={},d[n]=s,d=u(e,d)===u(e,y)):d=s===q(e,y),r=r||d);G=l(e,y);G=F(G)?G:"";k.push({id:u?u(e,y):m?B[C]:C,label:G,selected:d})}t||(v||null===s?a[""].unshift({id:"",label:"",selected:!r}):r||a[""].unshift({id:"?",label:"",selected:!0}));y=0;for(B=c.length;y<B;y++){d=c[y];k=a[d];z.length<=y?(s={element:A.clone().attr("label",d),label:k.label},w=[s],z.push(w),f.append(s.element)):(w=z[y],s=w[0],s.label!=d&&s.element.attr("label",
s.label=d));G=null;C=0;for(D=k.length;C<D;C++)r=k[C],(d=w[C+1])?(G=d.element,d.label!==r.label&&G.text(d.label=r.label),d.id!==r.id&&G.val(d.id=r.id),d.selected!==r.selected&&G.prop("selected",d.selected=r.selected)):(""===r.id&&v?K=v:(K=E.clone()).val(r.id).prop("selected",r.selected).text(r.label),w.push({element:K,label:r.label,id:r.id,selected:r.selected}),G?G.after(K):s.element.append(K),G=K);for(C++;w.length>C;)w.pop().element.remove()}for(;z.length>y;)z.pop()[0].element.remove()}var k;if(!(k=
r.match(d)))throw sf("iexp",r,ga(f));var l=c(k[2]||k[1]),n=k[4]||k[6],m=k[5],p=c(k[3]||""),q=c(k[2]?k[1]:n),x=c(k[7]),u=k[8]?c(k[8]):null,z=[[{element:f,label:""}]];v&&(a(v)(e),v.removeClass("ng-scope"),v.remove());f.empty();f.on("change",function(){e.$apply(function(){var a,c=x(e)||[],d={},h,k,l,p,r,w,v;if(t)for(k=[],p=0,w=z.length;p<w;p++)for(a=z[p],l=1,r=a.length;l<r;l++){if((h=a[l].element)[0].selected){h=h.val();m&&(d[m]=h);if(u)for(v=0;v<c.length&&(d[n]=c[v],u(e,d)!=h);v++);else d[n]=c[h];k.push(q(e,
d))}}else{h=f.val();if("?"==h)k=s;else if(""===h)k=null;else if(u)for(v=0;v<c.length;v++){if(d[n]=c[v],u(e,d)==h){k=q(e,d);break}}else d[n]=c[h],m&&(d[m]=h),k=q(e,d);1<z[0].length&&z[0][1].id!==h&&(z[0][1].selected=!1)}g.$setViewValue(k)})});g.$render=h;e.$watch(h)}if(n[1]){var k=n[0];n=n[1];var t=h.multiple,r=h.ngOptions,v=!1,u,E=z(T.createElement("option")),A=z(T.createElement("optgroup")),D=E.clone();h=0;for(var x=g.children(),C=x.length;h<C;h++)if(""===x[h].value){u=v=x.eq(h);break}k.init(n,v,
D);t&&(n.$isEmpty=function(a){return!a||0===a.length});r?p(e,g,n):t?m(e,g,n):l(e,g,n,k)}}}}],Ad=["$interpolate",function(a){var c={addOption:C,removeOption:C};return{restrict:"E",priority:100,compile:function(d,e){if(y(e.value)){var f=a(d.text(),!0);f||e.$set("value",d.text())}return function(a,d,e){var l=d.parent(),m=l.data("$selectController")||l.parent().data("$selectController");m&&m.databound?d.prop("selected",!1):m=c;f?a.$watch(f,function(a,c){e.$set("value",a);c!==a&&m.removeOption(c);m.addOption(a)}):
m.addOption(e.value);d.on("$destroy",function(){m.removeOption(e.value)})}}}}],zd=ca({restrict:"E",terminal:!1});K.angular.bootstrap?console.log("WARNING: Tried to load angular more than once."):(pd(),rd(Ra),z(T).ready(function(){nd(T,fc)}))})(window,document);!window.angular.$$csp()&&window.angular.element(document).find("head").prepend('<style type="text/css">@charset "UTF-8";[ng\\:cloak],[ng-cloak],[data-ng-cloak],[x-ng-cloak],.ng-cloak,.x-ng-cloak,.ng-hide:not(.ng-animate){display:none !important;}ng\\:form{display:block;}</style>');
//# sourceMappingURL=angular.min.js.map

"use strict";

var paginationModule = angular.module('simplePagination', []);

paginationModule.factory('Pagination', function() {

  var pagination = {};

  pagination.getNew = function(perPage) {

    perPage = perPage === undefined ? 5 : perPage;

    var paginator = {
      numPages: 1,
      perPage: perPage,
      page: 0
    };

    paginator.prevPage = function() {
      if (paginator.page > 0) {
        paginator.page -= 1;
      }
    };

    paginator.nextPage = function() {
      if (paginator.page < paginator.numPages - 1) {
        paginator.page += 1;
      }
    };

    paginator.toPageId = function(id) {
      if (id >= 0 && id <= paginator.numPages - 1) {
        paginator.page = id;
      }
    };

    return paginator;
  };

  return pagination;
});

paginationModule.filter('startFrom', function() {
  return function(input, start) {
    if (input === undefined) {
      return input;
    } else {
      return input.slice(+start);
    }
  };
});

paginationModule.filter('range', function() {
  return function(input, total) {
    total = parseInt(total);
    for (var i = 0; i < total; i++) {
      input.push(i);
    }
    return input;
  };
});

/*!
 * Modernizr v2.8.1
 * www.modernizr.com
 *
 * Copyright (c) Faruk Ates, Paul Irish, Alex Sexton
 * Available under the BSD and MIT licenses: www.modernizr.com/license/
 */

/*
 * Modernizr tests which native CSS3 and HTML5 features are available in
 * the current UA and makes the results available to you in two ways:
 * as properties on a global Modernizr object, and as classes on the
 * <html> element. This information allows you to progressively enhance
 * your pages with a granular level of control over the experience.
 *
 * Modernizr has an optional (not included) conditional resource loader
 * called Modernizr.load(), based on Yepnope.js (yepnopejs.com).
 * To get a build that includes Modernizr.load(), as well as choosing
 * which tests to include, go to www.modernizr.com/download/
 *
 * Authors        Faruk Ates, Paul Irish, Alex Sexton
 * Contributors   Ryan Seddon, Ben Alman
 */

window.Modernizr = (function( window, document, undefined ) {

    var version = '2.8.1',

    Modernizr = {},

    /*>>cssclasses*/
    // option for enabling the HTML classes to be added
    enableClasses = true,
    /*>>cssclasses*/

    docElement = document.documentElement,

    /**
     * Create our "modernizr" element that we do most feature tests on.
     */
    mod = 'modernizr',
    modElem = document.createElement(mod),
    mStyle = modElem.style,

    /**
     * Create the input element for various Web Forms feature tests.
     */
    inputElem /*>>inputelem*/ = document.createElement('input') /*>>inputelem*/ ,

    /*>>smile*/
    smile = ':)',
    /*>>smile*/

    toString = {}.toString,

    // TODO :: make the prefixes more granular
    /*>>prefixes*/
    // List of property values to set for css tests. See ticket #21
    prefixes = ' -webkit- -moz- -o- -ms- '.split(' '),
    /*>>prefixes*/

    /*>>domprefixes*/
    // Following spec is to expose vendor-specific style properties as:
    //   elem.style.WebkitBorderRadius
    // and the following would be incorrect:
    //   elem.style.webkitBorderRadius

    // Webkit ghosts their properties in lowercase but Opera & Moz do not.
    // Microsoft uses a lowercase `ms` instead of the correct `Ms` in IE8+
    //   erik.eae.net/archives/2008/03/10/21.48.10/

    // More here: github.com/Modernizr/Modernizr/issues/issue/21
    omPrefixes = 'Webkit Moz O ms',

    cssomPrefixes = omPrefixes.split(' '),

    domPrefixes = omPrefixes.toLowerCase().split(' '),
    /*>>domprefixes*/

    /*>>ns*/
    ns = {'svg': 'http://www.w3.org/2000/svg'},
    /*>>ns*/

    tests = {},
    inputs = {},
    attrs = {},

    classes = [],

    slice = classes.slice,

    featureName, // used in testing loop


    /*>>teststyles*/
    // Inject element with style element and some CSS rules
    injectElementWithStyles = function( rule, callback, nodes, testnames ) {

      var style, ret, node, docOverflow,
          div = document.createElement('div'),
          // After page load injecting a fake body doesn't work so check if body exists
          body = document.body,
          // IE6 and 7 won't return offsetWidth or offsetHeight unless it's in the body element, so we fake it.
          fakeBody = body || document.createElement('body');

      if ( parseInt(nodes, 10) ) {
          // In order not to give false positives we create a node for each test
          // This also allows the method to scale for unspecified uses
          while ( nodes-- ) {
              node = document.createElement('div');
              node.id = testnames ? testnames[nodes] : mod + (nodes + 1);
              div.appendChild(node);
          }
      }

      // <style> elements in IE6-9 are considered 'NoScope' elements and therefore will be removed
      // when injected with innerHTML. To get around this you need to prepend the 'NoScope' element
      // with a 'scoped' element, in our case the soft-hyphen entity as it won't mess with our measurements.
      // msdn.microsoft.com/en-us/library/ms533897%28VS.85%29.aspx
      // Documents served as xml will throw if using &shy; so use xml friendly encoded version. See issue #277
      style = ['&#173;','<style id="s', mod, '">', rule, '</style>'].join('');
      div.id = mod;
      // IE6 will false positive on some tests due to the style element inside the test div somehow interfering offsetHeight, so insert it into body or fakebody.
      // Opera will act all quirky when injecting elements in documentElement when page is served as xml, needs fakebody too. #270
      (body ? div : fakeBody).innerHTML += style;
      fakeBody.appendChild(div);
      if ( !body ) {
          //avoid crashing IE8, if background image is used
          fakeBody.style.background = '';
          //Safari 5.13/5.1.4 OSX stops loading if ::-webkit-scrollbar is used and scrollbars are visible
          fakeBody.style.overflow = 'hidden';
          docOverflow = docElement.style.overflow;
          docElement.style.overflow = 'hidden';
          docElement.appendChild(fakeBody);
      }

      ret = callback(div, rule);
      // If this is done after page load we don't want to remove the body so check if body exists
      if ( !body ) {
          fakeBody.parentNode.removeChild(fakeBody);
          docElement.style.overflow = docOverflow;
      } else {
          div.parentNode.removeChild(div);
      }

      return !!ret;

    },
    /*>>teststyles*/

    /*>>mq*/
    // adapted from matchMedia polyfill
    // by Scott Jehl and Paul Irish
    // gist.github.com/786768
    testMediaQuery = function( mq ) {

      var matchMedia = window.matchMedia || window.msMatchMedia;
      if ( matchMedia ) {
        return matchMedia(mq) && matchMedia(mq).matches || false;
      }

      var bool;

      injectElementWithStyles('@media ' + mq + ' { #' + mod + ' { position: absolute; } }', function( node ) {
        bool = (window.getComputedStyle ?
                  getComputedStyle(node, null) :
                  node.currentStyle)['position'] == 'absolute';
      });

      return bool;

     },
     /*>>mq*/


    /*>>hasevent*/
    //
    // isEventSupported determines if a given element supports the given event
    // kangax.github.com/iseventsupported/
    //
    // The following results are known incorrects:
    //   Modernizr.hasEvent("webkitTransitionEnd", elem) // false negative
    //   Modernizr.hasEvent("textInput") // in Webkit. github.com/Modernizr/Modernizr/issues/333
    //   ...
    isEventSupported = (function() {

      var TAGNAMES = {
        'select': 'input', 'change': 'input',
        'submit': 'form', 'reset': 'form',
        'error': 'img', 'load': 'img', 'abort': 'img'
      };

      function isEventSupported( eventName, element ) {

        element = element || document.createElement(TAGNAMES[eventName] || 'div');
        eventName = 'on' + eventName;

        // When using `setAttribute`, IE skips "unload", WebKit skips "unload" and "resize", whereas `in` "catches" those
        var isSupported = eventName in element;

        if ( !isSupported ) {
          // If it has no `setAttribute` (i.e. doesn't implement Node interface), try generic element
          if ( !element.setAttribute ) {
            element = document.createElement('div');
          }
          if ( element.setAttribute && element.removeAttribute ) {
            element.setAttribute(eventName, '');
            isSupported = is(element[eventName], 'function');

            // If property was created, "remove it" (by setting value to `undefined`)
            if ( !is(element[eventName], 'undefined') ) {
              element[eventName] = undefined;
            }
            element.removeAttribute(eventName);
          }
        }

        element = null;
        return isSupported;
      }
      return isEventSupported;
    })(),
    /*>>hasevent*/

    // TODO :: Add flag for hasownprop ? didn't last time

    // hasOwnProperty shim by kangax needed for Safari 2.0 support
    _hasOwnProperty = ({}).hasOwnProperty, hasOwnProp;

    if ( !is(_hasOwnProperty, 'undefined') && !is(_hasOwnProperty.call, 'undefined') ) {
      hasOwnProp = function (object, property) {
        return _hasOwnProperty.call(object, property);
      };
    }
    else {
      hasOwnProp = function (object, property) { /* yes, this can give false positives/negatives, but most of the time we don't care about those */
        return ((property in object) && is(object.constructor.prototype[property], 'undefined'));
      };
    }

    // Adapted from ES5-shim https://github.com/kriskowal/es5-shim/blob/master/es5-shim.js
    // es5.github.com/#x15.3.4.5

    if (!Function.prototype.bind) {
      Function.prototype.bind = function bind(that) {

        var target = this;

        if (typeof target != "function") {
            throw new TypeError();
        }

        var args = slice.call(arguments, 1),
            bound = function () {

            if (this instanceof bound) {

              var F = function(){};
              F.prototype = target.prototype;
              var self = new F();

              var result = target.apply(
                  self,
                  args.concat(slice.call(arguments))
              );
              if (Object(result) === result) {
                  return result;
              }
              return self;

            } else {

              return target.apply(
                  that,
                  args.concat(slice.call(arguments))
              );

            }

        };

        return bound;
      };
    }

    /**
     * setCss applies given styles to the Modernizr DOM node.
     */
    function setCss( str ) {
        mStyle.cssText = str;
    }

    /**
     * setCssAll extrapolates all vendor-specific css strings.
     */
    function setCssAll( str1, str2 ) {
        return setCss(prefixes.join(str1 + ';') + ( str2 || '' ));
    }

    /**
     * is returns a boolean for if typeof obj is exactly type.
     */
    function is( obj, type ) {
        return typeof obj === type;
    }

    /**
     * contains returns a boolean for if substr is found within str.
     */
    function contains( str, substr ) {
        return !!~('' + str).indexOf(substr);
    }

    /*>>testprop*/

    // testProps is a generic CSS / DOM property test.

    // In testing support for a given CSS property, it's legit to test:
    //    `elem.style[styleName] !== undefined`
    // If the property is supported it will return an empty string,
    // if unsupported it will return undefined.

    // We'll take advantage of this quick test and skip setting a style
    // on our modernizr element, but instead just testing undefined vs
    // empty string.

    // Because the testing of the CSS property names (with "-", as
    // opposed to the camelCase DOM properties) is non-portable and
    // non-standard but works in WebKit and IE (but not Gecko or Opera),
    // we explicitly reject properties with dashes so that authors
    // developing in WebKit or IE first don't end up with
    // browser-specific content by accident.

    function testProps( props, prefixed ) {
        for ( var i in props ) {
            var prop = props[i];
            if ( !contains(prop, "-") && mStyle[prop] !== undefined ) {
                return prefixed == 'pfx' ? prop : true;
            }
        }
        return false;
    }
    /*>>testprop*/

    // TODO :: add testDOMProps
    /**
     * testDOMProps is a generic DOM property test; if a browser supports
     *   a certain property, it won't return undefined for it.
     */
    function testDOMProps( props, obj, elem ) {
        for ( var i in props ) {
            var item = obj[props[i]];
            if ( item !== undefined) {

                // return the property name as a string
                if (elem === false) return props[i];

                // let's bind a function
                if (is(item, 'function')){
                  // default to autobind unless override
                  return item.bind(elem || obj);
                }

                // return the unbound function or obj or value
                return item;
            }
        }
        return false;
    }

    /*>>testallprops*/
    /**
     * testPropsAll tests a list of DOM properties we want to check against.
     *   We specify literally ALL possible (known and/or likely) properties on
     *   the element including the non-vendor prefixed one, for forward-
     *   compatibility.
     */
    function testPropsAll( prop, prefixed, elem ) {

        var ucProp  = prop.charAt(0).toUpperCase() + prop.slice(1),
            props   = (prop + ' ' + cssomPrefixes.join(ucProp + ' ') + ucProp).split(' ');

        // did they call .prefixed('boxSizing') or are we just testing a prop?
        if(is(prefixed, "string") || is(prefixed, "undefined")) {
          return testProps(props, prefixed);

        // otherwise, they called .prefixed('requestAnimationFrame', window[, elem])
        } else {
          props = (prop + ' ' + (domPrefixes).join(ucProp + ' ') + ucProp).split(' ');
          return testDOMProps(props, prefixed, elem);
        }
    }
    /*>>testallprops*/


    /**
     * Tests
     * -----
     */

    // The *new* flexbox
    // dev.w3.org/csswg/css3-flexbox

    tests['flexbox'] = function() {
      return testPropsAll('flexWrap');
    };

    // The *old* flexbox
    // www.w3.org/TR/2009/WD-css3-flexbox-20090723/

    tests['flexboxlegacy'] = function() {
        return testPropsAll('boxDirection');
    };

    // On the S60 and BB Storm, getContext exists, but always returns undefined
    // so we actually have to call getContext() to verify
    // github.com/Modernizr/Modernizr/issues/issue/97/

    tests['canvas'] = function() {
        var elem = document.createElement('canvas');
        return !!(elem.getContext && elem.getContext('2d'));
    };

    tests['canvastext'] = function() {
        return !!(Modernizr['canvas'] && is(document.createElement('canvas').getContext('2d').fillText, 'function'));
    };

    // webk.it/70117 is tracking a legit WebGL feature detect proposal

    // We do a soft detect which may false positive in order to avoid
    // an expensive context creation: bugzil.la/732441

    tests['webgl'] = function() {
        return !!window.WebGLRenderingContext;
    };

    /*
     * The Modernizr.touch test only indicates if the browser supports
     *    touch events, which does not necessarily reflect a touchscreen
     *    device, as evidenced by tablets running Windows 7 or, alas,
     *    the Palm Pre / WebOS (touch) phones.
     *
     * Additionally, Chrome (desktop) used to lie about its support on this,
     *    but that has since been rectified: crbug.com/36415
     *
     * We also test for Firefox 4 Multitouch Support.
     *
     * For more info, see: modernizr.github.com/Modernizr/touch.html
     */

    tests['touch'] = function() {
        var bool;

        if(('ontouchstart' in window) || window.DocumentTouch && document instanceof DocumentTouch) {
          bool = true;
        } else {
          injectElementWithStyles(['@media (',prefixes.join('touch-enabled),('),mod,')','{#modernizr{top:9px;position:absolute}}'].join(''), function( node ) {
            bool = node.offsetTop === 9;
          });
        }

        return bool;
    };


    // geolocation is often considered a trivial feature detect...
    // Turns out, it's quite tricky to get right:
    //
    // Using !!navigator.geolocation does two things we don't want. It:
    //   1. Leaks memory in IE9: github.com/Modernizr/Modernizr/issues/513
    //   2. Disables page caching in WebKit: webk.it/43956
    //
    // Meanwhile, in Firefox < 8, an about:config setting could expose
    // a false positive that would throw an exception: bugzil.la/688158

    tests['geolocation'] = function() {
        return 'geolocation' in navigator;
    };


    tests['postmessage'] = function() {
      return !!window.postMessage;
    };


    // Chrome incognito mode used to throw an exception when using openDatabase
    // It doesn't anymore.
    tests['websqldatabase'] = function() {
      return !!window.openDatabase;
    };

    // Vendors had inconsistent prefixing with the experimental Indexed DB:
    // - Webkit's implementation is accessible through webkitIndexedDB
    // - Firefox shipped moz_indexedDB before FF4b9, but since then has been mozIndexedDB
    // For speed, we don't test the legacy (and beta-only) indexedDB
    tests['indexedDB'] = function() {
      return !!testPropsAll("indexedDB", window);
    };

    // documentMode logic from YUI to filter out IE8 Compat Mode
    //   which false positives.
    tests['hashchange'] = function() {
      return isEventSupported('hashchange', window) && (document.documentMode === undefined || document.documentMode > 7);
    };

    // Per 1.6:
    // This used to be Modernizr.historymanagement but the longer
    // name has been deprecated in favor of a shorter and property-matching one.
    // The old API is still available in 1.6, but as of 2.0 will throw a warning,
    // and in the first release thereafter disappear entirely.
    tests['history'] = function() {
      return !!(window.history && history.pushState);
    };

    tests['draganddrop'] = function() {
        var div = document.createElement('div');
        return ('draggable' in div) || ('ondragstart' in div && 'ondrop' in div);
    };

    // FF3.6 was EOL'ed on 4/24/12, but the ESR version of FF10
    // will be supported until FF19 (2/12/13), at which time, ESR becomes FF17.
    // FF10 still uses prefixes, so check for it until then.
    // for more ESR info, see: mozilla.org/en-US/firefox/organizations/faq/
    tests['websockets'] = function() {
        return 'WebSocket' in window || 'MozWebSocket' in window;
    };


    // css-tricks.com/rgba-browser-support/
    tests['rgba'] = function() {
        // Set an rgba() color and check the returned value

        setCss('background-color:rgba(150,255,150,.5)');

        return contains(mStyle.backgroundColor, 'rgba');
    };

    tests['hsla'] = function() {
        // Same as rgba(), in fact, browsers re-map hsla() to rgba() internally,
        //   except IE9 who retains it as hsla

        setCss('background-color:hsla(120,40%,100%,.5)');

        return contains(mStyle.backgroundColor, 'rgba') || contains(mStyle.backgroundColor, 'hsla');
    };

    tests['multiplebgs'] = function() {
        // Setting multiple images AND a color on the background shorthand property
        //  and then querying the style.background property value for the number of
        //  occurrences of "url(" is a reliable method for detecting ACTUAL support for this!

        setCss('background:url(https://),url(https://),red url(https://)');

        // If the UA supports multiple backgrounds, there should be three occurrences
        //   of the string "url(" in the return value for elemStyle.background

        return (/(url\s*\(.*?){3}/).test(mStyle.background);
    };



    // this will false positive in Opera Mini
    //   github.com/Modernizr/Modernizr/issues/396

    tests['backgroundsize'] = function() {
        return testPropsAll('backgroundSize');
    };

    tests['borderimage'] = function() {
        return testPropsAll('borderImage');
    };


    // Super comprehensive table about all the unique implementations of
    // border-radius: muddledramblings.com/table-of-css3-border-radius-compliance

    tests['borderradius'] = function() {
        return testPropsAll('borderRadius');
    };

    // WebOS unfortunately false positives on this test.
    tests['boxshadow'] = function() {
        return testPropsAll('boxShadow');
    };

    // FF3.0 will false positive on this test
    tests['textshadow'] = function() {
        return document.createElement('div').style.textShadow === '';
    };


    tests['opacity'] = function() {
        // Browsers that actually have CSS Opacity implemented have done so
        //  according to spec, which means their return values are within the
        //  range of [0.0,1.0] - including the leading zero.

        setCssAll('opacity:.55');

        // The non-literal . in this regex is intentional:
        //   German Chrome returns this value as 0,55
        // github.com/Modernizr/Modernizr/issues/#issue/59/comment/516632
        return (/^0.55$/).test(mStyle.opacity);
    };


    // Note, Android < 4 will pass this test, but can only animate
    //   a single property at a time
    //   goo.gl/v3V4Gp
    tests['cssanimations'] = function() {
        return testPropsAll('animationName');
    };


    tests['csscolumns'] = function() {
        return testPropsAll('columnCount');
    };


    tests['cssgradients'] = function() {
        /**
         * For CSS Gradients syntax, please see:
         * webkit.org/blog/175/introducing-css-gradients/
         * developer.mozilla.org/en/CSS/-moz-linear-gradient
         * developer.mozilla.org/en/CSS/-moz-radial-gradient
         * dev.w3.org/csswg/css3-images/#gradients-
         */

        var str1 = 'background-image:',
            str2 = 'gradient(linear,left top,right bottom,from(#9f9),to(white));',
            str3 = 'linear-gradient(left top,#9f9, white);';

        setCss(
             // legacy webkit syntax (FIXME: remove when syntax not in use anymore)
              (str1 + '-webkit- '.split(' ').join(str2 + str1) +
             // standard syntax             // trailing 'background-image:'
              prefixes.join(str3 + str1)).slice(0, -str1.length)
        );

        return contains(mStyle.backgroundImage, 'gradient');
    };


    tests['cssreflections'] = function() {
        return testPropsAll('boxReflect');
    };


    tests['csstransforms'] = function() {
        return !!testPropsAll('transform');
    };


    tests['csstransforms3d'] = function() {

        var ret = !!testPropsAll('perspective');

        // Webkit's 3D transforms are passed off to the browser's own graphics renderer.
        //   It works fine in Safari on Leopard and Snow Leopard, but not in Chrome in
        //   some conditions. As a result, Webkit typically recognizes the syntax but
        //   will sometimes throw a false positive, thus we must do a more thorough check:
        if ( ret && 'webkitPerspective' in docElement.style ) {

          // Webkit allows this media query to succeed only if the feature is enabled.
          // `@media (transform-3d),(-webkit-transform-3d){ ... }`
          injectElementWithStyles('@media (transform-3d),(-webkit-transform-3d){#modernizr{left:9px;position:absolute;height:3px;}}', function( node, rule ) {
            ret = node.offsetLeft === 9 && node.offsetHeight === 3;
          });
        }
        return ret;
    };


    tests['csstransitions'] = function() {
        return testPropsAll('transition');
    };


    /*>>fontface*/
    // @font-face detection routine by Diego Perini
    // javascript.nwbox.com/CSSSupport/

    // false positives:
    //   WebOS github.com/Modernizr/Modernizr/issues/342
    //   WP7   github.com/Modernizr/Modernizr/issues/538
    tests['fontface'] = function() {
        var bool;

        injectElementWithStyles('@font-face {font-family:"font";src:url("https://")}', function( node, rule ) {
          var style = document.getElementById('smodernizr'),
              sheet = style.sheet || style.styleSheet,
              cssText = sheet ? (sheet.cssRules && sheet.cssRules[0] ? sheet.cssRules[0].cssText : sheet.cssText || '') : '';

          bool = /src/i.test(cssText) && cssText.indexOf(rule.split(' ')[0]) === 0;
        });

        return bool;
    };
    /*>>fontface*/

    // CSS generated content detection
    tests['generatedcontent'] = function() {
        var bool;

        injectElementWithStyles(['#',mod,'{font:0/0 a}#',mod,':after{content:"',smile,'";visibility:hidden;font:3px/1 a}'].join(''), function( node ) {
          bool = node.offsetHeight >= 3;
        });

        return bool;
    };



    // These tests evaluate support of the video/audio elements, as well as
    // testing what types of content they support.
    //
    // We're using the Boolean constructor here, so that we can extend the value
    // e.g.  Modernizr.video     // true
    //       Modernizr.video.ogg // 'probably'
    //
    // Codec values from : github.com/NielsLeenheer/html5test/blob/9106a8/index.html#L845
    //                     thx to NielsLeenheer and zcorpan

    // Note: in some older browsers, "no" was a return value instead of empty string.
    //   It was live in FF3.5.0 and 3.5.1, but fixed in 3.5.2
    //   It was also live in Safari 4.0.0 - 4.0.4, but fixed in 4.0.5

    tests['video'] = function() {
        var elem = document.createElement('video'),
            bool = false;

        // IE9 Running on Windows Server SKU can cause an exception to be thrown, bug #224
        try {
            if ( bool = !!elem.canPlayType ) {
                bool      = new Boolean(bool);
                bool.ogg  = elem.canPlayType('video/ogg; codecs="theora"')      .replace(/^no$/,'');

                // Without QuickTime, this value will be `undefined`. github.com/Modernizr/Modernizr/issues/546
                bool.h264 = elem.canPlayType('video/mp4; codecs="avc1.42E01E"') .replace(/^no$/,'');

                bool.webm = elem.canPlayType('video/webm; codecs="vp8, vorbis"').replace(/^no$/,'');
            }

        } catch(e) { }

        return bool;
    };

    tests['audio'] = function() {
        var elem = document.createElement('audio'),
            bool = false;

        try {
            if ( bool = !!elem.canPlayType ) {
                bool      = new Boolean(bool);
                bool.ogg  = elem.canPlayType('audio/ogg; codecs="vorbis"').replace(/^no$/,'');
                bool.mp3  = elem.canPlayType('audio/mpeg;')               .replace(/^no$/,'');

                // Mimetypes accepted:
                //   developer.mozilla.org/En/Media_formats_supported_by_the_audio_and_video_elements
                //   bit.ly/iphoneoscodecs
                bool.wav  = elem.canPlayType('audio/wav; codecs="1"')     .replace(/^no$/,'');
                bool.m4a  = ( elem.canPlayType('audio/x-m4a;')            ||
                              elem.canPlayType('audio/aac;'))             .replace(/^no$/,'');
            }
        } catch(e) { }

        return bool;
    };


    // In FF4, if disabled, window.localStorage should === null.

    // Normally, we could not test that directly and need to do a
    //   `('localStorage' in window) && ` test first because otherwise Firefox will
    //   throw bugzil.la/365772 if cookies are disabled

    // Also in iOS5 Private Browsing mode, attempting to use localStorage.setItem
    // will throw the exception:
    //   QUOTA_EXCEEDED_ERRROR DOM Exception 22.
    // Peculiarly, getItem and removeItem calls do not throw.

    // Because we are forced to try/catch this, we'll go aggressive.

    // Just FWIW: IE8 Compat mode supports these features completely:
    //   www.quirksmode.org/dom/html5.html
    // But IE8 doesn't support either with local files

    tests['localstorage'] = function() {
        try {
            localStorage.setItem(mod, mod);
            localStorage.removeItem(mod);
            return true;
        } catch(e) {
            return false;
        }
    };

    tests['sessionstorage'] = function() {
        try {
            sessionStorage.setItem(mod, mod);
            sessionStorage.removeItem(mod);
            return true;
        } catch(e) {
            return false;
        }
    };


    tests['webworkers'] = function() {
        return !!window.Worker;
    };


    tests['applicationcache'] = function() {
        return !!window.applicationCache;
    };


    // Thanks to Erik Dahlstrom
    tests['svg'] = function() {
        return !!document.createElementNS && !!document.createElementNS(ns.svg, 'svg').createSVGRect;
    };

    // specifically for SVG inline in HTML, not within XHTML
    // test page: paulirish.com/demo/inline-svg
    tests['inlinesvg'] = function() {
      var div = document.createElement('div');
      div.innerHTML = '<svg/>';
      return (div.firstChild && div.firstChild.namespaceURI) == ns.svg;
    };

    // SVG SMIL animation
    tests['smil'] = function() {
        return !!document.createElementNS && /SVGAnimate/.test(toString.call(document.createElementNS(ns.svg, 'animate')));
    };

    // This test is only for clip paths in SVG proper, not clip paths on HTML content
    // demo: srufaculty.sru.edu/david.dailey/svg/newstuff/clipPath4.svg

    // However read the comments to dig into applying SVG clippaths to HTML content here:
    //   github.com/Modernizr/Modernizr/issues/213#issuecomment-1149491
    tests['svgclippaths'] = function() {
        return !!document.createElementNS && /SVGClipPath/.test(toString.call(document.createElementNS(ns.svg, 'clipPath')));
    };

    /*>>webforms*/
    // input features and input types go directly onto the ret object, bypassing the tests loop.
    // Hold this guy to execute in a moment.
    function webforms() {
        /*>>input*/
        // Run through HTML5's new input attributes to see if the UA understands any.
        // We're using f which is the <input> element created early on
        // Mike Taylr has created a comprehensive resource for testing these attributes
        //   when applied to all input types:
        //   miketaylr.com/code/input-type-attr.html
        // spec: www.whatwg.org/specs/web-apps/current-work/multipage/the-input-element.html#input-type-attr-summary

        // Only input placeholder is tested while textarea's placeholder is not.
        // Currently Safari 4 and Opera 11 have support only for the input placeholder
        // Both tests are available in feature-detects/forms-placeholder.js
        Modernizr['input'] = (function( props ) {
            for ( var i = 0, len = props.length; i < len; i++ ) {
                attrs[ props[i] ] = !!(props[i] in inputElem);
            }
            if (attrs.list){
              // safari false positive's on datalist: webk.it/74252
              // see also github.com/Modernizr/Modernizr/issues/146
              attrs.list = !!(document.createElement('datalist') && window.HTMLDataListElement);
            }
            return attrs;
        })('autocomplete autofocus list placeholder max min multiple pattern required step'.split(' '));
        /*>>input*/

        /*>>inputtypes*/
        // Run through HTML5's new input types to see if the UA understands any.
        //   This is put behind the tests runloop because it doesn't return a
        //   true/false like all the other tests; instead, it returns an object
        //   containing each input type with its corresponding true/false value

        // Big thanks to @miketaylr for the html5 forms expertise. miketaylr.com/
        Modernizr['inputtypes'] = (function(props) {

            for ( var i = 0, bool, inputElemType, defaultView, len = props.length; i < len; i++ ) {

                inputElem.setAttribute('type', inputElemType = props[i]);
                bool = inputElem.type !== 'text';

                // We first check to see if the type we give it sticks..
                // If the type does, we feed it a textual value, which shouldn't be valid.
                // If the value doesn't stick, we know there's input sanitization which infers a custom UI
                if ( bool ) {

                    inputElem.value         = smile;
                    inputElem.style.cssText = 'position:absolute;visibility:hidden;';

                    if ( /^range$/.test(inputElemType) && inputElem.style.WebkitAppearance !== undefined ) {

                      docElement.appendChild(inputElem);
                      defaultView = document.defaultView;

                      // Safari 2-4 allows the smiley as a value, despite making a slider
                      bool =  defaultView.getComputedStyle &&
                              defaultView.getComputedStyle(inputElem, null).WebkitAppearance !== 'textfield' &&
                              // Mobile android web browser has false positive, so must
                              // check the height to see if the widget is actually there.
                              (inputElem.offsetHeight !== 0);

                      docElement.removeChild(inputElem);

                    } else if ( /^(search|tel)$/.test(inputElemType) ){
                      // Spec doesn't define any special parsing or detectable UI
                      //   behaviors so we pass these through as true

                      // Interestingly, opera fails the earlier test, so it doesn't
                      //  even make it here.

                    } else if ( /^(url|email)$/.test(inputElemType) ) {
                      // Real url and email support comes with prebaked validation.
                      bool = inputElem.checkValidity && inputElem.checkValidity() === false;

                    } else {
                      // If the upgraded input compontent rejects the :) text, we got a winner
                      bool = inputElem.value != smile;
                    }
                }

                inputs[ props[i] ] = !!bool;
            }
            return inputs;
        })('search tel url email datetime date month week time datetime-local number range color'.split(' '));
        /*>>inputtypes*/
    }
    /*>>webforms*/


    // End of test definitions
    // -----------------------



    // Run through all tests and detect their support in the current UA.
    // todo: hypothetically we could be doing an array of tests and use a basic loop here.
    for ( var feature in tests ) {
        if ( hasOwnProp(tests, feature) ) {
            // run the test, throw the return value into the Modernizr,
            //   then based on that boolean, define an appropriate className
            //   and push it into an array of classes we'll join later.
            featureName  = feature.toLowerCase();
            Modernizr[featureName] = tests[feature]();

            classes.push((Modernizr[featureName] ? '' : 'no-') + featureName);
        }
    }

    /*>>webforms*/
    // input tests need to run.
    Modernizr.input || webforms();
    /*>>webforms*/


    /**
     * addTest allows the user to define their own feature tests
     * the result will be added onto the Modernizr object,
     * as well as an appropriate className set on the html element
     *
     * @param feature - String naming the feature
     * @param test - Function returning true if feature is supported, false if not
     */
     Modernizr.addTest = function ( feature, test ) {
       if ( typeof feature == 'object' ) {
         for ( var key in feature ) {
           if ( hasOwnProp( feature, key ) ) {
             Modernizr.addTest( key, feature[ key ] );
           }
         }
       } else {

         feature = feature.toLowerCase();

         if ( Modernizr[feature] !== undefined ) {
           // we're going to quit if you're trying to overwrite an existing test
           // if we were to allow it, we'd do this:
           //   var re = new RegExp("\\b(no-)?" + feature + "\\b");
           //   docElement.className = docElement.className.replace( re, '' );
           // but, no rly, stuff 'em.
           return Modernizr;
         }

         test = typeof test == 'function' ? test() : test;

         if (typeof enableClasses !== "undefined" && enableClasses) {
           docElement.className += ' ' + (test ? '' : 'no-') + feature;
         }
         Modernizr[feature] = test;

       }

       return Modernizr; // allow chaining.
     };


    // Reset modElem.cssText to nothing to reduce memory footprint.
    setCss('');
    modElem = inputElem = null;

    /*>>shiv*/
    /**
     * @preserve HTML5 Shiv prev3.7.1 | @afarkas @jdalton @jon_neal @rem | MIT/GPL2 Licensed
     */
    ;(function(window, document) {
        /*jshint evil:true */
        /** version */
        var version = '3.7.0';

        /** Preset options */
        var options = window.html5 || {};

        /** Used to skip problem elements */
        var reSkip = /^<|^(?:button|map|select|textarea|object|iframe|option|optgroup)$/i;

        /** Not all elements can be cloned in IE **/
        var saveClones = /^(?:a|b|code|div|fieldset|h1|h2|h3|h4|h5|h6|i|label|li|ol|p|q|span|strong|style|table|tbody|td|th|tr|ul)$/i;

        /** Detect whether the browser supports default html5 styles */
        var supportsHtml5Styles;

        /** Name of the expando, to work with multiple documents or to re-shiv one document */
        var expando = '_html5shiv';

        /** The id for the the documents expando */
        var expanID = 0;

        /** Cached data for each document */
        var expandoData = {};

        /** Detect whether the browser supports unknown elements */
        var supportsUnknownElements;

        (function() {
          try {
            var a = document.createElement('a');
            a.innerHTML = '<xyz></xyz>';
            //if the hidden property is implemented we can assume, that the browser supports basic HTML5 Styles
            supportsHtml5Styles = ('hidden' in a);

            supportsUnknownElements = a.childNodes.length == 1 || (function() {
              // assign a false positive if unable to shiv
              (document.createElement)('a');
              var frag = document.createDocumentFragment();
              return (
                typeof frag.cloneNode == 'undefined' ||
                typeof frag.createDocumentFragment == 'undefined' ||
                typeof frag.createElement == 'undefined'
              );
            }());
          } catch(e) {
            // assign a false positive if detection fails => unable to shiv
            supportsHtml5Styles = true;
            supportsUnknownElements = true;
          }

        }());

        /*--------------------------------------------------------------------------*/

        /**
         * Creates a style sheet with the given CSS text and adds it to the document.
         * @private
         * @param {Document} ownerDocument The document.
         * @param {String} cssText The CSS text.
         * @returns {StyleSheet} The style element.
         */
        function addStyleSheet(ownerDocument, cssText) {
          var p = ownerDocument.createElement('p'),
          parent = ownerDocument.getElementsByTagName('head')[0] || ownerDocument.documentElement;

          p.innerHTML = 'x<style>' + cssText + '</style>';
          return parent.insertBefore(p.lastChild, parent.firstChild);
        }

        /**
         * Returns the value of `html5.elements` as an array.
         * @private
         * @returns {Array} An array of shived element node names.
         */
        function getElements() {
          var elements = html5.elements;
          return typeof elements == 'string' ? elements.split(' ') : elements;
        }

        /**
         * Returns the data associated to the given document
         * @private
         * @param {Document} ownerDocument The document.
         * @returns {Object} An object of data.
         */
        function getExpandoData(ownerDocument) {
          var data = expandoData[ownerDocument[expando]];
          if (!data) {
            data = {};
            expanID++;
            ownerDocument[expando] = expanID;
            expandoData[expanID] = data;
          }
          return data;
        }

        /**
         * returns a shived element for the given nodeName and document
         * @memberOf html5
         * @param {String} nodeName name of the element
         * @param {Document} ownerDocument The context document.
         * @returns {Object} The shived element.
         */
        function createElement(nodeName, ownerDocument, data){
          if (!ownerDocument) {
            ownerDocument = document;
          }
          if(supportsUnknownElements){
            return ownerDocument.createElement(nodeName);
          }
          if (!data) {
            data = getExpandoData(ownerDocument);
          }
          var node;

          if (data.cache[nodeName]) {
            node = data.cache[nodeName].cloneNode();
          } else if (saveClones.test(nodeName)) {
            node = (data.cache[nodeName] = data.createElem(nodeName)).cloneNode();
          } else {
            node = data.createElem(nodeName);
          }

          // Avoid adding some elements to fragments in IE < 9 because
          // * Attributes like `name` or `type` cannot be set/changed once an element
          //   is inserted into a document/fragment
          // * Link elements with `src` attributes that are inaccessible, as with
          //   a 403 response, will cause the tab/window to crash
          // * Script elements appended to fragments will execute when their `src`
          //   or `text` property is set
          return node.canHaveChildren && !reSkip.test(nodeName) && !node.tagUrn ? data.frag.appendChild(node) : node;
        }

        /**
         * returns a shived DocumentFragment for the given document
         * @memberOf html5
         * @param {Document} ownerDocument The context document.
         * @returns {Object} The shived DocumentFragment.
         */
        function createDocumentFragment(ownerDocument, data){
          if (!ownerDocument) {
            ownerDocument = document;
          }
          if(supportsUnknownElements){
            return ownerDocument.createDocumentFragment();
          }
          data = data || getExpandoData(ownerDocument);
          var clone = data.frag.cloneNode(),
          i = 0,
          elems = getElements(),
          l = elems.length;
          for(;i<l;i++){
            clone.createElement(elems[i]);
          }
          return clone;
        }

        /**
         * Shivs the `createElement` and `createDocumentFragment` methods of the document.
         * @private
         * @param {Document|DocumentFragment} ownerDocument The document.
         * @param {Object} data of the document.
         */
        function shivMethods(ownerDocument, data) {
          if (!data.cache) {
            data.cache = {};
            data.createElem = ownerDocument.createElement;
            data.createFrag = ownerDocument.createDocumentFragment;
            data.frag = data.createFrag();
          }


          ownerDocument.createElement = function(nodeName) {
            //abort shiv
            if (!html5.shivMethods) {
              return data.createElem(nodeName);
            }
            return createElement(nodeName, ownerDocument, data);
          };

          ownerDocument.createDocumentFragment = Function('h,f', 'return function(){' +
                                                          'var n=f.cloneNode(),c=n.createElement;' +
                                                          'h.shivMethods&&(' +
                                                          // unroll the `createElement` calls
                                                          getElements().join().replace(/[\w\-]+/g, function(nodeName) {
            data.createElem(nodeName);
            data.frag.createElement(nodeName);
            return 'c("' + nodeName + '")';
          }) +
            ');return n}'
                                                         )(html5, data.frag);
        }

        /*--------------------------------------------------------------------------*/

        /**
         * Shivs the given document.
         * @memberOf html5
         * @param {Document} ownerDocument The document to shiv.
         * @returns {Document} The shived document.
         */
        function shivDocument(ownerDocument) {
          if (!ownerDocument) {
            ownerDocument = document;
          }
          var data = getExpandoData(ownerDocument);

          if (html5.shivCSS && !supportsHtml5Styles && !data.hasCSS) {
            data.hasCSS = !!addStyleSheet(ownerDocument,
                                          // corrects block display not defined in IE6/7/8/9
                                          'article,aside,dialog,figcaption,figure,footer,header,hgroup,main,nav,section{display:block}' +
                                            // adds styling not present in IE6/7/8/9
                                            'mark{background:#FF0;color:#000}' +
                                            // hides non-rendered elements
                                            'template{display:none}'
                                         );
          }
          if (!supportsUnknownElements) {
            shivMethods(ownerDocument, data);
          }
          return ownerDocument;
        }

        /*--------------------------------------------------------------------------*/

        /**
         * The `html5` object is exposed so that more elements can be shived and
         * existing shiving can be detected on iframes.
         * @type Object
         * @example
         *
         * // options can be changed before the script is included
         * html5 = { 'elements': 'mark section', 'shivCSS': false, 'shivMethods': false };
         */
        var html5 = {

          /**
           * An array or space separated string of node names of the elements to shiv.
           * @memberOf html5
           * @type Array|String
           */
          'elements': options.elements || 'abbr article aside audio bdi canvas data datalist details dialog figcaption figure footer header hgroup main mark meter nav output progress section summary template time video',

          /**
           * current version of html5shiv
           */
          'version': version,

          /**
           * A flag to indicate that the HTML5 style sheet should be inserted.
           * @memberOf html5
           * @type Boolean
           */
          'shivCSS': (options.shivCSS !== false),

          /**
           * Is equal to true if a browser supports creating unknown/HTML5 elements
           * @memberOf html5
           * @type boolean
           */
          'supportsUnknownElements': supportsUnknownElements,

          /**
           * A flag to indicate that the document's `createElement` and `createDocumentFragment`
           * methods should be overwritten.
           * @memberOf html5
           * @type Boolean
           */
          'shivMethods': (options.shivMethods !== false),

          /**
           * A string to describe the type of `html5` object ("default" or "default print").
           * @memberOf html5
           * @type String
           */
          'type': 'default',

          // shivs the document according to the specified `html5` object options
          'shivDocument': shivDocument,

          //creates a shived element
          createElement: createElement,

          //creates a shived documentFragment
          createDocumentFragment: createDocumentFragment
        };

        /*--------------------------------------------------------------------------*/

        // expose html5
        window.html5 = html5;

        // shiv the document
        shivDocument(document);

    }(this, document));
    /*>>shiv*/

    // Assign private properties to the return object with prefix
    Modernizr._version      = version;

    // expose these for the plugin API. Look in the source for how to join() them against your input
    /*>>prefixes*/
    Modernizr._prefixes     = prefixes;
    /*>>prefixes*/
    /*>>domprefixes*/
    Modernizr._domPrefixes  = domPrefixes;
    Modernizr._cssomPrefixes  = cssomPrefixes;
    /*>>domprefixes*/

    /*>>mq*/
    // Modernizr.mq tests a given media query, live against the current state of the window
    // A few important notes:
    //   * If a browser does not support media queries at all (eg. oldIE) the mq() will always return false
    //   * A max-width or orientation query will be evaluated against the current state, which may change later.
    //   * You must specify values. Eg. If you are testing support for the min-width media query use:
    //       Modernizr.mq('(min-width:0)')
    // usage:
    // Modernizr.mq('only screen and (max-width:768)')
    Modernizr.mq            = testMediaQuery;
    /*>>mq*/

    /*>>hasevent*/
    // Modernizr.hasEvent() detects support for a given event, with an optional element to test on
    // Modernizr.hasEvent('gesturestart', elem)
    Modernizr.hasEvent      = isEventSupported;
    /*>>hasevent*/

    /*>>testprop*/
    // Modernizr.testProp() investigates whether a given style property is recognized
    // Note that the property names must be provided in the camelCase variant.
    // Modernizr.testProp('pointerEvents')
    Modernizr.testProp      = function(prop){
        return testProps([prop]);
    };
    /*>>testprop*/

    /*>>testallprops*/
    // Modernizr.testAllProps() investigates whether a given style property,
    //   or any of its vendor-prefixed variants, is recognized
    // Note that the property names must be provided in the camelCase variant.
    // Modernizr.testAllProps('boxSizing')
    Modernizr.testAllProps  = testPropsAll;
    /*>>testallprops*/


    /*>>teststyles*/
    // Modernizr.testStyles() allows you to add custom styles to the document and test an element afterwards
    // Modernizr.testStyles('#modernizr { position:absolute }', function(elem, rule){ ... })
    Modernizr.testStyles    = injectElementWithStyles;
    /*>>teststyles*/


    /*>>prefixed*/
    // Modernizr.prefixed() returns the prefixed or nonprefixed property name variant of your input
    // Modernizr.prefixed('boxSizing') // 'MozBoxSizing'

    // Properties must be passed as dom-style camelcase, rather than `box-sizing` hypentated style.
    // Return values will also be the camelCase variant, if you need to translate that to hypenated style use:
    //
    //     str.replace(/([A-Z])/g, function(str,m1){ return '-' + m1.toLowerCase(); }).replace(/^ms-/,'-ms-');

    // If you're trying to ascertain which transition end event to bind to, you might do something like...
    //
    //     var transEndEventNames = {
    //       'WebkitTransition' : 'webkitTransitionEnd',
    //       'MozTransition'    : 'transitionend',
    //       'OTransition'      : 'oTransitionEnd',
    //       'msTransition'     : 'MSTransitionEnd',
    //       'transition'       : 'transitionend'
    //     },
    //     transEndEventName = transEndEventNames[ Modernizr.prefixed('transition') ];

    Modernizr.prefixed      = function(prop, obj, elem){
      if(!obj) {
        return testPropsAll(prop, 'pfx');
      } else {
        // Testing DOM property e.g. Modernizr.prefixed('requestAnimationFrame', window) // 'mozRequestAnimationFrame'
        return testPropsAll(prop, obj, elem);
      }
    };
    /*>>prefixed*/


    /*>>cssclasses*/
    // Remove "no-js" class from <html> element, if it exists:
    docElement.className = docElement.className.replace(/(^|\s)no-js(\s|$)/, '$1$2') +

                            // Add the new classes to the <html> element.
                            (enableClasses ? ' js ' + classes.join(' ') : '');
    /*>>cssclasses*/

    return Modernizr;

})(this, this.document);

/*! jCarousel - v0.3.1 - 2014-04-26
* http://sorgalla.com/jcarousel
* Copyright (c) 2014 Jan Sorgalla; Licensed MIT */
(function($) {
    'use strict';

    var jCarousel = $.jCarousel = {};

    jCarousel.version = '0.3.1';

    var rRelativeTarget = /^([+\-]=)?(.+)$/;

    jCarousel.parseTarget = function(target) {
        var relative = false,
            parts    = typeof target !== 'object' ?
                           rRelativeTarget.exec(target) :
                           null;

        if (parts) {
            target = parseInt(parts[2], 10) || 0;

            if (parts[1]) {
                relative = true;
                if (parts[1] === '-=') {
                    target *= -1;
                }
            }
        } else if (typeof target !== 'object') {
            target = parseInt(target, 10) || 0;
        }

        return {
            target: target,
            relative: relative
        };
    };

    jCarousel.detectCarousel = function(element) {
        var carousel;

        while (element.length > 0) {
            carousel = element.filter('[data-jcarousel]');

            if (carousel.length > 0) {
                return carousel;
            }

            carousel = element.find('[data-jcarousel]');

            if (carousel.length > 0) {
                return carousel;
            }

            element = element.parent();
        }

        return null;
    };

    jCarousel.base = function(pluginName) {
        return {
            version:  jCarousel.version,
            _options:  {},
            _element:  null,
            _carousel: null,
            _init:     $.noop,
            _create:   $.noop,
            _destroy:  $.noop,
            _reload:   $.noop,
            create: function() {
                this._element
                    .attr('data-' + pluginName.toLowerCase(), true)
                    .data(pluginName, this);

                if (false === this._trigger('create')) {
                    return this;
                }

                this._create();

                this._trigger('createend');

                return this;
            },
            destroy: function() {
                if (false === this._trigger('destroy')) {
                    return this;
                }

                this._destroy();

                this._trigger('destroyend');

                this._element
                    .removeData(pluginName)
                    .removeAttr('data-' + pluginName.toLowerCase());

                return this;
            },
            reload: function(options) {
                if (false === this._trigger('reload')) {
                    return this;
                }

                if (options) {
                    this.options(options);
                }

                this._reload();

                this._trigger('reloadend');

                return this;
            },
            element: function() {
                return this._element;
            },
            options: function(key, value) {
                if (arguments.length === 0) {
                    return $.extend({}, this._options);
                }

                if (typeof key === 'string') {
                    if (typeof value === 'undefined') {
                        return typeof this._options[key] === 'undefined' ?
                                null :
                                this._options[key];
                    }

                    this._options[key] = value;
                } else {
                    this._options = $.extend({}, this._options, key);
                }

                return this;
            },
            carousel: function() {
                if (!this._carousel) {
                    this._carousel = jCarousel.detectCarousel(this.options('carousel') || this._element);

                    if (!this._carousel) {
                        $.error('Could not detect carousel for plugin "' + pluginName + '"');
                    }
                }

                return this._carousel;
            },
            _trigger: function(type, element, data) {
                var event,
                    defaultPrevented = false;

                data = [this].concat(data || []);

                (element || this._element).each(function() {
                    event = $.Event((pluginName + ':' + type).toLowerCase());

                    $(this).trigger(event, data);

                    if (event.isDefaultPrevented()) {
                        defaultPrevented = true;
                    }
                });

                return !defaultPrevented;
            }
        };
    };

    jCarousel.plugin = function(pluginName, pluginPrototype) {
        var Plugin = $[pluginName] = function(element, options) {
            this._element = $(element);
            this.options(options);

            this._init();
            this.create();
        };

        Plugin.fn = Plugin.prototype = $.extend(
            {},
            jCarousel.base(pluginName),
            pluginPrototype
        );

        $.fn[pluginName] = function(options) {
            var args        = Array.prototype.slice.call(arguments, 1),
                returnValue = this;

            if (typeof options === 'string') {
                this.each(function() {
                    var instance = $(this).data(pluginName);

                    if (!instance) {
                        return $.error(
                            'Cannot call methods on ' + pluginName + ' prior to initialization; ' +
                            'attempted to call method "' + options + '"'
                        );
                    }

                    if (!$.isFunction(instance[options]) || options.charAt(0) === '_') {
                        return $.error(
                            'No such method "' + options + '" for ' + pluginName + ' instance'
                        );
                    }

                    var methodValue = instance[options].apply(instance, args);

                    if (methodValue !== instance && typeof methodValue !== 'undefined') {
                        returnValue = methodValue;
                        return false;
                    }
                });
            } else {
                this.each(function() {
                    var instance = $(this).data(pluginName);

                    if (instance instanceof Plugin) {
                        instance.reload(options);
                    } else {
                        new Plugin(this, options);
                    }
                });
            }

            return returnValue;
        };

        return Plugin;
    };
}(jQuery));

(function($, window) {
    'use strict';

    var toFloat = function(val) {
        return parseFloat(val) || 0;
    };

    $.jCarousel.plugin('jcarousel', {
        animating:   false,
        tail:        0,
        inTail:      false,
        resizeTimer: null,
        lt:          null,
        vertical:    false,
        rtl:         false,
        circular:    false,
        underflow:   false,
        relative:    false,

        _options: {
            list: function() {
                return this.element().children().eq(0);
            },
            items: function() {
                return this.list().children();
            },
            animation:   400,
            transitions: false,
            wrap:        null,
            vertical:    null,
            rtl:         null,
            center:      false
        },

        // Protected, don't access directly
        _list:         null,
        _items:        null,
        _target:       null,
        _first:        null,
        _last:         null,
        _visible:      null,
        _fullyvisible: null,
        _init: function() {
            var self = this;

            this.onWindowResize = function() {
                if (self.resizeTimer) {
                    clearTimeout(self.resizeTimer);
                }

                self.resizeTimer = setTimeout(function() {
                    self.reload();
                }, 100);
            };

            return this;
        },
        _create: function() {
            this._reload();

            $(window).on('resize.jcarousel', this.onWindowResize);
        },
        _destroy: function() {
            $(window).off('resize.jcarousel', this.onWindowResize);
        },
        _reload: function() {
            this.vertical = this.options('vertical');

            if (this.vertical == null) {
                this.vertical = this.list().height() > this.list().width();
            }

            this.rtl = this.options('rtl');

            if (this.rtl == null) {
                this.rtl = (function(element) {
                    if (('' + element.attr('dir')).toLowerCase() === 'rtl') {
                        return true;
                    }

                    var found = false;

                    element.parents('[dir]').each(function() {
                        if ((/rtl/i).test($(this).attr('dir'))) {
                            found = true;
                            return false;
                        }
                    });

                    return found;
                }(this._element));
            }

            this.lt = this.vertical ? 'top' : 'left';

            // Ensure before closest() call
            this.relative = this.list().css('position') === 'relative';

            // Force list and items reload
            this._list  = null;
            this._items = null;

            var item = this._target && this.index(this._target) >= 0 ?
                           this._target :
                           this.closest();

            // _prepare() needs this here
            this.circular  = this.options('wrap') === 'circular';
            this.underflow = false;

            var props = {'left': 0, 'top': 0};

            if (item.length > 0) {
                this._prepare(item);
                this.list().find('[data-jcarousel-clone]').remove();

                // Force items reload
                this._items = null;

                this.underflow = this._fullyvisible.length >= this.items().length;
                this.circular  = this.circular && !this.underflow;

                props[this.lt] = this._position(item) + 'px';
            }

            this.move(props);

            return this;
        },
        list: function() {
            if (this._list === null) {
                var option = this.options('list');
                this._list = $.isFunction(option) ? option.call(this) : this._element.find(option);
            }

            return this._list;
        },
        items: function() {
            if (this._items === null) {
                var option = this.options('items');
                this._items = ($.isFunction(option) ? option.call(this) : this.list().find(option)).not('[data-jcarousel-clone]');
            }

            return this._items;
        },
        index: function(item) {
            return this.items().index(item);
        },
        closest: function() {
            var self    = this,
                pos     = this.list().position()[this.lt],
                closest = $(), // Ensure we're returning a jQuery instance
                stop    = false,
                lrb     = this.vertical ? 'bottom' : (this.rtl && !this.relative ? 'left' : 'right'),
                width;

            if (this.rtl && this.relative && !this.vertical) {
                pos += this.list().width() - this.clipping();
            }

            this.items().each(function() {
                closest = $(this);

                if (stop) {
                    return false;
                }

                var dim = self.dimension(closest);

                pos += dim;

                if (pos >= 0) {
                    width = dim - toFloat(closest.css('margin-' + lrb));

                    if ((Math.abs(pos) - dim + (width / 2)) <= 0) {
                        stop = true;
                    } else {
                        return false;
                    }
                }
            });


            return closest;
        },
        target: function() {
            return this._target;
        },
        first: function() {
            return this._first;
        },
        last: function() {
            return this._last;
        },
        visible: function() {
            return this._visible;
        },
        fullyvisible: function() {
            return this._fullyvisible;
        },
        hasNext: function() {
            if (false === this._trigger('hasnext')) {
                return true;
            }

            var wrap = this.options('wrap'),
                end = this.items().length - 1;

            return end >= 0 && !this.underflow &&
                ((wrap && wrap !== 'first') ||
                    (this.index(this._last) < end) ||
                    (this.tail && !this.inTail)) ? true : false;
        },
        hasPrev: function() {
            if (false === this._trigger('hasprev')) {
                return true;
            }

            var wrap = this.options('wrap');

            return this.items().length > 0 && !this.underflow &&
                ((wrap && wrap !== 'last') ||
                    (this.index(this._first) > 0) ||
                    (this.tail && this.inTail)) ? true : false;
        },
        clipping: function() {
            return this._element['inner' + (this.vertical ? 'Height' : 'Width')]();
        },
        dimension: function(element) {
            return element['outer' + (this.vertical ? 'Height' : 'Width')](true);
        },
        scroll: function(target, animate, callback) {
            if (this.animating) {
                return this;
            }

            if (false === this._trigger('scroll', null, [target, animate])) {
                return this;
            }

            if ($.isFunction(animate)) {
                callback = animate;
                animate  = true;
            }

            var parsed = $.jCarousel.parseTarget(target);

            if (parsed.relative) {
                var end    = this.items().length - 1,
                    scroll = Math.abs(parsed.target),
                    wrap   = this.options('wrap'),
                    current,
                    first,
                    index,
                    start,
                    curr,
                    isVisible,
                    props,
                    i;

                if (parsed.target > 0) {
                    var last = this.index(this._last);

                    if (last >= end && this.tail) {
                        if (!this.inTail) {
                            this._scrollTail(animate, callback);
                        } else {
                            if (wrap === 'both' || wrap === 'last') {
                                this._scroll(0, animate, callback);
                            } else {
                                if ($.isFunction(callback)) {
                                    callback.call(this, false);
                                }
                            }
                        }
                    } else {
                        current = this.index(this._target);

                        if ((this.underflow && current === end && (wrap === 'circular' || wrap === 'both' || wrap === 'last')) ||
                            (!this.underflow && last === end && (wrap === 'both' || wrap === 'last'))) {
                            this._scroll(0, animate, callback);
                        } else {
                            index = current + scroll;

                            if (this.circular && index > end) {
                                i = end;
                                curr = this.items().get(-1);

                                while (i++ < index) {
                                    curr = this.items().eq(0);
                                    isVisible = this._visible.index(curr) >= 0;

                                    if (isVisible) {
                                        curr.after(curr.clone(true).attr('data-jcarousel-clone', true));
                                    }

                                    this.list().append(curr);

                                    if (!isVisible) {
                                        props = {};
                                        props[this.lt] = this.dimension(curr);
                                        this.moveBy(props);
                                    }

                                    // Force items reload
                                    this._items = null;
                                }

                                this._scroll(curr, animate, callback);
                            } else {
                                this._scroll(Math.min(index, end), animate, callback);
                            }
                        }
                    }
                } else {
                    if (this.inTail) {
                        this._scroll(Math.max((this.index(this._first) - scroll) + 1, 0), animate, callback);
                    } else {
                        first  = this.index(this._first);
                        current = this.index(this._target);
                        start  = this.underflow ? current : first;
                        index  = start - scroll;

                        if (start <= 0 && ((this.underflow && wrap === 'circular') || wrap === 'both' || wrap === 'first')) {
                            this._scroll(end, animate, callback);
                        } else {
                            if (this.circular && index < 0) {
                                i    = index;
                                curr = this.items().get(0);

                                while (i++ < 0) {
                                    curr = this.items().eq(-1);
                                    isVisible = this._visible.index(curr) >= 0;

                                    if (isVisible) {
                                        curr.after(curr.clone(true).attr('data-jcarousel-clone', true));
                                    }

                                    this.list().prepend(curr);

                                    // Force items reload
                                    this._items = null;

                                    var dim = this.dimension(curr);

                                    props = {};
                                    props[this.lt] = -dim;
                                    this.moveBy(props);

                                }

                                this._scroll(curr, animate, callback);
                            } else {
                                this._scroll(Math.max(index, 0), animate, callback);
                            }
                        }
                    }
                }
            } else {
                this._scroll(parsed.target, animate, callback);
            }

            this._trigger('scrollend');

            return this;
        },
        moveBy: function(properties, opts) {
            var position = this.list().position(),
                multiplier = 1,
                correction = 0;

            if (this.rtl && !this.vertical) {
                multiplier = -1;

                if (this.relative) {
                    correction = this.list().width() - this.clipping();
                }
            }

            if (properties.left) {
                properties.left = (position.left + correction + toFloat(properties.left) * multiplier) + 'px';
            }

            if (properties.top) {
                properties.top = (position.top + correction + toFloat(properties.top) * multiplier) + 'px';
            }

            return this.move(properties, opts);
        },
        move: function(properties, opts) {
            opts = opts || {};

            var option       = this.options('transitions'),
                transitions  = !!option,
                transforms   = !!option.transforms,
                transforms3d = !!option.transforms3d,
                duration     = opts.duration || 0,
                list         = this.list();

            if (!transitions && duration > 0) {
                list.animate(properties, opts);
                return;
            }

            var complete = opts.complete || $.noop,
                css = {};

            if (transitions) {
                var backup = list.css(['transitionDuration', 'transitionTimingFunction', 'transitionProperty']),
                    oldComplete = complete;

                complete = function() {
                    $(this).css(backup);
                    oldComplete.call(this);
                };
                css = {
                    transitionDuration: (duration > 0 ? duration / 1000 : 0) + 's',
                    transitionTimingFunction: option.easing || opts.easing,
                    transitionProperty: duration > 0 ? (function() {
                        if (transforms || transforms3d) {
                            // We have to use 'all' because jQuery doesn't prefix
                            // css values, like transition-property: transform;
                            return 'all';
                        }

                        return properties.left ? 'left' : 'top';
                    })() : 'none',
                    transform: 'none'
                };
            }

            if (transforms3d) {
                css.transform = 'translate3d(' + (properties.left || 0) + ',' + (properties.top || 0) + ',0)';
            } else if (transforms) {
                css.transform = 'translate(' + (properties.left || 0) + ',' + (properties.top || 0) + ')';
            } else {
                $.extend(css, properties);
            }

            if (transitions && duration > 0) {
                list.one('transitionend webkitTransitionEnd oTransitionEnd otransitionend MSTransitionEnd', complete);
            }

            list.css(css);

            if (duration <= 0) {
                list.each(function() {
                    complete.call(this);
                });
            }
        },
        _scroll: function(item, animate, callback) {
            if (this.animating) {
                if ($.isFunction(callback)) {
                    callback.call(this, false);
                }

                return this;
            }

            if (typeof item !== 'object') {
                item = this.items().eq(item);
            } else if (typeof item.jquery === 'undefined') {
                item = $(item);
            }

            if (item.length === 0) {
                if ($.isFunction(callback)) {
                    callback.call(this, false);
                }

                return this;
            }

            this.inTail = false;

            this._prepare(item);

            var pos     = this._position(item),
                currPos = this.list().position()[this.lt];

            if (pos === currPos) {
                if ($.isFunction(callback)) {
                    callback.call(this, false);
                }

                return this;
            }

            var properties = {};
            properties[this.lt] = pos + 'px';

            this._animate(properties, animate, callback);

            return this;
        },
        _scrollTail: function(animate, callback) {
            if (this.animating || !this.tail) {
                if ($.isFunction(callback)) {
                    callback.call(this, false);
                }

                return this;
            }

            var pos = this.list().position()[this.lt];

            if (this.rtl && this.relative && !this.vertical) {
                pos += this.list().width() - this.clipping();
            }

            if (this.rtl && !this.vertical) {
                pos += this.tail;
            } else {
                pos -= this.tail;
            }

            this.inTail = true;

            var properties = {};
            properties[this.lt] = pos + 'px';

            this._update({
                target:       this._target.next(),
                fullyvisible: this._fullyvisible.slice(1).add(this._visible.last())
            });

            this._animate(properties, animate, callback);

            return this;
        },
        _animate: function(properties, animate, callback) {
            callback = callback || $.noop;

            if (false === this._trigger('animate')) {
                callback.call(this, false);
                return this;
            }

            this.animating = true;

            var animation = this.options('animation'),
                complete  = $.proxy(function() {
                    this.animating = false;

                    var c = this.list().find('[data-jcarousel-clone]');

                    if (c.length > 0) {
                        c.remove();
                        this._reload();
                    }

                    this._trigger('animateend');

                    callback.call(this, true);
                }, this);

            var opts = typeof animation === 'object' ?
                           $.extend({}, animation) :
                           {duration: animation},
                oldComplete = opts.complete || $.noop;

            if (animate === false) {
                opts.duration = 0;
            } else if (typeof $.fx.speeds[opts.duration] !== 'undefined') {
                opts.duration = $.fx.speeds[opts.duration];
            }

            opts.complete = function() {
                complete();
                oldComplete.call(this);
            };

            this.move(properties, opts);

            return this;
        },
        _prepare: function(item) {
            var index  = this.index(item),
                idx    = index,
                wh     = this.dimension(item),
                clip   = this.clipping(),
                lrb    = this.vertical ? 'bottom' : (this.rtl ? 'left'  : 'right'),
                center = this.options('center'),
                update = {
                    target:       item,
                    first:        item,
                    last:         item,
                    visible:      item,
                    fullyvisible: wh <= clip ? item : $()
                },
                curr,
                isVisible,
                margin,
                dim;

            if (center) {
                wh /= 2;
                clip /= 2;
            }

            if (wh < clip) {
                while (true) {
                    curr = this.items().eq(++idx);

                    if (curr.length === 0) {
                        if (!this.circular) {
                            break;
                        }

                        curr = this.items().eq(0);

                        if (item.get(0) === curr.get(0)) {
                            break;
                        }

                        isVisible = this._visible.index(curr) >= 0;

                        if (isVisible) {
                            curr.after(curr.clone(true).attr('data-jcarousel-clone', true));
                        }

                        this.list().append(curr);

                        if (!isVisible) {
                            var props = {};
                            props[this.lt] = this.dimension(curr);
                            this.moveBy(props);
                        }

                        // Force items reload
                        this._items = null;
                    }

                    dim = this.dimension(curr);

                    if (dim === 0) {
                        break;
                    }

                    wh += dim;

                    update.last    = curr;
                    update.visible = update.visible.add(curr);

                    // Remove right/bottom margin from total width
                    margin = toFloat(curr.css('margin-' + lrb));

                    if ((wh - margin) <= clip) {
                        update.fullyvisible = update.fullyvisible.add(curr);
                    }

                    if (wh >= clip) {
                        break;
                    }
                }
            }

            if (!this.circular && !center && wh < clip) {
                idx = index;

                while (true) {
                    if (--idx < 0) {
                        break;
                    }

                    curr = this.items().eq(idx);

                    if (curr.length === 0) {
                        break;
                    }

                    dim = this.dimension(curr);

                    if (dim === 0) {
                        break;
                    }

                    wh += dim;

                    update.first   = curr;
                    update.visible = update.visible.add(curr);

                    // Remove right/bottom margin from total width
                    margin = toFloat(curr.css('margin-' + lrb));

                    if ((wh - margin) <= clip) {
                        update.fullyvisible = update.fullyvisible.add(curr);
                    }

                    if (wh >= clip) {
                        break;
                    }
                }
            }

            this._update(update);

            this.tail = 0;

            if (!center &&
                this.options('wrap') !== 'circular' &&
                this.options('wrap') !== 'custom' &&
                this.index(update.last) === (this.items().length - 1)) {

                // Remove right/bottom margin from total width
                wh -= toFloat(update.last.css('margin-' + lrb));

                if (wh > clip) {
                    this.tail = wh - clip;
                }
            }

            return this;
        },
        _position: function(item) {
            var first  = this._first,
                pos    = first.position()[this.lt],
                center = this.options('center'),
                centerOffset = center ? (this.clipping() / 2) - (this.dimension(first) / 2) : 0;

            if (this.rtl && !this.vertical) {
                if (this.relative) {
                    pos -= this.list().width() - this.dimension(first);
                } else {
                    pos -= this.clipping() - this.dimension(first);
                }

                pos += centerOffset;
            } else {
                pos -= centerOffset;
            }

            if (!center &&
                (this.index(item) > this.index(first) || this.inTail) &&
                this.tail) {
                pos = this.rtl && !this.vertical ? pos - this.tail : pos + this.tail;
                this.inTail = true;
            } else {
                this.inTail = false;
            }

            return -pos;
        },
        _update: function(update) {
            var self = this,
                current = {
                    target:       this._target || $(),
                    first:        this._first || $(),
                    last:         this._last || $(),
                    visible:      this._visible || $(),
                    fullyvisible: this._fullyvisible || $()
                },
                back = this.index(update.first || current.first) < this.index(current.first),
                key,
                doUpdate = function(key) {
                    var elIn  = [],
                        elOut = [];

                    update[key].each(function() {
                        if (current[key].index(this) < 0) {
                            elIn.push(this);
                        }
                    });

                    current[key].each(function() {
                        if (update[key].index(this) < 0) {
                            elOut.push(this);
                        }
                    });

                    if (back) {
                        elIn = elIn.reverse();
                    } else {
                        elOut = elOut.reverse();
                    }

                    self._trigger(key + 'in', $(elIn));
                    self._trigger(key + 'out', $(elOut));

                    self['_' + key] = update[key];
                };

            for (key in update) {
                doUpdate(key);
            }

            return this;
        }
    });
}(jQuery, window));

(function($) {
    'use strict';

    $.jcarousel.fn.scrollIntoView = function(target, animate, callback) {
        var parsed = $.jCarousel.parseTarget(target),
            first  = this.index(this._fullyvisible.first()),
            last   = this.index(this._fullyvisible.last()),
            index;

        if (parsed.relative) {
            index = parsed.target < 0 ? Math.max(0, first + parsed.target) : last + parsed.target;
        } else {
            index = typeof parsed.target !== 'object' ? parsed.target : this.index(parsed.target);
        }

        if (index < first) {
            return this.scroll(index, animate, callback);
        }

        if (index >= first && index <= last) {
            if ($.isFunction(callback)) {
                callback.call(this, false);
            }

            return this;
        }

        var items = this.items(),
            clip = this.clipping(),
            lrb  = this.vertical ? 'bottom' : (this.rtl ? 'left'  : 'right'),
            wh   = 0,
            curr;

        while (true) {
            curr = items.eq(index);

            if (curr.length === 0) {
                break;
            }

            wh += this.dimension(curr);

            if (wh >= clip) {
                var margin = parseFloat(curr.css('margin-' + lrb)) || 0;
                if ((wh - margin) !== clip) {
                    index++;
                }
                break;
            }

            if (index <= 0) {
                break;
            }

            index--;
        }

        return this.scroll(index, animate, callback);
    };
}(jQuery));

(function($) {
    'use strict';

    $.jCarousel.plugin('jcarouselControl', {
        _options: {
            target: '+=1',
            event:  'click',
            method: 'scroll'
        },
        _active: null,
        _init: function() {
            this.onDestroy = $.proxy(function() {
                this._destroy();
                this.carousel()
                    .one('jcarousel:createend', $.proxy(this._create, this));
            }, this);
            this.onReload = $.proxy(this._reload, this);
            this.onEvent = $.proxy(function(e) {
                e.preventDefault();

                var method = this.options('method');

                if ($.isFunction(method)) {
                    method.call(this);
                } else {
                    this.carousel()
                        .jcarousel(this.options('method'), this.options('target'));
                }
            }, this);
        },
        _create: function() {
            this.carousel()
                .one('jcarousel:destroy', this.onDestroy)
                .on('jcarousel:reloadend jcarousel:scrollend', this.onReload);

            this._element
                .on(this.options('event') + '.jcarouselcontrol', this.onEvent);

            this._reload();
        },
        _destroy: function() {
            this._element
                .off('.jcarouselcontrol', this.onEvent);

            this.carousel()
                .off('jcarousel:destroy', this.onDestroy)
                .off('jcarousel:reloadend jcarousel:scrollend', this.onReload);
        },
        _reload: function() {
            var parsed   = $.jCarousel.parseTarget(this.options('target')),
                carousel = this.carousel(),
                active;

            if (parsed.relative) {
                active = carousel
                    .jcarousel(parsed.target > 0 ? 'hasNext' : 'hasPrev');
            } else {
                var target = typeof parsed.target !== 'object' ?
                                carousel.jcarousel('items').eq(parsed.target) :
                                parsed.target;

                active = carousel.jcarousel('target').index(target) >= 0;
            }

            if (this._active !== active) {
                this._trigger(active ? 'active' : 'inactive');
                this._active = active;
            }

            return this;
        }
    });
}(jQuery));

(function($) {
    'use strict';

    $.jCarousel.plugin('jcarouselPagination', {
        _options: {
            perPage: null,
            item: function(page) {
                return '<a href="#' + page + '">' + page + '</a>';
            },
            event:  'click',
            method: 'scroll'
        },
        _carouselItems: null,
        _pages: {},
        _items: {},
        _currentPage: null,
        _init: function() {
            this.onDestroy = $.proxy(function() {
                this._destroy();
                this.carousel()
                    .one('jcarousel:createend', $.proxy(this._create, this));
            }, this);
            this.onReload = $.proxy(this._reload, this);
            this.onScroll = $.proxy(this._update, this);
        },
        _create: function() {
            this.carousel()
                .one('jcarousel:destroy', this.onDestroy)
                .on('jcarousel:reloadend', this.onReload)
                .on('jcarousel:scrollend', this.onScroll);

            this._reload();
        },
        _destroy: function() {
            this._clear();

            this.carousel()
                .off('jcarousel:destroy', this.onDestroy)
                .off('jcarousel:reloadend', this.onReload)
                .off('jcarousel:scrollend', this.onScroll);

            this._carouselItems = null;
        },
        _reload: function() {
            var perPage = this.options('perPage');

            this._pages = {};
            this._items = {};

            // Calculate pages
            if ($.isFunction(perPage)) {
                perPage = perPage.call(this);
            }

            if (perPage == null) {
                this._pages = this._calculatePages();
            } else {
                var pp    = parseInt(perPage, 10) || 0,
                    items = this._getCarouselItems(),
                    page  = 1,
                    i     = 0,
                    curr;

                while (true) {
                    curr = items.eq(i++);

                    if (curr.length === 0) {
                        break;
                    }

                    if (!this._pages[page]) {
                        this._pages[page] = curr;
                    } else {
                        this._pages[page] = this._pages[page].add(curr);
                    }

                    if (i % pp === 0) {
                        page++;
                    }
                }
            }

            this._clear();

            var self     = this,
                carousel = this.carousel().data('jcarousel'),
                element  = this._element,
                item     = this.options('item'),
                numCarouselItems = this._getCarouselItems().length;

            $.each(this._pages, function(page, carouselItems) {
                var currItem = self._items[page] = $(item.call(self, page, carouselItems));

                currItem.on(self.options('event') + '.jcarouselpagination', $.proxy(function() {
                    var target = carouselItems.eq(0);

                    // If circular wrapping enabled, ensure correct scrolling direction
                    if (carousel.circular) {
                        var currentIndex = carousel.index(carousel.target()),
                            newIndex     = carousel.index(target);

                        if (parseFloat(page) > parseFloat(self._currentPage)) {
                            if (newIndex < currentIndex) {
                                target = '+=' + (numCarouselItems - currentIndex + newIndex);
                            }
                        } else {
                            if (newIndex > currentIndex) {
                                target = '-=' + (currentIndex + (numCarouselItems - newIndex));
                            }
                        }
                    }

                    carousel[this.options('method')](target);
                }, self));

                element.append(currItem);
            });

            this._update();
        },
        _update: function() {
            var target = this.carousel().jcarousel('target'),
                currentPage;

            $.each(this._pages, function(page, carouselItems) {
                carouselItems.each(function() {
                    if (target.is(this)) {
                        currentPage = page;
                        return false;
                    }
                });

                if (currentPage) {
                    return false;
                }
            });

            if (this._currentPage !== currentPage) {
                this._trigger('inactive', this._items[this._currentPage]);
                this._trigger('active', this._items[currentPage]);
            }

            this._currentPage = currentPage;
        },
        items: function() {
            return this._items;
        },
        reloadCarouselItems: function() {
            this._carouselItems = null;
            return this;
        },
        _clear: function() {
            this._element.empty();
            this._currentPage = null;
        },
        _calculatePages: function() {
            var carousel = this.carousel().data('jcarousel'),
                items    = this._getCarouselItems(),
                clip     = carousel.clipping(),
                wh       = 0,
                idx      = 0,
                page     = 1,
                pages    = {},
                curr;

            while (true) {
                curr = items.eq(idx++);

                if (curr.length === 0) {
                    break;
                }

                if (!pages[page]) {
                    pages[page] = curr;
                } else {
                    pages[page] = pages[page].add(curr);
                }

                wh += carousel.dimension(curr);

                if (wh >= clip) {
                    page++;
                    wh = 0;
                }
            }

            return pages;
        },
        _getCarouselItems: function() {
            if (!this._carouselItems) {
                this._carouselItems = this.carousel().jcarousel('items');
            }

            return this._carouselItems;
        }
    });
}(jQuery));

(function($) {
    'use strict';

    $.jCarousel.plugin('jcarouselAutoscroll', {
        _options: {
            target:    '+=1',
            interval:  3000,
            autostart: true
        },
        _timer: null,
        _init: function () {
            this.onDestroy = $.proxy(function() {
                this._destroy();
                this.carousel()
                    .one('jcarousel:createend', $.proxy(this._create, this));
            }, this);

            this.onAnimateEnd = $.proxy(this.start, this);
        },
        _create: function() {
            this.carousel()
                .one('jcarousel:destroy', this.onDestroy);

            if (this.options('autostart')) {
                this.start();
            }
        },
        _destroy: function() {
            this.stop();
            this.carousel()
                .off('jcarousel:destroy', this.onDestroy);
        },
        start: function() {
            this.stop();

            this.carousel()
                .one('jcarousel:animateend', this.onAnimateEnd);

            this._timer = setTimeout($.proxy(function() {
                this.carousel().jcarousel('scroll', this.options('target'));
            }, this), this.options('interval'));

            return this;
        },
        stop: function() {
            if (this._timer) {
                this._timer = clearTimeout(this._timer);
            }

            this.carousel()
                .off('jcarousel:animateend', this.onAnimateEnd);

            return this;
        }
    });
}(jQuery));

//     Underscore.js 1.6.0
//     http://underscorejs.org
//     (c) 2009-2014 Jeremy Ashkenas, DocumentCloud and Investigative Reporters & Editors
//     Underscore may be freely distributed under the MIT license.

(function() {

  // Baseline setup
  // --------------

  // Establish the root object, `window` in the browser, or `exports` on the server.
  var root = this;

  // Save the previous value of the `_` variable.
  var previousUnderscore = root._;

  // Establish the object that gets returned to break out of a loop iteration.
  var breaker = {};

  // Save bytes in the minified (but not gzipped) version:
  var ArrayProto = Array.prototype, ObjProto = Object.prototype, FuncProto = Function.prototype;

  // Create quick reference variables for speed access to core prototypes.
  var
    push             = ArrayProto.push,
    slice            = ArrayProto.slice,
    concat           = ArrayProto.concat,
    toString         = ObjProto.toString,
    hasOwnProperty   = ObjProto.hasOwnProperty;

  // All **ECMAScript 5** native function implementations that we hope to use
  // are declared here.
  var
    nativeForEach      = ArrayProto.forEach,
    nativeMap          = ArrayProto.map,
    nativeReduce       = ArrayProto.reduce,
    nativeReduceRight  = ArrayProto.reduceRight,
    nativeFilter       = ArrayProto.filter,
    nativeEvery        = ArrayProto.every,
    nativeSome         = ArrayProto.some,
    nativeIndexOf      = ArrayProto.indexOf,
    nativeLastIndexOf  = ArrayProto.lastIndexOf,
    nativeIsArray      = Array.isArray,
    nativeKeys         = Object.keys,
    nativeBind         = FuncProto.bind;

  // Create a safe reference to the Underscore object for use below.
  var _ = function(obj) {
    if (obj instanceof _) return obj;
    if (!(this instanceof _)) return new _(obj);
    this._wrapped = obj;
  };

  // Export the Underscore object for **Node.js**, with
  // backwards-compatibility for the old `require()` API. If we're in
  // the browser, add `_` as a global object via a string identifier,
  // for Closure Compiler "advanced" mode.
  if (typeof exports !== 'undefined') {
    if (typeof module !== 'undefined' && module.exports) {
      exports = module.exports = _;
    }
    exports._ = _;
  } else {
    root._ = _;
  }

  // Current version.
  _.VERSION = '1.6.0';

  // Collection Functions
  // --------------------

  // The cornerstone, an `each` implementation, aka `forEach`.
  // Handles objects with the built-in `forEach`, arrays, and raw objects.
  // Delegates to **ECMAScript 5**'s native `forEach` if available.
  var each = _.each = _.forEach = function(obj, iterator, context) {
    if (obj == null) return obj;
    if (nativeForEach && obj.forEach === nativeForEach) {
      obj.forEach(iterator, context);
    } else if (obj.length === +obj.length) {
      for (var i = 0, length = obj.length; i < length; i++) {
        if (iterator.call(context, obj[i], i, obj) === breaker) return;
      }
    } else {
      var keys = _.keys(obj);
      for (var i = 0, length = keys.length; i < length; i++) {
        if (iterator.call(context, obj[keys[i]], keys[i], obj) === breaker) return;
      }
    }
    return obj;
  };

  // Return the results of applying the iterator to each element.
  // Delegates to **ECMAScript 5**'s native `map` if available.
  _.map = _.collect = function(obj, iterator, context) {
    var results = [];
    if (obj == null) return results;
    if (nativeMap && obj.map === nativeMap) return obj.map(iterator, context);
    each(obj, function(value, index, list) {
      results.push(iterator.call(context, value, index, list));
    });
    return results;
  };

  var reduceError = 'Reduce of empty array with no initial value';

  // **Reduce** builds up a single result from a list of values, aka `inject`,
  // or `foldl`. Delegates to **ECMAScript 5**'s native `reduce` if available.
  _.reduce = _.foldl = _.inject = function(obj, iterator, memo, context) {
    var initial = arguments.length > 2;
    if (obj == null) obj = [];
    if (nativeReduce && obj.reduce === nativeReduce) {
      if (context) iterator = _.bind(iterator, context);
      return initial ? obj.reduce(iterator, memo) : obj.reduce(iterator);
    }
    each(obj, function(value, index, list) {
      if (!initial) {
        memo = value;
        initial = true;
      } else {
        memo = iterator.call(context, memo, value, index, list);
      }
    });
    if (!initial) throw new TypeError(reduceError);
    return memo;
  };

  // The right-associative version of reduce, also known as `foldr`.
  // Delegates to **ECMAScript 5**'s native `reduceRight` if available.
  _.reduceRight = _.foldr = function(obj, iterator, memo, context) {
    var initial = arguments.length > 2;
    if (obj == null) obj = [];
    if (nativeReduceRight && obj.reduceRight === nativeReduceRight) {
      if (context) iterator = _.bind(iterator, context);
      return initial ? obj.reduceRight(iterator, memo) : obj.reduceRight(iterator);
    }
    var length = obj.length;
    if (length !== +length) {
      var keys = _.keys(obj);
      length = keys.length;
    }
    each(obj, function(value, index, list) {
      index = keys ? keys[--length] : --length;
      if (!initial) {
        memo = obj[index];
        initial = true;
      } else {
        memo = iterator.call(context, memo, obj[index], index, list);
      }
    });
    if (!initial) throw new TypeError(reduceError);
    return memo;
  };

  // Return the first value which passes a truth test. Aliased as `detect`.
  _.find = _.detect = function(obj, predicate, context) {
    var result;
    any(obj, function(value, index, list) {
      if (predicate.call(context, value, index, list)) {
        result = value;
        return true;
      }
    });
    return result;
  };

  // Return all the elements that pass a truth test.
  // Delegates to **ECMAScript 5**'s native `filter` if available.
  // Aliased as `select`.
  _.filter = _.select = function(obj, predicate, context) {
    var results = [];
    if (obj == null) return results;
    if (nativeFilter && obj.filter === nativeFilter) return obj.filter(predicate, context);
    each(obj, function(value, index, list) {
      if (predicate.call(context, value, index, list)) results.push(value);
    });
    return results;
  };

  // Return all the elements for which a truth test fails.
  _.reject = function(obj, predicate, context) {
    return _.filter(obj, function(value, index, list) {
      return !predicate.call(context, value, index, list);
    }, context);
  };

  // Determine whether all of the elements match a truth test.
  // Delegates to **ECMAScript 5**'s native `every` if available.
  // Aliased as `all`.
  _.every = _.all = function(obj, predicate, context) {
    predicate || (predicate = _.identity);
    var result = true;
    if (obj == null) return result;
    if (nativeEvery && obj.every === nativeEvery) return obj.every(predicate, context);
    each(obj, function(value, index, list) {
      if (!(result = result && predicate.call(context, value, index, list))) return breaker;
    });
    return !!result;
  };

  // Determine if at least one element in the object matches a truth test.
  // Delegates to **ECMAScript 5**'s native `some` if available.
  // Aliased as `any`.
  var any = _.some = _.any = function(obj, predicate, context) {
    predicate || (predicate = _.identity);
    var result = false;
    if (obj == null) return result;
    if (nativeSome && obj.some === nativeSome) return obj.some(predicate, context);
    each(obj, function(value, index, list) {
      if (result || (result = predicate.call(context, value, index, list))) return breaker;
    });
    return !!result;
  };

  // Determine if the array or object contains a given value (using `===`).
  // Aliased as `include`.
  _.contains = _.include = function(obj, target) {
    if (obj == null) return false;
    if (nativeIndexOf && obj.indexOf === nativeIndexOf) return obj.indexOf(target) != -1;
    return any(obj, function(value) {
      return value === target;
    });
  };

  // Invoke a method (with arguments) on every item in a collection.
  _.invoke = function(obj, method) {
    var args = slice.call(arguments, 2);
    var isFunc = _.isFunction(method);
    return _.map(obj, function(value) {
      return (isFunc ? method : value[method]).apply(value, args);
    });
  };

  // Convenience version of a common use case of `map`: fetching a property.
  _.pluck = function(obj, key) {
    return _.map(obj, _.property(key));
  };

  // Convenience version of a common use case of `filter`: selecting only objects
  // containing specific `key:value` pairs.
  _.where = function(obj, attrs) {
    return _.filter(obj, _.matches(attrs));
  };

  // Convenience version of a common use case of `find`: getting the first object
  // containing specific `key:value` pairs.
  _.findWhere = function(obj, attrs) {
    return _.find(obj, _.matches(attrs));
  };

  // Return the maximum element or (element-based computation).
  // Can't optimize arrays of integers longer than 65,535 elements.
  // See [WebKit Bug 80797](https://bugs.webkit.org/show_bug.cgi?id=80797)
  _.max = function(obj, iterator, context) {
    if (!iterator && _.isArray(obj) && obj[0] === +obj[0] && obj.length < 65535) {
      return Math.max.apply(Math, obj);
    }
    var result = -Infinity, lastComputed = -Infinity;
    each(obj, function(value, index, list) {
      var computed = iterator ? iterator.call(context, value, index, list) : value;
      if (computed > lastComputed) {
        result = value;
        lastComputed = computed;
      }
    });
    return result;
  };

  // Return the minimum element (or element-based computation).
  _.min = function(obj, iterator, context) {
    if (!iterator && _.isArray(obj) && obj[0] === +obj[0] && obj.length < 65535) {
      return Math.min.apply(Math, obj);
    }
    var result = Infinity, lastComputed = Infinity;
    each(obj, function(value, index, list) {
      var computed = iterator ? iterator.call(context, value, index, list) : value;
      if (computed < lastComputed) {
        result = value;
        lastComputed = computed;
      }
    });
    return result;
  };

  // Shuffle an array, using the modern version of the
  // [Fisher-Yates shuffle](http://en.wikipedia.org/wiki/Fisher–Yates_shuffle).
  _.shuffle = function(obj) {
    var rand;
    var index = 0;
    var shuffled = [];
    each(obj, function(value) {
      rand = _.random(index++);
      shuffled[index - 1] = shuffled[rand];
      shuffled[rand] = value;
    });
    return shuffled;
  };

  // Sample **n** random values from a collection.
  // If **n** is not specified, returns a single random element.
  // The internal `guard` argument allows it to work with `map`.
  _.sample = function(obj, n, guard) {
    if (n == null || guard) {
      if (obj.length !== +obj.length) obj = _.values(obj);
      return obj[_.random(obj.length - 1)];
    }
    return _.shuffle(obj).slice(0, Math.max(0, n));
  };

  // An internal function to generate lookup iterators.
  var lookupIterator = function(value) {
    if (value == null) return _.identity;
    if (_.isFunction(value)) return value;
    return _.property(value);
  };

  // Sort the object's values by a criterion produced by an iterator.
  _.sortBy = function(obj, iterator, context) {
    iterator = lookupIterator(iterator);
    return _.pluck(_.map(obj, function(value, index, list) {
      return {
        value: value,
        index: index,
        criteria: iterator.call(context, value, index, list)
      };
    }).sort(function(left, right) {
      var a = left.criteria;
      var b = right.criteria;
      if (a !== b) {
        if (a > b || a === void 0) return 1;
        if (a < b || b === void 0) return -1;
      }
      return left.index - right.index;
    }), 'value');
  };

  // An internal function used for aggregate "group by" operations.
  var group = function(behavior) {
    return function(obj, iterator, context) {
      var result = {};
      iterator = lookupIterator(iterator);
      each(obj, function(value, index) {
        var key = iterator.call(context, value, index, obj);
        behavior(result, key, value);
      });
      return result;
    };
  };

  // Groups the object's values by a criterion. Pass either a string attribute
  // to group by, or a function that returns the criterion.
  _.groupBy = group(function(result, key, value) {
    _.has(result, key) ? result[key].push(value) : result[key] = [value];
  });

  // Indexes the object's values by a criterion, similar to `groupBy`, but for
  // when you know that your index values will be unique.
  _.indexBy = group(function(result, key, value) {
    result[key] = value;
  });

  // Counts instances of an object that group by a certain criterion. Pass
  // either a string attribute to count by, or a function that returns the
  // criterion.
  _.countBy = group(function(result, key) {
    _.has(result, key) ? result[key]++ : result[key] = 1;
  });

  // Use a comparator function to figure out the smallest index at which
  // an object should be inserted so as to maintain order. Uses binary search.
  _.sortedIndex = function(array, obj, iterator, context) {
    iterator = lookupIterator(iterator);
    var value = iterator.call(context, obj);
    var low = 0, high = array.length;
    while (low < high) {
      var mid = (low + high) >>> 1;
      iterator.call(context, array[mid]) < value ? low = mid + 1 : high = mid;
    }
    return low;
  };

  // Safely create a real, live array from anything iterable.
  _.toArray = function(obj) {
    if (!obj) return [];
    if (_.isArray(obj)) return slice.call(obj);
    if (obj.length === +obj.length) return _.map(obj, _.identity);
    return _.values(obj);
  };

  // Return the number of elements in an object.
  _.size = function(obj) {
    if (obj == null) return 0;
    return (obj.length === +obj.length) ? obj.length : _.keys(obj).length;
  };

  // Array Functions
  // ---------------

  // Get the first element of an array. Passing **n** will return the first N
  // values in the array. Aliased as `head` and `take`. The **guard** check
  // allows it to work with `_.map`.
  _.first = _.head = _.take = function(array, n, guard) {
    if (array == null) return void 0;
    if ((n == null) || guard) return array[0];
    if (n < 0) return [];
    return slice.call(array, 0, n);
  };

  // Returns everything but the last entry of the array. Especially useful on
  // the arguments object. Passing **n** will return all the values in
  // the array, excluding the last N. The **guard** check allows it to work with
  // `_.map`.
  _.initial = function(array, n, guard) {
    return slice.call(array, 0, array.length - ((n == null) || guard ? 1 : n));
  };

  // Get the last element of an array. Passing **n** will return the last N
  // values in the array. The **guard** check allows it to work with `_.map`.
  _.last = function(array, n, guard) {
    if (array == null) return void 0;
    if ((n == null) || guard) return array[array.length - 1];
    return slice.call(array, Math.max(array.length - n, 0));
  };

  // Returns everything but the first entry of the array. Aliased as `tail` and `drop`.
  // Especially useful on the arguments object. Passing an **n** will return
  // the rest N values in the array. The **guard**
  // check allows it to work with `_.map`.
  _.rest = _.tail = _.drop = function(array, n, guard) {
    return slice.call(array, (n == null) || guard ? 1 : n);
  };

  // Trim out all falsy values from an array.
  _.compact = function(array) {
    return _.filter(array, _.identity);
  };

  // Internal implementation of a recursive `flatten` function.
  var flatten = function(input, shallow, output) {
    if (shallow && _.every(input, _.isArray)) {
      return concat.apply(output, input);
    }
    each(input, function(value) {
      if (_.isArray(value) || _.isArguments(value)) {
        shallow ? push.apply(output, value) : flatten(value, shallow, output);
      } else {
        output.push(value);
      }
    });
    return output;
  };

  // Flatten out an array, either recursively (by default), or just one level.
  _.flatten = function(array, shallow) {
    return flatten(array, shallow, []);
  };

  // Return a version of the array that does not contain the specified value(s).
  _.without = function(array) {
    return _.difference(array, slice.call(arguments, 1));
  };

  // Split an array into two arrays: one whose elements all satisfy the given
  // predicate, and one whose elements all do not satisfy the predicate.
  _.partition = function(array, predicate) {
    var pass = [], fail = [];
    each(array, function(elem) {
      (predicate(elem) ? pass : fail).push(elem);
    });
    return [pass, fail];
  };

  // Produce a duplicate-free version of the array. If the array has already
  // been sorted, you have the option of using a faster algorithm.
  // Aliased as `unique`.
  _.uniq = _.unique = function(array, isSorted, iterator, context) {
    if (_.isFunction(isSorted)) {
      context = iterator;
      iterator = isSorted;
      isSorted = false;
    }
    var initial = iterator ? _.map(array, iterator, context) : array;
    var results = [];
    var seen = [];
    each(initial, function(value, index) {
      if (isSorted ? (!index || seen[seen.length - 1] !== value) : !_.contains(seen, value)) {
        seen.push(value);
        results.push(array[index]);
      }
    });
    return results;
  };

  // Produce an array that contains the union: each distinct element from all of
  // the passed-in arrays.
  _.union = function() {
    return _.uniq(_.flatten(arguments, true));
  };

  // Produce an array that contains every item shared between all the
  // passed-in arrays.
  _.intersection = function(array) {
    var rest = slice.call(arguments, 1);
    return _.filter(_.uniq(array), function(item) {
      return _.every(rest, function(other) {
        return _.contains(other, item);
      });
    });
  };

  // Take the difference between one array and a number of other arrays.
  // Only the elements present in just the first array will remain.
  _.difference = function(array) {
    var rest = concat.apply(ArrayProto, slice.call(arguments, 1));
    return _.filter(array, function(value){ return !_.contains(rest, value); });
  };

  // Zip together multiple lists into a single array -- elements that share
  // an index go together.
  _.zip = function() {
    var length = _.max(_.pluck(arguments, 'length').concat(0));
    var results = new Array(length);
    for (var i = 0; i < length; i++) {
      results[i] = _.pluck(arguments, '' + i);
    }
    return results;
  };

  // Converts lists into objects. Pass either a single array of `[key, value]`
  // pairs, or two parallel arrays of the same length -- one of keys, and one of
  // the corresponding values.
  _.object = function(list, values) {
    if (list == null) return {};
    var result = {};
    for (var i = 0, length = list.length; i < length; i++) {
      if (values) {
        result[list[i]] = values[i];
      } else {
        result[list[i][0]] = list[i][1];
      }
    }
    return result;
  };

  // If the browser doesn't supply us with indexOf (I'm looking at you, **MSIE**),
  // we need this function. Return the position of the first occurrence of an
  // item in an array, or -1 if the item is not included in the array.
  // Delegates to **ECMAScript 5**'s native `indexOf` if available.
  // If the array is large and already in sort order, pass `true`
  // for **isSorted** to use binary search.
  _.indexOf = function(array, item, isSorted) {
    if (array == null) return -1;
    var i = 0, length = array.length;
    if (isSorted) {
      if (typeof isSorted == 'number') {
        i = (isSorted < 0 ? Math.max(0, length + isSorted) : isSorted);
      } else {
        i = _.sortedIndex(array, item);
        return array[i] === item ? i : -1;
      }
    }
    if (nativeIndexOf && array.indexOf === nativeIndexOf) return array.indexOf(item, isSorted);
    for (; i < length; i++) if (array[i] === item) return i;
    return -1;
  };

  // Delegates to **ECMAScript 5**'s native `lastIndexOf` if available.
  _.lastIndexOf = function(array, item, from) {
    if (array == null) return -1;
    var hasIndex = from != null;
    if (nativeLastIndexOf && array.lastIndexOf === nativeLastIndexOf) {
      return hasIndex ? array.lastIndexOf(item, from) : array.lastIndexOf(item);
    }
    var i = (hasIndex ? from : array.length);
    while (i--) if (array[i] === item) return i;
    return -1;
  };

  // Generate an integer Array containing an arithmetic progression. A port of
  // the native Python `range()` function. See
  // [the Python documentation](http://docs.python.org/library/functions.html#range).
  _.range = function(start, stop, step) {
    if (arguments.length <= 1) {
      stop = start || 0;
      start = 0;
    }
    step = arguments[2] || 1;

    var length = Math.max(Math.ceil((stop - start) / step), 0);
    var idx = 0;
    var range = new Array(length);

    while(idx < length) {
      range[idx++] = start;
      start += step;
    }

    return range;
  };

  // Function (ahem) Functions
  // ------------------

  // Reusable constructor function for prototype setting.
  var ctor = function(){};

  // Create a function bound to a given object (assigning `this`, and arguments,
  // optionally). Delegates to **ECMAScript 5**'s native `Function.bind` if
  // available.
  _.bind = function(func, context) {
    var args, bound;
    if (nativeBind && func.bind === nativeBind) return nativeBind.apply(func, slice.call(arguments, 1));
    if (!_.isFunction(func)) throw new TypeError;
    args = slice.call(arguments, 2);
    return bound = function() {
      if (!(this instanceof bound)) return func.apply(context, args.concat(slice.call(arguments)));
      ctor.prototype = func.prototype;
      var self = new ctor;
      ctor.prototype = null;
      var result = func.apply(self, args.concat(slice.call(arguments)));
      if (Object(result) === result) return result;
      return self;
    };
  };

  // Partially apply a function by creating a version that has had some of its
  // arguments pre-filled, without changing its dynamic `this` context. _ acts
  // as a placeholder, allowing any combination of arguments to be pre-filled.
  _.partial = function(func) {
    var boundArgs = slice.call(arguments, 1);
    return function() {
      var position = 0;
      var args = boundArgs.slice();
      for (var i = 0, length = args.length; i < length; i++) {
        if (args[i] === _) args[i] = arguments[position++];
      }
      while (position < arguments.length) args.push(arguments[position++]);
      return func.apply(this, args);
    };
  };

  // Bind a number of an object's methods to that object. Remaining arguments
  // are the method names to be bound. Useful for ensuring that all callbacks
  // defined on an object belong to it.
  _.bindAll = function(obj) {
    var funcs = slice.call(arguments, 1);
    if (funcs.length === 0) throw new Error('bindAll must be passed function names');
    each(funcs, function(f) { obj[f] = _.bind(obj[f], obj); });
    return obj;
  };

  // Memoize an expensive function by storing its results.
  _.memoize = function(func, hasher) {
    var memo = {};
    hasher || (hasher = _.identity);
    return function() {
      var key = hasher.apply(this, arguments);
      return _.has(memo, key) ? memo[key] : (memo[key] = func.apply(this, arguments));
    };
  };

  // Delays a function for the given number of milliseconds, and then calls
  // it with the arguments supplied.
  _.delay = function(func, wait) {
    var args = slice.call(arguments, 2);
    return setTimeout(function(){ return func.apply(null, args); }, wait);
  };

  // Defers a function, scheduling it to run after the current call stack has
  // cleared.
  _.defer = function(func) {
    return _.delay.apply(_, [func, 1].concat(slice.call(arguments, 1)));
  };

  // Returns a function, that, when invoked, will only be triggered at most once
  // during a given window of time. Normally, the throttled function will run
  // as much as it can, without ever going more than once per `wait` duration;
  // but if you'd like to disable the execution on the leading edge, pass
  // `{leading: false}`. To disable execution on the trailing edge, ditto.
  _.throttle = function(func, wait, options) {
    var context, args, result;
    var timeout = null;
    var previous = 0;
    options || (options = {});
    var later = function() {
      previous = options.leading === false ? 0 : _.now();
      timeout = null;
      result = func.apply(context, args);
      context = args = null;
    };
    return function() {
      var now = _.now();
      if (!previous && options.leading === false) previous = now;
      var remaining = wait - (now - previous);
      context = this;
      args = arguments;
      if (remaining <= 0) {
        clearTimeout(timeout);
        timeout = null;
        previous = now;
        result = func.apply(context, args);
        context = args = null;
      } else if (!timeout && options.trailing !== false) {
        timeout = setTimeout(later, remaining);
      }
      return result;
    };
  };

  // Returns a function, that, as long as it continues to be invoked, will not
  // be triggered. The function will be called after it stops being called for
  // N milliseconds. If `immediate` is passed, trigger the function on the
  // leading edge, instead of the trailing.
  _.debounce = function(func, wait, immediate) {
    var timeout, args, context, timestamp, result;

    var later = function() {
      var last = _.now() - timestamp;
      if (last < wait) {
        timeout = setTimeout(later, wait - last);
      } else {
        timeout = null;
        if (!immediate) {
          result = func.apply(context, args);
          context = args = null;
        }
      }
    };

    return function() {
      context = this;
      args = arguments;
      timestamp = _.now();
      var callNow = immediate && !timeout;
      if (!timeout) {
        timeout = setTimeout(later, wait);
      }
      if (callNow) {
        result = func.apply(context, args);
        context = args = null;
      }

      return result;
    };
  };

  // Returns a function that will be executed at most one time, no matter how
  // often you call it. Useful for lazy initialization.
  _.once = function(func) {
    var ran = false, memo;
    return function() {
      if (ran) return memo;
      ran = true;
      memo = func.apply(this, arguments);
      func = null;
      return memo;
    };
  };

  // Returns the first function passed as an argument to the second,
  // allowing you to adjust arguments, run code before and after, and
  // conditionally execute the original function.
  _.wrap = function(func, wrapper) {
    return _.partial(wrapper, func);
  };

  // Returns a function that is the composition of a list of functions, each
  // consuming the return value of the function that follows.
  _.compose = function() {
    var funcs = arguments;
    return function() {
      var args = arguments;
      for (var i = funcs.length - 1; i >= 0; i--) {
        args = [funcs[i].apply(this, args)];
      }
      return args[0];
    };
  };

  // Returns a function that will only be executed after being called N times.
  _.after = function(times, func) {
    return function() {
      if (--times < 1) {
        return func.apply(this, arguments);
      }
    };
  };

  // Object Functions
  // ----------------

  // Retrieve the names of an object's properties.
  // Delegates to **ECMAScript 5**'s native `Object.keys`
  _.keys = function(obj) {
    if (!_.isObject(obj)) return [];
    if (nativeKeys) return nativeKeys(obj);
    var keys = [];
    for (var key in obj) if (_.has(obj, key)) keys.push(key);
    return keys;
  };

  // Retrieve the values of an object's properties.
  _.values = function(obj) {
    var keys = _.keys(obj);
    var length = keys.length;
    var values = new Array(length);
    for (var i = 0; i < length; i++) {
      values[i] = obj[keys[i]];
    }
    return values;
  };

  // Convert an object into a list of `[key, value]` pairs.
  _.pairs = function(obj) {
    var keys = _.keys(obj);
    var length = keys.length;
    var pairs = new Array(length);
    for (var i = 0; i < length; i++) {
      pairs[i] = [keys[i], obj[keys[i]]];
    }
    return pairs;
  };

  // Invert the keys and values of an object. The values must be serializable.
  _.invert = function(obj) {
    var result = {};
    var keys = _.keys(obj);
    for (var i = 0, length = keys.length; i < length; i++) {
      result[obj[keys[i]]] = keys[i];
    }
    return result;
  };

  // Return a sorted list of the function names available on the object.
  // Aliased as `methods`
  _.functions = _.methods = function(obj) {
    var names = [];
    for (var key in obj) {
      if (_.isFunction(obj[key])) names.push(key);
    }
    return names.sort();
  };

  // Extend a given object with all the properties in passed-in object(s).
  _.extend = function(obj) {
    each(slice.call(arguments, 1), function(source) {
      if (source) {
        for (var prop in source) {
          obj[prop] = source[prop];
        }
      }
    });
    return obj;
  };

  // Return a copy of the object only containing the whitelisted properties.
  _.pick = function(obj) {
    var copy = {};
    var keys = concat.apply(ArrayProto, slice.call(arguments, 1));
    each(keys, function(key) {
      if (key in obj) copy[key] = obj[key];
    });
    return copy;
  };

   // Return a copy of the object without the blacklisted properties.
  _.omit = function(obj) {
    var copy = {};
    var keys = concat.apply(ArrayProto, slice.call(arguments, 1));
    for (var key in obj) {
      if (!_.contains(keys, key)) copy[key] = obj[key];
    }
    return copy;
  };

  // Fill in a given object with default properties.
  _.defaults = function(obj) {
    each(slice.call(arguments, 1), function(source) {
      if (source) {
        for (var prop in source) {
          if (obj[prop] === void 0) obj[prop] = source[prop];
        }
      }
    });
    return obj;
  };

  // Create a (shallow-cloned) duplicate of an object.
  _.clone = function(obj) {
    if (!_.isObject(obj)) return obj;
    return _.isArray(obj) ? obj.slice() : _.extend({}, obj);
  };

  // Invokes interceptor with the obj, and then returns obj.
  // The primary purpose of this method is to "tap into" a method chain, in
  // order to perform operations on intermediate results within the chain.
  _.tap = function(obj, interceptor) {
    interceptor(obj);
    return obj;
  };

  // Internal recursive comparison function for `isEqual`.
  var eq = function(a, b, aStack, bStack) {
    // Identical objects are equal. `0 === -0`, but they aren't identical.
    // See the [Harmony `egal` proposal](http://wiki.ecmascript.org/doku.php?id=harmony:egal).
    if (a === b) return a !== 0 || 1 / a == 1 / b;
    // A strict comparison is necessary because `null == undefined`.
    if (a == null || b == null) return a === b;
    // Unwrap any wrapped objects.
    if (a instanceof _) a = a._wrapped;
    if (b instanceof _) b = b._wrapped;
    // Compare `[[Class]]` names.
    var className = toString.call(a);
    if (className != toString.call(b)) return false;
    switch (className) {
      // Strings, numbers, dates, and booleans are compared by value.
      case '[object String]':
        // Primitives and their corresponding object wrappers are equivalent; thus, `"5"` is
        // equivalent to `new String("5")`.
        return a == String(b);
      case '[object Number]':
        // `NaN`s are equivalent, but non-reflexive. An `egal` comparison is performed for
        // other numeric values.
        return a != +a ? b != +b : (a == 0 ? 1 / a == 1 / b : a == +b);
      case '[object Date]':
      case '[object Boolean]':
        // Coerce dates and booleans to numeric primitive values. Dates are compared by their
        // millisecond representations. Note that invalid dates with millisecond representations
        // of `NaN` are not equivalent.
        return +a == +b;
      // RegExps are compared by their source patterns and flags.
      case '[object RegExp]':
        return a.source == b.source &&
               a.global == b.global &&
               a.multiline == b.multiline &&
               a.ignoreCase == b.ignoreCase;
    }
    if (typeof a != 'object' || typeof b != 'object') return false;
    // Assume equality for cyclic structures. The algorithm for detecting cyclic
    // structures is adapted from ES 5.1 section 15.12.3, abstract operation `JO`.
    var length = aStack.length;
    while (length--) {
      // Linear search. Performance is inversely proportional to the number of
      // unique nested structures.
      if (aStack[length] == a) return bStack[length] == b;
    }
    // Objects with different constructors are not equivalent, but `Object`s
    // from different frames are.
    var aCtor = a.constructor, bCtor = b.constructor;
    if (aCtor !== bCtor && !(_.isFunction(aCtor) && (aCtor instanceof aCtor) &&
                             _.isFunction(bCtor) && (bCtor instanceof bCtor))
                        && ('constructor' in a && 'constructor' in b)) {
      return false;
    }
    // Add the first object to the stack of traversed objects.
    aStack.push(a);
    bStack.push(b);
    var size = 0, result = true;
    // Recursively compare objects and arrays.
    if (className == '[object Array]') {
      // Compare array lengths to determine if a deep comparison is necessary.
      size = a.length;
      result = size == b.length;
      if (result) {
        // Deep compare the contents, ignoring non-numeric properties.
        while (size--) {
          if (!(result = eq(a[size], b[size], aStack, bStack))) break;
        }
      }
    } else {
      // Deep compare objects.
      for (var key in a) {
        if (_.has(a, key)) {
          // Count the expected number of properties.
          size++;
          // Deep compare each member.
          if (!(result = _.has(b, key) && eq(a[key], b[key], aStack, bStack))) break;
        }
      }
      // Ensure that both objects contain the same number of properties.
      if (result) {
        for (key in b) {
          if (_.has(b, key) && !(size--)) break;
        }
        result = !size;
      }
    }
    // Remove the first object from the stack of traversed objects.
    aStack.pop();
    bStack.pop();
    return result;
  };

  // Perform a deep comparison to check if two objects are equal.
  _.isEqual = function(a, b) {
    return eq(a, b, [], []);
  };

  // Is a given array, string, or object empty?
  // An "empty" object has no enumerable own-properties.
  _.isEmpty = function(obj) {
    if (obj == null) return true;
    if (_.isArray(obj) || _.isString(obj)) return obj.length === 0;
    for (var key in obj) if (_.has(obj, key)) return false;
    return true;
  };

  // Is a given value a DOM element?
  _.isElement = function(obj) {
    return !!(obj && obj.nodeType === 1);
  };

  // Is a given value an array?
  // Delegates to ECMA5's native Array.isArray
  _.isArray = nativeIsArray || function(obj) {
    return toString.call(obj) == '[object Array]';
  };

  // Is a given variable an object?
  _.isObject = function(obj) {
    return obj === Object(obj);
  };

  // Add some isType methods: isArguments, isFunction, isString, isNumber, isDate, isRegExp.
  each(['Arguments', 'Function', 'String', 'Number', 'Date', 'RegExp'], function(name) {
    _['is' + name] = function(obj) {
      return toString.call(obj) == '[object ' + name + ']';
    };
  });

  // Define a fallback version of the method in browsers (ahem, IE), where
  // there isn't any inspectable "Arguments" type.
  if (!_.isArguments(arguments)) {
    _.isArguments = function(obj) {
      return !!(obj && _.has(obj, 'callee'));
    };
  }

  // Optimize `isFunction` if appropriate.
  if (typeof (/./) !== 'function') {
    _.isFunction = function(obj) {
      return typeof obj === 'function';
    };
  }

  // Is a given object a finite number?
  _.isFinite = function(obj) {
    return isFinite(obj) && !isNaN(parseFloat(obj));
  };

  // Is the given value `NaN`? (NaN is the only number which does not equal itself).
  _.isNaN = function(obj) {
    return _.isNumber(obj) && obj != +obj;
  };

  // Is a given value a boolean?
  _.isBoolean = function(obj) {
    return obj === true || obj === false || toString.call(obj) == '[object Boolean]';
  };

  // Is a given value equal to null?
  _.isNull = function(obj) {
    return obj === null;
  };

  // Is a given variable undefined?
  _.isUndefined = function(obj) {
    return obj === void 0;
  };

  // Shortcut function for checking if an object has a given property directly
  // on itself (in other words, not on a prototype).
  _.has = function(obj, key) {
    return hasOwnProperty.call(obj, key);
  };

  // Utility Functions
  // -----------------

  // Run Underscore.js in *noConflict* mode, returning the `_` variable to its
  // previous owner. Returns a reference to the Underscore object.
  _.noConflict = function() {
    root._ = previousUnderscore;
    return this;
  };

  // Keep the identity function around for default iterators.
  _.identity = function(value) {
    return value;
  };

  _.constant = function(value) {
    return function () {
      return value;
    };
  };

  _.property = function(key) {
    return function(obj) {
      return obj[key];
    };
  };

  // Returns a predicate for checking whether an object has a given set of `key:value` pairs.
  _.matches = function(attrs) {
    return function(obj) {
      if (obj === attrs) return true; //avoid comparing an object to itself.
      for (var key in attrs) {
        if (attrs[key] !== obj[key])
          return false;
      }
      return true;
    }
  };

  // Run a function **n** times.
  _.times = function(n, iterator, context) {
    var accum = Array(Math.max(0, n));
    for (var i = 0; i < n; i++) accum[i] = iterator.call(context, i);
    return accum;
  };

  // Return a random integer between min and max (inclusive).
  _.random = function(min, max) {
    if (max == null) {
      max = min;
      min = 0;
    }
    return min + Math.floor(Math.random() * (max - min + 1));
  };

  // A (possibly faster) way to get the current timestamp as an integer.
  _.now = Date.now || function() { return new Date().getTime(); };

  // List of HTML entities for escaping.
  var entityMap = {
    escape: {
      '&': '&amp;',
      '<': '&lt;',
      '>': '&gt;',
      '"': '&quot;',
      "'": '&#x27;'
    }
  };
  entityMap.unescape = _.invert(entityMap.escape);

  // Regexes containing the keys and values listed immediately above.
  var entityRegexes = {
    escape:   new RegExp('[' + _.keys(entityMap.escape).join('') + ']', 'g'),
    unescape: new RegExp('(' + _.keys(entityMap.unescape).join('|') + ')', 'g')
  };

  // Functions for escaping and unescaping strings to/from HTML interpolation.
  _.each(['escape', 'unescape'], function(method) {
    _[method] = function(string) {
      if (string == null) return '';
      return ('' + string).replace(entityRegexes[method], function(match) {
        return entityMap[method][match];
      });
    };
  });

  // If the value of the named `property` is a function then invoke it with the
  // `object` as context; otherwise, return it.
  _.result = function(object, property) {
    if (object == null) return void 0;
    var value = object[property];
    return _.isFunction(value) ? value.call(object) : value;
  };

  // Add your own custom functions to the Underscore object.
  _.mixin = function(obj) {
    each(_.functions(obj), function(name) {
      var func = _[name] = obj[name];
      _.prototype[name] = function() {
        var args = [this._wrapped];
        push.apply(args, arguments);
        return result.call(this, func.apply(_, args));
      };
    });
  };

  // Generate a unique integer id (unique within the entire client session).
  // Useful for temporary DOM ids.
  var idCounter = 0;
  _.uniqueId = function(prefix) {
    var id = ++idCounter + '';
    return prefix ? prefix + id : id;
  };

  // By default, Underscore uses ERB-style template delimiters, change the
  // following template settings to use alternative delimiters.
  _.templateSettings = {
    evaluate    : /<%([\s\S]+?)%>/g,
    interpolate : /<%=([\s\S]+?)%>/g,
    escape      : /<%-([\s\S]+?)%>/g
  };

  // When customizing `templateSettings`, if you don't want to define an
  // interpolation, evaluation or escaping regex, we need one that is
  // guaranteed not to match.
  var noMatch = /(.)^/;

  // Certain characters need to be escaped so that they can be put into a
  // string literal.
  var escapes = {
    "'":      "'",
    '\\':     '\\',
    '\r':     'r',
    '\n':     'n',
    '\t':     't',
    '\u2028': 'u2028',
    '\u2029': 'u2029'
  };

  var escaper = /\\|'|\r|\n|\t|\u2028|\u2029/g;

  // JavaScript micro-templating, similar to John Resig's implementation.
  // Underscore templating handles arbitrary delimiters, preserves whitespace,
  // and correctly escapes quotes within interpolated code.
  _.template = function(text, data, settings) {
    var render;
    settings = _.defaults({}, settings, _.templateSettings);

    // Combine delimiters into one regular expression via alternation.
    var matcher = new RegExp([
      (settings.escape || noMatch).source,
      (settings.interpolate || noMatch).source,
      (settings.evaluate || noMatch).source
    ].join('|') + '|$', 'g');

    // Compile the template source, escaping string literals appropriately.
    var index = 0;
    var source = "__p+='";
    text.replace(matcher, function(match, escape, interpolate, evaluate, offset) {
      source += text.slice(index, offset)
        .replace(escaper, function(match) { return '\\' + escapes[match]; });

      if (escape) {
        source += "'+\n((__t=(" + escape + "))==null?'':_.escape(__t))+\n'";
      }
      if (interpolate) {
        source += "'+\n((__t=(" + interpolate + "))==null?'':__t)+\n'";
      }
      if (evaluate) {
        source += "';\n" + evaluate + "\n__p+='";
      }
      index = offset + match.length;
      return match;
    });
    source += "';\n";

    // If a variable is not specified, place data values in local scope.
    if (!settings.variable) source = 'with(obj||{}){\n' + source + '}\n';

    source = "var __t,__p='',__j=Array.prototype.join," +
      "print=function(){__p+=__j.call(arguments,'');};\n" +
      source + "return __p;\n";

    try {
      render = new Function(settings.variable || 'obj', '_', source);
    } catch (e) {
      e.source = source;
      throw e;
    }

    if (data) return render(data, _);
    var template = function(data) {
      return render.call(this, data, _);
    };

    // Provide the compiled function source as a convenience for precompilation.
    template.source = 'function(' + (settings.variable || 'obj') + '){\n' + source + '}';

    return template;
  };

  // Add a "chain" function, which will delegate to the wrapper.
  _.chain = function(obj) {
    return _(obj).chain();
  };

  // OOP
  // ---------------
  // If Underscore is called as a function, it returns a wrapped object that
  // can be used OO-style. This wrapper holds altered versions of all the
  // underscore functions. Wrapped objects may be chained.

  // Helper function to continue chaining intermediate results.
  var result = function(obj) {
    return this._chain ? _(obj).chain() : obj;
  };

  // Add all of the Underscore functions to the wrapper object.
  _.mixin(_);

  // Add all mutator Array functions to the wrapper.
  each(['pop', 'push', 'reverse', 'shift', 'sort', 'splice', 'unshift'], function(name) {
    var method = ArrayProto[name];
    _.prototype[name] = function() {
      var obj = this._wrapped;
      method.apply(obj, arguments);
      if ((name == 'shift' || name == 'splice') && obj.length === 0) delete obj[0];
      return result.call(this, obj);
    };
  });

  // Add all accessor Array functions to the wrapper.
  each(['concat', 'join', 'slice'], function(name) {
    var method = ArrayProto[name];
    _.prototype[name] = function() {
      return result.call(this, method.apply(this._wrapped, arguments));
    };
  });

  _.extend(_.prototype, {

    // Start chaining a wrapped Underscore object.
    chain: function() {
      this._chain = true;
      return this;
    },

    // Extracts the result from a wrapped and chained object.
    value: function() {
      return this._wrapped;
    }

  });

  // AMD registration happens at the end for compatibility with AMD loaders
  // that may not enforce next-turn semantics on modules. Even though general
  // practice for AMD registration is to be anonymous, underscore registers
  // as a named module because, like jQuery, it is a base library that is
  // popular enough to be bundled in a third party lib, but not be part of
  // an AMD load request. Those cases could generate an error when an
  // anonymous define() is called outside of a loader request.
  if (typeof define === 'function' && define.amd) {
    define('underscore', [], function() {
      return _;
    });
  }
}).call(this);

/*!
 * Fotorama 4.5.1 | http://fotorama.io/license/
 */
!function(a,b,c,d,e){"use strict";function f(a){var b="bez_"+d.makeArray(arguments).join("_").replace(".","p");if("function"!=typeof d.easing[b]){var c=function(a,b){var c=[null,null],d=[null,null],e=[null,null],f=function(f,g){return e[g]=3*a[g],d[g]=3*(b[g]-a[g])-e[g],c[g]=1-e[g]-d[g],f*(e[g]+f*(d[g]+f*c[g]))},g=function(a){return e[0]+a*(2*d[0]+3*c[0]*a)},h=function(a){for(var b,c=a,d=0;++d<14&&(b=f(c,0)-a,!(Math.abs(b)<.001));)c-=b/g(c);return c};return function(a){return f(h(a),1)}};d.easing[b]=function(b,d,e,f,g){return f*c([a[0],a[1]],[a[2],a[3]])(d/g)+e}}return b}function g(){}function h(a,b,c){return Math.max(isNaN(b)?-1/0:b,Math.min(isNaN(c)?1/0:c,a))}function i(a){return a.match(/ma/)&&a.match(/-?\d+(?!d)/g)[a.match(/3d/)?12:4]}function j(a){return Ec?+i(a.css("transform")):+a.css("left").replace("px","")}function k(a,b){var c={};return Ec?c.transform="translate3d("+(a+(b?.001:0))+"px,0,0)":c.left=a,c}function l(a){return{"transition-duration":a+"ms"}}function m(a,b){return+String(a).replace(b||"px","")||e}function n(a){return/%$/.test(a)&&m(a,"%")}function o(a,b){return n(a)/100*b||m(a)}function p(a){return(!!m(a)||!!m(a,"%"))&&a}function q(a,b,c,d){return(a-(d||0))*(b+(c||0))}function r(a,b,c,d){return-Math.round(a/(b+(c||0))-(d||0))}function s(a){var b=a.data();if(!b.tEnd){var c=a[0],d={WebkitTransition:"webkitTransitionEnd",MozTransition:"transitionend",OTransition:"oTransitionEnd otransitionend",msTransition:"MSTransitionEnd",transition:"transitionend"};c.addEventListener(d[mc.prefixed("transition")],function(a){b.tProp&&a.propertyName.match(b.tProp)&&b.onEndFn()},!1),b.tEnd=!0}}function t(a,b,c,d){var e,f=a.data();f&&(f.onEndFn=function(){e||(e=!0,clearTimeout(f.tT),c())},f.tProp=b,clearTimeout(f.tT),f.tT=setTimeout(function(){f.onEndFn()},1.5*d),s(a))}function u(a,b,c){if(a.length){var d=a.data();Ec?(a.css(l(0)),d.onEndFn=g,clearTimeout(d.tT)):a.stop();var e=v(b,function(){return j(a)});return a.css(k(e,c)),e}}function v(){for(var a,b=0,c=arguments.length;c>b&&(a=b?arguments[b]():arguments[b],"number"!=typeof a);b++);return a}function w(a,b){return Math.round(a+(b-a)/1.5)}function x(){return x.p=x.p||("https:"===c.protocol?"https://":"http://"),x.p}function y(a){var c=b.createElement("a");return c.href=a,c}function z(a,b){if("string"!=typeof a)return a;a=y(a);var c,d;if(a.host.match(/youtube\.com/)&&a.search){if(c=a.search.split("v=")[1]){var e=c.indexOf("&");-1!==e&&(c=c.substring(0,e)),d="youtube"}}else a.host.match(/youtube\.com|youtu\.be/)?(c=a.pathname.replace(/^\/(embed\/|v\/)?/,"").replace(/\/.*/,""),d="youtube"):a.host.match(/vimeo\.com/)&&(d="vimeo",c=a.pathname.replace(/^\/(video\/)?/,"").replace(/\/.*/,""));return c&&d||!b||(c=a.href,d="custom"),c?{id:c,type:d,s:a.search.replace(/^\?/,"")}:!1}function A(a,b,c){var e,f,g=a.video;return"youtube"===g.type?(f=x()+"img.youtube.com/vi/"+g.id+"/default.jpg",e=f.replace(/\/default.jpg$/,"/hqdefault.jpg"),a.thumbsReady=!0):"vimeo"===g.type?d.ajax({url:x()+"vimeo.com/api/v2/video/"+g.id+".json",dataType:"jsonp",success:function(d){a.thumbsReady=!0,B(b,{img:d[0].thumbnail_large,thumb:d[0].thumbnail_small},a.i,c)}}):a.thumbsReady=!0,{img:e,thumb:f}}function B(a,b,c,e){for(var f=0,g=a.length;g>f;f++){var h=a[f];if(h.i===c&&h.thumbsReady){var i={videoReady:!0};i[Uc]=i[Wc]=i[Vc]=!1,e.splice(f,1,d.extend({},h,i,b));break}}}function C(a){function b(a,b,e){var f=a.children("img").eq(0),g=a.attr("href"),h=a.attr("src"),i=f.attr("src"),j=b.video,k=e?z(g,j===!0):!1;k?g=!1:k=j,c(a,f,d.extend(b,{video:k,img:b.img||g||h||i,thumb:b.thumb||i||h||g}))}function c(a,b,c){var e=c.thumb&&c.img!==c.thumb,f=m(c.width||a.attr("width")),g=m(c.height||a.attr("height"));d.extend(c,{width:f,height:g,thumbratio:R(c.thumbratio||m(c.thumbwidth||b&&b.attr("width")||e||f)/m(c.thumbheight||b&&b.attr("height")||e||g))})}var e=[];return a.children().each(function(){var a=d(this),f=Q(d.extend(a.data(),{id:a.attr("id")}));if(a.is("a, img"))b(a,f,!0);else{if(a.is(":empty"))return;c(a,null,d.extend(f,{html:this,_html:a.html()}))}e.push(f)}),e}function D(a){return 0===a.offsetWidth&&0===a.offsetHeight}function E(a){return!d.contains(b.documentElement,a)}function F(a,b,c){a()?b():setTimeout(function(){F(a,b)},c||100)}function G(a){c.replace(c.protocol+"//"+c.host+c.pathname.replace(/^\/?/,"/")+c.search+"#"+a)}function H(a,b,c){var d=a.data(),e=d.measures;if(e&&(!d.l||d.l.W!==e.width||d.l.H!==e.height||d.l.r!==e.ratio||d.l.w!==b.w||d.l.h!==b.h||d.l.m!==c)){var f=e.width,g=e.height,i=b.w/b.h,j=e.ratio>=i,k="scaledown"===c,l="contain"===c,m="cover"===c;j&&(k||l)||!j&&m?(f=h(b.w,0,k?f:1/0),g=f/e.ratio):(j&&m||!j&&(k||l))&&(g=h(b.h,0,k?g:1/0),f=g*e.ratio),a.css({width:Math.ceil(f),height:Math.ceil(g),marginLeft:Math.floor(-f/2),marginTop:Math.floor(-g/2)}),d.l={W:e.width,H:e.height,r:e.ratio,w:b.w,h:b.h,m:c}}return!0}function I(a,b){var c=a[0];c.styleSheet?c.styleSheet.cssText=b:a.html(b)}function J(a,b,c){return b===c?!1:b>=a?"left":a>=c?"right":"left right"}function K(a,b,c,d){if(!c)return!1;if(!isNaN(a))return a-(d?0:1);for(var e,f=0,g=b.length;g>f;f++){var h=b[f];if(h.id===a){e=f;break}}return e}function L(a,b,c){c=c||{},a.each(function(){var a,e=d(this),f=e.data();f.clickOn||(f.clickOn=!0,d.extend(X(e,{onStart:function(b){a=b,(c.onStart||g).call(this,b)},onMove:c.onMove||g,onTouchEnd:c.onTouchEnd||g,onEnd:function(c){c.moved||b.call(this,a)}}),{noMove:!0}))})}function M(a,b){return'<div class="'+a+'">'+(b||"")+"</div>"}function N(a){for(var b=a.length;b;){var c=Math.floor(Math.random()*b--),d=a[b];a[b]=a[c],a[c]=d}return a}function O(a){return"[object Array]"==Object.prototype.toString.call(a)&&d.map(a,function(a){return d.extend({},a)})}function P(a,b){Ac.scrollLeft(a).scrollTop(b)}function Q(a){if(a){var b={};return d.each(a,function(a,c){b[a.toLowerCase()]=c}),b}}function R(a){if(a){var b=+a;return isNaN(b)?(b=a.split("/"),+b[0]/+b[1]||e):b}}function S(a,b){a.preventDefault(),b&&a.stopPropagation()}function T(a){return a?">":"<"}function U(a,b){var c=a.data(),e=Math.round(b.pos),f=function(){c.sliding=!1,(b.onEnd||g)()};"undefined"!=typeof b.overPos&&b.overPos!==b.pos&&(e=b.overPos,f=function(){U(a,d.extend({},b,{overPos:b.pos,time:Math.max(Nc,b.time/2)}))});var h=d.extend(k(e,b._001),b.width&&{width:b.width});c.sliding=!0,Ec?(a.css(d.extend(l(b.time),h)),b.time>10?t(a,"transform",f,b.time):f()):a.stop().animate(h,b.time,Xc,f)}function V(a,b,c,e,f,h){var i="undefined"!=typeof h;if(i||(f.push(arguments),Array.prototype.push.call(arguments,f.length),!(f.length>1))){a=a||d(a),b=b||d(b);var j=a[0],k=b[0],l="crossfade"===e.method,m=function(){if(!m.done){m.done=!0;var a=(i||f.shift())&&f.shift();a&&V.apply(this,a),(e.onEnd||g)(!!a)}},n=e.time/(h||1);c.removeClass(Kb+" "+Jb),a.stop().addClass(Kb),b.stop().addClass(Jb),l&&k&&a.fadeTo(0,0),a.fadeTo(l?n:0,1,l&&m),b.fadeTo(n,0,m),j&&l||k||m()}}function W(a){var b=(a.touches||[])[0]||a;a._x=b.pageX,a._y=b.clientY,a._now=d.now()}function X(c,e){function f(a){return n=d(a.target),v.checked=q=r=t=!1,l||v.flow||a.touches&&a.touches.length>1||a.which>1||wc&&wc.type!==a.type&&yc||(q=e.select&&n.is(e.select,u))?q:(p="touchstart"===a.type,r=n.is("a, a *",u),o=v.control,s=v.noMove||v.noSwipe||o?16:v.snap?0:4,W(a),m=wc=a,xc=a.type.replace(/down|start/,"move").replace(/Down/,"Move"),(e.onStart||g).call(u,a,{control:o,$target:n}),l=v.flow=!0,void((!p||v.go)&&S(a)))}function h(a){if(a.touches&&a.touches.length>1||Kc&&!a.isPrimary||xc!==a.type||!l)return l&&i(),void(e.onTouchEnd||g)();W(a);var b=Math.abs(a._x-m._x),c=Math.abs(a._y-m._y),d=b-c,f=(v.go||v.x||d>=0)&&!v.noSwipe,h=0>d;p&&!v.checked?(l=f)&&S(a):(S(a),(e.onMove||g).call(u,a,{touch:p})),!t&&Math.sqrt(Math.pow(b,2)+Math.pow(c,2))>s&&(t=!0),v.checked=v.checked||f||h}function i(a){(e.onTouchEnd||g)();var b=l;v.control=l=!1,b&&(v.flow=!1),!b||r&&!v.checked||(a&&S(a),yc=!0,clearTimeout(zc),zc=setTimeout(function(){yc=!1},1e3),(e.onEnd||g).call(u,{moved:t,$target:n,control:o,touch:p,startEvent:m,aborted:!a||"MSPointerCancel"===a.type}))}function j(){v.flow||setTimeout(function(){v.flow=!0},10)}function k(){v.flow&&setTimeout(function(){v.flow=!1},Mc)}var l,m,n,o,p,q,r,s,t,u=c[0],v={};return Kc?(u[Jc]("MSPointerDown",f,!1),b[Jc]("MSPointerMove",h,!1),b[Jc]("MSPointerCancel",i,!1),b[Jc]("MSPointerUp",i,!1)):(u[Jc]&&(u[Jc]("touchstart",f,!1),u[Jc]("touchmove",h,!1),u[Jc]("touchend",i,!1),b[Jc]("touchstart",j,!1),b[Jc]("touchend",k,!1),b[Jc]("touchcancel",k,!1),a[Jc]("scroll",k,!1)),c.on("mousedown",f),Bc.on("mousemove",h).on("mouseup",i)),c.on("click","a",function(a){v.checked&&S(a)}),v}function Y(a,b){function c(c,d){A=!0,j=l=c._x,q=c._now,p=[[q,j]],m=n=D.noMove||d?0:u(a,(b.getPos||g)(),b._001),(b.onStart||g).call(B,c)}function e(a,b){s=D.min,t=D.max,v=D.snap,x=a.altKey,A=z=!1,y=b.control,y||C.sliding||c(a)}function f(d,e){D.noSwipe||(A||c(d),l=d._x,p.push([d._now,l]),n=m-(j-l),o=J(n,s,t),s>=n?n=w(n,s):n>=t&&(n=w(n,t)),D.noMove||(a.css(k(n,b._001)),z||(z=!0,e.touch||Kc||a.addClass(Zb)),(b.onMove||g).call(B,d,{pos:n,edge:o})))}function i(e){if(!D.noSwipe||!e.moved){A||c(e.startEvent,!0),e.touch||Kc||a.removeClass(Zb),r=d.now();for(var f,i,j,k,o,q,u,w,y,z=r-Mc,C=null,E=Nc,F=b.friction,G=p.length-1;G>=0;G--){if(f=p[G][0],i=Math.abs(f-z),null===C||j>i)C=f,k=p[G][1];else if(C===z||i>j)break;j=i}u=h(n,s,t);var H=k-l,I=H>=0,J=r-C,K=J>Mc,L=!K&&n!==m&&u===n;v&&(u=h(Math[L?I?"floor":"ceil":"round"](n/v)*v,s,t),s=t=u),L&&(v||u===n)&&(y=-(H/J),E*=h(Math.abs(y),b.timeLow,b.timeHigh),o=Math.round(n+y*E/F),v||(u=o),(!I&&o>t||I&&s>o)&&(q=I?s:t,w=o-q,v||(u=q),w=h(u+.03*w,q-50,q+50),E=Math.abs((n-w)/(y/F)))),E*=x?10:1,(b.onEnd||g).call(B,d.extend(e,{moved:e.moved||K&&v,pos:n,newPos:u,overPos:w,time:E}))}}var j,l,m,n,o,p,q,r,s,t,v,x,y,z,A,B=a[0],C=a.data(),D={};return D=d.extend(X(b.$wrap,{onStart:e,onMove:f,onTouchEnd:b.onTouchEnd,onEnd:i,select:b.select}),D)}function Z(a,b){var c,e,f,h=a[0],i={prevent:{}};return h[Jc]&&h[Jc](Lc,function(a){var h=a.wheelDeltaY||-1*a.deltaY||0,j=a.wheelDeltaX||-1*a.deltaX||0,k=Math.abs(j)>Math.abs(h),l=T(0>j),m=e===l,n=d.now(),o=Mc>n-f;e=l,f=n,k&&i.ok&&(!i.prevent[l]||c)&&(S(a,!0),c&&m&&o||(b.shift&&(c=!0,clearTimeout(i.t),i.t=setTimeout(function(){c=!1},Oc)),(b.onEnd||g)(a,b.shift?l:j)))},!1),i}function $(){d.each(d.Fotorama.instances,function(a,b){b.index=a})}function _(a){d.Fotorama.instances.push(a),$()}function ab(a){d.Fotorama.instances.splice(a.index,1),$()}var bb="fotorama",cb="fullscreen",db=bb+"__wrap",eb=db+"--css2",fb=db+"--css3",gb=db+"--video",hb=db+"--fade",ib=db+"--slide",jb=db+"--no-controls",kb=db+"--no-shadows",lb=db+"--pan-y",mb=db+"--rtl",nb=db+"--only-active",ob=db+"--no-captions",pb=db+"--toggle-arrows",qb=bb+"__stage",rb=qb+"__frame",sb=rb+"--video",tb=qb+"__shaft",ub=bb+"__grab",vb=bb+"__pointer",wb=bb+"__arr",xb=wb+"--disabled",yb=wb+"--prev",zb=wb+"--next",Ab=bb+"__nav",Bb=Ab+"-wrap",Cb=Ab+"__shaft",Db=Ab+"--dots",Eb=Ab+"--thumbs",Fb=Ab+"__frame",Gb=Fb+"--dot",Hb=Fb+"--thumb",Ib=bb+"__fade",Jb=Ib+"-front",Kb=Ib+"-rear",Lb=bb+"__shadow",Mb=Lb+"s",Nb=Mb+"--left",Ob=Mb+"--right",Pb=bb+"__active",Qb=bb+"__select",Rb=bb+"--hidden",Sb=bb+"--fullscreen",Tb=bb+"__fullscreen-icon",Ub=bb+"__error",Vb=bb+"__loading",Wb=bb+"__loaded",Xb=Wb+"--full",Yb=Wb+"--img",Zb=bb+"__grabbing",$b=bb+"__img",_b=$b+"--full",ac=bb+"__dot",bc=bb+"__thumb",cc=bc+"-border",dc=bb+"__html",ec=bb+"__video",fc=ec+"-play",gc=ec+"-close",hc=bb+"__caption",ic=bb+"__caption__wrap",jc=bb+"__spinner",kc=d&&d.fn.jquery.split(".");if(!kc||kc[0]<1||1==kc[0]&&kc[1]<8)throw"Fotorama requires jQuery 1.8 or later and will not run without it.";var lc={},mc=function(a,b,c){function d(a){r.cssText=a}function e(a,b){return typeof a===b}function f(a,b){return!!~(""+a).indexOf(b)}function g(a,b){for(var d in a){var e=a[d];if(!f(e,"-")&&r[e]!==c)return"pfx"==b?e:!0}return!1}function h(a,b,d){for(var f in a){var g=b[a[f]];if(g!==c)return d===!1?a[f]:e(g,"function")?g.bind(d||b):g}return!1}function i(a,b,c){var d=a.charAt(0).toUpperCase()+a.slice(1),f=(a+" "+u.join(d+" ")+d).split(" ");return e(b,"string")||e(b,"undefined")?g(f,b):(f=(a+" "+v.join(d+" ")+d).split(" "),h(f,b,c))}var j,k,l,m="2.6.2",n={},o=b.documentElement,p="modernizr",q=b.createElement(p),r=q.style,s=({}.toString," -webkit- -moz- -o- -ms- ".split(" ")),t="Webkit Moz O ms",u=t.split(" "),v=t.toLowerCase().split(" "),w={},x=[],y=x.slice,z=function(a,c,d,e){var f,g,h,i,j=b.createElement("div"),k=b.body,l=k||b.createElement("body");if(parseInt(d,10))for(;d--;)h=b.createElement("div"),h.id=e?e[d]:p+(d+1),j.appendChild(h);return f=["&#173;",'<style id="s',p,'">',a,"</style>"].join(""),j.id=p,(k?j:l).innerHTML+=f,l.appendChild(j),k||(l.style.background="",l.style.overflow="hidden",i=o.style.overflow,o.style.overflow="hidden",o.appendChild(l)),g=c(j,a),k?j.parentNode.removeChild(j):(l.parentNode.removeChild(l),o.style.overflow=i),!!g},A={}.hasOwnProperty;l=e(A,"undefined")||e(A.call,"undefined")?function(a,b){return b in a&&e(a.constructor.prototype[b],"undefined")}:function(a,b){return A.call(a,b)},Function.prototype.bind||(Function.prototype.bind=function(a){var b=this;if("function"!=typeof b)throw new TypeError;var c=y.call(arguments,1),d=function(){if(this instanceof d){var e=function(){};e.prototype=b.prototype;var f=new e,g=b.apply(f,c.concat(y.call(arguments)));return Object(g)===g?g:f}return b.apply(a,c.concat(y.call(arguments)))};return d}),w.csstransforms3d=function(){var a=!!i("perspective");return a};for(var B in w)l(w,B)&&(k=B.toLowerCase(),n[k]=w[B](),x.push((n[k]?"":"no-")+k));return n.addTest=function(a,b){if("object"==typeof a)for(var d in a)l(a,d)&&n.addTest(d,a[d]);else{if(a=a.toLowerCase(),n[a]!==c)return n;b="function"==typeof b?b():b,"undefined"!=typeof enableClasses&&enableClasses&&(o.className+=" "+(b?"":"no-")+a),n[a]=b}return n},d(""),q=j=null,n._version=m,n._prefixes=s,n._domPrefixes=v,n._cssomPrefixes=u,n.testProp=function(a){return g([a])},n.testAllProps=i,n.testStyles=z,n.prefixed=function(a,b,c){return b?i(a,b,c):i(a,"pfx")},n}(a,b),nc={ok:!1,is:function(){return!1},request:function(){},cancel:function(){},event:"",prefix:""},oc="webkit moz o ms khtml".split(" ");if("undefined"!=typeof b.cancelFullScreen)nc.ok=!0;else for(var pc=0,qc=oc.length;qc>pc;pc++)if(nc.prefix=oc[pc],"undefined"!=typeof b[nc.prefix+"CancelFullScreen"]){nc.ok=!0;break}nc.ok&&(nc.event=nc.prefix+"fullscreenchange",nc.is=function(){switch(this.prefix){case"":return b.fullScreen;case"webkit":return b.webkitIsFullScreen;default:return b[this.prefix+"FullScreen"]}},nc.request=function(a){return""===this.prefix?a.requestFullScreen():a[this.prefix+"RequestFullScreen"]()},nc.cancel=function(){return""===this.prefix?b.cancelFullScreen():b[this.prefix+"CancelFullScreen"]()});var rc,sc={lines:12,length:5,width:2,radius:7,corners:1,rotate:15,color:"rgba(128, 128, 128, .75)",hwaccel:!0},tc={top:"auto",left:"auto",className:""};!function(a,b){rc=b()}(this,function(){function a(a,c){var d,e=b.createElement(a||"div");for(d in c)e[d]=c[d];return e}function c(a){for(var b=1,c=arguments.length;c>b;b++)a.appendChild(arguments[b]);return a}function d(a,b,c,d){var e=["opacity",b,~~(100*a),c,d].join("-"),f=.01+c/d*100,g=Math.max(1-(1-a)/b*(100-f),a),h=m.substring(0,m.indexOf("Animation")).toLowerCase(),i=h&&"-"+h+"-"||"";return o[e]||(p.insertRule("@"+i+"keyframes "+e+"{0%{opacity:"+g+"}"+f+"%{opacity:"+a+"}"+(f+.01)+"%{opacity:1}"+(f+b)%100+"%{opacity:"+a+"}100%{opacity:"+g+"}}",p.cssRules.length),o[e]=1),e}function f(a,b){var c,d,f=a.style;for(b=b.charAt(0).toUpperCase()+b.slice(1),d=0;d<n.length;d++)if(c=n[d]+b,f[c]!==e)return c;return f[b]!==e?b:void 0}function g(a,b){for(var c in b)a.style[f(a,c)||c]=b[c];return a}function h(a){for(var b=1;b<arguments.length;b++){var c=arguments[b];for(var d in c)a[d]===e&&(a[d]=c[d])}return a}function i(a){for(var b={x:a.offsetLeft,y:a.offsetTop};a=a.offsetParent;)b.x+=a.offsetLeft,b.y+=a.offsetTop;return b}function j(a,b){return"string"==typeof a?a:a[b%a.length]}function k(a){return"undefined"==typeof this?new k(a):void(this.opts=h(a||{},k.defaults,q))}function l(){function b(b,c){return a("<"+b+' xmlns="urn:schemas-microsoft.com:vml" class="spin-vml">',c)}p.addRule(".spin-vml","behavior:url(#default#VML)"),k.prototype.lines=function(a,d){function e(){return g(b("group",{coordsize:k+" "+k,coordorigin:-i+" "+-i}),{width:k,height:k})}function f(a,f,h){c(m,c(g(e(),{rotation:360/d.lines*a+"deg",left:~~f}),c(g(b("roundrect",{arcsize:d.corners}),{width:i,height:d.width,left:d.radius,top:-d.width>>1,filter:h}),b("fill",{color:j(d.color,a),opacity:d.opacity}),b("stroke",{opacity:0}))))}var h,i=d.length+d.width,k=2*i,l=2*-(d.width+d.length)+"px",m=g(e(),{position:"absolute",top:l,left:l});if(d.shadow)for(h=1;h<=d.lines;h++)f(h,-2,"progid:DXImageTransform.Microsoft.Blur(pixelradius=2,makeshadow=1,shadowopacity=.3)");for(h=1;h<=d.lines;h++)f(h);return c(a,m)},k.prototype.opacity=function(a,b,c,d){var e=a.firstChild;d=d.shadow&&d.lines||0,e&&b+d<e.childNodes.length&&(e=e.childNodes[b+d],e=e&&e.firstChild,e=e&&e.firstChild,e&&(e.opacity=c))}}var m,n=["webkit","Moz","ms","O"],o={},p=function(){var d=a("style",{type:"text/css"});return c(b.getElementsByTagName("head")[0],d),d.sheet||d.styleSheet}(),q={lines:12,length:7,width:5,radius:10,rotate:0,corners:1,color:"#000",direction:1,speed:1,trail:100,opacity:.25,fps:20,zIndex:2e9,className:"spinner",top:"auto",left:"auto",position:"relative"};k.defaults={},h(k.prototype,{spin:function(b){this.stop();var c,d,e=this,f=e.opts,h=e.el=g(a(0,{className:f.className}),{position:f.position,width:0,zIndex:f.zIndex}),j=f.radius+f.length+f.width;if(b&&(b.insertBefore(h,b.firstChild||null),d=i(b),c=i(h),g(h,{left:("auto"==f.left?d.x-c.x+(b.offsetWidth>>1):parseInt(f.left,10)+j)+"px",top:("auto"==f.top?d.y-c.y+(b.offsetHeight>>1):parseInt(f.top,10)+j)+"px"})),h.setAttribute("role","progressbar"),e.lines(h,e.opts),!m){var k,l=0,n=(f.lines-1)*(1-f.direction)/2,o=f.fps,p=o/f.speed,q=(1-f.opacity)/(p*f.trail/100),r=p/f.lines;!function s(){l++;for(var a=0;a<f.lines;a++)k=Math.max(1-(l+(f.lines-a)*r)%p*q,f.opacity),e.opacity(h,a*f.direction+n,k,f);e.timeout=e.el&&setTimeout(s,~~(1e3/o))}()}return e},stop:function(){var a=this.el;return a&&(clearTimeout(this.timeout),a.parentNode&&a.parentNode.removeChild(a),this.el=e),this},lines:function(b,e){function f(b,c){return g(a(),{position:"absolute",width:e.length+e.width+"px",height:e.width+"px",background:b,boxShadow:c,transformOrigin:"left",transform:"rotate("+~~(360/e.lines*i+e.rotate)+"deg) translate("+e.radius+"px,0)",borderRadius:(e.corners*e.width>>1)+"px"})}for(var h,i=0,k=(e.lines-1)*(1-e.direction)/2;i<e.lines;i++)h=g(a(),{position:"absolute",top:1+~(e.width/2)+"px",transform:e.hwaccel?"translate3d(0,0,0)":"",opacity:e.opacity,animation:m&&d(e.opacity,e.trail,k+i*e.direction,e.lines)+" "+1/e.speed+"s linear infinite"}),e.shadow&&c(h,g(f("#000","0 0 4px #000"),{top:"2px"})),c(b,c(h,f(j(e.color,i),"0 0 1px rgba(0,0,0,.1)")));return b},opacity:function(a,b,c){b<a.childNodes.length&&(a.childNodes[b].style.opacity=c)}});var r=g(a("group"),{behavior:"url(#default#VML)"});return!f(r,"transform")&&r.adj?l():m=f(r,"animation"),k});var uc,vc,wc,xc,yc,zc,Ac=d(a),Bc=d(b),Cc="quirks"===c.hash.replace("#",""),Dc=mc.csstransforms3d,Ec=Dc&&!Cc,Fc=Dc||"CSS1Compat"===b.compatMode,Gc=nc.ok,Hc=navigator.userAgent.match(/Android|webOS|iPhone|iPad|iPod|BlackBerry|Windows Phone/i),Ic=!Ec||Hc,Jc="addEventListener",Kc=navigator.msPointerEnabled,Lc="onwheel"in b.createElement("div")?"wheel":b.onmousewheel!==e?"mousewheel":"DOMMouseScroll",Mc=250,Nc=300,Oc=1400,Pc=5e3,Qc=2,Rc=64,Sc=500,Tc=333,Uc="$stageFrame",Vc="$navDotFrame",Wc="$navThumbFrame",Xc=f([.1,0,.25,1]),Yc=99999,Zc={width:null,minwidth:null,maxwidth:"100%",height:null,minheight:null,maxheight:null,ratio:null,margin:Qc,glimpse:0,nav:"dots",navposition:"bottom",navwidth:null,thumbwidth:Rc,thumbheight:Rc,thumbmargin:Qc,thumbborderwidth:Qc,allowfullscreen:!1,fit:"contain",transition:"slide",clicktransition:null,transitionduration:Nc,captions:!0,hash:!1,startindex:0,loop:!1,autoplay:!1,stopautoplayontouch:!0,keyboard:!1,arrows:!0,click:!0,swipe:!0,trackpad:!0,shuffle:!1,direction:"ltr",shadows:!0,spinner:null},$c={left:!0,right:!0,down:!1,up:!1,space:!1,home:!1,end:!1};jQuery.Fotorama=function(a,e){function f(){d.each(pd,function(a,b){if(!b.i){b.i=ce++;var c=z(b.video,!0);if(c){var d={};b.video=c,b.img||b.thumb?b.thumbsReady=!0:d=A(b,pd,$d),B(pd,{img:d.img,thumb:d.thumb},b.i,$d)}}})}function g(a){return Pd[a]||$d.fullScreen}function i(a){var b="keydown."+bb,c="keydown."+bb+_d,d="resize."+bb+_d;a?(Bc.on(c,function(a){var b,c;td&&27===a.keyCode?(b=!0,fd(td,!0,!0)):($d.fullScreen||e.keyboard&&!$d.index)&&(27===a.keyCode?(b=!0,$d.cancelFullScreen()):a.shiftKey&&32===a.keyCode&&g("space")||37===a.keyCode&&g("left")||38===a.keyCode&&g("up")?c="<":32===a.keyCode&&g("space")||39===a.keyCode&&g("right")||40===a.keyCode&&g("down")?c=">":36===a.keyCode&&g("home")?c="<<":35===a.keyCode&&g("end")&&(c=">>")),(b||c)&&S(a),c&&$d.show({index:c,slow:a.altKey,user:!0})}),$d.index||Bc.off(b).on(b,"textarea, input, select",function(a){!vc.hasClass(cb)&&a.stopPropagation()}),Ac.on(d,$d.resize)):(Bc.off(c),Ac.off(d))}function j(b){b!==j.f&&(b?(a.html("").addClass(bb+" "+ae).append(ge).before(ee).before(fe),_($d)):(ge.detach(),ee.detach(),fe.detach(),a.html(de.urtext).removeClass(ae),ab($d)),i(b),j.f=b)}function n(){pd=$d.data=pd||O(e.data)||C(a),qd=$d.size=pd.length,!od.ok&&e.shuffle&&N(pd),f(),ze=y(ze),qd&&j(!0)}function s(){var a=2>qd||td;Ce.noMove=a||Id,Ce.noSwipe=a||!e.swipe,!Md&&ie.toggleClass(ub,!Ce.noMove&&!Ce.noSwipe),Kc&&ge.toggleClass(lb,!Ce.noSwipe)}function t(a){a===!0&&(a=""),e.autoplay=Math.max(+a||Pc,1.5*Ld)}function w(){function a(a,c){b[a?"add":"remove"].push(c)}$d.options=e=Q(e),Id="crossfade"===e.transition||"dissolve"===e.transition,Cd=e.loop&&(qd>2||Id)&&(!Md||"slide"!==Md),Ld=+e.transitionduration||Nc,Od="rtl"===e.direction,Pd=d.extend({},e.keyboard&&$c,e.keyboard);var b={add:[],remove:[]};qd>1?(Dd=e.nav,Fd="top"===e.navposition,b.remove.push(Qb),me.toggle(!!e.arrows)):(Dd=!1,me.hide()),ec(),sd=new rc(d.extend(sc,e.spinner,tc,{direction:Od?-1:1})),yc(),zc(),e.autoplay&&t(e.autoplay),Jd=m(e.thumbwidth)||Rc,Kd=m(e.thumbheight)||Rc,De.ok=Fe.ok=e.trackpad&&!Ic,s(),Xc(e,[Be]),Ed="thumbs"===Dd,Ed?(lc(qd,"navThumb"),rd=re,Zd=Wc,I(ee,d.Fotorama.jst.style({w:Jd,h:Kd,b:e.thumbborderwidth,m:e.thumbmargin,s:_d,q:!Fc})),oe.addClass(Eb).removeClass(Db)):"dots"===Dd?(lc(qd,"navDot"),rd=qe,Zd=Vc,oe.addClass(Db).removeClass(Eb)):(Dd=!1,oe.removeClass(Eb+" "+Db)),Dd&&(Fd?ne.insertBefore(he):ne.insertAfter(he),qc.nav=!1,qc(rd,pe,"nav")),Gd=e.allowfullscreen,Gd?(te.appendTo(he),Hd=Gc&&"native"===Gd):(te.detach(),Hd=!1),a(Id,hb),a(!Id,ib),a(!e.captions,ob),a(Od,mb),a("always"!==e.arrows,pb),Nd=e.shadows&&!Ic,a(!Nd,kb),ge.addClass(b.add.join(" ")).removeClass(b.remove.join(" ")),Ae=d.extend({},e)}function x(a){return 0>a?(qd+a%qd)%qd:a>=qd?a%qd:a}function y(a){return h(a,0,qd-1)}function D(a){return Cd?x(a):y(a)}function W(a){return a>0||Cd?a-1:!1}function X(a){return qd-1>a||Cd?a+1:!1}function $(){Ce.min=Cd?-1/0:-q(qd-1,Be.w,e.margin,wd),Ce.max=Cd?1/0:-q(0,Be.w,e.margin,wd),Ce.snap=Be.w+e.margin}function Ib(){Ee.min=Math.min(0,Be.nw-pe.width()),Ee.max=0,pe.toggleClass(ub,!(Ee.noMove=Ee.min===Ee.max))}function Jb(a,b,c){if("number"==typeof a){a=new Array(a);var e=!0}return d.each(a,function(a,d){if(e&&(d=a),"number"==typeof d){var f=pd[x(d)];if(f){var g="$"+b+"Frame",h=f[g];c.call(this,a,d,f,h,g,h&&h.data())}}})}function Kb(a,b,c,d){(!Qd||"*"===Qd&&d===Bd)&&(a=p(e.width)||p(a)||Sc,b=p(e.height)||p(b)||Tc,$d.resize({width:a,ratio:e.ratio||c||a/b},0,d===Bd?!0:"*"))}function Lb(a,b,c,f,g){Jb(a,b,function(a,h,i,j,k,l){function m(a){var b=x(h);Zc(a,{index:b,src:v,frame:pd[b]})}function n(){s.remove(),d.Fotorama.cache[v]="error",i.html&&"stage"===b||!w||w===v?(!v||i.html||q?"stage"===b&&(j.trigger("f:load").removeClass(Vb+" "+Ub).addClass(Wb),m("load"),Kb()):(j.trigger("f:error").removeClass(Vb).addClass(Ub),m("error")),l.state="error",!(qd>1&&pd[h]===i)||i.html||i.deleted||i.video||q||(i.deleted=!0,$d.splice(h,1))):(i[u]=v=w,Lb([h],b,c,f,!0))}function o(){d.Fotorama.measures[v]=t.measures=d.Fotorama.measures[v]||{width:r.width,height:r.height,ratio:r.width/r.height},Kb(t.measures.width,t.measures.height,t.measures.ratio,h),s.off("load error").addClass($b+(q?" "+_b:"")).prependTo(j),H(s,c||Be,f||i.fit||e.fit),d.Fotorama.cache[v]=l.state="loaded",setTimeout(function(){j.trigger("f:load").removeClass(Vb+" "+Ub).addClass(Wb+" "+(q?Xb:Yb)),"stage"===b&&m("load")},5)}function p(){var a=10;F(function(){return!Xd||!a--&&!Ic},function(){o()})}if(j){var q=$d.fullScreen&&i.full&&i.full!==i.img&&!l.$full&&"stage"===b;if(!l.$img||g||q){var r=new Image,s=d(r),t=s.data();l[q?"$full":"$img"]=s;var u="stage"===b?q?"full":"img":"thumb",v=i[u],w=q?null:i["stage"===b?"thumb":"img"];if("navThumb"===b&&(j=l.$wrap),!v)return void n();d.Fotorama.cache[v]?!function y(){"error"===d.Fotorama.cache[v]?n():"loaded"===d.Fotorama.cache[v]?setTimeout(p,0):setTimeout(y,100)}():(d.Fotorama.cache[v]="*",s.on("load",p).on("error",n)),l.state="",r.src=v}}})}function Zb(a){ye.append(sd.spin().el).appendTo(a)}function ec(){ye.detach(),sd&&sd.stop()}function kc(){var a=$d.activeFrame[Uc];a&&!a.data().state&&(Zb(a),a.on("f:load f:error",function(){a.off("f:load f:error"),ec()}))}function lc(a,b){Jb(a,b,function(a,c,f,g,h,i){g||(g=f[h]=ge[h].clone(),i=g.data(),i.data=f,"stage"===b?(f.html&&d('<div class="'+dc+'"></div>').append(f._html?d(f.html).removeAttr("id").html(f._html):f.html).appendTo(g),e.captions&&f.caption&&d(M(hc,M(ic,f.caption))).appendTo(g),f.video&&g.addClass(sb).append(ve.clone()),je=je.add(g)):"navDot"===b?qe=qe.add(g):"navThumb"===b&&(i.$wrap=g.children(":first"),re=re.add(g),f.video&&g.append(ve.clone())))})}function mc(a,b,c){return a&&a.length&&H(a,b,c)}function oc(a){Jb(a,"stage",function(a,b,c,f,g,h){if(f){He[Uc][x(b)]=f.css(d.extend({left:Id?0:q(b,Be.w,e.margin,wd)},Id&&l(0))),E(f[0])&&(f.appendTo(ie),fd(c.$video));var i=c.fit||e.fit;mc(h.$img,Be,i),mc(h.$full,Be,i)}})}function pc(a,b){if("thumbs"===Dd&&!isNaN(a)){var c=-a,e=-a+Be.nw;re.each(function(){var a=d(this),f=a.data(),g=f.eq,h={h:Kd},i="cover";h.w=f.w,f.l+f.w<c||f.l>e||mc(f.$img,h,i)||b&&Lb([g],"navThumb",h,i)})}}function qc(a,b,c){if(!qc[c]){var f="nav"===c&&Ed,g=0;b.append(a.filter(function(){for(var a,b=d(this),c=b.data(),e=0,f=pd.length;f>e;e++)if(c.data===pd[e]){a=!0,c.eq=e;break}return a||b.remove()&&!1}).sort(function(a,b){return d(a).data().eq-d(b).data().eq}).each(function(){if(f){var a=d(this),b=a.data(),c=Math.round(Kd*b.data.thumbratio)||Jd;b.l=g,b.w=c,a.css({width:c}),g+=c+e.thumbmargin}})),qc[c]=!0}}function wc(a){return a-Ie>Be.w/3}function xc(a){return!(Cd||ze+a&&ze-qd+a||td)}function yc(){ke.toggleClass(xb,xc(0)),le.toggleClass(xb,xc(1))}function zc(){De.ok&&(De.prevent={"<":xc(0),">":xc(1)})}function Cc(a){var b,c,d=a.data();return Ed?(b=d.l,c=d.w):(b=a.position().left,c=a.width()),{c:b+c/2,min:-b+10*e.thumbmargin,max:-b+Be.w-c-10*e.thumbmargin}}function Dc(a){var b=$d.activeFrame[Zd].data();U(se,{time:.9*a,pos:b.l,width:b.w-2*e.thumbborderwidth})}function Hc(a){var b=pd[a.guessIndex][Zd];if(b){var c=Ee.min!==Ee.max,d=c&&Cc($d.activeFrame[Zd]),e=c&&(a.keep&&Hc.l?Hc.l:h((a.coo||Be.nw/2)-Cc(b).c,d.min,d.max)),f=c&&h(e,Ee.min,Ee.max),g=.9*a.time;U(pe,{time:g,pos:f||0,onEnd:function(){pc(f,!0)}}),ed(oe,J(f,Ee.min,Ee.max)),Hc.l=e}}function Jc(){Lc(Zd),Ge[Zd].push($d.activeFrame[Zd].addClass(Pb))}function Lc(a){for(var b=Ge[a];b.length;)b.shift().removeClass(Pb)}function Oc(a){var b=He[a];d.each(vd,function(a,c){delete b[x(c)]}),d.each(b,function(a,c){delete b[a],c.detach()})}function Qc(a){wd=xd=ze;var b=$d.activeFrame,c=b[Uc];c&&(Lc(Uc),Ge[Uc].push(c.addClass(Pb)),a||$d.show.onEnd(!0),u(ie,0,!0),Oc(Uc),oc(vd),$(),Ib())}function Xc(a,b){a&&d.each(b,function(b,c){c&&d.extend(c,{width:a.width||c.width,height:a.height,minwidth:a.minwidth,maxwidth:a.maxwidth,minheight:a.minheight,maxheight:a.maxheight,ratio:R(a.ratio)})})}function Zc(b,c){a.trigger(bb+":"+b,[$d,c])}function _c(){clearTimeout(ad.t),Xd=1,e.stopautoplayontouch?$d.stopAutoplay():Ud=!0}function ad(){e.stopautoplayontouch||(bd(),cd()),ad.t=setTimeout(function(){Xd=0},Nc+Mc)}function bd(){Ud=!(!td&&!Vd)}function cd(){if(clearTimeout(cd.t),!e.autoplay||Ud)return void($d.autoplay&&($d.autoplay=!1,Zc("stopautoplay")));$d.autoplay||($d.autoplay=!0,Zc("startautoplay"));var a=ze,b=$d.activeFrame[Uc].data();F(function(){return b.state||a!==ze},function(){cd.t=setTimeout(function(){Ud||a!==ze||$d.show(Cd?T(!Od):x(ze+(Od?-1:1)))},e.autoplay)})}function dd(){$d.fullScreen&&($d.fullScreen=!1,Gc&&nc.cancel(be),vc.removeClass(cb),uc.removeClass(cb),a.removeClass(Sb).insertAfter(fe),Be=d.extend({},Wd),fd(td,!0,!0),kd("x",!1),$d.resize(),Lb(vd,"stage"),P(Sd,Rd),Zc("fullscreenexit"))}function ed(a,b){Nd&&(a.removeClass(Nb+" "+Ob),b&&!td&&a.addClass(b.replace(/^|\s/g," "+Mb+"--")))}function fd(a,b,c){b&&(ge.removeClass(gb),td=!1,s()),a&&a!==td&&(a.remove(),Zc("unloadvideo")),c&&(bd(),cd())}function gd(a){ge.toggleClass(jb,a)}function hd(a){if(!Ce.flow){var b=a?a.pageX:hd.x,c=b&&!xc(wc(b))&&e.click;hd.p===c||!Id&&e.swipe||!he.toggleClass(vb,c)||(hd.p=c,hd.x=b)}}function id(a){clearTimeout(id.t),e.clicktransition&&e.clicktransition!==e.transition?(Md=e.transition,$d.setOptions({transition:e.clicktransition}),id.t=setTimeout(function(){$d.show(a)},10)):$d.show(a)}function jd(a,b){var c=a.target,f=d(c);f.hasClass(fc)?$d.playVideo():c===ue?$d[($d.fullScreen?"cancel":"request")+"FullScreen"]():td?c===xe&&fd(td,!0,!0):b?gd():e.click&&id({index:a.shiftKey||T(wc(a._x)),slow:a.altKey,user:!0})}function kd(a,b){Ce[a]=Ee[a]=b}function ld(a,b){var c=d(this).data().eq;id({index:c,slow:a.altKey,user:!0,coo:a._x-oe.offset().left,time:b})}function md(){if(n(),w(),!md.i){md.i=!0;var a=e.startindex;(a||e.hash&&c.hash)&&(Bd=K(a||c.hash.replace(/^#/,""),pd,0===$d.index||a,a)),ze=wd=xd=yd=Bd=D(Bd)||0}if(qd){if(nd())return;td&&fd(td,!0),vd=[],Oc(Uc),$d.show({index:ze,time:0,reset:md.ok}),$d.resize()}else $d.destroy();md.ok=!0}function nd(){return!nd.f===Od?(nd.f=Od,ze=qd-1-ze,$d.reverse(),!0):void 0}function od(){od.ok||(od.ok=!0,Zc("ready"))}uc=uc||d("html"),vc=vc||d("body");var pd,qd,rd,sd,td,ud,vd,wd,xd,yd,zd,Ad,Bd,Cd,Dd,Ed,Fd,Gd,Hd,Id,Jd,Kd,Ld,Md,Nd,Od,Pd,Qd,Rd,Sd,Td,Ud,Vd,Wd,Xd,Yd,Zd,$d=this,_d=d.now(),ae=bb+_d,be=a[0],ce=1,de=a.data(),ee=d("<style></style>"),fe=d(M(Rb)),ge=d(M(db)),he=d(M(qb)).appendTo(ge),ie=(he[0],d(M(tb)).appendTo(he)),je=d(),ke=d(M(wb+" "+yb)),le=d(M(wb+" "+zb)),me=ke.add(le).appendTo(he),ne=d(M(Bb)),oe=d(M(Ab)).appendTo(ne),pe=d(M(Cb)).appendTo(oe),qe=d(),re=d(),se=(ie.data(),pe.data(),d(M(cc)).appendTo(pe)),te=d(M(Tb)),ue=te[0],ve=d(M(fc)),we=d(M(gc)).appendTo(he),xe=we[0],ye=d(M(jc)),ze=!1,Ae={},Be={},Ce={},De={},Ee={},Fe={},Ge={},He={},Ie=0,Je=[];ge[Uc]=d(M(rb)),ge[Wc]=d(M(Fb+" "+Hb,M(bc))),ge[Vc]=d(M(Fb+" "+Gb,M(ac))),Ge[Uc]=[],Ge[Wc]=[],Ge[Vc]=[],He[Uc]={},ge.addClass(Ec?fb:eb),de.fotorama=this,$d.startAutoplay=function(a){return $d.autoplay?this:(Ud=Vd=!1,t(a||e.autoplay),cd(),this)},$d.stopAutoplay=function(){return $d.autoplay&&(Ud=Vd=!0,cd()),this},$d.show=function(a){var b;"object"!=typeof a?(b=a,a={}):b=a.index,b=">"===b?xd+1:"<"===b?xd-1:"<<"===b?0:">>"===b?qd-1:b,b=isNaN(b)?K(b,pd,!0):b,b="undefined"==typeof b?ze||0:b,$d.activeIndex=ze=D(b),zd=W(ze),Ad=X(ze),vd=[ze,zd,Ad],xd=Cd?b:ze;var c=Math.abs(yd-xd),d=v(a.time,function(){return Math.min(Ld*(1+(c-1)/12),2*Ld)}),f=a.overPos;a.slow&&(d*=10),$d.activeFrame=ud=pd[ze],fd(td,ud.i!==pd[x(wd)].i),lc(vd,"stage"),oc(Ic?[xd]:[xd,W(xd),X(xd)]),kd("go",!0),a.reset||Zc("show",{user:a.user,time:d}),Ud=!0;var g=$d.show.onEnd=function(b){if(!g.ok){if(g.ok=!0,b||Qc(!0),!a.reset&&(Zc("showend",{user:a.user}),!b&&Md&&Md!==e.transition))return $d.setOptions({transition:Md}),void(Md=!1);kc(),Lb(vd,"stage"),kd("go",!1),zc(),hd(),bd(),cd()}};if(Id){var i=ud[Uc],j=ze!==yd?pd[yd][Uc]:null;V(i,j,je,{time:d,method:e.transition,onEnd:g},Je)
}else U(ie,{pos:-q(xd,Be.w,e.margin,wd),overPos:f,time:d,onEnd:g,_001:!0});if(yc(),Dd){Jc();var k=y(ze+h(xd-yd,-1,1));Hc({time:d,coo:k!==ze&&a.coo,guessIndex:"undefined"!=typeof a.coo?k:ze,keep:a.reset}),Ed&&Dc(d)}return Td="undefined"!=typeof yd&&yd!==ze,yd=ze,e.hash&&Td&&!$d.eq&&G(ud.id||ze+1),this},$d.requestFullScreen=function(){return Gd&&!$d.fullScreen&&(Rd=Ac.scrollTop(),Sd=Ac.scrollLeft(),P(0,0),kd("x",!0),Wd=d.extend({},Be),a.addClass(Sb).appendTo(vc.addClass(cb)),uc.addClass(cb),fd(td,!0,!0),$d.fullScreen=!0,Hd&&nc.request(be),$d.resize(),Lb(vd,"stage"),kc(),Zc("fullscreenenter")),this},$d.cancelFullScreen=function(){return Hd&&nc.is()?nc.cancel(b):dd(),this},b.addEventListener&&b.addEventListener(nc.event,function(){!pd||nc.is()||td||dd()},!1),$d.resize=function(a){if(!pd)return this;Xc($d.fullScreen?{width:"100%",maxwidth:null,minwidth:null,height:"100%",maxheight:null,minheight:null}:Q(a),[Be,$d.fullScreen||e]);var b=arguments[1]||0,c=arguments[2],d=Be.width,f=Be.height,g=Be.ratio,i=Ac.height()-(Dd?oe.height():0);return p(d)&&(ge.addClass(nb).css({width:d,minWidth:Be.minwidth||0,maxWidth:Be.maxwidth||Yc}),d=Be.W=Be.w=ge.width(),Be.nw=Dd&&o(e.navwidth,d)||d,e.glimpse&&(Be.w-=Math.round(2*(o(e.glimpse,d)||0))),ie.css({width:Be.w,marginLeft:(Be.W-Be.w)/2}),f=o(f,i),f=f||g&&d/g,f&&(d=Math.round(d),f=Be.h=Math.round(h(f,o(Be.minheight,i),o(Be.maxheight,i))),he.stop().animate({width:d,height:f},b,function(){ge.removeClass(nb)}),Qc(),Dd&&(oe.stop().animate({width:Be.nw},b),Hc({guessIndex:ze,time:b,keep:!0}),Ed&&qc.nav&&Dc(b)),Qd=c||!0,od())),Ie=he.offset().left,this},$d.setOptions=function(a){return d.extend(e,a),md(),this},$d.shuffle=function(){return pd&&N(pd)&&md(),this},$d.destroy=function(){return $d.cancelFullScreen(),$d.stopAutoplay(),pd=$d.data=null,j(),vd=[],Oc(Uc),this},$d.playVideo=function(){var a=$d.activeFrame,b=a.video,c=ze;return"object"==typeof b&&a.videoReady&&(Hd&&$d.fullScreen&&$d.cancelFullScreen(),F(function(){return!nc.is()||c!==ze},function(){c===ze&&(a.$video=a.$video||d(d.Fotorama.jst.video(b)),a.$video.appendTo(a[Uc]),ge.addClass(gb),td=a.$video,s(),Zc("loadvideo"))})),this},$d.stopVideo=function(){return fd(td,!0,!0),this},he.on("mousemove",hd),Ce=Y(ie,{onStart:_c,onMove:function(a,b){ed(he,b.edge)},onTouchEnd:ad,onEnd:function(a){ed(he);var b=(Kc&&!Yd||a.touch)&&e.arrows&&"always"!==e.arrows;if(a.moved||b&&a.pos!==a.newPos&&!a.control){var c=r(a.newPos,Be.w,e.margin,wd);$d.show({index:c,time:Id?Ld:a.time,overPos:a.overPos,user:!0})}else a.aborted||a.control||jd(a.startEvent,b)},_001:!0,timeLow:1,timeHigh:1,friction:2,select:"."+Qb+", ."+Qb+" *",$wrap:he}),Ee=Y(pe,{onStart:_c,onMove:function(a,b){ed(oe,b.edge)},onTouchEnd:ad,onEnd:function(a){function b(){Hc.l=a.newPos,bd(),cd(),pc(a.newPos,!0)}if(a.moved)a.pos!==a.newPos?(Ud=!0,U(pe,{time:a.time,pos:a.newPos,overPos:a.overPos,onEnd:b}),pc(a.newPos),Nd&&ed(oe,J(a.newPos,Ee.min,Ee.max))):b();else{var c=a.$target.closest("."+Fb,pe)[0];c&&ld.call(c,a.startEvent)}},timeLow:.5,timeHigh:2,friction:5,$wrap:oe}),De=Z(he,{shift:!0,onEnd:function(a,b){_c(),ad(),$d.show({index:b,slow:a.altKey})}}),Fe=Z(oe,{onEnd:function(a,b){_c(),ad();var c=u(pe)+.25*b;pe.css(k(h(c,Ee.min,Ee.max))),Nd&&ed(oe,J(c,Ee.min,Ee.max)),Fe.prevent={"<":c>=Ee.max,">":c<=Ee.min},clearTimeout(Fe.t),Fe.t=setTimeout(function(){pc(c,!0)},Mc),pc(c)}}),ge.hover(function(){setTimeout(function(){Xd||(Yd=!0,gd(!Yd))},0)},function(){Yd&&(Yd=!1,gd(!Yd))}),L(me,function(a){S(a),id({index:me.index(this)?">":"<",slow:a.altKey,user:!0})},{onStart:function(){_c(),Ce.control=!0},onTouchEnd:ad}),d.each("load push pop shift unshift reverse sort splice".split(" "),function(a,b){$d[b]=function(){return pd=pd||[],"load"!==b?Array.prototype[b].apply(pd,arguments):arguments[0]&&"object"==typeof arguments[0]&&arguments[0].length&&(pd=O(arguments[0])),md(),$d}}),md()},d.fn.fotorama=function(b){return this.each(function(){var c=this,e=d(this),f=e.data(),g=f.fotorama;g?g.setOptions(b):F(function(){return!D(c)},function(){f.urtext=e.html(),new d.Fotorama(e,d.extend({},Zc,a.fotoramaDefaults,b,f))})})},d.Fotorama.instances=[],d.Fotorama.cache={},d.Fotorama.measures={},d=d||{},d.Fotorama=d.Fotorama||{},d.Fotorama.jst=d.Fotorama.jst||{},d.Fotorama.jst.style=function(a){{var b,c="";lc.escape}return c+=".fotorama"+(null==(b=a.s)?"":b)+" .fotorama__nav--thumbs .fotorama__nav__frame{\npadding:"+(null==(b=a.m)?"":b)+"px;\nheight:"+(null==(b=a.h)?"":b)+"px}\n.fotorama"+(null==(b=a.s)?"":b)+" .fotorama__thumb-border{\nheight:"+(null==(b=a.h-a.b*(a.q?0:2))?"":b)+"px;\nborder-width:"+(null==(b=a.b)?"":b)+"px;\nmargin-top:"+(null==(b=a.m)?"":b)+"px}"},d.Fotorama.jst.video=function(a){function b(){c+=d.call(arguments,"")}var c="",d=(lc.escape,Array.prototype.join);return c+='<div class="fotorama__video"><iframe src="',b(("youtube"==a.type?"http://youtube.com/embed/"+a.id+"?autoplay=1":"vimeo"==a.type?"http://player.vimeo.com/video/"+a.id+"?autoplay=1&badge=0":a.id)+(a.s&&"custom"!=a.type?"&"+a.s:"")),c+='" frameborder="0" allowfullscreen></iframe></div>'},d(function(){d("."+bb+':not([data-auto="false"])').fotorama()})}(window,document,location,"undefined"!=typeof jQuery&&jQuery);
(function(angular) {
  return angular.module('xoxlovka', ['controllers', 'directives', 'services', 'filters']);
})(angular);

//# sourceMappingURL=app.js.map

(function(angular) {
  return angular.module('controllers', ['imports', 'simplePagination']).controller('shopItems', function($scope, shopItems, Pagination, CONFIG) {
    $scope.shopItems = shopItems.list();
    $scope.pagination = Pagination.getNew(CONFIG.itemsOnPage || 5);
    $scope.pagination.numPages = Math.ceil($scope.shopItems.length / $scope.pagination.perPage);
    $scope.pagination.showAll = function() {
      if (!this.showedAll) {
        this.showedAll = true;
        this.oldPerPage = this.perPage;
        this.page = 1;
        return this.perPage = this.perPage * this.numPages;
      } else {
        this.showedAll = false;
        return this.perPage = this.oldPerPage;
      }
    };
    $scope.sortHelper = function(field) {
      return $scope.sortBy = field;
    };
    return $scope.sortBy = '';
  }).controller('shopItem', function($scope, shopItemSvc) {
    var extraFields, mainFields;
    mainFields = ['descr', 'brand_name', 'subitems', 'tags'];
    extraFields = ['_id', 'active', 'alias', 'articol', 'brand', 'category', 'images', 'name', 'preview_image', 'sex', 'sale', 'subcategory', 'size', 'total_qty', 'qty', 'url', 'weight'];
    $scope.$watch(function() {
      return shopItemSvc.shopItem;
    }, function(shopItem) {
      return $scope.shopItem = {
        main: _.pick(shopItem, mainFields),
        custom: _.omit(shopItem, mainFields.concat(extraFields))
      };
    }, true);
    $scope.shopItemSvc = shopItemSvc;
    shopItemSvc.selectSubitem(0);
    return console.log($scope);
  }).controller('shopCart', function($scope, DELIVER_PRICE) {
    var calculateTotalPrice, waitForPrice;
    $scope.cartPrice = 0;
    $scope.isOrdering = false;
    waitForPrice = $scope.$watch('cartPrice', function(newValue, oldValue) {
      $scope.cartPrice = newValue;
      $scope.totalPrice = newValue;
      return waitForPrice();
    });
    $scope.startOrder = function() {
      return $scope.isOrdering = true;
    };
    $scope.stateModels = _.chain([]).tap(function(array) {
      return _.times(3, function() {
        return array.push({});
      });
    }).value();
    $scope.selecetDeliverType = function(type) {
      $scope.deliverType = type;
      $scope.paymentType = type.toLowerCase().indexOf('courier') >= 0 ? 'cash' : 'nalog_payment';
      return calculateTotalPrice($scope.paymentType, $scope.deliverType);
    };
    return calculateTotalPrice = function(type, deliverType) {
      var orderPrice;
      orderPrice = type === 'nalog_payment' ? 0 : DELIVER_PRICE[deliverType];
      return $scope.totalPrice = $scope.cartPrice + orderPrice;
    };
  });
})(angular);

//# sourceMappingURL=controllers.js.map

(function(angular) {
  return angular.module('directives', []).directive('diStickyHeader', function($window) {
    return {
      scope: true,
      link: function(scope) {
        var threshold;
        scope.show = false;
        threshold = $('.header__section').height() + $('.navigation__section').height();
        return $($window).on('scroll', function() {
          return scope.$apply(function() {
            return scope.show = $($window).scrollTop() >= threshold;
          });
        });
      }
    };
  }).directive('diSidebarMenu', function() {
    return {
      scope: true,
      controller: function($scope) {
        $scope.isOpened = false;
        return $scope.toggle = function() {
          return $scope.isOpened = !$scope.isOpened;
        };
      },
      link: function(scope, ele, attrs) {
        if (attrs.diSidebarMenu === 'opened') {
          return scope.isOpened = true;
        }
      }
    };
  }).directive('diCarousel', function() {
    var transitions;
    transitions = {};
    if (Modernizr.csstransitions) {
      transitions = {
        transforms3d: Modernizr.csstransforms3d
      };
    } else {
      transitions = false;
    }
    return {
      restrict: 'E',
      replace: true,
      template: "<div class='carousel' ng-class='position'> <div class='carousel-wrapper'> <ul class='carousel-items' ng-transclude></ul> <a href='#' class='jcarousel-prev controls' ng-show='visibleControls'></a> <a href='#' class='jcarousel-next controls' ng-show='visibleControls'></a> </div> <ul class='pagination' ng-show='pagination'></ul> </div>",
      transclude: true,
      scope: true,
      controller: function($scope) {
        $scope.visibleControls = false;
        $scope.hideControls = function() {
          return $scope.visibleControls = false;
        };
        return $scope.showControls = function() {
          return $scope.visibleControls = true;
        };
      },
      link: function(scope, ele, attrs) {
        var carouselConfig;
        scope.position = attrs.position;
        scope.pagination = attrs.pagination ? true : false;
        carouselConfig = {
          animation: {
            duration: 800,
            easing: 'linear'
          },
          transitions: transitions,
          wrap: 'circular'
        };
        ele.find('.carousel-wrapper').jcarousel(carouselConfig).jcarouselAutoscroll({
          autostart: true,
          interval: 5000
        }).on('mouseenter', function() {
          $(this).jcarouselAutoscroll('stop');
          return scope.$apply(function() {
            return scope.showControls();
          });
        }).on('mouseleave', function() {
          $(this).jcarouselAutoscroll('start');
          return scope.$apply(function() {
            return scope.hideControls();
          });
        });
        ele.find('.pagination').on('jcarouselpagination:create', 'li:eq(0)', function() {
          return $(this).addClass('current');
        }).on('jcarouselpagination:active', 'li', function() {
          return $(this).find('a').addClass('current');
        }).on('jcarouselpagination:inactive', 'li', function() {
          return $(this).find('a').removeClass('current');
        }).jcarouselPagination({
          item: function(page) {
            return "<li><a href='#" + page + "' di-prevent-default></a></li>";
          }
        });
        ele.find('.jcarousel-prev').jcarouselControl({
          target: '-=1'
        });
        return ele.find('.jcarousel-next').jcarouselControl({
          target: '+=1'
        });
      }
    };
  }).directive('diCheckLast', function($timeout) {
    return {
      link: function(scope, element) {
        if (scope.$last) {
          return element.ready(function() {
            var items, itemsHeight;
            items = element.prevAll(element.nodeName);
            itemsHeight = _.reduce(items, function(memo, item) {
              memo.push($(item).outerHeight(true));
              return memo;
            }, []);
            return $timeout(function() {
              return $(items).height(_.max(itemsHeight));
            });
          });
        }
      }
    };
  }).directive('diCheckbox', function() {
    return {
      require: 'ngModel',
      restrict: 'E',
      scope: {
        disabled: '=ngDisabled'
      },
      link: function(scope, ele, attrs, ctrl) {
        var checked, clickHandler;
        checked = false;
        ele.on('click', function() {
          if (!scope.disabled) {
            return clickHandler();
          }
        });
        return clickHandler = function() {
          checked = !checked;
          scope.$apply(function() {
            return ctrl.$setViewValue(checked);
          });
          return ele.toggleClass('checked', checked);
        };
      }
    };
  }).directive('diDropdown', function() {
    return {
      controller: function($scope) {
        $scope.isOpened = false;
        return $scope.toggleDropDown = function() {
          return $scope.isOpened = !$scope.isOpened;
        };
      }
    };
  }).directive('diOverlay', function($rootScope, $document) {
    return {
      scope: true,
      link: function(scope, ele) {
        var closeAndEmit;
        scope.show = false;
        $rootScope.$on('overlay.show', function() {
          scope.show = true;
          return ele.height($document.height());
        });
        $rootScope.$on('overlay.hide', function() {
          return scope.show = false;
        });
        ele.on('click', function() {
          return closeAndEmit();
        });
        $document.on('keyup', function(e) {
          if (e.keyCode === 27) {
            return closeAndEmit();
          }
        });
        return closeAndEmit = function() {
          if (scope.show) {
            return scope.$apply(function() {
              $rootScope.$emit('overlay.closed');
              return scope.show = false;
            });
          }
        };
      }
    };
  }).directive('diPreventDefault', function() {
    return {
      priority: 1001,
      link: function(scope, elem, attrs) {
        if (attrs.ngClick) {
          elem.on('click', function(e) {
            console.log('click');
            e.preventDefault();
          });
        }
      }
    };
  }).directive('diPrice', function(calculateSale) {
    return {
      require: 'ngModel',
      restrict: 'E',
      scope: true,
      link: function(scope, ele, attrs, ctrl) {
        var setPrice, waitForModel;
        waitForModel = scope.$watch(function() {
          return ctrl.$viewValue;
        }, function(modelValue) {
          setPrice(modelValue);
          return waitForModel();
        }, true);
        return setPrice = function(model) {
          if (model.saleIsActive) {
            ctrl.$modelValue = _.extend(model, {
              oldPrice: model.price
            });
            return _.extend(model, {
              price: calculateSale(model.price, model.sale)
            });
          }
        };
      }
    };
  }).directive('diShopDescription', function() {
    return {
      restrict: 'E',
      replace: true,
      controller: function($scope) {
        return $scope.toggle = function() {
          return $scope.opened = !$scope.opened;
        };
      }
    };
  }).directive('diShopItemPreview', function($document, $rootScope) {
    var calculateBlockPosition;
    calculateBlockPosition = function(block) {
      var documentWidth, leftSide, rightSide, width;
      documentWidth = $($document).width();
      width = block.width();
      leftSide = block.offset().left;
      rightSide = leftSide + width * 2;
      console.log(rightSide, leftSide, width, documentWidth);
      return rightSide > documentWidth;
    };
    return function(scope, ele) {
      scope.showed = false;
      scope.toggleDescription = function() {
        var emitEvent;
        emitEvent = "overlay." + (scope.showed ? 'hide' : 'show');
        $rootScope.$emit(emitEvent);
        scope.showed = !scope.showed;
        if (scope.showed) {
          return scope["class"] = calculateBlockPosition(ele) ? 'left' : 'right';
        }
      };
      return $rootScope.$on('overlay.closed', function() {
        return scope.showed = false;
      });
    };
  }).directive('diShopGallery', function(IMPORTS, CONFIG) {
    return {
      restrict: 'E',
      scope: true,
      template: "<div class='shop-gallery'> <div class='shop-gallery__popup' ng-class=\"{'shop-gallery__popup--visible': xt}\" > <img class='shop-gallery__popup-img' ng-style=\"{'top': xt, 'left': xl}\" ng-src='{{activeImage.url}}' alt='' /> </div> <div class='shop-gallery__full-size'> <a href='#'> <img class='shop-gallery__full-img' ng-src='{{activeImage.url}}' ng-class=\"{'shop-gallery__full-img--loaded': activeImage.url}\" ng-mousemove='moveImage($event)' ng-mouseover='calculateSizes($event)' ng-mouseleave='removeSizes()' /> </a> </div> <ul class='shop-gallery__previews'> <li class='shop-gallery__previews-item' ng-repeat='image in images'> <img class='shop-gallery__previews-img' ng-class=\"{'shop-gallery__previews-img--current': activeImage.url == image.url}\" ng-click='setActive(image)' ng-src='{{image.resizedUrl}}'/> </li> </ul> </div>",
      link: function(scope, ele) {
        var $popupEle, fullSizeEleOffset, h1, h2, h4, rh, rw, urlPart, w1, w2, w4;
        w1 = w2 = w4 = h1 = h2 = h4 = rw = rh = null;
        fullSizeEleOffset = $('.shop-gallery__full-size', ele).offset();
        $popupEle = $('.shop-gallery__popup', ele);
        urlPart = "" + IMPORTS.shopItem.category + "/" + IMPORTS.shopItem.subcategory + "/" + IMPORTS.shopItem.alias;
        scope.activeImage = {};
        scope.images = _.reduce(IMPORTS.shopItem.images, function(memo, img) {
          img.resizedUrl = "" + CONFIG.previewsUrl.galleryPreview + "item/" + urlPart + "/" + img.tag;
          img.url = "/i/item/" + urlPart + "/" + img.tag;
          memo.push(img);
          return memo;
        }, []);
        scope.activeImage = _.first(scope.images);
        scope.calculateSizes = function(event) {
          var h3, w3;
          w1 = $('.shop-gallery__full-img', ele).width();
          h1 = $('.shop-gallery__full-img', ele).height();
          w2 = $popupEle.width();
          h2 = $popupEle.height();
          w3 = $('img', $popupEle).width();
          h3 = $('img', $popupEle).height();
          w4 = w3 - w2;
          h4 = h3 - h2;
          rw = w4 / w1;
          rh = h4 / h1;
          return scope.moveImage(event);
        };
        scope.moveImage = function(event) {
          var pl, pt;
          pl = event.pageX - fullSizeEleOffset.left;
          pt = event.pageY - fullSizeEleOffset.top;
          scope.xl = -1 * pl * rw;
          return scope.xt = -1 * pt * rh;
        };
        scope.removeSizes = function() {
          return scope.xl = scope.xt = null;
        };
        return scope.setActive = function(image) {
          return scope.activeImage = image;
        };
      }
    };
  });
})(angular);

//# sourceMappingURL=directives.js.map

(function(angular) {
  return angular.module('filters', []).filter('unsafe', function($sce) {
    return function(val) {
      console.log;
      return $sce.trustAsHtml(val);
    };
  });
})(angular);

//# sourceMappingURL=filters.js.map

(function(angular) {
  window.xoxlovka = window.xoxlovka || {};
  return angular.module('imports', []).constant('CONFIG', window.xoxlovka.config || {}).constant('IMPORTS', {
    aliases: window.xoxlovka.aliases || {},
    shopItems: window.shopItems || [],
    shopItem: window.shopItem || {}
  }).constant('DELIVER_PRICE', {
    fastCourier: 500,
    courier: 350
  });
})(angular);

//# sourceMappingURL=imports.js.map

(function(angular) {
  return angular.module('services', []).service('execTimeStamp', function() {
    return function(id) {
      return parseInt(id.substr(0, 8), 16) * 1000;
    };
  }).service('calculateSale', function() {
    return function(price, sale) {
      var percent;
      if (sale.sale_value.indexOf('%') !== -1) {
        percent = parseInt(sale.sale_value, 10);
        return price * percent / 100;
      } else {
        return sale.sale_value;
      }
    };
  }).service('shopItems', function(CONFIG, IMPORTS, execTimeStamp) {
    var shopItems;
    shopItems = _.toArray(IMPORTS.shopItems);
    this.list = function() {
      var previewsUrl;
      previewsUrl = CONFIG.previewsUrl.item;
      _.each(shopItems, function(item) {
        var now, saleIsActive;
        now = Math.round(new Date() / 1000);
        if (item.sale.sale_active === '1' && item.sale.sale_start_stamp <= now && item.sale.sale_end_stamp >= now) {
          saleIsActive = true;
        }
        return _.extend(item, {
          link: "http://" + CONFIG.domain + "/" + (item.sex ? item.sex + '/' : '') + item.category + "/" + item.subcategory + "/" + item.alias,
          preview: "" + previewsUrl + "/item/" + item.category + "/" + item.subcategory + "/" + item.alias + "/" + item.preview_image,
          saleIsActive: saleIsActive,
          timestamp: execTimeStamp(item._id.$oid)
        });
      });
      return shopItems;
    };
  }).service('shopItemSvc', function(calculateSale, IMPORTS) {
    var aliases, recalculatePrice, removeEmptyFields;
    aliases = IMPORTS.aliases;
    this.shopItem = IMPORTS.shopItem;
    this.getItem = (function(_this) {
      return function() {
        return _this.shopItem;
      };
    })(this);
    this.getAliasName = function(alias) {
      var _ref;
      return (_ref = aliases[alias]) != null ? _ref : '';
    };
    this.getSelectedSubitemId = (function(_this) {
      return function() {
        return _this.selectedSubitemId;
      };
    })(this);
    this.selectSubitem = (function(_this) {
      return function(key) {
        var selectedSubitem;
        _this.selectedSubitemId = key;
        selectedSubitem = _this.shopItem.subitems[key];
        _.extend(_this.shopItem, selectedSubitem);
        _this.createItemUrl(key);
        if ((_.isArray(selectedSubitem.price)) && selectedSubitem.price[0] !== selectedSubitem.price[1]) {
          _this.shopItem.price = {};
          _.extend(_this.shopItem, {
            price: {
              oldPrice: _.first(selectedSubitem.price),
              price: selectedSubitem.price[1]
            }
          });
        } else {
          _this.shopItem.price = _.isArray(selectedSubitem.price) ? selectedSubitem.price[0] : selectedSubitem.price;
        }
        return removeEmptyFields();
      };
    })(this);
    this.createItemUrl = (function(_this) {
      return function(id) {
        return _.extend(_this.shopItem, {
          url: "" + _this.shopItem.category + "/" + _this.shopItem.subcategory + "/" + _this.shopItem.alias + "/buy/" + id
        });
      };
    })(this);
    recalculatePrice = (function(_this) {
      return function() {
        var now, oldPrice;
        now = Math.round(+new Date() / 1000);
        if (_this.shopItem.sale.sale_active === '1' && now < _this.shopItem.sale.sale_end_stamp && now > _this.shopItem.sale.sale_start_stamp) {
          oldPrice = _this.shopItem.price;
          _this.shopItem.price = {};
          return _.extend(_this.shopItem.price, {
            oldPrice: oldPrice,
            price: calculateSale(oldPrice, _this.shopItem.sale),
            saleIsActive: true
          });
        }
      };
    })(this);
    removeEmptyFields = (function(_this) {
      return function() {
        return _this.shopItem = _.reduce(_this.shopItem, function(memo, value, key) {
          if ((!_.isObject(value)) && value.toString().length || (_.isObject(value)) && (!_.isEmpty(value))) {
            memo[key] = value;
          }
          return memo;
        }, {});
      };
    })(this);
    removeEmptyFields();
    recalculatePrice();
  });
})(angular);

//# sourceMappingURL=services.js.map
