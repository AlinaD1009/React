import { useParams } from 'react-router-dom';
import { useEffect, useState } from 'react';
import { getUserById } from '../service/users';
import { getPosts } from '../service/posts';
import { getComments } from '../service/comments';

export default function UserDetail() {
  const { id } = useParams();
  const [user, setUser] = useState(null);
  const [posts, setPosts] = useState([]);
  const [comments, setComments] = useState([]);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    async function fetchData() {
      setLoading(true);
      try {
        const userRes = await getUserById(id);
        setUser(userRes.data);

        // Фільтруємо пости, що належать юзеру
        const postsRes = await getPosts();
        setPosts(postsRes.data.filter(post => post.userId === +id));

        // Фільтруємо коментарі, які належать до постів цього юзера
        const commentsRes = await getComments();
        const userPostIds = postsRes.data.filter(post => post.userId === +id).map(p => p.id);
        setComments(commentsRes.data.filter(comment => userPostIds.includes(comment.postId)));

      } catch (error) {
        console.error(error);
      } finally {
        setLoading(false);
      }
    }
    fetchData();
  }, [id]);

  if (loading) return <div>Завантаження...</div>;
  if (!user) return <div>Користувача не знайдено</div>;

  return (
    <div>
      <h2>{user.name}</h2>
      <p>Пошта: {user.email}</p>
      <p>Місто: {user.address.city}</p>

      <h3>Пости користувача:</h3>
      <ul>
        {posts.map(post => (
          <li key={post.id}>{post.title}</li>
        ))}
      </ul>

      <h3>Коментарі до постів користувача:</h3>
      <ul>
        {comments.map(comment => (
          <li key={comment.id}>
            <b>{comment.name}:</b> {comment.body}
          </li>
        ))}
      </ul>
    </div>
  );
}
