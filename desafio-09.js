/* let a = 0;

if (a === 0) {
  function myFunction() {
    var number1 = 10;
    var number2 = 20;
    console.log("Na função `myFunction`, o primeiro número é", number1);
    console.log("Na função `myFunction`, o segundo número é", number2);
    return number1 + number2;
  }
  myFunction();

  function myFunction2() {
    var number1 = 10;
    var number2 = 20;
    var sum = function sum() {
      return number1 + number2;
    };
    console.log("A soma de 10 e 20 é igual a", sum ? sum() : undefined);
    return sum();
  }
  myFunction2();

  function myFunction3() {
    var number2 = 50;
    var number1 = 40;
    console.log("Na função myFunction3, number1 é igual a", number1);
    console.log("A soma de 40 e 50 é igual a", sum());
    function sum() {
      return number1 + number2;
    }
    return sum();
  }
  myFunction3();
} */

function calculator(n1, n2) {
  return function fn(callback) {
    return callback(n1, n2);
  };
}

const sum = calculator(2, 13);
const subtration = calculator(12, 131);
const multiplication = calculator(22, 33);
const division = calculator(32, 336);

console.log(
  sum(function (n1, n2) {
    return `O resultado da subtração é: ${n1 + n2}`;
  })
);
console.log(
  subtration(function (n1, n2) {
    return `O resultado da subtração é: ${n1 - n2}`;
  })
);
console.log(
  multiplication(function (n1, n2) {
    return `O resultado da multiplicação é: ${n1 * n2}`;
  })
);
console.log(
  division(function (n1, n2) {
    return `O resultado da divisão é: ${n1 / n2}`;
  })
);
