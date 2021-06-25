function soma(a, b) {
    return a + b
}

let res = soma(3, 2) + 5

console.log(`O valor atualizado dessa variável é ${res}`)

let newV = null

function adicionarV(newV) {
    valor = newV

    return valor
}

console.log(`O valor acima é ${adicionarV(3)}`)


function multiplicando(a, b, c) {
    if (a, b, c) {
        return a * b * c + 2
    } if (a, b) {
        return 'Preencha todos os valores corretamente!'
    }
}

console.log(multiplicando(3, 2))
console.log(multiplicando(3, 2, 4))

function somando(a, b, c) {
    if (a && b && c) {
        return (a + b) / c
    } if (a && b) {
        return a + b
    } if (a) {
        return a
    }
}



console.log('1 Argumento:', somando(4))
console.log('2 Argumentos:', somando(4, 2))
console.log('3 Argumentos:', somando(4, 2, 2))