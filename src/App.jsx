import { useEffect, useRef } from "react";
import gsap from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";

gsap.registerPlugin(ScrollTrigger);

function App() {
  const heroRef = useRef(null);
  const carRef = useRef(null);

  useEffect(() => {
    const ctx = gsap.context(() => {
      // Initial page-load animation
      const intro = gsap.timeline();

      intro.from(".headline", {
        y: -40,
        opacity: 0,
        duration: 1,
        ease: "power3.out",
      });

      intro.from(
        ".hero-car",
        {
          y: 80,
          scale: 0.85,
          opacity: 0,
          duration: 1.2,
          ease: "power3.out",
        },
        "-=0.5"
      );

      intro.from(
        ".stat",
        {
          y: 30,
          opacity: 0,
          duration: 0.7,
          stagger: 0.15,
          ease: "power2.out",
        },
        "-=0.5"
      );

      intro.from(
        ".scroll-indicator",
        {
          opacity: 0,
          y: 20,
          duration: 0.6,
          ease: "power2.out",
        },
        "-=0.3"
      );

// Scroll-driven car animation

// Responsive scroll-driven car animation

gsap.fromTo(
  carRef.current,
  {
    x: 0,
    y: 0,
    rotation: 0,
    scale: 1,
  },
  {
    x: () => Math.min(window.innerWidth * 0.35, 400),
    y: () => window.innerWidth < 768 ? 60 : 120,
    rotation: 15,
    scale: 0.55,
    ease: "none",
    scrollTrigger: {
      trigger: heroRef.current,
      start: "top top",
      end: "+=1000",
      scrub: 1.5,
      pin: true,
      invalidateOnRefresh: true,
    },
  }
);
      // Stats scroll animation
      gsap.fromTo(
        ".stats",
        {
          y: 0,
          opacity: 1,
        },
        {
          y: 100,
          opacity: 0,
          ease: "none",
          scrollTrigger: {
            trigger: heroRef.current,
            start: "top top",
            end: "+=600",
            scrub: 1,
          },
        }
      );

      // Scroll indicator
      gsap.fromTo(
        ".scroll-indicator",
        {
          opacity: 1,
        },
        {
          opacity: 0,
          ease: "none",
          scrollTrigger: {
            trigger: heroRef.current,
            start: "top top",
            end: "+=250",
            scrub: 1,
          },
        }
      );
    }, heroRef);

    return () => ctx.revert();
  }, []);

  return (
    <main className="bg-[#050505] text-white">
      
      {/* HERO SECTION */}
      <section
        ref={heroRef}
        className="hero relative h-screen overflow-hidden flex flex-col items-center justify-center bg-[radial-gradient(circle_at_center,#171717_0%,#050505_60%)]"
      >

        {/* Glow */}
        <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[500px] h-[500px] rounded-full bg-white/[0.04] blur-3xl pointer-events-none" />

        {/* Headline */}
       <h1 className="headline absolute top-[60px] md:top-[70px] left-0 w-full text-center text-2xl md:text-5xl font-semibold tracking-[0.25em] uppercase z-10 px-4">
  WELCOME ITZ FIZZ
        </h1>

        {/* Car */}
        <div className="hero-visual relative z-10 w-full max-w-5xl flex justify-center -translate-y-6 md:-translate-y-4">
          <img
            ref={carRef}
            src="/car.png"
            alt="Car"
            className="hero-car w-[90%] sm:w-[82%] md:w-[72%] max-w-4xl object-contain drop-shadow-[0_30px_40px_rgba(255,255,255,0.12)] will-change-transform"
          />
        </div>

        {/* Stats */}
        <div className="stats absolute bottom-[90px] left-0 w-full flex justify-center items-center gap-6 sm:gap-10 md:gap-24 px-4 z-10">
          
          <div className="stat text-center">
  <h2 className="text-2xl sm:text-3xl md:text-4xl font-bold">
    87%
  </h2>
  <p className="mt-2 text-[10px] sm:text-xs md:text-sm text-gray-400 uppercase tracking-wider">
    Customer Satisfaction
  </p>
</div>

          <div className="stat text-center">
  <h2 className="text-2xl sm:text-3xl md:text-4xl font-bold">
    92%
  </h2>
  <p className="mt-2 text-[10px] sm:text-xs md:text-sm text-gray-400 uppercase tracking-wider">
    Performance
  </p>
</div>

          <div className="stat text-center">
  <h2 className="text-2xl sm:text-3xl md:text-4xl font-bold">
    76%
  </h2>
  <p className="mt-2 text-[10px] sm:text-xs md:text-sm text-gray-400 uppercase tracking-wider">
    Growth Impact
  </p>
</div>

        </div>

        {/* Scroll Indicator */}
        <div className="scroll-indicator absolute bottom-8 flex flex-col items-center gap-2 text-xs tracking-[0.3em] text-gray-400">
          <span>SCROLL</span>
          <span className="text-lg animate-bounce">↓</span>
        </div>

        {/* Bottom Line */}
        <div className="absolute bottom-0 left-0 w-full h-px bg-white/10" />

      </section>

      {/* CONTENT SECTION */}
      <section className="min-h-screen px-6 py-32 md:px-20 bg-[#080808]">
        <p className="text-xs tracking-[0.4em] text-gray-500 uppercase">
          The Experience
        </p>

        <h2 className="mt-6 text-5xl md:text-7xl font-bold max-w-4xl">
          Built for Movement.
        </h2>

        <p className="mt-8 max-w-2xl text-gray-400 text-lg leading-relaxed">
          A smooth, interactive experience where design,
          motion and technology come together.
        </p>

        <div className="mt-20 grid grid-cols-1 md:grid-cols-3 gap-6">
          
          <div className="border border-white/10 p-8 rounded-2xl">
            <h3 className="text-2xl font-semibold">Motion</h3>
            <p className="mt-4 text-gray-400">
              Scroll-driven interactions with smooth and responsive movement.
            </p>
          </div>

          <div className="border border-white/10 p-8 rounded-2xl">
            <h3 className="text-2xl font-semibold">Design</h3>
            <p className="mt-4 text-gray-400">
              Minimal visual design focused on clarity and interaction.
            </p>
          </div>

          <div className="border border-white/10 p-8 rounded-2xl">
            <h3 className="text-2xl font-semibold">Technology</h3>
            <p className="mt-4 text-gray-400">
              Built using React, Tailwind CSS and GSAP.
            </p>
          </div>

        </div>
      </section>

    </main>
  );
}

export default App;