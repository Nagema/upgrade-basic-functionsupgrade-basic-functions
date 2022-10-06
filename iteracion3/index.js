// **Iteración #3: Calcular la suma**

// Calcular una suma puede ser tan simple como iterar sobre un array y sumar cada uno de los elementos.
// Implemente la función denominada sumNumbers que toma un array de números como argumento y devuelve la suma de todos los números de la matriz.

// Puedes usar este array para probar tu función:

const numbers = [1, 2, 3, 5, 45, 37, 58];
let sumResult = 0;
function sumAll(list) {
  for (let index = 0; index < list.length; index++) {
    const element = list[index];
    if (sumResult < element) {
      sumResult += element;
    }
  }
  return sumResult;
}

console.log(sumAll(numbers));
