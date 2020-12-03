const ukraine = { tax: 0.195, middleSalary: 1789, vacancies: 11476 }
const latvia = { tax: 0.25, middleSalary: 1586, vacancies: 3921 }
const litva = { tax: 0.15, middleSalary: 1509, vacancies: 1114 }


const getMyTaxes = function(salary) {
    const result = salary * this.tax

    return result.toFixed(2)
}


const getMiddleTaxes = function() {
    const result = this.tax * this.middleSalary

    return result.toFixed(2)
}


const getTotalTaxes = function() {
    const result = getMiddleTaxes.call(this) * this.vacancies

    return result.toFixed(2)
}


const getMySalary = function() {
    const salary = Math.round(Math.random() * (2000-1500)+1500)

    const taxes = +getMyTaxes.call(this, salary)

    const profit = +(salary - taxes).toFixed(2)

    const salaryInfo = {
        salary,
        taxes,
        profit
    }

    console.log(salaryInfo)
}


document.write(`Cкільки податків ви заплатите як IT: ${getMyTaxes.call(ukraine, 25000)} <br>`)
document.write(`Cкільки у середньому податків платятт IT-спеціалісти: ${getMiddleTaxes.call(ukraine)} <br>`)
document.write(`Cкільки всього податків платять IT-спеціалісти: ${getTotalTaxes.call(ukraine)} <br>`)
document.write(`Таймер був запущений, об'єкти виводяться у консоль<br>`)

const timer  = setInterval(() => getMySalary.call(ukraine), 1000)