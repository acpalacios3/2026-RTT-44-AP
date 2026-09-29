***Reflection:***

**1. How did event.preventDefault() help in handling form submission?**
It prevented the browser from performing the form's default behavior. This allowed me to validate the form with JavaScript first and save the registration only when all the fields were valid.

**2. What is the difference between using HTML5 validation attributes and JavaScript-based validation? Why might you use both?**

HTML5 validation attributes, such as required, minlength, type="email", and pattern, provide built-in browser validation. JavaScript validation gives me more control over the validation logic and allows me to create custom error messages and validate relationships between fields, such as checking that the password and confirm password match. Using both contributes to better validation.

**3. Explain how you used localStorage to persist and retrieve the username. What are the limitations of localStorage for storing sensitive data?**
I used localStorage.setItem() to save the username in the browser and localStorage.getItem() to retrieve it when the page loads. This allowed the username to remain available after refreshing or reopening the page. However, localStorage is not appropriate for sensitive information because it can be accessed through JavaScript in the browser. Sensitive data, such as passwords, should not be stored there.

**4. Describe a challenge you faced in implementing the real-time validation and how you solved it.**
One challenge was making the validation work both while the user was typing and when submitting the form. I solved this by creating separate validation functions for each input and calling them from the input event listeners. I also called the same functions when the form was submitted to make sure all fields were validated before saving the registration.

**5. How did you ensure that custom error messages were user-friendly and displayed at the appropriate times?**

I used setCustomValidity() to create specific messages for different validation errors and used validationMessage to display them to the user. I cleared the message using setCustomValidity("") when the field was valid. This allowed the messages to change as the user corrected each field.