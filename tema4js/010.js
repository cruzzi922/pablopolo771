function Coche(marca, modelo, año) {
  this.marca = marca;
  this.modelo = modelo;
  this.año = año;
}

const coche1 = new Coche("Toyota", "Corolla", 2023);
const coche2 = new Coche("Ford", "Mustang", 2024);

console.log(coche1); 
console.log(coche2); 
