import React from "react";

const AboutUs = () => {
  return (
    <div className="bg-gray-100 container mx-auto p-6">
      <div className="max-w-6xl mx-auto bg-white shadow-lg rounded-lg overflow-hidden">
        <div className="lg:flex">
          <div className="lg:w-1/2 w-full">
            <img
              src="https://img.freepik.com/free-vector/smiling-people-standing-line-book-store_74855-14515.jpg?uid=R119823725&ga=GA1.1.1124564091.1734164686&semt=ais_hybrid"
              alt="About Us"
              className="object-cover w-full h-full"
            />
          </div>
          <div className="p-6 lg:w-1/2 w-full flex flex-col justify-center bg-primary text-white">
            <h1 className="lg:text-4xl text-xl font-bold text-center mb-4">
              About Us
            </h1>
            <p className="text-lg mb-4">
              Welcome to Book Shop, your number one source for all things books.
              We're dedicated to giving you the very best of literature, with a
              focus on quality, customer service, and uniqueness.
            </p>
            <p className="text-lg mb-4">
              Founded in 2023, Book Shop has come a long way from its
              beginnings. When we first started out, our passion for books drove
              us to do tons of research so that Book Shop can offer you the
              world's most advanced book collection. We now serve customers all
              over the world and are thrilled that we're able to turn our
              passion into our own website.
            </p>
            <p className="text-lg mb-4">
              We hope you enjoy our products as much as we enjoy offering them
              to you. If you have any questions or comments, please don't
              hesitate to contact us.
            </p>
            <p className="text-lg font-semibold">Sincerely,</p>
            <p className="text-lg font-semibold">Book Shop Team</p>
          </div>
        </div>
      </div>

      <div className="max-w-6xl mx-auto bg-white shadow-lg rounded-lg overflow-hidden mt-8 p-6">
        <h2 className="lg:text-3xl text-xl font-bold text-primary text-center mb-4">
          Our Mission
        </h2>
        <p className="text-lg text-secondary mb-4">
          At Book Shop, our mission is to provide a vast selection of books to
          readers all over the world, fostering a love for reading and lifelong
          learning. We believe in the power of books to transform lives and are
          committed to making literature accessible to everyone.
        </p>
      </div>

      <div className="max-w-6xl mx-auto bg-white shadow-lg rounded-lg overflow-hidden mt-8 p-6">
        <h2 className="lg:text-3xl text-xl text-center font-bold text-primary mb-4">
          Meet Our Team
        </h2>
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
          <div className="flex flex-col items-center bg-gray-100 p-4 rounded-lg">
            <img
              src="https://i.ibb.co.com/MBsgq2P/82dcfe22-cd6f-42be-a379-3f7ba1d6a648.jpg"
              alt="Team Member"
              className="rounded-full w-32 object-cover h-32 mb-4 border-4 border-accent_1"
            />
            <h3 className="text-xl font-semibold text-primary">
              Jobayer Ahmed
            </h3>
            <p className="text-md text-secondary">Founder & CEO</p>
          </div>
          <div className="flex flex-col items-center bg-gray-100 p-4 rounded-lg">
            <img
              src="https://img.freepik.com/free-photo/man-portrait-posing-loft-modern-space_158595-5368.jpg?uid=R119823725&ga=GA1.1.1124564091.1734164686&semt=ais_hybrid"
              alt="Team Member"
              className="rounded-full w-32 object-cover h-32 mb-4 border-4 border-accent_1"
            />
            <h3 className="text-xl font-semibold text-primary">Jane Smith</h3>
            <p className="text-md text-secondary">Chief Operating Officer</p>
          </div>
          <div className="flex flex-col items-center bg-gray-100 p-4 rounded-lg">
            <img
              src="https://img.freepik.com/free-photo/brunette-business-woman-with-wavy-long-hair-blue-eyes-stands-holding-notebook-hands_197531-343.jpg?uid=R119823725&ga=GA1.1.1124564091.1734164686&semt=ais_hybrid"
              alt="Team Member"
              className="rounded-full object-cover w-32 h-32 mb-4 border-4 border-accent_1"
            />
            <h3 className="text-xl font-semibold text-primary">
              Emily Johnson
            </h3>
            <p className="text-md text-secondary">Head of Marketing</p>
          </div>
        </div>
      </div>

      <div className="max-w-6xl mx-auto shadow-lg rounded-lg overflow-hidden mt-8 p-6 text-center bg-accent_1 text-white">
        <h2 className="lg:text-3xl text-xl font-bold mb-4">
          Join Our Community
        </h2>
        <p className="text-lg mb-4">
          Become a part of our vibrant community of book lovers. Follow us on
          social media, subscribe to our newsletter, and stay updated with the
          latest book releases and events.
        </p>
        <button className="btn bg-primary text-white py-2 px-4 rounded-lg hover:bg-indigo-700 transition-colors">
          Subscribe Now
        </button>
      </div>
    </div>
  );
};

export default AboutUs;
