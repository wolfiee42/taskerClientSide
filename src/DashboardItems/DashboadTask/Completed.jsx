/* eslint-disable react/prop-types */
import { MdVerifiedUser } from "react-icons/md";
import AOS from "aos";
import "aos/dist/aos.css"
import { useEffect } from "react";




const Completed = ({ todo }) => {
    useEffect(()=>{
        AOS.init({duration: "3000"})
    },[])
    return (

        <div data-aos="fade-down" className=" border-2 py-1 px-3 mb-1 rounded-lg shadow-md flex items-start justify-between">
            <div>
                <p> {todo.title}</p>
                <p className="text-xs"> {todo.desc}</p>
                <div className="badge badge-warning text-xs">
                   {todo.taskPriority}
                </div>
                <p className="text-xs">Deadline: {todo.taskDeadline.split("T")[0]}</p>
            </div>
            <div>
                <MdVerifiedUser className="text-xl text-green-300" />
            </div>
        </div>

    );
};

export default Completed;