import React, { useState, useMemo, useEffect, useRef } from "react";
import { Link } from "react-router-dom";
import { eventsData } from "../data/eventsData";
import { SectionHeader } from "../components/ui/SectionHeader";
import {
  motion,
  useScroll,
  useTransform,
  AnimatePresence,
} from "framer-motion";

const TYPE_COLORS = {
  Event: "bg-retroPink",
  Workshop: "bg-retroBlue",
  Seminar: "bg-retroYellow",
  Competition: "bg-retroGreen",
  "Industrial Visit": "bg-retroPink",
  "Expert Talk": "bg-retroBlue",
  Other: "bg-retroYellow",
};

const MONTH_NAMES = [
  "January",
  "February",
  "March",
  "April",
  "May",
  "June",
  "July",
  "August",
  "September",
  "October",
  "November",
  "December",
];
const SHORT_MONTHS = [
  "JAN",
  "FEB",
  "MAR",
  "APR",
  "MAY",
  "JUN",
  "JUL",
  "AUG",
  "SEP",
  "OCT",
  "NOV",
  "DEC",
];

function getMonthFromDate(dateStr) {
  if (!dateStr) return "UNK";
  for (let i = 0; i < MONTH_NAMES.length; i++) {
    if (dateStr.toLowerCase().includes(MONTH_NAMES[i].toLowerCase())) {
      return SHORT_MONTHS[i];
    }
  }
  return "UNK";
}

const MapPinIcon = () => (
  <svg
    className="w-3.5 h-3.5 inline-block mr-1 opacity-80"
    fill="none"
    viewBox="0 0 24 24"
    strokeWidth="2"
    stroke="currentColor"
  >
    <path
      strokeLinecap="round"
      strokeLinejoin="round"
      d="M15 10.5a3 3 0 1 1-6 0 3 3 0 0 1 6 0Z"
    />
    <path
      strokeLinecap="round"
      strokeLinejoin="round"
      d="M19.5 10.5c0 7.142-7.5 11.25-7.5 11.25S4.5 17.642 4.5 10.5a7.5 7.5 0 1 1 15 0Z"
    />
  </svg>
);

const UsersIcon = () => (
  <svg
    className="w-3.5 h-3.5 inline-block mr-1 opacity-80"
    fill="none"
    viewBox="0 0 24 24"
    strokeWidth="2"
    stroke="currentColor"
  >
    <path
      strokeLinecap="round"
      strokeLinejoin="round"
      d="M15 19.128a9.38 9.38 0 0 0 2.625.372 9.337 9.337 0 0 0 4.121-.952 4.125 4.125 0 0 0-7.533-2.493M15 19.128v-.003c0-1.113-.285-2.16-.786-3.07M15 19.128v.106A12.318 12.318 0 0 1 8.624 21c-2.331 0-4.512-.645-6.374-1.766l-.001-.109a6.375 6.375 0 0 1 11.964-3.07M12 6.375a3.375 3.375 0 1 1-6.75 0 3.375 3.375 0 0 1 6.75 0Zm8.25 2.25a2.625 2.625 0 1 1-5.25 0 2.625 2.625 0 0 1 5.25 0Z"
    />
  </svg>
);

const BuildingIcon = () => (
  <svg
    className="w-3.5 h-3.5 inline-block mr-1 opacity-80"
    fill="none"
    viewBox="0 0 24 24"
    strokeWidth="2"
    stroke="currentColor"
  >
    <path
      strokeLinecap="round"
      strokeLinejoin="round"
      d="M2.25 21h19.5m-18-18v18m10.5-18v18m6-13.5V21M6.75 6.75h.75m-.75 3h.75m-.75 3h.75m3-6h.75m-.75 3h.75m-.75 3h.75M6.75 21v-3.375c0-.621.504-1.125 1.125-1.125h2.25c.621 0 1.125.504 1.125 1.125V21M3 3h12m-.75 4.5H21m-3.75 3.75h.008v.008h-.008v-.008Zm0 3h.008v.008h-.008v-.008Zm0 3h.008v.008h-.008v-.008Z"
    />
  </svg>
);

