!function(){function e(e){return e&&e.__esModule?e.default:e}var t="undefined"!=typeof globalThis?globalThis:"undefined"!=typeof self?self:"undefined"!=typeof window?window:"undefined"!=typeof global?global:{},n={},o={},r=t.parcelRequired7c6;null==r&&((r=function(e){if(e in n)return n[e].exports;if(e in o){var t=o[e];delete o[e];var r={id:e,exports:{}};return n[e]=r,t.call(r.exports,r,r.exports),r.exports}var i=new Error("Cannot find module '"+e+"'");throw i.code="MODULE_NOT_FOUND",i}).register=function(e,t){o[e]=t},t.parcelRequired7c6=r);var i=r("6JpON"),l=document.querySelector(".form"),u=document.querySelector("button");function a(e,t){return new Promise((function(n,o){var r=Math.random()>.3;setTimeout((function(){r&&n("✅ Fulfilled promise ".concat(e," in ").concat(t,"ms")),o("❌ Rejected promise ".concat(e," in ").concat(t,"ms"))}),t)}))}function c(t){e(i).Notify.success(t)}function s(t){e(i).Notify.failure(t)}l.addEventListener("submit",(function(e){e.preventDefault();var t=e.currentTarget.elements,n=t.delay,o=t.step,r=t.amount,i=parseInt(n.value);console.log(i);for(var d=parseInt(r.value),f=1;f<=d;f++){if(u.setAttribute("disabled","disabled"),console.log(0),console.log(d),0===d)return console.log("qwe"),void u.removeAttribute("disabled","disabled");a(f,i).then(c).catch(s),i+=parseInt(o.value)}l.reset()}))}();
//# sourceMappingURL=03-promises.b9129c68.js.map
