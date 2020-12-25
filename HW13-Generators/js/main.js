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

