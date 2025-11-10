function contarVocales(texto) {
  const vocales = "aáeéiíoóuú";
  let contador = 0;

  for (let letra of texto.toLowerCase()) {
    if (vocales.includes(letra)) {
      contador++;
    }
  }

  return contador;
}

console.log(contarVocales("Hola, ¿cómo estás?")); 
