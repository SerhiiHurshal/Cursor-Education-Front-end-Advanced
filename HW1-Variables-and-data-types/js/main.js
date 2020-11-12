const POSTCARD = 15.678
const PAINT = 123.965
const GLUE = 90.2345

// Використовуючи вбудований об'єкт Math – виведіть максимальне число
const MAX_PRICE = Math.max(POSTCARD, PAINT, GLUE)
console.log(MAX_PRICE)

//Використовуючи вбудований об'єкт Math – виведіть мінімальне число
const MIN_PRICE = Math.min(POSTCARD, PAINT, GLUE)
console.log(MIN_PRICE)

//Складіть вартість всіх товарів, помістіть її в змінну та виведіть цю суму
const PRICE_OF_ALL_PRODUCTS = POSTCARD + PAINT + GLUE
console.log(PRICE_OF_ALL_PRODUCTS)

//Відкиньте копійки у всіх товарів, потім – складіть цілу частину вартості кожного товару між собою. 
//Округлення використовувати в МЕНЬШУ сторону
const APPROXIMATE_PRICE_OF_ALL_PRODUCTS = Math.floor(POSTCARD) + Math.floor(PAINT) + Math.floor(GLUE)
console.log(APPROXIMATE_PRICE_OF_ALL_PRODUCTS)

//Виведіть суму товарів округлену до сотень
const ROUNDED_PRICE_OF_ALL_PRODUCTS = Math.round(PRICE_OF_ALL_PRODUCTS/100)*100
console.log(ROUNDED_PRICE_OF_ALL_PRODUCTS)

//Виведіть булеве значення: чи є сума всіх товарів (округлена в меншу сторону) парним чи непарним числом?
const EVEN_OR_ODD = Math.round(PRICE_OF_ALL_PRODUCTS) & 1
console.log(EVEN_OR_ODD)

//Виведіть суму решти, при оплаті всіх товарів (без округлення), якщо клієнт платить 500 грн
const REST = 500 - PRICE_OF_ALL_PRODUCTS
console.log(REST)

//Виведіть середнє значення цін, округлене до другого знаку після коми
const AVARAGE_PRICE_OF_ALL_PRODUCTS = Math.round((PRICE_OF_ALL_PRODUCTS/3)*100)/100
console.log(AVARAGE_PRICE_OF_ALL_PRODUCTS)

//Створіть змінну, в якої збережіть випадкову знижку (використовуйте функцію Math.random).
//Зробіть клієнту випадкову знижку та виведіть суму до оплати округлену до 2 знаків після коми.
//Виведіть чистий прибуток, якщо клієнт заплатив зі знижкою та собівартість товарів рівно в два рази нижче їх ціни?
const DISCOUNT = Math.round(Math.random()*100)
console.log(DISCOUNT)

const DISCOUNT_FROM_ALL_PRICE = Math.round((PRICE_OF_ALL_PRODUCTS * (DISCOUNT/100))*100)/100
console.log(DISCOUNT_FROM_ALL_PRICE)

const NET_PROFIT = Math.round((PRICE_OF_ALL_PRODUCTS/2 - DISCOUNT_FROM_ALL_PRICE)*100)/100
console.log(NET_PROFIT)

// Створіть шаблонний рядок та виведіть всі обчислення вчинені в Base частині домашнього завдання у вигляді одного рядка
const FINAL_STRING = `
Максимальна ціна: ${MAX_PRICE} <br>
Мінімальна ціна: ${MIN_PRICE} <br>
Вартість всіх товарів: ${PRICE_OF_ALL_PRODUCTS} <br>
Вартість всіх товарів без копійок: ${APPROXIMATE_PRICE_OF_ALL_PRODUCTS} <br>
Сума товарів округлена до сотень: ${ROUNDED_PRICE_OF_ALL_PRODUCTS} <br>
Чи є сума товарів парним числом(false - парне, true - непарне): ${Boolean(EVEN_OR_ODD)} <br>
Решта якщо клієнт платить 500: ${REST} <br>
Cереднє значення цін, округлене до другого знаку після коми: ${AVARAGE_PRICE_OF_ALL_PRODUCTS} <br>
Знижка склала: ${DISCOUNT}% <br>
Клієнт заплатив на ${DISCOUNT_FROM_ALL_PRICE} менше <br>
Чистий прибуток склав: ${NET_PROFIT}`

document.writeln(FINAL_STRING)
