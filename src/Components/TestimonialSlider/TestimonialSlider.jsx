import React from "react";
import { Swiper, SwiperSlide } from "swiper/react";
import "swiper/css";
import "swiper/css/pagination";
import "swiper/css/navigation";
import { Pagination, Navigation } from "swiper/modules";

const testimonials = [
  {
    name: "Majih Edwards",
    role: "Founder CEO",
    image: "https://randomuser.me/api/portraits/men/1.jpg",
    feedback: "Lorem ipsum dolor sit amet, consectetur adipiscing elit."
  },
  {
    name: "John Doe",
    role: "CTO",
    image: "https://randomuser.me/api/portraits/men/2.jpg",
    feedback: "Suspendisse potenti. Integer dapibus volutpat tellus."
  },
  {
    name: "Jane Smith",
    role: "Marketing Head",
    image: "https://randomuser.me/api/portraits/women/3.jpg",
    feedback: "Vivamus tristique, magna et posuere fermentum."
  }
];

const TestimonialSlider = () => {
  return (
    <div className="testimonial-section">
      <h2>What Our Clients Say</h2>
      <Swiper
        slidesPerView={1}
        breakpoints={{
          768: { slidesPerView: 2 },
          1024: { slidesPerView: 3 }
        }}
        spaceBetween={30}
        pagination={{ clickable: true }}
        navigation
        modules={[Pagination, Navigation]}
        className="swiper-container"
      >
        {testimonials.map((testimonial, index) => (
          <SwiperSlide key={index}>
            <div className="testimonial-card">
              <img src={testimonial.image} alt={testimonial.name} />
              <h3>{testimonial.name}</h3>
              <p className="role">{testimonial.role}</p>
              <p>{testimonial.feedback}</p>
            </div>
          </SwiperSlide>
        ))}
      </Swiper>
    </div>
  );
};

export default TestimonialSlider;
