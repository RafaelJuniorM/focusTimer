
import { elements } from "./elements.js";
const {
  volumeCoffe,
  volumeFire,
  volumeFlorest,
  volumeRain,
} = elements;

export default function(){

  const buttonPressAudio = new Audio("https://github.com/maykbrito/automatic-video-creator/blob/master/audios/button-press.wav?raw=true")
  const kitchenTimer = new Audio("https://github.com/maykbrito/automatic-video-creator/blob/master/audios/kichen-timer.mp3?raw=true")

  const rainSound = new Audio('./audio/Chuva.wav')
  const fireSound = new Audio('./audio/Lareira.wav')
  const florestSound = new Audio('./audio/Floresta.wav')
  const coffeSound = new Audio('./audio/Cafeteria.wav')

  function buttonPress(){
    buttonPressAudio.play()
    buttonPressAudio.volume = 0.4
  }

  function timerEnd(){
    kitchenTimer.play()
  }

  function btnPressCoffe(){
    coffeSound.play()
    
    soundsOff(rainSound,fireSound,florestSound)
    coffeSound.loop = true
  }

  function btnPressFire(){
    fireSound.play()
    fireSound.loop = true
    soundsOff(rainSound,coffeSound,florestSound)
  }

  function btnPressFlorest(){
    florestSound.play()
    florestSound.loop = true
    soundsOff(rainSound,fireSound,coffeSound)
  }

  function btnPressRain(){
    rainSound.play()
    rainSound.volume = volumeCoffe.value / 100
    rainSound.loop =true
    soundsOff(coffeSound,fireSound,florestSound)
  }

  let soundsOff = (soundOne, soundTwo, soundThree) => {
    soundOne.pause()
    soundTwo.pause()
    soundThree.pause()
  }

  return {
    buttonPress,
    timerEnd,
    btnPressCoffe,
    btnPressFire,
    btnPressFlorest,
    btnPressRain,
  }

}