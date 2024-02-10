"use client";

import React from "react";
import { getAllPhoneNumbers, deleteRecord } from "@/functions";
import { useState, useEffect } from "react";
import { useToast } from "@/components/ui/use-toast";

import Link from "next/link";
import { FaTrash, FaEdit } from "react-icons/fa";
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

const PhoneBook = () => {
  const { toast } = useToast();
  const [PhoneBook, setPhoneBook] = useState<
    {
      id: string;
      phone: string;
      name: string;
      message: string;
      form: string;
    }[]
  >([]);

  const [filteredList, setFilteredList] = useState<
    {
      id: string;
      phone: string;
      name: string;
      message: string;
      form: string;
    }[]
  >([]);

  useEffect(() => {
    const response = getAllPhoneNumbers();
    response.then((res) => {
      if (res.status === 200) {
        setPhoneBook(res.data as any);
        setFilteredList(res.data as any);
      }
    });
  }, []);

  return (
    <div className="container w-full mx-auto flex flex-col justify-center items center my-10">
      <div className="w-full flex justify-between items-between">
        <h1 className="text-3xl font-bold mb-5">All Phone Numbers</h1>
        <Link href="/admin/bricksviewer/7S2p6gL8X7CK65E">
          <Button
            variant="destructive"
            className="border-destructive border-2 hover:text-destructive hover:bg-white"
          >
            Back To Dashboard
          </Button>
        </Link>
      </div>
      <div className="w-full flex justify-between items-between">
        <h1 className="text-xl font-bold mb-5">Filters</h1>
        <div className="flex gap-2">
          <Button
            className="border-primary border-2 hover:text-primary hover:bg-white"
            onClick={() => {
              setFilteredList(
                PhoneBook.filter((item) => item.form === "Contact Form")
              );
            }}
          >
            Contact
          </Button>
          <Button
            className="border-primary border-2 hover:text-primary hover:bg-white"
            onClick={() => {
              setFilteredList(
                PhoneBook.filter((item) => item.form === "MewsGate Form")
              );
            }}
          >
            MewsGate
          </Button>
          <Button
            className="border-primary border-2 hover:text-primary hover:bg-white"
            onClick={() => {
              setFilteredList(
                PhoneBook.filter((item) => item.form === "GateWay Form")
              );
            }}
          >
            GateWay
          </Button>
          <Button
            className="border-primary border-2 hover:text-primary hover:bg-white"
            onClick={() => {
              setFilteredList(
                PhoneBook.filter((item) => item.form === "Foressta Form")
              );
            }}
          >
            Foressta
          </Button>
          <Button
            className="border-primary border-2 hover:text-primary hover:bg-white"
            onClick={() => {
              setFilteredList(
                PhoneBook.filter((item) => item.form === "CityOfDreams Form")
              );
            }}
          >
            CityOfDreams
          </Button>

          <Button
            className="border-primary border-2 hover:text-primary hover:bg-white"
            onClick={() => {
              setFilteredList(PhoneBook);
            }}
          >
            Reset
          </Button>
        </div>
      </div>
      <Table>
        <TableCaption>All Submitted Contact Forms.</TableCaption>
        <TableHeader className="bg-gray-100">
          <TableRow>
            <TableHead className="w-[50px]">SNo.</TableHead>
            <TableHead>Phone</TableHead>
            <TableHead>Name</TableHead>
            <TableHead>Message</TableHead>
            <TableHead>Form</TableHead>
            <TableHead className="text-right">Action</TableHead>
          </TableRow>
        </TableHeader>
        <TableBody>
          {filteredList.map((phone) => (
            <TableRow key={phone.id}>
              <TableCell className="w-[50px]">
                {filteredList.indexOf(phone) + 1}
              </TableCell>
              <TableCell>{phone.phone}</TableCell>
              <TableCell>{phone.name}</TableCell>
              <TableCell>{phone.message}</TableCell>
              <TableCell>{phone.form}</TableCell>
              <TableCell className="text-right">
                <Link
                  href={`/admin/bricksviewer/7S2p6gL8X7CK65E/phonebook/${phone.id}`}
                >
                  <Button className="mr-2">
                    <FaEdit />
                  </Button>
                </Link>
                <Button
                  variant="destructive"
                  onClick={async () => {
                    const response = await deleteRecord(phone.id);
                    if (response.status === 200) {
                      toast({
                        title: "Success",
                        description: response.message,
                        duration: 5000,
                      });
                      setPhoneBook(
                        PhoneBook.filter((item) => item.id !== phone.id)
                      );
                    } else {
                      toast({
                        title: "Error",
                        description: response.message,
                        variant: "destructive",
                        duration: 5000,
                      });
                    }
                  }}
                >
                  <FaTrash />
                </Button>
              </TableCell>
            </TableRow>
          ))}
        </TableBody>
      </Table>
    </div>
  );
};

export default PhoneBook;
