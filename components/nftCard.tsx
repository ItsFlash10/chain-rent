import Image from "next/image";

import SolanaIcon from "@/public/solana.svg";

import { Button } from "./ui/button";
import { Card, CardHeader, CardContent, CardTitle, CardFooter } from "./ui/card";
import { BackgroundGradient } from "./ui/background-gradient";

const NFTCard = ({ name, price, image }: { name: string; price: string | number; image: string }) => {
  return (
    <BackgroundGradient className="cursor-pointer">
      <Card className="overflow-hidden border-none">
        <CardHeader className="overflow-hidden p-0">
          <img
            alt={name}
            className="w-full object-cover transition-transform duration-300 hover:scale-110"
            src={image}
          />
        </CardHeader>
        <CardContent className="p-4">
          <CardTitle className="text-lg text-gray-800 dark:text-gray-100">{name}</CardTitle>
        </CardContent>
        <CardFooter className="flex items-center justify-between p-4 sm:gap-2">
          <div className="flex items-center gap-2 text-gray-600 dark:text-gray-300">
            <Image src={SolanaIcon} alt="My Icon" width={20} height={20} />
            {/* TODO: This causes a disparity in the price coz of the decimal places atm */}
            {Number.isInteger(Number(price)) ? price : Number(price).toFixed(1)} SOL
          </div>
          <Button
            size="sm"
            className="bg-gray-800 text-white hover:bg-gray-900 dark:bg-gray-800 dark:text-slate-200 dark:hover:bg-gray-600"
          >
            Rent Now
          </Button>
        </CardFooter>
      </Card>
    </BackgroundGradient>
  );
};
export default NFTCard;
