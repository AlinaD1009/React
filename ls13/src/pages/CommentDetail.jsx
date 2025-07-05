import { useParams, Link } from 'react-router-dom';
import { useEffect, useState } from 'react';
import { getCommentById } from '../service/comments';
import { getPostById } from '../service/posts';

export default function CommentDetail() {
  const { id } = useParams();
  const [comment, setComment] = useState(null);
  const [post, setPost] = useState(null);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    async function fetchData() {
      setLoading(true);
      try {
        const commentRes = await getCommentById(id);
        setComment(commentRes.data);

        // Підвантажуємо пост, до якого відноситься коментар
        const postRes = await getPostById(commentRes.data.postId);
        setPost(postRes.data);
      } catch (error) {
        console.error(error);
      } finally {
        setLoading(false);
      }
    }
    fetchData();
  }, [id]);

  if (loading) return <div>Завантаження...</div>;
  if (!comment) return <div>Коментар не знайдено</div>;

  return (
    <div>
      <h2>Коментар: {comment.name}</h2>
      <p><i>{comment.email}</i></p>
      <p>{comment.body}</p>

      {post && (
        <p>
          Пост: <Link to={`/post/${post.id}`}>{post.title}</Link>
        </p>
      )}
    </div>
  );
}
