(self.webpackChunkgatsby_starter_hello_world=self.webpackChunkgatsby_starter_hello_world||[]).push([[3],{741:function(e){var t,n=Object.defineProperty,r=Object.getOwnPropertyDescriptor,a=Object.getOwnPropertyNames,l=Object.prototype.hasOwnProperty,s=(e,t,n)=>new Promise(((r,a)=>{var l=e=>{try{o(n.next(e))}catch(t){a(t)}},s=e=>{try{o(n.throw(e))}catch(t){a(t)}},o=e=>e.done?r(e.value):Promise.resolve(e.value).then(l,s);o((n=n.apply(e,t)).next())})),o={};((e,t)=>{for(var r in t)n(e,r,{get:t[r],enumerable:!0})})(o,{SubmissionError:()=>x,appendExtraData:()=>v,createClient:()=>O,getDefaultClient:()=>C,isSubmissionError:()=>p}),e.exports=(t=o,((e,t,s,o)=>{if(t&&"object"==typeof t||"function"==typeof t)for(let i of a(t))!l.call(e,i)&&i!==s&&n(e,i,{get:()=>t[i],enumerable:!(o=r(t,i))||o.enumerable});return e})(n({},"__esModule",{value:!0}),t));var i="ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz0123456789+/=",c=/^(?:[A-Za-z\d+\/]{4})*?(?:[A-Za-z\d+\/]{2}(?:==)?|[A-Za-z\d+\/]{3}=?)?$/;var m=()=>navigator.webdriver||!!document.documentElement.getAttribute(function(e){if(e=String(e).replace(/[\t\n\f\r ]+/g,""),!c.test(e))throw new TypeError("Failed to execute 'atob' on 'Window': The string to be decoded is not correctly encoded.");e+="==".slice(2-(3&e.length));for(var t,n,r,a="",l=0;l<e.length;)t=i.indexOf(e.charAt(l++))<<18|i.indexOf(e.charAt(l++))<<12|(n=i.indexOf(e.charAt(l++)))<<6|(r=i.indexOf(e.charAt(l++))),a+=64===n?String.fromCharCode(t>>16&255):64===r?String.fromCharCode(t>>16&255,t>>8&255):String.fromCharCode(t>>16&255,t>>8&255,255&t);return a}("d2ViZHJpdmVy"))||!!window.callPhantom||!!window._phantom,u=class{constructor(){this.loadedAt=Date.now(),this.webdriver=m()}data(){return{loadedAt:this.loadedAt,webdriver:this.webdriver}}},d=class{constructor(e){this.kind="success",this.next=e.next}};var f=class{constructor(e,t){this.paymentIntentClientSecret=e,this.resubmitKey=t,this.kind="stripePluginPending"}};function p(e){return"error"===e.kind}var x=class{constructor(...e){var t;this.kind="error",this.formErrors=[],this.fieldErrors=new Map;for(let n of e){if(!n.field){this.formErrors.push({code:n.code&&y(n.code)?n.code:"UNSPECIFIED",message:n.message});continue}let e=null!=(t=this.fieldErrors.get(n.field))?t:[];e.push({code:n.code&&E(n.code)?n.code:"UNSPECIFIED",message:n.message}),this.fieldErrors.set(n.field,e)}}getFormErrors(){return[...this.formErrors]}getFieldErrors(e){var t;return null!=(t=this.fieldErrors.get(e))?t:[]}getAllFieldErrors(){return Array.from(this.fieldErrors)}};function y(e){return e in h}var h={BLOCKED:"BLOCKED",EMPTY:"EMPTY",FILES_TOO_BIG:"FILES_TOO_BIG",FORM_NOT_FOUND:"FORM_NOT_FOUND",INACTIVE:"INACTIVE",NO_FILE_UPLOADS:"NO_FILE_UPLOADS",PROJECT_NOT_FOUND:"PROJECT_NOT_FOUND",TOO_MANY_FILES:"TOO_MANY_FILES"};function E(e){return e in w}var w={REQUIRED_FIELD_EMPTY:"REQUIRED_FIELD_EMPTY",REQUIRED_FIELD_MISSING:"REQUIRED_FIELD_MISSING",STRIPE_CLIENT_ERROR:"STRIPE_CLIENT_ERROR",STRIPE_SCA_ERROR:"STRIPE_SCA_ERROR",TYPE_EMAIL:"TYPE_EMAIL",TYPE_NUMERIC:"TYPE_NUMERIC",TYPE_TEXT:"TYPE_TEXT"};var g=e=>function(e){for(var t,n,r,a,l="",s=0,o=(e=String(e)).length%3;s<e.length;){if((n=e.charCodeAt(s++))>255||(r=e.charCodeAt(s++))>255||(a=e.charCodeAt(s++))>255)throw new TypeError("Failed to execute 'btoa' on 'Window': The string to be encoded contains characters outside of the Latin1 range.");l+=i.charAt((t=n<<16|r<<8|a)>>18&63)+i.charAt(t>>12&63)+i.charAt(t>>6&63)+i.charAt(63&t)}return o?l.slice(0,o-3)+"===".substring(o):l}(JSON.stringify(e)),b=e=>{let t="@formspree/core@3.0.1";return e?`${e} ${t}`:t};function v(e,t,n){e instanceof FormData?e.append(t,n):e[t]=n}var N=class{constructor(e={}){this.project=e.project,this.stripe=e.stripe,"undefined"!=typeof window&&(this.session=new u)}submitForm(e,t){return s(this,arguments,(function*(e,t,n={}){let r=n.endpoint||"https://formspree.io",a=this.project?`${r}/p/${this.project}/f/${e}`:`${r}/f/${e}`,l={Accept:"application/json","Formspree-Client":b(n.clientName)};function o(e){return s(this,null,(function*(){try{let t=yield(yield fetch(a,{method:"POST",mode:"cors",body:e instanceof FormData?e:JSON.stringify(e),headers:l})).json();if(function(e){return null!==e&&"object"==typeof e}(t)){if(function(e){return"errors"in e&&Array.isArray(e.errors)&&e.errors.every((e=>"string"==typeof e.message))||"error"in e&&"string"==typeof e.error}(t))return Array.isArray(t.errors)?new x(...t.errors):new x({message:t.error});if(function(e){if("stripe"in e&&"resubmitKey"in e&&"string"==typeof e.resubmitKey){let{stripe:t}=e;return"object"==typeof t&&null!=t&&"paymentIntentClientSecret"in t&&"string"==typeof t.paymentIntentClientSecret}return!1}(t))return new f(t.stripe.paymentIntentClientSecret,t.resubmitKey);if(function(e){return"next"in e&&"string"==typeof e.next}(t))return new d({next:t.next})}return new x({message:"Unexpected response format"})}catch(t){let e=t instanceof Error?t.message:`Unknown error while posting to Formspree: ${JSON.stringify(t)}`;return new x({message:e})}}))}if(this.session&&(l["Formspree-Session-Data"]=g(this.session.data())),t instanceof FormData||(l["Content-Type"]="application/json"),this.stripe&&n.createPaymentMethod){let e=yield n.createPaymentMethod();if(e.error)return new x({code:"STRIPE_CLIENT_ERROR",field:"paymentMethod",message:"Error creating payment method"});v(t,"paymentMethod",e.paymentMethod.id);let r=yield o(t);if("error"===r.kind)return r;if("stripePluginPending"===r.kind){let e=yield this.stripe.handleCardAction(r.paymentIntentClientSecret);if(e.error)return new x({code:"STRIPE_CLIENT_ERROR",field:"paymentMethod",message:"Stripe SCA error"});t instanceof FormData?t.delete("paymentMethod"):delete t.paymentMethod,v(t,"paymentIntent",e.paymentIntent.id),v(t,"resubmitKey",r.resubmitKey);let n=yield o(t);return S(n),n}return r}let i=yield o(t);return S(i),i}))}};function S(e){let{kind:t}=e;if("success"!==t&&"error"!==t)throw new Error(`Unexpected submission result (kind: ${t})`)}var j,O=e=>new N(e),C=()=>(j||(j=O()),j)},2926:function(e,t,n){!function(e,t){"use strict";function n(e,t){var n=Object.keys(e);if(Object.getOwnPropertySymbols){var r=Object.getOwnPropertySymbols(e);t&&(r=r.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),n.push.apply(n,r)}return n}function r(e){for(var t=1;t<arguments.length;t++){var r=null!=arguments[t]?arguments[t]:{};t%2?n(Object(r),!0).forEach((function(t){l(e,t,r[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(r)):n(Object(r)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(r,t))}))}return e}function a(e){return a="function"==typeof Symbol&&"symbol"==typeof Symbol.iterator?function(e){return typeof e}:function(e){return e&&"function"==typeof Symbol&&e.constructor===Symbol&&e!==Symbol.prototype?"symbol":typeof e},a(e)}function l(e,t,n){return t in e?Object.defineProperty(e,t,{value:n,enumerable:!0,configurable:!0,writable:!0}):e[t]=n,e}function s(e,t){return o(e)||i(e,t)||c(e,t)||u()}function o(e){if(Array.isArray(e))return e}function i(e,t){var n=e&&("undefined"!=typeof Symbol&&e[Symbol.iterator]||e["@@iterator"]);if(null!=n){var r,a,l=[],s=!0,o=!1;try{for(n=n.call(e);!(s=(r=n.next()).done)&&(l.push(r.value),!t||l.length!==t);s=!0);}catch(i){o=!0,a=i}finally{try{s||null==n.return||n.return()}finally{if(o)throw a}}return l}}function c(e,t){if(e){if("string"==typeof e)return m(e,t);var n=Object.prototype.toString.call(e).slice(8,-1);return"Object"===n&&e.constructor&&(n=e.constructor.name),"Map"===n||"Set"===n?Array.from(e):"Arguments"===n||/^(?:Ui|I)nt(?:8|16|32)(?:Clamped)?Array$/.test(n)?m(e,t):void 0}}function m(e,t){(null==t||t>e.length)&&(t=e.length);for(var n=0,r=new Array(t);n<t;n++)r[n]=e[n];return r}function u(){throw new TypeError("Invalid attempt to destructure non-iterable instance.\nIn order to be iterable, non-array objects must have a [Symbol.iterator]() method.")}function d(e,t){return e(t={exports:{}},t.exports),t.exports}t=t&&Object.prototype.hasOwnProperty.call(t,"default")?t.default:t;var f="SECRET_DO_NOT_PASS_THIS_OR_YOU_WILL_BE_FIRED";function p(){}function x(){}x.resetWarningCache=p;var y=function(){function e(e,t,n,r,a,l){if(l!==f){var s=new Error("Calling PropTypes validators directly is not supported by the `prop-types` package. Use PropTypes.checkPropTypes() to call them. Read more at http://fb.me/use-check-prop-types");throw s.name="Invariant Violation",s}}function t(){return e}e.isRequired=e;var n={array:e,bool:e,func:e,number:e,object:e,string:e,symbol:e,any:e,arrayOf:t,element:e,elementType:e,instanceOf:t,node:e,objectOf:t,oneOf:t,oneOfType:t,shape:t,exact:t,checkPropTypes:x,resetWarningCache:p};return n.PropTypes=n,n},h=d((function(e){e.exports=y()})),E=function(e){var n=t.useRef(e);return t.useEffect((function(){n.current=e}),[e]),n.current},w=function(e){return null!==e&&"object"===a(e)},g=function(e){return w(e)&&"function"==typeof e.then},b=function(e){return w(e)&&"function"==typeof e.elements&&"function"==typeof e.createToken&&"function"==typeof e.createPaymentMethod&&"function"==typeof e.confirmCardPayment},v="[object Object]",N=function e(t,n){if(!w(t)||!w(n))return t===n;var r=Array.isArray(t);if(r!==Array.isArray(n))return!1;var a=Object.prototype.toString.call(t)===v;if(a!==(Object.prototype.toString.call(n)===v))return!1;if(!a&&!r)return t===n;var l=Object.keys(t),s=Object.keys(n);if(l.length!==s.length)return!1;for(var o={},i=0;i<l.length;i+=1)o[l[i]]=!0;for(var c=0;c<s.length;c+=1)o[s[c]]=!0;var m=Object.keys(o);if(m.length!==l.length)return!1;var u=t,d=n,f=function(t){return e(u[t],d[t])};return m.every(f)},S=function(e,t,n){return w(e)?Object.keys(e).reduce((function(a,s){var o=!w(t)||!N(e[s],t[s]);return n.includes(s)?(o&&console.warn("Unsupported prop change: options.".concat(s," is not a mutable property.")),a):o?r(r({},a||{}),{},l({},s,e[s])):a}),null):null},j="Invalid prop `stripe` supplied to `Elements`. We recommend using the `loadStripe` utility from `@stripe/stripe-js`. See https://stripe.com/docs/stripe-js/react#elements-props-stripe for details.",O=function(e){if(null===e||b(e))return e;throw new Error(j)},C=function(e){if(g(e))return{tag:"async",stripePromise:Promise.resolve(e).then(O)};var t=O(e);return null===t?{tag:"empty"}:{tag:"sync",stripe:t}},_=t.createContext(null);_.displayName="ElementsContext";var A=function(e,t){if(!e)throw new Error("Could not find Elements context; You need to wrap the part of your app that ".concat(t," in an <Elements> provider."));return e},I=t.createContext(null);I.displayName="CartElementContext";var k=function(e,t){if(!e)throw new Error("Could not find Elements context; You need to wrap the part of your app that ".concat(t," in an <Elements> provider."));return e},P=function(e){var n=e.stripe,r=e.options,a=e.children,l=t.useMemo((function(){return C(n)}),[n]),o=s(t.useState(null),2),i=o[0],c=o[1],m=s(t.useState(null),2),u=m[0],d=m[1],f=s(t.useState((function(){return{stripe:"sync"===l.tag?l.stripe:null,elements:"sync"===l.tag?l.stripe.elements(r):null}})),2),p=f[0],x=f[1];t.useEffect((function(){var e=!0,t=function(e){x((function(t){return t.stripe?t:{stripe:e,elements:e.elements(r)}}))};return"async"!==l.tag||p.stripe?"sync"!==l.tag||p.stripe||t(l.stripe):l.stripePromise.then((function(n){n&&e&&t(n)})),function(){e=!1}}),[l,p,r]);var y=E(n);t.useEffect((function(){null!==y&&y!==n&&console.warn("Unsupported prop change on Elements: You cannot change the `stripe` prop after setting it.")}),[y,n]);var h=E(r);return t.useEffect((function(){if(p.elements){var e=S(r,h,["clientSecret","fonts"]);e&&p.elements.update(e)}}),[r,h,p.elements]),t.useEffect((function(){var e=p.stripe;e&&e._registerWrapper&&e.registerAppInfo&&(e._registerWrapper({name:"react-stripe-js",version:"1.16.5"}),e.registerAppInfo({name:"react-stripe-js",version:"1.16.5",url:"https://stripe.com/docs/stripe-js/react"}))}),[p.stripe]),t.createElement(_.Provider,{value:p},t.createElement(I.Provider,{value:{cart:i,setCart:c,cartState:u,setCartState:d}},a))};P.propTypes={stripe:h.any,options:h.object};var T=function(e){var n=t.useContext(_);return A(n,e)},R=function(e){var n=t.useContext(I);return k(n,e)},F=function(){return T("calls useElements()").elements},D=function(){return T("calls useStripe()").stripe},M=function(){return R("calls useCartElement()").cart},L=function(){return R("calls useCartElementState()").cartState},B=function(e){return(0,e.children)(T("mounts <ElementsConsumer>"))};B.propTypes={children:h.func.isRequired};var U=function(e,n,r){var a=!!r,l=t.useRef(r);t.useEffect((function(){l.current=r}),[r]),t.useEffect((function(){if(!a||!e)return function(){};var t=function(){l.current&&l.current.apply(l,arguments)};return e.on(n,t),function(){e.off(n,t)}}),[a,n,e,l])},q=function(e){return e.charAt(0).toUpperCase()+e.slice(1)},Y=function(e,n){var r="".concat(q(e),"Element"),a=n?function(e){T("mounts <".concat(r,">")),R("mounts <".concat(r,">"));var n=e.id,a=e.className;return t.createElement("div",{id:n,className:a})}:function(n){var a,l=n.id,o=n.className,i=n.options,c=void 0===i?{}:i,m=n.onBlur,u=n.onFocus,d=n.onReady,f=n.onChange,p=n.onEscape,x=n.onClick,y=n.onLoadError,h=n.onLoaderStart,w=n.onNetworksChange,g=n.onCheckout,b=n.onLineItemClick,v=n.onConfirm,N=n.onCancel,j=n.onShippingAddressChange,O=n.onShippingRateChange,C=T("mounts <".concat(r,">")).elements,_=s(t.useState(null),2),A=_[0],I=_[1],k=t.useRef(null),P=t.useRef(null),F=R("mounts <".concat(r,">")),D=F.setCart,M=F.setCartState;U(A,"blur",m),U(A,"focus",u),U(A,"escape",p),U(A,"click",x),U(A,"loaderror",y),U(A,"loaderstart",h),U(A,"networkschange",w),U(A,"lineitemclick",b),U(A,"confirm",v),U(A,"cancel",N),U(A,"shippingaddresschange",j),U(A,"shippingratechange",O),"cart"===e?a=function(e){M(e),d&&d(e)}:d&&(a="payButton"===e?d:function(){d(A)}),U(A,"ready",a),U(A,"change","cart"===e?function(e){M(e),f&&f(e)}:f),U(A,"checkout","cart"===e?function(e){M(e),g&&g(e)}:g),t.useLayoutEffect((function(){if(null===k.current&&C&&null!==P.current){var t=C.create(e,c);"cart"===e&&D&&D(t),k.current=t,I(t),t.mount(P.current)}}),[C,c,D]);var L=E(c);return t.useEffect((function(){if(k.current){var e=S(c,L,["paymentRequest"]);e&&k.current.update(e)}}),[c,L]),t.useLayoutEffect((function(){return function(){k.current&&(k.current.destroy(),k.current=null)}}),[]),t.createElement("div",{id:l,className:o,ref:P})};return a.propTypes={id:h.string,className:h.string,onChange:h.func,onBlur:h.func,onFocus:h.func,onReady:h.func,onEscape:h.func,onClick:h.func,onLoadError:h.func,onLoaderStart:h.func,onNetworksChange:h.func,onCheckout:h.func,onLineItemClick:h.func,onConfirm:h.func,onCancel:h.func,onShippingAddressChange:h.func,onShippingRateChange:h.func,options:h.object},a.displayName=r,a.__elementType=e,a},W="undefined"==typeof window,$=Y("auBankAccount",W),K=Y("card",W),z=Y("cardNumber",W),G=Y("cardExpiry",W),H=Y("cardCvc",W),J=Y("fpxBank",W),Q=Y("iban",W),V=Y("idealBank",W),X=Y("p24Bank",W),Z=Y("epsBank",W),ee=Y("payment",W),te=Y("payButton",W),ne=Y("paymentRequestButton",W),re=Y("linkAuthentication",W),ae=Y("address",W),le=Y("shippingAddress",W),se=Y("cart",W),oe=Y("paymentMethodMessaging",W),ie=Y("affirmMessage",W),ce=Y("afterpayClearpayMessage",W);e.AddressElement=ae,e.AffirmMessageElement=ie,e.AfterpayClearpayMessageElement=ce,e.AuBankAccountElement=$,e.CardCvcElement=H,e.CardElement=K,e.CardExpiryElement=G,e.CardNumberElement=z,e.CartElement=se,e.Elements=P,e.ElementsConsumer=B,e.EpsBankElement=Z,e.FpxBankElement=J,e.IbanElement=Q,e.IdealBankElement=V,e.LinkAuthenticationElement=re,e.P24BankElement=X,e.PayButtonElement=te,e.PaymentElement=ee,e.PaymentMethodMessagingElement=oe,e.PaymentRequestButtonElement=ne,e.ShippingAddressElement=le,e.useCartElement=M,e.useCartElementState=L,e.useElements=F,e.useStripe=D,Object.defineProperty(e,"__esModule",{value:!0})}(t,n(6540))},8009:function(e,t){"use strict";function n(e){return n="function"==typeof Symbol&&"symbol"==typeof Symbol.iterator?function(e){return typeof e}:function(e){return e&&"function"==typeof Symbol&&e.constructor===Symbol&&e!==Symbol.prototype?"symbol":typeof e},n(e)}var r,a="https://js.stripe.com/v3",l=/^https:\/\/js\.stripe\.com\/v3\/?(\?.*)?$/,s="loadStripe.setLoadParameters was called but an existing Stripe.js script already exists in the document; existing script parameters will be used",o=null,i=function(e){return null!==o||(o=new Promise((function(t,n){if("undefined"!=typeof window&&"undefined"!=typeof document)if(window.Stripe&&e&&console.warn(s),window.Stripe)t(window.Stripe);else try{var r=function(){for(var e=document.querySelectorAll('script[src^="'.concat(a,'"]')),t=0;t<e.length;t++){var n=e[t];if(l.test(n.src))return n}return null}();r&&e?console.warn(s):r||(r=function(e){var t=e&&!e.advancedFraudSignals?"?advancedFraudSignals=false":"",n=document.createElement("script");n.src="".concat(a).concat(t);var r=document.head||document.body;if(!r)throw new Error("Expected document.body not to be null. Stripe.js requires a <body> element.");return r.appendChild(n),n}(e)),r.addEventListener("load",(function(){window.Stripe?t(window.Stripe):n(new Error("Stripe.js not available"))})),r.addEventListener("error",(function(){n(new Error("Failed to load Stripe.js"))}))}catch(o){return void n(o)}else t(null)}))),o},c=function(e){var t="invalid load parameters; expected object of shape\n\n    {advancedFraudSignals: boolean}\n\nbut received\n\n    ".concat(JSON.stringify(e),"\n");if(null===e||"object"!==n(e))throw new Error(t);if(1===Object.keys(e).length&&"boolean"==typeof e.advancedFraudSignals)return e;throw new Error(t)},m=!1,u=function(){for(var e=arguments.length,t=new Array(e),n=0;n<e;n++)t[n]=arguments[n];m=!0;var a=Date.now();return i(r).then((function(e){return function(e,t,n){if(null===e)return null;var r=e.apply(void 0,t);return function(e,t){e&&e._registerWrapper&&e._registerWrapper({name:"stripe-js",version:"1.54.2",startTime:t})}(r,n),r}(e,t,a)}))};u.setLoadParameters=function(e){if(m&&r){var t=c(e);if(Object.keys(t).reduce((function(t,n){var a;return t&&e[n]===(null===(a=r)||void 0===a?void 0:a[n])}),!0))return}if(m)throw new Error("You cannot change load parameters after calling loadStripe");r=c(e)}},7458:function(e,t,n){n(8009)},4131:function(e,t,n){"use strict";n.d(t,{l:function(){return l}});var r=n(6540),a=n(3306);const l=e=>{let{backgroundImage:t,backgroundPosition:n,children:a,className:l}=e;return r.createElement("div",{className:"relative col-start-1 col-end-2 md:col-end-3 rounded-lg flex flex-col"+(l?" "+l:""),style:{background:(n||"top")+" / cover no-repeat "+(t?"url("+t+")":"black")}},r.createElement("div",{className:"flex flex-col grow w-full rounded-lg"},a))};t.A=e=>r.createElement(r.Suspense,{fallback:r.createElement(a.k,null)},r.createElement(l,e))},6946:function(e,t,n){"use strict";n.d(t,{IL:function(){return s}});var r=n(6540),a=n(3306);const l=e=>{let{isBannerWidth:t}=e;return r.createElement("div",{className:"flex flex-col h-full grow items-center justify-center rounded-lg",style:{background:"center / cover no-repeat url(https://res.cloudinary.com/dtweazqf2/image/upload/q_auto,f_auto/v1696165783/turny_kick_j5zrst.jpg)"}},r.createElement("ul",{"aria-label":"class schedule",className:"flex flex-col bg-black/50 w-full p-4 "+(t?"md:w-4/5 lg:w-3/4 xl:w-1/2 mx-16 sm:mx-0 rounded-none md:rounded-lg":"h-full pt-auto rounded-lg")+" items-start text-white"},r.createElement("h2",{className:"text-sm sm:text-md md:text-base w-full flex justify-center underline mb-1"},"SCHEDULE"),r.createElement("li",{className:"text-xs sm:text-sm md:text-md w-full justify-between flex flex-nowrap"},"TAE KWON DO ",r.createElement("div",{className:"ml-8 flex grow justify-end text-end"},"Mon/Wed/Fri: Kids (ages 5-12) 6-7pm / Adults 7:15-8:15pm")),r.createElement("li",{className:"text-xs sm:text-sm md:text-md w-full justify-between flex flex-nowrap"},"HAP KI DO ",r.createElement("div",{className:"ml-8 flex grow justify-end text-end"},"(ages 13+) Tues/Thu:  6-7:30pm")),r.createElement("li",{className:"text-xs sm:text-sm md:text-md w-full justify-between flex flex-nowrap"},"KICK BOXING ",r.createElement("div",{className:"ml-8 flex grow justify-end text-end"},"Mon/Wed/Fri: 8:30-9:30pm*")),r.createElement("li",{className:"text-xs sm:text-sm md:text-md w-full justify-between flex flex-nowrap"},"TODDLER'S CLASS ",r.createElement("div",{className:"ml-8 flex grow justify-end text-end"},"Sat: 11am-12pm*")),r.createElement("li",{className:"text-xs sm:text-sm md:text-md w-full justify-between flex flex-nowrap"},"WEAPONS TRAINING ",r.createElement("div",{className:"ml-8 flex grow justify-end text-end"},"Sat: 12:30pm-1:30pm*")),r.createElement("li",{className:"mt-1 text-xs sm:text-sm md:text-md w-full justify-end flex flex-nowrap"},"[subject to change]*")))},s=e=>r.createElement(r.Suspense,{fallback:r.createElement(a.k,null)},r.createElement(l,e)),o=()=>r.createElement("div",{className:"h-72 sm:h-96 bg-black rounded-lg flex justify-center w-full my-4 sm:my-16"},r.createElement("div",{className:"flex h-full w-full sm:w-3/4"},r.createElement(l,{isBannerWidth:!0})));t.Ay=()=>r.createElement(r.Suspense,{fallback:r.createElement(a.k,null)},r.createElement(o,null))},6961:function(e,t,n){"use strict";n.r(t),n.d(t,{default:function(){return w}});var r=n(6540),a=n(1206),l=n(6946),s=n(3306);const o=e=>{let{isBannerWidth:t}=e;return r.createElement("div",{className:"flex grow items-center justify-center rounded-lg",style:{background:"top / cover no-repeat url(https://res.cloudinary.com/dtweazqf2/image/upload/q_auto,f_auto/v1694976469/steve_sdad_mtrmurray_r949r1.jpg)"}},r.createElement("ul",{"aria-label":"class schedule",className:"flex flex-col bg-black/50 w-full px-4 py-4 "+(t?"md:w-4/5 lg:w-3/4 xl:w-1/2 mx-16 sm:mx-0":"")+" items-start rounded-lg text-white"},r.createElement("h2",{className:"text-sm sm:text-md md:text-base w-full flex justify-center underline mb-1"},"PRICING"),r.createElement("li",{className:"text-xs sm:text-sm md:text-md w-full justify-between flex flex-nowrap"},"FIRST MONTH OF TRAINING",r.createElement("div",{className:"ml-8 flex grow justify-end text-end"},"Half Price, reg. $92 /month, now $46")),r.createElement("li",{className:"text-xs sm:text-sm md:text-md w-full justify-between flex flex-nowrap"},r.createElement("div",{className:"ml-8 flex grow justify-end text-end"},"(new members only - until Jan. 31st, 2024)")),r.createElement("li",{className:"text-xs sm:text-sm md:text-md w-full justify-between flex flex-nowrap"},"FIRST ART ",r.createElement("div",{className:"ml-8 flex grow justify-end text-end"},"$92 /month")),r.createElement("li",{className:"text-xs sm:text-sm md:text-md w-full justify-between flex flex-nowrap"},"SECOND ART ",r.createElement("div",{className:"ml-8 flex grow justify-end text-end"},"$46 /month")),r.createElement("li",{className:"text-xs sm:text-sm md:text-md w-full justify-between flex flex-nowrap"},"THIRD ART ",r.createElement("div",{className:"ml-8 flex grow justify-end text-end"},"$46 /month")),r.createElement("li",{className:"text-xs sm:text-sm md:text-md w-full justify-between flex flex-nowrap"},"TODDLERS ",r.createElement("div",{className:"ml-8 flex grow justify-end text-end"},"$40 /month or")),r.createElement("li",{className:"text-xs sm:text-sm md:text-md w-full justify-between flex flex-nowrap"},r.createElement("div",{className:"ml-8 flex grow justify-end text-end"},"$280 for October 7, 2023 - June 30, 2024")),r.createElement("li",{className:"text-xs sm:text-sm md:text-md w-full justify-between flex flex-nowrap"},"WEAPONS",r.createElement("div",{className:"ml-8 flex grow justify-end text-end"},"$15 /class or $40 /month")),r.createElement("li",{className:"my-1 text-xs sm:text-sm md:text-md w-full justify-start flex flex-nowrap"},"Family Discount"),r.createElement("li",{className:"text-xs sm:text-sm md:text-md w-full justify-between flex flex-nowrap"},"1st Family Member",r.createElement("div",{className:"ml-8 flex grow justify-end text-end"},"Full Price")),r.createElement("li",{className:"text-xs sm:text-sm md:text-md w-full justify-between flex flex-nowrap"},"2nd Family Member",r.createElement("div",{className:"ml-8 flex grow justify-end text-end"},"Half Price")),r.createElement("li",{className:"text-xs sm:text-sm md:text-md w-full justify-between flex flex-nowrap"},"3rd Family Member",r.createElement("div",{className:"ml-8 flex grow justify-end text-end"},"Half Price")),r.createElement("li",{className:"text-xs sm:text-sm md:text-md w-full justify-between flex flex-nowrap"},"4th+",r.createElement("div",{className:"ml-8 flex grow justify-end text-end"},"Free")),r.createElement("li",{className:"my-1 text-xs sm:text-sm md:text-md w-full justify-start flex flex-nowrap"},"Regular Discount"),r.createElement("li",{className:"text-xs sm:text-sm md:text-md w-full justify-between flex flex-nowrap"},"3 months",r.createElement("div",{className:"ml-8 flex grow justify-end text-end"},"10% off")),r.createElement("li",{className:"text-xs sm:text-sm md:text-md w-full justify-between flex flex-nowrap"},"6 months",r.createElement("div",{className:"ml-8 flex grow justify-end text-end"},"15% off")),r.createElement("li",{className:"text-xs sm:text-sm md:text-md w-full justify-between flex flex-nowrap"},"12 months",r.createElement("div",{className:"ml-8 flex grow justify-end text-end"},"20% off")),r.createElement("li",{className:"text-xs sm:text-sm md:text-md w-full justify-center flex text-center mt-1"},"ALL PRICES INCLUDE TAX - Paid on the 1st of every month")))};var i=e=>r.createElement(r.Suspense,{fallback:r.createElement(s.k,null)},r.createElement(o,e)),c=n(4131),m=n(5533),u=n(2926),d=n(741);n(7458);var f=r.createContext(null);var p="@formspree/react@2.5.1";function x(e,t={}){let n=(0,r.useContext)(f)??{client:(0,d.getDefaultClient)()},{client:a=n.client,extraData:l,onError:s,onSuccess:o,origin:i}=t,{stripe:c}=a,m=(0,r.useMemo)((()=>c?.elements().getElement(u.CardElement)),[c]);return async function(t){let n=function(e){return"preventDefault"in e&&"function"==typeof e.preventDefault}(t)?function(e){e.preventDefault();let t=e.currentTarget;if("FORM"!=t.tagName)throw new Error("submit was triggered for a non-form element");return new FormData(t)}(t):t;if("object"==typeof l)for(let[e,a]of Object.entries(l)){let t;t="function"==typeof a?await a():a,void 0!==t&&(0,d.appendExtraData)(n,e,t)}let r=await a.submitForm(e,n,{endpoint:i,clientName:p,createPaymentMethod:c&&m?()=>c.createPaymentMethod({type:"card",card:m,billing_details:y(n)}):void 0});(0,d.isSubmissionError)(r)?s?.(r):o?.(r)}}function y(e){let t={address:h(e)};for(let n of["name","email","phone"]){let r=e instanceof FormData?e.get(n):e[n];r&&"string"==typeof r&&(t[n]=r)}return t}function h(e){let t={};for(let[n,r]of[["address_line1","line1"],["address_line2","line2"],["address_city","city"],["address_country","country"],["address_state","state"],["address_postal_code","postal_code"]]){let a=e instanceof FormData?e.get(n):e[n];a&&"string"==typeof a&&(t[r]=a)}return t}var E=()=>{const{0:e,1:t}=(0,r.useState)(!1),{0:n,1:a}=(0,r.useState)(!1),{0:l,1:o}=(0,r.useState)(!1),{0:i,1:u}=(0,r.useState)(!1),[d,f]=function(e,t={}){let[n,a]=(0,r.useState)(null),[l,s]=(0,r.useState)(null),[o,i]=(0,r.useState)(!1),[c,m]=(0,r.useState)(!1);if(!e)throw new Error('You must provide a form key or hashid (e.g. useForm("myForm") or useForm("123xyz")');let u=x(e,{client:t.client,extraData:t.data,onError(e){a(e),i(!1),m(!1)},onSuccess(e){a(null),s(e),i(!1),m(!0)},origin:t.endpoint});return[{errors:n,result:l,submitting:o,succeeded:c},async function(e){i(!0),await u(e)},function(){a(null),s(null),i(!1),m(!1)}]}("mqkrbazg"),p="person-has-inquired";(0,r.useEffect)((()=>{if(window){"true"===window.localStorage.getItem(p)&&u(!0)}}),[]);const y=e=>{console.error(e),t(e),o(!0)};return d.errors&&!e&&y(d.errors),d.succeeded&&!n&&a("Thank you, your inquiry has been submitted."),r.createElement(c.l,{backgroundImage:"https://res.cloudinary.com/dtweazqf2/image/upload/f_auto,q_auto/v1708112816/423903878_1315851262413930_6547102846014955944_n_vnpisa.jpg"},r.createElement("form",{onSubmit:e=>{e.preventDefault();try{f(e),u(!0),null===(t=window)||void 0===t||t.localStorage.setItem(p,"true")}catch(n){y(n)}var t},className:"bg-black/40 text-white flex flex-col p-4 items-center rounded-md"},r.createElement("h2",{className:"text-sm sm:text-md md:text-base mb-4 underline"},"STUDENT INQUIRY"),r.createElement("div",{className:"mb-4 grid grid-cols-1 md:gap-4 md:grid-cols-2"},r.createElement("div",{className:"flex flex-col col-start-1 col-end-2"},r.createElement("input",{className:"px-8 py-2 mb-2 rounded bg-black/30 placeholder-white text-sm md:text-md",type:"text",placeholder:"first name",name:"First name:",minLength:3,required:!0}),r.createElement("input",{className:"px-8 py-2 mb-2 rounded bg-black/30 placeholder-white text-sm md:text-md",type:"text",placeholder:"last name",name:"Last name:",minLength:3,required:!0}),r.createElement("div",{className:"flex flex-col items-center w-full"},r.createElement("input",{className:"w-full px-8 py-2 mb-2 rounded bg-black/30 placeholder-white text-sm md:text-md",type:"email",placeholder:"your email",name:"Email address:",minLength:9,required:!0}),r.createElement("p",{className:"mb-2 md:mb-0 text-xs text-white"},"(Your email will only be used for responding to your inquiry)"))),r.createElement("div",{className:"col-start-1 col-end-2 md:col-start-2 md:col-end-3 flex flex-col"},r.createElement("label",{htmlFor:"email_message",className:"mb-2 text-sm md:text-md text-white"},"Have you trained in martial arts before? Which arts are you interested in at AMMA?"),r.createElement("textarea",{id:"email_message",className:"flex flex-grow min-h-[120px] px-8 py-2 rounded bg-black/30 placeholder-white resize-none text-sm md:text-md",placeholder:"enter your message",name:"Message:",minLength:9,maxLength:500,required:!0}))),r.createElement("div",{className:"flex flex-col items-center "},(e||n)&&r.createElement("div",{className:"max-w-[200px] bg-black/30 py-2 px-4 mb-4 rounded-lg text-sm sm:text-md"},e&&r.createElement("p",{className:"text-red"},""+e),n&&r.createElement("p",null,n)),r.createElement(m.Button,{className:"flex items-center",type:"submit",value:"subscribe",disabled:l},d.submitting&&r.createElement("div",{className:"h-4 w-4 mr-4"},r.createElement(s.k,null)),"Submit"))))};var w=e=>{let{location:t}=e;return r.createElement(a.A,{currentPathname:t.pathname},r.createElement("div",{className:"flex flex-col grow items-center justify-start"},r.createElement("div",{className:"grid grid-cols-1 gap-4 md:grid-cols-2 m-4 sm:mx-16 md:min-w-[500px] max-w-[940px]"},r.createElement(E,null),r.createElement("div",{className:"relative col-start-1 col-end-2 rounded-lg"},r.createElement(l.IL,null)),r.createElement("div",{className:"relative col-start-1 col-end-2 md:col-start-2 md:col-end-3 rounded-lg"},r.createElement(i,null)),r.createElement(c.A,{backgroundImage:"https://res.cloudinary.com/dtweazqf2/image/upload/f_auto,q_auto/v1696165783/mastermurray2010_bbrdm5.jpg"},r.createElement("div",{"aria-label":"student oath",className:"flex flex-col bg-black/50 w-full px-4 pt-4 pb-10 md:pb-28 items-start rounded-lg text-white"},r.createElement("h2",{className:"text-sm sm:text-md md:text-base w-full flex justify-center underline uppercase mb-1"},"Student Oath"),r.createElement("p",{className:"text-xs sm:text-sm md:text-md w-full justify-between flex flex-nowrap"},"While teaching martial and defense skills, the Atlantic Martial Arts Academy has a student Oath to be taken at the start of any testing, and intended to be kept as a guide to actions in life. The Student Oath is as follows:"),r.createElement("p",{className:"text-xs sm:text-sm md:text-md w-full justify-center flex flex-nowrap"},"~"),r.createElement("p",{className:"text-xs sm:text-sm md:text-md w-full flex flex-nowrap"},"As a member of the Atlantic Martial Art Academy, I promise to obey the rules and regulations of this academy at all times."),r.createElement("p",{className:"text-xs sm:text-sm md:text-md w-full flex flex-nowrap"},"I promise to treat each person with dignity and respect."),r.createElement("p",{className:"text-xs sm:text-sm md:text-md w-full flex flex-nowrap"},"I promise never to fight to accomplish selfish ends."),r.createElement("p",{className:"text-xs sm:text-sm md:text-md w-full flex flex-nowrap"},"I promise never to do anything to discredit or harm the reputation of my academy."),r.createElement("p",{className:"text-xs sm:text-sm md:text-md w-full justify-center flex flex-nowrap"},"~"),r.createElement("p",{className:"text-xs sm:text-sm md:text-md w-full justify-between flex flex-nowrap"},"It was Grand Master Murray's philosophy that training is not about how many medals you win, but how good of a person you can become. The martial arts and skills that come with their study are not seen as a method of holding power over others, but rather as a way of self improvement for the student that he or she may have confidence, and help use their skills only for good."))),r.createElement(c.A,{backgroundImage:"https://res.cloudinary.com/dtweazqf2/image/upload/q_auto,f_auto/v1694544887/dojo_vdhf6m.jpg",backgroundPosition:"center"},r.createElement("div",{"aria-label":"location",className:"flex flex-col bg-black/50 w-full px-4 pt-4 pb-10 md:pb-28 items-start rounded-lg text-white"},r.createElement("h2",{className:"text-sm sm:text-md md:text-base w-full flex justify-center underline uppercase mb-1"},"Location"),r.createElement("p",{className:"text-xs sm:text-sm md:text-md w-full justify-between flex flex-nowrap"},"Atlantic Martial Arts Academy is located in the top floor studio of the Multi-Cultural Centre Gym (Old YMCA by exhibition ground), at 28 Saunders Street, Fredericton, New Brunswick."))))))}}}]);
//# sourceMappingURL=component---src-pages-information-tsx-f7feb3d623a55c4f19b7.js.map