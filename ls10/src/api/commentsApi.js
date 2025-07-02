export async function fetchComments() {
  const res = await fetch('https://jsonplaceholder.typicode.com/comments');
  return res.json();
}

export async function fetchCommentById(id) {
  const res = await fetch(`https://jsonplaceholder.typicode.com/comments/${id}`);
  return res.json();
}
