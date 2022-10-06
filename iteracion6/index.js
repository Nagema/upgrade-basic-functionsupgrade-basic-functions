// **Iteración #6: Valores únicos**

// Crea una función que reciba por parámetro un array y compruebe
// si existen elementos duplicados, en caso que existan los elimina para retornar
//un array sin los elementos duplicados. Puedes usar este array para probar tu función:

const duplicates = [
  "sushi",
  "pizza",
  "burger",
  "potatoe",
  "pasta",
  "ice-cream",
  "pizza",
  "chicken",
  "onion rings",
  "pasta",
  "soda",
];

function removeDuplicates(list) {
  for (let i = 0; i < list.length; i++) {
    for (let j = i + 1; j < list.length; j++) {
      if (list[i] === list[j]) {
        list.splice(j, 1);
        j--;
      }
    }
  }
  return list;
}

console.log(removeDuplicates(duplicates));
