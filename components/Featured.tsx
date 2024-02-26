import { FC } from "react";
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

interface PropertyProps {
  href: string;
  title: string;
  tags: string[];
  desc: string;
  address: string;
  startingPrice: string;
  imageSrc: string;
  imageAlt: string;
}

const Property: FC<PropertyProps> = ({
  href,
  title,
  tags,
  address,
  desc,
  startingPrice,
  imageSrc,
  imageAlt,
}) => {
  return (
    <Link
      href={href}
      className="w-full flex flex-col items-center border-2 border-gray-200 rounded-lg hover:border-black transition duration-500 ease-in-out lg:w-1/2"
    >
      <Card className="bg-gray-100 h-full flex flex-col justify-between opaParent">
        <CardHeader>
          <CardTitle>
            <h1 className="text-skyBlue text-xl sm:text-2xl font-bold mb-2 md:text-3xl lg:text-4xl">
              {title}
            </h1>
            <CardDescription>
              <p className="flex flex-wrap text-sm font-medium gap-2">
                {tags.map((tag, index) => (
                  <span
                    key={index}
                    className="bg-safron text-white px-2 py-1 rounded-md"
                  >
                    {tag}
                  </span>
                ))}
              </p>
            </CardDescription>
          </CardTitle>
          <div className="dContainer bg-black rounded-lg">
            <Image
              src={imageSrc}
              width={600}
              height={300}
              alt={imageAlt}
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
              Address: <span className="text-skyBlue">{address}</span>
            </h3>
          </div>
          <p
            className="text-gray-500 w-full text-justify text-sm md:text-base"
            dangerouslySetInnerHTML={{ __html: desc }}
          ></p>
        </CardContent>
        <CardFooter className="flex flex-col items-start justify-start">
          <h2 className="text-xl sm:text-2xl font-bold">
            Starting at{" "}
            <span className="font-bold text-safron">{startingPrice}</span>
          </h2>
          <div className="w-full flex justify-between items-end gap-10 mt-4 sm:mt-2">
            <Button className="bg-skyBlue text-white font-bold py-1 px-2 md:py-2 md:px-4 hover:bg-transparent transform hover:-translate-y-1 hover:text-skyBlue hover:scale-[102%] rounded-md transition duration-500 ease-in-out border-skyBlue border-2">
              View Property
            </Button>
          </div>
        </CardFooter>
      </Card>
    </Link>
  );
};

