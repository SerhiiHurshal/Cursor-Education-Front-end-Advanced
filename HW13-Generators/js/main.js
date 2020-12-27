function* createIdGenerator() {
    let counter = 0
    while(true) yield ++counter
}

const idGenerator = createIdGenerator()


const getID = () => {
    const idHeader = document.getElementById("idHeader")

    idHeader.textContent = idGenerator.next().value
}

document.getElementById("genIdBtn").addEventListener("click", getID)


function* fontSize(n = 14) {
    let fontSize = n

    while(true){
        const commond = yield fontSize
        if(commond === '+') {
            yield fontSize = fontSize + 2
        } else {
            yield fontSize = fontSize - 2
        }
    }
}


const changeFontSize = fontSize()


const fontSizeUp = () => {
    console.log(changeFontSize.next('+').value)

    const newFontSize = changeFontSize.next('+').value
    document.getElementById("idHeader").style.fontSize = `${newFontSize}px`
}

const fontSizeDown = () => {
    console.log(changeFontSize.next('-').value)

    const newFontSize = changeFontSize.next('-').value
    document.getElementById("idHeader").style.fontSize = `${newFontSize}px`
}


document.getElementById("sizeUpBtn").addEventListener("click", fontSizeUp)
document.getElementById("sizeDownBtn").addEventListener("click", fontSizeDown)