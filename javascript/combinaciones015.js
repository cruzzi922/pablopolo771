function combinaciones(cadena) {
  const resultado = [];

  for (let i = 0; i < cadena.length; i++) {
    let combinacion = '';
    for (let j = i; j < cadena.length; j++) {
      combinacion += cadena[j];
      resultado.push(combinacion);
    }
  }

  return resultado;
}

console.log(combinaciones("abc"));
console.log(combinaciones("xy"));