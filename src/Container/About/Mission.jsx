import React from 'react'
import Group from '../../Assets/Group-100.png'
import Dot from '../../Assets/Ellipse-20.png'
import './About.css'

const Mission = () => {
  return (
    <div className='mission'>
       <img className='bg-1' src={Group} alt='grp'/>
       <img className='bg-2' src={Dot} alt='dot'/>

      <h4 className='mission-h'>
        <span>Dedicated</span> to our mission we are
      </h4>
      <p className='mission-p'>Our services include Company Formation & Renewals, 
      Trust & Fiduciary, Tax Residency Setup With Family, Bank 
      Accounts, Remote Management, Stock Trading 
      Platforms, Ownership Solutions.</p>
    </div>
  )
}

export default Mission