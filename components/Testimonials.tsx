import Image from "next/image";

const Testimonials = () => {
  return (
    <section id="testimonials" className="w-full bg-gray-800">
      <div className="container px-6 py-12 mx-auto">
        <div className="grid items-start gap-4 xl:grid-cols-5">
          <div className="max-w-2xl mx-auto my-8 space-y-4 text-center xl:col-span-2 xl:text-left flex flex-col justify-center items-center">
            <h2 className="text-4xl lg:text-5xl font-bold text-white">
              Property{" "}
              <span className="text-safron uppercase font-bold">
                Management
              </span>{" "}
              Services
            </h2>
            <p className="text-white">
              Property management can be a daunting task for individual property
              owners and real estate investors. We offer a comprehensive
              property management services that takes care of everything from
              finding tenants to maintaining and managing the property.
            </p>
            <br className="hidden xl:block" />
            <br className="hidden xl:block" />
            <Image
              src="/images/property-management.png"
              alt="Property Management Services"
              width={500}
              height={300}
              className="mt-10 rounded-lg hidden xl:flex shadow-lg"
            />
          </div>
          <div className="p-6 xl:col-span-3">
            <div className="grid gap-4 md:grid-cols-2">
              <div className="grid content-center gap-4">
                <div className="p-6 rounded bg-white shadow-md dark:bg-gray-900 hover:scale-105 transition duration-300 ease-in-out">
                  <h1 className="text-2xl font-bold underline">
                    Tenant Management
                  </h1>
                  <p>
                    There are risks involved in renting out property or keeping
                    a vacant home unattended. There is a persistent worry about
                    unruly tenants and encroachments.
                  </p>
                </div>
                <div className="p-6 rounded bg-safron shadow-md text-white hover:scale-105 transition duration-300 ease-in-out">
                  <h1 className="text-2xl font-bold underline text-black">
                    Renovation
                  </h1>
                  <p>
                    Through qualified contractors, we will help you make
                    renovations or repairs to your property. Interiors and
                    modular kitchens are among our services.
                  </p>
                </div>
                <div className="p-6 rounded bg-white shadow-md hover:scale-105 transition duration-300 ease-in-out">
                  <h1 className="text-2xl font-bold underline">
                    Real Estate Buying/Selling
                  </h1>
                  <p>
                    We have specialized Dealers to make it easier to purchase or
                    sell both commercial and residential property in India.
                  </p>
                </div>
                <div className="p-6 rounded bg-safron shadow-md text-white hover:scale-105 transition duration-300 ease-in-out">
                  <h1 className="text-2xl font-bold underline text-black">
                    Property Monitoring
                  </h1>
                  <p>
                    There are several reasons why a property owner may need to
                    monitor their property. We provide property monitoring
                    services for NRIs and people living abroad.
                  </p>
                </div>
              </div>
              <div className="grid content-center gap-4">
                <div className="p-6 bg-white rounded shadow-md hover:scale-105 transition duration-300 ease-in-out">
                  <h1 className="text-2xl font-bold underline">Construction</h1>
                  <p>
                    Through qualified contractors, we will help you make
                    renovations or repairs to your property. Interior design,
                    modular kitchens, and wardrobes are all part of our
                    services.
                  </p>
                </div>
                <div className="p-6 rounded bg-safron shadow-md dark:bg-gray-900 text-white hover:scale-105 transition duration-300 ease-in-out">
                  <h1 className="text-2xl font-bold underline text-black">
                    Rental Assistance
                  </h1>
                  <p>
                    We have a Team of Specialized Agents created specifically to
                    meet the demands and provide for NRIs and people is called
                    Rental Assistance (Property Management Services).
                  </p>
                </div>
                <div className="p-6 bg-white rounded shadow-md hover:scale-105 transition duration-300 ease-in-out">
                  <h1 className="text-2xl font-bold underline">
                    Interior Design
                  </h1>
                  <p>
                    We are able to meet all of your interior demands. We gladly
                    satisfy your needs and offer a helpful and dependable
                    service for everything from small home repairs to
                    large-scale renovations and construction.
                  </p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Testimonials;
