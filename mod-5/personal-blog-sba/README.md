***SBA personal-blog-sba  The Document Object Model ***

**1. A brief description of your project.**

This project is an Interactive Personal Blog Platform created using HTML, CSS, Bootstrap, and JavaScript.
reate a new blog post.
Enter a title and content for the post.
Validate the form fields.
Display blog posts on the page.
Edit existing blog posts.
Delete individual blog posts.
Save blog posts in localStorage so the data remains available after refreshing the page.

The main focus of the project is JavaScript functionality, including DOM manipulation, event handling, form validation, and the use of localStorage.


**2. Instructions on how to run the application (if anything beyond opening index.html in a browser is needed).**
How to Run the Application
Open the index.html file in a web browser.
Start creating, editing, and deleting blog posts.
The application runs entirely on the client side.
To check the results of adding, deleting, editing, and saving information, you can use the browser's Inspect option and open the Console tab.


**3. A reflection on your development process, challenges faced, and how you overcame them.**
One of the challenges I faced was implementing form validation and displaying custom error messages. I used JavaScript together with the HTML Constraint Validation API and setCustomValidity() to validate the title and content fields.

Another challenge was managing the blog posts using localStorage. I learned how to convert an array of objects into a JSON string using JSON.stringify() and how to retrieve the data using JSON.parse().

Implementing the Edit and Delete functionality was also a challenge. I used unique IDs for each post and the find() and filter() methods. I also used event listeners on the Edit and Delete buttons to handle user interactions.

I used the browser console to identify errors and verify the contents of the array.

Overall, this project helped me improve my understanding of JavaScript functions, DOM manipulation, event handling, form validation, arrays and objects, and data persistence using localStorage.


**4. Any known issues or features not implemented.**
Blog posts are stored only in the browser's localStorage and are not stored in a database.
Blog posts are not shared between different browsers or devices.
The application currently does not allow users to add images to blog posts.
