import React from 'react'
import logo from '../../Assets/logo.png'
import './Navbar.css'
import {AiOutlineMenu} from 'react-icons/ai'
import { useGlobalContext } from '../context'


const Navbar = () => {
  const {openSidebar} = useGlobalContext();

  return (
    <nav>
      <div className='nav-wrapper'>
        <div className='navbar'>
           <div className='logo'>
              <img src={logo} alt='logo'/>
           </div>
           <div className='links'>
             <div className='menu' onClick={openSidebar}>
               <AiOutlineMenu style={{fontSize:'22px'}} />
             </div>
             <ul>
               <li className='active'
               onClick={() => {
                const anchor = document.querySelector('#Home')
                anchor.scrollIntoView({ behavior: 'smooth', block: 'center' })
               }}
               >Home</li>
               <li 
               onClick={() => {
                const anchor = document.querySelector('#service')
                anchor.scrollIntoView({ behavior: 'smooth', block: 'center' })
               }}
               >Services</li>
               <li 
               onClick={() => {
                const anchor = document.querySelector('#pricing')
                anchor.scrollIntoView({ behavior: 'smooth', block: 'center' })
               }}
               >
                 pricing
                </li>
               <li
               onClick={() => {
                const anchor = document.querySelector('#about')
                anchor.scrollIntoView({ behavior: 'smooth', block: 'center' })
               }}
               >
               About</li>
             </ul>
             <button>Start a Company</button>
           </div>
        </div>
      </div>
    </nav>
  )
}

export default Navbar