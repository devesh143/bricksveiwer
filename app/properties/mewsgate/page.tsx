"use client";

import * as React from "react";

import { useState, useEffect } from "react";
import { redirect } from "next/navigation";

import { fillForm } from "@/functions";
import { useToast } from "@/components/ui/use-toast";

import { zodResolver } from "@hookform/resolvers/zod";
import { useForm } from "react-hook-form";
import { z } from "zod";

import { FaMapPin } from "react-icons/fa";

import {
  Card,
  CardContent,
  CardHeader,
  CardDescription,
} from "@/components/ui/card";
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
  formname: z.literal("MewsGate Form"),
});

const apartments = [
  {
    id: 1,
    block: "Block 03",
    type: "2 BHK",
    area: "1225 sq. ft.",
    price: "Rs. 70,95,000/-",
    floorplan: "#2bhk3",
  },
  {
    id: 2,
    block: "Block 04",
    type: "3 BHK",
    area: "1650 sq. ft.",
    price: "Rs. 94,76,500/-",
    floorplan: "#3bhk4",
  },
  {
    id: 3,
    block: "Block 05",
    type: "4 BHK",
    area: "2160 sq. ft.",
    price: "Rs. 1,23,36,500/-",
    floorplan: "#4bhk5",
  },
  {
    id: 4,
    block: "Block 06",
    type: "2 BHK",
    area: "1390 sq. ft.",
    price: "Rs. 79,09,000/-",
    floorplan: "#2bhk6",
  },
  {
    id: 5,
    block: "Block 06",
    type: "3 BHK",
    area: "1790 sq. ft.",
    price: "Rs. 1,01,53,000/-",
    floorplan: "#3bhk6",
  },
];

