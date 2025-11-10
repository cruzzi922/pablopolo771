function esPalindromo(cadena) {

  const textoLimpio = cadena.toLowerCase().replace(/[\W_]/g, '');
  
  
  const textoInvertido = textoLimpio.split('').reverse().join('');
  
  
  return textoLimpio === textoInvertido;
}

console.log(esPalindromo("hola me llamo jose")); 
console.log(esPalindromo("Esto no es palíndromo")); 