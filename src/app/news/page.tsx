import Image from "next/image";
import Link from "next/link";
import Navbar from "@/components/Navbar";
import PageHero from "@/components/PageHero";
import LocationsSection from "@/components/LocationsSection";
import Footer from "@/components/Footer";

export const metadata = {
  title: "News | Panza Maurer",
};

const featuredPost = {
  title: "Leadership Broward Foundations's Fun Lunch",
  excerpt:
    'Panza Maurer congratulates our esteemed colleague, Gail Bulfin, on being honored at the Leadership Broward Foundation\'s "What is the 4-11?" Fun Lunch held at the Seminole Hard Rock Hotel & Casino.',
  date: "April 15, 2025",
  slug: "leadership-broward-fun-lunch",
  image: "/images/news/leadership-broward-fun-lunch.png",
};

const posts = [
  {
    title: "NSU Investiture",
    date: "March 20, 2025",
    slug: "nsu-investiture",
    image: "/images/news/nsu-investiture.png",
  },
  {
    title: "Congratulations – United States Attorney General Pam Bondi!",
    date: "February 10, 2025",
    slug: "congratulations-pam-bondi",
    image: "/images/news/congratulations-pam-bondi.png",
  },
  {
    title: "2024 Fort Lauderdale International Boat Show Opening",
    date: "January 5, 2025",
    slug: "fort-lauderdale-boat-show",
    image: "/images/news/fort-lauderdale-boat-show.png",
  },
  {
    title: "BSO Research Development and Training Center Tour",
    date: "December 12, 2024",
    slug: "bsd-research-tour",
    image: "/images/news/bsd-research-tour.png",
  },
  {
    title:
      "Panza Maurer's Elizabeth Pedersen Appointed to The Board of Directors for Arc Broward and Barc Housing",
    date: "November 8, 2024",
    slug: "elizabeth-pedersen-board",
    image: "/images/news/elizabeth-pedersen-board.png",
  },
  {
    title: "Leadership Florida Cornerstone Class 42 Program",
    date: "October 15, 2024",
    slug: "leadership-florida-class-42",
    image: "/images/news/leadership-florida-class-42.png",
  },
];

export default function NewsPage() {
  return (
    <div className="flex min-h-screen flex-col items-center">
      <Navbar />
      <main className="w-full pt-[109px]">
        <PageHero
          title="News"
          subtitle="Recent Firm News & Events"
          breadcrumbs={[
            { label: "Home", href: "/" },
            { label: "News" },
          ]}
        />

        <section className="bg-white">
          <div className="mx-auto max-w-[1440px] px-8 py-16 lg:px-28">
            {/* Featured Post */}
            <div className="mb-16 flex flex-col gap-8 overflow-hidden rounded-2xl border border-gray-200 lg:flex-row">
              <div className="relative h-[300px] bg-gray-200 lg:h-auto lg:w-1/2">
                <Image
                  src={featuredPost.image}
                  alt={featuredPost.title}
                  fill
                  className="object-cover"
                />
              </div>
              <div className="flex flex-1 flex-col justify-center gap-4 p-8">
                <h2 className="font-[family-name:var(--font-hanken)] text-2xl font-semibold text-gray-950 lg:text-3xl">
                  {featuredPost.title}
                </h2>
                <p className="leading-7 text-gray-600">{featuredPost.excerpt}</p>
                <Link
                  href={`/news/${featuredPost.slug}`}
                  className="inline-flex w-fit items-center rounded-lg bg-primary-red px-6 py-3 text-base font-semibold text-white transition-colors hover:bg-red-800"
                >
                  Read more
                </Link>
              </div>
            </div>

            {/* Post Grid */}
            <div className="grid grid-cols-1 gap-8 md:grid-cols-2 lg:grid-cols-3">
              {posts.map((post) => (
                <Link
                  key={post.slug}
                  href={`/news/${post.slug}`}
                  className="group flex flex-col gap-4"
                >
                  <div className="relative h-[200px] overflow-hidden rounded-lg bg-gray-200">
                    <Image
                      src={post.image}
                      alt={post.title}
                      fill
                      className="object-cover transition-transform duration-300 group-hover:scale-105"
                    />
                  </div>
                  <h3 className="text-base font-medium leading-6 text-gray-950">
                    {post.title}
                  </h3>
                  <span className="text-sm font-medium text-primary-red">
                    Read More
                  </span>
                </Link>
              ))}
            </div>

            {/* Pagination */}
            <div className="mt-12 flex items-center gap-3">
              {[1, 2, 3, 4, 5].map((n) => (
                <button
                  key={n}
                  className={`flex h-10 w-10 items-center justify-center rounded-full text-sm font-medium ${
                    n === 1
                      ? "bg-primary-dark text-white"
                      : "bg-gray-100 text-gray-600 hover:bg-gray-200"
                  }`}
                >
                  {n}
                </button>
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
