/* let produtos = [11, 07, 19, 94, 27]

function array(produtos, index) {
    return produtos[index]
}
console.log(array(produtos, 2))


 */

/* let produtos = [11, "07", false, null, NaN]

function array2(produtos) {
    return produtos
}

console.log(array2(produtos)) */

function book(livros) {
    let livros = {
        codigoLimpo: {
            quantidadePaginas: 300,
            autor: "Matheus",
            editora: "Saber"
        },
        pontoCego: {
            quantidadePaginas: 136,
            autor: "Diego",
            editora: "Viver"
        },
        adrenalina: {
            quantidadePaginas: 243,
            autor: "Rodolfo",
            editora: "Bem"
        }
    }

    /* return new Promise((res, reject) => {
        try {
            let livro = book(livros)
            livro = livro.map((l) => l.livro)
            res(livro)
        } catch (err) {
            reject(err)
        } 
    }) */

    return livros
}

console.log(book(codigoLimpo))