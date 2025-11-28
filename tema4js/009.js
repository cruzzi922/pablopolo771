const persona = {
  nombre: "Ana",
  edad: 28,
  pais: "España",
  
  saludar: function() {
    console.log(`Hola, soy ${this.nombre} y tengo ${this.edad} años`);
  }
};


persona.saludar();