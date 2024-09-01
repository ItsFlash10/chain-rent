"use client";

import { BackgroundGradient } from "@/components/ui/background-gradient";
import Hero from "@/components/hero";

const Card = () => (
  <a
    href="https://nextjs.org/docs?utm_source=create-next-app&utm_medium=appdir-template&utm_campaign=create-next-app"
    className="group rounded-lg border border-transparent px-5 py-4 transition-colors hover:border-gray-300 hover:bg-gray-100 hover:dark:border-neutral-700 hover:dark:bg-neutral-800/30"
    target="_blank"
    rel="noopener noreferrer"
  >
    <BackgroundGradient className="max-w-sm rounded-[22px] bg-white p-4 dark:bg-zinc-900 sm:p-10">
      <h2 className="mb-3 text-2xl font-semibold">
        Docs
        <span className="inline-block transition-transform group-hover:translate-x-1 motion-reduce:transform-none">
          -&gt;
        </span>
      </h2>
      <p className="m-0 max-w-[30ch] text-sm opacity-50">Find in-depth information about Next.js features and API.</p>
    </BackgroundGradient>
  </a>
);

export default function Home() {
  return (
    <>
      <Hero />
    </>
  );
}
