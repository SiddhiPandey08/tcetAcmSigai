import React from "react";
import { Link } from "react-router-dom";

// --- Minimal SVG Icons for the cards ---
const LightbulbIcon = () => (
  <svg width="40" height="40" viewBox="0 0 100 100" fill="none">
    <path
      d="M 30 50 Q 30 20 50 20 Q 70 20 70 50 Q 70 70 60 80 L 40 80 Q 30 70 30 50"
      fill="none"
      stroke="#000"
      strokeWidth="6"
    />
    <path d="M 45 80 L 45 90 L 55 90 L 55 80" fill="#000" />
    <line x1="50" y1="10" x2="50" y2="5" stroke="#000" strokeWidth="4" />
    <line x1="30" y1="20" x2="25" y2="15" stroke="#000" strokeWidth="4" />
    <line x1="70" y1="20" x2="75" y2="15" stroke="#000" strokeWidth="4" />
    <circle cx="50" cy="50" r="10" fill="#000" />
  </svg>
);

const CodeIcon = () => (
  <svg width="40" height="40" viewBox="0 0 100 100" fill="none">
    <path
      d="M 35 30 L 15 50 L 35 70"
      fill="none"
      stroke="#000"
      strokeWidth="8"
      strokeLinecap="round"
      strokeLinejoin="round"
    />
    <path
      d="M 65 30 L 85 50 L 65 70"
      fill="none"
      stroke="#000"
      strokeWidth="8"
      strokeLinecap="round"
      strokeLinejoin="round"
    />
    <line
      x1="60"
      y1="20"
      x2="40"
      y2="80"
      stroke="#000"
      strokeWidth="8"
      strokeLinecap="round"
    />
  </svg>
);

const PeopleIcon = () => (
  <svg width="40" height="40" viewBox="0 0 100 100" fill="none">
    <circle cx="25" cy="32" r="10" fill="#000" />

    <circle cx="50" cy="25" r="13" fill="#000" />

    <circle cx="75" cy="32" r="10" fill="#000" />

    <path
      d="M 8 86
       Q 10 62 25 62
       Q 38 62 42 78
       L 42 86 Z"
      fill="#000"
    />

    <path
      d="M 30 86
       Q 32 55 50 55
       Q 68 55 70 86 Z"
      fill="#000"
    />

    <path
      d="M 58 86
       Q 62 62 75 62
       Q 90 62 92 86 Z"
      fill="#000"
    />
  </svg>
);

const ChartIcon = () => (
  <svg width="40" height="40" viewBox="0 0 100 100" fill="none">
    <path
      d="M 10 90 L 90 90"
      stroke="#000"
      strokeWidth="6"
      strokeLinecap="round"
    />
    <path
      d="M 20 80 L 40 50 L 60 60 L 90 20"
      fill="none"
      stroke="#000"
      strokeWidth="8"
      strokeLinecap="round"
      strokeLinejoin="round"
    />
    <path
      d="M 70 20 L 90 20 L 90 40"
      fill="none"
      stroke="#000"
      strokeWidth="8"
      strokeLinecap="round"
      strokeLinejoin="round"
    />
  </svg>
);

const ACMLogoPlaceholder = () => (
  <svg
    width="60"
    height="60"
    viewBox="0 0 100 100"
    fill="none"
    className="bg-retroBlue rounded-full p-2 border-2 border-black"
  >
    <text
      x="50"
      y="55"
      fontSize="28"
      fontWeight="bold"
      fill="#fff"
      textAnchor="middle"
    >
      acm
    </text>
  </svg>
);

