import React from "react";
import { createBrowserRouter, RouterProvider, Outlet } from "react-router-dom";
import About from "./pages/About/About";
import HomePage from "./pages/Home/HomePage";
import Properties from "./pages/Property/property";
import Blog from "./pages/Blog/blog";
import Layout from "./Layout";


function App() {
  const router = createBrowserRouter([
    {
      path: "/",
      element: <Layout />,
      children: [
        {
          path: "/",
          element: <HomePage />,
        },
        {
          path: "about",
          element: <About />,
        },
        {
          path: "properties",
          element: <Properties />,
        },
        {
          path: "blog",
          element: <Blog />,
        },
      ],
    },
  ]);

  return <RouterProvider router={router} />;
}

export default App;