const MewsGate = () => {
  const [phone, setPhone] = useState("");

  const [api, setApi] = React.useState<CarouselApi>();
  const [current, setCurrent] = React.useState(0);
  const [count, setCount] = React.useState(0);

  React.useEffect(() => {
    const phn = localStorage.getItem("phone");
    if (phn) {
      setPhone(phn);
    } else {
      redirect("/phone?redirect=/properties/mewsgate");
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
      formname: "MewsGate Form",
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
            / <span className="text-black"> Mewsgate</span>
          </h1>
        </div>
      </section>
      <section className="w-full flex flex-col justify-center items-center">
        <Card className="container mx-4 mt-5 p-0">
          <CardHeader className="flex flex-col justify-center items-center gap-2">
            <h1 className="text-2xl text-center md:text-4xl font-bold text-skyBlue">
              MewsGate <span className="text-black">Property</span>
            </h1>
            <CardDescription className="flex justify-center items-center">
              <p className="text-sm text-muted-foreground text-justify md:text-center md:text-md md:w-2/3">
                Mews Gate is One of the most admired address on{" "}
                <strong>Nainital, Uttarakhand, India</strong>. Just 5 minutes away
                from Bailparao, it is surrounded by well developed
                commercial projects and educational institutions.
              </p>
            </CardDescription>
          </CardHeader>
          <CardContent className="p-2">
            <div
              id="siteplans_cityofdreams"
              className="mt-4 flex flex-col justify-center items-center"
            >
              <h1 className="text-xl text-center font-bold text-black flex justify-center items-center">
                <FaMapPin />
                Address:
              </h1>
              <p className="text-md text-skyBlue font-medium text-center md:text-md md:w-2/3">
                Nainital, Uttarakhand, India
              </p>
            </div>
            <div className="flex flex-col justify-center items-center mt-5">
              <h1 className="text-3xl text-center font-bold text-skyBlue">
                <span className="text-black">Listing</span> Gallery
              </h1>
              <Carousel setApi={setApi} className="w-full md:p-4">
                <div className="py-2 text-center text-sm text-muted-foreground">
                  Gallery Image {current} of {count}
                </div>
                <CarouselContent>
                  <CarouselItem className="md:basis-1/2" key="9">
                    <video
                      src="/videos/MewsGate_3.mp4"
                      className="w-full h-full rounded"
                      controls
                    />
                  </CarouselItem>
                  <CarouselItem className="md:basis-1/2" key="5">
                    <Image
                      src="/properties/mewsgate/benefit_9.jpg"
                      alt="bricksveiwer_mewsgate"
                      width={900}
                      height={400}
                      className="w-full h-full rounded"
                    />
                  </CarouselItem>
                  <CarouselItem className="md:basis-1/2" key="1">
                    <Image
                      src="/properties/mewsgate/iterior_1.jpg"
                      alt="bricksveiwer_mewsgate"
                      width={900}
                      height={400}
                      className="w-full h-full rounded"
                    />
                  </CarouselItem>
                  <CarouselItem className="md:basis-1/2" key="7">
                    <Image
                      src="/properties/mewsgate/benefit_7.jpg"
                      alt="bricksveiwer_mewsgate"
                      width={900}
                      height={400}
                      className="w-full h-full rounded"
                    />
                  </CarouselItem>
                  <CarouselItem className="md:basis-1/2" key="2">
                    <Image
                      src="/properties/mewsgate/iterior_2.jpg"
                      alt="bricksveiwer_mewsgate"
                      width={900}
                      height={400}
                      className="w-full h-full rounded"
                    />
                  </CarouselItem>
                  <CarouselItem className="md:basis-1/2" key="6">
                    <Image
                      src="/properties/mewsgate/benefit_8.jpg"
                      alt="bricksveiwer_mewsgate"
                      width={900}
                      height={400}
                      className="w-full h-full rounded"
                    />
                  </CarouselItem>
                  <CarouselItem className="md:basis-1/2" key="3">
                    <Image
                      src="/properties/mewsgate/iterior_3.jpg"
                      alt="bricksveiwer_mewsgate"
                      width={900}
                      height={400}
                      className="w-full h-full rounded"
                    />
                  </CarouselItem>
                  <CarouselItem className="md:basis-1/2" key="8">
                    <Image
                      src="/properties/mewsgate/benefit_6.jpg"
                      alt="bricksveiwer_mewsgate"
                      width={900}
                      height={400}
                      className="w-full h-full rounded"
                    />
                  </CarouselItem>
                  <CarouselItem className="md:basis-1/2" key="4">
                    <Image
                      src="/properties/mewsgate/iterior_4.jpg"
                      alt="bricksveiwer_mewsgate"
                      width={900}
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
              <h1 className="text-3xl text-center font-bold text-black mb-5">
                Apartment Types{" "}
                <span className="text-skyBlue">& Payment Plans</span>
              </h1>
              <Table>
                <TableCaption>Available Units in Mews Gate.</TableCaption>
                <TableHeader>
                  <TableRow className="text-lg font-bold bg-skyBlue hover:bg-blue-500">
                    <TableHead className="text-white">Block/Tower</TableHead>
                    <TableHead className="text-white">Apartment Type</TableHead>
                    <TableHead className="text-white">Super Area</TableHead>
                    <TableHead className="text-white">Purchase Price</TableHead>
                    <TableHead className="text-right text-white">
                      Floor Plan
                    </TableHead>
                  </TableRow>
                </TableHeader>
                <TableBody>
                  {apartments.map((apartment) => (
                    <TableRow key={apartment.id}>
                      <TableCell>{apartment.block}</TableCell>
                      <TableCell className="font-bold">
                        {apartment.type}
                      </TableCell>
                      <TableCell>{apartment.area}</TableCell>
                      <TableCell>{apartment.price}</TableCell>
                      <TableCell className="text-right">
                        <Link
                          href={apartment.floorplan}
                          className="text-skyBlue font-bold"
                        >
                          Click to View
                        </Link>
                      </TableCell>
                    </TableRow>
                  ))}
                </TableBody>
              </Table>
              <Dialog>
                <DialogTrigger className="text-skyBlue text-sm md:text-lg font-bold">
                  Click to Open Construction Link Plans
                </DialogTrigger>
                <DialogContent className="h-96 overflow-auto ">
                  <Table>
                    <TableBody>
                      <TableRow className="text-sm md:text-md font-bold">
                        <TableHead>
                          Installments Schedule of Booked Apartment
                        </TableHead>
                        <TableHead>Payment Percentage(%)</TableHead>
                      </TableRow>
                      <TableRow key="1">
                        <TableCell>Booking Amount (Agreement)</TableCell>
                        <TableCell>10%</TableCell>
                      </TableRow>
                      <TableRow key="2">
                        <TableCell>
                          Within 30 days of start of construction
                        </TableCell>
                        <TableCell>10%</TableCell>
                      </TableRow>
                      <TableRow key="3">
                        <TableCell>On Casting of 1st floor roof slab</TableCell>
                        <TableCell>10%</TableCell>
                      </TableRow>
                      <TableRow key="4">
                        <TableCell>On Casting of 3rd floor roof slab</TableCell>
                        <TableCell>10%</TableCell>
                      </TableRow>
                      <TableRow key="5">
                        <TableCell>On Casting of 5th floor roof slab</TableCell>
                        <TableCell>10%</TableCell>
                      </TableRow>
                      <TableRow key="6">
                        <TableCell>On Casting of 7th floor roof slab</TableCell>
                        <TableCell>10%</TableCell>
                      </TableRow>
                      <TableRow key="7">
                        <TableCell>On Casting of 9th floor roof slab</TableCell>
                        <TableCell>10%</TableCell>
                      </TableRow>
                      <TableRow key="8">
                        <TableCell>
                          On Casting of 11th floor roof slab
                        </TableCell>
                        <TableCell>10%</TableCell>
                      </TableRow>
                      <TableRow key="9">
                        <TableCell>On Start of Plaster</TableCell>
                        <TableCell>10%</TableCell>
                      </TableRow>
                      <TableRow key="10" className="bg-gray-100">
                        <TableCell>
                          At the time of offer of possession
                        </TableCell>
                        <TableCell>
                          10% + PLC + Other Applicaple Charges
                        </TableCell>
                      </TableRow>
                    </TableBody>
                  </Table>
                </DialogContent>
              </Dialog>
              <Card
                className="w-full pt-5 md:p-5 flex flex-col-reverse jusitfy-center items-center gap-10 md:flex-row"
                id="2bhk3"
              >
                <Carousel className="w-2/3 md:w-1/3">
                  <CarouselContent>
                    <CarouselItem key="1">
                      <Image
                        src="/properties/mewsgate/floorplan_2bhk_2.jpg"
                        alt="bricksveiwer_mewsgate"
                        width={400}
                        height={900}
                        className="w-full h-full rounded"
                      />
                    </CarouselItem>
                  </CarouselContent>
                </Carousel>
                <div className="w-full md:w-2/3 flex flex-col justify-center items-center">
                  <h1 className="w-full text-2xl text-center md:text-left md:text-4xl font-bold text-skyBlue mb-5">
                    2BHK <span className="text-black">Block 03</span>
                  </h1>
                  <Table className="border-2 mb-5">
                    <TableHeader className="bg-green-400">
                      <TableRow className="text-sm md:text-md font-bold">
                        <TableHead className="text-white">Category</TableHead>
                        <TableHead className="text-white">Tower</TableHead>
                        <TableHead className="text-white">Super Area</TableHead>
                        <TableHead className="text-white">
                          Covered Area
                        </TableHead>
                        <TableHead className="text-white">
                          Carpet Area
                        </TableHead>
                      </TableRow>
                    </TableHeader>
                    <TableBody>
                      <TableRow key="1">
                        <TableCell>2BHK (2B+2W)</TableCell>
                        <TableCell>3</TableCell>
                        <TableCell>1225 sq. ft.</TableCell>
                        <TableCell>923 sq. ft.</TableCell>
                        <TableCell>712 sq. ft.</TableCell>
                      </TableRow>
                    </TableBody>
                  </Table>
                  <Table className="border-2">
                    <TableHeader className="bg-blue-400">
                      <TableRow className="text-sm md:text-md font-bold">
                        <TableHead className="text-white">Floor</TableHead>
                        <TableHead className="text-white">BSP-CLP</TableHead>
                      </TableRow>
                    </TableHeader>
                    <TableBody>
                      <TableRow key="1">
                        <TableCell>12th</TableCell>
                        <TableCell>Rs. 70,95,000/-</TableCell>
                      </TableRow>
                      <TableRow key="2">
                        <TableCell>11th</TableCell>
                        <TableCell>Rs. 69,85,000/-</TableCell>
                      </TableRow>
                      <TableRow key="3">
                        <TableCell>10th-5th</TableCell>
                        <TableCell>Rs. 68,75,000/-</TableCell>
                      </TableRow>
                      <TableRow key="4">
                        <TableCell>4th</TableCell>
                        <TableCell>Rs. 69,85,000/-</TableCell>
                      </TableRow>
                      <TableRow key="5">
                        <TableCell>3rd</TableCell>
                        <TableCell>Rs. 70,95,000/-</TableCell>
                      </TableRow>
                      <TableRow key="6">
                        <TableCell>2nd</TableCell>
                        <TableCell>Rs. 72,05,000/-</TableCell>
                      </TableRow>
                      <TableRow key="7">
                        <TableCell>1st</TableCell>
                        <TableCell>Rs. 74,25,000/-</TableCell>
                      </TableRow>
                    </TableBody>
                  </Table>
                </div>
              </Card>
              <Card
                className="w-full pt-5 md:p-5 flex flex-col-reverse jusitfy-center items-center gap-10 md:flex-row-reverse"
                id="3bhk4"
              >
                <Carousel className="w-2/3 md:w-1/3">
                  <CarouselContent>
                    <CarouselItem key="1">
                      <Image
                        src="/properties/mewsgate/floorplan_3bhk_2.jpg"
                        alt="bricksveiwer_mewsgate"
                        width={400}
                        height={900}
                        className="w-full h-full rounded"
                      />
                    </CarouselItem>
                  </CarouselContent>
                </Carousel>
                <div className="w-full md:w-2/3 flex flex-col justify-center items-center">
                  <h1 className="w-full text-2xl text-center md:text-left md:text-4xl font-bold text-skyBlue mb-5">
                    3BHK <span className="text-black">Block 04</span>
                  </h1>
                  <Table className="border-2 mb-5">
                    <TableHeader className="bg-green-400">
                      <TableRow className="text-sm md:text-md font-bold">
                        <TableHead className="text-white">Category</TableHead>
                        <TableHead className="text-white">Tower</TableHead>
                        <TableHead className="text-white">Super Area</TableHead>
                        <TableHead className="text-white">
                          Covered Area
                        </TableHead>
                        <TableHead className="text-white">
                          Carpet Area
                        </TableHead>
                      </TableRow>
                    </TableHeader>
                    <TableBody>
                      <TableRow key="1">
                        <TableCell>3BHK (3B+3W)</TableCell>
                        <TableCell>3</TableCell>
                        <TableCell>1650 sq. ft.</TableCell>
                        <TableCell>1055 sq. ft.</TableCell>
                        <TableCell>843 sq. ft.</TableCell>
                      </TableRow>
                    </TableBody>
                  </Table>
                  <Table className="border-2">
                    <TableHeader className="bg-blue-400">
                      <TableRow className="text-sm md:text-md font-bold">
                        <TableHead className="text-white">Floor</TableHead>
                        <TableHead className="text-white">BSP-CLP</TableHead>
                      </TableRow>
                    </TableHeader>
                    <TableBody>
                      <TableRow key="1">
                        <TableCell>12th</TableCell>
                        <TableCell>Rs. 94,76,500/-</TableCell>
                      </TableRow>
                      <TableRow key="2">
                        <TableCell>11th</TableCell>
                        <TableCell>Rs. 93,66,500/-</TableCell>
                      </TableRow>
                      <TableRow key="3">
                        <TableCell>10th-5th</TableCell>
                        <TableCell>Rs. 92,56,500/-</TableCell>
                      </TableRow>
                      <TableRow key="4">
                        <TableCell>4th</TableCell>
                        <TableCell>Rs. 93,66,500/-</TableCell>
                      </TableRow>
                      <TableRow key="5">
                        <TableCell>3rd</TableCell>
                        <TableCell>Rs. 94,76,500/-</TableCell>
                      </TableRow>
                      <TableRow key="6">
                        <TableCell>2nd</TableCell>
                        <TableCell>Rs. 95,86,500/-</TableCell>
                      </TableRow>
                      <TableRow key="7">
                        <TableCell>1st</TableCell>
                        <TableCell>Rs. 98,06,500/-</TableCell>
                      </TableRow>
                    </TableBody>
                  </Table>
                </div>
              </Card>
              <Card
                className="w-full md:p-5 flex flex-col-reverse jusitfy-center items-center gap-10 md:flex-row"
                id="4bhk5"
              >
                <Carousel className="w-2/3 md:w-1/3">
                  <CarouselContent>
                    <CarouselItem key="1">
                      <Image
                        src="/properties/mewsgate/floorplan_4bhk_1.jpg"
                        alt="bricksveiwer_mewsgate"
                        width={400}
                        height={900}
                        className="w-full h-full rounded"
                      />
                    </CarouselItem>
                  </CarouselContent>
                </Carousel>
                <div className="w-full md:w-2/3 flex flex-col justify-center items-center">
                  <h1 className="w-full text-2xl text-center md:text-left md:text-4xl font-bold text-skyBlue mb-5">
                    4BHK <span className="text-black">Block 05</span>
                  </h1>
                  <Table className="border-2 mb-5">
                    <TableHeader className="bg-green-400">
                      <TableRow className="text-sm md:text-md font-bold">
                        <TableHead className="text-white">Category</TableHead>
                        <TableHead className="text-white">Tower</TableHead>
                        <TableHead className="text-white">Super Area</TableHead>
                        <TableHead className="text-white">
                          Covered Area
                        </TableHead>
                        <TableHead className="text-white">
                          Carpet Area
                        </TableHead>
                      </TableRow>
                    </TableHeader>
                    <TableBody>
                      <TableRow key="1">
                        <TableCell>4BHK (4B+4W)</TableCell>
                        <TableCell>5</TableCell>
                        <TableCell>2160 sq. ft.</TableCell>
                        <TableCell>1427 sq. ft.</TableCell>
                        <TableCell>1148 sq. ft.</TableCell>
                      </TableRow>
                    </TableBody>
                  </Table>
                  <Table className="border-2">
                    <TableHeader className="bg-blue-400">
                      <TableRow className="text-sm md:text-md font-bold">
                        <TableHead className="text-white">Floor</TableHead>
                        <TableHead className="text-white">BSP-CLP</TableHead>
                      </TableRow>
                    </TableHeader>
                    <TableBody>
                      <TableRow key="1">
                        <TableCell>12th</TableCell>
                        <TableCell>Rs. 1,23,36,500/-</TableCell>
                      </TableRow>
                      <TableRow key="2">
                        <TableCell>11th</TableCell>
                        <TableCell>Rs. 1,22,26,500/-</TableCell>
                      </TableRow>
                      <TableRow key="3">
                        <TableCell>10th-5th</TableCell>
                        <TableCell>Rs. 1,21,16,500/-</TableCell>
                      </TableRow>
                      <TableRow key="4">
                        <TableCell>4th</TableCell>
                        <TableCell>Rs. 1,22,26,500/-</TableCell>
                      </TableRow>
                      <TableRow key="5">
                        <TableCell>3rd</TableCell>
                        <TableCell>Rs. 1,23,36,500/-</TableCell>
                      </TableRow>
                      <TableRow key="6">
                        <TableCell>2nd</TableCell>
                        <TableCell>Rs. 1,24,46,500/-</TableCell>
                      </TableRow>
                      <TableRow key="7">
                        <TableCell>1st</TableCell>
                        <TableCell>Rs. 1,26,66,500/-</TableCell>
                      </TableRow>
                    </TableBody>
                  </Table>
                </div>
              </Card>
              <Card
                className="w-full pt-5 md:p-5 flex flex-col-reverse jusitfy-center items-center gap-10 md:flex-row-reverse"
                id="2bhk6"
              >
                <Carousel className="w-2/3 md:w-1/3">
                  <CarouselContent>
                    <CarouselItem key="1">
                      <Image
                        src="/properties/mewsgate/floorplan_2bhk_1.jpg"
                        alt="bricksveiwer_mewsgate"
                        width={400}
                        height={900}
                        className="w-full h-full rounded"
                      />
                    </CarouselItem>
                  </CarouselContent>
                </Carousel>
                <div className="w-full md:w-2/3 flex flex-col justify-center items-center">
                  <h1 className="w-full text-2xl text-center md:text-left md:text-4xl font-bold text-skyBlue mb-5">
                    2BHK <span className="text-black">Block 06</span>
                  </h1>
                  <Table className="border-2 mb-5">
                    <TableHeader className="bg-green-400">
                      <TableRow className="text-sm md:text-md font-bold">
                        <TableHead className="text-white">Category</TableHead>
                        <TableHead className="text-white">Tower</TableHead>
                        <TableHead className="text-white">Super Area</TableHead>
                        <TableHead className="text-white">
                          Covered Area
                        </TableHead>
                        <TableHead className="text-white">
                          Carpet Area
                        </TableHead>
                      </TableRow>
                    </TableHeader>
                    <TableBody>
                      <TableRow key="1">
                        <TableCell>2BHK (2B+2W)</TableCell>
                        <TableCell>6</TableCell>
                        <TableCell>1390 sq. ft.</TableCell>
                        <TableCell>968 sq. ft.</TableCell>
                        <TableCell>717 sq. ft.</TableCell>
                      </TableRow>
                    </TableBody>
                  </Table>
                  <Table className="border-2">
                    <TableHeader className="bg-blue-400">
                      <TableRow className="text-sm md:text-md font-bold">
                        <TableHead className="text-white">Floor</TableHead>
                        <TableHead className="text-white">BSP-CLP</TableHead>
                      </TableRow>
                    </TableHeader>
                    <TableBody>
                      <TableRow key="1">
                        <TableCell>12th</TableCell>
                        <TableCell>N/A</TableCell>
                      </TableRow>
                      <TableRow key="2">
                        <TableCell>11th</TableCell>
                        <TableCell>Rs. 79,09,000/-</TableCell>
                      </TableRow>
                      <TableRow key="3">
                        <TableCell>10th-5th</TableCell>
                        <TableCell>Rs. 77,99,000/-</TableCell>
                      </TableRow>
                      <TableRow key="4">
                        <TableCell>4th</TableCell>
                        <TableCell>Rs. 79,09,000/-</TableCell>
                      </TableRow>
                      <TableRow key="5">
                        <TableCell>3rd</TableCell>
                        <TableCell>Rs. 80,19,000/-</TableCell>
                      </TableRow>
                      <TableRow key="6">
                        <TableCell>2nd</TableCell>
                        <TableCell>Rs. 81,29,000/-</TableCell>
                      </TableRow>
                      <TableRow key="7">
                        <TableCell>1st</TableCell>
                        <TableCell>Rs. 83,49,000/-</TableCell>
                      </TableRow>
                    </TableBody>
                  </Table>
                </div>
              </Card>
              <Card
                className="w-full md:p-5 flex flex-col-reverse jusitfy-center items-center gap-10 md:flex-row"
                id="3bhk6"
              >
                <Carousel className="w-2/3 md:w-1/3">
                  <CarouselContent>
                    <CarouselItem key="1">
                      <Image
                        src="/properties/mewsgate/floorplan_3bhk_1.jpg"
                        alt="bricksveiwer_mewsgate"
                        width={400}
                        height={900}
                        className="w-full h-full rounded"
                      />
                    </CarouselItem>
                  </CarouselContent>
                </Carousel>
                <div className="w-full md:w-2/3 flex flex-col justify-center items-center">
                  <h1 className="w-full text-2xl text-center md:text-left md:text-4xl font-bold text-skyBlue mb-5">
                    3BHK <span className="text-black">Block 06</span>
                  </h1>
                  <Table className="border-2 mb-5">
                    <TableHeader className="bg-green-400">
                      <TableRow className="text-sm md:text-md font-bold">
                        <TableHead className="text-white">Category</TableHead>
                        <TableHead className="text-white">Tower</TableHead>
                        <TableHead className="text-white">Super Area</TableHead>
                        <TableHead className="text-white">
                          Covered Area
                        </TableHead>
                        <TableHead className="text-white">
                          Carpet Area
                        </TableHead>
                      </TableRow>
                    </TableHeader>
                    <TableBody>
                      <TableRow key="1">
                        <TableCell>3BHK (3B+3W)</TableCell>
                        <TableCell>6</TableCell>
                        <TableCell>1790 sq. ft.</TableCell>
                        <TableCell>1153 sq. ft.</TableCell>
                        <TableCell>915 sq. ft.</TableCell>
                      </TableRow>
                    </TableBody>
                  </Table>
                  <Table className="border-2">
                    <TableHeader className="bg-blue-400">
                      <TableRow className="text-sm md:text-md font-bold">
                        <TableHead className="text-white">Floor</TableHead>
                        <TableHead className="text-white">BSP-CLP</TableHead>
                      </TableRow>
                    </TableHeader>
                    <TableBody>
                      <TableRow key="1">
                        <TableCell>12th</TableCell>
                        <TableCell>N/A</TableCell>
                      </TableRow>
                      <TableRow key="2">
                        <TableCell>11th</TableCell>
                        <TableCell>Rs. 1,01,53,000/-</TableCell>
                      </TableRow>
                      <TableRow key="3">
                        <TableCell>10th-5th</TableCell>
                        <TableCell>Rs. 1,01,43,000/-</TableCell>
                      </TableRow>
                      <TableRow key="4">
                        <TableCell>4th</TableCell>
                        <TableCell>Rs. 1,01,53,000/-</TableCell>
                      </TableRow>
                      <TableRow key="5">
                        <TableCell>3rd</TableCell>
                        <TableCell>Rs. 1,02,63,000/-</TableCell>
                      </TableRow>
                      <TableRow key="6">
                        <TableCell>2nd</TableCell>
                        <TableCell>Rs. 1,03,73,000/-</TableCell>
                      </TableRow>
                      <TableRow key="7">
                        <TableCell>1st</TableCell>
                        <TableCell>Rs. 1,05,93,000/-</TableCell>
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
I'm interested in 'MewsGate'
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

export default MewsGate;
