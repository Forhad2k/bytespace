import Image from "next/image";
import Link from "next/link";

export default function CreatorCTASection() {
  return (
    <section className="w-full py-0" style={{ background: "#fff" }}>
      <div className="w-full">
        <div
          className="relative isolate flex min-h-[360px] w-full items-center justify-center overflow-hidden bg-[#073fe8] px-6 py-16 sm:min-h-[440px] sm:py-20 lg:min-h-[500px]"
          style={{
            backgroundImage:
              "linear-gradient(rgba(255,255,255,0.09) 1px, transparent 1px), linear-gradient(90deg, rgba(255,255,255,0.09) 1px, transparent 1px)",
            backgroundSize: "69px 69px",
          }}
        >
          <div className="pointer-events-none absolute left-[-70px] top-[-55px] h-48 w-48 rotate-12 sm:left-[-45px] sm:top-[-75px] sm:h-64 sm:w-64 lg:h-72 lg:w-72">
            <Image
              src="/assets/shapes/spring-2.png"
              alt=""
              fill
              sizes="(max-width: 640px) 192px, (max-width: 1024px) 256px, 288px"
              className="object-contain"
            />
          </div>
          <div className="pointer-events-none absolute right-[14%] top-2 h-20 w-20 rotate-[-18deg] sm:right-[16%] sm:top-2 sm:h-32 sm:w-32 lg:h-40 lg:w-40">
            <Image
              src="/assets/shapes/Cone.png"
              alt=""
              fill
              sizes="(max-width: 640px) 80px, (max-width: 1024px) 128px, 160px"
              className="object-contain"
            />
          </div>
          <div className="pointer-events-none absolute bottom-[-45px] left-[4%] h-44 w-44 sm:bottom-[-65px] sm:h-60 sm:w-60 lg:h-72 lg:w-72">
            <Image
              src="/assets/shapes/donut shape.png"
              alt=""
              fill
              sizes="(max-width: 640px) 176px, (max-width: 1024px) 240px, 288px"
              className="object-contain"
            />
          </div>
          <div className="pointer-events-none absolute bottom-[-40px] right-[4%] h-36 w-36 rotate-90 sm:bottom-[-60px] sm:h-52 sm:w-52 lg:h-64 lg:w-64">
            <Image
              src="/assets/shapes/spring-3.png"
              alt=""
              fill
              sizes="(max-width: 640px) 144px, (max-width: 1024px) 208px, 256px"
              className="object-contain"
            />
          </div>
          <div className="pointer-events-none absolute left-[-38px] top-1/2 h-32 w-28 -translate-y-1/2 sm:left-[-48px] sm:h-40 sm:w-36">
            <Image src="/assets/shapes/Cone.png" alt="" fill sizes="(max-width: 640px) 80px, 96px" className="object-contain" />
          </div>
          <div className="pointer-events-none absolute right-[-55px] top-1/2 h-44 w-36 -translate-y-1/2 rotate-[-25deg] sm:right-[-70px] sm:h-56 sm:w-44">
            <Image src="/assets/shapes/cylinder.png" alt="" fill sizes="(max-width: 640px) 112px, 144px" className="object-contain" />
          </div>

          <div className="relative z-10 mx-auto w-full max-w-[720px] text-center">
            <h2
              className="mb-5 text-[clamp(1.5rem,3.2vw,2.35rem)] font-bold leading-[1.16] text-white"
              style={{ fontFamily: "Poppins, sans-serif" }}
            >
              Unlock Your Potential as a
              <br />
              Creator with ByteSpace
            </h2>
            <p className="mx-auto mb-6 max-w-[760px] text-base leading-[1.7] text-white/85">
              Experience the collaboration of numerous creators and an expanding selection of courses. Register now and become a part of a community comprising over 10,000 local and international creators. Utilize our Course Editor, and showcase your expertise by publishing your finest course on the ByteSpace Course Library.
            </p>

            <Link
              href="#join"
              className="inline-flex min-h-8 items-center justify-center rounded-full bg-[#CBFC01] px-5 py-2 text-[18px] font-medium text-gray-900 transition hover:brightness-95"
            >
              Join as Creator
            </Link>
          </div>
        </div>
      </div>
    </section>
  );
}
