"use client";

import { useEffect, useState } from "react";

export type CalcTheme = "night" | "day";

const STORAGE_KEY = "parlay-calc-theme";

export function useCalcTheme(defaultTheme: CalcTheme = "night") {
  const [theme, setTheme] = useState<CalcTheme>(defaultTheme);
  const [ready, setReady] = useState(false);

  useEffect(() => {
    try {
      const stored = window.localStorage.getItem(STORAGE_KEY);
      if (stored === "day" || stored === "night") {
        setTheme(stored);
      }
    } catch {
      // ignore storage errors
    }
    setReady(true);
  }, []);

  useEffect(() => {
    if (!ready) return;
    try {
      window.localStorage.setItem(STORAGE_KEY, theme);
    } catch {
      // ignore storage errors
    }
  }, [theme, ready]);

  const toggleTheme = () => setTheme((prev) => (prev === "night" ? "day" : "night"));

  return { theme, setTheme, toggleTheme, isDay: theme === "day", ready };
}
