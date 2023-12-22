import  { useEffect } from 'react';
import Container from '../Container/Container';
import { BsBank } from "react-icons/bs";
import { GrUserWorker } from "react-icons/gr";
import Marquee from "react-fast-marquee";
import { MdCorporateFare } from "react-icons/md";
import { GoLaw } from "react-icons/go";
import AOS from "aos";
import "aos/dist/aos.css"


const AboutSc = () => {
    useEffect(() => {
        AOS.init({ duration: "3000" })
    }, [])
    return (
        <div className='bg-[#F5F2FF] py-20'>
            <Container>
                <h1 data-aos="fade-up" className='text-xl md:text-3xl font-semibold mb-5 md:mb-20'>Type of professional Uses <span className='text-[#544dc9]'>Tasker</span></h1>
                <div data-aos="fade-up">
                    <Marquee speed="80" pauseOnHover="true">
                        <div className='flex gap-16 md:gap-32'>
                            <div className='flex flex-col w-[100px] md:w-[200px]  justify-center gap-3 items-center border-2 p-3 md:p-6 rounded-md shadow-lg hover:shadow-2xl'>
                                <BsBank className='text-xl md:text-5xl text-[#706bc4]' />
                                <h1 className='text-xl md:text-4xl'>Banker</h1>
                            </div>
                            <div className='flex flex-col w-[100px] md:w-[200px]  justify-center gap-3 items-center border-2 p-3 md:p-6 rounded-md shadow-lg hover:shadow-2xl'>
                                <GrUserWorker className='text-xl md:text-5xl text-[#706bc4]' />
                                <h1 className='text-xl md:text-4xl'>Developer</h1>
                            </div>
                            <div className='flex flex-col w-[100px] md:w-[200px]  justify-center gap-3 items-center border-2 p-3 md:p-6 rounded-md shadow-lg hover:shadow-2xl'>
                                <MdCorporateFare className='text-xl md:text-5xl text-[#706bc4]' />
                                <h1 className='text-xl md:text-4xl'>Corporate </h1>
                            </div>
                            <div className='flex flex-col w-[100px] md:w-[200px]  justify-center gap-3 items-center border-2 p-3 md:p-6 rounded-md shadow-lg hover:shadow-2xl'>
                                <GoLaw className='text-xl md:text-5xl text-[#706bc4]' />
                                <h1 className='text-xl md:text-4xl'>Lawyer</h1>
                            </div>
                        </div>
                    </Marquee>
                </div>
            </Container>
        </div>
    );
};

export default AboutSc;