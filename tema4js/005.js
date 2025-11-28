const persona = {
  nombre: "Ana",
  edad: 28,
  pais: "España"
};

let nombreExiste = false;
let apellidoExiste = false;

for (let propiedad in persona) {


  console.log(`${propiedad}: ${persona[propiedad]}`);
}
