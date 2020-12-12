const generateRamdonColor = () => {
    const color = Math.floor(Math.random()*16777215).toString(16)
    return '#' + color
}


const generateBlocks = () => {
    const body = document.querySelector("body")

    const table = document.createElement("table")

    for(i = 0; i < 5; i++){
        let row = document.createElement("tr")
        for(j=0; j < 5; j++){
            let box = document.createElement("td")
            box.style.backgroundColor = generateRamdonColor()
            box.width = "50px"
            box.height = "50px"
            row.appendChild(box)
        }
        table.appendChild(row)
    }
    body.appendChild(table)
}


generateBlocks()


const generateBlocksInterval = setInterval(() => {
    const table = document.querySelector("table")

    const rows = table.querySelectorAll("tr")

    rows.forEach((row) => {
        let boxes = row.querySelectorAll("td")
        boxes.forEach((box) => box.style.backgroundColor = generateRamdonColor())
    })
}, 1000)
