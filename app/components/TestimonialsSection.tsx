import Image from "next/image";

const testimonials = [
  {
    name: "Sarah M.",
    role: "Enthusiastic Learner",
    avatar: "/assets/community/Sarah M..png",
    quote:
      "ByteSpace has transformed my approach to learning. The diverse range of courses and the quality of content provided by creators have exceeded my expectations. The platform truly fosters a sense of community and lifelong learning.",
  },
  {
    name: "James L.",
    role: "Lifelong Learner",
    avatar: "/assets/community/James L..png",
    quote:
      "I've tried several online learning platforms, and ByteSpace stands out for its vibrant community and the variety of courses available. The easy navigation and engaging content make it a go-to platform for continuous skill development.",
  },
  {
    name: "Alex B.",
    role: "Inspired Creator",
    avatar: "/assets/community/Alex B..png",
    quote:
      "As a creator, ByteSpace has been a game-changer for me. The Course Editor is user-friendly, and the support from the community is incredible. It's fulfilling to see my courses making a positive impact on learners globally.",
  },
];

export default function TestimonialsSection() {
  return (
    <section
      className="relative isolate h-[80vh] w-full overflow-hidden py-14 sm:py-16 lg:py-20"
      style={{
  background:
    "radial-gradient(ellipse at 50% 18%, rgba(202, 252, 1, 0.43), transparent 32%), radial-gradient(ellipse at 2% 92%, rgba(172, 190, 255, 0.48), transparent 30%), radial-gradient(circle 1200px at 98% 50%, rgba(202, 252, 1, 0.4), transparent 30%), #fafafa",
}}
    >
      <div className="container mx-auto px-6 lg:px-16 xl:px-20">
        <div className="mb-10 grid items-center gap-6 md:mb-12 md:grid-cols-[1fr_1fr] md:gap-12">
          <h2
            className="m-0 text-[clamp(1.7rem,3.2vw,2.35rem)] font-bold leading-[1.15] text-gray-950"
            style={{ fontFamily: "Poppins, sans-serif" }}
          >
            Discover What Our
            <br />
            Community Is Saying
          </h2>
          <p className="m-0 max-w-xl text-[18px] leading-[1.65] text-gray-600">
            At ByteSpace, our vibrant community of learners and creators is at the heart of what we do. Hear directly from those who have experienced the transformative journey of learning and creating on our platform. Explore testimonials that reflect the diverse perspectives of enthusiastic learners and accomplished creators.
          </p>
        </div>

        <div className="grid grid-cols-1 gap-5 sm:grid-cols-2 lg:grid-cols-3 lg:gap-6">
          {testimonials.map((t) => (
            <article
              key={t.name}
              className="flex min-h-[245px] flex-col rounded-2xl bg-white p-5 sm:p-6"
            >
              <div className="relative mb-3 h-18 w-18 flex-none overflow-hidden rounded-full">
                  <Image
                    src={t.avatar}
                    alt={t.name}
                    fill
                    sizes="48px"
                    className="object-cover"
                  />
              </div>
              <p className="mb-2 text-base font-bold leading-5 text-gray-950">
                {t.name}
              </p>
              <p className="mb-4 mt-0 text-base leading-5 text-blue-600">
                {t.role}
              </p>
              <p className="m-0 text-base leading-[1.75] text-gray-600">
                &ldquo;{t.quote}&rdquo;
              </p>
            </article>
          ))}
        </div>
      </div>
    </section>
  );
}
