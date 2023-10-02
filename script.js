'use strict';
function checkAge() {
  // Get the input values
  const emailInput = document.getElementById("email").value;
  const birthdayInput = new Date(document.getElementById("birthday").value);

  // Calculate the user's age
  const today = new Date();
  const age = today.getFullYear() - birthdayInput.getFullYear();

  // Check if the user is 18 or older
  if (age >= 18) {
    // User is older than 18, proceed with form submission
    console.log("You are older than 18. Form submission can proceed.");
    // You can add code here to submit the form to the server.
  } else {
    // User is younger than 18, show an error message
    console.log("You must be 18 or older to submit this form.");
  }
}

