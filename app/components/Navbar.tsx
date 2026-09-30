"use client";

import Image from "next/image";
import Link from "next/link";
import { useState } from "react";

export default function Navbar() {
  const [menuOpen, setMenuOpen] = useState(false);
  const links = [
    { label: "Home", href: "#hero" },
    { label: "Courses", href: "#courses" },
    { label: "Creators", href: "#creators" },
  ];

  return (
    <nav className="absolute inset-x-0 top-0 z-50 bg-transparent text-white">
      <div className="mx-auto grid min-h-[58px] w-full max-w-[1440px] grid-cols-[1fr_auto] items-center px-6 md:min-h-[68px] md:grid-cols-[1fr_auto_1fr] md:px-[clamp(24px,8.5vw,80px)]">
        <Link href="/" className="block w-[134px] md:w-[110px]">
          <Image
            src="/assets/logos/header-logo.png"
            alt="ByteSpace"
            width={110}
            height={30}
            priority
            className="h-auto w-full"
          />
        </Link>

        <div className="hidden items-center gap-4 md:flex">
          {links.map((item) => (
            <Link
              key={item.label}
              href={item.href}
              onClick={() => setMenuOpen(false)}
              className="text-base text-white/90 transition-colors hover:text-[#cbfc01]"
            >
              {item.label}
            </Link>
          ))}
        </div>

        <div className="hidden items-center justify-end gap-3 md:flex">
          <Link className="text-base text-white/90 transition-colors hover:text-[#cbfc01]" href="#login">Sign In</Link>
          <Link className="text-base text-white/90 transition-colors hover:text-[#cbfc01]" href="#join">Join Us</Link>
          <button className="grid place-items-center bg-transparent pl-3" aria-label="Open cart">
            <Image
              src="/assets/icons/cart.png"
              alt=""
              width={16}
              height={16}
              className="h-[18px] w-[18px] brightness-0 invert"
            />
          </button>
        </div>

        <button
          className="flex h-9 w-9 flex-col items-center justify-center gap-[5px] border-0 bg-transparent md:hidden"
          onClick={() => setMenuOpen(!menuOpen)}
          aria-label={menuOpen ? "Close menu" : "Open menu"}
          aria-expanded={menuOpen}
        >
          <span className="h-0.5 w-[21px] rounded-sm bg-white" />
          <span className="h-0.5 w-[21px] rounded-sm bg-white" />
          <span className="h-0.5 w-[21px] rounded-sm bg-white" />
        </button>
      </div>

      {menuOpen && (
        <div className="flex flex-col gap-[18px] border-t border-white/15 bg-[#0634c9] px-6 py-[18px] md:hidden">
          {links.map((item) => (
            <Link
              key={item.label}
              href={item.href}
              onClick={() => setMenuOpen(false)}
              className="text-xs text-white/90 transition-colors hover:text-[#cbfc01]"
            >
              {item.label}
            </Link>
          ))}
          <div className="flex gap-[22px] border-t border-white/15 pt-[14px]">
            <Link className="text-xs text-white/90" href="#login" onClick={() => setMenuOpen(false)}>Sign In</Link>
            <Link className="text-xs text-white/90" href="#join" onClick={() => setMenuOpen(false)}>Join Us</Link>
          </div>
        </div>
      )}
    </nav>
  );
}
