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
  formname: z.literal("Foressta Form"),
});

const Foressta = () => {
  const [phone, setPhone] = useState("");

  const [api, setApi] = React.useState<CarouselApi>();
  const [current, setCurrent] = React.useState(0);
  const [count, setCount] = React.useState(0);

  React.useEffect(() => {
    const phn = localStorage.getItem("phone");
    if (phn) {
      setPhone(phn);
    } else {
      redirect("/phone?redirect=/properties/foressta");
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
      formname: "Foressta Form",
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
            / <span className="text-black"> Foressta</span>
          </h1>
        </div>
      </section>
      <section className="my-8 w-full flex flex-col justify-center items-center">
        <Tabs
          defaultValue="villa"
          className="w-full container mx-auto flex flex-col justify-center items-center"
        >
          <p className="text-muted text-sm text-center md:text-md bg-skyBlue px-3 mb-2 rounded">
            Click on the tabs to switch
          </p>
          <TabsList className="md:h-12 bg-safron text-white">
            <TabsTrigger className="text-md md:text-xl" value="suite">
              Serviced Suite
            </TabsTrigger>
            <TabsTrigger className="text-md md:text-xl" value="villa">
              Serviced Villa
            </TabsTrigger>
          </TabsList>
          <TabsContent value="suite" className="w-full">
            <Card className="w-full p-2 md:p-10 flex flex-col-reverse jusitfy-center items-start gap-10 md:flex-row">
              <div className="w-full md:w-1/2 flex flex-col justify-center items-center">
                <h1 className="w-full text-2xl text-center md:text-left md:text-4xl font-bold text-skyBlue mb-5">
                  Foressta <span className="text-black">Serviced Suite</span>
                </h1>
                <Table>
                  <TableHeader>
                    <TableRow className="text-sm md:text-lg font-bold">
                      <TableHead>Tower Name</TableHead>
                      <TableHead>Super Built Up Area</TableHead>
                      <TableHead>Price in ₹</TableHead>
                    </TableRow>
                  </TableHeader>
                  <TableBody>
                    <TableRow key="1">
                      <TableCell>Serviced Suite</TableCell>
                      <TableCell>1200 sq.ft.</TableCell>
                      <TableCell>2,10,00,000</TableCell>
                    </TableRow>
                  </TableBody>
                </Table>
                <Dialog>
                  <DialogTrigger className="text-skyBlue text-sm md:text-lg font-bold">
                    Click to Open Construction Link Plans
                  </DialogTrigger>
                  <DialogContent>
                    <Table>
                      <TableCaption>
                        Expected Date Of Possession {`(EDP)`} - 31st December
                        2027
                      </TableCaption>
                      <TableBody>
                        <TableRow key="1">
                          <TableCell>Booking Amount</TableCell>
                          <TableCell>
                            20% of BSP + GST {`(As applicable)`}
                          </TableCell>
                        </TableRow>
                        <TableRow key="2">
                          <TableCell>On start of construction</TableCell>
                          <TableCell>
                            10% of BSP + GST {`(As applicable)`}
                          </TableCell>
                        </TableRow>
                        <TableRow key="3">
                          <TableCell>On completion of foundation</TableCell>
                          <TableCell>
                            10% of BSP + GST {`(As applicable)`}
                          </TableCell>
                        </TableRow>
                        <TableRow key="4">
                          <TableCell>
                            On completion of Basement 1 slab of block
                          </TableCell>
                          <TableCell>
                            10% of BSP + GST {`(As applicable)`}
                          </TableCell>
                        </TableRow>
                        <TableRow key="5">
                          <TableCell>
                            On completion of Ground Floor slab of block
                          </TableCell>
                          <TableCell>
                            10% of BSP + GST {`(As applicable)`}
                          </TableCell>
                        </TableRow>
                        <TableRow key="6">
                          <TableCell>
                            On completion of 4th slab of block
                          </TableCell>
                          <TableCell>
                            10% of BSP + GST {`(As applicable)`}
                          </TableCell>
                        </TableRow>
                        <TableRow key="7">
                          <TableCell>
                            On completion of plaster with in block
                          </TableCell>
                          <TableCell>
                            10% of BSP + GST {`(As applicable)`}
                          </TableCell>
                        </TableRow>
                        <TableRow key="8">
                          <TableCell>
                            On completion of flooring with in block
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
                            10% of BSP + Stamp Duty + IFMS + SMC + GST{" "}
                            {`(As applicable)`}
                          </TableCell>
                        </TableRow>
                      </TableBody>
                    </Table>
                  </DialogContent>
                </Dialog>
              </div>
              <Carousel setApi={setApi} className="w-full md:w-1/2">
                <div className="py-2 text-center text-sm text-muted-foreground">
                  Image {current} of {count}
                </div>
                <CarouselContent>
                  <CarouselItem key="1">
                    <Card className="p-0">
                      <CardContent className="flex items-center justify-center p-0">
                        <Image
                          src="/properties/foressta/ssfp.jpg"
                          alt="bricksveiwer_mewsgate"
                          width={900}
                          height={400}
                          className="w-full h-full rounded"
                        />
                      </CardContent>
                    </Card>
                  </CarouselItem>
                </CarouselContent>
                <CarouselPrevious className="absolute left-1 text-skyBlue bg-white border-skyBlue border-4" />
                <CarouselNext className="absolute right-1 text-skyBlue bg-white border-skyBlue border-4" />
              </Carousel>
            </Card>
          </TabsContent>
          <TabsContent value="villa" className="w-full">
            <Card className="w-full p-2 md:p-10 flex flex-col-reverse jusitfy-center items-start gap-10 md:flex-row">
              <div className="w-full md:w-1/2 flex flex-col justify-center items-center">
                <h1 className="w-full text-2xl text-center md:text-left md:text-4xl font-bold text-skyBlue mb-5">
                  Foressta <span className="text-black">Serviced Villa</span>
                </h1>
                <Table>
                  <TableHeader>
                    <TableRow className="text-sm md:text-lg font-bold">
                      <TableHead>Tower Name</TableHead>
                      <TableHead>Super Built Up Area</TableHead>
                      <TableHead>Price in ₹</TableHead>
                    </TableRow>
                  </TableHeader>
                  <TableBody>
                    <TableRow key="1">
                      <TableCell>Serviced Villa</TableCell>
                      <TableCell>4635 sq.ft.</TableCell>
                      <TableCell>8,11,00,000</TableCell>
                    </TableRow>
                  </TableBody>
                </Table>
                <Dialog>
                  <DialogTrigger className="text-skyBlue text-sm md:text-lg font-bold">
                    Click to Open Construction Link Plans
                  </DialogTrigger>
                  <DialogContent>
                    <Table>
                      <TableCaption>
                        Expected Date Of Possession {`(EDP)`} - 31st December
                        2027
                      </TableCaption>
                      <TableBody>
                        <TableRow key="1">
                          <TableCell>Booking Amount</TableCell>
                          <TableCell>
                            20% of BSP + GST {`(As applicable)`}
                          </TableCell>
                        </TableRow>
                        <TableRow key="2">
                          <TableCell>On start of construction</TableCell>
                          <TableCell>
                            10% of BSP + GST {`(As applicable)`}
                          </TableCell>
                        </TableRow>
                        <TableRow key="3">
                          <TableCell>On completion of foundation</TableCell>
                          <TableCell>
                            10% of BSP + GST {`(As applicable)`}
                          </TableCell>
                        </TableRow>
                        <TableRow key="4">
                          <TableCell>
                            On completion of Basement 1 slab of block
                          </TableCell>
                          <TableCell>
                            10% of BSP + GST {`(As applicable)`}
                          </TableCell>
                        </TableRow>
                        <TableRow key="5">
                          <TableCell>
                            On completion of Ground Floor slab of block
                          </TableCell>
                          <TableCell>
                            10% of BSP + GST {`(As applicable)`}
                          </TableCell>
                        </TableRow>
                        <TableRow key="6">
                          <TableCell>
                            On completion of 4th slab of block
                          </TableCell>
                          <TableCell>
                            10% of BSP + GST {`(As applicable)`}
                          </TableCell>
                        </TableRow>
                        <TableRow key="7">
                          <TableCell>
                            On completion of plaster with in block
                          </TableCell>
                          <TableCell>
                            10% of BSP + GST {`(As applicable)`}
                          </TableCell>
                        </TableRow>
                        <TableRow key="8">
                          <TableCell>
                            On completion of flooring with in block
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
                            10% of BSP + Stamp Duty + IFMS + SMC + GST{" "}
                            {`(As applicable)`}
                          </TableCell>
                        </TableRow>
                      </TableBody>
                    </Table>
                  </DialogContent>
                </Dialog>
              </div>
              <Carousel setApi={setApi} className="w-full md:w-1/2">
                <div className="py-2 text-center text-sm text-muted-foreground">
                  Image {current} of {count}
                </div>
                <CarouselContent>
                  <CarouselItem key="1">
                    <Card className="p-0">
                      <CardContent className="flex items-center justify-center p-0">
                        <Image
                          src="/properties/foressta/svfp_1.jpg"
                          alt="bricksveiwer_mewsgate"
                          width={900}
                          height={400}
                          className="w-full h-full rounded"
                        />
                      </CardContent>
                    </Card>
                  </CarouselItem>
                  <CarouselItem key="2">
                    <Card className="p-0">
                      <CardContent className="flex items-center justify-center p-0">
                        <Image
                          src="/properties/foressta/svfp_2.jpg"
                          alt="bricksveiwer_mewsgate"
                          width={900}
                          height={400}
                          className="w-full h-full rounded"
                        />
                      </CardContent>
                    </Card>
                  </CarouselItem>
                </CarouselContent>
                <CarouselPrevious className="absolute left-1 text-skyBlue bg-white border-skyBlue border-4" />
                <CarouselNext className="absolute right-1 text-skyBlue bg-white border-skyBlue border-4" />
              </Carousel>
            </Card>
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
I'm interested in 'Foressta'
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

export default Foressta;
