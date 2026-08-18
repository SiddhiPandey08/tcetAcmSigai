import React from "react";
import { SectionHeader } from "../components/ui/SectionHeader";
import { Card } from "../components/ui/Card";
import { Link } from "react-router-dom";
import About from "../components/layouts/About";
import Contact from "../components/layouts/Contact";

// --- SVGS ---
const RobotIllustration = ({ className }) => (
  <svg
    width="400"
    height="350"
    viewBox="0 0 400 350"
    fill="none"
    className={className}
  >
    {/* Pink blob behind robot */}
    <circle cx="250" cy="220" r="120" fill="#FF70A6" />

    {/* Bubbles */}
    <rect
      x="200"
      y="50"
      width="60"
      height="50"
      rx="10"
      fill="#70D6FF"
      stroke="#000"
      strokeWidth="4"
    />
    <path
      d="M 230 65 Q 240 65 240 75 Q 240 85 230 85 Q 220 85 220 75 Q 220 65 230 65"
      stroke="#000"
      strokeWidth="2"
      fill="none"
    />
    <path
      d="M 230 98 L 220 110 L 240 100 Z"
      fill="#70D6FF"
      stroke="#000"
      strokeWidth="4"
    />

    <rect
      x="310"
      y="90"
      width="70"
      height="50"
      rx="10"
      fill="#FF70A6"
      stroke="#000"
      strokeWidth="4"
    />
    <path
      d="M 320 120 L 330 110 L 340 125 L 350 105 L 360 115"
      stroke="#000"
      strokeWidth="3"
      fill="none"
      strokeLinecap="round"
      strokeLinejoin="round"
    />
    <path
      d="M 315 138 L 305 150 L 325 140 Z"
      fill="#FF70A6"
      stroke="#000"
      strokeWidth="4"
    />

    <rect
      x="200"
      y="110"
      width="60"
      height="40"
      rx="10"
      fill="#38B000"
      stroke="#000"
      strokeWidth="4"
    />
    <text
      x="210"
      y="138"
      fontFamily="monospace"
      fontSize="20"
      fontWeight="bold"
      fill="#000"
    >
      &lt;/&gt;
    </text>
    <path
      d="M 230 148 L 220 160 L 240 150 Z"
      fill="#38B000"
      stroke="#000"
      strokeWidth="4"
    />

    {/* Robot */}
    <circle cx="270" cy="120" r="8" fill="#000" />
    <path d="M 270 120 L 270 100" stroke="#000" strokeWidth="4" />
    <circle
      cx="270"
      cy="160"
      r="45"
      fill="#fff"
      stroke="#000"
      strokeWidth="4"
    />
    <path
      d="M 245 160 Q 270 140 295 160"
      stroke="#000"
      strokeWidth="4"
      strokeLinecap="round"
    />
    <rect
      x="220"
      y="150"
      width="10"
      height="20"
      rx="5"
      fill="#70D6FF"
      stroke="#000"
      strokeWidth="3"
    />
    <rect
      x="310"
      y="150"
      width="10"
      height="20"
      rx="5"
      fill="#70D6FF"
      stroke="#000"
      strokeWidth="3"
    />
    <path
      d="M 240 210 Q 240 250 270 250 Q 300 250 300 210"
      fill="#fff"
      stroke="#000"
      strokeWidth="4"
    />

    {/* Laptop */}
    <path
      d="M 210 260 L 260 260 L 250 200 L 200 200 Z"
      fill="#38B000"
      stroke="#000"
      strokeWidth="4"
    />
    <path
      d="M 190 260 L 280 260 L 280 270 L 190 270 Z"
      fill="#38B000"
      stroke="#000"
      strokeWidth="4"
    />
    <path d="M 220 230 L 225 220 L 235 225 L 225 230 L 220 240 Z" fill="#fff" />
  </svg>
);

