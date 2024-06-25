import { faBars } from '@fortawesome/free-solid-svg-icons';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { useState } from 'react'
import { Link, Outlet } from 'react-router-dom';
import './router.css'

const ReactRouter = () => {
    const [navbar, setNavbar] = useState(false);
    const handleClick = () => {
        setNavbar((pre) => !pre);
    }
    return (
        <div className='router_cointainer'>
            <div onClick={handleClick}>
                <FontAwesomeIcon icon={faBars} />
            </div>
            <div className="page_container">
                <nav className={`navbar ${navbar ? "active" : " "}`}>
                    <ul>
                        <li ><Link to='/home'>Home</Link></li>
                        <li><Link to='/pricing'>pricing</Link> </li>
                        <li><Link to='/contect'>contect</Link></li>
                        <li><Link to='/about'>About us</Link></li>
                        <li><Link to='/cart'>Cart</Link></li>
                    </ul>
                </nav>
                <div className="page_wrapper">
                    <Outlet />
                </div>
       
            </div>
        </div>
    )
}

export default ReactRouter