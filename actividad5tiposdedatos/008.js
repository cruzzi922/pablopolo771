
let productos = [
    { nombre: "Manzana", precio: 15, disponible: true },
    { nombre: "Aguacate", precio: 850, disponible: true },
    { nombre: "Plátano", precio: 8, disponible: true },
    { nombre: "Pelota", precio: 25, disponible: false },
    { nombre: "Naranja", precio: 12, disponible: true },
    { nombre: "Macarron", precio: 18, disponible: true }
];

let productosFiltrados = productos.filter(producto => 
    producto.disponible && producto.precio < 20
);

console.log("Productos filtrados:", productosFiltrados);

let nombresProductos = productosFiltrados.map(producto => producto.nombre);

console.log("Nombres de productos disponibles y baratos:", nombresProductos);
