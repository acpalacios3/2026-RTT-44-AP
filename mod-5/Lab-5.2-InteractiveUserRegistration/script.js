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
let smallMsgInput = document.getElementById('smallMsg');

// set the focus on the first field of the form
window.addEventListener("DOMContentLoaded", () => {
        usernameInput.focus();
    });

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

// check field is required
function validateInput(input, msgValidate) {
   input.minlength = 8;     
   const lengthvar = input.minlength;

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
        case "email":

            if ( input.validity.typeMismatch){
                input.setCustomValidity(" Enter a valid email.======>");
            }

            break;

        case "password":
             
             console.log("1. password ------->" + input.value.length);
             if (!input.validity.tooShort){
                console.log("1. tooShort ");
                input.setCustomValidity(`The password must be at least ${lengthvar} characters.`);
                input.focus();
             
            }
             break;

        case "confirmPassword":
            
            console.log("2. confirmPassword ------->" + input.value.length);
             if (!input.validity.tooShort){
                console.log("2. tooShort ");
                input.setCustomValidity(`The password confirmation must be at least ${lengthvar} characters.`);
                input.focus();
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

    // 3. Validate email type
    if (input.id === "email"){
       
        validateInput(input,"email");
    }
    
});

usernameInput.addEventListener("input", function (event) {
  
    // element that triggered the event
    const u = event.target;  
     console.log('u.value.length ----->' + u.value.length);

    if (u.value.trim() === "" || u.value.length === 0) {
            console.log('trim() ----->' + u.value.length);
            
            usernameErrorInput.textContent = "This field is required.===>";
        } else {
           
            usernameErrorInput.textContent = "";
        }

    u.reportValidity();

    if (u.value.length > 0) {

    u.pattern = "^[a-zA-Z0-9_]+$";
    validateInput(u,"pattern");
     
    }
 
});

passwordInput.addEventListener("input", function (event) {
    const p = event.target;
    //validate minlength the password 

    validateInput(p, "password");

}
)

confirmPasswordInput.addEventListener("input", function (event) {
    const p = event.target;
    //validate minlength the password confirmation
    validateInput(p, "confirmPassword");

}
)

confirmPasswordInput.addEventListener("blur", function (event) {

    const p = event.target;  

    if (p.value !== passwordInput.value){
          confirmPasswordErrorInput.textContent = "The passwords don't match";

      }

}
)

// ************************
// submit registration 
// ************************
registrationFormInput.addEventListener("submit", function (event) {

    event.preventDefault();
    addRegistration();

});