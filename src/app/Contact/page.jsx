"use client";

import React, { useState } from "react";
import axios from "axios";

const ContactForm = () => {
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    message: "",
  });

  const [status, setStatus] = useState("");

  const handleChange = (e) => {
    setFormData({ ...formData, [e.target.name]: e.target.value });
  };

  const handleSubmit = async (e) => {
    e.preventDefault();

    setStatus("Sending...");

    try {
      const response = await axios.post("/api/contact", formData);
      console.log("Form submitted successfully:", response.data);
      setStatus("Message sent successfully!");
    } catch (error) {
      console.error("Error submitting form:", error);
      setStatus("Failed to send message.");
    }
  };

  return (
    <>
      <div className="flex items-center flex-col top-5 justify-center min-h-screen snap-center">
        <p className="flex-col text-center max-w-[500px] text-stone-300 font-thin">
          To inquire about any and all services. Fill out this contact form
          expressing your photography needs.
        </p>
        <form
          onSubmit={handleSubmit}
          className="max-w-md w-full bg-stone-200 p-6 rounded-lg shadow-md mt-5 mb-10"
        >
          <label className="block text-stone-700 text-sm font-bold mb-2">
            Name:
            <input
              required
              type="text"
              name="name"
              autoComplete="given-name"
              placeholder="Full Name"
              value={formData.name}
              onChange={handleChange}
              className="form-input mt-1 block w-full rounded-sm border-stone-700 bg-stone-200"
            />
          </label>
          <label className="block text-stone-700 text-sm font-bold mb-2">
            Email:
            <input
              required
              type="email"
              name="email"
              autoComplete="email"
              placeholder="Email@example.com"
              value={formData.email}
              onChange={handleChange}
              className="form-input mt-1 block w-full rounded-sm border-gray-700 bg-stone-200"
            />
          </label>
          <label className="block text-stone-700 text-sm font-bold mb-2">
            Confirm Email:
            <input
              required
              type="email"
              name="Confirm email"
              autoComplete="email"
              placeholder="Email@example.com"
              value={formData.email}
              onChange={handleChange}
              className="form-input mt-1 block w-full rounded-sm border-gray-700 bg-stone-200"
            />
          </label>
          <label className="block text-gray-700 text-sm font-bold mb-2">
            Message:
            <textarea
              required
              name="message"
              placeholder="No more than 250 words"
              value={formData.message}
              onChange={handleChange}
              className="form-input mt-1 block w-full rounded-sm border-stone-700 resize-none bg-stone-200"
              rows="4"
            />
          </label>
          <button
            type="submit"
            className="text-stone-700 item-center font-bold py-2 px-4 mt-4 rounded focus:outline-gray-400 focus:shadow-outline-gray-700 hover:bg-slate-600 hover:text-gray-300 active:bg-gray-500"
          >
            Submit
          </button>
          {status && <p className="mt-4 text-gray-700">{status}</p>}
        </form>
      </div>
    </>
  );
};

export default ContactForm;
