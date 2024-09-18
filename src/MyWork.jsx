import React from 'react'
import './MyWork.css'
import theme_img from './assets/nav_underline.svg'
import amazon from './assets/amazon_clone.png'
import brandPage from './assets/brandpage.png'
import calculator from './assets/calculator.png'
import  passGenerator from './assets/pass_generator.png'
import  tic from './assets/tic_tac_toe.png'
import  todo from './assets/to_do_list.png'
import arrow_icon from './assets/arrow_icon.svg'


const MyWork = () => {
  return (
    <div id='portfolio' className='mywork'>
       <div className="mywork-title">
          <h1>My Latest Work</h1>
          <img src={theme_img} alt="" />
       </div>
       <div className="mywork-container">
          <img src={amazon} alt="" />
          <img src={brandPage} alt="" />
          <img src={calculator} alt="" />
          <img src={passGenerator} alt="" />
          <img src={tic} alt="" />
          <img src={todo} alt="" />
       </div>
       <div className="mywork-showmore">
         <h2>Show more</h2>
         <img src={arrow_icon} alt="" />
       </div>
    </div>
  )
}

export default MyWork
