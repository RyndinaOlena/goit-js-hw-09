function getRandomHexColor() {
    return `#${Math.floor(Math.random() * 16777215).toString(16).padStart(6, 0)}`;
}


const startBtn = document.querySelector('[data-start');
const stopBtn = document.querySelector('[data-stop]');
let timerId = null;

startBtn.addEventListener("click", () => {
    timerId = setInterval(() => {
        document.querySelector('body').style.backgroundColor = getRandomHexColor()
    }, 1000);
});


stopBtn.addEventListener("click", () => {
    clearInterval(timerId);
});