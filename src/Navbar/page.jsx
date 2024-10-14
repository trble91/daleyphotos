"use client";

import Link from "next/link";

export default function Navbar() {
  const links = [
    { href: "/", label: "Home" },
    { href: "/Photography", label: "Photos" },
    { href: "/Blog", label: "Blog" },
    { href: "/Contact", label: "Contact" },
    { href: "/About", label: "About" },
    { href: "/Services", label: "Services" },
  ];

  return (
    <>
      <nav className="flex justify-end space-x-2 mt-12 xl:mr-6 sm:text-xs xs:text-xs text-slate-700 font-thin uppercase tracking-[2px]">
        {links.map((link) => (
          <Link
            key={link.href}
            href={link.href}
            className="hover:text-red-800 cursor-pointer"
          >
            {link.label}
          </Link>
        ))}
      </nav>
    </>
  );
}
