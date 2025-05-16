const display = document.getElementById('display');
const buttons = document.querySelectorAll('button');

let expression = '';

function updateDisplay() {
  display.value = expression;
}

buttons.forEach(button => {
  button.addEventListener('click', () => {
    handleInput(button.textContent);
  });
});

//handle input function
function handleInput(value) {
    if (value === '=') {
      try {
        const result = eval(expression).toString();
        addToHistory(expression, result);
        expression = result;
      } catch {
        expression = 'Error';
      }
    } else if (value === 'C') {
      expression = '';
    } else if (value === '√') {
      try {
        expression = Math.sqrt(eval(expression)).toString();
      } catch {
        expression = 'Error';
      }
    } else if (value === 'x²') {
      try {
        expression = Math.pow(eval(expression), 2).toString();
      } catch {
        expression = 'Error';
      }
    } else if (value === 'sin') {
      expression = Math.sin(toRadians(eval(expression))).toString();
    } else if (value === 'cos') {
      expression = Math.cos(toRadians(eval(expression))).toString();
    } else if (value === 'tan') {
      expression = Math.tan(toRadians(eval(expression))).toString();
    } else {
      expression += value;
    }
    
  
    updateDisplay();
  }
  
  
  // Converts degrees to radians
  function toRadians(degrees) {
    return degrees * (Math.PI / 180);
  }
  

// Handle keyboard input
document.addEventListener('keydown', (e) => {
  const key = e.key;

  if ((/[\d\+\-\*\/\.]/).test(key)) {
    handleInput(key);
  } else if (key === 'Enter') {
    handleInput('=');
  } else if (key === 'Backspace') {
    expression = expression.slice(0, -1);
    updateDisplay();
  } else if (key.toLowerCase() === 'c') {
    handleInput('C');
  }
});

const historyList = document.getElementById('history');

function addToHistory(expression, result) {
  const item = document.createElement('li');
  item.textContent = `${expression} = ${result}`;
  historyList.prepend(item); 
}

const themeSwitch = document.getElementById('theme-switch');
themeSwitch.addEventListener('change', () => {
  document.body.classList.toggle('dark');
});


