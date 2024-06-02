// Ensuring the JavaScript file is connected
console.log('JavaScript file is connected');

// Getting HTML elements:
let myForm = document.getElementById('form');
let myEmail = document.getElementById('email');
let mySubmitBtn = document.getElementById('submitBtn');

// To test connections:
console.log('Form:', myForm);
console.log('Email:', myEmail);
console.log('Submit Button:', mySubmitBtn);

// Function to validate email
function validateEmail() {
  let emailValue = String(myEmail.value).toLowerCase();
  let emailError = myForm.parentElement.querySelector('.formContainer__error_warning'); 
  let emailIcon = myEmail.parentElement.querySelector('.formContainer__errorIcon'); // ✅ Correctly reference the error icon
  if (emailValue === '') {
    //checking if the input field si empty
    myEmail.classList.add('formContainer__input-error');
    myEmail.classList.remove('formContainer_input-valid');
    emailError.classList.remove('formContainer__hide');
    emailIcon.classList.remove('formContainer__hide');
    console.log('You need to add your email');
    return false;
  } else if (!/^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(emailValue)) {
    //Validating password syntax
    myEmail.classList.add('formContainer__input-error');
    myEmail.classList.remove('formContainer__input-valid');
    emailError.classList.remove('formContainer__hide');
    emailIcon.classList.remove('formContainer__hide'); // ✅ Correct class name:I used only one underscore
    console.log('Looks like this is not an email');
    return false;
  } else {
    myEmail.classList.remove('formContainer__input-error');
    myEmail.classList.add('formContainer__input-valid');
    emailError.classList.add('formContainer__hide');
    emailIcon.classList.add('formContainer__hide');
    return true;
  }
}

// Adding focusout and function calls to event listeners to input fields so user get immediate feedback or wrong input
myEmail.addEventListener('focusout', validateEmail);

// Adding click event listener to the submit button to call the functions
mySubmitBtn.addEventListener('click', function (e) {
  e.preventDefault(); // Prevent form submission
  const isEmailValid = validateEmail();
  if (isEmailValid) {
    //if all is valid show alert
    alert('Your form has been sent');
    myForm.reset(); // Reset form fields
    // Remove validation classes
    myEmail.classList.remove('formContainer__input-valid', 'formContainer__input-error');
  }
});
