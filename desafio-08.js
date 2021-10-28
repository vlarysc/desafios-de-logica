/* const sum = (n1, n2) => {
  console.log(`o valor de ${n1} + ${n2} é ${n1 + n2}`);
};

sum(2, 3);

console.log(`o nome da função a cima é ${sum.name}`);

let eu = {
  nome: "Manoel",

  showName() {
    return `Meu nome é ${this.nome}`;
  },
  calculator(operador) {
    return function fn(n1, n2) {
      if (operador === "+") {
        return n1 + n2;
      }
      if (operador === "-") {
        return n1 - n2;
      }
      if (operador === "*") {
        return n1 * n2;
      }
      if (operador === "/") {
        return n1 / n2;
      }
      if (operador !== "+" || "-" || "*" || "/") {
        console.log(`O ${operador} é invalido!`);
      }
    };
  },
};

let varShowName = eu.showName();

console.log("oi", varShowName);
console.log(`A função ${varShowName.name} retorna ${varShowName}.`);

const operadorErrado = eu.calculator("&");
const soma = eu.calculator("+");
const subtracao = eu.calculator("-");
const multiplicacao = eu.calculator("*");
const divisao = eu.calculator("/");

console.log(subtracao(32, 2));
console.log(soma(13, 2));
console.log(multiplicacao(11, 22));
console.log(divisao(31, 12));
console.log(operadorErrado(31, 12));
 */

const sum = function calculateSum(a, b) {
  return console.log(`A soma de ${a} e ${b} é igual a:`, a + b);
};

sum(5, 2);

console.log("O nome da função qu faz a soma é:", sum);

function showName(name) {
  return name;
}

var ShowName = showName;
console.log(`A função ${ShowName} retorna`, ShowName("Rodrigo"));

function calculator(operador) {
  return function (valor1, valor2) {
    let resultado = 0;
    if (operador == "+") {
      resultado = valor1 + valor2;
      return `Resultado da operação: ${valor1} ${operador} ${valor2} = ${resultado}`;
    } else if (operador == "-") {
      resultado = valor1 - valor2;
      return `Resultado da operação: ${valor1} ${operador} ${valor2} = ${resultado}`;
    } else if (operador == "*") {
      resultado = valor1 * valor2;
      return `Resultado da operação: ${valor1} ${operador} ${valor2} = ${resultado}`;
    } else if (operador == "/") {
      resultado = valor1 / valor2;
      return `Resultado da operação: ${valor1} ${operador} ${valor2} = ${resultado}`;
    } else if (operador == "%") {
      resultado = valor1 % valor2;
      return `Resultado da operação: ${valor1} ${operador} ${valor2} = ${resultado}`;
    } else {
      return "O operador não é valido";
    }
  };
}

let sum = calculator("+");
let subtration = calculator("-");
let multiplication = calculator("*");
let division = calculator("/");
let mod = calculator("%");
let invalido = calculator("oi");

console.log(sum(2, 2));
console.log(subtration(2, 2));
console.log(multiplication(2, 2));
console.log(division(2, 2));
console.log(mod(2, 2));
console.log(invalido(2, 2));