const BrainMagnifierIcon = ({ className }) => (
  <svg
    width="60"
    height="60"
    viewBox="0 0 100 100"
    fill="none"
    className={className}
  >
    <circle
      cx="45"
      cy="45"
      r="30"
      fill="#70D6FF"
      stroke="#000"
      strokeWidth="4"
    />
    <path
      d="M 65 65 L 85 85"
      stroke="#000"
      strokeWidth="8"
      strokeLinecap="round"
    />
    <path
      d="M 35 35 Q 45 25 55 35 Q 65 45 55 55 Q 45 65 35 55 Q 25 45 35 35"
      stroke="#000"
      strokeWidth="3"
      fill="none"
    />
  </svg>
);

const LaptopGradCapIcon = ({ className }) => (
  <svg
    width="60"
    height="60"
    viewBox="0 0 100 100"
    fill="none"
    className={className}
  >
    <path d="M 50 10 L 80 25 L 50 40 L 20 25 Z" fill="#000" />
    <rect x="25" y="45" width="50" height="35" rx="4" fill="#000" />
    <text x="35" y="70" fontFamily="monospace" fontSize="20" fill="#fff">
      &gt;_
    </text>
    <rect x="15" y="80" width="70" height="10" rx="2" fill="#000" />
  </svg>
);

const PencilIcon = ({ className }) => (
  <svg
    width="60"
    height="60"
    viewBox="0 0 100 100"
    fill="none"
    className={className}
  >
    <path
      d="M 20 80 L 15 95 L 30 90 L 85 35 L 75 25 Z"
      fill="#FCD34D"
      stroke="#000"
      strokeWidth="4"
      strokeLinejoin="round"
    />
    <path
      d="M 75 25 L 85 15 C 90 10 95 15 90 20 L 80 30 Z"
      fill="#FF70A6"
      stroke="#000"
      strokeWidth="4"
    />
    <path d="M 15 95 L 22 88 L 27 93 Z" fill="#000" />
  </svg>
);

const CodeIconPlaceholder = ({ className }) => (
  <LaptopGradCapIcon className={className} />
);

const ButtonPink = ({ children, to }) => (
  <Link
    to={to}
    className="bg-retroPink text-black font-black uppercase text-sm px-6 py-3 border-2 border-black rounded-full shadow-brutal-sm hover:-translate-y-1 hover:shadow-brutal transition-all flex items-center gap-2"
  >
    {children} <span className="font-bold">&gt;</span>
  </Link>
);

const ButtonBlue = ({ children, to }) => (
  <Link
    to={to}
    className="bg-retroBlue text-black font-black uppercase text-sm px-6 py-3 border-2 border-black rounded-full shadow-brutal-sm hover:-translate-y-1 hover:shadow-brutal transition-all flex items-center gap-2"
  >
    {children} <span className="font-bold">&gt;</span>
  </Link>
);

// --------------------------------

