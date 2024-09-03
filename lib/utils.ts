import moment from "moment";
import { type ClassValue, clsx } from "clsx";
import { twMerge } from "tailwind-merge";

export function cn(...inputs: ClassValue[]) {
  return twMerge(clsx(inputs));
}

export const getRandomPriceAdjustment = (basePrice: number) => {
  const adjustment = Math.floor(Math.random() * 9) - 4;
  return Math.max(basePrice + adjustment, 0.1);
};

export const generatePriceHistory = (basePrice: number) => {
  const priceHistory = [];
  const currentDate = moment();

  for (let i = 0; i < 9; i++) {
    const randomDayOffset = Math.floor(Math.random() * 365);
    const randomDate = currentDate.clone().subtract(randomDayOffset, "days").format("YYYY-MM-DD");
    const adjustedPrice = getRandomPriceAdjustment(basePrice);

    priceHistory.push({
      date: randomDate,
      price: adjustedPrice,
    });
  }

  priceHistory.push({
    date: currentDate.format("YYYY-MM-DD"),
    price: basePrice,
  });

  return priceHistory.sort((a, b) => moment(a.date).diff(moment(b.date)));
};
