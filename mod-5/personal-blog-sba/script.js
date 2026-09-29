

let postForm = document.getElementById("postForm");
let postTitleInput = document.getElementById("postTitle");
let postContentInput = document.getElementById("postContent");
let titleError = document.getElementById("titleError");
let contentError = document.getElementById("contentError");
let postListElement = document.getElementById("postList");

// let postList = [];
let postList = JSON.parse(localStorage.getItem("postList")) || [];

function validatePostForm() {
    let valid = true;
    titleError.textContent = "";
    contentError.textContent = "";

    // Validate title

    if (postTitleInput.value.trim() === "") {
        titleError.textContent = "Post title is required.";
        valid = false;
    }

    // Validate content

    if (postContentInput.value.trim() === "") {
        contentError.textContent = "Post content is required.";
        valid = false;
    }
    return valid;
}

function addBlogPost() {

    let title = postTitleInput.value.trim();
    let content = postContentInput.value.trim();
    // let datePost = new Date();

    // Create a new post object
    let newPost = {
        // id: postList.length + 1,
        id: Date.now(),
        title: title,
        content: content,
        timestamp: new Date().toLocaleString()

    };

    // Add post to the array
    postList.push(newPost);
    console.log(postList);

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

        // Create Delete Button
        let deleteButton = document.createElement("button");
        deleteButton.textContent = "Delete";
        deleteButton.dataset.id = post.id;


        // addEventListener click
    deleteButton.addEventListener("click", function () {

    let id = Number(deleteButton.dataset.id);

    postList = postList.filter(function (post) {
        // return post.id !== id;
        return Number(post.id) !== id;
    });

    localStorage.setItem("postList", JSON.stringify(postList));

    displayPosts();

    });

    // Add elements 
        postCard.appendChild(titleElement);
        postCard.appendChild(contentElement);
        postCard.appendChild(dateElement);

    // Add delete buttton
           postCard.appendChild(deleteButton);

    // Add card to the page
        postListElement.appendChild(postCard);
});

}


// clears all tasks from localStorage and taskList

clearButton.addEventListener("click", function () {
    localStorage.removeItem("postList");
    postList = [];
    displayPosts();
});


// ==============
// Submit form
// ===============
postForm.addEventListener("submit", function (event) {
    event.preventDefault();
    // Validate form
    if (!validatePostForm()) {
        return;
    }
    // Add post
    addBlogPost();
});
