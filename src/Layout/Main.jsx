import { Outlet } from "react-router-dom"
import Navbar from "../Page/Navbar/Navbar"
import Vanta from "../Components/Vanta"
import { useEffect, useState } from "react";
function Main() {
    const [position, setPosition] = useState({ x: 0, y: 0 });

    useEffect(() => {
        const handleMouseMove = (event) => {
            setPosition({ x: event.clientX, y: event.clientY });
        };

        document.addEventListener('mousemove', handleMouseMove);

        return () => {
            document.removeEventListener('mousemove', handleMouseMove);
        };
    }, []);


    return (

        <div
            className="container max-auto">


            <Vanta>

                <Navbar></Navbar>
                <div className="container max-auto">
                    <Outlet></Outlet>

                </div>
            </Vanta>


        </div>
    )
}

export default Main