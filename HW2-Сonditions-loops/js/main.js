let reloadPage

do{
    const MIN_VALUE = parseInt(prompt("Enter first number"))
    if (isNaN(MIN_VALUE)){
        reloadPage = confirm("Wrong number! Try again?")
        continue
    }
    const MAX_VALUE = parseInt(prompt("Enter secound number"))
    if (isNaN(MAX_VALUE) || MIN_VALUE > MAX_VALUE){
        reloadPage = confirm("Wrong number! Try again?")
        continue
    }
    const SKIP_EVEN = confirm("Skip even numbers?")
    let sum = 0
    reloadPage = false

    const IS_N_ODD = MIN_VALUE & 1
    let i = (!IS_N_ODD && SKIP_EVEN)? MIN_VALUE+1:MIN_VALUE //make even number odd if user need to skip even numbers

    for(i; i <= MAX_VALUE; SKIP_EVEN? i+=2: i++){
        sum+=i
    }

    document.write(`Your first number: ${MIN_VALUE} <br>
    Your secound number: ${MAX_VALUE} <br>
    You choose ${SKIP_EVEN?"to skip even numbers":"not to skip even numbers"} <br>
    Your sum: ${sum}`)  
}while(reloadPage !== false)