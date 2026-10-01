import Image from "next/image";

const revenueCards = [
  { title: "Total Revenue", period: "July 1-28", amount: "$120.29" },
  { title: "Year to Date", period: "2023", amount: "$1,200.38", change: "+12$" },
];

export default function InstructorVisual() {
  return (
    <div className="relative isolate mx-auto aspect-[644/667] w-full max-w-[644px] [container-type:inline-size]">
      {/* soft background glow: lavender top-left, lime bottom-left */}
      <div
        aria-hidden="true"
        className="absolute inset-0 -z-10 "
      />

      {/* Revenue cards (sit behind the model) */}
      {revenueCards.map((card, index) => (
        <div
          key={card.title}
          className={`absolute left-[9.3%] z-0 rounded-[1.9cqw] bg-[#0b3be8] p-[2.5cqw] text-white ${
            index === 0 ? "top-[8%] w-[36%]" : "top-[30.6%] w-[23%]"
          }`}
        >
          <span className="block text-[2.5cqw] leading-tight">{card.title}</span>
          <span className="block text-[1.6cqw] leading-tight text-white/70">
            {card.period}
          </span>

          <p className="mb-0 mt-[1.2cqw] text-[3.8cqw] font-bold leading-tight">
            {card.amount}
          </p>

          {card.change ? (
            <span className="mt-[1.6cqw] inline-block rounded-full bg-[#CBFC01] px-[2cqw] py-[0.9cqw] text-[1.7cqw] font-semibold leading-none text-gray-900">
              {card.change}
            </span>
          ) : (
            <div className="mt-[1.8cqw] h-[1.2cqw] rounded-full bg-white">
              <div className="h-full w-[56%] rounded-full bg-[#CBFC01]" />
            </div>
          )}
        </div>
      ))}

      {/* Model */}
      <Image
        src="/assets/images/female-model.png"
        alt="Instructor ready to teach online"
        width={500}
        height={500}
        priority
        sizes="(max-width: 640px) 90vw, 644px"
        className="absolute bottom-[9%] left-[48%] z-10 h-[84%] w-auto max-w-none -translate-x-1/2 object-contain drop-shadow-[0_20px_30px_rgba(20,25,40,0.18)]"
      />

      {/* Lime spring */}
      <Image
        src="/assets/shapes/spring-3.png"
        alt=""
        aria-hidden="true"
        width={250}
        height={190}
        sizes="140px"
        className="absolute right-[16%] top-[24%] z-20 h-auto w-[26%] object-contain"
      />

      {/* Happy Students card */}
      <div className="absolute bottom-[18.3%] right-[6.8%] z-20 w-[40%] rounded-[2.5cqw] bg-white p-[2.6cqw] shadow-[0_12px_32px_rgba(20,30,70,0.12)]">
        <p className="mb-0 text-[2.6cqw] font-medium leading-tight text-gray-900">
          Happy Students
        </p>
        <p className="mb-0 mt-[0.6cqw] text-[1.9cqw] leading-tight text-gray-500">
          <span className="font-bold text-gray-900">4.5</span> (240){" "}
          <span className="text-[#b7e600]">★</span>
        </p>

        <div className="mt-[1.6cqw] flex items-center">
          {[1, 2, 3, 4, 5, 6, 7].map((student) => (
            <Image
              key={student}
              src={`/assets/students/student-${student}.png`}
              alt=""
              width={36}
              height={36}
              sizes="36px"
              className="-ml-[1.4cqw] h-[5.4cqw] w-[5.4cqw] rounded-full border-[0.3cqw] border-white object-cover first:ml-0"
            />
          ))}
          <span className="-ml-[1.4cqw] grid h-[6.2cqw] w-[6.2cqw] place-items-center rounded-full border-[0.3cqw] border-white bg-[#CBFC01] text-[2cqw] font-semibold text-gray-900">
            2K+
          </span>
        </div>
      </div>
    </div>
  );
}