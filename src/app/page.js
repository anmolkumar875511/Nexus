"use client";
import Hero from "@/components/Hero";
import About from "@/components/About";
import Tracks from "@/components/Tracks";
import Schedule from "@/components/Schedule";
import SmoothScroll from "@/components/SmoothScroll";
import CustomCursor from "@/components/CustomCursor";
import Footer from "@/components/Footer";
import Speakers from "@/components/Speakers";


export default function Home() {

  return (
    <SmoothScroll>
      <CustomCursor />
      <main className="selection:bg-blue-500 selection:text-white">
        <Hero />
        <div className="bg-[#050505]">
          <About />
          <Tracks />
          <div className="py-10 bg-black">
             <Speakers />
          </div>
          <div className="bg-[#080808]">
            <Schedule />
          </div>
          <Footer />
        </div>
      </main>
    </SmoothScroll>
  );
}