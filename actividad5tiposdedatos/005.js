let numeros = [3, 7, 2, 8, 1, 4, 10];

let maximo = Math.max(...numeros);
let minimo = Math.min(...numeros);

console.log("Valor máximo:", maximo);
console.log("Valor mínimo:", minimo);

let suma = 0;
for (let i = 0; i < numeros.length; i++) {
    suma += numeros[i];
}

console.log("Suma de todos los elementos:", suma);
