let pessoa = {
    nome: "Manoel",
    sobrenome: "Neto",
    sexo: "Masculino",
    idade: 27,
    altura: 1.80,
    peso: 71,
    andando: false,
    caminhouQuantosMetros: 0,

    fazerAniversário() {
        let res = 0
        res = pessoa.idade + 1
        return pessoa.idade = res
    },
    andar(valor) {
        pessoa.andando = true
        return pessoa.caminhouQuantosMetros += valor
    },
    parar() {
        return pessoa.andando = false
    },
    nomeCompleto() {
        return `Olá! Meu nome completo é ${pessoa.nome + ' ' + pessoa.sobrenome}!`
    },
    mostrarIdade() {
        return `Olá, eu tenho ${pessoa.idade} Anos!`
    },
    mostrarPeso() {

        return `Olá, eu tenho ${pessoa.peso} Kgs!`
    },
    mostrarAltura() {

        return `Olá, eu tenho ${pessoa.altura} de altura!`
    },
    apresentacao() {
        return `Olá, eu me chamo ${pessoa.nome + ' ' + pessoa.sobrenome}, tenho ${pessoa.idade} anos, ${pessoa.altura} de altura, ${pessoa.peso} kgs e só hoje já caminhei ${pessoa.caminhouQuantosMetros} metros! `
    }
}

console.log(pessoa.fazerAniversário())
console.log(pessoa.fazerAniversário())
console.log(pessoa.fazerAniversário())
console.log(`${pessoa.andar(300)} Metros Percorridos`)
console.log(`${pessoa.andar(900)} Metros Percorridos`)
console.log(`${pessoa.andar(1900)} Metros Percorridos`)
console.log(pessoa.andando)
console.log(pessoa.parar() == false ? 'Parado' : 'Andando')
console.log(`${pessoa.caminhouQuantosMetros} Metros Percorridos`)
console.log(pessoa.nomeCompleto())
console.log(pessoa.mostrarIdade())
console.log(pessoa.mostrarPeso())
console.log(pessoa.mostrarAltura())
console.log(pessoa.apresentacao())

