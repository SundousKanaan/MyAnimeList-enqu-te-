// info 
// const userName = document.getElementById("user-info");

// if (userName) {
//     userName.oninput = function (e) {
//         localStorage.setItem("firstName", userName.value);
//     }
// }

// Get all form inputs on the page
const formInputs = document.querySelectorAll('input[type=text]');

// Loop over each form input and save its value to local storage
formInputs.forEach(input => {
  const inputName = input.name; // Get the name of the input element
  const inputValue = input.value; // Get the current value of the input element
  localStorage.setItem(inputName, inputValue); // Save the input value in local storage
});
