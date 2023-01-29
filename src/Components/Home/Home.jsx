import React from 'react'
import './Home.css'
import { Hero, About, Guidance,  Offers, Blog, Contact } from '../../Container' 
import Footer from '../../Container/Footer/Footer'
const Home = () => {
  return (
    <div className='home'>
    <Hero/>
    <About/>
    <Guidance/>
    <Offers/>
    <div className='about-us' id='about' >
       <Blog/>
       <Contact/>
    </div>
    <Footer/>
    </div>
  )
}

export default Home