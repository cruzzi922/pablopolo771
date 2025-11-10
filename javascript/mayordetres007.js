function mayorDeTres(a, b, c) {
  let mayor = a;
  if (b > mayor) {
    mayor = b;
  }
  if (c > mayor) {
    mayor = c;
  }
  return mayor;
}

console.log(mayorDeTres(10, 25, 15)); 