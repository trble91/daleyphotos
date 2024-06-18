"use client";

import { motion } from "framer-motion";
import Image from "next/image";

export default function Weddings() {
  const Weddings = [
    "/Weddings/baby.jpg",
    "/Weddings/bliss.jpg",
    "/Weddings/cake2.jpg",
    "/Weddings/fun.jpg",
    "/Weddings/rings.jpg",
    "/Weddings/photos.JPG",
    "/Weddings/cake.jpg",
    "/Weddings/groom.jpg",
  ];

  return (
    <>
     
      <div className="flex flex-col items-center text-center min-h-screen space-y-4 mx-auto">
        <h3 className="mt-10 uppercase tracking-[10px] text-stone-200 text-md sm:text-stone-300 sm:text-base">
          Weddings
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
          {Weddings.slice(1, 3).map((src, index) => (
            <div key={index} className="relative mb-4">
              <Image
                src={src}
                alt={`Image ${index + 1}`}
                width={300}
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
          {Weddings.slice(3, 5).map((src, index) => (
            <div key={index} className="relative mb-4">
              <Image
                src={src}
                alt={`Image ${index + 1}`}
                width={300}
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
