function contarCaracteres(cadena) {
  const conteo = {};

  const texto = cadena.replace(/\s/g, '');

  for (let char of texto) {
    if (conteo[char]) {
      conteo[char]++;
    } else {
      conteo[char] = 1;
    }
  }
  return conteo;
}

console.log(contarCaracteres("Hola mundo!")); 
console.log(contarCaracteres("JavaScript es genial"));