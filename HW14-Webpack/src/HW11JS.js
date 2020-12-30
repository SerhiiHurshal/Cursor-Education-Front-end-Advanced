export async function getRandomChinese(length = 6) {
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

  console.log(Date.now() - start)

  return result
}

//getRandomChinese(6).then((result) => document.writeln(result))
