import { elements } from "./elements.js";
import sounds from "./sounds.js";



export default function controls({
  minutesDisplay,
  cardCoffe,
  cardFire,
  cardFlorest,
  cardRain,
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
    reduceMinutes,
    
  }

}
