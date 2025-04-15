window.onload = function () 
{
    document.getElementById("calcBtn").addEventListener("click", calculate);
    document.getElementById("clearBtn").addEventListener("click", clearFields);
};
  
  function calculate() 
  {
    const num1 = parseFloat(document.getElementById('num1').value);
    const num2 = parseFloat(document.getElementById('num2').value);
    const operation = document.getElementById('operation').value;
    let result;
  
    if (isNaN(num1) || isNaN(num2)) 
    {
      result = "Please enter valid numbers.";
    } 
    else 
    {
      switch (operation) 
      {
        case "add":
          result = num1 + num2;
          break;
        case "subtract":
          result = num1 - num2;
          break;
        case "multiply":
          result = num1 * num2;
          break;
        case "divide":
          result = num2 !== 0 ? num1 / num2 : "Cannot divide by zero.";
          break;
        case "percentage":
          result = num2 !== 0 ? (num1 / num2) * 100 + "%" : "Cannot calculate percentage with zero.";
          break;
        default:
          result = "Invalid operation.";
      }
    }
  
    document.getElementById('result').textContent = "Result: " + result;
  }
  
  function clearFields() 
  {
    document.getElementById('num1').value = "";
    document.getElementById('num2').value = "";
    document.getElementById('operation').value = "add";
    document.getElementById('result').textContent = "";
  }
  