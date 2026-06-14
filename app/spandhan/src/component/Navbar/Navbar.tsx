import './Navbar.css'

function Navbar(){
    return (
        <>
        <div className='navbar'>
            <div className='logo'>
                <h4>
                    SPANDHAN
                </h4>
            </div>
         <ul className="nav-links">
            <li>Home</li>
            <li>About</li>
            <li>Milestone</li>
            <li>Testimonial</li>
            <li>Team</li>
            <li>Volunteer</li>
         </ul>   
        </div>
        </>
    )
}

export default Navbar;