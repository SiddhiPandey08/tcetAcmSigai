import React from "react";

const STICKERS = [
  {
    id: 1,
    text: "EXCEPT FOR COMPILER ERRORS, CODE IS FINE.",
    bg: "bg-[#D32F2F]",
    textColor: "text-retroYellow",
  },
  {
    id: 2,
    text: "ADMITS ONE // MODEL INFERENCE LAB",
    bg: "bg-retroYellow",
    textColor: "text-black",
  },
  {
    id: 3,
    text: "PROBABLY OVERSTIMULATED BY LOSS CURVES",
    bg: "bg-retroPink",
    textColor: "text-black",
  },
  {
    id: 4,
    text: "0x404: SLEEP_ROUTINE_NOT_FOUND",
    bg: "bg-retroBlue",
    textColor: "text-white",
  },
];

const StickerTicker = () => {
  return (
    <div className=" border-b-3 border-black py-2.5 overflow-hidden relative">
      <div className="flex items-center gap-5 animate-marquee whitespace-nowrap px-4 select-none">
        {[...STICKERS, ...STICKERS].map((item, idx) => (
          <div
            key={idx}
            className="inline-flex items-center bg-white rounded-md border-2 border-black p-1 shadow-brutal-sm"
          >
            <span
              className={`font-mono font-black text-[11px] tracking-wide px-2.5 py-1 rounded ${item.bg} ${item.textColor}`}
            >
              {item.text}
            </span>
          </div>
        ))}
      </div>
    </div>
  );
};
export default StickerTicker;
