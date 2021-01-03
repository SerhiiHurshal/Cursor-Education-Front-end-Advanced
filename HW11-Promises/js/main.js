async function getRandomChinese(length) {
  const start = Date.now()

  let result = ''

  const getSing = () =>
    new Promise((resolve) =>
      setTimeout(() => {
        return resolve(String.fromCharCode(Date.now().toString().slice(-5)))
      }, 50)
    )

  while (length > 0) {
    result += await getSing()
    length--
  }

  console.log(`Time spent on this operation: ${Date.now() - start} milliseconds`)

  return result
}

getRandomChinese(6).then((result) => document.writeln(result))
