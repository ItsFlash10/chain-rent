"use client";

import React, { useEffect, useRef, useState } from "react";
import { motion } from "framer-motion";
import * as THREE from "three";
import GLOBE from "vanta/src/vanta.globe";
import { WalletMultiButton } from "@solana/wallet-adapter-react-ui";
import { MoveRight } from "lucide-react";
import Link from "next/link";

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
    <main ref={vantaRef} className="flex min-h-screen flex-col justify-center px-16">
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
        {/* <button className="animate-shimmer mt-5 inline-flex h-16 items-center justify-center rounded-md border border-slate-800 bg-[linear-gradient(110deg,#09090b,45%,#1e2631,55%,#09090b)] bg-[length:200%_100%] px-6 text-xl font-medium text-slate-400 transition-colors focus:outline-none focus:ring-2 focus:ring-slate-400 focus:ring-offset-2 focus:ring-offset-slate-50">
          Connect your wallet
        </button> */}
        <WalletMultiButton
          style={{
            animation: "shimmer 1.5s infinite linear",
            marginTop: "1.25rem",
            display: "inline-flex",
            alignItems: "center",
            justifyContent: "center",
            borderRadius: "0.375rem",
            border: "1px solid #1e293b",
            background: "linear-gradient(110deg, #09090b 45%, #1e2631 55%, #09090b)",
            backgroundSize: "200% 100%",
            paddingLeft: "1.5rem",
            paddingRight: "1.5rem",
            fontSize: "1.25rem",
            fontWeight: "500",
            color: "#94a3b8",
            transitionProperty: "color, background-color, border-color, text-decoration-color, fill, stroke",
            transitionDuration: "150ms",
            outline: "none",
          }}
        />
        {/* <div className="mt-10 flex flex-col gap-2">
          Added check to show this arrow only when logged in:
          <Link href={"/marketplace"} className="cursor-pointer self-start py-5 pr-5">
            <MoveRight />
          </Link>
        </div> */}
      </motion.div>
    </main>
  );
};

export default Hero;
