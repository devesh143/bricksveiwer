"use client";

import * as React from "react";
import Autoplay from "embla-carousel-autoplay";

import { Card, CardContent } from "@/components/ui/card";
import {
  Carousel,
  CarouselContent,
  CarouselItem,
  CarouselNext,
  CarouselPrevious,
} from "@/components/ui/carousel";

import Image from "next/image";
import { useEffect } from "react";

export default function Hero() {
  useEffect(() => {
    const typeWriter = (text: string, i: number, fnCallback: any) => {
      if (i < text.length) {
        const typewriteElement = document.querySelector(".typewrite");

        if (typewriteElement) {
          typewriteElement.innerHTML =
            text.substring(0, i + 1) + '<span aria-hidden="true"></span>';

          setTimeout(function () {
            typeWriter(text, i + 1, fnCallback);
          }, 100);
        }
      } else if (typeof fnCallback == "function") {
        setTimeout(fnCallback, 700);
      }
    };

    const StartTextAnimation = (i: number) => {
      if (i > 2) {
        i = 0;
      }

      const dataText = ["Trust", "Integrity", "Sold"];

      if (i < dataText[i].length) {
        typeWriter(dataText[i], 0, function () {
          i = i + 1;
          StartTextAnimation(i);
        });
      }
    };

    StartTextAnimation(0);
  }, []);

  const plugin = React.useRef(
    Autoplay({ delay: 5000, stopOnInteraction: false, stopOnMouseEnter: false })
  );

  return (
    <Carousel
      plugins={[plugin.current]}
      className="w-full h-dvh z-0"
      onMouseEnter={plugin.current.stop}
      onMouseLeave={plugin.current.reset}
    >
      <CarouselContent>
        <CarouselItem key="1">
          <Card className="bg-white ">
            <CardContent className="flex w-full h-dvh items-center justify-center p-0">
              <Image
                src="/images/hero/1.jpg"
                alt="Picture of the author"
                width={1000}
                height={500}
                quality={70}
                className="w-full h-full object-cover absolute z-0"
                priority
              />
              <div className="w-full h-full z-10 flex flex-col items-start justify-start pt-44 pl-10 md:pl-20 lg:pl-36 gap-2">
                <h1 className="text-white bg-rotary text-4xl md:text-5xl font-bold rounded lg:text-6xl">
                  Bricks<span className="text-safron">Viewer</span>.com
                </h1>
                <p
                  className="typewrite text-white bg-rotary text-xl font-bold rounded md:text-2xl lg:text-3xl"
                  data-period="1500"
                  data-type='[ "Trust", "Integrity", "Sold" ]'
                >
                  <span className="wrap"></span>
                </p>
              </div>
            </CardContent>
          </Card>
        </CarouselItem>
        <CarouselItem key="2">
          <Card>
            <CardContent className="flex h-dvh items-start justify-center">
              <Image
                src="/images/hero/2.jpg"
                alt="Picture of the author"
                width={1000}
                height={500}
                quality={70}
                className="w-full h-full object-cover absolute z-0"
              />
              <div className="w-full h-full z-10 flex flex-col items-start justify-end pb-32 md:pl-20 lg:pl-16 gap-2">
                <div className="bg-black bg-opacity-70 p-5 m-5 md:m-0 md:p-10 rounded-lg flex flex-col-reverse items-start justify-end gap-2">
                  <p className="text-white text-lg font-bold rounded lg:text-3xl">
                    Welcome to the future of Real Estate Marketing and Sales.
                  </p>
                  <h1 className="text-skyBlue text-4xl font-bold rounded lg:text-6xl">
                    Real Estate
                  </h1>
                </div>
              </div>
            </CardContent>
          </Card>
        </CarouselItem>
      </CarouselContent>
      <div className="absolute flex justify-center items-center animate-bounce z-10 left-1/2 bottom-5">
        <div className="mouse"></div>
      </div>
      <CarouselPrevious className="absolute left-10" />
      <CarouselNext className="absolute right-10" />
    </Carousel>
  );
}
