import Image from "next/image";
import Link from "next/link";

const footerColumns = [
  ["Featured Courses", "Featured Categories", "Business", "IT", "Design"],
  ["Development", "Marketing", "Photography", "Finance", "Sport"],
  ["Become a Creator", "Affiliate Program", "Contact", "Help", "About"],
];

const footerPolicies = ["Privacy Policy", "Terms of Service", "Cookies Settings"];

export default function Footer() {
  return (
    <footer className="w-full bg-white text-[#252525]">
      <div className="container mx-auto grid gap-12 px-6 pb-16 pt-12 sm:px-10 md:grid-cols-[1fr_1fr] md:gap-16 lg:px-16 xl:px-20">
        <div className="max-w-[520px]">
          <Link href="/" className="mb-3 inline-flex items-center">
            <Image
              src="/assets/logos/footer-logo.png"
              alt="ByteSpace"
              width={140}
              height={36}
              className="h-10 w-auto"
            />
          </Link>
          <p className="mb-6 text-base leading-relaxed text-gray-600">
            Stay Up to date with our latest features and releases by joining our newsletter.
          </p>

          <form className="mb-4 flex max-w-[480px] items-center gap-3" action="#">
            <label className="sr-only" htmlFor="footer-email">
              Your email
            </label>
            <input
              id="footer-email"
              name="email"
              type="email"
              placeholder="Enter your email"
              className="h-11 min-w-0 flex-1 rounded-full border border-gray-300 bg-white px-4 text-xs text-gray-800 outline-none placeholder:text-gray-500 focus:border-blue-600"
            />
            <button
              type="submit"
              className="h-11 rounded-full bg-[#CBFC01] px-6 text-xs font-medium text-gray-900 transition hover:brightness-95"
            >
              Search
            </button>
          </form>
          <p className="max-w-[440px] text-base leading-relaxed text-gray-500">
            By subscribing, you agree to our Privacy Policy and consent to receive updates from our company.
          </p>
        </div>

        <nav aria-label="Footer" className="grid grid-cols-2 gap-x-6 gap-y-8 sm:grid-cols-3 sm:gap-x-8">
          {footerColumns.map((column, index) => (
            <ul key={index} className="flex flex-col gap-3">
              {column.map((label) => (
                <li key={label}>
                  <Link
                    href={label === "Featured Courses" ? "#courses" : label === "Featured Categories" ? "#categories" : "#"}
                    className="text-[14px] text-gray-700 transition-colors hover:text-blue-600"
                  >
                    {label}
                  </Link>
                </li>
              ))}
            </ul>
          ))}
        </nav>
      </div>

      <div className="container mx-auto border-t border-gray-200 px-6 py-5 sm:px-10 lg:px-16 xl:px-20">
        <div className="flex flex-col gap-4 text-[10px] text-gray-600 sm:flex-row sm:items-center sm:justify-between">
          <p className="m-0 text-base">© 2023 ByteSpace. All rights reserved.</p>
          <nav aria-label="Legal links" className="flex flex-wrap items-center gap-x-6 gap-y-2">
            {footerPolicies.map((policy) => (
              <Link
                key={policy}
                href="#"
                className="transition-colors hover:text-blue-600"
              >
                {policy}
              </Link>
            ))}
          </nav>
        </div>
      </div>
    </footer>
  );
}
