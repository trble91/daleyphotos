"use client";

import React from "react";
import { motion } from "framer-motion";
import Image from "next/image";

export default function Homepage() {

  return (
    <>

      <main className="min-h-screen items-center">
        <motion.div
          initial={{
            x: -400,
            opacity: 0,
            scale: 0.5,
          }}
          animate={{
            x: 0,
            y: 35,
            opacity: 1,
            scale: 1,
          }}
          transition={{
            duration: 0.9,
          }}
          className="flex flex-col items-center sm:mr-12"
        >
          <Image src="/assets/love.jpg" width={500} height={500} alt="love" className="grid place-items-center"/>
        </motion.div>
      </main>
   
    </>
  );
}
