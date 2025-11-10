function fibonacci(n) {
  if (n <= 0) return [];
  if (n === 1) return [0];

  const secuencia = [0, 1];
  for (let i = 2; i < n; i++) {
    secuencia.push(secuencia[i - 1] + secuencia[i - 2]);
  }
  return secuencia;
}

console.log(fibonacci(7)); 
console.log(fibonacci(1)); 
