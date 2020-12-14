counter_of_pressing_keys = 0

document.onkeydown = function(e){
    const audio = new Audio()

    switch(e.code){
        case "Digit1":
            audio.src = "sounds/piano-e_E_major.wav"
            counter_of_pressing_keys += 1
            break
        case "Digit2":
            audio.src = "sounds/piano-a_A_major.wav"
            counter_of_pressing_keys += 1
            break
        case "Digit3":
            audio.src = "sounds/piano-d_D_major.wav"
            counter_of_pressing_keys += 1
            break   
        case "Digit4":
            audio.src = "sounds/piano-g_G_major.wav"
            counter_of_pressing_keys += 1
            break 
        case "Digit5":
            audio.src = "sounds/piano-c_C_major.wav"
            counter_of_pressing_keys += 1
            break
        case "Digit6":
            audio.src = "sounds/piano-f_F_major.wav"
            counter_of_pressing_keys += 1
            break
        case "Digit7":
            audio.src = "sounds/piano-b_B_major.wav"
            counter_of_pressing_keys += 1
            break
    }

    audio.volume = 0.01
    audio.play()
}

const btn_Jingle_Bells = document.getElementById("Jingle Bells")
const btn_Merry_Christmas = document.getElementById("Merry Christmas")
const btn_Carol_of_the_bells = document.getElementById("Carol of the bells")

btn_Jingle_Bells.onclick = function(){
    if(counter_of_pressing_keys > 20){
        alert("You win!")
        window.location.href = "https://www.youtube.com/watch?v=IqrMDbKXD-4"
    }else{
        alert("Do not cheat. Santa won't bring you presents!!!")
    }
}

const playLoseSound = () =>{
    if(counter_of_pressing_keys > 20){
        const audio = new Audio()
        audio.src = "sounds/zapsplat_multimedia_game_error_tone_001_24919.mp3"
        audio.volume = 0.2
        audio.play()
    }else{
            alert("Do not cheat. Santa won't bring you presents!!!")
        }
}

btn_Merry_Christmas.onclick = function(){playLoseSound()}
btn_Carol_of_the_bells.onclick = function(){playLoseSound()}

