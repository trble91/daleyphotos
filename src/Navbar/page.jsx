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
          duration: 0,
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
        <Link href="/" className="hover:bg-neutral-900 hover:text-stone-300">
          Home
        </Link>
        <Link
          href="/Photography"
          className="hover:bg-neutral-900 hover:text-stone-300"
        >
          Photos
        </Link>
        <Link
          href="/Contact"
          className="hover:bg-neutral-900 hover:text-stone-300"
        >
          Contact
        </Link>
        <Link
          href="/Service"
          className="hover:bg-neutral-900 hover:text-stone-300"
        >
          Service
        </Link>
        <Link
          href="/Blog"
          className="hover:bg-neutral-900 hover:text-stone-300"
        >
          Blog
        </Link>
        <Link
          href="/About"
          className="hover:bg-neutral-900 hover:text-stone-300"
        >
          About
        </Link>
      </nav>
    </div>
  );
}
