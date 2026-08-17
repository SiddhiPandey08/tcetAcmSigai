import React, { useEffect, useState } from "react";

export const CustomCursor = () => {
  const [position, setPosition] = useState({ x: -100, y: -100 });
  const [isHovered, setIsHovered] = useState(false);
  const [isMouseDown, setIsMouseDown] = useState(false);

  useEffect(() => {
    let frameId;

    const handleMouseMove = (e) => {
      frameId = requestAnimationFrame(() => {
        setPosition({ x: e.clientX, y: e.clientY });

        const target = e.target;
        const interactive =
          target.closest("a") ||
          target.closest("button") ||
          target.closest(".cursor-pointer") ||
          target.tagName === "INPUT" ||
          target.tagName === "TEXTAREA";

        setIsHovered(!!interactive);
      });
    };

    const handleMouseDown = () => setIsMouseDown(true);
    const handleMouseUp = () => setIsMouseDown(false);

    window.addEventListener("mousemove", handleMouseMove);
    window.addEventListener("mousedown", handleMouseDown);
    window.addEventListener("mouseup", handleMouseUp);

    return () => {
      cancelAnimationFrame(frameId);
      window.removeEventListener("mousemove", handleMouseMove);
      window.removeEventListener("mousedown", handleMouseDown);
      window.removeEventListener("mouseup", handleMouseUp);
    };
  }, []);

  return (
    <div
      className="fixed top-0 left-0 pointer-events-none z-[9999] hidden lg:block"
      style={{
        transform: `translate3d(${position.x}px, ${position.y}px, 0)`,
        willChange: "transform",
      }}
    >
      <div
        className={`relative -top-1 -left-2 origin-top-left transition-transform duration-150 ease-out ${
          isHovered ? "scale-125 -rotate-12" : "scale-100 rotate-0"
        } ${isMouseDown ? "scale-90" : ""}`}
      >
        <svg
          width="32"
          height="36"
          viewBox="0 0 32 36"
          fill="none"
          xmlns="http://www.w3.org/2000/svg"
          className="drop-shadow-[3px_3px_0px_rgba(0,0,0,1)]"
        >
          {/* --- MAIN HAND POINTER PATH --- */}
          <path
            d="
              M 7 12 
              L 7 3 C 7 1 12 1 12 3 L 12 12
              C 13 10 17 10 17 13
              C 18 11 22 11 22 14
              C 23 13 26 13 26 16
              L 26 22
              C 26 27 21 30 15 30
              L 10 30
              C 6 30 4 25 4 21
              L 4 17
              C 4 14 8 14 8 16
              Z
            "
            fill="white"
            stroke="black"
            strokeWidth="2.5"
            strokeLinejoin="round"
            strokeLinecap="round"
          />

          {/* --- KNUCKLE SEPARATION CREASES --- */}
          <path
            d="M 12 16 L 12 21 M 17 17 L 17 22 M 22 18 L 22 22"
            stroke="black"
            strokeWidth="2"
            strokeLinecap="round"
          />

          {/* --- THUMB OVERLAP CREASE --- */}
          <path
            d="M 4 17 C 8 17 10 19 10 23"
            stroke="black"
            strokeWidth="2"
            strokeLinecap="round"
          />

          {/* --- RETRO BRUTALIST WRIST CUFF --- */}
          <rect
            x="7"
            y="29"
            width="16"
            height="6"
            rx="2"
            fill={isHovered ? "#FF70A6" : "#6EE7B7"}
            stroke="black"
            strokeWidth="2.5"
          />

          {/* --- INDEX FINGERTIP ACCENT (POINT TARGET) --- */}
          <circle
            cx="9.5"
            cy="4"
            r="1.5"
            fill={isHovered ? "#FF70A6" : "#FFC700"}
          />
        </svg>
      </div>
    </div>
  );
};
