!function(e){var t={};function n(o){if(t[o])return t[o].exports;var i=t[o]={i:o,l:!1,exports:{}};return e[o].call(i.exports,i,i.exports,n),i.l=!0,i.exports}n.m=e,n.c=t,n.d=function(e,t,o){n.o(e,t)||Object.defineProperty(e,t,{enumerable:!0,get:o})},n.r=function(e){"undefined"!=typeof Symbol&&Symbol.toStringTag&&Object.defineProperty(e,Symbol.toStringTag,{value:"Module"}),Object.defineProperty(e,"__esModule",{value:!0})},n.t=function(e,t){if(1&t&&(e=n(e)),8&t)return e;if(4&t&&"object"==typeof e&&e&&e.__esModule)return e;var o=Object.create(null);if(n.r(o),Object.defineProperty(o,"default",{enumerable:!0,value:e}),2&t&&"string"!=typeof e)for(var i in e)n.d(o,i,function(t){return e[t]}.bind(null,i));return o},n.n=function(e){var t=e&&e.__esModule?function(){return e.default}:function(){return e};return n.d(t,"a",t),t},n.o=function(e,t){return Object.prototype.hasOwnProperty.call(e,t)},n.p="",n(n.s=0)}([function(e,t,n){"use strict";function o(e,t){for(var n=0;n<t.length;n++){var o=t[n];o.enumerable=o.enumerable||!1,o.configurable=!0,"value"in o&&(o.writable=!0),Object.defineProperty(e,o.key,o)}}n.r(t);var i=function(){function e(t,n,o){!function(e,t){if(!(e instanceof t))throw new TypeError("Cannot call a class as a function")}(this,e),window.stElement=t,window.wrapClass=n,window.scrollClass=o,window.direction=""}var t,n,i;return t=e,(n=[{key:"disableScroll",value:function(){var e;window.addEventListener&&window.addEventListener("DOMMouseScroll",this.wheel),window.addEventListener("wheel",this.wheel,{passive:!1}),document.onkeydown=this.keydown,$(window).bind("touchstart.fixed.popup",(function(t){e=t.originalEvent.touches[0].clientY})),$(window).bind("touchmove.fixed.popup",(function(t){var n=t.originalEvent.changedTouches[0].clientY;e>n+5?window.direction="down":e<n-5&&(window.direction="up")})),$(window).bind("wheel.fixed.popup",(function(e){e.originalEvent.deltaY<0?window.direction="up":e.originalEvent.deltaY>0&&(window.direction="down")})),window.addEventListener("touchmove",this.mobileWheel,{passive:!1})}},{key:"enableScroll",value:function(){window.removeEventListener&&window.removeEventListener("DOMMouseScroll",this.wheel),window.removeEventListener("wheel",this.wheel,{passive:!0}),$(window).unbind("wheel.fixed.popup"),window.removeEventListener("touchmove",this.mobileWheel,{passive:!1}),$(window).unbind("touchstart.fixed.popup"),$(window).unbind("touchmove.fixed.popup")}},{key:"wheel",value:function(e){if(window.stElement[0]===$(e.target).closest(window.wrapClass)[0]||window.stElement[0]===$(e.target)[0]){var t=$(window.stElement).find(window.scrollClass).last()[0]?$(window.stElement).find(window.scrollClass).last()[0]:$(window.stElement)[0],n=Math.round(t.scrollHeight-t.scrollTop)===t.clientHeight,o=t.scrollTop;(0===o&&n&&"up"===window.direction||0===o&&"up"===window.direction||n&&"down"===window.direction)&&e.preventDefault()}else e.preventDefault()}},{key:"mobileWheel",value:function(e){if(window.stElement[0]===$(e.target).closest(window.wrapClass)[0]||window.stElement[0]===$(e.target)[0]){var t=$(window.stElement).find(window.scrollClass)[0]?$(window.stElement).find(window.scrollClass)[0]:$(window.stElement)[0],n=Math.round(t.scrollHeight-t.scrollTop)===t.clientHeight,o=t.scrollTop;(0===o&&n&&"up"===window.direction||0===o&&"up"===window.direction||n&&"down"===window.direction)&&e.preventDefault()}else e.preventDefault()}},{key:"keydown",value:function(e){for(var t=[32,33,34,35,36,37,38,39,40],n=t.length;n--;)if(e.keyCode===t[n]&&"text"!==e.target.type&&"textarea"!==e.target.type&&"search"!==e.target.type&&"tel"!==e.target.type&&"email"!==e.target.type)return void e.preventDefault()}}])&&o(t.prototype,n),i&&o(t,i),e}();function r(e,t){for(var n=0;n<t.length;n++){var o=t[n];o.enumerable=o.enumerable||!1,o.configurable=!0,"value"in o&&(o.writable=!0),Object.defineProperty(e,o.key,o)}}function a(e){return(a="function"==typeof Symbol&&"symbol"==typeof Symbol.iterator?function(e){return typeof e}:function(e){return e&&"function"==typeof Symbol&&e.constructor===Symbol&&e!==Symbol.prototype?"symbol":typeof e})(e)}function l(e,t){for(var n=0;n<t.length;n++){var o=t[n];o.enumerable=o.enumerable||!1,o.configurable=!0,"value"in o&&(o.writable=!0),Object.defineProperty(e,o.key,o)}}function u(e,t){return(u=Object.setPrototypeOf||function(e,t){return e.__proto__=t,e})(e,t)}function c(e){var t=function(){if("undefined"==typeof Reflect||!Reflect.construct)return!1;if(Reflect.construct.sham)return!1;if("function"==typeof Proxy)return!0;try{return Date.prototype.toString.call(Reflect.construct(Date,[],(function(){}))),!0}catch(e){return!1}}();return function(){var n,o=f(e);if(t){var i=f(this).constructor;n=Reflect.construct(o,arguments,i)}else n=o.apply(this,arguments);return s(this,n)}}function s(e,t){return!t||"object"!==a(t)&&"function"!=typeof t?function(e){if(void 0===e)throw new ReferenceError("this hasn't been initialised - super() hasn't been called");return e}(e):t}function f(e){return(f=Object.setPrototypeOf?Object.getPrototypeOf:function(e){return e.__proto__||Object.getPrototypeOf(e)})(e)}var d=function(e){!function(e,t){if("function"!=typeof t&&null!==t)throw new TypeError("Super expression must either be null or a function");e.prototype=Object.create(t&&t.prototype,{constructor:{value:e,writable:!0,configurable:!0}}),t&&u(e,t)}(a,e);var t,n,o,r=c(a);function a(){var e;return function(e,t){if(!(e instanceof t))throw new TypeError("Cannot call a class as a function")}(this,a),(e=r.call(this)).tabsInit(),e.toggleInit(),e.fadePopup(),e.customSelect(),e.supportsWebp(),e.lazy(),e}return t=a,(n=[{key:"tabsInit",value:function(){for(var e=this,t=document.getElementsByClassName("tabs_wrap"),n=0;n<t.length;n++)for(var o=t[n].getElementsByClassName("tab_menu"),i=0;i<o.length;i++)o[i].addEventListener("click",(function(){if(!this.classList.contains("active")){var t=this.getAttribute("data-id"),n=document.getElementById(t);this.parentNode.getElementsByClassName("active")[0].classList.remove("active"),this.classList.add("active");for(var o=e.getSiblings(n.parentNode.childNodes),i=0;i<o.length;i++)o[i].getAttribute("id")!==t&&o[i].classList.add("tab_fade_out");setTimeout((function(){for(var e=0;e<o.length;e++)o[e].getAttribute("id")!==t&&(o[e].style.display="none",o[e].classList.remove("tab_fade_out"));n.classList.add("tab_fade_in"),n.removeAttribute("style"),setTimeout((function(){n.classList.remove("tab_fade_in")}),200)}),180)}}))}},{key:"toggleInit",value:function(){$(".toggle_wrap").each((function(){$(this).find(".toggle_header").on("click",(function(){$(this).siblings(".toggle_content").slideToggle(200),$(this).toggleClass("active")}))}))}},{key:"fadePopup",value:function(){var e=$(".overlay_page"),t=$(".wrap_popup");function n(){if($(window).width()>=1200){var e=$(window).width(),n=$(window).height();t.each((function(){var t=$(this).outerWidth(!0),o=$(this).outerHeight(!0);$(this).css({left:(e-t)/2,top:(n-o)/2})}))}}function o(t,n,o){$(t).fadeIn(200,(function(){if(o){var e=$(t).find("input[name="+o+"]");e.length?e.focus():console.warn("Input not found. Check input name!")}})),e.fadeIn(200),r(!0),self.stopScrollSwipe=n?new i($(t),".wrap_popup",n):new i($(t),".wrap_popup"),self.stopScrollSwipe.disableScroll()}function r(t){t?e.bind("click.fade.popup",(function(){a()})):e.unbind("click.fade.popup")}function a(){e.fadeOut(200),t.each((function(){$(this).fadeOut(200)})),r(!1),self.stopScrollSwipe.enableScroll()}t.length&&(n(),$(document).on("click",".open-popup",(function(e){e.preventDefault();var t=$(this),n=$(this).attr("data-id");if(!n)return console.warn("Please set data-fade attribute"),!1;o(n,$(this).attr("data-scroll-class"),t.attr("data-focus"))})),$(document).bind("trigger.show.popup",(function(e,t,n,i){o(t,n,i)})),$(document).bind("trigger.position.all.popups",(function(){n()})),t.on("click",".header .icon-clear, .close-popup",(function(e){e.preventDefault(),a()})))}},{key:"customSelect",value:function(){var e=document.querySelector(".custom_select"),t=e.querySelector(".select_title"),n=e.querySelectorAll(".select_label");t.addEventListener("click",(function(){"active"===e.getAttribute("data-state")?e.setAttribute("data-state",""):e.setAttribute("data-state","active")}));for(var o=0;o<n.length;o++)n[o].addEventListener("click",(function(n){t.textContent=n.target.textContent,e.setAttribute("data-state","")}))}},{key:"supportsWebp",value:function(){if(!self.createImageBitmap)return!1;if(navigator.platform&&/iPad|iPhone|iPod/.test(navigator.platform))return!1;var e=fetch("data:image/webp;base64,UklGRh4AAABXRUJQVlA4TBEAAAAvAAAAAAfQ//73v/+BiOh/AAA=").then((function(e){return e.blob()}));createImageBitmap(e).then((function(){return!0}),(function(){return!1}))?$("html").addClass("webp"):$("html").addClass("no-webp")}},{key:"lazy",value:function(){var e=document.createElement("script");e.src="https://cdnjs.cloudflare.com/ajax/libs/lazysizes/4.1.8/lazysizes.min.js",document.body.appendChild(e)}}])&&l(t.prototype,n),o&&l(t,o),a}(function(){function e(){!function(e,t){if(!(e instanceof t))throw new TypeError("Cannot call a class as a function")}(this,e)}var t,n,o;return t=e,(n=[{key:"getSiblings",value:function(e){var t=[];for(var n in e)1===e[n].nodeType&&t.push(e[n]);return t}}])&&r(t.prototype,n),o&&r(t,o),e}());function p(e,t){for(var n=0;n<t.length;n++){var o=t[n];o.enumerable=o.enumerable||!1,o.configurable=!0,"value"in o&&(o.writable=!0),Object.defineProperty(e,o.key,o)}}var w=function(){function e(t,n){!function(e,t){if(!(e instanceof t))throw new TypeError("Cannot call a class as a function")}(this,e),this.countDownDate=new Date(t).getTime(),this.outputEl=document.querySelector(n),this.timerLoop()}var t,n,o;return t=e,(n=[{key:"timerLoop",value:function(){var e=this,t=setInterval((function(){var n=(new Date).getTime(),o=e.countDownDate-n,i=Math.floor(o/864e5),r=Math.floor(o%864e5/36e5),a=Math.floor(o%36e5/6e4),l=Math.floor(o%6e4/1e3);e.outputEl.innerHTML=i+"d "+r+"h "+a+"m "+l+"s ",o<0&&(clearInterval(t),document.getElementById("demo").innerHTML="EXPIRED")}),1e3)}}])&&p(t.prototype,n),o&&p(t,o),e}();function v(e,t){for(var n=0;n<t.length;n++){var o=t[n];o.enumerable=o.enumerable||!1,o.configurable=!0,"value"in o&&(o.writable=!0),Object.defineProperty(e,o.key,o)}}new d,new w("Jan 5, 2021 15:37:25","#demo-countdown-timer"),new(function(){function e(t,n){!function(e,t){if(!(e instanceof t))throw new TypeError("Cannot call a class as a function")}(this,e),this.name=t,this.age=n}var t,n,o;return t=e,(n=[{key:"seyHi",value:function(){console.log("ES6 the best"),console.log("Hi "+this.name+" your age is "+this.age)}}])&&v(t.prototype,n),o&&v(t,o),e}())("Harry",0).seyHi(),$("body").length&&console.log("Support jQuery"),$(".trigger-open-popup").on("click",(function(e){e.preventDefault(),$(document).trigger("trigger.show.popup",["#popup_1",".custom-scrollbar","name"])}))}]);
//# sourceMappingURL=main.js.map