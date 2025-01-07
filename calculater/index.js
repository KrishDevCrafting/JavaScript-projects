const display = document.getElementById("display");

function appendToDisplay(value) {
  display.value += value;
}

function clearDisplay() {
  display.value = "";
}

function calculateResult() {
  try {
    // Replace symbols for eval compatibility
    const expression = display.value.replace(/÷/g, "/").replace(/×/g, "*");
    display.value = eval(expression);
  } catch (e) {
    display.value = "Error";
  }
}

function calculateSquareRoot() {
  try {
    display.value = Math.sqrt(eval(display.value));
  } catch (e) {
    display.value = "Error";
  }
}

function calculateSquare() {
  try {
    display.value = Math.pow(eval(display.value), 2);
  } catch (e) {
    display.value = "Error";
  }
}
