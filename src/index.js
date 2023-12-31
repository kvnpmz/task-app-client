import React from "react";
import ReactDOM from "react-dom/client";
import RegisterForm from "./registerForm";
import LoginForm from "./loginForm";
import Blog from "./blog";
import { createBrowserRouter, RouterProvider } from "react-router-dom";



const router = createBrowserRouter([
    {
        path: "/register",
        element: <RegisterForm />,
    },
    {
        path: "/login",
        element: <LoginForm />,
    },
    {
        path: "/",
        element: <Blog />,
    },
]);

ReactDOM.createRoot(document.getElementById("root")).render(
        <RouterProvider router={router} />
);

/*
    <React.StrictMode>
    </React.StrictMode>
"proxy": "http://localhost:5000",
*/

