import React from 'react';
import { FaArrowRight, FaPenNib, FaBookmark, FaHashtag, FaBolt, FaTerminal, FaBrain, FaEye, FaMicrochip } from 'react-icons/fa6';
import { StickerTicker } from '../components/ui/StickerTicker';

const CATEGORIES = [
  { name: 'AUTONOMOUS AGENTS', count: '14 EDITORIALS', icon: <FaTerminal />, color: 'bg-retroPink' },
  { name: 'NEURAL NETWORKS', count: '09 BREAKTHROUGHS', icon: <FaBrain />, color: 'bg-retroYellow' },
  { name: 'COMPUTER VISION', count: '12 TUTORIALS', icon: <FaEye />, color: 'bg-retroGreen' },
  { name: 'HARDWARE & SILICON', count: '08 BENCHMARKS', icon: <FaMicrochip />, color: 'bg-retroBlue' },
];

const FEATURED_BLOGS = [
  {
    id: 1,
    category: 'LLMs & AGENTS',
    readTime: '6 MIN READ',
    title: 'OPTIMIZING LOCAL LLMs FOR STUDENT RESEARCH PROJECTS AT TCET',
    author: 'BY RHOAN P. // TECHNICAL HEAD',
    img: 'https://images.unsplash.com/photo-1618005182384-a83a8bd57fbe?q=80&w=800&auto=format&fit=crop',
    accent: 'bg-retroYellow',
  },
  {
    id: 2,
    category: 'COMPUTER VISION',
    readTime: '4 MIN READ',
    title: 'EDGE AI & OpenCV: BUILDING REAL-TIME SAFETY SYSTEM FOR TCET CAMPUS',
    author: 'BY ANANYA S. // VISION LAB LEAD',
    img: 'https://images.unsplash.com/photo-1507146426996-ef05306b995a?q=80&w=800&auto=format&fit=crop',
    accent: 'bg-retroPink',
  },
  {
    id: 3,
    category: 'DEEP LEARNING',
    readTime: '8 MIN READ',
    title: 'BEHIND THE SCENES OF OUR WINNING ZEPHYR HACKATHON MODEL ARCHITECTURE',
    author: 'BY KABIR M. // AI RESEARCHER',
    img: 'https://images.unsplash.com/photo-1620712943543-bcc4688e7485?q=80&w=800&auto=format&fit=crop',
    accent: 'bg-retroGreen',
  },
  {
    id: 4,
    category: 'ROBOTICS & EMBEDDED',
    readTime: '5 MIN READ',
    title: 'TENSORRT ON JETSON NANO: DEPLOYING COMPACT MODELS AT LOW LATENCY',
    author: 'BY PRIYA N. // HARDWARE TEAM',
    img: 'https://images.unsplash.com/photo-1526374965328-7f61d4dc18c5?q=80&w=800&auto=format&fit=crop',
    accent: 'bg-retroBlue',
  },
  {
    id: 5,
    category: 'ETHICS & SOCIETY',
    readTime: '7 MIN READ',
    title: 'THE ALGORITHMIC BIAS AUDIT: WHY RESPONSIBLE AI MATTERS TODAY',
    author: 'BY AARAV K. // ACM SIGAI EDITOR',
    img: 'https://images.unsplash.com/photo-1558494949-ef010cbdcc31?q=80&w=800&auto=format&fit=crop',
    accent: 'bg-retroYellow',
  },
  {
    id: 6,
    category: 'RESEARCH REVIEWS',
    readTime: '5 MIN READ',
    title: 'HOW TO GET YOUR FIRST AI RESEARCH PAPER PUBLISHED AS AN UNDERGRAD',
    author: 'BY TCET ACM SIGAI FACULTY MENTORS',
    img: 'https://images.unsplash.com/photo-1518770660439-4636190af475?q=80&w=800&auto=format&fit=crop',
    accent: 'bg-retroPink',
  },
];

