import { useEffect, useState } from "react";
import { useNavigate } from "react-router-dom";
import { getUsers } from "../services/api";

export default function Users() {
  const [users, setUsers] = useState([]);
  const navigate = useNavigate();

  useEffect(() => {
    getUsers().then(res => setUsers(res.data));
  }, []);

  const goToUser = (user) => {
    navigate(`/user/${user.id}`, { state: user });
  };

  return (
    <div>
      <h2>Users</h2>
      <ul>
        {users.map(user => (
          <li key={user.id}>
            {user.name} <button onClick={() => goToUser(user)}>Details</button>
          </li>
        ))}
      </ul>
    </div>
  );
}
