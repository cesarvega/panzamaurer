import Image from "next/image";

export default function Hero() {
  return (
    <section className="relative flex h-[803px] w-full items-end justify-center overflow-hidden bg-white">
      {/* Background Video */}
      <video
        autoPlay
        muted
        loop
        playsInline
        className="absolute inset-0 h-full w-full object-cover"
      >
        <source src="/edit_views_miami.mp4" type="video/mp4" />
      </video>

      {/* Dark overlay gradient */}
      <div
        className="absolute inset-0"
        style={{
          background:
            "linear-gradient(0deg, rgba(17,24,39,0.96) 13.3%, rgba(17,24,39,0.61) 43.3%, rgba(17,24,39,0.288) 61.3%)",
        }}
      />
      <div
        className="absolute inset-0"
        style={{
          background:
            "linear-gradient(-19.3deg, rgba(255,255,255,0) 71.6%, rgba(255,255,255,0.7) 99.6%)",
        }}
      />


      {/* Content */}
      <div className="relative z-10 mx-auto w-full max-w-[1280px] px-8 pb-28 pt-36">
        <div className="max-w-[600px]">
          <h1 className="font-[family-name:var(--font-hanken)] text-[40px] font-extrabold uppercase leading-[1.1] text-gray-50 md:whitespace-nowrap md:text-[70px]">
            We Know Florida
          </h1>
          <div className="mt-4 flex items-baseline gap-[15px]">
            <p className="font-[family-name:var(--font-noto)] text-[27px] font-medium leading-[40px] text-gray-50">
              Representing Business, Regulated Industries,
              <br />
              and Institutions for more than{" "}
              <span className="font-black">5</span>
              <span className="font-bold">0 years.</span>
            </p>
          </div>
        </div>
      </div>
    </section>
  );
}
