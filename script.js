const form = document.getElementById('voteForm');
const nameInput = document.getElementById('name');
const ageInput = document.getElementById('age');

form.addEventListener('submit', function(event) {
    event.preventDefault(); // Prevent actual form submission

    const name = nameInput.value.trim();
    const age = parseInt(ageInput.value.trim());

    // Validation
    if (!name || isNaN(age)) {
        alert("Please enter valid details.");
        return; // Exit if validation fails
    }

    // Create a Promise
    const checkEligibility = new Promise((resolve, reject) => {
        setTimeout(() => {
            if (age > 18) {
                resolve(`Welcome, ${name}. You can vote.`);
            } else {
                reject(`Oh sorry ${name}. You aren't old enough.`);
            }
        }, 4000); // 4-second delay
    });

    // Handle Promise
    checkEligibility
        .then(message => alert(message))
        .catch(error => alert(error));
});