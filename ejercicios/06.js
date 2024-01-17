let array = [2, 5, 7, 15, -5, -100, 55];

function getMenorMayor(arr) {
  let numPosiv = 0;
  for (elemento of arr) {
    if (elemento > 0) {
      numPosiv++;
    }
  }
  return numPosiv;
}
let resultado = getMenorMayor(array);
console.log(resultado);
