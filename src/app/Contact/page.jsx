"use client";

import React, { useState } from "react";
import axios from "axios";
import Navbar from "@/Navbar/page";
import Footer from "@/Footer/page";

const ContactForm = () => {
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    message: "",
  });

  const handleChange = (e) => {
    setFormData({ ...formData, [e.target.name]: e.target.value });
  };

  const handleSubmit = async (e) => {
    e.preventDefault();

    try {
      // Replace the URL with your own backend endpoint for handling form submissions
      const response = await axios.post("/api/contact", formData);
      console.log("Form submitted successfully:", response.data);
      // You can redirect or show a success message here
    } catch (error) {
      console.error("Error submitting form:", error);
      // Handle errors or show an error message to the user
    }
  };

  return (
    <>
    <Navbar />
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
              type="text"
              name="name"
              placeholder="Full Name"
              value={formData.name}
              onChange={handleChange}
              className="form-input mt-1 block w-full rounded-sm border-stone-700 bg-stone-200"
            />
          </label>
          <label className="block text-stone-700 text-sm font-bold mb-2">
            Email:
            <input
              type="email"
              name="email"
              placeholder="Email@something.com"
              value={formData.email}
              onChange={handleChange}
              className="form-input mt-1 block w-full rounded-sm border-stone-700 bg-stone-200"
            />
          </label>
          <label className="block text-stone-700 text-sm font-bold mb-2">
            Message:
            <textarea
              name="message"
              placeholder="No more than 250 characters"
              value={formData.message}
              onChange={handleChange}
              className="form-input mt-1 block w-full rounded-sm border-stone-700 resize-none bg-stone-200"
              rows="4"
            />
          </label>
          <button
            type="submit"
            className="text-stone-700 item-center font-bold py-2 px-4 mt-4 rounded focus:outline-stone-400 focus:shadow-outline-gray-700 hover:bg-stone-800 hover:text-stone-300 active:bg-stone-600"
          >
            Submit
          </button>
        </form>
      </div>
      <Footer />
    </>
  );
};

export default ContactForm;
