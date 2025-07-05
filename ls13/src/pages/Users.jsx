import { useEffect, useState } from 'react';
import { getUsers } from '../service/users';
import { Link } from 'react-router-dom';

export default function Users() {
  const [users, setUsers] = useState([]);

  useEffect(() => {
    getUsers().then(res => setUsers(res.data));
  }, []);

  return (
    <div>
      <h2>Користувачі</h2>
      <ul>
        {users.map(user => (
          <li key={user.id}>
            {user.name} — <Link to={`/user/${user.id}`}>Деталі</Link>
          </li>
        ))}
      </ul>
    </div>
  );
}
