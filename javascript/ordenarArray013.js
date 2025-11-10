function ordenarArray(arr) {
  // Crear una copia para no modificar el array original
  let arrayOrdenado = arr.slice();
  let n = arrayOrdenado.length;

  for (let i = 0; i < n - 1; i++) {
    for (let j = 0; j < n - 1 - i; j++) {
      if (arrayOrdenado[j] > arrayOrdenado[j + 1]) {
        
        let temp = arrayOrdenado[j];
        arrayOrdenado[j] = arrayOrdenado[j + 1];
        arrayOrdenado[j + 1] = temp;
      }
    }
  }
  return arrayOrdenado;
}

console.log(ordenarArray([5, 2, 9, 1, 6])); 
console.log(ordenarArray([3, 0, -2, 8, 7])); 