import AOS from 'aos';
import 'aos/dist/aos.css';
import { useEffect } from 'react';
import "./About.css"
import myimage from "/my-image.jpg"
import { FaBookOpenReader } from "react-icons/fa6";
import { MdFileDownload } from "react-icons/md";
import { FaBusinessTime } from "react-icons/fa";
import Resume from '/MD HABIBUR RAHMAN-MERN STACK DEVELOPER.pdf';
import CV from '/Md-Habibur-Rahman-CV.pdf';
import Title from '../../Components/Title';


function About() {
    useEffect(() => {
        AOS.init()
    }, [])
    // console.log(CV);
    return (

        <section data-aos="fade-down"

            data-aos-duration="2000"
            className=" container mx-auto   ">

            <Title name={"AboutMe"}></Title>
            <div className='flex justify-around gap-5 flex-wrap lg:my-12 my-5'>
                <div data-aos="fade-right"
                    data-aos-easing="ease-in-sine"
                    data-aos-delay="1000"
                    data-aos-duration="3000" className=''>
                    <img src={myimage} id='myimage2' className='lg:w-80 md:w-72 w-60' alt="" />

                </div>
                <div data-aos="fade-right"
                    data-aos-easing="ease-in-sine"
                    data-aos-delay="1000"
                    data-aos-duration="3000" className='lg:text-start  text-center py-2 text-white my-auto'>
                    <h1 className='md:text-5xl text-2xl italic text-center font-semibold'>Personal InFo</h1>
                    <hr className='w-3/4 mx-auto border-2 mt-1 rounded-xl' />
                    <div className='mt-5'>
                        <h1 className='lg:text-2xl text-xl mb-2'><span className='font-semibold'>Name: </span>Md Habibur Rahman</h1>
                        <h1 className='lg:text-2xl text-xl mb-2'><span className='font-semibold'>Occupation: </span>Student</h1>

                        <h1 className='lg:text-2xl text-xl mb-2'><span className='font-semibold'>Nationality: </span>Bangladeshi</h1>
                        <h1 className='lg:text-2xl text-xl mb-2'><span className='font-semibold'>Language: </span>Bangla, English, Hindi</h1>
                        <div className='flex justify-around items-center gap-5'>
                            <div>
                                <div className='lg:w-full  w-fit mx-auto  '>
                                    <a href={Resume} download={`MD-Habibur-Rahman-Resume`} rel="MD-Habibur-Rahman-Resume">
                                        <button className='button z-40 flex gap-1 mt-5'>
                                            <span className="button-content text-lg  my-auto">Download Resume</span>
                                            <span><MdFileDownload className=' root text-2xl top-3'></MdFileDownload></span>
                                        </button>
                                    </a>

                                </div>
                            </div>
                            <div>
                                <div className='lg:w-full  w-fit mx-auto  '>
                                    <a href={CV} download={`MD-Habibur-Rahman-CV`} rel="MD-Habibur-Rahman-CV">
                                        <button className='button z-40 flex gap-1 mt-5'>
                                            <span className="button-content text-lg  my-auto">Download CV</span>
                                            <span><MdFileDownload className=' root text-2xl top-3'></MdFileDownload></span>
                                        </button>
                                    </a>

                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </div>

            {/*//* Skill section */}

            <div className='text-white lg:my-12 my-6'>
                <h1 className='text-4xl font-semibold text-center '>My <span className='text-blue-800'>Skills</span></h1>
                <hr className='w-1/3 text-center mx-auto border-2 my-6' />

                <div className='flex flex-wrap gap-7  justify-around'>
                    <div data-aos="fade-right"
                        data-aos-easing="ease-in-sine"
                        data-aos-delay="500"
                        data-aos-duration="1200" className='boxdiv border w-60  p-3 text-lg rounded-xl'>
                        <h1 className='text-xl font-semibold'>Front-End Developer</h1>
                        <p>* HTML</p>
                        <p>* CSS</p>
                        <p>* JavaScript</p>

                    </div>
                    <div data-aos="fade-right"
                        data-aos-easing="ease-in-sine"
                        data-aos-delay="600"
                        data-aos-duration="1200" className='boxdiv border w-60 p-3 text-lg rounded-xl'>
                        <h1 className='text-xl font-semibold'>MERN Stack Developer</h1>
                        <p>* React</p>
                        <p>* Node.js</p>
                        <p>* Express.js</p>
                        <p>* MongoDB</p>
                    </div>
                    <div data-aos="fade-right"
                        data-aos-easing="ease-in-sine"
                        data-aos-delay="700"
                        data-aos-duration="1200" className='boxdiv border w-60  p-3 text-lg  rounded-xl'>
                        <h1 className='text-xl font-semibold'>FrameWork</h1>
                        <p>* Material-UI</p>
                        <p>* Bootstrap</p>
                        <p>* Tailwind</p>
                        <p>* Firebase</p>
                        <p>* Aceternity UI</p>
                    </div>
                </div>
            </div>

            {/* // Experience & Education section*/}
            <div className='text-white'>
                <h1 className='md:text-4xl text-2xl text-center font-semibold my-5 text-white'>Experience & <span className='text-blue-800'>Education</span></h1>
                <div className='flex flex-wrap py-5 justify-around'>

                    <div data-aos="fade-right"

                        data-aos-easing="ease-in-sine"
                        data-aos-delay="500"
                        data-aos-duration="1200" className='lg:w-2/5 w-full md:mx-7 mx-3 space-y-5'>
                        <div>
                            <h1 className='text-4xl  text-black  font-bold py-5'>Professional Courses</h1>
                        </div>
                        <div className='flex gap-10 '>
                            <FaBusinessTime className='text-3xl z-40 bg-blue-800 text-white p-1 rounded-full'></FaBusinessTime>
                            <hr className='border opacity-15 h-20 -ml-14' />
                            <div className='text-lg'>
                                <h1>MERN Stack Developer<span>Programming Hero</span></h1>
                                <span>Year: 2023</span>
                            </div>
                        </div>
                        <div className='flex gap-10 '>
                            <FaBusinessTime className='text-3xl z-40 bg-blue-800 text-white p-1 rounded-full'></FaBusinessTime>
                            <hr className='border opacity-15 h-20 -ml-14' />
                            <div className='text-lg'>
                                <h1>Web Design<span>Bd Calling Ltd.</span></h1>
                                <p>Year: 2023</p>

                            </div>
                        </div>
                    </div>
                    <hr className=' lg:flex hidden h-auto border border-blue-700' />
                    <div data-aos="fade-right"

                        data-aos-easing="ease-in-sine"
                        data-aos-delay="600"
                        data-aos-duration="1200" className='space-y-5 w-full md:mx-7 mx-3 lg:w-2/5'>
                        <div>
                            <h1 className='text-4xl  text-black  font-bold py-5'>Academic Courses</h1>
                        </div>
                        <div className='flex gap-10'>
                            <FaBookOpenReader className='text-3xl z-40 bg-blue-800 text-white p-1 rounded-full'></FaBookOpenReader>
                            <hr className='border opacity-15 h-20 -ml-14' />
                            <div className='text-lg'>
                                <h1>Diploma Computer Science and Engineering </h1>
                                <span>Year: 2020-Present,</span><span>Rangpur Polytechnic Institute Rangpur</span>

                            </div>
                        </div>
                        <div className='flex gap-10 '>
                            <FaBookOpenReader className='text-3xl z-40 bg-blue-800 text-white p-1 rounded-full'></FaBookOpenReader>
                            <hr className='border opacity-15 h-20 -ml-14' />
                            <div className='text-lg'>
                                <h1>Dhakil</h1>
                                <span>Year: 2020, </span> <span> Board: Madrasha, </span> <span> Result: 4.83</span>
                            </div>
                        </div>
                        <div className='flex gap-10 '>
                            <FaBookOpenReader className='text-3xl z-40 bg-blue-800 text-white p-1 rounded-full'></FaBookOpenReader>
                            <hr className='border opacity-15 h-20 -ml-14' />
                            <div className='text-lg'>
                                <h1> Presentation & Public Speaking</h1>
                                <span>Year: 2023, 10 Minute School</span>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </section>
    );
};

export default About