"use client";

import React from "react";
import { motion } from "framer-motion";
import Image from "next/image";
import Navbar from "@/Navbar/page";
import Footer from "@/Footer/page";


export default function Homepage() {

  const homeImage = 
    { src: '/love.jpg', href: '/Weddings', text: 'Weddings' }
    
  return (
    <>
    <Navbar />
      <main className="min-h-screen items-center">
        <motion.div
          initial={{
            x: -400,
            opacity: 0,
            scale: 0.5,
          }}
          animate={{
            x: 25,
            y: 50,
            opacity: 1,
            scale: 1,
          }}
          transition={{
            duration: 0.9,
          }}
          className="flex flex-col items-center"
        >
          <Image src="/love.jpg" width={700} height={500} alt={homeImage.text} />
        </motion.div>
      </main>
      <Footer />
    </>
  );
}
