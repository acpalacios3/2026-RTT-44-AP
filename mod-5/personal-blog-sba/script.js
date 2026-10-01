let postForm = document.getElementById("postForm"); 
let postTitleInput = document.getElementById("postTitle");
let postContentInput = document.getElementById("postContent");

// error message
let titleError = document.getElementById("titleError");
let contentError = document.getElementById("contentError");


let postListElement = document.getElementById("postList");

// let postList = [];
let postList = JSON.parse(localStorage.getItem("postList")) || [];

// use by edit button
let editPostId = null;

function postTitleInputValidate(input) {
    titleError.textContent = "";
    
    if (input.value.trim() === "") {
       
        // valid = false;
        input.setCustomValidity( "Post Title is required.");
        titleError.textContent = input.validationMessage;

    }else {
            input.setCustomValidity("");
            titleError.textContent = "";
    }
  
}

function postContentInputValidate(input) {
     contentError.textContent = "";

    // Validate content

    if (input.value.trim() === "") {

        
        input.setCustomValidity( "Post Content is required.");
        contentError.textContent = input.validationMessage;
    } else {
            input.setCustomValidity("");
            contentError.textContent = "";
    }
  
}

function addBlogPost() {

    let title = postTitleInput.value.trim();
    let content = postContentInput.value.trim();
   
    if (editPostId === null) {

        // Create a new blog post object
        let newPost = {
            // id: postList.length + 1,
            id: Date.now(),
            title: title,
            content: content,
            timestamp: new Date().toLocaleString()
        };

        // Add post to the array
        postList.push(newPost);
        console.log("new Blog Post", postList);
        // console.log(JSON.stringify(postList, null, 2));

    } else{

        // Update existing post
        let postEdit = postList.find(function (post) {
            return Number(post.id) === Number(editPostId);
        });

        postEdit.title = title;
        postEdit.content = content;

        editPostId = null;

        document.getElementById("submitButton").textContent = "Add Post";
        console.log("Update Blog Post"+ postList);
        // console.log(JSON.stringify(postList, null, 2));
    }
        
    // Add post in localStore
     localStorage.setItem("postList", JSON.stringify(postList));

    // Display posts
    displayPosts();

    // Clear form
    postForm.reset();

}

function displayPosts() {

    postListElement.innerHTML = "";

    // Create HTML for each Blog post
    postList.forEach(function (post) {

        let postCard = document.createElement("div");
        postCard.className = "card p-3 mb-3";

        // Create title
        let titleElement = document.createElement("h3");
        titleElement.textContent = post.title;

        // Create content
        let contentElement = document.createElement("p");
        contentElement.textContent = post.content;

        // Create date
        let dateElement = document.createElement("small");
        dateElement.className = "post-date";
        dateElement.textContent = "Created: " + post.timestamp;

         //  ********
        //  Edit 
        //  *********
         let editButton = document.createElement("button");
         editButton.textContent = "Edit";
         editButton.className = "btn btn-secondary btn-sm mt-2 me-2";
        editButton.dataset.id = post.id

        // Edit blog post
        editButton.addEventListener("click", function () {

            let id = Number(editButton.dataset.id);
            let postEdit = postList.find(function (post) {
                return Number(post.id) === id;
            });

            postTitleInput.value = postEdit.title;
            postContentInput.value = postEdit.content;
             // update blog post
            editPostId = id;
            document.getElementById("submitButton").textContent = "Update Post";

        });

         //  ********
        //  Delete
        //  *********
        let deleteButton = document.createElement("button");
        deleteButton.textContent = "Delete Post";
        deleteButton.className = "btn btn-danger btn-sm mt-2";
        deleteButton.dataset.id = post.id;

               // addEventListener click
         deleteButton.addEventListener("click", function () {
    
            let id = Number(deleteButton.dataset.id);
            
            postList = postList.filter(function (post) {
                
                return Number(post.id) !== id;
            });

            localStorage.setItem("postList", JSON.stringify(postList));
            displayPosts();
            console.log("Delete Blog Post", postList);
            // console.log(JSON.stringify(postList, null, 2));
        });

    // Add elements 
        postCard.appendChild(titleElement);
        postCard.appendChild(contentElement);
        postCard.appendChild(dateElement);

    // Add edit button
        postCard.appendChild(editButton);    

    // Add delete button
           postCard.appendChild(deleteButton);

    // Add card to the page
        postListElement.appendChild(postCard);

});
console.log("Post List: ======>", postList);
    // console.log(JSON.stringify(postList, null, 2));

}


//Title input
postTitleInput.addEventListener("input", function (event) {
     postTitleInputValidate(event.target);

});

// Content input

postContentInput.addEventListener("input", function (event) {
    postContentInputValidate(event.target);

});

// ==============
// Submit form
// ===============
postForm.addEventListener("submit", function (event) {
    event.preventDefault();
// Validate all inputs
    
    postTitleInputValidate(postTitleInput);
    postContentInputValidate(postContentInput);
     
    // Check if the form is valid
    if (postForm.checkValidity()) {
        alert("Successful!");
        // Add post
        addBlogPost();

    } else {

        const firstInvalid =
            postForm.querySelector(":invalid");

        if (firstInvalid) {
            firstInvalid.focus();
        }
    }

});


