import React, { useState } from "react";

// Image Assets (located in src/photos/)
import defaultPlaceholderImg from "../assets/placeholder-user.png";
import drShiwaniImg from "../assets/dr_shiwani_gupta.jpg.jpeg";
import mrsPranjaliImg from "../assets/mrs_pranjali_sankhe.jpg.jpeg";

import { SectionHeader } from "../components/ui/SectionHeader";
import Button from "../components/ui/Button";

// Permanent Faculty Sponsors / Advisors (No tenure, constant across committees)
const facultyMembers = [
  {
    name: "Dr. Shiwani Gupta",
    role: "Faculty Sponsor",
    domain: "DEPARTMENT HOD",
    photo: drShiwaniImg,
    quote: "",
    socials: {
      linkedin: "https://www.linkedin.com/in/dr-shiwani-gupta-9b731a53/",
      github: null,
      email: null,
    },
    stickerBg: "bg-retroYellow",
    iconType: "user",
    photoPos: "object-center",
  },
  {
    name: "Mrs. Pranjali Sankhe",
    role: "Faculty In-Charge",
    domain: "Assistant Professor",
    photo: mrsPranjaliImg,
    quote: "",
    socials: {
      linkedin: "https://www.linkedin.com/in/pranjali-sankhe-5421aa160/",
      github: null,
      email: null,
    },
    stickerBg: "bg-retroPink",
    iconType: "user",
    photoPos: "object-center",
  },
];

// Current 2025-2026 Student Core Committee Members (All 16 positions)
const currentCoreMembers = [
  {
    name: "Pranav Vishwakarma",
    role: "Chairperson",
    domain: "Core",
    photo: defaultPlaceholderImg,
    quote: "",
    socials: {
      linkedin: null,
      github: null,
      email: null,
    },
    stickerBg: "bg-retroYellow",
    iconType: "user",
  },
  {
    name: "Vipul Choudhari",
    role: "Vice Chairperson",
    domain: "Core",
    photo: defaultPlaceholderImg,
    quote: "",
    socials: {
      linkedin: null,
      github: null,
      email: null,
    },
    stickerBg: "bg-retroPink",
    iconType: "user",
  },
  {
    name: "Aditya Pandey",
    role: "Secretary",
    domain: "Core",
    photo: defaultPlaceholderImg,
    quote: "",
    socials: {
      linkedin: null,
      github: null,
      email: null,
    },
    stickerBg: "bg-white",
    iconType: "document",
  },
  {
    name: "Mahek Chaplot",
    role: "Treasurer",
    domain: "Core",
    photo: defaultPlaceholderImg,
    quote: "",
    socials: {
      linkedin: null,
      github: null,
      email: null,
    },
    stickerBg: "bg-retroGreen",
    iconType: "currency",
  },
  {
    name: "Riya Yadav",
    role: "Event Manager",
    domain: "Events",
    photo: defaultPlaceholderImg,
    quote: "",
    socials: {
      linkedin: null,
      github: null,
      email: null,
    },
    stickerBg: "bg-retroBlue",
    iconType: "calendar",
  },
  {
    name: "Harshini Mishal",
    role: "Technical Head",
    domain: "Technical",
    photo: defaultPlaceholderImg,
    quote: "",
    socials: {
      linkedin: null,
      github: null,
      email: null,
    },
    stickerBg: "bg-retroGreen",
    iconType: "code",
  },
  {
    name: "Sanjana Dubey",
    role: "Creative Head",
    domain: "Creative",
    photo: defaultPlaceholderImg,
    quote: "",
    socials: {
      linkedin: null,
      github: null,
      email: null,
    },
    stickerBg: "bg-retroPink",
    iconType: "swatch",
  },
  {
    name: "Sitanshu Gupta",
    role: "PR Head",
    domain: "Public Relations",
    photo: defaultPlaceholderImg,
    quote: "",
    socials: {
      linkedin: null,
      github: null,
      email: null,
    },
    stickerBg: "bg-retroYellow",
    iconType: "megaphone",
  },
  {
    name: "Pranjal Sawant",
    role: "Spons Head",
    domain: "Sponsorship",
    photo: defaultPlaceholderImg,
    quote: "",
    socials: {
      linkedin: null,
      github: null,
      email: null,
    },
    stickerBg: "bg-retroGreen",
    iconType: "currency",
  },
  {
    name: "Shubham Prajapati",
    role: "Webmaster",
    domain: "Technical",
    photo: defaultPlaceholderImg,
    quote: "",
    socials: {
      linkedin: null,
      github: null,
      email: null,
    },
    stickerBg: "bg-retroBlue",
    iconType: "globe",
  },
  {
    name: "Jeni Shah",
    role: "Inhouse Head",
    domain: "Operations",
    photo: defaultPlaceholderImg,
    quote: "",
    socials: {
      linkedin: null,
      github: null,
      email: null,
    },
    stickerBg: "bg-retroBg",
    iconType: "building",
  },
  {
    name: "Siddhi Pandey",
    role: "Joint Technical Head",
    domain: "Technical",
    photo: defaultPlaceholderImg,
    quote: "",
    socials: {
      linkedin: null,
      github: null,
      email: null,
    },
    stickerBg: "bg-retroGreen",
    iconType: "code",
  },
  {
    name: "Vaishnavi Nayak",
    role: "Joint Secretary",
    domain: "Core",
    photo: defaultPlaceholderImg,
    quote: "",
    socials: {
      linkedin: null,
      github: null,
      email: null,
    },
    stickerBg: "bg-white",
    iconType: "document",
  },
  {
    name: "Yash Oza",
    role: "Joint PR & Spons Head",
    domain: "Public Relations",
    photo: defaultPlaceholderImg,
    quote: "",
    socials: {
      linkedin: null,
      github: null,
      email: null,
    },
    stickerBg: "bg-retroYellow",
    iconType: "handshake",
  },
  {
    name: "Anamika Yadav",
    role: "Joint Creative Head",
    domain: "Creative",
    photo: defaultPlaceholderImg,
    quote: "",
    socials: {
      linkedin: null,
      github: null,
      email: null,
    },
    stickerBg: "bg-retroPink",
    iconType: "swatch",
  },
  {
    name: "Preet Kothari",
    role: "Joint Event Manager",
    domain: "Events",
    photo: defaultPlaceholderImg,
    quote: "",
    socials: {
      linkedin: null,
      github: null,
      email: null,
    },
    stickerBg: "bg-retroBlue",
    iconType: "calendar",
  },
];

