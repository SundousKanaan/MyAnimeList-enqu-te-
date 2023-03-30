let formInputs = document.querySelectorAll('input[type="text"],input[type="number"]');

function saveFormInputsToLocal() {
    // Loop over each form input and save its value to local storage
    formInputs.forEach(input => {
        let inputName = input.name; // Get the name of the input element
        let inputValue = input.value; // Get the current value of the input element
        localStorage.setItem(inputName, inputValue); // Save the input value in local storage
    });
}

function loadFormInputsFromLocal() {
    // Loop over each form input and load its value from local storage
    formInputs.forEach(input => {
        let inputName = input.name;
        let storedValue = localStorage.getItem(inputName);
        if (storedValue) {
            input.value = storedValue;
        }
    });
}

// Add event listeners to each input field
formInputs.forEach(input => {
    input.addEventListener('input', saveFormInputsToLocal);
});

// Call the function once on page load to save and invul initial values
loadFormInputsFromLocal();



let formRadios = document.querySelectorAll('input[type="radio"]');

function saveFormRadiosToLocal() {
    formRadios.forEach(input => {
        let inputName = input.name;
        let inputValue = input.value;
        if (input.checked) {
            localStorage.setItem(inputName, inputValue);
        }
    });
}

function loadFormRadiosFromLocal() {
    formRadios.forEach(input => {
        let inputName = input.name;
        let storedValue = localStorage.getItem(inputName);
        if (storedValue && input.value === storedValue) {
            input.checked = true;
        }
    });
}

formRadios.forEach(input => {
    input.addEventListener('change', saveFormRadiosToLocal);
});

loadFormRadiosFromLocal();