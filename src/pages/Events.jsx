// src/pages/Events.jsx
import React, { useState, useMemo } from "react";
import { Link } from "react-router-dom";
import { eventsData } from "../data/eventsData";
import { SectionHeader } from "../components/ui/SectionHeader"; // Adjust path as needed

const TYPE_COLORS = {
  Event: "bg-retroPink",
  Workshop: "bg-retroBlue",
  Seminar: "bg-retroYellow",
  Competition: "bg-retroGreen",
  "Industrial Visit": "bg-retroPink",
  "Expert Talk": "bg-retroBlue",
  Other: "bg-retroYellow",
};

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

export default function Events() {
  const [filter, setFilter] = useState("ALL");

  const categories = useMemo(() => {
    const types = new Set(eventsData.map((e) => e.type));
    return ["ALL", ...Array.from(types).sort()];
  }, []);

  const eventsByYear = useMemo(() => {
    const filtered = eventsData.filter(
      (e) => filter === "ALL" || e.type === filter,
    );

    const grouped = filtered.reduce((acc, event, index) => {
      const y = event.year || "Archive";
      if (!acc[y]) acc[y] = [];
      acc[y].push({
        ...event,
        eventId: event.id ?? event.slug ?? index + 1,
      });
      return acc;
    }, {});

    const sortedYears = Object.keys(grouped).sort((a, b) => b.localeCompare(a));

    return sortedYears.map((year) => ({
      year,
      events: grouped[year],
    }));
  }, [filter]);

  return (
    <div className="space-y-16 pb-20 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 mt-6">
      <section>
        {/* Uniform SectionHeader */}
        <SectionHeader
          badgeText="OUR JOURNEY"
          title="THINGS WE'VE DONE."
          subtitle="A collection of events, workshops, seminars and experiences from ACM SIGAI."
        />

        {/* Category Filters */}
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

        {/* Events Grid */}
        <div className="space-y-16">
          {eventsByYear.map(({ year, events }) => (
            <div key={year} className="relative mb-14 last:mb-0">
              <div className="mb-6 flex justify-start">
                <h3 className="text-lg font-bold bg-white text-black border-[1.5px] border-black px-4 py-1 shadow-[2px_2px_0px_0px_rgba(0,0,0,1)] -rotate-1 inline-block rounded-lg">
                  {year}
                </h3>
              </div>

              <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
                {events.map((event) => {
                  const cardColor = TYPE_COLORS[event.type] || "bg-retroPink";

                  return (
                    <div
                      key={event.eventId}
                      className="group flex flex-col bg-white border-[1.5px] border-black rounded-2xl shadow-[3px_3px_0px_0px_rgba(0,0,0,1)] hover:shadow-[5px_5px_0px_0px_rgba(0,0,0,1)] hover:-translate-y-0.5 transition-all duration-200 overflow-hidden"
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
                    </div>
                  );
                })}
              </div>
            </div>
          ))}
        </div>
      </section>
    </div>
  );
}
