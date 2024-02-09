"use client";

import * as React from "react";

import { useState, useEffect } from "react";
import { redirect } from "next/navigation";

import { fillForm } from "@/functions";
import { useToast } from "@/components/ui/use-toast";

import { zodResolver } from "@hookform/resolvers/zod";
import { useForm } from "react-hook-form";
import { z } from "zod";

import { Card, CardContent } from "@/components/ui/card";
import {
  Carousel,
  CarouselContent,
  CarouselItem,
  CarouselNext,
  CarouselPrevious,
  type CarouselApi,
} from "@/components/ui/carousel";

import {
  Table,
  TableBody,
  TableCaption,
  TableCell,
  TableHead,
  TableHeader,
  TableRow,
} from "@/components/ui/table";

import { Dialog, DialogContent, DialogTrigger } from "@/components/ui/dialog";

import { Button } from "@/components/ui/button";
import {
  Form,
  FormField,
  FormItem,
  FormLabel,
  FormMessage,
} from "@/components/ui/form";
import { Textarea } from "@/components/ui/textarea";
import { Input } from "@/components/ui/input";

import Link from "next/link";
import Image from "next/image";

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
  formname: z.literal("GateWay Form"),
});

const apartments = [
  {
    id: 1,
    type: "3 BHK",
    floorplan: "/properties/gateway/3bhkFP.jpg",
  },
];

