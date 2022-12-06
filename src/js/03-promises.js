function createPromise(position, delay) {
  
  return new Promise((resolve, reject) => {
    const shouldResolve = Math.random() > 0.3;
  setTimeout(()=>{if (shouldResolve) {
   
    resolve({position,delay})
  } else {
    
    reject({position,delay})
  }},delay )
  } )
}

const outForm = document.querySelector('.form');
outForm.addEventListener('submit', takeInput);
function takeInput(e) {
  e.preventDefault();
  let delay = Number(e.currentTarget.elements.delay.value);
  const {
    amount,
    step
  } = e.currentTarget.elements

  for (let i = 1; i <= amount.value; i += 1){
    createPromise(i, delay).then(({ position, delay }) => {
    console.log(`✅ Fulfilled promise ${position} in ${delay}ms`);
  })
  .catch(({ position, delay }) => {
    console.log(`❌ Rejected promise ${position} in ${delay}ms`);
  });
    delay += Number(step.value);
   
  }
}
 