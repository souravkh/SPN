import './Navbar.css'
import { useState } from "react";


function Navbar(){
    const [menuOpen, setMenuOpen] = useState<Boolean>(false);
    return (
        <>
        <div className='navbar'>
            <div className='logo'>
                <h4>
                    SPANDAN
                </h4>
            </div>

           <div className="hamburger" onClick={() => setMenuOpen(!menuOpen)}>
            ☰
            </div>   
            <ul className={`nav-links ${menuOpen ? "active" : ""}`}>
                <li><a href="#">Home</a></li>
                <li><a href="#">About</a></li>
                <li><a href="#">Milestone</a></li>
                <li><a href="#">Testimonial</a></li>
                <li><a href="#">Team</a></li>
                <li><a href="#">Volunteer</a></li>
            </ul>   
        </div>
        </>
    )
}

export default Navbar;