export const Blogs = () => {
  return (
    <div className="min-h-screen bg-[#F7F4EE] text-black font-sans relative selection:bg-retroPink selection:text-black pb-12">
      <StickerTicker />

    {/* Replace top-12 with top-0 and add h-screen */}
<div className="hidden xl:flex fixed left-0 top-0 h-screen w-9 bg-retroYellow border-r-3 border-black flex-col justify-between items-center py-6 z-40">
  <span className="font-black text-[11px] uppercase tracking-widest -rotate-90 whitespace-nowrap">
    SIGAI CONTRIBUTORS ✍️
  </span>
  <FaPenNib className="w-4 h-4 text-black" />
</div>
{/* Replace top-12 with top-0 and add h-screen */}
<div className="hidden xl:flex fixed right-0 top-0 h-screen w-9 bg-retroGreen border-l-3 border-black flex-col justify-between items-center py-6 z-40">
  <span className="font-black text-[11px] uppercase tracking-widest rotate-90 whitespace-nowrap">
    TCET ACM ARCHIVES ⚡
  </span>
  <FaBookmark className="w-4 h-4 text-black" />
</div>

      {/* --- MAIN CONTAINER --- */}
      <div className="max-w-7xl mx-auto px-4 sm:px-8 xl:px-14 pt-8">

        {/* --- 1. EDITORIAL HEADER & CATEGORY BAR --- */}
        <header className="border-3 border-black bg-white shadow-brutal-lg rounded-2xl overflow-hidden mb-10">
          <div className="grid grid-cols-1 lg:grid-cols-12 border-b-3 border-black">
            
            {/* Title Block */}
            <div className="lg:col-span-4 bg-retroPink p-6 lg:p-8 border-b-3 lg:border-b-0 lg:border-r-3 border-black flex flex-col justify-between relative overflow-hidden">
              <div className="absolute -right-6 -bottom-6 text-black/10 text-9xl font-black select-none pointer-events-none">
                #
              </div>
              <div className="relative z-10">
                <span className="font-black text-[10px] uppercase tracking-widest bg-black text-white px-2.5 py-1 rounded shadow-brutal inline-block mb-3">
                  TCET ACM SIGAI OFFICIAL JOURNAL
                </span>
                <h1 className="text-5xl sm:text-6xl font-black uppercase tracking-tighter leading-none text-black">
                  SIDE <br /> NOTE
                </h1>
              </div>
            </div>

            {/* Interactive Category Blocks */}
            <div className="lg:col-span-8 grid grid-cols-2 sm:grid-cols-4 divide-x-2 divide-y-2 sm:divide-y-0 divide-black bg-white">
              {CATEGORIES.map((cat, index) => (
                <div
                  key={index}
                  className="p-5 flex flex-col justify-between hover:bg-retroYellow transition-all duration-200 cursor-pointer group relative overflow-hidden"
                >
                  <div className={`w-10 h-10 rounded-xl border-2 border-black ${cat.color} flex items-center justify-center text-lg shadow-brutal group-hover:scale-110 group-hover:rotate-6 transition-transform`}>
                    {cat.icon}
                  </div>
                  <div className="mt-6">
                    <h3 className="font-black text-xs uppercase tracking-tight group-hover:underline">
                      {cat.name}
                    </h3>
                    <span className="text-[10px] font-black text-black/60 uppercase tracking-widest mt-0.5 block">
                      {cat.count}
                    </span>
                  </div>
                </div>
              ))}
            </div>
          </div>

          {/* Write CTA Bar */}
          <div className="bg-retroYellow p-4 sm:px-8 flex flex-col sm:flex-row justify-between items-center gap-4">
            <span className="font-black text-xs sm:text-sm uppercase tracking-wide flex items-center gap-2 text-black">
              <FaHashtag className="text-black text-base" /> HAVE A RESEARCH BREAKTHROUGH? SUBMIT YOUR ARTICLE TO TCET SIGAI!
            </span>
            <button className="w-full sm:w-auto px-5 py-2 bg-black text-white text-xs font-black uppercase rounded-xl shadow-brutal hover:bg-retroPink hover:text-black border-2 border-black transition-transform active:translate-y-0.5">
              SUBMIT ARTICLE ✍️
            </button>
          </div>
        </header>

        {/* --- 2. HERO SPLIT MAGAZINE COVER --- */}
        <section className="border-3 border-black rounded-2xl overflow-hidden shadow-brutal-lg mb-10 relative bg-black">
          <div className="grid grid-cols-1 md:grid-cols-2">
            
            {/* Left Poster */}
            <div className="relative h-80 sm:h-[420px] border-b-3 md:border-b-0 md:border-r-3 border-black overflow-hidden group">
              {/* Left Poster */}
<img
  src="https://images.unsplash.com/photo-1618005182384-a83a8bd57fbe?q=80&w=1000&auto=format&fit=crop"
  alt="Abstract AI Art"
  className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-500"
/>


              <div className="absolute top-4 left-4 bg-retroGreen border-2 border-black px-3 py-1.5 font-black text-xs uppercase shadow-brutal flex items-center gap-2">
                <span>👈</span> CHAPTER PUBLICATIONS
              </div>
            </div>

          {/* Right Poster: Pure Retro Banner */}
<div className="relative h-80 sm:h-[420px] bg-retroYellow flex flex-col items-center justify-center p-6 border-t-3 md:border-t-0 border-black">
  <div className="border-4 border-black bg-retroPink p-6 shadow-brutal-lg text-center transform -rotate-2">
    <h2 className="text-5xl sm:text-7xl font-black text-black uppercase tracking-tighter leading-none">
      SIDE NOTE
    </h2>
    <span className="font-mono text-xs font-black uppercase tracking-widest bg-black text-white px-2 py-1 mt-3 inline-block">
      TCET ACM SIGAI ISSUE #01
    </span>
  </div>
</div>
          </div>
        </section>

        {/* --- 3. TRENDING HEADLINES BAR --- */}
        <div className="border-3 border-black bg-white rounded-2xl p-3.5 shadow-brutal mb-12 flex flex-col md:flex-row items-center gap-3">
          <span className="bg-black text-retroYellow text-[10px] font-black uppercase px-3 py-1.5 rounded-lg shrink-0 flex items-center gap-1.5 border border-black">
            <FaBolt className="text-retroPink" /> TRENDING AT TCET SIGAI
          </span>
          <div className="flex-1 flex flex-wrap items-center justify-around gap-4 text-xs font-black uppercase">
            <span className="hover:text-retroPink cursor-pointer transition-colors">❖ ZEPHYR HACKATHON WINNERS ↗</span>
            <span className="hover:text-retroPink cursor-pointer transition-colors">❖ AGENTIC WORKFLOW SEMINAR ↗</span>
            <span className="hover:text-retroPink cursor-pointer transition-colors">❖ PYTORCH WORKSHOP RECAP ↗</span>
          </div>
        </div>

        {/* --- 4. VIBRANT EDITORIAL MISSION STATEMENT --- */}
        <section className="text-center max-w-4xl mx-auto mb-16 px-4">
          <div className="w-10 h-10 rounded-full border-2 border-black bg-retroYellow mx-auto mb-4 flex items-center justify-center font-black text-lg shadow-brutal">
            ©
          </div>
          <p className="font-black text-xl sm:text-3xl uppercase leading-snug tracking-tight text-black">
            WE PUBLISH DISCOVERIES, CODE INSIGHTS, AND RESEARCH PAPERS WRITTEN BY TCET ACM SIGAI MEMBERS. COVERING EVERYTHING FROM DEEP LEARNING ARCHITECTURES TO EMBEDDED SYSTEM BENCHMARKS. BUILT FOR ENGINEERS WHO LIKE TO BUILD, QUESTION, AND PUSH BEYOND THE CURRICULUM.
          </p>
        </section>

        {/* --- 5. FEATURED ARTICLES GRID --- */}
        <section className="mb-16">
          <div className="flex justify-between items-center mb-6 pb-3 border-b-3 border-black">
            <h2 className="font-black text-lg uppercase tracking-wider bg-black text-white px-3.5 py-1 rounded-lg shadow-brutal">
              FEATURED STORIES
            </h2>
            <button className="font-black text-xs uppercase flex items-center gap-2 hover:text-retroPink transition-colors bg-white px-3 py-1 border-2 border-black rounded-lg shadow-brutal">
              VIEW ALL STORIES <FaArrowRight />
            </button>
          </div>

          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-8">
            {FEATURED_BLOGS.map((blog) => (
              <div
                key={blog.id}
                className="bg-white border-3 border-black rounded-2xl overflow-hidden shadow-brutal hover:shadow-brutal-lg transition-all duration-200 group flex flex-col justify-between"
              >
                <div>
                  {/* Card Image */}
                  <div className="relative h-52 border-b-3 border-black overflow-hidden">
                    <img
                      src={blog.img}
                      alt={blog.title}
                      className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-300"
                    />
                    <div className="absolute top-3 left-3">
                      <span className={`text-black text-[10px] font-black uppercase px-2.5 py-1 rounded-md border-2 border-black shadow-brutal ${blog.accent}`}>
                        {blog.category}
                      </span>
                    </div>
                    <span className="absolute top-3 right-3 bg-white border-2 border-black text-black text-[10px] font-black uppercase px-2.5 py-1 rounded-md shadow-brutal">
                      {blog.readTime}
                    </span>
                  </div>

                  {/* Card Title */}
                  <div className="p-5">
                    <h3 className="font-black text-lg uppercase leading-snug group-hover:text-retroPink transition-colors">
                      {blog.title}
                    </h3>
                  </div>
                </div>

                {/* Card Footer */}
                <div className="px-5 pb-5 pt-3 border-t-2 border-black/10 flex justify-between items-center text-[11px] font-black uppercase text-black/70">
                  <span>{blog.author}</span>
                  <FaArrowRight className="group-hover:translate-x-1.5 transition-transform text-black text-sm" />
                </div>
              </div>
            ))}
          </div>
        </section>

        {/* --- 6. YELLOW CALL-TO-ACTION CARD --- */}
        <section className="bg-retroYellow border-3 border-black rounded-2xl p-8 sm:p-12 shadow-brutal-lg mb-8 relative overflow-hidden">
          <div className="grid grid-cols-1 lg:grid-cols-12 items-center gap-6">
            <div className="lg:col-span-8">
              <h2 className="text-3xl sm:text-5xl font-black uppercase tracking-tighter leading-none mb-3 text-black">
                WANT TO PUBLISH YOUR RESEARCH WITH TCET ACM SIGAI?
              </h2>
              <p className="font-black text-xs sm:text-sm uppercase text-black/80 max-w-xl leading-relaxed">
                Whether it's a project deep dive, workshop recap, or machine learning tutorial, we'd love to showcase your work on Side Note.
              </p>
            </div>
            
            <div className="lg:col-span-4 flex flex-col items-start lg:items-end justify-center">
              <button className="w-full sm:w-auto px-8 py-4 bg-black text-white font-black text-sm uppercase rounded-xl border-2 border-black shadow-brutal hover:bg-retroPink hover:text-black transition-transform active:translate-y-0.5">
                SUBMIT YOUR ARTICLE
              </button>
            </div>
          </div>
        </section>

      </div>
    </div>
  );
};

export default Blogs;