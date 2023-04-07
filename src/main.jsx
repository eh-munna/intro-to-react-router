import React, { Children } from 'react';
import ReactDOM from 'react-dom/client';
import App from './App';
import './index.css';

import { createBrowserRouter, RouterProvider } from 'react-router-dom';
import About from './components/About/About';
import Contact from './components/Contact/Contact';
import Header from './components/Header/Header';
import Root from './components/Root/Root';

// const router = createBrowserRouter([
//   {
//     path: '/',
//     element: <App />,
//   },
//   {
//     path: '/about',
//     element: <About />,
//   },
//   {
//     path: '/contact',
//     element: <Contact />,
//   },
// ]);

const router = createBrowserRouter([
  {
    path: '/',
    element: <App />,
    children: [
      {
        path: '/contact',
        element: <Contact />,
      },
      {
        path: '/about',
        element: <About />,
      },
    ],
  },
]);

ReactDOM.createRoot(document.getElementById('root')).render(
  <React.StrictMode>
    {/* <Header></Header> */}
    <RouterProvider router={router} />
  </React.StrictMode>
);
