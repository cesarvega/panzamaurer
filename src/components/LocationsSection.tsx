import Image from "next/image";

const locations = [
  { name: "Tallahassee", image: "/images/location-tallahassee.jpg" },
  { name: "Coral Gables", image: "/images/location-coral-gables.jpg" },
  { name: "Fort Lauderdale", image: "/images/location-fort-lauderdale.jpg" },
];

export default function LocationsSection() {
  return (
    <section className="w-full bg-white">
      <div className="mx-auto max-w-[1216px] px-8 py-20 lg:py-40">
        <div className="flex flex-col items-center gap-20">
          <div className="flex flex-col items-center gap-3">
            <h2 className="font-[family-name:var(--font-hanken)] text-4xl font-semibold tracking-tight text-gray-950 lg:text-[52px] lg:leading-[1.6]">
              Our Locations
            </h2>
            <Image src="/images/underline-2.svg" alt="" width={122} height={4} />
          </div>
          <div className="flex w-full flex-col gap-0.5 lg:flex-row">
            {locations.map((location, index) => (
              <div
                key={location.name}
                className={`group relative h-[400px] overflow-hidden lg:h-[500px] ${
                  index === 0 ? "flex-1" : "lg:w-[404px]"
                }`}
              >
                <Image
                  src={location.image}
                  alt={location.name}
                  fill
                  className="object-cover transition-transform duration-300 group-hover:scale-105"
                />
                <div
                  className="absolute inset-0"
                  style={{
                    background:
                      "linear-gradient(180deg, rgba(0,0,0,0) 7.8%, rgba(0,0,0,0.4) 100%)",
                  }}
                />
                <div className="absolute inset-x-0 bottom-0 p-6">
                  <p className="text-2xl font-medium leading-10 text-white">
                    {location.name}
                  </p>
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}
