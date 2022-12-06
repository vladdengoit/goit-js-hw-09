import flatpickr from "flatpickr";
import "flatpickr/dist/flatpickr.min.css";
const options = {
  enableTime: true,
  time_24hr: true,
  defaultDate: new Date(),
  minuteIncrement: 1,
  onClose(selectedDates) {
           
      if (selectedDates[0] - new Date() <= 0) {
        alert("Please choose a date in the future");
        buttonStart.disabled = true;
      }
      else buttonStart.disabled = false;
     
  },
};

const inputForLibrary = document.querySelector('#datetime-picker');
flatpickr(inputForLibrary, options);

const buttonStart = document.querySelector('[data-start]');
const inpDays = document.querySelector('[data-days]');
const inpHours = document.querySelector('[data-hours]');
const inpMin = document.querySelector('[data-minutes]');
const inpSek = document.querySelector('[data-seconds]');

buttonStart.disabled = true;
buttonStart.addEventListener('click', funkUpdated);

function funkUpdated() {
    const setId =setInterval(() => {
       
        const difference = new Date(inputForLibrary.value) - new Date();
        const {
            seconds,
            minutes,
            days,
            hours
        } = convertMs(difference);

        inpDays.textContent=days;
        inpHours.textContent = hours;
        inpMin.textContent= minutes;
        inpSek.textContent = seconds;
        if (difference < 1000) {
            clearInterval(setId);
        }
    },1000)
    
};
function convertData(value) {
    return String(value).padStart(2, '0');
}
function convertMs(ms) {
  // Number of milliseconds per unit of time
  const second = 1000;
  const minute = second * 60;
  const hour = minute * 60;
  const day = hour * 24;

  // Remaining days
  const days = convertData(Math.floor(ms / day));
  // Remaining hours
  const hours = convertData(Math.floor((ms % day) / hour));
  // Remaining minutes
  const minutes = convertData(Math.floor(((ms % day) % hour) / minute));
  // Remaining seconds
  const seconds = convertData(Math.floor((((ms % day) % hour) % minute) / second));

  return { days, hours, minutes, seconds };
}