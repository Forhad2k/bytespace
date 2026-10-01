import Image from "next/image";
import LearningProgressCard from "./LearningProgressCard";

export default function HeroSection() {
  return (
    <section
      id="hero"
      className="relative isolate h-[100svh] min-h-[600px] overflow-hidden bg-[#063eea] text-white md:min-h-[620px]"
    >
      <div
        aria-hidden="true"
        className="pointer-events-none absolute inset-0 -z-10 bg-[url('/assets/images/background-grid.png')] bg-cover bg-center"
      />
      <div
        aria-hidden="true"
        className="absolute bottom-[-30%] left-1/2 z-0 aspect-square w-[620px] -translate-x-1/2 rounded-full bg-[#c8ff00] md:bottom-[-60%] md:w-[min(90vw,1000px)]"
      />
      <Image
        src="/assets/shapes/spring-1.png"
        alt=""
        width={150}
        height={180}
        aria-hidden="true"
        className="pointer-events-none absolute left-[12%] top-[27%] z-[1] h-auto w-[42px] object-contain md:left-[-6%] md:top-[17%] md:w-[400px]"
      />
      <Image
        src="/assets/shapes/spring-white-1.png"
        alt=""
        width={150}
        height={180}
        aria-hidden="true"
        className="pointer-events-none absolute left-[12%] top-[27%] z-[1] h-auto w-[42px] object-contain md:left-[20%] md:top-[40%] md:w-[200px]"
      />
      
      <Image
        src="/assets/shapes/donut shape.png"
        alt=""
        width={160}
        height={160}
        aria-hidden="true"
        className="pointer-events-none absolute left-[4%] top-[48%] z-[1] h-auto w-[90px] object-contain md:bottom-[5%] md:left-[15%] md:top-[60%] md:w-[400px]"
      />
      <Image
        src="/assets/shapes/Cone.png"
        alt=""
        width={100}
        height={110}
        aria-hidden="true"
        className="pointer-events-none absolute right-[9%] top-[28%] z-[1] h-auto w-[56px] rotate-[14deg] object-contain md:right-[12%] md:w-[188px]"
      />
      <Image
        src="/assets/shapes/spring-white-2.png"
        alt=""
        width={180}
        height={220}
        aria-hidden="true"
        className="pointer-events-none absolute right-[2%] bottom-[10%] z-[1] h-auto w-[82px] -rotate-12 object-contain md:right-[10%] md:bottom-[10%] md:w-[350px]"
      />
      <Image
        src="/assets/shapes/cylinder.png"
        alt=""
        width={180}
        height={200}
        aria-hidden="true"
        className="pointer-events-none absolute right-[-70px] top-[14%] z-[1] h-auto w-[125px] object-contain md:right-[-130px] md:top-[12%] md:w-[300px]"
      />

      <div className="relative z-[5] mx-auto w-[calc(100%-32px)] pt-[clamp(88px,14vh,112px)] text-center md:w-[min(calc(100%-40px),860px)] md:pt-[clamp(88px,13vh,116px)]">
        <h1 className="m-0 text-[32px] font-semibold leading-[1.14] text-white sm:text-[36px] md:text-[64px]">
          Get Access to Hundreds
          <br />
          Courses Available
        </h1>
        <p className="mx-auto mt-[15px] max-w-[400px] text-base leading-[1.6] text-white/80 md:mt-[18px] md:max-w-none">
          Unlock your creativity, gain valuable knowledge, and grow your
          business with our wide range of courses.
        </p>
        <form
          className="mx-auto mt-[22px] flex h-11 w-full max-w-[470px] items-center gap-[9px] rounded-full bg-white py-1 pl-4 pr-1 text-[#89909f] shadow-[0_8px_24px_rgba(0,20,110,0.12)] md:mt-[28px]"
          action="#courses"
        >
          <svg
            aria-hidden="true"
            width="16"
            height="16"
            viewBox="0 0 24 24"
            fill="none"
            stroke="currentColor"
            strokeWidth="2"
          >
            <circle cx="11" cy="11" r="7" />
            <path d="m20 20-4-4" />
          </svg>
          <input
            name="search"
            type="search"
            placeholder="Course, topic, creator"
            className="min-w-0 flex-1 bg-transparent font-sans text-xs text-[#172033] outline-none placeholder:text-[#9298a5]"
          />
          <button
            type="submit"
            className="h-9 rounded-full bg-[#cbfc01] px-[18px] text-xs font-semibold text-[#071225] transition hover:brightness-95"
          >
            Search
          </button>
        </form>
      </div>

      <Image
        src="/assets/images/hero-model.png"
        alt="Student learning with a laptop"
        width={520}
        height={520}
        priority
        sizes="(max-width: 640px) 110vw, 700px"
        className="absolute bottom-0 left-1/2 z-[2] h-auto max-h-[92%] w-[min(110vw,1000px)] -translate-x-1/2 object-contain md:max-h-[92%] md:w-[min(80vw,700px)] lg:max-h-[84%]"
      />

      <div className="absolute left-[7%] top-[47%] z-[4] flex flex-col gap-[3px] rounded-[10px] bg-white px-[11px] py-[10px] text-[10px] text-[#16191f] shadow-[0_10px_30px_rgba(10,21,70,0.16)] md:left-[calc(50%_-_167px)] md:top-[39%]">
        <strong className="font-medium">UI/UX Design</strong>
        <span className="text-[8px] text-[#8c9098]">200 Courses · 1000+ Students</span>
      </div>

      <LearningProgressCard
        className="absolute right-[7%] top-[48%] z-[4] flex w-[112px] flex-col gap-[5px] rounded-[10px] bg-white px-[10px] pb-[10px] pt-[11px] text-[10px] text-[#16191f] shadow-[0_10px_30px_rgba(10,21,70,0.16)] md:right-[calc(50%_-_192px)] md:top-[40%] md:w-[124px]"
        labelClassName="text-[8px] text-[#8c9098]"
        valueClassName="text-[26px] leading-none"
        trackClassName="h-1 overflow-hidden rounded-full bg-[#eef0f3]"
      />

      <div className="absolute left-[6%] top-[63%] z-[4] flex flex-col gap-0.5 rounded-[10px] bg-white p-2 text-[10px] text-[#16191f] shadow-[0_10px_30px_rgba(10,21,70,0.16)] md:left-[calc(50%_-_205px)] md:top-[54%] md:p-[10px]">
        <span>Happy Students</span>
        <small className="text-[8px] text-[#8c9098]">4.5 (240) <b className="text-[#c9f400]">★</b></small>
        <div className="mt-1 flex items-center">
          {[1, 2, 3, 4].map((student) => (
            <Image
              key={student}
              src={`/assets/students/student-${student}.png`}
              alt=""
              width={26}
              height={26}
              sizes="26px"
              className="-ml-[5px] h-6 w-6 rounded-full border-2 border-white object-cover first:ml-0"
            />
          ))}
          <b className="-ml-[5px] grid h-6 w-6 place-items-center rounded-full border-2 border-white bg-[#cbfc01] text-[8px] text-[#152100]">2K+</b>
        </div>
      </div>
    </section>
  );
}
