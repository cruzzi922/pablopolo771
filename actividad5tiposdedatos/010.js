let empresa = {
    nombre: "Tech Solutions",
    ubicacion: {
        pais: "España",
        ciudad: "Madrid"
    },
    empleados: [
        { nombre: "Ana", puesto: "Desarrolladora" },
        { nombre: "Luis", puesto: "Diseñador" },
        { nombre: "Carlos", puesto: "Administrador" }
    ],


    mostrarEmpleados: function() {
        console.log("Lista de empleados:");
        this.empleados.forEach(empleado => {
            console.log(`${empleado.nombre} - ${empleado.puesto}`);
        });
    }
};

console.log("Ciudad de la empresa:", empresa.ubicacion.ciudad);

empresa.empleados.push({ nombre: "María", puesto: "Marketing" });

empresa.mostrarEmpleados();

/*
-- Comentarios para ejercicios adicionales --

011addPropertyToString.js/.html:
¿Puedo agregar una propiedad a un string? Considera:
let str = "Peter";
str.test = 5;
alert(str.test);
Respuesta: No funcionará como esperado, porque los strings son tipos primitivos en JS y no pueden tener propiedades dinámicas asignadas. `alert(str.test)` mostrará `undefined`.

012testCuriosity.js/.html:
alert( 9999999999999999 );
Respuesta: Mostrará 10000000000000000 debido a limitaciones en la precisión de números en JavaScript (Número de punto flotante de 64 bits).

013sumVisitorNumbers.js/.html:
Para obtener la suma correcta de dos números ingresados con prompt se debe convertir con Number() porque prompt devuelve strings. Por ejemplo:
let a = Number(prompt("Número 1"));
let b = Number(prompt("Número 2"));
alert(a + b);

014fixNumbers.js/.html:
6.35.toFixed(1) da 6.3 porque el número 6.35 no se representa exactamente en binario y es ligeramente menor que 6.35.
Para redondear correctamente, multiplica y divide antes de toFixed:
( Math.round(6.35 * 10) / 10 ).toFixed(1); // Resultado correcto: 6.4

 015. readNumber()
function readNumber() {
    while (true) {
        let input = prompt("Ingresa un número:");
        if (input === "" || input === null) return null;
        let num = Number(input);
        if (!isNaN(num)) return num;
        alert("Número inválido");
    }
}

// 016. Bucle infinito
/*
let i = 0;
while (i != 10) {
    i += 0.2;
}
Nunca termina porque 0.2 * 50 = 9.999999999999999 (no exactamente 10)
por imprecisión de punto flotante. Usar i < 10 o i <= 10
*/

// 017. random(min, max) - float
function random(min, max) {
    return min + Math.random() * (max - min);
}

// 018. randomInteger(min, max) - integer
function randomInteger(min, max) {
    return Math.floor(min + Math.random() * (max - min + 1));
}

// 019. ucFirst(str)
function ucFirst(str) {
    if (!str) return str;
    return str[0].toUpperCase() + str.slice(1);
}

// 020. checkSpam(str)
function checkSpam(str) {
    let lower = str.toLowerCase();
    return lower.includes('viagra') || lower.includes('xxx');
}
