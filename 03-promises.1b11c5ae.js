!function(){function e(e,n){return new Promise((function(t,o){var a=Math.random()>.3;setTimeout((function(){a?t({position:e,delay:n}):o({position:e,delay:n})}),n)}))}document.querySelector(".form").addEventListener("submit",(function(n){n.preventDefault();for(var t=Number(n.currentTarget.elements.delay.value),o=n.currentTarget.elements,a=o.amount,c=o.step,i=1;i<=a.value;i+=1)e(i,t).then((function(e){var n=e.position,t=e.delay;console.log("✅ Fulfilled promise ".concat(n," in ").concat(t,"ms"))})).catch((function(e){var n=e.position,t=e.delay;console.log("❌ Rejected promise ".concat(n," in ").concat(t,"ms"))})),t+=Number(c.value)}))}();
//# sourceMappingURL=03-promises.1b11c5ae.js.map
