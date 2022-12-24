import React from 'react';
import ReactDOM from 'react-dom/client';
import './index.css';
import {
  createBrowserRouter,
  RouterProvider,
} from "react-router-dom";
import reportWebVitals from './reportWebVitals';

import Login from './routes/login';
import Register from './routes/register';
import HomeLayout from './routes/home/layout';
import Home from './routes/home';
import Contacts from './routes/home/contacts';

const root = ReactDOM.createRoot(document.getElementById('root'));
const router = createBrowserRouter([
    {
        path: '/',
        element: <Login />
    },
    {
        path: '/register',
        element: <Register />
    },
    {
        path: '/dashboard',
        element: <HomeLayout />,
        children: [
            {
                path: '/dashboard/',
                index: true,
                element: <Home />
            },
            {
                path: '/dashboard/contacts',
                element: <Contacts />
            }
        ],
    },
]);
root.render(
  <React.StrictMode>
    <RouterProvider router={router} />
  </React.StrictMode>
);

// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
reportWebVitals();
