let displayValue = "0"; // To store the current value on the display

function updateDisplay() {
  const display = document.getElementById("display");
  display.innerText = displayValue;
}

function appendToDisplay(value) {
  if (displayValue === "0") {
    displayValue = value;
  } else {
    displayValue += value;
  }
  updateDisplay();
}

function clearDisplay() {
  displayValue = "0";
  updateDisplay();
}

function calculate() {
  try {
    displayValue = eval(displayValue).toString();
  } catch (error) {
    displayValue = "Error";
  }
  updateDisplay();
}

// Handle keyboard input
document.addEventListener("keydown", (event) => {
  const key = event.key;

  if (/[0-9+\-*/.=]|Enter|Backspace|Escape/i.test(key)) {
    event.preventDefault();

    switch (key) {
      case "0": appendToDisplay("0"); break;
      case "1": appendToDisplay("1"); break;
      case "2": appendToDisplay("2"); break;
      case "3": appendToDisplay("3"); break;
      case "4": appendToDisplay("4"); break;
      case "5": appendToDisplay("5"); break;
      case "6": appendToDisplay("6"); break;
      case "7": appendToDisplay("7"); break;
      case "8": appendToDisplay("8"); break;
      case "9": appendToDisplay("9"); break;
      case "+": appendToDisplay("+"); break;
      case "-": appendToDisplay("-"); break;
      case "*": appendToDisplay("*"); break;
      case "/": appendToDisplay("/"); break;
      case ".": appendToDisplay("."); break;
      case "=": case "Enter": calculate(); break;
      case "Escape": clearDisplay(); break;
      case "Backspace":
        displayValue = displayValue.slice(0, -1) || "0";
        updateDisplay();
        break;
      default:
        break;
    }
  }
});

// Initialize display
updateDisplay();