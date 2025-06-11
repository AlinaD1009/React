import { createRoot } from 'react-dom/client';
import { Provider } from 'react-redux'  
import { myStore } from './store'
import App from './App.jsx';
import './index.css';

createRoot(document.getElementById('root')).render(
  <Provider store={myStore}>
    <App />
  </Provider>,
)
