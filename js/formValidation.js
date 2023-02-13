// Get references to the form elements
const form = document.querySelector('.form');
const nameInput = document.querySelector('#name');
const emailInput = document.querySelector('#email');
const messageInput = document.querySelector('#message');

// Submit event handler
form.addEventListener('submit', (e) => {
  // Prevent form from submitting
  e.preventDefault();

  // Get the values from the form inputs
  const name = nameInput.value;
  const email = emailInput.value;
  const message = messageInput.value;

  // Check if the email is valid
  if (!validateEmail(email)) {
    alert('Please enter a valid email address.');
    return;
  }

  // Validation passed, do something with the form data

  // Example: display a success message
  alert(`Form submitted!\n\nName: ${name}\nEmail: ${email}\nMessage: ${message}`);

  // Reset the form
  form.reset();
});

// Function to validate email
function validateEmail(email) {
  // Regular expression pattern for a valid email
  const re = /^(([^<>()\[\]\\.,;:\s@"]+(\.[^<>()\[\]\\.,;:\s@"]+)*)|(".+"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/;
  return re.test(String(email).toLowerCase());
}
