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
    area: "1225 Sq. Ft.",
    price: "$200,000",
    floorplan: "/properties/mewsgate/floorplan_2bhk_2.jpg",
  },
  {
    id: 2,
    block: "Block 04",
    type: "3 BHK",
    area: "1650 Sq. Ft.",
    price: "$300,000",
    floorplan: "/properties/mewsgate/floorplan_3bhk_2.jpg",
  },
  {
    id: 3,
    block: "Block 05",
    type: "4 BHK",
    area: "2160 Sq. Ft.",
    price: "$400,000",
    floorplan: "/properties/mewsgate/floorplan_4bhk_1.jpg",
  },
  {
    id: 4,
    block: "Block 06",
    type: "2 BHK",
    area: "1390 Sq. Ft.",
    price: "$250,000",
    floorplan: "/properties/mewsgate/floorplan_2bhk_1.jpg",
  },
  {
    id: 5,
    block: "Block 06",
    type: "3 BHK",
    area: "1790 Sq. Ft.",
    price: "$350,000",
    floorplan: "/properties/mewsgate/floorplan_3bhk_1.jpg",
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
                <strong>NH21, Kharar - Kurali Road</strong>. Just 5 minutes away
                from Chandigarh border, it is surrounded by well developed
                commercial projects and educational institutions such as
                <strong>
                  Chandigarh University, Rayat Bahra University, Doaba Group of
                  Colleges, Cambridge School
                </strong>{" "}
                and more.
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
                NH21, Kharar - Kurali Road, Punjab
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
              <Card className="w-full pt-5 md:p-5 flex flex-col-reverse jusitfy-center items-center gap-10 md:flex-row">
                <Carousel className="w-2/3 md:w-1/3">
                  <CarouselContent>
                    <CarouselItem key="1">
                      <Image
                        src="/properties/sbp/2bhk1.jpg"
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
                    2BHK <span className="text-black">Type-1</span>
                  </h1>
                  <Table className="border-2 mb-5">
                    <TableHeader className="bg-green-400">
                      <TableRow className="text-sm md:text-md font-bold">
                        <TableHead className="text-white">Tower Name</TableHead>
                        <TableHead className="text-white">Super Area</TableHead>
                        <TableHead className="text-white">
                          Covered Area
                        </TableHead>
                        <TableHead className="text-white">
                          Carpet Area
                        </TableHead>
                        <TableHead className="text-white">Block No.</TableHead>
                        <TableHead className="text-white">Block Type</TableHead>
                      </TableRow>
                    </TableHeader>
                    <TableBody>
                      <TableRow key="1">
                        <TableCell>2BHK Apartment + Store</TableCell>
                        <TableCell>1240 sq. ft.</TableCell>
                        <TableCell>940 sq. ft.</TableCell>
                        <TableCell>698 sq. ft.</TableCell>
                        <TableCell>E, F & H</TableCell>
                        <TableCell>S+3</TableCell>
                      </TableRow>
                    </TableBody>
                  </Table>
                  <div className="w-full flex flex-col justify-center items-start gap-2 md:flex-row">
                    <Table className="border-2">
                      <TableHeader className="bg-blue-400">
                        <TableRow className="text-sm md:text-md font-bold">
                          <TableHead className="text-white">
                            Basic Price {`(Floor Wise)`}
                          </TableHead>
                          <TableHead className="text-white">
                            Price in ₹
                          </TableHead>
                        </TableRow>
                      </TableHeader>
                      <TableBody>
                        <TableRow key="1">
                          <TableCell>3rd Floor</TableCell>
                          <TableCell>49,00,000</TableCell>
                        </TableRow>
                        <TableRow key="2">
                          <TableCell>2nd Floor</TableCell>
                          <TableCell>50,90,000</TableCell>
                        </TableRow>
                        <TableRow key="3">
                          <TableCell>1st Floor</TableCell>
                          <TableCell>51,90,000</TableCell>
                        </TableRow>
                        <TableRow key="4">
                          <TableCell>Roof Right Charges</TableCell>
                          <TableCell>3,00,000</TableCell>
                        </TableRow>
                      </TableBody>
                    </Table>
                    <Table className="border-2">
                      <TableHeader className="bg-blue-400">
                        <TableRow className="text-sm md:text-md font-bold">
                          <TableHead className="text-white">
                            Optional Charges
                          </TableHead>
                          <TableHead className="text-white">
                            Price in ₹
                          </TableHead>
                        </TableRow>
                      </TableHeader>
                      <TableBody>
                        <TableRow key="1">
                          <TableCell>Power Backup Charges {`(2kVA)`}</TableCell>
                          <TableCell>Nil</TableCell>
                        </TableRow>
                        <TableRow key="2">
                          <TableCell>Open Car Parking Charges</TableCell>
                          <TableCell>Nil</TableCell>
                        </TableRow>
                        <TableRow key="3">
                          <TableCell>Club Membership Charges</TableCell>
                          <TableCell>Nil</TableCell>
                        </TableRow>
                        <TableRow key="4">
                          <TableCell>Parking Facing Charges</TableCell>
                          <TableCell>3,00,000</TableCell>
                        </TableRow>
                        <TableRow key="5">
                          <TableCell>Corner Flat Charges</TableCell>
                          <TableCell>1,00,000</TableCell>
                        </TableRow>
                      </TableBody>
                    </Table>
                  </div>
                  <Dialog>
                    <DialogTrigger className="text-skyBlue text-sm md:text-lg font-bold">
                      Click to Open Construction Link Plans
                    </DialogTrigger>
                    <DialogContent className="h-96 overflow-auto ">
                      <Table>
                        <TableCaption>
                          Expected Date Of Possession {`(EDP)`} - 31st December
                          2023
                        </TableCaption>
                        <TableBody>
                          <TableRow key="1">
                            <TableCell>Booking Amount</TableCell>
                            <TableCell>
                              10% of BSP + GST {`(As applicable)`}
                            </TableCell>
                          </TableRow>
                          <TableRow key="2">
                            <TableCell>
                              On start of construction of Block
                            </TableCell>
                            <TableCell>
                              15% of BSP + GST {`(As applicable)`}
                            </TableCell>
                          </TableRow>
                          <TableRow key="3">
                            <TableCell>On completion of foundation</TableCell>
                            <TableCell>
                              15% of BSP + GST {`(As applicable)`}
                            </TableCell>
                          </TableRow>
                          <TableRow key="4">
                            <TableCell>
                              On completion of 1st slab of block
                            </TableCell>
                            <TableCell>
                              15% of BSP + GST {`(As applicable)`}
                            </TableCell>
                          </TableRow>
                          <TableRow key="5">
                            <TableCell>
                              On completion of 2nd slab of block
                            </TableCell>
                            <TableCell>
                              10% of BSP + GST {`(As applicable)`}
                            </TableCell>
                          </TableRow>
                          <TableRow key="6">
                            <TableCell>
                              On completion of 3rd slab of block
                            </TableCell>
                            <TableCell>
                              10% of BSP + GST {`(As applicable)`}
                            </TableCell>
                          </TableRow>
                          <TableRow key="7">
                            <TableCell>On completion of Plaster</TableCell>
                            <TableCell>
                              10% of BSP + GST {`(As applicable)`}
                            </TableCell>
                          </TableRow>
                          <TableRow key="8">
                            <TableCell>
                              On completion of flooring within Apartment
                            </TableCell>
                            <TableCell>
                              10% of BSP + GST {`(As applicable)`}
                            </TableCell>
                          </TableRow>
                          <TableRow key="9" className="bg-gray-100">
                            <TableCell>
                              At the time of offer of possession
                            </TableCell>
                            <TableCell>
                              5% of BSP + Stamp Duty + GPC* + IFMS + SMC + GST{" "}
                              {`(As applicable)`}
                            </TableCell>
                          </TableRow>
                        </TableBody>
                      </Table>
                    </DialogContent>
                  </Dialog>
                </div>
              </Card>
              <Card className="w-full pt-5 md:p-5 flex flex-col-reverse jusitfy-center items-center gap-10 md:flex-row-reverse">
                <Carousel className="w-2/3 md:w-1/3">
                  <CarouselContent>
                    <CarouselItem key="1">
                      <Image
                        src="/properties/sbp/2bhk2.jpg"
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
                    2BHK <span className="text-black">Type-2</span>
                  </h1>
                  <Table className="border-2 mb-5">
                    <TableHeader className="bg-green-400">
                      <TableRow className="text-sm md:text-md font-bold">
                        <TableHead className="text-white">Tower Name</TableHead>
                        <TableHead className="text-white">Super Area</TableHead>
                        <TableHead className="text-white">
                          Covered Area
                        </TableHead>
                        <TableHead className="text-white">
                          Carpet Area
                        </TableHead>
                        <TableHead className="text-white">Block No.</TableHead>
                        <TableHead className="text-white">Block Type</TableHead>
                      </TableRow>
                    </TableHeader>
                    <TableBody>
                      <TableRow key="1">
                        <TableCell>2BHK Apartment</TableCell>
                        <TableCell>1359 sq. ft.</TableCell>
                        <TableCell>1221 sq. ft.</TableCell>
                        <TableCell>764 sq. ft.</TableCell>
                        <TableCell>I</TableCell>
                        <TableCell>S+12</TableCell>
                      </TableRow>
                    </TableBody>
                  </Table>
                  <div className="w-full flex flex-col justify-center items-start gap-2 md:flex-row">
                    <Table className="border-2">
                      <TableHeader className="bg-blue-400">
                        <TableRow className="text-sm md:text-md font-bold">
                          <TableHead className="text-white">
                            Basic Price {`(Floor Wise)`}
                          </TableHead>
                          <TableHead className="text-white">
                            Price in ₹
                          </TableHead>
                        </TableRow>
                      </TableHeader>
                      <TableBody>
                        <TableRow key="1">
                          <TableCell>11th & 12th Floor</TableCell>
                          <TableCell>55,90,000</TableCell>
                        </TableRow>
                        <TableRow key="2">
                          <TableCell>7th to 10th Floor</TableCell>
                          <TableCell>56,90,000</TableCell>
                        </TableRow>
                        <TableRow key="3">
                          <TableCell>4th to 6th Floor</TableCell>
                          <TableCell>57,90,000</TableCell>
                        </TableRow>
                        <TableRow key="4">
                          <TableCell>2nd & 3rd Floor</TableCell>
                          <TableCell>58,90,000</TableCell>
                        </TableRow>
                        <TableRow key="5">
                          <TableCell>1st Floor</TableCell>
                          <TableCell>62,90,000</TableCell>
                        </TableRow>
                      </TableBody>
                    </Table>
                    <Table className="border-2">
                      <TableHeader className="bg-blue-400">
                        <TableRow className="text-sm md:text-md font-bold">
                          <TableHead className="text-white">
                            Optional Charges
                          </TableHead>
                          <TableHead className="text-white">
                            Price in ₹
                          </TableHead>
                        </TableRow>
                      </TableHeader>
                      <TableBody>
                        <TableRow key="1">
                          <TableCell>Power Backup Charges {`(2kVA)`}</TableCell>
                          <TableCell>Nil</TableCell>
                        </TableRow>
                        <TableRow key="2">
                          <TableCell>Open Car Parking Charges</TableCell>
                          <TableCell>Nil</TableCell>
                        </TableRow>
                        <TableRow key="3">
                          <TableCell>Club Membership Charges</TableCell>
                          <TableCell>Nil</TableCell>
                        </TableRow>
                        <TableRow key="4">
                          <TableCell>Parking Facing Charges</TableCell>
                          <TableCell>2,00,000</TableCell>
                        </TableRow>
                        <TableRow key="5">
                          <TableCell>Corner Flat Charges</TableCell>
                          <TableCell>1,00,000</TableCell>
                        </TableRow>
                      </TableBody>
                    </Table>
                  </div>
                  <Dialog>
                    <DialogTrigger className="text-skyBlue text-sm md:text-lg font-bold">
                      Click to Open Construction Link Plans
                    </DialogTrigger>
                    <DialogContent className="h-96 overflow-auto ">
                      <Table>
                        <TableCaption>
                          Expected Date Of Possession {`(EDP)`} - 31st December
                          2024
                        </TableCaption>
                        <TableBody>
                          <TableRow key="1">
                            <TableCell>Booking Amount</TableCell>
                            <TableCell>
                              10% of BSP + GST {`(As applicable)`}
                            </TableCell>
                          </TableRow>
                          <TableRow key="2">
                            <TableCell>Within 30 days of booking</TableCell>
                            <TableCell>
                              15% of BSP + GST {`(As applicable)`}
                            </TableCell>
                          </TableRow>
                          <TableRow key="3">
                            <TableCell>On completion of foundation</TableCell>
                            <TableCell>
                              15% of BSP + GST {`(As applicable)`}
                            </TableCell>
                          </TableRow>
                          <TableRow key="4">
                            <TableCell>
                              On completion of 3rd slab of block
                            </TableCell>
                            <TableCell>
                              10% of BSP + GST {`(As applicable)`}
                            </TableCell>
                          </TableRow>
                          <TableRow key="5">
                            <TableCell>
                              On completion of 6th slab of block
                            </TableCell>
                            <TableCell>
                              10% of BSP + GST {`(As applicable)`}
                            </TableCell>
                          </TableRow>
                          <TableRow key="6">
                            <TableCell>
                              On completion of 9th slab of block
                            </TableCell>
                            <TableCell>
                              10% of BSP + GST {`(As applicable)`}
                            </TableCell>
                          </TableRow>
                          <TableRow key="7">
                            <TableCell>
                              On completion of 12th slab of block
                            </TableCell>
                            <TableCell>
                              10% of BSP + GST {`(As applicable)`}
                            </TableCell>
                          </TableRow>
                          <TableRow key="8">
                            <TableCell>On completion of Plaster</TableCell>
                            <TableCell>
                              10% of BSP + GST {`(As applicable)`}
                            </TableCell>
                          </TableRow>
                          <TableRow key="8">
                            <TableCell>
                              On completion of flooring within Apartment
                            </TableCell>
                            <TableCell>
                              5% of BSP + GST {`(As applicable)`}
                            </TableCell>
                          </TableRow>
                          <TableRow key="9" className="bg-gray-100">
                            <TableCell>
                              At the time of offer of possession
                            </TableCell>
                            <TableCell>
                              5% of BSP + Stamp Duty + GPC* + IFMS + SMC + GST{" "}
                              {`(As applicable)`}
                            </TableCell>
                          </TableRow>
                        </TableBody>
                      </Table>
                    </DialogContent>
                  </Dialog>
                </div>
              </Card>
              <Card className="w-full md:p-5 flex flex-col-reverse jusitfy-center items-center gap-10 md:flex-row">
                <Carousel className="w-2/3 md:w-1/3">
                  <CarouselContent>
                    <CarouselItem key="1">
                      <Image
                        src="/properties/sbp/3bhk1.jpg"
                        alt="bricksveiwer_mewsgate"
                        width={400}
                        height={900}
                        className="w-full h-full rounded"
                      />
                    </CarouselItem>
                  </CarouselContent>
                </Carousel>
                <div className="w-full md:w-2/3 flex flex-col justify-center items-center">
                  <h1 className="w-full pt-5 text-2xl text-center md:text-left md:text-4xl font-bold text-skyBlue mb-5">
                    3BHK <span className="text-black">Type-1</span>
                  </h1>
                  <Table className="border-2 mb-5">
                    <TableHeader className="bg-green-400">
                      <TableRow className="text-sm md:text-md font-bold">
                        <TableHead className="text-white">Tower Name</TableHead>
                        <TableHead className="text-white">Super Area</TableHead>
                        <TableHead className="text-white">
                          Covered Area
                        </TableHead>
                        <TableHead className="text-white">
                          Carpet Area
                        </TableHead>
                        <TableHead className="text-white">Block Type</TableHead>
                      </TableRow>
                    </TableHeader>
                    <TableBody>
                      <TableRow key="1">
                        <TableCell>3BHK Apartment</TableCell>
                        <TableCell>1698 sq. ft.</TableCell>
                        <TableCell>1320 sq. ft.</TableCell>
                        <TableCell>1107 sq. ft.</TableCell>
                        <TableCell>S+3</TableCell>
                      </TableRow>
                    </TableBody>
                  </Table>
                  <div className="w-full flex flex-col justify-center items-start gap-2 md:flex-row">
                    <Table className="border-2">
                      <TableHeader className="bg-blue-400">
                        <TableRow className="text-sm md:text-md font-bold">
                          <TableHead className="text-white">
                            Basic Price {`(Floor Wise)`}
                          </TableHead>
                          <TableHead className="text-white">
                            Price in ₹
                          </TableHead>
                        </TableRow>
                      </TableHeader>
                      <TableBody>
                        <TableRow key="1">
                          <TableCell>
                            4th Floor {`(With Roof Rights)`}
                          </TableCell>
                          <TableCell>1,00,00,000</TableCell>
                        </TableRow>
                        <TableRow key="2">
                          <TableCell>3rd Floor</TableCell>
                          <TableCell>95,00,000</TableCell>
                        </TableRow>
                        <TableRow key="3">
                          <TableCell>2nd Floor</TableCell>
                          <TableCell>98,00,000</TableCell>
                        </TableRow>
                        <TableRow key="4">
                          <TableCell>1st Floor</TableCell>
                          <TableCell>1,00,00,000</TableCell>
                        </TableRow>
                      </TableBody>
                    </Table>
                    <Table className="border-2">
                      <TableHeader className="bg-blue-400">
                        <TableRow className="text-sm md:text-md font-bold">
                          <TableHead className="text-white">
                            Optional Charges
                          </TableHead>
                          <TableHead className="text-white">
                            Price in ₹
                          </TableHead>
                        </TableRow>
                      </TableHeader>
                      <TableBody>
                        <TableRow key="1">
                          <TableCell>Power Backup Charges {`(2kVA)`}</TableCell>
                          <TableCell>Nil</TableCell>
                        </TableRow>
                        <TableRow key="2">
                          <TableCell>Open Car Parking Charges</TableCell>
                          <TableCell>Nil</TableCell>
                        </TableRow>
                        <TableRow key="3">
                          <TableCell>Club Membership Charges</TableCell>
                          <TableCell>Nil</TableCell>
                        </TableRow>
                        <TableRow key="4">
                          <TableCell>Parking Facing Charges</TableCell>
                          <TableCell>5,00,000</TableCell>
                        </TableRow>
                        <TableRow key="5">
                          <TableCell>Corner Flat Charges</TableCell>
                          <TableCell>2,00,000</TableCell>
                        </TableRow>
                      </TableBody>
                    </Table>
                  </div>
                  <Dialog>
                    <DialogTrigger className="text-skyBlue text-sm md:text-lg font-bold">
                      Click to Open Construction Link Plans
                    </DialogTrigger>
                    <DialogContent className="h-96 overflow-auto ">
                      <Table>
                        <TableCaption>
                          Expected Date Of Possession {`(EDP)`} - 30th June 2024
                        </TableCaption>
                        <TableBody>
                          <TableRow key="1">
                            <TableCell>Booking Amount</TableCell>
                            <TableCell>
                              10% of BSP + GST {`(As applicable)`}
                            </TableCell>
                          </TableRow>
                          <TableRow key="2">
                            <TableCell>
                              On start of construction of Block
                            </TableCell>
                            <TableCell>
                              15% of BSP + GST {`(As applicable)`}
                            </TableCell>
                          </TableRow>
                          <TableRow key="3">
                            <TableCell>On completion of foundation</TableCell>
                            <TableCell>
                              15% of BSP + GST {`(As applicable)`}
                            </TableCell>
                          </TableRow>
                          <TableRow key="4">
                            <TableCell>
                              On completion of 1st slab of block
                            </TableCell>
                            <TableCell>
                              10% of BSP + GST {`(As applicable)`}
                            </TableCell>
                          </TableRow>
                          <TableRow key="5">
                            <TableCell>
                              On completion of 2nd slab of block
                            </TableCell>
                            <TableCell>
                              10% of BSP + GST {`(As applicable)`}
                            </TableCell>
                          </TableRow>
                          <TableRow key="6">
                            <TableCell>
                              On completion of 3rd slab of block
                            </TableCell>
                            <TableCell>
                              10% of BSP + GST {`(As applicable)`}
                            </TableCell>
                          </TableRow>
                          <TableRow key="7">
                            <TableCell>
                              On completion of 4th slab of block
                            </TableCell>
                            <TableCell>
                              10% of BSP + GST {`(As applicable)`}
                            </TableCell>
                          </TableRow>
                          <TableRow key="8">
                            <TableCell>On completion of Plaster</TableCell>
                            <TableCell>
                              10% of BSP + GST {`(As applicable)`}
                            </TableCell>
                          </TableRow>
                          <TableRow key="9">
                            <TableCell>
                              On completion of flooring within Apartment
                            </TableCell>
                            <TableCell>
                              5% of BSP + GST {`(As applicable)`}
                            </TableCell>
                          </TableRow>
                          <TableRow key="9" className="bg-gray-100">
                            <TableCell>
                              At the time of offer of possession
                            </TableCell>
                            <TableCell>
                              5% of BSP + Stamp Duty + GPC* + IFMS + SMC + GST{" "}
                              {`(As applicable)`}
                            </TableCell>
                          </TableRow>
                        </TableBody>
                      </Table>
                    </DialogContent>
                  </Dialog>
                </div>
              </Card>
              <Card className="w-full pt-5 md:p-5 flex flex-col-reverse jusitfy-center items-center gap-10 md:flex-row-reverse">
                <Carousel className="w-2/3 md:w-1/3">
                  <CarouselContent>
                    <CarouselItem key="1">
                      <Image
                        src="/properties/sbp/3bhk2.jpg"
                        alt="bricksveiwer_mewsgate"
                        width={400}
                        height={900}
                        className="w-full h-full rounded"
                      />
                    </CarouselItem>
                  </CarouselContent>
                  <CarouselPrevious className="absolute left-1 text-skyBlue bg-white border-skyBlue border-4" />
                  <CarouselNext className="absolute right-1 text-skyBlue bg-white border-skyBlue border-4" />
                </Carousel>
                <div className="w-full md:w-2/3 flex flex-col justify-center items-center">
                  <h1 className="w-full text-2xl text-center md:text-left md:text-4xl font-bold text-skyBlue mb-5">
                    3BHK <span className="text-black">Type-2</span>
                  </h1>
                  <Table className="border-2 mb-5">
                    <TableHeader className="bg-green-400">
                      <TableRow className="text-sm md:text-md font-bold">
                        <TableHead className="text-white">Tower Name</TableHead>
                        <TableHead className="text-white">Super Area</TableHead>
                        <TableHead className="text-white">
                          Covered Area
                        </TableHead>
                        <TableHead className="text-white">
                          Carpet Area
                        </TableHead>
                        <TableHead className="text-white">Block Type</TableHead>
                      </TableRow>
                    </TableHeader>
                    <TableBody>
                      <TableRow key="1">
                        <TableCell>3BHK Apartment</TableCell>
                        <TableCell>2024 sq. ft.</TableCell>
                        <TableCell>1008 sq. ft.</TableCell>
                        <TableCell>1807 sq. ft.</TableCell>
                        <TableCell>S+19</TableCell>
                      </TableRow>
                    </TableBody>
                  </Table>
                  <div className="w-full flex flex-col justify-center items-start gap-2 md:flex-row">
                    <Table className="border-2">
                      <TableHeader className="bg-blue-400">
                        <TableRow className="text-sm md:text-md font-bold">
                          <TableHead className="text-white">
                            Basic Price {`(Floor Wise)`}
                          </TableHead>
                          <TableHead className="text-white">
                            Price in ₹
                          </TableHead>
                        </TableRow>
                      </TableHeader>
                      <TableBody>
                        <TableRow key="1">
                          <TableCell>15th to 19th Floor</TableCell>
                          <TableCell>89,90,000</TableCell>
                        </TableRow>
                        <TableRow key="2">
                          <TableCell>10th to 14th Floor</TableCell>
                          <TableCell>90,90,000</TableCell>
                        </TableRow>
                        <TableRow key="3">
                          <TableCell>5th to 9th Floor</TableCell>
                          <TableCell>91,90,000</TableCell>
                        </TableRow>
                        <TableRow key="4">
                          <TableCell>2nd & 4th Floor</TableCell>
                          <TableCell>92,90,000</TableCell>
                        </TableRow>
                        <TableRow key="5">
                          <TableCell>1st Floor</TableCell>
                          <TableCell>95,90,000</TableCell>
                        </TableRow>
                      </TableBody>
                    </Table>
                    <Table className="border-2">
                      <TableHeader className="bg-blue-400">
                        <TableRow className="text-sm md:text-md font-bold">
                          <TableHead className="text-white">
                            Optional Charges
                          </TableHead>
                          <TableHead className="text-white">
                            Price in ₹
                          </TableHead>
                        </TableRow>
                      </TableHeader>
                      <TableBody>
                        <TableRow key="1">
                          <TableCell>Power Backup Charges {`(2kVA)`}</TableCell>
                          <TableCell>Nil</TableCell>
                        </TableRow>
                        <TableRow key="2">
                          <TableCell>Open Car Parking Charges</TableCell>
                          <TableCell>Nil</TableCell>
                        </TableRow>
                        <TableRow key="3">
                          <TableCell>Club Membership Charges</TableCell>
                          <TableCell>Nil</TableCell>
                        </TableRow>
                        <TableRow key="4">
                          <TableCell>Parking Facing Charges</TableCell>
                          <TableCell>2,00,000</TableCell>
                        </TableRow>
                        <TableRow key="5">
                          <TableCell>Corner Flat Charges</TableCell>
                          <TableCell>1,00,000</TableCell>
                        </TableRow>
                      </TableBody>
                    </Table>
                  </div>
                  <Dialog>
                    <DialogTrigger className="text-skyBlue text-sm md:text-lg font-bold">
                      Click to Open Construction Link Plans
                    </DialogTrigger>
                    <DialogContent className="h-96 overflow-auto ">
                      <Table>
                        <TableCaption>
                          Expected Date Of Possession {`(EDP)`} - 31st December
                          2025
                        </TableCaption>
                        <TableBody>
                          <TableRow key="1">
                            <TableCell>At the time of Booking</TableCell>
                            <TableCell>
                              10% of BSP + GST {`(As applicable)`}
                            </TableCell>
                          </TableRow>
                          <TableRow key="2">
                            <TableCell>Within 15 days of booking</TableCell>
                            <TableCell>
                              10% of BSP + GST {`(As applicable)`}
                            </TableCell>
                          </TableRow>
                          <TableRow key="3">
                            <TableCell>On Start of Construction</TableCell>
                            <TableCell>
                              10% of BSP + GST {`(As applicable)`}
                            </TableCell>
                          </TableRow>
                          <TableRow key="4">
                            <TableCell>On completion of foundation</TableCell>
                            <TableCell>
                              10% of BSP + GST {`(As applicable)`}
                            </TableCell>
                          </TableRow>
                          <TableRow key="5">
                            <TableCell>
                              On completion of 2nd slab of block
                            </TableCell>
                            <TableCell>
                              7.5% of BSP + GST {`(As applicable)`}
                            </TableCell>
                          </TableRow>
                          <TableRow key="6">
                            <TableCell>
                              On completion of 6th slab of block
                            </TableCell>
                            <TableCell>
                              7.5% of BSP + GST {`(As applicable)`}
                            </TableCell>
                          </TableRow>
                          <TableRow key="7">
                            <TableCell>
                              On completion of 10th slab of block
                            </TableCell>
                            <TableCell>
                              7.5% of BSP + GST {`(As applicable)`}
                            </TableCell>
                          </TableRow>
                          <TableRow key="8">
                            <TableCell>
                              On completion of 13th slab of block
                            </TableCell>
                            <TableCell>
                              7.5% of BSP + GST {`(As applicable)`}
                            </TableCell>
                          </TableRow>
                          <TableRow key="9">
                            <TableCell>
                              On completion of 16th of block
                            </TableCell>
                            <TableCell>
                              7.5% of BSP + GST {`(As applicable)`}
                            </TableCell>
                          </TableRow>
                          <TableRow key="10">
                            <TableCell>
                              On completion of 19th of block
                            </TableCell>
                            <TableCell>
                              7.5% of BSP + GST {`(As applicable)`}
                            </TableCell>
                          </TableRow>
                          <TableRow key="11">
                            <TableCell>
                              On completion of flooring within Apartment
                            </TableCell>
                            <TableCell>
                              7.5% of BSP + GST {`(As applicable)`}
                            </TableCell>
                          </TableRow>
                          <TableRow key="11" className="bg-gray-100">
                            <TableCell>
                              At the time of offer of possession
                            </TableCell>
                            <TableCell>
                              7.5% of BSP + Stamp Duty + GPC* + IFMS + SMC + GST{" "}
                              {`(As applicable)`}
                            </TableCell>
                          </TableRow>
                        </TableBody>
                      </Table>
                    </DialogContent>
                  </Dialog>
                </div>
              </Card>
            </div>
          </CardContent>
        </Card>
      </section>
      <div className="my-8 w-full flex flex-col justify-center items-center">
        <div className="w-full container flex flex-col justify-center items-center px-5 md:px-10 lg:px-20">
          <div className="w-full flex justify-between items-center gap-10 mt-10">
            <Table>
              <TableCaption>Available Units in Mews Gate.</TableCaption>
              <TableHeader>
                <TableRow className="text-lg font-bold">
                  <TableHead>Block/Tower</TableHead>
                  <TableHead>Apartment Type</TableHead>
                  <TableHead>Super Area</TableHead>
                  <TableHead>Purchase Price</TableHead>
                  <TableHead className="text-right">Floor Plan</TableHead>
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
