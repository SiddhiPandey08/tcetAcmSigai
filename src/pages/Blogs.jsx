// src/pages/Blogs.jsx
import React from "react";
import {
  FaArrowRight,
  FaPenNib,
  FaRobot,
  FaBrain,
  FaComments,
  FaEye,
} from "react-icons/fa6";
import StickerTicker from "../components/ui/StickerTicker";
import { SectionHeader } from "../components/ui/SectionHeader";

const CATEGORIES = [
  {
    name: "MACHINE LEARNING",
    count: "14 articles",
    Icon: FaRobot,
    bg: "bg-retroYellow",
  },
  {
    name: "DEEP LEARNING",
    count: "09 articles",
    Icon: FaBrain,
    bg: "bg-retroPink",
  },
  {
    name: "LLMS & AGENTS",
    count: "12 articles",
    Icon: FaComments,
    bg: "bg-retroBlue",
  },
  {
    name: "COMPUTER VISION",
    count: "08 articles",
    Icon: FaEye,
    bg: "bg-retroGreen",
  },
];

const CATEGORY_COLORS = {
  "Machine Learning": "bg-retroYellow text-black",
  "Deep Learning": "bg-retroPink text-black",
  "LLMs & Agents": "bg-retroBlue text-white",
  "Computer Vision": "bg-retroGreen text-black",
  Research: "bg-black text-white",
};

const FEATURED_BLOGS = [
  {
    id: 1,
    category: "LLMs & Agents",
    readTime: "6 min read",
    title: "WHY SMALL SPECIFIC MODELS STILL MATTER IN 2026",
    author: "Aarav K.",
    img: "https://images.unsplash.com/photo-1555255707-c07966088b7b?q=80&w=800&auto=format&fit=crop",
  },
  {
    id: 2,
    category: "Computer Vision",
    readTime: "4 min read",
    title: "SPATIAL AI & AUTONOMOUS DRIVING ARCHITECTURES",
    author: "Alex Smith R.",
    img: "https://images.unsplash.com/photo-1507146426996-ef05306b995a?q=80&w=800&auto=format&fit=crop",
  },
  {
    id: 3,
    category: "Deep Learning",
    readTime: "8 min read",
    title: "THE NEW MATHEMATICAL LANGUAGE OF TRANSFORMERS",
    author: "Salman R.",
    img: "https://images.unsplash.com/photo-1518770660439-4636190af475?q=80&w=800&auto=format&fit=crop",
  },
  {
    id: 4,
    category: "Machine Learning",
    readTime: "5 min read",
    title: "NEURAL SYMBOLIC AI: GIVING MACHINES REASONING",
    author: "Nisha P.",
    img: "https://images.unsplash.com/photo-1526374965328-7f61d4dc18c5?q=80&w=800&auto=format&fit=crop",
  },
  {
    id: 5,
    category: "Research",
    readTime: "7 min read",
    title: "WHY THE BEST AI INSIGHTS HAPPEN IN OPEN SOURCE",
    author: "Jane Rose",
    img: "https://images.unsplash.com/photo-1550439062-609e1531270e?q=80&w=800&auto=format&fit=crop",
  },
  {
    id: 6,
    category: "Deep Learning",
    readTime: "5 min read",
    title: "HARDWARE ACCELERATION: GPU VS NPU BENCHMARKS",
    author: "Sam Johnson",
    img: "https://images.unsplash.com/photo-1544197150-b99a580bb7a8?q=80&w=800&auto=format&fit=crop",
  },
];

