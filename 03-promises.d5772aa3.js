!function(){var e="undefined"!=typeof globalThis?globalThis:"undefined"!=typeof self?self:"undefined"!=typeof window?window:"undefined"!=typeof global?global:{},n={},t={},o=e.parcelRequired7c6;null==o&&((o=function(e){if(e in n)return n[e].exports;if(e in t){var o=t[e];delete t[e];var i={id:e,exports:{}};return n[e]=i,o.call(i.exports,i,i.exports),i.exports}var u=new Error("Cannot find module '"+e+"'");throw u.code="MODULE_NOT_FOUND",u}).register=function(e,n){t[e]=n},e.parcelRequired7c6=o);var i=o("h6c0i"),u=document.querySelector("form"),r=u.elements,c=r.delay,a=r.step,f=r.amount;u.addEventListener("submit",(function(e){e.preventDefault(),setTimeout((function(){d(l,Number(c.value)),s+=Number(c.value)}),c.value),setTimeout((function(){for(var e=0;e<f.value-1;e+=1)l+=1,s+=Number(a.value),d(l,s)}),c.value),setTimeout((function(){l=1,s=0}),0)}));var l=0,s=0;function d(e,n){setTimeout((function(){!function(e,n,t){e.then((function(){i.Notify.success("✅ Fulfilled promise ".concat(n," in ").concat(t,"ms"))})).catch((function(){i.Notify.failure("❌ Rejected promise ".concat(n," in ").concat(t,"ms"))}))}(new Promise((function(e,n){Math.random()>.3?e():n()})),e,n)}),n-Number(c.value))}}();
//# sourceMappingURL=03-promises.d5772aa3.js.map
