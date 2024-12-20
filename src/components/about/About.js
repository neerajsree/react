import React from "react";
import  './About.css';
import fig1 from '../../assets/logo3.png';
import fig2 from '../../assets/logo4 (1).png';
import fig3 from '../../assets/logo5.png';



function Skill1(){
    return(
        <div id='aboutt'>
            
<div className="introabout">About</div>
            <hr className="line1"></hr>
            <hr className="line2"></hr>
            <div className="aboutcontainer">
      

      <div className="skillsection">
        <div className="skill-icon">
          <img src={fig1} alt="Creative Thinking" />
        </div>
        <div className="skill-content">
          <h2>Creative Thinking</h2>
          <p>
            I approach challenges with fresh perspectives, always looking for innovative ideas to drive progress and inspire others.
          </p>
        </div>
      </div>

      <div className="skillsection">
        <div className="skill-icon">
          <img src={fig2} alt="Problem Solving " />
        </div>
        <div className="skill-content">
          <h2>Problem-Solving</h2>
          <p>
            I enjoy tackling complex situations, analyzing problems, and finding solutions that are both practical and sustainable.
          </p>
        </div>
      </div>

      <div className="skillsection">
        <div className="skill-icon">
          <img src={fig3} alt="Leadership" />
        </div>
        <div className="skill-content">
          <h2>Leadership</h2>
          <p>
            My leadership style focuses on motivating others and fostering collaboration to achieve shared goals with clarity and trust.
          </p>
        </div>
      </div>
    </div>
        




        </div>
            
    )
}
export default Skill1;