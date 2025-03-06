var postDOM = document.getElementById('posts');
fetch('https://jsonplaceholder.typicode.com/posts')
    .then(function (response) {
    console.log(response);
    return response.json();
})
    .then(function (posts) {
    console.log(posts);
    posts.forEach(function (post) {
        var newPostDiv = document.createElement('div');
        newPostDiv.classList.add('userStyle');
        newPostDiv.innerHTML = "<h4>".concat(post.id, ". ").concat(post.title, "</h4> <p>").concat(post.body, "</p>");
        postDOM.appendChild(newPostDiv);
    });
})
    .catch(function (error) { return console.error('Error fetching posts:', error); });
