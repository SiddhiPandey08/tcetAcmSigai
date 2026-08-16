import { SectionHeader } from "../components/ui/SectionHeader";
import { Button } from "../components/ui/Button";
import { PhotoTape, PeekabooSticky } from "../components/ui/ScrapbookQuirks";
import { BlogCharm } from "../components/ui/BlogCharm";
import { PeekingRobot } from "../components/ui/PeekingRobot";
import { useState } from "react";

const blogsData = [
  {
    id: 1,
    title: "Understanding Transformer Architectures from Scratch",
    snippet:
      "A visual deep-dive into self-attention mechanisms and how modern LLMs process natural language context.",
    category: "AI RESEARCH",
    author: "Rahul Sharma",
    date: "Aug 12, 2026",
    readTime: "7 MIN READ",
    image:
      "https://images.unsplash.com/photo-1618005182384-a83a8bd57fbe?auto=format&fit=crop&w=800&q=80",
  },
  {
    id: 2,
    title: "Getting Started with PyTorch for Computer Vision",
    snippet:
      "Learn how to build and train your first Convolutional Neural Network (CNN) in under 30 minutes.",
    category: "TUTORIALS",
    author: "Ananya Patel",
    date: "Jul 28, 2026",
    readTime: "5 MIN READ",
    image:
      "https://images.unsplash.com/photo-1526374965328-7f61d4dc18c5?auto=format&fit=crop&w=800&q=80",
  },
  {
    id: 3,
    title: "Navigating AI Careers in 2026: Skills That Matter",
    snippet:
      "An honest breakdown of what industry recruiters look for in undergrad machine learning portfolios.",
    category: "CAREER",
    author: "Siddharth Verma",
    date: "Jul 15, 2026",
    readTime: "4 MIN READ",
    image:
      "https://images.unsplash.com/photo-1516321318423-f06f85e504b3?auto=format&fit=crop&w=800&q=80",
  },
];

