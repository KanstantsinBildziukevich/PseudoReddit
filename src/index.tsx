import React from 'react';
import ReactDOM from 'react-dom/client';
import './index.css';
import { App } from './App';
import {createBrowserRouter, RouterProvider} from "react-router-dom";
import {ErrorPage} from "./components/SidePages/ErrorPage/ErrorPage";
import {NewPage} from "./components/SidePages/NewPage/NewPage";
import {DemoPage} from "./components/SidePages/DemoPage/DemoPage";

const root = ReactDOM.createRoot(
  document.getElementById('root') as HTMLElement
);
const router = createBrowserRouter(
    [
        {
            path: "/",
            element: <App />,
            errorElement: <ErrorPage />},
        {
            path: "/new/:postId",
            element: <NewPage />,
            errorElement: <ErrorPage />,
        },
        {
            path: "/demo",
            element: <DemoPage />,
            errorElement: <ErrorPage />,
        },
    ]
)
root.render(
  <React.StrictMode>
    <RouterProvider router={router} />
  </React.StrictMode>
);

