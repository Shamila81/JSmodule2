// Get the names of the six dogs from the user
        const dogNames = prompt('Enter the names of the six dogs:');

        // Split the dog names into an array
        const dogNameArray = dogNames.split(',');

        // Reverse the order of the dog names
        dogNameArray.reverse();

        // Create an unordered list (<ul>) to display dog names
        const dogNamesList = document.getElementById('dog-names');
        dogNamesList.innerHTML = '<ul>';

        // Add each dog name to the unordered list (<ul>)
        for (const dogName of dogNameArray) {
            dogNamesList.innerHTML += `<li>${dogName}</li>`;
        }

        // Close the unordered list (<ul>)
        dogNamesList.innerHTML += '</ul>';