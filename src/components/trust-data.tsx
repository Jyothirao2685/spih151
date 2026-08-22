"use client";

import { useRef } from "react";
import { motion } from "framer-motion";
import gsap from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";
import { useGSAP } from "@gsap/react";

gsap.registerPlugin(ScrollTrigger);

export default function TrustData() {
  const containerRef = useRef<HTMLDivElement>(null);
  const tubeBackRef = useRef<HTMLImageElement>(null);
  const tubeFrontRef = useRef<HTMLImageElement>(null);
  const glowRef = useRef<HTMLDivElement>(null);

  useGSAP(
    () => {
      const backTube = tubeBackRef.current;
      const frontTube = tubeFrontRef.current;
      const glow = glowRef.current;

      if (!backTube || !frontTube) return;

      /*
       * ---------------------------------------------------------
       * INITIAL POSITIONS
       * ---------------------------------------------------------
       *
       * The rear tube stays close to the right edge.
       * The front tube starts lower and further to the right.
       */

      gsap.set(backTube, {
        x: 0,
        y: 0,
        rotation: 18,
        scale: 1,
        transformOrigin: "50% 50%",
      });

      gsap.set(frontTube, {
        x: 0,
        y: 0,
        rotation: 8,
        scale: 1,
        transformOrigin: "50% 50%",
      });

      if (glow) {
        gsap.set(glow, {
          scale: 0,
          opacity: 0,
        });
      }

      /*
       * ---------------------------------------------------------
       * MAIN SCROLL TIMELINE
       * ---------------------------------------------------------
       *
       * Both tubes move according to scroll position.
       *
       * 0.00 -> starting position
       * 0.35 -> tubes approach each other
       * 0.50 -> tubes meet
       * 0.65 -> they pass through / separate
       * 1.00 -> final position
       */

      const tl = gsap.timeline({
        scrollTrigger: {
          trigger: containerRef.current,
          start: "top bottom",
          end: "bottom top",
          scrub: 1.2,
          invalidateOnRefresh: true,
        },
      });

      // ---------------------------------------------------------
      // BACK / BORDERLESS TUBE
      // ---------------------------------------------------------

      tl.to(
        backTube,
        {
          y: -170,
          rotation: 12,
          ease: "none",
          duration: 0.5,
        },
        0
      );

      // ---------------------------------------------------------
      // FRONT DIAGONAL TUBE
      // ---------------------------------------------------------

      tl.to(
        frontTube,
        {
          x: -90,
          y: -230,
          rotation: -4,
          ease: "none",
          duration: 0.5,
        },
        0
      );

      /*
       * ---------------------------------------------------------
       * MEETING MOMENT
       * ---------------------------------------------------------
       *
       * At this point the two tubes visually cross.
       *
       * We give them a subtle "magnetic" movement:
       * - slight scale up
       * - tiny rotation
       * - glow appears
       */

      tl.to(
        backTube,
        {
          scale: 1.035,
          rotation: 9,
          ease: "power2.out",
          duration: 0.12,
        },
        0.42
      );

      tl.to(
        frontTube,
        {
          scale: 1.04,
          rotation: -7,
          ease: "power2.out",
          duration: 0.12,
        },
        0.42
      );

      if (glow) {
        tl.to(
          glow,
          {
            scale: 1,
            opacity: 0.22,
            ease: "power2.out",
            duration: 0.1,
          },
          0.42
        );

        tl.to(
          glow,
          {
            scale: 1.35,
            opacity: 0,
            ease: "power2.out",
            duration: 0.18,
          },
          0.52
        );
      }

      // ---------------------------------------------------------
      // AFTER THE MEETING
      // ---------------------------------------------------------

      tl.to(
        backTube,
        {
          y: -340,
          x: 15,
          rotation: 4,
          scale: 1,
          ease: "none",
          duration: 0.5,
        },
        0.5
      );

      tl.to(
        frontTube,
        {
          x: -180,
          y: -430,
          rotation: -13,
          scale: 1,
          ease: "none",
          duration: 0.5,
        },
        0.5
      );

      /*
       * Small refresh after images/layout are available.
       */
      ScrollTrigger.refresh();
    },
    {
      scope: containerRef,
    }
  );

  return (
    <section
      id="about"
      ref={containerRef}
      className="
        relative
        z-20
        min-h-screen
        w-full
        overflow-hidden
        bg-transparent
        py-24
        font-sans
      "
    >
      {/* =========================================================
          BACKGROUND GLOWS
      ========================================================= */}

      <div className="pointer-events-none absolute inset-0 overflow-hidden">
        {/* Blue glow */}
        <div
          className="
            absolute
            -bottom-20
            -left-20
            h-[500px]
            w-[500px]
            rounded-full
            bg-blue-600
            opacity-30
            blur-[120px]
          "
        />

        {/* Cyan glow */}
        <div
          className="
            absolute
            right-[-100px]
            top-1/2
            h-[500px]
            w-[500px]
            -translate-y-1/2
            rounded-full
            bg-cyan-400
            opacity-30
            blur-[120px]
          "
        />

        {/* Meeting glow */}
        <div
          ref={glowRef}
          className="
            absolute
            right-[7%]
            top-[43%]
            h-32
            w-32
            rounded-full
            bg-cyan-300
            blur-3xl
          "
        />
      </div>

      {/* =========================================================
          TEST TUBES
      ========================================================= */}

      <div
        className="
          pointer-events-none
          absolute
          inset-0
          z-10
          overflow-visible
        "
      >
        {/* -------------------------------------------------------
            BACK / BORDERLESS TUBE

            This is pushed right against the edge.
        ------------------------------------------------------- */}

        <img
          ref={tubeBackRef}
          src="/tube_1.png"
          alt=""
          aria-hidden="true"
          className="
            absolute

            right-[-65px]
            top-[9%]
            w-[200px]

            md:right-[-55px]
            md:top-[10%]
            md:w-[270px]

            lg:right-[-45px]
            lg:top-[9%]
            lg:w-[340px]

            xl:right-[-35px]
            xl:top-[7%]
            xl:w-[390px]

            2xl:right-[-25px]
            2xl:w-[420px]
          "
        />

        {/* -------------------------------------------------------
            FRONT DIAGONAL TUBE

            This tube crosses toward the rear tube.
        ------------------------------------------------------- */}

        <img
          ref={tubeFrontRef}
          src="/tube_2.png"
          alt=""
          aria-hidden="true"
          className="
            absolute

            right-[-65px]
            top-[45%]
            w-[170px]

            md:right-[-50px]
            md:top-[44%]
            md:w-[220px]

            lg:right-[-30px]
            lg:top-[42%]
            lg:w-[280px]

            xl:right-[-15px]
            xl:top-[40%]
            xl:w-[320px]

            2xl:right-[0px]
            2xl:top-[38%]
            2xl:w-[350px]
          "
        />
      </div>

      {/* =========================================================
          CONTENT
      ========================================================= */}

      <div
        className="
          relative
          z-20
          mx-auto
          flex
          min-h-[70vh]
          w-full
          max-w-7xl
          flex-grow
          flex-col
          justify-between
          px-6
        "
      >
        {/* =======================================================
            HEADING
        ======================================================= */}

        <div className="mt-12 md:mt-24">
          <motion.h2
            className="
              max-w-4xl
              text-7xl
              font-medium
              leading-[0.85]
              tracking-tighter
              text-black
              md:text-8xl
              lg:text-[110px]
            "
            initial={{
              y: 50,
              opacity: 0,
            }}
            whileInView={{
              y: 0,
              opacity: 1,
            }}
            transition={{
              duration: 0.9,
              ease: [0.22, 1, 0.36, 1],
            }}
            viewport={{
              once: true,
              amount: 0.3,
            }}
          >
            Grounded in
            <br />
            Real Science
          </motion.h2>
        </div>

        {/* =======================================================
            INFORMATION
        ======================================================= */}

        <div
          className="
            mt-20
            grid
            grid-cols-1
            gap-12
            md:grid-cols-2
            md:gap-24
            lg:mt-32
          "
        >
          {/* Verified Sources */}

          <motion.div
            initial={{
              y: 40,
              opacity: 0,
            }}
            whileInView={{
              y: 0,
              opacity: 1,
            }}
            transition={{
              duration: 0.8,
              ease: [0.22, 1, 0.36, 1],
              delay: 0.15,
            }}
            viewport={{
              once: true,
              amount: 0.2,
            }}
          >
            <h3 className="mb-6 text-xl font-bold text-black">
              Verified Sources
            </h3>

            <p
              className="
                max-w-2xl
                text-lg
                leading-relaxed
                text-[#455f6e]
                md:text-xl
              "
            >
              Every insight generated by BioMindQ is strictly cross-referenced
              against millions of peer-reviewed publications. We ensure that
              you can trace every AI-generated claim directly back to a
              verified biomedical source.
            </p>
          </motion.div>

          {/* Compound Intelligence */}

          <motion.div
            initial={{
              y: 40,
              opacity: 0,
            }}
            whileInView={{
              y: 0,
              opacity: 1,
            }}
            transition={{
              duration: 0.8,
              ease: [0.22, 1, 0.36, 1],
              delay: 0.3,
            }}
            viewport={{
              once: true,
              amount: 0.2,
            }}
          >
            <h3 className="mb-6 text-xl font-bold text-black">
              Compound Intelligence
            </h3>

            <p
              className="
                max-w-2xl
                text-lg
                leading-relaxed
                text-[#455f6e]
                md:text-xl
              "
            >
              Instantly analyze targets, mechanism of actions, and safety
              profiles. BioMindQ pulls structured chemical and pharmacological
              data directly from trusted databases like ChEMBL to accelerate
              your workflow.
            </p>
          </motion.div>
        </div>
      </div>
    </section>
  );
}