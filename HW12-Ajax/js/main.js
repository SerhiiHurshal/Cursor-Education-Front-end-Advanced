let characters = []


class Character{
    constructor(name, birthYear, gender){
        this._name = name
        this._birthYear = birthYear
        this._gender = gender
    }

    get name() {
        return this._name
    }

    get birthYear() {
        return this._birthYear
    }

    get gender() {
        return this._gender
    }

    get genderIco() {
        if(this._gender === "n/a" || this._gender === "none"){
            return `img/none.png`
        }
        return `img/${this._gender}.png`
    }

    get charactersIco() {
        return `img/${this._name}.jpg`
    }
}


const getPeopleFromEpisode = (episodeNumber) => {
    fetch(`https://swapi.dev/api/films/${episodeNumber}/`)
        .then((response) => {
            return response.json()
        })
        .then((data) => {
            data.characters.forEach((character) => {
                makeClassObject(character)
            })
        })
}


const makeClassObject = (url) => {
    fetch(url)
        .then((response) => {
            return response.json()
        })
        .then((data) => {
            const name = data.name
            const birthYear = data.birth_year
            const gender = data.gender

            const character = new Character(name, birthYear, gender)
            characters.push(character)
        })
}

const deleteCharacters = () => {
    characters = []
}

async function getListOfCharacters (numberOfEpisod){
    await setTimeout(() => getPeopleFromEpisode(numberOfEpisod), 0)
    return characters
}