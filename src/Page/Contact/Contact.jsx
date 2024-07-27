
import AOS from 'aos';
import 'aos/dist/aos.css';
import { useEffect, } from 'react';
import "./Contact.css"
import facebook from "/icons8-facebook-48.png"
import linkedin from "/icons8-linkedin-48.png"
import whatsapp from "/icons8-whatsapp-48.png"
import github from "/icons8-github-50.png"
import Title from '../../Components/Title';


const Contact = () => {
    useEffect(() => {
        AOS.init()
    }, [])



    return (
        <section
            data-aos="fade-down"
            data-aos-duration="2000"
            className="pt-2 container mx-auto"
        >
            <Title name={"ContactMe"}></Title>
            <div className='flex flex-wrap justify-around'>
                <div className='lg:my-16 my-7 text-white lg:w-1/5 w-2/3 p-1'>
                    <h1 className='text-3xl font-bold uppercase mb-3'>Stay Connect with me</h1>
                    <p className='my-4'>Don't Shy to share your thoughts with me. Get in touch with me to discuss new projects, creative ideas, or opportunities. I always love to learn a new technique that helps me to grow up</p>
                    <div className='flex gap-4'>
                        <a href='https://www.facebook.com/profile.php?id=100047717885188' target='blank' >
                            <button className="facebook-button text-lg">
                                <img src={facebook} className="facebook-svgIcon" alt="" />
                            </button>
                        </a>
                        <a href='https://www.linkedin.com/in/habibur-rahman2005' target='blank' >
                            <button className="linkedin-button text-lg">
                                <img src={linkedin} className="linkedin-svgIcon" alt="" />
                            </button>
                        </a>
                        <a href='https://github.com/HabiburRahnan' target='blank' >
                            <button className="github-button text-lg">
                                <img src={github} className="github-svgIcon bg-gray-400 rounded-full" alt="" />
                            </button>
                        </a>
                        <a href='https://wa.me/1308102789' target='blank' >
                            <button className="whatsapp-button text-lg">
                                <img src={whatsapp} className="whatsapp-svgIcon" alt="" />
                            </button>
                        </a>
                    </div>
                </div>
                <div className=' lg:my-16 my-7 p-1 lg:w-2/5'>
                    <form>

                        <div className='flex flex-wrap lg:gap-0 gap-5 justify-between p-1'>
                            <input className=' lg:w-64 p-2 my-5 w-full rounded-3xl' placeholder='Your Name' type="text" name="user_name" />

                            <input className=' lg:w-64 w-full p-2 rounded-3xl' placeholder='Your Email' type="email" name="user_email" />
                        </div>
                        <br />
                        <textarea className=' w-full  h-36 p-2 rounded-3xl' placeholder='Your Message' name="message" />
                        <div>
                            <button  className='button z-40 flex gap-1 mt-5 border'>
                                <span className="button-content text-lg  my-auto">Send</span>

                            </button>
                        </div>

                    </form>
                </div>

            </div>
        </section>
    );
};

export default Contact;