addEventListener("load", calculate);

function getHistory() {
  return document.querySelector("#resultHistory").innerText;
}
function printHistory(valueHistory) {
  document.querySelector("#resultHistory").innerText = valueHistory;
}

function getResult() {
  return document.querySelector("#result").innerText;
}
function printResult(valueResult) {
  document.querySelector("#result").innerText = valueResult;
}

function calculate() {
  var operators = document.getElementsByClassName("operator");
  for (let i = 0; i < operators.length; i++) {
    operators[i].addEventListener("click", function () {
      if (this.id == "backspace") {
        let output = getResult();
        if (output) {
          output = output.substr(0, output.length - 1);
          printResult(output);
        }
      } else if (this.id == "clear") {
        printResult("");
        printHistory("");
      } else {
        let output = getResult();
        let history = getHistory();
        if (output) {
          history += output;
          if (this.id == "=") {
            let result = eval(history);
            printResult("");
            printHistory(result);
          } else {
            history += this.id;
            printHistory(history);
            printResult("");
          }
        }
      }
    });
  }

  var numbers = document.getElementsByClassName("number");
  for (let i = 0; i < numbers.length; i++) {
    numbers[i].addEventListener("click", function () {
      var output = getResult();
      var history = getHistory();
      if (output != NaN) {
        output += this.id;
        printResult(output);
      }
    });
  }
}
