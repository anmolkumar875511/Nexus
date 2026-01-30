"use client";
import { useRef } from "react";
import gsap from "gsap";
import { Github, Twitter, Instagram, ArrowUp } from "lucide-react";

export default function Footer() {
  const footerRef = useRef();

  const scrollToTop = () => {
    window.scrollTo({ top: 0, behavior: "smooth" });
  };

  const onEnter = (e) => {
    gsap.to(e.currentTarget, { 
      y: -5, 
      color: "#3b82f6", 
      duration: 0.3 
    });
  };

  const onLeave = (e) => {
    gsap.to(e.currentTarget, { 
      y: 0, 
      color: "#71717a", 
      duration: 0.3 
    });
  };

  return (
    <footer ref={footerRef} className="relative bg-[#050505] pt-20 pb-10 px-6 md:px-20 border-t border-zinc-900">
      <div className="container mx-auto">
        <div className="flex flex-col md:flex-row justify-between items-start md:items-center gap-12">

          <div className="max-w-xs">
            <h3 className="text-3xl font-black tracking-tighter uppercase italic mb-4">
              NEXUS <span className="text-blue-500">2026</span>
            </h3>
            <p className="text-zinc-500 font-mono text-sm leading-relaxed">
              Pushing the boundaries of digital reality. Built for the creators of the next internet.
            </p>
          </div>

          <div className="flex flex-col gap-4">
            <span className="text-xs font-mono text-zinc-600 uppercase tracking-widest">Connect</span>
            <div className="flex gap-6">
              {[
                { icon: <Twitter size={20} />, label: "Twitter" },
                { icon: <Github size={20} />, label: "GitHub" },
                { icon: <Instagram size={20} />, label: "Instagram" }
              ].map((social, i) => (
                <a 
                  key={i} 
                  href="#" 
                  onMouseEnter={onEnter} 
                  onMouseLeave={onLeave} 
                  className="text-zinc-500 transition-colors"
                >
                  {social.icon}
                </a>
              ))}
            </div>
          </div>

          <div className="flex flex-col gap-2">
            <span className="text-xs font-mono text-zinc-600 uppercase tracking-widest">Inquiries</span>
            <a 
              href="mailto:hello@nexus2026.com" 
              className="text-xl font-bold hover:text-blue-500 transition-colors underline underline-offset-8 decoration-zinc-800 hover:decoration-blue-500"
            >
              hello@nexus2026.com
            </a>
          </div>
        </div>

        <div className="mt-20 pt-8 border-t border-zinc-900 flex flex-col md:flex-row justify-between items-center gap-6">
          <p className="text-zinc-600 font-mono text-[10px] uppercase tracking-[0.2em]">
            © 2026 NEXUS TECH FEST — ALL RIGHTS RESERVED
          </p>

          <button 
            onClick={scrollToTop}
            className="group flex items-center gap-2 text-zinc-500 hover:text-white transition-colors font-mono text-[10px] uppercase tracking-widest"
          >
            Back to Top 
            <div className="p-2 border border-zinc-800 rounded-full group-hover:border-blue-500 transition-colors">
              <ArrowUp size={14} />
            </div>
          </button>
        </div>
      </div>
    </footer>
  );
}