import React, { useRef } from "react";
import { FaEnvelopeOpenText, FaXTwitter } from "react-icons/fa6";
import { TiSocialFacebookCircular } from "react-icons/ti";
import emailjs from "@emailjs/browser";
import { toast } from "sonner";
import PageTitle from "../../Components/PageTitle";

const ContactUs = () => {
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
    <div className="my-20 container mx-auto">
      <PageTitle title={"Contact"}></PageTitle>
      <div className="bg-error mx-6 shadow-lg p-6 rounded-lg">
        <h2 className="text-center text-3xl font-bold my-6 text-primary">
          Contact us{" "}
        </h2>
        <p className="mx-4 py-4 text-xl text-white">
          We’re here to assist you during our dedicated support hours. Our team
          is available Monday to Friday,{" "}
          <span className="font-bold">from 9:00 AM to 6:00 PM</span> , to
          address your questions, concerns, or feedback. On weekends, we provide
          limited support between{" "}
          <span className="font-bold"> 10:00 AM and 4:00 PM.</span>
          <br />
          <br />
          Whether you need help with an order, want more information about our
          services, or have a suggestion to share, don’t hesitate to reach out
          during these hours. Our goal is to respond promptly and ensure you
          have a seamless experience.
          <br />
          <br />
          Your satisfaction is our priority, and we appreciate your patience
          during peak hours. If you contact us outside of our operating times,
          we’ll get back to you as soon as possible during the next business
          day. Thank you for trusting us, and we look forward to assisting you!
        </p>
      </div>
      <div className="bg-white mx-6 shadow-lg p-6 rounded-lg">
        <h2 className="text-center text-3xl font-bold my-6 text-primary">
          Our Contact Details{" "}
        </h2>
        <div className="lg:flex justify-between gap-6 items-center">
          <div className="lg:w-1/2">
            <div className="space-y-4">
              <div className="flex lg:gap-4 items-center">
                <TiSocialFacebookCircular className="text-xl lg:text-4xl text-primary" />
                <p className="lg:text-lg text-sm font-semibold text-secondary">
                  <a href="https://www.facebook.com/book-shop" target="_blank">
                    https://www.facebook.com/book-shop
                  </a>
                </p>
              </div>

              <div className="flex gap-4 items-center">
                <FaXTwitter className="text-4xl text-primary" />
                <p className="lg:text-lg text-sm  font-semibold text-secondary">
                  <a href="https://www.x.com/book-shop" target="_blank">
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
          </div>

          <div className="lg:w-1/2">
            <div className="mt-8">
              <h3 className="text-2xl font-bold text-accent mb-4">
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
                  <label
                    className="block text-secondary mb-2"
                    htmlFor="message"
                  >
                    Message
                  </label>
                  <textarea
                    className="w-full p-2 border border-gray-300 rounded-lg"
                    id="message"
                    name="message"
                    rows="4"
                  ></textarea>
                </div>
                <button
                  className="w-full bg-error text-white py-2 px-4 rounded-lg hover:bg-indigo-700 transition-colors"
                  type="submit"
                >
                  Send Message
                </button>
              </form>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default ContactUs;
