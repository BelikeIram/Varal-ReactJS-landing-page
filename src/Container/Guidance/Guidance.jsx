import React from 'react'
import Box from './Box'
import Group1 from '../../Assets/Group-1.png'
import Group2 from '../../Assets/Group-2.png'
import Group3 from '../../Assets/Group-3.png'
import Group4 from '../../Assets/Group-4.png'
import { Link } from 'react-router-dom'
import './Guidance.css'

const Guidance = () => {
  return (
    <div className='grid-sec' id='service'>
       <div className='sec sec-1'>
       <p className='guide'>Learn the ways in which you can benefit 
       from a UAE/Offshore Company. Then get 
       started on fulfilling your UAE dream
         <Link to='/'>Claim a Free Quote</Link>
       </p>
       <Box  img={Group4} title='Bank Account Setup'  desc={'There are many banks in the United Arab Emirates [UAE]. Both locally owned and branches of multinational ones. Foreign banks adjust according to their parent strategies and have changed local requirements overnight in the past. But we are here to help you.' }/>
       <Box img={Group2} title='UAE Company Visas'  desc={'Your application for visas is critical especially if you intend to move to Dubai. This becomes even more urgent if your family will also move with you. All the paperwork is done on your behalf smoothly so that you may only focus on doing what matters most to you'}/>
       </div>
       <div className='sec sec-2'>
       <Box img={Group3} title='Advice & Guidance'  desc={'All activities in the UAE are licensed. Whether manufacturing, finance,trading, marketing, consultancy or restaurants. In some countries only manufacturing is licensed. In others there is a threshold below which business are encouraged. Get our insightfull guidance today. Learn more Bank Account Setup' }/>
       <Box img={Group1} title='Registration Document Perparation'  desc={'Several documents must be prepared to start the process of registering a new company in the United Arab Emirates. Be it a Dubai local company, a free zone one or an offshore entity. Your registered agent is dedicated to get this done for you for a seamless' }/>
       <p className='guide'>We have gathered a team of
       professionals to craft adequate
       services you can rely on for a friction
       free setup in UAE.
         <Link to='/'>More about our services</Link>
       </p>
       </div>
    </div>
  )
}

export default Guidance