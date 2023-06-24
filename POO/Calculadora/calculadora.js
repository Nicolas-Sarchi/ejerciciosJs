class Calculator {
    constructor() {
      this.resultElement = document.getElementById('result');
      this.appendToResult = this.appendToResult.bind(this);
      this.deleteLastCharacter = this.deleteLastCharacter.bind(this);
      this.clearResult = this.clearResult.bind(this);
      this.calculateResult = this.calculateResult.bind(this);
    }

    appendToResult(value) {
      this.resultElement.value += value;
    }

    deleteLastCharacter() {
      this.resultElement.value = this.resultElement.value.slice(0, -1);
    }

    clearResult() {
      this.resultElement.value = '';
    }

    calculateResult() {
      try {
        this.resultElement.value = eval(this.resultElement.value);
      } catch (error) {
        this.resultElement.value = 'Error';
      }
    }
  }

  const calculator = new Calculator();