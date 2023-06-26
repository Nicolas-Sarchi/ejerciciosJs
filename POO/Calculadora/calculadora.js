
class Calculadora {
  constructor() {
    this.resultadoElemento = document.getElementById('resultado');
  }

  agregarAlResultado(valor) {
    this.resultadoElemento.value += valor;
  }

  borrarUltimoCaracter() {
    this.resultadoElemento.value = this.resultadoElemento.value.slice(0, -1);
  }

  limpiarResultado() {
    this.resultadoElemento.value = '';
  }

  calcularResultado() {
    try {
      this.resultadoElemento.value = eval(this.resultadoElemento.value);
    } catch (error) {
      this.resultadoElemento.value = 'Error';
    }
  }
}

const calculadora = new Calculadora();
