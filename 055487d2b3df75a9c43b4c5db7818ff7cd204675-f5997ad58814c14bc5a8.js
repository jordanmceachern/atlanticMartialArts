(self.webpackChunkgatsby_starter_hello_world=self.webpackChunkgatsby_starter_hello_world||[]).push([[985],{7174:function(e){var t,n=Object.defineProperty,r=Object.getOwnPropertyDescriptor,o=Object.getOwnPropertyNames,a=Object.prototype.hasOwnProperty,l=(e,t,n)=>new Promise(((r,o)=>{var a=e=>{try{c(n.next(e))}catch(t){o(t)}},l=e=>{try{c(n.throw(e))}catch(t){o(t)}},c=e=>e.done?r(e.value):Promise.resolve(e.value).then(a,l);c((n=n.apply(e,t)).next())})),c={};((e,t)=>{for(var r in t)n(e,r,{get:t[r],enumerable:!0})})(c,{SubmissionError:()=>y,appendExtraData:()=>S,createClient:()=>_,getDefaultClient:()=>A,isSubmissionError:()=>f}),e.exports=(t=c,((e,t,l,c)=>{if(t&&"object"==typeof t||"function"==typeof t)for(let i of o(t))!a.call(e,i)&&i!==l&&n(e,i,{get:()=>t[i],enumerable:!(c=r(t,i))||c.enumerable});return e})(n({},"__esModule",{value:!0}),t));var i="ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz0123456789+/=",s=/^(?:[A-Za-z\d+\/]{4})*?(?:[A-Za-z\d+\/]{2}(?:==)?|[A-Za-z\d+\/]{3}=?)?$/;var u=()=>navigator.webdriver||!!document.documentElement.getAttribute(function(e){if(e=String(e).replace(/[\t\n\f\r ]+/g,""),!s.test(e))throw new TypeError("Failed to execute 'atob' on 'Window': The string to be decoded is not correctly encoded.");e+="==".slice(2-(3&e.length));for(var t,n,r,o="",a=0;a<e.length;)t=i.indexOf(e.charAt(a++))<<18|i.indexOf(e.charAt(a++))<<12|(n=i.indexOf(e.charAt(a++)))<<6|(r=i.indexOf(e.charAt(a++))),o+=64===n?String.fromCharCode(t>>16&255):64===r?String.fromCharCode(t>>16&255,t>>8&255):String.fromCharCode(t>>16&255,t>>8&255,255&t);return o}("d2ViZHJpdmVy"))||!!window.callPhantom||!!window._phantom,m=class{constructor(){this.loadedAt=Date.now(),this.webdriver=u()}data(){return{loadedAt:this.loadedAt,webdriver:this.webdriver}}},d=class{constructor(e){this.kind="success",this.next=e.next}};var p=class{constructor(e,t){this.paymentIntentClientSecret=e,this.resubmitKey=t,this.kind="stripePluginPending"}};function f(e){return"error"===e.kind}var y=class{constructor(...e){var t;this.kind="error",this.formErrors=[],this.fieldErrors=new Map;for(let n of e){if(!n.field){this.formErrors.push({code:n.code&&E(n.code)?n.code:"UNSPECIFIED",message:n.message});continue}let e=null!=(t=this.fieldErrors.get(n.field))?t:[];e.push({code:n.code&&g(n.code)?n.code:"UNSPECIFIED",message:n.message}),this.fieldErrors.set(n.field,e)}}getFormErrors(){return[...this.formErrors]}getFieldErrors(e){var t;return null!=(t=this.fieldErrors.get(e))?t:[]}getAllFieldErrors(){return Array.from(this.fieldErrors)}};function E(e){return e in h}var h={BLOCKED:"BLOCKED",EMPTY:"EMPTY",FILES_TOO_BIG:"FILES_TOO_BIG",FORM_NOT_FOUND:"FORM_NOT_FOUND",INACTIVE:"INACTIVE",NO_FILE_UPLOADS:"NO_FILE_UPLOADS",PROJECT_NOT_FOUND:"PROJECT_NOT_FOUND",TOO_MANY_FILES:"TOO_MANY_FILES"};function g(e){return e in b}var b={REQUIRED_FIELD_EMPTY:"REQUIRED_FIELD_EMPTY",REQUIRED_FIELD_MISSING:"REQUIRED_FIELD_MISSING",STRIPE_CLIENT_ERROR:"STRIPE_CLIENT_ERROR",STRIPE_SCA_ERROR:"STRIPE_SCA_ERROR",TYPE_EMAIL:"TYPE_EMAIL",TYPE_NUMERIC:"TYPE_NUMERIC",TYPE_TEXT:"TYPE_TEXT"};var v=e=>function(e){for(var t,n,r,o,a="",l=0,c=(e=String(e)).length%3;l<e.length;){if((n=e.charCodeAt(l++))>255||(r=e.charCodeAt(l++))>255||(o=e.charCodeAt(l++))>255)throw new TypeError("Failed to execute 'btoa' on 'Window': The string to be encoded contains characters outside of the Latin1 range.");a+=i.charAt((t=n<<16|r<<8|o)>>18&63)+i.charAt(t>>12&63)+i.charAt(t>>6&63)+i.charAt(63&t)}return c?a.slice(0,c-3)+"===".substring(c):a}(JSON.stringify(e)),w=e=>{let t="@formspree/core@3.0.1";return e?`${e} ${t}`:t};function S(e,t,n){e instanceof FormData?e.append(t,n):e[t]=n}var x=class{constructor(e={}){this.project=e.project,this.stripe=e.stripe,"undefined"!=typeof window&&(this.session=new m)}submitForm(e,t){return l(this,arguments,(function*(e,t,n={}){let r=n.endpoint||"https://formspree.io",o=this.project?`${r}/p/${this.project}/f/${e}`:`${r}/f/${e}`,a={Accept:"application/json","Formspree-Client":w(n.clientName)};function c(e){return l(this,null,(function*(){try{let t=yield(yield fetch(o,{method:"POST",mode:"cors",body:e instanceof FormData?e:JSON.stringify(e),headers:a})).json();if(function(e){return null!==e&&"object"==typeof e}(t)){if(function(e){return"errors"in e&&Array.isArray(e.errors)&&e.errors.every((e=>"string"==typeof e.message))||"error"in e&&"string"==typeof e.error}(t))return Array.isArray(t.errors)?new y(...t.errors):new y({message:t.error});if(function(e){if("stripe"in e&&"resubmitKey"in e&&"string"==typeof e.resubmitKey){let{stripe:t}=e;return"object"==typeof t&&null!=t&&"paymentIntentClientSecret"in t&&"string"==typeof t.paymentIntentClientSecret}return!1}(t))return new p(t.stripe.paymentIntentClientSecret,t.resubmitKey);if(function(e){return"next"in e&&"string"==typeof e.next}(t))return new d({next:t.next})}return new y({message:"Unexpected response format"})}catch(t){let e=t instanceof Error?t.message:`Unknown error while posting to Formspree: ${JSON.stringify(t)}`;return new y({message:e})}}))}if(this.session&&(a["Formspree-Session-Data"]=v(this.session.data())),t instanceof FormData||(a["Content-Type"]="application/json"),this.stripe&&n.createPaymentMethod){let e=yield n.createPaymentMethod();if(e.error)return new y({code:"STRIPE_CLIENT_ERROR",field:"paymentMethod",message:"Error creating payment method"});S(t,"paymentMethod",e.paymentMethod.id);let r=yield c(t);if("error"===r.kind)return r;if("stripePluginPending"===r.kind){let e=yield this.stripe.handleCardAction(r.paymentIntentClientSecret);if(e.error)return new y({code:"STRIPE_CLIENT_ERROR",field:"paymentMethod",message:"Stripe SCA error"});t instanceof FormData?t.delete("paymentMethod"):delete t.paymentMethod,S(t,"paymentIntent",e.paymentIntent.id),S(t,"resubmitKey",r.resubmitKey);let n=yield c(t);return C(n),n}return r}let i=yield c(t);return C(i),i}))}};function C(e){let{kind:t}=e;if("success"!==t&&"error"!==t)throw new Error(`Unexpected submission result (kind: ${t})`)}var O,_=e=>new x(e),A=()=>(O||(O=_()),O)},3619:function(e,t,n){!function(e,t){"use strict";function n(e,t){var n=Object.keys(e);if(Object.getOwnPropertySymbols){var r=Object.getOwnPropertySymbols(e);t&&(r=r.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),n.push.apply(n,r)}return n}function r(e){for(var t=1;t<arguments.length;t++){var r=null!=arguments[t]?arguments[t]:{};t%2?n(Object(r),!0).forEach((function(t){a(e,t,r[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(r)):n(Object(r)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(r,t))}))}return e}function o(e){return o="function"==typeof Symbol&&"symbol"==typeof Symbol.iterator?function(e){return typeof e}:function(e){return e&&"function"==typeof Symbol&&e.constructor===Symbol&&e!==Symbol.prototype?"symbol":typeof e},o(e)}function a(e,t,n){return t in e?Object.defineProperty(e,t,{value:n,enumerable:!0,configurable:!0,writable:!0}):e[t]=n,e}function l(e,t){return c(e)||i(e,t)||s(e,t)||m()}function c(e){if(Array.isArray(e))return e}function i(e,t){var n=e&&("undefined"!=typeof Symbol&&e[Symbol.iterator]||e["@@iterator"]);if(null!=n){var r,o,a=[],l=!0,c=!1;try{for(n=n.call(e);!(l=(r=n.next()).done)&&(a.push(r.value),!t||a.length!==t);l=!0);}catch(i){c=!0,o=i}finally{try{l||null==n.return||n.return()}finally{if(c)throw o}}return a}}function s(e,t){if(e){if("string"==typeof e)return u(e,t);var n=Object.prototype.toString.call(e).slice(8,-1);return"Object"===n&&e.constructor&&(n=e.constructor.name),"Map"===n||"Set"===n?Array.from(e):"Arguments"===n||/^(?:Ui|I)nt(?:8|16|32)(?:Clamped)?Array$/.test(n)?u(e,t):void 0}}function u(e,t){(null==t||t>e.length)&&(t=e.length);for(var n=0,r=new Array(t);n<t;n++)r[n]=e[n];return r}function m(){throw new TypeError("Invalid attempt to destructure non-iterable instance.\nIn order to be iterable, non-array objects must have a [Symbol.iterator]() method.")}function d(e,t){return e(t={exports:{}},t.exports),t.exports}t=t&&Object.prototype.hasOwnProperty.call(t,"default")?t.default:t;var p="SECRET_DO_NOT_PASS_THIS_OR_YOU_WILL_BE_FIRED";function f(){}function y(){}y.resetWarningCache=f;var E=function(){function e(e,t,n,r,o,a){if(a!==p){var l=new Error("Calling PropTypes validators directly is not supported by the `prop-types` package. Use PropTypes.checkPropTypes() to call them. Read more at http://fb.me/use-check-prop-types");throw l.name="Invariant Violation",l}}function t(){return e}e.isRequired=e;var n={array:e,bool:e,func:e,number:e,object:e,string:e,symbol:e,any:e,arrayOf:t,element:e,elementType:e,instanceOf:t,node:e,objectOf:t,oneOf:t,oneOfType:t,shape:t,exact:t,checkPropTypes:y,resetWarningCache:f};return n.PropTypes=n,n},h=d((function(e){e.exports=E()})),g=function(e){var n=t.useRef(e);return t.useEffect((function(){n.current=e}),[e]),n.current},b=function(e){return null!==e&&"object"===o(e)},v=function(e){return b(e)&&"function"==typeof e.then},w=function(e){return b(e)&&"function"==typeof e.elements&&"function"==typeof e.createToken&&"function"==typeof e.createPaymentMethod&&"function"==typeof e.confirmCardPayment},S="[object Object]",x=function e(t,n){if(!b(t)||!b(n))return t===n;var r=Array.isArray(t);if(r!==Array.isArray(n))return!1;var o=Object.prototype.toString.call(t)===S;if(o!==(Object.prototype.toString.call(n)===S))return!1;if(!o&&!r)return t===n;var a=Object.keys(t),l=Object.keys(n);if(a.length!==l.length)return!1;for(var c={},i=0;i<a.length;i+=1)c[a[i]]=!0;for(var s=0;s<l.length;s+=1)c[l[s]]=!0;var u=Object.keys(c);if(u.length!==a.length)return!1;var m=t,d=n,p=function(t){return e(m[t],d[t])};return u.every(p)},C=function(e,t,n){return b(e)?Object.keys(e).reduce((function(o,l){var c=!b(t)||!x(e[l],t[l]);return n.includes(l)?(c&&console.warn("Unsupported prop change: options.".concat(l," is not a mutable property.")),o):c?r(r({},o||{}),{},a({},l,e[l])):o}),null):null},O="Invalid prop `stripe` supplied to `Elements`. We recommend using the `loadStripe` utility from `@stripe/stripe-js`. See https://stripe.com/docs/stripe-js/react#elements-props-stripe for details.",_=function(e){if(null===e||w(e))return e;throw new Error(O)},A=function(e){if(v(e))return{tag:"async",stripePromise:Promise.resolve(e).then(_)};var t=_(e);return null===t?{tag:"empty"}:{tag:"sync",stripe:t}},N=t.createContext(null);N.displayName="ElementsContext";var I=function(e,t){if(!e)throw new Error("Could not find Elements context; You need to wrap the part of your app that ".concat(t," in an <Elements> provider."));return e},P=t.createContext(null);P.displayName="CartElementContext";var j=function(e,t){if(!e)throw new Error("Could not find Elements context; You need to wrap the part of your app that ".concat(t," in an <Elements> provider."));return e},T=function(e){var n=e.stripe,r=e.options,o=e.children,a=t.useMemo((function(){return A(n)}),[n]),c=l(t.useState(null),2),i=c[0],s=c[1],u=l(t.useState(null),2),m=u[0],d=u[1],p=l(t.useState((function(){return{stripe:"sync"===a.tag?a.stripe:null,elements:"sync"===a.tag?a.stripe.elements(r):null}})),2),f=p[0],y=p[1];t.useEffect((function(){var e=!0,t=function(e){y((function(t){return t.stripe?t:{stripe:e,elements:e.elements(r)}}))};return"async"!==a.tag||f.stripe?"sync"!==a.tag||f.stripe||t(a.stripe):a.stripePromise.then((function(n){n&&e&&t(n)})),function(){e=!1}}),[a,f,r]);var E=g(n);t.useEffect((function(){null!==E&&E!==n&&console.warn("Unsupported prop change on Elements: You cannot change the `stripe` prop after setting it.")}),[E,n]);var h=g(r);return t.useEffect((function(){if(f.elements){var e=C(r,h,["clientSecret","fonts"]);e&&f.elements.update(e)}}),[r,h,f.elements]),t.useEffect((function(){var e=f.stripe;e&&e._registerWrapper&&e.registerAppInfo&&(e._registerWrapper({name:"react-stripe-js",version:"1.16.5"}),e.registerAppInfo({name:"react-stripe-js",version:"1.16.5",url:"https://stripe.com/docs/stripe-js/react"}))}),[f.stripe]),t.createElement(N.Provider,{value:f},t.createElement(P.Provider,{value:{cart:i,setCart:s,cartState:m,setCartState:d}},o))};T.propTypes={stripe:h.any,options:h.object};var k=function(e){var n=t.useContext(N);return I(n,e)},R=function(e){var n=t.useContext(P);return j(n,e)},D=function(){return k("calls useElements()").elements},F=function(){return k("calls useStripe()").stripe},L=function(){return R("calls useCartElement()").cart},M=function(){return R("calls useCartElementState()").cartState},B=function(e){return(0,e.children)(k("mounts <ElementsConsumer>"))};B.propTypes={children:h.func.isRequired};var U=function(e,n,r){var o=!!r,a=t.useRef(r);t.useEffect((function(){a.current=r}),[r]),t.useEffect((function(){if(!o||!e)return function(){};var t=function(){a.current&&a.current.apply(a,arguments)};return e.on(n,t),function(){e.off(n,t)}}),[o,n,e,a])},q=function(e){return e.charAt(0).toUpperCase()+e.slice(1)},Y=function(e,n){var r="".concat(q(e),"Element"),o=n?function(e){k("mounts <".concat(r,">")),R("mounts <".concat(r,">"));var n=e.id,o=e.className;return t.createElement("div",{id:n,className:o})}:function(n){var o,a=n.id,c=n.className,i=n.options,s=void 0===i?{}:i,u=n.onBlur,m=n.onFocus,d=n.onReady,p=n.onChange,f=n.onEscape,y=n.onClick,E=n.onLoadError,h=n.onLoaderStart,b=n.onNetworksChange,v=n.onCheckout,w=n.onLineItemClick,S=n.onConfirm,x=n.onCancel,O=n.onShippingAddressChange,_=n.onShippingRateChange,A=k("mounts <".concat(r,">")).elements,N=l(t.useState(null),2),I=N[0],P=N[1],j=t.useRef(null),T=t.useRef(null),D=R("mounts <".concat(r,">")),F=D.setCart,L=D.setCartState;U(I,"blur",u),U(I,"focus",m),U(I,"escape",f),U(I,"click",y),U(I,"loaderror",E),U(I,"loaderstart",h),U(I,"networkschange",b),U(I,"lineitemclick",w),U(I,"confirm",S),U(I,"cancel",x),U(I,"shippingaddresschange",O),U(I,"shippingratechange",_),"cart"===e?o=function(e){L(e),d&&d(e)}:d&&(o="payButton"===e?d:function(){d(I)}),U(I,"ready",o),U(I,"change","cart"===e?function(e){L(e),p&&p(e)}:p),U(I,"checkout","cart"===e?function(e){L(e),v&&v(e)}:v),t.useLayoutEffect((function(){if(null===j.current&&A&&null!==T.current){var t=A.create(e,s);"cart"===e&&F&&F(t),j.current=t,P(t),t.mount(T.current)}}),[A,s,F]);var M=g(s);return t.useEffect((function(){if(j.current){var e=C(s,M,["paymentRequest"]);e&&j.current.update(e)}}),[s,M]),t.useLayoutEffect((function(){return function(){j.current&&(j.current.destroy(),j.current=null)}}),[]),t.createElement("div",{id:a,className:c,ref:T})};return o.propTypes={id:h.string,className:h.string,onChange:h.func,onBlur:h.func,onFocus:h.func,onReady:h.func,onEscape:h.func,onClick:h.func,onLoadError:h.func,onLoaderStart:h.func,onNetworksChange:h.func,onCheckout:h.func,onLineItemClick:h.func,onConfirm:h.func,onCancel:h.func,onShippingAddressChange:h.func,onShippingRateChange:h.func,options:h.object},o.displayName=r,o.__elementType=e,o},K="undefined"==typeof window,W=Y("auBankAccount",K),$=Y("card",K),z=Y("cardNumber",K),J=Y("cardExpiry",K),G=Y("cardCvc",K),H=Y("fpxBank",K),Q=Y("iban",K),V=Y("idealBank",K),X=Y("p24Bank",K),Z=Y("epsBank",K),ee=Y("payment",K),te=Y("payButton",K),ne=Y("paymentRequestButton",K),re=Y("linkAuthentication",K),oe=Y("address",K),ae=Y("shippingAddress",K),le=Y("cart",K),ce=Y("paymentMethodMessaging",K),ie=Y("affirmMessage",K),se=Y("afterpayClearpayMessage",K);e.AddressElement=oe,e.AffirmMessageElement=ie,e.AfterpayClearpayMessageElement=se,e.AuBankAccountElement=W,e.CardCvcElement=G,e.CardElement=$,e.CardExpiryElement=J,e.CardNumberElement=z,e.CartElement=le,e.Elements=T,e.ElementsConsumer=B,e.EpsBankElement=Z,e.FpxBankElement=H,e.IbanElement=Q,e.IdealBankElement=V,e.LinkAuthenticationElement=re,e.P24BankElement=X,e.PayButtonElement=te,e.PaymentElement=ee,e.PaymentMethodMessagingElement=ce,e.PaymentRequestButtonElement=ne,e.ShippingAddressElement=ae,e.useCartElement=L,e.useCartElementState=M,e.useElements=D,e.useStripe=F,Object.defineProperty(e,"__esModule",{value:!0})}(t,n(758))},8814:function(e,t){"use strict";function n(e){return n="function"==typeof Symbol&&"symbol"==typeof Symbol.iterator?function(e){return typeof e}:function(e){return e&&"function"==typeof Symbol&&e.constructor===Symbol&&e!==Symbol.prototype?"symbol":typeof e},n(e)}var r,o="https://js.stripe.com/v3",a=/^https:\/\/js\.stripe\.com\/v3\/?(\?.*)?$/,l="loadStripe.setLoadParameters was called but an existing Stripe.js script already exists in the document; existing script parameters will be used",c=null,i=function(e){return null!==c||(c=new Promise((function(t,n){if("undefined"!=typeof window&&"undefined"!=typeof document)if(window.Stripe&&e&&console.warn(l),window.Stripe)t(window.Stripe);else try{var r=function(){for(var e=document.querySelectorAll('script[src^="'.concat(o,'"]')),t=0;t<e.length;t++){var n=e[t];if(a.test(n.src))return n}return null}();r&&e?console.warn(l):r||(r=function(e){var t=e&&!e.advancedFraudSignals?"?advancedFraudSignals=false":"",n=document.createElement("script");n.src="".concat(o).concat(t);var r=document.head||document.body;if(!r)throw new Error("Expected document.body not to be null. Stripe.js requires a <body> element.");return r.appendChild(n),n}(e)),r.addEventListener("load",(function(){window.Stripe?t(window.Stripe):n(new Error("Stripe.js not available"))})),r.addEventListener("error",(function(){n(new Error("Failed to load Stripe.js"))}))}catch(c){return void n(c)}else t(null)}))),c},s=function(e){var t="invalid load parameters; expected object of shape\n\n    {advancedFraudSignals: boolean}\n\nbut received\n\n    ".concat(JSON.stringify(e),"\n");if(null===e||"object"!==n(e))throw new Error(t);if(1===Object.keys(e).length&&"boolean"==typeof e.advancedFraudSignals)return e;throw new Error(t)},u=!1,m=function(){for(var e=arguments.length,t=new Array(e),n=0;n<e;n++)t[n]=arguments[n];u=!0;var o=Date.now();return i(r).then((function(e){return function(e,t,n){if(null===e)return null;var r=e.apply(void 0,t);return function(e,t){e&&e._registerWrapper&&e._registerWrapper({name:"stripe-js",version:"1.54.2",startTime:t})}(r,n),r}(e,t,o)}))};m.setLoadParameters=function(e){if(u&&r){var t=s(e);if(Object.keys(t).reduce((function(t,n){var o;return t&&e[n]===(null===(o=r)||void 0===o?void 0:o[n])}),!0))return}if(u)throw new Error("You cannot change load parameters after calling loadStripe");r=s(e)}},8755:function(e,t,n){n(8814)},8801:function(e,t,n){"use strict";n.d(t,{A:function(){return p}});var r=n(758),o=n(9932),a=n(67),l=n(7898),c=n(3619),i=n(7174);n(8755);var s=r.createContext(null);function u(e,t={}){let n=(0,r.useContext)(s)??{client:(0,i.getDefaultClient)()},{client:o=n.client,extraData:a,onError:l,onSuccess:u,origin:d}=t,{stripe:p}=o,f=(0,r.useMemo)((()=>p?.elements().getElement(c.CardElement)),[p]);return async function(t){let n=function(e){return"preventDefault"in e&&"function"==typeof e.preventDefault}(t)?function(e){e.preventDefault();let t=e.currentTarget;if("FORM"!=t.tagName)throw new Error("submit was triggered for a non-form element");return new FormData(t)}(t):t;if("object"==typeof a)for(let[e,o]of Object.entries(a)){let t;t="function"==typeof o?await o():o,void 0!==t&&(0,i.appendExtraData)(n,e,t)}let r=await o.submitForm(e,n,{endpoint:d,clientName:"@formspree/react@2.5.1",createPaymentMethod:p&&f?()=>p.createPaymentMethod({type:"card",card:f,billing_details:m(n)}):void 0});(0,i.isSubmissionError)(r)?l?.(r):u?.(r)}}function m(e){let t={address:d(e)};for(let n of["name","email","phone"]){let r=e instanceof FormData?e.get(n):e[n];r&&"string"==typeof r&&(t[n]=r)}return t}function d(e){let t={};for(let[n,r]of[["address_line1","line1"],["address_line2","line2"],["address_city","city"],["address_country","country"],["address_state","state"],["address_postal_code","postal_code"]]){let o=e instanceof FormData?e.get(n):e[n];o&&"string"==typeof o&&(t[r]=o)}return t}var p=()=>{const{0:e,1:t}=(0,r.useState)(!1),{0:n,1:c}=(0,r.useState)(!1),{0:i,1:s}=(0,r.useState)(!1),{0:m,1:d}=(0,r.useState)(!1),[p,f]=function(e,t={}){let[n,o]=(0,r.useState)(null),[a,l]=(0,r.useState)(null),[c,i]=(0,r.useState)(!1),[s,m]=(0,r.useState)(!1);if(!e)throw new Error('You must provide a form key or hashid (e.g. useForm("myForm") or useForm("123xyz")');let d=u(e,{client:t.client,extraData:t.data,onError(e){o(e),i(!1),m(!1)},onSuccess(e){o(null),l(e),i(!1),m(!0)},origin:t.endpoint});return[{errors:n,result:a,submitting:c,succeeded:s},async function(e){i(!0),await d(e)},function(){o(null),l(null),i(!1),m(!1)}]}("mqkrbazg"),y="person-has-inquired";(0,r.useEffect)((()=>{if(window){"true"===window.localStorage.getItem(y)&&d(!0)}}),[]);const E=e=>{s(!0),console.error(e);const n=null==e?void 0:e.formErrors.map((e=>{let{message:t}=e;return t})).join(". ");null!=e&&e.formErrors?t(n):t(e)};return p.errors&&!e&&E(p.errors),p.succeeded&&!n&&c("Thank you, your inquiry has been submitted."),r.createElement(a.l,{backgroundImage:"https://res.cloudinary.com/dtweazqf2/image/upload/q_auto,f_auto/v1709314082/pushups_wflq0c.jpg"},r.createElement("form",{onSubmit:e=>{e.preventDefault();try{f(e),d(!0),null===(t=window)||void 0===t||t.localStorage.setItem(y,"true")}catch(n){E(n)}var t},className:"bg-black/40 text-white flex flex-col p-4 items-center rounded-md"},r.createElement("h2",{className:"text-sm sm:text-md md:text-base mb-4 underline"},"STUDENT INQUIRY"),r.createElement("div",{className:"mb-4 grid grid-cols-1 md:gap-4 md:grid-cols-2"},r.createElement("div",{className:"flex flex-col col-start-1 col-end-2"},r.createElement("input",{className:"px-8 py-2 mb-2 rounded bg-black/30 placeholder-white text-sm md:text-md",type:"text",placeholder:"first name",name:"First name:",minLength:3,required:!0}),r.createElement("input",{className:"px-8 py-2 mb-2 rounded bg-black/30 placeholder-white text-sm md:text-md",type:"text",placeholder:"last name",name:"Last name:",minLength:3,required:!0}),r.createElement("input",{className:"px-8 py-2 mb-2 rounded bg-black/30 placeholder-white text-sm md:text-md",type:"tel",placeholder:"phone number",name:"Phone number:",minLength:10,required:!0}),r.createElement("div",{className:"flex flex-col items-center w-full"},r.createElement("input",{className:"w-full px-8 py-2 mb-2 rounded bg-black/30 placeholder-white text-sm md:text-md",type:"email",placeholder:"your email",name:"Email address:",minLength:9,required:!0}),r.createElement("p",{className:"mb-2 md:mb-0 text-xs text-white"},"(Your email will only be used for responding to your inquiry)"))),r.createElement("div",{className:"col-start-1 col-end-2 md:col-start-2 md:col-end-3 flex flex-col"},r.createElement("label",{htmlFor:"email_message",className:"mb-2 text-sm md:text-md text-white"},"Have you trained in martial arts before? Which arts are you interested in at AMMA?"),r.createElement("textarea",{id:"email_message",className:"flex flex-grow min-h-[120px] px-8 py-2 rounded bg-black/30 placeholder-white resize-none text-sm md:text-md",placeholder:"enter your message",name:"Message:",minLength:9,maxLength:500,required:!0}))),r.createElement("div",{className:"flex flex-col items-center "},(e||n)&&r.createElement("div",{className:"max-w-[200px] bg-black/30 py-2 px-4 mb-4 rounded-lg text-sm sm:text-md"},e&&r.createElement("p",{className:"text-red"},""+e),n&&r.createElement("p",null,n)),r.createElement(o.Button,{className:"flex items-center",placeholder:"subscribe",type:"submit",value:"subscribe",disabled:i||m||p.submitting},p.submitting&&r.createElement("div",{className:"h-4 w-4 mr-4"},r.createElement(l.k,null)),"Submit"))))}},5442:function(e,t,n){"use strict";n.d(t,{Wf:function(){return o}});var r=n(758);const o=()=>r.createElement("div",{className:"flex flex-col h-full grow items-center justify-center rounded-lg",style:{background:"center / cover no-repeat url(https://res.cloudinary.com/dtweazqf2/image/upload/q_auto,f_auto/v1696165783/turny_kick_j5zrst.jpg)"}},r.createElement("table",{"aria-label":"class schedule",cellPadding:"0.25rem",className:"flex flex-col bg-black/50 w-full p-4 h-full pt-auto rounded-lg items-start text-white"},r.createElement("caption",{className:"text-sm sm:text-md md:text-base w-full flex justify-center underline mb-1"},"SCHEDULE"),r.createElement("thead",null,r.createElement("tr",null,r.createElement("th",{scope:"col"},"Week Day"),r.createElement("th",{scope:"col"},"HAP KI DO (ages 10+)"),r.createElement("th",{scope:"col"},"TAE KWON DO, Adults"),r.createElement("th",{scope:"col"},"TAE KWON DO, Kids (ages 5-12)"),r.createElement("th",{scope:"col"},"KICK BOXING, Adults"),r.createElement("th",{scope:"col"},"KICK BOXING, Kids (ages 8-12)"),r.createElement("th",{scope:"col"},"TODDLERS"))),r.createElement("tbody",null,r.createElement("tr",null,r.createElement("th",{scope:"row"},"Monday"),r.createElement("td",null,"-"),r.createElement("td",null,"7:30pm - 8:30pm"),r.createElement("td",null,"6:15pm - 7:15pm"),r.createElement("td",null,"5:00pm - 6:00pm"),r.createElement("td",null,"-"),r.createElement("td",null,"-")),r.createElement("tr",null,r.createElement("th",{scope:"row"},"Tuesday"),r.createElement("td",null,"6:15pm - 7:45pm"),r.createElement("td",null,"-"),r.createElement("td",null,"-"),r.createElement("td",null,"-"),r.createElement("td",null,"-")),r.createElement("tr",null,r.createElement("th",{scope:"row"},"Wednesday"),r.createElement("td",null,"-"),r.createElement("td",null,"7:30pm - 8:30pm"),r.createElement("td",null,"6:15pm - 7:15pm"),r.createElement("td",null,"5:00pm - 6:00pm"),r.createElement("td",null,"-"),r.createElement("td",null,"-")),r.createElement("tr",null,r.createElement("th",{scope:"row"},"Thursday"),r.createElement("td",null,"6:15pm - 7:45pm"),r.createElement("td",null,"-"),r.createElement("td",null,"5:00pm - 6:00pm"),r.createElement("td",null,"-")),r.createElement("tr",null,r.createElement("th",{scope:"row"},"Friday"),r.createElement("td",null,"-"),r.createElement("td",null,"7:30pm - 8:30pm"),r.createElement("td",null,"6:15pm - 7:15pm"),r.createElement("td",null,"-"),r.createElement("td",null,"5:00pm - 6:00pm"),r.createElement("td",null,"-")),r.createElement("tr",null,r.createElement("th",{scope:"row"},"Saturday"),r.createElement("td",null,"-"),r.createElement("td",null,"-"),r.createElement("td",null,"-"),r.createElement("td",null,"-"),r.createElement("td",null,"-"),r.createElement("td",null,"11:00am - 12:00pm")),r.createElement("tr",null,r.createElement("th",{scope:"row"},"Sunday"),r.createElement("td",null,"-"),r.createElement("td",null,"-"),r.createElement("td",null,"-"),r.createElement("td",null,"-"),r.createElement("td",null,"-"),r.createElement("td",null,"-")))));t.Ay=()=>r.createElement("div",{className:"h-72 sm:h-96 bg-black rounded-lg flex justify-center w-full my-4 sm:my-16"},r.createElement("div",{className:"flex h-full w-full sm:w-3/4"},r.createElement(o,{isBannerWidth:!0})))}}]);
//# sourceMappingURL=055487d2b3df75a9c43b4c5db7818ff7cd204675-f5997ad58814c14bc5a8.js.map