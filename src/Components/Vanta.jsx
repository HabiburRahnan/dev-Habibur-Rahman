import React, { useState, useEffect, useRef } from 'react'
import BIRDS from 'vanta/dist/vanta.waves.min'

const Vanta = ({ children }) => {
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
    return <div className='min-h-screen w-full' ref={myRef}>
        {children}
    </div>
}
export default Vanta;