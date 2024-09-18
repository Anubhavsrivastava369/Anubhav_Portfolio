import React from 'react'
import './Services.css'
import theme_img from './assets/nav_underline.svg'
import services_data from './assets/services_data.js'
import arrow_icon from './assets/arrow_icon.svg'

const Services = () => {
  return (
    <div id='service' className='services'>
        <div className="services-title">
            <h1>My Services</h1>
            <img src={theme_img} alt=''/>
        </div>      
        <div className="services-container">
           {services_data.map((service,index)=>{
                  return <div key={index} className="services-format">
                         <h3>{service.s_no}</h3>
                         <h2>{service.s_name}</h2>
                         <p>{service.s_desc}</p>
                         <div className="services-readmore">
                            <p>Read-More</p>
                            <img src={arrow_icon} alt="" />
                         </div>
                  </div>
           })}
        </div>
    </div>
  )
}

export default Services
