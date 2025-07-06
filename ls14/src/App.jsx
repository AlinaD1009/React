import React, { lazy } from "react";
import { createBrowserRouter, RouterProvider } from "react-router-dom";
import Layout from "./components/Layout";

const Home = lazy(() => import("./pages/Home"));
const Users = lazy(() => import("./pages/Users"));
const UserDetail = lazy(() => import("./pages/UserDetail"));
const Posts = lazy(() => import("./pages/Posts"));
const PostDetail = lazy(() => import("./pages/PostDetail"));
const Comments = lazy(() => import("./pages/Comments"));
const CommentDetail = lazy(() => import("./pages/CommentDetail"));

const router = createBrowserRouter([
  {
    path: "/",
    element: <Layout />,
    children: [
      { index: true, element: <Home /> },
      { path: "users", element: <Users /> },
      { path: "user/:id", element: <UserDetail /> },
      { path: "posts", element: <Posts /> },
      { path: "post/:id", element: <PostDetail /> },
      { path: "comments", element: <Comments /> },
      { path: "comment/:id", element: <CommentDetail /> },
    ],
  },
]);

export default function App() {
  return <RouterProvider router={router} />;
}
