function getRandomNumber(minValue, maxValue) {
  return Math.round(Math.random() * (maxValue - minValue) + minValue)
}

export function getRandomPassword(lengthOFPassword = 8) {
  let password = ''

  for (let i = 0; i < lengthOFPassword; i++) {
    password += getRandomNumber(0, 9)
  }

  return password
}
