import React from 'react';
import './Navbar.css';
import logo1 from '../../assets/logo1.jpg';
import { Link } from 'react-scroll';

const Navbar1 = () => {
    return (
        <div>
            <nav className='navbar'>
                <img src={logo1} alt="logo" className='navbar-logo' />
                <div className='menu'>
                    <Link className='menuListItem'>Home</Link>
                    <Link  to='aboutt' className='menuListItem'>About</Link>
                    <Link className='menuListItem'>Education</Link>
                    <Link className='menuListItem'>contact</Link>
                    
                </div>
            </nav>
        </div>
    );
}

export default Navbar1;