export default function Blogs() {
  return (
    <div className="space-y-16 pb-20 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 mt-6">
      <section>
        {/* Uniform SectionHeader */}
        <SectionHeader
          badgeText="OUR INSIGHTS"
          title="THOUGHTS & ARTICLES."
          subtitle="Deep dives, technical write-ups, and stories curated by the ACM SIGAI team."
        />

        <div className="min-h-screen text-black font-sans relative selection:bg-retroPink selection:text-black">
          <StickerTicker />

          {/* MAIN CONTENT CONTAINER */}
          <div className="max-w-7xl mx-auto px-4 sm:px-12 xl:px-16 py-6">
            {/* 1. EDITORIAL HEADER & CATEGORY NAVIGATION */}
            <header className="border-3 border-black bg-white shadow-brutal rounded-2xl overflow-hidden mb-8">
              <div className="grid grid-cols-1 md:grid-cols-12 border-b-3 border-black">
                {/* Title Block */}
                <div className="md:col-span-4 bg-retroPink p-6 border-b-3 md:border-b-0 md:border-r-3 border-black flex flex-col justify-between">
                  <div>
                    <span className="font-black text-xs uppercase tracking-widest bg-black text-white px-2 py-0.5 rounded">
                      ACM SIGAI Blogs
                    </span>
                    <h1 className="text-4xl sm:text-5xl font-black uppercase tracking-tighter leading-none mt-3">
                      SIDE <br /> NOTE
                    </h1>
                  </div>
                  <p className="font-bold text-xs mt-4 uppercase text-black/80">
                    Read / Write / Discover AI
                  </p>
                </div>

                {/* Category Nav Blocks */}
                <div className="md:col-span-8 grid grid-cols-2 sm:grid-cols-4 divide-x-2 divide-y-2 sm:divide-y-0 divide-black bg-white">
                  {CATEGORIES.map((cat, index) => (
                    <div
                      key={index}
                      className="p-4 flex flex-col justify-between hover:bg-black/5 transition-colors cursor-pointer group"
                    >
                      <span
                        className={`w-8 h-8 rounded-lg border-2 border-black flex items-center justify-center ${cat.bg} group-hover:scale-110 transition-transform`}
                      >
                        <cat.Icon className="w-3.5 h-3.5 text-black" />
                      </span>
                      <div>
                        <h3 className="font-black text-xs uppercase tracking-tight mt-4">
                          {cat.name}
                        </h3>
                        <span className="text-[10px] font-bold text-black/60 uppercase">
                          {cat.count}
                        </span>
                      </div>
                    </div>
                  ))}
                </div>
              </div>

              {/* Write CTA Header Strip */}
              <div className="bg-retroYellow p-3 sm:px-6 flex flex-col sm:flex-row justify-between items-center gap-3">
                <span className="font-black text-xs uppercase tracking-wide flex items-center gap-2">
                  <FaPenNib className="text-black" /> Have an article idea?
                  Publish your own research
                </span>
                <button className="w-full sm:w-auto px-4 py-1.5 bg-black text-white text-xs font-black uppercase rounded-lg shadow-brutal hover:bg-retroPink hover:text-black border-2 border-black transition-transform active:translate-y-0.5">
                  Start Writing
                </button>
              </div>
            </header>

            {/* 2. HERO SPLIT MAGAZINE COVER */}
            <section className="border-3 border-black rounded-2xl overflow-hidden shadow-brutal-lg mb-10 relative bg-black">
              <div className="grid grid-cols-1 md:grid-cols-2">
                {/* Left Image Cover */}
                <div className="relative h-72 sm:h-96 border-b-3 md:border-b-0 md:border-r-3 border-black overflow-hidden group">
                  <img
                    src="https://images.unsplash.com/photo-1518770660439-4636190af475?q=80&w=1000&auto=format&fit=crop"
                    alt="Circuit board macro"
                    className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-500"
                  />
                  <div className="absolute top-4 left-4 bg-retroGreen border-2 border-black px-3 py-1.5 font-black text-xs uppercase shadow-brutal flex items-center gap-1.5 -rotate-2">
                    This way to AI <FaArrowRight className="w-3 h-3" />
                  </div>
                </div>

                {/* Right Image Cover & Overlay Title */}
                <div className="relative h-72 sm:h-96 overflow-hidden group">
                  <img
                    src="https://images.unsplash.com/photo-1555255707-c07966088b7b?q=80&w=1000&auto=format&fit=crop"
                    alt="AI visualization"
                    className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-500"
                  />
                  <div className="absolute inset-0 bg-black/40 flex items-center justify-center p-4">
                    <h2 className="text-5xl sm:text-7xl lg:text-8xl font-black text-white uppercase tracking-tighter drop-shadow-[4px_4px_0px_rgba(0,0,0,1)] text-center">
                      SIDE NOTE
                    </h2>
                  </div>
                </div>
              </div>
            </section>

            {/* 3. TICKER BAR FOR TRENDING HEADLINES */}
            <div className="border-3 border-black bg-white rounded-xl p-3 shadow-brutal mb-12 flex flex-col md:flex-row items-center gap-3">
              <span className="bg-black text-white text-[10px] font-black uppercase px-2.5 py-1 rounded shrink-0">
                Latest Insights
              </span>
              <div className="flex-1 flex flex-wrap items-center justify-around gap-4 text-xs font-bold uppercase">
                <span className="hover:text-retroPink cursor-pointer transition-colors">
                  ❖ Why analog thinking wins in AI ↗
                </span>
                <span className="hover:text-retroBlue cursor-pointer transition-colors">
                  ❖ Agentic workflows explained ↗
                </span>
                <span className="hover:text-retroGreen cursor-pointer transition-colors">
                  ❖ PyTorch 2.5 optimizations ↗
                </span>
              </div>
            </div>

            {/* 4. INTRO EDITORIAL STATEMENT */}
            <section className="text-center max-w-3xl mx-auto mb-16 px-4">
              <div className="w-8 h-8 rounded-full border-2 border-black bg-retroYellow mx-auto mb-4 flex items-center justify-center font-black">
                ©
              </div>
              <p className="font-black text-lg sm:text-2xl uppercase leading-snug tracking-tight text-black/90">
                We collect fresh articles, technical tutorials & honest opinions
                from student developers & researchers at SIGAI. Read about deep
                learning, computer vision & LLMs.
              </p>
            </section>

            {/* 5. FEATURED ARTICLES GRID */}
            <section className="mb-16">
              <div className="flex justify-between items-center mb-6 pb-2 border-b-3 border-black">
                <h2 className="font-black text-lg uppercase tracking-wider bg-black text-white px-3 py-1 rounded">
                  Featured Stories
                </h2>

                <button className="font-black text-xs uppercase flex items-center gap-1.5 hover:text-retroPink transition-colors">
                  View all articles <FaArrowRight />
                </button>
              </div>

              <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6">
                {FEATURED_BLOGS.map((blog) => (
                  <div
                    key={blog.id}
                    className="bg-white border-3 border-black rounded-2xl overflow-visible shadow-brutal hover:shadow-brutal-lg hover:-translate-y-1 transition-all duration-200 group flex flex-col justify-between relative"
                  >
                    <div>
                      {/* Image Container with Badges */}
                      <div className="relative h-44 border-b-3 border-black overflow-hidden rounded-t-[13px]">
                        <img
                          src={blog.img}
                          alt={blog.title}
                          className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-300"
                        />
                        <div className="absolute top-2 left-2 flex gap-1.5">
                          <span
                            className={`text-[9px] font-black uppercase px-2 py-0.5 rounded border-2 border-black ${
                              CATEGORY_COLORS[blog.category]
                            }`}
                          >
                            {blog.category}
                          </span>
                        </div>
                        <span className="absolute top-2 right-2 bg-white border-2 border-black text-black text-[9px] font-black uppercase px-2 py-0.5 rounded shadow-brutal">
                          {blog.readTime}
                        </span>
                      </div>

                      {/* Content Area */}
                      <div className="p-4">
                        <h3 className="font-black text-sm uppercase leading-tight group-hover:text-retroPink transition-colors">
                          {blog.title}
                        </h3>
                      </div>
                    </div>

                    {/* Card Footer */}
                    <div className="px-4 pb-4 pt-2 border-t-2 border-black/10 flex justify-between items-center text-[10px] font-black uppercase text-black/70">
                      <span>{blog.author}</span>
                      <FaArrowRight className="group-hover:translate-x-1 transition-transform" />
                    </div>
                  </div>
                ))}
              </div>
            </section>

            {/* 6. CALL-TO-ACTION BANNER */}
            <section className="bg-retroYellow border-3 border-black rounded-2xl p-6 sm:p-10 shadow-brutal-lg mb-12 relative overflow-hidden">
              <div className="grid grid-cols-1 md:grid-cols-12 items-center gap-6">
                <div className="md:col-span-8">
                  <h2 className="text-3xl sm:text-5xl font-black uppercase tracking-tighter leading-none mb-3">
                    Got a unique AI story worth sharing?
                  </h2>
                  <p className="font-bold text-xs sm:text-sm uppercase text-black/80 max-w-xl">
                    We're always looking for student research, tutorial guides,
                    and original perspectives. If you have an idea or draft —
                    we'd love to publish it!
                  </p>
                </div>

                <div className="md:col-span-4 flex flex-col items-start md:items-end justify-center">
                  <button className="w-full sm:w-auto px-6 py-3 bg-black text-white font-black text-sm uppercase rounded-xl border-2 border-black shadow-brutal hover:bg-retroPink hover:text-black transition-transform active:translate-y-0.5 flex items-center gap-2">
                    <FaPenNib /> Write for Side Note
                  </button>
                </div>
              </div>
            </section>
          </div>
        </div>
      </section>
    </div>
  );
}
