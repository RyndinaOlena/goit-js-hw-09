function e(e){return e&&e.__esModule?e.default:e}var t="undefined"!=typeof globalThis?globalThis:"undefined"!=typeof self?self:"undefined"!=typeof window?window:"undefined"!=typeof global?global:{},n={},o={},r=t.parcelRequired7c6;null==r&&((r=function(e){if(e in n)return n[e].exports;if(e in o){var t=o[e];delete o[e];var r={id:e,exports:{}};return n[e]=r,t.call(r.exports,r,r.exports),r.exports}var l=new Error("Cannot find module '"+e+"'");throw l.code="MODULE_NOT_FOUND",l}).register=function(e,t){o[e]=t},t.parcelRequired7c6=r);var l=r("7Y9D8");const i=document.querySelector(".form"),s=document.querySelector("button");function u(e,t){return new Promise(((n,o)=>{const r=Math.random()>.3;setTimeout((()=>{r&&n(`✅ Fulfilled promise ${e} in ${t}ms`),o(`❌ Rejected promise ${e} in ${t}ms`)}),t)}))}function d(t){e(l).Notify.success(t)}function a(t){e(l).Notify.failure(t)}i.addEventListener("submit",(function(e){e.preventDefault();const{elements:{delay:t,step:n,amount:o}}=e.currentTarget;let r=parseInt(t.value);console.log(r);let l=parseInt(o.value);for(let e=1;e<=l;e++){if(s.setAttribute("disabled","disabled"),console.log(0),console.log(l),0===l)return console.log("qwe"),void s.removeAttribute("disabled","disabled");u(e,r).then(d).catch(a),r+=parseInt(n.value)}i.reset()}));
//# sourceMappingURL=03-promises.586059f2.js.map