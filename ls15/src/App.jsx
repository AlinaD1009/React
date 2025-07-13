import React, { useState } from 'react';
import CountContext from './context/CountContext';
import Cont1 from './components/Cont/Cont1';
import MyRef from './components/MyRef';
import Portal from './components/Portal';

import './App.css';

function App() {
  const [count, setCount] = useState(0);

  return (
    <>
      <CountContext.Provider value={{ count, setCount }}>
        <div className="container">
          <h1>App: {count}</h1>
          <button onClick={() => setCount(count + 1)}>+</button>
          <button onClick={() => setCount(count - 1)}>-</button>

          <Cont1 />
          <MyRef />
        </div>
        <Portal />
      </CountContext.Provider>
    </>
  );
}

export default App;
