import sounds from "./sounds.js";

export function Timer({
  minutesDisplay,
  secondsDisplay,

}) {
  let timerTimeout

  function uptadeTimerDisplay(minutes, seconds) {
    minutesDisplay.textContent = String(minutes).padStart(2, "0");
    secondsDisplay.textContent = String(seconds).padStart(2, "0");
  }

  function countdown() {
    timerTimeout = setTimeout(() => {
      let numberSecondsDisplay = Number(secondsDisplay.textContent);
      let numberMinutesDisplay = Number(minutesDisplay.textContent);
      let timerFinished = minutesDisplay.textContent == 0 && secondsDisplay.textContent == 0;

      uptadeTimerDisplay(numberMinutesDisplay, 0);
      
      if (timerFinished) {
        sounds().timerEnd()
        return;
      }

      if (numberSecondsDisplay <= 0) {
        numberSecondsDisplay = 60;
        --numberMinutesDisplay;
      }

      uptadeTimerDisplay(
        numberMinutesDisplay,
        String(numberSecondsDisplay - 1)
      );

      countdown();
      return timerTimeout
    }, 1000);
  }

  function pauseTimer(){
    clearTimeout(timerTimeout)
  }
  return{
    countdown,
    pauseTimer,
  }
}


