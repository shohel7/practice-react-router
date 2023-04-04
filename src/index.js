import React from "react";
import ReactDOM from "react-dom/client";
import "./index.css";
import reportWebVitals from "./reportWebVitals";
import { createBrowserRouter, RouterProvider } from "react-router-dom";
import About from "./components/About/About";
// import App from "./App";
// import Contact from "./components/Contact/Contact";
import NotFound from "./components/NotFound/NotFound";
import Home from "./components/Home/Home";
import Contact from "./components/Contact/Contact";
import DefaultPage from "./components/DefaultPage/DefaultPage";
import Friends from "./components/Friends/Friends";
import FriendDetails from "./components/FriendDetails/FriendDetails";
import Posts from "./components/Posts/Posts";
import PostDetails from "./components/PostDetails/PostDetails";

const router = createBrowserRouter([
  {
    path: "/",
    element: <Home />,
    children: [
      {
        path: "/",
        element: <DefaultPage />,
      },
      {
        path: "friends",
        element: <Friends />,
        loader: () => fetch("https://jsonplaceholder.typicode.com/users"),
      },
      {
        path: "friend/:friendId",
        element: <FriendDetails />,
        loader: ({ params }) =>
          fetch(
            `https://jsonplaceholder.typicode.com/users/${params.friendId}`
          ),
      },
      {
        path: "posts",
        element: <Posts />,
        loader: () => fetch("https://jsonplaceholder.typicode.com/posts"),
      },
      {
        path: "post/:postId",
        element: <PostDetails />,
        loader: ({ params }) =>
          fetch(`https://jsonplaceholder.typicode.com/posts/${params.postId}`),
      },
      {
        path: "about",
        element: <About />,
      },
      {
        path: "contact",
        element: <Contact />,
      },
      {
        path: "*",
        element: <NotFound />,
      },
    ],
  },
]);

const root = ReactDOM.createRoot(document.getElementById("root"));
root.render(
  <React.StrictMode>
    <RouterProvider router={router} />
  </React.StrictMode>
);

reportWebVitals();

// {
//   path: "about",
//   element: <About />,
// },
// {
//   path: "contact",
//   element: <Contact />,
// },
// {
//   path: "*",
//   element: <NotFound />,
// },
