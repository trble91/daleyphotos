"use client";

import Image from "next/image";
import { motion } from "framer-motion";

export default function Logo() {
  return (
    <div className="-mt-42 ">
      <motion.div
        initial={{ x: -500, opacity: 0, scale: 0.7 }}
        animate={{ x: 20, y: 110, opacity: 1, scale: 1.2 }}
        transition={{ duration: 0.5 }}
        className="items-center"
      >
        <Image
          src="/assets/whtLogo.png"
          width={200}
          height={100}
          alt="text logo"
        />
      </motion.div>
    </div>
  );
}
