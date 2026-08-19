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
    </div>
  );
}
