"use client";

import React from "react";
import { WalletMultiButton } from "@solana/wallet-adapter-react-ui";

const CustomWalletButton = () => {
  return (
    <WalletMultiButton
      style={{
        alignItems: "center",
        animation: "shimmer 1.5s infinite linear",
        background: "linear-gradient(110deg, #09090b 45%, #1e2631 55%, #09090b)",
        backgroundSize: "200% 100%",
        border: "1px solid #1e293b",
        borderRadius: "0.375rem",
        color: "#94a3b8",
        display: "inline-flex",
        fontSize: "1.25rem",
        fontWeight: "500",
        justifyContent: "center",
        outline: "none",
        paddingLeft: "1.5rem",
        paddingRight: "1.5rem",
        transitionDuration: "150ms",
        transitionProperty: "color, background-color, border-color, text-decoration-color, fill, stroke",
      }}
    />
  );
};

export default CustomWalletButton;
