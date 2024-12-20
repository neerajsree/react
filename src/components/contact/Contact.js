import React from 'react';
import { FaPhoneAlt, FaEnvelope } from 'react-icons/fa';
import './Contact.css'; 
import logo8 from '../../assets/logo8.png';
import logo9 from '../../assets/logo7.png';
import logo10 from '../../assets/logo6.png';
import logo11 from '../../assets/logo9.png';
const Contact1 = () => {
  return (
    <div id='contactt'>
            
    <div className="introcontact">Contact</div>
                <hr className="line1"></hr>
                <hr className="line2"></hr>

                <div className="contactcontainer">
      <div className="contactinfo">
        <h1>Contact Me</h1>
        <p>Let's <span className="highlight">Connect</span> & <span className="highlight">Collaborate</span></p>
        
        <div className="contactdetails">
          <div className="contactitem">
            <FaPhoneAlt />
            <span>8589815454</span>
          </div>
          <div className="contactitem">
            

            <FaEnvelope />
            <span>neerajsree008@gmail.com</span>
          </div>
          <div className='logoo'>
          <a href ="https://www.linkedin.com/in/neeraj-s-s-320667333/">
          <div className='linked'><img src={logo8} alt='linked'/></div> </a> 
          <a href ="https://www.facebook.com/profile.php?id=100012058513982">
          <div className='face'><img src={logo9} alt='face'/></div> </a>
          <a href ="https://www.instagram.com/__.neerj.__/">
          <div className='insta'><img src={logo10} alt='insta'/></div> </a>
          <div className='git-size'>
          <a href ="https://github.com/neerajsree">
          <div className='git'><img src={logo11} alt='git'/></div> </a></div>
          
          </div>
          
          
        </div>
      </div>
     

      <div className="contactform">
        <input type="text" placeholder="Your name" />
        <div className="formrow">
          <input type="email" placeholder="Your Email" />
          <input type="number" placeholder="Your Number" />
        </div>
        <input type="" placeholder="Subject" />
        <textarea placeholder="Your Message"></textarea>
        <button type="button">Send Message</button>
      </div>
    </div> 
     
    
    
   </div> 
   
  );
};

export default Contact1;
