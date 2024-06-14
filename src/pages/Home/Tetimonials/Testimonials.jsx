
import SectionTitle from '../../../components/sectiontitle/SectionTitle'
import React, { useEffect, useRef, useState } from 'react';
// Import Swiper React components
import { Swiper, SwiperSlide } from 'swiper/react';

// Import Swiper styles
import 'swiper/css';
import 'swiper/css/navigation';
import { Navigation } from 'swiper/modules';
import { Rating } from '@smastrom/react-rating';
import '@smastrom/react-rating/style.css'
export default function Testimonials() {
   const [review, setReview] = useState([]);
   useEffect(() => {
      fetch('http://localhost:5000/reviews')
         .then(res => res.json())
      .then(data => setReview(data))

   },[])
  return (
     <section className='mb-12'>
        <SectionTitle
           Heading={"Reviews"}
           subHeading={"this is reviews"}
        ></SectionTitle>
         <Swiper navigation={true} modules={[Navigation]} className="mySwiper ">
      
           {
              review.map( rev => <SwiperSlide key={rev._id}>
                 
                   <div className='mx-24 flex flex-col items-center'>  <Rating
      style={{ maxWidth: 180 }}
      value={rev.rating}
      readOnly
    />
                    <p>{rev.details}</p>
                    <h3 className='text-2xl '>{ rev.name}</h3>
                 </div>
              </SwiperSlide>)

       }
      </Swiper>
    </section>
  )
}
