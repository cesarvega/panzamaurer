import Image from "next/image";
import Link from "next/link";

const footerNav = [
  { label: "About The Firm", href: "/about" },
  { label: "Professionals", href: "/attorneys" },
  { label: "Practice Areas", href: "/practice-areas" },
  { label: "Government Relations", href: "/practice-areas" },
  { label: "News", href: "/news" },
  { label: "Locations", href: "/locations" },
  { label: "Contact Us", href: "/contact" },
];

const locationLinks = [
  {
    name: "Tallahassee",
    address: [
      "201 East Park Avenue | Suite 200-A",
      "Tallahassee, FL 32301",
    ],
    phone: "(850) 681-0980",
  },
  {
    name: "Fort Lauderdale",
    address: [
      "Coastal Tower",
      "2400 East Commercial Blvd | Suite 905",
      "Fort Lauderdale, FL 33308",
    ],
    phone: "(954) 390-0100",
  },
  {
    name: "Coral Gables",
    address: [
      "The Alhambra Building",
      "2 Alhambra Plaza | Suite 102",
      "Coral Gables, FL 33134",
    ],
    phone: "(786) 534-6162",
  },
];

export default function Footer() {
  return (
    <footer className="w-full bg-white">
      <div className="mx-auto max-w-[1440px] px-8 py-20 lg:px-28 lg:py-32">
        <div className="flex flex-col gap-20">
          {/* Row 1: Logo + Nav */}
          <div className="flex flex-col items-start justify-between gap-10 lg:flex-row lg:items-center">
            <Link href="/" className="flex-shrink-0">
              <Image
                src="/images/footer-logo.svg"
                alt="Panza Maurer"
                width={333}
                height={64}
              />
            </Link>
            <div className="flex flex-wrap items-center gap-7 lg:flex-nowrap">
              {footerNav.map((item) => (
                <Link
                  key={item.label}
                  href={item.href}
                  className="whitespace-nowrap font-[family-name:var(--font-noto)] text-base font-semibold leading-[26px] text-gray-950 transition-colors hover:text-primary-red"
                >
                  {item.label}
                </Link>
              ))}
            </div>
          </div>

          {/* Row 2: Location columns */}
          <div className="grid grid-cols-1 gap-8 sm:grid-cols-2 lg:grid-cols-3">
            {locationLinks.map((loc) => (
              <div key={loc.name} className="flex flex-col gap-4">
                <h3 className="font-[family-name:var(--font-noto)] text-2xl font-medium leading-[34px] text-gray-950">
                  {loc.name}
                </h3>
                <div className="flex flex-col gap-1">
                  {loc.address.map((line, i) => (
                    <p
                      key={i}
                      className="font-[family-name:var(--font-noto)] text-base font-normal leading-[26px] text-gray-950"
                    >
                      {line}
                    </p>
                  ))}
                  <p className="mt-1 font-[family-name:var(--font-noto)] text-base font-normal leading-[26px] text-gray-950">
                    {loc.phone}
                  </p>
                </div>
              </div>
            ))}
          </div>

          {/* Row 3: Copyright */}
          <p className="font-[family-name:var(--font-noto)] text-base font-normal leading-6 text-gray-950">
            Copyright &copy; Panza, Maurer &amp; Maynard 2025 All Rights
            Reserved.
          </p>
        </div>
      </div>
    </footer>
  );
}
