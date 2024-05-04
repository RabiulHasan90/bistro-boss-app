
import React, { useRef, useState } from 'react';
// Import Swiper React components
import { Swiper, SwiperSlide } from 'swiper/react';
import { Pagination } from 'swiper/modules';
import slide1 from '../../../assets/home/slide1.jpg'
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
           subHeading={"from 11 to 12"}
        
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
           <img src={slide1} alt="" />
           <h5 className='text-center uppercase text-4xl text-white -mt-12'>salad</h5>
        </SwiperSlide>
        <SwiperSlide> <img src={slide2} alt="" />
           <h5 className='text-center uppercase text-4xl text-white -mt-12'>salad</h5></SwiperSlide>
        <SwiperSlide> <img src={slide3} alt="" />
           <h5 className='text-center uppercase text-4xl text-white -mt-12'>salad</h5></SwiperSlide>
        <SwiperSlide> <img src={slide4} alt="" />
           <h5 className='text-center uppercase text-4xl text-white -mt-12'>salad</h5></SwiperSlide>
        <SwiperSlide> <img src={slide5} alt="" />
           <h5 className='text-center uppercase text-4xl text-white -mt-12'>salad</h5></SwiperSlide>
        <SwiperSlide>Slide 6</SwiperSlide>
        <SwiperSlide>Slide 7</SwiperSlide>
        <SwiperSlide>Slide 8</SwiperSlide>
        <SwiperSlide>Slide 9</SwiperSlide>
        </Swiper>
           </section>
     
      
     
     
  )
}
