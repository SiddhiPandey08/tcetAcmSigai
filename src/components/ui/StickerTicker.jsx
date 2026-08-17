import React from 'react';

const STICKERS = [
  {
    id: 1,
    bg: 'bg-[#D32F2F]',
    border: 'border-black',
    rotation: '-rotate-2',
    text: "EXCEPT FOR COMPILER ERRORS, CODE IS FINE.",
    subtext: "BUILD STATUS: PASSING (BARELY)",
    textColor: 'text-retroYellow',
    type: 'ticket',
    barcode: '|||| | ||| || |'
  },
  {
    id: 2,
    bg: 'bg-retroYellow',
    border: 'border-black',
    rotation: 'rotate-1',
    text: "ADMITS ONE // MODEL INFERENCE LAB",
    subtext: "SIGAI-2026-X86-64",
    textColor: 'text-[#D32F2F]',
    type: 'ticket',
    barcode: '|| |||| | |||'
  },
  {
    id: 3,
    bg: 'bg-retroPink',
    border: 'border-black',
    rotation: '-rotate-1',
    text: "PROBABLY OVERSTIMULATED BY LOSS CURVES",
    subtext: "EPOCH 100/100 • CONVERGED",
    textColor: 'text-black',
    type: 'sticker',
    barcode: '|||||| || |'
  },
  {
    id: 4,
    bg: 'bg-retroGreen',
    border: 'border-black',
    rotation: 'rotate-2',
    text: "0x404: SLEEP_ROUTINE_NOT_FOUND",
    subtext: "TCET SIGAI JOURNAL EDITION",
    textColor: 'text-black',
    type: 'ticket',
    barcode: '| |||| ||||'
  }
];

export const StickerTicker = () => {
  return (
    <div className="bg-[#EBE5DA] border-b-3 border-black py-3 overflow-hidden relative shadow-sm">
      <div className="flex items-center gap-6 animate-marquee whitespace-nowrap px-4 select-none">
        {[...STICKERS, ...STICKERS].map((item, idx) => (
          <div
            key={idx}
            className={`inline-flex items-center relative transition-transform duration-200 hover:rotate-0 hover:scale-105 cursor-pointer ${item.rotation}`}
          >
            {/* White Sticker Die-Cut Outer Border Container */}
            <div className="p-1 bg-white rounded-lg border-2 border-black shadow-brutal">
              
              {/* Inner Ticket Card */}
              <div
                className={`relative px-4 py-2 rounded ${item.bg} border-2 ${item.border} flex items-center gap-3`}
              >
                {/* Perforated Movie Ticket Notch (Left Side) */}
                <div className="absolute -left-2.5 top-1/2 -translate-y-1/2 w-3 h-3 bg-white border-r-2 border-black rounded-full" />

                {/* Main Content */}
                <div className="flex flex-col">
                  <span className={`font-mono font-black text-xs sm:text-sm tracking-wide ${item.textColor}`}>
                    {item.text}
                  </span>
                  <span className="font-mono text-[9px] font-bold text-black/70 tracking-widest uppercase">
                    {item.subtext}
                  </span>
                </div>

                {/* Vertical Barcode Divider */}
                <div className="h-6 w-[1.5px] bg-black/40 mx-1" />

                {/* Ticket Barcode Graphic */}
                <div className="flex flex-col items-center">
                  <span className="font-mono text-[10px] leading-none tracking-tighter font-black text-black opacity-80">
                    {item.barcode}
                  </span>
                  <span className="font-mono text-[7px] font-bold text-black">PASS</span>
                </div>

                {/* Perforated Movie Ticket Notch (Right Side) */}
                <div className="absolute -right-2.5 top-1/2 -translate-y-1/2 w-3 h-3 bg-white border-l-2 border-black rounded-full" />
              </div>

            </div>
          </div>
        ))}
      </div>
    </div>
  );
};