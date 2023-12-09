
        function rollDice() {
            // Generate a random number between 1 and 6
            return Math.floor(Math.random() * 6) + 1;
        }

        function main() {
            // Initialize an empty list to store the dice rolls
            let rolls = [];

            // Keep rolling the dice until the result is 6
            while (true) {
                let roll = rollDice();
                rolls.push(roll);

                // Stop rolling if the result is 6
                if (roll === 6) {
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
