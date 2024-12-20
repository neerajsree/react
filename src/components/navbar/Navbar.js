import React from 'react';
import './Navbar.css';
import logo1 from '../../assets/logo1.jpg';


const Navbar1 = () => {
    return (
        <div >
            <nav className='navbar'>
                <img src={logo1} alt="logo" className='navbar-logo' />
                <div className='menu'>
                <a href='#intro' className='menuListItem'>Home</a>
                <a href='#aboutt' className='menuListItem'>About</a>
                <a href='#eduu' className='menuListItem'>Education</a>
                <a href='http://localhost:4200/'  className='menuListItem'>Goals</a>
                <a href='http://localhost:4200/#skill'  className='menuListItem'>Skill</a>
                
                   
                    
                    
                </div>
            </nav>
        </div>
    );
}

export default Navbar1;
