const cuentaBancaria = {
  saldo: 1000,
  
  toString() {
    return `Saldo: ${this.saldo} EUR`;
  }
};

console.log(cuentaBancaria.toString()); 
console.log(`${cuentaBancaria}`);        
console.log(cuentaBancaria);            