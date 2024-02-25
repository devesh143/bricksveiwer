import { Button } from "@/components/ui/button";
import {
  Card,
  CardContent,
  CardDescription,
  CardFooter,
  CardHeader,
  CardTitle,
} from "@/components/ui/card";

import { FaMapPin } from "react-icons/fa";

import Image from "next/image";
import Link from "next/link";

const Properties = () => {
  return (
    <section className="bg-white w-full ">
      <div className="container mx-auto flex flex-col items-center justify-center px-0 sm:px-5 md:px-10 lg:px-0">
        <div className="w-full mt-6 p-5 flex justify-center items-center">
          <h1 className="text-3xl text-center font-bold lg:text-4xl">
            Featured Properties
          </h1>
        </div>
        <div className="container w-full h-auto flex flex-col gap-10 justify-center items-center">
          <div className="w-full flex flex-col gap-10 justify-center lg:flex-row">
            <Link
              href="/properties/cityofdreams"
              className="w-full flex flex-col items-center border-2 border-gray-200 rounded-lg hover:border-black transition duration-500 ease-in-out lg:w-1/2"
            >
              <Card className="bg-gray-100 h-full flex flex-col justify-between opaParent">
                <CardHeader>
                  <CardTitle>
                    <h1 className="text-xl sm:text-2xl font-bold mb-2 md:text-3xl lg:text-4xl">
                      City of Dreams{" "}
                      <span className="text-xl sm:text-2xl font-bold md:text-3xl lg:text-4xl text-skyBlue">
                        {" "}
                        Apartments
                      </span>
                    </h1>
                    <CardDescription>
                      <p className="flex flex-wrap text-sm font-medium gap-2">
                        <span className="bg-skyBlue text-white py-1 px-2 rounded-md">
                          2BHK
                        </span>
                        <span className="bg-skyBlue text-white py-1 px-2 rounded-md">
                          3BHK
                        </span>
                        <span className="bg-skyBlue text-white py-1 px-2 rounded-md">
                          Residential
                        </span>
                      </p>
                    </CardDescription>
                  </CardTitle>
                  <div className="dContainer bg-black rounded-lg">
                    <Image
                      src="/properties/sbp/sbp.png"
                      width={600}
                      height={300}
                      alt="featured"
                      className="rounded-lg h-full w-full opa"
                    />
                    <div className="dot dLeft"></div>
                    <div className="dot dMid"></div>
                    <div className="dot dRight"></div>
                  </div>
                </CardHeader>
                <CardContent>
                  <div className="flex justify-start items-center text-lg md:text-xl font-bold mb-4">
                    <FaMapPin />
                    <h3 className="w-full text-justify">
                      Address:{" "}
                      <span className="text-skyBlue">
                        Kharar - Landran Road, Mohali , Punjab
                      </span>
                    </h3>
                  </div>
                  <p className="text-gray-500 w-full text-justify text-sm md:text-base">
                    City of Dreams is a residential project by SBP Group in{" "}
                    <strong>Landran Road, Mohali, Punjab</strong> . The project
                    offers <strong>2BHK and 3BHK apartments</strong> with
                    perfect combination of contemporary architecture and
                    features to provide comfortable living.
                  </p>
                </CardContent>
                <CardFooter className="flex flex-col items-start justify-start">
                  <h2 className="text-xl sm:text-2xl font-bold">
                    Starting at{" "}
                    <span className="font-bold text-skyBlue">₹ 73.90 Lacs</span>
                  </h2>
                  <div className="w-full flex justify-between items-end gap-10 mt-4 sm:mt-2">
                    <Button className="bg-skyBlue text-white font-bold py-1 px-2 md:py-2 md:px-4 hover:bg-transparent transform hover:-translate-y-1 hover:text-skyBlue hover:scale-[102%] rounded-md transition duration-500 ease-in-out border-skyBlue border-2">
                      View Property
                    </Button>
                    <Image
                      src="/cityofdreams.png"
                      width={50}
                      height={50}
                      alt="logo"
                      className="rounded"
                    />
                  </div>
                </CardFooter>
              </Card>
            </Link>
            <Link
              href="/properties/foressta"
              className="w-full flex flex-col items-center border-2 border-gray-200 rounded-lg hover:border-black transition duration-500 ease-in-out lg:w-1/2"
            >
              <Card className="bg-gray-100 h-full flex flex-col justify-between opaParent">
                <CardHeader>
                  <CardTitle>
                    <h1 className="text-xl sm:text-2xl font-bold mb-2 md:text-3xl lg:text-4xl">
                      <span className="text-xl sm:text-2xl font-bold md:text-3xl lg:text-4xl text-safron">
                        Foressta{" "}
                      </span>
                      Serviced Suites/Villas
                    </h1>
                    <CardDescription>
                      <p className="flex flex-wrap text-sm font-medium gap-2">
                        <span className="bg-safron text-white py-1 px-2 rounded-md">
                          Suite
                        </span>
                        <span className="bg-safron text-white py-1 px-2 rounded-md">
                          Villa
                        </span>
                        <span className="bg-safron text-white py-1 px-2 rounded-md">
                          Residential
                        </span>
                        <span className="bg-safron text-white py-1 px-2 rounded-md">
                          Exotic
                        </span>
                      </p>
                    </CardDescription>
                  </CardTitle>
                  <div className="dContainer bg-black rounded-lg">
                    <Image
                      src="/images/hero/2.jpg"
                      width={600}
                      height={300}
                      alt="featured"
                      className="rounded-lg h-full w-full opa"
                    />
                    <div className="dot dLeft"></div>
                    <div className="dot dMid"></div>
                    <div className="dot dRight"></div>
                  </div>
                </CardHeader>
                <CardContent>
                  <div className="flex justify-start items-center text-lg md:text-xl font-bold mb-4">
                    <FaMapPin />
                    <h3 className="w-full text-justify">
                      Address:{" "}
                      <span className="text-safron">
                        Solan, Himachal Pradesh
                      </span>
                    </h3>
                  </div>
                  <p className="text-gray-500 w-full text-justify text-sm md:text-base">
                    Located in <strong>Solan, Himachal Pradesh</strong>,
                    Foressta is a unique blend of nature and luxury. It is a
                    place where you can live life to the fullest.
                  </p>
                </CardContent>
                <CardFooter className="flex flex-col items-start justify-start">
                  <h2 className="text-xl sm:text-2xl font-bold flex flex-col md:flex-row md:gap-3">
                    Starting at
                    <span className="font-bold text-safron"> ₹ 2.1 Crore</span>
                  </h2>
                  <div className="w-full flex justify-between items-end gap-10 mt-4 sm:mt-2">
                    <Button className="bg-safron text-white font-bold py-1 px-2 md:py-2 md:px-4 hover:bg-transparent transform hover:-translate-y-1 hover:text-safron hover:scale-[102%] rounded-md transition duration-500 ease-in-out border-safron border-2">
                      View Property
                    </Button>
                  </div>
                </CardFooter>
              </Card>
            </Link>
          </div>
          <div className="w-full flex flex-col-reverse gap-10 justify-center items-center lg:flex-row">
            <Link
              href="/properties/gateway"
              className="w-full flex flex-col items-center border-2 border-gray-200 rounded-lg hover:border-black transition duration-500 ease-in-out lg:w-1/2"
            >
              <Card className="bg-gray-100 h-full flex flex-col justify-between opaParent">
                <CardHeader>
                  <CardTitle>
                    <h1 className="text-xl sm:text-2xl font-bold mb-2 md:text-3xl lg:text-4xl">
                      The Gateway{" "}
                      <span className="text-xl sm:text-2xl font-bold md:text-3xl lg:text-4xl text-safron">
                        {" "}
                        Property
                      </span>
                    </h1>
                    <CardDescription>
                      <p className="flex flex-wrap text-sm font-medium gap-2">
                        <span className="bg-safron text-white py-1 px-2 rounded-md">
                          3BHK
                        </span>
                        <span className="bg-safron text-white py-1 px-2 rounded-md">
                          Residential
                        </span>
                      </p>
                    </CardDescription>
                  </CardTitle>
                  <div className="dContainer bg-black rounded-lg">
                    <Image
                      src="/images/gateway/gateway.png"
                      width={600}
                      height={300}
                      alt="featured"
                      className="rounded-lg h-full w-full opa"
                    />
                    <div className="dot dLeft"></div>
                    <div className="dot dMid"></div>
                    <div className="dot dRight"></div>
                  </div>
                </CardHeader>
                <CardContent>
                  <div className="flex justify-start items-center text-lg md:text-xl font-bold mb-4">
                    <FaMapPin />
                    <h3 className="w-full text-justify">
                      Address:{" "}
                      <span className="text-safron">
                        Chandigarh-Ludhiana Highway, NH-95, Kharar, S.A.S Nagar,
                        Punjab
                      </span>
                    </h3>
                  </div>
                  <p className="text-gray-500 w-full text-justify text-sm md:text-base">
                    Township nestled along the{" "}
                    <strong>Chandigarh-Ludhiana Expressway</strong>.
                  </p>
                </CardContent>
                <CardFooter className="flex flex-col items-start justify-start">
                  <h2 className="text-xl sm:text-2xl font-bold flex flex-col md:flex-row md:gap-3">
                    Starting at
                    <span className="font-bold text-safron"> ₹ 30.20 Lacs</span>
                  </h2>
                  <div className="w-full flex justify-between items-end gap-10 mt-4 sm:mt-2">
                    <Button className="bg-safron text-white font-bold py-1 px-2 md:py-2 md:px-4 hover:bg-transparent transform hover:-translate-y-1 hover:text-safron hover:scale-[102%] rounded-md transition duration-500 ease-in-out border-safron border-2">
                      View Property
                    </Button>
                    <Image
                      src="/images/gateway/logo.png"
                      width={50}
                      height={50}
                      alt="logo"
                      className="rounded"
                    />
                  </div>
                </CardFooter>
              </Card>
            </Link>
            <Link
              href="/properties/mewsgate"
              className="w-full flex flex-col items-center border-2 border-gray-200 rounded-lg hover:border-black transition duration-500 ease-in-out lg:w-1/2"
            >
              <Card className="bg-gray-100 h-full flex flex-col justify-between opaParent">
                <CardHeader>
                  <CardTitle>
                    <h1 className="text-xl sm:text-2xl font-bold mb-2 md:text-3xl lg:text-4xl">
                      Mews Gate{" "}
                      <span className="text-xl sm:text-2xl font-bold md:text-3xl lg:text-4xl text-skyBlue">
                        {" "}
                        Property
                      </span>
                    </h1>
                    <CardDescription>
                      <p className="flex flex-wrap text-sm font-medium gap-2">
                        <span className="bg-skyBlue text-white py-1 px-2 rounded-md">
                          2BHK
                        </span>
                        <span className="bg-skyBlue text-white py-1 px-2 rounded-md">
                          3BHK
                        </span>
                        <span className="bg-skyBlue text-white py-1 px-2 rounded-md">
                          4BHK
                        </span>
                        <span className="bg-skyBlue text-white py-1 px-2 rounded-md">
                          Residential
                        </span>
                      </p>
                    </CardDescription>
                  </CardTitle>
                  <div className="dContainer bg-black rounded-lg">
                    <Image
                      src="/images/mewsgate/mewsgate.png"
                      width={600}
                      height={300}
                      alt="featured"
                      className="rounded-lg h-full w-full opa"
                    />
                    <div className="dot dLeft"></div>
                    <div className="dot dMid"></div>
                    <div className="dot dRight"></div>
                  </div>
                </CardHeader>
                <CardContent>
                  <div className="flex justify-start items-center text-lg md:text-xl font-bold mb-4">
                    <FaMapPin />
                    <h3 className="w-full text-justify">
                      Address:{" "}
                      <span className="text-skyBlue">
                        NH21, Kharar - Kurali Road
                      </span>
                    </h3>
                  </div>
                  <p className="text-gray-500 w-full text-justify text-sm md:text-base">
                    Mews Gate is One of the most admired address on{" "}
                    <strong>NH21, Kharar - Kurali Road</strong>. It is
                    surrounded by well developed commercial projects and
                    educational institutions.
                  </p>
                </CardContent>
                <CardFooter className="flex flex-col items-start justify-start">
                  <h2 className="text-xl sm:text-2xl font-bold flex flex-col md:flex-row md:gap-3">
                    Starting at
                    <span className="font-bold text-skyBlue">
                      {" "}
                      ₹ 70.95 Lacs
                    </span>
                  </h2>
                  <div className="w-full flex justify-between items-end gap-10 mt-4 sm:mt-2">
                    <Button className="bg-skyBlue text-white font-bold py-1 px-2 md:py-2 md:px-4 hover:bg-transparent transform hover:-translate-y-1 hover:text-skyBlue hover:scale-[102%] rounded-md transition duration-500 ease-in-out border-skyBlue border-2">
                      View Property
                    </Button>
                    <Image
                      src="/images/mewsgate/logo.png"
                      width={50}
                      height={50}
                      alt="logo"
                      className="rounded"
                    />
                  </div>
                </CardFooter>
              </Card>
            </Link>
          </div>
          <div className="w-full flex flex-col gap-10 justify-center lg:flex-row">
            <Link
              href="/properties/anantham"
              className="w-full flex flex-col items-center border-2 border-gray-200 rounded-lg hover:border-black transition duration-500 ease-in-out lg:w-1/2"
            >
              <Card className="bg-gray-100 h-full flex flex-col justify-between opaParent">
                <CardHeader>
                  <CardTitle>
                    <h1 className="text-xl sm:text-2xl font-bold mb-2 md:text-3xl lg:text-4xl">
                      Anantham{" "}
                      <span className="text-xl sm:text-2xl font-bold md:text-3xl lg:text-4xl text-skyBlue">
                        {" "}
                        Ifcon
                      </span>
                    </h1>
                    <CardDescription>
                      <p className="flex flex-wrap text-sm font-medium gap-2">
                        <span className="bg-skyBlue text-white py-1 px-2 rounded-md">
                          3BHK
                        </span>
                        <span className="bg-skyBlue text-white py-1 px-2 rounded-md">
                          Luxury
                        </span>
                      </p>
                    </CardDescription>
                  </CardTitle>
                  <div className="dContainer bg-black rounded-lg">
                    <Image
                      src="/properties/anantham/image (1).jpg"
                      width={600}
                      height={300}
                      alt="featured"
                      className="rounded-lg h-full w-full opa"
                    />
                    <div className="dot dLeft"></div>
                    <div className="dot dMid"></div>
                    <div className="dot dRight"></div>
                  </div>
                </CardHeader>
                <CardContent>
                  <div className="flex justify-start items-center text-lg md:text-xl font-bold mb-4">
                    <FaMapPin />
                    <h3 className="w-full text-justify">
                      Address:{" "}
                      <span className="text-skyBlue">
                        Kharar - Landran Road, Mohali , Punjab
                      </span>
                    </h3>
                  </div>
                  <p className="text-gray-500 w-full text-justify text-sm md:text-base">
                    Featuring a <strong>3BHK Luxury Apartment</strong> with a
                    Family Lounge, 3 Bedrooms, Modular Open Kitchen, and Lift
                    Lobby. Make your dream home a reality with Anantham.
                  </p>
                </CardContent>
                <CardFooter className="flex flex-col items-start justify-start">
                  <h2 className="text-xl sm:text-2xl font-bold">
                    Starting at{" "}
                    <span className="font-bold text-skyBlue">₹ 59.90 Lacs</span>
                  </h2>
                  <div className="w-full flex justify-between items-end gap-10 mt-4 sm:mt-2">
                    <Button className="bg-skyBlue text-white font-bold py-1 px-2 md:py-2 md:px-4 hover:bg-transparent transform hover:-translate-y-1 hover:text-skyBlue hover:scale-[102%] rounded-md transition duration-500 ease-in-out border-skyBlue border-2">
                      View Property
                    </Button>
                  </div>
                </CardFooter>
              </Card>
            </Link>
            <Link
              href="/properties/ckhomes"
              className="w-full flex flex-col items-center border-2 border-gray-200 rounded-lg hover:border-black transition duration-500 ease-in-out lg:w-1/2"
            >
              <Card className="bg-gray-100 h-full flex flex-col justify-between opaParent">
                <CardHeader>
                  <CardTitle>
                    <h1 className="text-xl sm:text-2xl font-bold mb-2 md:text-3xl lg:text-4xl">
                      <span className="text-xl sm:text-2xl font-bold md:text-3xl lg:text-4xl text-safron">
                        CK{" "}
                      </span>
                      <span className="text-skyBlue">1 BHK</span> Homes
                    </h1>
                    <CardDescription>
                      <p className="flex flex-wrap text-sm font-medium gap-2">
                        <span className="bg-safron text-white py-1 px-2 rounded-md">
                          1BHK
                        </span>
                        <span className="bg-safron text-white py-1 px-2 rounded-md">
                          Residential
                        </span>
                      </p>
                    </CardDescription>
                  </CardTitle>
                  <div className="dContainer bg-black rounded-lg">
                    <Image
                      src="/properties/ckhomes/image (3).jpg"
                      width={600}
                      height={300}
                      alt="featured"
                      className="rounded-lg h-full w-full opa"
                    />
                    <div className="dot dLeft"></div>
                    <div className="dot dMid"></div>
                    <div className="dot dRight"></div>
                  </div>
                </CardHeader>
                <CardContent>
                  <div className="flex justify-start items-center text-lg md:text-xl font-bold mb-4">
                    <FaMapPin />
                    <h3 className="w-full text-justify">
                      Address:{" "}
                      <span className="text-safron">
                        Kharar - Landran Road, Mohali , Punjab
                      </span>
                    </h3>
                  </div>
                  <p className="text-gray-500 w-full text-justify text-sm md:text-base">
                    Every fantasy has an imagination dwelled upon dreams, Every
                    and those Beautiful strings weave the structure of
                    magnificent homes, Embrace the foundation of very season
                    with Love, Magic & Wonder only at CK Homes.
                  </p>
                </CardContent>
                <CardFooter className="flex flex-col items-start justify-start">
                  <h2 className="text-xl sm:text-2xl font-bold flex flex-col md:flex-row md:gap-3">
                    Starting at
                    <span className="font-bold text-safron"> ₹ 22.90 Lacs</span>
                  </h2>
                  <div className="w-full flex justify-between items-end gap-10 mt-4 sm:mt-2">
                    <Button className="bg-safron text-white font-bold py-1 px-2 md:py-2 md:px-4 hover:bg-transparent transform hover:-translate-y-1 hover:text-safron hover:scale-[102%] rounded-md transition duration-500 ease-in-out border-safron border-2">
                      View Property
                    </Button>
                  </div>
                </CardFooter>
              </Card>
            </Link>
          </div>
          <div className="w-full flex flex-col-reverse gap-10 justify-center items-center lg:flex-row">
            <Link
              href="/properties/gatewaycommerce"
              className="w-full flex flex-col items-center border-2 border-gray-200 rounded-lg hover:border-black transition duration-500 ease-in-out lg:w-1/2"
            >
              <Card className="bg-gray-100 h-full flex flex-col justify-between opaParent">
                <CardHeader>
                  <CardTitle>
                    <h1 className="text-xl sm:text-2xl font-bold mb-2 md:text-3xl lg:text-4xl">
                      The Gateway{" "}
                      <span className="text-xl sm:text-2xl font-bold md:text-3xl lg:text-4xl text-safron">
                        {" "}
                        Commercial
                      </span>
                    </h1>
                    <CardDescription>
                      <p className="flex flex-wrap text-sm font-medium gap-2">
                        <span className="bg-safron text-white py-1 px-2 rounded-md">
                          Shops
                        </span>
                        <span className="bg-safron text-white py-1 px-2 rounded-md">
                          Showrooms
                        </span>
                        <span className="bg-safron text-white py-1 px-2 rounded-md">
                          Commercial
                        </span>
                      </p>
                    </CardDescription>
                  </CardTitle>
                  <div className="dContainer bg-black rounded-lg">
                    <Image
                      src="/properties/gatewayc/image.jpg"
                      width={600}
                      height={300}
                      alt="featured"
                      className="rounded-lg h-full w-full opa"
                    />
                    <div className="dot dLeft"></div>
                    <div className="dot dMid"></div>
                    <div className="dot dRight"></div>
                  </div>
                </CardHeader>
                <CardContent>
                  <div className="flex justify-start items-center text-lg md:text-xl font-bold mb-4">
                    <FaMapPin />
                    <h3 className="w-full text-justify">
                      Address:{" "}
                      <span className="text-safron">
                        Chandigarh-Ludhiana Highway, NH-95, Kharar, S.A.S Nagar,
                        Punjab
                      </span>
                    </h3>
                  </div>
                  <p className="text-gray-500 w-full text-justify text-sm md:text-base">
                    The bustling commercial corner in{" "}
                    <strong>The Gateway</strong> premises is a boon for the
                    residents and businessmen alike. The Gateway offers a wide
                    range of commercial spaces to suit every need.
                  </p>
                </CardContent>
                <CardFooter className="flex flex-col items-start justify-start">
                  <h2 className="text-xl sm:text-2xl font-bold flex flex-col md:flex-row md:gap-3">
                    Starting at
                    <span className="font-bold text-safron">
                      {" "}
                      ₹ 1.90 crores
                    </span>
                  </h2>
                  <div className="w-full flex justify-between items-end gap-10 mt-4 sm:mt-2">
                    <Button className="bg-safron text-white font-bold py-1 px-2 md:py-2 md:px-4 hover:bg-transparent transform hover:-translate-y-1 hover:text-safron hover:scale-[102%] rounded-md transition duration-500 ease-in-out border-safron border-2">
                      View Property
                    </Button>
                    <Image
                      src="/images/gateway/logo.png"
                      width={50}
                      height={50}
                      alt="logo"
                      className="rounded"
                    />
                  </div>
                </CardFooter>
              </Card>
            </Link>
            <Link
              href="/properties/motiagroup"
              className="w-full flex flex-col items-center border-2 border-gray-200 rounded-lg hover:border-black transition duration-500 ease-in-out lg:w-1/2"
            >
              <Card className="bg-gray-100 h-full flex flex-col justify-between opaParent">
                <CardHeader>
                  <CardTitle>
                    <h1 className="text-xl sm:text-2xl font-bold mb-2 md:text-3xl lg:text-4xl">
                      Motia Group
                    </h1>
                    <CardDescription>
                      <p className="flex flex-wrap text-sm font-medium gap-2">
                        <span className="bg-skyBlue text-white py-1 px-2 rounded-md">
                          2BHK
                        </span>
                        <span className="bg-skyBlue text-white py-1 px-2 rounded-md">
                          Residential
                        </span>
                        <span className="bg-skyBlue text-white py-1 px-2 rounded-md">
                          Luxury
                        </span>
                      </p>
                    </CardDescription>
                  </CardTitle>
                  <div className="dContainer bg-black rounded-lg">
                    <Image
                      src="/properties/motiagroup/image.jpg"
                      width={600}
                      height={300}
                      alt="featured"
                      className="rounded-lg h-full w-full opa"
                    />
                    <div className="dot dLeft"></div>
                    <div className="dot dMid"></div>
                    <div className="dot dRight"></div>
                  </div>
                </CardHeader>
                <CardContent>
                  <div className="flex justify-start items-center text-lg md:text-xl font-bold mb-4">
                    <FaMapPin />
                    <h3 className="w-full text-justify">
                      Address:{" "}
                      <span className="text-skyBlue">
                        Landran Road, Mohali, Punjab
                      </span>
                    </h3>
                  </div>
                  <p className="text-gray-500 w-full text-justify text-sm md:text-base">
                    Royal Homes is a well planned township with a team of
                    professional architects and designers. The project is
                    designed to provide the best of amenities and facilities to
                    its residents.
                  </p>
                </CardContent>
                <CardFooter className="flex flex-col items-start justify-start">
                  <h2 className="text-xl sm:text-2xl font-bold flex flex-col md:flex-row md:gap-3">
                    Starting at
                    <span className="font-bold text-skyBlue">
                      {" "}
                      ₹ 42.90 Lacs
                    </span>
                  </h2>
                  <div className="w-full flex justify-between items-end gap-10 mt-4 sm:mt-2">
                    <Button className="bg-skyBlue text-white font-bold py-1 px-2 md:py-2 md:px-4 hover:bg-transparent transform hover:-translate-y-1 hover:text-skyBlue hover:scale-[102%] rounded-md transition duration-500 ease-in-out border-skyBlue border-2">
                      View Property
                    </Button>
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
