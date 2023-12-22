import { useContext, useEffect } from "react";
import { Link, NavLink } from "react-router-dom";
import { AuthContext } from "../../Provider/AuthProvider";
import AOS from "aos";
import "aos/dist/aos.css"

const Navbar = () => {
    useEffect(() => {
        AOS.init({ duration: "3000" })
    }, [])
    const { user, logout } = useContext(AuthContext)

    const navitems = <>
        <li><Link className="text-black md:text-white">Home</Link></li>
        <li><NavLink className={({ isActive }) => isActive ? "bg-[#544dc9] text-white" : "text-black md:text-white"} to={'/login'}  >Login</NavLink></li>
    </>

    const handleLogout = () => {
        logout();
    }

    return (
        <div className="bg-[#706bc4]">
            <div className="navbar max-w-7xl mx-auto">
                <div className="navbar-start">
                    <div className="dropdown">
                        <div tabIndex={0} role="button" className="btn btn-ghost md:hidden">
                            <svg xmlns="http://www.w3.org/2000/svg" className="h-5 w-5" fill="none" viewBox="0 0 24 24" stroke="currentColor"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M4 6h16M4 12h8m-8 6h16" /></svg>
                        </div>
                        <ul tabIndex={0} className="menu menu-sm dropdown-content mt-3 z-[1] p-2 shadow bg-[#f5f2ff] rounded-box w-52 ">
                            {navitems}
                        </ul>
                    </div>
                    <img data-aos="fade-right" src="https://i.ibb.co/f4KPn96/Untitled-design.png" className="w-20" alt="" />
                </div>
                <div  data-aos="fade-down" className="navbar-center hidden md:flex">
                    <ul className="menu menu-horizontal px-1 text-xl gap-2">
                        {navitems}
                    </ul>
                </div>
                <div className="navbar-end">
                    {
                        user ? <div className="dropdown dropdown-end">
                            <div tabIndex={0} role="button">
                                <div className="avatar online">
                                    <div className="w-14 rounded-full ring ring-primary ring-offset-base-100 ring-offset-2">
                                        <img src={user?.photoURL} />
                                    </div>
                                </div>
                            </div>
                            <ul tabIndex={0} className="dropdown-content z-[1] menu p-2 mt-2 shadow bg-[#f5f2ff] rounded-box w-52">
                                <li><a>{user?.displayName && user.displayName}</a></li>
                                <li><Link to={'/dashboard/dashboard'}>Dashboard</Link></li>
                                <li><p onClick={handleLogout}>Log Out</p></li>
                            </ul>
                        </div> : <div className="avatar offline">
                            <div className="w-14 rounded-full">
                                <img src="https://i.ibb.co/7ydyMPd/Mava.png" />
                            </div>
                        </div>
                    }
                </div>
            </div>
        </div>

    );
};

export default Navbar;