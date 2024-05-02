import React from 'react'
import './About.css'
import about_img from '../../assets/about.png'
import play_icon from '../../assets/play-icon.png'
const About = () => {
    return (
        <div className='about'>
            <div className="about-left">
            <img src={about_img} alt="" className='about-img' />
            <img src={play_icon} alt="" className='play-icon' />
            </div>
            <div className="about-right">
                <h3>ABOUT UNIVERSITY</h3>
                <h2>Nurturing Tomorrow's Leaders Today</h2>
                <p>Emark on a transformative education programs. Our cutting-edge curriculm is designed to empower student with the knowladge skill, and experiences needed to excel in the dynamic field of education</p>
            </div>

        </div>
    )
}

export default About
