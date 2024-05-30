"use client";

import Link from "next/link";
import Button from "@mui/material/Button";
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
            className="flex items-center">
            <Image
             src="/W-Daley-black-highres.png"
             width={200}
             height={100}
             alt="text logo"
                />

        </motion.div>
      <nav className="flex justify-end mr-3 space-x-3">
        <Link href="/" passHref>
          <Button
            // component="a"
            variant="contained"
            color="primary"
            className="hover:bg-neutral-900 hover:text-stone-300"
          >
            Home
          </Button>
        </Link>
        <Link href="/Photography" passHref>
          <Button
            // component="a"
            variant="contained"
            color="primary"
            className="hover:bg-neutral-900 hover:text-stone-300"
          >
            Photos
          </Button>
        </Link>
        <Link href="/Contact" passHref>
          <Button
            // component="a"
            variant="contained"
            color="primary"
            className="hover:bg-neutral-900 hover:text-stone-300"
          >
            Contact
          </Button>
        </Link>
        <Link href="/About" passHref>
          <Button
            // component="a"
            variant="contained"
            color="primary"
            className="hover:bg-neutral-900 hover:text-stone-300"
          >
            About
          </Button>
        </Link>
      </nav>
    </div>
  );
}
