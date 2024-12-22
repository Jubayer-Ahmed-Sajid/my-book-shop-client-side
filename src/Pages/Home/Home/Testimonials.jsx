import React, { useEffect, useState } from "react";
import { Autoplay, Pagination } from "swiper/modules";
import { SwiperSlide, Swiper } from "swiper/react";
import "swiper/css";
import "swiper/css/pagination";
import useTestimonialData from "../../../Hooks/useTestimonialData";
import TestimonialCard from "../../../Components/TestimonialCard";
import Loading from "../../../Components/Loading";
const Testimonial = () => {
  const { testimonials, isLoading, isError } = useTestimonialData();

  if (isLoading) return <p><Loading></Loading></p>;
  if (isError) return <p>Error loading testimonials.</p>;
  console.log(testimonials?.data);
  return (
    <div>
      <h2 className="text-center text-xl text-bold mt-12 text-accent">
        Testimonials
      </h2>
      <div className="divider divider-accent w-1/3 mx-auto"></div>

      <div>
        <Swiper
          slidesPerView={"auto"}
          spaceBetween={30}
          pagination={{
            clickable: true,
          }}
          modules={[Pagination,Autoplay]}
          autoplay={{
            delay: 2500,
            disableOnInteraction: false,
          }}
          className="mySwiper"
        >
          {testimonials?.data.map((testimonial) => (
            <SwiperSlide key={testimonial?._id}>
              <TestimonialCard testimonial={testimonial} />
            </SwiperSlide>
          ))}
        </Swiper>
      </div>
    </div>
  );
};

export default Testimonial;
