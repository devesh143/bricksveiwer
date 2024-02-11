"use client";

import { zodResolver } from "@hookform/resolvers/zod";
import { useForm } from "react-hook-form";
import { z } from "zod";

import { subscibeNewsletter } from "@/functions";

import { Button } from "@/components/ui/button";
import {
  Form,
  FormControl,
  FormDescription,
  FormField,
  FormItem,
  FormLabel,
  FormMessage,
} from "@/components/ui/form";
import { Input } from "@/components/ui/input";

import { useToast } from "@/components/ui/use-toast";

const formSchema = z.object({
  email: z.string().email(),
  website: z.literal("bricksviewer"),
});

import Link from "next/link";

export function Footer() {
  const { toast } = useToast();

  const form = useForm<z.infer<typeof formSchema>>({
    resolver: zodResolver(formSchema),
    defaultValues: {
      email: "",
      website: "bricksviewer",
    },
  });

  function onSubmit(data: z.infer<typeof formSchema>) {
    const response = subscibeNewsletter(data.email, data.website);
    response.then((res) => {
      if (res.status === 200) {
        toast({
          variant: "default",
          title: "Message Sent",
          description: "You are now Subscribed to our newsletter.",
        });
      } else {
        toast({
          variant: "destructive",
          title: "Error",
          description: "You are already Subscribed to our newsletter.",
        });
      }
    });
  }

  return (
    <footer className="flex flex-col">
      <div className="flex flex-col-reverse gap-10 items-center justify-evenly w-full p-20 bg-black text-white lg:flex-row lg:items-start lg:gap-20">
        <div className="flex flex-col items-center justify-center w-80 lg:w-1/4 lg:items-start">
          <h1 className="text-4xl font-bold text-center">
            Bricks<span className="text-safron">Viewer</span>.com
          </h1>
          <p className="text-sm text-center lg:text-left">
            Your one-stop destination for your Dream Home.
          </p>
          <Link
            href="mailto: ask@ask@bricksviewer.com"
            className="font-bold mt-5 text-5sm hover:text-skyBlue"
          >
            ask@bricksviewer.com
          </Link>
          <Link
            href="tel: +91 7055455847"
            className="font-bold text-sm hover:text-skyBlue"
          >
            +91 7055455847
          </Link>
        </div>
        <div className="flex flex-col items-center justify-center w-80 lg:w-1/4 lg:items-end">
          <h1 className="text-2xl font-bold text-center">Socials</h1>
          <Link
            href="https://www.linkedin.com/"
            className="mt-4 text-2sm hover:text-skyBlue"
          >
            LinkedIn
          </Link>
          <Link
            href="https://www.youtube.com/"
            className="mt-1 text-2sm hover:text-skyBlue"
          >
            YouTube
          </Link>
          <Link
            href="https://www.facebook.com/"
            className="mt-1 text-2sm hover:text-skyBlue"
          >
            Facebook
          </Link>
          <Link
            href="https://www.instagram.com/"
            className="mt-1 text-2sm hover:text-skyBlue"
          >
            Instagram
          </Link>
        </div>
        <div className="flex flex-col items-center justify-center w-80 lg:w-1/4 lg:items-start">
          <h1 className="text-2xl font-bold text-center">Links</h1>
          <Link href="/" className="mt-4 text-2sm hover:text-skyBlue">
            Home
          </Link>
          <Link href="/properties" className="mt-1 text-2sm hover:text-skyBlue">
            Properties
          </Link>
          <Link href="/privacy" className="mt-1 text-2sm hover:text-skyBlue">
            Privacy Policy
          </Link>
          <Link href="/terms" className="mt-1 text-2sm hover:text-skyBlue">
            Terms & Conditions
          </Link>
        </div>
        <hr className="w-full lg:hidden" />
        <div className="flex flex-col items-center justify-center w-80 lg:w-1/2 lg:items-start lg:justify-start">
          <h1 className="text-2xl font-bold text-center lg:text-left">
            Email Newsletter
          </h1>
          <p className="text-sm text-center lg:text-left">
            Subscribe to our newsletter to get the latest updates.
          </p>
          <div className="flex items-center justify-center w-full mt-5 lg:justify-start">
            <Form {...form}>
              <form onSubmit={form.handleSubmit(onSubmit)} className="flex">
                <FormField
                  control={form.control}
                  name="email"
                  render={({ field }) => (
                    <FormItem>
                      <Input
                        {...field}
                        id="email"
                        type="email"
                        placeholder="Email"
                        className="text-safron font-bold text-md rounded-[0px] border-safron border-2 border-r-0"
                      />
                      <FormMessage />
                    </FormItem>
                  )}
                />
                <Button
                  type="submit"
                  className="text-xl font-bold text-white bg-safron border-safron border-2 border-l-0 hover:text-safron hover:bg-white transition-all duration-300 ease-in-out rounded-[0px]"
                >
                  Subscribe
                </Button>
              </form>
            </Form>
          </div>
        </div>
      </div>
      <div className="flex flex-col items-center justify-center w-full p-5 border-t bg-black text-white">
        <p className="text-sm text-center">
          © 2024 BricksViewer.com | Powered by{" "}
          <Link href="https://webarc.one">WebArc.One</Link>
        </p>
      </div>
    </footer>
  );
}
