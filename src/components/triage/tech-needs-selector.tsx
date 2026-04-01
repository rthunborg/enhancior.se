"use client";

import { useRef, useState, useCallback } from "react";
import Link from "next/link";
import { useRouter } from "next/navigation";

const FORK_OPTIONS = [
  {
    id: "build",
    label: "Vi bygger egen teknik",
    description:
      "Ni har eller planerar ett eget utvecklingsteam och behöver en erfaren teknisk ledare som styr skeppet.",
    href: "/founder-rescue",
    ariaLabel:
      "Vi bygger egen teknik. Välj för att se lösningar för teknisk ledning.",
  },
  {
    id: "buy",
    label: "Vi köper in IT-system",
    description:
      "Ni ska upphandla eller har upphandlat ett IT-system och behöver oberoende rådgivning innan ni skriver på.",
    href: "/it-advisory",
    ariaLabel:
      "Vi köper in IT-system. Välj för att se oberoende IT-rådgivning.",
  },
] as const;

export function TechNeedsSelector() {
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
    const len = FORK_OPTIONS.length;

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
        router.push(FORK_OPTIONS[focusedIndex].href);
        break;
      }
    }
  }

  return (
    <div className="w-full max-w-2xl mx-auto">
      <div
        role="radiogroup"
        aria-label="Välj typ av teknikbehov"
        onKeyDown={handleKeyDown}
        className="flex flex-col gap-4"
      >
        {FORK_OPTIONS.map((option, index) => (
          <Link
            key={option.id}
            href={option.href}
            ref={setCardRef(index)}
            role="radio"
            aria-checked={focusedIndex === index}
            aria-label={option.ariaLabel}
            tabIndex={focusedIndex === index ? 0 : -1}
            onFocus={() => setFocusedIndex(index)}
            className="block rounded-lg border border-[rgba(255,255,255,0.08)] bg-[#111111] p-6 text-base font-normal text-[#EDEDED] no-underline outline-none ring-offset-[#0A0A0A] transition-[border-color,box-shadow] duration-200 ease-out hover:border-[#F59E0B] hover:shadow-[0_0_20px_rgba(245,158,11,0.15)] focus-visible:ring-2 focus-visible:ring-[#F59E0B] focus-visible:ring-offset-2 motion-reduce:transition-none"
          >
            <p className="text-lg font-semibold text-[#EDEDED] mb-2">
              {option.label}
            </p>
            <p className="text-sm text-[#A1A1A1]">{option.description}</p>
          </Link>
        ))}
      </div>
    </div>
  );
}