const GateWay = () => {
  const [phone, setPhone] = useState("");

  const [api, setApi] = React.useState<CarouselApi>();
  const [current, setCurrent] = React.useState(0);
  const [count, setCount] = React.useState(0);

  React.useEffect(() => {
    const phn = localStorage.getItem("phone");
    if (phn) {
      setPhone(phn);
    } else {
      redirect("/phone?redirect=/properties/gateway");
    }

    if (!api) {
      return;
    }

    setCount(api.scrollSnapList().length);
    setCurrent(api.selectedScrollSnap() + 1);

    api.on("select", () => {
      console.log("current");
      setCurrent(api.selectedScrollSnap() + 1);
    });
  }, [api]);

  const { toast } = useToast();
  const form = useForm<z.infer<typeof formSchema>>({
    resolver: zodResolver(formSchema),
    defaultValues: {
      name: "",
      phone: phone,
      message: "",
      formname: "GateWay Form",
    },
  });

  useEffect(() => {
    if (phone !== "") {
      localStorage.setItem("phone", phone);
    }
  }, [phone]);

  function onSubmit(data: z.infer<typeof formSchema>) {
    setPhone(data.phone);
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
    <div className="w-full h-full">
      <section className="w-full bg-skyBlue">
        <div className="container mx-auto flex justify-center items-center py-8">
          <h1 className="text-xl sm:text-2xl md:text-3xl text-4xl text-white font-white font-bold">
            <Link
              href="/"
              className="border-white border-b-2 hover:text-black hover:border-black"
            >
              Home
            </Link>{" "}
            /{" "}
            <Link
              href="/properties"
              className="border-white border-b-2 hover:text-black hover:border-black"
            >
              Properties
            </Link>{" "}
            / <span className="text-black"> GateWay</span>
          </h1>
        </div>
      </section>
      <div className="my-8 w-full flex flex-col justify-center items-center">
        <div className="container mx-auto flex flex-col justify-center items-center">
          <div className="py-2 text-center mb-5">
            <h1 className="text-4xl font-bold">Property Images</h1>
          </div>
          <Carousel setApi={setApi} className="w-full">
            <CarouselContent>
              <CarouselItem className="md:basis-1/2" key="1">
                <Card className="p-0">
                  <CardContent className="flex items-center justify-center p-0">
                    <Image
                      src="/properties/gateway/gateway_1.jpg"
                      alt="bricksveiwer_GateWay"
                      width={900}
                      height={400}
                      className="w-full h-full rounded"
                    />
                  </CardContent>
                </Card>
              </CarouselItem>
              <CarouselItem className="md:basis-1/2" key="2">
                <Card className="p-0">
                  <CardContent className="flex items-center justify-center p-0">
                    <Image
                      src="/properties/gateway/gateway_2.jpg"
                      alt="bricksveiwer_GateWay"
                      width={900}
                      height={400}
                      className="w-full h-full rounded"
                    />
                  </CardContent>
                </Card>
              </CarouselItem>
              <CarouselItem className="md:basis-1/2" key="3">
                <Card className="p-0">
                  <CardContent className="flex items-center justify-center p-0">
                    <Image
                      src="/properties/gateway/gateway_3.jpg"
                      alt="bricksveiwer_GateWay"
                      width={900}
                      height={400}
                      className="w-full h-full rounded"
                    />
                  </CardContent>
                </Card>
              </CarouselItem>
            </CarouselContent>
            <CarouselPrevious className="absolute left-10 text-skyBlue bg-white border-skyBlue border-4" />
            <CarouselNext className="absolute right-10 text-skyBlue bg-white border-skyBlue border-4" />
          </Carousel>
          <div className="py-2 text-center text-sm text-muted-foreground">
            Image {current} of {count}
          </div>
        </div>
        <div className="w-full container flex flex-col justify-center items-start px-5 md:px-10 lg:px-20">
          <div className="w-full md:w-1/2 flex justify-between items-center gap-10 mt-10">
            <Table>
              <TableCaption>Available Units in Gateway.</TableCaption>
              <TableHeader>
                <TableRow className="text-lg font-bold">
                  <TableHead>Apartment Type</TableHead>
                  <TableHead className="text-right">Floor Plan</TableHead>
                </TableRow>
              </TableHeader>
              <TableBody>
                {apartments.map((apartment) => (
                  <TableRow key={apartment.id}>
                    <TableCell className="font-bold">
                      {apartment.type}
                    </TableCell>
                    <TableCell className="text-right">
                      <Dialog>
                        <DialogTrigger asChild>
                          <Button className="">Click to View</Button>
                        </DialogTrigger>
                        <DialogContent className="min-w-[1000px]">
                          <Image
                            src={apartment.floorplan}
                            alt="floorplan"
                            width={1000}
                            height={800}
                          />
                        </DialogContent>
                      </Dialog>
                    </TableCell>
                  </TableRow>
                ))}
              </TableBody>
            </Table>
          </div>
        </div>
      </div>
      <section className="w-full bg-skyBlue mt-8">
        <div className="container text-white py-10 flex flex-col-reverse justify-center items-center md:flex-row">
          <div className="w-full h-full flex justify-center items-center md:w-1/2 mt-5 md:mt-0">
            <Form {...form}>
              <form onSubmit={form.handleSubmit(onSubmit)}>
                <div className="w-full flex justify-center items-center gap-3">
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
                          className="text-skyBlue font-bold text-md"
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
                        <FormLabel htmlFor="phone">Phone Number</FormLabel>
                        <Input
                          {...field}
                          id="phone"
                          type="tel"
                          placeholder={`+91`}
                          className="text-skyBlue font-bold text-md"
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
                    <FormItem className="mt-3">
                      <FormLabel htmlFor="message">Message</FormLabel>
                      <Textarea
                        {...field}
                        id="message"
                        placeholder="Your Message"
                        value={`Hi,
I'm interested in 'GateWay'
Please, get in touch with me.`}
                        className="text-skyBlue font-bold text-md"
                      />
                      <FormMessage />
                    </FormItem>
                  )}
                />
                <Button
                  type="submit"
                  className="mt-3 text-xl font-bold text-white bg-skyBlue border-white border-4 hover:text-skyBlue hover:bg-white transition-all duration-300 ease-in-out rounded-lg"
                >
                  Submit
                </Button>
              </form>
            </Form>
          </div>
          <div className="w-full h-full flex flex-col md:w-1/2 border-white md:ml-5 border-b-2 md:border-0">
            <h1 className="text-4xl sm:text-5xl md:text-6xl font-bold rounded-lg">
              Contact Us!
            </h1>
            <p className="text-justify text-sm sm:text-normal font-bold mb-5 md:mb-0 lg:pr-36 mt-5">
              Fill out the form to get in touch with our Real Estate and
              Construction Consulting team. We are here to help you with all
              your needs and provide expert advice.
            </p>
          </div>
        </div>
      </section>
    </div>
  );
};

export default GateWay;
