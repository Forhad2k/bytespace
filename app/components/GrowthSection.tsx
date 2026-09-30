import Image from "next/image";
import GrowthVisual from "./GrowthVisual";
import InstructorVisual from "./InstructorVisual";

const stats = [
  { value: "12K", label: "Students" },
  { value: "70+", label: "Courses" },
  { value: "16", label: "Creators" },
];

const instructorBenefits = [
  "Share Your Expertise",
  "Monetize Your Passion",
  "Flexibility and Autonomy",
  "Build a Community",
];

export default function GrowthSection() {
  return (
    <section
      id="growth"
      className="relative isolate w-full overflow-hidden py-12 sm:py-16 lg:py-20"
      style={{
        background:
          "radial-gradient(ellipse at 18% 8%, rgba(203,252,1,0.28), transparent 30%), radial-gradient(ellipse at 92% 2%, rgba(210,218,247,0.42), transparent 34%), radial-gradient(ellipse at 88% 94%, rgba(172,190,255,0.45), transparent 34%), radial-gradient(ellipse at 4% 88%, rgba(203,252,1,0.22), transparent 28%), #fafafa",
      }}
    >
      <div className="container relative mx-auto flex flex-col gap-8 px-6 sm:gap-10 lg:gap-5 lg:px-12">
        <div className="grid items-center gap-2 lg:min-h-[350px] lg:grid-cols-2 lg:gap-10">
          <div className="order-2 max-w-xl lg:order-1">
            <h2 className="mb-4 text-[clamp(1.85rem,3.4vw,2.55rem)] font-semibold leading-[1.18] text-gray-900">
              Your Path to Professional
              <br className="hidden sm:block" /> Growth Starts Here!
            </h2>
            <p className="mb-6 max-w-md text-base leading-[1.7] text-gray-500">
              Explore our curated selection of courses tailored to enhance your
              capabilities and accelerate your career journey. Whether you are
              looking to sharpen specific skills, gain industry expertise, or
              embark on a new career path entirely, we have the resources you
              need.
            </p>
            <div className="flex flex-wrap gap-7 sm:gap-9">
              {stats.map((stat) => (
                <div key={stat.label}>
                  <p className="text-4xl font-semibold leading-none text-[#063eea]">
                    {stat.value}
                  </p>
                  <p className="mt-1 text-base text-gray-500">
                    {stat.label}
                  </p>
                </div>
              ))}
            </div>
          </div>
          <div className="order-1 lg:order-2">
            <GrowthVisual />
          </div>
        </div>

        <div
          id="instructors"
          className="grid scroll-mt-20 items-center gap-2 lg:min-h-[350px] lg:grid-cols-2 lg:gap-10"
        >
          <div className="order-1">
            <InstructorVisual />
          </div>
          <div className="order-2 max-w-lg lg:pl-1">
            <h2 className="mb-5 text-[clamp(1.85rem,3.4vw,2.55rem)] font-semibold leading-[1.18] text-gray-900">
              Create &amp; Manage
              <br /> Courses Easily.
            </h2>
            <p className="mb-5 max-w-md text-base leading-[1.7] text-gray-600">
              <span className="font-semibold text-gray-800">ByteSpace</span>{" "}
              supports individuals or entities in the creation, publication,
              and administration of educational courses.
            </p>
            <ul className="flex flex-col gap-2.5">
              {instructorBenefits.map((benefit) => (
                <li
                  key={benefit}
                  className="flex items-center gap-2.5 text-base font-semibold text-gray-800 sm:text-sm"
                >
                    <Image  src="/assets/icons/tick.png" alt="✓" width={20} height={20} className="h-6 w-6 object-contain" />
                  {benefit}
                </li>
              ))}
            </ul>
          </div>
        </div>
      </div>
    </section>
  );
}
