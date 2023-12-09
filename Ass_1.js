const inputList = document.getElementById('inputList');

        for (let i = 0; i < 5; i++) {
            const inputElement = document.createElement('li');
            inputElement.textContent = `Enter number ${i + 1}:`;
            inputList.appendChild(inputElement);
        }

        function reverseNumbers() {
            const inputElements = inputList.querySelectorAll('li');
            const numbers = [];

            for (const inputElement of inputElements) {
                const inputValue = prompt('Enter the number');
                if (Number.isInteger(inputValue)) {
                    numbers.push(parseInt(inputValue));
                }
            }

            let reversedNumbers = [];
            for (let i = numbers.length - 1; i >= 0; i--) {
                reversedNumbers.push(numbers[i]);
            }

            console.log('Reversed numbers:');
            for (const number of reversedNumbers) {
                console.log(number);
            }
        }
