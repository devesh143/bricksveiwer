import Link from "next/link";

const Footer = () => {
  return (
    <footer className="flex flex-col">
      <div className="flex flex-col gap-10 items-center justify-evenly w-full p-20 bg-black text-white lg:flex-row lg:items-start lg:gap-20">
        <div className="flex flex-col items-center justify-center w-80 lg:w-1/4 lg:items-start">
          <h1 className="text-4xl font-bold text-center">BricksViewer.com</h1>
          <p className="text-sm text-center lg:text-left">
            Your one-stop destination for your Dream Home.
          </p>
          <Link
            href="mailto: ask@ask@bricksviewer.com"
            className="font-bold mt-5 text-5sm hover:text-skyBlue"
          >
            ask@bricksviewer.com
          </Link>
          <Link
            href="tel: +91 7055455847"
            className="font-bold text-sm hover:text-skyBlue"
          >
            +91 7055455847
          </Link>
        </div>
        <div className="flex flex-col items-center justify-center w-80 lg:w-1/4 lg:items-end">
          <h1 className="text-2xl font-bold text-center">Socials</h1>
          <Link
            href="https://www.linkedin.com/"
            className="mt-4 text-2sm hover:text-skyBlue"
          >
            LinkedIn
          </Link>
          <Link
            href="https://www.youtube.com/"
            className="mt-1 text-2sm hover:text-skyBlue"
          >
            YouTube
          </Link>
          <Link
            href="https://www.facebook.com/"
            className="mt-1 text-2sm hover:text-skyBlue"
          >
            Facebook
          </Link>
          <Link
            href="https://www.instagram.com/"
            className="mt-1 text-2sm hover:text-skyBlue"
          >
            Instagram
          </Link>
        </div>
        <div className="flex flex-col items-center justify-center w-80 lg:w-1/4 lg:items-start">
          <h1 className="text-2xl font-bold text-center">Links</h1>
          <Link href="/" className="mt-4 text-2sm hover:text-skyBlue">
            Home
          </Link>
          <Link href="/project" className="mt-1 text-2sm hover:text-skyBlue">
            Projects
          </Link>
          <Link href="/properties" className="mt-1 text-2sm hover:text-skyBlue">
            Properties
          </Link>
          <Link href="/contact-us" className="mt-1 text-2sm hover:text-skyBlue">
            Contact Us
          </Link>
        </div>
        <div className="flex flex-col items-center justify-center w-80 lg:w-1/2 lg:items-start lg:justify-start">
          <h1 className="text-2xl font-bold text-center lg:text-left">
            Email Newsletter
          </h1>
          <p className="text-sm text-center lg:text-left">
            Subscribe to our newsletter to get the latest updates.
          </p>
          <div className="flex items-center justify-center w-full mt-5 lg:justify-start">
            <input
              type="text"
              placeholder="Enter your email"
              className="w-4/6 text-black h-10 p-2 border border-r-0 border-gray-400 outline-none hover:border-skyBlue hover:border-5px active:border-skyBlue"
            />
            <button className="w-2/6 h-10 font-bold text-white bg-safron lg:mt-0 button-slide">
              <p className="text-sm">Subscribe</p>
            </button>
          </div>
        </div>
      </div>
      <div className="flex flex-col items-center justify-center w-full p-5 border-t bg-black text-white">
        <p className="text-sm text-center">
          © 2021 `BricksViewer.com`. All rights reserved.
        </p>
      </div>
    </footer>
  );
};

export default Footer;
