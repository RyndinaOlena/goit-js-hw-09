function getRandomHexColor() {
    return `#${Math.floor(Math.random() * 16777215).toString(16).padStart(6, 0)}`;
}


const startBtn = document.querySelector('[data-start');
const stopBtn = document.querySelector('[data-stop]');
let timerId = null;
makeDisableDateStop()

startBtn.addEventListener("click", () => {
    makeDisableDateStart()
    removeAttributeBtnStop()
    timerId = setInterval(() => {
        document.querySelector('body').style.backgroundColor = getRandomHexColor()
    }, 1000);
});


stopBtn.addEventListener("click", () => {
    clearInterval(timerId);
    makeDisableDateStop()
    removeAttributeStart()
});


function makeDisableDateStart() {
    startBtn.setAttribute("disabled", "disabled");
}
function removeAttributeStart() {
    startBtn.removeAttribute("disabled", "disabled");
}

function removeAttributeBtnStop() {
    stopBtn.removeAttribute("disabled", "disabled");
}
function makeDisableDateStop() {
    stopBtn.setAttribute("disabled", "disabled");
};