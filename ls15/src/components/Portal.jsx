import React from 'react';
import ReactDOM from 'react-dom';

function Portal() {
  return ReactDOM.createPortal(
    <div className="portal-text">мій перший портал</div>,
    document.body
  );
}

export default Portal;
