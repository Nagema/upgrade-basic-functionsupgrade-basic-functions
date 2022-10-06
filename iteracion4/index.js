// teración #4: Calcular el promedio
// Calcular un promedio es una tarea extremadamente común. Puedes usar este array para probar tu función:

const numbers = [12, 21, 38, 5, 45, 37, 6];
let num = 0;
function average(numbersList) {
  for (let index = 0; index < numbersList.length; index++) {
    const element = numbersList[index];
    num += element;
  }
  return num / numbersList.length;
}

console.log(average(numbers));
