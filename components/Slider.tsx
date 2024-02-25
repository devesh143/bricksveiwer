import * as React from "react";

import { Card, CardContent, CardHeader } from "@/components/ui/card";
import {
  Carousel,
  CarouselContent,
  CarouselItem,
  CarouselNext,
  CarouselPrevious,
} from "@/components/ui/carousel";

import Image from "next/image";
import Link from "next/link";
import { Button } from "@/components/ui/button";

const cards = [
  {
    title: "Lounge Room",
    content: "",
    image: "/images/interior/INTERIOR (1).jpg",
  },
  {
    title: "Guest Room",
    content: "",
    image: "/images/interior/INTERIOR (2).jpg",
  },
  {
    title: "Bed Room",
    content: "",
    image: "/images/interior/INTERIOR (3).jpg",
  },
];

export function Slider() {
  return (
    <div className="w-full mt-20 bg-black p-5 " id="interior">
      <div className="container flex flex-col justify-center items-center md:flex-row">
        <div className="w-full flex justify-center items-center md:w-1/2">
          <Carousel className="w-full">
            <CarouselContent className="-ml-1">
              {cards.map((card, index) => (
                <CarouselItem key={index} className="pl-4 md:basis-1/2">
                  <Card className="w-full p-1 h-[200px] sm:h-[225px] md:h-[250px]">
                    <CardHeader className="bg-black w-full h-full p-2 relative">
                      <Image
                        src={card.image}
                        alt={card.title}
                        fill
                        className="w-full h-full object-cover object-center overflow-hidden rounded-lg z-0 opacity-90"
                      />
                    </CardHeader>
                    <CardContent className="w-[125px] flex bg-black bg-opacity-70 flex-col absolute items-center justify-center z-10 bottom-2 px-3 py-1 rounded-lg">
                      <h1 className="text-xl sm:text-2xl font-bold uppercase text-skyBlue">
                        {card.title}
                      </h1>
                      <p className="text-sm lowercase text-white">
                        {card.content}
                      </p>
                    </CardContent>
                  </Card>
                </CarouselItem>
              ))}
            </CarouselContent>
            <CarouselPrevious className="absolute left-4 text-safron border-safron border-4 bg-white" />
            <CarouselNext className="absolute right-4 text-safron border-safron border-4 bg-white" />
          </Carousel>
        </div>
        <div className="w-full flex flex-col justify-center items-start sm:p-5 md:p-10 lg:p-16 md:w-1/2">
          <h1 className="text-2xl sm:text-3xl md:text-4xl lg:text-5xl font-bold text-white text-left sm:text-center md:text-left mt-5 md:mt-0 px-2 md:px-0">
            Interior{" "}
            <span className="text-3xl sm:text-4xl md:text-5xl lg:text-6xl text-center text-safron">
              Design Services
            </span>
          </h1>
          <p
            className="text-sm sm:text-base md:text-lg
           lg:text-xl text-white text-justify px-2 md:px-0"
          >
            We provide interior design services for residential and commercial
            spaces. Our services include space planning, furniture and
            accessories selection, color consultation, and more.
          </p>
          <br />
          <p
            className="text-sm sm:text-base md:text-lg
            lg:text-xl text-white text-justify px-2 md:px-0"
          >
            To Learn More, Call Us at{" "}
          </p>
          <Link
            href="tel:+91-9779660624"
            className="mt-1 px-2 py-1 bg-safron border-safron border-2 text-white text-lg font-medium hover:text-safron hover:bg-white mx-2 sm:mx-0 rounded transition duration-300 ease-in-out hover:shadow-md"
          >
            +91-9779660624
          </Link>
        </div>
      </div>
    </div>
  );
}
