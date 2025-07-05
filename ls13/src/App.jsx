import { BrowserRouter, Routes, Route } from 'react-router-dom';
import Home from './pages/Home';
import Users from './pages/Users';
import UserDetail from './pages/UserDetail';
import Posts from './pages/Posts';
import PostDetail from './pages/PostDetail';
import Comments from './pages/Comments';
import CommentDetail from './pages/CommentDetail';
import Forms from './pages/Forms';

export default function App() {
  return (
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/users" element={<Users />} />
        <Route path="/user/:id" element={<UserDetail />} />
        <Route path="/posts" element={<Posts />} />
        <Route path="/post/:id" element={<PostDetail />} />
        <Route path="/comments" element={<Comments />} />
        <Route path="/comment/:id" element={<CommentDetail />} />
        <Route path="/forms" element={<Forms />} />
      </Routes>
    </BrowserRouter>
  );
}
