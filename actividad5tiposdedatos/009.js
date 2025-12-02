let numeros = [10, 20, 30, 40, 50];

let sumaTotal = numeros.reduce((acumulador, numero) => acumulador + numero, 0);
console.log("Suma total:", sumaTotal);

let productoTotal = numeros.reduce((acumulador, numero) => acumulador * numero, 1);
console.log("Producto total:", productoTotal);
