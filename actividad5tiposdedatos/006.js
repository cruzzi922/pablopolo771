
let estudiante = {
    nombre: "Ana López Martínez",
    edad: 20,
    carrera: "Ingeniería Informática",
    
    mostrarInfo: function() {
        console.log("Nombre:", this.nombre);
        console.log("Edad:", this.edad);
        console.log("Carrera:", this.carrera);
        console.log("---");
    }
};

console.log("Información inicial:");
estudiante.mostrarInfo();

estudiante.edad = 21;

console.log("Información después de cambiar edad:");
estudiante.mostrarInfo();
