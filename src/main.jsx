import React, { Children } from 'react';
import ReactDOM from 'react-dom/client';
import './index.css';

import { createBrowserRouter, RouterProvider } from 'react-router-dom';
import About from './components/About/About';
import Contact from './components/Contact/Contact';
import Home from './components/Home/Home';
import Friends from './components/Friends/Friends';
import App from './App';
import FriendInfo from './components/FriendInfo/FriendInfo';
import Posts from './components/Posts/Posts';
import PostDetails from './components/PostDetails/PostDetails';

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
    element: <Home></Home>,
    children: [
      {
        path: '/',
        element: <App />,
      },
      {
        path: '/contact',
        element: <Contact />,
      },
      {
        path: '/about',
        element: <About />,
      },
      {
        path: '/friends',
        element: <Friends />,
        loader: () => fetch('https://jsonplaceholder.typicode.com/users'),
      },
      {
        path: 'friendsdetails/:friendID',
        element: <FriendInfo />,
        loader: ({ params }) =>
          fetch(
            `https://jsonplaceholder.typicode.com/users/${params.friendID}`
          ),
      },
      {
        path: '/posts',
        element: <Posts />,
        loader: () => fetch(`https://jsonplaceholder.typicode.com/posts`),
      },
      {
        path: '/postDetails/:postID',
        element: <PostDetails />,
        loader: ({ params }) =>
          fetch(`https://jsonplaceholder.typicode.com/posts/${params.postID}`),
      },
      {
        path: '*',
        element: <div>404 Not Found</div>,
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
