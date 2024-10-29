import React from "react";
import html from '../../assets/logo4.png';
import css from '../../assets/logo5.jpg';
import js from '../../assets/logo6.jpg';
import  './Skills.css'

function Skill1(){
    return(
        <div id='aboutt'>
            <secton id='skills'>
                <span className="skilltitle">What I do</span>
                <span className="skilldes">T am a skilled and passionated web designer  with experence</span>
                <div className="skillbar">
                    <img src={html} alt="html"className="skillbarimg"></img>
                    <div className="skillbartext">
                        <h2>HTML</h2>
                        <p></p>
                    </div>
                </div>
                <div className="skillbar">
                    <img src={css} alt="css"className="skillbarimg"></img>
                    <div className="skillbartext">
                        <h2>CSS</h2>
                        <p></p>
                    </div>
                </div>
                <div className="skillbar">
                    <img src={js} alt="js"className="skillbarimg"></img>
                    <div className="skillbartext">
                        <h2>JAVA SCRIPT</h2>
                        <p></p>
                    </div>
                </div>
            </secton>
        </div>
    )
}
export default Skill1;