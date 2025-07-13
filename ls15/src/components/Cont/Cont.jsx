import React, { useContext } from 'react';
import CountContext from '../../context/CountContext';

function Cont() {
  const { count } = useContext(CountContext);

  return (
    <div className="container" style={{ marginTop: '15px' }}>
      <h2>Cont компонент</h2>
      <p>Count: {count}</p>
    </div>
  );
}

export default Cont;
