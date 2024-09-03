"use client";

import * as React from "react";
import { ThemeProvider as NextThemesProvider } from "next-themes";
import { type ThemeProviderProps } from "next-themes/dist/types";
import { RecoilRoot } from "recoil";

export const Providers = ({ children }: { children: React.ReactNode }) => {
  return <RecoilRoot>{children}</RecoilRoot>;
};

export function ThemeProvider({ children, ...props }: ThemeProviderProps) {
  return <NextThemesProvider {...props}>{children}</NextThemesProvider>;
}
