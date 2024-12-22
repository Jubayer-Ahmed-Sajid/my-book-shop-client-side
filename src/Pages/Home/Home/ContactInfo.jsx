import React from "react";
import { FaXTwitter } from "react-icons/fa6";
import { HiOutlineMailOpen } from "react-icons/hi";
import { IoLocationOutline } from "react-icons/io5";
import { PiWhatsappLogoDuotone } from "react-icons/pi";
import { TbHelpSquareRounded } from "react-icons/tb";
import { TiSocialFacebookCircular } from "react-icons/ti";

const ContactInfo = () => {
  return (
    <div className=" text-white">
      <h2 className="text-center text-xl text-bold mt-12 text-accent">
        Contact info
      </h2>
      <div className="divider divider-accent w-1/3 mx-auto"></div>
      <div className="flex bg-secondary p-6 rounded-sm w-full justify-between">
        <div className="p-4 space-y-3">
          <div className="flex gap-2 items-center">
            <p className="text-lg font-semibold text-white">
              <HiOutlineMailOpen className="text-2xl" />
            </p>
            <p>sajid661ac@gmail.com</p>
          </div>
          <div className="flex gap-2 items-center">
            <p className="text-lg font-semibold text-white">
              <PiWhatsappLogoDuotone className="text-2xl" />
            </p>
            <p>+880 1843278491</p>
          </div>
          <div className="flex gap-2 items-center">
            <p className="text-lg font-semibold text-white">
              <TiSocialFacebookCircular className="text-2xl" />
            </p>
            <p>https://www.facebook.com/book-shop</p>
          </div>
          <div className="flex gap-2 items-center">
            <p className="text-lg font-semibold text-white">
              <FaXTwitter className="text-2xl" />
            </p>
            <p>https://www.x.com/book-shop</p>
          </div>
        </div>
        <div className="p-4 space-y-3">
          <div className="flex gap-2 items-center">
            <p className="text-lg font-semibold text-white">
              <TbHelpSquareRounded className="text-2xl" />
            </p>
            <p>+123 45678</p>
          </div>
          <div className="flex gap-2 items-center">
              <IoLocationOutline className="text-2xl" />
            <p className="text-lg font-semibold text-white">
              123 Book Haven Street, <br />
              Literary District, Bibliopolis, <br />
              Readerville, NY 12345, USA
            </p>
            <p> </p>
          </div>
         
        </div>
      </div>
    </div>
  );
};

export default ContactInfo;
