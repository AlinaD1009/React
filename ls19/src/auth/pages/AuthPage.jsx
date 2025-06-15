import { Formik, Form, Field } from 'formik';
import { useSelector, useDispatch } from 'react-redux';
import { useNavigate } from 'react-router-dom';


import { setNewUser } from '../../store/slices/auth.slice';

export function AuthPage() {

    const navigation = useNavigate();

    const user = useSelector(store => store.auth) || { login: '', password: '' };

    const dispatch = useDispatch();

    function addNewUser(newUser) {
        if (newUser.login && newUser.password) {
            dispatch(setNewUser(newUser));
            localStorage.setItem('user', JSON.stringify(newUser))
        }

        if(newUser.isLogget){
            navigation('/dashboard')
        } else {
            navigation('/auth/login')
        }
    }

    return (
        <div>
            <h2>Register page</h2>
            <hr />
            <Formik
                initialValues={user}
                onSubmit={addNewUser}>
                
                <Form>
                    <Field type="text" name="login" placeholder="Login" />
                    <div style={{margin: '8px'}}></div>
                    <Field type="password" name="password" placeholder="Password" />
                    <div style={{margin: '8px'}}></div>
                    <Field type="checkbox" name="isLogget" id="isLogget"/>
                    <label htmlFor="isLogget"> Logget State </label>
                    <div style={{margin: '8px'}}></div>
                    <button type="submit">Register</button>
                </Form>
            </Formik>
            <hr />
        </div>
    );
}
