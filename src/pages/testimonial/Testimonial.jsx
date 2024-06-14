import { Navigation, Pagination, Scrollbar, A11y } from 'swiper/modules';
import { Swiper, SwiperSlide } from 'swiper/react';
import './Test.css';
import { Rating } from '@smastrom/react-rating';
import '@smastrom/react-rating/style.css';  // Ensure the CSS for the rating component is imported
import 'swiper/css';

const data = [
  {
    avatar: '/img/avatar1.jpg',
    name: "tina senware",
    review: "Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book",
    rating: 2
  },
  {
    avatar: '/img/avatar2.jpg',
    name: 'Tina Snowr',
    review: "Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book",
    rating: 3
  },
  {
    avatar: '/img/avatar3.jpg',
    name: 'Tina Snowf',
    review: "Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book",
    rating: 4
  },
  {
    
    avatar: '/img/avatar4.jpg',
    name: 'Tina Snowr',
    review: "Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book",
    rating: 5
  }
];

export default function Testimonial() {
  return (
    <>
      <h5 className='text-2xl text-center'>Review From Client</h5>
      <h2 className='text-2xl text-center'>Testimonial</h2>
      <section id='testimonial'>
        <Swiper
          className="container container_testimonial"
          modules={[Pagination]}
          spaceBetween={4}
          slidesPerView={1}
          navigation
          pagination={{ clickable: true }}
          scrollbar={{ draggable: true }}
          onSwiper={(swiper) => console.log(swiper)}
          onSlideChange={() => console.log('slide change')}
        >
          {data.map(({ avatar, name, review, rating }, index) => {
            return (
              <SwiperSlide key={index} className="text-center p-8 rounded-lg select-none">
                <div className="aspect-w-1 w-16 overflow-hidden border-4 mb-4 mx-auto rounded-full">
                  <img src={avatar} alt={`Avatar of ${name}`} />
                </div>
                <h5 className='client_name'>{name}</h5>
                <small className='client_review'>{review}</small>
                <div className='mx-24 flex flex-col items-center'>
                  <Rating
                    style={{ maxWidth: 180 }}
                    value={rating}
                    readOnly
                  />
                </div>
              </SwiperSlide>
            );
          })}
        </Swiper>
      </section>
    </>
  );
}
