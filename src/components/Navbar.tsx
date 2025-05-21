import { useState } from "react";
import { useNavigate } from "react-router-dom";

import { Link, NavLink } from "react-router-dom";

import "./Navbar.css"
import { House } from "lucide-react";

export const Navbar = () => {
    const [menuOpen, setMenuOpen] = useState(false);

    const navigate = useNavigate();

    const scrollToSectionInHome = (sectionId: string) => (
        e: React.MouseEvent<HTMLAnchorElement>
    ) => {
        e.preventDefault();
        navigate("/", { state: { scrollTo: sectionId } });
    };

     return ( 
        <nav className="sticky top-0 flex justify-between items-center bg-[#1A1717] z-50">
            <a className='text-white m-4' href="#about" onClick={scrollToSectionInHome("home")}>
                <House />
            </a>
            <div className="menu" onClick={() => {
                setMenuOpen(!menuOpen);
            }}>
                <span></span>
                <span></span>
                <span></span>
            </div>
            <div className="flex justify-end w-full lg:mr-10">
                <ul className={`flex list-none ${menuOpen ? "open" : ""}`}>   
                    <li>
                        <a href="#about" onClick={scrollToSectionInHome("about")}>About</a>
                    </li>
                    <li>
                        <a href="#about" onClick={scrollToSectionInHome("skills")}>Skills</a>
                    </li>
                    <li>
                        <a href="#about" onClick={scrollToSectionInHome("experience")}>Experience</a>
                    </li>
                    <li>
                        <a href="#about" onClick={scrollToSectionInHome("projects")}>Projects</a>
                    </li>
                    <li>
                        <NavLink to="/music">Music</NavLink>
                    </li>
                    <li>
                        <a href="#about" onClick={scrollToSectionInHome("home")}>Contact</a>
                    </li>
                </ul>
            </div>

        </nav>
    );
}