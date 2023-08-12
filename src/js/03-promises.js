import Notiflix from 'notiflix';


// setTimeout(() => {
//   let position = 0;



//   const stopInterval = setInterval(() => {
//     const shouldResolve = Math.random() > 0.3;
//     position += 1;
//     let delay = firstDelay + step * position;

//     if (shouldResolve) {
//       if (position === amount) {
//         clearInterval(stopInterval)
//         resolve({ position, delay })
//         // Fulfill
//       }
//     } else {
//       clearInterval(stopInterval)
//       reject({ position, delay })
//       // Reject
//     }
//   }, step)




// }, firstDelay)

const refs = {
  formEl: document.querySelector('.form'),
  input: document.querySelector('[name="delay"]'),
  inputStep: document.querySelector('[name="step"]'),
  inputAmount: document.querySelector('[name="amount"]'),
  submit: document.querySelector('button')
}
refs.formEl.addEventListener('submit', handelSubmit)

function createPromise({ firstDelay, step, position }) {

  return new Promise((resolve, reject) => {
    let delay = firstDelay + step * position;
    const shouldResolve = Math.random() > 0.3;
    if (shouldResolve) {
      resolve({ position, delay })
    } else {
      reject({ position, delay })
    }

  })
}


function handelSubmit(e) {
  e.preventDefault()
  let firstDelay = Number(refs.input.value);
  let step = Number(refs.inputStep.value);
  let amount = Number(refs.inputAmount.value);
  let position = 0;

  setTimeout(() => {
    const stopInterval = setInterval(() => {
      position += 1;

      createPromise({ firstDelay, step, position }).then(({ position, delay }) => {
        Notiflix.Notify.success(`✅ Fulfilled promise ${position} in ${delay}ms`)
      }).catch(({ position, delay }) => {
        Notiflix.Notify.failure(`❌ Rejected promise ${position} in ${delay}ms`)
      });
      if (position === amount) {
        clearInterval(stopInterval)
      }
    }, step)
  }, firstDelay)

}



