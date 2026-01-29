"use client";
import { useRef } from "react";
import gsap from "gsap";
import { useGSAP } from "@gsap/react";

export default function Hero() {
  const container = useRef();
  const buttonRef = useRef();

  useGSAP(() => {
    const tl = gsap.timeline();

    tl.from(".hero-title span", {
      y: 150,
      skewY: 7,
      duration: 1.5,
      stagger: 0.1,
      ease: "power4.out",
    })

    .from(".hero-tagline", {
      opacity: 0,
      y: 20,
      duration: 1,
    }, "-=1")

    .from(".hero-btn", {
      scale: 0.5,
      opacity: 0,
      duration: 0.8,
      ease: "back.out(1.7)",
    }, "-=0.8");

    gsap.to(".floating-circle", {
      y: 40,
      x: 30,
      duration: 5,
      repeat: -1,
      yoyo: true,
      ease: "sine.inOut",
      stagger: {
        amount: 2,
        from: "random"
      }
    });

    const handleMouseMove = (e) => {
      const { clientX, clientY } = e;
      const { left, top, width, height } = buttonRef.current.getBoundingClientRect();
      const x = clientX - (left + width / 2);
      const y = clientY - (top + height / 2);

      gsap.to(buttonRef.current, {
        x: x * 0.3,
        y: y * 0.3,
        duration: 0.5,
        ease: "power2.out",
      });
    };

    const handleMouseLeave = () => {
      gsap.to(buttonRef.current, {
        x: 0,
        y: 0,
        duration: 0.5,
        ease: "elastic.out(1, 0.3)",
      });
    };

    const btn = buttonRef.current;
    btn.addEventListener("mousemove", handleMouseMove);
    btn.addEventListener("mouseleave", handleMouseLeave);

    return () => {
      btn.removeEventListener("mousemove", handleMouseMove);
      btn.removeEventListener("mouseleave", handleMouseLeave);
    };
  }, { scope: container });

  return (
    <section ref={container} className="h-screen flex flex-col items-center justify-center relative overflow-hidden bg-[#050505]">

      <div className="floating-circle absolute top-[10%] right-[15%] w-64 h-64 bg-blue-600/10 blur-[100px] rounded-full -z-10" />
      <div className="floating-circle absolute bottom-[15%] left-[10%] w-80 h-80 bg-purple-600/10 blur-[120px] rounded-full -z-10" />
      <div className="absolute w-[600px] h-[600px] bg-blue-500/5 blur-[150px] rounded-full -z-10 top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2" />

      <div className="text-center z-10">
        <h1 className="hero-title text-7xl md:text-9xl font-black tracking-tighter uppercase leading-[0.9]">
          <div className="overflow-hidden inline-block px-2">
            <span className="inline-block italic">NEXUS</span>
          </div>
          <br />
          <div className="overflow-hidden inline-block text-blue-500 px-2">
            <span className="inline-block italic">2026</span>
          </div>
        </h1>
        
        <p className="hero-tagline text-gray-400 font-mono tracking-[0.5em] mt-6 text-sm md:text-lg uppercase">
          The Synchronized Future of Code
        </p>

        <div className="mt-12">
          <button 
            ref={buttonRef}
            className="hero-btn px-10 py-4 bg-white text-black font-bold uppercase rounded-full tracking-widest hover:bg-blue-500 hover:text-white transition-colors relative z-20"
          >
            Register Now
          </button>
        </div>
      </div>

      <div className="absolute bottom-10 left-1/2 -translate-x-1/2 opacity-30 animate-bounce">
        <p className="font-mono text-[10px] uppercase tracking-widest">Scroll to Explore</p>
      </div>
    </section>
  );
}