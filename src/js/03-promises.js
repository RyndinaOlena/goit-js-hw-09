import Notiflix from 'notiflix';

const refs = {
  formEl: document.querySelector('.form'),
  input: document.querySelector('[name="delay"]'),
  inputStep: document.querySelector('[name="step"]'),
  inputAmount: document.querySelector('[name="amount"]'),
  submit: document.querySelector('button')
}
refs.formEl.addEventListener('submit', handelSubmit)

function createPromise({ firstDelay, step, amount }) {

  return new Promise((resolve, reject) => {

    setTimeout(() => {
      let position = 0;
      const stopInterval = setInterval(() => {
        const shouldResolve = Math.random() > 0.3;
        position += 1;
        let delay = firstDelay + step * position;

        if (shouldResolve) {
          if (position === amount) {
            clearInterval(stopInterval)
            resolve({ position, delay })
            // Fulfill
          }
        } else {
          clearInterval(stopInterval)
          reject({ position, delay })

          // Reject
        }
      }, amount)

    }, firstDelay)

  })

}

function handelSubmit(e) {
  e.preventDefault()
  let firstDelay = Number(refs.input.value);
  let step = Number(refs.inputStep.value);
  let amount = Number(refs.inputAmount.value);



  createPromise({ firstDelay, step, amount }).then(({ position, delay }) => {
    Notiflix.Notify.success(`✅ Fulfilled promise ${position} in ${delay}ms`)
  }).catch(({ position, delay }) => {
    Notiflix.Notify.failure(`❌ Rejected promise ${position} in ${delay}ms`)
  })
}


