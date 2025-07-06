import { useParams } from "react-router-dom";
import { useEffect, useState } from "react";
import { getPostById } from "../services/api";

export default function PostDetail() {
  const { id } = useParams();
  const [post, setPost] = useState(null);

  useEffect(() => {
    getPostById(id).then(res => setPost(res.data));
  }, [id]);

  if (!post) return <p>Завантаження...</p>;

  return (
    <div>
      <h2>{post.title}</h2>
      <p>{post.body}</p>
    </div>
  );
}
