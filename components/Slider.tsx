"use client";

import React from "react";
import Image from "next/image";
import { useRef, useState, useEffect } from "react";

const Slider = () => {
  const sliderRef = useRef<HTMLDivElement>(null);
  const [defaultTransform, setDefaultTransform] = useState(0);
  const [currentSlide, setCurrentSlide] = useState(0);
  const [slideWidth, setSlideWidth] = useState(0);

  useEffect(() => {
    if (sliderRef.current) {
      const slide = sliderRef.current.children[0] as HTMLDivElement;
      setSlideWidth(slide.offsetWidth);
    }
  }, []);

  const goNext = () => {
    if (sliderRef.current) {
      const slide = sliderRef.current.children[0] as HTMLDivElement;
      const slideWidth = slide.offsetWidth;

      if (currentSlide >= 0 && currentSlide < 5) {
        setCurrentSlide(currentSlide + 1);
        setDefaultTransform(defaultTransform - slideWidth);
      } else {
        setCurrentSlide(0);
        setDefaultTransform(0);
      }
    }
  };

  const goPrev = () => {
    if (sliderRef.current) {
      const slide = sliderRef.current.children[0] as HTMLDivElement;
      const slideWidth = slide.offsetWidth;

      if (currentSlide > 0 && currentSlide <= 5) {
        setCurrentSlide(currentSlide - 1);
        setDefaultTransform(defaultTransform + slideWidth);
      } else {
        setCurrentSlide(3);
        setDefaultTransform(-slideWidth * 3);
      }
    }
  };

  return <></>;
};

export default Slider;
