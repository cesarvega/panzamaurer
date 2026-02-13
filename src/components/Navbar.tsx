"use client";

import Image from "next/image";
import Link from "next/link";
import { useState } from "react";

const practiceAreaItems = [
  { label: "Administrative | Regulatory Law", slug: "administrative--regulatory-law" },
  { label: "Healthcare", slug: "healthcare" },
  { label: "Compliance", slug: "compliance" },
  { label: "Corporate | Transactional", slug: "corporate--transactional" },
  { label: "Litigation", slug: "litigation" },
  { label: "Land Use | Environmental", slug: "land-use--environmental" },
  { label: "Trusts & Estates", slug: "trusts--estates" },
  { label: "Technology | IT", slug: "technology--it" },
  { label: "Intellectual Property", slug: "intellectual-property" },
  { label: "Academic Law", slug: "academic-law" },
  { label: "Gaming & Hospitality", slug: "gaming--hospitality" },
  { label: "Strategic Planning", slug: "strategic-planning" },
  { label: "Labor | Employment", slug: "labor--employment" },
  { label: "Procurement", slug: "procurement" },
  { label: "Real Property", slug: "real-property" },
  { label: "Receivership | Conservatorship", slug: "receivership--conservatorship" },
  { label: "Medical Marijuana", slug: "medical-marijuana" },
  { label: "All Practice Areas", slug: "" },
];

const navItems = [
  { label: "About The Firm", href: "/about", hasDropdown: false },
  { label: "Professionals", href: "/attorneys", hasDropdown: false },
  { label: "Practice Areas", href: "/practice-areas", hasDropdown: true },
  { label: "Government Relations", href: "/practice-areas", hasDropdown: false },
  { label: "News", href: "/news", hasDropdown: false },
  { label: "Locations", href: "/locations", hasDropdown: false },
  { label: "Contact Us", href: "/contact", hasDropdown: false },
];

export default function Navbar() {
  const [mobileOpen, setMobileOpen] = useState(false);
  const [practiceAreasOpen, setPracticeAreasOpen] = useState(false);

  return (
    <nav className="fixed top-0 left-0 right-0 z-50">
      <div
        className="w-full backdrop-blur-[18px]"
        style={{
          background:
            "linear-gradient(90deg, rgba(255,255,255,0.9) 0%, rgba(255,255,255,0.9) 100%), linear-gradient(180deg, rgba(17,24,39,0.1) 0%, rgba(17,24,39,0.05) 57.7%, rgba(17,24,39,0) 100%)",
        }}
      >
        <div className="mx-auto flex max-w-[1280px] items-center justify-between px-4 py-7">
          <Link href="/">
            <Image
              src="/images/logo.svg"
              alt="Panza Maurer"
              width={313}
              height={60}
              priority
            />
          </Link>

          {/* Desktop Nav */}
          <div className="hidden items-center gap-5 lg:flex">
            {navItems.map((item) => (
              <Link
                key={item.label}
                href={item.href}
                className="flex items-center gap-1 font-[family-name:var(--font-inter)] text-[16px] font-semibold leading-[1.5] text-slate-700 transition-colors hover:text-slate-900"
              >
                {item.label}
                {item.hasDropdown && (
                  <svg
                    className="h-4 w-4 text-slate-500"
                    fill="none"
                    viewBox="0 0 24 24"
                    stroke="currentColor"
                    strokeWidth={2}
                  >
                    <path
                      strokeLinecap="round"
                      strokeLinejoin="round"
                      d="M19 9l-7 7-7-7"
                    />
                  </svg>
                )}
              </Link>
            ))}
          </div>

          {/* Mobile hamburger */}
          <button
            className="lg:hidden"
            onClick={() => setMobileOpen(!mobileOpen)}
            aria-label="Toggle menu"
          >
            <svg
              className="h-8 w-8 text-gray-900"
              fill="none"
              viewBox="0 0 24 24"
              stroke="currentColor"
            >
              {mobileOpen ? (
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  strokeWidth={2}
                  d="M6 18L18 6M6 6l12 12"
                />
              ) : (
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  strokeWidth={2}
                  d="M4 6h16M4 12h16M4 18h16"
                />
              )}
            </svg>
          </button>
        </div>

        {/* Mobile Menu */}
        {mobileOpen && (
          <div className="border-t border-gray-200 px-8 pb-6 lg:hidden">
            {navItems.map((item) =>
              item.hasDropdown ? (
                <div key={item.label}>
                  <button
                    className="flex w-full items-center justify-between py-3 font-[family-name:var(--font-inter)] text-base font-semibold text-slate-700"
                    onClick={() => setPracticeAreasOpen(!practiceAreasOpen)}
                  >
                    {item.label}
                    <svg
                      className={`h-4 w-4 text-slate-500 transition-transform ${practiceAreasOpen ? "rotate-180" : ""}`}
                      fill="none"
                      viewBox="0 0 24 24"
                      stroke="currentColor"
                      strokeWidth={2}
                    >
                      <path
                        strokeLinecap="round"
                        strokeLinejoin="round"
                        d="M19 9l-7 7-7-7"
                      />
                    </svg>
                  </button>
                  {practiceAreasOpen && (
                    <div className="pb-2 pl-4">
                      {practiceAreaItems.map((sub) => (
                        <Link
                          key={sub.label}
                          href={sub.slug ? `/practice-areas/${sub.slug}` : "/practice-areas"}
                          className="block py-2 font-[family-name:var(--font-inter)] text-sm text-slate-600"
                          onClick={() => setMobileOpen(false)}
                        >
                          {sub.label}
                        </Link>
                      ))}
                    </div>
                  )}
                </div>
              ) : (
                <Link
                  key={item.label}
                  href={item.href}
                  className="block py-3 font-[family-name:var(--font-inter)] text-base font-semibold text-slate-700"
                  onClick={() => setMobileOpen(false)}
                >
                  {item.label}
                </Link>
              )
            )}
          </div>
        )}
      </div>
    </nav>
  );
}
