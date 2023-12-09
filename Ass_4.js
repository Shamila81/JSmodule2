var numbers = [];

    function addNumber() {
      var number = parseInt(document.getElementById('inputNumber').value);
      if (number === 0) {
        return;
      }

      numbers.push(number);
      document.getElementById('inputNumber').value = '';
    }

    function displaySortedNumbers() {
      var sortedNumbers = numbers.sort((a, b) => b - a);
      var outputString = '';
      for (var i = 0; i < sortedNumbers.length; i++) {
        outputString += sortedNumbers[i] + '<br>';
      }

      document.getElementById('output').innerHTML = outputString;
    }