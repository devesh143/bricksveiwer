"use client";

import { useState, useEffect } from "react";
import { redirect } from "next/navigation";

const MewsGate = () => {
  const [phone, setPhone] = useState("");

  useEffect(() => {
    const phn = localStorage.getItem("phone");
    if (phn) {
      setPhone(phn);
    } else {
      redirect("/phone?redirect=/properties/mewsgate");
    }
  }, []);

  return <div>MewsGate</div>;
};

export default MewsGate;
