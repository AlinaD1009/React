import { useEffect, useState } from 'react';
import { getPosts } from '../service/posts';
import { Link } from 'react-router-dom';

export default function Posts() {
  const [posts, setPosts] = useState([]);

  useEffect(() => {
    getPosts().then(res => setPosts(res.data));
  }, []);

  return (
    <div>
      <h2>Пости</h2>
      <ul>
        {posts.map(post => (
          <li key={post.id}>
            {post.title} — <Link to={`/post/${post.id}`}>Деталі</Link>
          </li>
        ))}
      </ul>
    </div>
  );
}
