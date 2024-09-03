"use client";

import { useEffect, useState } from "react";
import Link from "next/link";
import Image from "next/image";
import { Menu, X } from "lucide-react";
import { AnimatePresence, motion } from "framer-motion";
import { useRecoilState } from "recoil";

import SolanaIcon from "@/public/solana.svg";
import { getCurrentSolPrice } from "@/lib/actions/solana";
import { solanaPrice } from "@/store";

import ThemeToggle from "./themeToggle";
import CustomWalletButton from "./customWalletButton";

const AppBar = () => {
  const [solanaCurrentPrice, setSolanaCurrentPrice] = useRecoilState(solanaPrice);
  const [isMenuOpen, setIsMenuOpen] = useState(false);

  const menuItems = [
    { href: "#", text: "Explore" },
    { href: "#", text: "Create" },
  ];

  const toggleMenu = () => {
    setIsMenuOpen(!isMenuOpen);
  };

  const fetchSolanaPrice = async () => {
    const price = await getCurrentSolPrice();
    setSolanaCurrentPrice(price);
  };

  useEffect(() => {
    fetchSolanaPrice();
    const interval = setInterval(() => {
      fetchSolanaPrice();
    }, 1000 * 30);

    return () => clearInterval(interval);
  }, []);

  return (
    <header className="sticky top-0 z-20 border-b border-gray-200 shadow-lg backdrop-blur-lg dark:border-gray-700">
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
          {solanaCurrentPrice && (
            <div className="flex items-center gap-2">
              <Image src={SolanaIcon} alt="My Icon" width={20} height={20} />
              <p className="font-semibold">${solanaCurrentPrice}</p>
            </div>
          )}
          <div className="ml-4 hidden md:block">
            <CustomWalletButton />
          </div>
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
                <motion.li
                  key={menuItems.length}
                  initial={{ opacity: 0, x: -20 }}
                  animate={{ opacity: 1, x: 0 }}
                  transition={{ delay: menuItems.length * 0.1 }}
                >
                  <CustomWalletButton />
                </motion.li>
              </ul>
            </nav>
          </motion.div>
        )}
      </AnimatePresence>
    </header>
  );
};

export default AppBar;
