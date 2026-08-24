import React, { useState } from "react";

/* ──────────────────────────────────────────────
   Inline UI Components (self-contained file)
   ────────────────────────────────────────────── */

const SectionHeader = ({ title, subtitle, badgeText }) => {
  return (
    <div className="text-center my-8 relative inline-block w-full">
      {badgeText && (
        <span className="bg-retroOrange text-black font-black text-xs px-3.5 py-1 border-3 border-black rounded-full uppercase tracking-wider inline-block -rotate-2 mb-3 shadow-brutal-sm select-none">
          {badgeText}
        </span>
      )}
      <h2 className="text-4xl md:text-5xl font-black uppercase tracking-tight text-black">
        {title}
      </h2>
      {subtitle && (
        <p className="text-black/80 font-bold mt-2 max-w-2xl mx-auto text-sm md:text-base">
          {subtitle}
        </p>
      )}
    </div>
  );
};

const Button = ({
  children,
  variant = "pink",
  size = "md",
  className = "",
  ...props
}) => {
  const baseStyles =
    "inline-flex items-center justify-center font-black border-3 border-black rounded-xl transition-all duration-150 active:translate-x-0.5 active:translate-y-0.5 shadow-brutal hover:shadow-brutal-sm cursor-pointer select-none";

  const sizeStyles = {
    sm: "px-4 py-2 text-xs sm:text-sm",
    md: "px-6 py-2.5 text-sm sm:text-base",
    lg: "px-8 py-3.5 text-base sm:text-lg",
  };

  const variantStyles = {
    pink: "bg-retroPink text-black hover:bg-black hover:text-white",
    yellow: "bg-retroYellow text-black hover:bg-black hover:text-white",
    orange: "bg-retroOrange text-black hover:bg-black hover:text-white",
    lime: "bg-retroLime text-black hover:bg-black hover:text-white",
    white: "bg-white text-black hover:bg-black hover:text-white",
    dark: "bg-black text-white hover:bg-retroOrange hover:text-black",
  };

  return (
    <button
      className={`${baseStyles} ${sizeStyles[size] || sizeStyles.md} ${
        variantStyles[variant] || variantStyles.pink
      } ${className}`}
      {...props}
    >
      {children}
    </button>
  );
};

/* ──────────────────────────────────────────────
   Magazine Data
   ────────────────────────────────────────────── */

const sampleMagazines = [
  {
    title: "Tejas Vol 4.1",
    smallDescription:
      "We proudly present AI tools, frameworks, and insights redefining the future!",
    bookLink: "https://online.pubhtml5.com/eqdgd/rjrs/",
    image: {
      fileName: "TejadVol41.jpg",
      url: "https://res.cloudinary.com/df9us90ur/image/upload/v1729399795/TejasVol4.1.jpg",
    },
    views: 0,
    optionDate: 2024,
    latest: "yes",
    accent: "bg-retroYellow",
  },
  {
    title: "Tejas Vol 3.2",
    smallDescription:
      "Unveiling our latest edition on AI in industries and automation!",
    bookLink: "https://pubhtml5.com/hiwar/bcxj/",
    image: {
      fileName: "TejadVol32.jpg",
      url: "https://res.cloudinary.com/df9us90ur/image/upload/v1729399795/TejasVol3.2.jpg",
    },
    views: 0,
    optionDate: 2024,
    latest: "yes",
    accent: "bg-retroOrange",
  },
  {
    title: "Tejas Vol 3.1",
    smallDescription:
      "We leverage cutting-edge technology to implement seamlessly.",
    bookLink: "https://pubhtml5.com/hiwar/vfrp/",
    image: {
      fileName: "TejadVol31.jpg",
      url: "https://res.cloudinary.com/df9us90ur/image/upload/v1728923748/TejasVol3.1.avif",
    },
    views: 0,
    optionDate: 2023,
    accent: "bg-retroPink",
  },
  {
    title: "Tejas Vol 2",
    smallDescription: "Next, our team of experts develops tailored solutions.",
    bookLink: "https://pubhtml5.com/hiwar/uqpn/",
    image: {
      fileName: "TejadVol2.jpg",
      url: "https://res.cloudinary.com/df9us90ur/image/upload/v1728923716/TejasVol2.avif",
    },
    views: 0,
    optionDate: 2023,
    accent: "bg-retroLime",
  },
  {
    title: "Tejas Vol 1",
    smallDescription:
      "We start by gaining a deep understanding of core AI foundations and business goals.",
    bookLink: "https://online.pubhtml5.com/hiwar/abef/",
    image: {
      fileName: "TejadVol1.jpg",
      url: "https://res.cloudinary.com/df9us90ur/image/upload/v1728923642/TejasVol1.avif",
    },
    views: 0,
    optionDate: 2022,
    accent: "bg-retroYellow",
  },
];

