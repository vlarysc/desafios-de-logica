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

/* Crie uma função chamada `book`, que recebe um parâmetro, que será o nome do
livro. Dentro dessa função, declare uma variável que recebe um objeto com as
seguintes características:
- esse objeto irá receber 3 propriedades, que serão nomes de livros;
- cada uma dessas propriedades será um novo objeto, que terá outras 3
propriedades:
    - `quantidadePaginas` - Number (quantidade de páginas)
    - `autor` - String
    - `editora` - String
- A função deve retornar o objeto referente ao livro passado por parâmetro.
- Se o parâmetro não for passado, a função deve retornar o objeto com todos
os livros. */



function book(name) {  
    
      livros = {
    
        codigoLimpo: {
            
            quantidadePaginas: 300,
            autor: "Matheus",
            editora: "Saber"
        },

        pontoCego:  {
           
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
   

  if(name) {
       return livros[name]
   } else {
       return livros
   } 

}

console.log(book("pontoCego").quantidadePaginas)