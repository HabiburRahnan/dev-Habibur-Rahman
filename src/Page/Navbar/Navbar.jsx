import React, { useState } from 'react';
import { NavLink } from 'react-router-dom';
import { IoHome } from "react-icons/io5";
import { FaProjectDiagram } from "react-icons/fa";
import { HiOutlineMailOpen } from "react-icons/hi";
import { CgProfile } from "react-icons/cg";
import "./Navbar.css"

const Navbar = () => {
    return (
        <section className='fixed top-1/3 z-50  end-0'>
            <div className=''>
                <ul className='flex flex-col gap-2'>
                    <NavLink to={'/'}>
                        <li id='home' className="lihover flex text-xl text-white  p-2 rounded-full border-2 gap-2 text-end">
                            <IoHome className="text-2xl" ></IoHome>
                        </li>
                    </NavLink>
                    <NavLink to={'/about'}>
                        <li id='about' className="lihover flex text-xl justify-end  text-white  p-2 rounded-full border-2 gap-2"><CgProfile className="text-2xl"></CgProfile>
                        </li>
                    </NavLink>
                    <NavLink to={'/projects'}>
                        <li id='project' className="lihover flex text-xl  text-white  p-2 rounded-full border-2 gap-2"> <FaProjectDiagram className="text-2xl"></FaProjectDiagram>
                        </li>
                    </NavLink>
                    <NavLink to={'/contact'}>
                        <li id='contact' className="lihover flex text-xl text-white p-2 rounded-full border-2 gap-2"><HiOutlineMailOpen className="text-2xl"></HiOutlineMailOpen>
                        </li>
                    </NavLink>
                </ul>

            </div>
        </section>
    );
};

export default Navbar;