// src/pages/Team.jsx
import React, { useState, useEffect, useRef } from "react";
import { SectionHeader } from "../components/ui/SectionHeader";
import { motion, useScroll, useTransform } from "framer-motion";
import { Mail, ArrowUpRight } from "lucide-react";
import { TEAM_MEMBERS } from "../data/teamData";

/* Custom Brand SVG Icons */
const LinkedinIcon = ({ size = 18 }) => (
  <svg width={size} height={size} viewBox="0 0 24 24" fill="currentColor">
    <path d="M19 3a2 2 0 0 1 2 2v14a2 2 0 0 1-2 2H5a2 2 0 0 1-2-2V5a2 2 0 0 1 2-2h14m-.5 15.5v-5.3a3.26 3.26 0 0 0-3.26-3.26c-.85 0-1.84.52-2.28 1.3v-1.11h-2.79v8.37h2.79v-4.93c0-.77.62-1.4 1.39-1.4a1.4 1.4 0 0 1 1.4 1.4v4.93h2.75M6.46 10.9v8.37H9.25V10.9H6.46M7.86 6.74a1.63 1.63 0 1 0 0 3.26 1.63 1.63 0 0 0 0-3.26Z" />
  </svg>
);

const GithubIcon = ({ size = 18 }) => (
  <svg width={size} height={size} viewBox="0 0 24 24" fill="currentColor">
    <path d="M12 0C5.37 0 0 5.37 0 12c0 5.31 3.435 9.795 8.205 11.385.6.105.825-.255.825-.57 0-.285-.015-1.23-.015-2.235-3.015.555-3.795-.735-4.035-1.41-.135-.345-.72-1.41-1.23-1.695-.42-.225-1.02-.78-.015-.795.945-.015 1.62.87 1.845 1.23 1.08 1.815 2.805 1.305 3.495.99.105-.78.42-1.305.765-1.605-2.67-.3-5.46-1.335-5.46-5.925 0-1.305.465-2.385 1.23-3.225-.12-.3-.54-1.53.12-3.18 0 0 1.005-.315 3.3 1.23.96-.27 1.98-.405 3-.405s2.04.135 3 .405c2.295-1.56 3.3-1.23 3.3-1.23.66 1.65.24 2.88.12 3.18.765.84 1.23 1.905 1.23 3.225 0 4.605-2.805 5.625-5.475 5.925.435.375.81 1.095.81 2.22 0 1.605-.015 2.895-.015 3.3 0 .315.225.69.825.57A12.02 12.02 0 0024 12c0-6.63-5.37-12-12-12z" />
  </svg>
);

const TwitterIcon = ({ size = 18 }) => (
  <svg width={size} height={size} viewBox="0 0 24 24" fill="currentColor">
    <path d="M18.244 2.25h3.308l-7.227 8.26 8.502 11.24H16.17l-5.214-6.817L4.99 21.75H1.68l7.73-8.835L1.254 2.25H8.08l4.713 6.231zm-1.161 17.52h1.833L7.084 4.126H5.117z" />
  </svg>
);

