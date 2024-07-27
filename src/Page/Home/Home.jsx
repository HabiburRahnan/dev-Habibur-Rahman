import { useEffect, } from "react"
import AOS from 'aos';
import 'aos/dist/aos.css';
import Title from "../../Components/Title"
import myimage from "/my-image.jpg"
import "./Home.css"

function Home() {

  useEffect(() => {
    AOS.init()
  }, [])

  return (
    <div className="pt-6 lg:pb-0 container mx-auto">
      <Title name={"Home"}></Title>

      <div className="flex h-full justify-around lg:gap-0 gap-2 flex-wrap overflow-hidden" >
        <div
          data-aos="fade-right"
          data-aos-easing="ease-in-sine"
          data-aos-delay="1000"
          data-aos-duration="3000"
          className="my-auto  " id="imagediv">

          <img id="image1" className=" lg:w-96 lg:h-96 md:w-80 md:h-80 w-64 h-64 rounded-full object-cover " src={myimage} alt="" />
        </div>
        <div
          data-aos="fade-left"
          data-aos-easing="ease-in-sine"
          data-aos-delay="1000"
          data-aos-duration="3000"
          className="lg:my-auto h-fit">
          <div>
            <p className="lg:text-6xl  md:text-5xl justify-center text-center  text-3xl mb-5 font-extrabold flex gap-2 text-white ml-6">
              I'm Md Habibur Rahman<span className="" id="zoom">.</span>
            </p>

          </div>
          <div className="lg:text-5xl italic lg:mx-auto md:mx-auto mx-auto md:text-4xl text-2xl font-extrabold  relative lg:w-11/12 md:w-2/3 w-9/12 pb-4">
            <p id="text-slide" className="">MERN STACK DEVELOPER</p><p id="field" className="">MERN STACK DEVELOPER</p>
          </div>

          <div className="lg:w-[700px] text-center   text-white  lg:text-lg md:text-lg text-base mx-1 my-5">
            <p className="p-2">Motivated Computer Science student with expertise in JavaScript, TypeScript, React JS, and Node.js. Eager to apply my skills in front-end and back-end development to contribute to innovative projects and grow professionally in a dynamic, collaborative environment.</p>
          </div>

        </div>
      </div>
    </div>
  )
}

export default Home