/* ──────────────────────────────────────────────
   Publications Component
   ────────────────────────────────────────────── */

export default function Publications() {
  const [activeInfo, setActiveInfo] = useState(null);

  return (
    <div className="space-y-10 max-w-6xl mx-auto px-4 sm:px-6 lg:px-8 mt-6 pb-24">
      {/* Hero Section */}
      <SectionHeader
        title="PUBLICATIONS & TEJAS"
        subtitle="Explore our flagship technical magazines, AI research, and student-written editions."
        badgeText="MAGAZINES"
      />

      {/* Grid of Magazines with Tactile & Visual Upgrades */}
      <div className="flex flex-wrap justify-center gap-8">
        {sampleMagazines.map((mag, index) => {
          const isInfoActive = activeInfo === index;
          const volLabel = mag.title.replace("Tejas ", "");
          const cardBg = mag.accent || "bg-retroYellow";

          return (
            <div
              key={index}
              style={{ animationDelay: `${index * 120}ms` }}
              className={`animate-card-enter group/card border-3 border-black rounded-3xl p-5 shadow-brutal-lg ${cardBg} flex flex-col justify-between transition-all duration-300 ease-out hover:-translate-y-2 hover:-translate-x-1 hover:shadow-brutal-xl relative w-full md:w-[calc(50%-1rem)] lg:w-[calc(33.333%-1.4rem)]`}
            >
              {/* Latest Issue Spotlight Tag */}
              {mag.latest === "yes" && (
                <div className="absolute -top-3.5 right-5 z-20 bg-black text-white text-[11px] font-black tracking-wider uppercase px-3.5 py-1 rounded-full border-2 border-black shadow-brutal-sm select-none transform -rotate-1">
                  LATEST ISSUE
                </div>
              )}

              <div>
                {/* Cover Image Container */}
                <div
                  className="relative border-3 border-black rounded-2xl overflow-hidden mb-5 w-full aspect-[711/1009] bg-black group cursor-pointer"
                  style={{ aspectRatio: "711 / 1009" }}
                  onClick={() =>
                    window.open(mag.bookLink, "_blank", "noopener,noreferrer")
                  }
                >
                  {/* Tactical 3D Book Spine Depth */}
                  <div className="absolute inset-y-0 left-0 w-3.5 bg-gradient-to-r from-black/50 via-black/20 to-transparent pointer-events-none z-10" />

                  {/* Info Icon in Top-Left Corner */}
                  <div
                    className="absolute top-3 left-3 z-20 group/info"
                    onClick={(e) => e.stopPropagation()}
                  >
                    <button
                      type="button"
                      onClick={(e) => {
                        e.stopPropagation();
                        setActiveInfo(isInfoActive ? null : index);
                      }}
                      className="w-7 h-7 rounded-full bg-black text-white border-2 border-black font-black text-xs flex items-center justify-center shadow-brutal-sm hover:bg-white hover:text-black transition-all duration-200 hover:scale-110 hover:rotate-12 active:scale-90 focus:outline-none cursor-pointer"
                      title="Cover information"
                      aria-label="View publication details"
                    >
                      <svg
                        xmlns="http://www.w3.org/2000/svg"
                        viewBox="0 0 24 24"
                        fill="none"
                        stroke="currentColor"
                        strokeWidth="2.5"
                        strokeLinecap="round"
                        strokeLinejoin="round"
                        className="w-3.5 h-3.5"
                      >
                        <circle cx="12" cy="12" r="10" />
                        <line x1="12" y1="16" x2="12" y2="12" />
                        <line x1="12" y1="8" x2="12.01" y2="8" />
                      </svg>
                    </button>

                    {/* Info Label Popover */}
                    <div
                      className={`absolute left-0 top-9 z-30 transition-all duration-300 cubic-bezier(0.34, 1.56, 0.64, 1) pointer-events-none group-hover/info:opacity-100 group-hover/info:visible group-hover/info:translate-y-0 ${
                        isInfoActive
                          ? "opacity-100 visible translate-y-0 scale-100"
                          : "opacity-0 invisible -translate-y-1 scale-95"
                      }`}
                    >
                      <div className="bg-black text-white text-xs font-bold px-3 py-2 rounded-xl shadow-brutal border-2 border-black whitespace-nowrap flex flex-col gap-0.5">
                        <div className="flex items-center gap-1.5">
                          <span className="text-gray-300 font-semibold">
                            Year of Release:
                          </span>
                          <span className="text-retroYellow font-black">
                            {mag.optionDate}
                          </span>
                        </div>
                        {mag.latest === "yes" && (
                          <span className="text-[10px] font-black text-retroPink uppercase tracking-wide">
                            Latest Edition
                          </span>
                        )}
                      </div>
                    </div>
                  </div>

                  {/* Cover Image */}
                  <img
                    src={mag.image.url}
                    alt={mag.title}
                    className="w-full h-full object-cover transition-transform duration-500 ease-out group-hover/card:scale-[1.04] group-hover/card:-rotate-1"
                  />

                  {/* Tactile Page-Curl Corner */}
                  <div className="absolute bottom-0 right-0 w-8 h-8 pointer-events-none z-20 overflow-hidden">
                    <div className="absolute bottom-0 right-0 w-0 h-0 border-solid border-t-[20px] border-l-[20px] border-r-0 border-b-0 border-t-transparent border-l-black/40 group-hover/card:border-t-[28px] group-hover/card:border-l-[28px] transition-all duration-300 ease-out" />
                    <div className="absolute bottom-0 right-0 w-0 h-0 border-solid border-b-[20px] border-r-[20px] border-t-0 border-l-0 border-b-black border-r-black/80 shadow-[-2px_-2px_4px_rgba(0,0,0,0.3)] group-hover/card:border-b-[28px] group-hover/card:border-r-[28px] transition-all duration-300 ease-out" />
                  </div>

                  {/* Quick 'Open Flipbook' Floating Pill */}
                  <div className="absolute bottom-3.5 left-1/2 -translate-x-1/2 z-20 bg-black text-white font-black text-xs px-3.5 py-1.5 rounded-full shadow-brutal-sm border-2 border-black opacity-0 translate-y-3 group-hover/card:opacity-100 group-hover/card:translate-y-0 transition-all duration-300 pointer-events-none whitespace-nowrap flex items-center gap-1.5">
                    <span>Open Flipbook</span>
                    <span className="text-retroPink">↗</span>
                  </div>

                  {/* Shimmer Light Sweep */}
                  <div className="absolute inset-0 bg-gradient-to-r from-transparent via-white/30 to-transparent -translate-x-full group-hover/card:translate-x-full transition-transform duration-1000 ease-in-out pointer-events-none" />
                </div>

                {/* Volume Badge + Title */}
                <div className="flex items-center gap-2 mb-2">
                  <span className="bg-black text-white font-black text-[11px] px-2.5 py-0.5 rounded-md border-2 border-black shadow-brutal-sm uppercase tracking-wider select-none shrink-0">
                    {volLabel}
                  </span>
                  <h3 className="font-black text-2xl text-black leading-tight">
                    {mag.title}
                  </h3>
                </div>

                {/* Description */}
                <p className="font-bold text-xs text-black/90 leading-relaxed mb-4">
                  {mag.smallDescription}
                </p>
              </div>

              {/* Read Flipbook Button */}
              <div className="pt-3 border-t-3 border-black">
                <a
                  href={mag.bookLink}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="block group/btn"
                >
                  <Button
                    variant="dark"
                    size="sm"
                    className="w-full justify-center"
                  >
                    <span>Read Flipbook</span>
                  </Button>
                </a>
              </div>
            </div>
          );
        })}
      </div>
    </div>
  );
}
