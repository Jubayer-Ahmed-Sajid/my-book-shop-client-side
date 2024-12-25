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

  return (
    <div>
      <h2 className="text-center text-xl lg:text-3xl font-bold mt-12 text-primary">
        Sayings From Customers
      </h2>
      <div className="divider w-1/3 mx-auto my-6 bg-accent_1 h-1"></div>

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
