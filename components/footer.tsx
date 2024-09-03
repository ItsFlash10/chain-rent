import React from "react";
import { motion } from "framer-motion";

import { Button } from "./ui/button";
import { Input } from "./ui/input";

const Footer = () => {
  return (
    <footer className="mt-12 border-t border-gray-200 bg-white dark:border-gray-700 dark:bg-gray-800">
      <div className="container mx-auto px-4 py-8">
        <div className="grid grid-cols-1 gap-8 md:grid-cols-3">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5, delay: 0.2 }}
          >
            <h3 className="mb-4 text-lg font-semibold text-gray-800 dark:text-gray-200">About Us</h3>
            <p className="text-sm text-gray-600 dark:text-gray-300">
              We are a leading NFT marketplace, connecting artists and collectors in the digital realm to buy and rent
              NFTs.
            </p>
          </motion.div>
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5, delay: 0.4 }}
          >
            <h3 className="mb-4 text-lg font-semibold text-gray-800 dark:text-gray-200">Quick Links</h3>
            <ul className="space-y-2 text-sm">
              <li>
                <a href="#" className="text-gray-600 hover:text-gray-800 dark:text-gray-300 dark:hover:text-gray-100">
                  FAQ
                </a>
              </li>
              <li>
                <a href="#" className="text-gray-600 hover:text-gray-800 dark:text-gray-300 dark:hover:text-gray-100">
                  Terms of Service
                </a>
              </li>
              <li>
                <a href="#" className="text-gray-600 hover:text-gray-800 dark:text-gray-300 dark:hover:text-gray-100">
                  Privacy Policy
                </a>
              </li>
            </ul>
          </motion.div>
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5, delay: 0.6 }}
          >
            <h3 className="mb-4 text-lg font-semibold text-gray-800 dark:text-gray-200">Newsletter</h3>
            <p className="mb-2 text-sm text-gray-600 dark:text-gray-300">
              Stay updated with our latest drops and features
            </p>
            <div className="flex">
              <Input
                className="mr-2 w-full bg-white text-gray-800 dark:bg-gray-700 dark:text-gray-200"
                placeholder="Your email"
              />
              <Button className="bg-gray-800 text-white hover:bg-gray-900 dark:bg-gray-700 dark:text-slate-200 dark:hover:bg-gray-600">
                Subscribe
              </Button>
            </div>
          </motion.div>
        </div>
        <div className="mt-8 text-center text-sm text-gray-600 dark:text-gray-300">
          © 2024 ChainRent. All rights reserved.
        </div>
      </div>
    </footer>
  );
};

export default Footer;
