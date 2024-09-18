import React from 'react'
import './Footer.css'
import theme_img from './assets/nav_underline.svg'
import user_icon from './assets/user_icon.svg'

const Footer = () => {
    const onSubmit = async (event) => {
        event.preventDefault();
        const formData = new FormData(event.target);
    
        formData.append("access_key", "8fe8cd2e-cce7-41d2-afa5-14d1d2c3bc9d");
    
        const response = await fetch("https://api.web3forms.com/submit", {
          method: "POST",
          body: formData
        });
    
        const data = await response.json();
    
        if (data.success) {
          alert("Subscribe Successufull");
          event.target.reset();
        } else {
          console.log("Error", data);
        }
      };

  return (
    <div className='footer'>
       <div className="footer-top">
            <div className="footer-top-left">
                <h2>Anubhav</h2>
                <img src={theme_img} alt="" />
                <p>I am Fullstack Developer from,India with 1yr+ of Experience</p>
            </div>
       
        <div  className="footer-top-right">
            <form onSubmit={onSubmit} className="footer-email-input">
                <img src={user_icon} alt="" />
                <input type="text" name='email' placeholder='Enter your email'/>
                <button className="footer-subscribe">Subscribe</button>
            </form>
            
        </div>
       </div>
       <hr />
       <div className="footer-bottom">
        <p className="footer-bootom-left">&copy; 2024 Anubhav Srivastava,All rights reserved.</p>
        <div className="footer-bottom-right">
            <p>Term of Services</p>
            <p>Privacy Policy</p>
            <p>Connect with me</p>
        </div>
       </div>

    </div>
  )
}

export default Footer
