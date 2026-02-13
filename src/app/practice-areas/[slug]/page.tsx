import Image from "next/image";
import Link from "next/link";
import Navbar from "@/components/Navbar";
import LocationsSection from "@/components/LocationsSection";
import Footer from "@/components/Footer";

const practiceAreaData: Record<
  string,
  {
    title: string;
    heading: string;
    content: string[];
  }
> = {
  "administrative--regulatory-law": {
    title: "Administrative | Regulatory Law",
    heading: "A Nice Heading about Regulatory Law",
    content: [
      "Panza Maurer & Maynard assists clients within the framework of local, state and federal regulations. A key factor in this area of practice is an in-depth understanding of applicable laws to assist clients in navigating what is often a complex set of rules and regulations. The firm has intimate knowledge of the regulatory process and has developed long-standing professional relationships within many governmental and administrative agencies, a significant factor in achieving results.",
      "PMM represents clients on matters before the Florida Attorney General's Office, the Florida Departments of Insurance and Revenue, Children and Families, Health, Agriculture and Consumer Services, Environmental Protection, Department of Lottery, Environmental Regulations, the Florida Department of Education, DCA, and Department of Transportation. We also work extensively with the Florida Agency for Health Care Administration (AHCA), as well as federal agencies such as the Centers for Medicare and Medicaid Services, Occupational Safety and Health Administration, the U.S. Department of Education, Department of Justice and the Food and Drug Administration. Other diverse matters handled by this division include: professional licensure and discipline, procurement, bid protests, environment and land use issues, utilities rate-making regulation and grants. We know the Florida landscape at PMM and can produce significant benefits for our clients.",
    ],
  },
  healthcare: {
    title: "Healthcare",
    heading: "Comprehensive Healthcare Legal Services",
    content: [
      "Panza Maurer healthcare law practice focuses on the trends, initiatives and objectives set by health-related industries. Our attorneys have represented healthcare providers in virtually every area of health care law including regulatory compliance, licensing, reimbursement, fraud and abuse, certificate of need applications, and healthcare litigation.",
      "The firm has represented major hospital systems, specialty care providers, hospice organizations, nursing facilities, and healthcare technology companies. Our attorneys navigate complex regulatory frameworks including HIPAA, Stark Law, Anti-Kickback Statute, and state healthcare regulations to protect our clients' interests and ensure compliance.",
    ],
  },
  compliance: {
    title: "Compliance",
    heading: "Corporate Compliance & Governance",
    content: [
      "Representing clients in compliance matters involving corporate governance, allegations of business and accounting fraud. Panza Maurer assists organizations in developing and implementing comprehensive compliance programs tailored to their specific industry and regulatory requirements.",
      "Our compliance practice encompasses internal investigations, regulatory audits, policy development, and training programs. We help clients navigate the complex web of federal and state regulations to minimize risk and ensure organizational integrity.",
    ],
  },
  "corporate--transactional": {
    title: "Corporate | Transactional",
    heading: "Corporate & Transactional Law",
    content: [
      "Legal skills and expertise in organizational structure and financial transactions to achieve client business goals. Panza Maurer provides comprehensive corporate counsel on entity formation, governance, mergers and acquisitions, joint ventures, and complex commercial transactions.",
      "Our transactional attorneys draft, review, and negotiate a wide range of business agreements including purchase/sale agreements, operating agreements, shareholder agreements, commercial leases, and licensing arrangements. We focus on structuring deals that protect our clients' interests while achieving their strategic objectives.",
    ],
  },
  litigation: {
    title: "Litigation",
    heading: "Civil & Commercial Litigation",
    content: [
      "Insurance defense counsel representing numerous individuals, private and public corporations. Panza Maurer's litigation practice spans state and federal courts across Florida, handling complex commercial disputes, employment litigation, healthcare litigation, and administrative proceedings.",
      "Our trial attorneys bring decades of experience in navigating high-stakes disputes. From pre-suit investigation through trial and appeal, we develop strategic litigation plans designed to achieve favorable outcomes for our clients through negotiation, mediation, or trial.",
    ],
  },
  "land-use--environmental": {
    title: "Land Use | Environmental",
    heading: "Land Use & Environmental Law",
    content: [
      "Panza Maurer represents property owners, developers, lenders and other affected parties with land use and environmental matters. Our attorneys have extensive experience navigating local, state, and federal regulatory frameworks governing land development, environmental compliance, and natural resource management.",
      "The firm handles zoning matters, comprehensive plan amendments, development orders, environmental permitting, contamination remediation, and regulatory enforcement actions. We work closely with government agencies to secure approvals and resolve disputes efficiently.",
    ],
  },
  "trusts--estates": {
    title: "Trusts & Estates",
    heading: "Trusts & Estate Planning",
    content: [
      "Panza Maurer Law Firm Trusts & Estates practice attorneys know and have extensive experience in a wide variety of estate planning matters. We provide personalized counsel on wills, trusts, powers of attorney, healthcare directives, and comprehensive estate plans.",
      "Our attorneys assist clients with wealth preservation strategies, business succession planning, probate administration, and trust management. We work to ensure that our clients' assets are protected and their wishes are carried out effectively.",
    ],
  },
  "technology--it": {
    title: "Technology | IT",
    heading: "Technology & Information Services Law",
    content: [
      "At Panza Maurer our practice is structured to provide diversified businesses regulatory service in the rapidly evolving technology landscape. Our attorneys advise on data privacy, cybersecurity compliance, software licensing, and technology transactions.",
      "We assist clients with information security policies, data breach response, HIPAA and FERPA compliance for technology systems, and negotiations involving technology vendors and service providers.",
    ],
  },
  "intellectual-property": {
    title: "Intellectual Property",
    heading: "Intellectual Property Protection",
    content: [
      "Our intellectual property attorneys have extensive experience in client filing and procuring trademarks and copyrights. Panza Maurer assists businesses in identifying, protecting, and enforcing their intellectual property rights.",
      "Our practice encompasses trademark registration and enforcement, copyright protection, trade secret litigation, licensing agreements, and IP due diligence in corporate transactions.",
    ],
  },
  "academic-law": {
    title: "Academic Law",
    heading: "Education & Academic Law",
    content: [
      "Panza Maurer experience and practice includes consultation and representation in all areas of the education industry. Our attorneys serve as general counsel to universities and academic institutions, advising on regulatory compliance, student affairs, faculty matters, and institutional governance.",
      "We handle matters involving Title IX compliance, accreditation, student conduct proceedings, ADA and Section 504 compliance, FERPA, academic dismissals, and employment issues unique to educational institutions.",
    ],
  },
  "gaming--hospitality": {
    title: "Gaming & Hospitality",
    heading: "Gaming & Hospitality Law",
    content: [
      "Panza Maurer Law Firm attorneys have a strong practice area in gaming law, drawing upon our expertise in administrative law. We represent clients in the gaming and hospitality industries on matters involving licensing, regulatory compliance, and government affairs.",
      "Our attorneys have experience with pari-mutuel operations, lottery matters, and emerging gaming regulations. We help clients navigate the complex intersection of gaming law, administrative regulations, and legislative developments.",
    ],
  },
  "strategic-planning": {
    title: "Strategic Planning",
    heading: "Government Relations & Strategic Planning",
    content: [
      "Panza Maurer Law Firm provides government relations consulting and strategic planning to firm clients. We help businesses and organizations develop comprehensive strategies for engaging with local, state, and federal government entities.",
      "Our strategic planning services include legislative monitoring, policy analysis, coalition building, and advocacy campaign development. We leverage our extensive government relationships and deep understanding of the regulatory landscape to help clients achieve their strategic objectives.",
    ],
  },
  "government-relations": {
    title: "Government Relations",
    heading: "Legislative & Government Affairs",
    content: [
      "The firm has experience in drafting proposed legislation and, whenever monitoring, defending state constitutional challenges. Panza Maurer's government relations practice provides comprehensive advocacy before state and federal government agencies and legislative bodies.",
      "Our attorneys and government affairs professionals maintain relationships with key decision-makers throughout Florida's governmental landscape. We represent clients in legislative initiatives, appropriations matters, regulatory proceedings, and policy development.",
    ],
  },
  "labor--employment": {
    title: "Labor | Employment",
    heading: "Labor & Employment Law",
    content: [
      "Panza Maurer Law Firm is recognized for our expertise in the areas of Labor and Employment law. We represent employers and institutions in all aspects of employment law, from compliance counseling to litigation in state and federal courts.",
      "Our employment practice covers wage and hour compliance, discrimination and harassment claims, wrongful termination, employee classification, FMLA and ADA compliance, workplace investigations, and proceedings before the EEOC and Florida Commission on Human Relations.",
    ],
  },
  procurement: {
    title: "Procurement",
    heading: "Government Procurement Law",
    content: [
      "Panza Maurer Law Firm has extensive experience in handling large state and local bid and procurement matters for decades. We assist clients throughout the competitive bidding process, from RFP responses to bid protests and contract negotiations.",
      "Our procurement practice includes advising on government contracting requirements, preparing bid responses, challenging and defending procurement decisions, and ensuring compliance with applicable procurement statutes and regulations.",
    ],
  },
  "real-property": {
    title: "Real Property",
    heading: "Real Property Law",
    content: [
      "Panza Maurer Law Firm Real Property Division is comprised of experienced transactional and litigation attorneys. We handle commercial and residential real estate transactions, including acquisitions, sales, financing, leasing, and development.",
      "Our real property practice encompasses title review, due diligence, contract negotiation, closing services, and dispute resolution. We represent developers, investors, lenders, and property owners in complex real estate matters throughout Florida.",
    ],
  },
  "receivership--conservatorship": {
    title: "Receivership | Conservatorship",
    heading: "Receivership & Conservatorship Services",
    content: [
      "Panza Maurer Law Firm serves as Conservators, Receivers or Custodians for commercial and real estate entities. Our attorneys have been appointed by courts to manage distressed assets, oversee business operations, and protect the interests of stakeholders.",
      "We bring a practical, business-minded approach to receivership and conservatorship matters, working to preserve asset values and achieve orderly resolutions for all parties involved.",
    ],
  },
  "medical-marijuana": {
    title: "Medical Marijuana",
    heading: "Medical Marijuana Law",
    content: [
      "Our firm assists with navigating the governmental channels to obtain licenses in Florida's rapidly growing medical marijuana industry. Panza Maurer attorneys have played a key role in shaping Florida's medical marijuana regulatory framework.",
      "We advise clients on licensing applications, regulatory compliance, operational requirements, and the evolving legal landscape governing medical marijuana cultivation, processing, and distribution in Florida.",
    ],
  },
  "other-practice-areas": {
    title: "Other Practice Areas",
    heading: "Additional Legal Services",
    content: [
      "Structured to provide diversified businesses responsive service, assembling an experienced team of attorneys. Panza Maurer's breadth of practice areas allows us to serve clients across a wide range of legal needs.",
      "Our firm's collaborative approach ensures that clients benefit from the collective knowledge and experience of our entire team, regardless of the specific legal challenge they face.",
    ],
  },
};

