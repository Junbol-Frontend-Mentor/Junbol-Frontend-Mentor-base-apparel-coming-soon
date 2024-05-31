// Ensure the JavaScript file is connected
console.log('JavaScript file is connected');

// Getting HTML elements:
let myForm = document.getElementById('form');
let myFirstName = document.getElementById('first-name');
let myLastName = document.getElementById('last-name');
let myEmail = document.getElementById('email');
let myPassword = document.getElementById('password');
let mySubmitBtn = document.getElementById('submitBtn');
let myPasswordIcon = document.getElementById('passwordIcon');

let isFormSubmit = false; // ✅ Flag to track form submit state

console.log('Form:', myForm);
console.log('First Name:', myFirstName);
console.log('Last Name:', myLastName);
console.log('Email:', myEmail);
console.log('Password:', myPassword);
console.log('Submit Button:', mySubmitBtn);

// Function to validate first name
function validateFirstName() {
  let firstNameValue = myFirstName.value;
  let firstNameError = myFirstName.parentElement.nextElementSibling; // Assuming the error message is the next sibling of the parent element
  let firstNameIcon = myFirstName.nextElementSibling; // Assuming the error icon is the next sibling of the input element
  if (firstNameValue === '') {
    myFirstName.classList.add('form__input-error');
    myFirstName.classList.remove('form__input-valid');
    firstNameError.classList.remove('form__hide');
    firstNameIcon.classList.remove('form__hide');
    console.log('You need to add your first name');
  } else if (!/^[A-Za-z]+$/.test(firstNameValue)) {
    myFirstName.classList.add('form__input-error');
    myFirstName.classList.remove('form__input-valid');
    firstNameError.classList.remove('form__hide');
    firstNameIcon.classList.remove('form__hide');
    console.log('Invalid first name: Only letters are allowed');
  } else {
    myFirstName.classList.remove('form__input-error');
    myFirstName.classList.add('form__input-valid');
    firstNameError.classList.add('form__hide');
    firstNameIcon.classList.add('form__hide');
  }
}

// Function to validate last name
function validateLastName() {
  let lastNameValue = myLastName.value;
  let lastNameError = myLastName.parentElement.nextElementSibling; // Assuming the error message is the next sibling of the parent element
  let lastNameIcon = myLastName.nextElementSibling; // Assuming the error icon is the next sibling of the input element
  if (lastNameValue === '') {
    myLastName.classList.add('form__input-error');
    myLastName.classList.remove('form__input-valid');
    lastNameError.classList.remove('form__hide');
    lastNameIcon.classList.remove('form__hide');
    console.log('You need to add your last name');
  } else if (!/^[A-Za-z]+$/.test(lastNameValue)) {
    myLastName.classList.add('form__input-error');
    myLastName.classList.remove('form__input-valid');
    lastNameError.classList.remove('form__hide');
    lastNameIcon.classList.remove('form__hide');
    console.log('Invalid last name: Only letters are allowed');
  } else {
    myLastName.classList.remove('form__input-error');
    myLastName.classList.add('form__input-valid');
    lastNameError.classList.add('form__hide');
    lastNameIcon.classList.add('form__hide');
  }
}

// Function to validate email
function validateEmail() {
  let emailValue = String(myEmail.value).toLowerCase(); // ✅ Ensure email is checked in lowercase
  let emailError = myEmail.parentElement.nextElementSibling; // Assuming the error message is the next sibling of the parent element
  let emailIcon = myEmail.nextElementSibling; // Assuming the error icon is the next sibling of the input element
  if (emailValue === '') {
    myEmail.classList.add('form__input-error');
    myEmail.classList.remove('form__input-valid');
    emailError.classList.remove('form__hide');
    emailIcon.classList.remove('form__hide');
    console.log('You need to add your email');
  } else if (!/^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(emailValue)) {
    myEmail.classList.add('form__input-error');
    myEmail.classList.remove('form__input-valid');
    emailError.classList.remove('form__hide');
    emailIcon.classList.remove('form__hide');
    console.log('Looks like this is not an email');
  } else {
    myEmail.classList.remove('form__input-error');
    myEmail.classList.add('form__input-valid');
    emailError.classList.add('form__hide');
    emailIcon.classList.add('form__hide');
  }
}

// Function to validate password
function validatePassword() {
  let passwordValue = myPassword.value;
  let passwordError = myPassword.parentElement.nextElementSibling; // Assuming the error message is the next sibling of the parent element
  let passwordIcon = myPassword.nextElementSibling; // Assuming the error icon is the next sibling of the input element
  if (passwordValue === '') {
    myPassword.classList.add('form__input-error');
    myPassword.classList.remove('form__input-valid');
    passwordError.classList.remove('form__hide');
    passwordIcon.classList.remove('form__hide');
    console.log('You need to add your password');
  } else if (!/^(?=.*[A-Z])(?=.*\d)(?=.*[@$!%*?&])[A-Za-z\d@$!%*?&]{8,}$/.test(passwordValue)) {
    myPassword.classList.add('form__input-error');
    myPassword.classList.remove('form__input-valid');
    passwordError.classList.remove('form__hide');
    passwordIcon.classList.remove('form__hide');
    console.log('Invalid password: Use one uppercase letter, one number, one symbol, and at least 8 characters');
  } else {
    myPassword.classList.remove('form__input-error');
    myPassword.classList.add('form__input-valid');
    passwordError.classList.add('form__hide');
    passwordIcon.classList.add('form__hide');
  }
}

// Adding focusout event listeners to input fields
myFirstName.addEventListener('focusout', () => {
  if (!isFormSubmit) validateFirstName();
});
myLastName.addEventListener('focusout', () => {
  if (!isFormSubmit) validateLastName();
});
myEmail.addEventListener('focusout', () => {
  if (!isFormSubmit) validateEmail();
});
myPassword.addEventListener('focusout', () => {
  if (!isFormSubmit) validatePassword();
});

// Adding click event listener to the submit button
mySubmitBtn.addEventListener('click', function (e) {
  isFormSubmit = true; // ✅ Set flag to true on form submit
  validateFirstName();
  validateLastName();
  validateEmail();
  validatePassword();
  isFormSubmit = false; // ✅ Reset flag after validation
});

// Password reveal logic
myPasswordIcon.addEventListener('click', (e) => {
  e.preventDefault(); // Prevent form submission on icon click
  if (myPassword.type === 'password') {
    myPassword.type = 'text';
    myPasswordIcon.classList.remove('fa-eye');
    myPasswordIcon.classList.add('fa-eye-slash');
  } else {
    myPassword.type = 'password';
    myPasswordIcon.classList.remove('fa-eye-slash');
    myPasswordIcon.classList.add('fa-eye');
  }
  myPassword.focus(); // ✅ Focus on the password field to prevent validation errors
});
