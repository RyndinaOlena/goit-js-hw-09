// import Notiflix from 'notiflix';




// const refs = {
//   formEl: document.querySelector('.form'),
//   input: document.querySelector('[name="delay"]'),
//   inputStep: document.querySelector('[name="step"]'),
//   inputAmount: document.querySelector('[name="amount"]'),
//   submit: document.querySelector('button')
// }
// refs.formEl.addEventListener('submit', handelSubmit)

// function createPromise({ firstDelay, step, position }) {

//   return new Promise((resolve, reject) => {
//     // let delay = firstDelay + step * position;
//     const shouldResolve = Math.random() > 0.3;
//     setTimeout(() => {
//       if (shouldResolve) {
//         resolve({ position, delay })
//       } else {
//         reject({ position, delay })
//       }
//     }, firstDelay)
//   })
// }


// function handelSubmit(e) {
//   e.preventDefault()
//   let firstDelay = Number(refs.input.value);
//   let step = Number(refs.inputStep.value);
//   let amount = Number(refs.inputAmount.value);
//   let position = 0;
//   makeDisableDate()

//   for (let i = 1; i <= amount; i += 1) {
//     position += 1
//     const stopInterval = setInterval(() => {



//       createPromise({ firstDelay, step, position }).then(({ position, delay }) => {
//         Notiflix.Notify.success(`✅ Fulfilled promise ${position} in ${delay}ms`)
//       }).catch(({ position, delay }) => {
//         Notiflix.Notify.failure(`❌ Rejected promise ${position} in ${delay}ms`)
//       });

//       if (position === amount) {
//         clearInterval(stopInterval)
//         removeAttributeBtn()
//         return

//       }

//     }, firstDelay)
//   }






//   refs.formEl.reset()


// }
// function removeAttributeBtn() {
//   refs.submit.removeAttribute("disabled", "disabled");
// }

// function makeDisableDate() {
//   refs.submit.setAttribute("disabled", "disabled");
// };


import Notiflix from 'notiflix';

const form = document.querySelector('.form');
const submit = document.querySelector('button')


form.addEventListener('submit', handleSubmit);




function handleSubmit(e) {
  e.preventDefault();
  let position = 0;
  const {
    elements: { delay, step, amount },
  } = e.currentTarget;

  let totalDelay = parseInt(delay.value);
  console.log(totalDelay)




  let parceAmount = parseInt(amount.value)

  for (let i = 1; i <= parceAmount; i++) {

    submit.setAttribute("disabled", "disabled")

    console.log(position)
    console.log(parceAmount)
    if (position === parceAmount) {
      console.log('qwe')
      submit.removeAttribute("disabled", "disabled");
      return
    }
    createPromise(i, totalDelay).then(onSuccess).catch(onError);
    totalDelay += parseInt(step.value);
    //submit.removeAttribute("disabled", "disabled");
  }

  form.reset()

}

function createPromise(position, delay) {
  return new Promise((resolve, reject) => {
    const shouldResolve = Math.random() > 0.3;

    setTimeout(() => {
      if (shouldResolve) {
        resolve(`✅ Fulfilled promise ${position} in ${delay}ms`);
      }

      reject(`❌ Rejected promise ${position} in ${delay}ms`);
    }, delay);
  });
}

function onSuccess(resolve) {
  Notiflix.Notify.success(resolve);
}

function onError(reject) {
  Notiflix.Notify.failure(reject);
}
