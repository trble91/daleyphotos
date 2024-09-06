"use client";

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
        "Capture life's precious moments with stunning portrait photography in Metro Atlanta and Gwinnett County! Whether it's a family gathering, a milestone celebration, or a personal portrait session, our experienced photographers bring out the best in you and your loved ones. Book your session today and create memories that will last a lifetime. Contact us now for a special offer!",
    },
    {
      src: "/assets/bride.jpg",
      href: "/Weddings",
      text: "Weddings",
      description:
        "Capture the magic of your special day with beautiful wedding photography in Metro Atlanta and Gwinnett County! Our talented photographers focus on creating and preserving your most cherished moments, ensuring every smile, tear, and kiss is beautifully documented. Book your wedding photography session today and let us make your memories last a lifetime. Contact us now for a special offer!",
    },
    {
      src: "/assets/yankee-Large.jpeg",
      href: "/Events",
      text: "Events",
      description:
        "Capture life's special events with stunning photography in Metro Atlanta and Gwinnett County! From weddings and parties to corporate gatherings and community events, our experienced photographers ensure every moment is beautifully documented. Book your event photography session today and preserve your memories in vivid detail. Contact us now for a special offer!",
    },
  ];

  return (
    <>
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
              duration: 0.4,
            }}
            className="relative flex flex-col text-center bg-white shadow-md rounded-xl w-96 sm:mx-2 xl:mx-9"
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
                {image.description}
              </p>
            </div>
            <div className="p-6 pt-0">
              <Link href={image.href}>
                <button
                  className="block w-full py-3 text-xs font-thin uppercase transition bg-zinc-500 text-stone-200 rounded-lg shadow-md hover:shadow-lg hover:opacity-85 focus:opacity-85 active:opacity-85"
                  type="button"
                >
                  View More
                </button>
              </Link>
            </div>
          </motion.div>
        ))}
      </div>
  
    </>
  );
}
