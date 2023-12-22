import { useContext } from "react";
import { useForm } from "react-hook-form";
import { FaPen, FaUserAlt } from "react-icons/fa";
import { FcGoogle } from "react-icons/fc";
import { IoMdKey } from "react-icons/io";
import { MdImage } from "react-icons/md";
import { Link, useLocation, useNavigate } from "react-router-dom";
import { AuthContext } from "../../Provider/AuthProvider";
import axios from "axios";
import { ImGithub } from "react-icons/im";


const Register = () => {

    const { register, handleSubmit, formState: { errors } } = useForm();
    const { createUser, updateUser, socialLogin, gitLogin } = useContext(AuthContext);
    const imgbbkey = import.meta.env.VITE_imgbb_key;
    const imgbbapi = `https://api.imgbb.com/1/upload?key=${imgbbkey}`;


    const navigate = useNavigate();
    const location = useLocation();
    const from = location.state?.from?.pathname || '/dashboard/dashboard';




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

    const onSubmit = async (data) => {
        const name = data.name;
        const email = data.email;
        const password = data.password;
        const imageFile = { image: data.image[0] };

        const res = await axios.post(imgbbapi, imageFile, {
            headers: {
                "Content-Type": "multipart/form-data"
            }
        });
        const photo = res.data.data.display_url;


        createUser(email, password)
            .then(result => {
                console.log(result.user);
                updateUser(name, photo)
            })
            .catch(error => {
                console.log(error);
            })
    };
    return (
        <div className="bg-[#f5f2ff]">
            <div className="pt-20 min-h-screen">
                <div className="max-w-5xl mx-auto flex justify-center items-center bg-white rounded-lg  shadow-2xl">
                    <div className="w-1/2">
                        <img src="https://i.ibb.co/V9Q0KSB/undraw-Sign-up-n6im.png" alt="" />
                        <p className="text-center underline font-semibold">Already Have an account? <Link className=" hover:cursor-pointer hover:text-[#706BC4] hover:font-bold" to="/login">Log in</Link></p>
                    </div>
                    <div className="mt-20 mb-5 flex flex-col">
                        <h1 className="text-4xl font-bold mb-16 text-center">Sign Up</h1>
                        <form onSubmit={handleSubmit(onSubmit)}>
                            <div className="relative form-control">
                                <FaPen className="absolute -left-8 top-2" />
                                <input {...register("name", { required: true })} type="text" placeholder="Your Name" className="border-b-2 mb-8 p-1 w-[300px]" />
                                {errors.name && <span className="mt-1 text-red-600">Name is required</span>}
                            </div>
                            <div className="relative form-control">
                                <FaUserAlt className="absolute -left-8 top-2" /> <input {...register('email', { required: true })} type="email" placeholder="Email" className="border-b-2 mb-8 p-1 w-[300px]" />
                                {errors.email && <span className="mt-1 text-red-600">Email is required</span>}
                            </div>
                            <div className="relative form-control">
                                <IoMdKey className="absolute -left-8 top-2 text-2xl" />
                                <input type="password" {...register('password', { required: true })} placeholder="Your Password" className="border-b-2 mb-8 p-1 w-[300px]" />
                                {errors.password && <span className="mt-1 text-red-600">Password is required</span>}
                            </div>
                            <div className="relative form-control">
                                <MdImage className="absolute -left-8 top-2 text-xl" /> <input {...register("image")} type="file" placeholder="Email" className="mb-8 p-1 w-[300px]" />
                            </div>
                            <div className="form-control">
                                <button className="btn bg-[#706BC4] hover:bg-[#f5f2ff] hover:text-black text-white">Sign Up</button>
                            </div>
                        </form>

                        <div className="flex items-center gap-5 my-5">
                            <p className="text-lg font-semibold">Or Sign up With </p>
                            <button className="btn bg-[#706BC4] hover:bg-[#f5f2ff] text-white" onClick={handleSocialLogin}> <FcGoogle className="text-xl" /></button>
                            <button className="btn bg-[#706BC4] hover:bg-[#f5f2ff] text-white" onClick={handlegitLogin}> <ImGithub className="text-xl" /></button>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    );

}
export default Register;