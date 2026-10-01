import Image from "next/image";

type FeaturedCourse = {
  image: string;
  title: string;
  instructor: string;
  rating: number;
  price: number;
  level: string;
  lessons: number;
  duration: string;
  comments: number;
  studentAvatars: string[];
};

type FeaturedCourseCardProps = {
  course: FeaturedCourse;
  className?: string;
  compact?: boolean;
};

export default function FeaturedCourseCard({
  course,
  className = "",
  compact = false,
}: FeaturedCourseCardProps) {
  return (
    <article
      className={`rounded-[24px] border border-gray-300 bg-white p-3 shadow-[0_8px_30px_rgba(15,23,42,0.06)] sm:rounded-[28px] sm:p-4 ${className}`}
    >
      <div className="relative aspect-[1.72] overflow-hidden rounded-[16px] sm:rounded-[20px]">
        <Image
          src={course.image}
          alt={course.title}
          fill
          sizes="(max-width: 640px) 100vw, (max-width: 1024px) 50vw, 33vw"
          className="object-cover"
        />
        <div className="absolute inset-x-2 bottom-2 flex items-center justify-center gap-1.5 sm:inset-x-4 sm:bottom-4 sm:gap-2">
          <span className="rounded-full bg-white/75 px-2 py-1 text-[9px] font-medium text-gray-600 backdrop-blur-sm sm:px-3 sm:text-xs">
            {course.lessons} Lessons
          </span>
          <span className="rounded-full bg-white/75 px-2 py-1 text-[9px] font-medium text-gray-600 backdrop-blur-sm sm:px-3 sm:text-xs">
            {compact ? <><span className="sm:hidden">2h 16m</span><span className="hidden sm:inline">{course.duration}</span></> : course.duration}
          </span>
          <span className={`rounded-full bg-white/75 px-2 py-1 text-[9px] font-medium text-gray-600 backdrop-blur-sm sm:px-3 sm:text-xs ${compact ? "hidden lg:inline-flex" : ""}`}>
            {course.comments} Comments
          </span>
        </div>
      </div>

      <div className="px-1 pb-1 pt-3 sm:px-1 sm:pt-5">
        <div className="flex items-center justify-between gap-2">
          <h3 className="min-w-0 truncate text-base font-semibold tracking-tight text-gray-950 sm:text-xl">
            {course.title}
          </h3>
          <div className="flex flex-none items-center gap-1 text-sm text-gray-600 sm:text-lg">
            <span>{course.rating.toFixed(1)}</span>
            <svg
              aria-hidden="true"
              viewBox="0 0 24 24"
              className="h-4 w-4 fill-gray-300 sm:h-5 sm:w-5"
            >
              <path d="m12 2 3.09 6.26L22 9.27l-5 4.87L18.18 21 12 17.77 5.82 21 7 14.14 2 9.27l6.91-1.01L12 2Z" />
            </svg>
          </div>
        </div>

        <p className="mt-0.5 text-xs text-gray-500">
          by <span className="text-blue-600">{course.instructor}</span>
        </p>

        <div className="mt-3 flex flex-wrap items-center justify-between gap-2 sm:mt-5">
          <div className="flex min-w-0 items-center gap-2">
            <span className="inline-flex h-7 flex-none items-center gap-1.5 rounded-full bg-gray-100 px-2.5 text-[10px] text-gray-600 sm:h-9 sm:gap-2 sm:px-4 sm:text-sm">
              <svg
                aria-hidden="true"
                viewBox="0 0 16 16"
                className="h-3.5 w-3.5 fill-gray-500 sm:h-4 sm:w-4"
              >
                <path d="M1 9h3v6H1zm5-4h3v10H6zm5-4h3v14h-3z" />
              </svg>
              {course.level}
            </span>
            <div className="flex items-center pl-1">
              {course.studentAvatars.slice(0, compact ? 3 : 4).map((student, index) => (
                <Image
                  key={`${student}-${index}`}
                  src={student}
                  alt=""
                  width={36}
                  height={36}
                  sizes="(max-width: 640px) 28px, 36px"
                  className="-ml-2 h-7 w-7 rounded-full border-2 border-white object-cover first:ml-0 sm:h-9 sm:w-9"
                />
              ))}
              <span className="-ml-2 grid h-7 min-w-7 place-items-center rounded-full border-2 border-white bg-[#CBFC01] px-1 text-[9px] font-semibold text-gray-900 sm:h-9 sm:min-w-9 sm:text-xs">
                26+
              </span>
            </div>
          </div>
          <p className="whitespace-nowrap text-xs text-gray-500">
            <span className="text-lg font-semibold text-blue-600 sm:text-2xl">
              ${course.price}
            </span>
            <span>/lifetime</span>
          </p>
        </div>
      </div>
    </article>
  );
}
