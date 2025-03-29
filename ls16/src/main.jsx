
import { createRoot } from 'react-dom/client'
import { Provider } from 'react-redux'
import { myStoreNew } from './store/index.jsx'
import App from './App.jsx'


createRoot(document.getElementById('root')).render(
  <Provider store={myStoreNew}>
    <App />
  </Provider>,
)
