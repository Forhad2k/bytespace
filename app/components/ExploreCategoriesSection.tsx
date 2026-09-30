import Image from "next/image";

const exploreCategories = [
  {
    name: "Design",
    icon: "/assets/icons/Design.png",
    count: "1.2k Courses",
  },
  {
    name: "Development",
    icon: "/assets/icons/Development.png",
    count: "2.4k Courses",
  },
  {
    name: "Marketing",
    icon: "/assets/icons/Marketing.png",
    count: "890 Courses",
  },
  {
    name: "Business",
    icon: "/assets/icons/Business.png",
    count: "1.5k Courses",
  },
  {
    name: "IT & Software",
    icon: "/assets/icons/IT & Software.png",
    count: "980 Courses",
  },
  {
    name: "Photography",
    icon: "/assets/icons/Photography.png",
    count: "640 Courses",
  },
];

export default function ExploreCategoriesSection() {
  return (
    <section
      id="categories"
      className="w-full py-16 lg:py-24"
      style={{ background: "#F5F5F6" }}
    >
      <div className="container mx-auto px-6 lg:px-16 xl:px-20">
        {/* Section Header */}
        <div className="text-center mb-12">
          <div className="section-label mb-4 inline-flex">
            <span
              className="w-1.5 h-1.5 rounded-full"
              style={{ background: "#003BE2" }}
            />
            Categories
          </div>
          <h2
            className="font-bold text-gray-900 mb-3"
            style={{
              fontFamily: "Poppins, sans-serif",
              fontSize: "clamp(1.6rem, 3vw, 2.25rem)",
            }}
          >
            Explore a Diverse Learning Path at Bytespace
          </h2>
          <p className="text-gray-500 max-w-lg mx-auto text-sm leading-relaxed">
            Whether you&apos;re a beginner or advancing your skills, find the
            right category to fuel your passion and career.
          </p>
        </div>

        {/* Categories Grid */}
        <div className="grid grid-cols-2 sm:grid-cols-3 lg:grid-cols-6 gap-4">
          {exploreCategories.map((cat) => (
            <button
              key={cat.name}
              className="explore-card group focus:outline-none focus-visible:ring-2 focus-visible:ring-blue-500"
            >
              {/* Icon */}
              <div className="w-16 h-16 transition-transform duration-300 group-hover:scale-110">
                <Image
                  src={cat.icon}
                  alt={cat.name}
                  width={64}
                  height={64}
                  className="w-full h-full object-contain rounded-2xl"
                />
              </div>
              <p
                className="font-semibold text-gray-900 text-sm mt-1"
                style={{ fontFamily: "Poppins, sans-serif" }}
              >
                {cat.name}
              </p>
              <p className="text-xs text-gray-400">{cat.count}</p>
            </button>
          ))}
        </div>
      </div>
    </section>
  );
}
