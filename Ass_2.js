// Get the number of participants from the user
        const numberOfParticipants = prompt('Enter the number of participants:');

        // Initialize an empty array to store participant names
        const participantNames = [];

        // Loop for each participant and collect their name
        for (let i = 0; i < numberOfParticipants; i++) {
            const participantName = prompt(`Enter the name of participant ${i + 1}:`);
            participantNames.push(participantName);
        }


        participantNames.sort();

        // Create an ordered list (<ol>) to display participant names
        const participantListElement = document.getElementById('participant-list');
        participantListElement.innerHTML = '<ol>';

        // Add each participant name to the ordered list (<ol>)
        for (const participantName of participantNames) {
            participantListElement.innerHTML += `<li>${participantName}</li>`;
        }

        // Close the ordered list (<ol>)
        participantListElement.innerHTML += '</ol>';