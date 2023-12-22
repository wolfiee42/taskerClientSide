import { NavLink, Outlet } from "react-router-dom";


const Dashboard = () => {
    return (
        <div className="flex">
            <div className="min-h-screen w-1/4 bg-[#706bc4]">
                <ul className="menu p-5">
                    <li>
                        <NavLink to="/">
                            <p>Home</p>
                        </NavLink>
                    </li>
                    <li>
                        <NavLink to="/dashboard/dashboard">
                            <p>Dashboard</p>
                        </NavLink>
                    </li>
                </ul>
            </div>
            <div className="w-3/4">
                <Outlet />
            </div>
        </div>
    );
};

export default Dashboard;