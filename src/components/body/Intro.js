import React from 'react';
import personImage from '../../assets/logo2.jpg'; 
import './Intro.css';

const Intro1 = () => {
  return (
    <div className='introo'>
    <div className='bb'>
      <section id="intro">
        <div className="introContent">
          <div className="textContent">
            <span className="hello">Hello,</span>
            <span className="introtext">
              I’m <span className="introname">Neeraj</span>
            </span>
            <span className="role">Website Designer</span>
            <p className="intropara">
              I am a skilled and passionate front-end developer, focused on creating visually appealing and user-friendly websites. Let's build something great together.
            </p>
            <button className="btn">
              <img src="logo3.png" alt="button img" className="btn-icon" />Hire Me
            </button>
          </div>
          
        </div>
      </section>
      <img src={personImage} alt="Profile" className="profileImage" />
    </div>
    </div> 
  );
};

export default Intro1;
