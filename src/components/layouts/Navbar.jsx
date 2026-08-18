import React from "react";
import { NavLink, Link } from "react-router-dom";

export function Navbar() {
  const navItems = [
    { name: "HOME", path: "/" },
    { name: "EVENTS", path: "/events" },
    { name: "TEAM", path: "/team" },
    { name: "BLOGS", path: "/blogs" },
    { name: "PUBLICATIONS", path: "/publications" },
  ];

  return (
    <header className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 pt-6">
      <nav className="bg-white border-2 border-black rounded-2xl p-3 sm:p-4 flex flex-col md:flex-row items-center justify-between gap-4 shadow-[4px_4px_0px_0px_rgba(0,0,0,1)]">
        {/* Brand / Logo Section */}
        <Link to="/" className="flex items-center gap-3 group">
          <span className="bg-[#ff69b4] text-black font-extrabold text-sm px-3 py-1 rounded-lg border-2 border-black shadow-[2px_2px_0px_0px_rgba(0,0,0,1)] group-hover:translate-x-0.5 group-hover:translate-y-0.5 group-hover:shadow-none transition-all">
            TCET
          </span>
          <span className="font-extrabold text-xl tracking-tight text-black">
            ACM SIGAI
          </span>
        </Link>

        {/* Navigation Links */}
        <div className="flex flex-wrap items-center justify-center gap-2 sm:gap-3">
          {navItems.map((item) => (
            <NavLink
              key={item.path}
              to={item.path}
              end={item.path === "/"}
              className={({ isActive }) =>
                `px-4 py-1.5 rounded-xl font-bold text-xs sm:text-sm tracking-wide border-2 border-black transition-all ${
                  isActive
                    ? "bg-[#ffdb58] shadow-[2px_2px_0px_0px_rgba(0,0,0,1)]"
                    : "bg-white text-black hover:bg-gray-100 shadow-[2px_2px_0px_0px_rgba(0,0,0,1)] hover:translate-x-0.5 hover:translate-y-0.5 hover:shadow-none"
                }`
              }
            >
              {item.name}
            </NavLink>
          ))}
        </div>
      </nav>
    </header>
  );
}
