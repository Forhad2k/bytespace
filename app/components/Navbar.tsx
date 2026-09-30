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
    <nav className="sticky top-0 z-50 bg-[#063eea] bg-[url('/assets/images/background-grid.png')] bg-cover bg-center text-white">
      <div className="mx-auto grid min-h-16 w-full min-w-[1440px] grid-cols-[1fr_auto_1fr] items-center px-[clamp(24px,8.5vw,80px)] max-[700px]:min-h-[58px] max-[700px]:grid-cols-[1fr_auto]">
        <Link href="/" className="block w-[171px] max-[700px]:w-[94px]">
          <Image
            src="/assets/logos/header-logo.png"
            alt="ByteSpace"
            width={110}
            height={30}
            priority
            className="h-auto w-full"
          />
        </Link>

        <div className="flex items-center gap-5 max-[700px]:hidden">
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

        <div className="flex items-center justify-end gap-4 max-[700px]:hidden">
          <Link className="text-base text-white/90 transition-colors hover:text-[#cbfc01]" href="#login">Sign In</Link>
          <Link className="text-base text-white/90 transition-colors hover:text-[#cbfc01]" href="#join">Join Us</Link>
          <button className="grid place-items-center bg-transparent pl-3" aria-label="Open cart">
            <Image
              src="/assets/icons/cart.png"
              alt=""
              width={16}
              height={16}
              className="h-[24px] w-[24px] brightness-0 invert"
            />
          </button>
        </div>

        <button
          className="hidden h-9 w-9 flex-col items-center justify-center gap-[5px] border-0 bg-transparent max-[700px]:flex"
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
        <div className="flex flex-col gap-[18px] border-t border-white/15 bg-[#0634c9] px-6 py-[18px] min-[701px]:hidden">
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
