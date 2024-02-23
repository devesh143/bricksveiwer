"use client";

import * as React from "react";
import Link from "next/link";

import { fillForm } from "@/functions";

import { useToast } from "@/components/ui/use-toast";
import { zodResolver } from "@hookform/resolvers/zod";
import { useForm } from "react-hook-form";
import { z } from "zod";

const formSchema = z.object({
  name: z.string().min(2, { message: "Name is too short" }),
  phone: z
    .string()
    .regex(/^\+?\d{10,12}$/, {
      message: "Invalid Phone Number",
    })
    .min(10, { message: "Phone Number is too short" })
    .max(11, { message: "Phone Number is too long" }),
  message: z.string(),
  formname: z.literal("Contact Form"),
});

import { useEffect, useState } from "react";
import { usePathname } from "next/navigation";

import {
  Dialog,
  DialogContent,
  DialogTrigger,
  DialogHeader,
} from "@/components/ui/dialog";

import {
  Form,
  FormField,
  FormItem,
  FormLabel,
  FormMessage,
} from "@/components/ui/form";
import { Textarea } from "@/components/ui/textarea";
import { Input } from "@/components/ui/input";
import { Button } from "@/components/ui/button";

export function Header() {
  const { toast } = useToast();

  const [phone, setPhone] = useState("");
  const [open, setOpen] = useState(true);
  const [openTwo, setOpenTwo] = useState(false);

  const form = useForm<z.infer<typeof formSchema>>({
    resolver: zodResolver(formSchema),
    defaultValues: {
      name: "",
      phone: "",
      message: "",
      formname: "Contact Form",
    },
  });

  const pathname = usePathname();
  const [isTop, setIsTop] = useState(true);
  const [isOpen, setIsOpen] = useState(false);

  const toggleMenu = () => {
    setIsOpen(!isOpen);
  };

  useEffect(() => {
    if (phone !== "") {
      localStorage.setItem("phone", phone);
    }

    const scrollListener = () => {
      setIsTop(window.scrollY < 100);
    };

    window.addEventListener("scroll", scrollListener);

    return () => {
      window.removeEventListener("scroll", scrollListener);
    };
  }, [phone]);

  function onSubmit(data: z.infer<typeof formSchema>) {
    setPhone(data.phone);
    setOpen(false);
    setOpenTwo(false);
    const response = fillForm(
      data.name,
      data.phone,
      data.message,
      data.formname
    );
    response.then((res) => {
      if (res.status === 200) {
        toast({
          variant: "default",
          title: "Message Sent",
          description: "We will get back to you soon",
        });
      } else {
        toast({
          variant: "destructive",
          title: "Message Not Sent",
          description: "Please try again",
        });
      }
    });
  }

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
              <Link href="/#testimonials" className="hover:text-skyBlue">
                <p className="text-lg">Property Management</p>
              </Link>
              <Link href="/#interior" className="hover:text-skyBlue">
                <p className="text-lg">Interior Design</p>
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
              <Dialog open={open} onOpenChange={setOpen}>
                <DialogTrigger className="hidden text-lg font-bold text-white bg-safron baseline lg:block border-safron border-2 hover:bg-transparent hover:text-safron transition duration-500 ease-in-out rounded-md px-2 py-1">
                  Contact Me!
                </DialogTrigger>
                <DialogContent className="sm:max-w-md">
                  <DialogHeader className="container w-full">
                    <h2 className="text-3xl font-bold text-center">
                      Contact <span className="text-safron">Me!</span>
                    </h2>
                  </DialogHeader>
                  <Form {...form}>
                    <form
                      onSubmit={form.handleSubmit(onSubmit)}
                      className="container w-full flex flex-col gap-4 p-4 bg-white rounded-lg"
                    >
                      <div className="w-full flex justify-center items-center gap-2">
                        <FormField
                          control={form.control}
                          name="name"
                          render={({ field }) => (
                            <FormItem>
                              <FormLabel htmlFor="name">Name</FormLabel>
                              <Input
                                {...field}
                                id="name"
                                type="text"
                                placeholder="Name"
                                className=""
                              />
                              <FormMessage />
                            </FormItem>
                          )}
                        />
                        <FormField
                          control={form.control}
                          name="phone"
                          render={({ field }) => (
                            <FormItem>
                              <FormLabel htmlFor="phone">Phone</FormLabel>
                              <Input
                                {...field}
                                id="phone"
                                type="phone"
                                placeholder="(+91)"
                                className=""
                              />
                              <FormMessage />
                            </FormItem>
                          )}
                        />
                      </div>
                      <FormField
                        control={form.control}
                        name="message"
                        render={({ field }) => (
                          <FormItem>
                            <FormLabel htmlFor="message">Message</FormLabel>
                            <Textarea
                              {...field}
                              id="message"
                              placeholder="Your Message Here..."
                              className=""
                            />
                            <FormMessage />
                          </FormItem>
                        )}
                      />
                      <Button
                        type="submit"
                        className="text-xl font-bold text-white bg-safron border-safron border-2 hover:text-safron hover:bg-white transition-all duration-300 ease-in-out"
                      >
                        Send Message
                      </Button>
                    </form>
                  </Form>
                </DialogContent>
              </Dialog>
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
            <Link href="/#testimonials" className="hover:text-skyBlue">
              <p className="text-lg">Property Management</p>
            </Link>
            <Link href="/#interior" className="hover:text-skyBlue">
              <p className="text-lg">Interior Design</p>
            </Link>
            <Dialog open={openTwo} onOpenChange={setOpenTwo}>
              <DialogTrigger className="text-lg font-bold text-white bg-safron baseline lg:block border-safron border-2 hover:bg-transparent hover:text-safron transition duration-500 ease-in-out rounded-md px-2 py-1">
                Contact Me!
              </DialogTrigger>
              <DialogContent className="sm:max-w-md">
                <DialogHeader className="container w-full">
                  <h2 className="text-3xl font-bold text-center">
                    Contact <span className="text-safron">Me!</span>
                  </h2>
                </DialogHeader>
                <Form {...form}>
                  <form
                    onSubmit={form.handleSubmit(onSubmit)}
                    className="container w-full flex flex-col gap-4 p-4 bg-white rounded-lg"
                  >
                    <div className="w-full flex justify-center items-center gap-2">
                      <FormField
                        control={form.control}
                        name="name"
                        render={({ field }) => (
                          <FormItem>
                            <FormLabel htmlFor="name">Name</FormLabel>
                            <Input
                              {...field}
                              id="name"
                              type="text"
                              placeholder="Name"
                              className=""
                            />
                            <FormMessage />
                          </FormItem>
                        )}
                      />
                      <FormField
                        control={form.control}
                        name="phone"
                        render={({ field }) => (
                          <FormItem>
                            <FormLabel htmlFor="phone">Phone</FormLabel>
                            <Input
                              {...field}
                              id="phone"
                              type="phone"
                              placeholder="phone"
                              className=""
                            />
                            <FormMessage />
                          </FormItem>
                        )}
                      />
                    </div>
                    <FormField
                      control={form.control}
                      name="message"
                      render={({ field }) => (
                        <FormItem>
                          <FormLabel htmlFor="message">Message</FormLabel>
                          <Textarea
                            {...field}
                            id="message"
                            placeholder="message"
                            className=""
                          />
                          <FormMessage />
                        </FormItem>
                      )}
                    />
                    <Button
                      type="submit"
                      className="text-xl font-bold text-white bg-safron border-safron border-2 hover:text-safron hover:bg-white transition-all duration-300 ease-in-out"
                    >
                      Send Message
                    </Button>
                  </form>
                </Form>
              </DialogContent>
            </Dialog>
          </div>
        </div>
      </div>
    </nav>
  );
}
