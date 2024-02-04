import Image from "next/image";

const Testimonials = () => {
  return (
    <section className="w-full bg-gray-800">
      <div className="container px-6 py-12 mx-auto">
        <div className="grid items-start gap-4 xl:grid-cols-5">
          <div className="max-w-2xl mx-auto my-8 space-y-4 text-center xl:col-span-2 xl:text-left">
            <h2 className="text-4xl font-bold text-white">
              Don&apos;t take our word for it, hear what our{" "}
              <span className="text-safron uppercase font-bold">customers</span>{" "}
              have to say
            </h2>
            <p className="text-white">
              Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed do
              eiusmod tempor incididunt ut labore et dolore magna aliqua.
            </p>
          </div>
          <div className="p-6 xl:col-span-3">
            <div className="grid gap-4 md:grid-cols-2">
              <div className="grid content-center gap-4">
                <div className="p-6 rounded bg-white shadow-md dark:bg-gray-900">
                  <p>
                    Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed
                    do eiusmod tempor incididunt ut labore et dolore magna
                    aliqua.
                  </p>
                  <div className="flex items-center mt-4 space-x-4">
                    <Image
                      src="https://source.unsplash.com/50x50/?portrait?1"
                      alt="profile"
                      width={50}
                      height={50}
                      className="w-12 h-12 bg-center bg-cover rounded-full dark:bg-gray-500"
                    />
                    <div>
                      <p className="text-lg font-semibold">Customer One</p>
                      <p className="text-sm dark:text-gray-400">
                        High School Teacher
                      </p>
                    </div>
                  </div>
                </div>
                <div className="p-6 rounded bg-safron shadow-md text-white">
                  <p>
                    Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed
                    do eiusmod tempor incididunt ut labore et dolore magna
                    aliqua.
                  </p>
                  <div className="flex items-center mt-4 space-x-4">
                    <Image
                      src="https://source.unsplash.com/50x50/?portrait?2"
                      alt="profile"
                      width={50}
                      height={50}
                      className="w-12 h-12 bg-center bg-cover rounded-full"
                    />
                    <div>
                      <p className="text-lg font-semibold">Customer Two</p>
                      <p className="text-sm dark:text-gray-400">
                        Software Engineer
                      </p>
                    </div>
                  </div>
                </div>
              </div>
              <div className="grid content-center gap-4">
                <div className="p-6 bg-skyBlue rounded shadow-md text-white">
                  <p>
                    Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed
                    do eiusmod tempor incididunt ut labore et dolore magna
                    aliqua. Ut enim ad minim veniam, quis nostrud exercitation
                    ullamco laboris nisi ut aliquip ex ea commodo consequat.
                  </p>
                  <div className="flex items-center mt-4 space-x-4">
                    <Image
                      src="https://source.unsplash.com/50x50/?portrait?3"
                      alt="profile"
                      width={50}
                      height={50}
                      className="w-12 h-12 bg-center bg-cover rounded-full"
                    />
                    <div>
                      <p className="text-lg font-semibold">Customer Three</p>
                      <p className="text-sm dark:text-gray-400">
                        Marketing Manager
                      </p>
                    </div>
                  </div>
                </div>
                <div className="p-6 rounded bg-white shadow-md dark:bg-gray-900">
                  <p>
                    Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed
                    do eiusmod tempor incididunt ut labore et dolore magna
                    aliqua. Ut enim ad minim veniam, quis nostrud exercitation
                    ullamco laboris nisi ut aliquip ex ea commodo consequat.
                  </p>
                  <div className="flex items-center mt-4 space-x-4">
                    <Image
                      src="https://source.unsplash.com/50x50/?portrait?4"
                      alt="profile"
                      width={50}
                      height={50}
                      className="w-12 h-12 bg-center bg-cover rounded-full dark:bg-gray-500"
                    />
                    <div>
                      <p className="text-lg font-semibold">Customer Four</p>
                      <p className="text-sm dark:text-gray-400">
                        News Reporter
                      </p>
                    </div>
                  </div>
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
