"use client";

import React from "react";
import { getAllEmails, deleteEmail } from "@/functions";
import { useState, useEffect } from "react";
import { useToast } from "@/components/ui/use-toast";

import Link from "next/link";
import { FaTrash } from "react-icons/fa";
import {
  Table,
  TableBody,
  TableCaption,
  TableCell,
  TableHead,
  TableHeader,
  TableRow,
} from "@/components/ui/table";
import { Button } from "@/components/ui/button";

const Emails = () => {
  const { toast } = useToast();
  const [emails, setEmails] = useState<
    {
      id: string;
      email: string;
      website: string;
    }[]
  >([]);

  useEffect(() => {
    const response = getAllEmails();
    response.then((res) => {
      if (res.status === 200) {
        setEmails(res.data as any);
      }
    });
  }, []);

  return (
    <div className="container w-full mx-auto flex flex-col justify-center items center my-10">
      <div className="w-full flex justify-between items-between">
        <h1 className="text-3xl font-bold mb-5">All E-mails</h1>
        <Link href="/admin/bricksviewer/7S2p6gL8X7CK65E">
          <Button
            variant="destructive"
            className="border-destructive border-2 hover:text-destructive hover:bg-white"
          >
            Back To Dashboard
          </Button>
        </Link>
      </div>

      <Table>
        <TableCaption>
          All User E-mails that are subscribed to the News-Letter.
        </TableCaption>
        <TableHeader className="bg-gray-100">
          <TableRow>
            <TableHead className="w-[50px]">SNo.</TableHead>
            <TableHead className="w-[200px]">Website Name</TableHead>
            <TableHead>Emails</TableHead>
            <TableHead className="text-right">Delete Email</TableHead>
          </TableRow>
        </TableHeader>
        <TableBody>
          {emails.map((email) => (
            <TableRow key={email.id}>
              <TableCell className="w-[50px]">
                {emails.indexOf(email) + 1}
              </TableCell>
              <TableCell className="font-medium">{email.website}</TableCell>
              <TableCell>{email.email}</TableCell>
              <TableCell className="text-right">
                <Button
                  variant="destructive"
                  className="border-destructive border-2 hover:text-destructive hover:bg-white"
                  onClick={() => {
                    const response = deleteEmail(email.id);
                    response.then((res) => {
                      if (res.status === 200) {
                        setEmails(emails.filter((e) => e.id !== email.id));
                        toast({
                          variant: "default",
                          title: "Message Sent",
                          description: "Email Deleted Successfully.",
                        });
                      }
                    });
                  }}
                >
                  <FaTrash className="text-lg" />
                </Button>
              </TableCell>
            </TableRow>
          ))}
        </TableBody>
      </Table>
    </div>
  );
};

export default Emails;
