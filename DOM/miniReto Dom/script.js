// Capturar el formulario y los elementos relevantes
const form = document.getElementById("calculator-form"),
 billInput = document.getElementById("bill"),
 tipSelect = document.getElementById("tip"),
 resultDiv = document.getElementById("result"),
 billAmountSpan = document.getElementById("bill-amount"),
 tipPercentageSpan = document.getElementById("tip-percentage"),
 tipAmountSpan = document.getElementById("tip-amount"),
 totalAmountSpan = document.getElementById("total-amount"),
 cantPersonas = document.getElementById("personas"),
 valorPorPersonaSpan = document.getElementById("valorPorPersona");


// Escuchar el evento 'submit' del formulario
form.addEventListener("submit", function (event) {
  event.preventDefault(); // Evitar el envío del formulario

  // Validar los valores ingresados
  const bill = parseFloat(billInput.value);
  const tipPercentage = parseFloat(tipSelect.value);
  const personas = parseInt(cantPersonas.value);

  if (isNaN(bill) || isNaN(tipPercentage) || bill <= 0 || isNaN(personas) || personas <= 0) {
    alert(
      "Por favor, ingresa valores numéricos válidos para el monto de la cuenta y la cantidad de personas en las que desea dividir la cuenta"
    );
    return;
  }

  
  // Calcular la propina y el monto total
  const tipAmount = bill * tipPercentage;
  const totalAmount = bill + tipAmount;
  const totalAmounntPerPerson = totalAmount / personas ;

  // Mostrar los resultados
  billAmountSpan.textContent = "$" + bill.toFixed(2);
  tipPercentageSpan.textContent = (tipPercentage * 100).toFixed(0) + "%";
  tipAmountSpan.textContent = "$" + tipAmount.toFixed(2);
  totalAmountSpan.textContent = "$" + totalAmount.toFixed(2);
  valorPorPersonaSpan.textContent = "$" + totalAmounntPerPerson.toFixed(3)  ;
  resultDiv.classList.remove("hidden");
});