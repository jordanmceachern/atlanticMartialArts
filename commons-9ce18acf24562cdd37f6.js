/*! For license information please see commons-9ce18acf24562cdd37f6.js.LICENSE.txt */
(self.webpackChunkgatsby_starter_hello_world=self.webpackChunkgatsby_starter_hello_world||[]).push([[351],{8875:function(e,t,r){var n;!function(){"use strict";var a=!("undefined"==typeof window||!window.document||!window.document.createElement),o={canUseDOM:a,canUseWorkers:"undefined"!=typeof Worker,canUseEventListeners:a&&!(!window.addEventListener&&!window.attachEvent),canUseViewport:a&&!!window.screen};void 0===(n=function(){return o}.call(t,r,t,e))||(e.exports=n)}()},7768:function(e,t,r){"use strict";r.d(t,{Z:function(){return m}});var n=r(7294),a=r(4578);let o=function(e){function t(){for(var t,r=arguments.length,n=new Array(r),a=0;a<r;a++)n[a]=arguments[a];return(t=e.call.apply(e,[this].concat(n))||this).state={hasError:!1,error:void 0,errorInfo:void 0},t}(0,a.Z)(t,e),t.getDerivedStateFromError=function(e){return{hasError:!0}};var r=t.prototype;return r.componentDidCatch=function(e,t){console.error(e,t),this.setState({error:e,errorInfo:t})},r.render=function(){return this.state.hasError?n.createElement("div",{className:"h-screen w-screen flex flex-col items-center justify-center"},n.createElement("div",{className:"z-0 absolute inset-0 opacity-10",style:{background:"center / cover no-repeat url(https://res.cloudinary.com/dtweazqf2/image/upload/q_auto,f_auto/v1694115864/AMAA_mpjsg0.gif)"}}),n.createElement("div",{className:"flex flex-col items-center max-w-[400px]"},n.createElement("title",null,"Error!"),n.createElement("h1",{className:"mb-2 text-xl"},"Error!"),n.createElement("div",{className:"flex flex-col items-start text-md"},n.createElement("p",{className:"mb-1"},"Oops! Sorry, something went wrong."),n.createElement("p",{className:"mb-1"},"Please take a moment to let us know what happened."),n.createElement("p",{className:"mb-2"},"Technical information about the error has also been captured and will be pasted into your message draft."),n.createElement("a",{className:"z-10 underline cursor-pointer hover:no-underline text-base w-full flex justify-center",href:"mailto:jormceachern@gmail.com?subject=AMAA%20site%20error&body="+this.state.error+":%20"+this.state.errorInfo,target:"_top"},"Email error report to the site developer")))):this.props.children},t}(n.Component);var i=o,l=r(1883);var c=e=>{let{currentRoutename:t}=e;return n.createElement("div",{className:"z-20 flex flex-wrap justify-self-start justify-start sm:justify-center sm:flex-nowrap shadow-black sm:shadow border-black border-b bg-white"},n.createElement("input",{className:"mobile-menu hidden",type:"checkbox",id:"mobile-menu"}),n.createElement("div",{className:"w-full flex items-center sm:hidden"},n.createElement("label",{className:"w-10 h-full flex flex-col justify-self-start border-r border-black/20",htmlFor:"mobile-menu","aria-label":"toggle mobile navigation"},n.createElement("hr",{className:"flex flex-grow bg-black h-[2px] mt-2 mb-1 mx-2 rounded-sm"}),n.createElement("hr",{className:"flex flex-grow bg-black h-[2px] my-1 mx-2 rounded-sm"}),n.createElement("hr",{className:"flex flex-grow bg-black h-[2px] mt-1 mb-2 mx-2 rounded-sm"})),n.createElement("div",{className:"py-auto flex flex-grow justify-center"},n.createElement("div",{"aria-label":""===t?"home page":t+" page",className:(""===t?"h-4 w-16 ":"")+"-ml-10",style:""===t?{background:"center / cover no-repeat url(https://res.cloudinary.com/dtweazqf2/image/upload/q_auto,f_auto/v1694115864/AMAA_mpjsg0.gif)"}:void 0},n.createElement("span",{className:"uppercase"},t)))),n.createElement("nav",{className:"max-w-3xl flex flex-col sm:flex-row w-full","aria-label":"main menu"},n.createElement("div",{className:"nav-items -mt-[100vh] opacity-0 sm:opacity-100 sm:mt-0 sm:flex sm:grow"},n.createElement("div",{className:"fixed mt-px sm:mt-0 bg-white sm:bg-transparent sm:static z-10 grow flex-col sm:z-0 sm:flex sm:flex-row flex-nowrap sm:justify-evenly md:justify-between w-full"},n.createElement(l.rU,{to:"/",className:(""===t?"bg-blue/40 ":"")+" px-2 py-1 text-sm sm:text-base w-full sm:w-auto border-black border-b sm:border-0 flex justify-center items-center active:bg-black/30 hover:bg-black/20"},n.createElement("div",{"aria-label":"logo",className:"h-4 w-16 hidden sm:inline",style:{background:"center / cover no-repeat url(https://res.cloudinary.com/dtweazqf2/image/upload/q_auto,f_auto/v1694115864/AMAA_mpjsg0.gif)"}}),n.createElement("span",{className:"inline sm:hidden"},"HOME PAGE")),n.createElement(l.rU,{to:"/information",className:("information"===t?"bg-blue/40 ":"")+"px-2 py-1 text-sm sm:text-base w-full sm:w-auto border-black border-b sm:border-0 flex justify-center items-center active:bg-black/30 hover:bg-black/20"},"INFORMATION"),n.createElement(l.rU,{to:"/hapkido",className:("hapkido"===t?"bg-blue/40 ":"")+"px-2 py-1 text-sm sm:text-base w-full sm:w-auto border-black border-b sm:border-0 flex justify-center items-center active:bg-black/30 hover:bg-black/20"},"HAP KI DO"),n.createElement(l.rU,{to:"/taekwondo",className:("taekwondo"===t?"bg-blue/40 ":"")+"px-2 py-1 text-sm sm:text-base w-full sm:w-auto border-black border-b sm:border-0 flex justify-center items-center active:bg-black/30 hover:bg-black/20"},"TAE KWON DO"),n.createElement(l.rU,{to:"/kickboxing",className:("kickboxing"===t?"bg-blue/40 ":"")+"px-2 py-1 text-sm sm:text-base w-full sm:w-auto border-black border-b sm:border-0 flex justify-center items-center active:bg-black/30 hover:bg-black/20"},"KICK-BOXING")))))};var s=()=>n.createElement("div",{className:"z-20 bg-slate shadow shadow-black w-full py-2 flex justify-self-end justify-center fixed"},n.createElement("div",{className:"w-full flex justify-center items-center max-w-3xl"},n.createElement("div",{"aria-label":"taekwondo logo",className:"flex h-14 w-14 sm:h-20 sm:w-20 mx-2",style:{background:"center / cover no-repeat url(https://res.cloudinary.com/dtweazqf2/image/upload/q_auto,f_auto/v1694116623/taekwondo_nly8vx.gif)"}}),n.createElement("div",{"aria-label":"AMMA logo",className:"flex h-14 w-14 sm:h-20 sm:w-20 mx-2",style:{background:"center / cover no-repeat url(https://res.cloudinary.com/dtweazqf2/image/upload/q_auto,f_auto/v1694115864/AMAA_mpjsg0.gif)"}}),n.createElement("div",{className:"flex mb-1 flex-col items-center text-center text-white text-sm sm:text-base max-w-3xl whitespace-nowrap"},"General Inquiries",n.createElement("div",{className:"flex flex-col justify-center"},n.createElement("a",{className:"px-2 my-1 flex justify-center text-white text-xs sm:text-sm underline hover:no-underline hover:bg-white/20",href:"mailto:maritimemartialarts@hotmail.com",target:"_top"},"Email Us"),n.createElement("a",{className:"px-2 flex justify-center text-white text-xs sm:text-sm underline hover:no-underline hover:bg-white/20",href:"tel:506-440-3883"},"Phone"))),n.createElement("div",{"aria-label":"MMAA logo",className:"flex h-14 w-14 sm:h-20 sm:w-20 mx-2",style:{background:"center / cover no-repeat url(https://res.cloudinary.com/dtweazqf2/image/upload/q_auto,f_auto/v1694116502/MMAA_l16096.gif)"}}),n.createElement("div",{"aria-label":"hapkido logo",className:"flex h-14 w-14 sm:h-20 sm:w-20 mx-2",style:{background:"center / cover no-repeat url(https://res.cloudinary.com/dtweazqf2/image/upload/q_auto,f_auto/v1694116614/hapkido_qetodw.gif)"}}))),u=r(5482);var f=()=>n.createElement(u.ql,null,n.createElement("meta",{charSet:"utf-8"}),n.createElement("title",null,"Atlantic Martial Arts Academy"),n.createElement("meta",{name:"description",content:"Atlantic Martial Arts formally Maritime Martial Arts Academy are located at 28 Saunders Street, Fredericton, New Brunswick. The Cultural Centre Gym (Old YMCA by exhibition ground)."}),n.createElement("link",{rel:"canonical",href:{}.SITE_URL}),n.createElement("link",{href:"/global.css",rel:"stylesheet"}));var m=e=>{let{children:t,currentPathname:r}=e;const a=r.slice(1,r.length-1);return n.createElement(i,null,n.createElement("div",{className:"relative flex flex-col h-screen"},n.createElement(f,null),n.createElement(c,{currentRoutename:a}),n.createElement("div",{className:"z-0 absolute inset-0 opacity-10",style:{background:"center / cover no-repeat url(https://res.cloudinary.com/dtweazqf2/image/upload/q_auto,f_auto/v1694115864/AMAA_mpjsg0.gif)"}}),n.createElement("div",{className:"main-content z-10 flex flex-col justify-start grow overflow-y-scroll"},t),n.createElement(s,null)))}},9590:function(e){"use strict";var t=Array.isArray,r=Object.keys,n=Object.prototype.hasOwnProperty,a="undefined"!=typeof Element;function o(e,i){if(e===i)return!0;if(e&&i&&"object"==typeof e&&"object"==typeof i){var l,c,s,u=t(e),f=t(i);if(u&&f){if((c=e.length)!=i.length)return!1;for(l=c;0!=l--;)if(!o(e[l],i[l]))return!1;return!0}if(u!=f)return!1;var m=e instanceof Date,d=i instanceof Date;if(m!=d)return!1;if(m&&d)return e.getTime()==i.getTime();var T=e instanceof RegExp,p=i instanceof RegExp;if(T!=p)return!1;if(T&&p)return e.toString()==i.toString();var E=r(e);if((c=E.length)!==r(i).length)return!1;for(l=c;0!=l--;)if(!n.call(i,E[l]))return!1;if(a&&e instanceof Element&&i instanceof Element)return e===i;for(l=c;0!=l--;)if(!("_owner"===(s=E[l])&&e.$$typeof||o(e[s],i[s])))return!1;return!0}return e!=e&&i!=i}e.exports=function(e,t){try{return o(e,t)}catch(r){if(r.message&&r.message.match(/stack|recursion/i)||-2146828260===r.number)return console.warn("Warning: react-fast-compare does not handle circular references.",r.name,r.message),!1;throw r}}},5482:function(e,t,r){t.ql=void 0;var n=Object.assign||function(e){for(var t=1;t<arguments.length;t++){var r=arguments[t];for(var n in r)Object.prototype.hasOwnProperty.call(r,n)&&(e[n]=r[n])}return e},a=function(){function e(e,t){for(var r=0;r<t.length;r++){var n=t[r];n.enumerable=n.enumerable||!1,n.configurable=!0,"value"in n&&(n.writable=!0),Object.defineProperty(e,n.key,n)}}return function(t,r,n){return r&&e(t.prototype,r),n&&e(t,n),t}}(),o=f(r(7294)),i=f(r(5697)),l=f(r(3524)),c=f(r(9590)),s=r(2994),u=r(4455);function f(e){return e&&e.__esModule?e:{default:e}}function m(e,t){var r={};for(var n in e)t.indexOf(n)>=0||Object.prototype.hasOwnProperty.call(e,n)&&(r[n]=e[n]);return r}var d,T,p,E=(0,l.default)(s.reducePropsToState,s.handleClientStateChange,s.mapStateOnServer)((function(){return null})),A=(d=E,p=T=function(e){function t(){return function(e,t){if(!(e instanceof t))throw new TypeError("Cannot call a class as a function")}(this,t),function(e,t){if(!e)throw new ReferenceError("this hasn't been initialised - super() hasn't been called");return!t||"object"!=typeof t&&"function"!=typeof t?e:t}(this,e.apply(this,arguments))}return function(e,t){if("function"!=typeof t&&null!==t)throw new TypeError("Super expression must either be null or a function, not "+typeof t);e.prototype=Object.create(t&&t.prototype,{constructor:{value:e,enumerable:!1,writable:!0,configurable:!0}}),t&&(Object.setPrototypeOf?Object.setPrototypeOf(e,t):e.__proto__=t)}(t,e),t.prototype.shouldComponentUpdate=function(e){return!(0,c.default)(this.props,e)},t.prototype.mapNestedChildrenToProps=function(e,t){if(!t)return null;switch(e.type){case u.TAG_NAMES.SCRIPT:case u.TAG_NAMES.NOSCRIPT:return{innerHTML:t};case u.TAG_NAMES.STYLE:return{cssText:t}}throw new Error("<"+e.type+" /> elements are self-closing and can not contain children. Refer to our API for more information.")},t.prototype.flattenArrayTypeChildren=function(e){var t,r=e.child,a=e.arrayTypeChildren,o=e.newChildProps,i=e.nestedChildren;return n({},a,((t={})[r.type]=[].concat(a[r.type]||[],[n({},o,this.mapNestedChildrenToProps(r,i))]),t))},t.prototype.mapObjectTypeChildren=function(e){var t,r,a=e.child,o=e.newProps,i=e.newChildProps,l=e.nestedChildren;switch(a.type){case u.TAG_NAMES.TITLE:return n({},o,((t={})[a.type]=l,t.titleAttributes=n({},i),t));case u.TAG_NAMES.BODY:return n({},o,{bodyAttributes:n({},i)});case u.TAG_NAMES.HTML:return n({},o,{htmlAttributes:n({},i)})}return n({},o,((r={})[a.type]=n({},i),r))},t.prototype.mapArrayTypeChildrenToProps=function(e,t){var r=n({},t);return Object.keys(e).forEach((function(t){var a;r=n({},r,((a={})[t]=e[t],a))})),r},t.prototype.warnOnInvalidChildren=function(e,t){return!0},t.prototype.mapChildrenToProps=function(e,t){var r=this,n={};return o.default.Children.forEach(e,(function(e){if(e&&e.props){var a=e.props,o=a.children,i=m(a,["children"]),l=(0,s.convertReactPropstoHtmlAttributes)(i);switch(r.warnOnInvalidChildren(e,o),e.type){case u.TAG_NAMES.LINK:case u.TAG_NAMES.META:case u.TAG_NAMES.NOSCRIPT:case u.TAG_NAMES.SCRIPT:case u.TAG_NAMES.STYLE:n=r.flattenArrayTypeChildren({child:e,arrayTypeChildren:n,newChildProps:l,nestedChildren:o});break;default:t=r.mapObjectTypeChildren({child:e,newProps:t,newChildProps:l,nestedChildren:o})}}})),t=this.mapArrayTypeChildrenToProps(n,t)},t.prototype.render=function(){var e=this.props,t=e.children,r=m(e,["children"]),a=n({},r);return t&&(a=this.mapChildrenToProps(t,a)),o.default.createElement(d,a)},a(t,null,[{key:"canUseDOM",set:function(e){d.canUseDOM=e}}]),t}(o.default.Component),T.propTypes={base:i.default.object,bodyAttributes:i.default.object,children:i.default.oneOfType([i.default.arrayOf(i.default.node),i.default.node]),defaultTitle:i.default.string,defer:i.default.bool,encodeSpecialCharacters:i.default.bool,htmlAttributes:i.default.object,link:i.default.arrayOf(i.default.object),meta:i.default.arrayOf(i.default.object),noscript:i.default.arrayOf(i.default.object),onChangeClientState:i.default.func,script:i.default.arrayOf(i.default.object),style:i.default.arrayOf(i.default.object),title:i.default.string,titleAttributes:i.default.object,titleTemplate:i.default.string},T.defaultProps={defer:!0,encodeSpecialCharacters:!0},T.peek=d.peek,T.rewind=function(){var e=d.rewind();return e||(e=(0,s.mapStateOnServer)({baseTag:[],bodyAttributes:{},encodeSpecialCharacters:!0,htmlAttributes:{},linkTags:[],metaTags:[],noscriptTags:[],scriptTags:[],styleTags:[],title:"",titleAttributes:{}})),e},p);A.renderStatic=A.rewind,t.ql=A},4455:function(e,t){t.__esModule=!0;t.ATTRIBUTE_NAMES={BODY:"bodyAttributes",HTML:"htmlAttributes",TITLE:"titleAttributes"};var r=t.TAG_NAMES={BASE:"base",BODY:"body",HEAD:"head",HTML:"html",LINK:"link",META:"meta",NOSCRIPT:"noscript",SCRIPT:"script",STYLE:"style",TITLE:"title"},n=(t.VALID_TAG_NAMES=Object.keys(r).map((function(e){return r[e]})),t.TAG_PROPERTIES={CHARSET:"charset",CSS_TEXT:"cssText",HREF:"href",HTTPEQUIV:"http-equiv",INNER_HTML:"innerHTML",ITEM_PROP:"itemprop",NAME:"name",PROPERTY:"property",REL:"rel",SRC:"src"},t.REACT_TAG_MAP={accesskey:"accessKey",charset:"charSet",class:"className",contenteditable:"contentEditable",contextmenu:"contextMenu","http-equiv":"httpEquiv",itemprop:"itemProp",tabindex:"tabIndex"});t.HELMET_PROPS={DEFAULT_TITLE:"defaultTitle",DEFER:"defer",ENCODE_SPECIAL_CHARACTERS:"encodeSpecialCharacters",ON_CHANGE_CLIENT_STATE:"onChangeClientState",TITLE_TEMPLATE:"titleTemplate"},t.HTML_TAG_MAP=Object.keys(n).reduce((function(e,t){return e[n[t]]=t,e}),{}),t.SELF_CLOSING_TAGS=[r.NOSCRIPT,r.SCRIPT,r.STYLE],t.HELMET_ATTRIBUTE="data-react-helmet"},2994:function(e,t,r){t.__esModule=!0,t.warn=t.requestAnimationFrame=t.reducePropsToState=t.mapStateOnServer=t.handleClientStateChange=t.convertReactPropstoHtmlAttributes=void 0;var n="function"==typeof Symbol&&"symbol"==typeof Symbol.iterator?function(e){return typeof e}:function(e){return e&&"function"==typeof Symbol&&e.constructor===Symbol&&e!==Symbol.prototype?"symbol":typeof e},a=Object.assign||function(e){for(var t=1;t<arguments.length;t++){var r=arguments[t];for(var n in r)Object.prototype.hasOwnProperty.call(r,n)&&(e[n]=r[n])}return e},o=c(r(7294)),i=c(r(4852)),l=r(4455);function c(e){return e&&e.__esModule?e:{default:e}}var s,u=function(e){return!1===(!(arguments.length>1&&void 0!==arguments[1])||arguments[1])?String(e):String(e).replace(/&/g,"&amp;").replace(/</g,"&lt;").replace(/>/g,"&gt;").replace(/"/g,"&quot;").replace(/'/g,"&#x27;")},f=function(e){var t=E(e,l.TAG_NAMES.TITLE),r=E(e,l.HELMET_PROPS.TITLE_TEMPLATE);if(r&&t)return r.replace(/%s/g,(function(){return t}));var n=E(e,l.HELMET_PROPS.DEFAULT_TITLE);return t||n||void 0},m=function(e){return E(e,l.HELMET_PROPS.ON_CHANGE_CLIENT_STATE)||function(){}},d=function(e,t){return t.filter((function(t){return void 0!==t[e]})).map((function(t){return t[e]})).reduce((function(e,t){return a({},e,t)}),{})},T=function(e,t){return t.filter((function(e){return void 0!==e[l.TAG_NAMES.BASE]})).map((function(e){return e[l.TAG_NAMES.BASE]})).reverse().reduce((function(t,r){if(!t.length)for(var n=Object.keys(r),a=0;a<n.length;a++){var o=n[a].toLowerCase();if(-1!==e.indexOf(o)&&r[o])return t.concat(r)}return t}),[])},p=function(e,t,r){var a={};return r.filter((function(t){return!!Array.isArray(t[e])||(void 0!==t[e]&&v("Helmet: "+e+' should be of type "Array". Instead found type "'+n(t[e])+'"'),!1)})).map((function(t){return t[e]})).reverse().reduce((function(e,r){var n={};r.filter((function(e){for(var r=void 0,o=Object.keys(e),i=0;i<o.length;i++){var c=o[i],s=c.toLowerCase();-1===t.indexOf(s)||r===l.TAG_PROPERTIES.REL&&"canonical"===e[r].toLowerCase()||s===l.TAG_PROPERTIES.REL&&"stylesheet"===e[s].toLowerCase()||(r=s),-1===t.indexOf(c)||c!==l.TAG_PROPERTIES.INNER_HTML&&c!==l.TAG_PROPERTIES.CSS_TEXT&&c!==l.TAG_PROPERTIES.ITEM_PROP||(r=c)}if(!r||!e[r])return!1;var u=e[r].toLowerCase();return a[r]||(a[r]={}),n[r]||(n[r]={}),!a[r][u]&&(n[r][u]=!0,!0)})).reverse().forEach((function(t){return e.push(t)}));for(var o=Object.keys(n),c=0;c<o.length;c++){var s=o[c],u=(0,i.default)({},a[s],n[s]);a[s]=u}return e}),[]).reverse()},E=function(e,t){for(var r=e.length-1;r>=0;r--){var n=e[r];if(n.hasOwnProperty(t))return n[t]}return null},A=(s=Date.now(),function(e){var t=Date.now();t-s>16?(s=t,e(t)):setTimeout((function(){A(e)}),0)}),h=function(e){return clearTimeout(e)},b="undefined"!=typeof window?window.requestAnimationFrame||window.webkitRequestAnimationFrame||window.mozRequestAnimationFrame||A:r.g.requestAnimationFrame||A,y="undefined"!=typeof window?window.cancelAnimationFrame||window.webkitCancelAnimationFrame||window.mozCancelAnimationFrame||h:r.g.cancelAnimationFrame||h,v=function(e){return console&&"function"==typeof console.warn&&console.warn(e)},g=null,S=function(e,t){var r=e.baseTag,n=e.bodyAttributes,a=e.htmlAttributes,o=e.linkTags,i=e.metaTags,c=e.noscriptTags,s=e.onChangeClientState,u=e.scriptTags,f=e.styleTags,m=e.title,d=e.titleAttributes;x(l.TAG_NAMES.BODY,n),x(l.TAG_NAMES.HTML,a),w(m,d);var T={baseTag:N(l.TAG_NAMES.BASE,r),linkTags:N(l.TAG_NAMES.LINK,o),metaTags:N(l.TAG_NAMES.META,i),noscriptTags:N(l.TAG_NAMES.NOSCRIPT,c),scriptTags:N(l.TAG_NAMES.SCRIPT,u),styleTags:N(l.TAG_NAMES.STYLE,f)},p={},E={};Object.keys(T).forEach((function(e){var t=T[e],r=t.newTags,n=t.oldTags;r.length&&(p[e]=r),n.length&&(E[e]=T[e].oldTags)})),t&&t(),s(e,p,E)},_=function(e){return Array.isArray(e)?e.join(""):e},w=function(e,t){void 0!==e&&document.title!==e&&(document.title=_(e)),x(l.TAG_NAMES.TITLE,t)},x=function(e,t){var r=document.getElementsByTagName(e)[0];if(r){for(var n=r.getAttribute(l.HELMET_ATTRIBUTE),a=n?n.split(","):[],o=[].concat(a),i=Object.keys(t),c=0;c<i.length;c++){var s=i[c],u=t[s]||"";r.getAttribute(s)!==u&&r.setAttribute(s,u),-1===a.indexOf(s)&&a.push(s);var f=o.indexOf(s);-1!==f&&o.splice(f,1)}for(var m=o.length-1;m>=0;m--)r.removeAttribute(o[m]);a.length===o.length?r.removeAttribute(l.HELMET_ATTRIBUTE):r.getAttribute(l.HELMET_ATTRIBUTE)!==i.join(",")&&r.setAttribute(l.HELMET_ATTRIBUTE,i.join(","))}},N=function(e,t){var r=document.head||document.querySelector(l.TAG_NAMES.HEAD),n=r.querySelectorAll(e+"["+l.HELMET_ATTRIBUTE+"]"),a=Array.prototype.slice.call(n),o=[],i=void 0;return t&&t.length&&t.forEach((function(t){var r=document.createElement(e);for(var n in t)if(t.hasOwnProperty(n))if(n===l.TAG_PROPERTIES.INNER_HTML)r.innerHTML=t.innerHTML;else if(n===l.TAG_PROPERTIES.CSS_TEXT)r.styleSheet?r.styleSheet.cssText=t.cssText:r.appendChild(document.createTextNode(t.cssText));else{var c=void 0===t[n]?"":t[n];r.setAttribute(n,c)}r.setAttribute(l.HELMET_ATTRIBUTE,"true"),a.some((function(e,t){return i=t,r.isEqualNode(e)}))?a.splice(i,1):o.push(r)})),a.forEach((function(e){return e.parentNode.removeChild(e)})),o.forEach((function(e){return r.appendChild(e)})),{oldTags:a,newTags:o}},M=function(e){return Object.keys(e).reduce((function(t,r){var n=void 0!==e[r]?r+'="'+e[r]+'"':""+r;return t?t+" "+n:n}),"")},O=function(e){var t=arguments.length>1&&void 0!==arguments[1]?arguments[1]:{};return Object.keys(e).reduce((function(t,r){return t[l.REACT_TAG_MAP[r]||r]=e[r],t}),t)},R=function(e,t,r){switch(e){case l.TAG_NAMES.TITLE:return{toComponent:function(){return e=t.title,r=t.titleAttributes,(n={key:e})[l.HELMET_ATTRIBUTE]=!0,a=O(r,n),[o.default.createElement(l.TAG_NAMES.TITLE,a,e)];var e,r,n,a},toString:function(){return function(e,t,r,n){var a=M(r),o=_(t);return a?"<"+e+" "+l.HELMET_ATTRIBUTE+'="true" '+a+">"+u(o,n)+"</"+e+">":"<"+e+" "+l.HELMET_ATTRIBUTE+'="true">'+u(o,n)+"</"+e+">"}(e,t.title,t.titleAttributes,r)}};case l.ATTRIBUTE_NAMES.BODY:case l.ATTRIBUTE_NAMES.HTML:return{toComponent:function(){return O(t)},toString:function(){return M(t)}};default:return{toComponent:function(){return function(e,t){return t.map((function(t,r){var n,a=((n={key:r})[l.HELMET_ATTRIBUTE]=!0,n);return Object.keys(t).forEach((function(e){var r=l.REACT_TAG_MAP[e]||e;if(r===l.TAG_PROPERTIES.INNER_HTML||r===l.TAG_PROPERTIES.CSS_TEXT){var n=t.innerHTML||t.cssText;a.dangerouslySetInnerHTML={__html:n}}else a[r]=t[e]})),o.default.createElement(e,a)}))}(e,t)},toString:function(){return function(e,t,r){return t.reduce((function(t,n){var a=Object.keys(n).filter((function(e){return!(e===l.TAG_PROPERTIES.INNER_HTML||e===l.TAG_PROPERTIES.CSS_TEXT)})).reduce((function(e,t){var a=void 0===n[t]?t:t+'="'+u(n[t],r)+'"';return e?e+" "+a:a}),""),o=n.innerHTML||n.cssText||"",i=-1===l.SELF_CLOSING_TAGS.indexOf(e);return t+"<"+e+" "+l.HELMET_ATTRIBUTE+'="true" '+a+(i?"/>":">"+o+"</"+e+">")}),"")}(e,t,r)}}}};t.convertReactPropstoHtmlAttributes=function(e){var t=arguments.length>1&&void 0!==arguments[1]?arguments[1]:{};return Object.keys(e).reduce((function(t,r){return t[l.HTML_TAG_MAP[r]||r]=e[r],t}),t)},t.handleClientStateChange=function(e){g&&y(g),e.defer?g=b((function(){S(e,(function(){g=null}))})):(S(e),g=null)},t.mapStateOnServer=function(e){var t=e.baseTag,r=e.bodyAttributes,n=e.encode,a=e.htmlAttributes,o=e.linkTags,i=e.metaTags,c=e.noscriptTags,s=e.scriptTags,u=e.styleTags,f=e.title,m=void 0===f?"":f,d=e.titleAttributes;return{base:R(l.TAG_NAMES.BASE,t,n),bodyAttributes:R(l.ATTRIBUTE_NAMES.BODY,r,n),htmlAttributes:R(l.ATTRIBUTE_NAMES.HTML,a,n),link:R(l.TAG_NAMES.LINK,o,n),meta:R(l.TAG_NAMES.META,i,n),noscript:R(l.TAG_NAMES.NOSCRIPT,c,n),script:R(l.TAG_NAMES.SCRIPT,s,n),style:R(l.TAG_NAMES.STYLE,u,n),title:R(l.TAG_NAMES.TITLE,{title:m,titleAttributes:d},n)}},t.reducePropsToState=function(e){return{baseTag:T([l.TAG_PROPERTIES.HREF],e),bodyAttributes:d(l.ATTRIBUTE_NAMES.BODY,e),defer:E(e,l.HELMET_PROPS.DEFER),encode:E(e,l.HELMET_PROPS.ENCODE_SPECIAL_CHARACTERS),htmlAttributes:d(l.ATTRIBUTE_NAMES.HTML,e),linkTags:p(l.TAG_NAMES.LINK,[l.TAG_PROPERTIES.REL,l.TAG_PROPERTIES.HREF],e),metaTags:p(l.TAG_NAMES.META,[l.TAG_PROPERTIES.NAME,l.TAG_PROPERTIES.CHARSET,l.TAG_PROPERTIES.HTTPEQUIV,l.TAG_PROPERTIES.PROPERTY,l.TAG_PROPERTIES.ITEM_PROP],e),noscriptTags:p(l.TAG_NAMES.NOSCRIPT,[l.TAG_PROPERTIES.INNER_HTML],e),onChangeClientState:m(e),scriptTags:p(l.TAG_NAMES.SCRIPT,[l.TAG_PROPERTIES.SRC,l.TAG_PROPERTIES.INNER_HTML],e),styleTags:p(l.TAG_NAMES.STYLE,[l.TAG_PROPERTIES.CSS_TEXT],e),title:f(e),titleAttributes:d(l.ATTRIBUTE_NAMES.TITLE,e)}},t.requestAnimationFrame=b,t.warn=v},3524:function(e,t,r){"use strict";function n(e){return e&&"object"==typeof e&&"default"in e?e.default:e}var a=r(7294),o=n(a),i=n(r(8875)),l=n(r(6774));e.exports=function(e,t,r){if("function"!=typeof e)throw new Error("Expected reducePropsToState to be a function.");if("function"!=typeof t)throw new Error("Expected handleStateChangeOnClient to be a function.");if(void 0!==r&&"function"!=typeof r)throw new Error("Expected mapStateOnServer to either be undefined or a function.");return function(n){if("function"!=typeof n)throw new Error("Expected WrappedComponent to be a React component.");var c=[],s=void 0;function u(){s=e(c.map((function(e){return e.props}))),f.canUseDOM?t(s):r&&(s=r(s))}var f=function(e){function t(){return function(e,t){if(!(e instanceof t))throw new TypeError("Cannot call a class as a function")}(this,t),function(e,t){if(!e)throw new ReferenceError("this hasn't been initialised - super() hasn't been called");return!t||"object"!=typeof t&&"function"!=typeof t?e:t}(this,e.apply(this,arguments))}return function(e,t){if("function"!=typeof t&&null!==t)throw new TypeError("Super expression must either be null or a function, not "+typeof t);e.prototype=Object.create(t&&t.prototype,{constructor:{value:e,enumerable:!1,writable:!0,configurable:!0}}),t&&(Object.setPrototypeOf?Object.setPrototypeOf(e,t):e.__proto__=t)}(t,e),t.peek=function(){return s},t.rewind=function(){if(t.canUseDOM)throw new Error("You may only call rewind() on the server. Call peek() to read the current state.");var e=s;return s=void 0,c=[],e},t.prototype.shouldComponentUpdate=function(e){return!l(e,this.props)},t.prototype.componentWillMount=function(){c.push(this),u()},t.prototype.componentDidUpdate=function(){u()},t.prototype.componentWillUnmount=function(){var e=c.indexOf(this);c.splice(e,1),u()},t.prototype.render=function(){return o.createElement(n,this.props)},t}(a.Component);return f.displayName="SideEffect("+function(e){return e.displayName||e.name||"Component"}(n)+")",f.canUseDOM=i.canUseDOM,f}}},6774:function(e){e.exports=function(e,t,r,n){var a=r?r.call(n,e,t):void 0;if(void 0!==a)return!!a;if(e===t)return!0;if("object"!=typeof e||!e||"object"!=typeof t||!t)return!1;var o=Object.keys(e),i=Object.keys(t);if(o.length!==i.length)return!1;for(var l=Object.prototype.hasOwnProperty.bind(t),c=0;c<o.length;c++){var s=o[c];if(!l(s))return!1;var u=e[s],f=t[s];if(!1===(a=r?r.call(n,u,f,s):void 0)||void 0===a&&u!==f)return!1}return!0}}}]);
//# sourceMappingURL=commons-9ce18acf24562cdd37f6.js.map