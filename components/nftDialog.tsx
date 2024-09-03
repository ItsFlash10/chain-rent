"use client";

import React from "react";
import Image from "next/image";
import { LineChart, Line, XAxis, YAxis, Tooltip, ResponsiveContainer } from "recharts";
import { useRecoilValue } from "recoil";

import { Dialog, DialogContent, DialogHeader, DialogTitle, DialogDescription } from "@/components/ui/dialog";
import { Button } from "@/components/ui/button";
import SolanaIcon from "@/public/solana.svg";
import { solanaPrice } from "@/store";

interface NFTDialogProps {
  isOpen: boolean;
  onClose: () => void;
  nft: {
    name: string;
    price: number;
    image: string;
    owner: string;
    listPrice: number;
    floorPrice: number;
    floorDiff: string;
    topOffer: number;
    priceHistory: { date: string; price: number }[];
  };
}

const CustomTooltip = ({ active, payload }: any) => {
  if (active && payload && payload.length) {
    return (
      <div className="custom-tooltip">
        <p className="text-sm font-semibold">{`${payload[0].value.toFixed(2)} SOL`}</p>
      </div>
    );
  }

  return null;
};

const NFTDialog: React.FC<NFTDialogProps> = ({ isOpen, onClose, nft }) => {
  const currentSolanaPrice = useRecoilValue(solanaPrice);
  console.log({ currentSolanaPrice });

  return (
    <Dialog open={isOpen} onOpenChange={onClose}>
      <DialogContent className="max-h-[90vh] overflow-y-auto sm:max-w-[425px] md:max-w-[700px]">
        <DialogHeader>
          <DialogTitle className="text-xl sm:text-2xl">{nft.name}</DialogTitle>
          <DialogDescription className="text-sm sm:text-base">Owned by: {nft.owner}</DialogDescription>
        </DialogHeader>
        <div className="grid gap-4 py-4 sm:grid-cols-2">
          <div className="order-1 sm:order-none">
            <img src={nft.image} alt={nft.name} className="w-full rounded-lg" />
          </div>
          <div className="space-y-4">
            <div>
              <h3 className="mb-2 text-base font-semibold sm:text-lg">Best Price</h3>
              <div className="flex items-center gap-2">
                <Image src={SolanaIcon} alt="Solana Icon" width={20} height={20} />
                <span className="text-xl font-bold sm:text-2xl">{nft.price} SOL</span>
                <span className="text-muted-foreground ml-2 text-xs sm:text-sm">
                  ${(nft.price * +currentSolanaPrice).toFixed(2)}
                </span>
              </div>
            </div>
            <Button className="w-full">Rent/Buy Now</Button>
            <div className="grid grid-cols-2 gap-2 sm:gap-4">
              <div className="bg-muted rounded-lg p-2 sm:p-3">
                <h4 className="text-muted-foreground mb-1 text-xs sm:text-sm">List Price</h4>
                <p className="text-sm font-semibold sm:text-base">{nft.listPrice} SOL</p>
              </div>
              <div className="bg-muted rounded-lg p-2 sm:p-3">
                <h4 className="text-muted-foreground mb-1 text-xs sm:text-sm">Floor Price</h4>
                <p className="text-sm font-semibold sm:text-base">{nft.floorPrice} SOL</p>
              </div>
              <div className="bg-muted rounded-lg p-2 sm:p-3">
                <h4 className="text-muted-foreground mb-1 text-xs sm:text-sm">Floor Diff.</h4>
                <p className="text-sm font-semibold sm:text-base">{nft.floorDiff}</p>
              </div>
              <div className="bg-muted rounded-lg p-2 sm:p-3">
                <h4 className="text-muted-foreground mb-1 text-xs sm:text-sm">Top Offer</h4>
                <p className="text-sm font-semibold sm:text-base">{nft.topOffer} SOL</p>
              </div>
            </div>
          </div>
        </div>
        <div className="mt-4 sm:mt-6">
          <h3 className="mb-2 text-base font-semibold sm:text-lg">Price History</h3>
          <div className="h-[200px] w-full">
            <ResponsiveContainer width="100%" height="100%">
              <LineChart data={nft.priceHistory} margin={{ top: 5, right: 5, left: 0, bottom: 5 }}>
                <XAxis
                  dataKey="date"
                  tick={{ fontSize: 10 }}
                  interval="preserveStartEnd"
                  tickFormatter={(value) => value.split("-")[1]}
                />
                <YAxis tick={{ fontSize: 10 }} />
                <Tooltip content={<CustomTooltip />} />
                <Line type="monotone" dataKey="price" stroke="#8884d8" strokeWidth={2} dot={false} />
              </LineChart>
            </ResponsiveContainer>
          </div>
        </div>
      </DialogContent>
    </Dialog>
  );
};

export default NFTDialog;
