const getMaxDigit = (number) =>{
    const toStringNumber = number.toString()
    let maxNumber = 0

    for (i = 0; i < toStringNumber.length; i++){
        if (+toStringNumber.charAt(i) > maxNumber) maxNumber = +toStringNumber.charAt(i);
    }

    return +maxNumber
}


const toPower = (number, power) =>{
    let result = number

    if (power == 0){
        return 1
    } else if (power > 0){
        for (i = 1; i < power; i++ ){
            result *= number
        }

        return result
    } else {
        return "Для добуття кореня з чиста використайте іншу функцію"
    }
}


const formatName = (name) => {
    const firstChar = name.charAt(0).toUpperCase()
    const restName = name.slice(1).toLowerCase()

    return firstChar + restName
}


const netSalary = (salary) =>{
    const PERCENT_WITHOUT_TAX = 100 - 19.5

    const result = (salary*PERCENT_WITHOUT_TAX)/100

    return result
}


const getRandomNumber = (minValue, maxValue) =>{
    return Math.round(Math.random() * (maxValue - minValue) + minValue)
}


const countLetter = (letter, word) =>{
    let counterLetters = 0

    for (i = 0; i < word.length; i++){
        if (word.charAt(i).toLowerCase() === letter.toLowerCase()) counterLetters++
    }

    return counterLetters
}


const convertCurrency = (money) =>{
    const DOLLAR_EXCHANGE_RATE_TO_UAH = 25
    const dollarPatt = /\$/gi 
    const UAHPatt = /UAH/gi

    if (money.search(dollarPatt) >= 0){
        const inHryvnias = +money.replace(dollarPatt, "")*DOLLAR_EXCHANGE_RATE_TO_UAH
        return `${inHryvnias} грн.`
    } else if(money.search(UAHPatt) >= 0){
        const inDollars = +money.replace(UAHPatt, "")/DOLLAR_EXCHANGE_RATE_TO_UAH
        return `${inDollars}$`
    } else {
        return "Wrong syntax!"
    }
}


const getRandomPassword = (lengthOFPassword = 8) =>{
    let password = ''

    for (i = 0; i < lengthOFPassword; i++){
        password += getRandomNumber(0,9)
    }

    return password
}


const deleteLetters = (letter, word) =>{
    while(word.includes(letter)){
        let indexOfLetter = word.indexOf(letter)
        if (word.charAt(indexOfLetter) === letter)
            word = word.slice(0,indexOfLetter) + word.slice(indexOfLetter+1)
    }

    return word
}


const isPalyndrom = (word) =>{
    const toLowerWord = word.toLowerCase()
    let reversedWord = ''

    for (i = toLowerWord.length; i >= 0; i--){
        reversedWord += toLowerWord.charAt(i)
    }

    return toLowerWord === reversedWord
}


const deleteDuplicateLetter = (word) =>{
    let toLowerWord = word.toLowerCase()

    for (i = 0; i < toLowerWord.length; i++){
        if (toLowerWord.slice(i+1).includes(toLowerWord.charAt(i))){ 
            toLowerWord = deleteLetters(toLowerWord.charAt(i), toLowerWord)
            i = 0
        }
    }

    return toLowerWord
}


document.writeln(`Функція №1: ${getMaxDigit(-13565123)} <br />`)

document.writeln(`Функція №2: ${toPower(5, 3)} <br />`)

document.writeln(`Функція №3: ${formatName("sERgIY")} <br />`)

document.writeln(`Функція №4: ${netSalary(1000)} <br />`)

document.writeln(`Функція №5: ${getRandomNumber(4, 10)} <br />`)

document.writeln(`Функція №6: ${countLetter('s', "Sssssssnake")} <br />`)

document.writeln(`Функція №7: ${convertCurrency("$100")} <br />`)

document.writeln(`Функція №8: ${getRandomPassword(10)} <br />`)

document.writeln(`Функція №9: ${deleteLetters('d', "daddy")} <br />`)

document.writeln(`Функція №10: ${isPalyndrom("racecar")} <br />`)

document.writeln(`Функція №11: ${deleteDuplicateLetter("Бісквіт був дуже ніжним")} <br />`)

