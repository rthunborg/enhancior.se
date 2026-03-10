"use client";
import { useContactModal } from "@/components/contact";

export function ContactCTA() {
  const { openContactModal } = useContactModal();
  return (
    <button
      type="button"
      onClick={() => openContactModal()}
      className="inline-flex items-center justify-center min-h-11 rounded-lg bg-[#F59E0B] px-8 py-3 text-base font-semibold text-[#0A0A0A] no-underline outline-none ring-offset-[#0A0A0A] transition-colors duration-200 ease-out hover:bg-[#D97706] focus-visible:ring-2 focus-visible:ring-[#F59E0B] focus-visible:ring-offset-2 motion-reduce:transition-none"
    >
      Kontakta oss
    </button>
  );
}
