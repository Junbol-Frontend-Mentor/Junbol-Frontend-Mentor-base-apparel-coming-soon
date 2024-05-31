// Select form and input elements
let myForm = document.getElementById('form');
let myFirstName = document.getElementById('first-name');
let myLastName = document.getElementById('last-name');
let myEmail = document.getElementById('email');
let myPassword = document.getElementById('password');

// Add event listener to the form submit event
myForm.addEventListener('submit', (e) => {
  e.preventDefault(); // Prevent the default form submission

  // Log to verify the event listener is triggered
  console.log('Form submit event triggered');

  // Array of input elements and corresponding error messages
  let submitValues = [
    { element: myFirstName, message: 'You need to add your first name' },
    { element: myLastName, message: 'You need to add your last name' },
    { element: myEmail, message: 'You need to add your email' },
    { element: myPassword, message: 'You need to add your password' },
  ];

  // Regular expressions for validation
  const namePattern = /^[A-Za-z]+$/;
  const passwordPattern = /^(?=.*[A-Z])(?=.*\d)(?=.*[@$!%*?&])[A-Za-z\d@$!%*?&]{8,}$/;

  // Loop through each input element and validate
  submitValues.forEach((fieldItem) => {
    console.log(`Checking ${fieldItem.element.name}`);

    if (fieldItem.element.value === '') {
      console.log(`${fieldItem.message}`);
    } else if (fieldItem.element === myFirstName || fieldItem.element === myLastName) {
      if (!namePattern.test(fieldItem.element.value)) {
        console.log(`Invalid ${fieldItem.element.name}: Only letters are allowed`);
      }
    } else if (fieldItem.element === myEmail) {
      // Ensure the email field is also checked
      if (!fieldItem.element.validity.valid) {
        console.log('Looks like this is not an email');
      }
    } else if (fieldItem.element === myPassword) {
      if (!passwordPattern.test(fieldItem.element.value)) {
        console.log(`Invalid ${fieldItem.element.name}: Use one uppercase letter, one number, one symbol, and at least 8 characters`);
      }
    }
  });
});



//==first try:
/* myFirstName.addEventListener('onChange', (e) => {
  if ( e.value = '' ) {
  }
  else {
    console.log("You need to add your first name")
  }
}); */

//==second try:

/* mySubmitBtn.addEventListener('click', () => {
  if ( myFirstName.value = true ) {
  }
  else {
    console.log("You need to add your first name")
  }
}); */

//--third try:
// Arrow functions:  if I never have to use the keyword 'this' anywhere in the logic then ALWAYS use arrow functions

/* myForm.addEventListener('click', (e) => {
  e.preventDefault()

  if ( myFirstName.value === true ) {
  }
  else {
    console.log("You need to add your first name")
  }
}); */

//--Fourth try:
/* myForm.addEventListener('submit', (e) => {
  e.preventDefault()

  if ( myFirstName.value === `""` ) {
    console.log("You need to add your first name")
  }
 if ( myLastName.value === `""` ) {
    console.log("You need to add your first name")
  }
 if ( myEmail.value === `""` ) {
    console.log("You need to add your first name")
  }
 if ( myPassword.value === `""` ) {
    console.log("You need to add your first name")
  }
  }
); */

//--HINT: Use an array to store the field elements as object and loop through them to check for empty values.

//--Fourth try:
/* myForm.addEventListener('submit', (e) => {
  e.preventDefault()

  let submitValues = [
    { element: myFirstName, message: "You need to add your first name" },
    { element: myLastName, message: "You need to add your last name" },
    { element: myEmail, message: "You need to add your email" },
    { element: myPassword, message: "You need to add your password" }
  ];

  submitValues.forEach(fieldItem => {// Use an array to store the field items as objects and loop with forEach method through them to check for empty values.
    if ( fieldItem.element.value === "" ) {//accessing the key of the object
      console.log(`${fieldItem.message}`)//accessing the value  of the object
    }
  });
}); */

