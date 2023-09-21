import React from "react";
import ReactDOM from "react-dom/client";
import Home from "./page/home/Home";
import About from "./page/about/About";
import Contact from "./page/contact/Contact";
import Project from "./page/project/Project";
import "./index.css";

import { createBrowserRouter, RouterProvider } from "react-router-dom";

const router = createBrowserRouter([
  {
    path: "/",
    element: <Home />,
  },
  {
    path: "/about",
    element: <About />,
  },
  {
    path: "/contact",
    element: <Contact />,
  },
  {
    path: "/project",
    element: <Project />,
  },
]);

ReactDOM.createRoot(document.getElementById("root")).render(
  <RouterProvider router={router} />
);
