import { useContext, useEffect, useState } from "react";
import { AuthContext } from "../../Provider/AuthProvider";
import useAxios from "../../Utils/useAxios"
import Todo from "./Todo";
import Ongoing from "./Ongoing";
import Completed from "./Completed";
import { useForm } from "react-hook-form";
import DatePicker from 'react-datepicker';
import 'react-datepicker/dist/react-datepicker.css';
import Swal from 'sweetalert2'
import AOS from "aos";
import "aos/dist/aos.css"



const Dashboard = () => {
    useEffect(() => {
        AOS.init({ duration: "3000" })
    }, [])


    const axiosCall = useAxios();
    const { user } = useContext(AuthContext);
    const [todos, setTodos] = useState([])
    const { register, handleSubmit } = useForm();
    const [deadline, setDeadline] = useState(new Date());
    const [priority, setpriority] = useState("");


    useEffect(() => {
        axiosCall.get(`/tasks?email=${user?.email}`)
            .then(res => {
                setTodos(res.data);
            });

    }, [axiosCall, user?.email])


    const handlepriority = e => {
        e.preventDefault();
        const selectedpriority = e.target.value;
        setpriority(selectedpriority)

    }


    const onsubmit = data => {
        const name = user?.displayName;
        const email = user?.email;
        const title = data.title;
        const desc = data.description
        const taskDeadline = deadline;
        const taskPriority = priority;
        const state = "to-do"

        const task = { name, email, title, desc, taskDeadline, taskPriority, state };
        console.log(task);

        axiosCall.post('/tasks', task)
            .then(res => {
                if (res.data.insertedId) {
                    Swal.fire({
                        position: "top-center",
                        icon: "success",
                        title: "Task Added",
                        showConfirmButton: false,
                        timer: 1500
                    });
                    location.reload();
                }
            })

    }
    return (
        <div className="bg-[#f5f2ff] min-h-screen flex flex-col">
            <div data-aos="fade-down" className="w-[97%] mx-auto h-[450px] shadow-2xl rounded-md m-3 p-5 flex gap-2">
                <div  data-aos="fade-down" className="w-1/3 p-3 rounded-lg border-2 shadow-md">
                    <h1 className="text-2xl uppercase mb-3">to-do</h1>
                    <div className="grid grid-cols-1 max-h-80 overflow-y-auto">
                        {
                            todos.map(todo => todo.state === "to-do" && <Todo key={todo._id} todo={todo} />)
                        }
                    </div>
                </div>
                <div  data-aos="fade-down" className="w-1/3 p-3 rounded-lg border-2 shadow-md">
                    <h1 className="text-2xl uppercase  mb-3">ongoing</h1>
                    <div className="grid grid-cols-1 max-h-80 overflow-y-auto">
                        {
                            todos.map(todo => todo.state === "ongoing" && <Ongoing key={todo._id} todo={todo} />)
                        }
                    </div>
                </div>
                <div  data-aos="fade-down" className="w-1/3 p-3 rounded-lg border-2 shadow-md">
                    <h1 className="text-2xl uppercase  mb-3">completed</h1>
                    <div className="grid grid-cols-1 max-h-80 overflow-y-auto">
                        {
                            todos.map(todo => todo.state === "completed" && <Completed key={todo._id} todo={todo} />)
                        }
                    </div>
                </div>
            </div>
            <div className="w-[97%] h-[400px] my-auto mx-auto flex flex-row ">
                <div data-aos="fade-up" className="w-1/2 shadow-2xl m-3 p-5 rounded-md">
                    <h1 className="text-xl mb-3 uppercase">Add Task</h1>
                    <form onSubmit={handleSubmit(onsubmit)} className="w-full space-y-5">
                        <div className="form-control w-full max-w-xl">
                            <input {...register('title', { required: true })} type="text" placeholder="Title of the Task" className="input input-bordered w-full max-w-xl" />
                        </div>
                        <div className="form-control w-full max-w-xl">
                            <textarea  {...register('description', { required: true })} className="textarea textarea-bordered h-24" placeholder="Task Description"></textarea>
                        </div>
                        <div className="flex justify-start items-center gap-10">
                            <div className="form-control">

                                <DatePicker selected={deadline} onChange={(date) => setDeadline(date)} />
                            </div>
                            <div className="form-control w-1/3">

                                <select required className="select select-bordered w-full" onChange={handlepriority}>
                                    <option disabled selected>Pick one</option>
                                    <option value='Low'>Low</option>
                                    <option value='Moderate'>Moderate</option>
                                    <option value='High'>High</option>
                                </select>
                            </div>
                        </div>
                        <div>
                            <button className="w-[576px] btn bg-[#544dc9] hover:bg-[#706bc4] border-none text-white"> Add Task</button>
                        </div>
                    </form>
                </div>
                <div data-aos="fade-up" className="w-1/2 shadow-2xl m-3 p-5 rounded-md mx-auto flex justify-center items-center gap-5 ">
                    <div>
                        <img className="w-[150px] rounded-full" src={user?.photoURL} alt="" />
                    </div>
                    <div>
                        <h1 className="text-xl font-semibold mt-5">Name: {user?.displayName}</h1>
                        <h1 className="text-base font-semibold mt-5">{user?.email}</h1>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default Dashboard;