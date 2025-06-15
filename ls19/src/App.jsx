import { Outlet, useNavigate } from 'react-router-dom';
import { useDispatch } from 'react-redux';
import { useEffect } from 'react';

import { setNewUser } from './store/slices/auth.slice';

import './App.css';

function App() {
  const dispatch = useDispatch();
  const navigation = useNavigate();

  const storage = JSON.parse(localStorage.getItem('user'));

  useEffect(() => {
    if (storage) {
      dispatch(setNewUser(storage));
      if (storage.isLogged) {
        navigation('/dashboard');
      } else {
        navigation('/auth/login');
      }
    } else {
      navigation('/auth/register'); 
    }
  }, []);

  return <Outlet />;
}

export default App;
