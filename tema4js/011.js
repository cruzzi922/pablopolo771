
const idEmpleado = Symbol('id');

const empleado = {
  nombre: "Ana García",
  departamento: "Desarrollo",
  salario: 35000
};

empleado[idEmpleado] = 12345;

console.log("Iterando con for...in:");
for (let prop in empleado) {
  console.log(`${prop}: ${empleado[prop]}`);
}

console.log("\nAccediendo al ID con símbolo:", empleado[idEmpleado]);
