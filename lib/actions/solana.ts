import axios from "axios";

export const getCurrentSolPrice = async () => {
  try {
    const response = await axios.get("https://api.coingecko.com/api/v3/simple/price?ids=solana&vs_currencies=usd");
    const price = response?.data?.solana?.usd;

    return price;
  } catch (error) {
    console.log("Error fetching SOL price", error);
  }
};
