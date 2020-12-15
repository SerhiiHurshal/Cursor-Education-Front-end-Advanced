counterOfPressingKeys = 0

document.onkeydown = function(e){
    const audio = new Audio()

    switch(e.code){
        case "Digit1":
            audio.src = "sounds/piano-e_E_major.wav"
            counterOfPressingKeys += 1
            break
        case "Digit2":
            audio.src = "sounds/piano-a_A_major.wav"
            counterOfPressingKeys += 1
            break
        case "Digit3":
            audio.src = "sounds/piano-d_D_major.wav"
            counterOfPressingKeys += 1
            break   
        case "Digit4":
            audio.src = "sounds/piano-g_G_major.wav"
            counterOfPressingKeys += 1
            break 
        case "Digit5":
            audio.src = "sounds/piano-c_C_major.wav"
            counterOfPressingKeys += 1
            break
        case "Digit6":
            audio.src = "sounds/piano-f_F_major.wav"
            counterOfPressingKeys += 1
            break
        case "Digit7":
            audio.src = "sounds/piano-b_B_major.wav"
            counterOfPressingKeys += 1
            break
    }

    audio.volume = 0.01
    audio.play()
}

const btnJingleBells = document.getElementById("Jingle Bells")
const btnMerryChristmas = document.getElementById("Merry Christmas")
const btnCarolOfTheBells = document.getElementById("Carol of the bells")

btnJingleBells.onclick = function(){
    if(counterOfPressingKeys > 20){
        alert("You win!")
        window.location.href = "https://www.youtube.com/watch?v=IqrMDbKXD-4"
    }else{
        alert("Do not cheat. Santa won't bring you presents!!!")
    }
}

const playLoseSound = () =>{
    if(counterOfPressingKeys > 20){
        const audio = new Audio()
        audio.src = "sounds/zapsplat_multimedia_game_error_tone_001_24919.mp3"
        audio.volume = 0.2
        audio.play()
    }else{
            alert("Do not cheat. Santa won't bring you presents!!!")
        }
}

btnMerryChristmas.onclick = function(){playLoseSound()}
btnCarolOfTheBells.onclick = function(){playLoseSound()}

