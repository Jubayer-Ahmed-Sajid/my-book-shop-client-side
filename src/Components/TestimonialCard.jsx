import React from "react";
import StarRatings from "react-star-ratings";

const TestimonialCard = ({ testimonial }) => {
  const { name, image, rating } = testimonial;
  const description = testimonial?.testimonial;

  return (
    <div className="p-8 w-full">
      <div className="w-full flex justify-center items-center">
        <img src={image} className="rounded-full w-20" alt="" />
      </div>
      <h2 className="my-4 text-xl font-bold text-center">{name}</h2>
      <p className="text-center">{description}</p>
      <div className="flex items-center my-5 justify-center">

      <StarRatings
          rating={rating}
          starRatedColor="gold"
          numberOfStars={5}
          name='rating'
        />
      </div>
    </div>
  );
};

export default TestimonialCard;
