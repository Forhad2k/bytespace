"use client";

import Image from "next/image";

const courseCategoryRows = [
  [
    "Featured",
    "Music",
    "Drawing & Painting",
    "Marketing",
    "Animation",
    "Social Media",
    "UI/UX Design",
    "Creative Marketing",
  ],
  [
    "Digital Illustration",
    "Film & Video",
    "Crafts",
    "Freelance & Entrepreneurship",
    "Graphic Design",
    "Photography",
  ],
  ["Productivity", "Web Development", "Data Science", "Cooking"],
];

const courses = [
  {
    id: 1,
    image: "/assets/card-images/card-image-1.jpg",
    category: "Design",
    title: "UI/UX Design Fundamentals",
    instructor: "John Carter",
    instructorAvatar: "/assets/students/student-1.png",
    rating: 4.9,
    reviews: 1240,
    price: 49,
    students: "12k",
    level: "Beginner",
  },
  {
    id: 2,
    image: "/assets/card-images/card-image-2.jpg",
    category: "Development",
    title: "Complete Web Development Bootcamp",
    instructor: "Sarah Lee",
    instructorAvatar: "/assets/students/student-2.png",
    rating: 4.8,
    reviews: 2890,
    price: 69,
    students: "24k",
    level: "Intermediate",
  },
  {
    id: 3,
    image: "/assets/card-images/card-image-3.jpg",
    category: "Marketing",
    title: "Digital Marketing Masterclass",
    instructor: "Mike Johnson",
    instructorAvatar: "/assets/students/student-3.png",
    rating: 4.7,
    reviews: 980,
    price: 39,
    students: "8.4k",
    level: "Beginner",
  },
  {
    id: 4,
    image: "/assets/card-images/card-image-4.jpg",
    category: "Design",
    title: "Graphic Design for Beginners",
    instructor: "Emma Wilson",
    instructorAvatar: "/assets/students/student-4.png",
    rating: 4.6,
    reviews: 760,
    price: 35,
    students: "6.2k",
    level: "Beginner",
  },
  {
    id: 5,
    image: "/assets/card-images/card-image-5.jpg",
    category: "Business",
    title: "Entrepreneurship & Startup Strategy",
    instructor: "David Chen",
    instructorAvatar: "/assets/students/student-5.png",
    rating: 4.8,
    reviews: 1100,
    price: 59,
    students: "10k",
    level: "Advanced",
  },
  {
    id: 6,
    image: "/assets/card-images/card-image-6.jpg",
    category: "Development",
    title: "Python Programming: Zero to Hero",
    instructor: "Alex Rivera",
    instructorAvatar: "/assets/students/student-6.png",
    rating: 4.9,
    reviews: 3200,
    price: 55,
    students: "31k",
    level: "Beginner",
  },
];

type Course = (typeof courses)[0];

