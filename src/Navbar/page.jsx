"use client";

import Logo from "@/app/Components/Logo";
import Link from "next/link";

export default function Navbar() {
  const links = [
    { href: "/", label: "Home" },
    { href: "/Photography", label: "Photos" },
    { href: "/Blog", label: "Blog" },
    { href: "/Contact", label: "Contact" },
    { href: "/About", label: "About" },
    { href: "/Service", label: "Service" },
  ];

  return (
    <>
      {/* <Logo /> */}
      <nav className="flex justify-end space-x-3 mt-12 mr-6 text-sm text-stone-300 font-thin uppercase tracking-[2px]">
        {links.map((link) => (
          <Link
            key={link.href}
            href={link.href}
            className="hover:text-stone-800 cursor-pointer"
          >
            {link.label}
          </Link>
        ))}
      </nav>
    </>
  );
}
