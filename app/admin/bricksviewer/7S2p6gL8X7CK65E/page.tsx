import React from "react";
import Link from "next/link";
import { Card } from "@/components/ui/card";

const Dashboard = () => {
  return (
    <div className="w-full flex justify-center items-center">
      <div className="container mx-auto flex flex-col justify-center items-center">
        <h1 className="text-3xl font-bold my-10">
          Bricks<span className="text-safron">Viewer</span>.com Dashboard
        </h1>
        <div className="w-full flex flex-wrap justify-evenly items-center gap-10 md:gap-20 px-5 sm:px-10 md:px-20 lg:px-28 mb-10">
          <Link href="/admin/bricksviewer/7S2p6gL8X7CK65E/phonebook">
            <Card className="w-40 aspect-square flex justify-center items-center border-black border-2 bg-black text-white hover:bg-white hover:text-black transition duration-500 ease-in-out">
              <p className="font-bold text-xl">Phone-Book</p>
            </Card>
          </Link>
          <Link href="/admin/bricksviewer/7S2p6gL8X7CK65E/emails">
            <Card className="w-40 aspect-square flex justify-center items-center border-black border-2 bg-black text-white hover:bg-white hover:text-black transition duration-500 ease-in-out">
              <p className="font-bold text-xl">All E-mails</p>
            </Card>
          </Link>
        </div>
      </div>
    </div>
  );
};

export default Dashboard;