function EventCard({ event, index, isActive }) {
  const cardRef = useRef(null);

  const { scrollYProgress } = useScroll({
    target: cardRef,
    offset: ["start start", "end start"],
  });

  const exitY = useTransform(scrollYProgress, [0, 1], [0, -30]);
  const exitOpacity = useTransform(scrollYProgress, [0, 1], [1, 0.4]);
  const exitScale = useTransform(scrollYProgress, [0, 1], [1, 0.96]);

  const cardColor = TYPE_COLORS[event.type] || "bg-retroPink";

  return (
    <motion.div
      ref={cardRef}
      style={{ y: exitY, opacity: exitOpacity, scale: exitScale }}
      className="h-full"
    >
      <motion.div
        initial={{ opacity: 0, y: 25, scale: 0.97 }}
        whileInView={{ opacity: 1, y: 0, scale: 1 }}
        viewport={{ once: false, amount: 0.1 }}
        transition={{
          duration: 0.4,
          delay: Math.min(index, 6) * 0.08,
          ease: "easeOut",
        }}
        className="h-full"
      >
        <motion.div
          data-id={event.eventId}
          className="event-card group flex flex-col bg-white border-[1.5px] border-black rounded-2xl overflow-hidden h-full"
          animate={{
            scale: isActive ? 1.02 : 1,
            y: isActive ? -4 : 0,
            boxShadow: isActive
              ? "6px 6px 0px 0px rgba(0,0,0,1)"
              : "3px 3px 0px 0px rgba(0,0,0,1)",
          }}
          transition={{ duration: 0.25, ease: "easeOut" }}
          whileHover={{
            scale: 1.02,
            y: -4,
            boxShadow: "6px 6px 0px 0px rgba(0,0,0,1)",
          }}
        >
          <div
            className={`p-3.5 border-b-[1.5px] border-black flex justify-between items-center ${cardColor}`}
          >
            <span className="inline-block bg-white text-black font-semibold text-[11px] uppercase border-[1.5px] border-black px-2.5 py-0.5 rounded-full shadow-[1.5px_1.5px_0px_0px_rgba(0,0,0,1)] -rotate-1">
              {event.type}
            </span>
            <span className="font-mono text-[11px] bg-black text-white px-2.5 py-0.5 rounded-md border border-black shadow-[1.5px_1.5px_0px_0px_rgba(0,0,0,1)]">
              {event.date}
            </span>
          </div>

          <div className="p-5 flex-grow flex flex-col bg-[#fdfbf7]">
            <h4 className="text-lg font-bold tracking-tight leading-snug mb-3 text-black">
              {event.title}
            </h4>

            {event.shortDescription && (
              <p className="text-xs text-black/70 font-normal leading-relaxed mb-5 border-l-2 border-retroYellow pl-3 py-0.5">
                {event.shortDescription}
              </p>
            )}

            <div className="mt-auto flex flex-wrap gap-2 text-[11px]">
              {event.mode && (
                <span className="flex items-center font-medium border border-black px-2.5 py-1 rounded-md bg-white shadow-[1.5px_1.5px_0px_0px_rgba(0,0,0,1)]">
                  <MapPinIcon /> {event.mode}
                </span>
              )}
              {event.participants && (
                <span className="flex items-center font-medium border border-black px-2.5 py-1 rounded-md bg-retroYellow shadow-[1.5px_1.5px_0px_0px_rgba(0,0,0,1)]">
                  <UsersIcon /> {event.participants}
                </span>
              )}
              {event.venue && event.venue !== "N/A" && (
                <span className="flex items-center font-medium border border-black px-2.5 py-1 rounded-md bg-retroBlue shadow-[1.5px_1.5px_0px_0px_rgba(0,0,0,1)]">
                  <BuildingIcon /> {event.venue}
                </span>
              )}
            </div>
          </div>

          <div className="p-3 border-t-[1.5px] border-black bg-white flex justify-end items-center">
            <Link
              to={`/events/${event.eventId}`}
              className="bg-retroBlue text-black font-semibold text-xs uppercase px-5 py-2 rounded-lg border-[1.5px] border-black shadow-[2px_2px_0px_0px_rgba(0,0,0,1)] hover:translate-x-[1px] hover:translate-y-[1px] hover:shadow-none transition-all flex items-center gap-2 group/btn"
            >
              <span>Details</span>
              <span className="text-sm leading-none group-hover/btn:translate-x-1 transition-transform">
                →
              </span>
            </Link>
          </div>
        </motion.div>
      </motion.div>
    </motion.div>
  );
}

