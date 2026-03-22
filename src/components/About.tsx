import Image from "next/image";

const features = [
  "Premium Quality Materials",
  "Expert Craftsmanship",
  "On-Time Delivery",
  "Competitive Pricing",
];

export default function About() {
  return (
    <section id="about" className="py-20 bg-welding-black">
      <div className="max-w-[1200px] mx-auto px-6">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-10 lg:gap-[60px] items-center">
          {/* Image Side */}
          <div className="relative">
            <div className="relative rounded-2xl overflow-hidden">
              <Image
                src="/images/hero_welding.png"
                alt="Vijay Welding workshop"
                width={600}
                height={400}
                className="w-full h-[280px] sm:h-[350px] lg:h-[400px] object-cover rounded-2xl"
                style={{ height: "auto" }}
                loading="lazy"
              />
              <div className="absolute -inset-1 border-2 border-welding-accent/30 rounded-[calc(1rem+4px)] pointer-events-none" />
            </div>
            <div className="absolute -bottom-4 right-4 lg:-right-4 bg-gradient-to-br from-welding-accent to-welding-accent-dark px-5 py-4 rounded-xl text-center shadow-[0_8px_30px_rgba(230,126,34,0.4)]">
              <span className="block font-heading text-[0.7rem] font-extrabold tracking-[2px] text-white">
                GSTIN
              </span>
              <span className="block text-[0.65rem] text-white/85 tracking-wider mt-0.5">
                27AWZPC3007C1ZQ
              </span>
            </div>
          </div>

          {/* Content Side */}
          <div>
            <span className="inline-block font-heading text-[0.85rem] font-semibold tracking-[3px] uppercase text-welding-accent mb-3 relative pl-6 before:content-[''] before:absolute before:left-0 before:top-1/2 before:-translate-y-1/2 before:w-3.5 before:h-0.5 before:bg-welding-accent">
              Who We Are
            </span>
            <h2 className="font-heading text-[clamp(1.8rem,4vw,3rem)] font-extrabold tracking-wider mb-4">
              About Vijay Welding
            </h2>
            <p className="text-welding-text-secondary text-[0.95rem] leading-[1.8] mb-4">
              At <strong className="text-welding-accent">Vijay Welding</strong>,
              we bring decades of expertise in welding, fabrication, and modern
              design solutions. Located in the heart of Risod, Washim, we have
              earned the trust of countless clients through our commitment to
              quality and precision.
            </p>
            <p className="text-welding-text-secondary text-[0.95rem] leading-[1.8] mb-6">
              Our state-of-the-art workshop is equipped with CNC laser cutting
              machines, advanced welding tools, and skilled artisans who transform
              raw metal into works of art. From residential gates to commercial
              building elevations — we deliver excellence in every project.
            </p>

            {/* Features */}
            <div className="grid grid-cols-1 sm:grid-cols-2 gap-3">
              {features.map((feature) => (
                <div
                  key={feature}
                  className="flex items-center gap-2.5 p-2.5 px-3.5 bg-welding-card rounded-lg border border-welding-border hover:border-welding-border-hover hover:translate-x-1 transition-all duration-300"
                >
                  <svg
                    width="24"
                    height="24"
                    viewBox="0 0 24 24"
                    fill="none"
                    stroke="#e67e22"
                    strokeWidth="2"
                    className="flex-shrink-0"
                  >
                    <path d="M22 11.08V12a10 10 0 1 1-5.93-9.14" />
                    <polyline points="22 4 12 14.01 9 11.01" />
                  </svg>
                  <span className="text-[0.85rem] font-medium">{feature}</span>
                </div>
              ))}
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
