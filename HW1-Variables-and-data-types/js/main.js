const POSTCARD = 15.678
const PAINT = 123.965
const GLUE = 90.2345

const MAX_PRICE = Math.max(POSTCARD, PAINT, GLUE)
console.log(MAX_PRICE)

const MIN_PRICE = Math.min(POSTCARD, PAINT, GLUE)
console.log(MIN_PRICE)

const PRICE_OF_ALL_PRODUCTS = POSTCARD + PAINT + GLUE
console.log(PRICE_OF_ALL_PRODUCTS)

const PRICE_OF_ALL_PRODUCTS_WITHOUT_COINS = Math.floor(POSTCARD) + Math.floor(PAINT) + Math.floor(GLUE)
console.log(PRICE_OF_ALL_PRODUCTS_WITHOUT_COINS)

const ROUNDED_PRICE_OF_ALL_PRODUCTS = Math.ceil(PRICE_OF_ALL_PRODUCTS/100)*100
console.log(ROUNDED_PRICE_OF_ALL_PRODUCTS)

const EVEN_OR_ODD = Math.round(PRICE_OF_ALL_PRODUCTS) & 1
console.log(Boolean(EVEN_OR_ODD))

const USERS_MONEY = 500
const REST = Math.round((USERS_MONEY - PRICE_OF_ALL_PRODUCTS)*100)/100
console.log(REST)

const AVARAGE_PRICE_OF_ALL_PRODUCTS = Math.round((PRICE_OF_ALL_PRODUCTS/3)*100)/100
console.log(AVARAGE_PRICE_OF_ALL_PRODUCTS)


const DISCOUNT = Math.round((Math.random()*(100 - 1) + 1))
console.log(DISCOUNT)

const DISCOUNT_FROM_ALL_PRICE = Math.round((PRICE_OF_ALL_PRODUCTS * (DISCOUNT/100))*100)/100
console.log(DISCOUNT_FROM_ALL_PRICE)

const NET_PROFIT = Math.round((PRICE_OF_ALL_PRODUCTS/2 - DISCOUNT_FROM_ALL_PRICE)*100)/100
console.log(NET_PROFIT)


const FINAL_STRING = `
Максимальна ціна: ${MAX_PRICE} <br>
Мінімальна ціна: ${MIN_PRICE} <br>
Вартість всіх товарів: ${PRICE_OF_ALL_PRODUCTS} <br>
Вартість всіх товарів без копійок: ${PRICE_OF_ALL_PRODUCTS_WITHOUT_COINS} <br>
Сума товарів округлена до сотень: ${ROUNDED_PRICE_OF_ALL_PRODUCTS} <br>
Чи є сума товарів парним числом(false - парне, true - непарне): ${Boolean(EVEN_OR_ODD)} <br>
Решта якщо клієнт платить 500: ${REST} <br>
Cереднє значення цін, округлене до другого знаку після коми: ${AVARAGE_PRICE_OF_ALL_PRODUCTS} <br>
Знижка склала: ${DISCOUNT}% <br>
Клієнт заплатив на ${DISCOUNT_FROM_ALL_PRICE} менше <br>
Чистий прибуток склав: ${NET_PROFIT}`

document.writeln(FINAL_STRING)