function FeaturedEventCard({ event, index, isActive }) {
  const cardRef = useRef(null);

  const { scrollYProgress } = useScroll({
    target: cardRef,
    offset: ["start end", "end start"],
  });

  const imageY = useTransform(scrollYProgress, [0, 1], ["-10%", "10%"]);

  const exitY = useTransform(scrollYProgress, [0.8, 1], [0, -40]);
  const exitOpacity = useTransform(scrollYProgress, [0.8, 1], [1, 0.2]);

  const cardColor = TYPE_COLORS[event.type] || "bg-retroPink";

  return (
    <motion.div
      ref={cardRef}
      style={{ y: exitY, opacity: exitOpacity }}
      className="col-span-1 md:col-span-2 lg:col-span-3 w-full mb-12 mt-8 relative"
    >
      <motion.div
        initial={{ opacity: 0, y: 50 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: false, amount: 0.1 }}
        transition={{ duration: 0.6, ease: [0.16, 1, 0.3, 1] }}
        className="w-full"
      >
        <div
          data-id={event.eventId}
          className="relative bg-[#fdfbf7] border-[3px] border-black rounded-3xl overflow-hidden shadow-[8px_8px_0px_0px_rgba(0,0,0,1)] group"
        >
          {/* Marquee Header */}
          <div className="w-full bg-retroYellow border-b-[3px] border-black overflow-hidden flex whitespace-nowrap py-2 items-center">
            <motion.div
              animate={{ x: ["0%", "-50%"] }}
              transition={{ repeat: Infinity, ease: "linear", duration: 15 }}
              className="flex font-black text-xs uppercase tracking-widest text-black"
            >
              {[...Array(6)].map((_, i) => (
                <span key={i} className="mx-4">
                  ★ {event.title} ★ ACM SIGAI
                </span>
              ))}
            </motion.div>
          </div>

          <div className="flex flex-col xl:flex-row w-full relative">
            {/* Image & Title Section */}
            <div className="relative w-full xl:w-2/3 min-h-[400px] md:min-h-[500px] lg:min-h-[600px] bg-black overflow-hidden border-b-[3px] xl:border-b-0 xl:border-r-[3px] border-black flex flex-col items-center justify-center p-8 md:p-12 lg:p-16">
              {/* Image Container */}
              <div className="relative w-full h-full flex-grow flex items-center justify-center">
                {event.image ? (
                  <img
                    src={event.image}
                    alt={event.title}
                    className="w-full h-full object-contain opacity-90 group-hover:opacity-100 transition-opacity duration-700 filter drop-shadow-[0_10px_20px_rgba(0,0,0,0.6)]"
                  />
                ) : (
                  <div className="absolute inset-0 w-full h-full bg-paper-grid opacity-20" />
                )}
              </div>

              {/* Vertical Text Sidebar inside image container */}
              <div className="absolute left-0 top-0 bottom-0 w-12 border-r-[3px] border-black/50 bg-black/40 backdrop-blur-sm hidden md:flex flex-col items-center justify-center pointer-events-none z-20">
                <span className="text-white font-mono text-[10px] uppercase tracking-[0.3em] -rotate-90 whitespace-nowrap">
                  {event.date} • {event.mode}
                </span>
              </div>

              {/* Responsive Center Title */}
              <div className="relative z-10 w-full mt-6 md:mt-10 flex flex-col items-center text-center pointer-events-none">
                <h4 className="text-2xl md:text-3xl lg:text-4xl xl:text-5xl font-black tracking-tight leading-[1.05] text-white uppercase drop-shadow-[0_4px_4px_rgba(0,0,0,0.8)]">
                  {event.title}
                </h4>
              </div>
            </div>

            {/* Content & Action Section */}
            <div className="w-full xl:w-1/3 bg-[#fdfbf7] p-8 md:p-10 flex flex-col justify-between relative">
              <div className="absolute top-0 right-0 p-4">
                <span
                  className={`inline-block text-black font-black text-xs uppercase border-[2px] border-black px-4 py-1.5 rounded-full shadow-[2px_2px_0px_0px_rgba(0,0,0,1)] rotate-3 ${cardColor}`}
                >
                  {event.type}
                </span>
              </div>

              <div className="space-y-8 mt-12 xl:mt-0">
                <div className="space-y-4">
                  <h5 className="font-black text-2xl uppercase tracking-tight">
                    The Story
                  </h5>
                  <div className="w-12 h-[3px] bg-black"></div>
                  <p className="text-sm md:text-base text-black/80 font-medium leading-relaxed">
                    {event.description
                      ? event.description.length > 250
                        ? event.description.substring(0, 250) + "..."
                        : event.description
                      : event.shortDescription}
                  </p>
                </div>

                <div className="grid grid-cols-2 gap-4 text-xs font-bold uppercase">
                  {event.venue && event.venue !== "N/A" && (
                    <div className="border-[2px] border-black p-3 bg-white shadow-[2px_2px_0px_0px_rgba(0,0,0,1)]">
                      <span className="block text-black/50 mb-1">Venue</span>
                      <span>{event.venue}</span>
                    </div>
                  )}
                  {event.participants && (
                    <div className="border-[2px] border-black p-3 bg-retroBlue shadow-[2px_2px_0px_0px_rgba(0,0,0,1)]">
                      <span className="block text-black/50 mb-1">Impact</span>
                      <span>{event.participants}</span>
                    </div>
                  )}
                </div>
              </div>

              <div className="mt-10 pt-8 border-t-[2px] border-black border-dashed">
                <Link
                  to={`/events/${event.eventId}`}
                  className="w-full bg-retroBlue text-black font-semibold text-xl uppercase px-8 py-5 rounded-xl border-[2.5px] border-black shadow-[4px_4px_0px_0px_rgba(0,0,0,1)] hover:translate-x-[2px] hover:translate-y-[2px] hover:shadow-none transition-all flex items-center justify-between group/btn"
                >
                  <span>Details</span>
                  <span className="text-3xl leading-none group-hover/btn:translate-x-3 transition-transform">
                    →
                  </span>
                </Link>
              </div>
            </div>
          </div>
        </div>
      </motion.div>
    </motion.div>
  );
}

