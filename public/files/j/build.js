/*! jQuery v2.1.1 | (c) 2005, 2014 jQuery Foundation, Inc. | jquery.org/license */
!function(a,b){"object"==typeof module&&"object"==typeof module.exports?module.exports=a.document?b(a,!0):function(a){if(!a.document)throw new Error("jQuery requires a window with a document");return b(a)}:b(a)}("undefined"!=typeof window?window:this,function(a,b){var c=[],d=c.slice,e=c.concat,f=c.push,g=c.indexOf,h={},i=h.toString,j=h.hasOwnProperty,k={},l=a.document,m="2.1.1",n=function(a,b){return new n.fn.init(a,b)},o=/^[\s\uFEFF\xA0]+|[\s\uFEFF\xA0]+$/g,p=/^-ms-/,q=/-([\da-z])/gi,r=function(a,b){return b.toUpperCase()};n.fn=n.prototype={jquery:m,constructor:n,selector:"",length:0,toArray:function(){return d.call(this)},get:function(a){return null!=a?0>a?this[a+this.length]:this[a]:d.call(this)},pushStack:function(a){var b=n.merge(this.constructor(),a);return b.prevObject=this,b.context=this.context,b},each:function(a,b){return n.each(this,a,b)},map:function(a){return this.pushStack(n.map(this,function(b,c){return a.call(b,c,b)}))},slice:function(){return this.pushStack(d.apply(this,arguments))},first:function(){return this.eq(0)},last:function(){return this.eq(-1)},eq:function(a){var b=this.length,c=+a+(0>a?b:0);return this.pushStack(c>=0&&b>c?[this[c]]:[])},end:function(){return this.prevObject||this.constructor(null)},push:f,sort:c.sort,splice:c.splice},n.extend=n.fn.extend=function(){var a,b,c,d,e,f,g=arguments[0]||{},h=1,i=arguments.length,j=!1;for("boolean"==typeof g&&(j=g,g=arguments[h]||{},h++),"object"==typeof g||n.isFunction(g)||(g={}),h===i&&(g=this,h--);i>h;h++)if(null!=(a=arguments[h]))for(b in a)c=g[b],d=a[b],g!==d&&(j&&d&&(n.isPlainObject(d)||(e=n.isArray(d)))?(e?(e=!1,f=c&&n.isArray(c)?c:[]):f=c&&n.isPlainObject(c)?c:{},g[b]=n.extend(j,f,d)):void 0!==d&&(g[b]=d));return g},n.extend({expando:"jQuery"+(m+Math.random()).replace(/\D/g,""),isReady:!0,error:function(a){throw new Error(a)},noop:function(){},isFunction:function(a){return"function"===n.type(a)},isArray:Array.isArray,isWindow:function(a){return null!=a&&a===a.window},isNumeric:function(a){return!n.isArray(a)&&a-parseFloat(a)>=0},isPlainObject:function(a){return"object"!==n.type(a)||a.nodeType||n.isWindow(a)?!1:a.constructor&&!j.call(a.constructor.prototype,"isPrototypeOf")?!1:!0},isEmptyObject:function(a){var b;for(b in a)return!1;return!0},type:function(a){return null==a?a+"":"object"==typeof a||"function"==typeof a?h[i.call(a)]||"object":typeof a},globalEval:function(a){var b,c=eval;a=n.trim(a),a&&(1===a.indexOf("use strict")?(b=l.createElement("script"),b.text=a,l.head.appendChild(b).parentNode.removeChild(b)):c(a))},camelCase:function(a){return a.replace(p,"ms-").replace(q,r)},nodeName:function(a,b){return a.nodeName&&a.nodeName.toLowerCase()===b.toLowerCase()},each:function(a,b,c){var d,e=0,f=a.length,g=s(a);if(c){if(g){for(;f>e;e++)if(d=b.apply(a[e],c),d===!1)break}else for(e in a)if(d=b.apply(a[e],c),d===!1)break}else if(g){for(;f>e;e++)if(d=b.call(a[e],e,a[e]),d===!1)break}else for(e in a)if(d=b.call(a[e],e,a[e]),d===!1)break;return a},trim:function(a){return null==a?"":(a+"").replace(o,"")},makeArray:function(a,b){var c=b||[];return null!=a&&(s(Object(a))?n.merge(c,"string"==typeof a?[a]:a):f.call(c,a)),c},inArray:function(a,b,c){return null==b?-1:g.call(b,a,c)},merge:function(a,b){for(var c=+b.length,d=0,e=a.length;c>d;d++)a[e++]=b[d];return a.length=e,a},grep:function(a,b,c){for(var d,e=[],f=0,g=a.length,h=!c;g>f;f++)d=!b(a[f],f),d!==h&&e.push(a[f]);return e},map:function(a,b,c){var d,f=0,g=a.length,h=s(a),i=[];if(h)for(;g>f;f++)d=b(a[f],f,c),null!=d&&i.push(d);else for(f in a)d=b(a[f],f,c),null!=d&&i.push(d);return e.apply([],i)},guid:1,proxy:function(a,b){var c,e,f;return"string"==typeof b&&(c=a[b],b=a,a=c),n.isFunction(a)?(e=d.call(arguments,2),f=function(){return a.apply(b||this,e.concat(d.call(arguments)))},f.guid=a.guid=a.guid||n.guid++,f):void 0},now:Date.now,support:k}),n.each("Boolean Number String Function Array Date RegExp Object Error".split(" "),function(a,b){h["[object "+b+"]"]=b.toLowerCase()});function s(a){var b=a.length,c=n.type(a);return"function"===c||n.isWindow(a)?!1:1===a.nodeType&&b?!0:"array"===c||0===b||"number"==typeof b&&b>0&&b-1 in a}var t=function(a){var b,c,d,e,f,g,h,i,j,k,l,m,n,o,p,q,r,s,t,u="sizzle"+-new Date,v=a.document,w=0,x=0,y=gb(),z=gb(),A=gb(),B=function(a,b){return a===b&&(l=!0),0},C="undefined",D=1<<31,E={}.hasOwnProperty,F=[],G=F.pop,H=F.push,I=F.push,J=F.slice,K=F.indexOf||function(a){for(var b=0,c=this.length;c>b;b++)if(this[b]===a)return b;return-1},L="checked|selected|async|autofocus|autoplay|controls|defer|disabled|hidden|ismap|loop|multiple|open|readonly|required|scoped",M="[\\x20\\t\\r\\n\\f]",N="(?:\\\\.|[\\w-]|[^\\x00-\\xa0])+",O=N.replace("w","w#"),P="\\["+M+"*("+N+")(?:"+M+"*([*^$|!~]?=)"+M+"*(?:'((?:\\\\.|[^\\\\'])*)'|\"((?:\\\\.|[^\\\\\"])*)\"|("+O+"))|)"+M+"*\\]",Q=":("+N+")(?:\\((('((?:\\\\.|[^\\\\'])*)'|\"((?:\\\\.|[^\\\\\"])*)\")|((?:\\\\.|[^\\\\()[\\]]|"+P+")*)|.*)\\)|)",R=new RegExp("^"+M+"+|((?:^|[^\\\\])(?:\\\\.)*)"+M+"+$","g"),S=new RegExp("^"+M+"*,"+M+"*"),T=new RegExp("^"+M+"*([>+~]|"+M+")"+M+"*"),U=new RegExp("="+M+"*([^\\]'\"]*?)"+M+"*\\]","g"),V=new RegExp(Q),W=new RegExp("^"+O+"$"),X={ID:new RegExp("^#("+N+")"),CLASS:new RegExp("^\\.("+N+")"),TAG:new RegExp("^("+N.replace("w","w*")+")"),ATTR:new RegExp("^"+P),PSEUDO:new RegExp("^"+Q),CHILD:new RegExp("^:(only|first|last|nth|nth-last)-(child|of-type)(?:\\("+M+"*(even|odd|(([+-]|)(\\d*)n|)"+M+"*(?:([+-]|)"+M+"*(\\d+)|))"+M+"*\\)|)","i"),bool:new RegExp("^(?:"+L+")$","i"),needsContext:new RegExp("^"+M+"*[>+~]|:(even|odd|eq|gt|lt|nth|first|last)(?:\\("+M+"*((?:-\\d)?\\d*)"+M+"*\\)|)(?=[^-]|$)","i")},Y=/^(?:input|select|textarea|button)$/i,Z=/^h\d$/i,$=/^[^{]+\{\s*\[native \w/,_=/^(?:#([\w-]+)|(\w+)|\.([\w-]+))$/,ab=/[+~]/,bb=/'|\\/g,cb=new RegExp("\\\\([\\da-f]{1,6}"+M+"?|("+M+")|.)","ig"),db=function(a,b,c){var d="0x"+b-65536;return d!==d||c?b:0>d?String.fromCharCode(d+65536):String.fromCharCode(d>>10|55296,1023&d|56320)};try{I.apply(F=J.call(v.childNodes),v.childNodes),F[v.childNodes.length].nodeType}catch(eb){I={apply:F.length?function(a,b){H.apply(a,J.call(b))}:function(a,b){var c=a.length,d=0;while(a[c++]=b[d++]);a.length=c-1}}}function fb(a,b,d,e){var f,h,j,k,l,o,r,s,w,x;if((b?b.ownerDocument||b:v)!==n&&m(b),b=b||n,d=d||[],!a||"string"!=typeof a)return d;if(1!==(k=b.nodeType)&&9!==k)return[];if(p&&!e){if(f=_.exec(a))if(j=f[1]){if(9===k){if(h=b.getElementById(j),!h||!h.parentNode)return d;if(h.id===j)return d.push(h),d}else if(b.ownerDocument&&(h=b.ownerDocument.getElementById(j))&&t(b,h)&&h.id===j)return d.push(h),d}else{if(f[2])return I.apply(d,b.getElementsByTagName(a)),d;if((j=f[3])&&c.getElementsByClassName&&b.getElementsByClassName)return I.apply(d,b.getElementsByClassName(j)),d}if(c.qsa&&(!q||!q.test(a))){if(s=r=u,w=b,x=9===k&&a,1===k&&"object"!==b.nodeName.toLowerCase()){o=g(a),(r=b.getAttribute("id"))?s=r.replace(bb,"\\$&"):b.setAttribute("id",s),s="[id='"+s+"'] ",l=o.length;while(l--)o[l]=s+qb(o[l]);w=ab.test(a)&&ob(b.parentNode)||b,x=o.join(",")}if(x)try{return I.apply(d,w.querySelectorAll(x)),d}catch(y){}finally{r||b.removeAttribute("id")}}}return i(a.replace(R,"$1"),b,d,e)}function gb(){var a=[];function b(c,e){return a.push(c+" ")>d.cacheLength&&delete b[a.shift()],b[c+" "]=e}return b}function hb(a){return a[u]=!0,a}function ib(a){var b=n.createElement("div");try{return!!a(b)}catch(c){return!1}finally{b.parentNode&&b.parentNode.removeChild(b),b=null}}function jb(a,b){var c=a.split("|"),e=a.length;while(e--)d.attrHandle[c[e]]=b}function kb(a,b){var c=b&&a,d=c&&1===a.nodeType&&1===b.nodeType&&(~b.sourceIndex||D)-(~a.sourceIndex||D);if(d)return d;if(c)while(c=c.nextSibling)if(c===b)return-1;return a?1:-1}function lb(a){return function(b){var c=b.nodeName.toLowerCase();return"input"===c&&b.type===a}}function mb(a){return function(b){var c=b.nodeName.toLowerCase();return("input"===c||"button"===c)&&b.type===a}}function nb(a){return hb(function(b){return b=+b,hb(function(c,d){var e,f=a([],c.length,b),g=f.length;while(g--)c[e=f[g]]&&(c[e]=!(d[e]=c[e]))})})}function ob(a){return a&&typeof a.getElementsByTagName!==C&&a}c=fb.support={},f=fb.isXML=function(a){var b=a&&(a.ownerDocument||a).documentElement;return b?"HTML"!==b.nodeName:!1},m=fb.setDocument=function(a){var b,e=a?a.ownerDocument||a:v,g=e.defaultView;return e!==n&&9===e.nodeType&&e.documentElement?(n=e,o=e.documentElement,p=!f(e),g&&g!==g.top&&(g.addEventListener?g.addEventListener("unload",function(){m()},!1):g.attachEvent&&g.attachEvent("onunload",function(){m()})),c.attributes=ib(function(a){return a.className="i",!a.getAttribute("className")}),c.getElementsByTagName=ib(function(a){return a.appendChild(e.createComment("")),!a.getElementsByTagName("*").length}),c.getElementsByClassName=$.test(e.getElementsByClassName)&&ib(function(a){return a.innerHTML="<div class='a'></div><div class='a i'></div>",a.firstChild.className="i",2===a.getElementsByClassName("i").length}),c.getById=ib(function(a){return o.appendChild(a).id=u,!e.getElementsByName||!e.getElementsByName(u).length}),c.getById?(d.find.ID=function(a,b){if(typeof b.getElementById!==C&&p){var c=b.getElementById(a);return c&&c.parentNode?[c]:[]}},d.filter.ID=function(a){var b=a.replace(cb,db);return function(a){return a.getAttribute("id")===b}}):(delete d.find.ID,d.filter.ID=function(a){var b=a.replace(cb,db);return function(a){var c=typeof a.getAttributeNode!==C&&a.getAttributeNode("id");return c&&c.value===b}}),d.find.TAG=c.getElementsByTagName?function(a,b){return typeof b.getElementsByTagName!==C?b.getElementsByTagName(a):void 0}:function(a,b){var c,d=[],e=0,f=b.getElementsByTagName(a);if("*"===a){while(c=f[e++])1===c.nodeType&&d.push(c);return d}return f},d.find.CLASS=c.getElementsByClassName&&function(a,b){return typeof b.getElementsByClassName!==C&&p?b.getElementsByClassName(a):void 0},r=[],q=[],(c.qsa=$.test(e.querySelectorAll))&&(ib(function(a){a.innerHTML="<select msallowclip=''><option selected=''></option></select>",a.querySelectorAll("[msallowclip^='']").length&&q.push("[*^$]="+M+"*(?:''|\"\")"),a.querySelectorAll("[selected]").length||q.push("\\["+M+"*(?:value|"+L+")"),a.querySelectorAll(":checked").length||q.push(":checked")}),ib(function(a){var b=e.createElement("input");b.setAttribute("type","hidden"),a.appendChild(b).setAttribute("name","D"),a.querySelectorAll("[name=d]").length&&q.push("name"+M+"*[*^$|!~]?="),a.querySelectorAll(":enabled").length||q.push(":enabled",":disabled"),a.querySelectorAll("*,:x"),q.push(",.*:")})),(c.matchesSelector=$.test(s=o.matches||o.webkitMatchesSelector||o.mozMatchesSelector||o.oMatchesSelector||o.msMatchesSelector))&&ib(function(a){c.disconnectedMatch=s.call(a,"div"),s.call(a,"[s!='']:x"),r.push("!=",Q)}),q=q.length&&new RegExp(q.join("|")),r=r.length&&new RegExp(r.join("|")),b=$.test(o.compareDocumentPosition),t=b||$.test(o.contains)?function(a,b){var c=9===a.nodeType?a.documentElement:a,d=b&&b.parentNode;return a===d||!(!d||1!==d.nodeType||!(c.contains?c.contains(d):a.compareDocumentPosition&&16&a.compareDocumentPosition(d)))}:function(a,b){if(b)while(b=b.parentNode)if(b===a)return!0;return!1},B=b?function(a,b){if(a===b)return l=!0,0;var d=!a.compareDocumentPosition-!b.compareDocumentPosition;return d?d:(d=(a.ownerDocument||a)===(b.ownerDocument||b)?a.compareDocumentPosition(b):1,1&d||!c.sortDetached&&b.compareDocumentPosition(a)===d?a===e||a.ownerDocument===v&&t(v,a)?-1:b===e||b.ownerDocument===v&&t(v,b)?1:k?K.call(k,a)-K.call(k,b):0:4&d?-1:1)}:function(a,b){if(a===b)return l=!0,0;var c,d=0,f=a.parentNode,g=b.parentNode,h=[a],i=[b];if(!f||!g)return a===e?-1:b===e?1:f?-1:g?1:k?K.call(k,a)-K.call(k,b):0;if(f===g)return kb(a,b);c=a;while(c=c.parentNode)h.unshift(c);c=b;while(c=c.parentNode)i.unshift(c);while(h[d]===i[d])d++;return d?kb(h[d],i[d]):h[d]===v?-1:i[d]===v?1:0},e):n},fb.matches=function(a,b){return fb(a,null,null,b)},fb.matchesSelector=function(a,b){if((a.ownerDocument||a)!==n&&m(a),b=b.replace(U,"='$1']"),!(!c.matchesSelector||!p||r&&r.test(b)||q&&q.test(b)))try{var d=s.call(a,b);if(d||c.disconnectedMatch||a.document&&11!==a.document.nodeType)return d}catch(e){}return fb(b,n,null,[a]).length>0},fb.contains=function(a,b){return(a.ownerDocument||a)!==n&&m(a),t(a,b)},fb.attr=function(a,b){(a.ownerDocument||a)!==n&&m(a);var e=d.attrHandle[b.toLowerCase()],f=e&&E.call(d.attrHandle,b.toLowerCase())?e(a,b,!p):void 0;return void 0!==f?f:c.attributes||!p?a.getAttribute(b):(f=a.getAttributeNode(b))&&f.specified?f.value:null},fb.error=function(a){throw new Error("Syntax error, unrecognized expression: "+a)},fb.uniqueSort=function(a){var b,d=[],e=0,f=0;if(l=!c.detectDuplicates,k=!c.sortStable&&a.slice(0),a.sort(B),l){while(b=a[f++])b===a[f]&&(e=d.push(f));while(e--)a.splice(d[e],1)}return k=null,a},e=fb.getText=function(a){var b,c="",d=0,f=a.nodeType;if(f){if(1===f||9===f||11===f){if("string"==typeof a.textContent)return a.textContent;for(a=a.firstChild;a;a=a.nextSibling)c+=e(a)}else if(3===f||4===f)return a.nodeValue}else while(b=a[d++])c+=e(b);return c},d=fb.selectors={cacheLength:50,createPseudo:hb,match:X,attrHandle:{},find:{},relative:{">":{dir:"parentNode",first:!0}," ":{dir:"parentNode"},"+":{dir:"previousSibling",first:!0},"~":{dir:"previousSibling"}},preFilter:{ATTR:function(a){return a[1]=a[1].replace(cb,db),a[3]=(a[3]||a[4]||a[5]||"").replace(cb,db),"~="===a[2]&&(a[3]=" "+a[3]+" "),a.slice(0,4)},CHILD:function(a){return a[1]=a[1].toLowerCase(),"nth"===a[1].slice(0,3)?(a[3]||fb.error(a[0]),a[4]=+(a[4]?a[5]+(a[6]||1):2*("even"===a[3]||"odd"===a[3])),a[5]=+(a[7]+a[8]||"odd"===a[3])):a[3]&&fb.error(a[0]),a},PSEUDO:function(a){var b,c=!a[6]&&a[2];return X.CHILD.test(a[0])?null:(a[3]?a[2]=a[4]||a[5]||"":c&&V.test(c)&&(b=g(c,!0))&&(b=c.indexOf(")",c.length-b)-c.length)&&(a[0]=a[0].slice(0,b),a[2]=c.slice(0,b)),a.slice(0,3))}},filter:{TAG:function(a){var b=a.replace(cb,db).toLowerCase();return"*"===a?function(){return!0}:function(a){return a.nodeName&&a.nodeName.toLowerCase()===b}},CLASS:function(a){var b=y[a+" "];return b||(b=new RegExp("(^|"+M+")"+a+"("+M+"|$)"))&&y(a,function(a){return b.test("string"==typeof a.className&&a.className||typeof a.getAttribute!==C&&a.getAttribute("class")||"")})},ATTR:function(a,b,c){return function(d){var e=fb.attr(d,a);return null==e?"!="===b:b?(e+="","="===b?e===c:"!="===b?e!==c:"^="===b?c&&0===e.indexOf(c):"*="===b?c&&e.indexOf(c)>-1:"$="===b?c&&e.slice(-c.length)===c:"~="===b?(" "+e+" ").indexOf(c)>-1:"|="===b?e===c||e.slice(0,c.length+1)===c+"-":!1):!0}},CHILD:function(a,b,c,d,e){var f="nth"!==a.slice(0,3),g="last"!==a.slice(-4),h="of-type"===b;return 1===d&&0===e?function(a){return!!a.parentNode}:function(b,c,i){var j,k,l,m,n,o,p=f!==g?"nextSibling":"previousSibling",q=b.parentNode,r=h&&b.nodeName.toLowerCase(),s=!i&&!h;if(q){if(f){while(p){l=b;while(l=l[p])if(h?l.nodeName.toLowerCase()===r:1===l.nodeType)return!1;o=p="only"===a&&!o&&"nextSibling"}return!0}if(o=[g?q.firstChild:q.lastChild],g&&s){k=q[u]||(q[u]={}),j=k[a]||[],n=j[0]===w&&j[1],m=j[0]===w&&j[2],l=n&&q.childNodes[n];while(l=++n&&l&&l[p]||(m=n=0)||o.pop())if(1===l.nodeType&&++m&&l===b){k[a]=[w,n,m];break}}else if(s&&(j=(b[u]||(b[u]={}))[a])&&j[0]===w)m=j[1];else while(l=++n&&l&&l[p]||(m=n=0)||o.pop())if((h?l.nodeName.toLowerCase()===r:1===l.nodeType)&&++m&&(s&&((l[u]||(l[u]={}))[a]=[w,m]),l===b))break;return m-=e,m===d||m%d===0&&m/d>=0}}},PSEUDO:function(a,b){var c,e=d.pseudos[a]||d.setFilters[a.toLowerCase()]||fb.error("unsupported pseudo: "+a);return e[u]?e(b):e.length>1?(c=[a,a,"",b],d.setFilters.hasOwnProperty(a.toLowerCase())?hb(function(a,c){var d,f=e(a,b),g=f.length;while(g--)d=K.call(a,f[g]),a[d]=!(c[d]=f[g])}):function(a){return e(a,0,c)}):e}},pseudos:{not:hb(function(a){var b=[],c=[],d=h(a.replace(R,"$1"));return d[u]?hb(function(a,b,c,e){var f,g=d(a,null,e,[]),h=a.length;while(h--)(f=g[h])&&(a[h]=!(b[h]=f))}):function(a,e,f){return b[0]=a,d(b,null,f,c),!c.pop()}}),has:hb(function(a){return function(b){return fb(a,b).length>0}}),contains:hb(function(a){return function(b){return(b.textContent||b.innerText||e(b)).indexOf(a)>-1}}),lang:hb(function(a){return W.test(a||"")||fb.error("unsupported lang: "+a),a=a.replace(cb,db).toLowerCase(),function(b){var c;do if(c=p?b.lang:b.getAttribute("xml:lang")||b.getAttribute("lang"))return c=c.toLowerCase(),c===a||0===c.indexOf(a+"-");while((b=b.parentNode)&&1===b.nodeType);return!1}}),target:function(b){var c=a.location&&a.location.hash;return c&&c.slice(1)===b.id},root:function(a){return a===o},focus:function(a){return a===n.activeElement&&(!n.hasFocus||n.hasFocus())&&!!(a.type||a.href||~a.tabIndex)},enabled:function(a){return a.disabled===!1},disabled:function(a){return a.disabled===!0},checked:function(a){var b=a.nodeName.toLowerCase();return"input"===b&&!!a.checked||"option"===b&&!!a.selected},selected:function(a){return a.parentNode&&a.parentNode.selectedIndex,a.selected===!0},empty:function(a){for(a=a.firstChild;a;a=a.nextSibling)if(a.nodeType<6)return!1;return!0},parent:function(a){return!d.pseudos.empty(a)},header:function(a){return Z.test(a.nodeName)},input:function(a){return Y.test(a.nodeName)},button:function(a){var b=a.nodeName.toLowerCase();return"input"===b&&"button"===a.type||"button"===b},text:function(a){var b;return"input"===a.nodeName.toLowerCase()&&"text"===a.type&&(null==(b=a.getAttribute("type"))||"text"===b.toLowerCase())},first:nb(function(){return[0]}),last:nb(function(a,b){return[b-1]}),eq:nb(function(a,b,c){return[0>c?c+b:c]}),even:nb(function(a,b){for(var c=0;b>c;c+=2)a.push(c);return a}),odd:nb(function(a,b){for(var c=1;b>c;c+=2)a.push(c);return a}),lt:nb(function(a,b,c){for(var d=0>c?c+b:c;--d>=0;)a.push(d);return a}),gt:nb(function(a,b,c){for(var d=0>c?c+b:c;++d<b;)a.push(d);return a})}},d.pseudos.nth=d.pseudos.eq;for(b in{radio:!0,checkbox:!0,file:!0,password:!0,image:!0})d.pseudos[b]=lb(b);for(b in{submit:!0,reset:!0})d.pseudos[b]=mb(b);function pb(){}pb.prototype=d.filters=d.pseudos,d.setFilters=new pb,g=fb.tokenize=function(a,b){var c,e,f,g,h,i,j,k=z[a+" "];if(k)return b?0:k.slice(0);h=a,i=[],j=d.preFilter;while(h){(!c||(e=S.exec(h)))&&(e&&(h=h.slice(e[0].length)||h),i.push(f=[])),c=!1,(e=T.exec(h))&&(c=e.shift(),f.push({value:c,type:e[0].replace(R," ")}),h=h.slice(c.length));for(g in d.filter)!(e=X[g].exec(h))||j[g]&&!(e=j[g](e))||(c=e.shift(),f.push({value:c,type:g,matches:e}),h=h.slice(c.length));if(!c)break}return b?h.length:h?fb.error(a):z(a,i).slice(0)};function qb(a){for(var b=0,c=a.length,d="";c>b;b++)d+=a[b].value;return d}function rb(a,b,c){var d=b.dir,e=c&&"parentNode"===d,f=x++;return b.first?function(b,c,f){while(b=b[d])if(1===b.nodeType||e)return a(b,c,f)}:function(b,c,g){var h,i,j=[w,f];if(g){while(b=b[d])if((1===b.nodeType||e)&&a(b,c,g))return!0}else while(b=b[d])if(1===b.nodeType||e){if(i=b[u]||(b[u]={}),(h=i[d])&&h[0]===w&&h[1]===f)return j[2]=h[2];if(i[d]=j,j[2]=a(b,c,g))return!0}}}function sb(a){return a.length>1?function(b,c,d){var e=a.length;while(e--)if(!a[e](b,c,d))return!1;return!0}:a[0]}function tb(a,b,c){for(var d=0,e=b.length;e>d;d++)fb(a,b[d],c);return c}function ub(a,b,c,d,e){for(var f,g=[],h=0,i=a.length,j=null!=b;i>h;h++)(f=a[h])&&(!c||c(f,d,e))&&(g.push(f),j&&b.push(h));return g}function vb(a,b,c,d,e,f){return d&&!d[u]&&(d=vb(d)),e&&!e[u]&&(e=vb(e,f)),hb(function(f,g,h,i){var j,k,l,m=[],n=[],o=g.length,p=f||tb(b||"*",h.nodeType?[h]:h,[]),q=!a||!f&&b?p:ub(p,m,a,h,i),r=c?e||(f?a:o||d)?[]:g:q;if(c&&c(q,r,h,i),d){j=ub(r,n),d(j,[],h,i),k=j.length;while(k--)(l=j[k])&&(r[n[k]]=!(q[n[k]]=l))}if(f){if(e||a){if(e){j=[],k=r.length;while(k--)(l=r[k])&&j.push(q[k]=l);e(null,r=[],j,i)}k=r.length;while(k--)(l=r[k])&&(j=e?K.call(f,l):m[k])>-1&&(f[j]=!(g[j]=l))}}else r=ub(r===g?r.splice(o,r.length):r),e?e(null,g,r,i):I.apply(g,r)})}function wb(a){for(var b,c,e,f=a.length,g=d.relative[a[0].type],h=g||d.relative[" "],i=g?1:0,k=rb(function(a){return a===b},h,!0),l=rb(function(a){return K.call(b,a)>-1},h,!0),m=[function(a,c,d){return!g&&(d||c!==j)||((b=c).nodeType?k(a,c,d):l(a,c,d))}];f>i;i++)if(c=d.relative[a[i].type])m=[rb(sb(m),c)];else{if(c=d.filter[a[i].type].apply(null,a[i].matches),c[u]){for(e=++i;f>e;e++)if(d.relative[a[e].type])break;return vb(i>1&&sb(m),i>1&&qb(a.slice(0,i-1).concat({value:" "===a[i-2].type?"*":""})).replace(R,"$1"),c,e>i&&wb(a.slice(i,e)),f>e&&wb(a=a.slice(e)),f>e&&qb(a))}m.push(c)}return sb(m)}function xb(a,b){var c=b.length>0,e=a.length>0,f=function(f,g,h,i,k){var l,m,o,p=0,q="0",r=f&&[],s=[],t=j,u=f||e&&d.find.TAG("*",k),v=w+=null==t?1:Math.random()||.1,x=u.length;for(k&&(j=g!==n&&g);q!==x&&null!=(l=u[q]);q++){if(e&&l){m=0;while(o=a[m++])if(o(l,g,h)){i.push(l);break}k&&(w=v)}c&&((l=!o&&l)&&p--,f&&r.push(l))}if(p+=q,c&&q!==p){m=0;while(o=b[m++])o(r,s,g,h);if(f){if(p>0)while(q--)r[q]||s[q]||(s[q]=G.call(i));s=ub(s)}I.apply(i,s),k&&!f&&s.length>0&&p+b.length>1&&fb.uniqueSort(i)}return k&&(w=v,j=t),r};return c?hb(f):f}return h=fb.compile=function(a,b){var c,d=[],e=[],f=A[a+" "];if(!f){b||(b=g(a)),c=b.length;while(c--)f=wb(b[c]),f[u]?d.push(f):e.push(f);f=A(a,xb(e,d)),f.selector=a}return f},i=fb.select=function(a,b,e,f){var i,j,k,l,m,n="function"==typeof a&&a,o=!f&&g(a=n.selector||a);if(e=e||[],1===o.length){if(j=o[0]=o[0].slice(0),j.length>2&&"ID"===(k=j[0]).type&&c.getById&&9===b.nodeType&&p&&d.relative[j[1].type]){if(b=(d.find.ID(k.matches[0].replace(cb,db),b)||[])[0],!b)return e;n&&(b=b.parentNode),a=a.slice(j.shift().value.length)}i=X.needsContext.test(a)?0:j.length;while(i--){if(k=j[i],d.relative[l=k.type])break;if((m=d.find[l])&&(f=m(k.matches[0].replace(cb,db),ab.test(j[0].type)&&ob(b.parentNode)||b))){if(j.splice(i,1),a=f.length&&qb(j),!a)return I.apply(e,f),e;break}}}return(n||h(a,o))(f,b,!p,e,ab.test(a)&&ob(b.parentNode)||b),e},c.sortStable=u.split("").sort(B).join("")===u,c.detectDuplicates=!!l,m(),c.sortDetached=ib(function(a){return 1&a.compareDocumentPosition(n.createElement("div"))}),ib(function(a){return a.innerHTML="<a href='#'></a>","#"===a.firstChild.getAttribute("href")})||jb("type|href|height|width",function(a,b,c){return c?void 0:a.getAttribute(b,"type"===b.toLowerCase()?1:2)}),c.attributes&&ib(function(a){return a.innerHTML="<input/>",a.firstChild.setAttribute("value",""),""===a.firstChild.getAttribute("value")})||jb("value",function(a,b,c){return c||"input"!==a.nodeName.toLowerCase()?void 0:a.defaultValue}),ib(function(a){return null==a.getAttribute("disabled")})||jb(L,function(a,b,c){var d;return c?void 0:a[b]===!0?b.toLowerCase():(d=a.getAttributeNode(b))&&d.specified?d.value:null}),fb}(a);n.find=t,n.expr=t.selectors,n.expr[":"]=n.expr.pseudos,n.unique=t.uniqueSort,n.text=t.getText,n.isXMLDoc=t.isXML,n.contains=t.contains;var u=n.expr.match.needsContext,v=/^<(\w+)\s*\/?>(?:<\/\1>|)$/,w=/^.[^:#\[\.,]*$/;function x(a,b,c){if(n.isFunction(b))return n.grep(a,function(a,d){return!!b.call(a,d,a)!==c});if(b.nodeType)return n.grep(a,function(a){return a===b!==c});if("string"==typeof b){if(w.test(b))return n.filter(b,a,c);b=n.filter(b,a)}return n.grep(a,function(a){return g.call(b,a)>=0!==c})}n.filter=function(a,b,c){var d=b[0];return c&&(a=":not("+a+")"),1===b.length&&1===d.nodeType?n.find.matchesSelector(d,a)?[d]:[]:n.find.matches(a,n.grep(b,function(a){return 1===a.nodeType}))},n.fn.extend({find:function(a){var b,c=this.length,d=[],e=this;if("string"!=typeof a)return this.pushStack(n(a).filter(function(){for(b=0;c>b;b++)if(n.contains(e[b],this))return!0}));for(b=0;c>b;b++)n.find(a,e[b],d);return d=this.pushStack(c>1?n.unique(d):d),d.selector=this.selector?this.selector+" "+a:a,d},filter:function(a){return this.pushStack(x(this,a||[],!1))},not:function(a){return this.pushStack(x(this,a||[],!0))},is:function(a){return!!x(this,"string"==typeof a&&u.test(a)?n(a):a||[],!1).length}});var y,z=/^(?:\s*(<[\w\W]+>)[^>]*|#([\w-]*))$/,A=n.fn.init=function(a,b){var c,d;if(!a)return this;if("string"==typeof a){if(c="<"===a[0]&&">"===a[a.length-1]&&a.length>=3?[null,a,null]:z.exec(a),!c||!c[1]&&b)return!b||b.jquery?(b||y).find(a):this.constructor(b).find(a);if(c[1]){if(b=b instanceof n?b[0]:b,n.merge(this,n.parseHTML(c[1],b&&b.nodeType?b.ownerDocument||b:l,!0)),v.test(c[1])&&n.isPlainObject(b))for(c in b)n.isFunction(this[c])?this[c](b[c]):this.attr(c,b[c]);return this}return d=l.getElementById(c[2]),d&&d.parentNode&&(this.length=1,this[0]=d),this.context=l,this.selector=a,this}return a.nodeType?(this.context=this[0]=a,this.length=1,this):n.isFunction(a)?"undefined"!=typeof y.ready?y.ready(a):a(n):(void 0!==a.selector&&(this.selector=a.selector,this.context=a.context),n.makeArray(a,this))};A.prototype=n.fn,y=n(l);var B=/^(?:parents|prev(?:Until|All))/,C={children:!0,contents:!0,next:!0,prev:!0};n.extend({dir:function(a,b,c){var d=[],e=void 0!==c;while((a=a[b])&&9!==a.nodeType)if(1===a.nodeType){if(e&&n(a).is(c))break;d.push(a)}return d},sibling:function(a,b){for(var c=[];a;a=a.nextSibling)1===a.nodeType&&a!==b&&c.push(a);return c}}),n.fn.extend({has:function(a){var b=n(a,this),c=b.length;return this.filter(function(){for(var a=0;c>a;a++)if(n.contains(this,b[a]))return!0})},closest:function(a,b){for(var c,d=0,e=this.length,f=[],g=u.test(a)||"string"!=typeof a?n(a,b||this.context):0;e>d;d++)for(c=this[d];c&&c!==b;c=c.parentNode)if(c.nodeType<11&&(g?g.index(c)>-1:1===c.nodeType&&n.find.matchesSelector(c,a))){f.push(c);break}return this.pushStack(f.length>1?n.unique(f):f)},index:function(a){return a?"string"==typeof a?g.call(n(a),this[0]):g.call(this,a.jquery?a[0]:a):this[0]&&this[0].parentNode?this.first().prevAll().length:-1},add:function(a,b){return this.pushStack(n.unique(n.merge(this.get(),n(a,b))))},addBack:function(a){return this.add(null==a?this.prevObject:this.prevObject.filter(a))}});function D(a,b){while((a=a[b])&&1!==a.nodeType);return a}n.each({parent:function(a){var b=a.parentNode;return b&&11!==b.nodeType?b:null},parents:function(a){return n.dir(a,"parentNode")},parentsUntil:function(a,b,c){return n.dir(a,"parentNode",c)},next:function(a){return D(a,"nextSibling")},prev:function(a){return D(a,"previousSibling")},nextAll:function(a){return n.dir(a,"nextSibling")},prevAll:function(a){return n.dir(a,"previousSibling")},nextUntil:function(a,b,c){return n.dir(a,"nextSibling",c)},prevUntil:function(a,b,c){return n.dir(a,"previousSibling",c)},siblings:function(a){return n.sibling((a.parentNode||{}).firstChild,a)},children:function(a){return n.sibling(a.firstChild)},contents:function(a){return a.contentDocument||n.merge([],a.childNodes)}},function(a,b){n.fn[a]=function(c,d){var e=n.map(this,b,c);return"Until"!==a.slice(-5)&&(d=c),d&&"string"==typeof d&&(e=n.filter(d,e)),this.length>1&&(C[a]||n.unique(e),B.test(a)&&e.reverse()),this.pushStack(e)}});var E=/\S+/g,F={};function G(a){var b=F[a]={};return n.each(a.match(E)||[],function(a,c){b[c]=!0}),b}n.Callbacks=function(a){a="string"==typeof a?F[a]||G(a):n.extend({},a);var b,c,d,e,f,g,h=[],i=!a.once&&[],j=function(l){for(b=a.memory&&l,c=!0,g=e||0,e=0,f=h.length,d=!0;h&&f>g;g++)if(h[g].apply(l[0],l[1])===!1&&a.stopOnFalse){b=!1;break}d=!1,h&&(i?i.length&&j(i.shift()):b?h=[]:k.disable())},k={add:function(){if(h){var c=h.length;!function g(b){n.each(b,function(b,c){var d=n.type(c);"function"===d?a.unique&&k.has(c)||h.push(c):c&&c.length&&"string"!==d&&g(c)})}(arguments),d?f=h.length:b&&(e=c,j(b))}return this},remove:function(){return h&&n.each(arguments,function(a,b){var c;while((c=n.inArray(b,h,c))>-1)h.splice(c,1),d&&(f>=c&&f--,g>=c&&g--)}),this},has:function(a){return a?n.inArray(a,h)>-1:!(!h||!h.length)},empty:function(){return h=[],f=0,this},disable:function(){return h=i=b=void 0,this},disabled:function(){return!h},lock:function(){return i=void 0,b||k.disable(),this},locked:function(){return!i},fireWith:function(a,b){return!h||c&&!i||(b=b||[],b=[a,b.slice?b.slice():b],d?i.push(b):j(b)),this},fire:function(){return k.fireWith(this,arguments),this},fired:function(){return!!c}};return k},n.extend({Deferred:function(a){var b=[["resolve","done",n.Callbacks("once memory"),"resolved"],["reject","fail",n.Callbacks("once memory"),"rejected"],["notify","progress",n.Callbacks("memory")]],c="pending",d={state:function(){return c},always:function(){return e.done(arguments).fail(arguments),this},then:function(){var a=arguments;return n.Deferred(function(c){n.each(b,function(b,f){var g=n.isFunction(a[b])&&a[b];e[f[1]](function(){var a=g&&g.apply(this,arguments);a&&n.isFunction(a.promise)?a.promise().done(c.resolve).fail(c.reject).progress(c.notify):c[f[0]+"With"](this===d?c.promise():this,g?[a]:arguments)})}),a=null}).promise()},promise:function(a){return null!=a?n.extend(a,d):d}},e={};return d.pipe=d.then,n.each(b,function(a,f){var g=f[2],h=f[3];d[f[1]]=g.add,h&&g.add(function(){c=h},b[1^a][2].disable,b[2][2].lock),e[f[0]]=function(){return e[f[0]+"With"](this===e?d:this,arguments),this},e[f[0]+"With"]=g.fireWith}),d.promise(e),a&&a.call(e,e),e},when:function(a){var b=0,c=d.call(arguments),e=c.length,f=1!==e||a&&n.isFunction(a.promise)?e:0,g=1===f?a:n.Deferred(),h=function(a,b,c){return function(e){b[a]=this,c[a]=arguments.length>1?d.call(arguments):e,c===i?g.notifyWith(b,c):--f||g.resolveWith(b,c)}},i,j,k;if(e>1)for(i=new Array(e),j=new Array(e),k=new Array(e);e>b;b++)c[b]&&n.isFunction(c[b].promise)?c[b].promise().done(h(b,k,c)).fail(g.reject).progress(h(b,j,i)):--f;return f||g.resolveWith(k,c),g.promise()}});var H;n.fn.ready=function(a){return n.ready.promise().done(a),this},n.extend({isReady:!1,readyWait:1,holdReady:function(a){a?n.readyWait++:n.ready(!0)},ready:function(a){(a===!0?--n.readyWait:n.isReady)||(n.isReady=!0,a!==!0&&--n.readyWait>0||(H.resolveWith(l,[n]),n.fn.triggerHandler&&(n(l).triggerHandler("ready"),n(l).off("ready"))))}});function I(){l.removeEventListener("DOMContentLoaded",I,!1),a.removeEventListener("load",I,!1),n.ready()}n.ready.promise=function(b){return H||(H=n.Deferred(),"complete"===l.readyState?setTimeout(n.ready):(l.addEventListener("DOMContentLoaded",I,!1),a.addEventListener("load",I,!1))),H.promise(b)},n.ready.promise();var J=n.access=function(a,b,c,d,e,f,g){var h=0,i=a.length,j=null==c;if("object"===n.type(c)){e=!0;for(h in c)n.access(a,b,h,c[h],!0,f,g)}else if(void 0!==d&&(e=!0,n.isFunction(d)||(g=!0),j&&(g?(b.call(a,d),b=null):(j=b,b=function(a,b,c){return j.call(n(a),c)})),b))for(;i>h;h++)b(a[h],c,g?d:d.call(a[h],h,b(a[h],c)));return e?a:j?b.call(a):i?b(a[0],c):f};n.acceptData=function(a){return 1===a.nodeType||9===a.nodeType||!+a.nodeType};function K(){Object.defineProperty(this.cache={},0,{get:function(){return{}}}),this.expando=n.expando+Math.random()}K.uid=1,K.accepts=n.acceptData,K.prototype={key:function(a){if(!K.accepts(a))return 0;var b={},c=a[this.expando];if(!c){c=K.uid++;try{b[this.expando]={value:c},Object.defineProperties(a,b)}catch(d){b[this.expando]=c,n.extend(a,b)}}return this.cache[c]||(this.cache[c]={}),c},set:function(a,b,c){var d,e=this.key(a),f=this.cache[e];if("string"==typeof b)f[b]=c;else if(n.isEmptyObject(f))n.extend(this.cache[e],b);else for(d in b)f[d]=b[d];return f},get:function(a,b){var c=this.cache[this.key(a)];return void 0===b?c:c[b]},access:function(a,b,c){var d;return void 0===b||b&&"string"==typeof b&&void 0===c?(d=this.get(a,b),void 0!==d?d:this.get(a,n.camelCase(b))):(this.set(a,b,c),void 0!==c?c:b)},remove:function(a,b){var c,d,e,f=this.key(a),g=this.cache[f];if(void 0===b)this.cache[f]={};else{n.isArray(b)?d=b.concat(b.map(n.camelCase)):(e=n.camelCase(b),b in g?d=[b,e]:(d=e,d=d in g?[d]:d.match(E)||[])),c=d.length;while(c--)delete g[d[c]]}},hasData:function(a){return!n.isEmptyObject(this.cache[a[this.expando]]||{})},discard:function(a){a[this.expando]&&delete this.cache[a[this.expando]]}};var L=new K,M=new K,N=/^(?:\{[\w\W]*\}|\[[\w\W]*\])$/,O=/([A-Z])/g;function P(a,b,c){var d;if(void 0===c&&1===a.nodeType)if(d="data-"+b.replace(O,"-$1").toLowerCase(),c=a.getAttribute(d),"string"==typeof c){try{c="true"===c?!0:"false"===c?!1:"null"===c?null:+c+""===c?+c:N.test(c)?n.parseJSON(c):c}catch(e){}M.set(a,b,c)}else c=void 0;return c}n.extend({hasData:function(a){return M.hasData(a)||L.hasData(a)},data:function(a,b,c){return M.access(a,b,c)},removeData:function(a,b){M.remove(a,b)
},_data:function(a,b,c){return L.access(a,b,c)},_removeData:function(a,b){L.remove(a,b)}}),n.fn.extend({data:function(a,b){var c,d,e,f=this[0],g=f&&f.attributes;if(void 0===a){if(this.length&&(e=M.get(f),1===f.nodeType&&!L.get(f,"hasDataAttrs"))){c=g.length;while(c--)g[c]&&(d=g[c].name,0===d.indexOf("data-")&&(d=n.camelCase(d.slice(5)),P(f,d,e[d])));L.set(f,"hasDataAttrs",!0)}return e}return"object"==typeof a?this.each(function(){M.set(this,a)}):J(this,function(b){var c,d=n.camelCase(a);if(f&&void 0===b){if(c=M.get(f,a),void 0!==c)return c;if(c=M.get(f,d),void 0!==c)return c;if(c=P(f,d,void 0),void 0!==c)return c}else this.each(function(){var c=M.get(this,d);M.set(this,d,b),-1!==a.indexOf("-")&&void 0!==c&&M.set(this,a,b)})},null,b,arguments.length>1,null,!0)},removeData:function(a){return this.each(function(){M.remove(this,a)})}}),n.extend({queue:function(a,b,c){var d;return a?(b=(b||"fx")+"queue",d=L.get(a,b),c&&(!d||n.isArray(c)?d=L.access(a,b,n.makeArray(c)):d.push(c)),d||[]):void 0},dequeue:function(a,b){b=b||"fx";var c=n.queue(a,b),d=c.length,e=c.shift(),f=n._queueHooks(a,b),g=function(){n.dequeue(a,b)};"inprogress"===e&&(e=c.shift(),d--),e&&("fx"===b&&c.unshift("inprogress"),delete f.stop,e.call(a,g,f)),!d&&f&&f.empty.fire()},_queueHooks:function(a,b){var c=b+"queueHooks";return L.get(a,c)||L.access(a,c,{empty:n.Callbacks("once memory").add(function(){L.remove(a,[b+"queue",c])})})}}),n.fn.extend({queue:function(a,b){var c=2;return"string"!=typeof a&&(b=a,a="fx",c--),arguments.length<c?n.queue(this[0],a):void 0===b?this:this.each(function(){var c=n.queue(this,a,b);n._queueHooks(this,a),"fx"===a&&"inprogress"!==c[0]&&n.dequeue(this,a)})},dequeue:function(a){return this.each(function(){n.dequeue(this,a)})},clearQueue:function(a){return this.queue(a||"fx",[])},promise:function(a,b){var c,d=1,e=n.Deferred(),f=this,g=this.length,h=function(){--d||e.resolveWith(f,[f])};"string"!=typeof a&&(b=a,a=void 0),a=a||"fx";while(g--)c=L.get(f[g],a+"queueHooks"),c&&c.empty&&(d++,c.empty.add(h));return h(),e.promise(b)}});var Q=/[+-]?(?:\d*\.|)\d+(?:[eE][+-]?\d+|)/.source,R=["Top","Right","Bottom","Left"],S=function(a,b){return a=b||a,"none"===n.css(a,"display")||!n.contains(a.ownerDocument,a)},T=/^(?:checkbox|radio)$/i;!function(){var a=l.createDocumentFragment(),b=a.appendChild(l.createElement("div")),c=l.createElement("input");c.setAttribute("type","radio"),c.setAttribute("checked","checked"),c.setAttribute("name","t"),b.appendChild(c),k.checkClone=b.cloneNode(!0).cloneNode(!0).lastChild.checked,b.innerHTML="<textarea>x</textarea>",k.noCloneChecked=!!b.cloneNode(!0).lastChild.defaultValue}();var U="undefined";k.focusinBubbles="onfocusin"in a;var V=/^key/,W=/^(?:mouse|pointer|contextmenu)|click/,X=/^(?:focusinfocus|focusoutblur)$/,Y=/^([^.]*)(?:\.(.+)|)$/;function Z(){return!0}function $(){return!1}function _(){try{return l.activeElement}catch(a){}}n.event={global:{},add:function(a,b,c,d,e){var f,g,h,i,j,k,l,m,o,p,q,r=L.get(a);if(r){c.handler&&(f=c,c=f.handler,e=f.selector),c.guid||(c.guid=n.guid++),(i=r.events)||(i=r.events={}),(g=r.handle)||(g=r.handle=function(b){return typeof n!==U&&n.event.triggered!==b.type?n.event.dispatch.apply(a,arguments):void 0}),b=(b||"").match(E)||[""],j=b.length;while(j--)h=Y.exec(b[j])||[],o=q=h[1],p=(h[2]||"").split(".").sort(),o&&(l=n.event.special[o]||{},o=(e?l.delegateType:l.bindType)||o,l=n.event.special[o]||{},k=n.extend({type:o,origType:q,data:d,handler:c,guid:c.guid,selector:e,needsContext:e&&n.expr.match.needsContext.test(e),namespace:p.join(".")},f),(m=i[o])||(m=i[o]=[],m.delegateCount=0,l.setup&&l.setup.call(a,d,p,g)!==!1||a.addEventListener&&a.addEventListener(o,g,!1)),l.add&&(l.add.call(a,k),k.handler.guid||(k.handler.guid=c.guid)),e?m.splice(m.delegateCount++,0,k):m.push(k),n.event.global[o]=!0)}},remove:function(a,b,c,d,e){var f,g,h,i,j,k,l,m,o,p,q,r=L.hasData(a)&&L.get(a);if(r&&(i=r.events)){b=(b||"").match(E)||[""],j=b.length;while(j--)if(h=Y.exec(b[j])||[],o=q=h[1],p=(h[2]||"").split(".").sort(),o){l=n.event.special[o]||{},o=(d?l.delegateType:l.bindType)||o,m=i[o]||[],h=h[2]&&new RegExp("(^|\\.)"+p.join("\\.(?:.*\\.|)")+"(\\.|$)"),g=f=m.length;while(f--)k=m[f],!e&&q!==k.origType||c&&c.guid!==k.guid||h&&!h.test(k.namespace)||d&&d!==k.selector&&("**"!==d||!k.selector)||(m.splice(f,1),k.selector&&m.delegateCount--,l.remove&&l.remove.call(a,k));g&&!m.length&&(l.teardown&&l.teardown.call(a,p,r.handle)!==!1||n.removeEvent(a,o,r.handle),delete i[o])}else for(o in i)n.event.remove(a,o+b[j],c,d,!0);n.isEmptyObject(i)&&(delete r.handle,L.remove(a,"events"))}},trigger:function(b,c,d,e){var f,g,h,i,k,m,o,p=[d||l],q=j.call(b,"type")?b.type:b,r=j.call(b,"namespace")?b.namespace.split("."):[];if(g=h=d=d||l,3!==d.nodeType&&8!==d.nodeType&&!X.test(q+n.event.triggered)&&(q.indexOf(".")>=0&&(r=q.split("."),q=r.shift(),r.sort()),k=q.indexOf(":")<0&&"on"+q,b=b[n.expando]?b:new n.Event(q,"object"==typeof b&&b),b.isTrigger=e?2:3,b.namespace=r.join("."),b.namespace_re=b.namespace?new RegExp("(^|\\.)"+r.join("\\.(?:.*\\.|)")+"(\\.|$)"):null,b.result=void 0,b.target||(b.target=d),c=null==c?[b]:n.makeArray(c,[b]),o=n.event.special[q]||{},e||!o.trigger||o.trigger.apply(d,c)!==!1)){if(!e&&!o.noBubble&&!n.isWindow(d)){for(i=o.delegateType||q,X.test(i+q)||(g=g.parentNode);g;g=g.parentNode)p.push(g),h=g;h===(d.ownerDocument||l)&&p.push(h.defaultView||h.parentWindow||a)}f=0;while((g=p[f++])&&!b.isPropagationStopped())b.type=f>1?i:o.bindType||q,m=(L.get(g,"events")||{})[b.type]&&L.get(g,"handle"),m&&m.apply(g,c),m=k&&g[k],m&&m.apply&&n.acceptData(g)&&(b.result=m.apply(g,c),b.result===!1&&b.preventDefault());return b.type=q,e||b.isDefaultPrevented()||o._default&&o._default.apply(p.pop(),c)!==!1||!n.acceptData(d)||k&&n.isFunction(d[q])&&!n.isWindow(d)&&(h=d[k],h&&(d[k]=null),n.event.triggered=q,d[q](),n.event.triggered=void 0,h&&(d[k]=h)),b.result}},dispatch:function(a){a=n.event.fix(a);var b,c,e,f,g,h=[],i=d.call(arguments),j=(L.get(this,"events")||{})[a.type]||[],k=n.event.special[a.type]||{};if(i[0]=a,a.delegateTarget=this,!k.preDispatch||k.preDispatch.call(this,a)!==!1){h=n.event.handlers.call(this,a,j),b=0;while((f=h[b++])&&!a.isPropagationStopped()){a.currentTarget=f.elem,c=0;while((g=f.handlers[c++])&&!a.isImmediatePropagationStopped())(!a.namespace_re||a.namespace_re.test(g.namespace))&&(a.handleObj=g,a.data=g.data,e=((n.event.special[g.origType]||{}).handle||g.handler).apply(f.elem,i),void 0!==e&&(a.result=e)===!1&&(a.preventDefault(),a.stopPropagation()))}return k.postDispatch&&k.postDispatch.call(this,a),a.result}},handlers:function(a,b){var c,d,e,f,g=[],h=b.delegateCount,i=a.target;if(h&&i.nodeType&&(!a.button||"click"!==a.type))for(;i!==this;i=i.parentNode||this)if(i.disabled!==!0||"click"!==a.type){for(d=[],c=0;h>c;c++)f=b[c],e=f.selector+" ",void 0===d[e]&&(d[e]=f.needsContext?n(e,this).index(i)>=0:n.find(e,this,null,[i]).length),d[e]&&d.push(f);d.length&&g.push({elem:i,handlers:d})}return h<b.length&&g.push({elem:this,handlers:b.slice(h)}),g},props:"altKey bubbles cancelable ctrlKey currentTarget eventPhase metaKey relatedTarget shiftKey target timeStamp view which".split(" "),fixHooks:{},keyHooks:{props:"char charCode key keyCode".split(" "),filter:function(a,b){return null==a.which&&(a.which=null!=b.charCode?b.charCode:b.keyCode),a}},mouseHooks:{props:"button buttons clientX clientY offsetX offsetY pageX pageY screenX screenY toElement".split(" "),filter:function(a,b){var c,d,e,f=b.button;return null==a.pageX&&null!=b.clientX&&(c=a.target.ownerDocument||l,d=c.documentElement,e=c.body,a.pageX=b.clientX+(d&&d.scrollLeft||e&&e.scrollLeft||0)-(d&&d.clientLeft||e&&e.clientLeft||0),a.pageY=b.clientY+(d&&d.scrollTop||e&&e.scrollTop||0)-(d&&d.clientTop||e&&e.clientTop||0)),a.which||void 0===f||(a.which=1&f?1:2&f?3:4&f?2:0),a}},fix:function(a){if(a[n.expando])return a;var b,c,d,e=a.type,f=a,g=this.fixHooks[e];g||(this.fixHooks[e]=g=W.test(e)?this.mouseHooks:V.test(e)?this.keyHooks:{}),d=g.props?this.props.concat(g.props):this.props,a=new n.Event(f),b=d.length;while(b--)c=d[b],a[c]=f[c];return a.target||(a.target=l),3===a.target.nodeType&&(a.target=a.target.parentNode),g.filter?g.filter(a,f):a},special:{load:{noBubble:!0},focus:{trigger:function(){return this!==_()&&this.focus?(this.focus(),!1):void 0},delegateType:"focusin"},blur:{trigger:function(){return this===_()&&this.blur?(this.blur(),!1):void 0},delegateType:"focusout"},click:{trigger:function(){return"checkbox"===this.type&&this.click&&n.nodeName(this,"input")?(this.click(),!1):void 0},_default:function(a){return n.nodeName(a.target,"a")}},beforeunload:{postDispatch:function(a){void 0!==a.result&&a.originalEvent&&(a.originalEvent.returnValue=a.result)}}},simulate:function(a,b,c,d){var e=n.extend(new n.Event,c,{type:a,isSimulated:!0,originalEvent:{}});d?n.event.trigger(e,null,b):n.event.dispatch.call(b,e),e.isDefaultPrevented()&&c.preventDefault()}},n.removeEvent=function(a,b,c){a.removeEventListener&&a.removeEventListener(b,c,!1)},n.Event=function(a,b){return this instanceof n.Event?(a&&a.type?(this.originalEvent=a,this.type=a.type,this.isDefaultPrevented=a.defaultPrevented||void 0===a.defaultPrevented&&a.returnValue===!1?Z:$):this.type=a,b&&n.extend(this,b),this.timeStamp=a&&a.timeStamp||n.now(),void(this[n.expando]=!0)):new n.Event(a,b)},n.Event.prototype={isDefaultPrevented:$,isPropagationStopped:$,isImmediatePropagationStopped:$,preventDefault:function(){var a=this.originalEvent;this.isDefaultPrevented=Z,a&&a.preventDefault&&a.preventDefault()},stopPropagation:function(){var a=this.originalEvent;this.isPropagationStopped=Z,a&&a.stopPropagation&&a.stopPropagation()},stopImmediatePropagation:function(){var a=this.originalEvent;this.isImmediatePropagationStopped=Z,a&&a.stopImmediatePropagation&&a.stopImmediatePropagation(),this.stopPropagation()}},n.each({mouseenter:"mouseover",mouseleave:"mouseout",pointerenter:"pointerover",pointerleave:"pointerout"},function(a,b){n.event.special[a]={delegateType:b,bindType:b,handle:function(a){var c,d=this,e=a.relatedTarget,f=a.handleObj;return(!e||e!==d&&!n.contains(d,e))&&(a.type=f.origType,c=f.handler.apply(this,arguments),a.type=b),c}}}),k.focusinBubbles||n.each({focus:"focusin",blur:"focusout"},function(a,b){var c=function(a){n.event.simulate(b,a.target,n.event.fix(a),!0)};n.event.special[b]={setup:function(){var d=this.ownerDocument||this,e=L.access(d,b);e||d.addEventListener(a,c,!0),L.access(d,b,(e||0)+1)},teardown:function(){var d=this.ownerDocument||this,e=L.access(d,b)-1;e?L.access(d,b,e):(d.removeEventListener(a,c,!0),L.remove(d,b))}}}),n.fn.extend({on:function(a,b,c,d,e){var f,g;if("object"==typeof a){"string"!=typeof b&&(c=c||b,b=void 0);for(g in a)this.on(g,b,c,a[g],e);return this}if(null==c&&null==d?(d=b,c=b=void 0):null==d&&("string"==typeof b?(d=c,c=void 0):(d=c,c=b,b=void 0)),d===!1)d=$;else if(!d)return this;return 1===e&&(f=d,d=function(a){return n().off(a),f.apply(this,arguments)},d.guid=f.guid||(f.guid=n.guid++)),this.each(function(){n.event.add(this,a,d,c,b)})},one:function(a,b,c,d){return this.on(a,b,c,d,1)},off:function(a,b,c){var d,e;if(a&&a.preventDefault&&a.handleObj)return d=a.handleObj,n(a.delegateTarget).off(d.namespace?d.origType+"."+d.namespace:d.origType,d.selector,d.handler),this;if("object"==typeof a){for(e in a)this.off(e,b,a[e]);return this}return(b===!1||"function"==typeof b)&&(c=b,b=void 0),c===!1&&(c=$),this.each(function(){n.event.remove(this,a,c,b)})},trigger:function(a,b){return this.each(function(){n.event.trigger(a,b,this)})},triggerHandler:function(a,b){var c=this[0];return c?n.event.trigger(a,b,c,!0):void 0}});var ab=/<(?!area|br|col|embed|hr|img|input|link|meta|param)(([\w:]+)[^>]*)\/>/gi,bb=/<([\w:]+)/,cb=/<|&#?\w+;/,db=/<(?:script|style|link)/i,eb=/checked\s*(?:[^=]|=\s*.checked.)/i,fb=/^$|\/(?:java|ecma)script/i,gb=/^true\/(.*)/,hb=/^\s*<!(?:\[CDATA\[|--)|(?:\]\]|--)>\s*$/g,ib={option:[1,"<select multiple='multiple'>","</select>"],thead:[1,"<table>","</table>"],col:[2,"<table><colgroup>","</colgroup></table>"],tr:[2,"<table><tbody>","</tbody></table>"],td:[3,"<table><tbody><tr>","</tr></tbody></table>"],_default:[0,"",""]};ib.optgroup=ib.option,ib.tbody=ib.tfoot=ib.colgroup=ib.caption=ib.thead,ib.th=ib.td;function jb(a,b){return n.nodeName(a,"table")&&n.nodeName(11!==b.nodeType?b:b.firstChild,"tr")?a.getElementsByTagName("tbody")[0]||a.appendChild(a.ownerDocument.createElement("tbody")):a}function kb(a){return a.type=(null!==a.getAttribute("type"))+"/"+a.type,a}function lb(a){var b=gb.exec(a.type);return b?a.type=b[1]:a.removeAttribute("type"),a}function mb(a,b){for(var c=0,d=a.length;d>c;c++)L.set(a[c],"globalEval",!b||L.get(b[c],"globalEval"))}function nb(a,b){var c,d,e,f,g,h,i,j;if(1===b.nodeType){if(L.hasData(a)&&(f=L.access(a),g=L.set(b,f),j=f.events)){delete g.handle,g.events={};for(e in j)for(c=0,d=j[e].length;d>c;c++)n.event.add(b,e,j[e][c])}M.hasData(a)&&(h=M.access(a),i=n.extend({},h),M.set(b,i))}}function ob(a,b){var c=a.getElementsByTagName?a.getElementsByTagName(b||"*"):a.querySelectorAll?a.querySelectorAll(b||"*"):[];return void 0===b||b&&n.nodeName(a,b)?n.merge([a],c):c}function pb(a,b){var c=b.nodeName.toLowerCase();"input"===c&&T.test(a.type)?b.checked=a.checked:("input"===c||"textarea"===c)&&(b.defaultValue=a.defaultValue)}n.extend({clone:function(a,b,c){var d,e,f,g,h=a.cloneNode(!0),i=n.contains(a.ownerDocument,a);if(!(k.noCloneChecked||1!==a.nodeType&&11!==a.nodeType||n.isXMLDoc(a)))for(g=ob(h),f=ob(a),d=0,e=f.length;e>d;d++)pb(f[d],g[d]);if(b)if(c)for(f=f||ob(a),g=g||ob(h),d=0,e=f.length;e>d;d++)nb(f[d],g[d]);else nb(a,h);return g=ob(h,"script"),g.length>0&&mb(g,!i&&ob(a,"script")),h},buildFragment:function(a,b,c,d){for(var e,f,g,h,i,j,k=b.createDocumentFragment(),l=[],m=0,o=a.length;o>m;m++)if(e=a[m],e||0===e)if("object"===n.type(e))n.merge(l,e.nodeType?[e]:e);else if(cb.test(e)){f=f||k.appendChild(b.createElement("div")),g=(bb.exec(e)||["",""])[1].toLowerCase(),h=ib[g]||ib._default,f.innerHTML=h[1]+e.replace(ab,"<$1></$2>")+h[2],j=h[0];while(j--)f=f.lastChild;n.merge(l,f.childNodes),f=k.firstChild,f.textContent=""}else l.push(b.createTextNode(e));k.textContent="",m=0;while(e=l[m++])if((!d||-1===n.inArray(e,d))&&(i=n.contains(e.ownerDocument,e),f=ob(k.appendChild(e),"script"),i&&mb(f),c)){j=0;while(e=f[j++])fb.test(e.type||"")&&c.push(e)}return k},cleanData:function(a){for(var b,c,d,e,f=n.event.special,g=0;void 0!==(c=a[g]);g++){if(n.acceptData(c)&&(e=c[L.expando],e&&(b=L.cache[e]))){if(b.events)for(d in b.events)f[d]?n.event.remove(c,d):n.removeEvent(c,d,b.handle);L.cache[e]&&delete L.cache[e]}delete M.cache[c[M.expando]]}}}),n.fn.extend({text:function(a){return J(this,function(a){return void 0===a?n.text(this):this.empty().each(function(){(1===this.nodeType||11===this.nodeType||9===this.nodeType)&&(this.textContent=a)})},null,a,arguments.length)},append:function(){return this.domManip(arguments,function(a){if(1===this.nodeType||11===this.nodeType||9===this.nodeType){var b=jb(this,a);b.appendChild(a)}})},prepend:function(){return this.domManip(arguments,function(a){if(1===this.nodeType||11===this.nodeType||9===this.nodeType){var b=jb(this,a);b.insertBefore(a,b.firstChild)}})},before:function(){return this.domManip(arguments,function(a){this.parentNode&&this.parentNode.insertBefore(a,this)})},after:function(){return this.domManip(arguments,function(a){this.parentNode&&this.parentNode.insertBefore(a,this.nextSibling)})},remove:function(a,b){for(var c,d=a?n.filter(a,this):this,e=0;null!=(c=d[e]);e++)b||1!==c.nodeType||n.cleanData(ob(c)),c.parentNode&&(b&&n.contains(c.ownerDocument,c)&&mb(ob(c,"script")),c.parentNode.removeChild(c));return this},empty:function(){for(var a,b=0;null!=(a=this[b]);b++)1===a.nodeType&&(n.cleanData(ob(a,!1)),a.textContent="");return this},clone:function(a,b){return a=null==a?!1:a,b=null==b?a:b,this.map(function(){return n.clone(this,a,b)})},html:function(a){return J(this,function(a){var b=this[0]||{},c=0,d=this.length;if(void 0===a&&1===b.nodeType)return b.innerHTML;if("string"==typeof a&&!db.test(a)&&!ib[(bb.exec(a)||["",""])[1].toLowerCase()]){a=a.replace(ab,"<$1></$2>");try{for(;d>c;c++)b=this[c]||{},1===b.nodeType&&(n.cleanData(ob(b,!1)),b.innerHTML=a);b=0}catch(e){}}b&&this.empty().append(a)},null,a,arguments.length)},replaceWith:function(){var a=arguments[0];return this.domManip(arguments,function(b){a=this.parentNode,n.cleanData(ob(this)),a&&a.replaceChild(b,this)}),a&&(a.length||a.nodeType)?this:this.remove()},detach:function(a){return this.remove(a,!0)},domManip:function(a,b){a=e.apply([],a);var c,d,f,g,h,i,j=0,l=this.length,m=this,o=l-1,p=a[0],q=n.isFunction(p);if(q||l>1&&"string"==typeof p&&!k.checkClone&&eb.test(p))return this.each(function(c){var d=m.eq(c);q&&(a[0]=p.call(this,c,d.html())),d.domManip(a,b)});if(l&&(c=n.buildFragment(a,this[0].ownerDocument,!1,this),d=c.firstChild,1===c.childNodes.length&&(c=d),d)){for(f=n.map(ob(c,"script"),kb),g=f.length;l>j;j++)h=c,j!==o&&(h=n.clone(h,!0,!0),g&&n.merge(f,ob(h,"script"))),b.call(this[j],h,j);if(g)for(i=f[f.length-1].ownerDocument,n.map(f,lb),j=0;g>j;j++)h=f[j],fb.test(h.type||"")&&!L.access(h,"globalEval")&&n.contains(i,h)&&(h.assets?n._evalUrl&&n._evalUrl(h.assets):n.globalEval(h.textContent.replace(hb,"")))}return this}}),n.each({appendTo:"append",prependTo:"prepend",insertBefore:"before",insertAfter:"after",replaceAll:"replaceWith"},function(a,b){n.fn[a]=function(a){for(var c,d=[],e=n(a),g=e.length-1,h=0;g>=h;h++)c=h===g?this:this.clone(!0),n(e[h])[b](c),f.apply(d,c.get());return this.pushStack(d)}});var qb,rb={};function sb(b,c){var d,e=n(c.createElement(b)).appendTo(c.body),f=a.getDefaultComputedStyle&&(d=a.getDefaultComputedStyle(e[0]))?d.display:n.css(e[0],"display");return e.detach(),f}function tb(a){var b=l,c=rb[a];return c||(c=sb(a,b),"none"!==c&&c||(qb=(qb||n("<iframe frameborder='0' width='0' height='0'/>")).appendTo(b.documentElement),b=qb[0].contentDocument,b.write(),b.close(),c=sb(a,b),qb.detach()),rb[a]=c),c}var ub=/^margin/,vb=new RegExp("^("+Q+")(?!px)[a-z%]+$","i"),wb=function(a){return a.ownerDocument.defaultView.getComputedStyle(a,null)};function xb(a,b,c){var d,e,f,g,h=a.style;return c=c||wb(a),c&&(g=c.getPropertyValue(b)||c[b]),c&&(""!==g||n.contains(a.ownerDocument,a)||(g=n.style(a,b)),vb.test(g)&&ub.test(b)&&(d=h.width,e=h.minWidth,f=h.maxWidth,h.minWidth=h.maxWidth=h.width=g,g=c.width,h.width=d,h.minWidth=e,h.maxWidth=f)),void 0!==g?g+"":g}function yb(a,b){return{get:function(){return a()?void delete this.get:(this.get=b).apply(this,arguments)}}}!function(){var b,c,d=l.documentElement,e=l.createElement("div"),f=l.createElement("div");if(f.style){f.style.backgroundClip="content-box",f.cloneNode(!0).style.backgroundClip="",k.clearCloneStyle="content-box"===f.style.backgroundClip,e.style.cssText="border:0;width:0;height:0;top:0;left:-9999px;margin-top:1px;position:absolute",e.appendChild(f);function g(){f.style.cssText="-webkit-box-sizing:border-box;-moz-box-sizing:border-box;box-sizing:border-box;display:block;margin-top:1%;top:1%;border:1px;padding:1px;width:4px;position:absolute",f.innerHTML="",d.appendChild(e);var g=a.getComputedStyle(f,null);b="1%"!==g.top,c="4px"===g.width,d.removeChild(e)}a.getComputedStyle&&n.extend(k,{pixelPosition:function(){return g(),b},boxSizingReliable:function(){return null==c&&g(),c},reliableMarginRight:function(){var b,c=f.appendChild(l.createElement("div"));return c.style.cssText=f.style.cssText="-webkit-box-sizing:content-box;-moz-box-sizing:content-box;box-sizing:content-box;display:block;margin:0;border:0;padding:0",c.style.marginRight=c.style.width="0",f.style.width="1px",d.appendChild(e),b=!parseFloat(a.getComputedStyle(c,null).marginRight),d.removeChild(e),b}})}}(),n.swap=function(a,b,c,d){var e,f,g={};for(f in b)g[f]=a.style[f],a.style[f]=b[f];e=c.apply(a,d||[]);for(f in b)a.style[f]=g[f];return e};var zb=/^(none|table(?!-c[ea]).+)/,Ab=new RegExp("^("+Q+")(.*)$","i"),Bb=new RegExp("^([+-])=("+Q+")","i"),Cb={position:"absolute",visibility:"hidden",display:"block"},Db={letterSpacing:"0",fontWeight:"400"},Eb=["Webkit","O","Moz","ms"];function Fb(a,b){if(b in a)return b;var c=b[0].toUpperCase()+b.slice(1),d=b,e=Eb.length;while(e--)if(b=Eb[e]+c,b in a)return b;return d}function Gb(a,b,c){var d=Ab.exec(b);return d?Math.max(0,d[1]-(c||0))+(d[2]||"px"):b}function Hb(a,b,c,d,e){for(var f=c===(d?"border":"content")?4:"width"===b?1:0,g=0;4>f;f+=2)"margin"===c&&(g+=n.css(a,c+R[f],!0,e)),d?("content"===c&&(g-=n.css(a,"padding"+R[f],!0,e)),"margin"!==c&&(g-=n.css(a,"border"+R[f]+"Width",!0,e))):(g+=n.css(a,"padding"+R[f],!0,e),"padding"!==c&&(g+=n.css(a,"border"+R[f]+"Width",!0,e)));return g}function Ib(a,b,c){var d=!0,e="width"===b?a.offsetWidth:a.offsetHeight,f=wb(a),g="border-box"===n.css(a,"boxSizing",!1,f);if(0>=e||null==e){if(e=xb(a,b,f),(0>e||null==e)&&(e=a.style[b]),vb.test(e))return e;d=g&&(k.boxSizingReliable()||e===a.style[b]),e=parseFloat(e)||0}return e+Hb(a,b,c||(g?"border":"content"),d,f)+"px"}function Jb(a,b){for(var c,d,e,f=[],g=0,h=a.length;h>g;g++)d=a[g],d.style&&(f[g]=L.get(d,"olddisplay"),c=d.style.display,b?(f[g]||"none"!==c||(d.style.display=""),""===d.style.display&&S(d)&&(f[g]=L.access(d,"olddisplay",tb(d.nodeName)))):(e=S(d),"none"===c&&e||L.set(d,"olddisplay",e?c:n.css(d,"display"))));for(g=0;h>g;g++)d=a[g],d.style&&(b&&"none"!==d.style.display&&""!==d.style.display||(d.style.display=b?f[g]||"":"none"));return a}n.extend({cssHooks:{opacity:{get:function(a,b){if(b){var c=xb(a,"opacity");return""===c?"1":c}}}},cssNumber:{columnCount:!0,fillOpacity:!0,flexGrow:!0,flexShrink:!0,fontWeight:!0,lineHeight:!0,opacity:!0,order:!0,orphans:!0,widows:!0,zIndex:!0,zoom:!0},cssProps:{"float":"cssFloat"},style:function(a,b,c,d){if(a&&3!==a.nodeType&&8!==a.nodeType&&a.style){var e,f,g,h=n.camelCase(b),i=a.style;return b=n.cssProps[h]||(n.cssProps[h]=Fb(i,h)),g=n.cssHooks[b]||n.cssHooks[h],void 0===c?g&&"get"in g&&void 0!==(e=g.get(a,!1,d))?e:i[b]:(f=typeof c,"string"===f&&(e=Bb.exec(c))&&(c=(e[1]+1)*e[2]+parseFloat(n.css(a,b)),f="number"),null!=c&&c===c&&("number"!==f||n.cssNumber[h]||(c+="px"),k.clearCloneStyle||""!==c||0!==b.indexOf("background")||(i[b]="inherit"),g&&"set"in g&&void 0===(c=g.set(a,c,d))||(i[b]=c)),void 0)}},css:function(a,b,c,d){var e,f,g,h=n.camelCase(b);return b=n.cssProps[h]||(n.cssProps[h]=Fb(a.style,h)),g=n.cssHooks[b]||n.cssHooks[h],g&&"get"in g&&(e=g.get(a,!0,c)),void 0===e&&(e=xb(a,b,d)),"normal"===e&&b in Db&&(e=Db[b]),""===c||c?(f=parseFloat(e),c===!0||n.isNumeric(f)?f||0:e):e}}),n.each(["height","width"],function(a,b){n.cssHooks[b]={get:function(a,c,d){return c?zb.test(n.css(a,"display"))&&0===a.offsetWidth?n.swap(a,Cb,function(){return Ib(a,b,d)}):Ib(a,b,d):void 0},set:function(a,c,d){var e=d&&wb(a);return Gb(a,c,d?Hb(a,b,d,"border-box"===n.css(a,"boxSizing",!1,e),e):0)}}}),n.cssHooks.marginRight=yb(k.reliableMarginRight,function(a,b){return b?n.swap(a,{display:"inline-block"},xb,[a,"marginRight"]):void 0}),n.each({margin:"",padding:"",border:"Width"},function(a,b){n.cssHooks[a+b]={expand:function(c){for(var d=0,e={},f="string"==typeof c?c.split(" "):[c];4>d;d++)e[a+R[d]+b]=f[d]||f[d-2]||f[0];return e}},ub.test(a)||(n.cssHooks[a+b].set=Gb)}),n.fn.extend({css:function(a,b){return J(this,function(a,b,c){var d,e,f={},g=0;if(n.isArray(b)){for(d=wb(a),e=b.length;e>g;g++)f[b[g]]=n.css(a,b[g],!1,d);return f}return void 0!==c?n.style(a,b,c):n.css(a,b)},a,b,arguments.length>1)},show:function(){return Jb(this,!0)},hide:function(){return Jb(this)},toggle:function(a){return"boolean"==typeof a?a?this.show():this.hide():this.each(function(){S(this)?n(this).show():n(this).hide()})}});function Kb(a,b,c,d,e){return new Kb.prototype.init(a,b,c,d,e)}n.Tween=Kb,Kb.prototype={constructor:Kb,init:function(a,b,c,d,e,f){this.elem=a,this.prop=c,this.easing=e||"swing",this.options=b,this.start=this.now=this.cur(),this.end=d,this.unit=f||(n.cssNumber[c]?"":"px")},cur:function(){var a=Kb.propHooks[this.prop];return a&&a.get?a.get(this):Kb.propHooks._default.get(this)},run:function(a){var b,c=Kb.propHooks[this.prop];return this.pos=b=this.options.duration?n.easing[this.easing](a,this.options.duration*a,0,1,this.options.duration):a,this.now=(this.end-this.start)*b+this.start,this.options.step&&this.options.step.call(this.elem,this.now,this),c&&c.set?c.set(this):Kb.propHooks._default.set(this),this}},Kb.prototype.init.prototype=Kb.prototype,Kb.propHooks={_default:{get:function(a){var b;return null==a.elem[a.prop]||a.elem.style&&null!=a.elem.style[a.prop]?(b=n.css(a.elem,a.prop,""),b&&"auto"!==b?b:0):a.elem[a.prop]},set:function(a){n.fx.step[a.prop]?n.fx.step[a.prop](a):a.elem.style&&(null!=a.elem.style[n.cssProps[a.prop]]||n.cssHooks[a.prop])?n.style(a.elem,a.prop,a.now+a.unit):a.elem[a.prop]=a.now}}},Kb.propHooks.scrollTop=Kb.propHooks.scrollLeft={set:function(a){a.elem.nodeType&&a.elem.parentNode&&(a.elem[a.prop]=a.now)}},n.easing={linear:function(a){return a},swing:function(a){return.5-Math.cos(a*Math.PI)/2}},n.fx=Kb.prototype.init,n.fx.step={};var Lb,Mb,Nb=/^(?:toggle|show|hide)$/,Ob=new RegExp("^(?:([+-])=|)("+Q+")([a-z%]*)$","i"),Pb=/queueHooks$/,Qb=[Vb],Rb={"*":[function(a,b){var c=this.createTween(a,b),d=c.cur(),e=Ob.exec(b),f=e&&e[3]||(n.cssNumber[a]?"":"px"),g=(n.cssNumber[a]||"px"!==f&&+d)&&Ob.exec(n.css(c.elem,a)),h=1,i=20;if(g&&g[3]!==f){f=f||g[3],e=e||[],g=+d||1;do h=h||".5",g/=h,n.style(c.elem,a,g+f);while(h!==(h=c.cur()/d)&&1!==h&&--i)}return e&&(g=c.start=+g||+d||0,c.unit=f,c.end=e[1]?g+(e[1]+1)*e[2]:+e[2]),c}]};function Sb(){return setTimeout(function(){Lb=void 0}),Lb=n.now()}function Tb(a,b){var c,d=0,e={height:a};for(b=b?1:0;4>d;d+=2-b)c=R[d],e["margin"+c]=e["padding"+c]=a;return b&&(e.opacity=e.width=a),e}function Ub(a,b,c){for(var d,e=(Rb[b]||[]).concat(Rb["*"]),f=0,g=e.length;g>f;f++)if(d=e[f].call(c,b,a))return d}function Vb(a,b,c){var d,e,f,g,h,i,j,k,l=this,m={},o=a.style,p=a.nodeType&&S(a),q=L.get(a,"fxshow");c.queue||(h=n._queueHooks(a,"fx"),null==h.unqueued&&(h.unqueued=0,i=h.empty.fire,h.empty.fire=function(){h.unqueued||i()}),h.unqueued++,l.always(function(){l.always(function(){h.unqueued--,n.queue(a,"fx").length||h.empty.fire()})})),1===a.nodeType&&("height"in b||"width"in b)&&(c.overflow=[o.overflow,o.overflowX,o.overflowY],j=n.css(a,"display"),k="none"===j?L.get(a,"olddisplay")||tb(a.nodeName):j,"inline"===k&&"none"===n.css(a,"float")&&(o.display="inline-block")),c.overflow&&(o.overflow="hidden",l.always(function(){o.overflow=c.overflow[0],o.overflowX=c.overflow[1],o.overflowY=c.overflow[2]}));for(d in b)if(e=b[d],Nb.exec(e)){if(delete b[d],f=f||"toggle"===e,e===(p?"hide":"show")){if("show"!==e||!q||void 0===q[d])continue;p=!0}m[d]=q&&q[d]||n.style(a,d)}else j=void 0;if(n.isEmptyObject(m))"inline"===("none"===j?tb(a.nodeName):j)&&(o.display=j);else{q?"hidden"in q&&(p=q.hidden):q=L.access(a,"fxshow",{}),f&&(q.hidden=!p),p?n(a).show():l.done(function(){n(a).hide()}),l.done(function(){var b;L.remove(a,"fxshow");for(b in m)n.style(a,b,m[b])});for(d in m)g=Ub(p?q[d]:0,d,l),d in q||(q[d]=g.start,p&&(g.end=g.start,g.start="width"===d||"height"===d?1:0))}}function Wb(a,b){var c,d,e,f,g;for(c in a)if(d=n.camelCase(c),e=b[d],f=a[c],n.isArray(f)&&(e=f[1],f=a[c]=f[0]),c!==d&&(a[d]=f,delete a[c]),g=n.cssHooks[d],g&&"expand"in g){f=g.expand(f),delete a[d];for(c in f)c in a||(a[c]=f[c],b[c]=e)}else b[d]=e}function Xb(a,b,c){var d,e,f=0,g=Qb.length,h=n.Deferred().always(function(){delete i.elem}),i=function(){if(e)return!1;for(var b=Lb||Sb(),c=Math.max(0,j.startTime+j.duration-b),d=c/j.duration||0,f=1-d,g=0,i=j.tweens.length;i>g;g++)j.tweens[g].run(f);return h.notifyWith(a,[j,f,c]),1>f&&i?c:(h.resolveWith(a,[j]),!1)},j=h.promise({elem:a,props:n.extend({},b),opts:n.extend(!0,{specialEasing:{}},c),originalProperties:b,originalOptions:c,startTime:Lb||Sb(),duration:c.duration,tweens:[],createTween:function(b,c){var d=n.Tween(a,j.opts,b,c,j.opts.specialEasing[b]||j.opts.easing);return j.tweens.push(d),d},stop:function(b){var c=0,d=b?j.tweens.length:0;if(e)return this;for(e=!0;d>c;c++)j.tweens[c].run(1);return b?h.resolveWith(a,[j,b]):h.rejectWith(a,[j,b]),this}}),k=j.props;for(Wb(k,j.opts.specialEasing);g>f;f++)if(d=Qb[f].call(j,a,k,j.opts))return d;return n.map(k,Ub,j),n.isFunction(j.opts.start)&&j.opts.start.call(a,j),n.fx.timer(n.extend(i,{elem:a,anim:j,queue:j.opts.queue})),j.progress(j.opts.progress).done(j.opts.done,j.opts.complete).fail(j.opts.fail).always(j.opts.always)}n.Animation=n.extend(Xb,{tweener:function(a,b){n.isFunction(a)?(b=a,a=["*"]):a=a.split(" ");for(var c,d=0,e=a.length;e>d;d++)c=a[d],Rb[c]=Rb[c]||[],Rb[c].unshift(b)},prefilter:function(a,b){b?Qb.unshift(a):Qb.push(a)}}),n.speed=function(a,b,c){var d=a&&"object"==typeof a?n.extend({},a):{complete:c||!c&&b||n.isFunction(a)&&a,duration:a,easing:c&&b||b&&!n.isFunction(b)&&b};return d.duration=n.fx.off?0:"number"==typeof d.duration?d.duration:d.duration in n.fx.speeds?n.fx.speeds[d.duration]:n.fx.speeds._default,(null==d.queue||d.queue===!0)&&(d.queue="fx"),d.old=d.complete,d.complete=function(){n.isFunction(d.old)&&d.old.call(this),d.queue&&n.dequeue(this,d.queue)},d},n.fn.extend({fadeTo:function(a,b,c,d){return this.filter(S).css("opacity",0).show().end().animate({opacity:b},a,c,d)},animate:function(a,b,c,d){var e=n.isEmptyObject(a),f=n.speed(b,c,d),g=function(){var b=Xb(this,n.extend({},a),f);(e||L.get(this,"finish"))&&b.stop(!0)};return g.finish=g,e||f.queue===!1?this.each(g):this.queue(f.queue,g)},stop:function(a,b,c){var d=function(a){var b=a.stop;delete a.stop,b(c)};return"string"!=typeof a&&(c=b,b=a,a=void 0),b&&a!==!1&&this.queue(a||"fx",[]),this.each(function(){var b=!0,e=null!=a&&a+"queueHooks",f=n.timers,g=L.get(this);if(e)g[e]&&g[e].stop&&d(g[e]);else for(e in g)g[e]&&g[e].stop&&Pb.test(e)&&d(g[e]);for(e=f.length;e--;)f[e].elem!==this||null!=a&&f[e].queue!==a||(f[e].anim.stop(c),b=!1,f.splice(e,1));(b||!c)&&n.dequeue(this,a)})},finish:function(a){return a!==!1&&(a=a||"fx"),this.each(function(){var b,c=L.get(this),d=c[a+"queue"],e=c[a+"queueHooks"],f=n.timers,g=d?d.length:0;for(c.finish=!0,n.queue(this,a,[]),e&&e.stop&&e.stop.call(this,!0),b=f.length;b--;)f[b].elem===this&&f[b].queue===a&&(f[b].anim.stop(!0),f.splice(b,1));for(b=0;g>b;b++)d[b]&&d[b].finish&&d[b].finish.call(this);delete c.finish})}}),n.each(["toggle","show","hide"],function(a,b){var c=n.fn[b];n.fn[b]=function(a,d,e){return null==a||"boolean"==typeof a?c.apply(this,arguments):this.animate(Tb(b,!0),a,d,e)}}),n.each({slideDown:Tb("show"),slideUp:Tb("hide"),slideToggle:Tb("toggle"),fadeIn:{opacity:"show"},fadeOut:{opacity:"hide"},fadeToggle:{opacity:"toggle"}},function(a,b){n.fn[a]=function(a,c,d){return this.animate(b,a,c,d)}}),n.timers=[],n.fx.tick=function(){var a,b=0,c=n.timers;for(Lb=n.now();b<c.length;b++)a=c[b],a()||c[b]!==a||c.splice(b--,1);c.length||n.fx.stop(),Lb=void 0},n.fx.timer=function(a){n.timers.push(a),a()?n.fx.start():n.timers.pop()},n.fx.interval=13,n.fx.start=function(){Mb||(Mb=setInterval(n.fx.tick,n.fx.interval))},n.fx.stop=function(){clearInterval(Mb),Mb=null},n.fx.speeds={slow:600,fast:200,_default:400},n.fn.delay=function(a,b){return a=n.fx?n.fx.speeds[a]||a:a,b=b||"fx",this.queue(b,function(b,c){var d=setTimeout(b,a);c.stop=function(){clearTimeout(d)}})},function(){var a=l.createElement("input"),b=l.createElement("select"),c=b.appendChild(l.createElement("option"));a.type="checkbox",k.checkOn=""!==a.value,k.optSelected=c.selected,b.disabled=!0,k.optDisabled=!c.disabled,a=l.createElement("input"),a.value="t",a.type="radio",k.radioValue="t"===a.value}();var Yb,Zb,$b=n.expr.attrHandle;n.fn.extend({attr:function(a,b){return J(this,n.attr,a,b,arguments.length>1)},removeAttr:function(a){return this.each(function(){n.removeAttr(this,a)})}}),n.extend({attr:function(a,b,c){var d,e,f=a.nodeType;if(a&&3!==f&&8!==f&&2!==f)return typeof a.getAttribute===U?n.prop(a,b,c):(1===f&&n.isXMLDoc(a)||(b=b.toLowerCase(),d=n.attrHooks[b]||(n.expr.match.bool.test(b)?Zb:Yb)),void 0===c?d&&"get"in d&&null!==(e=d.get(a,b))?e:(e=n.find.attr(a,b),null==e?void 0:e):null!==c?d&&"set"in d&&void 0!==(e=d.set(a,c,b))?e:(a.setAttribute(b,c+""),c):void n.removeAttr(a,b))
},removeAttr:function(a,b){var c,d,e=0,f=b&&b.match(E);if(f&&1===a.nodeType)while(c=f[e++])d=n.propFix[c]||c,n.expr.match.bool.test(c)&&(a[d]=!1),a.removeAttribute(c)},attrHooks:{type:{set:function(a,b){if(!k.radioValue&&"radio"===b&&n.nodeName(a,"input")){var c=a.value;return a.setAttribute("type",b),c&&(a.value=c),b}}}}}),Zb={set:function(a,b,c){return b===!1?n.removeAttr(a,c):a.setAttribute(c,c),c}},n.each(n.expr.match.bool.source.match(/\w+/g),function(a,b){var c=$b[b]||n.find.attr;$b[b]=function(a,b,d){var e,f;return d||(f=$b[b],$b[b]=e,e=null!=c(a,b,d)?b.toLowerCase():null,$b[b]=f),e}});var _b=/^(?:input|select|textarea|button)$/i;n.fn.extend({prop:function(a,b){return J(this,n.prop,a,b,arguments.length>1)},removeProp:function(a){return this.each(function(){delete this[n.propFix[a]||a]})}}),n.extend({propFix:{"for":"htmlFor","class":"className"},prop:function(a,b,c){var d,e,f,g=a.nodeType;if(a&&3!==g&&8!==g&&2!==g)return f=1!==g||!n.isXMLDoc(a),f&&(b=n.propFix[b]||b,e=n.propHooks[b]),void 0!==c?e&&"set"in e&&void 0!==(d=e.set(a,c,b))?d:a[b]=c:e&&"get"in e&&null!==(d=e.get(a,b))?d:a[b]},propHooks:{tabIndex:{get:function(a){return a.hasAttribute("tabindex")||_b.test(a.nodeName)||a.href?a.tabIndex:-1}}}}),k.optSelected||(n.propHooks.selected={get:function(a){var b=a.parentNode;return b&&b.parentNode&&b.parentNode.selectedIndex,null}}),n.each(["tabIndex","readOnly","maxLength","cellSpacing","cellPadding","rowSpan","colSpan","useMap","frameBorder","contentEditable"],function(){n.propFix[this.toLowerCase()]=this});var ac=/[\t\r\n\f]/g;n.fn.extend({addClass:function(a){var b,c,d,e,f,g,h="string"==typeof a&&a,i=0,j=this.length;if(n.isFunction(a))return this.each(function(b){n(this).addClass(a.call(this,b,this.className))});if(h)for(b=(a||"").match(E)||[];j>i;i++)if(c=this[i],d=1===c.nodeType&&(c.className?(" "+c.className+" ").replace(ac," "):" ")){f=0;while(e=b[f++])d.indexOf(" "+e+" ")<0&&(d+=e+" ");g=n.trim(d),c.className!==g&&(c.className=g)}return this},removeClass:function(a){var b,c,d,e,f,g,h=0===arguments.length||"string"==typeof a&&a,i=0,j=this.length;if(n.isFunction(a))return this.each(function(b){n(this).removeClass(a.call(this,b,this.className))});if(h)for(b=(a||"").match(E)||[];j>i;i++)if(c=this[i],d=1===c.nodeType&&(c.className?(" "+c.className+" ").replace(ac," "):"")){f=0;while(e=b[f++])while(d.indexOf(" "+e+" ")>=0)d=d.replace(" "+e+" "," ");g=a?n.trim(d):"",c.className!==g&&(c.className=g)}return this},toggleClass:function(a,b){var c=typeof a;return"boolean"==typeof b&&"string"===c?b?this.addClass(a):this.removeClass(a):this.each(n.isFunction(a)?function(c){n(this).toggleClass(a.call(this,c,this.className,b),b)}:function(){if("string"===c){var b,d=0,e=n(this),f=a.match(E)||[];while(b=f[d++])e.hasClass(b)?e.removeClass(b):e.addClass(b)}else(c===U||"boolean"===c)&&(this.className&&L.set(this,"__className__",this.className),this.className=this.className||a===!1?"":L.get(this,"__className__")||"")})},hasClass:function(a){for(var b=" "+a+" ",c=0,d=this.length;d>c;c++)if(1===this[c].nodeType&&(" "+this[c].className+" ").replace(ac," ").indexOf(b)>=0)return!0;return!1}});var bc=/\r/g;n.fn.extend({val:function(a){var b,c,d,e=this[0];{if(arguments.length)return d=n.isFunction(a),this.each(function(c){var e;1===this.nodeType&&(e=d?a.call(this,c,n(this).val()):a,null==e?e="":"number"==typeof e?e+="":n.isArray(e)&&(e=n.map(e,function(a){return null==a?"":a+""})),b=n.valHooks[this.type]||n.valHooks[this.nodeName.toLowerCase()],b&&"set"in b&&void 0!==b.set(this,e,"value")||(this.value=e))});if(e)return b=n.valHooks[e.type]||n.valHooks[e.nodeName.toLowerCase()],b&&"get"in b&&void 0!==(c=b.get(e,"value"))?c:(c=e.value,"string"==typeof c?c.replace(bc,""):null==c?"":c)}}}),n.extend({valHooks:{option:{get:function(a){var b=n.find.attr(a,"value");return null!=b?b:n.trim(n.text(a))}},select:{get:function(a){for(var b,c,d=a.options,e=a.selectedIndex,f="select-one"===a.type||0>e,g=f?null:[],h=f?e+1:d.length,i=0>e?h:f?e:0;h>i;i++)if(c=d[i],!(!c.selected&&i!==e||(k.optDisabled?c.disabled:null!==c.getAttribute("disabled"))||c.parentNode.disabled&&n.nodeName(c.parentNode,"optgroup"))){if(b=n(c).val(),f)return b;g.push(b)}return g},set:function(a,b){var c,d,e=a.options,f=n.makeArray(b),g=e.length;while(g--)d=e[g],(d.selected=n.inArray(d.value,f)>=0)&&(c=!0);return c||(a.selectedIndex=-1),f}}}}),n.each(["radio","checkbox"],function(){n.valHooks[this]={set:function(a,b){return n.isArray(b)?a.checked=n.inArray(n(a).val(),b)>=0:void 0}},k.checkOn||(n.valHooks[this].get=function(a){return null===a.getAttribute("value")?"on":a.value})}),n.each("blur focus focusin focusout load resize scroll unload click dblclick mousedown mouseup mousemove mouseover mouseout mouseenter mouseleave change select submit keydown keypress keyup error contextmenu".split(" "),function(a,b){n.fn[b]=function(a,c){return arguments.length>0?this.on(b,null,a,c):this.trigger(b)}}),n.fn.extend({hover:function(a,b){return this.mouseenter(a).mouseleave(b||a)},bind:function(a,b,c){return this.on(a,null,b,c)},unbind:function(a,b){return this.off(a,null,b)},delegate:function(a,b,c,d){return this.on(b,a,c,d)},undelegate:function(a,b,c){return 1===arguments.length?this.off(a,"**"):this.off(b,a||"**",c)}});var cc=n.now(),dc=/\?/;n.parseJSON=function(a){return JSON.parse(a+"")},n.parseXML=function(a){var b,c;if(!a||"string"!=typeof a)return null;try{c=new DOMParser,b=c.parseFromString(a,"text/xml")}catch(d){b=void 0}return(!b||b.getElementsByTagName("parsererror").length)&&n.error("Invalid XML: "+a),b};var ec,fc,gc=/#.*$/,hc=/([?&])_=[^&]*/,ic=/^(.*?):[ \t]*([^\r\n]*)$/gm,jc=/^(?:about|app|app-storage|.+-extension|file|res|widget):$/,kc=/^(?:GET|HEAD)$/,lc=/^\/\//,mc=/^([\w.+-]+:)(?:\/\/(?:[^\/?#]*@|)([^\/?#:]*)(?::(\d+)|)|)/,nc={},oc={},pc="*/".concat("*");try{fc=location.href}catch(qc){fc=l.createElement("a"),fc.href="",fc=fc.href}ec=mc.exec(fc.toLowerCase())||[];function rc(a){return function(b,c){"string"!=typeof b&&(c=b,b="*");var d,e=0,f=b.toLowerCase().match(E)||[];if(n.isFunction(c))while(d=f[e++])"+"===d[0]?(d=d.slice(1)||"*",(a[d]=a[d]||[]).unshift(c)):(a[d]=a[d]||[]).push(c)}}function sc(a,b,c,d){var e={},f=a===oc;function g(h){var i;return e[h]=!0,n.each(a[h]||[],function(a,h){var j=h(b,c,d);return"string"!=typeof j||f||e[j]?f?!(i=j):void 0:(b.dataTypes.unshift(j),g(j),!1)}),i}return g(b.dataTypes[0])||!e["*"]&&g("*")}function tc(a,b){var c,d,e=n.ajaxSettings.flatOptions||{};for(c in b)void 0!==b[c]&&((e[c]?a:d||(d={}))[c]=b[c]);return d&&n.extend(!0,a,d),a}function uc(a,b,c){var d,e,f,g,h=a.contents,i=a.dataTypes;while("*"===i[0])i.shift(),void 0===d&&(d=a.mimeType||b.getResponseHeader("Content-Type"));if(d)for(e in h)if(h[e]&&h[e].test(d)){i.unshift(e);break}if(i[0]in c)f=i[0];else{for(e in c){if(!i[0]||a.converters[e+" "+i[0]]){f=e;break}g||(g=e)}f=f||g}return f?(f!==i[0]&&i.unshift(f),c[f]):void 0}function vc(a,b,c,d){var e,f,g,h,i,j={},k=a.dataTypes.slice();if(k[1])for(g in a.converters)j[g.toLowerCase()]=a.converters[g];f=k.shift();while(f)if(a.responseFields[f]&&(c[a.responseFields[f]]=b),!i&&d&&a.dataFilter&&(b=a.dataFilter(b,a.dataType)),i=f,f=k.shift())if("*"===f)f=i;else if("*"!==i&&i!==f){if(g=j[i+" "+f]||j["* "+f],!g)for(e in j)if(h=e.split(" "),h[1]===f&&(g=j[i+" "+h[0]]||j["* "+h[0]])){g===!0?g=j[e]:j[e]!==!0&&(f=h[0],k.unshift(h[1]));break}if(g!==!0)if(g&&a["throws"])b=g(b);else try{b=g(b)}catch(l){return{state:"parsererror",error:g?l:"No conversion from "+i+" to "+f}}}return{state:"success",data:b}}n.extend({active:0,lastModified:{},etag:{},ajaxSettings:{url:fc,type:"GET",isLocal:jc.test(ec[1]),global:!0,processData:!0,async:!0,contentType:"application/x-www-form-urlencoded; charset=UTF-8",accepts:{"*":pc,text:"text/plain",html:"text/html",xml:"application/xml, text/xml",json:"application/json, text/javascript"},contents:{xml:/xml/,html:/html/,json:/json/},responseFields:{xml:"responseXML",text:"responseText",json:"responseJSON"},converters:{"* text":String,"text html":!0,"text json":n.parseJSON,"text xml":n.parseXML},flatOptions:{url:!0,context:!0}},ajaxSetup:function(a,b){return b?tc(tc(a,n.ajaxSettings),b):tc(n.ajaxSettings,a)},ajaxPrefilter:rc(nc),ajaxTransport:rc(oc),ajax:function(a,b){"object"==typeof a&&(b=a,a=void 0),b=b||{};var c,d,e,f,g,h,i,j,k=n.ajaxSetup({},b),l=k.context||k,m=k.context&&(l.nodeType||l.jquery)?n(l):n.event,o=n.Deferred(),p=n.Callbacks("once memory"),q=k.statusCode||{},r={},s={},t=0,u="canceled",v={readyState:0,getResponseHeader:function(a){var b;if(2===t){if(!f){f={};while(b=ic.exec(e))f[b[1].toLowerCase()]=b[2]}b=f[a.toLowerCase()]}return null==b?null:b},getAllResponseHeaders:function(){return 2===t?e:null},setRequestHeader:function(a,b){var c=a.toLowerCase();return t||(a=s[c]=s[c]||a,r[a]=b),this},overrideMimeType:function(a){return t||(k.mimeType=a),this},statusCode:function(a){var b;if(a)if(2>t)for(b in a)q[b]=[q[b],a[b]];else v.always(a[v.status]);return this},abort:function(a){var b=a||u;return c&&c.abort(b),x(0,b),this}};if(o.promise(v).complete=p.add,v.success=v.done,v.error=v.fail,k.url=((a||k.url||fc)+"").replace(gc,"").replace(lc,ec[1]+"//"),k.type=b.method||b.type||k.method||k.type,k.dataTypes=n.trim(k.dataType||"*").toLowerCase().match(E)||[""],null==k.crossDomain&&(h=mc.exec(k.url.toLowerCase()),k.crossDomain=!(!h||h[1]===ec[1]&&h[2]===ec[2]&&(h[3]||("http:"===h[1]?"80":"443"))===(ec[3]||("http:"===ec[1]?"80":"443")))),k.data&&k.processData&&"string"!=typeof k.data&&(k.data=n.param(k.data,k.traditional)),sc(nc,k,b,v),2===t)return v;i=k.global,i&&0===n.active++&&n.event.trigger("ajaxStart"),k.type=k.type.toUpperCase(),k.hasContent=!kc.test(k.type),d=k.url,k.hasContent||(k.data&&(d=k.url+=(dc.test(d)?"&":"?")+k.data,delete k.data),k.cache===!1&&(k.url=hc.test(d)?d.replace(hc,"$1_="+cc++):d+(dc.test(d)?"&":"?")+"_="+cc++)),k.ifModified&&(n.lastModified[d]&&v.setRequestHeader("If-Modified-Since",n.lastModified[d]),n.etag[d]&&v.setRequestHeader("If-None-Match",n.etag[d])),(k.data&&k.hasContent&&k.contentType!==!1||b.contentType)&&v.setRequestHeader("Content-Type",k.contentType),v.setRequestHeader("Accept",k.dataTypes[0]&&k.accepts[k.dataTypes[0]]?k.accepts[k.dataTypes[0]]+("*"!==k.dataTypes[0]?", "+pc+"; q=0.01":""):k.accepts["*"]);for(j in k.headers)v.setRequestHeader(j,k.headers[j]);if(k.beforeSend&&(k.beforeSend.call(l,v,k)===!1||2===t))return v.abort();u="abort";for(j in{success:1,error:1,complete:1})v[j](k[j]);if(c=sc(oc,k,b,v)){v.readyState=1,i&&m.trigger("ajaxSend",[v,k]),k.async&&k.timeout>0&&(g=setTimeout(function(){v.abort("timeout")},k.timeout));try{t=1,c.send(r,x)}catch(w){if(!(2>t))throw w;x(-1,w)}}else x(-1,"No Transport");function x(a,b,f,h){var j,r,s,u,w,x=b;2!==t&&(t=2,g&&clearTimeout(g),c=void 0,e=h||"",v.readyState=a>0?4:0,j=a>=200&&300>a||304===a,f&&(u=uc(k,v,f)),u=vc(k,u,v,j),j?(k.ifModified&&(w=v.getResponseHeader("Last-Modified"),w&&(n.lastModified[d]=w),w=v.getResponseHeader("etag"),w&&(n.etag[d]=w)),204===a||"HEAD"===k.type?x="nocontent":304===a?x="notmodified":(x=u.state,r=u.data,s=u.error,j=!s)):(s=x,(a||!x)&&(x="error",0>a&&(a=0))),v.status=a,v.statusText=(b||x)+"",j?o.resolveWith(l,[r,x,v]):o.rejectWith(l,[v,x,s]),v.statusCode(q),q=void 0,i&&m.trigger(j?"ajaxSuccess":"ajaxError",[v,k,j?r:s]),p.fireWith(l,[v,x]),i&&(m.trigger("ajaxComplete",[v,k]),--n.active||n.event.trigger("ajaxStop")))}return v},getJSON:function(a,b,c){return n.get(a,b,c,"json")},getScript:function(a,b){return n.get(a,void 0,b,"script")}}),n.each(["get","post"],function(a,b){n[b]=function(a,c,d,e){return n.isFunction(c)&&(e=e||d,d=c,c=void 0),n.ajax({url:a,type:b,dataType:e,data:c,success:d})}}),n.each(["ajaxStart","ajaxStop","ajaxComplete","ajaxError","ajaxSuccess","ajaxSend"],function(a,b){n.fn[b]=function(a){return this.on(b,a)}}),n._evalUrl=function(a){return n.ajax({url:a,type:"GET",dataType:"script",async:!1,global:!1,"throws":!0})},n.fn.extend({wrapAll:function(a){var b;return n.isFunction(a)?this.each(function(b){n(this).wrapAll(a.call(this,b))}):(this[0]&&(b=n(a,this[0].ownerDocument).eq(0).clone(!0),this[0].parentNode&&b.insertBefore(this[0]),b.map(function(){var a=this;while(a.firstElementChild)a=a.firstElementChild;return a}).append(this)),this)},wrapInner:function(a){return this.each(n.isFunction(a)?function(b){n(this).wrapInner(a.call(this,b))}:function(){var b=n(this),c=b.contents();c.length?c.wrapAll(a):b.append(a)})},wrap:function(a){var b=n.isFunction(a);return this.each(function(c){n(this).wrapAll(b?a.call(this,c):a)})},unwrap:function(){return this.parent().each(function(){n.nodeName(this,"body")||n(this).replaceWith(this.childNodes)}).end()}}),n.expr.filters.hidden=function(a){return a.offsetWidth<=0&&a.offsetHeight<=0},n.expr.filters.visible=function(a){return!n.expr.filters.hidden(a)};var wc=/%20/g,xc=/\[\]$/,yc=/\r?\n/g,zc=/^(?:submit|button|image|reset|file)$/i,Ac=/^(?:input|select|textarea|keygen)/i;function Bc(a,b,c,d){var e;if(n.isArray(b))n.each(b,function(b,e){c||xc.test(a)?d(a,e):Bc(a+"["+("object"==typeof e?b:"")+"]",e,c,d)});else if(c||"object"!==n.type(b))d(a,b);else for(e in b)Bc(a+"["+e+"]",b[e],c,d)}n.param=function(a,b){var c,d=[],e=function(a,b){b=n.isFunction(b)?b():null==b?"":b,d[d.length]=encodeURIComponent(a)+"="+encodeURIComponent(b)};if(void 0===b&&(b=n.ajaxSettings&&n.ajaxSettings.traditional),n.isArray(a)||a.jquery&&!n.isPlainObject(a))n.each(a,function(){e(this.name,this.value)});else for(c in a)Bc(c,a[c],b,e);return d.join("&").replace(wc,"+")},n.fn.extend({serialize:function(){return n.param(this.serializeArray())},serializeArray:function(){return this.map(function(){var a=n.prop(this,"elements");return a?n.makeArray(a):this}).filter(function(){var a=this.type;return this.name&&!n(this).is(":disabled")&&Ac.test(this.nodeName)&&!zc.test(a)&&(this.checked||!T.test(a))}).map(function(a,b){var c=n(this).val();return null==c?null:n.isArray(c)?n.map(c,function(a){return{name:b.name,value:a.replace(yc,"\r\n")}}):{name:b.name,value:c.replace(yc,"\r\n")}}).get()}}),n.ajaxSettings.xhr=function(){try{return new XMLHttpRequest}catch(a){}};var Cc=0,Dc={},Ec={0:200,1223:204},Fc=n.ajaxSettings.xhr();a.ActiveXObject&&n(a).on("unload",function(){for(var a in Dc)Dc[a]()}),k.cors=!!Fc&&"withCredentials"in Fc,k.ajax=Fc=!!Fc,n.ajaxTransport(function(a){var b;return k.cors||Fc&&!a.crossDomain?{send:function(c,d){var e,f=a.xhr(),g=++Cc;if(f.open(a.type,a.url,a.async,a.username,a.password),a.xhrFields)for(e in a.xhrFields)f[e]=a.xhrFields[e];a.mimeType&&f.overrideMimeType&&f.overrideMimeType(a.mimeType),a.crossDomain||c["X-Requested-With"]||(c["X-Requested-With"]="XMLHttpRequest");for(e in c)f.setRequestHeader(e,c[e]);b=function(a){return function(){b&&(delete Dc[g],b=f.onload=f.onerror=null,"abort"===a?f.abort():"error"===a?d(f.status,f.statusText):d(Ec[f.status]||f.status,f.statusText,"string"==typeof f.responseText?{text:f.responseText}:void 0,f.getAllResponseHeaders()))}},f.onload=b(),f.onerror=b("error"),b=Dc[g]=b("abort");try{f.send(a.hasContent&&a.data||null)}catch(h){if(b)throw h}},abort:function(){b&&b()}}:void 0}),n.ajaxSetup({accepts:{script:"text/javascript, application/javascript, application/ecmascript, application/x-ecmascript"},contents:{script:/(?:java|ecma)script/},converters:{"text script":function(a){return n.globalEval(a),a}}}),n.ajaxPrefilter("script",function(a){void 0===a.cache&&(a.cache=!1),a.crossDomain&&(a.type="GET")}),n.ajaxTransport("script",function(a){if(a.crossDomain){var b,c;return{send:function(d,e){b=n("<script>").prop({async:!0,charset:a.scriptCharset,assets:a.url}).on("load error",c=function(a){b.remove(),c=null,a&&e("error"===a.type?404:200,a.type)}),l.head.appendChild(b[0])},abort:function(){c&&c()}}}});var Gc=[],Hc=/(=)\?(?=&|$)|\?\?/;n.ajaxSetup({jsonp:"callback",jsonpCallback:function(){var a=Gc.pop()||n.expando+"_"+cc++;return this[a]=!0,a}}),n.ajaxPrefilter("json jsonp",function(b,c,d){var e,f,g,h=b.jsonp!==!1&&(Hc.test(b.url)?"url":"string"==typeof b.data&&!(b.contentType||"").indexOf("application/x-www-form-urlencoded")&&Hc.test(b.data)&&"data");return h||"jsonp"===b.dataTypes[0]?(e=b.jsonpCallback=n.isFunction(b.jsonpCallback)?b.jsonpCallback():b.jsonpCallback,h?b[h]=b[h].replace(Hc,"$1"+e):b.jsonp!==!1&&(b.url+=(dc.test(b.url)?"&":"?")+b.jsonp+"="+e),b.converters["script json"]=function(){return g||n.error(e+" was not called"),g[0]},b.dataTypes[0]="json",f=a[e],a[e]=function(){g=arguments},d.always(function(){a[e]=f,b[e]&&(b.jsonpCallback=c.jsonpCallback,Gc.push(e)),g&&n.isFunction(f)&&f(g[0]),g=f=void 0}),"script"):void 0}),n.parseHTML=function(a,b,c){if(!a||"string"!=typeof a)return null;"boolean"==typeof b&&(c=b,b=!1),b=b||l;var d=v.exec(a),e=!c&&[];return d?[b.createElement(d[1])]:(d=n.buildFragment([a],b,e),e&&e.length&&n(e).remove(),n.merge([],d.childNodes))};var Ic=n.fn.load;n.fn.load=function(a,b,c){if("string"!=typeof a&&Ic)return Ic.apply(this,arguments);var d,e,f,g=this,h=a.indexOf(" ");return h>=0&&(d=n.trim(a.slice(h)),a=a.slice(0,h)),n.isFunction(b)?(c=b,b=void 0):b&&"object"==typeof b&&(e="POST"),g.length>0&&n.ajax({url:a,type:e,dataType:"html",data:b}).done(function(a){f=arguments,g.html(d?n("<div>").append(n.parseHTML(a)).find(d):a)}).complete(c&&function(a,b){g.each(c,f||[a.responseText,b,a])}),this},n.expr.filters.animated=function(a){return n.grep(n.timers,function(b){return a===b.elem}).length};var Jc=a.document.documentElement;function Kc(a){return n.isWindow(a)?a:9===a.nodeType&&a.defaultView}n.offset={setOffset:function(a,b,c){var d,e,f,g,h,i,j,k=n.css(a,"position"),l=n(a),m={};"static"===k&&(a.style.position="relative"),h=l.offset(),f=n.css(a,"top"),i=n.css(a,"left"),j=("absolute"===k||"fixed"===k)&&(f+i).indexOf("auto")>-1,j?(d=l.position(),g=d.top,e=d.left):(g=parseFloat(f)||0,e=parseFloat(i)||0),n.isFunction(b)&&(b=b.call(a,c,h)),null!=b.top&&(m.top=b.top-h.top+g),null!=b.left&&(m.left=b.left-h.left+e),"using"in b?b.using.call(a,m):l.css(m)}},n.fn.extend({offset:function(a){if(arguments.length)return void 0===a?this:this.each(function(b){n.offset.setOffset(this,a,b)});var b,c,d=this[0],e={top:0,left:0},f=d&&d.ownerDocument;if(f)return b=f.documentElement,n.contains(b,d)?(typeof d.getBoundingClientRect!==U&&(e=d.getBoundingClientRect()),c=Kc(f),{top:e.top+c.pageYOffset-b.clientTop,left:e.left+c.pageXOffset-b.clientLeft}):e},position:function(){if(this[0]){var a,b,c=this[0],d={top:0,left:0};return"fixed"===n.css(c,"position")?b=c.getBoundingClientRect():(a=this.offsetParent(),b=this.offset(),n.nodeName(a[0],"html")||(d=a.offset()),d.top+=n.css(a[0],"borderTopWidth",!0),d.left+=n.css(a[0],"borderLeftWidth",!0)),{top:b.top-d.top-n.css(c,"marginTop",!0),left:b.left-d.left-n.css(c,"marginLeft",!0)}}},offsetParent:function(){return this.map(function(){var a=this.offsetParent||Jc;while(a&&!n.nodeName(a,"html")&&"static"===n.css(a,"position"))a=a.offsetParent;return a||Jc})}}),n.each({scrollLeft:"pageXOffset",scrollTop:"pageYOffset"},function(b,c){var d="pageYOffset"===c;n.fn[b]=function(e){return J(this,function(b,e,f){var g=Kc(b);return void 0===f?g?g[c]:b[e]:void(g?g.scrollTo(d?a.pageXOffset:f,d?f:a.pageYOffset):b[e]=f)},b,e,arguments.length,null)}}),n.each(["top","left"],function(a,b){n.cssHooks[b]=yb(k.pixelPosition,function(a,c){return c?(c=xb(a,b),vb.test(c)?n(a).position()[b]+"px":c):void 0})}),n.each({Height:"height",Width:"width"},function(a,b){n.each({padding:"inner"+a,content:b,"":"outer"+a},function(c,d){n.fn[d]=function(d,e){var f=arguments.length&&(c||"boolean"!=typeof d),g=c||(d===!0||e===!0?"margin":"border");return J(this,function(b,c,d){var e;return n.isWindow(b)?b.document.documentElement["client"+a]:9===b.nodeType?(e=b.documentElement,Math.max(b.body["scroll"+a],e["scroll"+a],b.body["offset"+a],e["offset"+a],e["client"+a])):void 0===d?n.css(b,c,g):n.style(b,c,d,g)},b,f?d:void 0,f,null)}})}),n.fn.size=function(){return this.length},n.fn.andSelf=n.fn.addBack,"function"==typeof define&&define.amd&&define("jquery",[],function(){return n});var Lc=a.jQuery,Mc=a.$;return n.noConflict=function(b){return a.$===n&&(a.$=Mc),b&&a.jQuery===n&&(a.jQuery=Lc),n},typeof b===U&&(a.jQuery=a.$=n),n});
//# sourceMappingURL=jquery.min.map
/*
 AngularJS v1.3.0-beta.7
 (c) 2010-2014 Google, Inc. http://angularjs.org
 License: MIT
*/
(function(N,S,s){'use strict';function I(b){return function(){var a=arguments[0],c,a="["+(b?b+":":"")+a+"] http://errors.angularjs.org/1.3.0-beta.7/"+(b?b+"/":"")+a;for(c=1;c<arguments.length;c++)a=a+(1==c?"?":"&")+"p"+(c-1)+"="+encodeURIComponent("function"==typeof arguments[c]?arguments[c].toString().replace(/ \{[\s\S]*$/,""):"undefined"==typeof arguments[c]?"undefined":"string"!=typeof arguments[c]?JSON.stringify(arguments[c]):arguments[c]);return Error(a)}}function cb(b){if(null==b||Ca(b))return!1;
var a=b.length;return 1===b.nodeType&&a?!0:x(b)||M(b)||0===a||"number"===typeof a&&0<a&&a-1 in b}function q(b,a,c){var d;if(b)if(O(b))for(d in b)"prototype"==d||("length"==d||"name"==d||b.hasOwnProperty&&!b.hasOwnProperty(d))||a.call(c,b[d],d);else if(b.forEach&&b.forEach!==q)b.forEach(a,c);else if(cb(b))for(d=0;d<b.length;d++)a.call(c,b[d],d);else for(d in b)b.hasOwnProperty(d)&&a.call(c,b[d],d);return b}function Zb(b){var a=[],c;for(c in b)b.hasOwnProperty(c)&&a.push(c);return a.sort()}function dd(b,
a,c){for(var d=Zb(b),e=0;e<d.length;e++)a.call(c,b[d[e]],d[e]);return d}function $b(b){return function(a,c){b(c,a)}}function db(){for(var b=ka.length,a;b;){b--;a=ka[b].charCodeAt(0);if(57==a)return ka[b]="A",ka.join("");if(90==a)ka[b]="0";else return ka[b]=String.fromCharCode(a+1),ka.join("")}ka.unshift("0");return ka.join("")}function ac(b,a){a?b.$$hashKey=a:delete b.$$hashKey}function w(b){var a=b.$$hashKey;q(arguments,function(a){a!==b&&q(a,function(a,c){b[c]=a})});ac(b,a);return b}function Q(b){return parseInt(b,
10)}function bc(b,a){return w(new (w(function(){},{prototype:b})),a)}function D(){}function Da(b){return b}function $(b){return function(){return b}}function A(b){return"undefined"===typeof b}function F(b){return"undefined"!==typeof b}function R(b){return null!=b&&"object"===typeof b}function x(b){return"string"===typeof b}function Cb(b){return"number"===typeof b}function qa(b){return"[object Date]"===xa.call(b)}function M(b){return"[object Array]"===xa.call(b)}function O(b){return"function"===typeof b}
function eb(b){return"[object RegExp]"===xa.call(b)}function Ca(b){return b&&b.document&&b.location&&b.alert&&b.setInterval}function ed(b){return!(!b||!(b.nodeName||b.prop&&b.attr&&b.find))}function fd(b,a,c){var d=[];q(b,function(b,f,g){d.push(a.call(c,b,f,g))});return d}function fb(b,a){if(b.indexOf)return b.indexOf(a);for(var c=0;c<b.length;c++)if(a===b[c])return c;return-1}function Ea(b,a){var c=fb(b,a);0<=c&&b.splice(c,1);return a}function aa(b,a){if(Ca(b)||b&&b.$evalAsync&&b.$watch)throw Oa("cpws");
if(a){if(b===a)throw Oa("cpi");if(M(b))for(var c=a.length=0;c<b.length;c++)a.push(aa(b[c]));else{c=a.$$hashKey;q(a,function(b,c){delete a[c]});for(var d in b)a[d]=aa(b[d]);ac(a,c)}}else(a=b)&&(M(b)?a=aa(b,[]):qa(b)?a=new Date(b.getTime()):eb(b)?a=RegExp(b.source):R(b)&&(a=aa(b,{})));return a}function cc(b,a){a=a||{};for(var c in b)!b.hasOwnProperty(c)||"$"===c.charAt(0)&&"$"===c.charAt(1)||(a[c]=b[c]);return a}function ya(b,a){if(b===a)return!0;if(null===b||null===a)return!1;if(b!==b&&a!==a)return!0;
var c=typeof b,d;if(c==typeof a&&"object"==c)if(M(b)){if(!M(a))return!1;if((c=b.length)==a.length){for(d=0;d<c;d++)if(!ya(b[d],a[d]))return!1;return!0}}else{if(qa(b))return qa(a)&&b.getTime()==a.getTime();if(eb(b)&&eb(a))return b.toString()==a.toString();if(b&&b.$evalAsync&&b.$watch||a&&a.$evalAsync&&a.$watch||Ca(b)||Ca(a)||M(a))return!1;c={};for(d in b)if("$"!==d.charAt(0)&&!O(b[d])){if(!ya(b[d],a[d]))return!1;c[d]=!0}for(d in a)if(!c.hasOwnProperty(d)&&"$"!==d.charAt(0)&&a[d]!==s&&!O(a[d]))return!1;
return!0}return!1}function dc(){return S.securityPolicy&&S.securityPolicy.isActive||S.querySelector&&!(!S.querySelector("[ng-csp]")&&!S.querySelector("[data-ng-csp]"))}function gb(b,a){var c=2<arguments.length?ra.call(arguments,2):[];return!O(a)||a instanceof RegExp?a:c.length?function(){return arguments.length?a.apply(b,c.concat(ra.call(arguments,0))):a.apply(b,c)}:function(){return arguments.length?a.apply(b,arguments):a.call(b)}}function gd(b,a){var c=a;"string"===typeof b&&"$"===b.charAt(0)?c=
s:Ca(a)?c="$WINDOW":a&&S===a?c="$DOCUMENT":a&&(a.$evalAsync&&a.$watch)&&(c="$SCOPE");return c}function sa(b,a){return"undefined"===typeof b?s:JSON.stringify(b,gd,a?"  ":null)}function ec(b){return x(b)?JSON.parse(b):b}function Pa(b){"function"===typeof b?b=!0:b&&0!==b.length?(b=u(""+b),b=!("f"==b||"0"==b||"false"==b||"no"==b||"n"==b||"[]"==b)):b=!1;return b}function ga(b){b=y(b).clone();try{b.empty()}catch(a){}var c=y("<div>").append(b).html();try{return 3===b[0].nodeType?u(c):c.match(/^(<[^>]+>)/)[1].replace(/^<([\w\-]+)/,
function(a,b){return"<"+u(b)})}catch(d){return u(c)}}function fc(b){try{return decodeURIComponent(b)}catch(a){}}function gc(b){var a={},c,d;q((b||"").split("&"),function(b){b&&(c=b.split("="),d=fc(c[0]),F(d)&&(b=F(c[1])?fc(c[1]):!0,a[d]?M(a[d])?a[d].push(b):a[d]=[a[d],b]:a[d]=b))});return a}function Db(b){var a=[];q(b,function(b,d){M(b)?q(b,function(b){a.push(za(d,!0)+(!0===b?"":"="+za(b,!0)))}):a.push(za(d,!0)+(!0===b?"":"="+za(b,!0)))});return a.length?a.join("&"):""}function hb(b){return za(b,
!0).replace(/%26/gi,"&").replace(/%3D/gi,"=").replace(/%2B/gi,"+")}function za(b,a){return encodeURIComponent(b).replace(/%40/gi,"@").replace(/%3A/gi,":").replace(/%24/g,"$").replace(/%2C/gi,",").replace(/%20/g,a?"%20":"+")}function hd(b,a){var c,d,e=hc.length;b=y(b);for(d=0;d<e;++d)if(c=hc[d]+a,x(c=b.attr(c)))return c;return null}function id(b,a){function c(a){a&&d.push(a)}var d=[b],e,f,g={},h=["ng:app","ng-app","x-ng-app","data-ng-app"],m=/\sng[:\-]app(:\s*([\w\d_]+);?)?\s/;q(h,function(a){h[a]=
!0;c(S.getElementById(a));a=a.replace(":","\\:");b.querySelectorAll&&(q(b.querySelectorAll("."+a),c),q(b.querySelectorAll("."+a+"\\:"),c),q(b.querySelectorAll("["+a+"]"),c))});q(d,function(a){if(!e){var b=m.exec(" "+a.className+" ");b?(e=a,f=(b[2]||"").replace(/\s+/g,",")):q(a.attributes,function(b){!e&&h[b.name]&&(e=a,f=b.value)})}});e&&(g.strictDi=null!==hd(e,"strict-di"),a(e,f?[f]:[],g))}function ic(b,a,c){R(c)||(c={});c=w({strictDi:!1},c);var d=function(){b=y(b);if(b.injector()){var d=b[0]===
S?"document":ga(b);throw Oa("btstrpd",d);}a=a||[];a.unshift(["$provide",function(a){a.value("$rootElement",b)}]);a.unshift("ng");d=Eb(a,c.strictDi);d.invoke(["$rootScope","$rootElement","$compile","$injector","$animate",function(a,b,c,d,e){a.$apply(function(){b.data("$injector",d);c(b)(a)})}]);return d},e=/^NG_DEFER_BOOTSTRAP!/;if(N&&!e.test(N.name))return d();N.name=N.name.replace(e,"");Qa.resumeBootstrap=function(b){q(b,function(b){a.push(b)});d()}}function ib(b,a){a=a||"_";return b.replace(jd,
function(b,d){return(d?a:"")+b.toLowerCase()})}function Fb(b,a,c){if(!b)throw Oa("areq",a||"?",c||"required");return b}function Ra(b,a,c){c&&M(b)&&(b=b[b.length-1]);Fb(O(b),a,"not a function, got "+(b&&"object"==typeof b?b.constructor.name||"Object":typeof b));return b}function Aa(b,a){if("hasOwnProperty"===b)throw Oa("badname",a);}function jc(b,a,c){if(!a)return b;a=a.split(".");for(var d,e=b,f=a.length,g=0;g<f;g++)d=a[g],b&&(b=(e=b)[d]);return!c&&O(b)?gb(e,b):b}function Gb(b){var a=b[0];b=b[b.length-
1];if(a===b)return y(a);var c=[a];do{a=a.nextSibling;if(!a)break;c.push(a)}while(a!==b);return y(c)}function kd(b){var a=I("$injector"),c=I("ng");b=b.angular||(b.angular={});b.$$minErr=b.$$minErr||I;return b.module||(b.module=function(){var b={};return function(e,f,g){if("hasOwnProperty"===e)throw c("badname","module");f&&b.hasOwnProperty(e)&&(b[e]=null);return b[e]||(b[e]=function(){function b(a,d,e){return function(){c[e||"push"]([a,d,arguments]);return p}}if(!f)throw a("nomod",e);var c=[],d=[],
l=b("$injector","invoke"),p={_invokeQueue:c,_runBlocks:d,requires:f,name:e,provider:b("$provide","provider"),factory:b("$provide","factory"),service:b("$provide","service"),value:b("$provide","value"),constant:b("$provide","constant","unshift"),animation:b("$animateProvider","register"),filter:b("$filterProvider","register"),controller:b("$controllerProvider","register"),directive:b("$compileProvider","directive"),config:l,run:function(a){d.push(a);return this}};g&&l(g);return p}())}}())}function ld(b){w(b,
{bootstrap:ic,copy:aa,extend:w,equals:ya,element:y,forEach:q,injector:Eb,noop:D,bind:gb,toJson:sa,fromJson:ec,identity:Da,isUndefined:A,isDefined:F,isString:x,isFunction:O,isObject:R,isNumber:Cb,isElement:ed,isArray:M,version:md,isDate:qa,lowercase:u,uppercase:Fa,callbacks:{counter:0},$$minErr:I,$$csp:dc});Sa=kd(N);try{Sa("ngLocale")}catch(a){Sa("ngLocale",[]).provider("$locale",nd)}Sa("ng",["ngLocale"],["$provide",function(a){a.provider({$$sanitizeUri:od});a.provider("$compile",kc).directive({a:pd,
input:lc,textarea:lc,form:qd,script:rd,select:sd,style:td,option:ud,ngBind:vd,ngBindHtml:wd,ngBindTemplate:xd,ngClass:yd,ngClassEven:zd,ngClassOdd:Ad,ngCloak:Bd,ngController:Cd,ngForm:Dd,ngHide:Ed,ngIf:Fd,ngInclude:Gd,ngInit:Hd,ngNonBindable:Id,ngPluralize:Jd,ngRepeat:Kd,ngShow:Ld,ngStyle:Md,ngSwitch:Nd,ngSwitchWhen:Od,ngSwitchDefault:Pd,ngOptions:Qd,ngTransclude:Rd,ngModel:Sd,ngList:Td,ngChange:Ud,required:mc,ngRequired:mc,ngValue:Vd,ngModelOptions:Wd}).directive({ngInclude:Xd}).directive(Hb).directive(nc);
a.provider({$anchorScroll:Yd,$animate:Zd,$browser:$d,$cacheFactory:ae,$controller:be,$document:ce,$exceptionHandler:de,$filter:oc,$interpolate:ee,$interval:fe,$http:ge,$httpBackend:he,$location:ie,$log:je,$parse:ke,$rootScope:le,$q:me,$sce:ne,$sceDelegate:oe,$sniffer:pe,$templateCache:qe,$timeout:re,$window:se,$$rAF:te,$$asyncCallback:ue})}])}function Ta(b){return b.replace(ve,function(a,b,d,e){return e?d.toUpperCase():d}).replace(we,"Moz$1")}function Ib(b,a,c,d){function e(b){var e=c&&b?[this.filter(b)]:
[this],m=a,k,l,p,n,r,t;if(!d||null!=b)for(;e.length;)for(k=e.shift(),l=0,p=k.length;l<p;l++)for(n=y(k[l]),m?n.triggerHandler("$destroy"):m=!m,r=0,n=(t=n.children()).length;r<n;r++)e.push(Ga(t[r]));return f.apply(this,arguments)}var f=Ga.fn[b],f=f.$original||f;e.$original=f;Ga.fn[b]=e}function xe(b,a){var c,d,e=a.createDocumentFragment(),f=[];if(Jb.test(b)){c=c||e.appendChild(a.createElement("div"));d=(ye.exec(b)||["",""])[1].toLowerCase();d=da[d]||da._default;c.innerHTML=d[1]+b.replace(ze,"<$1></$2>")+
d[2];for(d=d[0];d--;)c=c.lastChild;f=f.concat(ra.call(c.childNodes,void 0));c=e.firstChild;c.textContent=""}else f.push(a.createTextNode(b));e.textContent="";e.innerHTML="";q(f,function(a){e.appendChild(a)});return e}function U(b){if(b instanceof U)return b;x(b)&&(b=Y(b));if(!(this instanceof U)){if(x(b)&&"<"!=b.charAt(0))throw Kb("nosel");return new U(b)}if(x(b)){var a;a=S;var c;b=(c=Ae.exec(b))?[a.createElement(c[1])]:(c=xe(b,a))?c.childNodes:[]}pc(this,b)}function Lb(b){return b.cloneNode(!0)}
function Ha(b){qc(b);var a=0;for(b=b.childNodes||[];a<b.length;a++)Ha(b[a])}function rc(b,a,c,d){if(F(d))throw Kb("offargs");var e=la(b,"events");la(b,"handle")&&(A(a)?q(e,function(a,c){Ua(b,c,a);delete e[c]}):q(a.split(" "),function(a){A(c)?(Ua(b,a,e[a]),delete e[a]):Ea(e[a]||[],c)}))}function qc(b,a){var c=b[jb],d=Va[c];d&&(a?delete Va[c].data[a]:(d.handle&&(d.events.$destroy&&d.handle({},"$destroy"),rc(b)),delete Va[c],b[jb]=s))}function la(b,a,c){var d=b[jb],d=Va[d||-1];if(F(c))d||(b[jb]=d=++Be,
d=Va[d]={}),d[a]=c;else return d&&d[a]}function sc(b,a,c){var d=la(b,"data"),e=F(c),f=!e&&F(a),g=f&&!R(a);d||g||la(b,"data",d={});if(e)d[a]=c;else if(f){if(g)return d&&d[a];w(d,a)}else return d}function Mb(b,a){return b.getAttribute?-1<(" "+(b.getAttribute("class")||"")+" ").replace(/[\n\t]/g," ").indexOf(" "+a+" "):!1}function kb(b,a){a&&b.setAttribute&&q(a.split(" "),function(a){b.setAttribute("class",Y((" "+(b.getAttribute("class")||"")+" ").replace(/[\n\t]/g," ").replace(" "+Y(a)+" "," ")))})}
function lb(b,a){if(a&&b.setAttribute){var c=(" "+(b.getAttribute("class")||"")+" ").replace(/[\n\t]/g," ");q(a.split(" "),function(a){a=Y(a);-1===c.indexOf(" "+a+" ")&&(c+=a+" ")});b.setAttribute("class",Y(c))}}function pc(b,a){if(a){a=a.nodeName||!F(a.length)||Ca(a)?[a]:a;for(var c=0;c<a.length;c++)b.push(a[c])}}function tc(b,a){return mb(b,"$"+(a||"ngController")+"Controller")}function mb(b,a,c){b=y(b);9==b[0].nodeType&&(b=b.find("html"));for(a=M(a)?a:[a];b.length;){for(var d=b[0],e=0,f=a.length;e<
f;e++)if((c=b.data(a[e]))!==s)return c;b=y(d.parentNode||11===d.nodeType&&d.host)}}function uc(b){for(var a=0,c=b.childNodes;a<c.length;a++)Ha(c[a]);for(;b.firstChild;)b.removeChild(b.firstChild)}function vc(b,a){var c=nb[a.toLowerCase()];return c&&wc[b.nodeName]&&c}function Ce(b,a){var c=function(c,e){c.preventDefault||(c.preventDefault=function(){c.returnValue=!1});c.stopPropagation||(c.stopPropagation=function(){c.cancelBubble=!0});c.target||(c.target=c.srcElement||S);if(A(c.defaultPrevented)){var f=
c.preventDefault;c.preventDefault=function(){c.defaultPrevented=!0;f.call(c)};c.defaultPrevented=!1}c.isDefaultPrevented=function(){return c.defaultPrevented||!1===c.returnValue};var g=cc(a[e||c.type]||[]);q(g,function(a){a.call(b,c)});8>=P?(c.preventDefault=null,c.stopPropagation=null,c.isDefaultPrevented=null):(delete c.preventDefault,delete c.stopPropagation,delete c.isDefaultPrevented)};c.elem=b;return c}function Ia(b){var a=typeof b,c;"object"==a&&null!==b?"function"==typeof(c=b.$$hashKey)?c=
b.$$hashKey():c===s&&(c=b.$$hashKey=db()):c=b;return a+":"+c}function Wa(b){q(b,this.put,this)}function De(b){return(b=b.toString().replace(xc,"").match(yc))?"function("+(b[1]||"").replace(/[\s\r\n]+/," ")+")":"fn"}function Nb(b,a,c){var d;if("function"==typeof b){if(!(d=b.$inject)){d=[];if(b.length){if(a)throw x(c)&&c||(c=b.name||De(b)),Ja("strictdi",c);a=b.toString().replace(xc,"");a=a.match(yc);q(a[1].split(Ee),function(a){a.replace(Fe,function(a,b,c){d.push(c)})})}b.$inject=d}}else M(b)?(a=b.length-
1,Ra(b[a],"fn"),d=b.slice(0,a)):Ra(b,"fn",!0);return d}function Eb(b,a){function c(a){return function(b,c){if(R(b))q(b,$b(a));else return a(b,c)}}function d(a,b){Aa(a,"service");if(O(b)||M(b))b=n.instantiate(b);if(!b.$get)throw Ja("pget",a);return p[a+m]=b}function e(a,b){return d(a,{$get:b})}function f(a){var b=[],c,d,e,h;q(a,function(a){if(!l.get(a)){l.put(a,!0);try{if(x(a))for(c=Sa(a),b=b.concat(f(c.requires)).concat(c._runBlocks),d=c._invokeQueue,e=0,h=d.length;e<h;e++){var g=d[e],m=n.get(g[0]);
m[g[1]].apply(m,g[2])}else O(a)?b.push(n.invoke(a)):M(a)?b.push(n.invoke(a)):Ra(a,"module")}catch(k){throw M(a)&&(a=a[a.length-1]),k.message&&(k.stack&&-1==k.stack.indexOf(k.message))&&(k=k.message+"\n"+k.stack),Ja("modulerr",a,k.stack||k.message||k);}}});return b}function g(b,c){function d(a){if(b.hasOwnProperty(a)){if(b[a]===h)throw Ja("cdep",k.join(" <- "));return b[a]}try{return k.unshift(a),b[a]=h,b[a]=c(a)}catch(e){throw b[a]===h&&delete b[a],e;}finally{k.shift()}}function e(b,c,f,h){"string"===
typeof f&&(h=f,f=null);var g=[];h=Nb(b,a,h);var m,k,l;k=0;for(m=h.length;k<m;k++){l=h[k];if("string"!==typeof l)throw Ja("itkn",l);g.push(f&&f.hasOwnProperty(l)?f[l]:d(l))}b.$inject||(b=b[m]);return b.apply(c,g)}return{invoke:e,instantiate:function(a,b,c){var d=function(){};d.prototype=(M(a)?a[a.length-1]:a).prototype;d=new d;a=e(a,d,b,c);return R(a)||O(a)?a:d},get:d,annotate:Nb,has:function(a){return p.hasOwnProperty(a+m)||b.hasOwnProperty(a)}}}a=!0===a;var h={},m="Provider",k=[],l=new Wa,p={$provide:{provider:c(d),
factory:c(e),service:c(function(a,b){return e(a,["$injector",function(a){return a.instantiate(b)}])}),value:c(function(a,b){return e(a,$(b))}),constant:c(function(a,b){Aa(a,"constant");p[a]=b;r[a]=b}),decorator:function(a,b){var c=n.get(a+m),d=c.$get;c.$get=function(){var a=t.invoke(d,c);return t.invoke(b,null,{$delegate:a})}}}},n=p.$injector=g(p,function(){throw Ja("unpr",k.join(" <- "));},a),r={},t=r.$injector=g(r,function(a){var b=n.get(a+m);return t.invoke(b.$get,b,s,a)},a);q(f(b),function(a){t.invoke(a||
D)});return t}function Yd(){var b=!0;this.disableAutoScrolling=function(){b=!1};this.$get=["$window","$location","$rootScope",function(a,c,d){function e(a){var b=null;q(a,function(a){b||"a"!==u(a.nodeName)||(b=a)});return b}function f(){var b=c.hash(),d;b?(d=g.getElementById(b))?d.scrollIntoView():(d=e(g.getElementsByName(b)))?d.scrollIntoView():"top"===b&&a.scrollTo(0,0):a.scrollTo(0,0)}var g=a.document;b&&d.$watch(function(){return c.hash()},function(){d.$evalAsync(f)});return f}]}function ue(){this.$get=
["$$rAF","$timeout",function(b,a){return b.supported?function(a){return b(a)}:function(b){return a(b,0,!1)}}]}function Ge(b,a,c,d){function e(a){try{a.apply(null,ra.call(arguments,1))}finally{if(t--,0===t)for(;J.length;)try{J.pop()()}catch(b){c.error(b)}}}function f(a,b){(function ba(){q(E,function(a){a()});B=b(ba,a)})()}function g(){v=null;z!=h.url()&&(z=h.url(),q(ma,function(a){a(h.url())}))}var h=this,m=a[0],k=b.location,l=b.history,p=b.setTimeout,n=b.clearTimeout,r={};h.isMock=!1;var t=0,J=[];
h.$$completeOutstandingRequest=e;h.$$incOutstandingRequestCount=function(){t++};h.notifyWhenNoOutstandingRequests=function(a){q(E,function(a){a()});0===t?a():J.push(a)};var E=[],B;h.addPollFn=function(a){A(B)&&f(100,p);E.push(a);return a};var z=k.href,W=a.find("base"),v=null;h.url=function(a,c){k!==b.location&&(k=b.location);l!==b.history&&(l=b.history);if(a){if(z!=a)return z=a,d.history?c?l.replaceState(null,"",a):(l.pushState(null,"",a),W.attr("href",W.attr("href"))):(v=a,c?k.replace(a):k.href=
a),h}else return v||k.href.replace(/%27/g,"'")};var ma=[],K=!1;h.onUrlChange=function(a){if(!K){if(d.history)y(b).on("popstate",g);if(d.hashchange)y(b).on("hashchange",g);else h.addPollFn(g);K=!0}ma.push(a);return a};h.baseHref=function(){var a=W.attr("href");return a?a.replace(/^(https?\:)?\/\/[^\/]*/,""):""};var L={},Z="",G=h.baseHref();h.cookies=function(a,b){var d,e,f,h;if(a)b===s?m.cookie=escape(a)+"=;path="+G+";expires=Thu, 01 Jan 1970 00:00:00 GMT":x(b)&&(d=(m.cookie=escape(a)+"="+escape(b)+
";path="+G).length+1,4096<d&&c.warn("Cookie '"+a+"' possibly not set or overflowed because it was too large ("+d+" > 4096 bytes)!"));else{if(m.cookie!==Z)for(Z=m.cookie,d=Z.split("; "),L={},f=0;f<d.length;f++)e=d[f],h=e.indexOf("="),0<h&&(a=unescape(e.substring(0,h)),L[a]===s&&(L[a]=unescape(e.substring(h+1))));return L}};h.defer=function(a,b){var c;t++;c=p(function(){delete r[c];e(a)},b||0);r[c]=!0;return c};h.defer.cancel=function(a){return r[a]?(delete r[a],n(a),e(D),!0):!1}}function $d(){this.$get=
["$window","$log","$sniffer","$document",function(b,a,c,d){return new Ge(b,d,a,c)}]}function ae(){this.$get=function(){function b(b,d){function e(a){a!=p&&(n?n==a&&(n=a.n):n=a,f(a.n,a.p),f(a,p),p=a,p.n=null)}function f(a,b){a!=b&&(a&&(a.p=b),b&&(b.n=a))}if(b in a)throw I("$cacheFactory")("iid",b);var g=0,h=w({},d,{id:b}),m={},k=d&&d.capacity||Number.MAX_VALUE,l={},p=null,n=null;return a[b]={put:function(a,b){if(k<Number.MAX_VALUE){var c=l[a]||(l[a]={key:a});e(c)}if(!A(b))return a in m||g++,m[a]=b,
g>k&&this.remove(n.key),b},get:function(a){if(k<Number.MAX_VALUE){var b=l[a];if(!b)return;e(b)}return m[a]},remove:function(a){if(k<Number.MAX_VALUE){var b=l[a];if(!b)return;b==p&&(p=b.p);b==n&&(n=b.n);f(b.n,b.p);delete l[a]}delete m[a];g--},removeAll:function(){m={};g=0;l={};p=n=null},destroy:function(){l=h=m=null;delete a[b]},info:function(){return w({},h,{size:g})}}}var a={};b.info=function(){var b={};q(a,function(a,e){b[e]=a.info()});return b};b.get=function(b){return a[b]};return b}}function qe(){this.$get=
["$cacheFactory",function(b){return b("templates")}]}function kc(b,a){var c={},d="Directive",e=/^\s*directive\:\s*([\d\w\-_]+)\s+(.*)$/,f=/(([\d\w\-_]+)(?:\:([^;]+))?;?)/,g=/^(on[a-z]+|formaction)$/;this.directive=function m(a,e){Aa(a,"directive");x(a)?(Fb(e,"directiveFactory"),c.hasOwnProperty(a)||(c[a]=[],b.factory(a+d,["$injector","$exceptionHandler",function(b,d){var e=[];q(c[a],function(c,f){try{var g=b.invoke(c);O(g)?g={compile:$(g)}:!g.compile&&g.link&&(g.compile=$(g.link));g.priority=g.priority||
0;g.index=f;g.name=g.name||a;g.require=g.require||g.controller&&g.name;g.restrict=g.restrict||"A";e.push(g)}catch(m){d(m)}});return e}])),c[a].push(e)):q(a,$b(m));return this};this.aHrefSanitizationWhitelist=function(b){return F(b)?(a.aHrefSanitizationWhitelist(b),this):a.aHrefSanitizationWhitelist()};this.imgSrcSanitizationWhitelist=function(b){return F(b)?(a.imgSrcSanitizationWhitelist(b),this):a.imgSrcSanitizationWhitelist()};this.$get=["$injector","$interpolate","$exceptionHandler","$http","$templateCache",
"$parse","$controller","$rootScope","$document","$sce","$animate","$$sanitizeUri",function(a,b,l,p,n,r,t,J,E,B,z,W){function v(a,b,c,d,e){a instanceof y||(a=y(a));q(a,function(b,c){3==b.nodeType&&b.nodeValue.match(/\S+/)&&(a[c]=y(b).wrap("<span></span>").parent()[0])});var f=K(a,b,a,c,d,e);ma(a,"ng-scope");return function(b,c,d){Fb(b,"scope");var e=c?Ka.clone.call(a):a;q(d,function(a,b){e.data("$"+b+"Controller",a)});d=0;for(var g=e.length;d<g;d++){var m=e[d].nodeType;1!==m&&9!==m||e.eq(d).data("$scope",
b)}c&&c(e,b);f&&f(b,e,e);return e}}function ma(a,b){try{a.addClass(b)}catch(c){}}function K(a,b,c,d,e,f){function g(a,c,d,e){var f,k,l,r,p,n,E;f=c.length;var Xa=Array(f);for(p=0;p<f;p++)Xa[p]=c[p];E=p=0;for(n=m.length;p<n;E++)k=Xa[E],c=m[p++],f=m[p++],l=y(k),c?(c.scope?(r=a.$new(),l.data("$scope",r)):r=a,(l=c.transclude)||!e&&b?c(f,r,k,d,L(a,l||b)):c(f,r,k,d,e)):f&&f(a,k.childNodes,s,e)}for(var m=[],k,l,r,p,n=0;n<a.length;n++)k=new Ob,l=Z(a[n],[],k,0===n?d:s,e),(f=l.length?ha(l,a[n],k,b,c,null,[],
[],f):null)&&f.scope&&ma(y(a[n]),"ng-scope"),k=f&&f.terminal||!(r=a[n].childNodes)||!r.length?null:K(r,f?f.transclude:b),m.push(f,k),p=p||f||k,f=null;return p?g:null}function L(a,b){return function(c,d,e){var f=!1;c||(c=a.$new(),f=c.$$transcluded=!0);d=b(c,d,e);if(f)d.on("$destroy",gb(c,c.$destroy));return d}}function Z(a,b,c,d,g){var m=c.$attr,k;switch(a.nodeType){case 1:ba(b,na(La(a).toLowerCase()),"E",d,g);var l,p,r;k=a.attributes;for(var n=0,E=k&&k.length;n<E;n++){var t=!1,B=!1;l=k[n];if(!P||
8<=P||l.specified){p=l.name;r=na(p);Q.test(r)&&(p=ib(r.substr(6),"-"));var J=r.replace(/(Start|End)$/,"");r===J+"Start"&&(t=p,B=p.substr(0,p.length-5)+"end",p=p.substr(0,p.length-6));r=na(p.toLowerCase());m[r]=p;c[r]=l=Y(l.value);vc(a,r)&&(c[r]=!0);N(a,b,l,r);ba(b,r,"A",d,g,t,B)}}a=a.className;if(x(a)&&""!==a)for(;k=f.exec(a);)r=na(k[2]),ba(b,r,"C",d,g)&&(c[r]=Y(k[3])),a=a.substr(k.index+k[0].length);break;case 3:u(b,a.nodeValue);break;case 8:try{if(k=e.exec(a.nodeValue))r=na(k[1]),ba(b,r,"M",d,g)&&
(c[r]=Y(k[2]))}catch(z){}}b.sort(qb);return b}function G(a,b,c){var d=[],e=0;if(b&&a.hasAttribute&&a.hasAttribute(b)){do{if(!a)throw ia("uterdir",b,c);1==a.nodeType&&(a.hasAttribute(b)&&e++,a.hasAttribute(c)&&e--);d.push(a);a=a.nextSibling}while(0<e)}else d.push(a);return y(d)}function C(a,b,c){return function(d,e,f,g,k){e=G(e[0],b,c);return a(d,e,f,g,k)}}function ha(a,c,d,e,f,g,m,p,n){function E(a,b,c,d){if(a){c&&(a=C(a,c,d));a.require=H.require;a.directiveName=ca;if(L===H||H.$$isolateScope)a=zc(a,
{isolateScope:!0});m.push(a)}if(b){c&&(b=C(b,c,d));b.require=H.require;b.directiveName=ca;if(L===H||H.$$isolateScope)b=zc(b,{isolateScope:!0});p.push(b)}}function B(a,b,c,d){var e,f="data",g=!1;if(x(b)){for(;"^"==(e=b.charAt(0))||"?"==e;)b=b.substr(1),"^"==e&&(f="inheritedData"),g=g||"?"==e;e=null;d&&"data"===f&&(e=d[b]);e=e||c[f]("$"+b+"Controller");if(!e&&!g)throw ia("ctreq",b,a);}else M(b)&&(e=[],q(b,function(b){e.push(B(a,b,c,d))}));return e}function J(a,e,f,g,n){function E(a,b){var c;2>arguments.length&&
(b=a,a=s);w&&(c=Z);return n(a,b,c)}var z,v,Xa,C,K,G,Z={},pb;z=c===f?d:cc(d,new Ob(y(f),d.$attr));v=z.$$element;if(L){var ba=/^\s*([@=&])(\??)\s*(\w*)\s*$/;g=y(f);G=e.$new(!0);ha&&ha===L.$$originalDirective?g.data("$isolateScope",G):g.data("$isolateScopeNoTemplate",G);ma(g,"ng-isolate-scope");q(L.scope,function(a,c){var d=a.match(ba)||[],f=d[3]||c,g="?"==d[2],d=d[1],m,l,p,n;G.$$isolateBindings[c]=d+f;switch(d){case "@":z.$observe(f,function(a){G[c]=a});z.$$observers[f].$$scope=e;z[f]&&(G[c]=b(z[f])(e));
break;case "=":if(g&&!z[f])break;l=r(z[f]);n=l.literal?ya:function(a,b){return a===b};p=l.assign||function(){m=G[c]=l(e);throw ia("nonassign",z[f],L.name);};m=G[c]=l(e);G.$watch(function(){var a=l(e);n(a,G[c])||(n(a,m)?p(e,a=G[c]):G[c]=a);return m=a},null,l.literal);break;case "&":l=r(z[f]);G[c]=function(a){return l(e,a)};break;default:throw ia("iscp",L.name,c,a);}})}pb=n&&E;W&&q(W,function(a){var b={$scope:a===L||a.$$isolateScope?G:e,$element:v,$attrs:z,$transclude:pb},c;K=a.controller;"@"==K&&(K=
z[a.name]);c=t(K,b);Z[a.name]=c;w||v.data("$"+a.name+"Controller",c);a.controllerAs&&(b.$scope[a.controllerAs]=c)});g=0;for(Xa=m.length;g<Xa;g++)try{C=m[g],C(C.isolateScope?G:e,v,z,C.require&&B(C.directiveName,C.require,v,Z),pb)}catch(ob){l(ob,ga(v))}g=e;L&&(L.template||null===L.templateUrl)&&(g=G);a&&a(g,f.childNodes,s,n);for(g=p.length-1;0<=g;g--)try{C=p[g],C(C.isolateScope?G:e,v,z,C.require&&B(C.directiveName,C.require,v,Z),pb)}catch(H){l(H,ga(v))}}n=n||{};for(var z=-Number.MAX_VALUE,K,W=n.controllerDirectives,
L=n.newIsolateScopeDirective,ha=n.templateDirective,ba=n.nonTlbTranscludeDirective,qb=!1,w=n.hasElementTranscludeDirective,u=d.$$element=y(c),H,ca,T,I=e,N,ja=0,P=a.length;ja<P;ja++){H=a[ja];var Q=H.$$start,V=H.$$end;Q&&(u=G(c,Q,V));T=s;if(z>H.priority)break;if(T=H.scope)K=K||H,H.templateUrl||(A("new/isolated scope",L,H,u),R(T)&&(L=H));ca=H.name;!H.templateUrl&&H.controller&&(T=H.controller,W=W||{},A("'"+ca+"' controller",W[ca],H,u),W[ca]=H);if(T=H.transclude)qb=!0,H.$$tlb||(A("transclusion",ba,H,
u),ba=H),"element"==T?(w=!0,z=H.priority,T=G(c,Q,V),u=d.$$element=y(S.createComment(" "+ca+": "+d[ca]+" ")),c=u[0],rb(f,y(ra.call(T,0)),c),I=v(T,e,z,g&&g.name,{nonTlbTranscludeDirective:ba})):(T=y(Lb(c)).contents(),u.empty(),I=v(T,e));if(H.template)if(A("template",ha,H,u),ha=H,T=O(H.template)?H.template(u,d):H.template,T=U(T),H.replace){g=H;T=Jb.test(T)?y(Y(T)):[];c=T[0];if(1!=T.length||1!==c.nodeType)throw ia("tplrt",ca,"");rb(f,u,c);P={$attr:{}};T=Z(c,[],P);var X=a.splice(ja+1,a.length-(ja+1));
L&&ob(T);a=a.concat(T).concat(X);F(d,P);P=a.length}else u.html(T);if(H.templateUrl)A("template",ha,H,u),ha=H,H.replace&&(g=H),J=D(a.splice(ja,a.length-ja),u,d,f,I,m,p,{controllerDirectives:W,newIsolateScopeDirective:L,templateDirective:ha,nonTlbTranscludeDirective:ba}),P=a.length;else if(H.compile)try{N=H.compile(u,d,I),O(N)?E(null,N,Q,V):N&&E(N.pre,N.post,Q,V)}catch(He){l(He,ga(u))}H.terminal&&(J.terminal=!0,z=Math.max(z,H.priority))}J.scope=K&&!0===K.scope;J.transclude=qb&&I;n.hasElementTranscludeDirective=
w;return J}function ob(a){for(var b=0,c=a.length;b<c;b++)a[b]=bc(a[b],{$$isolateScope:!0})}function ba(b,e,f,g,k,p,r){if(e===k)return null;k=null;if(c.hasOwnProperty(e)){var n;e=a.get(e+d);for(var E=0,t=e.length;E<t;E++)try{n=e[E],(g===s||g>n.priority)&&-1!=n.restrict.indexOf(f)&&(p&&(n=bc(n,{$$start:p,$$end:r})),b.push(n),k=n)}catch(z){l(z)}}return k}function F(a,b){var c=b.$attr,d=a.$attr,e=a.$$element;q(a,function(d,e){"$"!=e.charAt(0)&&(b[e]&&(d+=("style"===e?";":" ")+b[e]),a.$set(e,d,!0,c[e]))});
q(b,function(b,f){"class"==f?(ma(e,b),a["class"]=(a["class"]?a["class"]+" ":"")+b):"style"==f?(e.attr("style",e.attr("style")+";"+b),a.style=(a.style?a.style+";":"")+b):"$"==f.charAt(0)||a.hasOwnProperty(f)||(a[f]=b,d[f]=c[f])})}function D(a,b,c,d,e,f,g,k){var m=[],l,r,E=b[0],t=a.shift(),z=w({},t,{templateUrl:null,transclude:null,replace:null,$$originalDirective:t}),J=O(t.templateUrl)?t.templateUrl(b,c):t.templateUrl;b.empty();p.get(B.getTrustedResourceUrl(J),{cache:n}).success(function(p){var n,
B;p=U(p);if(t.replace){p=Jb.test(p)?y(Y(p)):[];n=p[0];if(1!=p.length||1!==n.nodeType)throw ia("tplrt",t.name,J);p={$attr:{}};rb(d,b,n);var v=Z(n,[],p);R(t.scope)&&ob(v);a=v.concat(a);F(c,p)}else n=E,b.html(p);a.unshift(z);l=ha(a,n,c,e,b,t,f,g,k);q(d,function(a,c){a==n&&(d[c]=b[0])});for(r=K(b[0].childNodes,e);m.length;){p=m.shift();B=m.shift();var C=m.shift(),G=m.shift(),v=b[0];if(B!==E){var W=B.className;k.hasElementTranscludeDirective&&t.replace||(v=Lb(n));rb(C,y(B),v);ma(y(v),W)}B=l.transclude?
L(p,l.transclude):G;l(r,p,v,d,B)}m=null}).error(function(a,b,c,d){throw ia("tpload",d.url);});return function(a,b,c,d,e){m?(m.push(b),m.push(c),m.push(d),m.push(e)):l(r,b,c,d,e)}}function qb(a,b){var c=b.priority-a.priority;return 0!==c?c:a.name!==b.name?a.name<b.name?-1:1:a.index-b.index}function A(a,b,c,d){if(b)throw ia("multidir",b.name,c.name,a,ga(d));}function u(a,c){var d=b(c,!0);d&&a.push({priority:0,compile:$(function(a,b){var c=b.parent(),e=c.data("$binding")||[];e.push(d);ma(c.data("$binding",
e),"ng-binding");a.$watch(d,function(a){b[0].nodeValue=a})})})}function I(a,b){if("srcdoc"==b)return B.HTML;var c=La(a);if("xlinkHref"==b||"FORM"==c&&"action"==b||"IMG"!=c&&("src"==b||"ngSrc"==b))return B.RESOURCE_URL}function N(a,c,d,e){var f=b(d,!0);if(f){if("multiple"===e&&"SELECT"===La(a))throw ia("selmulti",ga(a));c.push({priority:100,compile:function(){return{pre:function(c,d,m){d=m.$$observers||(m.$$observers={});if(g.test(e))throw ia("nodomevents");if(f=b(m[e],!0,I(a,e)))m[e]=f(c),(d[e]||
(d[e]=[])).$$inter=!0,(m.$$observers&&m.$$observers[e].$$scope||c).$watch(f,function(a,b){"class"===e&&a!=b?m.$updateClass(a,b):m.$set(e,a)})}}}})}}function rb(a,b,c){var d=b[0],e=b.length,f=d.parentNode,g,m;if(a)for(g=0,m=a.length;g<m;g++)if(a[g]==d){a[g++]=c;m=g+e-1;for(var k=a.length;g<k;g++,m++)m<k?a[g]=a[m]:delete a[g];a.length-=e-1;break}f&&f.replaceChild(c,d);a=S.createDocumentFragment();a.appendChild(d);c[y.expando]=d[y.expando];d=1;for(e=b.length;d<e;d++)f=b[d],y(f).remove(),a.appendChild(f),
delete b[d];b[0]=c;b.length=1}function zc(a,b){return w(function(){return a.apply(null,arguments)},a,b)}var Ob=function(a,b){this.$$element=a;this.$attr=b||{}};Ob.prototype={$normalize:na,$addClass:function(a){a&&0<a.length&&z.addClass(this.$$element,a)},$removeClass:function(a){a&&0<a.length&&z.removeClass(this.$$element,a)},$updateClass:function(a,b){var c=Ac(a,b),d=Ac(b,a);0===c.length?z.removeClass(this.$$element,d):0===d.length?z.addClass(this.$$element,c):z.setClass(this.$$element,c,d)},$set:function(a,
b,c,d){var e=vc(this.$$element[0],a);e&&(this.$$element.prop(a,b),d=e);this[a]=b;d?this.$attr[a]=d:(d=this.$attr[a])||(this.$attr[a]=d=ib(a,"-"));e=La(this.$$element);if("A"===e&&"href"===a||"IMG"===e&&"src"===a)this[a]=b=W(b,"src"===a);!1!==c&&(null===b||b===s?this.$$element.removeAttr(d):this.$$element.attr(d,b));(c=this.$$observers)&&q(c[a],function(a){try{a(b)}catch(c){l(c)}})},$observe:function(a,b){var c=this,d=c.$$observers||(c.$$observers={}),e=d[a]||(d[a]=[]);e.push(b);J.$evalAsync(function(){e.$$inter||
b(c[a])});return function(){Ea(e,b)}}};var ca=b.startSymbol(),ja=b.endSymbol(),U="{{"==ca||"}}"==ja?Da:function(a){return a.replace(/\{\{/g,ca).replace(/}}/g,ja)},Q=/^ngAttr[A-Z]/;return v}]}function na(b){return Ta(b.replace(Ie,""))}function Ac(b,a){var c="",d=b.split(/\s+/),e=a.split(/\s+/),f=0;a:for(;f<d.length;f++){for(var g=d[f],h=0;h<e.length;h++)if(g==e[h])continue a;c+=(0<c.length?" ":"")+g}return c}function be(){var b={},a=/^(\S+)(\s+as\s+(\w+))?$/;this.register=function(a,d){Aa(a,"controller");
R(a)?w(b,a):b[a]=d};this.$get=["$injector","$window",function(c,d){return function(e,f){var g,h,m;x(e)&&(g=e.match(a),h=g[1],m=g[3],e=b.hasOwnProperty(h)?b[h]:jc(f.$scope,h,!0)||jc(d,h,!0),Ra(e,h,!0));g=c.instantiate(e,f,h);if(m){if(!f||"object"!=typeof f.$scope)throw I("$controller")("noscp",h||e.name,m);f.$scope[m]=g}return g}}]}function ce(){this.$get=["$window",function(b){return y(b.document)}]}function de(){this.$get=["$log",function(b){return function(a,c){b.error.apply(b,arguments)}}]}function Bc(b){var a=
{},c,d,e;if(!b)return a;q(b.split("\n"),function(b){e=b.indexOf(":");c=u(Y(b.substr(0,e)));d=Y(b.substr(e+1));c&&(a[c]=a[c]?a[c]+(", "+d):d)});return a}function Cc(b){var a=R(b)?b:s;return function(c){a||(a=Bc(b));return c?a[u(c)]||null:a}}function Dc(b,a,c){if(O(c))return c(b,a);q(c,function(c){b=c(b,a)});return b}function ge(){var b=/^\s*(\[|\{[^\{])/,a=/[\}\]]\s*$/,c=/^\)\]\}',?\n/,d={"Content-Type":"application/json;charset=utf-8"},e=this.defaults={transformResponse:[function(d){x(d)&&(d=d.replace(c,
""),b.test(d)&&a.test(d)&&(d=ec(d)));return d}],transformRequest:[function(a){return R(a)&&"[object File]"!==xa.call(a)&&"[object Blob]"!==xa.call(a)?sa(a):a}],headers:{common:{Accept:"application/json, text/plain, */*"},post:aa(d),put:aa(d),patch:aa(d)},xsrfCookieName:"XSRF-TOKEN",xsrfHeaderName:"X-XSRF-TOKEN"},f=this.interceptors=[],g=this.responseInterceptors=[];this.$get=["$httpBackend","$browser","$cacheFactory","$rootScope","$q","$injector",function(a,b,c,d,p,n){function r(a){function c(a){var b=
w({},a,{data:Dc(a.data,a.headers,d.transformResponse)});return 200<=a.status&&300>a.status?b:p.reject(b)}var d={method:"get",transformRequest:e.transformRequest,transformResponse:e.transformResponse},f=function(a){function b(a){var c;q(a,function(b,d){O(b)&&(c=b(),null!=c?a[d]=c:delete a[d])})}var c=e.headers,d=w({},a.headers),f,g,c=w({},c.common,c[u(a.method)]);b(c);b(d);a:for(f in c){a=u(f);for(g in d)if(u(g)===a)continue a;d[f]=c[f]}return d}(a);w(d,a);d.headers=f;d.method=Fa(d.method);(a=Pb(d.url)?
b.cookies()[d.xsrfCookieName||e.xsrfCookieName]:s)&&(f[d.xsrfHeaderName||e.xsrfHeaderName]=a);var g=[function(a){f=a.headers;var b=Dc(a.data,Cc(f),a.transformRequest);A(a.data)&&q(f,function(a,b){"content-type"===u(b)&&delete f[b]});A(a.withCredentials)&&!A(e.withCredentials)&&(a.withCredentials=e.withCredentials);return t(a,b,f).then(c,c)},s],h=p.when(d);for(q(B,function(a){(a.request||a.requestError)&&g.unshift(a.request,a.requestError);(a.response||a.responseError)&&g.push(a.response,a.responseError)});g.length;){a=
g.shift();var k=g.shift(),h=h.then(a,k)}h.success=function(a){h.then(function(b){a(b.data,b.status,b.headers,d)});return h};h.error=function(a){h.then(null,function(b){a(b.data,b.status,b.headers,d)});return h};return h}function t(b,c,f){function g(a,b,c,e){B&&(200<=a&&300>a?B.put(s,[a,b,Bc(c),e]):B.remove(s));m(b,a,c,e);d.$$phase||d.$apply()}function m(a,c,d,e){c=Math.max(c,0);(200<=c&&300>c?n.resolve:n.reject)({data:a,status:c,headers:Cc(d),config:b,statusText:e})}function k(){var a=fb(r.pendingRequests,
b);-1!==a&&r.pendingRequests.splice(a,1)}var n=p.defer(),t=n.promise,B,q,s=J(b.url,b.params);r.pendingRequests.push(b);t.then(k,k);(b.cache||e.cache)&&(!1!==b.cache&&"GET"==b.method)&&(B=R(b.cache)?b.cache:R(e.cache)?e.cache:E);if(B)if(q=B.get(s),F(q)){if(q.then)return q.then(k,k),q;M(q)?m(q[1],q[0],aa(q[2]),q[3]):m(q,200,{},"OK")}else B.put(s,t);A(q)&&a(b.method,s,c,g,f,b.timeout,b.withCredentials,b.responseType);return t}function J(a,b){if(!b)return a;var c=[];dd(b,function(a,b){null===a||A(a)||
(M(a)||(a=[a]),q(a,function(a){R(a)&&(a=sa(a));c.push(za(b)+"="+za(a))}))});0<c.length&&(a+=(-1==a.indexOf("?")?"?":"&")+c.join("&"));return a}var E=c("$http"),B=[];q(f,function(a){B.unshift(x(a)?n.get(a):n.invoke(a))});q(g,function(a,b){var c=x(a)?n.get(a):n.invoke(a);B.splice(b,0,{response:function(a){return c(p.when(a))},responseError:function(a){return c(p.reject(a))}})});r.pendingRequests=[];(function(a){q(arguments,function(a){r[a]=function(b,c){return r(w(c||{},{method:a,url:b}))}})})("get",
"delete","head","jsonp");(function(a){q(arguments,function(a){r[a]=function(b,c,d){return r(w(d||{},{method:a,url:b,data:c}))}})})("post","put");r.defaults=e;return r}]}function Je(b){if(8>=P&&(!b.match(/^(get|post|head|put|delete|options)$/i)||!N.XMLHttpRequest))return new N.ActiveXObject("Microsoft.XMLHTTP");if(N.XMLHttpRequest)return new N.XMLHttpRequest;throw I("$httpBackend")("noxhr");}function he(){this.$get=["$browser","$window","$document",function(b,a,c){return Ke(b,Je,b.defer,a.angular.callbacks,
c[0])}]}function Ke(b,a,c,d,e){function f(a,b,c){var f=e.createElement("script"),g=null;f.type="text/javascript";f.src=a;f.async=!0;g=function(a){Ua(f,"load",g);Ua(f,"error",g);e.body.removeChild(f);f=null;var h=-1,t="unknown";a&&("load"!==a.type||d[b].called||(a={type:"error"}),t=a.type,h="error"===a.type?404:200);c&&c(h,t)};sb(f,"load",g);sb(f,"error",g);e.body.appendChild(f);return g}var g=-1;return function(e,m,k,l,p,n,r,t){function J(){B=g;W&&W();v&&v.abort()}function E(a,d,e,f,g){K&&c.cancel(K);
W=v=null;0===d&&(d=e?200:"file"==ta(m).protocol?404:0);a(1223===d?204:d,e,f,g||"");b.$$completeOutstandingRequest(D)}var B;b.$$incOutstandingRequestCount();m=m||b.url();if("jsonp"==u(e)){var z="_"+(d.counter++).toString(36);d[z]=function(a){d[z].data=a;d[z].called=!0};var W=f(m.replace("JSON_CALLBACK","angular.callbacks."+z),z,function(a,b){E(l,a,d[z].data,"",b);d[z]=D})}else{var v=a(e);v.open(e,m,!0);q(p,function(a,b){F(a)&&v.setRequestHeader(b,a)});v.onreadystatechange=function(){if(v&&4==v.readyState){var a=
null,b=null;B!==g&&(a=v.getAllResponseHeaders(),b="response"in v?v.response:v.responseText);E(l,B||v.status,b,a,v.statusText||"")}};r&&(v.withCredentials=!0);if(t)try{v.responseType=t}catch(s){if("json"!==t)throw s;}v.send(k||null)}if(0<n)var K=c(J,n);else n&&n.then&&n.then(J)}}function ee(){var b="{{",a="}}";this.startSymbol=function(a){return a?(b=a,this):b};this.endSymbol=function(b){return b?(a=b,this):a};this.$get=["$parse","$exceptionHandler","$sce",function(c,d,e){function f(f,k,l){for(var p,
n,r=0,t=[],J=[],E=[],B=f.length,z=!1,q=!1,v=[],y={},K={};r<B;)if(-1!=(p=f.indexOf(b,r))&&-1!=(n=f.indexOf(a,p+g)))r!==p&&(q=!0),t.push(f.substring(r,p)),r=f.substring(p+g,n),J.push(r),E.push(c(r)),r=n+h,z=!0;else{r!==B&&(q=!0,t.push(f.substring(r)));break}t.length===J.length&&t.push("");if(l&&z&&(q||1<J.length))throw Ec("noconcat",f);if(!k||z){v.length=t.length+J.length;var L=function(a){for(var b=0,c=J.length;b<c;b++)v[2*b]=t[b],v[2*b+1]=a[b];v[2*c]=t[c];return v.join("")},Z=function(a){a=l?e.getTrusted(l,
a):e.valueOf(a);null===a||A(a)?a="":"string"!=typeof a&&(a=sa(a));return a};return w(function(a){var b=a.$id||"notAScope",c=y[b],e=K[b],g=0,h=J.length,k=Array(h),l,p=e===s?!0:!1;c||(c=[],p=!0,a.$on&&a.$on("$destroy",function(){y[b]=null;K[b]=null}));try{for(;g<h;g++)l=Z(E[g](a)),l!==c[g]&&(p=!0),k[g]=l;p&&(y[b]=k,K[b]=e=L(k))}catch(n){a=Ec("interr",f,n.toString()),d(a)}return e},{exp:f,separators:t,expressions:J})}}var g=b.length,h=a.length;f.startSymbol=function(){return b};f.endSymbol=function(){return a};
return f}]}function fe(){this.$get=["$rootScope","$window","$q",function(b,a,c){function d(d,g,h,m){var k=a.setInterval,l=a.clearInterval,p=c.defer(),n=p.promise,r=0,t=F(m)&&!m;h=F(h)?h:0;n.then(null,null,d);n.$$intervalId=k(function(){p.notify(r++);0<h&&r>=h&&(p.resolve(r),l(n.$$intervalId),delete e[n.$$intervalId]);t||b.$apply()},g);e[n.$$intervalId]=p;return n}var e={};d.cancel=function(a){return a&&a.$$intervalId in e?(e[a.$$intervalId].reject("canceled"),clearInterval(a.$$intervalId),delete e[a.$$intervalId],
!0):!1};return d}]}function nd(){this.$get=function(){return{id:"en-us",NUMBER_FORMATS:{DECIMAL_SEP:".",GROUP_SEP:",",PATTERNS:[{minInt:1,minFrac:0,maxFrac:3,posPre:"",posSuf:"",negPre:"-",negSuf:"",gSize:3,lgSize:3},{minInt:1,minFrac:2,maxFrac:2,posPre:"\u00a4",posSuf:"",negPre:"(\u00a4",negSuf:")",gSize:3,lgSize:3}],CURRENCY_SYM:"$"},DATETIME_FORMATS:{MONTH:"January February March April May June July August September October November December".split(" "),SHORTMONTH:"Jan Feb Mar Apr May Jun Jul Aug Sep Oct Nov Dec".split(" "),
DAY:"Sunday Monday Tuesday Wednesday Thursday Friday Saturday".split(" "),SHORTDAY:"Sun Mon Tue Wed Thu Fri Sat".split(" "),AMPMS:["AM","PM"],medium:"MMM d, y h:mm:ss a","short":"M/d/yy h:mm a",fullDate:"EEEE, MMMM d, y",longDate:"MMMM d, y",mediumDate:"MMM d, y",shortDate:"M/d/yy",mediumTime:"h:mm:ss a",shortTime:"h:mm a"},pluralCat:function(b){return 1===b?"one":"other"}}}}function Qb(b){b=b.split("/");for(var a=b.length;a--;)b[a]=hb(b[a]);return b.join("/")}function Fc(b,a,c){b=ta(b,c);a.$$protocol=
b.protocol;a.$$host=b.hostname;a.$$port=Q(b.port)||Le[b.protocol]||null}function Gc(b,a,c){var d="/"!==b.charAt(0);d&&(b="/"+b);b=ta(b,c);a.$$path=decodeURIComponent(d&&"/"===b.pathname.charAt(0)?b.pathname.substring(1):b.pathname);a.$$search=gc(b.search);a.$$hash=decodeURIComponent(b.hash);a.$$path&&"/"!=a.$$path.charAt(0)&&(a.$$path="/"+a.$$path)}function oa(b,a){if(0===a.indexOf(b))return a.substr(b.length)}function Ya(b){var a=b.indexOf("#");return-1==a?b:b.substr(0,a)}function Rb(b){return b.substr(0,
Ya(b).lastIndexOf("/")+1)}function Hc(b,a){this.$$html5=!0;a=a||"";var c=Rb(b);Fc(b,this,b);this.$$parse=function(a){var e=oa(c,a);if(!x(e))throw Sb("ipthprfx",a,c);Gc(e,this,b);this.$$path||(this.$$path="/");this.$$compose()};this.$$compose=function(){var a=Db(this.$$search),b=this.$$hash?"#"+hb(this.$$hash):"";this.$$url=Qb(this.$$path)+(a?"?"+a:"")+b;this.$$absUrl=c+this.$$url.substr(1)};this.$$rewrite=function(d){var e;if((e=oa(b,d))!==s)return d=e,(e=oa(a,e))!==s?c+(oa("/",e)||e):b+d;if((e=oa(c,
d))!==s)return c+e;if(c==d+"/")return c}}function Tb(b,a){var c=Rb(b);Fc(b,this,b);this.$$parse=function(d){var e=oa(b,d)||oa(c,d),e="#"==e.charAt(0)?oa(a,e):this.$$html5?e:"";if(!x(e))throw Sb("ihshprfx",d,a);Gc(e,this,b);d=this.$$path;var f=/^\/[A-Z]:(\/.*)/;0===e.indexOf(b)&&(e=e.replace(b,""));f.exec(e)||(d=(e=f.exec(d))?e[1]:d);this.$$path=d;this.$$compose()};this.$$compose=function(){var c=Db(this.$$search),e=this.$$hash?"#"+hb(this.$$hash):"";this.$$url=Qb(this.$$path)+(c?"?"+c:"")+e;this.$$absUrl=
b+(this.$$url?a+this.$$url:"")};this.$$rewrite=function(a){if(Ya(b)==Ya(a))return a}}function Ub(b,a){this.$$html5=!0;Tb.apply(this,arguments);var c=Rb(b);this.$$rewrite=function(d){var e;if(b==Ya(d))return d;if(e=oa(c,d))return b+a+e;if(c===d+"/")return c};this.$$compose=function(){var c=Db(this.$$search),e=this.$$hash?"#"+hb(this.$$hash):"";this.$$url=Qb(this.$$path)+(c?"?"+c:"")+e;this.$$absUrl=b+a+this.$$url}}function tb(b){return function(){return this[b]}}function Ic(b,a){return function(c){if(A(c))return this[b];
this[b]=a(c);this.$$compose();return this}}function ie(){var b="",a=!1;this.hashPrefix=function(a){return F(a)?(b=a,this):b};this.html5Mode=function(b){return F(b)?(a=b,this):a};this.$get=["$rootScope","$browser","$sniffer","$rootElement",function(c,d,e,f){function g(a){c.$broadcast("$locationChangeSuccess",h.absUrl(),a)}var h,m,k=d.baseHref(),l=d.url(),p;a?(p=l.substring(0,l.indexOf("/",l.indexOf("//")+2))+(k||"/"),m=e.history?Hc:Ub):(p=Ya(l),m=Tb);h=new m(p,"#"+b);h.$$parse(h.$$rewrite(l));f.on("click",
function(a){if(!a.ctrlKey&&!a.metaKey&&2!=a.which){for(var e=y(a.target);"a"!==u(e[0].nodeName);)if(e[0]===f[0]||!(e=e.parent())[0])return;var g=e.prop("href");R(g)&&"[object SVGAnimatedString]"===g.toString()&&(g=ta(g.animVal).href);if(m===Ub){var k=e.attr("href")||e.attr("xlink:href");if(0>k.indexOf("://"))if(g="#"+b,"/"==k[0])g=p+g+k;else if("#"==k[0])g=p+g+(h.path()||"/")+k;else{for(var l=h.path().split("/"),k=k.split("/"),n=0;n<k.length;n++)"."!=k[n]&&(".."==k[n]?l.pop():k[n].length&&l.push(k[n]));
g=p+g+l.join("/")}}l=h.$$rewrite(g);g&&(!e.attr("target")&&l&&!a.isDefaultPrevented())&&(a.preventDefault(),l!=d.url()&&(h.$$parse(l),c.$apply(),N.angular["ff-684208-preventDefault"]=!0))}});h.absUrl()!=l&&d.url(h.absUrl(),!0);d.onUrlChange(function(a){h.absUrl()!=a&&(c.$evalAsync(function(){var b=h.absUrl();h.$$parse(a);c.$broadcast("$locationChangeStart",a,b).defaultPrevented?(h.$$parse(b),d.url(b)):g(b)}),c.$$phase||c.$digest())});var n=0;c.$watch(function(){var a=d.url(),b=h.$$replace;n&&a==h.absUrl()||
(n++,c.$evalAsync(function(){c.$broadcast("$locationChangeStart",h.absUrl(),a).defaultPrevented?h.$$parse(a):(d.url(h.absUrl(),b),g(a))}));h.$$replace=!1;return n});return h}]}function je(){var b=!0,a=this;this.debugEnabled=function(a){return F(a)?(b=a,this):b};this.$get=["$window",function(c){function d(a){a instanceof Error&&(a.stack?a=a.message&&-1===a.stack.indexOf(a.message)?"Error: "+a.message+"\n"+a.stack:a.stack:a.sourceURL&&(a=a.message+"\n"+a.sourceURL+":"+a.line));return a}function e(a){var b=
c.console||{},e=b[a]||b.log||D;a=!1;try{a=!!e.apply}catch(m){}return a?function(){var a=[];q(arguments,function(b){a.push(d(b))});return e.apply(b,a)}:function(a,b){e(a,null==b?"":b)}}return{log:e("log"),info:e("info"),warn:e("warn"),error:e("error"),debug:function(){var c=e("debug");return function(){b&&c.apply(a,arguments)}}()}}]}function ea(b,a){if("constructor"===b)throw Ba("isecfld",a);return b}function Za(b,a){if(b){if(b.constructor===b)throw Ba("isecfn",a);if(b.document&&b.location&&b.alert&&
b.setInterval)throw Ba("isecwindow",a);if(b.children&&(b.nodeName||b.prop&&b.attr&&b.find))throw Ba("isecdom",a);}return b}function ub(b,a,c,d,e){e=e||{};a=a.split(".");for(var f,g=0;1<a.length;g++){f=ea(a.shift(),d);var h=b[f];h||(h={},b[f]=h);b=h;b.then&&e.unwrapPromises&&(ua(d),"$$v"in b||function(a){a.then(function(b){a.$$v=b})}(b),b.$$v===s&&(b.$$v={}),b=b.$$v)}f=ea(a.shift(),d);return b[f]=c}function Jc(b,a,c,d,e,f,g){ea(b,f);ea(a,f);ea(c,f);ea(d,f);ea(e,f);return g.unwrapPromises?function(g,
m){var k=m&&m.hasOwnProperty(b)?m:g,l;if(null==k)return k;(k=k[b])&&k.then&&(ua(f),"$$v"in k||(l=k,l.$$v=s,l.then(function(a){l.$$v=a})),k=k.$$v);if(!a)return k;if(null==k)return s;(k=k[a])&&k.then&&(ua(f),"$$v"in k||(l=k,l.$$v=s,l.then(function(a){l.$$v=a})),k=k.$$v);if(!c)return k;if(null==k)return s;(k=k[c])&&k.then&&(ua(f),"$$v"in k||(l=k,l.$$v=s,l.then(function(a){l.$$v=a})),k=k.$$v);if(!d)return k;if(null==k)return s;(k=k[d])&&k.then&&(ua(f),"$$v"in k||(l=k,l.$$v=s,l.then(function(a){l.$$v=
a})),k=k.$$v);if(!e)return k;if(null==k)return s;(k=k[e])&&k.then&&(ua(f),"$$v"in k||(l=k,l.$$v=s,l.then(function(a){l.$$v=a})),k=k.$$v);return k}:function(f,g){var k=g&&g.hasOwnProperty(b)?g:f;if(null==k)return k;k=k[b];if(!a)return k;if(null==k)return s;k=k[a];if(!c)return k;if(null==k)return s;k=k[c];if(!d)return k;if(null==k)return s;k=k[d];return e?null==k?s:k=k[e]:k}}function Me(b,a){ea(b,a);return function(a,d){return null==a?s:(d&&d.hasOwnProperty(b)?d:a)[b]}}function Ne(b,a,c){ea(b,c);ea(a,
c);return function(c,e){if(null==c)return s;c=(e&&e.hasOwnProperty(b)?e:c)[b];return null==c?s:c[a]}}function Kc(b,a,c){if(Vb.hasOwnProperty(b))return Vb[b];var d=b.split("."),e=d.length,f;if(a.unwrapPromises||1!==e)if(a.unwrapPromises||2!==e)if(a.csp)f=6>e?Jc(d[0],d[1],d[2],d[3],d[4],c,a):function(b,f){var g=0,h;do h=Jc(d[g++],d[g++],d[g++],d[g++],d[g++],c,a)(b,f),f=s,b=h;while(g<e);return h};else{var g="var p;\n";q(d,function(b,d){ea(b,c);g+="if(s == null) return undefined;\ns="+(d?"s":'((k&&k.hasOwnProperty("'+
b+'"))?k:s)')+'["'+b+'"];\n'+(a.unwrapPromises?'if (s && s.then) {\n pw("'+c.replace(/(["\r\n])/g,"\\$1")+'");\n if (!("$$v" in s)) {\n p=s;\n p.$$v = undefined;\n p.then(function(v) {p.$$v=v;});\n}\n s=s.$$v\n}\n':"")});var g=g+"return s;",h=new Function("s","k","pw",g);h.toString=$(g);f=a.unwrapPromises?function(a,b){return h(a,b,ua)}:h}else f=Ne(d[0],d[1],c);else f=Me(d[0],c);"hasOwnProperty"!==b&&(Vb[b]=f);return f}function ke(){var b={},a={csp:!1,unwrapPromises:!1,logPromiseWarnings:!0};this.unwrapPromises=
function(b){return F(b)?(a.unwrapPromises=!!b,this):a.unwrapPromises};this.logPromiseWarnings=function(b){return F(b)?(a.logPromiseWarnings=b,this):a.logPromiseWarnings};this.$get=["$filter","$sniffer","$log",function(c,d,e){a.csp=d.csp;ua=function(b){a.logPromiseWarnings&&!Lc.hasOwnProperty(b)&&(Lc[b]=!0,e.warn("[$parse] Promise found in the expression `"+b+"`. Automatic unwrapping of promises in Angular expressions is deprecated."))};return function(d){var e;switch(typeof d){case "string":if(b.hasOwnProperty(d))return b[d];
e=new Wb(a);e=(new $a(e,c,a)).parse(d,!1);"hasOwnProperty"!==d&&(b[d]=e);return e;case "function":return d;default:return D}}}]}function me(){this.$get=["$rootScope","$exceptionHandler",function(b,a){return Oe(function(a){b.$evalAsync(a)},a)}]}function Oe(b,a){function c(a){return a}function d(a){return g(a)}var e=function(){var g=[],k,l;return l={resolve:function(a){if(g){var c=g;g=s;k=f(a);c.length&&b(function(){for(var a,b=0,d=c.length;b<d;b++)a=c[b],k.then(a[0],a[1],a[2])})}},reject:function(a){l.resolve(h(a))},
notify:function(a){if(g){var c=g;g.length&&b(function(){for(var b,d=0,e=c.length;d<e;d++)b=c[d],b[2](a)})}},promise:{then:function(b,f,h){var l=e(),J=function(d){try{l.resolve((O(b)?b:c)(d))}catch(e){l.reject(e),a(e)}},E=function(b){try{l.resolve((O(f)?f:d)(b))}catch(c){l.reject(c),a(c)}},B=function(b){try{l.notify((O(h)?h:c)(b))}catch(d){a(d)}};g?g.push([J,E,B]):k.then(J,E,B);return l.promise},"catch":function(a){return this.then(null,a)},"finally":function(a){function b(a,c){var d=e();c?d.resolve(a):
d.reject(a);return d.promise}function d(e,f){var g=null;try{g=(a||c)()}catch(h){return b(h,!1)}return g&&O(g.then)?g.then(function(){return b(e,f)},function(a){return b(a,!1)}):b(e,f)}return this.then(function(a){return d(a,!0)},function(a){return d(a,!1)})}}}},f=function(a){return a&&O(a.then)?a:{then:function(c){var d=e();b(function(){d.resolve(c(a))});return d.promise}}},g=function(a){var b=e();b.reject(a);return b.promise},h=function(c){return{then:function(f,g){var h=e();b(function(){try{h.resolve((O(g)?
g:d)(c))}catch(b){h.reject(b),a(b)}});return h.promise}}};return{defer:e,reject:g,when:function(h,k,l,p){var n=e(),r,t=function(b){try{return(O(k)?k:c)(b)}catch(d){return a(d),g(d)}},J=function(b){try{return(O(l)?l:d)(b)}catch(c){return a(c),g(c)}},E=function(b){try{return(O(p)?p:c)(b)}catch(d){a(d)}};b(function(){f(h).then(function(a){r||(r=!0,n.resolve(f(a).then(t,J,E)))},function(a){r||(r=!0,n.resolve(J(a)))},function(a){r||n.notify(E(a))})});return n.promise},all:function(a){var b=e(),c=0,d=M(a)?
[]:{};q(a,function(a,e){c++;f(a).then(function(a){d.hasOwnProperty(e)||(d[e]=a,--c||b.resolve(d))},function(a){d.hasOwnProperty(e)||b.reject(a)})});0===c&&b.resolve(d);return b.promise}}}function te(){this.$get=["$window","$timeout",function(b,a){var c=b.requestAnimationFrame||b.webkitRequestAnimationFrame||b.mozRequestAnimationFrame,d=b.cancelAnimationFrame||b.webkitCancelAnimationFrame||b.mozCancelAnimationFrame||b.webkitCancelRequestAnimationFrame,e=!!c,f=e?function(a){var b=c(a);return function(){d(b)}}:
function(b){var c=a(b,16.66,!1);return function(){a.cancel(c)}};f.supported=e;return f}]}function le(){var b=10,a=I("$rootScope"),c=null;this.digestTtl=function(a){arguments.length&&(b=a);return b};this.$get=["$injector","$exceptionHandler","$parse","$browser",function(d,e,f,g){function h(){this.$id=db();this.$$phase=this.$parent=this.$$watchers=this.$$nextSibling=this.$$prevSibling=this.$$childHead=this.$$childTail=null;this["this"]=this.$root=this;this.$$destroyed=!1;this.$$asyncQueue=[];this.$$postDigestQueue=
[];this.$$listeners={};this.$$listenerCount={};this.$$isolateBindings={}}function m(b){if(n.$$phase)throw a("inprog",n.$$phase);n.$$phase=b}function k(a,b){var c=f(a);Ra(c,b);return c}function l(a,b,c){do a.$$listenerCount[c]-=b,0===a.$$listenerCount[c]&&delete a.$$listenerCount[c];while(a=a.$parent)}function p(){}h.prototype={constructor:h,$new:function(a){a?(a=new h,a.$root=this.$root,a.$$asyncQueue=this.$$asyncQueue,a.$$postDigestQueue=this.$$postDigestQueue):(this.$$childScopeClass||(this.$$childScopeClass=
function(){this.$$watchers=this.$$nextSibling=this.$$childHead=this.$$childTail=null;this.$$listeners={};this.$$listenerCount={};this.$id=db();this.$$childScopeClass=null},this.$$childScopeClass.prototype=this),a=new this.$$childScopeClass);a["this"]=a;a.$parent=this;a.$$prevSibling=this.$$childTail;this.$$childHead?this.$$childTail=this.$$childTail.$$nextSibling=a:this.$$childHead=this.$$childTail=a;return a},$watch:function(a,b,d){var e=k(a,"watch"),f=this.$$watchers,g={fn:b,last:p,get:e,exp:a,
eq:!!d};c=null;if(!O(b)){var h=k(b||D,"listener");g.fn=function(a,b,c){h(c)}}if("string"==typeof a&&e.constant){var m=g.fn;g.fn=function(a,b,c){m.call(this,a,b,c);Ea(f,g)}}f||(f=this.$$watchers=[]);f.unshift(g);return function(){Ea(f,g);c=null}},$watchGroup:function(a,b){var c=Array(a.length),d=Array(a.length),e=[],f=0,g=this;q(a,function(a,b){e.push(g.$watch(a,function(a,e){d[b]=a;c[b]=e;f++}))},this);e.push(g.$watch(function(){return f},function(){b(d,c,g)}));return function(){q(e,function(a){a()})}},
$watchCollection:function(a,b){var c=this,d,e,g,h=1<b.length,k=0,m=f(a),l=[],n={},p=!0,q=0;return this.$watch(function(){d=m(c);var a,b;if(R(d))if(cb(d))for(e!==l&&(e=l,q=e.length=0,k++),a=d.length,q!==a&&(k++,e.length=q=a),b=0;b<a;b++)e[b]!==e[b]&&d[b]!==d[b]||e[b]===d[b]||(k++,e[b]=d[b]);else{e!==n&&(e=n={},q=0,k++);a=0;for(b in d)d.hasOwnProperty(b)&&(a++,e.hasOwnProperty(b)?e[b]!==d[b]&&(k++,e[b]=d[b]):(q++,e[b]=d[b],k++));if(q>a)for(b in k++,e)e.hasOwnProperty(b)&&!d.hasOwnProperty(b)&&(q--,
delete e[b])}else e!==d&&(e=d,k++);return k},function(){p?(p=!1,b(d,d,c)):b(d,g,c);if(h)if(R(d))if(cb(d)){g=Array(d.length);for(var a=0;a<d.length;a++)g[a]=d[a]}else for(a in g={},d)Mc.call(d,a)&&(g[a]=d[a]);else g=d})},$digest:function(){var d,f,g,h,k=this.$$asyncQueue,l=this.$$postDigestQueue,q,v,s=b,K,L=[],y,G,C;m("$digest");c=null;do{v=!1;for(K=this;k.length;){try{C=k.shift(),C.scope.$eval(C.expression)}catch(F){n.$$phase=null,e(F)}c=null}a:do{if(h=K.$$watchers)for(q=h.length;q--;)try{if(d=h[q])if((f=
d.get(K))!==(g=d.last)&&!(d.eq?ya(f,g):"number"==typeof f&&"number"==typeof g&&isNaN(f)&&isNaN(g)))v=!0,c=d,d.last=d.eq?aa(f):f,d.fn(f,g===p?f:g,K),5>s&&(y=4-s,L[y]||(L[y]=[]),G=O(d.exp)?"fn: "+(d.exp.name||d.exp.toString()):d.exp,G+="; newVal: "+sa(f)+"; oldVal: "+sa(g),L[y].push(G));else if(d===c){v=!1;break a}}catch(u){n.$$phase=null,e(u)}if(!(h=K.$$childHead||K!==this&&K.$$nextSibling))for(;K!==this&&!(h=K.$$nextSibling);)K=K.$parent}while(K=h);if((v||k.length)&&!s--)throw n.$$phase=null,a("infdig",
b,sa(L));}while(v||k.length);for(n.$$phase=null;l.length;)try{l.shift()()}catch(x){e(x)}},$destroy:function(){if(!this.$$destroyed){var a=this.$parent;this.$broadcast("$destroy");this.$$destroyed=!0;this!==n&&(q(this.$$listenerCount,gb(null,l,this)),a.$$childHead==this&&(a.$$childHead=this.$$nextSibling),a.$$childTail==this&&(a.$$childTail=this.$$prevSibling),this.$$prevSibling&&(this.$$prevSibling.$$nextSibling=this.$$nextSibling),this.$$nextSibling&&(this.$$nextSibling.$$prevSibling=this.$$prevSibling),
this.$parent=this.$$nextSibling=this.$$prevSibling=this.$$childHead=this.$$childTail=this.$root=null,this.$$listeners={},this.$$watchers=this.$$asyncQueue=this.$$postDigestQueue=[],this.$destroy=this.$digest=this.$apply=D,this.$on=this.$watch=this.$watchGroup=function(){return D})}},$eval:function(a,b){return f(a)(this,b)},$evalAsync:function(a){n.$$phase||n.$$asyncQueue.length||g.defer(function(){n.$$asyncQueue.length&&n.$digest()});this.$$asyncQueue.push({scope:this,expression:a})},$$postDigest:function(a){this.$$postDigestQueue.push(a)},
$apply:function(a){try{return m("$apply"),this.$eval(a)}catch(b){e(b)}finally{n.$$phase=null;try{n.$digest()}catch(c){throw e(c),c;}}},$on:function(a,b){var c=this.$$listeners[a];c||(this.$$listeners[a]=c=[]);c.push(b);var d=this;do d.$$listenerCount[a]||(d.$$listenerCount[a]=0),d.$$listenerCount[a]++;while(d=d.$parent);var e=this;return function(){c[fb(c,b)]=null;l(e,1,a)}},$emit:function(a,b){var c=[],d,f=this,g=!1,h={name:a,targetScope:f,stopPropagation:function(){g=!0},preventDefault:function(){h.defaultPrevented=
!0},defaultPrevented:!1},k=[h].concat(ra.call(arguments,1)),m,l;do{d=f.$$listeners[a]||c;h.currentScope=f;m=0;for(l=d.length;m<l;m++)if(d[m])try{d[m].apply(null,k)}catch(n){e(n)}else d.splice(m,1),m--,l--;if(g)break;f=f.$parent}while(f);return h},$broadcast:function(a,b){for(var c=this,d=this,f={name:a,targetScope:this,preventDefault:function(){f.defaultPrevented=!0},defaultPrevented:!1},g=[f].concat(ra.call(arguments,1)),h,k;c=d;){f.currentScope=c;d=c.$$listeners[a]||[];h=0;for(k=d.length;h<k;h++)if(d[h])try{d[h].apply(null,
g)}catch(m){e(m)}else d.splice(h,1),h--,k--;if(!(d=c.$$listenerCount[a]&&c.$$childHead||c!==this&&c.$$nextSibling))for(;c!==this&&!(d=c.$$nextSibling);)c=c.$parent}return f}};var n=new h;return n}]}function od(){var b=/^\s*(https?|ftp|mailto|tel|file):/,a=/^\s*(https?|ftp|file|blob):|data:image\//;this.aHrefSanitizationWhitelist=function(a){return F(a)?(b=a,this):b};this.imgSrcSanitizationWhitelist=function(b){return F(b)?(a=b,this):a};this.$get=function(){return function(c,d){var e=d?a:b,f;if(!P||
8<=P)if(f=ta(c).href,""!==f&&!f.match(e))return"unsafe:"+f;return c}}}function Pe(b){if("self"===b)return b;if(x(b)){if(-1<b.indexOf("***"))throw va("iwcard",b);b=b.replace(/([-()\[\]{}+?*.$\^|,:#<!\\])/g,"\\$1").replace(/\x08/g,"\\x08").replace("\\*\\*",".*").replace("\\*","[^:/.?&;]*");return RegExp("^"+b+"$")}if(eb(b))return RegExp("^"+b.source+"$");throw va("imatcher");}function Nc(b){var a=[];F(b)&&q(b,function(b){a.push(Pe(b))});return a}function oe(){this.SCE_CONTEXTS=fa;var b=["self"],a=[];
this.resourceUrlWhitelist=function(a){arguments.length&&(b=Nc(a));return b};this.resourceUrlBlacklist=function(b){arguments.length&&(a=Nc(b));return a};this.$get=["$injector",function(c){function d(a){var b=function(a){this.$$unwrapTrustedValue=function(){return a}};a&&(b.prototype=new a);b.prototype.valueOf=function(){return this.$$unwrapTrustedValue()};b.prototype.toString=function(){return this.$$unwrapTrustedValue().toString()};return b}var e=function(a){throw va("unsafe");};c.has("$sanitize")&&
(e=c.get("$sanitize"));var f=d(),g={};g[fa.HTML]=d(f);g[fa.CSS]=d(f);g[fa.URL]=d(f);g[fa.JS]=d(f);g[fa.RESOURCE_URL]=d(g[fa.URL]);return{trustAs:function(a,b){var c=g.hasOwnProperty(a)?g[a]:null;if(!c)throw va("icontext",a,b);if(null===b||b===s||""===b)return b;if("string"!==typeof b)throw va("itype",a);return new c(b)},getTrusted:function(c,d){if(null===d||d===s||""===d)return d;var f=g.hasOwnProperty(c)?g[c]:null;if(f&&d instanceof f)return d.$$unwrapTrustedValue();if(c===fa.RESOURCE_URL){var f=
ta(d.toString()),l,p,n=!1;l=0;for(p=b.length;l<p;l++)if("self"===b[l]?Pb(f):b[l].exec(f.href)){n=!0;break}if(n)for(l=0,p=a.length;l<p;l++)if("self"===a[l]?Pb(f):a[l].exec(f.href)){n=!1;break}if(n)return d;throw va("insecurl",d.toString());}if(c===fa.HTML)return e(d);throw va("unsafe");},valueOf:function(a){return a instanceof f?a.$$unwrapTrustedValue():a}}}]}function ne(){var b=!0;this.enabled=function(a){arguments.length&&(b=!!a);return b};this.$get=["$parse","$sniffer","$sceDelegate",function(a,
c,d){if(b&&c.msie&&8>c.msieDocumentMode)throw va("iequirks");var e=aa(fa);e.isEnabled=function(){return b};e.trustAs=d.trustAs;e.getTrusted=d.getTrusted;e.valueOf=d.valueOf;b||(e.trustAs=e.getTrusted=function(a,b){return b},e.valueOf=Da);e.parseAs=function(b,c){var d=a(c);return d.literal&&d.constant?d:function(a,c){return e.getTrusted(b,d(a,c))}};var f=e.parseAs,g=e.getTrusted,h=e.trustAs;q(fa,function(a,b){var c=u(b);e[Ta("parse_as_"+c)]=function(b){return f(a,b)};e[Ta("get_trusted_"+c)]=function(b){return g(a,
b)};e[Ta("trust_as_"+c)]=function(b){return h(a,b)}});return e}]}function pe(){this.$get=["$window","$document",function(b,a){var c={},d=Q((/android (\d+)/.exec(u((b.navigator||{}).userAgent))||[])[1]),e=/Boxee/i.test((b.navigator||{}).userAgent),f=a[0]||{},g=f.documentMode,h,m=/^(Moz|webkit|O|ms)(?=[A-Z])/,k=f.body&&f.body.style,l=!1,p=!1;if(k){for(var n in k)if(l=m.exec(n)){h=l[0];h=h.substr(0,1).toUpperCase()+h.substr(1);break}h||(h="WebkitOpacity"in k&&"webkit");l=!!("transition"in k||h+"Transition"in
k);p=!!("animation"in k||h+"Animation"in k);!d||l&&p||(l=x(f.body.style.webkitTransition),p=x(f.body.style.webkitAnimation))}return{history:!(!b.history||!b.history.pushState||4>d||e),hashchange:"onhashchange"in b&&(!g||7<g),hasEvent:function(a){if("input"==a&&9==P)return!1;if(A(c[a])){var b=f.createElement("div");c[a]="on"+a in b}return c[a]},csp:dc(),vendorPrefix:h,transitions:l,animations:p,android:d,msie:P,msieDocumentMode:g}}]}function re(){this.$get=["$rootScope","$browser","$q","$exceptionHandler",
function(b,a,c,d){function e(e,h,m){var k=c.defer(),l=k.promise,p=F(m)&&!m;h=a.defer(function(){try{k.resolve(e())}catch(a){k.reject(a),d(a)}finally{delete f[l.$$timeoutId]}p||b.$apply()},h);l.$$timeoutId=h;f[h]=k;return l}var f={};e.cancel=function(b){return b&&b.$$timeoutId in f?(f[b.$$timeoutId].reject("canceled"),delete f[b.$$timeoutId],a.defer.cancel(b.$$timeoutId)):!1};return e}]}function ta(b,a){var c=b;P&&(V.setAttribute("href",c),c=V.href);V.setAttribute("href",c);return{href:V.href,protocol:V.protocol?
V.protocol.replace(/:$/,""):"",host:V.host,search:V.search?V.search.replace(/^\?/,""):"",hash:V.hash?V.hash.replace(/^#/,""):"",hostname:V.hostname,port:V.port,pathname:"/"===V.pathname.charAt(0)?V.pathname:"/"+V.pathname}}function Pb(b){b=x(b)?ta(b):b;return b.protocol===Oc.protocol&&b.host===Oc.host}function se(){this.$get=$(N)}function oc(b){function a(d,e){if(R(d)){var f={};q(d,function(b,c){f[c]=a(c,b)});return f}return b.factory(d+c,e)}var c="Filter";this.register=a;this.$get=["$injector",function(a){return function(b){return a.get(b+
c)}}];a("currency",Pc);a("date",Qc);a("filter",Qe);a("json",Re);a("limitTo",Se);a("lowercase",Te);a("number",Rc);a("orderBy",Sc);a("uppercase",Ue)}function Qe(){return function(b,a,c){if(!M(b))return b;var d=typeof c,e=[];e.check=function(a){for(var b=0;b<e.length;b++)if(!e[b](a))return!1;return!0};"function"!==d&&(c="boolean"===d&&c?function(a,b){return Qa.equals(a,b)}:function(a,b){if(a&&b&&"object"===typeof a&&"object"===typeof b){for(var d in a)if("$"!==d.charAt(0)&&Mc.call(a,d)&&c(a[d],b[d]))return!0;
return!1}b=(""+b).toLowerCase();return-1<(""+a).toLowerCase().indexOf(b)});var f=function(a,b){if("string"==typeof b&&"!"===b.charAt(0))return!f(a,b.substr(1));switch(typeof a){case "boolean":case "number":case "string":return c(a,b);case "object":switch(typeof b){case "object":return c(a,b);default:for(var d in a)if("$"!==d.charAt(0)&&f(a[d],b))return!0}return!1;case "array":for(d=0;d<a.length;d++)if(f(a[d],b))return!0;return!1;default:return!1}};switch(typeof a){case "boolean":case "number":case "string":a=
{$:a};case "object":for(var g in a)(function(b){"undefined"!=typeof a[b]&&e.push(function(c){return f("$"==b?c:c&&c[b],a[b])})})(g);break;case "function":e.push(a);break;default:return b}d=[];for(g=0;g<b.length;g++){var h=b[g];e.check(h)&&d.push(h)}return d}}function Pc(b){var a=b.NUMBER_FORMATS;return function(b,d){A(d)&&(d=a.CURRENCY_SYM);return Tc(b,a.PATTERNS[1],a.GROUP_SEP,a.DECIMAL_SEP,2).replace(/\u00A4/g,d)}}function Rc(b){var a=b.NUMBER_FORMATS;return function(b,d){return Tc(b,a.PATTERNS[0],
a.GROUP_SEP,a.DECIMAL_SEP,d)}}function Tc(b,a,c,d,e){if(null==b||!isFinite(b)||R(b))return"";var f=0>b;b=Math.abs(b);var g=b+"",h="",m=[],k=!1;if(-1!==g.indexOf("e")){var l=g.match(/([\d\.]+)e(-?)(\d+)/);l&&"-"==l[2]&&l[3]>e+1?g="0":(h=g,k=!0)}if(k)0<e&&(-1<b&&1>b)&&(h=b.toFixed(e));else{g=(g.split(Uc)[1]||"").length;A(e)&&(e=Math.min(Math.max(a.minFrac,g),a.maxFrac));g=Math.pow(10,e);b=Math.round(b*g)/g;b=(""+b).split(Uc);g=b[0];b=b[1]||"";var l=0,p=a.lgSize,n=a.gSize;if(g.length>=p+n)for(l=g.length-
p,k=0;k<l;k++)0===(l-k)%n&&0!==k&&(h+=c),h+=g.charAt(k);for(k=l;k<g.length;k++)0===(g.length-k)%p&&0!==k&&(h+=c),h+=g.charAt(k);for(;b.length<e;)b+="0";e&&"0"!==e&&(h+=d+b.substr(0,e))}m.push(f?a.negPre:a.posPre);m.push(h);m.push(f?a.negSuf:a.posSuf);return m.join("")}function vb(b,a,c){var d="";0>b&&(d="-",b=-b);for(b=""+b;b.length<a;)b="0"+b;c&&(b=b.substr(b.length-a));return d+b}function X(b,a,c,d){c=c||0;return function(e){e=e["get"+b]();if(0<c||e>-c)e+=c;0===e&&-12==c&&(e=12);return vb(e,a,d)}}
function wb(b,a){return function(c,d){var e=c["get"+b](),f=Fa(a?"SHORT"+b:b);return d[f][e]}}function Vc(b){var a=(new Date(b,0,1)).getDay();return new Date(b,0,(4>=a?5:12)-a)}function Wc(b){return function(a){var c=Vc(a.getFullYear());a=+new Date(a.getFullYear(),a.getMonth(),a.getDate()+(4-a.getDay()))-+c;a=1+Math.round(a/6048E5);return vb(a,b)}}function Qc(b){function a(a){var b;if(b=a.match(c)){a=new Date(0);var f=0,g=0,h=b[8]?a.setUTCFullYear:a.setFullYear,m=b[8]?a.setUTCHours:a.setHours;b[9]&&
(f=Q(b[9]+b[10]),g=Q(b[9]+b[11]));h.call(a,Q(b[1]),Q(b[2])-1,Q(b[3]));f=Q(b[4]||0)-f;g=Q(b[5]||0)-g;h=Q(b[6]||0);b=Math.round(1E3*parseFloat("0."+(b[7]||0)));m.call(a,f,g,h,b)}return a}var c=/^(\d{4})-?(\d\d)-?(\d\d)(?:T(\d\d)(?::?(\d\d)(?::?(\d\d)(?:\.(\d+))?)?)?(Z|([+-])(\d\d):?(\d\d))?)?$/;return function(c,e){var f="",g=[],h,m;e=e||"mediumDate";e=b.DATETIME_FORMATS[e]||e;x(c)&&(c=Ve.test(c)?Q(c):a(c));Cb(c)&&(c=new Date(c));if(!qa(c))return c;for(;e;)(m=We.exec(e))?(g=g.concat(ra.call(m,1)),e=
g.pop()):(g.push(e),e=null);q(g,function(a){h=Xe[a];f+=h?h(c,b.DATETIME_FORMATS):a.replace(/(^'|'$)/g,"").replace(/''/g,"'")});return f}}function Re(){return function(b){return sa(b,!0)}}function Se(){return function(b,a){if(!M(b)&&!x(b))return b;a=Infinity===Math.abs(Number(a))?Number(a):Q(a);if(x(b))return a?0<=a?b.slice(0,a):b.slice(a,b.length):"";var c=[],d,e;a>b.length?a=b.length:a<-b.length&&(a=-b.length);0<a?(d=0,e=a):(d=b.length+a,e=b.length);for(;d<e;d++)c.push(b[d]);return c}}function Sc(b){return function(a,
c,d){function e(a,b){return Pa(b)?function(b,c){return a(c,b)}:a}function f(a,b){var c=typeof a,d=typeof b;return c==d?("string"==c&&(a=a.toLowerCase(),b=b.toLowerCase()),a===b?0:a<b?-1:1):c<d?-1:1}if(!M(a)||!c)return a;c=M(c)?c:[c];c=fd(c,function(a){var c=!1,d=a||Da;if(x(a)){if("+"==a.charAt(0)||"-"==a.charAt(0))c="-"==a.charAt(0),a=a.substring(1);d=b(a);if(d.constant){var g=d();return e(function(a,b){return f(a[g],b[g])},c)}}return e(function(a,b){return f(d(a),d(b))},c)});for(var g=[],h=0;h<a.length;h++)g.push(a[h]);
return g.sort(e(function(a,b){for(var d=0;d<c.length;d++){var e=c[d](a,b);if(0!==e)return e}return 0},d))}}function wa(b){O(b)&&(b={link:b});b.restrict=b.restrict||"AC";return $(b)}function Xc(b,a,c,d){function e(a,c){c=c?"-"+ib(c,"-"):"";d.removeClass(b,(a?xb:yb)+c);d.addClass(b,(a?yb:xb)+c)}var f=this,g=b.parent().controller("form")||zb,h=0,m=f.$error={},k=[];f.$name=a.name||a.ngForm;f.$dirty=!1;f.$pristine=!0;f.$valid=!0;f.$invalid=!1;g.$addControl(f);b.addClass(Ma);e(!0);f.$addControl=function(a){Aa(a.$name,
"input");k.push(a);a.$name&&(f[a.$name]=a)};f.$removeControl=function(a){a.$name&&f[a.$name]===a&&delete f[a.$name];q(m,function(b,c){f.$setValidity(c,!0,a)});Ea(k,a)};f.$setValidity=function(a,b,c){var d=m[a];if(b)d&&(Ea(d,c),d.length||(h--,h||(e(b),f.$valid=!0,f.$invalid=!1),m[a]=!1,e(!0,a),g.$setValidity(a,!0,f)));else{h||e(b);if(d){if(-1!=fb(d,c))return}else m[a]=d=[],h++,e(!1,a),g.$setValidity(a,!1,f);d.push(c);f.$valid=!1;f.$invalid=!0}};f.$setDirty=function(){d.removeClass(b,Ma);d.addClass(b,
Ab);f.$dirty=!0;f.$pristine=!1;g.$setDirty()};f.$setPristine=function(){d.removeClass(b,Ab);d.addClass(b,Ma);f.$dirty=!1;f.$pristine=!0;q(k,function(a){a.$setPristine()})}}function pa(b,a,c,d){b.$setValidity(a,c);return c?d:s}function Ye(b,a,c){var d=c.prop("validity");R(d)&&b.$parsers.push(function(c){if(b.$error[a]||!(d.badInput||d.customError||d.typeMismatch)||d.valueMissing)return c;b.$setValidity(a,!1)})}function ab(b,a,c,d,e,f){var g=a.prop("validity"),h=a[0].placeholder,m={};if(!e.android){var k=
!1;a.on("compositionstart",function(a){k=!0});a.on("compositionend",function(){k=!1;l()})}var l=function(e){if(!k){var f=a.val(),n=e&&e.type;if(P&&"input"===(e||m).type&&a[0].placeholder!==h)h=a[0].placeholder;else if(Pa(c.ngTrim||"T")&&(f=Y(f)),d.$viewValue!==f||g&&""===f&&!g.valueMissing)b.$$phase?d.$setViewValue(f,n):b.$apply(function(){d.$setViewValue(f,n)})}};if(d.$options&&d.$options.updateOn)a.on(d.$options.updateOn,l);if(!d.$options||d.$options.updateOnDefault){if(e.hasEvent("input"))a.on("input",
l);else{var p,n=function(a){p||(p=f.defer(function(){l(a);p=null}))};a.on("keydown",function(a){var b=a.keyCode;91===b||(15<b&&19>b||37<=b&&40>=b)||n(a)});if(e.hasEvent("paste"))a.on("paste cut",n)}a.on("change",l)}d.$render=function(){a.val(d.$isEmpty(d.$viewValue)?"":d.$viewValue)};var r=c.ngPattern;r&&((e=r.match(/^\/(.*)\/([gim]*)$/))?(r=RegExp(e[1],e[2]),e=function(a){return pa(d,"pattern",d.$isEmpty(a)||r.test(a),a)}):e=function(c){var e=b.$eval(r);if(!e||!e.test)throw I("ngPattern")("noregexp",
r,e,ga(a));return pa(d,"pattern",d.$isEmpty(c)||e.test(c),c)},d.$formatters.push(e),d.$parsers.push(e));if(c.ngMinlength){var q=Q(c.ngMinlength);e=function(a){return pa(d,"minlength",d.$isEmpty(a)||a.length>=q,a)};d.$parsers.push(e);d.$formatters.push(e)}if(c.ngMaxlength){var J=Q(c.ngMaxlength);e=function(a){return pa(d,"maxlength",d.$isEmpty(a)||a.length<=J,a)};d.$parsers.push(e);d.$formatters.push(e)}}function Bb(b,a){return function(c){var d;return qa(c)?c:x(c)&&(b.lastIndex=0,c=b.exec(c))?(c.shift(),
d={yyyy:0,MM:1,dd:1,HH:0,mm:0},q(c,function(b,c){c<a.length&&(d[a[c]]=+b)}),new Date(d.yyyy,d.MM-1,d.dd,d.HH,d.mm)):NaN}}function bb(b,a,c,d){return function(e,f,g,h,m,k,l){ab(e,f,g,h,m,k);h.$parsers.push(function(d){if(h.$isEmpty(d))return h.$setValidity(b,!0),null;if(a.test(d))return h.$setValidity(b,!0),c(d);h.$setValidity(b,!1);return s});h.$formatters.push(function(a){return qa(a)?l("date")(a,d):""});g.min&&(e=function(a){var b=h.$isEmpty(a)||c(a)>=c(g.min);h.$setValidity("min",b);return b?a:
s},h.$parsers.push(e),h.$formatters.push(e));g.max&&(e=function(a){var b=h.$isEmpty(a)||c(a)<=c(g.max);h.$setValidity("max",b);return b?a:s},h.$parsers.push(e),h.$formatters.push(e))}}function Xb(b,a){b="ngClass"+b;return["$animate",function(c){function d(a,b){var c=[],d=0;a:for(;d<a.length;d++){for(var e=a[d],l=0;l<b.length;l++)if(e==b[l])continue a;c.push(e)}return c}function e(a){if(!M(a)){if(x(a))return a.split(" ");if(R(a)){var b=[];q(a,function(a,c){a&&b.push(c)});return b}}return a}return{restrict:"AC",
link:function(f,g,h){function m(a,b){var c=g.data("$classCounts")||{},d=[];q(a,function(a){if(0<b||c[a])c[a]=(c[a]||0)+b,c[a]===+(0<b)&&d.push(a)});g.data("$classCounts",c);return d.join(" ")}function k(b){if(!0===a||f.$index%2===a){var k=e(b||[]);if(!l){var q=m(k,1);h.$addClass(q)}else if(!ya(b,l)){var t=e(l),q=d(k,t),k=d(t,k),k=m(k,-1),q=m(q,1);0===q.length?c.removeClass(g,k):0===k.length?c.addClass(g,q):c.setClass(g,q,k)}}l=aa(b)}var l;f.$watch(h[b],k,!0);h.$observe("class",function(a){k(f.$eval(h[b]))});
"ngClass"!==b&&f.$watch("$index",function(c,d){var g=c&1;if(g!==d&1){var k=e(f.$eval(h[b]));g===a?(g=m(k,1),h.$addClass(g)):(g=m(k,-1),h.$removeClass(g))}})}}}]}var u=function(b){return x(b)?b.toLowerCase():b},Mc=Object.prototype.hasOwnProperty,Fa=function(b){return x(b)?b.toUpperCase():b},P,y,Ga,ra=[].slice,Ze=[].push,xa=Object.prototype.toString,Oa=I("ng"),Qa=N.angular||(N.angular={}),Sa,La,ka=["0","0","0"];P=Q((/msie (\d+)/.exec(u(navigator.userAgent))||[])[1]);isNaN(P)&&(P=Q((/trident\/.*; rv:(\d+)/.exec(u(navigator.userAgent))||
[])[1]));D.$inject=[];Da.$inject=[];var Y=function(){return String.prototype.trim?function(b){return x(b)?b.trim():b}:function(b){return x(b)?b.replace(/^\s\s*/,"").replace(/\s\s*$/,""):b}}();La=9>P?function(b){b=b.nodeName?b:b[0];return b.scopeName&&"HTML"!=b.scopeName?Fa(b.scopeName+":"+b.nodeName):b.nodeName}:function(b){return b.nodeName?b.nodeName:b[0].nodeName};var hc=["ng-","data-ng-","ng:","x-ng-"],jd=/[A-Z]/g,md={full:"1.3.0-beta.7",major:1,minor:3,dot:0,codeName:"proper-attribution"},Va=
U.cache={},jb=U.expando="ng-"+(new Date).getTime(),Be=1,sb=N.document.addEventListener?function(b,a,c){b.addEventListener(a,c,!1)}:function(b,a,c){b.attachEvent("on"+a,c)},Ua=N.document.removeEventListener?function(b,a,c){b.removeEventListener(a,c,!1)}:function(b,a,c){b.detachEvent("on"+a,c)};U._data=function(b){return this.cache[b[this.expando]]||{}};var ve=/([\:\-\_]+(.))/g,we=/^moz([A-Z])/,Kb=I("jqLite"),Ae=/^<(\w+)\s*\/?>(?:<\/\1>|)$/,Jb=/<|&#?\w+;/,ye=/<([\w:]+)/,ze=/<(?!area|br|col|embed|hr|img|input|link|meta|param)(([\w:]+)[^>]*)\/>/gi,
da={option:[1,'<select multiple="multiple">',"</select>"],thead:[1,"<table>","</table>"],col:[2,"<table><colgroup>","</colgroup></table>"],tr:[2,"<table><tbody>","</tbody></table>"],td:[3,"<table><tbody><tr>","</tr></tbody></table>"],_default:[0,"",""]};da.optgroup=da.option;da.tbody=da.tfoot=da.colgroup=da.caption=da.thead;da.th=da.td;var Ka=U.prototype={ready:function(b){function a(){c||(c=!0,b())}var c=!1;"complete"===S.readyState?setTimeout(a):(this.on("DOMContentLoaded",a),U(N).on("load",a))},
toString:function(){var b=[];q(this,function(a){b.push(""+a)});return"["+b.join(", ")+"]"},eq:function(b){return 0<=b?y(this[b]):y(this[this.length+b])},length:0,push:Ze,sort:[].sort,splice:[].splice},nb={};q("multiple selected checked disabled readOnly required open".split(" "),function(b){nb[u(b)]=b});var wc={};q("input select option textarea button form details".split(" "),function(b){wc[Fa(b)]=!0});q({data:sc,inheritedData:mb,scope:function(b){return y(b).data("$scope")||mb(b.parentNode||b,["$isolateScope",
"$scope"])},isolateScope:function(b){return y(b).data("$isolateScope")||y(b).data("$isolateScopeNoTemplate")},controller:tc,injector:function(b){return mb(b,"$injector")},removeAttr:function(b,a){b.removeAttribute(a)},hasClass:Mb,css:function(b,a,c){a=Ta(a);if(F(c))b.style[a]=c;else{var d;8>=P&&(d=b.currentStyle&&b.currentStyle[a],""===d&&(d="auto"));d=d||b.style[a];8>=P&&(d=""===d?s:d);return d}},attr:function(b,a,c){var d=u(a);if(nb[d])if(F(c))c?(b[a]=!0,b.setAttribute(a,d)):(b[a]=!1,b.removeAttribute(d));
else return b[a]||(b.attributes.getNamedItem(a)||D).specified?d:s;else if(F(c))b.setAttribute(a,c);else if(b.getAttribute)return b=b.getAttribute(a,2),null===b?s:b},prop:function(b,a,c){if(F(c))b[a]=c;else return b[a]},text:function(){function b(b,d){var e=a[b.nodeType];if(A(d))return e?b[e]:"";b[e]=d}var a=[];9>P?(a[1]="innerText",a[3]="nodeValue"):a[1]=a[3]="textContent";b.$dv="";return b}(),val:function(b,a){if(A(a)){if("SELECT"===La(b)&&b.multiple){var c=[];q(b.options,function(a){a.selected&&
c.push(a.value||a.text)});return 0===c.length?null:c}return b.value}b.value=a},html:function(b,a){if(A(a))return b.innerHTML;for(var c=0,d=b.childNodes;c<d.length;c++)Ha(d[c]);b.innerHTML=a},empty:uc},function(b,a){U.prototype[a]=function(a,d){var e,f;if(b!==uc&&(2==b.length&&b!==Mb&&b!==tc?a:d)===s){if(R(a)){for(e=0;e<this.length;e++)if(b===sc)b(this[e],a);else for(f in a)b(this[e],f,a[f]);return this}e=b.$dv;f=e===s?Math.min(this.length,1):this.length;for(var g=0;g<f;g++){var h=b(this[g],a,d);e=
e?e+h:h}return e}for(e=0;e<this.length;e++)b(this[e],a,d);return this}});q({removeData:qc,dealoc:Ha,on:function a(c,d,e,f){if(F(f))throw Kb("onargs");var g=la(c,"events"),h=la(c,"handle");g||la(c,"events",g={});h||la(c,"handle",h=Ce(c,g));q(d.split(" "),function(d){var f=g[d];if(!f){if("mouseenter"==d||"mouseleave"==d){var l=S.body.contains||S.body.compareDocumentPosition?function(a,c){var d=9===a.nodeType?a.documentElement:a,e=c&&c.parentNode;return a===e||!!(e&&1===e.nodeType&&(d.contains?d.contains(e):
a.compareDocumentPosition&&a.compareDocumentPosition(e)&16))}:function(a,c){if(c)for(;c=c.parentNode;)if(c===a)return!0;return!1};g[d]=[];a(c,{mouseleave:"mouseout",mouseenter:"mouseover"}[d],function(a){var c=a.relatedTarget;c&&(c===this||l(this,c))||h(a,d)})}else sb(c,d,h),g[d]=[];f=g[d]}f.push(e)})},off:rc,one:function(a,c,d){a=y(a);a.on(c,function f(){a.off(c,d);a.off(c,f)});a.on(c,d)},replaceWith:function(a,c){var d,e=a.parentNode;Ha(a);q(new U(c),function(c){d?e.insertBefore(c,d.nextSibling):
e.replaceChild(c,a);d=c})},children:function(a){var c=[];q(a.childNodes,function(a){1===a.nodeType&&c.push(a)});return c},contents:function(a){return a.contentDocument||a.childNodes||[]},append:function(a,c){q(new U(c),function(c){1!==a.nodeType&&11!==a.nodeType||a.appendChild(c)})},prepend:function(a,c){if(1===a.nodeType){var d=a.firstChild;q(new U(c),function(c){a.insertBefore(c,d)})}},wrap:function(a,c){c=y(c)[0];var d=a.parentNode;d&&d.replaceChild(c,a);c.appendChild(a)},remove:function(a){Ha(a);
var c=a.parentNode;c&&c.removeChild(a)},after:function(a,c){var d=a,e=a.parentNode;q(new U(c),function(a){e.insertBefore(a,d.nextSibling);d=a})},addClass:lb,removeClass:kb,toggleClass:function(a,c,d){c&&q(c.split(" "),function(c){var f=d;A(f)&&(f=!Mb(a,c));(f?lb:kb)(a,c)})},parent:function(a){return(a=a.parentNode)&&11!==a.nodeType?a:null},next:function(a){if(a.nextElementSibling)return a.nextElementSibling;for(a=a.nextSibling;null!=a&&1!==a.nodeType;)a=a.nextSibling;return a},find:function(a,c){return a.getElementsByTagName?
a.getElementsByTagName(c):[]},clone:Lb,triggerHandler:function(a,c,d){c=(la(a,"events")||{})[c];d=d||[];var e=[{preventDefault:D,stopPropagation:D}];q(c,function(c){c.apply(a,e.concat(d))})}},function(a,c){U.prototype[c]=function(c,e,f){for(var g,h=0;h<this.length;h++)A(g)?(g=a(this[h],c,e,f),F(g)&&(g=y(g))):pc(g,a(this[h],c,e,f));return F(g)?g:this};U.prototype.bind=U.prototype.on;U.prototype.unbind=U.prototype.off});Wa.prototype={put:function(a,c){this[Ia(a)]=c},get:function(a){return this[Ia(a)]},
remove:function(a){var c=this[a=Ia(a)];delete this[a];return c}};var yc=/^function\s*[^\(]*\(\s*([^\)]*)\)/m,Ee=/,/,Fe=/^\s*(_?)(\S+?)\1\s*$/,xc=/((\/\/.*$)|(\/\*[\s\S]*?\*\/))/mg,Ja=I("$injector");Eb.$$annotate=Nb;var $e=I("$animate"),Zd=["$provide",function(a){this.$$selectors={};this.register=function(c,d){var e=c+"-animation";if(c&&"."!=c.charAt(0))throw $e("notcsel",c);this.$$selectors[c.substr(1)]=e;a.factory(e,d)};this.classNameFilter=function(a){1===arguments.length&&(this.$$classNameFilter=
a instanceof RegExp?a:null);return this.$$classNameFilter};this.$get=["$timeout","$$asyncCallback",function(a,d){return{enter:function(a,c,g,h){g?g.after(a):c.prepend(a);h&&d(h)},leave:function(a,c){a.remove();c&&d(c)},move:function(a,c,d,h){this.enter(a,c,d,h)},addClass:function(a,c,g){c=x(c)?c:M(c)?c.join(" "):"";q(a,function(a){lb(a,c)});g&&d(g)},removeClass:function(a,c,g){c=x(c)?c:M(c)?c.join(" "):"";q(a,function(a){kb(a,c)});g&&d(g)},setClass:function(a,c,g,h){q(a,function(a){lb(a,c);kb(a,g)});
h&&d(h)},enabled:D}}]}],ia=I("$compile");kc.$inject=["$provide","$$sanitizeUriProvider"];var Ie=/^(x[\:\-_]|data[\:\-_])/i,Ec=I("$interpolate"),af=/^([^\?#]*)(\?([^#]*))?(#(.*))?$/,Le={http:80,https:443,ftp:21},Sb=I("$location");Ub.prototype=Tb.prototype=Hc.prototype={$$html5:!1,$$replace:!1,absUrl:tb("$$absUrl"),url:function(a,c){if(A(a))return this.$$url;var d=af.exec(a);d[1]&&this.path(decodeURIComponent(d[1]));(d[2]||d[1])&&this.search(d[3]||"");this.hash(d[5]||"",c);return this},protocol:tb("$$protocol"),
host:tb("$$host"),port:tb("$$port"),path:Ic("$$path",function(a){return"/"==a.charAt(0)?a:"/"+a}),search:function(a,c){switch(arguments.length){case 0:return this.$$search;case 1:if(x(a))this.$$search=gc(a);else if(R(a))this.$$search=a;else throw Sb("isrcharg");break;default:A(c)||null===c?delete this.$$search[a]:this.$$search[a]=c}this.$$compose();return this},hash:Ic("$$hash",Da),replace:function(){this.$$replace=!0;return this}};var Ba=I("$parse"),Lc={},ua,Na={"null":function(){return null},"true":function(){return!0},
"false":function(){return!1},undefined:D,"+":function(a,c,d,e){d=d(a,c);e=e(a,c);return F(d)?F(e)?d+e:d:F(e)?e:s},"-":function(a,c,d,e){d=d(a,c);e=e(a,c);return(F(d)?d:0)-(F(e)?e:0)},"*":function(a,c,d,e){return d(a,c)*e(a,c)},"/":function(a,c,d,e){return d(a,c)/e(a,c)},"%":function(a,c,d,e){return d(a,c)%e(a,c)},"^":function(a,c,d,e){return d(a,c)^e(a,c)},"=":D,"===":function(a,c,d,e){return d(a,c)===e(a,c)},"!==":function(a,c,d,e){return d(a,c)!==e(a,c)},"==":function(a,c,d,e){return d(a,c)==e(a,
c)},"!=":function(a,c,d,e){return d(a,c)!=e(a,c)},"<":function(a,c,d,e){return d(a,c)<e(a,c)},">":function(a,c,d,e){return d(a,c)>e(a,c)},"<=":function(a,c,d,e){return d(a,c)<=e(a,c)},">=":function(a,c,d,e){return d(a,c)>=e(a,c)},"&&":function(a,c,d,e){return d(a,c)&&e(a,c)},"||":function(a,c,d,e){return d(a,c)||e(a,c)},"&":function(a,c,d,e){return d(a,c)&e(a,c)},"|":function(a,c,d,e){return e(a,c)(a,c,d(a,c))},"!":function(a,c,d){return!d(a,c)}},bf={n:"\n",f:"\f",r:"\r",t:"\t",v:"\v","'":"'",'"':'"'},
Wb=function(a){this.options=a};Wb.prototype={constructor:Wb,lex:function(a){this.text=a;this.index=0;this.ch=s;this.lastCh=":";this.tokens=[];var c;for(a=[];this.index<this.text.length;){this.ch=this.text.charAt(this.index);if(this.is("\"'"))this.readString(this.ch);else if(this.isNumber(this.ch)||this.is(".")&&this.isNumber(this.peek()))this.readNumber();else if(this.isIdent(this.ch))this.readIdent(),this.was("{,")&&("{"===a[0]&&(c=this.tokens[this.tokens.length-1]))&&(c.json=-1===c.text.indexOf("."));
else if(this.is("(){}[].,;:?"))this.tokens.push({index:this.index,text:this.ch,json:this.was(":[,")&&this.is("{[")||this.is("}]:,")}),this.is("{[")&&a.unshift(this.ch),this.is("}]")&&a.shift(),this.index++;else if(this.isWhitespace(this.ch)){this.index++;continue}else{var d=this.ch+this.peek(),e=d+this.peek(2),f=Na[this.ch],g=Na[d],h=Na[e];h?(this.tokens.push({index:this.index,text:e,fn:h}),this.index+=3):g?(this.tokens.push({index:this.index,text:d,fn:g}),this.index+=2):f?(this.tokens.push({index:this.index,
text:this.ch,fn:f,json:this.was("[,:")&&this.is("+-")}),this.index+=1):this.throwError("Unexpected next character ",this.index,this.index+1)}this.lastCh=this.ch}return this.tokens},is:function(a){return-1!==a.indexOf(this.ch)},was:function(a){return-1!==a.indexOf(this.lastCh)},peek:function(a){a=a||1;return this.index+a<this.text.length?this.text.charAt(this.index+a):!1},isNumber:function(a){return"0"<=a&&"9">=a},isWhitespace:function(a){return" "===a||"\r"===a||"\t"===a||"\n"===a||"\v"===a||"\u00a0"===
a},isIdent:function(a){return"a"<=a&&"z">=a||"A"<=a&&"Z">=a||"_"===a||"$"===a},isExpOperator:function(a){return"-"===a||"+"===a||this.isNumber(a)},throwError:function(a,c,d){d=d||this.index;c=F(c)?"s "+c+"-"+this.index+" ["+this.text.substring(c,d)+"]":" "+d;throw Ba("lexerr",a,c,this.text);},readNumber:function(){for(var a="",c=this.index;this.index<this.text.length;){var d=u(this.text.charAt(this.index));if("."==d||this.isNumber(d))a+=d;else{var e=this.peek();if("e"==d&&this.isExpOperator(e))a+=
d;else if(this.isExpOperator(d)&&e&&this.isNumber(e)&&"e"==a.charAt(a.length-1))a+=d;else if(!this.isExpOperator(d)||e&&this.isNumber(e)||"e"!=a.charAt(a.length-1))break;else this.throwError("Invalid exponent")}this.index++}a*=1;this.tokens.push({index:c,text:a,json:!0,fn:function(){return a}})},readIdent:function(){for(var a=this,c="",d=this.index,e,f,g,h;this.index<this.text.length;){h=this.text.charAt(this.index);if("."===h||this.isIdent(h)||this.isNumber(h))"."===h&&(e=this.index),c+=h;else break;
this.index++}if(e)for(f=this.index;f<this.text.length;){h=this.text.charAt(f);if("("===h){g=c.substr(e-d+1);c=c.substr(0,e-d);this.index=f;break}if(this.isWhitespace(h))f++;else break}d={index:d,text:c};if(Na.hasOwnProperty(c))d.fn=Na[c],d.json=Na[c];else{var m=Kc(c,this.options,this.text);d.fn=w(function(a,c){return m(a,c)},{assign:function(d,e){return ub(d,c,e,a.text,a.options)}})}this.tokens.push(d);g&&(this.tokens.push({index:e,text:".",json:!1}),this.tokens.push({index:e+1,text:g,json:!1}))},
readString:function(a){var c=this.index;this.index++;for(var d="",e=a,f=!1;this.index<this.text.length;){var g=this.text.charAt(this.index),e=e+g;if(f)"u"===g?(g=this.text.substring(this.index+1,this.index+5),g.match(/[\da-f]{4}/i)||this.throwError("Invalid unicode escape [\\u"+g+"]"),this.index+=4,d+=String.fromCharCode(parseInt(g,16))):d=(f=bf[g])?d+f:d+g,f=!1;else if("\\"===g)f=!0;else{if(g===a){this.index++;this.tokens.push({index:c,text:e,string:d,json:!0,fn:function(){return d}});return}d+=
g}this.index++}this.throwError("Unterminated quote",c)}};var $a=function(a,c,d){this.lexer=a;this.$filter=c;this.options=d};$a.ZERO=w(function(){return 0},{constant:!0});$a.prototype={constructor:$a,parse:function(a,c){this.text=a;this.json=c;this.tokens=this.lexer.lex(a);c&&(this.assignment=this.logicalOR,this.functionCall=this.fieldAccess=this.objectIndex=this.filterChain=function(){this.throwError("is not valid json",{text:a,index:0})});var d=c?this.primary():this.statements();0!==this.tokens.length&&
this.throwError("is an unexpected token",this.tokens[0]);d.literal=!!d.literal;d.constant=!!d.constant;return d},primary:function(){var a;if(this.expect("("))a=this.filterChain(),this.consume(")");else if(this.expect("["))a=this.arrayDeclaration();else if(this.expect("{"))a=this.object();else{var c=this.expect();(a=c.fn)||this.throwError("not a primary expression",c);c.json&&(a.constant=!0,a.literal=!0)}for(var d;c=this.expect("(","[",".");)"("===c.text?(a=this.functionCall(a,d),d=null):"["===c.text?
(d=a,a=this.objectIndex(a)):"."===c.text?(d=a,a=this.fieldAccess(a)):this.throwError("IMPOSSIBLE");return a},throwError:function(a,c){throw Ba("syntax",c.text,a,c.index+1,this.text,this.text.substring(c.index));},peekToken:function(){if(0===this.tokens.length)throw Ba("ueoe",this.text);return this.tokens[0]},peek:function(a,c,d,e){if(0<this.tokens.length){var f=this.tokens[0],g=f.text;if(g===a||g===c||g===d||g===e||!(a||c||d||e))return f}return!1},expect:function(a,c,d,e){return(a=this.peek(a,c,d,
e))?(this.json&&!a.json&&this.throwError("is not valid json",a),this.tokens.shift(),a):!1},consume:function(a){this.expect(a)||this.throwError("is unexpected, expecting ["+a+"]",this.peek())},unaryFn:function(a,c){return w(function(d,e){return a(d,e,c)},{constant:c.constant})},ternaryFn:function(a,c,d){return w(function(e,f){return a(e,f)?c(e,f):d(e,f)},{constant:a.constant&&c.constant&&d.constant})},binaryFn:function(a,c,d){return w(function(e,f){return c(e,f,a,d)},{constant:a.constant&&d.constant})},
statements:function(){for(var a=[];;)if(0<this.tokens.length&&!this.peek("}",")",";","]")&&a.push(this.filterChain()),!this.expect(";"))return 1===a.length?a[0]:function(c,d){for(var e,f=0;f<a.length;f++){var g=a[f];g&&(e=g(c,d))}return e}},filterChain:function(){for(var a=this.expression(),c;;)if(c=this.expect("|"))a=this.binaryFn(a,c.fn,this.filter());else return a},filter:function(){for(var a=this.expect(),c=this.$filter(a.text),d=[];;)if(a=this.expect(":"))d.push(this.expression());else{var e=
function(a,e,h){h=[h];for(var m=0;m<d.length;m++)h.push(d[m](a,e));return c.apply(a,h)};return function(){return e}}},expression:function(){return this.assignment()},assignment:function(){var a=this.ternary(),c,d;return(d=this.expect("="))?(a.assign||this.throwError("implies assignment but ["+this.text.substring(0,d.index)+"] can not be assigned to",d),c=this.ternary(),function(d,f){return a.assign(d,c(d,f),f)}):a},ternary:function(){var a=this.logicalOR(),c,d;if(this.expect("?")){c=this.ternary();
if(d=this.expect(":"))return this.ternaryFn(a,c,this.ternary());this.throwError("expected :",d)}else return a},logicalOR:function(){for(var a=this.logicalAND(),c;;)if(c=this.expect("||"))a=this.binaryFn(a,c.fn,this.logicalAND());else return a},logicalAND:function(){var a=this.equality(),c;if(c=this.expect("&&"))a=this.binaryFn(a,c.fn,this.logicalAND());return a},equality:function(){var a=this.relational(),c;if(c=this.expect("==","!=","===","!=="))a=this.binaryFn(a,c.fn,this.equality());return a},
relational:function(){var a=this.additive(),c;if(c=this.expect("<",">","<=",">="))a=this.binaryFn(a,c.fn,this.relational());return a},additive:function(){for(var a=this.multiplicative(),c;c=this.expect("+","-");)a=this.binaryFn(a,c.fn,this.multiplicative());return a},multiplicative:function(){for(var a=this.unary(),c;c=this.expect("*","/","%");)a=this.binaryFn(a,c.fn,this.unary());return a},unary:function(){var a;return this.expect("+")?this.primary():(a=this.expect("-"))?this.binaryFn($a.ZERO,a.fn,
this.unary()):(a=this.expect("!"))?this.unaryFn(a.fn,this.unary()):this.primary()},fieldAccess:function(a){var c=this,d=this.expect().text,e=Kc(d,this.options,this.text);return w(function(c,d,h){return e(h||a(c,d))},{assign:function(e,g,h){return ub(a(e,h),d,g,c.text,c.options)}})},objectIndex:function(a){var c=this,d=this.expression();this.consume("]");return w(function(e,f){var g=a(e,f),h=d(e,f),m;if(!g)return s;(g=Za(g[h],c.text))&&(g.then&&c.options.unwrapPromises)&&(m=g,"$$v"in g||(m.$$v=s,m.then(function(a){m.$$v=
a})),g=g.$$v);return g},{assign:function(e,f,g){var h=d(e,g);return Za(a(e,g),c.text)[h]=f}})},functionCall:function(a,c){var d=[];if(")"!==this.peekToken().text){do d.push(this.expression());while(this.expect(","))}this.consume(")");var e=this;return function(f,g){for(var h=[],m=c?c(f,g):f,k=0;k<d.length;k++)h.push(d[k](f,g));k=a(f,g,m)||D;Za(m,e.text);Za(k,e.text);h=k.apply?k.apply(m,h):k(h[0],h[1],h[2],h[3],h[4]);return Za(h,e.text)}},arrayDeclaration:function(){var a=[],c=!0;if("]"!==this.peekToken().text){do{if(this.peek("]"))break;
var d=this.expression();a.push(d);d.constant||(c=!1)}while(this.expect(","))}this.consume("]");return w(function(c,d){for(var g=[],h=0;h<a.length;h++)g.push(a[h](c,d));return g},{literal:!0,constant:c})},object:function(){var a=[],c=!0;if("}"!==this.peekToken().text){do{if(this.peek("}"))break;var d=this.expect(),d=d.string||d.text;this.consume(":");var e=this.expression();a.push({key:d,value:e});e.constant||(c=!1)}while(this.expect(","))}this.consume("}");return w(function(c,d){for(var e={},m=0;m<
a.length;m++){var k=a[m];e[k.key]=k.value(c,d)}return e},{literal:!0,constant:c})}};var Vb={},va=I("$sce"),fa={HTML:"html",CSS:"css",URL:"url",RESOURCE_URL:"resourceUrl",JS:"js"},V=S.createElement("a"),Oc=ta(N.location.href,!0);oc.$inject=["$provide"];Pc.$inject=["$locale"];Rc.$inject=["$locale"];var Uc=".",Xe={yyyy:X("FullYear",4),yy:X("FullYear",2,0,!0),y:X("FullYear",1),MMMM:wb("Month"),MMM:wb("Month",!0),MM:X("Month",2,1),M:X("Month",1,1),dd:X("Date",2),d:X("Date",1),HH:X("Hours",2),H:X("Hours",
1),hh:X("Hours",2,-12),h:X("Hours",1,-12),mm:X("Minutes",2),m:X("Minutes",1),ss:X("Seconds",2),s:X("Seconds",1),sss:X("Milliseconds",3),EEEE:wb("Day"),EEE:wb("Day",!0),a:function(a,c){return 12>a.getHours()?c.AMPMS[0]:c.AMPMS[1]},Z:function(a){a=-1*a.getTimezoneOffset();return a=(0<=a?"+":"")+(vb(Math[0<a?"floor":"ceil"](a/60),2)+vb(Math.abs(a%60),2))},ww:Wc(2),w:Wc(1)},We=/((?:[^yMdHhmsaZEw']+)|(?:'(?:[^']|'')*')|(?:E+|y+|M+|d+|H+|h+|m+|s+|a|Z|w+))(.*)/,Ve=/^\-?\d+$/;Qc.$inject=["$locale"];var Te=
$(u),Ue=$(Fa);Sc.$inject=["$parse"];var pd=$({restrict:"E",compile:function(a,c){8>=P&&(c.href||c.name||c.$set("href",""),a.append(S.createComment("IE fix")));if(!c.href&&!c.xlinkHref&&!c.name)return function(a,c){var f="[object SVGAnimatedString]"===xa.call(c.prop("href"))?"xlink:href":"href";c.on("click",function(a){c.attr(f)||a.preventDefault()})}}}),Hb={};q(nb,function(a,c){if("multiple"!=a){var d=na("ng-"+c);Hb[d]=function(){return{priority:100,link:function(a,f,g){a.$watch(g[d],function(a){g.$set(c,
!!a)})}}}}});q(["src","srcset","href"],function(a){var c=na("ng-"+a);Hb[c]=function(){return{priority:99,link:function(d,e,f){var g=a,h=a;"href"===a&&"[object SVGAnimatedString]"===xa.call(e.prop("href"))&&(h="xlinkHref",f.$attr[h]="xlink:href",g=null);f.$observe(c,function(a){a&&(f.$set(h,a),P&&g&&e.prop(g,f[h]))})}}}});var zb={$addControl:D,$removeControl:D,$setValidity:D,$setDirty:D,$setPristine:D};Xc.$inject=["$element","$attrs","$scope","$animate"];var Yc=function(a){return["$timeout",function(c){return{name:"form",
restrict:a?"EAC":"E",controller:Xc,compile:function(){return{pre:function(a,e,f,g){if(!f.action){var h=function(a){a.preventDefault?a.preventDefault():a.returnValue=!1};sb(e[0],"submit",h);e.on("$destroy",function(){c(function(){Ua(e[0],"submit",h)},0,!1)})}var m=e.parent().controller("form"),k=f.name||f.ngForm;k&&ub(a,k,g,k);if(m)e.on("$destroy",function(){m.$removeControl(g);k&&ub(a,k,s,k);w(g,zb)})}}}}}]},qd=Yc(),Dd=Yc(!0),cf=/^(ftp|http|https):\/\/(\w+:{0,1}\w*@)?(\S+)(:[0-9]+)?(\/|\/([\w#!:.?+=&%@!\-\/]))?$/,
df=/^[a-z0-9!#$%&'*+/=?^_`{|}~.-]+@[a-z0-9-]+(\.[a-z0-9-]+)*$/i,ef=/^\s*(\-|\+)?(\d+|(\d*(\.\d*)))\s*$/,Zc=/^(\d{4})-(\d{2})-(\d{2})$/,$c=/^(\d{4})-(\d\d)-(\d\d)T(\d\d):(\d\d)$/,Yb=/^(\d{4})-W(\d\d)$/,ad=/^(\d{4})-(\d\d)$/,bd=/^(\d\d):(\d\d)$/,ff=/(\b|^)default(\b|$)/,cd={text:ab,date:bb("date",Zc,Bb(Zc,["yyyy","MM","dd"]),"yyyy-MM-dd"),"datetime-local":bb("datetimelocal",$c,Bb($c,["yyyy","MM","dd","HH","mm"]),"yyyy-MM-ddTHH:mm"),time:bb("time",bd,Bb(bd,["HH","mm"]),"HH:mm"),week:bb("week",Yb,function(a){if(qa(a))return a;
if(x(a)){Yb.lastIndex=0;var c=Yb.exec(a);if(c){a=+c[1];var d=+c[2],c=Vc(a),d=7*(d-1);return new Date(a,0,c.getDate()+d)}}return NaN},"yyyy-Www"),month:bb("month",ad,Bb(ad,["yyyy","MM"]),"yyyy-MM"),number:function(a,c,d,e,f,g){ab(a,c,d,e,f,g);e.$parsers.push(function(a){var c=e.$isEmpty(a);if(c||ef.test(a))return e.$setValidity("number",!0),""===a?null:c?a:parseFloat(a);e.$setValidity("number",!1);return s});Ye(e,"number",c);e.$formatters.push(function(a){return e.$isEmpty(a)?"":""+a});d.min&&(a=function(a){var c=
parseFloat(d.min);return pa(e,"min",e.$isEmpty(a)||a>=c,a)},e.$parsers.push(a),e.$formatters.push(a));d.max&&(a=function(a){var c=parseFloat(d.max);return pa(e,"max",e.$isEmpty(a)||a<=c,a)},e.$parsers.push(a),e.$formatters.push(a));e.$formatters.push(function(a){return pa(e,"number",e.$isEmpty(a)||Cb(a),a)})},url:function(a,c,d,e,f,g){ab(a,c,d,e,f,g);a=function(a){return pa(e,"url",e.$isEmpty(a)||cf.test(a),a)};e.$formatters.push(a);e.$parsers.push(a)},email:function(a,c,d,e,f,g){ab(a,c,d,e,f,g);
a=function(a){return pa(e,"email",e.$isEmpty(a)||df.test(a),a)};e.$formatters.push(a);e.$parsers.push(a)},radio:function(a,c,d,e){A(d.name)&&c.attr("name",db());var f=function(f){c[0].checked&&a.$apply(function(){e.$setViewValue(d.value,f&&f.type)})};if(e.$options&&e.$options.updateOn)c.on(e.$options.updateOn,f);if(!e.$options||e.$options.updateOnDefault)c.on("click",f);e.$render=function(){c[0].checked=d.value==e.$viewValue};d.$observe("value",e.$render)},checkbox:function(a,c,d,e){var f=d.ngTrueValue,
g=d.ngFalseValue;x(f)||(f=!0);x(g)||(g=!1);d=function(d){a.$apply(function(){e.$setViewValue(c[0].checked,d&&d.type)})};if(e.$options&&e.$options.updateOn)c.on(e.$options.updateOn,d);if(!e.$options||e.$options.updateOnDefault)c.on("click",d);e.$render=function(){c[0].checked=e.$viewValue};e.$isEmpty=function(a){return a!==f};e.$formatters.push(function(a){return a===f});e.$parsers.push(function(a){return a?f:g})},hidden:D,button:D,submit:D,reset:D,file:D},lc=["$browser","$sniffer","$filter",function(a,
c,d){return{restrict:"E",require:["?ngModel"],link:function(e,f,g,h){h[0]&&(cd[u(g.type)]||cd.text)(e,f,g,h[0],c,a,d)}}}],yb="ng-valid",xb="ng-invalid",Ma="ng-pristine",Ab="ng-dirty",gf=["$scope","$exceptionHandler","$attrs","$element","$parse","$animate","$timeout",function(a,c,d,e,f,g,h){function m(a,c){c=c?"-"+ib(c,"-"):"";g.removeClass(e,(a?xb:yb)+c);g.addClass(e,(a?yb:xb)+c)}this.$modelValue=this.$viewValue=Number.NaN;this.$parsers=[];this.$formatters=[];this.$viewChangeListeners=[];this.$pristine=
!0;this.$dirty=!1;this.$valid=!0;this.$invalid=!1;this.$name=d.name;var k=f(d.ngModel),l=k.assign,p=null,n=this;if(!l)throw I("ngModel")("nonassign",d.ngModel,ga(e));this.$render=D;this.$isEmpty=function(a){return A(a)||""===a||null===a||a!==a};var r=e.inheritedData("$formController")||zb,t=0,s=this.$error={};e.addClass(Ma);m(!0);this.$setValidity=function(a,c){s[a]!==!c&&(c?(s[a]&&t--,t||(m(!0),n.$valid=!0,n.$invalid=!1)):(m(!1),n.$invalid=!0,n.$valid=!1,t++),s[a]=!c,m(c,a),r.$setValidity(a,c,n))};
this.$setPristine=function(){n.$dirty=!1;n.$pristine=!0;g.removeClass(e,Ab);g.addClass(e,Ma)};this.$cancelUpdate=function(){h.cancel(p);n.$render()};this.$$realSetViewValue=function(d){n.$viewValue=d;n.$pristine&&(n.$dirty=!0,n.$pristine=!1,g.removeClass(e,Ma),g.addClass(e,Ab),r.$setDirty());q(n.$parsers,function(a){d=a(d)});n.$modelValue!==d&&(n.$modelValue=d,l(a,d),q(n.$viewChangeListeners,function(a){try{a()}catch(d){c(d)}}))};this.$setViewValue=function(a,c){var d=n.$options&&(R(n.$options.debounce)?
n.$options.debounce[c]||n.$options.debounce["default"]||0:n.$options.debounce)||0;h.cancel(p);d?p=h(function(){n.$$realSetViewValue(a)},d):n.$$realSetViewValue(a)};a.$watch(function(){var c=k(a);if(n.$modelValue!==c){var d=n.$formatters,e=d.length;for(n.$modelValue=c;e--;)c=d[e](c);n.$viewValue!==c&&(n.$viewValue=c,n.$render())}return c})}],Sd=function(){return{require:["ngModel","^?form","^?ngModelOptions"],controller:gf,link:function(a,c,d,e){var f=e[0],g=e[1]||zb;g.$addControl(f);e[2]&&(f.$options=
e[2].$options);a.$on("$destroy",function(){g.$removeControl(f)})}}},Ud=$({require:"ngModel",link:function(a,c,d,e){e.$viewChangeListeners.push(function(){a.$eval(d.ngChange)})}}),mc=function(){return{require:"?ngModel",link:function(a,c,d,e){if(e){d.required=!0;var f=function(a){if(d.required&&e.$isEmpty(a))e.$setValidity("required",!1);else return e.$setValidity("required",!0),a};e.$formatters.push(f);e.$parsers.unshift(f);d.$observe("required",function(){f(e.$viewValue)})}}}},Td=function(){return{require:"ngModel",
link:function(a,c,d,e){var f=(a=/\/(.*)\//.exec(d.ngList))&&RegExp(a[1])||d.ngList||",";e.$parsers.push(function(a){if(!A(a)){var c=[];a&&q(a.split(f),function(a){a&&c.push(Y(a))});return c}});e.$formatters.push(function(a){return M(a)?a.join(", "):s});e.$isEmpty=function(a){return!a||!a.length}}}},hf=/^(true|false|\d+)$/,Vd=function(){return{priority:100,compile:function(a,c){return hf.test(c.ngValue)?function(a,c,f){f.$set("value",a.$eval(f.ngValue))}:function(a,c,f){a.$watch(f.ngValue,function(a){f.$set("value",
a)})}}}},Wd=function(){return{controller:["$scope","$attrs",function(a,c){var d=this;this.$options=a.$eval(c.ngModelOptions);this.$options.updateOn?(this.$options.updateOnDefault=!1,this.$options.updateOn=this.$options.updateOn.replace(ff,function(){d.$options.updateOnDefault=!0;return" "})):this.$options.updateOnDefault=!0}]}},vd=wa(function(a,c,d){c.addClass("ng-binding").data("$binding",d.ngBind);a.$watch(d.ngBind,function(a){c.text(a==s?"":a)})}),xd=["$interpolate",function(a){return function(c,
d,e){c=a(d.attr(e.$attr.ngBindTemplate));d.addClass("ng-binding").data("$binding",c);e.$observe("ngBindTemplate",function(a){d.text(a)})}}],wd=["$sce","$parse",function(a,c){return function(d,e,f){e.addClass("ng-binding").data("$binding",f.ngBindHtml);var g=c(f.ngBindHtml);d.$watch(function(){return(g(d)||"").toString()},function(c){e.html(a.getTrustedHtml(g(d))||"")})}}],yd=Xb("",!0),Ad=Xb("Odd",0),zd=Xb("Even",1),Bd=wa({compile:function(a,c){c.$set("ngCloak",s);a.removeClass("ng-cloak")}}),Cd=[function(){return{scope:!0,
controller:"@",priority:500}}],nc={};q("click dblclick mousedown mouseup mouseover mouseout mousemove mouseenter mouseleave keydown keyup keypress submit focus blur copy cut paste".split(" "),function(a){var c=na("ng-"+a);nc[c]=["$parse",function(d){return{compile:function(e,f){var g=d(f[c]);return function(c,d,e){d.on(u(a),function(a){c.$apply(function(){g(c,{$event:a})})})}}}}]});var Fd=["$animate",function(a){return{transclude:"element",priority:600,terminal:!0,restrict:"A",$$tlb:!0,link:function(c,
d,e,f,g){var h,m,k;c.$watch(e.ngIf,function(f){Pa(f)?m||(m=c.$new(),g(m,function(c){c[c.length++]=S.createComment(" end ngIf: "+e.ngIf+" ");h={clone:c};a.enter(c,d.parent(),d)})):(k&&(k.remove(),k=null),m&&(m.$destroy(),m=null),h&&(k=Gb(h.clone),a.leave(k,function(){k=null}),h=null))})}}}],Gd=["$http","$templateCache","$anchorScroll","$animate","$sce",function(a,c,d,e,f){return{restrict:"ECA",priority:400,terminal:!0,transclude:"element",controller:Qa.noop,compile:function(g,h){var m=h.ngInclude||
h.src,k=h.onload||"",l=h.autoscroll;return function(g,h,q,t,s){var E=0,B,z,y,v=function(){z&&(z.remove(),z=null);B&&(B.$destroy(),B=null);y&&(e.leave(y,function(){z=null}),z=y,y=null)};g.$watch(f.parseAsResourceUrl(m),function(f){var m=function(){!F(l)||l&&!g.$eval(l)||d()},q=++E;f?(a.get(f,{cache:c}).success(function(a){if(q===E){var c=g.$new();t.template=a;a=s(c,function(a){v();e.enter(a,null,h,m)});B=c;y=a;B.$emit("$includeContentLoaded");g.$eval(k)}}).error(function(){q===E&&v()}),g.$emit("$includeContentRequested")):
(v(),t.template=null)})}}}}],Xd=["$compile",function(a){return{restrict:"ECA",priority:-400,require:"ngInclude",link:function(c,d,e,f){d.html(f.template);a(d.contents())(c)}}}],Hd=wa({priority:450,compile:function(){return{pre:function(a,c,d){a.$eval(d.ngInit)}}}}),Id=wa({terminal:!0,priority:1E3}),Jd=["$locale","$interpolate",function(a,c){var d=/{}/g;return{restrict:"EA",link:function(e,f,g){var h=g.count,m=g.$attr.when&&f.attr(g.$attr.when),k=g.offset||0,l=e.$eval(m)||{},p={},n=c.startSymbol(),
r=c.endSymbol(),t=/^when(Minus)?(.+)$/;q(g,function(a,c){t.test(c)&&(l[u(c.replace("when","").replace("Minus","-"))]=f.attr(g.$attr[c]))});q(l,function(a,e){p[e]=c(a.replace(d,n+h+"-"+k+r))});e.$watch(function(){var c=parseFloat(e.$eval(h));if(isNaN(c))return"";c in l||(c=a.pluralCat(c-k));return p[c](e)},function(a){f.text(a)})}}}],Kd=["$parse","$animate",function(a,c){var d=I("ngRepeat");return{transclude:"element",priority:1E3,terminal:!0,$$tlb:!0,link:function(e,f,g,h,m){var k=g.ngRepeat,l=k.match(/^\s*([\s\S]+?)\s+in\s+([\s\S]+?)(?:\s+track\s+by\s+([\s\S]+?))?\s*$/),
p,n,r,t,s,E,B={$id:Ia};if(!l)throw d("iexp",k);g=l[1];h=l[2];(l=l[3])?(p=a(l),n=function(a,c,d){E&&(B[E]=a);B[s]=c;B.$index=d;return p(e,B)}):(r=function(a,c){return Ia(c)},t=function(a){return a});l=g.match(/^(?:([\$\w]+)|\(([\$\w]+)\s*,\s*([\$\w]+)\))$/);if(!l)throw d("iidexp",g);s=l[3]||l[1];E=l[2];var z={};e.$watchCollection(h,function(a){var g,h,l=f[0],p,B={},F,C,u,x,D,w,A=[];if(cb(a))D=a,p=n||r;else{p=n||t;D=[];for(u in a)a.hasOwnProperty(u)&&"$"!=u.charAt(0)&&D.push(u);D.sort()}F=D.length;
h=A.length=D.length;for(g=0;g<h;g++)if(u=a===D?g:D[g],x=a[u],x=p(u,x,g),Aa(x,"`track by` id"),z.hasOwnProperty(x))w=z[x],delete z[x],B[x]=w,A[g]=w;else{if(B.hasOwnProperty(x))throw q(A,function(a){a&&a.scope&&(z[a.id]=a)}),d("dupes",k,x);A[g]={id:x};B[x]=!1}for(u in z)z.hasOwnProperty(u)&&(w=z[u],g=Gb(w.clone),c.leave(g),q(g,function(a){a.$$NG_REMOVED=!0}),w.scope.$destroy());g=0;for(h=D.length;g<h;g++){u=a===D?g:D[g];x=a[u];w=A[g];A[g-1]&&(l=A[g-1].clone[A[g-1].clone.length-1]);if(w.scope){C=w.scope;
p=l;do p=p.nextSibling;while(p&&p.$$NG_REMOVED);w.clone[0]!=p&&c.move(Gb(w.clone),null,y(l));l=w.clone[w.clone.length-1]}else C=e.$new();C[s]=x;E&&(C[E]=u);C.$index=g;C.$first=0===g;C.$last=g===F-1;C.$middle=!(C.$first||C.$last);C.$odd=!(C.$even=0===(g&1));w.scope||m(C,function(a){a[a.length++]=S.createComment(" end ngRepeat: "+k+" ");c.enter(a,null,y(l));l=a;w.scope=C;w.clone=a;B[w.id]=w})}z=B})}}}],Ld=["$animate",function(a){return function(c,d,e){c.$watch(e.ngShow,function(c){a[Pa(c)?"removeClass":
"addClass"](d,"ng-hide")})}}],Ed=["$animate",function(a){return function(c,d,e){c.$watch(e.ngHide,function(c){a[Pa(c)?"addClass":"removeClass"](d,"ng-hide")})}}],Md=wa(function(a,c,d){a.$watch(d.ngStyle,function(a,d){d&&a!==d&&q(d,function(a,d){c.css(d,"")});a&&c.css(a)},!0)}),Nd=["$animate",function(a){return{restrict:"EA",require:"ngSwitch",controller:["$scope",function(){this.cases={}}],link:function(c,d,e,f){var g,h,m,k=[];c.$watch(e.ngSwitch||e.on,function(d){var p,n=k.length;if(0<n){if(m){for(p=
0;p<n;p++)m[p].remove();m=null}m=[];for(p=0;p<n;p++){var r=h[p];k[p].$destroy();m[p]=r;a.leave(r,function(){m.splice(p,1);0===m.length&&(m=null)})}}h=[];k=[];if(g=f.cases["!"+d]||f.cases["?"])c.$eval(e.change),q(g,function(d){var e=c.$new();k.push(e);d.transclude(e,function(c){var e=d.element;h.push(c);a.enter(c,e.parent(),e)})})})}}}],Od=wa({transclude:"element",priority:800,require:"^ngSwitch",link:function(a,c,d,e,f){e.cases["!"+d.ngSwitchWhen]=e.cases["!"+d.ngSwitchWhen]||[];e.cases["!"+d.ngSwitchWhen].push({transclude:f,
element:c})}}),Pd=wa({transclude:"element",priority:800,require:"^ngSwitch",link:function(a,c,d,e,f){e.cases["?"]=e.cases["?"]||[];e.cases["?"].push({transclude:f,element:c})}}),Rd=wa({link:function(a,c,d,e,f){if(!f)throw I("ngTransclude")("orphan",ga(c));f(function(a){c.empty();c.append(a)})}}),rd=["$templateCache",function(a){return{restrict:"E",terminal:!0,compile:function(c,d){"text/ng-template"==d.type&&a.put(d.id,c[0].text)}}}],jf=I("ngOptions"),Qd=$({terminal:!0}),sd=["$compile","$parse",function(a,
c){var d=/^\s*([\s\S]+?)(?:\s+as\s+([\s\S]+?))?(?:\s+group\s+by\s+([\s\S]+?))?\s+for\s+(?:([\$\w][\$\w]*)|(?:\(\s*([\$\w][\$\w]*)\s*,\s*([\$\w][\$\w]*)\s*\)))\s+in\s+([\s\S]+?)(?:\s+track\s+by\s+([\s\S]+?))?$/,e={$setViewValue:D};return{restrict:"E",require:["select","?ngModel"],controller:["$element","$scope","$attrs",function(a,c,d){var m=this,k={},l=e,p;m.databound=d.ngModel;m.init=function(a,c,d){l=a;p=d};m.addOption=function(c){Aa(c,'"option value"');k[c]=!0;l.$viewValue==c&&(a.val(c),p.parent()&&
p.remove())};m.removeOption=function(a){this.hasOption(a)&&(delete k[a],l.$viewValue==a&&this.renderUnknownOption(a))};m.renderUnknownOption=function(c){c="? "+Ia(c)+" ?";p.val(c);a.prepend(p);a.val(c);p.prop("selected",!0)};m.hasOption=function(a){return k.hasOwnProperty(a)};c.$on("$destroy",function(){m.renderUnknownOption=D})}],link:function(e,g,h,m){function k(a,c,d,e){d.$render=function(){var a=d.$viewValue;e.hasOption(a)?(w.parent()&&w.remove(),c.val(a),""===a&&x.prop("selected",!0)):A(a)&&
x?c.val(""):e.renderUnknownOption(a)};c.on("change",function(){a.$apply(function(){w.parent()&&w.remove();d.$setViewValue(c.val())})})}function l(a,c,d){var e;d.$render=function(){var a=new Wa(d.$viewValue);q(c.find("option"),function(c){c.selected=F(a.get(c.value))})};a.$watch(function(){ya(e,d.$viewValue)||(e=aa(d.$viewValue),d.$render())});c.on("change",function(){a.$apply(function(){var a=[];q(c.find("option"),function(c){c.selected&&a.push(c.value)});d.$setViewValue(a)})})}function p(e,f,g){function h(){var a=
{"":[]},c=[""],d,k,s,t,w;t=g.$modelValue;w=y(e)||[];var D=n?Zb(w):w,E,A,C;A={};s=!1;var G,I;if(r)if(v&&M(t))for(s=new Wa([]),C=0;C<t.length;C++)A[m]=t[C],s.put(v(e,A),t[C]);else s=new Wa(t);for(C=0;E=D.length,C<E;C++){k=C;if(n){k=D[C];if("$"===k.charAt(0))continue;A[n]=k}A[m]=w[k];d=p(e,A)||"";(k=a[d])||(k=a[d]=[],c.push(d));r?d=F(s.remove(v?v(e,A):q(e,A))):(v?(d={},d[m]=t,d=v(e,d)===v(e,A)):d=t===q(e,A),s=s||d);G=l(e,A);G=F(G)?G:"";k.push({id:v?v(e,A):n?D[C]:C,label:G,selected:d})}r||(u||null===
t?a[""].unshift({id:"",label:"",selected:!s}):s||a[""].unshift({id:"?",label:"",selected:!0}));A=0;for(D=c.length;A<D;A++){d=c[A];k=a[d];x.length<=A?(t={element:z.clone().attr("label",d),label:k.label},w=[t],x.push(w),f.append(t.element)):(w=x[A],t=w[0],t.label!=d&&t.element.attr("label",t.label=d));G=null;C=0;for(E=k.length;C<E;C++)s=k[C],(d=w[C+1])?(G=d.element,d.label!==s.label&&G.text(d.label=s.label),d.id!==s.id&&G.val(d.id=s.id),d.selected!==s.selected&&G.prop("selected",d.selected=s.selected)):
(""===s.id&&u?I=u:(I=B.clone()).val(s.id).attr("selected",s.selected).text(s.label),w.push({element:I,label:s.label,id:s.id,selected:s.selected}),G?G.after(I):t.element.append(I),G=I);for(C++;w.length>C;)w.pop().element.remove()}for(;x.length>A;)x.pop()[0].element.remove()}var k;if(!(k=t.match(d)))throw jf("iexp",t,ga(f));var l=c(k[2]||k[1]),m=k[4]||k[6],n=k[5],p=c(k[3]||""),q=c(k[2]?k[1]:m),y=c(k[7]),v=k[8]?c(k[8]):null,x=[[{element:f,label:""}]];u&&(a(u)(e),u.removeClass("ng-scope"),u.remove());
f.empty();f.on("change",function(){e.$apply(function(){var a,c=y(e)||[],d={},h,k,l,p,t,w,u;if(r)for(k=[],p=0,w=x.length;p<w;p++)for(a=x[p],l=1,t=a.length;l<t;l++){if((h=a[l].element)[0].selected){h=h.val();n&&(d[n]=h);if(v)for(u=0;u<c.length&&(d[m]=c[u],v(e,d)!=h);u++);else d[m]=c[h];k.push(q(e,d))}}else{h=f.val();if("?"==h)k=s;else if(""===h)k=null;else if(v)for(u=0;u<c.length;u++){if(d[m]=c[u],v(e,d)==h){k=q(e,d);break}}else d[m]=c[h],n&&(d[n]=h),k=q(e,d);1<x[0].length&&x[0][1].id!==h&&(x[0][1].selected=
!1)}g.$setViewValue(k)})});g.$render=h;e.$watch(h)}if(m[1]){var n=m[0];m=m[1];var r=h.multiple,t=h.ngOptions,u=!1,x,B=y(S.createElement("option")),z=y(S.createElement("optgroup")),w=B.clone();h=0;for(var v=g.children(),D=v.length;h<D;h++)if(""===v[h].value){x=u=v.eq(h);break}n.init(m,u,w);r&&(m.$isEmpty=function(a){return!a||0===a.length});t?p(e,g,m):r?l(e,g,m):k(e,g,m,n)}}}}],ud=["$interpolate",function(a){var c={addOption:D,removeOption:D};return{restrict:"E",priority:100,compile:function(d,e){if(A(e.value)){var f=
a(d.text(),!0);f||e.$set("value",d.text())}return function(a,d,e){var k=d.parent(),l=k.data("$selectController")||k.parent().data("$selectController");l&&l.databound?d.prop("selected",!1):l=c;f?a.$watch(f,function(a,c){e.$set("value",a);c!==a&&l.removeOption(c);l.addOption(a)}):l.addOption(e.value);d.on("$destroy",function(){l.removeOption(e.value)})}}}}],td=$({restrict:"E",terminal:!1});N.angular.bootstrap?console.log("WARNING: Tried to load angular more than once."):((Ga=N.jQuery)?(y=Ga,w(Ga.fn,
{scope:Ka.scope,isolateScope:Ka.isolateScope,controller:Ka.controller,injector:Ka.injector,inheritedData:Ka.inheritedData}),Ib("remove",!0,!0,!1),Ib("empty",!1,!1,!1),Ib("html",!1,!1,!0)):y=U,Qa.element=y,ld(Qa),y(S).ready(function(){id(S,ic)}))})(window,document);!angular.$$csp()&&angular.element(document).find("head").prepend('<style type="text/css">@charset "UTF-8";[ng\\:cloak],[ng-cloak],[data-ng-cloak],[x-ng-cloak],.ng-cloak,.x-ng-cloak,.ng-hide{display:none !important;}ng\\:form{display:block;}</style>');
//# sourceMappingURL=angular.min.js.map

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

/*!
 * Fotorama 4.5.1 | http://fotorama.io/license/
 */
!function(a,b,c,d,e){"use strict";function f(a){var b="bez_"+d.makeArray(arguments).join("_").replace(".","p");if("function"!=typeof d.easing[b]){var c=function(a,b){var c=[null,null],d=[null,null],e=[null,null],f=function(f,g){return e[g]=3*a[g],d[g]=3*(b[g]-a[g])-e[g],c[g]=1-e[g]-d[g],f*(e[g]+f*(d[g]+f*c[g]))},g=function(a){return e[0]+a*(2*d[0]+3*c[0]*a)},h=function(a){for(var b,c=a,d=0;++d<14&&(b=f(c,0)-a,!(Math.abs(b)<.001));)c-=b/g(c);return c};return function(a){return f(h(a),1)}};d.easing[b]=function(b,d,e,f,g){return f*c([a[0],a[1]],[a[2],a[3]])(d/g)+e}}return b}function g(){}function h(a,b,c){return Math.max(isNaN(b)?-1/0:b,Math.min(isNaN(c)?1/0:c,a))}function i(a){return a.match(/ma/)&&a.match(/-?\d+(?!d)/g)[a.match(/3d/)?12:4]}function j(a){return Ec?+i(a.css("transform")):+a.css("left").replace("px","")}function k(a,b){var c={};return Ec?c.transform="translate3d("+(a+(b?.001:0))+"px,0,0)":c.left=a,c}function l(a){return{"transition-duration":a+"ms"}}function m(a,b){return+String(a).replace(b||"px","")||e}function n(a){return/%$/.test(a)&&m(a,"%")}function o(a,b){return n(a)/100*b||m(a)}function p(a){return(!!m(a)||!!m(a,"%"))&&a}function q(a,b,c,d){return(a-(d||0))*(b+(c||0))}function r(a,b,c,d){return-Math.round(a/(b+(c||0))-(d||0))}function s(a){var b=a.data();if(!b.tEnd){var c=a[0],d={WebkitTransition:"webkitTransitionEnd",MozTransition:"transitionend",OTransition:"oTransitionEnd otransitionend",msTransition:"MSTransitionEnd",transition:"transitionend"};c.addEventListener(d[mc.prefixed("transition")],function(a){b.tProp&&a.propertyName.match(b.tProp)&&b.onEndFn()},!1),b.tEnd=!0}}function t(a,b,c,d){var e,f=a.data();f&&(f.onEndFn=function(){e||(e=!0,clearTimeout(f.tT),c())},f.tProp=b,clearTimeout(f.tT),f.tT=setTimeout(function(){f.onEndFn()},1.5*d),s(a))}function u(a,b,c){if(a.length){var d=a.data();Ec?(a.css(l(0)),d.onEndFn=g,clearTimeout(d.tT)):a.stop();var e=v(b,function(){return j(a)});return a.css(k(e,c)),e}}function v(){for(var a,b=0,c=arguments.length;c>b&&(a=b?arguments[b]():arguments[b],"number"!=typeof a);b++);return a}function w(a,b){return Math.round(a+(b-a)/1.5)}function x(){return x.p=x.p||("https:"===c.protocol?"https://":"http://"),x.p}function y(a){var c=b.createElement("a");return c.href=a,c}function z(a,b){if("string"!=typeof a)return a;a=y(a);var c,d;if(a.host.match(/youtube\.com/)&&a.search){if(c=a.search.split("v=")[1]){var e=c.indexOf("&");-1!==e&&(c=c.substring(0,e)),d="youtube"}}else a.host.match(/youtube\.com|youtu\.be/)?(c=a.pathname.replace(/^\/(embed\/|v\/)?/,"").replace(/\/.*/,""),d="youtube"):a.host.match(/vimeo\.com/)&&(d="vimeo",c=a.pathname.replace(/^\/(video\/)?/,"").replace(/\/.*/,""));return c&&d||!b||(c=a.href,d="custom"),c?{id:c,type:d,s:a.search.replace(/^\?/,"")}:!1}function A(a,b,c){var e,f,g=a.video;return"youtube"===g.type?(f=x()+"img.youtube.com/vi/"+g.id+"/default.jpg",e=f.replace(/\/default.jpg$/,"/hqdefault.jpg"),a.thumbsReady=!0):"vimeo"===g.type?d.ajax({url:x()+"vimeo.com/api/v2/video/"+g.id+".json",dataType:"jsonp",success:function(d){a.thumbsReady=!0,B(b,{img:d[0].thumbnail_large,thumb:d[0].thumbnail_small},a.i,c)}}):a.thumbsReady=!0,{img:e,thumb:f}}function B(a,b,c,e){for(var f=0,g=a.length;g>f;f++){var h=a[f];if(h.i===c&&h.thumbsReady){var i={videoReady:!0};i[Uc]=i[Wc]=i[Vc]=!1,e.splice(f,1,d.extend({},h,i,b));break}}}function C(a){function b(a,b,e){var f=a.children("img").eq(0),g=a.attr("href"),h=a.attr("src"),i=f.attr("src"),j=b.video,k=e?z(g,j===!0):!1;k?g=!1:k=j,c(a,f,d.extend(b,{video:k,img:b.img||g||h||i,thumb:b.thumb||i||h||g}))}function c(a,b,c){var e=c.thumb&&c.img!==c.thumb,f=m(c.width||a.attr("width")),g=m(c.height||a.attr("height"));d.extend(c,{width:f,height:g,thumbratio:R(c.thumbratio||m(c.thumbwidth||b&&b.attr("width")||e||f)/m(c.thumbheight||b&&b.attr("height")||e||g))})}var e=[];return a.children().each(function(){var a=d(this),f=Q(d.extend(a.data(),{id:a.attr("id")}));if(a.is("a, img"))b(a,f,!0);else{if(a.is(":empty"))return;c(a,null,d.extend(f,{html:this,_html:a.html()}))}e.push(f)}),e}function D(a){return 0===a.offsetWidth&&0===a.offsetHeight}function E(a){return!d.contains(b.documentElement,a)}function F(a,b,c){a()?b():setTimeout(function(){F(a,b)},c||100)}function G(a){c.replace(c.protocol+"//"+c.host+c.pathname.replace(/^\/?/,"/")+c.search+"#"+a)}function H(a,b,c){var d=a.data(),e=d.measures;if(e&&(!d.l||d.l.W!==e.width||d.l.H!==e.height||d.l.r!==e.ratio||d.l.w!==b.w||d.l.h!==b.h||d.l.m!==c)){var f=e.width,g=e.height,i=b.w/b.h,j=e.ratio>=i,k="scaledown"===c,l="contain"===c,m="cover"===c;j&&(k||l)||!j&&m?(f=h(b.w,0,k?f:1/0),g=f/e.ratio):(j&&m||!j&&(k||l))&&(g=h(b.h,0,k?g:1/0),f=g*e.ratio),a.css({width:Math.ceil(f),height:Math.ceil(g),marginLeft:Math.floor(-f/2),marginTop:Math.floor(-g/2)}),d.l={W:e.width,H:e.height,r:e.ratio,w:b.w,h:b.h,m:c}}return!0}function I(a,b){var c=a[0];c.styleSheet?c.styleSheet.cssText=b:a.html(b)}function J(a,b,c){return b===c?!1:b>=a?"left":a>=c?"right":"left right"}function K(a,b,c,d){if(!c)return!1;if(!isNaN(a))return a-(d?0:1);for(var e,f=0,g=b.length;g>f;f++){var h=b[f];if(h.id===a){e=f;break}}return e}function L(a,b,c){c=c||{},a.each(function(){var a,e=d(this),f=e.data();f.clickOn||(f.clickOn=!0,d.extend(X(e,{onStart:function(b){a=b,(c.onStart||g).call(this,b)},onMove:c.onMove||g,onTouchEnd:c.onTouchEnd||g,onEnd:function(c){c.moved||b.call(this,a)}}),{noMove:!0}))})}function M(a,b){return'<div class="'+a+'">'+(b||"")+"</div>"}function N(a){for(var b=a.length;b;){var c=Math.floor(Math.random()*b--),d=a[b];a[b]=a[c],a[c]=d}return a}function O(a){return"[object Array]"==Object.prototype.toString.call(a)&&d.map(a,function(a){return d.extend({},a)})}function P(a,b){Ac.scrollLeft(a).scrollTop(b)}function Q(a){if(a){var b={};return d.each(a,function(a,c){b[a.toLowerCase()]=c}),b}}function R(a){if(a){var b=+a;return isNaN(b)?(b=a.split("/"),+b[0]/+b[1]||e):b}}function S(a,b){a.preventDefault(),b&&a.stopPropagation()}function T(a){return a?">":"<"}function U(a,b){var c=a.data(),e=Math.round(b.pos),f=function(){c.sliding=!1,(b.onEnd||g)()};"undefined"!=typeof b.overPos&&b.overPos!==b.pos&&(e=b.overPos,f=function(){U(a,d.extend({},b,{overPos:b.pos,time:Math.max(Nc,b.time/2)}))});var h=d.extend(k(e,b._001),b.width&&{width:b.width});c.sliding=!0,Ec?(a.css(d.extend(l(b.time),h)),b.time>10?t(a,"transform",f,b.time):f()):a.stop().animate(h,b.time,Xc,f)}function V(a,b,c,e,f,h){var i="undefined"!=typeof h;if(i||(f.push(arguments),Array.prototype.push.call(arguments,f.length),!(f.length>1))){a=a||d(a),b=b||d(b);var j=a[0],k=b[0],l="crossfade"===e.method,m=function(){if(!m.done){m.done=!0;var a=(i||f.shift())&&f.shift();a&&V.apply(this,a),(e.onEnd||g)(!!a)}},n=e.time/(h||1);c.removeClass(Kb+" "+Jb),a.stop().addClass(Kb),b.stop().addClass(Jb),l&&k&&a.fadeTo(0,0),a.fadeTo(l?n:0,1,l&&m),b.fadeTo(n,0,m),j&&l||k||m()}}function W(a){var b=(a.touches||[])[0]||a;a._x=b.pageX,a._y=b.clientY,a._now=d.now()}function X(c,e){function f(a){return n=d(a.target),v.checked=q=r=t=!1,l||v.flow||a.touches&&a.touches.length>1||a.which>1||wc&&wc.type!==a.type&&yc||(q=e.select&&n.is(e.select,u))?q:(p="touchstart"===a.type,r=n.is("a, a *",u),o=v.control,s=v.noMove||v.noSwipe||o?16:v.snap?0:4,W(a),m=wc=a,xc=a.type.replace(/down|start/,"move").replace(/Down/,"Move"),(e.onStart||g).call(u,a,{control:o,$target:n}),l=v.flow=!0,void((!p||v.go)&&S(a)))}function h(a){if(a.touches&&a.touches.length>1||Kc&&!a.isPrimary||xc!==a.type||!l)return l&&i(),void(e.onTouchEnd||g)();W(a);var b=Math.abs(a._x-m._x),c=Math.abs(a._y-m._y),d=b-c,f=(v.go||v.x||d>=0)&&!v.noSwipe,h=0>d;p&&!v.checked?(l=f)&&S(a):(S(a),(e.onMove||g).call(u,a,{touch:p})),!t&&Math.sqrt(Math.pow(b,2)+Math.pow(c,2))>s&&(t=!0),v.checked=v.checked||f||h}function i(a){(e.onTouchEnd||g)();var b=l;v.control=l=!1,b&&(v.flow=!1),!b||r&&!v.checked||(a&&S(a),yc=!0,clearTimeout(zc),zc=setTimeout(function(){yc=!1},1e3),(e.onEnd||g).call(u,{moved:t,$target:n,control:o,touch:p,startEvent:m,aborted:!a||"MSPointerCancel"===a.type}))}function j(){v.flow||setTimeout(function(){v.flow=!0},10)}function k(){v.flow&&setTimeout(function(){v.flow=!1},Mc)}var l,m,n,o,p,q,r,s,t,u=c[0],v={};return Kc?(u[Jc]("MSPointerDown",f,!1),b[Jc]("MSPointerMove",h,!1),b[Jc]("MSPointerCancel",i,!1),b[Jc]("MSPointerUp",i,!1)):(u[Jc]&&(u[Jc]("touchstart",f,!1),u[Jc]("touchmove",h,!1),u[Jc]("touchend",i,!1),b[Jc]("touchstart",j,!1),b[Jc]("touchend",k,!1),b[Jc]("touchcancel",k,!1),a[Jc]("scroll",k,!1)),c.on("mousedown",f),Bc.on("mousemove",h).on("mouseup",i)),c.on("click","a",function(a){v.checked&&S(a)}),v}function Y(a,b){function c(c,d){A=!0,j=l=c._x,q=c._now,p=[[q,j]],m=n=D.noMove||d?0:u(a,(b.getPos||g)(),b._001),(b.onStart||g).call(B,c)}function e(a,b){s=D.min,t=D.max,v=D.snap,x=a.altKey,A=z=!1,y=b.control,y||C.sliding||c(a)}function f(d,e){D.noSwipe||(A||c(d),l=d._x,p.push([d._now,l]),n=m-(j-l),o=J(n,s,t),s>=n?n=w(n,s):n>=t&&(n=w(n,t)),D.noMove||(a.css(k(n,b._001)),z||(z=!0,e.touch||Kc||a.addClass(Zb)),(b.onMove||g).call(B,d,{pos:n,edge:o})))}function i(e){if(!D.noSwipe||!e.moved){A||c(e.startEvent,!0),e.touch||Kc||a.removeClass(Zb),r=d.now();for(var f,i,j,k,o,q,u,w,y,z=r-Mc,C=null,E=Nc,F=b.friction,G=p.length-1;G>=0;G--){if(f=p[G][0],i=Math.abs(f-z),null===C||j>i)C=f,k=p[G][1];else if(C===z||i>j)break;j=i}u=h(n,s,t);var H=k-l,I=H>=0,J=r-C,K=J>Mc,L=!K&&n!==m&&u===n;v&&(u=h(Math[L?I?"floor":"ceil":"round"](n/v)*v,s,t),s=t=u),L&&(v||u===n)&&(y=-(H/J),E*=h(Math.abs(y),b.timeLow,b.timeHigh),o=Math.round(n+y*E/F),v||(u=o),(!I&&o>t||I&&s>o)&&(q=I?s:t,w=o-q,v||(u=q),w=h(u+.03*w,q-50,q+50),E=Math.abs((n-w)/(y/F)))),E*=x?10:1,(b.onEnd||g).call(B,d.extend(e,{moved:e.moved||K&&v,pos:n,newPos:u,overPos:w,time:E}))}}var j,l,m,n,o,p,q,r,s,t,v,x,y,z,A,B=a[0],C=a.data(),D={};return D=d.extend(X(b.$wrap,{onStart:e,onMove:f,onTouchEnd:b.onTouchEnd,onEnd:i,select:b.select}),D)}function Z(a,b){var c,e,f,h=a[0],i={prevent:{}};return h[Jc]&&h[Jc](Lc,function(a){var h=a.wheelDeltaY||-1*a.deltaY||0,j=a.wheelDeltaX||-1*a.deltaX||0,k=Math.abs(j)>Math.abs(h),l=T(0>j),m=e===l,n=d.now(),o=Mc>n-f;e=l,f=n,k&&i.ok&&(!i.prevent[l]||c)&&(S(a,!0),c&&m&&o||(b.shift&&(c=!0,clearTimeout(i.t),i.t=setTimeout(function(){c=!1},Oc)),(b.onEnd||g)(a,b.shift?l:j)))},!1),i}function $(){d.each(d.Fotorama.instances,function(a,b){b.index=a})}function _(a){d.Fotorama.instances.push(a),$()}function ab(a){d.Fotorama.instances.splice(a.index,1),$()}var bb="fotorama",cb="fullscreen",db=bb+"__wrap",eb=db+"--css2",fb=db+"--css3",gb=db+"--video",hb=db+"--fade",ib=db+"--slide",jb=db+"--no-controls",kb=db+"--no-shadows",lb=db+"--pan-y",mb=db+"--rtl",nb=db+"--only-active",ob=db+"--no-captions",pb=db+"--toggle-arrows",qb=bb+"__stage",rb=qb+"__frame",sb=rb+"--video",tb=qb+"__shaft",ub=bb+"__grab",vb=bb+"__pointer",wb=bb+"__arr",xb=wb+"--disabled",yb=wb+"--prev",zb=wb+"--next",Ab=bb+"__nav",Bb=Ab+"-wrap",Cb=Ab+"__shaft",Db=Ab+"--dots",Eb=Ab+"--thumbs",Fb=Ab+"__frame",Gb=Fb+"--dot",Hb=Fb+"--thumb",Ib=bb+"__fade",Jb=Ib+"-front",Kb=Ib+"-rear",Lb=bb+"__shadow",Mb=Lb+"s",Nb=Mb+"--left",Ob=Mb+"--right",Pb=bb+"__active",Qb=bb+"__select",Rb=bb+"--hidden",Sb=bb+"--fullscreen",Tb=bb+"__fullscreen-icon",Ub=bb+"__error",Vb=bb+"__loading",Wb=bb+"__loaded",Xb=Wb+"--full",Yb=Wb+"--img",Zb=bb+"__grabbing",$b=bb+"__img",_b=$b+"--full",ac=bb+"__dot",bc=bb+"__thumb",cc=bc+"-border",dc=bb+"__html",ec=bb+"__video",fc=ec+"-play",gc=ec+"-close",hc=bb+"__caption",ic=bb+"__caption__wrap",jc=bb+"__spinner",kc=d&&d.fn.jquery.split(".");if(!kc||kc[0]<1||1==kc[0]&&kc[1]<8)throw"Fotorama requires jQuery 1.8 or later and will not run without it.";var lc={},mc=function(a,b,c){function d(a){r.cssText=a}function e(a,b){return typeof a===b}function f(a,b){return!!~(""+a).indexOf(b)}function g(a,b){for(var d in a){var e=a[d];if(!f(e,"-")&&r[e]!==c)return"pfx"==b?e:!0}return!1}function h(a,b,d){for(var f in a){var g=b[a[f]];if(g!==c)return d===!1?a[f]:e(g,"function")?g.bind(d||b):g}return!1}function i(a,b,c){var d=a.charAt(0).toUpperCase()+a.slice(1),f=(a+" "+u.join(d+" ")+d).split(" ");return e(b,"string")||e(b,"undefined")?g(f,b):(f=(a+" "+v.join(d+" ")+d).split(" "),h(f,b,c))}var j,k,l,m="2.6.2",n={},o=b.documentElement,p="modernizr",q=b.createElement(p),r=q.style,s=({}.toString," -webkit- -moz- -o- -ms- ".split(" ")),t="Webkit Moz O ms",u=t.split(" "),v=t.toLowerCase().split(" "),w={},x=[],y=x.slice,z=function(a,c,d,e){var f,g,h,i,j=b.createElement("div"),k=b.body,l=k||b.createElement("body");if(parseInt(d,10))for(;d--;)h=b.createElement("div"),h.id=e?e[d]:p+(d+1),j.appendChild(h);return f=["&#173;",'<style id="s',p,'">',a,"</style>"].join(""),j.id=p,(k?j:l).innerHTML+=f,l.appendChild(j),k||(l.style.background="",l.style.overflow="hidden",i=o.style.overflow,o.style.overflow="hidden",o.appendChild(l)),g=c(j,a),k?j.parentNode.removeChild(j):(l.parentNode.removeChild(l),o.style.overflow=i),!!g},A={}.hasOwnProperty;l=e(A,"undefined")||e(A.call,"undefined")?function(a,b){return b in a&&e(a.constructor.prototype[b],"undefined")}:function(a,b){return A.call(a,b)},Function.prototype.bind||(Function.prototype.bind=function(a){var b=this;if("function"!=typeof b)throw new TypeError;var c=y.call(arguments,1),d=function(){if(this instanceof d){var e=function(){};e.prototype=b.prototype;var f=new e,g=b.apply(f,c.concat(y.call(arguments)));return Object(g)===g?g:f}return b.apply(a,c.concat(y.call(arguments)))};return d}),w.csstransforms3d=function(){var a=!!i("perspective");return a};for(var B in w)l(w,B)&&(k=B.toLowerCase(),n[k]=w[B](),x.push((n[k]?"":"no-")+k));return n.addTest=function(a,b){if("object"==typeof a)for(var d in a)l(a,d)&&n.addTest(d,a[d]);else{if(a=a.toLowerCase(),n[a]!==c)return n;b="function"==typeof b?b():b,"undefined"!=typeof enableClasses&&enableClasses&&(o.className+=" "+(b?"":"no-")+a),n[a]=b}return n},d(""),q=j=null,n._version=m,n._prefixes=s,n._domPrefixes=v,n._cssomPrefixes=u,n.testProp=function(a){return g([a])},n.testAllProps=i,n.testStyles=z,n.prefixed=function(a,b,c){return b?i(a,b,c):i(a,"pfx")},n}(a,b),nc={ok:!1,is:function(){return!1},request:function(){},cancel:function(){},event:"",prefix:""},oc="webkit moz o ms khtml".split(" ");if("undefined"!=typeof b.cancelFullScreen)nc.ok=!0;else for(var pc=0,qc=oc.length;qc>pc;pc++)if(nc.prefix=oc[pc],"undefined"!=typeof b[nc.prefix+"CancelFullScreen"]){nc.ok=!0;break}nc.ok&&(nc.event=nc.prefix+"fullscreenchange",nc.is=function(){switch(this.prefix){case"":return b.fullScreen;case"webkit":return b.webkitIsFullScreen;default:return b[this.prefix+"FullScreen"]}},nc.request=function(a){return""===this.prefix?a.requestFullScreen():a[this.prefix+"RequestFullScreen"]()},nc.cancel=function(){return""===this.prefix?b.cancelFullScreen():b[this.prefix+"CancelFullScreen"]()});var rc,sc={lines:12,length:5,width:2,radius:7,corners:1,rotate:15,color:"rgba(128, 128, 128, .75)",hwaccel:!0},tc={top:"auto",left:"auto",className:""};!function(a,b){rc=b()}(this,function(){function a(a,c){var d,e=b.createElement(a||"div");for(d in c)e[d]=c[d];return e}function c(a){for(var b=1,c=arguments.length;c>b;b++)a.appendChild(arguments[b]);return a}function d(a,b,c,d){var e=["opacity",b,~~(100*a),c,d].join("-"),f=.01+c/d*100,g=Math.max(1-(1-a)/b*(100-f),a),h=m.substring(0,m.indexOf("Animation")).toLowerCase(),i=h&&"-"+h+"-"||"";return o[e]||(p.insertRule("@"+i+"keyframes "+e+"{0%{opacity:"+g+"}"+f+"%{opacity:"+a+"}"+(f+.01)+"%{opacity:1}"+(f+b)%100+"%{opacity:"+a+"}100%{opacity:"+g+"}}",p.cssRules.length),o[e]=1),e}function f(a,b){var c,d,f=a.style;for(b=b.charAt(0).toUpperCase()+b.slice(1),d=0;d<n.length;d++)if(c=n[d]+b,f[c]!==e)return c;return f[b]!==e?b:void 0}function g(a,b){for(var c in b)a.style[f(a,c)||c]=b[c];return a}function h(a){for(var b=1;b<arguments.length;b++){var c=arguments[b];for(var d in c)a[d]===e&&(a[d]=c[d])}return a}function i(a){for(var b={x:a.offsetLeft,y:a.offsetTop};a=a.offsetParent;)b.x+=a.offsetLeft,b.y+=a.offsetTop;return b}function j(a,b){return"string"==typeof a?a:a[b%a.length]}function k(a){return"undefined"==typeof this?new k(a):void(this.opts=h(a||{},k.defaults,q))}function l(){function b(b,c){return a("<"+b+' xmlns="urn:schemas-microsoft.com:vml" class="spin-vml">',c)}p.addRule(".spin-vml","behavior:url(#default#VML)"),k.prototype.lines=function(a,d){function e(){return g(b("group",{coordsize:k+" "+k,coordorigin:-i+" "+-i}),{width:k,height:k})}function f(a,f,h){c(m,c(g(e(),{rotation:360/d.lines*a+"deg",left:~~f}),c(g(b("roundrect",{arcsize:d.corners}),{width:i,height:d.width,left:d.radius,top:-d.width>>1,filter:h}),b("fill",{color:j(d.color,a),opacity:d.opacity}),b("stroke",{opacity:0}))))}var h,i=d.length+d.width,k=2*i,l=2*-(d.width+d.length)+"px",m=g(e(),{position:"absolute",top:l,left:l});if(d.shadow)for(h=1;h<=d.lines;h++)f(h,-2,"progid:DXImageTransform.Microsoft.Blur(pixelradius=2,makeshadow=1,shadowopacity=.3)");for(h=1;h<=d.lines;h++)f(h);return c(a,m)},k.prototype.opacity=function(a,b,c,d){var e=a.firstChild;d=d.shadow&&d.lines||0,e&&b+d<e.childNodes.length&&(e=e.childNodes[b+d],e=e&&e.firstChild,e=e&&e.firstChild,e&&(e.opacity=c))}}var m,n=["webkit","Moz","ms","O"],o={},p=function(){var d=a("style",{type:"text/css"});return c(b.getElementsByTagName("head")[0],d),d.sheet||d.styleSheet}(),q={lines:12,length:7,width:5,radius:10,rotate:0,corners:1,color:"#000",direction:1,speed:1,trail:100,opacity:.25,fps:20,zIndex:2e9,className:"spinner",top:"auto",left:"auto",position:"relative"};k.defaults={},h(k.prototype,{spin:function(b){this.stop();var c,d,e=this,f=e.opts,h=e.el=g(a(0,{className:f.className}),{position:f.position,width:0,zIndex:f.zIndex}),j=f.radius+f.length+f.width;if(b&&(b.insertBefore(h,b.firstChild||null),d=i(b),c=i(h),g(h,{left:("auto"==f.left?d.x-c.x+(b.offsetWidth>>1):parseInt(f.left,10)+j)+"px",top:("auto"==f.top?d.y-c.y+(b.offsetHeight>>1):parseInt(f.top,10)+j)+"px"})),h.setAttribute("role","progressbar"),e.lines(h,e.opts),!m){var k,l=0,n=(f.lines-1)*(1-f.direction)/2,o=f.fps,p=o/f.speed,q=(1-f.opacity)/(p*f.trail/100),r=p/f.lines;!function s(){l++;for(var a=0;a<f.lines;a++)k=Math.max(1-(l+(f.lines-a)*r)%p*q,f.opacity),e.opacity(h,a*f.direction+n,k,f);e.timeout=e.el&&setTimeout(s,~~(1e3/o))}()}return e},stop:function(){var a=this.el;return a&&(clearTimeout(this.timeout),a.parentNode&&a.parentNode.removeChild(a),this.el=e),this},lines:function(b,e){function f(b,c){return g(a(),{position:"absolute",width:e.length+e.width+"px",height:e.width+"px",background:b,boxShadow:c,transformOrigin:"left",transform:"rotate("+~~(360/e.lines*i+e.rotate)+"deg) translate("+e.radius+"px,0)",borderRadius:(e.corners*e.width>>1)+"px"})}for(var h,i=0,k=(e.lines-1)*(1-e.direction)/2;i<e.lines;i++)h=g(a(),{position:"absolute",top:1+~(e.width/2)+"px",transform:e.hwaccel?"translate3d(0,0,0)":"",opacity:e.opacity,animation:m&&d(e.opacity,e.trail,k+i*e.direction,e.lines)+" "+1/e.speed+"s linear infinite"}),e.shadow&&c(h,g(f("#000","0 0 4px #000"),{top:"2px"})),c(b,c(h,f(j(e.color,i),"0 0 1px rgba(0,0,0,.1)")));return b},opacity:function(a,b,c){b<a.childNodes.length&&(a.childNodes[b].style.opacity=c)}});var r=g(a("group"),{behavior:"url(#default#VML)"});return!f(r,"transform")&&r.adj?l():m=f(r,"animation"),k});var uc,vc,wc,xc,yc,zc,Ac=d(a),Bc=d(b),Cc="quirks"===c.hash.replace("#",""),Dc=mc.csstransforms3d,Ec=Dc&&!Cc,Fc=Dc||"CSS1Compat"===b.compatMode,Gc=nc.ok,Hc=navigator.userAgent.match(/Android|webOS|iPhone|iPad|iPod|BlackBerry|Windows Phone/i),Ic=!Ec||Hc,Jc="addEventListener",Kc=navigator.msPointerEnabled,Lc="onwheel"in b.createElement("div")?"wheel":b.onmousewheel!==e?"mousewheel":"DOMMouseScroll",Mc=250,Nc=300,Oc=1400,Pc=5e3,Qc=2,Rc=64,Sc=500,Tc=333,Uc="$stageFrame",Vc="$navDotFrame",Wc="$navThumbFrame",Xc=f([.1,0,.25,1]),Yc=99999,Zc={width:null,minwidth:null,maxwidth:"100%",height:null,minheight:null,maxheight:null,ratio:null,margin:Qc,glimpse:0,nav:"dots",navposition:"bottom",navwidth:null,thumbwidth:Rc,thumbheight:Rc,thumbmargin:Qc,thumbborderwidth:Qc,allowfullscreen:!1,fit:"contain",transition:"slide",clicktransition:null,transitionduration:Nc,captions:!0,hash:!1,startindex:0,loop:!1,autoplay:!1,stopautoplayontouch:!0,keyboard:!1,arrows:!0,click:!0,swipe:!0,trackpad:!0,shuffle:!1,direction:"ltr",shadows:!0,spinner:null},$c={left:!0,right:!0,down:!1,up:!1,space:!1,home:!1,end:!1};jQuery.Fotorama=function(a,e){function f(){d.each(pd,function(a,b){if(!b.i){b.i=ce++;var c=z(b.video,!0);if(c){var d={};b.video=c,b.img||b.thumb?b.thumbsReady=!0:d=A(b,pd,$d),B(pd,{img:d.img,thumb:d.thumb},b.i,$d)}}})}function g(a){return Pd[a]||$d.fullScreen}function i(a){var b="keydown."+bb,c="keydown."+bb+_d,d="resize."+bb+_d;a?(Bc.on(c,function(a){var b,c;td&&27===a.keyCode?(b=!0,fd(td,!0,!0)):($d.fullScreen||e.keyboard&&!$d.index)&&(27===a.keyCode?(b=!0,$d.cancelFullScreen()):a.shiftKey&&32===a.keyCode&&g("space")||37===a.keyCode&&g("left")||38===a.keyCode&&g("up")?c="<":32===a.keyCode&&g("space")||39===a.keyCode&&g("right")||40===a.keyCode&&g("down")?c=">":36===a.keyCode&&g("home")?c="<<":35===a.keyCode&&g("end")&&(c=">>")),(b||c)&&S(a),c&&$d.show({index:c,slow:a.altKey,user:!0})}),$d.index||Bc.off(b).on(b,"textarea, input, select",function(a){!vc.hasClass(cb)&&a.stopPropagation()}),Ac.on(d,$d.resize)):(Bc.off(c),Ac.off(d))}function j(b){b!==j.f&&(b?(a.html("").addClass(bb+" "+ae).append(ge).before(ee).before(fe),_($d)):(ge.detach(),ee.detach(),fe.detach(),a.html(de.urtext).removeClass(ae),ab($d)),i(b),j.f=b)}function n(){pd=$d.data=pd||O(e.data)||C(a),qd=$d.size=pd.length,!od.ok&&e.shuffle&&N(pd),f(),ze=y(ze),qd&&j(!0)}function s(){var a=2>qd||td;Ce.noMove=a||Id,Ce.noSwipe=a||!e.swipe,!Md&&ie.toggleClass(ub,!Ce.noMove&&!Ce.noSwipe),Kc&&ge.toggleClass(lb,!Ce.noSwipe)}function t(a){a===!0&&(a=""),e.autoplay=Math.max(+a||Pc,1.5*Ld)}function w(){function a(a,c){b[a?"add":"remove"].push(c)}$d.options=e=Q(e),Id="crossfade"===e.transition||"dissolve"===e.transition,Cd=e.loop&&(qd>2||Id)&&(!Md||"slide"!==Md),Ld=+e.transitionduration||Nc,Od="rtl"===e.direction,Pd=d.extend({},e.keyboard&&$c,e.keyboard);var b={add:[],remove:[]};qd>1?(Dd=e.nav,Fd="top"===e.navposition,b.remove.push(Qb),me.toggle(!!e.arrows)):(Dd=!1,me.hide()),ec(),sd=new rc(d.extend(sc,e.spinner,tc,{direction:Od?-1:1})),yc(),zc(),e.autoplay&&t(e.autoplay),Jd=m(e.thumbwidth)||Rc,Kd=m(e.thumbheight)||Rc,De.ok=Fe.ok=e.trackpad&&!Ic,s(),Xc(e,[Be]),Ed="thumbs"===Dd,Ed?(lc(qd,"navThumb"),rd=re,Zd=Wc,I(ee,d.Fotorama.jst.style({w:Jd,h:Kd,b:e.thumbborderwidth,m:e.thumbmargin,s:_d,q:!Fc})),oe.addClass(Eb).removeClass(Db)):"dots"===Dd?(lc(qd,"navDot"),rd=qe,Zd=Vc,oe.addClass(Db).removeClass(Eb)):(Dd=!1,oe.removeClass(Eb+" "+Db)),Dd&&(Fd?ne.insertBefore(he):ne.insertAfter(he),qc.nav=!1,qc(rd,pe,"nav")),Gd=e.allowfullscreen,Gd?(te.appendTo(he),Hd=Gc&&"native"===Gd):(te.detach(),Hd=!1),a(Id,hb),a(!Id,ib),a(!e.captions,ob),a(Od,mb),a("always"!==e.arrows,pb),Nd=e.shadows&&!Ic,a(!Nd,kb),ge.addClass(b.add.join(" ")).removeClass(b.remove.join(" ")),Ae=d.extend({},e)}function x(a){return 0>a?(qd+a%qd)%qd:a>=qd?a%qd:a}function y(a){return h(a,0,qd-1)}function D(a){return Cd?x(a):y(a)}function W(a){return a>0||Cd?a-1:!1}function X(a){return qd-1>a||Cd?a+1:!1}function $(){Ce.min=Cd?-1/0:-q(qd-1,Be.w,e.margin,wd),Ce.max=Cd?1/0:-q(0,Be.w,e.margin,wd),Ce.snap=Be.w+e.margin}function Ib(){Ee.min=Math.min(0,Be.nw-pe.width()),Ee.max=0,pe.toggleClass(ub,!(Ee.noMove=Ee.min===Ee.max))}function Jb(a,b,c){if("number"==typeof a){a=new Array(a);var e=!0}return d.each(a,function(a,d){if(e&&(d=a),"number"==typeof d){var f=pd[x(d)];if(f){var g="$"+b+"Frame",h=f[g];c.call(this,a,d,f,h,g,h&&h.data())}}})}function Kb(a,b,c,d){(!Qd||"*"===Qd&&d===Bd)&&(a=p(e.width)||p(a)||Sc,b=p(e.height)||p(b)||Tc,$d.resize({width:a,ratio:e.ratio||c||a/b},0,d===Bd?!0:"*"))}function Lb(a,b,c,f,g){Jb(a,b,function(a,h,i,j,k,l){function m(a){var b=x(h);Zc(a,{index:b,src:v,frame:pd[b]})}function n(){s.remove(),d.Fotorama.cache[v]="error",i.html&&"stage"===b||!w||w===v?(!v||i.html||q?"stage"===b&&(j.trigger("f:load").removeClass(Vb+" "+Ub).addClass(Wb),m("load"),Kb()):(j.trigger("f:error").removeClass(Vb).addClass(Ub),m("error")),l.state="error",!(qd>1&&pd[h]===i)||i.html||i.deleted||i.video||q||(i.deleted=!0,$d.splice(h,1))):(i[u]=v=w,Lb([h],b,c,f,!0))}function o(){d.Fotorama.measures[v]=t.measures=d.Fotorama.measures[v]||{width:r.width,height:r.height,ratio:r.width/r.height},Kb(t.measures.width,t.measures.height,t.measures.ratio,h),s.off("load error").addClass($b+(q?" "+_b:"")).prependTo(j),H(s,c||Be,f||i.fit||e.fit),d.Fotorama.cache[v]=l.state="loaded",setTimeout(function(){j.trigger("f:load").removeClass(Vb+" "+Ub).addClass(Wb+" "+(q?Xb:Yb)),"stage"===b&&m("load")},5)}function p(){var a=10;F(function(){return!Xd||!a--&&!Ic},function(){o()})}if(j){var q=$d.fullScreen&&i.full&&i.full!==i.img&&!l.$full&&"stage"===b;if(!l.$img||g||q){var r=new Image,s=d(r),t=s.data();l[q?"$full":"$img"]=s;var u="stage"===b?q?"full":"img":"thumb",v=i[u],w=q?null:i["stage"===b?"thumb":"img"];if("navThumb"===b&&(j=l.$wrap),!v)return void n();d.Fotorama.cache[v]?!function y(){"error"===d.Fotorama.cache[v]?n():"loaded"===d.Fotorama.cache[v]?setTimeout(p,0):setTimeout(y,100)}():(d.Fotorama.cache[v]="*",s.on("load",p).on("error",n)),l.state="",r.src=v}}})}function Zb(a){ye.append(sd.spin().el).appendTo(a)}function ec(){ye.detach(),sd&&sd.stop()}function kc(){var a=$d.activeFrame[Uc];a&&!a.data().state&&(Zb(a),a.on("f:load f:error",function(){a.off("f:load f:error"),ec()}))}function lc(a,b){Jb(a,b,function(a,c,f,g,h,i){g||(g=f[h]=ge[h].clone(),i=g.data(),i.data=f,"stage"===b?(f.html&&d('<div class="'+dc+'"></div>').append(f._html?d(f.html).removeAttr("id").html(f._html):f.html).appendTo(g),e.captions&&f.caption&&d(M(hc,M(ic,f.caption))).appendTo(g),f.video&&g.addClass(sb).append(ve.clone()),je=je.add(g)):"navDot"===b?qe=qe.add(g):"navThumb"===b&&(i.$wrap=g.children(":first"),re=re.add(g),f.video&&g.append(ve.clone())))})}function mc(a,b,c){return a&&a.length&&H(a,b,c)}function oc(a){Jb(a,"stage",function(a,b,c,f,g,h){if(f){He[Uc][x(b)]=f.css(d.extend({left:Id?0:q(b,Be.w,e.margin,wd)},Id&&l(0))),E(f[0])&&(f.appendTo(ie),fd(c.$video));var i=c.fit||e.fit;mc(h.$img,Be,i),mc(h.$full,Be,i)}})}function pc(a,b){if("thumbs"===Dd&&!isNaN(a)){var c=-a,e=-a+Be.nw;re.each(function(){var a=d(this),f=a.data(),g=f.eq,h={h:Kd},i="cover";h.w=f.w,f.l+f.w<c||f.l>e||mc(f.$img,h,i)||b&&Lb([g],"navThumb",h,i)})}}function qc(a,b,c){if(!qc[c]){var f="nav"===c&&Ed,g=0;b.append(a.filter(function(){for(var a,b=d(this),c=b.data(),e=0,f=pd.length;f>e;e++)if(c.data===pd[e]){a=!0,c.eq=e;break}return a||b.remove()&&!1}).sort(function(a,b){return d(a).data().eq-d(b).data().eq}).each(function(){if(f){var a=d(this),b=a.data(),c=Math.round(Kd*b.data.thumbratio)||Jd;b.l=g,b.w=c,a.css({width:c}),g+=c+e.thumbmargin}})),qc[c]=!0}}function wc(a){return a-Ie>Be.w/3}function xc(a){return!(Cd||ze+a&&ze-qd+a||td)}function yc(){ke.toggleClass(xb,xc(0)),le.toggleClass(xb,xc(1))}function zc(){De.ok&&(De.prevent={"<":xc(0),">":xc(1)})}function Cc(a){var b,c,d=a.data();return Ed?(b=d.l,c=d.w):(b=a.position().left,c=a.width()),{c:b+c/2,min:-b+10*e.thumbmargin,max:-b+Be.w-c-10*e.thumbmargin}}function Dc(a){var b=$d.activeFrame[Zd].data();U(se,{time:.9*a,pos:b.l,width:b.w-2*e.thumbborderwidth})}function Hc(a){var b=pd[a.guessIndex][Zd];if(b){var c=Ee.min!==Ee.max,d=c&&Cc($d.activeFrame[Zd]),e=c&&(a.keep&&Hc.l?Hc.l:h((a.coo||Be.nw/2)-Cc(b).c,d.min,d.max)),f=c&&h(e,Ee.min,Ee.max),g=.9*a.time;U(pe,{time:g,pos:f||0,onEnd:function(){pc(f,!0)}}),ed(oe,J(f,Ee.min,Ee.max)),Hc.l=e}}function Jc(){Lc(Zd),Ge[Zd].push($d.activeFrame[Zd].addClass(Pb))}function Lc(a){for(var b=Ge[a];b.length;)b.shift().removeClass(Pb)}function Oc(a){var b=He[a];d.each(vd,function(a,c){delete b[x(c)]}),d.each(b,function(a,c){delete b[a],c.detach()})}function Qc(a){wd=xd=ze;var b=$d.activeFrame,c=b[Uc];c&&(Lc(Uc),Ge[Uc].push(c.addClass(Pb)),a||$d.show.onEnd(!0),u(ie,0,!0),Oc(Uc),oc(vd),$(),Ib())}function Xc(a,b){a&&d.each(b,function(b,c){c&&d.extend(c,{width:a.width||c.width,height:a.height,minwidth:a.minwidth,maxwidth:a.maxwidth,minheight:a.minheight,maxheight:a.maxheight,ratio:R(a.ratio)})})}function Zc(b,c){a.trigger(bb+":"+b,[$d,c])}function _c(){clearTimeout(ad.t),Xd=1,e.stopautoplayontouch?$d.stopAutoplay():Ud=!0}function ad(){e.stopautoplayontouch||(bd(),cd()),ad.t=setTimeout(function(){Xd=0},Nc+Mc)}function bd(){Ud=!(!td&&!Vd)}function cd(){if(clearTimeout(cd.t),!e.autoplay||Ud)return void($d.autoplay&&($d.autoplay=!1,Zc("stopautoplay")));$d.autoplay||($d.autoplay=!0,Zc("startautoplay"));var a=ze,b=$d.activeFrame[Uc].data();F(function(){return b.state||a!==ze},function(){cd.t=setTimeout(function(){Ud||a!==ze||$d.show(Cd?T(!Od):x(ze+(Od?-1:1)))},e.autoplay)})}function dd(){$d.fullScreen&&($d.fullScreen=!1,Gc&&nc.cancel(be),vc.removeClass(cb),uc.removeClass(cb),a.removeClass(Sb).insertAfter(fe),Be=d.extend({},Wd),fd(td,!0,!0),kd("x",!1),$d.resize(),Lb(vd,"stage"),P(Sd,Rd),Zc("fullscreenexit"))}function ed(a,b){Nd&&(a.removeClass(Nb+" "+Ob),b&&!td&&a.addClass(b.replace(/^|\s/g," "+Mb+"--")))}function fd(a,b,c){b&&(ge.removeClass(gb),td=!1,s()),a&&a!==td&&(a.remove(),Zc("unloadvideo")),c&&(bd(),cd())}function gd(a){ge.toggleClass(jb,a)}function hd(a){if(!Ce.flow){var b=a?a.pageX:hd.x,c=b&&!xc(wc(b))&&e.click;hd.p===c||!Id&&e.swipe||!he.toggleClass(vb,c)||(hd.p=c,hd.x=b)}}function id(a){clearTimeout(id.t),e.clicktransition&&e.clicktransition!==e.transition?(Md=e.transition,$d.setOptions({transition:e.clicktransition}),id.t=setTimeout(function(){$d.show(a)},10)):$d.show(a)}function jd(a,b){var c=a.target,f=d(c);f.hasClass(fc)?$d.playVideo():c===ue?$d[($d.fullScreen?"cancel":"request")+"FullScreen"]():td?c===xe&&fd(td,!0,!0):b?gd():e.click&&id({index:a.shiftKey||T(wc(a._x)),slow:a.altKey,user:!0})}function kd(a,b){Ce[a]=Ee[a]=b}function ld(a,b){var c=d(this).data().eq;id({index:c,slow:a.altKey,user:!0,coo:a._x-oe.offset().left,time:b})}function md(){if(n(),w(),!md.i){md.i=!0;var a=e.startindex;(a||e.hash&&c.hash)&&(Bd=K(a||c.hash.replace(/^#/,""),pd,0===$d.index||a,a)),ze=wd=xd=yd=Bd=D(Bd)||0}if(qd){if(nd())return;td&&fd(td,!0),vd=[],Oc(Uc),$d.show({index:ze,time:0,reset:md.ok}),$d.resize()}else $d.destroy();md.ok=!0}function nd(){return!nd.f===Od?(nd.f=Od,ze=qd-1-ze,$d.reverse(),!0):void 0}function od(){od.ok||(od.ok=!0,Zc("ready"))}uc=uc||d("html"),vc=vc||d("body");var pd,qd,rd,sd,td,ud,vd,wd,xd,yd,zd,Ad,Bd,Cd,Dd,Ed,Fd,Gd,Hd,Id,Jd,Kd,Ld,Md,Nd,Od,Pd,Qd,Rd,Sd,Td,Ud,Vd,Wd,Xd,Yd,Zd,$d=this,_d=d.now(),ae=bb+_d,be=a[0],ce=1,de=a.data(),ee=d("<style></style>"),fe=d(M(Rb)),ge=d(M(db)),he=d(M(qb)).appendTo(ge),ie=(he[0],d(M(tb)).appendTo(he)),je=d(),ke=d(M(wb+" "+yb)),le=d(M(wb+" "+zb)),me=ke.add(le).appendTo(he),ne=d(M(Bb)),oe=d(M(Ab)).appendTo(ne),pe=d(M(Cb)).appendTo(oe),qe=d(),re=d(),se=(ie.data(),pe.data(),d(M(cc)).appendTo(pe)),te=d(M(Tb)),ue=te[0],ve=d(M(fc)),we=d(M(gc)).appendTo(he),xe=we[0],ye=d(M(jc)),ze=!1,Ae={},Be={},Ce={},De={},Ee={},Fe={},Ge={},He={},Ie=0,Je=[];ge[Uc]=d(M(rb)),ge[Wc]=d(M(Fb+" "+Hb,M(bc))),ge[Vc]=d(M(Fb+" "+Gb,M(ac))),Ge[Uc]=[],Ge[Wc]=[],Ge[Vc]=[],He[Uc]={},ge.addClass(Ec?fb:eb),de.fotorama=this,$d.startAutoplay=function(a){return $d.autoplay?this:(Ud=Vd=!1,t(a||e.autoplay),cd(),this)},$d.stopAutoplay=function(){return $d.autoplay&&(Ud=Vd=!0,cd()),this},$d.show=function(a){var b;"object"!=typeof a?(b=a,a={}):b=a.index,b=">"===b?xd+1:"<"===b?xd-1:"<<"===b?0:">>"===b?qd-1:b,b=isNaN(b)?K(b,pd,!0):b,b="undefined"==typeof b?ze||0:b,$d.activeIndex=ze=D(b),zd=W(ze),Ad=X(ze),vd=[ze,zd,Ad],xd=Cd?b:ze;var c=Math.abs(yd-xd),d=v(a.time,function(){return Math.min(Ld*(1+(c-1)/12),2*Ld)}),f=a.overPos;a.slow&&(d*=10),$d.activeFrame=ud=pd[ze],fd(td,ud.i!==pd[x(wd)].i),lc(vd,"stage"),oc(Ic?[xd]:[xd,W(xd),X(xd)]),kd("go",!0),a.reset||Zc("show",{user:a.user,time:d}),Ud=!0;var g=$d.show.onEnd=function(b){if(!g.ok){if(g.ok=!0,b||Qc(!0),!a.reset&&(Zc("showend",{user:a.user}),!b&&Md&&Md!==e.transition))return $d.setOptions({transition:Md}),void(Md=!1);kc(),Lb(vd,"stage"),kd("go",!1),zc(),hd(),bd(),cd()}};if(Id){var i=ud[Uc],j=ze!==yd?pd[yd][Uc]:null;V(i,j,je,{time:d,method:e.transition,onEnd:g},Je)
}else U(ie,{pos:-q(xd,Be.w,e.margin,wd),overPos:f,time:d,onEnd:g,_001:!0});if(yc(),Dd){Jc();var k=y(ze+h(xd-yd,-1,1));Hc({time:d,coo:k!==ze&&a.coo,guessIndex:"undefined"!=typeof a.coo?k:ze,keep:a.reset}),Ed&&Dc(d)}return Td="undefined"!=typeof yd&&yd!==ze,yd=ze,e.hash&&Td&&!$d.eq&&G(ud.id||ze+1),this},$d.requestFullScreen=function(){return Gd&&!$d.fullScreen&&(Rd=Ac.scrollTop(),Sd=Ac.scrollLeft(),P(0,0),kd("x",!0),Wd=d.extend({},Be),a.addClass(Sb).appendTo(vc.addClass(cb)),uc.addClass(cb),fd(td,!0,!0),$d.fullScreen=!0,Hd&&nc.request(be),$d.resize(),Lb(vd,"stage"),kc(),Zc("fullscreenenter")),this},$d.cancelFullScreen=function(){return Hd&&nc.is()?nc.cancel(b):dd(),this},b.addEventListener&&b.addEventListener(nc.event,function(){!pd||nc.is()||td||dd()},!1),$d.resize=function(a){if(!pd)return this;Xc($d.fullScreen?{width:"100%",maxwidth:null,minwidth:null,height:"100%",maxheight:null,minheight:null}:Q(a),[Be,$d.fullScreen||e]);var b=arguments[1]||0,c=arguments[2],d=Be.width,f=Be.height,g=Be.ratio,i=Ac.height()-(Dd?oe.height():0);return p(d)&&(ge.addClass(nb).css({width:d,minWidth:Be.minwidth||0,maxWidth:Be.maxwidth||Yc}),d=Be.W=Be.w=ge.width(),Be.nw=Dd&&o(e.navwidth,d)||d,e.glimpse&&(Be.w-=Math.round(2*(o(e.glimpse,d)||0))),ie.css({width:Be.w,marginLeft:(Be.W-Be.w)/2}),f=o(f,i),f=f||g&&d/g,f&&(d=Math.round(d),f=Be.h=Math.round(h(f,o(Be.minheight,i),o(Be.maxheight,i))),he.stop().animate({width:d,height:f},b,function(){ge.removeClass(nb)}),Qc(),Dd&&(oe.stop().animate({width:Be.nw},b),Hc({guessIndex:ze,time:b,keep:!0}),Ed&&qc.nav&&Dc(b)),Qd=c||!0,od())),Ie=he.offset().left,this},$d.setOptions=function(a){return d.extend(e,a),md(),this},$d.shuffle=function(){return pd&&N(pd)&&md(),this},$d.destroy=function(){return $d.cancelFullScreen(),$d.stopAutoplay(),pd=$d.data=null,j(),vd=[],Oc(Uc),this},$d.playVideo=function(){var a=$d.activeFrame,b=a.video,c=ze;return"object"==typeof b&&a.videoReady&&(Hd&&$d.fullScreen&&$d.cancelFullScreen(),F(function(){return!nc.is()||c!==ze},function(){c===ze&&(a.$video=a.$video||d(d.Fotorama.jst.video(b)),a.$video.appendTo(a[Uc]),ge.addClass(gb),td=a.$video,s(),Zc("loadvideo"))})),this},$d.stopVideo=function(){return fd(td,!0,!0),this},he.on("mousemove",hd),Ce=Y(ie,{onStart:_c,onMove:function(a,b){ed(he,b.edge)},onTouchEnd:ad,onEnd:function(a){ed(he);var b=(Kc&&!Yd||a.touch)&&e.arrows&&"always"!==e.arrows;if(a.moved||b&&a.pos!==a.newPos&&!a.control){var c=r(a.newPos,Be.w,e.margin,wd);$d.show({index:c,time:Id?Ld:a.time,overPos:a.overPos,user:!0})}else a.aborted||a.control||jd(a.startEvent,b)},_001:!0,timeLow:1,timeHigh:1,friction:2,select:"."+Qb+", ."+Qb+" *",$wrap:he}),Ee=Y(pe,{onStart:_c,onMove:function(a,b){ed(oe,b.edge)},onTouchEnd:ad,onEnd:function(a){function b(){Hc.l=a.newPos,bd(),cd(),pc(a.newPos,!0)}if(a.moved)a.pos!==a.newPos?(Ud=!0,U(pe,{time:a.time,pos:a.newPos,overPos:a.overPos,onEnd:b}),pc(a.newPos),Nd&&ed(oe,J(a.newPos,Ee.min,Ee.max))):b();else{var c=a.$target.closest("."+Fb,pe)[0];c&&ld.call(c,a.startEvent)}},timeLow:.5,timeHigh:2,friction:5,$wrap:oe}),De=Z(he,{shift:!0,onEnd:function(a,b){_c(),ad(),$d.show({index:b,slow:a.altKey})}}),Fe=Z(oe,{onEnd:function(a,b){_c(),ad();var c=u(pe)+.25*b;pe.css(k(h(c,Ee.min,Ee.max))),Nd&&ed(oe,J(c,Ee.min,Ee.max)),Fe.prevent={"<":c>=Ee.max,">":c<=Ee.min},clearTimeout(Fe.t),Fe.t=setTimeout(function(){pc(c,!0)},Mc),pc(c)}}),ge.hover(function(){setTimeout(function(){Xd||(Yd=!0,gd(!Yd))},0)},function(){Yd&&(Yd=!1,gd(!Yd))}),L(me,function(a){S(a),id({index:me.index(this)?">":"<",slow:a.altKey,user:!0})},{onStart:function(){_c(),Ce.control=!0},onTouchEnd:ad}),d.each("load push pop shift unshift reverse sort splice".split(" "),function(a,b){$d[b]=function(){return pd=pd||[],"load"!==b?Array.prototype[b].apply(pd,arguments):arguments[0]&&"object"==typeof arguments[0]&&arguments[0].length&&(pd=O(arguments[0])),md(),$d}}),md()},d.fn.fotorama=function(b){return this.each(function(){var c=this,e=d(this),f=e.data(),g=f.fotorama;g?g.setOptions(b):F(function(){return!D(c)},function(){f.urtext=e.html(),new d.Fotorama(e,d.extend({},Zc,a.fotoramaDefaults,b,f))})})},d.Fotorama.instances=[],d.Fotorama.cache={},d.Fotorama.measures={},d=d||{},d.Fotorama=d.Fotorama||{},d.Fotorama.jst=d.Fotorama.jst||{},d.Fotorama.jst.style=function(a){{var b,c="";lc.escape}return c+=".fotorama"+(null==(b=a.s)?"":b)+" .fotorama__nav--thumbs .fotorama__nav__frame{\npadding:"+(null==(b=a.m)?"":b)+"px;\nheight:"+(null==(b=a.h)?"":b)+"px}\n.fotorama"+(null==(b=a.s)?"":b)+" .fotorama__thumb-border{\nheight:"+(null==(b=a.h-a.b*(a.q?0:2))?"":b)+"px;\nborder-width:"+(null==(b=a.b)?"":b)+"px;\nmargin-top:"+(null==(b=a.m)?"":b)+"px}"},d.Fotorama.jst.video=function(a){function b(){c+=d.call(arguments,"")}var c="",d=(lc.escape,Array.prototype.join);return c+='<div class="fotorama__video"><iframe src="',b(("youtube"==a.type?"http://youtube.com/embed/"+a.id+"?autoplay=1":"vimeo"==a.type?"http://player.vimeo.com/video/"+a.id+"?autoplay=1&badge=0":a.id)+(a.s&&"custom"!=a.type?"&"+a.s:"")),c+='" frameborder="0" allowfullscreen></iframe></div>'},d(function(){d("."+bb+':not([data-auto="false"])').fotorama()})}(window,document,location,"undefined"!=typeof jQuery&&jQuery);
(function(angular) {
  return angular.module('xoxlovka', ['directives']);
})(angular);

//# sourceMappingURL=app.js.map

(function(angular) {
  return angular.module('directives', []).directive('diStickyHeader', function($window) {
    return {
      link: function(scope, ele) {
        var threshold;
        threshold = $('.header__section').height() + $('.navigation__section').height();
        return $($window).on('scroll', function() {
          if ($($window).scrollTop() >= threshold) {
            return ele.addClass('active');
          } else {
            return ele.removeClass('active');
          }
        });
      }
    };
  }).directive('diPreventDefault', function() {
    return {
      priority: 1001,
      link: function(scope, elem, attrs) {
        if (attrs.ngClick || attrs.href === '' || attrs.href === '#') {
          return elem.on('click', function(e) {
            return e.preventDefault();
          });
        }
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
        transforms: Modernizr.csstransforms,
        transforms3d: Modernizr.csstransforms3d
      };
    } else {
      transitions = false;
    }
    return {
      restrict: 'E',
      replace: true,
      template: "<div class='carousel' ng-class='position'> <div class='carousel-wrapper'> <ul class='carousel-items' ng-transclude></ul> <a href='#' class='jcarousel-prev controls' ng-if='visibleControls'></a> <a href='#' class='jcarousel-next controls' ng-if='visibleControls'></a> </div> <ul class='pagination' ng-show='pagination'></ul> </div>",
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
  });
})(angular);

//# sourceMappingURL=directives.js.map
