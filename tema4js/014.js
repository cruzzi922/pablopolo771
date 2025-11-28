class CuentaBancaria {
  #saldo;

  constructor(nombreTitular, saldoInicial) {
    this.nombreTitular = nombreTitular;
    this.#saldo = saldoInicial;
  }

  obtenerSaldo() {
    return this.#saldo;
  }

  depositar(monto) {
    if (monto > 0) {
      this.#saldo += monto;
      console.log(`Depósito realizado. Nuevo saldo: ${this.#saldo} EUR`);
    } else {
      console.log("El monto a depositar debe ser mayor que cero.");
    }
  }

  retirar(monto) {
    if (monto <= this.#saldo) {
      this.#saldo -= monto;
      console.log(`Retiro realizado. Nuevo saldo: ${this.#saldo} EUR`);
    } else {
      console.log("Fondos insuficientes para realizar el retiro.");
    }
  }
}

const cuentaJuan = new CuentaBancaria("Juan", 1000);
console.log(`Saldo inicial: ${cuentaJuan.obtenerSaldo()} EUR`);
cuentaJuan.depositar(500);
cuentaJuan.retirar(200);

try {
  console.log(cuentaJuan.saldo);
} catch (error) {
  console.log("Error esperado: No se puede acceder a #saldo desde fuera de la clase", error.message);
}
