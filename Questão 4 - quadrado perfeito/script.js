// Função para verificar se um número é um quadrado perfeito
function isPerfectSquare(number) {
    var squareRoot = Math.sqrt(number);
    
    return squareRoot === Math.floor(squareRoot);
  }
  
  // Função para verificar se o número inserido é um quadrado perfeito e exibir a raiz quadrada
  function checkPerfectSquare() {
    var numberInput = document.getElementById("number");
    var number = parseFloat(numberInput.value);
    
    var result = document.getElementById("result");
    var squareRootElement = document.getElementById("squareRoot");
    
    // Verificar se o número é um quadrado perfeito
    if (isPerfectSquare(number)) {
      result.innerHTML = number + " é um quadrado perfeito.";
    } else {
      result.innerHTML = number + " não é um quadrado perfeito.";
    }
    
    // Exibir a raiz quadrada do número com duas casas decimais
    var squareRoot = Math.sqrt(number);
    squareRootElement.innerHTML = "A raiz quadrada de " + number.toFixed(2) + " é " + squareRoot.toFixed(2) + ".";
  }