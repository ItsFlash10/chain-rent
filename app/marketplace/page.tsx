"use client";

import { useState } from "react";
import { Loader2 } from "lucide-react";
import { motion, AnimatePresence } from "framer-motion";

import { Button } from "@/components/ui/button";
import { NFT_DATA, NEW_NFT_DATA } from "@/lib/constants";
import NFTCard from "@/components/nftCard";
import AppBar from "@/components/appbar";
import Footer from "@/components/footer";

export default function Marketplace() {
  const [nfts, setNfts] = useState<Array<{ name: string; price: number | string; image: string }>>(NFT_DATA);
  const [loading, setLoading] = useState(false);
  const [page, setPage] = useState(1);

  const loadMoreNFTs = async () => {
    setLoading(true);
    // Simulate API call
    await new Promise((resolve) => setTimeout(resolve, 1500));
    const newNFTs = NEW_NFT_DATA.sort(() => Math.random() - 0.5);
    setNfts([...nfts, ...newNFTs]);
    setPage(page + 1);
    setLoading(false);
  };

  return (
    <div className="flex min-h-screen flex-col bg-gray-100 text-gray-800 dark:bg-[#09090b] dark:text-gray-200">
      <AppBar />
      <main className="container mx-auto flex-grow p-8">
        <motion.section
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5 }}
          className="mb-12 text-center"
        >
          <h1 className="mb-4 bg-gradient-to-r from-gray-700 to-gray-900 bg-clip-text text-4xl font-bold text-transparent dark:from-gray-300 dark:to-gray-100">
            Discover, Collect, and Rent Extraordinary NFTs
          </h1>
          <p className="mb-6 text-xl text-gray-600 dark:text-gray-300">
            Explore the world of digital art and experience the future
          </p>
        </motion.section>

        <section>
          <h2 className="mb-6 text-2xl font-semibold text-gray-800 dark:text-gray-200">Featured NFTs</h2>
          <div className="grid grid-cols-2 gap-6 sm:grid-cols-3 lg:grid-cols-5">
            <AnimatePresence>
              {nfts.map((nft, index) => (
                <NFTCard key={index} {...nft} />
              ))}
            </AnimatePresence>
          </div>
          <div className="mt-8 text-center">
            <Button
              onClick={loadMoreNFTs}
              disabled={loading}
              className="min-w-40 bg-gray-800 text-white hover:bg-gray-900 dark:bg-gray-700 dark:text-slate-200 dark:hover:bg-gray-600"
            >
              {loading ? (
                <>
                  <Loader2 className="mr-2 h-4 w-4 animate-spin" />
                  Loading...
                </>
              ) : (
                "Load More"
              )}
            </Button>
          </div>
        </section>
      </main>
      <Footer />
    </div>
  );
}
