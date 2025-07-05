import { useParams, Link } from 'react-router-dom';
import { useEffect, useState } from 'react';
import { getPostById } from '../service/posts';
import { getComments } from '../service/comments';

export default function PostDetail() {
  const { id } = useParams();
  const [post, setPost] = useState(null);
  const [comments, setComments] = useState([]);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    async function fetchData() {
      setLoading(true);
      try {
        const postRes = await getPostById(id);
        setPost(postRes.data);

        const commentsRes = await getComments();
        setComments(commentsRes.data.filter(comment => comment.postId === +id));
      } catch (error) {
        console.error(error);
      } finally {
        setLoading(false);
      }
    }
    fetchData();
  }, [id]);

  if (loading) return <div>Завантаження...</div>;
  if (!post) return <div>Пост не знайдено</div>;

  return (
    <div>
      <h2>{post.title}</h2>
      <p>{post.body}</p>

      <h3>Коментарі до поста:</h3>
      <ul>
        {comments.map(comment => (
          <li key={comment.id}>
            <b>{comment.name}</b> (<i>{comment.email}</i>): {comment.body}
          </li>
        ))}
      </ul>

      <Link to={`/user/${post.userId}`}>Перейти до автора</Link>
    </div>
  );
}
