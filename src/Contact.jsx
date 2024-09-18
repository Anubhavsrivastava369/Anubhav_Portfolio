import React from 'react'
import './Contact.css'
import theme_img from './assets/nav_underline.svg'
import call_icon from './assets/call_icon.svg'
import mail_icon from './assets/mail_icon.svg'
import location_icon from './assets/location_icon.svg'


const Contact = () => {

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
        alert("Form Submitted Successfully");
        event.target.reset();
      } else {
        console.log("Error", data);
      }
    };
  return (
    <div id='contact' className='contact'>
        <div className="contact-title">
            <h2>Get in touch</h2>
            <img src={theme_img} alt="icon" />
        </div>
        <div className="contact-section">
            <div className="contact-left">
                <h1>Let's talk</h1>
                <hr />
                <p>I'm currently available to take on new projects,so feel free to send me a message about anything that you want to me to me work on.You can contact anytime</p>
                <div className="contact-details">
                    <div className="contact-detail"><img src={mail_icon} alt="" /><p>srivastavaanubhav369@gmail.com</p></div>
                    <div className="contact-detail"><img src={call_icon} alt="" /><p>+91-9695923684</p></div>
                    <div className="contact-detail"><img src={location_icon} alt="" /><p>Lucknow,India</p></div>
                </div>

            </div>
            <form onSubmit={onSubmit} className="contact-right">
                <label htmlFor="">Your Name</label>
                <input type="text" placeholder='Enter your name..' name='name' />
                <label htmlFor="">Your Email</label>
                <input type="text" placeholder='Enter your Email..' name='email' />
                <label htmlFor="">Write Your message</label>
                <textarea name="message" rows='4' placeholder='Enter Your message'></textarea>
                <button type='submit' className='contact-submit'>Submit now</button>
            </form>
        </div>
    </div>
  )
}

export default Contact
