(self.webpackChunkgatsby_starter_hello_world=self.webpackChunkgatsby_starter_hello_world||[]).push([[985],{7174:function(e){var t,r=Object.defineProperty,n=Object.getOwnPropertyDescriptor,a=Object.getOwnPropertyNames,o=Object.prototype.hasOwnProperty,c=(e,t,r)=>new Promise(((n,a)=>{var o=e=>{try{s(r.next(e))}catch(t){a(t)}},c=e=>{try{s(r.throw(e))}catch(t){a(t)}},s=e=>e.done?n(e.value):Promise.resolve(e.value).then(o,c);s((r=r.apply(e,t)).next())})),s={};((e,t)=>{for(var n in t)r(e,n,{get:t[n],enumerable:!0})})(s,{SubmissionError:()=>E,appendExtraData:()=>w,createClient:()=>C,getDefaultClient:()=>_,isSubmissionError:()=>f}),e.exports=(t=s,((e,t,c,s)=>{if(t&&"object"==typeof t||"function"==typeof t)for(let l of a(t))!o.call(e,l)&&l!==c&&r(e,l,{get:()=>t[l],enumerable:!(s=n(t,l))||s.enumerable});return e})(r({},"__esModule",{value:!0}),t));var l="ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz0123456789+/=",i=/^(?:[A-Za-z\d+\/]{4})*?(?:[A-Za-z\d+\/]{2}(?:==)?|[A-Za-z\d+\/]{3}=?)?$/;var u=()=>navigator.webdriver||!!document.documentElement.getAttribute(function(e){if(e=String(e).replace(/[\t\n\f\r ]+/g,""),!i.test(e))throw new TypeError("Failed to execute 'atob' on 'Window': The string to be decoded is not correctly encoded.");e+="==".slice(2-(3&e.length));for(var t,r,n,a="",o=0;o<e.length;)t=l.indexOf(e.charAt(o++))<<18|l.indexOf(e.charAt(o++))<<12|(r=l.indexOf(e.charAt(o++)))<<6|(n=l.indexOf(e.charAt(o++))),a+=64===r?String.fromCharCode(t>>16&255):64===n?String.fromCharCode(t>>16&255,t>>8&255):String.fromCharCode(t>>16&255,t>>8&255,255&t);return a}("d2ViZHJpdmVy"))||!!window.callPhantom||!!window._phantom,m=class{constructor(){this.loadedAt=Date.now(),this.webdriver=u()}data(){return{loadedAt:this.loadedAt,webdriver:this.webdriver}}},p=class{constructor(e){this.kind="success",this.next=e.next}};var d=class{constructor(e,t){this.paymentIntentClientSecret=e,this.resubmitKey=t,this.kind="stripePluginPending"}};function f(e){return"error"===e.kind}var E=class{constructor(...e){var t;this.kind="error",this.formErrors=[],this.fieldErrors=new Map;for(let r of e){if(!r.field){this.formErrors.push({code:r.code&&y(r.code)?r.code:"UNSPECIFIED",message:r.message});continue}let e=null!=(t=this.fieldErrors.get(r.field))?t:[];e.push({code:r.code&&g(r.code)?r.code:"UNSPECIFIED",message:r.message}),this.fieldErrors.set(r.field,e)}}getFormErrors(){return[...this.formErrors]}getFieldErrors(e){var t;return null!=(t=this.fieldErrors.get(e))?t:[]}getAllFieldErrors(){return Array.from(this.fieldErrors)}};function y(e){return e in h}var h={BLOCKED:"BLOCKED",EMPTY:"EMPTY",FILES_TOO_BIG:"FILES_TOO_BIG",FORM_NOT_FOUND:"FORM_NOT_FOUND",INACTIVE:"INACTIVE",NO_FILE_UPLOADS:"NO_FILE_UPLOADS",PROJECT_NOT_FOUND:"PROJECT_NOT_FOUND",TOO_MANY_FILES:"TOO_MANY_FILES"};function g(e){return e in b}var b={REQUIRED_FIELD_EMPTY:"REQUIRED_FIELD_EMPTY",REQUIRED_FIELD_MISSING:"REQUIRED_FIELD_MISSING",STRIPE_CLIENT_ERROR:"STRIPE_CLIENT_ERROR",STRIPE_SCA_ERROR:"STRIPE_SCA_ERROR",TYPE_EMAIL:"TYPE_EMAIL",TYPE_NUMERIC:"TYPE_NUMERIC",TYPE_TEXT:"TYPE_TEXT"};var x=e=>function(e){for(var t,r,n,a,o="",c=0,s=(e=String(e)).length%3;c<e.length;){if((r=e.charCodeAt(c++))>255||(n=e.charCodeAt(c++))>255||(a=e.charCodeAt(c++))>255)throw new TypeError("Failed to execute 'btoa' on 'Window': The string to be encoded contains characters outside of the Latin1 range.");o+=l.charAt((t=r<<16|n<<8|a)>>18&63)+l.charAt(t>>12&63)+l.charAt(t>>6&63)+l.charAt(63&t)}return s?o.slice(0,s-3)+"===".substring(s):o}(JSON.stringify(e)),v=e=>{let t="@formspree/core@3.0.1";return e?`${e} ${t}`:t};function w(e,t,r){e instanceof FormData?e.append(t,r):e[t]=r}var N=class{constructor(e={}){this.project=e.project,this.stripe=e.stripe,"undefined"!=typeof window&&(this.session=new m)}submitForm(e,t){return c(this,arguments,(function*(e,t,r={}){let n=r.endpoint||"https://formspree.io",a=this.project?`${n}/p/${this.project}/f/${e}`:`${n}/f/${e}`,o={Accept:"application/json","Formspree-Client":v(r.clientName)};function s(e){return c(this,null,(function*(){try{let t=yield(yield fetch(a,{method:"POST",mode:"cors",body:e instanceof FormData?e:JSON.stringify(e),headers:o})).json();if(function(e){return null!==e&&"object"==typeof e}(t)){if(function(e){return"errors"in e&&Array.isArray(e.errors)&&e.errors.every((e=>"string"==typeof e.message))||"error"in e&&"string"==typeof e.error}(t))return Array.isArray(t.errors)?new E(...t.errors):new E({message:t.error});if(function(e){if("stripe"in e&&"resubmitKey"in e&&"string"==typeof e.resubmitKey){let{stripe:t}=e;return"object"==typeof t&&null!=t&&"paymentIntentClientSecret"in t&&"string"==typeof t.paymentIntentClientSecret}return!1}(t))return new d(t.stripe.paymentIntentClientSecret,t.resubmitKey);if(function(e){return"next"in e&&"string"==typeof e.next}(t))return new p({next:t.next})}return new E({message:"Unexpected response format"})}catch(t){let e=t instanceof Error?t.message:`Unknown error while posting to Formspree: ${JSON.stringify(t)}`;return new E({message:e})}}))}if(this.session&&(o["Formspree-Session-Data"]=x(this.session.data())),t instanceof FormData||(o["Content-Type"]="application/json"),this.stripe&&r.createPaymentMethod){let e=yield r.createPaymentMethod();if(e.error)return new E({code:"STRIPE_CLIENT_ERROR",field:"paymentMethod",message:"Error creating payment method"});w(t,"paymentMethod",e.paymentMethod.id);let n=yield s(t);if("error"===n.kind)return n;if("stripePluginPending"===n.kind){let e=yield this.stripe.handleCardAction(n.paymentIntentClientSecret);if(e.error)return new E({code:"STRIPE_CLIENT_ERROR",field:"paymentMethod",message:"Stripe SCA error"});t instanceof FormData?t.delete("paymentMethod"):delete t.paymentMethod,w(t,"paymentIntent",e.paymentIntent.id),w(t,"resubmitKey",n.resubmitKey);let r=yield s(t);return S(r),r}return n}let l=yield s(t);return S(l),l}))}};function S(e){let{kind:t}=e;if("success"!==t&&"error"!==t)throw new Error(`Unexpected submission result (kind: ${t})`)}var O,C=e=>new N(e),_=()=>(O||(O=C()),O)},3619:function(e,t,r){!function(e,t){"use strict";function r(e,t){var r=Object.keys(e);if(Object.getOwnPropertySymbols){var n=Object.getOwnPropertySymbols(e);t&&(n=n.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),r.push.apply(r,n)}return r}function n(e){for(var t=1;t<arguments.length;t++){var n=null!=arguments[t]?arguments[t]:{};t%2?r(Object(n),!0).forEach((function(t){o(e,t,n[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(n)):r(Object(n)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(n,t))}))}return e}function a(e){return a="function"==typeof Symbol&&"symbol"==typeof Symbol.iterator?function(e){return typeof e}:function(e){return e&&"function"==typeof Symbol&&e.constructor===Symbol&&e!==Symbol.prototype?"symbol":typeof e},a(e)}function o(e,t,r){return t in e?Object.defineProperty(e,t,{value:r,enumerable:!0,configurable:!0,writable:!0}):e[t]=r,e}function c(e,t){return s(e)||l(e,t)||i(e,t)||m()}function s(e){if(Array.isArray(e))return e}function l(e,t){var r=e&&("undefined"!=typeof Symbol&&e[Symbol.iterator]||e["@@iterator"]);if(null!=r){var n,a,o=[],c=!0,s=!1;try{for(r=r.call(e);!(c=(n=r.next()).done)&&(o.push(n.value),!t||o.length!==t);c=!0);}catch(l){s=!0,a=l}finally{try{c||null==r.return||r.return()}finally{if(s)throw a}}return o}}function i(e,t){if(e){if("string"==typeof e)return u(e,t);var r=Object.prototype.toString.call(e).slice(8,-1);return"Object"===r&&e.constructor&&(r=e.constructor.name),"Map"===r||"Set"===r?Array.from(e):"Arguments"===r||/^(?:Ui|I)nt(?:8|16|32)(?:Clamped)?Array$/.test(r)?u(e,t):void 0}}function u(e,t){(null==t||t>e.length)&&(t=e.length);for(var r=0,n=new Array(t);r<t;r++)n[r]=e[r];return n}function m(){throw new TypeError("Invalid attempt to destructure non-iterable instance.\nIn order to be iterable, non-array objects must have a [Symbol.iterator]() method.")}function p(e,t){return e(t={exports:{}},t.exports),t.exports}t=t&&Object.prototype.hasOwnProperty.call(t,"default")?t.default:t;var d="SECRET_DO_NOT_PASS_THIS_OR_YOU_WILL_BE_FIRED";function f(){}function E(){}E.resetWarningCache=f;var y=function(){function e(e,t,r,n,a,o){if(o!==d){var c=new Error("Calling PropTypes validators directly is not supported by the `prop-types` package. Use PropTypes.checkPropTypes() to call them. Read more at http://fb.me/use-check-prop-types");throw c.name="Invariant Violation",c}}function t(){return e}e.isRequired=e;var r={array:e,bool:e,func:e,number:e,object:e,string:e,symbol:e,any:e,arrayOf:t,element:e,elementType:e,instanceOf:t,node:e,objectOf:t,oneOf:t,oneOfType:t,shape:t,exact:t,checkPropTypes:E,resetWarningCache:f};return r.PropTypes=r,r},h=p((function(e){e.exports=y()})),g=function(e){var r=t.useRef(e);return t.useEffect((function(){r.current=e}),[e]),r.current},b=function(e){return null!==e&&"object"===a(e)},x=function(e){return b(e)&&"function"==typeof e.then},v=function(e){return b(e)&&"function"==typeof e.elements&&"function"==typeof e.createToken&&"function"==typeof e.createPaymentMethod&&"function"==typeof e.confirmCardPayment},w="[object Object]",N=function e(t,r){if(!b(t)||!b(r))return t===r;var n=Array.isArray(t);if(n!==Array.isArray(r))return!1;var a=Object.prototype.toString.call(t)===w;if(a!==(Object.prototype.toString.call(r)===w))return!1;if(!a&&!n)return t===r;var o=Object.keys(t),c=Object.keys(r);if(o.length!==c.length)return!1;for(var s={},l=0;l<o.length;l+=1)s[o[l]]=!0;for(var i=0;i<c.length;i+=1)s[c[i]]=!0;var u=Object.keys(s);if(u.length!==o.length)return!1;var m=t,p=r,d=function(t){return e(m[t],p[t])};return u.every(d)},S=function(e,t,r){return b(e)?Object.keys(e).reduce((function(a,c){var s=!b(t)||!N(e[c],t[c]);return r.includes(c)?(s&&console.warn("Unsupported prop change: options.".concat(c," is not a mutable property.")),a):s?n(n({},a||{}),{},o({},c,e[c])):a}),null):null},O="Invalid prop `stripe` supplied to `Elements`. We recommend using the `loadStripe` utility from `@stripe/stripe-js`. See https://stripe.com/docs/stripe-js/react#elements-props-stripe for details.",C=function(e){if(null===e||v(e))return e;throw new Error(O)},_=function(e){if(x(e))return{tag:"async",stripePromise:Promise.resolve(e).then(C)};var t=C(e);return null===t?{tag:"empty"}:{tag:"sync",stripe:t}},A=t.createContext(null);A.displayName="ElementsContext";var I=function(e,t){if(!e)throw new Error("Could not find Elements context; You need to wrap the part of your app that ".concat(t," in an <Elements> provider."));return e},P=t.createContext(null);P.displayName="CartElementContext";var T=function(e,t){if(!e)throw new Error("Could not find Elements context; You need to wrap the part of your app that ".concat(t," in an <Elements> provider."));return e},j=function(e){var r=e.stripe,n=e.options,a=e.children,o=t.useMemo((function(){return _(r)}),[r]),s=c(t.useState(null),2),l=s[0],i=s[1],u=c(t.useState(null),2),m=u[0],p=u[1],d=c(t.useState((function(){return{stripe:"sync"===o.tag?o.stripe:null,elements:"sync"===o.tag?o.stripe.elements(n):null}})),2),f=d[0],E=d[1];t.useEffect((function(){var e=!0,t=function(e){E((function(t){return t.stripe?t:{stripe:e,elements:e.elements(n)}}))};return"async"!==o.tag||f.stripe?"sync"!==o.tag||f.stripe||t(o.stripe):o.stripePromise.then((function(r){r&&e&&t(r)})),function(){e=!1}}),[o,f,n]);var y=g(r);t.useEffect((function(){null!==y&&y!==r&&console.warn("Unsupported prop change on Elements: You cannot change the `stripe` prop after setting it.")}),[y,r]);var h=g(n);return t.useEffect((function(){if(f.elements){var e=S(n,h,["clientSecret","fonts"]);e&&f.elements.update(e)}}),[n,h,f.elements]),t.useEffect((function(){var e=f.stripe;e&&e._registerWrapper&&e.registerAppInfo&&(e._registerWrapper({name:"react-stripe-js",version:"1.16.5"}),e.registerAppInfo({name:"react-stripe-js",version:"1.16.5",url:"https://stripe.com/docs/stripe-js/react"}))}),[f.stripe]),t.createElement(A.Provider,{value:f},t.createElement(P.Provider,{value:{cart:l,setCart:i,cartState:m,setCartState:p}},a))};j.propTypes={stripe:h.any,options:h.object};var k=function(e){var r=t.useContext(A);return I(r,e)},D=function(e){var r=t.useContext(P);return T(r,e)},R=function(){return k("calls useElements()").elements},F=function(){return k("calls useStripe()").stripe},L=function(){return D("calls useCartElement()").cart},M=function(){return D("calls useCartElementState()").cartState},U=function(e){return(0,e.children)(k("mounts <ElementsConsumer>"))};U.propTypes={children:h.func.isRequired};var Y=function(e,r,n){var a=!!n,o=t.useRef(n);t.useEffect((function(){o.current=n}),[n]),t.useEffect((function(){if(!a||!e)return function(){};var t=function(){o.current&&o.current.apply(o,arguments)};return e.on(r,t),function(){e.off(r,t)}}),[a,r,e,o])},B=function(e){return e.charAt(0).toUpperCase()+e.slice(1)},q=function(e,r){var n="".concat(B(e),"Element"),a=r?function(e){k("mounts <".concat(n,">")),D("mounts <".concat(n,">"));var r=e.id,a=e.className;return t.createElement("div",{id:r,className:a})}:function(r){var a,o=r.id,s=r.className,l=r.options,i=void 0===l?{}:l,u=r.onBlur,m=r.onFocus,p=r.onReady,d=r.onChange,f=r.onEscape,E=r.onClick,y=r.onLoadError,h=r.onLoaderStart,b=r.onNetworksChange,x=r.onCheckout,v=r.onLineItemClick,w=r.onConfirm,N=r.onCancel,O=r.onShippingAddressChange,C=r.onShippingRateChange,_=k("mounts <".concat(n,">")).elements,A=c(t.useState(null),2),I=A[0],P=A[1],T=t.useRef(null),j=t.useRef(null),R=D("mounts <".concat(n,">")),F=R.setCart,L=R.setCartState;Y(I,"blur",u),Y(I,"focus",m),Y(I,"escape",f),Y(I,"click",E),Y(I,"loaderror",y),Y(I,"loaderstart",h),Y(I,"networkschange",b),Y(I,"lineitemclick",v),Y(I,"confirm",w),Y(I,"cancel",N),Y(I,"shippingaddresschange",O),Y(I,"shippingratechange",C),"cart"===e?a=function(e){L(e),p&&p(e)}:p&&(a="payButton"===e?p:function(){p(I)}),Y(I,"ready",a),Y(I,"change","cart"===e?function(e){L(e),d&&d(e)}:d),Y(I,"checkout","cart"===e?function(e){L(e),x&&x(e)}:x),t.useLayoutEffect((function(){if(null===T.current&&_&&null!==j.current){var t=_.create(e,i);"cart"===e&&F&&F(t),T.current=t,P(t),t.mount(j.current)}}),[_,i,F]);var M=g(i);return t.useEffect((function(){if(T.current){var e=S(i,M,["paymentRequest"]);e&&T.current.update(e)}}),[i,M]),t.useLayoutEffect((function(){return function(){T.current&&(T.current.destroy(),T.current=null)}}),[]),t.createElement("div",{id:o,className:s,ref:j})};return a.propTypes={id:h.string,className:h.string,onChange:h.func,onBlur:h.func,onFocus:h.func,onReady:h.func,onEscape:h.func,onClick:h.func,onLoadError:h.func,onLoaderStart:h.func,onNetworksChange:h.func,onCheckout:h.func,onLineItemClick:h.func,onConfirm:h.func,onCancel:h.func,onShippingAddressChange:h.func,onShippingRateChange:h.func,options:h.object},a.displayName=n,a.__elementType=e,a},K="undefined"==typeof window,W=q("auBankAccount",K),$=q("card",K),z=q("cardNumber",K),J=q("cardExpiry",K),G=q("cardCvc",K),H=q("fpxBank",K),Q=q("iban",K),V=q("idealBank",K),X=q("p24Bank",K),Z=q("epsBank",K),ee=q("payment",K),te=q("payButton",K),re=q("paymentRequestButton",K),ne=q("linkAuthentication",K),ae=q("address",K),oe=q("shippingAddress",K),ce=q("cart",K),se=q("paymentMethodMessaging",K),le=q("affirmMessage",K),ie=q("afterpayClearpayMessage",K);e.AddressElement=ae,e.AffirmMessageElement=le,e.AfterpayClearpayMessageElement=ie,e.AuBankAccountElement=W,e.CardCvcElement=G,e.CardElement=$,e.CardExpiryElement=J,e.CardNumberElement=z,e.CartElement=ce,e.Elements=j,e.ElementsConsumer=U,e.EpsBankElement=Z,e.FpxBankElement=H,e.IbanElement=Q,e.IdealBankElement=V,e.LinkAuthenticationElement=ne,e.P24BankElement=X,e.PayButtonElement=te,e.PaymentElement=ee,e.PaymentMethodMessagingElement=se,e.PaymentRequestButtonElement=re,e.ShippingAddressElement=oe,e.useCartElement=L,e.useCartElementState=M,e.useElements=R,e.useStripe=F,Object.defineProperty(e,"__esModule",{value:!0})}(t,r(758))},8814:function(e,t){"use strict";function r(e){return r="function"==typeof Symbol&&"symbol"==typeof Symbol.iterator?function(e){return typeof e}:function(e){return e&&"function"==typeof Symbol&&e.constructor===Symbol&&e!==Symbol.prototype?"symbol":typeof e},r(e)}var n,a="https://js.stripe.com/v3",o=/^https:\/\/js\.stripe\.com\/v3\/?(\?.*)?$/,c="loadStripe.setLoadParameters was called but an existing Stripe.js script already exists in the document; existing script parameters will be used",s=null,l=function(e){return null!==s||(s=new Promise((function(t,r){if("undefined"!=typeof window&&"undefined"!=typeof document)if(window.Stripe&&e&&console.warn(c),window.Stripe)t(window.Stripe);else try{var n=function(){for(var e=document.querySelectorAll('script[src^="'.concat(a,'"]')),t=0;t<e.length;t++){var r=e[t];if(o.test(r.src))return r}return null}();n&&e?console.warn(c):n||(n=function(e){var t=e&&!e.advancedFraudSignals?"?advancedFraudSignals=false":"",r=document.createElement("script");r.src="".concat(a).concat(t);var n=document.head||document.body;if(!n)throw new Error("Expected document.body not to be null. Stripe.js requires a <body> element.");return n.appendChild(r),r}(e)),n.addEventListener("load",(function(){window.Stripe?t(window.Stripe):r(new Error("Stripe.js not available"))})),n.addEventListener("error",(function(){r(new Error("Failed to load Stripe.js"))}))}catch(s){return void r(s)}else t(null)}))),s},i=function(e){var t="invalid load parameters; expected object of shape\n\n    {advancedFraudSignals: boolean}\n\nbut received\n\n    ".concat(JSON.stringify(e),"\n");if(null===e||"object"!==r(e))throw new Error(t);if(1===Object.keys(e).length&&"boolean"==typeof e.advancedFraudSignals)return e;throw new Error(t)},u=!1,m=function(){for(var e=arguments.length,t=new Array(e),r=0;r<e;r++)t[r]=arguments[r];u=!0;var a=Date.now();return l(n).then((function(e){return function(e,t,r){if(null===e)return null;var n=e.apply(void 0,t);return function(e,t){e&&e._registerWrapper&&e._registerWrapper({name:"stripe-js",version:"1.54.2",startTime:t})}(n,r),n}(e,t,a)}))};m.setLoadParameters=function(e){if(u&&n){var t=i(e);if(Object.keys(t).reduce((function(t,r){var a;return t&&e[r]===(null===(a=n)||void 0===a?void 0:a[r])}),!0))return}if(u)throw new Error("You cannot change load parameters after calling loadStripe");n=i(e)}},8755:function(e,t,r){r(8814)},8801:function(e,t,r){"use strict";r.d(t,{A:function(){return d}});var n=r(758),a=r(9932),o=r(67),c=r(7898),s=r(3619),l=r(7174);r(8755);var i=n.createContext(null);function u(e,t={}){let r=(0,n.useContext)(i)??{client:(0,l.getDefaultClient)()},{client:a=r.client,extraData:o,onError:c,onSuccess:u,origin:p}=t,{stripe:d}=a,f=(0,n.useMemo)((()=>d?.elements().getElement(s.CardElement)),[d]);return async function(t){let r=function(e){return"preventDefault"in e&&"function"==typeof e.preventDefault}(t)?function(e){e.preventDefault();let t=e.currentTarget;if("FORM"!=t.tagName)throw new Error("submit was triggered for a non-form element");return new FormData(t)}(t):t;if("object"==typeof o)for(let[e,a]of Object.entries(o)){let t;t="function"==typeof a?await a():a,void 0!==t&&(0,l.appendExtraData)(r,e,t)}let n=await a.submitForm(e,r,{endpoint:p,clientName:"@formspree/react@2.5.1",createPaymentMethod:d&&f?()=>d.createPaymentMethod({type:"card",card:f,billing_details:m(r)}):void 0});(0,l.isSubmissionError)(n)?c?.(n):u?.(n)}}function m(e){let t={address:p(e)};for(let r of["name","email","phone"]){let n=e instanceof FormData?e.get(r):e[r];n&&"string"==typeof n&&(t[r]=n)}return t}function p(e){let t={};for(let[r,n]of[["address_line1","line1"],["address_line2","line2"],["address_city","city"],["address_country","country"],["address_state","state"],["address_postal_code","postal_code"]]){let a=e instanceof FormData?e.get(r):e[r];a&&"string"==typeof a&&(t[n]=a)}return t}var d=()=>{const{0:e,1:t}=(0,n.useState)(!1),{0:r,1:s}=(0,n.useState)(!1),{0:l,1:i}=(0,n.useState)(!1),{0:m,1:p}=(0,n.useState)(!1),[d,f]=function(e,t={}){let[r,a]=(0,n.useState)(null),[o,c]=(0,n.useState)(null),[s,l]=(0,n.useState)(!1),[i,m]=(0,n.useState)(!1);if(!e)throw new Error('You must provide a form key or hashid (e.g. useForm("myForm") or useForm("123xyz")');let p=u(e,{client:t.client,extraData:t.data,onError(e){a(e),l(!1),m(!1)},onSuccess(e){a(null),c(e),l(!1),m(!0)},origin:t.endpoint});return[{errors:r,result:o,submitting:s,succeeded:i},async function(e){l(!0),await p(e)},function(){a(null),c(null),l(!1),m(!1)}]}("mqkrbazg"),E="person-has-inquired";(0,n.useEffect)((()=>{if(window){"true"===window.localStorage.getItem(E)&&p(!0)}}),[]);const y=e=>{i(!0),console.error(e);const r=null==e?void 0:e.formErrors.map((e=>{let{message:t}=e;return t})).join(". ");null!=e&&e.formErrors?t(r):t(e)};return d.errors&&!e&&y(d.errors),d.succeeded&&!r&&s("Thank you, your inquiry has been submitted."),n.createElement(o.l,{backgroundImage:"https://res.cloudinary.com/dtweazqf2/image/upload/q_auto,f_auto/v1709314082/pushups_wflq0c.jpg"},n.createElement("form",{onSubmit:e=>{e.preventDefault();try{f(e),p(!0),null===(t=window)||void 0===t||t.localStorage.setItem(E,"true")}catch(r){y(r)}var t},className:"bg-black/40 text-white flex flex-col p-4 items-center rounded-md"},n.createElement("h2",{className:"text-sm sm:text-md md:text-base mb-4 underline"},"STUDENT INQUIRY"),n.createElement("div",{className:"mb-4 grid grid-cols-1 md:gap-4 md:grid-cols-2"},n.createElement("div",{className:"flex flex-col col-start-1 col-end-2"},n.createElement("input",{className:"px-8 py-2 mb-2 rounded bg-black/30 placeholder-white text-sm md:text-md",type:"text",placeholder:"first name",name:"First name:",minLength:3,required:!0}),n.createElement("input",{className:"px-8 py-2 mb-2 rounded bg-black/30 placeholder-white text-sm md:text-md",type:"text",placeholder:"last name",name:"Last name:",minLength:3,required:!0}),n.createElement("input",{className:"px-8 py-2 mb-2 rounded bg-black/30 placeholder-white text-sm md:text-md",type:"tel",placeholder:"phone number",name:"Phone number:",minLength:10,required:!0}),n.createElement("div",{className:"flex flex-col items-center w-full"},n.createElement("input",{className:"w-full px-8 py-2 mb-2 rounded bg-black/30 placeholder-white text-sm md:text-md",type:"email",placeholder:"your email",name:"Email address:",minLength:9,required:!0}),n.createElement("p",{className:"mb-2 md:mb-0 text-xs text-white"},"(Your email will only be used for responding to your inquiry)"))),n.createElement("div",{className:"col-start-1 col-end-2 md:col-start-2 md:col-end-3 flex flex-col"},n.createElement("label",{htmlFor:"email_message",className:"mb-2 text-sm md:text-md text-white"},"Have you trained in martial arts before? Which arts are you interested in at AMMA?"),n.createElement("textarea",{id:"email_message",className:"flex flex-grow min-h-[120px] px-8 py-2 rounded bg-black/30 placeholder-white resize-none text-sm md:text-md",placeholder:"enter your message",name:"Message:",minLength:9,maxLength:500,required:!0}))),n.createElement("div",{className:"flex flex-col items-center "},(e||r)&&n.createElement("div",{className:"max-w-[200px] bg-black/30 py-2 px-4 mb-4 rounded-lg text-sm sm:text-md"},e&&n.createElement("p",{className:"text-red"},""+e),r&&n.createElement("p",null,r)),n.createElement(a.Button,{className:"flex items-center",placeholder:"subscribe",type:"submit",value:"subscribe",disabled:l||m||d.submitting},d.submitting&&n.createElement("div",{className:"h-4 w-4 mr-4"},n.createElement(c.k,null)),"Submit"))))}},5442:function(e,t,r){"use strict";var n=r(758);t.A=()=>n.createElement("div",{className:"flex h-72 sm:h-96 w-full overflow-x-scroll rounded-lg",style:{background:"top / cover no-repeat url(https://res.cloudinary.com/dtweazqf2/image/upload/q_auto,f_auto,o_50/v1696165783/turny_kick_j5zrst.jpg)"}},n.createElement("div",{className:"flex h-full w-full p-4 pb-8 min-w-[650px] min-h-[450px] sm:min-h-[300px] items-center justify-start bg-black/50 rounded-lg"},n.createElement("table",{"aria-label":"class schedule",className:"h-full w-full rounded-lg text-white"},n.createElement("caption",{className:"text-sm sm:text-md md:text-base underline mb-1 pt-8 mx-auto"},"SCHEDULE"),n.createElement("tr",{className:"text-xs"},n.createElement("th",{className:"text-end",scope:"col"},"WEEK DAY"),n.createElement("th",{scope:"col"},n.createElement("p",null,"HAP KI DO"),n.createElement("p",null,"(ages 10+)")),n.createElement("th",{scope:"col"},n.createElement("p",null,"TAE KWON DO"),n.createElement("p",null,"Adults")),n.createElement("th",{scope:"col"},n.createElement("p",null,"TAE KWON DO"),n.createElement("p",null,"Kids (ages 5-12)")),n.createElement("th",{scope:"col"},n.createElement("p",null,"KICK BOXING"),n.createElement("p",null,"Adults")),n.createElement("th",{scope:"col"},n.createElement("p",null,"KICK BOXING"),n.createElement("p",null,"Kids (ages 8-12)")),n.createElement("th",{scope:"col"},n.createElement("p",null,"TODDLERS"),n.createElement("p",null,"(ages 3-4)"))),n.createElement("tr",{className:"text-xs"},n.createElement("th",{className:"text-end",scope:"row"},"MONDAY"),n.createElement("td",{className:"text-center p-1"},"-"),n.createElement("td",{className:"text-center p-1"},"7:30pm - 8:30pm"),n.createElement("td",{className:"text-center p-1"},"6:15pm - 7:15pm"),n.createElement("td",{className:"text-center p-1"},"5:00pm - 6:00pm"),n.createElement("td",{className:"text-center p-1"},"-"),n.createElement("td",{className:"text-center p-1"},"-")),n.createElement("tr",{className:"text-xs"},n.createElement("th",{className:"text-end",scope:"row"},"TUESDAY"),n.createElement("td",{className:"text-center p-1"},"6:15pm - 7:45pm"),n.createElement("td",{className:"text-center p-1"},"-"),n.createElement("td",{className:"text-center p-1"},"-"),n.createElement("td",{className:"text-center p-1"},"-"),n.createElement("td",{className:"text-center p-1"},"-"),n.createElement("td",{className:"text-center p-1"},"-")),n.createElement("tr",{className:"text-xs"},n.createElement("th",{className:"text-end",scope:"row"},"WEDNESDAY"),n.createElement("td",{className:"text-center p-1"},"-"),n.createElement("td",{className:"text-center p-1"},"7:30pm - 8:30pm"),n.createElement("td",{className:"text-center p-1"},"6:15pm - 7:15pm"),n.createElement("td",{className:"text-center p-1"},"5:00pm - 6:00pm"),n.createElement("td",{className:"text-center p-1"},"-"),n.createElement("td",{className:"text-center p-1"},"-")),n.createElement("tr",{className:"text-xs"},n.createElement("th",{className:"text-end",scope:"row"},"THURSDAY"),n.createElement("td",{className:"text-center p-1"},"6:15pm - 7:45pm"),n.createElement("td",{className:"text-center p-1"},"-"),n.createElement("td",{className:"text-center p-1"},"-"),n.createElement("td",{className:"text-center p-1"},"-"),n.createElement("td",{className:"text-center p-1"},"5:00pm - 6:00pm"),n.createElement("td",{className:"text-center p-1"},"-")),n.createElement("tr",{className:"text-xs"},n.createElement("th",{className:"text-end",scope:"row"},"FRIDAY"),n.createElement("td",{className:"text-center p-1"},"-"),n.createElement("td",{className:"text-center p-1"},"7:30pm - 8:30pm"),n.createElement("td",{className:"text-center p-1"},"6:15pm - 7:15pm"),n.createElement("td",{className:"text-center p-1"},"5:00pm - 6:00pm"),n.createElement("td",{className:"text-center p-1"},"-"),n.createElement("td",{className:"text-center p-1"},"-")),n.createElement("tr",{className:"text-xs"},n.createElement("th",{className:"text-end",scope:"row"},"SATURDAY"),n.createElement("td",{className:"text-center p-1"},"-"),n.createElement("td",{className:"text-center p-1"},"-"),n.createElement("td",{className:"text-center p-1"},"-"),n.createElement("td",{className:"text-center p-1"},"-"),n.createElement("td",{className:"text-center p-1"},"-"),n.createElement("td",{className:"text-center p-1"},"11:00am - 12:00pm")),n.createElement("tr",{className:"text-xs"},n.createElement("th",{className:"text-end",scope:"row"},"SUNDAY"),n.createElement("td",{className:"text-center p-1"},"-"),n.createElement("td",{className:"text-center p-1"},"-"),n.createElement("td",{className:"text-center p-1"},"-"),n.createElement("td",{className:"text-center p-1"},"-"),n.createElement("td",{className:"text-center p-1"},"-"),n.createElement("td",{className:"text-center p-1"},"-")))))}}]);
//# sourceMappingURL=055487d2b3df75a9c43b4c5db7818ff7cd204675-ef77972f6d6a8472d498.js.map