export default function Blogs() {
  const [selectedCategory, setSelectedCategory] = useState("ALL");
  const [searchQuery, setSearchQuery] = useState("");

  const categories = ["ALL", "AI RESEARCH", "TUTORIALS", "CAREER"];

  const filteredBlogs = blogsData.filter((blog) => {
    const matchesCategory =
      selectedCategory === "ALL" || blog.category === selectedCategory;
    const matchesSearch =
      blog.title.toLowerCase().includes(searchQuery.toLowerCase()) ||
      blog.snippet.toLowerCase().includes(searchQuery.toLowerCase());
    return matchesCategory && matchesSearch;
  });

  const featured = blogsData[0];

  return (
    <div className="space-y-8 bg-paper-grid min-h-screen pb-12">
      <SectionHeader
        title="TCET SIGAI BLOGS"
        subtitle="Insights, deep dives, and technical breakdowns by chapter members."
        badgeText="READ & LEARN"
      />

      {/* Ticker Marquee */}
      <div className="overflow-hidden bg-retroPink border-3 border-black rounded-xl py-2 shadow-brutal select-none">
        <div className="flex gap-8 whitespace-nowrap animate-marquee font-black text-xs uppercase tracking-wider text-black">
          <span>🔥 TEJAS VOL 4.1 IS OUT NOW</span>
          <span>•</span>
          <span>⚡ NEW ARTICLE: TRANSFORMERS FROM SCRATCH</span>
          <span>•</span>
          <span>📚 SUBMIT YOUR RESEARCH ARTICLE FOR NEXT EDITION</span>
          <span>•</span>
          <span>🔥 TEJAS VOL 4.1 IS OUT NOW</span>
        </div>
        <PeekabooSticky
          title="PRO TIP ⚡"
          text="Click 'Read Summary' to expand issue abstracts!"
          color="bg-retroYellow"
        />
      </div>

      {/* Featured Main Article */}
      {featured && (
        <div className="relative group bg-retroYellow border-3 border-black rounded-3xl p-6 md:p-8 shadow-brutal-lg hover-brutal-lift">
          <PhotoTape className="-top-3 left-8 -rotate-6 transition-transform group-hover:rotate-6" />
          <div className="flex flex-col md:flex-row gap-6 items-center">
            <div className="w-full md:w-1/2 border-2 border-black rounded-2xl overflow-hidden shadow-brutal h-56 md:h-72">
              <img
                src={featured.image}
                alt={featured.title}
                className="w-full h-full object-cover transition-transform duration-300 group-hover:scale-105"
              />
            </div>
            <div className="w-full md:w-1/2 space-y-3">
              <div className="flex gap-2 items-center">
                <span className="animate-stamp font-black text-xs px-2.5 py-1 bg-retroPink border-2 border-black rounded-md shadow-brutal uppercase">
                  FEATURED
                </span>
                <span className="font-bold text-xs bg-black text-white px-2 py-0.5 rounded">
                  {featured.readTime}
                </span>
              </div>
              <h2 className="text-2xl md:text-4xl font-black text-black leading-tight uppercase">
                {featured.title}
              </h2>
              <p className="font-bold text-gray-800 text-sm line-clamp-3">
                {featured.snippet}
              </p>
              <div className="flex justify-between items-center pt-3 border-t-2 border-black">
                <span className="font-bold text-xs uppercase text-gray-900">
                  By {featured.author} • {featured.date}
                </span>
                <Button variant="pink" size="sm" className="group/btn">
                  Read Article
                  <span className="inline-block transition-transform group-hover/btn:translate-x-1">
                    -&gt;
                  </span>
                </Button>
              </div>
            </div>
          </div>
        </div>
      )}

      {/* Search & Category Filter Bar */}
      <div className="bg-white border-3 border-black rounded-2xl p-4 shadow-brutal flex flex-col md:flex-row gap-4 items-center justify-between">
        <div className="flex flex-wrap gap-2">
          {categories.map((cat) => (
            <button
              key={cat}
              onClick={() => setSelectedCategory(cat)}
              className={`px-3 py-1.5 font-black text-xs uppercase border-2 border-black rounded-lg transition-all ${
                selectedCategory === cat
                  ? "bg-retroBlue shadow-brutal translate-y-[-2px]"
                  : "bg-retroBg"
              }`}
            >
              {cat}
            </button>
          ))}
        </div>
        <input
          type="text"
          placeholder="Search articles..."
          value={searchQuery}
          onChange={(e) => setSearchQuery(e.target.value)}
          className="w-full md:w-64 px-3 py-1.5 font-bold text-sm border-2 border-black rounded-lg bg-retroBg focus:outline-none shadow-brutal"
        />
      </div>

      {/* Grid of Articles */}
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
        {filteredBlogs.map((blog) => {
          const charmType =
            blog.category === "AI RESEARCH"
              ? "brain"
              : blog.category === "TUTORIALS"
                ? "code"
                : blog.category === "CAREER"
                  ? "briefcase"
                  : "star";

          const charmColor =
            blog.category === "AI RESEARCH"
              ? "bg-retroGreen"
              : blog.category === "TUTORIALS"
                ? "bg-retroBlue"
                : blog.category === "CAREER"
                  ? "bg-retroYellow"
                  : "bg-retroPink";

          return (
            <div
              key={blog.id}
              className="relative group border-3 border-black rounded-2xl p-4 shadow-brutal-lg bg-white flex flex-col justify-between hover-brutal-lift"
            >
              <BlogCharm type={charmType} color={charmColor} />
              <div>
                <div className="border-2 border-black rounded-xl overflow-hidden mb-3 h-40">
                  <img
                    src={blog.image}
                    alt={blog.title}
                    className="w-full h-full object-cover transition-transform duration-300 group-hover:scale-105"
                  />
                </div>
                <span className="font-black text-[10px] px-2 py-0.5 bg-retroGreen border border-black rounded uppercase">
                  {blog.category}
                </span>
                <h3 className="font-black text-lg text-black mt-2 leading-tight">
                  {blog.title}
                </h3>
                <p className="font-bold text-xs text-gray-600 mt-1 line-clamp-2">
                  {blog.snippet}
                </p>
              </div>
              <div className="mt-4 pt-3 border-t-2 border-black flex justify-between items-center">
                <span className="font-bold text-[10px] uppercase text-gray-500">
                  {blog.date}
                </span>
                <Button variant="yellow" size="sm" className="group/btn">
                  Read
                  <span className="inline-block transition-transform group-hover/btn:translate-x-1">
                    -&gt;
                  </span>
                </Button>
              </div>
            </div>
          );
        })}
      </div>
    </div>
  );
}
