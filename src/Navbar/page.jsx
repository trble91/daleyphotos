// "use client";

import Link from 'next/link';
import Image from 'next/image';
import { motion } from 'framer-motion';

export default function Navbar() {
  const links = [
    { href: '/', label: 'Home' },
    { href: '/Photography', label: 'Photos' },
    { href: '/Blog', label: 'Blog' },
    { href: '/Contact', label: 'Contact' },
    { href: '/About', label: 'About' },
    { href: '/Service', label: 'Service' },
  ];

  return (
    <div className="-mt-20">
      <motion.div
        initial={{ x: -500, opacity: 0, scale: 0.5 }}
        animate={{ x: 0, y: 60, opacity: 1, scale: 1 }}
        transition={{ duration: 0.5 }}
        className="flex items-center"
      >
        <Image
          src="/assets/whtLogo.png"
          width={200}
          height={100}
          alt="text logo"
        />
      </motion.div>
      <nav className="flex justify-end space-x-3 mr-6 text-sm text-stone-300 font-thin uppercase tracking-[2px]">
        {links.map((link) => (
          <Link key={link.href} href={link.href} className="hover:text-stone-600 cursor-pointer">
            {link.label}
          </Link>
        ))}
      </nav>
    </div>
  );
}
