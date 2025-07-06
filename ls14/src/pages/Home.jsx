import { Link } from "react-router-dom";

export default function Home() {
  return (
    <div>
      <h1>Welcome to the API Browser</h1>
      <p>Explore:</p>
      <ul>
        <li><Link to="/users">Users</Link></li>
        <li><Link to="/posts">Posts</Link></li>
        <li><Link to="/comments">Comments</Link></li>
      </ul>
    </div>
  );
}
