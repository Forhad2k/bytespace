import Image from "next/image";

const stats = [
  { value: "175+", label: "Instructors" },
  { value: "40k+", label: "Students" },
  { value: "98%", label: "Success Rate" },
];

export default function GrowthSection() {
  return (
    <section
      id="growth"
      className="w-full py-16 lg:py-24"
      style={{ background: "#fff" }}
    >
      <div className="container mx-auto px-6 lg:px-16 xl:px-20">
        <div className="flex flex-col lg:flex-row items-center gap-12 lg:gap-16">
          {/* ── Left — Text Content ── */}
          <div className="flex-1 order-2 lg:order-1 max-w-xl lg:max-w-none">
            <div className="section-label mb-5 inline-flex">
              <span
                className="w-1.5 h-1.5 rounded-full"
                style={{ background: "#003BE2" }}
              />
              Growth
            </div>

            <h2
              className="font-bold text-gray-900 mb-4 leading-snug"
              style={{
                fontFamily: "Poppins, sans-serif",
                fontSize: "clamp(1.6rem, 3vw, 2.25rem)",
              }}
            >
              Your Path to Professional
              <br />
              Growth Starts Here
            </h2>

            <p className="text-gray-500 text-sm leading-relaxed mb-8 max-w-md">
              ByteSpace gives you access to industry-leading courses, hands-on
              projects, and a thriving community. Build the skills employers
              love and accelerate your career like never before.
            </p>

            {/* Stats */}
            <div className="flex flex-wrap gap-8 mb-10">
              {stats.map((stat) => (
                <div key={stat.label} className="flex flex-col gap-0.5">
                  <span
                    className="font-bold leading-none"
                    style={{
                      fontFamily: "Poppins, sans-serif",
                      fontSize: "clamp(1.5rem, 2.5vw, 2rem)",
                      color: "#003BE2",
                    }}
                  >
                    {stat.value}
                  </span>
                  <span className="text-xs text-gray-400 uppercase tracking-wide">
                    {stat.label}
                  </span>
                </div>
              ))}
            </div>

            <button className="btn-primary">
              Start Learning Today
              <svg
                width="16"
                height="16"
                viewBox="0 0 24 24"
                fill="none"
                stroke="currentColor"
                strokeWidth="2"
              >
                <path d="M5 12h14M12 5l7 7-7 7" />
              </svg>
            </button>
          </div>

          {/* ── Right — Model Image with Floating Badges ── */}
          <div className="flex-1 order-1 lg:order-2 flex justify-center lg:justify-end">
            <div
              className="relative"
              style={{ width: "min(420px, 90vw)" }}
            >
              {/* Main Image */}
              <div
                className="relative overflow-hidden shadow-2xl"
                style={{
                  borderRadius: "32px",
                  aspectRatio: "3/4",
                  background: "#EEF3FF",
                }}
              >
                <Image
                  src="/assets/images/female-model.png"
                  alt="Professional growth with ByteSpace"
                  fill
                  className="object-cover object-top"
                  sizes="(max-width: 1024px) 90vw, 420px"
                />
              </div>

              {/* Floating Rating Badge — Top Right */}
              <div
                className="absolute top-8 right-[-16px] lg:right-[-28px] bg-white rounded-2xl shadow-2xl flex items-center gap-3 animate-float"
                style={{ padding: "12px 16px" }}
              >
                <div>
                  <p
                    className="font-bold text-xl leading-none"
                    style={{ color: "#003BE2", fontFamily: "Poppins, sans-serif" }}
                  >
                    55%
                  </p>
                  <p className="text-xs text-gray-400 mt-0.5">Growth Rate</p>
                </div>
                <div className="flex flex-col gap-0.5">
                  {Array.from({ length: 5 }).map((_, i) => (
                    <div
                      key={i}
                      className="h-1.5 rounded-full"
                      style={{
                        width: `${[60, 80, 70, 90, 55][i]}%`,
                        background:
                          i < 3 ? "#003BE2" : "rgba(0,59,226,0.2)",
                        minWidth: "24px",
                      }}
                    />
                  ))}
                </div>
              </div>

              {/* Floating Course Progress Badge — Bottom Left */}
              <div
                className="absolute bottom-8 left-[-16px] lg:left-[-28px] bg-white rounded-2xl shadow-2xl animate-float-slow"
                style={{ padding: "12px 16px", animationDelay: "1.5s", minWidth: "190px" }}
              >
                <div className="flex items-center gap-3">
                  <div
                    className="w-10 h-10 rounded-xl overflow-hidden flex-shrink-0"
                  >
                    <Image
                      src="/assets/icons/Design.png"
                      alt="Design"
                      width={40}
                      height={40}
                      className="w-full h-full object-contain"
                    />
                  </div>
                  <div className="flex-1 min-w-0">
                    <p
                      className="text-xs font-semibold text-gray-900 truncate"
                      style={{ fontFamily: "Poppins, sans-serif" }}
                    >
                      UI/UX Design
                    </p>
                    <p className="text-xs text-gray-400 mb-1.5">72% complete</p>
                    <div
                      className="w-full rounded-full overflow-hidden"
                      style={{ height: "4px", background: "#F0F0F0" }}
                    >
                      <div
                        style={{
                          width: "72%",
                          height: "100%",
                          background: "#003BE2",
                          borderRadius: "999px",
                        }}
                      />
                    </div>
                  </div>
                </div>
              </div>

              {/* Decorative Shape */}
              <div
                aria-hidden="true"
                className="absolute top-[-24px] left-[-24px] w-20 h-20 pointer-events-none"
              >
                <Image
                  src="/assets/shapes/spring.png"
                  alt=""
                  fill
                  className="object-contain opacity-30"
                />
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