// Now to add the validation for the name and last name
// Well I didn't know and to find out how I would cost me a lot of research so here it is:

/* So lets analyze how Socrates did it:

I knew I needed a regular exression but I forgot how to write it and here it is:  /^[A-Za-z]+$/

But in order to use you need to save it in a variable: const namePattern = /^[A-Za-z]+$/; 
so you can test/compare the user input with it. And is the tricky part. Well you do it by using the test() method on the regex. The test method checks if the value of the input matches the regex pattern. If it doesn’t, an error message is logged.
But then you need to use the !: This is the logical NOT operator.  It inverts the boolean value of the expression that follows it. If the expression returns true, the ! operator will turn it into false. If the expression returns false, the ! operator will turn it into true.


if (!namePattern.test(fieldItem.element.value))

ok this is a bit complex to understand, I will give it a try:
The idea of using the NOT operator is to turn the test return true of false. So the flow continue if true or stops if false. So how the test is true or false? It is by comparing it to something in this case the input value. If the input value are letters A-Z or a-z then this: The test turns false because is like saying the input content is not equal or doesn't follow the rule of the namePattern which is false because it is correct. And because is false the function will stop so it won't show the error message. If the input content doesn't follow the rule or !namePattern then the test returns true so the error message will show up. we need to use the NOT operator to make it stop inmidiatly if the test is true? because if it would like this: namePattern.test(12fZ) the test will fail or false and the function will stop 
*/

/* myForm.addEventListener('submit', (e) => {
  e.preventDefault()

  let submitValues = [
    { element: myFirstName, message: "You need to add your first name" },
    { element: myLastName, message: "You need to add your last name" },
    { element: myEmail, message: "You need to add your email" },
    { element: myPassword, message: "You need to add your password" }
  ];

  submitValues.forEach(fieldItem => {
    if (fieldItem.element.value === "") {
      console.log(`${fieldItem.message}`);
    } else if (fieldItem.element === myFirstName || fieldItem.element === myLastName) {
      if (!namePattern.test(fieldItem.element.value)) {
        console.log(`Invalid ${fieldItem.element.name}: Only letters are allowed`);
      }
    }
  });
}); */

// finally the password validation:
/* 
myForm.addEventListener('submit', (e) => {
  e.preventDefault();

  let submitValues = [
    { element: myFirstName, message: "You need to add your first name" },
    { element: myLastName, message: "You need to add your last name" },
    { element: myEmail, message: "You need to add your email" },
    { element: myPassword, message: "You need to add your password" }
  ];

  const namePattern = /^[A-Za-z]+$/;
  const passwordPattern = /^(?=.*[A-Z])(?=.*\d)(?=.*[@$!%*?&])[A-Za-z\d@$!%*?&]{8,}$/; // Correct password pattern

  submitValues.forEach(fieldItem => {
    if (fieldItem.element.value === "") {
      console.log(`${fieldItem.message}`);
    } else if (fieldItem.element === myFirstName || fieldItem.element === myLastName) {
      if (!namePattern.test(fieldItem.element.value)) {
        console.log(`Invalid ${fieldItem.element.name}: Only letters are allowed`);
      }
    } else if (fieldItem.element === myPassword) {
      if (!passwordPattern.test(fieldItem.element.value)) {
        console.log(`Invalid ${fieldItem.element.name}: Use one uppercase letter, one number, one symbol, and at least 8 characters`);
      }
    }
  });
}); */

/* Explanation of the Password Regex:
^: Start of the string.
(?=.*[A-Z]): Positive lookahead to ensure there's at least one uppercase letter.
(?=.*\d): Positive lookahead to ensure there's at least one digit.
(?=.*[@$!%*?&]): Positive lookahead to ensure there's at least one special character.
[A-Za-z\d@$!%*?&]{8,}: Matches any of the specified characters (uppercase, lowercase, digits, special characters) at least 8 times.
$: End of the string. */
