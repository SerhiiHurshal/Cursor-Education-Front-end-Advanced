const students = [
  {
    name: 'Tanya',
    course: 3,
    subjects: {
      math: [4, 4, 3, 4],
      algorithms: [3, 3, 3, 4, 4, 4],
      data_science: [5, 5, 3, 4],
    },
  },
  {
    name: 'Victor',
    course: 4,
    subjects: {
      physics: [5, 5, 5, 3],
      economics: [2, 3, 3, 3, 3, 5],
      geometry: [5, 5, 2, 3, 5],
    },
  },
  {
    name: 'Anton',
    course: 2,
    subjects: {
      statistics: [4, 5, 5, 5, 5, 3, 4, 3, 4, 5],
      english: [5, 3],
      cosmology: [5, 5, 5, 5],
    },
  },
]

const findStudent = (nameOfStudent) => {
  return students.find((student) => student.name.toLowerCase() === nameOfStudent.toLowerCase())
}

const getSubjects = (nameOfStudent) => {
  const student = findStudent(nameOfStudent)

  const subjects = Object.keys(student.subjects)

  const result = subjects.map((subject) => {
    subject = subject.slice(0, 1).toUpperCase() + subject.slice(1)
    subject = subject.replace('_', ' ')
    return subject
  })

  return result
}

const getAverageMark = (nameOfStudent) => {
  const student = findStudent(nameOfStudent)

  let marks = Object.values(student.subjects)
  marks = marks.reduce((combinedMarks, marksArr) => combinedMarks.concat(marksArr))

  const result = marks.reduce((sum, mark) => sum + mark) / marks.length

  return result.toFixed(2)
}

const getStudentInfo = (nameOfStudent) => {
  const student = findStudent(nameOfStudent)

  const studentInfo = {
    course: student.course,
    name: student.name,
    averageMark: getAverageMark(nameOfStudent),
  }

  return studentInfo
}

const getStudentsNames = (students) => {
  const names = students.map((student) => student.name)

  return names.sort()
}

const getBestStudent = (students) => {
  const bestStudent = students.reduce(
    (bestStudent, student) => {
      let averageMark = getAverageMark(student.name)
      if (bestStudent[0] < averageMark) {
        return [averageMark, student.name]
      } else return bestStudent
    },
    [0, 0]
  )

  return bestStudent[1]
}

const calculateWordLetters = (word) => {
  const result = {}

  word.split('').forEach((letter) => {
    result[letter] = word.split(letter).length - 1
  })

  return result
}

document.write(`Список предметів студента: ${getSubjects('Tanya')} <br>`)
document.write(`Середній бал студента: ${getAverageMark('Tanya')}<br>`)
document.write(`Інформація про студента: ${JSON.stringify(getStudentInfo('Tanya'))}<br>`)
document.write(`Імена студентів: ${getStudentsNames(students)}<br>`)
document.write(`Студент з найвищим середнім балом: ${getBestStudent(students)}<br>`)
document.write(`Кількість букв у слові: ${JSON.stringify(calculateWordLetters('тест'))}<br>`)
