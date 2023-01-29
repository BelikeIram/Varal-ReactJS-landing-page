import React from 'react'
import './Blog.css'
import profile from '../../Assets/Vector-3.png'
import vector from '../../Assets/Vector-4.png'
import {FiRss} from 'react-icons/fi'
const Blog = () => {
  return (
    <div className='blog'>
       <div className='above-blog'>
          <div className='header'>
             Read about our blogs for more 
             information on our processes
          </div>
          <div className='how-to-container'>
          <div className='how-to'>
          <div className='vector-img'>
             <img src={ vector} alt='img'/>
          </div>
          <div className='blog-abt'>
              <div className='title'>How to start a company formation in Dubai</div>
              <span>5 Minutes</span>
          </div>
      </div>
      <div className='how-to'>
      <div className='vector-img'>
         <img src={ vector} alt='img'/>
      </div>
      <div className='blog-abt'>
          <div className='title'>How to start an Offshore company formation in Dubai</div>
          <span>5 Minutes</span>
      </div>
     </div>
     <div className='how-to active'>
  <div className='vector-img'>
     <FiRss style={{fontSize:'22px', backgroundColor:'white', color:'var(--Cbg)', borderRadius:'3px'}}/>
  </div>
  <div className='blog-abt'>
      <div className='title'>SEO Dubai: Who benefits the most?</div>
      <span>5 Minutes</span>
  </div>
    </div>
          </div>
       </div>
       <div className='below-blog'>
          <div className='header'>
          Satisfied We are When Our 
          Customers Are Happy
          </div>
          <div className='how-to-container'>
          <div className='review'>
             <div className='above-review'>
             <div className='profile-box'><img src={profile} alt='profile'/></div>
             <p>"I am very happy with them. I’ll 
             continue to use their services in 
             future & highly recommend them 
             to anyone,"</p></div>
            <div className='name'>
               <span className='blue-line'></span>
               <span className='sender-name'>Muhib Abrar</span>
            </div>
          </div>
          <div className='review'>
             <div className='above-review'>
             <div className='profile-box'><img src={profile} alt='profile'/></div>
             <p>"Rama has a high level of integrity, 
             intellect, knowledge of his 
             business, resourcefulness and 
             humanity,"</p></div>
            <div className='name'>
               <span className='blue-line'></span>
               <span className='sender-name'>Colin Saldahna</span>
            </div>
          </div>
          <div className='review'>
             <div className='above-review'>
             <div className='profile-box'><img src={profile} alt='profile'/></div>
             <p>"Your advise was so complete that I actually realized how beneficial 
             this would be to my clients and my 
             business."</p></div>
            <div className='name'>
               <span className='blue-line'></span>
               <span className='sender-name'>Mark Swann</span>
            </div>
          </div>
          </div>
       </div>
    </div>
  )
}

export default Blog