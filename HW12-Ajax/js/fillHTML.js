const addCharInfoToHtml = (character) => {
    const tableTemplate = document.getElementById("characterInfo")
    const td = tableTemplate.content.querySelectorAll("td")

    const avatar = td[0].querySelector("img")
    const charName = td[2]
    const charBirth = td[4]
    const genderIco = td[7].querySelector("img")
    const charGender = td[6]

    avatar.src = character.charactersIco
    avatar.style.width = "150px"
    avatar.style.height = "150px"
    avatar.style.borderRadius = "50%"
    genderIco.src = character.genderIco
    genderIco.style.width = "30px"
    genderIco.style.height = "30px"
    genderIco.style.borderRadius = "0%"

    charName.textContent = character.name
    charBirth.textContent = character.birthYear
    charGender.textContent = character.gender

    let clone = document.importNode(tableTemplate.content, true)
    const header = document.querySelector("header")

    header.parentNode.insertBefore(clone, header.nextSibling);
}

const cleanHTML = () => {
    const tables = document.querySelectorAll("table")
    tables.forEach((table) => {
        if(table.id !== "planetsList"){
            table.remove()
        }
    })
}


async function getCharactersFromPromise () {
    deleteCharacters()
    cleanHTML()
    let characters 
    await getListOfCharacters(this.episode).then(data => {
        characters = data
        console.log(characters)
    })
    await setTimeout(() => characters.map((character) => addCharInfoToHtml(character)), 4000)
}


document.querySelector("#episodeBtn1").addEventListener("click", {handleEvent: getCharactersFromPromise, episode: 1})

document.querySelector("#episodeBtn2").addEventListener("click", {handleEvent: getCharactersFromPromise, episode: 2})

document.querySelector("#episodeBtn3").addEventListener("click", {handleEvent: getCharactersFromPromise, episode: 3})

document.querySelector("#episodeBtn4").addEventListener("click", {handleEvent: getCharactersFromPromise, episode: 4})

document.querySelector("#episodeBtn5").addEventListener("click", {handleEvent: getCharactersFromPromise, episode: 5})

document.querySelector("#episodeBtn6").addEventListener("click", {handleEvent: getCharactersFromPromise, episode: 6})

const getPlanetsList = () => {
    const planetsNames = []

    for(i=1;i<61;i++){
        fetch(`https://swapi.dev/api/planets/${i}`)
            .then((response) => {
                return response.json()
            })
            .then((data) => {
                planetsNames.push(data.name)
            })
    }

    return planetsNames
}


let planets 
let page
const fillPlanetsListFirstTime = () => {
    page = 0
    const table = document.querySelector("#planetsList")

    const listItems = table.querySelectorAll("li")

    for(i = 0; i < 10; i++){
        listItems[i].textContent = planets[i]
    }
}


async function getPlanetsFromPromise () {
    planets = getPlanetsList()
    await setTimeout(() => {fillPlanetsListFirstTime()}, 3000)
}

getPlanetsFromPromise()


const deletePrevListItems = () => {
    const table = document.querySelector("#planetsList")

    const listItems = table.querySelectorAll("li")

    for(i = 0; i < 10; i++){
        listItems[i].textContent = ""
    }
}


const fillNextPage = () => {
    if(page < 5){
        deletePrevListItems()
        
        page += 1

        const table = document.querySelector("#planetsList")

        const listItems = table.querySelectorAll("li")

        for(i = page*10, j = 0; i < 10+10*page; i++, j++){
            listItems[j].textContent = planets[i]
        }

    }
}


const fillPrevPage = () => {
    if(page > 0){
        deletePrevListItems()

        page -= 1

        const table = document.querySelector("#planetsList")

        const listItems = table.querySelectorAll("li")

        for(i = page*10, j = 0; i < 10+10*page; i++, j++){
            listItems[j].textContent = planets[i]
        }
    }
}


document.querySelector("#nextPlanetsPage").addEventListener("click", fillNextPage)
document.querySelector("#prevPlanetsPage").addEventListener("click", fillPrevPage)
