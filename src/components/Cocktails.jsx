import { useGSAP } from "@gsap/react";
import gsap from "gsap";
import { cocktailLists, mockTailLists } from "../../constants";

const Cocktails = () => {

  useGSAP(() => {
    gsap.from("#cocktails li", {
      opacity: 0,
      y: 30,
      duration: 0.8,
      stagger: 0.08,
      ease: "power2.out",
      scrollTrigger: {
        trigger: "#cocktails",
        start: "top 75%",
      }
    });
  });

  return (
    <section id="cocktails" className="noisy relative py-28 overflow-hidden">

      {/* background depth */}
      <div className="absolute inset-0 radial-gradient opacity-40"></div>

      {/* subtle top fade */}
      <div className="absolute top-0 left-0 w-full h-40 bg-gradient-to-b from-black to-transparent"></div>

      {/* SECTION INTRO */}
      <div className="text-center mb-24 px-6 relative z-10">
        <p className="tracking-[0.35em] uppercase text-gray-400 text-xs mb-4">
          The World’s Rarest Agarwood
        </p>

        <h2 className="font-modern-negra text-4xl md:text-6xl text-yellow">
          Curations for Collectors & Connoisseurs
        </h2>
      </div>

      {/* CONTENT */}
      <div className="relative z-10 container mx-auto flex md:flex-row flex-col gap-20 px-6">

        {/* LEFT COLUMN */}
        <div className="md:w-1/2 w-full md:pr-16">

          <h3 className="text-yellow text-xl tracking-wide font-serif mb-3">
            Sacred Kyara Collection
          </h3>

          <p className="text-gray-400 text-sm max-w-sm mb-8">
            Rare kyara formed over decades, revered for ceremonial burning
            and preserved by private collectors.
          </p>

          <ul className="space-y-7">
            {cocktailLists.map((item) => (
              <li
                key={item.name}
                className="flex justify-between items-start group"
              >
                <div>
                  <h4 className="font-modern-negra text-lg text-yellow transition group-hover:translate-x-1">
                    {item.name}
                  </h4>
                  <p className="text-gray-400 text-sm">{item.detail}</p>
                </div>

                <span className="whitespace-nowrap text-white transition group-hover:-translate-x-1">
                  {item.price}
                </span>
              </li>
            ))}
          </ul>
        </div>

        {/* CENTER DIVIDER */}
        <div className="hidden md:block absolute left-1/2 top-32 bottom-32 w-px bg-gradient-to-b from-transparent via-yellow-500/30 to-transparent"></div>

        {/* RIGHT COLUMN */}
        <div className="md:w-1/2 w-full md:pl-16">

          <h3 className="text-yellow text-xl tracking-wide font-serif mb-3">
            Heritage Resin Vault
          </h3>

          <p className="text-gray-400 text-sm max-w-sm mb-8">
            Exceptional resin selections aged naturally to reveal deep,
            layered aromatic complexity.
          </p>

          <ul className="space-y-7">
            {mockTailLists.map((item) => (
              <li
                key={item.name}
                className="flex justify-between items-start group"
              >
                <div>
                  <h4 className="font-modern-negra text-lg text-yellow transition group-hover:translate-x-1">
                    {item.name}
                  </h4>
                  <p className="text-gray-400 text-sm">{item.detail}</p>
                </div>

                <span className="whitespace-nowrap text-white transition group-hover:-translate-x-1">
                  {item.price}
                </span>
              </li>
            ))}
          </ul>
        </div>

      </div>

      {/* bottom fade */}
      <div className="absolute bottom-0 left-0 w-full h-32 bg-gradient-to-t from-black to-transparent"></div>

    </section>
  );
};

export default Cocktails;
