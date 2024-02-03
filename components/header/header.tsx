"use client";

import * as React from "react";
import Link from "next/link";

import { useEffect, useState } from "react";
import { usePathname } from "next/navigation";

import { cn } from "@/lib/utils";

import {
  NavigationMenu,
  NavigationMenuContent,
  NavigationMenuItem,
  NavigationMenuLink,
  NavigationMenuList,
  NavigationMenuTrigger,
  navigationMenuTriggerStyle,
} from "@/components/ui/navigation-menu";
import { Button } from "@/components/ui/button";

const components: { title: string; href: string; description: string }[] = [
  {
    title: "Alert Dialog",
    href: "/docs/primitives/alert-dialog",
    description:
      "A modal dialog that interrupts the user with important content and expects a response.",
  },
  {
    title: "Hover Card",
    href: "/docs/primitives/hover-card",
    description:
      "For sighted users to preview content available behind a link.",
  },
  {
    title: "Progress",
    href: "/docs/primitives/progress",
    description:
      "Displays an indicator showing the completion progress of a task, typically displayed as a progress bar.",
  },
  {
    title: "Scroll-area",
    href: "/docs/primitives/scroll-area",
    description: "Visually or semantically separates content.",
  },
  {
    title: "Tabs",
    href: "/docs/primitives/tabs",
    description:
      "A set of layered sections of content—known as tab panels—that are displayed one at a time.",
  },
  {
    title: "Tooltip",
    href: "/docs/primitives/tooltip",
    description:
      "A popup that displays information related to an element when the element receives keyboard focus or the mouse hovers over it.",
  },
];

export function Header() {
  const pathname = usePathname();
  const [isTop, setIsTop] = useState(true);
  const [isOpen, setIsOpen] = useState(false);

  const toggleMenu = () => {
    setIsOpen(!isOpen);
  };

  useEffect(() => {
    const scrollListener = () => {
      setIsTop(window.scrollY < 100);
    };

    window.addEventListener("scroll", scrollListener);

    return () => {
      window.removeEventListener("scroll", scrollListener);
    };
  }, []);

  return (
    <nav
      id="navbar"
      className={`${
        pathname === "/" ? "fixed" : "relative"
      } z-50 w-full md:px-5 flex items-center bg-opacity-70 blur-backdrop-filter justify-center py-4 transition-all duration-300 ease-in-out ${
        isTop && pathname === "/"
          ? "bg-black text-white"
          : "bg-white drop-shadow-md"
      }`}
    >
      <div className="container mx-auto">
        <div className="flex items-center justify-between">
          <Link href="/" className="text-3xl font-bold lg:text-4xl">
            Bricks<span className="text-safron">Viewer</span>.com
          </Link>
          <div className="flex items-center justify-between gap-10">
            <div className="hidden space-x-6 font-medium lg:flex">
              <Link
                href="/"
                className={`hover:text-skyBlue ${
                  pathname === "/"
                    ? "border-b-2 text-skyBlue border-skyBlue font-bold"
                    : ""
                }`}
              >
                <p className="text-lg">Home</p>
              </Link>
              <Link
                href="/properties"
                className={`hover:text-skyBlue ${
                  pathname === "/properties"
                    ? "border-b-2 text-skyBlue border-skyBlue font-bold"
                    : ""
                }`}
              >
                <p className="text-lg">Properties</p>
              </Link>
              <Link
                href="/contact-us"
                className={`hover:text-skyBlue ${
                  pathname === "/contact-us"
                    ? "border-b-2 text-skyBlue border-skyBlue font-bold"
                    : ""
                }`}
              >
                <p className="text-lg">Contact Us</p>
              </Link>
            </div>
            <div
              className={`flex items-center justify-center gap-4 pl-2 ${
                isTop && pathname === "/" ? "border-white" : "border-black"
              } border-l-2`}
            >
              <Link
                href="tel:+91-7055455847"
                className="hidden font-bold lg:block hover:text-skyBlue"
              >
                <p className="m-2 mx-3 text-md">+91-7055455847</p>
              </Link>
              <Button className="hidden text-sm font-bold text-white bg-safron baseline lg:block border-safron border-2 hover:bg-transparent hover:text-safron transition duration-500 ease-in-out">
                Contact Me!
              </Button>
            </div>
          </div>
          <Button
            id="menu-btn"
            className={`hamburger bg-transparent hover:bg-transparent lg:hidden focus:outline-none ${
              isOpen ? "open" : ""
            }`}
            onClick={toggleMenu}
          >
            <span
              className={`hamburger-top ${
                isTop && pathname === "/" ? "bg-white" : "bg-black"
              }`}
            ></span>
            <span
              className={`hamburger-middle ${
                isTop && pathname === "/" ? "bg-white" : "bg-black"
              }`}
            ></span>
            <span
              className={`hamburger-bottom ${
                isTop && pathname === "/" ? "bg-white" : "bg-black"
              }`}
            ></span>
          </Button>
        </div>
        <div className="lg:hidden">
          <div
            id="menu"
            className={`flex-col items-center justify-center font-medium gap-4 text-center mt-4 border-t pt-4 ${
              isOpen ? "flex " : "hidden"
            }`}
          >
            <Link
              href="/"
              className={`hover:text-skyBlue ${
                pathname === "/"
                  ? "border-b-2 text-skyBlue border-skyBlue font-bold"
                  : ""
              }`}
            >
              <p className="text-lg">Home</p>
            </Link>
            <Link
              href="/properties"
              className={`hover:text-skyBlue ${
                pathname === "/properties"
                  ? "border-b-2 text-skyBlue border-skyBlue font-bold"
                  : ""
              }`}
            >
              <p className="text-lg">Properties</p>
            </Link>
            <Link
              href="/contact-us"
              className={`hover:text-skyBlue ${
                pathname === "/contact-us"
                  ? "border-b-2 text-skyBlue border-skyBlue font-bold"
                  : ""
              }`}
            >
              <p className="text-lg">Contact Us</p>
            </Link>
            <Button className="font-bold text-white text-lg bg-safron baseline border-safron border-2 hover:bg-transparent hover:text-safron">
              Contact Me!
            </Button>
          </div>
        </div>
      </div>
    </nav>
  );
}

const ListItem = React.forwardRef<
  React.ElementRef<"a">,
  React.ComponentPropsWithoutRef<"a">
>(({ className, title, children, ...props }, ref) => {
  return (
    <li>
      <NavigationMenuLink asChild>
        <a
          ref={ref}
          className={cn(
            "block select-none space-y-1 rounded-md p-3 leading-none no-underline outline-none transition-colors hover:bg-accent hover:text-accent-foreground focus:bg-accent focus:text-accent-foreground",
            className
          )}
          {...props}
        >
          <div className="text-sm font-medium leading-none">{title}</div>
          <div className="line-clamp-2 text-sm leading-snug text-muted-foreground">
            {children}
          </div>
        </a>
      </NavigationMenuLink>
    </li>
  );
});
ListItem.displayName = "ListItem";
