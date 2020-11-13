const N = parseInt(prompt("Enter first number"))
const M = parseInt(prompt("Enter secound number"))
const SKIP_EVEN = confirm("Пропускати парні числа?")
let sum = 0

if(!isNaN(N) && !isNaN(M)){
    const IS_N_ODD = N & 1
    let i = (!IS_N_ODD && SKIP_EVEN)? N+1:N //make even number odd if user need to skip even numbers

    for(i; i <= M; SKIP_EVEN? i+=2: i++){
        sum+=i
    }

    document.write(`Your first number: ${N} <br>
    Your secound number: ${M} <br>
    You choose ${SKIP_EVEN?"to skip even numbers":"not to skip even numbers"} <br>
    Your sum: ${sum}`)  
}else{
    alert("Wrong number!")
}