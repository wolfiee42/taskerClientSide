import { useContext, useEffect } from "react";
import banner from "../../assets/43577.jpg"
import { AuthContext } from "../../Provider/AuthProvider";
import { Link } from "react-router-dom";
import AOS from 'aos';
import 'aos/dist/aos.css';


const BannerSec = () => {
    useEffect(() => {
        AOS.init({ duration: "3000" })
    }, [])
    const { user } = useContext(AuthContext);
    return (
        <div className="hero min-h-screen md:min-h-[500px] lg:min-h-[830px]" style={{ backgroundImage: `url(${banner})` }}>
            <div className="hero-overlay bg-opacity-50"></div>
            <div data-aos="fade-up" className="max-w-sm md:max-w-md lg:max-w-2xl text-center text-white">
                <h1 className="text-3xl lg:text-5xl">Hello, {user?.displayName || "Tasker"}</h1>
                <h1 className="text-xl lg:text-2xl my-5">Welcome to Taskers, where you can manage your task along with your life</h1>
                <Link to={'/login'} className="btn bg-[#544dc9] hover:bg-[#706bc4] border-none text-white mt-10">Let's Explore</Link>
            </div>
        </div>
    );
};

export default BannerSec;