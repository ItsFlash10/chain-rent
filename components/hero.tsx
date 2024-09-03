"use client";

import { useEffect, useRef, useState } from "react";
import { motion } from "framer-motion";
import { WalletMultiButton } from "@solana/wallet-adapter-react-ui";
import { ChevronRightIcon } from "lucide-react";
import * as THREE from "three";
import Link from "next/link";
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
    <main ref={vantaRef} className="flex min-h-screen flex-col justify-center px-16">
      <motion.p
        initial={{ opacity: 0, y: -100 }}
        whileInView={{ opacity: 1, y: 0 }}
        transition={{
          delay: 0.3,
          duration: 1,
          ease: "easeInOut",
        }}
        className="flex flex-col gap-4 bg-gradient-to-br from-slate-300 to-slate-500 bg-clip-text py-4 text-4xl font-medium tracking-tight text-transparent md:text-6xl"
      >
        <p>ChainRent</p>
        <p>Where NFTs Work for You</p>
      </motion.p>
      <motion.div
        initial={{ opacity: 0, y: 100 }}
        whileInView={{ opacity: 1, y: 0 }}
        transition={{
          delay: 0.3,
          duration: 1.2,
          ease: "easeInOut",
        }}
        className="flex flex-col"
      >
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
        <Link href={"/marketplace"} className="mt-5 flex items-center gap-2 self-start px-6">
          <p className="text-md bg-gradient-to-br from-slate-300 to-slate-500 bg-clip-text text-transparent">
            Discover
          </p>
          <ChevronRightIcon color="#475569" />
        </Link>
      </motion.div>
    </main>
  );
};

export default Hero;
