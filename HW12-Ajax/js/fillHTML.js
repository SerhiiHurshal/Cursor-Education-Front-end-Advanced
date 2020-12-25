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


let prevEpisodeNumber = 0


function addCharacters () {
    if(prevEpisodeNumber !== this.episode){
        prevEpisodeNumber = this.episode

        const tables = document.querySelectorAll("table")
        tables.forEach((table) => {
            if(table.id !== "planetsList"){
                table.remove()
            }
        })

        getPeopleFromEpisode(this.episode)
    }
}


document.querySelector("#episodeBtn1").addEventListener("click", {handleEvent: addCharacters, episode: 1})

document.querySelector("#episodeBtn2").addEventListener("click", {handleEvent: addCharacters, episode: 2})

document.querySelector("#episodeBtn3").addEventListener("click", {handleEvent: addCharacters, episode: 3})

document.querySelector("#episodeBtn4").addEventListener("click", {handleEvent: addCharacters, episode: 4})

document.querySelector("#episodeBtn5").addEventListener("click", {handleEvent: addCharacters, episode: 5})

document.querySelector("#episodeBtn6").addEventListener("click", {handleEvent: addCharacters, episode: 6})


let page = 1


const fillPlanetsListFirstTime = () => {
    getPlanets(page)
}


const NextPageOfPlanets = () => {
    if(page < 6){
        page += 1
        getPlanets(page)
    }
}

const PrevPageOfPlanets = () => {
    if (page > 1){
        page -= 1
        getPlanets(page)
    }
}


const deletePrevListItems = () => {
    const table = document.querySelector("#planetsList")

    const listItems = table.querySelectorAll("li")

    for(i = 0; i < 10; i++){
        listItems[i].textContent = "loading..."
    }
}


document.querySelector("#nextPlanetsPage").addEventListener("click", NextPageOfPlanets)
document.querySelector("#prevPlanetsPage").addEventListener("click", PrevPageOfPlanets)

const addPlanetNameToList = (planets) => {
    const table = document.querySelector("#planetsList")
    const listItems = table.querySelectorAll("li")

    planets.map((planet, i) => {
        listItems[i].textContent = planet.name
    })
}


fillPlanetsListFirstTime()