export default function About() {
  return (
    <div className="space-y-8 pb-16">
      {/* Hero Section */}
      <section className="bg-retroYellow border-3 border-black rounded-3xl p-8 md:p-16 shadow-brutal-lg text-center relative overflow-hidden">
        {/* Decorative elements */}
        <div
          className="absolute top-8 left-8 md:left-24 text-4xl text-retroPink font-black"
          style={{ WebkitTextStroke: "2px black" }}
        >
          +
        </div>
        <div
          className="absolute top-10 right-10 md:right-32 text-4xl text-retroBlue font-black"
          style={{ WebkitTextStroke: "2px black" }}
        >
          ✦
        </div>
        <div className="absolute bottom-10 left-10 md:left-24">
          <svg width="60" height="20" viewBox="0 0 100 20" fill="none">
            <path
              d="M 0 10 L 20 0 L 40 20 L 60 0 L 80 20 L 100 10"
              stroke="#000"
              strokeWidth="4"
              fill="none"
            />
          </svg>
        </div>
        <div className="absolute bottom-8 right-8 md:right-24 grid grid-cols-3 gap-2 opacity-80">
          {[...Array(9)].map((_, i) => (
            <div key={i} className="w-2 h-2 bg-black rounded-full" />
          ))}
        </div>
        <div className="absolute top-6 right-6">
          <svg width="60" height="20" viewBox="0 0 100 20" fill="none">
            <path
              d="M 0 20 L 20 0 M 20 20 L 40 0 M 40 20 L 60 0 M 60 20 L 80 0 M 80 20 L 100 0"
              stroke="#000"
              strokeWidth="4"
            />
          </svg>
        </div>
        <div className="absolute bottom-4 left-4 bg-retroPink border-2 border-black w-8 h-8 flex items-center justify-center -rotate-12 shadow-brutal-sm">
          <div className="w-4 h-4 bg-black rounded-full" />
        </div>

        {/* Content */}
        <div className="relative z-10 max-w-3xl mx-auto flex flex-col items-center">
          <div className="absolute -top-12 -left-6 md:-left-12 bg-retroPink text-black font-black text-xs px-4 py-1.5 border-2 border-black rounded-full uppercase tracking-wider shadow-brutal-sm">
            WHO WE ARE
          </div>

          <h1 className="text-5xl md:text-7xl font-black uppercase leading-none tracking-tighter text-black mt-4 mb-6">
            ABOUT US
          </h1>

          <p className="text-lg font-bold text-black mb-4">
            ACM SIGAI TCET is the official student chapter of ACM at Thakur
            College of Engineering and Technology dedicated to Artificial
            Intelligence and Machine Learning.
          </p>
          <p className="text-base font-bold text-gray-800">
            We bring together passionate minds who are eager to explore, learn,
            and build innovative solutions using AI and ML technologies.
          </p>
        </div>
      </section>

      {/* 4 Pillars */}
      <section className="grid grid-cols-1 md:grid-cols-4 gap-4">
        {/* Learn */}
        <div className="bg-white border-3 border-black rounded-xl p-4 flex items-start gap-4">
          <div className="bg-retroGreen border-2 border-black p-3 rounded-lg flex-shrink-0">
            <LightbulbIcon />
          </div>
          <div>
            <h3 className="font-black text-lg uppercase tracking-tight text-black">
              LEARN
            </h3>
            <p className="text-sm font-medium text-gray-700 leading-snug mt-1">
              Workshops, seminars and tech talks by industry experts.
            </p>
          </div>
        </div>

        {/* Build */}
        <div className="bg-white border-3 border-black rounded-xl p-4 flex items-start gap-4 relative overflow-hidden">
          {/* small star decor */}
          <div className="absolute top-2 right-2 text-xl text-black">✦</div>
          <div className="bg-retroBlue border-2 border-black p-3 rounded-lg flex-shrink-0">
            <CodeIcon />
          </div>
          <div>
            <h3 className="font-black text-lg uppercase tracking-tight text-black">
              BUILD
            </h3>
            <p className="text-sm font-medium text-gray-700 leading-snug mt-1">
              Hands-on projects, hackathons and research initiatives.
            </p>
          </div>
        </div>

        {/* Collaborate */}
        <div className="bg-white border-3 border-black rounded-xl p-4 flex items-start gap-4">
          <div className="bg-retroYellow border-2 border-black p-3 rounded-lg flex-shrink-0">
            <PeopleIcon />
          </div>
          <div>
            <h3 className="font-black text-lg uppercase tracking-tight text-black">
              COLLABORATE
            </h3>
            <p className="text-sm font-medium text-gray-700 leading-snug mt-1">
              Connect with peers, mentor juniors and grow together.
            </p>
          </div>
        </div>

        {/* Innovate */}
        <div className="bg-white border-3 border-black rounded-xl p-4 flex items-start gap-4 relative overflow-hidden">
          <div className="bg-retroPink border-2 border-black p-3 rounded-lg flex-shrink-0">
            <ChartIcon />
          </div>
          <div>
            <h3 className="font-black text-lg uppercase tracking-tight text-black">
              INNOVATE
            </h3>
            <p className="text-sm font-medium text-gray-700 leading-snug mt-1">
              Solve real-world problems using AI/ML technologies.
            </p>
          </div>
        </div>
      </section>

      {/* Mission / Vision / Parent Body */}
      <section className="grid grid-cols-1 md:grid-cols-3 gap-4">
        {/* Mission */}
        <div className="bg-white border-3 border-black rounded-xl p-5 relative flex flex-col items-start overflow-hidden">
          <div className="absolute top-4 right-4 text-xl font-black text-black">
            ✦
          </div>
          <span className="bg-retroBlue text-white font-black text-xs px-3 py-1 border-2 border-black rounded-full uppercase tracking-wider mb-3">
            OUR MISSION
          </span>
          <p className="text-sm font-bold text-gray-800 leading-relaxed pr-8 z-10">
            To empower students with the knowledge and skills in Artificial
            Intelligence and Machine Learning and encourage them to apply their
            learning for the betterment of society.
          </p>
        </div>

        {/* Vision */}
        <div className="bg-white border-3 border-black rounded-xl p-5 relative flex flex-col items-start overflow-hidden">
          <div className="absolute top-4 right-4 text-xl font-black text-black">
            ✦
          </div>
          <span className="bg-white text-black font-black text-xs px-3 py-1 border-2 border-black rounded-full uppercase tracking-wider mb-3 shadow-brutal-sm">
            OUR VISION
          </span>
          <p className="text-sm font-bold text-gray-800 leading-relaxed z-10">
            To be a leading student chapter that inspires innovation, fosters
            research, and builds future leaders in AI and ML.
          </p>
        </div>

        {/* Parent Body */}
        <div className="bg-white border-3 border-black rounded-xl p-5 flex flex-col items-start">
          <span className="bg-retroPink text-black font-black text-xs px-3 py-1 border-2 border-black rounded-full uppercase tracking-wider mb-4 shadow-brutal-sm">
            OUR PARENT BODY
          </span>
          <div className="flex items-center gap-3 w-full">
            <ACMLogoPlaceholder />
            <div className="flex flex-col">
              <span className="font-black text-black text-sm uppercase leading-tight">
                Association for <br /> Computing Machinery
              </span>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
}
