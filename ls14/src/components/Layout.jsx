import { Link, Outlet } from "react-router-dom";

export default function Layout() {
  return (
    <div>
      <nav>
        <ul className="nav">
          <li><Link to="/">Home</Link></li>
          <li><Link to="/users">Users</Link></li>
          <li><Link to="/posts">Posts</Link></li>
          <li><Link to="/comments">Comments</Link></li>
        </ul>
      </nav>
      <hr />
      <Outlet />
    </div>
  );
}
