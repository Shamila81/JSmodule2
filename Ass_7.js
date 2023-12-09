        function rollDice(numberOfSides) {
            // Generate a random number between 1 and the number of sides
            return Math.floor(Math.random() * numberOfSides) + 1;
        }

        function main() {
            // Prompt the user for the maximum number on the dice
            let maxNumber = parseInt(prompt('Enter the maximum number on the dice: '));

            // Initialize an empty list to store the dice rolls
            let rolls = [];

            // Keep rolling the dice until the result is the maximum number
            while (true) {
                let roll = rollDice(maxNumber);
                rolls.push(roll);

                // Stop rolling if the result is the maximum number
                if (roll === maxNumber) {
                    break;
                }
            }

            // Display the dice rolls in an unordered list (<ul>)
            let ul = document.createElement('ul');
            for (let roll of rolls) {
                let li = document.createElement('li');
                li.textContent = roll;
                ul.appendChild(li);
            }

            document.getElementById('dice-rolls').appendChild(ul);
        }

        main();