/* eslint-disable react/prop-types */
// eslint-disable-next-line react/prop-types
import { FaArrowRight, FaEdit } from "react-icons/fa";
import { MdDelete } from "react-icons/md";
import useAxios from "../../Utils/useAxios";
import Swal from "sweetalert2";
import AOS from "aos";
import "aos/dist/aos.css"
import { useEffect } from "react";


const Todo = ({ todo }) => {
    useEffect(()=>{
        AOS.init({duration: "3000"})
    },[])


    const axiosCall = useAxios()

    const handlestate = (_id) => {
        axiosCall.patch(`/tasks/${_id}`)
            .then(res => {
                if (res.data.modifiedCount > 0) {
                    location.reload();
                }
            })
    }

    const handledelete = _id => {
        Swal.fire({
            title: "Are you sure?",
            icon: "warning",
            showCancelButton: true,
            confirmButtonColor: "#3085d6",
            cancelButtonColor: "#d33",
            confirmButtonText: "Yes, delete it!"
        }).then((result) => {
            if (result.isConfirmed) {
                axiosCall.delete(`/tasks/${_id}`)
                    .then(res => {
                        console.log(res.data);
                        if (res.data.deletedCount > 0) {
                            Swal.fire({
                                title: "Deleted!",
                                text: "Your Task has been deleted.",
                                icon: "success"
                            });
                            location.reload();
                        }
                    })

            }
        });

    }
    return (
        <div  data-aos="fade-down" className=" border-2 py-1 px-3 mb-1 rounded-lg flex justify-between shadow-md">
            <div>
                <p className="font-semibold"> {todo.title}</p>
                <p className="text-xs"> {todo.desc}</p>
                <p className="text-xs"></p>
                <div className="badge badge-warning text-xs">
                    {todo.taskPriority}
                </div>
                <p className="text-xs">Deadline: {todo.taskDeadline.split("T")[0]}</p>
            </div>
            <div className="flex flex-col justify-around items-center">
                <button onClick={() => handlestate(todo._id)}><FaArrowRight className="text-xl hover:text-red-300" /></button>
                <button onClick={() => handledelete(todo._id)}><MdDelete className="text-xl hover:text-red-300" /></button>
                <button><FaEdit className="text-xl hover:text-red-300" /></button>
            </div>
        </div>
    );
};

export default Todo;