export default function Home() {
  return (
    <div className="space-y-12 bg-paper-grid min-h-screen pb-12 relative overflow-x-hidden">
      {/* Hero Section */}
      <section className="bg-retroYellow border-3 border-black rounded-3xl p-8 md:p-12 shadow-brutal-lg relative overflow-hidden flex flex-col md:flex-row items-center justify-between">
        <div className="relative z-20 space-y-6 md:w-1/2">
          <span className="bg-retroPink text-black font-black text-xs px-4 py-1.5 border-2 border-black rounded-full uppercase tracking-wider inline-block">
            ★ WELCOME TO SIGAI
          </span>
          <h1 className="text-6xl md:text-8xl font-black text-black uppercase leading-none tracking-tighter">
            Innovate. <br /> Create. <br /> Connect.
          </h1>
          <p className="text-lg font-bold text-black mt-4 max-w-xl">
            The official AI student chapter pushing boundaries in Artificial
            Intelligence and Machine Learning.
          </p>
          <div className="mt-8 flex flex-wrap gap-4">
            <ButtonPink to="/events">Explore Events</ButtonPink>
            <ButtonBlue to="/publications">Read Publications</ButtonBlue>
          </div>
        </div>

        {/* Right side illustration */}
        <div className="md:w-1/2 flex justify-end mt-10 md:mt-0 relative z-10">
          <RobotIllustration className="w-full max-w-lg" />
        </div>
      </section>

      {/* What We Do Section */}
      <section className="relative mt-20">
        <SectionHeader
          title="WHAT WE DO"
          badgeText="OUR FOCUS"
          withSpeedLines={true}
        />

        <div className="grid grid-cols-1 md:grid-cols-3 gap-6 relative z-20 mt-10">
          {/* Card 1: AI Research */}
          <Card
            title="AI Research"
            category="DOMAIN"
            description="Publishing research papers and exploring deep learning architectures."
            bgColor="bg-retroBlue"
          >
            <div className="absolute top-1/2 right-4 -translate-y-1/2">
              <BrainMagnifierIcon className="w-16 h-16" />
            </div>
          </Card>

          {/* Card 2: Workshops & Hackathons */}
          <Card
            title="Workshops & Hackathons"
            category="EVENTS"
            description="Hands-on technical bootcamps for student developers."
            bgColor="bg-retroGreen"
          >
            <div className="absolute top-1/2 right-4 -translate-y-1/2">
              <CodeIconPlaceholder className="w-16 h-16" />
            </div>
          </Card>

          {/* About TCET ACM SIGAI (Replaces Blogs) */}
          <div className="md:col-span-3 bg-white border-3 border-black rounded-xl p-8 shadow-brutal-sm relative overflow-hidden mt-6">
            <h2 className="text-3xl font-black uppercase text-black mb-2">
              About TCET ACM SIGAI
            </h2>
            <h3 className="text-xl font-bold text-retroPink mb-4">
              Think. Build. Innovate.
            </h3>

            <div className="space-y-4 text-gray-800 font-medium">
              <p>
                <strong>TCET ACM SIGAI</strong> is a community of AI and Machine
                Learning enthusiasts dedicated to turning curiosity into
                innovation.
              </p>
              <p>
                Established in <strong>January 2023</strong>, we bring together
                students, researchers, and tech enthusiasts from across India to{" "}
                <strong>learn, experiment, collaborate, and build</strong> in
                the world of AI & ML.
              </p>
              <p>
                Through{" "}
                <strong>
                  workshops, seminars, technical competitions, industrial
                  visits, and research-driven initiatives
                </strong>
                , we create opportunities to gain practical knowledge, connect
                with like-minded innovators, and explore the future of
                Artificial Intelligence.
              </p>
              <p className="font-black text-black text-lg pt-2">
                Learn together. Build boldly. Shape the future of AI.
              </p>
            </div>
          </div>
        </div>
      </section>

      <div className="mt-32">
        <About />
      </div>
      <div className="mt-32">
        <Contact />
      </div>

      {/* Footer */}
      <footer className="bg-black text-white rounded-3xl p-6 mt-10 flex flex-col md:flex-row items-center justify-between gap-4">
        {/* Social Icons */}
        <div className="flex gap-3">
          {/* GitHub */}
          <a
            href="https://github.com/SIG-AI-OpenSource"
            target="_blank"
            rel="noopener noreferrer"
            aria-label="GitHub"
            className="w-9 h-9 rounded-full border border-gray-600 flex items-center justify-center hover:border-white hover:bg-white hover:text-black transition-all"
          >
            <svg width="18" height="18" viewBox="0 0 24 24" fill="currentColor">
              <path d="M12 0C5.374 0 0 5.373 0 12c0 5.302 3.438 9.8 8.207 11.387.599.111.793-.261.793-.577v-2.234c-3.338.726-4.033-1.416-4.033-1.416-.546-1.387-1.333-1.756-1.333-1.756-1.089-.745.083-.729.083-.729 1.205.084 1.839 1.237 1.839 1.237 1.07 1.834 2.807 1.304 3.492.997.107-.775.418-1.305.762-1.604-2.665-.305-5.467-1.334-5.467-5.931 0-1.311.469-2.381 1.236-3.221-.124-.303-.535-1.524.117-3.176 0 0 1.008-.322 3.301 1.23A11.509 11.509 0 0 1 12 5.803c1.02.005 2.047.138 3.006.404 2.291-1.552 3.297-1.23 3.297-1.23.653 1.653.242 2.874.118 3.176.77.84 1.235 1.911 1.235 3.221 0 4.609-2.807 5.624-5.479 5.921.43.372.823 1.102.823 2.222v3.293c0 .319.192.694.801.576C20.566 21.797 24 17.3 24 12c0-6.627-5.373-12-12-12z" />
            </svg>
          </a>

          {/* LinkedIn */}
          <a
            href="https://www.linkedin.com/company/tcet-acm-sigai"
            target="_blank"
            rel="noopener noreferrer"
            aria-label="LinkedIn"
            className="w-9 h-9 rounded-full border border-gray-600 flex items-center justify-center hover:border-blue-500 hover:bg-blue-600 hover:text-white transition-all"
          >
            <svg width="16" height="16" viewBox="0 0 24 24" fill="currentColor">
              <path d="M20.447 20.452h-3.554v-5.569c0-1.328-.027-3.037-1.852-3.037-1.853 0-2.136 1.445-2.136 2.939v5.667H9.351V9h3.414v1.561h.046c.477-.9 1.637-1.85 3.37-1.85 3.601 0 4.267 2.37 4.267 5.455v6.286zM5.337 7.433a2.062 2.062 0 0 1-2.063-2.065 2.064 2.064 0 1 1 2.063 2.065zm1.782 13.019H3.555V9h3.564v11.452zM22.225 0H1.771C.792 0 0 .774 0 1.729v20.542C0 23.227.792 24 1.771 24h20.451C23.2 24 24 23.227 24 22.271V1.729C24 .774 23.2 0 22.222 0h.003z" />
            </svg>
          </a>

          {/* Instagram */}
          <a
            href="https://www.instagram.com/tcet_acm.sigai?igsh=aHI0aXh4emQ4dmNp"
            target="_blank"
            rel="noopener noreferrer"
            aria-label="Instagram"
            className="w-9 h-9 rounded-full border border-gray-600 flex items-center justify-center hover:border-pink-500 hover:bg-gradient-to-br hover:from-purple-600 hover:to-pink-500 hover:text-white transition-all"
          >
            <svg width="16" height="16" viewBox="0 0 24 24" fill="currentColor">
              <path d="M12 2.163c3.204 0 3.584.012 4.85.07 3.252.148 4.771 1.691 4.919 4.919.058 1.265.069 1.645.069 4.849 0 3.205-.012 3.584-.069 4.849-.149 3.225-1.664 4.771-4.919 4.919-1.266.058-1.644.07-4.85.07-3.204 0-3.584-.012-4.849-.07-3.26-.149-4.771-1.699-4.919-4.92-.058-1.265-.07-1.644-.07-4.849 0-3.204.013-3.583.07-4.849.149-3.227 1.664-4.771 4.919-4.919 1.266-.057 1.645-.069 4.849-.069zm0-2.163c-3.259 0-3.667.014-4.947.072-4.358.2-6.78 2.618-6.98 6.98-.059 1.281-.073 1.689-.073 4.948 0 3.259.014 3.668.072 4.948.2 4.358 2.618 6.78 6.98 6.98 1.281.058 1.689.072 4.948.072 3.259 0 3.668-.014 4.948-.072 4.354-.2 6.782-2.618 6.979-6.98.059-1.28.073-1.689.073-4.948 0-3.259-.014-3.667-.072-4.947-.196-4.354-2.617-6.78-6.979-6.98-1.281-.059-1.69-.073-4.949-.073zm0 5.838a6.162 6.162 0 1 0 0 12.324 6.162 6.162 0 0 0 0-12.324zM12 16a4 4 0 1 1 0-8 4 4 0 0 1 0 8zm6.406-11.845a1.44 1.44 0 1 0 0 2.881 1.44 1.44 0 0 0 0-2.881z" />
            </svg>
          </a>
        </div>

        <p className="text-gray-400 text-sm font-medium text-center">
          © 2024 <span className="text-white font-bold">TCET ACM SIGAI</span>.
          All rights reserved.
        </p>

        <p className="text-retroGreen font-bold text-sm tracking-wider">
          ✦ BUILDING INTELLIGENCE. BUILDING IMPACT.
        </p>
      </footer>
    </div>
  );
}
