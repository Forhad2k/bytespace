import Image from "next/image";

const revenueCards = [
  { title: "Total Revenue", period: "July 1-28", amount: "$120.29" },
  {
    title: "Year to Date",
    period: "2023",
    amount: "$1,200.38",
    change: "+12%",
  },
];

export default function InstructorVisual() {
  return (
    <div className="relative mx-auto aspect-[0.95] w-full max-w-[390px]">
      {revenueCards.map((card, index) => (
        <div
          key={card.title}
          className={`absolute left-[2%] z-0 w-[30%] rounded-lg bg-[#063eea] p-2.5 text-white shadow-[0_12px_35px_rgba(20,30,70,0.18)] sm:rounded-xl sm:p-3 ${index === 0 ? "top-[8%]" : "top-[31%]"}`}
        >
          <span className="block text-[8px] leading-tight text-white/75 sm:text-[9px]">
            {card.title}
          </span>
          <span className="block text-[6px] leading-tight text-white/55 sm:text-[7px]">
            {card.period}
          </span>
          <p className="mb-0 mt-1 text-sm font-bold leading-tight sm:text-base">
            {card.amount}
          </p>
          {card.change ? (
            <span className="mt-1 inline-block rounded-full bg-[#CBFC01] px-1.5 py-0.5 text-[7px] font-bold leading-none text-gray-900">
              {card.change}
            </span>
          ) : (
            <div className="mt-1.5 h-1 rounded-full bg-white/25">
              <div className="h-full w-[72%] rounded-full bg-[#CBFC01]" />
            </div>
          )}
        </div>
      ))}

      <Image
        src="/assets/images/female-model.png"
        alt="Instructor ready to teach online"
        width={500}
        height={500}
        sizes="(max-width: 640px) 90vw, 350px"
        className="absolute bottom-0 left-[5%] z-10 h-auto w-[90%] object-contain drop-shadow-[0_18px_14px_rgba(20,25,40,0.18)]"
      />

      <Image
        src="/assets/shapes/spring-3.png"
        alt=""
        aria-hidden="true"
        width={250}
        height={190}
        sizes="(max-width: 640px) 105px, 125px"
        className="absolute right-[7%] top-[18%] z-20 h-auto w-[29%] object-contain"
      />

      <div className="absolute bottom-[16%] right-0 z-20 w-[42%] rounded-xl bg-white p-2 shadow-[0_12px_32px_rgba(20,30,70,0.15)] sm:rounded-2xl sm:p-2.5">
        <p className="mb-0 text-[10px] font-semibold leading-tight text-gray-800 sm:text-xs">
          Happy Students
        </p>
        <p className="mb-0 mt-0.5 text-[8px] leading-tight text-gray-500 sm:text-[9px]">
          4.8 (240) <span className="text-lime-500">★</span>
        </p>
        <div className="mt-1 flex items-center">
          {[1, 2, 3, 4].map((student) => (
            <Image
              key={student}
              src={`/assets/students/student-${student}.png`}
              alt=""
              width={28}
              height={28}
              sizes="28px"
              className="-ml-1.5 h-6 w-6 rounded-full border-2 border-white object-cover first:ml-0 sm:h-7 sm:w-7"
            />
          ))}
          <span className="-ml-1.5 grid h-6 w-6 place-items-center rounded-full border-2 border-white bg-[#CBFC01] text-[7px] font-bold text-gray-900 sm:h-7 sm:w-7">
            2K+
          </span>
        </div>
      </div>
    </div>
  );
}