const CAROUSEL_IMAGES = [
  "/assets/carousel/event_1.jpeg",
  "/assets/carousel/event_2.jpeg",
  "/assets/carousel/event_3.jpeg",
  "/assets/carousel/event_4.jpeg",
  "/assets/carousel/event_5.jpeg",
  "/assets/carousel/event_6.jpeg",
  "/assets/carousel/event_7.jpeg",
  "/assets/carousel/event_8.jpeg",
  "/assets/carousel/event_9.jpeg",
  "/assets/carousel/event_10.jpeg",
  "/assets/carousel/event_11.jpeg",
  "/assets/carousel/event_12.jpeg",
  "/assets/carousel/event_13.jpeg",
  "/assets/carousel/event_14.jpeg",
];

function ImageCarousel() {
  const [isHovered, setIsHovered] = useState(false);

  return (
    <div
      className="w-full py-12 mt-8 mb-12 bg-retroYellow border-[3px] border-black shadow-[8px_8px_0px_0px_rgba(0,0,0,1)] relative z-10 rounded-3xl"
      onMouseEnter={() => setIsHovered(true)}
      onMouseLeave={() => setIsHovered(false)}
    >
      <style>{`
        @keyframes marquee {
          0% { transform: translateX(0%); }
          100% { transform: translateX(-50%); }
        }
      `}</style>
      {/* Decorative Label */}
      <div className="absolute top-0 left-6 md:left-12 -translate-y-1/2 z-20">
        <span className="bg-retroPink text-black border-[2px] border-black px-6 py-1.5 font-black text-sm uppercase tracking-widest shadow-[3px_3px_0px_0px_rgba(0,0,0,1)] -rotate-3 inline-block">
          ★ ACM SIGAI Memory Lane ★
        </span>
      </div>

      <div className="flex w-full overflow-hidden items-center whitespace-nowrap pt-8 pb-8 -mt-6 -mb-6">
        <div
          className="flex gap-6 px-3 min-w-max"
          style={{
            animation: "marquee 50s linear infinite",
            animationPlayState: isHovered ? "paused" : "running",
          }}
        >
          {/* Double the array for seamless infinite scroll */}
          {[...CAROUSEL_IMAGES, ...CAROUSEL_IMAGES].map((src, idx) => (
            <div
              key={idx}
              className="w-[240px] md:w-[320px] lg:w-[400px] shrink-0 border-[3px] border-black bg-white rounded-2xl overflow-hidden shadow-[4px_4px_0px_0px_rgba(0,0,0,1)] aspect-[4/3] rotate-1 hover:-rotate-1 odd:-rotate-2 even:rotate-2 transition-transform duration-500 hover:scale-105 hover:z-30 relative cursor-pointer"
            >
              <img
                src={src}
                alt="ACM SIGAI Past Event"
                className="w-full h-full object-cover grayscale-[20%] sepia-[10%] hover:grayscale-0 hover:sepia-0 transition-all duration-500 pointer-events-none"
              />
            </div>
          ))}
        </div>
      </div>
    </div>
  );
}

