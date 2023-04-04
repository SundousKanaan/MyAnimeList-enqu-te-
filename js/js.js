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



// **********************************************************************************
// **********************************************************************************


// JavaScript on
const nextButton = document.createElement('button');
const backButton = document.createElement('button');
const buttonDiv = document.createElement('div');

function JavaScriptAan() {
    const main = document.querySelector('main');
    main.classList.add("carousel");

    backButton.innerText = "Back";
    nextButton.innerText = "Next";


    buttonDiv.appendChild(backButton);
    buttonDiv.appendChild(nextButton);
    main.appendChild(buttonDiv);
}

JavaScriptAan();

const Back = document.querySelector('main.carousel > div button:first-of-type');
const Next = document.querySelector('main.carousel > div button:last-of-type');
const fieldsets = document.querySelectorAll('main.carousel form fieldset');
const questionsProces = document.querySelectorAll("body main>nav ol li");
const nextButtons = document.querySelectorAll('main.carousel form fieldset section > label:last-of-type');

nextButtons.forEach(nextButton => {
    nextButton.classList.add('hidden');
});


let i = 1;

questionsProces.forEach(questionProces => {
    questionProces.innerHTML = "";
    questionProces.innerText = `${i}`;
    i++;
});

// console.log(FinishButtons);


let currentFieldset = 0;

if (currentFieldset === 0) {
    Back.classList.add("hidden");
}

Back.addEventListener('click', () => {
    if (currentFieldset > 0) {
        fieldsets[currentFieldset].classList.remove('backQuestion');
        fieldsets[currentFieldset].classList.remove('nextQuestion');

        questionsProces[currentFieldset].classList.remove('next');

        currentFieldset--;
        fieldsets[currentFieldset].classList.remove('backQuestion');
        fieldsets[currentFieldset].classList.add('nextQuestion');
    }

    if (currentFieldset < fieldsets.length - 1) {
        Next.classList.remove("hidden");
        Back.classList.remove("hidden");
    }

    if (currentFieldset === 0) {
        Back.classList.add("hidden");
    }
});

Next.addEventListener('click', () => {
    if (currentFieldset < fieldsets.length - 1) {
        fieldsets[currentFieldset].classList.remove('nextQuestion');
        fieldsets[currentFieldset].classList.add('backQuestion');

        currentFieldset++;
        fieldsets[currentFieldset].classList.add('nextQuestion');
        questionsProces[currentFieldset].classList.add('next');
    }

    if (currentFieldset > 0) {
        Back.classList.remove("hidden");
    }
    if(currentFieldset === 4){
        Next.classList.add("hidden");
    }

});
