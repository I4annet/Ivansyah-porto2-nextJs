"use client";

import { useTheme } from "./ThemeProvider";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faSun, faMoon } from "@fortawesome/free-solid-svg-icons";
import { motion, AnimatePresence } from "framer-motion";
import { useEffect, useState } from "react";

export default function ThemeToggle() {
  const { theme, setTheme } = useTheme();
  const [mounted, setMounted] = useState(false);
  const [resolvedTheme, setResolvedTheme] = useState<"light" | "dark">("light");

  // Avoid Hydration Mismatch
  useEffect(() => {
    setMounted(true);
  }, []);

  // Sync and resolve system vs explicit theme
  useEffect(() => {
    if (!mounted) return;

    const resolveTheme = () => {
      if (theme === "system") {
        return window.matchMedia("(prefers-color-scheme: dark)").matches ? "dark" : "light";
      }
      return theme;
    };

    setResolvedTheme(resolveTheme());

    if (theme === "system") {
      const mediaQuery = window.matchMedia("(prefers-color-scheme: dark)");
      const handleChange = () => {
        setResolvedTheme(mediaQuery.matches ? "dark" : "light");
      };
      mediaQuery.addEventListener("change", handleChange);
      return () => mediaQuery.removeEventListener("change", handleChange);
    }
  }, [theme, mounted]);

  if (!mounted) return null;

  const toggleTheme = () => {
    setTheme(resolvedTheme === "dark" ? "light" : "dark");
  };

  return (
    <button
      onClick={toggleTheme}
      className="fixed top-6 right-6 z-50 flex h-11 w-11 items-center justify-center rounded-full 
                 bg-white/80 dark:bg-slate-900/80 backdrop-blur-md 
                 border border-slate-200/50 dark:border-slate-800/50 
                 shadow-lg dark:shadow-slate-950/40 cursor-pointer
                 hover:scale-105 active:scale-95 transition-all duration-200"
      aria-label="Toggle theme"
    >
      <AnimatePresence mode="wait" initial={false}>
        {resolvedTheme === "dark" ? (
          <motion.div
            key="sun"
            initial={{ rotate: -90, opacity: 0, scale: 0.8 }}
            animate={{ rotate: 0, opacity: 1, scale: 1 }}
            exit={{ rotate: 90, opacity: 0, scale: 0.8 }}
            transition={{ duration: 0.2 }}
            className="flex items-center justify-center text-amber-400 text-lg"
          >
            <FontAwesomeIcon icon={faSun} />
          </motion.div>
        ) : (
          <motion.div
            key="moon"
            initial={{ rotate: 90, opacity: 0, scale: 0.8 }}
            animate={{ rotate: 0, opacity: 1, scale: 1 }}
            exit={{ rotate: -90, opacity: 0, scale: 0.8 }}
            transition={{ duration: 0.2 }}
            className="flex items-center justify-center text-slate-700 text-lg"
          >
            <FontAwesomeIcon icon={faMoon} />
          </motion.div>
        )}
      </AnimatePresence>
    </button>
  );
}
