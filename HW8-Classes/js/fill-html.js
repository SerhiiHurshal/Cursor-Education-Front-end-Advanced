let countOFStudents = 0
const students = []

const createNewStudent = () => {
  const universityInput = document.getElementById('University')
  const courseInput = document.getElementById('Course')
  const fullnameInput = document.getElementById('Fullname')
  const isBudgetInput = document.getElementById('IsOnBudget')

  let student = {}

  if (isBudgetInput.checked) {
    student = new BudgetStudent(
      universityInput.value,
      courseInput.value,
      fullnameInput.value
    )
  } else {
    student = new Student(
      universityInput.value,
      courseInput.value,
      fullnameInput.value
    )
  }

  universityInput.value = ''
  courseInput.value = ''
  fullnameInput.value = ''
  isBudgetInput.checked = false

  students.push(student)
  return student
}

const addStudent = () => {
  student = createNewStudent()

  const tableTemplate = document.querySelector('#studentUI')
  const td = tableTemplate.content.querySelectorAll('td')
  td[0].firstElementChild.src = `img/00${Math.floor(
    Math.random() * (7 - 1) + 1
  )}.svg`
  td[1].textContent = student.getInfo()
  td[2].textContent = `Average mark: ${student.getAverageMark()}`
  td[3].textContent = `Is dismissed: ${student.isDismissed ? 'yes' : 'no'}`
  td[5].textContent = student.getMarks
  td[6].textContent = `Is on budget: ${
    student instanceof BudgetStudent ? 'yes' : 'no'
  }`

  td[2].id = `averageMarkStudent${countOFStudents}`
  td[3].id = `isDismissedStudent${countOFStudents}`
  td[5].id = `marksOfStudent${countOFStudents}`
  td[8].querySelector('input').id = `markToAddToStudent${countOFStudents}`
  td[9].querySelector('button').id = `addMarkToStudent${countOFStudents}`
  td[10].querySelector('button').id = `recoverStudent${countOFStudents}`

  let clone = document.importNode(tableTemplate.content, true)
  const header = document.querySelector('header')

  header.parentNode.insertBefore(clone, header.nextSibling)
  countOFStudents += 1
}

const getTargetId = (event) => {
  const targetId = event.target.id
  return targetId[targetId.length - 1]
}

const addMark = function (event) {
  const id = getTargetId(event)

  student = students[id]
  const inputOfMarkEl = document.getElementById(`markToAddToStudent${id}`)
  const marksOfStudentEl = document.getElementById(`marksOfStudent${id}`)
  const averageMarkOfStudentEl = document.getElementById(
    `averageMarkStudent${id}`
  )

  student.setMark = inputOfMarkEl.value
  marksOfStudentEl.textContent = student.getMarks
  averageMarkOfStudentEl.textContent = `Average mark: ${student.getAverageMark()}`

  inputOfMarkEl.value = ''
}

const dismissOrRecoverStudent = function (event) {
  const id = getTargetId(event)

  const marksOfStudentEl = document.getElementById(`marksOfStudent${id}`)
  const averageMarkOfStudentEl = document.getElementById(
    `averageMarkStudent${id}`
  )
  const isDismissedStudentEl = document.getElementById(
    `isDismissedStudent${id}`
  )

  student = students[id]

  if (student.dismissed) {
    event.target.textContent = 'Dismiss'
    isDismissedStudentEl.textContent = `Is dismissed: no`
    student.recover()
  } else {
    event.target.textContent = 'Recover'
    isDismissedStudentEl.textContent = `Is dismissed: yes`
    student.dismiss()
  }

  marksOfStudentEl.textContent = `${student.getMarks}`
  averageMarkOfStudentEl.textContent = `Average mark: ${student.getAverageMark()}`
}
