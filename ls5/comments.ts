const commentsDOM = document.getElementById('comments');

fetch('https://jsonplaceholder.typicode.com/comments')
    .then((response) => {
        if (!response.ok) {
            throw new Error(`Ошибка сети! Статус: ${response.status}`);
        }
        return response.json();
    })
    .then((comments) => {
        comments.forEach((comment, i) => {
            const newCommentDiv = document.createElement('div');
            newCommentDiv.classList.add('userStyle');

            newCommentDiv.innerHTML = `${comment.id}. ${comment.body} - ${comment.email}`;
            commentsDOM.appendChild(newCommentDiv);
        });
    })
    .catch((error) => console.error('Ошибка при загрузке комментариев:', error));
