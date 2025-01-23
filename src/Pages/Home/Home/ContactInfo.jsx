import React, { useRef } from "react";
import { TiSocialFacebookCircular } from "react-icons/ti";
import { FaEnvelopeOpenText, FaMapMarkerAlt } from "react-icons/fa";
import { FaXTwitter } from "react-icons/fa6";
import { TbHelpSquareRounded } from "react-icons/tb";
import emailjs from "@emailjs/browser";
import { toast } from "sonner";

const ContactInfo = () => {
  const form = useRef();
  const sendEmail = (e) => {
    e.preventDefault();
    
    

    emailjs
      .sendForm("service_zq0li8k", "template_7awov3p", form.current,
         {
        publicKey: "XtMf4VrUG3doEiAya",
      })
      .then(
        (res) => {
          toast.success("Message sent successfully");
          form.current.reset();
        },
        (error) => {
          toast.error("Message not sent");
        }
      );

  };
  return (
    <div className="bg-gray-100 w-full p-6">
      <h2 className="text-center text-xl lg:text-3xl font-bold mt-12 text-primary">
        Contact Information
      </h2>
      <div className="divider lg:w-1/3 mx-auto lg:my-6 bg-accent h-1"></div>
      
      <div className="space-y-6  mx-auto bg-white p-8 rounded-lg shadow-lg">

        <div className="lg:flex gap-4 items-center justify-between">

          <div className="space-y-4">
            <div className="flex lg:gap-4 items-center">
              <TiSocialFacebookCircular className="text-xl lg:text-4xl text-primary" />
              <p className="lg:text-lg text-sm font-semibold text-secondary">
                <a
                  href="https://www.facebook.com/book-shop"
                  target="_blank"
                 
                >
                  https://www.facebook.com/book-shop
                </a>
              </p>
            </div>

            <div className="flex gap-4 items-center">
              <FaXTwitter className="text-4xl text-primary" />
              <p className="lg:text-lg text-sm  font-semibold text-secondary">
                <a
                  href="https://www.x.com/book-shop"
                  target="_blank"
                  
                >
                  https://www.x.com/book-shop
                </a>
              </p>
            </div>

            <div className="flex gap-4 items-center">
              <FaEnvelopeOpenText className="text-4xl text-primary" />
              <p className="lg:text-lg text-sm  font-semibold text-secondary">
                contact@bookshop.com
              </p>
            </div>
          </div>
          <div className="space-y-4">
            <div className="flex gap-4 items-center">
              <FaMapMarkerAlt className="text-4xl text-primary" />
              <p className="lg:text-lg text-sm  font-semibold text-secondary">
                123 Book St, Reading City, 45678
              </p>
            </div>

            <div className="flex gap-4 items-center">
              <TbHelpSquareRounded className="text-4xl text-primary" />
              <p className="lg:text-lg text-sm   font-semibold text-secondary">+123 45678</p>
            </div>
          </div>
        </div>

        <div className="mt-8">
          <h3 className="text-2xl font-bold text-primary mb-4">
            Send Us a Message
          </h3>
          <form ref={form} onSubmit={sendEmail} className="space-y-4">
            <div>
              <label className="block text-secondary mb-2" htmlFor="name">
                Name
              </label>
              <input
                className="w-full p-2 border border-gray-300 rounded-lg"
                type="text"
                id="name"
                name="name"
              />
            </div>
            <div>
              <label className="block text-secondary mb-2" htmlFor="email">
                Email
              </label>
              <input
                className="w-full p-2 border border-gray-300 rounded-lg"
                type="email"
                id="email"
                name="email"
              />
            </div>
            <div>
              <label className="block text-secondary mb-2" htmlFor="message">
                Message
              </label>
              <textarea
                className="w-full p-2 border border-gray-300 rounded-lg"
                id="message"
                name="message"
                rows="4"
              ></textarea>
            </div>
            <div className="w-full flex justify-center">

            <button
              className="w-full lg:w-1/3 mx-auto bg-primary text-white py-2 px-4 rounded-lg hover:bg-primary-80 transition-colors"
              type="submit"
            >
              Send Message
            </button>
            </div>
          </form>
        </div>
      </div>
    </div>
  );
};

export default ContactInfo;
