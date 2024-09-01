"use client";

import React, { useEffect, useRef, useState } from "react";
import { motion } from "framer-motion";
import * as THREE from "three";
import GLOBE from "vanta/src/vanta.globe";

const Hero = () => {
  const [vantaEffect, setVantaEffect] = useState(0);
  const vantaRef = useRef(null);

  useEffect(() => {
    if (!vantaEffect) {
      setVantaEffect(
        GLOBE({
          el: vantaRef.current,
          THREE: THREE,
          mouseControls: true,
          touchControls: true,
          gyroControls: false,
          minHeight: 200.0,
          minWidth: 200.0,
          scale: 1.0,
          scaleMobile: 1.0,
          size: 1,
          color: 0x484848,
          color2: 0x525252,
          backgroundColor: "#09090b",
        })
      );
    }
  }, [vantaEffect]);

  return (
    <main ref={vantaRef} className="flex min-h-screen flex-col justify-center bg-black px-16">
      <motion.p
        initial={{ opacity: 0, y: -100 }}
        whileInView={{ opacity: 1, y: 0 }}
        transition={{
          delay: 0.3,
          duration: 1,
          ease: "easeInOut",
        }}
        className="mt-8 flex flex-col gap-4 bg-gradient-to-br from-slate-300 to-slate-500 bg-clip-text py-4 text-4xl font-medium tracking-tight text-transparent md:text-6xl"
      >
        <div>ChainRent</div>
        <div>Where NFTs Work for You</div>
      </motion.p>
      <motion.div
        initial={{ opacity: 0, y: 100 }}
        whileInView={{ opacity: 1, y: 0 }}
        transition={{
          delay: 0.3,
          duration: 1.2,
          ease: "easeInOut",
        }}
      >
        <button className="animate-shimmer mt-5 inline-flex h-16 items-center justify-center rounded-md border border-slate-800 bg-[linear-gradient(110deg,#09090b,45%,#1e2631,55%,#09090b)] bg-[length:200%_100%] px-6 text-xl font-medium text-slate-400 transition-colors focus:outline-none focus:ring-2 focus:ring-slate-400 focus:ring-offset-2 focus:ring-offset-slate-50">
          Connect your wallet
        </button>
      </motion.div>
    </main>
  );
};

export default Hero;
