"use client";

import { motion } from "framer-motion";
import Image from "next/image";

export default function Portraits() {
  const portraits = [
    "/Portraits/bee1.jpg",
    "/Portraits/fellas.JPG",
    "/Portraits/guy1.JPG",
    "/Portraits/prom1.JPG",
    "/Portraits/prom2.JPG",
    "/Portraits/woman1.JPG",
    "/Portraits/woman2.JPG",
    "/Portraits/woman3.JPG",
  ];

  return (
    <>
  
      <div className="flex flex-col items-center text-center min-h-screen space-y-4 mx-auto">
        <h3 className="mt-10 uppercase tracking-[10px] text-stone-200 text-md">
          Portraits
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
            duration: 1.5,
          }}
          className="flex relative text-center snap-center"
        >
          {portraits.slice(0, 4).map((src, index) => (
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
            duration: 1.8,
          }}
          className="flex relative text-center snap-center"
        >
          {portraits.slice(4, 9).map((src, index) => (
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
   
    </>
  );
}
