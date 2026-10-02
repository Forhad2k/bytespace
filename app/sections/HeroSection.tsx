import Image from "next/image";
import LearningProgressCard from "../components/LearningProgressCard";

const card =
  "z-[4] flex flex-col rounded-[10px] bg-white text-[#16191f] shadow-[0_10px_30px_rgba(10,21,70,0.16)] lg:absolute";

export default function HeroSection() {
  return (
    <section
      id="hero"
      className="relative isolate flex min-h-[max(100svh,700px)] flex-col overflow-hidden bg-[#063eea] text-white lg:block lg:h-[100svh] lg:min-h-[620px]"
    >
      <div
        aria-hidden="true"
        className="pointer-events-none absolute inset-0 -z-10 bg-[url('/assets/images/background-grid.png')] bg-cover bg-center"
      />
      <div
        aria-hidden="true"
        className="absolute bottom-[-30%] left-1/2 z-0 aspect-square w-[620px] -translate-x-1/2 rounded-full bg-[#c8ff00] md:bottom-[-60%] md:w-[min(90vw,1100px)]"
      />

      {/* 3D shapes: hidden on mobile, original positions from md up */}
      <Image
        src="/assets/shapes/spring-1.png"
        alt=""
        width={150}
        height={180}
        aria-hidden="true"
        className="pointer-events-none absolute z-[1] hidden h-auto object-contain md:left-[-6%] md:top-[17%] md:block md:w-[240px] lg:w-[400px]"
      />
      <Image
        src="/assets/shapes/spring-white-1.png"
        alt=""
        width={150}
        height={180}
        aria-hidden="true"
        className="pointer-events-none absolute z-[1] hidden h-auto object-contain md:left-[20%] md:top-[40%] md:block md:w-[200px]"
      />
      <Image
        src="/assets/shapes/donut shape.png"
        alt=""
        width={160}
        height={160}
        aria-hidden="true"
        className="pointer-events-none absolute z-[1] hidden h-auto object-contain md:bottom-[5%] md:left-[10%] md:block md:w-[240px] lg:w-[400px]"
      />
      <Image
        src="/assets/shapes/Cone.png"
        alt=""
        width={100}
        height={110}
        aria-hidden="true"
        className="pointer-events-none absolute z-[1] hidden h-auto rotate-[14deg] object-contain md:right-[12%] md:top-[28%] md:block md:w-[130px] lg:w-[188px]"
      />
      <Image
        src="/assets/shapes/spring-white-2.png"
        alt=""
        width={180}
        height={220}
        aria-hidden="true"
        className="pointer-events-none absolute z-[1] hidden h-auto -rotate-12 object-contain md:bottom-[10%] md:right-[10%] md:block md:w-[220px] lg:w-[350px]"
      />
      <Image
        src="/assets/shapes/cylinder.png"
        alt=""
        width={180}
        height={200}
        aria-hidden="true"
        className="pointer-events-none absolute z-[1] hidden h-auto object-contain md:right-[-90px] md:top-[12%] md:block md:w-[200px] lg:right-[-130px] lg:w-[300px]"
      />

      <div className="relative z-[5] mx-auto w-[calc(100%-32px)] pt-[clamp(108px,16vh,136px)] text-center md:w-[min(calc(100%-40px),860px)] md:pt-[clamp(88px,13vh,116px)]">
        <h1 className="m-0 text-[clamp(1.75rem,7vw,4rem)] font-semibold leading-[1.14] text-white sm:text-[36px] md:text-[52px] lg:text-[64px]">
          Get Access to Hundreds
          <br className="hidden sm:block" />{" "}
          Courses Available
        </h1>
        <p className="mx-auto mt-[15px] max-w-[400px] text-base leading-[1.6] text-white/80 md:mt-[18px] md:max-w-none">
          Unlock your creativity, gain valuable knowledge, and grow your
          business with our wide range of courses.
        </p>
        <form
  className="mx-auto mt-[22px] flex h-11 w-full max-w-[490px] items-center gap-[14px] md:mt-[28px]"
  action="#courses"
>
  <div className="flex h-11 min-w-0 flex-1 items-center rounded-full bg-white px-5 shadow-[0_8px_24px_rgba(0,20,110,0.12)]">
    <svg
      aria-hidden="true"
      width="16"
      height="16"
      viewBox="0 0 24 24"
      fill="none"
      stroke="currentColor"
      strokeWidth="2"
      className="shrink-0 text-[#89909f]"
    >
      <circle cx="11" cy="11" r="7" />
      <path d="m20 20-4-4" />
    </svg>

    <input
      name="search"
      type="search"
      placeholder="Course, topic, creator"
      className="min-w-0 flex-1 bg-transparent pl-2.5 font-sans text-xs text-[#172033] outline-none placeholder:text-[#9298a5]"
    />
  </div>

  <button
    type="submit"
    className="h-11 shrink-0 rounded-full bg-[#cbfc01] px-5 text-xs font-semibold text-[#071225] transition hover:brightness-95"
  >
    Search
  </button>
</form>
      </div>

      {/* Cards: grid in the flow below lg, original absolute layout from lg up */}
      <div className="relative z-[4] mx-auto mt-6 grid w-[calc(100%-32px)] max-w-[420px] grid-cols-2 gap-2 md:max-w-[720px] md:grid-cols-3 md:gap-3 lg:contents">
        <div
          className={`${card} gap-[3px] px-3 py-3 text-sm sm:px-4 sm:py-4 sm:text-base lg:left-[30%] lg:top-auto lg:bottom-[39%] lg:max-h-[90px] lg:max-w-[86%]`}
        >
          <strong className="font-medium">UI/UX Design</strong>
          <span className="text-xs text-[#8c9098] sm:text-sm lg:text-base">
            200 Courses · 1000+ Students
          </span>
        </div>

        <LearningProgressCard
          className={`${card} w-full gap-[5px] px-2.5 pb-2.5 pt-3 text-sm sm:px-4 sm:pb-4 sm:pt-4 sm:text-base lg:right-[37%] lg:bottom-[23%] lg:w-[188px] lg:max-w-[188px]`}
          labelClassName="text-[12px] text-[#8c9098] md:text-[14px] lg:text-[16px]"
          valueClassName="text-[24px] leading-none md:text-[28px] lg:text-[36px]"
          trackClassName="h-1 overflow-hidden rounded-full bg-[#eef0f3]"
        />

        <div
          className={`${card} col-span-2 gap-0.5 p-2.5 text-sm sm:p-3 md:col-span-1 lg:left-[28%] lg:bottom-[10%] lg:col-auto lg:w-[276px] lg:max-w-[276px] lg:p-4 lg:text-base`}
        >
          <span>Happy Students</span>
          <small className="text-xs text-[#8c9098] md:text-sm lg:text-base">
            4.5 (240) <b className="text-[#c9f400]">★</b>
          </small>
          <div className="mt-1 flex items-center">
            {[1, 2, 3, 4, 5, 6].map((student) => (
              <Image
                key={student}
                src={`/assets/students/student-${student}.png`}
                alt=""
                width={40}
                height={40}
                sizes="40px"
                className="-ml-2 h-7 w-7 rounded-full border-2 border-white object-cover first:ml-0 md:h-6 md:w-6 lg:h-10 lg:w-10"
              />
            ))}
            <b className="-ml-2 grid h-7 w-7 place-items-center rounded-full border-2 border-white bg-[#cbfc01] text-[9px] text-[#152100] md:h-6 md:w-6 md:text-[8px] lg:-ml-[5px] lg:h-10 lg:w-10 lg:text-base">
              2K+
            </b>
          </div>
        </div>
      </div>

      {/* Hero model: bottom of the column below lg, original absolute placement from lg up */}
      <Image
        src="/assets/images/hero-model.png"
        alt="Student learning with a laptop"
        width={520}
        height={520}
        priority
        sizes="(max-width: 768px) 80vw, 700px"
        className="relative z-[2] mx-auto mt-auto block h-auto max-h-[40svh] w-[min(80vw,340px)] object-contain md:max-h-[44svh] md:w-[min(60vw,440px)] lg:absolute lg:bottom-0 lg:left-1/2 lg:mt-0 lg:max-h-[84%] lg:w-[min(80vw,700px)] lg:-translate-x-1/2"
      />
    </section>
  );
}
