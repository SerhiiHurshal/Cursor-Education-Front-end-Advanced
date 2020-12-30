export const generateCombinations = (word) => {
  if (word.length < 2) {
    return word
  }

  let permutationsArray = []

  for (let i = 0; i < word.length; i++) {
    let letter = word[i]

    let remainingChars = word.slice(0, i) + word.slice(i + 1, word.length)

    for (let permutation of generateCombinations(remainingChars)) {
      permutationsArray.push(letter + permutation)
    }
  }
  return permutationsArray
}
