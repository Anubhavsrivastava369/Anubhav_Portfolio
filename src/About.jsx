import React from 'react'
import theme_img from './assets/nav_underline.svg'
import './About.css'
import profile_photo from './assets/profile.jpg'

const About = () => {
    return (
        <div>
            <div id='about' className="about">
                <div className="about-title">
                    <h1>About Me</h1>
                    <img src={theme_img} alt="" />
                </div>
                <div className="about-section">
                    <div className="about-left">
                        <img src={profile_photo} alt="photo" />
                    </div>
                    <div className="about-right">
                        <div className="about-para">
                            <p>I am an experience Fullstack web Developer with over a decade of professional expertise in the field. Throughout my career, I have had the privilge of collaborating with prestigious organization,contributing to their success growth.
                            </p>
                            <br />
                            <p>
                                My passion for fullStack development is not only reflected in my extensive experience but also int the enthusiasm and dedication I bring to each project.
                            </p>
                        </div>
                        <div className="about-skills">
                            <div className="about-skill"><p>HTML5/CSS3</p> <hr style={{ width: "80%" }} /></div>
                            <div className="about-skill"><p>JAVASCRIPT</p> <hr style={{ width: "60%" }} /></div>
                            <div className="about-skill"><p>REACT JS</p> <hr style={{ width: "40%" }} /></div>
                            <div className="about-skill"><p>DJANGO</p> <hr style={{ width: "20%" }} /></div>
                            <div className="about-skill"><p>PYTHON</p> <hr style={{ width: "70%" }} /></div>
                            <div className="about-skill"><p>C/C++</p> <hr style={{ width: "90%" }} /></div>
                            <div className="about-skill"><p>CORE DSA</p> <hr style={{ width: "70%" }} /></div>
                        </div>
                    </div>
                </div>
                < div className="about-achievements">
                    <div className="about-achievement">
                        <h1>1.5+</h1>
                        <p>YEAR OF EXPERIENCE</p>
                    </div>
                    <hr />
                    <div className="about-achievement">
                        <h1>10+</h1>
                        <p>PROJECTS COMPLETED</p>
                    </div>
                    <hr />
                    <div className="about-achievement">
                        <h1>8.6 cgpa</h1>
                        <p>ACADEMIC GRADE</p>
                    </div>
                </div>
            </div>

        </div>
    )
}

export default About
