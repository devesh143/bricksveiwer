"use client";

import { useState } from "react";

const Form = ({ collection }: { collection: string }) => {
  const [message, setMessage] = useState("");
  const [name, setName] = useState("");
  const [phone, setPhone] = useState("");
  const [msg, setMsg] = useState("");

  const submitForm = async (e: any) => {
    e.preventDefault();
    if (!name || !phone || !msg) {
      setMessage("Please fill all the fields!");
      return;
    }
    if (phone.length !== 10 || !phone.match(/^[0-9]+$/)) {
      setMessage("Please enter a valid phone number!");
      return;
    }
    const res = await fetch(
      `/api/form-insert?name=${name}&phone=${phone}&msg=${msg}&formnumber=${collection}`
    );
    const data = await res.json();
    if (data.err) {
      setMessage("Something went wrong!");
    } else {
      setMessage("Form submitted successfully!");
      setName("");
      setPhone("");
      setMsg("");
    }
  };

  return (
    <div className="w-full lg:w-1/2 flex gap-5 flex-col justify-evenly items-end">
      <div
        className={`flex ${
          message === "Form submitted successfully!"
            ? "bg-green-500"
            : "bg-red-500"
        } text-white justify-between items-center w-full  rounded ${
          message ? "p-2" : "hidden"
        }`}
      >
        <p>{message}</p>
        <button onClick={() => setMessage("")}>X</button>
      </div>
      <form className="w-full flex flex-col gap-5" onSubmit={submitForm}>
        <div className="w-full flex gap-5">
          <div className="w-1/2">
            <p className="w-1/2 text-white text-lg">Name</p>
            <input
              type="text"
              name="name"
              value={name}
              placeholder="Name"
              className="w-full bg-white p-2 rounded text-black"
              onChange={(e) => setName(e.target.value)}
            />
          </div>
          <div className="w-1/2">
            <p className="w-1/2 text-white text-lg">Mobile</p>
            <input
              type="phone"
              name="phone"
              value={phone}
              placeholder="+91"
              className="w-full bg-white p-2 rounded text-black"
              onChange={(e) => setPhone(e.target.value)}
            />
          </div>
        </div>
        <div className="w-full flex flex-col">
          <p className="w-1/2 text-white text-lg">Message</p>
          <textarea
            name="comment"
            placeholder="Message"
            value={msg}
            className="w-full bg-white p-2 rounded text-black"
            onChange={(e) => setMsg(e.target.value)}
          />
        </div>
        <button
          className="bg-white text-black font-bold py-2 px-4 rounded-full transition duration-500 ease-in-out transform  hover:scale-110"
          type="submit"
        >
          Send Message
        </button>
      </form>
    </div>
  );
};

export default Form;
