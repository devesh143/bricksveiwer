"use client";

import Link from "next/link";
import { useReducer, useEffect } from "react";

const initialState = { number: 0 };

interface Action {
  type: string;
}

function reducer(state: { number: number }, action: Action) {
  switch (action.type) {
    case "increment":
      return { number: state.number + 1 };
    case "reset":
      return { number: 0 };
    default:
      console.warn(`Unknown action type: ${action.type}`);
      return state;
  }
}

const SimpleCounter = ({
  end,
  duration,
  id,
}: {
  end: number;
  duration: number;
  id: string;
}) => {
  const [state, dispatch] = useReducer(reducer, initialState);

  // useEffect(() => {
  //   const handleScroll = () => {
  //     let an = 0;
  //     if (window.scrollY) {
  //       an++;
  //     }

  //     if (an % 2 === 0) {
  //       dispatch({ type: "reset" });
  //     }
  //   };

  //   window.addEventListener("scroll", handleScroll);

  //   return () => {
  //     window.removeEventListener("scroll", handleScroll);
  //   };
  // }, []);

  useEffect(() => {
    const interval = setInterval(() => {
      if (state.number < end) {
        dispatch({ type: "increment" });
      } else {
        clearInterval(interval);
      }
    }, duration / end);

    return () => clearInterval(interval);
  }, [state.number, end, duration]);

  return (
    <div className="flex flex-col gap-2 justify-center items-center md:flex-row">
      <div className="text-3xl font-bold text-white">{state.number}+</div>
      <div id={id} className="text-white">
        {id}
      </div>
    </div>
  );
};

export default function HeroNext() {
  return (
    <div className="w-full h-full bg-skyBlue z-10">
      <div className="container w-full mx-auto p-10 flex flex-col justify-center gap-5 items-center lg:flex-row lg:h-32">
        <div className="w-full flex flex-col gap-4 justify-center items-center lg:flex-row lg:w-2/3">
          <SimpleCounter end={225} duration={6000} id="Happy Clients" />
          <SimpleCounter end={65} duration={6000} id="Properties Sold" />
        </div>
        <div className="w-full flex justify-center items-center lg:w-1/3 lg:justify-end">
          <Link
            href=""
            className="bg-white border-white border-2 text-skyBlue rounded-full mt-5 px-8 py-2 text-lg font-bold md:m-0 hover:bg-skyBlue hover:text-white transition duration-500 ease-in-out"
          >
            Explore More
          </Link>
        </div>
      </div>
    </div>
  );
}
