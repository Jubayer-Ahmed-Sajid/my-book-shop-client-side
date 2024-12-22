import React, { useEffect, useState } from "react";
import { Autoplay, Pagination } from "swiper/modules";
import { SwiperSlide, Swiper } from "swiper/react";
import "swiper/css";
import "swiper/css/pagination";
import axios from "axios";
import { useQuery } from "@tanstack/react-query";
import useTestimonialData from "../../../Hooks/useTestimonialData";
import TestimonialCard from "../../../Components/TestimonialCard";
const Testimonial = () => {
  const { testimonials, isLoading, isError } = useTestimonialData();

  if (isLoading) return <p>Loading testimonials...</p>;
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
