"use client";

import Link from "next/link";
import Image from "next/image";
import { motion } from "framer-motion";
import Homepage from "@/app/Homepage/page";
import Photography from "@/app/Photography/page";

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
          y: 60,
          opacity: 1,
          scale: 1,
        }}
        transition={{
          duration: 0.0,
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
      <nav className="flex justify-end space-x-3 mr-6">
        <Link href="/">Home</Link>
        <Link href="/photography">Photos</Link>
        <Link href="/blog">Blog</Link>
        <Link href="/contact">Contact</Link>
        <Link href="/about">About</Link>
        <Link href="/service">Service</Link>
      </nav>
    </div>
  );
}
