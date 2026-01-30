"use client";
import { useEffect, useRef } from "react";
import gsap from "gsap";

export default function CustomCursor() {
  const cursorRef = useRef(null);
  const followerRef = useRef(null);

  useEffect(() => {
    const moveCursor = (e) => {
      gsap.to(cursorRef.current, {
        x: e.clientX,
        y: e.clientY,
        duration: 0.1,
      });
      gsap.to(followerRef.current, {
        x: e.clientX,
        y: e.clientY,
        duration: 0.4,
        ease: "power2.out"
      });
    };

    const onMouseEnter = () => gsap.to(followerRef.current, { scale: 2, backgroundColor: "rgba(59, 130, 246, 0.2)" });
    const onMouseLeave = () => gsap.to(followerRef.current, { scale: 1, backgroundColor: "transparent" });

    const hoverables = document.querySelectorAll("button, a, .track-card");
    hoverables.forEach((el) => {
      el.addEventListener("mouseenter", onMouseEnter);
      el.addEventListener("mouseleave", onMouseLeave);
    });

    window.addEventListener("mousemove", moveCursor);
    return () => {
      window.removeEventListener("mousemove", moveCursor);
      hoverables.forEach((el) => {
        el.removeEventListener("mouseenter", onMouseEnter);
        el.removeEventListener("mouseleave", onMouseLeave);
      });
    };
  }, []);

  return (
    <>
      <div ref={cursorRef} className="fixed top-5 left-5 w-2 h-2 bg-blue-500 rounded-full pointer-events-none z-[9999] -translate-x-1/2 -translate-y-1/2" />
      <div ref={followerRef} className="fixed top-0 left-0 w-10 h-10 border border-blue-500/50 rounded-full pointer-events-none z-[9998] -translate-x-1/2 -translate-y-1/2 transition-transform duration-300" />
    </>
  );
}