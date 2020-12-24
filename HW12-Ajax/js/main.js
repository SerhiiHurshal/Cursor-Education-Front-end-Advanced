const getPeopleFromEpisode = (episode) => {
    fetch(`https://swapi.dev/api/films/${episode}/`)
        .then((response) => {
            return response.json()
        })
        .then((filmInfo) => {
            return filmInfo.characters
        })
        .then((charactersURL) => {
            charactersURL.map((characterURL) => {
                fetch(characterURL)
                    .then((response) => {
                        return response.json()
                    })
                    .then((characterInfo) => {
                        let genderIco
                        if(characterInfo.gender === "n/a" || characterInfo.gender === "none") genderIco =  `img/none.png`
                        else genderIco =  `img/${characterInfo.gender}.png`

                        const character = {
                            name: characterInfo.name,
                            birthYear: characterInfo.birth_year,
                            gender: characterInfo.gender,
                            genderIco: genderIco,
                            charactersIco: `img/${characterInfo.name}.jpg`
                        }

                        addCharInfoToHtml(character)
                    })
            })
        })
}

async function getPlanets (page) {
    deletePrevListItems()
    const url = `https://swapi.dev/api/planets/?page=${page}`
    fetch(url)
        .then((response) => {
            return response.json().then((response) => addPlanetNameToList(response.results))
        })
    }