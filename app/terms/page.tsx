import React from "react";
import { ContactForm } from "@/components/Form";

const Terms = () => {
  return (
    <>
      <div className="w-full py-10">
        <div className="container mx-auto flex flex-col justify-center items-start px-5 md:px-10 lg:px-20 ">
          <h1 className="w-full text-4xl text-center font-bold mb-10">
            <span className="border-safron border-b-4">
              Terms &<span className="text-safron"> Conditions</span>
            </span>
          </h1>
          <p className="text-lg text-justify mb-5">
            These Terms and Conditions, along with privacy policy or other terms
            (“Terms”) constitute a binding agreement by and between
            BricksViewer.com, ( “Website Developer or “we” or “us” or “our”) and
            you (“you” or “your”) and relate to your use of our website, goods
            (as applicable) or services (as applicable) (collectively,
            “Services”).
          </p>
          <p className="text-lg text-justify mb-5">
            By using our website and availing the Services, you agree that you
            have read and accepted these Terms (including the Privacy Policy).
            We reserve the right to modify these Terms at any time and without
            assigning any reason. It is your responsibility to periodically
            review these Terms to stay informed of updates.
          </p>
          <p className="text-lg text-justify mb-5">
            The use of this website or availing of our Services is subject to
            the following terms of use:
          </p>
          <h2 className="text-3xl font-bold mb-2">1. License</h2>
          <p className="text-lg text-justify mb-2">
            We grant you a non-exclusive, non-transferable, limited license to
            use the website in accordance with these Terms and the Privacy
            Policy.
          </p>
          <h2 className="text-3xl font-bold mb-2">2. Restrictions</h2>
          <p className="text-lg text-justify mb-2">
            You agree that you will not:
          </p>
          <ul className="list-disc list-inside text-md text-justify mb-2 pl-10">
            <li>
              Use the website for any purpose that is illegal or prohibited by
              these Terms.
            </li>
            <li>
              Use the website in any manner which could damage, disable,
              overburden, or impair the website.
            </li>
            <li>
              Use automated scripts to collect information from or otherwise
              interact with the website.
            </li>
            <li>
              Use the website to post, share, or otherwise distribute any
              information that is abusive, defamatory, harassing, harmful,
              obscene, or threatening.
            </li>
            <li>
              Use the website to post, share, or otherwise distribute any
              information that infringes or violates the intellectual property
              rights of others.
            </li>
          </ul>
          <p className="text-lg text-justify mb-5">
            We reserve the right to terminate your use of the website for
            violating any of the prohibited uses.
          </p>
          <h2 className="text-3xl font-bold mb-2">3. Intellectual Property</h2>
          <p className="text-lg text-justify mb-2">
            The website and its original content, features, and functionality
            are owned by us and are protected by international copyright.
          </p>
          <h2 className="text-3xl font-bold mb-2">4. Termination</h2>
          <p className="text-lg text-justify mb-2">
            We may terminate or suspend your access to the website immediately,
            without prior notice or liability, for any reason whatsoever,
            including without limitation if you breach the Terms.
          </p>
          <h2 className="text-3xl font-bold mb-2">5. Governing Law</h2>
          <p className="text-lg text-justify mb-5">
            These Terms shall be governed and construed in accordance with the
            laws of India, without regard to its conflict of law provisions.
          </p>
          <h2 className="text-3xl font-bold mb-2">6. Changes</h2>
          <p className="text-lg text-justify mb-5">
            We reserve the right, at our sole discretion, to modify or replace
            these Terms at any time. If a revision is material we will try to
            provide at least 30 days&apos; notice prior to any new terms taking
            effect. What constitutes a material change will be determined at our
            sole discretion.
          </p>
          <h2 className="text-3xl font-bold mb-2">7. Contact Us</h2>
          <p className="text-lg text-justify mb-5">
            If you have any questions about these Terms, please contact us.
          </p>
        </div>
      </div>
      <section className="w-full bg-skyBlue">
        <div className="container text-white py-10 flex flex-col-reverse justify-center items-center md:flex-row">
          <div className="w-full h-full flex justify-center items-center md:w-1/2 mt-5 md:mt-0">
            <ContactForm />
          </div>
          <div className="w-full h-full flex flex-col md:w-1/2 border-white md:ml-5 border-b-2 md:border-0">
            <h1 className="text-4xl sm:text-5xl md:text-6xl font-bold rounded-lg">
              Contact Us!
            </h1>
            <p className="text-justify text-sm sm:text-normal font-bold mb-5 md:mb-0 lg:pr-36 mt-5">
              Fill out the form to get in touch with our Real Estate and
              Construction Consulting team. We are here to help you with all
              your needs and provide expert advice.
            </p>
          </div>
        </div>
      </section>
    </>
  );
};

export default Terms;