function SemesterChapter({ academicYear, semester, index }) {
  const [selectedImage, setSelectedImage] = useState(null);

  const colors = [
    "bg-retroPink",
    "bg-retroBlue",
    "bg-retroYellow",
    "bg-retroGreen",
  ];
  const color = colors[index % colors.length];

  const images = semester.images.slice(0, 3);

  return (
    <>
      <div className="relative w-full mb-16">
        <div
          className={`relative border-[3px] border-black ${color} p-8 md:p-12 lg:p-14 rounded-3xl shadow-[8px_8px_0px_0px_rgba(0,0,0,1)] overflow-hidden flex flex-col xl:flex-row items-center justify-between min-h-[350px] group`}
        >
          {/* Decorative Grid */}
          <div className="absolute inset-0 bg-[linear-gradient(to_right,#00000010_1px,transparent_1px),linear-gradient(to_bottom,#00000010_1px,transparent_1px)] bg-[size:24px_24px] opacity-50 pointer-events-none mix-blend-overlay" />

          <div className="relative z-10 w-full xl:w-1/2 flex flex-col space-y-6">
            <div className="flex flex-wrap items-center gap-3 mb-2">
              <span className="font-bold text-black/80 text-xs md:text-sm uppercase tracking-widest bg-white/70 backdrop-blur-sm px-4 py-1.5 border-[2px] border-black rounded-full shadow-[2px_2px_0px_0px_rgba(0,0,0,1)] rotate-1">
                AY {academicYear}
              </span>
            </div>

            <div className="overflow-hidden">
              <h2 className="text-5xl md:text-6xl lg:text-7xl font-black text-black uppercase tracking-tighter leading-[0.9] drop-shadow-[3px_3px_0px_rgba(255,255,255,1)]">
                {semester.name}
              </h2>
            </div>

            <div className="flex flex-wrap items-center gap-4 pt-2">
              <span className="bg-black text-white font-black text-sm md:text-base uppercase px-5 py-2.5 border-[2px] border-black shadow-[4px_4px_0px_0px_rgba(255,255,255,1)] rotate-2">
                {semester.dateRange}
              </span>
              <span className="bg-white text-black font-black text-sm md:text-base uppercase px-5 py-2.5 border-[2px] border-black shadow-[4px_4px_0px_0px_rgba(0,0,0,1)] -rotate-2">
                {semester.eventsCount} Events
              </span>
            </div>
          </div>

          {images.length > 0 && (
            <div className="relative z-10 w-full xl:w-1/2 mt-12 xl:mt-0 h-[220px] md:h-[280px] flex items-center justify-center">
              {images.map((img, i) => {
                const rotations = [-6, 4, -3];
                const xOffsets = ["-15%", "15%", "0%"];
                const yOffsets = ["-10%", "-5%", "10%"];
                const zIndices = [10, 15, 20];

                return (
                  <motion.div
                    key={i}
                    onClick={() => setSelectedImage(img)}
                    whileHover={{ scale: 1.05, rotate: 0, zIndex: 30 }}
                    className="absolute w-1/2 sm:w-2/5 aspect-[4/3] rounded-xl border-[3px] border-black shadow-[6px_6px_0px_0px_rgba(0,0,0,1)] overflow-hidden bg-white cursor-pointer"
                    style={{
                      rotate: rotations[i] || 0,
                      left: `calc(25% + ${xOffsets[i] || "0%"})`,
                      top: `calc(10% + ${yOffsets[i] || "0%"})`,
                      zIndex: zIndices[i] || 10,
                    }}
                  >
                    <img
                      src={img}
                      className="w-full h-full object-cover grayscale-[20%] hover:grayscale-0 transition-all duration-300 pointer-events-none"
                      alt="Event preview"
                    />
                  </motion.div>
                );
              })}
            </div>
          )}
        </div>
      </div>

      {/* Lightbox for Image */}
      <AnimatePresence>
        {selectedImage && (
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            className="fixed inset-0 z-[100] flex items-center justify-center p-4 md:p-12 bg-black/90 backdrop-blur-sm cursor-zoom-out"
            onClick={() => setSelectedImage(null)}
          >
            <motion.div
              initial={{ scale: 0.9, opacity: 0, y: 20 }}
              animate={{ scale: 1, opacity: 1, y: 0 }}
              exit={{ scale: 0.9, opacity: 0, y: 20 }}
              transition={{ type: "spring", damping: 25, stiffness: 300 }}
              className="relative max-w-7xl max-h-screen w-full h-full flex items-center justify-center cursor-default"
              onClick={(e) => e.stopPropagation()}
            >
              <img
                src={selectedImage}
                alt="Enlarged view"
                className="max-w-full max-h-full w-auto h-auto object-contain rounded-lg shadow-2xl border-[3px] border-white/20"
              />
              <button
                onClick={() => setSelectedImage(null)}
                className="absolute top-0 right-0 md:top-4 md:right-4 bg-white text-black w-10 h-10 rounded-full flex items-center justify-center font-bold text-xl border-[2px] border-black shadow-[4px_4px_0px_0px_rgba(0,0,0,1)] hover:translate-x-[2px] hover:translate-y-[2px] hover:shadow-none transition-all cursor-pointer"
              >
                ✕
              </button>
            </motion.div>
          </motion.div>
        )}
      </AnimatePresence>
    </>
  );
}

