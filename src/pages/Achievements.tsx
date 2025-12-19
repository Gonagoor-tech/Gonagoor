import React, { useEffect, useRef } from "react";

/**
 * Achievements - marquee/strip style scrolling achievements component
 * - Updated copy to highlight Gonagoor Technologies partnership
 * - Keeps the JS-driven smooth marquee used previously (requestAnimationFrame)
 *
 * Images expected in public/lovable-uploads:
 *  - certificate1.jpg
 *  - productBts.jpg
 *  - jet.jpg
 *  - drdo.jpg
 *  - Gt.jpg
 *  - gonagoor.jpg
 *  - elevate.jpg
 *  - inspace.jpg
 *  - south.jpg
 *  - 2000.jpg
 */

const items = [
  { id: 1, title: "DPIIT Recognised Defence Startup", img: `${import.meta.env.BASE_URL}Images/certificate1.jpg`, desc: "Recognised by the Department for Promotion of Industry and Internal Trade (DPIIT) as an authorised defence startup, validating our innovation, credibility, and contribution to India’s strategic technology ecosystem." },
  { id: 2, title: "Product launch at Bengaluru Tech Summit 2025", img: `${import.meta.env.BASE_URL}Images/productBts.jpg`, desc: "Officially unveiled our flagship product at the prestigious Bengaluru Tech Summit 2025, showcasing breakthrough innovation to global industry leaders, investors, and technology partners." },
  { id: 3, title: "Completed assembly of indigenously developed jet engine", img: `${import.meta.env.BASE_URL}Images/jet.jpg`, desc: "Successfully completed the full assembly of our in-house developed jet engine, marking a major milestone toward testing and validation of India’s next-generation propulsion technology." },
  { id: 4, title: "DRDO collaboration in progress for M.A.L.E UAV", img: `${import.meta.env.BASE_URL}Images/drdo.jpg`, desc: "Currently collaborating with DRDO on next-generation Medium Altitude Long Endurance UAV development." },
  { id: 5, title: "Tight GTRE collaboration for engine requirements of Indian Defence", img: `${import.meta.env.BASE_URL}Images/Gt.jpg`, desc: "Working closely with GTRE to develop and supply advanced propulsion systems for strategic defence applications." },
  // Highlight Gonagoor partnership explicitly
  { id: 6, title: "Gonagoor Technologies — R&D & Pre-seed Support", img: `${import.meta.env.BASE_URL}Images/gonagoor.jpg`, desc: "Backed by Gonagoor Technologies with dedicated R&D collaboration and pre-seed funding to accelerate our propulsion and aerospace product roadmap. This strategic support helps us move from prototype to test campaigns." },
  { id: 7, title: "Elevate 2025 Finalist", img: `${import.meta.env.BASE_URL}Images/elevate.jpg`, desc: "Recognized among the top startups in Elevate 2025 for innovation and technological impact." },
  { id: 8, title: "InSpace validated design of satellites", img: `${import.meta.env.BASE_URL}Images/inspace.jpg`, desc: "Our satellite design successfully passed InSpace validation, demonstrating reliability and readiness for space applications." },
  { id: 9, title: "South Park Commons Demo Night Finalists 2025", img: `${import.meta.env.BASE_URL}Images/south.jpg`, desc: "Selected as finalists at the South Park Commons Demo Night 2025 for breakthrough technology demonstration." },
  { id: 10, title: "2400°C temperature on off-the-shelf aluminium — a world record", img: `${import.meta.env.BASE_URL}Images/2000.jpg`, desc: "Achieved a world-record 2400°C temperature endurance using standard aluminium through proprietary engineering and thermal R&D." },
  { id: 11, title: "Sudarshana Semiconductors is officially listed as a DLI Beneficiary!", img: `${import.meta.env.BASE_URL}Images/DLI.jpg.jpeg`, desc: "A proud milestone in our journey of empowering India's semiconductor future. This achievement is the result of relentless dedication by Chirag S Rao, Prashanth Raghu, Md Omer, Rahulgouda, and Sowrav who were the minds shaping nextgen chip innovation in India." },
  { id:12, title: "A proud moment for Sudarshana Semiconductors", img: `${import.meta.env.BASE_URL}Images/dpiit.jpg.jpeg`, desc: "We are officially recognized as a DPIIT-registered Startup under the Technology Hardware & Semiconductor sector." },
 {
  id: 13,
  img: `${import.meta.env.BASE_URL}Images/guruprasad.jpeg`,
  title: "Catalyzing linguistic precision through a profound engagement",
  desc: "Honoured to connect with Dr. Shri Guru Prasad Avaru and the Kanaada Phonetics team, exploring their work on Indic language keyboards and the Tulu Ramayana digitization. Excited about ASIC-driven multilingual computing—a fusion of linguistics, cognitive science, and hardware innovation for inclusive digital literacy."
},
{
  id: 14,
  img: `${import.meta.env.BASE_URL}Images/ksu.jpeg`,
  title: "Advancing the Sanskrit Renaissance Through Innovation",
  desc: "Honoured to engage with Karnataka Sanskrit University under Dr. Ahalya, sharing our work on Sanskrit’s mathematical precision and witnessing their appreciation. Excited as we move toward an MoU to begin developing a transformative language model.Engaged with Karnataka Sanskrit University under Dr. Ahalya to explore Sanskrit-based language model collaboration."
},
{
  id: 15,
  img: `${import.meta.env.BASE_URL}Images/wipro.jpeg`,
  title: "Meeting with Shri Sundararaman Ganapathiraman, Wipro Research",
  desc: "Honoured to meet Shri Sundararaman Ganapathiraman, Chief Scientist at Wipro Research, and discuss the vision of Sudarshana Semiconductors. Grateful for his guidance and privileged to receive his book EmBossed Imprints."
},
{
  id: 16,
  img: `${import.meta.env.BASE_URL}Images/kdm.jpg.jpeg`,
  title: "Engaging at KDEM Beyond Bengaluru Tech Summit",
  desc: "Had an inspiring experience at KDEM’s Beyond Bengaluru Tech Summit, Mysuru, engaging with VCs, mentors, and industry peers. Excited for upcoming deep-tech initiatives from Gonagoor Technology Solutions. Grateful to KDEM, KTECH, Startup Karnataka, and all stakeholders for an outstanding summit!"
},
{
  id: 17,
  img: `${import.meta.env.BASE_URL}Images/drivetech.jpeg`,
  title: "Driving Deep-Tech Innovation at Techceleration 2025",
  desc: "Delighted to have Mr. Prashanth Raghu, Founder & CEO of Vayuvya Defence, Sudarshana Semiconductors, and Gonagoor Technology Solutions, as a speaker at Techceleration 2025, Belagavi. An inspiring experience witnessing insights driving India’s deep-tech and defence innovation forward."
},
{
  id: 18,
  img: `${import.meta.env.BASE_URL}Images/iiscmeeting.jpeg`,
  title: "Participating in IISc CeNSE Nanoelectronics Roadshow 2025",
  desc: "Excited to represent Gonagoor Technology Solutions at the IISc CeNSE Nanoelectronics Roadshow on March 27, 2025, alongside our Founder Prashanth Raghu, Head of Growth Chirag S Rao, and intern Sowrav Rao. Looking forward to engaging with industry leaders and advancing the future of nanoelectronics."
},
{
  id: 19,
  img: `${import.meta.env.BASE_URL}Images/iiscevent.jpeg`,
  title: "Productive Meeting at IISc for Vishwakarma Processor Collaboration",
  desc: "Had a wonderful day at IISc, exploring joint research across six fields with support to fabricate our first processor Vishwakarma - RISC-VDF at the CeNSE facility. Grateful to Kalpana Subbaramappa and the team for their guidance and collaboration—looking forward to impactful results."
},
{
  id: 20,
  img: `${import.meta.env.BASE_URL}Images/tessolve.jpeg`,
  title: "Strategic Meeting at Tessolve on AI Accelerator Chip",
  desc: "Today, our team — Mohammed Omer, Sowrav, Chirag S. Rao, and Prashanth Raghu — visited Tessolve to present our AI accelerator chip architecture and explore a potential strategic partnership. Grateful to Mr. Sarfraz for facilitating the meeting and supporting our mission to build high-performance, energy-efficient AI silicon."
},

];

