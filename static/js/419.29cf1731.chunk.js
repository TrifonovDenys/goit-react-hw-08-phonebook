"use strict";(self.webpackChunkgoit_react_hw_08_phonebook=self.webpackChunkgoit_react_hw_08_phonebook||[]).push([[419],{8419:function(e,t,n){n.r(t),n.d(t,{default:function(){return fe}});var r=n(9434),o=n(3634),a=function(e){return e.contacts.contacts.items},i=function(e){return e.contacts.contacts.isLoading},s=function(e){return e.contacts.contacts.error},c=function(e){return e.filter.filter},l={position:"top-right",autoClose:4e3,hideProgressBar:!1,closeOnClick:!0,pauseOnHover:!0,draggable:!0,progress:void 0,theme:"dark"},u=n(4942),d=n(9439),f=n(1413);function m(e,t){if(null==e)return{};var n,r,o=function(e,t){if(null==e)return{};var n,r,o={},a=Object.keys(e);for(r=0;r<a.length;r++)n=a[r],t.indexOf(n)>=0||(o[n]=e[n]);return o}(e,t);if(Object.getOwnPropertySymbols){var a=Object.getOwnPropertySymbols(e);for(r=0;r<a.length;r++)n=a[r],t.indexOf(n)>=0||Object.prototype.propertyIsEnumerable.call(e,n)&&(o[n]=e[n])}return o}var p=n(3433),g=n(2791);function v(e){var t,n,r="";if("string"==typeof e||"number"==typeof e)r+=e;else if("object"==typeof e)if(Array.isArray(e))for(t=0;t<e.length;t++)e[t]&&(n=v(e[t]))&&(r&&(r+=" "),r+=n);else for(t in e)e[t]&&(r&&(r+=" "),r+=t);return r}var h=function(){for(var e,t,n=0,r="";n<arguments.length;)(e=arguments[n++])&&(t=v(e))&&(r&&(r+=" "),r+=t);return r},y=["theme","type"],b=["delay","staleId"],E=function(e){return"number"==typeof e&&!isNaN(e)},x=function(e){return"string"==typeof e},T=function(e){return"function"==typeof e},C=function(e){return x(e)||T(e)?e:null},w=function(e){return(0,g.isValidElement)(e)||x(e)||T(e)||E(e)};function O(e){var t=e.enter,n=e.exit,r=e.appendPosition,o=void 0!==r&&r,a=e.collapse,i=void 0===a||a,s=e.collapseDuration,c=void 0===s?300:s;return function(e){var r=e.children,a=e.position,s=e.preventExitTransition,l=e.done,u=e.nodeRef,d=e.isIn,f=o?"".concat(t,"--").concat(a):t,m=o?"".concat(n,"--").concat(a):n,v=(0,g.useRef)(0);return(0,g.useLayoutEffect)((function(){var e,t=u.current,n=f.split(" "),r=function e(r){var o;r.target===u.current&&(t.dispatchEvent(new Event("d")),t.removeEventListener("animationend",e),t.removeEventListener("animationcancel",e),0===v.current&&"animationcancel"!==r.type&&(o=t.classList).remove.apply(o,(0,p.Z)(n)))};(e=t.classList).add.apply(e,(0,p.Z)(n)),t.addEventListener("animationend",r),t.addEventListener("animationcancel",r)}),[]),(0,g.useEffect)((function(){var e=u.current,t=function t(){e.removeEventListener("animationend",t),i?function(e,t,n){void 0===n&&(n=300);var r=e.scrollHeight,o=e.style;requestAnimationFrame((function(){o.minHeight="initial",o.height=r+"px",o.transition="all ".concat(n,"ms"),requestAnimationFrame((function(){o.height="0",o.padding="0",o.margin="0",setTimeout(t,n)}))}))}(e,l,c):l()};d||(s?t():(v.current=1,e.className+=" ".concat(m),e.addEventListener("animationend",t)))}),[d]),g.createElement(g.Fragment,null,r)}}function N(e,t){return null!=e?{content:e.content,containerId:e.props.containerId,id:e.props.toastId,theme:e.props.theme,type:e.props.type,data:e.props.data||{},isLoading:e.props.isLoading,icon:e.props.icon,status:t}:{}}var _={list:new Map,emitQueue:new Map,on:function(e,t){return this.list.has(e)||this.list.set(e,[]),this.list.get(e).push(t),this},off:function(e,t){if(t){var n=this.list.get(e).filter((function(e){return e!==t}));return this.list.set(e,n),this}return this.list.delete(e),this},cancelEmit:function(e){var t=this.emitQueue.get(e);return t&&(t.forEach(clearTimeout),this.emitQueue.delete(e)),this},emit:function(e){var t=arguments,n=this;this.list.has(e)&&this.list.get(e).forEach((function(r){var o=setTimeout((function(){r.apply(void 0,(0,p.Z)([].slice.call(t,1)))}),0);n.emitQueue.has(e)||n.emitQueue.set(e,[]),n.emitQueue.get(e).push(o)}))}},L=function(e){var t=e.theme,n=e.type,r=m(e,y);return g.createElement("svg",(0,f.Z)({viewBox:"0 0 24 24",width:"100%",height:"100%",fill:"colored"===t?"currentColor":"var(--toastify-icon-color-".concat(n,")")},r))},I={info:function(e){return g.createElement(L,(0,f.Z)({},e),g.createElement("path",{d:"M12 0a12 12 0 1012 12A12.013 12.013 0 0012 0zm.25 5a1.5 1.5 0 11-1.5 1.5 1.5 1.5 0 011.5-1.5zm2.25 13.5h-4a1 1 0 010-2h.75a.25.25 0 00.25-.25v-4.5a.25.25 0 00-.25-.25h-.75a1 1 0 010-2h1a2 2 0 012 2v4.75a.25.25 0 00.25.25h.75a1 1 0 110 2z"}))},warning:function(e){return g.createElement(L,(0,f.Z)({},e),g.createElement("path",{d:"M23.32 17.191L15.438 2.184C14.728.833 13.416 0 11.996 0c-1.42 0-2.733.833-3.443 2.184L.533 17.448a4.744 4.744 0 000 4.368C1.243 23.167 2.555 24 3.975 24h16.05C22.22 24 24 22.044 24 19.632c0-.904-.251-1.746-.68-2.44zm-9.622 1.46c0 1.033-.724 1.823-1.698 1.823s-1.698-.79-1.698-1.822v-.043c0-1.028.724-1.822 1.698-1.822s1.698.79 1.698 1.822v.043zm.039-12.285l-.84 8.06c-.057.581-.408.943-.897.943-.49 0-.84-.367-.896-.942l-.84-8.065c-.057-.624.25-1.095.779-1.095h1.91c.528.005.84.476.784 1.1z"}))},success:function(e){return g.createElement(L,(0,f.Z)({},e),g.createElement("path",{d:"M12 0a12 12 0 1012 12A12.014 12.014 0 0012 0zm6.927 8.2l-6.845 9.289a1.011 1.011 0 01-1.43.188l-4.888-3.908a1 1 0 111.25-1.562l4.076 3.261 6.227-8.451a1 1 0 111.61 1.183z"}))},error:function(e){return g.createElement(L,(0,f.Z)({},e),g.createElement("path",{d:"M11.983 0a12.206 12.206 0 00-8.51 3.653A11.8 11.8 0 000 12.207 11.779 11.779 0 0011.8 24h.214A12.111 12.111 0 0024 11.791 11.766 11.766 0 0011.983 0zM10.5 16.542a1.476 1.476 0 011.449-1.53h.027a1.527 1.527 0 011.523 1.47 1.475 1.475 0 01-1.449 1.53h-.027a1.529 1.529 0 01-1.523-1.47zM11 12.5v-6a1 1 0 012 0v6a1 1 0 11-2 0z"}))},spinner:function(){return g.createElement("div",{className:"Toastify__spinner"})}};function j(e){var t=(0,g.useReducer)((function(e){return e+1}),0),n=(0,d.Z)(t,2)[1],r=(0,g.useState)([]),o=(0,d.Z)(r,2),a=o[0],i=o[1],s=(0,g.useRef)(null),c=(0,g.useRef)(new Map).current,l=function(e){return-1!==a.indexOf(e)},u=(0,g.useRef)({toastKey:1,displayedToast:0,count:0,queue:[],props:e,containerId:null,isToastActive:l,getToast:function(e){return c.get(e)}}).current;function v(e){var t=e.containerId;!u.props.limit||t&&u.containerId!==t||(u.count-=u.queue.length,u.queue=[])}function h(e){i((function(t){return null==e?[]:t.filter((function(t){return t!==e}))}))}function y(){var e=u.queue.shift();L(e.toastContent,e.toastProps,e.staleId)}function O(e,t){var r=t.delay,o=t.staleId,a=m(t,b);if(w(e)&&!function(e){return!s.current||u.props.enableMultiContainer&&e.containerId!==u.props.containerId||c.has(e.toastId)&&null==e.updateId}(a)){var i=a.toastId,l=a.updateId,p=a.data,v=u.props,O=function(){return h(i)},j=null==l;j&&u.count++;var Z,k,R=(0,f.Z)((0,f.Z)((0,f.Z)({},v),{},{style:v.toastStyle,key:u.toastKey++},Object.fromEntries(Object.entries(a).filter((function(e){var t=(0,d.Z)(e,2);t[0];return null!=t[1]})))),{},{toastId:i,updateId:l,data:p,closeToast:O,isIn:!1,className:C(a.className||v.toastClassName),bodyClassName:C(a.bodyClassName||v.bodyClassName),progressClassName:C(a.progressClassName||v.progressClassName),autoClose:!a.isLoading&&(Z=a.autoClose,k=v.autoClose,!1===Z||E(Z)&&Z>0?Z:k),deleteToast:function(){var e=N(c.get(i),"removed");c.delete(i),_.emit(4,e);var t=u.queue.length;if(u.count=null==i?u.count-u.displayedToast:u.count-1,u.count<0&&(u.count=0),t>0){var r=null==i?u.props.limit:1;if(1===t||1===r)u.displayedToast++,y();else{var o=r>t?t:r;u.displayedToast=o;for(var a=0;a<o;a++)y()}}else n()}});R.iconOut=function(e){var t=e.theme,n=e.type,r=e.isLoading,o=e.icon,a=null,i={theme:t,type:n};return!1===o||(T(o)?a=o(i):(0,g.isValidElement)(o)?a=(0,g.cloneElement)(o,i):x(o)||E(o)?a=o:r?a=I.spinner():function(e){return e in I}(n)&&(a=I[n](i))),a}(R),T(a.onOpen)&&(R.onOpen=a.onOpen),T(a.onClose)&&(R.onClose=a.onClose),R.closeButton=v.closeButton,!1===a.closeButton||w(a.closeButton)?R.closeButton=a.closeButton:!0===a.closeButton&&(R.closeButton=!w(v.closeButton)||v.closeButton);var P=e;(0,g.isValidElement)(e)&&!x(e.type)?P=(0,g.cloneElement)(e,{closeToast:O,toastProps:R,data:p}):T(e)&&(P=e({closeToast:O,toastProps:R,data:p})),v.limit&&v.limit>0&&u.count>v.limit&&j?u.queue.push({toastContent:P,toastProps:R,staleId:o}):E(r)?setTimeout((function(){L(P,R,o)}),r):L(P,R,o)}}function L(e,t,n){var r=t.toastId;n&&c.delete(n);var o={content:e,props:t};c.set(r,o),i((function(e){return[].concat((0,p.Z)(e),[r]).filter((function(e){return e!==n}))})),_.emit(4,N(o,null==o.props.updateId?"added":"updated"))}return(0,g.useEffect)((function(){return u.containerId=e.containerId,_.cancelEmit(3).on(0,O).on(1,(function(e){return s.current&&h(e)})).on(5,v).emit(2,u),function(){c.clear(),_.emit(3,u)}}),[]),(0,g.useEffect)((function(){u.props=e,u.isToastActive=l,u.displayedToast=a.length})),{getToastToRender:function(t){var n=new Map,r=Array.from(c.values());return e.newestOnTop&&r.reverse(),r.forEach((function(e){var t=e.props.position;n.has(t)||n.set(t,[]),n.get(t).push(e)})),Array.from(n,(function(e){return t(e[0],e[1])}))},containerRef:s,isToastActive:l}}function Z(e){return e.targetTouches&&e.targetTouches.length>=1?e.targetTouches[0].clientX:e.clientX}function k(e){return e.targetTouches&&e.targetTouches.length>=1?e.targetTouches[0].clientY:e.clientY}function R(e){var t=(0,g.useState)(!1),n=(0,d.Z)(t,2),r=n[0],o=n[1],a=(0,g.useState)(!1),i=(0,d.Z)(a,2),s=i[0],c=i[1],l=(0,g.useRef)(null),u=(0,g.useRef)({start:0,x:0,y:0,delta:0,removalDistance:0,canCloseOnClick:!0,canDrag:!1,boundingRect:null,didMove:!1}).current,f=(0,g.useRef)(e),m=e.autoClose,p=e.pauseOnHover,v=e.closeToast,h=e.onClick,y=e.closeOnClick;function b(t){if(e.draggable){"touchstart"===t.nativeEvent.type&&t.nativeEvent.preventDefault(),u.didMove=!1,document.addEventListener("mousemove",w),document.addEventListener("mouseup",O),document.addEventListener("touchmove",w),document.addEventListener("touchend",O);var n=l.current;u.canCloseOnClick=!0,u.canDrag=!0,u.boundingRect=n.getBoundingClientRect(),n.style.transition="",u.x=Z(t.nativeEvent),u.y=k(t.nativeEvent),"x"===e.draggableDirection?(u.start=u.x,u.removalDistance=n.offsetWidth*(e.draggablePercent/100)):(u.start=u.y,u.removalDistance=n.offsetHeight*(80===e.draggablePercent?1.5*e.draggablePercent:e.draggablePercent/100))}}function E(t){if(u.boundingRect){var n=u.boundingRect,r=n.top,o=n.bottom,a=n.left,i=n.right;"touchend"!==t.nativeEvent.type&&e.pauseOnHover&&u.x>=a&&u.x<=i&&u.y>=r&&u.y<=o?C():x()}}function x(){o(!0)}function C(){o(!1)}function w(t){var n=l.current;u.canDrag&&n&&(u.didMove=!0,r&&C(),u.x=Z(t),u.y=k(t),u.delta="x"===e.draggableDirection?u.x-u.start:u.y-u.start,u.start!==u.x&&(u.canCloseOnClick=!1),n.style.transform="translate".concat(e.draggableDirection,"(").concat(u.delta,"px)"),n.style.opacity=""+(1-Math.abs(u.delta/u.removalDistance)))}function O(){document.removeEventListener("mousemove",w),document.removeEventListener("mouseup",O),document.removeEventListener("touchmove",w),document.removeEventListener("touchend",O);var t=l.current;if(u.canDrag&&u.didMove&&t){if(u.canDrag=!1,Math.abs(u.delta)>u.removalDistance)return c(!0),void e.closeToast();t.style.transition="transform 0.2s, opacity 0.2s",t.style.transform="translate".concat(e.draggableDirection,"(0)"),t.style.opacity="1"}}(0,g.useEffect)((function(){f.current=e})),(0,g.useEffect)((function(){return l.current&&l.current.addEventListener("d",x,{once:!0}),T(e.onOpen)&&e.onOpen((0,g.isValidElement)(e.children)&&e.children.props),function(){var e=f.current;T(e.onClose)&&e.onClose((0,g.isValidElement)(e.children)&&e.children.props)}}),[]),(0,g.useEffect)((function(){return e.pauseOnFocusLoss&&(document.hasFocus()||C(),window.addEventListener("focus",x),window.addEventListener("blur",C)),function(){e.pauseOnFocusLoss&&(window.removeEventListener("focus",x),window.removeEventListener("blur",C))}}),[e.pauseOnFocusLoss]);var N={onMouseDown:b,onTouchStart:b,onMouseUp:E,onTouchEnd:E};return m&&p&&(N.onMouseEnter=C,N.onMouseLeave=x),y&&(N.onClick=function(e){h&&h(e),u.canCloseOnClick&&v()}),{playToast:x,pauseToast:C,isRunning:r,preventExitTransition:s,toastRef:l,eventHandlers:N}}function P(e){var t=e.closeToast,n=e.theme,r=e.ariaLabel,o=void 0===r?"close":r;return g.createElement("button",{className:"Toastify__close-button Toastify__close-button--".concat(n),type:"button",onClick:function(e){e.stopPropagation(),t(e)},"aria-label":o},g.createElement("svg",{"aria-hidden":"true",viewBox:"0 0 14 16"},g.createElement("path",{fillRule:"evenodd",d:"M7.71 8.23l3.75 3.75-1.48 1.48-3.75-3.75-3.75 3.75L1 11.98l3.75-3.75L1 4.48 2.48 3l3.75 3.75L9.98 3l1.48 1.48-3.75 3.75z"})))}function M(e){var t=e.delay,n=e.isRunning,r=e.closeToast,o=e.type,a=void 0===o?"default":o,i=e.hide,s=e.className,c=e.style,l=e.controlledProgress,d=e.progress,m=e.rtl,p=e.isIn,v=e.theme,y=i||l&&0===d,b=(0,f.Z)((0,f.Z)({},c),{},{animationDuration:"".concat(t,"ms"),animationPlayState:n?"running":"paused",opacity:y?0:1});l&&(b.transform="scaleX(".concat(d,")"));var E=h("Toastify__progress-bar",l?"Toastify__progress-bar--controlled":"Toastify__progress-bar--animated","Toastify__progress-bar-theme--".concat(v),"Toastify__progress-bar--".concat(a),{"Toastify__progress-bar--rtl":m}),x=T(s)?s({rtl:m,type:a,defaultClassName:E}):h(E,s);return g.createElement("div",(0,u.Z)({role:"progressbar","aria-hidden":y?"true":"false","aria-label":"notification timer",className:x,style:b},l&&d>=1?"onTransitionEnd":"onAnimationEnd",l&&d<1?null:function(){p&&r()}))}var B=function(e){var t=R(e),n=t.isRunning,r=t.preventExitTransition,o=t.toastRef,a=t.eventHandlers,i=e.closeButton,s=e.children,c=e.autoClose,l=e.onClick,u=e.type,d=e.hideProgressBar,m=e.closeToast,p=e.transition,v=e.position,y=e.className,b=e.style,E=e.bodyClassName,x=e.bodyStyle,C=e.progressClassName,w=e.progressStyle,O=e.updateId,N=e.role,_=e.progress,L=e.rtl,I=e.toastId,j=e.deleteToast,Z=e.isIn,k=e.isLoading,B=e.iconOut,D=e.closeOnClick,A=e.theme,S=h("Toastify__toast","Toastify__toast-theme--".concat(A),"Toastify__toast--".concat(u),{"Toastify__toast--rtl":L},{"Toastify__toast--close-on-click":D}),z=T(y)?y({rtl:L,position:v,type:u,defaultClassName:S}):h(S,y),F=!!_||!c,q={closeToast:m,type:u,theme:A},H=null;return!1===i||(H=T(i)?i(q):(0,g.isValidElement)(i)?(0,g.cloneElement)(i,q):P(q)),g.createElement(p,{isIn:Z,done:j,position:v,preventExitTransition:r,nodeRef:o},g.createElement("div",(0,f.Z)((0,f.Z)({id:I,onClick:l,className:z},a),{},{style:b,ref:o}),g.createElement("div",(0,f.Z)((0,f.Z)({},Z&&{role:N}),{},{className:T(E)?E({type:u}):h("Toastify__toast-body",E),style:x}),null!=B&&g.createElement("div",{className:h("Toastify__toast-icon",{"Toastify--animate-icon Toastify__zoom-enter":!k})},B),g.createElement("div",null,s)),H,g.createElement(M,(0,f.Z)((0,f.Z)({},O&&!F?{key:"pb-".concat(O)}:{}),{},{rtl:L,theme:A,delay:c,isRunning:n,isIn:Z,closeToast:m,hide:d,type:u,style:w,className:C,controlledProgress:F,progress:_||0}))))},D=function(e,t){return void 0===t&&(t=!1),{enter:"Toastify--animate Toastify__".concat(e,"-enter"),exit:"Toastify--animate Toastify__".concat(e,"-exit"),appendPosition:t}},A=O(D("bounce",!0)),S=(O(D("slide",!0)),O(D("zoom")),O(D("flip")),(0,g.forwardRef)((function(e,t){var n=j(e),r=n.getToastToRender,o=n.containerRef,a=n.isToastActive,i=e.className,s=e.style,c=e.rtl,l=e.containerId;function u(e){var t=h("Toastify__toast-container","Toastify__toast-container--".concat(e),{"Toastify__toast-container--rtl":c});return T(i)?i({position:e,rtl:c,defaultClassName:t}):h(t,C(i))}return(0,g.useEffect)((function(){t&&(t.current=o.current)}),[]),g.createElement("div",{ref:o,className:"Toastify",id:l},r((function(e,t){var n=t.length?(0,f.Z)({},s):(0,f.Z)((0,f.Z)({},s),{},{pointerEvents:"none"});return g.createElement("div",{className:u(e),style:n,key:"container-".concat(e)},t.map((function(e,n){var r=e.content,o=e.props;return g.createElement(B,(0,f.Z)((0,f.Z)({},o),{},{isIn:a(o.toastId),style:(0,f.Z)((0,f.Z)({},o.style),{},{"--nth":n+1,"--len":t.length}),key:"toast-".concat(o.key)}),r)})))})))})));S.displayName="ToastContainer",S.defaultProps={position:"top-right",transition:A,autoClose:5e3,closeButton:P,pauseOnHover:!0,pauseOnFocusLoss:!0,closeOnClick:!0,draggable:!0,draggablePercent:80,draggableDirection:"x",role:"alert",theme:"light"};var z,F=new Map,q=[],H=1;function Q(){return""+H++}function V(e){return e&&(x(e.toastId)||E(e.toastId))?e.toastId:Q()}function W(e,t){return F.size>0?_.emit(0,e,t):q.push({content:e,options:t}),t.toastId}function K(e,t){return(0,f.Z)((0,f.Z)({},t),{},{type:t&&t.type||e,toastId:V(t)})}function G(e){return function(t,n){return W(t,K(e,n))}}function U(e,t){return W(e,K("default",t))}U.loading=function(e,t){return W(e,K("default",(0,f.Z)({isLoading:!0,autoClose:!1,closeOnClick:!1,closeButton:!1,draggable:!1},t)))},U.promise=function(e,t,n){var r,o=t.pending,a=t.error,i=t.success;o&&(r=x(o)?U.loading(o,n):U.loading(o.render,(0,f.Z)((0,f.Z)({},n),o)));var s={isLoading:null,autoClose:null,closeOnClick:null,closeButton:null,draggable:null},c=function(e,t,o){if(null!=t){var a=(0,f.Z)((0,f.Z)((0,f.Z)({type:e},s),n),{},{data:o}),i=x(t)?{render:t}:t;return r?U.update(r,(0,f.Z)((0,f.Z)({},a),i)):U(i.render,(0,f.Z)((0,f.Z)({},a),i)),o}U.dismiss(r)},l=T(e)?e():e;return l.then((function(e){return c("success",i,e)})).catch((function(e){return c("error",a,e)})),l},U.success=G("success"),U.info=G("info"),U.error=G("error"),U.warning=G("warning"),U.warn=U.warning,U.dark=function(e,t){return W(e,K("default",(0,f.Z)({theme:"dark"},t)))},U.dismiss=function(e){F.size>0?_.emit(1,e):q=q.filter((function(t){return null!=e&&t.options.toastId!==e}))},U.clearWaitingQueue=function(e){return void 0===e&&(e={}),_.emit(5,e)},U.isActive=function(e){var t=!1;return F.forEach((function(n){n.isToastActive&&n.isToastActive(e)&&(t=!0)})),t},U.update=function(e,t){void 0===t&&(t={}),setTimeout((function(){var n=function(e,t){var n=t.containerId,r=F.get(n||z);return r&&r.getToast(e)}(e,t);if(n){var r=n.props,o=n.content,a=(0,f.Z)((0,f.Z)((0,f.Z)({delay:100},r),t),{},{toastId:t.toastId||e,updateId:Q()});a.toastId!==e&&(a.staleId=e);var i=a.render||o;delete a.render,W(i,a)}}),0)},U.done=function(e){U.update(e,{progress:1})},U.onChange=function(e){return _.on(4,e),function(){_.off(4,e)}},U.POSITION={TOP_LEFT:"top-left",TOP_RIGHT:"top-right",TOP_CENTER:"top-center",BOTTOM_LEFT:"bottom-left",BOTTOM_RIGHT:"bottom-right",BOTTOM_CENTER:"bottom-center"},U.TYPE={INFO:"info",SUCCESS:"success",WARNING:"warning",ERROR:"error",DEFAULT:"default"},_.on(2,(function(e){z=e.containerId||e,F.set(z,e),q.forEach((function(e){_.emit(0,e.content,e.options)})),q=[]})).on(3,(function(e){F.delete(e.containerId||e),0===F.size&&_.off(0).off(1).off(5)}));var X=n(5705),Y=n(184),J=function(){var e=(0,r.I0)(),t=(0,r.v9)(a);return(0,Y.jsxs)(Y.Fragment,{children:[(0,Y.jsx)(S,{toastStyle:{fontSize:20,backgroundColor:"rgb(79, 70, 229)"}}),(0,Y.jsx)(X.J9,{children:(0,Y.jsxs)(X.l0,{className:"flex items-end max-w-lg gap-x-3 py-6",onSubmit:function(n){n.preventDefault();var r=n.target;if(t.some((function(e){return e.name===r.elements.name.value})))return r.reset(),U("contact alredy added",l);e((0,o.uK)({name:r.elements.name.value,number:r.elements.number.value})),r.reset(),U("contact added",l)},children:[(0,Y.jsxs)("div",{children:[(0,Y.jsx)("label",{htmlFor:"name",className:"block text-sm font-medium leading-6 text-gray-900"}),(0,Y.jsx)("div",{className:"mt-2",children:(0,Y.jsx)(X.gN,{id:"name",name:"name",type:"text",autoComplete:"name",placeholder:"Name",required:!0,className:"block w-full rounded-md border-0 py-1.5 px-1.5 text-gray-900 shadow-sm ring-1 ring-inset ring-gray-300 placeholder:text-gray-400 focus:ring-2 focus:ring-inset focus:ring-indigo-600 sm:text-sm sm:leading-6"})})]}),(0,Y.jsxs)("div",{children:[(0,Y.jsx)("label",{htmlFor:"number",className:"block text-sm font-medium leading-6 text-gray-900"}),(0,Y.jsx)("div",{className:"mt-2",children:(0,Y.jsx)(X.gN,{id:"number",name:"number",type:"number",autoComplete:"number",placeholder:"Number",required:!0,className:"block w-full rounded-md border-0 py-1.5 px-1.5 text-gray-900 shadow-sm ring-1 ring-inset ring-gray-300 placeholder:text-gray-400 focus:ring-2 focus:ring-inset focus:ring-indigo-600 sm:text-sm sm:leading-6"})})]}),(0,Y.jsx)("div",{children:(0,Y.jsx)("button",{type:"submit",className:"flex w-full justify-center rounded-md bg-indigo-600 px-5 py-1.5 text-sm font-semibold leading-6 text-white shadow-sm hover:bg-indigo-500 focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-indigo-600",children:"Add contact"})})]})})]})},$="ContactList_text__+NWAW",ee=n(9983);function te(e){return(0,ee.w_)({tag:"svg",attr:{viewBox:"0 0 15 15",fill:"none"},child:[{tag:"path",attr:{fillRule:"evenodd",clipRule:"evenodd",d:"M11.7816 4.03157C12.0062 3.80702 12.0062 3.44295 11.7816 3.2184C11.5571 2.99385 11.193 2.99385 10.9685 3.2184L7.50005 6.68682L4.03164 3.2184C3.80708 2.99385 3.44301 2.99385 3.21846 3.2184C2.99391 3.44295 2.99391 3.80702 3.21846 4.03157L6.68688 7.49999L3.21846 10.9684C2.99391 11.193 2.99391 11.557 3.21846 11.7816C3.44301 12.0061 3.80708 12.0061 4.03164 11.7816L7.50005 8.31316L10.9685 11.7816C11.193 12.0061 11.5571 12.0061 11.7816 11.7816C12.0062 11.557 12.0062 11.193 11.7816 10.9684L8.31322 7.49999L11.7816 4.03157Z",fill:"currentColor"}}]})(e)}var ne=function(e){var t=e.contact,n=(0,r.I0)();return(0,Y.jsxs)("li",{className:"min-w-[24.2%] transition-all flex items-center justify-between border-solid border-2 border-indigo-600 p-2 rounded-md bg-white hover:shadow-md",children:[(0,Y.jsxs)("div",{children:[(0,Y.jsxs)("p",{className:$,children:["Name: ",t.name]}),(0,Y.jsxs)("span",{children:["Number: ",t.number]})]}),(0,Y.jsx)("button",{className:"transition-all rounded-md border-solid border-2 border-indigo-600 bg-indigo-600 py-1 px-1 hover:bg-indigo-100 text-white hover:text-black",onClick:function(){return n((0,o.GK)(t.id))},children:(0,Y.jsx)(te,{})})]},t.id)},re=function(){var e=(0,r.v9)(a),t=(0,r.v9)(c),n=e.filter((function(e){return e.name.toLowerCase().includes(t.toLowerCase())||e.number.toLowerCase().includes(t.toLowerCase())}));return(0,Y.jsx)("ul",{className:"flex flex-wrap basis-[22%] gap-y-3.5 gap-x-2.5",children:n&&n.map((function(e){return(0,Y.jsx)(ne,{contact:e},e.id)}))})},oe=n(4808),ae=function(){var e=(0,r.I0)();return(0,Y.jsx)(X.J9,{children:(0,Y.jsx)(X.l0,{className:"w-1/2",children:(0,Y.jsxs)("div",{className:"relative",children:[(0,Y.jsx)("label",{className:"",htmlFor:"filter"}),(0,Y.jsx)(X.gN,{id:"name",className:"block w-full rounded-md border-0 py-1.5 px-1.5 text-gray-900 shadow-sm ring-1 ring-inset ring-gray-300 placeholder:text-gray-400 focus:ring-2 focus:ring-inset focus:ring-indigo-600 sm:text-sm sm:leading-6",name:"filter",type:"text",placeholder:"Search contact",onChange:function(t){t.currentTarget.value?t.currentTarget.parentNode.children[2].classList.remove("hidden"):t.currentTarget.parentNode.children[2].classList.add("hidden"),e((0,oe.W)(t.currentTarget.value))}}),(0,Y.jsx)("div",{className:"hidden absolute right-1 top-1/2 cursor-pointer",onClick:function(t){t.currentTarget.parentNode.children[1].value="",e((0,oe.W)(t.currentTarget.parentNode.children[1].value)),t.currentTarget.classList.add("hidden")},children:(0,Y.jsx)(te,{})})]})})})},ie=function(){return ie=Object.assign||function(e){for(var t,n=1,r=arguments.length;n<r;n++)for(var o in t=arguments[n])Object.prototype.hasOwnProperty.call(t,o)&&(e[o]=t[o]);return e},ie.apply(this,arguments)};var se=function(e){var t=e.animate,n=void 0===t||t,r=e.animateBegin,o=e.backgroundColor,a=void 0===o?"#f5f6f7":o,i=e.backgroundOpacity,s=void 0===i?1:i,c=e.baseUrl,l=void 0===c?"":c,u=e.children,d=e.foregroundColor,f=void 0===d?"#eee":d,m=e.foregroundOpacity,p=void 0===m?1:m,v=e.gradientRatio,h=void 0===v?2:v,y=e.gradientDirection,b=void 0===y?"left-right":y,E=e.uniqueKey,x=e.interval,T=void 0===x?.25:x,C=e.rtl,w=void 0!==C&&C,O=e.speed,N=void 0===O?1.2:O,_=e.style,L=void 0===_?{}:_,I=e.title,j=void 0===I?"Loading...":I,Z=e.beforeMask,k=void 0===Z?null:Z,R=function(e,t){var n={};for(var r in e)Object.prototype.hasOwnProperty.call(e,r)&&t.indexOf(r)<0&&(n[r]=e[r]);if(null!=e&&"function"===typeof Object.getOwnPropertySymbols){var o=0;for(r=Object.getOwnPropertySymbols(e);o<r.length;o++)t.indexOf(r[o])<0&&Object.prototype.propertyIsEnumerable.call(e,r[o])&&(n[r[o]]=e[r[o]])}return n}(e,["animate","animateBegin","backgroundColor","backgroundOpacity","baseUrl","children","foregroundColor","foregroundOpacity","gradientRatio","gradientDirection","uniqueKey","interval","rtl","speed","style","title","beforeMask"]),P=E||Math.random().toString(36).substring(6),M=P+"-diff",B=P+"-animated-diff",D=P+"-aria",A=w?{transform:"scaleX(-1)"}:null,S="0; "+T+"; 1",z=N+"s",F="top-bottom"===b?"rotate(90)":void 0;return(0,g.createElement)("svg",ie({"aria-labelledby":D,role:"img",style:ie(ie({},L),A)},R),j?(0,g.createElement)("title",{id:D},j):null,k&&(0,g.isValidElement)(k)?k:null,(0,g.createElement)("rect",{role:"presentation",x:"0",y:"0",width:"100%",height:"100%",clipPath:"url("+l+"#"+M+")",style:{fill:"url("+l+"#"+B+")"}}),(0,g.createElement)("defs",null,(0,g.createElement)("clipPath",{id:M},u),(0,g.createElement)("linearGradient",{id:B,gradientTransform:F},(0,g.createElement)("stop",{offset:"0%",stopColor:a,stopOpacity:s},n&&(0,g.createElement)("animate",{attributeName:"offset",values:-h+"; "+-h+"; 1",keyTimes:S,dur:z,repeatCount:"indefinite",begin:r})),(0,g.createElement)("stop",{offset:"50%",stopColor:f,stopOpacity:p},n&&(0,g.createElement)("animate",{attributeName:"offset",values:-h/2+"; "+-h/2+"; "+(1+h/2),keyTimes:S,dur:z,repeatCount:"indefinite",begin:r})),(0,g.createElement)("stop",{offset:"100%",stopColor:a,stopOpacity:s},n&&(0,g.createElement)("animate",{attributeName:"offset",values:"0; 0; "+(1+h),keyTimes:S,dur:z,repeatCount:"indefinite",begin:r})))))},ce=function(e){return e.children?(0,g.createElement)(se,ie({},e)):(0,g.createElement)(le,ie({},e))},le=function(e){return(0,g.createElement)(ce,ie({viewBox:"0 0 476 124"},e),(0,g.createElement)("rect",{x:"48",y:"8",width:"88",height:"6",rx:"3"}),(0,g.createElement)("rect",{x:"48",y:"26",width:"52",height:"6",rx:"3"}),(0,g.createElement)("rect",{x:"0",y:"56",width:"410",height:"6",rx:"3"}),(0,g.createElement)("rect",{x:"0",y:"72",width:"380",height:"6",rx:"3"}),(0,g.createElement)("rect",{x:"0",y:"88",width:"178",height:"6",rx:"3"}),(0,g.createElement)("circle",{cx:"20",cy:"20",r:"20"}))},ue=ce,de=function(e){return(0,Y.jsx)(ue,(0,f.Z)((0,f.Z)({speed:2,width:476,height:124,viewBox:"0 0 476 124",backgroundColor:"white",border:"1px solid rgb(79, 70, 229)",foregroundColor:"#ecebeb"},e),{},{children:(0,Y.jsx)("rect",{x:"0",y:"0",rx:"10",ry:"10",width:"250",height:"60"})}))},fe=function(){var e=(0,r.I0)(),t=(0,r.v9)(i),n=(0,r.v9)(s);return(0,g.useEffect)((function(){e((0,o.yF)())}),[e]),(0,Y.jsxs)(Y.Fragment,{children:[(0,Y.jsx)(J,{}),(0,Y.jsx)(ae,{}),(0,Y.jsx)("br",{}),t&&!n?(0,Y.jsx)(de,{}):(0,Y.jsx)(re,{})]})}}}]);
//# sourceMappingURL=419.29cf1731.chunk.js.map