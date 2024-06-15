"use client";

import Footer from "@/Footer/page.jsx";
import Navbar from "@/Navbar/page.jsx";
import { motion } from "framer-motion";
import Image from "next/image";
import Link from "next/link";

export default function Photography() {
  const imageSources = [
    {
      src: "/assets/groom-large.jpg",
      href: "/Portraits",
      text: "Portraits",
      description:
        "Lorem ipsum photos de num. Nam de mis su en franchisee. Ye eva us sa name ausur jek jnasxjo iwrueh hnoa bcaj f cnoa no. huaodcboae",
    },
    {
      src: "/assets/bride.jpg",
      href: "/Weddings",
      text: "Weddings",
      description:
        "Lorem ipsum photos de num. Nam de mis su en franchisee. Ye eva us sa name ausur jek jnasxjo iwrueh hnoa bcaj f cnoa no. huaodcboae",
    },
    {
      src: "/assets/yankee-Large.jpeg",
      href: "/Events",
      text: "Events",
      description:
        "Lorem ipsum photos de num. Nam de mis su en franchisee. Ye eva us sa name ausur jek jnasxjo iwrueh hnoa bcaj f cnoa no. huaodcboae",
    },
  ];

  return (
    <>
      <Navbar />
      <div className="flex flex-col items-center space-y-6 min-h-screen py-12">
        <h3 className="uppercase tracking-[10px] text-center text-stone-200 text-xl mb-8">
          Portraits, Weddings & Events
        </h3>
        {imageSources.map((image, index) => (
          <motion.div
            key={index}
            initial={{
              x: index % 2 === 0 ? -500 : 500,
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
            className="relative flex flex-col text-center bg-white shadow-md rounded-xl w-96 mx-4"
          >
            <Link href={image.href} className="relative">
              <div className="relative h-56 overflow-hidden rounded-t-xl">
                <Image
                  src={image.src}
                  alt={`Image ${index + 1}`}
                  layout="fill"
                  className="object-cover"
                />
                <span className="absolute inset-0 flex items-center justify-center uppercase text-stone-200 font-thin text-lg bg-black bg-opacity-50">
                  {image.text}
                </span>
              </div>
            </Link>
            <div className="p-6">
              <h5 className="text-xl font-semibold text-neutral-900 mb-2">
                {image.text}
              </h5>
              <p className="text-base font-light text-neutral-700">
                {image.description}.
              </p>
            </div>
            <div className="p-6 pt-0">
              <Link href={image.href}>
                <button
                  className="block w-full py-3 text-xs font-thin uppercase transition bg-slate-600 text-stone-200 rounded-lg shadow-md hover:shadow-lg hover:opacity-85 focus:opacity-85 active:opacity-85"
                  type="button"
                >
                  View More
                </button>
              </Link>
            </div>
          </motion.div>
        ))}
      </div>
      <Footer />
    </>
  );
}
