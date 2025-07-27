import Container from "@/components/shared/Ui/Container";
import { Button } from "@/components/ui/button";
import { Check } from "lucide-react";
import Image from "next/image";
import Link from "next/link";

const companyInfo = [
  {
    icon: "🧭",
    title: "Our Mission",
    description:
      "To provide top-quality mobile spare parts at unbeatable prices and empower local technicians with trusted components.",
  },
  {
    icon: "🌟",
    title: "Our Vision",
    description:
      "To become the most reliable one-stop-shop for all mobile repairing needs in Bangladesh and beyond.",
  },
  {
    icon: "💡",
    title: "Our Values",
    description:
      "Integrity. Affordability. Speed. Customer-first support. These are the principles that drive every part of our service.",
  },
];

export default function About() {
  return (
    <Container>
      <div className="max-w-[1080px] mx-auto">
        {/* Section 1: Company Introduction */}
        <section className="my-14 md:my-24">
          <div className="grid md:grid-cols-2 gap-12 items-center">
            <div>
              <Image
                src="/images/about/parts.jpg"
                alt="Mobile parts"
                className="rounded-xl shadow-xl w-full"
                width={500}
                height={300}
              />
            </div>
            <div>
              <h2 className="text-xl md:text-3xl font-semibold mb-4">
                About Mohammad Telecom
              </h2>
              <p className="leading-7 text-gray-700 mb-6">
                Mohammad Telecom is a trusted name in the mobile parts and
                accessories industry, known for delivering premium spare parts
                for top smartphone brands like Apple, Samsung, Xiaomi, Vivo,
                Oppo, and more.
              </p>
              <ul className="space-y-2 text-gray-700 ">
                <li className="flex items-center gap-2">
                  <Check className="w- h-5" /> Over 5 years of industry
                  experience
                </li>
                <li className="flex items-center gap-2">
                  <Check className="w-5 h-5" /> 1,000+ products in stock
                </li>
                <li className="flex items-center gap-2">
                  <Check className="w-5 h-5" /> Trusted by 10,000+ customers
                  across Bangladesh
                </li>
              </ul>
              <Link href={`/products`} className="mt-6 inline-block">
                <Button>Explore Our Products</Button>
              </Link>
            </div>
          </div>
        </section>

        {/* Section 2: Vision and Values */}
        <section className="my-14 md:my-24">
          <h2 className="text-2xl md:text-3xl font-semibold mb-12 text-center">
            Our Mission, Vision & What We Stand For
          </h2>
          <div className="grid md:grid-cols-3 gap-4 lg:gap-8">
            {companyInfo.map((item, index) => (
              <div
                key={index}
                className="p-6 md:p-4 lg:p-6 rounded-lg shadow-cardLightShadow hover:scale-105 transition-transform duration-300"
              >
                <h3 className="text-xl font-semibold mb-3">
                  {item.icon} {item.title}
                </h3>
                <p>{item.description}</p>
              </div>
            ))}
          </div>
        </section>
      </div>
    </Container>
  );
}
