import React from 'react'
import Card from './Card'
import { Navigation, Pagination, Scrollbar, A11y } from 'swiper';
import { Swiper, SwiperSlide } from 'swiper/react';
import 'swiper/css';
import 'swiper/css/navigation';
import 'swiper/css/pagination';
import 'swiper/css/scrollbar';
import './Offers.css'
import {BsCheckCircle} from 'react-icons/bs'

const data = [
  {id:'1', title:'Ajman OFFSHORE', pricing:'$2,997'},
  {id:'2', title:'RAK ICC', pricing:'$2,997'},
  {id:'3', title:'SHARJAH MEDIA CITY', pricing:'$4,124'},
]


const Offers = () => {
  return (
    <div className='pricing' id='pricing'>
       <h1>Most <span>popular affordable pricing</span> per 
       jurisdictions are brought to you to 
       kick off your adventure</h1>
       <div className='overflow top_space'>
        <div className='pricing-card'>
          {data.map((data, index)=>{
            return  <Card key={index} data={data}/>
          })}
       </div>
    </div>
    <div className='wrapper'>
    <Swiper
    modules={[Navigation, Pagination, Scrollbar, A11y]}
    breakpoints={{
      576: {
        slidesPerView: 2,
      },
      768: {
        slidesPerView: 1,
      },
    }}
    
    spaceBetween={12}
    initialSlide={1}
    centeredSlides={true}
    pagination={{ clickable: true }}
  >

      <SwiperSlide>
      <div className='card'>
      <div className='header-card'>RAK ICC</div>
      <p className='price'><span>$2,997</span><span>on time payment</span></p>
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
      <li >
            <BsCheckCircle/>
         <span>Keeping The Register</span>
      </li>
      <li >
           <BsCheckCircle/>
         <span>Seal Charges</span>
      </li>
      <li >
           <BsCheckCircle/>
         <span>Certificate of Good Standing</span>
      </li>
  
      </ul>
      <button className='continue-btn'>continue</button>
   </div>
      </SwiperSlide>
      <SwiperSlide>
      <div className='card active'>
      <div className='header-card'>RAK ICC</div>
      <p className='price'><span>{'$2,997'} </span><span>on time payment</span></p>
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
      <li >
            <BsCheckCircle/>
         <span>Keeping The Register</span>
      </li>
      <li >
           <BsCheckCircle/>
         <span>Seal Charges</span>
      </li>
      <li >
           <BsCheckCircle/>
         <span>Certificate of Good Standing</span>
      </li>
  
      </ul>
      <button className='continue-btn'>continue</button>
   </div>
      </SwiperSlide>
      <SwiperSlide>
      <div className='card '>
      <div className='header-card'>RAK ICC</div>
      <p className='price'><span>{'$2,997'} </span><span>on time payment</span></p>
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
      <li >
            <BsCheckCircle/>
         <span>Keeping The Register</span>
      </li>
      <li >
           <BsCheckCircle/>
         <span>Seal Charges</span>
      </li>
      <li >
           <BsCheckCircle/>
         <span>Certificate of Good Standing</span>
      </li>
  
      </ul>
      <button className='continue-btn'>continue</button>
   </div>
      </SwiperSlide>
  </Swiper>

    </div>

  </div>
  )
}

export default Offers