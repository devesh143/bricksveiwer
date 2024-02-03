import Form from "@/components/Form";

const ContactBar = () => {
  return (
    <div className="w-full bg-skyBlue">
      <div className="container mx-auto w-full p-10 flex flex-col-reverse lg:flex-row gap-10 justify-center items-center">
        <Form collection="contact" />
        <div className="w-full flex flex-col lg:w-1/2">
          <h1 className="text-4xl font-bold text-white">Contact Us Today</h1>
          <p className="text-white mt-5">
            Fill out the form below to get in touch with our Real Estate and
            Construction Consulting team. We are here to help you with all your
            needs and provide expert advice.
          </p>
        </div>
      </div>
    </div>
  );
};

export default ContactBar;