// Previous 2024-2025 Core Committee Members (All 16 positions)
const pastCore2024Members = [
  {
    name: "Rishikesh Saroj",
    role: "Chairperson",
    domain: "Core",
    photo: defaultPlaceholderImg,
    quote: "",
    socials: {
      linkedin: "https://www.linkedin.com/in/rishikesh-saroj-107a89326/",
      github: null,
      email: null,
    },
    stickerBg: "bg-retroYellow",
    iconType: "user",
  },
  {
    name: "Ishan Dubey",
    role: "Vice Chairperson",
    domain: "Core",
    photo: defaultPlaceholderImg,
    quote: "",
    socials: {
      linkedin: "https://www.linkedin.com/in/ishan-dubey-a45378322/",
      github: null,
      email: null,
    },
    stickerBg: "bg-retroPink",
    iconType: "user",
  },
  {
    name: "Mudassir Shaikh",
    role: "Secretary",
    domain: "Core",
    photo: defaultPlaceholderImg,
    quote: "",
    socials: {
      linkedin: "https://www.linkedin.com/in/mudassirshaikkh/",
      github: null,
      email: null,
    },
    stickerBg: "bg-white",
    iconType: "document",
  },
  {
    name: "Reva Purohit",
    role: "Treasurer",
    domain: "Core",
    photo: defaultPlaceholderImg,
    quote: "",
    socials: {
      linkedin: "https://www.linkedin.com/in/revapurohit/",
      github: null,
      email: null,
    },
    stickerBg: "bg-retroGreen",
    iconType: "currency",
  },
  {
    name: "Taran Shetty",
    role: "Event Manager",
    domain: "Events",
    photo: defaultPlaceholderImg,
    quote: "",
    socials: {
      linkedin: "https://www.linkedin.com/in/taran-shetty/",
      github: null,
      email: null,
    },
    stickerBg: "bg-retroBlue",
    iconType: "calendar",
  },
  {
    name: "Anuj Singh",
    role: "Technical Head",
    domain: "Technical",
    photo: defaultPlaceholderImg,
    quote: "",
    socials: {
      linkedin: "https://www.linkedin.com/in/anujsingh-ai-ml/",
      github: null,
      email: null,
    },
    stickerBg: "bg-retroGreen",
    iconType: "code",
  },
  {
    name: "Krish Vanani",
    role: "Creative Head",
    domain: "Creative",
    photo: defaultPlaceholderImg,
    quote: "",
    socials: {
      linkedin: "https://www.linkedin.com/in/krish-vanani-445655260/",
      github: null,
      email: null,
    },
    stickerBg: "bg-retroPink",
    iconType: "swatch",
  },
  {
    name: "Aniket Bhaskar",
    role: "PR Head",
    domain: "Public Relations",
    photo: defaultPlaceholderImg,
    quote: "",
    socials: {
      linkedin: "https://www.linkedin.com/in/aniket-bhaskar/",
      github: null,
      email: null,
    },
    stickerBg: "bg-retroYellow",
    iconType: "megaphone",
  },
  {
    name: "Dev Tripati",
    role: "Spons Head",
    domain: "Sponsorship",
    photo: defaultPlaceholderImg,
    quote: "",
    socials: {
      linkedin: "https://www.linkedin.com/in/dev-tripathi-1b285328a/",
      github: null,
      email: null,
    },
    stickerBg: "bg-retroGreen",
    iconType: "currency",
  },
  {
    name: "Kartik Bankar",
    role: "Webmaster",
    domain: "Technical",
    photo: defaultPlaceholderImg,
    quote: "",
    socials: {
      linkedin: "https://www.linkedin.com/in/kartikbankar21/",
      github: null,
      email: null,
    },
    stickerBg: "bg-retroBlue",
    iconType: "globe",
  },
  {
    name: "Pranav Vishwakarma",
    role: "Inhouse Head",
    domain: "Operations",
    photo: defaultPlaceholderImg,
    quote: "",
    socials: {
      linkedin: "https://www.linkedin.com/in/pranav-vishwakarma25/",
      github: null,
      email: null,
    },
    stickerBg: "bg-retroBg",
    iconType: "building",
  },
  {
    name: "Bala Sudalaimuthu",
    role: "Joint Technical Head",
    domain: "Technical",
    photo: defaultPlaceholderImg,
    quote: "",
    socials: {
      linkedin: "https://www.linkedin.com/in/bala-sudalaimuthu-a34b53355/",
      github: null,
      email: null,
    },
    stickerBg: "bg-retroGreen",
    iconType: "code",
  },
  {
    name: "Tiya Rai",
    role: "Joint Secretary",
    domain: "Core",
    photo: defaultPlaceholderImg,
    quote: "",
    socials: {
      linkedin: "https://www.linkedin.com/in/tiya-rai-433b42368/",
      github: null,
      email: null,
    },
    stickerBg: "bg-white",
    iconType: "document",
  },
  {
    name: "Vipul Choudhari",
    role: "Joint PR & Spons Head",
    domain: "Public Relations",
    photo: defaultPlaceholderImg,
    quote: "",
    socials: {
      linkedin: null,
      github: null,
      email: null,
    },
    stickerBg: "bg-retroYellow",
    iconType: "handshake",
  },
  {
    name: "Parag Valam",
    role: "Joint Creative Head",
    domain: "Creative",
    photo: defaultPlaceholderImg,
    quote: "",
    socials: {
      linkedin: "https://www.linkedin.com/in/parag-valam-790894368/",
      github: null,
      email: null,
    },
    stickerBg: "bg-retroPink",
    iconType: "swatch",
  },
  {
    name: "Riya Yadav",
    role: "Joint Event Manager",
    domain: "Events",
    photo: defaultPlaceholderImg,
    quote: "",
    socials: {
      linkedin: "https://www.linkedin.com/in/riya-yadav-5aa7b5369/",
      github: null,
      email: null,
    },
    stickerBg: "bg-retroBlue",
    iconType: "calendar",
  },
];

