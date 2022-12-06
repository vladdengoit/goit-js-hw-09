function getRandomHexColor() {
  return `#${Math.floor(Math.random() * 16777215).toString(16)}`;
}

const getBody = document.querySelector('body');
const getButtonStart = document.querySelector('[data-start]');
const getStop = document.querySelector('[data-stop]');
let setID = null;

getButtonStart.addEventListener('click', addColoronStart);

function addColoronStart() {
    
    setID = setInterval(() => { getBody.style.backgroundColor = getRandomHexColor(); }, 1000)
    console.log(setID);
    getButtonStart.disabled = true;
}

getStop.addEventListener('click', cleanStart)
function cleanStart() {
    clearInterval(setID);
    getButtonStart.disabled = false;
}
