
let fechaActual = new Date();

let anio = fechaActual.getFullYear();
console.log("Año actual:", anio);

let diasSemana = ["Domingo", "Lunes", "Martes", "Miércoles", "Jueves", "Viernes", "Sábado"];

let diaSemanaIndice = fechaActual.getDay();

console.log("Día de la semana:", diasSemana[diaSemanaIndice]);
