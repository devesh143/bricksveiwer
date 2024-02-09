import React from "react";
import { ContactForm } from "@/components/Form";

const Privacy = () => {
  return (
    <>
      <div className="w-full py-10">
        <div className="container mx-auto flex flex-col justify-center items-start px-5 md:px-10 lg:px-20 ">
          <h1 className="w-full text-4xl text-center font-bold mb-10">
            <span className="border-safron border-b-4">
              Privacy <span className="text-safron">Policy</span>
            </span>
          </h1>
          <p className="text-lg text-justify mb-5">
            This privacy policy {`("Policy")`} relates to the manner
            BricksViewer.com {`("we", "us", "our")`} in which we use, handle and
            process the data that you provide us in connection with using the
            products or services we offer. By using this website or by availing
            goods or services offered by us, you agree to the terms and
            conditions of this Policy, and consent to our use, storage,
            disclosure and transfer of your information or data in the manner
            described in this Policy.
          </p>
          <p className="text-lg text-justify mb-5">
            We are committed to ensuring that your privacy is protected in
            accordance with applicable laws and regulations. We urge you to
            acquaint yourself with this Policy to familiarize yourself with the
            manner in which your data is being handled by us.
          </p>
          <p className="text-lg text-justify mb-5">
            We may change this Policy periodically and we urge you to check this
            page for the latest version of the Policy in order to keep yourself
            updated.
          </p>
          <h2 className="text-3xl font-bold mb-2">
            What Data is being collected?
          </h2>
          <p className="text-lg text-justify mb-2">
            We may collect the following information from you:
          </p>
          <ul className="list-disc list-inside text-md text-justify mb-2 pl-10">
            <li>Your Name.</li>
            <li>
              Contact information such as email address, mobile number etc.
            </li>
            <li>
              Demographic information such as postcode, preferences and
              interests.
            </li>
            <li>
              Other information relevant to customer surveys and/or offers.
            </li>
          </ul>
          <p className="text-lg text-justify mb-5">
            <strong>Note:</strong> Notwithstanding anything under this Policy as
            required under applicable Indian laws, we will not be storing any
            credit card, debit card or any other similar card data of yours.
            Please also note that all data or information collected from you
            will be strictly in accordance with applicable laws and guidelines.
          </p>
          <h2 className="text-3xl font-bold mb-2">
            What we do with the information we gather?
          </h2>
          <p className="text-lg text-justify mb-2">
            We require this information to understand your needs and provide you
            with a better service, and in particular for the following reasons:
          </p>
          <ul className="list-disc list-inside text-md text-justify mb-5 pl-10">
            <li>Internal record keeping.</li>
            <li>
              We may use the information to improve our products and services.
            </li>
            <li>
              We may periodically send promotional emails about new products,
              special offers or other information which we think you may find
              interesting using the email address which you have provided.
            </li>
            <li>
              From time to time, we may also use your information to contact you
              for market research purposes. We may contact you by email, phone,
              fax or mail. We may use the information to customize the website
              according to your interests.
            </li>
          </ul>
          <h2 className="text-3xl font-bold mb-2">
            Who do we share your data with?
          </h2>
          <p className="text-lg text-justify mb-2">
            We may share your data with the following entities:
          </p>
          <ul className="list-disc list-inside text-md text-justify mb-2 pl-10">
            <li>
              Our affiliates, group companies, subsidiaries, employees, and
              third-party service providers.
            </li>
            <li>
              Any governmental or regulatory authority or any other third party
              where we are required to do so by applicable law or regulation.
            </li>
            <li>
              Our auditors or advisors to the extent required by them for
              performing their services
            </li>
          </ul>
          <p className="text-lg text-justify mb-5">
            We may also share your data with any other third party with your
            prior consent.
          </p>
          <h2 className="text-3xl font-bold mb-2">How we use cookies?</h2>
          <p className="text-lg text-justify mb-5">
            We use &quot;cookies&quot; to collect information and to better
            understand customer behaviour. You can instruct your browser to
            refuse all cookies or to indicate when a cookie is being sent.
            However, if you do not accept cookies, you may not be able to avail
            our goods or services to the full extent. We do not control the use
            of cookies by third parties. The third party service providers have
            their own privacy policies addressing how they use such information.
          </p>
          <h2 className="text-3xl font-bold mb-2">
            Your rights relating to your data
          </h2>
          <p className="text-lg text-justify mb-2">
            <strong>Right to Review -</strong> You can review the data provided
            by you and can request us to correct or amend such data (to the
            extent feasible, as determined by us). That said, we will not be
            responsible for the authenticity of the data or information provided
            by you.
          </p>
          <p className="text-lg text-justify mb-5">
            <strong>Withdrawal of your Consent -</strong> You can choose not to
            provide your data, at any time while availing our goods or services
            or otherwise withdraw your consent provided to us earlier, in
            writing to our support email. In the event you choose to not provide
            or later withdraw your consent, we may not be able to provide you
            our services or goods.Please note that these rights are subject to
            our compliance with applicable laws.
          </p>
          <h2 className="text-3xl font-bold mb-2">
            How long will we retain your information or data?
          </h2>
          <p className="text-lg text-justify mb-5">
            We may retain your information or data (i) for as long as we are
            providing goods and services to you; and (ii) as permitted under
            applicable law, we may also retain your data or information even
            after you terminate the business relationship with us. However, we
            will process such information or data in accordance with applicable
            laws and this Policy.
          </p>
          <h2 className="text-3xl font-bold mb-2">Data Security</h2>
          <p className="text-lg text-justify mb-5">
            We will use commercially reasonable and legally required precautions
            to preserve the integrity and security of your information and data.
          </p>
          <h2 className="text-3xl font-bold mb-2">
            Queries/ Grievance Officer
          </h2>
          <p className="text-lg text-justify mb-5">
            For any queries, questions or grievances about this Policy, please
            contact us using the contact information provided on this website.
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

export default Privacy;
