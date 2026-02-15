import { useGSAP } from "@gsap/react";
import gsap from "gsap";
import { SplitText } from "gsap/all";
import { useMediaQuery } from "react-responsive";

const Hero = () => {
  const isMobile = useMediaQuery({ maxWidth: 767 });

  useGSAP(() => {
    const heroSplit = new SplitText(".title", {
      type: "chars, words",
    });

    const paragraphSplit = new SplitText(".subtitle", {
      type: "lines",
    });

    // gradient text
    heroSplit.chars.forEach((char) =>
      char.classList.add("text-gradient")
    );

    // title animation
    gsap.from(heroSplit.chars, {
      yPercent: 100,
      duration: 1.8,
      ease: "expo.out",
      stagger: 0.05,
    });

    // subtitle animation
    gsap.from(paragraphSplit.lines, {
      opacity: 0,
      yPercent: 100,
      duration: 1.6,
      ease: "expo.out",
      stagger: 0.06,
      delay: 0.8,
    });

    // subtle parallax motion
    gsap.timeline({
      scrollTrigger: {
        trigger: "#hero",
        start: "top top",
        end: "bottom top",
        scrub: true,
      },
    })
    .to(".arrow", { y: 80 }, 0);

  }, []);

  return (
    <section
      id="hero"
      className="noisy relative overflow-hidden min-h-dvh"
    >
      {/* HERO BACKGROUND IMAGE */}
      <div className="absolute inset-0">
        <img
          src="/images/hero.webp"
          alt="agarwood resin"
          className="w-full h-full object-cover hero-img"
        />
      </div>

      {/* DARK OVERLAY */}
      <div className="absolute inset-0 bg-black/65"></div>

      {/* CONTENT */}
      <div className="relative z-20 container mx-auto min-h-dvh flex flex-col justify-center px-6 text-center md:text-left">

        <h1 className="title font-modern-negra text-[18vw] md:text-[12vw] leading-none">
          OUD
        </h1>

        <div className="mt-8 md:mt-12 flex flex-col md:flex-row md:justify-between items-center md:items-end gap-10">

          {/* LEFT TEXT */}
          <div className="space-y-4 hidden md:block">
            <p className="tracking-wide text-sm">
              Rare. Resin. Revered.
            </p>

            <p className="subtitle font-modern-negra text-5xl text-yellow leading-tight">
              Where Smoke <br /> Becomes Memory
            </p>
          </div>

          {/* RIGHT TEXT */}
          <div className="view-cocktails space-y-4 max-w-sm">
            <p className="subtitle text-sm md:text-base opacity-90 leading-relaxed">
              Not cultivated. <br />
              Not manufactured. <br />
              Only discovered by those who understand rarity.
            </p>

            <a
              href="#cocktails"
              className="inline-block border border-yellow px-6 py-3 uppercase tracking-widest text-xs hover:bg-yellow hover:text-black transition-all duration-300"
            >
              Explore Collection
            </a>
          </div>

        </div>

      </div>
    </section>
  );
};

export default Hero;
