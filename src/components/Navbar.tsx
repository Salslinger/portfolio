import { useState } from "react";

import { Link, NavLink } from "react-router-dom";

import "./Navbar.css"
import { House } from "lucide-react";

export const Navbar = () => {
    const [menuOpen, setMenuOpen] = useState(false)

     return ( 
        <nav className="sticky top-0 flex justify-between items-center bg-[#1A1717]">
            <Link to="/" className="text-white text-xl font-bold m-4 no-underline">
            <House />
            </Link>
            <div className="menu" onClick={() => {
                setMenuOpen(!menuOpen);
            }}>
                <span></span>
                <span></span>
                <span></span>
            </div>
            <div className="flex justify-center w-full">
                <ul className={`flex list-none ${menuOpen ? "open" : ""}`}>   
                    <li>
                        <NavLink to="/about">About</NavLink>
                    </li>
                    <li>
                        <NavLink to="/projects">Project</NavLink>
                    </li>
                    <li>
                        <NavLink to="/music">Music</NavLink>
                    </li>
                    <li>
                        <NavLink to="/contact">Contact</NavLink>
                    </li>
                </ul>
            </div>

        </nav>
    );
}