!function(){function e(e){return e&&e.__esModule?e.default:e}var t="undefined"!=typeof globalThis?globalThis:"undefined"!=typeof self?self:"undefined"!=typeof window?window:"undefined"!=typeof global?global:{},n={},o={},i=t.parcelRequired7c6;null==i&&((i=function(e){if(e in n)return n[e].exports;if(e in o){var t=o[e];delete o[e];var i={id:e,exports:{}};return n[e]=i,t.call(i.exports,i,i.exports),i.exports}var r=new Error("Cannot find module '"+e+"'");throw r.code="MODULE_NOT_FOUND",r}).register=function(e,t){o[e]=t},t.parcelRequired7c6=i);var r=i("6JpON"),u={formEl:document.querySelector(".form"),input:document.querySelector('[name="delay"]'),inputStep:document.querySelector('[name="step"]'),inputAmount:document.querySelector('[name="amount"]'),submit:document.querySelector("button")};u.formEl.addEventListener("submit",(function(t){t.preventDefault();var n=Number(u.input.value),o=Number(u.inputStep.value),i=Number(u.inputAmount.value),a=0;setTimeout((function(){var t=setInterval((function(){(function(e){var t=e.firstDelay,n=e.step,o=e.position;return new Promise((function(e,i){var r=t+n*o;Math.random()>.3?e({position:o,delay:r}):i({position:o,delay:r})}))})({firstDelay:n,step:o,position:a+=1}).then((function(t){var n=t.position,o=t.delay;e(r).Notify.success("✅ Fulfilled promise ".concat(n," in ").concat(o,"ms"))})).catch((function(t){var n=t.position,o=t.delay;e(r).Notify.failure("❌ Rejected promise ".concat(n," in ").concat(o,"ms"))})),u.submit.setAttribute("disabled","disabled"),a===i&&(clearInterval(t),u.submit.removeAttribute("disabled","disabled"))}),o)}),n+o),u.formEl.reset()}))}();
//# sourceMappingURL=03-promises.30dbcbed.js.map
