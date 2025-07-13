import React, { useState } from 'react';

function MyRef() {
  const [id, setId] = useState('');
  const [user, setUser] = useState(null);
  const [loading, setLoading] = useState(false);
  const [error, setError] = useState(null);

  const fetchUser = async () => {
    if (!id) return;
    setLoading(true);
    setError(null);
    setUser(null);
    try {
      const res = await fetch(`https://jsonplaceholder.typicode.com/users/${id}`);
      if (!res.ok) throw new Error('User not found');
      const data = await res.json();
      setUser(data);
    } catch (err) {
      setError(err.message);
    } finally {
      setLoading(false);
    }
  };

  return (
    <div className="container" style={{ marginTop: '20px' }}>
      <h2>Пошук користувача за ID</h2>
      <input
        type="number"
        placeholder="Введіть ID"
        value={id}
        onChange={e => setId(e.target.value)}
      />
      <button onClick={fetchUser}>Знайти</button>
      {loading && <p>Завантаження...</p>}
      {error && <p style={{ color: 'red' }}>{error}</p>}
      {user && (
        <div>
          <p><b>Ім'я:</b> {user.name}</p>
          <p><b>Email:</b> {user.email}</p>
          <p><b>Телефон:</b> {user.phone}</p>
          <p><b>Компанія:</b> {user.company.name}</p>
        </div>
      )}
    </div>
  );
}

export default MyRef;
