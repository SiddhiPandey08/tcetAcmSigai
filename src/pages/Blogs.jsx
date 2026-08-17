import React from "react";
import {
  FaArrowRight,
  FaPenNib,
  FaMagnifyingGlass,
  FaBookmark,
  FaHashtag,
} from "react-icons/fa6";

const CATEGORIES = [
  { name: "MACHINE LEARNING", count: "14 articles", icon: "🤖" },
  { name: "DEEP LEARNING", count: "09 articles", icon: "🧠" },
  { name: "LLMS & AGENTS", count: "12 articles", icon: "💬" },
  { name: "COMPUTER VISION", count: "08 articles", icon: "👁️" },
];

const FEATURED_BLOGS = [
  {
    id: 1,
    category: "LLMs & AGENTS",
    readTime: "6 MIN READ",
    title: "WHY SMALL SPECIFIC MODELS STILL MATTER IN 2026",
    author: "BY AARAV K.",
    img: "https://images.unsplash.com/photo-1618005182384-a83a8bd57fbe?q=80&w=800&auto=format&fit=crop",
  },
  {
    id: 2,
    category: "COMPUTER VISION",
    readTime: "4 MIN READ",
    title: "SPATIAL AI & AUTONOMOUS DRIVING ARCHITECTURES",
    author: "BY ALEX SMITH R.",
    img: "https://images.unsplash.com/photo-1507146426996-ef05306b995a?q=80&w=800&auto=format&fit=crop",
  },
  {
    id: 3,
    category: "DEEP LEARNING",
    readTime: "8 MIN READ",
    title: "THE NEW MATHEMATICAL LANGUAGE OF TRANSFORMERS",
    author: "BY SALMAN R.",
    img: "https://images.unsplash.com/photo-1620712943543-bcc4688e7485?q=80&w=800&auto=format&fit=crop",
  },
  {
    id: 4,
    category: "MACHINE LEARNING",
    readTime: "5 MIN READ",
    title: "NEURAL SYMBOLIC AI: GIVING MACHINES REASONING",
    author: "BY NISHA P.",
    img: "https://images.unsplash.com/photo-1526374965328-7f61d4dc18c5?q=80&w=800&auto=format&fit=crop",
  },
  {
    id: 5,
    category: "RESEARCH",
    readTime: "7 MIN READ",
    title: "WHY THE BEST AI INSIGHTS HAPPEN IN OPEN SOURCE",
    author: "BY JANE ROSE",
    img: "https://images.unsplash.com/photo-1558494949-ef010cbdcc31?q=80&w=800&auto=format&fit=crop",
  },
  {
    id: 6,
    category: "DEEP LEARNING",
    readTime: "5 MIN READ",
    title: "HARDWARE ACCELERATION: GPU VS NPU BENCHMARKS",
    author: "BY SAM JOHNSON",
    img: "https://images.unsplash.com/photo-1518770660439-4636190af475?q=80&w=800&auto=format&fit=crop",
  },
];

