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
let confirmPasswordErrorInput = document.getElementById('passwordError');

// let registrationkList = [];

let registrationkList = JSON.parse(localStorage.getItem("registrationkList")) || [];

// *************************************

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

    usernameInput.value = "";
    emailInput.value = "";
    passwordInput.value = "";
    confirmPasswordInput.value = "";

    console.log(registrationkList);

}

// *************************************

// submit registration 
registrationFormInput.addEventListener("submit", function (event) {

    event.preventDefault();
    addRegistration();

});

// check field is required
function validateInput(input, msgValidate) {


    input.setCustomValidity("");

    switch (msgValidate) {

        case "minlength":

            console.log("input:", input);
            // recupera el input
            // <input type="text" id="username" name="username" pattern="^[a-zA-Z0-9_]+$" 
            // data-nlok-ref-guid="712d1613-968f-4e8e-b7fb-f2d88da7c36a" required=""></input>

            console.log("value:", input.value);
            console.log("length:", input.value.length);

            if (input.value.length > 0 && input.value.length < 5) {
                // set the message

                input.setCustomValidity('Username must be at least 5 characters.===>');

            }
            break;

        case "required":

            if (input.validity.valueMissing) {
                input.setCustomValidity("This field is required ======>.");
            }
            break;
        case "pattern":

            if (input.validity.patternMismatch) {
                input.setCustomValidity("Username can only contain letters, numbers, and underscores.======>");
            }
            break;
        default:

            break;

    }
    // alert("after the switch");

    input.reportValidity();
    return;
}


registrationFormInput.addEventListener('focusout', function (event) {

    // element that triggered the event
    const input = event.target;
    console.log('event.target: ======>' + input);

    //    valor del input
    console.log('event.target.value: ======>' + input.value);

    // 1. validate required
    input.required = true;
    validateInput(input, "required");

    // 2. Validate username
    if (input.id === "username") {
        validateInput(input, "minlength");
    }

});

usernameInput.addEventListener("input", function (event) {
  
    // element that triggered the event
    const e = event.target;  
  
    if (input.value.trim() === "") {
            input.setCustomValidity("This field is required.");
        } else {
            input.setCustomValidity("");
        }

    input.reportValidity();

    e.pattern = "^[a-zA-Z0-9_]+$";
    validateInput(e,"pattern");
});






