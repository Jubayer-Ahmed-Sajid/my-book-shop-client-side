import React from 'react';
import StarRatings from 'react-star-ratings';

const TestimonialCard = ({ testimonial }) => {
  const { name, image, rating } = testimonial;
  const description = testimonial?.testimonial;

  return (
    <div className="bg-white shadow-lg rounded-lg p-8 w-full transform transition-transform hover:scale-105 duration-300">
      <div className="w-full flex justify-center items-center mb-4">
        <img src={image} className="rounded-full w-24 h-24 border-4 border-primary" alt={name} />
      </div>
      <h2 className="my-4 text-2xl font-bold text-center text-primary">{name}</h2>
      <p className="text-center text-secondary mb-4">{description}</p>
      <div className="flex items-center justify-center">
        <StarRatings
          rating={rating}
          starDimension="30px"
          starRatedColor="gold"
          numberOfStars={5}
          name="rating"
        />
      </div>
    </div>
  );
};

export default TestimonialCard;
