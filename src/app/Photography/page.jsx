'use client';

import Footer from '@/Footer/page';
import Navbar from '@/Navbar/page';
import { motion } from 'framer-motion';
import Image from 'next/image';
import Link from 'next/link';

export default function Photography() {
  const imageSources = [
    { src: '/bride.jpg', href: '/Weddings', text: 'Weddings' }, 
    { src: '/groom-large.jpg', href: '/Weddings', text: 'Weddings' },
    { src: '/Bailey-bw.png', href: '/Portraits', text: 'Portraits' },
    { src: '/yankee-Large.jpeg', href: '/Events', text: 'Events' }
  ];

  return (
    <>
      <Navbar />
      <div className="flex sticky flex-row text-center sm:max-w-[300px] md:flex-row md:text-left xl:flex-row max-w-[400px] xl:px-5 min-h-screen justify-center xl:space-y-4 mx-auto items-center snap-center">
        <h3 className="absolute top-6 uppercase tracking-[17px] text-stone-300 text-md sm:text-stone-300 sm:text-base md:text-stone-300 lg:text-stone-300 xl:text-stone-800">
          Portraits Weddings & Events
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
          className="flex relative flex-col bottom-20 top-2 text-center mt-20 snap-center"
        >
          {imageSources.slice(0, 2).map((image, index) => (
            <Link href={image.href} key={index} className="relative">
              <Image
                src={image.src}
                alt={`Image ${index + 1}`}
                width={400}
                height={200}
                className="w-full h-full object-cover"
              />
              <span className="absolute inset-0 flex items-center justify-center text-stone-300 font-bold text-l bg-black bg-opacity-50">
                {image.text}
              </span>
            </Link>
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
          className="flex relative flex-col bottom-20 top-2 text-center mt-20 snap-center"
        >
          {imageSources.slice(2, 4).map((image, index) => (
            <Link href={image.href} key={index} className="relative">
              <Image
                src={image.src}
                alt={`Image ${index + 1}`}
                width={400}
                height={200}
                className="w-full h-full object-cover"
              />
              <span className="absolute inset-0 flex items-center justify-center text-stone-300 font-bold text-l bg-black bg-opacity-50">
                {image.text}
              </span>
            </Link>
          ))}
        </motion.div>
      </div>
      <Footer />
    </>
  );
}