export default function Events() {
  const [filter, setFilter] = useState("ALL");

  const categories = useMemo(() => {
    const types = new Set(eventsData.map((e) => e.type));
    return [
      "ALL",
      "ODD SEMESTER",
      "EVEN SEMESTER",
      ...Array.from(types).sort(),
    ];
  }, []);

  const eventsStructure = useMemo(() => {
    const filtered = eventsData.filter((e) => {
      if (filter === "ALL") return true;
      if (filter === "ODD SEMESTER") {
        const ODD_MONTHS = ["JUL", "AUG", "SEP", "OCT", "NOV", "DEC"];
        return ODD_MONTHS.includes(getMonthFromDate(e.date));
      }
      if (filter === "EVEN SEMESTER") {
        const EVEN_MONTHS = ["JAN", "FEB", "MAR", "APR", "MAY", "JUN"];
        return EVEN_MONTHS.includes(getMonthFromDate(e.date));
      }
      return e.type === filter;
    });

    const grouped = filtered.reduce((acc, event, index) => {
      const mStr = getMonthFromDate(event.date);
      const yearStr = event.year || "2024";
      const year = parseInt(yearStr);

      const ODD_MONTHS = ["JUL", "AUG", "SEP", "OCT", "NOV", "DEC"];
      const EVEN_MONTHS = ["JAN", "FEB", "MAR", "APR", "MAY", "JUN"];

      let acYear, sem;
      if (ODD_MONTHS.includes(mStr)) {
        acYear = `${year}/${String(year + 1).slice(-2)}`;
        sem = "ODD";
      } else if (EVEN_MONTHS.includes(mStr)) {
        acYear = `${year - 1}/${String(year).slice(-2)}`;
        sem = "EVEN";
      } else {
        acYear = yearStr;
        sem = "UNKNOWN";
      }

      if (!acc[acYear]) acc[acYear] = {};
      if (!acc[acYear][sem]) acc[acYear][sem] = {};
      if (!acc[acYear][sem][mStr]) acc[acYear][sem][mStr] = [];

      acc[acYear][sem][mStr].push({
        ...event,
        eventId: event.id ?? event.slug ?? index + 1,
      });
      return acc;
    }, {});

    const sortedAcYears = Object.keys(grouped).sort((a, b) =>
      b.localeCompare(a),
    );

    return sortedAcYears.map((acYear) => {
      const semsObj = grouped[acYear];

      const sortedSems = Object.keys(semsObj).sort((a, b) => {
        if (a === "EVEN" && b === "ODD") return -1;
        if (a === "ODD" && b === "EVEN") return 1;
        return 0;
      });

      const semesters = sortedSems.map((sem) => {
        const monthsObj = semsObj[sem];
        const sortedMonths = Object.keys(monthsObj).sort((a, b) => {
          const idxA = SHORT_MONTHS.indexOf(a);
          const idxB = SHORT_MONTHS.indexOf(b);
          if (idxA === -1) return 1;
          if (idxB === -1) return -1;
          return idxB - idxA; // Descending order
        });

        let eventsCount = 0;
        let semImages = [];
        const months = sortedMonths.map((m) => {
          eventsCount += monthsObj[m].length;

          monthsObj[m].forEach((e) => {
            if (e.image && !e.image.includes("KaggleSmallImage")) {
              semImages.push(e.image);
            }
          });

          return {
            month: m,
            events: monthsObj[m],
          };
        });

        semImages = [...new Set(semImages)];

        return {
          semester: sem,
          name:
            sem === "ODD"
              ? "ODD SEMESTER"
              : sem === "EVEN"
                ? "EVEN SEMESTER"
                : "OTHER EVENTS",
          dateRange:
            sem === "ODD" ? "JUL — DEC" : sem === "EVEN" ? "JAN — JUN" : "",
          eventsCount,
          months,
          images: semImages,
        };
      });

      return { academicYear: acYear, semesters };
    });
  }, [filter]);

  const [activeCardId, setActiveCardId] = useState(null);

  // Adjusted for new structure
  const { activeYear, activeMonth } = useMemo(() => {
    if (!activeCardId) {
      return {
        activeYear: eventsStructure[0]?.academicYear,
        activeMonth: eventsStructure[0]?.semesters[0]?.months[0]?.month,
      };
    }

    for (const yearGroup of eventsStructure) {
      for (const semGroup of yearGroup.semesters) {
        for (const monthGroup of semGroup.months) {
          if (
            monthGroup.events.some((e) => String(e.eventId) === activeCardId)
          ) {
            return {
              activeYear: yearGroup.academicYear,
              activeMonth: monthGroup.month,
            };
          }
        }
      }
    }
    return {
      activeYear: eventsStructure[0]?.academicYear,
      activeMonth: eventsStructure[0]?.semesters[0]?.months[0]?.month,
    };
  }, [activeCardId, eventsStructure]);

  const containerRef = useRef(null);
  const { scrollYProgress } = useScroll({
    target: containerRef,
    offset: ["start center", "end center"],
  });

  useEffect(() => {
    let rafId;
    const handleScroll = () => {
      rafId = requestAnimationFrame(() => {
        const cards = document.querySelectorAll(".event-card");
        if (!cards.length) return;

        const centerY = window.innerHeight / 2;
        const centerX = window.innerWidth / 2;

        let minDistance = Infinity;
        let closestId = null;

        cards.forEach((card) => {
          const rect = card.getBoundingClientRect();
          const cardCenterY = rect.top + rect.height / 2;
          const cardCenterX = rect.left + rect.width / 2;

          const dist = Math.sqrt(
            Math.pow(cardCenterY - centerY, 2) +
              Math.pow(cardCenterX - centerX, 2),
          );

          if (dist < minDistance) {
            minDistance = dist;
            closestId = card.dataset.id;
          }
        });

        setActiveCardId(closestId);
      });
    };

    window.addEventListener("scroll", handleScroll, { passive: true });
    window.addEventListener("resize", handleScroll, { passive: true });

    handleScroll();

    return () => {
      window.removeEventListener("scroll", handleScroll);
      window.removeEventListener("resize", handleScroll);
      cancelAnimationFrame(rafId);
    };
  }, [filter]);

  return (
    <div className="space-y-16 pb-20 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 mt-6">
      <section>
        <SectionHeader
          badgeText="OUR JOURNEY"
          title="THINGS WE'VE DONE."
          subtitle="A collection of events, workshops, seminars and experiences from ACM SIGAI."
        />

        <ImageCarousel />

        <div className="w-full mb-12">
          <div className="flex flex-wrap justify-start gap-2.5 w-full">
            {categories.map((cat) => (
              <button
                key={cat}
                onClick={() => setFilter(cat)}
                className={`px-4 py-1.5 font-bold text-xs uppercase border-[1.5px] border-black rounded-lg transition-all ${
                  filter === cat
                    ? "bg-retroBlue text-black shadow-none translate-y-[1px] translate-x-[1px]"
                    : "bg-white text-black shadow-[2px_2px_0px_0px_rgba(0,0,0,1)] hover:bg-slate-50"
                }`}
              >
                {cat}
              </button>
            ))}
          </div>
        </div>

        <div className="relative flex max-w-full">
          {/* TIMELINE SPINE */}
          <div className="w-6 md:w-8 lg:w-12 shrink-0 relative mr-3 md:mr-4 lg:mr-6 flex justify-center">
            <div className="absolute top-0 bottom-0 w-[2.5px] md:w-[3px] bg-white/20 rounded-full" />

            <motion.div
              className="absolute top-0 bottom-0 w-[2.5px] md:w-[3px] bg-white rounded-full origin-top"
              style={{ scaleY: scrollYProgress }}
            />
          </div>

          <div
            className="flex-1 w-full min-w-0 pb-12 relative"
            ref={containerRef}
          >
            {eventsStructure.map((acYearData, yIdx) => {
              const isActiveYear = activeYear === acYearData.academicYear;

              return (
                <div key={acYearData.academicYear} className="relative">
                  {acYearData.semesters.map((sem, sIdx) => {
                    const globalIndex = yIdx * 2 + sIdx;
                    return (
                      <div
                        key={sem.semester}
                        className="mb-24 relative last:mb-0"
                      >
                        {/* Timeline Marker for Semester Chapter */}
                        <div className="absolute top-10 -left-[36px] md:-left-[44px] lg:-left-[60px] z-10 flex items-center justify-center w-6 h-6">
                          <motion.div
                            className={`rounded-full transition-all duration-300 w-4 h-4 border-[2.5px] border-black bg-white shadow-[2px_2px_0px_0px_rgba(0,0,0,1)]`}
                          />
                        </div>

                        <SemesterChapter
                          academicYear={acYearData.academicYear}
                          semester={sem}
                          index={globalIndex}
                        />

                        <div className="space-y-12 mt-12 pl-2 md:pl-6">
                          {sem.months.map(({ month, events }) => {
                            const isActiveMonth =
                              activeYear === acYearData.academicYear &&
                              activeMonth === month;

                            return (
                              <div key={month} className="relative">
                                {/* Timeline Marker Node for MONTH */}
                                <div className="absolute top-1.5 -left-[44px] md:-left-[68px] lg:-left-[84px] z-10 flex items-center justify-center w-6 h-6">
                                  <motion.div
                                    className={`rounded-full transition-all duration-300 ${
                                      isActiveMonth
                                        ? "w-2.5 h-2.5 border-[2px] border-black bg-retroPink shadow-[1.5px_1.5px_0px_0px_rgba(0,0,0,1)] scale-125"
                                        : "w-1.5 h-1.5 border-[1.5px] border-black/30 bg-white"
                                    }`}
                                  />
                                </div>

                                {/* MONTH LABEL */}
                                {month !== "UNK" && (
                                  <motion.div
                                    className="mb-5 flex justify-start items-center"
                                    initial={{ opacity: 0, x: -10 }}
                                    whileInView={{ opacity: 1, x: 0 }}
                                    viewport={{ once: false, amount: 0.8 }}
                                    transition={{ duration: 0.3 }}
                                  >
                                    <div
                                      className={`text-[11px] font-bold px-3 py-1 border-[1.5px] border-black rounded-md uppercase tracking-widest transition-all duration-300 ${
                                        isActiveMonth
                                          ? "bg-white text-black shadow-[2px_2px_0px_0px_rgba(0,0,0,1)] -rotate-1"
                                          : "bg-white text-black/50 border-black/20 shadow-none"
                                      }`}
                                    >
                                      {month}
                                    </div>
                                  </motion.div>
                                )}

                                <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
                                  {events.map((event, index) =>
                                    event.featured ? (
                                      <FeaturedEventCard
                                        key={event.eventId}
                                        event={event}
                                        index={index}
                                        isActive={
                                          activeCardId === String(event.eventId)
                                        }
                                      />
                                    ) : (
                                      <EventCard
                                        key={event.eventId}
                                        event={event}
                                        index={index}
                                        isActive={
                                          activeCardId === String(event.eventId)
                                        }
                                      />
                                    ),
                                  )}
                                </div>
                              </div>
                            );
                          })}
                        </div>
                      </div>
                    );
                  })}
                </div>
              );
            })}
          </div>
        </div>
      </section>
    </div>
  );
}
