(self.webpackChunkgatsby_starter_hello_world=self.webpackChunkgatsby_starter_hello_world||[]).push([[985],{741:function(e){var t,r=Object.defineProperty,n=Object.getOwnPropertyDescriptor,o=Object.getOwnPropertyNames,a=Object.prototype.hasOwnProperty,i=(e,t,r)=>new Promise(((n,o)=>{var a=e=>{try{s(r.next(e))}catch(t){o(t)}},i=e=>{try{s(r.throw(e))}catch(t){o(t)}},s=e=>e.done?n(e.value):Promise.resolve(e.value).then(a,i);s((r=r.apply(e,t)).next())})),s={};((e,t)=>{for(var n in t)r(e,n,{get:t[n],enumerable:!0})})(s,{SubmissionError:()=>y,appendExtraData:()=>S,createClient:()=>_,getDefaultClient:()=>P,isSubmissionError:()=>m}),e.exports=(t=s,((e,t,i,s)=>{if(t&&"object"==typeof t||"function"==typeof t)for(let c of o(t))!a.call(e,c)&&c!==i&&r(e,c,{get:()=>t[c],enumerable:!(s=n(t,c))||s.enumerable});return e})(r({},"__esModule",{value:!0}),t));var c="ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz0123456789+/=",l=/^(?:[A-Za-z\d+\/]{4})*?(?:[A-Za-z\d+\/]{2}(?:==)?|[A-Za-z\d+\/]{3}=?)?$/;var u=()=>navigator.webdriver||!!document.documentElement.getAttribute(function(e){if(e=String(e).replace(/[\t\n\f\r ]+/g,""),!l.test(e))throw new TypeError("Failed to execute 'atob' on 'Window': The string to be decoded is not correctly encoded.");e+="==".slice(2-(3&e.length));for(var t,r,n,o="",a=0;a<e.length;)t=c.indexOf(e.charAt(a++))<<18|c.indexOf(e.charAt(a++))<<12|(r=c.indexOf(e.charAt(a++)))<<6|(n=c.indexOf(e.charAt(a++))),o+=64===r?String.fromCharCode(t>>16&255):64===n?String.fromCharCode(t>>16&255,t>>8&255):String.fromCharCode(t>>16&255,t>>8&255,255&t);return o}("d2ViZHJpdmVy"))||!!window.callPhantom||!!window._phantom,f=class{constructor(){this.loadedAt=Date.now(),this.webdriver=u()}data(){return{loadedAt:this.loadedAt,webdriver:this.webdriver}}},d=class{constructor(e){this.kind="success",this.next=e.next}};var p=class{constructor(e,t){this.paymentIntentClientSecret=e,this.resubmitKey=t,this.kind="stripePluginPending"}};function m(e){return"error"===e.kind}var y=class{constructor(...e){var t;this.kind="error",this.formErrors=[],this.fieldErrors=new Map;for(let r of e){if(!r.field){this.formErrors.push({code:r.code&&h(r.code)?r.code:"UNSPECIFIED",message:r.message});continue}let e=null!=(t=this.fieldErrors.get(r.field))?t:[];e.push({code:r.code&&g(r.code)?r.code:"UNSPECIFIED",message:r.message}),this.fieldErrors.set(r.field,e)}}getFormErrors(){return[...this.formErrors]}getFieldErrors(e){var t;return null!=(t=this.fieldErrors.get(e))?t:[]}getAllFieldErrors(){return Array.from(this.fieldErrors)}};function h(e){return e in E}var E={BLOCKED:"BLOCKED",EMPTY:"EMPTY",FILES_TOO_BIG:"FILES_TOO_BIG",FORM_NOT_FOUND:"FORM_NOT_FOUND",INACTIVE:"INACTIVE",NO_FILE_UPLOADS:"NO_FILE_UPLOADS",PROJECT_NOT_FOUND:"PROJECT_NOT_FOUND",TOO_MANY_FILES:"TOO_MANY_FILES"};function g(e){return e in b}var b={REQUIRED_FIELD_EMPTY:"REQUIRED_FIELD_EMPTY",REQUIRED_FIELD_MISSING:"REQUIRED_FIELD_MISSING",STRIPE_CLIENT_ERROR:"STRIPE_CLIENT_ERROR",STRIPE_SCA_ERROR:"STRIPE_SCA_ERROR",TYPE_EMAIL:"TYPE_EMAIL",TYPE_NUMERIC:"TYPE_NUMERIC",TYPE_TEXT:"TYPE_TEXT"};var v=e=>function(e){for(var t,r,n,o,a="",i=0,s=(e=String(e)).length%3;i<e.length;){if((r=e.charCodeAt(i++))>255||(n=e.charCodeAt(i++))>255||(o=e.charCodeAt(i++))>255)throw new TypeError("Failed to execute 'btoa' on 'Window': The string to be encoded contains characters outside of the Latin1 range.");a+=c.charAt((t=r<<16|n<<8|o)>>18&63)+c.charAt(t>>12&63)+c.charAt(t>>6&63)+c.charAt(63&t)}return s?a.slice(0,s-3)+"===".substring(s):a}(JSON.stringify(e)),w=e=>{let t="@formspree/core@3.0.1";return e?`${e} ${t}`:t};function S(e,t,r){e instanceof FormData?e.append(t,r):e[t]=r}var x=class{constructor(e={}){this.project=e.project,this.stripe=e.stripe,"undefined"!=typeof window&&(this.session=new f)}submitForm(e,t){return i(this,arguments,(function*(e,t,r={}){let n=r.endpoint||"https://formspree.io",o=this.project?`${n}/p/${this.project}/f/${e}`:`${n}/f/${e}`,a={Accept:"application/json","Formspree-Client":w(r.clientName)};function s(e){return i(this,null,(function*(){try{let t=yield(yield fetch(o,{method:"POST",mode:"cors",body:e instanceof FormData?e:JSON.stringify(e),headers:a})).json();if(function(e){return null!==e&&"object"==typeof e}(t)){if(function(e){return"errors"in e&&Array.isArray(e.errors)&&e.errors.every((e=>"string"==typeof e.message))||"error"in e&&"string"==typeof e.error}(t))return Array.isArray(t.errors)?new y(...t.errors):new y({message:t.error});if(function(e){if("stripe"in e&&"resubmitKey"in e&&"string"==typeof e.resubmitKey){let{stripe:t}=e;return"object"==typeof t&&null!=t&&"paymentIntentClientSecret"in t&&"string"==typeof t.paymentIntentClientSecret}return!1}(t))return new p(t.stripe.paymentIntentClientSecret,t.resubmitKey);if(function(e){return"next"in e&&"string"==typeof e.next}(t))return new d({next:t.next})}return new y({message:"Unexpected response format"})}catch(t){let e=t instanceof Error?t.message:`Unknown error while posting to Formspree: ${JSON.stringify(t)}`;return new y({message:e})}}))}if(this.session&&(a["Formspree-Session-Data"]=v(this.session.data())),t instanceof FormData||(a["Content-Type"]="application/json"),this.stripe&&r.createPaymentMethod){let e=yield r.createPaymentMethod();if(e.error)return new y({code:"STRIPE_CLIENT_ERROR",field:"paymentMethod",message:"Error creating payment method"});S(t,"paymentMethod",e.paymentMethod.id);let n=yield s(t);if("error"===n.kind)return n;if("stripePluginPending"===n.kind){let e=yield this.stripe.handleCardAction(n.paymentIntentClientSecret);if(e.error)return new y({code:"STRIPE_CLIENT_ERROR",field:"paymentMethod",message:"Stripe SCA error"});t instanceof FormData?t.delete("paymentMethod"):delete t.paymentMethod,S(t,"paymentIntent",e.paymentIntent.id),S(t,"resubmitKey",n.resubmitKey);let r=yield s(t);return C(r),r}return n}let c=yield s(t);return C(c),c}))}};function C(e){let{kind:t}=e;if("success"!==t&&"error"!==t)throw new Error(`Unexpected submission result (kind: ${t})`)}var O,_=e=>new x(e),P=()=>(O||(O=_()),O)},2926:function(e,t,r){!function(e,t){"use strict";function r(e,t){var r=Object.keys(e);if(Object.getOwnPropertySymbols){var n=Object.getOwnPropertySymbols(e);t&&(n=n.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),r.push.apply(r,n)}return r}function n(e){for(var t=1;t<arguments.length;t++){var n=null!=arguments[t]?arguments[t]:{};t%2?r(Object(n),!0).forEach((function(t){a(e,t,n[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(n)):r(Object(n)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(n,t))}))}return e}function o(e){return o="function"==typeof Symbol&&"symbol"==typeof Symbol.iterator?function(e){return typeof e}:function(e){return e&&"function"==typeof Symbol&&e.constructor===Symbol&&e!==Symbol.prototype?"symbol":typeof e},o(e)}function a(e,t,r){return t in e?Object.defineProperty(e,t,{value:r,enumerable:!0,configurable:!0,writable:!0}):e[t]=r,e}function i(e,t){return s(e)||c(e,t)||l(e,t)||f()}function s(e){if(Array.isArray(e))return e}function c(e,t){var r=e&&("undefined"!=typeof Symbol&&e[Symbol.iterator]||e["@@iterator"]);if(null!=r){var n,o,a=[],i=!0,s=!1;try{for(r=r.call(e);!(i=(n=r.next()).done)&&(a.push(n.value),!t||a.length!==t);i=!0);}catch(c){s=!0,o=c}finally{try{i||null==r.return||r.return()}finally{if(s)throw o}}return a}}function l(e,t){if(e){if("string"==typeof e)return u(e,t);var r=Object.prototype.toString.call(e).slice(8,-1);return"Object"===r&&e.constructor&&(r=e.constructor.name),"Map"===r||"Set"===r?Array.from(e):"Arguments"===r||/^(?:Ui|I)nt(?:8|16|32)(?:Clamped)?Array$/.test(r)?u(e,t):void 0}}function u(e,t){(null==t||t>e.length)&&(t=e.length);for(var r=0,n=new Array(t);r<t;r++)n[r]=e[r];return n}function f(){throw new TypeError("Invalid attempt to destructure non-iterable instance.\nIn order to be iterable, non-array objects must have a [Symbol.iterator]() method.")}function d(e,t){return e(t={exports:{}},t.exports),t.exports}t=t&&Object.prototype.hasOwnProperty.call(t,"default")?t.default:t;var p="SECRET_DO_NOT_PASS_THIS_OR_YOU_WILL_BE_FIRED";function m(){}function y(){}y.resetWarningCache=m;var h=function(){function e(e,t,r,n,o,a){if(a!==p){var i=new Error("Calling PropTypes validators directly is not supported by the `prop-types` package. Use PropTypes.checkPropTypes() to call them. Read more at http://fb.me/use-check-prop-types");throw i.name="Invariant Violation",i}}function t(){return e}e.isRequired=e;var r={array:e,bool:e,func:e,number:e,object:e,string:e,symbol:e,any:e,arrayOf:t,element:e,elementType:e,instanceOf:t,node:e,objectOf:t,oneOf:t,oneOfType:t,shape:t,exact:t,checkPropTypes:y,resetWarningCache:m};return r.PropTypes=r,r},E=d((function(e){e.exports=h()})),g=function(e){var r=t.useRef(e);return t.useEffect((function(){r.current=e}),[e]),r.current},b=function(e){return null!==e&&"object"===o(e)},v=function(e){return b(e)&&"function"==typeof e.then},w=function(e){return b(e)&&"function"==typeof e.elements&&"function"==typeof e.createToken&&"function"==typeof e.createPaymentMethod&&"function"==typeof e.confirmCardPayment},S="[object Object]",x=function e(t,r){if(!b(t)||!b(r))return t===r;var n=Array.isArray(t);if(n!==Array.isArray(r))return!1;var o=Object.prototype.toString.call(t)===S;if(o!==(Object.prototype.toString.call(r)===S))return!1;if(!o&&!n)return t===r;var a=Object.keys(t),i=Object.keys(r);if(a.length!==i.length)return!1;for(var s={},c=0;c<a.length;c+=1)s[a[c]]=!0;for(var l=0;l<i.length;l+=1)s[i[l]]=!0;var u=Object.keys(s);if(u.length!==a.length)return!1;var f=t,d=r,p=function(t){return e(f[t],d[t])};return u.every(p)},C=function(e,t,r){return b(e)?Object.keys(e).reduce((function(o,i){var s=!b(t)||!x(e[i],t[i]);return r.includes(i)?(s&&console.warn("Unsupported prop change: options.".concat(i," is not a mutable property.")),o):s?n(n({},o||{}),{},a({},i,e[i])):o}),null):null},O="Invalid prop `stripe` supplied to `Elements`. We recommend using the `loadStripe` utility from `@stripe/stripe-js`. See https://stripe.com/docs/stripe-js/react#elements-props-stripe for details.",_=function(e){if(null===e||w(e))return e;throw new Error(O)},P=function(e){if(v(e))return{tag:"async",stripePromise:Promise.resolve(e).then(_)};var t=_(e);return null===t?{tag:"empty"}:{tag:"sync",stripe:t}},A=t.createContext(null);A.displayName="ElementsContext";var I=function(e,t){if(!e)throw new Error("Could not find Elements context; You need to wrap the part of your app that ".concat(t," in an <Elements> provider."));return e},N=t.createContext(null);N.displayName="CartElementContext";var j=function(e,t){if(!e)throw new Error("Could not find Elements context; You need to wrap the part of your app that ".concat(t," in an <Elements> provider."));return e},T=function(e){var r=e.stripe,n=e.options,o=e.children,a=t.useMemo((function(){return P(r)}),[r]),s=i(t.useState(null),2),c=s[0],l=s[1],u=i(t.useState(null),2),f=u[0],d=u[1],p=i(t.useState((function(){return{stripe:"sync"===a.tag?a.stripe:null,elements:"sync"===a.tag?a.stripe.elements(n):null}})),2),m=p[0],y=p[1];t.useEffect((function(){var e=!0,t=function(e){y((function(t){return t.stripe?t:{stripe:e,elements:e.elements(n)}}))};return"async"!==a.tag||m.stripe?"sync"!==a.tag||m.stripe||t(a.stripe):a.stripePromise.then((function(r){r&&e&&t(r)})),function(){e=!1}}),[a,m,n]);var h=g(r);t.useEffect((function(){null!==h&&h!==r&&console.warn("Unsupported prop change on Elements: You cannot change the `stripe` prop after setting it.")}),[h,r]);var E=g(n);return t.useEffect((function(){if(m.elements){var e=C(n,E,["clientSecret","fonts"]);e&&m.elements.update(e)}}),[n,E,m.elements]),t.useEffect((function(){var e=m.stripe;e&&e._registerWrapper&&e.registerAppInfo&&(e._registerWrapper({name:"react-stripe-js",version:"1.16.5"}),e.registerAppInfo({name:"react-stripe-js",version:"1.16.5",url:"https://stripe.com/docs/stripe-js/react"}))}),[m.stripe]),t.createElement(A.Provider,{value:m},t.createElement(N.Provider,{value:{cart:c,setCart:l,cartState:f,setCartState:d}},o))};T.propTypes={stripe:E.any,options:E.object};var k=function(e){var r=t.useContext(A);return I(r,e)},R=function(e){var r=t.useContext(N);return j(r,e)},F=function(){return k("calls useElements()").elements},D=function(){return k("calls useStripe()").stripe},L=function(){return R("calls useCartElement()").cart},M=function(){return R("calls useCartElementState()").cartState},U=function(e){return(0,e.children)(k("mounts <ElementsConsumer>"))};U.propTypes={children:E.func.isRequired};var B=function(e,r,n){var o=!!n,a=t.useRef(n);t.useEffect((function(){a.current=n}),[n]),t.useEffect((function(){if(!o||!e)return function(){};var t=function(){a.current&&a.current.apply(a,arguments)};return e.on(r,t),function(){e.off(r,t)}}),[o,r,e,a])},Y=function(e){return e.charAt(0).toUpperCase()+e.slice(1)},q=function(e,r){var n="".concat(Y(e),"Element"),o=r?function(e){k("mounts <".concat(n,">")),R("mounts <".concat(n,">"));var r=e.id,o=e.className;return t.createElement("div",{id:r,className:o})}:function(r){var o,a=r.id,s=r.className,c=r.options,l=void 0===c?{}:c,u=r.onBlur,f=r.onFocus,d=r.onReady,p=r.onChange,m=r.onEscape,y=r.onClick,h=r.onLoadError,E=r.onLoaderStart,b=r.onNetworksChange,v=r.onCheckout,w=r.onLineItemClick,S=r.onConfirm,x=r.onCancel,O=r.onShippingAddressChange,_=r.onShippingRateChange,P=k("mounts <".concat(n,">")).elements,A=i(t.useState(null),2),I=A[0],N=A[1],j=t.useRef(null),T=t.useRef(null),F=R("mounts <".concat(n,">")),D=F.setCart,L=F.setCartState;B(I,"blur",u),B(I,"focus",f),B(I,"escape",m),B(I,"click",y),B(I,"loaderror",h),B(I,"loaderstart",E),B(I,"networkschange",b),B(I,"lineitemclick",w),B(I,"confirm",S),B(I,"cancel",x),B(I,"shippingaddresschange",O),B(I,"shippingratechange",_),"cart"===e?o=function(e){L(e),d&&d(e)}:d&&(o="payButton"===e?d:function(){d(I)}),B(I,"ready",o),B(I,"change","cart"===e?function(e){L(e),p&&p(e)}:p),B(I,"checkout","cart"===e?function(e){L(e),v&&v(e)}:v),t.useLayoutEffect((function(){if(null===j.current&&P&&null!==T.current){var t=P.create(e,l);"cart"===e&&D&&D(t),j.current=t,N(t),t.mount(T.current)}}),[P,l,D]);var M=g(l);return t.useEffect((function(){if(j.current){var e=C(l,M,["paymentRequest"]);e&&j.current.update(e)}}),[l,M]),t.useLayoutEffect((function(){return function(){j.current&&(j.current.destroy(),j.current=null)}}),[]),t.createElement("div",{id:a,className:s,ref:T})};return o.propTypes={id:E.string,className:E.string,onChange:E.func,onBlur:E.func,onFocus:E.func,onReady:E.func,onEscape:E.func,onClick:E.func,onLoadError:E.func,onLoaderStart:E.func,onNetworksChange:E.func,onCheckout:E.func,onLineItemClick:E.func,onConfirm:E.func,onCancel:E.func,onShippingAddressChange:E.func,onShippingRateChange:E.func,options:E.object},o.displayName=n,o.__elementType=e,o},W="undefined"==typeof window,$=q("auBankAccount",W),K=q("card",W),z=q("cardNumber",W),J=q("cardExpiry",W),Q=q("cardCvc",W),V=q("fpxBank",W),G=q("iban",W),Z=q("idealBank",W),H=q("p24Bank",W),X=q("epsBank",W),ee=q("payment",W),te=q("payButton",W),re=q("paymentRequestButton",W),ne=q("linkAuthentication",W),oe=q("address",W),ae=q("shippingAddress",W),ie=q("cart",W),se=q("paymentMethodMessaging",W),ce=q("affirmMessage",W),le=q("afterpayClearpayMessage",W);e.AddressElement=oe,e.AffirmMessageElement=ce,e.AfterpayClearpayMessageElement=le,e.AuBankAccountElement=$,e.CardCvcElement=Q,e.CardElement=K,e.CardExpiryElement=J,e.CardNumberElement=z,e.CartElement=ie,e.Elements=T,e.ElementsConsumer=U,e.EpsBankElement=X,e.FpxBankElement=V,e.IbanElement=G,e.IdealBankElement=Z,e.LinkAuthenticationElement=ne,e.P24BankElement=H,e.PayButtonElement=te,e.PaymentElement=ee,e.PaymentMethodMessagingElement=se,e.PaymentRequestButtonElement=re,e.ShippingAddressElement=ae,e.useCartElement=L,e.useCartElementState=M,e.useElements=F,e.useStripe=D,Object.defineProperty(e,"__esModule",{value:!0})}(t,r(6540))},8009:function(e,t){"use strict";function r(e){return r="function"==typeof Symbol&&"symbol"==typeof Symbol.iterator?function(e){return typeof e}:function(e){return e&&"function"==typeof Symbol&&e.constructor===Symbol&&e!==Symbol.prototype?"symbol":typeof e},r(e)}var n,o="https://js.stripe.com/v3",a=/^https:\/\/js\.stripe\.com\/v3\/?(\?.*)?$/,i="loadStripe.setLoadParameters was called but an existing Stripe.js script already exists in the document; existing script parameters will be used",s=null,c=function(e){return null!==s||(s=new Promise((function(t,r){if("undefined"!=typeof window&&"undefined"!=typeof document)if(window.Stripe&&e&&console.warn(i),window.Stripe)t(window.Stripe);else try{var n=function(){for(var e=document.querySelectorAll('script[src^="'.concat(o,'"]')),t=0;t<e.length;t++){var r=e[t];if(a.test(r.src))return r}return null}();n&&e?console.warn(i):n||(n=function(e){var t=e&&!e.advancedFraudSignals?"?advancedFraudSignals=false":"",r=document.createElement("script");r.src="".concat(o).concat(t);var n=document.head||document.body;if(!n)throw new Error("Expected document.body not to be null. Stripe.js requires a <body> element.");return n.appendChild(r),r}(e)),n.addEventListener("load",(function(){window.Stripe?t(window.Stripe):r(new Error("Stripe.js not available"))})),n.addEventListener("error",(function(){r(new Error("Failed to load Stripe.js"))}))}catch(s){return void r(s)}else t(null)}))),s},l=function(e){var t="invalid load parameters; expected object of shape\n\n    {advancedFraudSignals: boolean}\n\nbut received\n\n    ".concat(JSON.stringify(e),"\n");if(null===e||"object"!==r(e))throw new Error(t);if(1===Object.keys(e).length&&"boolean"==typeof e.advancedFraudSignals)return e;throw new Error(t)},u=!1,f=function(){for(var e=arguments.length,t=new Array(e),r=0;r<e;r++)t[r]=arguments[r];u=!0;var o=Date.now();return c(n).then((function(e){return function(e,t,r){if(null===e)return null;var n=e.apply(void 0,t);return function(e,t){e&&e._registerWrapper&&e._registerWrapper({name:"stripe-js",version:"1.54.2",startTime:t})}(n,r),n}(e,t,o)}))};f.setLoadParameters=function(e){if(u&&n){var t=l(e);if(Object.keys(t).reduce((function(t,r){var o;return t&&e[r]===(null===(o=n)||void 0===o?void 0:o[r])}),!0))return}if(u)throw new Error("You cannot change load parameters after calling loadStripe");n=l(e)}},7458:function(e,t,r){r(8009)},8334:function(e,t,r){"use strict";r.d(t,{A:function(){return m}});var n=r(6540),o=r(5533),a=r(4131),i=r(3306),s=r(2926),c=r(741);r(7458);var l=n.createContext(null);var u="@formspree/react@2.5.1";function f(e,t={}){let r=(0,n.useContext)(l)??{client:(0,c.getDefaultClient)()},{client:o=r.client,extraData:a,onError:i,onSuccess:f,origin:p}=t,{stripe:m}=o,y=(0,n.useMemo)((()=>m?.elements().getElement(s.CardElement)),[m]);return async function(t){let r=function(e){return"preventDefault"in e&&"function"==typeof e.preventDefault}(t)?function(e){e.preventDefault();let t=e.currentTarget;if("FORM"!=t.tagName)throw new Error("submit was triggered for a non-form element");return new FormData(t)}(t):t;if("object"==typeof a)for(let[e,o]of Object.entries(a)){let t;t="function"==typeof o?await o():o,void 0!==t&&(0,c.appendExtraData)(r,e,t)}let n=await o.submitForm(e,r,{endpoint:p,clientName:u,createPaymentMethod:m&&y?()=>m.createPaymentMethod({type:"card",card:y,billing_details:d(r)}):void 0});(0,c.isSubmissionError)(n)?i?.(n):f?.(n)}}function d(e){let t={address:p(e)};for(let r of["name","email","phone"]){let n=e instanceof FormData?e.get(r):e[r];n&&"string"==typeof n&&(t[r]=n)}return t}function p(e){let t={};for(let[r,n]of[["address_line1","line1"],["address_line2","line2"],["address_city","city"],["address_country","country"],["address_state","state"],["address_postal_code","postal_code"]]){let o=e instanceof FormData?e.get(r):e[r];o&&"string"==typeof o&&(t[n]=o)}return t}var m=()=>{const{0:e,1:t}=(0,n.useState)(!1),{0:r,1:s}=(0,n.useState)(!1),{0:c,1:l}=(0,n.useState)(!1),{0:u,1:d}=(0,n.useState)(!1),[p,m]=function(e,t={}){let[r,o]=(0,n.useState)(null),[a,i]=(0,n.useState)(null),[s,c]=(0,n.useState)(!1),[l,u]=(0,n.useState)(!1);if(!e)throw new Error('You must provide a form key or hashid (e.g. useForm("myForm") or useForm("123xyz")');let d=f(e,{client:t.client,extraData:t.data,onError(e){o(e),c(!1),u(!1)},onSuccess(e){o(null),i(e),c(!1),u(!0)},origin:t.endpoint});return[{errors:r,result:a,submitting:s,succeeded:l},async function(e){c(!0),await d(e)},function(){o(null),i(null),c(!1),u(!1)}]}("mqkrbazg"),y="person-has-inquired";(0,n.useEffect)((()=>{if(window){"true"===window.localStorage.getItem(y)&&d(!0)}}),[]);const h=e=>{l(!0),console.error(e);const r=null==e?void 0:e.formErrors.map((e=>{let{message:t}=e;return t})).join(". ");null!=e&&e.formErrors?t(r):t(e)};return p.errors&&!e&&h(p.errors),p.succeeded&&!r&&s("Thank you, your inquiry has been submitted."),n.createElement(a.l,{backgroundImage:"https://res.cloudinary.com/dtweazqf2/image/upload/q_auto,f_auto/v1709314082/pushups_wflq0c.jpg"},n.createElement("form",{onSubmit:e=>{e.preventDefault();try{m(e),d(!0),null===(t=window)||void 0===t||t.localStorage.setItem(y,"true")}catch(r){h(r)}var t},className:"bg-black/40 text-white flex flex-col p-4 items-center rounded-md"},n.createElement("h2",{className:"text-sm sm:text-md md:text-base mb-4 underline"},"STUDENT INQUIRY"),n.createElement("div",{className:"mb-4 grid grid-cols-1 md:gap-4 md:grid-cols-2"},n.createElement("div",{className:"flex flex-col col-start-1 col-end-2"},n.createElement("input",{className:"px-8 py-2 mb-2 rounded bg-black/30 placeholder-white text-sm md:text-md",type:"text",placeholder:"first name",name:"First name:",minLength:3,required:!0}),n.createElement("input",{className:"px-8 py-2 mb-2 rounded bg-black/30 placeholder-white text-sm md:text-md",type:"text",placeholder:"last name",name:"Last name:",minLength:3,required:!0}),n.createElement("input",{className:"px-8 py-2 mb-2 rounded bg-black/30 placeholder-white text-sm md:text-md",type:"tel",placeholder:"phone number",name:"Phone number:",minLength:10,required:!0}),n.createElement("div",{className:"flex flex-col items-center w-full"},n.createElement("input",{className:"w-full px-8 py-2 mb-2 rounded bg-black/30 placeholder-white text-sm md:text-md",type:"email",placeholder:"your email",name:"Email address:",minLength:9,required:!0}),n.createElement("p",{className:"mb-2 md:mb-0 text-xs text-white"},"(Your email will only be used for responding to your inquiry)"))),n.createElement("div",{className:"col-start-1 col-end-2 md:col-start-2 md:col-end-3 flex flex-col"},n.createElement("label",{htmlFor:"email_message",className:"mb-2 text-sm md:text-md text-white"},"Have you trained in martial arts before? Which arts are you interested in at AMMA?"),n.createElement("textarea",{id:"email_message",className:"flex flex-grow min-h-[120px] px-8 py-2 rounded bg-black/30 placeholder-white resize-none text-sm md:text-md",placeholder:"enter your message",name:"Message:",minLength:9,maxLength:500,required:!0}))),n.createElement("div",{className:"flex flex-col items-center "},(e||r)&&n.createElement("div",{className:"max-w-[200px] bg-black/30 py-2 px-4 mb-4 rounded-lg text-sm sm:text-md"},e&&n.createElement("p",{className:"text-red"},""+e),r&&n.createElement("p",null,r)),n.createElement(o.Button,{className:"flex items-center",type:"submit",value:"subscribe",disabled:c||u||p.submitting},p.submitting&&n.createElement("div",{className:"h-4 w-4 mr-4"},n.createElement(i.k,null)),"Submit"))))}}}]);
//# sourceMappingURL=055487d2b3df75a9c43b4c5db7818ff7cd204675-4c62ca608673042b7458.js.map