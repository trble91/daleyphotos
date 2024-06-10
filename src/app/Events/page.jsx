"use client";

import Footer from "@/Footer/page";
import Navbar from "@/Navbar/page";
import { motion } from "framer-motion";
import Image from "next/image";

export default function Events() {
  const eventImg = [
    "/events/kids.jpg",
    "/events/fight.JPG",
    "/events/kids2.jpg",
    "/events/stans.jpg",
    "/events/product.jpg",
    "/events/train.jpg",
  ];

  return (
    <>
      <Navbar />
      <div className="flex flex-col items-center text-center min-h-screen space-y-4 mx-auto">
        <h3 className="mt-10 uppercase tracking-[10px] text-stone-300 text-md">
          Lifestyle/Events
        </h3>
        <motion.div
          initial={{
            x: -500,
            opacity: 0,
            scale: 0.5,
          }}
          animate={{
            x: 0,
            opacity: 1,
            scale: 1,
          }}
          transition={{
            duration: 2.0,
          }}
          className="flex relative text-center snap-center"
        >
          {eventImg.slice(0, 3).map((src, index) => (
            <div key={index} className="relative mb-4">
              <Image
                src={src}
                alt={`Image ${index + 1}`}
                width={400}
                height={200}
                className="w-full h-full object-cover"
              />
            </div>
          ))}
        </motion.div>
        <motion.div
          initial={{
            x: 500,
            opacity: 0,
            scale: 0.5,
          }}
          animate={{
            x: 0,
            opacity: 1,
            scale: 1,
          }}
          transition={{
            duration: 2.0,
          }}
          className="flex relative text-center snap-center"
        >
          {eventImg.slice(3, 6).map((src, index) => (
            <div key={index} className="relative mb-4">
              <Image
                src={src}
                alt={`Image ${index + 1}`}
                width={400}
                height={200}
                className="w-full h-full object-cover"
              />
            </div>
          ))}
        </motion.div>
      </div>
      <Footer />
    </>
  );
}
