"use client";
import { useRef } from "react";
import gsap from "gsap";
import { useGSAP } from "@gsap/react";
import { ScrollTrigger } from "gsap/ScrollTrigger";

gsap.registerPlugin(ScrollTrigger);

const speakers = [
  { name: "Dr. Aris Thorne", role: "AI Ethicist", img: "https://images.unsplash.com/photo-1507003211169-0a1dd7228f2d?q=80&w=400&h=500&auto=format&fit=crop" },
  { name: "Elena Voss", role: "Web3 Architect", img: "https://images.unsplash.com/photo-1494790108377-be9c29b29330?q=80&w=400&h=500&auto=format&fit=crop" },
  { name: "Marcus Jinx", role: "Lead Dev @ Cyberdyne", img: "https://images.unsplash.com/photo-1500648767791-00dcc994a43e?q=80&w=400&h=500&auto=format&fit=crop" },
];

export default function Speakers() {
  const container = useRef();

  useGSAP(() => {
    gsap.utils.toArray(".speaker-img").forEach((img) => {
      gsap.to(img, {
        yPercent: -20,
        ease: "none",
        scrollTrigger: {
          trigger: img,
          scrub: true,
        },
      });
    });
  }, { scope: container });

  return (
    <section ref={container} className="py-24 bg-[#050505]">
      <div className="container mx-auto px-6 md:px-20">
        <h2 className="text-4xl font-black mb-16 tracking-tighter italic">GUEST SPEAKERS</h2>
        <div className="grid grid-cols-1 md:grid-cols-3 gap-12">
          {speakers.map((s, i) => (
            <div key={i} className="group relative overflow-hidden rounded-2xl bg-zinc-900 border border-zinc-800">
              <div className="h-[400px] overflow-hidden">
                <img src={s.img} alt={s.name} className="speaker-img w-full h-[120%] object-cover grayscale group-hover:grayscale-0 transition-all duration-700" />
              </div>
              <div className="absolute bottom-0 left-0 right-0 p-6 bg-gradient-to-t from-black to-transparent">
                <h4 className="text-2xl font-bold">{s.name}</h4>
                <p className="text-blue-500 font-mono text-sm uppercase">{s.role}</p>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}