
import React, { useRef, useState } from 'react';
// Import Swiper React components
import { Swiper, SwiperSlide } from 'swiper/react';
import { Pagination } from 'swiper/modules';
import slide1 from '../../../assets/home/1.mp4'
import slide2 from '../../../assets/home/slide2.jpg'
import slide3 from '../../../assets/home/slide3.jpg'
import slide4 from '../../../assets/home/slide4.jpg'
import slide5 from '../../../assets/home/slide5.jpg'


// Import Swiper styles
import 'swiper/css';
import 'swiper/css/pagination';
import SectionTitle from '../../../components/sectiontitle/SectionTitle';
export default function Category() {
  return (

       
     <section>
        <SectionTitle
           Heading={"order online"}
           subHeading={"Welcome"}
        
        ></SectionTitle>
          <Swiper
        slidesPerView={4}
        spaceBetween={30}
        centeredSlides={true}
        pagination={{
          clickable: true,
        }}
        modules={[Pagination]}
        className="mySwiper mb-24"
      >
       <SwiperSlide>
  <video src={slide1} alt="Salad Video"  autoPlay muted loop>
 
  </video>
  <h5 className='text-center uppercase text-4xl text-white -mt-12'>salad</h5>
</SwiperSlide>
        <SwiperSlide>  <video src={slide1} alt="Salad Video" >
 
  </video>
           <h5 className='text-center uppercase text-4xl text-white -mt-12'>salad</h5></SwiperSlide>
        <SwiperSlide>  <video src={slide1} alt="Salad Video">
 
  </video>
           <h5 className='text-center uppercase text-4xl text-white -mt-12'>falad</h5></SwiperSlide>
        <SwiperSlide>  <video src={slide1} alt="Salad Video">
 
  </video>
           <h5 className='text-center uppercase text-4xl text-white -mt-12'>salad</h5></SwiperSlide>
        <SwiperSlide>  <video src={slide1} alt="Salad Video">
 
  </video>
           <h5 className='text-center uppercase text-4xl text-white -mt-12'>salad</h5></SwiperSlide>
       
        </Swiper>
           </section>
     
      
     
     
  )
}
