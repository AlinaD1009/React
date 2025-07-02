import React, { useState } from 'react';
import useFetch from '../hooks/useFetch';
import { fetchPosts, fetchPostById } from '../api/postsApi';

export default function Posts() {
  const { data: posts, loading } = useFetch(fetchPosts);
  const [selectedId, setSelectedId] = useState(null);
  const [details, setDetails] = useState(null);

  const handleShowDetails = async (id) => {
    if (selectedId === id) {
      setSelectedId(null);
      setDetails(null);
    } else {
      setSelectedId(id);
      const detail = await fetchPostById(id);
      setDetails(detail);
    }
  };

  return (
    <div>
        <button onClick={() => setSelectedId(null)}>Скинути вибір</button>
        <h3>Пости:</h3>
        {loading ? <p>Завантаження...</p> : (
            <ul>
            {posts.slice(0, 10).map(post => (
                <li key={post.id}>
                <strong>{post.title}</strong>
                <button onClick={() => handleShowDetails(post.id)}>
                    {selectedId === post.id ? 'Приховати' : 'Деталі'}
                </button>
                {selectedId === post.id && details && (
                    <p>{details.body}</p>
                )}
                </li>
            ))}
            </ul>
        )}
    </div>
  );
}
