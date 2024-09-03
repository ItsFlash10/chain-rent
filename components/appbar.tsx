"use client";

import React, { useState } from "react";
import Link from "next/link";
import { Menu, X } from "lucide-react";
import { AnimatePresence, motion } from "framer-motion";
import { WalletMultiButton } from "@solana/wallet-adapter-react-ui";

import ThemeToggle from "./themeToggle";

const AppBar = () => {
  const [isMenuOpen, setIsMenuOpen] = useState(false);

  const menuItems = [
    { href: "#", text: "Explore" },
    { href: "#", text: "Create" },
  ];

  const toggleMenu = () => {
    setIsMenuOpen(!isMenuOpen);
  };
  return (
    <header className="sticky top-0 z-[100] border-b border-gray-200 shadow-lg backdrop-blur-lg dark:border-gray-700">
      <div className="container mx-auto flex items-center justify-between px-4 py-4 sm:px-8">
        <motion.div
          initial={{ opacity: 0, x: -20 }}
          animate={{ opacity: 1, x: 0 }}
          transition={{ duration: 0.5 }}
          className="text-2xl font-bold text-gray-800 dark:text-gray-100"
        >
          <Link href={"/"}>ChainRent</Link>
        </motion.div>
        <nav className="flex items-center">
          {/* Desktop menu */}
          <ul className="mr-4 hidden space-x-4 md:flex">
            {menuItems.map((item, index) => (
              <motion.li key={index} whileHover={{ scale: 1.1 }}>
                <a href={item.href} className="hover:text-gray-600 dark:hover:text-gray-300">
                  {item.text}
                </a>
              </motion.li>
            ))}
          </ul>
          <ThemeToggle />
          <WalletMultiButton
            style={{
              animation: "shimmer 1.5s infinite linear",
              display: "inline-flex",
              alignItems: "center",
              justifyContent: "center",
              borderRadius: "0.375rem",
              border: "1px solid #1e293b",
              background: "linear-gradient(110deg, #09090b 45%, #1e2631 55%, #09090b)",
              backgroundSize: "200% 100%",
              paddingLeft: "1.5rem",
              paddingRight: "1.5rem",
              color: "#94a3b8",
              transitionProperty: "color, background-color, border-color, text-decoration-color, fill, stroke",
              transitionDuration: "150ms",
              outline: "none",
              marginLeft: "1rem",
            }}
          />
          {/* Hamburger menu button */}
          <button
            className="ml-4 text-gray-600 hover:text-gray-900 focus:outline-none dark:text-gray-300 dark:hover:text-gray-100 md:hidden"
            onClick={toggleMenu}
            aria-label="Toggle menu"
          >
            {isMenuOpen ? <X size={24} /> : <Menu size={24} />}
          </button>
        </nav>
      </div>
      {/* Mobile menu */}
      <AnimatePresence>
        {isMenuOpen && (
          <motion.div
            initial={{ opacity: 0, height: 0 }}
            animate={{ opacity: 1, height: "auto" }}
            exit={{ opacity: 0 }}
            transition={{ duration: 0.2 }}
            className="absolute inset-x-0 border-t border-gray-200 bg-white dark:border-gray-700 dark:bg-gray-800 md:hidden"
          >
            <nav className="container mx-auto px-4 py-2">
              <ul className="space-y-2">
                {menuItems.map((item, index) => (
                  <motion.li
                    key={index}
                    initial={{ opacity: 0, x: -20 }}
                    animate={{ opacity: 1, x: 0 }}
                    transition={{ delay: index * 0.1 }}
                  >
                    <a
                      href={item.href}
                      className="block py-2 text-gray-600 hover:text-gray-900 dark:text-gray-300 dark:hover:text-gray-100"
                      onClick={toggleMenu}
                    >
                      {item.text}
                    </a>
                  </motion.li>
                ))}
              </ul>
            </nav>
          </motion.div>
        )}
      </AnimatePresence>
    </header>
  );
};

export default AppBar;
