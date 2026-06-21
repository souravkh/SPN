import './Navbar.css'
import { useState } from "react";

function Navbar(){
    const [menuOpen, setMenuOpen] = useState<boolean>(false);

    const handleLinkClick = () => {
        setMenuOpen(false);
    };

    return (
        <div className="navbar">
            <div className='logo'>
                <h4>SPANDAN</h4>
            </div>

           <div className="hamburger" onClick={() => setMenuOpen(!menuOpen)}>
            {menuOpen ? "✕" : "☰"}
            </div>
            <ul className={`nav-links ${menuOpen ? "active" : ""}`}>
                <li><a href="#home" onClick={handleLinkClick}>Home</a></li>
                <li><a href="#about" onClick={handleLinkClick}>About</a></li>
                <li><a href="#projects" onClick={handleLinkClick}>Projects</a></li>
                <li><a href="#milestone" onClick={handleLinkClick}>Milestone</a></li>
                <li><a href="#testimonial" onClick={handleLinkClick}>Testimonial</a></li>
                <li><a href="#team" onClick={handleLinkClick}>Team</a></li>
                <li><a href="mailto:contact@spandhan.org?subject=I%20want%20to%20volunteer" className="nav-cta" onClick={handleLinkClick}>Volunteer</a></li>
            </ul>
        </div>
    )
}

export default Navbar;