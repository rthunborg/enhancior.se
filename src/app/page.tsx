import Link from "next/link";
import { TriageSelector } from "@/components/triage/triage-selector";

export default function Home() {
  return (
    <div className="flex min-h-screen flex-col items-center justify-center bg-[#0A0A0A] px-4">
      <div className="w-full max-w-2xl py-16 md:py-24 lg:py-32 xl:py-40">
        <h1 className="mb-10 text-center text-3xl font-bold tracking-tight text-[#EDEDED] sm:text-4xl lg:text-5xl">
          Vad är det som bromsar er?
        </h1>
        <TriageSelector />
        <div className="mt-10 flex flex-col sm:flex-row items-center justify-center gap-4">
          <Link
            href="/om"
            className="inline-flex items-center justify-center min-h-[44px] px-6 py-3 border border-[rgba(255,255,255,0.15)] hover:border-[#F59E0B] text-[#EDEDED] hover:text-[#F59E0B] font-semibold rounded-lg text-sm outline-none ring-offset-[#0A0A0A] focus-visible:ring-2 focus-visible:ring-[#F59E0B] focus-visible:ring-offset-2 transition-colors duration-200 ease-out motion-reduce:transition-none"
          >
            Mer om mig
          </Link>
          <a
            href="/cv/rasmus-thunborg-cv.pdf"
            download
            className="inline-flex items-center justify-center min-h-[44px] px-6 py-3 bg-[#F59E0B] hover:bg-[#D97706] text-[#0A0A0A] font-semibold rounded-lg text-sm outline-none ring-offset-[#0A0A0A] focus-visible:ring-2 focus-visible:ring-[#F59E0B] focus-visible:ring-offset-2 transition-colors duration-200 ease-out motion-reduce:transition-none"
          >
            Ladda ner CV
          </a>
        </div>
      </div>
    </div>
  );
}
