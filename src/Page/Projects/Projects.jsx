import project from "../../../public/projects.json"
import { useNavigate } from "react-router-dom";
import { useEffect, useState } from "react";
import AOS from 'aos';
import 'aos/dist/aos.css';
import { Helmet } from "react-helmet-async";
import Title from "../../Components/Title";
const Project = () => {

    const [array, setArray] = useState(project)
    console.log(project);
    useEffect(() => {
        AOS.init()
    }, [])
    const handleSort = (e) => {
        e.preventDefault()
        const value = e.target.value
        console.log(value);
        if (value == "newest") {
            const sort = project.sort((a, b) => new Date(b.date) - new Date(a.date))
            console.log(sort);
            setArray([...sort])
        }
        if (value == "oldest") {
            const sort = project.sort((a, b) => new Date(a.date) - new Date(b.date))
            console.log(sort);
            setArray([...sort])
        }
    }

    return (
        <section data-aos="fade-down"
            data-aos-duration="2000"
            className="h-full">

            <div>
               <Title name={"Projects"}></Title>
            </div>
            <div className="py-10">
                <div className=" flex justify-end ">
                    <select onChange={handleSort} className="text-xl p-1 mr-10 rounded-lg" name="" id="">
                        <option value="default">Default</option>
                        <option value="newest">Newest</option>
                        <option value="oldest">Oldest</option>
                    </select>
                </div>
                <div>
                    <div className="flex  flex-wrap gap-5 justify-center lg:my-8 my-5">
                        {
                            array.map((element, idx) => <Card key={idx} id={idx} card={element} ></Card>)
                        }
                    </div>
                </div>
            </div>
        </section>
    );
};

const Card = ({ card, id }) => {
    const navigate = useNavigate()
    const handleproject = () => {
        navigate(`/projects/${card.projectNo}`)
    }
    return (
        <div data-aos="fade-right"
            // data-aos-offset="500"
            data-aos-easing="ease-in-sine"
            data-aos-delay={`${id * 200 + 1000}`}
            data-aos-duration="1500" className="w-96 text-white  flex flex-col border p-3 rounded-xl lg:m-0 mx-3  ">

            <img id="projectimage" className="w-96 h-56 object-top object-cover" src={card.image} alt="" />
            <h1 className="my-2"><span className="font-semibold ">Name: </span>{card.name}</h1>
            <h1><span>Note: </span>{card.note}</h1>
            <div className="mt-auto">
                <button onClick={handleproject} className="button w-full mt-3">
                    <span className="button-content">Details</span>
                </button>
            </div>
        </div>
    )

}

export default Project;