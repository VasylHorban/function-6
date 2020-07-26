//1
let fib = num => {
    let a = 1;
    let b = 1;
    let result = [a, b];
    for(let i = 3; i <= num; i ++){
        let c = a + b;
        result.push(c)
        a = b;
        b = c
    }
    return result.join(' ')
}
console.log(fib(5))
console.log(fib(10))

//2
let prog = function(n, q){
    let a = 1;
    let result = 0;
    for(let i = 1; i<= n; i++){
        result += a
        a *= q
        
        
    }
    return result
}

let prog2 = function(n, q){
    let b1 = 1;
    return b1 * ((1-q**n))/(1-q)
}

console.log(prog(5, 2))
console.log(prog(4, 3))

console.log(prog2(5, 2))
console.log(prog2(4, 3))

//3
let firstNum = +prompt('Введіть перше число')
let secondNum = +prompt('Введіть друге число')

let simpleNumber = (a, b) => {
    let max = b;
    let min = a;
    let message = 'Простих чисел не знайдено'
    if(a > b) {
        max = a;
        min = b
    }
    let out =[];
    for(let i = min; i < max; i++){
        let isSimple = true
        for(let j =2; j<i ;j++ ){
            if(i%j==0){
                isSimple = false
            }
        }
        if(isSimple) out.push(i)
    }
    if(out.length) message = `Прості числа між ${min} та ${max} це : ${out.join()}`;
    console.log(message)
}
simpleNumber(firstNum, secondNum)