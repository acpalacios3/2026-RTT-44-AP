let postList = [];

let postForm = document.getElementById("postForm");
let postTitleInput = document.getElementById("postTitle");
let postContentInput = document.getElementById("postContent");
let titleError = document.getElementById("titleError");
let contentError = document.getElementById("contentError");
let postListElement = document.getElementById("postList");

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

    // Create a new post object
    let newPost = {
        id: postList.length + 1,
        title: title,
        content: content,
        timestamp: new Date().toLocaleString()

    };

    // Add post to the array
    postList.push(newPost);
    console.log(postList);

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


        // Add elements to the card
        postCard.appendChild(titleElement);
        postCard.appendChild(contentElement);
        postCard.appendChild(dateElement);

        // Add card to the page
        postListElement.appendChild(postCard);

    });
}

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