function CourseCard({ course }: { course: Course }) {
  return (
    <div className="course-card flex flex-col">
      {/* Card Image */}
      <div className="p-3 pb-0">
        <div
          className="relative overflow-hidden"
          style={{ borderRadius: "12px", aspectRatio: "16/9" }}
        >
          <Image
            src={course.image}
            alt={course.title}
            fill
            className="object-cover transition-transform duration-500 hover:scale-105"
            sizes="(max-width: 640px) 100vw, (max-width: 1024px) 50vw, 33vw"
          />
          {/* Level Badge */}
          <span
            className="absolute top-2.5 left-2.5 text-xs font-semibold px-2.5 py-1 rounded-full"
            style={{ background: "#003BE2", color: "#fff" }}
          >
            {course.level}
          </span>
        </div>
      </div>

      {/* Card Content */}
      <div className="flex flex-col flex-1 p-4 gap-2">
        {/* Category */}
        <span
          className="text-xs font-semibold uppercase tracking-wider"
          style={{ color: "#003BE2" }}
        >
          {course.category}
        </span>

        {/* Title */}
        <h3
          className="font-semibold text-gray-900 leading-snug line-clamp-2 text-sm"
          style={{ fontFamily: "Poppins, sans-serif" }}
        >
          {course.title}
        </h3>

        {/* Star Rating */}
        <div className="flex items-center gap-1.5">
          <div className="flex gap-0.5">
            {Array.from({ length: 5 }).map((_, i) => (
              <svg
                key={i}
                width="12"
                height="12"
                viewBox="0 0 24 24"
                fill={i < Math.round(course.rating) ? "#f59e0b" : "#e2e8f0"}
              >
                <polygon points="12,2 15.09,8.26 22,9.27 17,14.14 18.18,21.02 12,17.77 5.82,21.02 7,14.14 2,9.27 8.91,8.26" />
              </svg>
            ))}
          </div>
          <span className="text-xs font-semibold text-gray-700">
            {course.rating}
          </span>
          <span className="text-xs text-gray-400">
            ({course.reviews.toLocaleString("en-US")})
          </span>
        </div>

        {/* Divider */}
        <div className="border-t border-gray-100 my-1" />

        {/* Instructor + Price */}
        <div className="flex items-center justify-between">
          <div className="flex items-center gap-2">
            <div className="w-7 h-7 rounded-full overflow-hidden relative flex-shrink-0 border-2 border-gray-100">
              <Image
                src={course.instructorAvatar}
                alt={course.instructor}
                fill
                className="object-cover"
              />
            </div>
            <span className="text-xs text-gray-600 truncate max-w-[100px]">
              {course.instructor}
            </span>
          </div>
          <span className="font-bold text-sm" style={{ color: "#003BE2" }}>
            ${course.price}
          </span>
        </div>

        {/* Students enrolled */}
        <div className="flex items-center gap-1.5">
          <Image
            src="/assets/icons/signal.png"
            alt=""
            width={12}
            height={12}
            className="opacity-50"
          />
          <span className="text-xs text-gray-400">
            {course.students} students enrolled
          </span>
        </div>
      </div>
    </div>
  );
}

export default function CoursesSection() {
  return (
    <section id="courses" className="w-full py-16 lg:py-24" style={{ background: "#fff" }}>
      <div className="container mx-auto px-6 lg:px-16 xl:px-20">
        {/* Section Header */}
        <div className="text-center mb-10">
          <div className="section-label mb-4 inline-flex">
            <span
              className="w-1.5 h-1.5 rounded-full"
              style={{ background: "#003BE2" }}
            />
            Courses
          </div>
          <h2
            className="font-bold text-gray-900 mb-3"
            style={{
              fontFamily: "Poppins, sans-serif",
              fontSize: "clamp(1.6rem, 3vw, 2.25rem)",
            }}
          >
            Discover Your Passion,
            <br />
            Build Your Skills
          </h2>
          <p className="text-gray-500 max-w-md mx-auto text-sm leading-relaxed">
            Explore a wide range of expert-led courses designed to help you
            grow, learn, and achieve your goals.
          </p>
        </div>

        {/* Static Course Categories */}
        <div
          aria-label="Course categories"
          className="mb-10 flex flex-col items-center gap-5"
        >
          {courseCategoryRows.map((categories, rowIndex) => (
            <div
              key={`category-row-${rowIndex + 1}`}
              className="flex flex-wrap items-center justify-center gap-2 xl:flex-nowrap"
            >
              {categories.map((category) => (
                <span
                  key={category}
                  className={`category-tab ${category === "Featured" ? "active" : ""}`}
                >
                  {category}
                </span>
              ))}
              {rowIndex === 2 && (
                <span className="px-2 text-sm font-medium text-[#003be2]">
                  + More
                </span>
              )}
            </div>
          ))}
        </div>

        {/* Courses Grid */}
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">
          {courses.map((course) => (
            <CourseCard key={course.id} course={course} />
          ))}
        </div>

        {/* View All CTA */}
        <div className="flex justify-center mt-12">
          <button className="btn-primary">
            View All Courses
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
    </section>
  );
}
