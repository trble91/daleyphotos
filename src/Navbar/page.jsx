"use client";

import Link from "next/link";
import Image from "next/image";
import { motion } from "framer-motion";

export default function Navbar() {
  return (
    <div className="-mt-20">
      <motion.div
        initial={{
          x: -500,
          opacity: 0,
          scale: 0.5,
        }}
        animate={{
          x: 0,
          y: 75,
          opacity: 1,
          scale: 1,
        }}
        transition={{
          duration: 0.9,
        }}
        className="flex items-center"
      >
        <Image
          src="/W-Daley-black-highres.png"
          width={200}
          height={100}
          alt="text logo"
        />
      </motion.div>
      <nav className="flex justify-end mr-3 space-x-3">
        <Link href="/">Home</Link>
        <Link href="/Photography">Photos</Link>
        <Link href="/Blog">Blog</Link>
        <Link href="/Contact">Contact</Link>
        <Link href="/About">About</Link>
        <Link href="/Service">Service</Link>
      </nav>
    </div>
  );
}
