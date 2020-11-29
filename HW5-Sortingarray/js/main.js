const getRandomArray = (length, min, max) => {
    const randomArray = []
    for (i = 0; i < length; i++){
        randomArray.push(Math.floor(Math.random() * (max - min) + min))
    }

    return randomArray
}


const deleteNotIntElements = ((arr) => {
    arr = arr.filter(element => Number.isInteger(element))
    return arr
})


const getModa = (...numbers) => {
    numbers.sort((a,b) => a-b)
    numbers = deleteNotIntElements(numbers)
    let counter1 = 0
    let counter2 = 0
    let moda
    
    numbers.forEach((number, index, arr) => {
        if(index === 0){
            moda = number
            counter2 += 1
        } else if(number == arr[index-1]){
            counter2 += 1
        } else if (counter2 > counter1){
            counter1 = counter2
            counter2 = 1
            moda = arr[index-1]
        } else {
            counter2 = 1
        }
    })

    if(counter2 > counter1) moda = numbers[numbers.length-1]

    return moda
}


const getAverage = ((...numbers) => {
    numbers = deleteNotIntElements(numbers)
    const sumOfNumbers = numbers.reduce((total, number) => total + number)
    return sumOfNumbers/numbers.length
})


const getMedian = ((...numbers) => {
    numbers = deleteNotIntElements(numbers)
    numbers.sort((a,b) => a-b)

    //перевіряє кількість елементів масиву на парність і в залежності від цього вираховує медіану
    if (numbers.length & 1){
        return numbers[Math.floor(numbers.length/2)] 
    } else{
        return (numbers[numbers.length/2] + numbers[numbers.length/2+1])/2
    }
})


const filterEvenNumbers = ((...numbers) => {
    return numbers.filter((number, index) => !(index & 1))
})


const countPositiveNumbers = ((...numbers) => {
    return numbers.filter((number) => number > 0).length
})


const getDividedByFive = ((...numbers) => {
    return numbers.filter(number => Number.isInteger(number/5))
})


const replaceBadWords = ((string) => {
    const badWords = ["shit", "fuck"]
    const words = string.split(" ")

    const correctedWords = words.map((word) =>{
        let goodWord = ""

        badWords.forEach((badWord) => {
            if(word.includes(badWord)){
                goodWord = '*'.repeat(badWord.length) + word.slice(badWord.length)
            } else {
                goodWord = word
            }
        })

        return goodWord
    })

    return correctedWords.join(" ")
})


const divideByThree = ((word) => {
    const countOfCompositions = word.length/3
    word.replace(" ", "")
    wordCompositions = []

    if(word.length < 3){
        return "Wrong word!"
    } else{
        for(i = 0; i <= countOfCompositions; i++){
            wordCompositions.push(word.slice(0, 3))
            word = word.slice(3)
        }
    }

    return wordCompositions
})


const generateCombinations = ((word) => {
    if (word.length < 2 ){
        return word
    }
      
    let permutationsArray = [] 
    
    for (let i = 0; i < word.length; i++){
        let letter = word[i]

        let remainingChars = word.slice(0, i) + word.slice(i + 1, word.length)

        for (let permutation of generateCombinations(remainingChars)){
            permutationsArray.push(letter + permutation)
        }
    }
    return permutationsArray
})


document.writeln(`Масив випадкових чисел: ${getRandomArray(10, 1, 100)} <br>`)

document.writeln(`Мода: ${getModa(6, 2, 55, 11, 78, 2, 55, 77, 57, 87, 23, 2, 56, 3, 2)} <br>`)

document.writeln(`Середнє арифметичне: ${getAverage(6, 2, 55, 11, 78, 2, 55, 77, 57, 87, 23, 2, 56, 3, 2)} <br>`)

document.writeln(`Медіана: ${getMedian(6, 2, 55, 11, 78, 2, 55, 77, 57, 87, 23, 2, 56, 3, 2)} <br>`)

document.writeln(`Непарні числа: ${filterEvenNumbers(1, 2, 3, 4, 5, 6)} <br>`)

document.writeln(`Кількість чисел більше нуля: ${countPositiveNumbers(1, -2, 3, -4, -5, 6)} <br>`)

document.writeln(`Числа кратні 5: ${getDividedByFive(6, 2, 55, 11, 78, 2, 55, 77, 57, 87, 23, 2, 56, 3, 2)} <br>`)

document.writeln(`Виправлене речення: ${replaceBadWords("Are you fucking kidding?")} <br>`)

document.writeln(`Слово поділене на склади по 3 букви: ${divideByThree("Commander")} <br>`)

document.writeln(`Усі комбінації без повторень: ${generateCombinations("duck")}`)
