 let registrationFormInput = document.getElementById('registrationForm');

// inputs
let usernameInput = document.getElementById('username');
let emailInput = document.getElementById('email');
let passwordInput = document.getElementById('password');
let confirmPasswordInput = document.getElementById('confirmPassword');


// messsage
let usernameErrorInput = document.getElementById('usernameError');
let emailErrorInput = document.getElementById('emailError');
let passwordErrorInput = document.getElementById('passwordError');
let confirmPasswordErrorInput = document.getElementById('confirmPasswordError');



// Load saved username from localStorage
const savedUsername = localStorage.getItem("username");
console.log("Saved username:", savedUsername);
if (savedUsername) {
    usernameInput.value = savedUsername;
}

// set the focus on the first field of the form
window.addEventListener("DOMContentLoaded", () => {
        usernameInput.focus();
    });

// let registrationkList = [];

let registrationkList = JSON.parse(localStorage.getItem("registrationkList")) || [];


function addRegistration() {

    let username = usernameInput.value;
    let email = emailInput.value;
    let password = passwordInput.value;
    let confirmPass = confirmPasswordInput.value;

    let registration = {
        username,
        email,
        password,
        confirmPass

    };

    console.log(registrationkList);

    // send the data registrations to the array
    registrationkList.push(registration);

    // It saves registrations in the storage browser, takes the registrationkList and turns it into text
    localStorage.setItem("registrationkList", JSON.stringify(registrationkList));
    localStorage.setItem("username", username);


    // usernameInput.value = "";
    emailInput.value = "";
    passwordInput.value = "";
    confirmPasswordInput.value = "";

    console.log(registrationkList);

}

function validateUsernameInput(u) {
  
    // // element that triggered the event
    // const u = event.target;  
     console.log('u.value.length ----->' + u.value.length);

     if (u.value.trim() === "") {

        u.setCustomValidity( "This field is required.");
        usernameErrorInput.textContent = u.validationMessage;

    } else if (u.value.length < 5) {

        u.setCustomValidity("Username must be at least 5 characters.");
        usernameErrorInput.textContent = u.validationMessage;

    } else {

        u.pattern = "^[a-zA-Z0-9_]+$";
        if (u.validity.patternMismatch) {

            u.setCustomValidity("Username can only contain letters, numbers, and underscores.");
            usernameErrorInput.textContent = u.validationMessage;

        } else {
            u.setCustomValidity("");
            usernameErrorInput.textContent = "";
        }
    }
}

function validateEmailInput(e) {
  

    if (e.validity.typeMismatch) {
                e.setCustomValidity("Please enter a valid email address.");
                emailErrorInput.textContent = e.validationMessage; 
        } else {
           
            e.setCustomValidity("");
            emailErrorInput.textContent = "";
        }
  
};


function validatePasswordInput(p) {

    p.minLength = 8;

    if (p.validity.tooShort) {

        p.setCustomValidity(`The password must be at least ${p.minLength} characters.`);
        passwordErrorInput.textContent = p.validationMessage;

    } else if (p.validity.patternMismatch) {
        p.setCustomValidity("Password must include an uppercase letter, a lowercase letter, and a number.");
        passwordErrorInput.textContent = p.validationMessage;

    } else {
        p.setCustomValidity("");
        passwordErrorInput.textContent = "";
    }
}
    
function validateConfirmPasswordInput(p) {
   
    p.minLength = 8;

    if (p.validity.tooShort) {

        p.setCustomValidity(`The Confirm Password must be at least ${p.minLength} characters.`);
        confirmPasswordErrorInput.textContent = p.validationMessage;

    } else if (p.validity.patternMismatch) {

        p.setCustomValidity("Confirm Password must include an uppercase letter, a lowercase letter, and a number.");
        confirmPasswordErrorInput.textContent =p.validationMessage;

    } else if (p.value !== passwordInput.value) {

        p.setCustomValidity("The passwords don't match.");

        confirmPasswordErrorInput.textContent = p.validationMessage;

    } else {
        p.setCustomValidity("");
        confirmPasswordErrorInput.textContent = "";
    }
};

// ************************
// addEventListener
// ************************

registrationFormInput.addEventListener('focusout', function (event) {

     // element that triggered the event
    const input = event.target;
    // console.log('event.target: ===>' + input);

    //    valor del input
    // console.log('event.target.value: ===>' + input.value);

    // validate required
    input.required = true;
        
});

usernameInput.addEventListener("input", function (event) {
    validateUsernameInput(event.target);

});

emailInput.addEventListener("input", function (event) {
    validateEmailInput(event.target);
        
});


passwordInput.addEventListener("input", function (event) {
     validatePasswordInput(event.target);

});


confirmPasswordInput.addEventListener("input", function (event) {
     validateConfirmPasswordInput(event.target);

});


// ************************
// submit registration 
// ************************
registrationFormInput.addEventListener("submit", function (event) {
//   Does not execute the default Submit action  
    event.preventDefault();
   
    // Validate all inputs
    validateUsernameInput(usernameInput);
    validateEmailInput(emailInput);
    validatePasswordInput(passwordInput);
    validateConfirmPasswordInput(confirmPasswordInput);
     
    // Check if the form is valid
    if (registrationFormInput.checkValidity()) {
        alert("Registration successful!");
        addRegistration();

    } else {

        const firstInvalid =
            registrationFormInput.querySelector(":invalid");

        if (firstInvalid) {
            firstInvalid.focus();
        }
    }
});