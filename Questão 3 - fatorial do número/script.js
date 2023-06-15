// Função para calcular o fatorial de um número
function factorial(number) {
  if (number === 0 || number === 1) {
    return 1;
  }
  
  var result = 1;
  for (var i = 2; i <= number; i++) {
    result *= i;
  }
  
  return result;
}

// Função para calcular o fatorial do número inserido e listar os fatoriais de 1 a 10
function calculateFactorial() {
  var numberInput = document.getElementById("number");
  var number = parseInt(numberInput.value);
  
  var result = document.getElementById("result");
  
  // Calcular o fatorial do número inserido
  var factorialNumber = factorial(number);
  
  // Listar os fatoriais de 1 a 10
  var factorialList = "";
  for (var i = 1; i <= 10; i++) {
    factorialList += i + "! = " + factorial(i) + "<br>";
  }
  
  result.innerHTML = "O fatorial de " + number + " é: " + factorialNumber + "<br><br>";
  result.innerHTML += "Fatoriais de 1 a 10:<br>" + factorialList;
}