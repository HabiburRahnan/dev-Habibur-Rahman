import { Outlet } from "react-router-dom"
import Navbar from "../Page/Navbar/Navbar"
import Vanta from "../Components/Vanta"

function Main() {


    return (

        <div className="container max-auto">

            <Vanta>
                <Navbar></Navbar>
                <Outlet></Outlet>
            </Vanta>

        </div>
    )
}

export default Main