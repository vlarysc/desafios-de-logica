const array = ["itens", 5, "variados", true, 100];

function addItens(itens) {
  array.push(itens);
  return console.log(array);
}

addItens(new Array(45, "pipoca", false));

console.log(`O segundo elemento do segundo array é ${array[5][1]}`);

console.log(`O primeiro array contem ${array.length} elementos`);

console.log(`O segundo array contem ${array[5].length} elementos`);

const numeros = [10, 11, 12, 13, 14, 15, 16, 17, 18, 19, 20];
let i = 0;
while (i < numeros.length) {
  i++;
  if (numeros[i] % 2 === 0) {
    console.log(
      `Os números Pares são:
    `,
      numeros[i]
    );
  } else {
    console.log(
      `Os números Impar são:
    `,
      numeros[i]
    );
  }
}

let numeroToFor = [
  100, 101, 102, 103, 104, 105, 106, 107, 108, 109, 110, 111, 112, 113, 114,
  115, 116, 117, 118, 119, 120,
];

for (let i = 0; i < numeroToFor.length; i++) {
  if (numeroToFor[i] % 2 === 0) {
    console.log(`O número ${numeroToFor[i]} é par`);
  } else {
    console.log(`O número ${numeroToFor[i]} é ímpar`);
  }
}