const Properties: FC = () => {
  const properties: PropertyProps[] = [
    {
      href: "/properties/cityofdreams",
      title: "City of Dreams Apartments",
      tags: ["3 BHK", "4 BHK", "5 BHK", "Penthouse"],
      desc: `City of Dreams is a residential project by SBP Group in
            <strong>Landran Road, Mohali, Punjab</strong> . The project
            offers <strong>2BHK and 3BHK apartments</strong> with
            perfect combination of contemporary architecture and
            features to provide comfortable living.`,
      address: "Kharar - Landran Road, Mohali , Punjab",
      startingPrice: "₹ 73.90 Lacs",
      imageSrc: "/properties/sbp/sbp.png",
      imageAlt: "City of Dreams",
    },
    {
      href: "/properties/motiagroup",
      title: "Motia Group",
      tags: ["2 BHK", "Residential", "Luxury"],
      desc: `Royal Homes is a well planned township with a team of
            professional architects and designers. The project is
            designed to provide the best of amenities and facilities to
            its residents.`,
      address: "Landran Road, Mohali, Punjab",
      startingPrice: "₹ 42.90 Lacs",
      imageSrc: "/properties/motiagroup/image.jpg",
      imageAlt: "Motia Group",
    },
    {
      href: "/properties/gateway",
      title: "The Gateway Property",
      tags: ["3 BHK", "Residential"],
      desc: `Township nestled along the <strong>Chandigarh-Ludhiana Expressway</strong>.
            The Gateway is a perfect blend of contemporary and modern
            architecture. It is a place where you can live life to the
            fullest.`,
      address:
        "Chandigarh-Ludhiana Highway, NH-95, Kharar, S.A.S Nagar, Punjab",
      startingPrice: "₹ 74.90 Lacs",
      imageSrc: "/images/gateway/gateway.png",
      imageAlt: "The Gateway",
    },
    {
      href: "/properties/mewsgate",
      title: "Mews Gate Property",
      tags: ["2 BHK", "3 BHK", "4 BHK", "Residential"],
      desc: `Mews Gate is One of the most admired address on
            <strong>NH21, Kharar - Kurali Road</strong>. It is
            surrounded by well developed commercial projects and
            educational institutions.`,
      address: "NH21, Kharar - Kurali Road",
      startingPrice: "₹ 70.95 Lacs",
      imageSrc: "/images/mewsgate/mewsgate.png",
      imageAlt: "Mews Gate",
    },
    {
      href: "/properties/anantham",
      title: "Anantham Ifcon",
      tags: ["3 BHK", "Luxury"],
      desc: `Featuring a <strong>3BHK Luxury Apartment</strong> with a
            Family Lounge, 3 Bedrooms, Modular Open Kitchen, and Lift
            Lobby. Make your dream home a reality with Anantham.`,
      address: "Kharar - Landran Road, Mohali , Punjab",
      startingPrice: "₹ 59.90 Lacs",
      imageSrc: "/properties/anantham/image (1).jpg",
      imageAlt: "Anantham",
    },
    {
      href: "/properties/ckhomes",
      title: "CK 1 BHK Homes",
      tags: ["1 BHK", "Residential"],
      desc: `Every fantasy has an imagination dwelled upon dreams, Every
            and those Beautiful strings weave the structure of
            magnificent homes, Embrace the foundation of very season
            with Love, Magic & Wonder only at CK Homes.`,
      address: "Kharar - Landran Road, Mohali , Punjab",
      startingPrice: "₹ 22.90 Lacs",
      imageSrc: "/properties/ckhomes/image (3).jpg",
      imageAlt: "CK Homes",
    },
    {
      href: "/properties/gatewaycommerce",
      title: "The Gateway Commercial",
      tags: ["Shops", "Showrooms", "Commercial"],
      desc: `The bustling commercial corner in
            <strong>The Gateway</strong> premises is a boon for the
            residents and businessmen alike. The Gateway offers a wide
            range of commercial spaces to suit every need.`,
      address:
        "Chandigarh-Ludhiana Highway, NH-95, Kharar, S.A.S Nagar, Punjab",
      startingPrice: "₹ 1.90 crores",
      imageSrc: "/properties/gatewayc/image.jpg",
      imageAlt: "The Gateway Commercial",
    },
    {
      href: "/properties/foressta",
      title: "Foressta Serviced Suites/Villas",
      tags: ["Suite", "Villa", "Residential", "Exotic"],
      desc: `Located in <strong>Solan, Himachal Pradesh</strong>,
              Foressta is a unique blend of nature and luxury. It is a
              place where you can live life to the fullest.`,
      address: "Solan, Himachal Pradesh",
      startingPrice: "₹ 2.1 Crore",
      imageSrc: "/images/hero/2.jpg",
      imageAlt: "Foressta",
    },
  ];

  var rowSize = 2;

  return (
    <section className="bg-white w-full ">
      <div className="container mx-auto flex flex-col items-center justify-center px-0 sm:px-5 md:px-10 lg:px-0">
        <div className="w-full mt-6 p-5 flex justify-center items-center">
          <h1 className="text-3xl text-center font-bold lg:text-4xl">
            Featured Properties
          </h1>
        </div>
        <div className="container w-full h-auto flex flex-col gap-10 justify-center items-center">
          {properties.map((property, index) => {
            if (index % rowSize === 0) {
              return (
                <div
                  key={index}
                  className="w-full flex flex-col gap-5 md:flex-row md:gap-5 lg:gap-10"
                >
                  <Property
                    href={property.href}
                    title={property.title}
                    tags={property.tags}
                    desc={property.desc}
                    address={property.address}
                    startingPrice={property.startingPrice}
                    imageSrc={property.imageSrc}
                    imageAlt={property.imageAlt}
                  />
                  {properties[index + 1] && (
                    <Property
                      href={properties[index + 1].href}
                      title={properties[index + 1].title}
                      tags={properties[index + 1].tags}
                      desc={properties[index + 1].desc}
                      address={properties[index + 1].address}
                      startingPrice={properties[index + 1].startingPrice}
                      imageSrc={properties[index + 1].imageSrc}
                      imageAlt={properties[index + 1].imageAlt}
                    />
                  )}
                </div>
              );
            }
          })}
        </div>
      </div>
    </section>
  );
};

export default Properties;
