import dynamic from "next/dynamic";

const HeroComponent = dynamic(() => import("@/components/hero"), {
  ssr: false,
});

export default function Home() {
  return <HeroComponent />;
}
