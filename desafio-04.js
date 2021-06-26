let isTruthy = (param) => {
    if(param) {
        return true
    } else {
        return false
    }
    }

console.log(isTruthy(1))

let carro = {
    marca: "Fiat",
    modelo: "Palio",
    placa: "IRX8820",
    ano: 2011,
    cor: "Branco",
    portas: 2,
    assentos: 5,
    qtdePessoas: 0,

    mudarCor(cor) {
        return carro.cor = cor
    },

    obterCor () {
        return carro.cor
    },
    obterModelo () {
        return carro.modelo
    },
    obterMarca () {
        return carro.marca
    },
    ObterMarcaModelo () {
        return `Esse carro é um ${carro.marca + ' ' + carro.modelo}`
    },
    addPessoas (numero) {
        let res = numero
        res += res
        let falta = carro.assentos - res == 1 ? `Falta ${carro.assentos - res} pessoa` : `Faltam ${carro.assentos - res} pessoas`
        if(res > carro.assentos) {            
            return `O carro não pode exceder o limite de ${carro.assentos} pessoas`
        } if (res >= carro.assentos) {
            return `O carro já está lotado! Já temos ${res} pessoas no carro!`
        } if (res < carro.assentos) {
            return `Já temos ${res} pessoas no carro! ${falta}`
        } else {
            return ``
        }
    }
}

console.log(carro.obterCor())
console.log(carro.mudarCor('Vermelho'))
console.log(carro.obterCor())
console.log(carro.mudarCor('Verde Musgo'))
console.log(carro.obterCor())
console.log(carro.ObterMarcaModelo())
console.log(carro.addPessoas(2))
console.log(carro.addPessoas(4))
console.log(carro.addPessoas((4 - 4)))
console.log(carro.addPessoas(10))
console.log(carro.addPessoas())
console.log(carro.obterModelo())
console.log(carro.obterMarca())






