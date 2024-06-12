"use client";

import React from "react";
import { motion } from "framer-motion";
import Image from "next/image";
import Navbar from "@/Navbar/page";
import Footer from "@/Footer/page";


export default function Homepage() {

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
            y: 40,
            opacity: 1,
            scale: 1,
          }}
          transition={{
            duration: 0.9,
          }}
          className="flex flex-col items-center sm:mr-10"
        >
          <Image src="/assets/love.jpg" width={700} height={500} alt="love" />
        </motion.div>
      </main>
      <Footer />
    </>
  );
}