const Blogs = () => {
  return (
    <div className="min-h-screen bg-[#F4EFEA] text-black font-sans relative selection:bg-retroPink selection:text-black">
      {/* --- TOP BANNER TICKER --- */}
      <div className="bg-retroPink border-b-3 border-black py-1.5 px-4 overflow-hidden flex items-center justify-between text-xs font-black uppercase tracking-wider">
        <div className="flex items-center gap-6 animate-marquee whitespace-nowrap">
          <span>⚡ TECH INSIGHTS</span>
          <span>•</span>
          <span>STUDENT RESEARCH & PAPERS</span>
          <span>•</span>
          <span>TCET SIGAI OFFICIAL BLOG</span>
          <span>•</span>
          <span>NEW ARTICLE EVERY WEEK</span>
        </div>
      </div>

      {/* --- SIDEBAR STRIPS (Absolute Left & Right Vertical Bars) --- */}
      <div className="hidden xl:flex fixed left-0 top-12 bottom-0 w-8 bg-retroYellow border-r-3 border-black flex-col justify-between items-center py-6 z-40">
        <span className="font-black text-[10px] uppercase tracking-widest -rotate-90 whitespace-nowrap">
          MEET THE RESEARCHERS
        </span>
        <FaPenNib className="w-3.5 h-3.5" />
      </div>

      <div className="hidden xl:flex fixed right-0 top-12 bottom-0 w-8 bg-retroBlue border-l-3 border-black flex-col justify-between items-center py-6 z-40">
        <span className="font-black text-[10px] uppercase tracking-widest rotate-90 whitespace-nowrap">
          SEARCH ARTICLES 🔍
        </span>
        <FaBookmark className="w-3.5 h-3.5" />
      </div>

      {/* --- MAIN CONTENT CONTAINER --- */}
      <div className="max-w-7xl mx-auto px-4 sm:px-8 xl:px-12 py-6">
        {/* --- 1. EDITORIAL HEADER & CATEGORY NAVIGATION --- */}
        <header className="border-3 border-black bg-white shadow-brutal rounded-2xl overflow-hidden mb-8">
          <div className="grid grid-cols-1 md:grid-cols-12 border-b-3 border-black">
            {/* Title Block */}
            <div className="md:col-span-4 bg-retroPink p-6 border-b-3 md:border-b-0 md:border-r-3 border-black flex flex-col justify-between">
              <div>
                <span className="font-black text-xs uppercase tracking-widest bg-black text-white px-2 py-0.5 rounded">
                  ACM SIGAI BLOGS
                </span>
                <h1 className="text-4xl sm:text-5xl font-black uppercase tracking-tighter leading-none mt-3">
                  SIDE <br /> NOTE
                </h1>
              </div>
              <p className="font-bold text-xs mt-4 uppercase text-black/80">
                READ / WRITE / DISCOVER AI
              </p>
            </div>

            {/* Category Nav Blocks */}
            <div className="md:col-span-8 grid grid-cols-2 sm:grid-cols-4 divide-x-2 divide-y-2 sm:divide-y-0 divide-black bg-white">
              {CATEGORIES.map((cat, index) => (
                <div
                  key={index}
                  className="p-4 flex flex-col justify-between hover:bg-retroYellow transition-colors cursor-pointer group"
                >
                  <span className="text-2xl group-hover:scale-125 transition-transform">
                    {cat.icon}
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
              <FaHashtag className="text-black" /> HAVE AN ARTICLE IDEA? PUBLISH
              YOUR OWN RESEARCH
            </span>
            <button className="w-full sm:w-auto px-4 py-1.5 bg-black text-white text-xs font-black uppercase rounded-lg shadow-brutal hover:bg-retroPink hover:text-black border-2 border-black transition-transform active:translate-y-0.5">
              START WRITING ✍️
            </button>
          </div>
        </header>

        {/* --- 2. HERO SPLIT MAGAZINE COVER --- */}
        <section className="border-3 border-black rounded-2xl overflow-hidden shadow-brutal-lg mb-10 relative bg-black">
          <div className="grid grid-cols-1 md:grid-cols-2">
            {/* Left Image Cover */}
            <div className="relative h-72 sm:h-96 border-b-3 md:border-b-0 md:border-r-3 border-black overflow-hidden group">
              <img
                src="https://images.unsplash.com/photo-1618005182384-a83a8bd57fbe?q=80&w=1000&auto=format&fit=crop"
                alt="Main Editorial"
                className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-500"
              />
              <div className="absolute top-4 left-4 bg-retroGreen border-2 border-black px-3 py-1 font-black text-xs uppercase shadow-brutal">
                👉 THIS WAY TO AI
              </div>
            </div>

            {/* Right Image Cover & Huge Overlay Text */}
            <div className="relative h-72 sm:h-96 overflow-hidden group">
              <img
                src="https://images.unsplash.com/photo-1507146426996-ef05306b995a?q=80&w=1000&auto=format&fit=crop"
                alt="Secondary Editorial"
                className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-500 grayscale hover:grayscale-0"
              />
              {/* Massive Center Title Overlay */}
              <div className="absolute inset-0 bg-black/30 flex items-center justify-center p-4">
                <h2 className="text-5xl sm:text-7xl lg:text-8xl font-black text-white uppercase tracking-tighter drop-shadow-[4px_4px_0px_rgba(0,0,0,1)] text-center">
                  SIDE NOTE
                </h2>
              </div>
            </div>
          </div>
        </section>

        {/* --- 3. TICKER BAR FOR TRENDING HEADLINES --- */}
        <div className="border-3 border-black bg-white rounded-xl p-3 shadow-brutal mb-12 flex flex-col md:flex-row items-center gap-3">
          <span className="bg-black text-white text-[10px] font-black uppercase px-2.5 py-1 rounded shrink-0">
            LATEST INSIGHTS
          </span>
          <div className="flex-1 flex flex-wrap items-center justify-around gap-4 text-xs font-bold uppercase">
            <span className="hover:text-retroPink cursor-pointer">
              ❖ WHY ANALOG THINKING WINS IN AI ↗
            </span>
            <span className="hover:text-retroPink cursor-pointer">
              ❖ AGENTIC WORKFLOWS EXPLAINED ↗
            </span>
            <span className="hover:text-retroPink cursor-pointer">
              ❖ PYTORCH 2.5 OPTIMIZATIONS ↗
            </span>
          </div>
        </div>

        {/* --- 4. INTRO EDITORIAL STATEMENT --- */}
        <section className="text-center max-w-3xl mx-auto mb-16 px-4">
          <div className="w-8 h-8 rounded-full border-2 border-black bg-retroYellow mx-auto mb-4 flex items-center justify-center font-black">
            ©
          </div>
          <p className="font-black text-lg sm:text-2xl uppercase leading-snug tracking-tight text-black/90">
            WE COLLECT FRESH ARTICLES, TECHNICAL TUTORIALS & HONEST OPINIONS
            FROM STUDENT DEVELOPERS & RESEARCHERS AT SIGAI. READ ABOUT DEEP
            LEARNING, COMPUTER VISION & LLMS.
          </p>
        </section>

        {/* --- 5. FEATURED ARTICLES GRID (Matches Image Layout) --- */}
        <section className="mb-16">
          <div className="flex justify-between items-center mb-6 pb-2 border-b-3 border-black">
            <h2 className="font-black text-lg uppercase tracking-wider bg-black text-white px-3 py-1 rounded">
              FEATURED STORIES
            </h2>
            <button className="font-black text-xs uppercase flex items-center gap-1.5 hover:text-retroPink transition-colors">
              VIEW ALL ARTICLES <FaArrowRight />
            </button>
          </div>

          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6">
            {FEATURED_BLOGS.map((blog) => (
              <div
                key={blog.id}
                className="bg-white border-3 border-black rounded-2xl overflow-hidden shadow-brutal hover:shadow-brutal-lg transition-all group flex flex-col justify-between"
              >
                <div>
                  {/* Image Container with Badges */}
                  <div className="relative h-44 border-b-3 border-black overflow-hidden">
                    <img
                      src={blog.img}
                      alt={blog.title}
                      className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-300"
                    />
                    <div className="absolute top-2 left-2 flex gap-1.5">
                      <span className="bg-black text-white text-[9px] font-black uppercase px-2 py-0.5 rounded">
                        {blog.category}
                      </span>
                    </div>
                    <span className="absolute top-2 right-2 bg-retroYellow border border-black text-black text-[9px] font-black uppercase px-2 py-0.5 rounded shadow-brutal">
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

        {/* --- 6. YELLOW CALL-TO-ACTION BANNER (Matches Bottom Card in Image) --- */}
        <section className="bg-retroYellow border-3 border-black rounded-2xl p-6 sm:p-10 shadow-brutal-lg mb-12 relative overflow-hidden">
          <div className="grid grid-cols-1 md:grid-cols-12 items-center gap-6">
            <div className="md:col-span-8">
              <h2 className="text-3xl sm:text-5xl font-black uppercase tracking-tighter leading-none mb-3">
                GOT A UNIQUE AI STORY WORTH SHARING?
              </h2>
              <p className="font-bold text-xs sm:text-sm uppercase text-black/80 max-w-xl">
                We're always looking for student research, tutorial guides, and
                original perspectives. If you have an idea or draft—we'd love to
                publish it!
              </p>
            </div>

            <div className="md:col-span-4 flex flex-col items-start md:items-end justify-center">
              <button className="w-full sm:w-auto px-6 py-3 bg-black text-white font-black text-sm uppercase rounded-xl border-2 border-black shadow-brutal hover:bg-retroPink hover:text-black transition-transform active:translate-y-0.5">
                WRITE FOR SIDE NOTE
              </button>
            </div>
          </div>
        </section>
      </div>
    </div>
  );
};
export default Blogs;
