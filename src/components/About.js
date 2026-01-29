"use client";
import { useRef } from "react";
import gsap from "gsap";
import { useGSAP } from "@gsap/react";
import { ScrollTrigger } from "gsap/ScrollTrigger";

gsap.registerPlugin(ScrollTrigger);

export default function About() {
  const container = useRef();
  const triggerRef = useRef();

  useGSAP(() => {
    ScrollTrigger.create({
      trigger: triggerRef.current,
      start: "top top",
      end: "bottom bottom",
      pin: ".about-left",
    });

    gsap.from(".about-card", {
      scrollTrigger: {
        trigger: ".about-right",
        start: "top 80%",
        end: "bottom 20%",
        toggleActions: "play none none reverse",
      },
      y: 100,
      opacity: 0,
      stagger: 0.3,
      duration: 1,
      ease: "power4.out",
    });
  }, { scope: container });

  return (
    <section ref={container} className="relative bg-[#050505] text-white">
      <div ref={triggerRef} className="flex flex-col md:flex-row min-h-screen">

        <div className="about-left w-full md:w-1/2 h-screen flex flex-col justify-center px-10 md:px-20 border-r border-zinc-800/50">
          <h2 className="text-sm font-mono text-blue-500 tracking-[0.3em] mb-4">01. OVERVIEW</h2>
          <h3 className="text-5xl md:text-7xl font-black uppercase tracking-tighter italic">
            DECODE THE <br /> <span className="text-zinc-700">INVISIBLE.</span>
          </h3>
          <p className="mt-8 text-zinc-400 max-w-sm leading-relaxed">
            NEXUS 2026 is a 48-hour pressure cooker where the world's most talented developers turn abstract ideas into reality.
          </p>
        </div>

        <div className="about-right w-full md:w-1/2 p-10 md:p-20 space-y-20">
          <div className="about-card p-10 bg-zinc-900/50 border border-zinc-800 rounded-3xl backdrop-blur-sm">
            <h4 className="text-2xl font-bold mb-4 text-blue-400">The Mission</h4>
            <p className="text-zinc-400 leading-relaxed">
              We aim to push the boundaries of Web3, AI, and Sustainable Tech. We don't just want apps; we want solutions that change the human experience.
            </p>
          </div>

          <div className="about-card p-10 bg-zinc-900/50 border border-zinc-800 rounded-3xl backdrop-blur-sm">
            <h4 className="text-2xl font-bold mb-4 text-blue-400">The Culture</h4>
            <p className="text-zinc-400 leading-relaxed">
              No hierarchies. Just raw talent. Whether you're a solo-founder or a student, NEXUS is the place where your code speaks louder than your resume.
            </p>
          </div>

          <div className="about-card p-10 bg-zinc-900/50 border border-zinc-800 rounded-3xl backdrop-blur-sm">
            <h4 className="text-2xl font-bold mb-4 text-blue-400">The Reward</h4>
            <p className="text-zinc-400 leading-relaxed">
              With a prize pool of $50k and direct access to top-tier VC mentors, the stakes have never been higher.
            </p>
          </div>
        </div>
      </div>
    </section>
  );
}