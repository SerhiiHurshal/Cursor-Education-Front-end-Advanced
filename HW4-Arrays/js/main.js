const students = ['Олександр', 'Ігор', 'Олена', 'Іра', 'Олексій', 'Світлана']
const themes = ['Диференційне рівняння', 'Теорія автоматів', 'Алгоритми і структури даних']
const marks = [4, 5, 5, 3, 4, 5]

const makePairs = (students) => {
  let studentsWithPair = []
  let pairs = []
  let pair = []

  for (student of students) {
    //finding girl without pair
    if (student.charAt(student.length - 1) == 'а' && !studentsWithPair.includes(student)) {
      pair = [...pair, student]
      studentsWithPair = [...studentsWithPair, student]

      for (student of students) {
        //finding boy without pair
        if (student.charAt(student.length - 1) !== 'а' && !studentsWithPair.includes(student)) {
          pair = [...pair, student]
          studentsWithPair = [...studentsWithPair, student]
          break
        }
      }

      pairs = [...pairs, pair.slice(0)] //copy pair to array of pairs
      pair.splice(0) //clean pair
    }
  }

  return pairs
}

const teamToProject = (teams, projects) => {
  let teamToProjectArr = []
  let pair = ''

  for (i = 0; i < teams.length; i++) {
    pair += teams[i][0] + ' і ' + teams[i][1]
    teamToProjectArr = [...teamToProjectArr, [pair, projects[i]]]
    pair = ''
  }

  return teamToProjectArr
}

const studentsGrades = (students, grades) => {
  let studentsGradesArr = []

  for (i = 0; i < students.length; i++) {
    studentsGradesArr = [...studentsGradesArr, [students[i], grades[i]]]
  }

  return studentsGradesArr
}

const teamsGrades = (teams) => {
  let teamToGrade = []
  let pair = ''
  let grade

  for (team of teams) {
    pair += team[0] + ' і ' + team[1]
    grade = Math.floor(Math.random() * (6 - 1) + 1)
    teamToGrade = [...teamToGrade, [pair, grade]]
    pair = ''
  }

  return teamToGrade
}

const showArray = (array) => {
  let prettyArray = '['
  for (element of array) {
    prettyArray += `[${element}]`
  }

  prettyArray += ']'

  return prettyArray
}

document.writeln(`Пари студентів: ${showArray(makePairs(students))} <br>`)

document.writeln(`Пари студентів і їх теми:${showArray(teamToProject(makePairs(students), themes))} <br>`)

document.writeln(`Оцінки студентів: ${showArray(studentsGrades(students, marks))} <br>`)

document.writeln(`Оцінки команд за проект: ${showArray(teamsGrades(makePairs(students)))}`)
