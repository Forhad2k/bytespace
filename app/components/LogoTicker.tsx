"use client";

import Image from "next/image";
import { useEffect, useRef, useState } from "react";

const logos = [
  { src: "/assets/logos/logo-1.png", alt: "Logoipsum 1" },
  { src: "/assets/logos/logo-2.png", alt: "Logoipsum 2" },
  { src: "/assets/logos/logo-3.png", alt: "Logoipsum 3" },
  { src: "/assets/logos/logo-4.png", alt: "Logoipsum 4" },
  { src: "/assets/logos/logo-5.png", alt: "Logoipsum 5" },
];

function moveCarousel(track: HTMLDivElement | null) {
  if (!track) return;

  const slide = track.querySelector<HTMLElement>("[data-logo-slide]");
  const step = slide?.getBoundingClientRect().width ?? track.clientWidth;
  const maxScroll = track.scrollWidth - track.clientWidth;

  if (track.scrollLeft >= maxScroll - 1) {
    track.scrollTo({ left: 0, behavior: "smooth" });
  } else {
    track.scrollBy({ left: step, behavior: "smooth" });
  }
}

export default function LogoTicker() {
  const trackRef = useRef<HTMLDivElement>(null);
  const [paused, setPaused] = useState(false);

  useEffect(() => {
    if (paused) return;

    const interval = window.setInterval(() => moveCarousel(trackRef.current), 4000);
    return () => window.clearInterval(interval);
  }, [paused]);

  return (
    <section
      aria-label="Partner logos"
      aria-roledescription="carousel"
      className="w-full border-y py-12"
      style={{ borderColor: "#F5F5F6", background: "#F5F5F6" }}
      onMouseEnter={() => setPaused(true)}
      onMouseLeave={() => setPaused(false)}
    >
      <div className="mx-auto w-full max-w-[1440px] px-4 sm:px-8">
        <div
          ref={trackRef}
          className="logo-carousel-track flex min-w-0 overflow-x-auto scroll-smooth"
        >
          {logos.map((logo, idx) => (
            <div
              key={logo.src}
              data-logo-slide
              role="group"
              aria-roledescription="slide"
              aria-label={`${idx + 1} of ${logos.length}`}
              className="flex basis-1/2 snap-start items-center justify-center px-12 sm:basis-1/3 lg:basis-1/4"
            >
              <Image
                src={logo.src}
                alt={logo.alt}
                width={120}
                height={36}
                className="h-12 w-auto object-contain opacity-60 hover:opacity-100 transition-opacity duration-300 grayscale hover:grayscale-0"
              />
            </div>
          ))}
        </div>

      </div>
    </section>
  );
}
