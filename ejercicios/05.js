let array = [2, 5, 7, 15, -5, -100, 55];

function getMenorMayor(arr) {
  let menor = arr[0];
  let mayor = arr[0];

  for (numero of arr) {
    mayor = mayor > numero ? mayor : numero;
    menor = menor < numero ? menor : numero;
  }
  return [menor, mayor];
}
let numeros = getMenorMayor(array);
console.log(numeros);

// let array = [2, 5, 7, 15, -5, -100, 55];

// function getMenorMayor(arr) {
//   let menor = Math.min(...arr);
//   let mayor = Math.max(...arr);
//   return [menor, mayor];
// }

// let numeros = getMenorMayor(array);
// console.log(numeros);