/* ================= INDIVIDUAL TEAM ROW ================= */
function TeamRow({ member, index, isActive }) {
  const rowRef = useRef(null);
  const isEven = index % 2 === 0;

  const { scrollYProgress } = useScroll({
    target: rowRef,
    offset: ["start end", "end start"],
  });

  const yPos = useTransform(scrollYProgress, [0, 0.5, 1], [40, 0, -20]);
  const opacity = useTransform(
    scrollYProgress,
    [0, 0.3, 0.8, 1],
    [0.3, 1, 1, 0.5],
  );

  return (
    <motion.div
      ref={rowRef}
      style={{ y: yPos, opacity }}
      className="team-row py-12 md:py-16 border-b-2 border-black/10 last:border-b-0 transition-all"
      data-id={member.id}
    >
      <div className="grid grid-cols-1 md:grid-cols-12 gap-8 items-center">
        {/* Bio Column */}
        <div
          className={`md:col-span-7 space-y-4 ${
            isEven ? "md:order-1 pr-0 md:pr-6" : "md:order-2 pl-0 md:pl-6"
          }`}
        >
          <div className="flex items-center gap-3">
            <span className="bg-black text-white font-mono text-[11px] px-2.5 py-1 rounded-md border border-black shadow-[1.5px_1.5px_0px_0px_rgba(0,0,0,1)]">
              0{index + 1}
            </span>
            <span className="bg-white text-black font-black text-xs uppercase border-2 border-black px-3 py-1 rounded-full shadow-[2px_2px_0px_0px_rgba(0,0,0,1)] -rotate-1">
              {member.role}
            </span>
          </div>

          <h3 className="text-3xl md:text-4xl font-black uppercase tracking-tight text-slate-900">
            {member.name}
          </h3>

          <div className="inline-block bg-retroYellow text-black font-bold text-xs uppercase px-2.5 py-0.5 border border-black rounded">
            {member.domain}
          </div>

          <p className="text-slate-700 font-medium text-sm md:text-base leading-relaxed border-l-3 border-black pl-4 py-1 bg-slate-100/60 rounded-r-lg">
            {member.bio}
          </p>

          {/* Social Links */}
          <div className="flex items-center gap-3 pt-2">
            {member.socials.linkedin && (
              <a
                href={member.socials.linkedin}
                target="_blank"
                rel="noreferrer"
                className="p-2.5 bg-white border-2 border-black rounded-lg shadow-[2px_2px_0px_0px_rgba(0,0,0,1)] hover:bg-retroBlue hover:translate-x-[1px] hover:translate-y-[1px] hover:shadow-none transition-all flex items-center justify-center text-black"
              >
                <LinkedinIcon size={18} />
              </a>
            )}
            {member.socials.github && (
              <a
                href={member.socials.github}
                target="_blank"
                rel="noreferrer"
                className="p-2.5 bg-white border-2 border-black rounded-lg shadow-[2px_2px_0px_0px_rgba(0,0,0,1)] hover:bg-retroYellow hover:translate-x-[1px] hover:translate-y-[1px] hover:shadow-none transition-all flex items-center justify-center text-black"
              >
                <GithubIcon size={18} />
              </a>
            )}
            {member.socials.twitter && (
              <a
                href={member.socials.twitter}
                target="_blank"
                rel="noreferrer"
                className="p-2.5 bg-white border-2 border-black rounded-lg shadow-[2px_2px_0px_0px_rgba(0,0,0,1)] hover:bg-retroGreen hover:translate-x-[1px] hover:translate-y-[1px] hover:shadow-none transition-all flex items-center justify-center text-black"
              >
                <TwitterIcon size={18} />
              </a>
            )}
            {member.socials.email && (
              <a
                href={member.socials.email}
                className="p-2.5 bg-white border-2 border-black rounded-lg shadow-[2px_2px_0px_0px_rgba(0,0,0,1)] hover:bg-retroPink hover:translate-x-[1px] hover:translate-y-[1px] hover:shadow-none transition-all flex items-center justify-center text-black"
              >
                <Mail size={18} />
              </a>
            )}
          </div>
        </div>

        {/* Image Card Column (Alternates Position) */}
        <div
          className={`md:col-span-5 flex justify-center ${
            isEven ? "md:order-2 md:justify-end" : "md:order-1 md:justify-start"
          }`}
        >
          <motion.div
            animate={{
              scale: isActive ? 1.03 : 1,
              rotate: isActive ? (isEven ? -1 : 1) : 0,
              boxShadow: isActive
                ? "8px 8px 0px 0px rgba(0,0,0,1)"
                : "4px 4px 0px 0px rgba(0,0,0,1)",
            }}
            transition={{ duration: 0.3 }}
            className={`relative w-full max-w-xs p-3 rounded-2xl border-3 border-black ${member.color} transition-all`}
          >
            <div className="relative aspect-[4/5] overflow-hidden rounded-xl border-2 border-black bg-white">
              <img
                src={member.image}
                alt={member.name}
                className="w-full h-full object-cover object-center filter grayscale hover:grayscale-0 transition-all duration-500"
              />

              <div className="absolute bottom-3 left-3 bg-white border-2 border-black rounded-lg px-3 py-1 shadow-[2px_2px_0px_0px_rgba(0,0,0,1)]">
                <span className="font-black text-xs uppercase tracking-wider text-black">
                  {member.name.split(" ")[0]}
                </span>
              </div>
            </div>

            {/* Social Icon Ribbon */}
            <div
              className={`absolute top-6 flex flex-col gap-2 bg-white border-2 border-black p-2 rounded-lg shadow-[2px_2px_0px_0px_rgba(0,0,0,1)] ${
                isEven ? "-right-3" : "-left-3"
              }`}
            >
              {member.socials.linkedin && (
                <a
                  href={member.socials.linkedin}
                  target="_blank"
                  rel="noreferrer"
                  className="text-black hover:text-retroBlue"
                >
                  <LinkedinIcon size={16} />
                </a>
              )}
              {member.socials.github && (
                <a
                  href={member.socials.github}
                  target="_blank"
                  rel="noreferrer"
                  className="text-black hover:text-retroYellow"
                >
                  <GithubIcon size={16} />
                </a>
              )}
            </div>
          </motion.div>
        </div>
      </div>
    </motion.div>
  );
}

