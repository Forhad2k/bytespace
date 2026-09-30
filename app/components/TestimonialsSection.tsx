import Image from "next/image";

const testimonials = [
  {
    name: "Alex B.",
    role: "UX Designer",
    avatar: "/assets/community/Alex B..png",
    rating: 5,
    quote:
      "ByteSpace completely transformed my career. The UI/UX design course was so hands-on and practical. I landed my dream job within 3 months of completing it!",
  },
  {
    name: "James L.",
    role: "Full-Stack Developer",
    avatar: "/assets/community/James L..png",
    rating: 5,
    quote:
      "The web development bootcamp here is unmatched. The instructors are experts and the community support is incredible. I went from zero to getting hired in 6 months.",
  },
  {
    name: "Sarah M.",
    role: "Digital Marketer",
    avatar: "/assets/community/Sarah M..png",
    rating: 5,
    quote:
      "I've tried many online platforms, but ByteSpace stands out. The content is always up-to-date and the learning experience feels truly personalized to my goals.",
  },
];

function StarRow({ count }: { count: number }) {
  return (
    <div className="flex gap-1">
      {Array.from({ length: count }).map((_, i) => (
        <svg key={i} width="16" height="16" viewBox="0 0 24 24" fill="#f59e0b">
          <polygon points="12,2 15.09,8.26 22,9.27 17,14.14 18.18,21.02 12,17.77 5.82,21.02 7,14.14 2,9.27 8.91,8.26" />
        </svg>
      ))}
    </div>
  );
}

export default function TestimonialsSection() {
  return (
    <section
      className="w-full py-16 lg:py-24"
      style={{ background: "#F5F5F6" }}
    >
      <div className="container mx-auto px-6 lg:px-16 xl:px-20">
        {/* Header */}
        <div className="text-center mb-12">
          <div className="section-label mb-4 inline-flex">
            <span
              className="w-1.5 h-1.5 rounded-full"
              style={{ background: "#003BE2" }}
            />
            Testimonials
          </div>
          <h2
            className="font-bold text-gray-900 mb-3"
            style={{
              fontFamily: "Poppins, sans-serif",
              fontSize: "clamp(1.6rem, 3vw, 2.25rem)",
            }}
          >
            Discover What Our
            <br />
            Community Is Saying
          </h2>
          <p className="text-gray-500 max-w-md mx-auto text-sm">
            Real stories from real learners. See how ByteSpace is changing
            lives and careers around the world.
          </p>
        </div>

        {/* Testimonial Grid */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
          {testimonials.map((t) => (
            <div key={t.name} className="testimonial-card flex flex-col gap-4">
              {/* Stars */}
              <StarRow count={t.rating} />

              {/* Quote */}
              <p className="text-gray-700 text-sm leading-relaxed flex-1">
                &ldquo;{t.quote}&rdquo;
              </p>

              {/* Author */}
              <div className="flex items-center gap-3 pt-4 border-t border-gray-100">
                <div className="w-12 h-12 rounded-full overflow-hidden relative flex-shrink-0 ring-2 ring-gray-100">
                  <Image
                    src={t.avatar}
                    alt={t.name}
                    fill
                    className="object-cover"
                  />
                </div>
                <div>
                  <p
                    className="font-semibold text-gray-900 text-sm"
                    style={{ fontFamily: "Poppins, sans-serif" }}
                  >
                    {t.name}
                  </p>
                  <p className="text-xs text-gray-400">{t.role}</p>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
