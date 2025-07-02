import React, { useState } from 'react';
import useFetch from '../hooks/useFetch';
import { fetchUsers } from '../api/usersApi';

export default function Users() {
    const { data: users, loading } = useFetch(fetchUsers);
    const [show, setShow] = useState(false);

    return (
        <div>
        <button onClick={() => setShow(prev => !prev)}>
            {show ? 'Сховати користувачів' : 'Показати користувачів'}
        </button>

        {show && (
            <div>
            <h3>Користувачі:</h3>
            {loading ? <p>Завантаження...</p> : (
                <ul>
                {users.map(user => (
                    <li key={user.id}>{user.name} ({user.email})</li>
                ))}
                </ul>
            )}
            </div>
        )}
        </div>
    );
}
