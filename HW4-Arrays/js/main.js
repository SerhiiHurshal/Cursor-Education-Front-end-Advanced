const students = ["Олександр", "Ігор", "Олена", "Іра", "Олексій", "Світлана"]
const themes = ["Диференційне рівняння", "Теорія автоматів", "Алгоритми і структури даних"]
const marks = [4, 5, 5, 3, 4, 5]


const makePairs = (students) => {
    const studentsWithPair = []
    const pairs = []
    const pair = []

    for (i = 0; i < students.length; i++){
        //finding girl without pair
        if (students[i].charAt(students[i].length-1) == 'а' && !studentsWithPair.includes(students[i])){
            pair.push(students[i])
            studentsWithPair.push(students[i])

            for(j = 0; j < students.length; j++){
                //finding boy without pair
                if (students[j].charAt(students[j].length-1) !== 'а' && !studentsWithPair.includes(students[j])){
                    pair.push(students[j])
                    studentsWithPair.push(students[j])
                    break
                }
            }

            pairs.push(pair.slice(0)) //copy pair to array of pairs
            pair.splice(0) //clean pair
        }
    }

    return pairs
}


const teamToProject = (teams, projects) => {
    const teamToProjectArr = []
    let pair = ''

    for (i = 0; i < teams.length; i++){
        pair += teams[i][0] + " і " + teams[i][1]
        teamToProjectArr.push([pair, projects[i]])
        pair = ''
    }

    return teamToProjectArr
}

const studentsGrades = (students, grades) => {
    const studentsGradesArr = []

    for (i = 0; i < students.length; i++){
        studentsGradesArr.push([students[i], grades[i]])
    }

    return studentsGradesArr
}


const teamsGrades = (teams) => {
    const teamToGrade = []
    let pair = ''
    let grade

    for (i = 0; i < teams.length; i++){
        pair += teams[i][0] + " і " + teams[i][1]
        grade = Math.floor(Math.random() * (6 - 1) + 1)
        teamToGrade.push([pair, grade])
        pair = ''
    }

    return teamToGrade
}


const showArray = (array) => {
    let prettyArray = "["
    for (i = 0; i < array.length; i++){
        prettyArray += `[${array[i]}]`
    }
    
    prettyArray += "]"

    return prettyArray
}


document.writeln(`Пари студентів: ${showArray(makePairs(students))} <br>`)

document.writeln(`Пари студентів і їх теми:${showArray(teamToProject(makePairs(students), themes))} <br>`)

document.writeln(`Оцінки студентів: ${showArray(studentsGrades(students, marks))} <br>`)

document.writeln(`Оцінки команд за проект: ${showArray(teamsGrades(makePairs(students)))}`)
