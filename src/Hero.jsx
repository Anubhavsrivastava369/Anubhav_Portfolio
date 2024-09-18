import React from 'react'
import profile from './assets/profile.jpg'
import './Hero.css'
import AnchorLink from 'react-anchor-link-smooth-scroll'

const Hero = () => {
  return (
    <div id='home' className='hero'>
         <img src={profile} alt="UserPhot" className='UserImg' />
         <h1>I'm <span> Anubhav Srivastava</span>, FullStack Developer based in Lucknow,India</h1>
         <p>I am a FullStack web Developer in India,Lucknow with 1 year of experience on position Intern at Evostra Ventures , Zidio and codeSoft.</p>
         <div className="hero-action">
            <div className="hero-connect"><AnchorLink className='anchor-Link' offset={20} href='#contact'><p onClick={() => { setMenu('contact') }}>Contact</p></AnchorLink></div>
            <div className="hero-resume">My resume</div>
         </div>
    </div>
  )
}

export default Hero
