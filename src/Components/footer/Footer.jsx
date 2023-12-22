import { Link } from "react-router-dom";
import { FaFacebookSquare, FaGithub, FaLinkedin } from "react-icons/fa";
import { useEffect } from "react";
import AOS from "aos";
import "aos/dist/aos.css"

const Footer = () => {
    useEffect(()=>{
        AOS.init({duration: "3000"})
    },[])
    return (
        <footer className="footer footer-center p-10 bg-[#706bc4] text-primary-content">
            <aside>
                <img data-aos="fade-up" src="https://i.ibb.co/f4KPn96/Untitled-design.png" className="w-20" alt="" />
                <p data-aos="fade-up" className="font-bold text-xl">
                   Tasker
                </p>
                <p data-aos="fade-up">Copyright © 2023 - All right reserved</p>
            </aside>
            <nav>
                <div className="grid grid-flow-col gap-8">
                    <Link to={"https://github.com/wolfiee42"}><FaGithub className="text-3xl" /></Link>
                    <Link to={"https://www.linkedin.com/in/saaiful-islam/"}><FaLinkedin className="text-3xl" /></Link>
                    <Link to={"https://www.facebook.com/saif.alislam.3388630"}><FaFacebookSquare className="text-3xl" /></Link>
                </div>
            </nav>
        </footer>
    );
};

export default Footer;