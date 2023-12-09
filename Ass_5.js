const inputNumber = document.getElementById('inputNumber');
    const output = document.getElementById('output');

    let enteredNumbers = [];

    function checkNumber() {
      const newNumber = parseInt(inputNumber.value);

      if (enteredNumbers.includes(newNumber)) {
        alert(`Number ${newNumber} has already been entered. Program is stopping.`);
        const sortedNumbers = enteredNumbers.sort((a, b) => a - b);
        console.log(sortedNumbers);
        exit();
      } else {
        enteredNumbers.push(newNumber);
        output.textContent = enteredNumbers;
        inputNumber.value = '';
      }
    }
