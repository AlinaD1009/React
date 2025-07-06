import { useEffect, useState } from "react";
import { useNavigate } from "react-router-dom";
import { getPosts } from "../services/api";

export default function Posts() {
  const [posts, setPosts] = useState([]);
  const navigate = useNavigate();

  useEffect(() => {
    getPosts().then(res => setPosts(res.data));
  }, []);

  return (
    <div>
      <h2>Пости</h2>
      <ul>
        {posts.slice(0, 10).map(post => (
          <li key={post.id}>
            {post.title} <button onClick={() => navigate(`/post/${post.id}`)}>Деталі</button>
          </li>
        ))}
      </ul>
    </div>
  );
}
