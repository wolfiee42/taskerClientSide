import { createBrowserRouter } from "react-router-dom";
import App from "../App"
import Home from "../layouts/Home/Home";
import Login from "../layouts/Login/Login";
import Register from "../layouts/Register/Register";
import Dashboard from "../Dashboard";
import DashboardTask from "../DashboardItems/DashboadTask/DashboardTask"
import PrivateRoute from "./PrivateRoute";


const Router = createBrowserRouter([
    {
        path: "/",
        element: <App />,
        children: [
            {
                path: '/',
                element: <Home />
            },
            {
                path: '/login',
                element: <Login />
            },
            {
                path: '/signup',
                element: <Register />
            },
        ]
    },
    {
        path: "/dashboard",
        element: <PrivateRoute><Dashboard /></PrivateRoute>,
        children: [
            {
                path: '/dashboard/dashboard',
                element: <PrivateRoute> <DashboardTask /></PrivateRoute>
            },
        ]
    }
]);

export default Router;