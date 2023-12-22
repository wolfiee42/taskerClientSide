import { useContext } from "react";
import { useForm } from "react-hook-form";
import { AuthContext } from "../../Provider/AuthProvider";
import { Link, useLocation, useNavigate } from "react-router-dom";
import { FaUserAlt } from "react-icons/fa";
import { IoMdKey } from "react-icons/io";
import { FcGoogle } from "react-icons/fc";
import { ImGithub } from "react-icons/im";



const Login = () => {
    const { register, handleSubmit } = useForm();
    const { login, socialLogin, gitLogin } = useContext(AuthContext);
    const navigate = useNavigate();
    const location = useLocation();
    const from = location.state?.from?.pathname || '/dashboard/dashboard';


    const onSubmit = (data) => {

        const email = data.email;
        const password = data.password;

        login(email, password)
            .then(result => {
                console.log(result.user);
                navigate(from, { replace: true });
            })
            .catch(error => {
                console.log(error);
            })

    }

    const handleSocialLogin = () => {
        socialLogin()
            .then(() => {
                navigate(from, { replace: true });
            })
    }
    const handlegitLogin = () => {
        gitLogin()
            .then(() => {
                navigate(from, { replace: true });
            })
    }
    return (
        <div className="min-h-screen bg-[#f5f2ff]">
            <div className="pt-20">
                <div className="max-w-5xl mx-auto flex justify-center items-center bg-white rounded-lg  shadow-2xl">
                    <div className="w-1/2">
                        <img src="https://i.ibb.co/SrHfxJ8/undraw-Login-re-4vu2.png" alt="" />
                        <p className="text-center underline font-semibold hover:cursor-pointer hover:text-[#706BC4]"><Link to='/signup'>Create an account</Link></p>
                    </div>
                    <div className="my-20 flex flex-col">
                        <h1 className="text-4xl font-bold mb-16 text-center">Log In</h1>
                        <form onSubmit={handleSubmit(onSubmit)}>
                            <div className="relative">
                                <FaUserAlt className="absolute -left-8 top-2" />
                                <input type="email" {...register("email", { required: true })} placeholder="Email" className="border-b-2 mb-8 p-1 w-[300px]" /> <br />
                            </div>
                            <div className="relative">
                                <IoMdKey className="absolute -left-8 top-2 text-2xl" />
                                <input type="password" {...register("password", { required: true })} placeholder="Your Password" className="border-b-2 mb-8 p-1 w-[300px]" />
                            </div>
                            <button className="btn bg-[#706BC4] hover:bg-[#f5f2ff] text-white hover:text-black">Log in </button>
                        </form>

                        <div className="flex items-center gap-5 my-5">
                            <p className="text-lg font-semibold">Or Login With </p>
                            <button className="btn bg-[#706BC4] hover:bg-[#f5f2ff] text-white" onClick={handleSocialLogin}> <FcGoogle className="text-xl" /></button>
                            <button className="btn bg-[#706BC4] hover:bg-[#f5f2ff] text-white" onClick={handlegitLogin}> <ImGithub className="text-xl" /></button>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default Login;