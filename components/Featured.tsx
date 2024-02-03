import { Button } from "@/components/ui/button";
import {
  Card,
  CardContent,
  CardDescription,
  CardFooter,
  CardHeader,
  CardTitle,
} from "@/components/ui/card";

import Image from "next/image";
import Link from "next/link";

const Properties = () => {
  return (
    <section className="bg-white w-full ">
      <div className="container mx-auto flex flex-col items-center justify-center px-5 md:px-10 lg:px-0">
        <div className="w-full mt-10 p-8 flex justify-center items-center">
          <h1 className="text-2xl text-center font-bold lg:text-4xl">
            Featured Properties
          </h1>
        </div>
        <div className="container w-full h-auto flex flex-col gap-10 justify-center items-center">
          <div className="w-full flex flex-col gap-10 justify-center lg:flex-row">
            <Link
              href="/properties/mewsgate"
              className="w-full flex flex-col items-center  border-2 border-gray-200 rounded-lg hover:border-skyBlue transition duration-500 ease-in-out lg:w-1/2"
            >
              <Card className="bg-gray-100 h-full opaParent">
                <CardHeader>
                  <CardTitle className="text-2xl font-bold mb-2 md:text-3xl lg:text-4xl">
                    Mews Gate{" "}
                    <span className="text-2xl font-bold md:text-3xl lg:text-4xl text-skyBlue">
                      {" "}
                      Property
                    </span>
                  </CardTitle>
                  <div className="dContainer bg-black rounded-lg">
                    <Image
                      src="/images/mewsgate/mewsgate.png"
                      width={600}
                      height={300}
                      alt="featured"
                      className="rounded-lg h-full w-full border-skyBlue border-2 opa"
                    />
                    <div className="dot dLeft"></div>
                    <div className="dot dMid"></div>
                    <div className="dot dRight"></div>
                  </div>
                </CardHeader>
                <CardContent>
                  <p className="text-gray-500 w-full text-justify text-sm md:text-base">
                    Make Mews Gate your address and enjoy the elite company of
                    like minded people. A place where you can live live to
                  </p>
                </CardContent>
                <CardFooter className="flex flex-col items-start justify-start">
                  <h2 className="text-2xl font-bold flex flex-col md:flex-row gap-3">
                    Starting at
                    <span className="font-bold text-skyBlue">
                      {" "}
                      ₹ 25.90 Lacs
                    </span>
                  </h2>
                  <div className="w-full flex justify-between items-end">
                    <Button className="bg-skyBlue text-white font-bold py-2 px-4 hover:bg-transparent transform hover:-translate-y-1 hover:text-skyBlue hover:scale-[102%] rounded-md transition duration-500 ease-in-out border-skyBlue border-2">
                      View Property
                    </Button>
                    <Image
                      src="/images/mewsgate/logo.png"
                      width={80}
                      height={80}
                      alt="logo"
                      className="rounded"
                    />
                  </div>
                </CardFooter>
              </Card>
            </Link>
            <Link
              href="/properties/gateway"
              className="w-full flex flex-col border-2 border-gray-200 rounded-lg hover:border-safron transition duration-500 ease-in-out lg:w-1/2"
            >
              <Card className="bg-gray-100 h-full opaParent">
                <CardHeader>
                  <CardTitle className="text-2xl font-bold mb-2 md:text-3xl lg:text-4xl">
                    The Gateway{" "}
                    <span className="text-2xl font-bold md:text-3xl lg:text-4xl text-safron">
                      {" "}
                      Property
                    </span>
                  </CardTitle>
                  <div className="dContainer bg-black rounded-lg">
                    <Image
                      src="/images/gateway/gateway.png"
                      width={600}
                      height={300}
                      alt="featured"
                      className="rounded-lg h-full w-full border-safron border-2 opa"
                    />
                    <div className="dot dLeft"></div>
                    <div className="dot dMid"></div>
                    <div className="dot dRight"></div>
                  </div>
                </CardHeader>
                <CardContent>
                  <p className="text-gray-500 w-full text-justify text-sm md:text-base">
                    Township nestled along the Chandigarh-Ludhiana Expressway
                    sprawling around ten acres, conjuring all elements of
                    blissful luxury.
                  </p>
                </CardContent>
                <CardFooter className="flex flex-col items-start justify-start">
                  <h2 className="text-2xl font-bold flex flex-col md:flex-row gap-3">
                    Starting at
                    <span className="font-bold text-safron"> ₹ 30.20 Lacs</span>
                  </h2>
                  <div className="w-full flex justify-between items-end">
                    <Button className="bg-safron text-white font-bold py-2 px-4 hover:bg-transparent transform hover:-translate-y-1 hover:text-safron hover:scale-[102%] rounded-md transition duration-500 ease-in-out border-safron border-2">
                      View Property
                    </Button>
                    <Image
                      src="/images/gateway/logo.png"
                      width={80}
                      height={80}
                      alt="logo"
                      className="rounded"
                    />
                  </div>
                </CardFooter>
              </Card>
            </Link>
          </div>
          <div className="w-full flex flex-col gap-10 justify-center items-center lg:flex-row">
            <Link
              href="/properties/gateway"
              className="w-full flex flex-col border-2 border-gray-200 rounded-lg hover:border-safron transition duration-500 ease-in-out lg:w-1/2"
            >
              <Card className="bg-gray-100 h-full opaParent">
                <CardHeader>
                  <CardTitle className="text-2xl font-bold mb-2 md:text-3xl lg:text-4xl">
                    The Gateway{" "}
                    <span className="text-2xl font-bold md:text-3xl lg:text-4xl text-safron">
                      {" "}
                      Property
                    </span>
                  </CardTitle>
                  <div className="dContainer bg-black rounded-lg">
                    <Image
                      src="/images/gateway/gateway.png"
                      width={600}
                      height={300}
                      alt="featured"
                      className="rounded-lg h-full w-full border-safron border-2 opa"
                    />
                    <div className="dot dLeft"></div>
                    <div className="dot dMid"></div>
                    <div className="dot dRight"></div>
                  </div>
                </CardHeader>
                <CardContent>
                  <p className="text-gray-500 w-full text-justify text-sm md:text-base">
                    Township nestled along the Chandigarh-Ludhiana Expressway
                    sprawling around ten acres, conjuring all elements of
                    blissful luxury.
                  </p>
                </CardContent>
                <CardFooter className="flex flex-col items-start justify-start">
                  <h2 className="text-2xl font-bold flex flex-col md:flex-row gap-3">
                    Starting at
                    <span className="font-bold text-safron"> ₹ 30.20 Lacs</span>
                  </h2>
                  <div className="w-full flex justify-between items-end">
                    <Button className="bg-safron text-white font-bold py-2 px-4 hover:bg-transparent transform hover:-translate-y-1 hover:text-safron hover:scale-[102%] rounded-md transition duration-500 ease-in-out border-safron border-2">
                      View Property
                    </Button>
                    <Image
                      src="/images/gateway/logo.png"
                      width={80}
                      height={80}
                      alt="logo"
                      className="rounded"
                    />
                  </div>
                </CardFooter>
              </Card>
            </Link>
            <Link
              href="/properties/mewsgate"
              className="w-full flex flex-col items-center  border-2 border-gray-200 rounded-lg hover:border-skyBlue transition duration-500 ease-in-out lg:w-1/2"
            >
              <Card className="bg-gray-100 h-full opaParent">
                <CardHeader>
                  <CardTitle className="text-2xl font-bold mb-2 md:text-3xl lg:text-4xl">
                    Mews Gate{" "}
                    <span className="text-2xl font-bold md:text-3xl lg:text-4xl text-skyBlue">
                      {" "}
                      Property
                    </span>
                  </CardTitle>
                  <div className="dContainer bg-black rounded-lg">
                    <Image
                      src="/images/mewsgate/mewsgate.png"
                      width={600}
                      height={300}
                      alt="featured"
                      className="rounded-lg h-full w-full border-skyBlue border-2 opa"
                    />
                    <div className="dot dLeft"></div>
                    <div className="dot dMid"></div>
                    <div className="dot dRight"></div>
                  </div>
                </CardHeader>
                <CardContent>
                  <p className="text-gray-500 w-full text-justify text-sm md:text-base">
                    Make Mews Gate your address and enjoy the elite company of
                    like minded people. A place where you can live live to
                  </p>
                </CardContent>
                <CardFooter className="flex flex-col items-start justify-start">
                  <h2 className="text-2xl font-bold flex flex-col md:flex-row gap-3">
                    Starting at
                    <span className="font-bold text-skyBlue">
                      {" "}
                      ₹ 25.90 Lacs
                    </span>
                  </h2>
                  <div className="w-full flex justify-between items-end">
                    <Button className="bg-skyBlue text-white font-bold py-2 px-4 hover:bg-transparent transform hover:-translate-y-1 hover:text-skyBlue hover:scale-[102%] rounded-md transition duration-500 ease-in-out border-skyBlue border-2">
                      View Property
                    </Button>
                    <Image
                      src="/images/mewsgate/logo.png"
                      width={80}
                      height={80}
                      alt="logo"
                      className="rounded"
                    />
                  </div>
                </CardFooter>
              </Card>
            </Link>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Properties;
