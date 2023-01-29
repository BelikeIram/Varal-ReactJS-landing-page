import React from 'react'
import './Contact.css'
import send from '../../Assets/Group-34.png'
import Fb from '../../Assets/fb.png'
import insta from '../../Assets/insta.png'
import youtube from '../../Assets/youtube.png'
import linkedin from '../../Assets/linkedin.png'
import { Link } from 'react-router-dom'

const Contact = () => {
  return (
    <>
    <div className='contact'>
    <div className='header'>
        Get to know the whole us and 
        more of our services
    </div>
    <div className='ft-box'>
       <Link to='/' className='title'>
         Services
       </Link>
       <Link to='/'>Products</Link>
       <Link to='/'>Solutions</Link>
       <Link to='/'>Assurance</Link>
       <Link to='/'>FAQ</Link>
       <Link to='/'>Working at Varal-Singhania</Link>
    </div>
    <div className='ft-box'>
    <Link to='/' className='title'>
      Policies
    </Link>
    <Link to='/'>Privacy Policy</Link>
    <Link to='/'>Terms and Conditions</Link>
 </div>
 <div className='ft-box'>
 <Link to='/' className='title'>
   About
 </Link>
 <Link to='/'>About Us</Link>
 <Link to='/'>Contact US</Link>
</div>
<div className='ft-box'>
<Link to='/' className='title'>
 Address
</Link>
<p>608 One Lake Plaza, Cluster T, Al Sarayat Street, Jumeirah Lake Towers Dubai</p>
<span>United Arab Emirates</span>
<span>Office Hours: Sunday to 
Thursday 8:30 AM to 6:30 PM 
[GMT+4]</span>
<span>M: +971 55 794 2016</span>
<span>O: +971 4 447 2061</span>
<span></span>

</div>
<div className='ft-box'>
<p>Subscribe now to receive our 
Newsletters about amazing 
opportunities in Dubai</p>
<div className='input'>
<input placeholder='Enter email address' type='text'></input>
<div className='btn'><img src={send } alt='send'/></div>
</div>
</div>
<div className='social-media'>
  <Link>
    <img src={Fb} alt='fb'/>
  </Link>
  <Link>
  <img src={insta} alt='insta'/>
</Link>
<Link>
<img src={youtube} alt='linkedin'/>
</Link>
<Link>
<img src={linkedin} alt='youtube'/>
</Link>
</div>
    </div>
    <div className='contact-mob'>
    <div className='left-con'>
    <div className='ft-box'>
    <Link to='/' className='title'>
      services
    </Link>
    <Link to='/'>Products</Link>
    <Link to='/'>Solutions</Link>
    <Link to='/'>Assurance</Link>
    <Link to='/'>FAQ</Link>
    <Link to='/'>Working at Varal-Singhania</Link>
 </div>
 <div className='ft-box'>
 <Link to='/' className='title'>
   About
 </Link>
 <Link to='/'>About Us</Link>
 <Link to='/'>Contact US</Link>
</div>
<div className='ft-box'>
<p className='subs'>Subscribe to our Newsletters</p>
<div className='input'>
<input placeholder='Email here' type='text'></input>
<div className='btn'><img src={send } alt='send'/></div>
</div>
</div>
    </div>
    <div className='right-con'>
    <div className='ft-box'>
    <Link to='/' className='title'>
      Policies
    </Link>
    <Link to='/'>Privacy Policy</Link>
    <Link to='/'>Terms and Conditions</Link>
 </div>
 <div className='ft-box'>
 <Link to='/' className='title'>
  Address
 </Link>
 <p>608 One Lake Plaza, Cluster T,</p>
 <p>Al Sarayat Street, Jumeirah Lake Towers Dubai</p>
 
 <p>United Arab Emirates</p>
 
 </div>
 <div className='social-media'>
  <Link>
    <img src={Fb} alt='fb'/>
  </Link>
  <Link>
  <img src={insta} alt='insta'/>
</Link>
<Link>
<img src={youtube} alt='linkedin'/>
</Link>
<Link>
<img src={linkedin} alt='youtube'/>
</Link>
</div>

    </div>
   
    </div>
    </>
 
    
    
  )
}

export default Contact