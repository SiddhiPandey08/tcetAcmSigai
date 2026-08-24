import React from "react";

export const SectionHeader = ({ title, subtitle, badgeText }) => {
  return (
    <div className="text-center my-8 relative inline-block w-full">
      {badgeText && (
        <span className="bg-retroBlue text-black font-black text-xs px-3.5 py-1 border-2 border-black rounded-full uppercase tracking-wider inline-block -rotate-2 mb-3 shadow-[2px_2px_0px_0px_rgba(0,0,0,1)]">
          {badgeText}
        </span>
      )}
      <h2 className="text-4xl md:text-5xl font-black uppercase tracking-tight text-slate-900">
        {title}
      </h2>
      {subtitle && (
        <p className="text-slate-700 font-bold mt-2 max-w-2xl mx-auto text-sm md:text-base">
          {subtitle}
        </p>
      )}
    </div>
  );
};
