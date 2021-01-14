import React from 'react';
import '../Styles/Navigation.css';
import '../Styles/Utilities.css';

const Navigation = () => {
    return (
        <nav role='navigation'>
            <div id="menuToggle">
                <input type="checkbox" />
                <span></span>
                <span></span>
                <span></span>
                <ul id="menu">
                    <li><a href="#">Go top</a></li>
                    <li><a href="#timelineSection">TimeLine</a></li>
                    <li><a href="#skillsSection">Skills</a></li>
                    <li><a href="#projectSection">Projects</a></li>
                    <li><a href="#certificationsSection">Certifications</a></li>
                    <li><a href="#lab_social_icon_footer">Contact</a></li>
                </ul>
            </div>
        </nav>
    )
}

export default Navigation;