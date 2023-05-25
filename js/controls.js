export default function controls({
  minutesDisplay
}) {
  function plusMinutes(){
    minutesDisplay.textContent = String(
      Number(minutesDisplay.textContent) + 5
    ).padStart(2, "0");
  }
  
  function reduceMinutes(){
    let numberMinutesDisplay = Number(minutesDisplay.textContent);
  
    minutesDisplay.textContent = String(numberMinutesDisplay - 5).padStart(
      2,
      "0"
    );
  
    if (minutesDisplay.textContent <= 0) {
      minutesDisplay.textContent = "00";
    }
  }
  
  return{
    plusMinutes,
    reduceMinutes
  }

}
