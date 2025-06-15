import { Formik, Form, Field } from 'formik';
import { useSelector, useDispatch } from 'react-redux';
import { useNavigate } from 'react-router-dom';




import { setLoginState } from '../../store/slices/auth.slice';


export function LoginPage() {
    const initLOginState = {
        login:'',
        password: '',
        isLogget: false,
    }

    const currentUser = useSelector(state => state.auth);
    const dispatch = useDispatch();
    const navigation = useNavigate();

    const logUser = (credentials) =>{
        if (currentUser.login === credentials.login &&
            currentUser.password === credentials.password
        ) {
            const loggedState = { ...currentUser, isLogget: true}
            dispatch(setLoginState(true))
            localStorage.setItem('user', JSON.stringify(loggedState))
            navigation('/dashboard')
        }
    }

    return (
        <div>
            <h2>Login page</h2>
            <hr />
            <Formik
                initialValues={initLOginState}
                onSubmit={logUser}>
                
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
    )
}