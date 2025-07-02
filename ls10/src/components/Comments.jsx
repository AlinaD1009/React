import React, { useState } from 'react';
import useFetch from '../hooks/useFetch';
import { fetchComments } from '../api/commentsApi';

export default function Comments() {
    const { data: comments, loading } = useFetch(fetchComments);
    const [show, setShow] = useState(false);
    

    return (
        <div>
        <button onClick={() => setShow(prev => !prev)}>
            {show ? 'Сховати коментарі' : 'Показати коментарі'}
        </button>

        {show && (
            <>
            <h3>Коментарі:</h3>
            {loading ? <p>Завантаження...</p> : (
                <ul>
                {comments.slice(0, 10).map(comment => (
                    <li key={comment.id}>
                    <strong>{comment.name}</strong>: {comment.body}
                    </li>
                ))}
                </ul>
            )}
            </>
        )}
        </div>
    );
}
