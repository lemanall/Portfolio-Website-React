import "./Testimonials.css";
import AVTR1 from '../../assets/avatar1.jpg'
import AVTR2 from '../../assets/avatar2.jpg'
import AVTR3 from '../../assets/avatar3.jpg'
import AVTR4 from '../../assets/avatar4.jpg'

// import Swiper core and required modules
import { Pagination } from "swiper";

import { Swiper, SwiperSlide } from "swiper/react";

// swiper bundle styles
import "swiper/swiper-bundle.min.css";

// swiper core styles
import "swiper/swiper.min.css";

// modules styles
import "swiper/components/navigation/navigation.min.css";
import "swiper/components/pagination/pagination.min.css";



const data =[
  {
    avatar: AVTR1,
    name: "Tina Snow",
    review: `Lorem ipsum dolor sit amet consectetur adipisicing elit. Expedita
    voluptatum accusamus excepturi voluptate quis molestiae repellendus
    saepe, veniam quae aut aperiam, sunt id quasi dolor assumenda.
    Veniam perferendis in maxime.`,
  },
  {
    avatar: AVTR2,
    name: "Shatta Wale",
    review: `Lorem ipsum dolor sit amet consectetur adipisicing elit. Expedita
    voluptatum accusamus excepturi voluptate quis molestiae repellendus
    saepe, veniam quae aut aperiam, sunt id quasi dolor assumenda.
    Veniam perferendis in maxime.`,
  },
  
  {
  avatar: AVTR3,
  name: 'Kwame Despite',
review: 'Lorem ipsum dolor, sit amet consectetur adipisicing elit. Repellat, voluptatibus voluptate. Fugit tempore est recusandae necessitatibus, ab eligendi dolore iure dolores eveniet id vel assumenda obcaecati natus eum, ipsam deleniti.'
},
{
  avatar: AVTR4,
  name: 'Kwame Despite',
review: 'Lorem ipsum dolor, sit amet consectetur adipisicing elit. Repellat, voluptatibus voluptate. Fugit tempore est recusandae necessitatibus, ab eligendi dolore iure dolores eveniet id vel assumenda obcaecati natus eum, ipsam deleniti.'
}
]

const Testimonials = () => {
  return <section id="testimonials">
    <h5>Review from clients</h5>
    <h2>Testimials</h2>

    <Swiper className="container testimonials__container"
     modules={[Pagination]}
     spaceBetween={40}
     slidesPerView={1}
     
     pagination={{ clickable: true }}
     
     onSwiper={(swiper) => console.log(swiper)}
     onSlideChange={() => console.log("slide change")}

>
     {
      data.map(({avatar, name, review} , index) =>{
        return (
          <SwiperSlide key={index} className='testimonial'>
          <div className="client__avatar">
            <img src={avatar} />
           
          </div>
          <h5>{name}</h5>
            <small className="client__review">
              {review}
            </small>
        </SwiperSlide>
        )
      })
     }
    </Swiper>
  </section>;
};

export default Testimonials;
