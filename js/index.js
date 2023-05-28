import controls from "./controls.js";
import { Timer } from "./timer.js";
import { elements } from "./elements.js";
import sounds from "./sounds.js";

const {
  buttonPause,
  buttonPlay,
  buttonPlusMinutes,
  buttonReduceMinutes,
  minutesDisplay,
  secondsDisplay,
  btnCardCoffe,
  btnCardFire,
  btnCardFlorest,
  btnCardRain,
} = elements // desestruturação 

const sound = sounds()

const timer = Timer({
  minutesDisplay,
  secondsDisplay,
  
})

const btnControls = controls({
  minutesDisplay,
  btnCardRain,
  btnCardCoffe,
  btnCardFire,
  btnCardFlorest,
})

buttonPlusMinutes.addEventListener("click", function () {
  btnControls.plusMinutes()
  sound.buttonPress()
});

buttonReduceMinutes.addEventListener("click", function () {
  btnControls.reduceMinutes()
 sound.buttonPress()
});

buttonPlay.addEventListener("click", function () {
  timer.countdown();
  sound.buttonPress()
});

buttonPause.addEventListener("click",function(){
  timer.pauseTimer()
  sound.buttonPress()
})

btnCardCoffe.addEventListener("click", function(){
 btnCardCoffe.classList.toggle("clicked")
  const cardSoundCoffeSelected = btnCardCoffe.classList.contains("clicked")
  if(cardSoundCoffeSelected){
    sound.btnPressCoffe()
    btnCardRain.classList.remove('clicked')
    btnCardFlorest.classList.remove('clicked')
    btnCardFire.classList.remove('clicked')
  }
  
})

btnCardRain.addEventListener("click", function(){
  btnCardRain.classList.toggle("clicked")
  const cardSoundRainSelected = btnCardRain.classList.contains("clicked")
  if(cardSoundRainSelected){
    sound.btnPressRain()
    btnCardFlorest.classList.remove('clicked')
    btnCardCoffe.classList.remove('clicked')
    btnCardFire.classList.remove('clicked')
  }
  
})

btnCardFire.addEventListener("click", function(){
  btnCardFire.classList.toggle("clicked")
  const cardSoundFireSelected = btnCardFire.classList.contains("clicked")
  if(cardSoundFireSelected){
    sound.btnPressFire()
    btnCardRain.classList.remove('clicked')
    btnCardCoffe.classList.remove('clicked')
    btnCardFlorest.classList.remove('clicked') 
  }
  
})

btnCardFlorest.addEventListener("click", function(){
  btnCardFlorest.classList.toggle("clicked")
  const cardSoundFlorestSelected = btnCardFlorest.classList.contains("clicked")
  if(cardSoundFlorestSelected){
    sound.btnPressFlorest()
    btnCardRain.classList.remove('clicked')
    btnCardCoffe.classList.remove('clicked')
    btnCardFire.classList.remove('clicked')
  }
})

