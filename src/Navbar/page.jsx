"use client";

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
      <nav className="flex justify-end space-x-2 mt-12 mr-6 text-stone-300 font-thin uppercase tracking-[2px]">
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