// All team members combined (for export/reference)
export const teamMembers = [...facultyMembers, ...currentCoreMembers];

// Helper to calculate initials from name
const getInitials = (name) => {
  if (!name) return "";
  const parts = name.trim().split(/\s+/).filter(Boolean);
  if (parts.length === 0) return "";
  if (parts.length === 1) return parts[0].slice(0, 2).toUpperCase();
  return (parts[0][0] + parts[parts.length - 1][0]).toUpperCase();
};

// Helper to render LinkedIn icon
const LinkedInIcon = () => (
  <svg className="w-3.5 h-3.5 fill-current shrink-0" viewBox="0 0 24 24">
    <path d="M19 3a2 2 0 0 1 2 2v14a2 2 0 0 1-2 2H5a2 2 0 0 1-2-2V5a2 2 0 0 1 2-2h14m-.5 15.5v-5.3a3.26 3.26 0 0 0-3.26-3.26c-.85 0-1.84.52-2.28 1.3v-1.11h-2.79v8.37h2.79v-4.93c0-.77.62-1.4 1.39-1.4a1.4 1.4 0 0 1 1.4 1.4v4.93h2.75M6.88 8.56a1.68 1.68 0 0 0 1.68-1.68c0-.93-.75-1.69-1.68-1.69a1.69 1.69 0 0 0-1.69 1.69c0 .93.76 1.68 1.69 1.68m1.39 9.94v-8.37H5.5v8.37h2.77z" />
  </svg>
);

