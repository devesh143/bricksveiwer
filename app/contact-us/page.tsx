import React from "react";
import { ContactForm } from "@/components/Form";

const ContactUs = () => {
  return (
    <>
      <div className="w-full pt-10">
        <div className="container mx-auto flex flex-col justify-center items-start px-5 md:px-10 lg:px-20 ">
          <h1 className="w-full text-4xl text-center font-bold mb-10">
            <span className="border-safron border-b-4">
              Contact <span className="text-safron">Us</span>
            </span>
          </h1>
        </div>
      </div>
      <div className="container text-black mb-10 flex flex-col-reverse justify-center items-start md:flex-row">
        <div className="w-full h-full flex justify-center items-center md:w-1/2 mt-5 md:mt-0">
          <ContactForm />
        </div>
        <div className="w-full h-full flex flex-col md:w-1/2 border-black md:ml-5 border-b-2 md:border-0">
          <p className="text-justify text-2xl font-bold mb-5 md:mb-0 lg:pr-36 mt-5">
            We are always happy to help you out. If you have any queries or
            suggestions, please feel free to reach out to us.
          </p>
        </div>
      </div>
    </>
  );
};

export default ContactUs;
