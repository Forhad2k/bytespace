import Image from "next/image";

export default function CreatorCTASection() {
  return (
    <section className="w-full py-16 lg:py-20" style={{ background: "#fff" }}>
      <div className="container mx-auto px-6 lg:px-16 xl:px-20">
        <div
          className="creator-cta relative overflow-hidden"
          style={{
            background: "#003BE2",
            borderRadius: "32px",
            padding: "clamp(2.5rem, 5vw, 4rem)",
          }}
        >
          {/* Background Shapes */}
          <div className="absolute left-[-60px] bottom-[-40px] w-48 h-48 opacity-15 pointer-events-none">
            <Image
              src="/assets/shapes/donut shape.png"
              alt=""
              fill
              className="object-contain"
            />
          </div>
          <div className="absolute right-[-30px] top-[-30px] w-36 h-36 opacity-20 pointer-events-none">
            <Image
              src="/assets/shapes/Cone.png"
              alt=""
              fill
              className="object-contain"
            />
          </div>
          <div className="absolute right-[15%] bottom-[-20px] w-28 h-28 opacity-15 pointer-events-none">
            <Image
              src="/assets/shapes/spring.png"
              alt=""
              fill
              className="object-contain"
            />
          </div>
          <div className="absolute left-[30%] top-[-20px] w-20 h-20 opacity-20 pointer-events-none hidden lg:block">
            <Image
              src="/assets/shapes/cylinder.png"
              alt=""
              fill
              className="object-contain"
            />
          </div>

          {/* Content */}
          <div className="relative z-10 text-center max-w-2xl mx-auto">
            {/* Icon */}
            <div
              className="inline-flex items-center justify-center w-14 h-14 rounded-2xl mb-6"
              style={{ background: "rgba(255,255,255,0.15)" }}
            >
              <svg
                width="28"
                height="28"
                viewBox="0 0 24 24"
                fill="none"
                stroke="#CBFC01"
                strokeWidth="2"
              >
                <path d="M12 2l2.4 7.4H22l-6.2 4.5 2.4 7.4L12 17l-6.2 4.3 2.4-7.4L2 9.4h7.6L12 2z" />
              </svg>
            </div>

            <h2
              className="text-white font-bold mb-4 leading-snug"
              style={{
                fontFamily: "Poppins, sans-serif",
                fontSize: "clamp(1.75rem, 3.5vw, 2.5rem)",
              }}
            >
              Unlock Your Potential as a
              <br />
              Creator with ByteSpace
            </h2>
            <p
              className="mb-8 leading-relaxed"
              style={{
                color: "rgba(255,255,255,0.75)",
                fontSize: "clamp(0.875rem, 1.5vw, 1rem)",
                maxWidth: "500px",
                margin: "0 auto 2rem",
              }}
            >
              Join thousands of creators who are already building thriving
              businesses on ByteSpace. Share your knowledge, grow your
              audience, and earn on your terms.
            </p>

            <div className="flex flex-col sm:flex-row items-center justify-center gap-3">
              <button className="btn-lime">
                Start Creating Today
                <svg
                  width="16"
                  height="16"
                  viewBox="0 0 24 24"
                  fill="none"
                  stroke="currentColor"
                  strokeWidth="2.5"
                >
                  <path d="M5 12h14M12 5l7 7-7 7" />
                </svg>
              </button>
              <button className="btn-outline">Learn More</button>
            </div>

            {/* Social Proof */}
            <div className="flex items-center justify-center gap-4 mt-8">
              <div className="flex -space-x-2">
                {[1, 2, 3, 4].map((i) => (
                  <div
                    key={i}
                    className="w-8 h-8 rounded-full border-2 overflow-hidden relative flex-shrink-0"
                    style={{ borderColor: "#003BE2" }}
                  >
                    <Image
                      src={`/assets/students/student-${i}.png`}
                      alt={`Creator ${i}`}
                      fill
                      className="object-cover"
                    />
                  </div>
                ))}
              </div>
              <p
                className="text-sm"
                style={{ color: "rgba(255,255,255,0.75)" }}
              >
                <span className="font-semibold text-white">10,000+</span>{" "}
                creators already joined
              </p>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
