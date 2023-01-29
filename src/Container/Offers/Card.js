import React from 'react'
import {BsCheckCircle} from 'react-icons/bs'

const Card = ({data}) => {
   const {title, pricing} = data;
  return (
    <div className='card'>
       <div className='header-card'>{title}</div>
       <p className='price'><span className='pc'>{pricing} </span><span className="last">on time payment</span></p>
       <span className='text'>Rak Icc New Company formation 
       includes</span>
       <ul>
          <li>
                  <BsCheckCircle/>
             <span>Attestation Charges</span>
          </li>
          <li>
               <BsCheckCircle/>
             <span>Registered Agent</span>
          </li>
          <li>
               <BsCheckCircle/>
             <span>Registered Office</span>
          </li>
          <li>
               <BsCheckCircle/>
            <span>Varal Administrative</span>
          </li>
          <li>
               <BsCheckCircle/>
            <span>Preparing Statutory File</span>
          </li>
          <li>
               <BsCheckCircle/>
          <span>Liasing with Registration Authorities</span>
       </li>
       <li>
             <BsCheckCircle/>
          <span>Due Diligence Appraisal</span>
       </li>
       <li>
             <BsCheckCircle/>
          <span>Keeping The Register</span>
       </li>
       <li >
            <BsCheckCircle/>
          <span>Seal Charges</span>
       </li>
       <li>
            <BsCheckCircle/>
          <span>Certificate of Good Standing</span>
       </li>

       </ul>
       <button className='continue-btn'>continue</button>
    </div>
  )
}

export default Card