const allPracticeAreas = Object.entries(practiceAreaData).map(
  ([slug, data]) => ({
    slug,
    title: data.title,
  })
);

const relatedNews = [
  {
    title: "NSU Investiture",
    slug: "nsu-investiture",
    image: "/images/news/nsu-investiture.png",
  },
  {
    title: "Congratulations – United States Attorney General Pam Bondi!",
    slug: "congratulations-pam-bondi",
    image: "/images/news/congratulations-pam-bondi.png",
  },
  {
    title: "2024 Fort Lauderdale International Boat Show Opening",
    slug: "fort-lauderdale-boat-show",
    image: "/images/news/fort-lauderdale-boat-show.png",
  },
];

export function generateStaticParams() {
  return Object.keys(practiceAreaData).map((slug) => ({ slug }));
}

export default async function PracticeAreaDetailPage({
  params,
}: {
  params: Promise<{ slug: string }>;
}) {
  const { slug } = await params;
  const area = practiceAreaData[slug];

  if (!area) {
    return (
      <div className="flex min-h-screen flex-col items-center">
        <Navbar />
        <main className="flex w-full flex-1 items-center justify-center pt-[145px] lg:pt-[109px]">
          <p className="text-xl text-gray-600">Practice area not found.</p>
        </main>
        <Footer />
      </div>
    );
  }

  return (
    <div className="flex min-h-screen flex-col items-center">
      <Navbar />
      <main className="w-full pt-[145px] lg:pt-[109px]">
        {/* Hero */}
        <section
          className="relative w-full rounded-br-[30px]"
          style={{
            background:
              "linear-gradient(-57.8deg, rgba(100,116,139,0) 57.5%, rgba(0,105,255,0.1) 103.2%), linear-gradient(90deg, rgba(255,255,255,0) 20.3%, rgba(255,255,255,0.7) 85.8%), linear-gradient(90deg, rgba(229,233,241,0.8) 0%, rgba(229,233,241,0.8) 100%), linear-gradient(90deg, #f3f4f6 0%, #f3f4f6 100%)",
          }}
        >
          <div className="mx-auto h-auto min-h-[250px] max-w-[1440px] pt-[40px] lg:h-[350px] lg:min-h-0 lg:pt-0">
            <div className="flex h-full flex-col items-center justify-center px-6 py-10 lg:pt-[55px] lg:pb-0">
              <div className="flex w-[800px] max-w-full flex-col items-center gap-[15px] text-center">
                <span className="text-xs font-bold uppercase tracking-[3px] text-primary-red">
                  Practice Area
                </span>
                <h1 className="font-[family-name:var(--font-hanken)] text-[28px] font-semibold leading-[1.3] tracking-[-0.52px] text-slate-600 sm:text-[36px] lg:text-[44px]">
                  {area.title}
                </h1>
                <div className="h-[2px] w-[200px] bg-primary-red sm:w-[293px]" />
              </div>
            </div>
          </div>

          {/* Breadcrumbs */}
          <div
            className="min-h-[62px] rounded-br-[24px] border-t border-[#e7e9ed] py-[20px] backdrop-blur-[7px]"
            style={{
              background:
                "linear-gradient(90deg, rgba(255,255,255,0) 58.8%, rgba(255,255,255,0.8) 100%), linear-gradient(-90deg, rgba(255,255,255,0) 38.1%, rgba(255,255,255,0.6) 100%), linear-gradient(90deg, rgba(227,237,253,0.6) 0%, rgba(227,237,253,0.6) 100%)",
            }}
          >
            <nav className="mx-auto flex max-w-[1440px] items-center gap-3 px-6 text-[14px] md:px-12 lg:px-[112px]">
              {[
                { label: "Home", href: "/" },
                { label: "Practice Areas", href: "/practice-areas" },
                { label: area.title },
              ].map((crumb, i) => (
                <span key={i} className="flex items-center gap-3">
                  {i > 0 && (
                    <svg
                      className="h-4 w-4 text-slate-400"
                      fill="none"
                      viewBox="0 0 24 24"
                      stroke="currentColor"
                    >
                      <path
                        strokeLinecap="round"
                        strokeLinejoin="round"
                        strokeWidth={2}
                        d="M9 5l7 7-7 7"
                      />
                    </svg>
                  )}
                  {crumb.href ? (
                    <Link
                      href={crumb.href}
                      className="font-[family-name:var(--font-inter)] font-medium leading-[20px] text-slate-600 transition-colors hover:text-blue-700"
                    >
                      {crumb.label}
                    </Link>
                  ) : (
                    <span className="max-w-[300px] truncate font-[family-name:var(--font-inter)] font-semibold leading-[20px] text-blue-700">
                      {crumb.label}
                    </span>
                  )}
                </span>
              ))}
            </nav>
          </div>
        </section>

        {/* Content */}
        <section className="bg-white">
          <div className="mx-auto flex max-w-[1440px] flex-col gap-12 px-6 py-16 sm:px-8 lg:flex-row lg:gap-20 lg:px-28">
            {/* Left: Article content */}
            <div className="flex-1">
              <h2 className="mb-8 font-[family-name:var(--font-hanken)] text-2xl font-semibold text-gray-900 lg:text-[30px]">
                {area.heading}
              </h2>
              <div className="font-[family-name:var(--font-noto)] text-base leading-7 text-gray-700">
                {area.content.map((paragraph, i) => (
                  <p key={i} className="mb-6 text-justify">
                    {paragraph}
                  </p>
                ))}
              </div>
            </div>

            {/* Right: Sidebar */}
            <div className="w-full flex-shrink-0 lg:sticky lg:top-[130px] lg:w-[340px] lg:self-start">
              <h3 className="mb-6 font-[family-name:var(--font-hanken)] text-xl font-semibold text-gray-900">
                Practice Areas
              </h3>
              <div className="flex flex-col">
                {allPracticeAreas.map((pa) => (
                  <Link
                    key={pa.slug}
                    href={`/practice-areas/${pa.slug}`}
                    className={`flex items-center justify-between border-b border-gray-100 py-3.5 text-sm transition-colors ${
                      pa.slug === slug
                        ? "font-semibold text-primary-red"
                        : "text-gray-700 hover:text-primary-red"
                    }`}
                  >
                    {pa.title}
                    <svg
                      className="h-4 w-4 flex-shrink-0 text-primary-red"
                      fill="none"
                      viewBox="0 0 24 24"
                      stroke="currentColor"
                      strokeWidth={2}
                    >
                      <path
                        strokeLinecap="round"
                        strokeLinejoin="round"
                        d="M9 5l7 7-7 7"
                      />
                    </svg>
                  </Link>
                ))}
              </div>
            </div>
          </div>
        </section>

        {/* Related Articles */}
        <section className="border-t border-gray-100 bg-white">
          <div className="mx-auto max-w-[1440px] px-6 py-16 sm:px-8 lg:px-28">
            <h2 className="mb-10 font-[family-name:var(--font-hanken)] text-[28px] font-semibold text-gray-950">
              <span className="relative inline-block">
                Related Articles
                <span className="absolute -bottom-1 left-0 h-[3px] w-full bg-primary-red" />
              </span>
            </h2>

            <div className="grid grid-cols-1 gap-8 md:grid-cols-2 lg:grid-cols-3">
              {relatedNews.map((article) => (
                <Link
                  key={article.slug}
                  href={`/news/${article.slug}`}
                  className="group flex flex-col gap-4"
                >
                  <div className="relative h-[200px] overflow-hidden rounded-lg bg-gray-200">
                    <Image
                      src={article.image}
                      alt={article.title}
                      fill
                      className="object-cover transition-transform duration-300 group-hover:scale-105"
                    />
                  </div>
                  <h3 className="text-base font-medium leading-6 text-gray-950">
                    {article.title}
                  </h3>
                  <span className="text-sm font-medium text-primary-red">
                    Read More
                  </span>
                </Link>
              ))}
            </div>
          </div>
        </section>

        <LocationsSection />
      </main>
      <Footer />
    </div>
  );
}
