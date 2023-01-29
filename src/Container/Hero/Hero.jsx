import React from 'react'
import './Hero.css'
import HeroImg from '../../Assets/Hero.png'
import Bubble1 from '../../Assets/Ellipse-24.png'
import Bubble2 from '../../Assets/bubble-2.png'
import { Link } from 'react-router-dom'
import {AiOutlineSearch} from 'react-icons/ai'
const Hero = () => {
  return (
    <div className='Hero-section'>
       <div className='input-box'>
          <div className='field'>
             <AiOutlineSearch className='search-icon'/>
             <input 
              type='search' 
              placeholder='Search a Term | Topic'
            />
          </div>
       </div>
       <div className='hero-parts'>
          <img className= 'bubble bubble-2' src={Bubble2} alt= 'bubble bubble'/>  
          <img className='bubble bubble-1' src={Bubble1} alt='bubble'/>
          <div className='left-hero'>
             <Link className='claim' href='#'>claim Link Free Quote</Link>
             <h1><span className='underlined'>Get started</span> on fulfilling 
                 your Dubai or UAE 
             dream</h1>
             <div className='other-hero'>
                <Link className='com' to='/'>UAE & Offshore Company</Link>
             <p className='hero-para'>We provide you with information about UAE or 
                  Offshore Company Registration & help you 
                  setup your company with a bank account and 
             visas</p>
             <div className='btns'>
                <div className='btn active'>Start a Company</div>
                <div className='btn'>Renew a Company</div>
          </div>
             </div>
          </div>
          <div className='right-hero'>
            <img src={HeroImg} alt='hero-img'/>
          </div>
      </div> 
      <div className='hero-parts-mob'>
      <div className='left-hero-mob'>
         <Link className='claim' to='/'>claim a Free Quote</Link>
         <h1><span className='underlined'>Get started o</span>n fulfilling 
             your Dubai or UAE 
         dream</h1>
      </div>
      <div className='right-hero-mob'>
        <img src={HeroImg} alt='hero-img'/>
      </div>
      <div className='other-hero'>
      <Link className='com' to='/'>UAE & Offshore Company</Link>
   <p className='hero-para-mob'>We provide you with information about UAE or 
        Offshore Company Registration & help you 
        setup your company with a bank account and 
   visas</p>
   <div className='btns'>
      <div className='btn active'>Start a Company</div>
      <div className='btn'>Renew a Company</div>
</div>
   </div>
  </div> 
    </div>
  )
}

export default Hero