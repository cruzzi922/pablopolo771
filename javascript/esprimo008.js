function esPrimo(numero) {
  if (numero <= 1) return false; 
  if (numero === 2) return true; 
  if (numero % 2 === 0) return false; 

  let limite = Math.sqrt(numero);
  for (let i = 3; i <= limite; i += 2) {
    if (numero % i === 0) {
      return false; 
    }
  }
  return true; 
}

console.log(esPrimo(11)); 
console.log(esPrimo(12)); 
console.log(esPrimo(1));  