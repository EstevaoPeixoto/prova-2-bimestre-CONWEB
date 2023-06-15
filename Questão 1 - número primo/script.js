// Função para verificar se um número é primo
function isPrime(number) {
    if (number <= 1) {
      return false;
    }
    
    for (var i = 2; i <= Math.sqrt(number); i++) {
      if (number % i === 0) {
        return false;
      }
    }
    
    return true;
  }
  
  // Função para verificar se um número é primo ou não
  function checkPrime() {
    var numberInput = document.getElementById("number");
    var number = parseInt(numberInput.value);
    
    var result = document.getElementById("result");
    
    if (isPrime(number)) {
      result.textContent = number + " é um número primo.";
      listPrimeNumbers();
    } else {
      result.textContent = number + " não é um número primo.";
    }
  }
  
  // Função para listar todos os números primos de 1 a 1000
  function listPrimeNumbers() {
    var primeNumbers = [];
    
    for (var i = 1; i <= 1000; i++) {
      if (isPrime(i)) {
        primeNumbers.push(i);
      }
    }
    
    var result = document.getElementById("result");
    result.textContent += "\nNúmeros primos de 1 a 1000: " + primeNumbers.join(", ");
  }