"use client";

import Navbar from "@/src/Navbar/page";
import { motion } from "framer-motion";
import Image from "next/image";
import { useParams } from "next/navigation";

export default function Photography() {
  const photos = [
    { src: "/bride.jpg", href: "/lifestyle" },
    { src: "/groom-large.jpg", href: "/portraits" },
    { src: "/Bailey-bw.png", href: "/weddings" },
    { src: "/yankee-Large.jpeg", href: "/events" },
  ];

  return (
    <>
      {/* <Navbar /> */}
      <div className="flex sticky flex-row text-center sm:max-w-[300px]  md:flex-row md:text-left xl:flex-row max-w-[400px] xl:px-5 min-h-screen justify-center xl: space-y-4 mx-auto items-center snap-center">
        <h3 className="absolute top-6 uppercase tracking-[17px] text-gray-700 text-md sm:text-gray-700 sm:text-base md:text-gray-700 lg:text-gray-700 xl:text-gray-800">
          Portraits Weddings & Events
        </h3>
        <>
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
            className="flex relative flex-col bottom-20 top-2 text-center mt-20 snap-center"
          >
            {photos.map((src, index) => (
              <Image
                key={index}
                src={src}
                alt={`Image ${index + 1}`}
                width={400}
                height={200}
              />
            ))}
          </motion.div>
        </>
        <>
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
            className="flex relative flex-col bottom-20 top-2 text-center mt-20 snap-center"
          >
            {photos.map((src, index) => (
              <Image
                key={index}
                src={src}
                alt={`Image ${index + 1}`}
                width={400}
                height={200}
              />
            ))}
          </motion.div>
        </>
      </div>
    </>
  );
}
