import axios from "axios";
import { NextRequest, NextResponse } from "next/server";

export async function GET(req: NextRequest) {
  //   const url = new URL(req.url);
  //   const searchParams = new URLSearchParams(url.search);
  //   const contentId = searchParams.get("contentId");
  //   const session = await getServerSession(authOptions);

  //   if (!session || !session?.user || !contentId) {
  //     return NextResponse.json({}, { status: 401 });
  //   }

  // gated API request to fetch SOL current price
  const response = await axios.get("https://api.coingecko.com/api/v3/simple/price?ids=solana&vs_currencies=usd");
  const price = response?.data?.solana?.usd;

  return NextResponse.json({
    price,
  });
}