// Helper to render clean Heroicon SVGs (including Indian Rupee ₹ for sponsorship)
const renderIcon = (type) => {
  const iconProps = "w-3.5 h-3.5 text-black shrink-0";
  switch (type) {
    case "user":
      return (
        <svg
          className={iconProps}
          fill="none"
          stroke="currentColor"
          strokeWidth="2"
          viewBox="0 0 24 24"
        >
          <path
            strokeLinecap="round"
            strokeLinejoin="round"
            d="M16 7a4 4 0 11-8 0 4 4 0 018 0zM12 14a7 7 0 00-7 7h14a7 7 0 00-7-7z"
          />
        </svg>
      );
    case "code":
      return (
        <svg
          className={iconProps}
          fill="none"
          stroke="currentColor"
          strokeWidth="2"
          viewBox="0 0 24 24"
        >
          <path
            strokeLinecap="round"
            strokeLinejoin="round"
            d="M10 20l4-16m4 4l4 4-4 4M6 16l-4-4 4-4"
          />
        </svg>
      );
    case "calendar":
      return (
        <svg
          className={iconProps}
          fill="none"
          stroke="currentColor"
          strokeWidth="2"
          viewBox="0 0 24 24"
        >
          <path
            strokeLinecap="round"
            strokeLinejoin="round"
            d="M8 7V3m8 4V3m-9 8h10M5 21h14a2 2 0 002-2V7a2 2 0 00-2-2H5a2 2 0 00-2 2v12a2 2 0 002 2z"
          />
        </svg>
      );
    case "swatch":
      return (
        <svg
          className={iconProps}
          fill="none"
          stroke="currentColor"
          strokeWidth="2"
          viewBox="0 0 24 24"
        >
          <path
            strokeLinecap="round"
            strokeLinejoin="round"
            d="M7 21a4 4 0 01-4-4V5a2 2 0 012-2h4a2 2 0 012 2v12a4 4 0 01-4 4zm0 0h12a2 2 0 002-2v-4a2 2 0 00-2-2h-2.343M11 7.343l1.657-1.657a2 2 0 012.828 0l2.829 2.829a2 2 0 010 2.828l-8.486 8.485M7 17h.01"
          />
        </svg>
      );
    case "megaphone":
      return (
        <svg
          className={iconProps}
          fill="none"
          stroke="currentColor"
          strokeWidth="2"
          viewBox="0 0 24 24"
        >
          <path
            strokeLinecap="round"
            strokeLinejoin="round"
            d="M11 5.882V19.24a1.76 1.76 0 01-3.417.592l-2.147-6.15M18 13a3 3 0 100-6M5.436 13.683A4.001 4.001 0 017 6h1.832c4.1 0 7.625-1.234 9.168-3v14c-1.543-1.766-5.067-3-9.168-3H7a3.988 3.988 0 01-1.564-.317z"
          />
        </svg>
      );
    case "currency":
    case "rupee":
      // Sponsorship / Currency represented with the Indian Rupee ₹ symbol
      return (
        <svg
          className={iconProps}
          fill="none"
          stroke="currentColor"
          strokeWidth="2.2"
          viewBox="0 0 24 24"
        >
          <path
            strokeLinecap="round"
            strokeLinejoin="round"
            d="M6 4h12M6 8.5h12M6 4h6a4.5 4.5 0 010 9H6m4 0l6.5 7.5"
          />
        </svg>
      );
    case "globe":
      return (
        <svg
          className={iconProps}
          fill="none"
          stroke="currentColor"
          strokeWidth="2"
          viewBox="0 0 24 24"
        >
          <path
            strokeLinecap="round"
            strokeLinejoin="round"
            d="M21 12a9 9 0 01-9 9m9-9a9 9 0 00-9-9m9 9H3m9 9a9 9 0 01-9-9m9 9c1.657 0 3-4.03 3-9s-1.343-9-3-9m0 18c-1.657 0-3-4.03-3-9s1.343-9 3-9m-9 9a9 9 0 019-9"
          />
        </svg>
      );
    case "document":
      return (
        <svg
          className={iconProps}
          fill="none"
          stroke="currentColor"
          strokeWidth="2"
          viewBox="0 0 24 24"
        >
          <path
            strokeLinecap="round"
            strokeLinejoin="round"
            d="M9 12h6m-6 4h6m2 5H7a2 2 0 01-2-2V5a2 2 0 012-2h5.586a1 1 0 01.707.293l5.414 5.414a1 1 0 01.293.707V19a2 2 0 01-2 2z"
          />
        </svg>
      );
    case "building":
      return (
        <svg
          className={iconProps}
          fill="none"
          stroke="currentColor"
          strokeWidth="2"
          viewBox="0 0 24 24"
        >
          <path
            strokeLinecap="round"
            strokeLinejoin="round"
            d="M19 21V5a2 2 0 00-2-2H7a2 2 0 00-2 2v16m14 0h2m-2 0h-5m-9 0H3m2 0h5M9 7h1m-1 4h1m4-4h1m-1 4h1m-5 10v-5a1 1 0 011-1h2a1 1 0 011 1v5m-4 0h4"
          />
        </svg>
      );
    case "handshake":
      return (
        <svg
          className={iconProps}
          fill="none"
          stroke="currentColor"
          strokeWidth="2"
          viewBox="0 0 24 24"
        >
          <path
            strokeLinecap="round"
            strokeLinejoin="round"
            d="M17 20h5v-2a3 3 0 00-5.356-1.857M17 20H7m10 0v-2c0-.656-.126-1.283-.356-1.857M7 20H2v-2a3 3 0 015.356-1.857M7 20v-2c0-.656.126-1.283.356-1.857m0 0a5.002 5.002 0 019.288 0M15 7a3 3 0 11-6 0 3 3 0 016 0zm6 3a2 2 0 11-4 0 2 2 0 014 0zM7 10a2 2 0 11-4 0 2 2 0 014 0z"
          />
        </svg>
      );
    default:
      return (
        <svg
          className={iconProps}
          fill="none"
          stroke="currentColor"
          strokeWidth="2"
          viewBox="0 0 24 24"
        >
          <path
            strokeLinecap="round"
            strokeLinejoin="round"
            d="M13 16h-1v-4h-1m1-4h.01M21 12a9 9 0 11-18 0 9 9 0 0118 0z"
          />
        </svg>
      );
  }
};

