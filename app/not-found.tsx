import { Button } from "@/components/ui/button";
import Link from "next/link";

const NotFound = () => {
  return (
    <section className="w-full h-[500px] flex justify-center items-center">
      <div className="container flex flex-col justify-center items-center gap-3">
        <h1 className="text-7xl font-bold text-center">
          4<span className="text-skyBlue text-6xl">0</span>4
        </h1>
        <p className="text-3xl font-bold text-center">Page not found</p>
        <Link href="/" className="mt-10">
          <Button className="bg-safron text-white text-2xl font-bold border-safron border-2 hover:text-safron hover:bg-white transition-all duration-300 ease-in-out">
            Home
          </Button>
        </Link>
      </div>
    </section>
  );
};

export default NotFound;
