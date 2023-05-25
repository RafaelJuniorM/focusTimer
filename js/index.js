import controls from "./controls.js";
import { Timer } from "./timer.js";



// button controls
let buttonPlay = document.querySelector(".button-play");
let buttonPause = document.querySelector(".button-pause");
let buttonPlusMinutes = document.querySelector(".button-plus");
let buttonReduceMinutes = document.querySelector(".button-reduce");
// display timer
let minutesDisplay = document.querySelector("#clock .minutes");
let secondsDisplay = document.querySelector("#clock .seconds");
let timerTimeout

const timer = Timer({
  minutesDisplay,
  secondsDisplay,
  timerTimeout
})

const changeMinutes = controls({
  minutesDisplay,
})


buttonPlusMinutes.addEventListener("click", function () {
  changeMinutes.plusMinutes()
});

buttonReduceMinutes.addEventListener("click", function () {
 changeMinutes.reduceMinutes()
});

buttonPlay.addEventListener("click", function () {
  timer.countdown();
});

buttonPause.addEventListener("click",function(){
  clearTimeout(timerTimeout)
  console.log(timerTimeout)
})