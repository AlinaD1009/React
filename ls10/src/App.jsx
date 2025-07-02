import React from 'react';
import Users from './components/Users';
import Posts from './components/Posts';
import Comments from './components/Comments';

function App() {
  return (
    <div style={{ padding: '20px' }}>
      <h1>React App</h1>
      <hr />
      <Users />
      <hr />
      <Posts />
      <hr />
      <Comments />
    </div>
  );
}

export default App;
