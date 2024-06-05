"use client";
import Footer from "@/Footer/page";
import Navbar from "@/Navbar/page";
import React from "react";

export default function Bio() {
  return (
    <>
    <Navbar />
      <div className="flex relative ml-10 text-center md:text-left xl:flex-row xl:px-10 min-h-screen xl:space-y-0 snap-center">
        <h3 className="absolute top-24 items-center uppercase tracking-[20px] text-neutral-800 text-2xl sm:text-neutral-800">
          About
        </h3>
        <p className="absolute top-44 uppercase tracking-[5px] text-neutral-800 text-xl sm:text-neutral-800">
          W. Daley
        </p>
        <div className="flex absolute flex-row text-start text-neutral-800 text-lg top-56 xl:flex-row max-w-[500px] items-center snap-center">
          <p className="flex relative text-left text-m">
            {
              "Embarking on a photography journey that captures the essence of weddings, special events, and creative design, I strive to tell unique stories through my lens, preserving cherished moments and crafting visually stunning memories."
            }
          </p>
        </div>
      </div>
      <Footer />
    </>
  );
}
