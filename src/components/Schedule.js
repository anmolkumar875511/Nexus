"use client";
import { useRef } from "react";
import gsap from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";
import { useGSAP } from "@gsap/react";

gsap.registerPlugin(ScrollTrigger);

const agenda = [
  { day: "Day 01", time: "10:00 AM", title: "Opening Keynote", host: "Main Hall" },
  { day: "Day 01", time: "12:00 PM", title: "Hacking Begins", host: "Dev Lab" },
  { day: "Day 01", time: "04:00 PM", title: "Mentorship Round", host: "Virtual Hub" },
  { day: "Day 02", time: "11:00 AM", title: "Project Submission", host: "Portal" },
  { day: "Day 02", time: "03:00 PM", title: "Grand Finale", host: "Main Stage" },
];

export default function Schedule() {
  const container = useRef();
  const lineRef = useRef();

  useGSAP(() => {
    gsap.fromTo(lineRef.current, 
      { scaleY: 0 }, 
      { 
        scaleY: 1, 
        ease: "none",
        scrollTrigger: {
          trigger: ".timeline-wrapper",
          start: "top 70%",
          end: "bottom 80%",
          scrub: 1,
        }
      }
    );

    gsap.utils.toArray(".event-item").forEach((item) => {
      gsap.from(item, {
        scrollTrigger: {
          trigger: item,
          start: "top 85%",
          toggleActions: "play none none reverse",
        },
        x: -30,
        opacity: 0,
        duration: 0.8,
        ease: "power2.out",
      });
    });
  }, { scope: container });

  return (
    <section ref={container} className="py-24 bg-[#050505] overflow-hidden">
      <div className="container mx-auto px-6 md:px-20">
        <div className="mb-16">
          <h2 className="text-sm font-mono text-blue-500 tracking-[0.4em] mb-4 text-center">03. THE AGENDA</h2>
          <h3 className="text-5xl md:text-6xl font-black uppercase tracking-tighter text-center">TIMELINE</h3>
        </div>

        <div className="timeline-wrapper relative max-w-4xl mx-auto">
          <div className="absolute left-4 md:left-1/2 transform md:-translate-x-1/2 top-0 w-[2px] h-full bg-zinc-800" />

          <div 
            ref={lineRef}
            className="absolute left-4 md:left-1/2 transform md:-translate-x-1/2 top-0 w-[2px] h-full bg-blue-500 origin-top shadow-[0_0_15px_rgba(59,130,246,0.5)] z-10" 
          />

          <div className="space-y-24">
            {agenda.map((item, i) => (
              <div key={i} className={`event-item relative flex items-center justify-start md:justify-between w-full ${i % 2 === 0 ? 'md:flex-row-reverse' : ''}`}>

                <div className="absolute left-[13px] md:left-1/2 transform -translate-x-1/2 w-3 h-3 bg-zinc-900 border-2 border-blue-500 rounded-full z-20 shadow-[0_0_10px_#3b82f6]" />

                <div className="ml-12 md:ml-0 w-full md:w-[45%]">
                  <div className="p-8 bg-zinc-900/40 border border-zinc-800 rounded-2xl backdrop-blur-md group hover:border-blue-500/50 transition-colors">
                    <span className="text-blue-500 font-mono text-xs font-bold uppercase tracking-widest block mb-2">
                      {item.day} — {item.time}
                    </span>
                    <h4 className="text-2xl font-bold mb-2 group-hover:text-white transition-colors">{item.title}</h4>
                    <div className="flex items-center gap-2">
                      <div className="w-1.5 h-1.5 rounded-full bg-zinc-600 group-hover:bg-blue-400" />
                      <p className="text-zinc-500 font-mono text-sm">{item.host}</p>
                    </div>
                  </div>
                </div>
                <div className="hidden md:block w-[45%]" />
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}