/* eslint-disable react/prop-types */

import { FaArrowRight } from "react-icons/fa";
import useAxios from "../../Utils/useAxios";
import AOS from "aos";
import "aos/dist/aos.css"
import { useEffect } from "react";

const Ongoing = ({ todo }) => {
    useEffect(() => {
        AOS.init({ duration: "3000" })
    }, [])

    const axiosCall = useAxios();

    const handlestate = _id => {

        axiosCall.put(`/tasks/${_id}`)
            .then(res => {
                if (res.data.modifiedCount) {
                    location.reload();
                }
            })
    }
    return (

        <div data-aos="fade-down" className=" border-2 py-1 px-3 mb-1 rounded-lg shadow-md flex justify-between">
            <div>
                <p> {todo.title}</p>
                <p className="text-xs"> {todo.desc}</p>
                <div className="badge badge-warning text-xs">
                    {todo.taskPriority}
                </div>
                <p className="text-xs">Deadline: {todo.taskDeadline.split("T")[0]}</p>
            </div>
            <div>
                <button onClick={() => handlestate(todo._id)}><FaArrowRight className="text-xl hover:text-red-300" /></button>
            </div>
        </div>
    );
};

export default Ongoing;