import { useLocation } from "react-router-dom";

export default function UserDetail() {
  const { state } = useLocation();
  const user = state;

  if (!user) return <p>Дані не передано.</p>;

  return (
    <div>
      <h2>Деталі користувача</h2>
      <p><strong>Ім'я:</strong> {user.name}</p>
      <p><strong>Email:</strong> {user.email}</p>
      <p><strong>Телефон:</strong> {user.phone}</p>
      <p><strong>Місто:</strong> {user.address.city}</p>
    </div>
  );
}
