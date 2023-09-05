/*! For license information please see commons-7560831982a5164f9789.js.LICENSE.txt */
(self.webpackChunkgatsby_starter_hello_world=self.webpackChunkgatsby_starter_hello_world||[]).push([[351],{8875:function(e,t,r){var n;!function(){"use strict";var o=!("undefined"==typeof window||!window.document||!window.document.createElement),a={canUseDOM:o,canUseWorkers:"undefined"!=typeof Worker,canUseEventListeners:o&&!(!window.addEventListener&&!window.attachEvent),canUseViewport:o&&!!window.screen};void 0===(n=function(){return a}.call(t,r,t,e))||(e.exports=n)}()},9418:function(e,t,r){"use strict";r.d(t,{Z:function(){return T}});var n=r(7294),o=r(1883),a=r(5482),i=r(4578);let c=function(e){function t(){for(var t,r=arguments.length,n=new Array(r),o=0;o<r;o++)n[o]=arguments[o];return(t=e.call.apply(e,[this].concat(n))||this).state={hasError:!1,error:void 0,errorInfo:void 0},t}(0,i.Z)(t,e),t.getDerivedStateFromError=function(e){return{hasError:!0}};var r=t.prototype;return r.componentDidCatch=function(e,t){console.error(e,t),this.setState({error:e,errorInfo:t})},r.render=function(){return this.state.hasError?n.createElement("div",{className:""},n.createElement("title",null,"Error!"),n.createElement("h1",null,"Error!"),n.createElement("div",{className:""},n.createElement("p",null,"Oops! Sorry, something went wrong."),n.createElement("p",null,"Please take a moment to let us know what happened."),n.createElement("p",null,"Technical information about the error has been captured and will be pasted into your message draft.")),n.createElement("a",{href:"mailto:jormceachern@gmail.com?subject=MMAA%20site%20error&body="+this.state.error+":%20"+this.state.errorInfo,target:"_top"},"Email the site developer")):this.props.children},t}(n.Component);var l=c;const u=()=>n.createElement(a.ql,null,n.createElement("meta",{charSet:"utf-8"}),n.createElement("title",null,"Atlantic Martial Arts"),n.createElement("meta",{name:"description",content:"Atlantic Martial Arts formally Maritime Martial Arts Academy are located at 28 Saunders Street, Fredericton, New Brunswick. The Cultural Centre Gym (Old YMCA by exhibition ground)."}),n.createElement("link",{rel:"canonical",href:{}.SITE_URL}),n.createElement("link",{href:"/global.css",rel:"stylesheet"})),s=()=>n.createElement("div",{className:"flex justify-center"},n.createElement("nav",{className:"max-w-3xl flex flex-nowrap justify-evenly","aria-label":"main menu"},n.createElement("div",{className:"flex flex-nowrap"},n.createElement("div",{className:"flex flex-wrap sm:hidden","aria-label":"toggle mobile menu"},n.createElement("hr",{className:"bg-black w-4 h-0.5 p-1 rounded-sm"}),n.createElement("hr",{className:"bg-black w-4 h-0.5 p-1 rounded-sm"}),n.createElement("hr",{className:"bg-black w-4 h-0.5 p-1 rounded-sm"})),n.createElement(o.rU,{id:"home",to:"/"},n.createElement("div",{"aria-label":"logo",className:"h-4 w-16",style:{background:"center / cover no-repeat url(https://wallpaperaccess.com/full/178504.jpg)"}}))),n.createElement(o.rU,{id:"information",to:"/information"},"INFORMATION"),n.createElement(o.rU,{id:"contact",to:"/contact"},"CONTACT"),n.createElement(o.rU,{id:"hapkido",to:"/hapkido"},"HAPKIDO"),n.createElement(o.rU,{id:"taekwondo",to:"/taekwondo"},"TAEKWONDO"),n.createElement(o.rU,{id:"kickboxing",to:"/kickboxing"},"KICKBOXING"))),f=()=>n.createElement("div",null,"General Inquiries",n.createElement("div",null,n.createElement("a",{href:"mailto:maritimemartialarts@hotmail.com",target:"_top"},"Email Us"),n.createElement("a",{href:"tel:506-440-3883"},"Phone")));var T=e=>{let{children:t}=e;return n.createElement(l,null,n.createElement(n.Fragment,null,n.createElement(u,null),n.createElement(s,null),n.createElement("div",{style:{background:"center / cover no-repeat url(https://wallpaperaccess.com/full/178504.jpg)"}}),n.createElement("div",{className:""},t),n.createElement(f,null)))}},9590:function(e){"use strict";var t=Array.isArray,r=Object.keys,n=Object.prototype.hasOwnProperty,o="undefined"!=typeof Element;function a(e,i){if(e===i)return!0;if(e&&i&&"object"==typeof e&&"object"==typeof i){var c,l,u,s=t(e),f=t(i);if(s&&f){if((l=e.length)!=i.length)return!1;for(c=l;0!=c--;)if(!a(e[c],i[c]))return!1;return!0}if(s!=f)return!1;var T=e instanceof Date,E=i instanceof Date;if(T!=E)return!1;if(T&&E)return e.getTime()==i.getTime();var p=e instanceof RegExp,d=i instanceof RegExp;if(p!=d)return!1;if(p&&d)return e.toString()==i.toString();var A=r(e);if((l=A.length)!==r(i).length)return!1;for(c=l;0!=c--;)if(!n.call(i,A[c]))return!1;if(o&&e instanceof Element&&i instanceof Element)return e===i;for(c=l;0!=c--;)if(!("_owner"===(u=A[c])&&e.$$typeof||a(e[u],i[u])))return!1;return!0}return e!=e&&i!=i}e.exports=function(e,t){try{return a(e,t)}catch(r){if(r.message&&r.message.match(/stack|recursion/i)||-2146828260===r.number)return console.warn("Warning: react-fast-compare does not handle circular references.",r.name,r.message),!1;throw r}}},5482:function(e,t,r){t.ql=void 0;var n=Object.assign||function(e){for(var t=1;t<arguments.length;t++){var r=arguments[t];for(var n in r)Object.prototype.hasOwnProperty.call(r,n)&&(e[n]=r[n])}return e},o=function(){function e(e,t){for(var r=0;r<t.length;r++){var n=t[r];n.enumerable=n.enumerable||!1,n.configurable=!0,"value"in n&&(n.writable=!0),Object.defineProperty(e,n.key,n)}}return function(t,r,n){return r&&e(t.prototype,r),n&&e(t,n),t}}(),a=f(r(7294)),i=f(r(5697)),c=f(r(3524)),l=f(r(9590)),u=r(2994),s=r(4455);function f(e){return e&&e.__esModule?e:{default:e}}function T(e,t){var r={};for(var n in e)t.indexOf(n)>=0||Object.prototype.hasOwnProperty.call(e,n)&&(r[n]=e[n]);return r}var E,p,d,A=(0,c.default)(u.reducePropsToState,u.handleClientStateChange,u.mapStateOnServer)((function(){return null})),m=(E=A,d=p=function(e){function t(){return function(e,t){if(!(e instanceof t))throw new TypeError("Cannot call a class as a function")}(this,t),function(e,t){if(!e)throw new ReferenceError("this hasn't been initialised - super() hasn't been called");return!t||"object"!=typeof t&&"function"!=typeof t?e:t}(this,e.apply(this,arguments))}return function(e,t){if("function"!=typeof t&&null!==t)throw new TypeError("Super expression must either be null or a function, not "+typeof t);e.prototype=Object.create(t&&t.prototype,{constructor:{value:e,enumerable:!1,writable:!0,configurable:!0}}),t&&(Object.setPrototypeOf?Object.setPrototypeOf(e,t):e.__proto__=t)}(t,e),t.prototype.shouldComponentUpdate=function(e){return!(0,l.default)(this.props,e)},t.prototype.mapNestedChildrenToProps=function(e,t){if(!t)return null;switch(e.type){case s.TAG_NAMES.SCRIPT:case s.TAG_NAMES.NOSCRIPT:return{innerHTML:t};case s.TAG_NAMES.STYLE:return{cssText:t}}throw new Error("<"+e.type+" /> elements are self-closing and can not contain children. Refer to our API for more information.")},t.prototype.flattenArrayTypeChildren=function(e){var t,r=e.child,o=e.arrayTypeChildren,a=e.newChildProps,i=e.nestedChildren;return n({},o,((t={})[r.type]=[].concat(o[r.type]||[],[n({},a,this.mapNestedChildrenToProps(r,i))]),t))},t.prototype.mapObjectTypeChildren=function(e){var t,r,o=e.child,a=e.newProps,i=e.newChildProps,c=e.nestedChildren;switch(o.type){case s.TAG_NAMES.TITLE:return n({},a,((t={})[o.type]=c,t.titleAttributes=n({},i),t));case s.TAG_NAMES.BODY:return n({},a,{bodyAttributes:n({},i)});case s.TAG_NAMES.HTML:return n({},a,{htmlAttributes:n({},i)})}return n({},a,((r={})[o.type]=n({},i),r))},t.prototype.mapArrayTypeChildrenToProps=function(e,t){var r=n({},t);return Object.keys(e).forEach((function(t){var o;r=n({},r,((o={})[t]=e[t],o))})),r},t.prototype.warnOnInvalidChildren=function(e,t){return!0},t.prototype.mapChildrenToProps=function(e,t){var r=this,n={};return a.default.Children.forEach(e,(function(e){if(e&&e.props){var o=e.props,a=o.children,i=T(o,["children"]),c=(0,u.convertReactPropstoHtmlAttributes)(i);switch(r.warnOnInvalidChildren(e,a),e.type){case s.TAG_NAMES.LINK:case s.TAG_NAMES.META:case s.TAG_NAMES.NOSCRIPT:case s.TAG_NAMES.SCRIPT:case s.TAG_NAMES.STYLE:n=r.flattenArrayTypeChildren({child:e,arrayTypeChildren:n,newChildProps:c,nestedChildren:a});break;default:t=r.mapObjectTypeChildren({child:e,newProps:t,newChildProps:c,nestedChildren:a})}}})),t=this.mapArrayTypeChildrenToProps(n,t)},t.prototype.render=function(){var e=this.props,t=e.children,r=T(e,["children"]),o=n({},r);return t&&(o=this.mapChildrenToProps(t,o)),a.default.createElement(E,o)},o(t,null,[{key:"canUseDOM",set:function(e){E.canUseDOM=e}}]),t}(a.default.Component),p.propTypes={base:i.default.object,bodyAttributes:i.default.object,children:i.default.oneOfType([i.default.arrayOf(i.default.node),i.default.node]),defaultTitle:i.default.string,defer:i.default.bool,encodeSpecialCharacters:i.default.bool,htmlAttributes:i.default.object,link:i.default.arrayOf(i.default.object),meta:i.default.arrayOf(i.default.object),noscript:i.default.arrayOf(i.default.object),onChangeClientState:i.default.func,script:i.default.arrayOf(i.default.object),style:i.default.arrayOf(i.default.object),title:i.default.string,titleAttributes:i.default.object,titleTemplate:i.default.string},p.defaultProps={defer:!0,encodeSpecialCharacters:!0},p.peek=E.peek,p.rewind=function(){var e=E.rewind();return e||(e=(0,u.mapStateOnServer)({baseTag:[],bodyAttributes:{},encodeSpecialCharacters:!0,htmlAttributes:{},linkTags:[],metaTags:[],noscriptTags:[],scriptTags:[],styleTags:[],title:"",titleAttributes:{}})),e},d);m.renderStatic=m.rewind,t.ql=m},4455:function(e,t){t.__esModule=!0;t.ATTRIBUTE_NAMES={BODY:"bodyAttributes",HTML:"htmlAttributes",TITLE:"titleAttributes"};var r=t.TAG_NAMES={BASE:"base",BODY:"body",HEAD:"head",HTML:"html",LINK:"link",META:"meta",NOSCRIPT:"noscript",SCRIPT:"script",STYLE:"style",TITLE:"title"},n=(t.VALID_TAG_NAMES=Object.keys(r).map((function(e){return r[e]})),t.TAG_PROPERTIES={CHARSET:"charset",CSS_TEXT:"cssText",HREF:"href",HTTPEQUIV:"http-equiv",INNER_HTML:"innerHTML",ITEM_PROP:"itemprop",NAME:"name",PROPERTY:"property",REL:"rel",SRC:"src"},t.REACT_TAG_MAP={accesskey:"accessKey",charset:"charSet",class:"className",contenteditable:"contentEditable",contextmenu:"contextMenu","http-equiv":"httpEquiv",itemprop:"itemProp",tabindex:"tabIndex"});t.HELMET_PROPS={DEFAULT_TITLE:"defaultTitle",DEFER:"defer",ENCODE_SPECIAL_CHARACTERS:"encodeSpecialCharacters",ON_CHANGE_CLIENT_STATE:"onChangeClientState",TITLE_TEMPLATE:"titleTemplate"},t.HTML_TAG_MAP=Object.keys(n).reduce((function(e,t){return e[n[t]]=t,e}),{}),t.SELF_CLOSING_TAGS=[r.NOSCRIPT,r.SCRIPT,r.STYLE],t.HELMET_ATTRIBUTE="data-react-helmet"},2994:function(e,t,r){t.__esModule=!0,t.warn=t.requestAnimationFrame=t.reducePropsToState=t.mapStateOnServer=t.handleClientStateChange=t.convertReactPropstoHtmlAttributes=void 0;var n="function"==typeof Symbol&&"symbol"==typeof Symbol.iterator?function(e){return typeof e}:function(e){return e&&"function"==typeof Symbol&&e.constructor===Symbol&&e!==Symbol.prototype?"symbol":typeof e},o=Object.assign||function(e){for(var t=1;t<arguments.length;t++){var r=arguments[t];for(var n in r)Object.prototype.hasOwnProperty.call(r,n)&&(e[n]=r[n])}return e},a=l(r(7294)),i=l(r(4852)),c=r(4455);function l(e){return e&&e.__esModule?e:{default:e}}var u,s=function(e){return!1===(!(arguments.length>1&&void 0!==arguments[1])||arguments[1])?String(e):String(e).replace(/&/g,"&amp;").replace(/</g,"&lt;").replace(/>/g,"&gt;").replace(/"/g,"&quot;").replace(/'/g,"&#x27;")},f=function(e){var t=A(e,c.TAG_NAMES.TITLE),r=A(e,c.HELMET_PROPS.TITLE_TEMPLATE);if(r&&t)return r.replace(/%s/g,(function(){return t}));var n=A(e,c.HELMET_PROPS.DEFAULT_TITLE);return t||n||void 0},T=function(e){return A(e,c.HELMET_PROPS.ON_CHANGE_CLIENT_STATE)||function(){}},E=function(e,t){return t.filter((function(t){return void 0!==t[e]})).map((function(t){return t[e]})).reduce((function(e,t){return o({},e,t)}),{})},p=function(e,t){return t.filter((function(e){return void 0!==e[c.TAG_NAMES.BASE]})).map((function(e){return e[c.TAG_NAMES.BASE]})).reverse().reduce((function(t,r){if(!t.length)for(var n=Object.keys(r),o=0;o<n.length;o++){var a=n[o].toLowerCase();if(-1!==e.indexOf(a)&&r[a])return t.concat(r)}return t}),[])},d=function(e,t,r){var o={};return r.filter((function(t){return!!Array.isArray(t[e])||(void 0!==t[e]&&b("Helmet: "+e+' should be of type "Array". Instead found type "'+n(t[e])+'"'),!1)})).map((function(t){return t[e]})).reverse().reduce((function(e,r){var n={};r.filter((function(e){for(var r=void 0,a=Object.keys(e),i=0;i<a.length;i++){var l=a[i],u=l.toLowerCase();-1===t.indexOf(u)||r===c.TAG_PROPERTIES.REL&&"canonical"===e[r].toLowerCase()||u===c.TAG_PROPERTIES.REL&&"stylesheet"===e[u].toLowerCase()||(r=u),-1===t.indexOf(l)||l!==c.TAG_PROPERTIES.INNER_HTML&&l!==c.TAG_PROPERTIES.CSS_TEXT&&l!==c.TAG_PROPERTIES.ITEM_PROP||(r=l)}if(!r||!e[r])return!1;var s=e[r].toLowerCase();return o[r]||(o[r]={}),n[r]||(n[r]={}),!o[r][s]&&(n[r][s]=!0,!0)})).reverse().forEach((function(t){return e.push(t)}));for(var a=Object.keys(n),l=0;l<a.length;l++){var u=a[l],s=(0,i.default)({},o[u],n[u]);o[u]=s}return e}),[]).reverse()},A=function(e,t){for(var r=e.length-1;r>=0;r--){var n=e[r];if(n.hasOwnProperty(t))return n[t]}return null},m=(u=Date.now(),function(e){var t=Date.now();t-u>16?(u=t,e(t)):setTimeout((function(){m(e)}),0)}),h=function(e){return clearTimeout(e)},y="undefined"!=typeof window?window.requestAnimationFrame||window.webkitRequestAnimationFrame||window.mozRequestAnimationFrame||m:r.g.requestAnimationFrame||m,S="undefined"!=typeof window?window.cancelAnimationFrame||window.webkitCancelAnimationFrame||window.mozCancelAnimationFrame||h:r.g.cancelAnimationFrame||h,b=function(e){return console&&"function"==typeof console.warn&&console.warn(e)},_=null,v=function(e,t){var r=e.baseTag,n=e.bodyAttributes,o=e.htmlAttributes,a=e.linkTags,i=e.metaTags,l=e.noscriptTags,u=e.onChangeClientState,s=e.scriptTags,f=e.styleTags,T=e.title,E=e.titleAttributes;g(c.TAG_NAMES.BODY,n),g(c.TAG_NAMES.HTML,o),R(T,E);var p={baseTag:P(c.TAG_NAMES.BASE,r),linkTags:P(c.TAG_NAMES.LINK,a),metaTags:P(c.TAG_NAMES.META,i),noscriptTags:P(c.TAG_NAMES.NOSCRIPT,l),scriptTags:P(c.TAG_NAMES.SCRIPT,s),styleTags:P(c.TAG_NAMES.STYLE,f)},d={},A={};Object.keys(p).forEach((function(e){var t=p[e],r=t.newTags,n=t.oldTags;r.length&&(d[e]=r),n.length&&(A[e]=p[e].oldTags)})),t&&t(),u(e,d,A)},O=function(e){return Array.isArray(e)?e.join(""):e},R=function(e,t){void 0!==e&&document.title!==e&&(document.title=O(e)),g(c.TAG_NAMES.TITLE,t)},g=function(e,t){var r=document.getElementsByTagName(e)[0];if(r){for(var n=r.getAttribute(c.HELMET_ATTRIBUTE),o=n?n.split(","):[],a=[].concat(o),i=Object.keys(t),l=0;l<i.length;l++){var u=i[l],s=t[u]||"";r.getAttribute(u)!==s&&r.setAttribute(u,s),-1===o.indexOf(u)&&o.push(u);var f=a.indexOf(u);-1!==f&&a.splice(f,1)}for(var T=a.length-1;T>=0;T--)r.removeAttribute(a[T]);o.length===a.length?r.removeAttribute(c.HELMET_ATTRIBUTE):r.getAttribute(c.HELMET_ATTRIBUTE)!==i.join(",")&&r.setAttribute(c.HELMET_ATTRIBUTE,i.join(","))}},P=function(e,t){var r=document.head||document.querySelector(c.TAG_NAMES.HEAD),n=r.querySelectorAll(e+"["+c.HELMET_ATTRIBUTE+"]"),o=Array.prototype.slice.call(n),a=[],i=void 0;return t&&t.length&&t.forEach((function(t){var r=document.createElement(e);for(var n in t)if(t.hasOwnProperty(n))if(n===c.TAG_PROPERTIES.INNER_HTML)r.innerHTML=t.innerHTML;else if(n===c.TAG_PROPERTIES.CSS_TEXT)r.styleSheet?r.styleSheet.cssText=t.cssText:r.appendChild(document.createTextNode(t.cssText));else{var l=void 0===t[n]?"":t[n];r.setAttribute(n,l)}r.setAttribute(c.HELMET_ATTRIBUTE,"true"),o.some((function(e,t){return i=t,r.isEqualNode(e)}))?o.splice(i,1):a.push(r)})),o.forEach((function(e){return e.parentNode.removeChild(e)})),a.forEach((function(e){return r.appendChild(e)})),{oldTags:o,newTags:a}},M=function(e){return Object.keys(e).reduce((function(t,r){var n=void 0!==e[r]?r+'="'+e[r]+'"':""+r;return t?t+" "+n:n}),"")},w=function(e){var t=arguments.length>1&&void 0!==arguments[1]?arguments[1]:{};return Object.keys(e).reduce((function(t,r){return t[c.REACT_TAG_MAP[r]||r]=e[r],t}),t)},C=function(e,t,r){switch(e){case c.TAG_NAMES.TITLE:return{toComponent:function(){return e=t.title,r=t.titleAttributes,(n={key:e})[c.HELMET_ATTRIBUTE]=!0,o=w(r,n),[a.default.createElement(c.TAG_NAMES.TITLE,o,e)];var e,r,n,o},toString:function(){return function(e,t,r,n){var o=M(r),a=O(t);return o?"<"+e+" "+c.HELMET_ATTRIBUTE+'="true" '+o+">"+s(a,n)+"</"+e+">":"<"+e+" "+c.HELMET_ATTRIBUTE+'="true">'+s(a,n)+"</"+e+">"}(e,t.title,t.titleAttributes,r)}};case c.ATTRIBUTE_NAMES.BODY:case c.ATTRIBUTE_NAMES.HTML:return{toComponent:function(){return w(t)},toString:function(){return M(t)}};default:return{toComponent:function(){return function(e,t){return t.map((function(t,r){var n,o=((n={key:r})[c.HELMET_ATTRIBUTE]=!0,n);return Object.keys(t).forEach((function(e){var r=c.REACT_TAG_MAP[e]||e;if(r===c.TAG_PROPERTIES.INNER_HTML||r===c.TAG_PROPERTIES.CSS_TEXT){var n=t.innerHTML||t.cssText;o.dangerouslySetInnerHTML={__html:n}}else o[r]=t[e]})),a.default.createElement(e,o)}))}(e,t)},toString:function(){return function(e,t,r){return t.reduce((function(t,n){var o=Object.keys(n).filter((function(e){return!(e===c.TAG_PROPERTIES.INNER_HTML||e===c.TAG_PROPERTIES.CSS_TEXT)})).reduce((function(e,t){var o=void 0===n[t]?t:t+'="'+s(n[t],r)+'"';return e?e+" "+o:o}),""),a=n.innerHTML||n.cssText||"",i=-1===c.SELF_CLOSING_TAGS.indexOf(e);return t+"<"+e+" "+c.HELMET_ATTRIBUTE+'="true" '+o+(i?"/>":">"+a+"</"+e+">")}),"")}(e,t,r)}}}};t.convertReactPropstoHtmlAttributes=function(e){var t=arguments.length>1&&void 0!==arguments[1]?arguments[1]:{};return Object.keys(e).reduce((function(t,r){return t[c.HTML_TAG_MAP[r]||r]=e[r],t}),t)},t.handleClientStateChange=function(e){_&&S(_),e.defer?_=y((function(){v(e,(function(){_=null}))})):(v(e),_=null)},t.mapStateOnServer=function(e){var t=e.baseTag,r=e.bodyAttributes,n=e.encode,o=e.htmlAttributes,a=e.linkTags,i=e.metaTags,l=e.noscriptTags,u=e.scriptTags,s=e.styleTags,f=e.title,T=void 0===f?"":f,E=e.titleAttributes;return{base:C(c.TAG_NAMES.BASE,t,n),bodyAttributes:C(c.ATTRIBUTE_NAMES.BODY,r,n),htmlAttributes:C(c.ATTRIBUTE_NAMES.HTML,o,n),link:C(c.TAG_NAMES.LINK,a,n),meta:C(c.TAG_NAMES.META,i,n),noscript:C(c.TAG_NAMES.NOSCRIPT,l,n),script:C(c.TAG_NAMES.SCRIPT,u,n),style:C(c.TAG_NAMES.STYLE,s,n),title:C(c.TAG_NAMES.TITLE,{title:T,titleAttributes:E},n)}},t.reducePropsToState=function(e){return{baseTag:p([c.TAG_PROPERTIES.HREF],e),bodyAttributes:E(c.ATTRIBUTE_NAMES.BODY,e),defer:A(e,c.HELMET_PROPS.DEFER),encode:A(e,c.HELMET_PROPS.ENCODE_SPECIAL_CHARACTERS),htmlAttributes:E(c.ATTRIBUTE_NAMES.HTML,e),linkTags:d(c.TAG_NAMES.LINK,[c.TAG_PROPERTIES.REL,c.TAG_PROPERTIES.HREF],e),metaTags:d(c.TAG_NAMES.META,[c.TAG_PROPERTIES.NAME,c.TAG_PROPERTIES.CHARSET,c.TAG_PROPERTIES.HTTPEQUIV,c.TAG_PROPERTIES.PROPERTY,c.TAG_PROPERTIES.ITEM_PROP],e),noscriptTags:d(c.TAG_NAMES.NOSCRIPT,[c.TAG_PROPERTIES.INNER_HTML],e),onChangeClientState:T(e),scriptTags:d(c.TAG_NAMES.SCRIPT,[c.TAG_PROPERTIES.SRC,c.TAG_PROPERTIES.INNER_HTML],e),styleTags:d(c.TAG_NAMES.STYLE,[c.TAG_PROPERTIES.CSS_TEXT],e),title:f(e),titleAttributes:E(c.ATTRIBUTE_NAMES.TITLE,e)}},t.requestAnimationFrame=y,t.warn=b},3524:function(e,t,r){"use strict";function n(e){return e&&"object"==typeof e&&"default"in e?e.default:e}var o=r(7294),a=n(o),i=n(r(8875)),c=n(r(6774));e.exports=function(e,t,r){if("function"!=typeof e)throw new Error("Expected reducePropsToState to be a function.");if("function"!=typeof t)throw new Error("Expected handleStateChangeOnClient to be a function.");if(void 0!==r&&"function"!=typeof r)throw new Error("Expected mapStateOnServer to either be undefined or a function.");return function(n){if("function"!=typeof n)throw new Error("Expected WrappedComponent to be a React component.");var l=[],u=void 0;function s(){u=e(l.map((function(e){return e.props}))),f.canUseDOM?t(u):r&&(u=r(u))}var f=function(e){function t(){return function(e,t){if(!(e instanceof t))throw new TypeError("Cannot call a class as a function")}(this,t),function(e,t){if(!e)throw new ReferenceError("this hasn't been initialised - super() hasn't been called");return!t||"object"!=typeof t&&"function"!=typeof t?e:t}(this,e.apply(this,arguments))}return function(e,t){if("function"!=typeof t&&null!==t)throw new TypeError("Super expression must either be null or a function, not "+typeof t);e.prototype=Object.create(t&&t.prototype,{constructor:{value:e,enumerable:!1,writable:!0,configurable:!0}}),t&&(Object.setPrototypeOf?Object.setPrototypeOf(e,t):e.__proto__=t)}(t,e),t.peek=function(){return u},t.rewind=function(){if(t.canUseDOM)throw new Error("You may only call rewind() on the server. Call peek() to read the current state.");var e=u;return u=void 0,l=[],e},t.prototype.shouldComponentUpdate=function(e){return!c(e,this.props)},t.prototype.componentWillMount=function(){l.push(this),s()},t.prototype.componentDidUpdate=function(){s()},t.prototype.componentWillUnmount=function(){var e=l.indexOf(this);l.splice(e,1),s()},t.prototype.render=function(){return a.createElement(n,this.props)},t}(o.Component);return f.displayName="SideEffect("+function(e){return e.displayName||e.name||"Component"}(n)+")",f.canUseDOM=i.canUseDOM,f}}},6774:function(e){e.exports=function(e,t,r,n){var o=r?r.call(n,e,t):void 0;if(void 0!==o)return!!o;if(e===t)return!0;if("object"!=typeof e||!e||"object"!=typeof t||!t)return!1;var a=Object.keys(e),i=Object.keys(t);if(a.length!==i.length)return!1;for(var c=Object.prototype.hasOwnProperty.bind(t),l=0;l<a.length;l++){var u=a[l];if(!c(u))return!1;var s=e[u],f=t[u];if(!1===(o=r?r.call(n,s,f,u):void 0)||void 0===o&&s!==f)return!1}return!0}}}]);
//# sourceMappingURL=commons-7560831982a5164f9789.js.map