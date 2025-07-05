import { useEffect, useState } from 'react';
import { getComments } from '../service/comments';
import { Link } from 'react-router-dom';

export default function Comments() {
  const [comments, setComments] = useState([]);

  useEffect(() => {
    getComments().then(res => setComments(res.data));
  }, []);

  return (
    <div>
      <h2>Коментарі</h2>
      <ul>
        {comments.map(comment => (
          <li key={comment.id}>
            {comment.name} — <Link to={`/comment/${comment.id}`}>Деталі</Link>
          </li>
        ))}
      </ul>
    </div>
  );
}
