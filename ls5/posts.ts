const postDOM = document.getElementById('posts');

interface Post {
  id: number;
  title: string;
  body: string;
}

fetch('https://jsonplaceholder.typicode.com/posts')
  .then((response) => {
    console.log(response);
    return response.json();
  })
  .then((posts: Post[]) => {
    console.log(posts);

    posts.forEach((post) => {
      const newPostDiv = document.createElement('div');
      newPostDiv.classList.add('userStyle');

      newPostDiv.innerHTML = `<h4>${post.id}. ${post.title}</h4> <p>${post.body}</p>`;
      postDOM.appendChild(newPostDiv);
    });
  })
  .catch((error) => console.error('Error fetching posts:', error));