const Achievements: React.FC = () => {
  const loopItems = [...items, ...items];
  const trackRef = useRef<HTMLDivElement | null>(null);

  const listRef = useRef<HTMLDivElement | null>(null);
  const animationState = useRef({
    rafId: 0 as number | null,
    lastTime: 0,
    pxPerSec: 60, // slower, calmer
    offset: 0,
    firstSetWidth: 0,
    paused: false,
  });

  useEffect(() => {
    const track = trackRef.current;
    const list = listRef.current;
    if (!track || !list) return;

    // Measure width of first set
    const children = Array.from(list.children) as HTMLElement[];
    const firstSetChildren = children.slice(0, items.length);
    let firstSetWidth = 0;
    firstSetChildren.forEach((c) => {
      const rect = c.getBoundingClientRect();
      firstSetWidth += rect.width + parseFloat(getComputedStyle(c).marginRight || "0");
    });
    if (!firstSetWidth) firstSetWidth = list.scrollWidth / 2 || 1000;
    animationState.current.firstSetWidth = firstSetWidth;
    animationState.current.offset = 0;
    animationState.current.lastTime = performance.now();

    // speed = pixels per second determined by desiredSeconds
    const desiredSeconds = 30; // increase to slow further
    animationState.current.pxPerSec = Math.max(30, firstSetWidth / desiredSeconds);

    const step = (now: number) => {
      if (animationState.current.paused) {
        animationState.current.lastTime = now;
        animationState.current.rafId = requestAnimationFrame(step);
        return;
      }
      const dt = (now - animationState.current.lastTime) / 1000;
      animationState.current.lastTime = now;
      const move = animationState.current.pxPerSec * dt;
      let newOffset = animationState.current.offset + move;
      if (animationState.current.firstSetWidth > 0 && newOffset >= animationState.current.firstSetWidth) {
        newOffset = newOffset - animationState.current.firstSetWidth;
      }
      animationState.current.offset = newOffset;
      list.style.transform = `translateX(${-animationState.current.offset}px)`;
      animationState.current.rafId = requestAnimationFrame(step);
    };

    animationState.current.rafId = requestAnimationFrame(step);

    const setPaused = (p: boolean) => { animationState.current.paused = p; };
    track.addEventListener("mouseenter", () => setPaused(true));
    track.addEventListener("mouseleave", () => setPaused(false));
    track.addEventListener("focusin", () => setPaused(true));
    track.addEventListener("focusout", () => setPaused(false));

    return () => {
      if (animationState.current.rafId) cancelAnimationFrame(animationState.current.rafId);
      track.removeEventListener("mouseenter", () => setPaused(true));
      track.removeEventListener("mouseleave", () => setPaused(false));
      track.removeEventListener("focusin", () => setPaused(true));
      track.removeEventListener("focusout", () => setPaused(false));
    };
  }, []);

  return (
    <section id="achievements" className="relative py-10 md:py-14 overflow-hidden bg-white text-slate-800">
      {/* subtle patterned faint backdrop, low opacity */}
      <div
        className="absolute inset-0 pointer-events-none"
        style={{ backgroundImage: `url('${import.meta.env.BASE_URL}Images/lite.png')`, opacity: 0.02, backgroundSize: 'cover', backgroundPosition: 'center' }}
        aria-hidden="true"
      />

      <div className="relative z-10 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 font-poppins">
        <h2 id="achievements-heading" className="text-2xl sm:text-3xl md:text-4xl font-[500] text-slate-900 mb-3">
          Milestones & Achievements
        </h2>

        <p className="text-sm sm:text-base text-slate-600 max-w-3xl mb-6">
          Highlights of our recognitions, launches, partnerships and engineering milestones
        </p>

        <div className="relative">
          {/* visible window */}
          <div
            ref={trackRef}
            className="overflow-hidden rounded-2xl border border-slate-200 bg-white shadow-sm"
            role="region"
            aria-label="Achievements marquee — hover to pause"
            tabIndex={0}
          >
            <div ref={listRef} className="flex items-stretch gap-6 py-6 px-6 will-change-transform">
              {loopItems.map((item, idx) => (
                <article
                  key={`${item.id}-${idx}`}
                  className="group min-w-[300px] sm:min-w-[340px] md:min-w-[380px] bg-white rounded-xl border border-slate-100 shadow-sm overflow-hidden transition-transform duration-200 hover:-translate-y-1"
                  aria-label={item.title}
                  aria-hidden={idx >= items.length ? true : undefined}
                >
                  {/* image area */}
                  <div className="w-full h-40 md:h-52 overflow-hidden flex items-center justify-center bg-slate-50">
                    <img
                      src={item.img}
                      alt={item.title}
                      className={
  item.id === 6 || item.id === 7 || item.id === 12 || item.id === 16
    ? "max-w-full max-h-full object-contain p-2 transition-transform duration-200"
    : "w-full h-full object-cover transition-transform duration-200 group-hover:scale-105"
}

                      onError={(e) => {
                        const img = e.currentTarget as HTMLImageElement;
                        console.warn("Achievement image failed to load:", img.src);
                        img.src = `${import.meta.env.BASE_URL}Images/lite.png`;
                        img.style.opacity = "0.6";
                      }}
                    />
                  </div>

                  {/* text */}
                  <div className="p-4 sm:p-5 bg-white">
                    <h3 className="text-sm sm:text-base font-semibold text-slate-900">{item.title}</h3>
                    <p className="mt-2 text-xs sm:text-sm text-slate-600 leading-relaxed">{item.desc}</p>
                  </div>
                </article>
              ))}
            </div>
          </div>

          {/* small helper row (kept minimal to blend) */}
          <div className="mt-4 flex items-center justify-between text-xs sm:text-sm text-slate-500">
            <div className="flex items-center gap-4">
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Achievements;
