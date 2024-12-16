import { createBrowserRouter, RouterProvider as ReactRouterProvider } from "react-router-dom";

import App from "../../App";
import DashboardLayout from "../../layout/DashboardLayout";
import Login from "../../page/auth/Login";
import { whiteList } from "../../config/router";

// react-router-dom
export const router = createBrowserRouter([
    {
        Component: App, // root layout route
        children: [
            {
                path: '/',
                Component: DashboardLayout,
                children: whiteList.map((list) => ({
                    path: list.path,
                    Component: list?.component,
                    children: list?.children?.map((sublist) => ({
                        path: sublist?.segment,
                        Component: sublist?.component,
                    }))
                }))
            },
            {
                path: '/login',
                Component: Login
            }
        ],
    },
]);

// Provider
export const RouterProvider = (): JSX.Element => ( <ReactRouterProvider router={router} /> )