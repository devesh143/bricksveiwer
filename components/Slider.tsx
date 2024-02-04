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
import { Button } from "@/components/ui/button";

const cards = [
  {
    title: "Card 1",
    content: "Content 1",
    image: "/images/gateway/gateway.png",
  },
  {
    title: "Card 2",
    content: "Content 2",
    image: "/images/mewsgate/mewsgate.png",
  },
  {
    title: "Card 3",
    content: "Content 3",
    image: "/images/gateway/gateway.png",
  },
  {
    title: "Card 4",
    content: "Content 4",
    image: "/images/mewsgate/mewsgate.png",
  },
  {
    title: "Card 5",
    content: "Content 5",
    image: "/images/gateway/gateway.png",
  },
];

export function Slider() {
  return (
    <div className="w-full mt-20 bg-black py-20">
      <div className="container flex flex-col justify-center items-center md:flex-row">
        <div className="w-full flex justify-center items-center md:w-1/2">
          <Carousel className="w-full">
            <CarouselContent className="-ml-1">
              {cards.map((card, index) => (
                <CarouselItem
                  key={index}
                  className="pl-4 basis-1/2 lg:basis-1/3"
                >
                  <Card className="w-full h-full p-1 h-[200px] sm:h-[225px] md:h-[250px]">
                    <CardHeader className="bg-black w-full h-full p-2 relative">
                      <Image
                        src={card.image}
                        alt={card.title}
                        fill
                        className="w-full h-full object-cover object-center overflow-hidden rounded-lg z-0 opacity-90"
                      />
                    </CardHeader>
                    <CardContent className="w-[150px] flex bg-black bg-opacity-70 flex-col absolute items-center justify-center z-10 bottom-2 p-5 rounded-lg">
                      <h1 className="text-2xl font-bold text-skyBlue">
                        {card.title}
                      </h1>
                      <p className="text-sm text-white">{card.content}</p>
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
            Homes that are built on{" "}
            <span className="text-3xl sm:text-4xl md:text-5xl lg:text-6xl text-center text-safron">
              Dreams
            </span>
          </h1>
          <p
            className="text-sm sm:text-base md:text-lg
           lg:text-xl text-white text-justify px-2 md:px-0"
          >
            Lorem ipsum dolor sit amet, consectetur adipiscing elit. Aenean
            euismod bibendum laoreet.
          </p>
          <Button className="mt-5 bg-safron border-safron border-2 text-white text-lg font-medium hover:text-safron hover:bg-white">
            Learn More
          </Button>
        </div>
      </div>
    </div>
  );
}
