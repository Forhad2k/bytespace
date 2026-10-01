import Image from "next/image";
import FeaturedCourseCard from "../components/FeaturedCourseCard";

const studentAvatars = [1, 2, 3, 4].map(
  (student) => `/assets/students/student-${student}.png`,
);

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

const exploreCategories = [
  { name: "Design", icon: "/assets/icons/Design.png" },
  { name: "Development", icon: "/assets/icons/Development.png" },
  { name: "Marketing", icon: "/assets/icons/Marketing.png" },
  { name: "Business", icon: "/assets/icons/Business.png" },
  { name: "IT & Software", icon: "/assets/icons/IT & Software.png" },
  { name: "Photography", icon: "/assets/icons/Photography.png" },
];

const courses = [
  {
    id: 1,
    image: "/assets/card-images/card-image-1.jpg",
    title: "Learn Figma from Basic",
    instructor: "purepearl studio",
    rating: 4.9,
    price: 49,
    level: "Beginner",
    lessons: 17,
    duration: "2 hours 16 mins",
    comments: 59,
    studentAvatars,
  },
  {
    id: 2,
    image: "/assets/card-images/card-image-2.jpg",
    title: "Build Digital Asset",
    instructor: "purepearl studio",
    rating: 4.8,
    price: 69,
    level: "Intermediate",
    lessons: 24,
    duration: "8 hours 30 mins",
    comments: 82,
    studentAvatars,
  },
  {
    id: 3,
    image: "/assets/card-images/card-image-3.jpg",
    title: "The Power of Big Data",
    instructor: "purepearl studio",
    rating: 4.7,
    price: 39,
    level: "Beginner",
    lessons: 18,
    duration: "5 hours 45 mins",
    comments: 41,
    studentAvatars,
  },
  {
    id: 4,
    image: "/assets/card-images/card-image-4.jpg",
    title: "Balancing Productivity and Creativity",
    instructor: "purepearl studio",
    rating: 4.6,
    price: 35,
    level: "Beginner",
    lessons: 15,
    duration: "4 hours 20 mins",
    comments: 36,
    studentAvatars,
  },
  {
    id: 5,
    image: "/assets/card-images/card-image-5.jpg",
    title: "Mastering Money Management",
    instructor: "purepearl studio",
    rating: 4.8,
    price: 59,
    level: "Advanced",
    lessons: 21,
    duration: "6 hours 10 mins",
    comments: 64,
    studentAvatars,
  },
  {
    id: 6,
    image: "/assets/card-images/card-image-6.jpg",
    title: "From Idea to Startup Success",
    instructor: "purepearl studio",
    rating: 4.9,
    price: 55,
    level: "Beginner",
    lessons: 32,
    duration: "12 hours 40 mins",
    comments: 108,
    studentAvatars,
  },
];

export default function CoursesSection() {
  return (
    <section id="courses" className="w-full py-16 lg:py-24" style={{ background: "#fff" }}>
      <div className="container mx-auto px-6 lg:px-16 xl:px-20">
        <div className="mb-10 text-center">
          <h2
            className="mb-3 font-bold text-gray-900"
            style={{
              fontFamily: "Poppins, sans-serif",
              fontSize: "clamp(1.9rem, 3.5vw, 2.6rem)",
            }}
          >
            Discover Your Passion,
            <br />
            Build Your Skills
          </h2>
          <p className="mx-auto max-w-md text-base leading-relaxed text-gray-500">
            Explore a wide range of expert-led courses designed to help you
            grow, learn, and achieve your goals.
          </p>
        </div>

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
                <span className="px-2 text-[18px] font-medium text-[#003be2]">
                  + More
                </span>
              )}
            </div>
          ))}
        </div>

        <div className="grid grid-cols-1 gap-6 sm:grid-cols-2 lg:grid-cols-3">
          {courses.map((course) => (
            <FeaturedCourseCard key={course.id} course={course} />
          ))}
        </div>

        <div id="categories" className="mt-16 pt-14">
          <div className="mb-10 text-center">
            <h2
              className="mb-3 font-bold text-gray-900"
              style={{
                fontFamily: "Poppins, sans-serif",
                fontSize: "clamp(1.9rem, 3.5vw, 2.6rem)",
              }}
            >
              Explore a Diverse Learning Path at ByteSpace
            </h2>
            <p className="mx-auto max-w-lg text-base leading-relaxed text-gray-500">
              Whether you&apos;re a beginner or advancing your skills, find the
              right category to fuel your passion and career.
            </p>
          </div>

          <div className="grid grid-cols-2 gap-4 sm:grid-cols-3 lg:grid-cols-6">
            {exploreCategories.map((category) => (
              <div key={category.name} className="explore-card">
                <div className="h-16 w-16">
                  <Image
                    src={category.icon}
                    alt={category.name}
                    width={64}
                    height={64}
                    className="h-full w-full rounded-2xl object-contain"
                  />
                </div>
                <p
                  className="mt-1 text-base text-gray-900"
                  style={{ fontFamily: "Satoshi, sans-serif" }}
                >
                  {category.name}
                </p>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}
