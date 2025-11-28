const usuario1 = {
  nombre: "Carlos",
  edad: 35,
  email: "carlos@email.com"
};

const usuario2 = Object.assign({}, usuario1);

usuario2.edad = 40;

console.log("usuario1:", usuario1);
console.log("usuario2:", usuario2);
