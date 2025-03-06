var commentsDOM = document.getElementById('comments');
fetch('https://jsonplaceholder.typicode.com/comments')
    .then(function (response) {
    if (!response.ok) {
        throw new Error("\u041E\u0448\u0438\u0431\u043A\u0430 \u0441\u0435\u0442\u0438! \u0421\u0442\u0430\u0442\u0443\u0441: ".concat(response.status));
    }
    return response.json();
})
    .then(function (comments) {
    comments.forEach(function (comment, i) {
        var newCommentDiv = document.createElement('div');
        newCommentDiv.classList.add('userStyle');
        newCommentDiv.innerHTML = "".concat(comment.id, ". ").concat(comment.body, " - ").concat(comment.email);
        commentsDOM.appendChild(newCommentDiv);
    });
})
    .catch(function (error) { return console.error('Ошибка при загрузке комментариев:', error); });
