import { Outlet } from "react-router-dom"
import Navbar from "../Page/Navbar/Navbar"
import React, { useState, useEffect, useRef } from 'react'
import BIRDS from 'vanta/dist/vanta.birds.min'

function Main() {

    const [vantaEffect, setVantaEffect] = useState(null)
    const myRef = useRef(null)
    useEffect(() => {
        if (!vantaEffect) {
            setVantaEffect(BIRDS({
                el: myRef.current
            }))
        }
        return () => {
            if (vantaEffect) vantaEffect.destroy()
        }
    }, [vantaEffect])
    return (
        <div className="container max-auto" ref={myRef}>
            <Navbar></Navbar>
            <Outlet></Outlet>
        </div>
    )
}

export default Main