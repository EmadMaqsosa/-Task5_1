const display = document.getElementById("display");
const buttons = document.querySelectorAll(".btn");
const equalsButton = document.getElementById("equals");
const clearButton = document.getElementById("clear");

buttons.forEach((button) => {
  button.addEventListener("click", () => {
    display.value += button.textContent;
  });
});

equalsButton.addEventListener("click", () => {
  const expression = display.value;
  let result;

  function calculate(expr) {
    let num1, num2;

    if (expr.includes("+")) {
      [num1, num2] = expr.split("+").map(Number);
      return num1 + num2;
    }
    else if (expr.includes("-")) {
      [num1, num2] = expr.split("-").map(Number);
      return num1 - num2;
    }
    else if (expr.includes("*")) {
      [num1, num2] = expr.split("*").map(Number);
      return num1 * num2;
    }
    else if (expr.includes("/")) {
      [num1, num2] = expr.split("/").map(Number);
      return num1 / num2;
    }
  }
  result = calculate(expression);
  display.value = result;
});

clearButton.addEventListener("click", () => {
  display.value = "";
});

