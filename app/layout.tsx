import type { Metadata } from "next";
import { Poppins } from "next/font/google";
import "./globals.css";

const poppins = Poppins({
  variable: "--font-poppins",
  subsets: ["latin"],
  weight: ["400", "500", "600", "700", "800", "900"],
  display: "swap",
});

export const metadata: Metadata = {
  title: "ByteSpace — Online Learning Platform | Hundreds of Expert Courses",
  description:
    "Get access to hundreds of expert-led courses on ByteSpace. Build real-world skills in design, development, marketing, business and more. Learn at your own pace.",
  keywords: [
    "online courses",
    "e-learning",
    "ByteSpace",
    "skill development",
    "UI/UX",
    "web development",
  ],
  openGraph: {
    title: "ByteSpace — Online Learning Platform",
    description:
      "Get access to hundreds of expert-led courses and build real-world skills.",
    type: "website",
  },
};

export default function RootLayout({ children }: LayoutProps<"/">) {
  return (
    <html lang="en" className={poppins.variable}>
      <body className="min-h-screen flex flex-col antialiased">{children}</body>
    </html>
  );
}
