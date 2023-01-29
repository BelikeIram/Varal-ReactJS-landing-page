import React from 'react'
import { useGlobalContext } from '../context'
import './side-nav.css'
import {RxCross2} from 'react-icons/rx'
const SlideNav = () => {
   const {IsSidebarOpen, closeSidebar} = useGlobalContext()
  return (
    <div className={`side-nav ${IsSidebarOpen ? 'show' : ''}`}>
       <RxCross2 className='remove' onClick={closeSidebar}/>
       <ul className='side-nav-ul'>
         <li> <a href='#home' onClick={ closeSidebar}>Home</a></li>
         <li><a href='#service' onClick={ closeSidebar}>Services</a></li>
         <li><a href='#pricing' onClick={ closeSidebar}>Pricing</a></li>
         <li><a href='#about' onClick={ closeSidebar}>About Us</a></li>
       </ul>
       <button className='side-nav-btn'>Start a Company</button>
    </div>
  )
}

export default SlideNav