"use client";

import * as React from "react";

import { useState, useEffect } from "react";
import { redirect } from "next/navigation";

import { fillForm } from "@/functions";
import { useToast } from "@/components/ui/use-toast";

import { zodResolver } from "@hookform/resolvers/zod";
import { useForm } from "react-hook-form";
import { z } from "zod";

import {
  Card,
  CardContent,
  CardDescription,
  CardHeader,
} from "@/components/ui/card";
import {
  Carousel,
  CarouselContent,
  CarouselItem,
  CarouselNext,
  CarouselPrevious,
  type CarouselApi,
} from "@/components/ui/carousel";

import { FaMapPin } from "react-icons/fa";

import {
  Table,
  TableBody,
  TableCaption,
  TableCell,
  TableHead,
  TableHeader,
  TableRow,
} from "@/components/ui/table";

import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs";

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
  formname: z.literal("GatewayCommercial Form"),
});

const GatewayCommercial = () => {
  const [phone, setPhone] = useState("");

  const [api, setApi] = React.useState<CarouselApi>();
  const [current, setCurrent] = React.useState(0);
  const [count, setCount] = React.useState(0);

  React.useEffect(() => {
    const phn = localStorage.getItem("phone");
    if (phn) {
      setPhone(phn);
    } else {
      redirect("/phone?redirect=/properties/GatewayCommercial");
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
      formname: "GatewayCommercial Form",
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
          <h1 className="sm:text-2xl md:text-3xl text-4xl text-white font-white font-bold">
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
            / <span className="text-black"> Gateway Commercial</span>
          </h1>
        </div>
      </section>
      <section className="w-full flex flex-col justify-center items-center">
        <Card className="container mx-4 mt-5 p-0">
          <CardHeader className="flex flex-col justify-center items-center gap-2">
            <h1 className="text-2xl text-center md:text-4xl font-bold text-skyBlue">
              Gateway <span className="text-black">Commercial</span>
            </h1>
            <CardDescription className="flex justify-center items-center">
              <p className="text-sm text-muted-foreground text-justify md:text-center md:text-md md:w-2/3">
                The bustling commercial corner in The Gateway premises is a boon
                for the residents and businessmen alike. The Gateway offers a
                wide range of commercial spaces to suit every need. The
                commercial spaces are designed to accommodate the requirements
                of various businesses and are equipped with modern amenities.
              </p>
            </CardDescription>
          </CardHeader>
          <CardContent className="p-2">
            <div className="flex flex-col justify-center items-center">
              <h1 className="text-2xl text-center md:text-3xl font-bold text-skyBlue mb-2">
                Site Plans
              </h1>
              <Carousel className="w-full md:w-1/2 md:p-0">
                <CarouselContent>
                  <CarouselItem key="1">
                    <Image
                      src="/properties/gatewayc/images (10).jpg"
                      alt="bricksveiwer_sbp"
                      width={500}
                      height={400}
                      className="w-full h-full rounded"
                    />
                  </CarouselItem>
                </CarouselContent>
              </Carousel>
              <h1 className="text-xl text-center font-bold text-black flex justify-center items-center">
                <FaMapPin />
                Address:
              </h1>
              <p className="text-md text-skyBlue font-medium text-center md:text-md md:w-2/3">
                Chandigarh-Ludhiana Highway, NH-95, Kharar, S.A.S Nagar, Punjab
              </p>
              <h1 className="text-2xl text-center md:text-3xl font-bold text-skyBlue mb-2">
                Floor Plans
              </h1>
              <Carousel className="w-full md:w-2/3 md:p-0">
                <CarouselContent>
                  <CarouselItem key="1" className="md:basis-1/2 border-2">
                    <Image
                      src="/properties/gatewayc/fp1.jpg"
                      alt="bricksveiwer_sbp"
                      width={500}
                      height={800}
                      className="w-full h-full rounded"
                    />
                  </CarouselItem>
                  <CarouselItem key="1" className="md:basis-1/2 border-2">
                    <Image
                      src="/properties/gatewayc/fp2.jpg"
                      alt="bricksveiwer_sbp"
                      width={500}
                      height={800}
                      className="w-full h-full rounded"
                    />
                  </CarouselItem>
                </CarouselContent>
                <CarouselPrevious className="text-white bg-skyBlue hover:bg-white hover:text-skyBlue border-2 border-white rounded-full" />
                <CarouselNext className="text-white bg-skyBlue hover:bg-white hover:text-skyBlue border-2 border-white rounded-full" />
              </Carousel>
            </div>
            <div className="flex flex-col justify-center items-center mt-5">
              <h1 className="text-3xl text-center font-bold text-skyBlue">
                <span className="text-black">Listing</span> Gallery
              </h1>
              <Carousel className="w-full md:p-4">
                <CarouselContent>
                  <CarouselItem key="1" className="md:basis-1/2">
                    <Image
                      src="/properties/gatewayc/images (6).jpg"
                      alt="bricksveiwer_sbp"
                      width={500}
                      height={400}
                      className="w-full h-full rounded"
                    />
                  </CarouselItem>
                  <CarouselItem key="2 " className="md:basis-1/2">
                    <Image
                      src="/properties/gatewayc/images (7).jpg"
                      alt="bricksveiwer_sbp"
                      width={500}
                      height={400}
                      className="w-full h-full rounded"
                    />
                  </CarouselItem>
                </CarouselContent>
                <CarouselPrevious className="absolute left-5 text-skyBlue bg-white border-skyBlue border-4" />
                <CarouselNext className="absolute right-5 text-skyBlue bg-white border-skyBlue border-4" />
              </Carousel>
            </div>
            <div
              id="apartment_types&payment_plans"
              className="md:p-4 mt-5 flex flex-col justify-center items-center gap-5"
            >
              <Card className="w-full pt-5 md:p-5 flex flex-col jusitfy-center items-center">
                <h1 className="w-full text-2xl text-center md:text-4xl font-bold text-skyBlue mb-5">
                  Commercial <span className="text-black">BayShops</span> (East
                  Facing)
                </h1>
                <Table className="border-2 mb-5">
                  <TableCaption className="bg-red-400 text-white text-md font-bold">
                    Total Price = BASIC selling price + Preferential Location +
                    GST
                  </TableCaption>
                  <TableHeader className="bg-green-400">
                    <TableRow className="text-sm md:text-lg font-bold">
                      <TableHead></TableHead>
                      <TableHead className="text-white text-center">
                        Size
                      </TableHead>
                      <TableHead className="text-white text-right">
                        Basic Sale Price
                      </TableHead>
                    </TableRow>
                  </TableHeader>
                  <TableBody>
                    <TableRow key="1">
                      <TableCell>Built-up Shops</TableCell>
                      <TableCell className="text-center">
                        11&apos;6&quot; x 35&apos;0&quot;
                      </TableCell>
                      <TableCell className="text-right">
                        ₹ 1,90,00,000/-
                      </TableCell>
                    </TableRow>
                  </TableBody>
                </Table>
                <div className="w-full flex flex-col justify-center items-start gap-2 md:flex-row">
                  <Table className="border-2">
                    <TableHeader className="bg-blue-400">
                      <TableRow className="text-sm md:text-md font-bold">
                        <TableHead className="text-white">
                          Payment Schedule
                        </TableHead>
                        <TableHead></TableHead>
                      </TableRow>
                    </TableHeader>
                    <TableBody>
                      <TableRow key="1">
                        <TableCell>On Application</TableCell>
                        <TableCell>25% of Total Price + GST</TableCell>
                      </TableRow>
                      <TableRow key="2">
                        <TableCell>Within 30 days of booking</TableCell>
                        <TableCell>25% of Total Price + GST</TableCell>
                      </TableRow>
                      <TableRow key="3">
                        <TableCell>Within 40 days of booking</TableCell>
                        <TableCell>45% of Total Price + GST</TableCell>
                      </TableRow>
                      <TableRow key="4">
                        <TableCell></TableCell>
                        <TableCell></TableCell>
                      </TableRow>
                      <TableRow key="5">
                        <TableCell>
                          On Offer of Possession & Sale Deed
                        </TableCell>
                        <TableCell>
                          5% of Total Price + IFMS + Club Charges + Stamp Duty +
                          GST + Any other charges if applicable
                        </TableCell>
                      </TableRow>
                    </TableBody>
                  </Table>
                  <Table className="border-2">
                    <TableHeader className="bg-blue-400">
                      <TableRow className="text-sm md:text-md font-bold">
                        <TableHead className="text-white">
                          Other Charges
                        </TableHead>
                        <TableHead className="text-white">Amount</TableHead>
                      </TableRow>
                    </TableHeader>
                    <TableBody>
                      <TableRow key="1">
                        <TableCell>IFMS</TableCell>
                        <TableCell>₹ 40,000/-</TableCell>
                      </TableRow>
                      <TableRow key="2">
                        <TableCell>Monthly Maintenance</TableCell>
                        <TableCell>₹ 1,500/- + GST</TableCell>
                      </TableRow>
                    </TableBody>
                  </Table>
                </div>
              </Card>
            </div>
          </CardContent>
        </Card>
      </section>
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
I'm interested in 'GatewayCommercial'
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

export default GatewayCommercial;
