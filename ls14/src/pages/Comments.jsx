import { useEffect, useState } from "react";
import { useNavigate } from "react-router-dom";
import { getComments } from "../services/api";

export default function Comments() {
  const [comments, setComments] = useState([]);
  const navigate = useNavigate();

  useEffect(() => {
    getComments().then(res => setComments(res.data));
  }, []);

  return (
    <div>
      <h2>Коментарі</h2>
      <ul>
        {comments.slice(0, 10).map(comment => (
          <li key={comment.id}>
            {comment.name} <button onClick={() => navigate(`/comment/${comment.id}`)}>Деталі</button>
          </li>
        ))}
      </ul>
    </div>
  );
}
