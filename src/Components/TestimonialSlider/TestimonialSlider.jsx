import React from "react";
import { Swiper, SwiperSlide } from "swiper/react";
import "swiper/css";
import "swiper/css/pagination";
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
  },
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
    <div className="bg-gray-100 py-10">
      <h2 className="text-center text-2xl font-bold mb-6">What Clients Say About Us</h2>
      <Swiper
        slidesPerView={1}
        breakpoints={{
          640: { slidesPerView: 1 },
          768: { slidesPerView: 2 },
          1024: { slidesPerView: 3 }
        }}
        spaceBetween={30}
        navigation
        pagination={{ clickable: true }}
        modules={[Pagination, Navigation]}
        className="max-w-5xl mx-auto"
      >
        {testimonials.map((testimonial, index) => (
          <SwiperSlide key={index}>
            <div className="bg-white p-6 rounded-lg shadow-md text-center border-l-4 border-red-500">
              <img src={testimonial.image} alt={testimonial.name} className="w-16 h-16 rounded-full mx-auto mb-4" />
              <h3 className="text-lg font-semibold">{testimonial.name}</h3>
              <p className="text-sm text-gray-500">{testimonial.role}</p>
              <p className="mt-3 text-gray-700">{testimonial.feedback}</p>
            </div>
          </SwiperSlide>
        ))}
      </Swiper>
    </div>
  );
};

export default TestimonialSlider;
