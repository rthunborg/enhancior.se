"use client";

import { useState, useEffect } from "react";
import { AnimatePresence, motion } from "framer-motion";
import { useContactModal } from "@/components/contact";

export function FloatingCta() {
  const { openContactModal } = useContactModal();
  const [pastScroll, setPastScroll] = useState(false);
  const [footerVisible, setFooterVisible] = useState(false);

  useEffect(() => {
    const scrollEl = document.getElementById("scroll-sentinel");
    const footerEl = document.getElementById("footer-sentinel");
    if (!scrollEl || !footerEl) return;

    const scrollObserver = new IntersectionObserver(
      ([entry]) => setPastScroll(!entry.isIntersecting),
      { threshold: 0 },
    );

    const footerObserver = new IntersectionObserver(
      ([entry]) => setFooterVisible(entry.isIntersecting),
      { threshold: 0 },
    );

    scrollObserver.observe(scrollEl);
    footerObserver.observe(footerEl);

    return () => {
      scrollObserver.disconnect();
      footerObserver.disconnect();
    };
  }, []);

  const visible = pastScroll && !footerVisible;

  return (
    <AnimatePresence>
      {visible && (
        <motion.button
          type="button"
          onClick={() => openContactModal()}
          aria-label="Boka ett samtal"
          className="fixed bottom-6 left-1/2 z-40 -translate-x-1/2 rounded-full bg-[#F59E0B] px-6 py-3 text-sm font-semibold text-[#0A0A0A] shadow-lg shadow-amber-500/20 min-h-12 min-w-12 md:hidden focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-[#F59E0B] focus-visible:ring-offset-2 focus-visible:ring-offset-[#0A0A0A] motion-reduce:transition-none"
          initial={{ opacity: 0, y: 20, x: "-50%" }}
          animate={{ opacity: 1, y: 0, x: "-50%" }}
          exit={{ opacity: 0, y: 20, x: "-50%" }}
          transition={{ duration: 0.25, ease: "easeOut" }}
        >
          Boka ett samtal
        </motion.button>
      )}
    </AnimatePresence>
  );
}
