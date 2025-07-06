import { useParams } from "react-router-dom";
import { useEffect, useState } from "react";
import { getCommentById } from "../services/api";

export default function CommentDetail() {
  const { id } = useParams();
  const [comment, setComment] = useState(null);

  useEffect(() => {
    getCommentById(id).then(res => setComment(res.data));
  }, [id]);

  if (!comment) return <p>Завантаження...</p>;

  return (
    <div>
      <h2>{comment.name}</h2>
      <p><strong>Email:</strong> {comment.email}</p>
      <p>{comment.body}</p>
    </div>
  );
}
