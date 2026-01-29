"use client";
import { useRef } from "react";
import gsap from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";
import { useGSAP } from "@gsap/react";
import { Cpu, Globe, Shield, Zap } from "lucide-react";

gsap.registerPlugin(ScrollTrigger);

const tracks = [
  { 
    title: "AI & Neural Labs", 
    desc: "Train models that redefine human-computer interaction.", 
    icon: <Cpu className="w-8 h-8" />,
    color: "group-hover:text-blue-500"
  },
  { 
    title: "Web3 Frontiers", 
    desc: "Architecting decentralized protocols for the new internet.", 
    icon: <Globe className="w-8 h-8" />,
    color: "group-hover:text-purple-500"
  },
  { 
    title: "Cyber Security", 
    desc: "Pentesting and securing the infrastructure of tomorrow.", 
    icon: <Shield className="w-8 h-8" />,
    color: "group-hover:text-red-500"
  },
  { 
    title: "FinTech 2.0", 
    desc: "Innovating the future of digital assets and banking.", 
    icon: <Zap className="w-8 h-8" />,
    color: "group-hover:text-yellow-500"
  }
];

export default function Tracks() {
  const container = useRef();

  useGSAP(() => {
    gsap.from(".track-card", {
      scrollTrigger: {
        trigger: ".track-grid",
        start: "top 85%",
      },
      y: 60,
      opacity: 0,
      rotateX: -15,
      stagger: 0.15,
      duration: 1,
      ease: "power4.out",
    });
  }, { scope: container });

  const onMouseEnter = (e) => {
    const card = e.currentTarget;
    gsap.to(card, { scale: 1.02, duration: 0.3, ease: "power2.out" });
  };

  const onMouseMove = (e) => {
    const card = e.currentTarget;
    const rect = card.getBoundingClientRect();
    const x = e.clientX - rect.left;
    const y = e.clientY - rect.top;
    const centerX = rect.width / 2;
    const centerY = rect.height / 2;
    const rotateX = (y - centerY) / 10;
    const rotateY = (centerX - x) / 10;

    gsap.to(card, {
      rotateX: rotateX,
      rotateY: rotateY,
      duration: 0.5,
      ease: "power2.out",
    });
  };

  const onMouseLeave = (e) => {
    const card = e.currentTarget;
    gsap.to(card, {
      rotateX: 0,
      rotateY: 0,
      scale: 1,
      duration: 0.5,
      ease: "elastic.out(1, 0.3)",
    });
  };

  return (
    <section ref={container} className="py-24 px-6 md:px-20 bg-[#050505]">
      <div className="flex flex-col md:flex-row justify-between items-end mb-16 gap-6">
        <div>
          <h2 className="text-sm font-mono text-blue-500 tracking-[0.4em] mb-4">02. SPECIALIZATIONS</h2>
          <h3 className="text-5xl md:text-6xl font-black uppercase tracking-tighter">EVENT TRACKS</h3>
        </div>
        <p className="text-zinc-500 font-mono text-sm max-w-xs border-l border-zinc-800 pl-4">
          Select a track and push the boundaries of what's possible in 48 hours.
        </p>
      </div>

      <div className="track-grid grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6 perspective-1000">
        {tracks.map((track, i) => (
          <div
            key={i}
            onMouseEnter={onMouseEnter}
            onMouseMove={onMouseMove}
            onMouseLeave={onMouseLeave}
            className="track-card group relative p-8 bg-zinc-900/30 border border-zinc-800 rounded-xl overflow-hidden transition-colors hover:border-zinc-700 cursor-none transform-gpu"
          >
            <div className="absolute -inset-px bg-gradient-to-br from-blue-500/20 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-500" />
            
            <div className={`mb-6 transition-transform duration-500 group-hover:scale-110 group-hover:-translate-y-2 ${track.color}`}>
              {track.icon}
            </div>
            
            <h4 className="text-xl font-bold mb-3 tracking-tight group-hover:text-white">
              {track.title}
            </h4>
            <p className="text-zinc-500 text-sm leading-relaxed group-hover:text-zinc-300">
              {track.desc}
            </p>

            <div className="mt-8 flex items-center text-xs font-mono font-bold tracking-widest text-zinc-600 group-hover:text-blue-500 transition-colors">
              VIEW DETAILS <span className="ml-2">→</span>
            </div>
          </div>
        ))}
      </div>
    </section>
  );
}