let myvar = null;
myvar = 10
let soma = 15 + 8
soma++
soma *= 3
console.log(`soma até aqui tem o valor ${soma}`)
let somaIs = soma
console.log(somaIs === myvar ? "Soma é igual a myvar" : "Soma, não é igual a myvar")
console.log(somaIs <= myvar ? 'myvar é maior que Soma' : 'Soma é maior que myvar')

function divisao(num1, num2) {
    return num1 / num2
}

console.log(divisao(10, 2))