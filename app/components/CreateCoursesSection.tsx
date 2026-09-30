import Image from "next/image";

const features = [
  "Personalized learning paths tailored to your goals",
  "Expert-led live sessions with Q&A",
  "Certificate of completion for every course",
  "Access on all devices, anytime anywhere",
];

export default function CreateCoursesSection() {
  return (
    <section
      id="instructors"
      className="w-full py-16 lg:py-24"
      style={{ background: "#F5F5F6" }}
    >
      <div className="container mx-auto px-6 lg:px-16 xl:px-20">
        <div className="flex flex-col lg:flex-row items-center gap-12 lg:gap-16">
          {/* ── Left — Dashboard / Image Preview ── */}
          <div className="flex-1 flex justify-center lg:justify-start">
            <div
              className="relative"
              style={{ width: "min(420px, 90vw)" }}
            >
              {/* Main card with image */}
              <div
                className="relative overflow-hidden shadow-2xl"
                style={{
                  borderRadius: "32px",
                  aspectRatio: "3/4",
                  background: "#1a1a2e",
                }}
              >
                <Image
                  src="/assets/images/female-model.png"
                  alt="Create and manage courses easily"
                  fill
                  className="object-cover"
                  sizes="(max-width: 1024px) 90vw, 420px"
                />
                {/* Gradient Overlay */}
                <div
                  className="absolute inset-0"
                  style={{
                    background:
                      "linear-gradient(to top, rgba(0,10,50,0.85) 0%, rgba(0,10,50,0.2) 45%, transparent 70%)",
                  }}
                />

                {/* Bottom Overlay Card */}
                <div className="absolute bottom-0 left-0 right-0 p-5">
                  <div
                    className="rounded-2xl p-4"
                    style={{
                      background: "rgba(255,255,255,0.1)",
                      backdropFilter: "blur(16px)",
                      border: "1px solid rgba(255,255,255,0.15)",
                    }}
                  >
                    <div className="flex items-center justify-between mb-3">
                      <div className="flex items-center gap-2.5">
                        <div
                          className="w-8 h-8 rounded-lg flex items-center justify-center"
                          style={{ background: "#CBFC01" }}
                        >
                          <svg
                            width="14"
                            height="14"
                            viewBox="0 0 24 24"
                            fill="none"
                            stroke="#000"
                            strokeWidth="2.5"
                          >
                            <polygon points="5 3 19 12 5 21 5 3" />
                          </svg>
                        </div>
                        <div>
                          <p className="text-white text-xs font-semibold">
                            Course Published!
                          </p>
                          <p
                            className="text-xs"
                            style={{ color: "rgba(255,255,255,0.6)" }}
                          >
                            Now live for students
                          </p>
                        </div>
                      </div>
                      <span
                        className="text-xs font-bold px-2 py-1 rounded-full"
                        style={{ background: "#CBFC01", color: "#000" }}
                      >
                        Live
                      </span>
                    </div>

                    {/* Progress bar */}
                    <div
                      className="rounded-full overflow-hidden"
                      style={{
                        height: "4px",
                        background: "rgba(255,255,255,0.15)",
                      }}
                    >
                      <div
                        style={{
                          width: "85%",
                          height: "100%",
                          background: "#CBFC01",
                          borderRadius: "999px",
                        }}
                      />
                    </div>
                    <div className="flex justify-between mt-1.5">
                      <span
                        className="text-xs"
                        style={{ color: "rgba(255,255,255,0.5)" }}
                      >
                        Progress
                      </span>
                      <span
                        className="text-xs font-semibold"
                        style={{ color: "#CBFC01" }}
                      >
                        85%
                      </span>
                    </div>
                  </div>
                </div>
              </div>

              {/* Floating Earnings Badge */}
              <div
                className="absolute top-8 right-[-16px] lg:right-[-28px] bg-white rounded-2xl shadow-2xl animate-float"
                style={{ padding: "12px 16px" }}
              >
                <p className="text-xs text-gray-400 mb-0.5">Monthly Earnings</p>
                <p
                  className="font-bold text-lg leading-none"
                  style={{
                    color: "#003BE2",
                    fontFamily: "Poppins, sans-serif",
                  }}
                >
                  $2,840
                </p>
                <div className="flex items-center gap-1 mt-1">
                  <svg
                    width="10"
                    height="10"
                    viewBox="0 0 24 24"
                    fill="#22c55e"
                  >
                    <path d="M7 17l5-5 5 5M7 7l5 5 5-5" stroke="#22c55e" strokeWidth="2" fill="none" />
                  </svg>
                  <span className="text-xs text-green-500 font-medium">
                    +24% this month
                  </span>
                </div>
              </div>

              {/* Decorative shape */}
              <div
                aria-hidden="true"
                className="absolute bottom-[-20px] right-[-20px] w-20 h-20 pointer-events-none"
              >
                <Image
                  src="/assets/shapes/donut shape.png"
                  alt=""
                  fill
                  className="object-contain opacity-20"
                />
              </div>
            </div>
          </div>

          {/* ── Right — Text Content ── */}
          <div className="flex-1 max-w-xl lg:max-w-none">
            <div className="section-label mb-5 inline-flex">
              <span
                className="w-1.5 h-1.5 rounded-full"
                style={{ background: "#003BE2" }}
              />
              For Instructors
            </div>

            <h2
              className="font-bold text-gray-900 mb-4 leading-snug"
              style={{
                fontFamily: "Poppins, sans-serif",
                fontSize: "clamp(1.6rem, 3vw, 2.25rem)",
              }}
            >
              Create & Manage
              <br />
              Courses Easily
            </h2>

            <p className="text-gray-500 text-sm leading-relaxed mb-8 max-w-md">
              Turn your expertise into income. ByteSpace&apos;s intuitive
              course builder makes it simple to create, manage, and grow your
              online teaching business — all in one place.
            </p>

            {/* Feature Checklist */}
            <ul className="flex flex-col gap-3.5 mb-10">
              {features.map((f) => (
                <li key={f} className="flex items-start gap-3">
                  <div className="w-6 h-6 rounded-full flex items-center justify-center flex-shrink-0 mt-0.5">
                    <Image
                      src="/assets/icons/tick.png"
                      alt="✓"
                      width={24}
                      height={24}
                      className="w-6 h-6 object-contain"
                    />
                  </div>
                  <span className="text-sm text-gray-700 leading-relaxed">
                    {f}
                  </span>
                </li>
              ))}
            </ul>

            <button className="btn-primary">
              Become an Instructor
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
        </div>
      </div>
    </section>
  );
}
