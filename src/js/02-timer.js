// Описаний в документації
import flatpickr from "flatpickr";
import Notiflix from 'notiflix';
// Додатковий імпорт стилів
import "flatpickr/dist/flatpickr.min.css";


function convertMs(ms) {
    // Number of milliseconds per unit of time
    const second = 1000;
    const minute = second * 60;
    const hour = minute * 60;
    const day = hour * 24;

    // Remaining days
    const days = Math.floor(ms / day);
    // Remaining hours
    const hours = Math.floor((ms % day) / hour);
    // Remaining minutes
    const minutes = Math.floor(((ms % day) % hour) / minute);
    // Remaining seconds
    const seconds = Math.floor((((ms % day) % hour) % minute) / second);

    return { days, hours, minutes, seconds };
}
const myInputEl = document.getElementById('datetime-picker')
const btnEl = document.querySelector('[data-start]')
const daysEl = document.querySelector('[data-days]')
const hoursEl = document.querySelector('[data-hours]')
const minutesEl = document.querySelector('[data-minutes]')
const secondsEl = document.querySelector('[data-seconds]')



flatpickr(myInputEl, {
    enableTime: true,
    time_24hr: true,
    defaultDate: new Date(),
    minuteIncrement: 1,
    onClose(selectedDates) {
        let currentDate = Date.now()


        if ((selectedDates[0]).getTime() < currentDate) {
            Notiflix.Report.warning("Please choose a date in the future");
            makeDisableDate();
            return;
        }

        Notiflix.Notify.success("Well done");

        const interval = setInterval(() => {

            makeDisableDate();
            currentDate = Date.now()
            let makeInterval = selectedDates[0] - currentDate;
            if (makeInterval < 0) {
                return
            }

            let timer = convertMs(makeInterval)
            daysEl.textContent = addLeadingZero(timer.days)
            hoursEl.textContent = addLeadingZero(timer.hours)
            minutesEl.textContent = addLeadingZero(timer.minutes)
            secondsEl.textContent = addLeadingZero(timer.seconds)

        }, 1000)
    },

})

function makeDisableDate() {
    btnEl.setAttribute("disabled", "disabled");
};


function addLeadingZero(value) {
    return value.toString().padStart(2, '0')
}










