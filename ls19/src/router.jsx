import { createBrowserRouter, Navigate } from  'react-router-dom';

import App from './App';
import {AuthLayoutComponent, AuthPage, LoginPage} from './auth';

import { UserLayoutComponent, DashboardPage} from './user';

export const router = createBrowserRouter([
    {
        path: '/',
        Component: App,
        children: [
            {
                path: '/',
                Component: UserLayoutComponent,
                children: [
                    {
                        path:'',
                        element:<Navigate to='dadhboard' replace />
                    },
                    {
                        path: 'dashboard',
                        Component: DashboardPage
                    },
                    // {
                    //     path: 'users'
                    // },
                    // {
                    //     path: 'user/:id'
                    // },
                    // {
                    //     path: 'posts'
                    // },
                    // {
                    //     path: 'post/:id'
                    // },
                    // {
                    //     path: 'comments'
                    // },
                    // {
                    //     path: 'comment/:id'
                    // },
                ]
            },
            {
                path: 'auth',
                Component: AuthLayoutComponent,
                children: [
                    {
                        path:'',
                        element:<Navigate to='login' replace />
                    },
                    {
                        path: 'login',
                        Component: LoginPage
                    },
                    {
                        path: 'register',
                        Component: AuthPage
                    }
                ]
            }
        ]
    },
    {
        path: '*',
        element: <h1> Page Not Found </h1>
    }
])