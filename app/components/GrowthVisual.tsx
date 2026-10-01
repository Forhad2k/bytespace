import Image from "next/image";
import LearningProgressCard from "./LearningProgressCard";

export default function GrowthVisual() {
  return (
    <div className="relative mx-auto h-auto w-full max-w-[720px] sm:h-[500px]">
      <article className="absolute left-0 z-0 w-[72%] rounded-[20px] border border-gray-300 bg-white p-2.5 shadow-[0_8px_30px_rgba(15,23,42,0.06)] sm:w-[62%] sm:rounded-[24px] sm:p-3 lg:w-[58%]">
        <div className="relative aspect-[1.72] overflow-hidden rounded-[14px] sm:rounded-[17px]">
          <Image
            src="/assets/card-images/card-image-1.jpg"
            alt="Learners working on a Figma design project"
            fill
            sizes="(max-width: 640px) 72vw, (max-width: 1024px) 38vw, 360px"
            className="object-cover"
          />
          <div className="absolute inset-x-1 bottom-1 flex items-center justify-center gap-1 sm:inset-x-2 sm:bottom-2 sm:gap-1.5">
            <span className="rounded-full bg-white/80 px-1.5 py-1 text-[7px] font-medium text-gray-600 backdrop-blur-sm sm:px-2 sm:text-[9px]">
              17 Lessons
            </span>
            <span className="rounded-full bg-white/80 px-1.5 py-1 text-[7px] font-medium text-gray-600 backdrop-blur-sm sm:px-2 sm:text-[9px]">
              2 hours 16 mins
            </span>
            <span className="rounded-full bg-white/80 px-1.5 py-1 text-[7px] font-medium text-gray-600 backdrop-blur-sm sm:px-2 sm:text-[9px]">
              59 Comments
            </span>
          </div>
        </div>

        <div className="px-1 pb-1 pt-2 sm:pt-3">
          <div className="flex items-center justify-between gap-1">
            <h3 className="min-w-0 truncate text-[clamp(13px,1.35vw,18px)] font-bold tracking-tight text-gray-950">
              Learn Figma from Basic
            </h3>
            <span className="flex flex-none items-center gap-0.5 text-[clamp(9px,0.95vw,14px)] text-gray-600">
              4.5 <span className="text-[1.2em] text-gray-300">★</span>
            </span>
          </div>
          <p className="mt-0.5 text-base text-gray-500">
            by <span className="text-blue-600">purepearl studio</span>
          </p>
          <div className="mt-2 flex items-center justify-between gap-1 sm:mt-3">
            <div className="flex min-w-0 items-center gap-1">
              <span className="flex rounded-full bg-gray-100 px-2 py-1 text-[clamp(7px,0.7vw,10px)] text-gray-600">
                <Image
                  src="/assets/icons/signal.png"
                  alt=""
                  width={20}
                  height={20}
                  className="h-3 w-3 object-contain sm:h-4 sm:w-4"
                />
                Beginner
              </span>
              <div className="flex items-center pl-1">
                {[1, 2, 3, 4].map((student) => (
                  <Image
                    key={student}
                    src={`/assets/students/student-${student}.png`}
                    alt=""
                    width={24}
                    height={24}
                    sizes="(max-width: 640px) 18px, 24px"
                    className="-ml-1.5 h-[18px] w-[18px] rounded-full border border-white object-cover first:ml-0 sm:h-6 sm:w-6"
                  />
                ))}
                <span className="-ml-1.5 grid h-[18px] w-[18px] place-items-center rounded-full border border-white bg-[#CBFC01] text-[6px] font-semibold sm:h-6 sm:w-6 sm:text-[8px]">
                  26+
                </span>
              </div>
            </div>
            <p className="whitespace-nowrap text-base text-gray-500">
              <span className="text-[clamp(12px,1.35vw,18px)] font-bold text-blue-600">
                $25
              </span>
              /lifetime
            </p>
          </div>
        </div>
      </article>

      <Image
        src="/assets/images/hero-model.png"
        alt="Student learning with a laptop"
        width={480}
        height={640}
        sizes="(max-width: 640px) 170vw, (max-width: 1024px) 120vw, 1100px"
        className="pointer-events-none absolute top-6 right-[0%] z-10 h-auto w-[100%] max-w-[1100px] object-contain drop-shadow-[0_18px_14px_rgba(20,25,40,0.2)]"
      />

      <LearningProgressCard
        className="absolute right-[10%] top-[45%] z-20 flex w-[34%] flex-col rounded-xl bg-white p-3 shadow-[0_12px_32px_rgba(20,30,70,0.14)] sm:rounded-2xl sm:p-4"
        labelClassName="text-xs font-medium text-gray-500"
        valueClassName="mt-1 text-3xl font-bold leading-none text-gray-900"
        trackClassName="mt-2 h-1 overflow-hidden rounded-full bg-gray-100"
      />

      <Image
        src="/assets/shapes/spring-2.png"
        alt=""
        aria-hidden="true"
        width={250}
        height={190}
        sizes="(max-width: 640px) 190px, 220px"
        className="absolute right-[2%] top-[18%] z-20 h-auto w-[190px] object-contain sm:w-[220px]"
      />
    </div>
  );
}
