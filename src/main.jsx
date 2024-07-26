import * as React from "react";
import * as ReactDOM from "react-dom/client";
import {
  createBrowserRouter,
  RouterProvider,
} from "react-router-dom";
import "./index.css";
import Main from "./Layout/Main";
import Home from "./Page/Home/Home";
import About from "./Page/About/About";
import Projects from "./Page/Projects/Projects";
import ProjectInfo from "./Page/Projects/ProjectInfo";
import Contact from "./Page/Contact/Contact";

const router = createBrowserRouter([
  {
    path: "/",
    element: <Main></Main>,
    children: [
      {
        path: '/',
        element: <Home></Home>
      },
      {
        path: '/about',
        element: <About></About>
      },
      {
        path: '/projects',
        element: <Projects></Projects>
      }, {
        path: '/projects/:id',
        element: <ProjectInfo></ProjectInfo>
      },
      {
        path: '/Contact',
        element: <Contact></Contact>
      },
    ]
  },
]);

ReactDOM.createRoot(document.getElementById("root")).render(
  <React.StrictMode>
    <RouterProvider router={router} />
  </React.StrictMode>
);