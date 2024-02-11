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
  formname: z.literal("CityOfDreams Form"),
});

const CityOfDreams = () => {
  const [phone, setPhone] = useState("");

  const [api, setApi] = React.useState<CarouselApi>();
  const [current, setCurrent] = React.useState(0);
  const [count, setCount] = React.useState(0);

  React.useEffect(() => {
    const phn = localStorage.getItem("phone");
    if (phn) {
      setPhone(phn);
    } else {
      redirect("/phone?redirect=/properties/CityOfDreams");
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
      formname: "CityOfDreams Form",
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
            / <span className="text-black"> CityOfDreams</span>
          </h1>
        </div>
      </section>
      <section className="my-8 w-full flex flex-col justify-center items-center">
        <Tabs
          defaultValue="twobhk"
          className="w-full container mx-auto flex flex-col justify-center items-center"
        >
          <p className="text-muted text-sm text-center md:text-md bg-skyBlue px-3 mb-2 rounded">
            Click on the tabs to switch
          </p>
          <TabsList className="md:h-12 bg-skyBlue text-white">
            <TabsTrigger className="text-md md:text-xl" value="twobhk">
              2BHK
            </TabsTrigger>
            <TabsTrigger className="text-md md:text-xl" value="threebhk">
              3BHK
            </TabsTrigger>
          </TabsList>
          <TabsContent value="twobhk" className="w-full">
            <Tabs
              defaultValue="one"
              className="w-full flex flex-col justify-center items-center"
            >
              <TabsList className="md:h-12 bg-safron text-white">
                <TabsTrigger className="text-md md:text-xl" value="one">
                  Type 1
                </TabsTrigger>
                <TabsTrigger className="text-md md:text-xl" value="two">
                  Type 2
                </TabsTrigger>
              </TabsList>
              <TabsContent value="one" className="w-full">
                <Card className="w-full md:p-10 flex flex-col jusitfy-center items-start gap-10 md:flex-row">
                  <Carousel setApi={setApi} className="w-full md:w-1/3">
                    <div className="py-2 text-center text-sm text-muted-foreground">
                      Image {current} of {count}
                    </div>
                    <CarouselContent>
                      <CarouselItem key="1">
                        <Card className="p-0">
                          <CardContent className="flex items-center justify-center p-0">
                            <Image
                              src="/properties/sbp/2bhk1.jpg"
                              alt="bricksveiwer_mewsgate"
                              width={400}
                              height={900}
                              className="w-full h-full rounded"
                            />
                          </CardContent>
                        </Card>
                      </CarouselItem>
                    </CarouselContent>
                    <CarouselPrevious className="absolute left-1 text-skyBlue bg-white border-skyBlue border-4" />
                    <CarouselNext className="absolute right-1 text-skyBlue bg-white border-skyBlue border-4" />
                  </Carousel>
                  <div className="w-full md:w-2/3 flex flex-col justify-center items-center">
                    <h1 className="w-full text-2xl text-center md:text-left md:text-4xl font-bold text-skyBlue mb-5">
                      City Of <span className="text-black">Dreams</span>
                    </h1>
                    <Table className="border-2 mb-5">
                      <TableHeader className="bg-green-400">
                        <TableRow className="text-sm md:text-md font-bold">
                          <TableHead className="text-white">
                            Tower Name
                          </TableHead>
                          <TableHead className="text-white">
                            Super Area
                          </TableHead>
                          <TableHead className="text-white">
                            Covered Area
                          </TableHead>
                          <TableHead className="text-white">
                            Carpet Area
                          </TableHead>
                          <TableHead className="text-white">
                            Block No.
                          </TableHead>
                          <TableHead className="text-white">
                            Block Type
                          </TableHead>
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
                            <TableCell>
                              Power Backup Charges {`(2kVA)`}
                            </TableCell>
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
                            Expected Date Of Possession {`(EDP)`} - 31st
                            December 2023
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
              </TabsContent>
              <TabsContent value="two" className="w-full">
                <Card className="w-full md:p-10 flex flex-col jusitfy-center items-start gap-10 md:flex-row-reverse">
                  <Carousel setApi={setApi} className="w-full md:w-1/3">
                    <div className="py-2 text-center text-sm text-muted-foreground">
                      Image {current} of {count}
                    </div>
                    <CarouselContent>
                      <CarouselItem key="1">
                        <Card className="p-0">
                          <CardContent className="flex items-center justify-center p-0">
                            <Image
                              src="/properties/sbp/2bhk2.jpg"
                              alt="bricksveiwer_mewsgate"
                              width={400}
                              height={900}
                              className="w-full h-full rounded"
                            />
                          </CardContent>
                        </Card>
                      </CarouselItem>
                    </CarouselContent>
                    <CarouselPrevious className="absolute left-1 text-skyBlue bg-white border-skyBlue border-4" />
                    <CarouselNext className="absolute right-1 text-skyBlue bg-white border-skyBlue border-4" />
                  </Carousel>
                  <div className="w-full md:w-2/3 flex flex-col justify-center items-center">
                    <h1 className="w-full text-2xl text-center md:text-left md:text-4xl font-bold text-skyBlue mb-5">
                      City Of <span className="text-black">Dreams</span>
                    </h1>
                    <Table className="border-2 mb-5">
                      <TableHeader className="bg-green-400">
                        <TableRow className="text-sm md:text-md font-bold">
                          <TableHead className="text-white">
                            Tower Name
                          </TableHead>
                          <TableHead className="text-white">
                            Super Area
                          </TableHead>
                          <TableHead className="text-white">
                            Covered Area
                          </TableHead>
                          <TableHead className="text-white">
                            Carpet Area
                          </TableHead>
                          <TableHead className="text-white">
                            Block No.
                          </TableHead>
                          <TableHead className="text-white">
                            Block Type
                          </TableHead>
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
                            <TableCell>
                              Power Backup Charges {`(2kVA)`}
                            </TableCell>
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
                            Expected Date Of Possession {`(EDP)`} - 31st
                            December 2024
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
              </TabsContent>
            </Tabs>
          </TabsContent>
          <TabsContent value="threebhk" className="w-full">
            <Tabs
              defaultValue="one"
              className="w-full flex flex-col justify-center items-center"
            >
              <TabsList className="md:h-12 bg-safron text-white">
                <TabsTrigger className="text-md md:text-xl" value="one">
                  Type 1
                </TabsTrigger>
                <TabsTrigger className="text-md md:text-xl" value="two">
                  Type 2
                </TabsTrigger>
              </TabsList>
              <TabsContent value="one" className="w-full">
                <Card className="w-full md:p-10 flex flex-col jusitfy-center items-start gap-10 md:flex-row">
                  <Carousel setApi={setApi} className="w-full md:w-1/3">
                    <div className="py-2 text-center text-sm text-muted-foreground">
                      Image {current} of {count}
                    </div>
                    <CarouselContent>
                      <CarouselItem key="1">
                        <Card className="p-0">
                          <CardContent className="flex items-center justify-center p-0">
                            <Image
                              src="/properties/sbp/3bhk1.jpg"
                              alt="bricksveiwer_mewsgate"
                              width={400}
                              height={900}
                              className="w-full h-full rounded"
                            />
                          </CardContent>
                        </Card>
                      </CarouselItem>
                    </CarouselContent>
                    <CarouselPrevious className="absolute left-1 text-skyBlue bg-white border-skyBlue border-4" />
                    <CarouselNext className="absolute right-1 text-skyBlue bg-white border-skyBlue border-4" />
                  </Carousel>
                  <div className="w-full md:w-2/3 flex flex-col justify-center items-center">
                    <h1 className="w-full text-2xl text-center md:text-left md:text-4xl font-bold text-skyBlue mb-5">
                      City Of <span className="text-black">Dreams</span>
                    </h1>
                    <Table className="border-2 mb-5">
                      <TableHeader className="bg-green-400">
                        <TableRow className="text-sm md:text-md font-bold">
                          <TableHead className="text-white">
                            Tower Name
                          </TableHead>
                          <TableHead className="text-white">
                            Super Area
                          </TableHead>
                          <TableHead className="text-white">
                            Covered Area
                          </TableHead>
                          <TableHead className="text-white">
                            Carpet Area
                          </TableHead>
                          <TableHead className="text-white">
                            Block Type
                          </TableHead>
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
                            <TableCell>
                              Power Backup Charges {`(2kVA)`}
                            </TableCell>
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
                            Expected Date Of Possession {`(EDP)`} - 30th June
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
              </TabsContent>
              <TabsContent value="two" className="w-full">
                <Card className="w-full md:p-10 flex flex-col jusitfy-center items-start gap-10 md:flex-row-reverse">
                  <Carousel setApi={setApi} className="w-full md:w-1/3">
                    <div className="py-2 text-center text-sm text-muted-foreground">
                      Image {current} of {count}
                    </div>
                    <CarouselContent>
                      <CarouselItem key="1">
                        <Card className="p-0">
                          <CardContent className="flex items-center justify-center p-0">
                            <Image
                              src="/properties/sbp/3bhk2.jpg"
                              alt="bricksveiwer_mewsgate"
                              width={400}
                              height={900}
                              className="w-full h-full rounded"
                            />
                          </CardContent>
                        </Card>
                      </CarouselItem>
                    </CarouselContent>
                    <CarouselPrevious className="absolute left-1 text-skyBlue bg-white border-skyBlue border-4" />
                    <CarouselNext className="absolute right-1 text-skyBlue bg-white border-skyBlue border-4" />
                  </Carousel>
                  <div className="w-full md:w-2/3 flex flex-col justify-center items-center">
                    <h1 className="w-full text-2xl text-center md:text-left md:text-4xl font-bold text-skyBlue mb-5">
                      City Of <span className="text-black">Dreams</span>
                    </h1>
                    <Table className="border-2 mb-5">
                      <TableHeader className="bg-green-400">
                        <TableRow className="text-sm md:text-md font-bold">
                          <TableHead className="text-white">
                            Tower Name
                          </TableHead>
                          <TableHead className="text-white">
                            Super Area
                          </TableHead>
                          <TableHead className="text-white">
                            Covered Area
                          </TableHead>
                          <TableHead className="text-white">
                            Carpet Area
                          </TableHead>
                          <TableHead className="text-white">
                            Block Type
                          </TableHead>
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
                            <TableCell>
                              Power Backup Charges {`(2kVA)`}
                            </TableCell>
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
                            Expected Date Of Possession {`(EDP)`} - 31st
                            December 2025
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
                                7.5% of BSP + Stamp Duty + GPC* + IFMS + SMC +
                                GST {`(As applicable)`}
                              </TableCell>
                            </TableRow>
                          </TableBody>
                        </Table>
                      </DialogContent>
                    </Dialog>
                  </div>
                </Card>
              </TabsContent>
            </Tabs>
          </TabsContent>
        </Tabs>
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
I'm interested in 'CityOfDreams'
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

export default CityOfDreams;
