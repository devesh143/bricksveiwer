"use client";

import React from "react";
import { adminLogin } from "@/functions";
import { useState, useEffect } from "react";

const DashboardLogin = () => {
  const [token, setToken] = useState("");
  const [name, setName] = useState("");
  const [password, setPassword] = useState("");

  useEffect(() => {
    const token = localStorage.getItem("token");
    if (token && token === "8X7CK65E") {
      window.location.href = "/admin/bricksviewer/7S2p6gL8X7CK65E";
    }
  }, []);

  return (
    <div className="w-full flex justify-center items-center">
      <div className="container mx-auto flex flex-col justify-center items-center">
        <h1 className="text-3xl font-bold my-10">
          Bricks<span className="text-safron">Viewer</span>.com Dashboard
        </h1>
        <div className="w-full flex flex-col justify-center items-center gap-5 mb-10">
          <input
            type="text"
            placeholder="Name"
            className="w-80 p-2 border-2 border-black rounded"
            onChange={(e) => setName(e.target.value)}
          />
          <input
            type="password"
            placeholder="Password"
            className="w-80 p-2 border-2 border-black rounded"
            onChange={(e) => setPassword(e.target.value)}
          />
          <button
            className="w-80 p-2 bg-black text-white rounded hover:bg-white hover:text-black border-2 border-black transition duration-500 ease-in-out"
            onClick={async () => {
              const response = await adminLogin(name, password);
              if (response.status === 200) {
                localStorage.setItem("token", "8X7CK65E");
                window.location.href = "/admin/bricksviewer/7S2p6gL8X7CK65E";
              } else {
                alert("Invalid credentials");
              }
            }}
          >
            Login
          </button>
        </div>
      </div>
    </div>
  );
};

export default DashboardLogin;
