export function Timer({
  minutesDisplay,
  secondsDisplay,
  timerTimeout,
}) {
  function uptadeTimerDisplay(minutes, seconds) {
    minutesDisplay.textContent = String(minutes).padStart(2, "0");
    secondsDisplay.textContent = String(seconds).padStart(2, "0");
  }

  function countdown() {
    timerTimeout = setTimeout(() => {
      let numberSecondsDisplay = Number(secondsDisplay.textContent);
      let numberMinutesDisplay = Number(minutesDisplay.textContent);

      uptadeTimerDisplay(numberMinutesDisplay, 0);

      if (numberSecondsDisplay <= 0) {
        numberSecondsDisplay = 5;
        --numberMinutesDisplay;
      }

      uptadeTimerDisplay(
        numberMinutesDisplay,
        String(numberSecondsDisplay - 1)
      );

      if (minutesDisplay.textContent == 0 && secondsDisplay.textContent == 0) {
        return;
      }

      countdown();
      return timerTimeout
    }, 1000);
  }

  return{
    countdown,
  }
}


