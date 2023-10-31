import React from "react";
import gitIcon from '../../assets/gitHubIcon.png';
import linkedInIcon from '../../assets/linkedInIcon.png';
import stackOverFlowIcon from '../../assets/stackoverflowIcon.png';
import './footer.css';

export default function Footer() {
    return (
        <footer id="footer">
            <div>
                <a href="https://github.com/jenstem?tab=repositories">
                    <img src={gitIcon} alt="GitHub" className="icon"></img>
                </a>
                <a href="https://www.linkedin.com/in/jennifer-s-913445265/">
                    <img src={linkedInIcon} alt="LinkedIn" className="icon"></img>
                </a>
                <a href="https://stackoverflow.com/users/22820388/astranova">
                    <img src={stackOverFlowIcon} alt="StackOverflow" className="icon2"></img>
                </a>
            </div>
        </footer>
    );
}