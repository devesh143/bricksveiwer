"use client";

import { useState, useEffect } from "react";
import { redirect } from "next/navigation";

const Gateway = () => {
  const [phone, setPhone] = useState("");

  useEffect(() => {
    const phn = localStorage.getItem("phone");
    if (phn) {
      setPhone(phn);
    } else {
      redirect("/phone?redirect=/properties/Gateway");
    }
  }, []);

  return <div>Gateway</div>;
};

export default Gateway;
