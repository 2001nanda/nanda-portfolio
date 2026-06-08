"use client";

import { useState, useEffect } from "react";
import { motion, AnimatePresence } from "framer-motion";

export default function LoadingScreen() {
  const [isLoading, setIsLoading] = useState(true);

  useEffect(() => {
    // Simulate loading and then hide
    const timer = setTimeout(() => {
      setIsLoading(false);
    }, 1800);

    return () => clearTimeout(timer);
  }, []);

  return (
    <AnimatePresence>
      {isLoading && (
        <motion.div
          initial={{ opacity: 1 }}
          exit={{ opacity: 0, scale: 0.95 }}
          transition={{ duration: 0.5, ease: "easeInOut" }}
          className="fixed inset-0 z-[200] flex items-center justify-center bg-black"
          aria-label="Loading"
        >
          <div className="flex flex-col items-center gap-6">
            {/* Animated Logo */}
            <motion.div
              initial={{ scale: 0, rotate: -180 }}
              animate={{ scale: 1, rotate: 0 }}
              transition={{
                type: "spring",
                stiffness: 200,
                damping: 15,
                delay: 0.2,
              }}
              className="relative"
            >
              <div className="h-16 w-16 rounded-2xl bg-gradient-to-br from-primary-500 to-secondary-500 flex items-center justify-center">
                <span className="text-2xl font-bold text-white">NK</span>
              </div>
              {/* Glow ring */}
              <motion.div
                animate={{ scale: [1, 1.2, 1], opacity: [0.5, 0, 0.5] }}
                transition={{ duration: 2, repeat: Infinity }}
                className="absolute inset-0 rounded-2xl bg-gradient-to-br from-primary-500 to-secondary-500 blur-xl opacity-30"
              />
            </motion.div>

            {/* Loading bar */}
            <div className="w-48 h-0.5 bg-white/10 rounded-full overflow-hidden">
              <motion.div
                initial={{ x: "-100%" }}
                animate={{ x: "100%" }}
                transition={{
                  duration: 1,
                  repeat: Infinity,
                  ease: "easeInOut",
                }}
                className="h-full w-1/2 bg-gradient-to-r from-primary-500 to-secondary-500 rounded-full"
              />
            </div>
          </div>
        </motion.div>
      )}
    </AnimatePresence>
  );
}
