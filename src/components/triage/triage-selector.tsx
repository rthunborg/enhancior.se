"use client";

import { useRef, useState, useCallback } from "react";
import Link from "next/link";
import { useRouter } from "next/navigation";

const TRIAGE_OPTIONS = [
  {
    id: "cto-crisis",
    label: "Features tar evigheter att skeppa och teknisk skuld bromsar oss.",
    href: "/cto-crisis",
    ariaLabel:
      "Features tar evigheter att skeppa och teknisk skuld bromsar oss. Välj för att se lösningar.",
  },
  {
    id: "cto-proactive",
    label: "Teamet växer snabbt, men arkitekturen hänger inte med.",
    href: "/cto-proactive",
    ariaLabel:
      "Teamet växer snabbt, men arkitekturen hänger inte med. Välj för att se lösningar.",
  },
  {
    id: "founder-rescue",
    label:
      "Vi saknar rätt senior tech-kompetens för att ta oss till nästa nivå.",
    href: "/founder-rescue",
    ariaLabel:
      "Vi saknar rätt senior tech-kompetens för att ta oss till nästa nivå. Välj för att se lösningar.",
  },
] as const;

export function TriageSelector() {
  const [focusedIndex, setFocusedIndex] = useState(0);
  const cardRefs = useRef<(HTMLAnchorElement | null)[]>([]);
  const router = useRouter();

  const setCardRef = useCallback(
    (index: number) => (el: HTMLAnchorElement | null) => {
      cardRefs.current[index] = el;
    },
    [],
  );

  function handleKeyDown(e: React.KeyboardEvent) {
    const len = TRIAGE_OPTIONS.length;

    switch (e.key) {
      case "ArrowDown":
      case "ArrowRight": {
        e.preventDefault();
        const next = (focusedIndex + 1) % len;
        setFocusedIndex(next);
        cardRefs.current[next]?.focus();
        break;
      }
      case "ArrowUp":
      case "ArrowLeft": {
        e.preventDefault();
        const prev = (focusedIndex - 1 + len) % len;
        setFocusedIndex(prev);
        cardRefs.current[prev]?.focus();
        break;
      }
      case "Enter":
      case " ": {
        e.preventDefault();
        router.push(TRIAGE_OPTIONS[focusedIndex].href);
        break;
      }
    }
  }

  return (
    <div className="w-full max-w-2xl mx-auto">
      <div
        role="radiogroup"
        aria-label="Välj ditt tekniska symptom"
        onKeyDown={handleKeyDown}
        className="flex flex-col gap-4"
      >
        {TRIAGE_OPTIONS.map((option, index) => (
          <Link
            key={option.id}
            href={option.href}
            ref={setCardRef(index)}
            role="radio"
            aria-checked={focusedIndex === index}
            aria-label={option.ariaLabel}
            tabIndex={focusedIndex === index ? 0 : -1}
            onFocus={() => setFocusedIndex(index)}
            className="block rounded-lg border border-[rgba(255,255,255,0.08)] bg-[#111111] p-6 text-base font-normal text-[#EDEDED] no-underline outline-none ring-offset-[#0A0A0A] transition-[border-color,box-shadow] duration-200 ease-out hover:border-[#F59E0B] hover:shadow-[0_0_20px_rgba(245,158,11,0.15)] focus-visible:ring-2 focus-visible:ring-[#F59E0B] focus-visible:ring-offset-2 motion-reduce:transition-none sm:text-lg"
          >
            {option.label}
          </Link>
        ))}
      </div>

      <div className="mt-8 text-center">
        <Link
          href="/vendor-packet"
          className="min-h-11 inline-flex items-center text-sm text-[#A1A1A1] no-underline outline-none ring-offset-[#0A0A0A] transition-colors duration-200 ease-out hover:text-[#F59E0B] focus-visible:ring-2 focus-visible:ring-[#F59E0B] focus-visible:ring-offset-2 motion-reduce:transition-none"
        >
          Enterprise: LOU, Compliance & Leverantörsinfo &rarr;
        </Link>
      </div>
    </div>
  );
}