/* ================= MAIN TEAM PAGE ================= */
export default function Team() {
  const [activeMemberId, setActiveMemberId] = useState(TEAM_MEMBERS[0].id);

  useEffect(() => {
    let rafId;
    const handleScroll = () => {
      rafId = requestAnimationFrame(() => {
        const rows = document.querySelectorAll(".team-row");
        if (!rows.length) return;

        const centerY = window.innerHeight / 2;
        let minDistance = Infinity;
        let closestId = null;

        rows.forEach((row) => {
          const rect = row.getBoundingClientRect();
          const rowCenterY = rect.top + rect.height / 2;
          const dist = Math.abs(rowCenterY - centerY);

          if (dist < minDistance) {
            minDistance = dist;
            closestId = row.dataset.id;
          }
        });

        if (closestId) setActiveMemberId(closestId);
      });
    };

    window.addEventListener("scroll", handleScroll, { passive: true });
    handleScroll();

    return () => {
      window.removeEventListener("scroll", handleScroll);
      cancelAnimationFrame(rafId);
    };
  }, []);

  return (
    <div className="pb-24 max-w-6xl mx-auto px-4 sm:px-6 lg:px-8 mt-6">
      <SectionHeader
        badgeText="THE MINDSHARE"
        title="MEET THE EXPERTS"
        subtitle="A skilled and passionate team of student leaders, researchers, and mentors driving AI innovation at TCET."
      />

      <div className="my-10 p-6 bg-white border-3 border-black rounded-2xl shadow-[4px_4px_0px_0px_rgba(0,0,0,1)] flex flex-col sm:flex-row items-center justify-between gap-4">
        <div>
          <h3 className="text-2xl font-black uppercase text-black">
            Meet Our{" "}
            <span className="underline decoration-retroYellow decoration-4">
              Skilled &amp; Caring
            </span>{" "}
            Team
          </h3>
          <p className="text-xs font-bold text-slate-600 mt-1">
            Dedicated to providing hands-on technical guidance, research
            opportunities, and community growth.
          </p>
        </div>
        <a
          href="mailto:acmsigai@tcetmumbai.in"
          className="shrink-0 bg-retroPink text-black font-black text-xs uppercase px-6 py-3 rounded-full border-2 border-black shadow-[2px_2px_0px_0px_rgba(0,0,0,1)] hover:translate-x-[1px] hover:translate-y-[1px] hover:shadow-none transition-all flex items-center gap-2"
        >
          <span>Get in touch</span>
          <ArrowUpRight size={16} strokeWidth={3} />
        </a>
      </div>

      <div className="bg-white border-3 border-black rounded-3xl p-6 sm:p-10 shadow-[6px_6px_0px_0px_rgba(0,0,0,1)]">
        {TEAM_MEMBERS.map((member, index) => (
          <TeamRow
            key={member.id}
            member={member}
            index={index}
            isActive={activeMemberId === member.id}
          />
        ))}
      </div>
    </div>
  );
}
