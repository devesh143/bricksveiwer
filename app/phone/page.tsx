"use client";

import { useState, useEffect } from "react";
import { redirect } from "next/navigation";
import { fillForm } from "@/functions";

import { usePathname } from "next/navigation";

import { zodResolver } from "@hookform/resolvers/zod";
import { useForm } from "react-hook-form";
import { z } from "zod";

import { useToast } from "@/components/ui/use-toast";

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

const Phone = () => {
  const [phone, setPhone] = useState("");
  const redirectUl = usePathname().split("?redirect=")[1];

  const { toast } = useToast();
  const form = useForm<z.infer<typeof formSchema>>({
    resolver: zodResolver(formSchema),
    defaultValues: {
      name: "",
      phone: "",
      message: "",
      formname: "Contact Form",
    },
  });

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
          title: "Information Received",
          description:
            "Thank you for providing your information. We will get back to you soon.",
        });
      } else {
        toast({
          variant: "destructive",
          title: "Form Not Sent",
          description: "Please try again",
        });
      }
    });
  }

  useEffect(() => {
    const phn = localStorage.getItem("phone");
    if (phn) {
      setPhone(phn);
    }
    if (phone !== "") {
      localStorage.setItem("phone", phone);
      redirect(redirectUl || "/");
    }
  }, [phone, redirectUl]);

  return (
    <section className="w-full bg-skyBlue h-dvh flex justify-center items-center">
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
                        placeholder="(+91)"
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
            Fill out this form to continue browsing.
          </h1>
          <p className="text-justify text-sm sm:text-normal font-bold mb-5 md:mb-0 lg:pr-36 mt-5">
            We need to verify your phone number to continue browsing our
            properties. Please fill out the form to continue.
          </p>
        </div>
      </div>
    </section>
  );
};

export default Phone;
