// **Iteración #5: Calcular promedio de strings**

// Crea una función que reciba por parámetro un array y
// cuando es un valor number lo sume y de lo contrario cuente la longitud del string y

const mixedElements = [6, 1, "Rayo", 1, "vallecano", "10", "upgrade", 8, "hub"];
let countLenght = 0;

function averageWord(elements) {
  for (let index = 0; index < elements.length; index++) {
    const element = elements[index];
    if (typeof element === "number") {
      countLenght += element;
    }
  }
  return countLenght;
}

console.log(averageWord(mixedElements));