export default function Team() {
  const [activeTab, setActiveTab] = useState("CURRENT");
  const [selectedDomain, setSelectedDomain] = useState("ALL");

  const DOMAIN_CONFIG = [
    { id: "ALL", label: "All Domains", color: "#fff36b" },
    { id: "Core", label: "Core", color: "#ff83b8" },
    { id: "Technical", label: "Technical", color: "#8be28b" },
    { id: "Events", label: "Events", color: "#78c7ff" },
    { id: "Creative", label: "Creative", color: "#ff83b8" },
    { id: "Public Relations", label: "Public Relations", color: "#fff36b" },
    { id: "Sponsorship", label: "Sponsorship", color: "#8be28b" },
    { id: "Operations", label: "Operations", color: "#f8f3e8" },
  ];

  // Active committee members (2025-2026 has all 15 positions; 2024-2025 excludes the last 4 positions)
  const displayedCoreMembers =
    activeTab === "CURRENT" ? currentCoreMembers : pastCore2024Members;

  // Helper to match domain (Joint PR & Spons Head appears in both Public Relations and Sponsorship)
  const matchesDomain = (member, domain) => {
    if (domain === "ALL") return true;
    const target = domain.toLowerCase();
    const memberDomain = (member.domain || "").toLowerCase();
    if (memberDomain === target) return true;
    if (
      (member.role.toLowerCase().includes("pr & spons") ||
        member.role.toLowerCase().includes("pr & spon")) &&
      (target === "public relations" || target === "sponsorship")
    ) {
      return true;
    }
    return false;
  };

  // Filtered members based on selected domain
  const filteredCoreMembers = displayedCoreMembers.filter((m) =>
    matchesDomain(m, selectedDomain),
  );

  // Render individual compact team member card in the grid
  const renderMemberCard = (member, index, keyPrefix = "") => (
    <div
      key={`${keyPrefix}-${index}`}
      className="border-3 border-black rounded-2xl p-4 shadow-brutal-lg bg-white flex flex-col justify-between transition-all duration-200 hover:-translate-y-0.5"
    >
      {/* Top: Domain */}
      <div className="flex items-center justify-between mb-2.5">
        <span className="text-[10px] font-black uppercase tracking-wider px-2 py-0.5 border-2 border-black rounded bg-retroBg text-black">
          {member.domain}
        </span>
      </div>

      {/* Member Photo / Avatar Container */}
      <div className="w-full aspect-square border-2 border-black rounded-xl mb-3 bg-retroBg overflow-hidden flex items-center justify-center relative">
        <img
          src={member.photo || defaultPlaceholderImg}
          alt={member.name}
          className={`w-full h-full object-cover ${member.photoPos || "object-center"}`}
        />
      </div>

      {/* Member Info */}
      <div className="mb-2">
        <h3 className="font-black text-lg text-black leading-tight">
          {member.name}
        </h3>
        {member.quote && (
          <p className="text-xs italic text-gray-700 mt-1 line-clamp-2">
            "{member.quote}"
          </p>
        )}
      </div>

      {/* Position Badge */}
      <div className="mb-3">
        <span
          className={`inline-flex items-center gap-2 font-black text-xs px-3 py-1.5 border-2 border-black rounded-lg shadow-brutal uppercase select-none ${member.stickerBg}`}
        >
          {renderIcon(member.iconType)}
          <span>{member.role}</span>
        </span>
      </div>

      {/* Bottom Action Area */}
      <div className="pt-2.5 border-t-2 border-black/10 flex items-center justify-between mt-auto">
        <div>
          {member.socials?.linkedin ? (
            <a
              href={member.socials.linkedin}
              target="_blank"
              rel="noopener noreferrer"
              className="inline-flex items-center justify-center p-1.5 border-2 border-black rounded-md shadow-brutal-sm bg-white hover:bg-retroBlue text-black transition-colors"
              title="LinkedIn"
              aria-label={`${member.name}'s LinkedIn`}
            >
              <LinkedInIcon />
            </a>
          ) : (
            <span
              className="inline-flex items-center justify-center p-1.5 border-2 border-gray-300 rounded-md bg-gray-100 text-gray-400 cursor-not-allowed"
              title="LinkedIn (Not available)"
              aria-label="LinkedIn not available"
            >
              <LinkedInIcon />
            </span>
          )}
        </div>
      </div>
    </div>
  );

  return (
    <div className="bg-paper-grid min-h-screen pb-16">
      {/* Scoped CSS for pink badge and generous label spacing */}
      <style>{`
        .section-header .badge {
          background-color: #ff83b8 !important;
        }
        .section-divider-row {
          margin-bottom: 1.5rem !important;
        }
        .tabs-button-row {
          margin-top: 3rem !important;
          margin-bottom: 2.5rem !important;
        }
        .domain-toolbar-container {
          margin-bottom: 2.5rem !important;
        }
      `}</style>

      {/* Main Page Title / Header */}
      <SectionHeader
        title="MEET THE TEAM"
        subtitle="The minds shaping TCET ACM SIGAI."
        badgeText="PEOPLE"
      />

      {/* 1. LABEL 1: FACULTY LEADERSHIP (Black background, Pink text) */}
      <div className="max-w-7xl mx-auto px-4 sm:px-6">
        <div className="section-divider-row flex items-center justify-center gap-3">
          <div className="h-0.5 bg-black/20 flex-1 max-w-[80px] sm:max-w-[120px]" />
          <span
            className="inline-flex items-center gap-1.5 font-black text-xs px-4 py-1.5 border-2 border-black rounded-full uppercase tracking-wider select-none shadow-brutal-sm"
            style={{
              backgroundColor: "#000000",
              color: "#ff83b8",
            }}
          >
            ★ Faculty Leadership ★
          </span>
          <div className="h-0.5 bg-black/20 flex-1 max-w-[80px] sm:max-w-[120px]" />
        </div>

        <div className="flex flex-wrap justify-center gap-6 max-w-3xl mx-auto">
          {facultyMembers.map((member, index) => (
            <div key={`faculty-${index}`} className="w-full sm:w-[320px]">
              {renderMemberCard(member, index, "faculty")}
            </div>
          ))}
        </div>
      </div>

      {/* 2. TAB CONTROLS (Current Core vs Past Committees with generous spacing) */}
      <div className="tabs-button-row flex justify-center gap-4">
        <Button
          variant={activeTab === "CURRENT" ? "pink" : "white"}
          onClick={() => setActiveTab("CURRENT")}
        >
          Current Core (2025-2026)
        </Button>
        <Button
          variant={activeTab === "ALUMNI" ? "yellow" : "white"}
          onClick={() => setActiveTab("ALUMNI")}
        >
          Past Committees (2024-2025)
        </Button>
      </div>

      {/* 3. CORE TEAM GRID WITH PROPERLY SPACED COLOR-CODED LABELS */}
      <div className="max-w-7xl mx-auto px-4 sm:px-6">
        {/* Section Divider Badge: Pink label + Yellow text for 2025-2026, Yellow label + Pink text for 2024-2025 */}
        <div className="section-divider-row flex items-center justify-center gap-3">
          <div className="h-0.5 bg-black/20 flex-1 max-w-[80px] sm:max-w-[120px]" />
          {activeTab === "CURRENT" ? (
            <span
              className="inline-flex items-center font-black text-xs px-4 py-1.5 border-2 border-black rounded-md uppercase tracking-wider select-none shadow-brutal-sm"
              style={{
                backgroundColor: "#ff83b8",
                color: "#fff36b",
              }}
            >
              2025-2026 CORE TEAM
            </span>
          ) : (
            <span
              className="inline-flex items-center font-black text-xs px-4 py-1.5 border-2 border-black rounded-md uppercase tracking-wider select-none shadow-brutal-sm"
              style={{
                backgroundColor: "#fff36b",
                color: "#ff83b8",
              }}
            >
              2024-2025 CORE TEAM
            </span>
          )}
          <div className="h-0.5 bg-black/20 flex-1 max-w-[80px] sm:max-w-[120px]" />
        </div>

        {/* Structured Domain Filter Toolbar Container */}
        <div className="domain-toolbar-container flex flex-col items-center gap-2 mb-10">
          <div className="inline-flex flex-wrap justify-center items-center gap-2 p-2 bg-white/80 border-2 border-black rounded-2xl shadow-brutal-sm max-w-4xl mx-auto">
            {DOMAIN_CONFIG.map((d) => {
              const isSelected =
                selectedDomain.toLowerCase() === d.id.toLowerCase();

              return (
                <button
                  key={d.id}
                  type="button"
                  onClick={() => setSelectedDomain(d.id)}
                  style={
                    isSelected
                      ? {
                          backgroundColor: d.color,
                          color: "#000000",
                        }
                      : {}
                  }
                  className={`inline-flex items-center font-black text-xs px-3.5 py-1.5 border-2 border-black rounded-xl transition-all duration-150 cursor-pointer select-none ${
                    isSelected
                      ? "shadow-brutal -translate-y-0.5"
                      : "bg-white text-black shadow-sm hover:bg-retroBg hover:-translate-y-0.5"
                  }`}
                >
                  <span>{d.label}</span>
                </button>
              );
            })}
          </div>
        </div>

        {/* Member Cards Grid or Empty Domain State */}
        {filteredCoreMembers.length > 0 ? (
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6 items-start">
            {filteredCoreMembers.map((member, index) =>
              renderMemberCard(
                member,
                index,
                activeTab === "CURRENT" ? "current-core" : "past-core-2024",
              ),
            )}
          </div>
        ) : (
          <div className="text-center py-10 border-2 border-dashed border-black/30 rounded-2xl bg-white/60 p-6 max-w-sm mx-auto shadow-brutal-sm">
            <p className="font-black text-sm text-black m-0">
              No members found in {selectedDomain}.
            </p>
            <button
              type="button"
              onClick={() => setSelectedDomain("ALL")}
              className="mt-3 inline-block font-black text-xs px-3.5 py-1.5 border-2 border-black rounded-lg bg-retroYellow text-black shadow-brutal-sm hover:-translate-y-0.5 transition-transform cursor-pointer select-none"
            >
              Show All Domains
            </button>
          </div>
        )}
      </div>
    </div>
  );
}
