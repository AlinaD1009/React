import { Link } from 'react-router-dom';

export default function Home() {
  return (
    <div className="home">
      <h1>Вітаємо!</h1>
      <nav>
        <Link to="/users">Користувачі</Link> |
        <Link to="/posts">Пости</Link> |
        <Link to="/comments">Коментарі</Link> |
        <Link to="/forms">Форма</Link>
      </nav>
    </div>
  );
}
