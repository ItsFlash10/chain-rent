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
      <DialogContent className="sm:max-w-[425px] md:max-w-[700px]">
        <DialogHeader>
          <DialogTitle>{nft.name}</DialogTitle>
          <DialogDescription>Owned by: {nft.owner}</DialogDescription>
        </DialogHeader>
        <div className="grid gap-4 py-4 md:grid-cols-2">
          <div className="order-1 md:order-none">
            <img src={nft.image} alt={nft.name} className="w-full rounded-lg" />
          </div>
          <div className="space-y-4">
            <div>
              <h3 className="mb-2 text-lg font-semibold">Best Price</h3>
              <div className="flex items-center gap-2">
                <Image src={SolanaIcon} alt="My Icon" width={20} height={20} />
                <span className="text-2xl font-bold">{nft.price} SOL</span>
                <span className="text-muted-foreground ml-2 text-sm">
                  ${(nft.price * +currentSolanaPrice).toFixed(2)}
                </span>
              </div>
            </div>
            <Button className="w-full">Rent/Buy Now</Button>
            <div className="grid grid-cols-2 gap-4">
              <div className="bg-muted rounded-lg p-3">
                <h4 className="text-muted-foreground mb-1 text-sm">List Price</h4>
                <p className="font-semibold">{nft.listPrice} SOL</p>
              </div>
              <div className="bg-muted rounded-lg p-3">
                <h4 className="text-muted-foreground mb-1 text-sm">Floor Price</h4>
                <p className="font-semibold">{nft.floorPrice} SOL</p>
              </div>
              <div className="bg-muted rounded-lg p-3">
                <h4 className="text-muted-foreground mb-1 text-sm">Floor Diff.</h4>
                <p className="font-semibold">{nft.floorDiff}</p>
              </div>
              <div className="bg-muted rounded-lg p-3">
                <h4 className="text-muted-foreground mb-1 text-sm">Top Offer</h4>
                <p className="font-semibold">{nft.topOffer} SOL</p>
              </div>
            </div>
          </div>
        </div>
        <div className="mt-6">
          <h3 className="mb-2 text-lg font-semibold">Price History</h3>
          <div className="h-[200px] w-full">
            <ResponsiveContainer width="100%" height="100%">
              <LineChart data={nft.priceHistory}>
                <XAxis dataKey="date" />
                <YAxis />
                <Tooltip content={<CustomTooltip />} />
                <Line type="monotone" dataKey="price" stroke="#8884d8" />
              </LineChart>
            </ResponsiveContainer>
          </div>
        </div>
      </DialogContent>
    </Dialog>
  );
};

export default NFTDialog;
