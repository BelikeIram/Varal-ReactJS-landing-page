import React from 'react'
import Mission from './Mission'
import VdLogo from '../../Assets/vd.png'
import Data1 from './Data1'
import { Link } from 'react-router-dom'
const About = () => {
  return (
    <div className='About'>
      <div className='vd-link'>
         <Link to='/'>
           Watch the video about UAE or Offshore Company Registration
         </Link>
       <span className='vd-icon'>
          <img src={VdLogo} alt='video-icon'  />
       </span>
     </div>
    <Mission/>
    <section className='helping-section'>
    {Data1.map((data)=>{
       const {id,img,title,desc} = data;
      return <div key={id} className='helping'>
      <img src={img} alt='img'/>
      <div className='title'>{title}</div>
      <p className='desc'>{desc}</p>
      <Link className='start' to='/'>Get Started</Link>
    </div>
    })}
    </section>
    </div>
  )
}

export default About