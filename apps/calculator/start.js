window.onload = function () {
  //   variables
  let n1 = "";
  let n2 = "";
  let operator = "";
  let screen = document.getElementById("value");
  let clearBtn = document.getElementById("clear");

  // clean screen
  clearBtn.addEventListener(
    "click",
    function () {
      screen.value = 0;
      n1 = 0;
      n2 = 0;
      operator = "";
    },
    false
  );

  // Calculate
  document.getElementById("equal").addEventListener("click", calculate);

  //   set oprators
  const operators = document.getElementsByClassName("operator");
  for (var i = 0; i < operators.length; i++) {
    operators[i].addEventListener("click", setOperator, false);
  }
  const numbers = document.getElementsByClassName("num");

  //   set numbers
  for (var i = 0; i < numbers.length; i++) {
    numbers[i].addEventListener("click", setNumbers, false);
  }

  function setOperator(e) {
    operator = e.target.textContent.trim();
    screen.value = operator;
  }

  function setNumbers(e) {
    const number = e.target.textContent;
    if (!operator) {
      n1 = parseInt(n1 + number);
      screen.value = n1;
    } else {
      n2 = parseInt(n2 + number);
      screen.value = n2;
    }
  }

  function calculate() {
    let result = "";
    n1 = parseInt(n1);
    n2 = parseInt(n2);
    if (operator === "+") {
      result = n1 + n2;
    } else if (operator === "-") {
      result = n1 - n2;
    } else if (operator === "*") {
      result = n1 * n2;
    } else if (operator === "/") {
      result = n1 / n2;
    }

    screen.value = result;
    return result;
  }
};
