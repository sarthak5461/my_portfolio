import React from "react";

const certifications = [
  {
    title: "Integrating With HubSpot I: Foundation Certified",
    image: "/f0d96831e13443f8b7a6c662fbb4a652.png",
  },
  {
    title: "HubSpot CMS for Developers II",
    image: "/bfd556d1e86147eb834c53b75164f5a1.png",
  },
  {
    title: "AI Automation with n8n",
    image: "/Tutedude.png",
  },
];

export default function Certifications() {
  return (
    <>
      <div className="flex items-center gap-3 mb-10">
        <span className="font-mono text-xs uppercase tracking-[0.3em] px-3 py-1.5 bg-tomato text-cream brutal-border rounded-full">
          // Certifications
        </span>
        <div className="h-[2px] flex-1 bg-ink/20" />
      </div>
      <section id="certifications" className="py-20">
        <div className="mx-auto max-w-6xl px-6">
          {/* Header */}
          <div className="mb-12">
            <p className="mb-3 text-sm font-medium uppercase tracking-widest">
              Credentials
            </p>

            <h2 className="text-4xl font-bold tracking-tight md:text-5xl">
              Certifications
            </h2>
          </div>

          {/* Certificate Grid */}
          <div className="grid gap-6 sm:grid-cols-2 lg:grid-cols-3">
            {certifications.map((certificate, index) => (
              <article
                key={index}
                className="group overflow-hidden rounded-2xl border border-black/10 bg-white transition-all duration-300 hover:-translate-y-1 hover:shadow-xl"
              >
                {/* Certificate Image */}
                <div className="aspect-[4/3] overflow-hidden bg-gray-100">
                  <img
                    src={certificate.image}
                    alt={certificate.title}
                    className="h-full w-full object-cover transition-transform duration-500 group-hover:scale-105"
                  />
                </div>

                {/* Certificate Title */}
                <div className="p-5">
                  <h3 className="text-lg font-semibold leading-snug">
                    {certificate.title}
                  </h3>
                </div>
              </article>
            ))}
          </div>
        </div>
      </section>
    </>
  );
}
