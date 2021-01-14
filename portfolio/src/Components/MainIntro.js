import React from 'react';
import '../Styles/MainIntro.css';

const MainIntro = () => {
    return (
        <section id="main-intro" class="s1">
        
            <div class="tour">
                <button id="takeatour" onclick="startShow()">Take a Tour</button>
            </div>

            <div className="main-container">
                <div class="greeting-wrapper">
                    <h1>Hi, I'm Akshay Relekar</h1>
                </div>
                <div class="intro-wrapper">
                    <div id="getnav" class="nav-wrapper">
                        <div class="dots-wrapper">
                            <a href="#"><div id="close" class="browser-dots class-1"></div></a>
                            <div id="minimize" class="browser-dots"></div>
                            <div id="maximize" class="browser-dots"></div>
                        </div>
                        <ul id="navigation">
                            <li><a href="#timelineSection">TimeLine</a></li>
                            <li><a href="#skillsSection">Skills</a></li>
                            <li><a href="#projectSection">Projects</a></li>
                            <li><a href="#certificationsSection">Certifications</a></li>
                            <li><a href="#lab_social_icon_footer">Contact</a></li>
                        </ul>
                    </div>

                    <div class="left-column">
                        <div class="dp-wrapper">
                            <img src="../Images/circle-cropped_1.png" alt="Profile Picture" />
                            <br />
                            <a target="_blank" href="./Resume/Resume_AkshayR.pdf"><button><label>Download Resume</label></button></a>
                        </div>
                        <div id="theme-options-wrapper">
                            <div data-mode="dark" id="dark" class="theme-dot"></div>
                            <div data-mode="color" id="color" class="theme-dot"></div>
                        </div>
                        <p class="message">Personalize your Experience by choosing the color</p>
                        <p class="message-note">*Theme will be saved for your next visit</p>
                    </div>
                    <div class="right-column">
                        <div class="preview-shadow">
                            <div id="preview">
                                <div id="corner-tl" class="corner"></div>
                                <div id="corner-tr" class="corner"></div>
                                <h3>What do I offer?</h3>
                                <p id="aboutMe">
                                    "Creative" yet simple solutions on Web, Mobile, XR and Gaming platforms 
                                </p>
                                    <div class="fab" id="fab-getInfo">
                                        <i class="material-icons" id="open-moreAboutMe" class="open-button">info</i>
                                    </div>
                                <div id="corner-br" class="corner"></div>
                                <div id="corner-bl" class="corner"></div>
                            </div>
                        </div>
                    </div>

                </div>
            </div>
        </section>
    )
}

export default MainIntro;