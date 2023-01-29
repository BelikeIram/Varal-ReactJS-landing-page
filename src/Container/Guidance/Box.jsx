import React from 'react'
import ArrowRight from '../../Assets/Vector.png'
import { Link } from 'react-router-dom'
const Box = (props) => {
  return (
    <div className='box'>
       <div className='img-container'>
           <img src={props.img} alt='img'/>
       </div>
       <div className='details'>
         <div className='title'>
            {props.title}
         </div>
         <div className='desc'>
            {props.desc}
         </div>
         <div className='link'>
           <Link to='/'>Learn more</Link>
            <img src={ArrowRight} alt='arrow'/>
         </div>
       </div>
    </div>
  )
}

export default Box